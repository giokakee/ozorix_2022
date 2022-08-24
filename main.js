/*! For license information please see main.js.LICENSE.txt */
$(function () {
  var e = {
    586: function () {
      document.querySelector(".services__mobile--SVGG-swipe");
      var e = document.querySelector(".services__mobile--SVG"),
        t = (document.querySelector("#services"), document.querySelector(".projects__mobile--SVGG-swipe"), document.querySelector(".projects__mobile--SVG")),
        n = (document.querySelector(".contact__mobile--SVGG-swipe"), document.querySelector(".contact__mobile--SVG"));
      e.addEventListener("mouseup", function () {
        (e.style.transition = "transform 1s ease-in"), (e.style.transform = "translateX(100%)"), (document.querySelector(".services-body__right").style.visibility = "visible");
      }),
        t.addEventListener("mouseup", function () {
          (t.style.transition = "transform 1s ease-in"), (t.style.transform = "translateX(-150%)"), (document.querySelector(".project-body__right").style.visibility = "visible");
        }),
        n.addEventListener("mouseup", function () {
          (n.style.transition = "transform 1s ease-in"), (n.style.transform = "translateX(150%)"), (document.querySelector(".contact-body__right").style.visibility = "visible");
        }),
        e.addEventListener("touchmove", function () {
          userHasScrolled = !0;
        }),
        e.addEventListener(
          "touchstart",
          function (e) {
            var t = o(e)[0];
            (r = t.clientX), (i = t.clientY);
          },
          { capture: !0 }
        ),
        e.addEventListener("touchmove", s, { capture: !0 }),
        t.addEventListener(
          "touchstart",
          function (e) {
            var t = o(e)[0];
            (r = t.clientX), (i = t.clientY);
          },
          { capture: !0 }
        ),
        t.addEventListener("touchmove", l, { capture: !0 }),
        n.addEventListener(
          "touchstart",
          function (e) {
            var t = o(e)[0];
            (r = t.clientX), (i = t.clientY);
          },
          { capture: !0 }
        ),
        n.addEventListener("touchmove", a, { capture: !0 }),
        e.addEventListener("click", s, { capture: !0 }),
        t.addEventListener("click", l, { capture: !0 }),
        n.addEventListener("click", a, { capture: !0 });
      var r = null,
        i = null;
      function o(e) {
        return e.touches || e.originalEvent.touches;
      }
      function s(t) {
        if (r && i) {
          var n = t.touches[0].clientX,
            o = t.touches[0].clientY,
            s = r - n,
            a = i - o;
          Math.abs(s) > Math.abs(a) && (s > 0 || ((e.style.transition = "transform 1s ease-in"), (e.style.transform = "translateX(100%)"), (document.querySelector(".services-body__right").style.visibility = "visible"))),
            (r = null),
            (i = null);
        }
      }
      function a(e) {
        if (r && i) {
          var t = e.touches[0].clientX,
            o = e.touches[0].clientY,
            s = r - t,
            a = i - o;
          Math.abs(s) > Math.abs(a) && (s > 0 || ((n.style.transition = "transform 1s ease-in"), (n.style.transform = "translateX(150%)"), (document.querySelector(".contact-body__right").style.visibility = "visible"))),
            (r = null),
            (i = null);
        }
      }
      function l(e) {
        if (r && i) {
          var n = e.touches[0].clientX,
            o = e.touches[0].clientY,
            s = r - n,
            a = i - o;
          if (Math.abs(s) > Math.abs(a) && s > 0) {
            (t.style.transition = "transform 1s ease-in"), (t.style.transform = "translateX(-150%)"), (document.querySelector(".project-body__right").style.visibility = "visible");
            var l = document.querySelector(".mobile__pagination").children;
            Array.from(l).forEach(function (e, t) {
              var n = "0";
              ++t > 9 && (n = ""), (e.innerHTML = n + t);
            });
          }
          (r = null), (i = null);
        }
      }
      var c = document.querySelector(".blogsArea"),
        u = document.querySelector(".careersArea");
      c.addEventListener("touchmove", function () {
        $.fn.fullpage.setAllowScrolling(!1);
      }),
        c.addEventListener("touchend", function () {
          $.fn.fullpage.setAllowScrolling(!0);
        }),
        u.addEventListener("touchmove", function () {
          $.fn.fullpage.setAllowScrolling(!1);
        }),
        u.addEventListener("touchend", function () {
          $.fn.fullpage.setAllowScrolling(!0);
        });
    },
    170: function (e, t, n) {
      var r, i;
      !(function (o, s) {
        "use strict";
        (r = [n(755)]),
          void 0 ===
          (i = function (e) {
            return (function (e, t, n, r, i) {
              var o = "fullpage-wrapper",
                s = "." + o,
                a = "fp-responsive",
                l = "fp-notransition",
                c = "fp-destroyed",
                u = "fp-enabled",
                d = "fp-viewing",
                f = "active",
                p = ".active",
                h = "fp-completely",
                m = "fp-section",
                g = "." + m,
                v = ".fp-section.active",
                y = "fp-tableCell",
                b = "." + y,
                x = "#fp-nav",
                w = ".fp-tooltip",
                _ = "fp-slide",
                S = "." + _,
                T = ".fp-slide.active",
                C = ".fp-slides",
                k = "fp-slidesContainer",
                A = "." + k,
                E = "fp-table",
                L = "fp-slidesNav",
                D = "." + L,
                O = ".fp-slidesNav a",
                M = "fp-controlArrow",
                P = "." + M,
                R = "fp-prev",
                q = "fp-controlArrow fp-prev",
                j = ".fp-controlArrow.fp-prev",
                N = "fp-controlArrow fp-next",
                I = ".fp-controlArrow.fp-next",
                B = e(t),
                H = e(n);
              e.fn.fullpage = function (y) {
                if (e("html").hasClass(u)) Ut();
                else {
                  var L = e("html, body"),
                    M = e("body"),
                    F = e.fn.fullpage;
                  y = e.extend(
                    {
                      menu: !1,
                      anchors: [],
                      lockAnchors: !1,
                      navigation: !1,
                      navigationPosition: "right",
                      navigationTooltips: [],
                      showActiveTooltip: !1,
                      slidesNavigation: !1,
                      slidesNavPosition: "bottom",
                      scrollBar: !1,
                      hybrid: !1,
                      css3: !0,
                      scrollingSpeed: 700,
                      autoScrolling: !0,
                      fitToSection: !0,
                      fitToSectionDelay: 1e3,
                      easing: "easeInOutCubic",
                      easingcss3: "ease",
                      loopBottom: !1,
                      loopTop: !1,
                      loopHorizontal: !0,
                      continuousVertical: !1,
                      continuousHorizontal: !1,
                      scrollHorizontally: !1,
                      interlockedSlides: !1,
                      dragAndMove: !1,
                      offsetSections: !1,
                      resetSliders: !1,
                      fadingEffect: !1,
                      normalScrollElements: null,
                      scrollOverflow: !1,
                      scrollOverflowReset: !1,
                      scrollOverflowHandler: e.fn.fp_scrolloverflow ? e.fn.fp_scrolloverflow.iscrollHandler : null,
                      scrollOverflowOptions: null,
                      touchSensitivity: 5,
                      normalScrollElementTouchThreshold: 5,
                      bigSectionsDestination: null,
                      keyboardScrolling: !0,
                      animateAnchor: !0,
                      recordHistory: !0,
                      controlArrows: !0,
                      controlArrowColor: "#fff",
                      verticalCentered: !0,
                      sectionsColor: [],
                      paddingTop: 0,
                      paddingBottom: 0,
                      fixedElements: null,
                      responsive: 0,
                      responsiveWidth: 0,
                      responsiveHeight: 0,
                      responsiveSlides: !1,
                      parallax: !1,
                      parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
                      sectionSelector: ".section",
                      slideSelector: ".slide",
                      afterLoad: null,
                      onLeave: null,
                      afterRender: null,
                      afterResize: null,
                      afterReBuild: null,
                      afterSlideLoad: null,
                      onSlideLeave: null,
                      afterResponsive: null,
                      lazyLoading: !0,
                    },
                    y
                  );
                  var z,
                    U,
                    W,
                    $,
                    V = !1,
                    X = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                    Y = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                    G = e(this),
                    J = B.height(),
                    Q = !1,
                    K = !0,
                    Z = !0,
                    ee = [],
                    te = { m: { up: !0, down: !0, left: !0, right: !0 } };
                  te.k = e.extend(!0, {}, te.m);
                  var ne,
                    re,
                    ie,
                    oe,
                    se,
                    ae,
                    le,
                    ce = t.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" },
                    ue = { touchmove: "ontouchmove" in t ? "touchmove" : ce.move, touchstart: "ontouchstart" in t ? "touchstart" : ce.down },
                    de = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                    fe = e.extend(!0, {}, y);
                  Ut(),
                    e.extend(e.easing, {
                      easeInOutCubic: function (e, t, n, r, i) {
                        return (t /= i / 2) < 1 ? (r / 2) * t * t * t + n : (r / 2) * ((t -= 2) * t * t + 2) + n;
                      },
                    }),
                    e(this).length &&
                    ((F.version = "2.9.6"),
                      (F.setAutoScrolling = Te),
                      (F.setRecordHistory = Ce),
                      (F.setScrollingSpeed = ke),
                      (F.setFitToSection = Ae),
                      (F.setLockAnchors = function (e) {
                        y.lockAnchors = e;
                      }),
                      (F.setMouseWheelScrolling = Ee),
                      (F.setAllowScrolling = Le),
                      (F.setKeyboardScrolling = De),
                      (F.moveSectionUp = Oe),
                      (F.moveSectionDown = Me),
                      (F.silentMoveTo = Pe),
                      (F.moveTo = Re),
                      (F.moveSlideRight = qe),
                      (F.moveSlideLeft = je),
                      (F.fitToSection = Fe),
                      (F.reBuild = Ne),
                      (F.setResponsive = Ie),
                      (F.destroy = function (t) {
                        Te(!1, "internal"),
                          Le(!1),
                          De(!1),
                          G.addClass(c),
                          clearTimeout(oe),
                          clearTimeout(ie),
                          clearTimeout(re),
                          clearTimeout(se),
                          clearTimeout(ae),
                          B.off("scroll", He).off("hashchange", at).off("resize", wt),
                          H.off("keydown", ct)
                            .off("keyup", dt)
                            .off("click touchstart", "#fp-nav a")
                            .off("mouseenter", "#fp-nav li")
                            .off("mouseleave", "#fp-nav li")
                            .off("click touchstart", O)
                            .off("mouseover", y.normalScrollElements)
                            .off("mouseout", y.normalScrollElements),
                          e(g).off("click touchstart", P),
                          clearTimeout(oe),
                          clearTimeout(ie),
                          t &&
                          (function () {
                            Bt(0),
                              G.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                                et(e(this), "src");
                              }),
                              G.find("img[data-srcset]").each(function () {
                                et(e(this), "srcset");
                              }),
                              e("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(),
                              e(g).css({ height: "", "background-color": "", padding: "" }),
                              e(S).css({ width: "" }),
                              G.css({ height: "", position: "", "-ms-touch-action": "", "touch-action": "" }),
                              L.css({ overflow: "", height: "" }),
                              e("html").removeClass(u),
                              M.removeClass(a),
                              e.each(M.get(0).className.split(/\s+/), function (e, t) {
                                0 === t.indexOf(d) && M.removeClass(t);
                              }),
                              e(".fp-section, .fp-slide").each(function () {
                                y.scrollOverflowHandler && y.scrollOverflowHandler.remove(e(this)), e(this).removeClass(E + " " + f), e(this).attr("style", e(this).data("fp-styles"));
                              }),
                              Tt(G),
                              G.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function () {
                                e(this).replaceWith(this.childNodes);
                              }),
                              G.css({ "-webkit-transition": "none", transition: "none" }),
                              L.scrollTop(0);
                            var t = [m, _, k];
                            e.each(t, function (t, n) {
                              e("." + n).removeClass(n);
                            });
                          })();
                      }),
                      (F.shared = { afterRenderActions: Be }),
                      y.css3 &&
                      (y.css3 = (function () {
                        var e,
                          r = n.createElement("p"),
                          o = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
                        for (var s in (n.body.insertBefore(r, null), o)) r.style[s] !== i && ((r.style[s] = "translate3d(1px,1px,1px)"), (e = t.getComputedStyle(r).getPropertyValue(o[s])));
                        return n.body.removeChild(r), e !== i && e.length > 0 && "none" !== e;
                      })()),
                      (y.scrollBar = y.scrollBar || y.hybrid),
                      (Se = G.find(y.sectionSelector)),
                      y.anchors.length ||
                      (y.anchors = Se.filter("[data-anchor]")
                        .map(function () {
                          return e(this).data("anchor").toString();
                        })
                        .get()),
                      y.navigationTooltips.length ||
                      (y.navigationTooltips = Se.filter("[data-tooltip]")
                        .map(function () {
                          return e(this).data("tooltip").toString();
                        })
                        .get()),
                      G.css({ height: "100%", position: "relative" }),
                      G.addClass(o),
                      e("html").addClass(u),
                      (J = B.height()),
                      G.removeClass(c),
                      G.find(y.sectionSelector).addClass(m),
                      G.find(y.slideSelector).addClass(_),
                      e(g).each(function (t) {
                        var n = e(this),
                          r = n.find(S),
                          i = r.length;
                        n.data("fp-styles", n.attr("style")),
                          (function (t, n) {
                            n || 0 !== e(v).length || t.addClass(f),
                              ($ = e(v)),
                              t.css("height", J + "px"),
                              y.paddingTop && t.css("padding-top", y.paddingTop),
                              y.paddingBottom && t.css("padding-bottom", y.paddingBottom),
                              void 0 !== y.sectionsColor[n] && t.css("background-color", y.sectionsColor[n]),
                              void 0 !== y.anchors[n] && t.attr("data-anchor", y.anchors[n]);
                          })(n, t),
                          (function (t, n) {
                            void 0 !== y.anchors[n] && t.hasClass(f) && Ct(y.anchors[n], n), y.menu && y.css3 && e(y.menu).closest(s).length && e(y.menu).appendTo(M);
                          })(n, t),
                          i > 0
                            ? (function (t, n, r) {
                              var i = 100 * r,
                                o = 100 / r;
                              n.wrapAll('<div class="fp-slidesContainer" />'),
                                n.parent().wrap('<div class="fp-slides" />'),
                                t.find(A).css("width", i + "%"),
                                r > 1 &&
                                (y.controlArrows &&
                                  (function (e) {
                                    e.find(C).after('<div class="' + q + '"></div><div class="' + N + '"></div>'),
                                      "#fff" != y.controlArrowColor &&
                                      (e.find(I).css("border-color", "transparent transparent transparent " + y.controlArrowColor),
                                        e.find(j).css("border-color", "transparent " + y.controlArrowColor + " transparent transparent")),
                                      y.loopHorizontal || e.find(j).hide();
                                  })(t),
                                  y.slidesNavigation &&
                                  (function (e, t) {
                                    e.append('<div class="fp-slidesNav"><ul></ul></div>');
                                    var n = e.find(D);
                                    n.addClass(y.slidesNavPosition);
                                    for (var r = 0; r < t; r++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
                                    n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass(f);
                                  })(t, r)),
                                n.each(function (t) {
                                  e(this).css("width", o + "%"), y.verticalCentered && At(e(this));
                                });
                              var s = t.find(T);
                              s.length && (0 !== e(v).index(g) || (0 === e(v).index(g) && 0 !== s.index())) ? It(s, "internal") : n.eq(0).addClass(f);
                            })(n, r, i)
                            : y.verticalCentered && At(n);
                      }),
                      y.fixedElements && y.css3 && e(y.fixedElements).appendTo(M),
                      y.navigation &&
                      (function () {
                        M.append('<div id="fp-nav"><ul></ul></div>');
                        var t = e(x);
                        t.addClass(function () {
                          return y.showActiveTooltip ? "fp-show-active " + y.navigationPosition : y.navigationPosition;
                        });
                        for (var n = 0; n < e(g).length; n++) {
                          var r = "";
                          y.anchors.length && (r = y.anchors[n]);
                          var i = '<li><a href="#' + r + '"><span></span></a>',
                            o = y.navigationTooltips[n];
                          void 0 !== o && "" !== o && (i += '<div class="fp-tooltip ' + y.navigationPosition + '">' + o + "</div>"), (i += "</li>"), t.find("ul").append(i);
                        }
                        e(x).css("margin-top", "-" + e(x).height() / 2 + "px"), e(x).find("li").eq(e(v).index(g)).find("a").addClass(f);
                      })(),
                      G.find('iframe[src*="youtube.com/embed/"]').each(function () {
                        var t, n, r;
                        (t = e(this)), (n = "enablejsapi=1"), (r = t.attr("src")), t.attr("src", r + (/\?/.test(r) ? "&" : "?") + n);
                      }),
                      y.scrollOverflow ? (ne = y.scrollOverflowHandler.init(y)) : Be(),
                      Le(!0),
                      Te(y.autoScrolling, "internal"),
                      _t(),
                      jt(),
                      "complete" === n.readyState && st(),
                      B.on("load", st),
                      B.on("scroll", He).on("hashchange", at).blur(mt).resize(wt),
                      H.keydown(ct).keyup(dt).on("click touchstart", "#fp-nav a", gt).on("click touchstart", O, vt).on("click", w, ut),
                      e(g).on("click touchstart", P, ht),
                      y.normalScrollElements &&
                      (H.on("mouseenter touchstart", y.normalScrollElements, function () {
                        Le(!1);
                      }),
                        H.on("mouseleave touchend", y.normalScrollElements, function () {
                          Le(!0);
                        })));
                  var pe = !1,
                    he = 0,
                    me = 0,
                    ge = 0,
                    ve = 0,
                    ye = 0,
                    be = new Date().getTime(),
                    xe = 0,
                    we = 0,
                    _e = J;
                }
                var Se;
                function Te(t, n) {
                  t || Bt(0), zt("autoScrolling", t, n);
                  var r = e(v);
                  y.autoScrolling && !y.scrollBar
                    ? (L.css({ overflow: "hidden", height: "100%" }), Ce(fe.recordHistory, "internal"), G.css({ "-ms-touch-action": "none", "touch-action": "none" }), r.length && Bt(r.position().top))
                    : (L.css({ overflow: "visible", height: "initial" }), Ce(!1, "internal"), G.css({ "-ms-touch-action": "", "touch-action": "" }), r.length && L.scrollTop(r.position().top));
                }
                function Ce(e, t) {
                  zt("recordHistory", e, t);
                }
                function ke(e, t) {
                  zt("scrollingSpeed", e, t);
                }
                function Ae(e, t) {
                  zt("fitToSection", e, t);
                }
                function Ee(e) {
                  e
                    ? ((function () {
                      var e,
                        r = "";
                      t.addEventListener ? (e = "addEventListener") : ((e = "attachEvent"), (r = "on"));
                      var o = "onwheel" in n.createElement("div") ? "wheel" : n.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
                      "DOMMouseScroll" == o ? n[e](r + "MozMousePixelScroll", Ye, !1) : n[e](r + o, Ye, !1);
                    })(),
                      G.on("mousedown", ft).on("mouseup", pt))
                    : (n.addEventListener
                      ? (n.removeEventListener("mousewheel", Ye, !1), n.removeEventListener("wheel", Ye, !1), n.removeEventListener("MozMousePixelScroll", Ye, !1))
                      : n.detachEvent("onmousewheel", Ye),
                      G.off("mousedown", ft).off("mouseup", pt));
                }
                function Le(t, n) {
                  void 0 !== n
                    ? ((n = n.replace(/ /g, "").split(",")),
                      e.each(n, function (e, n) {
                        Ft(t, n, "m");
                      }))
                    : (Ft(t, "all", "m"),
                      t
                        ? (Ee(!0), (X || Y) && (y.autoScrolling && M.off(ue.touchmove).on(ue.touchmove, Ue), e(s).off(ue.touchstart).on(ue.touchstart, Ve).off(ue.touchmove).on(ue.touchmove, We)))
                        : (Ee(!1), (X || Y) && (y.autoScrolling && M.off(ue.touchmove), e(s).off(ue.touchstart).off(ue.touchmove))));
                }
                function De(t, n) {
                  void 0 !== n
                    ? ((n = n.replace(/ /g, "").split(",")),
                      e.each(n, function (e, n) {
                        Ft(t, n, "k");
                      }))
                    : (Ft(t, "all", "k"), (y.keyboardScrolling = t));
                }
                function Oe() {
                  var t = e(v).prev(g);
                  t.length || (!y.loopTop && !y.continuousVertical) || (t = e(g).last()), t.length && Ke(t, null, !0);
                }
                function Me() {
                  var t = e(v).next(g);
                  t.length || (!y.loopBottom && !y.continuousVertical) || (t = e(g).first()), t.length && Ke(t, null, !1);
                }
                function Pe(e, t) {
                  ke(0, "internal"), Re(e, t), ke(fe.scrollingSpeed, "internal");
                }
                function Re(e, t) {
                  var n = Dt(e);
                  void 0 !== t ? Ot(e, t) : n.length > 0 && Ke(n);
                }
                function qe(e) {
                  Ge("right", e);
                }
                function je(e) {
                  Ge("left", e);
                }
                function Ne(t) {
                  if (!G.hasClass(c)) {
                    (Q = !0),
                      (J = B.height()),
                      e(g).each(function () {
                        var t = e(this).find(C),
                          n = e(this).find(S);
                        y.verticalCentered &&
                          e(this)
                            .find(b)
                            .css("height", Et(e(this)) + "px"),
                          e(this).css("height", J + "px"),
                          n.length > 1 && bt(t, t.find(T));
                      }),
                      y.scrollOverflow && ne.createScrollBarForAll();
                    var n = e(v).index(g);
                    n && Pe(n + 1), (Q = !1), e.isFunction(y.afterResize) && t && y.afterResize.call(G), e.isFunction(y.afterReBuild) && !t && y.afterReBuild.call(G);
                  }
                }
                function Ie(t) {
                  var n = M.hasClass(a);
                  t
                    ? n || (Te(!1, "internal"), Ae(!1, "internal"), e(x).hide(), M.addClass(a), e.isFunction(y.afterResponsive) && y.afterResponsive.call(G, t))
                    : n && (Te(fe.autoScrolling, "internal"), Ae(fe.autoScrolling, "internal"), e(x).show(), M.removeClass(a), e.isFunction(y.afterResponsive) && y.afterResponsive.call(G, t));
                }
                function Be() {
                  var t,
                    n = e(v);
                  n.addClass(h),
                    tt(n),
                    nt(n),
                    y.scrollOverflow && y.scrollOverflowHandler.afterLoad(),
                    (!(t = Dt(lt().section)) || (t.length && t.index() === $.index())) && e.isFunction(y.afterLoad) && y.afterLoad.call(n, n.data("anchor"), n.index(g) + 1),
                    e.isFunction(y.afterRender) && y.afterRender.call(G);
                }
                function He() {
                  var t, r, i, o;
                  if (!y.autoScrolling || y.scrollBar) {
                    var s = B.scrollTop(),
                      a = (function (e) {
                        var t = e > he ? "down" : "up";
                        return (he = e), (xe = e), t;
                      })(s),
                      l = 0,
                      c = s + B.height() / 2,
                      u = M.height() - B.height() === s,
                      d = n.querySelectorAll(g);
                    if (u) l = d.length - 1;
                    else if (s) for (var p = 0; p < d.length; ++p) d[p].offsetTop <= c && (l = p);
                    else l = 0;
                    if (
                      ((r = a),
                        (i = e(v).position().top),
                        (o = i + B.height()),
                        ("up" == r ? o >= B.scrollTop() + B.height() : i <= B.scrollTop()) && (e(v).hasClass(h) || e(v).addClass(h).siblings().removeClass(h)),
                        !(t = e(d).eq(l)).hasClass(f))
                    ) {
                      pe = !0;
                      var m,
                        b,
                        x = e(v),
                        w = x.index(g) + 1,
                        _ = kt(t),
                        S = t.data("anchor"),
                        C = t.index(g) + 1,
                        k = t.find(T);
                      k.length && ((b = k.data("anchor")), (m = k.index())),
                        Z &&
                        (t.addClass(f).siblings().removeClass(f),
                          e.isFunction(y.onLeave) && y.onLeave.call(x, w, C, _),
                          e.isFunction(y.afterLoad) && y.afterLoad.call(t, S, C),
                          it(x),
                          tt(t),
                          nt(t),
                          Ct(S, C - 1),
                          y.anchors.length && (z = S),
                          Pt(m, b, S)),
                        clearTimeout(se),
                        (se = setTimeout(function () {
                          pe = !1;
                        }, 100));
                    }
                    y.fitToSection &&
                      (clearTimeout(ae),
                        (ae = setTimeout(function () {
                          y.fitToSection && e(v).outerHeight() <= J && Fe();
                        }, y.fitToSectionDelay)));
                  }
                }
                function Fe() {
                  Z && ((Q = !0), Ke(e(v)), (Q = !1));
                }
                function ze(t) {
                  if (te.m[t]) {
                    var n = "down" === t ? Me : Oe;
                    if (y.scrollOverflow) {
                      var r = y.scrollOverflowHandler.scrollable(e(v)),
                        i = "down" === t ? "bottom" : "top";
                      if (r.length > 0) {
                        if (!y.scrollOverflowHandler.isScrolled(i, r)) return !0;
                        n();
                      } else n();
                    } else n();
                  }
                }
                function Ue(e) {
                  var t = e.originalEvent;
                  y.autoScrolling && $e(t) && e.preventDefault();
                }
                function We(t) {
                  var n = t.originalEvent,
                    i = e(n.target).closest(g);
                  if ($e(n)) {
                    y.autoScrolling && t.preventDefault();
                    var o = Nt(n);
                    (ve = o.y),
                      (ye = o.x),
                      i.find(C).length && r.abs(ge - ye) > r.abs(me - ve)
                        ? !V && r.abs(ge - ye) > (B.outerWidth() / 100) * y.touchSensitivity && (ge > ye ? te.m.right && qe(i) : te.m.left && je(i))
                        : y.autoScrolling && Z && r.abs(me - ve) > (B.height() / 100) * y.touchSensitivity && (me > ve ? ze("down") : ve > me && ze("up"));
                  }
                }
                function $e(e) {
                  return void 0 === e.pointerType || "mouse" != e.pointerType;
                }
                function Ve(e) {
                  var t = e.originalEvent;
                  if ((y.fitToSection && L.stop(), $e(t))) {
                    var n = Nt(t);
                    (me = n.y), (ge = n.x);
                  }
                }
                function Xe(e, t) {
                  for (var n = 0, i = e.slice(r.max(e.length - t, 1)), o = 0; o < i.length; o++) n += i[o];
                  return r.ceil(n / t);
                }
                function Ye(n) {
                  var i = new Date().getTime(),
                    o = e(".fp-completely").hasClass("fp-normal-scroll");
                  if (y.autoScrolling && !W && !o) {
                    var s = (n = n || t.event).wheelDelta || -n.deltaY || -n.detail,
                      a = r.max(-1, r.min(1, s)),
                      l = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
                      c = r.abs(n.wheelDeltaX) < r.abs(n.wheelDelta) || r.abs(n.deltaX) < r.abs(n.deltaY) || !l;
                    ee.length > 149 && ee.shift(), ee.push(r.abs(s)), y.scrollBar && (n.preventDefault ? n.preventDefault() : (n.returnValue = !1));
                    var u = i - be;
                    return (be = i), u > 200 && (ee = []), Z && Xe(ee, 10) >= Xe(ee, 70) && c && ze(a < 0 ? "down" : "up"), !1;
                  }
                  y.fitToSection && L.stop();
                }
                function Ge(t, n) {
                  var r = (void 0 === n ? e(v) : n).find(C),
                    i = r.find(S).length;
                  if (!(!r.length || V || i < 2)) {
                    var o = r.find(T),
                      s = null;
                    if (!(s = "left" === t ? o.prev(S) : o.next(S)).length) {
                      if (!y.loopHorizontal) return;
                      s = "left" === t ? o.siblings(":last") : o.siblings(":first");
                    }
                    (V = !0), bt(r, s, t);
                  }
                }
                function Je() {
                  e(T).each(function () {
                    It(e(this), "internal");
                  });
                }
                function Qe(e) {
                  var t = e.position(),
                    n = t.top,
                    r = t.top > xe,
                    i = n - J + e.outerHeight(),
                    o = y.bigSectionsDestination;
                  return e.outerHeight() > J ? ((r || o) && "bottom" !== o) || (n = i) : (r || (Q && e.is(":last-child"))) && (n = i), (xe = n), n;
                }
                function Ke(t, n, i) {
                  if (void 0 !== t) {
                    var o,
                      a,
                      l = {
                        element: t,
                        callback: n,
                        isMovementUp: i,
                        dtop: Qe(t),
                        yMovement: kt(t),
                        anchorLink: t.data("anchor"),
                        sectionIndex: t.index(g),
                        activeSlide: t.find(T),
                        activeSection: e(v),
                        leavingSection: e(v).index(g) + 1,
                        localIsResizing: Q,
                      };
                    if (!((l.activeSection.is(t) && !Q) || (y.scrollBar && B.scrollTop() === l.dtop && !t.hasClass("fp-auto-height")))) {
                      if ((l.activeSlide.length && ((o = l.activeSlide.data("anchor")), (a = l.activeSlide.index())), e.isFunction(y.onLeave) && !l.localIsResizing)) {
                        var c = l.yMovement;
                        if ((void 0 !== i && (c = i ? "up" : "down"), !1 === y.onLeave.call(l.activeSection, l.leavingSection, l.sectionIndex + 1, c))) return;
                      }
                      y.autoScrolling &&
                        y.continuousVertical &&
                        void 0 !== l.isMovementUp &&
                        ((!l.isMovementUp && "up" == l.yMovement) || (l.isMovementUp && "down" == l.yMovement)) &&
                        (l = (function (t) {
                          return (
                            t.isMovementUp ? e(v).before(t.activeSection.nextAll(g)) : e(v).after(t.activeSection.prevAll(g).get().reverse()),
                            Bt(e(v).position().top),
                            Je(),
                            (t.wrapAroundElements = t.activeSection),
                            (t.dtop = t.element.position().top),
                            (t.yMovement = kt(t.element)),
                            (t.leavingSection = t.activeSection.index(g) + 1),
                            (t.sectionIndex = t.element.index(g)),
                            t
                          );
                        })(l)),
                        l.localIsResizing || it(l.activeSection),
                        y.scrollOverflow && y.scrollOverflowHandler.beforeLeave(),
                        t.addClass(f).siblings().removeClass(f),
                        tt(t),
                        y.scrollOverflow && y.scrollOverflowHandler.onLeave(),
                        (Z = !1),
                        Pt(a, o, l.anchorLink, l.sectionIndex),
                        (function (t) {
                          if (y.css3 && y.autoScrolling && !y.scrollBar)
                            Lt("translate3d(0px, -" + r.round(t.dtop) + "px, 0px)", !0),
                              y.scrollingSpeed
                                ? (clearTimeout(ie),
                                  (ie = setTimeout(function () {
                                    Ze(t);
                                  }, y.scrollingSpeed)))
                                : Ze(t);
                          else {
                            var n = (function (e) {
                              var t = {};
                              return y.autoScrolling && !y.scrollBar ? ((t.options = { top: -e.dtop }), (t.element = s)) : ((t.options = { scrollTop: e.dtop }), (t.element = "html, body")), t;
                            })(t);
                            e(n.element)
                              .animate(n.options, y.scrollingSpeed, y.easing)
                              .promise()
                              .done(function () {
                                y.scrollBar
                                  ? setTimeout(function () {
                                    Ze(t);
                                  }, 30)
                                  : Ze(t);
                              });
                          }
                        })(l),
                        (z = l.anchorLink),
                        Ct(l.anchorLink, l.sectionIndex);
                    }
                  }
                }
                function Ze(t) {
                  (function (t) {
                    t.wrapAroundElements &&
                      t.wrapAroundElements.length &&
                      (t.isMovementUp ? e(".fp-section:first").before(t.wrapAroundElements) : e(".fp-section:last").after(t.wrapAroundElements), Bt(e(v).position().top), Je());
                  })(t),
                    e.isFunction(y.afterLoad) && !t.localIsResizing && y.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1),
                    y.scrollOverflow && y.scrollOverflowHandler.afterLoad(),
                    t.localIsResizing || nt(t.element),
                    t.element.addClass(h).siblings().removeClass(h),
                    (Z = !0),
                    e.isFunction(t.callback) && t.callback.call(this);
                }
                function et(e, t) {
                  e.attr(t, e.data(t)).removeAttr("data-" + t);
                }
                function tt(t) {
                  var n;
                  y.lazyLoading &&
                    ot(t)
                      .find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]")
                      .each(function () {
                        if (
                          ((n = e(this)),
                            e.each(["src", "srcset"], function (e, t) {
                              var r = n.attr("data-" + t);
                              void 0 !== r && r && et(n, t);
                            }),
                            n.is("source"))
                        ) {
                          var t = n.closest("video").length ? "video" : "audio";
                          n.closest(t).get(0).load();
                        }
                      });
                }
                function nt(t) {
                  var n = ot(t);
                  n.find("video, audio").each(function () {
                    var t = e(this).get(0);
                    t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play();
                  }),
                    n.find('iframe[src*="youtube.com/embed/"]').each(function () {
                      var t = e(this).get(0);
                      t.hasAttribute("data-autoplay") && rt(t),
                        (t.onload = function () {
                          t.hasAttribute("data-autoplay") && rt(t);
                        });
                    });
                }
                function rt(e) {
                  e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                }
                function it(t) {
                  var n = ot(t);
                  n.find("video, audio").each(function () {
                    var t = e(this).get(0);
                    t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause();
                  }),
                    n.find('iframe[src*="youtube.com/embed/"]').each(function () {
                      var t = e(this).get(0);
                      /youtube\.com\/embed\//.test(e(this).attr("src")) &&
                        !t.hasAttribute("data-keepplaying") &&
                        e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                    });
                }
                function ot(t) {
                  var n = t.find(T);
                  return n.length && (t = e(n)), t;
                }
                function st() {
                  var e = lt(),
                    t = e.section,
                    n = e.slide;
                  t && (y.animateAnchor ? Ot(t, n) : Pe(t, n));
                }
                function at() {
                  if (!pe && !y.lockAnchors) {
                    var e = lt(),
                      t = e.section,
                      n = e.slide,
                      r = void 0 === z,
                      i = void 0 === z && void 0 === n && !V;
                    t && t.length && ((t && t !== z && !r) || i || (!V && U != n)) && Ot(t, n);
                  }
                }
                function lt() {
                  var e,
                    n,
                    r = t.location.hash;
                  if (r.length) {
                    var i = r.replace("#", "").split("/"),
                      o = r.indexOf("#/") > -1;
                    e = o ? "/" + i[1] : decodeURIComponent(i[0]);
                    var s = o ? i[2] : i[1];
                    s && s.length && (n = decodeURIComponent(s));
                  }
                  return { section: e, slide: n };
                }
                function ct(t) {
                  clearTimeout(le);
                  var n = e(":focus"),
                    r = t.which;
                  if (9 === r)
                    !(function (t) {
                      var n = t.shiftKey,
                        r = e(":focus"),
                        i = e(v),
                        o = i.find(T),
                        s = (o.length ? o : i).find(de).not('[tabindex="-1"]');
                      function a(e) {
                        return e.preventDefault(), s.first().focus();
                      }
                      r.length ? r.closest(v, T).length || (r = a(t)) : a(t), ((!n && r.is(s.last())) || (n && r.is(s.first()))) && t.preventDefault();
                    })(t);
                  else if (!n.is("textarea") && !n.is("input") && !n.is("select") && "true" !== n.attr("contentEditable") && "" !== n.attr("contentEditable") && y.keyboardScrolling && y.autoScrolling) {
                    e.inArray(r, [40, 38, 32, 33, 34]) > -1 && t.preventDefault(),
                      (W = t.ctrlKey),
                      (le = setTimeout(function () {
                        !(function (t) {
                          var n = t.shiftKey;
                          if (Z || !([37, 39].indexOf(t.which) < 0))
                            switch (t.which) {
                              case 38:
                              case 33:
                                te.k.up && Oe();
                                break;
                              case 32:
                                if (n && te.k.up) {
                                  Oe();
                                  break;
                                }
                              case 40:
                              case 34:
                                te.k.down && Me();
                                break;
                              case 36:
                                te.k.up && Re(1);
                                break;
                              case 35:
                                te.k.down && Re(e(g).length);
                                break;
                              case 37:
                                te.k.left && je();
                                break;
                              case 39:
                                te.k.right && qe();
                                break;
                              default:
                            }
                        })(t);
                      }, 150));
                  }
                }
                function ut() {
                  e(this).prev().trigger("click");
                }
                function dt(e) {
                  K && (W = e.ctrlKey);
                }
                function ft(e) {
                  2 == e.which && ((we = e.pageY), G.on("mousemove", yt));
                }
                function pt(e) {
                  2 == e.which && G.off("mousemove");
                }
                function ht() {
                  var t = e(this).closest(g);
                  e(this).hasClass(R) ? te.m.left && je(t) : te.m.right && qe(t);
                }
                function mt() {
                  (K = !1), (W = !1);
                }
                function gt(t) {
                  t.preventDefault();
                  var n = e(this).parent().index();
                  Ke(e(g).eq(n));
                }
                function vt(t) {
                  t.preventDefault();
                  var n = e(this).closest(g).find(C),
                    r = n.find(S).eq(e(this).closest("li").index());
                  bt(n, r);
                }
                function yt(e) {
                  Z && (e.pageY < we && te.m.up ? Oe() : e.pageY > we && te.m.down && Me()), (we = e.pageY);
                }
                function bt(t, n, i) {
                  var o,
                    s,
                    a = t.closest(g),
                    l = {
                      slides: t,
                      destiny: n,
                      direction: i,
                      destinyPos: n.position(),
                      slideIndex: n.index(),
                      section: a,
                      sectionIndex: a.index(g),
                      anchorLink: a.data("anchor"),
                      slidesNav: a.find(D),
                      slideAnchor: qt(n),
                      prevSlide: a.find(T),
                      prevSlideIndex: a.find(T).index(),
                      localIsResizing: Q,
                    };
                  (l.xMovement = ((o = l.prevSlideIndex), (s = l.slideIndex), o == s ? "none" : o > s ? "left" : "right")),
                    l.localIsResizing || (Z = !1),
                    y.onSlideLeave &&
                      !l.localIsResizing &&
                      "none" !== l.xMovement &&
                      e.isFunction(y.onSlideLeave) &&
                      !1 === y.onSlideLeave.call(l.prevSlide, l.anchorLink, l.sectionIndex + 1, l.prevSlideIndex, l.direction, l.slideIndex)
                      ? (V = !1)
                      : (n.addClass(f).siblings().removeClass(f),
                        l.localIsResizing || (it(l.prevSlide), tt(n)),
                        !y.loopHorizontal && y.controlArrows && (a.find(j).toggle(0 !== l.slideIndex), a.find(I).toggle(!n.is(":last-child"))),
                        a.hasClass(f) && !l.localIsResizing && Pt(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex),
                        (function (e, t, n) {
                          var i = t.destinyPos;
                          if (y.css3) {
                            var o = "translate3d(-" + r.round(i.left) + "px, 0px, 0px)";
                            St(e.find(A)).css(Ht(o)),
                              (oe = setTimeout(
                                function () {
                                  n && xt(t);
                                },
                                y.scrollingSpeed,
                                y.easing
                              ));
                          } else
                            e.animate({ scrollLeft: r.round(i.left) }, y.scrollingSpeed, y.easing, function () {
                              n && xt(t);
                            });
                        })(t, l, !0));
                }
                function xt(t) {
                  var n, r;
                  (n = t.slidesNav),
                    (r = t.slideIndex),
                    n.find(p).removeClass(f),
                    n.find("li").eq(r).find("a").addClass(f),
                    t.localIsResizing || (e.isFunction(y.afterSlideLoad) && y.afterSlideLoad.call(t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex), (Z = !0), nt(t.destiny)),
                    (V = !1);
                }
                function wt() {
                  if ((_t(), X)) {
                    var t = e(n.activeElement);
                    if (!t.is("textarea") && !t.is("input") && !t.is("select")) {
                      var i = B.height();
                      r.abs(i - _e) > (20 * r.max(_e, i)) / 100 && (Ne(!0), (_e = i));
                    }
                  } else
                    clearTimeout(re),
                      (re = setTimeout(function () {
                        Ne(!0);
                      }, 350));
                }
                function _t() {
                  var e = y.responsive || y.responsiveWidth,
                    t = y.responsiveHeight,
                    n = e && B.outerWidth() < e,
                    r = t && B.height() < t;
                  e && t ? Ie(n || r) : e ? Ie(n) : t && Ie(r);
                }
                function St(e) {
                  var t = "all " + y.scrollingSpeed + "ms " + y.easingcss3;
                  return e.removeClass(l), e.css({ "-webkit-transition": t, transition: t });
                }
                function Tt(e) {
                  return e.addClass(l);
                }
                function Ct(t, n) {
                  var r;
                  (r = t),
                    y.menu &&
                    (e(y.menu).find(p).removeClass(f),
                      e(y.menu)
                        .find('[data-menuanchor="' + r + '"]')
                        .addClass(f)),
                    (function (t, n) {
                      y.navigation &&
                        (e(x).find(p).removeClass(f),
                          t
                            ? e(x)
                              .find('a[href="#' + t + '"]')
                              .addClass(f)
                            : e(x).find("li").eq(n).find("a").addClass(f));
                    })(t, n);
                }
                function kt(t) {
                  var n = e(v).index(g),
                    r = t.index(g);
                  return n == r ? "none" : n > r ? "up" : "down";
                }
                function At(t) {
                  if (!t.hasClass(E)) {
                    var n = e('<div class="fp-tableCell" />').height(Et(t));
                    t.addClass(E).wrapInner(n);
                  }
                }
                function Et(e) {
                  var t = J;
                  if (y.paddingTop || y.paddingBottom) {
                    var n = e;
                    n.hasClass(m) || (n = e.closest(g));
                    var r = parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom"));
                    t = J - r;
                  }
                  return t;
                }
                function Lt(e, t) {
                  t ? St(G) : Tt(G),
                    G.css(Ht(e)),
                    setTimeout(function () {
                      G.removeClass(l);
                    }, 10);
                }
                function Dt(t) {
                  var n = G.find('.fp-section[data-anchor="' + t + '"]');
                  if (!n.length) {
                    var r = void 0 !== t ? t - 1 : 0;
                    n = e(g).eq(r);
                  }
                  return n;
                }
                function Ot(e, t) {
                  var n = Dt(e);
                  if (n.length) {
                    var r = (function (e, t) {
                      var n = t.find('.fp-slide[data-anchor="' + e + '"]');
                      return n.length || ((e = void 0 !== e ? e : 0), (n = t.find(S).eq(e))), n;
                    })(t, n);
                    e === z || n.hasClass(f)
                      ? Mt(r)
                      : Ke(n, function () {
                        Mt(r);
                      });
                  }
                }
                function Mt(e) {
                  e.length && bt(e.closest(C), e);
                }
                function Pt(e, t, n, r) {
                  var i = "";
                  y.anchors.length && !y.lockAnchors && (e ? (void 0 !== n && (i = n), void 0 === t && (t = e), (U = t), Rt(i + "/" + t)) : void 0 !== e ? ((U = t), Rt(n)) : Rt(n)), jt();
                }
                function Rt(e) {
                  if (y.recordHistory) location.hash = e;
                  else if (X || Y) t.history.replaceState(i, i, "#" + e);
                  else {
                    var n = t.location.href.split("#")[0];
                    t.location.replace(n + "#" + e);
                  }
                }
                function qt(e) {
                  var t = e.data("anchor"),
                    n = e.index();
                  return void 0 === t && (t = n), t;
                }
                function jt() {
                  var t = e(v),
                    n = t.find(T),
                    r = qt(t),
                    i = qt(n),
                    o = String(r);
                  n.length && (o = o + "-" + i), (o = o.replace("/", "-").replace("#", ""));
                  var s = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
                  (M[0].className = M[0].className.replace(s, "")), M.addClass("fp-viewing-" + o);
                }
                function Nt(e) {
                  var t = [];
                  return (
                    (t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY),
                    (t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX),
                    Y && $e(e) && (y.scrollBar || !y.autoScrolling) && ((t.y = e.touches[0].pageY), (t.x = e.touches[0].pageX)),
                    t
                  );
                }
                function It(e, t) {
                  ke(0, "internal"), void 0 !== t && (Q = !0), bt(e.closest(C), e), void 0 !== t && (Q = !1), ke(fe.scrollingSpeed, "internal");
                }
                function Bt(e) {
                  var t = r.round(e);
                  y.css3 && y.autoScrolling && !y.scrollBar ? Lt("translate3d(0px, -" + t + "px, 0px)", !1) : y.autoScrolling && !y.scrollBar ? G.css("top", -t) : L.scrollTop(t);
                }
                function Ht(e) {
                  return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
                }
                function Ft(t, n, r) {
                  "all" !== n
                    ? (te[r][n] = t)
                    : e.each(Object.keys(te[r]), function (e, n) {
                      te[r][n] = t;
                    });
                }
                function zt(e, t, n) {
                  (y[e] = t), "internal" !== n && (fe[e] = t);
                }
                function Ut() {
                  e("html").hasClass(u)
                    ? Wt("error", "Fullpage.js can only be initialized once and you are doing it multiple times!")
                    : (y.continuousVertical &&
                      (y.loopTop || y.loopBottom) &&
                      ((y.continuousVertical = !1), Wt("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                      y.scrollBar && y.scrollOverflow && Wt("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),
                      !y.continuousVertical ||
                      (!y.scrollBar && y.autoScrolling) ||
                      ((y.continuousVertical = !1), Wt("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                      y.scrollOverflow &&
                      !y.scrollOverflowHandler &&
                      ((y.scrollOverflow = !1), Wt("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),
                      e.each(
                        [
                          "fadingEffect",
                          "continuousHorizontal",
                          "scrollHorizontally",
                          "interlockedSlides",
                          "resetSliders",
                          "responsiveSlides",
                          "offsetSections",
                          "dragAndMove",
                          "scrollOverflowReset",
                          "parallax",
                        ],
                        function (e, t) {
                          y[t] && Wt("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + t);
                        }
                      ),
                      e.each(y.anchors, function (t, n) {
                        var r = H.find("[name]").filter(function () {
                          return e(this).attr("name") && e(this).attr("name").toLowerCase() == n.toLowerCase();
                        }),
                          i = H.find("[id]").filter(function () {
                            return e(this).attr("id") && e(this).attr("id").toLowerCase() == n.toLowerCase();
                          });
                        (i.length || r.length) &&
                          (Wt("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),
                            i.length && Wt("error", '"' + n + '" is is being used by another element `id` property'),
                            r.length && Wt("error", '"' + n + '" is is being used by another element `name` property'));
                      }));
                }
                function Wt(e, t) {
                  console && console[e] && console[e]("fullPage: " + t);
                }
              };
            })(e, o, o.document, o.Math);
          }.apply(t, r)) || (e.exports = i);
      })("undefined" != typeof window ? window : this);
    },
    755: function (e, t) {
      var n;
      !(function (t, n) {
        "use strict";
        "object" == typeof e.exports
          ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
              if (!e.document) throw new Error("jQuery requires a window with a document");
              return n(e);
            })
          : n(t);
      })("undefined" != typeof window ? window : this, function (r, i) {
        "use strict";
        var o = [],
          s = Object.getPrototypeOf,
          a = o.slice,
          l = o.flat
            ? function (e) {
              return o.flat.call(e);
            }
            : function (e) {
              return o.concat.apply([], e);
            },
          c = o.push,
          u = o.indexOf,
          d = {},
          f = d.toString,
          p = d.hasOwnProperty,
          h = p.toString,
          m = h.call(Object),
          g = {},
          v = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
          },
          y = function (e) {
            return null != e && e === e.window;
          },
          b = r.document,
          x = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function w(e, t, n) {
          var r,
            i,
            o = (n = n || b).createElement("script");
          if (((o.text = e), t)) for (r in x) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
          n.head.appendChild(o).parentNode.removeChild(o);
        }
        function _(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[f.call(e)] || "object" : typeof e;
        }
        var S = "3.6.0",
          T = function (e, t) {
            return new T.fn.init(e, t);
          };
        function C(e) {
          var t = !!e && "length" in e && e.length,
            n = _(e);
          return !v(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
        }
        (T.fn = T.prototype = {
          jquery: S,
          constructor: T,
          length: 0,
          toArray: function () {
            return a.call(this);
          },
          get: function (e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
          },
          pushStack: function (e) {
            var t = T.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return T.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              T.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(a.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              T.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              T.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: o.sort,
          splice: o.splice,
        }),
          (T.extend = T.fn.extend = function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              s = arguments[0] || {},
              a = 1,
              l = arguments.length,
              c = !1;
            for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || v(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
              if (null != (e = arguments[a]))
                for (t in e)
                  (r = e[t]),
                    "__proto__" !== t &&
                    s !== r &&
                    (c && r && (T.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = s[t]), (o = i && !Array.isArray(n) ? [] : i || T.isPlainObject(n) ? n : {}), (i = !1), (s[t] = T.extend(c, o, r)))
                      : void 0 !== r && (s[t] = r));
            return s;
          }),
          T.extend({
            expando: "jQuery" + (S + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () { },
            isPlainObject: function (e) {
              var t, n;
              return !(!e || "[object Object]" !== f.call(e) || ((t = s(e)) && ("function" != typeof (n = p.call(t, "constructor") && t.constructor) || h.call(n) !== m)));
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e, t, n) {
              w(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
              var n,
                r = 0;
              if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return null != e && (C(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : u.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
              return (e.length = i), e;
            },
            grep: function (e, t, n) {
              for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
              return r;
            },
            map: function (e, t, n) {
              var r,
                i,
                o = 0,
                s = [];
              if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
              else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
              return l(s);
            },
            guid: 1,
            support: g,
          }),
          "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]),
          T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          });
        var k = (function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l,
            c,
            u,
            d,
            f,
            p,
            h,
            m,
            g,
            v,
            y,
            b,
            x = "sizzle" + 1 * new Date(),
            w = e.document,
            _ = 0,
            S = 0,
            T = le(),
            C = le(),
            k = le(),
            A = le(),
            E = function (e, t) {
              return e === t && (d = !0), 0;
            },
            L = {}.hasOwnProperty,
            D = [],
            O = D.pop,
            M = D.push,
            P = D.push,
            R = D.slice,
            q = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
              return -1;
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            B = "\\[[\\x20\\t\\r\\n\\f]*(" + I + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + N + "*\\]",
            H = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
            F = new RegExp(N + "+", "g"),
            z = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            U = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
            W = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
            $ = new RegExp(N + "|>"),
            V = new RegExp(H),
            X = new RegExp("^" + I + "$"),
            Y = {
              ID: new RegExp("^#(" + I + ")"),
              CLASS: new RegExp("^\\.(" + I + ")"),
              TAG: new RegExp("^(" + I + "|[*])"),
              ATTR: new RegExp("^" + B),
              PSEUDO: new RegExp("^" + H),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + j + ")$", "i"),
              needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i"),
            },
            G = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
              return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            oe = function () {
              f();
            },
            se = xe(
              function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            P.apply((D = R.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
          } catch (e) {
            P = {
              apply: D.length
                ? function (e, t) {
                  M.apply(e, R.call(t));
                }
                : function (e, t) {
                  for (var n = e.length, r = 0; (e[n++] = t[r++]););
                  e.length = n - 1;
                },
            };
          }
          function ae(e, t, r, i) {
            var o,
              a,
              c,
              u,
              d,
              h,
              v,
              y = t && t.ownerDocument,
              w = t ? t.nodeType : 9;
            if (((r = r || []), "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return r;
            if (!i && (f(t), (t = t || p), m)) {
              if (11 !== w && (d = Z.exec(e)))
                if ((o = d[1])) {
                  if (9 === w) {
                    if (!(c = t.getElementById(o))) return r;
                    if (c.id === o) return r.push(c), r;
                  } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return r.push(c), r;
                } else {
                  if (d[2]) return P.apply(r, t.getElementsByTagName(e)), r;
                  if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(o)), r;
                }
              if (n.qsa && !A[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                if (((v = e), (y = t), 1 === w && ($.test(e) || W.test(e)))) {
                  for (((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) || ((u = t.getAttribute("id")) ? (u = u.replace(re, ie)) : t.setAttribute("id", (u = x))), a = (h = s(e)).length; a--;)
                    h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                  v = h.join(",");
                }
                try {
                  return P.apply(r, y.querySelectorAll(v)), r;
                } catch (t) {
                  A(e, !0);
                } finally {
                  u === x && t.removeAttribute("id");
                }
              }
            }
            return l(e.replace(z, "$1"), t, r, i);
          }
          function le() {
            var e = [];
            return function t(n, i) {
              return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
            };
          }
          function ce(e) {
            return (e[x] = !0), e;
          }
          function ue(e) {
            var t = p.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function de(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t;
          }
          function fe(e, t) {
            var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling);) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function pe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function me(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ge(e) {
            return ce(function (t) {
              return (
                (t = +t),
                ce(function (n, r) {
                  for (var i, o = e([], n.length, t), s = o.length; s--;) n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = ae.support = {}),
            (o = ae.isXML = function (e) {
              var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
              return !G.test(t || (n && n.nodeName) || "HTML");
            }),
            (f = ae.setDocument = function (e) {
              var t,
                i,
                s = e ? e.ownerDocument || e : w;
              return s != p && 9 === s.nodeType && s.documentElement
                ? ((h = (p = s).documentElement),
                  (m = !o(p)),
                  w != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)),
                  (n.scope = ue(function (e) {
                    return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                  })),
                  (n.attributes = ue(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ue(function (e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
                  })),
                  (n.getElementsByClassName = K.test(p.getElementsByClassName)),
                  (n.getById = ue(function (e) {
                    return (h.appendChild(e).id = x), !p.getElementsByName || !p.getElementsByName(x).length;
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; (o = i[r++]);) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                      return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                    }
                    : function (e, t) {
                      var n,
                        r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = o[i++]);) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return o;
                    }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
                    }),
                  (v = []),
                  (g = []),
                  (n.qsa = K.test(p.querySelectorAll)) &&
                  (ue(function (e) {
                    var t;
                    (h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length || g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + j + ")"),
                      e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="),
                      (t = p.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length || g.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                      e.querySelectorAll(":checked").length || g.push(":checked"),
                      e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"),
                      e.querySelectorAll("\\\f"),
                      g.push("[\\r\\n\\f]");
                  }),
                    ue(function (e) {
                      e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = p.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        g.push(",.*:");
                    })),
                  (n.matchesSelector = K.test((y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                  ue(function (e) {
                    (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", H);
                  }),
                  (g = g.length && new RegExp(g.join("|"))),
                  (v = v.length && new RegExp(v.join("|"))),
                  (t = K.test(h.compareDocumentPosition)),
                  (b =
                    t || K.test(h.contains)
                      ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                      }
                      : function (e, t) {
                        if (t) for (; (t = t.parentNode);) if (t === e) return !0;
                        return !1;
                      }),
                  (E = t
                    ? function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e == p || (e.ownerDocument == w && b(w, e))
                            ? -1
                            : t == p || (t.ownerDocument == w && b(w, t))
                              ? 1
                              : u
                                ? q(u, e) - q(u, t)
                                : 0
                          : 4 & r
                            ? -1
                            : 1)
                      );
                    }
                    : function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var n,
                        r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                      if (!i || !o) return e == p ? -1 : t == p ? 1 : i ? -1 : o ? 1 : u ? q(u, e) - q(u, t) : 0;
                      if (i === o) return fe(e, t);
                      for (n = e; (n = n.parentNode);) s.unshift(n);
                      for (n = t; (n = n.parentNode);) a.unshift(n);
                      for (; s[r] === a[r];) r++;
                      return r ? fe(s[r], a[r]) : s[r] == w ? -1 : a[r] == w ? 1 : 0;
                    }),
                  p)
                : p;
            }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if ((f(e), n.matchesSelector && m && !A[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))))
                try {
                  var r = y.call(e, t);
                  if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                } catch (e) {
                  A(t, !0);
                }
              return ae(t, p, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != p && f(e), b(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != p && f(e);
              var i = r.attrHandle[t.toLowerCase()],
                o = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
              return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(re, ie);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                r = [],
                i = 0,
                o = 0;
              if (((d = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(E), d)) {
                for (; (t = e[o++]);) t === e[o] && (i = r.push(o));
                for (; i--;) e.splice(r[i], 1);
              }
              return (u = null), e;
            }),
            (i = ae.getText = function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[r++]);) n += i(t);
              return n;
            }),
            (r = ae.selectors = {
              cacheLength: 50,
              createPseudo: ce,
              match: Y,
              attrHandle: {},
              find: {},
              relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
              preFilter: {
                ATTR: function (e) {
                  return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || ae.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && ae.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return Y.CHILD.test(e[0])
                    ? null
                    : (e[3] ? (e[2] = e[4] || e[5] || "") : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                      return !0;
                    }
                    : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function (e) {
                  var t = T[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + N + "|$)")) &&
                      T(e, function (e) {
                        return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = ae.attr(r, e);
                    return null == i
                      ? "!=" === t
                      : !t ||
                      ((i += ""),
                        "=" === t
                          ? i === n
                          : "!=" === t
                            ? i !== n
                            : "^=" === t
                              ? n && 0 === i.indexOf(n)
                              : "*=" === t
                                ? n && i.indexOf(n) > -1
                                : "$=" === t
                                  ? n && i.slice(-n.length) === n
                                  : "~=" === t
                                    ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1
                                    : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    a = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                      return !!e.parentNode;
                    }
                    : function (t, n, l) {
                      var c,
                        u,
                        d,
                        f,
                        p,
                        h,
                        m = o !== s ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        v = a && t.nodeName.toLowerCase(),
                        y = !l && !a,
                        b = !1;
                      if (g) {
                        if (o) {
                          for (; m;) {
                            for (f = t; (f = f[m]);) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                            h = m = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [s ? g.firstChild : g.lastChild]), s && y)) {
                          for (
                            b = (p = (c = (u = (d = (f = g)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === _ && c[1]) && c[2], f = p && g.childNodes[p];
                            (f = (++p && f && f[m]) || (b = p = 0) || h.pop());

                          )
                            if (1 === f.nodeType && ++b && f === t) {
                              u[e] = [_, p, b];
                              break;
                            }
                        } else if ((y && (b = p = (c = (u = (d = (f = t)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === _ && c[1]), !1 === b))
                          for (
                            ;
                            (f = (++p && f && f[m]) || (b = p = 0) || h.pop()) &&
                            ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [_, b]), f !== t));

                          );
                        return (b -= i) === r || (b % r == 0 && b / r >= 0);
                      }
                    };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                  return i[x]
                    ? i(t)
                    : i.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                            for (var r, o = i(e, t), s = o.length; s--;) e[(r = q(e, o[s]))] = !(n[r] = o[s]);
                          })
                          : function (e) {
                            return i(e, 0, n);
                          })
                      : i;
                },
              },
              pseudos: {
                not: ce(function (e) {
                  var t = [],
                    n = [],
                    r = a(e.replace(z, "$1"));
                  return r[x]
                    ? ce(function (e, t, n, i) {
                      for (var o, s = r(e, null, i, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o));
                    })
                    : function (e, i, o) {
                      return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                    };
                }),
                has: ce(function (e) {
                  return function (t) {
                    return ae(e, t).length > 0;
                  };
                }),
                contains: ce(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || i(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: ce(function (e) {
                  return (
                    X.test(e || "") || ae.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if ((n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return Q.test(e.nodeName);
                },
                input: function (e) {
                  return J.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ge(function () {
                  return [0];
                }),
                last: ge(function (e, t) {
                  return [t - 1];
                }),
                eq: ge(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ge(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ge(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ge(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                  return e;
                }),
                gt: ge(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                  return e;
                }),
              },
            }),
            (r.pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = pe(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function ye() { }
          function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function xe(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              s = n && "parentNode" === o,
              a = S++;
            return t.first
              ? function (t, n, i) {
                for (; (t = t[r]);) if (1 === t.nodeType || s) return e(t, n, i);
                return !1;
              }
              : function (t, n, l) {
                var c,
                  u,
                  d,
                  f = [_, a];
                if (l) {
                  for (; (t = t[r]);) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                } else
                  for (; (t = t[r]);)
                    if (1 === t.nodeType || s)
                      if (((u = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                      else {
                        if ((c = u[o]) && c[0] === _ && c[1] === a) return (f[2] = c[2]);
                        if (((u[o] = f), (f[2] = e(t, n, l)))) return !0;
                      }
                return !1;
              };
          }
          function we(e) {
            return e.length > 1
              ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                return !0;
              }
              : e[0];
          }
          function _e(e, t, n, r, i) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), c && t.push(a)));
            return s;
          }
          function Se(e, t, n, r, i, o) {
            return (
              r && !r[x] && (r = Se(r)),
              i && !i[x] && (i = Se(i, o)),
              ce(function (o, s, a, l) {
                var c,
                  u,
                  d,
                  f = [],
                  p = [],
                  h = s.length,
                  m =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                      return n;
                    })(t || "*", a.nodeType ? [a] : a, []),
                  g = !e || (!o && t) ? m : _e(m, f, e, a, l),
                  v = n ? (i || (o ? e : h || r) ? [] : s) : g;
                if ((n && n(g, v, a, l), r)) for (c = _e(v, p), r(c, [], a, l), u = c.length; u--;) (d = c[u]) && (v[p[u]] = !(g[p[u]] = d));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (c = [], u = v.length; u--;) (d = v[u]) && c.push((g[u] = d));
                      i(null, (v = []), c, l);
                    }
                    for (u = v.length; u--;) (d = v[u]) && (c = i ? q(o, d) : f[u]) > -1 && (o[c] = !(s[c] = d));
                  }
                } else (v = _e(v === s ? v.splice(h, v.length) : v)), i ? i(null, s, v, l) : P.apply(s, v);
              })
            );
          }
          function Te(e) {
            for (
              var t,
              n,
              i,
              o = e.length,
              s = r.relative[e[0].type],
              a = s || r.relative[" "],
              l = s ? 1 : 0,
              u = xe(
                function (e) {
                  return e === t;
                },
                a,
                !0
              ),
              d = xe(
                function (e) {
                  return q(t, e) > -1;
                },
                a,
                !0
              ),
              f = [
                function (e, n, r) {
                  var i = (!s && (r || n !== c)) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                  return (t = null), i;
                },
              ];
              l < o;
              l++
            )
              if ((n = r.relative[e[l].type])) f = [xe(we(f), n)];
              else {
                if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                  for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                  return Se(
                    l > 1 && we(f),
                    l > 1 && be(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"),
                    n,
                    l < i && Te(e.slice(l, i)),
                    i < o && Te((e = e.slice(i))),
                    i < o && be(e)
                  );
                }
                f.push(n);
              }
            return we(f);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (s = ae.tokenize = function (e, t) {
              var n,
                i,
                o,
                s,
                a,
                l,
                c,
                u = C[e + " "];
              if (u) return t ? 0 : u.slice(0);
              for (a = e, l = [], c = r.preFilter; a;) {
                for (s in ((n && !(i = U.exec(a))) || (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
                  (n = !1),
                  (i = W.exec(a)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(z, " ") }), (a = a.slice(n.length))),
                  r.filter))
                  !(i = Y[s].exec(a)) || (c[s] && !(i = c[s](i))) || ((n = i.shift()), o.push({ value: n, type: s, matches: i }), (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
            }),
            (a = ae.compile = function (e, t) {
              var n,
                i = [],
                o = [],
                a = k[e + " "];
              if (!a) {
                for (t || (t = s(e)), n = t.length; n--;) (a = Te(t[n]))[x] ? i.push(a) : o.push(a);
                (a = k(
                  e,
                  (function (e, t) {
                    var n = t.length > 0,
                      i = e.length > 0,
                      o = function (o, s, a, l, u) {
                        var d,
                          h,
                          g,
                          v = 0,
                          y = "0",
                          b = o && [],
                          x = [],
                          w = c,
                          S = o || (i && r.find.TAG("*", u)),
                          T = (_ += null == w ? 1 : Math.random() || 0.1),
                          C = S.length;
                        for (u && (c = s == p || s || u); y !== C && null != (d = S[y]); y++) {
                          if (i && d) {
                            for (h = 0, s || d.ownerDocument == p || (f(d), (a = !m)); (g = e[h++]);)
                              if (g(d, s || p, a)) {
                                l.push(d);
                                break;
                              }
                            u && (_ = T);
                          }
                          n && ((d = !g && d) && v--, o && b.push(d));
                        }
                        if (((v += y), n && y !== v)) {
                          for (h = 0; (g = t[h++]);) g(b, x, s, a);
                          if (o) {
                            if (v > 0) for (; y--;) b[y] || x[y] || (x[y] = O.call(l));
                            x = _e(x);
                          }
                          P.apply(l, x), u && !o && x.length > 0 && v + t.length > 1 && ae.uniqueSort(l);
                        }
                        return u && ((_ = T), (c = w)), b;
                      };
                    return n ? ce(o) : o;
                  })(o, i)
                )),
                  (a.selector = e);
              }
              return a;
            }),
            (l = ae.select = function (e, t, n, i) {
              var o,
                l,
                c,
                u,
                d,
                f = "function" == typeof e && e,
                p = !i && s((e = f.selector || e));
              if (((n = n || []), 1 === p.length)) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && r.relative[l[1].type]) {
                  if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                  f && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                }
                for (o = Y.needsContext.test(e) ? 0 : l.length; o-- && ((c = l[o]), !r.relative[(u = c.type)]);)
                  if ((d = r.find[u]) && (i = d(c.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))) {
                    if ((l.splice(o, 1), !(e = i.length && be(l)))) return P.apply(n, i), n;
                    break;
                  }
              }
              return (f || a(e, p))(i, t, !m, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
            }),
            (n.sortStable = x.split("").sort(E).join("") === x),
            (n.detectDuplicates = !!d),
            f(),
            (n.sortDetached = ue(function (e) {
              return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            ue(function (e) {
              return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
            de("type|href|height|width", function (e, t, n) {
              if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (n.attributes &&
              ue(function (e) {
                return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
              })) ||
            de("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
            ue(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
            de(j, function (e, t, n) {
              var r;
              if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
            }),
            ae
          );
        })(r);
        (T.find = k), (T.expr = k.selectors), (T.expr[":"] = T.expr.pseudos), (T.uniqueSort = T.unique = k.uniqueSort), (T.text = k.getText), (T.isXMLDoc = k.isXML), (T.contains = k.contains), (T.escapeSelector = k.escape);
        var A = function (e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
              if (i && T(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
          E = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          L = T.expr.match.needsContext;
        function D(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function M(e, t, n) {
          return v(t)
            ? T.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
            : t.nodeType
              ? T.grep(e, function (e) {
                return (e === t) !== n;
              })
              : "string" != typeof t
                ? T.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
                })
                : T.filter(t, e, n);
        }
        (T.filter = function (e, t, n) {
          var r = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
              ? T.find.matchesSelector(r, e)
                ? [r]
                : []
              : T.find.matches(
                e,
                T.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
          );
        }),
          T.fn.extend({
            find: function (e) {
              var t,
                n,
                r = this.length,
                i = this;
              if ("string" != typeof e)
                return this.pushStack(
                  T(e).filter(function () {
                    for (t = 0; t < r; t++) if (T.contains(i[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, i[t], n);
              return r > 1 ? T.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(M(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(M(this, e || [], !0));
            },
            is: function (e) {
              return !!M(this, "string" == typeof e && L.test(e) ? T(e) : e || [], !1).length;
            },
          });
        var P,
          R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((T.fn.init = function (e, t, n) {
          var r, i;
          if (!e) return this;
          if (((n = n || P), "string" == typeof e)) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : R.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
              if (((t = t instanceof T ? t[0] : t), T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), O.test(r[1]) && T.isPlainObject(t)))
                for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (i = b.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
          }
          return e.nodeType ? ((this[0] = e), (this.length = 1), this) : v(e) ? (void 0 !== n.ready ? n.ready(e) : e(T)) : T.makeArray(e, this);
        }).prototype = T.fn),
          (P = T(b));
        var q = /^(?:parents|prev(?:Until|All))/,
          j = { children: !0, contents: !0, next: !0, prev: !0 };
        function N(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType;);
          return e;
        }
        T.fn.extend({
          has: function (e) {
            var t = T(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              r = 0,
              i = this.length,
              o = [],
              s = "string" != typeof e && T(e);
            if (!L.test(e))
              for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
          },
          index: function (e) {
            return e ? ("string" == typeof e ? u.call(T(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          },
          add: function (e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
          },
          addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
          },
        }),
          T.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return A(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return A(e, "parentNode", n);
              },
              next: function (e) {
                return N(e, "nextSibling");
              },
              prev: function (e) {
                return N(e, "previousSibling");
              },
              nextAll: function (e) {
                return A(e, "nextSibling");
              },
              prevAll: function (e) {
                return A(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return A(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return A(e, "previousSibling", n);
              },
              siblings: function (e) {
                return E((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return E(e.firstChild);
              },
              contents: function (e) {
                return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e), T.merge([], e.childNodes));
              },
            },
            function (e, t) {
              T.fn[e] = function (n, r) {
                var i = T.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = T.filter(r, i)), this.length > 1 && (j[e] || T.uniqueSort(i), q.test(e) && i.reverse()), this.pushStack(i);
              };
            }
          );
        var I = /[^\x20\t\r\n\f]+/g;
        function B(e) {
          return e;
        }
        function H(e) {
          throw e;
        }
        function F(e, t, n, r) {
          var i;
          try {
            e && v((i = e.promise)) ? i.call(e).done(t).fail(n) : e && v((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (T.Callbacks = function (e) {
          e =
            "string" == typeof e
              ? (function (e) {
                var t = {};
                return (
                  T.each(e.match(I) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
              : T.extend({}, e);
          var t,
            n,
            r,
            i,
            o = [],
            s = [],
            a = -1,
            l = function () {
              for (i = i || e.once, r = t = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = o.length), (n = !1));
              e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            c = {
              add: function () {
                return (
                  o &&
                  (n && !t && ((a = o.length - 1), s.push(n)),
                    (function t(n) {
                      T.each(n, function (n, r) {
                        v(r) ? (e.unique && c.has(r)) || o.push(r) : r && r.length && "string" !== _(r) && t(r);
                      });
                    })(arguments),
                    n && !t && l()),
                  this
                );
              },
              remove: function () {
                return (
                  T.each(arguments, function (e, t) {
                    for (var n; (n = T.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? T.inArray(e, o) > -1 : o.length > 0;
              },
              empty: function () {
                return o && (o = []), this;
              },
              disable: function () {
                return (i = s = []), (o = n = ""), this;
              },
              disabled: function () {
                return !o;
              },
              lock: function () {
                return (i = s = []), n || t || (o = n = ""), this;
              },
              locked: function () {
                return !!i;
              },
              fireWith: function (e, n) {
                return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || l()), this;
              },
              fire: function () {
                return c.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!r;
              },
            };
          return c;
        }),
          T.extend({
            Deferred: function (e) {
              var t = [
                ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"],
              ],
                n = "pending",
                i = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return o.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return i.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return T.Deferred(function (n) {
                      T.each(t, function (t, r) {
                        var i = v(e[r[4]]) && e[r[4]];
                        o[r[1]](function () {
                          var e = i && i.apply(this, arguments);
                          e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    }).promise();
                  },
                  then: function (e, n, i) {
                    var o = 0;
                    function s(e, t, n, i) {
                      return function () {
                        var a = this,
                          l = arguments,
                          c = function () {
                            var r, c;
                            if (!(e < o)) {
                              if ((r = n.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                              (c = r && ("object" == typeof r || "function" == typeof r) && r.then),
                                v(c)
                                  ? i
                                    ? c.call(r, s(o, t, B, i), s(o, t, H, i))
                                    : (o++, c.call(r, s(o, t, B, i), s(o, t, H, i), s(o, t, B, t.notifyWith)))
                                  : (n !== B && ((a = void 0), (l = [r])), (i || t.resolveWith)(a, l));
                            }
                          },
                          u = i
                            ? c
                            : function () {
                              try {
                                c();
                              } catch (r) {
                                T.Deferred.exceptionHook && T.Deferred.exceptionHook(r, u.stackTrace), e + 1 >= o && (n !== H && ((a = void 0), (l = [r])), t.rejectWith(a, l));
                              }
                            };
                        e ? u() : (T.Deferred.getStackHook && (u.stackTrace = T.Deferred.getStackHook()), r.setTimeout(u));
                      };
                    }
                    return T.Deferred(function (r) {
                      t[0][3].add(s(0, r, v(i) ? i : B, r.notifyWith)), t[1][3].add(s(0, r, v(e) ? e : B)), t[2][3].add(s(0, r, v(n) ? n : H));
                    }).promise();
                  },
                  promise: function (e) {
                    return null != e ? T.extend(e, i) : i;
                  },
                },
                o = {};
              return (
                T.each(t, function (e, r) {
                  var s = r[2],
                    a = r[5];
                  (i[r[1]] = s.add),
                    a &&
                    s.add(
                      function () {
                        n = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                    s.add(r[3].fire),
                    (o[r[0]] = function () {
                      return o[r[0] + "With"](this === o ? void 0 : this, arguments), this;
                    }),
                    (o[r[0] + "With"] = s.fireWith);
                }),
                i.promise(o),
                e && e.call(o, o),
                o
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                i = a.call(arguments),
                o = T.Deferred(),
                s = function (e) {
                  return function (n) {
                    (r[e] = this), (i[e] = arguments.length > 1 ? a.call(arguments) : n), --t || o.resolveWith(r, i);
                  };
                };
              if (t <= 1 && (F(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();
              for (; n--;) F(i[n], s(n), o.reject);
              return o.promise();
            },
          });
        var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (T.Deferred.exceptionHook = function (e, t) {
          r.console && r.console.warn && e && z.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
        }),
          (T.readyException = function (e) {
            r.setTimeout(function () {
              throw e;
            });
          });
        var U = T.Deferred();
        function W() {
          b.removeEventListener("DOMContentLoaded", W), r.removeEventListener("load", W), T.ready();
        }
        (T.fn.ready = function (e) {
          return (
            U.then(e).catch(function (e) {
              T.readyException(e);
            }),
            this
          );
        }),
          T.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --T.readyWait : T.isReady) || ((T.isReady = !0), (!0 !== e && --T.readyWait > 0) || U.resolveWith(b, [T]));
            },
          }),
          (T.ready.then = U.then),
          "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll) ? r.setTimeout(T.ready) : (b.addEventListener("DOMContentLoaded", W), r.addEventListener("load", W));
        var $ = function (e, t, n, r, i, o, s) {
          var a = 0,
            l = e.length,
            c = null == n;
          if ("object" === _(n)) for (a in ((i = !0), n)) $(e, t, a, n[a], !0, o, s);
          else if (
            void 0 !== r &&
            ((i = !0),
              v(r) || (s = !0),
              c &&
              (s
                ? (t.call(e, r), (t = null))
                : ((c = t),
                  (t = function (e, t, n) {
                    return c.call(T(e), n);
                  }))),
              t)
          )
            for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
          return i ? e : c ? t.call(e) : l ? t(e[0], n) : o;
        },
          V = /^-ms-/,
          X = /-([a-z])/g;
        function Y(e, t) {
          return t.toUpperCase();
        }
        function G(e) {
          return e.replace(V, "ms-").replace(X, Y);
        }
        var J = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function Q() {
          this.expando = T.expando + Q.uid++;
        }
        (Q.uid = 1),
          (Q.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return t || ((t = {}), J(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
              var r,
                i = this.cache(e);
              if ("string" == typeof t) i[G(t)] = n;
              else for (r in t) i[G(r)] = t[r];
              return i;
            },
            get: function (e, t) {
              return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                r = e[this.expando];
              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(I) || []).length;
                  for (; n--;) delete r[t[n]];
                }
                (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !T.isEmptyObject(t);
            },
          });
        var K = new Q(),
          Z = new Q(),
          ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          te = /[A-Z]/g;
        function ne(e, t, n) {
          var r;
          if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(te, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
              try {
                n = (function (e) {
                  return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e));
                })(n);
              } catch (e) { }
              Z.set(e, t, n);
            } else n = void 0;
          return n;
        }
        T.extend({
          hasData: function (e) {
            return Z.hasData(e) || K.hasData(e);
          },
          data: function (e, t, n) {
            return Z.access(e, t, n);
          },
          removeData: function (e, t) {
            Z.remove(e, t);
          },
          _data: function (e, t, n) {
            return K.access(e, t, n);
          },
          _removeData: function (e, t) {
            K.remove(e, t);
          },
        }),
          T.fn.extend({
            data: function (e, t) {
              var n,
                r,
                i,
                o = this[0],
                s = o && o.attributes;
              if (void 0 === e) {
                if (this.length && ((i = Z.get(o)), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                  for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && ((r = G(r.slice(5))), ne(o, r, i[r]));
                  K.set(o, "hasDataAttrs", !0);
                }
                return i;
              }
              return "object" == typeof e
                ? this.each(function () {
                  Z.set(this, e);
                })
                : $(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                    this.each(function () {
                      Z.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
            },
            removeData: function (e) {
              return this.each(function () {
                Z.remove(this, e);
              });
            },
          }),
          T.extend({
            queue: function (e, t, n) {
              var r;
              if (e) return (t = (t || "fx") + "queue"), (r = K.get(e, t)), n && (!r || Array.isArray(n) ? (r = K.access(e, t, T.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = T.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = T._queueHooks(e, t);
              "inprogress" === i && ((i = n.shift()), r--),
                i &&
                ("fx" === t && n.unshift("inprogress"),
                  delete o.stop,
                  i.call(
                    e,
                    function () {
                      T.dequeue(e, t);
                    },
                    o
                  )),
                !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                K.get(e, n) ||
                K.access(e, n, {
                  empty: T.Callbacks("once memory").add(function () {
                    K.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          T.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? T.queue(this[0], e)
                  : void 0 === t
                    ? this
                    : this.each(function () {
                      var n = T.queue(this, e, t);
                      T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                T.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                r = 1,
                i = T.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                  --r || i.resolveWith(o, [o]);
                };
              for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--;) (n = K.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
              return a(), i.promise(t);
            },
          });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
          oe = ["Top", "Right", "Bottom", "Left"],
          se = b.documentElement,
          ae = function (e) {
            return T.contains(e.ownerDocument, e);
          },
          le = { composed: !0 };
        se.getRootNode &&
          (ae = function (e) {
            return T.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
          });
        var ce = function (e, t) {
          return "none" === (e = t || e).style.display || ("" === e.style.display && ae(e) && "none" === T.css(e, "display"));
        };
        function ue(e, t, n, r) {
          var i,
            o,
            s = 20,
            a = r
              ? function () {
                return r.cur();
              }
              : function () {
                return T.css(e, t, "");
              },
            l = a(),
            c = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (T.cssNumber[t] || ("px" !== c && +l)) && ie.exec(T.css(e, t));
          if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) T.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0), (u /= o);
            (u *= 2), T.style(e, t, u + c), (n = n || []);
          }
          return n && ((u = +u || +l || 0), (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = c), (r.start = u), (r.end = i))), i;
        }
        var de = {};
        function fe(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = de[r];
          return i || ((t = n.body.appendChild(n.createElement(r))), (i = T.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (de[r] = i), i);
        }
        function pe(e, t) {
          for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
            (r = e[o]).style &&
              ((n = r.style.display),
                t ? ("none" === n && ((i[o] = K.get(r, "display") || null), i[o] || (r.style.display = "")), "" === r.style.display && ce(r) && (i[o] = fe(r))) : "none" !== n && ((i[o] = "none"), K.set(r, "display", n)));
          for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
          return e;
        }
        T.fn.extend({
          show: function () {
            return pe(this, !0);
          },
          hide: function () {
            return pe(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                ce(this) ? T(this).show() : T(this).hide();
              });
          },
        });
        var he,
          me,
          ge = /^(?:checkbox|radio)$/i,
          ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          ye = /^$|^module$|\/(?:java|ecma)script/i;
        (he = b.createDocumentFragment().appendChild(b.createElement("div"))),
          (me = b.createElement("input")).setAttribute("type", "radio"),
          me.setAttribute("checked", "checked"),
          me.setAttribute("name", "t"),
          he.appendChild(me),
          (g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (he.innerHTML = "<textarea>x</textarea>"),
          (g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
          (he.innerHTML = "<option></option>"),
          (g.option = !!he.lastChild);
        var be = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        function xe(e, t) {
          var n;
          return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && D(e, t)) ? T.merge([e], n) : n;
        }
        function we(e, t) {
          for (var n = 0, r = e.length; n < r; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
        }
        (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead), (be.th = be.td), g.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
        var _e = /<|&#?\w+;/;
        function Se(e, t, n, r, i) {
          for (var o, s, a, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
              if ("object" === _(o)) T.merge(f, o.nodeType ? [o] : o);
              else if (_e.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), a = (ve.exec(o) || ["", ""])[1].toLowerCase(), l = be[a] || be._default, s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], u = l[0]; u--;)
                  s = s.lastChild;
                T.merge(f, s.childNodes), ((s = d.firstChild).textContent = "");
              } else f.push(t.createTextNode(o));
          for (d.textContent = "", p = 0; (o = f[p++]);)
            if (r && T.inArray(o, r) > -1) i && i.push(o);
            else if (((c = ae(o)), (s = xe(d.appendChild(o), "script")), c && we(s), n)) for (u = 0; (o = s[u++]);) ye.test(o.type || "") && n.push(o);
          return d;
        }
        var Te = /^([^.]*)(?:\.(.+)|)/;
        function Ce() {
          return !0;
        }
        function ke() {
          return !1;
        }
        function Ae(e, t) {
          return (
            (e ===
              (function () {
                try {
                  return b.activeElement;
                } catch (e) { }
              })()) ==
            ("focus" === t)
          );
        }
        function Ee(e, t, n, r, i, o) {
          var s, a;
          if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Ee(e, a, n, r, t[a], o);
            return e;
          }
          if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = ke;
          else if (!i) return e;
          return (
            1 === o &&
            ((s = i),
              (i = function (e) {
                return T().off(e), s.apply(this, arguments);
              }),
              (i.guid = s.guid || (s.guid = T.guid++))),
            e.each(function () {
              T.event.add(this, t, i, r, n);
            })
          );
        }
        function Le(e, t, n) {
          n
            ? (K.set(e, t, !1),
              T.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var r,
                    i,
                    o = K.get(this, t);
                  if (1 & e.isTrigger && this[t]) {
                    if (o.length) (T.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (((o = a.call(arguments)), K.set(this, t, o), (r = n(this, t)), this[t](), o !== (i = K.get(this, t)) || r ? K.set(this, t, !1) : (i = {}), o !== i))
                      return e.stopImmediatePropagation(), e.preventDefault(), i && i.value;
                  } else o.length && (K.set(this, t, { value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
                },
              }))
            : void 0 === K.get(e, t) && T.event.add(e, t, Ce);
        }
        (T.event = {
          global: {},
          add: function (e, t, n, r, i) {
            var o,
              s,
              a,
              l,
              c,
              u,
              d,
              f,
              p,
              h,
              m,
              g = K.get(e);
            if (J(e))
              for (
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && T.find.matchesSelector(se, i),
                n.guid || (n.guid = T.guid++),
                (l = g.events) || (l = g.events = Object.create(null)),
                (s = g.handle) ||
                (s = g.handle = function (t) {
                  return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
                }),
                c = (t = (t || "").match(I) || [""]).length;
                c--;

              )
                (p = m = (a = Te.exec(t[c]) || [])[1]),
                  (h = (a[2] || "").split(".").sort()),
                  p &&
                  ((d = T.event.special[p] || {}),
                    (p = (i ? d.delegateType : d.bindType) || p),
                    (d = T.event.special[p] || {}),
                    (u = T.extend({ type: p, origType: m, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && T.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                    (f = l[p]) || (((f = l[p] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, r, h, s)) || (e.addEventListener && e.addEventListener(p, s))),
                    d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                    i ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                    (T.event.global[p] = !0));
          },
          remove: function (e, t, n, r, i) {
            var o,
              s,
              a,
              l,
              c,
              u,
              d,
              f,
              p,
              h,
              m,
              g = K.hasData(e) && K.get(e);
            if (g && (l = g.events)) {
              for (c = (t = (t || "").match(I) || [""]).length; c--;)
                if (((p = m = (a = Te.exec(t[c]) || [])[1]), (h = (a[2] || "").split(".").sort()), p)) {
                  for (d = T.event.special[p] || {}, f = l[(p = (r ? d.delegateType : d.bindType) || p)] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;)
                    (u = f[o]),
                      (!i && m !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (a && !a.test(u.namespace)) ||
                      (r && r !== u.selector && ("**" !== r || !u.selector)) ||
                      (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                  s && !f.length && ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) || T.removeEvent(e, p, g.handle), delete l[p]);
                } else for (p in l) T.event.remove(e, p + t[c], n, r, !0);
              T.isEmptyObject(l) && K.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              r,
              i,
              o,
              s,
              a = new Array(arguments.length),
              l = T.event.fix(e),
              c = (K.get(this, "events") || Object.create(null))[l.type] || [],
              u = T.event.special[l.type] || {};
            for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (((l.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, l))) {
              for (s = T.event.handlers.call(this, l, c), t = 0; (i = s[t++]) && !l.isPropagationStopped();)
                for (l.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();)
                  (l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace)) ||
                    ((l.handleObj = o),
                      (l.data = o.data),
                      void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
              return u.postDispatch && u.postDispatch.call(this, l), l.result;
            }
          },
          handlers: function (e, t) {
            var n,
              r,
              i,
              o,
              s,
              a = [],
              l = t.delegateCount,
              c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
              for (; c !== this; c = c.parentNode || this)
                if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                  for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[(i = (r = t[n]).selector + " ")] && (s[i] = r.needsContext ? T(i, this).index(c) > -1 : T.find(i, this, null, [c]).length), s[i] && o.push(r);
                  o.length && a.push({ elem: c, handlers: o });
                }
            return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
          },
          addProp: function (e, t) {
            Object.defineProperty(T.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: v(t)
                ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
                : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
              set: function (t) {
                Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
              },
            });
          },
          fix: function (e) {
            return e[T.expando] ? e : new T.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (e) {
                var t = this || e;
                return ge.test(t.type) && t.click && D(t, "input") && Le(t, "click", Ce), !1;
              },
              trigger: function (e) {
                var t = this || e;
                return ge.test(t.type) && t.click && D(t, "input") && Le(t, "click"), !0;
              },
              _default: function (e) {
                var t = e.target;
                return (ge.test(t.type) && t.click && D(t, "input") && K.get(t, "click")) || D(t, "a");
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
              },
            },
          },
        }),
          (T.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (T.Event = function (e, t) {
            if (!(this instanceof T.Event)) return new T.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ce : ke),
                (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && T.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[T.expando] = !0);
          }),
          (T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = Ce), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = Ce), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = Ce), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
          }),
          T.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: !0,
            },
            T.event.addProp
          ),
          T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            T.event.special[e] = {
              setup: function () {
                return Le(this, e, Ae), !1;
              },
              trigger: function () {
                return Le(this, e), !0;
              },
              _default: function () {
                return !0;
              },
              delegateType: t,
            };
          }),
          T.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (i && (i === r || T.contains(r, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
              },
            };
          }),
          T.fn.extend({
            on: function (e, t, n, r) {
              return Ee(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
              return Ee(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
              if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = ke),
                this.each(function () {
                  T.event.remove(this, e, n, t);
                })
              );
            },
          });
        var De = /<script|<style|<link/i,
          Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Pe(e, t) {
          return (D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0]) || e;
        }
        function Re(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function qe(e) {
          return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
        }
        function je(e, t) {
          var n, r, i, o, s, a;
          if (1 === t.nodeType) {
            if (K.hasData(e) && (a = K.get(e).events)) for (i in (K.remove(t, "handle events"), a)) for (n = 0, r = a[i].length; n < r; n++) T.event.add(t, i, a[i][n]);
            Z.hasData(e) && ((o = Z.access(e)), (s = T.extend({}, o)), Z.set(t, s));
          }
        }
        function Ne(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && ge.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
        }
        function Ie(e, t, n, r) {
          t = l(t);
          var i,
            o,
            s,
            a,
            c,
            u,
            d = 0,
            f = e.length,
            p = f - 1,
            h = t[0],
            m = v(h);
          if (m || (f > 1 && "string" == typeof h && !g.checkClone && Oe.test(h)))
            return e.each(function (i) {
              var o = e.eq(i);
              m && (t[0] = h.call(this, i, o.html())), Ie(o, t, n, r);
            });
          if (f && ((o = (i = Se(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
            for (a = (s = T.map(xe(i, "script"), Re)).length; d < f; d++) (c = i), d !== p && ((c = T.clone(c, !0, !0)), a && T.merge(s, xe(c, "script"))), n.call(e[d], c, d);
            if (a)
              for (u = s[s.length - 1].ownerDocument, T.map(s, qe), d = 0; d < a; d++)
                (c = s[d]),
                  ye.test(c.type || "") &&
                  !K.access(c, "globalEval") &&
                  T.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase() ? T._evalUrl && !c.noModule && T._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, u) : w(c.textContent.replace(Me, ""), c, u));
          }
          return e;
        }
        function Be(e, t, n) {
          for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || T.cleanData(xe(r)), r.parentNode && (n && ae(r) && we(xe(r, "script")), r.parentNode.removeChild(r));
          return e;
        }
        T.extend({
          htmlPrefilter: function (e) {
            return e;
          },
          clone: function (e, t, n) {
            var r,
              i,
              o,
              s,
              a = e.cloneNode(!0),
              l = ae(e);
            if (!(g.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || T.isXMLDoc(e))) for (s = xe(a), r = 0, i = (o = xe(e)).length; r < i; r++) Ne(o[r], s[r]);
            if (t)
              if (n) for (o = o || xe(e), s = s || xe(a), r = 0, i = o.length; r < i; r++) je(o[r], s[r]);
              else je(e, a);
            return (s = xe(a, "script")).length > 0 && we(s, !l && xe(e, "script")), a;
          },
          cleanData: function (e) {
            for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++)
              if (J(n)) {
                if ((t = n[K.expando])) {
                  if (t.events) for (r in t.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                  n[K.expando] = void 0;
                }
                n[Z.expando] && (n[Z.expando] = void 0);
              }
          },
        }),
          T.fn.extend({
            detach: function (e) {
              return Be(this, e, !0);
            },
            remove: function (e) {
              return Be(this, e);
            },
            text: function (e) {
              return $(
                this,
                function (e) {
                  return void 0 === e
                    ? T.text(this)
                    : this.empty().each(function () {
                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                    });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return Ie(this, arguments, function (e) {
                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Pe(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return Ie(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = Pe(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(xe(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return T.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return $(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if ("string" == typeof e && !De.test(e) && !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = T.htmlPrefilter(e);
                    try {
                      for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(xe(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) { }
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = [];
              return Ie(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  T.inArray(this, e) < 0 && (T.cleanData(xe(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          T.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            T.fn[e] = function (e) {
              for (var n, r = [], i = T(e), o = i.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), T(i[s])[t](n), c.apply(r, n.get());
              return this.pushStack(r);
            };
          });
        var He = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
          Fe = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = r), t.getComputedStyle(e);
          },
          ze = function (e, t, n) {
            var r,
              i,
              o = {};
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
          },
          Ue = new RegExp(oe.join("|"), "i");
        function We(e, t, n) {
          var r,
            i,
            o,
            s,
            a = e.style;
          return (
            (n = n || Fe(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) || ae(e) || (s = T.style(e, t)),
              !g.pixelBoxStyles() &&
              He.test(s) &&
              Ue.test(t) &&
              ((r = a.width), (i = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = r), (a.minWidth = i), (a.maxWidth = o))),
            void 0 !== s ? s + "" : s
          );
        }
        function $e(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function e() {
            if (u) {
              (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                se.appendChild(c).appendChild(u);
              var e = r.getComputedStyle(u);
              (n = "1%" !== e.top),
                (l = 12 === t(e.marginLeft)),
                (u.style.right = "60%"),
                (s = 36 === t(e.right)),
                (i = 36 === t(e.width)),
                (u.style.position = "absolute"),
                (o = 12 === t(u.offsetWidth / 3)),
                se.removeChild(c),
                (u = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var n,
            i,
            o,
            s,
            a,
            l,
            c = b.createElement("div"),
            u = b.createElement("div");
          u.style &&
            ((u.style.backgroundClip = "content-box"),
              (u.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === u.style.backgroundClip),
              T.extend(g, {
                boxSizingReliable: function () {
                  return e(), i;
                },
                pixelBoxStyles: function () {
                  return e(), s;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, i;
                  return (
                    null == a &&
                    ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      se.appendChild(e).appendChild(t).appendChild(n),
                      (i = r.getComputedStyle(t)),
                      (a = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight),
                      se.removeChild(e)),
                    a
                  );
                },
              }));
        })();
        var Ve = ["Webkit", "Moz", "ms"],
          Xe = b.createElement("div").style,
          Ye = {};
        function Ge(e) {
          return (
            T.cssProps[e] ||
            Ye[e] ||
            (e in Xe
              ? e
              : (Ye[e] =
                (function (e) {
                  for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;) if ((e = Ve[n] + t) in Xe) return e;
                })(e) || e))
          );
        }
        var Je = /^(none|table(?!-c[ea]).+)/,
          Qe = /^--/,
          Ke = { position: "absolute", visibility: "hidden", display: "block" },
          Ze = { letterSpacing: "0", fontWeight: "400" };
        function et(e, t, n) {
          var r = ie.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }
        function tt(e, t, n, r, i, o) {
          var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
          if (n === (r ? "border" : "content")) return 0;
          for (; s < 4; s += 2)
            "margin" === n && (l += T.css(e, n + oe[s], !0, i)),
              r
                ? ("content" === n && (l -= T.css(e, "padding" + oe[s], !0, i)), "margin" !== n && (l -= T.css(e, "border" + oe[s] + "Width", !0, i)))
                : ((l += T.css(e, "padding" + oe[s], !0, i)), "padding" !== n ? (l += T.css(e, "border" + oe[s] + "Width", !0, i)) : (a += T.css(e, "border" + oe[s] + "Width", !0, i)));
          return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5)) || 0), l;
        }
        function nt(e, t, n) {
          var r = Fe(e),
            i = (!g.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r),
            o = i,
            s = We(e, t, r),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
          if (He.test(s)) {
            if (!n) return s;
            s = "auto";
          }
          return (
            ((!g.boxSizingReliable() && i) || (!g.reliableTrDimensions() && D(e, "tr")) || "auto" === s || (!parseFloat(s) && "inline" === T.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === T.css(e, "boxSizing", !1, r)), (o = a in e) && (s = e[a])),
            (s = parseFloat(s) || 0) + tt(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
          );
        }
        function rt(e, t, n, r, i) {
          return new rt.prototype.init(e, t, n, r, i);
        }
        T.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = We(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i,
                o,
                s,
                a = G(t),
                l = Qe.test(t),
                c = e.style;
              if ((l || (t = Ge(a)), (s = T.cssHooks[t] || T.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
              "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && ((n = ue(e, t, i)), (o = "number")),
                null != n &&
                n == n &&
                ("number" !== o || l || (n += (i && i[3]) || (T.cssNumber[a] ? "" : "px")),
                  g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                  (s && "set" in s && void 0 === (n = s.set(e, n, r))) || (l ? c.setProperty(t, n) : (c[t] = n)));
            }
          },
          css: function (e, t, n, r) {
            var i,
              o,
              s,
              a = G(t);
            return (
              Qe.test(t) || (t = Ge(a)),
              (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)),
              void 0 === i && (i = We(e, t, r)),
              "normal" === i && t in Ze && (i = Ze[t]),
              "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
          },
        }),
          T.each(["height", "width"], function (e, t) {
            T.cssHooks[t] = {
              get: function (e, n, r) {
                if (n)
                  return !Je.test(T.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                    ? nt(e, t, r)
                    : ze(e, Ke, function () {
                      return nt(e, t, r);
                    });
              },
              set: function (e, n, r) {
                var i,
                  o = Fe(e),
                  s = !g.scrollboxSize() && "absolute" === o.position,
                  a = (s || r) && "border-box" === T.css(e, "boxSizing", !1, o),
                  l = r ? tt(e, t, r, a, o) : 0;
                return (
                  a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - 0.5)),
                  l && (i = ie.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = T.css(e, t))),
                  et(0, n, l)
                );
              },
            };
          }),
          (T.cssHooks.marginLeft = $e(g.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(We(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                  ze(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
              );
          })),
          T.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (T.cssHooks[e + t] = {
              expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
              },
            }),
              "margin" !== e && (T.cssHooks[e + t].set = et);
          }),
          T.fn.extend({
            css: function (e, t) {
              return $(
                this,
                function (e, t, n) {
                  var r,
                    i,
                    o = {},
                    s = 0;
                  if (Array.isArray(t)) {
                    for (r = Fe(e), i = t.length; s < i; s++) o[t[s]] = T.css(e, t[s], !1, r);
                    return o;
                  }
                  return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
          }),
          (T.Tween = rt),
          (rt.prototype = {
            constructor: rt,
            init: function (e, t, n, r, i, o) {
              (this.elem = e), (this.prop = n), (this.easing = i || T.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (T.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = rt.propHooks[this.prop];
              return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = rt.propHooks[this.prop];
              return (
                this.options.duration ? (this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                this
              );
            },
          }),
          (rt.prototype.init.prototype = rt.prototype),
          (rt.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
              },
              set: function (e) {
                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!T.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)]) ? (e.elem[e.prop] = e.now) : T.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }),
          (rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
          (T.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (T.fx = rt.prototype.init),
          (T.fx.step = {});
        var it,
          ot,
          st = /^(?:toggle|show|hide)$/,
          at = /queueHooks$/;
        function lt() {
          ot && (!1 === b.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(lt) : r.setTimeout(lt, T.fx.interval), T.fx.tick());
        }
        function ct() {
          return (
            r.setTimeout(function () {
              it = void 0;
            }),
            (it = Date.now())
          );
        }
        function ut(e, t) {
          var n,
            r = 0,
            i = { height: e };
          for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
          return t && (i.opacity = i.width = e), i;
        }
        function dt(e, t, n) {
          for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, s = i.length; o < s; o++) if ((r = i[o].call(n, t, e))) return r;
        }
        function ft(e, t, n) {
          var r,
            i,
            o = 0,
            s = ft.prefilters.length,
            a = T.Deferred().always(function () {
              delete l.elem;
            }),
            l = function () {
              if (i) return !1;
              for (var t = it || ct(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(r);
              return a.notifyWith(e, [c, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
            },
            c = a.promise({
              elem: e,
              props: T.extend({}, t),
              opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: it || ct(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = T.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r), r;
              },
              stop: function (t) {
                var n = 0,
                  r = t ? c.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
              },
            }),
            u = c.props;
          for (
            (function (e, t) {
              var n, r, i, o, s;
              for (n in e)
                if (((i = t[(r = G(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (s = T.cssHooks[r]) && ("expand" in s)))
                  for (n in ((o = s.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
                else t[r] = i;
            })(u, c.opts.specialEasing);
            o < s;
            o++
          )
            if ((r = ft.prefilters[o].call(c, e, u, c.opts))) return v(r.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
          return (
            T.map(u, dt, c),
            v(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            T.fx.timer(T.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
            c
          );
        }
        (T.Animation = T.extend(ft, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n), n;
              },
            ],
          },
          tweener: function (e, t) {
            v(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (ft.tweeners[n] = ft.tweeners[n] || []), ft.tweeners[n].unshift(t);
          },
          prefilters: [
            function (e, t, n) {
              var r,
                i,
                o,
                s,
                a,
                l,
                c,
                u,
                d = "width" in t || "height" in t,
                f = this,
                p = {},
                h = e.style,
                m = e.nodeType && ce(e),
                g = K.get(e, "fxshow");
              for (r in (n.queue ||
                (null == (s = T._queueHooks(e, "fx")).unqueued &&
                  ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  f.always(function () {
                    f.always(function () {
                      s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
                    });
                  })),
                t))
                if (((i = t[r]), st.test(i))) {
                  if ((delete t[r], (o = o || "toggle" === i), i === (m ? "hide" : "show"))) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    m = !0;
                  }
                  p[r] = (g && g[r]) || T.style(e, r);
                }
              if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
                for (r in (d &&
                  1 === e.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = g && g.display) && (c = K.get(e, "display")),
                    "none" === (u = T.css(e, "display")) && (c ? (u = c) : (pe([e], !0), (c = e.style.display || c), (u = T.css(e, "display")), pe([e]))),
                    ("inline" === u || ("inline-block" === u && null != c)) &&
                    "none" === T.css(e, "float") &&
                    (l ||
                      (f.done(function () {
                        h.display = c;
                      }),
                        null == c && ((u = h.display), (c = "none" === u ? "" : u))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                  ((h.overflow = "hidden"),
                    f.always(function () {
                      (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  p))
                  l ||
                    (g ? "hidden" in g && (m = g.hidden) : (g = K.access(e, "fxshow", { display: c })),
                      o && (g.hidden = !m),
                      m && pe([e], !0),
                      f.done(function () {
                        for (r in (m || pe([e]), K.remove(e, "fxshow"), p)) T.style(e, r, p[r]);
                      })),
                    (l = dt(m ? g[r] : 0, r, f)),
                    r in g || ((g[r] = l.start), m && ((l.end = l.start), (l.start = 0)));
            },
          ],
          prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
          },
        })),
          (T.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? T.extend({}, e) : { complete: n || (!n && t) || (v(e) && e), duration: e, easing: (n && t) || (t && !v(t) && t) };
            return (
              T.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in T.fx.speeds ? (r.duration = T.fx.speeds[r.duration]) : (r.duration = T.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                v(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
              }),
              r
            );
          }),
          T.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(ce).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
              var i = T.isEmptyObject(e),
                o = T.speed(t, n, r),
                s = function () {
                  var t = ft(this, T.extend({}, e), o);
                  (i || K.get(this, "finish")) && t.stop(!0);
                };
              return (s.finish = s), i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
            },
            stop: function (e, t, n) {
              var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    i = null != e && e + "queueHooks",
                    o = T.timers,
                    s = K.get(this);
                  if (i) s[i] && s[i].stop && r(s[i]);
                  else for (i in s) s[i] && s[i].stop && at.test(i) && r(s[i]);
                  for (i = o.length; i--;) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                  (!t && n) || T.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = K.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = T.timers,
                    s = r ? r.length : 0;
                  for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          T.each(["toggle", "show", "hide"], function (e, t) {
            var n = T.fn[t];
            T.fn[t] = function (e, r, i) {
              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
            };
          }),
          T.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            T.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }),
          (T.timers = []),
          (T.fx.tick = function () {
            var e,
              t = 0,
              n = T.timers;
            for (it = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || T.fx.stop(), (it = void 0);
          }),
          (T.fx.timer = function (e) {
            T.timers.push(e), T.fx.start();
          }),
          (T.fx.interval = 13),
          (T.fx.start = function () {
            ot || ((ot = !0), lt());
          }),
          (T.fx.stop = function () {
            ot = null;
          }),
          (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (T.fn.delay = function (e, t) {
            return (
              (e = (T.fx && T.fx.speeds[e]) || e),
              (t = t || "fx"),
              this.queue(t, function (t, n) {
                var i = r.setTimeout(t, e);
                n.stop = function () {
                  r.clearTimeout(i);
                };
              })
            );
          }),
          (function () {
            var e = b.createElement("input"),
              t = b.createElement("select").appendChild(b.createElement("option"));
            (e.type = "checkbox"), (g.checkOn = "" !== e.value), (g.optSelected = t.selected), ((e = b.createElement("input")).value = "t"), (e.type = "radio"), (g.radioValue = "t" === e.value);
          })();
        var pt,
          ht = T.expr.attrHandle;
        T.fn.extend({
          attr: function (e, t) {
            return $(this, T.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              T.removeAttr(this, e);
            });
          },
        }),
          T.extend({
            attr: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute
                  ? T.prop(e, t, n)
                  : ((1 === o && T.isXMLDoc(e)) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? pt : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void T.removeAttr(e, t)
                        : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                        ? r
                        : null == (r = T.find.attr(e, t))
                          ? void 0
                          : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!g.radioValue && "radio" === t && D(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                r = 0,
                i = t && t.match(I);
              if (i && 1 === e.nodeType) for (; (n = i[r++]);) e.removeAttribute(n);
            },
          }),
          (pt = {
            set: function (e, t, n) {
              return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || T.find.attr;
            ht[t] = function (e, t, r) {
              var i,
                o,
                s = t.toLowerCase();
              return r || ((o = ht[s]), (ht[s] = i), (i = null != n(e, t, r) ? s : null), (ht[s] = o)), i;
            };
          });
        var mt = /^(?:input|select|textarea|button)$/i,
          gt = /^(?:a|area)$/i;
        function vt(e) {
          return (e.match(I) || []).join(" ");
        }
        function yt(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function bt(e) {
          return Array.isArray(e) ? e : ("string" == typeof e && e.match(I)) || [];
        }
        T.fn.extend({
          prop: function (e, t) {
            return $(this, T.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[T.propFix[e] || e];
            });
          },
        }),
          T.extend({
            prop: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 === o && T.isXMLDoc(e)) || ((t = T.propFix[t] || t), (i = T.propHooks[t])),
                  void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = T.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : mt.test(e.nodeName) || (gt.test(e.nodeName) && e.href) ? 0 : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          g.optSelected ||
          (T.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
          T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            T.propFix[this.toLowerCase()] = this;
          }),
          T.fn.extend({
            addClass: function (e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                a,
                l = 0;
              if (v(e))
                return this.each(function (t) {
                  T(this).addClass(e.call(this, t, yt(this)));
                });
              if ((t = bt(e)).length)
                for (; (n = this[l++]);)
                  if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                    for (s = 0; (o = t[s++]);) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (a = vt(r)) && n.setAttribute("class", a);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                a,
                l = 0;
              if (v(e))
                return this.each(function (t) {
                  T(this).removeClass(e.call(this, t, yt(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((t = bt(e)).length)
                for (; (n = this[l++]);)
                  if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                    for (s = 0; (o = t[s++]);) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                    i !== (a = vt(r)) && n.setAttribute("class", a);
                  }
              return this;
            },
            toggleClass: function (e, t) {
              var n = typeof e,
                r = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && r
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : v(e)
                  ? this.each(function (n) {
                    T(this).toggleClass(e.call(this, n, yt(this), t), t);
                  })
                  : this.each(function () {
                    var t, i, o, s;
                    if (r) for (i = 0, o = T(this), s = bt(e); (t = s[i++]);) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else
                      (void 0 !== e && "boolean" !== n) ||
                        ((t = yt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""));
                  });
            },
            hasClass: function (e) {
              var t,
                n,
                r = 0;
              for (t = " " + e + " "; (n = this[r++]);) if (1 === n.nodeType && (" " + vt(yt(n)) + " ").indexOf(t) > -1) return !0;
              return !1;
            },
          });
        var xt = /\r/g;
        T.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              i = this[0];
            return arguments.length
              ? ((r = v(e)),
                this.each(function (n) {
                  var i;
                  1 === this.nodeType &&
                    (null == (i = r ? e.call(this, n, T(this).val()) : e)
                      ? (i = "")
                      : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                        (i = T.map(i, function (e) {
                          return null == e ? "" : e + "";
                        })),
                      ((t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                }))
              : i
                ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                    ? n.replace(xt, "")
                    : null == n
                      ? ""
                      : n
                : void 0;
          },
        }),
          T.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = T.find.attr(e, "value");
                  return null != t ? t : vt(T.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    r,
                    i = e.options,
                    o = e.selectedIndex,
                    s = "select-one" === e.type,
                    a = s ? null : [],
                    l = s ? o + 1 : i.length;
                  for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                    if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                      if (((t = T(n).val()), s)) return t;
                      a.push(t);
                    }
                  return a;
                },
                set: function (e, t) {
                  for (var n, r, i = e.options, o = T.makeArray(t), s = i.length; s--;) ((r = i[s]).selected = T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), o;
                },
              },
            },
          }),
          T.each(["radio", "checkbox"], function () {
            (T.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t)) return (e.checked = T.inArray(T(e).val(), t) > -1);
              },
            }),
              g.checkOn ||
              (T.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
          }),
          (g.focusin = "onfocusin" in r);
        var wt = /^(?:focusinfocus|focusoutblur)$/,
          _t = function (e) {
            e.stopPropagation();
          };
        T.extend(T.event, {
          trigger: function (e, t, n, i) {
            var o,
              s,
              a,
              l,
              c,
              u,
              d,
              f,
              h = [n || b],
              m = p.call(e, "type") ? e.type : e,
              g = p.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((s = f = a = n = n || b),
                3 !== n.nodeType &&
                8 !== n.nodeType &&
                !wt.test(m + T.event.triggered) &&
                (m.indexOf(".") > -1 && ((g = m.split(".")), (m = g.shift()), g.sort()),
                  (c = m.indexOf(":") < 0 && "on" + m),
                  ((e = e[T.expando] ? e : new T.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : T.makeArray(t, [e])),
                  (d = T.event.special[m] || {}),
                  i || !d.trigger || !1 !== d.trigger.apply(n, t)))
            ) {
              if (!i && !d.noBubble && !y(n)) {
                for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) h.push(s), (a = s);
                a === (n.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || r);
              }
              for (o = 0; (s = h[o++]) && !e.isPropagationStopped();)
                (f = s),
                  (e.type = o > 1 ? l : d.bindType || m),
                  (u = (K.get(s, "events") || Object.create(null))[e.type] && K.get(s, "handle")) && u.apply(s, t),
                  (u = c && s[c]) && u.apply && J(s) && ((e.result = u.apply(s, t)), !1 === e.result && e.preventDefault());
              return (
                (e.type = m),
                i ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                !J(n) ||
                (c &&
                  v(n[m]) &&
                  !y(n) &&
                  ((a = n[c]) && (n[c] = null),
                    (T.event.triggered = m),
                    e.isPropagationStopped() && f.addEventListener(m, _t),
                    n[m](),
                    e.isPropagationStopped() && f.removeEventListener(m, _t),
                    (T.event.triggered = void 0),
                    a && (n[c] = a))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var r = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
            T.event.trigger(r, null, t);
          },
        }),
          T.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                T.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return T.event.trigger(e, t, n, !0);
            },
          }),
          g.focusin ||
          T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  i = K.access(r, t);
                i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  i = K.access(r, t) - 1;
                i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0), K.remove(r, t));
              },
            };
          });
        var St = r.location,
          Tt = { guid: Date.now() },
          Ct = /\?/;
        T.parseXML = function (e) {
          var t, n;
          if (!e || "string" != typeof e) return null;
          try {
            t = new r.DOMParser().parseFromString(e, "text/xml");
          } catch (e) { }
          return (
            (n = t && t.getElementsByTagName("parsererror")[0]),
            (t && !n) ||
            T.error(
              "Invalid XML: " +
              (n
                ? T.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
                : e)
            ),
            t
          );
        };
        var kt = /\[\]$/,
          At = /\r?\n/g,
          Et = /^(?:submit|button|image|reset|file)$/i,
          Lt = /^(?:input|select|textarea|keygen)/i;
        function Dt(e, t, n, r) {
          var i;
          if (Array.isArray(t))
            T.each(t, function (t, i) {
              n || kt.test(e) ? r(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
            });
          else if (n || "object" !== _(t)) r(e, t);
          else for (i in t) Dt(e + "[" + i + "]", t[i], n, r);
        }
        (T.param = function (e, t) {
          var n,
            r = [],
            i = function (e, t) {
              var n = v(t) ? t() : t;
              r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
            T.each(e, function () {
              i(this.name, this.value);
            });
          else for (n in e) Dt(n, e[n], t, i);
          return r.join("&");
        }),
          T.fn.extend({
            serialize: function () {
              return T.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return this.name && !T(this).is(":disabled") && Lt.test(this.nodeName) && !Et.test(e) && (this.checked || !ge.test(e));
                })
                .map(function (e, t) {
                  var n = T(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                      ? T.map(n, function (e) {
                        return { name: t.name, value: e.replace(At, "\r\n") };
                      })
                      : { name: t.name, value: n.replace(At, "\r\n") };
                })
                .get();
            },
          });
        var Ot = /%20/g,
          Mt = /#.*$/,
          Pt = /([?&])_=[^&]*/,
          Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          qt = /^(?:GET|HEAD)$/,
          jt = /^\/\//,
          Nt = {},
          It = {},
          Bt = "*/".concat("*"),
          Ht = b.createElement("a");
        function Ft(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
              i = 0,
              o = t.toLowerCase().match(I) || [];
            if (v(n)) for (; (r = o[i++]);) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
          };
        }
        function zt(e, t, n, r) {
          var i = {},
            o = e === It;
          function s(a) {
            var l;
            return (
              (i[a] = !0),
              T.each(e[a] || [], function (e, a) {
                var c = a(t, n, r);
                return "string" != typeof c || o || i[c] ? (o ? !(l = c) : void 0) : (t.dataTypes.unshift(c), s(c), !1);
              }),
              l
            );
          }
          return s(t.dataTypes[0]) || (!i["*"] && s("*"));
        }
        function Ut(e, t) {
          var n,
            r,
            i = T.ajaxSettings.flatOptions || {};
          for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
          return r && T.extend(!0, e, r), e;
        }
        (Ht.href = St.href),
          T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: St.href,
              type: "GET",
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: { "*": Bt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
              converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": T.parseXML },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? Ut(Ut(e, T.ajaxSettings), t) : Ut(T.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(Nt),
            ajaxTransport: Ft(It),
            ajax: function (e, t) {
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var n,
                i,
                o,
                s,
                a,
                l,
                c,
                u,
                d,
                f,
                p = T.ajaxSetup({}, t),
                h = p.context || p,
                m = p.context && (h.nodeType || h.jquery) ? T(h) : T.event,
                g = T.Deferred(),
                v = T.Callbacks("once memory"),
                y = p.statusCode || {},
                x = {},
                w = {},
                _ = "canceled",
                S = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (c) {
                      if (!s) for (s = {}; (t = Rt.exec(o));) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                      t = s[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return c ? o : null;
                  },
                  setRequestHeader: function (e, t) {
                    return null == c && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (x[e] = t)), this;
                  },
                  overrideMimeType: function (e) {
                    return null == c && (p.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (c) S.always(e[S.status]);
                      else for (t in e) y[t] = [y[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || _;
                    return n && n.abort(t), C(0, t), this;
                  },
                };
              if (
                (g.promise(S),
                  (p.url = ((e || p.url || St.href) + "").replace(jt, St.protocol + "//")),
                  (p.type = t.method || t.type || p.method || p.type),
                  (p.dataTypes = (p.dataType || "*").toLowerCase().match(I) || [""]),
                  null == p.crossDomain)
              ) {
                l = b.createElement("a");
                try {
                  (l.href = p.url), (l.href = l.href), (p.crossDomain = Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host);
                } catch (e) {
                  p.crossDomain = !0;
                }
              }
              if ((p.data && p.processData && "string" != typeof p.data && (p.data = T.param(p.data, p.traditional)), zt(Nt, p, t, S), c)) return S;
              for (d in ((u = T.event && p.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !qt.test(p.type)),
                (i = p.url.replace(Mt, "")),
                p.hasContent
                  ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ot, "+"))
                  : ((f = p.url.slice(i.length)),
                    p.data && (p.processData || "string" == typeof p.data) && ((i += (Ct.test(i) ? "&" : "?") + p.data), delete p.data),
                    !1 === p.cache && ((i = i.replace(Pt, "$1")), (f = (Ct.test(i) ? "&" : "?") + "_=" + Tt.guid++ + f)),
                    (p.url = i + f)),
                p.ifModified && (T.lastModified[i] && S.setRequestHeader("If-Modified-Since", T.lastModified[i]), T.etag[i] && S.setRequestHeader("If-None-Match", T.etag[i])),
                ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) && S.setRequestHeader("Content-Type", p.contentType),
                S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : p.accepts["*"]),
                p.headers))
                S.setRequestHeader(d, p.headers[d]);
              if (p.beforeSend && (!1 === p.beforeSend.call(h, S, p) || c)) return S.abort();
              if (((_ = "abort"), v.add(p.complete), S.done(p.success), S.fail(p.error), (n = zt(It, p, t, S)))) {
                if (((S.readyState = 1), u && m.trigger("ajaxSend", [S, p]), c)) return S;
                p.async &&
                  p.timeout > 0 &&
                  (a = r.setTimeout(function () {
                    S.abort("timeout");
                  }, p.timeout));
                try {
                  (c = !1), n.send(x, C);
                } catch (e) {
                  if (c) throw e;
                  C(-1, e);
                }
              } else C(-1, "No Transport");
              function C(e, t, s, l) {
                var d,
                  f,
                  b,
                  x,
                  w,
                  _ = t;
                c ||
                  ((c = !0),
                    a && r.clearTimeout(a),
                    (n = void 0),
                    (o = l || ""),
                    (S.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    s &&
                    (x = (function (e, t, n) {
                      for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                      if (r)
                        for (i in a)
                          if (a[i] && a[i].test(r)) {
                            l.unshift(i);
                            break;
                          }
                      if (l[0] in n) o = l[0];
                      else {
                        for (i in n) {
                          if (!l[0] || e.converters[i + " " + l[0]]) {
                            o = i;
                            break;
                          }
                          s || (s = i);
                        }
                        o = o || s;
                      }
                      if (o) return o !== l[0] && l.unshift(o), n[o];
                    })(p, S, s)),
                    !d && T.inArray("script", p.dataTypes) > -1 && T.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function () { }),
                    (x = (function (e, t, n, r) {
                      var i,
                        o,
                        s,
                        a,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                      if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                      for (o = u.shift(); o;)
                        if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = o), (o = u.shift())))
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                            if (!(s = c[l + " " + o] || c["* " + o]))
                              for (i in c)
                                if ((a = i.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                  !0 === s ? (s = c[i]) : !0 !== c[i] && ((o = a[0]), u.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o };
                                }
                          }
                      return { state: "success", data: t };
                    })(p, x, S, d)),
                    d
                      ? (p.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (T.lastModified[i] = w), (w = S.getResponseHeader("etag")) && (T.etag[i] = w)),
                        204 === e || "HEAD" === p.type ? (_ = "nocontent") : 304 === e ? (_ = "notmodified") : ((_ = x.state), (f = x.data), (d = !(b = x.error))))
                      : ((b = _), (!e && _) || ((_ = "error"), e < 0 && (e = 0))),
                    (S.status = e),
                    (S.statusText = (t || _) + ""),
                    d ? g.resolveWith(h, [f, _, S]) : g.rejectWith(h, [S, _, b]),
                    S.statusCode(y),
                    (y = void 0),
                    u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [S, p, d ? f : b]),
                    v.fireWith(h, [S, _]),
                    u && (m.trigger("ajaxComplete", [S, p]), --T.active || T.event.trigger("ajaxStop")));
              }
              return S;
            },
            getJSON: function (e, t, n) {
              return T.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return T.get(e, void 0, t, "script");
            },
          }),
          T.each(["get", "post"], function (e, t) {
            T[t] = function (e, n, r, i) {
              return v(n) && ((i = i || r), (r = n), (n = void 0)), T.ajax(T.extend({ url: e, type: t, dataType: i, data: n, success: r }, T.isPlainObject(e) && e));
            };
          }),
          T.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
          }),
          (T._evalUrl = function (e, t, n) {
            return T.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () { } },
              dataFilter: function (e) {
                T.globalEval(e, t, n);
              },
            });
          }),
          T.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                (v(e) && (e = e.call(this[0])),
                  (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (e) {
              return v(e)
                ? this.each(function (t) {
                  T(this).wrapInner(e.call(this, t));
                })
                : this.each(function () {
                  var t = T(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
            },
            wrap: function (e) {
              var t = v(e);
              return this.each(function (n) {
                T(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    T(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (T.expr.pseudos.hidden = function (e) {
            return !T.expr.pseudos.visible(e);
          }),
          (T.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
          }),
          (T.ajaxSettings.xhr = function () {
            try {
              return new r.XMLHttpRequest();
            } catch (e) { }
          });
        var Wt = { 0: 200, 1223: 204 },
          $t = T.ajaxSettings.xhr();
        (g.cors = !!$t && "withCredentials" in $t),
          (g.ajax = $t = !!$t),
          T.ajaxTransport(function (e) {
            var t, n;
            if (g.cors || ($t && !e.crossDomain))
              return {
                send: function (i, o) {
                  var s,
                    a = e.xhr();
                  if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                  for (s in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i)) a.setRequestHeader(s, i[s]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                              ? "number" != typeof a.status
                                ? o(0, "error")
                                : o(a.status, a.statusText)
                              : o(
                                Wt[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                    };
                  }),
                    (a.onload = t()),
                    (n = a.onerror = a.ontimeout = t("error")),
                    void 0 !== a.onabort
                      ? (a.onabort = n)
                      : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          r.setTimeout(function () {
                            t && n();
                          });
                      }),
                    (t = t("abort"));
                  try {
                    a.send((e.hasContent && e.data) || null);
                  } catch (e) {
                    if (t) throw e;
                  }
                },
                abort: function () {
                  t && t();
                },
              };
          }),
          T.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          T.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return T.globalEval(e), e;
              },
            },
          }),
          T.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
          }),
          T.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
              return {
                send: function (r, i) {
                  (t = T("<script>")
                    .attr(e.scriptAttrs || {})
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function (e) {
                        t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    b.head.appendChild(t[0]);
                },
                abort: function () {
                  n && n();
                },
              };
          });
        var Vt,
          Xt = [],
          Yt = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Xt.pop() || T.expando + "_" + Tt.guid++;
            return (this[e] = !0), e;
          },
        }),
          T.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i,
              o,
              s,
              a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
              return (
                (i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                a ? (e[a] = e[a].replace(Yt, "$1" + i)) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                (e.converters["script json"] = function () {
                  return s || T.error(i + " was not called"), s[0];
                }),
                (e.dataTypes[0] = "json"),
                (o = r[i]),
                (r[i] = function () {
                  s = arguments;
                }),
                n.always(function () {
                  void 0 === o ? T(r).removeProp(i) : (r[i] = o), e[i] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(i)), s && v(o) && o(s[0]), (s = o = void 0);
                }),
                "script"
              );
          }),
          (g.createHTMLDocument = (((Vt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Vt.childNodes.length)),
          (T.parseHTML = function (e, t, n) {
            return "string" != typeof e
              ? []
              : ("boolean" == typeof t && ((n = t), (t = !1)),
                t || (g.createHTMLDocument ? (((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href), t.head.appendChild(r)) : (t = b)),
                (o = !n && []),
                (i = O.exec(e)) ? [t.createElement(i[1])] : ((i = Se([e], t, o)), o && o.length && T(o).remove(), T.merge([], i.childNodes)));
            var r, i, o;
          }),
          (T.fn.load = function (e, t, n) {
            var r,
              i,
              o,
              s = this,
              a = e.indexOf(" ");
            return (
              a > -1 && ((r = vt(e.slice(a))), (e = e.slice(0, a))),
              v(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
              s.length > 0 &&
              T.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments), s.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                  function (e, t) {
                    s.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
                ),
              this
            );
          }),
          (T.expr.pseudos.animated = function (e) {
            return T.grep(T.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (T.offset = {
            setOffset: function (e, t, n) {
              var r,
                i,
                o,
                s,
                a,
                l,
                c = T.css(e, "position"),
                u = T(e),
                d = {};
              "static" === c && (e.style.position = "relative"),
                (a = u.offset()),
                (o = T.css(e, "top")),
                (l = T.css(e, "left")),
                ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? ((s = (r = u.position()).top), (i = r.left)) : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
                v(t) && (t = t.call(e, n, T.extend({}, a))),
                null != t.top && (d.top = t.top - a.top + s),
                null != t.left && (d.left = t.left - a.left + i),
                "using" in t ? t.using.call(e, d) : u.css(d);
            },
          }),
          T.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                    T.offset.setOffset(this, e, t);
                  });
              var t,
                n,
                r = this[0];
              return r ? (r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  i = { top: 0, left: 0 };
                if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();
                else {
                  for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                  e && e !== r && 1 === e.nodeType && (((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0)), (i.left += T.css(e, "borderLeftWidth", !0)));
                }
                return { top: t.top - i.top - T.css(r, "marginTop", !0), left: t.left - i.left - T.css(r, "marginLeft", !0) };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                return e || se;
              });
            },
          }),
          T.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function (r) {
              return $(
                this,
                function (e, r, i) {
                  var o;
                  if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                  o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }),
          T.each(["top", "left"], function (e, t) {
            T.cssHooks[t] = $e(g.pixelPosition, function (e, n) {
              if (n) return (n = We(e, t)), He.test(n) ? T(e).position()[t] + "px" : n;
            });
          }),
          T.each({ Height: "height", Width: "width" }, function (e, t) {
            T.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
              T.fn[r] = function (i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                  a = n || (!0 === i || !0 === o ? "margin" : "border");
                return $(
                  this,
                  function (t, n, i) {
                    var o;
                    return y(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                        ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                        : void 0 === i
                          ? T.css(t, n, a)
                          : T.style(t, n, i, a);
                  },
                  t,
                  s ? i : void 0,
                  s
                );
              };
            });
          }),
          T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            T.fn[t] = function (e) {
              return this.on(t, e);
            };
          }),
          T.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (
            e,
            t
          ) {
            T.fn[t] = function (e, n) {
              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
          });
        var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        (T.proxy = function (e, t) {
          var n, r, i;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
            return (
              (r = a.call(arguments, 2)),
              (i = function () {
                return e.apply(t || this, r.concat(a.call(arguments)));
              }),
              (i.guid = e.guid = e.guid || T.guid++),
              i
            );
        }),
          (T.holdReady = function (e) {
            e ? T.readyWait++ : T.ready(!0);
          }),
          (T.isArray = Array.isArray),
          (T.parseJSON = JSON.parse),
          (T.nodeName = D),
          (T.isFunction = v),
          (T.isWindow = y),
          (T.camelCase = G),
          (T.type = _),
          (T.now = Date.now),
          (T.isNumeric = function (e) {
            var t = T.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
          }),
          (T.trim = function (e) {
            return null == e ? "" : (e + "").replace(Gt, "");
          }),
          void 0 ===
          (n = function () {
            return T;
          }.apply(t, [])) || (e.exports = n);
        var Jt = r.jQuery,
          Qt = r.$;
        return (
          (T.noConflict = function (e) {
            return r.$ === T && (r.$ = Qt), e && r.jQuery === T && (r.jQuery = Jt), T;
          }),
          void 0 === i && (r.jQuery = r.$ = T),
          T
        );
      });
    },
    353: function (e, t, n) {
      "use strict";
      let r = n(19);
      class i extends r {
        constructor(e) {
          super(e), (this.type = "atrule");
        }
        append(...e) {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
        }
        prepend(...e) {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
        }
      }
      (e.exports = i), (i.default = i), r.registerAtRule(i);
    },
    932: function (e, t, n) {
      "use strict";
      let r = n(631);
      class i extends r {
        constructor(e) {
          super(e), (this.type = "comment");
        }
      }
      (e.exports = i), (i.default = i);
    },
    19: function (e, t, n) {
      "use strict";
      let r,
        i,
        o,
        { isClean: s, my: a } = n(513),
        l = n(258),
        c = n(932),
        u = n(631);
      function d(e) {
        return e.map((e) => (e.nodes && (e.nodes = d(e.nodes)), delete e.source, e));
      }
      function f(e) {
        if (((e[s] = !1), e.proxyOf.nodes)) for (let t of e.proxyOf.nodes) f(t);
      }
      class p extends u {
        push(e) {
          return (e.parent = this), this.proxyOf.nodes.push(e), this;
        }
        each(e) {
          if (!this.proxyOf.nodes) return;
          let t,
            n,
            r = this.getIterator();
          for (; this.indexes[r] < this.proxyOf.nodes.length && ((t = this.indexes[r]), (n = e(this.proxyOf.nodes[t], t)), !1 !== n);) this.indexes[r] += 1;
          return delete this.indexes[r], n;
        }
        walk(e) {
          return this.each((t, n) => {
            let r;
            try {
              r = e(t, n);
            } catch (e) {
              throw t.addToError(e);
            }
            return !1 !== r && t.walk && (r = t.walk(e)), r;
          });
        }
        walkDecls(e, t) {
          return t
            ? e instanceof RegExp
              ? this.walk((n, r) => {
                if ("decl" === n.type && e.test(n.prop)) return t(n, r);
              })
              : this.walk((n, r) => {
                if ("decl" === n.type && n.prop === e) return t(n, r);
              })
            : ((t = e),
              this.walk((e, n) => {
                if ("decl" === e.type) return t(e, n);
              }));
        }
        walkRules(e, t) {
          return t
            ? e instanceof RegExp
              ? this.walk((n, r) => {
                if ("rule" === n.type && e.test(n.selector)) return t(n, r);
              })
              : this.walk((n, r) => {
                if ("rule" === n.type && n.selector === e) return t(n, r);
              })
            : ((t = e),
              this.walk((e, n) => {
                if ("rule" === e.type) return t(e, n);
              }));
        }
        walkAtRules(e, t) {
          return t
            ? e instanceof RegExp
              ? this.walk((n, r) => {
                if ("atrule" === n.type && e.test(n.name)) return t(n, r);
              })
              : this.walk((n, r) => {
                if ("atrule" === n.type && n.name === e) return t(n, r);
              })
            : ((t = e),
              this.walk((e, n) => {
                if ("atrule" === e.type) return t(e, n);
              }));
        }
        walkComments(e) {
          return this.walk((t, n) => {
            if ("comment" === t.type) return e(t, n);
          });
        }
        append(...e) {
          for (let t of e) {
            let e = this.normalize(t, this.last);
            for (let t of e) this.proxyOf.nodes.push(t);
          }
          return this.markDirty(), this;
        }
        prepend(...e) {
          e = e.reverse();
          for (let t of e) {
            let e = this.normalize(t, this.first, "prepend").reverse();
            for (let t of e) this.proxyOf.nodes.unshift(t);
            for (let t in this.indexes) this.indexes[t] = this.indexes[t] + e.length;
          }
          return this.markDirty(), this;
        }
        cleanRaws(e) {
          if ((super.cleanRaws(e), this.nodes)) for (let t of this.nodes) t.cleanRaws(e);
        }
        insertBefore(e, t) {
          let n,
            r = 0 === (e = this.index(e)) && "prepend",
            i = this.normalize(t, this.proxyOf.nodes[e], r).reverse();
          for (let t of i) this.proxyOf.nodes.splice(e, 0, t);
          for (let t in this.indexes) (n = this.indexes[t]), e <= n && (this.indexes[t] = n + i.length);
          return this.markDirty(), this;
        }
        insertAfter(e, t) {
          e = this.index(e);
          let n,
            r = this.normalize(t, this.proxyOf.nodes[e]).reverse();
          for (let t of r) this.proxyOf.nodes.splice(e + 1, 0, t);
          for (let t in this.indexes) (n = this.indexes[t]), e < n && (this.indexes[t] = n + r.length);
          return this.markDirty(), this;
        }
        removeChild(e) {
          let t;
          (e = this.index(e)), (this.proxyOf.nodes[e].parent = void 0), this.proxyOf.nodes.splice(e, 1);
          for (let n in this.indexes) (t = this.indexes[n]), t >= e && (this.indexes[n] = t - 1);
          return this.markDirty(), this;
        }
        removeAll() {
          for (let e of this.proxyOf.nodes) e.parent = void 0;
          return (this.proxyOf.nodes = []), this.markDirty(), this;
        }
        replaceValues(e, t, n) {
          return (
            n || ((n = t), (t = {})),
            this.walkDecls((r) => {
              (t.props && !t.props.includes(r.prop)) || (t.fast && !r.value.includes(t.fast)) || (r.value = r.value.replace(e, n));
            }),
            this.markDirty(),
            this
          );
        }
        every(e) {
          return this.nodes.every(e);
        }
        some(e) {
          return this.nodes.some(e);
        }
        index(e) {
          return "number" == typeof e ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
        }
        normalize(e, t) {
          if ("string" == typeof e) e = d(r(e).nodes);
          else if (Array.isArray(e)) {
            e = e.slice(0);
            for (let t of e) t.parent && t.parent.removeChild(t, "ignore");
          } else if ("root" === e.type && "document" !== this.type) {
            e = e.nodes.slice(0);
            for (let t of e) t.parent && t.parent.removeChild(t, "ignore");
          } else if (e.type) e = [e];
          else if (e.prop) {
            if (void 0 === e.value) throw new Error("Value field is missed in node creation");
            "string" != typeof e.value && (e.value = String(e.value)), (e = [new l(e)]);
          } else if (e.selector) e = [new i(e)];
          else if (e.name) e = [new o(e)];
          else {
            if (!e.text) throw new Error("Unknown node type in node creation");
            e = [new c(e)];
          }
          return e.map(
            (e) => (
              e[a] || p.rebuild(e),
              (e = e.proxyOf).parent && e.parent.removeChild(e),
              e[s] && f(e),
              void 0 === e.raws.before && t && void 0 !== t.raws.before && (e.raws.before = t.raws.before.replace(/\S/g, "")),
              (e.parent = this),
              e
            )
          );
        }
        getProxyProcessor() {
          return {
            set: (e, t, n) => (e[t] === n || ((e[t] = n), ("name" !== t && "params" !== t && "selector" !== t) || e.markDirty()), !0),
            get: (e, t) =>
              "proxyOf" === t
                ? e
                : e[t]
                  ? "each" === t || ("string" == typeof t && t.startsWith("walk"))
                    ? (...n) => e[t](...n.map((e) => ("function" == typeof e ? (t, n) => e(t.toProxy(), n) : e)))
                    : "every" === t || "some" === t
                      ? (n) => e[t]((e, ...t) => n(e.toProxy(), ...t))
                      : "root" === t
                        ? () => e.root().toProxy()
                        : "nodes" === t
                          ? e.nodes.map((e) => e.toProxy())
                          : "first" === t || "last" === t
                            ? e[t].toProxy()
                            : e[t]
                  : e[t],
          };
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), (this.lastEach += 1);
          let e = this.lastEach;
          return (this.indexes[e] = 0), e;
        }
      }
      (p.registerParse = (e) => {
        r = e;
      }),
        (p.registerRule = (e) => {
          i = e;
        }),
        (p.registerAtRule = (e) => {
          o = e;
        }),
        (e.exports = p),
        (p.default = p),
        (p.rebuild = (e) => {
          "atrule" === e.type
            ? Object.setPrototypeOf(e, o.prototype)
            : "rule" === e.type
              ? Object.setPrototypeOf(e, i.prototype)
              : "decl" === e.type
                ? Object.setPrototypeOf(e, l.prototype)
                : "comment" === e.type && Object.setPrototypeOf(e, c.prototype),
            (e[a] = !0),
            e.nodes &&
            e.nodes.forEach((e) => {
              p.rebuild(e);
            });
        });
    },
    671: function (e, t, n) {
      "use strict";
      let { red: r, bold: i, gray: o, isColorSupported: s } = n(231),
        a = n(868);
      class l extends Error {
        constructor(e, t, n, r, i, o) {
          super(e),
            (this.name = "CssSyntaxError"),
            (this.reason = e),
            i && (this.file = i),
            r && (this.source = r),
            o && (this.plugin = o),
            void 0 !== t && void 0 !== n && ((this.line = t), (this.column = n)),
            this.setMessage(),
            Error.captureStackTrace && Error.captureStackTrace(this, l);
        }
        setMessage() {
          (this.message = this.plugin ? this.plugin + ": " : ""),
            (this.message += this.file ? this.file : "<css input>"),
            void 0 !== this.line && (this.message += ":" + this.line + ":" + this.column),
            (this.message += ": " + this.reason);
        }
        showSourceCode(e) {
          if (!this.source) return "";
          let t = this.source;
          null == e && (e = s), a && e && (t = a(t));
          let n,
            l,
            c = t.split(/\r?\n/),
            u = Math.max(this.line - 3, 0),
            d = Math.min(this.line + 2, c.length),
            f = String(d).length;
          return (
            e ? ((n = (e) => i(r(e))), (l = (e) => o(e))) : (n = l = (e) => e),
            c
              .slice(u, d)
              .map((e, t) => {
                let r = u + 1 + t,
                  i = " " + (" " + r).slice(-f) + " | ";
                if (r === this.line) {
                  let t = l(i.replace(/\d/g, " ")) + e.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                  return n(">") + l(i) + e + "\n " + t + n("^");
                }
                return " " + l(i) + e;
              })
              .join("\n")
          );
        }
        toString() {
          let e = this.showSourceCode();
          return e && (e = "\n\n" + e + "\n"), this.name + ": " + this.message + e;
        }
      }
      (e.exports = l), (l.default = l);
    },
    258: function (e, t, n) {
      "use strict";
      let r = n(631);
      class i extends r {
        constructor(e) {
          e && void 0 !== e.value && "string" != typeof e.value && (e = { ...e, value: String(e.value) }), super(e), (this.type = "decl");
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0];
        }
      }
      (e.exports = i), (i.default = i);
    },
    461: function (e, t, n) {
      "use strict";
      let r,
        i,
        o = n(19);
      class s extends o {
        constructor(e) {
          super({ type: "document", ...e }), this.nodes || (this.nodes = []);
        }
        toResult(e = {}) {
          return new r(new i(), this, e).stringify();
        }
      }
      (s.registerLazyResult = (e) => {
        r = e;
      }),
        (s.registerProcessor = (e) => {
          i = e;
        }),
        (e.exports = s),
        (s.default = s);
    },
    250: function (e, t, n) {
      "use strict";
      let r = n(258),
        i = n(981),
        o = n(932),
        s = n(353),
        a = n(995),
        l = n(25),
        c = n(675);
      function u(e, t) {
        if (Array.isArray(e)) return e.map((e) => u(e));
        let { inputs: n, ...d } = e;
        if (n) {
          t = [];
          for (let e of n) {
            let n = { ...e, __proto__: a.prototype };
            n.map && (n.map = { ...n.map, __proto__: i.prototype }), t.push(n);
          }
        }
        if ((d.nodes && (d.nodes = e.nodes.map((e) => u(e, t))), d.source)) {
          let { inputId: e, ...n } = d.source;
          (d.source = n), null != e && (d.source.input = t[e]);
        }
        if ("root" === d.type) return new l(d);
        if ("decl" === d.type) return new r(d);
        if ("rule" === d.type) return new c(d);
        if ("comment" === d.type) return new o(d);
        if ("atrule" === d.type) return new s(d);
        throw new Error("Unknown node type: " + e.type);
      }
      (e.exports = u), (u.default = u);
    },
    995: function (e, t, n) {
      "use strict";
      let { SourceMapConsumer: r, SourceMapGenerator: i } = n(209),
        { fileURLToPath: o, pathToFileURL: s } = n(414),
        { resolve: a, isAbsolute: l } = n(830),
        { nanoid: c } = n(961),
        u = n(868),
        d = n(671),
        f = n(981),
        p = Symbol("fromOffsetCache"),
        h = Boolean(r && i),
        m = Boolean(a && l);
      class g {
        constructor(e, t = {}) {
          if (null == e || ("object" == typeof e && !e.toString)) throw new Error(`PostCSS received ${e} instead of CSS string`);
          if (
            ((this.css = e.toString()),
              "\ufeff" === this.css[0] || "￾" === this.css[0] ? ((this.hasBOM = !0), (this.css = this.css.slice(1))) : (this.hasBOM = !1),
              t.from && (!m || /^\w+:\/\//.test(t.from) || l(t.from) ? (this.file = t.from) : (this.file = a(t.from))),
              m && h)
          ) {
            let e = new f(this.css, t);
            if (e.text) {
              this.map = e;
              let t = e.consumer().file;
              !this.file && t && (this.file = this.mapResolve(t));
            }
          }
          this.file || (this.id = "<input css " + c(6) + ">"), this.map && (this.map.file = this.from);
        }
        fromOffset(e) {
          let t, n;
          if (this[p]) n = this[p];
          else {
            let e = this.css.split("\n");
            n = new Array(e.length);
            let t = 0;
            for (let r = 0, i = e.length; r < i; r++) (n[r] = t), (t += e[r].length + 1);
            this[p] = n;
          }
          t = n[n.length - 1];
          let r = 0;
          if (e >= t) r = n.length - 1;
          else {
            let t,
              i = n.length - 2;
            for (; r < i;)
              if (((t = r + ((i - r) >> 1)), e < n[t])) i = t - 1;
              else {
                if (!(e >= n[t + 1])) {
                  r = t;
                  break;
                }
                r = t + 1;
              }
          }
          return { line: r + 1, col: e - n[r] + 1 };
        }
        error(e, t, n, r = {}) {
          let i;
          if (!n) {
            let e = this.fromOffset(t);
            (t = e.line), (n = e.col);
          }
          let o = this.origin(t, n);
          return (
            (i = o ? new d(e, o.line, o.column, o.source, o.file, r.plugin) : new d(e, t, n, this.css, this.file, r.plugin)),
            (i.input = { line: t, column: n, source: this.css }),
            this.file && (s && (i.input.url = s(this.file).toString()), (i.input.file = this.file)),
            i
          );
        }
        origin(e, t) {
          if (!this.map) return !1;
          let n,
            r = this.map.consumer(),
            i = r.originalPositionFor({ line: e, column: t });
          if (!i.source) return !1;
          n = l(i.source) ? s(i.source) : new URL(i.source, this.map.consumer().sourceRoot || s(this.map.mapFile));
          let a = { url: n.toString(), line: i.line, column: i.column };
          if ("file:" === n.protocol) {
            if (!o) throw new Error("file: protocol is not available in this PostCSS build");
            a.file = o(n);
          }
          let c = r.sourceContentFor(i.source);
          return c && (a.source = c), a;
        }
        mapResolve(e) {
          return /^\w+:\/\//.test(e) ? e : a(this.map.consumer().sourceRoot || this.map.root || ".", e);
        }
        get from() {
          return this.file || this.id;
        }
        toJSON() {
          let e = {};
          for (let t of ["hasBOM", "css", "file", "id"]) null != this[t] && (e[t] = this[t]);
          return this.map && ((e.map = { ...this.map }), e.map.consumerCache && (e.map.consumerCache = void 0)), e;
        }
      }
      (e.exports = g), (g.default = g), u && u.registerInput && u.registerInput(g);
    },
    939: function (e, t, n) {
      "use strict";
      let { isClean: r, my: i } = n(513),
        o = n(505),
        s = n(88),
        a = n(19),
        l = n(461),
        c = (n(448), n(632)),
        u = n(964),
        d = n(25);
      const f = { document: "Document", root: "Root", atrule: "AtRule", rule: "Rule", decl: "Declaration", comment: "Comment" },
        p = {
          postcssPlugin: !0,
          prepare: !0,
          Once: !0,
          Document: !0,
          Root: !0,
          Declaration: !0,
          Rule: !0,
          AtRule: !0,
          Comment: !0,
          DeclarationExit: !0,
          RuleExit: !0,
          AtRuleExit: !0,
          CommentExit: !0,
          RootExit: !0,
          DocumentExit: !0,
          OnceExit: !0,
        },
        h = { postcssPlugin: !0, prepare: !0, Once: !0 };
      function m(e) {
        return "object" == typeof e && "function" == typeof e.then;
      }
      function g(e) {
        let t = !1,
          n = f[e.type];
        return (
          "decl" === e.type ? (t = e.prop.toLowerCase()) : "atrule" === e.type && (t = e.name.toLowerCase()),
          t && e.append ? [n, n + "-" + t, 0, n + "Exit", n + "Exit-" + t] : t ? [n, n + "-" + t, n + "Exit", n + "Exit-" + t] : e.append ? [n, 0, n + "Exit"] : [n, n + "Exit"]
        );
      }
      function v(e) {
        let t;
        return (t = "document" === e.type ? ["Document", 0, "DocumentExit"] : "root" === e.type ? ["Root", 0, "RootExit"] : g(e)), { node: e, events: t, eventIndex: 0, visitors: [], visitorIndex: 0, iterator: 0 };
      }
      function y(e) {
        return (e[r] = !1), e.nodes && e.nodes.forEach((e) => y(e)), e;
      }
      let b = {};
      class x {
        constructor(e, t, n) {
          let r;
          if (((this.stringified = !1), (this.processed = !1), "object" != typeof t || null === t || ("root" !== t.type && "document" !== t.type)))
            if (t instanceof x || t instanceof c) (r = y(t.root)), t.map && (void 0 === n.map && (n.map = {}), n.map.inline || (n.map.inline = !1), (n.map.prev = t.map));
            else {
              let e = u;
              n.syntax && (e = n.syntax.parse), n.parser && (e = n.parser), e.parse && (e = e.parse);
              try {
                r = e(t, n);
              } catch (e) {
                (this.processed = !0), (this.error = e);
              }
              r && !r[i] && a.rebuild(r);
            }
          else r = y(t);
          (this.result = new c(e, r, n)),
            (this.helpers = { ...b, result: this.result, postcss: b }),
            (this.plugins = this.processor.plugins.map((e) => ("object" == typeof e && e.prepare ? { ...e, ...e.prepare(this.result) } : e)));
        }
        get [Symbol.toStringTag]() {
          return "LazyResult";
        }
        get processor() {
          return this.result.processor;
        }
        get opts() {
          return this.result.opts;
        }
        get css() {
          return this.stringify().css;
        }
        get content() {
          return this.stringify().content;
        }
        get map() {
          return this.stringify().map;
        }
        get root() {
          return this.sync().root;
        }
        get messages() {
          return this.sync().messages;
        }
        warnings() {
          return this.sync().warnings();
        }
        toString() {
          return this.css;
        }
        then(e, t) {
          return this.async().then(e, t);
        }
        catch(e) {
          return this.async().catch(e);
        }
        finally(e) {
          return this.async().then(e, e);
        }
        async() {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (((this.processed = !0), this.processing)) throw this.getAsyncError();
          for (let e of this.plugins) if (m(this.runOnRoot(e))) throw this.getAsyncError();
          if ((this.prepareVisitors(), this.hasListener)) {
            let e = this.result.root;
            for (; !e[r];) (e[r] = !0), this.walkSync(e);
            if (this.listeners.OnceExit)
              if ("document" === e.type) for (let t of e.nodes) this.visitSync(this.listeners.OnceExit, t);
              else this.visitSync(this.listeners.OnceExit, e);
          }
          return this.result;
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          (this.stringified = !0), this.sync();
          let e = this.result.opts,
            t = s;
          e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
          let n = new o(t, this.result.root, this.result.opts).generate();
          return (this.result.css = n[0]), (this.result.map = n[1]), this.result;
        }
        walkSync(e) {
          e[r] = !0;
          let t = g(e);
          for (let n of t)
            if (0 === n)
              e.nodes &&
                e.each((e) => {
                  e[r] || this.walkSync(e);
                });
            else {
              let t = this.listeners[n];
              if (t && this.visitSync(t, e.toProxy())) return;
            }
        }
        visitSync(e, t) {
          for (let [n, r] of e) {
            let e;
            this.result.lastPlugin = n;
            try {
              e = r(t, this.helpers);
            } catch (e) {
              throw this.handleError(e, t.proxyOf);
            }
            if ("root" !== t.type && "document" !== t.type && !t.parent) return !0;
            if (m(e)) throw this.getAsyncError();
          }
        }
        runOnRoot(e) {
          this.result.lastPlugin = e;
          try {
            if ("object" == typeof e && e.Once) {
              if ("document" === this.result.root.type) {
                let t = this.result.root.nodes.map((t) => e.Once(t, this.helpers));
                return m(t[0]) ? Promise.all(t) : t;
              }
              return e.Once(this.result.root, this.helpers);
            }
            if ("function" == typeof e) return e(this.result.root, this.result);
          } catch (e) {
            throw this.handleError(e);
          }
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins");
        }
        handleError(e, t) {
          let n = this.result.lastPlugin;
          try {
            t && t.addToError(e), (this.error = e), "CssSyntaxError" !== e.name || e.plugin ? n.postcssVersion : ((e.plugin = n.postcssPlugin), e.setMessage());
          } catch (e) {
            console && console.error && console.error(e);
          }
          return e;
        }
        async runAsync() {
          this.plugin = 0;
          for (let e = 0; e < this.plugins.length; e++) {
            let t = this.plugins[e],
              n = this.runOnRoot(t);
            if (m(n))
              try {
                await n;
              } catch (e) {
                throw this.handleError(e);
              }
          }
          if ((this.prepareVisitors(), this.hasListener)) {
            let e = this.result.root;
            for (; !e[r];) {
              e[r] = !0;
              let t = [v(e)];
              for (; t.length > 0;) {
                let e = this.visitTick(t);
                if (m(e))
                  try {
                    await e;
                  } catch (e) {
                    let n = t[t.length - 1].node;
                    throw this.handleError(e, n);
                  }
              }
            }
            if (this.listeners.OnceExit)
              for (let [t, n] of this.listeners.OnceExit) {
                this.result.lastPlugin = t;
                try {
                  if ("document" === e.type) {
                    let t = e.nodes.map((e) => n(e, this.helpers));
                    await Promise.all(t);
                  } else await n(e, this.helpers);
                } catch (e) {
                  throw this.handleError(e);
                }
              }
          }
          return (this.processed = !0), this.stringify();
        }
        prepareVisitors() {
          this.listeners = {};
          let e = (e, t, n) => {
            this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push([e, n]);
          };
          for (let t of this.plugins)
            if ("object" == typeof t)
              for (let n in t) {
                if (!p[n] && /^[A-Z]/.test(n)) throw new Error(`Unknown event ${n} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!h[n])
                  if ("object" == typeof t[n]) for (let r in t[n]) e(t, "*" === r ? n : n + "-" + r.toLowerCase(), t[n][r]);
                  else "function" == typeof t[n] && e(t, n, t[n]);
              }
          this.hasListener = Object.keys(this.listeners).length > 0;
        }
        visitTick(e) {
          let t = e[e.length - 1],
            { node: n, visitors: i } = t;
          if ("root" !== n.type && "document" !== n.type && !n.parent) return void e.pop();
          if (i.length > 0 && t.visitorIndex < i.length) {
            let [e, r] = i[t.visitorIndex];
            (t.visitorIndex += 1), t.visitorIndex === i.length && ((t.visitors = []), (t.visitorIndex = 0)), (this.result.lastPlugin = e);
            try {
              return r(n.toProxy(), this.helpers);
            } catch (e) {
              throw this.handleError(e, n);
            }
          }
          if (0 !== t.iterator) {
            let i,
              o = t.iterator;
            for (; (i = n.nodes[n.indexes[o]]);) if (((n.indexes[o] += 1), !i[r])) return (i[r] = !0), void e.push(v(i));
            (t.iterator = 0), delete n.indexes[o];
          }
          let o = t.events;
          for (; t.eventIndex < o.length;) {
            let e = o[t.eventIndex];
            if (((t.eventIndex += 1), 0 === e)) return void (n.nodes && n.nodes.length && ((n[r] = !0), (t.iterator = n.getIterator())));
            if (this.listeners[e]) return void (t.visitors = this.listeners[e]);
          }
          e.pop();
        }
      }
      (x.registerPostcss = (e) => {
        b = e;
      }),
        (e.exports = x),
        (x.default = x),
        d.registerLazyResult(x),
        l.registerLazyResult(x);
    },
    715: function (e) {
      "use strict";
      let t = {
        split(e, t, n) {
          let r = [],
            i = "",
            o = !1,
            s = 0,
            a = !1,
            l = !1;
          for (let n of e)
            l ? (l = !1) : "\\" === n ? (l = !0) : a ? n === a && (a = !1) : '"' === n || "'" === n ? (a = n) : "(" === n ? (s += 1) : ")" === n ? s > 0 && (s -= 1) : 0 === s && t.includes(n) && (o = !0),
              o ? ("" !== i && r.push(i.trim()), (i = ""), (o = !1)) : (i += n);
          return (n || "" !== i) && r.push(i.trim()), r;
        },
        space: (e) => t.split(e, [" ", "\n", "\t"]),
        comma: (e) => t.split(e, [","], !0),
      };
      (e.exports = t), (t.default = t);
    },
    505: function (e, t, n) {
      "use strict";
      let { SourceMapConsumer: r, SourceMapGenerator: i } = n(209),
        { dirname: o, resolve: s, relative: a, sep: l } = n(830),
        { pathToFileURL: c } = n(414),
        u = Boolean(r && i),
        d = Boolean(o && s && a && l);
      e.exports = class {
        constructor(e, t, n) {
          (this.stringify = e), (this.mapOpts = n.map || {}), (this.root = t), (this.opts = n);
        }
        isMap() {
          return void 0 !== this.opts.map ? !!this.opts.map : this.previous().length > 0;
        }
        previous() {
          return (
            this.previousMaps ||
            ((this.previousMaps = []),
              this.root.walk((e) => {
                if (e.source && e.source.input.map) {
                  let t = e.source.input.map;
                  this.previousMaps.includes(t) || this.previousMaps.push(t);
                }
              })),
            this.previousMaps
          );
        }
        isInline() {
          if (void 0 !== this.mapOpts.inline) return this.mapOpts.inline;
          let e = this.mapOpts.annotation;
          return (void 0 === e || !0 === e) && (!this.previous().length || this.previous().some((e) => e.inline));
        }
        isSourcesContent() {
          return void 0 !== this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((e) => e.withContent());
        }
        clearAnnotation() {
          if (!1 === this.mapOpts.annotation) return;
          let e;
          for (let t = this.root.nodes.length - 1; t >= 0; t--) (e = this.root.nodes[t]), "comment" === e.type && 0 === e.text.indexOf("# sourceMappingURL=") && this.root.removeChild(t);
        }
        setSourcesContent() {
          let e = {};
          this.root.walk((t) => {
            if (t.source) {
              let n = t.source.input.from;
              n && !e[n] && ((e[n] = !0), this.map.setSourceContent(this.toUrl(this.path(n)), t.source.input.css));
            }
          });
        }
        applyPrevMaps() {
          for (let e of this.previous()) {
            let t,
              n = this.toUrl(this.path(e.file)),
              i = e.root || o(e.file);
            !1 === this.mapOpts.sourcesContent ? ((t = new r(e.text)), t.sourcesContent && (t.sourcesContent = t.sourcesContent.map(() => null))) : (t = e.consumer()), this.map.applySourceMap(t, n, this.toUrl(this.path(i)));
          }
        }
        isAnnotation() {
          return !!this.isInline() || (void 0 !== this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((e) => e.annotation));
        }
        toBase64(e) {
          return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
        }
        addAnnotation() {
          let e;
          e = this.isInline()
            ? "data:application/json;base64," + this.toBase64(this.map.toString())
            : "string" == typeof this.mapOpts.annotation
              ? this.mapOpts.annotation
              : "function" == typeof this.mapOpts.annotation
                ? this.mapOpts.annotation(this.opts.to, this.root)
                : this.outputFile() + ".map";
          let t = "\n";
          this.css.includes("\r\n") && (t = "\r\n"), (this.css += t + "/*# sourceMappingURL=" + e + " */");
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
        }
        generateMap() {
          return (
            this.generateString(),
            this.isSourcesContent() && this.setSourcesContent(),
            this.previous().length > 0 && this.applyPrevMaps(),
            this.isAnnotation() && this.addAnnotation(),
            this.isInline() ? [this.css] : [this.css, this.map]
          );
        }
        path(e) {
          if (0 === e.indexOf("<")) return e;
          if (/^\w+:\/\//.test(e)) return e;
          if (this.mapOpts.absolute) return e;
          let t = this.opts.to ? o(this.opts.to) : ".";
          return "string" == typeof this.mapOpts.annotation && (t = o(s(t, this.mapOpts.annotation))), a(t, e);
        }
        toUrl(e) {
          return "\\" === l && (e = e.replace(/\\/g, "/")), encodeURI(e).replace(/[#?]/g, encodeURIComponent);
        }
        sourcePath(e) {
          if (this.mapOpts.from) return this.toUrl(this.mapOpts.from);
          if (this.mapOpts.absolute) {
            if (c) return c(e.source.input.from).toString();
            throw new Error("`map.absolute` option is not available in this PostCSS build");
          }
          return this.toUrl(this.path(e.source.input.from));
        }
        generateString() {
          (this.css = ""), (this.map = new i({ file: this.outputFile() }));
          let e,
            t,
            n = 1,
            r = 1,
            o = "<no source>",
            s = { source: "", generated: { line: 0, column: 0 }, original: { line: 0, column: 0 } };
          this.stringify(this.root, (i, a, l) => {
            if (
              ((this.css += i),
                a &&
                "end" !== l &&
                ((s.generated.line = n),
                  (s.generated.column = r - 1),
                  a.source && a.source.start
                    ? ((s.source = this.sourcePath(a)), (s.original.line = a.source.start.line), (s.original.column = a.source.start.column - 1), this.map.addMapping(s))
                    : ((s.source = o), (s.original.line = 1), (s.original.column = 0), this.map.addMapping(s))),
                (e = i.match(/\n/g)),
                e ? ((n += e.length), (t = i.lastIndexOf("\n")), (r = i.length - t)) : (r += i.length),
                a && "start" !== l)
            ) {
              let e = a.parent || { raws: {} };
              ("decl" !== a.type || a !== e.last || e.raws.semicolon) &&
                (a.source && a.source.end
                  ? ((s.source = this.sourcePath(a)), (s.original.line = a.source.end.line), (s.original.column = a.source.end.column - 1), (s.generated.line = n), (s.generated.column = r - 2), this.map.addMapping(s))
                  : ((s.source = o), (s.original.line = 1), (s.original.column = 0), (s.generated.line = n), (s.generated.column = r - 1), this.map.addMapping(s)));
            }
          });
        }
        generate() {
          if ((this.clearAnnotation(), d && u && this.isMap())) return this.generateMap();
          let e = "";
          return (
            this.stringify(this.root, (t) => {
              e += t;
            }),
            [e]
          );
        }
      };
    },
    631: function (e, t, n) {
      "use strict";
      let { isClean: r, my: i } = n(513),
        o = n(671),
        s = n(62),
        a = n(88);
      function l(e, t) {
        let n = new e.constructor();
        for (let r in e) {
          if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
          if ("proxyCache" === r) continue;
          let i = e[r],
            o = typeof i;
          "parent" === r && "object" === o ? t && (n[r] = t) : "source" === r ? (n[r] = i) : Array.isArray(i) ? (n[r] = i.map((e) => l(e, n))) : ("object" === o && null !== i && (i = l(i)), (n[r] = i));
        }
        return n;
      }
      class c {
        constructor(e = {}) {
          (this.raws = {}), (this[r] = !1), (this[i] = !0);
          for (let t in e)
            if ("nodes" === t) {
              this.nodes = [];
              for (let n of e[t]) "function" == typeof n.clone ? this.append(n.clone()) : this.append(n);
            } else this[t] = e[t];
        }
        error(e, t = {}) {
          if (this.source) {
            let n = this.positionBy(t);
            return this.source.input.error(e, n.line, n.column, t);
          }
          return new o(e);
        }
        warn(e, t, n) {
          let r = { node: this };
          for (let e in n) r[e] = n[e];
          return e.warn(t, r);
        }
        remove() {
          return this.parent && this.parent.removeChild(this), (this.parent = void 0), this;
        }
        toString(e = a) {
          e.stringify && (e = e.stringify);
          let t = "";
          return (
            e(this, (e) => {
              t += e;
            }),
            t
          );
        }
        assign(e = {}) {
          for (let t in e) this[t] = e[t];
          return this;
        }
        clone(e = {}) {
          let t = l(this);
          for (let n in e) t[n] = e[n];
          return t;
        }
        cloneBefore(e = {}) {
          let t = this.clone(e);
          return this.parent.insertBefore(this, t), t;
        }
        cloneAfter(e = {}) {
          let t = this.clone(e);
          return this.parent.insertAfter(this, t), t;
        }
        replaceWith(...e) {
          if (this.parent) {
            let t = this,
              n = !1;
            for (let r of e) r === this ? (n = !0) : n ? (this.parent.insertAfter(t, r), (t = r)) : this.parent.insertBefore(t, r);
            n || this.remove();
          }
          return this;
        }
        next() {
          if (!this.parent) return;
          let e = this.parent.index(this);
          return this.parent.nodes[e + 1];
        }
        prev() {
          if (!this.parent) return;
          let e = this.parent.index(this);
          return this.parent.nodes[e - 1];
        }
        before(e) {
          return this.parent.insertBefore(this, e), this;
        }
        after(e) {
          return this.parent.insertAfter(this, e), this;
        }
        root() {
          let e = this;
          for (; e.parent && "document" !== e.parent.type;) e = e.parent;
          return e;
        }
        raw(e, t) {
          return new s().raw(this, e, t);
        }
        cleanRaws(e) {
          delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
        }
        toJSON(e, t) {
          let n = {},
            r = null == t;
          t = t || new Map();
          let i = 0;
          for (let e in this) {
            if (!Object.prototype.hasOwnProperty.call(this, e)) continue;
            if ("parent" === e || "proxyCache" === e) continue;
            let r = this[e];
            if (Array.isArray(r)) n[e] = r.map((e) => ("object" == typeof e && e.toJSON ? e.toJSON(null, t) : e));
            else if ("object" == typeof r && r.toJSON) n[e] = r.toJSON(null, t);
            else if ("source" === e) {
              let o = t.get(r.input);
              null == o && ((o = i), t.set(r.input, i), i++), (n[e] = { inputId: o, start: r.start, end: r.end });
            } else n[e] = r;
          }
          return r && (n.inputs = [...t.keys()].map((e) => e.toJSON())), n;
        }
        positionInside(e) {
          let t = this.toString(),
            n = this.source.start.column,
            r = this.source.start.line;
          for (let i = 0; i < e; i++) "\n" === t[i] ? ((n = 1), (r += 1)) : (n += 1);
          return { line: r, column: n };
        }
        positionBy(e) {
          let t = this.source.start;
          if (e.index) t = this.positionInside(e.index);
          else if (e.word) {
            let n = this.toString().indexOf(e.word);
            -1 !== n && (t = this.positionInside(n));
          }
          return t;
        }
        getProxyProcessor() {
          return {
            set: (e, t, n) => (e[t] === n || ((e[t] = n), ("prop" !== t && "value" !== t && "name" !== t && "params" !== t && "important" !== t && "text" !== t) || e.markDirty()), !0),
            get: (e, t) => ("proxyOf" === t ? e : "root" === t ? () => e.root().toProxy() : e[t]),
          };
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
        }
        addToError(e) {
          if (((e.postcssNode = this), e.stack && this.source && /\n\s{4}at /.test(e.stack))) {
            let t = this.source;
            e.stack = e.stack.replace(/\n\s{4}at /, `$&${t.input.from}:${t.start.line}:${t.start.column}$&`);
          }
          return e;
        }
        markDirty() {
          if (this[r]) {
            this[r] = !1;
            let e = this;
            for (; (e = e.parent);) e[r] = !1;
          }
        }
        get proxyOf() {
          return this;
        }
      }
      (e.exports = c), (c.default = c);
    },
    964: function (e, t, n) {
      "use strict";
      let r = n(19),
        i = n(867),
        o = n(995);
      function s(e, t) {
        let n = new o(e, t),
          r = new i(n);
        try {
          r.parse();
        } catch (e) {
          throw e;
        }
        return r.root;
      }
      (e.exports = s), (s.default = s), r.registerParse(s);
    },
    867: function (e, t, n) {
      "use strict";
      let r = n(258),
        i = n(852),
        o = n(932),
        s = n(353),
        a = n(25),
        l = n(675);
      e.exports = class {
        constructor(e) {
          (this.input = e),
            (this.root = new a()),
            (this.current = this.root),
            (this.spaces = ""),
            (this.semicolon = !1),
            (this.customProperty = !1),
            this.createTokenizer(),
            (this.root.source = { input: e, start: { offset: 0, line: 1, column: 1 } });
        }
        createTokenizer() {
          this.tokenizer = i(this.input);
        }
        parse() {
          let e;
          for (; !this.tokenizer.endOfFile();)
            switch (((e = this.tokenizer.nextToken()), e[0])) {
              case "space":
                this.spaces += e[1];
                break;
              case ";":
                this.freeSemicolon(e);
                break;
              case "}":
                this.end(e);
                break;
              case "comment":
                this.comment(e);
                break;
              case "at-word":
                this.atrule(e);
                break;
              case "{":
                this.emptyRule(e);
                break;
              default:
                this.other(e);
            }
          this.endFile();
        }
        comment(e) {
          let t = new o();
          this.init(t, e[2]), (t.source.end = this.getPosition(e[3] || e[2]));
          let n = e[1].slice(2, -2);
          if (/^\s*$/.test(n)) (t.text = ""), (t.raws.left = n), (t.raws.right = "");
          else {
            let e = n.match(/^(\s*)([^]*\S)(\s*)$/);
            (t.text = e[2]), (t.raws.left = e[1]), (t.raws.right = e[3]);
          }
        }
        emptyRule(e) {
          let t = new l();
          this.init(t, e[2]), (t.selector = ""), (t.raws.between = ""), (this.current = t);
        }
        other(e) {
          let t = !1,
            n = null,
            r = !1,
            i = null,
            o = [],
            s = e[1].startsWith("--"),
            a = [],
            l = e;
          for (; l;) {
            if (((n = l[0]), a.push(l), "(" === n || "[" === n)) i || (i = l), o.push("(" === n ? ")" : "]");
            else if (s && r && "{" === n) i || (i = l), o.push("}");
            else if (0 === o.length) {
              if (";" === n) {
                if (r) return void this.decl(a, s);
                break;
              }
              if ("{" === n) return void this.rule(a);
              if ("}" === n) {
                this.tokenizer.back(a.pop()), (t = !0);
                break;
              }
              ":" === n && (r = !0);
            } else n === o[o.length - 1] && (o.pop(), 0 === o.length && (i = null));
            l = this.tokenizer.nextToken();
          }
          if ((this.tokenizer.endOfFile() && (t = !0), o.length > 0 && this.unclosedBracket(i), t && r)) {
            for (; a.length && ((l = a[a.length - 1][0]), "space" === l || "comment" === l);) this.tokenizer.back(a.pop());
            this.decl(a, s);
          } else this.unknownWord(a);
        }
        rule(e) {
          e.pop();
          let t = new l();
          this.init(t, e[0][2]), (t.raws.between = this.spacesAndCommentsFromEnd(e)), this.raw(t, "selector", e), (this.current = t);
        }
        decl(e, t) {
          let n = new r();
          this.init(n, e[0][2]);
          let i,
            o = e[e.length - 1];
          for (";" === o[0] && ((this.semicolon = !0), e.pop()), n.source.end = this.getPosition(o[3] || o[2]); "word" !== e[0][0];) 1 === e.length && this.unknownWord(e), (n.raws.before += e.shift()[1]);
          for (n.source.start = this.getPosition(e[0][2]), n.prop = ""; e.length;) {
            let t = e[0][0];
            if (":" === t || "space" === t || "comment" === t) break;
            n.prop += e.shift()[1];
          }
          for (n.raws.between = ""; e.length;) {
            if (((i = e.shift()), ":" === i[0])) {
              n.raws.between += i[1];
              break;
            }
            "word" === i[0] && /\w/.test(i[1]) && this.unknownWord([i]), (n.raws.between += i[1]);
          }
          ("_" !== n.prop[0] && "*" !== n.prop[0]) || ((n.raws.before += n.prop[0]), (n.prop = n.prop.slice(1)));
          let s = this.spacesAndCommentsFromStart(e);
          this.precheckMissedSemicolon(e);
          for (let t = e.length - 1; t >= 0; t--) {
            if (((i = e[t]), "!important" === i[1].toLowerCase())) {
              n.important = !0;
              let r = this.stringFrom(e, t);
              (r = this.spacesFromEnd(e) + r), " !important" !== r && (n.raws.important = r);
              break;
            }
            if ("important" === i[1].toLowerCase()) {
              let r = e.slice(0),
                i = "";
              for (let e = t; e > 0; e--) {
                let t = r[e][0];
                if (0 === i.trim().indexOf("!") && "space" !== t) break;
                i = r.pop()[1] + i;
              }
              0 === i.trim().indexOf("!") && ((n.important = !0), (n.raws.important = i), (e = r));
            }
            if ("space" !== i[0] && "comment" !== i[0]) break;
          }
          let a = e.some((e) => "space" !== e[0] && "comment" !== e[0]);
          this.raw(n, "value", e), a ? (n.raws.between += s) : (n.value = s + n.value), n.value.includes(":") && !t && this.checkMissedSemicolon(e);
        }
        atrule(e) {
          let t,
            n,
            r,
            i = new s();
          (i.name = e[1].slice(1)), "" === i.name && this.unnamedAtrule(i, e), this.init(i, e[2]);
          let o = !1,
            a = !1,
            l = [],
            c = [];
          for (; !this.tokenizer.endOfFile();) {
            if (((t = (e = this.tokenizer.nextToken())[0]), "(" === t || "[" === t ? c.push("(" === t ? ")" : "]") : "{" === t && c.length > 0 ? c.push("}") : t === c[c.length - 1] && c.pop(), 0 === c.length)) {
              if (";" === t) {
                (i.source.end = this.getPosition(e[2])), (this.semicolon = !0);
                break;
              }
              if ("{" === t) {
                a = !0;
                break;
              }
              if ("}" === t) {
                if (l.length > 0) {
                  for (r = l.length - 1, n = l[r]; n && "space" === n[0];) n = l[--r];
                  n && (i.source.end = this.getPosition(n[3] || n[2]));
                }
                this.end(e);
                break;
              }
              l.push(e);
            } else l.push(e);
            if (this.tokenizer.endOfFile()) {
              o = !0;
              break;
            }
          }
          (i.raws.between = this.spacesAndCommentsFromEnd(l)),
            l.length
              ? ((i.raws.afterName = this.spacesAndCommentsFromStart(l)),
                this.raw(i, "params", l),
                o && ((e = l[l.length - 1]), (i.source.end = this.getPosition(e[3] || e[2])), (this.spaces = i.raws.between), (i.raws.between = "")))
              : ((i.raws.afterName = ""), (i.params = "")),
            a && ((i.nodes = []), (this.current = i));
        }
        end(e) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon),
            (this.semicolon = !1),
            (this.current.raws.after = (this.current.raws.after || "") + this.spaces),
            (this.spaces = ""),
            this.current.parent ? ((this.current.source.end = this.getPosition(e[2])), (this.current = this.current.parent)) : this.unexpectedClose(e);
        }
        endFile() {
          this.current.parent && this.unclosedBlock(),
            this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon),
            (this.current.raws.after = (this.current.raws.after || "") + this.spaces);
        }
        freeSemicolon(e) {
          if (((this.spaces += e[1]), this.current.nodes)) {
            let e = this.current.nodes[this.current.nodes.length - 1];
            e && "rule" === e.type && !e.raws.ownSemicolon && ((e.raws.ownSemicolon = this.spaces), (this.spaces = ""));
          }
        }
        getPosition(e) {
          let t = this.input.fromOffset(e);
          return { offset: e, line: t.line, column: t.col };
        }
        init(e, t) {
          this.current.push(e), (e.source = { start: this.getPosition(t), input: this.input }), (e.raws.before = this.spaces), (this.spaces = ""), "comment" !== e.type && (this.semicolon = !1);
        }
        raw(e, t, n) {
          let r,
            i,
            o,
            s,
            a = n.length,
            l = "",
            c = !0,
            u = /^([#.|])?(\w)+/i;
          for (let t = 0; t < a; t += 1)
            (r = n[t]),
              (i = r[0]),
              "comment" !== i || "rule" !== e.type
                ? "comment" === i || ("space" === i && t === a - 1)
                  ? (c = !1)
                  : (l += r[1])
                : ((s = n[t - 1]), (o = n[t + 1]), "space" !== s[0] && "space" !== o[0] && u.test(s[1]) && u.test(o[1]) ? (l += r[1]) : (c = !1));
          if (!c) {
            let r = n.reduce((e, t) => e + t[1], "");
            e.raws[t] = { value: l, raw: r };
          }
          e[t] = l;
        }
        spacesAndCommentsFromEnd(e) {
          let t,
            n = "";
          for (; e.length && ((t = e[e.length - 1][0]), "space" === t || "comment" === t);) n = e.pop()[1] + n;
          return n;
        }
        spacesAndCommentsFromStart(e) {
          let t,
            n = "";
          for (; e.length && ((t = e[0][0]), "space" === t || "comment" === t);) n += e.shift()[1];
          return n;
        }
        spacesFromEnd(e) {
          let t,
            n = "";
          for (; e.length && ((t = e[e.length - 1][0]), "space" === t);) n = e.pop()[1] + n;
          return n;
        }
        stringFrom(e, t) {
          let n = "";
          for (let r = t; r < e.length; r++) n += e[r][1];
          return e.splice(t, e.length - t), n;
        }
        colon(e) {
          let t,
            n,
            r,
            i = 0;
          for (let [o, s] of e.entries()) {
            if (((t = s), (n = t[0]), "(" === n && (i += 1), ")" === n && (i -= 1), 0 === i && ":" === n)) {
              if (r) {
                if ("word" === r[0] && "progid" === r[1]) continue;
                return o;
              }
              this.doubleColon(t);
            }
            r = t;
          }
          return !1;
        }
        unclosedBracket(e) {
          throw this.input.error("Unclosed bracket", e[2]);
        }
        unknownWord(e) {
          throw this.input.error("Unknown word", e[0][2]);
        }
        unexpectedClose(e) {
          throw this.input.error("Unexpected }", e[2]);
        }
        unclosedBlock() {
          let e = this.current.source.start;
          throw this.input.error("Unclosed block", e.line, e.column);
        }
        doubleColon(e) {
          throw this.input.error("Double colon", e[2]);
        }
        unnamedAtrule(e, t) {
          throw this.input.error("At-rule without name", t[2]);
        }
        precheckMissedSemicolon() { }
        checkMissedSemicolon(e) {
          let t = this.colon(e);
          if (!1 === t) return;
          let n,
            r = 0;
          for (let i = t - 1; i >= 0 && ((n = e[i]), "space" === n[0] || ((r += 1), 2 !== r)); i--);
          throw this.input.error("Missed semicolon", "word" === n[0] ? n[3] + 1 : n[2]);
        }
      };
    },
    20: function (e, t, n) {
      "use strict";
      let r = n(671),
        i = n(258),
        o = n(939),
        s = n(19),
        a = n(723),
        l = n(88),
        c = n(250),
        u = n(461),
        d = n(728),
        f = n(932),
        p = n(353),
        h = n(632),
        m = n(995),
        g = n(964),
        v = n(715),
        y = n(675),
        b = n(25),
        x = n(631);
      function w(...e) {
        return 1 === e.length && Array.isArray(e[0]) && (e = e[0]), new a(e);
      }
      (w.plugin = function (e, t) {
        function n(...n) {
          let r = t(...n);
          return (r.postcssPlugin = e), (r.postcssVersion = new a().version), r;
        }
        let r;
        return (
          console &&
          console.warn &&
          (console.warn(e + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"),
            process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(e + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226")),
          Object.defineProperty(n, "postcss", { get: () => (r || (r = n()), r) }),
          (n.process = function (e, t, r) {
            return w([n(r)]).process(e, t);
          }),
          n
        );
      }),
        (w.stringify = l),
        (w.parse = g),
        (w.fromJSON = c),
        (w.list = v),
        (w.comment = (e) => new f(e)),
        (w.atRule = (e) => new p(e)),
        (w.decl = (e) => new i(e)),
        (w.rule = (e) => new y(e)),
        (w.root = (e) => new b(e)),
        (w.document = (e) => new u(e)),
        (w.CssSyntaxError = r),
        (w.Declaration = i),
        (w.Container = s),
        (w.Document = u),
        (w.Comment = f),
        (w.Warning = d),
        (w.AtRule = p),
        (w.Result = h),
        (w.Input = m),
        (w.Rule = y),
        (w.Root = b),
        (w.Node = x),
        o.registerPostcss(w),
        (e.exports = w),
        (w.default = w);
    },
    981: function (e, t, n) {
      "use strict";
      let { SourceMapConsumer: r, SourceMapGenerator: i } = n(209),
        { existsSync: o, readFileSync: s } = n(777),
        { dirname: a, join: l } = n(830);
      class c {
        constructor(e, t) {
          if (!1 === t.map) return;
          this.loadAnnotation(e), (this.inline = this.startWith(this.annotation, "data:"));
          let n = t.map ? t.map.prev : void 0,
            r = this.loadMap(t.from, n);
          !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = a(this.mapFile)), r && (this.text = r);
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new r(this.text)), this.consumerCache;
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
        }
        startWith(e, t) {
          return !!e && e.substr(0, t.length) === t;
        }
        getAnnotationURL(e) {
          return e.match(/\/\*\s*# sourceMappingURL=((?:(?!sourceMappingURL=).)*)\*\//)[1].trim();
        }
        loadAnnotation(e) {
          let t = e.match(/\/\*\s*# sourceMappingURL=(?:(?!sourceMappingURL=).)*\*\//gm);
          if (t && t.length > 0) {
            let e = t[t.length - 1];
            e && (this.annotation = this.getAnnotationURL(e));
          }
        }
        decodeInline(e) {
          if (/^data:application\/json;charset=utf-?8,/.test(e) || /^data:application\/json,/.test(e)) return decodeURIComponent(e.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(e) || /^data:application\/json;base64,/.test(e))
            return (t = e.substr(RegExp.lastMatch.length)), Buffer ? Buffer.from(t, "base64").toString() : window.atob(t);
          var t;
          let n = e.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + n);
        }
        loadFile(e) {
          if (((this.root = a(e)), o(e))) return (this.mapFile = e), s(e, "utf-8").toString().trim();
        }
        loadMap(e, t) {
          if (!1 === t) return !1;
          if (t) {
            if ("string" == typeof t) return t;
            if ("function" != typeof t) {
              if (t instanceof r) return i.fromSourceMap(t).toString();
              if (t instanceof i) return t.toString();
              if (this.isMap(t)) return JSON.stringify(t);
              throw new Error("Unsupported previous source map format: " + t.toString());
            }
            {
              let n = t(e);
              if (n) {
                let e = this.loadFile(n);
                if (!e) throw new Error("Unable to load previous source map: " + n.toString());
                return e;
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let t = this.annotation;
              return e && (t = l(a(e), t)), this.loadFile(t);
            }
          }
        }
        isMap(e) {
          return "object" == typeof e && ("string" == typeof e.mappings || "string" == typeof e._mappings || Array.isArray(e.sections));
        }
      }
      (e.exports = c), (c.default = c);
    },
    723: function (e, t, n) {
      "use strict";
      let r = n(939),
        i = n(461),
        o = n(25);
      class s {
        constructor(e = []) {
          (this.version = "8.3.8"), (this.plugins = this.normalize(e));
        }
        use(e) {
          return (this.plugins = this.plugins.concat(this.normalize([e]))), this;
        }
        process(e, t = {}) {
          return 0 !== this.plugins.length || void 0 !== t.parser || void 0 !== t.stringifier || void 0 !== t.syntax || t.hideNothingWarning, new r(this, e, t);
        }
        normalize(e) {
          let t = [];
          for (let n of e)
            if ((!0 === n.postcss ? (n = n()) : n.postcss && (n = n.postcss), "object" == typeof n && Array.isArray(n.plugins))) t = t.concat(n.plugins);
            else if ("object" == typeof n && n.postcssPlugin) t.push(n);
            else if ("function" == typeof n) t.push(n);
            else if ("object" != typeof n || (!n.parse && !n.stringify)) throw new Error(n + " is not a PostCSS plugin");
          return t;
        }
      }
      (e.exports = s), (s.default = s), o.registerProcessor(s), i.registerProcessor(s);
    },
    632: function (e, t, n) {
      "use strict";
      let r = n(728);
      class i {
        constructor(e, t, n) {
          (this.processor = e), (this.messages = []), (this.root = t), (this.opts = n), (this.css = void 0), (this.map = void 0);
        }
        toString() {
          return this.css;
        }
        warn(e, t = {}) {
          t.plugin || (this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin));
          let n = new r(e, t);
          return this.messages.push(n), n;
        }
        warnings() {
          return this.messages.filter((e) => "warning" === e.type);
        }
        get content() {
          return this.css;
        }
      }
      (e.exports = i), (i.default = i);
    },
    25: function (e, t, n) {
      "use strict";
      let r,
        i,
        o = n(19);
      class s extends o {
        constructor(e) {
          super(e), (this.type = "root"), this.nodes || (this.nodes = []);
        }
        removeChild(e, t) {
          let n = this.index(e);
          return !t && 0 === n && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(e);
        }
        normalize(e, t, n) {
          let r = super.normalize(e);
          if (t)
            if ("prepend" === n) this.nodes.length > 1 ? (t.raws.before = this.nodes[1].raws.before) : delete t.raws.before;
            else if (this.first !== t) for (let e of r) e.raws.before = t.raws.before;
          return r;
        }
        toResult(e = {}) {
          return new r(new i(), this, e).stringify();
        }
      }
      (s.registerLazyResult = (e) => {
        r = e;
      }),
        (s.registerProcessor = (e) => {
          i = e;
        }),
        (e.exports = s),
        (s.default = s);
    },
    675: function (e, t, n) {
      "use strict";
      let r = n(19),
        i = n(715);
      class o extends r {
        constructor(e) {
          super(e), (this.type = "rule"), this.nodes || (this.nodes = []);
        }
        get selectors() {
          return i.comma(this.selector);
        }
        set selectors(e) {
          let t = this.selector ? this.selector.match(/,\s*/) : null,
            n = t ? t[0] : "," + this.raw("between", "beforeOpen");
          this.selector = e.join(n);
        }
      }
      (e.exports = o), (o.default = o), r.registerRule(o);
    },
    62: function (e) {
      "use strict";
      const t = { colon: ": ", indent: "    ", beforeDecl: "\n", beforeRule: "\n", beforeOpen: " ", beforeClose: "\n", beforeComment: "\n", after: "\n", emptyBody: "", commentLeft: " ", commentRight: " ", semicolon: !1 };
      e.exports = class {
        constructor(e) {
          this.builder = e;
        }
        stringify(e, t) {
          if (!this[e.type]) throw new Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
          this[e.type](e, t);
        }
        document(e) {
          this.body(e);
        }
        root(e) {
          this.body(e), e.raws.after && this.builder(e.raws.after);
        }
        comment(e) {
          let t = this.raw(e, "left", "commentLeft"),
            n = this.raw(e, "right", "commentRight");
          this.builder("/*" + t + e.text + n + "*/", e);
        }
        decl(e, t) {
          let n = this.raw(e, "between", "colon"),
            r = e.prop + n + this.rawValue(e, "value");
          e.important && (r += e.raws.important || " !important"), t && (r += ";"), this.builder(r, e);
        }
        rule(e) {
          this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
        }
        atrule(e, t) {
          let n = "@" + e.name,
            r = e.params ? this.rawValue(e, "params") : "";
          if ((void 0 !== e.raws.afterName ? (n += e.raws.afterName) : r && (n += " "), e.nodes)) this.block(e, n + r);
          else {
            let i = (e.raws.between || "") + (t ? ";" : "");
            this.builder(n + r + i, e);
          }
        }
        body(e) {
          let t = e.nodes.length - 1;
          for (; t > 0 && "comment" === e.nodes[t].type;) t -= 1;
          let n = this.raw(e, "semicolon");
          for (let r = 0; r < e.nodes.length; r++) {
            let i = e.nodes[r],
              o = this.raw(i, "before");
            o && this.builder(o), this.stringify(i, t !== r || n);
          }
        }
        block(e, t) {
          let n,
            r = this.raw(e, "between", "beforeOpen");
          this.builder(t + r + "{", e, "start"), e.nodes && e.nodes.length ? (this.body(e), (n = this.raw(e, "after"))) : (n = this.raw(e, "after", "emptyBody")), n && this.builder(n), this.builder("}", e, "end");
        }
        raw(e, n, r) {
          let i;
          if ((r || (r = n), n && ((i = e.raws[n]), void 0 !== i))) return i;
          let o = e.parent;
          if ("before" === r) {
            if (!o || ("root" === o.type && o.first === e)) return "";
            if (o && "document" === o.type) return "";
          }
          if (!o) return t[r];
          let s = e.root();
          if ((s.rawCache || (s.rawCache = {}), void 0 !== s.rawCache[r])) return s.rawCache[r];
          if ("before" === r || "after" === r) return this.beforeAfter(e, r);
          {
            let t = "raw" + ((a = r)[0].toUpperCase() + a.slice(1));
            this[t]
              ? (i = this[t](s, e))
              : s.walk((e) => {
                if (((i = e.raws[n]), void 0 !== i)) return !1;
              });
          }
          var a;
          return void 0 === i && (i = t[r]), (s.rawCache[r] = i), i;
        }
        rawSemicolon(e) {
          let t;
          return (
            e.walk((e) => {
              if (e.nodes && e.nodes.length && "decl" === e.last.type && ((t = e.raws.semicolon), void 0 !== t)) return !1;
            }),
            t
          );
        }
        rawEmptyBody(e) {
          let t;
          return (
            e.walk((e) => {
              if (e.nodes && 0 === e.nodes.length && ((t = e.raws.after), void 0 !== t)) return !1;
            }),
            t
          );
        }
        rawIndent(e) {
          if (e.raws.indent) return e.raws.indent;
          let t;
          return (
            e.walk((n) => {
              let r = n.parent;
              if (r && r !== e && r.parent && r.parent === e && void 0 !== n.raws.before) {
                let e = n.raws.before.split("\n");
                return (t = e[e.length - 1]), (t = t.replace(/\S/g, "")), !1;
              }
            }),
            t
          );
        }
        rawBeforeComment(e, t) {
          let n;
          return (
            e.walkComments((e) => {
              if (void 0 !== e.raws.before) return (n = e.raws.before), n.includes("\n") && (n = n.replace(/[^\n]+$/, "")), !1;
            }),
            void 0 === n ? (n = this.raw(t, null, "beforeDecl")) : n && (n = n.replace(/\S/g, "")),
            n
          );
        }
        rawBeforeDecl(e, t) {
          let n;
          return (
            e.walkDecls((e) => {
              if (void 0 !== e.raws.before) return (n = e.raws.before), n.includes("\n") && (n = n.replace(/[^\n]+$/, "")), !1;
            }),
            void 0 === n ? (n = this.raw(t, null, "beforeRule")) : n && (n = n.replace(/\S/g, "")),
            n
          );
        }
        rawBeforeRule(e) {
          let t;
          return (
            e.walk((n) => {
              if (n.nodes && (n.parent !== e || e.first !== n) && void 0 !== n.raws.before) return (t = n.raws.before), t.includes("\n") && (t = t.replace(/[^\n]+$/, "")), !1;
            }),
            t && (t = t.replace(/\S/g, "")),
            t
          );
        }
        rawBeforeClose(e) {
          let t;
          return (
            e.walk((e) => {
              if (e.nodes && e.nodes.length > 0 && void 0 !== e.raws.after) return (t = e.raws.after), t.includes("\n") && (t = t.replace(/[^\n]+$/, "")), !1;
            }),
            t && (t = t.replace(/\S/g, "")),
            t
          );
        }
        rawBeforeOpen(e) {
          let t;
          return (
            e.walk((e) => {
              if ("decl" !== e.type && ((t = e.raws.between), void 0 !== t)) return !1;
            }),
            t
          );
        }
        rawColon(e) {
          let t;
          return (
            e.walkDecls((e) => {
              if (void 0 !== e.raws.between) return (t = e.raws.between.replace(/[^\s:]/g, "")), !1;
            }),
            t
          );
        }
        beforeAfter(e, t) {
          let n;
          n = "decl" === e.type ? this.raw(e, null, "beforeDecl") : "comment" === e.type ? this.raw(e, null, "beforeComment") : "before" === t ? this.raw(e, null, "beforeRule") : this.raw(e, null, "beforeClose");
          let r = e.parent,
            i = 0;
          for (; r && "root" !== r.type;) (i += 1), (r = r.parent);
          if (n.includes("\n")) {
            let t = this.raw(e, null, "indent");
            if (t.length) for (let e = 0; e < i; e++) n += t;
          }
          return n;
        }
        rawValue(e, t) {
          let n = e[t],
            r = e.raws[t];
          return r && r.value === n ? r.raw : n;
        }
      };
    },
    88: function (e, t, n) {
      "use strict";
      let r = n(62);
      function i(e, t) {
        new r(t).stringify(e);
      }
      (e.exports = i), (i.default = i);
    },
    513: function (e) {
      "use strict";
      (e.exports.isClean = Symbol("isClean")), (e.exports.my = Symbol("my"));
    },
    852: function (e) {
      "use strict";
      const t = "'".charCodeAt(0),
        n = '"'.charCodeAt(0),
        r = "\\".charCodeAt(0),
        i = "/".charCodeAt(0),
        o = "\n".charCodeAt(0),
        s = " ".charCodeAt(0),
        a = "\f".charCodeAt(0),
        l = "\t".charCodeAt(0),
        c = "\r".charCodeAt(0),
        u = "[".charCodeAt(0),
        d = "]".charCodeAt(0),
        f = "(".charCodeAt(0),
        p = ")".charCodeAt(0),
        h = "{".charCodeAt(0),
        m = "}".charCodeAt(0),
        g = ";".charCodeAt(0),
        v = "*".charCodeAt(0),
        y = ":".charCodeAt(0),
        b = "@".charCodeAt(0),
        x = /[\t\n\f\r "#'()/;[\\\]{}]/g,
        w = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
        _ = /.[\n"'(/\\]/,
        S = /[\da-f]/i;
      e.exports = function (e, T = {}) {
        let C,
          k,
          A,
          E,
          L,
          D,
          O,
          M,
          P,
          R,
          q = e.css.valueOf(),
          j = T.ignoreErrors,
          N = q.length,
          I = 0,
          B = [],
          H = [];
        function F(t) {
          throw e.error("Unclosed " + t, I);
        }
        return {
          back: function (e) {
            H.push(e);
          },
          nextToken: function (e) {
            if (H.length) return H.pop();
            if (I >= N) return;
            let T = !!e && e.ignoreUnclosed;
            switch (((C = q.charCodeAt(I)), C)) {
              case o:
              case s:
              case l:
              case c:
              case a:
                k = I;
                do {
                  (k += 1), (C = q.charCodeAt(k));
                } while (C === s || C === o || C === l || C === c || C === a);
                (R = ["space", q.slice(I, k)]), (I = k - 1);
                break;
              case u:
              case d:
              case h:
              case m:
              case y:
              case g:
              case p: {
                let e = String.fromCharCode(C);
                R = [e, e, I];
                break;
              }
              case f:
                if (((M = B.length ? B.pop()[1] : ""), (P = q.charCodeAt(I + 1)), "url" === M && P !== t && P !== n && P !== s && P !== o && P !== l && P !== a && P !== c)) {
                  k = I;
                  do {
                    if (((D = !1), (k = q.indexOf(")", k + 1)), -1 === k)) {
                      if (j || T) {
                        k = I;
                        break;
                      }
                      F("bracket");
                    }
                    for (O = k; q.charCodeAt(O - 1) === r;) (O -= 1), (D = !D);
                  } while (D);
                  (R = ["brackets", q.slice(I, k + 1), I, k]), (I = k);
                } else (k = q.indexOf(")", I + 1)), (E = q.slice(I, k + 1)), -1 === k || _.test(E) ? (R = ["(", "(", I]) : ((R = ["brackets", E, I, k]), (I = k));
                break;
              case t:
              case n:
                (A = C === t ? "'" : '"'), (k = I);
                do {
                  if (((D = !1), (k = q.indexOf(A, k + 1)), -1 === k)) {
                    if (j || T) {
                      k = I + 1;
                      break;
                    }
                    F("string");
                  }
                  for (O = k; q.charCodeAt(O - 1) === r;) (O -= 1), (D = !D);
                } while (D);
                (R = ["string", q.slice(I, k + 1), I, k]), (I = k);
                break;
              case b:
                (x.lastIndex = I + 1), x.test(q), (k = 0 === x.lastIndex ? q.length - 1 : x.lastIndex - 2), (R = ["at-word", q.slice(I, k + 1), I, k]), (I = k);
                break;
              case r:
                for (k = I, L = !0; q.charCodeAt(k + 1) === r;) (k += 1), (L = !L);
                if (((C = q.charCodeAt(k + 1)), L && C !== i && C !== s && C !== o && C !== l && C !== c && C !== a && ((k += 1), S.test(q.charAt(k))))) {
                  for (; S.test(q.charAt(k + 1));) k += 1;
                  q.charCodeAt(k + 1) === s && (k += 1);
                }
                (R = ["word", q.slice(I, k + 1), I, k]), (I = k);
                break;
              default:
                C === i && q.charCodeAt(I + 1) === v
                  ? ((k = q.indexOf("*/", I + 2) + 1), 0 === k && (j || T ? (k = q.length) : F("comment")), (R = ["comment", q.slice(I, k + 1), I, k]), (I = k))
                  : ((w.lastIndex = I + 1), w.test(q), (k = 0 === w.lastIndex ? q.length - 1 : w.lastIndex - 2), (R = ["word", q.slice(I, k + 1), I, k]), B.push(R), (I = k));
            }
            return I++, R;
          },
          endOfFile: function () {
            return 0 === H.length && I >= N;
          },
          position: function () {
            return I;
          },
        };
      };
    },
    448: function (e) {
      "use strict";
      let t = {};
      e.exports = function (e) {
        t[e] || ((t[e] = !0), "undefined" != typeof console && console.warn && console.warn(e));
      };
    },
    728: function (e) {
      "use strict";
      class t {
        constructor(e, t = {}) {
          if (((this.type = "warning"), (this.text = e), t.node && t.node.source)) {
            let e = t.node.positionBy(t);
            (this.line = e.line), (this.column = e.column);
          }
          for (let e in t) this[e] = t[e];
        }
        toString() {
          return this.node ? this.node.error(this.text, { plugin: this.plugin, index: this.index, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
        }
      }
      (e.exports = t), (t.default = t);
    },
    868: function () { },
    777: function () { },
    830: function () { },
    209: function () { },
    414: function () { },
    961: function (e) {
      e.exports = {
        nanoid: (e = 21) => {
          let t = "",
            n = e;
          for (; n--;) t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[(64 * Math.random()) | 0];
          return t;
        },
        customAlphabet: (e, t = 21) => (n = t) => {
          let r = "",
            i = n;
          for (; i--;) r += e[(Math.random() * e.length) | 0];
          return r;
        },
      };
    },
    231: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          isColorSupported: function () {
            return i;
          },
          reset: function () {
            return o;
          },
          bold: function () {
            return s;
          },
          dim: function () {
            return a;
          },
          italic: function () {
            return l;
          },
          underline: function () {
            return c;
          },
          inverse: function () {
            return u;
          },
          hidden: function () {
            return d;
          },
          strikethrough: function () {
            return f;
          },
          black: function () {
            return p;
          },
          red: function () {
            return h;
          },
          green: function () {
            return m;
          },
          yellow: function () {
            return g;
          },
          blue: function () {
            return v;
          },
          magenta: function () {
            return y;
          },
          cyan: function () {
            return b;
          },
          white: function () {
            return x;
          },
          gray: function () {
            return w;
          },
          bgBlack: function () {
            return _;
          },
          bgRed: function () {
            return S;
          },
          bgGreen: function () {
            return T;
          },
          bgYellow: function () {
            return C;
          },
          bgBlue: function () {
            return k;
          },
          bgMagenta: function () {
            return A;
          },
          bgCyan: function () {
            return E;
          },
          bgWhite: function () {
            return L;
          },
          createColors: function () {
            return D;
          },
        });
      let r = (e) => "" + e,
        i = !1,
        o = r,
        s = r,
        a = r,
        l = r,
        c = r,
        u = r,
        d = r,
        f = r,
        p = r,
        h = r,
        m = r,
        g = r,
        v = r,
        y = r,
        b = r,
        x = r,
        w = r,
        _ = r,
        S = r,
        T = r,
        C = r,
        k = r,
        A = r,
        E = r,
        L = r;
      function D() {
        return {
          isColorSupported: i,
          reset: o,
          bold: s,
          dim: a,
          italic: l,
          underline: c,
          inverse: u,
          hidden: d,
          strikethrough: f,
          black: p,
          red: h,
          green: m,
          yellow: g,
          blue: v,
          magenta: y,
          cyan: b,
          white: x,
          gray: w,
          bgBlack: _,
          bgRed: S,
          bgGreen: T,
          bgYellow: C,
          bgBlue: k,
          bgMagenta: A,
          bgCyan: E,
          bgWhite: L,
        };
      }
    },
  },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.d = function (e, t) {
    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      "use strict";
      var e = {
        scrollSpeed: 800,
        home: { titleSpeed: 0.02, delay: 0 },
        aboutUs: { titleSpeed: 0.02, delay: 0 },
        services: { titleSpeed: 0.02, delay: 0 },
        projects: { titleSpeed: 0.02, delay: 0 },
        contact: { titleSpeed: 0.02, delay: 0 },
        blogs: { titleSpeed: 0.02, delay: 0 },
        careers: { titleSpeed: 0.02, delay: 0 },
        socialLinks: { facebook: "https://www.youtube.com/watch?v=rZQ72SFGYwk", twitter: "https://www.twitter.com", instagram: "https://www.instagram.com" },
        blogData: [
          {
            title: "Lorem ipsum 1",
            text:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis excepturi perspiciatis laborum, veniam nam earum debitis eius delectus impedit voluptatem. Ratione totam pariatur veritatis quasi officia? Rerum, architecto? Quisquam qui molestiae cupiditate assumenda totam doloribus repudiandae, minima ab",
            moreText:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n      Vitae suscipit tellus mauris a diam maecenas sed enim. Malesuada \n      nunc vel risus commodo viverra maecenas accumsan. Habitant morbi \n      tristique senectus et netus et. Duis convallis convallis tellus id \n      interdum velit. Enim nec dui nunc mattis. Porttitor eget dolor morbi \n      non arcu. Lacus vestibulum sed arcu",
          },
          {
            title: "Lorem ipsum 2",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n             Vitae suscipit tellus mauris a diam maecenas sed enim. Malesuada \n             nunc vel risus commodo viverra maecenas accumsan. Habitant morbi \n             tristique senectus et netus et. Duis convallis convallis tellus id \n             interdum velit. Enim nec dui nunc mattis. Porttitor eget dolor morbi \n             non arcu. Lacus vestibulum sed arcu",
            moreText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n             Vitae suscipit tellus mauris a diam maecenas sed enim. Malesuada \n             nunc vel risus commodo viverra maecenas accumsan. Habitant morbi \n             tristique senectus et netus et. Duis convallis convallis tellus id \n             interdum velit. Enim nec dui nunc mattis. Porttitor eget dolor morbi \n             non arcu. Lacus vestibulum sed arcu",
          },
          {
            title: "Lorem ipsum 3",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n             Vitae suscipit tellus mauris a diam maecenas sed enim. Malesuada \n             nunc vel risus commodo viverra maecenas accumsan. Habitant morbi \n             tristique senectus et netus et. Duis convallis convallis tellus id \n             interdum velit. Enim nec dui nunc mattis. Porttitor eget dolor morbi \n             non arcu. Lacus vestibulum sed arcu",
            moreText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n             Vitae suscipit tellus mauris a diam maecenas sed enim. Malesuada \n             nunc vel risus commodo viverra maecenas accumsan. Habitant morbi \n             tristique senectus et netus et. Duis convallis convallis tellus id \n             interdum velit. Enim nec dui nunc mattis. Porttitor eget dolor morbi \n             non arcu. Lacus vestibulum sed arcu",
          },
          {
            title: "Lorem ipsum4",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n             Vitae suscipit tellus mauris a diam maecenas sed enim. Malesuada \n             nunc vel risus commodo viverra maecenas accumsan. Habitant morbi \n             tristique senectus et netus et. Duis convallis convallis tellus id \n             interdum velit. Enim nec dui nunc mattis. Porttitor eget dolor morbi \n             non arcu. Lacus vestibulum sed arcu",
            moreText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n             Vitae suscipit tellus mauris a diam maecenas sed enim. Malesuada \n             nunc vel risus commodo viverra maecenas accumsan. Habitant morbi \n             tristique senectus et netus et. Duis convallis convallis tellus id \n             interdum velit. Enim nec dui nunc mattis. Porttitor eget dolor morbi \n             non arcu. Lacus vestibulum sed arcu",
          },
          {
            title: "Lorem ipsum",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n             Vitae suscipit tellus mauris a diam maecenas sed enim. Malesuada \n             nunc vel risus commodo viverra maecenas accumsan. Habitant morbi \n             tristique senectus et netus et. Duis convallis convallis tellus id \n             interdum velit. Enim nec dui nunc mattis. Porttitor eget dolor morbi \n             non arcu. Lacus vestibulum sed arcu",
            moreText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n             Vitae suscipit tellus mauris a diam maecenas sed enim. Malesuada \n             nunc vel risus commodo viverra maecenas accumsan. Habitant morbi \n             tristique senectus et netus et. Duis convallis convallis tellus id \n             interdum velit. Enim nec dui nunc mattis. Porttitor eget dolor morbi \n             non arcu. Lacus vestibulum sed arcu",
          },
          {
            title: "Lorem ipsum",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n             Vitae suscipit tellus mauris a diam maecenas sed enim. Malesuada \n             nunc vel risus commodo viverra maecenas accumsan. Habitant morbi \n             tristique senectus et netus et. Duis convallis convallis tellus id \n             interdum velit. Enim nec dui nunc mattis. Porttitor eget dolor morbi \n             non arcu. Lacus vestibulum sed arcu",
            moreText:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n             Vitae suscipit tellus mauris a diam maecenas sed enim. Malesuada \n             nunc vel risus commodo viverra maecenas accumsan. Habitant morbi \n             tristique senectus et netus et. Duis convallis convallis tellus id \n             interdum velit. Enim nec dui nunc mattis. Porttitor eget dolor morbi \n             non arcu. Lacus vestibulum sed arcu",
          },
        ],
        careersData: [
          { title: "UX Designer react", list: "<li>5 year experience +</li>\n             <li>Native English</li>\n             <li>Software: Sketch, Figma</li>\n             <li>adobe Xd</li>" },
          { title: "UX Designer angular", list: "<li>5 year experience +</li>\n             <li>Native English</li>\n             <li>Software: Sketch, Figma</li>" },
          { title: "UX Designer ", list: "<li>5 year experience +</li>\n             <li>Native English</li>\n             <li>Software: Sketch, Figma</li>" },
        ],
        aboutUsTextData:
          "We are Ozorix, a software development company. Our main goal is to create custom-\n    made, unique codes customized to the clients needs. We have a professional team with\n    all their enthusiasm and energy. They are highly qualified maximalists, experienced\n    working on various projects. People who want more than you, to fulfill your desires.\n    Besides a flexible team and working processes, our core value is attitude. Passion and\n    interest in the work we do. The 21st century is an inexhaustible source of innovative\n    opportunities that enable us to spread our wings on a larger scale and achieve the best\n    results. Our individual approach helps us to accurately perceive and understand the\n    customer requirements. Through the innovative solutions, we are able to implement\n    your desires rapidly. Each code we create goes through the world of difficulties and\n    responsibilities, which we, Ozorix, are happy to follow.",
        contactTextData: {
          mobile: "Mobile",
          mobileInit: "+(995) 599 923 601",
          mobileHref: "tel:+995599923601",
          email: "E-mail",
          emailInit: "info@ozorix.com",
          emailHref: "mailto:info@ozorix.com",
          address: "Address",
          addressInit: "14b Shalva Nutsubidze St",
        },
        customersTextData: {
          "customers-1-1": "SIEMENS",
          "customers-1-1Href": "#",
          "customers-1-2": "CITYCOM",
          "customers-1-2Href": "#",
          "customers-1-3": "TRACKSTAT",
          "customers-1-3Href": "#",
          "customers-2-1": "TREK10",
          "customers-2-1Href": "#",
          "customers-2-2": "WURTH",
          "customers-2-2Href": "#",
          "customers-2-3": "BIVLAB",
          "customers-2-3Href": "#",
          "customers-3-1": "GEOLAND",
          "customers-3-1Href": "#",
          "customers-3-2": "DSCAPE",
          "customers-3-2Href": "#",
          "customers-3-3": "INTRANOTE",
          "customers-3-3Href": "#",
          "customers-4-1": "BLOCKCHAIN SYSTEMS",
          "customers-4-1Href": "#",
        },
        ProjectTextData: [
          { index: "01", href: "#", name: "CityCom IoT (Georgia)", description: "Building automation and security system", tech: "Arduino/RaspberryPi/RFID, AWS IoT, NodeJS, MySQL" },
          { index: "02", href: "google.com", name: "CityCom Big Data (Georgia)", description: "Business intelligence and data warehousing", tech: "AWS Kinesis, Apache Spark, Apache Hive" },
          {
            index: "03",
            href: "#",
            name: "TrackStat (USA) ",
            description: "Electronic patient record management, CRM, messaging, Scheduling and business intelligence.",
            tech: "AWS Serverless API, NodeJS, .NEt/C#, MS SQL Server, Angular",
          },
          { index: "04", href: "#", name: "MyGeorgia (Georgia)", description: "GIS System", tech: "Geoserver, OpenLayers, PostGIS, MapBox Vector Tiles, AWS" },
          { index: "05", href: "#", name: "CloserConnect (USA) ", description: "", tech: "AWS, MongoDB, NodeJS, ExpressJS, Angular" },
          { index: "06", href: "#", name: "Wurth (Germany)", description: "", tech: ".NET/C#, ThreeJS" },
          {
            index: "07",
            href: "#",
            name: "Siemens SpecWriter Online (USA)",
            description: "Online tool to assist engineers in the process of building a fire safety and building automation systems",
            tech: "AWS, MongoDB, NodeJS, ExpressJS, Angular",
          },
          {
            index: "08",
            href: "#",
            name: "Siemens System Builder (USA)",
            description:
              "Online tool to assist engineers in the process of building\n      a fire safety and building automation\n      systems equipment list and associated basic power  calculations\n      for estimating and quoting new projects.",
            tech: "AWS, MongoDB, NodeJS,ExpressJS, Angular",
          },
          { index: "09", href: "#", name: "rek10 (USA)", description: "Feedback/Case management system", tech: "AWS, NodeJS, React" },
          { index: "10", href: "#", name: "Trek10 KAR EDMM (USA)", description: "Medical imaging storage and  processing system", tech: "AWS S3, AS Lambda, DynamoDB" },
          { index: "11", href: "#", name: "DocuNote (Denmark)", description: "Document management system", tech: ".NET, MS SQL Server" },
          { index: "12", href: "#", name: "DocuLedge (Georgia)", description: "Document verification application based on Blockchain smartcontracts technologies", tech: "IBM Hyperledger, Node.js, AWS S3" },
          { index: "13", href: "#", name: "BivLab GPS (Thailand)", description: "GPS Tracking system to collect data from vehicles and display on GIS dashboard", tech: "MapBox, OpenLayers, AWS IoT, Kinesis, DynamoDB, Grafana" },
          {
            index: "14",
            href: "#",
            name: "BivLab IoT (Thailand)",
            description:
              "Collect data from IoT sensors on natural gas and oil\n      production sites, run collected data through physical\n      models and provide feedback to remote devices to\n      adjust their operational parameters.",
            tech: "AWS IoT, Kinesis, MQTT, AWS Lambda, C++, Matlab",
          },
        ],
        servicesTextData: {
          "services-1-1__title": "Data Science",
          "services-1-1__ul": "\n      <li> Data analytics; </li>\n      <li> Business intelligence; </li>\n      <li> Machine learning; </li>\n      <li> Deep learning. </li>",
          "services-1-2__title": "AWS Solutions",
          "services-1-2__ul": "\n      <li> AWS Migration; </li>\n      <li> Cloud architecture design; </li>\n      <li> Serverless solutions. </li>",
          "services-1-3__title": "Quality Assurance",
          "services-1-3__ul": "\n      <li> Quality Control Consulting; </li>\n      <li> Functional, Performance,\n      <br> Load/Stress Testing. </li>",
          "services-2-1__title": "Enterprise Software <br> </b> Development",
          "services-2-1__ul": "\n      <li>Design and development web\n      <br> based/mobile business solutions;</li>\n      </br>  <li>On platforms: NET, NodeJS,\n      Java/Scala/Grails.</li>",
          "services-2-2__title": "GIS Systems",
          "services-2-2__ul": '\n      <li style="margin-top:55px;">Design and development of GIS\n      <br> backend and frontend solutions;</li>\n      <li>On platforms: OpenLayers, Leaflet.</li>',
          "services-2-3__title": "GIS Systems",
          "services-2-3__ul": '\n      <li style="margin-top:55px;">Data warehousing;</li>\n      <li>Big data processing.</span></li>',
          "services-3-1__title": "Teach Leading and <br> Consulting",
          "services-3-1__ul": "\n      <li>Consulting;</li>\n      <li>Architecture design;</li>\n      <li>Audit existing technical solutions;</li>\n      <li>Mentoring.</li>",
          "services-3-2__title": "IoT Solutions",
          "services-3-2__title1": "Blockchain Solutions",
        },
      };
      (document.querySelector(".aboutUs__text").innerHTML = e.aboutUsTextData),
        [
          { class: ".contact__mobile", config: "mobile" },
          { class: ".contact__phone", config: "mobileInit", href: "mobileHref" },
          { class: ".contact-address__title", config: "address" },
          { class: ".contact-address__Initials", config: "addressInit" },
          { class: ".contact__email", config: "email" },
          { class: ".contact-email__initial", config: "emailInit", href: "emailHref" },
        ].map(function (t) {
          (document.querySelector(t.class).innerHTML = e.contactTextData[t.config]), t.href && t.href && document.querySelector(t.class).setAttribute("href", e.contactTextData[t.href]);
        }),
        [
          { name: "customers-1-1", href: "customers-1-1Href" },
          { name: "customers-1-2", href: "customers-1-2Href" },
          { name: "customers-1-3", href: "customers-1-3Href" },
          { name: "customers-2-1", href: "customers-2-1Href" },
          { name: "customers-2-2", href: "customers-2-2Href" },
          { name: "customers-2-3", href: "customers-2-3Href" },
          { name: "customers-3-1", href: "customers-3-1Href" },
          { name: "customers-3-2", href: "customers-3-2Href" },
          { name: "customers-3-3", href: "customers-3-3Href" },
          { name: "customers-4-1", href: "customers-4-1Href" },
        ].map(function (t) {
          (document.querySelector("." + t.name).innerHTML = e.customersTextData[t.name]), document.querySelector("." + t.name).setAttribute("href", e.customersTextData[t.href]);
        }),
        [
          { title: "services-1-1__title", ul: "services-1-1__ul" },
          { title: "services-1-2__title", ul: "services-1-2__ul" },
          { title: "services-1-3__title", ul: "services-1-3__ul" },
          { title: "services-2-1__title", ul: "services-2-1__ul" },
          { title: "services-2-2__title", ul: "services-2-2__ul" },
          { title: "services-2-3__title", ul: "services-2-3__ul" },
          { title: "services-3-1__title", ul: "services-3-1__ul" },
          { title: "services-3-2__title" },
          { title: "services-3-2__title1" },
        ].map(function (t) {
          (document.querySelector("." + t.title).innerHTML = e.servicesTextData[t.title]), t.ul && (document.querySelector("." + t.ul).innerHTML = e.servicesTextData[t.ul]);
        });
      var t = document.querySelector(".swiper-wrapper"),
        r = document.querySelector(".swiper__mobile");
      e.ProjectTextData.forEach(function (e) {
        var n = document.createElement("div"),
          i = document.createElement("li"),
          o = document.createElement("img"),
          s = document.createElement("img"),
          a = document.createElement("a"),
          l = document.createElement("div"),
          c = document.createElement("p"),
          u = document.createElement("h4"),
          d = document.createElement("p"),
          f = document.createElement("p");
        i.appendChild(n),
          t.appendChild(i),
          n.appendChild(c),
          n.appendChild(u),
          n.appendChild(d),
          n.appendChild(f),
          n.appendChild(s),
          n.appendChild(a),
          n.appendChild(o),
          l.appendChild(s),
          l.appendChild(a),
          l.appendChild(o),
          n.appendChild(l),
          (c.innerText = e.index),
          (u.innerText = e.name),
          (d.innerText = e.description),
          (f.innerText = e.tech),
          (a.innerText = "Visit Website"),
          a.setAttribute("href", e.href),
          i.classList.add("swiper-slide"),
          f.classList.add("footer"),
          c.classList.add("index"),
          l.classList.add("visit__website"),
          (s.src = "./assets/Projects/projectLeftBracket.svg"),
          (o.src = "./assets/Projects/projectRightBracket.svg");
        var p = document.createElement("li"),
          h = document.createElement("div"),
          m = document.createElement("img"),
          g = document.createElement("img"),
          v = document.createElement("a"),
          y = document.createElement("div"),
          b = document.createElement("h4"),
          x = document.createElement("h4"),
          w = document.createElement("span"),
          _ = document.createElement("p"),
          S = document.createElement("p");
        p.appendChild(h),
          r.appendChild(p),
          h.appendChild(b),
          h.appendChild(x),
          h.appendChild(w),
          h.appendChild(_),
          h.appendChild(S),
          h.appendChild(g),
          h.appendChild(v),
          h.appendChild(m),
          y.appendChild(g),
          y.appendChild(v),
          y.appendChild(m),
          h.appendChild(y),
          (b.innerText = e.name),
          (w.innerText = e.header_span),
          (_.innerText = e.description),
          (S.innerText = e.tech),
          (v.innerText = "Visit Website"),
          v.setAttribute("href", e.href),
          p.classList.add("swiper-slide"),
          S.classList.add("footer"),
          y.classList.add("visit__website"),
          (g.src = "./assets/Projects/projectLeftBracket.svg"),
          (m.src = "./assets/Projects/projectRightBracket.svg");
      }),
        document.querySelector(".facebook").setAttribute("href", e.socialLinks.facebook),
        document.querySelector(".twitter").setAttribute("href", e.socialLinks.twitter),
        document.querySelector(".instagram").setAttribute("href", e.socialLinks.instagram);
      var i = document.querySelector(".blogsArea");
      e.blogData.forEach(function (e) {
        var t = document.createElement("div");
        t.classList.add("blogDiv");
        var n = document.createElement("p");
        n.classList.add("title"), (n.innerHTML = e.title);
        var r = document.createElement("p");
        r.classList.add("blog"), (r.innerHTML = e.text);
        var o = document.createElement("span");
        o.classList.add("dots"), (o.innerHTML = "..."), r.appendChild(o);
        var s = document.createElement("span");
        s.classList.add("moreText"), (s.innerHTML = e.moreText), r.appendChild(s);
        var a = document.createElement("div");
        a.classList.add("buttonDiv");
        var l = document.createElement("img");
        l.classList.add("buttonLeftBracket"), (l.src = "./assets/shared/buttonBracketLeft.svg");
        var c = document.createElement("button");
        c.classList.add("blogBtn"), (c.innerHTML = "Read more");
        var u = document.createElement("img");
        u.classList.add("buttonRightBracket"), (u.src = "./assets/shared/buttonBracketRight.svg"), a.appendChild(l), a.appendChild(c), a.appendChild(u), t.appendChild(n), t.appendChild(r), t.appendChild(a), i.appendChild(t);
      });
      var o = e.careersData,
        s = document.querySelector(".careersArea");
      function a(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function l(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
      }
      o.forEach(function (e) {
        var t = document.createElement("div");
        t.classList.add("message"), t.classList.add("nonDisplay");
        var n = document.createElement("p");
        (n.innerHTML = "Succesfuly sent!"), t.appendChild(n);
        var r = document.createElement("div");
        r.classList.add("listDiv");
        var i = document.createElement("div"),
          o = document.createElement("p");
        o.classList.add("title"), (o.innerHTML = e.title), i.appendChild(o);
        var a = document.createElement("div");
        a.innerHTML = e.list;
        var l = document.createElement("div"),
          c = document.createElement("div");
        c.classList.add("buttonDiv");
        var u = document.createElement("img");
        (u.src = "./assets/shared/buttonBracketLeft.svg"), u.classList.add("buttonLeftBracket");
        var d = document.createElement("button");
        d.classList.add("careerBtn"), (d.innerHTML = "Send resume");
        var f = document.createElement("img");
        (f.src = "./assets/shared/buttonBracketRight.svg"), f.classList.add("buttonRightBracket"), c.appendChild(u), c.appendChild(d), c.appendChild(f), l.appendChild(c), r.appendChild(i), r.appendChild(a), r.appendChild(l);
        var p = document.createElement("div");
        p.classList.add("resumeDiv"), p.classList.add("nonDisplay");
        var h = document.createElement("div");
        h.classList.add("fileDiv");
        var m = document.createElement("p");
        m.classList.add("dragFileHere"), (m.innerHTML = "Drag file here"), h.appendChild(m);
        var g = document.createElement("div");
        g.classList.add("mailDiv");
        var v = document.createElement("input");
        v.classList.add("mailInput"), (v.placeholder = "Mail"), g.appendChild(v);
        var y = document.createElement("div");
        y.classList.add("buttonParent");
        var b = document.createElement("div");
        b.classList.add("buttonDiv");
        var x = document.createElement("img");
        (x.src = "./assets/shared/buttonBracketLeft.svg"), x.classList.add("buttonLeftBracket");
        var w = document.createElement("button");
        w.classList.add("sendResumeBtn"), (w.innerHTML = "Send resume");
        var _ = document.createElement("img");
        (_.src = "./assets/shared/buttonBracketRight.svg"), _.classList.add("buttonRightBracket"), b.appendChild(x), b.appendChild(w), b.appendChild(_);
        var S = document.createElement("div");
        S.classList.add("buttonDiv");
        var T = document.createElement("img");
        (T.src = "./assets/shared/buttonBracketLeft.svg"), T.classList.add("buttonLeftBracket");
        var C = document.createElement("button");
        C.classList.add("backButton"), (C.innerHTML = "back");
        var k = document.createElement("img");
        (k.src = "./assets/shared/buttonBracketRight.svg"),
          k.classList.add("buttonRightBracket"),
          S.appendChild(T),
          S.appendChild(C),
          S.appendChild(k),
          y.appendChild(b),
          y.appendChild(S),
          p.appendChild(h),
          p.appendChild(g),
          p.appendChild(y);
        var A = document.createElement("form");
        A.classList.add("careerDiv");
        var E = document.createElement("div");
        E.classList.add("dragInputDiv");
        var L = document.createElement("input");
        (L.type = "file"), L.classList.add("dragInput"), E.appendChild(L);
        var D = document.createElement("div");
        D.classList.add("forOpacity"), A.appendChild(D), A.appendChild(E), A.appendChild(t), A.appendChild(r), A.appendChild(p), s.appendChild(A);
      });
      var c,
        u,
        d,
        f,
        p,
        h,
        m,
        g,
        v,
        y,
        b,
        x,
        w,
        _,
        S,
        T,
        C,
        k,
        A,
        E,
        L,
        D,
        O,
        M,
        P,
        R,
        q,
        j,
        N = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
        I = { duration: 0.5, overwrite: !1, delay: 0 },
        B = 1e8,
        H = 1e-8,
        F = 2 * Math.PI,
        z = F / 4,
        U = 0,
        W = Math.sqrt,
        V = Math.cos,
        X = Math.sin,
        Y = function (e) {
          return "string" == typeof e;
        },
        G = function (e) {
          return "function" == typeof e;
        },
        J = function (e) {
          return "number" == typeof e;
        },
        Q = function (e) {
          return void 0 === e;
        },
        K = function (e) {
          return "object" == typeof e;
        },
        Z = function (e) {
          return !1 !== e;
        },
        ee = function () {
          return "undefined" != typeof window;
        },
        te = function (e) {
          return G(e) || Y(e);
        },
        ne = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () { },
        re = Array.isArray,
        ie = /(?:-?\.?\d|\.)+/gi,
        oe = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        se = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        ae = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        le = /[+-]=-?[.\d]+/,
        ce = /[^,'"\[\]\s]+/gi,
        ue = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        de = {},
        fe = {},
        pe = function (e) {
          return (fe = Be(e, de)) && kn;
        },
        he = function (e, t) {
          return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
        },
        me = function (e, t) {
          return !t && console.warn(e);
        },
        ge = function (e, t) {
          return (e && (de[e] = t) && fe && (fe[e] = t)) || de;
        },
        ve = function () {
          return 0;
        },
        ye = {},
        be = [],
        xe = {},
        we = {},
        _e = {},
        Se = 30,
        Te = [],
        Ce = "",
        ke = function (e) {
          var t,
            n,
            r = e[0];
          if ((K(r) || G(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
            for (n = Te.length; n-- && !Te[n].targetTest(r););
            t = Te[n];
          }
          for (n = e.length; n--;) (e[n] && (e[n]._gsap || (e[n]._gsap = new Jt(e[n], t)))) || e.splice(n, 1);
          return e;
        },
        Ae = function (e) {
          return e._gsap || ke(mt(e))[0]._gsap;
        },
        Ee = function (e, t, n) {
          return (n = e[t]) && G(n) ? e[t]() : (Q(n) && e.getAttribute && e.getAttribute(t)) || n;
        },
        Le = function (e, t) {
          return (e = e.split(",")).forEach(t) || e;
        },
        De = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        Oe = function (e) {
          return Math.round(1e7 * e) / 1e7 || 0;
        },
        Me = function (e, t) {
          for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
          return r < n;
        },
        Pe = function () {
          var e,
            t,
            n = be.length,
            r = be.slice(0);
          for (xe = {}, be.length = 0, e = 0; e < n; e++) (t = r[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
        },
        Re = function (e, t, n, r) {
          be.length && Pe(), e.render(t, n, r), be.length && Pe();
        },
        qe = function (e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(ce).length < 2 ? t : Y(e) ? e.trim() : e;
        },
        je = function (e) {
          return e;
        },
        Ne = function (e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e;
        },
        Ie = function (e, t) {
          for (var n in t) n in e || "duration" === n || "ease" === n || (e[n] = t[n]);
        },
        Be = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        He = function e(t, n) {
          for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = K(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
          return t;
        },
        Fe = function (e, t) {
          var n,
            r = {};
          for (n in e) n in t || (r[n] = e[n]);
          return r;
        },
        ze = function (e) {
          var t = e.parent || u,
            n = e.keyframes ? Ie : Ne;
          if (Z(e.inherit)) for (; t;) n(e, t.vars.defaults), (t = t.parent || t._dp);
          return e;
        },
        Ue = function (e, t, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var i = t._prev,
            o = t._next;
          i ? (i._next = o) : e[n] === t && (e[n] = o), o ? (o._prev = i) : e[r] === t && (e[r] = i), (t._next = t._prev = t.parent = null);
        },
        We = function (e, t) {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e), (e._act = 0);
        },
        $e = function (e, t) {
          if (e && (!t || t._end > e._dur || t._start < 0)) for (var n = e; n;) (n._dirty = 1), (n = n.parent);
          return e;
        },
        Ve = function (e) {
          for (var t = e.parent; t && t.parent;) (t._dirty = 1), t.totalDuration(), (t = t.parent);
          return e;
        },
        Xe = function e(t) {
          return !t || (t._ts && e(t.parent));
        },
        Ye = function (e) {
          return e._repeat ? Ge(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
        },
        Ge = function (e, t) {
          var n = Math.floor((e /= t));
          return e && n === e ? n - 1 : n;
        },
        Je = function (e, t) {
          return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
        },
        Qe = function (e) {
          return (e._end = Oe(e._start + (e._tDur / Math.abs(e._ts || e._rts || H) || 0)));
        },
        Ke = function (e, t) {
          var n = e._dp;
          return n && n.smoothChildTiming && e._ts && ((e._start = Oe(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts))), Qe(e), n._dirty || $e(n, e)), e;
        },
        Ze = function (e, t) {
          var n;
          if (((t._time || (t._initted && !t._dur)) && ((n = Je(e.rawTime(), t)), (!t._dur || dt(0, t.totalDuration(), n) - t._tTime > H) && t.render(n, !0)), $e(e, t)._dp && e._initted && e._time >= e._dur && e._ts)) {
            if (e._dur < e.duration()) for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            e._zTime = -1e-8;
          }
        },
        et = function (e, t, n, r) {
          return (
            t.parent && We(t),
            (t._start = Oe((J(n) ? n : n || e !== u ? lt(e, n, t) : e._time) + t._delay)),
            (t._end = Oe(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0))),
            (function (e, t, n, r, i) {
              void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
              var o,
                s = e[r];
              if (i) for (o = t[i]; s && s[i] > o;) s = s._prev;
              s ? ((t._next = s._next), (s._next = t)) : ((t._next = e[n]), (e[n] = t)), t._next ? (t._next._prev = t) : (e[r] = t), (t._prev = s), (t.parent = t._dp = e);
            })(e, t, "_first", "_last", e._sort ? "_start" : 0),
            it(t) || (e._recent = t),
            r || Ze(e, t),
            e
          );
        },
        tt = function (e, t) {
          return (de.ScrollTrigger || he("scrollTrigger", t)) && de.ScrollTrigger.create(t, e);
        },
        nt = function (e, t, n, r) {
          return rn(e, t), e._initted ? (!n && e._pt && ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) && m !== Nt.frame ? (be.push(e), (e._lazy = [t, r]), 1) : void 0) : 1;
        },
        rt = function e(t) {
          var n = t.parent;
          return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
        },
        it = function (e) {
          var t = e.data;
          return "isFromStart" === t || "isStart" === t;
        },
        ot = function (e, t, n, r) {
          var i = e._repeat,
            o = Oe(t) || 0,
            s = e._tTime / e._tDur;
          return s && !r && (e._time *= o / e._dur), (e._dur = o), (e._tDur = i ? (i < 0 ? 1e10 : Oe(o * (i + 1) + e._rDelay * i)) : o), s && !r ? Ke(e, (e._tTime = e._tDur * s)) : e.parent && Qe(e), n || $e(e.parent, e), e;
        },
        st = function (e) {
          return e instanceof Kt ? $e(e) : ot(e, e._dur);
        },
        at = { _start: 0, endTime: ve, totalDuration: ve },
        lt = function e(t, n, r) {
          var i,
            o,
            s,
            a = t.labels,
            l = t._recent || at,
            c = t.duration() >= B ? l.endTime(!1) : t._dur;
          return Y(n) && (isNaN(n) || n in a)
            ? ((o = n.charAt(0)),
              (s = "%" === n.substr(-1)),
              (i = n.indexOf("=")),
              "<" === o || ">" === o
                ? (i >= 0 && (n = n.replace(/=/, "")), ("<" === o ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (i < 0 ? l : r).totalDuration() / 100 : 1))
                : i < 0
                  ? (n in a || (a[n] = c), a[n])
                  : ((o = parseFloat(n.charAt(i - 1) + n.substr(i + 1))), s && r && (o = (o / 100) * (re(r) ? r[0] : r).totalDuration()), i > 1 ? e(t, n.substr(0, i - 1), r) + o : c + o))
            : null == n
              ? c
              : +n;
        },
        ct = function (e, t, n) {
          var r,
            i,
            o = J(t[1]),
            s = (o ? 2 : 1) + (e < 2 ? 0 : 1),
            a = t[s];
          if ((o && (a.duration = t[1]), (a.parent = n), e)) {
            for (r = a, i = n; i && !("immediateRender" in r);) (r = i.vars.defaults || {}), (i = Z(i.vars.inherit) && i.parent);
            (a.immediateRender = Z(r.immediateRender)), e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
          }
          return new ln(t[0], a, t[s + 1]);
        },
        ut = function (e, t) {
          return e || 0 === e ? t(e) : t;
        },
        dt = function (e, t, n) {
          return n < e ? e : n > t ? t : n;
        },
        ft = function (e) {
          if ("string" != typeof e) return "";
          var t = ue.exec(e);
          return t ? e.substr(t.index + t[0].length) : "";
        },
        pt = [].slice,
        ht = function (e, t) {
          return e && K(e) && "length" in e && ((!t && !e.length) || (e.length - 1 in e && K(e[0]))) && !e.nodeType && e !== d;
        },
        mt = function (e, t, n) {
          return !Y(e) || n || (!f && It())
            ? re(e)
              ? (function (e, t, n) {
                return (
                  void 0 === n && (n = []),
                  e.forEach(function (e) {
                    var r;
                    return (Y(e) && !t) || ht(e, 1) ? (r = n).push.apply(r, mt(e)) : n.push(e);
                  }) || n
                );
              })(e, n)
              : ht(e)
                ? pt.call(e, 0)
                : e
                  ? [e]
                  : []
            : pt.call((t || p).querySelectorAll(e), 0);
        },
        gt = function (e) {
          return e.sort(function () {
            return 0.5 - Math.random();
          });
        },
        vt = function (e) {
          if (G(e)) return e;
          var t = K(e) ? e : { each: e },
            n = $t(t.ease),
            r = t.from || 0,
            i = parseFloat(t.base) || 0,
            o = {},
            s = r > 0 && r < 1,
            a = isNaN(r) || s,
            l = t.axis,
            c = r,
            u = r;
          return (
            Y(r) ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0) : !s && a && ((c = r[0]), (u = r[1])),
            function (e, s, d) {
              var f,
                p,
                h,
                m,
                g,
                v,
                y,
                b,
                x,
                w = (d || t).length,
                _ = o[w];
              if (!_) {
                if (!(x = "auto" === t.grid ? 0 : (t.grid || [1, B])[1])) {
                  for (y = -B; y < (y = d[x++].getBoundingClientRect().left) && x < w;);
                  x--;
                }
                for (_ = o[w] = [], f = a ? Math.min(x, w) * c - 0.5 : r % x, p = a ? (w * u) / x - 0.5 : (r / x) | 0, y = 0, b = B, v = 0; v < w; v++)
                  (h = (v % x) - f), (m = p - ((v / x) | 0)), (_[v] = g = l ? Math.abs("y" === l ? m : h) : W(h * h + m * m)), g > y && (y = g), g < b && (b = g);
                "random" === r && gt(_),
                  (_.max = y - b),
                  (_.min = b),
                  (_.v = w = (parseFloat(t.amount) || parseFloat(t.each) * (x > w ? w - 1 : l ? ("y" === l ? w / x : x) : Math.max(x, w / x)) || 0) * ("edges" === r ? -1 : 1)),
                  (_.b = w < 0 ? i - w : i),
                  (_.u = ft(t.amount || t.each) || 0),
                  (n = n && w < 0 ? Ut(n) : n);
              }
              return (w = (_[e] - _.min) / _.max || 0), Oe(_.b + (n ? n(w) : w) * _.v) + _.u;
            }
          );
        },
        yt = function (e) {
          var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return function (n) {
            var r = Math.round(parseFloat(n) / e) * e * t;
            return (r - (r % 1)) / t + (J(n) ? 0 : ft(n));
          };
        },
        bt = function (e, t) {
          var n,
            r,
            i = re(e);
          return (
            !i && K(e) && ((n = i = e.radius || B), e.values ? ((e = mt(e.values)), (r = !J(e[0])) && (n *= n)) : (e = yt(e.increment))),
            ut(
              t,
              i
                ? G(e)
                  ? function (t) {
                    return (r = e(t)), Math.abs(r - t) <= n ? r : t;
                  }
                  : function (t) {
                    for (var i, o, s = parseFloat(r ? t.x : t), a = parseFloat(r ? t.y : 0), l = B, c = 0, u = e.length; u--;)
                      (i = r ? (i = e[u].x - s) * i + (o = e[u].y - a) * o : Math.abs(e[u] - s)) < l && ((l = i), (c = u));
                    return (c = !n || l <= n ? e[c] : t), r || c === t || J(t) ? c : c + ft(t);
                  }
                : yt(e)
            )
          );
        },
        xt = function (e, t, n, r) {
          return ut(re(e) ? !t : !0 === n ? !!(n = 0) : !r, function () {
            return re(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n) * n * r) / r;
          });
        },
        wt = function (e, t, n) {
          return ut(n, function (n) {
            return e[~~t(n)];
          });
        },
        _t = function (e) {
          for (var t, n, r, i, o = 0, s = ""; ~(t = e.indexOf("random(", o));)
            (r = e.indexOf(")", t)), (i = "[" === e.charAt(t + 7)), (n = e.substr(t + 7, r - t - 7).match(i ? ce : ie)), (s += e.substr(o, t - o) + xt(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)), (o = r + 1);
          return s + e.substr(o, e.length - o);
        },
        St = function (e, t, n, r, i) {
          var o = t - e,
            s = r - n;
          return ut(i, function (t) {
            return n + (((t - e) / o) * s || 0);
          });
        },
        Tt = function (e, t, n) {
          var r,
            i,
            o,
            s = e.labels,
            a = B;
          for (r in s) (i = s[r] - t) < 0 == !!n && i && a > (i = Math.abs(i)) && ((o = r), (a = i));
          return o;
        },
        Ct = function (e, t, n) {
          var r,
            i,
            o = e.vars,
            s = o[t];
          if (s) return (r = o[t + "Params"]), (i = o.callbackScope || e), n && be.length && Pe(), r ? s.apply(i, r) : s.call(i);
        },
        kt = function (e) {
          return We(e), e.scrollTrigger && e.scrollTrigger.kill(!1), e.progress() < 1 && Ct(e, "onInterrupt"), e;
        },
        At = function (e) {
          var t = (e = (!e.name && e.default) || e).name,
            n = G(e),
            r =
              t && !n && e.init
                ? function () {
                  this._props = [];
                }
                : e,
            i = { init: ve, render: vn, add: tn, kill: bn, modifier: yn, rawVars: 0 },
            o = { targetTest: 0, get: 0, getSetter: pn, aliases: {}, register: 0 };
          if ((It(), e !== r)) {
            if (we[t]) return;
            Ne(r, Ne(Fe(e, i), o)), Be(r.prototype, Be(i, Fe(e, o))), (we[(r.prop = t)] = r), e.targetTest && (Te.push(r), (ye[t] = 1)), (t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          ge(t, r), e.register && e.register(kn, r, _n);
        },
        Et = 255,
        Lt = {
          aqua: [0, Et, Et],
          lime: [0, Et, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, Et],
          navy: [0, 0, 128],
          white: [Et, Et, Et],
          olive: [128, 128, 0],
          yellow: [Et, Et, 0],
          orange: [Et, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [Et, 0, 0],
          pink: [Et, 192, 203],
          cyan: [0, Et, Et],
          transparent: [Et, Et, Et, 0],
        },
        Dt = function (e, t, n) {
          return ((6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * Et + 0.5) | 0;
        },
        Ot = function (e, t, n) {
          var r,
            i,
            o,
            s,
            a,
            l,
            c,
            u,
            d,
            f,
            p = e ? (J(e) ? [e >> 16, (e >> 8) & Et, e & Et] : 0) : Lt.black;
          if (!p) {
            if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Lt[e])) p = Lt[e];
            else if ("#" === e.charAt(0)) {
              if ((e.length < 6 && ((r = e.charAt(1)), (i = e.charAt(2)), (o = e.charAt(3)), (e = "#" + r + r + i + i + o + o + (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))), 9 === e.length))
                return [(p = parseInt(e.substr(1, 6), 16)) >> 16, (p >> 8) & Et, p & Et, parseInt(e.substr(7), 16) / 255];
              p = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & Et, e & Et];
            } else if ("hsl" === e.substr(0, 3))
              if (((p = f = e.match(ie)), t)) {
                if (~e.indexOf("=")) return (p = e.match(oe)), n && p.length < 4 && (p[3] = 1), p;
              } else
                (s = (+p[0] % 360) / 360),
                  (a = +p[1] / 100),
                  (r = 2 * (l = +p[2] / 100) - (i = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = Dt(s + 1 / 3, r, i)),
                  (p[1] = Dt(s, r, i)),
                  (p[2] = Dt(s - 1 / 3, r, i));
            else p = e.match(ie) || Lt.transparent;
            p = p.map(Number);
          }
          return (
            t &&
            !f &&
            ((r = p[0] / Et),
              (i = p[1] / Et),
              (o = p[2] / Et),
              (l = ((c = Math.max(r, i, o)) + (u = Math.min(r, i, o))) / 2),
              c === u ? (s = a = 0) : ((d = c - u), (a = l > 0.5 ? d / (2 - c - u) : d / (c + u)), (s = c === r ? (i - o) / d + (i < o ? 6 : 0) : c === i ? (o - r) / d + 2 : (r - i) / d + 4), (s *= 60)),
              (p[0] = ~~(s + 0.5)),
              (p[1] = ~~(100 * a + 0.5)),
              (p[2] = ~~(100 * l + 0.5))),
            n && p.length < 4 && (p[3] = 1),
            p
          );
        },
        Mt = function (e) {
          var t = [],
            n = [],
            r = -1;
          return (
            e.split(Rt).forEach(function (e) {
              var i = e.match(se) || [];
              t.push.apply(t, i), n.push((r += i.length + 1));
            }),
            (t.c = n),
            t
          );
        },
        Pt = function (e, t, n) {
          var r,
            i,
            o,
            s,
            a = "",
            l = (e + a).match(Rt),
            c = t ? "hsla(" : "rgba(",
            u = 0;
          if (!l) return e;
          if (
            ((l = l.map(function (e) {
              return (e = Ot(e, t, 1)) && c + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")";
            })),
              n && ((o = Mt(e)), (r = n.c).join(a) !== o.c.join(a)))
          )
            for (s = (i = e.replace(Rt, "1").split(se)).length - 1; u < s; u++) a += i[u] + (~r.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (o.length ? o : l.length ? l : n).shift());
          if (!i) for (s = (i = e.split(Rt)).length - 1; u < s; u++) a += i[u] + l[u];
          return a + i[s];
        },
        Rt = (function () {
          var e,
            t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in Lt) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi");
        })(),
        qt = /hsl[a]?\(/,
        jt = function (e) {
          var t,
            n = e.join(" ");
          if (((Rt.lastIndex = 0), Rt.test(n))) return (t = qt.test(n)), (e[1] = Pt(e[1], t)), (e[0] = Pt(e[0], t, Mt(e[1]))), !0;
        },
        Nt =
          ((T = Date.now),
            (C = 500),
            (k = 33),
            (A = T()),
            (E = A),
            (D = L = 1e3 / 240),
            (M = function e(t) {
              var n,
                r,
                i,
                o,
                s = T() - E,
                a = !0 === t;
              if ((s > C && (A += s - k), ((n = (i = (E += s) - A) - D) > 0 || a) && ((o = ++w.frame), (_ = i - 1e3 * w.time), (w.time = i /= 1e3), (D += n + (n >= L ? 4 : L - n)), (r = 1)), a || (y = b(e)), r))
                for (S = 0; S < O.length; S++) O[S](i, _, o, t);
            }),
            (w = {
              time: 0,
              frame: 0,
              tick: function () {
                M(!0);
              },
              deltaRatio: function (e) {
                return _ / (1e3 / (e || 60));
              },
              wake: function () {
                h &&
                  (!f &&
                    ee() &&
                    ((d = f = window), (p = d.document || {}), (de.gsap = kn), (d.gsapVersions || (d.gsapVersions = [])).push(kn.version), pe(fe || d.GreenSockGlobals || (!d.gsap && d) || {}), (x = d.requestAnimationFrame)),
                    y && w.sleep(),
                    (b =
                      x ||
                      function (e) {
                        return setTimeout(e, (D - 1e3 * w.time + 1) | 0);
                      }),
                    (v = 1),
                    M(2));
              },
              sleep: function () {
                (x ? d.cancelAnimationFrame : clearTimeout)(y), (v = 0), (b = ve);
              },
              lagSmoothing: function (e, t) {
                (C = e || 1e8), (k = Math.min(t, C, 0));
              },
              fps: function (e) {
                (L = 1e3 / (e || 240)), (D = 1e3 * w.time + L);
              },
              add: function (e) {
                O.indexOf(e) < 0 && O.push(e), It();
              },
              remove: function (e) {
                var t;
                ~(t = O.indexOf(e)) && O.splice(t, 1) && S >= t && S--;
              },
              _listeners: (O = []),
            })),
        It = function () {
          return !v && Nt.wake();
        },
        Bt = {},
        Ht = /^[\d.\-M][\d.\-,\s]/,
        Ft = /["']/g,
        zt = function (e) {
          for (var t, n, r, i = {}, o = e.substr(1, e.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++)
            (n = o[a]), (t = a !== l - 1 ? n.lastIndexOf(",") : n.length), (r = n.substr(0, t)), (i[s] = isNaN(r) ? r.replace(Ft, "").trim() : +r), (s = n.substr(t + 1).trim());
          return i;
        },
        Ut = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        Wt = function e(t, n) {
          for (var r, i = t._first; i;)
            i instanceof Kt ? e(i, n) : !i.vars.yoyoEase || (i._yoyo && i._repeat) || i._yoyo === n || (i.timeline ? e(i.timeline, n) : ((r = i._ease), (i._ease = i._yEase), (i._yEase = r), (i._yoyo = n))), (i = i._next);
        },
        $t = function (e, t) {
          return (
            (e &&
              (G(e)
                ? e
                : Bt[e] ||
                (function (e) {
                  var t,
                    n,
                    r,
                    i,
                    o = (e + "").split("("),
                    s = Bt[o[0]];
                  return s && o.length > 1 && s.config
                    ? s.config.apply(
                      null,
                      ~e.indexOf("{") ? [zt(o[1])] : ((t = e), (n = t.indexOf("(") + 1), (r = t.indexOf(")")), (i = t.indexOf("(", n)), t.substring(n, ~i && i < r ? t.indexOf(")", r + 1) : r)).split(",").map(qe)
                    )
                    : Bt._CE && Ht.test(e)
                      ? Bt._CE("", e)
                      : s;
                })(e))) ||
            t
          );
        },
        Vt = function (e, t, n, r) {
          void 0 === n &&
            (n = function (e) {
              return 1 - t(1 - e);
            }),
            void 0 === r &&
            (r = function (e) {
              return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
            });
          var i,
            o = { easeIn: t, easeOut: n, easeInOut: r };
          return (
            Le(e, function (e) {
              for (var t in ((Bt[e] = de[e] = o), (Bt[(i = e.toLowerCase())] = n), o)) Bt[i + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Bt[e + "." + t] = o[t];
            }),
            o
          );
        },
        Xt = function (e) {
          return function (t) {
            return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
          };
        },
        Yt = function e(t, n, r) {
          var i = n >= 1 ? n : 1,
            o = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            s = (o / F) * (Math.asin(1 / i) || 0),
            a = function (e) {
              return 1 === e ? 1 : i * Math.pow(2, -10 * e) * X((e - s) * o) + 1;
            },
            l =
              "out" === t
                ? a
                : "in" === t
                  ? function (e) {
                    return 1 - a(1 - e);
                  }
                  : Xt(a);
          return (
            (o = F / o),
            (l.config = function (n, r) {
              return e(t, n, r);
            }),
            l
          );
        },
        Gt = function e(t, n) {
          void 0 === n && (n = 1.70158);
          var r = function (e) {
            return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
          },
            i =
              "out" === t
                ? r
                : "in" === t
                  ? function (e) {
                    return 1 - r(1 - e);
                  }
                  : Xt(r);
          return (
            (i.config = function (n) {
              return e(t, n);
            }),
            i
          );
        };
      Le("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
        var n = t < 5 ? t + 1 : t;
        Vt(
          e + ",Power" + (n - 1),
          t
            ? function (e) {
              return Math.pow(e, n);
            }
            : function (e) {
              return e;
            },
          function (e) {
            return 1 - Math.pow(1 - e, n);
          },
          function (e) {
            return e < 0.5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow(2 * (1 - e), n) / 2;
          }
        );
      }),
        (Bt.Linear.easeNone = Bt.none = Bt.Linear.easeIn),
        Vt("Elastic", Yt("in"), Yt("out"), Yt()),
        (P = 7.5625),
        (q = 1 / (R = 2.75)),
        Vt(
          "Bounce",
          function (e) {
            return 1 - j(1 - e);
          },
          (j = function (e) {
            return e < q ? P * e * e : e < 0.7272727272727273 ? P * Math.pow(e - 1.5 / R, 2) + 0.75 : e < 0.9090909090909092 ? P * (e -= 2.25 / R) * e + 0.9375 : P * Math.pow(e - 2.625 / R, 2) + 0.984375;
          })
        ),
        Vt("Expo", function (e) {
          return e ? Math.pow(2, 10 * (e - 1)) : 0;
        }),
        Vt("Circ", function (e) {
          return -(W(1 - e * e) - 1);
        }),
        Vt("Sine", function (e) {
          return 1 === e ? 1 : 1 - V(e * z);
        }),
        Vt("Back", Gt("in"), Gt("out"), Gt()),
        (Bt.SteppedEase = Bt.steps = de.SteppedEase = {
          config: function (e, t) {
            void 0 === e && (e = 1);
            var n = 1 / e,
              r = e + (t ? 0 : 1),
              i = t ? 1 : 0;
            return function (e) {
              return (((r * dt(0, 0.99999999, e)) | 0) + i) * n;
            };
          },
        }),
        (I.ease = Bt["quad.out"]),
        Le("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (e) {
          return (Ce += e + "," + e + "Params,");
        });
      var Jt = function (e, t) {
        (this.id = U++), (e._gsap = this), (this.target = e), (this.harness = t), (this.get = t ? t.get : Ee), (this.set = t ? t.getSetter : pn);
      },
        Qt = (function () {
          function e(e) {
            (this.vars = e),
              (this._delay = +e.delay || 0),
              (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && ((this._rDelay = e.repeatDelay || 0), (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
              (this._ts = 1),
              ot(this, +e.duration, 1, 1),
              (this.data = e.data),
              v || Nt.wake();
          }
          var t = e.prototype;
          return (
            (t.delay = function (e) {
              return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), (this._delay = e), this) : this._delay;
            }),
            (t.duration = function (e) {
              return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
            }),
            (t.totalDuration = function (e) {
              return arguments.length ? ((this._dirty = 0), ot(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
            }),
            (t.totalTime = function (e, t) {
              if ((It(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (Ke(this, e), !n._dp || n.parent || Ze(n, this); n && n.parent;)
                  n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), (n = n.parent);
                !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && e < this._tDur) || (this._ts < 0 && e > 0) || (!this._tDur && !e)) && et(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== e || (!this._dur && !t) || (this._initted && Math.abs(this._zTime) === H) || (!e && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = e), Re(this, e, t)), this
              );
            }),
            (t.time = function (e, t) {
              return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Ye(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time;
            }),
            (t.totalProgress = function (e, t) {
              return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
            }),
            (t.progress = function (e, t) {
              return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Ye(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
            }),
            (t.iteration = function (e, t) {
              var n = this.duration() + this._rDelay;
              return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? Ge(this._tTime, n) + 1 : 1;
            }),
            (t.timeScale = function (e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === e) return this;
              var t = this.parent && this._ts ? Je(this.parent._time, this) : this._tTime;
              return (this._rts = +e || 0), (this._ts = this._ps || -1e-8 === e ? 0 : this._rts), Ve(this.totalTime(dt(-this._delay, this._tDur, t), !0)), Qe(this), this;
            }),
            (t.paused = function (e) {
              return arguments.length
                ? (this._ps !== e &&
                  ((this._ps = e),
                    e
                      ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                      : (It(),
                        (this._ts = this._rts),
                        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== H && (this._tTime -= H)))),
                  this)
                : this._ps;
            }),
            (t.startTime = function (e) {
              if (arguments.length) {
                this._start = e;
                var t = this.parent || this._dp;
                return t && (t._sort || !this.parent) && et(t, this, e - this._delay), this;
              }
              return this._start;
            }),
            (t.endTime = function (e) {
              return this._start + (Z(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
            }),
            (t.rawTime = function (e) {
              var t = this.parent || this._dp;
              return t ? (e && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Je(t.rawTime(e), this) : this._tTime) : this._tTime;
            }),
            (t.globalTime = function (e) {
              for (var t = this, n = arguments.length ? e : t.rawTime(); t;) (n = t._start + n / (t._ts || 1)), (t = t._dp);
              return n;
            }),
            (t.repeat = function (e) {
              return arguments.length ? ((this._repeat = e === 1 / 0 ? -2 : e), st(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
            }),
            (t.repeatDelay = function (e) {
              if (arguments.length) {
                var t = this._time;
                return (this._rDelay = e), st(this), t ? this.time(t) : this;
              }
              return this._rDelay;
            }),
            (t.yoyo = function (e) {
              return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
            }),
            (t.seek = function (e, t) {
              return this.totalTime(lt(this, e), Z(t));
            }),
            (t.restart = function (e, t) {
              return this.play().totalTime(e ? -this._delay : 0, Z(t));
            }),
            (t.play = function (e, t) {
              return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
            }),
            (t.reverse = function (e, t) {
              return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1);
            }),
            (t.pause = function (e, t) {
              return null != e && this.seek(e, t), this.paused(!0);
            }),
            (t.resume = function () {
              return this.paused(!1);
            }),
            (t.reversed = function (e) {
              return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0;
            }),
            (t.invalidate = function () {
              return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
            }),
            (t.isActive = function () {
              var e,
                t = this.parent || this._dp,
                n = this._start;
              return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= n && e < this.endTime(!0) - H));
            }),
            (t.eventCallback = function (e, t, n) {
              var r = this.vars;
              return arguments.length > 1 ? (t ? ((r[e] = t), n && (r[e + "Params"] = n), "onUpdate" === e && (this._onUpdate = t)) : delete r[e], this) : r[e];
            }),
            (t.then = function (e) {
              var t = this;
              return new Promise(function (n) {
                var r = G(e) ? e : je,
                  i = function () {
                    var e = t.then;
                    (t.then = null), G(r) && (r = r(t)) && (r.then || r === t) && (t.then = e), n(r), (t.then = e);
                  };
                (t._initted && 1 === t.totalProgress() && t._ts >= 0) || (!t._tTime && t._ts < 0) ? i() : (t._prom = i);
              });
            }),
            (t.kill = function () {
              kt(this);
            }),
            e
          );
        })();
      Ne(Qt.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
      var Kt = (function (e) {
        function t(t, n) {
          var r;
          return (
            void 0 === t && (t = {}),
            ((r = e.call(this, t) || this).labels = {}),
            (r.smoothChildTiming = !!t.smoothChildTiming),
            (r.autoRemoveChildren = !!t.autoRemoveChildren),
            (r._sort = Z(t.sortChildren)),
            u && et(t.parent || u, a(r), n),
            t.reversed && r.reverse(),
            t.paused && r.paused(!0),
            t.scrollTrigger && tt(a(r), t.scrollTrigger),
            r
          );
        }
        l(t, e);
        var n = t.prototype;
        return (
          (n.to = function (e, t, n) {
            return ct(0, arguments, this), this;
          }),
          (n.from = function (e, t, n) {
            return ct(1, arguments, this), this;
          }),
          (n.fromTo = function (e, t, n, r) {
            return ct(2, arguments, this), this;
          }),
          (n.set = function (e, t, n) {
            return (t.duration = 0), (t.parent = this), ze(t).repeatDelay || (t.repeat = 0), (t.immediateRender = !!t.immediateRender), new ln(e, t, lt(this, n), 1), this;
          }),
          (n.call = function (e, t, n) {
            return et(this, ln.delayedCall(0, e, t), n);
          }),
          (n.staggerTo = function (e, t, n, r, i, o, s) {
            return (n.duration = t), (n.stagger = n.stagger || r), (n.onComplete = o), (n.onCompleteParams = s), (n.parent = this), new ln(e, n, lt(this, i)), this;
          }),
          (n.staggerFrom = function (e, t, n, r, i, o, s) {
            return (n.runBackwards = 1), (ze(n).immediateRender = Z(n.immediateRender)), this.staggerTo(e, t, n, r, i, o, s);
          }),
          (n.staggerFromTo = function (e, t, n, r, i, o, s, a) {
            return (r.startAt = n), (ze(r).immediateRender = Z(r.immediateRender)), this.staggerTo(e, t, r, i, o, s, a);
          }),
          (n.render = function (e, t, n) {
            var r,
              i,
              o,
              s,
              a,
              l,
              c,
              d,
              f,
              p,
              h,
              m,
              g = this._time,
              v = this._dirty ? this.totalDuration() : this._tDur,
              y = this._dur,
              b = e <= 0 ? 0 : Oe(e),
              x = this._zTime < 0 != e < 0 && (this._initted || !y);
            if ((this !== u && b > v && e >= 0 && (b = v), b !== this._tTime || n || x)) {
              if ((g !== this._time && y && ((b += this._time - g), (e += this._time - g)), (r = b), (f = this._start), (l = !(d = this._ts)), x && (y || (g = this._zTime), (e || !t) && (this._zTime = e)), this._repeat)) {
                if (((h = this._yoyo), (a = y + this._rDelay), this._repeat < -1 && e < 0)) return this.totalTime(100 * a + e, t, n);
                if (
                  ((r = Oe(b % a)),
                    b === v ? ((s = this._repeat), (r = y)) : ((s = ~~(b / a)) && s === b / a && ((r = y), s--), r > y && (r = y)),
                    (p = Ge(this._tTime, a)),
                    !g && this._tTime && p !== s && (p = s),
                    h && 1 & s && ((r = y - r), (m = 1)),
                    s !== p && !this._lock)
                ) {
                  var w = h && 1 & p,
                    _ = w === (h && 1 & s);
                  if (
                    (s < p && (w = !w),
                      (g = w ? 0 : y),
                      (this._lock = 1),
                      (this.render(g || (m ? 0 : Oe(s * a)), t, !y)._lock = 0),
                      (this._tTime = b),
                      !t && this.parent && Ct(this, "onRepeat"),
                      this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                      (g && g !== this._time) || l !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (((y = this._dur), (v = this._tDur), _ && ((this._lock = 2), (g = w ? y : -1e-4), this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), (this._lock = 0), !this._ts && !l))
                    return this;
                  Wt(this, m);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((c = (function (e, t, n) {
                    var r;
                    if (n > t)
                      for (r = e._first; r && r._start <= n;) {
                        if (!r._dur && "isPause" === r.data && r._start > t) return r;
                        r = r._next;
                      }
                    else
                      for (r = e._last; r && r._start >= n;) {
                        if (!r._dur && "isPause" === r.data && r._start < t) return r;
                        r = r._prev;
                      }
                  })(this, Oe(g), Oe(r))),
                    c && (b -= r - (r = c._start))),
                  (this._tTime = b),
                  (this._time = r),
                  (this._act = !d),
                  this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = e), (g = 0)),
                  !g && r && !t && (Ct(this, "onStart"), this._tTime !== b))
              )
                return this;
              if (r >= g && e >= 0)
                for (i = this._first; i;) {
                  if (((o = i._next), (i._act || r >= i._start) && i._ts && c !== i)) {
                    if (i.parent !== this) return this.render(e, t, n);
                    if ((i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, t, n), r !== this._time || (!this._ts && !l))) {
                      (c = 0), o && (b += this._zTime = -1e-8);
                      break;
                    }
                  }
                  i = o;
                }
              else {
                i = this._last;
                for (var S = e < 0 ? e : r; i;) {
                  if (((o = i._prev), (i._act || S <= i._end) && i._ts && c !== i)) {
                    if (i.parent !== this) return this.render(e, t, n);
                    if ((i.render(i._ts > 0 ? (S - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (S - i._start) * i._ts, t, n), r !== this._time || (!this._ts && !l))) {
                      (c = 0), o && (b += this._zTime = S ? -1e-8 : H);
                      break;
                    }
                  }
                  i = o;
                }
              }
              if (c && !t && (this.pause(), (c.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1), this._ts)) return (this._start = f), Qe(this), this.render(e, t, n);
              this._onUpdate && !t && Ct(this, "onUpdate", !0),
                ((b === v && v >= this.totalDuration()) || (!b && g)) &&
                ((f !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((e || !y) && ((b === v && this._ts > 0) || (!b && this._ts < 0)) && We(this, 1),
                    t || (e < 0 && !g) || (!b && !g && v) || (Ct(this, b === v && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < v && this.timeScale() > 0) && this._prom())));
            }
            return this;
          }),
          (n.add = function (e, t) {
            var n = this;
            if ((J(t) || (t = lt(this, t, e)), !(e instanceof Qt))) {
              if (re(e))
                return (
                  e.forEach(function (e) {
                    return n.add(e, t);
                  }),
                  this
                );
              if (Y(e)) return this.addLabel(e, t);
              if (!G(e)) return this;
              e = ln.delayedCall(0, e);
            }
            return this !== e ? et(this, e, t) : this;
          }),
          (n.getChildren = function (e, t, n, r) {
            void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === n && (n = !0), void 0 === r && (r = -B);
            for (var i = [], o = this._first; o;) o._start >= r && (o instanceof ln ? t && i.push(o) : (n && i.push(o), e && i.push.apply(i, o.getChildren(!0, t, n)))), (o = o._next);
            return i;
          }),
          (n.getById = function (e) {
            for (var t = this.getChildren(1, 1, 1), n = t.length; n--;) if (t[n].vars.id === e) return t[n];
          }),
          (n.remove = function (e) {
            return Y(e) ? this.removeLabel(e) : G(e) ? this.killTweensOf(e) : (Ue(this, e), e === this._recent && (this._recent = this._last), $e(this));
          }),
          (n.totalTime = function (t, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp && this._ts && (this._start = Oe(Nt.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
                e.prototype.totalTime.call(this, t, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (e, t) {
            return (this.labels[e] = lt(this, t)), this;
          }),
          (n.removeLabel = function (e) {
            return delete this.labels[e], this;
          }),
          (n.addPause = function (e, t, n) {
            var r = ln.delayedCall(0, t || ve, n);
            return (r.data = "isPause"), (this._hasPause = 1), et(this, r, lt(this, e));
          }),
          (n.removePause = function (e) {
            var t = this._first;
            for (e = lt(this, e); t;) t._start === e && "isPause" === t.data && We(t), (t = t._next);
          }),
          (n.killTweensOf = function (e, t, n) {
            for (var r = this.getTweensOf(e, n), i = r.length; i--;) Zt !== r[i] && r[i].kill(e, t);
            return this;
          }),
          (n.getTweensOf = function (e, t) {
            for (var n, r = [], i = mt(e), o = this._first, s = J(t); o;)
              o instanceof ln
                ? Me(o._targets, i) && (s ? (!Zt || (o._initted && o._ts)) && o.globalTime(0) <= t && o.globalTime(o.totalDuration()) > t : !t || o.isActive()) && r.push(o)
                : (n = o.getTweensOf(i, t)).length && r.push.apply(r, n),
                (o = o._next);
            return r;
          }),
          (n.tweenTo = function (e, t) {
            t = t || {};
            var n,
              r = this,
              i = lt(r, e),
              o = t,
              s = o.startAt,
              a = o.onStart,
              l = o.onStartParams,
              c = o.immediateRender,
              u = ln.to(
                r,
                Ne(
                  {
                    ease: t.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration: t.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale()) || H,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var e = t.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale());
                        u._dur !== e && ot(u, e, 0, 1).render(u._time, !0, !0), (n = 1);
                      }
                      a && a.apply(u, l || []);
                    },
                  },
                  t
                )
              );
            return c ? u.render(0) : u;
          }),
          (n.tweenFromTo = function (e, t, n) {
            return this.tweenTo(t, Ne({ startAt: { time: lt(this, e) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (e) {
            return void 0 === e && (e = this._time), Tt(this, lt(this, e));
          }),
          (n.previousLabel = function (e) {
            return void 0 === e && (e = this._time), Tt(this, lt(this, e), 1);
          }),
          (n.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + H);
          }),
          (n.shiftChildren = function (e, t, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, o = this.labels; i;) i._start >= n && ((i._start += e), (i._end += e)), (i = i._next);
            if (t) for (r in o) o[r] >= n && (o[r] += e);
            return $e(this);
          }),
          (n.invalidate = function () {
            var t = this._first;
            for (this._lock = 0; t;) t.invalidate(), (t = t._next);
            return e.prototype.invalidate.call(this);
          }),
          (n.clear = function (e) {
            void 0 === e && (e = !0);
            for (var t, n = this._first; n;) (t = n._next), this.remove(n), (n = t);
            return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), $e(this);
          }),
          (n.totalDuration = function (e) {
            var t,
              n,
              r,
              i = 0,
              o = this,
              s = o._last,
              a = B;
            if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -e : e));
            if (o._dirty) {
              for (r = o.parent; s;)
                (t = s._prev),
                  s._dirty && s.totalDuration(),
                  (n = s._start) > a && o._sort && s._ts && !o._lock ? ((o._lock = 1), (et(o, s, n - s._delay, 1)._lock = 0)) : (a = n),
                  n < 0 && s._ts && ((i -= n), ((!r && !o._dp) || (r && r.smoothChildTiming)) && ((o._start += n / o._ts), (o._time -= n), (o._tTime -= n)), o.shiftChildren(-n, !1, -Infinity), (a = 0)),
                  s._end > i && s._ts && (i = s._end),
                  (s = t);
              ot(o, o === u && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
            }
            return o._tDur;
          }),
          (t.updateRoot = function (e) {
            if ((u._ts && (Re(u, Je(e, u)), (m = Nt.frame)), Nt.frame >= Se)) {
              Se += N.autoSleep || 120;
              var t = u._first;
              if ((!t || !t._ts) && N.autoSleep && Nt._listeners.length < 2) {
                for (; t && !t._ts;) t = t._next;
                t || Nt.sleep();
              }
            }
          }),
          t
        );
      })(Qt);
      Ne(Kt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Zt,
        en = function (e, t, n, r, i, o, s) {
          var a,
            l,
            c,
            u,
            d,
            f,
            p,
            h,
            m = new _n(this._pt, e, t, 0, 1, gn, null, i),
            g = 0,
            v = 0;
          for (m.b = n, m.e = r, n += "", (p = ~(r += "").indexOf("random(")) && (r = _t(r)), o && (o((h = [n, r]), e, t), (n = h[0]), (r = h[1])), l = n.match(ae) || []; (a = ae.exec(r));)
            (u = a[0]),
              (d = r.substring(g, a.index)),
              c ? (c = (c + 1) % 5) : "rgba(" === d.substr(-5) && (c = 1),
              u !== l[v++] &&
              ((f = parseFloat(l[v - 1]) || 0),
                (m._pt = { _next: m._pt, p: d || 1 === v ? d : ",", s: f, c: "=" === u.charAt(1) ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1) : parseFloat(u) - f, m: c && c < 4 ? Math.round : 0 }),
                (g = ae.lastIndex));
          return (m.c = g < r.length ? r.substring(g, r.length) : ""), (m.fp = s), (le.test(r) || p) && (m.e = 0), (this._pt = m), m;
        },
        tn = function (e, t, n, r, i, o, s, a, l) {
          G(r) && (r = r(i || 0, e, o));
          var c,
            u = e[t],
            d = "get" !== n ? n : G(u) ? (l ? e[t.indexOf("set") || !G(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]()) : u,
            f = G(u) ? (l ? dn : un) : cn;
          if ((Y(r) && (~r.indexOf("random(") && (r = _t(r)), "=" === r.charAt(1) && ((c = parseFloat(d) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (ft(d) || 0)) || 0 === c) && (r = c)), d !== r))
            return isNaN(d * r) || "" === r
              ? (!u && !(t in e) && he(t, r), en.call(this, e, t, d, r, f, a || N.stringFilter, l))
              : ((c = new _n(this._pt, e, t, +d || 0, r - (d || 0), "boolean" == typeof u ? mn : hn, 0, f)), l && (c.fp = l), s && c.modifier(s, this, e), (this._pt = c));
        },
        nn = function (e, t, n, r, i, o) {
          var s, a, l, c;
          if (
            we[e] &&
            !1 !==
            (s = new we[e]()).init(
              i,
              s.rawVars
                ? t[e]
                : (function (e, t, n, r, i) {
                  if ((G(e) && (e = on(e, i, t, n, r)), !K(e) || (e.style && e.nodeType) || re(e) || ne(e))) return Y(e) ? on(e, i, t, n, r) : e;
                  var o,
                    s = {};
                  for (o in e) s[o] = on(e[o], i, t, n, r);
                  return s;
                })(t[e], r, i, o, n),
              n,
              r,
              o
            ) &&
            ((n._pt = a = new _n(n._pt, i, e, 0, 1, s.render, s, 0, s.priority)), n !== g)
          )
            for (l = n._ptLookup[n._targets.indexOf(i)], c = s._props.length; c--;) l[s._props[c]] = a;
          return s;
        },
        rn = function e(t, n) {
          var r,
            i,
            o,
            s,
            a,
            l,
            d,
            f,
            p,
            h,
            m,
            g,
            v,
            y = t.vars,
            b = y.ease,
            x = y.startAt,
            w = y.immediateRender,
            _ = y.lazy,
            S = y.onUpdate,
            T = y.onUpdateParams,
            C = y.callbackScope,
            k = y.runBackwards,
            A = y.yoyoEase,
            E = y.keyframes,
            L = y.autoRevert,
            D = t._dur,
            O = t._startAt,
            M = t._targets,
            P = t.parent,
            R = P && "nested" === P.data ? P.parent._targets : M,
            q = "auto" === t._overwrite && !c,
            j = t.timeline;
          if (
            (j && (!E || !b) && (b = "none"),
              (t._ease = $t(b, I.ease)),
              (t._yEase = A ? Ut($t(!0 === A ? b : A, I.ease)) : 0),
              A && t._yoyo && !t._repeat && ((A = t._yEase), (t._yEase = t._ease), (t._ease = A)),
              (t._from = !j && !!y.runBackwards),
              !j)
          ) {
            if (((g = (f = M[0] ? Ae(M[0]).harness : 0) && y[f.prop]), (r = Fe(y, ye)), O && O.render(-1, !0).kill(), x))
              if (
                (We((t._startAt = ln.set(M, Ne({ data: "isStart", overwrite: !1, parent: P, immediateRender: !0, lazy: Z(_), startAt: null, delay: 0, onUpdate: S, onUpdateParams: T, callbackScope: C, stagger: 0 }, x)))),
                  n < 0 && !w && !L && t._startAt.render(-1, !0),
                  w)
              ) {
                if ((n > 0 && !L && (t._startAt = 0), D && n <= 0)) return void (n && (t._zTime = n));
              } else !1 === L && (t._startAt = 0);
            else if (k && D)
              if (O) !L && (t._startAt = 0);
              else if (
                (n && (w = !1),
                  (o = Ne({ overwrite: !1, data: "isFromStart", lazy: w && Z(_), immediateRender: w, stagger: 0, parent: P }, r)),
                  g && (o[f.prop] = g),
                  We((t._startAt = ln.set(M, o))),
                  n < 0 && t._startAt.render(-1, !0),
                  w)
              ) {
                if (!n) return;
              } else e(t._startAt, H);
            for (t._pt = 0, _ = (D && Z(_)) || (_ && !D), i = 0; i < M.length; i++) {
              if (
                ((d = (a = M[i])._gsap || ke(M)[i]._gsap),
                  (t._ptLookup[i] = h = {}),
                  xe[d.id] && be.length && Pe(),
                  (m = R === M ? i : R.indexOf(a)),
                  f &&
                  !1 !== (p = new f()).init(a, g || r, t, m, R) &&
                  ((t._pt = s = new _n(t._pt, a, p.name, 0, 1, p.render, p, 0, p.priority)),
                    p._props.forEach(function (e) {
                      h[e] = s;
                    }),
                    p.priority && (l = 1)),
                  !f || g)
              )
                for (o in r) we[o] && (p = nn(o, r, t, m, a, R)) ? p.priority && (l = 1) : (h[o] = s = tn.call(t, a, o, "get", r[o], m, R, 0, y.stringFilter));
              t._op && t._op[i] && t.kill(a, t._op[i]), q && t._pt && ((Zt = t), u.killTweensOf(a, h, t.globalTime(n)), (v = !t.parent), (Zt = 0)), t._pt && _ && (xe[d.id] = 1);
            }
            l && wn(t), t._onInit && t._onInit(t);
          }
          (t._onUpdate = S), (t._initted = (!t._op || t._pt) && !v);
        },
        on = function (e, t, n, r, i) {
          return G(e) ? e.call(t, n, r, i) : Y(e) && ~e.indexOf("random(") ? _t(e) : e;
        },
        sn = Ce + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        an = (sn + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        ln = (function (e) {
          function t(t, n, r, i) {
            var o;
            "number" == typeof n && ((r.duration = n), (n = r), (r = null));
            var s,
              l,
              d,
              f,
              p,
              h,
              m,
              g,
              v = (o = e.call(this, i ? n : ze(n)) || this).vars,
              y = v.duration,
              b = v.delay,
              x = v.immediateRender,
              w = v.stagger,
              _ = v.overwrite,
              S = v.keyframes,
              T = v.defaults,
              C = v.scrollTrigger,
              k = v.yoyoEase,
              A = n.parent || u,
              E = (re(t) || ne(t) ? J(t[0]) : "length" in n) ? [t] : mt(t);
            if (((o._targets = E.length ? ke(E) : me("GSAP target " + t + " not found. https://greensock.com", !N.nullTargetWarn) || []), (o._ptLookup = []), (o._overwrite = _), S || w || te(y) || te(b))) {
              if (((n = o.vars), (s = o.timeline = new Kt({ data: "nested", defaults: T || {} })).kill(), (s.parent = s._dp = a(o)), (s._start = 0), S))
                ze(Ne(s.vars.defaults, { ease: "none" })),
                  w
                    ? E.forEach(function (e, t) {
                      return S.forEach(function (n, r) {
                        return s.to(e, n, r ? ">" : t * w);
                      });
                    })
                    : S.forEach(function (e) {
                      return s.to(E, e, ">");
                    });
              else {
                if (((f = E.length), (m = w ? vt(w) : ve), K(w))) for (p in w) ~sn.indexOf(p) && (g || (g = {}), (g[p] = w[p]));
                for (l = 0; l < f; l++) {
                  for (p in ((d = {}), n)) an.indexOf(p) < 0 && (d[p] = n[p]);
                  (d.stagger = 0),
                    k && (d.yoyoEase = k),
                    g && Be(d, g),
                    (h = E[l]),
                    (d.duration = +on(y, a(o), l, h, E)),
                    (d.delay = (+on(b, a(o), l, h, E) || 0) - o._delay),
                    !w && 1 === f && d.delay && ((o._delay = b = d.delay), (o._start += b), (d.delay = 0)),
                    s.to(h, d, m(l, h, E));
                }
                s.duration() ? (y = b = 0) : (o.timeline = 0);
              }
              y || o.duration((y = s.duration()));
            } else o.timeline = 0;
            return (
              !0 !== _ || c || ((Zt = a(o)), u.killTweensOf(E), (Zt = 0)),
              et(A, a(o), r),
              n.reversed && o.reverse(),
              n.paused && o.paused(!0),
              (x || (!y && !S && o._start === Oe(A._time) && Z(x) && Xe(a(o)) && "nested" !== A.data)) && ((o._tTime = -1e-8), o.render(Math.max(0, -b))),
              C && tt(a(o), C),
              o
            );
          }
          l(t, e);
          var n = t.prototype;
          return (
            (n.render = function (e, t, n) {
              var r,
                i,
                o,
                s,
                a,
                l,
                c,
                u,
                d,
                f = this._time,
                p = this._tDur,
                h = this._dur,
                m = e > p - H && e >= 0 ? p : e < H ? 0 : e;
              if (h) {
                if (m !== this._tTime || !e || n || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 != e < 0)) {
                  if (((r = m), (u = this.timeline), this._repeat)) {
                    if (((s = h + this._rDelay), this._repeat < -1 && e < 0)) return this.totalTime(100 * s + e, t, n);
                    if (
                      ((r = Oe(m % s)),
                        m === p ? ((o = this._repeat), (r = h)) : ((o = ~~(m / s)) && o === m / s && ((r = h), o--), r > h && (r = h)),
                        (l = this._yoyo && 1 & o) && ((d = this._yEase), (r = h - r)),
                        (a = Ge(this._tTime, s)),
                        r === f && !n && this._initted)
                    )
                      return this;
                    o !== a && (u && this._yEase && Wt(u, l), !this.vars.repeatRefresh || l || this._lock || ((this._lock = n = 1), (this.render(Oe(s * o), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (nt(this, e < 0 ? e : r, n, t)) return (this._tTime = 0), this;
                    if (h !== this._dur) return this.render(e, t, n);
                  }
                  if (
                    ((this._tTime = m),
                      (this._time = r),
                      !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                      (this.ratio = c = (d || this._ease)(r / h)),
                      this._from && (this.ratio = c = 1 - c),
                      r && !f && !t && (Ct(this, "onStart"), this._tTime !== m))
                  )
                    return this;
                  for (i = this._pt; i;) i.r(c, i.d), (i = i._next);
                  (u && u.render(e < 0 ? e : !r && l ? -1e-8 : u._dur * c, t, n)) || (this._startAt && (this._zTime = e)),
                    this._onUpdate && !t && (e < 0 && this._startAt && this._startAt.render(e, !0, n), Ct(this, "onUpdate")),
                    this._repeat && o !== a && this.vars.onRepeat && !t && this.parent && Ct(this, "onRepeat"),
                    (m !== this._tDur && m) ||
                    this._tTime !== m ||
                    (e < 0 && this._startAt && !this._onUpdate && this._startAt.render(e, !0, !0),
                      (e || !h) && ((m === this._tDur && this._ts > 0) || (!m && this._ts < 0)) && We(this, 1),
                      t || (e < 0 && !f) || (!m && !f) || (Ct(this, m === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < p && this.timeScale() > 0) && this._prom()));
                }
              } else
                !(function (e, t, n, r) {
                  var i,
                    o,
                    s,
                    a = e.ratio,
                    l = t < 0 || (!t && ((!e._start && rt(e) && (e._initted || !it(e))) || ((e._ts < 0 || e._dp._ts < 0) && !it(e)))) ? 0 : 1,
                    c = e._rDelay,
                    u = 0;
                  if (
                    (c && e._repeat && ((u = dt(0, e._tDur, t)), (o = Ge(u, c)), (s = Ge(e._tTime, c)), e._yoyo && 1 & o && (l = 1 - l), o !== s && ((a = 1 - l), e.vars.repeatRefresh && e._initted && e.invalidate())),
                      l !== a || r || e._zTime === H || (!t && e._zTime))
                  ) {
                    if (!e._initted && nt(e, t, r, n)) return;
                    for (s = e._zTime, e._zTime = t || (n ? H : 0), n || (n = t && !s), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = u, i = e._pt; i;) i.r(l, i.d), (i = i._next);
                    e._startAt && t < 0 && e._startAt.render(t, !0, !0),
                      e._onUpdate && !n && Ct(e, "onUpdate"),
                      u && e._repeat && !n && e.parent && Ct(e, "onRepeat"),
                      (t >= e._tDur || t < 0) && e.ratio === l && (l && We(e, 1), n || (Ct(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
                  } else e._zTime || (e._zTime = t);
                })(this, e, t, n);
              return this;
            }),
            (n.targets = function () {
              return this._targets;
            }),
            (n.invalidate = function () {
              return (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), e.prototype.invalidate.call(this);
            }),
            (n.kill = function (e, t) {
              if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t)))) return (this._lazy = this._pt = 0), this.parent ? kt(this) : this;
              if (this.timeline) {
                var n = this.timeline.totalDuration();
                return this.timeline.killTweensOf(e, t, Zt && !0 !== Zt.vars.overwrite)._first || kt(this), this.parent && n !== this.timeline.totalDuration() && ot(this, (this._dur * this.timeline._tDur) / n, 0, 1), this;
              }
              var r,
                i,
                o,
                s,
                a,
                l,
                c,
                u = this._targets,
                d = e ? mt(e) : u,
                f = this._ptLookup,
                p = this._pt;
              if (
                (!t || "all" === t) &&
                (function (e, t) {
                  for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
                  return n < 0;
                })(u, d)
              )
                return "all" === t && (this._pt = 0), kt(this);
              for (
                r = this._op = this._op || [],
                "all" !== t &&
                (Y(t) &&
                  ((a = {}),
                    Le(t, function (e) {
                      return (a[e] = 1);
                    }),
                    (t = a)),
                  (t = (function (e, t) {
                    var n,
                      r,
                      i,
                      o,
                      s = e[0] ? Ae(e[0]).harness : 0,
                      a = s && s.aliases;
                    if (!a) return t;
                    for (r in ((n = Be({}, t)), a)) if ((r in n)) for (i = (o = a[r].split(",")).length; i--;) n[o[i]] = n[r];
                    return n;
                  })(u, t))),
                c = u.length;
                c--;

              )
                if (~d.indexOf(u[c]))
                  for (a in ((i = f[c]), "all" === t ? ((r[c] = t), (s = i), (o = {})) : ((o = r[c] = r[c] || {}), (s = t)), s))
                    (l = i && i[a]) && (("kill" in l.d && !0 !== l.d.kill(a)) || Ue(this, l, "_pt"), delete i[a]), "all" !== o && (o[a] = 1);
              return this._initted && !this._pt && p && kt(this), this;
            }),
            (t.to = function (e, n) {
              return new t(e, n, arguments[2]);
            }),
            (t.from = function (e, t) {
              return ct(1, arguments);
            }),
            (t.delayedCall = function (e, n, r, i) {
              return new t(n, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: e, onComplete: n, onReverseComplete: n, onCompleteParams: r, onReverseCompleteParams: r, callbackScope: i });
            }),
            (t.fromTo = function (e, t, n) {
              return ct(2, arguments);
            }),
            (t.set = function (e, n) {
              return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n);
            }),
            (t.killTweensOf = function (e, t, n) {
              return u.killTweensOf(e, t, n);
            }),
            t
          );
        })(Qt);
      Ne(ln.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
        Le("staggerTo,staggerFrom,staggerFromTo", function (e) {
          ln[e] = function () {
            var t = new Kt(),
              n = pt.call(arguments, 0);
            return n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n);
          };
        });
      var cn = function (e, t, n) {
        return (e[t] = n);
      },
        un = function (e, t, n) {
          return e[t](n);
        },
        dn = function (e, t, n, r) {
          return e[t](r.fp, n);
        },
        fn = function (e, t, n) {
          return e.setAttribute(t, n);
        },
        pn = function (e, t) {
          return G(e[t]) ? un : Q(e[t]) && e.setAttribute ? fn : cn;
        },
        hn = function (e, t) {
          return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
        },
        mn = function (e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t);
        },
        gn = function (e, t) {
          var n = t._pt,
            r = "";
          if (!e && t.b) r = t.b;
          else if (1 === e && t.e) r = t.e;
          else {
            for (; n;) (r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + r), (n = n._next);
            r += t.c;
          }
          t.set(t.t, t.p, r, t);
        },
        vn = function (e, t) {
          for (var n = t._pt; n;) n.r(e, n.d), (n = n._next);
        },
        yn = function (e, t, n, r) {
          for (var i, o = this._pt; o;) (i = o._next), o.p === r && o.modifier(e, t, n), (o = i);
        },
        bn = function (e) {
          for (var t, n, r = this._pt; r;) (n = r._next), (r.p === e && !r.op) || r.op === e ? Ue(this, r, "_pt") : r.dep || (t = 1), (r = n);
          return !t;
        },
        xn = function (e, t, n, r) {
          r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
        },
        wn = function (e) {
          for (var t, n, r, i, o = e._pt; o;) {
            for (t = o._next, n = r; n && n.pr > o.pr;) n = n._next;
            (o._prev = n ? n._prev : i) ? (o._prev._next = o) : (r = o), (o._next = n) ? (n._prev = o) : (i = o), (o = t);
          }
          e._pt = r;
        },
        _n = (function () {
          function e(e, t, n, r, i, o, s, a, l) {
            (this.t = t), (this.s = r), (this.c = i), (this.p = n), (this.r = o || hn), (this.d = s || this), (this.set = a || cn), (this.pr = l || 0), (this._next = e), e && (e._prev = this);
          }
          return (
            (e.prototype.modifier = function (e, t, n) {
              (this.mSet = this.mSet || this.set), (this.set = xn), (this.m = e), (this.mt = n), (this.tween = t);
            }),
            e
          );
        })();
      Le(
        Ce +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (e) {
          return (ye[e] = 1);
        }
      ),
        (de.TweenMax = de.TweenLite = ln),
        (de.TimelineLite = de.TimelineMax = Kt),
        (u = new Kt({ sortChildren: !1, defaults: I, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
        (N.stringFilter = jt);
      var Sn = {
        registerPlugin: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          t.forEach(function (e) {
            return At(e);
          });
        },
        timeline: function (e) {
          return new Kt(e);
        },
        getTweensOf: function (e, t) {
          return u.getTweensOf(e, t);
        },
        getProperty: function (e, t, n, r) {
          Y(e) && (e = mt(e)[0]);
          var i = Ae(e || {}).get,
            o = n ? je : qe;
          return (
            "native" === n && (n = ""),
            e
              ? t
                ? o(((we[t] && we[t].get) || i)(e, t, n, r))
                : function (t, n, r) {
                  return o(((we[t] && we[t].get) || i)(e, t, n, r));
                }
              : e
          );
        },
        quickSetter: function (e, t, n) {
          if ((e = mt(e)).length > 1) {
            var r = e.map(function (e) {
              return kn.quickSetter(e, t, n);
            }),
              i = r.length;
            return function (e) {
              for (var t = i; t--;) r[t](e);
            };
          }
          e = e[0] || {};
          var o = we[t],
            s = Ae(e),
            a = (s.harness && (s.harness.aliases || {})[t]) || t,
            l = o
              ? function (t) {
                var r = new o();
                (g._pt = 0), r.init(e, n ? t + n : t, g, 0, [e]), r.render(1, r), g._pt && vn(1, g);
              }
              : s.set(e, a);
          return o
            ? l
            : function (t) {
              return l(e, a, n ? t + n : t, s, 1);
            };
        },
        isTweening: function (e) {
          return u.getTweensOf(e, !0).length > 0;
        },
        defaults: function (e) {
          return e && e.ease && (e.ease = $t(e.ease, I.ease)), He(I, e || {});
        },
        config: function (e) {
          return He(N, e || {});
        },
        registerEffect: function (e) {
          var t = e.name,
            n = e.effect,
            r = e.plugins,
            i = e.defaults,
            o = e.extendTimeline;
          (r || "").split(",").forEach(function (e) {
            return e && !we[e] && !de[e] && me(t + " effect requires " + e + " plugin.");
          }),
            (_e[t] = function (e, t, r) {
              return n(mt(e), Ne(t || {}, i), r);
            }),
            o &&
            (Kt.prototype[t] = function (e, n, r) {
              return this.add(_e[t](e, K(n) ? n : (r = n) && {}, this), r);
            });
        },
        registerEase: function (e, t) {
          Bt[e] = $t(t);
        },
        parseEase: function (e, t) {
          return arguments.length ? $t(e, t) : Bt;
        },
        getById: function (e) {
          return u.getById(e);
        },
        exportRoot: function (e, t) {
          void 0 === e && (e = {});
          var n,
            r,
            i = new Kt(e);
          for (i.smoothChildTiming = Z(e.smoothChildTiming), u.remove(i), i._dp = 0, i._time = i._tTime = u._time, n = u._first; n;)
            (r = n._next), (!t && !n._dur && n instanceof ln && n.vars.onComplete === n._targets[0]) || et(i, n, n._start - n._delay), (n = r);
          return et(u, i, 0), i;
        },
        utils: {
          wrap: function e(t, n, r) {
            var i = n - t;
            return re(t)
              ? wt(t, e(0, t.length), n)
              : ut(r, function (e) {
                return ((i + ((e - t) % i)) % i) + t;
              });
          },
          wrapYoyo: function e(t, n, r) {
            var i = n - t,
              o = 2 * i;
            return re(t)
              ? wt(t, e(0, t.length - 1), n)
              : ut(r, function (e) {
                return t + ((e = (o + ((e - t) % o)) % o || 0) > i ? o - e : e);
              });
          },
          distribute: vt,
          random: xt,
          snap: bt,
          normalize: function (e, t, n) {
            return St(e, t, 0, 1, n);
          },
          getUnit: ft,
          clamp: function (e, t, n) {
            return ut(n, function (n) {
              return dt(e, t, n);
            });
          },
          splitColor: Ot,
          toArray: mt,
          selector: function (e) {
            return (
              (e = mt(e)[0] || me("Invalid scope") || {}),
              function (t) {
                var n = e.current || e.nativeElement || e;
                return mt(t, n.querySelectorAll ? n : n === e ? me("Invalid scope") || p.createElement("div") : e);
              }
            );
          },
          mapRange: St,
          pipe: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function (e) {
              return t.reduce(function (e, t) {
                return t(e);
              }, e);
            };
          },
          unitize: function (e, t) {
            return function (n) {
              return e(parseFloat(n)) + (t || ft(n));
            };
          },
          interpolate: function e(t, n, r, i) {
            var o = isNaN(t + n)
              ? 0
              : function (e) {
                return (1 - e) * t + e * n;
              };
            if (!o) {
              var s,
                a,
                l,
                c,
                u,
                d = Y(t),
                f = {};
              if ((!0 === r && (i = 1) && (r = null), d)) (t = { p: t }), (n = { p: n });
              else if (re(t) && !re(n)) {
                for (l = [], c = t.length, u = c - 2, a = 1; a < c; a++) l.push(e(t[a - 1], t[a]));
                c--,
                  (o = function (e) {
                    e *= c;
                    var t = Math.min(u, ~~e);
                    return l[t](e - t);
                  }),
                  (r = n);
              } else i || (t = Be(re(t) ? [] : {}, t));
              if (!l) {
                for (s in n) tn.call(f, t, s, "get", n[s]);
                o = function (e) {
                  return vn(e, f) || (d ? t.p : t);
                };
              }
            }
            return ut(r, o);
          },
          shuffle: gt,
        },
        install: pe,
        effects: _e,
        ticker: Nt,
        updateRoot: Kt.updateRoot,
        plugins: we,
        globalTimeline: u,
        core: {
          PropTween: _n,
          globals: ge,
          Tween: ln,
          Timeline: Kt,
          Animation: Qt,
          getCache: Ae,
          _removeLinkedListItem: Ue,
          suppressOverwrites: function (e) {
            return (c = e);
          },
        },
      };
      Le("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
        return (Sn[e] = ln[e]);
      }),
        Nt.add(Kt.updateRoot),
        (g = Sn.to({}, { duration: 0 }));
      var Tn = function (e, t) {
        for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
        return n;
      },
        Cn = function (e, t) {
          return {
            name: e,
            rawVars: 1,
            init: function (e, n, r) {
              r._onInit = function (e) {
                var r, i;
                if (
                  (Y(n) &&
                    ((r = {}),
                      Le(n, function (e) {
                        return (r[e] = 1);
                      }),
                      (n = r)),
                    t)
                ) {
                  for (i in ((r = {}), n)) r[i] = t(n[i]);
                  n = r;
                }
                !(function (e, t) {
                  var n,
                    r,
                    i,
                    o = e._targets;
                  for (n in t) for (r = o.length; r--;) (i = e._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = Tn(i, n)), i && i.modifier && i.modifier(t[n], e, o[r], n));
                })(e, n);
              };
            },
          };
        },
        kn =
          Sn.registerPlugin(
            {
              name: "attr",
              init: function (e, t, n, r, i) {
                var o, s;
                for (o in t) (s = this.add(e, "setAttribute", (e.getAttribute(o) || 0) + "", t[o], r, i, 0, 0, o)) && (s.op = o), this._props.push(o);
              },
            },
            {
              name: "endArray",
              init: function (e, t) {
                for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n]);
              },
            },
            Cn("roundProps", yt),
            Cn("modifiers"),
            Cn("snap", bt)
          ) || Sn;
      (ln.version = Kt.version = kn.version = "3.8.0"),
        (h = 1),
        ee() && It(),
        Bt.Power0,
        Bt.Power1,
        Bt.Power2,
        Bt.Power3,
        Bt.Power4,
        Bt.Linear,
        Bt.Quad,
        Bt.Cubic,
        Bt.Quart,
        Bt.Quint,
        Bt.Strong,
        Bt.Elastic,
        Bt.Back,
        Bt.SteppedEase,
        Bt.Bounce,
        Bt.Sine,
        Bt.Expo,
        Bt.Circ;
      var An,
        En,
        Ln,
        Dn,
        On,
        Mn,
        Pn,
        Rn = {},
        qn = 180 / Math.PI,
        jn = Math.PI / 180,
        Nn = Math.atan2,
        In = /([A-Z])/g,
        Bn = /(?:left|right|width|margin|padding|x)/i,
        Hn = /[\s,\(]\S/,
        Fn = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
        zn = function (e, t) {
          return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
        },
        Un = function (e, t) {
          return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
        },
        Wn = function (e, t) {
          return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t);
        },
        $n = function (e, t) {
          var n = t.s + t.c * e;
          t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        Vn = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        Xn = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        Yn = function (e, t, n) {
          return (e.style[t] = n);
        },
        Gn = function (e, t, n) {
          return e.style.setProperty(t, n);
        },
        Jn = function (e, t, n) {
          return (e._gsap[t] = n);
        },
        Qn = function (e, t, n) {
          return (e._gsap.scaleX = e._gsap.scaleY = n);
        },
        Kn = function (e, t, n, r, i) {
          var o = e._gsap;
          (o.scaleX = o.scaleY = n), o.renderTransform(i, o);
        },
        Zn = function (e, t, n, r, i) {
          var o = e._gsap;
          (o[t] = n), o.renderTransform(i, o);
        },
        er = "transform",
        tr = er + "Origin",
        nr = function (e, t) {
          var n = En.createElementNS ? En.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : En.createElement(e);
          return n.style ? n : En.createElement(e);
        },
        rr = function e(t, n, r) {
          var i = getComputedStyle(t);
          return i[n] || i.getPropertyValue(n.replace(In, "-$1").toLowerCase()) || i.getPropertyValue(n) || (!r && e(t, or(n) || n, 1)) || "";
        },
        ir = "O,Moz,ms,Ms,Webkit".split(","),
        or = function (e, t, n) {
          var r = (t || On).style,
            i = 5;
          if (e in r && !n) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(ir[i] + e in r););
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? ir[i] : "") + e;
        },
        sr = function () {
          "undefined" != typeof window &&
            window.document &&
            ((An = window),
              (En = An.document),
              (Ln = En.documentElement),
              (On = nr("div") || { style: {} }),
              nr("div"),
              (er = or(er)),
              (tr = er + "Origin"),
              (On.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
              (Pn = !!or("perspective")),
              (Dn = 1));
        },
        ar = function e(t) {
          var n,
            r = nr("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            o = this.nextSibling,
            s = this.style.cssText;
          if ((Ln.appendChild(r), r.appendChild(this), (this.style.display = "block"), t))
            try {
              (n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = e);
            } catch (e) { }
          else this._gsapBBox && (n = this._gsapBBox());
          return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), Ln.removeChild(r), (this.style.cssText = s), n;
        },
        lr = function (e, t) {
          for (var n = t.length; n--;) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
        },
        cr = function (e) {
          var t;
          try {
            t = e.getBBox();
          } catch (n) {
            t = ar.call(e, !0);
          }
          return (t && (t.width || t.height)) || e.getBBox === ar || (t = ar.call(e, !0)), !t || t.width || t.x || t.y ? t : { x: +lr(e, ["x", "cx", "x1"]) || 0, y: +lr(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
        },
        ur = function (e) {
          return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !cr(e));
        },
        dr = function (e, t) {
          if (t) {
            var n = e.style;
            t in Rn && t !== tr && (t = er), n.removeProperty ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) || (t = "-" + t), n.removeProperty(t.replace(In, "-$1").toLowerCase())) : n.removeAttribute(t);
          }
        },
        fr = function (e, t, n, r, i, o) {
          var s = new _n(e._pt, t, n, 0, 1, o ? Xn : Vn);
          return (e._pt = s), (s.b = r), (s.e = i), e._props.push(n), s;
        },
        pr = { deg: 1, rad: 1, turn: 1 },
        hr = function e(t, n, r, i) {
          var o,
            s,
            a,
            l,
            c = parseFloat(r) || 0,
            u = (r + "").trim().substr((c + "").length) || "px",
            d = On.style,
            f = Bn.test(n),
            p = "svg" === t.tagName.toLowerCase(),
            h = (p ? "client" : "offset") + (f ? "Width" : "Height"),
            m = 100,
            g = "px" === i,
            v = "%" === i;
          return i === u || !c || pr[i] || pr[u]
            ? c
            : ("px" !== u && !g && (c = e(t, n, r, "px")),
              (l = t.getCTM && ur(t)),
              (!v && "%" !== u) || (!Rn[n] && !~n.indexOf("adius"))
                ? ((d[f ? "width" : "height"] = m + (g ? u : i)),
                  (s = ~n.indexOf("adius") || ("em" === i && t.appendChild && !p) ? t : t.parentNode),
                  l && (s = (t.ownerSVGElement || {}).parentNode),
                  (s && s !== En && s.appendChild) || (s = En.body),
                  (a = s._gsap) && v && a.width && f && a.time === Nt.time
                    ? De((c / a.width) * m)
                    : ((v || "%" === u) && (d.position = rr(t, "position")),
                      s === t && (d.position = "static"),
                      s.appendChild(On),
                      (o = On[h]),
                      s.removeChild(On),
                      (d.position = "absolute"),
                      f && v && (((a = Ae(s)).time = Nt.time), (a.width = s[h])),
                      De(g ? (o * c) / m : o && c ? (m / o) * c : 0)))
                : ((o = l ? t.getBBox()[f ? "width" : "height"] : t[h]), De(v ? (c / o) * m : (c / 100) * o)));
        },
        mr = function (e, t, n, r) {
          var i;
          return (
            Dn || sr(),
            t in Fn && "transform" !== t && ~(t = Fn[t]).indexOf(",") && (t = t.split(",")[0]),
            Rn[t] && "transform" !== t
              ? ((i = kr(e, r)), (i = "transformOrigin" !== t ? i[t] : i.svg ? i.origin : Ar(rr(e, tr)) + " " + i.zOrigin + "px"))
              : (!(i = e.style[t]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = (br[t] && br[t](e, t, n)) || rr(e, t) || Ee(e, t) || ("opacity" === t ? 1 : 0)),
            n && !~(i + "").trim().indexOf(" ") ? hr(e, t, i, n) + n : i
          );
        },
        gr = function (e, t, n, r) {
          if (!n || "none" === n) {
            var i = or(t, e, 1),
              o = i && rr(e, i, 1);
            o && o !== n ? ((t = i), (n = o)) : "borderColor" === t && (n = rr(e, "borderTopColor"));
          }
          var s,
            a,
            l,
            c,
            u,
            d,
            f,
            p,
            h,
            m,
            g,
            v,
            y = new _n(this._pt, e.style, t, 0, 1, gn),
            b = 0,
            x = 0;
          if (((y.b = n), (y.e = r), (n += ""), "auto" == (r += "") && ((e.style[t] = r), (r = rr(e, t) || r), (e.style[t] = n)), jt((s = [n, r])), (r = s[1]), (l = (n = s[0]).match(se) || []), (r.match(se) || []).length)) {
            for (; (a = se.exec(r));)
              (f = a[0]),
                (h = r.substring(b, a.index)),
                u ? (u = (u + 1) % 5) : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) || (u = 1),
                f !== (d = l[x++] || "") &&
                ((c = parseFloat(d) || 0),
                  (g = d.substr((c + "").length)),
                  (v = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) && (f = f.substr(2)),
                  (p = parseFloat(f)),
                  (m = f.substr((p + "").length)),
                  (b = se.lastIndex - m.length),
                  m || ((m = m || N.units[t] || g), b === r.length && ((r += m), (y.e += m))),
                  g !== m && (c = hr(e, t, d, m) || 0),
                  (y._pt = { _next: y._pt, p: h || 1 === x ? h : ",", s: c, c: v ? v * p : p - c, m: (u && u < 4) || "zIndex" === t ? Math.round : 0 }));
            y.c = b < r.length ? r.substring(b, r.length) : "";
          } else y.r = "display" === t && "none" === r ? Xn : Vn;
          return le.test(r) && (y.e = 0), (this._pt = y), y;
        },
        vr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
        yr = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var n,
              r,
              i,
              o = t.t,
              s = o.style,
              a = t.u,
              l = o._gsap;
            if ("all" === a || !0 === a) (s.cssText = ""), (r = 1);
            else for (i = (a = a.split(",")).length; --i > -1;) (n = a[i]), Rn[n] && ((r = 1), (n = "transformOrigin" === n ? tr : er)), dr(o, n);
            r && (dr(o, er), l && (l.svg && o.removeAttribute("transform"), kr(o, 1), (l.uncache = 1)));
          }
        },
        br = {
          clearProps: function (e, t, n, r, i) {
            if ("isFromStart" !== i.data) {
              var o = (e._pt = new _n(e._pt, t, n, 0, 0, yr));
              return (o.u = r), (o.pr = -10), (o.tween = i), e._props.push(n), 1;
            }
          },
        },
        xr = [1, 0, 0, 1, 0, 0],
        wr = {},
        _r = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        Sr = function (e) {
          var t = rr(e, er);
          return _r(t) ? xr : t.substr(7).match(oe).map(De);
        },
        Tr = function (e, t) {
          var n,
            r,
            i,
            o,
            s = e._gsap || Ae(e),
            a = e.style,
            l = Sr(e);
          return s.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" === (l = [(i = e.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",")
              ? xr
              : l
            : (l !== xr ||
              e.offsetParent ||
              e === Ln ||
              s.svg ||
              ((i = a.display),
                (a.display = "block"),
                ((n = e.parentNode) && e.offsetParent) || ((o = 1), (r = e.nextSibling), Ln.appendChild(e)),
                (l = Sr(e)),
                i ? (a.display = i) : dr(e, "display"),
                o && (r ? n.insertBefore(e, r) : n ? n.appendChild(e) : Ln.removeChild(e))),
              t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
        },
        Cr = function (e, t, n, r, i, o) {
          var s,
            a,
            l,
            c = e._gsap,
            u = i || Tr(e, !0),
            d = c.xOrigin || 0,
            f = c.yOrigin || 0,
            p = c.xOffset || 0,
            h = c.yOffset || 0,
            m = u[0],
            g = u[1],
            v = u[2],
            y = u[3],
            b = u[4],
            x = u[5],
            w = t.split(" "),
            _ = parseFloat(w[0]) || 0,
            S = parseFloat(w[1]) || 0;
          n
            ? u !== xr && (a = m * y - g * v) && ((l = _ * (-g / a) + S * (m / a) - (m * x - g * b) / a), (_ = _ * (y / a) + S * (-v / a) + (v * x - y * b) / a), (S = l))
            : ((_ = (s = cr(e)).x + (~w[0].indexOf("%") ? (_ / 100) * s.width : _)), (S = s.y + (~(w[1] || w[0]).indexOf("%") ? (S / 100) * s.height : S))),
            r || (!1 !== r && c.smooth) ? ((b = _ - d), (x = S - f), (c.xOffset = p + (b * m + x * v) - b), (c.yOffset = h + (b * g + x * y) - x)) : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = _),
            (c.yOrigin = S),
            (c.smooth = !!r),
            (c.origin = t),
            (c.originIsAbsolute = !!n),
            (e.style[tr] = "0px 0px"),
            o && (fr(o, c, "xOrigin", d, _), fr(o, c, "yOrigin", f, S), fr(o, c, "xOffset", p, c.xOffset), fr(o, c, "yOffset", h, c.yOffset)),
            e.setAttribute("data-svg-origin", _ + " " + S);
        },
        kr = function (e, t) {
          var n = e._gsap || new Jt(e);
          if ("x" in n && !t && !n.uncache) return n;
          var r,
            i,
            o,
            s,
            a,
            l,
            c,
            u,
            d,
            f,
            p,
            h,
            m,
            g,
            v,
            y,
            b,
            x,
            w,
            _,
            S,
            T,
            C,
            k,
            A,
            E,
            L,
            D,
            O,
            M,
            P,
            R,
            q = e.style,
            j = n.scaleX < 0,
            I = "px",
            B = "deg",
            H = rr(e, tr) || "0";
          return (
            (r = i = o = l = c = u = d = f = p = 0),
            (s = a = 1),
            (n.svg = !(!e.getCTM || !ur(e))),
            (g = Tr(e, n.svg)),
            n.svg && ((k = (!n.uncache || "0px 0px" === H) && !t && e.getAttribute("data-svg-origin")), Cr(e, k || H, !!k || n.originIsAbsolute, !1 !== n.smooth, g)),
            (h = n.xOrigin || 0),
            (m = n.yOrigin || 0),
            g !== xr &&
            ((x = g[0]),
              (w = g[1]),
              (_ = g[2]),
              (S = g[3]),
              (r = T = g[4]),
              (i = C = g[5]),
              6 === g.length
                ? ((s = Math.sqrt(x * x + w * w)),
                  (a = Math.sqrt(S * S + _ * _)),
                  (l = x || w ? Nn(w, x) * qn : 0),
                  (d = _ || S ? Nn(_, S) * qn + l : 0) && (a *= Math.abs(Math.cos(d * jn))),
                  n.svg && ((r -= h - (h * x + m * _)), (i -= m - (h * w + m * S))))
                : ((R = g[6]),
                  (M = g[7]),
                  (L = g[8]),
                  (D = g[9]),
                  (O = g[10]),
                  (P = g[11]),
                  (r = g[12]),
                  (i = g[13]),
                  (o = g[14]),
                  (c = (v = Nn(R, O)) * qn),
                  v &&
                  ((k = T * (y = Math.cos(-v)) + L * (b = Math.sin(-v))),
                    (A = C * y + D * b),
                    (E = R * y + O * b),
                    (L = T * -b + L * y),
                    (D = C * -b + D * y),
                    (O = R * -b + O * y),
                    (P = M * -b + P * y),
                    (T = k),
                    (C = A),
                    (R = E)),
                  (u = (v = Nn(-_, O)) * qn),
                  v && ((y = Math.cos(-v)), (P = S * (b = Math.sin(-v)) + P * y), (x = k = x * y - L * b), (w = A = w * y - D * b), (_ = E = _ * y - O * b)),
                  (l = (v = Nn(w, x)) * qn),
                  v && ((k = x * (y = Math.cos(v)) + w * (b = Math.sin(v))), (A = T * y + C * b), (w = w * y - x * b), (C = C * y - T * b), (x = k), (T = A)),
                  c && Math.abs(c) + Math.abs(l) > 359.9 && ((c = l = 0), (u = 180 - u)),
                  (s = De(Math.sqrt(x * x + w * w + _ * _))),
                  (a = De(Math.sqrt(C * C + R * R))),
                  (v = Nn(T, C)),
                  (d = Math.abs(v) > 2e-4 ? v * qn : 0),
                  (p = P ? 1 / (P < 0 ? -P : P) : 0)),
              n.svg && ((k = e.getAttribute("transform")), (n.forceCSS = e.setAttribute("transform", "") || !_r(rr(e, er))), k && e.setAttribute("transform", k))),
            Math.abs(d) > 90 && Math.abs(d) < 270 && (j ? ((s *= -1), (d += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((a *= -1), (d += d <= 0 ? 180 : -180))),
            (n.x = r - ((n.xPercent = r && (n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? (e.offsetWidth * n.xPercent) / 100 : 0) + I),
            (n.y = i - ((n.yPercent = i && (n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? (e.offsetHeight * n.yPercent) / 100 : 0) + I),
            (n.z = o + I),
            (n.scaleX = De(s)),
            (n.scaleY = De(a)),
            (n.rotation = De(l) + B),
            (n.rotationX = De(c) + B),
            (n.rotationY = De(u) + B),
            (n.skewX = d + B),
            (n.skewY = f + B),
            (n.transformPerspective = p + I),
            (n.zOrigin = parseFloat(H.split(" ")[2]) || 0) && (q[tr] = Ar(H)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = N.force3D),
            (n.renderTransform = n.svg ? Rr : Pn ? Pr : Lr),
            (n.uncache = 0),
            n
          );
        },
        Ar = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        Er = function (e, t, n) {
          var r = ft(t);
          return De(parseFloat(t) + parseFloat(hr(e, "x", n + "px", r))) + r;
        },
        Lr = function (e, t) {
          (t.z = "0px"), (t.rotationY = t.rotationX = "0deg"), (t.force3D = 0), Pr(e, t);
        },
        Dr = "0deg",
        Or = "0px",
        Mr = ") ",
        Pr = function (e, t) {
          var n = t || this,
            r = n.xPercent,
            i = n.yPercent,
            o = n.x,
            s = n.y,
            a = n.z,
            l = n.rotation,
            c = n.rotationY,
            u = n.rotationX,
            d = n.skewX,
            f = n.skewY,
            p = n.scaleX,
            h = n.scaleY,
            m = n.transformPerspective,
            g = n.force3D,
            v = n.target,
            y = n.zOrigin,
            b = "",
            x = ("auto" === g && e && 1 !== e) || !0 === g;
          if (y && (u !== Dr || c !== Dr)) {
            var w,
              _ = parseFloat(c) * jn,
              S = Math.sin(_),
              T = Math.cos(_);
            (_ = parseFloat(u) * jn), (w = Math.cos(_)), (o = Er(v, o, S * w * -y)), (s = Er(v, s, -Math.sin(_) * -y)), (a = Er(v, a, T * w * -y + y));
          }
          m !== Or && (b += "perspective(" + m + Mr),
            (r || i) && (b += "translate(" + r + "%, " + i + "%) "),
            (x || o !== Or || s !== Or || a !== Or) && (b += a !== Or || x ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + Mr),
            l !== Dr && (b += "rotate(" + l + Mr),
            c !== Dr && (b += "rotateY(" + c + Mr),
            u !== Dr && (b += "rotateX(" + u + Mr),
            (d === Dr && f === Dr) || (b += "skew(" + d + ", " + f + Mr),
            (1 === p && 1 === h) || (b += "scale(" + p + ", " + h + Mr),
            (v.style[er] = b || "translate(0, 0)");
        },
        Rr = function (e, t) {
          var n,
            r,
            i,
            o,
            s,
            a = t || this,
            l = a.xPercent,
            c = a.yPercent,
            u = a.x,
            d = a.y,
            f = a.rotation,
            p = a.skewX,
            h = a.skewY,
            m = a.scaleX,
            g = a.scaleY,
            v = a.target,
            y = a.xOrigin,
            b = a.yOrigin,
            x = a.xOffset,
            w = a.yOffset,
            _ = a.forceCSS,
            S = parseFloat(u),
            T = parseFloat(d);
          (f = parseFloat(f)),
            (p = parseFloat(p)),
            (h = parseFloat(h)) && ((p += h = parseFloat(h)), (f += h)),
            f || p
              ? ((f *= jn),
                (p *= jn),
                (n = Math.cos(f) * m),
                (r = Math.sin(f) * m),
                (i = Math.sin(f - p) * -g),
                (o = Math.cos(f - p) * g),
                p && ((h *= jn), (s = Math.tan(p - h)), (i *= s = Math.sqrt(1 + s * s)), (o *= s), h && ((s = Math.tan(h)), (n *= s = Math.sqrt(1 + s * s)), (r *= s))),
                (n = De(n)),
                (r = De(r)),
                (i = De(i)),
                (o = De(o)))
              : ((n = m), (o = g), (r = i = 0)),
            ((S && !~(u + "").indexOf("px")) || (T && !~(d + "").indexOf("px"))) && ((S = hr(v, "x", u, "px")), (T = hr(v, "y", d, "px"))),
            (y || b || x || w) && ((S = De(S + y - (y * n + b * i) + x)), (T = De(T + b - (y * r + b * o) + w))),
            (l || c) && ((s = v.getBBox()), (S = De(S + (l / 100) * s.width)), (T = De(T + (c / 100) * s.height))),
            (s = "matrix(" + n + "," + r + "," + i + "," + o + "," + S + "," + T + ")"),
            v.setAttribute("transform", s),
            _ && (v.style[er] = s);
        },
        qr = function (e, t, n, r, i, o) {
          var s,
            a,
            l = 360,
            c = Y(i),
            u = parseFloat(i) * (c && ~i.indexOf("rad") ? qn : 1),
            d = o ? u * o : u - r,
            f = r + d + "deg";
          return (
            c &&
            ("short" === (s = i.split("_")[1]) && (d %= l) != d % 180 && (d += d < 0 ? l : -360),
              "cw" === s && d < 0 ? (d = ((d + 36e9) % l) - ~~(d / l) * l) : "ccw" === s && d > 0 && (d = ((d - 36e9) % l) - ~~(d / l) * l)),
            (e._pt = a = new _n(e._pt, t, n, r, d, Un)),
            (a.e = f),
            (a.u = "deg"),
            e._props.push(n),
            a
          );
        },
        jr = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        Nr = function (e, t, n) {
          var r,
            i,
            o,
            s,
            a,
            l,
            c,
            u = jr({}, n._gsap),
            d = n.style;
          for (i in (u.svg
            ? ((o = n.getAttribute("transform")), n.setAttribute("transform", ""), (d[er] = t), (r = kr(n, 1)), dr(n, er), n.setAttribute("transform", o))
            : ((o = getComputedStyle(n)[er]), (d[er] = t), (r = kr(n, 1)), (d[er] = o)),
            Rn))
            (o = u[i]) !== (s = r[i]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
              ((a = ft(o) !== (c = ft(s)) ? hr(n, i, o, c) : parseFloat(o)), (l = parseFloat(s)), (e._pt = new _n(e._pt, r, i, a, l - a, zn)), (e._pt.u = c || 0), e._props.push(i));
          jr(r, u);
        };
      Le("padding,margin,Width,Radius", function (e, t) {
        var n = "Top",
          r = "Right",
          i = "Bottom",
          o = "Left",
          s = (t < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function (n) {
            return t < 2 ? e + n : "border" + n + e;
          });
        br[t > 1 ? "border" + e : e] = function (e, t, n, r, i) {
          var o, a;
          if (arguments.length < 4)
            return (
              (o = s.map(function (t) {
                return mr(e, t, n);
              })),
              5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
            );
          (o = (r + "").split(" ")),
            (a = {}),
            s.forEach(function (e, t) {
              return (a[e] = o[t] = o[t] || o[((t - 1) / 2) | 0]);
            }),
            e.init(t, a, i);
        };
      });
      var Ir,
        Br,
        Hr = {
          name: "css",
          register: sr,
          targetTest: function (e) {
            return e.style && e.nodeType;
          },
          init: function (e, t, n, r, i) {
            var o,
              s,
              a,
              l,
              c,
              u,
              d,
              f,
              p,
              h,
              m,
              g,
              v,
              y,
              b,
              x,
              w,
              _,
              S,
              T = this._props,
              C = e.style,
              k = n.vars.startAt;
            for (d in (Dn || sr(), t))
              if ("autoRound" !== d && ((s = t[d]), !we[d] || !nn(d, t, n, r, e, i)))
                if (((c = typeof s), (u = br[d]), "function" === c && (c = typeof (s = s.call(n, r, e, i))), "string" === c && ~s.indexOf("random(") && (s = _t(s)), u)) u(this, e, d, s, n) && (b = 1);
                else if ("--" === d.substr(0, 2))
                  (o = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
                    (s += ""),
                    (Rt.lastIndex = 0),
                    Rt.test(o) || ((f = ft(o)), (p = ft(s))),
                    p ? f !== p && (o = hr(e, d, o, p) + p) : f && (s += f),
                    this.add(C, "setProperty", o, s, r, i, 0, 0, d),
                    T.push(d);
                else if ("undefined" !== c) {
                  if (
                    (k && d in k
                      ? ((o = "function" == typeof k[d] ? k[d].call(n, r, e, i) : k[d]),
                        d in N.units && !ft(o) && (o += N.units[d]),
                        Y(o) && ~o.indexOf("random(") && (o = _t(o)),
                        "=" === (o + "").charAt(1) && (o = mr(e, d)))
                      : (o = mr(e, d)),
                      (l = parseFloat(o)),
                      (h = "string" === c && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)),
                      (a = parseFloat(s)),
                      d in Fn &&
                      ("autoAlpha" === d && (1 === l && "hidden" === mr(e, "visibility") && a && (l = 0), fr(this, C, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                        "scale" !== d && "transform" !== d && ~(d = Fn[d]).indexOf(",") && (d = d.split(",")[0])),
                      (m = d in Rn))
                  )
                    if (
                      (g ||
                        (((v = e._gsap).renderTransform && !t.parseTransform) || kr(e, t.parseTransform),
                          (y = !1 !== t.smoothOrigin && v.smooth),
                          ((g = this._pt = new _n(this._pt, C, er, 0, 1, v.renderTransform, v, 0, -1)).dep = 1)),
                        "scale" === d)
                    )
                      (this._pt = new _n(this._pt, v, "scaleY", v.scaleY, (h ? h * a : a - v.scaleY) || 0)), T.push("scaleY", d), (d += "X");
                    else {
                      if ("transformOrigin" === d) {
                        (w = void 0),
                          (_ = void 0),
                          (S = void 0),
                          (_ = (w = (x = s).split(" "))[0]),
                          (S = w[1] || "50%"),
                          ("top" !== _ && "bottom" !== _ && "left" !== S && "right" !== S) || ((x = _), (_ = S), (S = x)),
                          (w[0] = vr[_] || _),
                          (w[1] = vr[S] || S),
                          (s = w.join(" ")),
                          v.svg ? Cr(e, s, 0, y, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && fr(this, v, "zOrigin", v.zOrigin, p), fr(this, C, d, Ar(o), Ar(s)));
                        continue;
                      }
                      if ("svgOrigin" === d) {
                        Cr(e, s, 1, y, 0, this);
                        continue;
                      }
                      if (d in wr) {
                        qr(this, v, d, l, s, h);
                        continue;
                      }
                      if ("smoothOrigin" === d) {
                        fr(this, v, "smooth", v.smooth, s);
                        continue;
                      }
                      if ("force3D" === d) {
                        v[d] = s;
                        continue;
                      }
                      if ("transform" === d) {
                        Nr(this, s, e);
                        continue;
                      }
                    }
                  else d in C || (d = or(d) || d);
                  if (m || ((a || 0 === a) && (l || 0 === l) && !Hn.test(s) && d in C))
                    a || (a = 0),
                      (f = (o + "").substr((l + "").length)) !== (p = ft(s) || (d in N.units ? N.units[d] : f)) && (l = hr(e, d, o, p)),
                      (this._pt = new _n(this._pt, m ? v : C, d, l, h ? h * a : a - l, m || ("px" !== p && "zIndex" !== d) || !1 === t.autoRound ? zn : $n)),
                      (this._pt.u = p || 0),
                      f !== p && "%" !== p && ((this._pt.b = o), (this._pt.r = Wn));
                  else if (d in C) gr.call(this, e, d, o, s);
                  else {
                    if (!(d in e)) {
                      he(d, s);
                      continue;
                    }
                    this.add(e, d, o || e[d], s, r, i);
                  }
                  T.push(d);
                }
            b && wn(this);
          },
          get: mr,
          aliases: Fn,
          getSetter: function (e, t, n) {
            var r = Fn[t];
            return (
              r && r.indexOf(",") < 0 && (t = r),
              t in Rn && t !== tr && (e._gsap.x || mr(e, "x")) ? (n && Mn === n ? ("scale" === t ? Qn : Jn) : (Mn = n || {}) && ("scale" === t ? Kn : Zn)) : e.style && !Q(e.style[t]) ? Yn : ~t.indexOf("-") ? Gn : pn(e, t)
            );
          },
          core: { _removeProperty: dr, _getMatrix: Tr },
        };
      (kn.utils.checkPrefix = or),
        (Br = Le("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Ir = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (e) {
          Rn[e] = 1;
        })),
        Le(Ir, function (e) {
          (N.units[e] = "deg"), (wr[e] = 1);
        }),
        (Fn[Br[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Ir),
        Le("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (e) {
          var t = e.split(":");
          Fn[t[1]] = Br[t[0]];
        }),
        Le("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (e) {
          N.units[e] = "px";
        }),
        kn.registerPlugin(Hr);
      var Fr,
        zr,
        Ur,
        Wr,
        $r = kn.registerPlugin(Hr) || kn,
        Vr =
          ($r.core.Tween,
          {
            home: (function () {
              var t = $r.timeline({ defaults: { opacity: 0, ease: "none" } });
              t.from(".home__title-svg0", { duration: 0.3, opacity: 0 });
              for (var n = 1; n <= 37; n++) t.from(".home__title-svg" + n, { duration: e.home.titleSpeed });
              return t.from(".home__title-svg39", { duration: 0.3, opacity: 0 }), t.from(".home__header", { duration: 0.3, opacity: 0 }, "-=1"), t.pause(), t;
            })(),
            aboutUs:
              ((Wr = $r.timeline({ defaults: { opacity: 0, ease: "back" } })),
                Wr.from(".aboutUs-left__bracket", { duration: 1, opacity: 0, delay: e.aboutUs.delay })
                  .from(".aboutUs-title1", { stagger: 0.15, duration: e.aboutUs.titleSpeed, opacity: 0, delay: 0 }, "-=0.1")
                  .from(".aboutUs-right__bracket", { duration: 1, opacity: 0 }, "-=0.1")
                  .from(".aboutUs-arrow", { duration: 0.5, xPercent: -50, opacity: 0, ease: "none" }, "-=0.1")
                  .from(".aboutUs-spider", { stagger: 0.55, yPercent: 50, opacity: 0, duration: 1 }, "-=0.1")
                  .from(".aboutUs-works__right", { stagger: 0.1, duration: 3, opacity: 0 }, "-=0.1")
                  .from(".aboutUs-body-text", { duration: 3, opacity: 0 }, 1),
                Wr.pause(),
                Wr),
            project: (function () {
              var t = $r.timeline({ defaults: { opacity: 0, ease: "back" } });
              t.from(".project-leftSvg__bracket", { duration: 0.5, opacity: 0, delay: e.projects.delay });
              for (var n = 1; n <= 17; n++) t.from(".project-title" + n, { duration: e.projects.titleSpeed, opacity: 0 });
              return (
                t
                  .from(".project__rectangle", { duration: 1.5, xPercent: -100, opacity: 0, delay: 0.1 })
                  .from("#Group_936", { duration: 1.5, xPercent: -100, opacity: 0 }, "<")
                  .from(".project-rightSvg__bracket", { duration: 2, opacity: 0 })
                  .from(".swiper__lg", { duration: 3, opacity: 0 }, "1")
                  .from(".project-works__right", { stagger: 0.1, duration: 3, opacity: 0 })
                  .from(".rocket", { duration: 1.5, y: 700 }, "1")
                  .to(".project__helicopter", { duration: 18, yPercent: -800 }, "<"),
                t.pause(),
                t
              );
            })(),
            services: (function () {
              var t = $r.timeline({ defaults: { opacity: 0, ease: "back" } });
              t.from(".services-svg__column", { duration: 1, opacity: 0, delay: e.services.delay });
              for (var n = 1; n <= 25; n++) t.from(".services-svg" + n, { duration: e.services.titleSpeed, opacity: 0 });
              return (
                t
                  .from(".servicesSvg1", { stagger: 0.1, duration: 0.3, opacity: 0 })
                  .from(".services__blackhead", { duration: 2, yPercent: -50, opacity: 0 })
                  .from(".services-head__icon", { duration: 2, yPercent: 30, opacity: 0 }, "<")
                  .from(".worksJustRight", { stagger: 0.1, duration: 3, opacity: 0 })
                  .from(".service--body-text", { stagger: 0.5, yPercent: 50, duration: 0.5, opacity: 0, ease: "none" }, 1)
                  .then(function () {
                    document.querySelector(".services-body__right").style.overflowY = "auto";
                  }),
                t.pause(),
                t
              );
            })(),
            contact: (function () {
              var t = $r.timeline({ defaults: { opacity: 0, ease: "back" } });
              t.from(".contact-leftSvg__bracket", { duration: 0.5, opacity: 0, delay: e.contact.delay });
              for (var n = 1; n <= 24; n++) t.from(".contact-title" + n, { duration: e.contact.titleSpeed, opacity: 0 });
              return (
                t
                  .from(".contact-rightSvg__bracket", { duration: 1, opacity: 0 })
                  .from(".contact__ellipse", { duration: 2, yPercent: -30, opacity: 0 }, "-=0.4")
                  .from(".contact-works__right", { stagger: 0.1, duration: 3, opacity: 0 }, "-=1")
                  .from(".contact__ayes", { duration: 0.5, xPercent: 100, opacity: 0 }, "<")
                  .from(".contact__info", { duration: 3, opacity: 0 }, "1")
                  .from(".map__container", { duration: 3, opacity: 0 }, "1")
                  .from(".contact-rectangle", { duration: 0.5, xPercent: -30, opacity: 0 }, "<"),
                t.pause(),
                t
              );
            })(),
            blogs:
              ((Ur = $r.timeline({ defaults: { opacity: 0, ease: "back" } })),
                Ur.from(".glass", { duration: 1.5, x: -700 })
                  .from(".glass1", { duration: 1.5, x: 700 }, "<")
                  .from(".blogDiv", { duration: 0.1, stagger: 0.3, y: -500, opacity: 0 })
                  .from(".learnToCode", { duration: 3.3, y: 500, opacity: 0, ease: "elastic.out(1, 0.3)" }),
                Ur.pause(),
                Ur),
            careers:
              ((zr = $r.timeline({ defaults: { opacity: 0, ease: "back" } })),
                zr
                  .from(".careersLeftSvg1", { duration: 1.3, x: -700 })
                  .from(".careersLeftSvg2", { duration: 1.9, y: 500, opacity: 0, ease: "elastic.out(1, 0.3)" })
                  .from(".careerDiv", { stagger: 0.3, duration: 0.7, y: 377, opacity: 0 }, "<"),
                zr.pause(),
                zr),
          }),
        Xr = (function () {
          var e = $r.timeline();
          e.from(".services-body__left", { duration: 1, x: -500, opacity: 0 }).from(".services-body__right", { duration: 1, x: 500, opacity: 0 }, "<");
          var t = $r.timeline();
          t.from(".aboutUs-body__left", { duration: 1, x: -500, opacity: 0 }).from(".aboutUs-body__right", { duration: 1, x: 500, opacity: 0 }, "<");
          var n = $r.timeline();
          n.from(".project-body__left", { duration: 1, x: -500, opacity: 0 }).from(".project-body__right", { duration: 1, x: 500, opacity: 0 }, "<");
          var r = $r.timeline();
          r.from(".customers-left__slide", { duration: 1.5, x: 1300 }).from(".customers-right__slide", { duration: 1.5, x: -1300 }, "<");
          var i = $r.timeline();
          i.from(".contact-body__left", { duration: 1, x: -500, opacity: 0 }).from(".contact-body__right", { duration: 1, x: 500, opacity: 0 }, "<");
          var o = $r.timeline();
          o.from(".blogs-body__left", { duration: 1, x: -1e3 }).from(".blogs-body__right", { duration: 1, x: 1e3 }, "<");
          var s = $r.timeline();
          return (
            s.from(".careers-body__left", { duration: 1, x: -1e3 }).from(".careers-body__right", { duration: 1, x: 1e3 }, "<"),
            { servicesAnim: e, aboutUsAnim: t, projectAnim: n, customersAnim: r, contactAnim: i, blogsAnim: o, careersAnim: s }
          );
        })(),
        Yr = function (e, t) {
          Object.keys(e).map(function (n) {
            e[n][t]();
          });
        };
      function Gr(e) {
        e.matches
          ? ((Fr = !1),
            Object.keys(Vr).map(function (e) {
              Vr[e].totalProgress(1).kill();
            }),
            Yr(Xr, "restart"))
          : (Yr(Xr, "restart"), (Fr = !0));
      }
      var Jr = window.matchMedia("(max-width: 1200px)");
      function Qr(e, t) {
        document.querySelector(e).addEventListener("mouseenter", function () {
          Array.from(document.getElementsByClassName(t)).forEach(function (e) {
            e.style.opacity = "1";
          });
        }),
          document.querySelector(e).addEventListener("mouseleave", function () {
            Array.from(document.getElementsByClassName(t)).forEach(function (e) {
              e.style.opacity = "0";
            });
          });
      }
      function Kr(e, t, n, r, i, o, s) {
        document.querySelector(e).addEventListener("click", function () {
          Xr.servicesAnim.restart();
        }),
          document.querySelector(t).addEventListener("click", function () {
            Xr.projectAnim.restart();
          }),
          document.querySelector(n).addEventListener("click", function () {
            Xr.customersAnim.restart();
          }),
          document.querySelector(r).addEventListener("click", function () {
            Xr.contactAnim.restart();
          }),
          document.querySelector(i).addEventListener("click", function () {
            Xr.aboutUsAnim.restart();
          }),
          document.querySelector(o).addEventListener("click", function () {
            Xr.blogsAnim.restart();
          }),
          document.querySelector(s).addEventListener("click", function () {
            Xr.careersAnim.restart();
          });
      }
      Gr(Jr),
        Jr.addListener(Gr),
        Qr(".nav-home", "home-hover"),
        Qr(".nav-services", "services-hover"),
        Qr(".nav-blogs", "blogs-hover"),
        Qr(".nav-careers", "careers-hover"),
        Qr(".nav-projects", "projects-hover"),
        Qr(".nav-customers", "customers-hover"),
        Qr(".nav-contact", "contact-hover"),
        Qr(".nav-aboutUs", "aboutUs-hover"),
        Array.from(document.getElementsByClassName("header__menu")).forEach(function (e) {
          e.addEventListener("click", function () {
            document.querySelector(".section__navigation").style.display = "block";
          });
        }),
        document.querySelector(".section__navigation-close").addEventListener("click", function () {
          (document.querySelector(".section__navigation").style.display = "none"), Vr.home.resume();
        }),
        Array.from(document.getElementsByClassName("mnav-close")).forEach(function (e) {
          e.addEventListener("click", function () {
            document.querySelector(".section__navigation").style.display = "none";
          });
        }),
        Kr(".nav-services", ".nav-projects", ".nav-customers", ".nav-contact", ".nav-aboutUs", ".nav-blogs", ".nav-careers"),
        Kr(".navigator--services", ".navigator--projects", ".navigator--customers", ".navigator--contact", ".navigator--aboutUs", ".navigator--blogs", ".navigator--careers"),
        n(170);
      var Zr = n(20);
      Zr.stringify,
        Zr.fromJSON,
        Zr.plugin,
        Zr.parse,
        Zr.list,
        Zr.document,
        Zr.comment,
        Zr.atRule,
        Zr.rule,
        Zr.decl,
        Zr.root,
        Zr.CssSyntaxError,
        Zr.Declaration,
        Zr.Container,
        Zr.Document,
        Zr.Comment,
        Zr.Warning,
        Zr.AtRule,
        Zr.Result,
        Zr.Input,
        Zr.Rule,
        Zr.Root,
        Zr.Node,
        (window.$ = window.jQuery = n(755));
      var ei = [
        { index: 1, direction: "down", secIndex: 3, secDirection: "up", animation: "aboutUsAnim", method: "restart" },
        { index: 2, direction: "down", secIndex: 2, secDirection: "up", animation: "aboutUsAnim", method: "reverse" },
        { index: 2, direction: "down", secIndex: 4, secDirection: "up", animation: "servicesAnim", method: "restart" },
        { index: 3, direction: "down", secIndex: 3, secDirection: "up", animation: "servicesAnim", method: "reverse" },
        { index: 3, direction: "down", secIndex: 5, secDirection: "up", animation: "projectAnim", method: "restart" },
        { index: 4, direction: "down", secIndex: 4, secDirection: "up", animation: "projectAnim", method: "reverse" },
        { index: 4, direction: "down", secIndex: 6, secDirection: "up", animation: "blogsAnim", method: "restart" },
        { index: 5, direction: "down", secIndex: 5, secDirection: "up", animation: "blogsAnim", method: "reverse" },
        { index: 5, direction: "down", secIndex: 7, secDirection: "up", animation: "careersAnim", method: "restart" },
        { index: 6, direction: "down", secIndex: 6, secDirection: "up", animation: "careersAnim", method: "reverse" },
        { index: 6, direction: "down", secIndex: 8, secDirection: "up", animation: "customersAnim", method: "restart" },
        { index: 7, direction: "down", secIndex: 7, secDirection: "up", animation: "customersAnim", method: "reverse" },
        { index: 7, direction: "down", secIndex: 9, secDirection: "up", animation: "contactAnim", method: "restart" },
        { index: 8, direction: "down", secIndex: 8, secDirection: "up", animation: "contactAnim", method: "reverse" },
      ];
      document.querySelector(".loading__logo-right").addEventListener("animationend", function () {
        $.fn.fullpage.setAllowScrolling(!0), (document.querySelector(".loading").style.display = "none"), Vr.home.resume();
      }),
        new Swiper(".swiper__lg", { loop: !0, pagination: { clickable: !0, el: ".swiper-pagination", dynamicBullets: !0 } }),
        new Swiper(".swiper-mobile__container", { loop: !0, direction: "vertical", pagination: { clickable: !0, el: ".mobile__pagination", dynamicBullets: !0 } }),
        $("#fullPage").fullpage({
          scrollingSpeed: e.scrollSpeed,
          normalScrollElements: ".aboutUs-body-text, .services-body__right, .swiper-mobile__container, .section__navigation .blogsArea .careersArea",
          afterLoad: function (e, t) {
            if (($(this), Fr))
              switch (t) {
                case 1:
                  break;
                case 2:
                  Vr.aboutUs.resume();
                  break;
                case 3:
                  Vr.services.resume();
                  break;
                case 4:
                  Vr.project.resume();
                  break;
                case 5:
                  Vr.blogs.resume();
                  break;
                case 6:
                  Vr.careers.resume();
                  break;
                case 7:
                  Xr.customersAnim.resume();
                  break;
                case 8:
                  Vr.contact.resume();
              }
          },
          onLeave: function (e, t, n) {
            $(this),
              Fr &&
              ei.map(function (t) {
                ((e === t.index && n === t.direction) || (e === t.secIndex && n === t.secDirection)) && Xr[t.animation][t.method]();
              });
          },
        }),
        $.fn.fullpage.setAllowScrolling(!1),
        document.querySelector(".customers__names");
      var ti = document.querySelector(".services-body__right"),
        ni = document.querySelector(".aboutUs-body-text"),
        ri = document.querySelector(".blogsArea"),
        ii = document.querySelector(".careersArea");
      function oi(e) {
        e.addEventListener(
          "wheel",
          function () {
            e.scrollHeight - 25 > e.clientHeight ? $.fn.fullpage.setAllowScrolling(!1) : $.fn.fullpage.setAllowScrolling(!0);
          },
          !1
        ),
          e.addEventListener("mouseleave", function () {
            $.fn.fullpage.setAllowScrolling(!0);
          });
      }
      oi(ni),
        oi(ti),
        oi(ri),
        oi(ii),
        window.location.replace("#"),
        "function" == typeof window.history.replaceState && history.replaceState({}, "", window.location.href.slice(0, -1)),
        (jQuery.event.special.touchstart = {
          setup: function (e, t, n) {
            this.addEventListener("touchstart", n, { passive: !t.includes("noPreventDefault") });
          },
        });
      var si = document.querySelectorAll(".blogDiv");
      si.forEach(function (e) {
        var t = e.querySelector(".blogBtn"),
          n = e.querySelector(".dots");
        t.addEventListener("click", function () {
          e.classList.toggle("readMore"),
            n.classList.toggle("nonDisplay"),
            si.forEach(function (t) {
              t !== e && t.classList.toggle("nonDisplay");
            }),
            "Read more" === t.innerText ? (t.innerText = "Read less") : (t.innerText = "Read more");
        });
      });
      var ai = document.querySelectorAll(".careerDiv");
      ai.forEach(function (e) {
        var t,
          n = e.querySelector(".careerBtn"),
          r = e.querySelector(".listDiv"),
          i = e.querySelector(".resumeDiv"),
          o = e.querySelector(".backButton"),
          s = e.querySelector(".sendResumeBtn"),
          a = e.querySelector(".dragInput"),
          l = e.querySelector(".dragFileHere"),
          c = e.querySelector(".fileDiv"),
          u = e.querySelector(".forOpacity");
        n.addEventListener("click", function () {
          r.classList.toggle("nonDisplay"), i.classList.remove("nonDisplay"), (u.style.display = "none");
        }),
          o.addEventListener("click", function () {
            r.classList.remove("nonDisplay"),
              i.classList.toggle("nonDisplay"),
              (l.innerHTML = "Drag file here"),
              (l.style.color = "white"),
              (a.value = null),
              (c.style.border = "2px dashed #ffffff"),
              (c.style.backgroundColor = "#131c1b"),
              (u.style.display = "block"),
              (u.style.opacity = "0");
          }),
          a.addEventListener("change", function (n) {
            var o = new FileReader();
            o.readAsDataURL(a.files[0]),
              o.addEventListener("load", function (n) {
                (t = o.result),
                  s.addEventListener("click", function (z) {
                    var n = e.querySelector(".dragInput"),
                      o = e.querySelector(".title").innerHTML,
                      s = e.querySelector(".mailInput").value,
                      d = e.querySelector(".message");
                    if (s && n.files.length && n.files[0].size <= 15e6) {
                      var f = { mail: s, title: o, attachments: [{ data: t, fileName: n.files[0] }] };
                      z.preventDefault();
                      console.log(z);
                      $('.alert').removeClass('fadeOutDown fadeInUp').addClass('hidden');
                      $('.contactform').addClass('busy');
                      $('.contactform button').attr('disabled', 'disabled');

                      var post_data = {
                        "name": o,
                        "email": s,
                        "message": "Send Mail Test from new script"
                      };
                      var request = $.ajax({
                        url: "mailsend.php",
                        type: "post",
                        headers: {
                          "accept": "application/json",
                          "Access-Control-Allow-Origin": "*"
                        },
                        crossDomain: true,
                        data: post_data,
                        cache: false,
                        dataType: "jsonp",
                        async: true,
                      })
                      request.done(function (data) {
                        // Log a message to the console
                        console.log("Hooray, it worked!", data);
                      });

                      // Callback handler that will be called on failure
                      request.fail(function (jqXHR, textStatus, errorThrown) {
                        // Log the error to the console
                        console.error(
                          "The following error occurred: " +
                          textStatus, errorThrown
                        );
                      })
                      // $.post('mailsend.php', post_data, function(response){
                      //     console.log("test", post_data)
                      //     if(response.type == 'error'){
                      //         $('.alert.error')
                      //             .show()
                      //             .removeClass('hidden fadeOutDown')
                      //             .addClass('fadeInUp')
                      //             .find('.msg').html(response.text);
                      //     } else {
                      //         $('.alert.success')
                      //             .show()
                      //             .removeClass('hidden fadeOutDown')
                      //             .addClass('fadeInUp')
                      //             .find('.msg').html(response.text);
                      //         $('.contactform input, .contactform textarea').val('');
                      //     }

                      //     $('.contactform').removeClass('busy');
                      //     $('.contactform button').removeAttr('disabled');
                      // }, 'json');

                      // Email.send({
                      //     SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
                      //     To : 'gugazhorzholiani1@gmial.com',
                      //     From : "you@isp.com",
                      //     Subject : "This is the subject",
                      //     Body : "And this is the body",
                      //     Attachments : [
                      //     {
                      //         name : "smtpjs.png",
                      //         path:"https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
                      //     }]
                      // }).then(
                      //     message => alert(message)
                      // );
                      // console.log(f),
                      r.classList.remove("nonDisplay"),
                        i.classList.toggle("nonDisplay"),
                        (l.innerHTML = "Drag file here"),
                        (l.style.color = "white"),
                        (a.value = null),
                        (c.style.border = "2px dashed #ffffff"),
                        (u.style.opacity = "0"),
                        (c.style.backgroundColor = "#131c1b"),
                        d.classList.remove("nonDisplay"),
                        setTimeout(function () {
                          d.classList.add("nonDisplay");
                        }, 3e3),
                        (e.querySelector(".mailInput").value = "");
                    }
                  });
              });
          });
      }),
        ai.forEach(function (e) {
          var t = e.querySelector(".dragInput"),
            n = e.querySelector(".listDiv"),
            r = e.querySelector(".resumeDiv"),
            i = e.querySelector(".dragFileHere"),
            o = e.querySelector(".fileDiv"),
            s = e.querySelector(".forOpacity");
          t.addEventListener("change", function (e) {
            e.preventDefault(), n.classList.add("nonDisplay"), r.classList.remove("nonDisplay");
            var a = t.files[0].name;
            (i.innerHTML = a), (o.style.border = "1px solid"), (s.style.opacity = "0"), (o.style.backgroundColor = "#48bfae"), (i.style.color = "black");
          });
          var a = e.querySelector(".dragInputDiv");
          a.addEventListener("dragover", function () {
            (s.style.opacity = "0.7"), (o.style.backgroundColor = "#48bfae"), (i.style.color = "black");
          }),
            a.addEventListener("dragleave", function () {
              (s.style.opacity = "0"), (o.style.backgroundColor = "#131c1b"), (i.style.color = "white");
            }),
            a.addEventListener("drop", function () {
              (s.style.opacity = "0"), (s.style.display = "none");
            });
        }),
        n(586);
    })();
})();
//# sourceMappingURL=main.js.map
