import {localize} from 'ext.gadget.i18n';

export const easy_archive_lang = () => {
	window.easy_archive.lang = {
		delete: localize({
			en: 'delete',
			'zh-hans': '删除',
			'zh-hant': '刪除',
		}),
		archive: localize({
			en: 'archive',
			'zh-hans': '存档',
			'zh-hant': '存檔',
		}),
		supports: localize({
			en: 'Easy Archive is enabled on this talk page',
			'zh-hans': '本讨论页面使用 Easy Archive 快速存档',
			'zh-hant': '此頁面使用 Easy Archive',
		}),
		others_page: localize({
			en: 'Easy Archive is not enabled.',
			'zh-hans': '此页面是他人的用户讨论页面，因此不支持 Easy Archive 快速存档。',
			'zh-hant': '此頁面為他人用戶討論頁面，故不支援 Easy Archive 快速存檔。',
		}),
		to_enable: localize({
			en: 'This page is not using Easy Archive.',
			'zh-hans': '此页面没有启用 Easy Archive。',
			'zh-hant': '本頁没有啟用 Easy Archive。',
		}),
		enable_on_generic_page: localize({
			en: 'This page is not your user talk page. However Easy Archive still can be used if needed.To enable it, add {{Easy Archive|to=[Archive location]}} template to this page.',
			'zh-hans':
				'此页面不是您的用户讨论页面。不过，若需要，此页面可以启用 Easy Archive。若要在此页面使用 Easy Archive，请在页面上添加模板 {{Easy Archive|to=存档位置}}。',
			'zh-hant':
				'此頁面不是您的用戶討論頁面。不過，若需要，此頁面可以啟用 Easy Archive。若要在此頁面使用 Easy Archive，請在頁面上添加模板 {{Easy Archive|to=存檔位置}}。',
		}),
		please_enable: localize({
			en: 'Add {{Easy Archive|to=[Archive location]}} to this page to start using Easy Archive.',
			'zh-hans': '请在此页面加入 {{Easy Archive|to=存档地址}} 来启用 Easy Archive。',
			'zh-hant': '請在此頁面加入 {{Easy Archive|to=存檔位置}} 來啟用 Easy Archive。',
		}),
		please_enable_elaborate: localize({
			en: "You have the Easy Archive functionality enabled but your talk page hasn't been configured yet. To take advantage of Easy Archive, add {{Easy Archive|to=[Archive location]}} template to this page.",
			'zh-hans':
				'您的账号已经支持 Easy Archive，但是，为了开始使用该功能，您还需要在自己的用户讨论页面上添加模板 {{Easy Archive|to=存档位置}}。',
			'zh-hant':
				'您的賬號已經支持 Easy Archive，但是，為了開始使用該功能，您還需要在自己的用戶討論頁面上添加模板 {{Easy Archive|to=存檔位置}}。',
		}),
		left_par_split: localize({
			en: ' (',
			zh: '（',
		}),
		right_par: localize({
			en: ')',
			zh: '）',
		}),
		period: localize({
			en: '.',
			zh: '。',
		}),
		archive_path_colon_split: localize({
			en: 'Archive location: ',
			'zh-hans': '存档地址：',
			'zh-hant': '存檔至：',
		}),
		loading_section_i: localize({
			en: 'Loading section $1',
			'zh-hans': '正在读取第 $1 节的内容',
			'zh-hant': '正在讀取第 $1 節的內容',
		}),
		deleting_section_i: localize({
			en: 'Deleting section $1',
			'zh-hans': '正在删除第 $1 节的内容',
			'zh-hant': '正在刪除第 $1 節的內容',
		}),
		done_section_i: localize({
			en: 'Section $1 has been archived to $2',
			'zh-hans': '已经将第 $1 节存档到 $2',
			'zh-hant': '已經將第 $1 節存檔到 $2',
		}),
		done_deleting_section_i: localize({
			en: 'Section $1 has been deleted',
			'zh-hans': '已经将第 $1 节删除',
			'zh-hant': '已經將第 $1 節刪除',
		}),
		being_archived: localize({
			en: 'being archived',
			'zh-hans': '存档中',
			'zh-hant': '存檔中',
		}),
		being_deleted: localize({
			en: 'being deleted',
			'zh-hans': '删除中',
			'zh-hant': '刪除中',
		}),
		already_archived: localize({
			en: 'archived',
			'zh-hans': '已存档',
			'zh-hant': '已存檔',
		}),
		already_deleted: localize({
			en: 'deleted',
			'zh-hans': '已删除',
			'zh-hant': '已刪除',
		}),
		others_talk_elaborate: localize({
			en: "This page is another user's talk page. You cannot archive the topics on this page for him/her",
			'zh-hans': '这是另一名用户的讨论页面，您不能代替另一名用户存档。',
			'zh-hant': '這是另一名用戶的討論頁面，您不能代替另一名用戶存檔。',
		}),
		page_not_supported: localize({
			en: 'This page is not supported by Easy Archive.',
			'zh-hans': '此页面不支持 Easy Archive。',
			'zh-hant': '此頁面不支持 Easy Archive。',
		}),
		page_not_supported_elaborate: localize({
			en: 'These pages are not supported by Easy Archive: File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.',
			'zh-hans':
				'这些页面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。',
			'zh-hant':
				'這些頁面不受 Easy Archive 支持：File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。',
		}),
		problem_with_archive_location_main_space: localize({
			en: 'Currently the archive location of this page, "$1", is under the article namespace, where archives should not be normally directed to. Please check if you have the correct archive location.',
			'zh-hans':
				'此页面目前的存档地址是“$1”，在条目名称空间之下。一般而言不应向条目名称空间进行存档，请检查存档地址。',
			'zh-hant':
				'此頁面當前的存檔地址是「$1」，在條目名稱空間之下。一般而言不應向條目名稱空間進行存檔，請檢查存檔地址。',
		}),
		problem_with_archive_location_same_page: localize({
			en: 'Currently the archive location of this page, "$1", is this page itself, Easy archive cannot operate like this. ',
			'zh-hans': '此页面目前的存档地址是“$1”，和此页面名称相同。Easy Archive 无法按此地址存档。',
			'zh-hant': '此頁面當前的存檔地址是「$1」，和此頁面名稱相同。Easy Archive 無法按此地址存檔。',
		}),
		archive_summary: localize({
			en: 'archive section',
			'zh-hans': '存档段落',
			'zh-hant': '存檔段落',
		}),
		delete_summary: localize({
			en: 'delete section',
			'zh-hans': '删除段落',
			'zh-hant': '刪除段落',
		}),
	};
};
