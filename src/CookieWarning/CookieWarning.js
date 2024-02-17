/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/CookieWarning>
 * @dependency ext.gadget.i18n, mediawiki.storage, mediawiki.util
 */
/**
 * +--------------------------------------------------------+
 * |         === WARNING: GLOBAL GADGET FILE ===            |
 * +--------------------------------------------------------+
 * |      All changes should be made in the repository,     |
 * |              otherwise they will be lost.              |
 * +--------------------------------------------------------+
 * |        Changes to this page affect many users.         |
 * |  Please discuss changes at Talk page before editing.   |
 * +--------------------------------------------------------+
 */
/* <nowiki> */
'use strict';

$(function cookieWarning() {
  if (mw.config.get('wgUserName') || location.search.indexOf('consentRead=') !== -1) {
    return;
  }
  var i18nMessages = function i18nMessages() {
    var _i18n = i18n,
      localize = _i18n.localize;
    return {
      TOSNotice: localize({
        en: 'By using this site, it means that you have carefully read, fully understood and agreed to comply with our <a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="Terms of Use"><em>Terms of Use</em></a>, <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a>, and other <a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="Legal policies">legal policies</a>.',
        ja: 'このサイトを利用することで、<a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="利用規約">利用規約</a>、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人情報保護条例">個人情報保護条例</a>、その他の<a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="法的ポリシー">法的ポリシー</a>について十分に理解し、遵守することに同意したものとみなされます。',
        'zh-hans': '访问本网站，或以任何方式使用本网站，均代表您已仔细阅读、充分了解并同意遵守本网站的<a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="用户协议">用户协议</a>、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="个人信息保护条例">个人信息保护条例</a>及其他<a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="法律条例">法律条例</a>的规定。',
        'zh-hant': '存取本網站，或以任何方式使用本網站，均代表您已仔細閱讀、充分了解並同意遵守本網站的<a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="用戶協議">用戶協議</a>、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人信息保護条例">個人信息保護条例</a>及其他<a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="法律条例">法律条例</a>的規定。'
      }),
      cookieNotice: localize({
        en: 'To provide better experience, we utilize cookies and other technologies to provide services. You can refer to our <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a> to learn how we handle your personal information.',
        ja: 'より良いサービスを提供するために、クッキーやその他の技術を利用しています。個人情報の取り扱い方法については、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人情報保護条例">個人情報保護条例</a>をご参照ください。',
        'zh-hans': '为了提供最佳体验，我们利用Cookie及其他技术提供服务；您可以查阅我们的<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="个人信息保护条例">个人信息保护条例</a>，了解我们如何处理您的个人信息。',
        'zh-hant': '為了提供最佳體驗，我们利用Cookie及其他技術提供服務；您可以查閱我們的<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人信息保護条例">個人信息保護条例</a>，了解我們如何處理您的個人信息'
      }),
      'I agree': localize({
        ja: '同意する',
        zh: '同意'
      })
    };
  };
  var messages = i18nMessages();
  var message = function message(key) {
    return messages[key] || key;
  };
  var storageItemName = 'cookieConsent';
  var storageValue = mw.storage.get(storageItemName);
  if (storageValue === '1') {
    return;
  }
  var consentText = $('<div>').attr('id', 'consent-notice').append($('<p>').html(message('TOSNotice')), $('<p>').html(message('cookieNotice')), $('<span>').addClass('mw-ui-button mw-ui-progressive').attr({
    id: 'consent-button',
    role: 'button'
  }).html(message('I agree')));
  $(consentText).appendTo('body');
  $('#consent-button').on('click', function () {
    mw.storage.set('cookieConsent', '1', 2592e3); // 30 days
    $('#consent-notice').fadeOut().remove();
  });
});
/* </nowiki> */
