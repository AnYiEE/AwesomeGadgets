import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		minoredit: localize({
			en: 'This is a minor edit',
			'zh-hans': '这是一次小编辑',
			'zh-hant': '這是次要編輯',
		}),
		watchthis: localize({
			en: 'Watch this page',
			'zh-hans': '监视此页面',
			'zh-hant': '監視此頁面',
		}),
		copyrightwarning: localize({
			en: '<p>By clicking the "Save page" or "Save changes" button, you agree to the <i><a href="/wiki/LIB:TOS" title="Terms of Use">Terms of Use</a></i>, <i><a href="/wiki/LIB:ZC" title="Common Program">Common Program</a></i>, and the <i><a href="/wiki/LIB:CP" title="Copyright Policy">Copyright Policy</a></i>. You agree to released all your contributions under the <i><a href="/wiki/LIB:CC-BY-SA-4.0" title="Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)">Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</a></i>. You promise to us that the content you submit does not involve in copyright infringement or infringement on legitimate rights and interests of others.<br><b>If you do not agree to terms and policies mentioned above, please do not submit your work.</b></p>',
			'zh-hans':
				'<p>点击“<b>保存页面</b>”或“<b>保存更改</b>”按钮，即表示您<b>同意</b>《<b><a href="/wiki/LIB:TOS" title="有兽档案馆用户协议">有兽档案馆用户协议</a></b>》、《<b><a href="/wiki/LIB:ZC" title="有兽档案馆章程">有兽档案馆章程</a></b>》及本网站<b><a href="/wiki/LIB:CP" title="著作权条例">著作权条例</a></b>，<b>同意</b>依据<b><a href="/wiki/Help:CC-BY-SA-4.0" title="知识共享 署名—相同方式共享 4.0 协议国际版">CC-BY-SA 4.0</a></b>协议授权他人使用您所发布的内容，并<b>承诺</b>所提交的内容不侵犯他人的著作权及其他合法权益。<br>若您不同意《用户协议》、《档案馆章程》或本网站著作权条例，请勿点击按钮发布内容。</p>',
			'zh-hant':
				'<p>點擊“<b>儲存頁面</b>”或“<b>儲存變更</b>”按鈕，即表示您<b>同意</b>《<b><a href="/wiki/LIB:TOS" title="有兽档案馆用戶協議">有兽档案馆用戶協議</a></b>》、《<b><a href="/wiki/LIB:ZC" title="有兽档案馆章程">有兽档案馆章程</a></b>》及本網站<b><a href="/wiki/LIB:CP" title="著作權條例">著作權條例</a></b>，<b>同意</b>依據<b><a href="/wiki/Help:CC-BY-SA-4.0" title="知识共享 署名—相同方式共享 4.0 协议国际版">CC-BY-SA 4.0</a></b>協議授權他人使用您所發佈的內容，並<b>承諾</b>所提交的內容不侵犯他人的著作權及其他合法權益。<br>若您不同意《用戶協議》、《档案馆章程》或本網站著作權條例，請勿點擊按鈕發佈內容。</p>',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

const setMessages = () => {
	mw.messages.set({minoredit: getMessage('minoredit'), watchthis: getMessage('watchthis')});
};

export {getMessage, setMessages};
