/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function() {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(),
function(o) {
    "use strict";
    o.fn.emulateTransitionEnd = function(t) {
        var e = !1,
            i = this;
        o(this).one("bsTransitionEnd", function() {
            e = !0
        });
        return setTimeout(function() {
            e || o(i).trigger(o.support.transition.end)
        }, t), this
    }, o(function() {
        o.support.transition = function() {
            var t, e = document.createElement("bootstrap"),
                i = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (t in i)
                if (void 0 !== e.style[t]) return {
                    end: i[t]
                };
            return !1
        }(), o.support.transition && (o.event.special.bsTransitionEnd = {
            bindType: o.support.transition.end,
            delegateType: o.support.transition.end,
            handle: function(t) {
                return o(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function(s) {
    "use strict";

    function a(t) {
        s(t).on("click", e, this.close)
    }
    var e = '[data-dismiss="alert"]';
    a.VERSION = "3.3.5", a.TRANSITION_DURATION = 150, a.prototype.close = function(t) {
        function e() {
            n.detach().trigger("closed.bs.alert").remove()
        }
        var i = s(this),
            o = i.attr("data-target");
        o || (o = (o = i.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
        var n = s(o);
        t && t.preventDefault(), n.length || (n = i.closest(".alert")), n.trigger(t = s.Event("close.bs.alert")), t.isDefaultPrevented() || (n.removeClass("in"), s.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", e).emulateTransitionEnd(a.TRANSITION_DURATION) : e())
    };
    var t = s.fn.alert;
    s.fn.alert = function(i) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.alert");
            e || t.data("bs.alert", e = new a(this)), "string" == typeof i && e[i].call(t)
        })
    }, s.fn.alert.Constructor = a, s.fn.alert.noConflict = function() {
        return s.fn.alert = t, this
    }, s(document).on("click.bs.alert.data-api", e, a.prototype.close)
}(jQuery),
function(s) {
    "use strict";

    function i(o) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.button"),
                i = "object" == typeof o && o;
            e || t.data("bs.button", e = new n(this, i)), "toggle" == o ? e.toggle() : o && e.setState(o)
        })
    }
    var n = function(t, e) {
        this.$element = s(t), this.options = s.extend({}, n.DEFAULTS, e), this.isLoading = !1
    };
    n.VERSION = "3.3.5", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var e = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            n = i.data();
        t += "Text", null == n.resetText && i.data("resetText", i[o]()), setTimeout(s.proxy(function() {
            i[o]((null == n[t] ? this.options : n)[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t, e = !0,
            i = this.$element.closest('[data-toggle="buttons"]');
        i.length ? ("radio" == (t = this.$element.find("input")).prop("type") ? (t.prop("checked") && (e = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == t.prop("type") && (t.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), t.prop("checked", this.$element.hasClass("active")), e && t.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    };
    var t = s.fn.button;
    s.fn.button = i, s.fn.button.Constructor = n, s.fn.button.noConflict = function() {
        return s.fn.button = t, this
    }, s(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var e = s(t.target);
        e.hasClass("btn") || (e = e.closest(".btn")), i.call(e, "toggle"), s(t.target).is('input[type="radio"]') || s(t.target).is('input[type="checkbox"]') || t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        s(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function(h) {
    "use strict";

    function n(n) {
        return this.each(function() {
            var t = h(this),
                e = t.data("bs.carousel"),
                i = h.extend({}, d.DEFAULTS, t.data(), "object" == typeof n && n),
                o = "string" == typeof n ? n : i.slide;
            e || t.data("bs.carousel", e = new d(this, i)), "number" == typeof n ? e.to(n) : o ? e[o]() : i.interval && e.pause().cycle()
        })
    }

    function d(t, e) {
        this.$element = h(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", h.proxy(this.keydown, this)), "hover" != this.options.pause || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", h.proxy(this.pause, this)).on("mouseleave.bs.carousel", h.proxy(this.cycle, this))
    }
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 600, d.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, d.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, d.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(h.proxy(this.next, this), this.options.interval)), this
    }, d.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, d.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        t = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(t)
    }, d.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || t < 0 ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(i < t ? "next" : "prev", this.$items.eq(t))
    }, d.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && h.support.transition && (this.$element.trigger(h.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, d.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, d.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, d.prototype.slide = function(t, e) {
        var i = this.$element.find(".item.active"),
            o = e || this.getItemForDirection(t, i),
            n = this.interval,
            s = "next" == t ? "left" : "right",
            a = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var r = o[0],
            e = h.Event("slide.bs.carousel", {
                relatedTarget: r,
                direction: s
            });
        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
            this.sliding = !0, n && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), (e = h(this.$indicators.children()[this.getItemIndex(o)])) && e.addClass("active"));
            var l = h.Event("slid.bs.carousel", {
                relatedTarget: r,
                direction: s
            });
            return h.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function() {
                o.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), a.sliding = !1, setTimeout(function() {
                    a.$element.trigger(l)
                }, 0)
            }).emulateTransitionEnd(d.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(l)), n && this.cycle(), this
        }
    };
    var t = h.fn.carousel;

    function e(t) {
        var e, i = h(this),
            o = h(i.attr("data-target") || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
        o.hasClass("carousel") && (e = h.extend({}, o.data(), i.data()), (i = i.attr("data-slide-to")) && (e.interval = !1), n.call(o, e), i && o.data("bs.carousel").to(i), t.preventDefault())
    }
    h.fn.carousel = n, h.fn.carousel.Constructor = d, h.fn.carousel.noConflict = function() {
        return h.fn.carousel = t, this
    }, h(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), h(window).on("load", function() {
        h('[data-ride="carousel"]').each(function() {
            var t = h(this);
            n.call(t, t.data())
        })
    })
}(jQuery),
function(n) {
    "use strict";

    function i(t) {
        var e = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
        return n(e)
    }

    function s(o) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.collapse"),
                i = n.extend({}, a.DEFAULTS, t.data(), "object" == typeof o && o);
            !e && i.toggle && /show|hide/.test(o) && (i.toggle = !1), e || t.data("bs.collapse", e = new a(this, i)), "string" == typeof o && e[o]()
        })
    }
    var a = function(t, e) {
        this.$element = n(t), this.options = n.extend({}, a.DEFAULTS, e), this.$trigger = n('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    a.VERSION = "3.3.5", a.TRANSITION_DURATION = 350, a.DEFAULTS = {
        toggle: !0
    }, a.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, a.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(t && t.length && ((o = t.data("bs.collapse")) && o.transitioning))) {
                var e = n.Event("show.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    t && t.length && (s.call(t, "hide"), o || t.data("bs.collapse", null));
                    var i = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var o = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!n.support.transition) return o.call(this);
                    t = n.camelCase(["scroll", i].join("-"));
                    this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(a.TRANSITION_DURATION)[i](this.$element[0][t])
                }
            }
        }
    }, a.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = n.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                t = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return n.support.transition ? void this.$element[e](0).one("bsTransitionEnd", n.proxy(t, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : t.call(this)
            }
        }
    }, a.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, a.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, e) {
            e = n(e);
            this.addAriaAndCollapsedClass(i(e), e)
        }, this)).end()
    }, a.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var t = n.fn.collapse;
    n.fn.collapse = s, n.fn.collapse.Constructor = a, n.fn.collapse.noConflict = function() {
        return n.fn.collapse = t, this
    }, n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var e = n(this);
        e.attr("data-target") || t.preventDefault();
        t = i(e), e = t.data("bs.collapse") ? "toggle" : e.data();
        s.call(t, e)
    })
}(jQuery),
function(n) {
    "use strict";

    function s(t) {
        var e = t.attr("data-target");
        e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
        e = e && n(e);
        return e && e.length ? e : t.parent()
    }

    function a(o) {
        o && 3 === o.which || (n(".dropdown-backdrop").remove(), n(r).each(function() {
            var t = n(this),
                e = s(t),
                i = {
                    relatedTarget: this
                };
            e.hasClass("open") && (o && "click" == o.type && /input|textarea/i.test(o.target.tagName) && n.contains(e[0], o.target) || (e.trigger(o = n.Event("hide.bs.dropdown", i)), o.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", i))))
        }))
    }

    function o(t) {
        n(t).on("click.bs.dropdown", this.toggle)
    }
    var r = '[data-toggle="dropdown"]';
    o.VERSION = "3.3.5", o.prototype.toggle = function(t) {
        var e = n(this);
        if (!e.is(".disabled, :disabled")) {
            var i = s(e),
                o = i.hasClass("open");
            if (a(), !o) {
                "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", a);
                o = {
                    relatedTarget: this
                };
                if (i.trigger(t = n.Event("show.bs.dropdown", o)), t.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger("shown.bs.dropdown", o)
            }
            return !1
        }
    }, o.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var e = n(this);
            if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
                var i = s(e),
                    o = i.hasClass("open");
                if (!o && 27 != t.which || o && 27 == t.which) return 27 == t.which && i.find(r).trigger("focus"), e.trigger("click");
                e = i.find(".dropdown-menu li:not(.disabled):visible a");
                e.length && (i = e.index(t.target), 38 == t.which && 0 < i && i--, 40 == t.which && i < e.length - 1 && i++, ~i || (i = 0), e.eq(i).trigger("focus"))
            }
        }
    };
    var t = n.fn.dropdown;
    n.fn.dropdown = function(i) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.dropdown");
            e || t.data("bs.dropdown", e = new o(this)), "string" == typeof i && e[i].call(t)
        })
    }, n.fn.dropdown.Constructor = o, n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = t, this
    }, n(document).on("click.bs.dropdown.data-api", a).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery),
