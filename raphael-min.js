!function(a) {
    var b = "0.3.4", c = "hasOwnProperty", d = /[\.\/]/, e = "*", f = function() {}, g = function(a, b) {
        return a - b;
    }, h, i, j = {
        n: {}
    }, k = function(a, b) {
        var c = j, d = i, e = Array.prototype.slice.call(arguments, 2), f = k.listeners(a), l = 0, m = !1, n, o = [], p = {}, q = [], r = h, s = [];
        h = a, i = 0;
        for (var t = 0, u = f.length; t < u; t++) "zIndex" in f[t] && (o.push(f[t].zIndex), 
        f[t].zIndex < 0 && (p[f[t].zIndex] = f[t]));
        o.sort(g);
        while (o[l] < 0) {
            n = p[o[l++]], q.push(n.apply(b, e));
            if (i) {
                i = d;
                return q;
            }
        }
        for (t = 0; t < u; t++) {
            n = f[t];
            if ("zIndex" in n) if (n.zIndex == o[l]) {
                q.push(n.apply(b, e));
                if (i) break;
                do {
                    l++, n = p[o[l]], n && q.push(n.apply(b, e));
                    if (i) break;
                } while (n);
            } else p[n.zIndex] = n; else {
                q.push(n.apply(b, e));
                if (i) break;
            }
        }
        i = d, h = r;
        return q.length ? q : null;
    };
    k.listeners = function(a) {
        var b = a.split(d), c = j, f, g, h, i, k, l, m, n, o = [ c ], p = [];
        for (i = 0, k = b.length; i < k; i++) {
            n = [];
            for (l = 0, m = o.length; l < m; l++) {
                c = o[l].n, g = [ c[b[i]], c[e] ], h = 2;
                while (h--) f = g[h], f && (n.push(f), p = p.concat(f.f || []));
            }
            o = n;
        }
        return p;
    }, k.on = function(a, b) {
        var c = a.split(d), e = j;
        for (var g = 0, h = c.length; g < h; g++) e = e.n, !e[c[g]] && (e[c[g]] = {
            n: {}
        }), e = e[c[g]];
        e.f = e.f || [];
        for (g = 0, h = e.f.length; g < h; g++) if (e.f[g] == b) return f;
        e.f.push(b);
        return function(a) {
            +a == +a && (b.zIndex = +a);
        };
    }, k.stop = function() {
        i = 1;
    }, k.nt = function(a) {
        if (a) return new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(h);
        return h;
    }, k.off = k.unbind = function(a, b) {
        var f = a.split(d), g, h, i, k, l, m, n, o = [ j ];
        for (k = 0, l = f.length; k < l; k++) for (m = 0; m < o.length; m += i.length - 2) {
            i = [ m, 1 ], g = o[m].n;
            if (f[k] != e) g[f[k]] && i.push(g[f[k]]); else for (h in g) g[c](h) && i.push(g[h]);
            o.splice.apply(o, i);
        }
        for (k = 0, l = o.length; k < l; k++) {
            g = o[k];
            while (g.n) {
                if (b) {
                    if (g.f) {
                        for (m = 0, n = g.f.length; m < n; m++) if (g.f[m] == b) {
                            g.f.splice(m, 1);
                            break;
                        }
                        !g.f.length && delete g.f;
                    }
                    for (h in g.n) if (g.n[c](h) && g.n[h].f) {
                        var p = g.n[h].f;
                        for (m = 0, n = p.length; m < n; m++) if (p[m] == b) {
                            p.splice(m, 1);
                            break;
                        }
                        !p.length && delete g.n[h].f;
                    }
                } else {
                    delete g.f;
                    for (h in g.n) g.n[c](h) && g.n[h].f && delete g.n[h].f;
                }
                g = g.n;
            }
        }
    }, k.once = function(a, b) {
        var c = function() {
            var d = b.apply(this, arguments);
            k.unbind(a, c);
            return d;
        };
        return k.on(a, c);
    }, k.version = b, k.toString = function() {
        return "You are running Eve " + b;
    }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function() {
        return k;
    }) : a.eve = k;
}(this), function() {
    function a(a) {
        for (var b = 0; b < Cc.length; b++) Cc[b].el.paper == a && Cc.splice(b--, 1);
    }
    function b(a, b, c, e, f, h) {
        c = ib(c);
        var i, j, k, l = [], m, n, o, p = a.ms, q = {}, r = {}, s = {};
        if (e) for (v = 0, x = Cc.length; v < x; v++) {
            var t = Cc[v];
            if (t.el.id == b.id && t.anim == a) {
                t.percent != c ? (Cc.splice(v, 1), k = 1) : j = t, b.attr(t.totalOrigin);
                break;
            }
        } else e = +r;
        for (var v = 0, x = a.percents.length; v < x; v++) {
            if (a.percents[v] == c || a.percents[v] > e * a.top) {
                c = a.percents[v], n = a.percents[v - 1] || 0, p = p / a.top * (c - n), m = a.percents[v + 1], 
                i = a.anim[c];
                break;
            }
            e && b.attr(a.anim[a.percents[v]]);
        }
        if (!!i) {
            if (!j) {
                for (var y in i) if (i[A](y)) if (mb[A](y) || b.paper.customAttributes[A](y)) {
                    q[y] = b.attr(y), null == q[y] && (q[y] = lb[y]), r[y] = i[y];
                    switch (mb[y]) {
                      case W:
                        s[y] = (r[y] - q[y]) / p;
                        break;

                      case "colour":
                        q[y] = u.getRGB(q[y]);
                        var z = u.getRGB(r[y]);
                        s[y] = {
                            r: (z.r - q[y].r) / p,
                            g: (z.g - q[y].g) / p,
                            b: (z.b - q[y].b) / p
                        };
                        break;

                      case "path":
                        var B = Yb(q[y], r[y]), C = B[1];
                        q[y] = B[0], s[y] = [];
                        for (v = 0, x = q[y].length; v < x; v++) {
                            s[y][v] = [ 0 ];
                            for (var D = 1, E = q[y][v].length; D < E; D++) s[y][v][D] = (C[v][D] - q[y][v][D]) / p;
                        }
                        break;

                      case "transform":
                        var F = b._, G = hc(F[y], r[y]);
                        if (G) {
                            q[y] = G.from, r[y] = G.to, s[y] = [], s[y].real = !0;
                            for (v = 0, x = q[y].length; v < x; v++) {
                                s[y][v] = [ q[y][v][0] ];
                                for (D = 1, E = q[y][v].length; D < E; D++) s[y][v][D] = (r[y][v][D] - q[y][v][D]) / p;
                            }
                        } else {
                            var I = b.matrix || new g(), J = {
                                _: {
                                    transform: F.transform
                                },
                                getBBox: function() {
                                    return b.getBBox(1);
                                }
                            };
                            q[y] = [ I.a, I.b, I.c, I.d, I.e, I.f ], fc(J, r[y]), r[y] = J._.transform, s[y] = [ (J.matrix.a - I.a) / p, (J.matrix.b - I.b) / p, (J.matrix.c - I.c) / p, (J.matrix.d - I.d) / p, (J.matrix.e - I.e) / p, (J.matrix.f - I.f) / p ];
                        }
                        break;

                      case "csv":
                        var K = L(i[y])[M](w), N = L(q[y])[M](w);
                        if ("clip-rect" == y) {
                            q[y] = N, s[y] = [], v = N.length;
                            while (v--) s[y][v] = (K[v] - q[y][v]) / p;
                        }
                        r[y] = K;
                        break;

                      default:
                        K = [][H](i[y]), N = [][H](q[y]), s[y] = [], v = b.paper.customAttributes[y].length;
                        while (v--) s[y][v] = ((K[v] || 0) - (N[v] || 0)) / p;
                    }
                }
                var O = i.easing, P = u.easing_formulas[O];
                if (!P) {
                    P = L(O).match(fb);
                    if (P && 5 == P.length) {
                        var Q = P;
                        P = function(a) {
                            return d(a, +Q[1], +Q[2], +Q[3], +Q[4], p);
                        };
                    } else P = zb;
                }
                o = i.start || a.start || +new Date(), t = {
                    anim: a,
                    percent: c,
                    timestamp: o,
                    start: o + (a.del || 0),
                    status: 0,
                    initstatus: e || 0,
                    stop: !1,
                    ms: p,
                    easing: P,
                    from: q,
                    diff: s,
                    to: r,
                    el: b,
                    callback: i.callback,
                    prev: n,
                    next: m,
                    repeat: h || a.times,
                    origin: b.attr(),
                    totalOrigin: f
                }, Cc.push(t);
                if (e && !j && !k) {
                    t.stop = !0, t.start = new Date() - p * e;
                    if (1 == Cc.length) return Ec();
                }
                k && (t.start = new Date() - t.ms * e), 1 == Cc.length && Dc(Ec);
            } else j.initstatus = e, j.start = new Date() - j.ms * e;
            eve("raphael.anim.start." + b.id, b, a);
        }
    }
    function c(a, b) {
        var c = [], d = {};
        this.ms = b, this.times = 1;
        if (a) {
            for (var e in a) a[A](e) && (d[ib(e)] = a[e], c.push(ib(e)));
            c.sort(xb);
        }
        this.anim = d, this.top = c[c.length - 1], this.percents = c;
    }
    function d(a, b, c, d, e, f) {
        function g(a, b) {
            var c, d, e, f, g, h;
            for (e = a, h = 0; h < 8; h++) {
                f = i(e) - a;
                if (T(f) < b) return e;
                g = (3 * l * e + 2 * k) * e + j;
                if (T(g) < 1e-6) break;
                e -= f / g;
            }
            c = 0, d = 1, e = a;
            if (e < c) return c;
            if (e > d) return d;
            while (c < d) {
                f = i(e);
                if (T(f - a) < b) return e;
                a > f ? c = e : d = e, e = (d - c) / 2 + c;
            }
            return e;
        }
        function h(a, b) {
            var c = g(a, b);
            return ((o * c + n) * c + m) * c;
        }
        function i(a) {
            return ((l * a + k) * a + j) * a;
        }
        var j = 3 * b, k = 3 * (d - b) - j, l = 1 - j - k, m = 3 * c, n = 3 * (e - c) - m, o = 1 - m - n;
        return h(a, 1 / (200 * f));
    }
    function e() {
        return this.x + K + this.y + K + this.width + " ?? " + this.height;
    }
    function f() {
        return this.x + K + this.y;
    }
    function g(a, b, c, d, e, f) {
        null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, 
        this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0);
    }
    function h(a, b, c) {
        a = u._path2curve(a), b = u._path2curve(b);
        var d, e, f, g, h, j, k, l, m, n, o = c ? 0 : [];
        for (var p = 0, q = a.length; p < q; p++) {
            var r = a[p];
            if ("M" == r[0]) d = h = r[1], e = j = r[2]; else {
                "C" == r[0] ? (m = [ d, e ].concat(r.slice(1)), d = m[6], e = m[7]) : (m = [ d, e, d, e, h, j, h, j ], 
                d = h, e = j);
                for (var s = 0, t = b.length; s < t; s++) {
                    var v = b[s];
                    if ("M" == v[0]) f = k = v[1], g = l = v[2]; else {
                        "C" == v[0] ? (n = [ f, g ].concat(v.slice(1)), f = n[6], g = n[7]) : (n = [ f, g, f, g, k, l, k, l ], 
                        f = k, g = l);
                        var w = i(m, n, c);
                        if (c) o += w; else {
                            for (var x = 0, y = w.length; x < y; x++) w[x].segment1 = p, w[x].segment2 = s, 
                            w[x].bez1 = m, w[x].bez2 = n;
                            o = o.concat(w);
                        }
                    }
                }
            }
        }
        return o;
    }
    function i(a, b, c) {
        var d = u.bezierBBox(a), e = u.bezierBBox(b);
        if (!u.isBBoxIntersect(d, e)) return c ? 0 : [];
        var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 5), i = ~~(g / 5), j = [], k = [], m = {}, o = c ? 0 : [];
        for (var p = 0; p < h + 1; p++) {
            var q = u.findDotsAtSegment.apply(u, a.concat(p / h));
            j.push({
                x: q.x,
                y: q.y,
                t: p / h
            });
        }
        for (p = 0; p < i + 1; p++) q = u.findDotsAtSegment.apply(u, b.concat(p / i)), k.push({
            x: q.x,
            y: q.y,
            t: p / i
        });
        for (p = 0; p < h; p++) for (var r = 0; r < i; r++) {
            var s = j[p], t = j[p + 1], v = k[r], w = k[r + 1], x = T(t.x - s.x) < .001 ? "y" : "x", y = T(w.x - v.x) < .001 ? "y" : "x", z = l(s.x, s.y, t.x, t.y, v.x, v.y, w.x, w.y);
            if (z) {
                if (m[z.x.toFixed(4)] == z.y.toFixed(4)) continue;
                m[z.x.toFixed(4)] = z.y.toFixed(4);
                var A = s.t + T((z[x] - s[x]) / (t[x] - s[x])) * (t.t - s.t), B = v.t + T((z[y] - v[y]) / (w[y] - v[y])) * (w.t - v.t);
                A >= 0 && A <= 1 && B >= 0 && B <= 1 && (c ? o++ : o.push({
                    x: z.x,
                    y: z.y,
                    t1: A,
                    t2: B
                }));
            }
        }
        return o;
    }
    function j(a, b) {
        return i(a, b, 1);
    }
    function k(a, b) {
        return i(a, b);
    }
    function l(a, b, c, d, e, f, g, h) {
        if (!(R(a, c) < S(e, g) || S(a, c) > R(e, g) || R(b, d) < S(f, h) || S(b, d) > R(f, h))) {
            var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g), j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g), k = (a - c) * (f - h) - (b - d) * (e - g);
            if (!k) return;
            var l = i / k, m = j / k, n = +l.toFixed(2), o = +m.toFixed(2);
            if (n < +S(a, c).toFixed(2) || n > +R(a, c).toFixed(2) || n < +S(e, g).toFixed(2) || n > +R(e, g).toFixed(2) || o < +S(b, d).toFixed(2) || o > +R(b, d).toFixed(2) || o < +S(f, h).toFixed(2) || o > +R(f, h).toFixed(2)) return;
            return {
                x: l,
                y: m
            };
        }
    }
    function m(a, b, c, d, e, f, g, h, i) {
        if (!(i < 0 || n(a, b, c, d, e, f, g, h) < i)) {
            var j = 1, k = j / 2, l = j - k, m, o = .01;
            m = n(a, b, c, d, e, f, g, h, l);
            while (T(m - i) > o) k /= 2, l += (m < i ? 1 : -1) * k, m = n(a, b, c, d, e, f, g, h, l);
            return l;
        }
    }
    function n(a, b, c, d, e, f, g, h, i) {
        null == i && (i = 1), i = i > 1 ? 1 : i < 0 ? 0 : i;
        var j = i / 2, k = 12, l = [ -.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816 ], m = [ .2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472 ], n = 0;
        for (var p = 0; p < k; p++) {
            var q = j * l[p] + j, r = o(q, a, c, e, g), s = o(q, b, d, f, h), t = r * r + s * s;
            n += m[p] * Q.sqrt(t);
        }
        return j * n;
    }
    function o(a, b, c, d, e) {
        var f = -3 * b + 9 * c - 9 * d + 3 * e, g = a * f + 6 * b - 12 * c + 6 * d;
        return a * g - 3 * b + 3 * c;
    }
    function p(a, b) {
        var c = [];
        for (var d = 0, e = a.length; e - 2 * !b > d; d += 2) {
            var f = [ {
                x: +a[d - 2],
                y: +a[d - 1]
            }, {
                x: +a[d],
                y: +a[d + 1]
            }, {
                x: +a[d + 2],
                y: +a[d + 3]
            }, {
                x: +a[d + 4],
                y: +a[d + 5]
            } ];
            b ? d ? e - 4 == d ? f[3] = {
                x: +a[0],
                y: +a[1]
            } : e - 2 == d && (f[2] = {
                x: +a[0],
                y: +a[1]
            }, f[3] = {
                x: +a[2],
                y: +a[3]
            }) : f[0] = {
                x: +a[e - 2],
                y: +a[e - 1]
            } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                x: +a[d],
                y: +a[d + 1]
            }), c.push([ "C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y ]);
        }
        return c;
    }
    function q() {
        return this.hex;
    }
    function r(a, b, c) {
        function d() {
            var e = Array.prototype.slice.call(arguments, 0), f = e.join("???"), g = d.cache = d.cache || {}, h = d.count = d.count || [];
            if (g[A](f)) {
                s(h, f);
                return c ? c(g[f]) : g[f];
            }
            h.length >= 1e3 && delete g[h.shift()], h.push(f), g[f] = a[G](b, e);
            return c ? c(g[f]) : g[f];
        }
        return d;
    }
    function s(a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return a.push(a.splice(c, 1)[0]);
    }
    function t(a) {
        if (Object(a) !== a) return a;
        var b = new a.constructor();
        for (var c in a) a[A](c) && (b[c] = t(a[c]));
        return b;
    }
    function u(a) {
        if (u.is(a, "function")) return v ? a() : eve.on("raphael.DOMload", a);
        if (u.is(a, Y)) return u._engine.create[G](u, a.splice(0, 3 + u.is(a[0], W))).add(a);
        var b = Array.prototype.slice.call(arguments, 0);
        if (u.is(b[b.length - 1], "function")) {
            var c = b.pop();
            return v ? c.call(u._engine.create[G](u, b)) : eve.on("raphael.DOMload", function() {
                c.call(u._engine.create[G](u, b));
            });
        }
        return u._engine.create[G](u, arguments);
    }
    u.version = "2.1.0", u.eve = eve;
    var v, w = /[, ]+/, x = {
        circle: 1,
        rect: 1,
        path: 1,
        ellipse: 1,
        text: 1,
        image: 1
    }, y = /\{(\d+)\}/g, z = "prototype", A = "hasOwnProperty", B = {
        doc: document,
        win: window
    }, C = {
        was: Object.prototype[A].call(B.win, "Raphael"),
        is: B.win.Raphael
    }, D = function() {
        this.ca = this.customAttributes = {};
    }, E, F = "appendChild", G = "apply", H = "concat", I = "createTouch" in B.doc, J = "", K = " ", L = String, M = "split", N = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[M](K), O = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    }, P = L.prototype.toLowerCase, Q = Math, R = Q.max, S = Q.min, T = Q.abs, U = Q.pow, V = Q.PI, W = "number", X = "string", Y = "array", Z = "toString", $ = "fill", _ = Object.prototype.toString, ab = {}, bb = "push", cb = u._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, db = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i, eb = {
        NaN: 1,
        Infinity: 1,
        "-Infinity": 1
    }, fb = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, gb = Q.round, hb = "setAttribute", ib = parseFloat, jb = parseInt, kb = L.prototype.toUpperCase, lb = u._availableAttrs = {
        "arrow-end": "none",
        "arrow-start": "none",
        blur: 0,
        "clip-rect": "0 0 1e9 1e9",
        cursor: "default",
        cx: 0,
        cy: 0,
        fill: "#fff",
        "fill-opacity": 1,
        font: '10px "Arial"',
        "font-family": '"Arial"',
        "font-size": "10",
        "font-style": "normal",
        "font-weight": 400,
        gradient: 0,
        height: 0,
        href: "http://raphaeljs.com/",
        "letter-spacing": 0,
        opacity: 1,
        path: "M0,0",
        r: 0,
        rx: 0,
        ry: 0,
        src: "",
        stroke: "#000",
        "stroke-dasharray": "",
        "stroke-linecap": "butt",
        "stroke-linejoin": "butt",
        "stroke-miterlimit": 0,
        "stroke-opacity": 1,
        "stroke-width": 1,
        target: "_blank",
        "text-anchor": "middle",
        title: "Raphael",
        transform: "",
        width: 0,
        x: 0,
        y: 0
    }, mb = u._availableAnimAttrs = {
        blur: W,
        "clip-rect": "csv",
        cx: W,
        cy: W,
        fill: "colour",
        "fill-opacity": W,
        "font-size": W,
        height: W,
        opacity: W,
        path: "path",
        r: W,
        rx: W,
        ry: W,
        stroke: "colour",
        "stroke-opacity": W,
        "stroke-width": W,
        transform: "transform",
        width: W,
        x: W,
        y: W
    }, nb = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g, ob = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, pb = {
        hs: 1,
        rg: 1
    }, qb = /,?([achlmqrstvxz]),?/gi, rb = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, sb = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, tb = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi, ub = u._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, vb = {}, wb = function(a, b) {
        return a.key - b.key;
    }, xb = function(a, b) {
        return ib(a) - ib(b);
    }, yb = function() {}, zb = function(a) {
        return a;
    }, Ab = u._rectPath = function(a, b, c, d, e) {
        if (e) return [ [ "M", a + e, b ], [ "l", c - 2 * e, 0 ], [ "a", e, e, 0, 0, 1, e, e ], [ "l", 0, d - 2 * e ], [ "a", e, e, 0, 0, 1, -e, e ], [ "l", 2 * e - c, 0 ], [ "a", e, e, 0, 0, 1, -e, -e ], [ "l", 0, 2 * e - d ], [ "a", e, e, 0, 0, 1, e, -e ], [ "z" ] ];
        return [ [ "M", a, b ], [ "l", c, 0 ], [ "l", 0, d ], [ "l", -c, 0 ], [ "z" ] ];
    }, Bb = function(a, b, c, d) {
        null == d && (d = c);
        return [ [ "M", a, b ], [ "m", 0, -d ], [ "a", c, d, 0, 1, 1, 0, 2 * d ], [ "a", c, d, 0, 1, 1, 0, -2 * d ], [ "z" ] ];
    }, Cb = u._getPath = {
        path: function(a) {
            return a.attr("path");
        },
        circle: function(a) {
            var b = a.attrs;
            return Bb(b.cx, b.cy, b.r);
        },
        ellipse: function(a) {
            var b = a.attrs;
            return Bb(b.cx, b.cy, b.rx, b.ry);
        },
        rect: function(a) {
            var b = a.attrs;
            return Ab(b.x, b.y, b.width, b.height, b.r);
        },
        image: function(a) {
            var b = a.attrs;
            return Ab(b.x, b.y, b.width, b.height);
        },
        text: function(a) {
            var b = a._getBBox();
            return Ab(b.x, b.y, b.width, b.height);
        }
    }, Db = u.mapPath = function(a, b) {
        if (!b) return a;
        var c, d, e, f, g, h, i;
        a = Yb(a);
        for (e = 0, g = a.length; e < g; e++) {
            i = a[e];
            for (f = 1, h = i.length; f < h; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), 
            i[f] = c, i[f + 1] = d;
        }
        return a;
    };
    u._g = B, u.type = B.win.SVGAngle || B.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
    if ("VML" == u.type) {
        var Eb = B.doc.createElement("div"), Fb;
        Eb.innerHTML = '<v:shape adj="1"/>', Fb = Eb.firstChild, Fb.style.behavior = "url(#default#VML)";
        if (!Fb || "object" != typeof Fb.adj) return u.type = J;
        Eb = null;
    }
    u.svg = !(u.vml = "VML" == u.type), u._Paper = D, u.fn = E = D.prototype = u.prototype, 
    u._id = 0, u._oid = 0, u.is = function(a, b) {
        b = P.call(b);
        if ("finite" == b) return !eb[A](+a);
        if ("array" == b) return a instanceof Array;
        return "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || _.call(a).slice(8, -1).toLowerCase() == b;
    }, u.angle = function(a, b, c, d, e, f) {
        if (null == e) {
            var g = a - c, h = b - d;
            if (!g && !h) return 0;
            return (180 + 180 * Q.atan2(-h, -g) / V + 360) % 360;
        }
        return u.angle(a, b, e, f) - u.angle(c, d, e, f);
    }, u.rad = function(a) {
        return a % 360 * V / 180;
    }, u.deg = function(a) {
        return 180 * a / V % 360;
    }, u.snapTo = function(a, b, c) {
        c = u.is(c, "finite") ? c : 10;
        if (u.is(a, Y)) {
            var d = a.length;
            while (d--) if (T(a[d] - b) <= c) return a[d];
        } else {
            a = +a;
            var e = b % a;
            if (e < c) return b - e;
            if (e > a - c) return b - e + a;
        }
        return b;
    };
    var Gb = u.createUUID = function(a, b) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase();
        };
    }(/[xy]/g, function(a) {
        var b = 16 * Q.random() | 0, c = "x" == a ? b : 3 & b | 8;
        return c.toString(16);
    });
    u.setWindow = function(a) {
        eve("raphael.setWindow", u, B.win, a), B.win = a, B.doc = B.win.document, u._engine.initWin && u._engine.initWin(B.win);
    };
    var Hb = function(a) {
        if (u.vml) {
            var b = /^\s+|\s+$/g, c;
            try {
                var d = new ActiveXObject("htmlfile");
                d.write("<body>"), d.close(), c = d.body;
            } catch (e) {
                c = createPopup().document.body;
            }
            var f = c.createTextRange();
            Hb = r(function(a) {
                try {
                    c.style.color = L(a).replace(b, J);
                    var d = f.queryCommandValue("ForeColor");
                    d = (255 & d) << 16 | 65280 & d | (16711680 & d) >>> 16;
                    return "#" + ("000000" + d.toString(16)).slice(-6);
                } catch (e) {
                    return "none";
                }
            });
        } else {
            var g = B.doc.createElement("i");
            g.title = "Rapha??l Colour Picker", g.style.display = "none", B.doc.body.appendChild(g), 
            Hb = r(function(a) {
                g.style.color = a;
                return B.doc.defaultView.getComputedStyle(g, J).getPropertyValue("color");
            });
        }
        return Hb(a);
    }, Ib = function() {
        return "hsb(" + [ this.h, this.s, this.b ] + ")";
    }, Jb = function() {
        return "hsl(" + [ this.h, this.s, this.l ] + ")";
    }, Kb = function() {
        return this.hex;
    }, Lb = function(a, b, c) {
        null == b && u.is(a, "object") && "r" in a && "g" in a && "b" in a && (c = a.b, 
        b = a.g, a = a.r);
        if (null == b && u.is(a, X)) {
            var d = u.getRGB(a);
            a = d.r, b = d.g, c = d.b;
        }
        if (a > 1 || b > 1 || c > 1) a /= 255, b /= 255, c /= 255;
        return [ a, b, c ];
    }, Mb = function(a, b, c, d) {
        a *= 255, b *= 255, c *= 255;
        var e = {
            r: a,
            g: b,
            b: c,
            hex: u.rgb(a, b, c),
            toString: Kb
        };
        u.is(d, "finite") && (e.opacity = d);
        return e;
    };
    u.color = function(a) {
        var b;
        u.is(a, "object") && "h" in a && "s" in a && "b" in a ? (b = u.hsb2rgb(a), a.r = b.r, 
        a.g = b.g, a.b = b.b, a.hex = b.hex) : u.is(a, "object") && "h" in a && "s" in a && "l" in a ? (b = u.hsl2rgb(a), 
        a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : (u.is(a, "string") && (a = u.getRGB(a)), 
        u.is(a, "object") && "r" in a && "g" in a && "b" in a ? (b = u.rgb2hsl(a), a.h = b.h, 
        a.s = b.s, a.l = b.l, b = u.rgb2hsb(a), a.v = b.b) : (a = {
            hex: "none"
        }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1)), a.toString = Kb;
        return a;
    }, u.hsb2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, 
        d = a.o), a *= 360;
        var e, f, g, h, i;
        a = a % 360 / 60, i = c * b, h = i * (1 - T(a % 2 - 1)), e = f = g = c - i, a = ~~a, 
        e += [ i, h, 0, 0, h, i ][a], f += [ h, i, i, h, 0, 0 ][a], g += [ 0, 0, h, i, i, h ][a];
        return Mb(e, f, g, d);
    }, u.hsl2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h);
        if (a > 1 || b > 1 || c > 1) a /= 360, b /= 100, c /= 100;
        a *= 360;
        var e, f, g, h, i;
        a = a % 360 / 60, i = 2 * b * (c < .5 ? c : 1 - c), h = i * (1 - T(a % 2 - 1)), 
        e = f = g = c - i / 2, a = ~~a, e += [ i, h, 0, 0, h, i ][a], f += [ h, i, i, h, 0, 0 ][a], 
        g += [ 0, 0, h, i, i, h ][a];
        return Mb(e, f, g, d);
    }, u.rgb2hsb = function(a, b, c) {
        c = Lb(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g;
        f = R(a, b, c), g = f - S(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, 
        d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f;
        return {
            h: d,
            s: e,
            b: f,
            toString: Ib
        };
    }, u.rgb2hsl = function(a, b, c) {
        c = Lb(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g, h, i;
        g = R(a, b, c), h = S(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, 
        d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : f < .5 ? i / (2 * f) : i / (2 - 2 * f);
        return {
            h: d,
            s: e,
            l: f,
            toString: Jb
        };
    }, u._path2string = function() {
        return this.join(",").replace(qb, "$1");
    };
    var Nb = u._preload = function(a, b) {
        var c = B.doc.createElement("img");
        c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() {
            b.call(this), this.onload = null, B.doc.body.removeChild(this);
        }, c.onerror = function() {
            B.doc.body.removeChild(this);
        }, B.doc.body.appendChild(c), c.src = a;
    };
    u.getRGB = r(function(a) {
        if (!a || !!((a = L(a)).indexOf("-") + 1)) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: q
        };
        if ("none" == a) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            toString: q
        };
        !pb[A](a.toLowerCase().substring(0, 2)) && "#" != a.charAt() && (a = Hb(a));
        var b, c, d, e, f, g, h, i = a.match(db);
        if (i) {
            i[2] && (e = jb(i[2].substring(5), 16), d = jb(i[2].substring(3, 5), 16), c = jb(i[2].substring(1, 3), 16)), 
            i[3] && (e = jb((g = i[3].charAt(3)) + g, 16), d = jb((g = i[3].charAt(2)) + g, 16), 
            c = jb((g = i[3].charAt(1)) + g, 16)), i[4] && (h = i[4][M](ob), c = ib(h[0]), "%" == h[0].slice(-1) && (c *= 2.55), 
            d = ib(h[1]), "%" == h[1].slice(-1) && (d *= 2.55), e = ib(h[2]), "%" == h[2].slice(-1) && (e *= 2.55), 
            "rgba" == i[1].toLowerCase().slice(0, 4) && (f = ib(h[3])), h[3] && "%" == h[3].slice(-1) && (f /= 100));
            if (i[5]) {
                h = i[5][M](ob), c = ib(h[0]), "%" == h[0].slice(-1) && (c *= 2.55), d = ib(h[1]), 
                "%" == h[1].slice(-1) && (d *= 2.55), e = ib(h[2]), "%" == h[2].slice(-1) && (e *= 2.55), 
                ("deg" == h[0].slice(-3) || "??" == h[0].slice(-1)) && (c /= 360), "hsba" == i[1].toLowerCase().slice(0, 4) && (f = ib(h[3])), 
                h[3] && "%" == h[3].slice(-1) && (f /= 100);
                return u.hsb2rgb(c, d, e, f);
            }
            if (i[6]) {
                h = i[6][M](ob), c = ib(h[0]), "%" == h[0].slice(-1) && (c *= 2.55), d = ib(h[1]), 
                "%" == h[1].slice(-1) && (d *= 2.55), e = ib(h[2]), "%" == h[2].slice(-1) && (e *= 2.55), 
                ("deg" == h[0].slice(-3) || "??" == h[0].slice(-1)) && (c /= 360), "hsla" == i[1].toLowerCase().slice(0, 4) && (f = ib(h[3])), 
                h[3] && "%" == h[3].slice(-1) && (f /= 100);
                return u.hsl2rgb(c, d, e, f);
            }
            i = {
                r: c,
                g: d,
                b: e,
                toString: q
            }, i.hex = "#" + (16777216 | e | d << 8 | c << 16).toString(16).slice(1), u.is(f, "finite") && (i.opacity = f);
            return i;
        }
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: q
        };
    }, u), u.hsb = r(function(a, b, c) {
        return u.hsb2rgb(a, b, c).hex;
    }), u.hsl = r(function(a, b, c) {
        return u.hsl2rgb(a, b, c).hex;
    }), u.rgb = r(function(a, b, c) {
        return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1);
    }), u.getColor = function(a) {
        var b = this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: a || .75
        }, c = this.hsb2rgb(b.h, b.s, b.b);
        b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {
            h: 0,
            s: 1,
            b: b.b
        }));
        return c.hex;
    }, u.getColor.reset = function() {
        delete this.start;
    }, u.parsePathString = function(a) {
        if (!a) return null;
        var b = Ob(a);
        if (b.arr) return Qb(b.arr);
        var c = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        }, d = [];
        u.is(a, Y) && u.is(a[0], Y) && (d = Qb(a)), d.length || L(a).replace(rb, function(a, b, e) {
            var f = [], g = b.toLowerCase();
            e.replace(tb, function(a, b) {
                b && f.push(+b);
            }), "m" == g && f.length > 2 && (d.push([ b ][H](f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L");
            if ("r" == g) d.push([ b ][H](f)); else while (f.length >= c[g]) {
                d.push([ b ][H](f.splice(0, c[g])));
                if (!c[g]) break;
            }
        }), d.toString = u._path2string, b.arr = Qb(d);
        return d;
    }, u.parseTransformString = r(function(a) {
        if (!a) return null;
        var b = {
            r: 3,
            s: 4,
            t: 2,
            m: 6
        }, c = [];
        u.is(a, Y) && u.is(a[0], Y) && (c = Qb(a)), c.length || L(a).replace(sb, function(a, b, d) {
            var e = [], f = P.call(b);
            d.replace(tb, function(a, b) {
                b && e.push(+b);
            }), c.push([ b ][H](e));
        }), c.toString = u._path2string;
        return c;
    });
    var Ob = function(a) {
        var b = Ob.ps = Ob.ps || {};
        b[a] ? b[a].sleep = 100 : b[a] = {
            sleep: 100
        }, setTimeout(function() {
            for (var c in b) b[A](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c]);
        });
        return b[a];
    };
    u.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i, k = U(j, 3), l = U(j, 2), m = i * i, n = m * i, o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g, p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h, q = a + 2 * i * (c - a) + m * (e - 2 * c + a), r = b + 2 * i * (d - b) + m * (f - 2 * d + b), s = c + 2 * i * (e - c) + m * (g - 2 * e + c), t = d + 2 * i * (f - d) + m * (h - 2 * f + d), u = j * a + i * c, v = j * b + i * d, w = j * e + i * g, x = j * f + i * h, y = 90 - 180 * Q.atan2(q - s, r - t) / V;
        (q > s || r < t) && (y += 180);
        return {
            x: o,
            y: p,
            m: {
                x: q,
                y: r
            },
            n: {
                x: s,
                y: t
            },
            start: {
                x: u,
                y: v
            },
            end: {
                x: w,
                y: x
            },
            alpha: y
        };
    }, u.bezierBBox = function(a, b, c, d, e, f, g, h) {
        u.is(a, "array") || (a = [ a, b, c, d, e, f, g, h ]);
        var i = Xb.apply(null, a);
        return {
            x: i.min.x,
            y: i.min.y,
            x2: i.max.x,
            y2: i.max.y,
            width: i.max.x - i.min.x,
            height: i.max.y - i.min.y
        };
    }, u.isPointInsideBBox = function(a, b, c) {
        return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2;
    }, u.isBBoxIntersect = function(a, b) {
        var c = u.isPointInsideBBox;
        return c(b, a.x, a.y) || c(b, a.x2, a.y) || c(b, a.x, a.y2) || c(b, a.x2, a.y2) || c(a, b.x, b.y) || c(a, b.x2, b.y) || c(a, b.x, b.y2) || c(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y);
    }, u.pathIntersection = function(a, b) {
        return h(a, b);
    }, u.pathIntersectionNumber = function(a, b) {
        return h(a, b, 1);
    }, u.isPointInsidePath = function(a, b, c) {
        var d = u.pathBBox(a);
        return u.isPointInsideBBox(d, b, c) && h(a, [ [ "M", b, c ], [ "H", d.x2 + 10 ] ], 1) % 2 == 1;
    }, u._removedFactory = function(a) {
        return function() {
            eve("raphael.log", null, "Rapha??l: you are calling to method ???" + a + "??? of removed object", a);
        };
    };
    var Pb = u.pathBBox = function(a) {
        var b = Ob(a);
        if (b.bbox) return b.bbox;
        if (!a) return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            x2: 0,
            y2: 0
        };
        a = Yb(a);
        var c = 0, d = 0, e = [], f = [], g;
        for (var h = 0, i = a.length; h < i; h++) {
            g = a[h];
            if ("M" == g[0]) c = g[1], d = g[2], e.push(c), f.push(d); else {
                var j = Xb(c, d, g[1], g[2], g[3], g[4], g[5], g[6]);
                e = e[H](j.min.x, j.max.x), f = f[H](j.min.y, j.max.y), c = g[5], d = g[6];
            }
        }
        var k = S[G](0, e), l = S[G](0, f), m = R[G](0, e), n = R[G](0, f), o = {
            x: k,
            y: l,
            x2: m,
            y2: n,
            width: m - k,
            height: n - l
        };
        b.bbox = t(o);
        return o;
    }, Qb = function(a) {
        var b = t(a);
        b.toString = u._path2string;
        return b;
    }, Rb = u._pathToRelative = function(a) {
        var b = Ob(a);
        if (b.rel) return Qb(b.rel);
        if (!u.is(a, Y) || !u.is(a && a[0], Y)) a = u.parsePathString(a);
        var c = [], d = 0, e = 0, f = 0, g = 0, h = 0;
        "M" == a[0][0] && (d = a[0][1], e = a[0][2], f = d, g = e, h++, c.push([ "M", d, e ]));
        for (var i = h, j = a.length; i < j; i++) {
            var k = c[i] = [], l = a[i];
            if (l[0] != P.call(l[0])) {
                k[0] = P.call(l[0]);
                switch (k[0]) {
                  case "a":
                    k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] - d).toFixed(3), 
                    k[7] = +(l[7] - e).toFixed(3);
                    break;

                  case "v":
                    k[1] = +(l[1] - e).toFixed(3);
                    break;

                  case "m":
                    f = l[1], g = l[2];

                  default:
                    for (var m = 1, n = l.length; m < n; m++) k[m] = +(l[m] - (m % 2 ? d : e)).toFixed(3);
                }
            } else {
                k = c[i] = [], "m" == l[0] && (f = l[1] + d, g = l[2] + e);
                for (var o = 0, p = l.length; o < p; o++) c[i][o] = l[o];
            }
            var q = c[i].length;
            switch (c[i][0]) {
              case "z":
                d = f, e = g;
                break;

              case "h":
                d += +c[i][q - 1];
                break;

              case "v":
                e += +c[i][q - 1];
                break;

              default:
                d += +c[i][q - 2], e += +c[i][q - 1];
            }
        }
        c.toString = u._path2string, b.rel = Qb(c);
        return c;
    }, Sb = u._pathToAbsolute = function(a) {
        var b = Ob(a);
        if (b.abs) return Qb(b.abs);
        if (!u.is(a, Y) || !u.is(a && a[0], Y)) a = u.parsePathString(a);
        if (!a || !a.length) return [ [ "M", 0, 0 ] ];
        var c = [], d = 0, e = 0, f = 0, g = 0, h = 0;
        "M" == a[0][0] && (d = +a[0][1], e = +a[0][2], f = d, g = e, h++, c[0] = [ "M", d, e ]);
        var i = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase();
        for (var j, k, l = h, m = a.length; l < m; l++) {
            c.push(j = []), k = a[l];
            if (k[0] != kb.call(k[0])) {
                j[0] = kb.call(k[0]);
                switch (j[0]) {
                  case "A":
                    j[1] = k[1], j[2] = k[2], j[3] = k[3], j[4] = k[4], j[5] = k[5], j[6] = +(k[6] + d), 
                    j[7] = +(k[7] + e);
                    break;

                  case "V":
                    j[1] = +k[1] + e;
                    break;

                  case "H":
                    j[1] = +k[1] + d;
                    break;

                  case "R":
                    var n = [ d, e ][H](k.slice(1));
                    for (var o = 2, q = n.length; o < q; o++) n[o] = +n[o] + d, n[++o] = +n[o] + e;
                    c.pop(), c = c[H](p(n, i));
                    break;

                  case "M":
                    f = +k[1] + d, g = +k[2] + e;

                  default:
                    for (o = 1, q = k.length; o < q; o++) j[o] = +k[o] + (o % 2 ? d : e);
                }
            } else if ("R" == k[0]) n = [ d, e ][H](k.slice(1)), c.pop(), c = c[H](p(n, i)), 
            j = [ "R" ][H](k.slice(-2)); else for (var r = 0, s = k.length; r < s; r++) j[r] = k[r];
            switch (j[0]) {
              case "Z":
                d = f, e = g;
                break;

              case "H":
                d = j[1];
                break;

              case "V":
                e = j[1];
                break;

              case "M":
                f = j[j.length - 2], g = j[j.length - 1];

              default:
                d = j[j.length - 2], e = j[j.length - 1];
            }
        }
        c.toString = u._path2string, b.abs = Qb(c);
        return c;
    }, Tb = function(a, b, c, d) {
        return [ a, b, c, d, c, d ];
    }, Ub = function(a, b, c, d, e, f) {
        var g = 1 / 3, h = 2 / 3;
        return [ g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f ];
    }, Vb = function(a, b, c, d, e, f, g, h, i, j) {
        var k = 120 * V / 180, l = V / 180 * (+e || 0), m = [], n, o = r(function(a, b, c) {
            var d = a * Q.cos(c) - b * Q.sin(c), e = a * Q.sin(c) + b * Q.cos(c);
            return {
                x: d,
                y: e
            };
        });
        if (!j) {
            n = o(a, b, -l), a = n.x, b = n.y, n = o(h, i, -l), h = n.x, i = n.y;
            var p = Q.cos(V / 180 * e), q = Q.sin(V / 180 * e), s = (a - h) / 2, t = (b - i) / 2, u = s * s / (c * c) + t * t / (d * d);
            u > 1 && (u = Q.sqrt(u), c = u * c, d = u * d);
            var v = c * c, w = d * d, x = (f == g ? -1 : 1) * Q.sqrt(T((v * w - v * t * t - w * s * s) / (v * t * t + w * s * s))), y = x * c * t / d + (a + h) / 2, z = x * -d * s / c + (b + i) / 2, A = Q.asin(((b - z) / d).toFixed(9)), B = Q.asin(((i - z) / d).toFixed(9));
            A = a < y ? V - A : A, B = h < y ? V - B : B, A < 0 && (A = 2 * V + A), B < 0 && (B = 2 * V + B), 
            g && A > B && (A -= 2 * V), !g && B > A && (B -= 2 * V);
        } else A = j[0], B = j[1], y = j[2], z = j[3];
        var C = B - A;
        if (T(C) > k) {
            var D = B, E = h, F = i;
            B = A + k * (g && B > A ? 1 : -1), h = y + c * Q.cos(B), i = z + d * Q.sin(B), m = Vb(h, i, c, d, e, 0, g, E, F, [ B, D, y, z ]);
        }
        C = B - A;
        var G = Q.cos(A), I = Q.sin(A), J = Q.cos(B), K = Q.sin(B), L = Q.tan(C / 4), N = 4 / 3 * c * L, O = 4 / 3 * d * L, P = [ a, b ], R = [ a + N * I, b - O * G ], S = [ h + N * K, i - O * J ], U = [ h, i ];
        R[0] = 2 * P[0] - R[0], R[1] = 2 * P[1] - R[1];
        if (j) return [ R, S, U ][H](m);
        m = [ R, S, U ][H](m).join()[M](",");
        var W = [];
        for (var X = 0, Y = m.length; X < Y; X++) W[X] = X % 2 ? o(m[X - 1], m[X], l).y : o(m[X], m[X + 1], l).x;
        return W;
    }, Wb = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i;
        return {
            x: U(j, 3) * a + 3 * U(j, 2) * i * c + 3 * j * i * i * e + U(i, 3) * g,
            y: U(j, 3) * b + 3 * U(j, 2) * i * d + 3 * j * i * i * f + U(i, 3) * h
        };
    }, Xb = r(function(a, b, c, d, e, f, g, h) {
        var i = e - 2 * c + a - (g - 2 * e + c), j = 2 * (c - a) - 2 * (e - c), k = a - c, l = (-j + Q.sqrt(j * j - 4 * i * k)) / 2 / i, m = (-j - Q.sqrt(j * j - 4 * i * k)) / 2 / i, n = [ b, h ], o = [ a, g ], p;
        T(l) > "1e12" && (l = .5), T(m) > "1e12" && (m = .5), l > 0 && l < 1 && (p = Wb(a, b, c, d, e, f, g, h, l), 
        o.push(p.x), n.push(p.y)), m > 0 && m < 1 && (p = Wb(a, b, c, d, e, f, g, h, m), 
        o.push(p.x), n.push(p.y)), i = f - 2 * d + b - (h - 2 * f + d), j = 2 * (d - b) - 2 * (f - d), 
        k = b - d, l = (-j + Q.sqrt(j * j - 4 * i * k)) / 2 / i, m = (-j - Q.sqrt(j * j - 4 * i * k)) / 2 / i, 
        T(l) > "1e12" && (l = .5), T(m) > "1e12" && (m = .5), l > 0 && l < 1 && (p = Wb(a, b, c, d, e, f, g, h, l), 
        o.push(p.x), n.push(p.y)), m > 0 && m < 1 && (p = Wb(a, b, c, d, e, f, g, h, m), 
        o.push(p.x), n.push(p.y));
        return {
            min: {
                x: S[G](0, o),
                y: S[G](0, n)
            },
            max: {
                x: R[G](0, o),
                y: R[G](0, n)
            }
        };
    }), Yb = u._path2curve = r(function(a, b) {
        var c = !b && Ob(a);
        if (!b && c.curve) return Qb(c.curve);
        var d = Sb(a), e = b && Sb(b), f = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }, g = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }, h = function(a, b) {
            var c, d;
            if (!a) return [ "C", b.x, b.y, b.x, b.y, b.x, b.y ];
            !(a[0] in {
                T: 1,
                Q: 1
            }) && (b.qx = b.qy = null);
            switch (a[0]) {
              case "M":
                b.X = a[1], b.Y = a[2];
                break;

              case "A":
                a = [ "C" ][H](Vb[G](0, [ b.x, b.y ][H](a.slice(1))));
                break;

              case "S":
                c = b.x + (b.x - (b.bx || b.x)), d = b.y + (b.y - (b.by || b.y)), a = [ "C", c, d ][H](a.slice(1));
                break;

              case "T":
                b.qx = b.x + (b.x - (b.qx || b.x)), b.qy = b.y + (b.y - (b.qy || b.y)), a = [ "C" ][H](Ub(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                break;

              case "Q":
                b.qx = a[1], b.qy = a[2], a = [ "C" ][H](Ub(b.x, b.y, a[1], a[2], a[3], a[4]));
                break;

              case "L":
                a = [ "C" ][H](Tb(b.x, b.y, a[1], a[2]));
                break;

              case "H":
                a = [ "C" ][H](Tb(b.x, b.y, a[1], b.y));
                break;

              case "V":
                a = [ "C" ][H](Tb(b.x, b.y, b.x, a[1]));
                break;

              case "Z":
                a = [ "C" ][H](Tb(b.x, b.y, b.X, b.Y));
            }
            return a;
        }, i = function(a, b) {
            if (a[b].length > 7) {
                a[b].shift();
                var c = a[b];
                while (c.length) a.splice(b++, 0, [ "C" ][H](c.splice(0, 6)));
                a.splice(b, 1), l = R(d.length, e && e.length || 0);
            }
        }, j = function(a, b, c, f, g) {
            a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, [ "M", f.x, f.y ]), 
            c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], l = R(d.length, e && e.length || 0));
        };
        for (var k = 0, l = R(d.length, e && e.length || 0); k < l; k++) {
            d[k] = h(d[k], f), i(d, k), e && (e[k] = h(e[k], g)), e && i(e, k), j(d, e, f, g, k), 
            j(e, d, g, f, k);
            var m = d[k], n = e && e[k], o = m.length, p = e && n.length;
            f.x = m[o - 2], f.y = m[o - 1], f.bx = ib(m[o - 4]) || f.x, f.by = ib(m[o - 3]) || f.y, 
            g.bx = e && (ib(n[p - 4]) || g.x), g.by = e && (ib(n[p - 3]) || g.y), g.x = e && n[p - 2], 
            g.y = e && n[p - 1];
        }
        e || (c.curve = Qb(d));
        return e ? [ d, e ] : d;
    }, null, Qb), Zb = u._parseDots = r(function(a) {
        var b = [];
        for (var c = 0, d = a.length; c < d; c++) {
            var e = {}, f = a[c].match(/^([^:]*):?([\d\.]*)/);
            e.color = u.getRGB(f[1]);
            if (e.color.error) return null;
            e.color = e.color.hex, f[2] && (e.offset = f[2] + "%"), b.push(e);
        }
        for (c = 1, d = b.length - 1; c < d; c++) if (!b[c].offset) {
            var g = ib(b[c - 1].offset || 0), h = 0;
            for (var i = c + 1; i < d; i++) if (b[i].offset) {
                h = b[i].offset;
                break;
            }
            h || (h = 100, i = d), h = ib(h);
            var j = (h - g) / (i - c + 1);
            for (;c < i; c++) g += j, b[c].offset = g + "%";
        }
        return b;
    }), $b = u._tear = function(a, b) {
        a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), 
        a.prev && (a.prev.next = a.next);
    }, _b = u._tofront = function(a, b) {
        b.top !== a && ($b(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a);
    }, ac = u._toback = function(a, b) {
        b.bottom !== a && ($b(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, 
        b.bottom = a);
    }, bc = u._insertafter = function(a, b, c) {
        $b(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, 
        a.prev = b, b.next = a;
    }, cc = u._insertbefore = function(a, b, c) {
        $b(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, 
        b.prev = a, a.next = b;
    }, dc = u.toMatrix = function(a, b) {
        var c = Pb(a), d = {
            _: {
                transform: J
            },
            getBBox: function() {
                return c;
            }
        };
        fc(d, b);
        return d.matrix;
    }, ec = u.transformPath = function(a, b) {
        return Db(a, dc(a, b));
    }, fc = u._extractTransform = function(a, b) {
        if (null == b) return a._.transform;
        b = L(b).replace(/\.{3}|\u2026/g, a._.transform || J);
        var c = u.parseTransformString(b), d = 0, e = 0, f = 0, h = 1, i = 1, j = a._, k = new g();
        j.transform = c || [];
        if (c) for (var l = 0, m = c.length; l < m; l++) {
            var n = c[l], o = n.length, p = L(n[0]).toLowerCase(), q = n[0] != p, r = q ? k.invert() : 0, s, t, v, w, x;
            "t" == p && 3 == o ? q ? (s = r.x(0, 0), t = r.y(0, 0), v = r.x(n[1], n[2]), w = r.y(n[1], n[2]), 
            k.translate(v - s, w - t)) : k.translate(n[1], n[2]) : "r" == p ? 2 == o ? (x = x || a.getBBox(1), 
            k.rotate(n[1], x.x + x.width / 2, x.y + x.height / 2), d += n[1]) : 4 == o && (q ? (v = r.x(n[2], n[3]), 
            w = r.y(n[2], n[3]), k.rotate(n[1], v, w)) : k.rotate(n[1], n[2], n[3]), d += n[1]) : "s" == p ? 2 == o || 3 == o ? (x = x || a.getBBox(1), 
            k.scale(n[1], n[o - 1], x.x + x.width / 2, x.y + x.height / 2), h *= n[1], i *= n[o - 1]) : 5 == o && (q ? (v = r.x(n[3], n[4]), 
            w = r.y(n[3], n[4]), k.scale(n[1], n[2], v, w)) : k.scale(n[1], n[2], n[3], n[4]), 
            h *= n[1], i *= n[2]) : "m" == p && 7 == o && k.add(n[1], n[2], n[3], n[4], n[5], n[6]), 
            j.dirtyT = 1, a.matrix = k;
        }
        a.matrix = k, j.sx = h, j.sy = i, j.deg = d, j.dx = e = k.e, j.dy = f = k.f, 1 == h && 1 == i && !d && j.bbox ? (j.bbox.x += +e, 
        j.bbox.y += +f) : j.dirtyT = 1;
    }, gc = function(a) {
        var b = a[0];
        switch (b.toLowerCase()) {
          case "t":
            return [ b, 0, 0 ];

          case "m":
            return [ b, 1, 0, 0, 1, 0, 0 ];

          case "r":
            return 4 == a.length ? [ b, 0, a[2], a[3] ] : [ b, 0 ];

          case "s":
            return 5 == a.length ? [ b, 1, 1, a[3], a[4] ] : 3 == a.length ? [ b, 1, 1 ] : [ b, 1 ];
        }
    }, hc = u._equaliseTransform = function(a, b) {
        b = L(b).replace(/\.{3}|\u2026/g, a), a = u.parseTransformString(a) || [], b = u.parseTransformString(b) || [];
        var c = R(a.length, b.length), d = [], e = [], f = 0, g, h, i, j;
        for (;f < c; f++) {
            i = a[f] || gc(b[f]), j = b[f] || gc(i);
            if (i[0] != j[0] || "r" == i[0].toLowerCase() && (i[2] != j[2] || i[3] != j[3]) || "s" == i[0].toLowerCase() && (i[3] != j[3] || i[4] != j[4])) return;
            d[f] = [], e[f] = [];
            for (g = 0, h = R(i.length, j.length); g < h; g++) g in i && (d[f][g] = i[g]), g in j && (e[f][g] = j[g]);
        }
        return {
            from: d,
            to: e
        };
    };
    u._getContainer = function(a, b, c, d) {
        var e;
        e = null == d && !u.is(a, "object") ? B.doc.getElementById(a) : a;
        if (null != e) {
            if (e.tagName) return null == b ? {
                container: e,
                width: e.style.pixelWidth || e.offsetWidth,
                height: e.style.pixelHeight || e.offsetHeight
            } : {
                container: e,
                width: b,
                height: c
            };
            return {
                container: 1,
                x: a,
                y: b,
                width: c,
                height: d
            };
        }
    }, u.pathToRelative = Rb, u._engine = {}, u.path2curve = Yb, u.matrix = function(a, b, c, d, e, f) {
        return new g(a, b, c, d, e, f);
    }, function(a) {
        function b(a) {
            var b = Q.sqrt(c(a));
            a[0] && (a[0] /= b), a[1] && (a[1] /= b);
        }
        function c(a) {
            return a[0] * a[0] + a[1] * a[1];
        }
        a.add = function(a, b, c, d, e, f) {
            var h = [ [], [], [] ], i = [ [ this.a, this.c, this.e ], [ this.b, this.d, this.f ], [ 0, 0, 1 ] ], j = [ [ a, c, e ], [ b, d, f ], [ 0, 0, 1 ] ], k, l, m, n;
            a && a instanceof g && (j = [ [ a.a, a.c, a.e ], [ a.b, a.d, a.f ], [ 0, 0, 1 ] ]);
            for (k = 0; k < 3; k++) for (l = 0; l < 3; l++) {
                n = 0;
                for (m = 0; m < 3; m++) n += i[k][m] * j[m][l];
                h[k][l] = n;
            }
            this.a = h[0][0], this.b = h[1][0], this.c = h[0][1], this.d = h[1][1], this.e = h[0][2], 
            this.f = h[1][2];
        }, a.invert = function() {
            var a = this, b = a.a * a.d - a.b * a.c;
            return new g(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b);
        }, a.clone = function() {
            return new g(this.a, this.b, this.c, this.d, this.e, this.f);
        }, a.translate = function(a, b) {
            this.add(1, 0, 0, 1, a, b);
        }, a.scale = function(a, b, c, d) {
            null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), 
            (c || d) && this.add(1, 0, 0, 1, -c, -d);
        }, a.rotate = function(a, b, c) {
            a = u.rad(a), b = b || 0, c = c || 0;
            var d = +Q.cos(a).toFixed(9), e = +Q.sin(a).toFixed(9);
            this.add(d, e, -e, d, b, c), this.add(1, 0, 0, 1, -b, -c);
        }, a.x = function(a, b) {
            return a * this.a + b * this.c + this.e;
        }, a.y = function(a, b) {
            return a * this.b + b * this.d + this.f;
        }, a.get = function(a) {
            return +this[L.fromCharCode(97 + a)].toFixed(4);
        }, a.toString = function() {
            return u.svg ? "matrix(" + [ this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5) ].join() + ")" : [ this.get(0), this.get(2), this.get(1), this.get(3), 0, 0 ].join();
        }, a.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
        }, a.offset = function() {
            return [ this.e.toFixed(4), this.f.toFixed(4) ];
        }, a.split = function() {
            var a = {};
            a.dx = this.e, a.dy = this.f;
            var d = [ [ this.a, this.c ], [ this.b, this.d ] ];
            a.scalex = Q.sqrt(c(d[0])), b(d[0]), a.shear = d[0][0] * d[1][0] + d[0][1] * d[1][1], 
            d[1] = [ d[1][0] - d[0][0] * a.shear, d[1][1] - d[0][1] * a.shear ], a.scaley = Q.sqrt(c(d[1])), 
            b(d[1]), a.shear /= a.scaley;
            var e = -d[0][1], f = d[1][1];
            f < 0 ? (a.rotate = u.deg(Q.acos(f)), e < 0 && (a.rotate = 360 - a.rotate)) : a.rotate = u.deg(Q.asin(e)), 
            a.isSimple = !+a.shear.toFixed(9) && (a.scalex.toFixed(9) == a.scaley.toFixed(9) || !a.rotate), 
            a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, 
            a.noRotation = !+a.shear.toFixed(9) && !a.rotate;
            return a;
        }, a.toTransformString = function(a) {
            var b = a || this[M]();
            if (b.isSimple) {
                b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4);
                return (b.dx || b.dy ? "t" + [ b.dx, b.dy ] : J) + (1 != b.scalex || 1 != b.scaley ? "s" + [ b.scalex, b.scaley, 0, 0 ] : J) + (b.rotate ? "r" + [ b.rotate, 0, 0 ] : J);
            }
            return "m" + [ this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5) ];
        };
    }(g.prototype);
    var ic = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    "Apple Computer, Inc." == navigator.vendor && (ic && ic[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && ic && ic[1] < 8 ? E.safari = function() {
        var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function() {
            a.remove();
        });
    } : E.safari = yb;
    var jc = function() {
        this.returnValue = !1;
    }, kc = function() {
        return this.originalEvent.preventDefault();
    }, lc = function() {
        this.cancelBubble = !0;
    }, mc = function() {
        return this.originalEvent.stopPropagation();
    }, nc = function() {
        if (B.doc.addEventListener) return function(a, b, c, d) {
            var e = I && O[b] ? O[b] : b, f = function(e) {
                var f = B.doc.documentElement.scrollTop || B.doc.body.scrollTop, g = B.doc.documentElement.scrollLeft || B.doc.body.scrollLeft, h = e.clientX + g, i = e.clientY + f;
                if (I && O[A](b)) for (var j = 0, k = e.targetTouches && e.targetTouches.length; j < k; j++) if (e.targetTouches[j].target == a) {
                    var l = e;
                    e = e.targetTouches[j], e.originalEvent = l, e.preventDefault = kc, e.stopPropagation = mc;
                    break;
                }
                return c.call(d, e, h, i);
            };
            a.addEventListener(e, f, !1);
            return function() {
                a.removeEventListener(e, f, !1);
                return !0;
            };
        };
        if (B.doc.attachEvent) return function(a, b, c, d) {
            var e = function(a) {
                a = a || B.win.event;
                var b = B.doc.documentElement.scrollTop || B.doc.body.scrollTop, e = B.doc.documentElement.scrollLeft || B.doc.body.scrollLeft, f = a.clientX + e, g = a.clientY + b;
                a.preventDefault = a.preventDefault || jc, a.stopPropagation = a.stopPropagation || lc;
                return c.call(d, a, f, g);
            };
            a.attachEvent("on" + b, e);
            var f = function() {
                a.detachEvent("on" + b, e);
                return !0;
            };
            return f;
        };
    }(), oc = [], pc = function(a) {
        var b = a.clientX, c = a.clientY, d = B.doc.documentElement.scrollTop || B.doc.body.scrollTop, e = B.doc.documentElement.scrollLeft || B.doc.body.scrollLeft, f, g = oc.length;
        while (g--) {
            f = oc[g];
            if (I) {
                var h = a.touches.length, i;
                while (h--) {
                    i = a.touches[h];
                    if (i.identifier == f.el._drag.id) {
                        b = i.clientX, c = i.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                        break;
                    }
                }
            } else a.preventDefault();
            var j = f.el.node, k, l = j.nextSibling, m = j.parentNode, n = j.style.display;
            B.win.opera && m.removeChild(j), j.style.display = "none", k = f.el.paper.getElementByPoint(b, c), 
            j.style.display = n, B.win.opera && (l ? m.insertBefore(j, l) : m.appendChild(j)), 
            k && eve("raphael.drag.over." + f.el.id, f.el, k), b += e, c += d, eve("raphael.drag.move." + f.el.id, f.move_scope || f.el, b - f.el._drag.x, c - f.el._drag.y, b, c, a);
        }
    }, qc = function(a) {
        u.unmousemove(pc).unmouseup(qc);
        var b = oc.length, c;
        while (b--) c = oc[b], c.el._drag = {}, eve("raphael.drag.end." + c.el.id, c.end_scope || c.start_scope || c.move_scope || c.el, a);
        oc = [];
    }, rc = u.el = {};
    for (var sc = N.length; sc--; ) (function(a) {
        u[a] = rc[a] = function(b, c) {
            u.is(b, "function") && (this.events = this.events || [], this.events.push({
                name: a,
                f: b,
                unbind: nc(this.shape || this.node || B.doc, a, b, c || this)
            }));
            return this;
        }, u["un" + a] = rc["un" + a] = function(b) {
            var c = this.events || [], d = c.length;
            while (d--) if (c[d].name == a && c[d].f == b) {
                c[d].unbind(), c.splice(d, 1), !c.length && delete this.events;
                return this;
            }
            return this;
        };
    })(N[sc]);
    rc.data = function(a, b) {
        var c = vb[this.id] = vb[this.id] || {};
        if (1 == arguments.length) {
            if (u.is(a, "object")) {
                for (var d in a) a[A](d) && this.data(d, a[d]);
                return this;
            }
            eve("raphael.data.get." + this.id, this, c[a], a);
            return c[a];
        }
        c[a] = b, eve("raphael.data.set." + this.id, this, b, a);
        return this;
    }, rc.removeData = function(a) {
        null == a ? vb[this.id] = {} : vb[this.id] && delete vb[this.id][a];
        return this;
    }, rc.hover = function(a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c);
    }, rc.unhover = function(a, b) {
        return this.unmouseover(a).unmouseout(b);
    };
    var tc = [];
    rc.drag = function(a, b, c, d, e, f) {
        function g(g) {
            (g.originalEvent || g).preventDefault();
            var h = B.doc.documentElement.scrollTop || B.doc.body.scrollTop, i = B.doc.documentElement.scrollLeft || B.doc.body.scrollLeft;
            this._drag.x = g.clientX + i, this._drag.y = g.clientY + h, this._drag.id = g.identifier, 
            !oc.length && u.mousemove(pc).mouseup(qc), oc.push({
                el: this,
                move_scope: d,
                start_scope: e,
                end_scope: f
            }), b && eve.on("raphael.drag.start." + this.id, b), a && eve.on("raphael.drag.move." + this.id, a), 
            c && eve.on("raphael.drag.end." + this.id, c), eve("raphael.drag.start." + this.id, e || d || this, g.clientX + i, g.clientY + h, g);
        }
        this._drag = {}, tc.push({
            el: this,
            start: g
        }), this.mousedown(g);
        return this;
    }, rc.onDragOver = function(a) {
        a ? eve.on("raphael.drag.over." + this.id, a) : eve.unbind("raphael.drag.over." + this.id);
    }, rc.undrag = function() {
        var a = tc.length;
        while (a--) tc[a].el == this && (this.unmousedown(tc[a].start), tc.splice(a, 1), 
        eve.unbind("raphael.drag.*." + this.id));
        !tc.length && u.unmousemove(pc).unmouseup(qc);
    }, E.circle = function(a, b, c) {
        var d = u._engine.circle(this, a || 0, b || 0, c || 0);
        this.__set__ && this.__set__.push(d);
        return d;
    }, E.rect = function(a, b, c, d, e) {
        var f = u._engine.rect(this, a || 0, b || 0, c || 0, d || 0, e || 0);
        this.__set__ && this.__set__.push(f);
        return f;
    }, E.ellipse = function(a, b, c, d) {
        var e = u._engine.ellipse(this, a || 0, b || 0, c || 0, d || 0);
        this.__set__ && this.__set__.push(e);
        return e;
    }, E.path = function(a) {
        a && !u.is(a, X) && !u.is(a[0], Y) && (a += J);
        var b = u._engine.path(u.format[G](u, arguments), this);
        this.__set__ && this.__set__.push(b);
        return b;
    }, E.image = function(a, b, c, d, e) {
        var f = u._engine.image(this, a || "about:blank", b || 0, c || 0, d || 0, e || 0);
        this.__set__ && this.__set__.push(f);
        return f;
    }, E.text = function(a, b, c) {
        var d = u._engine.text(this, a || 0, b || 0, L(c));
        this.__set__ && this.__set__.push(d);
        return d;
    }, E.set = function(a) {
        !u.is(a, "array") && (a = Array.prototype.splice.call(arguments, 0, arguments.length));
        var b = new Gc(a);
        this.__set__ && this.__set__.push(b);
        return b;
    }, E.setStart = function(a) {
        this.__set__ = a || this.set();
    }, E.setFinish = function(a) {
        var b = this.__set__;
        delete this.__set__;
        return b;
    }, E.setSize = function(a, b) {
        return u._engine.setSize.call(this, a, b);
    }, E.setViewBox = function(a, b, c, d, e) {
        return u._engine.setViewBox.call(this, a, b, c, d, e);
    }, E.top = E.bottom = null, E.raphael = u;
    var uc = function(a) {
        var b = a.getBoundingClientRect(), c = a.ownerDocument, d = c.body, e = c.documentElement, f = e.clientTop || d.clientTop || 0, g = e.clientLeft || d.clientLeft || 0, h = b.top + (B.win.pageYOffset || e.scrollTop || d.scrollTop) - f, i = b.left + (B.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
        return {
            y: h,
            x: i
        };
    };
    E.getElementByPoint = function(a, b) {
        var c = this, d = c.canvas, e = B.doc.elementFromPoint(a, b);
        if (B.win.opera && "svg" == e.tagName) {
            var f = uc(d), g = d.createSVGRect();
            g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
            var h = d.getIntersectionList(g, null);
            h.length && (e = h[h.length - 1]);
        }
        if (!e) return null;
        while (e.parentNode && e != d.parentNode && !e.raphael) e = e.parentNode;
        e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null;
        return e;
    }, E.getById = function(a) {
        var b = this.bottom;
        while (b) {
            if (b.id == a) return b;
            b = b.next;
        }
        return null;
    }, E.forEach = function(a, b) {
        var c = this.bottom;
        while (c) {
            if (a.call(b, c) === !1) return this;
            c = c.next;
        }
        return this;
    }, E.getElementsByPoint = function(a, b) {
        var c = this.set();
        this.forEach(function(d) {
            d.isPointInside(a, b) && c.push(d);
        });
        return c;
    }, rc.isPointInside = function(a, b) {
        var c = this.realPath = this.realPath || Cb[this.type](this);
        return u.isPointInsidePath(c, a, b);
    }, rc.getBBox = function(a) {
        if (this.removed) return {};
        var b = this._;
        if (a) {
            if (b.dirty || !b.bboxwt) this.realPath = Cb[this.type](this), b.bboxwt = Pb(this.realPath), 
            b.bboxwt.toString = e, b.dirty = 0;
            return b.bboxwt;
        }
        if (b.dirty || b.dirtyT || !b.bbox) {
            if (b.dirty || !this.realPath) b.bboxwt = 0, this.realPath = Cb[this.type](this);
            b.bbox = Pb(Db(this.realPath, this.matrix)), b.bbox.toString = e, b.dirty = b.dirtyT = 0;
        }
        return b.bbox;
    }, rc.clone = function() {
        if (this.removed) return null;
        var a = this.paper[this.type]().attr(this.attr());
        this.__set__ && this.__set__.push(a);
        return a;
    }, rc.glow = function(a) {
        if ("text" == this.type) return null;
        a = a || {};
        var b = {
            width: (a.width || 10) + (+this.attr("stroke-width") || 1),
            fill: a.fill || !1,
            opacity: a.opacity || .5,
            offsetx: a.offsetx || 0,
            offsety: a.offsety || 0,
            color: a.color || "#000"
        }, c = b.width / 2, d = this.paper, e = d.set(), f = this.realPath || Cb[this.type](this);
        f = this.matrix ? Db(f, this.matrix) : f;
        for (var g = 1; g < c + 1; g++) e.push(d.path(f).attr({
            stroke: b.color,
            fill: b.fill ? b.color : "none",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": +(b.width / c * g).toFixed(3),
            opacity: +(b.opacity / c).toFixed(3)
        }));
        return e.insertBefore(this).translate(b.offsetx, b.offsety);
    };
    var vc = {}, wc = function(a, b, c, d, e, f, g, h, i) {
        return null == i ? n(a, b, c, d, e, f, g, h) : u.findDotsAtSegment(a, b, c, d, e, f, g, h, m(a, b, c, d, e, f, g, h, i));
    }, xc = function(a, b) {
        return function(c, d, e) {
            c = Yb(c);
            var f, g, h, i, j = "", k = {}, l, m = 0;
            for (var n = 0, o = c.length; n < o; n++) {
                h = c[n];
                if ("M" == h[0]) f = +h[1], g = +h[2]; else {
                    i = wc(f, g, h[1], h[2], h[3], h[4], h[5], h[6]);
                    if (m + i > d) {
                        if (b && !k.start) {
                            l = wc(f, g, h[1], h[2], h[3], h[4], h[5], h[6], d - m), j += [ "C" + l.start.x, l.start.y, l.m.x, l.m.y, l.x, l.y ];
                            if (e) return j;
                            k.start = j, j = [ "M" + l.x, l.y + "C" + l.n.x, l.n.y, l.end.x, l.end.y, h[5], h[6] ].join(), 
                            m += i, f = +h[5], g = +h[6];
                            continue;
                        }
                        if (!a && !b) {
                            l = wc(f, g, h[1], h[2], h[3], h[4], h[5], h[6], d - m);
                            return {
                                x: l.x,
                                y: l.y,
                                alpha: l.alpha
                            };
                        }
                    }
                    m += i, f = +h[5], g = +h[6];
                }
                j += h.shift() + h;
            }
            k.end = j, l = a ? m : b ? k : u.findDotsAtSegment(f, g, h[0], h[1], h[2], h[3], h[4], h[5], 1), 
            l.alpha && (l = {
                x: l.x,
                y: l.y,
                alpha: l.alpha
            });
            return l;
        };
    }, yc = xc(1), zc = xc(), Ac = xc(0, 1);
    u.getTotalLength = yc, u.getPointAtLength = zc, u.getSubpath = function(a, b, c) {
        if (this.getTotalLength(a) - c < 1e-6) return Ac(a, b).end;
        var d = Ac(a, c, 1);
        return b ? Ac(d, b).end : d;
    }, rc.getTotalLength = function() {
        if ("path" == this.type) {
            if (this.node.getTotalLength) return this.node.getTotalLength();
            return yc(this.attrs.path);
        }
    }, rc.getPointAtLength = function(a) {
        if ("path" == this.type) return zc(this.attrs.path, a);
    }, rc.getSubpath = function(a, b) {
        if ("path" == this.type) return u.getSubpath(this.attrs.path, a, b);
    };
    var Bc = u.easing_formulas = {
        linear: function(a) {
            return a;
        },
        "<": function(a) {
            return U(a, 1.7);
        },
        ">": function(a) {
            return U(a, .48);
        },
        "<>": function(a) {
            var b = .48 - a / 1.04, c = Q.sqrt(.1734 + b * b), d = c - b, e = U(T(d), 1 / 3) * (d < 0 ? -1 : 1), f = -c - b, g = U(T(f), 1 / 3) * (f < 0 ? -1 : 1), h = e + g + .5;
            return 3 * (1 - h) * h * h + h * h * h;
        },
        backIn: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b);
        },
        backOut: function(a) {
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1;
        },
        elastic: function(a) {
            if (a == !!a) return a;
            return U(2, -10 * a) * Q.sin(2 * (a - .075) * V / .3) + 1;
        },
        bounce: function(a) {
            var b = 7.5625, c = 2.75, d;
            a < 1 / c ? d = b * a * a : a < 2 / c ? (a -= 1.5 / c, d = b * a * a + .75) : a < 2.5 / c ? (a -= 2.25 / c, 
            d = b * a * a + .9375) : (a -= 2.625 / c, d = b * a * a + .984375);
            return d;
        }
    };
    Bc.easeIn = Bc["ease-in"] = Bc["<"], Bc.easeOut = Bc["ease-out"] = Bc[">"], Bc.easeInOut = Bc["ease-in-out"] = Bc["<>"], 
    Bc["back-in"] = Bc.backIn, Bc["back-out"] = Bc.backOut;
    var Cc = [], Dc = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        setTimeout(a, 16);
    }, Ec = function() {
        var a = +new Date(), c = 0;
        for (;c < Cc.length; c++) {
            var d = Cc[c];
            if (d.el.removed || d.paused) continue;
            var e = a - d.start, f = d.ms, g = d.easing, h = d.from, i = d.diff, j = d.to, k = d.t, l = d.el, m = {}, n, o = {}, p;
            d.initstatus ? (e = (d.initstatus * d.anim.top - d.prev) / (d.percent - d.prev) * f, 
            d.status = d.initstatus, delete d.initstatus, d.stop && Cc.splice(c--, 1)) : d.status = (d.prev + (d.percent - d.prev) * (e / f)) / d.anim.top;
            if (e < 0) continue;
            if (e < f) {
                var q = g(e / f);
                for (var r in h) if (h[A](r)) {
                    switch (mb[r]) {
                      case W:
                        n = +h[r] + q * f * i[r];
                        break;

                      case "colour":
                        n = "rgb(" + [ Fc(gb(h[r].r + q * f * i[r].r)), Fc(gb(h[r].g + q * f * i[r].g)), Fc(gb(h[r].b + q * f * i[r].b)) ].join(",") + ")";
                        break;

                      case "path":
                        n = [];
                        for (var s = 0, t = h[r].length; s < t; s++) {
                            n[s] = [ h[r][s][0] ];
                            for (var v = 1, w = h[r][s].length; v < w; v++) n[s][v] = +h[r][s][v] + q * f * i[r][s][v];
                            n[s] = n[s].join(K);
                        }
                        n = n.join(K);
                        break;

                      case "transform":
                        if (i[r].real) {
                            n = [];
                            for (s = 0, t = h[r].length; s < t; s++) {
                                n[s] = [ h[r][s][0] ];
                                for (v = 1, w = h[r][s].length; v < w; v++) n[s][v] = h[r][s][v] + q * f * i[r][s][v];
                            }
                        } else {
                            var x = function(a) {
                                return +h[r][a] + q * f * i[r][a];
                            };
                            n = [ [ "m", x(0), x(1), x(2), x(3), x(4), x(5) ] ];
                        }
                        break;

                      case "csv":
                        if ("clip-rect" == r) {
                            n = [], s = 4;
                            while (s--) n[s] = +h[r][s] + q * f * i[r][s];
                        }
                        break;

                      default:
                        var y = [][H](h[r]);
                        n = [], s = l.paper.customAttributes[r].length;
                        while (s--) n[s] = +y[s] + q * f * i[r][s];
                    }
                    m[r] = n;
                }
                l.attr(m), function(a, b, c) {
                    setTimeout(function() {
                        eve("raphael.anim.frame." + a, b, c);
                    });
                }(l.id, l, d.anim);
            } else {
                !function(a, b, c) {
                    setTimeout(function() {
                        eve("raphael.anim.frame." + b.id, b, c), eve("raphael.anim.finish." + b.id, b, c), 
                        u.is(a, "function") && a.call(b);
                    });
                }(d.callback, l, d.anim), l.attr(j), Cc.splice(c--, 1);
                if (d.repeat > 1 && !d.next) {
                    for (p in j) j[A](p) && (o[p] = d.totalOrigin[p]);
                    d.el.attr(o), b(d.anim, d.el, d.anim.percents[0], null, d.totalOrigin, d.repeat - 1);
                }
                d.next && !d.stop && b(d.anim, d.el, d.next, null, d.totalOrigin, d.repeat);
            }
        }
        u.svg && l && l.paper && l.paper.safari(), Cc.length && Dc(Ec);
    }, Fc = function(a) {
        return a > 255 ? 255 : a < 0 ? 0 : a;
    };
    rc.animateWith = function(a, d, e, f, g, h) {
        var i = this;
        if (i.removed) {
            h && h.call(i);
            return i;
        }
        var j = e instanceof c ? e : u.animation(e, f, g, h), k, l;
        b(j, i, j.percents[0], null, i.attr());
        for (var m = 0, n = Cc.length; m < n; m++) if (Cc[m].anim == d && Cc[m].el == a) {
            Cc[n - 1].start = Cc[m].start;
            break;
        }
        return i;
    }, rc.onAnimation = function(a) {
        a ? eve.on("raphael.anim.frame." + this.id, a) : eve.unbind("raphael.anim.frame." + this.id);
        return this;
    }, c.prototype.delay = function(a) {
        var b = new c(this.anim, this.ms);
        b.times = this.times, b.del = +a || 0;
        return b;
    }, c.prototype.repeat = function(a) {
        var b = new c(this.anim, this.ms);
        b.del = this.del, b.times = Q.floor(R(a, 0)) || 1;
        return b;
    }, u.animation = function(a, b, d, e) {
        if (a instanceof c) return a;
        if (u.is(d, "function") || !d) e = e || d || null, d = null;
        a = Object(a), b = +b || 0;
        var f = {}, g, h;
        for (h in a) a[A](h) && ib(h) != h && ib(h) + "%" != h && (g = !0, f[h] = a[h]);
        if (!g) return new c(a, b);
        d && (f.easing = d), e && (f.callback = e);
        return new c({
            100: f
        }, b);
    }, rc.animate = function(a, d, e, f) {
        var g = this;
        if (g.removed) {
            f && f.call(g);
            return g;
        }
        var h = a instanceof c ? a : u.animation(a, d, e, f);
        b(h, g, h.percents[0], null, g.attr());
        return g;
    }, rc.setTime = function(a, b) {
        a && null != b && this.status(a, S(b, a.ms) / a.ms);
        return this;
    }, rc.status = function(a, c) {
        var d = [], e = 0, f, g;
        if (null != c) {
            b(a, this, -1, S(c, 1));
            return this;
        }
        f = Cc.length;
        for (;e < f; e++) {
            g = Cc[e];
            if (g.el.id == this.id && (!a || g.anim == a)) {
                if (a) return g.status;
                d.push({
                    anim: g.anim,
                    status: g.status
                });
            }
        }
        if (a) return 0;
        return d;
    }, rc.pause = function(a) {
        for (var b = 0; b < Cc.length; b++) Cc[b].el.id == this.id && (!a || Cc[b].anim == a) && eve("raphael.anim.pause." + this.id, this, Cc[b].anim) !== !1 && (Cc[b].paused = !0);
        return this;
    }, rc.resume = function(a) {
        for (var b = 0; b < Cc.length; b++) if (Cc[b].el.id == this.id && (!a || Cc[b].anim == a)) {
            var c = Cc[b];
            eve("raphael.anim.resume." + this.id, this, c.anim) !== !1 && (delete c.paused, 
            this.status(c.anim, c.status));
        }
        return this;
    }, rc.stop = function(a) {
        for (var b = 0; b < Cc.length; b++) Cc[b].el.id == this.id && (!a || Cc[b].anim == a) && eve("raphael.anim.stop." + this.id, this, Cc[b].anim) !== !1 && Cc.splice(b--, 1);
        return this;
    }, eve.on("raphael.remove", a), eve.on("raphael.clear", a), rc.toString = function() {
        return "Rapha??l???s object";
    };
    var Gc = function(a) {
        this.items = [], this.length = 0, this.type = "set";
        if (a) for (var b = 0, c = a.length; b < c; b++) a[b] && (a[b].constructor == rc.constructor || a[b].constructor == Gc) && (this[this.items.length] = this.items[this.items.length] = a[b], 
        this.length++);
    }, Hc = Gc.prototype;
    Hc.push = function() {
        var a, b;
        for (var c = 0, d = arguments.length; c < d; c++) a = arguments[c], a && (a.constructor == rc.constructor || a.constructor == Gc) && (b = this.items.length, 
        this[b] = this.items[b] = a, this.length++);
        return this;
    }, Hc.pop = function() {
        this.length && delete this[this.length--];
        return this.items.pop();
    }, Hc.forEach = function(a, b) {
        for (var c = 0, d = this.items.length; c < d; c++) if (a.call(b, this.items[c], c) === !1) return this;
        return this;
    };
    for (var Ic in rc) rc[A](Ic) && (Hc[Ic] = function(a) {
        return function() {
            var b = arguments;
            return this.forEach(function(c) {
                c[a][G](c, b);
            });
        };
    }(Ic));
    Hc.attr = function(a, b) {
        if (a && u.is(a, Y) && u.is(a[0], "object")) for (var c = 0, d = a.length; c < d; c++) this.items[c].attr(a[c]); else for (var e = 0, f = this.items.length; e < f; e++) this.items[e].attr(a, b);
        return this;
    }, Hc.clear = function() {
        while (this.length) this.pop();
    }, Hc.splice = function(a, b, c) {
        a = a < 0 ? R(this.length + a, 0) : a, b = R(0, S(this.length - a, b));
        var d = [], e = [], f = [], g;
        for (g = 2; g < arguments.length; g++) f.push(arguments[g]);
        for (g = 0; g < b; g++) e.push(this[a + g]);
        for (;g < this.length - a; g++) d.push(this[a + g]);
        var h = f.length;
        for (g = 0; g < h + d.length; g++) this.items[a + g] = this[a + g] = g < h ? f[g] : d[g - h];
        g = this.items.length = this.length -= b - h;
        while (this[g]) delete this[g++];
        return new Gc(e);
    }, Hc.exclude = function(a) {
        for (var b = 0, c = this.length; b < c; b++) if (this[b] == a) {
            this.splice(b, 1);
            return !0;
        }
    }, Hc.animate = function(a, b, c, d) {
        (u.is(c, "function") || !c) && (d = c || null);
        var e = this.items.length, f = e, g, h = this, i;
        if (!e) return this;
        d && (i = function() {
            !--e && d.call(h);
        }), c = u.is(c, X) ? c : i;
        var j = u.animation(a, b, c, i);
        g = this.items[--f].animate(j);
        while (f--) this.items[f] && !this.items[f].removed && this.items[f].animateWith(g, j, j);
        return this;
    }, Hc.insertAfter = function(a) {
        var b = this.items.length;
        while (b--) this.items[b].insertAfter(a);
        return this;
    }, Hc.getBBox = function() {
        var a = [], b = [], c = [], d = [];
        for (var e = this.items.length; e--; ) if (!this.items[e].removed) {
            var f = this.items[e].getBBox();
            a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height);
        }
        a = S[G](0, a), b = S[G](0, b), c = R[G](0, c), d = R[G](0, d);
        return {
            x: a,
            y: b,
            x2: c,
            y2: d,
            width: c - a,
            height: d - b
        };
    }, Hc.clone = function(a) {
        a = new Gc();
        for (var b = 0, c = this.items.length; b < c; b++) a.push(this.items[b].clone());
        return a;
    }, Hc.toString = function() {
        return "Rapha??l???s set";
    }, u.registerFont = function(a) {
        if (!a.face) return a;
        this.fonts = this.fonts || {};
        var b = {
            w: a.w,
            face: {},
            glyphs: {}
        }, c = a.face["font-family"];
        for (var d in a.face) a.face[A](d) && (b.face[d] = a.face[d]);
        this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [ b ];
        if (!a.svg) {
            b.face["units-per-em"] = jb(a.face["units-per-em"], 10);
            for (var e in a.glyphs) if (a.glyphs[A](e)) {
                var f = a.glyphs[e];
                b.glyphs[e] = {
                    w: f.w,
                    k: {},
                    d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
                        return {
                            l: "L",
                            c: "C",
                            x: "z",
                            t: "m",
                            r: "l",
                            v: "c"
                        }[a] || "M";
                    }) + "z"
                };
                if (f.k) for (var g in f.k) f[A](g) && (b.glyphs[e].k[g] = f.k[g]);
            }
        }
        return a;
    }, E.getFont = function(a, b, c, d) {
        d = d || "normal", c = c || "normal", b = +b || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }[b] || 400;
        if (!!u.fonts) {
            var e = u.fonts[a];
            if (!e) {
                var f = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, J) + "(\\s|$)", "i");
                for (var g in u.fonts) if (u.fonts[A](g) && f.test(g)) {
                    e = u.fonts[g];
                    break;
                }
            }
            var h;
            if (e) for (var i = 0, j = e.length; i < j; i++) {
                h = e[i];
                if (h.face["font-weight"] == b && (h.face["font-style"] == c || !h.face["font-style"]) && h.face["font-stretch"] == d) break;
            }
            return h;
        }
    }, E.print = function(a, b, c, d, e, f, g) {
        f = f || "middle", g = R(S(g || 0, 1), -1);
        var h = L(c)[M](J), i = 0, j = 0, k = J, l;
        u.is(d, c) && (d = this.getFont(d));
        if (d) {
            l = (e || 16) / d.face["units-per-em"];
            var m = d.face.bbox[M](w), n = +m[0], o = m[3] - m[1], p = 0, q = +m[1] + ("baseline" == f ? o + +d.face.descent : o / 2);
            for (var r = 0, s = h.length; r < s; r++) {
                if ("\n" == h[r]) i = 0, v = 0, j = 0, p += o; else {
                    var t = j && d.glyphs[h[r - 1]] || {}, v = d.glyphs[h[r]];
                    i += j ? (t.w || d.w) + (t.k && t.k[h[r]] || 0) + d.w * g : 0, j = 1;
                }
                v && v.d && (k += u.transformPath(v.d, [ "t", i * l, p * l, "s", l, l, n, q, "t", (a - n) / l, (b - q) / l ]));
            }
        }
        return this.path(k).attr({
            fill: "#000",
            stroke: "none"
        });
    }, E.add = function(a) {
        if (u.is(a, "array")) {
            var b = this.set(), c = 0, d = a.length, e;
            for (;c < d; c++) e = a[c] || {}, x[A](e.type) && b.push(this[e.type]().attr(e));
        }
        return b;
    }, u.format = function(a, b) {
        var c = u.is(b, Y) ? [ 0 ][H](b) : arguments;
        a && u.is(a, X) && c.length - 1 && (a = a.replace(y, function(a, b) {
            return null == c[++b] ? J : c[b];
        }));
        return a || J;
    }, u.fullfill = function() {
        var a = /\{([^\}]+)\}/g, b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, c = function(a, c, d) {
            var e = d;
            c.replace(b, function(a, b, c, d, f) {
                b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()));
            }), e = (null == e || e == d ? a : e) + "";
            return e;
        };
        return function(b, d) {
            return String(b).replace(a, function(a, b) {
                return c(a, b, d);
            });
        };
    }(), u.ninja = function() {
        C.was ? B.win.Raphael = C.is : delete Raphael;
        return u;
    }, u.st = Hc, function(a, b, c) {
        function d() {
            /in/.test(a.readyState) ? setTimeout(d, 9) : u.eve("raphael.DOMload");
        }
        null == a.readyState && a.addEventListener && (a.addEventListener(b, c = function() {
            a.removeEventListener(b, c, !1), a.readyState = "complete";
        }, !1), a.readyState = "loading"), d();
    }(document, "DOMContentLoaded"), C.was ? B.win.Raphael = u : Raphael = u, eve.on("raphael.DOMload", function() {
        v = !0;
    });
}(), window.Raphael.svg && function(a) {
    var b = "hasOwnProperty", c = String, d = parseFloat, e = parseInt, f = Math, g = f.max, h = f.abs, i = f.pow, j = /[, ]+/, k = a.eve, l = "", m = " ", n = "http://www.w3.org/1999/xlink", o = {
        block: "M5,0 0,2.5 5,5z",
        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
        open: "M6,1 1,3.5 6,6",
        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
    }, p = {};
    a.toString = function() {
        return "Your browser supports SVG.\nYou are running Rapha??l " + this.version;
    };
    var q = function(d, e) {
        if (e) {
            "string" == typeof d && (d = q(d));
            for (var f in e) e[b](f) && ("xlink:" == f.substring(0, 6) ? d.setAttributeNS(n, f.substring(6), c(e[f])) : d.setAttribute(f, c(e[f])));
        } else d = a._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
        return d;
    }, r = function(b, e) {
        var j = "linear", k = b.id + e, m = .5, n = .5, o = b.node, p = b.paper, r = o.style, s = a._g.doc.getElementById(k);
        if (!s) {
            e = c(e).replace(a._radial_gradient, function(a, b, c) {
                j = "radial";
                if (b && c) {
                    m = d(b), n = d(c);
                    var e = 2 * (n > .5) - 1;
                    i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && .5 != n && (n = n.toFixed(5) - 1e-5 * e);
                }
                return l;
            }), e = e.split(/\s*\-\s*/);
            if ("linear" == j) {
                var t = e.shift();
                t = -d(t);
                if (isNaN(t)) return null;
                var u = [ 0, 0, f.cos(a.rad(t)), f.sin(a.rad(t)) ], v = 1 / (g(h(u[2]), h(u[3])) || 1);
                u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], 
                u[3] = 0);
            }
            var w = a._parseDots(e);
            if (!w) return null;
            k = k.replace(/[\(\)\s,\xb0#]/g, "_"), b.gradient && k != b.gradient.id && (p.defs.removeChild(b.gradient), 
            delete b.gradient);
            if (!b.gradient) {
                s = q(j + "Gradient", {
                    id: k
                }), b.gradient = s, q(s, "radial" == j ? {
                    fx: m,
                    fy: n
                } : {
                    x1: u[0],
                    y1: u[1],
                    x2: u[2],
                    y2: u[3],
                    gradientTransform: b.matrix.invert()
                }), p.defs.appendChild(s);
                for (var x = 0, y = w.length; x < y; x++) s.appendChild(q("stop", {
                    offset: w[x].offset ? w[x].offset : x ? "100%" : "0%",
                    "stop-color": w[x].color || "#fff"
                }));
            }
        }
        q(o, {
            fill: "url(#" + k + ")",
            opacity: 1,
            "fill-opacity": 1
        }), r.fill = l, r.opacity = 1, r.fillOpacity = 1;
        return 1;
    }, s = function(a) {
        var b = a.getBBox(1);
        q(a.pattern, {
            patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"
        });
    }, t = function(d, e, f) {
        if ("path" == d.type) {
            var g = c(e).toLowerCase().split("-"), h = d.paper, i = f ? "end" : "start", j = d.node, k = d.attrs, m = k["stroke-width"], n = g.length, r = "classic", s, t, u, v, w, x = 3, y = 3, z = 5;
            while (n--) switch (g[n]) {
              case "block":
              case "classic":
              case "oval":
              case "diamond":
              case "open":
              case "none":
                r = g[n];
                break;

              case "wide":
                y = 5;
                break;

              case "narrow":
                y = 2;
                break;

              case "long":
                x = 5;
                break;

              case "short":
                x = 2;
            }
            "open" == r ? (x += 2, y += 2, z += 2, u = 1, v = f ? 4 : 1, w = {
                fill: "none",
                stroke: k.stroke
            }) : (v = u = x / 2, w = {
                fill: k.stroke,
                stroke: "none"
            }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, 
            d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {};
            if ("none" != r) {
                var A = "raphael-marker-" + r, B = "raphael-marker-" + i + r + x + y;
                a._g.doc.getElementById(A) ? p[A]++ : (h.defs.appendChild(q(q("path"), {
                    "stroke-linecap": "round",
                    d: o[r],
                    id: A
                })), p[A] = 1);
                var C = a._g.doc.getElementById(B), D;
                C ? (p[B]++, D = C.getElementsByTagName("use")[0]) : (C = q(q("marker"), {
                    id: B,
                    markerHeight: y,
                    markerWidth: x,
                    orient: "auto",
                    refX: v,
                    refY: y / 2
                }), D = q(q("use"), {
                    "xlink:href": "#" + A,
                    transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")",
                    "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4)
                }), C.appendChild(D), h.defs.appendChild(C), p[B] = 1), q(D, w);
                var E = u * ("diamond" != r && "oval" != r);
                f ? (s = d._.arrows.startdx * m || 0, t = a.getTotalLength(k.path) - E * m) : (s = E * m, 
                t = a.getTotalLength(k.path) - (d._.arrows.enddx * m || 0)), w = {}, w["marker-" + i] = "url(#" + B + ")";
                if (t || s) w.d = Raphael.getSubpath(k.path, s, t);
                q(j, w), d._.arrows[i + "Path"] = A, d._.arrows[i + "Marker"] = B, d._.arrows[i + "dx"] = E, 
                d._.arrows[i + "Type"] = r, d._.arrows[i + "String"] = e;
            } else f ? (s = d._.arrows.startdx * m || 0, t = a.getTotalLength(k.path) - s) : (s = 0, 
            t = a.getTotalLength(k.path) - (d._.arrows.enddx * m || 0)), d._.arrows[i + "Path"] && q(j, {
                d: Raphael.getSubpath(k.path, s, t)
            }), delete d._.arrows[i + "Path"], delete d._.arrows[i + "Marker"], delete d._.arrows[i + "dx"], 
            delete d._.arrows[i + "Type"], delete d._.arrows[i + "String"];
            for (w in p) if (p[b](w) && !p[w]) {
                var F = a._g.doc.getElementById(w);
                F && F.parentNode.removeChild(F);
            }
        }
    }, u = {
        "": [ 0 ],
        none: [ 0 ],
        "-": [ 3, 1 ],
        ".": [ 1, 1 ],
        "-.": [ 3, 1, 1, 1 ],
        "-..": [ 3, 1, 1, 1, 1, 1 ],
        ". ": [ 1, 3 ],
        "- ": [ 4, 3 ],
        "--": [ 8, 3 ],
        "- .": [ 4, 3, 1, 3 ],
        "--.": [ 8, 3, 1, 3 ],
        "--..": [ 8, 3, 1, 3, 1, 3 ]
    }, v = function(a, b, d) {
        b = u[c(b).toLowerCase()];
        if (b) {
            var e = a.attrs["stroke-width"] || "1", f = {
                round: e,
                square: e,
                butt: 0
            }[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0, g = [], h = b.length;
            while (h--) g[h] = b[h] * e + (h % 2 ? 1 : -1) * f;
            q(a.node, {
                "stroke-dasharray": g.join(",")
            });
        }
    }, w = function(d, f) {
        var i = d.node, k = d.attrs, m = i.style.visibility;
        i.style.visibility = "hidden";
        for (var o in f) if (f[b](o)) {
            if (!a._availableAttrs[b](o)) continue;
            var p = f[o];
            k[o] = p;
            switch (o) {
              case "blur":
                d.blur(p);
                break;

              case "href":
              case "title":
              case "target":
                var u = i.parentNode;
                if ("a" != u.tagName.toLowerCase()) {
                    var w = q("a");
                    u.insertBefore(w, i), w.appendChild(i), u = w;
                }
                "target" == o ? u.setAttributeNS(n, "show", "blank" == p ? "new" : p) : u.setAttributeNS(n, o, p);
                break;

              case "cursor":
                i.style.cursor = p;
                break;

              case "transform":
                d.transform(p);
                break;

              case "arrow-start":
                t(d, p);
                break;

              case "arrow-end":
                t(d, p, 1);
                break;

              case "clip-rect":
                var x = c(p).split(j);
                if (4 == x.length) {
                    d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                    var z = q("clipPath"), A = q("rect");
                    z.id = a.createUUID(), q(A, {
                        x: x[0],
                        y: x[1],
                        width: x[2],
                        height: x[3]
                    }), z.appendChild(A), d.paper.defs.appendChild(z), q(i, {
                        "clip-path": "url(#" + z.id + ")"
                    }), d.clip = A;
                }
                if (!p) {
                    var B = i.getAttribute("clip-path");
                    if (B) {
                        var C = a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g, l));
                        C && C.parentNode.removeChild(C), q(i, {
                            "clip-path": l
                        }), delete d.clip;
                    }
                }
                break;

              case "path":
                "path" == d.type && (q(i, {
                    d: p ? k.path = a._pathToAbsolute(p) : "M0,0"
                }), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), 
                "endString" in d._.arrows && t(d, d._.arrows.endString, 1)));
                break;

              case "width":
                i.setAttribute(o, p), d._.dirty = 1;
                if (k.fx) o = "x", p = k.x; else break;

              case "x":
                k.fx && (p = -k.x - (k.width || 0));

              case "rx":
                if ("rx" == o && "rect" == d.type) break;

              case "cx":
                i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                break;

              case "height":
                i.setAttribute(o, p), d._.dirty = 1;
                if (k.fy) o = "y", p = k.y; else break;

              case "y":
                k.fy && (p = -k.y - (k.height || 0));

              case "ry":
                if ("ry" == o && "rect" == d.type) break;

              case "cy":
                i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                break;

              case "r":
                "rect" == d.type ? q(i, {
                    rx: p,
                    ry: p
                }) : i.setAttribute(o, p), d._.dirty = 1;
                break;

              case "src":
                "image" == d.type && i.setAttributeNS(n, "href", p);
                break;

              case "stroke-width":
                if (1 != d._.sx || 1 != d._.sy) p /= g(h(d._.sx), h(d._.sy)) || 1;
                d.paper._vbSize && (p *= d.paper._vbSize), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), 
                d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                break;

              case "stroke-dasharray":
                v(d, p, f);
                break;

              case "fill":
                var D = c(p).match(a._ISURL);
                if (D) {
                    z = q("pattern");
                    var E = q("image");
                    z.id = a.createUUID(), q(z, {
                        x: 0,
                        y: 0,
                        patternUnits: "userSpaceOnUse",
                        height: 1,
                        width: 1
                    }), q(E, {
                        x: 0,
                        y: 0,
                        "xlink:href": D[1]
                    }), z.appendChild(E), function(b) {
                        a._preload(D[1], function() {
                            var a = this.offsetWidth, c = this.offsetHeight;
                            q(b, {
                                width: a,
                                height: c
                            }), q(E, {
                                width: a,
                                height: c
                            }), d.paper.safari();
                        });
                    }(z), d.paper.defs.appendChild(z), q(i, {
                        fill: "url(#" + z.id + ")"
                    }), d.pattern = z, d.pattern && s(d);
                    break;
                }
                var F = a.getRGB(p);
                if (!F.error) delete f.gradient, delete k.gradient, !a.is(k.opacity, "undefined") && a.is(f.opacity, "undefined") && q(i, {
                    opacity: k.opacity
                }), !a.is(k["fill-opacity"], "undefined") && a.is(f["fill-opacity"], "undefined") && q(i, {
                    "fill-opacity": k["fill-opacity"]
                }); else if (("circle" == d.type || "ellipse" == d.type || "r" != c(p).charAt()) && r(d, p)) {
                    if ("opacity" in k || "fill-opacity" in k) {
                        var G = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                        if (G) {
                            var H = G.getElementsByTagName("stop");
                            q(H[H.length - 1], {
                                "stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1)
                            });
                        }
                    }
                    k.gradient = p, k.fill = "none";
                    break;
                }
                F[b]("opacity") && q(i, {
                    "fill-opacity": F.opacity > 1 ? F.opacity / 100 : F.opacity
                });

              case "stroke":
                F = a.getRGB(p), i.setAttribute(o, F.hex), "stroke" == o && F[b]("opacity") && q(i, {
                    "stroke-opacity": F.opacity > 1 ? F.opacity / 100 : F.opacity
                }), "stroke" == o && d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), 
                "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                break;

              case "gradient":
                ("circle" == d.type || "ellipse" == d.type || "r" != c(p).charAt()) && r(d, p);
                break;

              case "opacity":
                k.gradient && !k[b]("stroke-opacity") && q(i, {
                    "stroke-opacity": p > 1 ? p / 100 : p
                });

              case "fill-opacity":
                if (k.gradient) {
                    G = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), 
                    G && (H = G.getElementsByTagName("stop"), q(H[H.length - 1], {
                        "stop-opacity": p
                    }));
                    break;
                }

              default:
                "font-size" == o && (p = e(p, 10) + "px");
                var I = o.replace(/(\-.)/g, function(a) {
                    return a.substring(1).toUpperCase();
                });
                i.style[I] = p, d._.dirty = 1, i.setAttribute(o, p);
            }
        }
        y(d, f), i.style.visibility = m;
    }, x = 1.2, y = function(d, f) {
        if ("text" == d.type && !!(f[b]("text") || f[b]("font") || f[b]("font-size") || f[b]("x") || f[b]("y"))) {
            var g = d.attrs, h = d.node, i = h.firstChild ? e(a._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
            if (f[b]("text")) {
                g.text = f.text;
                while (h.firstChild) h.removeChild(h.firstChild);
                var j = c(f.text).split("\n"), k = [], m;
                for (var n = 0, o = j.length; n < o; n++) m = q("tspan"), n && q(m, {
                    dy: i * x,
                    x: g.x
                }), m.appendChild(a._g.doc.createTextNode(j[n])), h.appendChild(m), k[n] = m;
            } else {
                k = h.getElementsByTagName("tspan");
                for (n = 0, o = k.length; n < o; n++) n ? q(k[n], {
                    dy: i * x,
                    x: g.x
                }) : q(k[0], {
                    dy: 0
                });
            }
            q(h, {
                x: g.x,
                y: g.y
            }), d._.dirty = 1;
            var p = d._getBBox(), r = g.y - (p.y + p.height / 2);
            r && a.is(r, "finite") && q(k[0], {
                dy: r
            });
        }
    }, z = function(b, c) {
        var d = 0, e = 0;
        this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, 
        this.matrix = a.matrix(), this.realPath = null, this.paper = c, this.attrs = this.attrs || {}, 
        this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            deg: 0,
            dx: 0,
            dy: 0,
            dirty: 1
        }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), 
        c.top = this, this.next = null;
    }, A = a.el;
    z.prototype = A, A.constructor = z, a._engine.path = function(a, b) {
        var c = q("path");
        b.canvas && b.canvas.appendChild(c);
        var d = new z(c, b);
        d.type = "path", w(d, {
            fill: "none",
            stroke: "#000",
            path: a
        });
        return d;
    }, A.rotate = function(a, b, e) {
        if (this.removed) return this;
        a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (b = e);
        if (null == b || null == e) {
            var f = this.getBBox(1);
            b = f.x + f.width / 2, e = f.y + f.height / 2;
        }
        this.transform(this._.transform.concat([ [ "r", a, b, e ] ]));
        return this;
    }, A.scale = function(a, b, e, f) {
        if (this.removed) return this;
        a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), 
        null == b && (b = a), null == f && (e = f);
        if (null == e || null == f) var g = this.getBBox(1);
        e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([ [ "s", a, b, e, f ] ]));
        return this;
    }, A.translate = function(a, b) {
        if (this.removed) return this;
        a = c(a).split(j), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, 
        this.transform(this._.transform.concat([ [ "t", a, b ] ]));
        return this;
    }, A.transform = function(c) {
        var d = this._;
        if (null == c) return d.transform;
        a._extractTransform(this, c), this.clip && q(this.clip, {
            transform: this.matrix.invert()
        }), this.pattern && s(this), this.node && q(this.node, {
            transform: this.matrix
        });
        if (1 != d.sx || 1 != d.sy) {
            var e = this.attrs[b]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({
                "stroke-width": e
            });
        }
        return this;
    }, A.hide = function() {
        !this.removed && this.paper.safari(this.node.style.display = "none");
        return this;
    }, A.show = function() {
        !this.removed && this.paper.safari(this.node.style.display = "");
        return this;
    }, A.remove = function() {
        if (!this.removed && !!this.node.parentNode) {
            var b = this.paper;
            b.__set__ && b.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && b.defs.removeChild(this.gradient), 
            a._tear(this, b), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
            for (var c in this) this[c] = "function" == typeof this[c] ? a._removedFactory(c) : null;
            this.removed = !0;
        }
    }, A._getBBox = function() {
        if ("none" == this.node.style.display) {
            this.show();
            var a = !0;
        }
        var b = {};
        try {
            b = this.node.getBBox();
        } catch (c) {} finally {
            b = b || {};
        }
        a && this.hide();
        return b;
    }, A.attr = function(c, d) {
        if (this.removed) return this;
        if (null == c) {
            var e = {};
            for (var f in this.attrs) this.attrs[b](f) && (e[f] = this.attrs[f]);
            e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform;
            return e;
        }
        if (null == d && a.is(c, "string")) {
            if ("fill" == c && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
            if ("transform" == c) return this._.transform;
            var g = c.split(j), h = {};
            for (var i = 0, l = g.length; i < l; i++) c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c];
            return l - 1 ? h : h[g[0]];
        }
        if (null == d && a.is(c, "array")) {
            h = {};
            for (i = 0, l = c.length; i < l; i++) h[c[i]] = this.attr(c[i]);
            return h;
        }
        if (null != d) {
            var m = {};
            m[c] = d;
        } else null != c && a.is(c, "object") && (m = c);
        for (var n in m) k("raphael.attr." + n + "." + this.id, this, m[n]);
        for (n in this.paper.customAttributes) if (this.paper.customAttributes[b](n) && m[b](n) && a.is(this.paper.customAttributes[n], "function")) {
            var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
            this.attrs[n] = m[n];
            for (var p in o) o[b](p) && (m[p] = o[p]);
        }
        w(this, m);
        return this;
    }, A.toFront = function() {
        if (this.removed) return this;
        "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
        var b = this.paper;
        b.top != this && a._tofront(this, b);
        return this;
    }, A.toBack = function() {
        if (this.removed) return this;
        var b = this.node.parentNode;
        "a" == b.tagName.toLowerCase() ? b.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : b.firstChild != this.node && b.insertBefore(this.node, this.node.parentNode.firstChild), 
        a._toback(this, this.paper);
        var c = this.paper;
        return this;
    }, A.insertAfter = function(b) {
        if (this.removed) return this;
        var c = b.node || b[b.length - 1].node;
        c.nextSibling ? c.parentNode.insertBefore(this.node, c.nextSibling) : c.parentNode.appendChild(this.node), 
        a._insertafter(this, b, this.paper);
        return this;
    }, A.insertBefore = function(b) {
        if (this.removed) return this;
        var c = b.node || b[0].node;
        c.parentNode.insertBefore(this.node, c), a._insertbefore(this, b, this.paper);
        return this;
    }, A.blur = function(b) {
        var c = this;
        if (0 !== +b) {
            var d = q("filter"), e = q("feGaussianBlur");
            c.attrs.blur = b, d.id = a.createUUID(), q(e, {
                stdDeviation: +b || 1.5
            }), d.appendChild(e), c.paper.defs.appendChild(d), c._blur = d, q(c.node, {
                filter: "url(#" + d.id + ")"
            });
        } else c._blur && (c._blur.parentNode.removeChild(c._blur), delete c._blur, delete c.attrs.blur), 
        c.node.removeAttribute("filter");
    }, a._engine.circle = function(a, b, c, d) {
        var e = q("circle");
        a.canvas && a.canvas.appendChild(e);
        var f = new z(e, a);
        f.attrs = {
            cx: b,
            cy: c,
            r: d,
            fill: "none",
            stroke: "#000"
        }, f.type = "circle", q(e, f.attrs);
        return f;
    }, a._engine.rect = function(a, b, c, d, e, f) {
        var g = q("rect");
        a.canvas && a.canvas.appendChild(g);
        var h = new z(g, a);
        h.attrs = {
            x: b,
            y: c,
            width: d,
            height: e,
            r: f || 0,
            rx: f || 0,
            ry: f || 0,
            fill: "none",
            stroke: "#000"
        }, h.type = "rect", q(g, h.attrs);
        return h;
    }, a._engine.ellipse = function(a, b, c, d, e) {
        var f = q("ellipse");
        a.canvas && a.canvas.appendChild(f);
        var g = new z(f, a);
        g.attrs = {
            cx: b,
            cy: c,
            rx: d,
            ry: e,
            fill: "none",
            stroke: "#000"
        }, g.type = "ellipse", q(f, g.attrs);
        return g;
    }, a._engine.image = function(a, b, c, d, e, f) {
        var g = q("image");
        q(g, {
            x: c,
            y: d,
            width: e,
            height: f,
            preserveAspectRatio: "none"
        }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
        var h = new z(g, a);
        h.attrs = {
            x: c,
            y: d,
            width: e,
            height: f,
            src: b
        }, h.type = "image";
        return h;
    }, a._engine.text = function(b, c, d, e) {
        var f = q("text");
        b.canvas && b.canvas.appendChild(f);
        var g = new z(f, b);
        g.attrs = {
            x: c,
            y: d,
            "text-anchor": "middle",
            text: e,
            font: a._availableAttrs.font,
            stroke: "none",
            fill: "#000"
        }, g.type = "text", w(g, g.attrs);
        return g;
    }, a._engine.setSize = function(a, b) {
        this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), 
        this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox);
        return this;
    }, a._engine.create = function() {
        var b = a._getContainer.apply(0, arguments), c = b && b.container, d = b.x, e = b.y, f = b.width, g = b.height;
        if (!c) throw new Error("SVG container not found.");
        var h = q("svg"), i = "overflow:hidden;", j;
        d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(h, {
            height: g,
            version: 1.1,
            width: f,
            xmlns: "http://www.w3.org/2000/svg"
        }), 1 == c ? (h.style.cssText = i + "position:absolute;left:" + d + "px;top:" + e + "px", 
        a._g.doc.body.appendChild(h), j = 1) : (h.style.cssText = i + "position:relative", 
        c.firstChild ? c.insertBefore(h, c.firstChild) : c.appendChild(h)), c = new a._Paper(), 
        c.width = f, c.height = g, c.canvas = h, c.clear(), c._left = c._top = 0, j && (c.renderfix = function() {}), 
        c.renderfix();
        return c;
    }, a._engine.setViewBox = function(a, b, c, d, e) {
        k("raphael.setViewBox", this, this._viewBox, [ a, b, c, d, e ]);
        var f = g(c / this.width, d / this.height), h = this.top, i = e ? "meet" : "xMinYMin", j, l;
        null == a ? (this._vbSize && (f = 1), delete this._vbSize, j = "0 0 " + this.width + m + this.height) : (this._vbSize = f, 
        j = a + m + b + m + c + m + d), q(this.canvas, {
            viewBox: j,
            preserveAspectRatio: i
        });
        while (f && h) l = "stroke-width" in h.attrs ? h.attrs["stroke-width"] : 1, h.attr({
            "stroke-width": l
        }), h._.dirty = 1, h._.dirtyT = 1, h = h.prev;
        this._viewBox = [ a, b, c, d, !!e ];
        return this;
    }, a.prototype.renderfix = function() {
        var a = this.canvas, b = a.style, c;
        try {
            c = a.getScreenCTM() || a.createSVGMatrix();
        } catch (d) {
            c = a.createSVGMatrix();
        }
        var e = -c.e % 1, f = -c.f % 1;
        if (e || f) e && (this._left = (this._left + e) % 1, b.left = this._left + "px"), 
        f && (this._top = (this._top + f) % 1, b.top = this._top + "px");
    }, a.prototype.clear = function() {
        a.eve("raphael.clear", this);
        var b = this.canvas;
        while (b.firstChild) b.removeChild(b.firstChild);
        this.bottom = this.top = null, (this.desc = q("desc")).appendChild(a._g.doc.createTextNode("Created with Rapha??l " + a.version)), 
        b.appendChild(this.desc), b.appendChild(this.defs = q("defs"));
    }, a.prototype.remove = function() {
        k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        for (var b in this) this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null;
    };
    var B = a.st;
    for (var C in A) A[b](C) && !B[b](C) && (B[C] = function(a) {
        return function() {
            var b = arguments;
            return this.forEach(function(c) {
                c[a].apply(c, b);
            });
        };
    }(C));
}(window.Raphael), window.Raphael.vml && function(a) {
    var b = "hasOwnProperty", c = String, d = parseFloat, e = Math, f = e.round, g = e.max, h = e.min, i = e.abs, j = "fill", k = /[, ]+/, l = a.eve, m = " progid:DXImageTransform.Microsoft", n = " ", o = "", p = {
        M: "m",
        L: "l",
        C: "c",
        Z: "x",
        m: "t",
        l: "r",
        c: "v",
        z: "x"
    }, q = /([clmz]),?([^clmz]*)/gi, r = / progid:\S+Blur\([^\)]+\)/g, s = /-?[^,\s-]+/g, t = "position:absolute;left:0;top:0;width:1px;height:1px", u = 21600, v = {
        path: 1,
        rect: 1,
        image: 1
    }, w = {
        circle: 1,
        ellipse: 1
    }, x = function(b) {
        var d = /[ahqstv]/gi, e = a._pathToAbsolute;
        c(b).match(d) && (e = a._path2curve), d = /[clmz]/g;
        if (e == a._pathToAbsolute && !c(b).match(d)) {
            var g = c(b).replace(q, function(a, b, c) {
                var d = [], e = "m" == b.toLowerCase(), g = p[b];
                c.replace(s, function(a) {
                    e && 2 == d.length && (g += d + p["m" == b ? "l" : "L"], d = []), d.push(f(a * u));
                });
                return g + d;
            });
            return g;
        }
        var h = e(b), i, j;
        g = [];
        for (var k = 0, l = h.length; k < l; k++) {
            i = h[k], j = h[k][0].toLowerCase(), "z" == j && (j = "x");
            for (var m = 1, r = i.length; m < r; m++) j += f(i[m] * u) + (m != r - 1 ? "," : o);
            g.push(j);
        }
        return g.join(n);
    }, y = function(b, c, d) {
        var e = a.matrix();
        e.rotate(-b, .5, .5);
        return {
            dx: e.x(c, d),
            dy: e.y(c, d)
        };
    }, z = function(a, b, c, d, e, f) {
        var g = a._, h = a.matrix, k = g.fillpos, l = a.node, m = l.style, o = 1, p = "", q, r = u / b, s = u / c;
        m.visibility = "hidden";
        if (!!b && !!c) {
            l.coordsize = i(r) + n + i(s), m.rotation = f * (b * c < 0 ? -1 : 1);
            if (f) {
                var t = y(f, d, e);
                d = t.dx, e = t.dy;
            }
            b < 0 && (p += "x"), c < 0 && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -r + n + e * -s;
            if (k || g.fillsize) {
                var v = l.getElementsByTagName(j);
                v = v && v[0], l.removeChild(v), k && (t = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), 
                v.position = t.dx * o + n + t.dy * o), g.fillsize && (v.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), 
                l.appendChild(v);
            }
            m.visibility = "visible";
        }
    };
    a.toString = function() {
        return "Your browser doesn???t support SVG. Falling down to VML.\nYou are running Rapha??l " + this.version;
    };
    var A = function(a, b, d) {
        var e = c(b).toLowerCase().split("-"), f = d ? "end" : "start", g = e.length, h = "classic", i = "medium", j = "medium";
        while (g--) switch (e[g]) {
          case "block":
          case "classic":
          case "oval":
          case "diamond":
          case "open":
          case "none":
            h = e[g];
            break;

          case "wide":
          case "narrow":
            j = e[g];
            break;

          case "long":
          case "short":
            i = e[g];
        }
        var k = a.node.getElementsByTagName("stroke")[0];
        k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j;
    }, B = function(e, i) {
        e.attrs = e.attrs || {};
        var l = e.node, m = e.attrs, p = l.style, q, r = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r), s = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry), t = e;
        for (var y in i) i[b](y) && (m[y] = i[y]);
        r && (m.path = a._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), 
        i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), 
        "blur" in i && e.blur(i.blur);
        if (i.path && "path" == e.type || r) l.path = x(~c(m.path).toLowerCase().indexOf("r") ? a._pathToAbsolute(m.path) : m.path), 
        "image" == e.type && (e._.fillpos = [ m.x, m.y ], e._.fillsize = [ m.width, m.height ], 
        z(e, 1, 1, 0, 0, 0));
        "transform" in i && e.transform(i.transform);
        if (s) {
            var B = +m.cx, D = +m.cy, E = +m.rx || +m.r || 0, G = +m.ry || +m.r || 0;
            l.path = a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((B - E) * u), f((D - G) * u), f((B + E) * u), f((D + G) * u), f(B * u));
        }
        if ("clip-rect" in i) {
            var H = c(i["clip-rect"]).split(k);
            if (4 == H.length) {
                H[2] = +H[2] + +H[0], H[3] = +H[3] + +H[1];
                var I = l.clipRect || a._g.doc.createElement("div"), J = I.style;
                J.clip = a.format("rect({1}px {2}px {3}px {0}px)", H), l.clipRect || (J.position = "absolute", 
                J.top = 0, J.left = 0, J.width = e.paper.width + "px", J.height = e.paper.height + "px", 
                l.parentNode.insertBefore(I, l), I.appendChild(l), l.clipRect = I);
            }
            i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto");
        }
        if (e.textpath) {
            var K = e.textpath.style;
            i.font && (K.font = i.font), i["font-family"] && (K.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), 
            i["font-size"] && (K.fontSize = i["font-size"]), i["font-weight"] && (K.fontWeight = i["font-weight"]), 
            i["font-style"] && (K.fontStyle = i["font-style"]);
        }
        "arrow-start" in i && A(t, i["arrow-start"]), "arrow-end" in i && A(t, i["arrow-end"], 1);
        if (null != i.opacity || null != i["stroke-width"] || null != i.fill || null != i.src || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) {
            var L = l.getElementsByTagName(j), M = !1;
            L = L && L[0], !L && (M = L = F(j)), "image" == e.type && i.src && (L.src = i.src), 
            i.fill && (L.on = !0);
            if (null == L.on || "none" == i.fill || null === i.fill) L.on = !1;
            if (L.on && i.fill) {
                var N = c(i.fill).match(a._ISURL);
                if (N) {
                    L.parentNode == l && l.removeChild(L), L.rotate = !0, L.src = N[1], L.type = "tile";
                    var O = e.getBBox(1);
                    L.position = O.x + n + O.y, e._.fillpos = [ O.x, O.y ], a._preload(N[1], function() {
                        e._.fillsize = [ this.offsetWidth, this.offsetHeight ];
                    });
                } else L.color = a.getRGB(i.fill).hex, L.src = o, L.type = "solid", a.getRGB(i.fill).error && (t.type in {
                    circle: 1,
                    ellipse: 1
                } || "r" != c(i.fill).charAt()) && C(t, i.fill, L) && (m.fill = "none", m.gradient = i.fill, 
                L.rotate = !1);
            }
            if ("fill-opacity" in i || "opacity" in i) {
                var P = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+a.getRGB(i.fill).o + 1 || 2) - 1);
                P = h(g(P, 0), 1), L.opacity = P, L.src && (L.color = "none");
            }
            l.appendChild(L);
            var Q = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0], R = !1;
            !Q && (R = Q = F("stroke"));
            if (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) Q.on = !0;
            ("none" == i.stroke || null === i.stroke || null == Q.on || 0 == i.stroke || 0 == i["stroke-width"]) && (Q.on = !1);
            var S = a.getRGB(i.stroke);
            Q.on && i.stroke && (Q.color = S.hex), P = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+S.o + 1 || 2) - 1);
            var T = .75 * (d(i["stroke-width"]) || 1);
            P = h(g(P, 0), 1), null == i["stroke-width"] && (T = m["stroke-width"]), i["stroke-width"] && (Q.weight = T), 
            T && T < 1 && (P *= T) && (Q.weight = 1), Q.opacity = P, i["stroke-linejoin"] && (Q.joinstyle = i["stroke-linejoin"] || "miter"), 
            Q.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (Q.endcap = "butt" == i["stroke-linecap"] ? "flat" : "square" == i["stroke-linecap"] ? "square" : "round");
            if (i["stroke-dasharray"]) {
                var U = {
                    "-": "shortdash",
                    ".": "shortdot",
                    "-.": "shortdashdot",
                    "-..": "shortdashdotdot",
                    ". ": "dot",
                    "- ": "dash",
                    "--": "longdash",
                    "- .": "dashdot",
                    "--.": "longdashdot",
                    "--..": "longdashdotdot"
                };
                Q.dashstyle = U[b](i["stroke-dasharray"]) ? U[i["stroke-dasharray"]] : o;
            }
            R && l.appendChild(Q);
        }
        if ("text" == t.type) {
            t.paper.canvas.style.display = o;
            var V = t.paper.span, W = 100, X = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
            p = V.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), 
            m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), 
            X = d(m["font-size"] || X && X[0]) || 10, p.fontSize = X * W + "px", t.textpath.string && (V.innerHTML = c(t.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
            var Y = V.getBoundingClientRect();
            t.W = m.w = (Y.right - Y.left) / W, t.H = m.h = (Y.bottom - Y.top) / W, t.X = m.x, 
            t.Y = m.y + t.H / 2, ("x" in i || "y" in i) && (t.path.v = a.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
            var Z = [ "x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size" ];
            for (var $ = 0, _ = Z.length; $ < _; $++) if (Z[$] in i) {
                t._.dirty = 1;
                break;
            }
            switch (m["text-anchor"]) {
              case "start":
                t.textpath.style["v-text-align"] = "left", t.bbx = t.W / 2;
                break;

              case "end":
                t.textpath.style["v-text-align"] = "right", t.bbx = -t.W / 2;
                break;

              default:
                t.textpath.style["v-text-align"] = "center", t.bbx = 0;
            }
            t.textpath.style["v-text-kern"] = !0;
        }
    }, C = function(b, f, g) {
        b.attrs = b.attrs || {};
        var h = b.attrs, i = Math.pow, j, k, l = "linear", m = ".5 .5";
        b.attrs.gradient = f, f = c(f).replace(a._radial_gradient, function(a, b, c) {
            l = "radial", b && c && (b = d(b), c = d(c), i(b - .5, 2) + i(c - .5, 2) > .25 && (c = e.sqrt(.25 - i(b - .5, 2)) * (2 * (c > .5) - 1) + .5), 
            m = b + n + c);
            return o;
        }), f = f.split(/\s*\-\s*/);
        if ("linear" == l) {
            var p = f.shift();
            p = -d(p);
            if (isNaN(p)) return null;
        }
        var q = a._parseDots(f);
        if (!q) return null;
        b = b.shape || b.node;
        if (q.length) {
            b.removeChild(g), g.on = !0, g.method = "none", g.color = q[0].color, g.color2 = q[q.length - 1].color;
            var r = [];
            for (var s = 0, t = q.length; s < t; s++) q[s].offset && r.push(q[s].offset + n + q[s].color);
            g.colors = r.length ? r.join() : "0% " + g.color, "radial" == l ? (g.type = "gradientTitle", 
            g.focus = "100%", g.focussize = "0 0", g.focusposition = m, g.angle = 0) : (g.type = "gradient", 
            g.angle = (270 - p) % 360), b.appendChild(g);
        }
        return 1;
    }, D = function(b, c) {
        this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, 
        this.X = 0, this.Y = 0, this.attrs = {}, this.paper = c, this.matrix = a.matrix(), 
        this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            dx: 0,
            dy: 0,
            deg: 0,
            dirty: 1,
            dirtyT: 1
        }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), 
        c.top = this, this.next = null;
    }, E = a.el;
    D.prototype = E, E.constructor = D, E.transform = function(b) {
        if (null == b) return this._.transform;
        var d = this.paper._viewBoxShift, e = d ? "s" + [ d.scale, d.scale ] + "-1-1t" + [ d.dx, d.dy ] : o, f;
        d && (f = b = c(b).replace(/\.{3}|\u2026/g, this._.transform || o)), a._extractTransform(this, e + b);
        var g = this.matrix.clone(), h = this.skew, i = this.node, j, k = ~c(this.attrs.fill).indexOf("-"), l = !c(this.attrs.fill).indexOf("url(");
        g.translate(-.5, -.5);
        if (l || k || "image" == this.type) {
            h.matrix = "1 0 0 1", h.offset = "0 0", j = g.split();
            if (k && j.noRotation || !j.isSimple) {
                i.style.filter = g.toFilter();
                var m = this.getBBox(), p = this.getBBox(1), q = m.x - p.x, r = m.y - p.y;
                i.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0);
            } else i.style.filter = o, z(this, j.scalex, j.scaley, j.dx, j.dy, j.rotate);
        } else i.style.filter = o, h.matrix = c(g), h.offset = g.offset();
        f && (this._.transform = f);
        return this;
    }, E.rotate = function(a, b, e) {
        if (this.removed) return this;
        if (null != a) {
            a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (b = e);
            if (null == b || null == e) {
                var f = this.getBBox(1);
                b = f.x + f.width / 2, e = f.y + f.height / 2;
            }
            this._.dirtyT = 1, this.transform(this._.transform.concat([ [ "r", a, b, e ] ]));
            return this;
        }
    }, E.translate = function(a, b) {
        if (this.removed) return this;
        a = c(a).split(k), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, 
        this._.bbox && (this._.bbox.x += a, this._.bbox.y += b), this.transform(this._.transform.concat([ [ "t", a, b ] ]));
        return this;
    }, E.scale = function(a, b, e, f) {
        if (this.removed) return this;
        a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), 
        isNaN(f) && (f = null)), a = d(a[0]), null == b && (b = a), null == f && (e = f);
        if (null == e || null == f) var g = this.getBBox(1);
        e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([ [ "s", a, b, e, f ] ])), 
        this._.dirtyT = 1;
        return this;
    }, E.hide = function() {
        !this.removed && (this.node.style.display = "none");
        return this;
    }, E.show = function() {
        !this.removed && (this.node.style.display = o);
        return this;
    }, E._getBBox = function() {
        if (this.removed) return {};
        return {
            x: this.X + (this.bbx || 0) - this.W / 2,
            y: this.Y - this.H,
            width: this.W,
            height: this.H
        };
    }, E.remove = function() {
        if (!this.removed && !!this.node.parentNode) {
            this.paper.__set__ && this.paper.__set__.exclude(this), a.eve.unbind("raphael.*.*." + this.id), 
            a._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var b in this) this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null;
            this.removed = !0;
        }
    }, E.attr = function(c, d) {
        if (this.removed) return this;
        if (null == c) {
            var e = {};
            for (var f in this.attrs) this.attrs[b](f) && (e[f] = this.attrs[f]);
            e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform;
            return e;
        }
        if (null == d && a.is(c, "string")) {
            if (c == j && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
            var g = c.split(k), h = {};
            for (var i = 0, m = g.length; i < m; i++) c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c];
            return m - 1 ? h : h[g[0]];
        }
        if (this.attrs && null == d && a.is(c, "array")) {
            h = {};
            for (i = 0, m = c.length; i < m; i++) h[c[i]] = this.attr(c[i]);
            return h;
        }
        var n;
        null != d && (n = {}, n[c] = d), null == d && a.is(c, "object") && (n = c);
        for (var o in n) l("raphael.attr." + o + "." + this.id, this, n[o]);
        if (n) {
            for (o in this.paper.customAttributes) if (this.paper.customAttributes[b](o) && n[b](o) && a.is(this.paper.customAttributes[o], "function")) {
                var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                this.attrs[o] = n[o];
                for (var q in p) p[b](q) && (n[q] = p[q]);
            }
            n.text && "text" == this.type && (this.textpath.string = n.text), B(this, n);
        }
        return this;
    }, E.toFront = function() {
        !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && a._tofront(this, this.paper);
        return this;
    }, E.toBack = function() {
        if (this.removed) return this;
        this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), 
        a._toback(this, this.paper));
        return this;
    }, E.insertAfter = function(b) {
        if (this.removed) return this;
        b.constructor == a.st.constructor && (b = b[b.length - 1]), b.node.nextSibling ? b.node.parentNode.insertBefore(this.node, b.node.nextSibling) : b.node.parentNode.appendChild(this.node), 
        a._insertafter(this, b, this.paper);
        return this;
    }, E.insertBefore = function(b) {
        if (this.removed) return this;
        b.constructor == a.st.constructor && (b = b[0]), b.node.parentNode.insertBefore(this.node, b.node), 
        a._insertbefore(this, b, this.paper);
        return this;
    }, E.blur = function(b) {
        var c = this.node.runtimeStyle, d = c.filter;
        d = d.replace(r, o), 0 !== +b ? (this.attrs.blur = b, c.filter = d + n + m + ".Blur(pixelradius=" + (+b || 1.5) + ")", 
        c.margin = a.format("-{0}px 0 0 -{0}px", f(+b || 1.5))) : (c.filter = d, c.margin = 0, 
        delete this.attrs.blur);
    }, a._engine.path = function(a, b) {
        var c = F("shape");
        c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
        var d = new D(c, b), e = {
            fill: "none",
            stroke: "#000"
        };
        a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c);
        var f = F("skew");
        f.on = !0, c.appendChild(f), d.skew = f, d.transform(o);
        return d;
    }, a._engine.rect = function(b, c, d, e, f, g) {
        var h = a._rectPath(c, d, e, f, g), i = b.path(h), j = i.attrs;
        i.X = j.x = c, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, 
        i.type = "rect";
        return i;
    }, a._engine.ellipse = function(a, b, c, d, e) {
        var f = a.path(), g = f.attrs;
        f.X = b - d, f.Y = c - e, f.W = 2 * d, f.H = 2 * e, f.type = "ellipse", B(f, {
            cx: b,
            cy: c,
            rx: d,
            ry: e
        });
        return f;
    }, a._engine.circle = function(a, b, c, d) {
        var e = a.path(), f = e.attrs;
        e.X = b - d, e.Y = c - d, e.W = e.H = 2 * d, e.type = "circle", B(e, {
            cx: b,
            cy: c,
            r: d
        });
        return e;
    }, a._engine.image = function(b, c, d, e, f, g) {
        var h = a._rectPath(d, e, f, g), i = b.path(h).attr({
            stroke: "none"
        }), k = i.attrs, l = i.node, m = l.getElementsByTagName(j)[0];
        k.src = c, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, 
        k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, 
        m.src = c, m.type = "tile", i._.fillpos = [ d, e ], i._.fillsize = [ f, g ], l.appendChild(m), 
        z(i, 1, 1, 0, 0, 0);
        return i;
    }, a._engine.text = function(b, d, e, g) {
        var h = F("shape"), i = F("path"), j = F("textpath");
        d = d || 0, e = e || 0, g = g || "", i.v = a.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), 
        i.textpathok = !0, j.string = c(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, 
        h.coordorigin = "0 0";
        var k = new D(h, b), l = {
            fill: "#000",
            stroke: "none",
            font: a._availableAttrs.font,
            text: g
        };
        k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = c(g), k.attrs.x = d, 
        k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), 
        b.canvas.appendChild(h);
        var m = F("skew");
        m.on = !0, h.appendChild(m), k.skew = m, k.transform(o);
        return k;
    }, a._engine.setSize = function(b, c) {
        var d = this.canvas.style;
        this.width = b, this.height = c, b == +b && (b += "px"), c == +c && (c += "px"), 
        d.width = b, d.height = c, d.clip = "rect(0 " + b + " " + c + " 0)", this._viewBox && a._engine.setViewBox.apply(this, this._viewBox);
        return this;
    }, a._engine.setViewBox = function(b, c, d, e, f) {
        a.eve("raphael.setViewBox", this, this._viewBox, [ b, c, d, e, f ]);
        var h = this.width, i = this.height, j = 1 / g(d / h, e / i), k, l;
        f && (k = i / e, l = h / d, d * k < h && (b -= (h - d * k) / 2 / k), e * l < i && (c -= (i - e * l) / 2 / l)), 
        this._viewBox = [ b, c, d, e, !!f ], this._viewBoxShift = {
            dx: -b,
            dy: -c,
            scale: j
        }, this.forEach(function(a) {
            a.transform("...");
        });
        return this;
    };
    var F;
    a._engine.initWin = function(a) {
        var b = a.document;
        b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), 
            F = function(a) {
                return b.createElement("<rvml:" + a + ' class="rvml">');
            };
        } catch (c) {
            F = function(a) {
                return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
            };
        }
    }, a._engine.initWin(a._g.win), a._engine.create = function() {
        var b = a._getContainer.apply(0, arguments), c = b.container, d = b.height, e, f = b.width, g = b.x, h = b.y;
        if (!c) throw new Error("VML container not found.");
        var i = new a._Paper(), j = i.canvas = a._g.doc.createElement("div"), k = j.style;
        g = g || 0, h = h || 0, f = f || 512, d = d || 342, i.width = f, i.height = d, f == +f && (f += "px"), 
        d == +d && (d += "px"), i.coordsize = 1e3 * u + n + 1e3 * u, i.coordorigin = "0 0", 
        i.span = a._g.doc.createElement("span"), i.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", 
        j.appendChild(i.span), k.cssText = a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", f, d), 
        1 == c ? (a._g.doc.body.appendChild(j), k.left = g + "px", k.top = h + "px", k.position = "absolute") : c.firstChild ? c.insertBefore(j, c.firstChild) : c.appendChild(j), 
        i.renderfix = function() {};
        return i;
    }, a.prototype.clear = function() {
        a.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = a._g.doc.createElement("span"), 
        this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", 
        this.canvas.appendChild(this.span), this.bottom = this.top = null;
    }, a.prototype.remove = function() {
        a.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
        for (var b in this) this[b] = "function" == typeof this[b] ? a._removedFactory(b) : null;
        return !0;
    };
    var G = a.st;
    for (var H in E) E[b](H) && !G[b](H) && (G[H] = function(a) {
        return function() {
            var b = arguments;
            return this.forEach(function(c) {
                c[a].apply(c, b);
            });
        };
    }(H));
}(window.Raphael);
