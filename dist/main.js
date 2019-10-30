! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("prop-types"), require("rtf.js"), require("react"), require("jquery"), require("bootstrap/dist/css/bootstrap.min.css"), require("bootstrap/js/dist/modal"), require("bootstrap/js/dist/dropdown"), require("bootstrap/js/dist/tooltip"), require("summernote/dist/summernote-bs4.css"), require("summernote/dist/summernote-bs4.min.js")) : "function" == typeof define && define.amd ? define(["prop-types", "rtf.js", "react", "jquery", "bootstrap/dist/css/bootstrap.min.css", "bootstrap/js/dist/modal", "bootstrap/js/dist/dropdown", "bootstrap/js/dist/tooltip", "summernote/dist/summernote-bs4.css", "summernote/dist/summernote-bs4.min.js"], t) : "object" == typeof exports ? exports.summernote = t(require("prop-types"), require("rtf.js"), require("react"), require("jquery"), require("bootstrap/dist/css/bootstrap.min.css"), require("bootstrap/js/dist/modal"), require("bootstrap/js/dist/dropdown"), require("bootstrap/js/dist/tooltip"), require("summernote/dist/summernote-bs4.css"), require("summernote/dist/summernote-bs4.min.js")) : e.summernote = t(e["prop-types"], e["rtf.js"], e.react, e.jquery, e["bootstrap/dist/css/bootstrap.min.css"], e["bootstrap/js/dist/modal"], e["bootstrap/js/dist/dropdown"], e["bootstrap/js/dist/tooltip"], e["summernote/dist/summernote-bs4.css"], e["summernote/dist/summernote-bs4.min.js"])
}(window, function (e, t, n, o, r, i, s, a, u, l) {
    return function (e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = e, n.c = t, n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) n.d(o, r, function (t) {
                    return e[t]
                }.bind(null, r));
            return o
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 6)
    }([function (t, n) {
        t.exports = e
    }, function (e, n) {
        e.exports = t
    }, function (e, t) {
        e.exports = n
    }, function (e, t, n) {
        e.exports = function () {
            n(8), n(9), n(10), n(11), n(12), n(13)
        }
    }, function (e, t, n) {
        "use strict";
        (function (e) {
            var o = n(2),
                r = n.n(o),
                i = n(0),
                s = n.n(i),
                a = n(5),
                u = n(3),
                l = n.n(u);

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function m(e, t) {
                return (m = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var b = function (t) {
                function n(t) {
                    var o, r, i;
                    return function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n), r = this, i = p(n).call(this, t), o = !i || "object" !== c(i) && "function" != typeof i ? f(r) : i,
                        function (e, t, n) {
                            t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        }(f(o), "handleEditorRef", function (t) {
                            if (t) {
                                var n = o.props.options || {},
                                    r = o.props,
                                    i = r.codeview,
                                    s = r.destroy,
                                    a = r.value;
                                n.callbacks = o.callbacks, o.editor = e(t), o.editor.summernote(n), a && (o.replace(a), o.setState({
                                    value: a
                                })), i && o.editor.summernote("codeview.activate"), s && o.editor.summernote("destroy")
                            }
                        }), o.counter = 0, o.editor = {}, o.noteEditable = null, o.notePlaceholder = null, o.onInit = o.onInit.bind(f(o)), o.onImageUpload = o.onImageUpload.bind(f(o)), o.focus = o.focus.bind(f(o)), o.isEmpty = o.isEmpty.bind(f(o)), o.reset = o.reset.bind(f(o)), o.replace = o.replace.bind(f(o)), o.disable = o.disable.bind(f(o)), o.enable = o.enable.bind(f(o)), o.toggleState = o.toggleState.bind(f(o)), o.insertImage = o.insertImage.bind(f(o)), o.insertNode = o.insertNode.bind(f(o)), o.insertText = o.insertText.bind(f(o)), o.handleChange = o.handleChange.bind(f(o)), o.handlePaste = o.handlePaste.bind(f(o)), n.focus = o.focus.bind(f(o)), n.isEmpty = o.isEmpty.bind(f(o)), n.reset = o.reset.bind(f(o)), n.replace = o.replace.bind(f(o)), n.disable = o.disable.bind(f(o)), n.enable = o.enable.bind(f(o)), n.toggleState = o.toggleState.bind(f(o)), n.insertImage = o.insertImage.bind(f(o)), n.insertNode = o.insertNode.bind(f(o)), n.insertText = o.insertText.bind(f(o)), o
                }
                var i, s, u;
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && m(e, t)
                }(n, o["Component"]), i = n, (s = [{
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        var t = this.props,
                            n = e.codeview,
                            o = n ? "codeview.activate" : "codeview.deactivate";
                        "string" == typeof e.value && t.value !== e.value && this.replace(e.value), "boolean" == typeof e.disabled && t.disabled !== e.disabled && this.toggleState(e.disabled), n !== t.codeview && this.editor.summernote(o), t.destroy && this.editor.summernote("destroy")
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function () {
                        return !1
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        this.editor.summernote && this.editor.summernote("destroy")
                    }
                }, {
                    key: "onInit",
                    value: function () {
                        var e = this.props,
                            t = e.disabled,
                            n = e.onInit,
                            o = this.editor.parent();
                        this.noteEditable = o.find(".note-editable"), this.notePlaceholder = o.find(".note-placeholder"), "boolean" == typeof t && this.toggleState(t), "function" == typeof n && n({
                            summernote: this.editor.summernote.bind(this.editor),
                            focus: this.focus,
                            isEmpty: this.isEmpty,
                            reset: this.reset,
                            replace: this.replace,
                            disable: this.disable,
                            enable: this.enable,
                            insertImage: this.insertImage,
                            insertNode: this.insertNode,
                            insertText: this.insertText
                        })
                    }
                }, {
                    key: "onImageUpload",
                    value: function (e) {
                        var t = this.props.onImageUpload;
                        "function" == typeof t && t(e, this.insertImage)
                    }
                }, {
                    key: "focus",
                    value: function () {
                        this.editor.summernote("focus")
                    }
                }, {
                    key: "isEmpty",
                    value: function () {
                        return this.editor.summernote("isEmpty")
                    }
                }, {
                    key: "reset",
                    value: function () {
                        this.editor.summernote("reset")
                    }
                }, {
                    key: "replace",
                    value: function (e) {
                        var t = this.noteEditable,
                            n = this.notePlaceholder,
                            o = t.html(),
                            r = e.length;
                        o !== e && (this.isEmpty() && r > 0 ? n.hide() : 0 === r && n.show(), t.html(e))
                    }
                }, {
                    key: "disable",
                    value: function () {
                        this.editor.summernote("disable")
                    }
                }, {
                    key: "enable",
                    value: function () {
                        this.editor.summernote("enable")
                    }
                }, {
                    key: "toggleState",
                    value: function (e) {
                        e ? this.disable() : this.enable()
                    }
                }, {
                    key: "insertImage",
                    value: function (e, t) {
                        this.editor.summernote("insertImage", e, t)
                    }
                }, {
                    key: "insertNode",
                    value: function (e) {
                        this.editor.summernote("insertNode", e)
                    }
                }, {
                    key: "insertText",
                    value: function (e) {
                        this.editor.summernote("insertText", e)
                    }
                }, {
                    key: "handleChange",
                    value: function (t) {
                        e('span[style*="mso-ignore"]').remove();
                        var n = this.props.onChange;
                        e('img[src*="file://"]').not(".zap-img-uploading").addClass("zap-img-uploading").addClass("zap-img-uploading-".concat(this.counter)).length && (this.counter = this.counter + 1), "function" == typeof n && n(t)
                    }
                }, {
                    key: "handlePaste",
                    value: function (t) {
                        var n = this,
                            o = this.props,
                            r = o.onPaste,
                            i = o.onImagePasteFromWord;
                        if (t.originalEvent.clipboardData.files.length) return t.preventDefault();
                        for (var s = t.originalEvent.clipboardData.items, u = 0; u < s.length; u++)
                            if (s[u].type.indexOf("rtf") > -1) {
                                s[u].getAsString(function (t) {
                                    Object(a.a)(t).render().then(function (t) {
                                        var o = [];
                                        t.forEach(function (e) {
                                            e.find('img[src*="data:image"]').each(function (e, t) {
                                                o.push(t)
                                            })
                                        }), setTimeout(function () {
                                            var t = e(".zap-img-uploading-".concat(n.counter - 1)).each(function (e, t) {
                                                o[e] && (t.src = o[e].src)
                                            });
                                            "function" == typeof i && i(t)
                                        }, 0)
                                    })
                                });
                                break
                            }
                        "function" == typeof r && r(t)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.tag,
                            n = e.children,
                            o = e.className;
                        e.name;
                        return r.a.createElement("div", {
                            className: o
                        }, r.a.createElement(t, {
                            ref: this.handleEditorRef
                        }, n))
                    }
                }, {
                    key: "callbacks",
                    get: function () {
                        var e = this.props;
                        return {
                            onInit: this.onInit,
                            onEnter: e.onEnter,
                            onFocus: e.onFocus,
                            onBlur: e.onBlur,
                            onKeyup: e.onKeyUp,
                            onKeydown: e.onKeyDown,
                            onPaste: this.handlePaste,
                            onChange: this.handleChange,
                            onImageUpload: this.onImageUpload
                        }
                    }
                }]) && d(i.prototype, s), u && d(i, u), n
            }();
            b.propTypes = {
                tag: s.a.string,
                children: s.a.node,
                codeview: s.a.bool,
                className: s.a.string,
                options: s.a.object,
                disabled: s.a.bool,
                onInit: s.a.func,
                onEnter: s.a.func,
                onFocus: s.a.func,
                onBlur: s.a.func,
                onKeyUp: s.a.func,
                onKeyDown: s.a.func,
                onPaste: s.a.func,
                onChange: s.a.func,
                onImageUpload: s.a.func,
                onImagePasteFromWord: s.a.func,
                destroy: s.a.bool
            }, b.defaultProps = {
                tag: "div"
            }, b.prototype.ImportCode = l.a, b.ImportCode = l.a, t.a = b
        }).call(this, n(7))
    }, function (e, t, n) {
        "use strict";
        var o = n(1);
        o.RTFJS.loggingEnabled(!1), o.WMFJS.loggingEnabled(!1), o.EMFJS.loggingEnabled(!1), t.a = function (e) {
            return e || (e = ""), new o.RTFJS.Document(function (e) {
                for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), o = 0; o < e.length; o++) n[o] = e.charCodeAt(o);
                return t
            }(e))
        }
    }, function (e, t, n) {
        "use strict";
        n.r(t);
        var o = n(4);
        t.default = o.a
    }, function (e, t) {
        e.exports = o
    }, function (e, t) {
        e.exports = r
    }, function (e, t) {
        e.exports = i
    }, function (e, t) {
        e.exports = s
    }, function (e, t) {
        e.exports = a
    }, function (e, t) {
        e.exports = u
    }, function (e, t) {
        e.exports = l
    }])
});
