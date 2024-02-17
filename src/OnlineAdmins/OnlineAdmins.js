'use strict';

/* <nowiki> */
/**
 * SPDX-License-Identifier: CC BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/User:Vanished_user_1929210/js/OnlineAdmins.js>
 * @dependency ext.gadget.i18n, mediawiki.api
 */
/**
 * 原作者：Alexander Misel
 * 逆襲的天邪鬼修改
 * 修改内容：
 * 1. 把菜单移到了「更多」而不是在用户名左面
 * 2. 修正bug
 * 3. 繁簡共榮
 * 4. 等DOM完成再执行
 */
(function ($, mw) {
  $(function () {
    var BLACKLIST = ['滥用过滤器'];

        // Create portlet link
        var portletLinkOnline = mw.util.addPortletLink(
                'p-cactions',
                '#',
                wgULS('在线管理人员', '線上管理人員'));

        var rcstart,
            rcend,
            time;
        var users = [];
        var bureaucrat = [],
            admin = [],
            patroller = [];
        var api = new mw.Api();

        // Bind click handler
        $(portletLinkOnline).find('a').click(function(e) {
            e.preventDefault();

            users = [];
            var usersExt = [];
            bureaucrat = [];
            admin = [];
            patroller = [];

            // 最近更改30分钟内的编辑用户
            time = new Date();
            rcstart = time.toISOString();
            time.setMinutes(time.getMinutes() - 30);
            rcend = time.toISOString();

            //API:RecentChanges
            api.get({
                format: 'json',
                action: 'query',
                list: 'recentchanges',
                rcprop: 'user',
                rcstart: rcstart,
                rcend: rcend,
                rcshow: '!bot|!anon',
                rclimit: 500
            }).done(function(data) {
                $.each(data.query.recentchanges, function(i, item) {
                    users[i] = item.user;
                });
                api.get({
                    format: 'json',
                    action: 'query',
                    list: 'logevents',
                    leprop: 'user',
                    lestart: rcstart,
                    leend: rcend,
                    lelimit: 500
                }).done(function(data) {
                    $.each(data.query.logevents, function(i, item) {
                        usersExt[i] = item.user;
                    });

                    Array.prototype.push.apply(users, usersExt);

                    // 使用者名稱去重與分割
                    users = $.unique(users.sort());

                    var promises = [];
                    var mark = function(data) {
                        $.each(data.query.users, function(i, user) {
                            // 找到管理员，去除adminbot
                            if ($.inArray('bot', user.groups) === -1 && $.inArray(user.name, BLACKLIST)) {
                                if ($.inArray('sysop', user.groups) > -1) {
                                    admin[i] = user.name;
                                }
                                 if ($.inArray('bureaucrat', user.groups) > -1) {
                                    bureaucrat[i] = user.name;
                                }
                                if ($.inArray('patroller', user.groups) > -1) {
                                    patroller[i] = user.name;
                                }
                            }
                        });
                    };
                    for (var i = 0; i < (users.length + 50) / 50; i++) {
                        promises.push(api.get({
                                format: 'json',
                                action: 'query',
                                list: 'users',
                                ususers: users.slice(i * 50, (i + 1) * 50).join('|'),
                                usprop: 'groups'
                            }).done(mark));
                    }

                    // 查询用户权限
                    $.when.apply($, promises).done(function() {
                        // 消除空值
                        var filter = function(n) {
                            return n;
                        };

                        bureaucrat = bureaucrat.filter(filter);
                        admin = admin.filter(filter);
                        patroller = patroller.filter(filter);

                        var userlink = function(user) {
                            var user2 = user.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&lt;');
                            return '<a href="/wiki/User:' + user2 + '" target="_blank">' + user2 + '</a>&nbsp;<small style="opacity:.75;">(<a href="/wiki/User talk:' + user2 + '" target="_blank">留言</a>)</small>　';
                        }

                        if (bureaucrat.length + admin.length + patroller.length > 0) {
                            var adminsstring = [wgULS('<p>下面是最近30分钟之内在线的管理人员</p>', '<p>下面是最近30分鐘內的線上管理人員</p>')];

                            if (bureaucrat.length > 0) {
                                adminsstring.push('<p style="word-break:break-all;">' + wgULS('档案理事员', '档案理事员') + ' (' + bureaucrat.length + wgULS('个在线', '個在線') + ')：');
                                $.each(bureaucrat, function(i, e) {
                                    adminsstring.push(userlink(e));
                                });
                                adminsstring.push('</p>');
                            }

                            if (admin.length > 0) {
                                adminsstring.push('<p style="word-break:break-all;">' + wgULS('管理员', '管理員') + ' (' + admin.length + wgULS('个在线', '個在線') + ')：');
                                $.each(admin, function(i, e) {
                                    adminsstring.push(userlink(e));
                                });
                                adminsstring.push('</p>');
                            }

                            if (patroller.length > 0) {
                                adminsstring.push('<p style="word-break:break-all;">' + wgULS('巡查员', '巡查員') + ' (' + patroller.length + wgULS('个在线', '個在線') + ')：');
                                $.each(patroller, function(i, e) {
                                    adminsstring.push(userlink(e));
                                });
                                adminsstring.push('</p>');
                            }

                            mw.notify($(adminsstring.join('')));
                        } else {
                            mw.notify(wgULS('目前没有管理人员在线。', '目前沒有管理人員在線。'), {
                              tag: 'onlineAdmins',
                              type: 'warn'
              });
                        }
                    }).fail(function() {
                        mw.notify(wgULS('查询时发生错误，请稍后重试。', '查詢時發生錯誤，請稍後重試。'), {
                              tag: 'onlineAdmins',
                              type: 'error'
              });
                    });
                });
            });
        });
    });
})(jQuery, mw);