function(s) {
    "use strict";

    function n(o, n) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.modal"),
                i = s.extend({}, a.DEFAULTS, t.data(), "object" == typeof o && o);
            e || t.data("bs.modal", e = new a(this, i)), "string" == typeof o ? e[o](n) : i.show && e.show(n)
        })
    }

    function a(t, e) {
        this.options = e, this.$body = s(document.body), this.$element = s(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, s.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    }
    a.VERSION = "3.3.5", a.TRANSITION_DURATION = 300, a.BACKDROP_TRANSITION_DURATION = 150, a.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, a.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, a.prototype.show = function(i) {
        var o = this,
            t = s.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', s.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            o.$element.one("mouseup.dismiss.bs.modal", function(t) {
                s(t.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var t = s.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), t && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var e = s.Event("shown.bs.modal", {
                relatedTarget: i
            });
            t ? o.$dialog.one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(a.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(e)
        }))
    }, a.prototype.hide = function(t) {
        t && t.preventDefault(), t = s.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), s(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), s.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", s.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
    }, a.prototype.enforceFocus = function() {
        s(document).off("focusin.bs.modal").on("focusin.bs.modal", s.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, a.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", s.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, a.prototype.resize = function() {
        this.isShown ? s(window).on("resize.bs.modal", s.proxy(this.handleUpdate, this)) : s(window).off("resize.bs.modal")
    }, a.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, a.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, a.prototype.backdrop = function(t) {
        var e, i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        this.isShown && this.options.backdrop ? (e = s.support.transition && o, this.$backdrop = s(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", s.proxy(function(t) {
            return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), t && (e ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : t())) : !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e = function() {
            i.removeBackdrop(), t && t()
        }, s.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : e()) : t && t()
    }, a.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, a.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, a.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, a.prototype.checkScrollbar = function() {
        var t, e = window.innerWidth;
        e || (e = (t = document.documentElement.getBoundingClientRect()).right - Math.abs(t.left)), this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, a.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, a.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, a.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var t = s.fn.modal;
    s.fn.modal = n, s.fn.modal.Constructor = a, s.fn.modal.noConflict = function() {
        return s.fn.modal = t, this
    }, s(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var e = s(this),
            i = e.attr("href"),
            o = s(e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            i = o.data("bs.modal") ? "toggle" : s.extend({
                remote: !/#/.test(i) && i
            }, o.data(), e.data());
        e.is("a") && t.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                e.is(":visible") && e.trigger("focus")
            })
        }), n.call(o, i, this)
    })
}(jQuery),
function(l) {
    "use strict";

    function h(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    }
    h.VERSION = "3.3.5", h.TRANSITION_DURATION = 150, h.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, h.prototype.init = function(t, e, i) {
        if (this.enabled = !0, this.type = t, this.$element = l(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && l(l.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), n = o.length; n--;) {
            var s, a = o[n];
            "click" == a ? this.$element.on("click." + this.type, this.options.selector, l.proxy(this.toggle, this)) : "manual" != a && (s = "hover" == a ? "mouseenter" : "focusin", a = "hover" == a ? "mouseleave" : "focusout", this.$element.on(s + "." + this.type, this.options.selector, l.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, l.proxy(this.leave, this)))
        }
        this.options.selector ? this._options = l.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, h.prototype.getDefaults = function() {
        return h.DEFAULTS
    }, h.prototype.getOptions = function(t) {
        return (t = l.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, h.prototype.getDelegateOptions = function() {
        var i = {},
            o = this.getDefaults();
        return this._options && l.each(this._options, function(t, e) {
            o[t] != e && (i[t] = e)
        }), i
    }, h.prototype.enter = function(t) {
        var e = t instanceof this.constructor ? t : l(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), l(t.currentTarget).data("bs." + this.type, e)), t instanceof l.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState ? void(e.hoverState = "in") : (clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void(e.timeout = setTimeout(function() {
            "in" == e.hoverState && e.show()
        }, e.options.delay.show)) : e.show())
    }, h.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, h.prototype.leave = function(t) {
        var e = t instanceof this.constructor ? t : l(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), l(t.currentTarget).data("bs." + this.type, e)), t instanceof l.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), e.isInStateTrue() ? void 0 : (clearTimeout(e.timeout), e.hoverState = "out", e.options.delay && e.options.delay.hide ? void(e.timeout = setTimeout(function() {
            "out" == e.hoverState && e.hide()
        }, e.options.delay.hide)) : e.hide())
    }, h.prototype.show = function() {
        var e, t, i, o, n, s, a, r = l.Event("show.bs." + this.type);
        this.hasContent() && this.enabled && (this.$element.trigger(r), i = l.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), !r.isDefaultPrevented() && i && (t = (e = this).tip(), s = this.getUID(this.type), this.setContent(), t.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && t.addClass("fade"), a = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, (n = (o = /\s?auto?\s?/i).test(a)) && (a = a.replace(o, "") || "top"), t.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(a).data("bs." + this.type, this), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type), r = this.getPosition(), i = t[0].offsetWidth, s = t[0].offsetHeight, n && (o = a, n = this.getPosition(this.$viewport), a = "bottom" == a && r.bottom + s > n.bottom ? "top" : "top" == a && r.top - s < n.top ? "bottom" : "right" == a && r.right + i > n.width ? "left" : "left" == a && r.left - i < n.left ? "right" : a, t.removeClass(o).addClass(a)), s = this.getCalculatedOffset(a, r, i, s), this.applyPlacement(s, a), a = function() {
            var t = e.hoverState;
            e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == t && e.leave(e)
        }, l.support.transition && this.$tip.hasClass("fade") ? t.one("bsTransitionEnd", a).emulateTransitionEnd(h.TRANSITION_DURATION) : a()))
    }, h.prototype.applyPlacement = function(t, e) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            n = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top += s, t.left += a, l.offset.setOffset(i[0], l.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, t), 0), i.addClass("in");
        var r = i[0].offsetWidth,
            s = i[0].offsetHeight;
        "top" == e && s != n && (t.top = t.top + n - s);
        a = this.getViewportAdjustedDelta(e, t, r, s);
        a.left ? t.left += a.left : t.top += a.top;
        e = /top|bottom/.test(e), n = e ? 2 * a.left - o + r : 2 * a.top - n + s, s = e ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(n, i[0][s], e)
    }, h.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, h.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, h.prototype.hide = function(t) {
        function e() {
            "in" != i.hoverState && o.detach(), i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), t && t()
        }
        var i = this,
            o = l(this.$tip),
            n = l.Event("hide.bs." + this.type);
        return this.$element.trigger(n), n.isDefaultPrevented() ? void 0 : (o.removeClass("in"), l.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(h.TRANSITION_DURATION) : e(), this.hoverState = null, this)
    }, h.prototype.fixTitle = function() {
        var t = this.$element;
        !t.attr("title") && "string" == typeof t.attr("data-original-title") || t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, h.prototype.hasContent = function() {
        return this.getTitle()
    }, h.prototype.getPosition = function(t) {
        var e = (t = t || this.$element)[0],
            i = "BODY" == e.tagName,
            o = e.getBoundingClientRect();
        null == o.width && (o = l.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        e = i ? {
            top: 0,
            left: 0
        } : t.offset(), t = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
        }, i = i ? {
            width: l(window).width(),
            height: l(window).height()
        } : null;
        return l.extend({}, o, t, i, e)
    }, h.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, h.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s, a = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        return /right|left/.test(t) ? (t = e.top - a - r.scroll, s = e.top + a - r.scroll + o, t < r.top ? n.top = r.top - t : s > r.top + r.height && (n.top = r.top + r.height - s)) : (s = e.left - a, i = e.left + a + i, s < r.left ? n.left = r.left - s : i > r.right && (n.left = r.left + r.width - i)), n
    }, h.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, h.prototype.getUID = function(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
        return t
    }, h.prototype.tip = function() {
        if (!this.$tip && (this.$tip = l(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, h.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, h.prototype.enable = function() {
        this.enabled = !0
    }, h.prototype.disable = function() {
        this.enabled = !1
    }, h.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, h.prototype.toggle = function(t) {
        var e = this;
        t && ((e = l(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), l(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, h.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var t = l.fn.tooltip;
    l.fn.tooltip = function(o) {
        return this.each(function() {
            var t = l(this),
                e = t.data("bs.tooltip"),
                i = "object" == typeof o && o;
            !e && /destroy|hide/.test(o) || (e || t.data("bs.tooltip", e = new h(this, i)), "string" == typeof o && e[o]())
        })
    }, l.fn.tooltip.Constructor = h, l.fn.tooltip.noConflict = function() {
        return l.fn.tooltip = t, this
    }
}(jQuery),
function(n) {
    "use strict";

    function s(t, e) {
        this.init("popover", t, e)
    }
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    s.VERSION = "3.3.5", s.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), ((s.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function() {
        return s.DEFAULTS
    }, s.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, s.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, s.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, s.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var t = n.fn.popover;
    n.fn.popover = function(o) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.popover"),
                i = "object" == typeof o && o;
            !e && /destroy|hide/.test(o) || (e || t.data("bs.popover", e = new s(this, i)), "string" == typeof o && e[o]())
        })
    }, n.fn.popover.Constructor = s, n.fn.popover.noConflict = function() {
        return n.fn.popover = t, this
    }
}(jQuery),
function(n) {
    "use strict";

    function s(t, e) {
        this.$body = n(document.body), this.$scrollElement = n(n(t).is(document.body) ? window : t), this.options = n.extend({}, s.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this)), this.refresh(), this.process()
    }

    function e(o) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.scrollspy"),
                i = "object" == typeof o && o;
            e || t.data("bs.scrollspy", e = new s(this, i)), "string" == typeof o && e[o]()
        })
    }
    s.VERSION = "3.3.5", s.DEFAULTS = {
        offset: 10
    }, s.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, s.prototype.refresh = function() {
        var t = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), n.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = n(this),
                e = t.data("target") || t.attr("href"),
                t = /^#./.test(e) && n(e);
            return t && t.length && t.is(":visible") ? [
                [t[i]().top + o, e]
            ] : null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, s.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), o <= e) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, s.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        t = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', t = n(t).parents("li").addClass("active");
        t.parent(".dropdown-menu").length && (t = t.closest("li.dropdown").addClass("active")), t.trigger("activate.bs.scrollspy")
    }, s.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var t = n.fn.scrollspy;
    n.fn.scrollspy = e, n.fn.scrollspy.Constructor = s, n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = t, this
    }, n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            e.call(t, t.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";

    function e(i) {
        return this.each(function() {
            var t = a(this),
                e = t.data("bs.tab");
            e || t.data("bs.tab", e = new r(this)), "string" == typeof i && e[i]()
        })
    }

    function r(t) {
        this.element = a(t)
    }
    r.VERSION = "3.3.5", r.TRANSITION_DURATION = 150, r.prototype.show = function() {
        var t, e, i, o = this.element,
            n = o.closest("ul:not(.dropdown-menu)"),
            s = o.data("target");
        s || (s = (s = o.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, "")), o.parent("li").hasClass("active") || (t = n.find(".active:last a"), e = a.Event("hide.bs.tab", {
            relatedTarget: o[0]
        }), i = a.Event("show.bs.tab", {
            relatedTarget: t[0]
        }), t.trigger(e), o.trigger(i), i.isDefaultPrevented() || e.isDefaultPrevented() || (s = a(s), this.activate(o.closest("li"), n), this.activate(s, s.parent(), function() {
            t.trigger({
                type: "hidden.bs.tab",
                relatedTarget: o[0]
            }), o.trigger({
                type: "shown.bs.tab",
                relatedTarget: t[0]
            })
        })))
    }, r.prototype.activate = function(t, e, i) {
        function o() {
            n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        var n = e.find("> .active"),
            s = i && a.support.transition && (n.length && n.hasClass("fade") || !!e.find("> .fade").length);
        n.length && s ? n.one("bsTransitionEnd", o).emulateTransitionEnd(r.TRANSITION_DURATION) : o(), n.removeClass("in")
    };
    var t = a.fn.tab;

    function i(t) {
        t.preventDefault(), e.call(a(this), "show")
    }
    a.fn.tab = e, a.fn.tab.Constructor = r, a.fn.tab.noConflict = function() {
        return a.fn.tab = t, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function(a) {
    "use strict";

    function i(o) {
        return this.each(function() {
            var t = a(this),
                e = t.data("bs.affix"),
                i = "object" == typeof o && o;
            e || t.data("bs.affix", e = new r(this, i)), "string" == typeof o && e[o]()
        })
    }
    var r = function(t, e) {
        this.options = a.extend({}, r.DEFAULTS, e), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    r.VERSION = "3.3.5", r.RESET = "affix affix-top affix-bottom", r.DEFAULTS = {
        offset: 0,
        target: window
    }, r.prototype.getState = function(t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return n < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + a <= t - o) && "bottom";
        var r = null == this.affixed,
            s = r ? n : s.top;
        return null != i && n <= i ? "top" : null != o && t - o <= s + (r ? a : e) && "bottom"
    }, r.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(r.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, r.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, r.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                e = this.options.offset,
                i = e.top,
                o = e.bottom,
                n = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof e && (o = i = e), "function" == typeof i && (i = e.top(this.$element)), "function" == typeof o && (o = e.bottom(this.$element));
            var s = this.getState(n, t, i, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                e = "affix" + (s ? "-" + s : ""), i = a.Event(e + ".bs.affix");
                if (this.$element.trigger(i), i.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(r.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: n - t - o
            })
        }
    };
    var t = a.fn.affix;
    a.fn.affix = i, a.fn.affix.Constructor = r, a.fn.affix.noConflict = function() {
        return a.fn.affix = t, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var t = a(this),
                e = t.data();
            e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), i.call(t, e)
        })
    })
}(jQuery);

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core')) :
    typeof define === 'function' && define.amd ? define(['@popperjs/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory(global.Popper));
  }(this, (function (Popper) { 'use strict';
  
    function _interopNamespace(e) {
      if (e && e.__esModule) return e;
      var n = Object.create(null);
      if (e) {
        Object.keys(e).forEach(function (k) {
          if (k !== 'default') {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function () {
                return e[k];
              }
            });
          }
        });
      }
      n['default'] = e;
      return Object.freeze(n);
    }
  
    var Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): dom/selector-engine.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
  
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    const NODE_TEXT = 3;
    const SelectorEngine = {
      find(selector, element = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
      },
  
      findOne(selector, element = document.documentElement) {
        return Element.prototype.querySelector.call(element, selector);
      },
  
      children(element, selector) {
        return [].concat(...element.children).filter(child => child.matches(selector));
      },
  
      parents(element, selector) {
        const parents = [];
        let ancestor = element.parentNode;
  
        while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
          if (ancestor.matches(selector)) {
            parents.push(ancestor);
          }
  
          ancestor = ancestor.parentNode;
        }
  
        return parents;
      },
  
      prev(element, selector) {
        let previous = element.previousElementSibling;
  
        while (previous) {
          if (previous.matches(selector)) {
            return [previous];
          }
  
          previous = previous.previousElementSibling;
        }
  
        return [];
      },
  
      next(element, selector) {
        let next = element.nextElementSibling;
  
        while (next) {
          if (next.matches(selector)) {
            return [next];
          }
  
          next = next.nextElementSibling;
        }
  
        return [];
      }
  
    };
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): util/index.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
  
    const MAX_UID = 1000000;
    const MILLISECONDS_MULTIPLIER = 1000;
    const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)
  
    const toType = obj => {
      if (obj === null || obj === undefined) {
        return `${obj}`;
      }
  
      return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    };
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */
  
  
    const getUID = prefix => {
      do {
        prefix += Math.floor(Math.random() * MAX_UID);
      } while (document.getElementById(prefix));
  
      return prefix;
    };
  
    const getSelector = element => {
      let selector = element.getAttribute('data-bs-target');
  
      if (!selector || selector === '#') {
        let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273
  
        if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
          return null;
        } // Just in case some CMS puts out a full URL with the anchor appended
  
  
        if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
          hrefAttr = `#${hrefAttr.split('#')[1]}`;
        }
  
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
      }
  
      return selector;
    };
  
    const getSelectorFromElement = element => {
      const selector = getSelector(element);
  
      if (selector) {
        return document.querySelector(selector) ? selector : null;
      }
  
      return null;
    };
  
    const getElementFromSelector = element => {
      const selector = getSelector(element);
      return selector ? document.querySelector(selector) : null;
    };
  
    const getTransitionDurationFromElement = element => {
      if (!element) {
        return 0;
      } // Get transition-duration of the element
  
  
      let {
        transitionDuration,
        transitionDelay
      } = window.getComputedStyle(element);
      const floatTransitionDuration = Number.parseFloat(transitionDuration);
      const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found
  
      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first
  
  
      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    };
  
    const triggerTransitionEnd = element => {
      element.dispatchEvent(new Event(TRANSITION_END));
    };
  
    const isElement = obj => {
      if (!obj || typeof obj !== 'object') {
        return false;
      }
  
      if (typeof obj.jquery !== 'undefined') {
        obj = obj[0];
      }
  
      return typeof obj.nodeType !== 'undefined';
    };
  
    const getElement = obj => {
      if (isElement(obj)) {
        // it's a jQuery object or a node element
        return obj.jquery ? obj[0] : obj;
      }
  
      if (typeof obj === 'string' && obj.length > 0) {
        return SelectorEngine.findOne(obj);
      }
  
      return null;
    };
  
    const typeCheckConfig = (componentName, config, configTypes) => {
      Object.keys(configTypes).forEach(property => {
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = value && isElement(value) ? 'element' : toType(value);
  
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      });
    };
  
    const isVisible = element => {
      if (!isElement(element) || element.getClientRects().length === 0) {
        return false;
      }
  
      return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
    };
  
    const isDisabled = element => {
      if (!element || element.nodeType !== Node.ELEMENT_NODE) {
        return true;
      }
  
      if (element.classList.contains('disabled')) {
        return true;
      }
  
      if (typeof element.disabled !== 'undefined') {
        return element.disabled;
      }
  
      return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
    };
  
    const findShadowRoot = element => {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document
  
  
      if (typeof element.getRootNode === 'function') {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }
  
      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root
  
  
      if (!element.parentNode) {
        return null;
      }
  
      return findShadowRoot(element.parentNode);
    };
  
    const noop = () => {};
  
    const reflow = element => element.offsetHeight;
  
    const getjQuery = () => {
      const {
        jQuery
      } = window;
  
      if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
        return jQuery;
      }
  
      return null;
    };
  
    const DOMContentLoadedCallbacks = [];
  
    const onDOMContentLoaded = callback => {
      if (document.readyState === 'loading') {
        // add listener on the first call when the document is in loading state
        if (!DOMContentLoadedCallbacks.length) {
          document.addEventListener('DOMContentLoaded', () => {
            DOMContentLoadedCallbacks.forEach(callback => callback());
          });
        }
  
        DOMContentLoadedCallbacks.push(callback);
      } else {
        callback();
      }
    };
  
    const isRTL = () => document.documentElement.dir === 'rtl';
  
    const defineJQueryPlugin = plugin => {
      onDOMContentLoaded(() => {
        const $ = getjQuery();
        /* istanbul ignore if */
  
        if ($) {
          const name = plugin.NAME;
          const JQUERY_NO_CONFLICT = $.fn[name];
          $.fn[name] = plugin.jQueryInterface;
          $.fn[name].Constructor = plugin;
  
          $.fn[name].noConflict = () => {
            $.fn[name] = JQUERY_NO_CONFLICT;
            return plugin.jQueryInterface;
          };
        }
      });
    };
  
    const execute = callback => {
      if (typeof callback === 'function') {
        callback();
      }
    };
  
    const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
      if (!waitForTransition) {
        execute(callback);
        return;
      }
  
      const durationPadding = 5;
      const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
      let called = false;
  
      const handler = ({
        target
      }) => {
        if (target !== transitionElement) {
          return;
        }
  
        called = true;
        transitionElement.removeEventListener(TRANSITION_END, handler);
        execute(callback);
      };
  
      transitionElement.addEventListener(TRANSITION_END, handler);
      setTimeout(() => {
        if (!called) {
          triggerTransitionEnd(transitionElement);
        }
      }, emulatedDuration);
    };
    /**
     * Return the previous/next element of a list.
     *
     * @param {array} list    The list of elements
     * @param activeElement   The active element
     * @param shouldGetNext   Choose to get next or previous element
     * @param isCycleAllowed
     * @return {Element|elem} The proper element
     */
  
  
    const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
      let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed
  
      if (index === -1) {
        return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
      }
  
      const listLength = list.length;
      index += shouldGetNext ? 1 : -1;
  
      if (isCycleAllowed) {
        index = (index + listLength) % listLength;
      }
  
      return list[Math.max(0, Math.min(index, listLength - 1))];
    };
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): dom/event-handler.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
    const stripNameRegex = /\..*/;
    const stripUidRegex = /::\d+$/;
    const eventRegistry = {}; // Events storage
  
    let uidEvent = 1;
    const customEvents = {
      mouseenter: 'mouseover',
      mouseleave: 'mouseout'
    };
    const customEventsRegex = /^(mouseenter|mouseleave)/i;
    const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
    /**
     * ------------------------------------------------------------------------
     * Private methods
     * ------------------------------------------------------------------------
     */
  
    function getUidEvent(element, uid) {
      return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
    }
  
    function getEvent(element) {
      const uid = getUidEvent(element);
      element.uidEvent = uid;
      eventRegistry[uid] = eventRegistry[uid] || {};
      return eventRegistry[uid];
    }
  
    function bootstrapHandler(element, fn) {
      return function handler(event) {
        event.delegateTarget = element;
  
        if (handler.oneOff) {
          EventHandler.off(element, event.type, fn);
        }
  
        return fn.apply(element, [event]);
      };
    }
  
    function bootstrapDelegationHandler(element, selector, fn) {
      return function handler(event) {
        const domElements = element.querySelectorAll(selector);
  
        for (let {
          target
        } = event; target && target !== this; target = target.parentNode) {
          for (let i = domElements.length; i--;) {
            if (domElements[i] === target) {
              event.delegateTarget = target;
  
              if (handler.oneOff) {
                // eslint-disable-next-line unicorn/consistent-destructuring
                EventHandler.off(element, event.type, selector, fn);
              }
  
              return fn.apply(target, [event]);
            }
          }
        } // To please ESLint
  
  
        return null;
      };
    }
  
    function findHandler(events, handler, delegationSelector = null) {
      const uidEventList = Object.keys(events);
  
      for (let i = 0, len = uidEventList.length; i < len; i++) {
        const event = events[uidEventList[i]];
  
        if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
          return event;
        }
      }
  
      return null;
    }
  
    function normalizeParams(originalTypeEvent, handler, delegationFn) {
      const delegation = typeof handler === 'string';
      const originalHandler = delegation ? delegationFn : handler;
      let typeEvent = getTypeEvent(originalTypeEvent);
      const isNative = nativeEvents.has(typeEvent);
  
      if (!isNative) {
        typeEvent = originalTypeEvent;
      }
  
      return [delegation, originalHandler, typeEvent];
    }
  
    function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }
  
      if (!handler) {
        handler = delegationFn;
        delegationFn = null;
      } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
      // this prevents the handler from being dispatched the same way as mouseover or mouseout does
  
  
      if (customEventsRegex.test(originalTypeEvent)) {
        const wrapFn = fn => {
          return function (event) {
            if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
              return fn.call(this, event);
            }
          };
        };
  
        if (delegationFn) {
          delegationFn = wrapFn(delegationFn);
        } else {
          handler = wrapFn(handler);
        }
      }
  
      const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
      const events = getEvent(element);
      const handlers = events[typeEvent] || (events[typeEvent] = {});
      const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);
  
      if (previousFn) {
        previousFn.oneOff = previousFn.oneOff && oneOff;
        return;
      }
  
      const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
      const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
      fn.delegationSelector = delegation ? handler : null;
      fn.originalHandler = originalHandler;
      fn.oneOff = oneOff;
      fn.uidEvent = uid;
      handlers[uid] = fn;
      element.addEventListener(typeEvent, fn, delegation);
    }
  
    function removeHandler(element, events, typeEvent, handler, delegationSelector) {
      const fn = findHandler(events[typeEvent], handler, delegationSelector);
  
      if (!fn) {
        return;
      }
  
      element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
      delete events[typeEvent][fn.uidEvent];
    }
  
    function removeNamespacedHandlers(element, events, typeEvent, namespace) {
      const storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(handlerKey => {
        if (handlerKey.includes(namespace)) {
          const event = storeElementEvent[handlerKey];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    }
  
    function getTypeEvent(event) {
      // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
      event = event.replace(stripNameRegex, '');
      return customEvents[event] || event;
    }
  
    const EventHandler = {
      on(element, event, handler, delegationFn) {
        addHandler(element, event, handler, delegationFn, false);
      },
  
      one(element, event, handler, delegationFn) {
        addHandler(element, event, handler, delegationFn, true);
      },
  
      off(element, originalTypeEvent, handler, delegationFn) {
        if (typeof originalTypeEvent !== 'string' || !element) {
          return;
        }
  
        const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
        const inNamespace = typeEvent !== originalTypeEvent;
        const events = getEvent(element);
        const isNamespace = originalTypeEvent.startsWith('.');
  
        if (typeof originalHandler !== 'undefined') {
          // Simplest case: handler is passed, remove that listener ONLY.
          if (!events || !events[typeEvent]) {
            return;
          }
  
          removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
          return;
        }
  
        if (isNamespace) {
          Object.keys(events).forEach(elementEvent => {
            removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
          });
        }
  
        const storeElementEvent = events[typeEvent] || {};
        Object.keys(storeElementEvent).forEach(keyHandlers => {
          const handlerKey = keyHandlers.replace(stripUidRegex, '');
  
          if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
            const event = storeElementEvent[keyHandlers];
            removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
          }
        });
      },
  
      trigger(element, event, args) {
        if (typeof event !== 'string' || !element) {
          return null;
        }
  
        const $ = getjQuery();
        const typeEvent = getTypeEvent(event);
        const inNamespace = event !== typeEvent;
        const isNative = nativeEvents.has(typeEvent);
        let jQueryEvent;
        let bubbles = true;
        let nativeDispatch = true;
        let defaultPrevented = false;
        let evt = null;
  
        if (inNamespace && $) {
          jQueryEvent = $.Event(event, args);
          $(element).trigger(jQueryEvent);
          bubbles = !jQueryEvent.isPropagationStopped();
          nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
          defaultPrevented = jQueryEvent.isDefaultPrevented();
        }
  
        if (isNative) {
          evt = document.createEvent('HTMLEvents');
          evt.initEvent(typeEvent, bubbles, true);
        } else {
          evt = new CustomEvent(event, {
            bubbles,
            cancelable: true
          });
        } // merge custom information in our event
  
  
        if (typeof args !== 'undefined') {
          Object.keys(args).forEach(key => {
            Object.defineProperty(evt, key, {
              get() {
                return args[key];
              }
  
            });
          });
        }
  
        if (defaultPrevented) {
          evt.preventDefault();
        }
  
        if (nativeDispatch) {
          element.dispatchEvent(evt);
        }
  
        if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
          jQueryEvent.preventDefault();
        }
  
        return evt;
      }
  
    };
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): dom/data.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
  
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    const elementMap = new Map();
    var Data = {
      set(element, key, instance) {
        if (!elementMap.has(element)) {
          elementMap.set(element, new Map());
        }
  
        const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
        // can be removed later when multiple key/instances are fine to be used
  
        if (!instanceMap.has(key) && instanceMap.size !== 0) {
          // eslint-disable-next-line no-console
          console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
          return;
        }
  
        instanceMap.set(key, instance);
      },
  
      get(element, key) {
        if (elementMap.has(element)) {
          return elementMap.get(element).get(key) || null;
        }
  
        return null;
      },
  
      remove(element, key) {
        if (!elementMap.has(element)) {
          return;
        }
  
        const instanceMap = elementMap.get(element);
        instanceMap.delete(key); // free up element references if there are no instances left for an element
  
        if (instanceMap.size === 0) {
          elementMap.delete(element);
        }
      }
  
    };
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): base-component.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const VERSION = '5.0.2';
  
    class BaseComponent {
      constructor(element) {
        element = getElement(element);
  
        if (!element) {
          return;
        }
  
        this._element = element;
        Data.set(this._element, this.constructor.DATA_KEY, this);
      }
  
      dispose() {
        Data.remove(this._element, this.constructor.DATA_KEY);
        EventHandler.off(this._element, this.constructor.EVENT_KEY);
        Object.getOwnPropertyNames(this).forEach(propertyName => {
          this[propertyName] = null;
        });
      }
  
      _queueCallback(callback, element, isAnimated = true) {
        executeAfterTransition(callback, element, isAnimated);
      }
      /** Static */
  
  
      static getInstance(element) {
        return Data.get(element, this.DATA_KEY);
      }
  
      static getOrCreateInstance(element, config = {}) {
        return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
      }
  
      static get VERSION() {
        return VERSION;
      }
  
      static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
  
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
  
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
  
    }
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): alert.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const NAME$c = 'alert';
    const DATA_KEY$b = 'bs.alert';
    const EVENT_KEY$b = `.${DATA_KEY$b}`;
    const DATA_API_KEY$8 = '.data-api';
    const SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';
    const EVENT_CLOSE = `close${EVENT_KEY$b}`;
    const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
    const EVENT_CLICK_DATA_API$7 = `click${EVENT_KEY$b}${DATA_API_KEY$8}`;
    const CLASS_NAME_ALERT = 'alert';
    const CLASS_NAME_FADE$6 = 'fade';
    const CLASS_NAME_SHOW$9 = 'show';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  
    class Alert extends BaseComponent {
      // Getters
      static get NAME() {
        return NAME$c;
      } // Public
  
  
      close(element) {
        const rootElement = element ? this._getRootElement(element) : this._element;
  
        const customEvent = this._triggerCloseEvent(rootElement);
  
        if (customEvent === null || customEvent.defaultPrevented) {
          return;
        }
  
        this._removeElement(rootElement);
      } // Private
  
  
      _getRootElement(element) {
        return getElementFromSelector(element) || element.closest(`.${CLASS_NAME_ALERT}`);
      }
  
      _triggerCloseEvent(element) {
        return EventHandler.trigger(element, EVENT_CLOSE);
      }
  
      _removeElement(element) {
        element.classList.remove(CLASS_NAME_SHOW$9);
        const isAnimated = element.classList.contains(CLASS_NAME_FADE$6);
  
        this._queueCallback(() => this._destroyElement(element), element, isAnimated);
      }
  
      _destroyElement(element) {
        element.remove();
        EventHandler.trigger(element, EVENT_CLOSED);
      } // Static
  
  
      static jQueryInterface(config) {
        return this.each(function () {
          const data = Alert.getOrCreateInstance(this);
  
          if (config === 'close') {
            data[config](this);
          }
        });
      }
  
      static handleDismiss(alertInstance) {
        return function (event) {
          if (event) {
            event.preventDefault();
          }
  
          alertInstance.close(this);
        };
      }
  
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
  
  
    EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Alert to jQuery only if jQuery is present
     */
  
    defineJQueryPlugin(Alert);
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): button.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const NAME$b = 'button';
    const DATA_KEY$a = 'bs.button';
    const EVENT_KEY$a = `.${DATA_KEY$a}`;
    const DATA_API_KEY$7 = '.data-api';
    const CLASS_NAME_ACTIVE$3 = 'active';
    const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
    const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$7}`;
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  
    class Button extends BaseComponent {
      // Getters
      static get NAME() {
        return NAME$b;
      } // Public
  
  
      toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
      } // Static
  
  
      static jQueryInterface(config) {
        return this.each(function () {
          const data = Button.getOrCreateInstance(this);
  
          if (config === 'toggle') {
            data[config]();
          }
        });
      }
  
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
  
  
    EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
      event.preventDefault();
      const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
      const data = Button.getOrCreateInstance(button);
      data.toggle();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Button to jQuery only if jQuery is present
     */
  
    defineJQueryPlugin(Button);
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): dom/manipulator.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    function normalizeData(val) {
      if (val === 'true') {
        return true;
      }
  
      if (val === 'false') {
        return false;
      }
  
      if (val === Number(val).toString()) {
        return Number(val);
      }
  
      if (val === '' || val === 'null') {
        return null;
      }
  
      return val;
    }
  
    function normalizeDataKey(key) {
      return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
    }
  
    const Manipulator = {
      setDataAttribute(element, key, value) {
        element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
      },
  
      removeDataAttribute(element, key) {
        element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
      },
  
      getDataAttributes(element) {
        if (!element) {
          return {};
        }
  
        const attributes = {};
        Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
          let pureKey = key.replace(/^bs/, '');
          pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
          attributes[pureKey] = normalizeData(element.dataset[key]);
        });
        return attributes;
      },
  
      getDataAttribute(element, key) {
        return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
      },
  
      offset(element) {
        const rect = element.getBoundingClientRect();
        return {
          top: rect.top + document.body.scrollTop,
          left: rect.left + document.body.scrollLeft
        };
      },
  
      position(element) {
        return {
          top: element.offsetTop,
          left: element.offsetLeft
        };
      }
  
    };
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): carousel.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const NAME$a = 'carousel';
    const DATA_KEY$9 = 'bs.carousel';
    const EVENT_KEY$9 = `.${DATA_KEY$9}`;
    const DATA_API_KEY$6 = '.data-api';
    const ARROW_LEFT_KEY = 'ArrowLeft';
    const ARROW_RIGHT_KEY = 'ArrowRight';
    const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
  
    const SWIPE_THRESHOLD = 40;
    const Default$9 = {
      interval: 5000,
      keyboard: true,
      slide: false,
      pause: 'hover',
      wrap: true,
      touch: true
    };
    const DefaultType$9 = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean'
    };
    const ORDER_NEXT = 'next';
    const ORDER_PREV = 'prev';
    const DIRECTION_LEFT = 'left';
    const DIRECTION_RIGHT = 'right';
    const KEY_TO_DIRECTION = {
      [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
      [ARROW_RIGHT_KEY]: DIRECTION_LEFT
    };
    const EVENT_SLIDE = `slide${EVENT_KEY$9}`;
    const EVENT_SLID = `slid${EVENT_KEY$9}`;
    const EVENT_KEYDOWN = `keydown${EVENT_KEY$9}`;
    const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$9}`;
    const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$9}`;
    const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
    const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
    const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
    const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
    const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
    const EVENT_DRAG_START = `dragstart${EVENT_KEY$9}`;
    const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$9}${DATA_API_KEY$6}`;
    const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$9}${DATA_API_KEY$6}`;
    const CLASS_NAME_CAROUSEL = 'carousel';
    const CLASS_NAME_ACTIVE$2 = 'active';
    const CLASS_NAME_SLIDE = 'slide';
    const CLASS_NAME_END = 'carousel-item-end';
    const CLASS_NAME_START = 'carousel-item-start';
    const CLASS_NAME_NEXT = 'carousel-item-next';
    const CLASS_NAME_PREV = 'carousel-item-prev';
    const CLASS_NAME_POINTER_EVENT = 'pointer-event';
    const SELECTOR_ACTIVE$1 = '.active';
    const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
    const SELECTOR_ITEM = '.carousel-item';
    const SELECTOR_ITEM_IMG = '.carousel-item img';
    const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
    const SELECTOR_INDICATORS = '.carousel-indicators';
    const SELECTOR_INDICATOR = '[data-bs-target]';
    const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
    const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
    const POINTER_TYPE_TOUCH = 'touch';
    const POINTER_TYPE_PEN = 'pen';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  
    class Carousel extends BaseComponent {
      constructor(element, config) {
        super(element);
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this.touchStartX = 0;
        this.touchDeltaX = 0;
        this._config = this._getConfig(config);
        this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
        this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
        this._pointerEvent = Boolean(window.PointerEvent);
  
        this._addEventListeners();
      } // Getters
  
  
      static get Default() {
        return Default$9;
      }
  
      static get NAME() {
        return NAME$a;
      } // Public
  
  
      next() {
        this._slide(ORDER_NEXT);
      }
  
      nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && isVisible(this._element)) {
          this.next();
        }
      }
  
      prev() {
        this._slide(ORDER_PREV);
      }
  
      pause(event) {
        if (!event) {
          this._isPaused = true;
        }
  
        if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
          triggerTransitionEnd(this._element);
          this.cycle(true);
        }
  
        clearInterval(this._interval);
        this._interval = null;
      }
  
      cycle(event) {
        if (!event) {
          this._isPaused = false;
        }
  
        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }
  
        if (this._config && this._config.interval && !this._isPaused) {
          this._updateInterval();
  
          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      }
  
      to(index) {
        this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
  
        const activeIndex = this._getItemIndex(this._activeElement);
  
        if (index > this._items.length - 1 || index < 0) {
          return;
        }
  
        if (this._isSliding) {
          EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
          return;
        }
  
        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }
  
        const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
  
        this._slide(order, this._items[index]);
      } // Private
  
  
      _getConfig(config) {
        config = { ...Default$9,
          ...Manipulator.getDataAttributes(this._element),
          ...(typeof config === 'object' ? config : {})
        };
        typeCheckConfig(NAME$a, config, DefaultType$9);
        return config;
      }
  
      _handleSwipe() {
        const absDeltax = Math.abs(this.touchDeltaX);
  
        if (absDeltax <= SWIPE_THRESHOLD) {
          return;
        }
  
        const direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0;
  
        if (!direction) {
          return;
        }
  
        this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
      }
  
      _addEventListeners() {
        if (this._config.keyboard) {
          EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
        }
  
        if (this._config.pause === 'hover') {
          EventHandler.on(this._element, EVENT_MOUSEENTER, event => this.pause(event));
          EventHandler.on(this._element, EVENT_MOUSELEAVE, event => this.cycle(event));
        }
  
        if (this._config.touch && this._touchSupported) {
          this._addTouchEventListeners();
        }
      }
  
      _addTouchEventListeners() {
        const start = event => {
          if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
            this.touchStartX = event.clientX;
          } else if (!this._pointerEvent) {
            this.touchStartX = event.touches[0].clientX;
          }
        };
  
        const move = event => {
          // ensure swiping with one touch and not pinching
          this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
        };
  
        const end = event => {
          if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
            this.touchDeltaX = event.clientX - this.touchStartX;
          }
  
          this._handleSwipe();
  
          if (this._config.pause === 'hover') {
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            this.pause();
  
            if (this.touchTimeout) {
              clearTimeout(this.touchTimeout);
            }
  
            this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
          }
        };
  
        SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
          EventHandler.on(itemImg, EVENT_DRAG_START, e => e.preventDefault());
        });
  
        if (this._pointerEvent) {
          EventHandler.on(this._element, EVENT_POINTERDOWN, event => start(event));
          EventHandler.on(this._element, EVENT_POINTERUP, event => end(event));
  
          this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
          EventHandler.on(this._element, EVENT_TOUCHSTART, event => start(event));
          EventHandler.on(this._element, EVENT_TOUCHMOVE, event => move(event));
          EventHandler.on(this._element, EVENT_TOUCHEND, event => end(event));
        }
      }
  
      _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }
  
        const direction = KEY_TO_DIRECTION[event.key];
  
        if (direction) {
          event.preventDefault();
  
          this._slide(direction);
        }
      }
  
      _getItemIndex(element) {
        this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
        return this._items.indexOf(element);
      }
  
      _getItemByOrder(order, activeElement) {
        const isNext = order === ORDER_NEXT;
        return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
      }
  
      _triggerSlideEvent(relatedTarget, eventDirectionName) {
        const targetIndex = this._getItemIndex(relatedTarget);
  
        const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));
  
        return EventHandler.trigger(this._element, EVENT_SLIDE, {
          relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
      }
  
      _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
          activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
          activeIndicator.removeAttribute('aria-current');
          const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);
  
          for (let i = 0; i < indicators.length; i++) {
            if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
              indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
              indicators[i].setAttribute('aria-current', 'true');
              break;
            }
          }
        }
      }
  
      _updateInterval() {
        const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
  
        if (!element) {
          return;
        }
  
        const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
  
        if (elementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = elementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }
      }
  
      _slide(directionOrOrder, element) {
        const order = this._directionToOrder(directionOrOrder);
  
        const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
  
        const activeElementIndex = this._getItemIndex(activeElement);
  
        const nextElement = element || this._getItemByOrder(order, activeElement);
  
        const nextElementIndex = this._getItemIndex(nextElement);
  
        const isCycling = Boolean(this._interval);
        const isNext = order === ORDER_NEXT;
        const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
  
        const eventDirectionName = this._orderToDirection(order);
  
        if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
          this._isSliding = false;
          return;
        }
  
        if (this._isSliding) {
          return;
        }
  
        const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
  
        if (slideEvent.defaultPrevented) {
          return;
        }
  
        if (!activeElement || !nextElement) {
          // Some weirdness is happening, so we bail
          return;
        }
  
        this._isSliding = true;
  
        if (isCycling) {
          this.pause();
        }
  
        this._setActiveIndicatorElement(nextElement);
  
        this._activeElement = nextElement;
  
        const triggerSlidEvent = () => {
          EventHandler.trigger(this._element, EVENT_SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });
        };
  
        if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
          nextElement.classList.add(orderClassName);
          reflow(nextElement);
          activeElement.classList.add(directionalClassName);
          nextElement.classList.add(directionalClassName);
  
          const completeCallBack = () => {
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add(CLASS_NAME_ACTIVE$2);
            activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
            this._isSliding = false;
            setTimeout(triggerSlidEvent, 0);
          };
  
          this._queueCallback(completeCallBack, activeElement, true);
        } else {
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          this._isSliding = false;
          triggerSlidEvent();
        }
  
        if (isCycling) {
          this.cycle();
        }
      }
  
      _directionToOrder(direction) {
        if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
          return direction;
        }
  
        if (isRTL()) {
          return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        }
  
        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
      }
  
      _orderToDirection(order) {
        if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
          return order;
        }
  
        if (isRTL()) {
          return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }
  
        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
      } // Static
  
  
      static carouselInterface(element, config) {
        const data = Carousel.getOrCreateInstance(element, config);
        let {
          _config
        } = data;
  
        if (typeof config === 'object') {
          _config = { ..._config,
            ...config
          };
        }
  
        const action = typeof config === 'string' ? config : _config.slide;
  
        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError(`No method named "${action}"`);
          }
  
          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      }
  
      static jQueryInterface(config) {
        return this.each(function () {
          Carousel.carouselInterface(this, config);
        });
      }
  
      static dataApiClickHandler(event) {
        const target = getElementFromSelector(this);
  
        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
          return;
        }
  
        const config = { ...Manipulator.getDataAttributes(target),
          ...Manipulator.getDataAttributes(this)
        };
        const slideIndex = this.getAttribute('data-bs-slide-to');
  
        if (slideIndex) {
          config.interval = false;
        }
  
        Carousel.carouselInterface(target, config);
  
        if (slideIndex) {
          Carousel.getInstance(target).to(slideIndex);
        }
  
        event.preventDefault();
      }
  
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
  
  
    EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
    EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
      const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
  
      for (let i = 0, len = carousels.length; i < len; i++) {
        Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Carousel to jQuery only if jQuery is present
     */
  
    defineJQueryPlugin(Carousel);
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): collapse.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const NAME$9 = 'collapse';
    const DATA_KEY$8 = 'bs.collapse';
    const EVENT_KEY$8 = `.${DATA_KEY$8}`;
    const DATA_API_KEY$5 = '.data-api';
    const Default$8 = {
      toggle: true,
      parent: ''
    };
    const DefaultType$8 = {
      toggle: 'boolean',
      parent: '(string|element)'
    };
    const EVENT_SHOW$5 = `show${EVENT_KEY$8}`;
    const EVENT_SHOWN$5 = `shown${EVENT_KEY$8}`;
    const EVENT_HIDE$5 = `hide${EVENT_KEY$8}`;
    const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$8}`;
    const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
    const CLASS_NAME_SHOW$8 = 'show';
    const CLASS_NAME_COLLAPSE = 'collapse';
    const CLASS_NAME_COLLAPSING = 'collapsing';
    const CLASS_NAME_COLLAPSED = 'collapsed';
    const WIDTH = 'width';
    const HEIGHT = 'height';
    const SELECTOR_ACTIVES = '.show, .collapsing';
    const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  
    class Collapse extends BaseComponent {
      constructor(element, config) {
        super(element);
        this._isTransitioning = false;
        this._config = this._getConfig(config);
        this._triggerArray = SelectorEngine.find(`${SELECTOR_DATA_TOGGLE$4}[href="#${this._element.id}"],` + `${SELECTOR_DATA_TOGGLE$4}[data-bs-target="#${this._element.id}"]`);
        const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
  
        for (let i = 0, len = toggleList.length; i < len; i++) {
          const elem = toggleList[i];
          const selector = getSelectorFromElement(elem);
          const filterElement = SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);
  
          if (selector !== null && filterElement.length) {
            this._selector = selector;
  
            this._triggerArray.push(elem);
          }
        }
  
        this._parent = this._config.parent ? this._getParent() : null;
  
        if (!this._config.parent) {
          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        }
  
        if (this._config.toggle) {
          this.toggle();
        }
      } // Getters
  
  
      static get Default() {
        return Default$8;
      }
  
      static get NAME() {
        return NAME$9;
      } // Public
  
  
      toggle() {
        if (this._element.classList.contains(CLASS_NAME_SHOW$8)) {
          this.hide();
        } else {
          this.show();
        }
      }
  
      show() {
        if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW$8)) {
          return;
        }
  
        let actives;
        let activesData;
  
        if (this._parent) {
          actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter(elem => {
            if (typeof this._config.parent === 'string') {
              return elem.getAttribute('data-bs-parent') === this._config.parent;
            }
  
            return elem.classList.contains(CLASS_NAME_COLLAPSE);
          });
  
          if (actives.length === 0) {
            actives = null;
          }
        }
  
        const container = SelectorEngine.findOne(this._selector);
  
        if (actives) {
          const tempActiveData = actives.find(elem => container !== elem);
          activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;
  
          if (activesData && activesData._isTransitioning) {
            return;
          }
        }
  
        const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);
  
        if (startEvent.defaultPrevented) {
          return;
        }
  
        if (actives) {
          actives.forEach(elemActive => {
            if (container !== elemActive) {
              Collapse.collapseInterface(elemActive, 'hide');
            }
  
            if (!activesData) {
              Data.set(elemActive, DATA_KEY$8, null);
            }
          });
        }
  
        const dimension = this._getDimension();
  
        this._element.classList.remove(CLASS_NAME_COLLAPSE);
  
        this._element.classList.add(CLASS_NAME_COLLAPSING);
  
        this._element.style[dimension] = 0;
  
        if (this._triggerArray.length) {
          this._triggerArray.forEach(element => {
            element.classList.remove(CLASS_NAME_COLLAPSED);
            element.setAttribute('aria-expanded', true);
          });
        }
  
        this.setTransitioning(true);
  
        const complete = () => {
          this._element.classList.remove(CLASS_NAME_COLLAPSING);
  
          this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$8);
  
          this._element.style[dimension] = '';
          this.setTransitioning(false);
          EventHandler.trigger(this._element, EVENT_SHOWN$5);
        };
  
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = `scroll${capitalizedDimension}`;
  
        this._queueCallback(complete, this._element, true);
  
        this._element.style[dimension] = `${this._element[scrollSize]}px`;
      }
  
      hide() {
        if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW$8)) {
          return;
        }
  
        const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);
  
        if (startEvent.defaultPrevented) {
          return;
        }
  
        const dimension = this._getDimension();
  
        this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
        reflow(this._element);
  
        this._element.classList.add(CLASS_NAME_COLLAPSING);
  
        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$8);
  
        const triggerArrayLength = this._triggerArray.length;
  
        if (triggerArrayLength > 0) {
          for (let i = 0; i < triggerArrayLength; i++) {
            const trigger = this._triggerArray[i];
            const elem = getElementFromSelector(trigger);
  
            if (elem && !elem.classList.contains(CLASS_NAME_SHOW$8)) {
              trigger.classList.add(CLASS_NAME_COLLAPSED);
              trigger.setAttribute('aria-expanded', false);
            }
          }
        }
  
        this.setTransitioning(true);
  
        const complete = () => {
          this.setTransitioning(false);
  
          this._element.classList.remove(CLASS_NAME_COLLAPSING);
  
          this._element.classList.add(CLASS_NAME_COLLAPSE);
  
          EventHandler.trigger(this._element, EVENT_HIDDEN$5);
        };
  
        this._element.style[dimension] = '';
  
        this._queueCallback(complete, this._element, true);
      }
  
      setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      } // Private
  
  
      _getConfig(config) {
        config = { ...Default$8,
          ...config
        };
        config.toggle = Boolean(config.toggle); // Coerce string values
  
        typeCheckConfig(NAME$9, config, DefaultType$8);
        return config;
      }
  
      _getDimension() {
        return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
      }
  
      _getParent() {
        let {
          parent
        } = this._config;
        parent = getElement(parent);
        const selector = `${SELECTOR_DATA_TOGGLE$4}[data-bs-parent="${parent}"]`;
        SelectorEngine.find(selector, parent).forEach(element => {
          const selected = getElementFromSelector(element);
  
          this._addAriaAndCollapsedClass(selected, [element]);
        });
        return parent;
      }
  
      _addAriaAndCollapsedClass(element, triggerArray) {
        if (!element || !triggerArray.length) {
          return;
        }
  
        const isOpen = element.classList.contains(CLASS_NAME_SHOW$8);
        triggerArray.forEach(elem => {
          if (isOpen) {
            elem.classList.remove(CLASS_NAME_COLLAPSED);
          } else {
            elem.classList.add(CLASS_NAME_COLLAPSED);
          }
  
          elem.setAttribute('aria-expanded', isOpen);
        });
      } // Static
  
  
      static collapseInterface(element, config) {
        let data = Collapse.getInstance(element);
        const _config = { ...Default$8,
          ...Manipulator.getDataAttributes(element),
          ...(typeof config === 'object' && config ? config : {})
        };
  
        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }
  
        if (!data) {
          data = new Collapse(element, _config);
        }
  
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
  
          data[config]();
        }
      }
  
      static jQueryInterface(config) {
        return this.each(function () {
          Collapse.collapseInterface(this, config);
        });
      }
  
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
  
  
    EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
      // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
      if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
        event.preventDefault();
      }
  
      const triggerData = Manipulator.getDataAttributes(this);
      const selector = getSelectorFromElement(this);
      const selectorElements = SelectorEngine.find(selector);
      selectorElements.forEach(element => {
        const data = Collapse.getInstance(element);
        let config;
  
        if (data) {
          // update parent attribute
          if (data._parent === null && typeof triggerData.parent === 'string') {
            data._config.parent = triggerData.parent;
            data._parent = data._getParent();
          }
  
          config = 'toggle';
        } else {
          config = triggerData;
        }
  
        Collapse.collapseInterface(element, config);
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Collapse to jQuery only if jQuery is present
     */
  
    defineJQueryPlugin(Collapse);
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): dropdown.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const NAME$8 = 'dropdown';
    const DATA_KEY$7 = 'bs.dropdown';
    const EVENT_KEY$7 = `.${DATA_KEY$7}`;
    const DATA_API_KEY$4 = '.data-api';
    const ESCAPE_KEY$2 = 'Escape';
    const SPACE_KEY = 'Space';
    const TAB_KEY = 'Tab';
    const ARROW_UP_KEY = 'ArrowUp';
    const ARROW_DOWN_KEY = 'ArrowDown';
    const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
  
    const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
    const EVENT_HIDE$4 = `hide${EVENT_KEY$7}`;
    const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$7}`;
    const EVENT_SHOW$4 = `show${EVENT_KEY$7}`;
    const EVENT_SHOWN$4 = `shown${EVENT_KEY$7}`;
    const EVENT_CLICK = `click${EVENT_KEY$7}`;
    const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
    const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$7}${DATA_API_KEY$4}`;
    const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$7}${DATA_API_KEY$4}`;
    const CLASS_NAME_SHOW$7 = 'show';
    const CLASS_NAME_DROPUP = 'dropup';
    const CLASS_NAME_DROPEND = 'dropend';
    const CLASS_NAME_DROPSTART = 'dropstart';
    const CLASS_NAME_NAVBAR = 'navbar';
    const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
    const SELECTOR_MENU = '.dropdown-menu';
    const SELECTOR_NAVBAR_NAV = '.navbar-nav';
    const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
    const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
    const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
    const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
    const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
    const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
    const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
    const Default$7 = {
      offset: [0, 2],
      boundary: 'clippingParents',
      reference: 'toggle',
      display: 'dynamic',
      popperConfig: null,
      autoClose: true
    };
    const DefaultType$7 = {
      offset: '(array|string|function)',
      boundary: '(string|element)',
      reference: '(string|element|object)',
      display: 'string',
      popperConfig: '(null|object|function)',
      autoClose: '(boolean|string)'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  
    class Dropdown extends BaseComponent {
      constructor(element, config) {
        super(element);
        this._popper = null;
        this._config = this._getConfig(config);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();
  
        this._addEventListeners();
      } // Getters
  
  
      static get Default() {
        return Default$7;
      }
  
      static get DefaultType() {
        return DefaultType$7;
      }
  
      static get NAME() {
        return NAME$8;
      } // Public
  
  
      toggle() {
        if (isDisabled(this._element)) {
          return;
        }
  
        const isActive = this._element.classList.contains(CLASS_NAME_SHOW$7);
  
        if (isActive) {
          this.hide();
          return;
        }
  
        this.show();
      }
  
      show() {
        if (isDisabled(this._element) || this._menu.classList.contains(CLASS_NAME_SHOW$7)) {
          return;
        }
  
        const parent = Dropdown.getParentFromElement(this._element);
        const relatedTarget = {
          relatedTarget: this._element
        };
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);
  
        if (showEvent.defaultPrevented) {
          return;
        } // Totally disable Popper for Dropdowns in Navbar
  
  
        if (this._inNavbar) {
          Manipulator.setDataAttribute(this._menu, 'popper', 'none');
        } else {
          if (typeof Popper__namespace === 'undefined') {
            throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
          }
  
          let referenceElement = this._element;
  
          if (this._config.reference === 'parent') {
            referenceElement = parent;
          } else if (isElement(this._config.reference)) {
            referenceElement = getElement(this._config.reference);
          } else if (typeof this._config.reference === 'object') {
            referenceElement = this._config.reference;
          }
  
          const popperConfig = this._getPopperConfig();
  
          const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
          this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
  
          if (isDisplayStatic) {
            Manipulator.setDataAttribute(this._menu, 'popper', 'static');
          }
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
  
  
        if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
          [].concat(...document.body.children).forEach(elem => EventHandler.on(elem, 'mouseover', noop));
        }
  
        this._element.focus();
  
        this._element.setAttribute('aria-expanded', true);
  
        this._menu.classList.toggle(CLASS_NAME_SHOW$7);
  
        this._element.classList.toggle(CLASS_NAME_SHOW$7);
  
        EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
      }
  
      hide() {
        if (isDisabled(this._element) || !this._menu.classList.contains(CLASS_NAME_SHOW$7)) {
          return;
        }
  
        const relatedTarget = {
          relatedTarget: this._element
        };
  
        this._completeHide(relatedTarget);
      }
  
      dispose() {
        if (this._popper) {
          this._popper.destroy();
        }
  
        super.dispose();
      }
  
      update() {
        this._inNavbar = this._detectNavbar();
  
        if (this._popper) {
          this._popper.update();
        }
      } // Private
  
  
      _addEventListeners() {
        EventHandler.on(this._element, EVENT_CLICK, event => {
          event.preventDefault();
          this.toggle();
        });
      }
  
      _completeHide(relatedTarget) {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);
  
        if (hideEvent.defaultPrevented) {
          return;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
  
  
        if ('ontouchstart' in document.documentElement) {
          [].concat(...document.body.children).forEach(elem => EventHandler.off(elem, 'mouseover', noop));
        }
  
        if (this._popper) {
          this._popper.destroy();
        }
  
        this._menu.classList.remove(CLASS_NAME_SHOW$7);
  
        this._element.classList.remove(CLASS_NAME_SHOW$7);
  
        this._element.setAttribute('aria-expanded', 'false');
  
        Manipulator.removeDataAttribute(this._menu, 'popper');
        EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
      }
  
      _getConfig(config) {
        config = { ...this.constructor.Default,
          ...Manipulator.getDataAttributes(this._element),
          ...config
        };
        typeCheckConfig(NAME$8, config, this.constructor.DefaultType);
  
        if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
          // Popper virtual elements require a getBoundingClientRect method
          throw new TypeError(`${NAME$8.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        }
  
        return config;
      }
  
      _getMenuElement() {
        return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
      }
  
      _getPlacement() {
        const parentDropdown = this._element.parentNode;
  
        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
          return PLACEMENT_RIGHT;
        }
  
        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
          return PLACEMENT_LEFT;
        } // We need to trim the value because custom properties can also include spaces
  
  
        const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
  
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
          return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        }
  
        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
      }
  
      _detectNavbar() {
        return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
      }
  
      _getOffset() {
        const {
          offset
        } = this._config;
  
        if (typeof offset === 'string') {
          return offset.split(',').map(val => Number.parseInt(val, 10));
        }
  
        if (typeof offset === 'function') {
          return popperData => offset(popperData, this._element);
        }
  
        return offset;
      }
  
      _getPopperConfig() {
        const defaultBsPopperConfig = {
          placement: this._getPlacement(),
          modifiers: [{
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }]
        }; // Disable Popper if we have a static display
  
        if (this._config.display === 'static') {
          defaultBsPopperConfig.modifiers = [{
            name: 'applyStyles',
            enabled: false
          }];
        }
  
        return { ...defaultBsPopperConfig,
          ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
        };
      }
  
      _selectMenuItem({
        key,
        target
      }) {
        const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);
  
        if (!items.length) {
          return;
        } // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY
  
  
        getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
      } // Static
  
  
      static dropdownInterface(element, config) {
        const data = Dropdown.getOrCreateInstance(element, config);
  
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
  
          data[config]();
        }
      }
  
      static jQueryInterface(config) {
        return this.each(function () {
          Dropdown.dropdownInterface(this, config);
        });
      }
  
      static clearMenus(event) {
        if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) {
          return;
        }
  
        const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);
  
        for (let i = 0, len = toggles.length; i < len; i++) {
          const context = Dropdown.getInstance(toggles[i]);
  
          if (!context || context._config.autoClose === false) {
            continue;
          }
  
          if (!context._element.classList.contains(CLASS_NAME_SHOW$7)) {
            continue;
          }
  
          const relatedTarget = {
            relatedTarget: context._element
          };
  
          if (event) {
            const composedPath = event.composedPath();
            const isMenuTarget = composedPath.includes(context._menu);
  
            if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
              continue;
            } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
  
  
            if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
              continue;
            }
  
            if (event.type === 'click') {
              relatedTarget.clickEvent = event;
            }
          }
  
          context._completeHide(relatedTarget);
        }
      }
  
      static getParentFromElement(element) {
        return getElementFromSelector(element) || element.parentNode;
      }
  
      static dataApiKeydownHandler(event) {
        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
          return;
        }
  
        const isActive = this.classList.contains(CLASS_NAME_SHOW$7);
  
        if (!isActive && event.key === ESCAPE_KEY$2) {
          return;
        }
  
        event.preventDefault();
        event.stopPropagation();
  
        if (isDisabled(this)) {
          return;
        }
  
        const getToggleButton = () => this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
  
        if (event.key === ESCAPE_KEY$2) {
          getToggleButton().focus();
          Dropdown.clearMenus();
          return;
        }
  
        if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
          if (!isActive) {
            getToggleButton().click();
          }
  
          Dropdown.getInstance(getToggleButton())._selectMenuItem(event);
  
          return;
        }
  
        if (!isActive || event.key === SPACE_KEY) {
          Dropdown.clearMenus();
        }
      }
  
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
  
  
    EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
    EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
    EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
    EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
    EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
      event.preventDefault();
      Dropdown.dropdownInterface(this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Dropdown to jQuery only if jQuery is present
     */
  
    defineJQueryPlugin(Dropdown);
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): util/scrollBar.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
    const SELECTOR_STICKY_CONTENT = '.sticky-top';
  
    class ScrollBarHelper {
      constructor() {
        this._element = document.body;
      }
  
      getWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
      }
  
      hide() {
        const width = this.getWidth();
  
        this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width
  
  
        this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
  
  
        this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);
  
        this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
      }
  
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, 'overflow');
  
        this._element.style.overflow = 'hidden';
      }
  
      _setElementAttributes(selector, styleProp, callback) {
        const scrollbarWidth = this.getWidth();
  
        const manipulationCallBack = element => {
          if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
            return;
          }
  
          this._saveInitialAttribute(element, styleProp);
  
          const calculatedValue = window.getComputedStyle(element)[styleProp];
          element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
        };
  
        this._applyManipulationCallback(selector, manipulationCallBack);
      }
  
      reset() {
        this._resetElementAttributes(this._element, 'overflow');
  
        this._resetElementAttributes(this._element, 'paddingRight');
  
        this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');
  
        this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
      }
  
      _saveInitialAttribute(element, styleProp) {
        const actualValue = element.style[styleProp];
  
        if (actualValue) {
          Manipulator.setDataAttribute(element, styleProp, actualValue);
        }
      }
  
      _resetElementAttributes(selector, styleProp) {
        const manipulationCallBack = element => {
          const value = Manipulator.getDataAttribute(element, styleProp);
  
          if (typeof value === 'undefined') {
            element.style.removeProperty(styleProp);
          } else {
            Manipulator.removeDataAttribute(element, styleProp);
            element.style[styleProp] = value;
          }
        };
  
        this._applyManipulationCallback(selector, manipulationCallBack);
      }
  
      _applyManipulationCallback(selector, callBack) {
        if (isElement(selector)) {
          callBack(selector);
        } else {
          SelectorEngine.find(selector, this._element).forEach(callBack);
        }
      }
  
      isOverflowing() {
        return this.getWidth() > 0;
      }
  
    }
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): util/backdrop.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    const Default$6 = {
      isVisible: true,
      // if false, we use the backdrop helper without adding any element to the dom
      isAnimated: false,
      rootElement: 'body',
      // give the choice to place backdrop under different elements
      clickCallback: null
    };
    const DefaultType$6 = {
      isVisible: 'boolean',
      isAnimated: 'boolean',
      rootElement: '(element|string)',
      clickCallback: '(function|null)'
    };
    const NAME$7 = 'backdrop';
    const CLASS_NAME_BACKDROP = 'modal-backdrop';
    const CLASS_NAME_FADE$5 = 'fade';
    const CLASS_NAME_SHOW$6 = 'show';
    const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$7}`;
  
    class Backdrop {
      constructor(config) {
        this._config = this._getConfig(config);
        this._isAppended = false;
        this._element = null;
      }
  
      show(callback) {
        if (!this._config.isVisible) {
          execute(callback);
          return;
        }
  
        this._append();
  
        if (this._config.isAnimated) {
          reflow(this._getElement());
        }
  
        this._getElement().classList.add(CLASS_NAME_SHOW$6);
  
        this._emulateAnimation(() => {
          execute(callback);
        });
      }
  
      hide(callback) {
        if (!this._config.isVisible) {
          execute(callback);
          return;
        }
  
        this._getElement().classList.remove(CLASS_NAME_SHOW$6);
  
        this._emulateAnimation(() => {
          this.dispose();
          execute(callback);
        });
      } // Private
  
  
      _getElement() {
        if (!this._element) {
          const backdrop = document.createElement('div');
          backdrop.className = CLASS_NAME_BACKDROP;
  
          if (this._config.isAnimated) {
            backdrop.classList.add(CLASS_NAME_FADE$5);
          }
  
          this._element = backdrop;
        }
  
        return this._element;
      }
  
      _getConfig(config) {
        config = { ...Default$6,
          ...(typeof config === 'object' ? config : {})
        }; // use getElement() with the default "body" to get a fresh Element on each instantiation
  
        config.rootElement = getElement(config.rootElement);
        typeCheckConfig(NAME$7, config, DefaultType$6);
        return config;
      }
  
      _append() {
        if (this._isAppended) {
          return;
        }
  
        this._config.rootElement.appendChild(this._getElement());
  
        EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => {
          execute(this._config.clickCallback);
        });
        this._isAppended = true;
      }
  
      dispose() {
        if (!this._isAppended) {
          return;
        }
  
        EventHandler.off(this._element, EVENT_MOUSEDOWN);
  
        this._element.remove();
  
        this._isAppended = false;
      }
  
      _emulateAnimation(callback) {
        executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
      }
  
    }
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): modal.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const NAME$6 = 'modal';
    const DATA_KEY$6 = 'bs.modal';
    const EVENT_KEY$6 = `.${DATA_KEY$6}`;
    const DATA_API_KEY$3 = '.data-api';
    const ESCAPE_KEY$1 = 'Escape';
    const Default$5 = {
      backdrop: true,
      keyboard: true,
      focus: true
    };
    const DefaultType$5 = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean'
    };
    const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
    const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
    const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
    const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
    const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
    const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$6}`;
    const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
    const EVENT_CLICK_DISMISS$2 = `click.dismiss${EVENT_KEY$6}`;
    const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$6}`;
    const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
    const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
    const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
    const CLASS_NAME_OPEN = 'modal-open';
    const CLASS_NAME_FADE$4 = 'fade';
    const CLASS_NAME_SHOW$5 = 'show';
    const CLASS_NAME_STATIC = 'modal-static';
    const SELECTOR_DIALOG = '.modal-dialog';
    const SELECTOR_MODAL_BODY = '.modal-body';
    const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
    const SELECTOR_DATA_DISMISS$2 = '[data-bs-dismiss="modal"]';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  
    class Modal extends BaseComponent {
      constructor(element, config) {
        super(element);
        this._config = this._getConfig(config);
        this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
        this._backdrop = this._initializeBackDrop();
        this._isShown = false;
        this._ignoreBackdropClick = false;
        this._isTransitioning = false;
        this._scrollBar = new ScrollBarHelper();
      } // Getters
  
  
      static get Default() {
        return Default$5;
      }
  
      static get NAME() {
        return NAME$6;
      } // Public
  
  
      toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
  
      show(relatedTarget) {
        if (this._isShown || this._isTransitioning) {
          return;
        }
  
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
          relatedTarget
        });
  
        if (showEvent.defaultPrevented) {
          return;
        }
  
        this._isShown = true;
  
        if (this._isAnimated()) {
          this._isTransitioning = true;
        }
  
        this._scrollBar.hide();
  
        document.body.classList.add(CLASS_NAME_OPEN);
  
        this._adjustDialog();
  
        this._setEscapeEvent();
  
        this._setResizeEvent();
  
        EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, SELECTOR_DATA_DISMISS$2, event => this.hide(event));
        EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
          EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => {
            if (event.target === this._element) {
              this._ignoreBackdropClick = true;
            }
          });
        });
  
        this._showBackdrop(() => this._showElement(relatedTarget));
      }
  
      hide(event) {
        if (event && ['A', 'AREA'].includes(event.target.tagName)) {
          event.preventDefault();
        }
  
        if (!this._isShown || this._isTransitioning) {
          return;
        }
  
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
  
        if (hideEvent.defaultPrevented) {
          return;
        }
  
        this._isShown = false;
  
        const isAnimated = this._isAnimated();
  
        if (isAnimated) {
          this._isTransitioning = true;
        }
  
        this._setEscapeEvent();
  
        this._setResizeEvent();
  
        EventHandler.off(document, EVENT_FOCUSIN$2);
  
        this._element.classList.remove(CLASS_NAME_SHOW$5);
  
        EventHandler.off(this._element, EVENT_CLICK_DISMISS$2);
        EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);
  
        this._queueCallback(() => this._hideModal(), this._element, isAnimated);
      }
  
      dispose() {
        [window, this._dialog].forEach(htmlElement => EventHandler.off(htmlElement, EVENT_KEY$6));
  
        this._backdrop.dispose();
  
        super.dispose();
        /**
         * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
         * Do not move `document` in `htmlElements` array
         * It will remove `EVENT_CLICK_DATA_API` event that should remain
         */
  
        EventHandler.off(document, EVENT_FOCUSIN$2);
      }
  
      handleUpdate() {
        this._adjustDialog();
      } // Private
  
  
      _initializeBackDrop() {
        return new Backdrop({
          isVisible: Boolean(this._config.backdrop),
          // 'static' option will be translated to true, and booleans will keep their value
          isAnimated: this._isAnimated()
        });
      }
  
      _getConfig(config) {
        config = { ...Default$5,
          ...Manipulator.getDataAttributes(this._element),
          ...(typeof config === 'object' ? config : {})
        };
        typeCheckConfig(NAME$6, config, DefaultType$5);
        return config;
      }
  
      _showElement(relatedTarget) {
        const isAnimated = this._isAnimated();
  
        const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
  
        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // Don't move modal's DOM position
          document.body.appendChild(this._element);
        }
  
        this._element.style.display = 'block';
  
        this._element.removeAttribute('aria-hidden');
  
        this._element.setAttribute('aria-modal', true);
  
        this._element.setAttribute('role', 'dialog');
  
        this._element.scrollTop = 0;
  
        if (modalBody) {
          modalBody.scrollTop = 0;
        }
  
        if (isAnimated) {
          reflow(this._element);
        }
  
        this._element.classList.add(CLASS_NAME_SHOW$5);
  
        if (this._config.focus) {
          this._enforceFocus();
        }
  
        const transitionComplete = () => {
          if (this._config.focus) {
            this._element.focus();
          }
  
          this._isTransitioning = false;
          EventHandler.trigger(this._element, EVENT_SHOWN$3, {
            relatedTarget
          });
        };
  
        this._queueCallback(transitionComplete, this._dialog, isAnimated);
      }
  
      _enforceFocus() {
        EventHandler.off(document, EVENT_FOCUSIN$2); // guard against infinite focus loop
  
        EventHandler.on(document, EVENT_FOCUSIN$2, event => {
          if (document !== event.target && this._element !== event.target && !this._element.contains(event.target)) {
            this._element.focus();
          }
        });
      }
  
      _setEscapeEvent() {
        if (this._isShown) {
          EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
            if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
              event.preventDefault();
              this.hide();
            } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) {
              this._triggerBackdropTransition();
            }
          });
        } else {
          EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
        }
      }
  
      _setResizeEvent() {
        if (this._isShown) {
          EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
        } else {
          EventHandler.off(window, EVENT_RESIZE);
        }
      }
  
      _hideModal() {
        this._element.style.display = 'none';
  
        this._element.setAttribute('aria-hidden', true);
  
        this._element.removeAttribute('aria-modal');
  
        this._element.removeAttribute('role');
  
        this._isTransitioning = false;
  
        this._backdrop.hide(() => {
          document.body.classList.remove(CLASS_NAME_OPEN);
  
          this._resetAdjustments();
  
          this._scrollBar.reset();
  
          EventHandler.trigger(this._element, EVENT_HIDDEN$3);
        });
      }
  
      _showBackdrop(callback) {
        EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, event => {
          if (this._ignoreBackdropClick) {
            this._ignoreBackdropClick = false;
            return;
          }
  
          if (event.target !== event.currentTarget) {
            return;
          }
  
          if (this._config.backdrop === true) {
            this.hide();
          } else if (this._config.backdrop === 'static') {
            this._triggerBackdropTransition();
          }
        });
  
        this._backdrop.show(callback);
      }
  
      _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE$4);
      }
  
      _triggerBackdropTransition() {
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
  
        if (hideEvent.defaultPrevented) {
          return;
        }
  
        const {
          classList,
          scrollHeight,
          style
        } = this._element;
        const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed
  
        if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
          return;
        }
  
        if (!isModalOverflowing) {
          style.overflowY = 'hidden';
        }
  
        classList.add(CLASS_NAME_STATIC);
  
        this._queueCallback(() => {
          classList.remove(CLASS_NAME_STATIC);
  
          if (!isModalOverflowing) {
            this._queueCallback(() => {
              style.overflowY = '';
            }, this._dialog);
          }
        }, this._dialog);
  
        this._element.focus();
      } // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // ----------------------------------------------------------------------
  
  
      _adjustDialog() {
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
  
        const scrollbarWidth = this._scrollBar.getWidth();
  
        const isBodyOverflowing = scrollbarWidth > 0;
  
        if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
          this._element.style.paddingLeft = `${scrollbarWidth}px`;
        }
  
        if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
          this._element.style.paddingRight = `${scrollbarWidth}px`;
        }
      }
  
      _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      } // Static
  
  
      static jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          const data = Modal.getOrCreateInstance(this, config);
  
          if (typeof config !== 'string') {
            return;
          }
  
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
  
          data[config](relatedTarget);
        });
      }
  
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
  
  
    EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
      const target = getElementFromSelector(this);
  
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }
  
      EventHandler.one(target, EVENT_SHOW$3, showEvent => {
        if (showEvent.defaultPrevented) {
          // only register focus restorer if modal will actually get shown
          return;
        }
  
        EventHandler.one(target, EVENT_HIDDEN$3, () => {
          if (isVisible(this)) {
            this.focus();
          }
        });
      });
      const data = Modal.getOrCreateInstance(target);
      data.toggle(this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Modal to jQuery only if jQuery is present
     */
  
    defineJQueryPlugin(Modal);
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): offcanvas.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const NAME$5 = 'offcanvas';
    const DATA_KEY$5 = 'bs.offcanvas';
    const EVENT_KEY$5 = `.${DATA_KEY$5}`;
    const DATA_API_KEY$2 = '.data-api';
    const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
    const ESCAPE_KEY = 'Escape';
    const Default$4 = {
      backdrop: true,
      keyboard: true,
      scroll: false
    };
    const DefaultType$4 = {
      backdrop: 'boolean',
      keyboard: 'boolean',
      scroll: 'boolean'
    };
    const CLASS_NAME_SHOW$4 = 'show';
    const OPEN_SELECTOR = '.offcanvas.show';
    const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
    const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
    const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
    const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
    const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$5}`;
    const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
    const EVENT_CLICK_DISMISS$1 = `click.dismiss${EVENT_KEY$5}`;
    const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$5}`;
    const SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="offcanvas"]';
    const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  
    class Offcanvas extends BaseComponent {
      constructor(element, config) {
        super(element);
        this._config = this._getConfig(config);
        this._isShown = false;
        this._backdrop = this._initializeBackDrop();
  
        this._addEventListeners();
      } // Getters
  
  
      static get NAME() {
        return NAME$5;
      }
  
      static get Default() {
        return Default$4;
      } // Public
  
  
      toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
  
      show(relatedTarget) {
        if (this._isShown) {
          return;
        }
  
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
          relatedTarget
        });
  
        if (showEvent.defaultPrevented) {
          return;
        }
  
        this._isShown = true;
        this._element.style.visibility = 'visible';
  
        this._backdrop.show();
  
        if (!this._config.scroll) {
          new ScrollBarHelper().hide();
  
          this._enforceFocusOnElement(this._element);
        }
  
        this._element.removeAttribute('aria-hidden');
  
        this._element.setAttribute('aria-modal', true);
  
        this._element.setAttribute('role', 'dialog');
  
        this._element.classList.add(CLASS_NAME_SHOW$4);
  
        const completeCallBack = () => {
          EventHandler.trigger(this._element, EVENT_SHOWN$2, {
            relatedTarget
          });
        };
  
        this._queueCallback(completeCallBack, this._element, true);
      }
  
      hide() {
        if (!this._isShown) {
          return;
        }
  
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);
  
        if (hideEvent.defaultPrevented) {
          return;
        }
  
        EventHandler.off(document, EVENT_FOCUSIN$1);
  
        this._element.blur();
  
        this._isShown = false;
  
        this._element.classList.remove(CLASS_NAME_SHOW$4);
  
        this._backdrop.hide();
  
        const completeCallback = () => {
          this._element.setAttribute('aria-hidden', true);
  
          this._element.removeAttribute('aria-modal');
  
          this._element.removeAttribute('role');
  
          this._element.style.visibility = 'hidden';
  
          if (!this._config.scroll) {
            new ScrollBarHelper().reset();
          }
  
          EventHandler.trigger(this._element, EVENT_HIDDEN$2);
        };
  
        this._queueCallback(completeCallback, this._element, true);
      }
  
      dispose() {
        this._backdrop.dispose();
  
        super.dispose();
        EventHandler.off(document, EVENT_FOCUSIN$1);
      } // Private
  
  
      _getConfig(config) {
        config = { ...Default$4,
          ...Manipulator.getDataAttributes(this._element),
          ...(typeof config === 'object' ? config : {})
        };
        typeCheckConfig(NAME$5, config, DefaultType$4);
        return config;
      }
  
      _initializeBackDrop() {
        return new Backdrop({
          isVisible: this._config.backdrop,
          isAnimated: true,
          rootElement: this._element.parentNode,
          clickCallback: () => this.hide()
        });
      }
  
      _enforceFocusOnElement(element) {
        EventHandler.off(document, EVENT_FOCUSIN$1); // guard against infinite focus loop
  
        EventHandler.on(document, EVENT_FOCUSIN$1, event => {
          if (document !== event.target && element !== event.target && !element.contains(event.target)) {
            element.focus();
          }
        });
        element.focus();
      }
  
      _addEventListeners() {
        EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, () => this.hide());
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
          if (this._config.keyboard && event.key === ESCAPE_KEY) {
            this.hide();
          }
        });
      } // Static
  
  
      static jQueryInterface(config) {
        return this.each(function () {
          const data = Offcanvas.getOrCreateInstance(this, config);
  
          if (typeof config !== 'string') {
            return;
          }
  
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError(`No method named "${config}"`);
          }
  
          data[config](this);
        });
      }
  
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
  
  
    EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
      const target = getElementFromSelector(this);
  
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }
  
      if (isDisabled(this)) {
        return;
      }
  
      EventHandler.one(target, EVENT_HIDDEN$2, () => {
        // focus on trigger when it is closed
        if (isVisible(this)) {
          this.focus();
        }
      }); // avoid conflict when clicking a toggler of an offcanvas, while another is open
  
      const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
  
      if (allReadyOpen && allReadyOpen !== target) {
        Offcanvas.getInstance(allReadyOpen).hide();
      }
  
      const data = Offcanvas.getOrCreateInstance(target);
      data.toggle(this);
    });
    EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => SelectorEngine.find(OPEN_SELECTOR).forEach(el => Offcanvas.getOrCreateInstance(el).show()));
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */
  
    defineJQueryPlugin(Offcanvas);
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): util/sanitizer.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    const uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
    const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */
  
    const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
    /**
     * A pattern that matches safe data URLs. Only matches image, video and audio types.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */
  
    const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  
    const allowedAttribute = (attr, allowedAttributeList) => {
      const attrName = attr.nodeName.toLowerCase();
  
      if (allowedAttributeList.includes(attrName)) {
        if (uriAttrs.has(attrName)) {
          return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
        }
  
        return true;
      }
  
      const regExp = allowedAttributeList.filter(attrRegex => attrRegex instanceof RegExp); // Check if a regular expression validates the attribute.
  
      for (let i = 0, len = regExp.length; i < len; i++) {
        if (regExp[i].test(attrName)) {
          return true;
        }
      }
  
      return false;
    };
  
    const DefaultAllowlist = {
      // Global attributes allowed on any supplied element below.
      '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
      a: ['target', 'href', 'title', 'rel'],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    };
    function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
      if (!unsafeHtml.length) {
        return unsafeHtml;
      }
  
      if (sanitizeFn && typeof sanitizeFn === 'function') {
        return sanitizeFn(unsafeHtml);
      }
  
      const domParser = new window.DOMParser();
      const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
      const allowlistKeys = Object.keys(allowList);
      const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
  
      for (let i = 0, len = elements.length; i < len; i++) {
        const el = elements[i];
        const elName = el.nodeName.toLowerCase();
  
        if (!allowlistKeys.includes(elName)) {
          el.remove();
          continue;
        }
  
        const attributeList = [].concat(...el.attributes);
        const allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
        attributeList.forEach(attr => {
          if (!allowedAttribute(attr, allowedAttributes)) {
            el.removeAttribute(attr.nodeName);
          }
        });
      }
  
      return createdDocument.body.innerHTML;
    }
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): tooltip.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const NAME$4 = 'tooltip';
    const DATA_KEY$4 = 'bs.tooltip';
    const EVENT_KEY$4 = `.${DATA_KEY$4}`;
    const CLASS_PREFIX$1 = 'bs-tooltip';
    const BSCLS_PREFIX_REGEX$1 = new RegExp(`(^|\\s)${CLASS_PREFIX$1}\\S+`, 'g');
    const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
    const DefaultType$3 = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(array|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacements: 'array',
      boundary: '(string|element)',
      customClass: '(string|function)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      allowList: 'object',
      popperConfig: '(null|object|function)'
    };
    const AttachmentMap = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: isRTL() ? 'left' : 'right',
      BOTTOM: 'bottom',
      LEFT: isRTL() ? 'right' : 'left'
    };
    const Default$3 = {
      animation: true,
      template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: false,
      selector: false,
      placement: 'top',
      offset: [0, 0],
      container: false,
      fallbackPlacements: ['top', 'right', 'bottom', 'left'],
      boundary: 'clippingParents',
      customClass: '',
      sanitize: true,
      sanitizeFn: null,
      allowList: DefaultAllowlist,
      popperConfig: null
    };
    const Event$2 = {
      HIDE: `hide${EVENT_KEY$4}`,
      HIDDEN: `hidden${EVENT_KEY$4}`,
      SHOW: `show${EVENT_KEY$4}`,
      SHOWN: `shown${EVENT_KEY$4}`,
      INSERTED: `inserted${EVENT_KEY$4}`,
      CLICK: `click${EVENT_KEY$4}`,
      FOCUSIN: `focusin${EVENT_KEY$4}`,
      FOCUSOUT: `focusout${EVENT_KEY$4}`,
      MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
      MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
    };
    const CLASS_NAME_FADE$3 = 'fade';
    const CLASS_NAME_MODAL = 'modal';
    const CLASS_NAME_SHOW$3 = 'show';
    const HOVER_STATE_SHOW = 'show';
    const HOVER_STATE_OUT = 'out';
    const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
    const TRIGGER_HOVER = 'hover';
    const TRIGGER_FOCUS = 'focus';
    const TRIGGER_CLICK = 'click';
    const TRIGGER_MANUAL = 'manual';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  
    class Tooltip extends BaseComponent {
      constructor(element, config) {
        if (typeof Popper__namespace === 'undefined') {
          throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
        }
  
        super(element); // private
  
        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = '';
        this._activeTrigger = {};
        this._popper = null; // Protected
  
        this._config = this._getConfig(config);
        this.tip = null;
  
        this._setListeners();
      } // Getters
  
  
      static get Default() {
        return Default$3;
      }
  
      static get NAME() {
        return NAME$4;
      }
  
      static get Event() {
        return Event$2;
      }
  
      static get DefaultType() {
        return DefaultType$3;
      } // Public
  
  
      enable() {
        this._isEnabled = true;
      }
  
      disable() {
        this._isEnabled = false;
      }
  
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
  
      toggle(event) {
        if (!this._isEnabled) {
          return;
        }
  
        if (event) {
          const context = this._initializeOnDelegatedTarget(event);
  
          context._activeTrigger.click = !context._activeTrigger.click;
  
          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {
          if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$3)) {
            this._leave(null, this);
  
            return;
          }
  
          this._enter(null, this);
        }
      }
  
      dispose() {
        clearTimeout(this._timeout);
        EventHandler.off(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);
  
        if (this.tip) {
          this.tip.remove();
        }
  
        if (this._popper) {
          this._popper.destroy();
        }
  
        super.dispose();
      }
  
      show() {
        if (this._element.style.display === 'none') {
          throw new Error('Please use show on visible elements');
        }
  
        if (!(this.isWithContent() && this._isEnabled)) {
          return;
        }
  
        const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
        const shadowRoot = findShadowRoot(this._element);
        const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);
  
        if (showEvent.defaultPrevented || !isInTheDom) {
          return;
        }
  
        const tip = this.getTipElement();
        const tipId = getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
  
        this._element.setAttribute('aria-describedby', tipId);
  
        this.setContent();
  
        if (this._config.animation) {
          tip.classList.add(CLASS_NAME_FADE$3);
        }
  
        const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
  
        const attachment = this._getAttachment(placement);
  
        this._addAttachmentClass(attachment);
  
        const {
          container
        } = this._config;
        Data.set(tip, this.constructor.DATA_KEY, this);
  
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
          container.appendChild(tip);
          EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
        }
  
        if (this._popper) {
          this._popper.update();
        } else {
          this._popper = Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
        }
  
        tip.classList.add(CLASS_NAME_SHOW$3);
        const customClass = typeof this._config.customClass === 'function' ? this._config.customClass() : this._config.customClass;
  
        if (customClass) {
          tip.classList.add(...customClass.split(' '));
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
  
  
        if ('ontouchstart' in document.documentElement) {
          [].concat(...document.body.children).forEach(element => {
            EventHandler.on(element, 'mouseover', noop);
          });
        }
  
        const complete = () => {
          const prevHoverState = this._hoverState;
          this._hoverState = null;
          EventHandler.trigger(this._element, this.constructor.Event.SHOWN);
  
          if (prevHoverState === HOVER_STATE_OUT) {
            this._leave(null, this);
          }
        };
  
        const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$3);
  
        this._queueCallback(complete, this.tip, isAnimated);
      }
  
      hide() {
        if (!this._popper) {
          return;
        }
  
        const tip = this.getTipElement();
  
        const complete = () => {
          if (this._isWithActiveTrigger()) {
            return;
          }
  
          if (this._hoverState !== HOVER_STATE_SHOW) {
            tip.remove();
          }
  
          this._cleanTipClass();
  
          this._element.removeAttribute('aria-describedby');
  
          EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);
  
          if (this._popper) {
            this._popper.destroy();
  
            this._popper = null;
          }
        };
  
        const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);
  
        if (hideEvent.defaultPrevented) {
          return;
        }
  
        tip.classList.remove(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
  
        if ('ontouchstart' in document.documentElement) {
          [].concat(...document.body.children).forEach(element => EventHandler.off(element, 'mouseover', noop));
        }
  
        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$3);
  
        this._queueCallback(complete, this.tip, isAnimated);
  
        this._hoverState = '';
      }
  
      update() {
        if (this._popper !== null) {
          this._popper.update();
        }
      } // Protected
  
  
      isWithContent() {
        return Boolean(this.getTitle());
      }
  
      getTipElement() {
        if (this.tip) {
          return this.tip;
        }
  
        const element = document.createElement('div');
        element.innerHTML = this._config.template;
        this.tip = element.children[0];
        return this.tip;
      }
  
      setContent() {
        const tip = this.getTipElement();
        this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
        tip.classList.remove(CLASS_NAME_FADE$3, CLASS_NAME_SHOW$3);
      }
  
      setElementContent(element, content) {
        if (element === null) {
          return;
        }
  
        if (isElement(content)) {
          content = getElement(content); // content is a DOM node or a jQuery
  
          if (this._config.html) {
            if (content.parentNode !== element) {
              element.innerHTML = '';
              element.appendChild(content);
            }
          } else {
            element.textContent = content.textContent;
          }
  
          return;
        }
  
        if (this._config.html) {
          if (this._config.sanitize) {
            content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
          }
  
          element.innerHTML = content;
        } else {
          element.textContent = content;
        }
      }
  
      getTitle() {
        let title = this._element.getAttribute('data-bs-original-title');
  
        if (!title) {
          title = typeof this._config.title === 'function' ? this._config.title.call(this._element) : this._config.title;
        }
  
        return title;
      }
  
      updateAttachment(attachment) {
        if (attachment === 'right') {
          return 'end';
        }
  
        if (attachment === 'left') {
          return 'start';
        }
  
        return attachment;
      } // Private
  
  
      _initializeOnDelegatedTarget(event, context) {
        const dataKey = this.constructor.DATA_KEY;
        context = context || Data.get(event.delegateTarget, dataKey);
  
        if (!context) {
          context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
          Data.set(event.delegateTarget, dataKey, context);
        }
  
        return context;
      }
  
      _getOffset() {
        const {
          offset
        } = this._config;
  
        if (typeof offset === 'string') {
          return offset.split(',').map(val => Number.parseInt(val, 10));
        }
  
        if (typeof offset === 'function') {
          return popperData => offset(popperData, this._element);
        }
  
        return offset;
      }
  
      _getPopperConfig(attachment) {
        const defaultBsPopperConfig = {
          placement: attachment,
          modifiers: [{
            name: 'flip',
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }, {
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'arrow',
            options: {
              element: `.${this.constructor.NAME}-arrow`
            }
          }, {
            name: 'onChange',
            enabled: true,
            phase: 'afterWrite',
            fn: data => this._handlePopperPlacementChange(data)
          }],
          onFirstUpdate: data => {
            if (data.options.placement !== data.placement) {
              this._handlePopperPlacementChange(data);
            }
          }
        };
        return { ...defaultBsPopperConfig,
          ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
        };
      }
  
      _addAttachmentClass(attachment) {
        this.getTipElement().classList.add(`${CLASS_PREFIX$1}-${this.updateAttachment(attachment)}`);
      }
  
      _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      }
  
      _setListeners() {
        const triggers = this._config.trigger.split(' ');
  
        triggers.forEach(trigger => {
          if (trigger === 'click') {
            EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, event => this.toggle(event));
          } else if (trigger !== TRIGGER_MANUAL) {
            const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
            const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
            EventHandler.on(this._element, eventIn, this._config.selector, event => this._enter(event));
            EventHandler.on(this._element, eventOut, this._config.selector, event => this._leave(event));
          }
        });
  
        this._hideModalHandler = () => {
          if (this._element) {
            this.hide();
          }
        };
  
        EventHandler.on(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);
  
        if (this._config.selector) {
          this._config = { ...this._config,
            trigger: 'manual',
            selector: ''
          };
        } else {
          this._fixTitle();
        }
      }
  
      _fixTitle() {
        const title = this._element.getAttribute('title');
  
        const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');
  
        if (title || originalTitleType !== 'string') {
          this._element.setAttribute('data-bs-original-title', title || '');
  
          if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
            this._element.setAttribute('aria-label', title);
          }
  
          this._element.setAttribute('title', '');
        }
      }
  
      _enter(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);
  
        if (event) {
          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
        }
  
        if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
          context._hoverState = HOVER_STATE_SHOW;
          return;
        }
  
        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_SHOW;
  
        if (!context._config.delay || !context._config.delay.show) {
          context.show();
          return;
        }
  
        context._timeout = setTimeout(() => {
          if (context._hoverState === HOVER_STATE_SHOW) {
            context.show();
          }
        }, context._config.delay.show);
      }
  
      _leave(event, context) {
        context = this._initializeOnDelegatedTarget(event, context);
  
        if (event) {
          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
        }
  
        if (context._isWithActiveTrigger()) {
          return;
        }
  
        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_OUT;
  
        if (!context._config.delay || !context._config.delay.hide) {
          context.hide();
          return;
        }
  
        context._timeout = setTimeout(() => {
          if (context._hoverState === HOVER_STATE_OUT) {
            context.hide();
          }
        }, context._config.delay.hide);
      }
  
      _isWithActiveTrigger() {
        for (const trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }
  
        return false;
      }
  
      _getConfig(config) {
        const dataAttributes = Manipulator.getDataAttributes(this._element);
        Object.keys(dataAttributes).forEach(dataAttr => {
          if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
            delete dataAttributes[dataAttr];
          }
        });
        config = { ...this.constructor.Default,
          ...dataAttributes,
          ...(typeof config === 'object' && config ? config : {})
        };
        config.container = config.container === false ? document.body : getElement(config.container);
  
        if (typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }
  
        if (typeof config.title === 'number') {
          config.title = config.title.toString();
        }
  
        if (typeof config.content === 'number') {
          config.content = config.content.toString();
        }
  
        typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
  
        if (config.sanitize) {
          config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
        }
  
        return config;
      }
  
      _getDelegateConfig() {
        const config = {};
  
        if (this._config) {
          for (const key in this._config) {
            if (this.constructor.Default[key] !== this._config[key]) {
              config[key] = this._config[key];
            }
          }
        }
  
        return config;
      }
  
      _cleanTipClass() {
        const tip = this.getTipElement();
        const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX$1);
  
        if (tabClass !== null && tabClass.length > 0) {
          tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
        }
      }
  
      _handlePopperPlacementChange(popperData) {
        const {
          state
        } = popperData;
  
        if (!state) {
          return;
        }
  
        this.tip = state.elements.popper;
  
        this._cleanTipClass();
  
        this._addAttachmentClass(this._getAttachment(state.placement));
      } // Static
  
  
      static jQueryInterface(config) {
        return this.each(function () {
          const data = Tooltip.getOrCreateInstance(this, config);
  
          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError(`No method named "${config}"`);
            }
  
            data[config]();
          }
        });
      }
  
    }
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Tooltip to jQuery only if jQuery is present
     */
  
  
    defineJQueryPlugin(Tooltip);
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): popover.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const NAME$3 = 'popover';
    const DATA_KEY$3 = 'bs.popover';
    const EVENT_KEY$3 = `.${DATA_KEY$3}`;
    const CLASS_PREFIX = 'bs-popover';
    const BSCLS_PREFIX_REGEX = new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`, 'g');
    const Default$2 = { ...Tooltip.Default,
      placement: 'right',
      offset: [0, 8],
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
    };
    const DefaultType$2 = { ...Tooltip.DefaultType,
      content: '(string|element|function)'
    };
    const Event$1 = {
      HIDE: `hide${EVENT_KEY$3}`,
      HIDDEN: `hidden${EVENT_KEY$3}`,
      SHOW: `show${EVENT_KEY$3}`,
      SHOWN: `shown${EVENT_KEY$3}`,
      INSERTED: `inserted${EVENT_KEY$3}`,
      CLICK: `click${EVENT_KEY$3}`,
      FOCUSIN: `focusin${EVENT_KEY$3}`,
      FOCUSOUT: `focusout${EVENT_KEY$3}`,
      MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
      MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
    };
    const CLASS_NAME_FADE$2 = 'fade';
    const CLASS_NAME_SHOW$2 = 'show';
    const SELECTOR_TITLE = '.popover-header';
    const SELECTOR_CONTENT = '.popover-body';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  
    class Popover extends Tooltip {
      // Getters
      static get Default() {
        return Default$2;
      }
  
      static get NAME() {
        return NAME$3;
      }
  
      static get Event() {
        return Event$1;
      }
  
      static get DefaultType() {
        return DefaultType$2;
      } // Overrides
  
  
      isWithContent() {
        return this.getTitle() || this._getContent();
      }
  
      getTipElement() {
        if (this.tip) {
          return this.tip;
        }
  
        this.tip = super.getTipElement();
  
        if (!this.getTitle()) {
          SelectorEngine.findOne(SELECTOR_TITLE, this.tip).remove();
        }
  
        if (!this._getContent()) {
          SelectorEngine.findOne(SELECTOR_CONTENT, this.tip).remove();
        }
  
        return this.tip;
      }
  
      setContent() {
        const tip = this.getTipElement(); // we use append for html objects to maintain js events
  
        this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());
  
        let content = this._getContent();
  
        if (typeof content === 'function') {
          content = content.call(this._element);
        }
  
        this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
        tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      } // Private
  
  
      _addAttachmentClass(attachment) {
        this.getTipElement().classList.add(`${CLASS_PREFIX}-${this.updateAttachment(attachment)}`);
      }
  
      _getContent() {
        return this._element.getAttribute('data-bs-content') || this._config.content;
      }
  
      _cleanTipClass() {
        const tip = this.getTipElement();
        const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);
  
        if (tabClass !== null && tabClass.length > 0) {
          tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
        }
      } // Static
  
  
      static jQueryInterface(config) {
        return this.each(function () {
          const data = Popover.getOrCreateInstance(this, config);
  
          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError(`No method named "${config}"`);
            }
  
            data[config]();
          }
        });
      }
  
    }
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Popover to jQuery only if jQuery is present
     */
  
  
    defineJQueryPlugin(Popover);
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): scrollspy.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const NAME$2 = 'scrollspy';
    const DATA_KEY$2 = 'bs.scrollspy';
    const EVENT_KEY$2 = `.${DATA_KEY$2}`;
    const DATA_API_KEY$1 = '.data-api';
    const Default$1 = {
      offset: 10,
      method: 'auto',
      target: ''
    };
    const DefaultType$1 = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    };
    const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
    const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
    const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
    const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
    const CLASS_NAME_ACTIVE$1 = 'active';
    const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
    const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
    const SELECTOR_NAV_LINKS = '.nav-link';
    const SELECTOR_NAV_ITEMS = '.nav-item';
    const SELECTOR_LIST_ITEMS = '.list-group-item';
    const SELECTOR_DROPDOWN$1 = '.dropdown';
    const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
    const METHOD_OFFSET = 'offset';
    const METHOD_POSITION = 'position';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  
    class ScrollSpy extends BaseComponent {
      constructor(element, config) {
        super(element);
        this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
        this._config = this._getConfig(config);
        this._selector = `${this._config.target} ${SELECTOR_NAV_LINKS}, ${this._config.target} ${SELECTOR_LIST_ITEMS}, ${this._config.target} .${CLASS_NAME_DROPDOWN_ITEM}`;
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());
        this.refresh();
  
        this._process();
      } // Getters
  
  
      static get Default() {
        return Default$1;
      }
  
      static get NAME() {
        return NAME$2;
      } // Public
  
  
      refresh() {
        const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
        const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        const targets = SelectorEngine.find(this._selector);
        targets.map(element => {
          const targetSelector = getSelectorFromElement(element);
          const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;
  
          if (target) {
            const targetBCR = target.getBoundingClientRect();
  
            if (targetBCR.width || targetBCR.height) {
              return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
            }
          }
  
          return null;
        }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
          this._offsets.push(item[0]);
  
          this._targets.push(item[1]);
        });
      }
  
      dispose() {
        EventHandler.off(this._scrollElement, EVENT_KEY$2);
        super.dispose();
      } // Private
  
  
      _getConfig(config) {
        config = { ...Default$1,
          ...Manipulator.getDataAttributes(this._element),
          ...(typeof config === 'object' && config ? config : {})
        };
  
        if (typeof config.target !== 'string' && isElement(config.target)) {
          let {
            id
          } = config.target;
  
          if (!id) {
            id = getUID(NAME$2);
            config.target.id = id;
          }
  
          config.target = `#${id}`;
        }
  
        typeCheckConfig(NAME$2, config, DefaultType$1);
        return config;
      }
  
      _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
  
      _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
  
      _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
  
      _process() {
        const scrollTop = this._getScrollTop() + this._config.offset;
  
        const scrollHeight = this._getScrollHeight();
  
        const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
  
        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }
  
        if (scrollTop >= maxScroll) {
          const target = this._targets[this._targets.length - 1];
  
          if (this._activeTarget !== target) {
            this._activate(target);
          }
  
          return;
        }
  
        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
          this._activeTarget = null;
  
          this._clear();
  
          return;
        }
  
        for (let i = this._offsets.length; i--;) {
          const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);
  
          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      }
  
      _activate(target) {
        this._activeTarget = target;
  
        this._clear();
  
        const queries = this._selector.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);
  
        const link = SelectorEngine.findOne(queries.join(','));
  
        if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
          SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
          link.classList.add(CLASS_NAME_ACTIVE$1);
        } else {
          // Set triggered link as active
          link.classList.add(CLASS_NAME_ACTIVE$1);
          SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
            // Set triggered links parents as active
            // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
            SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item
  
            SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(navItem => {
              SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));
            });
          });
        }
  
        EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
          relatedTarget: target
        });
      }
  
      _clear() {
        SelectorEngine.find(this._selector).filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
      } // Static
  
  
      static jQueryInterface(config) {
        return this.each(function () {
          const data = ScrollSpy.getOrCreateInstance(this, config);
  
          if (typeof config !== 'string') {
            return;
          }
  
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
  
          data[config]();
        });
      }
  
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
  
  
    EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
      SelectorEngine.find(SELECTOR_DATA_SPY).forEach(spy => new ScrollSpy(spy));
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .ScrollSpy to jQuery only if jQuery is present
     */
  
    defineJQueryPlugin(ScrollSpy);
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): tab.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const NAME$1 = 'tab';
    const DATA_KEY$1 = 'bs.tab';
    const EVENT_KEY$1 = `.${DATA_KEY$1}`;
    const DATA_API_KEY = '.data-api';
    const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
    const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
    const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
    const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
    const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
    const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
    const CLASS_NAME_ACTIVE = 'active';
    const CLASS_NAME_FADE$1 = 'fade';
    const CLASS_NAME_SHOW$1 = 'show';
    const SELECTOR_DROPDOWN = '.dropdown';
    const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
    const SELECTOR_ACTIVE = '.active';
    const SELECTOR_ACTIVE_UL = ':scope > li > .active';
    const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
    const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
    const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  
    class Tab extends BaseComponent {
      // Getters
      static get NAME() {
        return NAME$1;
      } // Public
  
  
      show() {
        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
          return;
        }
  
        let previous;
        const target = getElementFromSelector(this._element);
  
        const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);
  
        if (listElement) {
          const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
          previous = SelectorEngine.find(itemSelector, listElement);
          previous = previous[previous.length - 1];
        }
  
        const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
          relatedTarget: this._element
        }) : null;
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
          relatedTarget: previous
        });
  
        if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
          return;
        }
  
        this._activate(this._element, listElement);
  
        const complete = () => {
          EventHandler.trigger(previous, EVENT_HIDDEN$1, {
            relatedTarget: this._element
          });
          EventHandler.trigger(this._element, EVENT_SHOWN$1, {
            relatedTarget: previous
          });
        };
  
        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      } // Private
  
  
      _activate(element, container, callback) {
        const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
        const active = activeElements[0];
        const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);
  
        const complete = () => this._transitionComplete(element, active, callback);
  
        if (active && isTransitioning) {
          active.classList.remove(CLASS_NAME_SHOW$1);
  
          this._queueCallback(complete, element, true);
        } else {
          complete();
        }
      }
  
      _transitionComplete(element, active, callback) {
        if (active) {
          active.classList.remove(CLASS_NAME_ACTIVE);
          const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);
  
          if (dropdownChild) {
            dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
          }
  
          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }
  
        element.classList.add(CLASS_NAME_ACTIVE);
  
        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        }
  
        reflow(element);
  
        if (element.classList.contains(CLASS_NAME_FADE$1)) {
          element.classList.add(CLASS_NAME_SHOW$1);
        }
  
        let parent = element.parentNode;
  
        if (parent && parent.nodeName === 'LI') {
          parent = parent.parentNode;
        }
  
        if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
          const dropdownElement = element.closest(SELECTOR_DROPDOWN);
  
          if (dropdownElement) {
            SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add(CLASS_NAME_ACTIVE));
          }
  
          element.setAttribute('aria-expanded', true);
        }
  
        if (callback) {
          callback();
        }
      } // Static
  
  
      static jQueryInterface(config) {
        return this.each(function () {
          const data = Tab.getOrCreateInstance(this);
  
          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError(`No method named "${config}"`);
            }
  
            data[config]();
          }
        });
      }
  
    }
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */
  
  
    EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }
  
      if (isDisabled(this)) {
        return;
      }
  
      const data = Tab.getOrCreateInstance(this);
      data.show();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Tab to jQuery only if jQuery is present
     */
  
    defineJQueryPlugin(Tab);
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): toast.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
  
    const NAME = 'toast';
    const DATA_KEY = 'bs.toast';
    const EVENT_KEY = `.${DATA_KEY}`;
    const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
    const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
    const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
    const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
    const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
    const EVENT_HIDE = `hide${EVENT_KEY}`;
    const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
    const EVENT_SHOW = `show${EVENT_KEY}`;
    const EVENT_SHOWN = `shown${EVENT_KEY}`;
    const CLASS_NAME_FADE = 'fade';
    const CLASS_NAME_HIDE = 'hide';
    const CLASS_NAME_SHOW = 'show';
    const CLASS_NAME_SHOWING = 'showing';
    const DefaultType = {
      animation: 'boolean',
      autohide: 'boolean',
      delay: 'number'
    };
    const Default = {
      animation: true,
      autohide: true,
      delay: 5000
    };
    const SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  
    class Toast extends BaseComponent {
      constructor(element, config) {
        super(element);
        this._config = this._getConfig(config);
        this._timeout = null;
        this._hasMouseInteraction = false;
        this._hasKeyboardInteraction = false;
  
        this._setListeners();
      } // Getters
  
  
      static get DefaultType() {
        return DefaultType;
      }
  
      static get Default() {
        return Default;
      }
  
      static get NAME() {
        return NAME;
      } // Public
  
  
      show() {
        const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
  
        if (showEvent.defaultPrevented) {
          return;
        }
  
        this._clearTimeout();
  
        if (this._config.animation) {
          this._element.classList.add(CLASS_NAME_FADE);
        }
  
        const complete = () => {
          this._element.classList.remove(CLASS_NAME_SHOWING);
  
          this._element.classList.add(CLASS_NAME_SHOW);
  
          EventHandler.trigger(this._element, EVENT_SHOWN);
  
          this._maybeScheduleHide();
        };
  
        this._element.classList.remove(CLASS_NAME_HIDE);
  
        reflow(this._element);
  
        this._element.classList.add(CLASS_NAME_SHOWING);
  
        this._queueCallback(complete, this._element, this._config.animation);
      }
  
      hide() {
        if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
          return;
        }
  
        const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
  
        if (hideEvent.defaultPrevented) {
          return;
        }
  
        const complete = () => {
          this._element.classList.add(CLASS_NAME_HIDE);
  
          EventHandler.trigger(this._element, EVENT_HIDDEN);
        };
  
        this._element.classList.remove(CLASS_NAME_SHOW);
  
        this._queueCallback(complete, this._element, this._config.animation);
      }
  
      dispose() {
        this._clearTimeout();
  
        if (this._element.classList.contains(CLASS_NAME_SHOW)) {
          this._element.classList.remove(CLASS_NAME_SHOW);
        }
  
        super.dispose();
      } // Private
  
  
      _getConfig(config) {
        config = { ...Default,
          ...Manipulator.getDataAttributes(this._element),
          ...(typeof config === 'object' && config ? config : {})
        };
        typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      }
  
      _maybeScheduleHide() {
        if (!this._config.autohide) {
          return;
        }
  
        if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
          return;
        }
  
        this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay);
      }
  
      _onInteraction(event, isInteracting) {
        switch (event.type) {
          case 'mouseover':
          case 'mouseout':
            this._hasMouseInteraction = isInteracting;
            break;
  
          case 'focusin':
          case 'focusout':
            this._hasKeyboardInteraction = isInteracting;
            break;
        }
  
        if (isInteracting) {
          this._clearTimeout();
  
          return;
        }
  
        const nextElement = event.relatedTarget;
  
        if (this._element === nextElement || this._element.contains(nextElement)) {
          return;
        }
  
        this._maybeScheduleHide();
      }
  
      _setListeners() {
        EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, () => this.hide());
        EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
        EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
        EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
        EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
      }
  
      _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
      } // Static
  
  
      static jQueryInterface(config) {
        return this.each(function () {
          const data = Toast.getOrCreateInstance(this, config);
  
          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError(`No method named "${config}"`);
            }
  
            data[config](this);
          }
        });
      }
  
    }
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Toast to jQuery only if jQuery is present
     */
  
  
    defineJQueryPlugin(Toast);
  
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.0.2): index.umd.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    var index_umd = {
      Alert,
      Button,
      Carousel,
      Collapse,
      Dropdown,
      Modal,
      Offcanvas,
      Popover,
      ScrollSpy,
      Tab,
      Toast,
      Tooltip
    };
  
    return index_umd;
  
  })));
  //# sourceMappingURL=bootstrap.js.map
  