import {LIBdictionary} from "./PermissionData.ts";
$(function(){
		let WikiURLName = window.location.pathname;
		let matchResult = /^\/wiki\/User:[^\/]*$/.test(WikiURLName);
		if (!matchResult) {
			return;
		}
		let userNameMatch = (WikiURLName.match(/User:(.*)$/) || [])[1];
		let UserMessage = `${mw.config.get('wgServer')}/api.php?action=query&list=users&usprop=groups&format=json&ususers=${userNameMatch}`;

	type VirtualDOMNode = {
		tag: string;
		props: Record<string, string | number | boolean>;
		children?: VirtualDOMNode[];
	};

    function createVirtualLinkImg(href: string, aimgsrc: string) {
        return {
            tag: 'a',
            props: {
                href: href,
                style: 'display: inline-block;'
            },
            children: [{
                tag: 'img',
                props: {
                    src: aimgsrc,
                    style: 'width: 39px; margin: 0 3px;'
                }
            }]
        };
    }

    function renderVirtualDOM(virtualDOM: VirtualDOMNode[], container: JQuery<HTMLElement>) {
        if (!(container instanceof jQuery)) {
            container = $(container);
        }
        function createRealNode(virtualNode: VirtualDOMNode): JQuery<HTMLElement> {
			const { tag, props, children } = virtualNode;
			const realNode = $("<" + tag + ">");
			Object.keys(props).forEach(propName => {
				realNode.attr(propName, String(props[propName]));
			});
			if (children) {
				children.forEach(childVirtualNode => {
					const childRealNode = createRealNode(childVirtualNode);
					realNode.append(childRealNode);
				});
			}

			return realNode;
		}
        const realNodes = virtualDOM.map(virtualNode => createRealNode(virtualNode));
        realNodes.forEach(node => {
            container.append(node);
        });
    }
	function ArrayDataSort<DataType extends { id: number }>(dataArray: DataType[]): DataType[] {
		dataArray.sort((a, b) => a.id - b.id);
    	if (dataArray.length > 3) {
        	return dataArray.slice(0, 3);
    	}
    	return dataArray;
	}

	type UserData = {
		groups: string[];
	};
    function fetchUserData(): Promise<UserData> {
        return new Promise((resolve, reject) => {
			if (!UserMessage) {
				return reject(new Error("UserMessage is not defined"));
			}
            $.get(UserMessage, function(data) {
                const userData: UserData = data.query.users[0].groups ;
                resolve(userData);
            }, "json").fail(reject);
        });
    }


let retryCount = 0;

function fetchUserDataWithRetry(): Promise<UserData> {
    return fetchUserData().catch(error => {
        retryCount++;
        if (retryCount <= 3) {
            console.warn(`请求失败，正在进行第${retryCount}次重试...`);
            return fetchUserDataWithRetry();
        } else {
            console.error("请求失败，已达到最大重试次数:", error);
            throw error;
        }
    });
}

fetchUserDataWithRetry().then((UserData: UserData) => {
    if (!UserData || !Array.isArray(UserData)) {
        console.error("谢特", UserData);
        return;
    }

    let matchedGroups = UserData
        .filter(group => LIBdictionary.hasOwnProperty(group))
        .map(group => LIBdictionary[group]);
    let firstThreeItems = ArrayDataSort(matchedGroups as unknown as {
        src: any;
        aimgsrc: any;
        id: number
    }[]);
    const virtualDOM = firstThreeItems.map((imgData) =>
        (imgData?.src && imgData?.aimgsrc ? createVirtualLinkImg(imgData.src, imgData.aimgsrc) : null) as VirtualDOMNode);
    let dommountpoint = $("#content header.mw-body-header .page-heading .mw-indicators");
    renderVirtualDOM(virtualDOM, dommountpoint);
}).catch(error => {
    console.error("最终请求失败，不再重试:", error);
});
})
