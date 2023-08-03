/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/inputmask/dist/inputmask.js":
/*!**************************************************!*\
  !*** ./node_modules/inputmask/dist/inputmask.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2023 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.8
 */
!function(e, t) {
    if (true) module.exports = t(); else { var n, i; }
}("undefined" != typeof self ? self : this, (function() {
    return function() {
        "use strict";
        var e = {
            8741: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                t.default = i;
            },
            3976: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = i(2839), a = {
                    _maxTestPos: 500,
                    placeholder: "_",
                    optionalmarker: [ "[", "]" ],
                    quantifiermarker: [ "{", "}" ],
                    groupmarker: [ "(", ")" ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: function() {},
                    onincomplete: function() {},
                    oncleared: function() {},
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    insertModeVisual: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: function() {},
                    onBeforeMask: null,
                    onBeforePaste: function(e, t) {
                        return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: function() {},
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [ "text", "tel", "url", "password", "search" ],
                    ignorables: [ n.keys.Backspace, n.keys.Tab, n.keys.Pause, n.keys.Escape, n.keys.PageUp, n.keys.PageDown, n.keys.End, n.keys.Home, n.keys.ArrowLeft, n.keys.ArrowUp, n.keys.ArrowRight, n.keys.ArrowDown, n.keys.Insert, n.keys.Delete, n.keys.ContextMenu, n.keys.F1, n.keys.F2, n.keys.F3, n.keys.F4, n.keys.F5, n.keys.F6, n.keys.F7, n.keys.F8, n.keys.F9, n.keys.F10, n.keys.F11, n.keys.F12, n.keys.Process, n.keys.Unidentified, n.keys.Shift, n.keys.Control, n.keys.Alt, n.keys.Tab, n.keys.AltGraph, n.keys.CapsLock ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "text",
                    importDataAttributes: !0,
                    shiftPositions: !0,
                    usePrototypeDefinitions: !0,
                    validationEventTimeOut: 3e3,
                    substitutes: {}
                };
                t.default = a;
            },
            7392: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = {
                    9: {
                        validator: "[0-9\uff10-\uff19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                    }
                };
            },
            253: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i) {
                    if (void 0 === i) return e.__data ? e.__data[t] : null;
                    e.__data = e.__data || {}, e.__data[t] = i;
                };
            },
            3776: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Event = void 0, t.off = function(e, t) {
                    var i, n;
                    f(this[0]) && e && (i = this[0].eventRegistry, n = this[0], e.split(" ").forEach((function(e) {
                        var a = l(e.split("."), 2);
                        (function(e, n) {
                            var a, r, o = [];
                            if (e.length > 0) if (void 0 === t) for (a = 0, r = i[e][n].length; a < r; a++) o.push({
                                ev: e,
                                namespace: n && n.length > 0 ? n : "global",
                                handler: i[e][n][a]
                            }); else o.push({
                                ev: e,
                                namespace: n && n.length > 0 ? n : "global",
                                handler: t
                            }); else if (n.length > 0) for (var s in i) for (var l in i[s]) if (l === n) if (void 0 === t) for (a = 0, 
                            r = i[s][l].length; a < r; a++) o.push({
                                ev: s,
                                namespace: l,
                                handler: i[s][l][a]
                            }); else o.push({
                                ev: s,
                                namespace: l,
                                handler: t
                            });
                            return o;
                        })(a[0], a[1]).forEach((function(e) {
                            var t = e.ev, a = e.handler;
                            !function(e, t, a) {
                                if (e in i == 1) if (n.removeEventListener ? n.removeEventListener(e, a, !1) : n.detachEvent && n.detachEvent("on".concat(e), a), 
                                "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(a), 1); else i[e][t].splice(i[e][t].indexOf(a), 1);
                            }(t, e.namespace, a);
                        }));
                    })));
                    return this;
                }, t.on = function(e, t) {
                    if (f(this[0])) {
                        var i = this[0].eventRegistry, n = this[0];
                        e.split(" ").forEach((function(e) {
                            var a = l(e.split("."), 2), r = a[0], o = a[1];
                            !function(e, a) {
                                n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on".concat(e), t), 
                                i[e] = i[e] || {}, i[e][a] = i[e][a] || [], i[e][a].push(t);
                            }(r, void 0 === o ? "global" : o);
                        }));
                    }
                    return this;
                }, t.trigger = function(e) {
                    var t = arguments;
                    if (f(this[0])) for (var i = this[0].eventRegistry, n = this[0], r = "string" == typeof e ? e.split(" ") : [ e.type ], s = 0; s < r.length; s++) {
                        var l = r[s].split("."), c = l[0], u = l[1] || "global";
                        if (void 0 !== document && "global" === u) {
                            var d, p = {
                                bubbles: !0,
                                cancelable: !0,
                                composed: !0,
                                detail: arguments[1]
                            };
                            if (document.createEvent) {
                                try {
                                    if ("input" === c) p.inputType = "insertText", d = new InputEvent(c, p); else d = new CustomEvent(c, p);
                                } catch (e) {
                                    (d = document.createEvent("CustomEvent")).initCustomEvent(c, p.bubbles, p.cancelable, p.detail);
                                }
                                e.type && (0, a.default)(d, e), n.dispatchEvent(d);
                            } else (d = document.createEventObject()).eventType = c, d.detail = arguments[1], 
                            e.type && (0, a.default)(d, e), n.fireEvent("on" + d.eventType, d);
                        } else if (void 0 !== i[c]) {
                            arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                            arguments[0].detail = arguments.slice(1);
                            var h = i[c];
                            ("global" === u ? Object.values(h).flat() : h[u]).forEach((function(e) {
                                return e.apply(n, t);
                            }));
                        }
                    }
                    return this;
                };
                var n, a = u(i(600)), r = u(i(9380)), o = u(i(4963)), s = u(i(8741));
                function l(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var n, a, r, o, s = [], l = !0, c = !1;
                            try {
                                if (r = (i = i.call(e)).next, 0 === t) {
                                    if (Object(i) !== i) return;
                                    l = !1;
                                } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                            } catch (e) {
                                c = !0, a = e;
                            } finally {
                                try {
                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return s;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                function f(e) {
                    return e instanceof Element;
                }
                t.Event = n, "function" == typeof r.default.CustomEvent ? t.Event = n = r.default.CustomEvent : s.default && (t.Event = n = function(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        composed: !0,
                        detail: void 0
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                }, n.prototype = r.default.Event.prototype);
            },
            600: function(e, t) {
                function i(e) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, i(e);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e() {
                    var t, n, a, r, o, s, l = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
                    "boolean" == typeof l && (f = l, l = arguments[c] || {}, c++);
                    "object" !== i(l) && "function" != typeof l && (l = {});
                    for (;c < u; c++) if (null != (t = arguments[c])) for (n in t) a = l[n], l !== (r = t[n]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                    s = a && Array.isArray(a) ? a : []) : s = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, 
                    l[n] = e(f, s, r)) : void 0 !== r && (l[n] = r));
                    return l;
                };
            },
            4963: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = s(i(600)), a = s(i(9380)), r = s(i(253)), o = i(3776);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = a.default.document;
                function c(e) {
                    return e instanceof c ? e : this instanceof c ? void (null != e && e !== a.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : l.querySelector(e), 
                    void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e);
                }
                c.prototype = {
                    on: o.on,
                    off: o.off,
                    trigger: o.trigger
                }, c.extend = n.default, c.data = r.default, c.Event = o.Event;
                var u = c;
                t.default = u;
            },
            9845: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mobile = t.iphone = t.ie = void 0;
                var n, a = (n = i(9380)) && n.__esModule ? n : {
                    default: n
                };
                var r = a.default.navigator && a.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, s = navigator.userAgentData && navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, l = /iphone/i.test(r);
                t.iphone = l, t.mobile = s, t.ie = o;
            },
            7184: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return e.replace(i, "\\$1");
                };
                var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
            },
            6030: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventHandlers = void 0;
                var n = i(8711), a = i(2839), r = i(9845), o = i(7215), s = i(7760), l = i(4713);
                function c(e, t) {
                    var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!i) {
                        if (Array.isArray(e) || (i = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return u(e, t);
                            var i = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === i && e.constructor && (i = e.constructor.name);
                            if ("Map" === i || "Set" === i) return Array.from(e);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return u(e, t);
                        }(e)) || t && e && "number" == typeof e.length) {
                            i && (e = i);
                            var n = 0, a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return n >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[n++]
                                    };
                                },
                                e: function(e) {
                                    throw e;
                                },
                                f: a
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var r, o = !0, s = !1;
                    return {
                        s: function() {
                            i = i.call(e);
                        },
                        n: function() {
                            var e = i.next();
                            return o = e.done, e;
                        },
                        e: function(e) {
                            s = !0, r = e;
                        },
                        f: function() {
                            try {
                                o || null == i.return || i.return();
                            } finally {
                                if (s) throw r;
                            }
                        }
                    };
                }
                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                var f = {
                    keyEvent: function(e, t, i, c, u) {
                        var d = this.inputmask, p = d.opts, h = d.dependencyLib, v = d.maskset, m = this, g = h(m), y = e.key, k = n.caret.call(d, m), b = p.onKeyDown.call(this, e, n.getBuffer.call(d), k, p);
                        if (void 0 !== b) return b;
                        if (y === a.keys.Backspace || y === a.keys.Delete || r.iphone && y === a.keys.BACKSPACE_SAFARI || e.ctrlKey && y === a.keys.x && !("oncut" in m)) e.preventDefault(), 
                        o.handleRemove.call(d, m, y, k), (0, s.writeBuffer)(m, n.getBuffer.call(d, !0), v.p, e, m.inputmask._valueGet() !== n.getBuffer.call(d).join("")); else if (y === a.keys.End || y === a.keys.PageDown) {
                            e.preventDefault();
                            var x = n.seekNext.call(d, n.getLastValidPosition.call(d));
                            n.caret.call(d, m, e.shiftKey ? k.begin : x, x, !0);
                        } else y === a.keys.Home && !e.shiftKey || y === a.keys.PageUp ? (e.preventDefault(), 
                        n.caret.call(d, m, 0, e.shiftKey ? k.begin : 0, !0)) : p.undoOnEscape && y === a.keys.Escape && !0 !== e.altKey ? ((0, 
                        s.checkVal)(m, !0, !1, d.undoValue.split("")), g.trigger("click")) : y !== a.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== d.userOptions.insertMode ? !0 === p.tabThrough && y === a.keys.Tab ? !0 === e.shiftKey ? (k.end = n.seekPrevious.call(d, k.end, !0), 
                        !0 === l.getTest.call(d, k.end - 1).match.static && k.end--, k.begin = n.seekPrevious.call(d, k.end, !0), 
                        k.begin >= 0 && k.end > 0 && (e.preventDefault(), n.caret.call(d, m, k.begin, k.end))) : (k.begin = n.seekNext.call(d, k.begin, !0), 
                        k.end = n.seekNext.call(d, k.begin, !0), k.end < v.maskLength && k.end--, k.begin <= v.maskLength && (e.preventDefault(), 
                        n.caret.call(d, m, k.begin, k.end))) : e.shiftKey || p.insertModeVisual && !1 === p.insertMode && (y === a.keys.ArrowRight ? setTimeout((function() {
                            var e = n.caret.call(d, m);
                            n.caret.call(d, m, e.begin);
                        }), 0) : y === a.keys.ArrowLeft && setTimeout((function() {
                            var e = n.translatePosition.call(d, m.inputmask.caretPos.begin);
                            n.translatePosition.call(d, m.inputmask.caretPos.end);
                            d.isRTL ? n.caret.call(d, m, e + (e === v.maskLength ? 0 : 1)) : n.caret.call(d, m, e - (0 === e ? 0 : 1));
                        }), 0)) : o.isSelection.call(d, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode, 
                        n.caret.call(d, m, k.begin, k.begin));
                        return d.isComposing = y == a.keys.Process || y == a.keys.Unidentified, d.ignorable = p.ignorables.includes(y), 
                        f.keypressEvent.call(this, e, t, i, c, u);
                    },
                    keypressEvent: function(e, t, i, r, l) {
                        var c = this.inputmask || this, u = c.opts, f = c.dependencyLib, d = c.maskset, p = c.el, h = f(p), v = e.key;
                        if (!0 === t || e.ctrlKey && e.altKey || !(e.ctrlKey || e.metaKey || c.ignorable)) {
                            if (v) {
                                var m, g = t ? {
                                    begin: l,
                                    end: l
                                } : n.caret.call(c, p);
                                v = u.substitutes[v] || v, d.writeOutBuffer = !0;
                                var y = o.isValid.call(c, g, v, r, void 0, void 0, void 0, t);
                                if (!1 !== y && (n.resetMaskSet.call(c, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(c, y.pos.begin ? y.pos.begin : y.pos), 
                                d.p = m), m = u.numericInput && void 0 === y.caret ? n.seekPrevious.call(c, m) : m, 
                                !1 !== i && (setTimeout((function() {
                                    u.onKeyValidation.call(p, v, y);
                                }), 0), d.writeOutBuffer && !1 !== y)) {
                                    var k = n.getBuffer.call(c);
                                    (0, s.writeBuffer)(p, k, m, e, !0 !== t);
                                }
                                if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                            }
                        } else v === a.keys.Enter && c.undoValue !== c._valueGet(!0) && (c.undoValue = c._valueGet(!0), 
                        setTimeout((function() {
                            h.trigger("change");
                        }), 0));
                    },
                    pasteEvent: function(e) {
                        var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                        i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
                        var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                        if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), 
                        u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                        window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u; else {
                            if (!e.clipboardData || !e.clipboardData.getData) return !0;
                            r = l + e.clipboardData.getData("text/plain") + u;
                        }
                        var f = r;
                        if (i.isRTL) {
                            f = f.split("");
                            var d, p = c(n.getBufferTemplate.call(i));
                            try {
                                for (p.s(); !(d = p.n()).done; ) {
                                    var h = d.value;
                                    f[0] === h && f.shift();
                                }
                            } catch (e) {
                                p.e(e);
                            } finally {
                                p.f();
                            }
                            f = f.join("");
                        }
                        if ("function" == typeof a.onBeforePaste) {
                            if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
                            f || (f = r);
                        }
                        (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                    },
                    inputFallBackEvent: function(e) {
                        var t = this.inputmask, i = t.opts, o = t.dependencyLib;
                        var c, u = this, d = u.inputmask._valueGet(!0), p = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), h = n.caret.call(t, u, void 0, void 0, !0);
                        if (p !== d) {
                            if (c = function(e, a, r) {
                                for (var o, s, c, u = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = u.length >= d.length ? u.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], y = "~"; u.length < h; ) u.push(y);
                                for (;d.length < h; ) d.push(y);
                                for (;f.length < v; ) f.unshift(y);
                                for (;p.length < v; ) p.unshift(y);
                                var k = u.concat(f), b = d.concat(p);
                                for (s = 0, o = k.length; s < o; s++) switch (c = l.getPlaceholder.call(t, n.translatePosition.call(t, s)), 
                                m) {
                                  case "insertText":
                                    b[s - 1] === k[s] && r.begin == k.length - 1 && g.push(k[s]), s = o;
                                    break;

                                  case "insertReplacementText":
                                  case "deleteContentBackward":
                                    k[s] === y ? r.end++ : s = o;
                                    break;

                                  default:
                                    k[s] !== b[s] && (k[s + 1] !== y && k[s + 1] !== c && void 0 !== k[s + 1] || (b[s] !== c || b[s + 1] !== y) && b[s] !== y ? b[s + 1] === y && b[s] === k[s + 1] ? (m = "insertText", 
                                    g.push(k[s]), r.begin--, r.end--) : k[s] !== c && k[s] !== y && (k[s + 1] === y || b[s] !== k[s] && b[s + 1] === k[s + 1]) ? (m = "insertReplacementText", 
                                    g.push(k[s]), r.begin--) : k[s] === y ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, s), !0) || b[s] === i.radixPoint) && r.end++) : s = o : (m = "insertText", 
                                    g.push(k[s]), r.begin--, r.end--));
                                }
                                return {
                                    action: m,
                                    data: g,
                                    caret: r
                                };
                            }(d, p, h), (u.inputmask.shadowRoot || u.ownerDocument).activeElement !== u && u.focus(), 
                            (0, s.writeBuffer)(u, n.getBuffer.call(t)), n.caret.call(t, u, h.begin, h.end, !0), 
                            !r.mobile && t.skipNextInsert && "insertText" === e.inputType && "insertText" === c.action && t.isComposing) return !1;
                            switch ("insertCompositionText" === e.inputType && "insertText" === c.action && t.isComposing ? t.skipNextInsert = !0 : t.skipNextInsert = !1, 
                            c.action) {
                              case "insertText":
                              case "insertReplacementText":
                                c.data.forEach((function(e, i) {
                                    var n = new o.Event("keypress");
                                    n.key = e, t.ignorable = !1, f.keypressEvent.call(u, n);
                                })), setTimeout((function() {
                                    t.$el.trigger("keyup");
                                }), 0);
                                break;

                              case "deleteContentBackward":
                                var v = new o.Event("keydown");
                                v.key = a.keys.Backspace, f.keyEvent.call(u, v);
                                break;

                              default:
                                (0, s.applyInputValue)(u, d), n.caret.call(t, u, h.begin, h.end, !0);
                            }
                            e.preventDefault();
                        }
                    },
                    setValueEvent: function(e) {
                        var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                        void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                    },
                    focusEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = null == t ? void 0 : t._valueGet();
                        i.showMaskOnFocus && a !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(this, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                        !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || o.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || f.clickEvent.apply(this, [ e, !0 ]), 
                        t.undoValue = null == t ? void 0 : t._valueGet(!0);
                    },
                    invalidEvent: function(e) {
                        this.inputmask.validationEvent = !0;
                    },
                    mouseleaveEvent: function() {
                        var e = this.inputmask, t = e.opts, i = this;
                        e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, 
                        s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                    },
                    clickEvent: function(e, t) {
                        var i = this.inputmask;
                        i.clicked++;
                        var a = this;
                        if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                            var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                            void 0 !== r && n.caret.call(i, a, r);
                        }
                    },
                    cutEvent: function(e) {
                        var t = this.inputmask, i = t.maskset, r = this, l = n.caret.call(t, r), c = t.isRTL ? n.getBuffer.call(t).slice(l.end, l.begin) : n.getBuffer.call(t).slice(l.begin, l.end), u = t.isRTL ? c.reverse().join("") : c.join("");
                        window.navigator.clipboard ? window.navigator.clipboard.writeText(u) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", u), 
                        o.handleRemove.call(t, r, a.keys.Delete, l), (0, s.writeBuffer)(r, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                    },
                    blurEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                        t.clicked = 0;
                        var r = a(this), l = this;
                        if (l.inputmask) {
                            (0, s.HandleNativePlaceholder)(l, t.originalPlaceholder);
                            var c = l.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                            "" !== c && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && c === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), 
                            !1 === o.isComplete.call(t, u) && (setTimeout((function() {
                                r.trigger("incomplete");
                            }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                            (0, s.writeBuffer)(l, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                            r.trigger("change"));
                        }
                    },
                    mouseenterEvent: function() {
                        var e = this.inputmask, t = e.opts.showMaskOnHover, i = this;
                        if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                            var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                            t && (0, s.HandleNativePlaceholder)(i, a);
                        }
                    },
                    submitEvent: function() {
                        var e = this.inputmask, t = e.opts;
                        e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                        t.clearIncomplete && !1 === o.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                        t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                            (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
                        }), 0));
                    },
                    resetEvent: function() {
                        var e = this.inputmask;
                        e.refreshValue = !0, setTimeout((function() {
                            (0, s.applyInputValue)(e.el, e._valueGet(!0));
                        }), 0);
                    }
                };
                t.EventHandlers = f;
            },
            9716: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventRuler = void 0;
                var n, a = (n = i(2394)) && n.__esModule ? n : {
                    default: n
                }, r = i(2839), o = i(8711), s = i(7760);
                var l = {
                    on: function(e, t, i) {
                        var n = e.inputmask.dependencyLib, l = function(t) {
                            t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                            var l, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                            if (void 0 === u && "FORM" !== this.nodeName) {
                                var d = n.data(c, "_inputmask_opts");
                                n(c).off(), d && new a.default(d).mask(c);
                            } else {
                                if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === r.keys.c || !1 === f.tabThrough && t.key === r.keys.Tab))) {
                                    switch (t.type) {
                                      case "input":
                                        if (!0 === u.skipInputEvent) return u.skipInputEvent = !1, t.preventDefault();
                                        break;

                                      case "click":
                                      case "focus":
                                        return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, s.HandleNativePlaceholder)(e, (u.isRTL ? o.getBufferTemplate.call(u).slice().reverse() : o.getBufferTemplate.call(u)).join("")), 
                                        setTimeout((function() {
                                            e.focus();
                                        }), f.validationEventTimeOut), !1) : (l = arguments, void setTimeout((function() {
                                            e.inputmask && i.apply(c, l);
                                        }), 0));
                                    }
                                    var p = i.apply(c, arguments);
                                    return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                }
                                t.preventDefault();
                            }
                        };
                        [ "submit", "reset" ].includes(t) ? (l = l.bind(e), null !== e.form && n(e.form).on(t, l)) : n(e).on(t, l), 
                        e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(l);
                    },
                    off: function(e, t) {
                        if (e.inputmask && e.inputmask.events) {
                            var i = e.inputmask.dependencyLib, n = e.inputmask.events;
                            for (var a in t && ((n = [])[t] = e.inputmask.events[t]), n) {
                                for (var r = n[a]; r.length > 0; ) {
                                    var o = r.pop();
                                    [ "submit", "reset" ].includes(a) ? null !== e.form && i(e.form).off(a, o) : i(e).off(a, o);
                                }
                                delete e.inputmask.events[a];
                            }
                        }
                    }
                };
                t.EventRuler = l;
            },
            219: function(e, t, i) {
                var n = d(i(2394)), a = i(2839), r = d(i(7184)), o = i(8711), s = i(4713);
                function l(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var n, a, r, o, s = [], l = !0, c = !1;
                            try {
                                if (r = (i = i.call(e)).next, 0 === t) {
                                    if (Object(i) !== i) return;
                                    l = !1;
                                } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                            } catch (e) {
                                c = !0, a = e;
                            } finally {
                                try {
                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return s;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                function u(e) {
                    return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, u(e);
                }
                function f(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                        Object.defineProperty(e, (a = n.key, r = void 0, r = function(e, t) {
                            if ("object" !== u(e) || null === e) return e;
                            var i = e[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var n = i.call(e, t || "default");
                                if ("object" !== u(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(a, "string"), "symbol" === u(r) ? r : String(r)), n);
                    }
                    var a, r;
                }
                function d(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var p = n.default.dependencyLib, h = function() {
                    function e(t, i, n) {
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), this.mask = t, this.format = i, this.opts = n, this._date = new Date(1, 0, 1), 
                        this.initDateObject(t, this.opts);
                    }
                    var t, i, n;
                    return t = e, (i = [ {
                        key: "date",
                        get: function() {
                            return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                            this._date;
                        }
                    }, {
                        key: "initDateObject",
                        value: function(e, t) {
                            var i;
                            for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                var n = new RegExp("\\d+$").exec(i[0]), a = n ? i[0][0] + "x" : i[0], r = void 0;
                                if (void 0 !== e) {
                                    if (n) {
                                        var o = P(t).lastIndex, s = E(i.index, t);
                                        P(t).lastIndex = o, r = e.slice(0, e.indexOf(s.nextMatch[0]));
                                    } else r = e.slice(0, g[a] && g[a][4] || a.length);
                                    e = e.slice(r.length);
                                }
                                Object.prototype.hasOwnProperty.call(g, a) && this.setValue(this, r, a, g[a][2], g[a][1]);
                            }
                        }
                    }, {
                        key: "setValue",
                        value: function(e, t, i, n, a) {
                            if (void 0 !== t && (e[n] = "ampm" === n ? t : t.replace(/[^0-9]/g, "0"), e["raw" + n] = t.replace(/\s/g, "_")), 
                            void 0 !== a) {
                                var r = e[n];
                                ("day" === n && 29 === parseInt(r) || "month" === n && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                "day" === n && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === n && (m = !0), 
                                "year" === n && (m = !0, r.length < 4 && (r = M(r, 4, !0))), "" === r || isNaN(r) || a.call(e._date, r), 
                                "ampm" === n && a.call(e._date, r);
                            }
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this._date = new Date(1, 0, 1);
                        }
                    }, {
                        key: "reInit",
                        value: function() {
                            this._date = void 0, this.date;
                        }
                    } ]) && f(t.prototype, i), n && f(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e;
                }(), v = (new Date).getFullYear(), m = !1, g = {
                    d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                    dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                        return M(Date.prototype.getDate.call(this), 2);
                    } ],
                    ddd: [ "" ],
                    dddd: [ "" ],
                    m: [ "[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return Date.prototype.getMonth.call(this) + 1;
                    } ],
                    mm: [ "0[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return M(Date.prototype.getMonth.call(this) + 1, 2);
                    } ],
                    mmm: [ "" ],
                    mmmm: [ "" ],
                    yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                        return M(Date.prototype.getFullYear.call(this), 2);
                    } ],
                    yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                        return M(Date.prototype.getFullYear.call(this), 4);
                    } ],
                    h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                        return M(Date.prototype.getHours.call(this), 2);
                    } ],
                    hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return Date.prototype.getHours;
                    } ],
                    H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                        return M(Date.prototype.getHours.call(this), 2);
                    } ],
                    Hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return function() {
                            return M(Date.prototype.getHours.call(this), e);
                        };
                    } ],
                    M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                    MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                        return M(Date.prototype.getMinutes.call(this), 2);
                    } ],
                    s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                    ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                        return M(Date.prototype.getSeconds.call(this), 2);
                    } ],
                    l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return M(Date.prototype.getMilliseconds.call(this), 3);
                    }, 3 ],
                    L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return M(Date.prototype.getMilliseconds.call(this), 2);
                    }, 2 ],
                    t: [ "[ap]", k, "ampm", b, 1 ],
                    tt: [ "[ap]m", k, "ampm", b, 2 ],
                    T: [ "[AP]", k, "ampm", b, 1 ],
                    TT: [ "[AP]M", k, "ampm", b, 2 ],
                    Z: [ ".*", void 0, "Z", function() {
                        var e = this.toString().match(/\((.+)\)/)[1];
                        e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                            return l(e, 1)[0];
                        })).join(""));
                        return e;
                    } ],
                    o: [ "" ],
                    S: [ "" ]
                }, y = {
                    isoDate: "yyyy-mm-dd",
                    isoTime: "HH:MM:ss",
                    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                };
                function k(e) {
                    var t = this.getHours();
                    e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                }
                function b() {
                    var e = this.getHours();
                    return (e = e || 12) >= 12 ? "PM" : "AM";
                }
                function x(e) {
                    var t = new RegExp("\\d+$").exec(e[0]);
                    if (t && void 0 !== t[0]) {
                        var i = g[e[0][0] + "x"].slice("");
                        return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                    }
                    if (g[e[0]]) return g[e[0]];
                }
                function P(e) {
                    if (!e.tokenizer) {
                        var t = [], i = [];
                        for (var n in g) if (/\.*x$/.test(n)) {
                            var a = n[0] + "\\d+";
                            -1 === i.indexOf(a) && i.push(a);
                        } else -1 === t.indexOf(n[0]) && t.push(n[0]);
                        e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                        e.tokenizer = new RegExp(e.tokenizer, "g");
                    }
                    return e.tokenizer;
                }
                function w(e, t, i) {
                    if (!m) return !0;
                    if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                    if ("29" == e.day) {
                        var n = E(t.pos, i);
                        if ("yyyy" === n.targetMatch[0] && t.pos - n.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                        t;
                    } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                    e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                        pos: t.pos,
                        c: "0"
                    }, {
                        pos: t.pos + 1,
                        c: t.c
                    } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                    return !1;
                }
                function S(e, t, i, n) {
                    var a, o, s = "";
                    for (P(i).lastIndex = 0; a = P(i).exec(e); ) {
                        if (void 0 === t) if (o = x(a)) s += "(" + o[0] + ")"; else switch (a[0]) {
                          case "[":
                            s += "(";
                            break;

                          case "]":
                            s += ")?";
                            break;

                          default:
                            s += (0, r.default)(a[0]);
                        } else if (o = x(a)) if (!0 !== n && o[3]) s += o[3].call(t.date); else o[2] ? s += t["raw" + o[2]] : s += a[0]; else s += a[0];
                    }
                    return s;
                }
                function M(e, t, i) {
                    for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                    return e;
                }
                function _(e, t, i) {
                    return "string" == typeof e ? new h(e, t, i) : e && "object" === u(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                }
                function O(e, t) {
                    return S(t.inputFormat, {
                        date: e
                    }, t);
                }
                function E(e, t) {
                    var i, n, a = 0, r = 0;
                    for (P(t).lastIndex = 0; n = P(t).exec(t.inputFormat); ) {
                        var o = new RegExp("\\d+$").exec(n[0]);
                        if ((a += r = o ? parseInt(o[0]) : n[0].length) >= e + 1) {
                            i = n, n = P(t).exec(t.inputFormat);
                            break;
                        }
                    }
                    return {
                        targetMatchIndex: a - r,
                        nextMatch: n,
                        targetMatch: i
                    };
                }
                n.default.extendAliases({
                    datetime: {
                        mask: function(e) {
                            return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = y[e.inputFormat] || e.inputFormat, 
                            e.displayFormat = y[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = y[e.outputFormat] || e.outputFormat || e.inputFormat, 
                            e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                            e.regex = S(e.inputFormat, void 0, e), e.min = _(e.min, e.inputFormat, e), e.max = _(e.max, e.inputFormat, e), 
                            null;
                        },
                        placeholder: "",
                        inputFormat: "isoDateTime",
                        displayFormat: null,
                        outputFormat: null,
                        min: null,
                        max: null,
                        skipOptionalPartCharacter: "",
                        i18n: {
                            dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                            monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                            ordinalSuffix: [ "st", "nd", "rd", "th" ]
                        },
                        preValidation: function(e, t, i, n, a, r, o, s) {
                            if (s) return !0;
                            if (isNaN(i) && e[t] !== i) {
                                var l = E(t, a);
                                if (l.nextMatch && l.nextMatch[0] === i && l.targetMatch[0].length > 1) {
                                    var c = g[l.targetMatch[0]][0];
                                    if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                    {
                                        fuzzy: !0,
                                        buffer: e,
                                        refreshFromBuffer: {
                                            start: t - 1,
                                            end: t + 1
                                        },
                                        pos: t + 1
                                    };
                                }
                            }
                            return !0;
                        },
                        postValidation: function(e, t, i, n, a, r, o, l) {
                            var c, u;
                            if (o) return !0;
                            if (!1 === n && (((c = E(t + 1, a)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]] || (c = E(t + 2, a)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]]) && (u = g[c.targetMatch[0]][0]), 
                            void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(i + "0") ? (e[t] = i, 
                            e[t + 1] = "0", n = {
                                pos: t + 2,
                                caret: t
                            }) : new RegExp(u).test("0" + i) && (e[t] = "0", e[t + 1] = i, n = {
                                pos: t + 2
                            })), !1 === n)) return n;
                            if (n.fuzzy && (e = n.buffer, t = n.pos), (c = E(t, a)).targetMatch && c.targetMatch[0] && void 0 !== g[c.targetMatch[0]]) {
                                var f = g[c.targetMatch[0]];
                                u = f[0];
                                var d = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                                if (!1 === new RegExp(u).test(d.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"), 
                                "year" == f[2]) for (var p = s.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], 
                                delete r.validPositions[h];
                            }
                            var m = n, y = _(e.join(""), a.inputFormat, a);
                            return m && !isNaN(y.date.getTime()) && (a.prefillYear && (m = function(e, t, i) {
                                if (e.year !== e.rawyear) {
                                    var n = v.toString(), a = e.rawyear.replace(/[^0-9]/g, ""), r = n.slice(0, a.length), o = n.slice(a.length);
                                    if (2 === a.length && a === r) {
                                        var s = new Date(v, e.month - 1, e.day);
                                        e.day == s.getDate() && (!i.max || i.max.date.getTime() >= s.getTime()) && (e.date.setFullYear(v), 
                                        e.year = n, t.insert = [ {
                                            pos: t.pos + 1,
                                            c: o[0]
                                        }, {
                                            pos: t.pos + 2,
                                            c: o[1]
                                        } ]);
                                    }
                                }
                                return t;
                            }(y, m, a)), m = function(e, t, i, n, a) {
                                if (!t) return t;
                                if (t && i.min && !isNaN(i.min.date.getTime())) {
                                    var r;
                                    for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat); ) {
                                        var o;
                                        if ((o = x(r)) && o[3]) {
                                            for (var s = o[1], l = e[o[2]], c = i.min[o[2]], u = i.max ? i.max[o[2]] : c, f = [], d = !1, p = 0; p < c.length; p++) void 0 !== n.validPositions[p + r.index] || d ? (f[p] = l[p], 
                                            d = d || l[p] > c[p]) : (f[p] = c[p], "year" === o[2] && l.length - 1 == p && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                            "ampm" === o[2] && c != u && i.min.date.getTime() > e.date.getTime() && (f[p] = u[p]));
                                            s.call(e._date, f.join(""));
                                        }
                                    }
                                    t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                }
                                return t && i.max && (isNaN(i.max.date.getTime()) || (t = i.max.date.getTime() >= e.date.getTime())), 
                                t;
                            }(y, m = w.call(this, y, m, a), a, r)), void 0 !== t && m && n.pos !== t ? {
                                buffer: S(a.inputFormat, y, a).split(""),
                                refreshFromBuffer: {
                                    start: t,
                                    end: n.pos
                                },
                                pos: n.caret || n.pos
                            } : m;
                        },
                        onKeyDown: function(e, t, i, n) {
                            e.ctrlKey && e.key === a.keys.ArrowRight && (this.inputmask._valueSet(O(new Date, n)), 
                            p(this).trigger("setvalue"));
                        },
                        onUnMask: function(e, t, i) {
                            return t ? S(i.outputFormat, _(e, i.inputFormat, i), i, !0) : t;
                        },
                        casing: function(e, t, i, n) {
                            return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                        },
                        onBeforeMask: function(e, t) {
                            return "[object Date]" === Object.prototype.toString.call(e) && (e = O(e, t)), e;
                        },
                        insertMode: !1,
                        insertModeVisual: !1,
                        shiftPositions: !1,
                        keepStatic: !1,
                        inputmode: "numeric",
                        prefillYear: !0
                    }
                });
            },
            3851: function(e, t, i) {
                var n, a = (n = i(2394)) && n.__esModule ? n : {
                    default: n
                }, r = i(8711), o = i(4713);
                a.default.extendDefinitions({
                    A: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "&": {
                        validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "#": {
                        validator: "[0-9A-Fa-f]",
                        casing: "upper"
                    }
                });
                var s = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                function l(e, t, i, n, a) {
                    return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                    s.test(e);
                }
                a.default.extendAliases({
                    cssunit: {
                        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                    },
                    url: {
                        regex: "(https?|ftp)://.*",
                        autoUnmask: !1,
                        keepStatic: !1,
                        tabThrough: !0
                    },
                    ip: {
                        mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                        definitions: {
                            i: {
                                validator: l
                            },
                            j: {
                                validator: l
                            },
                            k: {
                                validator: l
                            },
                            l: {
                                validator: l
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "decimal",
                        substitutes: {
                            ",": "."
                        }
                    },
                    email: {
                        mask: function(e) {
                            var t = e.separator, i = e.quantifier, n = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a = n;
                            if (t) for (var r = 0; r < i; r++) a += "[".concat(t).concat(n, "]");
                            return a;
                        },
                        greedy: !1,
                        casing: "lower",
                        separator: null,
                        quantifier: 5,
                        skipOptionalPartCharacter: "",
                        onBeforePaste: function(e, t) {
                            return (e = e.toLowerCase()).replace("mailto:", "");
                        },
                        definitions: {
                            "*": {
                                validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                            },
                            "-": {
                                validator: "[0-9A-Za-z-]"
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "email"
                    },
                    mac: {
                        mask: "##:##:##:##:##:##"
                    },
                    vin: {
                        mask: "V{13}9{4}",
                        definitions: {
                            V: {
                                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                casing: "upper"
                            }
                        },
                        clearIncomplete: !0,
                        autoUnmask: !0
                    },
                    ssn: {
                        mask: "999-99-9999",
                        postValidation: function(e, t, i, n, a, s, l) {
                            var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                        }
                    }
                });
            },
            207: function(e, t, i) {
                var n = s(i(2394)), a = s(i(7184)), r = i(8711), o = i(2839);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = n.default.dependencyLib;
                function c(e, t) {
                    for (var i = "", a = 0; a < e.length; a++) n.default.prototype.definitions[e.charAt(a)] || t.definitions[e.charAt(a)] || t.optionalmarker[0] === e.charAt(a) || t.optionalmarker[1] === e.charAt(a) || t.quantifiermarker[0] === e.charAt(a) || t.quantifiermarker[1] === e.charAt(a) || t.groupmarker[0] === e.charAt(a) || t.groupmarker[1] === e.charAt(a) || t.alternatormarker === e.charAt(a) ? i += "\\" + e.charAt(a) : i += e.charAt(a);
                    return i;
                }
                function u(e, t, i, n) {
                    if (e.length > 0 && t > 0 && (!i.digitsOptional || n)) {
                        var a = e.indexOf(i.radixPoint), r = !1;
                        i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === a && (e.push(i.radixPoint), 
                        a = e.length - 1);
                        for (var o = 1; o <= t; o++) isFinite(e[a + o]) || (e[a + o] = "0");
                    }
                    return r && e.push(i.negationSymbol.back), e;
                }
                function f(e, t) {
                    var i = 0;
                    for (var n in "+" === e && (i = r.seekNext.call(this, t.validPositions.length - 1)), 
                    t.tests) if ((n = parseInt(n)) >= i) for (var a = 0, o = t.tests[n].length; a < o; a++) if ((void 0 === t.validPositions[n] || "-" === e) && t.tests[n][a].match.def === e) return n + (void 0 !== t.validPositions[n] && "-" !== e ? 1 : 0);
                    return i;
                }
                function d(e, t) {
                    for (var i = -1, n = 0, a = t.validPositions.length; n < a; n++) {
                        var r = t.validPositions[n];
                        if (r && r.match.def === e) {
                            i = n;
                            break;
                        }
                    }
                    return i;
                }
                function p(e, t, i, n, a) {
                    var r = t.buffer ? t.buffer.indexOf(a.radixPoint) : -1, o = (-1 !== r || n && a.jitMasking) && new RegExp(a.definitions[9].validator).test(e);
                    return a._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                        insert: {
                            pos: r === i ? r + 1 : r,
                            c: a.radixPoint
                        },
                        pos: i
                    } : o;
                }
                n.default.extendAliases({
                    numeric: {
                        mask: function(e) {
                            e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                            " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                            "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                            var t = "0", i = e.radixPoint;
                            !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                            e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                            "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                            e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                            e.numericInput = !0);
                            var n, r = "[+]";
                            if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                            e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                            e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                            r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                var o = e.digits.toString().split(",");
                                isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (n = r + i + t + "{0," + e.digits + "}", 
                                e.keepStatic = !0) : r += i + t + "{" + e.digits + "}");
                            } else e.inputmode = "numeric";
                            return r += c(e.suffix, e), r += "[-]", n && (r = [ n + c(e.suffix, e) + "[-]", r ]), 
                            e.greedy = !1, function(e) {
                                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                a.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, a.default)(e.groupSeparator), "g"), ""), 
                                "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                            }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                            r;
                        },
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "999){+|1}";
                        },
                        digits: "*",
                        digitsOptional: !0,
                        enforceDigitsOnBlur: !1,
                        radixPoint: ".",
                        positionCaretOnClick: "radixFocus",
                        _radixDance: !0,
                        groupSeparator: "",
                        allowMinus: !0,
                        negationSymbol: {
                            front: "-",
                            back: ""
                        },
                        prefix: "",
                        suffix: "",
                        min: null,
                        max: null,
                        SetMaxOnOverflow: !1,
                        step: 1,
                        inputType: "text",
                        unmaskAsNumber: !1,
                        roundingFN: Math.round,
                        inputmode: "decimal",
                        shortcuts: {
                            k: "1000",
                            m: "1000000"
                        },
                        placeholder: "0",
                        greedy: !1,
                        rightAlign: !0,
                        insertMode: !0,
                        autoUnmask: !1,
                        skipOptionalPartCharacter: "",
                        usePrototypeDefinitions: !1,
                        stripLeadingZeroes: !0,
                        substituteRadixPoint: !0,
                        definitions: {
                            0: {
                                validator: p
                            },
                            1: {
                                validator: p,
                                definitionSymbol: "9"
                            },
                            9: {
                                validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                                definitionSymbol: "*"
                            },
                            "+": {
                                validator: function(e, t, i, n, a) {
                                    return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                                }
                            },
                            "-": {
                                validator: function(e, t, i, n, a) {
                                    return a.allowMinus && e === a.negationSymbol.back;
                                }
                            }
                        },
                        preValidation: function(e, t, i, n, a, r, o, s) {
                            if (!1 !== a.__financeInput && i === a.radixPoint) return !1;
                            var l = e.indexOf(a.radixPoint), c = t;
                            if (t = function(e, t, i, n, a) {
                                return a._radixDance && a.numericInput && t !== a.negationSymbol.back && e <= i && (i > 0 || t == a.radixPoint) && (void 0 === n.validPositions[e - 1] || n.validPositions[e - 1].input !== a.negationSymbol.back) && (e -= 1), 
                                e;
                            }(t, i, l, r, a), "-" === i || i === a.negationSymbol.front) {
                                if (!0 !== a.allowMinus) return !1;
                                var u = !1, p = d("+", r), h = d("-", r);
                                return -1 !== p && (u = [ p, h ]), !1 !== u ? {
                                    remove: u,
                                    caret: c - a.negationSymbol.back.length
                                } : {
                                    insert: [ {
                                        pos: f.call(this, "+", r),
                                        c: a.negationSymbol.front,
                                        fromIsValid: !0
                                    }, {
                                        pos: f.call(this, "-", r),
                                        c: a.negationSymbol.back,
                                        fromIsValid: void 0
                                    } ],
                                    caret: c + a.negationSymbol.back.length
                                };
                            }
                            if (i === a.groupSeparator) return {
                                caret: c
                            };
                            if (s) return !0;
                            if (-1 !== l && !0 === a._radixDance && !1 === n && i === a.radixPoint && void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && l !== t) return {
                                caret: a._radixDance && t === l - 1 ? l + 1 : l
                            };
                            if (!1 === a.__financeInput) if (n) {
                                if (a.digitsOptional) return {
                                    rewritePosition: o.end
                                };
                                if (!a.digitsOptional) {
                                    if (o.begin > l && o.end <= l) return i === a.radixPoint ? {
                                        insert: {
                                            pos: l + 1,
                                            c: "0",
                                            fromIsValid: !0
                                        },
                                        rewritePosition: l
                                    } : {
                                        rewritePosition: l + 1
                                    };
                                    if (o.begin < l) return {
                                        rewritePosition: o.begin - 1
                                    };
                                }
                            } else if (!a.showMaskOnHover && !a.showMaskOnFocus && !a.digitsOptional && a.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                rewritePosition: l
                            };
                            return {
                                rewritePosition: t
                            };
                        },
                        postValidation: function(e, t, i, n, a, r, o) {
                            if (!1 === n) return n;
                            if (o) return !0;
                            if (null !== a.min || null !== a.max) {
                                var s = a.onUnMask(e.slice().reverse().join(""), void 0, l.extend({}, a, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== a.min && s < a.min && (s.toString().length > a.min.toString().length || s < 0)) return !1;
                                if (null !== a.max && s > a.max) return !!a.SetMaxOnOverflow && {
                                    refreshFromBuffer: !0,
                                    buffer: u(a.max.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                };
                            }
                            return n;
                        },
                        onUnMask: function(e, t, i) {
                            if ("" === t && !0 === i.nullable) return t;
                            var n = e.replace(i.prefix, "");
                            return n = (n = n.replace(i.suffix, "")).replace(new RegExp((0, a.default)(i.groupSeparator), "g"), ""), 
                            "" !== i.placeholder.charAt(0) && (n = n.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                            i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== n.indexOf(i.radixPoint) && (n = n.replace(a.default.call(this, i.radixPoint), ".")), 
                            n = (n = n.replace(new RegExp("^" + (0, a.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            a.default)(i.negationSymbol.back) + "$"), ""), Number(n)) : n;
                        },
                        isComplete: function(e, t) {
                            var i = (t.numericInput ? e.slice().reverse() : e).join("");
                            return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, a.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            a.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                            a.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, 
                            a.default)(t.radixPoint), ".")), isFinite(i);
                        },
                        onBeforeMask: function(e, t) {
                            var i = t.radixPoint || ",";
                            isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                            var n = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, r = e.split(i), o = r[0].replace(/[^\-0-9]/g, ""), s = r.length > 1 ? r[1].replace(/[^0-9]/g, "") : "", l = r.length > 1;
                            e = o + ("" !== s ? i + s : s);
                            var c = 0;
                            if ("" !== i && (c = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, 
                            "" !== s || !t.digitsOptional)) {
                                var f = Math.pow(10, c || 1);
                                e = e.replace((0, a.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(c)), 
                                e = e.toString().replace(".", i);
                            }
                            if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                            null !== t.min || null !== t.max) {
                                var d = e.toString().replace(i, ".");
                                null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                            }
                            return n && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), c, t, l).join("");
                        },
                        onBeforeWrite: function(e, t, i, n) {
                            function r(e, t) {
                                if (!1 !== n.__financeInput || t) {
                                    var i = e.indexOf(n.radixPoint);
                                    -1 !== i && e.splice(i, 1);
                                }
                                if ("" !== n.groupSeparator) for (;-1 !== (i = e.indexOf(n.groupSeparator)); ) e.splice(i, 1);
                                return e;
                            }
                            var o, s;
                            if (n.stripLeadingZeroes && (s = function(e, t) {
                                var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, a.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                a.default)(t.prefix) + ")(.*)(" + (0, a.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                a.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), n = i ? i[2] : "", r = !1;
                                return n && (n = n.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(n)), 
                                !(!r || !(r[0].length > 1 || r[0].length > 0 && r[0].length < n.length)) && r;
                            }(t, n))) for (var c = t.join("").lastIndexOf(s[0].split("").reverse().join("")) - (s[0] == s.input ? 0 : 1), f = s[0] == s.input ? 1 : 0, d = s[0].length - f; d > 0; d--) delete this.maskset.validPositions[c + d], 
                            delete t[c + d];
                            if (e) switch (e.type) {
                              case "blur":
                              case "checkval":
                                if (null !== n.min) {
                                    var p = n.onUnMask(t.slice().reverse().join(""), void 0, l.extend({}, n, {
                                        unmaskAsNumber: !0
                                    }));
                                    if (null !== n.min && p < n.min) return {
                                        refreshFromBuffer: !0,
                                        buffer: u(n.min.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                    };
                                }
                                if (t[t.length - 1] === n.negationSymbol.front) {
                                    var h = new RegExp("(^" + ("" != n.negationSymbol.front ? (0, a.default)(n.negationSymbol.front) + "?" : "") + (0, 
                                    a.default)(n.prefix) + ")(.*)(" + (0, a.default)(n.suffix) + ("" != n.negationSymbol.back ? (0, 
                                    a.default)(n.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                                    0 == (h ? h[2] : "") && (o = {
                                        refreshFromBuffer: !0,
                                        buffer: [ 0 ]
                                    });
                                } else if ("" !== n.radixPoint) {
                                    t.indexOf(n.radixPoint) === n.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + n.suffix.length) : (t.splice(0, 1 + n.suffix.length), 
                                    o = {
                                        refreshFromBuffer: !0,
                                        buffer: r(t)
                                    }));
                                }
                                if (n.enforceDigitsOnBlur) {
                                    var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                    o.refreshFromBuffer = !0, o.buffer = u(v, n.digits, n, !0).reverse();
                                }
                            }
                            return o;
                        },
                        onKeyDown: function(e, t, i, n) {
                            var a, r = l(this);
                            if (3 != e.location) {
                                var s, c = e.key;
                                if ((s = n.shortcuts && n.shortcuts[c]) && s.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(s)), 
                                r.trigger("setvalue"), !1;
                            }
                            if (e.ctrlKey) switch (e.key) {
                              case o.keys.ArrowUp:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(n.step)), 
                                r.trigger("setvalue"), !1;

                              case o.keys.ArrowDown:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(n.step)), 
                                r.trigger("setvalue"), !1;
                            }
                            if (!e.shiftKey && (e.key === o.keys.Delete || e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                if (t[e.key === o.keys.Delete ? i.begin - 1 : i.end] === n.negationSymbol.front) return a = t.slice().reverse(), 
                                "" !== n.negationSymbol.front && a.shift(), "" !== n.negationSymbol.back && a.pop(), 
                                r.trigger("setvalue", [ a.join(""), i.begin ]), !1;
                                if (!0 === n._radixDance) {
                                    var f = t.indexOf(n.radixPoint);
                                    if (n.digitsOptional) {
                                        if (0 === f) return (a = t.slice().reverse()).pop(), r.trigger("setvalue", [ a.join(""), i.begin >= a.length ? a.length : i.begin ]), 
                                        !1;
                                    } else if (-1 !== f && (i.begin < f || i.end < f || e.key === o.keys.Delete && (i.begin === f || i.begin - 1 === f))) {
                                        var d = void 0;
                                        return i.begin === i.end && (e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI ? i.begin++ : e.key === o.keys.Delete && i.begin - 1 === f && (d = l.extend({}, i), 
                                        i.begin--, i.end--)), (a = t.slice().reverse()).splice(a.length - i.begin, i.begin - i.end + 1), 
                                        a = u(a, n.digits, n).join(""), d && (i = d), r.trigger("setvalue", [ a, i.begin >= a.length ? f + 1 : i.begin ]), 
                                        !1;
                                    }
                                }
                            }
                        }
                    },
                    currency: {
                        prefix: "",
                        groupSeparator: ",",
                        alias: "numeric",
                        digits: 2,
                        digitsOptional: !1
                    },
                    decimal: {
                        alias: "numeric"
                    },
                    integer: {
                        alias: "numeric",
                        inputmode: "numeric",
                        digits: 0
                    },
                    percentage: {
                        alias: "numeric",
                        min: 0,
                        max: 100,
                        suffix: " %",
                        digits: 0,
                        allowMinus: !1
                    },
                    indianns: {
                        alias: "numeric",
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                        },
                        groupSeparator: ",",
                        radixPoint: ".",
                        placeholder: "0",
                        digits: 2,
                        digitsOptional: !1
                    }
                });
            },
            9380: function(e, t, i) {
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a = ((n = i(8741)) && n.__esModule ? n : {
                    default: n
                }).default ? window : {};
                t.default = a;
            },
            7760: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.HandleNativePlaceholder = function(e, t) {
                    var i = e ? e.inputmask : this;
                    if (s.ie) {
                        if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                            var n = r.getBuffer.call(i).slice(), a = e.inputmask._valueGet();
                            if (a !== t) {
                                var o = r.getLastValidPosition.call(i);
                                -1 === o && a === r.getBufferTemplate.call(i).join("") ? n = [] : -1 !== o && u.call(i, n), 
                                d(e, n);
                            }
                        }
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function(e) {
                    var t = e ? e.inputmask : this, i = t.opts, n = t.maskset;
                    if (e) {
                        if (void 0 === e.inputmask) return e.value;
                        e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                    }
                    for (var a = [], o = n.validPositions, s = 0, l = o.length; s < l; s++) o[s] && o[s].match && (1 != o[s].match.static || Array.isArray(n.metadata) && !0 !== o[s].generatedInput) && a.push(o[s].input);
                    var u = 0 === a.length ? "" : (t.isRTL ? a.reverse() : a).join("");
                    if ("function" == typeof i.onUnMask) {
                        var f = (t.isRTL ? r.getBuffer.call(t).slice().reverse() : r.getBuffer.call(t)).join("");
                        u = i.onUnMask.call(t, f, u, i);
                    }
                    return u;
                }, t.writeBuffer = d;
                var n = i(2839), a = i(4713), r = i(8711), o = i(7215), s = i(9845), l = i(6030);
                function c(e, t) {
                    var i = e ? e.inputmask : this, n = i.opts;
                    e.inputmask.refreshValue = !1, "function" == typeof n.onBeforeMask && (t = n.onBeforeMask.call(i, t, n) || t), 
                    f(e, !0, !1, t = (t || "").toString().split("")), i.undoValue = i._valueGet(!0), 
                    (n.clearMaskOnLostFocus || n.clearIncomplete) && e.inputmask._valueGet() === r.getBufferTemplate.call(i).join("") && -1 === r.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                }
                function u(e) {
                    e.length = 0;
                    for (var t, i = a.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                    return e;
                }
                function f(e, t, i, n, s) {
                    var c = e ? e.inputmask : this, u = c.maskset, f = c.opts, p = c.dependencyLib, h = n.slice(), v = "", m = -1, g = void 0, y = f.skipOptionalPartCharacter;
                    f.skipOptionalPartCharacter = "", r.resetMaskSet.call(c), u.tests = {}, m = f.radixPoint ? r.determineNewCaretPosition.call(c, {
                        begin: 0,
                        end: 0
                    }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, u.p = m, c.caretPos = {
                        begin: m
                    };
                    var k = [], b = c.caretPos;
                    if (h.forEach((function(e, t) {
                        if (void 0 !== e) {
                            var n = new p.Event("_checkval");
                            n.key = e, v += e;
                            var o = r.getLastValidPosition.call(c, void 0, !0);
                            !function(e, t) {
                                for (var i = a.getMaskTemplate.call(c, !0, 0).slice(e, r.seekNext.call(c, e, !1, !1)).join("").replace(/'/g, ""), n = i.indexOf(t); n > 0 && " " === i[n - 1]; ) n--;
                                var o = 0 === n && !r.isMask.call(c, e) && (a.getTest.call(c, e).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e).match.static && a.getTest.call(c, e).match.nativeDef === "'" + t.charAt(0) || " " === a.getTest.call(c, e).match.nativeDef && (a.getTest.call(c, e + 1).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e + 1).match.static && a.getTest.call(c, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                if (!o && n > 0 && !r.isMask.call(c, e, !1, !0)) {
                                    var s = r.seekNext.call(c, e);
                                    c.caretPos.begin < s && (c.caretPos = {
                                        begin: s
                                    });
                                }
                                return o;
                            }(m, v) ? (g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, c.caretPos.begin)) && (m = c.caretPos.begin + 1, 
                            v = "") : g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, o + 1), g ? (void 0 !== g.pos && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static && void 0 === u.validPositions[g.pos].alternation && (k.push(g.pos), 
                            c.isRTL || (g.forwardPosition = g.pos + 1)), d.call(c, void 0, r.getBuffer.call(c), g.forwardPosition, n, !1), 
                            c.caretPos = {
                                begin: g.forwardPosition,
                                end: g.forwardPosition
                            }, b = c.caretPos) : void 0 === u.validPositions[t] && h[t] === a.getPlaceholder.call(c, t) && r.isMask.call(c, t, !0) ? c.caretPos.begin++ : c.caretPos = b;
                        }
                    })), k.length > 0) {
                        var x, P, w = r.seekNext.call(c, -1, void 0, !1);
                        if (!o.isComplete.call(c, r.getBuffer.call(c)) && k.length <= w || o.isComplete.call(c, r.getBuffer.call(c)) && k.length > 0 && k.length !== w && 0 === k[0]) for (var S = w; void 0 !== (x = k.shift()); ) {
                            var M = new p.Event("_checkval");
                            if ((P = u.validPositions[x]).generatedInput = !0, M.key = P.input, (g = l.EventHandlers.keypressEvent.call(c, M, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static) k.push(g.pos); else if (!g) break;
                            S++;
                        }
                    }
                    t && d.call(c, e, r.getBuffer.call(c), g ? g.forwardPosition : c.caretPos.begin, s || new p.Event("checkval"), s && ("input" === s.type && c.undoValue !== r.getBuffer.call(c).join("") || "paste" === s.type)), 
                    f.skipOptionalPartCharacter = y;
                }
                function d(e, t, i, a, s) {
                    var l = e ? e.inputmask : this, c = l.opts, u = l.dependencyLib;
                    if (a && "function" == typeof c.onBeforeWrite) {
                        var f = c.onBeforeWrite.call(l, a, t, i, c);
                        if (f) {
                            if (f.refreshFromBuffer) {
                                var d = f.refreshFromBuffer;
                                o.refreshFromBuffer.call(l, !0 === d ? d : d.start, d.end, f.buffer || t), t = r.getBuffer.call(l, !0);
                            }
                            void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                        }
                    }
                    if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || r.caret.call(l, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.key === n.keys.Delete || a.key === n.keys.Backspace)), 
                    !0 === s)) {
                        var p = u(e), h = e.inputmask._valueGet();
                        e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                            h === r.getBufferTemplate.call(l).join("") ? p.trigger("cleared") : !0 === o.isComplete.call(l, t) && p.trigger("complete");
                        }), 0);
                    }
                }
            },
            2394: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = i(157), a = m(i(4963)), r = m(i(9380)), o = i(2391), s = i(4713), l = i(8711), c = i(7215), u = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
                function v(e) {
                    return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, v(e);
                }
                function m(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var g = r.default.document, y = "_inputmask_opts";
                function k(e, t, i) {
                    if (h.default) {
                        if (!(this instanceof k)) return new k(e, t, i);
                        this.dependencyLib = a.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                        !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                        e && (t.alias = e)), this.opts = a.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                        this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                        this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, 
                        this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0, 
                        this.isComposing = !1, this.hasAlternator = !1;
                    }
                }
                function b(e, t, i) {
                    var n = k.prototype.aliases[e];
                    return n ? (n.alias && b(n.alias, void 0, i), a.default.extend(!0, i, n), a.default.extend(!0, i, t), 
                    !0) : (null === i.mask && (i.mask = e), !1);
                }
                k.prototype = {
                    dataAttribute: "data-inputmask",
                    defaults: p.default,
                    definitions: d.default,
                    aliases: {},
                    masksCache: {},
                    get isRTL() {
                        return this.opts.isRTL || this.opts.numericInput;
                    },
                    mask: function(e) {
                        var t = this;
                        return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                        (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : [].slice.call(e)).forEach((function(e, i) {
                            var s = a.default.extend(!0, {}, t.opts);
                            if (function(e, t, i, n) {
                                function o(t, a) {
                                    var o = "" === n ? t : n + "-" + t;
                                    null !== (a = void 0 !== a ? a : e.getAttribute(o)) && ("string" == typeof a && (0 === t.indexOf("on") ? a = r.default[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), 
                                    i[t] = a);
                                }
                                if (!0 === t.importDataAttributes) {
                                    var s, l, c, u, f = e.getAttribute(n);
                                    if (f && "" !== f && (f = f.replace(/'/g, '"'), l = JSON.parse("{" + f + "}")), 
                                    l) for (u in c = void 0, l) if ("alias" === u.toLowerCase()) {
                                        c = l[u];
                                        break;
                                    }
                                    for (s in o("alias", c), i.alias && b(i.alias, i, t), t) {
                                        if (l) for (u in c = void 0, l) if (u.toLowerCase() === s.toLowerCase()) {
                                            c = l[u];
                                            break;
                                        }
                                        o(s, c);
                                    }
                                }
                                a.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                t.isRTL = !0);
                                return Object.keys(i).length;
                            }(e, s, a.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                var l = (0, o.generateMaskSet)(s, t.noMasksCache);
                                void 0 !== l && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                e.inputmask = new k(void 0, void 0, !0), e.inputmask.opts = s, e.inputmask.noMasksCache = t.noMasksCache, 
                                e.inputmask.userOptions = a.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                e.inputmask.$el = (0, a.default)(e), e.inputmask.maskset = l, a.default.data(e, y, t.userOptions), 
                                n.mask.call(e.inputmask));
                            }
                        })), e && e[0] && e[0].inputmask || this;
                    },
                    option: function(e, t) {
                        return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (a.default.extend(this.userOptions, e), 
                        this.el && !0 !== t && this.mask(this.el), this) : void 0;
                    },
                    unmaskedvalue: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        void 0 === this.el || void 0 !== e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            u.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, l.getBuffer.call(this), 0, this.opts);
                        }
                        return u.unmaskedvalue.call(this, this.el);
                    },
                    remove: function() {
                        if (this.el) {
                            a.default.data(this.el, y, null);
                            var e = this.opts.autoUnmask ? (0, u.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                            e !== l.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                            f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                get: this.__valueGet,
                                set: this.__valueSet,
                                configurable: !0
                            }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                            this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                        }
                        return this.el;
                    },
                    getemptymask: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        (this.isRTL ? l.getBufferTemplate.call(this).reverse() : l.getBufferTemplate.call(this)).join("");
                    },
                    hasMaskedValue: function() {
                        return !this.opts.autoUnmask;
                    },
                    isComplete: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        c.isComplete.call(this, l.getBuffer.call(this));
                    },
                    getmetadata: function() {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        Array.isArray(this.maskset.metadata)) {
                            var e = s.getMaskTemplate.call(this, !0, 0, !1).join("");
                            return this.maskset.metadata.forEach((function(t) {
                                return t.mask !== e || (e = t, !1);
                            })), e;
                        }
                        return this.maskset.metadata;
                    },
                    isValid: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            u.checkVal.call(this, void 0, !0, !1, t);
                        } else e = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        for (var i = l.getBuffer.call(this), n = l.determineLastRequiredPosition.call(this), a = i.length - 1; a > n && !l.isMask.call(this, a); a--) ;
                        return i.splice(n, a + 1 - n), c.isComplete.call(this, i) && e === (this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join(""));
                    },
                    format: function(e, t) {
                        this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                        var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                        u.checkVal.call(this, void 0, !0, !1, i);
                        var n = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        return t ? {
                            value: n,
                            metadata: this.getmetadata()
                        } : n;
                    },
                    setValue: function(e) {
                        this.el && (0, a.default)(this.el).trigger("setvalue", [ e ]);
                    },
                    analyseMask: o.analyseMask
                }, k.extendDefaults = function(e) {
                    a.default.extend(!0, k.prototype.defaults, e);
                }, k.extendDefinitions = function(e) {
                    a.default.extend(!0, k.prototype.definitions, e);
                }, k.extendAliases = function(e) {
                    a.default.extend(!0, k.prototype.aliases, e);
                }, k.format = function(e, t, i) {
                    return k(t).format(e, i);
                }, k.unmask = function(e, t) {
                    return k(t).unmaskedvalue(e);
                }, k.isValid = function(e, t) {
                    return k(t).isValid(e);
                }, k.remove = function(e) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask && e.inputmask.remove();
                    }));
                }, k.setValue = function(e, t) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask ? e.inputmask.setValue(t) : (0, a.default)(e).trigger("setvalue", [ t ]);
                    }));
                }, k.dependencyLib = a.default, r.default.Inputmask = k;
                var x = k;
                t.default = x;
            },
            5296: function(e, t, i) {
                function n(e) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, n(e);
                }
                var a = h(i(9380)), r = h(i(2394)), o = h(i(8741));
                function s(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                        Object.defineProperty(e, (r = a.key, o = void 0, o = function(e, t) {
                            if ("object" !== n(e) || null === e) return e;
                            var i = e[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var a = i.call(e, t || "default");
                                if ("object" !== n(a)) return a;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(r, "string"), "symbol" === n(o) ? o : String(o)), a);
                    }
                    var r, o;
                }
                function l(e) {
                    var t = f();
                    return function() {
                        var i, a = p(e);
                        if (t) {
                            var r = p(this).constructor;
                            i = Reflect.construct(a, arguments, r);
                        } else i = a.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === n(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e;
                            }(e);
                        }(this, i);
                    };
                }
                function c(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return c = function(e) {
                        if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                        var i;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, n);
                        }
                        function n() {
                            return u(e, arguments, p(this).constructor);
                        }
                        return n.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: n,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), d(n, e);
                    }, c(e);
                }
                function u(e, t, i) {
                    return u = f() ? Reflect.construct.bind() : function(e, t, i) {
                        var n = [ null ];
                        n.push.apply(n, t);
                        var a = new (Function.bind.apply(e, n));
                        return i && d(a, i.prototype), a;
                    }, u.apply(null, arguments);
                }
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                        !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function d(e, t) {
                    return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e;
                    }, d(e, t);
                }
                function p(e) {
                    return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    }, p(e);
                }
                function h(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var v = a.default.document;
                if (o.default && v && v.head && v.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
                    var m = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && d(e, t);
                        }(o, e);
                        var t, i, n, a = l(o);
                        function o() {
                            var e;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, o);
                            var t = (e = a.call(this)).getAttributeNames(), i = e.attachShadow({
                                mode: "closed"
                            }), n = v.createElement("input");
                            for (var s in n.type = "text", i.appendChild(n), t) Object.prototype.hasOwnProperty.call(t, s) && n.setAttribute(t[s], e.getAttribute(t[s]));
                            var l = new r.default;
                            return l.dataAttribute = "", l.mask(n), n.inputmask.shadowRoot = i, e;
                        }
                        return t = o, i && s(t.prototype, i), n && s(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t;
                    }(c(HTMLElement));
                    a.default.customElements.define("input-mask", m);
                }
            },
            2839: function(e, t) {
                function i(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var n, a, r, o, s = [], l = !0, c = !1;
                            try {
                                if (r = (i = i.call(e)).next, 0 === t) {
                                    if (Object(i) !== i) return;
                                    l = !1;
                                } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                            } catch (e) {
                                c = !0, a = e;
                            } finally {
                                try {
                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return s;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return n(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return n(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function n(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.keys = t.keyCode = void 0, t.toKey = function(e, t) {
                    return r[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
                }, t.toKeyCode = function(e) {
                    return a[e];
                };
                var a = {
                    AltGraph: 18,
                    ArrowDown: 40,
                    ArrowLeft: 37,
                    ArrowRight: 39,
                    ArrowUp: 38,
                    Backspace: 8,
                    BACKSPACE_SAFARI: 127,
                    CapsLock: 20,
                    Delete: 46,
                    End: 35,
                    Enter: 13,
                    Escape: 27,
                    Home: 36,
                    Insert: 45,
                    PageDown: 34,
                    PageUp: 33,
                    Space: 32,
                    Tab: 9,
                    c: 67,
                    x: 88,
                    z: 90,
                    Shift: 16,
                    Control: 17,
                    Alt: 18,
                    Pause: 19,
                    Meta_LEFT: 91,
                    Meta_RIGHT: 92,
                    ContextMenu: 93,
                    Process: 229,
                    Unidentified: 229,
                    F1: 112,
                    F2: 113,
                    F3: 114,
                    F4: 115,
                    F5: 116,
                    F6: 117,
                    F7: 118,
                    F8: 119,
                    F9: 120,
                    F10: 121,
                    F11: 122,
                    F12: 123
                };
                t.keyCode = a;
                var r = Object.entries(a).reduce((function(e, t) {
                    var n = i(t, 2), a = n[0], r = n[1];
                    return e[r] = void 0 === e[r] ? a : e[r], e;
                }), {}), o = Object.entries(a).reduce((function(e, t) {
                    var n = i(t, 2), a = n[0];
                    n[1];
                    return e[a] = "Space" === a ? " " : a, e;
                }), {});
                t.keys = o;
            },
            2391: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.analyseMask = function(e, t, i) {
                    var n, o, s, l, c, u, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new a.default, v = [], m = [], g = !1;
                    function y(e, n, a) {
                        a = void 0 !== a ? a : e.matches.length;
                        var o = e.matches[a - 1];
                        if (t) {
                            if (0 === n.indexOf("[") || p && /\\d|\\s|\\w|\\p/i.test(n) || "." === n) {
                                var s = i.casing ? "i" : "";
                                /^\\p\{.*}$/i.test(n) && (s += "u"), e.matches.splice(a++, 0, {
                                    fn: new RegExp(n, s),
                                    static: !1,
                                    optionality: !1,
                                    newBlockMarker: void 0 === o ? "master" : o.def !== n,
                                    casing: null,
                                    def: n,
                                    placeholder: void 0,
                                    nativeDef: n
                                });
                            } else p && (n = n[n.length - 1]), n.split("").forEach((function(t, n) {
                                o = e.matches[a - 1], e.matches.splice(a++, 0, {
                                    fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                    static: !0,
                                    optionality: !1,
                                    newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                    casing: null,
                                    def: i.staticDefinitionSymbol || t,
                                    placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                    nativeDef: (p ? "'" : "") + t
                                });
                            }));
                            p = !1;
                        } else {
                            var l = i.definitions && i.definitions[n] || i.usePrototypeDefinitions && r.default.prototype.definitions[n];
                            l && !p ? e.matches.splice(a++, 0, {
                                fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function() {
                                    this.test = l.validator;
                                } : new RegExp("."),
                                static: l.static || !1,
                                optionality: l.optional || !1,
                                defOptionality: l.optional || !1,
                                newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || n),
                                casing: l.casing,
                                def: l.definitionSymbol || n,
                                placeholder: l.placeholder,
                                nativeDef: n,
                                generated: l.generated
                            }) : (e.matches.splice(a++, 0, {
                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || n) ? new RegExp("[" + (i.staticDefinitionSymbol || n) + "]", i.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== n && !0 !== o.static,
                                casing: null,
                                def: i.staticDefinitionSymbol || n,
                                placeholder: void 0 !== i.staticDefinitionSymbol ? n : void 0,
                                nativeDef: (p ? "'" : "") + n
                            }), p = !1);
                        }
                    }
                    function k() {
                        if (v.length > 0) {
                            if (y(l = v[v.length - 1], o), l.isAlternator) {
                                c = v.pop();
                                for (var e = 0; e < c.matches.length; e++) c.matches[e].isGroup && (c.matches[e].isGroup = !1);
                                v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                            }
                        } else y(h, o);
                    }
                    function b(e) {
                        var t = new a.default(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    function x() {
                        if ((s = v.pop()).openGroup = !1, void 0 !== s) if (v.length > 0) {
                            if ((l = v[v.length - 1]).matches.push(s), l.isAlternator) {
                                for (var e = (c = v.pop()).matches[0].matches ? c.matches[0].matches.length : 1, t = 0; t < c.matches.length; t++) c.matches[t].isGroup = !1, 
                                c.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (c.matches[t].matches ? c.matches[t].matches.length : 1) && (i.keepStatic = !0), 
                                e = c.matches[t].matches ? c.matches[t].matches.length : 1;
                                v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                            }
                        } else h.matches.push(s); else k();
                    }
                    function P(e) {
                        var t = e.pop();
                        return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                    }
                    t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                    for (;n = t ? d.exec(e) : f.exec(e); ) {
                        if (o = n[0], t) {
                            switch (o.charAt(0)) {
                              case "?":
                                o = "{0,1}";
                                break;

                              case "+":
                              case "*":
                                o = "{" + o + "}";
                                break;

                              case "|":
                                if (0 === v.length) {
                                    var w = b(h.matches);
                                    w.openGroup = !0, v.push(w), h.matches = [], g = !0;
                                }
                            }
                            switch (o) {
                              case "\\d":
                                o = "[0-9]";
                                break;

                              case "\\p":
                                o += d.exec(e)[0], o += d.exec(e)[0];
                            }
                        }
                        if (p) k(); else switch (o.charAt(0)) {
                          case "$":
                          case "^":
                            t || k();
                            break;

                          case i.escapeChar:
                            p = !0, t && k();
                            break;

                          case i.optionalmarker[1]:
                          case i.groupmarker[1]:
                            x();
                            break;

                          case i.optionalmarker[0]:
                            v.push(new a.default(!1, !0));
                            break;

                          case i.groupmarker[0]:
                            v.push(new a.default(!0));
                            break;

                          case i.quantifiermarker[0]:
                            var S = new a.default(!1, !1, !0), M = (o = o.replace(/[{}?]/g, "")).split("|"), _ = M[0].split(","), O = isNaN(_[0]) ? _[0] : parseInt(_[0]), E = 1 === _.length ? O : isNaN(_[1]) ? _[1] : parseInt(_[1]), T = isNaN(M[1]) ? M[1] : parseInt(M[1]);
                            "*" !== O && "+" !== O || (O = "*" === E ? 0 : 1), S.quantifier = {
                                min: O,
                                max: E,
                                jit: T
                            };
                            var j = v.length > 0 ? v[v.length - 1].matches : h.matches;
                            (n = j.pop()).isGroup || (n = b([ n ])), j.push(n), j.push(S);
                            break;

                          case i.alternatormarker:
                            if (v.length > 0) {
                                var A = (l = v[v.length - 1]).matches[l.matches.length - 1];
                                u = l.openGroup && (void 0 === A.matches || !1 === A.isGroup && !1 === A.isAlternator) ? v.pop() : P(l.matches);
                            } else u = P(h.matches);
                            if (u.isAlternator) v.push(u); else if (u.alternatorGroup ? (c = v.pop(), u.alternatorGroup = !1) : c = new a.default(!1, !1, !1, !0), 
                            c.matches.push(u), v.push(c), u.openGroup) {
                                u.openGroup = !1;
                                var D = new a.default(!0);
                                D.alternatorGroup = !0, v.push(D);
                            }
                            break;

                          default:
                            k();
                        }
                    }
                    g && x();
                    for (;v.length > 0; ) s = v.pop(), h.matches.push(s);
                    h.matches.length > 0 && (!function e(n) {
                        n && n.matches && n.matches.forEach((function(a, r) {
                            var o = n.matches[r + 1];
                            (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && a && a.isGroup && (a.isGroup = !1, 
                            t || (y(a, i.groupmarker[0], 0), !0 !== a.openGroup && y(a, i.groupmarker[1]))), 
                            e(a);
                        }));
                    }(h), m.push(h));
                    (i.numericInput || i.isRTL) && function e(t) {
                        for (var n in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, n)) {
                            var a = parseInt(n);
                            if (t.matches[n].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
                                var r = t.matches[n];
                                t.matches.splice(n, 1), t.matches.splice(a + 1, 0, r);
                            }
                            void 0 !== t.matches[n].matches ? t.matches[n] = e(t.matches[n]) : t.matches[n] = ((o = t.matches[n]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                            o);
                        }
                        var o;
                        return t;
                    }(m[0]);
                    return m;
                }, t.generateMaskSet = function(e, t) {
                    var i;
                    function a(e, t) {
                        var i = t.repeat, n = t.groupmarker, a = t.quantifiermarker, r = t.keepStatic;
                        if (i > 0 || "*" === i || "+" === i) {
                            var l = "*" === i ? 0 : "+" === i ? 1 : i;
                            e = n[0] + e + n[1] + a[0] + l + "," + i + a[1];
                        }
                        if (!0 === r) {
                            var c = e.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                            c && c.forEach((function(t, i) {
                                var n = function(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e;
                                    }(e) || function(e, t) {
                                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != i) {
                                            var n, a, r, o, s = [], l = !0, c = !1;
                                            try {
                                                if (r = (i = i.call(e)).next, 0 === t) {
                                                    if (Object(i) !== i) return;
                                                    l = !1;
                                                } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                                            } catch (e) {
                                                c = !0, a = e;
                                            } finally {
                                                try {
                                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                                } finally {
                                                    if (c) throw a;
                                                }
                                            }
                                            return s;
                                        }
                                    }(e, t) || function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return s(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === i && e.constructor && (i = e.constructor.name);
                                        if ("Map" === i || "Set" === i) return Array.from(e);
                                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return s(e, t);
                                    }(e, t) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    }();
                                }(t.split("["), 2), a = n[0], r = n[1];
                                r = r.replace("]", ""), e = e.replace(new RegExp("".concat((0, o.default)(a), "\\[").concat((0, 
                                o.default)(r), "\\]")), a.charAt(0) === r.charAt(0) ? "(".concat(a, "|").concat(a).concat(r, ")") : "".concat(a, "[").concat(r, "]"));
                            }));
                        }
                        return e;
                    }
                    function l(e, i, o) {
                        var s, l, c = !1;
                        return null !== e && "" !== e || ((c = null !== o.regex) ? e = (e = o.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (c = !0, 
                        e = ".*")), 1 === e.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ""), 
                        e = a(e, o), l = c ? "regex_" + o.regex : o.numericInput ? e.split("").reverse().join("") : e, 
                        null !== o.keepStatic && (l = "ks_" + o.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (s = {
                            mask: e,
                            maskToken: r.default.prototype.analyseMask(e, c, o),
                            validPositions: [],
                            _buffer: void 0,
                            buffer: void 0,
                            tests: {},
                            excludes: {},
                            metadata: i,
                            maskLength: void 0,
                            jitOffset: {}
                        }, !0 !== t && (r.default.prototype.masksCache[l] = s, s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]), 
                        s;
                    }
                    "function" == typeof e.mask && (e.mask = e.mask(e));
                    if (Array.isArray(e.mask)) {
                        if (e.mask.length > 1) {
                            null === e.keepStatic && (e.keepStatic = !0);
                            var c = e.groupmarker[0];
                            return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                c.length > 1 && (c += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? c += t.mask : c += t;
                            })), l(c += e.groupmarker[1], e.mask, e);
                        }
                        e.mask = e.mask.pop();
                    }
                    i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? l(e.mask.mask, e.mask, e) : l(e.mask, e.mask, e);
                    null === e.keepStatic && (e.keepStatic = !1);
                    return i;
                };
                var n = l(i(4963)), a = l(i(9695)), r = l(i(2394)), o = l(i(7184));
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
            },
            157: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mask = function() {
                    var e = this, t = this.opts, i = this.el, u = this.dependencyLib;
                    o.EventRuler.off(i);
                    var f = function(t, i) {
                        "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.keys.Enter);
                        var s = t.getAttribute("type"), l = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                        if (!l) if ("input" === t.tagName.toLowerCase()) {
                            var c = document.createElement("input");
                            c.setAttribute("type", s), l = "text" === c.type, c = null;
                        } else l = "partial";
                        return !1 !== l ? function(t) {
                            var n, s;
                            function l() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== a.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? r.clearOptionalTail.call(e, a.getBuffer.call(e).slice()).reverse() : r.clearOptionalTail.call(e, a.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                            }
                            function c(e) {
                                s.call(this, e), this.inputmask && (0, r.applyInputValue)(this, e);
                            }
                            if (!t.inputmask.__valueGet) {
                                if (!0 !== i.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                        f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                                            get: l,
                                            set: c,
                                            configurable: !0
                                        })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                            return this.textContent;
                                        }, s = function(e) {
                                            this.textContent = e;
                                        }, Object.defineProperty(t, "value", {
                                            get: l,
                                            set: c,
                                            configurable: !0
                                        }));
                                    } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                    s = t.__lookupSetter__("value"), t.__defineGetter__("value", l), t.__defineSetter__("value", c));
                                    t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                                }
                                t.inputmask._valueGet = function(t) {
                                    return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                }, t.inputmask._valueSet = function(t, i) {
                                    s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                }, void 0 === n && (n = function() {
                                    return this.value;
                                }, s = function(e) {
                                    this.value = e;
                                }, function(t) {
                                    if (u.valHooks && (void 0 === u.valHooks[t] || !0 !== u.valHooks[t].inputmaskpatch)) {
                                        var n = u.valHooks[t] && u.valHooks[t].get ? u.valHooks[t].get : function(e) {
                                            return e.value;
                                        }, o = u.valHooks[t] && u.valHooks[t].set ? u.valHooks[t].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        u.valHooks[t] = {
                                            get: function(t) {
                                                if (t.inputmask) {
                                                    if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                    var r = n(t);
                                                    return -1 !== a.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? r : "";
                                                }
                                                return n(t);
                                            },
                                            set: function(e, t) {
                                                var i = o(e, t);
                                                return e.inputmask && (0, r.applyInputValue)(e, t), i;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }(t.type), function(e) {
                                    o.EventRuler.on(e, "mouseenter", (function() {
                                        var e = this, t = e.inputmask._valueGet(!0);
                                        t != (e.inputmask.isRTL ? a.getBuffer.call(e.inputmask).slice().reverse() : a.getBuffer.call(e.inputmask)).join("") && (0, 
                                        r.applyInputValue)(e, t);
                                    }));
                                }(t));
                            }
                        }(t) : t.inputmask = void 0, l;
                    }(i, t);
                    if (!1 !== f) {
                        e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                        -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                        i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                        s.iphone && (t.insertModeVisual = !1, i.setAttribute("autocorrect", "off")), o.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                        o.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), o.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                        o.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), o.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                        o.EventRuler.on(i, "click", c.EventHandlers.clickEvent), o.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                        o.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), o.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                        o.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), o.EventRuler.on(i, "complete", t.oncomplete), 
                        o.EventRuler.on(i, "incomplete", t.onincomplete), o.EventRuler.on(i, "cleared", t.oncleared), 
                        !0 !== t.inputEventOnly && o.EventRuler.on(i, "keydown", c.EventHandlers.keyEvent), 
                        (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), o.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent)), 
                        o.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), a.getBufferTemplate.call(e).join(""), 
                        e.undoValue = e._valueGet(!0);
                        var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                        if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                            (0, r.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                            var p = a.getBuffer.call(e).slice();
                            !1 === l.isComplete.call(e, p) && t.clearIncomplete && a.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === a.getLastValidPosition.call(e) ? p = [] : r.clearOptionalTail.call(e, p)), 
                            (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, 
                            r.writeBuffer)(i, p), d === i && a.caret.call(e, i, a.seekNext.call(e, a.getLastValidPosition.call(e)));
                        }
                    }
                };
                var n = i(2839), a = i(8711), r = i(7760), o = i(9716), s = i(9845), l = i(7215), c = i(6030);
            },
            9695: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i, n) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                    this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = n || !1, 
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                };
            },
            3194: function() {
                Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                    value: function(e, t) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var i = Object(this), n = i.length >>> 0;
                        if (0 === n) return !1;
                        for (var a = 0 | t, r = Math.max(a >= 0 ? a : n - Math.abs(a), 0); r < n; ) {
                            if (i[r] === e) return !0;
                            r++;
                        }
                        return !1;
                    }
                });
            },
            9302: function() {
                var e = Function.bind.call(Function.call, Array.prototype.reduce), t = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), i = Function.bind.call(Function.call, Array.prototype.concat), n = Object.keys;
                Object.entries || (Object.entries = function(a) {
                    return e(n(a), (function(e, n) {
                        return i(e, "string" == typeof n && t(a, n) ? [ [ n, a[n] ] ] : []);
                    }), []);
                });
            },
            7149: function() {
                function e(t) {
                    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, e(t);
                }
                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                    return e.__proto__;
                } : function(e) {
                    return e.constructor.prototype;
                });
            },
            4013: function() {
                String.prototype.includes || (String.prototype.includes = function(e, t) {
                    return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
                });
            },
            8711: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.caret = function(e, t, i, n, a) {
                    var r, o = this, s = this.opts;
                    if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                    i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                    i = r.endOffset) : document.selection && document.selection.createRange && (i = (t = 0 - (r = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + r.text.length), 
                    {
                        begin: n ? t : c.call(o, t),
                        end: n ? i : c.call(o, i)
                    };
                    if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                    void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                    "number" == typeof t) {
                        t = n ? t : c.call(o, t), i = "number" == typeof (i = n ? i : c.call(o, i)) ? i : t;
                        var l = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                        if (e.scrollLeft = l > e.scrollWidth ? l : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: i
                        }, s.insertModeVisual && !1 === s.insertMode && t === i && (a || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                            if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                var u = document.createTextNode("");
                                e.appendChild(u);
                            }
                            r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                            r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                            r.collapse(!0);
                            var f = window.getSelection();
                            f.removeAllRanges(), f.addRange(r);
                        } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                        r.moveStart("character", t), r.select());
                    }
                }, t.determineLastRequiredPosition = function(e) {
                    var t, i, r = this, s = r.maskset, l = r.dependencyLib, c = n.getMaskTemplate.call(r, !0, o.call(r), !0, !0), u = c.length, f = o.call(r), d = {}, p = s.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                    for (t = f + 1; t < c.length; t++) h = (i = n.getTestTemplate.call(r, t, h, t - 1)).locator.slice(), 
                    d[t] = l.extend(!0, {}, i);
                    var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                    for (t = u - 1; t > f && (((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && a.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== n.getTests.call(r, t)[0].def)) && c[t] === n.getPlaceholder.call(r, t, i.match)); t--) u--;
                    return e ? {
                        l: u,
                        def: d[u] ? d[u].match : void 0
                    } : u;
                }, t.determineNewCaretPosition = function(e, t, i) {
                    var a = this, c = a.maskset, u = a.opts;
                    t && (a.isRTL ? e.end = e.begin : e.begin = e.end);
                    if (e.begin === e.end) {
                        switch (i = i || u.positionCaretOnClick) {
                          case "none":
                            break;

                          case "select":
                            e = {
                                begin: 0,
                                end: r.call(a).length
                            };
                            break;

                          case "ignore":
                            e.end = e.begin = l.call(a, o.call(a));
                            break;

                          case "radixFocus":
                            if (a.clicked > 1 && 0 == c.validPositions.length) break;
                            if (function(e) {
                                if ("" !== u.radixPoint && 0 !== u.digits) {
                                    var t = c.validPositions;
                                    if (void 0 === t[e] || t[e].input === n.getPlaceholder.call(a, e)) {
                                        if (e < l.call(a, -1)) return !0;
                                        var i = r.call(a).indexOf(u.radixPoint);
                                        if (-1 !== i) {
                                            for (var o = 0, s = t.length; o < s; o++) if (t[o] && i < o && t[o].input !== n.getPlaceholder.call(a, o)) return !1;
                                            return !0;
                                        }
                                    }
                                }
                                return !1;
                            }(e.begin)) {
                                var f = r.call(a).join("").indexOf(u.radixPoint);
                                e.end = e.begin = u.numericInput ? l.call(a, f) : f;
                                break;
                            }

                          default:
                            var d = e.begin, p = o.call(a, d, !0), h = l.call(a, -1 !== p || s.call(a, 0) ? p : -1);
                            if (d <= h) e.end = e.begin = s.call(a, d, !1, !0) ? d : l.call(a, d); else {
                                var v = c.validPositions[p], m = n.getTestTemplate.call(a, h, v ? v.match.locator : void 0, v), g = n.getPlaceholder.call(a, h, m.match);
                                if ("" !== g && r.call(a)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !s.call(a, h, u.keepStatic, !0) && m.match.def === g) {
                                    var y = l.call(a, h);
                                    (d >= y || d === h) && (h = y);
                                }
                                e.end = e.begin = h;
                            }
                        }
                        return e;
                    }
                }, t.getBuffer = r, t.getBufferTemplate = function() {
                    var e = this.maskset;
                    void 0 === e._buffer && (e._buffer = n.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                    return e._buffer;
                }, t.getLastValidPosition = o, t.isMask = s, t.resetMaskSet = function(e) {
                    var t = this.maskset;
                    t.buffer = void 0, !0 !== e && (t.validPositions = [], t.p = 0);
                }, t.seekNext = l, t.seekPrevious = function(e, t) {
                    var i = this, a = e - 1;
                    if (e <= 0) return 0;
                    for (;a > 0 && (!0 === t && (!0 !== n.getTest.call(i, a).match.newBlockMarker || !s.call(i, a, void 0, !0)) || !0 !== t && !s.call(i, a, void 0, !0)); ) a--;
                    return a;
                }, t.translatePosition = c;
                var n = i(4713), a = i(7215);
                function r(e) {
                    var t = this, i = t.maskset;
                    return void 0 !== i.buffer && !0 !== e || (i.buffer = n.getMaskTemplate.call(t, !0, o.call(t), !0), 
                    void 0 === i._buffer && (i._buffer = i.buffer.slice())), i.buffer;
                }
                function o(e, t, i) {
                    var n = this.maskset, a = -1, r = -1, o = i || n.validPositions;
                    void 0 === e && (e = -1);
                    for (var s = 0, l = o.length; s < l; s++) o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (a = s), 
                    s >= e && (r = s));
                    return -1 === a || a == e ? r : -1 == r || e - a < r - e ? a : r;
                }
                function s(e, t, i) {
                    var a = this, r = this.maskset, o = n.getTestTemplate.call(a, e).match;
                    if ("" === o.def && (o = n.getTest.call(a, e).match), !0 !== o.static) return o.fn;
                    if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                    if (!0 !== t && e > -1) {
                        if (i) {
                            var s = n.getTests.call(a, e);
                            return s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0);
                        }
                        var l = n.determineTestTemplate.call(a, e, n.getTests.call(a, e)), c = n.getPlaceholder.call(a, e, l.match);
                        return l.match.def !== c;
                    }
                    return !1;
                }
                function l(e, t, i) {
                    var a = this;
                    void 0 === i && (i = !0);
                    for (var r = e + 1; "" !== n.getTest.call(a, r).match.def && (!0 === t && (!0 !== n.getTest.call(a, r).match.newBlockMarker || !s.call(a, r, void 0, !0)) || !0 !== t && !s.call(a, r, void 0, i)); ) r++;
                    return r;
                }
                function c(e) {
                    var t = this.opts, i = this.el;
                    return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = this._valueGet().length - e) < 0 && (e = 0), 
                    e;
                }
            },
            4713: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.determineTestTemplate = c, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, n, a) {
                    var r = this, o = this.opts, u = this.maskset, f = o.greedy;
                    a && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                    t = t || 0;
                    var p, h, v, m, g = [], y = 0;
                    do {
                        if (!0 === e && u.validPositions[y]) h = (v = a && u.validPositions[y].match.optionality && void 0 === u.validPositions[y + 1] && (!0 === u.validPositions[y].generatedInput || u.validPositions[y].input == o.skipOptionalPartCharacter && y > 0) ? c.call(r, y, d.call(r, y, p, y - 1)) : u.validPositions[y]).match, 
                        p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : s.call(r, y, h)); else {
                            h = (v = l.call(r, y, p, y - 1)).match, p = v.locator.slice();
                            var k = !0 !== n && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                            (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || u.validPositions[y - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && u.tests[y]) || !1 === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(!1 === i ? h.nativeDef : s.call(r, g.length, h)) : m = !1;
                        }
                        y++;
                    } while (!0 !== h.static || "" !== h.def || t > y);
                    "" === g[g.length - 1] && g.pop();
                    !1 === i && void 0 !== u.maskLength || (u.maskLength = y - 1);
                    return o.greedy = f, g;
                }, t.getPlaceholder = s, t.getTest = u, t.getTestTemplate = l, t.getTests = d, t.isSubsetOf = f;
                var n, a = (n = i(2394)) && n.__esModule ? n : {
                    default: n
                };
                function r(e, t) {
                    var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                    if ("" !== i) for (;i.length < t; ) i += "0";
                    return i;
                }
                function o(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                }
                function s(e, t, i) {
                    var n = this.opts, a = this.maskset;
                    if (void 0 !== (t = t || u.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(n) : t.placeholder;
                    if (!0 === t.static) {
                        if (e > -1 && void 0 === a.validPositions[e]) {
                            var r, o = d.call(this, e), s = [];
                            if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var l = 0; l < o.length; l++) if ("" !== o[l].match.def && !0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (!0 === o[l].match.static || void 0 === r || !1 !== o[l].match.fn.test(r.match.def, a, e, !0, n)) && (s.push(o[l]), 
                            !0 === o[l].match.static && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return n.placeholder.charAt(e % n.placeholder.length);
                        }
                        return t.def;
                    }
                    return n.placeholder.charAt(e % n.placeholder.length);
                }
                function l(e, t, i) {
                    return this.maskset.validPositions[e] || c.call(this, e, d.call(this, e, t ? t.slice() : t, i));
                }
                function c(e, t) {
                    var i = this.opts, n = 0, a = function(e, t) {
                        var i = 0, n = !1;
                        t.forEach((function(e) {
                            e.match.optionality && (0 !== i && i !== e.match.optionality && (n = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                        })), i && (0 == e || 1 == t.length ? i = 0 : n || (i = 0));
                        return i;
                    }(e, t);
                    e = e > 0 ? e - 1 : 0;
                    var o, s, l, c = r(u.call(this, e));
                    i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && (n = 1);
                    for (var f = 0; f < t.length - n; f++) {
                        var d = t[f];
                        o = r(d, c.length);
                        var p = Math.abs(o - c);
                        (void 0 === s || "" !== o && p < s || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!d.match.optionality || d.match.optionality - a < 1 || !d.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !d.match.optionalQuantifier) && (s = p, 
                        l = d);
                    }
                    return l;
                }
                function u(e, t) {
                    var i = this.maskset;
                    return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
                }
                function f(e, t, i) {
                    function n(e) {
                        for (var t, i = [], n = -1, a = 0, r = e.length; a < r; a++) if ("-" === e.charAt(a)) for (t = e.charCodeAt(a + 1); ++n < t; ) i.push(String.fromCharCode(n)); else n = e.charCodeAt(a), 
                        i.push(e.charAt(a));
                        return i.join("");
                    }
                    return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== n(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(n(e.match.fn.toString().replace(/[[\]/]/g, "")));
                }
                function d(e, t, i) {
                    var n, r, o = this, s = this.dependencyLib, l = this.maskset, u = this.opts, d = this.el, p = l.maskToken, h = t ? i : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, y = t ? t.join("") : "";
                    function k(t, i, r, s) {
                        function c(r, s, p) {
                            function v(e, t) {
                                var i = 0 === t.matches.indexOf(e);
                                return i || t.matches.every((function(n, a) {
                                    return !0 === n.isQuantifier ? i = v(e, t.matches[a - 1]) : Object.prototype.hasOwnProperty.call(n, "matches") && (i = v(e, n)), 
                                    !i;
                                })), i;
                            }
                            function x(e, t, i) {
                                var n, a;
                                if ((l.tests[e] || l.validPositions[e]) && (l.tests[e] || [ l.validPositions[e] ]).every((function(e, r) {
                                    if (e.mloc[t]) return n = e, !1;
                                    var o = void 0 !== i ? i : e.alternation, s = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                    return (void 0 === a || s < a) && -1 !== s && (n = e, a = s), !0;
                                })), n) {
                                    var r = n.locator[n.alternation];
                                    return (n.mloc[t] || n.mloc[r] || n.locator).slice((void 0 !== i ? i : n.alternation) + 1);
                                }
                                return void 0 !== i ? x(e, t) : void 0;
                            }
                            function P(e, t) {
                                var i = e.alternation, n = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                if (!n && i > t.alternation) for (var a = t.alternation; a < i; a++) if (e.locator[a] !== t.locator[a]) {
                                    i = a, n = !0;
                                    break;
                                }
                                if (n) {
                                    e.mloc = e.mloc || {};
                                    var r = e.locator[i];
                                    if (void 0 !== r) {
                                        if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                        void 0 !== t) {
                                            for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                            e.locator[i] = Object.keys(e.mloc).join(",");
                                        }
                                        return !0;
                                    }
                                    e.alternation = void 0;
                                }
                                return !1;
                            }
                            function w(e, t) {
                                if (e.locator.length !== t.locator.length) return !1;
                                for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                return !0;
                            }
                            if (h > e + u._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + l.mask;
                            if (h === e && void 0 === r.matches) {
                                if (m.push({
                                    match: r,
                                    locator: s.reverse(),
                                    cd: y,
                                    mloc: {}
                                }), !r.optionality || void 0 !== p || !(u.definitions && u.definitions[r.nativeDef] && u.definitions[r.nativeDef].optional || a.default.prototype.definitions[r.nativeDef] && a.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                g = !0, h = e;
                            } else if (void 0 !== r.matches) {
                                if (r.isGroup && p !== r) return function() {
                                    if (r = c(t.matches[t.matches.indexOf(r) + 1], s, p)) return !0;
                                }();
                                if (r.isOptional) return function() {
                                    var t = r, a = m.length;
                                    if (r = k(r, i, s, p), m.length > 0) {
                                        if (m.forEach((function(e, t) {
                                            t >= a && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                        })), n = m[m.length - 1].match, void 0 !== p || !v(n, t)) return r;
                                        g = !0, h = e;
                                    }
                                }();
                                if (r.isAlternator) return function() {
                                    o.hasAlternator = !0;
                                    var n, a, v, y = r, k = [], b = m.slice(), S = s.length, M = !1, _ = i.length > 0 ? i.shift() : -1;
                                    if (-1 === _ || "string" == typeof _) {
                                        var O, E = h, T = i.slice(), j = [];
                                        if ("string" == typeof _) j = _.split(","); else for (O = 0; O < y.matches.length; O++) j.push(O.toString());
                                        if (void 0 !== l.excludes[e]) {
                                            for (var A = j.slice(), D = 0, B = l.excludes[e].length; D < B; D++) {
                                                var C = l.excludes[e][D].toString().split(":");
                                                s.length == C[1] && j.splice(j.indexOf(C[0]), 1);
                                            }
                                            0 === j.length && (delete l.excludes[e], j = A);
                                        }
                                        (!0 === u.keepStatic || isFinite(parseInt(u.keepStatic)) && E >= u.keepStatic) && (j = j.slice(0, 1));
                                        for (var R = 0; R < j.length; R++) {
                                            O = parseInt(j[R]), m = [], i = "string" == typeof _ && x(h, O, S) || T.slice();
                                            var L = y.matches[O];
                                            if (L && c(L, [ O ].concat(s), p)) r = !0; else if (0 === R && (M = !0), L && L.matches && L.matches.length > y.matches[0].matches.length) break;
                                            n = m.slice(), h = E, m = [];
                                            for (var F = 0; F < n.length; F++) {
                                                var I = n[F], N = !1;
                                                I.match.jit = I.match.jit || M, I.alternation = I.alternation || S, P(I);
                                                for (var V = 0; V < k.length; V++) {
                                                    var G = k[V];
                                                    if ("string" != typeof _ || void 0 !== I.alternation && j.includes(I.locator[I.alternation].toString())) {
                                                        if (I.match.nativeDef === G.match.nativeDef) {
                                                            N = !0, P(G, I);
                                                            break;
                                                        }
                                                        if (f(I, G, u)) {
                                                            P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I));
                                                            break;
                                                        }
                                                        if (f(G, I, u)) {
                                                            P(G, I);
                                                            break;
                                                        }
                                                        if (v = G, !0 === (a = I).match.static && !0 !== v.match.static && v.match.fn.test(a.match.def, l, e, !1, u, !1)) {
                                                            w(I, G) || void 0 !== d.inputmask.userOptions.keepStatic ? P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I)) : u.keepStatic = !0;
                                                            break;
                                                        }
                                                    }
                                                }
                                                N || k.push(I);
                                            }
                                        }
                                        m = b.concat(k), h = e, g = m.length > 0, r = k.length > 0, i = T.slice();
                                    } else r = c(y.matches[_] || t.matches[_], [ _ ].concat(s), p);
                                    if (r) return !0;
                                }();
                                if (r.isQuantifier && p !== t.matches[t.matches.indexOf(r) - 1]) return function() {
                                    for (var a = r, o = !1, f = i.length > 0 ? i.shift() : 0; f < (isNaN(a.quantifier.max) ? f + 1 : a.quantifier.max) && h <= e; f++) {
                                        var d = t.matches[t.matches.indexOf(a) - 1];
                                        if (r = c(d, [ f ].concat(s), d)) {
                                            if (m.forEach((function(t, i) {
                                                (n = b(d, t.match) ? t.match : m[m.length - 1].match).optionalQuantifier = f >= a.quantifier.min, 
                                                n.jit = (f + 1) * (d.matches.indexOf(n) + 1) > a.quantifier.jit, n.optionalQuantifier && v(n, d) && (g = !0, 
                                                h = e, u.greedy && null == l.validPositions[e - 1] && f > a.quantifier.min && -1 != [ "*", "+" ].indexOf(a.quantifier.max) && (m.pop(), 
                                                y = void 0), o = !0, r = !1), !o && n.jit && (l.jitOffset[e] = d.matches.length - d.matches.indexOf(n));
                                            })), o) break;
                                            return !0;
                                        }
                                    }
                                }();
                                if (r = k(r, i, s, p)) return !0;
                            } else h++;
                        }
                        for (var p = i.length > 0 ? i.shift() : 0; p < t.matches.length; p++) if (!0 !== t.matches[p].isQuantifier) {
                            var v = c(t.matches[p], [ p ].concat(r), s);
                            if (v && h === e) return v;
                            if (h > e) break;
                        }
                    }
                    function b(e, t) {
                        var i = -1 != e.matches.indexOf(t);
                        return i || e.matches.forEach((function(e, n) {
                            void 0 === e.matches || i || (i = b(e, t));
                        })), i;
                    }
                    if (e > -1) {
                        if (void 0 === t) {
                            for (var x, P = e - 1; void 0 === (x = l.validPositions[P] || l.tests[P]) && P > -1; ) P--;
                            void 0 !== x && P > -1 && (v = function(e, t) {
                                var i, n = [];
                                return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === u.keepStatic ? 0 === (n = c.call(o, e, t.slice()).locator.slice()).length && (n = t[0].locator.slice()) : t.forEach((function(e) {
                                    "" !== e.def && (0 === n.length ? (i = e.alternation, n = e.locator.slice()) : e.locator[i] && -1 === n[i].toString().indexOf(e.locator[i]) && (n[i] += "," + e.locator[i]));
                                }))), n;
                            }(P, x), y = v.join(""), h = P);
                        }
                        if (l.tests[e] && l.tests[e][0].cd === y) return l.tests[e];
                        for (var w = v.shift(); w < p.length; w++) {
                            if (k(p[w], v, [ w ]) && h === e || h > e) break;
                        }
                    }
                    return (0 === m.length || g) && m.push({
                        match: {
                            fn: null,
                            static: !0,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: y
                    }), void 0 !== t && l.tests[e] ? r = s.extend(!0, [], m) : (l.tests[e] = s.extend(!0, [], m), 
                    r = l.tests[e]), m.forEach((function(e) {
                        e.match.optionality = e.match.defOptionality || !1;
                    })), r;
                }
            },
            7215: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                    for (var n, a = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], s = 0; s < o.length; s++) -1 !== (n = e.indexOf(o[s])) && e.splice(n, 1);
                    for (var l = 0; l < e.length; l++) if (a.includes(e[l])) {
                        r = !0;
                        break;
                    }
                    return r;
                }, t.handleRemove = function(e, t, i, o, l) {
                    var c = this, u = this.maskset, f = this.opts;
                    if ((f.numericInput || c.isRTL) && (t === a.keys.Backspace ? t = a.keys.Delete : t === a.keys.Delete && (t = a.keys.Backspace), 
                    c.isRTL)) {
                        var d = i.end;
                        i.end = i.begin, i.begin = d;
                    }
                    var p, h = r.getLastValidPosition.call(c, void 0, !0);
                    i.end >= r.getBuffer.call(c).length && h >= i.end && (i.end = h + 1);
                    t === a.keys.Backspace ? i.end - i.begin < 1 && (i.begin = r.seekPrevious.call(c, i.begin)) : t === a.keys.Delete && i.begin === i.end && (i.end = r.isMask.call(c, i.end, !0, !0) ? i.end + 1 : r.seekNext.call(c, i.end) + 1);
                    if (!1 !== (p = v.call(c, i))) {
                        if (!0 !== o && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(c, i.begin).match.def.indexOf("|")) {
                            var m = s.call(c, !0);
                            if (m) {
                                var g = void 0 !== m.caret ? m.caret : m.pos ? r.seekNext.call(c, m.pos.begin ? m.pos.begin : m.pos) : r.getLastValidPosition.call(c, -1, !0);
                                (t !== a.keys.Delete || i.begin > g) && i.begin;
                            }
                        }
                        !0 !== o && (u.p = t === a.keys.Delete ? i.begin + p : i.begin, u.p = r.determineNewCaretPosition.call(c, {
                            begin: u.p,
                            end: u.p
                        }, !1, !1 === f.insertMode && t === a.keys.Backspace ? "none" : void 0).begin);
                    }
                }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = p, 
                t.revalidateMask = v;
                var n = i(4713), a = i(2839), r = i(8711), o = i(6030);
                function s(e, t, i, a, o, l) {
                    var c, u, d, p, h, v, m, g, y, k, b, x = this, P = this.dependencyLib, w = this.opts, S = x.maskset, M = P.extend(!0, [], S.validPositions), _ = P.extend(!0, {}, S.tests), O = !1, E = !1, T = void 0 !== o ? o : r.getLastValidPosition.call(x);
                    if (l && (k = l.begin, b = l.end, l.begin > l.end && (k = l.end, b = l.begin)), 
                    -1 === T && void 0 === o) c = 0, u = (p = n.getTest.call(x, c)).alternation; else for (;T >= 0; T--) if ((d = S.validPositions[T]) && void 0 !== d.alternation) {
                        if (T <= (e || 0) && p && p.locator[d.alternation] !== d.locator[d.alternation]) break;
                        c = T, u = S.validPositions[c].alternation, p = d;
                    }
                    if (void 0 !== u) {
                        m = parseInt(c), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, 
                        n.getDecisionTaker)(p) + ":" + p.alternation);
                        var j = [], A = -1;
                        for (h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (j.push(t), 
                        A = j.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < k || h >= b) && j.push(v.input), 
                        delete S.validPositions[h];
                        for (-1 === A && void 0 !== t && (j.push(t), A = j.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                            for (S.tests = {}, r.resetMaskSet.call(x, !0), O = !0, h = 0; h < j.length && (g = O.caret || r.getLastValidPosition.call(x, void 0, !0) + 1, 
                            y = j[h], O = f.call(x, g, y, !1, a, !0)); h++) h === A && (E = O), 1 == e && O && (E = {
                                caretPos: h
                            });
                            if (O) break;
                            if (r.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, [], M), 
                            S.tests = P.extend(!0, {}, _), !S.excludes[m]) {
                                E = s.call(x, e, t, i, a, m - 1, l);
                                break;
                            }
                            var D = (0, n.getDecisionTaker)(p);
                            if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                                E = s.call(x, e, t, i, a, m - 1, l);
                                break;
                            }
                            for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                        }
                    }
                    return E && !1 === w.keepStatic || delete S.excludes[m], E;
                }
                function l(e, t, i) {
                    var n = this.opts, r = this.maskset;
                    switch (n.casing || t.casing) {
                      case "upper":
                        e = e.toUpperCase();
                        break;

                      case "lower":
                        e = e.toLowerCase();
                        break;

                      case "title":
                        var o = r.validPositions[i - 1];
                        e = 0 === i || o && o.input === String.fromCharCode(a.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                        break;

                      default:
                        if ("function" == typeof n.casing) {
                            var s = Array.prototype.slice.call(arguments);
                            s.push(r.validPositions), e = n.casing.apply(this, s);
                        }
                    }
                    return e;
                }
                function c(e) {
                    var t = this, i = this.opts, a = this.maskset;
                    if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                    if ("*" !== i.repeat) {
                        var o = !1, s = r.determineLastRequiredPosition.call(t, !0), l = r.seekPrevious.call(t, s.l);
                        if (void 0 === s.def || s.def.newBlockMarker || s.def.optionality || s.def.optionalQuantifier) {
                            o = !0;
                            for (var c = 0; c <= l; c++) {
                                var u = n.getTestTemplate.call(t, c).match;
                                if (!0 !== u.static && void 0 === a.validPositions[c] && !0 !== u.optionality && !0 !== u.optionalQuantifier || !0 === u.static && e[c] !== n.getPlaceholder.call(t, c, u)) {
                                    o = !1;
                                    break;
                                }
                            }
                        }
                        return o;
                    }
                }
                function u(e) {
                    var t = this.opts.insertMode ? 0 : 1;
                    return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                }
                function f(e, t, i, a, o, d, m) {
                    var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
                    i = !0 === i;
                    var x = e;
                    function P(e) {
                        if (void 0 !== e) {
                            if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                            e.remove.sort((function(e, t) {
                                return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                            })).forEach((function(e) {
                                v.call(g, {
                                    begin: e,
                                    end: e + 1
                                });
                            })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                            e.insert.sort((function(e, t) {
                                return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                            })).forEach((function(e) {
                                "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                            })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                var t = e.refreshFromBuffer;
                                p.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                            }
                            void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                        }
                        return e;
                    }
                    function w(t, i, o) {
                        var s = !1;
                        return n.getTests.call(g, t).every((function(c, f) {
                            var d = c.match;
                            if (r.getBuffer.call(g, !0), !1 !== (s = (!d.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, o, k, u.call(g, e)) : (i === d.def || i === k.skipOptionalPartCharacter) && "" !== d.def && {
                                c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                                pos: t
                            }))) {
                                var p = void 0 !== s.c ? s.c : i, h = t;
                                return p = p === k.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, 
                                !0 !== (s = P(s)) && void 0 !== s.pos && s.pos !== t && (h = s.pos), !0 !== s && void 0 === s.pos && void 0 === s.c ? !1 : (!1 === v.call(g, e, y.extend({}, c, {
                                    input: l.call(g, p, d, h)
                                }), a, h) && (s = !1), !1);
                            }
                            return !0;
                        })), s;
                    }
                    void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                    var S = !0, M = y.extend(!0, {}, b.validPositions);
                    if (!1 === k.keepStatic && void 0 !== b.excludes[x] && !0 !== o && !0 !== a) for (var _ = x; _ < (g.isRTL ? e.begin : e.end); _++) void 0 !== b.excludes[_] && (b.excludes[_] = void 0, 
                    delete b.tests[_]);
                    if ("function" == typeof k.preValidation && !0 !== a && !0 !== d && (S = P(S = k.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), k, b, e, i || o))), 
                    !0 === S) {
                        if (S = w(x, t, i), (!i || !0 === a) && !1 === S && !0 !== d) {
                            var O = b.validPositions[x];
                            if (!O || !0 !== O.match.static || O.match.def !== t && t !== k.skipOptionalPartCharacter) {
                                if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                                    var E = !1;
                                    if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== o && (S.caret = x), 
                                    E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) for (var T = x + 1, j = r.seekNext.call(g, x, !1, 0 !== x); T <= j; T++) if (!1 !== (S = w(T, t, i))) {
                                        S = h.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                        break;
                                    }
                                }
                            } else S = {
                                caret: r.seekNext.call(g, x)
                            };
                        }
                        g.hasAlternator && !0 !== o && !i && (!1 === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = s.call(g, x, t, i, a, void 0, e) : (u.call(g, e) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && !0 !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, !0) > x) && (S = s.call(g, !0))), 
                        !0 === S && (S = {
                            pos: x
                        });
                    }
                    if ("function" == typeof k.postValidation && !0 !== a && !0 !== d) {
                        var A = k.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, k, b, i, m);
                        void 0 !== A && (S = !0 === A ? S : A);
                    }
                    S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === d ? (r.resetMaskSet.call(g, !0), 
                    b.validPositions = y.extend(!0, [], M)) : h.call(g, void 0, x, !0);
                    var D = P(S);
                    void 0 !== g.maxLength && (r.getBuffer.call(g).length > g.maxLength && !a && (r.resetMaskSet.call(g, !0), 
                    b.validPositions = y.extend(!0, [], M), D = !1));
                    return D;
                }
                function d(e, t, i) {
                    for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), s = 0; s < o.length; s++) {
                        if (o[s].match && (o[s].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[s].match.nativeDef === t.match.nativeDef || i.regex && !o[s].match.static && o[s].match.fn.test(t.input, a, e, !1, i))) {
                            r = !0;
                            break;
                        }
                        if (o[s].match && o[s].match.def === t.match.nativeDef) {
                            r = void 0;
                            break;
                        }
                    }
                    return !1 === r && void 0 !== a.jitOffset[e] && (r = d.call(this, e + a.jitOffset[e], t, i)), 
                    r;
                }
                function p(e, t, i) {
                    var n, a, s = this, l = this.maskset, c = this.opts, u = this.dependencyLib, f = c.skipOptionalPartCharacter, d = s.isRTL ? i.slice().reverse() : i;
                    if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(s), l.tests = {}, 
                    e = 0, t = i.length, a = r.determineNewCaretPosition.call(s, {
                        begin: 0,
                        end: 0
                    }, !1).begin; else {
                        for (n = e; n < t; n++) delete l.validPositions[n];
                        a = e;
                    }
                    var p = new u.Event("keypress");
                    for (n = e; n < t; n++) {
                        p.key = d[n].toString(), s.ignorable = !1;
                        var h = o.EventHandlers.keypressEvent.call(s, p, !0, !1, !1, a);
                        !1 !== h && void 0 !== h && (a = h.forwardPosition);
                    }
                    c.skipOptionalPartCharacter = f;
                }
                function h(e, t, i) {
                    var a = this, o = this.maskset, s = this.dependencyLib;
                    if (void 0 === e) for (e = t - 1; e > 0 && !o.validPositions[e]; e--) ;
                    for (var l = e; l < t; l++) {
                        if (void 0 === o.validPositions[l] && !r.isMask.call(a, l, !1)) if (0 == l ? n.getTest.call(a, l) : o.validPositions[l - 1]) {
                            var c = n.getTests.call(a, l).slice();
                            "" === c[c.length - 1].match.def && c.pop();
                            var u, d = n.determineTestTemplate.call(a, l, c);
                            if (d && (!0 !== d.match.jit || "master" === d.match.newBlockMarker && (u = o.validPositions[l + 1]) && !0 === u.match.optionalQuantifier) && ((d = s.extend({}, d, {
                                input: n.getPlaceholder.call(a, l, d.match, !0) || d.match.def
                            })).generatedInput = !0, v.call(a, l, d, !0), !0 !== i)) {
                                var p = o.validPositions[t].input;
                                return o.validPositions[t] = void 0, f.call(a, t, p, !0, !0);
                            }
                        }
                    }
                }
                function v(e, t, i, a) {
                    var o = this, s = this.maskset, l = this.opts, c = this.dependencyLib;
                    function u(e, t, i) {
                        var n = t[e];
                        if (void 0 !== n && !0 === n.match.static && !0 !== n.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                            var a = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                            return a && r;
                        }
                        return !1;
                    }
                    var p = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                    if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, void 0 === i && (h !== v || l.insertMode && void 0 !== s.validPositions[a] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
                        var g, y = c.extend(!0, {}, s.validPositions), k = r.getLastValidPosition.call(o, void 0, !0);
                        for (s.p = h, g = k; g >= h; g--) delete s.validPositions[g], void 0 === t && delete s.tests[g + 1];
                        var b, x, P = a, w = P;
                        for (t && (s.validPositions[a] = c.extend(!0, {}, t), w++, P++), g = t ? v : v - 1; g <= k; g++) {
                            if (void 0 !== (b = y[g]) && !0 !== b.generatedInput && (g >= v || g >= h && u(g, y, {
                                begin: h,
                                end: v
                            }))) {
                                for (;"" !== n.getTest.call(o, w).match.def; ) {
                                    if (!1 !== (x = d.call(o, w, b, l)) || "+" === b.match.def) {
                                        "+" === b.match.def && r.getBuffer.call(o, !0);
                                        var S = f.call(o, w, b.input, "+" !== b.match.def, !0);
                                        if (m = !1 !== S, P = (S.pos || w) + 1, !m && x) break;
                                    } else m = !1;
                                    if (m) {
                                        void 0 === t && b.match.static && g === e.begin && p++;
                                        break;
                                    }
                                    if (!m && r.getBuffer.call(o), w > s.maskLength) break;
                                    w++;
                                }
                                "" == n.getTest.call(o, w).match.def && (m = !1), w = P;
                            }
                            if (!m) break;
                        }
                        if (!m) return s.validPositions = c.extend(!0, [], y), r.resetMaskSet.call(o, !0), 
                        !1;
                    } else t && n.getTest.call(o, a).match.cd === t.match.cd && (s.validPositions[a] = c.extend(!0, {}, t));
                    return r.resetMaskSet.call(o, !0), p;
                }
            }
        }, t = {};
        function i(n) {
            var a = t[n];
            if (void 0 !== a) return a.exports;
            var r = t[n] = {
                exports: {}
            };
            return e[n](r, r.exports, i), r.exports;
        }
        var n = {};
        return function() {
            var e, t = n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, i(7149), i(3194), i(9302), i(4013), i(3851), i(219), i(207), 
            i(5296);
            var a = ((e = i(2394)) && e.__esModule ? e : {
                default: e
            }).default;
            t.default = a;
        }(), n;
    }();
}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./resources/js/modules/inputmask.js ***!
  \*******************************************/
window.Inputmask = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdHQUFnRztBQUN0SDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOzs7Ozs7VUNuckdEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7OztBQ3RCQUEsTUFBTSxDQUFDQyxTQUFTLEdBQUdDLG1CQUFPLENBQUMsNkRBQVcsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9kaXN0L2lucHV0bWFzay5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21vZHVsZXMvaW5wdXRtYXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogZGlzdC9pbnB1dG1hc2tcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Sb2JpbkhlcmJvdHMvSW5wdXRtYXNrXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAgLSAyMDIzIFJvYmluIEhlcmJvdHNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogVmVyc2lvbjogNS4wLjhcbiAqL1xuIWZ1bmN0aW9uKGUsIHQpIHtcbiAgICBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gdCgpOyBlbHNlIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoW10sIHQpOyBlbHNlIHtcbiAgICAgICAgdmFyIGkgPSB0KCk7XG4gICAgICAgIGZvciAodmFyIG4gaW4gaSkgKFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzIDogZSlbbl0gPSBpW25dO1xuICAgIH1cbn0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiA/IHNlbGYgOiB0aGlzLCAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIGUgPSB7XG4gICAgICAgICAgICA4NzQxOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmRlZmF1bHQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAhKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIHdpbmRvdyB8fCAhd2luZG93LmRvY3VtZW50IHx8ICF3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdC5kZWZhdWx0ID0gaTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzOTc2OiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmRlZmF1bHQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBpKDI4MzkpLCBhID0ge1xuICAgICAgICAgICAgICAgICAgICBfbWF4VGVzdFBvczogNTAwLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJfXCIsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsbWFya2VyOiBbIFwiW1wiLCBcIl1cIiBdLFxuICAgICAgICAgICAgICAgICAgICBxdWFudGlmaWVybWFya2VyOiBbIFwie1wiLCBcIn1cIiBdLFxuICAgICAgICAgICAgICAgICAgICBncm91cG1hcmtlcjogWyBcIihcIiwgXCIpXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRvcm1hcmtlcjogXCJ8XCIsXG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZUNoYXI6IFwiXFxcXFwiLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWdleDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgb25jb21wbGV0ZTogZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgICAgICAgICAgICAgb25pbmNvbXBsZXRlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgICAgICAgICBvbmNsZWFyZWQ6IGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdDogMCxcbiAgICAgICAgICAgICAgICAgICAgZ3JlZWR5OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b1VubWFzazogITEsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZU1hc2tPblN1Ym1pdDogITEsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyTWFza09uTG9zdEZvY3VzOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0TW9kZTogITAsXG4gICAgICAgICAgICAgICAgICAgIGluc2VydE1vZGVWaXN1YWw6ICEwLFxuICAgICAgICAgICAgICAgICAgICBjbGVhckluY29tcGxldGU6ICExLFxuICAgICAgICAgICAgICAgICAgICBhbGlhczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgICAgICAgICBvbkJlZm9yZU1hc2s6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQub25CZWZvcmVNYXNrID8gdC5vbkJlZm9yZU1hc2suY2FsbCh0aGlzLCBlLCB0KSA6IGU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uQmVmb3JlV3JpdGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzaG93TWFza09uRm9jdXM6ICEwLFxuICAgICAgICAgICAgICAgICAgICBzaG93TWFza09uSG92ZXI6ICEwLFxuICAgICAgICAgICAgICAgICAgICBvbktleVZhbGlkYXRpb246IGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICAgICAgICAgIHNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI6IFwiIFwiLFxuICAgICAgICAgICAgICAgICAgICBudW1lcmljSW5wdXQ6ICExLFxuICAgICAgICAgICAgICAgICAgICByaWdodEFsaWduOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgdW5kb09uRXNjYXBlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXhQb2ludDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgX3JhZGl4RGFuY2U6ICExLFxuICAgICAgICAgICAgICAgICAgICBncm91cFNlcGFyYXRvcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAga2VlcFN0YXRpYzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25DYXJldE9uVGFiOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgdGFiVGhyb3VnaDogITEsXG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzSW5wdXRUeXBlOiBbIFwidGV4dFwiLCBcInRlbFwiLCBcInVybFwiLCBcInBhc3N3b3JkXCIsIFwic2VhcmNoXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgaWdub3JhYmxlczogWyBuLmtleXMuQmFja3NwYWNlLCBuLmtleXMuVGFiLCBuLmtleXMuUGF1c2UsIG4ua2V5cy5Fc2NhcGUsIG4ua2V5cy5QYWdlVXAsIG4ua2V5cy5QYWdlRG93biwgbi5rZXlzLkVuZCwgbi5rZXlzLkhvbWUsIG4ua2V5cy5BcnJvd0xlZnQsIG4ua2V5cy5BcnJvd1VwLCBuLmtleXMuQXJyb3dSaWdodCwgbi5rZXlzLkFycm93RG93biwgbi5rZXlzLkluc2VydCwgbi5rZXlzLkRlbGV0ZSwgbi5rZXlzLkNvbnRleHRNZW51LCBuLmtleXMuRjEsIG4ua2V5cy5GMiwgbi5rZXlzLkYzLCBuLmtleXMuRjQsIG4ua2V5cy5GNSwgbi5rZXlzLkY2LCBuLmtleXMuRjcsIG4ua2V5cy5GOCwgbi5rZXlzLkY5LCBuLmtleXMuRjEwLCBuLmtleXMuRjExLCBuLmtleXMuRjEyLCBuLmtleXMuUHJvY2Vzcywgbi5rZXlzLlVuaWRlbnRpZmllZCwgbi5rZXlzLlNoaWZ0LCBuLmtleXMuQ29udHJvbCwgbi5rZXlzLkFsdCwgbi5rZXlzLlRhYiwgbi5rZXlzLkFsdEdyYXBoLCBuLmtleXMuQ2Fwc0xvY2sgXSxcbiAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcHJlVmFsaWRhdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0RlZmluaXRpb25TeW1ib2w6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgaml0TWFza2luZzogITEsXG4gICAgICAgICAgICAgICAgICAgIG51bGxhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFdmVudE9ubHk6ICExLFxuICAgICAgICAgICAgICAgICAgICBub1ZhbHVlUGF0Y2hpbmc6ICExLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNhcmV0T25DbGljazogXCJsdnBcIixcbiAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBpbXBvcnREYXRhQXR0cmlidXRlczogITAsXG4gICAgICAgICAgICAgICAgICAgIHNoaWZ0UG9zaXRpb25zOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgdXNlUHJvdG90eXBlRGVmaW5pdGlvbnM6ICEwLFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXZlbnRUaW1lT3V0OiAzZTMsXG4gICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGVzOiB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdC5kZWZhdWx0ID0gYTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA3MzkyOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmRlZmF1bHQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdC5kZWZhdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICA5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOVxcdWZmMTAtXFx1ZmYxOV1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TeW1ib2w6IFwiKlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbQS1aYS16XFx1MDQxMC1cXHUwNDRmXFx1MDQwMVxcdTA0NTFcXHhjMC1cXHhmZlxceGI1XVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN5bWJvbDogXCIqXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCIqXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05XFx1ZmYxMC1cXHVmZjE5QS1aYS16XFx1MDQxMC1cXHUwNDRmXFx1MDQwMVxcdTA0NTFcXHhjMC1cXHhmZlxceGI1XVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDI1MzogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5kZWZhdWx0ID0gZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBpKSByZXR1cm4gZS5fX2RhdGEgPyBlLl9fZGF0YVt0XSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGUuX19kYXRhID0gZS5fX2RhdGEgfHwge30sIGUuX19kYXRhW3RdID0gaTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM3NzY6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuRXZlbnQgPSB2b2lkIDAsIHQub2ZmID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSwgbjtcbiAgICAgICAgICAgICAgICAgICAgZih0aGlzWzBdKSAmJiBlICYmIChpID0gdGhpc1swXS5ldmVudFJlZ2lzdHJ5LCBuID0gdGhpc1swXSwgZS5zcGxpdChcIiBcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBsKGUuc3BsaXQoXCIuXCIpLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihlLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEsIHIsIG8gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5sZW5ndGggPiAwKSBpZiAodm9pZCAwID09PSB0KSBmb3IgKGEgPSAwLCByID0gaVtlXVtuXS5sZW5ndGg7IGEgPCByOyBhKyspIG8ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2OiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG4gJiYgbi5sZW5ndGggPiAwID8gbiA6IFwiZ2xvYmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGlbZV1bbl1bYV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgZWxzZSBvLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldjogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBuICYmIG4ubGVuZ3RoID4gMCA/IG4gOiBcImdsb2JhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IGVsc2UgaWYgKG4ubGVuZ3RoID4gMCkgZm9yICh2YXIgcyBpbiBpKSBmb3IgKHZhciBsIGluIGlbc10pIGlmIChsID09PSBuKSBpZiAodm9pZCAwID09PSB0KSBmb3IgKGEgPSAwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gaVtzXVtsXS5sZW5ndGg7IGEgPCByOyBhKyspIG8ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2OiBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGlbc11bbF1bYV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgZWxzZSBvLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldjogcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9KShhWzBdLCBhWzFdKS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlLmV2LCBhID0gZS5oYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbihlLCB0LCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlIGluIGkgPT0gMSkgaWYgKG4ucmVtb3ZlRXZlbnRMaXN0ZW5lciA/IG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCBhLCAhMSkgOiBuLmRldGFjaEV2ZW50ICYmIG4uZGV0YWNoRXZlbnQoXCJvblwiLmNvbmNhdChlKSwgYSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdsb2JhbFwiID09PSB0KSBmb3IgKHZhciByIGluIGlbZV0pIGlbZV1bcl0uc3BsaWNlKGlbZV1bcl0uaW5kZXhPZihhKSwgMSk7IGVsc2UgaVtlXVt0XS5zcGxpY2UoaVtlXVt0XS5pbmRleE9mKGEpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHQsIGUubmFtZXNwYWNlLCBhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfSwgdC5vbiA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGYodGhpc1swXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gdGhpc1swXS5ldmVudFJlZ2lzdHJ5LCBuID0gdGhpc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3BsaXQoXCIgXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGwoZS5zcGxpdChcIi5cIiksIDIpLCByID0gYVswXSwgbyA9IGFbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGUsIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5hZGRFdmVudExpc3RlbmVyID8gbi5hZGRFdmVudExpc3RlbmVyKGUsIHQsICExKSA6IG4uYXR0YWNoRXZlbnQgJiYgbi5hdHRhY2hFdmVudChcIm9uXCIuY29uY2F0KGUpLCB0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlbZV0gPSBpW2VdIHx8IHt9LCBpW2VdW2FdID0gaVtlXVthXSB8fCBbXSwgaVtlXVthXS5wdXNoKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0ociwgdm9pZCAwID09PSBvID8gXCJnbG9iYWxcIiA6IG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH0sIHQudHJpZ2dlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmKHRoaXNbMF0pKSBmb3IgKHZhciBpID0gdGhpc1swXS5ldmVudFJlZ2lzdHJ5LCBuID0gdGhpc1swXSwgciA9IFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgPyBlLnNwbGl0KFwiIFwiKSA6IFsgZS50eXBlIF0sIHMgPSAwOyBzIDwgci5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSByW3NdLnNwbGl0KFwiLlwiKSwgYyA9IGxbMF0sIHUgPSBsWzFdIHx8IFwiZ2xvYmFsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBkb2N1bWVudCAmJiBcImdsb2JhbFwiID09PSB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQsIHAgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zZWQ6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGFyZ3VtZW50c1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJpbnB1dFwiID09PSBjKSBwLmlucHV0VHlwZSA9IFwiaW5zZXJ0VGV4dFwiLCBkID0gbmV3IElucHV0RXZlbnQoYywgcCk7IGVsc2UgZCA9IG5ldyBDdXN0b21FdmVudChjLCBwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpKS5pbml0Q3VzdG9tRXZlbnQoYywgcC5idWJibGVzLCBwLmNhbmNlbGFibGUsIHAuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnR5cGUgJiYgKDAsIGEuZGVmYXVsdCkoZCwgZSksIG4uZGlzcGF0Y2hFdmVudChkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgKGQgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpKS5ldmVudFR5cGUgPSBjLCBkLmRldGFpbCA9IGFyZ3VtZW50c1sxXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50eXBlICYmICgwLCBhLmRlZmF1bHQpKGQsIGUpLCBuLmZpcmVFdmVudChcIm9uXCIgKyBkLmV2ZW50VHlwZSwgZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZvaWQgMCAhPT0gaVtjXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXSA9IGFyZ3VtZW50c1swXS50eXBlID8gYXJndW1lbnRzWzBdIDogby5kZWZhdWx0LkV2ZW50KGFyZ3VtZW50c1swXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXS5kZXRhaWwgPSBhcmd1bWVudHMuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBpW2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcImdsb2JhbFwiID09PSB1ID8gT2JqZWN0LnZhbHVlcyhoKS5mbGF0KCkgOiBoW3VdKS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmFwcGx5KG4sIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBuLCBhID0gdShpKDYwMCkpLCByID0gdShpKDkzODApKSwgbyA9IHUoaSg0OTYzKSksIHMgPSB1KGkoODc0MSkpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGwoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICB9KGUpIHx8IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gbnVsbCA9PSBlID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBlW1N5bWJvbC5pdGVyYXRvcl0gfHwgZVtcIkBAaXRlcmF0b3JcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4sIGEsIHIsIG8sIHMgPSBbXSwgbCA9ICEwLCBjID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPSAoaSA9IGkuY2FsbChlKSkubmV4dCwgMCA9PT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdChpKSAhPT0gaSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZm9yICg7IShsID0gKG4gPSByLmNhbGwoaSkpLmRvbmUpICYmIChzLnB1c2gobi52YWx1ZSksIHMubGVuZ3RoICE9PSB0KTsgbCA9ICEwKSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gITAsIGEgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWwgJiYgbnVsbCAhPSBpLnJldHVybiAmJiAobyA9IGkucmV0dXJuKCksIE9iamVjdChvKSAhPT0gbykpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjKSB0aHJvdyBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KGUsIHQpIHx8IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpIHJldHVybiBjKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJPYmplY3RcIiA9PT0gaSAmJiBlLmNvbnN0cnVjdG9yICYmIChpID0gZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIk1hcFwiID09PSBpIHx8IFwiU2V0XCIgPT09IGkpIHJldHVybiBBcnJheS5mcm9tKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiQXJndW1lbnRzXCIgPT09IGkgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QoaSkpIHJldHVybiBjKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9KGUsIHQpIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgKG51bGwgPT0gdCB8fCB0ID4gZS5sZW5ndGgpICYmICh0ID0gZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IG5ldyBBcnJheSh0KTsgaSA8IHQ7IGkrKykgbltpXSA9IGVbaV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdC5FdmVudCA9IG4sIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygci5kZWZhdWx0LkN1c3RvbUV2ZW50ID8gdC5FdmVudCA9IG4gPSByLmRlZmF1bHQuQ3VzdG9tRXZlbnQgOiBzLmRlZmF1bHQgJiYgKHQuRXZlbnQgPSBuID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB0ID0gdCB8fCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9zZWQ6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB2b2lkIDBcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaS5pbml0Q3VzdG9tRXZlbnQoZSwgdC5idWJibGVzLCB0LmNhbmNlbGFibGUsIHQuZGV0YWlsKSwgaTtcbiAgICAgICAgICAgICAgICB9LCBuLnByb3RvdHlwZSA9IHIuZGVmYXVsdC5FdmVudC5wcm90b3R5cGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDYwMDogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGkoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIGUuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBlICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9LCBpKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0LCBuLCBhLCByLCBvLCBzLCBsID0gYXJndW1lbnRzWzBdIHx8IHt9LCBjID0gMSwgdSA9IGFyZ3VtZW50cy5sZW5ndGgsIGYgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgXCJib29sZWFuXCIgPT0gdHlwZW9mIGwgJiYgKGYgPSBsLCBsID0gYXJndW1lbnRzW2NdIHx8IHt9LCBjKyspO1xuICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiICE9PSBpKGwpICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgbCAmJiAobCA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7YyA8IHU7IGMrKykgaWYgKG51bGwgIT0gKHQgPSBhcmd1bWVudHNbY10pKSBmb3IgKG4gaW4gdCkgYSA9IGxbbl0sIGwgIT09IChyID0gdFtuXSkgJiYgKGYgJiYgciAmJiAoXCJbb2JqZWN0IE9iamVjdF1cIiA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHIpIHx8IChvID0gQXJyYXkuaXNBcnJheShyKSkpID8gKG8gPyAobyA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgcyA9IGEgJiYgQXJyYXkuaXNBcnJheShhKSA/IGEgOiBbXSkgOiBzID0gYSAmJiBcIltvYmplY3QgT2JqZWN0XVwiID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkgPyBhIDoge30sIFxuICAgICAgICAgICAgICAgICAgICBsW25dID0gZShmLCBzLCByKSkgOiB2b2lkIDAgIT09IHIgJiYgKGxbbl0gPSByKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNDk2MzogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5kZWZhdWx0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBuID0gcyhpKDYwMCkpLCBhID0gcyhpKDkzODApKSwgciA9IHMoaSgyNTMpKSwgbyA9IGkoMzc3Nik7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcyhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBsID0gYS5kZWZhdWx0LmRvY3VtZW50O1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIGMgPyBlIDogdGhpcyBpbnN0YW5jZW9mIGMgPyB2b2lkIChudWxsICE9IGUgJiYgZSAhPT0gYS5kZWZhdWx0ICYmICh0aGlzWzBdID0gZS5ub2RlTmFtZSA/IGUgOiB2b2lkIDAgIT09IGVbMF0gJiYgZVswXS5ub2RlTmFtZSA/IGVbMF0gOiBsLnF1ZXJ5U2VsZWN0b3IoZSksIFxuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IHRoaXNbMF0gJiYgbnVsbCAhPT0gdGhpc1swXSAmJiAodGhpc1swXS5ldmVudFJlZ2lzdHJ5ID0gdGhpc1swXS5ldmVudFJlZ2lzdHJ5IHx8IHt9KSkpIDogbmV3IGMoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGMucHJvdG90eXBlID0ge1xuICAgICAgICAgICAgICAgICAgICBvbjogby5vbixcbiAgICAgICAgICAgICAgICAgICAgb2ZmOiBvLm9mZixcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogby50cmlnZ2VyXG4gICAgICAgICAgICAgICAgfSwgYy5leHRlbmQgPSBuLmRlZmF1bHQsIGMuZGF0YSA9IHIuZGVmYXVsdCwgYy5FdmVudCA9IG8uRXZlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIHUgPSBjO1xuICAgICAgICAgICAgICAgIHQuZGVmYXVsdCA9IHU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTg0NTogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5tb2JpbGUgPSB0LmlwaG9uZSA9IHQuaWUgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIG4sIGEgPSAobiA9IGkoOTM4MCkpICYmIG4uX19lc01vZHVsZSA/IG4gOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciByID0gYS5kZWZhdWx0Lm5hdmlnYXRvciAmJiBhLmRlZmF1bHQubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBcIlwiLCBvID0gci5pbmRleE9mKFwiTVNJRSBcIikgPiAwIHx8IHIuaW5kZXhPZihcIlRyaWRlbnQvXCIpID4gMCwgcyA9IG5hdmlnYXRvci51c2VyQWdlbnREYXRhICYmIG5hdmlnYXRvci51c2VyQWdlbnREYXRhLm1vYmlsZSB8fCBhLmRlZmF1bHQubmF2aWdhdG9yICYmIGEuZGVmYXVsdC5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgfHwgXCJvbnRvdWNoc3RhcnRcIiBpbiBhLmRlZmF1bHQsIGwgPSAvaXBob25lL2kudGVzdChyKTtcbiAgICAgICAgICAgICAgICB0LmlwaG9uZSA9IGwsIHQubW9iaWxlID0gcywgdC5pZSA9IG87XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzE4NDogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5kZWZhdWx0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5yZXBsYWNlKGksIFwiXFxcXCQxXCIpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBuZXcgUmVnRXhwKFwiKFxcXFxcIiArIFsgXCIvXCIsIFwiLlwiLCBcIipcIiwgXCIrXCIsIFwiP1wiLCBcInxcIiwgXCIoXCIsIFwiKVwiLCBcIltcIiwgXCJdXCIsIFwie1wiLCBcIn1cIiwgXCJcXFxcXCIsIFwiJFwiLCBcIl5cIiBdLmpvaW4oXCJ8XFxcXFwiKSArIFwiKVwiLCBcImdpbVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA2MDMwOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LkV2ZW50SGFuZGxlcnMgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBpKDg3MTEpLCBhID0gaSgyODM5KSwgciA9IGkoOTg0NSksIG8gPSBpKDcyMTUpLCBzID0gaSg3NzYwKSwgbCA9IGkoNDcxMyk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIGVbU3ltYm9sLml0ZXJhdG9yXSB8fCBlW1wiQEBpdGVyYXRvclwiXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlKSB8fCAoaSA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkgcmV0dXJuIHUoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT2JqZWN0XCIgPT09IGkgJiYgZS5jb25zdHJ1Y3RvciAmJiAoaSA9IGUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiTWFwXCIgPT09IGkgfHwgXCJTZXRcIiA9PT0gaSkgcmV0dXJuIEFycmF5LmZyb20oZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiQXJndW1lbnRzXCIgPT09IGkgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QoaSkpIHJldHVybiB1KGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShlKSkgfHwgdCAmJiBlICYmIFwibnVtYmVyXCIgPT0gdHlwZW9mIGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSAmJiAoZSA9IGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gMCwgYSA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgczogYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiA+PSBlLmxlbmd0aCA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZVtuKytdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmOiBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgciwgbyA9ICEwLCBzID0gITE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gaS5jYWxsKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gaS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8gPSBlLmRvbmUsIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAhMCwgciA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyB8fCBudWxsID09IGkucmV0dXJuIHx8IGkucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMpIHRocm93IHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1KGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgKG51bGwgPT0gdCB8fCB0ID4gZS5sZW5ndGgpICYmICh0ID0gZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IG5ldyBBcnJheSh0KTsgaSA8IHQ7IGkrKykgbltpXSA9IGVbaV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZiA9IHtcbiAgICAgICAgICAgICAgICAgICAga2V5RXZlbnQ6IGZ1bmN0aW9uKGUsIHQsIGksIGMsIHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5pbnB1dG1hc2ssIHAgPSBkLm9wdHMsIGggPSBkLmRlcGVuZGVuY3lMaWIsIHYgPSBkLm1hc2tzZXQsIG0gPSB0aGlzLCBnID0gaChtKSwgeSA9IGUua2V5LCBrID0gbi5jYXJldC5jYWxsKGQsIG0pLCBiID0gcC5vbktleURvd24uY2FsbCh0aGlzLCBlLCBuLmdldEJ1ZmZlci5jYWxsKGQpLCBrLCBwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGIpIHJldHVybiBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkgPT09IGEua2V5cy5CYWNrc3BhY2UgfHwgeSA9PT0gYS5rZXlzLkRlbGV0ZSB8fCByLmlwaG9uZSAmJiB5ID09PSBhLmtleXMuQkFDS1NQQUNFX1NBRkFSSSB8fCBlLmN0cmxLZXkgJiYgeSA9PT0gYS5rZXlzLnggJiYgIShcIm9uY3V0XCIgaW4gbSkpIGUucHJldmVudERlZmF1bHQoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvLmhhbmRsZVJlbW92ZS5jYWxsKGQsIG0sIHksIGspLCAoMCwgcy53cml0ZUJ1ZmZlcikobSwgbi5nZXRCdWZmZXIuY2FsbChkLCAhMCksIHYucCwgZSwgbS5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgIT09IG4uZ2V0QnVmZmVyLmNhbGwoZCkuam9pbihcIlwiKSk7IGVsc2UgaWYgKHkgPT09IGEua2V5cy5FbmQgfHwgeSA9PT0gYS5rZXlzLlBhZ2VEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gbi5zZWVrTmV4dC5jYWxsKGQsIG4uZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jYXJldC5jYWxsKGQsIG0sIGUuc2hpZnRLZXkgPyBrLmJlZ2luIDogeCwgeCwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHkgPT09IGEua2V5cy5Ib21lICYmICFlLnNoaWZ0S2V5IHx8IHkgPT09IGEua2V5cy5QYWdlVXAgPyAoZS5wcmV2ZW50RGVmYXVsdCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uY2FyZXQuY2FsbChkLCBtLCAwLCBlLnNoaWZ0S2V5ID8gay5iZWdpbiA6IDAsICEwKSkgOiBwLnVuZG9PbkVzY2FwZSAmJiB5ID09PSBhLmtleXMuRXNjYXBlICYmICEwICE9PSBlLmFsdEtleSA/ICgoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmNoZWNrVmFsKShtLCAhMCwgITEsIGQudW5kb1ZhbHVlLnNwbGl0KFwiXCIpKSwgZy50cmlnZ2VyKFwiY2xpY2tcIikpIDogeSAhPT0gYS5rZXlzLkluc2VydCB8fCBlLnNoaWZ0S2V5IHx8IGUuY3RybEtleSB8fCB2b2lkIDAgIT09IGQudXNlck9wdGlvbnMuaW5zZXJ0TW9kZSA/ICEwID09PSBwLnRhYlRocm91Z2ggJiYgeSA9PT0gYS5rZXlzLlRhYiA/ICEwID09PSBlLnNoaWZ0S2V5ID8gKGsuZW5kID0gbi5zZWVrUHJldmlvdXMuY2FsbChkLCBrLmVuZCwgITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICEwID09PSBsLmdldFRlc3QuY2FsbChkLCBrLmVuZCAtIDEpLm1hdGNoLnN0YXRpYyAmJiBrLmVuZC0tLCBrLmJlZ2luID0gbi5zZWVrUHJldmlvdXMuY2FsbChkLCBrLmVuZCwgITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGsuYmVnaW4gPj0gMCAmJiBrLmVuZCA+IDAgJiYgKGUucHJldmVudERlZmF1bHQoKSwgbi5jYXJldC5jYWxsKGQsIG0sIGsuYmVnaW4sIGsuZW5kKSkpIDogKGsuYmVnaW4gPSBuLnNlZWtOZXh0LmNhbGwoZCwgay5iZWdpbiwgITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGsuZW5kID0gbi5zZWVrTmV4dC5jYWxsKGQsIGsuYmVnaW4sICEwKSwgay5lbmQgPCB2Lm1hc2tMZW5ndGggJiYgay5lbmQtLSwgay5iZWdpbiA8PSB2Lm1hc2tMZW5ndGggJiYgKGUucHJldmVudERlZmF1bHQoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmNhcmV0LmNhbGwoZCwgbSwgay5iZWdpbiwgay5lbmQpKSkgOiBlLnNoaWZ0S2V5IHx8IHAuaW5zZXJ0TW9kZVZpc3VhbCAmJiAhMSA9PT0gcC5pbnNlcnRNb2RlICYmICh5ID09PSBhLmtleXMuQXJyb3dSaWdodCA/IHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gbi5jYXJldC5jYWxsKGQsIG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uY2FyZXQuY2FsbChkLCBtLCBlLmJlZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKSA6IHkgPT09IGEua2V5cy5BcnJvd0xlZnQgJiYgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBuLnRyYW5zbGF0ZVBvc2l0aW9uLmNhbGwoZCwgbS5pbnB1dG1hc2suY2FyZXRQb3MuYmVnaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4udHJhbnNsYXRlUG9zaXRpb24uY2FsbChkLCBtLmlucHV0bWFzay5jYXJldFBvcy5lbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuaXNSVEwgPyBuLmNhcmV0LmNhbGwoZCwgbSwgZSArIChlID09PSB2Lm1hc2tMZW5ndGggPyAwIDogMSkpIDogbi5jYXJldC5jYWxsKGQsIG0sIGUgLSAoMCA9PT0gZSA/IDAgOiAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCkpIDogby5pc1NlbGVjdGlvbi5jYWxsKGQsIGspID8gcC5pbnNlcnRNb2RlID0gIXAuaW5zZXJ0TW9kZSA6IChwLmluc2VydE1vZGUgPSAhcC5pbnNlcnRNb2RlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uY2FyZXQuY2FsbChkLCBtLCBrLmJlZ2luLCBrLmJlZ2luKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC5pc0NvbXBvc2luZyA9IHkgPT0gYS5rZXlzLlByb2Nlc3MgfHwgeSA9PSBhLmtleXMuVW5pZGVudGlmaWVkLCBkLmlnbm9yYWJsZSA9IHAuaWdub3JhYmxlcy5pbmNsdWRlcyh5KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBmLmtleXByZXNzRXZlbnQuY2FsbCh0aGlzLCBlLCB0LCBpLCBjLCB1KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAga2V5cHJlc3NFdmVudDogZnVuY3Rpb24oZSwgdCwgaSwgciwgbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB0aGlzLmlucHV0bWFzayB8fCB0aGlzLCB1ID0gYy5vcHRzLCBmID0gYy5kZXBlbmRlbmN5TGliLCBkID0gYy5tYXNrc2V0LCBwID0gYy5lbCwgaCA9IGYocCksIHYgPSBlLmtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gdCB8fCBlLmN0cmxLZXkgJiYgZS5hbHRLZXkgfHwgIShlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGMuaWdub3JhYmxlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtLCBnID0gdCA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiBuLmNhcmV0LmNhbGwoYywgcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSB1LnN1YnN0aXR1dGVzW3ZdIHx8IHYsIGQud3JpdGVPdXRCdWZmZXIgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBvLmlzVmFsaWQuY2FsbChjLCBnLCB2LCByLCB2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSB5ICYmIChuLnJlc2V0TWFza1NldC5jYWxsKGMsICEwKSwgbSA9IHZvaWQgMCAhPT0geS5jYXJldCA/IHkuY2FyZXQgOiBuLnNlZWtOZXh0LmNhbGwoYywgeS5wb3MuYmVnaW4gPyB5LnBvcy5iZWdpbiA6IHkucG9zKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQucCA9IG0pLCBtID0gdS5udW1lcmljSW5wdXQgJiYgdm9pZCAwID09PSB5LmNhcmV0ID8gbi5zZWVrUHJldmlvdXMuY2FsbChjLCBtKSA6IG0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMSAhPT0gaSAmJiAoc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1Lm9uS2V5VmFsaWRhdGlvbi5jYWxsKHAsIHYsIHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCksIGQud3JpdGVPdXRCdWZmZXIgJiYgITEgIT09IHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IG4uZ2V0QnVmZmVyLmNhbGwoYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgcy53cml0ZUJ1ZmZlcikocCwgaywgbSwgZSwgITAgIT09IHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KCksIHQpIHJldHVybiAhMSAhPT0geSAmJiAoeS5mb3J3YXJkUG9zaXRpb24gPSBtKSwgeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgdiA9PT0gYS5rZXlzLkVudGVyICYmIGMudW5kb1ZhbHVlICE9PSBjLl92YWx1ZUdldCghMCkgJiYgKGMudW5kb1ZhbHVlID0gYy5fdmFsdWVHZXQoITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhc3RlRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0LCBpID0gdGhpcy5pbnB1dG1hc2ssIGEgPSBpLm9wdHMsIHIgPSBpLl92YWx1ZUdldCghMCksIG8gPSBuLmNhcmV0LmNhbGwoaSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLmlzUlRMICYmICh0ID0gby5lbmQsIG8uZW5kID0gbi50cmFuc2xhdGVQb3NpdGlvbi5jYWxsKGksIG8uYmVnaW4pLCBvLmJlZ2luID0gbi50cmFuc2xhdGVQb3NpdGlvbi5jYWxsKGksIHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gci5zdWJzdHIoMCwgby5iZWdpbiksIHUgPSByLnN1YnN0cihvLmVuZCwgci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGwgPT0gKGkuaXNSVEwgPyBuLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaSkuc2xpY2UoKS5yZXZlcnNlKCkgOiBuLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaSkpLnNsaWNlKDAsIG8uYmVnaW4pLmpvaW4oXCJcIikgJiYgKGwgPSBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB1ID09IChpLmlzUlRMID8gbi5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGkpLnNsaWNlKCkucmV2ZXJzZSgpIDogbi5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGkpKS5zbGljZShvLmVuZCkuam9pbihcIlwiKSAmJiAodSA9IFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhICYmIHdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEpIHIgPSBsICsgd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcIlRleHRcIikgKyB1OyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUuY2xpcGJvYXJkRGF0YSB8fCAhZS5jbGlwYm9hcmREYXRhLmdldERhdGEpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gbCArIGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwidGV4dC9wbGFpblwiKSArIHU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IHI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaS5pc1JUTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBmLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkLCBwID0gYyhuLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocC5zKCk7ICEoZCA9IHAubigpKS5kb25lOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZbMF0gPT09IGggJiYgZi5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5mKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBmLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBhLm9uQmVmb3JlUGFzdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IChmID0gYS5vbkJlZm9yZVBhc3RlLmNhbGwoaSwgZiwgYSkpKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZiB8fCAoZiA9IHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHMuY2hlY2tWYWwpKHRoaXMsICEwLCAhMSwgZi50b1N0cmluZygpLnNwbGl0KFwiXCIpLCBlKSwgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dEZhbGxCYWNrRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5pbnB1dG1hc2ssIGkgPSB0Lm9wdHMsIG8gPSB0LmRlcGVuZGVuY3lMaWI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYywgdSA9IHRoaXMsIGQgPSB1LmlucHV0bWFzay5fdmFsdWVHZXQoITApLCBwID0gKHQuaXNSVEwgPyBuLmdldEJ1ZmZlci5jYWxsKHQpLnNsaWNlKCkucmV2ZXJzZSgpIDogbi5nZXRCdWZmZXIuY2FsbCh0KSkuam9pbihcIlwiKSwgaCA9IG4uY2FyZXQuY2FsbCh0LCB1LCB2b2lkIDAsIHZvaWQgMCwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAgIT09IGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyA9IGZ1bmN0aW9uKGUsIGEsIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbywgcywgYywgdSA9IGUuc3Vic3RyKDAsIHIuYmVnaW4pLnNwbGl0KFwiXCIpLCBmID0gZS5zdWJzdHIoci5iZWdpbikuc3BsaXQoXCJcIiksIGQgPSBhLnN1YnN0cigwLCByLmJlZ2luKS5zcGxpdChcIlwiKSwgcCA9IGEuc3Vic3RyKHIuYmVnaW4pLnNwbGl0KFwiXCIpLCBoID0gdS5sZW5ndGggPj0gZC5sZW5ndGggPyB1Lmxlbmd0aCA6IGQubGVuZ3RoLCB2ID0gZi5sZW5ndGggPj0gcC5sZW5ndGggPyBmLmxlbmd0aCA6IHAubGVuZ3RoLCBtID0gXCJcIiwgZyA9IFtdLCB5ID0gXCJ+XCI7IHUubGVuZ3RoIDwgaDsgKSB1LnB1c2goeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoO2QubGVuZ3RoIDwgaDsgKSBkLnB1c2goeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoO2YubGVuZ3RoIDwgdjsgKSBmLnVuc2hpZnQoeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoO3AubGVuZ3RoIDwgdjsgKSBwLnVuc2hpZnQoeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrID0gdS5jb25jYXQoZiksIGIgPSBkLmNvbmNhdChwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChzID0gMCwgbyA9IGsubGVuZ3RoOyBzIDwgbzsgcysrKSBzd2l0Y2ggKGMgPSBsLmdldFBsYWNlaG9sZGVyLmNhbGwodCwgbi50cmFuc2xhdGVQb3NpdGlvbi5jYWxsKHQsIHMpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zZXJ0VGV4dFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYltzIC0gMV0gPT09IGtbc10gJiYgci5iZWdpbiA9PSBrLmxlbmd0aCAtIDEgJiYgZy5wdXNoKGtbc10pLCBzID0gbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc2VydFJlcGxhY2VtZW50VGV4dFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxldGVDb250ZW50QmFja3dhcmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtbc10gPT09IHkgPyByLmVuZCsrIDogcyA9IG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrW3NdICE9PSBiW3NdICYmIChrW3MgKyAxXSAhPT0geSAmJiBrW3MgKyAxXSAhPT0gYyAmJiB2b2lkIDAgIT09IGtbcyArIDFdIHx8IChiW3NdICE9PSBjIHx8IGJbcyArIDFdICE9PSB5KSAmJiBiW3NdICE9PSB5ID8gYltzICsgMV0gPT09IHkgJiYgYltzXSA9PT0ga1tzICsgMV0gPyAobSA9IFwiaW5zZXJ0VGV4dFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcucHVzaChrW3NdKSwgci5iZWdpbi0tLCByLmVuZC0tKSA6IGtbc10gIT09IGMgJiYga1tzXSAhPT0geSAmJiAoa1tzICsgMV0gPT09IHkgfHwgYltzXSAhPT0ga1tzXSAmJiBiW3MgKyAxXSA9PT0ga1tzICsgMV0pID8gKG0gPSBcImluc2VydFJlcGxhY2VtZW50VGV4dFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcucHVzaChrW3NdKSwgci5iZWdpbi0tKSA6IGtbc10gPT09IHkgPyAobSA9IFwiZGVsZXRlQ29udGVudEJhY2t3YXJkXCIsIChuLmlzTWFzay5jYWxsKHQsIG4udHJhbnNsYXRlUG9zaXRpb24uY2FsbCh0LCBzKSwgITApIHx8IGJbc10gPT09IGkucmFkaXhQb2ludCkgJiYgci5lbmQrKykgOiBzID0gbyA6IChtID0gXCJpbnNlcnRUZXh0XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5wdXNoKGtbc10pLCByLmJlZ2luLS0sIHIuZW5kLS0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiByXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShkLCBwLCBoKSwgKHUuaW5wdXRtYXNrLnNoYWRvd1Jvb3QgfHwgdS5vd25lckRvY3VtZW50KS5hY3RpdmVFbGVtZW50ICE9PSB1ICYmIHUuZm9jdXMoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHMud3JpdGVCdWZmZXIpKHUsIG4uZ2V0QnVmZmVyLmNhbGwodCkpLCBuLmNhcmV0LmNhbGwodCwgdSwgaC5iZWdpbiwgaC5lbmQsICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXIubW9iaWxlICYmIHQuc2tpcE5leHRJbnNlcnQgJiYgXCJpbnNlcnRUZXh0XCIgPT09IGUuaW5wdXRUeXBlICYmIFwiaW5zZXJ0VGV4dFwiID09PSBjLmFjdGlvbiAmJiB0LmlzQ29tcG9zaW5nKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChcImluc2VydENvbXBvc2l0aW9uVGV4dFwiID09PSBlLmlucHV0VHlwZSAmJiBcImluc2VydFRleHRcIiA9PT0gYy5hY3Rpb24gJiYgdC5pc0NvbXBvc2luZyA/IHQuc2tpcE5leHRJbnNlcnQgPSAhMCA6IHQuc2tpcE5leHRJbnNlcnQgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnNlcnRUZXh0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zZXJ0UmVwbGFjZW1lbnRUZXh0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuZGF0YS5mb3JFYWNoKChmdW5jdGlvbihlLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG5ldyBvLkV2ZW50KFwia2V5cHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmtleSA9IGUsIHQuaWdub3JhYmxlID0gITEsIGYua2V5cHJlc3NFdmVudC5jYWxsKHUsIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC4kZWwudHJpZ2dlcihcImtleXVwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGVsZXRlQ29udGVudEJhY2t3YXJkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gbmV3IG8uRXZlbnQoXCJrZXlkb3duXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LmtleSA9IGEua2V5cy5CYWNrc3BhY2UsIGYua2V5RXZlbnQuY2FsbCh1LCB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBzLmFwcGx5SW5wdXRWYWx1ZSkodSwgZCksIG4uY2FyZXQuY2FsbCh0LCB1LCBoLmJlZ2luLCBoLmVuZCwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5pbnB1dG1hc2ssIGkgPSB0aGlzLCBhID0gZSAmJiBlLmRldGFpbCA/IGUuZGV0YWlsWzBdIDogYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBhICYmIChhID0gaS5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSksICgwLCBzLmFwcGx5SW5wdXRWYWx1ZSkoaSwgYSksIChlLmRldGFpbCAmJiB2b2lkIDAgIT09IGUuZGV0YWlsWzFdIHx8IHZvaWQgMCAhPT0gYXJndW1lbnRzWzJdKSAmJiBuLmNhcmV0LmNhbGwodCwgaSwgZS5kZXRhaWwgPyBlLmRldGFpbFsxXSA6IGFyZ3VtZW50c1syXSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5pbnB1dG1hc2ssIGkgPSB0Lm9wdHMsIGEgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0Ll92YWx1ZUdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5zaG93TWFza09uRm9jdXMgJiYgYSAhPT0gbi5nZXRCdWZmZXIuY2FsbCh0KS5qb2luKFwiXCIpICYmICgwLCBzLndyaXRlQnVmZmVyKSh0aGlzLCBuLmdldEJ1ZmZlci5jYWxsKHQpLCBuLnNlZWtOZXh0LmNhbGwodCwgbi5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKHQpKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgITAgIT09IGkucG9zaXRpb25DYXJldE9uVGFiIHx8ICExICE9PSB0Lm1vdXNlRW50ZXIgfHwgby5pc0NvbXBsZXRlLmNhbGwodCwgbi5nZXRCdWZmZXIuY2FsbCh0KSkgJiYgLTEgIT09IG4uZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh0KSB8fCBmLmNsaWNrRXZlbnQuYXBwbHkodGhpcywgWyBlLCAhMCBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnVuZG9WYWx1ZSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuX3ZhbHVlR2V0KCEwKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZEV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0bWFzay52YWxpZGF0aW9uRXZlbnQgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW91c2VsZWF2ZUV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5pbnB1dG1hc2ssIHQgPSBlLm9wdHMsIGkgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5tb3VzZUVudGVyID0gITEsIHQuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgJiYgKGkuaW5wdXRtYXNrLnNoYWRvd1Jvb3QgfHwgaS5vd25lckRvY3VtZW50KS5hY3RpdmVFbGVtZW50ICE9PSBpICYmICgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuSGFuZGxlTmF0aXZlUGxhY2Vob2xkZXIpKGksIGUub3JpZ2luYWxQbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQ6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5pbnB1dG1hc2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLmNsaWNrZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYS5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCBhLm93bmVyRG9jdW1lbnQpLmFjdGl2ZUVsZW1lbnQgPT09IGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IG4uZGV0ZXJtaW5lTmV3Q2FyZXRQb3NpdGlvbi5jYWxsKGksIG4uY2FyZXQuY2FsbChpLCBhKSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSByICYmIG4uY2FyZXQuY2FsbChpLCBhLCByKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3V0RXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5pbnB1dG1hc2ssIGkgPSB0Lm1hc2tzZXQsIHIgPSB0aGlzLCBsID0gbi5jYXJldC5jYWxsKHQsIHIpLCBjID0gdC5pc1JUTCA/IG4uZ2V0QnVmZmVyLmNhbGwodCkuc2xpY2UobC5lbmQsIGwuYmVnaW4pIDogbi5nZXRCdWZmZXIuY2FsbCh0KS5zbGljZShsLmJlZ2luLCBsLmVuZCksIHUgPSB0LmlzUlRMID8gYy5yZXZlcnNlKCkuam9pbihcIlwiKSA6IGMuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IuY2xpcGJvYXJkID8gd2luZG93Lm5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHUpIDogd2luZG93LmNsaXBib2FyZERhdGEgJiYgd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YSAmJiB3aW5kb3cuY2xpcGJvYXJkRGF0YS5zZXREYXRhKFwiVGV4dFwiLCB1KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvLmhhbmRsZVJlbW92ZS5jYWxsKHQsIHIsIGEua2V5cy5EZWxldGUsIGwpLCAoMCwgcy53cml0ZUJ1ZmZlcikociwgbi5nZXRCdWZmZXIuY2FsbCh0KSwgaS5wLCBlLCB0LnVuZG9WYWx1ZSAhPT0gdC5fdmFsdWVHZXQoITApKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYmx1ckV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuaW5wdXRtYXNrLCBpID0gdC5vcHRzLCBhID0gdC5kZXBlbmRlbmN5TGliO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5jbGlja2VkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gYSh0aGlzKSwgbCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobC5pbnB1dG1hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgcy5IYW5kbGVOYXRpdmVQbGFjZWhvbGRlcikobCwgdC5vcmlnaW5hbFBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGwuaW5wdXRtYXNrLl92YWx1ZUdldCgpLCB1ID0gbi5nZXRCdWZmZXIuY2FsbCh0KS5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IGMgJiYgKGkuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgJiYgKC0xID09PSBuLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwodCkgJiYgYyA9PT0gbi5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKHQpLmpvaW4oXCJcIikgPyB1ID0gW10gOiBzLmNsZWFyT3B0aW9uYWxUYWlsLmNhbGwodCwgdSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMSA9PT0gby5pc0NvbXBsZXRlLmNhbGwodCwgdSkgJiYgKHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnRyaWdnZXIoXCJpbmNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKSwgaS5jbGVhckluY29tcGxldGUgJiYgKG4ucmVzZXRNYXNrU2V0LmNhbGwodCksIHUgPSBpLmNsZWFyTWFza09uTG9zdEZvY3VzID8gW10gOiBuLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodCkuc2xpY2UoKSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgcy53cml0ZUJ1ZmZlcikobCwgdSwgdm9pZCAwLCBlKSksIHQudW5kb1ZhbHVlICE9PSB0Ll92YWx1ZUdldCghMCkgJiYgKHQudW5kb1ZhbHVlID0gdC5fdmFsdWVHZXQoITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnRyaWdnZXIoXCJjaGFuZ2VcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3VzZWVudGVyRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmlucHV0bWFzaywgdCA9IGUub3B0cy5zaG93TWFza09uSG92ZXIsIGkgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubW91c2VFbnRlciA9ICEwLCAoaS5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCBpLm93bmVyRG9jdW1lbnQpLmFjdGl2ZUVsZW1lbnQgIT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IChlLmlzUlRMID8gbi5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGUpLnNsaWNlKCkucmV2ZXJzZSgpIDogbi5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGUpKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgJiYgKDAsIHMuSGFuZGxlTmF0aXZlUGxhY2Vob2xkZXIpKGksIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRFdmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuaW5wdXRtYXNrLCB0ID0gZS5vcHRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS51bmRvVmFsdWUgIT09IGUuX3ZhbHVlR2V0KCEwKSAmJiBlLiRlbC50cmlnZ2VyKFwiY2hhbmdlXCIpLCAtMSA9PT0gbi5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGUpICYmIGUuX3ZhbHVlR2V0ICYmIGUuX3ZhbHVlR2V0KCkgPT09IG4uZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChlKS5qb2luKFwiXCIpICYmIGUuX3ZhbHVlU2V0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuY2xlYXJJbmNvbXBsZXRlICYmICExID09PSBvLmlzQ29tcGxldGUuY2FsbChlLCBuLmdldEJ1ZmZlci5jYWxsKGUpKSAmJiBlLl92YWx1ZVNldChcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnJlbW92ZU1hc2tPblN1Ym1pdCAmJiAoZS5fdmFsdWVTZXQoZS51bm1hc2tlZHZhbHVlKCksICEwKSwgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHMud3JpdGVCdWZmZXIpKGUuZWwsIG4uZ2V0QnVmZmVyLmNhbGwoZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRFdmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuaW5wdXRtYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5yZWZyZXNoVmFsdWUgPSAhMCwgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHMuYXBwbHlJbnB1dFZhbHVlKShlLmVsLCBlLl92YWx1ZUdldCghMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0LkV2ZW50SGFuZGxlcnMgPSBmO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDk3MTY6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuRXZlbnRSdWxlciA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgbiwgYSA9IChuID0gaSgyMzk0KSkgJiYgbi5fX2VzTW9kdWxlID8gbiA6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogblxuICAgICAgICAgICAgICAgIH0sIHIgPSBpKDI4MzkpLCBvID0gaSg4NzExKSwgcyA9IGkoNzc2MCk7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUuaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWIsIGwgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5vcmlnaW5hbEV2ZW50ICYmICh0ID0gdC5vcmlnaW5hbEV2ZW50IHx8IHQsIGFyZ3VtZW50c1swXSA9IHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsLCBjID0gdGhpcywgdSA9IGMuaW5wdXRtYXNrLCBmID0gdSA/IHUub3B0cyA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSB1ICYmIFwiRk9STVwiICE9PSB0aGlzLm5vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gbi5kYXRhKGMsIFwiX2lucHV0bWFza19vcHRzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuKGMpLm9mZigpLCBkICYmIG5ldyBhLmRlZmF1bHQoZCkubWFzayhjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoWyBcInN1Ym1pdFwiLCBcInJlc2V0XCIsIFwic2V0dmFsdWVcIiBdLmluY2x1ZGVzKHQudHlwZSkgfHwgXCJGT1JNXCIgPT09IHRoaXMubm9kZU5hbWUgfHwgIShjLmRpc2FibGVkIHx8IGMucmVhZE9ubHkgJiYgIShcImtleWRvd25cIiA9PT0gdC50eXBlICYmIHQuY3RybEtleSAmJiB0LmtleSA9PT0gci5rZXlzLmMgfHwgITEgPT09IGYudGFiVGhyb3VnaCAmJiB0LmtleSA9PT0gci5rZXlzLlRhYikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5wdXRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IHUuc2tpcElucHV0RXZlbnQpIHJldHVybiB1LnNraXBJbnB1dEV2ZW50ID0gITEsIHQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZvY3VzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHUudmFsaWRhdGlvbkV2ZW50ID8gKHUudmFsaWRhdGlvbkV2ZW50ID0gITEsIGUuYmx1cigpLCAoMCwgcy5IYW5kbGVOYXRpdmVQbGFjZWhvbGRlcikoZSwgKHUuaXNSVEwgPyBvLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodSkuc2xpY2UoKS5yZXZlcnNlKCkgOiBvLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodSkpLmpvaW4oXCJcIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBmLnZhbGlkYXRpb25FdmVudFRpbWVPdXQpLCAhMSkgOiAobCA9IGFyZ3VtZW50cywgdm9pZCBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2sgJiYgaS5hcHBseShjLCBsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBpLmFwcGx5KGMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITEgPT09IHAgJiYgKHQucHJldmVudERlZmF1bHQoKSwgdC5zdG9wUHJvcGFnYXRpb24oKSksIHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBbIFwic3VibWl0XCIsIFwicmVzZXRcIiBdLmluY2x1ZGVzKHQpID8gKGwgPSBsLmJpbmQoZSksIG51bGwgIT09IGUuZm9ybSAmJiBuKGUuZm9ybSkub24odCwgbCkpIDogbihlKS5vbih0LCBsKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmlucHV0bWFzay5ldmVudHNbdF0gPSBlLmlucHV0bWFzay5ldmVudHNbdF0gfHwgW10sIGUuaW5wdXRtYXNrLmV2ZW50c1t0XS5wdXNoKGwpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvZmY6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmlucHV0bWFzayAmJiBlLmlucHV0bWFzay5ldmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGUuaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWIsIG4gPSBlLmlucHV0bWFzay5ldmVudHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSBpbiB0ICYmICgobiA9IFtdKVt0XSA9IGUuaW5wdXRtYXNrLmV2ZW50c1t0XSksIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IG5bYV07IHIubGVuZ3RoID4gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHIucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIFwic3VibWl0XCIsIFwicmVzZXRcIiBdLmluY2x1ZGVzKGEpID8gbnVsbCAhPT0gZS5mb3JtICYmIGkoZS5mb3JtKS5vZmYoYSwgbykgOiBpKGUpLm9mZihhLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZS5pbnB1dG1hc2suZXZlbnRzW2FdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdC5FdmVudFJ1bGVyID0gbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAyMTk6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGQoaSgyMzk0KSksIGEgPSBpKDI4MzkpLCByID0gZChpKDcxODQpKSwgbyA9IGkoODcxMSksIHMgPSBpKDQ3MTMpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGwoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICB9KGUpIHx8IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gbnVsbCA9PSBlID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBlW1N5bWJvbC5pdGVyYXRvcl0gfHwgZVtcIkBAaXRlcmF0b3JcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4sIGEsIHIsIG8sIHMgPSBbXSwgbCA9ICEwLCBjID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPSAoaSA9IGkuY2FsbChlKSkubmV4dCwgMCA9PT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdChpKSAhPT0gaSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZm9yICg7IShsID0gKG4gPSByLmNhbGwoaSkpLmRvbmUpICYmIChzLnB1c2gobi52YWx1ZSksIHMubGVuZ3RoICE9PSB0KTsgbCA9ICEwKSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gITAsIGEgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWwgJiYgbnVsbCAhPSBpLnJldHVybiAmJiAobyA9IGkucmV0dXJuKCksIE9iamVjdChvKSAhPT0gbykpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjKSB0aHJvdyBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KGUsIHQpIHx8IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpIHJldHVybiBjKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJPYmplY3RcIiA9PT0gaSAmJiBlLmNvbnN0cnVjdG9yICYmIChpID0gZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIk1hcFwiID09PSBpIHx8IFwiU2V0XCIgPT09IGkpIHJldHVybiBBcnJheS5mcm9tKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiQXJndW1lbnRzXCIgPT09IGkgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QoaSkpIHJldHVybiBjKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9KGUsIHQpIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgKG51bGwgPT0gdCB8fCB0ID4gZS5sZW5ndGgpICYmICh0ID0gZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IG5ldyBBcnJheSh0KTsgaSA8IHQ7IGkrKykgbltpXSA9IGVbaV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdShlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5lbnVtZXJhYmxlID0gbi5lbnVtZXJhYmxlIHx8ICExLCBuLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbiAmJiAobi53cml0YWJsZSA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgKGEgPSBuLmtleSwgciA9IHZvaWQgMCwgciA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiAhPT0gdShlKSB8fCBudWxsID09PSBlKSByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGVbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gaS5jYWxsKGUsIHQgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiAhPT0gdShuKSkgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcInN0cmluZ1wiID09PSB0ID8gU3RyaW5nIDogTnVtYmVyKShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0oYSwgXCJzdHJpbmdcIiksIFwic3ltYm9sXCIgPT09IHUocikgPyByIDogU3RyaW5nKHIpKSwgbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGEsIHI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGQoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcCA9IG4uZGVmYXVsdC5kZXBlbmRlbmN5TGliLCBoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGUodCwgaSwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KHRoaXMsIGUpLCB0aGlzLm1hc2sgPSB0LCB0aGlzLmZvcm1hdCA9IGksIHRoaXMub3B0cyA9IG4sIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSgxLCAwLCAxKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXREYXRlT2JqZWN0KHQsIHRoaXMub3B0cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHQsIGksIG47XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID0gZSwgKGkgPSBbIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgPT09IHRoaXMuX2RhdGUgJiYgKHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSgxLCAwLCAxKSwgdGhpcy5pbml0RGF0ZU9iamVjdCh2b2lkIDAsIHRoaXMub3B0cykpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaW5pdERhdGVPYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChQKHQpLmxhc3RJbmRleCA9IDA7IGkgPSBQKHQpLmV4ZWModGhpcy5mb3JtYXQpOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgUmVnRXhwKFwiXFxcXGQrJFwiKS5leGVjKGlbMF0pLCBhID0gbiA/IGlbMF1bMF0gKyBcInhcIiA6IGlbMF0sIHIgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBQKHQpLmxhc3RJbmRleCwgcyA9IEUoaS5pbmRleCwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUCh0KS5sYXN0SW5kZXggPSBvLCByID0gZS5zbGljZSgwLCBlLmluZGV4T2Yocy5uZXh0TWF0Y2hbMF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSByID0gZS5zbGljZSgwLCBnW2FdICYmIGdbYV1bNF0gfHwgYS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IGUuc2xpY2Uoci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChnLCBhKSAmJiB0aGlzLnNldFZhbHVlKHRoaXMsIHIsIGEsIGdbYV1bMl0sIGdbYV1bMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInNldFZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSwgdCwgaSwgbiwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHQgJiYgKGVbbl0gPSBcImFtcG1cIiA9PT0gbiA/IHQgOiB0LnJlcGxhY2UoL1teMC05XS9nLCBcIjBcIiksIGVbXCJyYXdcIiArIG5dID0gdC5yZXBsYWNlKC9cXHMvZywgXCJfXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gZVtuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwiZGF5XCIgPT09IG4gJiYgMjkgPT09IHBhcnNlSW50KHIpIHx8IFwibW9udGhcIiA9PT0gbiAmJiAyID09PSBwYXJzZUludChyKSkgJiYgKDI5ICE9PSBwYXJzZUludChlLmRheSkgfHwgMiAhPT0gcGFyc2VJbnQoZS5tb250aCkgfHwgXCJcIiAhPT0gZS55ZWFyICYmIHZvaWQgMCAhPT0gZS55ZWFyIHx8IGUuX2RhdGUuc2V0RnVsbFllYXIoMjAxMiwgMSwgMjkpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF5XCIgPT09IG4gJiYgKG0gPSAhMCwgMCA9PT0gcGFyc2VJbnQocikgJiYgKHIgPSAxKSksIFwibW9udGhcIiA9PT0gbiAmJiAobSA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieWVhclwiID09PSBuICYmIChtID0gITAsIHIubGVuZ3RoIDwgNCAmJiAociA9IE0ociwgNCwgITApKSksIFwiXCIgPT09IHIgfHwgaXNOYU4ocikgfHwgYS5jYWxsKGUuX2RhdGUsIHIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbXBtXCIgPT09IG4gJiYgYS5jYWxsKGUuX2RhdGUsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInJlc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKDEsIDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwicmVJbml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0ZSA9IHZvaWQgMCwgdGhpcy5kYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IF0pICYmIGYodC5wcm90b3R5cGUsIGkpLCBuICYmIGYodCwgbiksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcInByb3RvdHlwZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogITFcbiAgICAgICAgICAgICAgICAgICAgfSksIGU7XG4gICAgICAgICAgICAgICAgfSgpLCB2ID0gKG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpLCBtID0gITEsIGcgPSB7XG4gICAgICAgICAgICAgICAgICAgIGQ6IFsgXCJbMS05XXxbMTJdWzAtOV18M1swMV1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0RGF0ZSwgXCJkYXlcIiwgRGF0ZS5wcm90b3R5cGUuZ2V0RGF0ZSBdLFxuICAgICAgICAgICAgICAgICAgICBkZDogWyBcIjBbMS05XXxbMTJdWzAtOV18M1swMV1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0RGF0ZSwgXCJkYXlcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTShEYXRlLnByb3RvdHlwZS5nZXREYXRlLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIGRkZDogWyBcIlwiIF0sXG4gICAgICAgICAgICAgICAgICAgIGRkZGQ6IFsgXCJcIiBdLFxuICAgICAgICAgICAgICAgICAgICBtOiBbIFwiWzEtOV18MVswMTJdXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZSA/IHBhcnNlSW50KGUpIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID4gMCAmJiB0LS0sIERhdGUucHJvdG90eXBlLnNldE1vbnRoLmNhbGwodGhpcywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIFwibW9udGhcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZS5wcm90b3R5cGUuZ2V0TW9udGguY2FsbCh0aGlzKSArIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgbW06IFsgXCIwWzEtOV18MVswMTJdXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZSA/IHBhcnNlSW50KGUpIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID4gMCAmJiB0LS0sIERhdGUucHJvdG90eXBlLnNldE1vbnRoLmNhbGwodGhpcywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIFwibW9udGhcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTShEYXRlLnByb3RvdHlwZS5nZXRNb250aC5jYWxsKHRoaXMpICsgMSwgMik7XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgbW1tOiBbIFwiXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgbW1tbTogWyBcIlwiIF0sXG4gICAgICAgICAgICAgICAgICAgIHl5OiBbIFwiWzAtOV17Mn1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0RnVsbFllYXIsIFwieWVhclwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNKERhdGUucHJvdG90eXBlLmdldEZ1bGxZZWFyLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIHl5eXk6IFsgXCJbMC05XXs0fVwiLCBEYXRlLnByb3RvdHlwZS5zZXRGdWxsWWVhciwgXCJ5ZWFyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE0oRGF0ZS5wcm90b3R5cGUuZ2V0RnVsbFllYXIuY2FsbCh0aGlzKSwgNCk7XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgaDogWyBcIlsxLTldfDFbMC0yXVwiLCBEYXRlLnByb3RvdHlwZS5zZXRIb3VycywgXCJob3Vyc1wiLCBEYXRlLnByb3RvdHlwZS5nZXRIb3VycyBdLFxuICAgICAgICAgICAgICAgICAgICBoaDogWyBcIjBbMS05XXwxWzAtMl1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0SG91cnMsIFwiaG91cnNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTShEYXRlLnByb3RvdHlwZS5nZXRIb3Vycy5jYWxsKHRoaXMpLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBoeDogWyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJbMC05XXtcIi5jb25jYXQoZSwgXCJ9XCIpO1xuICAgICAgICAgICAgICAgICAgICB9LCBEYXRlLnByb3RvdHlwZS5zZXRIb3VycywgXCJob3Vyc1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZS5wcm90b3R5cGUuZ2V0SG91cnM7XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgSDogWyBcIjE/WzAtOV18MlswLTNdXCIsIERhdGUucHJvdG90eXBlLnNldEhvdXJzLCBcImhvdXJzXCIsIERhdGUucHJvdG90eXBlLmdldEhvdXJzIF0sXG4gICAgICAgICAgICAgICAgICAgIEhIOiBbIFwiMFswLTldfDFbMC05XXwyWzAtM11cIiwgRGF0ZS5wcm90b3R5cGUuc2V0SG91cnMsIFwiaG91cnNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTShEYXRlLnByb3RvdHlwZS5nZXRIb3Vycy5jYWxsKHRoaXMpLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBIeDogWyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJbMC05XXtcIi5jb25jYXQoZSwgXCJ9XCIpO1xuICAgICAgICAgICAgICAgICAgICB9LCBEYXRlLnByb3RvdHlwZS5zZXRIb3VycywgXCJob3Vyc1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE0oRGF0ZS5wcm90b3R5cGUuZ2V0SG91cnMuY2FsbCh0aGlzKSwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIE06IFsgXCJbMS01XT9bMC05XVwiLCBEYXRlLnByb3RvdHlwZS5zZXRNaW51dGVzLCBcIm1pbnV0ZXNcIiwgRGF0ZS5wcm90b3R5cGUuZ2V0TWludXRlcyBdLFxuICAgICAgICAgICAgICAgICAgICBNTTogWyBcIjBbMC05XXwxWzAtOV18MlswLTldfDNbMC05XXw0WzAtOV18NVswLTldXCIsIERhdGUucHJvdG90eXBlLnNldE1pbnV0ZXMsIFwibWludXRlc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNKERhdGUucHJvdG90eXBlLmdldE1pbnV0ZXMuY2FsbCh0aGlzKSwgMik7XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgczogWyBcIlsxLTVdP1swLTldXCIsIERhdGUucHJvdG90eXBlLnNldFNlY29uZHMsIFwic2Vjb25kc1wiLCBEYXRlLnByb3RvdHlwZS5nZXRTZWNvbmRzIF0sXG4gICAgICAgICAgICAgICAgICAgIHNzOiBbIFwiMFswLTldfDFbMC05XXwyWzAtOV18M1swLTldfDRbMC05XXw1WzAtOV1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0U2Vjb25kcywgXCJzZWNvbmRzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE0oRGF0ZS5wcm90b3R5cGUuZ2V0U2Vjb25kcy5jYWxsKHRoaXMpLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBsOiBbIFwiWzAtOV17M31cIiwgRGF0ZS5wcm90b3R5cGUuc2V0TWlsbGlzZWNvbmRzLCBcIm1pbGxpc2Vjb25kc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNKERhdGUucHJvdG90eXBlLmdldE1pbGxpc2Vjb25kcy5jYWxsKHRoaXMpLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMyBdLFxuICAgICAgICAgICAgICAgICAgICBMOiBbIFwiWzAtOV17Mn1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0TWlsbGlzZWNvbmRzLCBcIm1pbGxpc2Vjb25kc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNKERhdGUucHJvdG90eXBlLmdldE1pbGxpc2Vjb25kcy5jYWxsKHRoaXMpLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMiBdLFxuICAgICAgICAgICAgICAgICAgICB0OiBbIFwiW2FwXVwiLCBrLCBcImFtcG1cIiwgYiwgMSBdLFxuICAgICAgICAgICAgICAgICAgICB0dDogWyBcIlthcF1tXCIsIGssIFwiYW1wbVwiLCBiLCAyIF0sXG4gICAgICAgICAgICAgICAgICAgIFQ6IFsgXCJbQVBdXCIsIGssIFwiYW1wbVwiLCBiLCAxIF0sXG4gICAgICAgICAgICAgICAgICAgIFRUOiBbIFwiW0FQXU1cIiwgaywgXCJhbXBtXCIsIGIsIDIgXSxcbiAgICAgICAgICAgICAgICAgICAgWjogWyBcIi4qXCIsIHZvaWQgMCwgXCJaXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnRvU3RyaW5nKCkubWF0Y2goL1xcKCguKylcXCkvKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5jbHVkZXMoXCIgXCIpICYmIChlID0gKGUgPSBlLnJlcGxhY2UoXCItXCIsIFwiIFwiKS50b1VwcGVyQ2FzZSgpKS5zcGxpdChcIiBcIikubWFwKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwoZSwgMSlbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBvOiBbIFwiXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgUzogWyBcIlwiIF1cbiAgICAgICAgICAgICAgICB9LCB5ID0ge1xuICAgICAgICAgICAgICAgICAgICBpc29EYXRlOiBcInl5eXktbW0tZGRcIixcbiAgICAgICAgICAgICAgICAgICAgaXNvVGltZTogXCJISDpNTTpzc1wiLFxuICAgICAgICAgICAgICAgICAgICBpc29EYXRlVGltZTogXCJ5eXl5LW1tLWRkJ1QnSEg6TU06c3NcIixcbiAgICAgICAgICAgICAgICAgICAgaXNvVXRjRGF0ZVRpbWU6IFwiVVRDOnl5eXktbW0tZGQnVCdISDpNTTpzcydaJ1wiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBrKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInBcIikgPyB0aGlzLnNldEhvdXJzKHQgKyAxMikgOiBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJhXCIpICYmIHQgPj0gMTIgJiYgdGhpcy5zZXRIb3Vycyh0IC0gMTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBiKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlID0gZSB8fCAxMikgPj0gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHgoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IG5ldyBSZWdFeHAoXCJcXFxcZCskXCIpLmV4ZWMoZVswXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIHZvaWQgMCAhPT0gdFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBnW2VbMF1bMF0gKyBcInhcIl0uc2xpY2UoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaVswXSA9IGlbMF0odFswXSksIGlbM10gPSBpWzNdKHRbMF0pLCBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChnW2VbMF1dKSByZXR1cm4gZ1tlWzBdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gUChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZS50b2tlbml6ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gW10sIGkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gZykgaWYgKC9cXC4qeCQvLnRlc3QobikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IG5bMF0gKyBcIlxcXFxkK1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xID09PSBpLmluZGV4T2YoYSkgJiYgaS5wdXNoKGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIC0xID09PSB0LmluZGV4T2YoblswXSkgJiYgdC5wdXNoKG5bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS50b2tlbml6ZXIgPSBcIihcIiArIChpLmxlbmd0aCA+IDAgPyBpLmpvaW4oXCJ8XCIpICsgXCJ8XCIgOiBcIlwiKSArIHQuam9pbihcIit8XCIpICsgXCIpKz98LlwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudG9rZW5pemVyID0gbmV3IFJlZ0V4cChlLnRva2VuaXplciwgXCJnXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLnRva2VuaXplcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdyhlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBlLnJhd2RheSB8fCAhaXNGaW5pdGUoZS5yYXdkYXkpICYmIG5ldyBEYXRlKGUuZGF0ZS5nZXRGdWxsWWVhcigpLCBpc0Zpbml0ZShlLnJhd21vbnRoKSA/IGUubW9udGggOiBlLmRhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKSA+PSBlLmRheSB8fCBcIjI5XCIgPT0gZS5kYXkgJiYgKCFpc0Zpbml0ZShlLnJhd3llYXIpIHx8IHZvaWQgMCA9PT0gZS5yYXd5ZWFyIHx8IFwiXCIgPT09IGUucmF3eWVhcikgfHwgbmV3IERhdGUoZS5kYXRlLmdldEZ1bGxZZWFyKCksIGlzRmluaXRlKGUucmF3bW9udGgpID8gZS5tb250aCA6IGUuZGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpID49IGUuZGF5KSByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiMjlcIiA9PSBlLmRheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBFKHQucG9zLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInl5eXlcIiA9PT0gbi50YXJnZXRNYXRjaFswXSAmJiB0LnBvcyAtIG4udGFyZ2V0TWF0Y2hJbmRleCA9PSAyKSByZXR1cm4gdC5yZW1vdmUgPSB0LnBvcyArIDEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgdDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIjAyXCIgPT0gZS5tb250aCAmJiBcIjMwXCIgPT0gZS5kYXkgJiYgdm9pZCAwICE9PSB0LmMpIHJldHVybiBlLmRheSA9IFwiMDNcIiwgXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0ZS5zZXREYXRlKDMpLCBlLmRhdGUuc2V0TW9udGgoMSksIHQuaW5zZXJ0ID0gWyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHQucG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgYzogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB0LnBvcyArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjOiB0LmNcbiAgICAgICAgICAgICAgICAgICAgfSBdLCB0LmNhcmV0ID0gby5zZWVrTmV4dC5jYWxsKHRoaXMsIHQucG9zICsgMSksIHQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gUyhlLCB0LCBpLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhLCBvLCBzID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChQKGkpLmxhc3RJbmRleCA9IDA7IGEgPSBQKGkpLmV4ZWMoZSk7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkgaWYgKG8gPSB4KGEpKSBzICs9IFwiKFwiICsgb1swXSArIFwiKVwiOyBlbHNlIHN3aXRjaCAoYVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiW1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgKz0gXCIoXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIl1cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzICs9IFwiKT9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgKz0gKDAsIHIuZGVmYXVsdCkoYVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG8gPSB4KGEpKSBpZiAoITAgIT09IG4gJiYgb1szXSkgcyArPSBvWzNdLmNhbGwodC5kYXRlKTsgZWxzZSBvWzJdID8gcyArPSB0W1wicmF3XCIgKyBvWzJdXSA6IHMgKz0gYVswXTsgZWxzZSBzICs9IGFbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIE0oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGUgPSBTdHJpbmcoZSksIHQgPSB0IHx8IDI7IGUubGVuZ3RoIDwgdDsgKSBlID0gaSA/IGUgKyBcIjBcIiA6IFwiMFwiICsgZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF8oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSA/IG5ldyBoKGUsIHQsIGkpIDogZSAmJiBcIm9iamVjdFwiID09PSB1KGUpICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCBcImRhdGVcIikgPyBlIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBPKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFModC5pbnB1dEZvcm1hdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZVxuICAgICAgICAgICAgICAgICAgICB9LCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gRShlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBuLCBhID0gMCwgciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoUCh0KS5sYXN0SW5kZXggPSAwOyBuID0gUCh0KS5leGVjKHQuaW5wdXRGb3JtYXQpOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gbmV3IFJlZ0V4cChcIlxcXFxkKyRcIikuZXhlYyhuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoYSArPSByID0gbyA/IHBhcnNlSW50KG9bMF0pIDogblswXS5sZW5ndGgpID49IGUgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IG4sIG4gPSBQKHQpLmV4ZWModC5pbnB1dEZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE1hdGNoSW5kZXg6IGEgLSByLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1hdGNoOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TWF0Y2g6IGlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbi5kZWZhdWx0LmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICAgICAgICAgICAgICBkYXRldGltZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLm51bWVyaWNJbnB1dCA9ICExLCBnLlMgPSBlLmkxOG4ub3JkaW5hbFN1ZmZpeC5qb2luKFwifFwiKSwgZS5pbnB1dEZvcm1hdCA9IHlbZS5pbnB1dEZvcm1hdF0gfHwgZS5pbnB1dEZvcm1hdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5kaXNwbGF5Rm9ybWF0ID0geVtlLmRpc3BsYXlGb3JtYXRdIHx8IGUuZGlzcGxheUZvcm1hdCB8fCBlLmlucHV0Rm9ybWF0LCBlLm91dHB1dEZvcm1hdCA9IHlbZS5vdXRwdXRGb3JtYXRdIHx8IGUub3V0cHV0Rm9ybWF0IHx8IGUuaW5wdXRGb3JtYXQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucGxhY2Vob2xkZXIgPSBcIlwiICE9PSBlLnBsYWNlaG9sZGVyID8gZS5wbGFjZWhvbGRlciA6IGUuaW5wdXRGb3JtYXQucmVwbGFjZSgvW1tcXF1dLywgXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVnZXggPSBTKGUuaW5wdXRGb3JtYXQsIHZvaWQgMCwgZSksIGUubWluID0gXyhlLm1pbiwgZS5pbnB1dEZvcm1hdCwgZSksIGUubWF4ID0gXyhlLm1heCwgZS5pbnB1dEZvcm1hdCwgZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZvcm1hdDogXCJpc29EYXRlVGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUZvcm1hdDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dEZvcm1hdDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5TmFtZXM6IFsgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiLCBcIlN1bmRheVwiIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhOYW1lczogWyBcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiLCBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFsU3VmZml4OiBbIFwic3RcIiwgXCJuZFwiLCBcInJkXCIsIFwidGhcIiBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlVmFsaWRhdGlvbjogZnVuY3Rpb24oZSwgdCwgaSwgbiwgYSwgciwgbywgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKGkpICYmIGVbdF0gIT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBFKHQsIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobC5uZXh0TWF0Y2ggJiYgbC5uZXh0TWF0Y2hbMF0gPT09IGkgJiYgbC50YXJnZXRNYXRjaFswXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGdbbC50YXJnZXRNYXRjaFswXV1bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChjKS50ZXN0KFwiMFwiICsgZVt0IC0gMV0pKSByZXR1cm4gZVt0XSA9IGVbdCAtIDFdLCBlW3QgLSAxXSA9IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdXp6eTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiB0IC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiB0ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB0ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IGZ1bmN0aW9uKGUsIHQsIGksIG4sIGEsIHIsIG8sIGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYywgdTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobykgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSA9PT0gbiAmJiAoKChjID0gRSh0ICsgMSwgYSkpLnRhcmdldE1hdGNoICYmIGMudGFyZ2V0TWF0Y2hJbmRleCA9PT0gdCAmJiBjLnRhcmdldE1hdGNoWzBdLmxlbmd0aCA+IDEgJiYgdm9pZCAwICE9PSBnW2MudGFyZ2V0TWF0Y2hbMF1dIHx8IChjID0gRSh0ICsgMiwgYSkpLnRhcmdldE1hdGNoICYmIGMudGFyZ2V0TWF0Y2hJbmRleCA9PT0gdCArIDEgJiYgYy50YXJnZXRNYXRjaFswXS5sZW5ndGggPiAxICYmIHZvaWQgMCAhPT0gZ1tjLnRhcmdldE1hdGNoWzBdXSkgJiYgKHUgPSBnW2MudGFyZ2V0TWF0Y2hbMF1dWzBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSB1ICYmICh2b2lkIDAgIT09IHIudmFsaWRQb3NpdGlvbnNbdCArIDFdICYmIG5ldyBSZWdFeHAodSkudGVzdChpICsgXCIwXCIpID8gKGVbdF0gPSBpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlW3QgKyAxXSA9IFwiMFwiLCBuID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHQgKyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogbmV3IFJlZ0V4cCh1KS50ZXN0KFwiMFwiICsgaSkgJiYgKGVbdF0gPSBcIjBcIiwgZVt0ICsgMV0gPSBpLCBuID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHQgKyAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCAhMSA9PT0gbikpIHJldHVybiBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLmZ1enp5ICYmIChlID0gbi5idWZmZXIsIHQgPSBuLnBvcyksIChjID0gRSh0LCBhKSkudGFyZ2V0TWF0Y2ggJiYgYy50YXJnZXRNYXRjaFswXSAmJiB2b2lkIDAgIT09IGdbYy50YXJnZXRNYXRjaFswXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBnW2MudGFyZ2V0TWF0Y2hbMF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ID0gZlswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBlLnNsaWNlKGMudGFyZ2V0TWF0Y2hJbmRleCwgYy50YXJnZXRNYXRjaEluZGV4ICsgYy50YXJnZXRNYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IG5ldyBSZWdFeHAodSkudGVzdChkLmpvaW4oXCJcIikpICYmIDIgPT09IGMudGFyZ2V0TWF0Y2hbMF0ubGVuZ3RoICYmIHIudmFsaWRQb3NpdGlvbnNbYy50YXJnZXRNYXRjaEluZGV4XSAmJiByLnZhbGlkUG9zaXRpb25zW2MudGFyZ2V0TWF0Y2hJbmRleCArIDFdICYmIChyLnZhbGlkUG9zaXRpb25zW2MudGFyZ2V0TWF0Y2hJbmRleCArIDFdLmlucHV0ID0gXCIwXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCIgPT0gZlsyXSkgZm9yICh2YXIgcCA9IHMuZ2V0TWFza1RlbXBsYXRlLmNhbGwodGhpcywgITEsIDEsIHZvaWQgMCwgITApLCBoID0gdCArIDE7IGggPCBlLmxlbmd0aDsgaCsrKSBlW2hdID0gcFtoXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByLnZhbGlkUG9zaXRpb25zW2hdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IG4sIHkgPSBfKGUuam9pbihcIlwiKSwgYS5pbnB1dEZvcm1hdCwgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0gJiYgIWlzTmFOKHkuZGF0ZS5nZXRUaW1lKCkpICYmIChhLnByZWZpbGxZZWFyICYmIChtID0gZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS55ZWFyICE9PSBlLnJhd3llYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdi50b1N0cmluZygpLCBhID0gZS5yYXd5ZWFyLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKSwgciA9IG4uc2xpY2UoMCwgYS5sZW5ndGgpLCBvID0gbi5zbGljZShhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMiA9PT0gYS5sZW5ndGggJiYgYSA9PT0gcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gbmV3IERhdGUodiwgZS5tb250aCAtIDEsIGUuZGF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmRheSA9PSBzLmdldERhdGUoKSAmJiAoIWkubWF4IHx8IGkubWF4LmRhdGUuZ2V0VGltZSgpID49IHMuZ2V0VGltZSgpKSAmJiAoZS5kYXRlLnNldEZ1bGxZZWFyKHYpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnllYXIgPSBuLCB0Lmluc2VydCA9IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHQucG9zICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogb1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB0LnBvcyArIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IG9bMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oeSwgbSwgYSkpLCBtID0gZnVuY3Rpb24oZSwgdCwgaSwgbiwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXQpIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBpLm1pbiAmJiAhaXNOYU4oaS5taW4uZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoZS5yZXNldCgpLCBQKGkpLmxhc3RJbmRleCA9IDA7IHIgPSBQKGkpLmV4ZWMoaS5pbnB1dEZvcm1hdCk7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobyA9IHgocikpICYmIG9bM10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IG9bMV0sIGwgPSBlW29bMl1dLCBjID0gaS5taW5bb1syXV0sIHUgPSBpLm1heCA/IGkubWF4W29bMl1dIDogYywgZiA9IFtdLCBkID0gITEsIHAgPSAwOyBwIDwgYy5sZW5ndGg7IHArKykgdm9pZCAwICE9PSBuLnZhbGlkUG9zaXRpb25zW3AgKyByLmluZGV4XSB8fCBkID8gKGZbcF0gPSBsW3BdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IGQgfHwgbFtwXSA+IGNbcF0pIDogKGZbcF0gPSBjW3BdLCBcInllYXJcIiA9PT0gb1syXSAmJiBsLmxlbmd0aCAtIDEgPT0gcCAmJiBjICE9IHUgJiYgKGYgPSAocGFyc2VJbnQoZi5qb2luKFwiXCIpKSArIDEpLnRvU3RyaW5nKCkuc3BsaXQoXCJcIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbXBtXCIgPT09IG9bMl0gJiYgYyAhPSB1ICYmIGkubWluLmRhdGUuZ2V0VGltZSgpID4gZS5kYXRlLmdldFRpbWUoKSAmJiAoZltwXSA9IHVbcF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jYWxsKGUuX2RhdGUsIGYuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGkubWluLmRhdGUuZ2V0VGltZSgpIDw9IGUuZGF0ZS5nZXRUaW1lKCksIGUucmVJbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgJiYgaS5tYXggJiYgKGlzTmFOKGkubWF4LmRhdGUuZ2V0VGltZSgpKSB8fCAodCA9IGkubWF4LmRhdGUuZ2V0VGltZSgpID49IGUuZGF0ZS5nZXRUaW1lKCkpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSh5LCBtID0gdy5jYWxsKHRoaXMsIHksIG0sIGEpLCBhLCByKSksIHZvaWQgMCAhPT0gdCAmJiBtICYmIG4ucG9zICE9PSB0ID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IFMoYS5pbnB1dEZvcm1hdCwgeSwgYSkuc3BsaXQoXCJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbi5wb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBuLmNhcmV0IHx8IG4ucG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IG07XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCB0LCBpLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jdHJsS2V5ICYmIGUua2V5ID09PSBhLmtleXMuQXJyb3dSaWdodCAmJiAodGhpcy5pbnB1dG1hc2suX3ZhbHVlU2V0KE8obmV3IERhdGUsIG4pKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCh0aGlzKS50cmlnZ2VyKFwic2V0dmFsdWVcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPyBTKGkub3V0cHV0Rm9ybWF0LCBfKGUsIGkuaW5wdXRGb3JtYXQsIGkpLCBpLCAhMCkgOiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogZnVuY3Rpb24oZSwgdCwgaSwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwID09IHQubmF0aXZlRGVmLmluZGV4T2YoXCJbYXBdXCIpID8gZS50b0xvd2VyQ2FzZSgpIDogMCA9PSB0Lm5hdGl2ZURlZi5pbmRleE9mKFwiW0FQXVwiKSA/IGUudG9VcHBlckNhc2UoKSA6IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25CZWZvcmVNYXNrOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiW29iamVjdCBEYXRlXVwiID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkgJiYgKGUgPSBPKGUsIHQpKSwgZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRNb2RlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydE1vZGVWaXN1YWw6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRQb3NpdGlvbnM6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAga2VlcFN0YXRpYzogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmlsbFllYXI6ICEwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzODUxOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4sIGEgPSAobiA9IGkoMjM5NCkpICYmIG4uX19lc01vZHVsZSA/IG4gOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG5cbiAgICAgICAgICAgICAgICB9LCByID0gaSg4NzExKSwgbyA9IGkoNDcxMyk7XG4gICAgICAgICAgICAgICAgYS5kZWZhdWx0LmV4dGVuZERlZmluaXRpb25zKHtcbiAgICAgICAgICAgICAgICAgICAgQToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIltBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjVdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIiZcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjVdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIiNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLUZhLWZdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBuZXcgUmVnRXhwKFwiMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdWzAtOV1bMC05XVwiKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGUsIHQsIGksIG4sIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgLSAxID4gLTEgJiYgXCIuXCIgIT09IHQuYnVmZmVyW2kgLSAxXSA/IChlID0gdC5idWZmZXJbaSAtIDFdICsgZSwgZSA9IGkgLSAyID4gLTEgJiYgXCIuXCIgIT09IHQuYnVmZmVyW2kgLSAyXSA/IHQuYnVmZmVyW2kgLSAyXSArIGUgOiBcIjBcIiArIGUpIDogZSA9IFwiMDBcIiArIGUsIFxuICAgICAgICAgICAgICAgICAgICBzLnRlc3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGEuZGVmYXVsdC5leHRlbmRBbGlhc2VzKHtcbiAgICAgICAgICAgICAgICAgICAgY3NzdW5pdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXg6IFwiWystXT9bMC05XStcXFxcLj8oWzAtOV0rKT8ocHh8ZW18cmVtfGV4fCV8aW58Y218bW18cHR8cGMpXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWdleDogXCIoaHR0cHM/fGZ0cCk6Ly8uKlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1VubWFzazogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZWVwU3RhdGljOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYlRocm91Z2g6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGlwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBcIml7MSwzfS5qezEsM30ua3sxLDN9Lmx7MSwzfVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgajoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGs6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvblVuTWFzazogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0bW9kZTogXCJkZWNpbWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFwiOiBcIi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZS5zZXBhcmF0b3IsIGkgPSBlLnF1YW50aWZpZXIsIG4gPSBcIip7MSw2NH1bLip7MSw2NH1dWy4qezEsNjR9XVsuKnsxLDYzfV1ALXsxLDYzfS4tezEsNjN9Wy4tezEsNjN9XVsuLXsxLDYzfV1cIiwgYSA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIGZvciAodmFyIHIgPSAwOyByIDwgaTsgcisrKSBhICs9IFwiW1wiLmNvbmNhdCh0KS5jb25jYXQobiwgXCJdXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyZWVkeTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwibG93ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aWZpZXI6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25CZWZvcmVQYXN0ZTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoZSA9IGUudG9Mb3dlckNhc2UoKSkucmVwbGFjZShcIm1haWx0bzpcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIipcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOVxcdWZmMTEtXFx1ZmYxOUEtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNSEjJCUmJyorLz0/Xl9ge3x9fi1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05QS1aYS16LV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvblVuTWFzazogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0bW9kZTogXCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hYzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogXCIjIzojIzojIzojIzojIzojI1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZpbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogXCJWezEzfTl7NH1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiW0EtSEotTlBSLVphLWhqLW5wci16XFxcXGRdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJ1cHBlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW5jb21wbGV0ZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvVW5tYXNrOiAhMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzc246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IFwiOTk5LTk5LTk5OTlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RWYWxpZGF0aW9uOiBmdW5jdGlvbihlLCB0LCBpLCBuLCBhLCBzLCBsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBvLmdldE1hc2tUZW1wbGF0ZS5jYWxsKHRoaXMsICEwLCByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwodGhpcyksICEwLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC9eKD8hMjE5LTA5LTk5OTl8MDc4LTA1LTExMjApKD8hNjY2fDAwMHw5LnsyfSkuezN9LSg/ITAwKS57Mn0tKD8hMHs0fSkuezR9JC8udGVzdChjLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMjA3OiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBzKGkoMjM5NCkpLCBhID0gcyhpKDcxODQpKSwgciA9IGkoODcxMSksIG8gPSBpKDI4MzkpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHMoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbCA9IG4uZGVmYXVsdC5kZXBlbmRlbmN5TGliO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gXCJcIiwgYSA9IDA7IGEgPCBlLmxlbmd0aDsgYSsrKSBuLmRlZmF1bHQucHJvdG90eXBlLmRlZmluaXRpb25zW2UuY2hhckF0KGEpXSB8fCB0LmRlZmluaXRpb25zW2UuY2hhckF0KGEpXSB8fCB0Lm9wdGlvbmFsbWFya2VyWzBdID09PSBlLmNoYXJBdChhKSB8fCB0Lm9wdGlvbmFsbWFya2VyWzFdID09PSBlLmNoYXJBdChhKSB8fCB0LnF1YW50aWZpZXJtYXJrZXJbMF0gPT09IGUuY2hhckF0KGEpIHx8IHQucXVhbnRpZmllcm1hcmtlclsxXSA9PT0gZS5jaGFyQXQoYSkgfHwgdC5ncm91cG1hcmtlclswXSA9PT0gZS5jaGFyQXQoYSkgfHwgdC5ncm91cG1hcmtlclsxXSA9PT0gZS5jaGFyQXQoYSkgfHwgdC5hbHRlcm5hdG9ybWFya2VyID09PSBlLmNoYXJBdChhKSA/IGkgKz0gXCJcXFxcXCIgKyBlLmNoYXJBdChhKSA6IGkgKz0gZS5jaGFyQXQoYSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1KGUsIHQsIGksIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUubGVuZ3RoID4gMCAmJiB0ID4gMCAmJiAoIWkuZGlnaXRzT3B0aW9uYWwgfHwgbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gZS5pbmRleE9mKGkucmFkaXhQb2ludCksIHIgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkubmVnYXRpb25TeW1ib2wuYmFjayA9PT0gZVtlLmxlbmd0aCAtIDFdICYmIChyID0gITAsIGUubGVuZ3RoLS0pLCAtMSA9PT0gYSAmJiAoZS5wdXNoKGkucmFkaXhQb2ludCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGUubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBvID0gMTsgbyA8PSB0OyBvKyspIGlzRmluaXRlKGVbYSArIG9dKSB8fCAoZVthICsgb10gPSBcIjBcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIgJiYgZS5wdXNoKGkubmVnYXRpb25TeW1ib2wuYmFjayksIGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGYoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gXCIrXCIgPT09IGUgJiYgKGkgPSByLnNlZWtOZXh0LmNhbGwodGhpcywgdC52YWxpZFBvc2l0aW9ucy5sZW5ndGggLSAxKSksIFxuICAgICAgICAgICAgICAgICAgICB0LnRlc3RzKSBpZiAoKG4gPSBwYXJzZUludChuKSkgPj0gaSkgZm9yICh2YXIgYSA9IDAsIG8gPSB0LnRlc3RzW25dLmxlbmd0aDsgYSA8IG87IGErKykgaWYgKCh2b2lkIDAgPT09IHQudmFsaWRQb3NpdGlvbnNbbl0gfHwgXCItXCIgPT09IGUpICYmIHQudGVzdHNbbl1bYV0ubWF0Y2guZGVmID09PSBlKSByZXR1cm4gbiArICh2b2lkIDAgIT09IHQudmFsaWRQb3NpdGlvbnNbbl0gJiYgXCItXCIgIT09IGUgPyAxIDogMCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IC0xLCBuID0gMCwgYSA9IHQudmFsaWRQb3NpdGlvbnMubGVuZ3RoOyBuIDwgYTsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHQudmFsaWRQb3NpdGlvbnNbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAociAmJiByLm1hdGNoLmRlZiA9PT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwKGUsIHQsIGksIG4sIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0LmJ1ZmZlciA/IHQuYnVmZmVyLmluZGV4T2YoYS5yYWRpeFBvaW50KSA6IC0xLCBvID0gKC0xICE9PSByIHx8IG4gJiYgYS5qaXRNYXNraW5nKSAmJiBuZXcgUmVnRXhwKGEuZGVmaW5pdGlvbnNbOV0udmFsaWRhdG9yKS50ZXN0KGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5fcmFkaXhEYW5jZSAmJiAtMSAhPT0gciAmJiBvICYmIG51bGwgPT0gdC52YWxpZFBvc2l0aW9uc1tyXSA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogciA9PT0gaSA/IHIgKyAxIDogcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBhLnJhZGl4UG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IGlcbiAgICAgICAgICAgICAgICAgICAgfSA6IG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG4uZGVmYXVsdC5leHRlbmRBbGlhc2VzKHtcbiAgICAgICAgICAgICAgICAgICAgbnVtZXJpYzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVwZWF0ID0gMCwgZS5ncm91cFNlcGFyYXRvciA9PT0gZS5yYWRpeFBvaW50ICYmIGUuZGlnaXRzICYmIFwiMFwiICE9PSBlLmRpZ2l0cyAmJiAoXCIuXCIgPT09IGUucmFkaXhQb2ludCA/IGUuZ3JvdXBTZXBhcmF0b3IgPSBcIixcIiA6IFwiLFwiID09PSBlLnJhZGl4UG9pbnQgPyBlLmdyb3VwU2VwYXJhdG9yID0gXCIuXCIgOiBlLmdyb3VwU2VwYXJhdG9yID0gXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiID09PSBlLmdyb3VwU2VwYXJhdG9yICYmIChlLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgPSB2b2lkIDApLCBlLnBsYWNlaG9sZGVyLmxlbmd0aCA+IDEgJiYgKGUucGxhY2Vob2xkZXIgPSBlLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmFkaXhGb2N1c1wiID09PSBlLnBvc2l0aW9uQ2FyZXRPbkNsaWNrICYmIFwiXCIgPT09IGUucGxhY2Vob2xkZXIgJiYgKGUucG9zaXRpb25DYXJldE9uQ2xpY2sgPSBcImx2cFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IFwiMFwiLCBpID0gZS5yYWRpeFBvaW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEwID09PSBlLm51bWVyaWNJbnB1dCAmJiB2b2lkIDAgPT09IGUuX19maW5hbmNlSW5wdXQgPyAodCA9IFwiMVwiLCBlLnBvc2l0aW9uQ2FyZXRPbkNsaWNrID0gXCJyYWRpeEZvY3VzXCIgPT09IGUucG9zaXRpb25DYXJldE9uQ2xpY2sgPyBcImx2cFwiIDogZS5wb3NpdGlvbkNhcmV0T25DbGljaywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5kaWdpdHNPcHRpb25hbCA9ICExLCBpc05hTihlLmRpZ2l0cykgJiYgKGUuZGlnaXRzID0gMiksIGUuX3JhZGl4RGFuY2UgPSAhMSwgaSA9IFwiLFwiID09PSBlLnJhZGl4UG9pbnQgPyBcIj9cIiA6IFwiIVwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBlLnJhZGl4UG9pbnQgJiYgdm9pZCAwID09PSBlLmRlZmluaXRpb25zW2ldICYmIChlLmRlZmluaXRpb25zW2ldID0ge30sIGUuZGVmaW5pdGlvbnNbaV0udmFsaWRhdG9yID0gXCJbXCIgKyBlLnJhZGl4UG9pbnQgKyBcIl1cIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5kZWZpbml0aW9uc1tpXS5wbGFjZWhvbGRlciA9IGUucmFkaXhQb2ludCwgZS5kZWZpbml0aW9uc1tpXS5zdGF0aWMgPSAhMCwgZS5kZWZpbml0aW9uc1tpXS5nZW5lcmF0ZWQgPSAhMCkpIDogKGUuX19maW5hbmNlSW5wdXQgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5udW1lcmljSW5wdXQgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4sIHIgPSBcIlsrXVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyICs9IGMoZS5wcmVmaXgsIGUpLCBcIlwiICE9PSBlLmdyb3VwU2VwYXJhdG9yID8gKHZvaWQgMCA9PT0gZS5kZWZpbml0aW9uc1tlLmdyb3VwU2VwYXJhdG9yXSAmJiAoZS5kZWZpbml0aW9uc1tlLmdyb3VwU2VwYXJhdG9yXSA9IHt9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmRlZmluaXRpb25zW2UuZ3JvdXBTZXBhcmF0b3JdLnZhbGlkYXRvciA9IFwiW1wiICsgZS5ncm91cFNlcGFyYXRvciArIFwiXVwiLCBlLmRlZmluaXRpb25zW2UuZ3JvdXBTZXBhcmF0b3JdLnBsYWNlaG9sZGVyID0gZS5ncm91cFNlcGFyYXRvciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5kZWZpbml0aW9uc1tlLmdyb3VwU2VwYXJhdG9yXS5zdGF0aWMgPSAhMCwgZS5kZWZpbml0aW9uc1tlLmdyb3VwU2VwYXJhdG9yXS5nZW5lcmF0ZWQgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgKz0gZS5fbWFzayhlKSkgOiByICs9IFwiOXsrfVwiLCB2b2lkIDAgIT09IGUuZGlnaXRzICYmIDAgIT09IGUuZGlnaXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gZS5kaWdpdHMudG9TdHJpbmcoKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRmluaXRlKG9bMF0pICYmIG9bMV0gJiYgaXNGaW5pdGUob1sxXSkgPyByICs9IGkgKyB0ICsgXCJ7XCIgKyBlLmRpZ2l0cyArIFwifVwiIDogKGlzTmFOKGUuZGlnaXRzKSB8fCBwYXJzZUludChlLmRpZ2l0cykgPiAwKSAmJiAoZS5kaWdpdHNPcHRpb25hbCB8fCBlLmppdE1hc2tpbmcgPyAobiA9IHIgKyBpICsgdCArIFwiezAsXCIgKyBlLmRpZ2l0cyArIFwifVwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5rZWVwU3RhdGljID0gITApIDogciArPSBpICsgdCArIFwie1wiICsgZS5kaWdpdHMgKyBcIn1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGUuaW5wdXRtb2RlID0gXCJudW1lcmljXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIgKz0gYyhlLnN1ZmZpeCwgZSksIHIgKz0gXCJbLV1cIiwgbiAmJiAociA9IFsgbiArIGMoZS5zdWZmaXgsIGUpICsgXCJbLV1cIiwgciBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5ncmVlZHkgPSAhMSwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGUucGFyc2VNaW5NYXhPcHRpb25zICYmIChudWxsICE9PSBlLm1pbiAmJiAoZS5taW4gPSBlLm1pbi50b1N0cmluZygpLnJlcGxhY2UobmV3IFJlZ0V4cCgoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdCkoZS5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFwiLFwiID09PSBlLnJhZGl4UG9pbnQgJiYgKGUubWluID0gZS5taW4ucmVwbGFjZShlLnJhZGl4UG9pbnQsIFwiLlwiKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm1pbiA9IGlzRmluaXRlKGUubWluKSA/IHBhcnNlRmxvYXQoZS5taW4pIDogTmFOLCBpc05hTihlLm1pbikgJiYgKGUubWluID0gTnVtYmVyLk1JTl9WQUxVRSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gZS5tYXggJiYgKGUubWF4ID0gZS5tYXgudG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoKDAsIGEuZGVmYXVsdCkoZS5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcIiA9PT0gZS5yYWRpeFBvaW50ICYmIChlLm1heCA9IGUubWF4LnJlcGxhY2UoZS5yYWRpeFBvaW50LCBcIi5cIikpLCBlLm1heCA9IGlzRmluaXRlKGUubWF4KSA/IHBhcnNlRmxvYXQoZS5tYXgpIDogTmFOLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOYU4oZS5tYXgpICYmIChlLm1heCA9IE51bWJlci5NQVhfVkFMVUUpKSwgZS5wYXJzZU1pbk1heE9wdGlvbnMgPSBcImRvbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShlKSwgXCJcIiAhPT0gZS5yYWRpeFBvaW50ICYmIGUuc3Vic3RpdHV0ZVJhZGl4UG9pbnQgJiYgKGUuc3Vic3RpdHV0ZXNbXCIuXCIgPT0gZS5yYWRpeFBvaW50ID8gXCIsXCIgOiBcIi5cIl0gPSBlLnJhZGl4UG9pbnQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9tYXNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiKFwiICsgZS5ncm91cFNlcGFyYXRvciArIFwiOTk5KXsrfDF9XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlnaXRzOiBcIipcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZ2l0c09wdGlvbmFsOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZm9yY2VEaWdpdHNPbkJsdXI6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXhQb2ludDogXCIuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNhcmV0T25DbGljazogXCJyYWRpeEZvY3VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfcmFkaXhEYW5jZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFNlcGFyYXRvcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TWludXM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmVnYXRpb25TeW1ib2w6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9udDogXCItXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFjazogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNldE1heE9uT3ZlcmZsb3c6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1bm1hc2tBc051bWJlcjogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGluZ0ZOOiBNYXRoLnJvdW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcImRlY2ltYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3J0Y3V0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGs6IFwiMTAwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG06IFwiMTAwMDAwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JlZWR5OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0QWxpZ246ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0TW9kZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvVW5tYXNrOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VQcm90b3R5cGVEZWZpbml0aW9uczogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpcExlYWRpbmdaZXJvZXM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0ZVJhZGl4UG9pbnQ6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TeW1ib2w6IFwiOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05XFx1ZmYxMC1cXHVmZjE5XFx1MDY2MC1cXHUwNjY5XFx1MDZmMC1cXHUwNmY5XVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIipcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIrXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihlLCB0LCBpLCBuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5hbGxvd01pbnVzICYmIChcIi1cIiA9PT0gZSB8fCBlID09PSBhLm5lZ2F0aW9uU3ltYm9sLmZyb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihlLCB0LCBpLCBuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5hbGxvd01pbnVzICYmIGUgPT09IGEubmVnYXRpb25TeW1ib2wuYmFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVWYWxpZGF0aW9uOiBmdW5jdGlvbihlLCB0LCBpLCBuLCBhLCByLCBvLCBzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSBhLl9fZmluYW5jZUlucHV0ICYmIGkgPT09IGEucmFkaXhQb2ludCkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gZS5pbmRleE9mKGEucmFkaXhQb2ludCksIGMgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID0gZnVuY3Rpb24oZSwgdCwgaSwgbiwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5fcmFkaXhEYW5jZSAmJiBhLm51bWVyaWNJbnB1dCAmJiB0ICE9PSBhLm5lZ2F0aW9uU3ltYm9sLmJhY2sgJiYgZSA8PSBpICYmIChpID4gMCB8fCB0ID09IGEucmFkaXhQb2ludCkgJiYgKHZvaWQgMCA9PT0gbi52YWxpZFBvc2l0aW9uc1tlIC0gMV0gfHwgbi52YWxpZFBvc2l0aW9uc1tlIC0gMV0uaW5wdXQgIT09IGEubmVnYXRpb25TeW1ib2wuYmFjaykgJiYgKGUgLT0gMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0odCwgaSwgbCwgciwgYSksIFwiLVwiID09PSBpIHx8IGkgPT09IGEubmVnYXRpb25TeW1ib2wuZnJvbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSBhLmFsbG93TWludXMpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSAhMSwgcCA9IGQoXCIrXCIsIHIpLCBoID0gZChcIi1cIiwgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSAhPT0gcCAmJiAodSA9IFsgcCwgaCBdKSwgITEgIT09IHUgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IHUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogYyAtIGEubmVnYXRpb25TeW1ib2wuYmFjay5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDogWyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBmLmNhbGwodGhpcywgXCIrXCIsIHIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IGEubmVnYXRpb25TeW1ib2wuZnJvbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUlzVmFsaWQ6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBmLmNhbGwodGhpcywgXCItXCIsIHIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IGEubmVnYXRpb25TeW1ib2wuYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tSXNWYWxpZDogdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogYyArIGEubmVnYXRpb25TeW1ib2wuYmFjay5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGEuZ3JvdXBTZXBhcmF0b3IpIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocykgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSAhPT0gbCAmJiAhMCA9PT0gYS5fcmFkaXhEYW5jZSAmJiAhMSA9PT0gbiAmJiBpID09PSBhLnJhZGl4UG9pbnQgJiYgdm9pZCAwICE9PSBhLmRpZ2l0cyAmJiAoaXNOYU4oYS5kaWdpdHMpIHx8IHBhcnNlSW50KGEuZGlnaXRzKSA+IDApICYmIGwgIT09IHQpIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBhLl9yYWRpeERhbmNlICYmIHQgPT09IGwgLSAxID8gbCArIDEgOiBsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IGEuX19maW5hbmNlSW5wdXQpIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmRpZ2l0c09wdGlvbmFsKSByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3cml0ZVBvc2l0aW9uOiBvLmVuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWEuZGlnaXRzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLmJlZ2luID4gbCAmJiBvLmVuZCA8PSBsKSByZXR1cm4gaSA9PT0gYS5yYWRpeFBvaW50ID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IGwgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUlzVmFsaWQ6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdyaXRlUG9zaXRpb246IGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3cml0ZVBvc2l0aW9uOiBsICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLmJlZ2luIDwgbCkgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdyaXRlUG9zaXRpb246IG8uYmVnaW4gLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghYS5zaG93TWFza09uSG92ZXIgJiYgIWEuc2hvd01hc2tPbkZvY3VzICYmICFhLmRpZ2l0c09wdGlvbmFsICYmIGEuZGlnaXRzID4gMCAmJiBcIlwiID09PSB0aGlzLl9fdmFsdWVHZXQuY2FsbCh0aGlzLmVsKSkgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3cml0ZVBvc2l0aW9uOiBsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdyaXRlUG9zaXRpb246IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RWYWxpZGF0aW9uOiBmdW5jdGlvbihlLCB0LCBpLCBuLCBhLCByLCBvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSBuKSByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobykgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBhLm1pbiB8fCBudWxsICE9PSBhLm1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGEub25Vbk1hc2soZS5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpLCB2b2lkIDAsIGwuZXh0ZW5kKHt9LCBhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hc2tBc051bWJlcjogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gYS5taW4gJiYgcyA8IGEubWluICYmIChzLnRvU3RyaW5nKCkubGVuZ3RoID4gYS5taW4udG9TdHJpbmcoKS5sZW5ndGggfHwgcyA8IDApKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBhLm1heCAmJiBzID4gYS5tYXgpIHJldHVybiAhIWEuU2V0TWF4T25PdmVyZmxvdyAmJiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHUoYS5tYXgudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBhLnJhZGl4UG9pbnQpLnNwbGl0KFwiXCIpLCBhLmRpZ2l0cywgYSkucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiXCIgPT09IHQgJiYgITAgPT09IGkubnVsbGFibGUpIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gZS5yZXBsYWNlKGkucHJlZml4LCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiA9IChuID0gbi5yZXBsYWNlKGkuc3VmZml4LCBcIlwiKSkucmVwbGFjZShuZXcgUmVnRXhwKCgwLCBhLmRlZmF1bHQpKGkuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBpLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSAmJiAobiA9IG4ucmVwbGFjZShuZXcgUmVnRXhwKGkucGxhY2Vob2xkZXIuY2hhckF0KDApLCBcImdcIiksIFwiMFwiKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkudW5tYXNrQXNOdW1iZXIgPyAoXCJcIiAhPT0gaS5yYWRpeFBvaW50ICYmIC0xICE9PSBuLmluZGV4T2YoaS5yYWRpeFBvaW50KSAmJiAobiA9IG4ucmVwbGFjZShhLmRlZmF1bHQuY2FsbCh0aGlzLCBpLnJhZGl4UG9pbnQpLCBcIi5cIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gKG4gPSBuLnJlcGxhY2UobmV3IFJlZ0V4cChcIl5cIiArICgwLCBhLmRlZmF1bHQpKGkubmVnYXRpb25TeW1ib2wuZnJvbnQpKSwgXCItXCIpKS5yZXBsYWNlKG5ldyBSZWdFeHAoKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdCkoaS5uZWdhdGlvblN5bWJvbC5iYWNrKSArIFwiJFwiKSwgXCJcIiksIE51bWJlcihuKSkgOiBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9ICh0Lm51bWVyaWNJbnB1dCA/IGUuc2xpY2UoKS5yZXZlcnNlKCkgOiBlKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpID0gKGkgPSAoaSA9IChpID0gKGkgPSBpLnJlcGxhY2UobmV3IFJlZ0V4cChcIl5cIiArICgwLCBhLmRlZmF1bHQpKHQubmVnYXRpb25TeW1ib2wuZnJvbnQpKSwgXCItXCIpKS5yZXBsYWNlKG5ldyBSZWdFeHAoKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdCkodC5uZWdhdGlvblN5bWJvbC5iYWNrKSArIFwiJFwiKSwgXCJcIikpLnJlcGxhY2UodC5wcmVmaXgsIFwiXCIpKS5yZXBsYWNlKHQuc3VmZml4LCBcIlwiKSkucmVwbGFjZShuZXcgUmVnRXhwKCgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQpKHQuZ3JvdXBTZXBhcmF0b3IpICsgXCIoWzAtOV17M30pXCIsIFwiZ1wiKSwgXCIkMVwiKSwgXCIsXCIgPT09IHQucmFkaXhQb2ludCAmJiAoaSA9IGkucmVwbGFjZSgoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0KSh0LnJhZGl4UG9pbnQpLCBcIi5cIikpLCBpc0Zpbml0ZShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJlZm9yZU1hc2s6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHQucmFkaXhQb2ludCB8fCBcIixcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Zpbml0ZSh0LmRpZ2l0cykgJiYgKHQuZGlnaXRzID0gcGFyc2VJbnQodC5kaWdpdHMpKSwgXCJudW1iZXJcIiAhPSB0eXBlb2YgZSAmJiBcIm51bWJlclwiICE9PSB0LmlucHV0VHlwZSB8fCBcIlwiID09PSBpIHx8IChlID0gZS50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIGkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IFwiLVwiID09PSBlLmNoYXJBdCgwKSB8fCBlLmNoYXJBdCgwKSA9PT0gdC5uZWdhdGlvblN5bWJvbC5mcm9udCwgciA9IGUuc3BsaXQoaSksIG8gPSByWzBdLnJlcGxhY2UoL1teXFwtMC05XS9nLCBcIlwiKSwgcyA9IHIubGVuZ3RoID4gMSA/IHJbMV0ucmVwbGFjZSgvW14wLTldL2csIFwiXCIpIDogXCJcIiwgbCA9IHIubGVuZ3RoID4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gbyArIChcIlwiICE9PSBzID8gaSArIHMgOiBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiXCIgIT09IGkgJiYgKGMgPSB0LmRpZ2l0c09wdGlvbmFsID8gdC5kaWdpdHMgPCBzLmxlbmd0aCA/IHQuZGlnaXRzIDogcy5sZW5ndGggOiB0LmRpZ2l0cywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gcyB8fCAhdC5kaWdpdHNPcHRpb25hbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBNYXRoLnBvdygxMCwgYyB8fCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IGUucmVwbGFjZSgoMCwgYS5kZWZhdWx0KShpKSwgXCIuXCIpLCBpc05hTihwYXJzZUZsb2F0KGUpKSB8fCAoZSA9ICh0LnJvdW5kaW5nRk4ocGFyc2VGbG9hdChlKSAqIGYpIC8gZikudG9GaXhlZChjKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gZS50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PT0gdC5kaWdpdHMgJiYgLTEgIT09IGUuaW5kZXhPZihpKSAmJiAoZSA9IGUuc3Vic3RyaW5nKDAsIGUuaW5kZXhPZihpKSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICE9PSB0Lm1pbiB8fCBudWxsICE9PSB0Lm1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGUudG9TdHJpbmcoKS5yZXBsYWNlKGksIFwiLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gdC5taW4gJiYgZCA8IHQubWluID8gZSA9IHQubWluLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgaSkgOiBudWxsICE9PSB0Lm1heCAmJiBkID4gdC5tYXggJiYgKGUgPSB0Lm1heC50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIGkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gJiYgXCItXCIgIT09IGUuY2hhckF0KDApICYmIChlID0gXCItXCIgKyBlKSwgdShlLnRvU3RyaW5nKCkuc3BsaXQoXCJcIiksIGMsIHQsIGwpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25CZWZvcmVXcml0ZTogZnVuY3Rpb24oZSwgdCwgaSwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHIoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgIT09IG4uX19maW5hbmNlSW5wdXQgfHwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlLmluZGV4T2Yobi5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xICE9PSBpICYmIGUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSBuLmdyb3VwU2VwYXJhdG9yKSBmb3IgKDstMSAhPT0gKGkgPSBlLmluZGV4T2Yobi5ncm91cFNlcGFyYXRvcikpOyApIGUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8sIHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4uc3RyaXBMZWFkaW5nWmVyb2VzICYmIChzID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG5ldyBSZWdFeHAoXCIoXlwiICsgKFwiXCIgIT09IHQubmVnYXRpb25TeW1ib2wuZnJvbnQgPyAoMCwgYS5kZWZhdWx0KSh0Lm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiP1wiIDogXCJcIikgKyAoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdCkodC5wcmVmaXgpICsgXCIpKC4qKShcIiArICgwLCBhLmRlZmF1bHQpKHQuc3VmZml4KSArIChcIlwiICE9IHQubmVnYXRpb25TeW1ib2wuYmFjayA/ICgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0KSh0Lm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCI/XCIgOiBcIlwiKSArIFwiJClcIikuZXhlYyhlLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIikpLCBuID0gaSA/IGlbMl0gOiBcIlwiLCByID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuICYmIChuID0gbi5zcGxpdCh0LnJhZGl4UG9pbnQuY2hhckF0KDApKVswXSwgciA9IG5ldyBSZWdFeHAoXCJeWzBcIiArIHQuZ3JvdXBTZXBhcmF0b3IgKyBcIl0qXCIpLmV4ZWMobikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISghciB8fCAhKHJbMF0ubGVuZ3RoID4gMSB8fCByWzBdLmxlbmd0aCA+IDAgJiYgclswXS5sZW5ndGggPCBuLmxlbmd0aCkpICYmIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSh0LCBuKSkpIGZvciAodmFyIGMgPSB0LmpvaW4oXCJcIikubGFzdEluZGV4T2Yoc1swXS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSkgLSAoc1swXSA9PSBzLmlucHV0ID8gMCA6IDEpLCBmID0gc1swXSA9PSBzLmlucHV0ID8gMSA6IDAsIGQgPSBzWzBdLmxlbmd0aCAtIGY7IGQgPiAwOyBkLS0pIGRlbGV0ZSB0aGlzLm1hc2tzZXQudmFsaWRQb3NpdGlvbnNbYyArIGRdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdFtjICsgZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmx1clwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoZWNrdmFsXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBuLm1pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBuLm9uVW5NYXNrKHQuc2xpY2UoKS5yZXZlcnNlKCkuam9pbihcIlwiKSwgdm9pZCAwLCBsLmV4dGVuZCh7fSwgbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFza0FzTnVtYmVyOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IG4ubWluICYmIHAgPCBuLm1pbikgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB1KG4ubWluLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgbi5yYWRpeFBvaW50KS5zcGxpdChcIlwiKSwgbi5kaWdpdHMsIG4pLnJldmVyc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodFt0Lmxlbmd0aCAtIDFdID09PSBuLm5lZ2F0aW9uU3ltYm9sLmZyb250KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IG5ldyBSZWdFeHAoXCIoXlwiICsgKFwiXCIgIT0gbi5uZWdhdGlvblN5bWJvbC5mcm9udCA/ICgwLCBhLmRlZmF1bHQpKG4ubmVnYXRpb25TeW1ib2wuZnJvbnQpICsgXCI/XCIgOiBcIlwiKSArICgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdCkobi5wcmVmaXgpICsgXCIpKC4qKShcIiArICgwLCBhLmRlZmF1bHQpKG4uc3VmZml4KSArIChcIlwiICE9IG4ubmVnYXRpb25TeW1ib2wuYmFjayA/ICgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdCkobi5uZWdhdGlvblN5bWJvbC5iYWNrKSArIFwiP1wiIDogXCJcIikgKyBcIiQpXCIpLmV4ZWMocih0LnNsaWNlKCksICEwKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwID09IChoID8gaFsyXSA6IFwiXCIpICYmIChvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IFsgMCBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcIlwiICE9PSBuLnJhZGl4UG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuaW5kZXhPZihuLnJhZGl4UG9pbnQpID09PSBuLnN1ZmZpeC5sZW5ndGggJiYgKG8gJiYgby5idWZmZXIgPyBvLmJ1ZmZlci5zcGxpY2UoMCwgMSArIG4uc3VmZml4Lmxlbmd0aCkgOiAodC5zcGxpY2UoMCwgMSArIG4uc3VmZml4Lmxlbmd0aCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiByKHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4uZW5mb3JjZURpZ2l0c09uQmx1cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSAobyA9IG8gfHwge30pICYmIG8uYnVmZmVyIHx8IHQuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnJlZnJlc2hGcm9tQnVmZmVyID0gITAsIG8uYnVmZmVyID0gdSh2LCBuLmRpZ2l0cywgbiwgITApLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIHQsIGksIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSwgciA9IGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDMgIT0gZS5sb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcywgYyA9IGUua2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHMgPSBuLnNob3J0Y3V0cyAmJiBuLnNob3J0Y3V0c1tjXSkgJiYgcy5sZW5ndGggPiAxKSByZXR1cm4gdGhpcy5pbnB1dG1hc2suX192YWx1ZVNldC5jYWxsKHRoaXMsIHBhcnNlRmxvYXQodGhpcy5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpKSAqIHBhcnNlSW50KHMpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudHJpZ2dlcihcInNldHZhbHVlXCIpLCAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSkgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBvLmtleXMuQXJyb3dVcDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRtYXNrLl9fdmFsdWVTZXQuY2FsbCh0aGlzLCBwYXJzZUZsb2F0KHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSkgKyBwYXJzZUludChuLnN0ZXApKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudHJpZ2dlcihcInNldHZhbHVlXCIpLCAhMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBvLmtleXMuQXJyb3dEb3duOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dG1hc2suX192YWx1ZVNldC5jYWxsKHRoaXMsIHBhcnNlRmxvYXQodGhpcy5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpKSAtIHBhcnNlSW50KG4uc3RlcCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci50cmlnZ2VyKFwic2V0dmFsdWVcIiksICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkgJiYgKGUua2V5ID09PSBvLmtleXMuRGVsZXRlIHx8IGUua2V5ID09PSBvLmtleXMuQmFja3NwYWNlIHx8IGUua2V5ID09PSBvLmtleXMuQkFDS1NQQUNFX1NBRkFSSSkgJiYgaS5iZWdpbiAhPT0gdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRbZS5rZXkgPT09IG8ua2V5cy5EZWxldGUgPyBpLmJlZ2luIC0gMSA6IGkuZW5kXSA9PT0gbi5uZWdhdGlvblN5bWJvbC5mcm9udCkgcmV0dXJuIGEgPSB0LnNsaWNlKCkucmV2ZXJzZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gbi5uZWdhdGlvblN5bWJvbC5mcm9udCAmJiBhLnNoaWZ0KCksIFwiXCIgIT09IG4ubmVnYXRpb25TeW1ib2wuYmFjayAmJiBhLnBvcCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci50cmlnZ2VyKFwic2V0dmFsdWVcIiwgWyBhLmpvaW4oXCJcIiksIGkuYmVnaW4gXSksICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IG4uX3JhZGl4RGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gdC5pbmRleE9mKG4ucmFkaXhQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5kaWdpdHNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09PSBmKSByZXR1cm4gKGEgPSB0LnNsaWNlKCkucmV2ZXJzZSgpKS5wb3AoKSwgci50cmlnZ2VyKFwic2V0dmFsdWVcIiwgWyBhLmpvaW4oXCJcIiksIGkuYmVnaW4gPj0gYS5sZW5ndGggPyBhLmxlbmd0aCA6IGkuYmVnaW4gXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgtMSAhPT0gZiAmJiAoaS5iZWdpbiA8IGYgfHwgaS5lbmQgPCBmIHx8IGUua2V5ID09PSBvLmtleXMuRGVsZXRlICYmIChpLmJlZ2luID09PSBmIHx8IGkuYmVnaW4gLSAxID09PSBmKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaS5iZWdpbiA9PT0gaS5lbmQgJiYgKGUua2V5ID09PSBvLmtleXMuQmFja3NwYWNlIHx8IGUua2V5ID09PSBvLmtleXMuQkFDS1NQQUNFX1NBRkFSSSA/IGkuYmVnaW4rKyA6IGUua2V5ID09PSBvLmtleXMuRGVsZXRlICYmIGkuYmVnaW4gLSAxID09PSBmICYmIChkID0gbC5leHRlbmQoe30sIGkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLmJlZ2luLS0sIGkuZW5kLS0pKSwgKGEgPSB0LnNsaWNlKCkucmV2ZXJzZSgpKS5zcGxpY2UoYS5sZW5ndGggLSBpLmJlZ2luLCBpLmJlZ2luIC0gaS5lbmQgKyAxKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHUoYSwgbi5kaWdpdHMsIG4pLmpvaW4oXCJcIiksIGQgJiYgKGkgPSBkKSwgci50cmlnZ2VyKFwic2V0dmFsdWVcIiwgWyBhLCBpLmJlZ2luID49IGEubGVuZ3RoID8gZiArIDEgOiBpLmJlZ2luIF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIixcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZ2l0czogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZ2l0c09wdGlvbmFsOiAhMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogXCJudW1lcmljXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZWdlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZ2l0czogMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1ZmZpeDogXCIgJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlnaXRzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNaW51czogITFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW5kaWFubnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF9tYXNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiKFwiICsgZS5ncm91cFNlcGFyYXRvciArIFwiOTkpeyp8MX0oXCIgKyBlLmdyb3VwU2VwYXJhdG9yICsgXCI5OTkpezF8MX1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFNlcGFyYXRvcjogXCIsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpeFBvaW50OiBcIi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZ2l0czogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZ2l0c09wdGlvbmFsOiAhMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTM4MDogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBuO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5kZWZhdWx0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBhID0gKChuID0gaSg4NzQxKSkgJiYgbi5fX2VzTW9kdWxlID8gbiA6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogblxuICAgICAgICAgICAgICAgIH0pLmRlZmF1bHQgPyB3aW5kb3cgOiB7fTtcbiAgICAgICAgICAgICAgICB0LmRlZmF1bHQgPSBhO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc3NjA6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuSGFuZGxlTmF0aXZlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gZSA/IGUuaW5wdXRtYXNrIDogdGhpcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gdCAmJiAoZS5wbGFjZWhvbGRlciAhPT0gdCB8fCBcIlwiID09PSBlLnBsYWNlaG9sZGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gci5nZXRCdWZmZXIuY2FsbChpKS5zbGljZSgpLCBhID0gZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgIT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xID09PSBvICYmIGEgPT09IHIuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpKS5qb2luKFwiXCIpID8gbiA9IFtdIDogLTEgIT09IG8gJiYgdS5jYWxsKGksIG4pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZChlLCBuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBlLnBsYWNlaG9sZGVyICE9PSB0ICYmIChlLnBsYWNlaG9sZGVyID0gdCwgXCJcIiA9PT0gZS5wbGFjZWhvbGRlciAmJiBlLnJlbW92ZUF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpKTtcbiAgICAgICAgICAgICAgICB9LCB0LmFwcGx5SW5wdXRWYWx1ZSA9IGMsIHQuY2hlY2tWYWwgPSBmLCB0LmNsZWFyT3B0aW9uYWxUYWlsID0gdSwgdC51bm1hc2tlZHZhbHVlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUgPyBlLmlucHV0bWFzayA6IHRoaXMsIGkgPSB0Lm9wdHMsIG4gPSB0Lm1hc2tzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBlLmlucHV0bWFzaykgcmV0dXJuIGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmlucHV0bWFzayAmJiBlLmlucHV0bWFzay5yZWZyZXNoVmFsdWUgJiYgYyhlLCBlLmlucHV0bWFzay5fdmFsdWVHZXQoITApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gW10sIG8gPSBuLnZhbGlkUG9zaXRpb25zLCBzID0gMCwgbCA9IG8ubGVuZ3RoOyBzIDwgbDsgcysrKSBvW3NdICYmIG9bc10ubWF0Y2ggJiYgKDEgIT0gb1tzXS5tYXRjaC5zdGF0aWMgfHwgQXJyYXkuaXNBcnJheShuLm1ldGFkYXRhKSAmJiAhMCAhPT0gb1tzXS5nZW5lcmF0ZWRJbnB1dCkgJiYgYS5wdXNoKG9bc10uaW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IDAgPT09IGEubGVuZ3RoID8gXCJcIiA6ICh0LmlzUlRMID8gYS5yZXZlcnNlKCkgOiBhKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpLm9uVW5NYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9ICh0LmlzUlRMID8gci5nZXRCdWZmZXIuY2FsbCh0KS5zbGljZSgpLnJldmVyc2UoKSA6IHIuZ2V0QnVmZmVyLmNhbGwodCkpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB1ID0gaS5vblVuTWFzay5jYWxsKHQsIGYsIHUsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1O1xuICAgICAgICAgICAgICAgIH0sIHQud3JpdGVCdWZmZXIgPSBkO1xuICAgICAgICAgICAgICAgIHZhciBuID0gaSgyODM5KSwgYSA9IGkoNDcxMyksIHIgPSBpKDg3MTEpLCBvID0gaSg3MjE1KSwgcyA9IGkoOTg0NSksIGwgPSBpKDYwMzApO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGUgPyBlLmlucHV0bWFzayA6IHRoaXMsIG4gPSBpLm9wdHM7XG4gICAgICAgICAgICAgICAgICAgIGUuaW5wdXRtYXNrLnJlZnJlc2hWYWx1ZSA9ICExLCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4ub25CZWZvcmVNYXNrICYmICh0ID0gbi5vbkJlZm9yZU1hc2suY2FsbChpLCB0LCBuKSB8fCB0KSwgXG4gICAgICAgICAgICAgICAgICAgIGYoZSwgITAsICExLCB0ID0gKHQgfHwgXCJcIikudG9TdHJpbmcoKS5zcGxpdChcIlwiKSksIGkudW5kb1ZhbHVlID0gaS5fdmFsdWVHZXQoITApLCBcbiAgICAgICAgICAgICAgICAgICAgKG4uY2xlYXJNYXNrT25Mb3N0Rm9jdXMgfHwgbi5jbGVhckluY29tcGxldGUpICYmIGUuaW5wdXRtYXNrLl92YWx1ZUdldCgpID09PSByLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaSkuam9pbihcIlwiKSAmJiAtMSA9PT0gci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGkpICYmIGUuaW5wdXRtYXNrLl92YWx1ZVNldChcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdShlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCwgaSA9IGEuZ2V0TWFza1RlbXBsYXRlLmNhbGwodGhpcywgITAsIDAsICEwLCB2b2lkIDAsICEwKTsgdm9pZCAwICE9PSAodCA9IGkuc2hpZnQoKSk7ICkgZS5wdXNoKHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZihlLCB0LCBpLCBuLCBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gZSA/IGUuaW5wdXRtYXNrIDogdGhpcywgdSA9IGMubWFza3NldCwgZiA9IGMub3B0cywgcCA9IGMuZGVwZW5kZW5jeUxpYiwgaCA9IG4uc2xpY2UoKSwgdiA9IFwiXCIsIG0gPSAtMSwgZyA9IHZvaWQgMCwgeSA9IGYuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlcjtcbiAgICAgICAgICAgICAgICAgICAgZi5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0gXCJcIiwgci5yZXNldE1hc2tTZXQuY2FsbChjKSwgdS50ZXN0cyA9IHt9LCBtID0gZi5yYWRpeFBvaW50ID8gci5kZXRlcm1pbmVOZXdDYXJldFBvc2l0aW9uLmNhbGwoYywge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IDBcbiAgICAgICAgICAgICAgICAgICAgfSwgITEsICExID09PSBmLl9fZmluYW5jZUlucHV0ID8gXCJyYWRpeEZvY3VzXCIgOiB2b2lkIDApLmJlZ2luIDogMCwgdS5wID0gbSwgYy5jYXJldFBvcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBtXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHZhciBrID0gW10sIGIgPSBjLmNhcmV0UG9zO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaC5mb3JFYWNoKChmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgcC5FdmVudChcIl9jaGVja3ZhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmtleSA9IGUsIHYgKz0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChjLCB2b2lkIDAsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gYS5nZXRNYXNrVGVtcGxhdGUuY2FsbChjLCAhMCwgMCkuc2xpY2UoZSwgci5zZWVrTmV4dC5jYWxsKGMsIGUsICExLCAhMSkpLmpvaW4oXCJcIikucmVwbGFjZSgvJy9nLCBcIlwiKSwgbiA9IGkuaW5kZXhPZih0KTsgbiA+IDAgJiYgXCIgXCIgPT09IGlbbiAtIDFdOyApIG4tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSAwID09PSBuICYmICFyLmlzTWFzay5jYWxsKGMsIGUpICYmIChhLmdldFRlc3QuY2FsbChjLCBlKS5tYXRjaC5uYXRpdmVEZWYgPT09IHQuY2hhckF0KDApIHx8ICEwID09PSBhLmdldFRlc3QuY2FsbChjLCBlKS5tYXRjaC5zdGF0aWMgJiYgYS5nZXRUZXN0LmNhbGwoYywgZSkubWF0Y2gubmF0aXZlRGVmID09PSBcIidcIiArIHQuY2hhckF0KDApIHx8IFwiIFwiID09PSBhLmdldFRlc3QuY2FsbChjLCBlKS5tYXRjaC5uYXRpdmVEZWYgJiYgKGEuZ2V0VGVzdC5jYWxsKGMsIGUgKyAxKS5tYXRjaC5uYXRpdmVEZWYgPT09IHQuY2hhckF0KDApIHx8ICEwID09PSBhLmdldFRlc3QuY2FsbChjLCBlICsgMSkubWF0Y2guc3RhdGljICYmIGEuZ2V0VGVzdC5jYWxsKGMsIGUgKyAxKS5tYXRjaC5uYXRpdmVEZWYgPT09IFwiJ1wiICsgdC5jaGFyQXQoMCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvICYmIG4gPiAwICYmICFyLmlzTWFzay5jYWxsKGMsIGUsICExLCAhMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gci5zZWVrTmV4dC5jYWxsKGMsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5jYXJldFBvcy5iZWdpbiA8IHMgJiYgKGMuY2FyZXRQb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0obSwgdikgPyAoZyA9IGwuRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoYywgbiwgITAsICExLCBpLCBjLmNhcmV0UG9zLmJlZ2luKSkgJiYgKG0gPSBjLmNhcmV0UG9zLmJlZ2luICsgMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IFwiXCIpIDogZyA9IGwuRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoYywgbiwgITAsICExLCBpLCBvICsgMSksIGcgPyAodm9pZCAwICE9PSBnLnBvcyAmJiB1LnZhbGlkUG9zaXRpb25zW2cucG9zXSAmJiAhMCA9PT0gdS52YWxpZFBvc2l0aW9uc1tnLnBvc10ubWF0Y2guc3RhdGljICYmIHZvaWQgMCA9PT0gdS52YWxpZFBvc2l0aW9uc1tnLnBvc10uYWx0ZXJuYXRpb24gJiYgKGsucHVzaChnLnBvcyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuaXNSVEwgfHwgKGcuZm9yd2FyZFBvc2l0aW9uID0gZy5wb3MgKyAxKSksIGQuY2FsbChjLCB2b2lkIDAsIHIuZ2V0QnVmZmVyLmNhbGwoYyksIGcuZm9yd2FyZFBvc2l0aW9uLCBuLCAhMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuY2FyZXRQb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBnLmZvcndhcmRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBnLmZvcndhcmRQb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGIgPSBjLmNhcmV0UG9zKSA6IHZvaWQgMCA9PT0gdS52YWxpZFBvc2l0aW9uc1t0XSAmJiBoW3RdID09PSBhLmdldFBsYWNlaG9sZGVyLmNhbGwoYywgdCkgJiYgci5pc01hc2suY2FsbChjLCB0LCAhMCkgPyBjLmNhcmV0UG9zLmJlZ2luKysgOiBjLmNhcmV0UG9zID0gYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkpLCBrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4LCBQLCB3ID0gci5zZWVrTmV4dC5jYWxsKGMsIC0xLCB2b2lkIDAsICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghby5pc0NvbXBsZXRlLmNhbGwoYywgci5nZXRCdWZmZXIuY2FsbChjKSkgJiYgay5sZW5ndGggPD0gdyB8fCBvLmlzQ29tcGxldGUuY2FsbChjLCByLmdldEJ1ZmZlci5jYWxsKGMpKSAmJiBrLmxlbmd0aCA+IDAgJiYgay5sZW5ndGggIT09IHcgJiYgMCA9PT0ga1swXSkgZm9yICh2YXIgUyA9IHc7IHZvaWQgMCAhPT0gKHggPSBrLnNoaWZ0KCkpOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgTSA9IG5ldyBwLkV2ZW50KFwiX2NoZWNrdmFsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoUCA9IHUudmFsaWRQb3NpdGlvbnNbeF0pLmdlbmVyYXRlZElucHV0ID0gITAsIE0ua2V5ID0gUC5pbnB1dCwgKGcgPSBsLkV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKGMsIE0sICEwLCAhMSwgaSwgUykpICYmIHZvaWQgMCAhPT0gZy5wb3MgJiYgZy5wb3MgIT09IHggJiYgdS52YWxpZFBvc2l0aW9uc1tnLnBvc10gJiYgITAgPT09IHUudmFsaWRQb3NpdGlvbnNbZy5wb3NdLm1hdGNoLnN0YXRpYykgay5wdXNoKGcucG9zKTsgZWxzZSBpZiAoIWcpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ICYmIGQuY2FsbChjLCBlLCByLmdldEJ1ZmZlci5jYWxsKGMpLCBnID8gZy5mb3J3YXJkUG9zaXRpb24gOiBjLmNhcmV0UG9zLmJlZ2luLCBzIHx8IG5ldyBwLkV2ZW50KFwiY2hlY2t2YWxcIiksIHMgJiYgKFwiaW5wdXRcIiA9PT0gcy50eXBlICYmIGMudW5kb1ZhbHVlICE9PSByLmdldEJ1ZmZlci5jYWxsKGMpLmpvaW4oXCJcIikgfHwgXCJwYXN0ZVwiID09PSBzLnR5cGUpKSwgXG4gICAgICAgICAgICAgICAgICAgIGYuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciA9IHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGQoZSwgdCwgaSwgYSwgcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IGUgPyBlLmlucHV0bWFzayA6IHRoaXMsIGMgPSBsLm9wdHMsIHUgPSBsLmRlcGVuZGVuY3lMaWI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYy5vbkJlZm9yZVdyaXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IGMub25CZWZvcmVXcml0ZS5jYWxsKGwsIGEsIHQsIGksIGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZi5yZWZyZXNoRnJvbUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGYucmVmcmVzaEZyb21CdWZmZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ucmVmcmVzaEZyb21CdWZmZXIuY2FsbChsLCAhMCA9PT0gZCA/IGQgOiBkLnN0YXJ0LCBkLmVuZCwgZi5idWZmZXIgfHwgdCksIHQgPSByLmdldEJ1ZmZlci5jYWxsKGwsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBpICYmIChpID0gdm9pZCAwICE9PSBmLmNhcmV0ID8gZi5jYXJldCA6IGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGUgJiYgKGUuaW5wdXRtYXNrLl92YWx1ZVNldCh0LmpvaW4oXCJcIikpLCB2b2lkIDAgPT09IGkgfHwgdm9pZCAwICE9PSBhICYmIFwiYmx1clwiID09PSBhLnR5cGUgfHwgci5jYXJldC5jYWxsKGwsIGUsIGksIHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAgIT09IGEgJiYgXCJrZXlkb3duXCIgPT09IGEudHlwZSAmJiAoYS5rZXkgPT09IG4ua2V5cy5EZWxldGUgfHwgYS5rZXkgPT09IG4ua2V5cy5CYWNrc3BhY2UpKSwgXG4gICAgICAgICAgICAgICAgICAgICEwID09PSBzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSB1KGUpLCBoID0gZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmlucHV0bWFzay5za2lwSW5wdXRFdmVudCA9ICEwLCBwLnRyaWdnZXIoXCJpbnB1dFwiKSwgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9PT0gci5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGwpLmpvaW4oXCJcIikgPyBwLnRyaWdnZXIoXCJjbGVhcmVkXCIpIDogITAgPT09IG8uaXNDb21wbGV0ZS5jYWxsKGwsIHQpICYmIHAudHJpZ2dlcihcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDIzOTQ6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGkoMTU3KSwgYSA9IG0oaSg0OTYzKSksIHIgPSBtKGkoOTM4MCkpLCBvID0gaSgyMzkxKSwgcyA9IGkoNDcxMyksIGwgPSBpKDg3MTEpLCBjID0gaSg3MjE1KSwgdSA9IGkoNzc2MCksIGYgPSBpKDk3MTYpLCBkID0gbShpKDczOTIpKSwgcCA9IG0oaSgzOTc2KSksIGggPSBtKGkoODc0MSkpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHYoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIGUuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBlICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9LCB2KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBtKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGcgPSByLmRlZmF1bHQuZG9jdW1lbnQsIHkgPSBcIl9pbnB1dG1hc2tfb3B0c1wiO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGsoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgaykpIHJldHVybiBuZXcgayhlLCB0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVwZW5kZW5jeUxpYiA9IGEuZGVmYXVsdCwgdGhpcy5lbCA9IHZvaWQgMCwgdGhpcy5ldmVudHMgPSB7fSwgdGhpcy5tYXNrc2V0ID0gdm9pZCAwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICEwICE9PSBpICYmIChcIltvYmplY3QgT2JqZWN0XVwiID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkgPyB0ID0gZSA6ICh0ID0gdCB8fCB7fSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlICYmICh0LmFsaWFzID0gZSkpLCB0aGlzLm9wdHMgPSBhLmRlZmF1bHQuZXh0ZW5kKCEwLCB7fSwgdGhpcy5kZWZhdWx0cywgdCksIHRoaXMubm9NYXNrc0NhY2hlID0gdCAmJiB2b2lkIDAgIT09IHQuZGVmaW5pdGlvbnMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyT3B0aW9ucyA9IHQgfHwge30sIGIodGhpcy5vcHRzLmFsaWFzLCB0LCB0aGlzLm9wdHMpKSwgdGhpcy5yZWZyZXNoVmFsdWUgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuZG9WYWx1ZSA9IHZvaWQgMCwgdGhpcy4kZWwgPSB2b2lkIDAsIHRoaXMuc2tpcElucHV0RXZlbnQgPSAhMSwgdGhpcy52YWxpZGF0aW9uRXZlbnQgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlnbm9yYWJsZSA9ICExLCB0aGlzLm1heExlbmd0aCwgdGhpcy5tb3VzZUVudGVyID0gITEsIHRoaXMuY2xpY2tlZCA9IDAsIHRoaXMub3JpZ2luYWxQbGFjZWhvbGRlciA9IHZvaWQgMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ29tcG9zaW5nID0gITEsIHRoaXMuaGFzQWx0ZXJuYXRvciA9ICExO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGIoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGsucHJvdG90eXBlLmFsaWFzZXNbZV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuID8gKG4uYWxpYXMgJiYgYihuLmFsaWFzLCB2b2lkIDAsIGkpLCBhLmRlZmF1bHQuZXh0ZW5kKCEwLCBpLCBuKSwgYS5kZWZhdWx0LmV4dGVuZCghMCwgaSwgdCksIFxuICAgICAgICAgICAgICAgICAgICAhMCkgOiAobnVsbCA9PT0gaS5tYXNrICYmIChpLm1hc2sgPSBlKSwgITEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrLnByb3RvdHlwZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YUF0dHJpYnV0ZTogXCJkYXRhLWlucHV0bWFza1wiLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0czogcC5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uczogZC5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICBhbGlhc2VzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgbWFza3NDYWNoZToge30sXG4gICAgICAgICAgICAgICAgICAgIGdldCBpc1JUTCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdHMuaXNSVEwgfHwgdGhpcy5vcHRzLm51bWVyaWNJbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgJiYgKGUgPSBnLmdldEVsZW1lbnRCeUlkKGUpIHx8IGcucXVlcnlTZWxlY3RvckFsbChlKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGUgPSBlLm5vZGVOYW1lID8gWyBlIF0gOiBBcnJheS5pc0FycmF5KGUpID8gZSA6IFtdLnNsaWNlLmNhbGwoZSkpLmZvckVhY2goKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGEuZGVmYXVsdC5leHRlbmQoITAsIHt9LCB0Lm9wdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmdW5jdGlvbihlLCB0LCBpLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG8odCwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBcIlwiID09PSBuID8gdCA6IG4gKyBcIi1cIiArIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICE9PSAoYSA9IHZvaWQgMCAhPT0gYSA/IGEgOiBlLmdldEF0dHJpYnV0ZShvKSkgJiYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGEgJiYgKDAgPT09IHQuaW5kZXhPZihcIm9uXCIpID8gYSA9IHIuZGVmYXVsdFthXSA6IFwiZmFsc2VcIiA9PT0gYSA/IGEgPSAhMSA6IFwidHJ1ZVwiID09PSBhICYmIChhID0gITApKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpW3RdID0gYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSB0LmltcG9ydERhdGFBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcywgbCwgYywgdSwgZiA9IGUuZ2V0QXR0cmlidXRlKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgJiYgXCJcIiAhPT0gZiAmJiAoZiA9IGYucmVwbGFjZSgvJy9nLCAnXCInKSwgbCA9IEpTT04ucGFyc2UoXCJ7XCIgKyBmICsgXCJ9XCIpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsKSBmb3IgKHUgaW4gYyA9IHZvaWQgMCwgbCkgaWYgKFwiYWxpYXNcIiA9PT0gdS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IGxbdV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHMgaW4gbyhcImFsaWFzXCIsIGMpLCBpLmFsaWFzICYmIGIoaS5hbGlhcywgaSwgdCksIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobCkgZm9yICh1IGluIGMgPSB2b2lkIDAsIGwpIGlmICh1LnRvTG93ZXJDYXNlKCkgPT09IHMudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gbFt1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ocywgYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0LmV4dGVuZCghMCwgdCwgaSksIChcInJ0bFwiID09PSBlLmRpciB8fCB0LnJpZ2h0QWxpZ24pICYmIChlLnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcInJ0bFwiID09PSBlLmRpciB8fCB0Lm51bWVyaWNJbnB1dCkgJiYgKGUuZGlyID0gXCJsdHJcIiwgZS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmlzUlRMID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoaSkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZSwgcywgYS5kZWZhdWx0LmV4dGVuZCghMCwge30sIHQudXNlck9wdGlvbnMpLCB0LmRhdGFBdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gKDAsIG8uZ2VuZXJhdGVNYXNrU2V0KShzLCB0Lm5vTWFza3NDYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gbCAmJiAodm9pZCAwICE9PSBlLmlucHV0bWFzayAmJiAoZS5pbnB1dG1hc2sub3B0cy5hdXRvVW5tYXNrID0gITAsIGUuaW5wdXRtYXNrLnJlbW92ZSgpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5wdXRtYXNrID0gbmV3IGsodm9pZCAwLCB2b2lkIDAsICEwKSwgZS5pbnB1dG1hc2sub3B0cyA9IHMsIGUuaW5wdXRtYXNrLm5vTWFza3NDYWNoZSA9IHQubm9NYXNrc0NhY2hlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2sudXNlck9wdGlvbnMgPSBhLmRlZmF1bHQuZXh0ZW5kKCEwLCB7fSwgdC51c2VyT3B0aW9ucyksIGUuaW5wdXRtYXNrLmVsID0gZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5wdXRtYXNrLiRlbCA9ICgwLCBhLmRlZmF1bHQpKGUpLCBlLmlucHV0bWFzay5tYXNrc2V0ID0gbCwgYS5kZWZhdWx0LmRhdGEoZSwgeSwgdC51c2VyT3B0aW9ucyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLm1hc2suY2FsbChlLmlucHV0bWFzaykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgZSAmJiBlWzBdICYmIGVbMF0uaW5wdXRtYXNrIHx8IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgPyB0aGlzLm9wdHNbZV0gOiBcIm9iamVjdFwiID09PSB2KGUpID8gKGEuZGVmYXVsdC5leHRlbmQodGhpcy51c2VyT3B0aW9ucywgZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbCAmJiAhMCAhPT0gdCAmJiB0aGlzLm1hc2sodGhpcy5lbCksIHRoaXMpIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1bm1hc2tlZHZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8ICgwLCBvLmdlbmVyYXRlTWFza1NldCkodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSB0aGlzLmVsIHx8IHZvaWQgMCAhPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdGhpcy5vcHRzLm9uQmVmb3JlTWFzayAmJiB0aGlzLm9wdHMub25CZWZvcmVNYXNrLmNhbGwodGhpcywgZSwgdGhpcy5vcHRzKSB8fCBlKS5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1LmNoZWNrVmFsLmNhbGwodGhpcywgdm9pZCAwLCAhMSwgITEsIHQpLCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHRoaXMub3B0cy5vbkJlZm9yZVdyaXRlICYmIHRoaXMub3B0cy5vbkJlZm9yZVdyaXRlLmNhbGwodGhpcywgdm9pZCAwLCBsLmdldEJ1ZmZlci5jYWxsKHRoaXMpLCAwLCB0aGlzLm9wdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHUudW5tYXNrZWR2YWx1ZS5jYWxsKHRoaXMsIHRoaXMuZWwpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQuZGF0YSh0aGlzLmVsLCB5LCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMub3B0cy5hdXRvVW5tYXNrID8gKDAsIHUudW5tYXNrZWR2YWx1ZSkodGhpcy5lbCkgOiB0aGlzLl92YWx1ZUdldCh0aGlzLm9wdHMuYXV0b1VubWFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSAhPT0gbC5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKHRoaXMpLmpvaW4oXCJcIikgPyB0aGlzLl92YWx1ZVNldChlLCB0aGlzLm9wdHMuYXV0b1VubWFzaykgOiB0aGlzLl92YWx1ZVNldChcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5FdmVudFJ1bGVyLm9mZih0aGlzLmVsKSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLmVsKSwgXCJ2YWx1ZVwiKSAmJiB0aGlzLl9fdmFsdWVHZXQgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuZWwsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IHRoaXMuX192YWx1ZUdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiB0aGlzLl9fdmFsdWVTZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IGcuX19sb29rdXBHZXR0ZXJfXyAmJiB0aGlzLmVsLl9fbG9va3VwR2V0dGVyX18oXCJ2YWx1ZVwiKSAmJiB0aGlzLl9fdmFsdWVHZXQgJiYgKHRoaXMuZWwuX19kZWZpbmVHZXR0ZXJfXyhcInZhbHVlXCIsIHRoaXMuX192YWx1ZUdldCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuX19kZWZpbmVTZXR0ZXJfXyhcInZhbHVlXCIsIHRoaXMuX192YWx1ZVNldCkpLCB0aGlzLmVsLmlucHV0bWFzayA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXRlbXB0eW1hc2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCAoMCwgby5nZW5lcmF0ZU1hc2tTZXQpKHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmlzUlRMID8gbC5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKHRoaXMpLnJldmVyc2UoKSA6IGwuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbCh0aGlzKSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaGFzTWFza2VkVmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLm9wdHMuYXV0b1VubWFzaztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8ICgwLCBvLmdlbmVyYXRlTWFza1NldCkodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgYy5pc0NvbXBsZXRlLmNhbGwodGhpcywgbC5nZXRCdWZmZXIuY2FsbCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdldG1ldGFkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgKDAsIG8uZ2VuZXJhdGVNYXNrU2V0KSh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHRoaXMubWFza3NldC5tZXRhZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHMuZ2V0TWFza1RlbXBsYXRlLmNhbGwodGhpcywgITAsIDAsICExKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQubWV0YWRhdGEuZm9yRWFjaCgoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5tYXNrICE9PSBlIHx8IChlID0gdCwgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQubWV0YWRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgKDAsIG8uZ2VuZXJhdGVNYXNrU2V0KSh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0aGlzLm9wdHMub25CZWZvcmVNYXNrICYmIHRoaXMub3B0cy5vbkJlZm9yZU1hc2suY2FsbCh0aGlzLCBlLCB0aGlzLm9wdHMpIHx8IGUpLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUuY2hlY2tWYWwuY2FsbCh0aGlzLCB2b2lkIDAsICEwLCAhMSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZSA9IHRoaXMuaXNSVEwgPyBsLmdldEJ1ZmZlci5jYWxsKHRoaXMpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBsLmdldEJ1ZmZlci5jYWxsKHRoaXMpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gbC5nZXRCdWZmZXIuY2FsbCh0aGlzKSwgbiA9IGwuZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24uY2FsbCh0aGlzKSwgYSA9IGkubGVuZ3RoIC0gMTsgYSA+IG4gJiYgIWwuaXNNYXNrLmNhbGwodGhpcywgYSk7IGEtLSkgO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkuc3BsaWNlKG4sIGEgKyAxIC0gbiksIGMuaXNDb21wbGV0ZS5jYWxsKHRoaXMsIGkpICYmIGUgPT09ICh0aGlzLmlzUlRMID8gbC5nZXRCdWZmZXIuY2FsbCh0aGlzKS5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogbC5nZXRCdWZmZXIuY2FsbCh0aGlzKS5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgKDAsIG8uZ2VuZXJhdGVNYXNrU2V0KSh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdGhpcy5vcHRzLm9uQmVmb3JlTWFzayAmJiB0aGlzLm9wdHMub25CZWZvcmVNYXNrLmNhbGwodGhpcywgZSwgdGhpcy5vcHRzKSB8fCBlKS5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHUuY2hlY2tWYWwuY2FsbCh0aGlzLCB2b2lkIDAsICEwLCAhMSwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMuaXNSVEwgPyBsLmdldEJ1ZmZlci5jYWxsKHRoaXMpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBsLmdldEJ1ZmZlci5jYWxsKHRoaXMpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogdGhpcy5nZXRtZXRhZGF0YSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IDogbjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWwgJiYgKDAsIGEuZGVmYXVsdCkodGhpcy5lbCkudHJpZ2dlcihcInNldHZhbHVlXCIsIFsgZSBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5hbHlzZU1hc2s6IG8uYW5hbHlzZU1hc2tcbiAgICAgICAgICAgICAgICB9LCBrLmV4dGVuZERlZmF1bHRzID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQuZXh0ZW5kKCEwLCBrLnByb3RvdHlwZS5kZWZhdWx0cywgZSk7XG4gICAgICAgICAgICAgICAgfSwgay5leHRlbmREZWZpbml0aW9ucyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0LmV4dGVuZCghMCwgay5wcm90b3R5cGUuZGVmaW5pdGlvbnMsIGUpO1xuICAgICAgICAgICAgICAgIH0sIGsuZXh0ZW5kQWxpYXNlcyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0LmV4dGVuZCghMCwgay5wcm90b3R5cGUuYWxpYXNlcywgZSk7XG4gICAgICAgICAgICAgICAgfSwgay5mb3JtYXQgPSBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrKHQpLmZvcm1hdChlLCBpKTtcbiAgICAgICAgICAgICAgICB9LCBrLnVubWFzayA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGsodCkudW5tYXNrZWR2YWx1ZShlKTtcbiAgICAgICAgICAgICAgICB9LCBrLmlzVmFsaWQgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrKHQpLmlzVmFsaWQoZSk7XG4gICAgICAgICAgICAgICAgfSwgay5yZW1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgJiYgKGUgPSBnLmdldEVsZW1lbnRCeUlkKGUpIHx8IGcucXVlcnlTZWxlY3RvckFsbChlKSksIChlID0gZS5ub2RlTmFtZSA/IFsgZSBdIDogZSkuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2sgJiYgZS5pbnB1dG1hc2sucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9LCBrLnNldFZhbHVlID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIChlID0gZy5nZXRFbGVtZW50QnlJZChlKSB8fCBnLnF1ZXJ5U2VsZWN0b3JBbGwoZSkpLCAoZSA9IGUubm9kZU5hbWUgPyBbIGUgXSA6IGUpLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5wdXRtYXNrID8gZS5pbnB1dG1hc2suc2V0VmFsdWUodCkgOiAoMCwgYS5kZWZhdWx0KShlKS50cmlnZ2VyKFwic2V0dmFsdWVcIiwgWyB0IF0pO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSwgay5kZXBlbmRlbmN5TGliID0gYS5kZWZhdWx0LCByLmRlZmF1bHQuSW5wdXRtYXNrID0gaztcbiAgICAgICAgICAgICAgICB2YXIgeCA9IGs7XG4gICAgICAgICAgICAgICAgdC5kZWZhdWx0ID0geDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA1Mjk2OiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0sIG4oZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBhID0gaChpKDkzODApKSwgciA9IGgoaSgyMzk0KSksIG8gPSBoKGkoODc0MSkpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHMoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZW51bWVyYWJsZSA9IGEuZW51bWVyYWJsZSB8fCAhMSwgYS5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGEgJiYgKGEud3JpdGFibGUgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIChyID0gYS5rZXksIG8gPSB2b2lkIDAsIG8gPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT09IG4oZSkgfHwgbnVsbCA9PT0gZSkgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlW1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGkuY2FsbChlLCB0IHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT09IG4oYSkpIHJldHVybiBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gdCA/IFN0cmluZyA6IE51bWJlcikoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KHIsIFwic3RyaW5nXCIpLCBcInN5bWJvbFwiID09PSBuKG8pID8gbyA6IFN0cmluZyhvKSksIGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciByLCBvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBmKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpLCBhID0gcChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBwKHRoaXMpLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBSZWZsZWN0LmNvbnN0cnVjdChhLCBhcmd1bWVudHMsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGkgPSBhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIChcIm9iamVjdFwiID09PSBuKHQpIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCkpIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBlKSB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KHRoaXMsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIE1hcCA/IG5ldyBNYXAgOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgPT09IGUgfHwgKGkgPSBlLCAtMSA9PT0gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChpKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSkpIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuaGFzKGUpKSByZXR1cm4gdC5nZXQoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5zZXQoZSwgbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBuKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1KGUsIGFyZ3VtZW50cywgcCh0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGUucHJvdG90eXBlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgZChuLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgYyhlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdShlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1ID0gZigpID8gUmVmbGVjdC5jb25zdHJ1Y3QuYmluZCgpIDogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBbIG51bGwgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4ucHVzaC5hcHBseShuLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gbmV3IChGdW5jdGlvbi5iaW5kLmFwcGx5KGUsIG4pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpICYmIGQoYSwgaS5wcm90b3R5cGUpLCBhO1xuICAgICAgICAgICAgICAgICAgICB9LCB1LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGYoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBSZWZsZWN0IHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBQcm94eSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgKGZ1bmN0aW9uKCkge30pKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgITA7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuX19wcm90b19fID0gdCwgZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZChlLCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHAoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGgoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdiA9IGEuZGVmYXVsdC5kb2N1bWVudDtcbiAgICAgICAgICAgICAgICBpZiAoby5kZWZhdWx0ICYmIHYgJiYgdi5oZWFkICYmIHYuaGVhZC5hdHRhY2hTaGFkb3cgJiYgYS5kZWZhdWx0LmN1c3RvbUVsZW1lbnRzICYmIHZvaWQgMCA9PT0gYS5kZWZhdWx0LmN1c3RvbUVsZW1lbnRzLmdldChcImlucHV0LW1hc2tcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQgJiYgbnVsbCAhPT0gdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0ICYmIHQucHJvdG90eXBlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogITFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgdCAmJiBkKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShvLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0LCBpLCBuLCBhID0gbChvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG8oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0odGhpcywgbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSAoZSA9IGEuY2FsbCh0aGlzKSkuZ2V0QXR0cmlidXRlTmFtZXMoKSwgaSA9IGUuYXR0YWNoU2hhZG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJjbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBuID0gdi5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBpbiBuLnR5cGUgPSBcInRleHRcIiwgaS5hcHBlbmRDaGlsZChuKSwgdCkgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIHMpICYmIG4uc2V0QXR0cmlidXRlKHRbc10sIGUuZ2V0QXR0cmlidXRlKHRbc10pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IG5ldyByLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwuZGF0YUF0dHJpYnV0ZSA9IFwiXCIsIGwubWFzayhuKSwgbi5pbnB1dG1hc2suc2hhZG93Um9vdCA9IGksIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA9IG8sIGkgJiYgcyh0LnByb3RvdHlwZSwgaSksIG4gJiYgcyh0LCBuKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwicHJvdG90eXBlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogITFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCB0O1xuICAgICAgICAgICAgICAgICAgICB9KGMoSFRNTEVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImlucHV0LW1hc2tcIiwgbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDI4Mzk6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgfShlKSB8fCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG51bGwgPT0gZSA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgZVtTeW1ib2wuaXRlcmF0b3JdIHx8IGVbXCJAQGl0ZXJhdG9yXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuLCBhLCByLCBvLCBzID0gW10sIGwgPSAhMCwgYyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID0gKGkgPSBpLmNhbGwoZSkpLm5leHQsIDAgPT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QoaSkgIT09IGkpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGZvciAoOyEobCA9IChuID0gci5jYWxsKGkpKS5kb25lKSAmJiAocy5wdXNoKG4udmFsdWUpLCBzLmxlbmd0aCAhPT0gdCk7IGwgPSAhMCkgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9ICEwLCBhID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsICYmIG51bGwgIT0gaS5yZXR1cm4gJiYgKG8gPSBpLnJldHVybigpLCBPYmplY3QobykgIT09IG8pKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYykgdGhyb3cgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfShlLCB0KSB8fCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlKSByZXR1cm4gbihlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiT2JqZWN0XCIgPT09IGkgJiYgZS5jb25zdHJ1Y3RvciAmJiAoaSA9IGUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJNYXBcIiA9PT0gaSB8fCBcIlNldFwiID09PSBpKSByZXR1cm4gQXJyYXkuZnJvbShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIkFyZ3VtZW50c1wiID09PSBpIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KGkpKSByZXR1cm4gbihlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfShlLCB0KSB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIChudWxsID09IHQgfHwgdCA+IGUubGVuZ3RoKSAmJiAodCA9IGUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSBuZXcgQXJyYXkodCk7IGkgPCB0OyBpKyspIG5baV0gPSBlW2ldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmtleXMgPSB0LmtleUNvZGUgPSB2b2lkIDAsIHQudG9LZXkgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByW2VdIHx8ICh0ID8gU3RyaW5nLmZyb21DaGFyQ29kZShlKSA6IFN0cmluZy5mcm9tQ2hhckNvZGUoZSkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgfSwgdC50b0tleUNvZGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhW2VdO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIEFsdEdyYXBoOiAxOCxcbiAgICAgICAgICAgICAgICAgICAgQXJyb3dEb3duOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgQXJyb3dMZWZ0OiAzNyxcbiAgICAgICAgICAgICAgICAgICAgQXJyb3dSaWdodDogMzksXG4gICAgICAgICAgICAgICAgICAgIEFycm93VXA6IDM4LFxuICAgICAgICAgICAgICAgICAgICBCYWNrc3BhY2U6IDgsXG4gICAgICAgICAgICAgICAgICAgIEJBQ0tTUEFDRV9TQUZBUkk6IDEyNyxcbiAgICAgICAgICAgICAgICAgICAgQ2Fwc0xvY2s6IDIwLFxuICAgICAgICAgICAgICAgICAgICBEZWxldGU6IDQ2LFxuICAgICAgICAgICAgICAgICAgICBFbmQ6IDM1LFxuICAgICAgICAgICAgICAgICAgICBFbnRlcjogMTMsXG4gICAgICAgICAgICAgICAgICAgIEVzY2FwZTogMjcsXG4gICAgICAgICAgICAgICAgICAgIEhvbWU6IDM2LFxuICAgICAgICAgICAgICAgICAgICBJbnNlcnQ6IDQ1LFxuICAgICAgICAgICAgICAgICAgICBQYWdlRG93bjogMzQsXG4gICAgICAgICAgICAgICAgICAgIFBhZ2VVcDogMzMsXG4gICAgICAgICAgICAgICAgICAgIFNwYWNlOiAzMixcbiAgICAgICAgICAgICAgICAgICAgVGFiOiA5LFxuICAgICAgICAgICAgICAgICAgICBjOiA2NyxcbiAgICAgICAgICAgICAgICAgICAgeDogODgsXG4gICAgICAgICAgICAgICAgICAgIHo6IDkwLFxuICAgICAgICAgICAgICAgICAgICBTaGlmdDogMTYsXG4gICAgICAgICAgICAgICAgICAgIENvbnRyb2w6IDE3LFxuICAgICAgICAgICAgICAgICAgICBBbHQ6IDE4LFxuICAgICAgICAgICAgICAgICAgICBQYXVzZTogMTksXG4gICAgICAgICAgICAgICAgICAgIE1ldGFfTEVGVDogOTEsXG4gICAgICAgICAgICAgICAgICAgIE1ldGFfUklHSFQ6IDkyLFxuICAgICAgICAgICAgICAgICAgICBDb250ZXh0TWVudTogOTMsXG4gICAgICAgICAgICAgICAgICAgIFByb2Nlc3M6IDIyOSxcbiAgICAgICAgICAgICAgICAgICAgVW5pZGVudGlmaWVkOiAyMjksXG4gICAgICAgICAgICAgICAgICAgIEYxOiAxMTIsXG4gICAgICAgICAgICAgICAgICAgIEYyOiAxMTMsXG4gICAgICAgICAgICAgICAgICAgIEYzOiAxMTQsXG4gICAgICAgICAgICAgICAgICAgIEY0OiAxMTUsXG4gICAgICAgICAgICAgICAgICAgIEY1OiAxMTYsXG4gICAgICAgICAgICAgICAgICAgIEY2OiAxMTcsXG4gICAgICAgICAgICAgICAgICAgIEY3OiAxMTgsXG4gICAgICAgICAgICAgICAgICAgIEY4OiAxMTksXG4gICAgICAgICAgICAgICAgICAgIEY5OiAxMjAsXG4gICAgICAgICAgICAgICAgICAgIEYxMDogMTIxLFxuICAgICAgICAgICAgICAgICAgICBGMTE6IDEyMixcbiAgICAgICAgICAgICAgICAgICAgRjEyOiAxMjNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHQua2V5Q29kZSA9IGE7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBPYmplY3QuZW50cmllcyhhKS5yZWR1Y2UoKGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBpKHQsIDIpLCBhID0gblswXSwgciA9IG5bMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlW3JdID0gdm9pZCAwID09PSBlW3JdID8gYSA6IGVbcl0sIGU7XG4gICAgICAgICAgICAgICAgfSksIHt9KSwgbyA9IE9iamVjdC5lbnRyaWVzKGEpLnJlZHVjZSgoZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGkodCwgMiksIGEgPSBuWzBdO1xuICAgICAgICAgICAgICAgICAgICBuWzFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZVthXSA9IFwiU3BhY2VcIiA9PT0gYSA/IFwiIFwiIDogYSwgZTtcbiAgICAgICAgICAgICAgICB9KSwge30pO1xuICAgICAgICAgICAgICAgIHQua2V5cyA9IG87XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMjM5MTogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5hbmFseXNlTWFzayA9IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4sIG8sIHMsIGwsIGMsIHUsIGYgPSAvKD86Wz8qK118XFx7WzAtOSsqXSsoPzosWzAtOSsqXSopPyg/OlxcfFswLTkrKl0qKT9cXH0pfFteLj8qK14ke1tdKCl8XFxcXF0rfC4vZywgZCA9IC9cXFtcXF4/XT8oPzpbXlxcXFxcXF1dK3xcXFxcW1xcU1xcc10/KSpdP3xcXFxcKD86MCg/OlswLTNdWzAtN117MCwyfXxbNC03XVswLTddPyk/fFsxLTldWzAtOV0qfHhbMC05QS1GYS1mXXsyfXx1WzAtOUEtRmEtZl17NH18Y1tBLVphLXpdfFtcXFNcXHNdPyl8XFwoKD86XFw/Wzo9IV0/KT98KD86Wz8qK118XFx7WzAtOV0rKD86LFswLTldKik/XFx9KVxcPz98W14uPyorXiR7WygpfFxcXFxdK3wuL2csIHAgPSAhMSwgaCA9IG5ldyBhLmRlZmF1bHQsIHYgPSBbXSwgbSA9IFtdLCBnID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHkoZSwgbiwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHZvaWQgMCAhPT0gYSA/IGEgOiBlLm1hdGNoZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBlLm1hdGNoZXNbYSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PT0gbi5pbmRleE9mKFwiW1wiKSB8fCBwICYmIC9cXFxcZHxcXFxcc3xcXFxcd3xcXFxccC9pLnRlc3QobikgfHwgXCIuXCIgPT09IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBpLmNhc2luZyA/IFwiaVwiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL15cXFxccFxcey4qfSQvaS50ZXN0KG4pICYmIChzICs9IFwidVwiKSwgZS5tYXRjaGVzLnNwbGljZShhKyssIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBuZXcgUmVnRXhwKG4sIHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrTWFya2VyOiB2b2lkIDAgPT09IG8gPyBcIm1hc3RlclwiIDogby5kZWYgIT09IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWY6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiBuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBwICYmIChuID0gbltuLmxlbmd0aCAtIDFdKSwgbi5zcGxpdChcIlwiKS5mb3JFYWNoKChmdW5jdGlvbih0LCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBlLm1hdGNoZXNbYSAtIDFdLCBlLm1hdGNoZXMuc3BsaWNlKGErKywgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IC9bYS16XS9pLnRlc3QoaS5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IHQpID8gbmV3IFJlZ0V4cChcIltcIiArIChpLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgdCkgKyBcIl1cIiwgaS5jYXNpbmcgPyBcImlcIiA6IFwiXCIpIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpYzogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbGl0eTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdCbG9ja01hcmtlcjogdm9pZCAwID09PSBvID8gXCJtYXN0ZXJcIiA6IG8uZGVmICE9PSB0ICYmICEwICE9PSBvLnN0YXRpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogaS5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdm9pZCAwICE9PSBpLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgPyB0IDogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiAocCA/IFwiJ1wiIDogXCJcIikgKyB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gaS5kZWZpbml0aW9ucyAmJiBpLmRlZmluaXRpb25zW25dIHx8IGkudXNlUHJvdG90eXBlRGVmaW5pdGlvbnMgJiYgci5kZWZhdWx0LnByb3RvdHlwZS5kZWZpbml0aW9uc1tuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsICYmICFwID8gZS5tYXRjaGVzLnNwbGljZShhKyssIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGwudmFsaWRhdG9yID8gXCJzdHJpbmdcIiA9PSB0eXBlb2YgbC52YWxpZGF0b3IgPyBuZXcgUmVnRXhwKGwudmFsaWRhdG9yLCBpLmNhc2luZyA/IFwiaVwiIDogXCJcIikgOiBuZXcgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3QgPSBsLnZhbGlkYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IG5ldyBSZWdFeHAoXCIuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWM6IGwuc3RhdGljIHx8ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbGl0eTogbC5vcHRpb25hbCB8fCAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmT3B0aW9uYWxpdHk6IGwub3B0aW9uYWwgfHwgITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrTWFya2VyOiB2b2lkIDAgPT09IG8gfHwgbC5vcHRpb25hbCA/IFwibWFzdGVyXCIgOiBvLmRlZiAhPT0gKGwuZGVmaW5pdGlvblN5bWJvbCB8fCBuKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBsLmNhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBsLmRlZmluaXRpb25TeW1ib2wgfHwgbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGwucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlZjogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVkOiBsLmdlbmVyYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogKGUubWF0Y2hlcy5zcGxpY2UoYSsrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiAvW2Etel0vaS50ZXN0KGkuc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCBuKSA/IG5ldyBSZWdFeHAoXCJbXCIgKyAoaS5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IG4pICsgXCJdXCIsIGkuY2FzaW5nID8gXCJpXCIgOiBcIlwiKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpYzogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHZvaWQgMCA9PT0gbyA/IFwibWFzdGVyXCIgOiBvLmRlZiAhPT0gbiAmJiAhMCAhPT0gby5zdGF0aWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBpLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHZvaWQgMCAhPT0gaS5zdGF0aWNEZWZpbml0aW9uU3ltYm9sID8gbiA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiAocCA/IFwiJ1wiIDogXCJcIikgKyBuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIHAgPSAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeShsID0gdlt2Lmxlbmd0aCAtIDFdLCBvKSwgbC5pc0FsdGVybmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IHYucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgYy5tYXRjaGVzLmxlbmd0aDsgZSsrKSBjLm1hdGNoZXNbZV0uaXNHcm91cCAmJiAoYy5tYXRjaGVzW2VdLmlzR3JvdXAgPSAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYubGVuZ3RoID4gMCA/IChsID0gdlt2Lmxlbmd0aCAtIDFdKS5tYXRjaGVzLnB1c2goYykgOiBoLm1hdGNoZXMucHVzaChjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeShoLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBiKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gbmV3IGEuZGVmYXVsdCghMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5vcGVuR3JvdXAgPSAhMSwgdC5tYXRjaGVzID0gZSwgdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB4KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzID0gdi5wb3AoKSkub3Blbkdyb3VwID0gITEsIHZvaWQgMCAhPT0gcykgaWYgKHYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobCA9IHZbdi5sZW5ndGggLSAxXSkubWF0Y2hlcy5wdXNoKHMpLCBsLmlzQWx0ZXJuYXRvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gKGMgPSB2LnBvcCgpKS5tYXRjaGVzWzBdLm1hdGNoZXMgPyBjLm1hdGNoZXNbMF0ubWF0Y2hlcy5sZW5ndGggOiAxLCB0ID0gMDsgdCA8IGMubWF0Y2hlcy5sZW5ndGg7IHQrKykgYy5tYXRjaGVzW3RdLmlzR3JvdXAgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubWF0Y2hlc1t0XS5hbHRlcm5hdG9yR3JvdXAgPSAhMSwgbnVsbCA9PT0gaS5rZWVwU3RhdGljICYmIGUgPCAoYy5tYXRjaGVzW3RdLm1hdGNoZXMgPyBjLm1hdGNoZXNbdF0ubWF0Y2hlcy5sZW5ndGggOiAxKSAmJiAoaS5rZWVwU3RhdGljID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IGMubWF0Y2hlc1t0XS5tYXRjaGVzID8gYy5tYXRjaGVzW3RdLm1hdGNoZXMubGVuZ3RoIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5sZW5ndGggPiAwID8gKGwgPSB2W3YubGVuZ3RoIC0gMV0pLm1hdGNoZXMucHVzaChjKSA6IGgubWF0Y2hlcy5wdXNoKGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBoLm1hdGNoZXMucHVzaChzKTsgZWxzZSBrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gUChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5pc1F1YW50aWZpZXIgJiYgKHQgPSBiKFsgZS5wb3AoKSwgdCBdKSksIHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdCAmJiAoaS5vcHRpb25hbG1hcmtlclswXSA9IHZvaWQgMCwgaS5vcHRpb25hbG1hcmtlclsxXSA9IHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoO24gPSB0ID8gZC5leGVjKGUpIDogZi5leGVjKGUpOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvID0gblswXSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoby5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI/XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBcInswLDF9XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiK1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIipcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IFwie1wiICsgbyArIFwifVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInxcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IHYubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGIoaC5tYXRjaGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHcub3Blbkdyb3VwID0gITAsIHYucHVzaCh3KSwgaC5tYXRjaGVzID0gW10sIGcgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXFxcZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gXCJbMC05XVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlxcXFxwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gKz0gZC5leGVjKGUpWzBdLCBvICs9IGQuZXhlYyhlKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocCkgaygpOyBlbHNlIHN3aXRjaCAoby5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIl5cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0IHx8IGsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGkuZXNjYXBlQ2hhcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gITAsIHQgJiYgaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgaS5vcHRpb25hbG1hcmtlclsxXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBpLmdyb3VwbWFya2VyWzFdOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGkub3B0aW9uYWxtYXJrZXJbMF06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5wdXNoKG5ldyBhLmRlZmF1bHQoITEsICEwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBpLmdyb3VwbWFya2VyWzBdOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYucHVzaChuZXcgYS5kZWZhdWx0KCEwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBpLnF1YW50aWZpZXJtYXJrZXJbMF06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFMgPSBuZXcgYS5kZWZhdWx0KCExLCAhMSwgITApLCBNID0gKG8gPSBvLnJlcGxhY2UoL1t7fT9dL2csIFwiXCIpKS5zcGxpdChcInxcIiksIF8gPSBNWzBdLnNwbGl0KFwiLFwiKSwgTyA9IGlzTmFOKF9bMF0pID8gX1swXSA6IHBhcnNlSW50KF9bMF0pLCBFID0gMSA9PT0gXy5sZW5ndGggPyBPIDogaXNOYU4oX1sxXSkgPyBfWzFdIDogcGFyc2VJbnQoX1sxXSksIFQgPSBpc05hTihNWzFdKSA/IE1bMV0gOiBwYXJzZUludChNWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIipcIiAhPT0gTyAmJiBcIitcIiAhPT0gTyB8fCAoTyA9IFwiKlwiID09PSBFID8gMCA6IDEpLCBTLnF1YW50aWZpZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogTyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqaXQ6IFRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBqID0gdi5sZW5ndGggPiAwID8gdlt2Lmxlbmd0aCAtIDFdLm1hdGNoZXMgOiBoLm1hdGNoZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG4gPSBqLnBvcCgpKS5pc0dyb3VwIHx8IChuID0gYihbIG4gXSkpLCBqLnB1c2gobiksIGoucHVzaChTKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGkuYWx0ZXJuYXRvcm1hcmtlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0gKGwgPSB2W3YubGVuZ3RoIC0gMV0pLm1hdGNoZXNbbC5tYXRjaGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1ID0gbC5vcGVuR3JvdXAgJiYgKHZvaWQgMCA9PT0gQS5tYXRjaGVzIHx8ICExID09PSBBLmlzR3JvdXAgJiYgITEgPT09IEEuaXNBbHRlcm5hdG9yKSA/IHYucG9wKCkgOiBQKGwubWF0Y2hlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHUgPSBQKGgubWF0Y2hlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHUuaXNBbHRlcm5hdG9yKSB2LnB1c2godSk7IGVsc2UgaWYgKHUuYWx0ZXJuYXRvckdyb3VwID8gKGMgPSB2LnBvcCgpLCB1LmFsdGVybmF0b3JHcm91cCA9ICExKSA6IGMgPSBuZXcgYS5kZWZhdWx0KCExLCAhMSwgITEsICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5tYXRjaGVzLnB1c2godSksIHYucHVzaChjKSwgdS5vcGVuR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdS5vcGVuR3JvdXAgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEQgPSBuZXcgYS5kZWZhdWx0KCEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRC5hbHRlcm5hdG9yR3JvdXAgPSAhMCwgdi5wdXNoKEQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBnICYmIHgoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7di5sZW5ndGggPiAwOyApIHMgPSB2LnBvcCgpLCBoLm1hdGNoZXMucHVzaChzKTtcbiAgICAgICAgICAgICAgICAgICAgaC5tYXRjaGVzLmxlbmd0aCA+IDAgJiYgKCFmdW5jdGlvbiBlKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gJiYgbi5tYXRjaGVzICYmIG4ubWF0Y2hlcy5mb3JFYWNoKChmdW5jdGlvbihhLCByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBuLm1hdGNoZXNbciArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2b2lkIDAgPT09IG8gfHwgdm9pZCAwID09PSBvLm1hdGNoZXMgfHwgITEgPT09IG8uaXNRdWFudGlmaWVyKSAmJiBhICYmIGEuaXNHcm91cCAmJiAoYS5pc0dyb3VwID0gITEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgfHwgKHkoYSwgaS5ncm91cG1hcmtlclswXSwgMCksICEwICE9PSBhLm9wZW5Hcm91cCAmJiB5KGEsIGkuZ3JvdXBtYXJrZXJbMV0pKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUoYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0oaCksIG0ucHVzaChoKSk7XG4gICAgICAgICAgICAgICAgICAgIChpLm51bWVyaWNJbnB1dCB8fCBpLmlzUlRMKSAmJiBmdW5jdGlvbiBlKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gdC5tYXRjaGVzID0gdC5tYXRjaGVzLnJldmVyc2UoKSwgdC5tYXRjaGVzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQubWF0Y2hlcywgbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHBhcnNlSW50KG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Lm1hdGNoZXNbbl0uaXNRdWFudGlmaWVyICYmIHQubWF0Y2hlc1thICsgMV0gJiYgdC5tYXRjaGVzW2EgKyAxXS5pc0dyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gdC5tYXRjaGVzW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm1hdGNoZXMuc3BsaWNlKG4sIDEpLCB0Lm1hdGNoZXMuc3BsaWNlKGEgKyAxLCAwLCByKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSB0Lm1hdGNoZXNbbl0ubWF0Y2hlcyA/IHQubWF0Y2hlc1tuXSA9IGUodC5tYXRjaGVzW25dKSA6IHQubWF0Y2hlc1tuXSA9ICgobyA9IHQubWF0Y2hlc1tuXSkgPT09IGkub3B0aW9uYWxtYXJrZXJbMF0gPyBvID0gaS5vcHRpb25hbG1hcmtlclsxXSA6IG8gPT09IGkub3B0aW9uYWxtYXJrZXJbMV0gPyBvID0gaS5vcHRpb25hbG1hcmtlclswXSA6IG8gPT09IGkuZ3JvdXBtYXJrZXJbMF0gPyBvID0gaS5ncm91cG1hcmtlclsxXSA6IG8gPT09IGkuZ3JvdXBtYXJrZXJbMV0gJiYgKG8gPSBpLmdyb3VwbWFya2VyWzBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICB9KG1bMF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgICAgICAgICB9LCB0LmdlbmVyYXRlTWFza1NldCA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGEoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0LnJlcGVhdCwgbiA9IHQuZ3JvdXBtYXJrZXIsIGEgPSB0LnF1YW50aWZpZXJtYXJrZXIsIHIgPSB0LmtlZXBTdGF0aWM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDAgfHwgXCIqXCIgPT09IGkgfHwgXCIrXCIgPT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IFwiKlwiID09PSBpID8gMCA6IFwiK1wiID09PSBpID8gMSA6IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IG5bMF0gKyBlICsgblsxXSArIGFbMF0gKyBsICsgXCIsXCIgKyBpICsgYVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gZS5tYXRjaChuZXcgUmVnRXhwKFwiKC4pXFxcXFsoW15cXFxcXV0qKVxcXFxdXCIsIFwiZ1wiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYyAmJiBjLmZvckVhY2goKGZ1bmN0aW9uKHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZSkgfHwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gbnVsbCA9PSBlID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBlW1N5bWJvbC5pdGVyYXRvcl0gfHwgZVtcIkBAaXRlcmF0b3JcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiwgYSwgciwgbywgcyA9IFtdLCBsID0gITAsIGMgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID0gKGkgPSBpLmNhbGwoZSkpLm5leHQsIDAgPT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0KGkpICE9PSBpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGZvciAoOyEobCA9IChuID0gci5jYWxsKGkpKS5kb25lKSAmJiAocy5wdXNoKG4udmFsdWUpLCBzLmxlbmd0aCAhPT0gdCk7IGwgPSAhMCkgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gITAsIGEgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWwgJiYgbnVsbCAhPSBpLnJldHVybiAmJiAobyA9IGkucmV0dXJuKCksIE9iamVjdChvKSAhPT0gbykpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMpIHRocm93IGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShlLCB0KSB8fCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpIHJldHVybiBzKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9iamVjdFwiID09PSBpICYmIGUuY29uc3RydWN0b3IgJiYgKGkgPSBlLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIk1hcFwiID09PSBpIHx8IFwiU2V0XCIgPT09IGkpIHJldHVybiBBcnJheS5mcm9tKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIkFyZ3VtZW50c1wiID09PSBpIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KGkpKSByZXR1cm4gcyhlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZSwgdCkgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSh0LnNwbGl0KFwiW1wiKSwgMiksIGEgPSBuWzBdLCByID0gblsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IHIucmVwbGFjZShcIl1cIiwgXCJcIiksIGUgPSBlLnJlcGxhY2UobmV3IFJlZ0V4cChcIlwiLmNvbmNhdCgoMCwgby5kZWZhdWx0KShhKSwgXCJcXFxcW1wiKS5jb25jYXQoKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmRlZmF1bHQpKHIpLCBcIlxcXFxdXCIpKSwgYS5jaGFyQXQoMCkgPT09IHIuY2hhckF0KDApID8gXCIoXCIuY29uY2F0KGEsIFwifFwiKS5jb25jYXQoYSkuY29uY2F0KHIsIFwiKVwiKSA6IFwiXCIuY29uY2F0KGEsIFwiW1wiKS5jb25jYXQociwgXCJdXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGUsIGksIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzLCBsLCBjID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCAhPT0gZSAmJiBcIlwiICE9PSBlIHx8ICgoYyA9IG51bGwgIT09IG8ucmVnZXgpID8gZSA9IChlID0gby5yZWdleCkucmVwbGFjZSgvXihcXF4pKC4qKShcXCQpJC8sIFwiJDJcIikgOiAoYyA9ICEwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcIi4qXCIpKSwgMSA9PT0gZS5sZW5ndGggJiYgITEgPT09IG8uZ3JlZWR5ICYmIDAgIT09IG8ucmVwZWF0ICYmIChvLnBsYWNlaG9sZGVyID0gXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgZSA9IGEoZSwgbyksIGwgPSBjID8gXCJyZWdleF9cIiArIG8ucmVnZXggOiBvLm51bWVyaWNJbnB1dCA/IGUuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT09IG8ua2VlcFN0YXRpYyAmJiAobCA9IFwia3NfXCIgKyBvLmtlZXBTdGF0aWMgKyBsKSwgdm9pZCAwID09PSByLmRlZmF1bHQucHJvdG90eXBlLm1hc2tzQ2FjaGVbbF0gfHwgITAgPT09IHQgPyAocyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tUb2tlbjogci5kZWZhdWx0LnByb3RvdHlwZS5hbmFseXNlTWFzayhlLCBjLCBvKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFBvc2l0aW9uczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2J1ZmZlcjogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsdWRlczoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza0xlbmd0aDogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGppdE9mZnNldDoge31cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sICEwICE9PSB0ICYmIChyLmRlZmF1bHQucHJvdG90eXBlLm1hc2tzQ2FjaGVbbF0gPSBzLCBzID0gbi5kZWZhdWx0LmV4dGVuZCghMCwge30sIHIuZGVmYXVsdC5wcm90b3R5cGUubWFza3NDYWNoZVtsXSkpKSA6IHMgPSBuLmRlZmF1bHQuZXh0ZW5kKCEwLCB7fSwgci5kZWZhdWx0LnByb3RvdHlwZS5tYXNrc0NhY2hlW2xdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5tYXNrICYmIChlLm1hc2sgPSBlLm1hc2soZSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlLm1hc2spKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5tYXNrLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsID09PSBlLmtlZXBTdGF0aWMgJiYgKGUua2VlcFN0YXRpYyA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGUuZ3JvdXBtYXJrZXJbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlLmlzUlRMID8gZS5tYXNrLnJldmVyc2UoKSA6IGUubWFzaykuZm9yRWFjaCgoZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmxlbmd0aCA+IDEgJiYgKGMgKz0gZS5hbHRlcm5hdG9ybWFya2VyKSwgdm9pZCAwICE9PSB0Lm1hc2sgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0Lm1hc2sgPyBjICs9IHQubWFzayA6IGMgKz0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIGwoYyArPSBlLmdyb3VwbWFya2VyWzFdLCBlLm1hc2ssIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5tYXNrID0gZS5tYXNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkgPSBlLm1hc2sgJiYgdm9pZCAwICE9PSBlLm1hc2subWFzayAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUubWFzay5tYXNrID8gbChlLm1hc2subWFzaywgZS5tYXNrLCBlKSA6IGwoZS5tYXNrLCBlLm1hc2ssIGUpO1xuICAgICAgICAgICAgICAgICAgICBudWxsID09PSBlLmtlZXBTdGF0aWMgJiYgKGUua2VlcFN0YXRpYyA9ICExKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGwoaSg0OTYzKSksIGEgPSBsKGkoOTY5NSkpLCByID0gbChpKDIzOTQpKSwgbyA9IGwoaSg3MTg0KSk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIChudWxsID09IHQgfHwgdCA+IGUubGVuZ3RoKSAmJiAodCA9IGUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSBuZXcgQXJyYXkodCk7IGkgPCB0OyBpKyspIG5baV0gPSBlW2ldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDE1NzogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5tYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcywgdCA9IHRoaXMub3B0cywgaSA9IHRoaXMuZWwsIHUgPSB0aGlzLmRlcGVuZGVuY3lMaWI7XG4gICAgICAgICAgICAgICAgICAgIG8uRXZlbnRSdWxlci5vZmYoaSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmID0gZnVuY3Rpb24odCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiICE9PSB0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAmJiBpLmlnbm9yYWJsZXMucHVzaChuLmtleXMuRW50ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB0LmdldEF0dHJpYnV0ZShcInR5cGVcIiksIGwgPSBcImlucHV0XCIgPT09IHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICYmIGkuc3VwcG9ydHNJbnB1dFR5cGUuaW5jbHVkZXMocykgfHwgdC5pc0NvbnRlbnRFZGl0YWJsZSB8fCBcInRleHRhcmVhXCIgPT09IHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsKSBpZiAoXCJpbnB1dFwiID09PSB0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBzKSwgbCA9IFwidGV4dFwiID09PSBjLnR5cGUsIGMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGwgPSBcInBhcnRpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMSAhPT0gbCA/IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiwgcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dG1hc2sgPyB0aGlzLmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2sgPyB0aGlzLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCkgOiAtMSAhPT0gYS5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGUpIHx8ICEwICE9PSBpLm51bGxhYmxlID8gKHRoaXMuaW5wdXRtYXNrLnNoYWRvd1Jvb3QgfHwgdGhpcy5vd25lckRvY3VtZW50KS5hY3RpdmVFbGVtZW50ID09PSB0aGlzICYmIGkuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgPyAoZS5pc1JUTCA/IHIuY2xlYXJPcHRpb25hbFRhaWwuY2FsbChlLCBhLmdldEJ1ZmZlci5jYWxsKGUpLnNsaWNlKCkpLnJldmVyc2UoKSA6IHIuY2xlYXJPcHRpb25hbFRhaWwuY2FsbChlLCBhLmdldEJ1ZmZlci5jYWxsKGUpLnNsaWNlKCkpKS5qb2luKFwiXCIpIDogbi5jYWxsKHRoaXMpIDogXCJcIiA6IG4uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY2FsbCh0aGlzLCBlKSwgdGhpcy5pbnB1dG1hc2sgJiYgKDAsIHIuYXBwbHlJbnB1dFZhbHVlKSh0aGlzLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0LmlucHV0bWFzay5fX3ZhbHVlR2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCAhPT0gaS5ub1ZhbHVlUGF0Y2hpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSwgXCJ2YWx1ZVwiKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmICYmIGYuZ2V0ICYmIGYuc2V0ID8gKG4gPSBmLmdldCwgcyA9IGYuc2V0LCBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpIDogXCJpbnB1dFwiICE9PSB0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAmJiAobiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBzID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGRvY3VtZW50Ll9fbG9va3VwR2V0dGVyX18gJiYgdC5fX2xvb2t1cEdldHRlcl9fKFwidmFsdWVcIikgJiYgKG4gPSB0Ll9fbG9va3VwR2V0dGVyX18oXCJ2YWx1ZVwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gdC5fX2xvb2t1cFNldHRlcl9fKFwidmFsdWVcIiksIHQuX19kZWZpbmVHZXR0ZXJfXyhcInZhbHVlXCIsIGwpLCB0Ll9fZGVmaW5lU2V0dGVyX18oXCJ2YWx1ZVwiLCBjKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmlucHV0bWFzay5fX3ZhbHVlR2V0ID0gbiwgdC5pbnB1dG1hc2suX192YWx1ZVNldCA9IHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5pbnB1dG1hc2suX3ZhbHVlR2V0ID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuaXNSVEwgJiYgITAgIT09IHQgPyBuLmNhbGwodGhpcy5lbCkuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBuLmNhbGwodGhpcy5lbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHQuaW5wdXRtYXNrLl92YWx1ZVNldCA9IGZ1bmN0aW9uKHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY2FsbCh0aGlzLmVsLCBudWxsID09IHQgPyBcIlwiIDogITAgIT09IGkgJiYgZS5pc1JUTCA/IHQuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdm9pZCAwID09PSBuICYmIChuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgcyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodS52YWxIb29rcyAmJiAodm9pZCAwID09PSB1LnZhbEhvb2tzW3RdIHx8ICEwICE9PSB1LnZhbEhvb2tzW3RdLmlucHV0bWFza3BhdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdS52YWxIb29rc1t0XSAmJiB1LnZhbEhvb2tzW3RdLmdldCA/IHUudmFsSG9va3NbdF0uZ2V0IDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvID0gdS52YWxIb29rc1t0XSAmJiB1LnZhbEhvb2tzW3RdLnNldCA/IHUudmFsSG9va3NbdF0uc2V0IDogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS52YWx1ZSA9IHQsIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1LnZhbEhvb2tzW3RdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmlucHV0bWFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2spIHJldHVybiB0LmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBuKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSAhPT0gYS5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGUsIHZvaWQgMCwgdm9pZCAwLCB0LmlucHV0bWFzay5tYXNrc2V0LnZhbGlkUG9zaXRpb25zKSB8fCAhMCAhPT0gaS5udWxsYWJsZSA/IHIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4odCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBvKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuaW5wdXRtYXNrICYmICgwLCByLmFwcGx5SW5wdXRWYWx1ZSkoZSwgdCksIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0bWFza3BhdGNoOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0odC50eXBlKSwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5FdmVudFJ1bGVyLm9uKGUsIFwibW91c2VlbnRlclwiLCAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLCB0ID0gZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICE9IChlLmlucHV0bWFzay5pc1JUTCA/IGEuZ2V0QnVmZmVyLmNhbGwoZS5pbnB1dG1hc2spLnNsaWNlKCkucmV2ZXJzZSgpIDogYS5nZXRCdWZmZXIuY2FsbChlLmlucHV0bWFzaykpLmpvaW4oXCJcIikgJiYgKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuYXBwbHlJbnB1dFZhbHVlKShlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSh0KSA6IHQuaW5wdXRtYXNrID0gdm9pZCAwLCBsO1xuICAgICAgICAgICAgICAgICAgICB9KGksIHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoITEgIT09IGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUub3JpZ2luYWxQbGFjZWhvbGRlciA9IGkucGxhY2Vob2xkZXIsIGUubWF4TGVuZ3RoID0gdm9pZCAwICE9PSBpID8gaS5tYXhMZW5ndGggOiB2b2lkIDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgLTEgPT09IGUubWF4TGVuZ3RoICYmIChlLm1heExlbmd0aCA9IHZvaWQgMCksIFwiaW5wdXRNb2RlXCIgaW4gaSAmJiBudWxsID09PSBpLmdldEF0dHJpYnV0ZShcImlucHV0bW9kZVwiKSAmJiAoaS5pbnB1dE1vZGUgPSB0LmlucHV0bW9kZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBpLnNldEF0dHJpYnV0ZShcImlucHV0bW9kZVwiLCB0LmlucHV0bW9kZSkpLCAhMCA9PT0gZiAmJiAodC5zaG93TWFza09uRm9jdXMgPSB0LnNob3dNYXNrT25Gb2N1cyAmJiAtMSA9PT0gWyBcImNjLW51bWJlclwiLCBcImNjLWV4cFwiIF0uaW5kZXhPZihpLmF1dG9jb21wbGV0ZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgcy5pcGhvbmUgJiYgKHQuaW5zZXJ0TW9kZVZpc3VhbCA9ICExLCBpLnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsIFwib2ZmXCIpKSwgby5FdmVudFJ1bGVyLm9uKGksIFwic3VibWl0XCIsIGMuRXZlbnRIYW5kbGVycy5zdWJtaXRFdmVudCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgby5FdmVudFJ1bGVyLm9uKGksIFwicmVzZXRcIiwgYy5FdmVudEhhbmRsZXJzLnJlc2V0RXZlbnQpLCBvLkV2ZW50UnVsZXIub24oaSwgXCJibHVyXCIsIGMuRXZlbnRIYW5kbGVycy5ibHVyRXZlbnQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uRXZlbnRSdWxlci5vbihpLCBcImZvY3VzXCIsIGMuRXZlbnRIYW5kbGVycy5mb2N1c0V2ZW50KSwgby5FdmVudFJ1bGVyLm9uKGksIFwiaW52YWxpZFwiLCBjLkV2ZW50SGFuZGxlcnMuaW52YWxpZEV2ZW50KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvLkV2ZW50UnVsZXIub24oaSwgXCJjbGlja1wiLCBjLkV2ZW50SGFuZGxlcnMuY2xpY2tFdmVudCksIG8uRXZlbnRSdWxlci5vbihpLCBcIm1vdXNlbGVhdmVcIiwgYy5FdmVudEhhbmRsZXJzLm1vdXNlbGVhdmVFdmVudCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgby5FdmVudFJ1bGVyLm9uKGksIFwibW91c2VlbnRlclwiLCBjLkV2ZW50SGFuZGxlcnMubW91c2VlbnRlckV2ZW50KSwgby5FdmVudFJ1bGVyLm9uKGksIFwicGFzdGVcIiwgYy5FdmVudEhhbmRsZXJzLnBhc3RlRXZlbnQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uRXZlbnRSdWxlci5vbihpLCBcImN1dFwiLCBjLkV2ZW50SGFuZGxlcnMuY3V0RXZlbnQpLCBvLkV2ZW50UnVsZXIub24oaSwgXCJjb21wbGV0ZVwiLCB0Lm9uY29tcGxldGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uRXZlbnRSdWxlci5vbihpLCBcImluY29tcGxldGVcIiwgdC5vbmluY29tcGxldGUpLCBvLkV2ZW50UnVsZXIub24oaSwgXCJjbGVhcmVkXCIsIHQub25jbGVhcmVkKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gdC5pbnB1dEV2ZW50T25seSAmJiBvLkV2ZW50UnVsZXIub24oaSwgXCJrZXlkb3duXCIsIGMuRXZlbnRIYW5kbGVycy5rZXlFdmVudCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgKHMubW9iaWxlIHx8IHQuaW5wdXRFdmVudE9ubHkpICYmIGkucmVtb3ZlQXR0cmlidXRlKFwibWF4TGVuZ3RoXCIpLCBvLkV2ZW50UnVsZXIub24oaSwgXCJpbnB1dFwiLCBjLkV2ZW50SGFuZGxlcnMuaW5wdXRGYWxsQmFja0V2ZW50KSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgby5FdmVudFJ1bGVyLm9uKGksIFwic2V0dmFsdWVcIiwgYy5FdmVudEhhbmRsZXJzLnNldFZhbHVlRXZlbnQpLCBhLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoZSkuam9pbihcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnVuZG9WYWx1ZSA9IGUuX3ZhbHVlR2V0KCEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gKGkuaW5wdXRtYXNrLnNoYWRvd1Jvb3QgfHwgaS5vd25lckRvY3VtZW50KS5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiXCIgIT09IGkuaW5wdXRtYXNrLl92YWx1ZUdldCghMCkgfHwgITEgPT09IHQuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgfHwgZCA9PT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCByLmFwcGx5SW5wdXRWYWx1ZSkoaSwgaS5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBhLmdldEJ1ZmZlci5jYWxsKGUpLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITEgPT09IGwuaXNDb21wbGV0ZS5jYWxsKGUsIHApICYmIHQuY2xlYXJJbmNvbXBsZXRlICYmIGEucmVzZXRNYXNrU2V0LmNhbGwoZSksIHQuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgJiYgZCAhPT0gaSAmJiAoLTEgPT09IGEuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChlKSA/IHAgPSBbXSA6IHIuY2xlYXJPcHRpb25hbFRhaWwuY2FsbChlLCBwKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICghMSA9PT0gdC5jbGVhck1hc2tPbkxvc3RGb2N1cyB8fCB0LnNob3dNYXNrT25Gb2N1cyAmJiBkID09PSBpIHx8IFwiXCIgIT09IGkuaW5wdXRtYXNrLl92YWx1ZUdldCghMCkpICYmICgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLndyaXRlQnVmZmVyKShpLCBwKSwgZCA9PT0gaSAmJiBhLmNhcmV0LmNhbGwoZSwgaSwgYS5zZWVrTmV4dC5jYWxsKGUsIGEuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChlKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGkoMjgzOSksIGEgPSBpKDg3MTEpLCByID0gaSg3NzYwKSwgbyA9IGkoOTcxNiksIHMgPSBpKDk4NDUpLCBsID0gaSg3MjE1KSwgYyA9IGkoNjAzMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTY5NTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5kZWZhdWx0ID0gZnVuY3Rpb24oZSwgdCwgaSwgbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZXMgPSBbXSwgdGhpcy5vcGVuR3JvdXAgPSBlIHx8ICExLCB0aGlzLmFsdGVybmF0b3JHcm91cCA9ICExLCB0aGlzLmlzR3JvdXAgPSBlIHx8ICExLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc09wdGlvbmFsID0gdCB8fCAhMSwgdGhpcy5pc1F1YW50aWZpZXIgPSBpIHx8ICExLCB0aGlzLmlzQWx0ZXJuYXRvciA9IG4gfHwgITEsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1YW50aWZpZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDFcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDMxOTQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5pbmNsdWRlcyB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImluY2x1ZGVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsID09IHRoaXMpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widGhpc1wiIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gT2JqZWN0KHRoaXMpLCBuID0gaS5sZW5ndGggPj4+IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PT0gbikgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDAgfCB0LCByID0gTWF0aC5tYXgoYSA+PSAwID8gYSA6IG4gLSBNYXRoLmFicyhhKSwgMCk7IHIgPCBuOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaVtyXSA9PT0gZSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDkzMDI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gRnVuY3Rpb24uYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UpLCB0ID0gRnVuY3Rpb24uYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUpLCBpID0gRnVuY3Rpb24uYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEFycmF5LnByb3RvdHlwZS5jb25jYXQpLCBuID0gT2JqZWN0LmtleXM7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMgfHwgKE9iamVjdC5lbnRyaWVzID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZShuKGEpLCAoZnVuY3Rpb24oZSwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkoZSwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgbiAmJiB0KGEsIG4pID8gWyBbIG4sIGFbbl0gXSBdIDogW10pO1xuICAgICAgICAgICAgICAgICAgICB9KSwgW10pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDcxNDk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGUodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIGUuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBlICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9LCBlKHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiAoT2JqZWN0LmdldFByb3RvdHlwZU9mID0gXCJvYmplY3RcIiA9PT0gZShcInRlc3RcIi5fX3Byb3RvX18pID8gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5fX3Byb3RvX187XG4gICAgICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDQwMTM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMgfHwgKFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm51bWJlclwiICE9IHR5cGVvZiB0ICYmICh0ID0gMCksICEodCArIGUubGVuZ3RoID4gdGhpcy5sZW5ndGgpICYmIC0xICE9PSB0aGlzLmluZGV4T2YoZSwgdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgODcxMTogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5jYXJldCA9IGZ1bmN0aW9uKGUsIHQsIGksIG4sIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIsIG8gPSB0aGlzLCBzID0gdGhpcy5vcHRzO1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSB0KSByZXR1cm4gXCJzZWxlY3Rpb25TdGFydFwiIGluIGUgJiYgXCJzZWxlY3Rpb25FbmRcIiBpbiBlID8gKHQgPSBlLnNlbGVjdGlvblN0YXJ0LCBcbiAgICAgICAgICAgICAgICAgICAgaSA9IGUuc2VsZWN0aW9uRW5kKSA6IHdpbmRvdy5nZXRTZWxlY3Rpb24gPyAociA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApKS5jb21tb25BbmNlc3RvckNvbnRhaW5lci5wYXJlbnROb2RlICE9PSBlICYmIHIuY29tbW9uQW5jZXN0b3JDb250YWluZXIgIT09IGUgfHwgKHQgPSByLnN0YXJ0T2Zmc2V0LCBcbiAgICAgICAgICAgICAgICAgICAgaSA9IHIuZW5kT2Zmc2V0KSA6IGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UgJiYgKGkgPSAodCA9IDAgLSAociA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpKS5kdXBsaWNhdGUoKS5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIiwgLWUuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCkpICsgci50ZXh0Lmxlbmd0aCksIFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogbiA/IHQgOiBjLmNhbGwobywgdCksXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IG4gPyBpIDogYy5jYWxsKG8sIGkpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHQpICYmIChpID0gby5pc1JUTCA/IHRbMF0gOiB0WzFdLCB0ID0gby5pc1JUTCA/IHRbMV0gOiB0WzBdKSwgXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gdC5iZWdpbiAmJiAoaSA9IG8uaXNSVEwgPyB0LmJlZ2luIDogdC5lbmQsIHQgPSBvLmlzUlRMID8gdC5lbmQgOiB0LmJlZ2luKSwgXG4gICAgICAgICAgICAgICAgICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBuID8gdCA6IGMuY2FsbChvLCB0KSwgaSA9IFwibnVtYmVyXCIgPT0gdHlwZW9mIChpID0gbiA/IGkgOiBjLmNhbGwobywgaSkpID8gaSA6IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IHBhcnNlSW50KCgoZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdykuZ2V0Q29tcHV0ZWRTdHlsZSA/IChlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93KS5nZXRDb21wdXRlZFN0eWxlKGUsIG51bGwpIDogZS5jdXJyZW50U3R5bGUpLmZvbnRTaXplKSAqIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5zY3JvbGxMZWZ0ID0gbCA+IGUuc2Nyb2xsV2lkdGggPyBsIDogMCwgZS5pbnB1dG1hc2suY2FyZXRQb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBzLmluc2VydE1vZGVWaXN1YWwgJiYgITEgPT09IHMuaW5zZXJ0TW9kZSAmJiB0ID09PSBpICYmIChhIHx8IGkrKyksIGUgPT09IChlLmlucHV0bWFzay5zaGFkb3dSb290IHx8IGUub3duZXJEb2N1bWVudCkuYWN0aXZlRWxlbWVudCkgaWYgKFwic2V0U2VsZWN0aW9uUmFuZ2VcIiBpbiBlKSBlLnNldFNlbGVjdGlvblJhbmdlKHQsIGkpOyBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLCB2b2lkIDAgPT09IGUuZmlyc3RDaGlsZCB8fCBudWxsID09PSBlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5hcHBlbmRDaGlsZCh1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5zZXRTdGFydChlLmZpcnN0Q2hpbGQsIHQgPCBlLmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGggPyB0IDogZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5zZXRFbmQoZS5maXJzdENoaWxkLCBpIDwgZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoID8gaSA6IGUuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY29sbGFwc2UoITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYucmVtb3ZlQWxsUmFuZ2VzKCksIGYuYWRkUmFuZ2Uocik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZS5jcmVhdGVUZXh0UmFuZ2UgJiYgKChyID0gZS5jcmVhdGVUZXh0UmFuZ2UoKSkuY29sbGFwc2UoITApLCByLm1vdmVFbmQoXCJjaGFyYWN0ZXJcIiwgaSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgci5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIiwgdCksIHIuc2VsZWN0KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgdC5kZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbiA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQsIGksIHIgPSB0aGlzLCBzID0gci5tYXNrc2V0LCBsID0gci5kZXBlbmRlbmN5TGliLCBjID0gbi5nZXRNYXNrVGVtcGxhdGUuY2FsbChyLCAhMCwgby5jYWxsKHIpLCAhMCwgITApLCB1ID0gYy5sZW5ndGgsIGYgPSBvLmNhbGwociksIGQgPSB7fSwgcCA9IHMudmFsaWRQb3NpdGlvbnNbZl0sIGggPSB2b2lkIDAgIT09IHAgPyBwLmxvY2F0b3Iuc2xpY2UoKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh0ID0gZiArIDE7IHQgPCBjLmxlbmd0aDsgdCsrKSBoID0gKGkgPSBuLmdldFRlc3RUZW1wbGF0ZS5jYWxsKHIsIHQsIGgsIHQgLSAxKSkubG9jYXRvci5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgZFt0XSA9IGwuZXh0ZW5kKCEwLCB7fSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2ID0gcCAmJiB2b2lkIDAgIT09IHAuYWx0ZXJuYXRpb24gPyBwLmxvY2F0b3JbcC5hbHRlcm5hdGlvbl0gOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodCA9IHUgLSAxOyB0ID4gZiAmJiAoKChpID0gZFt0XSkubWF0Y2gub3B0aW9uYWxpdHkgfHwgaS5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgaS5tYXRjaC5uZXdCbG9ja01hcmtlciB8fCB2ICYmICh2ICE9PSBkW3RdLmxvY2F0b3JbcC5hbHRlcm5hdGlvbl0gJiYgMSAhPSBpLm1hdGNoLnN0YXRpYyB8fCAhMCA9PT0gaS5tYXRjaC5zdGF0aWMgJiYgaS5sb2NhdG9yW3AuYWx0ZXJuYXRpb25dICYmIGEuY2hlY2tBbHRlcm5hdGlvbk1hdGNoLmNhbGwociwgaS5sb2NhdG9yW3AuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCB2LnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpKSAmJiBcIlwiICE9PSBuLmdldFRlc3RzLmNhbGwociwgdClbMF0uZGVmKSkgJiYgY1t0XSA9PT0gbi5nZXRQbGFjZWhvbGRlci5jYWxsKHIsIHQsIGkubWF0Y2gpKTsgdC0tKSB1LS07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbDogdSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogZFt1XSA/IGRbdV0ubWF0Y2ggOiB2b2lkIDBcbiAgICAgICAgICAgICAgICAgICAgfSA6IHU7XG4gICAgICAgICAgICAgICAgfSwgdC5kZXRlcm1pbmVOZXdDYXJldFBvc2l0aW9uID0gZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMsIGMgPSBhLm1hc2tzZXQsIHUgPSBhLm9wdHM7XG4gICAgICAgICAgICAgICAgICAgIHQgJiYgKGEuaXNSVEwgPyBlLmVuZCA9IGUuYmVnaW4gOiBlLmJlZ2luID0gZS5lbmQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5iZWdpbiA9PT0gZS5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaSA9IGkgfHwgdS5wb3NpdGlvbkNhcmV0T25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZWxlY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiByLmNhbGwoYSkubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaWdub3JlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5lbmQgPSBlLmJlZ2luID0gbC5jYWxsKGEsIG8uY2FsbChhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJhZGl4Rm9jdXNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5jbGlja2VkID4gMSAmJiAwID09IGMudmFsaWRQb3NpdGlvbnMubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gdS5yYWRpeFBvaW50ICYmIDAgIT09IHUuZGlnaXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGMudmFsaWRQb3NpdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSB0W2VdIHx8IHRbZV0uaW5wdXQgPT09IG4uZ2V0UGxhY2Vob2xkZXIuY2FsbChhLCBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlIDwgbC5jYWxsKGEsIC0xKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gci5jYWxsKGEpLmluZGV4T2YodS5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbyA9IDAsIHMgPSB0Lmxlbmd0aDsgbyA8IHM7IG8rKykgaWYgKHRbb10gJiYgaSA8IG8gJiYgdFtvXS5pbnB1dCAhPT0gbi5nZXRQbGFjZWhvbGRlci5jYWxsKGEsIG8pKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZS5iZWdpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSByLmNhbGwoYSkuam9pbihcIlwiKS5pbmRleE9mKHUucmFkaXhQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZW5kID0gZS5iZWdpbiA9IHUubnVtZXJpY0lucHV0ID8gbC5jYWxsKGEsIGYpIDogZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBlLmJlZ2luLCBwID0gby5jYWxsKGEsIGQsICEwKSwgaCA9IGwuY2FsbChhLCAtMSAhPT0gcCB8fCBzLmNhbGwoYSwgMCkgPyBwIDogLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkIDw9IGgpIGUuZW5kID0gZS5iZWdpbiA9IHMuY2FsbChhLCBkLCAhMSwgITApID8gZCA6IGwuY2FsbChhLCBkKTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gYy52YWxpZFBvc2l0aW9uc1twXSwgbSA9IG4uZ2V0VGVzdFRlbXBsYXRlLmNhbGwoYSwgaCwgdiA/IHYubWF0Y2gubG9jYXRvciA6IHZvaWQgMCwgdiksIGcgPSBuLmdldFBsYWNlaG9sZGVyLmNhbGwoYSwgaCwgbS5tYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSBnICYmIHIuY2FsbChhKVtoXSAhPT0gZyAmJiAhMCAhPT0gbS5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgITAgIT09IG0ubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgIXMuY2FsbChhLCBoLCB1LmtlZXBTdGF0aWMsICEwKSAmJiBtLm1hdGNoLmRlZiA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBsLmNhbGwoYSwgaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZCA+PSB5IHx8IGQgPT09IGgpICYmIChoID0geSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5lbmQgPSBlLmJlZ2luID0gaDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHQuZ2V0QnVmZmVyID0gciwgdC5nZXRCdWZmZXJUZW1wbGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMubWFza3NldDtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBlLl9idWZmZXIgJiYgKGUuX2J1ZmZlciA9IG4uZ2V0TWFza1RlbXBsYXRlLmNhbGwodGhpcywgITEsIDEpLCB2b2lkIDAgPT09IGUuYnVmZmVyICYmIChlLmJ1ZmZlciA9IGUuX2J1ZmZlci5zbGljZSgpKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLl9idWZmZXI7XG4gICAgICAgICAgICAgICAgfSwgdC5nZXRMYXN0VmFsaWRQb3NpdGlvbiA9IG8sIHQuaXNNYXNrID0gcywgdC5yZXNldE1hc2tTZXQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5tYXNrc2V0O1xuICAgICAgICAgICAgICAgICAgICB0LmJ1ZmZlciA9IHZvaWQgMCwgITAgIT09IGUgJiYgKHQudmFsaWRQb3NpdGlvbnMgPSBbXSwgdC5wID0gMCk7XG4gICAgICAgICAgICAgICAgfSwgdC5zZWVrTmV4dCA9IGwsIHQuc2Vla1ByZXZpb3VzID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMsIGEgPSBlIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUgPD0gMCkgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoO2EgPiAwICYmICghMCA9PT0gdCAmJiAoITAgIT09IG4uZ2V0VGVzdC5jYWxsKGksIGEpLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8ICFzLmNhbGwoaSwgYSwgdm9pZCAwLCAhMCkpIHx8ICEwICE9PSB0ICYmICFzLmNhbGwoaSwgYSwgdm9pZCAwLCAhMCkpOyApIGEtLTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICAgICAgfSwgdC50cmFuc2xhdGVQb3NpdGlvbiA9IGM7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBpKDQ3MTMpLCBhID0gaSg3MjE1KTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLCBpID0gdC5tYXNrc2V0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAwICE9PSBpLmJ1ZmZlciAmJiAhMCAhPT0gZSB8fCAoaS5idWZmZXIgPSBuLmdldE1hc2tUZW1wbGF0ZS5jYWxsKHQsICEwLCBvLmNhbGwodCksICEwKSwgXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gaS5fYnVmZmVyICYmIChpLl9idWZmZXIgPSBpLmJ1ZmZlci5zbGljZSgpKSksIGkuYnVmZmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLm1hc2tzZXQsIGEgPSAtMSwgciA9IC0xLCBvID0gaSB8fCBuLnZhbGlkUG9zaXRpb25zO1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSAtMSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSAwLCBsID0gby5sZW5ndGg7IHMgPCBsOyBzKyspIG9bc10gJiYgKHQgfHwgITAgIT09IG9bc10uZ2VuZXJhdGVkSW5wdXQpICYmIChzIDw9IGUgJiYgKGEgPSBzKSwgXG4gICAgICAgICAgICAgICAgICAgIHMgPj0gZSAmJiAociA9IHMpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xID09PSBhIHx8IGEgPT0gZSA/IHIgOiAtMSA9PSByIHx8IGUgLSBhIDwgciAtIGUgPyBhIDogcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcyhlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gdGhpcywgciA9IHRoaXMubWFza3NldCwgbyA9IG4uZ2V0VGVzdFRlbXBsYXRlLmNhbGwoYSwgZSkubWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIlwiID09PSBvLmRlZiAmJiAobyA9IG4uZ2V0VGVzdC5jYWxsKGEsIGUpLm1hdGNoKSwgITAgIT09IG8uc3RhdGljKSByZXR1cm4gby5mbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSBpICYmIHZvaWQgMCAhPT0gci52YWxpZFBvc2l0aW9uc1tlXSAmJiAhMCAhPT0gci52YWxpZFBvc2l0aW9uc1tlXS5nZW5lcmF0ZWRJbnB1dCkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IHQgJiYgZSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gbi5nZXRUZXN0cy5jYWxsKGEsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gc1tzLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiA/IDEgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gbi5kZXRlcm1pbmVUZXN0VGVtcGxhdGUuY2FsbChhLCBlLCBuLmdldFRlc3RzLmNhbGwoYSwgZSkpLCBjID0gbi5nZXRQbGFjZWhvbGRlci5jYWxsKGEsIGUsIGwubWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwubWF0Y2guZGVmICE9PSBjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbChlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBpICYmIChpID0gITApO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciByID0gZSArIDE7IFwiXCIgIT09IG4uZ2V0VGVzdC5jYWxsKGEsIHIpLm1hdGNoLmRlZiAmJiAoITAgPT09IHQgJiYgKCEwICE9PSBuLmdldFRlc3QuY2FsbChhLCByKS5tYXRjaC5uZXdCbG9ja01hcmtlciB8fCAhcy5jYWxsKGEsIHIsIHZvaWQgMCwgITApKSB8fCAhMCAhPT0gdCAmJiAhcy5jYWxsKGEsIHIsIHZvaWQgMCwgaSkpOyApIHIrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMub3B0cywgaSA9IHRoaXMuZWw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc1JUTCB8fCBcIm51bWJlclwiICE9IHR5cGVvZiBlIHx8IHQuZ3JlZWR5ICYmIFwiXCIgPT09IHQucGxhY2Vob2xkZXIgfHwgIWkgfHwgKGUgPSB0aGlzLl92YWx1ZUdldCgpLmxlbmd0aCAtIGUpIDwgMCAmJiAoZSA9IDApLCBcbiAgICAgICAgICAgICAgICAgICAgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNDcxMzogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5kZXRlcm1pbmVUZXN0VGVtcGxhdGUgPSBjLCB0LmdldERlY2lzaW9uVGFrZXIgPSBvLCB0LmdldE1hc2tUZW1wbGF0ZSA9IGZ1bmN0aW9uKGUsIHQsIGksIG4sIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLCBvID0gdGhpcy5vcHRzLCB1ID0gdGhpcy5tYXNrc2V0LCBmID0gby5ncmVlZHk7XG4gICAgICAgICAgICAgICAgICAgIGEgJiYgby5ncmVlZHkgJiYgKG8uZ3JlZWR5ID0gITEsIHIubWFza3NldC50ZXN0cyA9IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgdCA9IHQgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAsIGgsIHYsIG0sIGcgPSBbXSwgeSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gZSAmJiB1LnZhbGlkUG9zaXRpb25zW3ldKSBoID0gKHYgPSBhICYmIHUudmFsaWRQb3NpdGlvbnNbeV0ubWF0Y2gub3B0aW9uYWxpdHkgJiYgdm9pZCAwID09PSB1LnZhbGlkUG9zaXRpb25zW3kgKyAxXSAmJiAoITAgPT09IHUudmFsaWRQb3NpdGlvbnNbeV0uZ2VuZXJhdGVkSW5wdXQgfHwgdS52YWxpZFBvc2l0aW9uc1t5XS5pbnB1dCA9PSBvLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgJiYgeSA+IDApID8gYy5jYWxsKHIsIHksIGQuY2FsbChyLCB5LCBwLCB5IC0gMSkpIDogdS52YWxpZFBvc2l0aW9uc1t5XSkubWF0Y2gsIFxuICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHYubG9jYXRvci5zbGljZSgpLCBnLnB1c2goITAgPT09IGkgPyB2LmlucHV0IDogITEgPT09IGkgPyBoLm5hdGl2ZURlZiA6IHMuY2FsbChyLCB5LCBoKSk7IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAodiA9IGwuY2FsbChyLCB5LCBwLCB5IC0gMSkpLm1hdGNoLCBwID0gdi5sb2NhdG9yLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSAhMCAhPT0gbiAmJiAoITEgIT09IG8uaml0TWFza2luZyA/IG8uaml0TWFza2luZyA6IGguaml0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobSA9IChtICYmIGguc3RhdGljICYmIGguZGVmICE9PSBvLmdyb3VwU2VwYXJhdG9yICYmIG51bGwgPT09IGguZm4gfHwgdS52YWxpZFBvc2l0aW9uc1t5IC0gMV0gJiYgaC5zdGF0aWMgJiYgaC5kZWYgIT09IG8uZ3JvdXBTZXBhcmF0b3IgJiYgbnVsbCA9PT0gaC5mbikgJiYgdS50ZXN0c1t5XSkgfHwgITEgPT09IGsgfHwgdm9pZCAwID09PSBrIHx8IFwibnVtYmVyXCIgPT0gdHlwZW9mIGsgJiYgaXNGaW5pdGUoaykgJiYgayA+IHkgPyBnLnB1c2goITEgPT09IGkgPyBoLm5hdGl2ZURlZiA6IHMuY2FsbChyLCBnLmxlbmd0aCwgaCkpIDogbSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICghMCAhPT0gaC5zdGF0aWMgfHwgXCJcIiAhPT0gaC5kZWYgfHwgdCA+IHkpO1xuICAgICAgICAgICAgICAgICAgICBcIlwiID09PSBnW2cubGVuZ3RoIC0gMV0gJiYgZy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgITEgPT09IGkgJiYgdm9pZCAwICE9PSB1Lm1hc2tMZW5ndGggfHwgKHUubWFza0xlbmd0aCA9IHkgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uZ3JlZWR5ID0gZiwgZztcbiAgICAgICAgICAgICAgICB9LCB0LmdldFBsYWNlaG9sZGVyID0gcywgdC5nZXRUZXN0ID0gdSwgdC5nZXRUZXN0VGVtcGxhdGUgPSBsLCB0LmdldFRlc3RzID0gZCwgdC5pc1N1YnNldE9mID0gZjtcbiAgICAgICAgICAgICAgICB2YXIgbiwgYSA9IChuID0gaSgyMzk0KSkgJiYgbi5fX2VzTW9kdWxlID8gbiA6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gKG51bGwgIT0gZS5hbHRlcm5hdGlvbiA/IGUubWxvY1tvKGUpXSA6IGUubG9jYXRvcikuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiXCIgIT09IGkpIGZvciAoO2kubGVuZ3RoIDwgdDsgKSBpICs9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbyhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZS5sb2NhdG9yW2UuYWx0ZXJuYXRpb25dO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCAmJiB0Lmxlbmd0aCA+IDAgJiYgKHQgPSB0LnNwbGl0KFwiLFwiKVswXSksIHZvaWQgMCAhPT0gdCA/IHQudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHMoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMub3B0cywgYSA9IHRoaXMubWFza3NldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gKHQgPSB0IHx8IHUuY2FsbCh0aGlzLCBlKS5tYXRjaCkucGxhY2Vob2xkZXIgfHwgITAgPT09IGkpIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQucGxhY2Vob2xkZXIgPyB0LnBsYWNlaG9sZGVyKG4pIDogdC5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSB0LnN0YXRpYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUgPiAtMSAmJiB2b2lkIDAgPT09IGEudmFsaWRQb3NpdGlvbnNbZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciwgbyA9IGQuY2FsbCh0aGlzLCBlKSwgcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gb1tvLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiA/IDEgOiAwKSkgZm9yICh2YXIgbCA9IDA7IGwgPCBvLmxlbmd0aDsgbCsrKSBpZiAoXCJcIiAhPT0gb1tsXS5tYXRjaC5kZWYgJiYgITAgIT09IG9bbF0ubWF0Y2gub3B0aW9uYWxpdHkgJiYgITAgIT09IG9bbF0ubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmICghMCA9PT0gb1tsXS5tYXRjaC5zdGF0aWMgfHwgdm9pZCAwID09PSByIHx8ICExICE9PSBvW2xdLm1hdGNoLmZuLnRlc3Qoci5tYXRjaC5kZWYsIGEsIGUsICEwLCBuKSkgJiYgKHMucHVzaChvW2xdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITAgPT09IG9bbF0ubWF0Y2guc3RhdGljICYmIChyID0gb1tsXSksIHMubGVuZ3RoID4gMSAmJiAvWzAtOWEtYkEtWl0vLnRlc3Qoc1swXS5tYXRjaC5kZWYpKSkgcmV0dXJuIG4ucGxhY2Vob2xkZXIuY2hhckF0KGUgJSBuLnBsYWNlaG9sZGVyLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5kZWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4ucGxhY2Vob2xkZXIuY2hhckF0KGUgJSBuLnBsYWNlaG9sZGVyLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGwoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0LnZhbGlkUG9zaXRpb25zW2VdIHx8IGMuY2FsbCh0aGlzLCBlLCBkLmNhbGwodGhpcywgZSwgdCA/IHQuc2xpY2UoKSA6IHQsIGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5vcHRzLCBuID0gMCwgYSA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gMCwgbiA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5tYXRjaC5vcHRpb25hbGl0eSAmJiAoMCAhPT0gaSAmJiBpICE9PSBlLm1hdGNoLm9wdGlvbmFsaXR5ICYmIChuID0gITApLCAoMCA9PT0gaSB8fCBpID4gZS5tYXRjaC5vcHRpb25hbGl0eSkgJiYgKGkgPSBlLm1hdGNoLm9wdGlvbmFsaXR5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSksIGkgJiYgKDAgPT0gZSB8fCAxID09IHQubGVuZ3RoID8gaSA9IDAgOiBuIHx8IChpID0gMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgICAgIH0oZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgIGUgPSBlID4gMCA/IGUgLSAxIDogMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8sIHMsIGwsIGMgPSByKHUuY2FsbCh0aGlzLCBlKSk7XG4gICAgICAgICAgICAgICAgICAgIGkuZ3JlZWR5ICYmIHQubGVuZ3RoID4gMSAmJiBcIlwiID09PSB0W3QubGVuZ3RoIC0gMV0ubWF0Y2guZGVmICYmIChuID0gMSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGYgPSAwOyBmIDwgdC5sZW5ndGggLSBuOyBmKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gdFtmXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSByKGQsIGMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gTWF0aC5hYnMobyAtIGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKHZvaWQgMCA9PT0gcyB8fCBcIlwiICE9PSBvICYmIHAgPCBzIHx8IGwgJiYgIWkuZ3JlZWR5ICYmIGwubWF0Y2gub3B0aW9uYWxpdHkgJiYgbC5tYXRjaC5vcHRpb25hbGl0eSAtIGEgPiAwICYmIFwibWFzdGVyXCIgPT09IGwubWF0Y2gubmV3QmxvY2tNYXJrZXIgJiYgKCFkLm1hdGNoLm9wdGlvbmFsaXR5IHx8IGQubWF0Y2gub3B0aW9uYWxpdHkgLSBhIDwgMSB8fCAhZC5tYXRjaC5uZXdCbG9ja01hcmtlcikgfHwgbCAmJiAhaS5ncmVlZHkgJiYgbC5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgIWQubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyKSAmJiAocyA9IHAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1KGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLm1hc2tzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpLnZhbGlkUG9zaXRpb25zW2VdID8gaS52YWxpZFBvc2l0aW9uc1tlXSA6ICh0IHx8IGQuY2FsbCh0aGlzLCBlKSlbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGYoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBuKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHQsIGkgPSBbXSwgbiA9IC0xLCBhID0gMCwgciA9IGUubGVuZ3RoOyBhIDwgcjsgYSsrKSBpZiAoXCItXCIgPT09IGUuY2hhckF0KGEpKSBmb3IgKHQgPSBlLmNoYXJDb2RlQXQoYSArIDEpOyArK24gPCB0OyApIGkucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKG4pKTsgZWxzZSBuID0gZS5jaGFyQ29kZUF0KGEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGkucHVzaChlLmNoYXJBdChhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLm1hdGNoLmRlZiA9PT0gdC5tYXRjaC5uYXRpdmVEZWYgfHwgISghKGkucmVnZXggfHwgZS5tYXRjaC5mbiBpbnN0YW5jZW9mIFJlZ0V4cCAmJiB0Lm1hdGNoLmZuIGluc3RhbmNlb2YgUmVnRXhwKSB8fCAhMCA9PT0gZS5tYXRjaC5zdGF0aWMgfHwgITAgPT09IHQubWF0Y2guc3RhdGljKSAmJiAtMSAhPT0gbih0Lm1hdGNoLmZuLnRvU3RyaW5nKCkucmVwbGFjZSgvW1tcXF0vXS9nLCBcIlwiKSkuaW5kZXhPZihuKGUubWF0Y2guZm4udG9TdHJpbmcoKS5yZXBsYWNlKC9bW1xcXS9dL2csIFwiXCIpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGQoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiwgciwgbyA9IHRoaXMsIHMgPSB0aGlzLmRlcGVuZGVuY3lMaWIsIGwgPSB0aGlzLm1hc2tzZXQsIHUgPSB0aGlzLm9wdHMsIGQgPSB0aGlzLmVsLCBwID0gbC5tYXNrVG9rZW4sIGggPSB0ID8gaSA6IDAsIHYgPSB0ID8gdC5zbGljZSgpIDogWyAwIF0sIG0gPSBbXSwgZyA9ICExLCB5ID0gdCA/IHQuam9pbihcIlwiKSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGsodCwgaSwgciwgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhyLCBzLCBwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gMCA9PT0gdC5tYXRjaGVzLmluZGV4T2YoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpIHx8IHQubWF0Y2hlcy5ldmVyeSgoZnVuY3Rpb24obiwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwID09PSBuLmlzUXVhbnRpZmllciA/IGkgPSB2KGUsIHQubWF0Y2hlc1thIC0gMV0pIDogT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sIFwibWF0Y2hlc1wiKSAmJiAoaSA9IHYoZSwgbikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHgoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiwgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChsLnRlc3RzW2VdIHx8IGwudmFsaWRQb3NpdGlvbnNbZV0pICYmIChsLnRlc3RzW2VdIHx8IFsgbC52YWxpZFBvc2l0aW9uc1tlXSBdKS5ldmVyeSgoZnVuY3Rpb24oZSwgcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubWxvY1t0XSkgcmV0dXJuIG4gPSBlLCAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gdm9pZCAwICE9PSBpID8gaSA6IGUuYWx0ZXJuYXRpb24sIHMgPSB2b2lkIDAgIT09IGUubG9jYXRvcltvXSA/IGUubG9jYXRvcltvXS50b1N0cmluZygpLmluZGV4T2YodCkgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodm9pZCAwID09PSBhIHx8IHMgPCBhKSAmJiAtMSAhPT0gcyAmJiAobiA9IGUsIGEgPSBzKSwgITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBuLmxvY2F0b3Jbbi5hbHRlcm5hdGlvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG4ubWxvY1t0XSB8fCBuLm1sb2Nbcl0gfHwgbi5sb2NhdG9yKS5zbGljZSgodm9pZCAwICE9PSBpID8gaSA6IG4uYWx0ZXJuYXRpb24pICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gaSA/IHgoZSwgdCkgOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFAoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGUuYWx0ZXJuYXRpb24sIG4gPSB2b2lkIDAgPT09IHQgfHwgaSA9PT0gdC5hbHRlcm5hdGlvbiAmJiAtMSA9PT0gZS5sb2NhdG9yW2ldLnRvU3RyaW5nKCkuaW5kZXhPZih0LmxvY2F0b3JbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW4gJiYgaSA+IHQuYWx0ZXJuYXRpb24pIGZvciAodmFyIGEgPSB0LmFsdGVybmF0aW9uOyBhIDwgaTsgYSsrKSBpZiAoZS5sb2NhdG9yW2FdICE9PSB0LmxvY2F0b3JbYV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBhLCBuID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5tbG9jID0gZS5tbG9jIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBlLmxvY2F0b3JbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIgJiYgKHIgPSByLnNwbGl0KFwiLFwiKVswXSksIHZvaWQgMCA9PT0gZS5tbG9jW3JdICYmIChlLm1sb2Nbcl0gPSBlLmxvY2F0b3Iuc2xpY2UoKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBvIGluIHQubWxvYykgXCJzdHJpbmdcIiA9PSB0eXBlb2YgbyAmJiAobyA9IG8uc3BsaXQoXCIsXCIpWzBdKSwgdm9pZCAwID09PSBlLm1sb2Nbb10gJiYgKGUubWxvY1tvXSA9IHQubWxvY1tvXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubG9jYXRvcltpXSA9IE9iamVjdC5rZXlzKGUubWxvYykuam9pbihcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuYWx0ZXJuYXRpb24gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB3KGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubG9jYXRvci5sZW5ndGggIT09IHQubG9jYXRvci5sZW5ndGgpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGUuYWx0ZXJuYXRpb24gKyAxOyBpIDwgZS5sb2NhdG9yLmxlbmd0aDsgaSsrKSBpZiAoZS5sb2NhdG9yW2ldICE9PSB0LmxvY2F0b3JbaV0pIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCA+IGUgKyB1Ll9tYXhUZXN0UG9zKSB0aHJvdyBcIklucHV0bWFzazogVGhlcmUgaXMgcHJvYmFibHkgYW4gZXJyb3IgaW4geW91ciBtYXNrIGRlZmluaXRpb24gb3IgaW4gdGhlIGNvZGUuIENyZWF0ZSBhbiBpc3N1ZSBvbiBnaXRodWIgd2l0aCBhbiBleGFtcGxlIG9mIHRoZSBtYXNrIHlvdSBhcmUgdXNpbmcuIFwiICsgbC5tYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoID09PSBlICYmIHZvaWQgMCA9PT0gci5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdG9yOiBzLnJldmVyc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNkOiB5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWxvYzoge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksICFyLm9wdGlvbmFsaXR5IHx8IHZvaWQgMCAhPT0gcCB8fCAhKHUuZGVmaW5pdGlvbnMgJiYgdS5kZWZpbml0aW9uc1tyLm5hdGl2ZURlZl0gJiYgdS5kZWZpbml0aW9uc1tyLm5hdGl2ZURlZl0ub3B0aW9uYWwgfHwgYS5kZWZhdWx0LnByb3RvdHlwZS5kZWZpbml0aW9uc1tyLm5hdGl2ZURlZl0gJiYgYS5kZWZhdWx0LnByb3RvdHlwZS5kZWZpbml0aW9uc1tyLm5hdGl2ZURlZl0ub3B0aW9uYWwpKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSAhMCwgaCA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2b2lkIDAgIT09IHIubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5pc0dyb3VwICYmIHAgIT09IHIpIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID0gYyh0Lm1hdGNoZXNbdC5tYXRjaGVzLmluZGV4T2YocikgKyAxXSwgcywgcCkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5pc09wdGlvbmFsKSByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHIsIGEgPSBtLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID0gayhyLCBpLCBzLCBwKSwgbS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0uZm9yRWFjaCgoZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID49IGEgJiYgKGUubWF0Y2gub3B0aW9uYWxpdHkgPSBlLm1hdGNoLm9wdGlvbmFsaXR5ID8gZS5tYXRjaC5vcHRpb25hbGl0eSArIDEgOiAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIG4gPSBtW20ubGVuZ3RoIC0gMV0ubWF0Y2gsIHZvaWQgMCAhPT0gcCB8fCAhdihuLCB0KSkgcmV0dXJuIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZyA9ICEwLCBoID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5pc0FsdGVybmF0b3IpIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uaGFzQWx0ZXJuYXRvciA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4sIGEsIHYsIHkgPSByLCBrID0gW10sIGIgPSBtLnNsaWNlKCksIFMgPSBzLmxlbmd0aCwgTSA9ICExLCBfID0gaS5sZW5ndGggPiAwID8gaS5zaGlmdCgpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgPT09IF8gfHwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBPLCBFID0gaCwgVCA9IGkuc2xpY2UoKSwgaiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBfKSBqID0gXy5zcGxpdChcIixcIik7IGVsc2UgZm9yIChPID0gMDsgTyA8IHkubWF0Y2hlcy5sZW5ndGg7IE8rKykgai5wdXNoKE8udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gbC5leGNsdWRlc1tlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBBID0gai5zbGljZSgpLCBEID0gMCwgQiA9IGwuZXhjbHVkZXNbZV0ubGVuZ3RoOyBEIDwgQjsgRCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgQyA9IGwuZXhjbHVkZXNbZV1bRF0udG9TdHJpbmcoKS5zcGxpdChcIjpcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmxlbmd0aCA9PSBDWzFdICYmIGouc3BsaWNlKGouaW5kZXhPZihDWzBdKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PT0gai5sZW5ndGggJiYgKGRlbGV0ZSBsLmV4Y2x1ZGVzW2VdLCBqID0gQSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghMCA9PT0gdS5rZWVwU3RhdGljIHx8IGlzRmluaXRlKHBhcnNlSW50KHUua2VlcFN0YXRpYykpICYmIEUgPj0gdS5rZWVwU3RhdGljKSAmJiAoaiA9IGouc2xpY2UoMCwgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFIgPSAwOyBSIDwgai5sZW5ndGg7IFIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPID0gcGFyc2VJbnQoaltSXSksIG0gPSBbXSwgaSA9IFwic3RyaW5nXCIgPT0gdHlwZW9mIF8gJiYgeChoLCBPLCBTKSB8fCBULnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBMID0geS5tYXRjaGVzW09dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTCAmJiBjKEwsIFsgTyBdLmNvbmNhdChzKSwgcCkpIHIgPSAhMDsgZWxzZSBpZiAoMCA9PT0gUiAmJiAoTSA9ICEwKSwgTCAmJiBMLm1hdGNoZXMgJiYgTC5tYXRjaGVzLmxlbmd0aCA+IHkubWF0Y2hlc1swXS5tYXRjaGVzLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBtLnNsaWNlKCksIGggPSBFLCBtID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIEYgPSAwOyBGIDwgbi5sZW5ndGg7IEYrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEkgPSBuW0ZdLCBOID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJLm1hdGNoLmppdCA9IEkubWF0Y2guaml0IHx8IE0sIEkuYWx0ZXJuYXRpb24gPSBJLmFsdGVybmF0aW9uIHx8IFMsIFAoSSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBWID0gMDsgViA8IGsubGVuZ3RoOyBWKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgRyA9IGtbVl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIF8gfHwgdm9pZCAwICE9PSBJLmFsdGVybmF0aW9uICYmIGouaW5jbHVkZXMoSS5sb2NhdG9yW0kuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChJLm1hdGNoLm5hdGl2ZURlZiA9PT0gRy5tYXRjaC5uYXRpdmVEZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE4gPSAhMCwgUChHLCBJKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmKEksIEcsIHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQKEksIEcpICYmIChOID0gITAsIGsuc3BsaWNlKGsuaW5kZXhPZihHKSwgMCwgSSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYoRywgSSwgdSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAoRywgSSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA9IEcsICEwID09PSAoYSA9IEkpLm1hdGNoLnN0YXRpYyAmJiAhMCAhPT0gdi5tYXRjaC5zdGF0aWMgJiYgdi5tYXRjaC5mbi50ZXN0KGEubWF0Y2guZGVmLCBsLCBlLCAhMSwgdSwgITEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3KEksIEcpIHx8IHZvaWQgMCAhPT0gZC5pbnB1dG1hc2sudXNlck9wdGlvbnMua2VlcFN0YXRpYyA/IFAoSSwgRykgJiYgKE4gPSAhMCwgay5zcGxpY2Uoay5pbmRleE9mKEcpLCAwLCBJKSkgOiB1LmtlZXBTdGF0aWMgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTiB8fCBrLnB1c2goSSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA9IGIuY29uY2F0KGspLCBoID0gZSwgZyA9IG0ubGVuZ3RoID4gMCwgciA9IGsubGVuZ3RoID4gMCwgaSA9IFQuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSByID0gYyh5Lm1hdGNoZXNbX10gfHwgdC5tYXRjaGVzW19dLCBbIF8gXS5jb25jYXQocyksIHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5pc1F1YW50aWZpZXIgJiYgcCAhPT0gdC5tYXRjaGVzW3QubWF0Y2hlcy5pbmRleE9mKHIpIC0gMV0pIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSByLCBvID0gITEsIGYgPSBpLmxlbmd0aCA+IDAgPyBpLnNoaWZ0KCkgOiAwOyBmIDwgKGlzTmFOKGEucXVhbnRpZmllci5tYXgpID8gZiArIDEgOiBhLnF1YW50aWZpZXIubWF4KSAmJiBoIDw9IGU7IGYrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gdC5tYXRjaGVzW3QubWF0Y2hlcy5pbmRleE9mKGEpIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPSBjKGQsIFsgZiBdLmNvbmNhdChzKSwgZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0uZm9yRWFjaCgoZnVuY3Rpb24odCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG4gPSBiKGQsIHQubWF0Y2gpID8gdC5tYXRjaCA6IG1bbS5sZW5ndGggLSAxXS5tYXRjaCkub3B0aW9uYWxRdWFudGlmaWVyID0gZiA+PSBhLnF1YW50aWZpZXIubWluLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uaml0ID0gKGYgKyAxKSAqIChkLm1hdGNoZXMuaW5kZXhPZihuKSArIDEpID4gYS5xdWFudGlmaWVyLmppdCwgbi5vcHRpb25hbFF1YW50aWZpZXIgJiYgdihuLCBkKSAmJiAoZyA9ICEwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSBlLCB1LmdyZWVkeSAmJiBudWxsID09IGwudmFsaWRQb3NpdGlvbnNbZSAtIDFdICYmIGYgPiBhLnF1YW50aWZpZXIubWluICYmIC0xICE9IFsgXCIqXCIsIFwiK1wiIF0uaW5kZXhPZihhLnF1YW50aWZpZXIubWF4KSAmJiAobS5wb3AoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gdm9pZCAwKSwgbyA9ICEwLCByID0gITEpLCAhbyAmJiBuLmppdCAmJiAobC5qaXRPZmZzZXRbZV0gPSBkLm1hdGNoZXMubGVuZ3RoIC0gZC5tYXRjaGVzLmluZGV4T2YobikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIG8pIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID0gayhyLCBpLCBzLCBwKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBoKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwID0gaS5sZW5ndGggPiAwID8gaS5zaGlmdCgpIDogMDsgcCA8IHQubWF0Y2hlcy5sZW5ndGg7IHArKykgaWYgKCEwICE9PSB0Lm1hdGNoZXNbcF0uaXNRdWFudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBjKHQubWF0Y2hlc1twXSwgWyBwIF0uY29uY2F0KHIpLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodiAmJiBoID09PSBlKSByZXR1cm4gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCA+IGUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGIoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAtMSAhPSBlLm1hdGNoZXMuaW5kZXhPZih0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpIHx8IGUubWF0Y2hlcy5mb3JFYWNoKChmdW5jdGlvbihlLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBlLm1hdGNoZXMgfHwgaSB8fCAoaSA9IGIoZSwgdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4LCBQID0gZSAtIDE7IHZvaWQgMCA9PT0gKHggPSBsLnZhbGlkUG9zaXRpb25zW1BdIHx8IGwudGVzdHNbUF0pICYmIFAgPiAtMTsgKSBQLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSB4ICYmIFAgPiAtMSAmJiAodiA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGksIG4gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodCkgfHwgKHQgPSBbIHQgXSksIHQubGVuZ3RoID4gMCAmJiAodm9pZCAwID09PSB0WzBdLmFsdGVybmF0aW9uIHx8ICEwID09PSB1LmtlZXBTdGF0aWMgPyAwID09PSAobiA9IGMuY2FsbChvLCBlLCB0LnNsaWNlKCkpLmxvY2F0b3Iuc2xpY2UoKSkubGVuZ3RoICYmIChuID0gdFswXS5sb2NhdG9yLnNsaWNlKCkpIDogdC5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBlLmRlZiAmJiAoMCA9PT0gbi5sZW5ndGggPyAoaSA9IGUuYWx0ZXJuYXRpb24sIG4gPSBlLmxvY2F0b3Iuc2xpY2UoKSkgOiBlLmxvY2F0b3JbaV0gJiYgLTEgPT09IG5baV0udG9TdHJpbmcoKS5pbmRleE9mKGUubG9jYXRvcltpXSkgJiYgKG5baV0gKz0gXCIsXCIgKyBlLmxvY2F0b3JbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSwgbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KFAsIHgpLCB5ID0gdi5qb2luKFwiXCIpLCBoID0gUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobC50ZXN0c1tlXSAmJiBsLnRlc3RzW2VdWzBdLmNkID09PSB5KSByZXR1cm4gbC50ZXN0c1tlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHcgPSB2LnNoaWZ0KCk7IHcgPCBwLmxlbmd0aDsgdysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGsocFt3XSwgdiwgWyB3IF0pICYmIGggPT09IGUgfHwgaCA+IGUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCA9PT0gbS5sZW5ndGggfHwgZykgJiYgbS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbGl0eTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0b3I6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWxvYzoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBjZDogeVxuICAgICAgICAgICAgICAgICAgICB9KSwgdm9pZCAwICE9PSB0ICYmIGwudGVzdHNbZV0gPyByID0gcy5leHRlbmQoITAsIFtdLCBtKSA6IChsLnRlc3RzW2VdID0gcy5leHRlbmQoITAsIFtdLCBtKSwgXG4gICAgICAgICAgICAgICAgICAgIHIgPSBsLnRlc3RzW2VdKSwgbS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLm1hdGNoLm9wdGlvbmFsaXR5ID0gZS5tYXRjaC5kZWZPcHRpb25hbGl0eSB8fCAhMTtcbiAgICAgICAgICAgICAgICAgICAgfSkpLCByO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA3MjE1OiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmFsdGVybmF0ZSA9IHMsIHQuY2hlY2tBbHRlcm5hdGlvbk1hdGNoID0gZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuLCBhID0gdGhpcy5vcHRzLmdyZWVkeSA/IHQgOiB0LnNsaWNlKDAsIDEpLCByID0gITEsIG8gPSB2b2lkIDAgIT09IGkgPyBpLnNwbGl0KFwiLFwiKSA6IFtdLCBzID0gMDsgcyA8IG8ubGVuZ3RoOyBzKyspIC0xICE9PSAobiA9IGUuaW5kZXhPZihvW3NdKSkgJiYgZS5zcGxpY2UobiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgZS5sZW5ndGg7IGwrKykgaWYgKGEuaW5jbHVkZXMoZVtsXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgICAgIH0sIHQuaGFuZGxlUmVtb3ZlID0gZnVuY3Rpb24oZSwgdCwgaSwgbywgbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHRoaXMsIHUgPSB0aGlzLm1hc2tzZXQsIGYgPSB0aGlzLm9wdHM7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoZi5udW1lcmljSW5wdXQgfHwgYy5pc1JUTCkgJiYgKHQgPT09IGEua2V5cy5CYWNrc3BhY2UgPyB0ID0gYS5rZXlzLkRlbGV0ZSA6IHQgPT09IGEua2V5cy5EZWxldGUgJiYgKHQgPSBhLmtleXMuQmFja3NwYWNlKSwgXG4gICAgICAgICAgICAgICAgICAgIGMuaXNSVEwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGkuZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5lbmQgPSBpLmJlZ2luLCBpLmJlZ2luID0gZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcCwgaCA9IHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChjLCB2b2lkIDAsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgaS5lbmQgPj0gci5nZXRCdWZmZXIuY2FsbChjKS5sZW5ndGggJiYgaCA+PSBpLmVuZCAmJiAoaS5lbmQgPSBoICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHQgPT09IGEua2V5cy5CYWNrc3BhY2UgPyBpLmVuZCAtIGkuYmVnaW4gPCAxICYmIChpLmJlZ2luID0gci5zZWVrUHJldmlvdXMuY2FsbChjLCBpLmJlZ2luKSkgOiB0ID09PSBhLmtleXMuRGVsZXRlICYmIGkuYmVnaW4gPT09IGkuZW5kICYmIChpLmVuZCA9IHIuaXNNYXNrLmNhbGwoYywgaS5lbmQsICEwLCAhMCkgPyBpLmVuZCArIDEgOiByLnNlZWtOZXh0LmNhbGwoYywgaS5lbmQpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gKHAgPSB2LmNhbGwoYywgaSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IG8gJiYgITEgIT09IGYua2VlcFN0YXRpYyB8fCBudWxsICE9PSBmLnJlZ2V4ICYmIC0xICE9PSBuLmdldFRlc3QuY2FsbChjLCBpLmJlZ2luKS5tYXRjaC5kZWYuaW5kZXhPZihcInxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHMuY2FsbChjLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSB2b2lkIDAgIT09IG0uY2FyZXQgPyBtLmNhcmV0IDogbS5wb3MgPyByLnNlZWtOZXh0LmNhbGwoYywgbS5wb3MuYmVnaW4gPyBtLnBvcy5iZWdpbiA6IG0ucG9zKSA6IHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChjLCAtMSwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodCAhPT0gYS5rZXlzLkRlbGV0ZSB8fCBpLmJlZ2luID4gZykgJiYgaS5iZWdpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gbyAmJiAodS5wID0gdCA9PT0gYS5rZXlzLkRlbGV0ZSA/IGkuYmVnaW4gKyBwIDogaS5iZWdpbiwgdS5wID0gci5kZXRlcm1pbmVOZXdDYXJldFBvc2l0aW9uLmNhbGwoYywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiB1LnAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiB1LnBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sICExLCAhMSA9PT0gZi5pbnNlcnRNb2RlICYmIHQgPT09IGEua2V5cy5CYWNrc3BhY2UgPyBcIm5vbmVcIiA6IHZvaWQgMCkuYmVnaW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgdC5pc0NvbXBsZXRlID0gYywgdC5pc1NlbGVjdGlvbiA9IHUsIHQuaXNWYWxpZCA9IGYsIHQucmVmcmVzaEZyb21CdWZmZXIgPSBwLCBcbiAgICAgICAgICAgICAgICB0LnJldmFsaWRhdGVNYXNrID0gdjtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGkoNDcxMyksIGEgPSBpKDI4MzkpLCByID0gaSg4NzExKSwgbyA9IGkoNjAzMCk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcyhlLCB0LCBpLCBhLCBvLCBsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjLCB1LCBkLCBwLCBoLCB2LCBtLCBnLCB5LCBrLCBiLCB4ID0gdGhpcywgUCA9IHRoaXMuZGVwZW5kZW5jeUxpYiwgdyA9IHRoaXMub3B0cywgUyA9IHgubWFza3NldCwgTSA9IFAuZXh0ZW5kKCEwLCBbXSwgUy52YWxpZFBvc2l0aW9ucyksIF8gPSBQLmV4dGVuZCghMCwge30sIFMudGVzdHMpLCBPID0gITEsIEUgPSAhMSwgVCA9IHZvaWQgMCAhPT0gbyA/IG8gOiByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoeCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsICYmIChrID0gbC5iZWdpbiwgYiA9IGwuZW5kLCBsLmJlZ2luID4gbC5lbmQgJiYgKGsgPSBsLmVuZCwgYiA9IGwuYmVnaW4pKSwgXG4gICAgICAgICAgICAgICAgICAgIC0xID09PSBUICYmIHZvaWQgMCA9PT0gbykgYyA9IDAsIHUgPSAocCA9IG4uZ2V0VGVzdC5jYWxsKHgsIGMpKS5hbHRlcm5hdGlvbjsgZWxzZSBmb3IgKDtUID49IDA7IFQtLSkgaWYgKChkID0gUy52YWxpZFBvc2l0aW9uc1tUXSkgJiYgdm9pZCAwICE9PSBkLmFsdGVybmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVCA8PSAoZSB8fCAwKSAmJiBwICYmIHAubG9jYXRvcltkLmFsdGVybmF0aW9uXSAhPT0gZC5sb2NhdG9yW2QuYWx0ZXJuYXRpb25dKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBULCB1ID0gUy52YWxpZFBvc2l0aW9uc1tjXS5hbHRlcm5hdGlvbiwgcCA9IGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbSA9IHBhcnNlSW50KGMpLCBTLmV4Y2x1ZGVzW21dID0gUy5leGNsdWRlc1ttXSB8fCBbXSwgITAgIT09IGUgJiYgUy5leGNsdWRlc1ttXS5wdXNoKCgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uZ2V0RGVjaXNpb25UYWtlcikocCkgKyBcIjpcIiArIHAuYWx0ZXJuYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGogPSBbXSwgQSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChoID0gbTsgaCA8IHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh4LCB2b2lkIDAsICEwKSArIDE7IGgrKykgLTEgPT09IEEgJiYgZSA8PSBoICYmIHZvaWQgMCAhPT0gdCAmJiAoai5wdXNoKHQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIEEgPSBqLmxlbmd0aCAtIDEpLCAodiA9IFMudmFsaWRQb3NpdGlvbnNbaF0pICYmICEwICE9PSB2LmdlbmVyYXRlZElucHV0ICYmICh2b2lkIDAgPT09IGwgfHwgaCA8IGsgfHwgaCA+PSBiKSAmJiBqLnB1c2godi5pbnB1dCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIFMudmFsaWRQb3NpdGlvbnNbaF07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKC0xID09PSBBICYmIHZvaWQgMCAhPT0gdCAmJiAoai5wdXNoKHQpLCBBID0gai5sZW5ndGggLSAxKTsgdm9pZCAwICE9PSBTLmV4Y2x1ZGVzW21dICYmIFMuZXhjbHVkZXNbbV0ubGVuZ3RoIDwgMTA7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoUy50ZXN0cyA9IHt9LCByLnJlc2V0TWFza1NldC5jYWxsKHgsICEwKSwgTyA9ICEwLCBoID0gMDsgaCA8IGoubGVuZ3RoICYmIChnID0gTy5jYXJldCB8fCByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoeCwgdm9pZCAwLCAhMCkgKyAxLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0galtoXSwgTyA9IGYuY2FsbCh4LCBnLCB5LCAhMSwgYSwgITApKTsgaCsrKSBoID09PSBBICYmIChFID0gTyksIDEgPT0gZSAmJiBPICYmIChFID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldFBvczogaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5yZXNldE1hc2tTZXQuY2FsbCh4KSwgcCA9IG4uZ2V0VGVzdC5jYWxsKHgsIG0pLCBTLnZhbGlkUG9zaXRpb25zID0gUC5leHRlbmQoITAsIFtdLCBNKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUy50ZXN0cyA9IFAuZXh0ZW5kKCEwLCB7fSwgXyksICFTLmV4Y2x1ZGVzW21dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUgPSBzLmNhbGwoeCwgZSwgdCwgaSwgYSwgbSAtIDEsIGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEQgPSAoMCwgbi5nZXREZWNpc2lvblRha2VyKShwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IFMuZXhjbHVkZXNbbV0uaW5kZXhPZihEICsgXCI6XCIgKyBwLmFsdGVybmF0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFID0gcy5jYWxsKHgsIGUsIHQsIGksIGEsIG0gLSAxLCBsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoUy5leGNsdWRlc1ttXS5wdXNoKEQgKyBcIjpcIiArIHAuYWx0ZXJuYXRpb24pLCBoID0gbTsgaCA8IHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh4LCB2b2lkIDAsICEwKSArIDE7IGgrKykgZGVsZXRlIFMudmFsaWRQb3NpdGlvbnNbaF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEUgJiYgITEgPT09IHcua2VlcFN0YXRpYyB8fCBkZWxldGUgUy5leGNsdWRlc1ttXSwgRTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbChlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5vcHRzLCByID0gdGhpcy5tYXNrc2V0O1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG4uY2FzaW5nIHx8IHQuY2FzaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInVwcGVyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibG93ZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0aXRsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSByLnZhbGlkUG9zaXRpb25zW2kgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSAwID09PSBpIHx8IG8gJiYgby5pbnB1dCA9PT0gU3RyaW5nLmZyb21DaGFyQ29kZShhLmtleUNvZGUuU3BhY2UpID8gZS50b1VwcGVyQ2FzZSgpIDogZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygbi5jYXNpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5wdXNoKHIudmFsaWRQb3NpdGlvbnMpLCBlID0gbi5jYXNpbmcuYXBwbHkodGhpcywgcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMsIGkgPSB0aGlzLm9wdHMsIGEgPSB0aGlzLm1hc2tzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGkuaXNDb21wbGV0ZSkgcmV0dXJuIGkuaXNDb21wbGV0ZShlLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiKlwiICE9PSBpLnJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSAhMSwgcyA9IHIuZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24uY2FsbCh0LCAhMCksIGwgPSByLnNlZWtQcmV2aW91cy5jYWxsKHQsIHMubCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBzLmRlZiB8fCBzLmRlZi5uZXdCbG9ja01hcmtlciB8fCBzLmRlZi5vcHRpb25hbGl0eSB8fCBzLmRlZi5vcHRpb25hbFF1YW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPD0gbDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gbi5nZXRUZXN0VGVtcGxhdGUuY2FsbCh0LCBjKS5tYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSB1LnN0YXRpYyAmJiB2b2lkIDAgPT09IGEudmFsaWRQb3NpdGlvbnNbY10gJiYgITAgIT09IHUub3B0aW9uYWxpdHkgJiYgITAgIT09IHUub3B0aW9uYWxRdWFudGlmaWVyIHx8ICEwID09PSB1LnN0YXRpYyAmJiBlW2NdICE9PSBuLmdldFBsYWNlaG9sZGVyLmNhbGwodCwgYywgdSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdShlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5vcHRzLmluc2VydE1vZGUgPyAwIDogMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNSVEwgPyBlLmJlZ2luIC0gZS5lbmQgPiB0IDogZS5lbmQgLSBlLmJlZ2luID4gdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZihlLCB0LCBpLCBhLCBvLCBkLCBtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBnID0gdGhpcywgeSA9IHRoaXMuZGVwZW5kZW5jeUxpYiwgayA9IHRoaXMub3B0cywgYiA9IGcubWFza3NldDtcbiAgICAgICAgICAgICAgICAgICAgaSA9ICEwID09PSBpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGU7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGUucmVtb3ZlICYmIChBcnJheS5pc0FycmF5KGUucmVtb3ZlKSB8fCAoZS5yZW1vdmUgPSBbIGUucmVtb3ZlIF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlbW92ZS5zb3J0KChmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnLmlzUlRMID8gZS5wb3MgLSB0LnBvcyA6IHQucG9zIC0gZS5wb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5jYWxsKGcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBlICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIGUucmVtb3ZlID0gdm9pZCAwKSwgdm9pZCAwICE9PSBlLmluc2VydCAmJiAoQXJyYXkuaXNBcnJheShlLmluc2VydCkgfHwgKGUuaW5zZXJ0ID0gWyBlLmluc2VydCBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnNlcnQuc29ydCgoZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZy5pc1JUTCA/IHQucG9zIC0gZS5wb3MgOiBlLnBvcyAtIHQucG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IGUuYyAmJiBmLmNhbGwoZywgZS5wb3MsIGUuYywgdm9pZCAwID09PSBlLnN0cmljdCB8fCBlLnN0cmljdCwgdm9pZCAwICE9PSBlLmZyb21Jc1ZhbGlkID8gZS5mcm9tSXNWYWxpZCA6IGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgZS5pbnNlcnQgPSB2b2lkIDApLCBlLnJlZnJlc2hGcm9tQnVmZmVyICYmIGUuYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZS5yZWZyZXNoRnJvbUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5jYWxsKGcsICEwID09PSB0ID8gdCA6IHQuc3RhcnQsIHQuZW5kLCBlLmJ1ZmZlciksIGUucmVmcmVzaEZyb21CdWZmZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gZS5yZXdyaXRlUG9zaXRpb24gJiYgKHggPSBlLnJld3JpdGVQb3NpdGlvbiwgZSA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHcodCwgaSwgbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuLmdldFRlc3RzLmNhbGwoZywgdCkuZXZlcnkoKGZ1bmN0aW9uKGMsIGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGMubWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuZ2V0QnVmZmVyLmNhbGwoZywgITApLCAhMSAhPT0gKHMgPSAoIWQuaml0IHx8IHZvaWQgMCAhPT0gYi52YWxpZFBvc2l0aW9uc1tyLnNlZWtQcmV2aW91cy5jYWxsKGcsIHQpXSkgJiYgKG51bGwgIT0gZC5mbiA/IGQuZm4udGVzdChpLCBiLCB0LCBvLCBrLCB1LmNhbGwoZywgZSkpIDogKGkgPT09IGQuZGVmIHx8IGkgPT09IGsuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlcikgJiYgXCJcIiAhPT0gZC5kZWYgJiYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBuLmdldFBsYWNlaG9sZGVyLmNhbGwoZywgdCwgZCwgITApIHx8IGQuZGVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSB2b2lkIDAgIT09IHMuYyA/IHMuYyA6IGksIGggPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcCA9IHAgPT09IGsuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciAmJiAhMCA9PT0gZC5zdGF0aWMgPyBuLmdldFBsYWNlaG9sZGVyLmNhbGwoZywgdCwgZCwgITApIHx8IGQuZGVmIDogcCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEwICE9PSAocyA9IFAocykpICYmIHZvaWQgMCAhPT0gcy5wb3MgJiYgcy5wb3MgIT09IHQgJiYgKGggPSBzLnBvcyksICEwICE9PSBzICYmIHZvaWQgMCA9PT0gcy5wb3MgJiYgdm9pZCAwID09PSBzLmMgPyAhMSA6ICghMSA9PT0gdi5jYWxsKGcsIGUsIHkuZXh0ZW5kKHt9LCBjLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogbC5jYWxsKGcsIHAsIGQsIGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBhLCBoKSAmJiAocyA9ICExKSwgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSksIHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBlLmJlZ2luICYmICh4ID0gZy5pc1JUTCA/IGUuZW5kIDogZS5iZWdpbik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBTID0gITAsIE0gPSB5LmV4dGVuZCghMCwge30sIGIudmFsaWRQb3NpdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IGsua2VlcFN0YXRpYyAmJiB2b2lkIDAgIT09IGIuZXhjbHVkZXNbeF0gJiYgITAgIT09IG8gJiYgITAgIT09IGEpIGZvciAodmFyIF8gPSB4OyBfIDwgKGcuaXNSVEwgPyBlLmJlZ2luIDogZS5lbmQpOyBfKyspIHZvaWQgMCAhPT0gYi5leGNsdWRlc1tfXSAmJiAoYi5leGNsdWRlc1tfXSA9IHZvaWQgMCwgXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBiLnRlc3RzW19dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygay5wcmVWYWxpZGF0aW9uICYmICEwICE9PSBhICYmICEwICE9PSBkICYmIChTID0gUChTID0gay5wcmVWYWxpZGF0aW9uLmNhbGwoZywgci5nZXRCdWZmZXIuY2FsbChnKSwgeCwgdCwgdS5jYWxsKGcsIGUpLCBrLCBiLCBlLCBpIHx8IG8pKSksIFxuICAgICAgICAgICAgICAgICAgICAhMCA9PT0gUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFMgPSB3KHgsIHQsIGkpLCAoIWkgfHwgITAgPT09IGEpICYmICExID09PSBTICYmICEwICE9PSBkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIE8gPSBiLnZhbGlkUG9zaXRpb25zW3hdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTyB8fCAhMCAhPT0gTy5tYXRjaC5zdGF0aWMgfHwgTy5tYXRjaC5kZWYgIT09IHQgJiYgdCAhPT0gay5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrLmluc2VydE1vZGUgfHwgdm9pZCAwID09PSBiLnZhbGlkUG9zaXRpb25zW3Iuc2Vla05leHQuY2FsbChnLCB4KV0gfHwgZS5lbmQgPiB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgRSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIuaml0T2Zmc2V0W3hdICYmIHZvaWQgMCA9PT0gYi52YWxpZFBvc2l0aW9uc1tyLnNlZWtOZXh0LmNhbGwoZywgeCldICYmICExICE9PSAoUyA9IGYuY2FsbChnLCB4ICsgYi5qaXRPZmZzZXRbeF0sIHQsICEwLCAhMCkpICYmICghMCAhPT0gbyAmJiAoUy5jYXJldCA9IHgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUgPSAhMCksIGUuZW5kID4geCAmJiAoYi52YWxpZFBvc2l0aW9uc1t4XSA9IHZvaWQgMCksICFFICYmICFyLmlzTWFzay5jYWxsKGcsIHgsIGsua2VlcFN0YXRpYyAmJiAwID09PSB4KSkgZm9yICh2YXIgVCA9IHggKyAxLCBqID0gci5zZWVrTmV4dC5jYWxsKGcsIHgsICExLCAwICE9PSB4KTsgVCA8PSBqOyBUKyspIGlmICghMSAhPT0gKFMgPSB3KFQsIHQsIGkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFMgPSBoLmNhbGwoZywgeCwgdm9pZCAwICE9PSBTLnBvcyA/IFMucG9zIDogVCkgfHwgUywgeCA9IFQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgUyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IHIuc2Vla05leHQuY2FsbChnLCB4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBnLmhhc0FsdGVybmF0b3IgJiYgITAgIT09IG8gJiYgIWkgJiYgKCExID09PSBTICYmIGsua2VlcFN0YXRpYyAmJiAoYy5jYWxsKGcsIHIuZ2V0QnVmZmVyLmNhbGwoZykpIHx8IDAgPT09IHgpID8gUyA9IHMuY2FsbChnLCB4LCB0LCBpLCBhLCB2b2lkIDAsIGUpIDogKHUuY2FsbChnLCBlKSAmJiBiLnRlc3RzW3hdICYmIGIudGVzdHNbeF0ubGVuZ3RoID4gMSAmJiBrLmtlZXBTdGF0aWMgfHwgMSA9PSBTICYmICEwICE9PSBrLm51bWVyaWNJbnB1dCAmJiBiLnRlc3RzW3hdICYmIGIudGVzdHNbeF0ubGVuZ3RoID4gMSAmJiByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoZywgdm9pZCAwLCAhMCkgPiB4KSAmJiAoUyA9IHMuY2FsbChnLCAhMCkpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAhMCA9PT0gUyAmJiAoUyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHhcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGsucG9zdFZhbGlkYXRpb24gJiYgITAgIT09IGEgJiYgITAgIT09IGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0gay5wb3N0VmFsaWRhdGlvbi5jYWxsKGcsIHIuZ2V0QnVmZmVyLmNhbGwoZywgITApLCB2b2lkIDAgIT09IGUuYmVnaW4gPyBnLmlzUlRMID8gZS5lbmQgOiBlLmJlZ2luIDogZSwgdCwgUywgaywgYiwgaSwgbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IEEgJiYgKFMgPSAhMCA9PT0gQSA/IFMgOiBBKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBTICYmIHZvaWQgMCA9PT0gUy5wb3MgJiYgKFMucG9zID0geCksICExID09PSBTIHx8ICEwID09PSBkID8gKHIucmVzZXRNYXNrU2V0LmNhbGwoZywgITApLCBcbiAgICAgICAgICAgICAgICAgICAgYi52YWxpZFBvc2l0aW9ucyA9IHkuZXh0ZW5kKCEwLCBbXSwgTSkpIDogaC5jYWxsKGcsIHZvaWQgMCwgeCwgITApO1xuICAgICAgICAgICAgICAgICAgICB2YXIgRCA9IFAoUyk7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gZy5tYXhMZW5ndGggJiYgKHIuZ2V0QnVmZmVyLmNhbGwoZykubGVuZ3RoID4gZy5tYXhMZW5ndGggJiYgIWEgJiYgKHIucmVzZXRNYXNrU2V0LmNhbGwoZywgITApLCBcbiAgICAgICAgICAgICAgICAgICAgYi52YWxpZFBvc2l0aW9ucyA9IHkuZXh0ZW5kKCEwLCBbXSwgTSksIEQgPSAhMSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZChlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSB0aGlzLm1hc2tzZXQsIHIgPSAhMSwgbyA9IG4uZ2V0VGVzdHMuY2FsbCh0aGlzLCBlKSwgcyA9IDA7IHMgPCBvLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob1tzXS5tYXRjaCAmJiAob1tzXS5tYXRjaC5uYXRpdmVEZWYgPT09IHQubWF0Y2hbaS5zaGlmdFBvc2l0aW9ucyA/IFwiZGVmXCIgOiBcIm5hdGl2ZURlZlwiXSAmJiAoIWkuc2hpZnRQb3NpdGlvbnMgfHwgIXQubWF0Y2guc3RhdGljKSB8fCBvW3NdLm1hdGNoLm5hdGl2ZURlZiA9PT0gdC5tYXRjaC5uYXRpdmVEZWYgfHwgaS5yZWdleCAmJiAhb1tzXS5tYXRjaC5zdGF0aWMgJiYgb1tzXS5tYXRjaC5mbi50ZXN0KHQuaW5wdXQsIGEsIGUsICExLCBpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob1tzXS5tYXRjaCAmJiBvW3NdLm1hdGNoLmRlZiA9PT0gdC5tYXRjaC5uYXRpdmVEZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMSA9PT0gciAmJiB2b2lkIDAgIT09IGEuaml0T2Zmc2V0W2VdICYmIChyID0gZC5jYWxsKHRoaXMsIGUgKyBhLmppdE9mZnNldFtlXSwgdCwgaSkpLCBcbiAgICAgICAgICAgICAgICAgICAgcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcChlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuLCBhLCBzID0gdGhpcywgbCA9IHRoaXMubWFza3NldCwgYyA9IHRoaXMub3B0cywgdSA9IHRoaXMuZGVwZW5kZW5jeUxpYiwgZiA9IGMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciwgZCA9IHMuaXNSVEwgPyBpLnNsaWNlKCkucmV2ZXJzZSgpIDogaTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciA9IFwiXCIsICEwID09PSBlKSByLnJlc2V0TWFza1NldC5jYWxsKHMpLCBsLnRlc3RzID0ge30sIFxuICAgICAgICAgICAgICAgICAgICBlID0gMCwgdCA9IGkubGVuZ3RoLCBhID0gci5kZXRlcm1pbmVOZXdDYXJldFBvc2l0aW9uLmNhbGwocywge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IDBcbiAgICAgICAgICAgICAgICAgICAgfSwgITEpLmJlZ2luOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobiA9IGU7IG4gPCB0OyBuKyspIGRlbGV0ZSBsLnZhbGlkUG9zaXRpb25zW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBuZXcgdS5FdmVudChcImtleXByZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG4gPSBlOyBuIDwgdDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLmtleSA9IGRbbl0udG9TdHJpbmcoKSwgcy5pZ25vcmFibGUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gby5FdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChzLCBwLCAhMCwgITEsICExLCBhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICExICE9PSBoICYmIHZvaWQgMCAhPT0gaCAmJiAoYSA9IGguZm9yd2FyZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgPSBmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLCBvID0gdGhpcy5tYXNrc2V0LCBzID0gdGhpcy5kZXBlbmRlbmN5TGliO1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBlKSBmb3IgKGUgPSB0IC0gMTsgZSA+IDAgJiYgIW8udmFsaWRQb3NpdGlvbnNbZV07IGUtLSkgO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBsID0gZTsgbCA8IHQ7IGwrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gby52YWxpZFBvc2l0aW9uc1tsXSAmJiAhci5pc01hc2suY2FsbChhLCBsLCAhMSkpIGlmICgwID09IGwgPyBuLmdldFRlc3QuY2FsbChhLCBsKSA6IG8udmFsaWRQb3NpdGlvbnNbbCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBuLmdldFRlc3RzLmNhbGwoYSwgbCkuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiID09PSBjW2MubGVuZ3RoIC0gMV0ubWF0Y2guZGVmICYmIGMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUsIGQgPSBuLmRldGVybWluZVRlc3RUZW1wbGF0ZS5jYWxsKGEsIGwsIGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkICYmICghMCAhPT0gZC5tYXRjaC5qaXQgfHwgXCJtYXN0ZXJcIiA9PT0gZC5tYXRjaC5uZXdCbG9ja01hcmtlciAmJiAodSA9IG8udmFsaWRQb3NpdGlvbnNbbCArIDFdKSAmJiAhMCA9PT0gdS5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIpICYmICgoZCA9IHMuZXh0ZW5kKHt9LCBkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBuLmdldFBsYWNlaG9sZGVyLmNhbGwoYSwgbCwgZC5tYXRjaCwgITApIHx8IGQubWF0Y2guZGVmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLmdlbmVyYXRlZElucHV0ID0gITAsIHYuY2FsbChhLCBsLCBkLCAhMCksICEwICE9PSBpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IG8udmFsaWRQb3NpdGlvbnNbdF0uaW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnZhbGlkUG9zaXRpb25zW3RdID0gdm9pZCAwLCBmLmNhbGwoYSwgdCwgcCwgITAsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdihlLCB0LCBpLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gdGhpcywgcyA9IHRoaXMubWFza3NldCwgbCA9IHRoaXMub3B0cywgYyA9IHRoaXMuZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdShlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRbZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBuICYmICEwID09PSBuLm1hdGNoLnN0YXRpYyAmJiAhMCAhPT0gbi5tYXRjaC5vcHRpb25hbGl0eSAmJiAodm9pZCAwID09PSB0WzBdIHx8IHZvaWQgMCA9PT0gdFswXS5hbHRlcm5hdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGkuYmVnaW4gPD0gZSAtIDEgPyB0W2UgLSAxXSAmJiAhMCA9PT0gdFtlIC0gMV0ubWF0Y2guc3RhdGljICYmIHRbZSAtIDFdIDogdFtlIC0gMV0sIHIgPSBpLmVuZCA+IGUgKyAxID8gdFtlICsgMV0gJiYgITAgPT09IHRbZSArIDFdLm1hdGNoLnN0YXRpYyAmJiB0W2UgKyAxXSA6IHRbZSArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhICYmIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSAwLCBoID0gdm9pZCAwICE9PSBlLmJlZ2luID8gZS5iZWdpbiA6IGUsIHYgPSB2b2lkIDAgIT09IGUuZW5kID8gZS5lbmQgOiBlLCBtID0gITA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmJlZ2luID4gZS5lbmQgJiYgKGggPSBlLmVuZCwgdiA9IGUuYmVnaW4pLCBhID0gdm9pZCAwICE9PSBhID8gYSA6IGgsIHZvaWQgMCA9PT0gaSAmJiAoaCAhPT0gdiB8fCBsLmluc2VydE1vZGUgJiYgdm9pZCAwICE9PSBzLnZhbGlkUG9zaXRpb25zW2FdIHx8IHZvaWQgMCA9PT0gdCB8fCB0Lm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciB8fCB0Lm1hdGNoLm9wdGlvbmFsaXR5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGcsIHkgPSBjLmV4dGVuZCghMCwge30sIHMudmFsaWRQb3NpdGlvbnMpLCBrID0gci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKG8sIHZvaWQgMCwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChzLnAgPSBoLCBnID0gazsgZyA+PSBoOyBnLS0pIGRlbGV0ZSBzLnZhbGlkUG9zaXRpb25zW2ddLCB2b2lkIDAgPT09IHQgJiYgZGVsZXRlIHMudGVzdHNbZyArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGIsIHgsIFAgPSBhLCB3ID0gUDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodCAmJiAocy52YWxpZFBvc2l0aW9uc1thXSA9IGMuZXh0ZW5kKCEwLCB7fSwgdCksIHcrKywgUCsrKSwgZyA9IHQgPyB2IDogdiAtIDE7IGcgPD0gazsgZysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gKGIgPSB5W2ddKSAmJiAhMCAhPT0gYi5nZW5lcmF0ZWRJbnB1dCAmJiAoZyA+PSB2IHx8IGcgPj0gaCAmJiB1KGcsIHksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDtcIlwiICE9PSBuLmdldFRlc3QuY2FsbChvLCB3KS5tYXRjaC5kZWY7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSAoeCA9IGQuY2FsbChvLCB3LCBiLCBsKSkgfHwgXCIrXCIgPT09IGIubWF0Y2guZGVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIrXCIgPT09IGIubWF0Y2guZGVmICYmIHIuZ2V0QnVmZmVyLmNhbGwobywgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBTID0gZi5jYWxsKG8sIHcsIGIuaW5wdXQsIFwiK1wiICE9PSBiLm1hdGNoLmRlZiwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtID0gITEgIT09IFMsIFAgPSAoUy5wb3MgfHwgdykgKyAxLCAhbSAmJiB4KSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBtID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gdCAmJiBiLm1hdGNoLnN0YXRpYyAmJiBnID09PSBlLmJlZ2luICYmIHArKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbSAmJiByLmdldEJ1ZmZlci5jYWxsKG8pLCB3ID4gcy5tYXNrTGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHcrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiID09IG4uZ2V0VGVzdC5jYWxsKG8sIHcpLm1hdGNoLmRlZiAmJiAobSA9ICExKSwgdyA9IFA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW0pIHJldHVybiBzLnZhbGlkUG9zaXRpb25zID0gYy5leHRlbmQoITAsIFtdLCB5KSwgci5yZXNldE1hc2tTZXQuY2FsbChvLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB0ICYmIG4uZ2V0VGVzdC5jYWxsKG8sIGEpLm1hdGNoLmNkID09PSB0Lm1hdGNoLmNkICYmIChzLnZhbGlkUG9zaXRpb25zW2FdID0gYy5leHRlbmQoITAsIHt9LCB0KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByLnJlc2V0TWFza1NldC5jYWxsKG8sICEwKSwgcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHQgPSB7fTtcbiAgICAgICAgZnVuY3Rpb24gaShuKSB7XG4gICAgICAgICAgICB2YXIgYSA9IHRbbl07XG4gICAgICAgICAgICBpZiAodm9pZCAwICE9PSBhKSByZXR1cm4gYS5leHBvcnRzO1xuICAgICAgICAgICAgdmFyIHIgPSB0W25dID0ge1xuICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGVbbl0ociwgci5leHBvcnRzLCBpKSwgci5leHBvcnRzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuID0ge307XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlLCB0ID0gbjtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IHZvaWQgMCwgaSg3MTQ5KSwgaSgzMTk0KSwgaSg5MzAyKSwgaSg0MDEzKSwgaSgzODUxKSwgaSgyMTkpLCBpKDIwNyksIFxuICAgICAgICAgICAgaSg1Mjk2KTtcbiAgICAgICAgICAgIHZhciBhID0gKChlID0gaSgyMzk0KSkgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBlXG4gICAgICAgICAgICB9KS5kZWZhdWx0O1xuICAgICAgICAgICAgdC5kZWZhdWx0ID0gYTtcbiAgICAgICAgfSgpLCBuO1xuICAgIH0oKTtcbn0pKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwid2luZG93LklucHV0bWFzayA9IHJlcXVpcmUoJ2lucHV0bWFzaycpOyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJJbnB1dG1hc2siLCJyZXF1aXJlIl0sInNvdXJjZVJvb3QiOiIifQ==