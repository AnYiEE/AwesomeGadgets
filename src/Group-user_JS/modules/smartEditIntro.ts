import {IS_WG_EDIT_OR_SUBMIT_ACTION, WG_CATEGORIES, WG_NAMESPACE_NUMBER} from './constant';

const smartEditIntro = ($body: JQuery<HTMLBodyElement>): void => {
	if (!WG_CATEGORIES) {
		return;
	}

	const $target: JQuery<HTMLAnchorElement> = $body.find('.mw-editsection, #ca-edit, #ca-addsection').find('a');
	const addEditIntro = (name: string): void => {
		for (const element of $target) {
			element.href = `${element.href}&editintro=${name}`;
		}
	};

	switch (WG_NAMESPACE_NUMBER) {
		case 0:
			if (WG_CATEGORIES.includes('全部消歧义页面')) {
				addEditIntro('Template:Disambig_editintro');
			}
			if (WG_CATEGORIES.includes('在世人物')) {
				addEditIntro('Template:BLP_editintro');
			}
			if (
				WG_CATEGORIES.some((element: string): boolean => {
					return /抗日?[战戰][争爭]?[牺犧]牲|烈士|[战戰][斗鬥鬦]英雄|英雄?模[範范]?|英雄?烈士?|人民(教育家|[艺藝][术術]家|科[学學]家|英雄|楷模)|共和[国國][勋勳]章|[七八]一[勋勳]章[獲获]得者|[一特]等功臣/.test(
						element
					);
				})
			) {
				addEditIntro('Template:BLP_editintro');
			}
			break;
		case 4:
			if (WG_CATEGORIES.includes('有兽档案馆条例完整列表')) {
				addEditIntro('Template:Policy_editintro');
			}
			break;
		case 8:
		case 12: {
			if (WG_CATEGORIES.includes('CC-BY-NC-SA-4.0')) {
				addEditIntro('Template:NonCommercial_editintro');
			}
			if (WG_CATEGORIES.includes('GPL-3.0')) {
				addEditIntro('Template:GPL-3.0_editintro');
			}
			if (WG_CATEGORIES.includes('GPL-2.0-or-later')) {
				addEditIntro('Template:GPL-2.0-or-later_editintro');
			}
			if (WG_CATEGORIES.includes('MIT许可证')) {
				addEditIntro('Template:MIT_editintro');
			}
			const $copywarn: JQuery = $body.find('#editpage-copywarn');
			const $editintro: JQuery = $body.find('.mw-editintro');
			if (IS_WG_EDIT_OR_SUBMIT_ACTION && $copywarn && $editintro) {
				$editintro.appendTo($copywarn);
			}
			break;
		}
	}
};

export {smartEditIntro};
