/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <https://git.qiuwen.net.cn/InterfaceAdmin/Gadgets/src/branch/master/src/Gadgets/UserJS>
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
(function ($, mw) {
    if (window.UserJS) {
        return;
    }
    window.UserJS = true;
    /* 加载编辑界面脚本 */
    $(function () {
        if (mw.config.get('wgAction') === 'edit' || mw.config.get('wgAction') === 'submit' || mw.config.get('wgCanonicalSpecialPageName') === 'Search') {
            mw.loader.load(['ext.gadget.EditFormJS']);
        }
        else {
            mw.loader.using(['ext.visualEditor.desktopArticleTarget.init'], function () {
                mw.libs.ve.addPlugin(function () {
                    mw.loader.load(['ext.gadget.EditFormJS']);
                });
            });
        }
    });
    /* 编辑提示（editintro） */
    $(function () {
        var addEditIntro = function (name) {
            $('.mw-editsection, #ca-edit, #ca-addsection')
                .find('a')
                .each(function (_i, el) {
                el.href = "".concat($(this).attr('href'), "&editintro=").concat(name);
            });
        };
        var cats = mw.config.get('wgCategories');
        if (!cats) {
            return;
        }
        switch (mw.config.get('wgNamespaceNumber')) {
            case 0: {
                if (cats.includes('全部消歧義頁面')) {
                    addEditIntro('Template:Disambig_editintro');
                }
                if (cats.includes('在世人物')) {
                    addEditIntro('Template:BLP_editintro');
                }
                if (/抗日?[战戰][争爭]?[牺犧]牲|烈士|[战戰][斗鬥鬦]英雄|英雄?模[範范]?|英雄?烈士?|人民(教育家|[艺藝][术術]家|科[学學]家|英雄|楷模)|共和[国國][勋勳]章|[七八]一[勋勳]章[獲获]得者|[一特]等功臣/.test(cats) === true) {
                    addEditIntro('Template:BLP_editintro');
                }
                break;
            }
            case 4: {
                if (cats.includes('有兽档案馆条例完整列表')) {
                    addEditIntro('Template:Policy_editintro');
                }
                break;
            }
            case 8: {
                if (cats.includes('CC-BY-NC-SA-4.0')) {
                    addEditIntro('Template:NonCommercial_editintro');
                }
                if (cats.includes('GPL-3.0')) {
                    addEditIntro('Template:GPL-3.0_editintro');
                }
                if (cats.includes('GPL-2.0-or-later')) {
                    addEditIntro('Template:GPL-2.0-or-later_editintro');
                }
                if (cats.includes('MIT许可证')) {
                    addEditIntro('Template:MIT_editintro');
                }
                if (['edit', 'submit'].includes(mw.config.get('wgAction')) && $('.mw-editintro').length > 0 && $('#editpage-copywarn').length > 0) {
                    $('.mw-editintro').appendTo($('#editpage-copywarn'));
                }
                break;
            }
            case 12: {
                if (cats.includes('MIT许可证')) {
                    addEditIntro('Template:MIT_editintro');
                }
                if (['edit', 'submit'].includes(mw.config.get('wgAction')) && $('.mw-editintro').length > 0 && $('#editpage-copywarn').length > 0) {
                    $('.mw-editintro').appendTo($('#editpage-copywarn'));
                }
                break;
            }
            default:
        }
    });
    /* 修改编辑摘要 */
    $(function () {
        switch (mw.config.get('wgCanonicalSpecialPageName')) {
            case 'MassEditRegex': {
                // MassEditRegex
                $('#wpSummaryLabel').html($('#wpSummaryLabel')
                    .text()
                    .replace(/\[\[#\.\|(.+?)]]/g, '$1'));
                break;
            }
            // Import
            case 'Import': {
                $('[name=usernamePrefix]').val('qwbk');
                $('#mw-import-upload-form [name=log-comment]').val('导入自[[qwbk:|求闻百科]]的页面［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]］');
                $('#mw-import-interwiki-form [name=log-comment]').val('［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]］');
                $('[name=interwikiHistory], [name=interwikiTemplates]').attr('disabled', 'disabled');
                break;
            }
            // ImportFile
            case 'FileImporter-SpecialPage': {
                $('[name=intendedRevisionSummary]').val("\u5BFC\u5165\u81EA[[commons:File:".concat($('h2.mw-importfile-header-title').html(), "|\u6B64\u5904]]\uFF3B\u9875\u9762\u6587\u5B57\u539F\u8BB8\u53EF\uFF1A[[cc-by-sa:3.0|CC BY-SA 3.0]]\uFF1B\u6587\u4EF6\u8BB8\u53EF\u8BF7\u53C2\u89C1\u9875\u9762\u63CF\u8FF0\uFF3D"));
                break;
            }
            // ReplaceText
            case 'ReplaceText': {
                $('[name=doAnnounce]').removeAttr('checked').attr('disabled', 'disabled');
                break;
            }
        }
        // Delete screen
        if ($('body.action-delete').length > 0) {
            $('#wpReason').val('');
        }
    });
    /* 上传相关函数 */
    $(function () {
        if (mw.config.get('wgNamespaceNumber') === 6 && $('#mw-sharedupload').length > 0) {
            new mw.Api({
                ajax: {
                    headers: {
                        'Api-User-Agent': "Qiuwen/1.1 (GetParameters/1.1; ".concat(mw.config.get('wgWikiID'), ")")
                    }
                }
            })
                .get({
                action: 'query',
                format: 'json',
                prop: 'imageinfo',
                titles: mw.config.get('wgPageName'),
                iiprop: 'timestamp|url|size|mime|mediatype|extmetadata',
                iiextmetadatafilter: 'DateTime|ImageDescription|Credit|License|LicenseShortName|UsageTerms|LicenseUrl|Artist|Attribution',
                iiextmetadatalanguage: mw.config.get('wgUserVariant'),
                uselang: 'content'
            })
                .then(function (data) {
                if (data.query.pages[-1].imageinfo[0]) {
                    var extmetadata = data.query.pages[-1].imageinfo[0].extmetadata;
                    var author = extmetadata.Artist.value.replace(/<\/?(a|span|strong|em|font|i|b).*?>|\s*\(talk\)/gi, '');
                    var time = extmetadata.DateTime.value;
                    var imageDescription = extmetadata.ImageDescription.value;
                    var license = extmetadata.License.value;
                    var licenseShortName = extmetadata.LicenseShortName.value;
                    var licenseURL = extmetadata.LicenseUrl.value;
                    switch (license) {
                        case 'cc0': {
                            license = 'cc-zero';
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                    time && $('.migrate > a').attr('href', "".concat($('.migrate > a').attr('href'), "&wpDate=").concat(mw.util.rawurlencode(time)));
                    author && $('.migrate > a').attr('href', "".concat($('.migrate > a').attr('href'), "&wpAuthor=").concat(mw.util.rawurlencode(author)));
                    imageDescription && $('.migrate > a').attr('href', "".concat($('.migrate > a').attr('href'), "&wpDescText1=").concat(mw.util.rawurlencode(imageDescription)));
                    license && $('.migrate > a').attr('href', "".concat($('.migrate > a').attr('href'), "&wpLicense=").concat(mw.util.rawurlencode(license)));
                    var wpPermission = void 0;
                    if (licenseShortName && licenseURL) {
                        wpPermission = "[".concat(licenseURL, " ").concat(licenseShortName, "]");
                    }
                    else if (licenseURL) {
                        wpPermission = licenseURL;
                    }
                    else if (licenseShortName) {
                        wpPermission = licenseShortName;
                    }
                    $('.migrate > a').attr('href', "".concat($('.migrate > a').attr('href'), "&wpPermission=").concat(mw.util.rawurlencode(wpPermission)));
                }
            });
        }
    });
    /* 向侧边栏添加“子页面”菜单 */
    $(function () {
        var subPagesLink = function () {
            var NSWithoutSubpages = [-1, 0, 14];
            if (!NSWithoutSubpages.includes(mw.config.get('wgNamespaceNumber'))) {
                mw.util.addPortletLink('p-tb', "".concat(mw.config.get('wgServer'), "/wiki/Special:PrefixIndex/").concat(mw.config.get('wgPageName')), wgULS('子页面', '子頁面'));
            }
        };
        $(document).on('load', function () {
            subPagesLink();
        });
    });
    /* 智能讨论页编辑（新建） */
    $(function () {
        if (!+mw.user.options.get('discussiontools-newtopictool') || !+mw.user.options.get('discussiontools-betaenable')) {
            var catalk = $('#ca-talk');
            if (catalk.hasClass('new') && mw.config.get('wgNamespaceNumber') !== 2) {
                var $a = $('a:first', catalk);
                $a.attr('href', "".concat($a.attr('href'), "&section=new"));
            }
        }
    });
})(jQuery, mediaWiki);
