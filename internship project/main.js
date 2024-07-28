/*! For license information please see main.js.LICENSE.txt */
(() => {
    var t = {
            576: function(t) {
                var e;
                e = function() {
                    return function() {
                        var t = {
                                686: function(t, e, n) {
                                    "use strict";
                                    n.d(e, {
                                        default: function() {
                                            return S
                                        }
                                    });
                                    var r = n(279),
                                        o = n.n(r),
                                        i = n(370),
                                        a = n.n(i),
                                        u = n(817),
                                        l = n.n(u);

                                    function c(t) {
                                        try {
                                            return document.execCommand(t)
                                        } catch (t) {
                                            return !1
                                        }
                                    }
                                    var s = function(t) {
                                            var e = l()(t);
                                            return c("cut"), e
                                        },
                                        f = function(t, e) {
                                            var n = function(t) {
                                                var e = "rtl" === document.documentElement.getAttribute("dir"),
                                                    n = document.createElement("textarea");
                                                n.style.fontSize = "12pt", n.style.border = "0", n.style.padding = "0", n.style.margin = "0", n.style.position = "absolute", n.style[e ? "right" : "left"] = "-9999px";
                                                var r = window.pageYOffset || document.documentElement.scrollTop;
                                                return n.style.top = "".concat(r, "px"), n.setAttribute("readonly", ""), n.value = t, n
                                            }(t);
                                            e.container.appendChild(n);
                                            var r = l()(n);
                                            return c("copy"), n.remove(), r
                                        },
                                        d = function(t) {
                                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                                    container: document.body
                                                },
                                                n = "";
                                            return "string" == typeof t ? n = f(t, e) : t instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == t ? void 0 : t.type) ? n = f(t.value, e) : (n = l()(t), c("copy")), n
                                        };

                                    function y(t) {
                                        return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                            return typeof t
                                        } : function(t) {
                                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                        }, y(t)
                                    }

                                    function h(t) {
                                        return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                            return typeof t
                                        } : function(t) {
                                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                        }, h(t)
                                    }

                                    function m(t, e) {
                                        for (var n = 0; n < e.length; n++) {
                                            var r = e[n];
                                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                        }
                                    }

                                    function v(t, e) {
                                        return v = Object.setPrototypeOf || function(t, e) {
                                            return t.__proto__ = e, t
                                        }, v(t, e)
                                    }

                                    function p(t) {
                                        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                            return t.__proto__ || Object.getPrototypeOf(t)
                                        }, p(t)
                                    }

                                    function b(t, e) {
                                        var n = "data-clipboard-".concat(t);
                                        if (e.hasAttribute(n)) return e.getAttribute(n)
                                    }
                                    var g = function(t) {
                                            ! function(t, e) {
                                                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                                t.prototype = Object.create(e && e.prototype, {
                                                    constructor: {
                                                        value: t,
                                                        writable: !0,
                                                        configurable: !0
                                                    }
                                                }), e && v(t, e)
                                            }(l, t);
                                            var e, n, r, o, i, u = (o = l, i = function() {
                                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                                if (Reflect.construct.sham) return !1;
                                                if ("function" == typeof Proxy) return !0;
                                                try {
                                                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                                                } catch (t) {
                                                    return !1
                                                }
                                            }(), function() {
                                                var t, e, n = p(o);
                                                if (i) {
                                                    var r = p(this).constructor;
                                                    t = Reflect.construct(n, arguments, r)
                                                } else t = n.apply(this, arguments);
                                                return !(e = t) || "object" !== h(e) && "function" != typeof e ? function(t) {
                                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                    return t
                                                }(this) : e
                                            });

                                            function l(t, e) {
                                                var n;
                                                return function(t, e) {
                                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                                }(this, l), (n = u.call(this)).resolveOptions(e), n.listenClick(t), n
                                            }
                                            return e = l, n = [{
                                                key: "resolveOptions",
                                                value: function() {
                                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                    this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === h(t.container) ? t.container : document.body
                                                }
                                            }, {
                                                key: "listenClick",
                                                value: function(t) {
                                                    var e = this;
                                                    this.listener = a()(t, "click", (function(t) {
                                                        return e.onClick(t)
                                                    }))
                                                }
                                            }, {
                                                key: "onClick",
                                                value: function(t) {
                                                    var e = t.delegateTarget || t.currentTarget,
                                                        n = this.action(e) || "copy",
                                                        r = function() {
                                                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                                e = t.action,
                                                                n = void 0 === e ? "copy" : e,
                                                                r = t.container,
                                                                o = t.target,
                                                                i = t.text;
                                                            if ("copy" !== n && "cut" !== n) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                                            if (void 0 !== o) {
                                                                if (!o || "object" !== y(o) || 1 !== o.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                                                if ("copy" === n && o.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                                                if ("cut" === n && (o.hasAttribute("readonly") || o.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                                                            }
                                                            return i ? d(i, {
                                                                container: r
                                                            }) : o ? "cut" === n ? s(o) : d(o, {
                                                                container: r
                                                            }) : void 0
                                                        }({
                                                            action: n,
                                                            container: this.container,
                                                            target: this.target(e),
                                                            text: this.text(e)
                                                        });
                                                    this.emit(r ? "success" : "error", {
                                                        action: n,
                                                        text: r,
                                                        trigger: e,
                                                        clearSelection: function() {
                                                            e && e.focus(), window.getSelection().removeAllRanges()
                                                        }
                                                    })
                                                }
                                            }, {
                                                key: "defaultAction",
                                                value: function(t) {
                                                    return b("action", t)
                                                }
                                            }, {
                                                key: "defaultTarget",
                                                value: function(t) {
                                                    var e = b("target", t);
                                                    if (e) return document.querySelector(e)
                                                }
                                            }, {
                                                key: "defaultText",
                                                value: function(t) {
                                                    return b("text", t)
                                                }
                                            }, {
                                                key: "destroy",
                                                value: function() {
                                                    this.listener.destroy()
                                                }
                                            }], r = [{
                                                key: "copy",
                                                value: function(t) {
                                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                                        container: document.body
                                                    };
                                                    return d(t, e)
                                                }
                                            }, {
                                                key: "cut",
                                                value: function(t) {
                                                    return s(t)
                                                }
                                            }, {
                                                key: "isSupported",
                                                value: function() {
                                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                                        e = "string" == typeof t ? [t] : t,
                                                        n = !!document.queryCommandSupported;
                                                    return e.forEach((function(t) {
                                                        n = n && !!document.queryCommandSupported(t)
                                                    })), n
                                                }
                                            }], n && m(e.prototype, n), r && m(e, r), l
                                        }(o()),
                                        S = g
                                },
                                828: function(t) {
                                    if ("undefined" != typeof Element && !Element.prototype.matches) {
                                        var e = Element.prototype;
                                        e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector
                                    }
                                    t.exports = function(t, e) {
                                        for (; t && 9 !== t.nodeType;) {
                                            if ("function" == typeof t.matches && t.matches(e)) return t;
                                            t = t.parentNode
                                        }
                                    }
                                },
                                438: function(t, e, n) {
                                    var r = n(828);

                                    function o(t, e, n, r, o) {
                                        var a = i.apply(this, arguments);
                                        return t.addEventListener(n, a, o), {
                                            destroy: function() {
                                                t.removeEventListener(n, a, o)
                                            }
                                        }
                                    }

                                    function i(t, e, n, o) {
                                        return function(n) {
                                            n.delegateTarget = r(n.target, e), n.delegateTarget && o.call(t, n)
                                        }
                                    }
                                    t.exports = function(t, e, n, r, i) {
                                        return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, (function(t) {
                                            return o(t, e, n, r, i)
                                        })))
                                    }
                                },
                                879: function(t, e) {
                                    e.node = function(t) {
                                        return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
                                    }, e.nodeList = function(t) {
                                        var n = Object.prototype.toString.call(t);
                                        return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
                                    }, e.string = function(t) {
                                        return "string" == typeof t || t instanceof String
                                    }, e.fn = function(t) {
                                        return "[object Function]" === Object.prototype.toString.call(t)
                                    }
                                },
                                370: function(t, e, n) {
                                    var r = n(879),
                                        o = n(438);
                                    t.exports = function(t, e, n) {
                                        if (!t && !e && !n) throw new Error("Missing required arguments");
                                        if (!r.string(e)) throw new TypeError("Second argument must be a String");
                                        if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
                                        if (r.node(t)) return function(t, e, n) {
                                            return t.addEventListener(e, n), {
                                                destroy: function() {
                                                    t.removeEventListener(e, n)
                                                }
                                            }
                                        }(t, e, n);
                                        if (r.nodeList(t)) return function(t, e, n) {
                                            return Array.prototype.forEach.call(t, (function(t) {
                                                t.addEventListener(e, n)
                                            })), {
                                                destroy: function() {
                                                    Array.prototype.forEach.call(t, (function(t) {
                                                        t.removeEventListener(e, n)
                                                    }))
                                                }
                                            }
                                        }(t, e, n);
                                        if (r.string(t)) return function(t, e, n) {
                                            return o(document.body, t, e, n)
                                        }(t, e, n);
                                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                                    }
                                },
                                817: function(t) {
                                    t.exports = function(t) {
                                        var e;
                                        if ("SELECT" === t.nodeName) t.focus(), e = t.value;
                                        else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                                            var n = t.hasAttribute("readonly");
                                            n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
                                        } else {
                                            t.hasAttribute("contenteditable") && t.focus();
                                            var r = window.getSelection(),
                                                o = document.createRange();
                                            o.selectNodeContents(t), r.removeAllRanges(), r.addRange(o), e = r.toString()
                                        }
                                        return e
                                    }
                                },
                                279: function(t) {
                                    function e() {}
                                    e.prototype = {
                                        on: function(t, e, n) {
                                            var r = this.e || (this.e = {});
                                            return (r[t] || (r[t] = [])).push({
                                                fn: e,
                                                ctx: n
                                            }), this
                                        },
                                        once: function(t, e, n) {
                                            var r = this;

                                            function o() {
                                                r.off(t, o), e.apply(n, arguments)
                                            }
                                            return o._ = e, this.on(t, o, n)
                                        },
                                        emit: function(t) {
                                            for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, o = n.length; r < o; r++) n[r].fn.apply(n[r].ctx, e);
                                            return this
                                        },
                                        off: function(t, e) {
                                            var n = this.e || (this.e = {}),
                                                r = n[t],
                                                o = [];
                                            if (r && e)
                                                for (var i = 0, a = r.length; i < a; i++) r[i].fn !== e && r[i].fn._ !== e && o.push(r[i]);
                                            return o.length ? n[t] = o : delete n[t], this
                                        }
                                    }, t.exports = e, t.exports.TinyEmitter = e
                                }
                            },
                            e = {};

                        function n(r) {
                            if (e[r]) return e[r].exports;
                            var o = e[r] = {
                                exports: {}
                            };
                            return t[r](o, o.exports, n), o.exports
                        }
                        return n.n = function(t) {
                            var e = t && t.__esModule ? function() {
                                return t.default
                            } : function() {
                                return t
                            };
                            return n.d(e, {
                                a: e
                            }), e
                        }, n.d = function(t, e) {
                            for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                                enumerable: !0,
                                get: e[r]
                            })
                        }, n.o = function(t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }, n(686)
                    }().default
                }, t.exports = e()
            }
        },
        e = {};

    function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = e[r] = {
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e
    }, n.d = (t, e) => {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        "use strict";

        function t(e) {
            return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, t(e)
        }

        function e(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, r(o.key), o)
            }
        }

        function r(e) {
            var n = function(e) {
                if ("object" != t(e) || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, "string");
                    if ("object" != t(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == t(n) ? n : n + ""
        }
        var o = function() {
            return t = function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }, n = [{
                key: "init",
                value: function() {
                    var t = this;
                    document.querySelectorAll("[data-content-toggle]").forEach((function(e) {
                        var n = e.getAttribute("data-content-toggle"),
                            r = document.getElementById(n);
                        r && (r.querySelectorAll("a").forEach((function(t) {
                            return t.setAttribute("tabindex", "-1")
                        })), t.initEventListener(e))
                    }))
                }
            }, {
                key: "initEventListener",
                value: function(t) {
                    t.addEventListener("click", this.handleClickEvent)
                }
            }, {
                key: "handleClickEvent",
                value: function(t) {
                    var e = this.getAttribute("data-content-toggle"),
                        n = document.getElementById(e);
                    if (n) {
                        t && t.preventDefault();
                        var r = "false" === n.getAttribute("aria-hidden");
                        n.setAttribute("aria-hidden", r), this.setAttribute("aria-expanded", !r), r ? (n.classList.add("visually-hidden"), n.querySelectorAll("a").forEach((function(t) {
                            return t.setAttribute("tabindex", "-1")
                        }))) : (n.classList.remove("visually-hidden"), n.querySelectorAll("a").forEach((function(t) {
                            return t.setAttribute("tabindex", "0")
                        })));
                        var o = this.querySelector(".content_toggle--closed"),
                            i = this.querySelector(".content_toggle--open");
                        return r ? (o.classList.remove("hidden"), i.classList.add("hidden")) : (o.classList.add("hidden"), i.classList.remove("hidden")), !1
                    }
                }
            }], n && e(t.prototype, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t;
            var t, n
        }();
        const i = o;

        function a(t) {
            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, a(t)
        }

        function u(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, l(r.key), r)
            }
        }

        function l(t) {
            var e = function(t) {
                if ("object" != a(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != a(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == a(e) ? e : e + ""
        }
        var c = function() {
            return t = function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }, e = [{
                key: "sendEvent",
                value: function(t, e) {
                    "function" == typeof gtag && gtag("event", e, {
                        event_category: t,
                        value: e,
                        event_label: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                    })
                }
            }, {
                key: "logError",
                value: function(t, e) {
                    "function" == typeof gtag && gtag("event", "error", {
                        event_category: "javascript_error",
                        event_label: t + ": " + e,
                        value: 1,
                        non_interaction: !0
                    })
                }
            }], e && u(t.prototype, e), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t;
            var t, e
        }();
        const s = c;

        function f(t) {
            return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, f(t)
        }

        function d(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, y(r.key), r)
            }
        }

        function y(t) {
            var e = function(t) {
                if ("object" != f(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != f(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == f(e) ? e : e + ""
        }
        var h = function() {
            return t = function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }, (e = [{
                key: "init",
                value: function() {
                    window.onerror = function(t, e, n, r, o) {
                        return o && null !== o.message && "" !== o.message && (new s).logError(window.location.pathname, o.message), !1
                    }
                }
            }]) && d(t.prototype, e), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t;
            var t, e
        }();
        const m = h;

        function v(t) {
            return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, v(t)
        }

        function p(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, b(r.key), r)
            }
        }

        function b(t) {
            var e = function(t) {
                if ("object" != v(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != v(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == v(e) ? e : e + ""
        }
        var g = function() {
            return t = function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }, (e = [{
                key: "init",
                value: function() {
                    window.addEventListener("load", this.eagerFetch.bind(this))
                }
            }, {
                key: "loadIframe",
                value: function(t) {
                    t.src = t.dataset.src, t.onload = function() {
                        return t.classList.add("loaded")
                    }
                }
            }, {
                key: "eagerFetch",
                value: function() {
                    var t = this;
                    document.querySelectorAll("iframe[data-src]").forEach((function(e) {
                        t.loadIframe(e)
                    }))
                }
            }]) && p(t.prototype, e), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t;
            var t, e
        }();
        const S = g;

        function w(t) {
            return w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, w(t)
        }

        function E(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, k(r.key), r)
            }
        }

        function k(t) {
            var e = function(t) {
                if ("object" != w(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != w(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == w(e) ? e : e + ""
        }
        var C = function() {
            return t = function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }, e = [{
                key: "init",
                value: function() {
                    window.openFacebookSharer = function() {
                        var t = location.href,
                            e = document.title;
                        return window.open("https://www.facebook.com/sharer.php?u=" + encodeURIComponent(t) + "&t=" + encodeURIComponent(e), "Facebook", "toolbar=0,status=0,width=626,height=436"), (new s).sendEvent("social_shares", "click", "Facebook"), !1
                    }, window.openTwitterSharer = function() {
                        var t = location.href,
                            e = document.title;
                        return window.open("https://twitter.com/share?url=" + encodeURIComponent(t) + "&text=" + encodeURIComponent(e), "Twitter", "toolbar=0,status=0,height=436,width=626,location=0,menubar=0,directories=0,scrollbars=0"), (new s).sendEvent("social_shares", "click", "Twitter"), !1
                    }, window.openXSharer = function() {
                        var t = location.href,
                            e = document.title;
                        return window.open("https://x.com/share?url=" + encodeURIComponent(t) + "&text=" + encodeURIComponent(e), "X", "toolbar=0,status=0,height=436,width=626,location=0,menubar=0,directories=0,scrollbars=0"), (new s).sendEvent("social_shares", "click", "X"), !1
                    }, window.openPinterestSharer = function() {
                        var t = location.href,
                            e = document.title;
                        return window.open("https://www.pinterest.com/pin/create/bookmarklet/?url=" + encodeURIComponent(t) + "&description=" + e, "Pinterest", "toolbar=0,status=0,height=741,width=750,location=0,menubar=0,directories=0,scrollbars=0"), (new s).sendEvent("social_shares", "click", "Pinterest"), !1
                    }, window.openLinkedInSharer = function() {
                        var t = location.href,
                            e = document.title;
                        return window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(t) + "&description=" + e, "LinkedIn", "toolbar=0,status=0,height=500,width=500,location=0,menubar=0,directories=0,scrollbars=0"), (new s).sendEvent("social_shares", "click", "Pinterest"), !1
                    }
                }
            }], e && E(t.prototype, e), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t;
            var t, e
        }();
        const T = C;

        function L(t) {
            return L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, L(t)
        }

        function P(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, A(r.key), r)
            }
        }

        function A(t) {
            var e = function(t) {
                if ("object" != L(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != L(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == L(e) ? e : e + ""
        }
        var O = function() {
            return t = function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }, (e = [{
                key: "findClosestParentNode",
                value: function(t, e) {
                    for (e = e.replace("[", "").replace("]", ""); 1 === t.nodeType && !t.hasAttribute(e);)
                        if (!(t = t.parentNode)) return null;
                    return t && 1 === t.nodeType ? t : null
                }
            }]) && P(t.prototype, e), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t;
            var t, e
        }();
        const j = O;

        function x(t) {
            return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, x(t)
        }

        function I(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, _(r.key), r)
            }
        }

        function _(t) {
            var e = function(t) {
                if ("object" != x(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != x(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == x(e) ? e : e + ""
        }
        var F = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            return e = t, n = [{
                key: "init",
                value: function() {
                    var t = this;
                    document.querySelectorAll('[data-uc-tabs] [role="tab"]').forEach((function(e) {
                        e.addEventListener("click", t.handleTabClick)
                    }))
                }
            }, {
                key: "handleTabClick",
                value: function(e) {
                    e.preventDefault();
                    var n = this.getAttribute("data-target");
                    if (n || (n = this.getAttribute("aria-controls")), n) {
                        var r = new j;
                        r.findClosestParentNode(this, "data-uc-tabs").querySelectorAll(".active").forEach((function(t) {
                            t.classList.remove("active");
                            var e = t.querySelector('[role="tab"]');
                            e && e.setAttribute("aria-selected", "false")
                        }));
                        for (var o = document.getElementById(n), i = r.findClosestParentNode(o, "data-uc-tab-content").querySelectorAll(".active"), a = 0; a < i.length; a++) i[a].classList.remove("active");
                        var u = this.parentNode;
                        u.classList.add("active"), o.classList.add("active");
                        var l = u.querySelector('[role="tab"]');
                        l && l.setAttribute("aria-selected", "true"), t.switchResultsView(n)
                    }
                }
            }], r = [{
                key: "switchResultsView",
                value: function(t) {
                    var e = document.querySelectorAll("[data-calculator-results-container-result]");
                    if (e.length) {
                        var n = document.querySelector("[data-calculator-results-container-heading]");
                        e.forEach((function(e) {
                            if (e.dataset.calculatorResultsContainerResult === t) {
                                e.classList.remove("hidden");
                                var r = e.querySelector("[data-calculator-results-container-result-heading]");
                                r && (n.textContent = r.textContent)
                            } else e.classList.add("hidden")
                        }))
                    }
                }
            }], n && I(e.prototype, n), r && I(e, r), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e;
            var e, n, r
        }();
        const R = F;

        function q(t) {
            return q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, q(t)
        }

        function M(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, D(r.key), r)
            }
        }

        function D(t) {
            var e = function(t) {
                if ("object" != q(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != q(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == q(e) ? e : e + ""
        }
        var H = function() {
            return t = function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.offsetInPx = e
            }, e = [{
                key: "isSupported",
                value: function() {
                    return "function" == typeof window.scrollBy
                }
            }, {
                key: "isSmoothScrollSupported",
                value: function() {
                    return "scrollBehavior" in document.documentElement.style
                }
            }, {
                key: "scrollToAnchor",
                value: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (this.isSupported() && "" !== t) {
                        var n = document.getElementById(t);
                        this.scrollToElement(n, e)
                    }
                }
            }, {
                key: "scrollToElement",
                value: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (this.isSupported() && t) {
                        var n = this.getDistanceToTop(t);
                        this.isSmoothScrollSupported() ? window.scrollBy({
                            top: n,
                            left: 0,
                            behavior: "smooth"
                        }) : window.scrollBy({
                            top: n,
                            left: 0
                        }), e && this.setElementFocus(t)
                    }
                }
            }, {
                key: "getDistanceToTop",
                value: function(t) {
                    return Math.floor(t.getBoundingClientRect().top) - this.offsetInPx
                }
            }, {
                key: "setElementFocus",
                value: function(t) {
                    var e = this,
                        n = setInterval((function() {
                            var r = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
                            if (0 === e.getDistanceToTop(t) || r) {
                                if (t.focus(), t === document.activeElement) return !1;
                                t.setAttribute("tabindex", "-1"), t.focus(), clearInterval(n)
                            }
                        }), 100)
                }
            }], e && M(t.prototype, e), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t;
            var t, e
        }();
        const N = H;

        function B(t) {
            return B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, B(t)
        }

        function U(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Q(r.key), r)
            }
        }

        function Q(t) {
            var e = function(t) {
                if ("object" != B(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != B(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == B(e) ? e : e + ""
        }
        var K = function() {
            return t = function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }, e = [{
                key: "init",
                value: function() {
                    var t = this,
                        e = Array.from(document.querySelectorAll('a[href*="#"]'));
                    (e = e.filter((function(t) {
                        return "#" !== t.getAttribute("href") && (!t.hasAttribute("data-toggle") || "tab" !== t.getAttribute("data-toggle"))
                    }))).forEach((function(e) {
                        return e.addEventListener("click", t.handleClickEvent)
                    }))
                }
            }, {
                key: "handleClickEvent",
                value: function(t) {
                    var e = this.href;
                    if (e) {
                        var n = e.split("#"),
                            r = n[0];
                        r = r.replace(/\/$/, "");
                        var o = window.location.href.split("#")[0];
                        if (r === (o = o.replace(/\/$/, ""))) {
                            var i = n[1];
                            (new N).isSupported() && ((new N).scrollToAnchor(i), t && t.preventDefault())
                        }
                    }
                }
            }], e && U(t.prototype, e), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t;
            var t, e
        }();
        const Y = K;

        function X(t) {
            return X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, X(t)
        }

        function z(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, W(r.key), r)
            }
        }

        function W(t) {
            var e = function(t) {
                if ("object" != X(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != X(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == X(e) ? e : e + ""
        }
        var V = function() {
            return t = function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = document.getElementsByClassName("uc_calculator_results_container"),
                    n = document.getElementsByClassName("uc_calculator_results_container_scroll_target");
                this.resultContainer = e.length ? e[0] : null, this.resultScrollTarget = n.length ? n[0] : null
            }, (e = [{
                key: "init",
                value: function() {
                    this.resultContainer && this.resultContainer.classList.contains("uc_calculator_results_container_has_results") && (this.resultScrollTarget ? new N(0).scrollToElement(this.resultScrollTarget, !1) : new N(100).scrollToElement(this.resultContainer, !1))
                }
            }]) && z(t.prototype, e), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t;
            var t, e
        }();
        const G = V;

        function J(t) {
            return J = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, J(t)
        }

        function $(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Z(r.key), r)
            }
        }

        function Z(t) {
            var e = function(t) {
                if ("object" != J(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != J(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == J(e) ? e : e + ""
        }
        var tt, et, nt = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            return e = t, n = [{
                key: "init",
                value: function() {
                    var t = this,
                        e = document.querySelectorAll("[data-field-tooltip-trigger]");
                    e.forEach((function(e) {
                        e.addEventListener("click", t.handleFocusEvent)
                    })), e.forEach((function(e) {
                        e.addEventListener("focus", t.handleFocusEvent)
                    })), e.forEach((function(e) {
                        e.addEventListener("blur", t.handleBlurEvent)
                    })), e.forEach((function(e) {
                        e.addEventListener("mouseover", t.handleFocusEvent)
                    })), e.forEach((function(e) {
                        e.addEventListener("mouseout", t.handleBlurEvent)
                    })), document.addEventListener("keydown", this.handleKeydownEvent)
                }
            }, {
                key: "handleFocusEvent",
                value: function(t) {
                    var e = this.getAttribute("data-field-tooltip-trigger");
                    if (e) {
                        var n = document.getElementById(e);
                        n && n.classList.remove("visually-hidden")
                    }
                }
            }, {
                key: "handleBlurEvent",
                value: function(t) {
                    var e = this.getAttribute("data-field-tooltip-trigger");
                    if (e) {
                        var n = document.getElementById(e);
                        n && n.classList.add("visually-hidden")
                    }
                }
            }, {
                key: "handleKeydownEvent",
                value: function(e) {
                    "Escape" !== e.key && e.keyCode !== t.KEYCODE_ESC || document.querySelectorAll("[data-field-tooltip-trigger]").forEach((function(t) {
                        var e = t.getAttribute("data-field-tooltip-trigger");
                        if (e) {
                            var n = document.getElementById(e);
                            n && n.classList.add("visually-hidden")
                        }
                    }))
                }
            }], n && $(e.prototype, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e;
            var e, n
        }();
        tt = nt, (et = Z(et = "KEYCODE_ESC")) in tt ? Object.defineProperty(tt, et, {
            value: 27,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : tt[et] = 27;
        const rt = nt;

        function ot(t) {
            return ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ot(t)
        }

        function it(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, at(r.key), r)
            }
        }

        function at(t) {
            var e = function(t) {
                if ("object" != ot(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != ot(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == ot(e) ? e : e + ""
        }
        var ut = function() {
            return function(t, e) {
                return e && it(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }((function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }), [{
                key: "init",
                value: function() {
                    var t = this;
                    document.querySelectorAll("[data-input-value-preset-options-selector]").forEach((function(e) {
                        e.addEventListener("change", t.handleChangeEvent)
                    }))
                }
            }, {
                key: "handleChangeEvent",
                value: function(t) {
                    if (t && t.preventDefault(), "" !== this.value) {
                        for (var e = this.value.split("|"), n = function() {
                                var t = e[r].split(":");
                                if (2 !== t.length) return 1;
                                document.querySelectorAll('[name="' + t[0] + '"]').forEach((function(e) {
                                    e.value = t[1]
                                }))
                            }, r = 0; r < e.length && !n(); r++);
                        return !1
                    }
                }
            }])
        }();
        const lt = ut;

        function ct(t) {
            return ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ct(t)
        }

        function st(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, ft(r.key), r)
            }
        }

        function ft(t) {
            var e = function(t) {
                if ("object" != ct(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != ct(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == ct(e) ? e : e + ""
        }
        var dt = function() {
            return function(t, e) {
                return e && st(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }((function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }), [{
                key: "init",
                value: function() {
                    var t = this;
                    document.querySelectorAll("[data-site-header-nav]").forEach((function(t) {
                        t.classList.remove("site-header-nav-loading"), t.classList.add("site-header-nav-loaded")
                    })), document.querySelectorAll("[data-hamburger-toggle]").forEach((function(e) {
                        e.addEventListener("click", t.handleMobileMenuClickEvent)
                    })), document.querySelectorAll("[data-site-header-nav]").forEach((function(e) {
                        e.querySelectorAll("[data-site-header-nav-menu-item-with-submenu]").forEach((function(e) {
                            var n = e.querySelector("[data-site-header-nav-submenu-toggle]"),
                                r = e.querySelector("[data-site-header-nav-submenu]");
                            document.addEventListener("click", function(t) {
                                this.elementContainsEventTarget(e, t) || "true" !== n.getAttribute("aria-expanded") || (r.classList.add("menu-item__submenu--hidden"), n.setAttribute("aria-expanded", "false"), n.blur())
                            }.bind(t)), n.addEventListener("click", (function(t) {
                                t.preventDefault(), "true" === n.getAttribute("aria-expanded") ? (r.classList.add("menu-item__submenu--hidden"), n.setAttribute("aria-expanded", "false"), n.blur()) : (r.classList.remove("menu-item__submenu--hidden"), n.setAttribute("aria-expanded", "true"))
                            }))
                        }))
                    }))
                }
            }, {
                key: "handleMobileMenuClickEvent",
                value: function(t) {
                    t && t.preventDefault();
                    var e = this.getAttribute("data-hamburger-toggle"),
                        n = document.getElementById(e);
                    n.classList.contains("site-header-nav-expanded") ? (n.classList.add("site-header-nav-closing"), n.classList.remove("site-header-nav-expanded"), this.setAttribute("aria-expanded", !1), setTimeout((function() {
                        n.classList.remove("site-header-nav-closing")
                    }), 500)) : (n.classList.add("site-header-nav-expanded"), this.setAttribute("aria-expanded", !0))
                }
            }, {
                key: "elementContainsEventTarget",
                value: function(t, e) {
                    for (var n = e.target || null; null !== n;) {
                        if (n === t) return !0;
                        n = n.parentNode
                    }
                    return !1
                }
            }])
        }();
        const yt = dt;

        function ht(t) {
            return ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ht(t)
        }

        function mt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, vt(r.key), r)
            }
        }

        function vt(t) {
            var e = function(t) {
                if ("object" != ht(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != ht(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == ht(e) ? e : e + ""
        }
        var pt = function() {
            return function(t, e) {
                return e && mt(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }((function t(e) {
                if (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.options = Object.assign({
                        url: null,
                        method: "GET",
                        headers: {},
                        data: null,
                        successCallback: null,
                        errorCallback: null,
                        completeCallback: null
                    }, e), this.options.headers["X-Requested-With"] = "XMLHttpRequest", null === this.options.url) throw new Error("url is required when creating a client");
                if (("GET" === this.options.method || "HEAD" === this.options.method) && "string" == typeof this.options.data) {
                    var n = "?";
                    this.options.url.includes(n) && (n = "&"), this.options.url = this.options.url + n + this.options.data, this.options.data = null
                }
                "POST" === this.options.method && (this.options.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8")
            }), [{
                key: "sendRequest",
                value: function() {
                    var t = this,
                        e = new XMLHttpRequest;
                    for (var n in e.open(this.options.method, this.options.url, !0), this.options.headers) this.options.headers.hasOwnProperty(n) && e.setRequestHeader(n, this.options.headers[n]);
                    e.onreadystatechange = function() {
                        4 === e.readyState && (e.status >= 200 && e.status <= 204 ? "function" == typeof t.options.successCallback && t.options.successCallback(t.parseJson(e.responseText), e.status) : "function" == typeof t.options.errorCallback && t.options.errorCallback(t.parseJson(e.responseText), e.status), "function" == typeof t.options.completeCallback && t.options.completeCallback())
                    }, e.send(this.options.data)
                }
            }, {
                key: "parseJson",
                value: function(t) {
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                }
            }])
        }();
        const bt = pt;

        function gt(t) {
            return gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, gt(t)
        }

        function St(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, wt(r.key), r)
            }
        }

        function wt(t) {
            var e = function(t) {
                if ("object" != gt(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != gt(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == gt(e) ? e : e + ""
        }
        var Et = function() {
            return function(t, e) {
                return e && St(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }((function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.form = e, this.loadingIndicator = null, this.resultsContainer = null, this.resultsContactForm = null, this.resultsContactFormContextElem = null, this.currentUrl = null, this.cookingIngredientSelect = null, this.cookingIngredientDensity = null, this.authoritySignal = null;
                var n = (new j).findClosestParentNode(e, "[data-unit-conversion-container]");
                n && (this.loadingIndicator = n.querySelector("[data-loading-indicator]"), this.resultsContainer = n.querySelector("[data-unit-conversion-results]"), this.cookingIngredientSelect = n.querySelector("[data-unit-conversion-cooking-ingredient]"), this.cookingIngredientDensity = n.querySelector("[data-unit-conversion-cooking-ingredient-density]"), this.resultsContactForm = n.querySelector("[data-contact-form]"), this.resultsContactFormContextElem = n.querySelector('[data-contact-form] [name="uc_u"]'), this.resultsContactFormContextElem && (this.currentUrl = this.resultsContactFormContextElem.value), this.authoritySignal = n.querySelector("[data-unit-conversion-authority-signal]")), this.messagesContainer = e.querySelector("[data-messages]"), !this.messagesContainer && n && (this.messagesContainer = n.querySelector("[data-messages]")), this.numberRegex = new RegExp("[^0-9eEx\\―\\—\\–\\⁄\\÷\\×\\.\\-\\/\\+\\*\\(\\)\\s]"), this.decimalRegex = new RegExp("[^0-9\\-\\.]"), this.api = {
                    method: "GET",
                    path: "/api/calculators/unit-conversion/"
                }
            }), [{
                key: "init",
                value: function() {
                    this.form.addEventListener("submit", this.submitForm.bind(this)), this.cookingIngredientSelect && this.cookingIngredientSelect.addEventListener("change", this.handleCookingIngredientChange.bind(this))
                }
            }, {
                key: "submitForm",
                value: function(t) {
                    if (t && t.preventDefault(), this.clearErrors(), this.validateForm()) {
                        this.clearResults();
                        var e = document.getElementById("pounds_ounces_unit");
                        if (e && !e.classList.contains("active")) {
                            var n = document.getElementById("from_value_ounces");
                            n && (n.value = "")
                        }
                        var r = document.getElementById("feet_inches_unit");
                        if (r && !r.classList.contains("active")) {
                            var o = document.getElementById("from_value_inches");
                            o && (o.value = "")
                        }
                        var i = document.getElementById("yards_yards_unit");
                        if (i && !i.classList.contains("active")) {
                            var a = document.getElementById("from_value_feet");
                            a && (a.value = "")
                        }
                        return this.calculate(), !1
                    }
                }
            }, {
                key: "validateForm",
                value: function() {
                    var t = this,
                        e = !0;
                    return this.form.querySelectorAll("input").forEach((function(n) {
                        t.validateElement(n) || (e = !1)
                    })), e
                }
            }, {
                key: "validateElement",
                value: function(t) {
                    var e = this.getElementLabel(t),
                        n = this.getElementValidationRules(t);
                    return !(n.length && (-1 !== n.indexOf("required") && null === t.value || -1 !== n.indexOf("required") && "" === t.value.replace(/\s/g, "") ? (this.addError(e + " is required to convert", t), 1) : (-1 !== n.indexOf("number") && this.numberRegex.test(t.value) || -1 !== n.indexOf("decimal") && this.decimalRegex.test(t.value)) && (this.addError(e + " should be a number", t), 1)))
                }
            }, {
                key: "getElementLabel",
                value: function(t) {
                    var e = t.getAttribute("data-label");
                    return e ? e.charAt(0).toUpperCase() + e.substring(1).toLowerCase() : "Value"
                }
            }, {
                key: "getElementValidationRules",
                value: function(t) {
                    var e = t.getAttribute("data-validation");
                    return e ? e.split(" ") : []
                }
            }, {
                key: "calculate",
                value: function() {
                    this.showLoading();
                    var t = this.getSerializedFormData();
                    if (new bt({
                            url: this.api.path,
                            method: this.api.method,
                            data: t,
                            successCallback: this.onSuccess.bind(this),
                            errorCallback: this.onError.bind(this),
                            completeCallback: this.onComplete.bind(this)
                        }).sendRequest(), this.resultsContactFormContextElem && "string" == typeof this.currentUrl) {
                        var e = this.currentUrl;
                        e = this.currentUrl.includes("?") ? e + "&" + t : e + "?" + t, this.resultsContactFormContextElem.value = e
                    }
                }
            }, {
                key: "onSuccess",
                value: function(t, e) {
                    t && "object" === gt(t) && void 0 !== t.results && void 0 !== t.results.display_value && (this.setResult(t.results.display_value), this.authoritySignal && this.authoritySignal.classList.remove("hidden"))
                }
            }, {
                key: "onError",
                value: function(t, e) {
                    t && "object" === gt(t) && void 0 !== t.code && 1 === t.code ? (this.addError("The number is invalid or contains invalid characters", null), this.form.find("input[type='text']").addClass("error"), this.form.find("input[type='number']").addClass("error"), (new s).sendEvent("unit_conversion", "error", "server_validation_error")) : (this.addError("Whoops, it looks like something went wrong, please try again", null), (new s).sendEvent("unit_conversion", "error", "server_error")), this.setResult("&nbsp;")
                }
            }, {
                key: "onComplete",
                value: function() {
                    this.hideLoading()
                }
            }, {
                key: "showLoading",
                value: function() {
                    this.loadingIndicator.classList.add("visible")
                }
            }, {
                key: "hideLoading",
                value: function() {
                    this.loadingIndicator.classList.remove("visible")
                }
            }, {
                key: "addError",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = document.createElement("div");
                    n.className = "error mt2", n.innerHTML = t, this.messagesContainer.appendChild(n), null != e && e.classList.add("error")
                }
            }, {
                key: "clearErrors",
                value: function() {
                    Array.from(this.messagesContainer.getElementsByClassName("error")).forEach((function(t) {
                        t.parentNode.removeChild(t)
                    })), this.form.querySelectorAll("input").forEach((function(t) {
                        return t.classList.remove("error")
                    }))
                }
            }, {
                key: "clearResults",
                value: function() {
                    this.setResult("")
                }
            }, {
                key: "setResult",
                value: function(t) {
                    this.resultsContainer.innerHTML = t
                }
            }, {
                key: "getSerializedFormData",
                value: function() {
                    var t = [];
                    return Array.from(this.form.elements).forEach((function(e) {
                        e.name && !e.disabled && "file" !== e.type && "reset" !== e.type && "submit" !== e.type && "button" !== e.type && ("checkbox" !== e.type && "radio" !== e.type || e.checked) && t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                    })), t.join("&")
                }
            }, {
                key: "handleCookingIngredientChange",
                value: function() {
                    this.cookingIngredientSelect && this.cookingIngredientDensity && ("custom" === this.cookingIngredientSelect.value ? this.cookingIngredientDensity.classList.remove("hidden") : this.cookingIngredientDensity.classList.add("hidden"))
                }
            }])
        }();
        const kt = Et;

        function Ct(t) {
            return Ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Ct(t)
        }

        function Tt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Lt(r.key), r)
            }
        }

        function Lt(t) {
            var e = function(t) {
                if ("object" != Ct(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != Ct(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Ct(e) ? e : e + ""
        }
        var Pt = function() {
            return function(t, e, n) {
                return n && Tt(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }((function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }), 0, [{
                key: "invokeWhenReady",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    "interactive" === document.readyState || "complete" === document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent && document.attachEvent("onreadystatechange", (function() {
                        "loading" != document.readyState && t()
                    })), e && (document.addEventListener ? document.addEventListener("calculatorcontentreloaded", t) : document.attachEvent("oncalculatorcontentreloaded", t))
                }
            }])
        }();
        const At = Pt;

        function Ot(t) {
            return Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Ot(t)
        }

        function jt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, xt(r.key), r)
            }
        }

        function xt(t) {
            var e = function(t) {
                if ("object" != Ot(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != Ot(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Ot(e) ? e : e + ""
        }
        var It = function() {
            return function(t, e) {
                return e && jt(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }((function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }), [{
                key: "init",
                value: function() {
                    var t = this;
                    document.querySelectorAll("[data-show-hidden-content]").forEach((function(e) {
                        e.addEventListener("click", t.handleClickEvent)
                    }))
                }
            }, {
                key: "handleClickEvent",
                value: function(t) {
                    t && t.preventDefault();
                    var e = this.getAttribute("data-show-hidden-content");
                    this.parentNode.removeChild(this), document.getElementById(e).classList.remove("visually-hidden"), document.getElementById(e).classList.remove("hidden-xs"), document.getElementById(e).querySelectorAll(".visually-hidden").forEach((function(t) {
                        t.classList.remove("visually-hidden")
                    })), document.getElementById(e).querySelectorAll(".hidden-xs").forEach((function(t) {
                        t.classList.remove("hidden-xs")
                    }))
                }
            }])
        }();
        const _t = It;

        function Ft(t) {
            return Ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Ft(t)
        }

        function Rt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, qt(r.key), r)
            }
        }

        function qt(t) {
            var e = function(t) {
                if ("object" != Ft(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != Ft(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Ft(e) ? e : e + ""
        }
        var Mt = function() {
            return function(t, e) {
                return e && Rt(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }((function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }), [{
                key: "init",
                value: function() {
                    document.querySelectorAll("[data-byline-bio-tooltip]").forEach((function(t) {
                        var e, n = t.querySelector("[data-byline-bio-tooltip-trigger]"),
                            r = t.querySelector("[data-byline-bio-tooltip-content]");
                        t.addEventListener("mouseover", (function(t) {
                            r.classList.add("byline-bio-tooltip-content-wrap--active"), clearTimeout(e), n.setAttribute("aria-expanded", "true")
                        })), t.addEventListener("focusin", (function(t) {
                            r.classList.add("byline-bio-tooltip-content-wrap--active"), clearTimeout(e), n.setAttribute("aria-expanded", "true")
                        })), t.addEventListener("mouseout", (function(t) {
                            e = setTimeout((function(t) {
                                document.activeElement !== n && (r.classList.remove("byline-bio-tooltip-content-wrap--active"), n.setAttribute("aria-expanded", "false"))
                            }), 50)
                        })), t.addEventListener("focusout", (function(e) {
                            setTimeout((function(e) {
                                t.contains(document.activeElement) || (r.classList.remove("byline-bio-tooltip-content-wrap--active"), n.setAttribute("aria-expanded", "false"))
                            }), 10)
                        })), n.addEventListener("click", (function(t) {
                            t.preventDefault(), clearTimeout(e), r.classList.contains("byline-bio-tooltip-content-wrap--active") || (r.classList.add("byline-bio-tooltip-content-wrap--active"), n.setAttribute("aria-expanded", "true"))
                        }))
                    }))
                }
            }])
        }();
        const Dt = Mt;

        function Ht(t) {
            return Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Ht(t)
        }

        function Nt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Bt(r.key), r)
            }
        }

        function Bt(t) {
            var e = function(t) {
                if ("object" != Ht(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != Ht(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Ht(e) ? e : e + ""
        }
        var Ut = function() {
            return function(t, e) {
                return e && Nt(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }((function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }), [{
                key: "init",
                value: function() {
                    document.querySelectorAll("[data-latex]").forEach((function(t) {
                        var e = t.innerHTML;
                        t.innerHTML = "";
                        var n = t.dataset.latexMode;
                        null === n && (n = "display");
                        var r = t.dataset.latexAlignment;
                        null === r && (r = "left"), katex.render(e, t, {
                            throwOnError: !1,
                            displayMode: "display" === n,
                            fleqn: "left" === r
                        }), t.classList.add("loaded")
                    }))
                }
            }])
        }();
        const Qt = Ut;

        function Kt(t) {
            return Kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Kt(t)
        }

        function Yt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, zt(r.key), r)
            }
        }

        function Xt(t, e, n) {
            return (e = zt(e)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function zt(t) {
            var e = function(t) {
                if ("object" != Kt(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != Kt(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Kt(e) ? e : e + ""
        }
        var Wt = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.maxCacheSize = e, this.resultsCache = []
            }
            return function(t, e) {
                return e && Yt(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }(t, [{
                key: "addQueryResults",
                value: function(t, e) {
                    if (!this.isQueryCached(t))
                        for (this.resultsCache.push([this.formatQueryForCache(t), e]); this.resultsCache.length > this.maxCacheSize;) this.resultsCache.shift()
                }
            }, {
                key: "isQueryCached",
                value: function(t) {
                    return null !== this.getCachedQuery(t)
                }
            }, {
                key: "getCachedQuery",
                value: function(e) {
                    for (var n = 0; n < this.resultsCache.length; n++)
                        if (this.resultsCache[n][t.queryKey] === this.formatQueryForCache(e)) return this.resultsCache[n][t.resultsKey];
                    return null
                }
            }, {
                key: "formatQueryForCache",
                value: function(t) {
                    return t.toLowerCase().trim()
                }
            }])
        }();
        Xt(Wt, "queryKey", 0), Xt(Wt, "resultsKey", 1);
        const Vt = Wt;

        function Gt(t) {
            return Gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Gt(t)
        }

        function Jt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Zt(r.key), r)
            }
        }

        function $t(t, e, n) {
            return (e = Zt(e)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function Zt(t) {
            var e = function(t) {
                if ("object" != Gt(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != Gt(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == Gt(e) ? e : e + ""
        }
        var te = function() {
            function t(e, n, r) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.appId = e, this.apiKey = n, this.indexName = r
            }
            return function(t, e) {
                return e && Jt(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }(t, [{
                key: "autocomplete",
                value: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        i = t.autocompleteUrl.replace("[APPLICATION_ID]", this.appId).replace("[INDEX_NAME]", this.indexName),
                        a = ["query=" + encodeURIComponent(e), "attributesToRetrieve=title,short_title,primary_category,url", "attributesToHighlight=title,short_title,primary_category,url", "page=0", "hitsPerPage=" + t.resultLimit].join("&");
                    new bt({
                        url: i,
                        method: "GET",
                        headers: {
                            "X-Algolia-Application-Id": this.appId,
                            "X-Algolia-API-Key": this.apiKey
                        },
                        data: a,
                        successCallback: n,
                        errorCallback: r,
                        completeCallback: o
                    }).sendRequest()
                }
            }])
        }();
        $t(te, "autocompleteUrl", "https://[APPLICATION_ID]-dsn.algolia.net/1/indexes/[INDEX_NAME]"), $t(te, "resultLimit", 10);
        const ee = te;

        function ne(t) {
            return ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ne(t)
        }

        function re(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, oe(r.key), r)
            }
        }

        function oe(t) {
            var e = function(t) {
                if ("object" != ne(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != ne(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == ne(e) ? e : e + ""
        }
        var ie = function() {
            return function(t, e) {
                return e && re(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }((function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = e.dataset.searchFormHints;
                this.searchHints = void 0 !== n && "" !== n && null !== n ? n.split(",") : [], this.targetElement = e.querySelector("[data-search-form-query]"), this.searchHints.length > 10 ? this.hintRepeatInterval = 5 : this.searchHints.length > 5 ? this.hintRepeatInterval = 3 : this.searchHints.length > 3 ? this.hintRepeatInterval = 2 : this.hintRepeatInterval = 0, this.searchHintInterval = 2500, this.searchHintCharacterInterval = 40, this.currentText = "", this.currentIndex = 0, this.recentIndexes = []
            }), [{
                key: "init",
                value: function() {
                    this.searchHints.length > 1 && setInterval(this.showRandomSearchHint.bind(this), this.searchHintInterval)
                }
            }, {
                key: "showRandomSearchHint",
                value: function() {
                    var t = this.getRandomIndex();
                    this.targetElement.placeholder = "", this.currentText = this.searchHints[t], this.currentIndex = 0, this.writeText()
                }
            }, {
                key: "writeText",
                value: function() {
                    this.currentIndex < this.currentText.length && (this.targetElement.placeholder += this.currentText.charAt(this.currentIndex), this.currentIndex++, setTimeout(this.writeText.bind(this), this.searchHintCharacterInterval))
                }
            }, {
                key: "getRandomIndex",
                value: function() {
                    for (var t = this.getRandomInteger(0, this.searchHints.length - 1), e = 0; this.recentIndexes.indexOf(t) >= 0 && (t = this.getRandomInteger(0, this.searchHints.length - 1), !(e++ > 100)););
                    return this.recentIndexes.unshift(t), this.recentIndexes.length > this.hintRepeatInterval && this.recentIndexes.pop(), t
                }
            }, {
                key: "getRandomInteger",
                value: function(t, e) {
                    return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t
                }
            }])
        }();
        const ae = ie;

        function ue(t) {
            return ue = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ue(t)
        }

        function le(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, se(r.key), r)
            }
        }

        function ce(t, e, n) {
            return (e = se(e)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function se(t) {
            var e = function(t) {
                if ("object" != ue(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != ue(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == ue(e) ? e : e + ""
        }
        var fe = function() {
            function t(e) {
                var n = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), ce(this, "handleQueryChange", this.debounce((function() {
                    var t = n.searchFormInputField.value;
                    n.resultsCache.isQueryCached(t) ? n.handleQueryResults(t, n.resultsCache.getCachedQuery(t)) : n.executeSearch(t)
                }), t.debounceTime)), this.container = e, this.searchForm = e.querySelector("[data-search-form]"), this.searchFormInputField = e.querySelector("[data-search-form-query]"), this.hitsContainer = e.querySelector("[data-site-search-hits-container]"), this.resultsCache = new Vt, this.searchFormInputFocusOutTimer = null, this.hitsContainerFocusOutTimer = null;
                var r = e.getAttribute("data-site-search-app-id"),
                    o = e.getAttribute("data-site-search-api-key"),
                    i = e.getAttribute("data-site-search-index");
                r && o && i && (this.apiClient = new ee(r, o, i))
            }
            return function(t, e) {
                return e && le(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }(t, [{
                key: "init",
                value: function() {
                    if (this.searchForm && this.searchFormInputField && this.hitsContainer && this.apiClient) {
                        var t = new ae(this.searchForm);
                        setTimeout((function() {
                            t.init()
                        }), 1e3), this.searchFormInputField.addEventListener("focus", this.handleSearchFieldInteraction.bind(this)), this.searchFormInputField.addEventListener("keyup", this.handleSearchFieldInteraction.bind(this)), document.body.addEventListener("click", this.handleDocumentClick.bind(this)), document.addEventListener("keydown", this.handleDocumentKeyDown.bind(this)), this.searchFormInputField.addEventListener("focusout", this.onSearchFieldFocusOut.bind(this)), this.hitsContainer.addEventListener("focusout", this.onHitsContainerFocusOut.bind(this)), this.searchForm.addEventListener("submit", this.handleSearchFormSubmit.bind(this))
                    }
                }
            }, {
                key: "onHitsContainerFocusOut",
                value: function() {
                    this.clearFocusOutTimers();
                    var t = this;
                    this.hitsContainerFocusOutTimer = setTimeout((function() {
                        t.elementOrChildHasFocus(t.container) || t.hideResultsOverlay()
                    }), 100)
                }
            }, {
                key: "onSearchFieldFocusOut",
                value: function() {
                    this.clearFocusOutTimers();
                    var t = this;
                    this.searchFormInputFocusOutTimer = setTimeout((function() {
                        t.elementOrChildHasFocus(t.container) || t.hideResultsOverlay()
                    }), 100)
                }
            }, {
                key: "handleDocumentKeyDown",
                value: function(t) {
                    "Escape" !== t.key || this.elementOrChildHasFocus(this.searchFormInputField) || this.hideResultsOverlay()
                }
            }, {
                key: "handleDocumentClick",
                value: function(t) {
                    this.clearFocusOutTimers(), setTimeout(function() {
                        t.target === this.searchFormInputField || this.hitsContainer.contains(t.target) || this.hitsContainer.contains(document.activeElement) || this.hideResultsOverlay()
                    }.bind(this), 100)
                }
            }, {
                key: "handleSearchFormSubmit",
                value: function(t) {
                    return t.preventDefault(), !1
                }
            }, {
                key: "handleSearchFieldInteraction",
                value: function(t) {
                    "Escape" !== t.key ? this.handleQueryChange() : this.toggleResultsOverlay()
                }
            }, {
                key: "executeSearch",
                value: function(e) {
                    0 !== e.length ? e.length < t.minQueryLength || this.apiClient.autocomplete(e, this.onSuccess.bind(this), this.onError.bind(this)) : this.hideResultsOverlay()
                }
            }, {
                key: "onSuccess",
                value: function(t, e) {
                    this.resultsCache.addQueryResults(t.query, t.hits), this.handleQueryResults(t.query, t.hits)
                }
            }, {
                key: "onError",
                value: function(t, e) {
                    this.clearResultsOverlay()
                }
            }, {
                key: "handleQueryResults",
                value: function(t, e) {
                    0 === e.length ? this.clearResultsOverlay() : this.showNewSearchResultsOverlay(t, e)
                }
            }, {
                key: "showNewSearchResultsOverlay",
                value: function(t, e) {
                    for (var n = "", r = 0; r < e.length; r++) n += '<li><a href="' + e[r].url + '" onclick="' + this.getAnalyticsEventString(t, e[r].url) + '">' + e[r]._highlightResult.short_title.value + "</a></li>";
                    this.hitsContainer.innerHTML = '<div role="status" class="visually-hidden" aria-live="polite">there are ' + e.length + ' results available, navigate using the tab key</div><ul class="search_hits_list">' + n + "</ul>", this.showResultsOverlay()
                }
            }, {
                key: "clearResultsOverlay",
                value: function() {
                    this.hitsContainer.innerHTML = "", this.hideResultsOverlay()
                }
            }, {
                key: "hideResultsOverlay",
                value: function() {
                    this.hitsContainer.setAttribute("aria-hidden", !0), this.searchFormInputField.setAttribute("aria-expanded", !1)
                }
            }, {
                key: "showResultsOverlay",
                value: function() {
                    this.hitsContainer.setAttribute("aria-hidden", !1), this.searchFormInputField.setAttribute("aria-expanded", !0)
                }
            }, {
                key: "toggleResultsOverlay",
                value: function() {
                    "" !== this.hitsContainer.innerHTML && ("true" === this.hitsContainer.getAttribute("aria-hidden") ? this.showResultsOverlay() : this.hideResultsOverlay())
                }
            }, {
                key: "debounce",
                value: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.debounceTime,
                        r = null;
                    return function() {
                        for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                        clearTimeout(r), r = setTimeout((function() {
                            e.apply(void 0, o)
                        }), n)
                    }
                }
            }, {
                key: "throttle",
                value: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.debounceTime,
                        r = !1;
                    return function() {
                        r || (e.apply(void 0, arguments), r = !0, setTimeout((function() {
                            r = !1
                        }), n))
                    }
                }
            }, {
                key: "elementOrChildHasFocus",
                value: function(t) {
                    if (t === document.activeElement) return !0;
                    for (var e = 0; e < t.children.length; e++)
                        if (this.elementOrChildHasFocus(t.children[e])) return !0;
                    return !1
                }
            }, {
                key: "getAnalyticsEventString",
                value: function(t, e) {
                    return t = t.replace(/[^a-zA-Z\d'"/% ]/g, "").replace(/"/g, "&quote;").replace(/'/g, "&apos;"), "gtag('event','[QUERY]',{'event_category':'site_search','event_label':'[RESULT_URL]', 'transport_type': 'beacon'});".replaceAll("[RESULT_URL]", e).replaceAll("[QUERY]", t)
                }
            }, {
                key: "clearFocusOutTimers",
                value: function() {
                    null !== this.searchFormInputFocusOutTimer && (clearTimeout(this.searchFormInputFocusOutTimer), this.searchFormInputFocusOutTimer = null), null !== this.hitsContainerFocusOutTimer && (clearTimeout(this.hitsContainerFocusOutTimer), this.hitsContainerFocusOutTimer = null)
                }
            }])
        }();
        ce(fe, "minQueryLength", 2), ce(fe, "debounceTime", 200);
        const de = fe;

        function ye(t) {
            return ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ye(t)
        }

        function he(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, me(r.key), r)
            }
        }

        function me(t) {
            var e = function(t) {
                if ("object" != ye(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != ye(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == ye(e) ? e : e + ""
        }
        var ve = function() {
            return function(t, e) {
                return e && he(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }((function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.contactFormComponent = e, this.formWrapper = e.querySelector("[data-contact-form-wrapper]"), this.form = e.querySelector("[data-contact-form]"), this.loadingIndicator = e.querySelector("[data-contact-form-loading-indicator]"), this.messagesContainer = e.querySelector("[data-contact-form-messages]"), this.api = {
                    method: "POST",
                    path: "/api/contact-form/submission/"
                }, this.propertyNames = {
                    name: "uc_name",
                    email: "uc_b",
                    comment: "uc_comment",
                    emailTwo: "cf_email",
                    asyncToken: "uc_t",
                    contextUrl: "uc_u"
                }
            }), [{
                key: "init",
                value: function() {
                    this.form && this.messagesContainer && this.loadingIndicator && this.form.addEventListener("submit", this.handleFormSubmission.bind(this))
                }
            }, {
                key: "handleFormSubmission",
                value: function(t) {
                    if (t && t.preventDefault(), this.clearErrors(), this.validateForm()) return this.submitContactForm(), !1
                }
            }, {
                key: "validateForm",
                value: function() {
                    var t = this.form.querySelector('[name="' + this.propertyNames.comment + '"]');
                    return !(t && null === t.value || "" === t.value.replace(/\s/g, "")) || (this.addError("Comments are required", t), !1)
                }
            }, {
                key: "submitContactForm",
                value: function() {
                    this.showLoading(), new bt({
                        url: this.api.path,
                        method: this.api.method,
                        data: this.getSerializedFormData(),
                        successCallback: this.onSuccess.bind(this),
                        errorCallback: this.onError.bind(this),
                        completeCallback: this.onComplete.bind(this)
                    }).sendRequest()
                }
            }, {
                key: "onSuccess",
                value: function(t, e) {
                    this.formWrapper ? this.formWrapper.innerHTML = '<div class="panel">Your comments have been sent!</div>' : (this.contactFormComponent.innerHTML = '<div class="panel">Your comments have been sent!</div>', this.contactFormComponent.focus());
                    var n = this.contactFormComponent.querySelector("button");
                    n && n.focus()
                }
            }, {
                key: "onError",
                value: function(t, e) {
                    if (t && "object" === ye(t) && void 0 !== t.data && "object" === ye(t.data) && void 0 !== t.data.errors && "object" === ye(t.data.errors)) {
                        var n = t.data.errors;
                        for (var r in n) {
                            var o = this.form.querySelector('[name="' + r + '"]');
                            o && this.addError(n[r], o)
                        }(new s).sendEvent("contact_form", "error", "server_validation_error")
                    } else this.addError("Whoops, it looks like something went wrong, please try again", null), (new s).sendEvent("contact_form", "error", "server_error")
                }
            }, {
                key: "onComplete",
                value: function() {
                    this.hideLoading()
                }
            }, {
                key: "showLoading",
                value: function() {
                    this.loadingIndicator.classList.add("visible")
                }
            }, {
                key: "hideLoading",
                value: function() {
                    this.loadingIndicator.classList.remove("visible")
                }
            }, {
                key: "addError",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = document.createElement("div");
                    n.className = "error mt2", n.innerHTML = t, this.messagesContainer.appendChild(n), null != e && e.classList.add("error")
                }
            }, {
                key: "clearErrors",
                value: function() {
                    Array.from(this.messagesContainer.getElementsByClassName("error")).forEach((function(t) {
                        t.parentNode.removeChild(t)
                    })), this.form.querySelectorAll("input").forEach((function(t) {
                        return t.classList.remove("error")
                    })), this.form.querySelectorAll("textarea").forEach((function(t) {
                        return t.classList.remove("error")
                    }))
                }
            }, {
                key: "getSerializedFormData",
                value: function() {
                    var t = [];
                    return Array.from(this.form.elements).forEach((function(e) {
                        e.name && !e.disabled && "file" !== e.type && "reset" !== e.type && "submit" !== e.type && "button" !== e.type && ("checkbox" !== e.type && "radio" !== e.type || e.checked) && t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                    })), t.push(encodeURIComponent(this.propertyNames.asyncToken) + "=" + encodeURIComponent(this.getAsyncToken())), t.join("&")
                }
            }, {
                key: "getAsyncToken",
                value: function() {
                    return window.btoa(this.getRandomChars(6) + 3 * Math.floor(Date.now() / 1e3))
                }
            }, {
                key: "getRandomChars",
                value: function(t) {
                    var e = parseInt("".padEnd(t, "9")),
                        n = Math.floor(Math.random() * e).toString();
                    return n.length < t && n.padEnd(t, Math.floor(999 * Math.random()).toString()), n.substring(0, t)
                }
            }])
        }();
        const pe = ve;

        function be(t) {
            return be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, be(t)
        }

        function ge(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Se(r.key), r)
            }
        }

        function Se(t) {
            var e = function(t) {
                if ("object" != be(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != be(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == be(e) ? e : e + ""
        }
        var we = function() {
            return function(t, e) {
                return e && ge(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }((function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }), [{
                key: "init",
                value: function() {
                    document.querySelectorAll("[data-contact-form-component]").forEach((function(t) {
                        new pe(t).init()
                    }))
                }
            }])
        }();
        const Ee = we;

        function ke(t) {
            return ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ke(t)
        }

        function Ce(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Le(r.key), r)
            }
        }

        function Te(t, e, n) {
            return (e = Le(e)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function Le(t) {
            var e = function(t) {
                if ("object" != ke(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != ke(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == ke(e) ? e : e + ""
        }
        var Pe = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.overlayTriggers = document.querySelectorAll("[data-content-overlay-open-trigger]"), this.overlayMaskElement = document.querySelector("[data-content-overlay-mask]")
            }
            return function(t, e) {
                return e && Ce(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }(t, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.overlayTriggers.forEach((function(n) {
                        var r = null,
                            o = n.getAttribute("data-content-overlay-open-trigger");
                        if (null !== o && (r = document.getElementById(o)), null !== r) {
                            var i = r.querySelector("[data-content-overlay-content]"),
                                a = r.querySelector("[data-content-overlay-close-trigger]");
                            null !== i && (n.addEventListener("click", function(t) {
                                t.preventDefault(), r.classList.contains("content_overlay--active") || (r.classList.add("content_overlay--active"), n.setAttribute("aria-expanded", "true")), null !== a && a.focus(), null !== this.overlayMaskElement && this.overlayMaskElement.classList.add("visible")
                            }.bind(e)), null !== a && a.addEventListener("click", function(t) {
                                t.preventDefault(), r.classList.contains("content_overlay--active") && (r.classList.remove("content_overlay--active"), n.setAttribute("aria-expanded", "false"), n.focus()), null !== this.overlayMaskElement && this.overlayMaskElement.classList.remove("visible")
                            }.bind(e)), null !== e.overlayMaskElement && e.overlayMaskElement.addEventListener("click", function(t) {
                                t.preventDefault(), r.classList.contains("content_overlay--active") && (r.classList.remove("content_overlay--active"), n.setAttribute("aria-expanded", "false"), n.focus()), this.overlayMaskElement.classList.remove("visible")
                            }.bind(e)), document.addEventListener("keydown", function(e) {
                                "Escape" !== e.key && e.keyCode !== t.KEYCODE_ESC || (e.preventDefault(), r.classList.contains("content_overlay--active") && (r.classList.remove("content_overlay--active"), n.setAttribute("aria-expanded", "false"), n.focus()), null !== this.overlayMaskElement && this.overlayMaskElement.classList.remove("visible"))
                            }.bind(e)), r.addEventListener("keydown", (function(e) {
                                if ("Tab" === e.key || e.keyCode === t.KEYCODE_TAB) {
                                    var n = r.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),
                                        o = n[0],
                                        i = n[n.length - 1];
                                    e.shiftKey ? document.activeElement === o && (i.focus(), e.preventDefault()) : document.activeElement === i && (o.focus(), e.preventDefault())
                                }
                            })))
                        }
                    }))
                }
            }])
        }();
        Te(Pe, "KEYCODE_TAB", 9), Te(Pe, "KEYCODE_ESC", 27);
        const Ae = Pe;
        var Oe = n(576),
            je = n.n(Oe);

        function xe(t) {
            return xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, xe(t)
        }

        function Ie(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, _e(r.key), r)
            }
        }

        function _e(t) {
            var e = function(t) {
                if ("object" != xe(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != xe(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == xe(e) ? e : e + ""
        }
        var Fe = function() {
            return function(t, e) {
                return e && Ie(t.prototype, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }((function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.clipboard = new(je())("[data-clipboard-target]"), this.defaultErrorColor = "red", this.defaultSuccessColor = "green"
            }), [{
                key: "init",
                value: function() {
                    this.clipboard.on("success", this.onSuccess.bind(this)), this.clipboard.on("error", this.onError.bind(this))
                }
            }, {
                key: "onSuccess",
                value: function(t) {
                    var e = t.trigger;
                    e.classList.add("clipboard--success"), e.hasAttribute("data-clipboard-success-tooltip-text") && this.addTooltip(e, e.getAttribute("data-clipboard-success-tooltip-text")), setTimeout(function() {
                        e.classList.remove("clipboard--success"), this.removeTooltip()
                    }.bind(this), 1e3)
                }
            }, {
                key: "onError",
                value: function(t) {
                    var e = t.trigger;
                    e.classList.add("clipboard--error"), this.addTooltip(e, "Error copying link!"), setTimeout(function() {
                        e.classList.remove("clipboard--error"), this.removeTooltip()
                    }.bind(this), 1e3)
                }
            }, {
                key: "addTooltip",
                value: function(t, e) {
                    this.removeTooltip();
                    var n = document.createElement("div");
                    n.setAttribute("id", "idx_copy_link_tooltip"), n.setAttribute("class", "tooltip");
                    var r = document.createElement("div");
                    r.setAttribute("id", "idx_copy_link_tooltip"), r.setAttribute("class", "small tooltip-message"), r.setAttribute("role", "tooltip"), r.appendChild(document.createTextNode(e)), n.appendChild(r);
                    var o = t.parentElement;
                    if (t.hasAttribute("data-clipboard-success-tooltip-text")) {
                        var i = document.getElementById(t.getAttribute("data-clipboard-tooltip-container"));
                        null !== i && (o = i)
                    }
                    o.appendChild(n)
                }
            }, {
                key: "removeTooltip",
                value: function() {
                    document.contains(document.getElementById("idx_copy_link_tooltip")) && document.getElementById("idx_copy_link_tooltip").remove()
                }
            }])
        }();
        const Re = Fe;
        document.addEventListener("DOMContentLoaded", (function() {
            (new T).init(), At.invokeWhenReady((function() {
                [new yt, new _t, new m, new S, new Dt, new Ae, new Re].forEach((function(t) {
                    return t.init()
                }))
            }), !1), At.invokeWhenReady((function() {
                [new Y, new G, new i, new rt, new lt, new R, new Qt, new Ee].forEach((function(t) {
                    return t.init()
                }))
            }), !0), document.querySelectorAll("[data-site-search-form-container]").forEach((function(t) {
                new de(t).init()
            })), document.querySelectorAll("[data-unit-conversion-form]").forEach((function(t) {
                new kt(t).init()
            }))
        }))
    })()
})();