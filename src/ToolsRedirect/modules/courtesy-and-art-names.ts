// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const toolsRedirect_courtesy_and_art_names = (): void => {
	const prefixRegex = /[号字號]\s*$/;
	const compSurnames = [
		'欧阳',
		'歐陽',
		'令狐',
		'皇甫',
		'上官',
		'司徒',
		'诸葛',
		'諸葛',
		'司马',
		'司馬',
		'宇文',
		'呼延',
		'端木',
		'申屠',
		'尉迟',
		'尉遲',
		'轩辕',
		'軒轅',
		'夏侯',
		'南宫',
		'南宮',
		'司空',
		'鲜于',
		'鮮于',
		'西门',
		'西門',
		'独孤',
		'獨孤',
		'东方',
		'東方',
		'司寇',
		'羊舌',
		'第五',
		'梁丘',
		'锺离',
		'鍾離',
		'东郭',
		'東郭',
		'公孙',
		'公孫',
		'孟孙',
		'孟孫',
		'仲孙',
		'仲孫',
		'叔孙',
		'叔孫',
		'季孙',
		'季孫',
		'长孙',
		'長孫',
		'慕容',
		'闾丘',
		'閭丘',
		'东门',
		'東門',
		'公羊',
		'万俟',
		'百里',
		'公冶',
		'呼延',
		'浮屠',
		'即墨',
		'单于',
		'單于',
		'田丘',
	];
	const compSurnameRegex = new RegExp(`^(${compSurnames.join('|')}).`);
	const findSurname = (pagename: string) => {
		if (compSurnameRegex.test(pagename)) {
			return compSurnameRegex.exec(pagename)[1];
		}
		return pagename[0];
	};
	window.toolsRedirect.findRedirectCallback((pagename, $content) => {
		let surname;
		const titles: string[] = [];
		$content.find('> p > b').each((_index, element) => {
			const previousNode = element.previousSibling;
			if (previousNode && prefixRegex.test(previousNode.textContent)) {
				const name = $(element).text().trim();
				if (!surname) {
					surname = findSurname(pagename);
				}
				titles.push(surname + name);
			}
		});
		return [...new Set(titles)];
	});
};
