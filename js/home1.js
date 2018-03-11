!function e(t, n, o) {
    function a(s, r) {
        if (!n[s]) {
            if (!t[s]) {
                var l = "function" == typeof require && require;
                if (!r && l) return l(s, !0);
                if (i) return i(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var d = n[s] = {exports: {}};
            t[s][0].call(d.exports, function (e) {
                var n = t[s][1][e];
                return a(n || e)
            }, d, d.exports, e, t, n, o)
        }
        return n[s].exports
    }

    for (var i = "function" == typeof require && require, s = 0; s < o.length; s++) a(o[s]);
    return a
}({
    1: [function (e, t, n) {
        t.exports = {
            sendVideoPlayEvent: function (e, t, n, o) {
                window.sendWebEvent && window.sendWebEvent("Video", "video_play", n, {
                    dimension1: e,
                    dimension2: t,
                    dimension12: o
                })
            }
        }
    }, {}], 2: [function (e, t, n) {
        var o = e("./Analytics.js");
        t.exports = {
            run: function () {
                var e = [], t = "", n = "", a = "";
                $("#topNews-video").length > 0 && (a = $("#topNews-video").attr("video-source"), n = $(".m-content-top-first-description:first .title").text().trim(), t = $(".m-content-top-first-description:first .title a").attr("href").split("/")[4], e.push({
                    id: "topNews-video",
                    newsId: t,
                    headline: n,
                    videoUrl: a,
                    origin: "Web_List",
                    played: !1
                })), e.forEach(function (t, n) {
                    jwplayer(t.id).on("play", function (t) {
                        e[n].played || (console.log("played", t), o.sendVideoPlayEvent(e[n].newsId, e[n].headline, e[n].videoUrl, e[n].origin), e[n].played = !0)
                    })
                })
            }
        }
    }, {"./Analytics.js": 1}], 3: [function (e, t, n) {
        Date.prototype.Format = function (e) {
            var t = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var n in t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
            return e
        }, $(function () {
            var e = 0, t = $(".header-follow-us-img"), n = 42 * $(" >a", t).length;
            if ($(" >a", t).length < 7 ? (t.css({width: n + "px"}), $(".js-social-more").css({display: "none"}), $(".header-follow-us-img").removeClass("overflow-hidden")) : $(".js-social-more").click(function () {
                    0 == e ? (t.stop().animate({width: n + "px"}, 600), $(this).addClass("js-social-hide"), $(".header-follow-us-img").removeClass("overflow-hidden"), e = 1) : (t.stop().animate({width: "132px"}, 600), $(this).removeClass("js-social-hide"), $(".header-follow-us-img").addClass("overflow-hidden"), e = 0)
                }), $(".js-live-shownav-btn").length > 0) {
                var o = 0, a = $(".js-live-shownav-title"), i = $(".js-live-shownav-btn"), s = $(".js-live-headernav");
                i.click(function () {
                    0 == o ? (s.stop().animate({width: "615px"}, 600), a.stop().fadeOut(0), $(this).addClass("js-live-hidenav-btn"), o = 1) : (s.stop().animate({width: 0}, 600, function () {
                        a.stop().fadeIn(100)
                    }), $(this).removeClass("js-live-hidenav-btn"), o = 0)
                })
            }
            $(".js-home-wechat").each(function () {
                $(this).click(function (e) {
                    e.stopPropagation(), e.preventDefault()
                }), $(this).hover(function () {
                    $(" .js-home-qr-img", $(this)).stop().fadeIn(400)
                }, function () {
                    $(" .js-home-qr-img", $(this)).stop().fadeOut(400)
                })
            }), $("img.lazy").lazyload({effect: "fadeIn"});
            $(".nav-banner li")
        }), window.isIE = function () {
            var e = navigator.appName, t = navigator.appVersion, n = t.split(";");
            if (!(n.length < 2)) {
                var o = n[1].replace(/[ ]/g, "");
                return "Microsoft Internet Explorer" == e && "MSIE6.0" == o ? "ie8" : "Microsoft Internet Explorer" == e && "MSIE7.0" == o ? "ie8" : "Microsoft Internet Explorer" == e && "MSIE8.0" == o ? "ie8" : "ie9"
            }
        }, window.flashChecker = function () {
            var e = 0, t = 0, n = "";
            if (document.all) {
                var o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                o && (e = 1, n = o.GetVariable("$version"), t = parseInt(n.split(" ")[1].split(",")[0]))
            } else if (navigator.plugins && navigator.plugins.length > 0) {
                var o = navigator.plugins["Shockwave Flash"];
                if (o) {
                    e = 1;
                    for (var a = o.description.split(" "), i = 0; i < a.length; ++i) isNaN(parseInt(a[i])) || (t = parseInt(a[i]))
                }
            }
            return {f: e, v: t}
        }, window.initVideo = function (e, t, n) {
            jwplayer("topNews-video").setup({
                file: e,
                image: t,
                skin: {name: "five", url: "/public/vendor/jwplayer/skins/five.css"},
                stretching: "fill",
                width: "100%",
                aspectratio: "16:9",
                androidhls: !0,
                autostart: n,
                primary: "html5"
            })
        }, window.Share = {
            setFacebookLink: function (e) {
                var t = $(e).attr("shareUrl") ? $(e).attr("shareUrl") : encodeURIComponent(location.href);
                $(e).attr("share_title") && $(e).attr("share_title");
                $(e).attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + t + "&display=popup&app_id=723054267828678")
            }, setTwitterLink: function (e) {
                var t = $(e).attr("shareUrl") ? $(e).attr("shareUrl") : encodeURIComponent(location.href),
                    n = $(e).attr("share_title") ? $(e).attr("share_title") : "CGTN - Your link to China and world!";
                $(e).attr("href", "https://twitter.com/intent/tweet?text=" + n + "&url=" + t + "&via=cgtnofficial")
            }, setWeiboLink: function (e) {
                var t = $(e).attr("shareUrl") ? $(e).attr("shareUrl") : encodeURIComponent(location.href),
                    n = $(e).attr("share_title") ? $(e).attr("share_title") : "CGTN - Your link to China and world!";
                $(e).attr("href", "http://service.weibo.com/share/share.php?appkey=4122844478&title=" + n + "&url=" + t + "&pic=&searchPic=true&style=simple")
            }, setTumblrLink: function (e) {
                var t = $(e).attr("shareUrl") ? $(e).attr("shareUrl") : encodeURIComponent(location.href),
                    n = $(e).attr("share_title") ? $(e).attr("share_title") : "CGTN - Your link to China and world!";
                $(e).attr("href", "https://www.tumblr.com/widgets/share/tool?canonicalUrl=" + t + "&caption=" + n + "&title=" + n)
            }, setMailLink: function (e) {
                var t = $(e).attr("shareUrl") ? $(e).attr("shareUrl") : location.href,
                    n = $(e).attr("share_title") ? $(e).attr("share_title") : "CGTN - Your link to China and world!",
                    o = encodeURIComponent("I thought you might be interested in this news: " + t + "."),
                    a = "mailto:?subject=" + n + "&body=" + o;
                $(e).attr("href", a)
            }
        }
    }, {}], 4: [function (e, t, n) {
        $(function () {
            $(".m-yes").bind("click", function () {
                $("html").css({overflow: "auto"}), $("body").css({overflow: "inherit"}), $(".dialog-components").hide(), navigator.userLanguage ? baseLang = navigator.userLanguage.substring(0, 2).toLowerCase() : baseLang = navigator.language.substring(0, 2).toLowerCase(), window.location.href = e[baseLang].urls
            }), $(".m-no").bind("click", function (e) {
                $("html").css({overflow: "auto"}), $("body").css({overflow: "inherit"}), $(".dialog-components").hide()
            });
            var e = {
                fr: {
                    urls: "/fr.do",
                    topContent: "La langue actuelle de votre navigateur est le français. Voulez-vous accéder à la page dans cette langue ?",
                    botContent: "The default language of your browser is currently French, do you want to visit pages in this language?",
                    noButton: "Non. / No.",
                    yesButton: "Oui. / Yes.",
                    dir: "left"
                },
                ru: {
                    urls: "/ru.do",
                    topContent: "Браузер вашего компьютера использует русский язык. Хотите остаться на русскоязычной странице?",
                    botContent: "The default language of your browser is currently Russian, do you want to visit pages in this language?",
                    noButton: "Нет. / No.",
                    yesButton: "Да. / Yes.",
                    dir: "left"
                },
                ar: {
                    urls: "/ar.do",
                    topContent: "لغة المتصفح اللغة العربية، هل تريد أن تواصل بهذه اللغة؟",
                    botContent: "The default language of your browser is currently Arabic, do you want to visit pages in this language?",
                    noButton: "no/لا",
                    yesButton: "yes/نعم",
                    dir: "right"
                },
                es: {
                    urls: "/es.do",
                    topContent: "La lengua de su navegador es español, ¿quiere visitar la página en español?",
                    botContent: "The default language of your browser is currently Spanish, do you want to visit pages in this language?",
                    noButton: "No. / No.",
                    yesButton: "Sí. / Yes.",
                    dir: "left"
                }
            };
            !function (e) {
                navigator.userLanguage ? baseLang = navigator.userLanguage.substring(0, 2).toLowerCase() : baseLang = navigator.language.substring(0, 2).toLowerCase();
                switch (baseLang) {
                    case"fr":
                        $(".m-language-dialog .content-top").html(e.fr.topContent), $(".m-language-dialog .content-bot").html(e.fr.botContent), $(".m-language-dialog .m-yes").html(e.fr.yesButton), $(".m-language-dialog .m-no").html(e.fr.noButton), $(".m-language-dialog").css({"text-align": e.fr.dir}), e.fr.dir, $(".m-language-dialog .m-buttons").css({float: "right"}), $(".m-language-dialog .m-yes").css({"margin-left": "40px"}), $(".dialog-components").show(), $("html").css({overflow: "visible"}), $("body").css({overflow: "hidden"});
                        break;
                    case"ru":
                        $(".m-language-dialog .content-top").html(e.ru.topContent), $(".m-language-dialog .content-bot").html(e.ru.botContent), $(".m-language-dialog .m-yes").html(e.ru.yesButton), $(".m-language-dialog .m-no").html(e.ru.noButton), $(".m-language-dialog").css({"text-align": e.ru.dir}), e.ru.dir, $(".m-language-dialog .m-buttons").css({float: "right"}), $(".m-language-dialog .m-yes").css({"margin-left": "40px"}), $(".dialog-components").show(), $("html").css({overflow: "visible"}), $("body").css({overflow: "hidden"});
                        break;
                    case"ar":
                        $(".m-language-dialog .content-top").html(e.ar.topContent), $(".m-language-dialog .content-bot").html(e.ar.botContent), $(".m-language-dialog .m-yes").html(e.ar.yesButton), $(".m-language-dialog .m-no").html(e.ar.noButton), $(".m-language-dialog").css({"text-align": e.ar.dir}), e.ar.dir, $(".m-language-dialog .m-buttons").css({float: "right"}), $(".m-language-dialog .m-yes").css({"margin-left": "40px"}), $(".dialog-components").show(), $("html").css({overflow: "visible"}), $("body").css({overflow: "hidden"});
                        break;
                    case"es":
                        $(".m-language-dialog .content-top").html(e.es.topContent), $(".m-language-dialog .content-bot").html(e.es.botContent), $(".m-language-dialog .m-yes").html(e.es.yesButton), $(".m-language-dialog .m-no").html(e.es.noButton), $(".m-language-dialog").css({"text-align": e.es.dir}), e.es.dir, $(".m-language-dialog .m-buttons").css({float: "right"}), $(".m-language-dialog .m-yes").css({"margin-left": "40px"}), $(".dialog-components").show(), $("html").css({overflow: "visible"}), $("body").css({overflow: "hidden"})
                }
            }(e)
        })
    }, {}], 5: [function (e, t, n) {
        var o = e("../common/analytics/desktop-home.js");
        $(function () {
            function e() {
                i + 1 < a ? (n.eq(i + 1).fadeIn(400).siblings("p").stop().fadeOut(0), i++) : (i = 0, n.eq(i).fadeIn(400).siblings("p").stop().fadeOut(0)), setTimeout(arguments.callee, 3e3)
            }

            var t = $("#js-breakingnews"), n = $("#js-breakingnews-content>p");
            $("#js-breakingnews-cancel").click(function () {
                t.fadeOut(400)
            });
            var a = n.length, i = 0;
            a > 1 ? setTimeout(e, 3e3) : 0 == a && t.css({display: "none"}), $(".m-content-banner-wrapper").find("a").length > 1 && $(".m-content-banner-wrapper").slick({
                dots: !0,
                speed: 300,
                slidesToShow: 1,
                arrows: !1,
                autoplay: !0,
                adaptiveHeight: !0
            }), o.run()
        })
    }, {"../common/analytics/desktop-home.js": 2}], 6: [function (e, t, n) {
        $(function () {
            function e() {
                o = setInterval(function () {
                    t++, t === n && (t = 0), $(".content-container", "#home-picture-banner").eq(t).trigger("click")
                }, 3e3)
            }

            var t = 0;
            $(".content-container", "#home-picture-banner").eq(0).addClass("on"), $(".content-container", "#home-picture-banner").on("click", function () {
                var e = $(this).index();
                t = e, $(this).addClass("on").siblings(".content-container").removeClass("on"), $(".main-picture-page", "#m-content-picture").eq(e).show().siblings(".main-picture-page").hide()
            });
            var n = $(".content-container", "#home-picture-banner").size(), o = null;
            e(), $("#m-content-picture").mouseenter(function () {
                clearInterval(o)
            }).mouseleave(function () {
                e()
            })
        })
    }, {}], 7: [function (e, t, n) {
        var o = e("../common/analytics/Analytics.js");
        $(function () {
            function e() {
                a = setInterval(function () {
                    t++, t === n && (t = 0), $(".content", "#home-video-banner").children().eq(t).trigger("click")
                }, 3e3)
            }

            var t = 0, n = $(".content-container", "#home-video-banner").size(), a = null, i = [], s = null;
            e(), $(".m-content-video").mouseenter(function () {
                clearInterval(a)
            }).mouseleave(function () {
                e()
            }), $("#home-video-banner .content-container").eq(0).find(".img").find("img").addClass("showDiv"), $("#home-video-banner").find(".content-container").each(function (e) {
                i.push({
                    image: $(this).attr("video-poster"),
                    file: $(this).attr("video-source")
                }), $(this).click(function (n) {
                    var o = [];
                    t = $(this).index(), o.push($("#home-video-banner").find(".content-container")), o.push($("#home-video-banner").find(".content-container-other"));
                    for (var a = 0; a < o.length; a++) $(o[a]).find("img").removeClass("showDiv"), $(o[a]).removeClass("content-container-other"), $(o[a]).addClass("content-container");
                    $(this).find("img").addClass("showDiv"), $(this).find("img").fadeIn(400), $(this).removeClass("content-container"), $(this).addClass("content-container-other"), s.playlistItem(e), s.stop(), $("#mainVideo-content-p").html($("#video-content", $(this)).html())
                })
            });
            var r = [!1, !1, !1], l = $("#home-video-banner").find(".content-container").eq(0);
            if ("ie8" != isIE()) !function (e) {
                s = jwplayer("main-video"), s.setup({
                    playlist: i,
                    skin: {name: "five", url: "/public/vendor/jwplayer/skins/five.css"},
                    stretching: "fill",
                    width: "100%",
                    aspectratio: "16:9",
                    androidhls: !0,
                    autostart: !1,
                    primary: "html5",
                    events: {
                        onPlay: function () {
                            $(".m-content-video").off("mouseleave");
                            var e = s.getPlaylistIndex();
                            if (!r[e]) {
                                var t = $("#home-video-banner .content >div:eq(" + e + ")"), n = t.attr("video-source"),
                                    a = t.attr("video-content"), i = n.split("/")[4];
                                o.sendVideoPlayEvent(i, a, n, "Web_List"), r[e] = !0
                            }
                        }, onComplete: function () {
                            s.stop()
                        }
                    }
                })
            }(); else {
                $("#main-video").html(" "), $("<img />").attr("src", l.attr("video-poster")).appendTo($("#main-video"));
                var c = $("<div></div>").css({display: "none"}), d = $("<div></div>");
                c.addClass("no-video").appendTo($(".left-content")), d.addClass("caption-video").appendTo($(".left-content")), $(".caption-video").click(function () {
                    $(".no-video").stop().fadeIn(400), $(this).stop().hide(), $("#mainVideo-content").stop().fadeOut(400), $("#mainVideo-content-p").stop().fadeOut(400)
                }), $(".no-video").click(function () {
                    $(".caption-video").stop().fadeIn(400), $(this).stop().hide(), $("#mainVideo-content").stop().fadeIn(400), $("#mainVideo-content-p").stop().fadeIn(400)
                })
            }
            $("#mainVideo-content-p").html($("#video-content", $(this)).html()), $(".content-container:eq(0)", "#home-video-banner").addClass("content-container-other").removeClass("content-container")
        })
    }, {"../common/analytics/Analytics.js": 1}], 8: [function (e, t, n) {
        e("../modules/common/g-header.js"), e("../modules/main/g-content.js"), e("../modules/main/m-content-video.js"), e("../modules/main/m-content-picture.js"), e("../modules/m-language-dialog/m-language-dialog.js")
    }, {
        "../modules/common/g-header.js": 3,
        "../modules/m-language-dialog/m-language-dialog.js": 4,
        "../modules/main/g-content.js": 5,
        "../modules/main/m-content-picture.js": 6,
        "../modules/main/m-content-video.js": 7
    }]
}, {}, [8]);