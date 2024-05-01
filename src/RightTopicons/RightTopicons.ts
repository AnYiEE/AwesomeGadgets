import {LIBdictionary} from './modules/PermissionData';
$(() => {
	const WikiURLName = window.location.pathname;
	const matchResult = /^\/wiki\/User:[^/]*$/.test(WikiURLName);
	if (!matchResult) {
		return;
	}
	const [_, userNameMatch] = WikiURLName.match(/User:(.*)$/) || [];
	const UserMessage = `${mw.config.get('wgServer')}/api.php?action=query&list=users&usprop=groups&format=json&ususers=${userNameMatch}`;

	type VirtualDOMNode = {
		tag: string;
		props: Record<string, string | number | boolean>;
		children?: VirtualDOMNode[];
	};

	const createVirtualLinkImg = (href: string, aimgsrc: string): object => {
		return {
			tag: 'a',
			props: {
				href,
				style: 'display: inline-block;',
			},
			children: [
				{
					tag: 'img',
					props: {
						src: aimgsrc,
						style: 'width: 39px; margin: 0 3px;',
					},
				},
			],
		};
	};

	const renderVirtualDOM = (virtualDOM: VirtualDOMNode[], container: JQuery<HTMLElement>) => {
		if (!(container instanceof jQuery)) {
			container = $(container);
		}

		const createRealNode = (virtualNode: VirtualDOMNode): JQuery<HTMLElement> => {
			const {tag, props, children} = virtualNode;
			const realNode = $(`<${tag}>`);
			for (const propName of Object.keys(props)) {
				realNode.attr(propName, String(props[propName]));
			}
			if (children) {
				for (const childVirtualNode of children) {
					const childRealNode = createRealNode(childVirtualNode);
					realNode.append(childRealNode);
				}
			}
			return realNode;
		};

		const realNodes = virtualDOM.map((virtualNode) => {
			const realNode = createRealNode(virtualNode);
			return realNode;
		});

		for (const node of realNodes) {
			container.append(node);
		}
	};
	const ArrayDataSort = <DataType extends {id: number}>(dataArray: DataType[]) => {
		dataArray.sort((a, b) => {
			return a.id - b.id;
		});
		if (dataArray.length > 3) {
			return dataArray.slice(0, 3);
		}
		return dataArray;
	};

	type UserData = {
		groups: string[];
	};
	const fetchUserData = (): Promise<UserData> => {
		return new Promise((resolve, reject) => {
			if (!UserMessage) {
				reject(new Error('UserMessage is not defined'));
			}
			$.get(
				UserMessage,
				(data) => {
					const userData: UserData = {
						groups: data.query.users[0].groups as string[],
					};
					console.log(userData);
					resolve(userData);
				},
				'json'
			)
				.then(() => {})
				.catch(reject);
		});
	};

	fetchUserData()
		.then((userData: UserData) => {
			if (!userData || !Array.isArray(userData.groups)) {
				console.error(
					new Error('Invalid userData.groups: expected an array but received none or a non-array.')
				);
				return;
			}

			const matchedGroups = userData.groups
				.filter((group): group is string => {
					return typeof group === 'string' && Object.hasOwn(LIBdictionary, group);
				})
				.map((group) => {
					return LIBdictionary[group];
				});

			interface ImageItem {
				src: string;
				aimgsrc: string;
				id: number;
			}
			const firstThreeItems = ArrayDataSort(matchedGroups as unknown as ImageItem[]);
			const virtualDOM = firstThreeItems.map((imgData) => {
				return imgData?.src && imgData?.aimgsrc ? createVirtualLinkImg(imgData.src, imgData.aimgsrc) : null;
			}) as VirtualDOMNode[];
			const $body: JQuery<HTMLBodyElement> = $('body');
			const $dommountpoint: JQuery = $body.find('#content header.mw-body-header .page-heading .mw-indicators');
			renderVirtualDOM(virtualDOM, $dommountpoint);
		})
		.catch((error) => {
			console.error('最终请求失败，不再重试:', error);
		});
});
