var h, aa = "function" == typeof Object.create ? Object.create : function (a) {
        function b() {}
        b.prototype = a;
        return new b
    },
    ba;
if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
else {
    var ca;
    a: {
        var da = {
                pa: !0
            },
            ea = {};
        try {
            ea.__proto__ = da;
            ca = ea.pa;
            break a
        } catch (a) {}
        ca = !1
    }
    ba = ca ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a
    } : null
}
var fa = ba,
    ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    },
    k = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

function ia() {
    ia = function () {};
    k.Symbol || (k.Symbol = ja)
}
var ja = function () {
    var a = 0;
    return function (b) {
        return "jscomp_symbol_" + (b || "") + a++
    }
}();

function ka() {
    ia();
    var a = k.Symbol.iterator;
    a || (a = k.Symbol.iterator = k.Symbol("iterator"));
    "function" != typeof Array.prototype[a] && ha(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
            return la(this)
        }
    });
    ka = function () {}
}

function la(a) {
    var b = 0;
    return ma(function () {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    })
}

function ma(a) {
    ka();
    a = {
        next: a
    };
    a[k.Symbol.iterator] = function () {
        return this
    };
    return a
}

function na(a, b) {
    ka();
    a instanceof String && (a += "");
    var c = 0,
        d = {
            next: function () {
                if (c < a.length) {
                    var e = c++;
                    return {
                        value: b(e, a[e]),
                        done: !1
                    }
                }
                d.next = function () {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return d.next()
            }
        };
    d[Symbol.iterator] = function () {
        return d
    };
    return d
}
for (var l = k, oa = ["Array", "prototype", "entries"], pa = 0; pa < oa.length - 1; pa++) {
    var qa = oa[pa];
    qa in l || (l[qa] = {});
    l = l[qa]
}
var ra = oa[oa.length - 1],
    sa = l[ra],
    ta = function (a) {
        return a ? a : function () {
            return na(this, function (a, c) {
                return [a, c]
            })
        }
    }(sa);
ta != sa && null != ta && ha(l, ra, {
    configurable: !0,
    writable: !0,
    value: ta
});
var n = this;

function p(a) {
    return "string" == typeof a
}

function ua() {}

function va(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function q(a) {
    return "array" == va(a)
}

function wa(a) {
    var b = va(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function r(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function xa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}
var ya = Date.now || function () {
    return +new Date
};

function t(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.ia = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Wa = function (a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d)
    }
};
var za;
var Aa = String.prototype.trim ? function (a) {
    return a.trim()
} : function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};

function u(a, b) {
    if (b) a = a.replace(Ba, "&amp;").replace(Ca, "&lt;").replace(Da, "&gt;").replace(Ea, "&quot;").replace(Ga, "&#39;").replace(Ha, "&#0;");
    else {
        if (!Ia.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ba, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ca, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Da, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ea, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ga, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ha, "&#0;"))
    }
    return a
}
var Ba = /&/g,
    Ca = /</g,
    Da = />/g,
    Ea = /"/g,
    Ga = /'/g,
    Ha = /\x00/g,
    Ia = /[\x00&<>"']/;

function w(a, b) {
    var c = 0;
    a = Aa(String(a)).split(".");
    b = Aa(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
            g = b[e] || "";
        do {
            f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            if (0 == f[0].length && 0 == g[0].length) break;
            c = Ja(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ja(0 == f[2].length, 0 == g[2].length) || Ja(f[2], g[2]);
            f = f[3];
            g = g[3]
        } while (0 == c)
    }
    return c
}

function Ja(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}

function Ka(a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
        return c.toUpperCase()
    })
}

function La(a, b) {
    b = p(b) ? String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
        return b + e.toUpperCase()
    })
};
var Ma = Array.prototype.indexOf ? function (a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    Na = Array.prototype.lastIndexOf ? function (a, b, c) {
        return Array.prototype.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
    } : function (a, b, c) {
        c = null == c ? a.length - 1 : c;
        0 > c && (c = Math.max(0, a.length + c));
        if (p(a)) return p(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
        for (; 0 <=
            c; c--)
            if (c in a && a[c] === b) return c;
        return -1
    },
    Oa = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Pa = Array.prototype.some ? function (a, b, c) {
        return Array.prototype.some.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
        return !1
    };

function Qa(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
};
var x;
a: {
    var Ra = n.navigator;
    if (Ra) {
        var Sa = Ra.userAgent;
        if (Sa) {
            x = Sa;
            break a
        }
    }
    x = ""
}

function y(a) {
    return -1 != x.indexOf(a)
};

function Ta(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
}

function Ua(a, b, c) {
    for (var d in a)
        if (b.call(c, a[d], d, a)) return !0;
    return !1
}
var Va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Wa(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < Va.length; f++) c = Va[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function Xa() {
    return (y("Chrome") || y("CriOS")) && !y("Edge")
};

function z() {
    return y("iPhone") && !y("iPod") && !y("iPad")
};

function Ya(a) {
    Ya[" "](a);
    return a
}
Ya[" "] = ua;

function Za(a, b, c, d) {
    d = d ? d(b) : b;
    return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
};
var $a = y("Opera"),
    A = y("Trident") || y("MSIE"),
    ab = y("Edge"),
    B = y("Gecko") && !(-1 != x.toLowerCase().indexOf("webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
    C = -1 != x.toLowerCase().indexOf("webkit") && !y("Edge"),
    bb = y("Macintosh"),
    cb = y("Windows"),
    db = y("Android"),
    eb = z(),
    fb = y("iPad"),
    gb = y("iPod");

function hb() {
    var a = n.document;
    return a ? a.documentMode : void 0
}
var ib;
a: {
    var jb = "",
        kb = function () {
            var a = x;
            if (B) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (ab) return /Edge\/([\d\.]+)/.exec(a);
            if (A) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (C) return /WebKit\/(\S+)/.exec(a);
            if ($a) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();kb && (jb = kb ? kb[1] : "");
    if (A) {
        var lb = hb();
        if (null != lb && lb > parseFloat(jb)) {
            ib = String(lb);
            break a
        }
    }
    ib = jb
}
var mb = ib,
    nb = {};

function ob(a) {
    return Za(nb, a, function () {
        return 0 <= w(mb, a)
    })
}
var D;
var pb = n.document;
D = pb && A ? hb() || ("CSS1Compat" == pb.compatMode ? parseInt(mb, 10) : 5) : void 0;
var qb = !A || 9 <= Number(D);

function E() {
    this.a = rb
}
E.prototype.O = !0;
var rb = {};
E.prototype.I = function () {
    return ""
};

function F() {
    this.a = sb
}
F.prototype.O = !0;
var sb = {};
F.prototype.I = function () {
    return ""
};

function G() {
    this.a = tb
}
G.prototype.O = !0;
G.prototype.I = function () {
    return ""
};
var tb = {};

function H(a, b) {
    this.a = void 0 !== a ? a : 0;
    this.b = void 0 !== b ? b : 0
}
H.prototype.f = function () {
    return new H(this.a, this.b)
};
H.prototype.ceil = function () {
    this.a = Math.ceil(this.a);
    this.b = Math.ceil(this.b);
    return this
};
H.prototype.floor = function () {
    this.a = Math.floor(this.a);
    this.b = Math.floor(this.b);
    return this
};
H.prototype.round = function () {
    this.a = Math.round(this.a);
    this.b = Math.round(this.b);
    return this
};

function I(a, b) {
    this.width = a;
    this.height = b
}

function ub(a, b) {
    return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
}
I.prototype.a = function () {
    return new I(this.width, this.height)
};
I.prototype.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
I.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
I.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};

function vb(a) {
    return a ? new wb(xb(a)) : za || (za = new wb)
}

function yb(a, b) {
    Ta(b, function (b, d) {
        b && b.O && (b = b.I());
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : zb.hasOwnProperty(d) ? a.setAttribute(zb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var zb = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function Ab() {
    var a = arguments,
        b = String(a[0]),
        c = a[1];
    if (!qb && c && (c.name || c.type)) {
        b = ["<", b];
        c.name && b.push(' name="', u(c.name), '"');
        if (c.type) {
            b.push(' type="', u(c.type), '"');
            var d = {};
            Wa(d, c);
            delete d.type;
            c = d
        }
        b.push(">");
        b = b.join("")
    }
    b = document.createElement(b);
    c && (p(c) ? b.className = c : q(c) ? b.className = c.join(" ") : yb(b, c));
    2 < a.length && Bb(document, b, a, 2);
    return b
}

function Bb(a, b, c, d) {
    function e(c) {
        c && b.appendChild(p(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
        var f = c[d];
        if (!wa(f) || r(f) && 0 < f.nodeType) e(f);
        else {
            a: {
                if (f && "number" == typeof f.length) {
                    if (r(f)) {
                        var g = "function" == typeof f.item || "string" == typeof f.item;
                        break a
                    }
                    if ("function" == va(f)) {
                        g = "function" == typeof f.item;
                        break a
                    }
                }
                g = !1
            }
            Oa(g ? Qa(f) : f, e)
        }
    }
}

function Cb(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}

function xb(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function wb(a) {
    this.a = a || n.document || document
}
wb.prototype.b = function (a) {
    return this.a.createElement(String(a))
};
wb.prototype.f = function () {
    return "CSS1Compat" == this.a.compatMode
};
var Db = y("Firefox"),
    Eb = z() || y("iPod"),
    Fb = y("iPad"),
    Gb = y("Android") && !(Xa() || y("Firefox") || y("Opera") || y("Silk")),
    Hb = Xa(),
    Ib = y("Safari") && !(Xa() || y("Coast") || y("Opera") || y("Edge") || y("Silk") || y("Android")) && !(z() || y("iPad") || y("iPod"));

function J(a) {
    return (a = a.exec(x)) ? a[1] : ""
}
var Jb = function () {
    if (Db) return J(/Firefox\/([0-9.]+)/);
    if (A || ab || $a) return mb;
    if (Hb) return z() || y("iPad") || y("iPod") ? J(/CriOS\/([0-9.]+)/) : J(/Chrome\/([0-9.]+)/);
    if (Ib && !(z() || y("iPad") || y("iPod"))) return J(/Version\/([0-9.]+)/);
    if (Eb || Fb) {
        var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(x);
        if (a) return a[1] + "." + a[2]
    } else if (Gb) return (a = J(/Android\s+([0-9.]+)/)) ? a : J(/Version\/([0-9.]+)/);
    return ""
}();

function Kb() {
    this.o = 0;
    this.a = !0
}
var Lb = Db || Hb && 0 <= w(Jb, 31) || A && 0 <= w(Jb, 11),
    K = [.25, .33296337402885684, .5, .6659, .75, .9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5];
h = Kb.prototype;
h.clear = function () {
    this.o = 0
};
h.m = function () {
    0 == this.o && (this.o = this.ra());
    return this.o
};
h.V = function () {
    return this.a
};
h.ra = function () {
    var a = window.devicePixelRatio || 1;
    if (Lb) return a;
    var b = 1;
    C ? b = this.ua() : A && (b = Math.round(screen.deviceXDPI / screen.logicalXDPI * 100) / 100);
    return b * a
};
h.ua = function () {
    var a = window,
        b = a.outerWidth;
    this.a = 250 <= b;
    if (!this.a) {
        if (void 0 == document.width) return 1;
        var c = Ab("DIV", {
            "min-width": "100%"
        });
        b = document;
        b.body.appendChild(c);
        a = b.width / c.clientWidth;
        b.body.removeChild(c);
        return a
    }
    b = a = b / a.innerWidth;
    for (var d = 0, e = K.length; d < e;) {
        var f = d + e >> 1;
        var g = K[f];
        g = b > g ? 1 : b < g ? -1 : 0;
        0 < g ? d = f + 1 : (e = f, c = !g)
    }
    c = c ? d : ~d;
    0 > c && (c = -c - 1, 0 < c && a - K[c - 1] < K[c] - a && --c);
    return K[c] || K[K.length - 1]
};
h.ya = function (a) {
    return Math.round(a * this.m())
};
h.za = function (a) {
    return Math.max(1, Math.floor(a * this.m()))
};
h.La = function (a) {
    var b = this.m();
    return Math.round(a * b) / b
};
var Mb = 1;

function Nb() {
    this.W = this.W;
    this.la = this.la
}
Nb.prototype.W = !1;

function L(a, b) {
    this.type = a;
    this.a = this.target = b;
    this.fa = !0
}
L.prototype.b = function () {
    this.fa = !1
};
var Ob = !A || 9 <= Number(D),
    Pb = A && !ob("9"),
    Qb = function () {
        if (!n.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function () {
                    a = !0
                }
            });
        n.addEventListener("test", ua, b);
        n.removeEventListener("test", ua, b);
        return a
    }();

function M(a, b) {
    L.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.f = null;
    a && this.s(a, b)
}
t(M, L);
M.prototype.s = function (a, b) {
    var c = this.type = a.type,
        d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.a = b;
    if (b = a.relatedTarget) {
        if (B) {
            a: {
                try {
                    Ya(b.nodeName);
                    var e = !0;
                    break a
                } catch (f) {}
                e = !1
            }
            e || (b = null)
        }
    } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !==
        d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.f = a;
    a.defaultPrevented && this.b()
};
M.prototype.b = function () {
    M.ia.b.call(this);
    var a = this.f;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Pb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var Rb = "closure_listenable_" + (1E6 * Math.random() | 0);

function Sb(a) {
    return !(!a || !a[Rb])
}
var Tb = 0;

function Ub(a, b, c, d, e, f) {
    this.listener = a;
    this.a = b;
    this.src = c;
    this.type = d;
    this.capture = !!e;
    this.G = f;
    this.key = ++Tb;
    this.v = this.C = !1
}
Ub.prototype.b = function () {
    this.v = !0;
    this.G = this.src = this.a = this.listener = null
};

function Vb(a) {
    this.src = a;
    this.a = {};
    this.b = 0
}
h = Vb.prototype;
h.K = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var g = Wb(a, b, d, e); - 1 < g ? (b = a[g], c || (b.C = !1)) : (b = new Ub(b, null, this.src, f, !!d, e), b.C = c, a.push(b));
    return b
};
h.Ba = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.a)) return !1;
    var e = this.a[a];
    b = Wb(e, b, c, d);
    return -1 < b ? (e[b].b(), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
};
h.ea = function (a) {
    var b = a.type;
    if (!(b in this.a)) return !1;
    var c = this.a[b],
        d = Ma(c, a),
        e;
    (e = 0 <= d) && Array.prototype.splice.call(c, d, 1);
    e && (a.b(), 0 == this.a[b].length && (delete this.a[b], this.b--));
    return e
};
h.A = function (a, b, c, d) {
    a = this.a[a.toString()];
    var e = -1;
    a && (e = Wb(a, b, c, d));
    return -1 < e ? a[e] : null
};
h.hasListener = function (a, b) {
    var c = void 0 !== a,
        d = c ? a.toString() : "",
        e = void 0 !== b;
    return Ua(this.a, function (a) {
        for (var f = 0; f < a.length; ++f)
            if (!(c && a[f].type != d || e && a[f].capture != b)) return !0;
        return !1
    })
};

function Wb(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.v && f.listener == b && f.capture == !!c && f.G == d) return e
    }
    return -1
};
var Xb = "closure_lm_" + (1E6 * Math.random() | 0),
    Yb = {},
    Zb = 0;

function $b(a, b, c, d, e) {
    if (d && d.once) return ac(a, b, c, d, e);
    if (q(b)) {
        for (var f = 0; f < b.length; f++) $b(a, b[f], c, d, e);
        return null
    }
    c = bc(c);
    return Sb(a) ? a.u(b, c, r(d) ? !!d.capture : !!d, e) : cc(a, b, c, !1, d, e)
}

function cc(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = r(e) ? !!e.capture : !!e,
        m = dc(a);
    m || (a[Xb] = m = new Vb(a));
    c = m.K(b, c, d, g, f);
    if (c.a) return c;
    d = ec();
    c.a = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) Qb || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(fc(b.toString()), d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    Zb++;
    return c
}

function ec() {
    var a = gc,
        b = Ob ? function (c) {
            return a.call(b.src, b.listener, c)
        } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
    return b
}

function ac(a, b, c, d, e) {
    if (q(b)) {
        for (var f = 0; f < b.length; f++) ac(a, b[f], c, d, e);
        return null
    }
    c = bc(c);
    return Sb(a) ? a.Z(b, c, r(d) ? !!d.capture : !!d, e) : cc(a, b, c, !0, d, e)
}

function hc(a, b, c, d, e) {
    if (q(b)) {
        for (var f = 0; f < b.length; f++) hc(a, b[f], c, d, e);
        return null
    }
    d = r(d) ? !!d.capture : !!d;
    c = bc(c);
    if (Sb(a)) return a.S(b, c, d, e);
    if (!a) return !1;
    if (a = dc(a))
        if (b = a.A(b, c, d, e)) return ic(b);
    return !1
}

function ic(a) {
    if ("number" == typeof a || !a || a.v) return !1;
    var b = a.src;
    if (Sb(b)) return b.ka(a);
    var c = a.type,
        d = a.a;
    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(fc(c), d);
    Zb--;
    (c = dc(b)) ? (c.ea(a), 0 == c.b && (c.src = null, b[Xb] = null)) : a.b();
    return !0
}

function fc(a) {
    return a in Yb ? Yb[a] : Yb[a] = "on" + a
}

function jc(a, b, c, d) {
    var e = !0;
    if (a = dc(a))
        if (b = a.a[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.capture == c && !f.v && (f = kc(f, d), e = e && !1 !== f)
            }
    return e
}

function kc(a, b) {
    var c = a.listener,
        d = a.G || a.src;
    a.C && ic(a);
    return c.call(d, b)
}

function gc(a, b) {
    if (a.v) return !0;
    if (!Ob) {
        if (!b) a: {
            b = ["window", "event"];
            for (var c = n, d; d = b.shift();)
                if (null != c[d]) c = c[d];
                else {
                    b = null;
                    break a
                }
            b = c
        }
        d = b;
        b = new M(d, this);
        c = !0;
        if (!(0 > d.keyCode || void 0 != d.returnValue)) {
            a: {
                var e = !1;
                if (0 == d.keyCode) try {
                    d.keyCode = -1;
                    break a
                } catch (g) {
                    e = !0
                }
                if (e || void 0 == d.returnValue) d.returnValue = !0
            }
            d = [];
            for (e = b.a; e; e = e.parentNode) d.push(e);e = a.type;
            for (var f = d.length - 1; 0 <= f; f--) b.a = d[f],
            a = jc(d[f], e, !0, b),
            c = c && a;
            for (f = 0; f < d.length; f++) b.a = d[f],
            a = jc(d[f], e, !1, b),
            c = c && a
        }
        return c
    }
    return kc(a,
        new M(b, this))
}

function dc(a) {
    a = a[Xb];
    return a instanceof Vb ? a : null
}
var lc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function bc(a) {
    if ("function" == va(a)) return a;
    a[lc] || (a[lc] = function (b) {
        return a.handleEvent(b)
    });
    return a[lc]
};

function N() {
    Nb.call(this);
    this.l = new Vb(this);
    this.qa = this;
    this.da = null
}
t(N, Nb);
N.prototype[Rb] = !0;
h = N.prototype;
h.addEventListener = function (a, b, c, d) {
    $b(this, a, b, c, d)
};
h.removeEventListener = function (a, b, c, d) {
    hc(this, a, b, c, d)
};
h.dispatchEvent = function (a) {
    var b = this.da;
    if (b) {
        var c = [];
        for (var d = 1; b; b = b.da) c.push(b), ++d
    }
    b = this.qa;
    d = a.type || a;
    if (p(a)) a = new L(a, b);
    else if (a instanceof L) a.target = a.target || b;
    else {
        var e = a;
        a = new L(d, b);
        Wa(a, e)
    }
    e = !0;
    if (c)
        for (var f = c.length - 1; 0 <= f; f--) {
            var g = a.a = c[f];
            e = g.D(d, !0, a) && e
        }
    g = a.a = b;
    e = g.D(d, !0, a) && e;
    e = g.D(d, !1, a) && e;
    if (c)
        for (f = 0; f < c.length; f++) g = a.a = c[f], e = g.D(d, !1, a) && e;
    return e
};
h.u = function (a, b, c, d) {
    return this.l.K(String(a), b, !1, c, d)
};
h.Z = function (a, b, c, d) {
    return this.l.K(String(a), b, !0, c, d)
};
h.S = function (a, b, c, d) {
    return this.l.Ba(String(a), b, c, d)
};
h.ka = function (a) {
    return this.l.ea(a)
};
h.D = function (a, b, c) {
    a = this.l.a[String(a)];
    if (!a) return !0;
    a = a.concat();
    for (var d = !0, e = 0; e < a.length; ++e) {
        var f = a[e];
        if (f && !f.v && f.capture == b) {
            var g = f.listener,
                m = f.G || f.src;
            f.C && this.ka(f);
            d = !1 !== g.call(m, c) && d
        }
    }
    return d && 0 != c.fa
};
h.A = function (a, b, c, d) {
    return this.l.A(String(a), b, c, d)
};
h.hasListener = function (a, b) {
    return this.l.hasListener(void 0 !== a ? String(a) : void 0, b)
};

function mc() {
    N.call(this)
}
t(mc, N);
mc.prototype.a = function () {
    this.dispatchEvent("zoom")
};
var O = {};
O.o = new Kb;
O.Ua = new mc;
O.H = function () {
    return O.o
};
O.va = function () {
    return O.Ua
};
O.clear = function () {
    O.H().clear()
};
O.J = function () {
    return O.m() * O.F()
};
O.Xa = function (a) {
    a != O.F() && (Mb = a, O.va().a())
};
O.F = function () {
    return Mb
};
O.getApplicationZoomLevel = O.F;
O.m = function () {
    return O.H().m()
};
O.getDevicePixelRatio = O.m;
O.V = function () {
    return O.H().V()
};
O.ya = function (a) {
    var b = O.J();
    return Math.round(a * b)
};
O.za = function (a) {
    var b = O.J();
    return Math.max(1, Math.floor(a * b))
};
O.La = function (a) {
    var b = O.J();
    var c = a;
    a = 1;
    0 == c ? b = 0 : (0 > c && (a = -1, c = Math.abs(c)), c = Math.round(c * b), b = 1 > c ? 1 / b * a : c / b * a);
    return b
};

function P(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
P.prototype.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
P.prototype.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
P.prototype.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};

function Q() {}
Q.prototype.a = function () {};

function nc(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
h = nc.prototype;
h.wa = function () {
    return new I(this.width, this.height)
};
h.xa = function () {
    return new H(this.left, this.top)
};
h.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
h.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
h.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};

function oc(a, b, c) {
    var d = pc[c];
    if (!d) {
        var e = Ka(c);
        d = e;
        void 0 === a.style[e] && (e = (C ? "Webkit" : B ? "Moz" : A ? "ms" : $a ? "O" : null) + La(e), void 0 !== a.style[e] && (d = e));
        pc[c] = d
    }(c = d) && (a.style[c] = b)
}
var pc = {};

function R(a, b) {
    var c = xb(a);
    return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
}

function qc(a, b) {
    return R(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function rc(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}

function sc(a, b) {
    if ("none" != qc(b, "display")) return a(b);
    var c = b.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = a(b);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}

function tc(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        d = C && !b && !c;
    if ((void 0 === b || d) && a.getBoundingClientRect) {
        a: {
            try {
                var e = a.getBoundingClientRect()
            } catch (f) {
                e = {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                };
                break a
            }
            A && a.ownerDocument.body && (a = a.ownerDocument, e.left -= a.documentElement.clientLeft + a.body.clientLeft, e.top -= a.documentElement.clientTop + a.body.clientTop)
        }
        return new I(e.right - e.left, e.bottom - e.top)
    }
    return new I(b, c)
}

function uc(a, b) {
    a.style.display = b ? "" : "none"
}

function vc(a, b, c, d) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var e = a.style[c],
        f = a.runtimeStyle[c];
    a.runtimeStyle[c] = a.currentStyle[c];
    a.style[c] = b;
    b = a.style[d];
    a.style[c] = e;
    a.runtimeStyle[c] = f;
    return +b
}

function wc(a, b) {
    return (b = a.currentStyle ? a.currentStyle[b] : null) ? vc(a, b, "left", "pixelLeft") : 0
}
var xc = {
    thin: 2,
    medium: 4,
    thick: 6
};

function yc(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return b in xc ? xc[b] : vc(a, b, "left", "pixelLeft")
};
(function () {
    if (cb) {
        var a = /Windows NT ([0-9.]+)/;
        return (a = a.exec(x)) ? a[1] : "0"
    }
    return bb ? (a = /10[_.][0-9_.]+/, (a = a.exec(x)) ? a[0].replace(/_/g, ".") : "10") : db ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(x)) ? a[1] : "") : eb || fb || gb ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(x)) ? a[1].replace(/_/g, ".") : "") : ""
})();

function zc(a) {
    var b = !1,
        c;
    return function () {
        b || (c = a(), b = !0);
        return c
    }
};
var Ac = {},
    Bc = {},
    Cc = {};

function T() {
    throw Error("Do not instantiate directly");
}
T.prototype.h = null;
T.prototype.toString = function () {
    return this.i
};

function Dc() {
    T.call(this)
}
t(Dc, T);
Dc.prototype.g = Ac;

function Ec() {
    T.call(this)
}
t(Ec, T);
Ec.prototype.g = {};
Ec.prototype.h = 1;

function Fc() {
    T.call(this)
}
t(Fc, T);
Fc.prototype.g = {};
Fc.prototype.h = 1;

function Gc() {
    T.call(this)
}
t(Gc, T);
Gc.prototype.g = {};
Gc.prototype.h = 1;

function Hc() {
    T.call(this)
}
t(Hc, T);
Hc.prototype.g = {};
Hc.prototype.h = 1;

function Ic() {
    T.call(this)
}
t(Ic, T);
Ic.prototype.g = Bc;
Ic.prototype.h = 1;

function Jc(a, b, c, d) {
    a = a(b || Kc, void 0, c);
    d = (d || vb()).b("DIV");
    a = Lc(a);
    d.innerHTML = a;
    1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType && (d = a));
    return d
}

function Lc(a) {
    if (!r(a)) return String(a);
    if (a instanceof T) {
        if (a.g === Ac) return a.i;
        if (a.g === Cc) return u(a.i)
    }
    return "zSoyz"
}
var Kc = {};
var Mc = zc(function () {
        return !A || 0 <= w(Jb, 9)
    }),
    Nc = zc(function () {
        return C || ab || B && 0 <= w(Jb, 10) || A && 0 <= w(Jb, 10)
    }),
    Oc = zc(function () {
        return A && 9 == D ? "-ms-transform" : "transform"
    });

function Pc(a) {
    Nb.call(this);
    this.b = a;
    this.a = {}
}
t(Pc, Nb);
var Qc = [];
h = Pc.prototype;
h.u = function (a, b, c, d) {
    return this.Ea(a, b, c, d)
};
h.Ea = function (a, b, c, d, e) {
    q(b) || (b && (Qc[0] = b.toString()), b = Qc);
    for (var f = 0; f < b.length; f++) {
        var g = $b(a, b[f], c || this.handleEvent, d || !1, e || this.b || this);
        if (!g) break;
        this.a[g.key] = g
    }
    return this
};
h.Z = function (a, b, c, d) {
    return this.$(a, b, c, d)
};
h.$ = function (a, b, c, d, e) {
    if (q(b))
        for (var f = 0; f < b.length; f++) this.$(a, b[f], c, d, e);
    else {
        a = ac(a, b, c || this.handleEvent, d, e || this.b || this);
        if (!a) return this;
        this.a[a.key] = a
    }
    return this
};
h.S = function (a, b, c, d, e) {
    if (q(b))
        for (var f = 0; f < b.length; f++) this.S(a, b[f], c, d, e);
    else c = c || this.handleEvent, d = r(d) ? !!d.capture : !!d, e = e || this.b || this, c = bc(c), d = !!d, b = Sb(a) ? a.A(b, c, d, e) : a ? (a = dc(a)) ? a.A(b, c, d, e) : null : null, b && (ic(b), delete this.a[b.key]);
    return this
};
h.Aa = function () {
    Ta(this.a, function (a, b) {
        this.a.hasOwnProperty(b) && ic(a)
    }, this);
    this.a = {}
};
h.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
};

function Rc(a, b) {
    N.call(this);
    this.a = new Pc(this);
    this.ga(a || null);
    b && this.Na(b)
}
t(Rc, N);
h = Rc.prototype;
h.c = null;
h.j = !1;
h.Y = -1;
h.w = "toggle_display";
h.Na = function (a) {
    this.w = a
};
h.ga = function (a) {
    this.ta();
    this.c = a
};
h.ta = function () {
    if (this.j) throw Error("Can not change this state of the popup while showing.");
};
h.R = function (a) {
    this.s && this.s.stop();
    this.f && this.f.stop();
    a ? this.Pa() : this.M()
};
h.B = ua;
h.Pa = function () {
    if (!this.j && this.Ja()) {
        if (!this.c) throw Error("Caller must call setElement before trying to show the popup");
        this.B();
        var a = xb(this.c);
        this.a.u(a, "mousedown", this.ba, !0);
        if (A) {
            try {
                var b = a.activeElement
            } catch (d) {}
            for (; b && "IFRAME" == b.nodeName;) {
                try {
                    var c = b.contentDocument || b.contentWindow.document
                } catch (d) {
                    break
                }
                a = c;
                b = a.activeElement
            }
            this.a.u(a, "mousedown", this.ba, !0);
            this.a.u(a, "deactivate", this.aa)
        } else this.a.u(a, "blur", this.aa);
        "toggle_display" == this.w ? this.Oa() : "move_offscreen" ==
            this.w && this.B();
        this.j = !0;
        this.Y = ya();
        this.s ? (ac(this.s, "end", this.ca, !1, this), this.s.play()) : this.ca()
    }
};
h.M = function (a) {
    if (!this.j || !this.Ia(a)) return !1;
    this.a && this.a.Aa();
    this.j = !1;
    ya();
    this.f ? (ac(this.f, "end", xa(this.T, a), !1, this), this.f.play()) : this.T(a);
    return !0
};
h.T = function (a) {
    "toggle_display" == this.w ? this.U() : "move_offscreen" == this.w && this.Ga();
    this.Ka(a)
};
h.Oa = function () {
    this.c.style.visibility = "visible";
    uc(this.c, !0)
};
h.U = function () {
    this.c.style.visibility = "hidden";
    uc(this.c, !1)
};
h.Ga = function () {
    this.c.style.top = "-10000px"
};
h.Ja = function () {
    return this.dispatchEvent("beforeshow")
};
h.ca = function () {
    this.dispatchEvent("show")
};
h.Ia = function (a) {
    return this.dispatchEvent({
        type: "beforehide",
        target: a
    })
};
h.Ka = function (a) {
    this.dispatchEvent({
        type: "hide",
        target: a
    })
};
h.ba = function (a) {
    a = a.target;
    Cb(this.c, a) || this.Da(a) || this.ha() || this.M(a)
};
h.aa = function (a) {
    var b = xb(this.c);
    if ("undefined" != typeof document.activeElement) {
        if (a = b.activeElement, !a || Cb(this.c, a) || "BODY" == a.tagName) return
    } else if (a.target != b) return;
    this.ha() || this.M()
};
h.Da = function (a) {
    return Pa([], function (b) {
        return a === b || Cb(b, a)
    })
};
h.ha = function () {
    return 150 > ya() - this.Y
};

function U(a, b) {
    this.X = 8;
    this.N = b || void 0;
    Rc.call(this, a)
}
t(U, Rc);
U.prototype.na = function (a) {
    this.X = a;
    this.j && this.B()
};
U.prototype.Sa = function (a) {
    this.N = a || void 0;
    this.j && this.B()
};
U.prototype.B = function () {
    if (this.N) {
        var a = !this.j && "move_offscreen" != this.w,
            b = this.c;
        a && (b.style.visibility = "hidden", uc(b, !0));
        this.N.a(b, this.X, this.Va);
        a && uc(b, !1)
    }
};

function Sc(a) {
    if (null != a) switch (a.h) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function Tc(a) {
    return null != a && a.g === Ac ? a : a instanceof G ? V(a instanceof G && a.constructor === G && a.a === tb ? "" : "type_error:SafeHtml", null) : V(u(String(String(a))), Sc(a))
}

function Uc(a) {
    function b(a) {
        this.i = a
    }
    b.prototype = a.prototype;
    return function (a) {
        return new b(String(a))
    }
}
var V = function (a) {
    function b(a) {
        this.i = a
    }
    b.prototype = a.prototype;
    return function (a, d) {
        a = new b(String(a));
        void 0 !== d && (a.h = d);
        return a
    }
}(Dc);
Uc(Ec);
Uc(Fc);
Uc(Gc);
Uc(Hc);
Uc(Ic);

function Vc(a) {
    function b(a) {
        this.i = a
    }
    b.prototype = a.prototype;
    return function (a) {
        return (a = String(a)) ? new b(a) : ""
    }
}(function (a) {
    function b(a) {
        this.i = a
    }
    b.prototype = a.prototype;
    return function (a, d) {
        a = String(a);
        if (!a) return "";
        a = new b(a);
        void 0 !== d && (a.h = d);
        return a
    }
})(Dc);
Vc(Ec);
Vc(Gc);
Vc(Fc);
Vc(Hc);
Vc(Ic);
var Wc = /^<(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\b/;

function Xc(a, b) {
    if (!b) return String(a).replace(Yc, "").replace(Zc, "&lt;");
    a = String(a).replace(/\[/g, "&#91;");
    var c = [],
        d = [];
    a = a.replace(Yc, function (a, e) {
        if (e && (e = e.toLowerCase(), b.hasOwnProperty(e) && b[e])) {
            var f = c.length,
                g = "</",
                S = "";
            if ("/" != a.charAt(1)) {
                g = "<";
                for (var Fa; Fa = $c.exec(a);)
                    if (Fa[1] && "dir" == Fa[1].toLowerCase()) {
                        if (a = Fa[2]) {
                            if ("'" == a.charAt(0) || '"' == a.charAt(0)) a = a.substr(1, a.length - 2);
                            a = a.toLowerCase();
                            if ("ltr" == a || "rtl" == a || "auto" == a) S = ' dir="' + a + '"'
                        }
                        break
                    }
                $c.lastIndex = 0
            }
            c[f] = g + e + ">";
            d[f] =
                S;
            return "[" + f + "]"
        }
        return ""
    });
    a = String(a).replace(ad, bd);
    var e = cd(c);
    a = a.replace(/\[(\d+)\]/g, function (a, b) {
        return d[b] && c[b] ? c[b].substr(0, c[b].length - 1) + d[b] + ">" : c[b]
    });
    return a + e
}

function dd(a) {
    return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
}

function cd(a) {
    for (var b = [], c = 0, d = a.length; c < d; ++c) {
        var e = a[c];
        "/" == e.charAt(1) ? (e = Na(b, e), 0 > e ? a[c] = "" : (a[c] = b.slice(e).reverse().join(""), b.length = e)) : "<li>" == e && 0 > Na(b, "</ol>") && 0 > Na(b, "</ul>") ? a[c] = "" : Wc.test(e) || b.push("</" + e.substring(1))
    }
    return b.reverse().join("")
}
var ed = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};

function bd(a) {
    return ed[a]
}
var ad = /[\x00\x22\x27\x3c\x3e]/g,
    fd = /^(?!-*(?:expression|(?:moz-)?binding))(?!\s+)(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|\s+)*$/i,
    Yc = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Zc = /</g,
    $c = /([a-zA-Z][a-zA-Z0-9:\-]*)[\t\n\r\u0020]*=[\t\n\r\u0020]*("[^"]*"|'[^']*')/g;

function gd() {
    return V('<div class="waffle-chart-tooltip"></div>')
}

function hd(a) {
    return V('<div class="waffle-chart-tooltip-value">' + Tc(a.value) + "</div>")
}

function id(a) {
    return V('<div class="waffle-chart-tooltip-label">' + Tc(a.label) + '</div><div class="waffle-chart-tooltip-value">' + Tc(a.value) + "</div>")
}

function jd(a) {
    var b = "";
    a = a.entries;
    for (var c = a.length, d = 0; d < c; d++) {
        var e = a[d],
            f = '<div class="waffle-chart-tooltip-entry">' + (e.label ? '<span class="waffle-chart-tooltip-label">' + Tc(e.label) + ": </span>" : "") + '<span class="waffle-chart-tooltip-value"';
        if (e.color) {
            var g = e.color;
            null != g && g.g === Bc ? g = dd(g.i) : null == g ? g = "" : g instanceof E ? g = dd(g instanceof E && g.constructor === E && g.a === rb ? "" : "type_error:SafeStyle") : g instanceof F ? g = dd(g instanceof F && g.constructor === F && g.a === sb ? "" : "type_error:SafeStyleSheet") :
                (g = String(g), g = fd.test(g) ? g : "zSoyz");
            g = ' style="color: ' + (null != g && g.g === Ac ? String(Xc(g.i)).replace(ad, bd) : u(String(g))) + ';"'
        } else g = "";
        b += f + g + ">" + Tc(e.value) + "</span></div>"
    }
    return V(b)
};

function W(a) {
    U.call(this);
    this.b = [];
    this.Ha = a;
    this.L = null;
    this.Ca(a)
}
t(W, U);
var kd = ["waffle", "gvizCharts", "Tooltip"],
    X = n;
kd[0] in X || !X.execScript || X.execScript("var " + kd[0]);
for (var Y; kd.length && (Y = kd.shift());) !kd.length && W ? X[Y] = W : X[Y] && X[Y] !== Object.prototype[Y] ? X = X[Y] : X = X[Y] = {};
W.prototype.oa = function (a, b) {
    this.Ra();
    this.R(!0);
    var c = O.F();
    a *= c;
    b *= c;
    var d = this.c;
    if (Mc()) {
        c = Nc() ? "scale3d(" + c + "," + c + "," + c + ")" : "scale(" + c + "," + c + ")";
        var e = Oc();
        if (p(e)) oc(d, c, e);
        else
            for (var f in e) oc(d, e[f], f)
    }
    this.Sa(new ld(new H(a, b), this.L))
};
W.prototype.showAt = W.prototype.oa;
W.prototype.Ta = function () {
    this.R(!1);
    this.b = []
};
W.prototype.hide = W.prototype.Ta;
W.prototype.Qa = function (a) {
    this.P(Jc(hd, {
        value: a
    }))
};
W.prototype.forValue = W.prototype.Qa;
W.prototype.Ma = function (a, b, c) {
    this.P(Jc(id, {
        value: a,
        label: b
    }));
    b = (a = this.c) || document;
    if (b.getElementsByClassName) a = b.getElementsByClassName("waffle-chart-tooltip-value")[0];
    else if (b = a || document, b.querySelectorAll && b.querySelector) a = b.querySelector(".waffle-chart-tooltip-value");
    else {
        var d, e;
        a = a || document;
        if (a.querySelectorAll && a.querySelector) a = a.querySelectorAll(".waffle-chart-tooltip-value");
        else if (a.getElementsByClassName) a = e = a.getElementsByClassName("waffle-chart-tooltip-value");
        else {
            e = a.getElementsByTagName("*");
            var f = {};
            for (b = d = 0; a = e[b]; b++) {
                var g = a.className,
                    m;
                if (m = "function" == typeof g.split) m = 0 <= Ma(g.split(/\s+/), "waffle-chart-tooltip-value");
                m && (f[d++] = a)
            }
            f.length = d;
            a = f
        }
        a = a[0] || null
    }(a || null).style.color = this.ja(c)
};
W.prototype.forLabeledValue = W.prototype.Ma;
W.prototype.Fa = function (a, b, c) {
    this.b.push({
        label: b,
        value: a,
        color: this.ja(c)
    })
};
W.prototype.addLabeledValue = W.prototype.Fa;
W.prototype.ma = function () {
    this.P(Jc(jd, {
        entries: this.b
    }));
    this.b = []
};
W.prototype.prepareLabeledValuesRenderer = W.prototype.ma;
h = W.prototype;
h.ja = function (a) {
    return "rgba(" + [a >>> 16 & 255, a >>> 8 & 255, a & 255, (a >>> 24 & 255) / 255].join() + ")"
};
h.Ca = function (a) {
    var b = Jc(gd);
    a.appendChild(b);
    this.ga(b);
    this.na(3);
    this.R(!1);
    this.U()
};
h.Ra = function () {
    var a = sc(tc, this.Ha);
    ub(this.L, a) || (this.c.style.maxWidth = .8 * a.width + "px", this.L = a)
};
h.P = function (a) {
    this.sa();
    this.c.appendChild(a)
};
h.sa = function () {
    for (var a = this.c, b; b = a.firstChild;) a.removeChild(b)
};

function ld(a, b) {
    this.f = a;
    this.b = new P(0, b.width, b.height, 0)
}
var Z = ld;
Z.prototype = aa(Q.prototype);
Z.prototype.constructor = Z;
if (fa) fa(Z, Q);
else
    for (var md in Q)
        if ("prototype" != md)
            if (Object.defineProperties) {
                var nd = Object.getOwnPropertyDescriptor(Q, md);
                nd && Object.defineProperty(Z, md, nd)
            } else Z[md] = Q[md];
Z.ia = Q.prototype;
ld.prototype.a = function (a, b, c, d) {
    var e = this.f,
        f = this.b;
    e = e.f();
    var g = (b & 8 && "rtl" == qc(a, "direction") ? b ^ 4 : b) & -9;
    b = sc(tc, a);
    d = d ? d.a() : b.a();
    e = e.f();
    d = d.a();
    if (c || 0 != g) g & 4 ? e.a -= d.width + (c ? c.right : 0) : g & 2 ? e.a -= d.width / 2 : c && (e.a += c.left), g & 1 ? e.b -= d.height + (c ? c.bottom : 0) : c && (e.b += c.top);
    if (f) {
        c = e;
        g = d;
        var m = 5,
            v = 0;
        65 == (m & 65) && (c.a < f.left || c.a >= f.right) && (m &= -2);
        132 == (m & 132) && (c.b < f.top || c.b >= f.bottom) && (m &= -5);
        c.a < f.left && m & 1 && (c.a = f.left, v |= 1);
        if (m & 16) {
            var S = c.a;
            c.a < f.left && (c.a = f.left, v |= 4);
            c.a + g.width > f.right &&
                (g.width = Math.min(f.right - c.a, S + g.width - f.left), g.width = Math.max(g.width, 0), v |= 4)
        }
        c.a + g.width > f.right && m & 1 && (c.a = Math.max(f.right - g.width, f.left), v |= 1);
        m & 2 && (v |= (c.a < f.left ? 16 : 0) | (c.a + g.width > f.right ? 32 : 0));
        c.b < f.top && m & 4 && (c.b = f.top, v |= 2);
        m & 32 && (S = c.b, c.b < f.top && (c.b = f.top, v |= 8), c.b + g.height > f.bottom && (g.height = Math.min(f.bottom - c.b, S + g.height - f.top), g.height = Math.max(g.height, 0), v |= 8));
        c.b + g.height > f.bottom && m & 4 && (c.b = Math.max(f.bottom - g.height, f.top), v |= 2);
        m & 8 && (v |= (c.b < f.top ? 64 : 0) | (c.b + g.height >
            f.bottom ? 128 : 0));
        c = v
    } else c = 256;
    f = new nc(0, 0, 0, 0);
    f.left = e.a;
    f.top = e.b;
    f.width = d.width;
    f.height = d.height;
    c & 496 || (d = f.xa(), d instanceof H ? (e = d.a, d = d.b) : (e = d, d = void 0), a.style.left = rc(e, !1), a.style.top = rc(d, !1), d = f.wa(), ub(b, d) || (b = d, e = vb(xb(a)).f(), !A || ob("10") || e && ob("8") ? (a = a.style, B ? a.MozBoxSizing = "border-box" : C ? a.WebkitBoxSizing = "border-box" : a.boxSizing = "border-box", a.width = Math.max(b.width, 0) + "px", a.height = Math.max(b.height, 0) + "px") : (f = a.style, e ? (A ? (g = wc(a, "paddingLeft"), c = wc(a, "paddingRight"),
        d = wc(a, "paddingTop"), e = wc(a, "paddingBottom"), e = new P(d, c, e, g)) : (g = R(a, "paddingLeft"), c = R(a, "paddingRight"), d = R(a, "paddingTop"), e = R(a, "paddingBottom"), e = new P(parseFloat(d), parseFloat(c), parseFloat(e), parseFloat(g))), !A || 9 <= Number(D) ? (g = R(a, "borderLeftWidth"), c = R(a, "borderRightWidth"), d = R(a, "borderTopWidth"), a = R(a, "borderBottomWidth"), a = new P(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(g))) : (g = yc(a, "borderLeft"), c = yc(a, "borderRight"), d = yc(a, "borderTop"), a = yc(a, "borderBottom"), a = new P(d, c,
        a, g)), f.pixelWidth = b.width - a.left - e.left - e.right - a.right, f.pixelHeight = b.height - a.top - e.top - e.bottom - a.bottom) : (f.pixelWidth = b.width, f.pixelHeight = b.height))))
};
