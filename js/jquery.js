! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(h, e) {
    function t(e, t) {
        return t.toUpperCase()
    }
    var c = (I = []).slice,
        g = I.concat,
        a = I.push,
        i = I.indexOf,
        n = {},
        r = n.toString,
        m = n.hasOwnProperty,
        o = "".trim,
        v = {},
        y = h.document,
        s = "2.1.0",
        w = function(e, t) {
            return new w.fn.init(e, t)
        },
        u = /^-ms-/,
        l = /-([\da-z])/gi;

    function f(e) {
        var t = e.length,
            n = w.type(e);
        return "function" !== n && !w.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: s,
        constructor: w,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        pushStack: function(e) {
            return (e = w.merge(this.constructor(), e)).prevObject = this, e.context = this.context, e
        },
        each: function(e, t) {
            return w.each(this, e, t)
        },
        map: function(n) {
            return this.pushStack(w.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: a,
        sort: I.sort,
        splice: I.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o = arguments[0] || {},
            s = 1,
            a = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || w.isFunction(o) || (o = {}), s === a && (o = this, s--); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e) i = o[t], n = e[t], o !== n && (u && n && (w.isPlainObject(n) || (r = w.isArray(n))) ? (i = r ? (r = !1, i && w.isArray(i) ? i : []) : i && w.isPlainObject(i) ? i : {}, o[t] = w.extend(u, i, n)) : void 0 !== n && (o[t] = n));
        return o
    }, w.extend({
        expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === w.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return 0 <= e - parseFloat(e)
        },
        isPlainObject: function(e) {
            if ("object" !== w.type(e) || e.nodeType || w.isWindow(e)) return !1;
            try {
                if (e.constructor && !m.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = w.trim(e)) && (1 === e.indexOf("use strict") ? ((t = y.createElement("script")).text = e, y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(u, "ms-").replace(l, t)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                s = f(e);
            if (n) {
                if (s)
                    for (; i < o && !1 !== (r = t.apply(e[i], n)); i++);
                else
                    for (i in e)
                        if (r = t.apply(e[i], n), !1 === r) break
            } else if (s)
                for (; i < o && !1 !== (r = t.call(e[i], i, e[i])); i++);
            else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), !1 === r) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : o.call(e)
        },
        makeArray: function(e, t) {
            return t = t || [], null != e && (f(Object(e)) ? w.merge(t, "string" == typeof e ? [e] : e) : a.call(t, e)), t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) != s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                s = [];
            if (f(e))
                for (; i < o; i++) null != (r = t(e[i], i, n)) && s.push(r);
            else
                for (i in e) r = t(e[i], i, n), null != r && s.push(r);
            return g.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), w.isFunction(e) ? (n = c.call(arguments, 2), (r = function() {
                return e.apply(t || this, n.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || w.guid++, r) : void 0
        },
        now: Date.now,
        support: v
    }), w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        var e, d, b, o, t, h, w, l, c, g, T, r, m, v, i, s, y, C = "sizzle" + -new Date,
            x = n.document,
            k = 0,
            f = 0,
            a = ne(),
            p = ne(),
            u = ne(),
            E = function(e, t) {
                return e === t && (c = !0), 0
            },
            N = "undefined",
            S = {}.hasOwnProperty,
            j = [],
            D = j.pop,
            A = j.push,
            L = j.push,
            q = j.slice,
            H = j.indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            M = R.replace("w", "w#"),
            F = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + P + "*\\]",
            W = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + F.replace(3, 8) + ")*)|.*)\\)|)",
            I = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            $ = new RegExp("^" + P + "*," + P + "*"),
            B = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            _ = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            z = new RegExp(W),
            X = new RegExp("^" + M + "$"),
            U = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            V = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            K = /'|\\/g,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            L.apply(j = q.call(x.childNodes), x.childNodes), j[x.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: j.length ? function(e, t) {
                    A.apply(e, q.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function te(e, t, n, r) {
            var i, o, s, a, u, l, c, f, p;
            if ((t ? t.ownerDocument || t : x) !== T && g(t), n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = (t = t || T).nodeType) && 9 !== s) return [];
            if (m && !r) {
                if (i = Q.exec(e))
                    if (l = i[1]) {
                        if (9 === s) {
                            if (!(o = t.getElementById(l)) || !o.parentNode) return n;
                            if (o.id === l) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(l)) && y(t, o) && o.id === l) return n.push(o), n
                    } else {
                        if (i[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                        if ((l = i[3]) && d.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(l)), n
                    } if (d.qsa && (!v || !v.test(e))) {
                    if (c = l = C, f = t, p = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = ce(e), (l = t.getAttribute("id")) ? c = l.replace(K, "\\$&") : t.setAttribute("id", c), c = "[id='" + c + "'] ", a = u.length; a--;) u[a] = c + fe(u[a]);
                        f = J.test(e) && ue(t.parentNode) || t, p = u.join(",")
                    }
                    if (p) try {
                        return L.apply(n, f.querySelectorAll(p)), n
                    } catch (e) {} finally {
                        l || t.removeAttribute("id")
                    }
                }
            }
            return function(e, t, n, r) {
                var i, o, s, a, u, l = ce(e);
                if (!r && 1 === l.length) {
                    if (2 < (o = l[0] = l[0].slice(0)).length && "ID" === (s = o[0]).type && d.getById && 9 === t.nodeType && m && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(s.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = U.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !b.relative[a = s.type]);)
                        if ((u = b.find[a]) && (r = u(s.matches[0].replace(Z, ee), J.test(o[0].type) && ue(t.parentNode) || t))) {
                            if (o.splice(i, 1), !(e = r.length && fe(o))) return L.apply(n, r), n;
                            break
                        }
                }
                return h(e, l)(r, t, !m, n, J.test(e) && ue(t.parentNode) || t), n
            }(e.replace(I, "$1"), t, n, r)
        }

        function ne() {
            var n = [];

            function r(e, t) {
                return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
            }
            return r
        }

        function re(e) {
            return e[C] = !0, e
        }

        function ie(e) {
            var t = T.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function oe(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) b.attrHandle[n[r]] = t
        }

        function se(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ae(s) {
            return re(function(o) {
                return o = +o, re(function(e, t) {
                    for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ue(e) {
            return e && typeof e.getElementsByTagName !== N && e
        }
        for (e in d = te.support = {}, t = te.isXML = function(e) {
                return !!(e = e && (e.ownerDocument || e).documentElement) && "HTML" !== e.nodeName
            }, g = te.setDocument = function(e) {
                var u = e ? e.ownerDocument || e : x,
                    e = u.defaultView;
                return u !== T && 9 === u.nodeType && u.documentElement ? (r = (T = u).documentElement, m = !t(u), e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", function() {
                    g()
                }, !1) : e.attachEvent && e.attachEvent("onunload", function() {
                    g()
                })), d.attributes = ie(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ie(function(e) {
                    return e.appendChild(u.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = G.test(u.getElementsByClassName) && ie(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), d.getById = ie(function(e) {
                    return r.appendChild(e).id = C, !u.getElementsByName || !u.getElementsByName(C).length
                }), d.getById ? (b.find.ID = function(e, t) {
                    if (typeof t.getElementById !== N && m) return (e = t.getElementById(e)) && e.parentNode ? [e] : []
                }, b.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete b.find.ID, b.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return (e = typeof e.getAttributeNode !== N && e.getAttributeNode("id")) && e.value === t
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== N ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== N && m ? t.getElementsByClassName(e) : void 0
                }, i = [], v = [], (d.qsa = G.test(u.querySelectorAll)) && (ie(function(e) {
                    e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + P + "*(?:value|" + O + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
                }), ie(function(e) {
                    var t = u.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + P + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = G.test(s = r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && ie(function(e) {
                    d.disconnectedMatch = s.call(e, "div"), s.call(e, "[s!='']:x"), i.push("!=", W)
                }), v = v.length && new RegExp(v.join("|")), i = i.length && new RegExp(i.join("|")), e = G.test(r.compareDocumentPosition), y = e || G.test(r.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e;
                    return e === (t = t && t.parentNode) || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, E = e ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === u || e.ownerDocument === x && y(x, e) ? -1 : t === u || t.ownerDocument === x && y(x, t) ? 1 : l ? H.call(l, e) - H.call(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!i || !o) return e === u ? -1 : t === u ? 1 : i ? -1 : o ? 1 : l ? H.call(l, e) - H.call(l, t) : 0;
                    if (i === o) return se(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[r] === a[r];) r++;
                    return r ? se(s[r], a[r]) : s[r] === x ? -1 : a[r] === x ? 1 : 0
                }, u) : T
            }, te.matches = function(e, t) {
                return te(e, null, null, t)
            }, te.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== T && g(e), t = t.replace(_, "='$1']"), !(!d.matchesSelector || !m || i && i.test(t) || v && v.test(t))) try {
                    var n = s.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < te(t, T, null, [e]).length
            }, te.contains = function(e, t) {
                return (e.ownerDocument || e) !== T && g(e), y(e, t)
            }, te.attr = function(e, t) {
                (e.ownerDocument || e) !== T && g(e);
                var n = b.attrHandle[t.toLowerCase()];
                return void 0 !== (n = n && S.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !m) : void 0) ? n : d.attributes || !m ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, te.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, te.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (c = !d.detectDuplicates, l = !d.sortStable && e.slice(0), e.sort(E), c) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return l = null, e
            }, o = te.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (b = te.selectors = {
                cacheLength: 50,
                createPseudo: re,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || te.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && te.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[5] && e[2];
                        return U.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && z.test(n) && (t = ce(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = a[e + " "];
                        return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && a(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== N && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, r) {
                        return function(e) {
                            return null == (e = te.attr(e, t)) ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(d, e, t, h, g) {
                        var m = "nth" !== d.slice(0, 3),
                            v = "last" !== d.slice(-4),
                            y = "of-type" === e;
                        return 1 === h && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, s, a, u, l = m != v ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = y && e.nodeName.toLowerCase(),
                                p = !n && !y;
                            if (c) {
                                if (m) {
                                    for (; l;) {
                                        for (o = e; o = o[l];)
                                            if (y ? o.nodeName.toLowerCase() === f : 1 === o.nodeType) return !1;
                                        u = l = "only" === d && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [v ? c.firstChild : c.lastChild], v && p) {
                                    for (a = (r = (i = c[C] || (c[C] = {}))[d] || [])[0] === k && r[1], s = r[0] === k && r[2], o = a && c.childNodes[a]; o = ++a && o && o[l] || (s = a = 0) || u.pop();)
                                        if (1 === o.nodeType && ++s && o === e) {
                                            i[d] = [k, a, s];
                                            break
                                        }
                                } else if (p && (r = (e[C] || (e[C] = {}))[d]) && r[0] === k) s = r[1];
                                else
                                    for (;
                                        (o = ++a && o && o[l] || (s = a = 0) || u.pop()) && ((y ? o.nodeName.toLowerCase() !== f : 1 !== o.nodeType) || !++s || (p && ((o[C] || (o[C] = {}))[d] = [k, s]), o !== e)););
                                return (s -= g) === h || s % h == 0 && 0 <= s / h
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || te.error("unsupported pseudo: " + e);
                        return s[C] ? s(o) : 1 < s.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? re(function(e, t) {
                            for (var n, r = s(e, o), i = r.length; i--;) e[n = H.call(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: re(function(e) {
                        var r = [],
                            i = [],
                            a = h(e.replace(I, "$1"));
                        return a[C] ? re(function(e, t, n, r) {
                            for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, a(r, null, n, i), !i.pop()
                        }
                    }),
                    has: re(function(t) {
                        return function(e) {
                            return 0 < te(t, e).length
                        }
                    }),
                    contains: re(function(t) {
                        return function(e) {
                            return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                        }
                    }),
                    lang: re(function(n) {
                        return X.test(n || "") || te.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === r
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Y.test(e.nodeName)
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: ae(function() {
                        return [0]
                    }),
                    last: ae(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ae(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ae(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ae(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ae(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ae(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = function(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }(e);

        function le() {}

        function ce(e, t) {
            var n, r, i, o, s, a, u, l = p[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (s = e, a = [], u = b.preFilter; s;) {
                for (o in n && !(r = $.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = B.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(I, " ")
                    }), s = s.slice(n.length)), b.filter) !(r = U[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? te.error(e) : p(e, a).slice(0)
        }

        function fe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function pe(s, e, t) {
            var a = e.dir,
                u = t && "parentNode" === a,
                l = f++;
            return e.first ? function(e, t, n) {
                for (; e = e[a];)
                    if (1 === e.nodeType || u) return s(e, t, n)
            } : function(e, t, n) {
                var r, i, o = [k, l];
                if (n) {
                    for (; e = e[a];)
                        if ((1 === e.nodeType || u) && s(e, t, n)) return !0
                } else
                    for (; e = e[a];)
                        if (1 === e.nodeType || u) {
                            if ((r = (i = e[C] || (e[C] = {}))[a]) && r[0] === k && r[1] === l) return o[2] = r[2];
                            if ((i[a] = o)[2] = s(e, t, n)) return !0
                        }
            }
        }

        function de(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function he(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++) !(o = e[a]) || n && !n(o, r, i) || (s.push(o), l && t.push(a));
            return s
        }
        return le.prototype = b.filters = b.pseudos, b.setFilters = new le, h = te.compile = function(e, t) {
            var n, m, v, y, x, r = [],
                i = [],
                o = u[e + " "];
            if (!o) {
                for (n = (t = t || ce(e)).length; n--;)((o = function e(t) {
                    for (var r, n, i, o = t.length, s = b.relative[t[0].type], a = s || b.relative[" "], u = s ? 1 : 0, l = pe(function(e) {
                            return e === r
                        }, a, !0), c = pe(function(e) {
                            return -1 < H.call(r, e)
                        }, a, !0), f = [function(e, t, n) {
                            return !s && (n || t !== w) || ((r = t).nodeType ? l : c)(e, t, n)
                        }]; u < o; u++)
                        if (n = b.relative[t[u].type]) f = [pe(de(f), n)];
                        else {
                            if ((n = b.filter[t[u].type].apply(null, t[u].matches))[C]) {
                                for (i = ++u; i < o && !b.relative[t[i].type]; i++);
                                return function e(d, h, g, m, v, t) {
                                    return m && !m[C] && (m = e(m)), v && !v[C] && (v = e(v, t)), re(function(e, t, n, r) {
                                        var i, o, s, a = [],
                                            u = [],
                                            l = t.length,
                                            c = e || function(e, t, n) {
                                                for (var r = 0, i = t.length; r < i; r++) te(e, t[r], n);
                                                return n
                                            }(h || "*", n.nodeType ? [n] : n, []),
                                            f = !d || !e && h ? c : he(c, a, d, n, r),
                                            p = g ? v || (e ? d : l || m) ? [] : t : f;
                                        if (g && g(f, p, n, r), m)
                                            for (i = he(p, u), m(i, [], n, r), o = i.length; o--;)(s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
                                        if (e) {
                                            if (v || d) {
                                                if (v) {
                                                    for (i = [], o = p.length; o--;)(s = p[o]) && i.push(f[o] = s);
                                                    v(null, p = [], i, r)
                                                }
                                                for (o = p.length; o--;)(s = p[o]) && -1 < (i = v ? H.call(e, s) : a[o]) && (e[i] = !(t[i] = s))
                                            }
                                        } else p = he(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : L.apply(t, p)
                                    })
                                }(1 < u && de(f), 1 < u && fe(t.slice(0, u - 1).concat({
                                    value: " " === t[u - 2].type ? "*" : ""
                                })).replace(I, "$1"), n, u < i && e(t.slice(u, i)), i < o && e(t = t.slice(i)), i < o && fe(t))
                            }
                            f.push(n)
                        } return de(f)
                }(t[n]))[C] ? r : i).push(o);
                o = u(e, (y = 0 < (v = r).length, x = 0 < (m = i).length, y ? re(s) : s))
            }

            function s(e, t, n, r, i) {
                var o, s, a, u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    p = w,
                    d = e || x && b.find.TAG("*", i),
                    h = k += null == p ? 1 : Math.random() || .1,
                    g = d.length;
                for (i && (w = t !== T && t); l !== g && null != (o = d[l]); l++) {
                    if (x && o) {
                        for (s = 0; a = m[s++];)
                            if (a(o, t, n)) {
                                r.push(o);
                                break
                            } i && (k = h)
                    }
                    y && ((o = !a && o) && u--, e && c.push(o))
                }
                if (u += l, y && l !== u) {
                    for (s = 0; a = v[s++];) a(c, f, t, n);
                    if (e) {
                        if (0 < u)
                            for (; l--;) c[l] || f[l] || (f[l] = D.call(r));
                        f = he(f)
                    }
                    L.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && te.uniqueSort(r)
                }
                return i && (k = h, w = p), c
            }
            return o
        }, d.sortStable = C.split("").sort(E).join("") === C, d.detectDuplicates = !!c, g(), d.sortDetached = ie(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("div"))
        }), ie(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || oe("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ie(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || oe("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ie(function(e) {
            return null == e.getAttribute("disabled")
        }) || oe(O, function(e, t, n) {
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }), te
    }(h);
    w.find = p, w.expr = p.selectors, w.expr[":"] = w.expr.pseudos, w.unique = p.uniqueSort, w.text = p.getText, w.isXMLDoc = p.isXML, w.contains = p.contains;
    var d = w.expr.match.needsContext,
        x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        b = /^.[^:#\[\.,]*$/;

    function T(e, n, r) {
        if (w.isFunction(n)) return w.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        });
        if (n.nodeType) return w.grep(e, function(e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (b.test(n)) return w.filter(n, e, r);
            n = w.filter(n, e)
        }
        return w.grep(e, function(e) {
            return 0 <= i.call(n, e) !== r
        })
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (w.contains(i[t], this)) return !0
            }));
            for (t = 0; t < n; t++) w.find(e, i[t], r);
            return (r = this.pushStack(1 < n ? w.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !!T(this, "string" == typeof e && d.test(e) ? w(e) : e || [], !1).length
        }
    });
    var C, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (w.fn.init = function(e, t) {
        var n, r;
        if (!e) return this;
        if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? void 0 !== C.ready ? C.ready(e) : e(w) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this));
        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : k.exec(e)) || !n[1] && t) return (!t || t.jquery ? t || C : this.constructor(t)).find(e);
        if (n[1]) {
            if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : y, !0)), x.test(n[1]) && w.isPlainObject(t))
                for (n in t) w.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        return (r = y.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = y, this.selector = e, this
    }).prototype = w.fn, C = w(y);
    var E = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function S(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                } return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = d.test(e) || "string" != typeof e ? w(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(1 < o.length ? w.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(w(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.unique(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function(e) {
            return (e = e.parentNode) && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return w.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return w.dir(e, "parentNode", n)
        },
        next: function(e) {
            return S(e, "nextSibling")
        },
        prev: function(e) {
            return S(e, "previousSibling")
        },
        nextAll: function(e) {
            return w.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return w.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return w.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return w.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return w.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return w.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || w.merge([], e.childNodes)
        }
    }, function(r, i) {
        w.fn[r] = function(e, t) {
            var n = w.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = w.filter(t, n)), 1 < this.length && (N[r] || w.unique(n), E.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var j, D = /\S+/g,
        A = {};

    function L() {
        y.removeEventListener("DOMContentLoaded", L, !1), h.removeEventListener("load", L, !1), w.ready()
    }
    w.Callbacks = function(i) {
        var n;
        i = "string" == typeof i ? A[i] || (n = A[i] = {}, w.each(i.match(D) || [], function(e, t) {
            n[t] = !0
        }), n) : w.extend({}, i);
        var t, r, o, s, a, u, l = [],
            c = !i.once && [],
            f = function(e) {
                for (t = i.memory && e, r = !0, u = s || 0, s = 0, a = l.length, o = !0; l && u < a; u++)
                    if (!1 === l[u].apply(e[0], e[1]) && i.stopOnFalse) {
                        t = !1;
                        break
                    } o = !1, l && (c ? c.length && f(c.shift()) : t ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    var e;
                    return l && (e = l.length, function r(e) {
                        w.each(e, function(e, t) {
                            var n = w.type(t);
                            "function" === n ? i.unique && p.has(t) || l.push(t) : t && t.length && "string" !== n && r(t)
                        })
                    }(arguments), o ? a = l.length : t && (s = e, f(t))), this
                },
                remove: function() {
                    return l && w.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = w.inArray(t, l, n));) l.splice(n, 1), o && (n <= a && a--, n <= u && u--)
                    }), this
                },
                has: function(e) {
                    return e ? -1 < w.inArray(e, l) : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], a = 0, this
                },
                disable: function() {
                    return l = c = t = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, t || p.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !l || r && !c || (t = [e, (t = t || []).slice ? t.slice() : t], o ? c.push(t) : f(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return p
    }, w.extend({
        Deferred: function(e) {
            var o = [
                    ["resolve", "done", w.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", w.Callbacks("memory")]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var i = arguments;
                        return w.Deferred(function(r) {
                            w.each(o, function(e, t) {
                                var n = w.isFunction(i[e]) && i[e];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && w.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[t[0] + "With"](this === s ? r.promise() : this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, s) : s
                    }
                },
                a = {};
            return s.pipe = s.then, w.each(o, function(e, t) {
                var n = t[2],
                    r = t[3];
                s[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? s : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t, n, r) {
                return function(e) {
                    n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? l.notifyWith(n, r) : --u || l.resolveWith(n, r)
                }
            }
            var i, n, r, o = 0,
                s = c.call(arguments),
                a = s.length,
                u = 1 !== a || e && w.isFunction(e.promise) ? a : 0,
                l = 1 === u ? e : w.Deferred();
            if (1 < a)
                for (i = new Array(a), n = new Array(a), r = new Array(a); o < a; o++) s[o] && w.isFunction(s[o].promise) ? s[o].promise().done(t(o, r, s)).fail(l.reject).progress(t(o, n, i)) : --u;
            return u || l.resolveWith(r, s), l.promise()
        }
    }), w.fn.ready = function(e) {
        return w.ready.promise().done(e), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? w.readyWait++ : w.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || (j.resolveWith(y, [w]), w.fn.trigger && w(y).trigger("ready").off("ready"))
        }
    }), w.ready.promise = function(e) {
        return j || (j = w.Deferred(), "complete" === y.readyState ? setTimeout(w.ready) : (y.addEventListener("DOMContentLoaded", L, !1), h.addEventListener("load", L, !1))), j.promise(e)
    }, w.ready.promise();
    var q = w.access = function(e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === w.type(n))
            for (a in i = !0, n) w.access(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, w.isFunction(r) || (s = !0), l && (t = s ? (t.call(e, r), null) : (l = t, function(e, t, n) {
                return l.call(w(e), n)
            })), t))
            for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };

    function H() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = w.expando + Math.random()
    }
    w.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, H.uid = 1, H.accepts = w.acceptData, H.prototype = {
        key: function(t) {
            if (!H.accepts(t)) return 0;
            var n = {},
                r = t[this.expando];
            if (!r) {
                r = H.uid++;
                try {
                    n[this.expando] = {
                        value: r
                    }, Object.defineProperties(t, n)
                } catch (e) {
                    n[this.expando] = r, w.extend(t, n)
                }
            }
            return this.cache[r] || (this.cache[r] = {}), r
        },
        set: function(e, t, n) {
            var r, e = this.key(e),
                i = this.cache[e];
            if ("string" == typeof t) i[t] = n;
            else if (w.isEmptyObject(i)) w.extend(this.cache[e], t);
            else
                for (r in t) i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return e = this.cache[this.key(e)], void 0 === t ? e : e[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, w.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, e = this.key(e),
                i = this.cache[e];
            if (void 0 === t) this.cache[e] = {};
            else {
                n = (r = w.isArray(t) ? t.concat(t.map(w.camelCase)) : (e = w.camelCase(t), t in i ? [t, e] : (r = e) in i ? [r] : r.match(D) || [])).length;
                for (; n--;) delete i[r[n]]
            }
        },
        hasData: function(e) {
            return !w.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var O = new H,
        P = new H,
        R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        M = /([A-Z])/g;

    function F(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(M, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : R.test(n) ? w.parseJSON(n) : n)
                } catch (e) {}
                P.set(e, t, n)
            } else n = void 0;
        return n
    }

    function W(e, t) {
        return e = t || e, "none" === w.css(e, "display") || !w.contains(e.ownerDocument, e)
    }
    w.extend({
        hasData: function(e) {
            return P.hasData(e) || O.hasData(e)
        },
        data: function(e, t, n) {
            return P.access(e, t, n)
        },
        removeData: function(e, t) {
            P.remove(e, t)
        },
        _data: function(e, t, n) {
            return O.access(e, t, n)
        },
        _removeData: function(e, t) {
            O.remove(e, t)
        }
    }), w.fn.extend({
        data: function(r, e) {
            var t, n, i, o = this[0],
                s = o && o.attributes;
            if (void 0 !== r) return "object" == typeof r ? this.each(function() {
                P.set(this, r)
            }) : q(this, function(t) {
                var e, n = w.camelCase(r);
                if (o && void 0 === t) return void 0 !== (e = P.get(o, r)) || void 0 !== (e = P.get(o, n)) || void 0 !== (e = F(o, n, void 0)) ? e : void 0;
                this.each(function() {
                    var e = P.get(this, n);
                    P.set(this, n, t), -1 !== r.indexOf("-") && void 0 !== e && P.set(this, r, t)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = P.get(o), 1 === o.nodeType && !O.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--;) 0 === (n = s[t].name).indexOf("data-") && (n = w.camelCase(n.slice(5)), F(o, n, i[n]));
                O.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                P.remove(this, e)
            })
        }
    }), w.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = O.get(e, t), n && (!r || w.isArray(n) ? r = O.access(e, t, w.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                w.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return O.get(e, n) || O.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    O.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? w.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = w.queue(this, t, n);
                w._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && w.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || o.resolveWith(s, [s])
            }
            var r, i = 1,
                o = w.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(r = O.get(s[a], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
            return n(), o.promise(t)
        }
    });
    var I = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        $ = ["Top", "Right", "Bottom", "Left"],
        B = /^(?:checkbox|radio)$/i;
    (s = y.createDocumentFragment().appendChild(y.createElement("div"))).innerHTML = "<input type='radio' checked='checked' name='t'/>", v.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue;
    var _ = "undefined";
    v.focusinBubbles = "onfocusin" in h;
    var z = /^key/,
        X = /^(?:mouse|contextmenu)|click/,
        U = /^(?:focusinfocus|focusoutblur)$/,
        V = /^([^.]*)(?:\.(.+)|)$/;

    function Y() {
        return !0
    }

    function G() {
        return !1
    }

    function Q() {
        try {
            return y.activeElement
        } catch (e) {}
    }
    w.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h = O.get(t);
            if (h)
                for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = w.guid++), (a = h.events) || (a = h.events = {}), (s = h.handle) || (s = h.handle = function(e) {
                        return typeof w != _ && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(D) || [""]).length; u--;) f = d = (l = V.exec(e[u]) || [])[1], p = (l[2] || "").split(".").sort(), f && (c = w.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = w.event.special[f] || {}, l = w.extend({
                    type: f,
                    origType: d,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (d = a[f]) || ((d = a[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, r, p, s) || t.addEventListener && t.addEventListener(f, s, !1)), c.add && (c.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), w.event.global[f] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = O.hasData(e) && O.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(D) || [""]).length; l--;)
                    if (d = g = (a = V.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || w.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && (delete m.handle, O.remove(e, "events"))
            }
        },
        trigger: function(e, t, n, r) {
            var i, o, s, a, u, l, c = [n || y],
                f = m.call(e, "type") ? e.type : e,
                p = m.call(e, "namespace") ? e.namespace.split(".") : [],
                d = o = n = n || y;
            if (3 !== n.nodeType && 8 !== n.nodeType && !U.test(f + w.event.triggered) && (0 <= f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), a = f.indexOf(":") < 0 && "on" + f, (e = e[w.expando] ? e : new w.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : w.makeArray(t, [e]), l = w.event.special[f] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!r && !l.noBubble && !w.isWindow(n)) {
                    for (s = l.delegateType || f, U.test(s + f) || (d = d.parentNode); d; d = d.parentNode) c.push(d), o = d;
                    o === (n.ownerDocument || y) && c.push(o.defaultView || o.parentWindow || h)
                }
                for (i = 0;
                    (d = c[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? s : l.bindType || f, (u = (O.get(d, "events") || {})[e.type] && O.get(d, "handle")) && u.apply(d, t), (u = a && d[a]) && u.apply && w.acceptData(d) && (e.result = u.apply(d, t), !1 === e.result && e.preventDefault());
                return e.type = f, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(c.pop(), t) || !w.acceptData(n) || a && w.isFunction(n[f]) && !w.isWindow(n) && ((o = n[a]) && (n[a] = null), n[w.event.triggered = f](), w.event.triggered = void 0, o && (n[a] = o)), e.result
            }
        },
        dispatch: function(e) {
            e = w.event.fix(e);
            var t, n, r, i, o, s = c.call(arguments),
                a = (O.get(this, "events") || {})[e.type] || [],
                u = w.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (o = w.event.handlers.call(this, e, a), t = 0;
                    (r = o[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (i = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, void 0 !== (i = ((w.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (!0 !== u.disabled || "click" !== e.type) {
                        for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? 0 <= w(i, this).index(u) : w.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    } return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i = t.button;
                return null == e.pageX && null != t.clientX && (n = (r = e.target.ownerDocument || y).documentElement, r = r.body, e.pageX = t.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[w.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = X.test(i) ? this.mouseHooks : z.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new w.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = y), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== Q() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === Q() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && w.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return w.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            e = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            }), r ? w.event.trigger(e, null, t) : w.event.dispatch.call(t, e), e.isDefaultPrevented() && n.preventDefault()
        }
    }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, w.Event = function(e, t) {
        return this instanceof w.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault() ? Y : G) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), void(this[w.expando] = !0)) : new w.Event(e, t)
    }, w.Event.prototype = {
        isDefaultPrevented: G,
        isPropagationStopped: G,
        isImmediatePropagationStopped: G,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Y, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Y, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = Y, this.stopPropagation()
        }
    }, w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, i) {
        w.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || w.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), v.focusinBubbles || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(e) {
            w.event.simulate(r, e.target, w.event.fix(e), !0)
        }
        w.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = O.access(e, r);
                t || e.addEventListener(n, i, !0), O.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = O.access(e, r) - 1;
                t ? O.access(e, r, t) : (e.removeEventListener(n, i, !0), O.remove(e, r))
            }
        }
    }), w.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = G;
            else if (!r) return this;
            return 1 === i && (o = r, (r = function(e) {
                return w().off(e), o.apply(this, arguments)
            }).guid = o.guid || (o.guid = w.guid++)), this.each(function() {
                w.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = G), this.each(function() {
                w.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        },
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? w.event.trigger(e, t, n, !0) : void 0
        }
    });
    var J = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        K = /<([\w:]+)/,
        Z = /<|&#?\w+;/,
        ee = /<(?:script|style|link)/i,
        te = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ne = /^$|\/(?:java|ecma)script/i,
        re = /^true\/(.*)/,
        ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        oe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function se(e, t) {
        return w.nodeName(e, "table") && w.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ae(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ue(e) {
        var t = re.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function le(e, t) {
        for (var n = 0, r = e.length; n < r; n++) O.set(e[n], "globalEval", !t || O.get(t[n], "globalEval"))
    }

    function ce(e, t) {
        var n, r, i, o, s, a;
        if (1 === t.nodeType) {
            if (O.hasData(e) && (o = O.access(e), s = O.set(t, o), a = o.events))
                for (i in delete s.handle, s.events = {}, a)
                    for (n = 0, r = a[i].length; n < r; n++) w.event.add(t, i, a[i][n]);
            P.hasData(e) && (e = P.access(e), e = w.extend({}, e), P.set(t, e))
        }
    }

    function fe(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && w.nodeName(e, t) ? w.merge([e], n) : n
    }
    oe.optgroup = oe.option, oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead, oe.th = oe.td, w.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a, u, l, c = e.cloneNode(!0),
                f = w.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (s = fe(c), r = 0, i = (o = fe(e)).length; r < i; r++) a = o[r], "input" === (l = (u = s[r]).nodeName.toLowerCase()) && B.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || fe(e), s = s || fe(c), r = 0, i = o.length; r < i; r++) ce(o[r], s[r]);
                else ce(e, c);
            return 0 < (s = fe(c, "script")).length && le(s, !f && fe(e, "script")), c
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l = t.createDocumentFragment(), c = [], f = 0, p = e.length; f < p; f++)
                if ((i = e[f]) || 0 === i)
                    if ("object" === w.type(i)) w.merge(c, i.nodeType ? [i] : i);
                    else if (Z.test(i)) {
                for (o = o || l.appendChild(t.createElement("div")), s = (K.exec(i) || ["", ""])[1].toLowerCase(), s = oe[s] || oe._default, o.innerHTML = s[1] + i.replace(J, "<$1></$2>") + s[2], u = s[0]; u--;) o = o.lastChild;
                w.merge(c, o.childNodes), (o = l.firstChild).textContent = ""
            } else c.push(t.createTextNode(i));
            for (l.textContent = "", f = 0; i = c[f++];)
                if ((!r || -1 === w.inArray(i, r)) && (a = w.contains(i.ownerDocument, i), o = fe(l.appendChild(i), "script"), a && le(o), n))
                    for (u = 0; i = o[u++];) ne.test(i.type || "") && n.push(i);
            return l
        },
        cleanData: function(e) {
            for (var t, n, r, i, o, s, a = w.event.special, u = 0; void 0 !== (n = e[u]); u++) {
                if (w.acceptData(n) && (o = n[O.expando]) && (t = O.cache[o])) {
                    if ((r = Object.keys(t.events || {})).length)
                        for (s = 0; void 0 !== (i = r[s]); s++) a[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                    O.cache[o] && delete O.cache[o]
                }
                delete P.cache[n[P.expando]]
            }
        }
    }), w.fn.extend({
        text: function(e) {
            return q(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || se(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = se(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? w.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || w.cleanData(fe(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && le(fe(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(fe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return q(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ee.test(e) && !oe[(K.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(J, "<$1></$2>");
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(fe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, w.cleanData(fe(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, r) {
            n = g.apply([], n);
            var e, t, i, o, s, a, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                p = n[0],
                d = w.isFunction(p);
            if (d || 1 < l && "string" == typeof p && !v.checkClone && te.test(p)) return this.each(function(e) {
                var t = c.eq(e);
                d && (n[0] = p.call(this, e, t.html())), t.domManip(n, r)
            });
            if (l && (t = (e = w.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === e.childNodes.length && (e = t), t)) {
                for (o = (i = w.map(fe(e, "script"), ae)).length; u < l; u++) s = e, u !== f && (s = w.clone(s, !0, !0), o && w.merge(i, fe(s, "script"))), r.call(this[u], s, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, w.map(i, ue), u = 0; u < o; u++) s = i[u], ne.test(s.type || "") && !O.access(s, "globalEval") && w.contains(a, s) && (s.src ? w._evalUrl && w._evalUrl(s.src) : w.globalEval(s.textContent.replace(ie, "")))
            }
            return this
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        w.fn[e] = function(e) {
            for (var t, n = [], r = w(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), w(r[o])[s](t), a.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var pe, de = {};

    function he(e, t) {
        return e = w(t.createElement(e)).appendTo(t.body), t = h.getDefaultComputedStyle ? h.getDefaultComputedStyle(e[0]).display : w.css(e[0], "display"), e.detach(), t
    }

    function ge(e) {
        var t = y,
            n = de[e];
        return n || ("none" !== (n = he(e, t)) && n || ((t = (pe = (pe || w("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = he(e, t), pe.detach()), de[e] = n), n
    }
    var me, ve, ye, xe, be, we = /^margin/,
        Te = new RegExp("^(" + I + ")(?!px)[a-z%]+$", "i"),
        Ce = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };

    function ke(e, t, n) {
        var r, i, o = e.style;
        return (n = n || Ce(e)) && (i = n.getPropertyValue(t) || n[t]), n && ("" !== i || w.contains(e.ownerDocument, e) || (i = w.style(e, t)), Te.test(i) && we.test(t) && (r = o.width, e = o.minWidth, t = o.maxWidth, o.minWidth = o.maxWidth = o.width = i, i = n.width, o.width = r, o.minWidth = e, o.maxWidth = t)), void 0 !== i ? i + "" : i
    }

    function Ee(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function Ne() {
        be.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", ye.appendChild(xe);
        var e = h.getComputedStyle(be, null);
        me = "1%" !== e.top, ve = "4px" === e.width, ye.removeChild(xe)
    }
    ye = y.documentElement, xe = y.createElement("div"), (be = y.createElement("div")).style.backgroundClip = "content-box", be.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === be.style.backgroundClip, xe.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", xe.appendChild(be), h.getComputedStyle && w.extend(v, {
        pixelPosition: function() {
            return Ne(), me
        },
        boxSizingReliable: function() {
            return null == ve && Ne(), ve
        },
        reliableMarginRight: function() {
            var e = be.appendChild(y.createElement("div"));
            return e.style.cssText = be.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", e.style.marginRight = e.style.width = "0", be.style.width = "1px", ye.appendChild(xe), e = !parseFloat(h.getComputedStyle(e, null).marginRight), ye.removeChild(xe), be.innerHTML = "", e
        }
    }), w.swap = function(e, t, n, r) {
        var i, o = {};
        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
        for (i in r = n.apply(e, r || []), t) e.style[i] = o[i];
        return r
    };
    var Se = /^(none|table(?!-c[ea]).+)/,
        je = new RegExp("^(" + I + ")(.*)$", "i"),
        De = new RegExp("^([+-])=(" + I + ")", "i"),
        Ae = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Le = {
            letterSpacing: 0,
            fontWeight: 400
        },
        qe = ["Webkit", "O", "Moz", "ms"];

    function He(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = qe.length; i--;)
            if ((t = qe[i] + n) in e) return t;
        return r
    }

    function Oe(e, t, n) {
        var r = je.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Pe(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += w.css(e, n + $[o], !0, i)), r ? ("content" === n && (s -= w.css(e, "padding" + $[o], !0, i)), "margin" !== n && (s -= w.css(e, "border" + $[o] + "Width", !0, i))) : (s += w.css(e, "padding" + $[o], !0, i), "padding" !== n && (s += w.css(e, "border" + $[o] + "Width", !0, i)));
        return s
    }

    function Re(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Ce(e),
            s = "border-box" === w.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = ke(e, t, o)) < 0 || null == i) && (i = e.style[t]), Te.test(i)) return i;
            r = s && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Pe(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function Me(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)(r = e[s]).style && (o[s] = O.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && W(r) && (o[s] = O.access(r, "olddisplay", ge(r.nodeName)))) : o[s] || (i = W(r), (n && "none" !== n || !i) && O.set(r, "olddisplay", i ? n : w.css(r, "display"))));
        for (s = 0; s < a; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function Fe(e, t, n, r, i) {
        return new Fe.prototype.init(e, t, n, r, i)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) return "" === (e = ke(e, "opacity")) ? "1" : e
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = w.camelCase(t),
                    u = e.style;
                return t = w.cssProps[a] || (w.cssProps[a] = He(u, a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : ("string" == (o = typeof n) && (i = De.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(w.css(e, t)), o = "number"), void(null != n && n == n && ("number" !== o || w.cssNumber[a] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = "", u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o = w.camelCase(t);
            return t = w.cssProps[o] || (w.cssProps[o] = He(e.style, o)), (o = w.cssHooks[t] || w.cssHooks[o]) && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = ke(e, t, r)), "normal" === i && t in Le && (i = Le[t]), "" === n || n ? (t = parseFloat(i), !0 === n || w.isNumeric(t) ? t || 0 : i) : i
        }
    }), w.each(["height", "width"], function(e, i) {
        w.cssHooks[i] = {
            get: function(e, t, n) {
                return t ? 0 === e.offsetWidth && Se.test(w.css(e, "display")) ? w.swap(e, Ae, function() {
                    return Re(e, i, n)
                }) : Re(e, i, n) : void 0
            },
            set: function(e, t, n) {
                var r = n && Ce(e);
                return Oe(0, t, n ? Pe(e, i, n, "border-box" === w.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), w.cssHooks.marginRight = Ee(v.reliableMarginRight, function(e, t) {
        return t ? w.swap(e, {
            display: "inline-block"
        }, ke, [e, "marginRight"]) : void 0
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        w.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + $[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, we.test(i) || (w.cssHooks[i + o].set = Oe)
    }), w.fn.extend({
        css: function(e, t) {
            return q(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (w.isArray(t)) {
                    for (r = Ce(e), i = t.length; s < i; s++) o[t[s]] = w.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return Me(this, !0)
        },
        hide: function() {
            return Me(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                W(this) ? w(this).show() : w(this).hide()
            })
        }
    }), (w.Tween = Fe).prototype = {
        constructor: Fe,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Fe.propHooks[this.prop];
            return (e && e.get ? e : Fe.propHooks._default).get(this)
        },
        run: function(e) {
            var t = Fe.propHooks[this.prop];
            return this.pos = e = this.options.duration ? w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (t && t.set ? t : Fe.propHooks._default).set(this), this
        }
    }, Fe.prototype.init.prototype = Fe.prototype, Fe.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[w.cssProps[e.prop]] || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Fe.propHooks.scrollTop = Fe.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, w.fx = Fe.prototype.init, w.fx.step = {};
    var We, Ie, $e = /^(?:toggle|show|hide)$/,
        Be = new RegExp("^(?:([+-])=|)(" + I + ")([a-z%]*)$", "i"),
        _e = /queueHooks$/,
        ze = [function(t, e, n) {
            var r, i, o, s, a, u, l, c = this,
                f = {},
                p = t.style,
                d = t.nodeType && W(t),
                h = O.get(t, "fxshow");
            for (r in n.queue || (null == (a = w._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || u()
                }), a.unqueued++, c.always(function() {
                    c.always(function() {
                        a.unqueued--, w.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "none" === (l = w.css(t, "display")) && (l = ge(t.nodeName)), "inline" === l && "none" === w.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), e)
                if (i = e[r], $e.exec(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                        if ("show" !== i || !h || void 0 === h[r]) continue;
                        d = !0
                    }
                    f[r] = h && h[r] || w.style(t, r)
                } if (!w.isEmptyObject(f))
                for (r in h ? "hidden" in h && (d = h.hidden) : h = O.access(t, "fxshow", {}), o && (h.hidden = !d), d ? w(t).show() : c.done(function() {
                        w(t).hide()
                    }), c.done(function() {
                        for (var e in O.remove(t, "fxshow"), f) w.style(t, e, f[e])
                    }), f) s = Ye(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }],
        Xe = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = (t = Be.exec(t)) && t[3] || (w.cssNumber[e] ? "" : "px"),
                    o = (w.cssNumber[e] || "px" !== i && +r) && Be.exec(w.css(n.elem, e)),
                    s = 1,
                    a = 20;
                if (o && o[3] !== i)
                    for (i = i || o[3], t = t || [], o = +r || 1; o /= s = s || ".5", w.style(n.elem, e, o + i), s !== (s = n.cur() / r) && 1 !== s && --a;);
                return t && (o = n.start = +o || +r || 0, n.unit = i, n.end = t[1] ? o + (t[1] + 1) * t[2] : +t[2]), n
            }]
        };

    function Ue() {
        return setTimeout(function() {
            We = void 0
        }), We = w.now()
    }

    function Ve(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = $[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function Ye(e, t, n) {
        for (var r, i = (Xe[t] || []).concat(Xe["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function Ge(i, e, t) {
        var n, o, r = 0,
            s = ze.length,
            a = w.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (o) return !1;
                for (var e = We || Ue(), t = 1 - ((e = Math.max(0, l.startTime + l.duration - e)) / l.duration || 0), n = 0, r = l.tweens.length; n < r; n++) l.tweens[n].run(t);
                return a.notifyWith(i, [l, t, e]), t < 1 && r ? e : (a.resolveWith(i, [l]), !1)
            },
            l = a.promise({
                elem: i,
                props: w.extend({}, e),
                opts: w.extend(!0, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: We || Ue(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    return e = w.Tween(i, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing), l.tweens.push(e), e
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? a.resolveWith(i, [l, e]) : a.rejectWith(i, [l, e]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (r = w.camelCase(n), i = t[r], o = e[n], w.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = w.cssHooks[r], s && "expand" in s)
                        for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < s; r++)
            if (n = ze[r].call(l, i, c, l.opts)) return n;
        return w.map(c, Ye, l), w.isFunction(l.opts.start) && l.opts.start.call(i, l), w.fx.timer(w.extend(u, {
            elem: i,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    w.Animation = w.extend(Ge, {
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = w.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; r < i; r++) n = e[r], Xe[n] = Xe[n] || [], Xe[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? ze.unshift(e) : ze.push(e)
        }
    }), w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || w.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !w.isFunction(t) && t
        };
        return r.duration = w.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = w.isEmptyObject(t),
                o = w.speed(e, n, r);
            return (r = function() {
                var e = Ge(this, w.extend({}, t), o);
                (i || O.get(this, "finish")) && e.stop(!0)
            }).finish = r, i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(i, e, o) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(o)
            }
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = w.timers,
                    r = O.get(this);
                if (t) r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && _e.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || w.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = O.get(this),
                    n = t[s + "queue"],
                    r = t[s + "queueHooks"],
                    i = w.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, w.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function(e, r) {
        var i = w.fn[r];
        w.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Ve(r, !0), e, t, n)
        }
    }), w.each({
        slideDown: Ve("show"),
        slideUp: Ve("hide"),
        slideToggle: Ve("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        w.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), w.timers = [], w.fx.tick = function() {
        var e, t = 0,
            n = w.timers;
        for (We = w.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), We = void 0
    }, w.fx.timer = function(e) {
        w.timers.push(e), e() ? w.fx.start() : w.timers.pop()
    }, w.fx.interval = 13, w.fx.start = function() {
        Ie = Ie || setInterval(w.fx.tick, w.fx.interval)
    }, w.fx.stop = function() {
        clearInterval(Ie), Ie = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function(r, e) {
        return r = w.fx && w.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = setTimeout(e, r);
            t.stop = function() {
                clearTimeout(n)
            }
        })
    }, p = y.createElement("input"), I = (s = y.createElement("select")).appendChild(y.createElement("option")), p.type = "checkbox", v.checkOn = "" !== p.value, v.optSelected = I.selected, s.disabled = !0, v.optDisabled = !I.disabled, (p = y.createElement("input")).value = "t", p.type = "radio", v.radioValue = "t" === p.value;
    var Qe, Je = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return q(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute == _ ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (t = t.toLowerCase(), r = w.attrHooks[t] || (w.expr.match.bool.test(t) ? Qe : void 0)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) || null != (i = w.find.attr(e, t)) ? i : void 0 : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void w.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(D);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = w.propFix[n] || n, w.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && w.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Qe = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = Je[t] || w.find.attr;
        Je[t] = function(e, t, n) {
            var r, i;
            return n || (i = Je[t], Je[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, Je[t] = i), r
        }
    });
    var Ke = /^(?:input|select|textarea|button)$/i;
    w.fn.extend({
        prop: function(e, t) {
            return q(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || Ke.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), v.optSelected || (w.propHooks.selected = {
        get: function(e) {
            return (e = e.parentNode) && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    });
    var Ze = /[\t\r\n\f]/g;
    w.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a = "string" == typeof t && t,
                u = 0,
                l = this.length;
            if (w.isFunction(t)) return this.each(function(e) {
                w(this).addClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(D) || []; u < l; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(Ze, " ") : " ")) {
                        for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = w.trim(r), n.className !== s && (n.className = s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof t && t,
                u = 0,
                l = this.length;
            if (w.isFunction(t)) return this.each(function(e) {
                w(this).removeClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(D) || []; u < l; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(Ze, " ") : "")) {
                        for (o = 0; i = e[o++];)
                            for (; 0 <= r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                        s = t ? w.trim(r) : "", n.className !== s && (n.className = s)
                    } return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" == o ? t ? this.addClass(i) : this.removeClass(i) : this.each(w.isFunction(i) ? function(e) {
                w(this).toggleClass(i.call(this, e, this.className, t), t)
            } : function() {
                if ("string" == o)
                    for (var e, t = 0, n = w(this), r = i.match(D) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else o != _ && "boolean" != o || (this.className && O.set(this, "__className__", this.className), this.className = !this.className && !1 !== i && O.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(Ze, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var et = /\r/g;
    w.fn.extend({
        val: function(t) {
            var n, e, r, i = this[0];
            return arguments.length ? (r = w.isFunction(t), this.each(function(e) {
                1 === this.nodeType && (null == (e = r ? t.call(this, e, w(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : w.isArray(e) && (e = w.map(e, function(e) {
                    return null == e ? "" : e + ""
                })), (n = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : i ? (n = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof(e = i.value) ? e.replace(et, "") : null == e ? "" : e : void 0
        }
    }), w.extend({
        valHooks: {
            select: {
                get: function(e) {
                    for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type || r < 0, o = i ? null : [], s = i ? r + 1 : n.length, a = r < 0 ? s : i ? r : 0; a < s; a++)
                        if (!(!(t = n[a]).selected && a !== r || (v.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && w.nodeName(t.parentNode, "optgroup"))) {
                            if (t = w(t).val(), i) return t;
                            o.push(t)
                        } return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = w.makeArray(t), s = i.length; s--;)((r = i[s]).selected = 0 <= w.inArray(w(r).val(), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                return w.isArray(t) ? e.checked = 0 <= w.inArray(w(e).val(), t) : void 0
            }
        }, v.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        w.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var tt = w.now(),
        nt = /\?/;
    w.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, w.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), t
    };
    var rt, it, ot = /#.*$/,
        st = /([?&])_=[^&]*/,
        at = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ut = /^(?:GET|HEAD)$/,
        lt = /^\/\//,
        ct = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ft = {},
        pt = {},
        dt = "*/".concat("*");
    try {
        it = location.href
    } catch (e) {
        (it = y.createElement("a")).href = "", it = it.href
    }

    function ht(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(D) || [];
            if (w.isFunction(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function gt(t, r, i, o) {
        var s = {},
            a = t === pt;

        function u(e) {
            var n;
            return s[e] = !0, w.each(t[e] || [], function(e, t) {
                return "string" != typeof(t = t(r, i, o)) || a || s[t] ? a ? !(n = t) : void 0 : (r.dataTypes.unshift(t), u(t), !1)
            }), n
        }
        return u(r.dataTypes[0]) || !s["*"] && u("*")
    }

    function mt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }
    rt = ct.exec(it.toLowerCase()) || [], w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: it,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(rt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": dt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": w.parseJSON,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? mt(mt(e, w.ajaxSettings), t) : mt(w.ajaxSettings, e)
        },
        ajaxPrefilter: ht(ft),
        ajaxTransport: ht(pt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, l, c, n, f, p, r, d = w.ajaxSetup({}, t),
                h = d.context || d,
                g = d.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                m = w.Deferred(),
                v = w.Callbacks("once memory"),
                y = d.statusCode || {},
                i = {},
                o = {},
                x = 0,
                s = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!n)
                                for (n = {}; t = at.exec(c);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? c : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = o[n] = o[n] || e, i[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (x < 2)
                                for (var t in e) y[t] = [y[t], e[t]];
                            else b.always(e[b.status]);
                        return this
                    },
                    abort: function(e) {
                        return e = e || s, u && u.abort(e), a(0, e), this
                    }
                };
            if (m.promise(b).complete = v.add, b.success = b.done, b.error = b.fail, d.url = ((e || d.url || it) + "").replace(ot, "").replace(lt, rt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = w.trim(d.dataType || "*").toLowerCase().match(D) || [""], null == d.crossDomain && (e = ct.exec(d.url.toLowerCase()), d.crossDomain = !(!e || e[1] === rt[1] && e[2] === rt[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (rt[3] || ("http:" === rt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = w.param(d.data, d.traditional)), gt(ft, d, t, b), 2 === x) return b;
            for (r in (p = d.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ut.test(d.type), l = d.url, d.hasContent || (d.data && (l = d.url += (nt.test(l) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = st.test(l) ? l.replace(st, "$1_=" + tt++) : l + (nt.test(l) ? "&" : "?") + "_=" + tt++)), d.ifModified && (w.lastModified[l] && b.setRequestHeader("If-Modified-Since", w.lastModified[l]), w.etag[l] && b.setRequestHeader("If-None-Match", w.etag[l])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && b.setRequestHeader("Content-Type", d.contentType), b.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + dt + "; q=0.01" : "") : d.accepts["*"]), d.headers) b.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (!1 === d.beforeSend.call(h, b, d) || 2 === x)) return b.abort();
            for (r in s = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) b[r](d[r]);
            if (u = gt(pt, d, t, b)) {
                b.readyState = 1, p && g.trigger("ajaxSend", [b, d]), d.async && 0 < d.timeout && (f = setTimeout(function() {
                    b.abort("timeout")
                }, d.timeout));
                try {
                    x = 1, u.send(i, a)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    a(-1, e)
                }
            } else a(-1, "No Transport");

            function a(e, t, n, r) {
                var i, o, s, a = t;
                2 !== x && (x = 2, f && clearTimeout(f), u = void 0, c = r || "", b.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s = s || i
                        }
                        o = o || s
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
                }(d, b, n)), s = function(e, t, n, r) {
                    var i, o, s, a, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(s = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                    !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(d, s, b, r), r ? (d.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (w.lastModified[l] = n), (n = b.getResponseHeader("etag")) && (w.etag[l] = n)), 204 === e || "HEAD" === d.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, i = s.data, r = !(o = s.error))) : (o = a, !e && a || (a = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || a) + "", r ? m.resolveWith(h, [i, a, b]) : m.rejectWith(h, [b, a, o]), b.statusCode(y), y = void 0, p && g.trigger(r ? "ajaxSuccess" : "ajaxError", [b, d, r ? i : o]), v.fireWith(h, [b, a]), p && (g.trigger("ajaxComplete", [b, d]), --w.active || w.event.trigger("ajaxStop")))
            }
            return b
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function(e, i) {
        w[i] = function(e, t, n, r) {
            return w.isFunction(t) && (r = r || n, n = t, t = void 0), w.ajax({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            })
        }
    }), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, w.fn.extend({
        wrapAll: function(t) {
            var e;
            return w.isFunction(t) ? this.each(function(e) {
                w(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return this.each(w.isFunction(n) ? function(e) {
                w(this).wrapInner(n.call(this, e))
            } : function() {
                var e = w(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = w.isFunction(t);
            return this.each(function(e) {
                w(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
            }).end()
        }
    }), w.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, w.expr.filters.visible = function(e) {
        return !w.expr.filters.hidden(e)
    };
    var vt = /%20/g,
        yt = /\[\]$/,
        xt = /\r?\n/g,
        bt = /^(?:submit|button|image|reset|file)$/i,
        wt = /^(?:input|select|textarea|keygen)/i;
    w.param = function(e, t) {
        function n(e, t) {
            t = w.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        var r, i = [];
        if (void 0 === t && (t = w.ajaxSettings && w.ajaxSettings.traditional), w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (r in e) ! function n(r, e, i, o) {
                if (w.isArray(e)) w.each(e, function(e, t) {
                    i || yt.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t ? e : "") + "]", t, i, o)
                });
                else if (i || "object" !== w.type(e)) o(r, e);
                else
                    for (var t in e) n(r + "[" + t + "]", e[t], i, o)
            }(r, e[r], t, n);
        return i.join("&").replace(vt, "+")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && wt.test(this.nodeName) && !bt.test(e) && (this.checked || !B.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : w.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(xt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(xt, "\r\n")
                }
            }).get()
        }
    }), w.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Tt = 0,
        Ct = {},
        kt = {
            0: 200,
            1223: 204
        },
        Et = w.ajaxSettings.xhr();
    h.ActiveXObject && w(h).on("unload", function() {
        for (var e in Ct) Ct[e]()
    }), v.cors = !!Et && "withCredentials" in Et, v.ajax = Et = !!Et, w.ajaxTransport(function(o) {
        var s;
        return v.cors || Et && !o.crossDomain ? {
            send: function(e, t) {
                var n, r = o.xhr(),
                    i = ++Tt;
                if (r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (n in o.xhrFields) r[n] = o.xhrFields[n];
                for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                s = function(e) {
                    return function() {
                        s && (delete Ct[i], s = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? t(r.status, r.statusText) : t(kt[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                            text: r.responseText
                        } : void 0, r.getAllResponseHeaders()))
                    }
                }, r.onload = s(), r.onerror = s("error"), s = Ct[i] = s("abort"), r.send(o.hasContent && o.data || null)
            },
            abort: function() {
                s && s()
            }
        } : void 0
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain) return {
            send: function(e, t) {
                r = w("<script>").prop({
                    async: !0,
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), y.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Nt = [],
        St = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Nt.pop() || w.expando + "_" + tt++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, s = !1 !== e.jsonp && (St.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && St.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = w.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(St, "$1" + r) : !1 !== e.jsonp && (e.url += (nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || w.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = h[r], h[r] = function() {
            o = arguments
        }, n.always(function() {
            h[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Nt.push(r)), o && w.isFunction(i) && i(o[0]), o = i = void 0
        }), "script") : void 0
    }), w.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || y;
        var r = x.exec(e),
            n = !n && [];
        return r ? [t.createElement(r[1])] : (r = w.buildFragment([e], t, n), n && n.length && w(n).remove(), w.merge([], r.childNodes))
    };
    var jt = w.fn.load;
    w.fn.load = function(e, t, n) {
        if ("string" != typeof e && jt) return jt.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return 0 <= a && (r = e.slice(a), e = e.slice(0, a)), w.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < s.length && w.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, w.expr.filters.animated = function(t) {
        return w.grep(w.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Dt = h.document.documentElement;

    function At(e) {
        return w.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a = w.css(e, "position"),
                u = w(e),
                l = {};
            "static" === a && (e.style.position = "relative"), o = u.offset(), r = w.css(e, "top"), s = w.css(e, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (r + s).indexOf("auto") ? (i = (a = u.position()).top, a.left) : (i = parseFloat(r) || 0, parseFloat(s) || 0), w.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + i), null != t.left && (l.left = t.left - o.left + s), "using" in t ? t.using.call(e, l) : u.css(l)
        }
    }, w.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                w.offset.setOffset(this, t, e)
            });
            var e, n = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                i = n && n.ownerDocument;
            return i ? (e = i.documentElement, w.contains(e, n) ? (typeof n.getBoundingClientRect != _ && (r = n.getBoundingClientRect()), i = At(i), {
                top: r.top + i.pageYOffset - e.clientTop,
                left: r.left + i.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === w.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (r = e.offset()), r.top += w.css(e[0], "borderTopWidth", !0), r.left += w.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - w.css(n, "marginTop", !0),
                    left: t.left - r.left - w.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Dt; e && !w.nodeName(e, "html") && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || Dt
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        w.fn[t] = function(e) {
            return q(this, function(e, t, n) {
                var r = At(e);
                return void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? h.pageXOffset : n, o ? n : h.pageYOffset) : e[t] = n)
            }, t, e, arguments.length, null)
        }
    }), w.each(["top", "left"], function(e, n) {
        w.cssHooks[n] = Ee(v.pixelPosition, function(e, t) {
            return t ? (t = ke(e, n), Te.test(t) ? w(e).position()[n] + "px" : t) : void 0
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(o, s) {
        w.each({
            padding: "inner" + o,
            content: s,
            "": "outer" + o
        }, function(r, e) {
            w.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return q(this, function(e, t, n) {
                    var r;
                    return w.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? w.css(e, t, i) : w.style(e, t, n, i)
                }, s, n ? e : void 0, n, null)
            }
        })
    }), w.fn.size = function() {
        return this.length
    }, w.fn.andSelf = w.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Lt = h.jQuery,
        qt = h.$;
    return w.noConflict = function(e) {
        return h.$ === w && (h.$ = qt), e && h.jQuery === w && (h.jQuery = Lt), w
    }, typeof e == _ && (h.jQuery = h.$ = w), w
}),
function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";

    function g(e) {
        return null != e && e === e.window
    }
    var t = [],
        n = Object.getPrototypeOf,
        a = t.slice,
        m = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        r = {},
        o = r.toString,
        v = r.hasOwnProperty,
        s = v.toString,
        l = s.call(Object),
        y = {},
        x = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        C = T.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e
    }
    var k = function(e, t) {
        return new k.fn.init(e, t)
    };

    function f(e) {
        var t = !!e && "length" in e && e.length,
            n = h(e);
        return !x(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: "3.6.3",
        constructor: k,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = k.merge(this.constructor(), e);
            return e.prevObject = this, e
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(k.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(k.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o = arguments[0] || {},
            s = 1,
            a = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || x(o) || (o = {}), s === a && (o = this, s--); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = e[t], "__proto__" !== t && o !== n && (u && n && (k.isPlainObject(n) || (r = Array.isArray(n))) ? (i = o[t], i = r && !Array.isArray(i) ? [] : r || k.isPlainObject(i) ? i : {}, r = !1, o[t] = k.extend(u, i, n)) : void 0 !== n && (o[t] = n));
        return o
    }, k.extend({
        expando: "jQuery" + ("3.6.3" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== o.call(e)) && (!(e = n(e)) || "function" == typeof(e = v.call(e, "constructor") && e.constructor) && s.call(e) === l)
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (f(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (f(Object(e)) ? k.merge(t, "string" == typeof e ? [e] : e) : u.call(t, e)), t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) != s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (f(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return m(s)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        r["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function f(e, t) {
            return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        }

        function r() {
            T()
        }
        var e, d, b, o, i, h, p, g, w, u, l, T, C, s, k, m, a, c, v, E = "sizzle" + +new Date,
            y = n.document,
            N = 0,
            x = 0,
            S = ue(),
            j = ue(),
            D = ue(),
            A = ue(),
            L = function(e, t) {
                return e === t && (l = !0), 0
            },
            q = {}.hasOwnProperty,
            t = [],
            H = t.pop,
            O = t.push,
            P = t.push,
            R = t.slice,
            M = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            W = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + W + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            $ = "\\[" + W + "*(" + I + ")(?:" + W + "*([*^$|!~]?=)" + W + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + W + "*\\]",
            B = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
            _ = new RegExp(W + "+", "g"),
            z = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"),
            X = new RegExp("^" + W + "*," + W + "*"),
            U = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"),
            V = new RegExp(W + "|>"),
            Y = new RegExp(B),
            G = new RegExp("^" + I + "$"),
            Q = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + W + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ne = /[+~]/,
            re = new RegExp("\\\\[\\da-fA-F]{1,6}" + W + "?|\\\\([^\\r\\n\\f])", "g"),
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            se = ye(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            P.apply(t = R.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (e) {
            P = {
                apply: t.length ? function(e, t) {
                    O.apply(e, R.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function ae(t, e, n, r) {
            var i, o, s, a, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, k)) {
                if (11 !== p && (u = te.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(s = e.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (f && (s = f.getElementById(i)) && v(e, s) && s.id === i) return n.push(s), n
                    } else {
                        if (u[2]) return P.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return P.apply(n, e.getElementsByClassName(i)), n
                    } if (d.qsa && !A[t + " "] && (!m || !m.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (V.test(t) || U.test(t))) {
                        for ((f = ne.test(t) && ge(e.parentNode) || e) === e && d.scope || ((a = e.getAttribute("id")) ? a = a.replace(ie, oe) : e.setAttribute("id", a = E)), o = (l = h(t)).length; o--;) l[o] = (a ? "#" + a : ":scope") + " " + ve(l[o]);
                        c = l.join(",")
                    }
                    try {
                        if (d.cssSupportsSelector && !CSS.supports("selector(:is(" + c + "))")) throw new Error;
                        return P.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        a === E && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(z, "$1"), e, n, r)
        }

        function ue() {
            var n = [];

            function r(e, t) {
                return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
            }
            return r
        }

        function le(e) {
            return e[E] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function he(s) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in d = ae.support = {}, i = ae.isXML = function(e) {
                var t = e && e.namespaceURI,
                    e = e && (e.ownerDocument || e).documentElement;
                return !J.test(t || e && e.nodeName || "HTML")
            }, T = ae.setDocument = function(e) {
                var t, e = e ? e.ownerDocument || e : y;
                return e != C && 9 === e.nodeType && e.documentElement && (s = (C = e).documentElement, k = !i(C), y != C && (t = C.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", r, !1) : t.attachEvent && t.attachEvent("onunload", r)), d.scope = ce(function(e) {
                    return s.appendChild(e).appendChild(C.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.cssSupportsSelector = ce(function() {
                    return CSS.supports("selector(*)") && C.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
                }), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = ee.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return s.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(re, f);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && k) {
                        e = t.getElementById(e);
                        return e ? [e] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var t = e.replace(re, f);
                    return function(e) {
                        e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return e && e.value === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && k) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && k) return t.getElementsByClassName(e)
                }, a = [], m = [], (d.qsa = ee.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    s.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + W + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + W + "*(?:value|" + F + ")"), e.querySelectorAll("[id~=" + E + "-]").length || m.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + W + "*name" + W + "*=" + W + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + W + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (d.matchesSelector = ee.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), a.push("!=", B)
                }), d.cssSupportsSelector || m.push(":has"), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), t = ee.test(s.compareDocumentPosition), v = t || ee.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType && e.documentElement || e,
                        t = t && t.parentNode;
                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, L = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == y && v(y, e) ? -1 : t == C || t.ownerDocument == y && v(y, t) ? 1 : u ? M(u, e) - M(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? M(u, e) - M(u, t) : 0;
                    if (i === o) return pe(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[r] === a[r];) r++;
                    return r ? pe(s[r], a[r]) : s[r] == y ? -1 : a[r] == y ? 1 : 0
                }), C
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && k && !A[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    A(t, !0)
                }
                return 0 < ae(t, C, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e), v(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    n = n && q.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
                return void 0 !== n ? n : d.attributes || !k ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(ie, oe)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(L), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = ae.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (b = ae.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(re, f), e[3] = (e[3] || e[4] || e[5] || "").replace(re, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(re, f).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) && S(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, r) {
                        return function(e) {
                            e = ae.attr(e, t);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(_, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, m) {
                        var v = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, s, a, u, l = v != y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (v) {
                                    for (; l;) {
                                        for (s = e; s = s[l];)
                                            if (x ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [y ? c.firstChild : c.lastChild], y && p) {
                                    for (d = (a = (r = (i = (o = (s = c)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2], s = a && c.childNodes[a]; s = ++a && s && s[l] || (d = a = 0) || u.pop();)
                                        if (1 === s.nodeType && ++d && s === e) {
                                            i[h] = [N, a, d];
                                            break
                                        }
                                } else if (p && (d = a = (r = (i = (o = (s = e)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === N && r[1]), !1 === d)
                                    for (;
                                        (s = ++a && s && s[l] || (d = a = 0) || u.pop()) && ((x ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (p && ((i = (o = s[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [N, d]), s !== e)););
                                return (d -= m) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return s[E] ? s(o) : 1 < s.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            for (var n, r = s(e, o), i = r.length; i--;) e[n = M(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            a = p(e.replace(z, "$1"));
                        return a[E] ? le(function(e, t, n, r) {
                            for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, a(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < ae(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(re, f),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return G.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(re, f).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Z.test(e.nodeName)
                    },
                    input: function(e) {
                        return K.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: he(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = function(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }(e);

        function me() {}

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ye(s, e, t) {
            var a = e.dir,
                u = e.next,
                l = u || a,
                c = t && "parentNode" === l,
                f = x++;
            return e.first ? function(e, t, n) {
                for (; e = e[a];)
                    if (1 === e.nodeType || c) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o = [N, f];
                if (n) {
                    for (; e = e[a];)
                        if ((1 === e.nodeType || c) && s(e, t, n)) return !0
                } else
                    for (; e = e[a];)
                        if (1 === e.nodeType || c)
                            if (r = (i = e[E] || (e[E] = {}))[e.uniqueID] || (i[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[a] || e;
                            else {
                                if ((i = r[l]) && i[0] === N && i[1] === f) return o[2] = i[2];
                                if ((r[l] = o)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function xe(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function be(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }

        function we(d, h, g, m, v, e) {
            return m && !m[E] && (m = we(m)), v && !v[E] && (v = we(v, e)), le(function(e, t, n, r) {
                var i, o, s, a = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : be(c, a, d, n, r),
                    p = g ? v || (e ? d : l || m) ? [] : t : f;
                if (g && g(f, p, n, r), m)
                    for (i = be(p, u), m(i, [], n, r), o = i.length; o--;)(s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
                if (e) {
                    if (v || d) {
                        if (v) {
                            for (i = [], o = p.length; o--;)(s = p[o]) && i.push(f[o] = s);
                            v(null, p = [], i, r)
                        }
                        for (o = p.length; o--;)(s = p[o]) && -1 < (i = v ? M(e, s) : a[o]) && (e[i] = !(t[i] = s))
                    }
                } else p = be(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : P.apply(t, p)
            })
        }

        function Te(m, v) {
            function e(e, t, n, r, i) {
                var o, s, a, u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    p = w,
                    d = e || x && b.find.TAG("*", i),
                    h = N += null == p ? 1 : Math.random() || .1,
                    g = d.length;
                for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                    if (x && o) {
                        for (s = 0, t || o.ownerDocument == C || (T(o), n = !k); a = m[s++];)
                            if (a(o, t || C, n)) {
                                r.push(o);
                                break
                            } i && (N = h)
                    }
                    y && ((o = !a && o) && u--, e && c.push(o))
                }
                if (u += l, y && l !== u) {
                    for (s = 0; a = v[s++];) a(c, f, t, n);
                    if (e) {
                        if (0 < u)
                            for (; l--;) c[l] || f[l] || (f[l] = H.call(r));
                        f = be(f)
                    }
                    P.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && ae.uniqueSort(r)
                }
                return i && (N = h, w = p), c
            }
            var y = 0 < v.length,
                x = 0 < m.length;
            return y ? le(e) : e
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = ae.tokenize = function(e, t) {
            var n, r, i, o, s, a, u, l = j[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (s = e, a = [], u = b.preFilter; s;) {
                for (o in n && !(r = X.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(z, " ")
                    }), s = s.slice(n.length)), b.filter) !(r = Q[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? ae.error(e) : j(e, a).slice(0)
        }, p = ae.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = D[e + " "];
            if (!o) {
                for (n = (t = t || h(e)).length; n--;)((o = function e(t) {
                    for (var r, n, i, o = t.length, s = b.relative[t[0].type], a = s || b.relative[" "], u = s ? 1 : 0, l = ye(function(e) {
                            return e === r
                        }, a, !0), c = ye(function(e) {
                            return -1 < M(r, e)
                        }, a, !0), f = [function(e, t, n) {
                            return n = !s && (n || t !== w) || ((r = t).nodeType ? l : c)(e, t, n), r = null, n
                        }]; u < o; u++)
                        if (n = b.relative[t[u].type]) f = [ye(xe(f), n)];
                        else {
                            if ((n = b.filter[t[u].type].apply(null, t[u].matches))[E]) {
                                for (i = ++u; i < o && !b.relative[t[i].type]; i++);
                                return we(1 < u && xe(f), 1 < u && ve(t.slice(0, u - 1).concat({
                                    value: " " === t[u - 2].type ? "*" : ""
                                })).replace(z, "$1"), n, u < i && e(t.slice(u, i)), i < o && e(t = t.slice(i)), i < o && ve(t))
                            }
                            f.push(n)
                        } return xe(f)
                }(t[n]))[E] ? r : i).push(o);
                (o = D(e, Te(i, r))).selector = e
            }
            return o
        }, g = ae.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && k && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(re, f), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = Q.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !b.relative[a = s.type]);)
                    if ((u = b.find[a]) && (r = u(s.matches[0].replace(re, f), ne.test(o[0].type) && ge(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && ve(o))) return P.apply(n, r), n;
                        break
                    }
            }
            return (l || p(e, c))(r, t, !k, n, !t || ne.test(e) && ge(t.parentNode) || t), n
        }, d.sortStable = E.split("").sort(L).join("") === E, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(F, function(e, t, n) {
            if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }), ae
    }(T);
    k.find = p, k.expr = p.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = p.uniqueSort, k.text = p.getText, k.isXMLDoc = p.isXML, k.contains = p.contains, k.escapeSelector = p.escape;

    function d(e, t, n) {
        for (var r = [], i = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (i && k(e).is(n)) break;
                r.push(e)
            } return r
    }

    function w(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var E = k.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return x(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && E.test(e) ? k(e) : e || [], !1).length
        }
    });
    var D, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        if (!e) return this;
        if (n = n || D, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : x(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : A.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (r[1]) {
            if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), S.test(r[1]) && k.isPlainObject(t))
                for (var r in t) x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (e = C.getElementById(r[2])) && (this[0] = e, this.length = 1), this
    }).prototype = k.fn, D = k(C);
    var L = /^(?:parents|prev(?:Until|All))/,
        q = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function H(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof e && k(e);
            if (!E.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return d(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return d(e, "parentNode", n)
        },
        next: function(e) {
            return H(e, "nextSibling")
        },
        prev: function(e) {
            return H(e, "previousSibling")
        },
        nextAll: function(e) {
            return d(e, "nextSibling")
        },
        prevAll: function(e) {
            return d(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return d(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return d(e, "previousSibling", n)
        },
        siblings: function(e) {
            return w((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return w(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (N(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (q[r] || k.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var O = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function M(e, t, n, r) {
        var i;
        try {
            e && x(i = e.promise) ? i.call(e).done(t).fail(n) : e && x(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(O) || [], function(e, t) {
            n[t] = !0
        }), n) : k.extend({}, r);

        function i() {
            for (a = a || r.once, s = o = !0; l.length; c = -1)
                for (t = l.shift(); ++c < u.length;) !1 === u[c].apply(t[0], t[1]) && r.stopOnFalse && (c = u.length, t = !1);
            r.memory || (t = !1), o = !1, a && (u = t ? [] : "")
        }
        var o, t, s, a, u = [],
            l = [],
            c = -1,
            f = {
                add: function() {
                    return u && (t && !o && (c = u.length - 1, l.push(t)), function n(e) {
                        k.each(e, function(e, t) {
                            x(t) ? r.unique && f.has(t) || u.push(t) : t && t.length && "string" !== h(t) && n(t)
                        })
                    }(arguments), t && !o && i()), this
                },
                remove: function() {
                    return k.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = k.inArray(t, u, n));) u.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < k.inArray(e, u) : 0 < u.length
                },
                empty: function() {
                    return u = u && [], this
                },
                disable: function() {
                    return a = l = [], u = t = "", this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return a = l = [], t || o || (u = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || i()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return f
    }, k.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = x(i[t[4]]) && i[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && x(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, s, a) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(i < u)) {
                                        if ((e = s.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, x(t) ? a ? t.call(e, l(u, o, P, a), l(u, o, R, a)) : (u++, t.call(e, l(u, o, P, a), l(u, o, R, a), l(u, o, P, o.notifyWith))) : (s !== P && (n = void 0, r = [e]), (a || o.resolveWith)(n, r))
                                    }
                                }
                                var n = this,
                                    r = arguments,
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (s !== R && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), T.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) {
                            o[0][3].add(l(0, e, x(r) ? r : P, e.notifyWith)), o[1][3].add(l(0, e, x(t) ? t : P)), o[2][3].add(l(0, e, x(n) ? n : R))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? k.extend(e, s) : s
                    }
                },
                a = {};
            return k.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                s[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    i[t] = this, o[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(i, o)
                }
            }
            var n = arguments.length,
                r = n,
                i = Array(r),
                o = a.call(arguments),
                s = k.Deferred();
            if (n <= 1 && (M(e, s.done(t(r)).resolve, s.reject, !n), "pending" === s.state() || x(o[r] && o[r].then))) return s.then();
            for (; r--;) M(o[r], t(r), s.reject);
            return s.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && F.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, k.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    };
    var W = k.Deferred();

    function I() {
        C.removeEventListener("DOMContentLoaded", I), T.removeEventListener("load", I), k.ready()
    }
    k.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || W.resolveWith(C, [k])
        }
    }), k.ready.then = W.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(k.ready) : (C.addEventListener("DOMContentLoaded", I), T.addEventListener("load", I));
    var $ = function(e, t, n, r, i, o, s) {
            var a = 0,
                u = e.length,
                l = null == n;
            if ("object" === h(n))
                for (a in i = !0, n) $(e, t, a, n[a], !0, o, s);
            else if (void 0 !== r && (i = !0, x(r) || (s = !0), l && (t = s ? (t.call(e, r), null) : (l = t, function(e, t, n) {
                    return l.call(k(e), n)
                })), t))
                for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        B = /^-ms-/,
        _ = /-([a-z])/g;

    function z(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(B, "ms-").replace(_, z)
    }

    function U(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function V() {
        this.expando = k.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(O) || []).length;
                    for (; n--;) delete r[t[n]]
                }
                void 0 !== t && !k.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !k.isEmptyObject(e)
        }
    };
    var Y = new V,
        G = new V,
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function K(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Q.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return G.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                G.set(this, n)
            }) : $(this, function(e) {
                var t;
                return o && void 0 === e ? void 0 !== (t = G.get(o, n)) || void 0 !== (t = K(o, n)) ? t : void 0 : void this.each(function() {
                    G.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = G.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (r = s[t].name).indexOf("data-") && (r = X(r.slice(5)), K(o, r, i[r]));
                Y.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), k.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                k.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || o.resolveWith(s, [s])
            }
            var r, i = 1,
                o = k.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(r = Y.get(s[a], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
            return n(), o.promise(t)
        }
    });
    var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
        te = ["Top", "Right", "Bottom", "Left"],
        ne = C.documentElement,
        re = function(e) {
            return k.contains(e.ownerDocument, e)
        },
        ie = {
            composed: !0
        };
    ne.getRootNode && (re = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ie) === e.ownerDocument
    });
    var oe = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === k.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return k.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ee.exec(k.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; s--;) k.style(e, t, c + l), (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0), c /= o;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ae = {};

    function ue(e, t) {
        for (var n, r, i, o, s, a = [], u = 0, l = e.length; u < l; u++)(r = e[u]).style && (n = r.style.display, t ? ("none" === n && (a[u] = Y.get(r, "display") || null, a[u] || (r.style.display = "")), "" === r.style.display && oe(r) && (a[u] = (s = o = void 0, o = (i = r).ownerDocument, s = i.nodeName, (i = ae[s]) || (o = o.body.appendChild(o.createElement(s)), i = k.css(o, "display"), o.parentNode.removeChild(o), "none" === i && (i = "block"), ae[s] = i)))) : "none" !== n && (a[u] = "none", Y.set(r, "display", n)));
        for (u = 0; u < l; u++) null != a[u] && (e[u].style.display = a[u]);
        return e
    }
    k.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                oe(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var le = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        fe = /^$|^module$|\/(?:java|ecma)script/i;
    Xe = C.createDocumentFragment().appendChild(C.createElement("div")), (p = C.createElement("input")).setAttribute("type", "radio"), p.setAttribute("checked", "checked"), p.setAttribute("name", "t"), Xe.appendChild(p), y.checkClone = Xe.cloneNode(!0).cloneNode(!0).lastChild.checked, Xe.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!Xe.cloneNode(!0).lastChild.defaultValue, Xe.innerHTML = "<option></option>", y.option = !!Xe.lastChild;
    var pe = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function de(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && N(e, t) ? k.merge([e], n) : n
    }

    function he(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead, pe.th = pe.td, y.option || (pe.optgroup = pe.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ge = /<|&#?\w+;/;

    function me(e, t, n, r, i) {
        for (var o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === h(o)) k.merge(f, o.nodeType ? [o] : o);
                else if (ge.test(o)) {
            for (s = s || c.appendChild(t.createElement("div")), a = (ce.exec(o) || ["", ""])[1].toLowerCase(), a = pe[a] || pe._default, s.innerHTML = a[1] + k.htmlPrefilter(o) + a[2], l = a[0]; l--;) s = s.lastChild;
            k.merge(f, s.childNodes), (s = c.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (c.textContent = "", p = 0; o = f[p++];)
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (u = re(o), s = de(c.appendChild(o), "script"), u && he(s), n)
            for (l = 0; o = s[l++];) fe.test(o.type || "") && n.push(o);
        return c
    }
    var ve = /^([^.]*)(?:\.(.+)|)/;

    function ye() {
        return !0
    }

    function xe() {
        return !1
    }

    function be(e, t) {
        return e === function() {
            try {
                return C.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function we(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n, n = void 0), t) we(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = xe;
        else if (!i) return e;
        return 1 === o && (s = i, (i = function(e) {
            return k().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }

    function Te(e, i, o) {
        o ? (Y.set(e, i, !1), k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = a.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && k.event.add(e, i, ye)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h = Y.get(t);
            if (U(t))
                for (n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ne, i), n.guid || (n.guid = k.guid++), (a = h.events) || (a = h.events = Object.create(null)), (s = h.handle) || (s = h.handle = function(e) {
                        return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(O) || [""]).length; u--;) f = d = (l = ve.exec(e[u]) || [])[1], p = (l[2] || "").split(".").sort(), f && (c = k.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = k.event.special[f] || {}, l = k.extend({
                    type: f,
                    origType: d,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (d = a[f]) || ((d = a[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, r, p, s) || t.addEventListener && t.addEventListener(f, s)), c.add && (c.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), k.event.global[f] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = Y.hasData(e) && Y.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(O) || [""]).length; l--;)
                    if (d = g = (a = ve.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || k.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, s = new Array(arguments.length),
                a = k.event.fix(e),
                u = (Y.get(this, "events") || Object.create(null))[a.type] || [],
                e = k.event.special[a.type] || {};
            for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (a.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, a)) {
                for (o = k.event.handlers.call(this, a, u), t = 0;
                    (r = o[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (i = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== i.namespace && !a.rnamespace.test(i.namespace) || (a.handleObj = i, a.data = i.data, void 0 !== (i = ((k.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s, a = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], s = {}, n = 0; n < u; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), s[i] && o.push(r);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && a.push({
                elem: l,
                handlers: t.slice(u)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: x(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return le.test(e.type) && e.click && N(e, "input") && Te(e, "click", ye), !1
                },
                trigger: function(e) {
                    e = this || e;
                    return le.test(e.type) && e.click && N(e, "input") && Te(e, "click"), !0
                },
                _default: function(e) {
                    e = e.target;
                    return le.test(e.type) && e.click && N(e, "input") && Y.get(e, "click") || N(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ye, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ye, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ye, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
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
        which: !0
    }, k.event.addProp), k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        k.event.special[t] = {
            setup: function() {
                return Te(this, t, be), !1
            },
            trigger: function() {
                return Te(this, t), !0
            },
            _default: function(e) {
                return Y.get(e.target, t)
            },
            delegateType: e
        }
    }), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({
        on: function(e, t, n, r) {
            return we(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return we(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function() {
                k.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        }
    });
    var Ce = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ee = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function Ne(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }

    function Se(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function De(e, t) {
        var n, r, i, o;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (o = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), o)
                    for (n = 0, r = o[i].length; n < r; n++) k.event.add(t, i, o[i][n]);
            G.hasData(e) && (e = G.access(e), e = k.extend({}, e), G.set(t, e))
        }
    }

    function Ae(n, r, i, o) {
        r = m(r);
        var e, t, s, a, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = x(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && ke.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Ae(t, r, i, o)
        });
        if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = k.map(de(e, "script"), Se)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), a && k.merge(s, de(u, "script"))), i.call(n[c], u, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, k.map(s, je), c = 0; c < a; c++) u = s[c], fe.test(u.type || "") && !Y.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(Ee, ""), u, l))
        }
        return n
    }

    function Le(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(de(r)), r.parentNode && (n && re(r) && he(de(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, u, l, c = e.cloneNode(!0),
                f = re(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (s = de(c), r = 0, i = (o = de(e)).length; r < i; r++) a = o[r], u = s[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && le.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || de(e), s = s || de(c), r = 0, i = o.length; r < i; r++) De(o[r], s[r]);
                else De(e, c);
            return 0 < (s = de(c, "script")).length && he(s, !f && de(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (U(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) {
            return Le(this, e, !0)
        },
        remove: function(e) {
            return Le(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ae(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ae(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Ne(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return Ae(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ae(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(de(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ce.test(e) && !pe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(de(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ae(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(de(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[s](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });

    function qe(e, t, n) {
        var r, i = {};
        for (r in t) i[r] = e.style[r], e.style[r] = t[r];
        for (r in n = n.call(e), t) e.style[r] = i[r];
        return n
    }
    var He, Oe, Pe, Re, Me, Fe, We, Ie, $e = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        Be = /^--/,
        _e = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = T), t.getComputedStyle(e)
        },
        ze = new RegExp(te.join("|"), "i"),
        Xe = "[\\x20\\t\\r\\n\\f]",
        Ue = new RegExp("^" + Xe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Xe + "+$", "g");

    function Ve() {
        var e;
        Ie && (We.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Ie.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ne.appendChild(We).appendChild(Ie), e = T.getComputedStyle(Ie), He = "1%" !== e.top, Fe = 12 === Ye(e.marginLeft), Ie.style.right = "60%", Re = 36 === Ye(e.right), Oe = 36 === Ye(e.width), Ie.style.position = "absolute", Pe = 12 === Ye(Ie.offsetWidth / 3), ne.removeChild(We), Ie = null)
    }

    function Ye(e) {
        return Math.round(parseFloat(e))
    }

    function Ge(e, t, n) {
        var r, i = Be.test(t),
            o = e.style;
        return (n = n || _e(e)) && (r = n.getPropertyValue(t) || n[t], i && r && (r = r.replace(Ue, "$1") || void 0), "" !== r || re(e) || (r = k.style(e, t)), !y.pixelBoxStyles() && $e.test(r) && ze.test(t) && (i = o.width, e = o.minWidth, t = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = n.width, o.width = i, o.minWidth = e, o.maxWidth = t)), void 0 !== r ? r + "" : r
    }

    function Qe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    We = C.createElement("div"), (Ie = C.createElement("div")).style && (Ie.style.backgroundClip = "content-box", Ie.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Ie.style.backgroundClip, k.extend(y, {
        boxSizingReliable: function() {
            return Ve(), Oe
        },
        pixelBoxStyles: function() {
            return Ve(), Re
        },
        pixelPosition: function() {
            return Ve(), He
        },
        reliableMarginLeft: function() {
            return Ve(), Fe
        },
        scrollboxSize: function() {
            return Ve(), Pe
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == Me && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", ne.appendChild(e).appendChild(t).appendChild(n), n = T.getComputedStyle(t), Me = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, ne.removeChild(e)), Me
        }
    }));
    var Je = ["Webkit", "Moz", "ms"],
        Ke = C.createElement("div").style,
        Ze = {};

    function et(e) {
        var t = k.cssProps[e] || Ze[e];
        return t || (e in Ke ? e : Ze[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;)
                if ((e = Je[n] + t) in Ke) return e
        }(e) || e)
    }
    var tt = /^(none|table(?!-c[ea]).+)/,
        nt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        rt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function it(e, t, n) {
        var r = ee.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function ot(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (u += k.css(e, n + te[s], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + te[s], !0, i)), "margin" !== n && (u -= k.css(e, "border" + te[s] + "Width", !0, i))) : (u += k.css(e, "padding" + te[s], !0, i), "padding" !== n ? u += k.css(e, "border" + te[s] + "Width", !0, i) : a += k.css(e, "border" + te[s] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5)) || 0), u
    }

    function st(e, t, n) {
        var r = _e(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
            o = i,
            s = Ge(e, t, r),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && N(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + ot(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
    }

    function at(e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = Ge(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
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
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = X(t),
                    u = Be.test(t),
                    l = e.style;
                if (u || (t = et(a)), s = k.cssHooks[t] || k.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ee.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o = X(t);
            return Be.test(t) || (t = et(o)), (o = k.cssHooks[t] || k.cssHooks[o]) && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in rt && (i = rt[t]), "" === n || n ? (t = parseFloat(i), !0 === n || isFinite(t) ? t || 0 : i) : i
        }
    }), k.each(["height", "width"], function(e, a) {
        k.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !tt.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? st(e, a, n) : qe(e, nt, function() {
                    return st(e, a, n)
                })
            },
            set: function(e, t, n) {
                var r, i = _e(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    s = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                    n = n ? ot(e, a, n, s, i) : 0;
                return s && o && (n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(i[a]) - ot(e, a, "border", !1, i) - .5)), n && (r = ee.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t, t = k.css(e, a)), it(0, t, n)
            }
        }
    }), k.cssHooks.marginLeft = Qe(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + te[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (k.cssHooks[i + o].set = it)
    }), k.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (r = _e(e), i = t.length; s < i; s++) o[t[s]] = k.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), (k.Tween = at).prototype = {
        constructor: at,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = at.propHooks[this.prop];
            return (e && e.get ? e : at.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = at.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : at.propHooks._default).set(this), this
        }
    }, at.prototype.init.prototype = at.prototype, at.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = k.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[et(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, at.propHooks.scrollTop = at.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, k.fx = at.prototype.init, k.fx.step = {};
    var ut, lt, ct = /^(?:toggle|show|hide)$/,
        ft = /queueHooks$/;

    function pt() {
        lt && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(pt) : T.setTimeout(pt, k.fx.interval), k.fx.tick())
    }

    function dt() {
        return T.setTimeout(function() {
            ut = void 0
        }), ut = Date.now()
    }

    function ht(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = te[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function gt(e, t, n) {
        for (var r, i = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function mt(i, e, t) {
        var n, o, r = 0,
            s = mt.prefilters.length,
            a = k.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (o) return !1;
                for (var e = ut || dt(), e = Math.max(0, l.startTime + l.duration - e), t = 1 - (e / l.duration || 0), n = 0, r = l.tweens.length; n < r; n++) l.tweens[n].run(t);
                return a.notifyWith(i, [l, t, e]), t < 1 && r ? e : (r || a.notifyWith(i, [l, 1, 0]), a.resolveWith(i, [l]), !1)
            },
            l = a.promise({
                elem: i,
                props: k.extend({}, e),
                opts: k.extend(!0, {
                    specialEasing: {},
                    easing: k.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ut || dt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    e = k.Tween(i, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(e), e
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (a.notifyWith(i, [l, 1, 0]), a.resolveWith(i, [l, e])) : a.rejectWith(i, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = k.cssHooks[r]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < s; r++)
            if (n = mt.prefilters[r].call(l, i, c, l.opts)) return x(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, gt, l), x(l.opts.start) && l.opts.start.call(i, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
            elem: i,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    k.Animation = k.extend(mt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, ee.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = x(e) ? (t = e, ["*"]) : e.match(O)).length; r < i; r++) n = e[r], mt.tweeners[n] = mt.tweeners[n] || [], mt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, s, a, u, l, c = "width" in t || "height" in t,
                f = this,
                p = {},
                d = e.style,
                h = e.nodeType && oe(e),
                g = Y.get(e, "fxshow");
            for (r in n.queue || (null == (s = k._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, f.always(function() {
                    f.always(function() {
                        s.unqueued--, k.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (i = t[r], ct.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        h = !0
                    }
                    p[r] = g && g[r] || k.style(e, r)
                } if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(p))
                for (r in c && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (l = g && g.display) && (l = Y.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (ue([e], !0), l = e.style.display || l, c = k.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (f.done(function() {
                        d.display = l
                    }), null == l && (c = d.display, l = "none" === c ? "" : c)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
                        d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                    })), u = !1, p) u || (g ? "hidden" in g && (h = g.hidden) : g = Y.access(e, "fxshow", {
                    display: l
                }), o && (g.hidden = !h), h && ue([e], !0), f.done(function() {
                    for (r in h || ue([e]), Y.remove(e, "fxshow"), p) k.style(e, r, p[r])
                })), u = gt(h ? g[r] : 0, r, f), r in g || (g[r] = u.start, h && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? mt.prefilters.unshift(e) : mt.prefilters.push(e)
        }
    }), k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || x(e) && e,
            duration: e,
            easing: n && t || t && !x(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(oe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                r = function() {
                    var e = mt(this, k.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return r.finish = r, i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(i, e, o) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(o)
            }
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ft.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[s + "queue"],
                    r = t[s + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ht(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: ht("show"),
        slideUp: ht("hide"),
        slideToggle: ht("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (ut = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), ut = void 0
    }, k.fx.timer = function(e) {
        k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function() {
        lt || (lt = !0, pt())
    }, k.fx.stop = function() {
        lt = null
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = T.setTimeout(e, r);
            t.stop = function() {
                T.clearTimeout(n)
            }
        })
    }, Z = C.createElement("input"), Xe = C.createElement("select").appendChild(C.createElement("option")), Z.type = "checkbox", y.checkOn = "" !== Z.value, y.optSelected = Xe.selected, (Z = C.createElement("input")).value = "t", Z.type = "radio", y.radioValue = "t" === Z.value;
    var vt, yt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return $(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : !(i && "get" in i && null !== (r = i.get(e, t))) && null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(O);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), vt = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = yt[t] || k.find.attr;
        yt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = yt[o], yt[o] = r, r = null != s(e, t, n) ? o : null, yt[o] = i), r
        }
    });
    var xt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;

    function wt(e) {
        return (e.match(O) || []).join(" ")
    }

    function Tt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Ct(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return $(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : xt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (k.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s;
            return x(t) ? this.each(function(e) {
                k(this).addClass(t.call(this, e, Tt(this)))
            }) : (e = Ct(t)).length ? this.each(function() {
                if (r = Tt(this), n = 1 === this.nodeType && " " + wt(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    s = wt(n), r !== s && this.setAttribute("class", s)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s;
            return x(t) ? this.each(function(e) {
                k(this).removeClass(t.call(this, e, Tt(this)))
            }) : arguments.length ? (e = Ct(t)).length ? this.each(function() {
                if (r = Tt(this), n = 1 === this.nodeType && " " + wt(r) + " ") {
                    for (o = 0; o < e.length; o++)
                        for (i = e[o]; - 1 < n.indexOf(" " + i + " ");) n = n.replace(" " + i + " ", " ");
                    s = wt(n), r !== s && this.setAttribute("class", s)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, s = typeof t,
                a = "string" == s || Array.isArray(t);
            return x(t) ? this.each(function(e) {
                k(this).toggleClass(t.call(this, e, Tt(this), n), n)
            }) : "boolean" == typeof n && a ? n ? this.addClass(t) : this.removeClass(t) : (e = Ct(t), this.each(function() {
                if (a)
                    for (o = k(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else void 0 !== t && "boolean" != s || ((r = Tt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", !r && !1 !== t && Y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            for (var t, n = 0, r = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + wt(Tt(t)) + " ").indexOf(r)) return !0;
            return !1
        }
    });
    var kt = /\r/g;
    k.fn.extend({
        val: function(t) {
            var n, e, r, i = this[0];
            return arguments.length ? (r = x(t), this.each(function(e) {
                1 === this.nodeType && (null == (e = r ? t.call(this, e, k(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = k.map(e, function(e) {
                    return null == e ? "" : e + ""
                })), (n = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : i ? (n = k.valHooks[i.type] || k.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof(e = i.value) ? e.replace(kt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : wt(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type, o = i ? null : [], s = i ? r + 1 : n.length, a = r < 0 ? s : i ? r : 0; a < s; a++)
                        if (((t = n[a]).selected || a === r) && !t.disabled && (!t.parentNode.disabled || !N(t.parentNode, "optgroup"))) {
                            if (t = k(t).val(), i) return t;
                            o.push(t)
                        } return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = k.makeArray(t), s = i.length; s--;)((r = i[s]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, y.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in T;

    function Et(e) {
        e.stopPropagation()
    }
    var Nt = /^(?:focusinfocus|focusoutblur)$/;
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, s, a, u, l, c, f = [n || C],
                p = v.call(e, "type") ? e.type : e,
                d = v.call(e, "namespace") ? e.namespace.split(".") : [],
                h = c = o = n = n || C;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Nt.test(p + k.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), a = p.indexOf(":") < 0 && "on" + p, (e = e[k.expando] ? e : new k.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), l = k.event.special[p] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!r && !l.noBubble && !g(n)) {
                    for (s = l.delegateType || p, Nt.test(s + p) || (h = h.parentNode); h; h = h.parentNode) f.push(h), o = h;
                    o === (n.ownerDocument || C) && f.push(o.defaultView || o.parentWindow || T)
                }
                for (i = 0;
                    (h = f[i++]) && !e.isPropagationStopped();) c = h, e.type = 1 < i ? s : l.bindType || p, (u = (Y.get(h, "events") || Object.create(null))[e.type] && Y.get(h, "handle")) && u.apply(h, t), (u = a && h[a]) && u.apply && U(h) && (e.result = u.apply(h, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), t) || !U(n) || a && x(n[p]) && !g(n) && ((o = n[a]) && (n[a] = null), k.event.triggered = p, e.isPropagationStopped() && c.addEventListener(p, Et), n[p](), e.isPropagationStopped() && c.removeEventListener(p, Et), k.event.triggered = void 0, o && (n[a] = o)), e.result
            }
        },
        simulate: function(e, t, n) {
            e = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(e, null, t)
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), y.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        }
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var St = T.location,
        jt = {
            guid: Date.now()
        },
        Dt = /\?/;
    k.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || k.error("Invalid XML: " + (n ? k.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var At = /\[\]$/,
        Lt = /\r?\n/g,
        qt = /^(?:submit|button|image|reset|file)$/i,
        Ht = /^(?:input|select|textarea|keygen)/i;
    k.param = function(e, t) {
        function n(e, t) {
            t = x(t) ? t() : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var r, i = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (r in e) ! function n(r, e, i, o) {
                if (Array.isArray(e)) k.each(e, function(e, t) {
                    i || At.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
                });
                else if (i || "object" !== h(e)) o(r, e);
                else
                    for (var t in e) n(r + "[" + t + "]", e[t], i, o)
            }(r, e[r], t, n);
        return i.join("&")
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && Ht.test(this.nodeName) && !qt.test(e) && (this.checked || !le.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    });
    var Ot = /%20/g,
        Pt = /#.*$/,
        Rt = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:GET|HEAD)$/,
        Wt = /^\/\//,
        It = {},
        $t = {},
        Bt = "*/".concat("*"),
        _t = C.createElement("a");

    function zt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(O) || [];
            if (x(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Xt(t, r, i, o) {
        var s = {},
            a = t === $t;

        function u(e) {
            var n;
            return s[e] = !0, k.each(t[e] || [], function(e, t) {
                t = t(r, i, o);
                return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (r.dataTypes.unshift(t), u(t), !1)
            }), n
        }
        return u(r.dataTypes[0]) || !s["*"] && u("*")
    }

    function Ut(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }
    _t.href = St.href, k.extend({
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
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ut(Ut(e, k.ajaxSettings), t) : Ut(k.ajaxSettings, e)
        },
        ajaxPrefilter: zt(It),
        ajaxTransport: zt($t),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, l, c, n, f, r, p, d, i, h = k.ajaxSetup({}, t),
                g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? k(g) : k.event,
                v = k.Deferred(),
                y = k.Callbacks("once memory"),
                x = h.statusCode || {},
                o = {},
                s = {},
                a = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = Mt.exec(c);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return p ? c : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, o[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (p) b.always(e[b.status]);
                            else
                                for (var t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        e = e || a;
                        return u && u.abort(e), w(0, e), this
                    }
                };
            if (v.promise(b), h.url = ((e || h.url || St.href) + "").replace(Wt, St.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(O) || [""], null == h.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = h.url, r.href = r.href, h.crossDomain = _t.protocol + "//" + _t.host != r.protocol + "//" + r.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = k.param(h.data, h.traditional)), Xt(It, h, t, b), p) return b;
            for (i in (d = k.event && h.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ft.test(h.type), l = h.url.replace(Pt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ot, "+")) : (e = h.url.slice(l.length), h.data && (h.processData || "string" == typeof h.data) && (l += (Dt.test(l) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (l = l.replace(Rt, "$1"), e = (Dt.test(l) ? "&" : "?") + "_=" + jt.guid++ + e), h.url = l + e), h.ifModified && (k.lastModified[l] && b.setRequestHeader("If-Modified-Since", k.lastModified[l]), k.etag[l] && b.setRequestHeader("If-None-Match", k.etag[l])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]), h.headers) b.setRequestHeader(i, h.headers[i]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || p)) return b.abort();
            if (a = "abort", y.add(h.complete), b.done(h.success), b.fail(h.error), u = Xt($t, h, t, b)) {
                if (b.readyState = 1, d && m.trigger("ajaxSend", [b, h]), p) return b;
                h.async && 0 < h.timeout && (f = T.setTimeout(function() {
                    b.abort("timeout")
                }, h.timeout));
                try {
                    p = !1, u.send(o, w)
                } catch (e) {
                    if (p) throw e;
                    w(-1, e)
                }
            } else w(-1, "No Transport");

            function w(e, t, n, r) {
                var i, o, s, a = t;
                p || (p = !0, f && T.clearTimeout(f), u = void 0, c = r || "", b.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s = s || i
                        }
                        o = o || s
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(h, b, n)), !r && -1 < k.inArray("script", h.dataTypes) && k.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, s, a, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(s = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                    !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, s, b, r), r ? (h.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (k.lastModified[l] = n), (n = b.getResponseHeader("etag")) && (k.etag[l] = n)), 204 === e || "HEAD" === h.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, i = s.data, r = !(o = s.error))) : (o = a, !e && a || (a = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || a) + "", r ? v.resolveWith(g, [i, a, b]) : v.rejectWith(g, [b, a, o]), b.statusCode(x), x = void 0, d && m.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? i : o]), y.fireWith(g, [b, a]), d && (m.trigger("ajaxComplete", [b, h]), --k.active || k.event.trigger("ajaxStop")))
            }
            return b
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return x(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k.ajaxPrefilter(function(e) {
        for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), k._evalUrl = function(e, t, n) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t, n)
            }
        })
    }, k.fn.extend({
        wrapAll: function(e) {
            return this[0] && (x(e) && (e = e.call(this[0])), e = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return x(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = x(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    };
    var Vt = {
            0: 200,
            1223: 204
        },
        Yt = k.ajaxSettings.xhr();
    y.cors = !!Yt && "withCredentials" in Yt, y.ajax = Yt = !!Yt, k.ajaxTransport(function(i) {
        var o, s;
        if (y.cors || Yt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Vt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), s = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                    4 === r.readyState && T.setTimeout(function() {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = k("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Gt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + "_" + jt.guid++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, s = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = x(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Qt, "$1" + r) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || k.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = T[r], T[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? k(T).removeProp(r) : T[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && x(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Z = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Z.childNodes.length), k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), r = !n && [], (n = S.exec(e)) ? [t.createElement(n[1])] : (n = me([e], t, r), r && r.length && k(r).remove(), k.merge([], n.childNodes)));
        var r
    }, k.fn.load = function(e, t, n) {
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (r = wt(e.slice(a)), e = e.slice(0, a)), x(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < s.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a = k.css(e, "position"),
                u = k(e),
                l = {};
            "static" === a && (e.style.position = "relative"), o = u.offset(), r = k.css(e, "top"), s = k.css(e, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (r + s).indexOf("auto") ? (i = (a = u.position()).top, a.left) : (i = parseFloat(r) || 0, parseFloat(s) || 0), x(t) && (t = t.call(e, n, k.extend({}, o))), null != t.top && (l.top = t.top - o.top + i), null != t.left && (l.left = t.left - o.left + s), "using" in t ? t.using.call(e, l) : u.css(l)
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                return e || ne
            })
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                return g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = Qe(y.pixelPosition, function(e, t) {
            if (t) return t = Ge(e, n), $e.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        k.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return g(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, a, n ? e : void 0, n)
            }
        })
    }), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Jt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    k.proxy = function(e, t) {
        var n, r;
        if ("string" == typeof t && (r = e[t], t = e, e = r), x(e)) return n = a.call(arguments, 2), (r = function() {
            return e.apply(t || this, n.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || k.guid++, r
    }, k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = N, k.isFunction = x, k.isWindow = g, k.camelCase = X, k.type = h, k.now = Date.now, k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, k.trim = function(e) {
        return null == e ? "" : (e + "").replace(Jt, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Kt = T.jQuery,
        Zt = T.$;
    return k.noConflict = function(e) {
        return T.$ === k && (T.$ = Zt), e && T.jQuery === k && (T.jQuery = Kt), k
    }, void 0 === e && (T.jQuery = T.$ = k), k
});