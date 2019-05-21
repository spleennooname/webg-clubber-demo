! function(e) {
    var t = window.webpackHotUpdate;
    window.webpackHotUpdate = function(e, n) {
        ! function(e, t) {
            if (!w[e] || !b[e]) return;
            for (var n in b[e] = !1, t) Object.prototype.hasOwnProperty.call(t, n) && (m[n] = t[n]);
            0 == --g && 0 === v && M()
        }(e, n), t && t(e, n)
    };
    var n, r = !0,
        i = "4a385b44c8d3cd8ed7cf",
        o = 1e4,
        a = {},
        s = [],
        l = [];

    function u(e) {
        var t = C[e];
        if (!t) return R;
        var r = function(r) {
                return t.hot.active ? (C[r] ? -1 === C[r].parents.indexOf(e) && C[r].parents.push(e) : (s = [e], n = r), -1 === t.children.indexOf(r) && t.children.push(r)) : (console.warn("[HMR] unexpected require(" + r + ") from disposed module " + e), s = []), R(r)
            },
            i = function(e) {
                return {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return R[e]
                    },
                    set: function(t) {
                        R[e] = t
                    }
                }
            };
        for (var o in R) Object.prototype.hasOwnProperty.call(R, o) && "e" !== o && "t" !== o && Object.defineProperty(r, o, i(o));
        return r.e = function(e) {
            return "ready" === f && d("prepare"), v++, R.e(e).then(t, function(e) {
                throw t(), e
            });

            function t() {
                v--, "prepare" === f && (y[e] || A(e), 0 === v && 0 === g && M())
            }
        }, r.t = function(e, t) {
            return 1 & t && (e = r(e)), R.t(e, -2 & t)
        }, r
    }

    function c(e) {
        var t = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _disposeHandlers: [],
            _main: n !== e,
            active: !0,
            accept: function(e, n) {
                if (void 0 === e) t._selfAccepted = !0;
                else if ("function" == typeof e) t._selfAccepted = e;
                else if ("object" == typeof e)
                    for (var r = 0; r < e.length; r++) t._acceptedDependencies[e[r]] = n || function() {};
                else t._acceptedDependencies[e] = n || function() {}
            },
            decline: function(e) {
                if (void 0 === e) t._selfDeclined = !0;
                else if ("object" == typeof e)
                    for (var n = 0; n < e.length; n++) t._declinedDependencies[e[n]] = !0;
                else t._declinedDependencies[e] = !0
            },
            dispose: function(e) {
                t._disposeHandlers.push(e)
            },
            addDisposeHandler: function(e) {
                t._disposeHandlers.push(e)
            },
            removeDisposeHandler: function(e) {
                var n = t._disposeHandlers.indexOf(e);
                n >= 0 && t._disposeHandlers.splice(n, 1)
            },
            check: T,
            apply: P,
            status: function(e) {
                if (!e) return f;
                h.push(e)
            },
            addStatusHandler: function(e) {
                h.push(e)
            },
            removeStatusHandler: function(e) {
                var t = h.indexOf(e);
                t >= 0 && h.splice(t, 1)
            },
            data: a[e]
        };
        return n = void 0, t
    }
    var h = [],
        f = "idle";

    function d(e) {
        f = e;
        for (var t = 0; t < h.length; t++) h[t].call(null, e)
    }
    var p, m, _, g = 0,
        v = 0,
        y = {},
        b = {},
        w = {};

    function x(e) {
        return +e + "" === e ? +e : e
    }

    function T(e) {
        if ("idle" !== f) throw new Error("check() is only allowed in idle status");
        return r = e, d("check"), (t = o, t = t || 1e4, new Promise(function(e, n) {
            if ("undefined" == typeof XMLHttpRequest) return n(new Error("No browser support"));
            try {
                var r = new XMLHttpRequest,
                    o = R.p + "" + i + ".hot-update.json";
                r.open("GET", o, !0), r.timeout = t, r.send(null)
            } catch (e) {
                return n(e)
            }
            r.onreadystatechange = function() {
                if (4 === r.readyState)
                    if (0 === r.status) n(new Error("Manifest request to " + o + " timed out."));
                    else if (404 === r.status) e();
                else if (200 !== r.status && 304 !== r.status) n(new Error("Manifest request to " + o + " failed."));
                else {
                    try {
                        var t = JSON.parse(r.responseText)
                    } catch (e) {
                        return void n(e)
                    }
                    e(t)
                }
            }
        })).then(function(e) {
            if (!e) return d("idle"), null;
            b = {}, y = {}, w = e.c, _ = e.h, d("prepare");
            var t = new Promise(function(e, t) {
                p = {
                    resolve: e,
                    reject: t
                }
            });
            m = {};
            return A(0), "prepare" === f && 0 === v && 0 === g && M(), t
        });
        var t
    }

    function A(e) {
        w[e] ? (b[e] = !0, g++, function(e) {
            var t = document.createElement("script");
            t.charset = "utf-8", t.src = R.p + "" + e + "." + i + ".hot-update.js", document.head.appendChild(t)
        }(e)) : y[e] = !0
    }

    function M() {
        d("ready");
        var e = p;
        if (p = null, e)
            if (r) Promise.resolve().then(function() {
                return P(r)
            }).then(function(t) {
                e.resolve(t)
            }, function(t) {
                e.reject(t)
            });
            else {
                var t = [];
                for (var n in m) Object.prototype.hasOwnProperty.call(m, n) && t.push(x(n));
                e.resolve(t)
            }
    }

    function P(t) {
        if ("ready" !== f) throw new Error("apply() is only allowed in ready status");
        var n, r, o, l, u;

        function c(e) {
            for (var t = [e], n = {}, r = t.slice().map(function(e) {
                    return {
                        chain: [e],
                        id: e
                    }
                }); r.length > 0;) {
                var i = r.pop(),
                    o = i.id,
                    a = i.chain;
                if ((l = C[o]) && !l.hot._selfAccepted) {
                    if (l.hot._selfDeclined) return {
                        type: "self-declined",
                        chain: a,
                        moduleId: o
                    };
                    if (l.hot._main) return {
                        type: "unaccepted",
                        chain: a,
                        moduleId: o
                    };
                    for (var s = 0; s < l.parents.length; s++) {
                        var u = l.parents[s],
                            c = C[u];
                        if (c) {
                            if (c.hot._declinedDependencies[o]) return {
                                type: "declined",
                                chain: a.concat([u]),
                                moduleId: o,
                                parentId: u
                            }; - 1 === t.indexOf(u) && (c.hot._acceptedDependencies[o] ? (n[u] || (n[u] = []), h(n[u], [o])) : (delete n[u], t.push(u), r.push({
                                chain: a.concat([u]),
                                id: u
                            })))
                        }
                    }
                }
            }
            return {
                type: "accepted",
                moduleId: e,
                outdatedModules: t,
                outdatedDependencies: n
            }
        }

        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n]; - 1 === e.indexOf(r) && e.push(r)
            }
        }
        t = t || {};
        var p = {},
            g = [],
            v = {},
            y = function() {
                console.warn("[HMR] unexpected require(" + T.moduleId + ") to disposed module")
            };
        for (var b in m)
            if (Object.prototype.hasOwnProperty.call(m, b)) {
                var T;
                u = x(b);
                var A = !1,
                    M = !1,
                    P = !1,
                    E = "";
                switch ((T = m[b] ? c(u) : {
                    type: "disposed",
                    moduleId: b
                }).chain && (E = "\nUpdate propagation: " + T.chain.join(" -> ")), T.type) {
                    case "self-declined":
                        t.onDeclined && t.onDeclined(T), t.ignoreDeclined || (A = new Error("Aborted because of self decline: " + T.moduleId + E));
                        break;
                    case "declined":
                        t.onDeclined && t.onDeclined(T), t.ignoreDeclined || (A = new Error("Aborted because of declined dependency: " + T.moduleId + " in " + T.parentId + E));
                        break;
                    case "unaccepted":
                        t.onUnaccepted && t.onUnaccepted(T), t.ignoreUnaccepted || (A = new Error("Aborted because " + u + " is not accepted" + E));
                        break;
                    case "accepted":
                        t.onAccepted && t.onAccepted(T), M = !0;
                        break;
                    case "disposed":
                        t.onDisposed && t.onDisposed(T), P = !0;
                        break;
                    default:
                        throw new Error("Unexception type " + T.type)
                }
                if (A) return d("abort"), Promise.reject(A);
                if (M)
                    for (u in v[u] = m[u], h(g, T.outdatedModules), T.outdatedDependencies) Object.prototype.hasOwnProperty.call(T.outdatedDependencies, u) && (p[u] || (p[u] = []), h(p[u], T.outdatedDependencies[u]));
                P && (h(g, [T.moduleId]), v[u] = y)
            }
        var I, O = [];
        for (r = 0; r < g.length; r++) u = g[r], C[u] && C[u].hot._selfAccepted && O.push({
            module: u,
            errorHandler: C[u].hot._selfAccepted
        });
        d("dispose"), Object.keys(w).forEach(function(e) {
            !1 === w[e] && function(e) {
                delete installedChunks[e]
            }(e)
        });
        for (var D, S, F = g.slice(); F.length > 0;)
            if (u = F.pop(), l = C[u]) {
                var N = {},
                    k = l.hot._disposeHandlers;
                for (o = 0; o < k.length; o++)(n = k[o])(N);
                for (a[u] = N, l.hot.active = !1, delete C[u], delete p[u], o = 0; o < l.children.length; o++) {
                    var B = C[l.children[o]];
                    B && ((I = B.parents.indexOf(u)) >= 0 && B.parents.splice(I, 1))
                }
            }
        for (u in p)
            if (Object.prototype.hasOwnProperty.call(p, u) && (l = C[u]))
                for (S = p[u], o = 0; o < S.length; o++) D = S[o], (I = l.children.indexOf(D)) >= 0 && l.children.splice(I, 1);
        for (u in d("apply"), i = _, v) Object.prototype.hasOwnProperty.call(v, u) && (e[u] = v[u]);
        var G = null;
        for (u in p)
            if (Object.prototype.hasOwnProperty.call(p, u) && (l = C[u])) {
                S = p[u];
                var L = [];
                for (r = 0; r < S.length; r++)
                    if (D = S[r], n = l.hot._acceptedDependencies[D]) {
                        if (-1 !== L.indexOf(n)) continue;
                        L.push(n)
                    }
                for (r = 0; r < L.length; r++) {
                    n = L[r];
                    try {
                        n(S)
                    } catch (e) {
                        t.onErrored && t.onErrored({
                            type: "accept-errored",
                            moduleId: u,
                            dependencyId: S[r],
                            error: e
                        }), t.ignoreErrored || G || (G = e)
                    }
                }
            }
        for (r = 0; r < O.length; r++) {
            var U = O[r];
            u = U.module, s = [u];
            try {
                R(u)
            } catch (e) {
                if ("function" == typeof U.errorHandler) try {
                    U.errorHandler(e)
                } catch (n) {
                    t.onErrored && t.onErrored({
                        type: "self-accept-error-handler-errored",
                        moduleId: u,
                        error: n,
                        originalError: e
                    }), t.ignoreErrored || G || (G = n), G || (G = e)
                } else t.onErrored && t.onErrored({
                    type: "self-accept-errored",
                    moduleId: u,
                    error: e
                }), t.ignoreErrored || G || (G = e)
            }
        }
        return G ? (d("fail"), Promise.reject(G)) : (d("idle"), new Promise(function(e) {
            e(g)
        }))
    }
    var C = {};

    function R(t) {
        if (C[t]) return C[t].exports;
        var n = C[t] = {
            i: t,
            l: !1,
            exports: {},
            hot: c(t),
            parents: (l = s, s = [], l),
            children: []
        };
        return e[t].call(n.exports, n, n.exports, u(t)), n.l = !0, n.exports
    }
    R.m = e, R.c = C, R.d = function(e, t, n) {
        R.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, R.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, R.t = function(e, t) {
        if (1 & t && (e = R(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (R.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) R.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, R.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return R.d(t, "a", t), t
    }, R.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, R.p = "", R.h = function() {
        return i
    }, u("./src/app.js")(R.s = "./src/app.js")
}({
    "./node_modules/clubber/index.js": function(e, t) {
        var n = function(e) {
            e || (e = {}), this.context = e.context || new(window.AudioContext || window.webkitAudioContext);
            var t = e.analyser || this.context.createAnalyser();
            t.fftSize = e.analyser ? e.analyser.fftSize : e.size || 2048, e.mute = !!e.analyser || e.mute, this.fps = e.fps || 60, Object.defineProperty(this, "smoothing", {
                get: function() {
                    return t.smoothingTimeConstant
                },
                set: function(e) {
                    t.smoothingTimeConstant = e
                }
            }), Object.defineProperty(this, "fftSize", {
                get: function() {
                    return t.fftSize
                },
                set: function(e) {
                    t.fftSize = e
                }
            }), this._muted = !0, Object.defineProperty(this, "muted", {
                get: function() {
                    return this._muted
                },
                set: function(e) {
                    if (!this.analyser) return !0;
                    this._muted ? !1 === e && (this.analyser.connect(this.context.destination), this._muted = !1) : !0 === e && (this.analyser.disconnect(this.context.destination), this._muted = !0)
                }
            }), Object.defineProperty(this, "sampleRate", {
                get: function() {
                    return this.context.sampleRate
                }
            }), this.analyser = t, this.resize(t.frequencyBinCount), this.muted = !!e.mute
        };
        n.prototype.resize = function(e) {
            if (this.bufferLength !== e) {
                this.maxBin = 0;
                this.bufferLength = e, this.data = new Uint8Array(this.bufferLength), this.keys = new Uint8Array(this.bufferLength), this.noteSums = new Uint16Array(128), this.notes = new Uint8Array(128), this.weights = new Uint8Array(128);
                for (var t = 0, n = this.sampleRate / 2 / this.bufferLength; t < this.bufferLength; t++) {
                    var r = (t + .5) * n;
                    if (this.maxBin = t, r > 13280) break;
                    var i = Math.floor(17.3123405046 * Math.log(.12231220585 * r));
                    this.keys[t] = i, this.weights[i]++
                }
                var o = 0;
                for (t = 0; t < 128; t++) this.weights[t] || (o = t);
                this.holeIndex = o + 1
            }
        }, n.prototype.listen = function(e) {
            this.source && this.source.disconnect(this.analyser), e instanceof AudioNode ? (this.el = null, this.source = e) : (this.el = e, e._mediaElementSource ? this.source = e._mediaElementSource : this.source = e._mediaElementSource = this.context.createMediaElementSource(e)), this.source.connect(this.analyser)
        }, n.prototype.band = function(e) {
            var t = this,
                n = function(e) {
                    var t = {
                        from: 1,
                        to: 128,
                        low: 64,
                        high: 128,
                        smooth: [.1, .1, .1, .1],
                        adapt: [1, 1, 1, 1],
                        snap: .33,
                        template: [0, 1, 2, 3]
                    };
                    if (e) {
                        for (var n in t) e[n] || (e[n] = t[n]);
                        if ("string" == typeof e.template) {
                            for (var r = [], i = 0; i < e.template.length; i++) r.push(parseInt(e.template[i]));
                            e.template = r
                        }
                        var o = {
                            from: e.from,
                            to: e.to,
                            low: this.rect ? this.rect.low : e.low,
                            high: this.rect ? this.rect.high : e.high
                        };
                        this.rect = o;
                        var a = new Float32Array(e.template.length);
                        this.data && a.set(this.data), this.config = e, this.data = a
                    }
                    return this
                },
                r = n.call({}, e);
            return function(e, i) {
                function o(e, t, n) {
                    if (n = n || 0, t)
                        if (t instanceof Float32Array) t.set(e, n);
                        else if (Array.isArray(t))
                        for (var r = Math.min(t.length, e.length) - n, i = 0; i < r; i++) t[n + i] = e[i];
                    else t.fromArray && t.fromArray(e)
                }
                var a = r.config,
                    s = r.data,
                    l = r.rect;
                if (l.high = Math.max(l.high, l.low + 1), "object" == typeof i && (n.call(r, i), i = arguments[2]), i = i || 0, r.time > t.time) return o(s, e, i), l;
                for (var u = a.smooth, c = a.snap, h = 0, f = 0, d = 0, p = 0, m = 128, _ = 0, g = 0, v = 0, y = 0, b = 0, w = a.from; w < a.to; w++) {
                    var x = t.notes[w] / 2,
                        T = Math.min(l.high, x);
                    if (T >= l.low) {
                        T -= l.low;
                        var A = w - a.from;
                        y += Math.round(w / 12) * T, g += w % 12 * T, v += A * T, _ += T, A, b++, x > d ? (h = w, d = x, f = T) : T < m && (p = w, m = T)
                    }
                }

                function M(e, t, n, r) {
                    return e = e || 0, n = void 0 === n ? .1 : n, (n = Math.min(n, r)) < 0 && (n = e > t ? Math.abs(r) : -n), n * e + (1 - n) * t
                }
                b && (r.midx = p % 12 / 12, r.idx = h % 12 / 12, r.avg = g / _ / 12);
                var P = a.to - a.from,
                    C = b ? _ / b : 0,
                    R = l.high - l.low,
                    E = a.high - a.low,
                    I = P * R,
                    O = Math.min(a.high, a.low + C + a.adapt[2] * E),
                    D = Math.max(a.low, a.low + C - a.adapt[0] * E),
                    S = Math.floor(a.from / 12),
                    F = Math.ceil(a.to / 12);
                f = R ? f / R : 0, void 0 === r.time && (r.time = t.time);
                for (var N = r.time, k = 1e3 / t.fps, B = t.time; N < B; N += k) a.template.forEach(function(e, t) {
                    switch (e) {
                        default: s[t] = M(r.idx, s[t], u[t], c);
                        break;
                        case 1:
                                s[t] = M(r.midx, s[t], u[t], c);
                            break;
                        case 2:
                                s[t] = M(r.avg, s[t], u[t], c);
                            break;
                        case 3:
                                s[t] = M(f, s[t], u[t], c);
                            break;
                        case 4:
                                s[t] = M(b && R ? C / R : 0, s[t], u[t], c);
                            break;
                        case 5:
                                s[t] = M(_ ? v / _ / P : 0, s[t], u[t], c);
                            break;
                        case 6:
                                s[t] = M(_ ? (y / _ - S) / (F - S) : 0, s[t], u[t], c);
                            break;
                        case 7:
                                s[t] = M(I ? _ / I : 0, s[t], u[t], c);
                            break;
                        case 8:
                                s[t] = M((l.low - a.low) / E, s[t], u[t], c);
                            break;
                        case 9:
                                s[t] = M((l.high - a.low) / E, s[t], u[t], c)
                    }
                }), l.high = M(O, l.high, a.adapt[3], c), l.low = M(D, l.low, a.adapt[1], c);
                return r.time = N, o(s, e, i), l
            }
        }, n.prototype.update = function(e, t, n) {
            this.cache;
            if (t) {
                if (n || 128 === t.length) return void this.notes.set(t);
                this.resize(t.length)
            } else this.analyser.getByteFrequencyData(this.data), n = !1, t = this.data, this.resize(this.analyser.frequencyBinCount);
            for (var r = 0; r < this.notes.length; r++) this.noteSums[r] = 0;
            for (r = 0; r < this.maxBin; r++) this.noteSums[this.keys[r]] += t[r];
            var i = 0,
                o = 0;
            for (r = 0; r < this.notes.length; r++) {
                var a = this.weights[r];
                if (a) {
                    var s = this.noteSums[r] / a;
                    if (this.notes[r] = s, !(r > this.holeIndex)) {
                        for (var l = r - i, u = s - o, c = i ? 1 : 0; c < l; c++) this.notes[i + c] = o + c * u / l;
                        o = s, i = r
                    }
                }
            }
            this.time = isNaN(parseFloat(e)) ? window.performance.now() : parseFloat(e)
        }, n.prototype.descriptions = ["Most powerful note index", "Least powerfull note index", "Power weighted note average", "Power of the strongest note", "Average power of active notes", "Power weighted average midi index", "Power weighted average octave index", "Ratio of spectrum window area covered", "Adaptive low threshold relative to bounds", "Adaptive high threshold relative to bounds"], e.exports = window.Clubber = n
    },
    "./node_modules/detect-gpu/build/detect-gpu.min.js": function(e, t, n) {
        window, e.exports = function(e) {
            var t = {};

            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }
            return n.m = e, n.c = t, n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            }, n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, n.t = function(e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var i in e) n.d(r, i, function(t) {
                        return e[t]
                    }.bind(null, i));
                return r
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 1)
        }([function(e, t, n) {
            var r, i, o, a;

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            a = function(e) {
                "use strict";
                var t = function() {
                    function e(e) {
                        this.cache = new Map, this.userAgent = e || (window && window.navigator ? window.navigator.userAgent : ""), this.android = !/like android/i.test(this.userAgent) && /android/i.test(this.userAgent), this.iOS = this.match(1, /(iphone|ipod|ipad)/i).toLowerCase()
                    }
                    return e.prototype.match = function(e, t) {
                        var n = this.userAgent.match(t);
                        return n && 1 < n.length && n[e] || ""
                    }, Object.defineProperty(e.prototype, "isMobile", {
                        get: function() {
                            return this.cache.get("isMobile") || (!this.isTablet && (/[^-]mobi/i.test(this.userAgent) || "iphone" === this.iOS || "ipod" === this.iOS || this.android || /nexus\s*[0-6]\s*/i.test(this.userAgent)) ? (this.cache.set("isMobile", !0), !0) : (this.cache.set("isMobile", !1), !1))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "isTablet", {
                        get: function() {
                            return this.cache.get("isTablet") || (/tablet/i.test(this.userAgent) && !/tablet pc/i.test(this.userAgent) || "ipad" === this.iOS || this.android && !/[^-]mobi/i.test(this.userAgent) || !/nexus\s*[0-6]\s*/i.test(this.userAgent) && /nexus\s*[0-9]+/i.test(this.userAgent) ? (this.cache.set("isTablet", !0), !0) : (this.cache.set("isTablet", !1), !1))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "isDesktop", {
                        get: function() {
                            var e = this.cache.get("isDesktop");
                            if (e) return e;
                            var t = !this.isMobile && !this.isTablet;
                            return this.cache.set("isDesktop", t), t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "isiOS", {
                        get: function() {
                            return this.cache.get("isiOS") || !!this.iOS && {
                                name: "iOS",
                                version: this.match(1, /os (\d+([_\s]\d+)*) like mac os x/i).replace(/[_\s]/g, ".")
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "isAndroid", {
                        get: function() {
                            return this.cache.get("isAndroid") || !!this.android && {
                                name: "Android",
                                version: this.match(1, /android[ \/-](\d+(\.\d+)*)/i)
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "browser", {
                        get: function() {
                            var e = this.cache.get("browser");
                            if (e) return e;
                            var t, n = this.match(1, /version\/(\d+(\.\d+)?)/i);
                            return t = /opera/i.test(this.userAgent) ? {
                                name: "Opera",
                                version: n || this.match(1, /(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                            } : /opr\/|opios/i.test(this.userAgent) ? {
                                name: "Opera",
                                version: this.match(1, /(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || n
                            } : /SamsungBrowser/i.test(this.userAgent) ? {
                                name: "Samsung Internet for Android",
                                version: n || this.match(1, /(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
                            } : /yabrowser/i.test(this.userAgent) ? {
                                name: "Yandex Browser",
                                version: n || this.match(1, /(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                            } : /ucbrowser/i.test(this.userAgent) ? {
                                name: "UC Browser",
                                version: this.match(1, /(?:ucbrowser)[\s\/](\d+(\.\d+)?)/i)
                            } : /msie|trident/i.test(this.userAgent) ? {
                                name: "Internet Explorer",
                                version: this.match(1, /(?:msie |rv:)(\d+(\.\d+)?)/i)
                            } : /edg([ea]|ios)/i.test(this.userAgent) ? {
                                name: "Microsoft Edge",
                                version: this.match(2, /edg([ea]|ios)\/(\d+(\.\d+)?)/i)
                            } : /firefox|iceweasel|fxios/i.test(this.userAgent) ? {
                                name: "Firefox",
                                version: this.match(1, /(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                            } : /chromium/i.test(this.userAgent) ? {
                                name: "Chromium",
                                version: this.match(1, /(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || n
                            } : /chrome|crios|crmo/i.test(this.userAgent) ? {
                                name: "Chrome",
                                version: this.match(1, /(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                            } : /safari|applewebkit/i.test(this.userAgent) ? {
                                name: "Safari",
                                version: n
                            } : {
                                name: this.match(1, /^(.*)\/(.*) /),
                                version: this.match(2, /^(.*)\/(.*) /)
                            }, this.cache.set("browser", t), t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e
                }();
                e.DetectUA = t, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, "object" == s(t) && void 0 !== e ? a(t) : (i = [t], void 0 === (o = "function" == typeof(r = a) ? r.apply(t, i) : r) || (e.exports = o))
        }, function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
                i = ["736 - AMD Radeon HD 7290", "726 - AMD Radeon HD 8180", "724 - AMD Radeon HD 7310", "722 - AMD Radeon HD 7340", "718 - Intel HD Graphics (Bay Trail)", "677 - Intel HD Graphics (Ivy Bridge)", "673 - AMD Radeon HD 8210", "649 - AMD Radeon HD 8250", "648 - AMD Radeon R6 (Mullins)", "647 - AMD Radeon HD 8240", "639 - AMD Radeon HD 8280", "636 - Intel HD Graphics (Cherry Trail)", "635 - AMD Radeon R2 (Mullins/Beema/Carrizo-L)", "614 - Intel HD Graphics (Haswell)", "605 - Intel HD Graphics 400 (Braswell)", "604 - Intel HD Graphics (Braswell)", "603 - Intel HD Graphics 405 (Braswell)", "583 - Intel HD Graphics 500", "582 - Intel UHD Graphics 600", "581 - AMD Radeon HD 8330", "580 - AMD Radeon HD 8350G", "567 - AMD Radeon HD 8400", "563 - AMD Radeon HD 8450G", "554 - Intel HD Graphics 4200", "553 - AMD Radeon R2 (Stoney Ridge)", "552 - AMD Radeon R3 (Mullins/Beema)", "551 - AMD Radeon R4 (Beema)", "550 - AMD Radeon R5 (Beema/Carrizo-L)", "548 - Intel HD Graphics (Broadwell)", "547 - AMD Radeon R4 (Kaveri)", "546 - AMD Radeon R4 (Stoney Ridge)", "542 - Intel HD Graphics 4000", "541 - AMD Radeon HD 7480D", "533 - Intel HD Graphics 505", "532 - Intel UHD Graphics 605", "531 - Intel HD Graphics 5300", "502 - Intel HD Graphics 510", "501 - Intel HD Graphics 610", "500 - Intel HD Graphics 4400", "499 - Intel HD Graphics 515", "492 - AMD Radeon HD 8470D", "483 - AMD Radeon HD 8550G", "467 - Intel HD Graphics 5000", "464 - AMD Radeon HD 7660G", "463 - NVIDIA GeForce 710M", "460 - AMD Radeon R5 (Kaveri)", "459 - AMD Radeon R5 (Carrizo)", "458 - Intel HD Graphics 615", "457 - Intel UHD Graphics 615", "456 - Intel UHD Graphics 617", "447 - Intel HD Graphics 5500", "445 - Intel HD Graphics 4600", "442 - AMD Radeon HD 8610G", "440 - Intel Iris Graphics 5100", "438 - NVIDIA Quadro K610M", "437 - Intel HD Graphics 6000", "431 - AMD Radeon R5 M420", "430 - AMD Radeon R5 M315", "428 - AMD Radeon R5 M320", "425 - AMD Radeon R5 (Stoney Ridge)", "424 - NVIDIA GeForce GT 720M", "423 - Intel Iris Graphics 6100", "422 - Intel HD Graphics 520", "421 - AMD Radeon RX Vega 3", "420 - NVIDIA GeForce 820M", "419 - NVIDIA GeForce 910M", "417 - AMD Radeon R5 M255", "416 - AMD Radeon R5 M430", "415 - AMD Radeon R5 M330", "412 - AMD Radeon HD 7560D", "406 - AMD Radeon HD 8650G", "390 - NVIDIA Quadro K1000M", "388 - AMD Radeon HD 7660D", "387 - AMD Radeon R6 M255DX", "380 - Intel HD Graphics 5600", "370 - AMD FirePro W2100", "361 - AMD Radeon R6 (Kaveri)", "349 - AMD Radeon R6 (Carrizo)", "348 - Intel HD Graphics 620", "347 - Intel UHD Graphics 620", "346 - AMD Radeon R5 (Bristol Ridge)", "344 - Intel HD Graphics P530", "343 - Intel HD Graphics 530", "342 - Intel HD Graphics P630", "341 - Intel HD Graphics 630", "340 - Intel UHD Graphics 630", "339 - AMD Radeon RX Vega 6", "337 - AMD Radeon 520", "336 - AMD Radeon R7 M340", "329 - AMD Radeon R7 M440", "328 - AMD Radeon R8 M445DX", "325 - NVIDIA GeForce 920M", "323 - AMD Radeon R7 M360", "320 - AMD Radeon R7 M460", "318 - AMD Radeon R7 (Kaveri)", "317 - AMD Radeon R7 (Carrizo)", "316 - NVIDIA GeForce GT 640M", "315 - AMD Radeon R7 (Bristol Ridge)", "311 - AMD Radeon R7 M265", "307 - AMD FirePro M4100", "304 - NVIDIA GeForce GT 730M", "294 - AMD FirePro M4000", "292 - NVIDIA GeForce 825M", "290 - NVIDIA GeForce GT 735M", "287 - NVIDIA Quadro K2000M", "283 - Intel Iris Graphics 540", "282 - NVIDIA GeForce 920MX", "281 - Intel Iris Plus Graphics 640", "280 - NVIDIA GeForce MX110", "279 - NVIDIA GeForce 830M", "278 - AMD Radeon 530", "277 - Intel Iris Graphics 550", "276 - NVIDIA GeForce 930M", "275 - Intel Iris Plus Graphics 650", "274 - NVIDIA GeForce GT 740M", "273 - AMD Radeon R7 384 Cores (Kaveri Desktop)", "272 - Intel Iris Pro Graphics 5200", "271 - AMD Radeon R7 512 Cores (Kaveri Desktop)", "268 - NVIDIA GeForce GT 745M", "266 - NVIDIA GeForce 840M", "265 - NVIDIA Quadro M500M", "260 - AMD Radeon R7 M445", "259 - Intel Iris Plus Graphics 655", "258 - AMD Radeon R9 M375", "257 - AMD FirePro W4190M", "256 - NVIDIA Quadro M600M", "254 - NVIDIA GeForce 930MX", "253 - NVIDIA GeForce 940M", "252 - AMD Radeon RX Vega 8", "251 - NVIDIA Quadro K1100M", "250 - NVIDIA Quadro M520", "249 - NVIDIA GeForce 940MX", "248 - NVIDIA GeForce MX130", "247 - NVIDIA GeForce MX230", "246 - Intel Iris Pro Graphics 6200", "245 - NVIDIA GeForce GT 750M", "240 - AMD FirePro W4100", "239 - AMD FirePro W4170M", "237 - AMD Radeon R7 M465", "235 - AMD Radeon R9 M265X", "232 - NVIDIA GeForce 845M", "230 - NVIDIA GeForce GT 755M", "229 - AMD Radeon R7 250", "224 - NVIDIA Quadro K2100M", "223 - AMD FirePro M5100", "222 - AMD FirePro M6000", "220 - NVIDIA Quadro K3000M", "214 - AMD FirePro W5130M", "213 - NVIDIA Maxwell GPU Surface Book (940M, GDDR5)", "207 - AMD Radeon R9 M370X", "206 - AMD FirePro W5170M", "205 - NVIDIA Quadro K3100M", "194 - AMD Radeon R9 M470", "189 - Intel Iris Pro Graphics 580", "188 - Intel Iris Pro Graphics P580", "187 - AMD Radeon RX Vega 10", "186 - NVIDIA Quadro K4000M", "182 - NVIDIA Quadro P500", "180 - NVIDIA GeForce 945M", "175 - AMD Radeon RX Vega 11", "173 - NVIDIA Quadro M620", "172 - NVIDIA Quadro M1000M", "171 - NVIDIA GeForce GTX 850M", "170 - AMD Radeon R9 M385X", "169 - AMD Radeon R9 M470X", "168 - AMD Radeon Pro 450", "167 - NVIDIA GeForce GTX 950M", "159 - NVIDIA GeForce GTX 860M", "158 - AMD Radeon Pro WX 3100 Mobile", "157 - AMD Radeon RX 540", "155 - NVIDIA Quadro K4100M", "154 - NVIDIA Quadro K5000M", "153 - NVIDIA Quadro M2000M", "152 - NVIDIA GeForce MX150", "151 - NVIDIA GeForce MX250", "150 - NVIDIA Quadro P600", "149 - NVIDIA GeForce GT 1030 (Desktop)", "148 - AMD Radeon Pro 455", "147 - AMD Radeon Pro 555", "146 - AMD Radeon Pro 555X", "145 - NVIDIA Quadro M1200", "141 - AMD Radeon RX 550 (Laptop)", "140 - AMD Radeon RX 550X (Laptop)", "138 - NVIDIA GeForce GTX 960M", "137 - AMD Radeon Pro WX 4130", "136 - AMD Radeon Pro 460", "135 - AMD Radeon Pro 560", "134 - AMD Radeon Pro 560X", "132 - AMD FirePro M6100", "131 - AMD Radeon R9 M390", "128 - AMD Radeon RX 460 (Laptop)", "121 - NVIDIA GeForce GTX 870M", "120 - NVIDIA Quadro M2200", "119 - AMD Radeon RX 560 (Laptop)", "118 - AMD Radeon RX 560X (Laptop)", "117 - NVIDIA GeForce GTX 965M", "115 - AMD Radeon Pro WX 4150", "114 - AMD Radeon RX 460 (Desktop)", "112 - NVIDIA Quadro P1000", "111 - NVIDIA Quadro K5100M", "107 - AMD Radeon R9 270X", "106 - NVIDIA GeForce GTX 950", "105 - NVIDIA GeForce GTX 880M", "103 - AMD Radeon R7 370", "102 - AMD Radeon R9 M395", "101 - AMD FirePro W7170M", "100 - NVIDIA GeForce GTX 1050 Max-Q", "99 - NVIDIA GeForce GTX 1050 (Laptop)", "98 - NVIDIA GeForce GTX 1050 (Desktop)", "97 - NVIDIA Quadro M3000M", "94 - AMD Radeon R9 M485X", "93 - AMD Radeon Pro Vega 16", "92 - AMD Radeon Pro WX Vega M GL", "91 - AMD Radeon RX Vega M GL / 870", "90 - AMD Radeon R9 M395X", "85 - NVIDIA Quadro M4000M", "84 - NVIDIA GeForce GTX 970M", "83 - NVIDIA Quadro P2000 Max-Q", "82 - NVIDIA Quadro P2000", "81 - NVIDIA GeForce GTX 1050 Ti Max-Q", "80 - NVIDIA GeForce GTX 1050 Ti (Desktop)", "79 - NVIDIA GeForce GTX 1050 Ti (Laptop)", "78 - NVIDIA GeForce GTX 960", "77 - AMD Radeon R9 380", "76 - AMD Radeon R9 280X", "75 - NVIDIA Quadro M5000M", "74 - AMD Radeon Pro Vega 20", "73 - AMD Radeon RX Vega M GH", "72 - NVIDIA GeForce GTX 980M", "65 - AMD Radeon R9 290X", "62 - AMD Radeon RX 470 (Laptop)", "61 - AMD Radeon RX 570 (Laptop)", "60 - AMD Radeon RX 570X (Laptop)", "59 - AMD Radeon RX 470 (Desktop)", "58 - AMD Radeon Pro WX 7100", "56 - NVIDIA Quadro P3000 Max-Q", "55 - NVIDIA GeForce GTX 1060 Max-Q", "54 - NVIDIA GeForce GTX 970", "53 - NVIDIA Quadro P3000", "52 - AMD Radeon RX Vega Mobile", "50 - AMD Radeon RX 580 (Laptop)", "49 - AMD Radeon RX 580X (Laptop)", "48 - NVIDIA Quadro P3200", "47 - NVIDIA Quadro P4000 Max-Q", "46 - NVIDIA GeForce GTX 1060 (Laptop)", "45 - AMD Radeon RX 480 (Desktop)", "44 - NVIDIA Quadro P4000", "43 - NVIDIA GeForce GTX 1660 Ti (Laptop)", "42 - NVIDIA GeForce GTX 1060 (Desktop)", "40 - AMD Radeon R9 390X", "39 - NVIDIA Quadro M5500", "38 - NVIDIA GeForce GTX 980 (Laptop)", "37 - AMD Radeon RX 580 (Desktop)", "36 - AMD Radeon RX 590 (Desktop)", "35 - NVIDIA GeForce GTX 980", "34 - AMD Radeon R9 Nano", "33 - AMD Radeon R9 Fury", "31 - NVIDIA Quadro P5000 Max-Q", "30 - NVIDIA GeForce GTX 1070 Max-Q", "29 - NVIDIA GeForce GTX 980 Ti", "28 - NVIDIA Quadro P5000", "27 - NVIDIA Quadro P4200", "26 - NVIDIA GeForce GTX 1070 (Laptop)", "25 - NVIDIA GeForce GTX 1080 Max-Q", "24 - NVIDIA GeForce GTX 1070 (Desktop)", "23 - AMD Radeon Pro Vega 56", "22 - NVIDIA GeForce RTX 2060 Max-Q", "21 - NVIDIA Quadro P5200", "19 - NVIDIA GeForce RTX 2060 (Laptop)", "18 - NVIDIA GeForce GTX 1070 Ti (Desktop)", "17 - NVIDIA GeForce RTX 2060 (Desktop)", "16 - NVIDIA GeForce GTX 1080 (Laptop)", "15 - AMD Radeon RX Vega 64", "14 - NVIDIA GeForce RTX 2070 Max-Q", "13 - NVIDIA GeForce RTX 2070 (Laptop)", "12 - NVIDIA GeForce GTX 1080 (Desktop)", "11 - NVIDIA GeForce RTX 2070 (Desktop)", "10 - NVIDIA GeForce GTX 1070 SLI (Laptop)", "9 - NVIDIA GeForce GTX 1070 SLI (Desktop)", "8 - NVIDIA GeForce GTX 1080 SLI (Laptop)", "7 - NVIDIA Titan X Pascal", "6 - NVIDIA GeForce GTX 1080 Ti (Desktop)", "5 - NVIDIA GeForce RTX 2080 Max-Q", "4 - NVIDIA GeForce RTX 2080 (Laptop)", "3 - NVIDIA GeForce RTX 2080 (Desktop)", "2 - NVIDIA GeForce RTX 2080 Ti (Desktop)", "1 - NVIDIA Titan RTX"],
                o = ["876 - ARM Mali-200", "875 - Qualcomm Adreno 200", "874 - PowerVR SGX530", "873 - PowerVR SGX531", "872 - PowerVR SGX535", "871 - Vivante GC800", "870 - Qualcomm Adreno 203", "869 - Qualcomm Adreno 205", "867 - PowerVR SGX540", "865 - NVIDIA GeForce ULP (Tegra 2)", "864 - ARM Mali-400 MP", "863 - ARM Mali-400 MP2", "862 - Vivante GC1000+ Dual-Core", "861 - Qualcomm Adreno 220", "860 - Broadcom VideoCore-IV", "859 - NVIDIA GeForce ULP (Tegra 3)", "858 - ARM Mali-400 MP4", "857 - Vivante GC4000", "856 - Qualcomm Adreno 225", "848 - Qualcomm Adreno 302", "847 - Vivante GC7000UL", "846 - ARM Mali-T720", "845 - Qualcomm Adreno 304", "844 - Qualcomm Adreno 305", "843 - Qualcomm Adreno 306", "842 - Qualcomm Adreno 308", "841 - PowerVR SGX544", "840 - ARM Mali-T720 MP2", "839 - PowerVR SGX544MP2", "838 - PowerVR SGX545", "835 - PowerVR SGX543MP2", "825 - PowerVR SGX543MP3", "817 - ARM Mali-T830 MP1", "816 - ARM Mali-450 MP4", "815 - ARM Mali-T720 MP4", "814 - PowerVR GE8100", "813 - PowerVR GE8320", "812 - ARM Mali-T760 MP2", "811 - Qualcomm Adreno 320", "810 - ARM Mali-T624", "809 - PowerVR SGX543MP4", "782 - ARM Mali-T830 MP2", "781 - Qualcomm Adreno 405", "780 - PowerVR G6200", "779 - NVIDIA GeForce Tegra 4", "774 - ARM Mali-T604 MP4", "768 - ARM Mali-T830 MP3", "767 - ARM Mali-T860 MP2", "763 - Qualcomm Adreno 505", "762 - Qualcomm Adreno 506", "761 - Qualcomm Adreno 508", "760 - Qualcomm Adreno 509", "759 - ARM Mali-T628 MP4", "758 - PowerVR SGX554MP4", "720 - ARM Mali-T760 MP4", "719 - ARM Mali-T628 MP6", "718 - Intel HD Graphics (Bay Trail)", "717 - PowerVR G6400", "716 - PowerVR GX6250", "715 - PowerVR G6430", "714 - Qualcomm Adreno 330", "713 - Qualcomm Adreno 510", "712 - Qualcomm Adreno 512", "637 - ARM Mali-G51 MP4", "636 - Intel HD Graphics (Cherry Trail)", "634 - Qualcomm Adreno 616", "633 - Qualcomm Adreno 418", "613 - Qualcomm Adreno 420", "612 - PowerVR GX6450", "602 - ARM Mali-T880 MP2", "601 - ARM Mali-T760 MP6", "569 - ARM Mali-T880 MP4", "568 - ARM Mali-G72 MP3", "549 - Qualcomm Adreno 430", "544 - ARM Mali-G71 MP2", "543 - ARM Mali-T760 MP8", "498 - ARM Mali-T880 MP12", "497 - Apple A9 / PowerVR GT7600", "496 - NVIDIA Tegra K1 Kepler GPU", "495 - PowerVR GXA6850", "494 - Qualcomm Adreno 530", "455 - ARM Mali-G71 MP8", "454 - ARM Mali-G72 MP12", "453 - ARM Mali-G71 MP20", "452 - ARM Mali-G72 MP18", "451 - Qualcomm Adreno 540", "450 - ARM Mali-G76 MP10", "449 - Qualcomm Adreno 630", "448 - Qualcomm Adreno 640", "432 - Apple A10 Fusion GPU / PowerVR", "345 - NVIDIA Tegra X1 Maxwell GPU", "322 - Apple A9X / PowerVR Series 7XT", "286 - Apple A10X Fusion GPU / PowerVR", "285 - Apple A11 Bionic GPU", "284 - Apple A12 Bionic GPU", "255 - Apple A12X Bionic GPU"],
                a = function(e, t) {
                    var n = 0;
                    return t.map(function(t) {
                        var r = Math.round(e.length / 100 * t),
                            i = e.slice(n, n + r);
                        return n += r, i
                    })
                };

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, "getGPUTier", function() {
                return f
            });
            var l = new r.DetectUA;

            function u(e) {
                return e.toLowerCase().split("- ")[1].split(" /")[0]
            }

            function c(e) {
                return e.replace(/[\D]/g, "")
            }
            var h = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.mobileBenchmarkPercentages = [10, 40, 30, 20], this.desktopBenchmarkPercentages = [10, 40, 30, 20], this.forceRendererString = !1, this.forceMobile = !1, s(this, t);
                var n, r, h, f, d = l.isMobile || l.isTablet || this.forceMobile,
                    p = !d,
                    m = function() {
                        var e = {
                                alpha: !1,
                                stencil: !1,
                                antialias: !1,
                                depth: !1,
                                failIfMajorPerformanceCaveat: !0
                            },
                            t = document.createElement("canvas"),
                            n = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
                        return !!(n && n instanceof WebGLRenderingContext) && n
                    }();
                if (!m) return d ? {
                    tier: "GPU_MOBILE_TIER_0",
                    type: "WEBGL_UNSUPPORTED"
                } : {
                    tier: "GPU_DESKTOP_TIER_0",
                    type: "WEBGL_UNSUPPORTED"
                };
                n = !1 === this.forceRendererString ? function(e) {
                    if (e) {
                        var t = e.getExtension("WEBGL_debug_renderer_info");
                        return t && e.getParameter(t.UNMASKED_RENDERER_WEBGL)
                    }
                    return !1
                }(m) : this.forceRendererString, (f = n.toLowerCase()).includes("angle (") && f.includes("direct3d") && (f = f.replace("angle (", "").split(" direct3d")[0]), f.includes("nvidia") && f.includes("gb") && (f = f.split(/\dgb/)[0]);
                var _ = (n = f).replace(/[\D]/g, "");
                if (/(radeon hd 6970m|radeon hd 6770m|radeon hd 6490m|radeon hd 6630m|radeon hd 6750m|radeon hd 5750|radeon hd 5670|radeon hd 4850|radeon hd 4870|radeon hd 4670|geforce 9400m|geforce 320m|geforce 330m|geforce gt 130|geforce gt 120|geforce gtx 285|geforce 8600|geforce 9600m|geforce 9400m|geforce 8800 gs|geforce 8800 gt|quadro fx 5|quadro fx 4|radeon hd 2600|radeon hd 2400|radeon hd 2600|mali-4|mali-3|mali-2)/.test(n)) return d ? {
                    tier: "GPU_MOBILE_TIER_0",
                    type: "BLACKLISTED"
                } : {
                    tier: "GPU_DESKTOP_TIER_0",
                    type: "BLACKLISTED"
                };
                if (d) {
                    var g = a(o, this.mobileBenchmarkPercentages),
                        v = n.includes("adreno"),
                        y = n.includes("apple"),
                        b = n.includes("mali") && !n.includes("mali-t"),
                        w = n.includes("mali-t"),
                        x = n.includes("nvidia"),
                        T = n.includes("powervr");
                    return g.forEach(function(e, t) {
                        return e.forEach(function(e) {
                            var n = u(e),
                                i = c(n);
                            (n.includes("adreno") && v || n.includes("apple") && y || n.includes("mali") && !n.includes("mali-t") && b || n.includes("mali-t") && w || n.includes("nvidia") && x || n.includes("powervr") && T) && i.includes(_) && (r = "GPU_MOBILE_TIER_".concat(t), h = "BENCHMARK - ".concat(n))
                        })
                    }), r || (r = "GPU_MOBILE_TIER_1", h = "FALLBACK"), {
                        tier: r,
                        type: h
                    }
                }
                if (p) {
                    var A = a(i, this.desktopBenchmarkPercentages),
                        M = n.includes("intel"),
                        P = n.includes("amd"),
                        C = n.includes("nvidia");
                    return A.forEach(function(e, t) {
                        return e.forEach(function(e) {
                            var n = u(e),
                                i = c(n);
                            (n.includes("intel") && M || n.includes("amd") && P || n.includes("nvidia") && C) && i.includes(_) && (r = "GPU_DESKTOP_TIER_".concat(t), h = "BENCHMARK - ".concat(n))
                        })
                    }), r || (r = "GPU_DESKTOP_TIER_1", h = "FALLBACK"), {
                        tier: r,
                        type: h
                    }
                }
                return {
                    tier: r,
                    type: h
                }
            };

            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new h(e)
            }
        }])
    },
    "./node_modules/gsap/TweenLite.js": function(e, t, n) {
        "use strict";
        (function(e, r) {
            n.d(t, "e", function() {
                return i
            }), n.d(t, "g", function() {
                return a
            }), n.d(t, "f", function() {
                return o
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "d", function() {
                return h
            });
            /*!
             * VERSION: 2.1.2
             * DATE: 2019-03-01
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             */
            var i = "undefined" != typeof window ? window : e.exports && void 0 !== r ? r : {},
                o = function(e) {
                    var t = {},
                        n = e.document,
                        r = e.GreenSockGlobals = e.GreenSockGlobals || e;
                    if (r.TweenLite) return r.TweenLite;
                    var i, o, a, s, l, u, c, h = function(e) {
                            var t, n = e.split("."),
                                i = r;
                            for (t = 0; t < n.length; t++) i[n[t]] = i = i[n[t]] || {};
                            return i
                        },
                        f = h("com.greensock"),
                        d = function(e) {
                            var t, n = [],
                                r = e.length;
                            for (t = 0; t !== r; n.push(e[t++]));
                            return n
                        },
                        p = function() {},
                        m = (u = Object.prototype.toString, c = u.call([]), function(e) {
                            return null != e && (e instanceof Array || "object" == typeof e && !!e.push && u.call(e) === c)
                        }),
                        _ = {},
                        g = function(e, n, i, o) {
                            this.sc = _[e] ? _[e].sc : [], _[e] = this, this.gsClass = null, this.func = i;
                            var a = [];
                            this.check = function(s) {
                                for (var l, u, c, f, d = n.length, p = d; --d > -1;)(l = _[n[d]] || new g(n[d], [])).gsClass ? (a[d] = l.gsClass, p--) : s && l.sc.push(this);
                                if (0 === p && i)
                                    for (c = (u = ("com.greensock." + e).split(".")).pop(), f = h(u.join("."))[c] = this.gsClass = i.apply(i, a), o && (r[c] = t[c] = f), d = 0; d < this.sc.length; d++) this.sc[d].check()
                            }, this.check(!0)
                        },
                        v = e._gsDefine = function(e, t, n, r) {
                            return new g(e, t, n, r)
                        },
                        y = f._class = function(e, t, n) {
                            return t = t || function() {}, v(e, [], function() {
                                return t
                            }, n), t
                        };
                    v.globals = r;
                    var b = [0, 0, 1, 1],
                        w = y("easing.Ease", function(e, t, n, r) {
                            this._func = e, this._type = n || 0, this._power = r || 0, this._params = t ? b.concat(t) : b
                        }, !0),
                        x = w.map = {},
                        T = w.register = function(e, t, n, r) {
                            for (var i, o, a, s, l = t.split(","), u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                                for (o = l[u], i = r ? y("easing." + o, null, !0) : f.easing[o] || {}, a = c.length; --a > -1;) s = c[a], x[o + "." + s] = x[s + o] = i[s] = e.getRatio ? e : e[s] || new e
                        };
                    for ((a = w.prototype)._calcEnd = !1, a.getRatio = function(e) {
                            if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                            var t = this._type,
                                n = this._power,
                                r = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
                            return 1 === n ? r *= r : 2 === n ? r *= r * r : 3 === n ? r *= r * r * r : 4 === n && (r *= r * r * r * r), 1 === t ? 1 - r : 2 === t ? r : e < .5 ? r / 2 : 1 - r / 2
                        }, o = (i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --o > -1;) a = i[o] + ",Power" + o, T(new w(null, null, 1, o), a, "easeOut", !0), T(new w(null, null, 2, o), a, "easeIn" + (0 === o ? ",easeNone" : "")), T(new w(null, null, 3, o), a, "easeInOut");
                    x.linear = f.easing.Linear.easeIn, x.swing = f.easing.Quad.easeInOut;
                    var A = y("events.EventDispatcher", function(e) {
                        this._listeners = {}, this._eventTarget = e || this
                    });
                    (a = A.prototype).addEventListener = function(e, t, n, r, i) {
                        i = i || 0;
                        var o, a, u = this._listeners[e],
                            c = 0;
                        for (this !== s || l || s.wake(), null == u && (this._listeners[e] = u = []), a = u.length; --a > -1;)(o = u[a]).c === t && o.s === n ? u.splice(a, 1) : 0 === c && o.pr < i && (c = a + 1);
                        u.splice(c, 0, {
                            c: t,
                            s: n,
                            up: r,
                            pr: i
                        })
                    }, a.removeEventListener = function(e, t) {
                        var n, r = this._listeners[e];
                        if (r)
                            for (n = r.length; --n > -1;)
                                if (r[n].c === t) return void r.splice(n, 1)
                    }, a.dispatchEvent = function(e) {
                        var t, n, r, i = this._listeners[e];
                        if (i)
                            for ((t = i.length) > 1 && (i = i.slice(0)), n = this._eventTarget; --t > -1;)(r = i[t]) && (r.up ? r.c.call(r.s || n, {
                                type: e,
                                target: n
                            }) : r.c.call(r.s || n))
                    };
                    var M = e.requestAnimationFrame,
                        P = e.cancelAnimationFrame,
                        C = Date.now || function() {
                            return (new Date).getTime()
                        },
                        R = C();
                    for (o = (i = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !M;) M = e[i[o] + "RequestAnimationFrame"], P = e[i[o] + "CancelAnimationFrame"] || e[i[o] + "CancelRequestAnimationFrame"];
                    y("Ticker", function(e, t) {
                        var r, i, o, a, u, c = this,
                            h = C(),
                            f = !(!1 === t || !M) && "auto",
                            d = 500,
                            m = 33,
                            _ = function(e) {
                                var t, n, s = C() - R;
                                s > d && (h += s - m), R += s, c.time = (R - h) / 1e3, t = c.time - u, (!r || t > 0 || !0 === e) && (c.frame++, u += t + (t >= a ? .004 : a - t), n = !0), !0 !== e && (o = i(_)), n && c.dispatchEvent("tick")
                            };
                        A.call(c), c.time = c.frame = 0, c.tick = function() {
                            _(!0)
                        }, c.lagSmoothing = function(e, t) {
                            if (!arguments.length) return d < 1e8;
                            d = e || 1e8, m = Math.min(t, d, 0)
                        }, c.sleep = function() {
                            null != o && (f && P ? P(o) : clearTimeout(o), i = p, o = null, c === s && (l = !1))
                        }, c.wake = function(e) {
                            null !== o ? c.sleep() : e ? h += -R + (R = C()) : c.frame > 10 && (R = C() - d + 5), i = 0 === r ? p : f && M ? M : function(e) {
                                return setTimeout(e, 1e3 * (u - c.time) + 1 | 0)
                            }, c === s && (l = !0), _(2)
                        }, c.fps = function(e) {
                            if (!arguments.length) return r;
                            a = 1 / ((r = e) || 60), u = this.time + a, c.wake()
                        }, c.useRAF = function(e) {
                            if (!arguments.length) return f;
                            c.sleep(), f = e, c.fps(r)
                        }, c.fps(e), setTimeout(function() {
                            "auto" === f && c.frame < 5 && "hidden" !== (n || {}).visibilityState && c.useRAF(!1)
                        }, 1500)
                    }), (a = f.Ticker.prototype = new f.events.EventDispatcher).constructor = f.Ticker;
                    var E = y("core.Animation", function(e, t) {
                        if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !!t.immediateRender, this.data = t.data, this._reversed = !!t.reversed, Q) {
                            l || s.wake();
                            var n = this.vars.useFrames ? q : Q;
                            n.add(this, n._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    s = E.ticker = new f.Ticker, (a = E.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
                    var I = function() {
                        l && C() - R > 2e3 && ("hidden" !== (n || {}).visibilityState || !s.lagSmoothing()) && s.wake();
                        var e = setTimeout(I, 2e3);
                        e.unref && e.unref()
                    };
                    I(), a.play = function(e, t) {
                        return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                    }, a.pause = function(e, t) {
                        return null != e && this.seek(e, t), this.paused(!0)
                    }, a.resume = function(e, t) {
                        return null != e && this.seek(e, t), this.paused(!1)
                    }, a.seek = function(e, t) {
                        return this.totalTime(Number(e), !1 !== t)
                    }, a.restart = function(e, t) {
                        return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
                    }, a.reverse = function(e, t) {
                        return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
                    }, a.render = function(e, t, n) {}, a.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, a.isActive = function() {
                        var e, t = this._timeline,
                            n = this._startTime;
                        return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= n && e < n + this.totalDuration() / this._timeScale - 1e-8
                    }, a._enabled = function(e, t) {
                        return l || s.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
                    }, a._kill = function(e, t) {
                        return this._enabled(!1, !1)
                    }, a.kill = function(e, t) {
                        return this._kill(e, t), this
                    }, a._uncache = function(e) {
                        for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                        return this
                    }, a._swapSelfInParams = function(e) {
                        for (var t = e.length, n = e.concat(); --t > -1;) "{self}" === e[t] && (n[t] = this);
                        return n
                    }, a._callback = function(e) {
                        var t = this.vars,
                            n = t[e],
                            r = t[e + "Params"],
                            i = t[e + "Scope"] || t.callbackScope || this;
                        switch (r ? r.length : 0) {
                            case 0:
                                n.call(i);
                                break;
                            case 1:
                                n.call(i, r[0]);
                                break;
                            case 2:
                                n.call(i, r[0], r[1]);
                                break;
                            default:
                                n.apply(i, r)
                        }
                    }, a.eventCallback = function(e, t, n, r) {
                        if ("on" === (e || "").substr(0, 2)) {
                            var i = this.vars;
                            if (1 === arguments.length) return i[e];
                            null == t ? delete i[e] : (i[e] = t, i[e + "Params"] = m(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, i[e + "Scope"] = r), "onUpdate" === e && (this._onUpdate = t)
                        }
                        return this
                    }, a.delay = function(e) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
                    }, a.duration = function(e) {
                        return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, a.totalDuration = function(e) {
                        return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
                    }, a.time = function(e, t) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
                    }, a.totalTime = function(e, t, n) {
                        if (l || s.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (e < 0 && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var r = this._totalDuration,
                                    i = this._timeline;
                                if (e > r && !n && (e = r), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? r - e : e) / this._timeScale, i._dirty || this._uncache(!1), i._timeline)
                                    for (; i._timeline;) i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0), i = i._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === e && 0 !== this._duration || (F.length && Z(), this.render(e, t, !1), F.length && Z())
                        }
                        return this
                    }, a.progress = a.totalProgress = function(e, t) {
                        var n = this.duration();
                        return arguments.length ? this.totalTime(n * e, t) : n ? this._time / n : this.ratio
                    }, a.startTime = function(e) {
                        return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
                    }, a.endTime = function(e) {
                        return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
                    }, a.timeScale = function(e) {
                        if (!arguments.length) return this._timeScale;
                        var t, n;
                        for (e = e || 1e-8, this._timeline && this._timeline.smoothChildTiming && (n = (t = this._pauseTime) || 0 === t ? t : this._timeline.totalTime(), this._startTime = n - (n - this._startTime) * this._timeScale / e), this._timeScale = e, n = this.timeline; n && n.timeline;) n._dirty = !0, n.totalDuration(), n = n.timeline;
                        return this
                    }, a.reversed = function(e) {
                        return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, a.paused = function(e) {
                        if (!arguments.length) return this._paused;
                        var t, n, r = this._timeline;
                        return e != this._paused && r && (l || e || s.wake(), n = (t = r.rawTime()) - this._pauseTime, !e && r.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== n && this._initted && this.duration() && (t = r.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
                    };
                    var O = y("core.SimpleTimeline", function(e) {
                        E.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    (a = O.prototype = new E).constructor = O, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(e, t, n, r) {
                        var i, o;
                        if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = this.rawTime() - (e._timeline.rawTime() - e._pauseTime)), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
                            for (o = e._startTime; i && i._startTime > o;) i = i._prev;
                        return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._recent = e, this._timeline && this._uncache(!0), this
                    }, a._remove = function(e, t) {
                        return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, a.render = function(e, t, n) {
                        var r, i = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = e; i;) r = i._next, (i._active || e >= i._startTime && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = r
                    }, a.rawTime = function() {
                        return l || s.wake(), this._totalTime
                    };
                    var D = y("TweenLite", function(t, n, r) {
                            if (E.call(this, n, r), this.render = D.prototype.render, null == t) throw "Cannot tween a null target.";
                            this.target = t = "string" != typeof t ? t : D.selector(t) || t;
                            var i, o, a, s = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                                l = this.vars.overwrite;
                            if (this._overwrite = l = null == l ? H[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : H[l], (s || t instanceof Array || t.push && m(t)) && "number" != typeof t[0])
                                for (this._targets = a = d(t), this._propLookup = [], this._siblings = [], i = 0; i < a.length; i++)(o = a[i]) ? "string" != typeof o ? o.length && o !== e && o[0] && (o[0] === e || o[0].nodeType && o[0].style && !o.nodeType) ? (a.splice(i--, 1), this._targets = a = a.concat(d(o))) : (this._siblings[i] = $(o, this, !1), 1 === l && this._siblings[i].length > 1 && ee(o, this, null, 1, this._siblings[i])) : "string" == typeof(o = a[i--] = D.selector(o)) && a.splice(i + 1, 1) : a.splice(i--, 1);
                            else this._propLookup = {}, this._siblings = $(t, this, !1), 1 === l && this._siblings.length > 1 && ee(t, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === n && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        S = function(t) {
                            return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                        };
                    (a = D.prototype = new E).constructor = D, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, D.version = "2.1.2", D.defaultEase = a._ease = new w(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = s, D.autoSleep = 120, D.lagSmoothing = function(e, t) {
                        s.lagSmoothing(e, t)
                    }, D.selector = e.$ || e.jQuery || function(t) {
                        var r = e.$ || e.jQuery;
                        return r ? (D.selector = r, r(t)) : (n || (n = e.document), n ? n.querySelectorAll ? n.querySelectorAll(t) : n.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
                    };
                    var F = [],
                        N = {},
                        k = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        B = /[\+-]=-?[\.\d]/,
                        G = function(e) {
                            for (var t, n = this._firstPT; n;) t = n.blob ? 1 === e && null != this.end ? this.end : e ? this.join("") : this.start : n.c * e + n.s, n.m ? t = n.m.call(this._tween, t, this._target || n.t, this._tween) : t < 1e-6 && t > -1e-6 && !n.blob && (t = 0), n.f ? n.fp ? n.t[n.p](n.fp, t) : n.t[n.p](t) : n.t[n.p] = t, n = n._next
                        },
                        L = function(e) {
                            return (1e3 * e | 0) / 1e3 + ""
                        },
                        U = function(e, t, n, r) {
                            var i, o, a, s, l, u, c, h = [],
                                f = 0,
                                d = "",
                                p = 0;
                            for (h.start = e, h.end = t, e = h[0] = e + "", t = h[1] = t + "", n && (n(h), e = h[0], t = h[1]), h.length = 0, i = e.match(k) || [], o = t.match(k) || [], r && (r._next = null, r.blob = 1, h._firstPT = h._applyPT = r), l = o.length, s = 0; s < l; s++) c = o[s], d += (u = t.substr(f, t.indexOf(c, f) - f)) || !s ? u : ",", f += u.length, p ? p = (p + 1) % 5 : "rgba(" === u.substr(-5) && (p = 1), c === i[s] || i.length <= s ? d += c : (d && (h.push(d), d = ""), a = parseFloat(i[s]), h.push(a), h._firstPT = {
                                _next: h._firstPT,
                                t: h,
                                p: h.length - 1,
                                s: a,
                                c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0,
                                f: 0,
                                m: p && p < 4 ? Math.round : L
                            }), f += c.length;
                            return (d += t.substr(f)) && h.push(d), h.setRatio = G, B.test(t) && (h.end = null), h
                        },
                        X = function(e, t, n, r, i, o, a, s, l) {
                            "function" == typeof r && (r = r(l || 0, e));
                            var u = typeof e[t],
                                c = "function" !== u ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
                                h = "get" !== n ? n : c ? a ? e[c](a) : e[c]() : e[t],
                                f = "string" == typeof r && "=" === r.charAt(1),
                                d = {
                                    t: e,
                                    p: t,
                                    s: h,
                                    f: "function" === u,
                                    pg: 0,
                                    n: i || t,
                                    m: o ? "function" == typeof o ? o : Math.round : 0,
                                    pr: 0,
                                    c: f ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - h || 0
                                };
                            if (("number" != typeof h || "number" != typeof r && !f) && (a || isNaN(h) || !f && isNaN(r) || "boolean" == typeof h || "boolean" == typeof r ? (d.fp = a, d = {
                                    t: U(h, f ? parseFloat(d.s) + d.c + (d.s + "").replace(/[0-9\-\.]/g, "") : r, s || D.defaultStringFilter, d),
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: i || t,
                                    pr: 0,
                                    m: 0
                                }) : (d.s = parseFloat(h), f || (d.c = parseFloat(r) - d.s || 0))), d.c) return (d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d
                        },
                        j = D._internals = {
                            isArray: m,
                            isSelector: S,
                            lazyTweens: F,
                            blobDif: U
                        },
                        V = D._plugins = {},
                        z = j.tweenLookup = {},
                        Y = 0,
                        W = j.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1,
                            stagger: 1
                        },
                        H = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        q = E._rootFramesTimeline = new O,
                        Q = E._rootTimeline = new O,
                        K = 30,
                        Z = j.lazyRender = function() {
                            var e, t, n = F.length;
                            for (N = {}, e = 0; e < n; e++)(t = F[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                            F.length = 0
                        };
                    Q._startTime = s.time, q._startTime = s.frame, Q._active = q._active = !0, setTimeout(Z, 1), E._updateRoot = D.render = function() {
                        var e, t, n;
                        if (F.length && Z(), Q.render((s.time - Q._startTime) * Q._timeScale, !1, !1), q.render((s.frame - q._startTime) * q._timeScale, !1, !1), F.length && Z(), s.frame >= K) {
                            for (n in K = s.frame + (parseInt(D.autoSleep, 10) || 120), z) {
                                for (e = (t = z[n].tweens).length; --e > -1;) t[e]._gc && t.splice(e, 1);
                                0 === t.length && delete z[n]
                            }
                            if ((!(n = Q._first) || n._paused) && D.autoSleep && !q._first && 1 === s._listeners.tick.length) {
                                for (; n && n._paused;) n = n._next;
                                n || s.sleep()
                            }
                        }
                    }, s.addEventListener("tick", E._updateRoot);
                    var $ = function(e, t, n) {
                            var r, i, o = e._gsTweenID;
                            if (z[o || (e._gsTweenID = o = "t" + Y++)] || (z[o] = {
                                    target: e,
                                    tweens: []
                                }), t && ((r = z[o].tweens)[i = r.length] = t, n))
                                for (; --i > -1;) r[i] === t && r.splice(i, 1);
                            return z[o].tweens
                        },
                        J = function(e, t, n, r) {
                            var i, o, a = e.vars.onOverwrite;
                            return a && (i = a(e, t, n, r)), (a = D.onOverwrite) && (o = a(e, t, n, r)), !1 !== i && !1 !== o
                        },
                        ee = function(e, t, n, r, i) {
                            var o, a, s, l;
                            if (1 === r || r >= 4) {
                                for (l = i.length, o = 0; o < l; o++)
                                    if ((s = i[o]) !== t) s._gc || s._kill(null, e, t) && (a = !0);
                                    else if (5 === r) break;
                                return a
                            }
                            var u, c = t._startTime + 1e-8,
                                h = [],
                                f = 0,
                                d = 0 === t._duration;
                            for (o = i.length; --o > -1;)(s = i[o]) === t || s._gc || s._paused || (s._timeline !== t._timeline ? (u = u || te(t, 0, d), 0 === te(s, u, d) && (h[f++] = s)) : s._startTime <= c && s._startTime + s.totalDuration() / s._timeScale > c && ((d || !s._initted) && c - s._startTime <= 2e-8 || (h[f++] = s)));
                            for (o = f; --o > -1;)
                                if (l = (s = h[o])._firstPT, 2 === r && s._kill(n, e, t) && (a = !0), 2 !== r || !s._firstPT && s._initted && l) {
                                    if (2 !== r && !J(s, t)) continue;
                                    s._enabled(!1, !1) && (a = !0)
                                }
                            return a
                        },
                        te = function(e, t, n) {
                            for (var r = e._timeline, i = r._timeScale, o = e._startTime; r._timeline;) {
                                if (o += r._startTime, i *= r._timeScale, r._paused) return -100;
                                r = r._timeline
                            }
                            return (o /= i) > t ? o - t : n && o === t || !e._initted && o - t < 2e-8 ? 1e-8 : (o += e.totalDuration() / e._timeScale / i) > t + 1e-8 ? 0 : o - t - 1e-8
                        };
                    a._init = function() {
                        var e, t, n, r, i, o, a = this.vars,
                            s = this._overwrittenProps,
                            l = this._duration,
                            u = !!a.immediateRender,
                            c = a.ease,
                            h = this._startAt;
                        if (a.startAt) {
                            for (r in h && (h.render(-1, !0), h.kill()), i = {}, a.startAt) i[r] = a.startAt[r];
                            if (i.data = "isStart", i.overwrite = !1, i.immediateRender = !0, i.lazy = u && !1 !== a.lazy, i.startAt = i.delay = null, i.onUpdate = a.onUpdate, i.onUpdateParams = a.onUpdateParams, i.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = D.to(this.target || {}, 0, i), u)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== l) return
                        } else if (a.runBackwards && 0 !== l)
                            if (h) h.render(-1, !0), h.kill(), this._startAt = null;
                            else {
                                for (r in 0 !== this._time && (u = !1), n = {}, a) W[r] && "autoCSS" !== r || (n[r] = a[r]);
                                if (n.overwrite = 0, n.data = "isFromStart", n.lazy = u && !1 !== a.lazy, n.immediateRender = u, this._startAt = D.to(this.target, 0, n), u) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            }
                        if (this._ease = c = c ? c instanceof w ? c : "function" == typeof c ? new w(c, a.easeParams) : x[c] || D.defaultEase : D.defaultEase, a.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (o = this._targets.length, e = 0; e < o; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], s ? s[e] : null, e) && (t = !0);
                        else t = this._initProps(this.target, this._propLookup, this._siblings, s, 0);
                        if (t && D._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                            for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                        this._onUpdate = a.onUpdate, this._initted = !0
                    }, a._initProps = function(t, n, r, i, o) {
                        var a, s, l, u, c, h;
                        if (null == t) return !1;
                        for (a in N[t._gsTweenID] && Z(), this.vars.css || t.style && t !== e && t.nodeType && V.css && !1 !== this.vars.autoCSS && function(e, t) {
                                var n, r = {};
                                for (n in e) W[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!V[n] || V[n] && V[n]._autoCSS) || (r[n] = e[n], delete e[n]);
                                e.css = r
                            }(this.vars, t), this.vars)
                            if (h = this.vars[a], W[a]) h && (h instanceof Array || h.push && m(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[a] = h = this._swapSelfInParams(h, this));
                            else if (V[a] && (u = new V[a])._onInitTween(t, this.vars[a], this, o)) {
                            for (this._firstPT = c = {
                                    _next: this._firstPT,
                                    t: u,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: a,
                                    pg: 1,
                                    pr: u._priority,
                                    m: 0
                                }, s = u._overwriteProps.length; --s > -1;) n[u._overwriteProps[s]] = this._firstPT;
                            (u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                        } else n[a] = X.call(this, t, a, "get", h, a, 0, null, this.vars.stringFilter, o);
                        return i && this._kill(i, t) ? this._initProps(t, n, r, i, o) : this._overwrite > 1 && this._firstPT && r.length > 1 && ee(t, this, n, this._overwrite, r) ? (this._kill(n, t), this._initProps(t, n, r, i, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (N[t._gsTweenID] = !0), l)
                    }, a.render = function(e, t, n) {
                        var r, i, o, a, s = this._time,
                            l = this._duration,
                            u = this._rawPrevTime;
                        if (e >= l - 1e-8 && e >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, i = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (u < 0 || e <= 0 && e >= -1e-8 || 1e-8 === u && "isPause" !== this.data) && u !== e && (n = !0, u > 1e-8 && (i = "onReverseComplete")), this._rawPrevTime = a = !t || e || u === e ? e : 1e-8);
                        else if (e < 1e-8) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === l && u > 0) && (i = "onReverseComplete", r = this._reversed), e > -1e-8 ? e = 0 : e < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (1e-8 !== u || "isPause" !== this.data) && (n = !0), this._rawPrevTime = a = !t || e || u === e ? e : 1e-8)), (!this._initted || this._startAt && this._startAt.progress()) && (n = !0);
                        else if (this._totalTime = this._time = e, this._easeType) {
                            var c = e / l,
                                h = this._easeType,
                                f = this._easePower;
                            (1 === h || 3 === h && c >= .5) && (c = 1 - c), 3 === h && (c *= 2), 1 === f ? c *= c : 2 === f ? c *= c * c : 3 === f ? c *= c * c * c : 4 === f && (c *= c * c * c * c), this.ratio = 1 === h ? 1 - c : 2 === h ? c : e / l < .5 ? c / 2 : 1 - c / 2
                        } else this.ratio = this._ease.getRatio(e / l);
                        if (this._time !== s || n) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = u, F.push(this), void(this._lazy = [e, t]);
                                this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== s && e >= 0 && (this._active = !0), 0 === s && (this._startAt && (e >= 0 ? this._startAt.render(e, !0, n) : i || (i = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || t || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                            this._onUpdate && (e < 0 && this._startAt && -1e-4 !== e && this._startAt.render(e, !0, n), t || (this._time !== s || r || n) && this._callback("onUpdate")), i && (this._gc && !n || (e < 0 && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, !0, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this._callback(i), 0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== a && (this._rawPrevTime = 0)))
                        }
                    }, a._kill = function(e, t, n) {
                        if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        t = "string" != typeof t ? t || this._targets || this.target : D.selector(t) || t;
                        var r, i, o, a, s, l, u, c, h, f = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline,
                            d = this._firstPT;
                        if ((m(t) || S(t)) && "number" != typeof t[0])
                            for (r = t.length; --r > -1;) this._kill(e, t[r], n) && (l = !0);
                        else {
                            if (this._targets) {
                                for (r = this._targets.length; --r > -1;)
                                    if (t === this._targets[r]) {
                                        s = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], i = this._overwrittenProps[r] = e ? this._overwrittenProps[r] || {} : "all";
                                        break
                                    }
                            } else {
                                if (t !== this.target) return !1;
                                s = this._propLookup, i = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                            }
                            if (s) {
                                if (u = e || s, c = e !== i && "all" !== i && e !== s && ("object" != typeof e || !e._tempKill), n && (D.onOverwrite || this.vars.onOverwrite)) {
                                    for (o in u) s[o] && (h || (h = []), h.push(o));
                                    if ((h || !e) && !J(this, n, t, h)) return !1
                                }
                                for (o in u)(a = s[o]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(u) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete s[o]), c && (i[o] = 1);
                                !this._firstPT && this._initted && d && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }, a.invalidate = function() {
                        this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this);
                        var e = this._time;
                        return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-8, this.render(e, !1, !1 !== this.vars.lazy)), this
                    }, a._enabled = function(e, t) {
                        if (l || s.wake(), e && this._gc) {
                            var n, r = this._targets;
                            if (r)
                                for (n = r.length; --n > -1;) this._siblings[n] = $(r[n], this, !0);
                            else this._siblings = $(this.target, this, !0)
                        }
                        return E.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
                    }, D.to = function(e, t, n) {
                        return new D(e, t, n)
                    }, D.from = function(e, t, n) {
                        return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new D(e, t, n)
                    }, D.fromTo = function(e, t, n, r) {
                        return r.startAt = n, r.immediateRender = 0 != r.immediateRender && 0 != n.immediateRender, new D(e, t, r)
                    }, D.delayedCall = function(e, t, n, r, i) {
                        return new D(t, 0, {
                            delay: e,
                            onComplete: t,
                            onCompleteParams: n,
                            callbackScope: r,
                            onReverseComplete: t,
                            onReverseCompleteParams: n,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: i,
                            overwrite: 0
                        })
                    }, D.set = function(e, t) {
                        return new D(e, 0, t)
                    }, D.getTweensOf = function(e, t) {
                        if (null == e) return [];
                        var n, r, i, o;
                        if (e = "string" != typeof e ? e : D.selector(e) || e, (m(e) || S(e)) && "number" != typeof e[0]) {
                            for (n = e.length, r = []; --n > -1;) r = r.concat(D.getTweensOf(e[n], t));
                            for (n = r.length; --n > -1;)
                                for (o = r[n], i = n; --i > -1;) o === r[i] && r.splice(n, 1)
                        } else if (e._gsTweenID)
                            for (n = (r = $(e).concat()).length; --n > -1;)(r[n]._gc || t && !r[n].isActive()) && r.splice(n, 1);
                        return r || []
                    }, D.killTweensOf = D.killDelayedCallsTo = function(e, t, n) {
                        "object" == typeof t && (n = t, t = !1);
                        for (var r = D.getTweensOf(e, t), i = r.length; --i > -1;) r[i]._kill(n, e)
                    };
                    var ne = y("plugins.TweenPlugin", function(e, t) {
                        this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ne.prototype
                    }, !0);
                    if (a = ne.prototype, ne.version = "1.19.0", ne.API = 2, a._firstPT = null, a._addTween = X, a.setRatio = G, a._kill = function(e) {
                            var t, n = this._overwriteProps,
                                r = this._firstPT;
                            if (null != e[this._propName]) this._overwriteProps = [];
                            else
                                for (t = n.length; --t > -1;) null != e[n[t]] && n.splice(t, 1);
                            for (; r;) null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                            return !1
                        }, a._mod = a._roundProps = function(e) {
                            for (var t, n = this._firstPT; n;)(t = e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === n.f ? n.t._applyPT.m = t : n.m = t), n = n._next
                        }, D._onPluginEvent = function(e, t) {
                            var n, r, i, o, a, s = t._firstPT;
                            if ("_onInitAllProps" === e) {
                                for (; s;) {
                                    for (a = s._next, r = i; r && r.pr > s.pr;) r = r._next;
                                    (s._prev = r ? r._prev : o) ? s._prev._next = s: i = s, (s._next = r) ? r._prev = s : o = s, s = a
                                }
                                s = t._firstPT = i
                            }
                            for (; s;) s.pg && "function" == typeof s.t[e] && s.t[e]() && (n = !0), s = s._next;
                            return n
                        }, ne.activate = function(e) {
                            for (var t = e.length; --t > -1;) e[t].API === ne.API && (V[(new e[t])._propName] = e[t]);
                            return !0
                        }, v.plugin = function(e) {
                            if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                            var t, n = e.propName,
                                r = e.priority || 0,
                                i = e.overwriteProps,
                                o = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                a = y("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                                    ne.call(this, n, r), this._overwriteProps = i || []
                                }, !0 === e.global),
                                s = a.prototype = new ne(n);
                            for (t in s.constructor = a, a.API = e.API, o) "function" == typeof e[t] && (s[o[t]] = e[t]);
                            return a.version = e.version, ne.activate([a]), a
                        }, i = e._gsQueue) {
                        for (o = 0; o < i.length; o++) i[o]();
                        for (a in _) _[a].func || e.console.log("GSAP encountered missing dependency: " + a)
                    }
                    return l = !1, D
                }(i),
                a = i.GreenSockGlobals,
                s = a.com.greensock,
                l = s.core.SimpleTimeline,
                u = s.core.Animation,
                c = a.Ease,
                h = (a.Linear, a.Power1, a.Power2, a.Power3, a.Power4, a.TweenPlugin);
            s.events.EventDispatcher
        }).call(this, n("./node_modules/webpack/buildin/harmony-module.js")(e), n("./node_modules/webpack/buildin/global.js"))
    },
    "./node_modules/twgl.js/dist/4.x/twgl-full.js": function(e, t, n) {
        /*!
         * @license twgl.js 4.9.1 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
         * Available via the MIT license.
         * see: http://github.com/greggman/twgl.js for details
         */
        var r;
        "undefined" != typeof self && self, r = function() {
            return function(e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var i = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
                }
                return n.m = e, n.c = t, n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var i in e) n.d(r, i, function(t) {
                            return e[t]
                        }.bind(null, i));
                    return r
                }, n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = "./src/twgl-full.js")
            }({
                "./src/attributes.js":
                /*!***************************!*\
                  !*** ./src/attributes.js ***!
                  \***************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.createAttribsFromArrays = _, t.createBuffersFromArrays = function(e, t) {
                        var n = {};
                        Object.keys(t).forEach(function(r) {
                            n[r] = v(e, t[r], r)
                        }), t.indices ? (n.numElements = t.indices.length, n.elementType = r.getGLTypeForTypedArray(m(t.indices), "indices")) : n.numElements = function(e) {
                            var t, n;
                            for (n = 0; n < g.length && !((t = g[n]) in e); ++n);
                            n === g.length && (t = Object.keys(e)[0]);
                            var r = e[t],
                                i = c(r).length,
                                o = p(r, t),
                                a = i / o;
                            if (i % o > 0) throw "numComponents " + o + " not correct for length " + i;
                            return a
                        }(t);
                        return n
                    }, t.createBufferFromArray = v, t.createBufferFromTypedArray = l, t.createBufferInfoFromArrays = function(e, t, n) {
                        var i = _(e, t),
                            o = Object.assign({}, n || {});
                        o.attribs = Object.assign({}, n ? n.attribs : {}, i);
                        var s = t.indices;
                        if (s) {
                            var u = m(s, "indices");
                            o.indices = l(e, u, e.ELEMENT_ARRAY_BUFFER), o.numElements = u.length, o.elementType = r.getGLTypeForTypedArray(u)
                        } else o.numElements || (o.numElements = function(e, t) {
                            var n, r;
                            for (r = 0; r < g.length && !((n = g[r]) in t) && !((n = a.attribPrefix + n) in t); ++r);
                            r === g.length && (n = Object.keys(t)[0]);
                            var i = t[n];
                            e.bindBuffer(e.ARRAY_BUFFER, i.buffer);
                            var o = e.getBufferParameter(e.ARRAY_BUFFER, e.BUFFER_SIZE);
                            e.bindBuffer(e.ARRAY_BUFFER, null);
                            var s = function(e, t) {
                                    return t === e.BYTE ? 1 : t === e.UNSIGNED_BYTE ? 1 : t === e.SHORT ? 2 : t === e.UNSIGNED_SHORT ? 2 : t === e.INT ? 4 : t === e.UNSIGNED_INT ? 4 : t === e.FLOAT ? 4 : 0
                                }(e, i.type),
                                l = o / s,
                                u = i.numComponents || i.size,
                                c = l / u;
                            if (c % 1 != 0) throw "numComponents " + u + " not correct for length " + length;
                            return c
                        }(e, o.attribs));
                        return o
                    }, t.setAttribInfoBufferFromArray = function(e, t, n, r) {
                        n = m(n), void 0 !== r ? (e.bindBuffer(e.ARRAY_BUFFER, t.buffer), e.bufferSubData(e.ARRAY_BUFFER, r, n)) : s(e, e.ARRAY_BUFFER, t.buffer, n, t.drawType)
                    }, t.setAttributePrefix = function(e) {
                        a.attribPrefix = e
                    }, t.setAttributeDefaults_ = function(e) {
                        i.copyExistingProperties(e, a)
                    }, t.getNumComponents_ = p, t.getArray_ = c;
                    var r = o(n( /*! ./typedarrays.js */ "./src/typedarrays.js")),
                        i = o(n( /*! ./helper.js */ "./src/helper.js"));

                    function o(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                                }
                        return t.default = e, t
                    }
                    var a = {
                        attribPrefix: ""
                    };

                    function s(e, t, n, r, i) {
                        e.bindBuffer(t, n), e.bufferData(t, r, i || e.STATIC_DRAW)
                    }

                    function l(e, t, n, r) {
                        if (i.isBuffer(e, t)) return t;
                        n = n || e.ARRAY_BUFFER;
                        var o = e.createBuffer();
                        return s(e, n, o, t, r), o
                    }

                    function u(e) {
                        return "indices" === e
                    }

                    function c(e) {
                        return e.length ? e : e.data
                    }
                    var h = /coord|texture/i,
                        f = /color|colour/i;

                    function d(e, t) {
                        var n;
                        if (t % (n = h.test(e) ? 2 : f.test(e) ? 4 : 3) > 0) throw "Can not guess numComponents for attribute '" + e + "'. Tried " + n + " but " + t + " values is not evenly divisible by " + n + ". You should specify it.";
                        return n
                    }

                    function p(e, t) {
                        return e.numComponents || e.size || d(t, c(e).length)
                    }

                    function m(e, t) {
                        if (r.isArrayBuffer(e)) return e;
                        if (r.isArrayBuffer(e.data)) return e.data;
                        Array.isArray(e) && (e = {
                            data: e
                        });
                        var n = e.type;
                        return n || (n = u(t) ? Uint16Array : Float32Array), new n(e.data)
                    }

                    function _(e, t) {
                        var n = {};
                        return Object.keys(t).forEach(function(i) {
                            if (!u(i)) {
                                var o = t[i],
                                    s = o.attrib || o.name || o.attribName || a.attribPrefix + i;
                                if (o.value) {
                                    if (!Array.isArray(o.value) && !r.isArrayBuffer(o.value)) throw new Error("array.value is not array or typedarray");
                                    n[s] = {
                                        value: o.value
                                    }
                                } else {
                                    var c, h, f, _;
                                    if (o.buffer && o.buffer instanceof WebGLBuffer) c = o.buffer, _ = o.numComponents || o.size, h = o.type, f = o.normalize;
                                    else if ("number" == typeof o || "number" == typeof o.data) {
                                        var g = o.data || o,
                                            v = o.type || Float32Array,
                                            y = g * v.BYTES_PER_ELEMENT;
                                        h = r.getGLTypeForTypedArrayType(v), f = void 0 !== o.normalize ? o.normalize : (w = v) === Int8Array || w === Uint8Array, _ = o.numComponents || o.size || d(i, g), c = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, c), e.bufferData(e.ARRAY_BUFFER, y, o.drawType || e.STATIC_DRAW)
                                    } else {
                                        var b = m(o, i);
                                        c = l(e, b, void 0, o.drawType), h = r.getGLTypeForTypedArray(b), f = void 0 !== o.normalize ? o.normalize : function(e) {
                                            return e instanceof Int8Array || e instanceof Uint8Array
                                        }(b), _ = p(o, i)
                                    }
                                    n[s] = {
                                        buffer: c,
                                        numComponents: _,
                                        type: h,
                                        normalize: f,
                                        stride: o.stride || 0,
                                        offset: o.offset || 0,
                                        divisor: void 0 === o.divisor ? void 0 : o.divisor,
                                        drawType: o.drawType
                                    }
                                }
                            }
                            var w
                        }), e.bindBuffer(e.ARRAY_BUFFER, null), n
                    }
                    var g = ["position", "positions", "a_position"];

                    function v(e, t, n) {
                        var r = "indices" === n ? e.ELEMENT_ARRAY_BUFFER : e.ARRAY_BUFFER;
                        return l(e, m(t, n), r)
                    }
                },
                "./src/draw.js":
                /*!*********************!*\
                  !*** ./src/draw.js ***!
                  \*********************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.drawBufferInfo = i, t.drawObjectList = function(e, t) {
                        var n = null,
                            o = null;
                        t.forEach(function(t) {
                            if (!1 !== t.active) {
                                var a = t.programInfo,
                                    s = t.vertexArrayInfo || t.bufferInfo,
                                    l = !1,
                                    u = void 0 === t.type ? e.TRIANGLES : t.type;
                                a !== n && (n = a, e.useProgram(a.program), l = !0), (l || s !== o) && (o && o.vertexArrayObject && !s.vertexArrayObject && e.bindVertexArray(null), o = s, r.setBuffersAndAttributes(e, a, s)), r.setUniforms(a, t.uniforms), i(e, s, u, t.count, t.offset, t.instanceCount)
                            }
                        }), o.vertexArrayObject && e.bindVertexArray(null)
                    };
                    var r = function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                                }
                        return t.default = e, t
                    }(n( /*! ./programs.js */ "./src/programs.js"));

                    function i(e, t, n, r, i, o) {
                        n = void 0 === n ? e.TRIANGLES : n;
                        var a = t.indices,
                            s = t.elementType,
                            l = void 0 === r ? t.numElements : r;
                        i = void 0 === i ? 0 : i, s || a ? void 0 !== o ? e.drawElementsInstanced(n, l, void 0 === s ? e.UNSIGNED_SHORT : t.elementType, i, o) : e.drawElements(n, l, void 0 === s ? e.UNSIGNED_SHORT : t.elementType, i) : void 0 !== o ? e.drawArraysInstanced(n, i, l, o) : e.drawArrays(n, i, l)
                    }
                },
                "./src/framebuffers.js":
                /*!*****************************!*\
                  !*** ./src/framebuffers.js ***!
                  \*****************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.bindFramebufferInfo = function(e, t, n) {
                        n = n || e.FRAMEBUFFER, t ? (e.bindFramebuffer(n, t.framebuffer), e.viewport(0, 0, t.width, t.height)) : (e.bindFramebuffer(n, null), e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight))
                    }, t.createFramebufferInfo = function(e, t, n, o) {
                        var c = e.FRAMEBUFFER,
                            h = e.createFramebuffer();
                        e.bindFramebuffer(c, h), n = n || e.drawingBufferWidth, o = o || e.drawingBufferHeight;
                        var f = 0,
                            d = {
                                framebuffer: h,
                                attachments: [],
                                width: n,
                                height: o
                            };
                        return (t = t || s).forEach(function(t) {
                            var s = t.attachment,
                                h = t.format,
                                p = function(e) {
                                    return l[e]
                                }(h);
                            if (p || (p = a + f++), !s)
                                if (function(e) {
                                        return u[e]
                                    }(h)) s = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, s), e.renderbufferStorage(e.RENDERBUFFER, h, n, o);
                                else {
                                    var m = Object.assign({}, t);
                                    m.width = n, m.height = o, void 0 === m.auto && (m.auto = !1, m.min = m.min || m.minMag || e.LINEAR, m.mag = m.mag || m.minMag || e.LINEAR, m.wrapS = m.wrapS || m.wrap || e.CLAMP_TO_EDGE, m.wrapT = m.wrapT || m.wrap || e.CLAMP_TO_EDGE), s = r.createTexture(e, m)
                                }
                            if (i.isRenderbuffer(e, s)) e.framebufferRenderbuffer(c, p, e.RENDERBUFFER, s);
                            else {
                                if (!i.isTexture(e, s)) throw "unknown attachment type";
                                e.framebufferTexture2D(c, p, t.texTarget || e.TEXTURE_2D, s, t.level || 0)
                            }
                            d.attachments.push(s)
                        }), d
                    }, t.resizeFramebufferInfo = function(e, t, n, o, a) {
                        o = o || e.drawingBufferWidth, a = a || e.drawingBufferHeight, t.width = o, t.height = a, (n = n || s).forEach(function(n, s) {
                            var l = t.attachments[s],
                                u = n.format;
                            if (i.isRenderbuffer(e, l)) e.bindRenderbuffer(e.RENDERBUFFER, l), e.renderbufferStorage(e.RENDERBUFFER, u, o, a);
                            else {
                                if (!i.isTexture(e, l)) throw "unknown attachment type";
                                r.resizeTexture(e, l, n, o, a)
                            }
                        })
                    };
                    var r = o(n( /*! ./textures.js */ "./src/textures.js")),
                        i = o(n( /*! ./helper.js */ "./src/helper.js"));

                    function o(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                                }
                        return t.default = e, t
                    }
                    var a = 36064,
                        s = [{
                            format: 6408,
                            type: 5121,
                            min: 9729,
                            wrap: 33071
                        }, {
                            format: 34041
                        }],
                        l = {};
                    l[34041] = 33306, l[6401] = 36128, l[36168] = 36128, l[6402] = 36096, l[33189] = 36096;
                    var u = {};
                    u[32854] = !0, u[32855] = !0, u[36194] = !0, u[34041] = !0, u[33189] = !0, u[6401] = !0, u[36168] = !0
                },
                "./src/helper.js":
                /*!***********************!*\
                  !*** ./src/helper.js ***!
                  \***********************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.copyExistingProperties = function(e, t) {
                        Object.keys(t).forEach(function(n) {
                            t.hasOwnProperty(n) && e.hasOwnProperty(n) && (t[n] = e[n])
                        })
                    }, t.copyNamedProperties = function(e, t, n) {
                        e.forEach(function(e) {
                            var r = t[e];
                            void 0 !== r && (n[e] = r)
                        })
                    }, t.isBuffer = function(e, t) {
                        i || (i = e.createBuffer());
                        return t instanceof i.constructor
                    }, t.isRenderbuffer = function(e, t) {
                        o || (o = e.createRenderbuffer());
                        return t instanceof o.constructor
                    }, t.isShader = function(e, t) {
                        a || (a = e.createShader(e.VERTEX_SHADER));
                        return t instanceof a.constructor
                    }, t.isTexture = function(e, t) {
                        s || (s = e.createTexture());
                        return t instanceof s.constructor
                    }, t.isSampler = function(e, t) {
                        if (!l) {
                            if (!e.createSampler) return !1;
                            l = e.createSampler()
                        }
                        return t instanceof l.constructor
                    }, t.warn = t.error = void 0;
                    var r = "undefined" != typeof console && console.error && "function" == typeof console.error ? console.error.bind(console) : function() {};
                    t.error = r;
                    var i, o, a, s, l, u = "undefined" != typeof console && console.warn && "function" == typeof console.warn ? console.warn.bind(console) : function() {};
                    t.warn = u
                },
                "./src/m4.js":
                /*!*******************!*\
                  !*** ./src/m4.js ***!
                  \*******************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.axisRotate = function(e, t, n, r) {
                        r = r || new i(16);
                        var o = t[0],
                            a = t[1],
                            s = t[2],
                            l = Math.sqrt(o * o + a * a + s * s),
                            u = (o /= l) * o,
                            c = (a /= l) * a,
                            h = (s /= l) * s,
                            f = Math.cos(n),
                            d = Math.sin(n),
                            p = 1 - f,
                            m = u + (1 - u) * f,
                            _ = o * a * p + s * d,
                            g = o * s * p - a * d,
                            v = o * a * p - s * d,
                            y = c + (1 - c) * f,
                            b = a * s * p + o * d,
                            w = o * s * p + a * d,
                            x = a * s * p - o * d,
                            T = h + (1 - h) * f,
                            A = e[0],
                            M = e[1],
                            P = e[2],
                            C = e[3],
                            R = e[4],
                            E = e[5],
                            I = e[6],
                            O = e[7],
                            D = e[8],
                            S = e[9],
                            F = e[10],
                            N = e[11];
                        r[0] = m * A + _ * R + g * D, r[1] = m * M + _ * E + g * S, r[2] = m * P + _ * I + g * F, r[3] = m * C + _ * O + g * N, r[4] = v * A + y * R + b * D, r[5] = v * M + y * E + b * S, r[6] = v * P + y * I + b * F, r[7] = v * C + y * O + b * N, r[8] = w * A + x * R + T * D, r[9] = w * M + x * E + T * S, r[10] = w * P + x * I + T * F, r[11] = w * C + x * O + T * N, e !== r && (r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]);
                        return r
                    }, t.axisRotation = function(e, t, n) {
                        n = n || new i(16);
                        var r = e[0],
                            o = e[1],
                            a = e[2],
                            s = Math.sqrt(r * r + o * o + a * a),
                            l = (r /= s) * r,
                            u = (o /= s) * o,
                            c = (a /= s) * a,
                            h = Math.cos(t),
                            f = Math.sin(t),
                            d = 1 - h;
                        return n[0] = l + (1 - l) * h, n[1] = r * o * d + a * f, n[2] = r * a * d - o * f, n[3] = 0, n[4] = r * o * d - a * f, n[5] = u + (1 - u) * h, n[6] = o * a * d + r * f, n[7] = 0, n[8] = r * a * d + o * f, n[9] = o * a * d - r * f, n[10] = c + (1 - c) * h, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n
                    }, t.copy = l, t.frustum = function(e, t, n, r, o, a, s) {
                        s = s || new i(16);
                        var l = t - e,
                            u = r - n,
                            c = o - a;
                        return s[0] = 2 * o / l, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 * o / u, s[6] = 0, s[7] = 0, s[8] = (e + t) / l, s[9] = (r + n) / u, s[10] = a / c, s[11] = -1, s[12] = 0, s[13] = 0, s[14] = o * a / c, s[15] = 0, s
                    }, t.getAxis = function(e, t, n) {
                        n = n || r.create();
                        var i = 4 * t;
                        return n[0] = e[i + 0], n[1] = e[i + 1], n[2] = e[i + 2], n
                    }, t.getTranslation = function(e, t) {
                        return (t = t || r.create())[0] = e[12], t[1] = e[13], t[2] = e[14], t
                    }, t.identity = u, t.inverse = c, t.lookAt = function(e, t, n, l) {
                        l = l || new i(16);
                        var u = o,
                            c = a,
                            h = s;
                        return r.normalize(r.subtract(e, t, h), h), r.normalize(r.cross(n, h, u), u), r.normalize(r.cross(h, u, c), c), l[0] = u[0], l[1] = u[1], l[2] = u[2], l[3] = 0, l[4] = c[0], l[5] = c[1], l[6] = c[2], l[7] = 0, l[8] = h[0], l[9] = h[1], l[10] = h[2], l[11] = 0, l[12] = e[0], l[13] = e[1], l[14] = e[2], l[15] = 1, l
                    }, t.multiply = function(e, t, n) {
                        n = n || new i(16);
                        var r = e[0],
                            o = e[1],
                            a = e[2],
                            s = e[3],
                            l = e[4],
                            u = e[5],
                            c = e[6],
                            h = e[7],
                            f = e[8],
                            d = e[9],
                            p = e[10],
                            m = e[11],
                            _ = e[12],
                            g = e[13],
                            v = e[14],
                            y = e[15],
                            b = t[0],
                            w = t[1],
                            x = t[2],
                            T = t[3],
                            A = t[4],
                            M = t[5],
                            P = t[6],
                            C = t[7],
                            R = t[8],
                            E = t[9],
                            I = t[10],
                            O = t[11],
                            D = t[12],
                            S = t[13],
                            F = t[14],
                            N = t[15];
                        return n[0] = r * b + l * w + f * x + _ * T, n[1] = o * b + u * w + d * x + g * T, n[2] = a * b + c * w + p * x + v * T, n[3] = s * b + h * w + m * x + y * T, n[4] = r * A + l * M + f * P + _ * C, n[5] = o * A + u * M + d * P + g * C, n[6] = a * A + c * M + p * P + v * C, n[7] = s * A + h * M + m * P + y * C, n[8] = r * R + l * E + f * I + _ * O, n[9] = o * R + u * E + d * I + g * O, n[10] = a * R + c * E + p * I + v * O, n[11] = s * R + h * E + m * I + y * O, n[12] = r * D + l * S + f * F + _ * N, n[13] = o * D + u * S + d * F + g * N, n[14] = a * D + c * S + p * F + v * N, n[15] = s * D + h * S + m * F + y * N, n
                    }, t.negate = function(e, t) {
                        return (t = t || new i(16))[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t[4] = -e[4], t[5] = -e[5], t[6] = -e[6], t[7] = -e[7], t[8] = -e[8], t[9] = -e[9], t[10] = -e[10], t[11] = -e[11], t[12] = -e[12], t[13] = -e[13], t[14] = -e[14], t[15] = -e[15], t
                    }, t.ortho = function(e, t, n, r, o, a, s) {
                        return (s = s || new i(16))[0] = 2 / (t - e), s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 / (r - n), s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = 2 / (o - a), s[11] = 0, s[12] = (t + e) / (e - t), s[13] = (r + n) / (n - r), s[14] = (a + o) / (o - a), s[15] = 1, s
                    }, t.perspective = function(e, t, n, r, o) {
                        o = o || new i(16);
                        var a = Math.tan(.5 * Math.PI - .5 * e),
                            s = 1 / (n - r);
                        return o[0] = a / t, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = a, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = (n + r) * s, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = n * r * s * 2, o[15] = 0, o
                    }, t.rotateX = function(e, t, n) {
                        n = n || new i(16);
                        var r = e[4],
                            o = e[5],
                            a = e[6],
                            s = e[7],
                            l = e[8],
                            u = e[9],
                            c = e[10],
                            h = e[11],
                            f = Math.cos(t),
                            d = Math.sin(t);
                        n[4] = f * r + d * l, n[5] = f * o + d * u, n[6] = f * a + d * c, n[7] = f * s + d * h, n[8] = f * l - d * r, n[9] = f * u - d * o, n[10] = f * c - d * a, n[11] = f * h - d * s, e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]);
                        return n
                    }, t.rotateY = function(e, t, n) {
                        n = n || new i(16);
                        var r = e[0],
                            o = e[1],
                            a = e[2],
                            s = e[3],
                            l = e[8],
                            u = e[9],
                            c = e[10],
                            h = e[11],
                            f = Math.cos(t),
                            d = Math.sin(t);
                        n[0] = f * r - d * l, n[1] = f * o - d * u, n[2] = f * a - d * c, n[3] = f * s - d * h, n[8] = f * l + d * r, n[9] = f * u + d * o, n[10] = f * c + d * a, n[11] = f * h + d * s, e !== n && (n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]);
                        return n
                    }, t.rotateZ = function(e, t, n) {
                        n = n || new i(16);
                        var r = e[0],
                            o = e[1],
                            a = e[2],
                            s = e[3],
                            l = e[4],
                            u = e[5],
                            c = e[6],
                            h = e[7],
                            f = Math.cos(t),
                            d = Math.sin(t);
                        n[0] = f * r + d * l, n[1] = f * o + d * u, n[2] = f * a + d * c, n[3] = f * s + d * h, n[4] = f * l - d * r, n[5] = f * u - d * o, n[6] = f * c - d * a, n[7] = f * h - d * s, e !== n && (n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]);
                        return n
                    }, t.rotationX = function(e, t) {
                        t = t || new i(16);
                        var n = Math.cos(e),
                            r = Math.sin(e);
                        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                    }, t.rotationY = function(e, t) {
                        t = t || new i(16);
                        var n = Math.cos(e),
                            r = Math.sin(e);
                        return t[0] = n, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                    }, t.rotationZ = function(e, t) {
                        t = t || new i(16);
                        var n = Math.cos(e),
                            r = Math.sin(e);
                        return t[0] = n, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                    }, t.scale = function(e, t, n) {
                        n = n || new i(16);
                        var r = t[0],
                            o = t[1],
                            a = t[2];
                        n[0] = r * e[0], n[1] = r * e[1], n[2] = r * e[2], n[3] = r * e[3], n[4] = o * e[4], n[5] = o * e[5], n[6] = o * e[6], n[7] = o * e[7], n[8] = a * e[8], n[9] = a * e[9], n[10] = a * e[10], n[11] = a * e[11], e !== n && (n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]);
                        return n
                    }, t.scaling = function(e, t) {
                        return (t = t || new i(16))[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                    }, t.setAxis = function(e, t, n, r) {
                        r !== e && (r = l(e, r));
                        var i = 4 * n;
                        return r[i + 0] = t[0], r[i + 1] = t[1], r[i + 2] = t[2], r
                    }, t.setDefaultType = function(e) {
                        var t = i;
                        return i = e, t
                    }, t.setTranslation = function(e, t, n) {
                        n = n || u(), e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11]);
                        return n[12] = t[0], n[13] = t[1], n[14] = t[2], n[15] = 1, n
                    }, t.transformDirection = function(e, t, n) {
                        n = n || r.create();
                        var i = t[0],
                            o = t[1],
                            a = t[2];
                        return n[0] = i * e[0] + o * e[4] + a * e[8], n[1] = i * e[1] + o * e[5] + a * e[9], n[2] = i * e[2] + o * e[6] + a * e[10], n
                    }, t.transformNormal = function(e, t, n) {
                        n = n || r.create();
                        var i = c(e),
                            o = t[0],
                            a = t[1],
                            s = t[2];
                        return n[0] = o * i[0] + a * i[1] + s * i[2], n[1] = o * i[4] + a * i[5] + s * i[6], n[2] = o * i[8] + a * i[9] + s * i[10], n
                    }, t.transformPoint = function(e, t, n) {
                        n = n || r.create();
                        var i = t[0],
                            o = t[1],
                            a = t[2],
                            s = i * e[3] + o * e[7] + a * e[11] + e[15];
                        return n[0] = (i * e[0] + o * e[4] + a * e[8] + e[12]) / s, n[1] = (i * e[1] + o * e[5] + a * e[9] + e[13]) / s, n[2] = (i * e[2] + o * e[6] + a * e[10] + e[14]) / s, n
                    }, t.translate = function(e, t, n) {
                        n = n || new i(16);
                        var r = t[0],
                            o = t[1],
                            a = t[2],
                            s = e[0],
                            l = e[1],
                            u = e[2],
                            c = e[3],
                            h = e[4],
                            f = e[5],
                            d = e[6],
                            p = e[7],
                            m = e[8],
                            _ = e[9],
                            g = e[10],
                            v = e[11],
                            y = e[12],
                            b = e[13],
                            w = e[14],
                            x = e[15];
                        e !== n && (n[0] = s, n[1] = l, n[2] = u, n[3] = c, n[4] = h, n[5] = f, n[6] = d, n[7] = p, n[8] = m, n[9] = _, n[10] = g, n[11] = v);
                        return n[12] = s * r + h * o + m * a + y, n[13] = l * r + f * o + _ * a + b, n[14] = u * r + d * o + g * a + w, n[15] = c * r + p * o + v * a + x, n
                    }, t.translation = function(e, t) {
                        return (t = t || new i(16))[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t
                    }, t.transpose = function(e, t) {
                        if ((t = t || new i(16)) === e) {
                            var n;
                            return n = e[1], e[1] = e[4], e[4] = n, n = e[2], e[2] = e[8], e[8] = n, n = e[3], e[3] = e[12], e[12] = n, n = e[6], e[6] = e[9], e[9] = n, n = e[7], e[7] = e[13], e[13] = n, n = e[11], e[11] = e[14], e[14] = n, t
                        }
                        var r = e[0],
                            o = e[1],
                            a = e[2],
                            s = e[3],
                            l = e[4],
                            u = e[5],
                            c = e[6],
                            h = e[7],
                            f = e[8],
                            d = e[9],
                            p = e[10],
                            m = e[11],
                            _ = e[12],
                            g = e[13],
                            v = e[14],
                            y = e[15];
                        return t[0] = r, t[1] = l, t[2] = f, t[3] = _, t[4] = o, t[5] = u, t[6] = d, t[7] = g, t[8] = a, t[9] = c, t[10] = p, t[11] = v, t[12] = s, t[13] = h, t[14] = m, t[15] = y, t
                    };
                    var r = function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                                }
                        return t.default = e, t
                    }(n( /*! ./v3.js */ "./src/v3.js"));
                    var i = Float32Array,
                        o = r.create(),
                        a = r.create(),
                        s = r.create();

                    function l(e, t) {
                        return (t = t || new i(16))[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
                    }

                    function u(e) {
                        return (e = e || new i(16))[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
                    }

                    function c(e, t) {
                        t = t || new i(16);
                        var n = e[0],
                            r = e[1],
                            o = e[2],
                            a = e[3],
                            s = e[4],
                            l = e[5],
                            u = e[6],
                            c = e[7],
                            h = e[8],
                            f = e[9],
                            d = e[10],
                            p = e[11],
                            m = e[12],
                            _ = e[13],
                            g = e[14],
                            v = e[15],
                            y = d * v,
                            b = g * p,
                            w = u * v,
                            x = g * c,
                            T = u * p,
                            A = d * c,
                            M = o * v,
                            P = g * a,
                            C = o * p,
                            R = d * a,
                            E = o * c,
                            I = u * a,
                            O = h * _,
                            D = m * f,
                            S = s * _,
                            F = m * l,
                            N = s * f,
                            k = h * l,
                            B = n * _,
                            G = m * r,
                            L = n * f,
                            U = h * r,
                            X = n * l,
                            j = s * r,
                            V = y * l + x * f + T * _ - (b * l + w * f + A * _),
                            z = b * r + M * f + R * _ - (y * r + P * f + C * _),
                            Y = w * r + P * l + E * _ - (x * r + M * l + I * _),
                            W = A * r + C * l + I * f - (T * r + R * l + E * f),
                            H = 1 / (n * V + s * z + h * Y + m * W);
                        return t[0] = H * V, t[1] = H * z, t[2] = H * Y, t[3] = H * W, t[4] = H * (b * s + w * h + A * m - (y * s + x * h + T * m)), t[5] = H * (y * n + P * h + C * m - (b * n + M * h + R * m)), t[6] = H * (x * n + M * s + I * m - (w * n + P * s + E * m)), t[7] = H * (T * n + R * s + E * h - (A * n + C * s + I * h)), t[8] = H * (O * c + F * p + N * v - (D * c + S * p + k * v)), t[9] = H * (D * a + B * p + U * v - (O * a + G * p + L * v)), t[10] = H * (S * a + G * c + X * v - (F * a + B * c + j * v)), t[11] = H * (k * a + L * c + j * p - (N * a + U * c + X * p)), t[12] = H * (S * d + k * g + D * u - (N * g + O * u + F * d)), t[13] = H * (L * g + O * o + G * d - (B * d + U * g + D * o)), t[14] = H * (B * u + j * g + F * o - (X * g + S * o + G * u)), t[15] = H * (X * d + N * o + U * u - (L * u + j * d + k * o)), t
                    }
                },
                "./src/primitives.js":
                /*!***************************!*\
                  !*** ./src/primitives.js ***!
                  \***************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.create3DFVertices = C, t.createAugmentedTypedArray = f, t.createCubeVertices = A, t.createPlaneVertices = w, t.createSphereVertices = x, t.createTruncatedConeVertices = M, t.createXYQuadVertices = b, t.createCresentVertices = R, t.createCylinderVertices = E, t.createTorusVertices = I, t.createDiscVertices = O, t.deindexVertices = function(e) {
                        var t = e.indices,
                            n = {},
                            r = t.length;
                        return Object.keys(e).filter(d).forEach(function(i) {
                            for (var o = e[i], a = o.numComponents, s = f(a, r, o.constructor), l = 0; l < r; ++l)
                                for (var u = t[l], c = u * a, h = 0; h < a; ++h) s.push(o[c + h]);
                            n[i] = s
                        }), n
                    }, t.flattenNormals = function(e) {
                        if (e.indices) throw "can't flatten normals of indexed vertices. deindex them first";
                        for (var t = e.normal, n = t.length, r = 0; r < n; r += 9) {
                            var i = t[r + 0],
                                o = t[r + 1],
                                a = t[r + 2],
                                s = t[r + 3],
                                l = t[r + 4],
                                u = t[r + 5],
                                c = t[r + 6],
                                h = t[r + 7],
                                f = t[r + 8],
                                d = i + s + c,
                                p = o + l + h,
                                m = a + u + f,
                                _ = Math.sqrt(d * d + p * p + m * m);
                            d /= _, p /= _, m /= _, t[r + 0] = d, t[r + 1] = p, t[r + 2] = m, t[r + 3] = d, t[r + 4] = p, t[r + 5] = m, t[r + 6] = d, t[r + 7] = p, t[r + 8] = m
                        }
                        return e
                    }, t.makeRandomVertexColors = function(e, t) {
                        t = t || {};
                        var n = e.position.numElements,
                            r = f(4, n, Uint8Array),
                            i = t.rand || function(e, t) {
                                return t < 3 ? (n = 256, Math.random() * n | 0) : 255;
                                var n
                            };
                        if (e.color = r, e.indices)
                            for (var o = 0; o < n; ++o) r.push(i(o, 0), i(o, 1), i(o, 2), i(o, 3));
                        else
                            for (var a = t.vertsPerColor || 3, s = n / a, l = 0; l < s; ++l)
                                for (var u = [i(l, 0), i(l, 1), i(l, 2), i(l, 3)], c = 0; c < a; ++c) r.push(u);
                        return e
                    }, t.reorientDirections = _, t.reorientNormals = g, t.reorientPositions = v, t.reorientVertices = y, t.concatVertices = function(e) {
                        for (var t, n = {}, r = function(r) {
                                var i = e[r];
                                Object.keys(i).forEach(function(e) {
                                    n[e] || (n[e] = []), t || "indices" === e || (t = e);
                                    var r = i[e],
                                        o = c(r, e),
                                        a = u(r),
                                        s = a.length / o;
                                    n[e].push(s)
                                })
                            }, i = 0; i < e.length; ++i) r(i);
                        var o = n[t],
                            a = {};
                        return Object.keys(n).forEach(function(t) {
                            var n = function(t) {
                                    for (var n, r = 0, i = 0; i < e.length; ++i) {
                                        var o = e[i],
                                            a = o[t],
                                            s = u(a);
                                        r += s.length, n && !a.data || (n = a)
                                    }
                                    return {
                                        length: r,
                                        spec: n
                                    }
                                }(t),
                                r = k(n.spec, n.length);
                            ! function(t, n, r) {
                                for (var i = 0, o = 0, a = 0; a < e.length; ++a) {
                                    var s = e[a],
                                        l = s[t],
                                        c = u(l);
                                    "indices" === t ? (N(c, r, o, i), i += n[a]) : N(c, r, o), o += c.length
                                }
                            }(t, o, u(r)), a[t] = r
                        }), a
                    }, t.duplicateVertices = function(e) {
                        var t = {};
                        return Object.keys(e).forEach(function(n) {
                            var r = e[n],
                                i = u(r),
                                o = k(r, i.length);
                            N(i, u(o), 0), t[n] = o
                        }), t
                    }, t.createDiscBuffers = t.createDiscBufferInfo = t.createTorusBuffers = t.createTorusBufferInfo = t.createCylinderBuffers = t.createCylinderBufferInfo = t.createCresentBuffers = t.createCresentBufferInfo = t.createXYQuadBuffers = t.createXYQuadBufferInfo = t.createTruncatedConeBuffers = t.createTruncatedConeBufferInfo = t.createSphereBuffers = t.createSphereBufferInfo = t.createPlaneBuffers = t.createPlaneBufferInfo = t.createCubeBuffers = t.createCubeBufferInfo = t.create3DFBuffers = t.create3DFBufferInfo = void 0;
                    var r = l(n( /*! ./attributes.js */ "./src/attributes.js")),
                        i = l(n( /*! ./helper.js */ "./src/helper.js")),
                        o = l(n( /*! ./typedarrays.js */ "./src/typedarrays.js")),
                        a = l(n( /*! ./m4.js */ "./src/m4.js")),
                        s = l(n( /*! ./v3.js */ "./src/v3.js"));

                    function l(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                                }
                        return t.default = e, t
                    }
                    var u = r.getArray_,
                        c = r.getNumComponents_;

                    function h(e, t) {
                        var n = 0;
                        return e.push = function() {
                            for (var t = 0; t < arguments.length; ++t) {
                                var r = arguments[t];
                                if (r instanceof Array || o.isArrayBuffer(r))
                                    for (var i = 0; i < r.length; ++i) e[n++] = r[i];
                                else e[n++] = r
                            }
                        }, e.reset = function(e) {
                            n = e || 0
                        }, e.numComponents = t, Object.defineProperty(e, "numElements", {
                            get: function() {
                                return this.length / this.numComponents | 0
                            }
                        }), e
                    }

                    function f(e, t, n) {
                        return h(new(n || Float32Array)(e * t), e)
                    }

                    function d(e) {
                        return "indices" !== e
                    }

                    function p(e, t, n) {
                        for (var r = e.length, i = new Float32Array(3), o = 0; o < r; o += 3) n(t, [e[o], e[o + 1], e[o + 2]], i), e[o] = i[0], e[o + 1] = i[1], e[o + 2] = i[2]
                    }

                    function m(e, t, n) {
                        n = n || s.create();
                        var r = t[0],
                            i = t[1],
                            o = t[2];
                        return n[0] = r * e[0] + i * e[1] + o * e[2], n[1] = r * e[4] + i * e[5] + o * e[6], n[2] = r * e[8] + i * e[9] + o * e[10], n
                    }

                    function _(e, t) {
                        return p(e, t, a.transformDirection), e
                    }

                    function g(e, t) {
                        return p(e, a.inverse(t), m), e
                    }

                    function v(e, t) {
                        return p(e, t, a.transformPoint), e
                    }

                    function y(e, t) {
                        return Object.keys(e).forEach(function(n) {
                            var r = e[n];
                            n.indexOf("pos") >= 0 ? v(r, t) : n.indexOf("tan") >= 0 || n.indexOf("binorm") >= 0 ? _(r, t) : n.indexOf("norm") >= 0 && g(r, t)
                        }), e
                    }

                    function b(e, t, n) {
                        return e = e || 2, {
                            position: {
                                numComponents: 2,
                                data: [(t = t || 0) + -1 * (e *= .5), (n = n || 0) + -1 * e, t + 1 * e, n + -1 * e, t + -1 * e, n + 1 * e, t + 1 * e, n + 1 * e]
                            },
                            normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
                            texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
                            indices: [0, 1, 2, 2, 1, 3]
                        }
                    }

                    function w(e, t, n, r, i) {
                        e = e || 1, t = t || 1, n = n || 1, r = r || 1, i = i || a.identity();
                        for (var o = (n + 1) * (r + 1), s = f(3, o), l = f(3, o), u = f(2, o), c = 0; c <= r; c++)
                            for (var h = 0; h <= n; h++) {
                                var d = h / n,
                                    p = c / r;
                                s.push(e * d - .5 * e, 0, t * p - .5 * t), l.push(0, 1, 0), u.push(d, p)
                            }
                        for (var m = n + 1, _ = f(3, n * r * 2, Uint16Array), g = 0; g < r; g++)
                            for (var v = 0; v < n; v++) _.push((g + 0) * m + v, (g + 1) * m + v, (g + 0) * m + v + 1), _.push((g + 1) * m + v, (g + 1) * m + v + 1, (g + 0) * m + v + 1);
                        return y({
                            position: s,
                            normal: l,
                            texcoord: u,
                            indices: _
                        }, i)
                    }

                    function x(e, t, n, r, i, o, a) {
                        if (t <= 0 || n <= 0) throw Error("subdivisionAxis and subdivisionHeight must be > 0");
                        r = r || 0, o = o || 0;
                        for (var s = (i = i || Math.PI) - r, l = (a = a || 2 * Math.PI) - o, u = (t + 1) * (n + 1), c = f(3, u), h = f(3, u), d = f(2, u), p = 0; p <= n; p++)
                            for (var m = 0; m <= t; m++) {
                                var _ = m / t,
                                    g = p / n,
                                    v = l * _ + o,
                                    y = s * g + r,
                                    b = Math.sin(v),
                                    w = Math.cos(v),
                                    x = Math.sin(y),
                                    T = w * x,
                                    A = Math.cos(y),
                                    M = b * x;
                                c.push(e * T, e * A, e * M), h.push(T, A, M), d.push(1 - _, g)
                            }
                        for (var P = t + 1, C = f(3, t * n * 2, Uint16Array), R = 0; R < t; R++)
                            for (var E = 0; E < n; E++) C.push((E + 0) * P + R, (E + 0) * P + R + 1, (E + 1) * P + R), C.push((E + 1) * P + R, (E + 0) * P + R + 1, (E + 1) * P + R + 1);
                        return {
                            position: c,
                            normal: h,
                            texcoord: d,
                            indices: C
                        }
                    }
                    var T = [
                        [3, 7, 5, 1],
                        [6, 2, 0, 4],
                        [6, 7, 3, 2],
                        [0, 1, 5, 4],
                        [7, 6, 4, 5],
                        [2, 3, 1, 0]
                    ];

                    function A(e) {
                        for (var t = (e = e || 1) / 2, n = [
                                [-t, -t, -t],
                                [+t, -t, -t],
                                [-t, +t, -t],
                                [+t, +t, -t],
                                [-t, -t, +t],
                                [+t, -t, +t],
                                [-t, +t, +t],
                                [+t, +t, +t]
                            ], r = [
                                [1, 0, 0],
                                [-1, 0, 0],
                                [0, 1, 0],
                                [0, -1, 0],
                                [0, 0, 1],
                                [0, 0, -1]
                            ], i = [
                                [1, 0],
                                [0, 0],
                                [0, 1],
                                [1, 1]
                            ], o = f(3, 24), a = f(3, 24), s = f(2, 24), l = f(3, 12, Uint16Array), u = 0; u < 6; ++u) {
                            for (var c = T[u], h = 0; h < 4; ++h) {
                                var d = n[c[h]],
                                    p = r[u],
                                    m = i[h];
                                o.push(d), a.push(p), s.push(m)
                            }
                            var _ = 4 * u;
                            l.push(_ + 0, _ + 1, _ + 2), l.push(_ + 0, _ + 2, _ + 3)
                        }
                        return {
                            position: o,
                            normal: a,
                            texcoord: s,
                            indices: l
                        }
                    }

                    function M(e, t, n, r, i, o, a) {
                        if (r < 3) throw Error("radialSubdivisions must be 3 or greater");
                        if (i < 1) throw Error("verticalSubdivisions must be 1 or greater");
                        for (var s = void 0 === o || o, l = void 0 === a || a, u = (s ? 2 : 0) + (l ? 2 : 0), c = (r + 1) * (i + 1 + u), h = f(3, c), d = f(3, c), p = f(2, c), m = f(3, r * (i + u) * 2, Uint16Array), _ = r + 1, g = Math.atan2(e - t, n), v = Math.cos(g), y = Math.sin(g), b = i + (l ? 2 : 0), w = s ? -2 : 0; w <= b; ++w) {
                            var x = w / i,
                                T = n * x,
                                A = void 0;
                            w < 0 ? (T = 0, x = 1, A = e) : w > i ? (T = n, x = 1, A = t) : A = e + w / i * (t - e), -2 !== w && w !== i + 2 || (A = 0, x = 0), T -= n / 2;
                            for (var M = 0; M < _; ++M) {
                                var P = Math.sin(M * Math.PI * 2 / r),
                                    C = Math.cos(M * Math.PI * 2 / r);
                                h.push(P * A, T, C * A), d.push(w < 0 || w > i ? 0 : P * v, w < 0 ? -1 : w > i ? 1 : y, w < 0 || w > i ? 0 : C * v), p.push(M / r, 1 - x)
                            }
                        }
                        for (var R = 0; R < i + u; ++R)
                            for (var E = 0; E < r; ++E) m.push(_ * (R + 0) + 0 + E, _ * (R + 0) + 1 + E, _ * (R + 1) + 1 + E), m.push(_ * (R + 0) + 0 + E, _ * (R + 1) + 1 + E, _ * (R + 1) + 0 + E);
                        return {
                            position: h,
                            normal: d,
                            texcoord: p,
                            indices: m
                        }
                    }

                    function P(e, t) {
                        t = t || [];
                        for (var n = [], r = 0; r < e.length; r += 4) {
                            var i = e[r],
                                o = e.slice(r + 1, r + 4);
                            o.push.apply(o, t);
                            for (var a = 0; a < i; ++a) n.push.apply(n, o)
                        }
                        return n
                    }

                    function C() {
                        var e = [0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, 30, 0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, 30, 60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, 0, 0, 30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, 30, 0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30, 30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30, 0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30, 100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30, 30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0, 30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30, 30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30, 67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30, 30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0, 30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30, 0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0, 0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0],
                            t = P([18, 0, 0, 1, 18, 0, 0, -1, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, 1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, 1, 0, 0, 6, 0, -1, 0, 6, -1, 0, 0]),
                            n = P([18, 200, 70, 120, 18, 80, 70, 200, 6, 70, 200, 210, 6, 200, 200, 70, 6, 210, 100, 70, 6, 210, 160, 70, 6, 70, 180, 210, 6, 100, 70, 210, 6, 76, 210, 100, 6, 140, 210, 80, 6, 90, 130, 110, 6, 160, 160, 220], [255]),
                            r = e.length / 3,
                            i = {
                                position: f(3, r),
                                texcoord: f(2, r),
                                normal: f(3, r),
                                color: f(4, r, Uint8Array),
                                indices: f(3, r / 3, Uint16Array)
                            };
                        i.position.push(e), i.texcoord.push([.22, .19, .22, .79, .34, .19, .22, .79, .34, .79, .34, .19, .34, .19, .34, .31, .62, .19, .34, .31, .62, .31, .62, .19, .34, .43, .34, .55, .49, .43, .34, .55, .49, .55, .49, .43, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0]), i.normal.push(t), i.color.push(n);
                        for (var o = 0; o < r; ++o) i.indices.push(o);
                        return i
                    }

                    function R(e, t, n, r, i, o, a) {
                        if (i <= 0) throw Error("subdivisionDown must be > 0");
                        var l = 2,
                            u = (a = a || 1) - (o = o || 0),
                            c = 2 * (i + 1) * (2 + l),
                            h = f(3, c),
                            d = f(3, c),
                            p = f(2, c);

                        function m(e, t, n) {
                            return e + (t - e) * n
                        }

                        function _(t, n, a, c, f, _) {
                            for (var g = 0; g <= i; g++) {
                                var v = n / (l - 1),
                                    y = g / i,
                                    b = 2 * (v - .5),
                                    w = (o + y * u) * Math.PI,
                                    x = Math.sin(w),
                                    T = Math.cos(w),
                                    A = m(e, t, x),
                                    M = b * r,
                                    P = T * e,
                                    C = x * A;
                                h.push(M, P, C);
                                var R = s.add(s.multiply([0, x, T], a), c);
                                d.push(R), p.push(v * f + _, y)
                            }
                        }
                        for (var g = 0; g < l; g++) {
                            var v = 2 * (g / (l - 1) - .5);
                            _(t, g, [1, 1, 1], [0, 0, 0], 1, 0), _(t, g, [0, 0, 0], [v, 0, 0], 0, 0), _(n, g, [1, 1, 1], [0, 0, 0], 1, 0), _(n, g, [0, 0, 0], [v, 0, 0], 0, 1)
                        }
                        var y = f(3, 2 * i * (2 + l), Uint16Array);

                        function b(e, t) {
                            for (var n = 0; n < i; ++n) y.push(e + n + 0, e + n + 1, t + n + 0), y.push(e + n + 1, t + n + 1, t + n + 0)
                        }
                        var w = i + 1;
                        return b(0 * w, 4 * w), b(5 * w, 7 * w), b(6 * w, 2 * w), b(3 * w, 1 * w), {
                            position: h,
                            normal: d,
                            texcoord: p,
                            indices: y
                        }
                    }

                    function E(e, t, n, r, i, o) {
                        return M(e, e, t, n, r, i, o)
                    }

                    function I(e, t, n, r, i, o) {
                        if (n < 3) throw Error("radialSubdivisions must be 3 or greater");
                        if (r < 3) throw Error("verticalSubdivisions must be 3 or greater");
                        i = i || 0;
                        for (var a = (o = o || 2 * Math.PI) - i, s = n + 1, l = r + 1, u = s * l, c = f(3, u), h = f(3, u), d = f(2, u), p = f(3, n * r * 2, Uint16Array), m = 0; m < l; ++m)
                            for (var _ = m / r, g = _ * Math.PI * 2, v = Math.sin(g), y = e + v * t, b = Math.cos(g), w = b * t, x = 0; x < s; ++x) {
                                var T = x / n,
                                    A = i + T * a,
                                    M = Math.sin(A),
                                    P = Math.cos(A),
                                    C = M * y,
                                    R = P * y,
                                    E = M * v,
                                    I = P * v;
                                c.push(C, w, R), h.push(E, b, I), d.push(T, 1 - _)
                            }
                        for (var O = 0; O < r; ++O)
                            for (var D = 0; D < n; ++D) {
                                var S = 1 + D,
                                    F = 1 + O;
                                p.push(s * O + D, s * F + D, s * O + S), p.push(s * F + D, s * F + S, s * O + S)
                            }
                        return {
                            position: c,
                            normal: h,
                            texcoord: d,
                            indices: p
                        }
                    }

                    function O(e, t, n, r, i) {
                        if (t < 3) throw Error("divisions must be at least 3");
                        i = i || 1, r = r || 0;
                        for (var o = (t + 1) * ((n = n || 1) + 1), a = f(3, o), s = f(3, o), l = f(2, o), u = f(3, n * t * 2, Uint16Array), c = 0, h = e - r, d = t + 1, p = 0; p <= n; ++p) {
                            for (var m = r + h * Math.pow(p / n, i), _ = 0; _ <= t; ++_) {
                                var g = 2 * Math.PI * _ / t,
                                    v = m * Math.cos(g),
                                    y = m * Math.sin(g);
                                if (a.push(v, 0, y), s.push(0, 1, 0), l.push(1 - _ / t, p / n), p > 0 && _ !== t) {
                                    var b = c + (_ + 1),
                                        w = c + _,
                                        x = c + _ - d,
                                        T = c + (_ + 1) - d;
                                    u.push(b, w, x), u.push(b, x, T)
                                }
                            }
                            c += t + 1
                        }
                        return {
                            position: a,
                            normal: s,
                            texcoord: l,
                            indices: u
                        }
                    }

                    function D(e) {
                        return function(t) {
                            var n = e.apply(this, Array.prototype.slice.call(arguments, 1));
                            return r.createBuffersFromArrays(t, n)
                        }
                    }

                    function S(e) {
                        return function(t) {
                            var n = e.apply(null, Array.prototype.slice.call(arguments, 1));
                            return r.createBufferInfoFromArrays(t, n)
                        }
                    }
                    var F = ["numComponents", "size", "type", "normalize", "stride", "offset", "attrib", "name", "attribName"];

                    function N(e, t, n, r) {
                        r = r || 0;
                        for (var i = e.length, o = 0; o < i; ++o) t[n + o] = e[o] + r
                    }

                    function k(e, t) {
                        var n = u(e),
                            r = new n.constructor(t),
                            o = r;
                        return n.numComponents && n.numElements && h(r, n.numComponents), e.data && (o = {
                            data: r
                        }, i.copyNamedProperties(F, e, o)), o
                    }
                    var B = S(C);
                    t.create3DFBufferInfo = B;
                    var G = D(C);
                    t.create3DFBuffers = G;
                    var L = S(A);
                    t.createCubeBufferInfo = L;
                    var U = D(A);
                    t.createCubeBuffers = U;
                    var X = S(w);
                    t.createPlaneBufferInfo = X;
                    var j = D(w);
                    t.createPlaneBuffers = j;
                    var V = S(x);
                    t.createSphereBufferInfo = V;
                    var z = D(x);
                    t.createSphereBuffers = z;
                    var Y = S(M);
                    t.createTruncatedConeBufferInfo = Y;
                    var W = D(M);
                    t.createTruncatedConeBuffers = W;
                    var H = S(b);
                    t.createXYQuadBufferInfo = H;
                    var q = D(b);
                    t.createXYQuadBuffers = q;
                    var Q = S(R);
                    t.createCresentBufferInfo = Q;
                    var K = D(R);
                    t.createCresentBuffers = K;
                    var Z = S(E);
                    t.createCylinderBufferInfo = Z;
                    var $ = D(E);
                    t.createCylinderBuffers = $;
                    var J = S(I);
                    t.createTorusBufferInfo = J;
                    var ee = D(I);
                    t.createTorusBuffers = ee;
                    var te = S(O);
                    t.createDiscBufferInfo = te;
                    var ne = D(O);
                    t.createDiscBuffers = ne
                },
                "./src/programs.js":
                /*!*************************!*\
                  !*** ./src/programs.js ***!
                  \*************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.createAttributeSetters = U, t.createProgram = E, t.createProgramFromScripts = function(e, t, n, r, i) {
                        for (var o = M(n, r, i), a = [], s = 0; s < t.length; ++s) {
                            var l = I(e, t[s], e[P[s]], o.errorCallback);
                            if (!l) return null;
                            a.push(l)
                        }
                        return E(e, a, o)
                    }, t.createProgramFromSources = O, t.createProgramInfo = function(e, t, n, r, i) {
                        var o = M(n, r, i),
                            a = !0;
                        if (t = t.map(function(e) {
                                if (e.indexOf("\n") < 0) {
                                    var t = l(e);
                                    t ? e = t.text : (o.errorCallback("no element with id: " + e), a = !1)
                                }
                                return e
                            }), !a) return null;
                        var s = O(e, t, o);
                        if (!s) return null;
                        return j(e, s)
                    }, t.createProgramInfoFromProgram = j, t.createUniformSetters = S, t.createUniformBlockSpecFromProgram = k, t.createUniformBlockInfoFromProgram = G, t.createUniformBlockInfo = function(e, t, n) {
                        return G(e, t.program, t.uniformBlockSpec, n)
                    }, t.createTransformFeedback = function(e, t, n) {
                        var r = e.createTransformFeedback();
                        return e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, r), e.useProgram(t.program), N(e, t, n), e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null), r
                    }, t.createTransformFeedbackInfo = F, t.bindTransformFeedbackInfo = N, t.setAttributes = X, t.setBuffersAndAttributes = function(e, t, n) {
                        n.vertexArrayObject ? e.bindVertexArray(n.vertexArrayObject) : (X(t.attribSetters || t, n.attribs), n.indices && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, n.indices))
                    }, t.setUniforms = function e(t, n) {
                        var r = t.uniformSetters || t;
                        var i = arguments.length;
                        for (var o = 1; o < i; ++o) {
                            var a = arguments[o];
                            if (Array.isArray(a))
                                for (var s = a.length, l = 0; l < s; ++l) e(r, a[l]);
                            else
                                for (var u in a) {
                                    var c = r[u];
                                    c && c(a[u])
                                }
                        }
                    }, t.setUniformBlock = function(e, t, n) {
                        L(e, t, n) && e.bufferData(e.UNIFORM_BUFFER, n.array, e.DYNAMIC_DRAW)
                    }, t.setBlockUniforms = function(e, t) {
                        var n = e.uniforms;
                        for (var r in t) {
                            var i = n[r];
                            if (i) {
                                var o = t[r];
                                o.length ? i.set(o) : i[0] = o
                            }
                        }
                    }, t.bindUniformBlock = L;
                    var r = o(n( /*! ./utils.js */ "./src/utils.js")),
                        i = o(n( /*! ./helper.js */ "./src/helper.js"));

                    function o(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                                }
                        return t.default = e, t
                    }
                    var a = i.error,
                        s = i.warn,
                        l = "undefined" != typeof document && document.getElementById ? document.getElementById.bind(document) : function() {
                            return null
                        },
                        u = {};

                    function c(e, t) {
                        return u[t].bindPoint
                    }

                    function h(e, t) {
                        return function(n) {
                            e.uniform1i(t, n)
                        }
                    }

                    function f(e, t) {
                        return function(n) {
                            e.uniform1iv(t, n)
                        }
                    }

                    function d(e, t) {
                        return function(n) {
                            e.uniform2iv(t, n)
                        }
                    }

                    function p(e, t) {
                        return function(n) {
                            e.uniform3iv(t, n)
                        }
                    }

                    function m(e, t) {
                        return function(n) {
                            e.uniform4iv(t, n)
                        }
                    }

                    function _(e, t, n, o) {
                        var a = c(0, t);
                        return r.isWebGL2(e) ? function(t) {
                            var r, s;
                            i.isTexture(e, t) ? (r = t, s = null) : (r = t.texture, s = t.sampler), e.uniform1i(o, n), e.activeTexture(e.TEXTURE0 + n), e.bindTexture(a, r), e.bindSampler(n, s)
                        } : function(t) {
                            e.uniform1i(o, n), e.activeTexture(e.TEXTURE0 + n), e.bindTexture(a, t)
                        }
                    }

                    function g(e, t, n, o, a) {
                        for (var s = c(0, t), l = new Int32Array(a), u = 0; u < a; ++u) l[u] = n + u;
                        return r.isWebGL2(e) ? function(t) {
                            e.uniform1iv(o, l), t.forEach(function(t, r) {
                                var o, a;
                                e.activeTexture(e.TEXTURE0 + l[r]), i.isTexture(e, t) ? (o = t, a = null) : (o = t.texture, a = t.sampler), e.bindSampler(n, a), e.bindTexture(s, o)
                            })
                        } : function(t) {
                            e.uniform1iv(o, l), t.forEach(function(t, n) {
                                e.activeTexture(e.TEXTURE0 + l[n]), e.bindTexture(s, t)
                            })
                        }
                    }

                    function v(e, t) {
                        return function(n) {
                            n.value ? (e.disableVertexAttribArray(t), e.vertexAttrib4fv(t, n.value)) : (e.bindBuffer(e.ARRAY_BUFFER, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribPointer(t, n.numComponents || n.size, n.type || e.FLOAT, n.normalize || !1, n.stride || 0, n.offset || 0), void 0 !== n.divisor && e.vertexAttribDivisor(t, n.divisor))
                        }
                    }

                    function y(e, t) {
                        return function(n) {
                            n.value ? (e.disableVertexAttribArray(t), e.vertexAttrib4iv(t, n.value)) : (e.bindBuffer(e.ARRAY_BUFFER, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(t, n.numComponents || n.size, n.type || e.INT, n.stride || 0, n.offset || 0), void 0 !== n.divisor && e.vertexAttribDivisor(t, n.divisor))
                        }
                    }

                    function b(e, t) {
                        return function(n) {
                            n.value ? (e.disableVertexAttribArray(t), e.vertexAttrib4uiv(t, n.value)) : (e.bindBuffer(e.ARRAY_BUFFER, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(t, n.numComponents || n.size, n.type || e.UNSIGNED_INT, n.stride || 0, n.offset || 0), void 0 !== n.divisor && e.vertexAttribDivisor(t, n.divisor))
                        }
                    }

                    function w(e, t, n) {
                        var r = n.size,
                            i = n.count;
                        return function(n) {
                            e.bindBuffer(e.ARRAY_BUFFER, n.buffer);
                            for (var o = n.size || n.numComponents || r, a = o / i, s = n.type || e.FLOAT, l = u[s].size * o, c = n.normalize || !1, h = n.offset || 0, f = l / i, d = 0; d < i; ++d) e.enableVertexAttribArray(t + d), e.vertexAttribPointer(t + d, a, s, c, l, h + f * d), void 0 !== n.divisor && e.vertexAttribDivisor(t + d, n.divisor)
                        }
                    }
                    u[5126] = {
                        Type: Float32Array,
                        size: 4,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniform1f(t, n)
                            }
                        },
                        arraySetter: function(e, t) {
                            return function(n) {
                                e.uniform1fv(t, n)
                            }
                        }
                    }, u[35664] = {
                        Type: Float32Array,
                        size: 8,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniform2fv(t, n)
                            }
                        }
                    }, u[35665] = {
                        Type: Float32Array,
                        size: 12,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniform3fv(t, n)
                            }
                        }
                    }, u[35666] = {
                        Type: Float32Array,
                        size: 16,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniform4fv(t, n)
                            }
                        }
                    }, u[5124] = {
                        Type: Int32Array,
                        size: 4,
                        setter: h,
                        arraySetter: f
                    }, u[35667] = {
                        Type: Int32Array,
                        size: 8,
                        setter: d
                    }, u[35668] = {
                        Type: Int32Array,
                        size: 12,
                        setter: p
                    }, u[35669] = {
                        Type: Int32Array,
                        size: 16,
                        setter: m
                    }, u[5125] = {
                        Type: Uint32Array,
                        size: 4,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniform1ui(t, n)
                            }
                        },
                        arraySetter: function(e, t) {
                            return function(n) {
                                e.uniform1uiv(t, n)
                            }
                        }
                    }, u[36294] = {
                        Type: Uint32Array,
                        size: 8,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniform2uiv(t, n)
                            }
                        }
                    }, u[36295] = {
                        Type: Uint32Array,
                        size: 12,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniform3uiv(t, n)
                            }
                        }
                    }, u[36296] = {
                        Type: Uint32Array,
                        size: 16,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniform4uiv(t, n)
                            }
                        }
                    }, u[35670] = {
                        Type: Uint32Array,
                        size: 4,
                        setter: h,
                        arraySetter: f
                    }, u[35671] = {
                        Type: Uint32Array,
                        size: 8,
                        setter: d
                    }, u[35672] = {
                        Type: Uint32Array,
                        size: 12,
                        setter: p
                    }, u[35673] = {
                        Type: Uint32Array,
                        size: 16,
                        setter: m
                    }, u[35674] = {
                        Type: Float32Array,
                        size: 16,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniformMatrix2fv(t, !1, n)
                            }
                        }
                    }, u[35675] = {
                        Type: Float32Array,
                        size: 36,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniformMatrix3fv(t, !1, n)
                            }
                        }
                    }, u[35676] = {
                        Type: Float32Array,
                        size: 64,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniformMatrix4fv(t, !1, n)
                            }
                        }
                    }, u[35685] = {
                        Type: Float32Array,
                        size: 24,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniformMatrix2x3fv(t, !1, n)
                            }
                        }
                    }, u[35686] = {
                        Type: Float32Array,
                        size: 32,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniformMatrix2x4fv(t, !1, n)
                            }
                        }
                    }, u[35687] = {
                        Type: Float32Array,
                        size: 24,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniformMatrix3x2fv(t, !1, n)
                            }
                        }
                    }, u[35688] = {
                        Type: Float32Array,
                        size: 48,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniformMatrix3x4fv(t, !1, n)
                            }
                        }
                    }, u[35689] = {
                        Type: Float32Array,
                        size: 32,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniformMatrix4x2fv(t, !1, n)
                            }
                        }
                    }, u[35690] = {
                        Type: Float32Array,
                        size: 48,
                        setter: function(e, t) {
                            return function(n) {
                                e.uniformMatrix4x3fv(t, !1, n)
                            }
                        }
                    }, u[35678] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 3553
                    }, u[35680] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 34067
                    }, u[35679] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 32879
                    }, u[35682] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 3553
                    }, u[36289] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 35866
                    }, u[36292] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 35866
                    }, u[36293] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 34067
                    }, u[36298] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 3553
                    }, u[36299] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 32879
                    }, u[36300] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 34067
                    }, u[36303] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 35866
                    }, u[36306] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 3553
                    }, u[36307] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 32879
                    }, u[36308] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 34067
                    }, u[36311] = {
                        Type: null,
                        size: 0,
                        setter: _,
                        arraySetter: g,
                        bindPoint: 35866
                    };
                    var x = {};
                    x[5126] = {
                        size: 4,
                        setter: v
                    }, x[35664] = {
                        size: 8,
                        setter: v
                    }, x[35665] = {
                        size: 12,
                        setter: v
                    }, x[35666] = {
                        size: 16,
                        setter: v
                    }, x[5124] = {
                        size: 4,
                        setter: y
                    }, x[35667] = {
                        size: 8,
                        setter: y
                    }, x[35668] = {
                        size: 12,
                        setter: y
                    }, x[35669] = {
                        size: 16,
                        setter: y
                    }, x[5125] = {
                        size: 4,
                        setter: b
                    }, x[36294] = {
                        size: 8,
                        setter: b
                    }, x[36295] = {
                        size: 12,
                        setter: b
                    }, x[36296] = {
                        size: 16,
                        setter: b
                    }, x[35670] = {
                        size: 4,
                        setter: y
                    }, x[35671] = {
                        size: 8,
                        setter: y
                    }, x[35672] = {
                        size: 12,
                        setter: y
                    }, x[35673] = {
                        size: 16,
                        setter: y
                    }, x[35674] = {
                        size: 4,
                        setter: w,
                        count: 2
                    }, x[35675] = {
                        size: 9,
                        setter: w,
                        count: 3
                    }, x[35676] = {
                        size: 16,
                        setter: w,
                        count: 4
                    };
                    var T = /^[ \t]*\n/;

                    function A(e, t, n, r) {
                        var i = r || a,
                            o = e.createShader(n),
                            s = 0;
                        if (T.test(t) && (s = 1, t = t.replace(T, "")), e.shaderSource(o, t), e.compileShader(o), !e.getShaderParameter(o, e.COMPILE_STATUS)) {
                            var l = e.getShaderInfoLog(o);
                            return i(function(e, t) {
                                return t = t || 0, ++t, e.split("\n").map(function(e, n) {
                                    return n + t + ": " + e
                                }).join("\n")
                            }(t, s) + "\n*** Error compiling shader: " + l), e.deleteShader(o), null
                        }
                        return o
                    }

                    function M(e, t, n) {
                        var r;
                        if ("function" == typeof t && (n = t, t = void 0), "function" == typeof e) n = e, e = void 0;
                        else if (e && !Array.isArray(e)) {
                            if (e.errorCallback) return e;
                            var i = e;
                            n = i.errorCallback, e = i.attribLocations, r = i.transformFeedbackVaryings
                        }
                        var o = {
                            errorCallback: n || a,
                            transformFeedbackVaryings: r
                        };
                        if (e) {
                            var s = {};
                            Array.isArray(e) ? e.forEach(function(e, n) {
                                s[e] = t ? t[n] : n
                            }) : s = e, o.attribLocations = s
                        }
                        return o
                    }
                    var P = ["VERTEX_SHADER", "FRAGMENT_SHADER"];

                    function C(e, t) {
                        return t.indexOf("frag") >= 0 ? e.FRAGMENT_SHADER : t.indexOf("vert") >= 0 ? e.VERTEX_SHADER : void 0
                    }

                    function R(e, t) {
                        t.forEach(function(t) {
                            e.deleteShader(t)
                        })
                    }

                    function E(e, t, n, r, o) {
                        for (var a = M(n, r, o), s = [], u = [], c = 0; c < t.length; ++c) {
                            var h = t[c];
                            if ("string" == typeof h) {
                                var f = l(h),
                                    d = f ? f.text : h,
                                    p = e[P[c]];
                                f && f.type && (p = C(e, f.type) || p), h = A(e, d, p, a.errorCallback), u.push(h)
                            }
                            i.isShader(e, h) && s.push(h)
                        }
                        if (s.length !== t.length) return a.errorCallback("not enough shaders for program"), R(e, u), null;
                        var m = e.createProgram();
                        s.forEach(function(t) {
                            e.attachShader(m, t)
                        }), a.attribLocations && Object.keys(a.attribLocations).forEach(function(t) {
                            e.bindAttribLocation(m, a.attribLocations[t], t)
                        });
                        var _ = a.transformFeedbackVaryings;
                        if (_ && (_.attribs && (_ = _.attribs), Array.isArray(_) || (_ = Object.keys(_)), e.transformFeedbackVaryings(m, _, a.transformFeedbackMode || e.SEPARATE_ATTRIBS)), e.linkProgram(m), !e.getProgramParameter(m, e.LINK_STATUS)) {
                            var g = e.getProgramInfoLog(m);
                            return a.errorCallback("Error in program linking:" + g), e.deleteProgram(m), R(e, u), null
                        }
                        return m
                    }

                    function I(e, t, n, r) {
                        var i, o = l(t);
                        if (!o) throw "*** Error: unknown script element" + t;
                        i = o.text;
                        var a = n || C(e, o.type);
                        if (!a) throw "*** Error: unknown shader type";
                        return A(e, i, a, r)
                    }

                    function O(e, t, n, r, i) {
                        for (var o = M(n, r, i), a = [], s = 0; s < t.length; ++s) {
                            var l = A(e, t[s], e[P[s]], o.errorCallback);
                            if (!l) return null;
                            a.push(l)
                        }
                        return E(e, a, o)
                    }

                    function D(e) {
                        var t = e.name;
                        return t.startsWith("gl_") || t.startsWith("webgl_")
                    }

                    function S(e, t) {
                        var n = 0;

                        function r(t, r) {
                            var i, o = e.getUniformLocation(t, r.name),
                                a = r.size > 1 && "[0]" === r.name.substr(-3),
                                s = r.type,
                                l = u[s];
                            if (!l) throw "unknown type: 0x" + s.toString(16);
                            if (l.bindPoint) {
                                var c = n;
                                n += r.size, i = a ? l.arraySetter(e, s, c, o, r.size) : l.setter(e, s, c, o, r.size)
                            } else i = l.arraySetter && a ? l.arraySetter(e, o) : l.setter(e, o);
                            return i.location = o, i
                        }
                        for (var i = {}, o = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), a = 0; a < o; ++a) {
                            var s = e.getActiveUniform(t, a);
                            if (!D(s)) {
                                var l = s.name;
                                "[0]" === l.substr(-3) && (l = l.substr(0, l.length - 3));
                                var c = r(t, s);
                                i[l] = c
                            }
                        }
                        return i
                    }

                    function F(e, t) {
                        for (var n = {}, r = e.getProgramParameter(t, e.TRANSFORM_FEEDBACK_VARYINGS), i = 0; i < r; ++i) {
                            var o = e.getTransformFeedbackVarying(t, i);
                            n[o.name] = {
                                index: i,
                                type: o.type,
                                size: o.size
                            }
                        }
                        return n
                    }

                    function N(e, t, n) {
                        for (var r in t.transformFeedbackInfo && (t = t.transformFeedbackInfo), n.attribs && (n = n.attribs), n) {
                            var i = t[r];
                            if (i) {
                                var o = n[r];
                                o.offset ? e.bindBufferRange(e.TRANSFORM_FEEDBACK_BUFFER, i.index, o.buffer, o.offset, o.size) : e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER, i.index, o.buffer)
                            }
                        }
                    }

                    function k(e, t) {
                        for (var n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), r = [], i = [], o = 0; o < n; ++o) {
                            i.push(o), r.push({});
                            var a = e.getActiveUniform(t, o);
                            if (D(a)) break;
                            r[o].name = a.name
                        }[
                            ["UNIFORM_TYPE", "type"],
                            ["UNIFORM_SIZE", "size"],
                            ["UNIFORM_BLOCK_INDEX", "blockNdx"],
                            ["UNIFORM_OFFSET", "offset"]
                        ].forEach(function(n) {
                            var o = n[0],
                                a = n[1];
                            e.getActiveUniforms(t, i, e[o]).forEach(function(e, t) {
                                r[t][a] = e
                            })
                        });
                        for (var s = {}, l = e.getProgramParameter(t, e.ACTIVE_UNIFORM_BLOCKS), u = 0; u < l; ++u) {
                            var c = e.getActiveUniformBlockName(t, u),
                                h = {
                                    index: u,
                                    usedByVertexShader: e.getActiveUniformBlockParameter(t, u, e.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
                                    usedByFragmentShader: e.getActiveUniformBlockParameter(t, u, e.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
                                    size: e.getActiveUniformBlockParameter(t, u, e.UNIFORM_BLOCK_DATA_SIZE),
                                    uniformIndices: e.getActiveUniformBlockParameter(t, u, e.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES)
                                };
                            h.used = h.usedByVertexSahder || h.usedByFragmentShader, s[c] = h
                        }
                        return {
                            blockSpecs: s,
                            uniformData: r
                        }
                    }
                    var B = /\[\d+\]\.$/;

                    function G(e, t, n, r) {
                        var i = n.blockSpecs,
                            o = n.uniformData,
                            a = i[r];
                        if (!a) return s("no uniform block object named:", r), {
                            name: r,
                            uniforms: {}
                        };
                        var l = new ArrayBuffer(a.size),
                            c = e.createBuffer(),
                            h = a.index;
                        e.bindBuffer(e.UNIFORM_BUFFER, c), e.uniformBlockBinding(t, a.index, h);
                        var f = r + ".";
                        B.test(f) && (f = f.replace(B, "."));
                        var d = {};
                        return a.uniformIndices.forEach(function(e) {
                            var t = o[e],
                                n = u[t.type],
                                r = n.Type,
                                i = t.size * n.size,
                                a = t.name;
                            a.substr(0, f.length) === f && (a = a.substr(f.length)), d[a] = new r(l, t.offset, i / r.BYTES_PER_ELEMENT)
                        }), {
                            name: r,
                            array: l,
                            asFloat: new Float32Array(l),
                            buffer: c,
                            uniforms: d
                        }
                    }

                    function L(e, t, n) {
                        var r = (t.uniformBlockSpec || t).blockSpecs[n.name];
                        if (r) {
                            var i = r.index;
                            return e.bindBufferRange(e.UNIFORM_BUFFER, i, n.buffer, n.offset || 0, n.array.byteLength), !0
                        }
                        return !1
                    }

                    function U(e, t) {
                        for (var n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), i = 0; i < r; ++i) {
                            var o = e.getActiveAttrib(t, i);
                            if (!D(o)) {
                                var a = e.getAttribLocation(t, o.name),
                                    s = x[o.type],
                                    l = s.setter(e, a, s);
                                l.location = a, n[o.name] = l
                            }
                        }
                        return n
                    }

                    function X(e, t) {
                        for (var n in t) {
                            var r = e[n];
                            r && r(t[n])
                        }
                    }

                    function j(e, t) {
                        var n = {
                            program: t,
                            uniformSetters: S(e, t),
                            attribSetters: U(e, t)
                        };
                        return r.isWebGL2(e) && (n.uniformBlockSpec = k(e, t), n.transformFeedbackInfo = F(e, t)), n
                    }
                },
                "./src/textures.js":
                /*!*************************!*\
                  !*** ./src/textures.js ***!
                  \*************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.setTextureDefaults_ = function(e) {
                        o.copyExistingProperties(e, s), e.textureColor && T(e.textureColor)
                    }, t.createSampler = D, t.createSamplers = function(e, t) {
                        var n = {};
                        return Object.keys(t).forEach(function(r) {
                            n[r] = D(e, t[r])
                        }), n
                    }, t.setSamplerParameters = O, t.createTexture = q, t.setEmptyTexture = H, t.setTextureFromArray = W, t.loadTextureFromUrl = V, t.setTextureFromElement = B, t.setTextureFilteringForSize = S, t.setTextureParameters = I, t.setDefaultTextureColor = T, t.createTextures = function(e, t, n) {
                        n = n || G;
                        var r = 0,
                            i = [],
                            o = {},
                            a = {};

                        function s() {
                            0 === r && setTimeout(function() {
                                n(i.length ? i : void 0, o, a)
                            }, 0)
                        }
                        return Object.keys(t).forEach(function(n) {
                            var l, u, c = t[n];
                            ("string" == typeof(u = c.src) || Array.isArray(u) && "string" == typeof u[0]) && (l = function(e, t, o) {
                                a[n] = o, --r, e && i.push(e), s()
                            }, ++r), o[n] = q(e, c, l)
                        }), s(), o
                    }, t.resizeTexture = function(e, t, n, r, i) {
                        r = r || n.width, i = i || n.height;
                        var o = n.target || e.TEXTURE_2D;
                        e.bindTexture(o, t);
                        var a, s = n.level || 0,
                            u = n.internalFormat || n.format || e.RGBA,
                            c = g(u),
                            h = n.format || c.format,
                            f = n.src;
                        a = f && (l(f) || Array.isArray(f) && "number" == typeof f[0]) ? n.type || w(e, f, c.type) : n.type || c.type;
                        if (o === e.TEXTURE_CUBE_MAP)
                            for (var d = 0; d < 6; ++d) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + d, s, u, r, i, 0, h, a, null);
                        else e.texImage2D(o, s, u, r, i, 0, h, a, null)
                    }, t.canGenerateMipmap = y, t.canFilter = b, t.getNumComponentsForFormat = function(e) {
                        var t = f[e];
                        if (!t) throw "unknown format: " + e;
                        return t.numColorComponents
                    }, t.getBytesPerElementForInternalFormat = _, t.getFormatAndTypeForInternalFormat = g;
                    var r = a(n( /*! ./utils.js */ "./src/utils.js")),
                        i = a(n( /*! ./typedarrays.js */ "./src/typedarrays.js")),
                        o = a(n( /*! ./helper.js */ "./src/helper.js"));

                    function a(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                                }
                        return t.default = e, t
                    }
                    var s = {
                            textureColor: new Uint8Array([128, 192, 255, 255]),
                            textureOptions: {},
                            crossOrigin: void 0
                        },
                        l = i.isArrayBuffer,
                        u = "undefined" != typeof document && document.createElement ? document.createElement("canvas").getContext("2d") : null,
                        c = 6407,
                        h = 33319,
                        f = {},
                        d = f;
                    d[6406] = {
                        numColorComponents: 1
                    }, d[6409] = {
                        numColorComponents: 1
                    }, d[6410] = {
                        numColorComponents: 2
                    }, d[c] = {
                        numColorComponents: 3
                    }, d[6408] = {
                        numColorComponents: 4
                    }, d[6403] = {
                        numColorComponents: 1
                    }, d[36244] = {
                        numColorComponents: 1
                    }, d[h] = {
                        numColorComponents: 2
                    }, d[33320] = {
                        numColorComponents: 2
                    }, d[c] = {
                        numColorComponents: 3
                    }, d[36248] = {
                        numColorComponents: 3
                    }, d[6408] = {
                        numColorComponents: 4
                    }, d[36249] = {
                        numColorComponents: 4
                    }, d[6402] = {
                        numColorComponents: 1
                    }, d[34041] = {
                        numColorComponents: 2
                    };
                    var p = {},
                        m = p;

                    function _(e, t) {
                        var n = p[e];
                        if (!n) throw "unknown internal format";
                        var r = n.bytesPerElementMap[t];
                        if (void 0 === r) throw "unknown internal format";
                        return r
                    }

                    function g(e) {
                        var t = p[e];
                        if (!t) throw "unknown internal format";
                        return {
                            format: t.textureFormat,
                            type: t.type[0]
                        }
                    }

                    function v(e) {
                        return 0 == (e & e - 1)
                    }

                    function y(e, t, n, i) {
                        if (!r.isWebGL2(e)) return v(t) && v(n);
                        var o = p[i];
                        if (!o) throw "unknown internal format";
                        return o.colorRenderable && o.textureFilterable
                    }

                    function b(e) {
                        var t = p[e];
                        if (!t) throw "unknown internal format";
                        return t.textureFilterable
                    }

                    function w(e, t, n) {
                        return l(t) ? i.getGLTypeForTypedArray(t) : n || e.UNSIGNED_BYTE
                    }

                    function x(e, t, n, r, i) {
                        if (i % 1 != 0) throw "can't guess dimensions";
                        if (n || r) {
                            if (r) {
                                if (!n && (n = i / r) % 1) throw "can't guess dimensions"
                            } else if ((r = i / n) % 1) throw "can't guess dimensions"
                        } else {
                            var o = Math.sqrt(i / (t === e.TEXTURE_CUBE_MAP ? 6 : 1));
                            o % 1 == 0 ? (n = o, r = o) : (n = i, r = 1)
                        }
                        return {
                            width: n,
                            height: r
                        }
                    }

                    function T(e) {
                        s.textureColor = new Uint8Array([255 * e[0], 255 * e[1], 255 * e[2], 255 * e[3]])
                    }
                    m[6406] = {
                        textureFormat: 6406,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [1, 2, 2, 4],
                        type: [5121, 5131, 36193, 5126]
                    }, m[6409] = {
                        textureFormat: 6409,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [1, 2, 2, 4],
                        type: [5121, 5131, 36193, 5126]
                    }, m[6410] = {
                        textureFormat: 6410,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [2, 4, 4, 8],
                        type: [5121, 5131, 36193, 5126]
                    }, m[c] = {
                        textureFormat: c,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [3, 6, 6, 12, 2],
                        type: [5121, 5131, 36193, 5126, 33635]
                    }, m[6408] = {
                        textureFormat: 6408,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [4, 8, 8, 16, 2, 2],
                        type: [5121, 5131, 36193, 5126, 32819, 32820]
                    }, m[33321] = {
                        textureFormat: 6403,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [1],
                        type: [5121]
                    }, m[36756] = {
                        textureFormat: 6403,
                        colorRenderable: !1,
                        textureFilterable: !0,
                        bytesPerElement: [1],
                        type: [5120]
                    }, m[33325] = {
                        textureFormat: 6403,
                        colorRenderable: !1,
                        textureFilterable: !0,
                        bytesPerElement: [4, 2],
                        type: [5126, 5131]
                    }, m[33326] = {
                        textureFormat: 6403,
                        colorRenderable: !1,
                        textureFilterable: !1,
                        bytesPerElement: [4],
                        type: [5126]
                    }, m[33330] = {
                        textureFormat: 36244,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [1],
                        type: [5121]
                    }, m[33329] = {
                        textureFormat: 36244,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [1],
                        type: [5120]
                    }, m[33332] = {
                        textureFormat: 36244,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [2],
                        type: [5123]
                    }, m[33331] = {
                        textureFormat: 36244,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [2],
                        type: [5122]
                    }, m[33334] = {
                        textureFormat: 36244,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [4],
                        type: [5125]
                    }, m[33333] = {
                        textureFormat: 36244,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [4],
                        type: [5124]
                    }, m[33323] = {
                        textureFormat: h,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [2],
                        type: [5121]
                    }, m[36757] = {
                        textureFormat: h,
                        colorRenderable: !1,
                        textureFilterable: !0,
                        bytesPerElement: [2],
                        type: [5120]
                    }, m[33327] = {
                        textureFormat: h,
                        colorRenderable: !1,
                        textureFilterable: !0,
                        bytesPerElement: [8, 4],
                        type: [5126, 5131]
                    }, m[33328] = {
                        textureFormat: h,
                        colorRenderable: !1,
                        textureFilterable: !1,
                        bytesPerElement: [8],
                        type: [5126]
                    }, m[33336] = {
                        textureFormat: 33320,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [2],
                        type: [5121]
                    }, m[33335] = {
                        textureFormat: 33320,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [2],
                        type: [5120]
                    }, m[33338] = {
                        textureFormat: 33320,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [4],
                        type: [5123]
                    }, m[33337] = {
                        textureFormat: 33320,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [4],
                        type: [5122]
                    }, m[33340] = {
                        textureFormat: 33320,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [8],
                        type: [5125]
                    }, m[33339] = {
                        textureFormat: 33320,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [8],
                        type: [5124]
                    }, m[32849] = {
                        textureFormat: c,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [3],
                        type: [5121]
                    }, m[35905] = {
                        textureFormat: c,
                        colorRenderable: !1,
                        textureFilterable: !0,
                        bytesPerElement: [3],
                        type: [5121]
                    }, m[36194] = {
                        textureFormat: c,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [3, 2],
                        type: [5121, 33635]
                    }, m[36758] = {
                        textureFormat: c,
                        colorRenderable: !1,
                        textureFilterable: !0,
                        bytesPerElement: [3],
                        type: [5120]
                    }, m[35898] = {
                        textureFormat: c,
                        colorRenderable: !1,
                        textureFilterable: !0,
                        bytesPerElement: [12, 6, 4],
                        type: [5126, 5131, 35899]
                    }, m[35901] = {
                        textureFormat: c,
                        colorRenderable: !1,
                        textureFilterable: !0,
                        bytesPerElement: [12, 6, 4],
                        type: [5126, 5131, 35902]
                    }, m[34843] = {
                        textureFormat: c,
                        colorRenderable: !1,
                        textureFilterable: !0,
                        bytesPerElement: [12, 6],
                        type: [5126, 5131]
                    }, m[34837] = {
                        textureFormat: c,
                        colorRenderable: !1,
                        textureFilterable: !1,
                        bytesPerElement: [12],
                        type: [5126]
                    }, m[36221] = {
                        textureFormat: 36248,
                        colorRenderable: !1,
                        textureFilterable: !1,
                        bytesPerElement: [3],
                        type: [5121]
                    }, m[36239] = {
                        textureFormat: 36248,
                        colorRenderable: !1,
                        textureFilterable: !1,
                        bytesPerElement: [3],
                        type: [5120]
                    }, m[36215] = {
                        textureFormat: 36248,
                        colorRenderable: !1,
                        textureFilterable: !1,
                        bytesPerElement: [6],
                        type: [5123]
                    }, m[36233] = {
                        textureFormat: 36248,
                        colorRenderable: !1,
                        textureFilterable: !1,
                        bytesPerElement: [6],
                        type: [5122]
                    }, m[36209] = {
                        textureFormat: 36248,
                        colorRenderable: !1,
                        textureFilterable: !1,
                        bytesPerElement: [12],
                        type: [5125]
                    }, m[36227] = {
                        textureFormat: 36248,
                        colorRenderable: !1,
                        textureFilterable: !1,
                        bytesPerElement: [12],
                        type: [5124]
                    }, m[32856] = {
                        textureFormat: 6408,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [4],
                        type: [5121]
                    }, m[35907] = {
                        textureFormat: 6408,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [4],
                        type: [5121]
                    }, m[36759] = {
                        textureFormat: 6408,
                        colorRenderable: !1,
                        textureFilterable: !0,
                        bytesPerElement: [4],
                        type: [5120]
                    }, m[32855] = {
                        textureFormat: 6408,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [4, 2, 4],
                        type: [5121, 32820, 33640]
                    }, m[32854] = {
                        textureFormat: 6408,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [4, 2],
                        type: [5121, 32819]
                    }, m[32857] = {
                        textureFormat: 6408,
                        colorRenderable: !0,
                        textureFilterable: !0,
                        bytesPerElement: [4],
                        type: [33640]
                    }, m[34842] = {
                        textureFormat: 6408,
                        colorRenderable: !1,
                        textureFilterable: !0,
                        bytesPerElement: [16, 8],
                        type: [5126, 5131]
                    }, m[34836] = {
                        textureFormat: 6408,
                        colorRenderable: !1,
                        textureFilterable: !1,
                        bytesPerElement: [16],
                        type: [5126]
                    }, m[36220] = {
                        textureFormat: 36249,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [4],
                        type: [5121]
                    }, m[36238] = {
                        textureFormat: 36249,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [4],
                        type: [5120]
                    }, m[36975] = {
                        textureFormat: 36249,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [4],
                        type: [33640]
                    }, m[36214] = {
                        textureFormat: 36249,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [8],
                        type: [5123]
                    }, m[36232] = {
                        textureFormat: 36249,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [8],
                        type: [5122]
                    }, m[36226] = {
                        textureFormat: 36249,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [16],
                        type: [5124]
                    }, m[36208] = {
                        textureFormat: 36249,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [16],
                        type: [5125]
                    }, m[33189] = {
                        textureFormat: 6402,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [2, 4],
                        type: [5123, 5125]
                    }, m[33190] = {
                        textureFormat: 6402,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [4],
                        type: [5125]
                    }, m[36012] = {
                        textureFormat: 6402,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [4],
                        type: [5126]
                    }, m[35056] = {
                        textureFormat: 34041,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [4],
                        type: [34042]
                    }, m[36013] = {
                        textureFormat: 34041,
                        colorRenderable: !0,
                        textureFilterable: !1,
                        bytesPerElement: [4],
                        type: [36269]
                    }, Object.keys(m).forEach(function(e) {
                        var t = m[e];
                        t.bytesPerElementMap = {}, t.bytesPerElement.forEach(function(e, n) {
                            var r = t.type[n];
                            t.bytesPerElementMap[r] = e
                        })
                    });
                    var A = {};

                    function M(e, t) {
                        void 0 !== t.colorspaceConversion && (A.colorspaceConversion = e.getParameter(e.UNPACK_COLORSPACE_CONVERSION_WEBGL), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.colorspaceConversion)), void 0 !== t.premultiplyAlpha && (A.premultiplyAlpha = e.getParameter(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha)), void 0 !== t.flipY && (A.flipY = e.getParameter(e.UNPACK_FLIP_Y_WEBGL), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, t.flipY))
                    }

                    function P(e, t) {
                        void 0 !== t.colorspaceConversion && e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, A.colorspaceConversion), void 0 !== t.premultiplyAlpha && e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, A.premultiplyAlpha), void 0 !== t.flipY && e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, A.flipY)
                    }

                    function C(e) {
                        A.unpackAlignment = e.getParameter(e.UNPACK_ALIGNMENT), r.isWebGL2(e) && (A.unpackRowLength = e.getParameter(e.UNPACK_ROW_LENGTH), A.unpackImageHeight = e.getParameter(e.UNPACK_IMAGE_HEIGHT), A.unpackSkipPixels = e.getParameter(e.UNPACK_SKIP_PIXELS), A.unpackSkipRows = e.getParameter(e.UNPACK_SKIP_ROWS), A.unpackSkipImages = e.getParameter(e.UNPACK_SKIP_IMAGES))
                    }

                    function R(e) {
                        e.pixelStorei(e.UNPACK_ALIGNMENT, A.unpackAlignment), r.isWebGL2(e) && (e.pixelStorei(e.UNPACK_ROW_LENGTH, A.unpackRowLength), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, A.unpackImageHeight), e.pixelStorei(e.UNPACK_SKIP_PIXELS, A.unpackSkipPixels), e.pixelStorei(e.UNPACK_SKIP_ROWS, A.unpackSkipRows), e.pixelStorei(e.UNPACK_SKIP_IMAGES, A.unpackSkipImages))
                    }

                    function E(e, t, n, r) {
                        r.minMag && (n.call(e, t, e.TEXTURE_MIN_FILTER, r.minMag), n.call(e, t, e.TEXTURE_MAG_FILTER, r.minMag)), r.min && n.call(e, t, e.TEXTURE_MIN_FILTER, r.min), r.mag && n.call(e, t, e.TEXTURE_MAG_FILTER, r.mag), r.wrap && (n.call(e, t, e.TEXTURE_WRAP_S, r.wrap), n.call(e, t, e.TEXTURE_WRAP_T, r.wrap), (t === e.TEXTURE_3D || o.isSampler(e, t)) && n.call(e, t, e.TEXTURE_WRAP_R, r.wrap)), r.wrapR && n.call(e, t, e.TEXTURE_WRAP_R, r.wrapR), r.wrapS && n.call(e, t, e.TEXTURE_WRAP_S, r.wrapS), r.wrapT && n.call(e, t, e.TEXTURE_WRAP_T, r.wrapT), r.minLod && n.call(e, t, e.TEXTURE_MIN_LOD, r.minLod), r.maxLod && n.call(e, t, e.TEXTURE_MAX_LOD, r.maxLod), r.baseLevel && n.call(e, t, e.TEXTURE_BASE_LEVEL, r.baseLevel), r.maxLevel && n.call(e, t, e.TEXTURE_MAX_LEVEL, r.maxLevel)
                    }

                    function I(e, t, n) {
                        var r = n.target || e.TEXTURE_2D;
                        e.bindTexture(r, t), E(e, r, e.texParameteri, n)
                    }

                    function O(e, t, n) {
                        E(e, t, e.samplerParameteri, n)
                    }

                    function D(e, t) {
                        var n = e.createSampler();
                        return O(e, n, t), n
                    }

                    function S(e, t, n, r, i, o, a) {
                        n = n || s.textureOptions, o = o || e.RGBA, a = a || e.UNSIGNED_BYTE;
                        var l = n.target || e.TEXTURE_2D;
                        if (r = r || n.width, i = i || n.height, e.bindTexture(l, t), y(e, r, i, o)) e.generateMipmap(l);
                        else {
                            var u = b(o) ? e.LINEAR : e.NEAREST;
                            e.texParameteri(l, e.TEXTURE_MIN_FILTER, u), e.texParameteri(l, e.TEXTURE_MAG_FILTER, u), e.texParameteri(l, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(l, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
                        }
                    }

                    function F(e) {
                        return !0 === e.auto || void 0 === e.auto && void 0 === e.level
                    }

                    function N(e, t) {
                        return (t = t || {}).cubeFaceOrder || [e.TEXTURE_CUBE_MAP_POSITIVE_X, e.TEXTURE_CUBE_MAP_NEGATIVE_X, e.TEXTURE_CUBE_MAP_POSITIVE_Y, e.TEXTURE_CUBE_MAP_NEGATIVE_Y, e.TEXTURE_CUBE_MAP_POSITIVE_Z, e.TEXTURE_CUBE_MAP_NEGATIVE_Z]
                    }

                    function k(e, t) {
                        var n = N(e, t).map(function(e, t) {
                            return {
                                face: e,
                                ndx: t
                            }
                        });
                        return n.sort(function(e, t) {
                            return e.face - t.face
                        }), n
                    }

                    function B(e, t, n, r) {
                        var i = (r = r || s.textureOptions).target || e.TEXTURE_2D,
                            o = r.level || 0,
                            a = n.width,
                            l = n.height,
                            c = r.internalFormat || r.format || e.RGBA,
                            h = g(c),
                            f = r.format || h.format,
                            d = r.type || h.type;
                        if (M(e, r), e.bindTexture(i, t), i === e.TEXTURE_CUBE_MAP) {
                            var p, m, _ = n.width,
                                v = n.height;
                            if (_ / 6 === v) p = v, m = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
                            else if (v / 6 === _) p = _, m = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
                            else if (_ / 3 == v / 2) p = _ / 3, m = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1];
                            else {
                                if (_ / 2 != v / 3) throw "can't figure out cube map from element: " + (n.src ? n.src : n.nodeName);
                                p = _ / 2, m = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2]
                            }
                            u ? (u.canvas.width = p, u.canvas.height = p, a = p, l = p, k(e, r).forEach(function(t) {
                                var r = m[2 * t.ndx + 0] * p,
                                    i = m[2 * t.ndx + 1] * p;
                                u.drawImage(n, r, i, p, p, 0, 0, p, p), e.texImage2D(t.face, o, c, f, d, u.canvas)
                            }), u.canvas.width = 1, u.canvas.height = 1) : "undefined" != typeof createImageBitmap && (a = p, l = p, k(e, r).forEach(function(s) {
                                var u = m[2 * s.ndx + 0] * p,
                                    h = m[2 * s.ndx + 1] * p;
                                e.texImage2D(s.face, o, c, p, p, 0, f, d, null), createImageBitmap(n, u, h, p, p, {
                                    premultiplyAlpha: "none",
                                    colorSpaceConversion: "none"
                                }).then(function(n) {
                                    M(e, r), e.bindTexture(i, t), e.texImage2D(s.face, o, c, f, d, n), P(e, r), F(r) && S(e, t, r, a, l, c, d)
                                })
                            }))
                        } else if (i === e.TEXTURE_3D || i === e.TEXTURE_2D_ARRAY) {
                            var y = Math.min(n.width, n.height),
                                b = Math.max(n.width, n.height),
                                w = b / y;
                            if (w % 1 != 0) throw "can not compute 3D dimensions of element";
                            var x = n.width === b ? 1 : 0,
                                T = n.height === b ? 1 : 0;
                            C(e), e.pixelStorei(e.UNPACK_ALIGNMENT, 1), e.pixelStorei(e.UNPACK_ROW_LENGTH, n.width), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), e.texImage3D(i, o, c, y, y, y, 0, f, d, null);
                            for (var A = 0; A < w; ++A) {
                                var E = A * y * x,
                                    O = A * y * T;
                                e.pixelStorei(e.UNPACK_SKIP_PIXELS, E), e.pixelStorei(e.UNPACK_SKIP_ROWS, O), e.texSubImage3D(i, o, 0, 0, A, y, y, 1, f, d, n)
                            }
                            R(e)
                        } else e.texImage2D(i, o, c, f, d, n);
                        P(e, r), F(r) && S(e, t, r, a, l, c, d), I(e, t, r)
                    }

                    function G() {}

                    function L(e, t) {
                        return void 0 !== t || function(e) {
                            if ("undefined" != typeof document) {
                                var t = document.createElement("a");
                                return t.href = e, t.hostname === location.hostname && t.port === location.port && t.protocol === location.protocol
                            }
                            var n = new URL(location.href).origin;
                            return new URL(e, location.href).origin === n
                        }(e) ? t : "anonymous"
                    }

                    function U(e) {
                        return "undefined" != typeof ImageBitmap && e instanceof ImageBitmap || "undefined" != typeof ImageData && e instanceof ImageData || "undefined" != typeof HTMLElement && e instanceof HTMLElement
                    }

                    function X(e, t, n) {
                        return U(e) ? (setTimeout(function() {
                            n(null, e)
                        }), e) : function(e, t, n) {
                            var r;
                            if (n = n || G, t = void 0 !== t ? t : s.crossOrigin, t = L(e, t), "undefined" != typeof Image) {
                                r = new Image, void 0 !== t && (r.crossOrigin = t);
                                var i = function() {
                                        r.removeEventListener("error", a), r.removeEventListener("load", l), r = null
                                    },
                                    a = function() {
                                        var t = "couldn't load image: " + e;
                                        o.error(t), n(t, r), i()
                                    },
                                    l = function() {
                                        n(null, r), i()
                                    };
                                return r.addEventListener("error", a), r.addEventListener("load", l), r.src = e, r
                            }
                            if ("undefined" != typeof ImageBitmap) {
                                var u, c, h = function() {
                                        n(u, c)
                                    },
                                    f = {};
                                t && (f.mode = "cors"), fetch(e, f).then(function(e) {
                                    if (!e.ok) throw e;
                                    return e.blob()
                                }).then(function(e) {
                                    return createImageBitmap(e, {
                                        premultiplyAlpha: "none",
                                        colorSpaceConversion: "none"
                                    })
                                }).then(function(e) {
                                    c = e, setTimeout(h)
                                }).catch(function(e) {
                                    u = e, setTimeout(h)
                                }), r = null
                            }
                            return r
                        }(e, t, n)
                    }

                    function j(e, t, n) {
                        var r = (n = n || s.textureOptions).target || e.TEXTURE_2D;
                        if (e.bindTexture(r, t), !1 !== n.color) {
                            var i = function(e) {
                                return e = e || s.textureColor, l(e) ? e : new Uint8Array([255 * e[0], 255 * e[1], 255 * e[2], 255 * e[3]])
                            }(n.color);
                            if (r === e.TEXTURE_CUBE_MAP)
                                for (var o = 0; o < 6; ++o) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, i);
                            else r === e.TEXTURE_3D || r === e.TEXTURE_2D_ARRAY ? e.texImage3D(r, 0, e.RGBA, 1, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, i) : e.texImage2D(r, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, i)
                        }
                    }

                    function V(e, t, n, r) {
                        return r = r || G, n = n || s.textureOptions, j(e, t, n), X((n = Object.assign({}, n)).src, n.crossOrigin, function(i, o) {
                            i ? r(i, t, o) : (B(e, t, o, n), r(null, t, o))
                        })
                    }

                    function z(e, t, n, r) {
                        r = r || G;
                        var i = n.src;
                        if (6 !== i.length) throw "there must be 6 urls for a cubemap";
                        var o = n.level || 0,
                            a = n.internalFormat || n.format || e.RGBA,
                            s = g(a),
                            l = n.format || s.format,
                            u = n.type || e.UNSIGNED_BYTE,
                            c = n.target || e.TEXTURE_2D;
                        if (c !== e.TEXTURE_CUBE_MAP) throw "target must be TEXTURE_CUBE_MAP";
                        j(e, t, n), n = Object.assign({}, n);
                        var h, f = 6,
                            d = [],
                            p = N(e, n);
                        h = i.map(function(i, s) {
                            return X(i, n.crossOrigin, (m = p[s], function(i, s) {
                                --f, i ? d.push(i) : s.width !== s.height ? d.push("cubemap face img is not a square: " + s.src) : (M(e, n), e.bindTexture(c, t), 5 === f ? N(e).forEach(function(t) {
                                    e.texImage2D(t, o, a, l, u, s)
                                }) : e.texImage2D(m, o, a, l, u, s), P(e, n), F(n) && e.generateMipmap(c)), 0 === f && r(d.length ? d : void 0, t, h)
                            }));
                            var m
                        })
                    }

                    function Y(e, t, n, r) {
                        r = r || G;
                        var i = n.src,
                            o = n.internalFormat || n.format || e.RGBA,
                            a = g(o),
                            s = n.format || a.format,
                            l = n.type || e.UNSIGNED_BYTE,
                            c = n.target || e.TEXTURE_2D_ARRAY;
                        if (c !== e.TEXTURE_3D && c !== e.TEXTURE_2D_ARRAY) throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
                        j(e, t, n), n = Object.assign({}, n);
                        var h, f = i.length,
                            d = [],
                            p = n.level || 0,
                            m = n.width,
                            _ = n.height,
                            v = i.length,
                            y = !0;
                        h = i.map(function(i, a) {
                            return X(i, n.crossOrigin, (g = a, function(i, a) {
                                if (--f, i) d.push(i);
                                else {
                                    if (M(e, n), e.bindTexture(c, t), y) {
                                        y = !1, m = n.width || a.width, _ = n.height || a.height, e.texImage3D(c, p, o, m, _, v, 0, s, l, null);
                                        for (var b = 0; b < v; ++b) e.texSubImage3D(c, p, 0, 0, b, m, _, 1, s, l, a)
                                    } else {
                                        var w = a;
                                        a.width === m && a.height === _ || (w = u.canvas, u.canvas.width = m, u.canvas.height = _, u.drawImage(a, 0, 0, m, _)), e.texSubImage3D(c, p, 0, 0, g, m, _, 1, s, l, w), w === u.canvas && (u.canvas.width = 0, u.canvas.height = 0)
                                    }
                                    P(e, n), F(n) && e.generateMipmap(c)
                                }
                                0 === f && r(d.length ? d : void 0, t, h)
                            }));
                            var g
                        })
                    }

                    function W(e, t, n, o) {
                        var a = (o = o || s.textureOptions).target || e.TEXTURE_2D;
                        e.bindTexture(a, t);
                        var u = o.width,
                            c = o.height,
                            h = o.depth,
                            f = o.level || 0,
                            d = o.internalFormat || o.format || e.RGBA,
                            p = g(d),
                            m = o.format || p.format,
                            v = o.type || w(e, n, p.type);
                        if (l(n)) n instanceof Uint8ClampedArray && (n = new Uint8Array(n.buffer));
                        else {
                            var y = i.getTypedArrayTypeForGLType(v);
                            n = new y(n)
                        }
                        var b, T = _(d, v),
                            A = n.byteLength / T;
                        if (A % 1) throw "length wrong size for format: " + r.glEnumToString(e, m);
                        if (a === e.TEXTURE_3D)
                            if (u || c || h) !u || c && h ? !c || u && h ? (b = x(e, a, u, c, A / h), u = b.width, c = b.height) : (b = x(e, a, u, h, A / c), u = b.width, h = b.height) : (b = x(e, a, c, h, A / u), c = b.width, h = b.height);
                            else {
                                var E = Math.cbrt(A);
                                if (E % 1 != 0) throw "can't guess cube size of array of numElements: " + A;
                                u = E, c = E, h = E
                            } else b = x(e, a, u, c, A), u = b.width, c = b.height;
                        if (C(e), e.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment || 1), M(e, o), a === e.TEXTURE_CUBE_MAP) {
                            var I = A / 6 * (T / n.BYTES_PER_ELEMENT);
                            k(e, o).forEach(function(t) {
                                var r = I * t.ndx,
                                    i = n.subarray(r, r + I);
                                e.texImage2D(t.face, f, d, u, c, 0, m, v, i)
                            })
                        } else a === e.TEXTURE_3D ? e.texImage3D(a, f, d, u, c, h, 0, m, v, n) : e.texImage2D(a, f, d, u, c, 0, m, v, n);
                        return P(e, o), R(e), {
                            width: u,
                            height: c,
                            depth: h,
                            type: v
                        }
                    }

                    function H(e, t, n) {
                        var r = n.target || e.TEXTURE_2D;
                        e.bindTexture(r, t);
                        var i = n.level || 0,
                            o = n.internalFormat || n.format || e.RGBA,
                            a = g(o),
                            s = n.format || a.format,
                            l = n.type || a.type;
                        if (M(e, n), r === e.TEXTURE_CUBE_MAP)
                            for (var u = 0; u < 6; ++u) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + u, i, o, n.width, n.height, 0, s, l, null);
                        else r === e.TEXTURE_3D ? e.texImage3D(r, i, o, n.width, n.height, n.depth, 0, s, l, null) : e.texImage2D(r, i, o, n.width, n.height, 0, s, l, null);
                        P(e, n)
                    }

                    function q(e, t, n) {
                        n = n || G, t = t || s.textureOptions;
                        var r = e.createTexture(),
                            i = t.target || e.TEXTURE_2D,
                            o = t.width || 1,
                            a = t.height || 1,
                            u = t.internalFormat || e.RGBA,
                            c = g(u),
                            h = t.type || c.type;
                        e.bindTexture(i, r), i === e.TEXTURE_CUBE_MAP && (e.texParameteri(i, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(i, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE));
                        var f = t.src;
                        if (f)
                            if ("function" == typeof f && (f = f(e, t)), "string" == typeof f) V(e, r, t, n);
                            else if (l(f) || Array.isArray(f) && ("number" == typeof f[0] || Array.isArray(f[0]) || l(f[0]))) {
                            var d = W(e, r, f, t);
                            o = d.width, a = d.height, h = d.type
                        } else if (Array.isArray(f) && ("string" == typeof f[0] || U(f[0]))) i === e.TEXTURE_CUBE_MAP ? z(e, r, t, n) : Y(e, r, t, n);
                        else {
                            if (!U(f)) throw "unsupported src type";
                            B(e, r, f, t), o = f.width, a = f.height
                        } else H(e, r, t);
                        return F(t) && S(e, r, t, o, a, u, h), I(e, r, t), r
                    }
                },
                "./src/twgl-full.js":
                /*!**************************!*\
                  !*** ./src/twgl-full.js ***!
                  \**************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0;
                    var r = {
                        m4: !0,
                        v3: !0,
                        primitives: !0
                    };
                    t.primitives = t.v3 = t.m4 = void 0;
                    var i = l(n( /*! ./m4.js */ "./src/m4.js"));
                    t.m4 = i;
                    var o = l(n( /*! ./v3.js */ "./src/v3.js"));
                    t.v3 = o;
                    var a = l(n( /*! ./primitives.js */ "./src/primitives.js"));
                    t.primitives = a;
                    var s = n( /*! ./twgl.js */ "./src/twgl.js");

                    function l(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                                }
                        return t.default = e, t
                    }
                    Object.keys(s).forEach(function(e) {
                        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || (t[e] = s[e]))
                    })
                },
                "./src/twgl.js":
                /*!*********************!*\
                  !*** ./src/twgl.js ***!
                  \*********************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0;
                    var r = {
                        addExtensionsToContext: !0,
                        getContext: !0,
                        getWebGLContext: !0,
                        resizeCanvasToDisplaySize: !0,
                        setDefaults: !0
                    };
                    t.addExtensionsToContext = v, t.getContext = function(e, t) {
                        return function(e, t) {
                            for (var n = ["webgl2", "webgl", "experimental-webgl"], r = null, i = 0; i < n.length; ++i)
                                if (r = e.getContext(n[i], t)) {
                                    p.addExtensionsToContext && v(r);
                                    break
                                }
                            return r
                        }(e, t)
                    }, t.getWebGLContext = function(e, t) {
                        return function(e, t) {
                            for (var n = ["webgl", "experimental-webgl"], r = null, i = 0; i < n.length; ++i)
                                if (r = e.getContext(n[i], t)) {
                                    p.addExtensionsToContext && v(r);
                                    break
                                }
                            return r
                        }(e, t)
                    }, t.resizeCanvasToDisplaySize = function(e, t) {
                        t = t || 1, t = Math.max(0, t);
                        var n = e.clientWidth * t | 0,
                            r = e.clientHeight * t | 0;
                        if (e.width !== n || e.height !== r) return e.width = n, e.height = r, !0;
                        return !1
                    }, t.setDefaults = function(e) {
                        a.copyExistingProperties(e, p), i.setAttributeDefaults_(e), o.setTextureDefaults_(e)
                    };
                    var i = d(n( /*! ./attributes.js */ "./src/attributes.js"));
                    Object.keys(i).forEach(function(e) {
                        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || (t[e] = i[e]))
                    });
                    var o = d(n( /*! ./textures.js */ "./src/textures.js"));
                    Object.keys(o).forEach(function(e) {
                        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || (t[e] = o[e]))
                    });
                    var a = d(n( /*! ./helper.js */ "./src/helper.js")),
                        s = d(n( /*! ./utils.js */ "./src/utils.js"));
                    Object.keys(s).forEach(function(e) {
                        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || (t[e] = s[e]))
                    });
                    var l = n( /*! ./draw.js */ "./src/draw.js");
                    Object.keys(l).forEach(function(e) {
                        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || (t[e] = l[e]))
                    });
                    var u = n( /*! ./framebuffers.js */ "./src/framebuffers.js");
                    Object.keys(u).forEach(function(e) {
                        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || (t[e] = u[e]))
                    });
                    var c = n( /*! ./programs.js */ "./src/programs.js");
                    Object.keys(c).forEach(function(e) {
                        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || (t[e] = c[e]))
                    });
                    var h = n( /*! ./typedarrays.js */ "./src/typedarrays.js");
                    Object.keys(h).forEach(function(e) {
                        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || (t[e] = h[e]))
                    });
                    var f = n( /*! ./vertex-arrays.js */ "./src/vertex-arrays.js");

                    function d(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                                }
                        return t.default = e, t
                    }
                    Object.keys(f).forEach(function(e) {
                        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || (t[e] = f[e]))
                    });
                    var p = {
                        addExtensionsToContext: !0
                    };
                    var m = /^(.*?)_/;

                    function _(e, t) {
                        s.glEnumToString(e, 0);
                        var n = e.getExtension(t);
                        if (n) {
                            var r = {},
                                i = m.exec(t)[1],
                                o = "_" + i;
                            for (var l in n) {
                                var u = n[l],
                                    c = "function" == typeof u,
                                    h = c ? i : o,
                                    f = l;
                                l.endsWith(h) && (f = l.substring(0, l.length - h.length)), void 0 !== e[f] ? c || e[f] === u || a.warn(f, e[f], u, l) : c ? e[f] = function(e) {
                                    return function() {
                                        return e.apply(n, arguments)
                                    }
                                }(u) : (e[f] = u, r[f] = u)
                            }
                            r.constructor = {
                                name: n.constructor.name
                            }, s.glEnumToString(r, 0)
                        }
                        return n
                    }
                    var g = ["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_float", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_disjoint_timer_query_webgl2", "EXT_frag_depth", "EXT_sRGB", "EXT_shader_texture_lod", "EXT_texture_filter_anisotropic", "OES_element_index_uint", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_atc", "WEBGL_compressed_texture_etc1", "WEBGL_compressed_texture_pvrtc", "WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_depth_texture", "WEBGL_draw_buffers"];

                    function v(e) {
                        for (var t = 0; t < g.length; ++t) _(e, g[t])
                    }
                },
                "./src/typedarrays.js":
                /*!****************************!*\
                  !*** ./src/typedarrays.js ***!
                  \****************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.getGLTypeForTypedArray = function(e) {
                        if (e instanceof Int8Array) return r;
                        if (e instanceof Uint8Array) return i;
                        if (e instanceof Uint8ClampedArray) return i;
                        if (e instanceof Int16Array) return o;
                        if (e instanceof Uint16Array) return a;
                        if (e instanceof Int32Array) return s;
                        if (e instanceof Uint32Array) return l;
                        if (e instanceof Float32Array) return u;
                        throw "unsupported typed array type"
                    }, t.getGLTypeForTypedArrayType = function(e) {
                        if (e === Int8Array) return r;
                        if (e === Uint8Array) return i;
                        if (e === Uint8ClampedArray) return i;
                        if (e === Int16Array) return o;
                        if (e === Uint16Array) return a;
                        if (e === Int32Array) return s;
                        if (e === Uint32Array) return l;
                        if (e === Float32Array) return u;
                        throw "unsupported typed array type"
                    }, t.getTypedArrayTypeForGLType = function(e) {
                        var t = c[e];
                        if (!t) throw "unknown gl type";
                        return t
                    }, t.isArrayBuffer = void 0;
                    var r = 5120,
                        i = 5121,
                        o = 5122,
                        a = 5123,
                        s = 5124,
                        l = 5125,
                        u = 5126,
                        c = {},
                        h = c;
                    h[r] = Int8Array, h[i] = Uint8Array, h[o] = Int16Array, h[a] = Uint16Array, h[s] = Int32Array, h[l] = Uint32Array, h[u] = Float32Array, h[32819] = Uint16Array, h[32820] = Uint16Array, h[33635] = Uint16Array, h[5131] = Uint16Array, h[33640] = Uint32Array, h[35899] = Uint32Array, h[35902] = Uint32Array, h[36269] = Uint32Array, h[34042] = Uint32Array;
                    var f = "undefined" != typeof SharedArrayBuffer ? function(e) {
                        return e && e.buffer && (e.buffer instanceof ArrayBuffer || e.buffer instanceof SharedArrayBuffer)
                    } : function(e) {
                        return e && e.buffer && e.buffer instanceof ArrayBuffer
                    };
                    t.isArrayBuffer = f
                },
                "./src/utils.js":
                /*!**********************!*\
                  !*** ./src/utils.js ***!
                  \**********************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.isWebGL1 = function(e) {
                        return !e.texStorage2D
                    }, t.isWebGL2 = function(e) {
                        return !!e.texStorage2D
                    }, t.glEnumToString = void 0;
                    var r = function() {
                        var e = {},
                            t = {};
                        return function(n, r) {
                            return function(n) {
                                var r = n.constructor.name;
                                if (!e[r]) {
                                    for (var i in n)
                                        if ("number" == typeof n[i]) {
                                            var o = t[n[i]];
                                            t[n[i]] = o ? "".concat(o, " | ").concat(i) : i
                                        }
                                    e[r] = !0
                                }
                            }(n), t[r] || "0x" + r.toString(16)
                        }
                    }();
                    t.glEnumToString = r
                },
                "./src/v3.js":
                /*!*******************!*\
                  !*** ./src/v3.js ***!
                  \*******************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.add = function(e, t, n) {
                        return (n = n || new r(3))[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n
                    }, t.copy = function(e, t) {
                        return (t = t || new r(3))[0] = e[0], t[1] = e[1], t[2] = e[2], t
                    }, t.create = function(e, t, n) {
                        var i = new r(3);
                        e && (i[0] = e);
                        t && (i[1] = t);
                        n && (i[2] = n);
                        return i
                    }, t.cross = function(e, t, n) {
                        n = n || new r(3);
                        var i = e[2] * t[0] - e[0] * t[2],
                            o = e[0] * t[1] - e[1] * t[0];
                        return n[0] = e[1] * t[2] - e[2] * t[1], n[1] = i, n[2] = o, n
                    }, t.distance = function(e, t) {
                        var n = e[0] - t[0],
                            r = e[1] - t[1],
                            i = e[2] - t[2];
                        return Math.sqrt(n * n + r * r + i * i)
                    }, t.distanceSq = function(e, t) {
                        var n = e[0] - t[0],
                            r = e[1] - t[1],
                            i = e[2] - t[2];
                        return n * n + r * r + i * i
                    }, t.divide = function(e, t, n) {
                        return (n = n || new r(3))[0] = e[0] / t[0], n[1] = e[1] / t[1], n[2] = e[2] / t[2], n
                    }, t.divScalar = function(e, t, n) {
                        return (n = n || new r(3))[0] = e[0] / t, n[1] = e[1] / t, n[2] = e[2] / t, n
                    }, t.dot = function(e, t) {
                        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
                    }, t.lerp = function(e, t, n, i) {
                        return (i = i || new r(3))[0] = e[0] + n * (t[0] - e[0]), i[1] = e[1] + n * (t[1] - e[1]), i[2] = e[2] + n * (t[2] - e[2]), i
                    }, t.lerpV = function(e, t, n, i) {
                        return (i = i || new r(3))[0] = e[0] + n[0] * (t[0] - e[0]), i[1] = e[1] + n[1] * (t[1] - e[1]), i[2] = e[2] + n[2] * (t[2] - e[2]), i
                    }, t.length = function(e) {
                        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2])
                    }, t.lengthSq = function(e) {
                        return e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
                    }, t.max = function(e, t, n) {
                        return (n = n || new r(3))[0] = Math.max(e[0], t[0]), n[1] = Math.max(e[1], t[1]), n[2] = Math.max(e[2], t[2]), n
                    }, t.min = function(e, t, n) {
                        return (n = n || new r(3))[0] = Math.min(e[0], t[0]), n[1] = Math.min(e[1], t[1]), n[2] = Math.min(e[2], t[2]), n
                    }, t.mulScalar = function(e, t, n) {
                        return (n = n || new r(3))[0] = e[0] * t, n[1] = e[1] * t, n[2] = e[2] * t, n
                    }, t.multiply = function(e, t, n) {
                        return (n = n || new r(3))[0] = e[0] * t[0], n[1] = e[1] * t[1], n[2] = e[2] * t[2], n
                    }, t.negate = function(e, t) {
                        return (t = t || new r(3))[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t
                    }, t.normalize = function(e, t) {
                        t = t || new r(3);
                        var n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
                            i = Math.sqrt(n);
                        i > 1e-5 ? (t[0] = e[0] / i, t[1] = e[1] / i, t[2] = e[2] / i) : (t[0] = 0, t[1] = 0, t[2] = 0);
                        return t
                    }, t.setDefaultType = function(e) {
                        var t = r;
                        return r = e, t
                    }, t.subtract = function(e, t, n) {
                        return (n = n || new r(3))[0] = e[0] - t[0], n[1] = e[1] - t[1], n[2] = e[2] - t[2], n
                    };
                    var r = Float32Array
                },
                "./src/vertex-arrays.js":
                /*!******************************!*\
                  !*** ./src/vertex-arrays.js ***!
                  \******************************/
                /*! no static exports found */
                    function(e, t, n) {
                    "use strict";
                    t.__esModule = !0, t.createVertexArrayInfo = function(e, t, n) {
                        var i = e.createVertexArray();
                        e.bindVertexArray(i), t.length || (t = [t]);
                        return t.forEach(function(t) {
                            r.setBuffersAndAttributes(e, t, n)
                        }), e.bindVertexArray(null), {
                            numElements: n.numElements,
                            elementType: n.elementType,
                            vertexArrayObject: i
                        }
                    }, t.createVAOAndSetAttributes = i, t.createVAOFromBufferInfo = function(e, t, n) {
                        return i(e, t.attribSetters || t, n.attribs, n.indices)
                    };
                    var r = function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                                }
                        return t.default = e, t
                    }(n( /*! ./programs.js */ "./src/programs.js"));

                    function i(e, t, n, i) {
                        var o = e.createVertexArray();
                        return e.bindVertexArray(o), r.setAttributes(t, n), i && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, i), e.bindVertexArray(null), o
                    }
                }
            })
        }, e.exports = r()
    },
    "./node_modules/webpack/buildin/global.js": function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    "./node_modules/webpack/buildin/harmony-module.js": function(e, t) {
        e.exports = function(e) {
            if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return t.l
                    }
                }), Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                        return t.i
                    }
                }), Object.defineProperty(t, "exports", {
                    enumerable: !0
                }), t.webpackPolyfill = 1
            }
            return t
        }
    },
    "./src/app.js": function(e, t, n) {
        "use strict";
        n.r(t);
        n("./src/js/raf.js"), n("./src/styles/styles.scss");
        var r = n("./src/glsl/vert.glsl"),
            i = n.n(r),
            o = n("./src/glsl/frag.glsl"),
            a = n.n(o),
            s = n("./src/glsl/post.glsl"),
            l = n.n(s),
            u = n("./node_modules/clubber/index.js"),
            c = n.n(u);
        ! function(e) {
            var t = [],
                n = {
                    _version: "3.6.0",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function(e, t) {
                        var n = this;
                        setTimeout(function() {
                            t(n[e])
                        }, 0)
                    },
                    addTest: function(e, n, r) {
                        t.push({
                            name: e,
                            fn: n,
                            options: r
                        })
                    },
                    addAsyncTest: function(e) {
                        t.push({
                            name: null,
                            fn: e
                        })
                    }
                },
                r = function() {};
            r.prototype = n, r = new r;
            var i = [];
            /*!
                {
                  "name": "ES6 Promises",
                  "property": "promises",
                  "caniuse": "promises",
                  "polyfills": ["es6promises"],
                  "authors": ["Krister Kari", "Jake Archibald"],
                  "tags": ["es6"],
                  "notes": [{
                    "name": "The ES6 promises spec",
                    "href": "https://github.com/domenic/promises-unwrapping"
                  },{
                    "name": "Chromium dashboard - ES6 Promises",
                    "href": "https://www.chromestatus.com/features/5681726336532480"
                  },{
                    "name": "JavaScript Promises: There and back again - HTML5 Rocks",
                    "href": "http://www.html5rocks.com/en/tutorials/es6/promises/"
                  }]
                }
                !*/
            r.addTest("promises", function() {
                    return "Promise" in e && "resolve" in e.Promise && "reject" in e.Promise && "all" in e.Promise && "race" in e.Promise && (new e.Promise(function(e) {
                        t = e
                    }), "function" == typeof t);
                    var t
                }),
                /*!
                    {
                      "name": "Typed arrays",
                      "property": "typedarrays",
                      "caniuse": "typedarrays",
                      "tags": ["js"],
                      "authors": ["Stanley Stuart (@fivetanley)"],
                      "notes": [{
                        "name": "MDN documentation",
                        "href": "https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays"
                      },{
                        "name": "Kronos spec",
                        "href": "https://www.khronos.org/registry/typedarray/specs/latest/"
                      }],
                      "polyfills": ["joshuabell-polyfill"]
                    }
                    !*/
                r.addTest("typedarrays", "ArrayBuffer" in e),
                /*!
                    {
                      "name": "Web Audio API",
                      "property": "webaudio",
                      "caniuse": "audio-api",
                      "polyfills": ["xaudiojs", "dynamicaudiojs", "audiolibjs"],
                      "tags": ["audio", "media"],
                      "builderAliases": ["audio_webaudio_api"],
                      "authors": ["Addy Osmani"],
                      "notes": [{
                        "name": "W3 Specification",
                        "href": "https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html"
                      }]
                    }
                    !*/
                r.addTest("webaudio", function() {
                    var t = "webkitAudioContext" in e,
                        n = "AudioContext" in e;
                    return r._config.usePrefixes && t || n
                }),
                function() {
                    var e, n, o, a, s, l;
                    for (var u in t)
                        if (t.hasOwnProperty(u)) {
                            if (e = [], (n = t[u]).name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                                for (o = 0; o < n.options.aliases.length; o++) e.push(n.options.aliases[o].toLowerCase());
                            for (a = "function" == typeof n.fn ? n.fn() : n.fn, s = 0; s < e.length; s++) 1 === (l = e[s].split(".")).length ? r[l[0]] = a : (!r[l[0]] || r[l[0]] instanceof Boolean || (r[l[0]] = new Boolean(r[l[0]])), r[l[0]][l[1]] = a), i.push((a ? "" : "no-") + l.join("-"))
                        }
                }(), delete n.addTest, delete n.addAsyncTest;
            for (var o = 0; o < r._q.length; o++) r._q[o]()
        }(window);
        const h = () => {
                try {
                    return new DOMException("", "AbortError")
                } catch (e) {
                    return e.code = 20, e.name = "AbortError", e
                }
            },
            f = new WeakMap,
            d = new WeakMap,
            p = new WeakMap,
            m = new WeakMap,
            _ = new WeakMap,
            g = new WeakSet,
            v = new WeakMap,
            y = new WeakMap,
            b = new WeakMap,
            w = () => {
                try {
                    return new DOMException("", "InvalidStateError")
                } catch (e) {
                    return e.code = 11, e.name = "InvalidStateError", e
                }
            },
            x = e => {
                const t = _.get(e);
                if (void 0 === t) throw w();
                return t
            },
            T = {
                construct: () => T
            },
            A = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
            M = (e, t) => {
                const n = [];
                let r = e.replace(/^[\s]+/, ""),
                    i = r.match(A);
                for (; null !== i;) {
                    const e = i[1].slice(1, -1),
                        o = i[0].replace(/([\s]+)?;?$/, "").replace(e, new URL(e, t).toString());
                    n.push(o), i = (r = r.slice(i[0].length).replace(/^[\s]+/, "")).match(A)
                }
                return [n.join(";"), r]
            },
            P = e => {
                if (void 0 !== e && !Array.isArray(e)) throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")
            },
            C = e => {
                if (!(e => {
                        try {
                            new new Proxy(e, T)
                        } catch (e) {
                            return !1
                        }
                        return !0
                    })(e)) throw new TypeError("The given value for processorCtor should be a constructor.");
                if (null === e.prototype || "object" != typeof e.prototype) throw new TypeError("The given value for processorCtor should have a prototype.");
                if ("function" != typeof e.prototype.process) throw new TypeError("The given value for processorCtor should have a callable process() function.")
            },
            R = new WeakMap,
            E = new WeakMap,
            I = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                fftSize: 2048,
                maxDecibels: -30,
                minDecibels: -100,
                smoothingTimeConstant: .8
            },
            O = e => {
                const t = f.get(e);
                if (void 0 === t) throw new Error("The associated nativeAudioNode is missing.");
                return t
            },
            D = (e, t) => e.context === t;

        function S(e) {
            const t = d.get(e);
            if (void 0 === t) throw new Error("Missing the audio graph of the given context.");
            return t
        }
        const F = e => {
                const t = S(e.context).nodes.get(e);
                if (void 0 === t) throw new Error("Missing the connections of the given AudioNode in the audio graph.");
                return t
            },
            N = e => {
                const t = F(e);
                if (null === t.renderer) throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
                return t.renderer
            },
            k = (e, t, n) => {
                const r = F(e);
                return Promise.all(r.inputs.map((e, r) => Array.from(e.values()).map(([e, i]) => N(e).render(e, t).then(e => e.connect(n, i, r)))).reduce((e, t) => [...e, ...t], []))
            },
            B = new Map;

        function G(e, t) {
            const n = b.get(e);
            if (void 0 !== n) return n;
            const r = B.get(e);
            if (void 0 !== r) return r;
            const i = t();
            return i instanceof Promise ? (B.set(e, i), i.then(t => (B.delete(e), b.set(e, t), t))) : (b.set(e, i), i)
        }
        const L = e => {
                const t = new Float32Array(2);
                try {
                    e.copyToChannel(t, 0, e.length - 1)
                } catch (e) {
                    return !1
                }
                return !0
            },
            U = () => {
                try {
                    return new DOMException("", "IndexSizeError")
                } catch (e) {
                    return e.code = 1, e.name = "IndexSizeError", e
                }
            },
            X = e => {
                e.copyFromChannel = ((t, n, r = 0) => {
                    if (n >= e.numberOfChannels || r >= e.length) throw U();
                    const i = e.getChannelData(n),
                        o = i.length,
                        a = t.length;
                    for (let e = 0; e + r < o && e < a; e += 1) t[e] = i[e + r]
                }), e.copyToChannel = ((t, n, r = 0) => {
                    if (n >= e.numberOfChannels || r >= e.length) throw U();
                    const i = e.getChannelData(n),
                        o = i.length,
                        a = t.length;
                    for (let e = 0; e + r < o && e < a; e += 1) i[e + r] = t[e]
                })
            },
            j = e => {
                e.copyFromChannel = (t => (n, r, i = 0) => {
                    if (r >= e.numberOfChannels || i >= e.length) throw U();
                    return i < e.length && e.length - i < n.length ? t.call(e, n.subarray(0, e.length - i), r, i) : t.call(e, n, r, i)
                })(e.copyFromChannel), e.copyToChannel = (t => (n, r, i = 0) => {
                    if (r >= e.numberOfChannels || i >= e.length) throw U();
                    return i < e.length && e.length - i < n.length ? t.call(e, n.subarray(0, e.length - i), r, i) : t.call(e, n, r, i)
                })(e.copyToChannel)
            },
            V = e => {
                e.getChannelData = (t => n => {
                    try {
                        return t.call(e, n)
                    } catch (e) {
                        if (12 === e.code) throw U();
                        throw e
                    }
                })(e.getChannelData)
            },
            z = {
                numberOfChannels: 1
            },
            Y = (e, t) => "function" == typeof t ? n => {
                const r = {
                    value: e
                };
                return Object.defineProperties(n, {
                    currentTarget: r,
                    target: r
                }), t.call(e, n)
            } : t,
            W = {
                buffer: null,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            },
            H = e => {
                const t = p.get(e);
                if (void 0 === t) throw new Error("The associated nativeAudioParam is missing.");
                return t
            };

        function q(e, t) {
            const n = S(e).params.get(t);
            if (void 0 === n) throw new Error("Missing the connections of the given AudioParam in the audio graph.");
            return n
        }
        const Q = (e, t, n, r) => {
                const i = q(e, t);
                return Promise.all(Array.from(i.inputs).map(([e, t]) => {
                    return N(e).render(e, n).then(e => e.connect(r, t))
                }))
            },
            K = (e, t, n, r = H(n)) => Q(e, n, t, r);
        const Z = (e, t, n, r) => {
                return function(e, t) {
                    const n = q(e, t);
                    if (null === n.renderer) throw new Error("Missing the renderer of the given AudioParam in the audio graph.");
                    return n.renderer
                }(e, n).replay(r), Q(e, n, t, r)
            },
            $ = e => void 0 === e || "number" == typeof e || "string" == typeof e && ("balanced" === e || "interactive" === e || "playback" === e);
        class J {
            constructor(e) {
                this._nativeEventTarget = e, this._listeners = new WeakMap
            }
            addEventListener(e, t, n) {
                let r = this._listeners.get(t);
                return void 0 === r && (r = Y(this, t), "function" == typeof t && this._listeners.set(t, r)), this._nativeEventTarget.addEventListener(e, r, n)
            }
            dispatchEvent(e) {
                return this._nativeEventTarget.dispatchEvent(e)
            }
            removeEventListener(e, t, n) {
                const r = this._listeners.get(t);
                return this._nativeEventTarget.removeEventListener(e, void 0 === r ? null : r, n)
            }
        }
        const ee = e => void 0 !== e.context,
            te = e => new Promise(t => {
                const n = e.createScriptProcessor(256, 1, 1),
                    r = e.createGain(),
                    i = e.createBuffer(1, 2, 44100),
                    o = i.getChannelData(0);
                o[0] = 1, o[1] = 1;
                const a = e.createBufferSource();
                a.buffer = i, a.loop = !0, a.connect(n), n.connect(e.destination), a.connect(r), a.disconnect(r), n.onaudioprocess = (r => {
                    const i = r.inputBuffer.getChannelData(0);
                    Array.prototype.some.call(i, e => 1 === e) ? t(!0) : t(!1), a.stop(), n.onaudioprocess = null, a.disconnect(n), n.disconnect(e.destination)
                }), a.start()
            }),
            ne = e => {
                const t = new Map;
                e.connect = (n => (r, i = 0, o = 0) => (t.set(r, {
                    input: o,
                    output: i
                }), r instanceof AudioNode ? n.call(e, r, i, o) : n.call(e, r, i)))(e.connect), e.disconnect = (n => (r, i, o) => {
                    n.apply(e), void 0 === r ? t.clear() : t.has(r) && (t.delete(r), t.forEach(({
                        input: t,
                        output: n
                    }, r) => {
                        e.connect(r, t, n)
                    }))
                })(e.disconnect)
            },
            re = (e, t, n, r) => {
                const {
                    inputs: i
                } = F(t), o = i.length;
                for (let t = 0; t < o; t += 1)
                    if (void 0 === r || r === t) {
                        const r = i[t];
                        for (const t of r.values()) t[0] !== e || void 0 !== n && t[1] !== n || r.delete(t)
                    }
            },
            ie = (e, t, n) => {
                const r = q(e.context, t);
                for (const t of r.inputs) t[0] !== e || void 0 !== n && t[1] !== n || r.inputs.delete(t)
            },
            oe = (e, t, n, r) => {
                ((e, t, n, r) => {
                    const i = F(e);
                    for (const e of i.outputs.values()) e[0] !== t || void 0 !== n && e[1] !== n || void 0 !== r && e[2] !== r || i.outputs.delete(e)
                })(e, t, n, r), ee(t) ? re(e, t, n, r) : ie(e, t, n)
            };
        class ae {
            constructor(e) {
                this._map = new Map(e)
            }
            get size() {
                return this._map.size
            }
            entries() {
                return this._map.entries()
            }
            forEach(e, t = null) {
                return this._map.forEach((n, r) => e.call(t, n, r, this))
            }
            get(e) {
                return this._map.get(e)
            }
            has(e) {
                return this._map.has(e)
            }
            keys() {
                return this._map.keys()
            }
            values() {
                return this._map.values()
            }
        }
        const se = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: 1,
                numberOfOutputs: 1,
                outputChannelCount: void 0,
                parameterData: {},
                processorOptions: null
            },
            le = e => {
                const t = [];
                for (let n = 0; n < e; n += 1) t.push(1);
                return t
            };

        function ue(e, t, n, r, i) {
            if ("function" == typeof e.copyFromChannel) 0 === t[n].byteLength && (t[n] = new Float32Array(128)), e.copyFromChannel(t[n], r, i);
            else {
                const o = e.getChannelData(r);
                if (0 === t[n].byteLength) t[n] = o.slice(i, i + 128);
                else {
                    const e = new Float32Array(o.buffer, i * Float32Array.BYTES_PER_ELEMENT, 128);
                    t[n].set(e)
                }
            }
        }
        const ce = (e, t, n, r, i) => {
                "function" == typeof e.copyToChannel ? 0 !== t[n].byteLength && e.copyToChannel(t[n], r, i) : 0 !== t[n].byteLength && e.getChannelData(r).set(t[n], i)
            },
            he = (e, t) => {
                const n = [];
                for (let r = 0; r < e; r += 1) {
                    const e = [],
                        i = "number" == typeof t ? t : t[r];
                    for (let t = 0; t < i; t += 1) e.push(new Float32Array(128));
                    n.push(e)
                }
                return n
            },
            fe = async(e, t, n, r, i) => {
                const {
                    length: o
                } = t, a = r.channelCount * r.numberOfInputs, s = r.outputChannelCount.reduce((e, t) => e + t, 0), l = 0 === s ? null : n.createBuffer(s, o, t.sampleRate);
                if (void 0 === i) throw new Error;
                const u = F(e),
                    c = await ((e, t) => {
                        const n = y.get(e);
                        if (void 0 === n) throw new Error("Missing the processor map for the given OfflineAudioContext.");
                        const r = O(t),
                            i = n.get(r);
                        if (void 0 === i) throw new Error("Missing the promise for the given AudioWorkletNode.");
                        return i
                    })(n, e),
                    h = he(r.numberOfInputs, r.channelCount),
                    f = he(r.numberOfOutputs, r.outputChannelCount),
                    d = Array.from(e.parameters.keys()).reduce((e, t) => ({...e, [t]: new Float32Array(128)
                    }), {});
                for (let n = 0; n < o; n += 128) {
                    for (let e = 0; e < r.numberOfInputs; e += 1)
                        for (let i = 0; i < r.channelCount; i += 1) ue(t, h[e], i, i, n);
                    void 0 !== i.parameterDescriptors && i.parameterDescriptors.forEach(({
                        name: e
                    }, r) => {
                        ue(t, d, e, a + r, n)
                    });
                    for (let e = 0; e < r.numberOfInputs; e += 1)
                        for (let t = 0; t < r.outputChannelCount[e]; t += 1) 0 === f[e][t].byteLength && (f[e][t] = new Float32Array(128));
                    try {
                        const t = h.map((e, t) => 0 === u.inputs[t].size ? [new Float32Array(0)] : e),
                            i = c.process(t, f, d);
                        if (null !== l)
                            for (let e = 0, t = 0; e < r.numberOfOutputs; e += 1) {
                                for (let i = 0; i < r.outputChannelCount[e]; i += 1) ce(l, f[e], i, t + i, n);
                                t += r.outputChannelCount[e]
                            }
                        if (!i) break
                    } catch (t) {
                        e.dispatchEvent(new ErrorEvent("processorerror"));
                        break
                    }
                }
                return l
            },
            de = {
                Q: 1,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                detune: 0,
                frequency: 350,
                gain: 0,
                type: "lowpass"
            },
            pe = {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: 6
            },
            me = {
                channelCount: 6,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                numberOfOutputs: 6
            },
            _e = e => void 0 !== e.context,
            ge = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                offset: 1
            },
            ve = {
                buffer: null,
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                disableNormalization: !1
            },
            ye = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                delayTime: 0,
                maxDelayTime: 1
            },
            be = (e, t, n) => {
                const r = t[n];
                if (void 0 === r) throw e();
                return r
            },
            we = {
                attack: .003,
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                knee: 30,
                ratio: 12,
                release: .25,
                threshold: -24
            },
            xe = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                gain: 1
            },
            Te = () => {
                try {
                    return new DOMException("", "InvalidAccessError")
                } catch (e) {
                    return e.code = 15, e.name = "InvalidAccessError", e
                }
            },
            Ae = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers"
            },
            Me = (e, t, n, r, i, o, a, s, l, u, c) => {
                const h = u.length;
                let f = s;
                for (let s = 0; s < h; s += 1) {
                    let h = n[0] * u[s];
                    for (let t = 1; t < i; t += 1) {
                        const r = f - t & l - 1;
                        h += n[t] * o[r], h -= e[t] * a[r]
                    }
                    for (let e = i; e < r; e += 1) h += n[e] * o[f - e & l - 1];
                    for (let n = i; n < t; n += 1) h -= e[n] * a[f - n & l - 1];
                    o[f] = u[s], a[f] = h, f = f + 1 & l - 1, c[s] = h
                }
                return f
            },
            Pe = e => {
                const t = _.get(e);
                if (void 0 === t) throw w();
                return t
            },
            Ce = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers"
            },
            Re = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers"
            },
            Ee = e => {
                const t = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);
                try {
                    const n = e.decodeAudioData(t.buffer, () => {});
                    return void 0 !== n && (n.catch(() => {}), !0)
                } catch (e) {}
                return !1
            },
            Ie = {
                numberOfChannels: 1
            },
            Oe = (e, t, n) => {
                const r = t[n];
                void 0 !== r && r !== e[n] && (e[n] = r)
            },
            De = (e, t) => {
                Oe(e, t, "channelCount"), Oe(e, t, "channelCountMode"), Oe(e, t, "channelInterpretation")
            },
            Se = e => "function" == typeof e.getFloatTimeDomainData,
            Fe = (e, t, n) => {
                const r = t[n];
                void 0 !== r && r !== e[n].value && (e[n].value = r)
            },
            Ne = e => {
                e.start = (t => (n = 0, r = 0, i) => {
                    if ("number" == typeof i && i < 0 || r < 0 || n < 0) throw new RangeError("The parameters can't be negative.");
                    t.call(e, n, r, i)
                })(e.start)
            },
            ke = e => {
                e.stop = (t => (n = 0) => {
                    if (n < 0) throw new RangeError("The parameter can't be negative.");
                    t.call(e, n)
                })(e.stop)
            },
            Be = (e, t) => null === e ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(e * t))))),
            Ge = async(e, t) => {
                return new e(await (e => new Promise((t, n) => {
                    const {
                        port1: r,
                        port2: i
                    } = new MessageChannel;
                    r.onmessage = (({
                        data: e
                    }) => {
                        r.close(), i.close(), t(e)
                    }), r.onmessageerror = (({
                        data: e
                    }) => {
                        r.close(), i.close(), n(e)
                    }), i.postMessage(e)
                }))(t))
            },
            Le = (e, t) => (e.connect = ((e, n = 0, r = 0) => e instanceof AudioNode ? (t.connect.call(t, e, n, r), e) : t.connect.call(t, e, n)), e.disconnect = function() {
                t.disconnect.apply(t, arguments)
            }, e);

        function Ue(e, t) {
            const n = t[0] * t[0] + t[1] * t[1];
            return [(e[0] * t[0] + e[1] * t[1]) / n, (e[1] * t[0] - e[0] * t[1]) / n]
        }

        function Xe(e, t) {
            let n = [0, 0];
            for (let o = e.length - 1; o >= 0; o -= 1) i = t, (n = [(r = n)[0] * i[0] - r[1] * i[1], r[0] * i[1] + r[1] * i[0]])[0] += e[o];
            var r, i;
            return n
        }
        const je = () => {
                try {
                    return new DOMException("", "NotSupportedError")
                } catch (e) {
                    return e.code = 9, e.name = "NotSupportedError", e
                }
            },
            Ve = {
                numberOfChannels: 1
            },
            ze = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                detune: 0,
                frequency: 440,
                type: "sine"
            },
            Ye = {
                channelCount: 2,
                channelCountMode: "clamped-max",
                channelInterpretation: "speakers",
                coneInnerAngle: 360,
                coneOuterAngle: 360,
                coneOuterGain: 0,
                distanceModel: "inverse",
                maxDistance: 1e4,
                orientationX: 1,
                orientationY: 0,
                orientationZ: 0,
                panningModel: "equalpower",
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                refDistance: 1,
                rolloffFactor: 1
            },
            We = {
                disableNormalization: !1
            },
            He = {
                channelCount: 2,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                pan: 0
            },
            qe = () => {
                try {
                    return new DOMException("", "UnknownError")
                } catch (e) {
                    return e.name = "UnknownError", e
                }
            },
            Qe = {
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                curve: null,
                oversample: "none"
            },
            Ke = (() => "undefined" == typeof window ? null : window)(),
            Ze = (e => null === e ? null : e.hasOwnProperty("OfflineAudioContext") ? e.OfflineAudioContext : e.hasOwnProperty("webkitOfflineAudioContext") ? e.webkitOfflineAudioContext : null)(Ke),
            $e = (e => t => {
                if (null === e) throw new Error("The native OfflineAudioContext constructor is missing.");
                return t instanceof e
            })(Ze),
            Je = (e => null === e ? null : e.hasOwnProperty("AudioContext") ? e.AudioContext : e.hasOwnProperty("webkitAudioContext") ? e.webkitAudioContext : null)(Ke),
            et = ((e, t, n) => r => {
                if ("closed" === r.state && null !== t && "webkitAudioContext" !== t.name) {
                    if (!e(r)) {
                        const e = m.get(r);
                        if (void 0 !== e) return e;
                        const n = new t;
                        return m.set(r, n), n
                    } {
                        const e = m.get(r);
                        if (void 0 !== e) return e;
                        if (null !== n) {
                            const e = new n(1, 1, 44100);
                            return m.set(r, e), e
                        }
                    }
                }
                return null
            })($e, Je, Ze),
            tt = (e => (t, n) => {
                const r = e(t);
                return n(null !== r ? r : t)
            })(et),
            nt = ((e, t) => (n, r) => {
                const i = t(n, e => e.createAnalyser());
                if (De(i, r), !(r.maxDecibels > r.minDecibels)) throw e();
                return Oe(i, r, "fftSize"), Oe(i, r, "maxDecibels"), Oe(i, r, "minDecibels"), Oe(i, r, "smoothingTimeConstant"), G(Se, () => Se(i)) || (e => {
                    e.getFloatTimeDomainData = (t => {
                        const n = new Uint8Array(t.length);
                        e.getByteTimeDomainData(n);
                        const r = Math.max(n.length, e.fftSize);
                        for (let e = 0; e < r; e += 1) t[e] = .0078125 * (n[e] - 128);
                        return t
                    })
                })(i), i
            })(U, tt),
            rt = (e => () => {
                let t = null;
                return {
                    render: (n, r) => (null === t && (t = (async(t, n) => {
                        let r = O(t);
                        if (!D(r, n)) {
                            const t = {
                                channelCount: r.channelCount,
                                channelCountMode: r.channelCountMode,
                                channelInterpretation: r.channelInterpretation,
                                fftSize: r.fftSize,
                                maxDecibels: r.maxDecibels,
                                minDecibels: r.minDecibels,
                                smoothingTimeConstant: r.smoothingTimeConstant
                            };
                            r = e(n, t)
                        }
                        return await k(t, n, r), r
                    })(n, r)), t)
                }
            })(nt),
            it = ((e, t) => (class extends J {
                constructor(e, n, r) {
                    super(n), this._context = e, this._nativeAudioNode = n;
                    const i = x(e);
                    t(i) || !0 === G(te, () => te(i)) || ne(n), f.set(this, n), ((e, t, n, r) => {
                        const i = S(e),
                            o = [];
                        for (let e = 0; e < r.numberOfInputs; e += 1) o.push(new Set);
                        const a = {
                            inputs: o,
                            outputs: new Set,
                            renderer: n
                        };
                        i.nodes.set(t, a), i.nodes.set(r, a)
                    })(e, this, r, n)
                }
                get channelCount() {
                    return this._nativeAudioNode.channelCount
                }
                set channelCount(e) {
                    this._nativeAudioNode.channelCount = e
                }
                get channelCountMode() {
                    return this._nativeAudioNode.channelCountMode
                }
                set channelCountMode(e) {
                    this._nativeAudioNode.channelCountMode = e
                }
                get channelInterpretation() {
                    return this._nativeAudioNode.channelInterpretation
                }
                set channelInterpretation(e) {
                    this._nativeAudioNode.channelInterpretation = e
                }
                get context() {
                    return this._context
                }
                get numberOfInputs() {
                    return this._nativeAudioNode.numberOfInputs
                }
                get numberOfOutputs() {
                    return this._nativeAudioNode.numberOfOutputs
                }
                connect(n, r = 0, i = 0) {
                    const o = x(this._context);
                    if (ee(n)) {
                        const a = O(n),
                            s = a.inputs;
                        try {
                            void 0 !== s ? this._nativeAudioNode.connect(s[i], r, 0) : this._nativeAudioNode.connect(a, r, i), t(o) && (void 0 !== s ? this._nativeAudioNode.disconnect(s[i], r, 0) : this._nativeAudioNode.disconnect(a, r, i))
                        } catch (t) {
                            if (12 === t.code) throw e();
                            throw t
                        }
                        return ((e, t, n, r) => {
                            const i = F(e),
                                o = F(t);
                            i.outputs.add([t, n, r]), o.inputs[r].add([e, n])
                        })(this, n, r, i), n
                    }
                    const a = H(n);
                    try {
                        this._nativeAudioNode.connect(a, r), t(o) && this._nativeAudioNode.disconnect(a, r)
                    } catch (t) {
                        if (12 === t.code) throw e();
                        throw t
                    }((e, t, n) => {
                        const r = F(e),
                            i = q(e.context, t);
                        r.outputs.add([t, n]), i.inputs.add([e, n])
                    })(this, n, r)
                }
                disconnect(e, n, r) {
                    const i = x(this._context);
                    if (!t(i))
                        if (void 0 === e) this._nativeAudioNode.disconnect();
                        else if ("number" == typeof e) this._nativeAudioNode.disconnect(e);
                    else if (ee(e)) {
                        const t = O(e);
                        if (void 0 !== t.inputs) {
                            const e = t.inputs,
                                i = e.length;
                            for (let t = 0; t < i; t += 1) void 0 !== r && r !== t || (void 0 === n ? this._nativeAudioNode.disconnect(e[t]) : this._nativeAudioNode.disconnect(e[t], n))
                        } else void 0 === n ? this._nativeAudioNode.disconnect(t) : void 0 === r ? this._nativeAudioNode.disconnect(t, n) : this._nativeAudioNode.disconnect(t, n, r)
                    } else {
                        const t = H(e);
                        void 0 === n ? this._nativeAudioNode.disconnect(t) : this._nativeAudioNode.disconnect(t, n)
                    }
                    void 0 === e ? (e => {
                        const t = F(e);
                        for (const [n] of t.outputs) ee(n) ? re(e, n) : ie(e, n);
                        t.outputs.clear()
                    })(this) : "number" == typeof e ? ((e, t) => {
                        const n = F(e);
                        Array.from(n.outputs).filter(e => e[1] === t).forEach(t => {
                            const [r] = t;
                            ee(r) ? re(e, r, t[1], t[2]) : ie(e, r, t[1]), n.outputs.delete(t)
                        })
                    })(this, e) : oe(this, e, n, r)
                }
            }))(Te, $e),
            ot = (e => (class extends e {
                constructor(e, t, n) {
                    super(e, t, n)
                }
            }))(it),
            at = ((e, t, n, r, i) => (class extends i {
                constructor(t, i = I) {
                    const o = x(t),
                        a = {...I, ...i
                        },
                        s = n(o, a);
                    super(t, s, r(o) ? e() : null), this._nativeAnalyserNode = s
                }
                get fftSize() {
                    return this._nativeAnalyserNode.fftSize
                }
                set fftSize(e) {
                    this._nativeAnalyserNode.fftSize = e
                }
                get frequencyBinCount() {
                    return this._nativeAnalyserNode.frequencyBinCount
                }
                get maxDecibels() {
                    return this._nativeAnalyserNode.maxDecibels
                }
                set maxDecibels(e) {
                    const n = this._nativeAnalyserNode.maxDecibels;
                    if (this._nativeAnalyserNode.maxDecibels = e, !(e > this._nativeAnalyserNode.minDecibels)) throw this._nativeAnalyserNode.maxDecibels = n, t()
                }
                get minDecibels() {
                    return this._nativeAnalyserNode.minDecibels
                }
                set minDecibels(e) {
                    const n = this._nativeAnalyserNode.minDecibels;
                    if (this._nativeAnalyserNode.minDecibels = e, !(this._nativeAnalyserNode.maxDecibels > e)) throw this._nativeAnalyserNode.minDecibels = n, t()
                }
                get smoothingTimeConstant() {
                    return this._nativeAnalyserNode.smoothingTimeConstant
                }
                set smoothingTimeConstant(e) {
                    this._nativeAnalyserNode.smoothingTimeConstant = e
                }
                getByteFrequencyData(e) {
                    this._nativeAnalyserNode.getByteFrequencyData(e)
                }
                getByteTimeDomainData(e) {
                    this._nativeAnalyserNode.getByteTimeDomainData(e)
                }
                getFloatFrequencyData(e) {
                    this._nativeAnalyserNode.getFloatFrequencyData(e)
                }
                getFloatTimeDomainData(e) {
                    this._nativeAnalyserNode.getFloatTimeDomainData(e)
                }
            }))(rt, U, nt, $e, ot),
            st = (e => null === e ? null : e.hasOwnProperty("AudioBuffer") ? e.AudioBuffer : null)(Ke),
            lt = ((e, t, n, r) => {
                let i = null;
                return class {
                    constructor(o) {
                        if (null === n) throw new Error;
                        const {
                            length: a,
                            numberOfChannels: s,
                            sampleRate: l
                        } = {...z, ...o
                        };
                        null === i && (i = new n(1, 1, 44100));
                        const u = null !== t && G(r, r) ? new t({
                            length: a,
                            numberOfChannels: s,
                            sampleRate: l
                        }) : i.createBuffer(s, a, l);
                        if ("function" != typeof u.copyFromChannel ? (X(u), V(u)) : G(L, () => L(u)) || j(u), 0 === u.numberOfChannels) throw e();
                        return u
                    }
                    copyFromChannel(e, t, n = 0) {}
                    copyToChannel(e, t, n = 0) {}
                    getChannelData(e) {
                        return new Float32Array(0)
                    }
                }
            })(je, st, Ze, (e => () => {
                if (null === e) return !1;
                try {
                    new e({
                        length: 1,
                        sampleRate: 44100
                    })
                } catch (e) {
                    return !1
                }
                return !0
            })(st)),
            ut = (e => t => {
                const n = e(t, e => e.createOscillator());
                try {
                    n.start(-1)
                } catch (e) {
                    return e instanceof RangeError
                }
                return !1
            })(tt),
            ct = (e => t => {
                const n = t.createBuffer(1, 1, 44100),
                    r = e(t, e => e.createBufferSource());
                r.buffer = n, r.start(), r.stop();
                try {
                    return r.stop(), !0
                } catch (e) {
                    return !1
                }
            })(tt),
            ht = (e => t => {
                const n = e(t, e => e.createOscillator());
                try {
                    n.stop(-1)
                } catch (e) {
                    return e instanceof RangeError
                }
                return !1
            })(tt),
            ft = (e => (t, n) => {
                const r = e(n, e => e.createGain());
                t.connect(r);
                const i = (e => () => {
                    e.call(t, r), t.removeEventListener("ended", i)
                })(t.disconnect);
                t.addEventListener("ended", i), Le(t, r), t.stop = (e => {
                    let n = !1;
                    return (i = 0) => {
                        if (n) try {
                            e.call(t, i)
                        } catch (e) {
                            r.gain.setValueAtTime(0, i)
                        } else e.call(t, i), n = !0
                    }
                })(t.stop)
            })(tt),
            dt = ((e, t, n, r, i, o, a) => (s, l = {}) => {
                const u = e(s, e => e.createBufferSource());
                return De(u, l), Fe(u, l, "playbackRate"), Oe(u, l, "buffer"), Oe(u, l, "loop"), Oe(u, l, "loopEnd"), Oe(u, l, "loopStart"), G(t, () => t(s)) || (e => {
                    e.start = (t => {
                        let n = !1;
                        return (r = 0, i = 0, o) => {
                            if (n) throw w();
                            t.call(e, r, i, o), n = !0
                        }
                    })(e.start)
                })(u), G(n, n) || ((e, t) => {
                    let n = Number.POSITIVE_INFINITY,
                        r = Number.POSITIVE_INFINITY;
                    e.start = ((i, o) => (a = 0, s = 0, l = Number.POSITIVE_INFINITY) => {
                        if (i.call(e, a, s), l >= 0 && l < Number.POSITIVE_INFINITY) {
                            const i = Math.max(a, t.currentTime),
                                s = l / e.playbackRate.value;
                            n = i + s, o.call(e, Math.min(n, r))
                        }
                    })(e.start, e.stop), e.stop = (i => (o = 0) => {
                        r = Math.max(o, t.currentTime), i.call(e, Math.min(n, r))
                    })(e.stop)
                })(u, s), G(r, () => r(s)) || Ne(u), G(i, () => i(s)) || a(u, s), G(o, () => o(s)) || ke(u), u
            })(tt, (e => t => {
                const n = e(t, e => e.createBufferSource());
                n.start();
                try {
                    n.start()
                } catch (e) {
                    return !0
                }
                return !1
            })(tt), (e => () => {
                if (null === e) return Promise.resolve(!1);
                const t = new e(1, 1, 44100),
                    n = t.createBuffer(1, 1, t.sampleRate),
                    r = t.createBufferSource();
                return n.getChannelData(0)[0] = 1, r.buffer = n, r.start(0, 0, 0), r.connect(t.destination), new Promise(e => {
                    t.oncomplete = (({
                        renderedBuffer: t
                    }) => {
                        e(0 === t.getChannelData(0)[0])
                    }), t.startRendering()
                })
            })(Ze), ut, ct, ht, ft),
            pt = (e => () => {
                let t = null,
                    n = null,
                    r = null;
                return {set start(e) {
                        n = e
                    },
                    set stop(e) {
                        r = e
                    },
                    render: (i, o) => (null === t && (t = (async(t, i) => {
                        let o = O(t);
                        if (D(o, i)) await K(t.context, i, t.playbackRate);
                        else {
                            const a = {
                                buffer: o.buffer,
                                channelCount: o.channelCount,
                                channelCountMode: o.channelCountMode,
                                channelInterpretation: o.channelInterpretation,
                                loop: o.loop,
                                loopEnd: o.loopEnd,
                                loopStart: o.loopStart,
                                playbackRate: o.playbackRate.value
                            };
                            o = e(i, a), null !== n && o.start(...n), null !== r && o.stop(r), await Z(t.context, i, t.playbackRate, o.playbackRate)
                        }
                        return await k(t, i, o), o
                    })(i, o)), t)
                }
            })(dt),
            mt = ((e, t) => (n, r, i, o = null, a = null) => {
                const s = r ? e() : null,
                    l = {get defaultValue() {
                            return i.defaultValue
                        },
                        get maxValue() {
                            return null === o ? i.maxValue : o
                        },
                        get minValue() {
                            return null === a ? i.minValue : a
                        },
                        get value() {
                            return i.value
                        },
                        set value(e) {
                            i.value = e, l.setValueAtTime(e, n.currentTime)
                        },
                        cancelScheduledValues: e => (i.cancelScheduledValues(e), null !== s && s.record({
                            cancelTime: e,
                            type: "cancelScheduledValues"
                        }), l),
                        exponentialRampToValueAtTime: (e, t) => (i.exponentialRampToValueAtTime(e, t), null !== s && s.record({
                            endTime: t,
                            type: "exponentialRampToValue",
                            value: e
                        }), l),
                        linearRampToValueAtTime: (e, t) => (i.linearRampToValueAtTime(e, t), null !== s && s.record({
                            endTime: t,
                            type: "linearRampToValue",
                            value: e
                        }), l),
                        setTargetAtTime: (e, t, n) => (i.setTargetAtTime(e, t, n), null !== s && s.record({
                            startTime: t,
                            target: e,
                            timeConstant: n,
                            type: "setTarget"
                        }), l),
                        setValueAtTime: (e, t) => (i.setValueAtTime(e, t), null !== s && s.record({
                            startTime: t,
                            type: "setValue",
                            value: e
                        }), l),
                        setValueCurveAtTime(e, r, o) {
                            const a = "setValueCurve";
                            if (null !== t && "webkitAudioContext" === t.name) {
                                const t = r + o,
                                    u = Math.ceil(r * n.sampleRate),
                                    c = Math.floor(t * n.sampleRate),
                                    h = c - u,
                                    f = new Float32Array(h);
                                for (let t = 0; t < h; t += 1) {
                                    const i = (e.length - 1) / o * ((u + t) / n.sampleRate - r),
                                        a = Math.floor(i),
                                        s = Math.ceil(i);
                                    f[t] = a === s ? e[a] : (1 - (i - a)) * e[a] + (1 - (s - i)) * e[s]
                                }
                                i.setValueCurveAtTime(f, r, o), null !== s && s.record({
                                    duration: o,
                                    startTime: r,
                                    type: a,
                                    values: f
                                });
                                const d = c / n.sampleRate;
                                d < t && l.setValueAtTime(f[f.length - 1], d), l.setValueAtTime(e[e.length - 1], t)
                            } else i.setValueCurveAtTime(e, r, o), null !== s && s.record({
                                duration: o,
                                startTime: r,
                                type: a,
                                values: e
                            });
                            return l
                        }
                    };
                return p.set(l, i), ((e, t, n) => {
                    S(e).params.set(t, {
                        inputs: new Set,
                        renderer: n
                    })
                })(n, l, s), l
            })(() => {
                const e = [];
                return {
                    record(t) {
                        e.push(t)
                    }, replay(t) {
                        for (const n of e)
                            if ("cancelScheduledValues" === n.type) {
                                const {
                                    cancelTime: e
                                } = n;
                                t.cancelScheduledValues(e)
                            } else if ("exponentialRampToValue" === n.type) {
                            const {
                                endTime: e,
                                value: r
                            } = n;
                            t.exponentialRampToValueAtTime(r, e)
                        } else if ("linearRampToValue" === n.type) {
                            const {
                                endTime: e,
                                value: r
                            } = n;
                            t.linearRampToValueAtTime(r, e)
                        } else if ("setTarget" === n.type) {
                            const {
                                startTime: e,
                                target: r,
                                timeConstant: i
                            } = n;
                            t.setTargetAtTime(r, e, i)
                        } else if ("setValue" === n.type) {
                            const {
                                startTime: e,
                                value: r
                            } = n;
                            t.setValueAtTime(r, e)
                        } else {
                            if ("setValueCurve" !== n.type) throw new Error("Can't apply an unknown automation."); {
                                const {
                                    duration: e,
                                    startTime: r,
                                    values: i
                                } = n;
                                t.setValueCurveAtTime(i, r, e)
                            }
                        }
                    }
                }
            }, Je),
            _t = ((e, t, n, r, i, o) => (class extends o {
                constructor(n, o = W) {
                    const a = x(n),
                        s = {...W, ...o
                        },
                        l = r(a, s),
                        u = i(a),
                        c = u ? e() : null;
                    super(n, l, c), this._audioBufferSourceNodeRenderer = c, this._isBufferNullified = !1, this._isBufferSet = !1, this._nativeAudioBufferSourceNode = l, this._onended = null, this._playbackRate = t(n, u, l.playbackRate, 3.4028234663852886e38, -3.4028234663852886e38)
                }
                get buffer() {
                    return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer
                }
                set buffer(e) {
                    try {
                        this._nativeAudioBufferSourceNode.buffer = e
                    } catch (t) {
                        if (null !== e || 17 !== t.code) throw t;
                        if (null !== this._nativeAudioBufferSourceNode.buffer) {
                            const e = this._nativeAudioBufferSourceNode.buffer,
                                t = e.numberOfChannels;
                            for (let n = 0; n < t; n += 1) e.getChannelData(n).fill(0);
                            this._isBufferNullified = !0
                        }
                    }
                    if (null !== e) {
                        if (this._isBufferSet) throw n();
                        this._isBufferSet = !0
                    }
                }
                get onended() {
                    return this._onended
                }
                set onended(e) {
                    const t = Y(this, e);
                    this._nativeAudioBufferSourceNode.onended = t;
                    const n = this._nativeAudioBufferSourceNode.onended;
                    this._onended = n === t ? e : n
                }
                get loop() {
                    return this._nativeAudioBufferSourceNode.loop
                }
                set loop(e) {
                    this._nativeAudioBufferSourceNode.loop = e
                }
                get loopEnd() {
                    return this._nativeAudioBufferSourceNode.loopEnd
                }
                set loopEnd(e) {
                    this._nativeAudioBufferSourceNode.loopEnd = e
                }
                get loopStart() {
                    return this._nativeAudioBufferSourceNode.loopStart
                }
                set loopStart(e) {
                    this._nativeAudioBufferSourceNode.loopStart = e
                }
                get playbackRate() {
                    return this._playbackRate
                }
                start(e = 0, t = 0, n) {
                    this._nativeAudioBufferSourceNode.start(e, t, n), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.start = void 0 === n ? [e, t] : [e, t, n])
                }
                stop(e = 0) {
                    this._nativeAudioBufferSourceNode.stop(e), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.stop = e)
                }
            }))(pt, mt, w, dt, $e, ot),
            gt = ((e, t, n, r, i, o) => (class extends e {
                constructor(e, n) {
                    const r = x(e),
                        a = o(r),
                        s = i(r, n, a),
                        l = a ? t() : null,
                        u = {
                            audioWorkletGlobalScope: null,
                            nodes: new WeakMap,
                            params: new WeakMap
                        };
                    d.set(e, u), d.set(r, u), super(e, s, l), this._isNodeOfNativeOfflineAudioContext = a, this._nativeAudioDestinationNode = s
                }
                get channelCount() {
                    return this._nativeAudioDestinationNode.channelCount
                }
                set channelCount(e) {
                    if (this._isNodeOfNativeOfflineAudioContext) throw r();
                    if (e > this._nativeAudioDestinationNode.maxChannelCount) throw n();
                    this._nativeAudioDestinationNode.channelCount = e
                }
                get channelCountMode() {
                    return this._nativeAudioDestinationNode.channelCountMode
                }
                set channelCountMode(e) {
                    if (this._isNodeOfNativeOfflineAudioContext) throw r();
                    this._nativeAudioDestinationNode.channelCountMode = e
                }
                get maxChannelCount() {
                    return this._nativeAudioDestinationNode.maxChannelCount
                }
            }))(it, () => {
                let e = null;
                return {
                    render: (t, n) => (null === e && (e = (async(e, t) => {
                        const n = t.destination;
                        return await k(e, t, n), n
                    })(t, n)), e)
                }
            }, U, w, (e, t, n) => {
                const r = e.destination;
                return r.channelCount !== t && (r.channelCount = t), n && "explicit" !== r.channelCountMode && (r.channelCountMode = "explicit"), 0 === r.maxChannelCount && Object.defineProperty(r, "maxChannelCount", {
                    get: () => r.channelCount
                }), r
            }, $e),
            vt = (e => (t, n) => {
                const r = e(t, e => e.createBiquadFilter());
                return De(r, n), Fe(r, n, "Q"), Fe(r, n, "detune"), Fe(r, n, "frequency"), Fe(r, n, "gain"), Oe(r, n, "type"), r
            })(tt),
            yt = ((e, t, n, r, i, o) => (class extends o {
                constructor(n, o = de) {
                    const a = x(n),
                        s = {...de, ...o
                        },
                        l = r(a, s),
                        u = i(a);
                    super(n, l, u ? t() : null), this._Q = e(n, u, l.Q, 3.4028234663852886e38, -3.4028234663852886e38), this._detune = e(n, u, l.detune, 3.4028234663852886e38, -3.4028234663852886e38), this._frequency = e(n, u, l.frequency, 3.4028234663852886e38, -3.4028234663852886e38), this._gain = e(n, u, l.gain, 3.4028234663852886e38, -3.4028234663852886e38), this._nativeBiquadFilterNode = l
                }
                get Q() {
                    return this._Q
                }
                get detune() {
                    return this._detune
                }
                get frequency() {
                    return this._frequency
                }
                get gain() {
                    return this._gain
                }
                get type() {
                    return this._nativeBiquadFilterNode.type
                }
                set type(e) {
                    this._nativeBiquadFilterNode.type = e
                }
                getFrequencyResponse(e, t, r) {
                    if (this._nativeBiquadFilterNode.getFrequencyResponse(e, t, r), e.length !== t.length || t.length !== r.length) throw n()
                }
            }))(mt, (e => () => {
                let t = null;
                return {
                    render: (n, r) => (null === t && (t = (async(t, n) => {
                        let r = O(t);
                        if (D(r, n)) await K(t.context, n, t.Q), await K(t.context, n, t.detune), await K(t.context, n, t.frequency), await K(t.context, n, t.gain);
                        else {
                            const i = {
                                Q: r.Q.value,
                                channelCount: r.channelCount,
                                channelCountMode: r.channelCountMode,
                                channelInterpretation: r.channelInterpretation,
                                detune: r.detune.value,
                                frequency: r.frequency.value,
                                gain: r.gain.value,
                                type: r.type
                            };
                            r = e(n, i), await Z(t.context, n, t.Q, r.Q), await Z(t.context, n, t.detune, r.detune), await Z(t.context, n, t.frequency, r.frequency), await Z(t.context, n, t.gain, r.gain)
                        }
                        return await k(t, n, r), r
                    })(n, r)), t)
                }
            })(vt), Te, vt, $e, ot),
            bt = ((e, t) => (n, r) => {
                const i = t(n, e => e.createBufferSource());
                r.channelCount = 1, r.channelCountMode = "explicit";
                const o = r.numberOfInputs;
                for (let e = 0; e < o; e += 1) i.connect(r, 0, e);
                Object.defineProperty(r, "channelCount", {
                    get: () => 1,
                    set: () => {
                        throw e()
                    }
                }), Object.defineProperty(r, "channelCountMode", {
                    get: () => "explicit",
                    set: () => {
                        throw e()
                    }
                })
            })(w, tt),
            wt = ((e, t) => (n, r) => {
                const i = e(n, e => e.createChannelMerger(r.numberOfInputs));
                De(i, r), 1 !== i.channelCount && "explicit" !== i.channelCountMode && t(n, i);
                try {
                    i.channelCount = void 0 === r.numberOfInputs ? 6 : r.numberOfInputs, t(n, i)
                } catch (e) {}
                return i
            })(tt, bt),
            xt = ((e, t, n, r) => (class extends r {
                constructor(r, i = pe) {
                    const o = x(r),
                        a = {...pe, ...i
                        };
                    super(r, t(o, a), n(o) ? e() : null)
                }
            }))((e => () => {
                let t = null;
                return {
                    render: (n, r) => (null === t && (t = (async(t, n) => {
                        let r = O(t);
                        if (!D(r, n)) {
                            const t = {
                                channelCount: r.channelCount,
                                channelCountMode: r.channelCountMode,
                                channelInterpretation: r.channelInterpretation,
                                numberOfInputs: r.numberOfInputs
                            };
                            r = e(n, t)
                        }
                        return await k(t, n, r), r
                    })(n, r)), t)
                }
            })(wt), wt, $e, ot),
            Tt = (e => (t, n) => {
                const r = e(t, e => e.createChannelSplitter(n.numberOfOutputs));
                return De(r, n), (e => {
                    const t = e.numberOfOutputs;
                    Object.defineProperty(e, "channelCount", {
                        get: () => t,
                        set: e => {
                            if (e !== t) throw w()
                        }
                    }), Object.defineProperty(e, "channelCountMode", {
                        get: () => "explicit",
                        set: e => {
                            if ("explicit" !== e) throw w()
                        }
                    }), Object.defineProperty(e, "channelInterpretation", {
                        get: () => "discrete",
                        set: e => {
                            if ("discrete" !== e) throw w()
                        }
                    })
                })(r), r
            })(tt),
            At = ((e, t, n, r) => (class extends r {
                constructor(r, i = me) {
                    const o = x(r),
                        a = (e => ({...e, channelCount: e.numberOfOutputs
                        }))({...me, ...i
                        });
                    super(r, t(o, a), n(o) ? e() : null)
                }
            }))((e => () => {
                let t = null;
                return {
                    render: (n, r) => (null === t && (t = (async(t, n) => {
                        let r = O(t);
                        if (!D(r, n)) {
                            const t = {
                                channelCount: r.channelCount,
                                channelCountMode: r.channelCountMode,
                                channelInterpretation: r.channelInterpretation,
                                numberOfOutputs: r.numberOfOutputs
                            };
                            r = e(n, t)
                        }
                        return await k(t, n, r), r
                    })(n, r)), t)
                }
            })(Tt), Tt, $e, ot),
            Mt = (e => (t, n) => {
                const r = e(t, e => e.createGain());
                return De(r, n), Fe(r, n, "gain"), r
            })(tt),
            Pt = ((e, t) => (n, {
                offset: r,
                ...i
            }) => {
                const o = e(n),
                    a = n.createBuffer(1, 2, n.sampleRate),
                    s = t(n, {...i, gain: r
                    }),
                    l = a.getChannelData(0);
                return l[0] = 1, l[1] = 1, o.buffer = a, o.loop = !0, o.connect(s), Le({get bufferSize() {},
                    get channelCount() {
                        return s.channelCount
                    },
                    set channelCount(e) {
                        s.channelCount = e
                    },
                    get channelCountMode() {
                        return s.channelCountMode
                    },
                    set channelCountMode(e) {
                        s.channelCountMode = e
                    },
                    get channelInterpretation() {
                        return s.channelInterpretation
                    },
                    set channelInterpretation(e) {
                        s.channelInterpretation = e
                    },
                    get context() {
                        return s.context
                    },
                    get inputs() {},
                    get numberOfInputs() {
                        return o.numberOfInputs
                    },
                    get numberOfOutputs() {
                        return s.numberOfOutputs
                    },
                    get offset() {
                        return s.gain
                    },
                    get onended() {
                        return o.onended
                    },
                    set onended(e) {
                        o.onended = e
                    },
                    addEventListener: (...e) => o.addEventListener(e[0], e[1], e[2]),
                    dispatchEvent: (...e) => o.dispatchEvent(e[0]),
                    removeEventListener: (...e) => o.removeEventListener(e[0], e[1], e[2]),
                    start(e = 0) {
                        o.start.call(o, e)
                    },
                    stop(e = 0) {
                        o.stop.call(o, e)
                    }
                }, s)
            })(dt, Mt),
            Ct = ((e, t, n, r) => (i, o) => {
                if (void 0 === i.createConstantSource) return t(i, o);
                const a = e(i, e => e.createConstantSource());
                return De(a, o), Fe(a, o, "offset"), G(n, () => n(i)) || Ne(a), G(r, () => r(i)) || ke(a), a
            })(tt, Pt, ut, ht),
            Rt = ((e, t, n, r, i) => (class extends i {
                constructor(i, o = ge) {
                    const a = x(i),
                        s = {...ge, ...o
                        },
                        l = n(a, s),
                        u = r(a),
                        c = u ? t() : null;
                    super(i, l, c), this._constantSourceNodeRenderer = c, this._nativeConstantSourceNode = l, this._offset = e(i, u, l.offset, 3.4028234663852886e38, -3.4028234663852886e38), this._onended = null
                }
                get offset() {
                    return this._offset
                }
                get onended() {
                    return this._onended
                }
                set onended(e) {
                    const t = Y(this, e);
                    this._nativeConstantSourceNode.onended = t;
                    const n = this._nativeConstantSourceNode.onended;
                    this._onended = n === t ? e : n
                }
                start(e = 0) {
                    this._nativeConstantSourceNode.start(e), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.start = e)
                }
                stop(e = 0) {
                    this._nativeConstantSourceNode.stop(e), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.stop = e)
                }
            }))(mt, (e => () => {
                let t = null,
                    n = null,
                    r = null;
                return {set start(e) {
                        n = e
                    },
                    set stop(e) {
                        r = e
                    },
                    render: (i, o) => (null === t && (t = (async(t, i) => {
                        let o = O(t);
                        if (D(o, i)) await K(t.context, i, t.offset);
                        else {
                            const a = {
                                channelCount: o.channelCount,
                                channelCountMode: o.channelCountMode,
                                channelInterpretation: o.channelInterpretation,
                                offset: o.offset.value
                            };
                            o = e(i, a), null !== n && o.start(n), null !== r && o.stop(r), await Z(t.context, i, t.offset, o.offset)
                        }
                        return await k(t, i, o), o
                    })(i, o)), t)
                }
            })(Ct), Ct, $e, ot),
            Et = ((e, t) => (n, r) => {
                const i = e(n, e => e.createConvolver());
                if (De(i, r), r.disableNormalization === i.normalize && (i.normalize = !r.disableNormalization), Oe(i, r, "buffer"), 2 !== r.channelCount) throw t();
                if (Object.defineProperty(i, "channelCount", {
                        get: () => r.channelCount,
                        set: e => {
                            if (e !== r.channelCount) throw t()
                        }
                    }), "clamped-max" !== r.channelCountMode) throw t();
                return Object.defineProperty(i, "channelCountMode", {
                    get: () => r.channelCountMode,
                    set: e => {
                        if (e !== r.channelCountMode) throw t()
                    }
                }), i
            })(tt, je),
            It = ((e, t, n, r) => (class extends r {
                constructor(r, i = ve) {
                    const o = x(r),
                        a = {...ve, ...i
                        },
                        s = t(o, a);
                    super(r, s, n(o) ? e() : null), this._isBufferNullified = !1, this._nativeConvolverNode = s
                }
                get buffer() {
                    return this._isBufferNullified ? null : this._nativeConvolverNode.buffer
                }
                set buffer(e) {
                    if (this._nativeConvolverNode.buffer = e, null === e && null !== this._nativeConvolverNode.buffer) {
                        const e = this._nativeConvolverNode.context;
                        this._nativeConvolverNode.buffer = e.createBuffer(1, 1, e.sampleRate), this._isBufferNullified = !0
                    } else this._isBufferNullified = !1
                }
                get normalize() {
                    return this._nativeConvolverNode.normalize
                }
                set normalize(e) {
                    this._nativeConvolverNode.normalize = e
                }
            }))((e => () => {
                let t = null;
                return {
                    render: (n, r) => (null === t && (t = (async(t, n) => {
                        let r = O(t);
                        if (!D(r, n)) {
                            const t = {
                                buffer: r.buffer,
                                channelCount: r.channelCount,
                                channelCountMode: r.channelCountMode,
                                channelInterpretation: r.channelInterpretation,
                                disableNormalization: !r.normalize
                            };
                            r = e(n, t)
                        }
                        return await k(t, n, r), r
                    })(n, r)), t)
                }
            })(Et), Et, $e, ot),
            Ot = (e => (t, n) => {
                const r = e(t, e => e.createDelay(n.maxDelayTime));
                return De(r, n), Fe(r, n, "delayTime"), r
            })(tt),
            Dt = ((e, t, n, r, i) => (class extends i {
                constructor(i, o = ye) {
                    const a = x(i),
                        s = {...ye, ...o
                        },
                        l = n(a, s),
                        u = r(a);
                    super(i, l, u ? t(s.maxDelayTime) : null), this._delayTime = e(i, u, l.delayTime, s.maxDelayTime, 0)
                }
                get delayTime() {
                    return this._delayTime
                }
            }))(mt, (e => t => {
                let n = null;
                return {
                    render: (r, i) => (null === n && (n = (async(n, r) => {
                        let i = O(n);
                        if (D(i, r)) await K(n.context, r, n.delayTime);
                        else {
                            const o = {
                                channelCount: i.channelCount,
                                channelCountMode: i.channelCountMode,
                                channelInterpretation: i.channelInterpretation,
                                delayTime: i.delayTime.value,
                                maxDelayTime: t
                            };
                            i = e(r, o), await Z(n.context, r, n.delayTime, i.delayTime)
                        }
                        return await k(n, r, i), i
                    })(r, i)), n)
                }
            })(Ot), Ot, $e, ot),
            St = ((e, t) => (n, r) => {
                const i = e(n, e => e.createDynamicsCompressor());
                if (De(i, r), r.channelCount > 2) throw t();
                if ("max" === r.channelCountMode) throw t();
                return Fe(i, r, "attack"), Fe(i, r, "knee"), Fe(i, r, "ratio"), Fe(i, r, "release"), Fe(i, r, "threshold"), i
            })(tt, je),
            Ft = ((e, t, n, r, i, o) => (class extends o {
                constructor(r, o = we) {
                    const a = x(r),
                        s = {...we, ...o
                        },
                        l = n(a, s),
                        u = i(a);
                    super(r, l, u ? t() : null), this._attack = e(r, u, l.attack, 1, 0), this._knee = e(r, u, l.knee, 40, 0), this._nativeDynamicsCompressorNode = l, this._ratio = e(r, u, l.ratio, 20, 1), this._release = e(r, u, l.release, 1, 0), this._threshold = e(r, u, l.threshold, 0, -100)
                }
                get attack() {
                    return this._attack
                }
                get channelCount() {
                    return this._nativeDynamicsCompressorNode.channelCount
                }
                set channelCount(e) {
                    const t = this._nativeDynamicsCompressorNode.channelCount;
                    if (this._nativeDynamicsCompressorNode.channelCount = e, e > 2) throw this._nativeDynamicsCompressorNode.channelCount = t, r()
                }
                get channelCountMode() {
                    return this._nativeDynamicsCompressorNode.channelCountMode
                }
                set channelCountMode(e) {
                    const t = this._nativeDynamicsCompressorNode.channelCountMode;
                    if (this._nativeDynamicsCompressorNode.channelCountMode = e, "max" === e) throw this._nativeDynamicsCompressorNode.channelCountMode = t, r()
                }
                get knee() {
                    return this._knee
                }
                get ratio() {
                    return this._ratio
                }
                get reduction() {
                    return "number" == typeof this._nativeDynamicsCompressorNode.reduction.value ? this._nativeDynamicsCompressorNode.reduction.value : this._nativeDynamicsCompressorNode.reduction
                }
                get release() {
                    return this._release
                }
                get threshold() {
                    return this._threshold
                }
            }))(mt, (e => () => {
                let t = null;
                return {
                    render: (n, r) => (null === t && (t = (async(t, n) => {
                        let r = O(t);
                        if (D(r, n)) await K(t.context, n, t.attack), await K(t.context, n, t.knee), await K(t.context, n, t.ratio), await K(t.context, n, t.release), await K(t.context, n, t.threshold);
                        else {
                            const i = {
                                attack: r.attack.value,
                                channelCount: r.channelCount,
                                channelCountMode: r.channelCountMode,
                                channelInterpretation: r.channelInterpretation,
                                knee: r.knee.value,
                                ratio: r.ratio.value,
                                release: r.release.value,
                                threshold: r.threshold.value
                            };
                            r = e(n, i), await Z(t.context, n, t.attack, r.attack), await Z(t.context, n, t.knee, r.knee), await Z(t.context, n, t.ratio, r.ratio), await Z(t.context, n, t.release, r.release), await Z(t.context, n, t.threshold, r.threshold)
                        }
                        return await k(t, n, r), r
                    })(n, r)), t)
                }
            })(St), St, je, $e, ot),
            Nt = ((e, t, n, r, i) => (class extends i {
                constructor(i, o = xe) {
                    const a = x(i),
                        s = {...xe, ...o
                        },
                        l = n(a, s),
                        u = r(a);
                    super(i, l, u ? t() : null), this._gain = e(i, u, l.gain, 3.4028234663852886e38, -3.4028234663852886e38)
                }
                get gain() {
                    return this._gain
                }
            }))(mt, (e => () => {
                let t = null;
                return {
                    render: (n, r) => (null === t && (t = (async(t, n) => {
                        let r = O(t);
                        if (D(r, n)) await K(t.context, n, t.gain);
                        else {
                            const i = {
                                channelCount: r.channelCount,
                                channelCountMode: r.channelCountMode,
                                channelInterpretation: r.channelInterpretation,
                                gain: r.gain.value
                            };
                            r = e(n, i), await Z(t.context, n, t.gain, r.gain)
                        }
                        return await k(t, n, r), r
                    })(n, r)), t)
                }
            })(Mt), Mt, $e, ot),
            kt = (e => (t, n, r, i) => e(t, e => e.createScriptProcessor(n, r, i)))(tt),
            Bt = ((e, t, n, r) => (i, o, {
                channelCount: a,
                channelCountMode: s,
                channelInterpretation: l,
                feedback: u,
                feedforward: c
            }) => {
                const h = Be(o, i.sampleRate),
                    f = u.length,
                    d = c.length,
                    p = Math.min(f, d);
                if (0 === u.length || u.length > 20) throw r();
                if (0 === u[0]) throw t();
                if (0 === c.length || c.length > 20) throw r();
                if (0 === c[0]) throw t();
                if (1 !== u[0]) {
                    for (let e = 0; e < d; e += 1) c[e] /= u[0];
                    for (let e = 1; e < f; e += 1) u[e] /= u[0]
                }
                const m = n(i, h, a, a);
                m.channelCount = a, m.channelCountMode = s, m.channelInterpretation = l;
                const _ = [],
                    g = [],
                    v = [];
                for (let e = 0; e < a; e += 1) {
                    _.push(0);
                    const e = new Float32Array(32),
                        t = new Float32Array(32);
                    e.fill(0), t.fill(0), g.push(e), v.push(t)
                }
                m.onaudioprocess = (e => {
                    const t = e.inputBuffer,
                        n = e.outputBuffer,
                        r = t.numberOfChannels;
                    for (let e = 0; e < r; e += 1) {
                        const r = t.getChannelData(e),
                            i = n.getChannelData(e);
                        _[e] = Me(u, f, c, d, p, g[e], v[e], _[e], 32, r, i)
                    }
                });
                const y = i.sampleRate / 2;
                return Le({get bufferSize() {
                        return h
                    },
                    get channelCount() {
                        return m.channelCount
                    },
                    set channelCount(e) {
                        m.channelCount = e
                    },
                    get channelCountMode() {
                        return m.channelCountMode
                    },
                    set channelCountMode(e) {
                        m.channelCountMode = e
                    },
                    get channelInterpretation() {
                        return m.channelInterpretation
                    },
                    set channelInterpretation(e) {
                        m.channelInterpretation = e
                    },
                    get context() {
                        return m.context
                    },
                    get inputs() {
                        return [m]
                    },
                    get numberOfInputs() {
                        return m.numberOfInputs
                    },
                    get numberOfOutputs() {
                        return m.numberOfOutputs
                    },
                    addEventListener: (...e) => m.addEventListener(e[0], e[1], e[2]),
                    dispatchEvent: (...e) => m.dispatchEvent(e[0]),
                    getFrequencyResponse(t, n, r) {
                        if (t.length !== n.length || n.length !== r.length) throw e();
                        const i = t.length;
                        for (let e = 0; e < i; e += 1) {
                            const i = -Math.PI * (t[e] / y),
                                o = [Math.cos(i), Math.sin(i)],
                                a = Ue(Xe(c, o), Xe(u, o));
                            n[e] = Math.sqrt(a[0] * a[0] + a[1] * a[1]), r[e] = Math.atan2(a[1], a[0])
                        }
                    },
                    removeEventListener: (...e) => m.removeEventListener(e[0], e[1], e[2])
                }, m)
            })(Te, w, kt, je),
            Gt = (e => t => G(Ee, () => Ee(t)) ? t.startRendering() : new Promise(n => {
                const r = e(t, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: 0
                });
                t.oncomplete = (e => {
                    r.disconnect(), n(e.renderedBuffer)
                }), r.connect(t.destination), t.startRendering()
            }))(Mt),
            Lt = ((e, t, n, r) => (i, o) => {
                let a = null;
                const s = async(a, s) => {
                    let l = O(a);
                    if (null === n) throw new Error;
                    if (void 0 === s.createIIRFilter) {
                        const t = new n(a.context.destination.channelCount, a.context.length, s.sampleRate);
                        await k(a, t, t.destination);
                        const l = await r(t),
                            u = e(s);
                        return u.buffer = ((e, t, n, r) => {
                            const i = n.length,
                                o = r.length,
                                a = Math.min(i, o);
                            if (1 !== n[0]) {
                                for (let e = 0; e < i; e += 1) r[e] /= n[0];
                                for (let e = 1; e < o; e += 1) n[e] /= n[0]
                            }
                            const s = new Float32Array(32),
                                l = new Float32Array(32),
                                u = t.createBuffer(e.numberOfChannels, e.length, e.sampleRate),
                                c = e.numberOfChannels;
                            for (let t = 0; t < c; t += 1) {
                                const c = e.getChannelData(t),
                                    h = u.getChannelData(t);
                                s.fill(0), l.fill(0), Me(n, i, r, o, a, s, l, 0, 32, c, h)
                            }
                            return u
                        })(l, s, i, o), u.start(0), u
                    }
                    return D(l, s) || (l = t(s, e => e.createIIRFilter(o, i))), await k(a, s, l), l
                };
                return {
                    render: (e, t) => (null === a && (a = s(e, t)), a)
                }
            })(dt, tt, Ze, Gt),
            Ut = ((e, t, n, r) => (class extends r {
                constructor(r, i) {
                    const o = x(r),
                        a = n(o),
                        s = {...Ae, ...i
                        },
                        l = e(o, a ? null : r.baseLatency, s);
                    super(r, l, a ? t(s.feedback, s.feedforward) : null), (e => {
                        e.getFrequencyResponse = (t => (n, r, i) => {
                            if (n.length !== r.length || r.length !== i.length) throw Te();
                            return t.call(e, n, r, i)
                        })(e.getFrequencyResponse)
                    })(l), this._nativeIIRFilterNode = l
                }
                getFrequencyResponse(e, t, n) {
                    return this._nativeIIRFilterNode.getFrequencyResponse(e, t, n)
                }
            }))(((e, t) => (n, r, i) => {
                if (void 0 === n.createIIRFilter) return t(n, r, i);
                const o = e(n, e => e.createIIRFilter(i.feedforward, i.feedback));
                return De(o, i), o
            })(tt, Bt), Lt, $e, ot),
            Xt = ((e, t) => (class extends J {
                constructor(n, r) {
                    super(n), this._nativeContext = n, _.set(this, n);
                    const i = n.sampleRate;
                    Object.defineProperty(n, "sampleRate", {
                        get: () => i
                    }), this._destination = new e(this, r), this._listener = t(this, n), this._onstatechange = null
                }
                get currentTime() {
                    return this._nativeContext.currentTime
                }
                get destination() {
                    return this._destination
                }
                get listener() {
                    return this._listener
                }
                get onstatechange() {
                    return this._onstatechange
                }
                set onstatechange(e) {
                    const t = Y(this, e);
                    this._nativeContext.onstatechange = t;
                    const n = this._nativeContext.onstatechange;
                    this._onstatechange = n === t ? e : n
                }
                get sampleRate() {
                    return this._nativeContext.sampleRate
                }
                get state() {
                    return this._nativeContext.state
                }
            }))(gt, ((e, t, n, r, i) => (o, a) => {
                const s = a.listener,
                    {
                        forwardX: l,
                        forwardY: u,
                        forwardZ: c,
                        positionX: h,
                        positionY: f,
                        positionZ: d,
                        upX: p,
                        upY: m,
                        upZ: _
                    } = void 0 === s.forwardX ? (() => {
                        const l = t(a, {
                                channelCount: 1,
                                channelCountMode: "explicit",
                                channelInterpretation: "speakers",
                                numberOfInputs: 9
                            }),
                            u = i(a),
                            c = r(a, 256, 9, 0),
                            h = (t, r) => {
                                const i = n(a, {
                                    channelCount: 1,
                                    channelCountMode: "explicit",
                                    channelInterpretation: "discrete",
                                    offset: r
                                });
                                return i.connect(l, 0, t), i.start(), Object.defineProperty(i.offset, "defaultValue", {
                                    get: () => r
                                }), e(o, u, i.offset, 3.4028234663852886e38, -3.4028234663852886e38)
                            };
                        let f = [0, 0, -1, 0, 1, 0],
                            d = [0, 0, 0];
                        return c.onaudioprocess = (({
                            inputBuffer: e
                        }) => {
                            const t = [e.getChannelData(0)[0], e.getChannelData(1)[0], e.getChannelData(2)[0], e.getChannelData(3)[0], e.getChannelData(4)[0], e.getChannelData(5)[0]];
                            t.some((e, t) => e !== f[t]) && (s.setOrientation(...t), f = t);
                            const n = [e.getChannelData(6)[0], e.getChannelData(7)[0], e.getChannelData(8)[0]];
                            n.some((e, t) => e !== d[t]) && (s.setPosition(...n), d = n)
                        }), l.connect(c), {
                            forwardX: h(0, 0),
                            forwardY: h(1, 0),
                            forwardZ: h(2, -1),
                            positionX: h(6, 0),
                            positionY: h(7, 0),
                            positionZ: h(8, 0),
                            upX: h(3, 0),
                            upY: h(4, 1),
                            upZ: h(5, 0)
                        }
                    })() : s;
                return {get forwardX() {
                        return l
                    },
                    get forwardY() {
                        return u
                    },
                    get forwardZ() {
                        return c
                    },
                    get positionX() {
                        return h
                    },
                    get positionY() {
                        return f
                    },
                    get positionZ() {
                        return d
                    },
                    get upX() {
                        return p
                    },
                    get upY() {
                        return m
                    },
                    get upZ() {
                        return _
                    }
                }
            })(mt, wt, Ct, kt, $e)),
            jt = ((e, t, n, r, i) => (o, a) => {
                const s = e(o, e => e.createOscillator());
                return De(s, a), Fe(s, a, "detune"), Fe(s, a, "frequency"), void 0 !== a.periodicWave ? s.setPeriodicWave(a.periodicWave) : Oe(s, a, "type"), G(t, () => t(o)) || Ne(s), G(n, () => n(o)) || i(s, o), G(r, () => r(o)) || ke(s), s
            })(tt, ut, ct, ht, ft),
            Vt = (e => () => {
                let t = null,
                    n = null,
                    r = null,
                    i = null;
                return {set periodicWave(e) {
                        n = e
                    },
                    set start(e) {
                        r = e
                    },
                    set stop(e) {
                        i = e
                    },
                    render: (o, a) => (null === t && (t = (async(t, o) => {
                        let a = O(t);
                        if (D(a, o)) await K(t.context, o, t.detune), await K(t.context, o, t.frequency);
                        else {
                            const s = {
                                channelCount: a.channelCount,
                                channelCountMode: a.channelCountMode,
                                channelInterpretation: a.channelInterpretation,
                                detune: a.detune.value,
                                frequency: a.frequency.value,
                                type: a.type
                            };
                            null !== n && (s.periodicWave = n), a = e(o, s), null !== r && a.start(r), null !== i && a.stop(i), await Z(t.context, o, t.detune, a.detune), await Z(t.context, o, t.frequency, a.frequency)
                        }
                        return await k(t, o, a), a
                    })(o, a)), t)
                }
            })(jt),
            zt = ((e, t, n, r, i, o) => (class extends o {
                constructor(t, o = ze) {
                    const a = 1200 * Math.log2(t.sampleRate),
                        s = x(t),
                        l = {...ze, ...o
                        },
                        u = n(s, l),
                        c = i(s),
                        h = c ? r() : null,
                        f = t.sampleRate / 2;
                    super(t, u, h), this._detune = e(t, c, u.detune, a, -a), this._frequency = e(t, c, u.frequency, f, -f), this._nativeOscillatorNode = u, this._onended = null, this._oscillatorNodeRenderer = h, null !== this._oscillatorNodeRenderer && void 0 !== l.periodicWave && (this._oscillatorNodeRenderer.periodicWave = l.periodicWave)
                }
                get detune() {
                    return this._detune
                }
                get frequency() {
                    return this._frequency
                }
                get onended() {
                    return this._onended
                }
                set onended(e) {
                    const t = Y(this, e);
                    this._nativeOscillatorNode.onended = t;
                    const n = this._nativeOscillatorNode.onended;
                    this._onended = n === t ? e : n
                }
                get type() {
                    return this._nativeOscillatorNode.type
                }
                set type(e) {
                    if (this._nativeOscillatorNode.type = e, "custom" === e) throw t();
                    null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = null)
                }
                setPeriodicWave(e) {
                    this._nativeOscillatorNode.setPeriodicWave(e), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = e)
                }
                start(e = 0) {
                    this._nativeOscillatorNode.start(e), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.start = e)
                }
                stop(e = 0) {
                    this._nativeOscillatorNode.stop(e), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.stop = e)
                }
            }))(mt, w, jt, Vt, $e, ot),
            Yt = ((e, t, n) => (r, {
                curve: i,
                oversample: o,
                ...a
            }) => {
                const s = t(r, e => e.createWaveShaper()),
                    l = t(r, e => e.createWaveShaper());
                De(s, a), De(l, a);
                const u = n(r, {...a, gain: 1
                    }),
                    c = n(r, {...a, gain: -1
                    }),
                    h = n(r, {...a, gain: 1
                    }),
                    f = n(r, {...a, gain: -1
                    });
                u.connect(s), s.connect(h), u.connect(c), c.connect(l), l.connect(f), f.connect(h);
                let d = null;
                const p = {get bufferSize() {},
                    get channelCount() {
                        return s.channelCount
                    },
                    set channelCount(e) {
                        u.channelCount = e, c.channelCount = e, s.channelCount = e, h.channelCount = e, l.channelCount = e, f.channelCount = e
                    },
                    get channelCountMode() {
                        return s.channelCountMode
                    },
                    set channelCountMode(e) {
                        u.channelCountMode = e, c.channelCountMode = e, s.channelCountMode = e, h.channelCountMode = e, l.channelCountMode = e, f.channelCountMode = e
                    },
                    get channelInterpretation() {
                        return s.channelInterpretation
                    },
                    set channelInterpretation(e) {
                        u.channelInterpretation = e, c.channelInterpretation = e, s.channelInterpretation = e, h.channelInterpretation = e, l.channelInterpretation = e, f.channelInterpretation = e
                    },
                    get context() {
                        return s.context
                    },
                    get curve() {
                        return d
                    },
                    set curve(t) {
                        if (null !== i && i.length < 2) throw e();
                        if (null === t) s.curve = t, l.curve = t;
                        else {
                            const e = t.length,
                                n = new Float32Array(e + 2 - e % 2),
                                r = new Float32Array(e + 2 - e % 2);
                            n[0] = t[0], r[0] = -t[e - 1];
                            const i = Math.ceil((e + 1) / 2),
                                o = (e + 1) / 2 - 1;
                            for (let a = 1; a < i; a += 1) {
                                const s = a / i * o,
                                    l = Math.floor(s),
                                    u = Math.ceil(s);
                                n[a] = l === u ? t[l] : (1 - (s - l)) * t[l] + (1 - (u - s)) * t[u], r[a] = l === u ? -t[e - 1 - l] : -(1 - (s - l)) * t[e - 1 - l] - (1 - (u - s)) * t[e - 1 - u]
                            }
                            n[i] = e % 2 == 1 ? t[i - 1] : (t[i - 2] + t[i - 1]) / 2, s.curve = n, l.curve = r
                        }
                        d = t
                    },
                    get inputs() {
                        return [u]
                    },
                    get numberOfInputs() {
                        return s.numberOfInputs
                    },
                    get numberOfOutputs() {
                        return s.numberOfOutputs
                    },
                    get oversample() {
                        return s.oversample
                    },
                    set oversample(e) {
                        s.oversample = e, l.oversample = e
                    },
                    addEventListener: (...e) => u.addEventListener(e[0], e[1], e[2]),
                    dispatchEvent: (...e) => u.dispatchEvent(e[0]),
                    removeEventListener: (...e) => u.removeEventListener(e[0], e[1], e[2])
                };
                return i !== p.curve && (p.curve = i), o !== p.oversample && (p.oversample = o), Le(p, h)
            })(w, tt, Mt),
            Wt = ((e, t, n) => (r, i) => {
                const o = t(r, e => e.createWaveShaper());
                try {
                    return o.curve = new Float32Array([1]), n(r, i)
                } catch (e) {}
                De(o, i);
                const a = i.curve;
                if (null !== a && a.length < 2) throw e();
                return Oe(o, i, "curve"), Oe(o, i, "oversample"), o
            })(w, tt, Yt),
            Ht = ((e, t, n, r, i, o, a) => (s, {
                coneInnerAngle: l,
                coneOuterAngle: u,
                coneOuterGain: c,
                distanceModel: h,
                maxDistance: f,
                orientationX: d,
                orientationY: p,
                orientationZ: m,
                panningModel: _,
                positionX: g,
                positionY: v,
                positionZ: y,
                refDistance: b,
                rolloffFactor: w,
                ...x
            }) => {
                const T = t(s, e => e.createPanner());
                if (x.channelCount > 2) throw a();
                if ("max" === x.channelCountMode) throw a();
                De(T, x);
                const A = {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete"
                    },
                    M = n(s, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "speakers",
                        numberOfInputs: 6
                    }),
                    P = r(s, {...x, gain: 1
                    }),
                    C = r(s, {...A, gain: 1
                    }),
                    R = r(s, {...A, gain: 0
                    }),
                    E = r(s, {...A, gain: 0
                    }),
                    I = r(s, {...A, gain: 0
                    }),
                    O = r(s, {...A, gain: 0
                    }),
                    D = r(s, {...A, gain: 0
                    }),
                    S = i(s, 256, 6, 0),
                    F = o(s, {...A, curve: new Float32Array([1, 1]), oversample: "none"
                    });
                let N = [1, 0, 0],
                    k = [0, 0, 0];
                S.onaudioprocess = (({
                    inputBuffer: e
                }) => {
                    const t = [e.getChannelData(0)[0], e.getChannelData(1)[0], e.getChannelData(2)[0]];
                    t.some((e, t) => e !== N[t]) && (T.setOrientation(...t), N = t);
                    const n = [e.getChannelData(6)[0], e.getChannelData(7)[0], e.getChannelData(8)[0]];
                    n.some((e, t) => e !== k[t]) && (T.setPosition(...n), k = n)
                }), P.connect(T), P.connect(void 0 === F.inputs ? F : F.inputs[0]), F.connect(C), F.connect(R), F.connect(E), F.connect(I), F.connect(O), F.connect(D), C.connect(M), R.connect(M), E.connect(M), I.connect(M), O.connect(M), D.connect(M), M.connect(S), Object.defineProperty(R.gain, "defaultValue", {
                    get: () => 0
                }), Object.defineProperty(E.gain, "defaultValue", {
                    get: () => 0
                }), Object.defineProperty(I.gain, "defaultValue", {
                    get: () => 0
                }), Object.defineProperty(O.gain, "defaultValue", {
                    get: () => 0
                }), Object.defineProperty(D.gain, "defaultValue", {
                    get: () => 0
                });
                const B = {get bufferSize() {},
                    get channelCount() {
                        return T.channelCount
                    },
                    set channelCount(e) {
                        if (e > 2) throw a();
                        P.channelCount = e, T.channelCount = e
                    },
                    get channelCountMode() {
                        return T.channelCountMode
                    },
                    set channelCountMode(e) {
                        if ("max" === e) throw a();
                        P.channelCountMode = e, T.channelCountMode = e
                    },
                    get channelInterpretation() {
                        return T.channelInterpretation
                    },
                    set channelInterpretation(e) {
                        P.channelInterpretation = e, T.channelInterpretation = e
                    },
                    get coneInnerAngle() {
                        return T.coneInnerAngle
                    },
                    set coneInnerAngle(e) {
                        T.coneInnerAngle = e
                    },
                    get coneOuterAngle() {
                        return T.coneOuterAngle
                    },
                    set coneOuterAngle(e) {
                        T.coneOuterAngle = e
                    },
                    get coneOuterGain() {
                        return T.coneOuterGain
                    },
                    set coneOuterGain(t) {
                        if (t < 0 || t > 1) throw e();
                        T.coneOuterGain = t
                    },
                    get context() {
                        return T.context
                    },
                    get distanceModel() {
                        return T.distanceModel
                    },
                    set distanceModel(e) {
                        T.distanceModel = e
                    },
                    get inputs() {
                        return [P]
                    },
                    get maxDistance() {
                        return T.maxDistance
                    },
                    set maxDistance(e) {
                        if (e < 0) throw new RangeError;
                        T.maxDistance = e
                    },
                    get numberOfInputs() {
                        return T.numberOfInputs
                    },
                    get numberOfOutputs() {
                        return T.numberOfOutputs
                    },
                    get orientationX() {
                        return C.gain
                    },
                    get orientationY() {
                        return R.gain
                    },
                    get orientationZ() {
                        return E.gain
                    },
                    get panningModel() {
                        return T.panningModel
                    },
                    set panningModel(e) {
                        if (T.panningModel = e, T.panningModel !== e && "HRTF" === e) throw a()
                    },
                    get positionX() {
                        return I.gain
                    },
                    get positionY() {
                        return O.gain
                    },
                    get positionZ() {
                        return D.gain
                    },
                    get refDistance() {
                        return T.refDistance
                    },
                    set refDistance(e) {
                        if (e < 0) throw new RangeError;
                        T.refDistance = e
                    },
                    get rolloffFactor() {
                        return T.rolloffFactor
                    },
                    set rolloffFactor(e) {
                        if (e < 0) throw new RangeError;
                        T.rolloffFactor = e
                    },
                    addEventListener: (...e) => P.addEventListener(e[0], e[1], e[2]),
                    dispatchEvent: (...e) => P.dispatchEvent(e[0]),
                    removeEventListener: (...e) => P.removeEventListener(e[0], e[1], e[2])
                };
                return l !== B.coneInnerAngle && (B.coneInnerAngle = l), u !== B.coneOuterAngle && (B.coneOuterAngle = u), c !== B.coneOuterGain && (B.coneOuterGain = c), h !== B.distanceModel && (B.distanceModel = h), f !== B.maxDistance && (B.maxDistance = f), d !== B.orientationX.value && (B.orientationX.value = d), p !== B.orientationY.value && (B.orientationY.value = p), m !== B.orientationZ.value && (B.orientationZ.value = m), _ !== B.panningModel && (B.panningModel = _), g !== B.positionX.value && (B.positionX.value = g), v !== B.positionY.value && (B.positionY.value = v), y !== B.positionZ.value && (B.positionZ.value = y), b !== B.refDistance && (B.refDistance = b), w !== B.rolloffFactor && (B.rolloffFactor = w), Le(B, T)
            })(w, tt, wt, Mt, kt, Wt, je),
            qt = ((e, t) => (n, r) => {
                const i = e(n, e => e.createPanner());
                return void 0 === i.orientationX ? t(n, r) : (De(i, r), Fe(i, r, "orientationX"), Fe(i, r, "orientationY"), Fe(i, r, "orientationZ"), Fe(i, r, "positionX"), Fe(i, r, "positionY"), Fe(i, r, "positionZ"), Oe(i, r, "coneInnerAngle"), Oe(i, r, "coneOuterAngle"), Oe(i, r, "coneOuterGain"), Oe(i, r, "distanceModel"), Oe(i, r, "maxDistance"), Oe(i, r, "panningModel"), Oe(i, r, "refDistance"), Oe(i, r, "rolloffFactor"), i)
            })(tt, Ht),
            Qt = ((e, t, n, r, i) => (class extends i {
                constructor(i, o = Ye) {
                    const a = x(i),
                        s = {...Ye, ...o
                        },
                        l = t(a, s),
                        u = r(a);
                    super(i, l, u ? n() : null), this._nativePannerNode = l, this._orientationX = e(i, u, l.orientationX, 3.4028234663852886e38, -3.4028234663852886e38), this._orientationY = e(i, u, l.orientationY, 3.4028234663852886e38, -3.4028234663852886e38), this._orientationZ = e(i, u, l.orientationZ, 3.4028234663852886e38, -3.4028234663852886e38), this._positionX = e(i, u, l.positionX, 3.4028234663852886e38, -3.4028234663852886e38), this._positionY = e(i, u, l.positionY, 3.4028234663852886e38, -3.4028234663852886e38), this._positionZ = e(i, u, l.positionZ, 3.4028234663852886e38, -3.4028234663852886e38)
                }
                get coneInnerAngle() {
                    return this._nativePannerNode.coneInnerAngle
                }
                set coneInnerAngle(e) {
                    this._nativePannerNode.coneInnerAngle = e
                }
                get coneOuterAngle() {
                    return this._nativePannerNode.coneOuterAngle
                }
                set coneOuterAngle(e) {
                    this._nativePannerNode.coneOuterAngle = e
                }
                get coneOuterGain() {
                    return this._nativePannerNode.coneOuterGain
                }
                set coneOuterGain(e) {
                    this._nativePannerNode.coneOuterGain = e
                }
                get distanceModel() {
                    return this._nativePannerNode.distanceModel
                }
                set distanceModel(e) {
                    this._nativePannerNode.distanceModel = e
                }
                get maxDistance() {
                    return this._nativePannerNode.maxDistance
                }
                set maxDistance(e) {
                    this._nativePannerNode.maxDistance = e
                }
                get orientationX() {
                    return this._orientationX
                }
                get orientationY() {
                    return this._orientationY
                }
                get orientationZ() {
                    return this._orientationZ
                }
                get panningModel() {
                    return this._nativePannerNode.panningModel
                }
                set panningModel(e) {
                    this._nativePannerNode.panningModel = e
                }
                get positionX() {
                    return this._positionX
                }
                get positionY() {
                    return this._positionY
                }
                get positionZ() {
                    return this._positionZ
                }
                get refDistance() {
                    return this._nativePannerNode.refDistance
                }
                set refDistance(e) {
                    this._nativePannerNode.refDistance = e
                }
                get rolloffFactor() {
                    return this._nativePannerNode.rolloffFactor
                }
                set rolloffFactor(e) {
                    this._nativePannerNode.rolloffFactor = e
                }
            }))(mt, qt, (e => () => {
                let t = null;
                return {
                    render: (n, r) => (null === t && (t = (async(t, n) => {
                        let r = O(t);
                        if (D(r, n)) await K(t.context, n, t.orientationX), await K(t.context, n, t.orientationY), await K(t.context, n, t.orientationZ), await K(t.context, n, t.positionX), await K(t.context, n, t.positionY), await K(t.context, n, t.positionZ);
                        else {
                            const i = {
                                channelCount: r.channelCount,
                                channelCountMode: r.channelCountMode,
                                channelInterpretation: r.channelInterpretation,
                                coneInnerAngle: r.coneInnerAngle,
                                coneOuterAngle: r.coneOuterAngle,
                                coneOuterGain: r.coneOuterGain,
                                distanceModel: r.distanceModel,
                                maxDistance: r.maxDistance,
                                orientationX: r.orientationX.value,
                                orientationY: r.orientationY.value,
                                orientationZ: r.orientationZ.value,
                                panningModel: r.panningModel,
                                positionX: r.positionX.value,
                                positionY: r.positionY.value,
                                positionZ: r.positionZ.value,
                                refDistance: r.refDistance,
                                rolloffFactor: r.rolloffFactor
                            };
                            r = e(n, i), await Z(t.context, n, t.orientationX, r.orientationX), await Z(t.context, n, t.orientationY, r.orientationY), await Z(t.context, n, t.orientationZ, r.orientationZ), await Z(t.context, n, t.positionX, r.positionX), await Z(t.context, n, t.positionY, r.positionY), await Z(t.context, n, t.positionZ, r.positionZ)
                        }
                        return void 0 !== r.inputs ? await k(t, n, r.inputs[0]) : await k(t, n, r), r
                    })(n, r)), t)
                }
            })(qt), $e, ot),
            Kt = (e => (class {
                constructor(t, n) {
                    const r = x(t),
                        i = {...We, ...n
                        };
                    return e(r, i)
                }
            }))((e => (t, {
                disableNormalization: n,
                imag: r,
                real: i
            }) => {
                const o = e(t),
                    a = new Float32Array(r),
                    s = new Float32Array(i);
                return null !== o ? o.createPeriodicWave(s, a, {
                    disableNormalization: n
                }) : t.createPeriodicWave(s, a, {
                    disableNormalization: n
                })
            })(et)),
            Zt = ((e, t, n, r, i) => {
                const o = new Float32Array([1, 1]),
                    a = Math.PI / 2,
                    s = {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete"
                    },
                    l = {...s, oversample: "none"
                    },
                    u = (e, u, c, h, f) => {
                        if (1 === u) return ((e, t, i, u) => {
                            const c = new Float32Array(16385),
                                h = new Float32Array(16385);
                            for (let e = 0; e < 16385; e += 1) {
                                const t = e / 16384 * a;
                                c[e] = Math.cos(t), h[e] = Math.sin(t)
                            }
                            const f = n(e, {...s, gain: 0
                                }),
                                d = r(e, {...l, curve: c
                                }),
                                p = r(e, {...l, curve: o
                                }),
                                m = n(e, {...s, gain: 0
                                }),
                                _ = r(e, {...l, curve: h
                                });
                            return t.connect(f), t.connect(p.inputs[0]), t.connect(m), p.connect(i), i.connect(d.inputs[0]), i.connect(_.inputs[0]), d.connect(f.gain), _.connect(m.gain), f.connect(u, 0, 0), m.connect(u, 0, 1), [f, m]
                        })(e, c, h, f);
                        if (2 === u) return ((e, i, u, c) => {
                            const h = new Float32Array(16385),
                                f = new Float32Array(16385),
                                d = new Float32Array(16385),
                                p = new Float32Array(16385),
                                m = Math.floor(8192.5);
                            for (let e = 0; e < 16385; e += 1)
                                if (e > m) {
                                    const t = (e - m) / (16384 - m) * a;
                                    h[e] = Math.cos(t), f[e] = Math.sin(t), d[e] = 0, p[e] = 1
                                } else {
                                    const t = e / (16384 - m) * a;
                                    h[e] = 1, f[e] = 0, d[e] = Math.cos(t), p[e] = Math.sin(t)
                                }
                            const _ = t(e, {
                                    channelCount: 2,
                                    channelCountMode: "explicit",
                                    channelInterpretation: "discrete",
                                    numberOfOutputs: 2
                                }),
                                g = n(e, {...s, gain: 0
                                }),
                                v = r(e, {...l, curve: h
                                }),
                                y = n(e, {...s, gain: 0
                                }),
                                b = r(e, {...l, curve: f
                                }),
                                w = r(e, {...l, curve: o
                                }),
                                x = n(e, {...s, gain: 0
                                }),
                                T = r(e, {...l, curve: d
                                }),
                                A = n(e, {...s, gain: 0
                                }),
                                M = r(e, {...l, curve: p
                                });
                            return i.connect(_), i.connect(w.inputs[0]), _.connect(g, 1), _.connect(y, 1), _.connect(x, 1), _.connect(A, 1), w.connect(u), u.connect(v.inputs[0]), u.connect(b.inputs[0]), u.connect(T.inputs[0]), u.connect(M.inputs[0]), v.connect(g.gain), b.connect(y.gain), T.connect(x.gain), M.connect(A.gain), g.connect(c, 0, 0), x.connect(c, 0, 0), y.connect(c, 0, 1), A.connect(c, 0, 1), [g, x, y, A]
                        })(e, c, h, f);
                        throw i()
                    };
                return (t, {
                    channelCount: r,
                    channelCountMode: o,
                    pan: a,
                    ...s
                }) => {
                    if ("max" === o) throw i();
                    const l = e(t, {...s, channelCount: 1, channelCountMode: o, numberOfInputs: 2
                        }),
                        c = n(t, {...s, channelCount: r, channelCountMode: o, gain: 1
                        }),
                        h = n(t, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            gain: a
                        });
                    let f = u(t, r, c, h, l);
                    return Object.defineProperty(h.gain, "defaultValue", {
                        get: () => 0
                    }), Le({get bufferSize() {},
                        get channelCount() {
                            return c.channelCount
                        },
                        set channelCount(e) {
                            c.channelCount !== e && (c.disconnect(), f.forEach(e => e.disconnect()), f = u(t, e, c, h, l)), c.channelCount = e
                        },
                        get channelCountMode() {
                            return c.channelCountMode
                        },
                        set channelCountMode(e) {
                            if ("clamped-max" === e || "max" === e) throw i();
                            c.channelCountMode = e
                        },
                        get channelInterpretation() {
                            return c.channelInterpretation
                        },
                        set channelInterpretation(e) {
                            c.channelInterpretation = e
                        },
                        get context() {
                            return c.context
                        },
                        get inputs() {
                            return [c]
                        },
                        get numberOfInputs() {
                            return c.numberOfInputs
                        },
                        get numberOfOutputs() {
                            return c.numberOfOutputs
                        },
                        get pan() {
                            return h.gain
                        },
                        addEventListener: (...e) => c.addEventListener(e[0], e[1], e[2]),
                        dispatchEvent: (...e) => c.dispatchEvent(e[0]),
                        removeEventListener: (...e) => c.removeEventListener(e[0], e[1], e[2])
                    }, l)
                }
            })(wt, Tt, Mt, Wt, je),
            $t = ((e, t, n) => (r, i) => e(r, e => {
                const o = i.channelCountMode;
                if ("clamped-max" === o) throw n();
                if (void 0 === r.createStereoPanner) return t(r, i);
                const a = e.createStereoPanner();
                return De(a, i), Fe(a, i, "pan"), Object.defineProperty(a, "channelCountMode", {
                    get: () => o,
                    set: e => {
                        if (e !== o) throw n()
                    }
                }), a
            }))(tt, Zt, je),
            Jt = ((e, t, n, r, i) => (class extends i {
                constructor(i, o = He) {
                    const a = x(i),
                        s = {...He, ...o
                        },
                        l = t(a, s),
                        u = r(a);
                    super(i, l, u ? n() : null), this._pan = e(i, u, l.pan, 1, -1)
                }
                get pan() {
                    return this._pan
                }
            }))(mt, $t, (e => () => {
                let t = null;
                return {
                    render: (n, r) => (null === t && (t = (async(t, n) => {
                        let r = O(t);
                        if (D(r, n)) await K(t.context, n, t.pan);
                        else {
                            const i = {
                                channelCount: r.channelCount,
                                channelCountMode: r.channelCountMode,
                                channelInterpretation: r.channelInterpretation,
                                pan: r.pan.value
                            };
                            r = e(n, i), await Z(t.context, n, t.pan, r.pan)
                        }
                        return void 0 !== r.inputs ? await k(t, n, r.inputs[0]) : await k(t, n, r), r
                    })(n, r)), t)
                }
            })($t), $e, ot),
            en = (e => () => {
                let t = null;
                return {
                    render: (n, r) => (null === t && (t = (async(t, n) => {
                        let r = O(t);
                        if (!D(r, n)) {
                            const t = {
                                channelCount: r.channelCount,
                                channelCountMode: r.channelCountMode,
                                channelInterpretation: r.channelInterpretation,
                                curve: r.curve,
                                oversample: r.oversample
                            };
                            r = e(n, t)
                        }
                        return void 0 !== r.inputs ? await k(t, n, r.inputs[0]) : await k(t, n, r), r
                    })(n, r)), t)
                }
            })(Wt),
            tn = ((e, t, n, r, i) => (class extends i {
                constructor(e, i = Qe) {
                    const o = x(e),
                        a = {...Qe, ...i
                        },
                        s = t(o, a);
                    super(e, s, r(o) ? n() : null), this._isCurveNullified = !1, this._nativeWaveShaperNode = s
                }
                get curve() {
                    return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve
                }
                set curve(t) {
                    if (null === t) this._isCurveNullified = !0, this._nativeWaveShaperNode.curve = new Float32Array([0, 0]);
                    else {
                        if (t.length < 2) throw e();
                        this._isCurveNullified = !1, this._nativeWaveShaperNode.curve = t
                    }
                }
                get oversample() {
                    return this._nativeWaveShaperNode.oversample
                }
                set oversample(e) {
                    this._nativeWaveShaperNode.oversample = e
                }
            }))(w, Wt, en, $e, ot),
            nn = (e => null !== e && e.isSecureContext)(Ke),
            rn = nn ? ((e, t, n, r) => (i, o, a = {
                credentials: "omit"
            }) => {
                const s = x(i),
                    l = new URL(o, location.href).toString();
                if (void 0 !== s.audioWorklet) return n(o).then(e => {
                    const [t, n] = M(e, l), i = new Blob([`${t};(registerProcessor=>{${n}\n})((n,p)=>registerProcessor(n,class extends p{constructor(o){const{hasNoOutput,...q}=o.parameterData;if(hasNoOutput===1){super({...o,numberOfOutputs:0,outputChannelCount:[],parameterData:q});this._h=true}else{super(o);this._h=false}}process(i,o,p){return super.process(i,(this._h)?[]:o,p)}}))`], {
                        type: "application/javascript; charset=utf-8"
                    }), o = URL.createObjectURL(i), u = r(s);
                    return (null !== u ? u : s).audioWorklet.addModule(o, a).then(() => URL.revokeObjectURL(o)).catch(e => {
                        throw URL.revokeObjectURL(o), e
                    })
                });
                const u = E.get(i);
                if (void 0 !== u && u.has(o)) return Promise.resolve();
                const c = R.get(i);
                if (void 0 !== c) {
                    const e = c.get(o);
                    if (void 0 !== e) return e
                }
                const h = n(o).then(e => {
                    const [t, n] = M(e, l);
                    return (e => new Promise((t, n) => {
                        const r = document.head;
                        if (null === r) n(new SyntaxError);
                        else {
                            const i = document.createElement("script"),
                                o = new Blob([e], {
                                    type: "application/javascript"
                                }),
                                a = URL.createObjectURL(o),
                                s = window.onerror,
                                l = () => {
                                    window.onerror = s, URL.revokeObjectURL(a)
                                };
                            window.onerror = ((e, t, r, i, o) => t === a || t === location.href && 1 === r && 1 === i ? (l(), n(o), !1) : null !== s ? s(e, t, r, i, o) : void 0), i.onerror = (() => {
                                l(), n(new SyntaxError)
                            }), i.onload = (() => {
                                l(), t()
                            }), i.src = a, i.type = "module", r.appendChild(i)
                        }
                    }))(`${t};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,currentFrame,currentTime,global,registerProcessor,sampleRate,self,window)=>{${n}\n})})(window,'_AWGS')`)
                }).then(() => {
                    const e = Object.create(null, {
                            currentFrame: {
                                get: () => s.currentTime * s.sampleRate
                            },
                            currentTime: {
                                get: () => s.currentTime
                            },
                            sampleRate: {
                                get: () => s.sampleRate
                            }
                        }),
                        n = window._AWGS.pop();
                    if (void 0 === n) throw new SyntaxError;
                    n(class {}, e.currentFrame, e.currentTime, void 0, (e, n) => {
                        if ("" === e.trim()) throw t();
                        const r = v.get(s);
                        if (void 0 !== r) {
                            if (r.has(e)) throw t();
                            C(n), P(n.parameterDescriptors), r.set(e, n)
                        } else C(n), P(n.parameterDescriptors), v.set(s, new Map([
                            [e, n]
                        ]))
                    }, e.sampleRate, void 0, void 0)
                }).catch(t => {
                    if ("SyntaxError" === t.name) throw e();
                    throw t
                });
                return void 0 === c ? R.set(i, new Map([
                    [o, h]
                ])) : c.set(o, h), h.then(() => {
                    const e = E.get(i);
                    void 0 === e ? E.set(i, new Set([o])) : e.add(o)
                }).catch(() => {}).then(() => {
                    const e = R.get(i);
                    void 0 !== e && e.delete(o)
                }), h
            })(h, je, (e => async t => {
                try {
                    const e = await fetch(t);
                    if (e.ok) return e.text()
                } catch (e) {}
                throw e()
            })(h), et) : void 0,
            on = ((e, t) => n => {
                if (null === t) throw new Error("The native AudioContext constructor is missing.");
                return n instanceof t || e(n)
            })($e, Je),
            an = ((e, t, n, r, i, o, a, s, l, u, c, h, f, d, p, m, _, g, v, y) => (class extends p {
                constructor(t, n) {
                    super(t, n), this._nativeContext = t, this._audioWorklet = void 0 === e ? void 0 : {
                        addModule: (t, n) => e(this, t, n)
                    }
                }
                get audioWorklet() {
                    return this._audioWorklet
                }
                createAnalyser() {
                    return new t(this)
                }
                createBiquadFilter() {
                    return new i(this)
                }
                createBuffer(e, t, r) {
                    return new n({
                        length: t,
                        numberOfChannels: e,
                        sampleRate: r
                    })
                }
                createBufferSource() {
                    return new r(this)
                }
                createChannelMerger(e = 6) {
                    return new o(this, {
                        numberOfInputs: e
                    })
                }
                createChannelSplitter(e = 6) {
                    return new a(this, {
                        numberOfOutputs: e
                    })
                }
                createConstantSource() {
                    return new s(this)
                }
                createConvolver() {
                    return new l(this)
                }
                createDelay(e = 1) {
                    return new c(this, {
                        maxDelayTime: e
                    })
                }
                createDynamicsCompressor() {
                    return new h(this)
                }
                createGain() {
                    return new f(this)
                }
                createIIRFilter(e, t) {
                    return new d(this, {
                        feedback: t,
                        feedforward: e
                    })
                }
                createOscillator() {
                    return new m(this)
                }
                createPanner() {
                    return new _(this)
                }
                createPeriodicWave(e, t, n = {
                    disableNormalization: !1
                }) {
                    return new g(this, {...n, imag: t, real: e
                    })
                }
                createStereoPanner() {
                    return new v(this)
                }
                createWaveShaper() {
                    return new y(this)
                }
                decodeAudioData(e, t, n) {
                    return u(this._nativeContext, e).then(e => ("function" == typeof t && t(e), e)).catch(e => {
                        throw "function" == typeof n && n(e), e
                    })
                }
            }))(rn, at, lt, _t, yt, xt, At, Rt, It, ((e, t, n, r, i, o, a) => (s, l) => {
                const u = r(s) ? s : x(s);
                if (g.has(l)) {
                    const t = e();
                    return Promise.reject(t)
                }
                try {
                    g.add(l)
                } catch (e) {}
                return G(a, () => a(u)) ? ("closed" === u.state && null !== n && i(u) ? new n(1, 1, u.sampleRate) : u).decodeAudioData(l).catch(e => {
                    if (e instanceof DOMException && "NotSupportedError" === e.name) throw new TypeError;
                    throw e
                }).then(e => (G(o, () => o(e)) || j(e), e)) : new Promise((e, n) => {
                    const r = () => {
                            try {
                                (e => {
                                    const {
                                        port1: t
                                    } = new MessageChannel;
                                    t.postMessage(e, [e])
                                })(l)
                            } catch (e) {}
                        },
                        i = e => {
                            n(e), r()
                        };
                    try {
                        u.decodeAudioData(l, t => {
                            "function" != typeof t.copyFromChannel && (X(t), V(t)), r(), e(t)
                        }, e => {
                            i(null === e ? t() : e)
                        })
                    } catch (e) {
                        i(e)
                    }
                })
            })(() => {
                try {
                    return new DOMException("", "DataCloneError")
                } catch (e) {
                    return e.code = 25, e.name = "DataCloneError", e
                }
            }, () => {
                try {
                    return new DOMException("", "EncodingError")
                } catch (e) {
                    return e.code = 0, e.name = "EncodingError", e
                }
            }, Ze, on, $e, L, Ee), Dt, Ft, Nt, Ut, Xt, zt, Qt, Kt, Jt, tn),
            sn = ((e, t, n, r) => (class extends r {
                constructor(r, i) {
                    const o = Pe(r);
                    if (n(o)) throw t();
                    const a = {...Ce, ...i
                        },
                        s = e(o, a);
                    super(r, s, null), this._mediaElement = a.mediaElement, this._nativeMediaElementAudioSourceNode = s
                }
                get mediaElement() {
                    return void 0 === this._nativeMediaElementAudioSourceNode.mediaElement ? this._mediaElement : this._nativeMediaElementAudioSourceNode.mediaElement
                }
            }))((e => (t, n) => e(t, e => e.createMediaElementSource(n.mediaElement)))(tt), je, $e, ot),
            ln = ((e, t, n, r) => (class extends r {
                constructor(r, i) {
                    const o = Pe(r);
                    if (n(o)) throw t();
                    const a = {...Re, ...i
                        },
                        s = e(o, a);
                    super(r, s, null), this._mediaStream = a.mediaStream, this._nativeMediaStreamAudioSourceNode = s
                }
                get mediaStream() {
                    return void 0 === this._nativeMediaStreamAudioSourceNode.mediaStream ? this._mediaStream : this._nativeMediaStreamAudioSourceNode.mediaStream
                }
            }))(((e, t) => (n, {
                mediaStream: r
            }) => {
                const i = t(n, e => e.createMediaStreamSource("mediaStream" in MediaStreamAudioSourceNode.prototype ? r : r.clone()));
                if (0 === r.getAudioTracks().length) throw e();
                return i
            })(w, tt), je, $e, ot),
            un = (((e, t, n, r, i, o) => (class extends e {
                constructor(e = {}) {
                    if (null === o) throw new Error;
                    const t = new o(e);
                    if (null === t) throw n();
                    if (!$(e.latencyHint)) throw new TypeError(`The provided value '${e.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
                    super(t, t.destination.channelCount);
                    const {
                        latencyHint: r
                    } = e, {
                        sampleRate: i
                    } = t;
                    if (this._baseLatency = "number" == typeof t.baseLatency ? t.baseLatency : "balanced" === r ? 512 / i : "interactive" === r || void 0 === r ? 256 / i : "playback" === r ? 1024 / i : 128 * Math.max(2, Math.min(128, Math.round(r * i / 128))) / i, this._nativeAudioContext = t, this._state = null, "running" === t.state) {
                        this._state = "suspended";
                        const e = () => {
                            "suspended" === this._state && (this._state = null), t.removeEventListener("statechange", e)
                        };
                        t.addEventListener("statechange", e)
                    }
                }
                get baseLatency() {
                    return this._baseLatency
                }
                get state() {
                    return null !== this._state ? this._state : this._nativeAudioContext.state
                }
                close() {
                    return "closed" === this.state ? this._nativeAudioContext.close().then(() => {
                        throw t()
                    }) : ("suspended" === this._state && (this._state = null), this._nativeAudioContext.close())
                }
                createMediaElementSource(e) {
                    return new r(this, {
                        mediaElement: e
                    })
                }
                createMediaStreamSource(e) {
                    return new i(this, {
                        mediaStream: e
                    })
                }
                resume() {
                    return "suspended" === this._state ? new Promise((e, t) => {
                        const n = () => {
                            this._nativeAudioContext.removeEventListener("statechange", n), "running" === this._nativeAudioContext.state ? e() : this.resume().then(e, t)
                        };
                        this._nativeAudioContext.addEventListener("statechange", n)
                    }) : this._nativeAudioContext.resume().catch(e => {
                        if (void 0 === e || 15 === e.code) throw t();
                        throw e
                    })
                }
                suspend() {
                    return this._nativeAudioContext.suspend().catch(e => {
                        if (void 0 === e) throw t();
                        throw e
                    })
                }
            }))(an, w, qe, sn, ln, Je), (e => (t, n, r = 0, i = 0) => {
                const o = t[r];
                if (void 0 === o) throw e();
                return _e(n) ? o.connect(n, 0, i) : o.connect(n, 0)
            })(U)),
            cn = (e => (t, n, r, i = 0) => void 0 === n ? t.forEach(e => e.disconnect()) : "number" == typeof n ? be(e, t, n).disconnect() : _e(n) ? void 0 === r ? t.forEach(e => e.disconnect(n)) : void 0 === i ? be(e, t, r).disconnect(n, 0) : be(e, t, r).disconnect(n, 0, i) : void 0 === r ? t.forEach(e => e.disconnect(n)) : be(e, t, r).disconnect(n, 0))(U),
            hn = ((e, t, n, r, i, o, a, s, l, u) => (c, h, f, d) => {
                if (0 === d.numberOfInputs && 0 === d.numberOfOutputs) throw l();
                if (void 0 !== d.outputChannelCount) {
                    if (d.outputChannelCount.length !== d.numberOfOutputs) throw t();
                    if (d.outputChannelCount.some(e => e < 1)) throw l()
                }
                if ("explicit" !== d.channelCountMode) throw l();
                const p = d.channelCount * d.numberOfInputs,
                    m = d.outputChannelCount.reduce((e, t) => e + t, 0),
                    _ = void 0 === f.parameterDescriptors ? 0 : f.parameterDescriptors.length;
                if (p + _ > 6 || m > 6) throw l();
                const g = new MessageChannel,
                    v = [],
                    b = [];
                for (let e = 0; e < d.numberOfInputs; e += 1) v.push(a(c, {
                    channelCount: d.channelCount,
                    channelCountMode: d.channelCountMode,
                    channelInterpretation: d.channelInterpretation,
                    gain: 1
                })), b.push(i(c, {
                    channelCount: d.channelCount,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    numberOfOutputs: d.channelCount
                }));
                const w = [];
                if (void 0 !== f.parameterDescriptors)
                    for (const {
                            defaultValue: e,
                            maxValue: t,
                            minValue: n
                        }
                        of f.parameterDescriptors) {
                        const r = o(c, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            offset: void 0 === e ? 0 : e
                        });
                        Object.defineProperties(r.offset, {
                            defaultValue: {
                                get: () => void 0 === e ? 0 : e
                            },
                            maxValue: {
                                get: () => void 0 === t ? 3.4028234663852886e38 : t
                            },
                            minValue: {
                                get: () => void 0 === n ? -3.4028234663852886e38 : n
                            }
                        }), w.push(r)
                    }
                const x = r(c, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "speakers",
                        numberOfInputs: Math.max(1, p + _)
                    }),
                    T = Be(h, c.sampleRate),
                    A = s(c, T, p + _, Math.max(1, m)),
                    M = i(c, {
                        channelCount: Math.max(1, m),
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        numberOfOutputs: Math.max(1, m)
                    }),
                    P = [];
                for (let e = 0; e < d.numberOfOutputs; e += 1) P.push(r(c, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    numberOfInputs: d.outputChannelCount[e]
                }));
                for (let e = 0; e < d.numberOfInputs; e += 1) {
                    v[e].connect(b[e]);
                    for (let t = 0; t < d.channelCount; t += 1) b[e].connect(x, t, e * d.channelCount + t)
                }
                const C = new ae(void 0 === f.parameterDescriptors ? [] : f.parameterDescriptors.map(({
                    name: e
                }, t) => {
                    const n = w[t];
                    return n.connect(x, 0, p + t), n.start(0), [e, n.offset]
                }));
                x.connect(A), d.numberOfOutputs > 0 && A.connect(M);
                for (let e = 0, t = 0; e < d.numberOfOutputs; e += 1) {
                    const n = P[e];
                    for (let r = 0; r < d.outputChannelCount[e]; r += 1) M.connect(n, t + r, r);
                    t += d.outputChannelCount[e]
                }
                let R = d.channelInterpretation,
                    E = null;
                const I = 0 === d.numberOfOutputs ? [A] : P,
                    O = {get bufferSize() {
                            return T
                        },
                        get channelCount() {
                            return d.channelCount
                        },
                        set channelCount(e) {
                            throw n()
                        },
                        get channelCountMode() {
                            return d.channelCountMode
                        },
                        set channelCountMode(e) {
                            throw n()
                        },
                        get channelInterpretation() {
                            return R
                        },
                        set channelInterpretation(e) {
                            for (const t of v) t.channelInterpretation = e;
                            R = e
                        },
                        get context() {
                            return A.context
                        },
                        get inputs() {
                            return v
                        },
                        get numberOfInputs() {
                            return d.numberOfInputs
                        },
                        get numberOfOutputs() {
                            return d.numberOfOutputs
                        },
                        get onprocessorerror() {
                            return E
                        },
                        set onprocessorerror(e) {
                            "function" == typeof E && O.removeEventListener("processorerror", E), "function" == typeof(E = "function" == typeof e ? e : null) && O.addEventListener("processorerror", E)
                        },
                        get parameters() {
                            return C
                        },
                        get port() {
                            return g.port2
                        },
                        addEventListener: (...e) => A.addEventListener(e[0], e[1], e[2]),
                        connect: (...t) => e(I, t[0], t[1], t[2]),
                        disconnect: (...e) => u(I, e[0], e[1], e[2]),
                        dispatchEvent: (...e) => A.dispatchEvent(e[0]),
                        removeEventListener: (...e) => A.removeEventListener(e[0], e[1], e[2])
                    };
                f.prototype.port = g.port1;
                let D = null;
                ((e, t, n, r) => {
                    let i = y.get(e);
                    void 0 === i && (i = new WeakMap, y.set(e, i));
                    const o = Ge(n, r);
                    return i.set(t, o), o
                })(c, O, f, d).then(e => D = e);
                const S = he(d.numberOfInputs, d.channelCount),
                    N = he(d.numberOfOutputs, d.outputChannelCount),
                    k = void 0 === f.parameterDescriptors ? [] : f.parameterDescriptors.reduce((e, {
                        name: t
                    }) => ({...e, [t]: new Float32Array(128)
                    }), {});
                let B = !0;
                return A.onaudioprocess = (({
                    inputBuffer: e,
                    outputBuffer: t
                }) => {
                    if (null !== D)
                        for (let n = 0; n < T; n += 128) {
                            for (let t = 0; t < d.numberOfInputs; t += 1)
                                for (let r = 0; r < d.channelCount; r += 1) ue(e, S[t], r, r, n);
                            void 0 !== f.parameterDescriptors && f.parameterDescriptors.forEach(({
                                name: t
                            }, r) => {
                                ue(e, k, t, p + r, n)
                            });
                            for (let e = 0; e < d.numberOfInputs; e += 1)
                                for (let t = 0; t < d.outputChannelCount[e]; t += 1) 0 === N[e][t].byteLength && (N[e][t] = new Float32Array(128));
                            try {
                                const e = F(O),
                                    r = S.map((t, n) => 0 === e.inputs[n].size ? [new Float32Array(0)] : t),
                                    i = D.process(r, N, k);
                                B = i;
                                for (let e = 0, r = 0; e < d.numberOfOutputs; e += 1) {
                                    for (let i = 0; i < d.outputChannelCount[e]; i += 1) ce(t, N[e], i, r + i, n);
                                    r += d.outputChannelCount[e]
                                }
                            } catch (e) {
                                B = !1, O.dispatchEvent(new ErrorEvent("processorerror"))
                            }
                            if (!B) {
                                A.onaudioprocess = null;
                                break
                            }
                        }
                }), O
            })(un, U, w, wt, Tt, Ct, Mt, kt, je, cn),
            fn = ((e, t, n, r, i) => (o, a, s, l, u, c) => {
                if (null !== s) try {
                    const n = t(o, e => i(e) && 0 !== c.numberOfInputs && 0 === c.numberOfOutputs ? new s(e, l, {...c, numberOfOutputs: 1, outputChannelCount: [1], parameterData: {...c.parameterData, hasNoOutput: 1
                        }
                    }) : new s(e, l, c));
                    return Object.defineProperties(n, {
                        channelCount: {
                            get: () => c.channelCount,
                            set: () => {
                                throw e()
                            }
                        },
                        channelCountMode: {
                            get: () => "explicit",
                            set: () => {
                                throw e()
                            }
                        }
                    }), n
                } catch (e) {
                    if (11 === e.code) throw r();
                    throw e
                }
                if (void 0 === u) throw r();
                return (e => {
                    const {
                        port1: t
                    } = new MessageChannel;
                    try {
                        t.postMessage(e)
                    } finally {
                        t.close()
                    }
                })(c), n(o, a, u, c)
            })(w, tt, hn, je, $e),
            dn = (e => null === e ? null : e.hasOwnProperty("AudioWorkletNode") ? e.AudioWorkletNode : null)(Ke),
            pn = ((e, t, n, r, i, o, a, s, l, u) => (c, h, f) => {
                let d = null;
                return {
                    render: (p, m) => (null === d && (d = (async(d, p) => {
                        let m = O(d);
                        if (null === s) {
                            if (void 0 === f) throw new Error("Missing the processor definition.");
                            if (null === l) throw new Error("Missing the native (Offline)AudioContext constructor.");
                            const s = d.channelCount * d.numberOfInputs,
                                c = void 0 === f.parameterDescriptors ? 0 : f.parameterDescriptors.length,
                                m = new l(s + c, 128 * Math.ceil(d.context.length / 128), p.sampleRate),
                                _ = [],
                                g = [];
                            for (let e = 0; e < h.numberOfInputs; e += 1) _.push(o(m, {
                                channelCount: h.channelCount,
                                channelCountMode: h.channelCountMode,
                                channelInterpretation: h.channelInterpretation,
                                gain: 1
                            })), g.push(r(m, {
                                channelCount: h.channelCount,
                                channelCountMode: "explicit",
                                channelInterpretation: "discrete",
                                numberOfOutputs: h.channelCount
                            }));
                            const v = await Promise.all(Array.from(d.parameters.values()).map(async e => {
                                    const t = i(m, {
                                        channelCount: 1,
                                        channelCountMode: "explicit",
                                        channelInterpretation: "discrete",
                                        offset: e.value
                                    });
                                    return await Z(d.context, m, e, t.offset), t
                                })),
                                y = n(m, {
                                    channelCount: 1,
                                    channelCountMode: "explicit",
                                    channelInterpretation: "speakers",
                                    numberOfInputs: Math.max(1, s + c)
                                });
                            for (let e = 0; e < h.numberOfInputs; e += 1) {
                                _[e].connect(g[e]);
                                for (let t = 0; t < h.channelCount; t += 1) g[e].connect(y, t, e * h.channelCount + t)
                            }
                            for (const [e, t] of v.entries()) t.connect(y, 0, s + e), t.start(0);
                            return y.connect(m.destination), Promise.all(_.map(e => k(d, m, e))).then(() => u(m)).then(async i => {
                                const o = t(p),
                                    s = h.outputChannelCount.reduce((e, t) => e + t, 0),
                                    l = r(p, {
                                        channelCount: Math.max(1, s),
                                        channelCountMode: "explicit",
                                        channelInterpretation: "discrete",
                                        numberOfOutputs: Math.max(1, s)
                                    }),
                                    u = [];
                                for (let e = 0; e < d.numberOfOutputs; e += 1) u.push(n(p, {
                                    channelCount: 1,
                                    channelCountMode: "explicit",
                                    channelInterpretation: "speakers",
                                    numberOfInputs: h.outputChannelCount[e]
                                }));
                                const c = await fe(d, i, p, h, f);
                                null !== c && (o.buffer = c, o.start(0)), o.connect(l);
                                for (let e = 0, t = 0; e < d.numberOfOutputs; e += 1) {
                                    const n = u[e];
                                    for (let r = 0; r < h.outputChannelCount[e]; r += 1) l.connect(n, t + r, r);
                                    t += h.outputChannelCount[e]
                                }
                                const m = 0 === h.numberOfOutputs ? [l] : u;
                                return o.connect = ((...t) => e(m, t[0], t[1], t[2])), o.disconnect = ((...e) => a(m, e[0], e[1], e[2])), o
                            })
                        }
                        if (D(m, p))
                            for (const [e, t] of d.parameters.entries()) await K(d.context, p, t, m.parameters.get(e));
                        else {
                            m = new s(p, c);
                            for (const [e, t] of d.parameters.entries()) await Z(d.context, p, t, m.parameters.get(e))
                        }
                        return await k(d, p, m), m
                    })(p, m)), d)
                }
            })(un, dt, wt, Tt, Ct, Mt, cn, dn, Ze, Gt),
            mn = (nn && ((e, t, n, r, i, o, a) => (class extends a {
                constructor(a, s, l = se) {
                    const u = x(a),
                        c = i(u),
                        h = (e => ({...e, outputChannelCount: void 0 !== e.outputChannelCount ? e.outputChannelCount : 1 === e.numberOfInputs && 1 === e.numberOfOutputs ? [e.channelCount] : le(e.numberOfOutputs), processorOptions: null === e.processorOptions ? {} : e.processorOptions
                        }))({...se, ...l
                        }),
                        f = v.get(u),
                        d = void 0 === f ? void 0 : f.get(s),
                        p = n(u, c ? null : a.baseLatency, o, s, d, h),
                        m = c ? t(s, h, d) : null;
                    super(a, p, m);
                    const _ = [];
                    if (p.parameters.forEach((t, n) => {
                            const r = e(a, c, t);
                            _.push([n, r])
                        }), this._nativeAudioWorkletNode = p, this._numberOfOutputs = 0 === l.numberOfOutputs ? 0 : this._nativeAudioWorkletNode.numberOfOutputs, this._onprocessorerror = null, this._parameters = new ae(_), "closed" !== a.state) {
                        const e = new r(a, {
                            gain: 0
                        });
                        try {
                            this.connect(e).connect(a.destination)
                        } catch (e) {
                            if ("IndexSizeError" !== e.name) throw e
                        }
                    }
                }
                get numberOfOutputs() {
                    return this._numberOfOutputs
                }
                get onprocessorerror() {
                    return this._onprocessorerror
                }
                set onprocessorerror(e) {
                    const t = Y(this, e);
                    this._nativeAudioWorkletNode.onprocessorerror = t;
                    const n = this._nativeAudioWorkletNode.onprocessorerror;
                    this._onprocessorerror = n === t ? e : n
                }
                get parameters() {
                    return null === this._parameters ? this._nativeAudioWorkletNode.parameters : this._parameters
                }
                get port() {
                    return this._nativeAudioWorkletNode.port
                }
            }))(mt, pn, fn, Nt, $e, dn, ot), ((e, t, n, r) => (class extends n {
                constructor(e = {}) {
                    if (null === r) throw new Error;
                    const n = new r(e);
                    if (null === n) throw t();
                    if (!$(e.latencyHint)) throw new TypeError(`The provided value '${e.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
                    super(n, n.destination.channelCount);
                    const {
                        latencyHint: i
                    } = e, {
                        sampleRate: o
                    } = n;
                    if (this._baseLatency = "number" == typeof n.baseLatency ? n.baseLatency : "balanced" === i ? 512 / o : "interactive" === i || void 0 === i ? 256 / o : "playback" === i ? 1024 / o : 128 * Math.max(2, Math.min(128, Math.round(i * o / 128))) / o, this._nativeAudioContext = n, this._state = null, "running" === n.state) {
                        this._state = "suspended";
                        const e = () => {
                            "suspended" === this._state && (this._state = null), n.removeEventListener("statechange", e)
                        };
                        n.addEventListener("statechange", e)
                    }
                }
                get baseLatency() {
                    return this._baseLatency
                }
                get state() {
                    return null !== this._state ? this._state : this._nativeAudioContext.state
                }
                close() {
                    return "closed" === this.state ? this._nativeAudioContext.close().then(() => {
                        throw e()
                    }) : ("suspended" === this._state && (this._state = null), this._nativeAudioContext.close())
                }
                resume() {
                    return "suspended" === this._state ? new Promise((e, t) => {
                        const n = () => {
                            this._nativeAudioContext.removeEventListener("statechange", n), "running" === this._nativeAudioContext.state ? e() : this.resume().then(e, t)
                        };
                        this._nativeAudioContext.addEventListener("statechange", n)
                    }) : this._nativeAudioContext.resume().catch(t => {
                        if (void 0 === t || 15 === t.code) throw e();
                        throw t
                    })
                }
                suspend() {
                    return this._nativeAudioContext.suspend().catch(t => {
                        if (void 0 === t) throw e();
                        throw t
                    })
                }
            }))(w, qe, Xt, Je), ((e, t) => (n, r, i) => {
                if (null === t) throw new Error;
                try {
                    return new t(n, r, i)
                } catch (t) {
                    if ("IndexSizeError" === t.name || "SyntaxError" === t.name) throw e();
                    throw t
                }
            })(je, Ze)),
            _n = ((e, t) => (n, r) => N(n).render(n, r).then(() => e(r)).then(e => ("function" != typeof e.copyFromChannel ? (X(e), V(e)) : G(t, () => t(e)) || j(e), e)))(Gt, L);
        ((e, t, n, r) => (class extends n {
            constructor(e) {
                const {
                    length: n,
                    numberOfChannels: r,
                    sampleRate: i
                } = {...Ie, ...e
                }, o = t(r, n, i);
                G(Ee, () => Ee(o)) || o.addEventListener("statechange", (() => {
                    let e = 0;
                    const t = n => {
                        "running" === this._state && (e > 0 ? (o.removeEventListener("statechange", t), n.stopImmediatePropagation(), this._waitForThePromiseToSettle(n)) : e += 1)
                    };
                    return t
                })()), super(o, r), this._length = n, this._nativeOfflineAudioContext = o, this._state = null
            }
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state
            }
            startRendering() {
                return "running" === this._state ? Promise.reject(e()) : (this._state = "running", r(this.destination, this._nativeOfflineAudioContext).then(e => (this._state = null, e)).catch(e => {
                    throw this._state = null, e
                }))
            }
            _waitForThePromiseToSettle(e) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(e) : setTimeout(() => this._waitForThePromiseToSettle(e))
            }
        }))(w, mn, Xt, _n), ((e, t, n, r) => (class extends e {
            constructor(e, t, r) {
                let i;
                if ("number" == typeof e && void 0 !== t && void 0 !== r) i = {
                    length: t,
                    numberOfChannels: e,
                    sampleRate: r
                };
                else {
                    if ("object" != typeof e) throw new Error("The given parameters are not valid.");
                    i = e
                }
                const {
                    length: o,
                    numberOfChannels: a,
                    sampleRate: s
                } = {...Ve, ...i
                }, l = n(a, o, s);
                G(Ee, () => Ee(l)) || l.addEventListener("statechange", (() => {
                    let e = 0;
                    const t = n => {
                        "running" === this._state && (e > 0 ? (l.removeEventListener("statechange", t), n.stopImmediatePropagation(), this._waitForThePromiseToSettle(n)) : e += 1)
                    };
                    return t
                })()), super(l, a), this._length = o, this._nativeOfflineAudioContext = l, this._state = null
            }
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state
            }
            startRendering() {
                return "running" === this._state ? Promise.reject(t()) : (this._state = "running", r(this.destination, this._nativeOfflineAudioContext).then(e => (this._state = null, e)).catch(e => {
                    throw this._state = null, e
                }))
            }
            _waitForThePromiseToSettle(e) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(e) : setTimeout(() => this._waitForThePromiseToSettle(e))
            }
        }))(an, w, mn, _n);
        var gn = n("./node_modules/detect-gpu/build/detect-gpu.min.js");

        function vn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var yn = Object(gn.getGPUTier)({
                mobileBenchmarkPercentages: [10, 40, 30, 20],
                desktopBenchmarkPercentages: [10, 40, 30, 20]
            }),
            bn = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var t = yn.tier.split("_");
                    this.gpuTier = {
                        levelTier: parseInt(t[3], 10),
                        isMobile: -1 !== t.findIndex(function(e) {
                            return "MOBILE" === e
                        }),
                        isDesk: -1 !== t.findIndex(function(e) {
                            return "DESKTOP" === e
                        }),
                        type: -1 !== t.findIndex(function(e) {
                            return "DESKTOP" === e
                        }) ? "desktop" : "mobile"
                    }
                }
                var t, n, r;
                return t = e, (n = [{
                    key: "getBestGPUSettings",
                    value: function() {
                        var e = 33,
                            t = 320,
                            n = 1;
                        return this.gpuTier.isMobile ? 0 === this.gpuTier.levelTier ? (t = 320, e = 30) : 1 === this.gpuTier.levelTier ? (t = 320, e = 35) : 2 === this.gpuTier.levelTier ? (t = 400, e = 40) : 3 === this.gpuTier.levelTier && (e = 60, t = 512 * (n = window.devicePixelRatio)) : this.gpuTier.isDesk && (e = 60, t = 600, this.gpuTier.levelTier >= 2 && (t = 512 * (n = window.devicePixelRatio))), {
                            fps: e,
                            bufferSize: t,
                            ratio: n
                        }
                    }
                }]) && vn(t.prototype, n), r && vn(t, r), e
            }(),
            wn = n("./node_modules/gsap/TweenLite.js");
        /*!
         * VERSION: 2.1.2
         * DATE: 2019-03-01
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         **/
        wn.e._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
            var e = function(e) {
                    var t, n = [],
                        r = e.length;
                    for (t = 0; t !== r; n.push(e[t++]));
                    return n
                },
                t = function(e, t, n) {
                    var r, i, o = e.cycle;
                    for (r in o) i = o[r], e[r] = "function" == typeof i ? i(n, t[n], t) : i[n % i.length];
                    delete e.cycle
                },
                n = function(e) {
                    if ("function" == typeof e) return e;
                    var t = "object" == typeof e ? e : {
                            each: e
                        },
                        n = t.ease,
                        r = t.from || 0,
                        i = t.base || 0,
                        o = {},
                        a = isNaN(r),
                        s = t.axis,
                        l = {
                            center: .5,
                            end: 1
                        }[r] || 0;
                    return function(e, u, c) {
                        var h, f, d, p, m, _, g, v, y, b = (c || t).length,
                            w = o[b];
                        if (!w) {
                            if (!(y = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                                for (g = -1 / 0; g < (g = c[y++].getBoundingClientRect().left) && y < b;);
                                y--
                            }
                            for (w = o[b] = [], h = a ? Math.min(y, b) * l - .5 : r % y, f = a ? b * l / y - .5 : r / y | 0, g = 0, v = 1 / 0, _ = 0; _ < b; _++) d = _ % y - h, p = f - (_ / y | 0), w[_] = m = s ? Math.abs("y" === s ? p : d) : Math.sqrt(d * d + p * p), m > g && (g = m), m < v && (v = m);
                            w.max = g - v, w.min = v, w.v = b = t.amount || t.each * (y > b ? b : s ? "y" === s ? b / y : y : Math.max(y, b / y)) || 0, w.b = b < 0 ? i - b : i
                        }
                        return b = (w[e] - w.min) / w.max, w.b + (n ? n.getRatio(b) : b) * w.v
                    }
                },
                r = function(e, t, n) {
                    wn.f.call(this, e, t, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = r.prototype.render
                },
                i = wn.f._internals,
                o = i.isSelector,
                a = i.isArray,
                s = r.prototype = wn.f.to({}, .1, {}),
                l = [];
            r.version = "2.1.2", s.constructor = r, s.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = wn.f.killTweensOf, r.getTweensOf = wn.f.getTweensOf, r.lagSmoothing = wn.f.lagSmoothing, r.ticker = wn.f.ticker, r.render = wn.f.render, r.distribute = n, s.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), wn.f.prototype.invalidate.call(this)
            }, s.updateTo = function(e, t) {
                var n, r = this.ratio,
                    i = this.vars.immediateRender || e.immediateRender;
                for (n in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e) this.vars[n] = e[n];
                if (this._initted || i)
                    if (t) this._initted = !1, i && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && wn.f._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var o = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                } else if (this._initted = !1, this._init(), this._time > 0 || i)
                    for (var a, s = 1 / (1 - r), l = this._firstPT; l;) a = l.s + l.c, l.c *= s, l.s = a - l.c, l = l._next;
                return this
            }, s.render = function(e, t, n) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var r, o, a, s, l, u, c, h, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                    p = this._time,
                    m = this._totalTime,
                    _ = this._cycle,
                    g = this._duration,
                    v = this._rawPrevTime;
                if (e >= d - 1e-8 && e >= 0 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, o = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (v < 0 || e <= 0 && e >= -1e-8 || 1e-8 === v && "isPause" !== this.data) && v !== e && (n = !0, v > 1e-8 && (o = "onReverseComplete")), this._rawPrevTime = h = !t || e || v === e ? e : 1e-8)) : e < 1e-8 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && v > 0) && (o = "onReverseComplete", r = this._reversed), e > -1e-8 ? e = 0 : e < 0 && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || n) && (v >= 0 && (n = !0), this._rawPrevTime = h = !t || e || v === e ? e : 1e-8)), this._initted || (n = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (s = g + this._repeatDelay, this._cycle = this._totalTime / s >> 0, 0 !== this._cycle && this._cycle === this._totalTime / s && m <= e && this._cycle--, this._time = this._totalTime - this._cycle * s, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time, (f = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== f || this._initted ? this._yoyoEase = f = !0 === f ? this._ease : f instanceof wn.b ? f : wn.b.map[f] : (f = this.vars.ease, this._yoyoEase = f = f ? f instanceof wn.b ? f : "function" == typeof f ? new wn.b(f, this.vars.easeParams) : wn.b.map[f] || wn.f.defaultEase : wn.f.defaultEase)), this.ratio = f ? 1 - f.getRatio((g - this._time) / g) : 0)), this._time > g ? this._time = g : this._time < 0 && (this._time = 0)), this._easeType && !f ? (l = this._time / g, (1 === (u = this._easeType) || 3 === u && l >= .5) && (l = 1 - l), 3 === u && (l *= 2), 1 === (c = this._easePower) ? l *= l : 2 === c ? l *= l * l : 3 === c ? l *= l * l * l : 4 === c && (l *= l * l * l * l), this.ratio = 1 === u ? 1 - l : 2 === u ? l : this._time / g < .5 ? l / 2 : 1 - l / 2) : f || (this.ratio = this._ease.getRatio(this._time / g))), p !== this._time || n || _ !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = m, this._rawPrevTime = v, this._cycle = _, i.lazyTweens.push(this), void(this._lazy = [e, t]);
                        !this._time || r || f ? r && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / g)
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== p && e >= 0 && (this._active = !0), 0 === m && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, !0, n) : o || (o = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== g || t || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, !0, n), t || (this._totalTime !== m || o) && this._callback("onUpdate")), this._cycle !== _ && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), o && (this._gc && !n || (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, !0, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this._callback(o), 0 === g && 1e-8 === this._rawPrevTime && 1e-8 !== h && (this._rawPrevTime = 0)))
                } else m !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
            }, r.to = function(e, t, n) {
                return new r(e, t, n)
            }, r.from = function(e, t, n) {
                return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new r(e, t, n)
            }, r.fromTo = function(e, t, n, i) {
                return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new r(e, t, i)
            }, r.staggerTo = r.allTo = function(i, s, u, c, h, f, d) {
                var p, m, _, g, v = [],
                    y = n(u.stagger || c),
                    b = u.cycle,
                    w = (u.startAt || l).cycle;
                for (a(i) || ("string" == typeof i && (i = wn.f.selector(i) || i), o(i) && (i = e(i))), p = (i = i || []).length - 1, _ = 0; _ <= p; _++) {
                    for (g in m = {}, u) m[g] = u[g];
                    if (b && (t(m, i, _), null != m.duration && (s = m.duration, delete m.duration)), w) {
                        for (g in w = m.startAt = {}, u.startAt) w[g] = u.startAt[g];
                        t(m.startAt, i, _)
                    }
                    m.delay = y(_, i[_], i) + (m.delay || 0), _ === p && h && (m.onComplete = function() {
                        u.onComplete && u.onComplete.apply(u.onCompleteScope || this, arguments), h.apply(d || u.callbackScope || this, f || l)
                    }), v[_] = new r(i[_], s, m)
                }
                return v
            }, r.staggerFrom = r.allFrom = function(e, t, n, i, o, a, s) {
                return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, r.staggerTo(e, t, n, i, o, a, s)
            }, r.staggerFromTo = r.allFromTo = function(e, t, n, i, o, a, s, l) {
                return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, r.staggerTo(e, t, i, o, a, s, l)
            }, r.delayedCall = function(e, t, n, i, o) {
                return new r(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: n,
                    callbackScope: i,
                    onReverseComplete: t,
                    onReverseCompleteParams: n,
                    immediateRender: !1,
                    useFrames: o,
                    overwrite: 0
                })
            }, r.set = function(e, t) {
                return new r(e, 0, t)
            }, r.isTweening = function(e) {
                return wn.f.getTweensOf(e, !0).length > 0
            };
            var u = function(e, t) {
                    for (var n = [], r = 0, i = e._first; i;) i instanceof wn.f ? n[r++] = i : (t && (n[r++] = i), r = (n = n.concat(u(i, t))).length), i = i._next;
                    return n
                },
                c = r.getAllTweens = function(e) {
                    return u(wn.a._rootTimeline, e).concat(u(wn.a._rootFramesTimeline, e))
                };
            r.killAll = function(e, t, n, r) {
                null == t && (t = !0), null == n && (n = !0);
                var i, o, a, s = c(0 != r),
                    l = s.length,
                    u = t && n && r;
                for (a = 0; a < l; a++) o = s[a], (u || o instanceof wn.c || (i = o.target === o.vars.onComplete) && n || t && !i) && (e ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
            }, r.killChildTweensOf = function(t, n) {
                if (null != t) {
                    var s, l, u, c, h, f = i.tweenLookup;
                    if ("string" == typeof t && (t = wn.f.selector(t) || t), o(t) && (t = e(t)), a(t))
                        for (c = t.length; --c > -1;) r.killChildTweensOf(t[c], n);
                    else {
                        for (u in s = [], f)
                            for (l = f[u].target.parentNode; l;) l === t && (s = s.concat(f[u].tweens)), l = l.parentNode;
                        for (h = s.length, c = 0; c < h; c++) n && s[c].totalTime(s[c].totalDuration()), s[c]._enabled(!1, !1)
                    }
                }
            };
            var h = function(e, t, n, r) {
                t = !1 !== t, n = !1 !== n;
                for (var i, o, a = c(r = !1 !== r), s = t && n && r, l = a.length; --l > -1;) o = a[l], (s || o instanceof wn.c || (i = o.target === o.vars.onComplete) && n || t && !i) && o.paused(e)
            };
            return r.pauseAll = function(e, t, n) {
                h(!0, e, t, n)
            }, r.resumeAll = function(e, t, n) {
                h(!1, e, t, n)
            }, r.globalTimeScale = function(e) {
                var t = wn.a._rootTimeline,
                    n = wn.f.ticker.time;
                return arguments.length ? (e = e || 1e-8, t._startTime = n - (n - t._startTime) * t._timeScale / e, t = wn.a._rootFramesTimeline, n = wn.f.ticker.frame, t._startTime = n - (n - t._startTime) * t._timeScale / e, t._timeScale = wn.a._rootTimeline._timeScale = e, e) : t._timeScale
            }, s.progress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
            }, s.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
            }, s.time = function(e, t) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var n = this._duration,
                    r = this._cycle,
                    i = r * (n + this._repeatDelay);
                return e > n && (e = n), this.totalTime(this._yoyo && 1 & r ? n - e + i : this._repeat ? e + i : e, t)
            }, s.duration = function(e) {
                return arguments.length ? wn.a.prototype.duration.call(this, e) : this._duration
            }, s.totalDuration = function(e) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, s.repeat = function(e) {
                return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
            }, s.repeatDelay = function(e) {
                return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
            }, s.yoyo = function(e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, r
        }, !0);
        var xn = wn.g.TweenMax;
        /*!
         * VERSION: 2.1.0
         * DATE: 2019-02-15
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */
        wn.e._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function() {
            var e, t, n, r, i = function() {
                    wn.d.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = i.prototype.setRatio
                },
                o = wn.e._gsDefine.globals,
                a = {},
                s = i.prototype = new wn.d("css");
            s.constructor = i, i.version = "2.1.0", i.API = 2, i.defaultTransformPerspective = 0, i.defaultSkewType = "compensated", i.defaultSmoothOrigin = !0, s = "px", i.suffixMap = {
                top: s,
                right: s,
                bottom: s,
                left: s,
                width: s,
                height: s,
                fontSize: s,
                padding: s,
                margin: s,
                perspective: s,
                lineHeight: ""
            };
            var l, u, c, h, f, d, p, m, _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                b = /(?:\d|\-|\+|=|#|\.)*/g,
                w = /opacity *= *([^)]*)/i,
                x = /opacity:([^;]*)/i,
                T = /alpha\(opacity *=.+?\)/i,
                A = /^(rgb|hsl)/,
                M = /([A-Z])/g,
                P = /-([a-z])/gi,
                C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                R = function(e, t) {
                    return t.toUpperCase()
                },
                E = /(?:Left|Right|Width)/i,
                I = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                D = /,(?=[^\)]*(?:\(|$))/gi,
                S = /[\s,\(]/i,
                F = Math.PI / 180,
                N = 180 / Math.PI,
                k = {},
                B = {
                    style: {}
                },
                G = wn.e.document || {
                    createElement: function() {
                        return B
                    }
                },
                L = function(e, t) {
                    return t && G.createElementNS ? G.createElementNS(t, e) : G.createElement(e)
                },
                U = L("div"),
                X = L("img"),
                j = i._internals = {
                    _specialProps: a
                },
                V = (wn.e.navigator || {}).userAgent || "",
                z = function() {
                    var e = V.indexOf("Android"),
                        t = L("a");
                    return c = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === e || parseFloat(V.substr(e + 8, 2)) > 3), f = c && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6, h = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (d = parseFloat(RegExp.$1)), !!t && (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity))
                }(),
                Y = function(e) {
                    return w.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                W = function(e) {
                    wn.e.console && console.log(e)
                },
                H = "",
                q = "",
                Q = function(e, t) {
                    var n, r, i = (t = t || U).style;
                    if (void 0 !== i[e]) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === i[n[r] + e];);
                    return r >= 0 ? (H = "-" + (q = 3 === r ? "ms" : n[r]).toLowerCase() + "-", q + e) : null
                },
                K = "undefined" != typeof window ? window : G.defaultView || {
                    getComputedStyle: function() {}
                },
                Z = function(e) {
                    return K.getComputedStyle(e)
                },
                $ = i.getStyle = function(e, t, n, r, i) {
                    var o;
                    return z || "opacity" !== t ? (!r && e.style[t] ? o = e.style[t] : (n = n || Z(e)) ? o = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(M, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]), null == i || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : i) : Y(e)
                },
                J = j.convertToPixels = function(e, t, n, r, o) {
                    if ("px" === r || !r && "lineHeight" !== t) return n;
                    if ("auto" === r || !n) return 0;
                    var a, s, l, u = E.test(t),
                        c = e,
                        h = U.style,
                        f = n < 0,
                        d = 1 === n;
                    if (f && (n = -n), d && (n *= 100), "lineHeight" !== t || r)
                        if ("%" === r && -1 !== t.indexOf("border")) a = n / 100 * (u ? e.clientWidth : e.clientHeight);
                        else {
                            if (h.cssText = "border:0 solid red;position:" + $(e, "position") + ";line-height:0;", "%" !== r && c.appendChild && "v" !== r.charAt(0) && "rem" !== r) h[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (c = e.parentNode || G.body, -1 !== $(c, "display").indexOf("flex") && (h.position = "absolute"), s = c._gsCache, l = wn.f.ticker.frame, s && u && s.time === l) return s.width * n / 100;
                                h[u ? "width" : "height"] = n + r
                            }
                            c.appendChild(U), a = parseFloat(U[u ? "offsetWidth" : "offsetHeight"]), c.removeChild(U), u && "%" === r && !1 !== i.cacheWidths && ((s = c._gsCache = c._gsCache || {}).time = l, s.width = a / n * 100), 0 !== a || o || (a = J(e, t, n, r, !0))
                        } else s = Z(e).lineHeight, e.style.lineHeight = n, a = parseFloat(Z(e).lineHeight), e.style.lineHeight = s;
                    return d && (a /= 100), f ? -a : a
                },
                ee = j.calculateOffset = function(e, t, n) {
                    if ("absolute" !== $(e, "position", n)) return 0;
                    var r = "left" === t ? "Left" : "Top",
                        i = $(e, "margin" + r, n);
                    return e["offset" + r] - (J(e, t, parseFloat(i), i.replace(b, "")) || 0)
                },
                te = function(e, t) {
                    var n, r, i, o = {};
                    if (t = t || Z(e))
                        if (n = t.length)
                            for (; --n > -1;) - 1 !== (i = t[n]).indexOf("-transform") && De !== i || (o[i.replace(P, R)] = t.getPropertyValue(i));
                        else
                            for (n in t) - 1 !== n.indexOf("Transform") && Oe !== n || (o[n] = t[n]);
                    else if (t = e.currentStyle || e.style)
                        for (n in t) "string" == typeof n && void 0 === o[n] && (o[n.replace(P, R)] = t[n]);
                    return z || (o.opacity = Y(e)), r = Ye(e, t, !1), o.rotation = r.rotation, o.skewX = r.skewX, o.scaleX = r.scaleX, o.scaleY = r.scaleY, o.x = r.x, o.y = r.y, Fe && (o.z = r.z, o.rotationX = r.rotationX, o.rotationY = r.rotationY, o.scaleZ = r.scaleZ), o.filters && delete o.filters, o
                },
                ne = function(e, t, n, r, i) {
                    var o, a, s, l = {},
                        u = e.style;
                    for (a in n) "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (o = n[a]) || i && i[a]) && -1 === a.indexOf("Origin") && ("number" != typeof o && "string" != typeof o || (l[a] = "auto" !== o || "left" !== a && "top" !== a ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof t[a] || "" === t[a].replace(y, "") ? o : 0 : ee(e, a), void 0 !== u[a] && (s = new ge(u, a, u[a], s))));
                    if (r)
                        for (a in r) "className" !== a && (l[a] = r[a]);
                    return {
                        difs: l,
                        firstMPT: s
                    }
                },
                re = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ie = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                oe = function(e, t, n) {
                    if ("svg" === (e.nodeName + "").toLowerCase()) return (n || Z(e))[t] || 0;
                    if (e.getCTM && je(e)) return e.getBBox()[t] || 0;
                    var r = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        i = re[t],
                        o = i.length;
                    for (n = n || Z(e); --o > -1;) r -= parseFloat($(e, "padding" + i[o], n, !0)) || 0, r -= parseFloat($(e, "border" + i[o] + "Width", n, !0)) || 0;
                    return r
                },
                ae = function(e, t) {
                    if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                    null != e && "" !== e || (e = "0 0");
                    var n, r = e.split(" "),
                        i = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : r[0],
                        o = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : r[1];
                    if (r.length > 3 && !t) {
                        for (r = e.split(", ").join(",").split(","), e = [], n = 0; n < r.length; n++) e.push(ae(r[n]));
                        return e.join(",")
                    }
                    return null == o ? o = "center" === i ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), e = i + " " + o + (r.length > 2 ? " " + r[2] : ""), t && (t.oxp = -1 !== i.indexOf("%"), t.oyp = -1 !== o.indexOf("%"), t.oxr = "=" === i.charAt(1), t.oyr = "=" === o.charAt(1), t.ox = parseFloat(i.replace(y, "")), t.oy = parseFloat(o.replace(y, "")), t.v = e), t || e
                },
                se = function(e, t) {
                    return "function" == typeof e && (e = e(m, p)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
                },
                le = function(e, t) {
                    "function" == typeof e && (e = e(m, p));
                    var n = "string" == typeof e && "=" === e.charAt(1);
                    return "string" == typeof e && "v" === e.charAt(e.length - 2) && (e = (n ? e.substr(0, 2) : 0) + window["inner" + ("vh" === e.substr(-2) ? "Height" : "Width")] * (parseFloat(n ? e.substr(2) : e) / 100)), null == e ? t : n ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                },
                ue = function(e, t, n, r) {
                    var i, o, a, s;
                    return "function" == typeof e && (e = e(m, p)), null == e ? a = t : "number" == typeof e ? a = e : (360, i = e.split("_"), o = ((s = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(i[0].substr(2)) : parseFloat(i[0])) * (-1 === e.indexOf("rad") ? 1 : N) - (s ? 0 : t), i.length && (r && (r[n] = t + o), -1 !== e.indexOf("short") && (o %= 360) !== o % 180 && (o = o < 0 ? o + 360 : o - 360), -1 !== e.indexOf("_cw") && o < 0 ? o = (o + 3599999999640) % 360 - 360 * (o / 360 | 0) : -1 !== e.indexOf("ccw") && o > 0 && (o = (o - 3599999999640) % 360 - 360 * (o / 360 | 0))), a = t + o), a < 1e-6 && a > -1e-6 && (a = 0), a
                },
                ce = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                he = function(e, t, n) {
                    return 255 * (6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                },
                fe = i.parseColor = function(e, t) {
                    var n, r, i, o, a, s, l, u, c, h, f;
                    if (e)
                        if ("number" == typeof e) n = [e >> 16, e >> 8 & 255, 255 & e];
                        else {
                            if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), ce[e]) n = ce[e];
                            else if ("#" === e.charAt(0)) 4 === e.length && (r = e.charAt(1), i = e.charAt(2), o = e.charAt(3), e = "#" + r + r + i + i + o + o), n = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                            else if ("hsl" === e.substr(0, 3))
                                if (n = f = e.match(_), t) {
                                    if (-1 !== e.indexOf("=")) return e.match(g)
                                } else a = Number(n[0]) % 360 / 360, s = Number(n[1]) / 100, r = 2 * (l = Number(n[2]) / 100) - (i = l <= .5 ? l * (s + 1) : l + s - l * s), n.length > 3 && (n[3] = Number(n[3])), n[0] = he(a + 1 / 3, r, i), n[1] = he(a, r, i), n[2] = he(a - 1 / 3, r, i);
                            else n = e.match(_) || ce.transparent;
                            n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3]))
                        } else n = ce.black;
                    return t && !f && (r = n[0] / 255, i = n[1] / 255, o = n[2] / 255, l = ((u = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2, u === c ? a = s = 0 : (h = u - c, s = l > .5 ? h / (2 - u - c) : h / (u + c), a = u === r ? (i - o) / h + (i < o ? 6 : 0) : u === i ? (o - r) / h + 2 : (r - i) / h + 4, a *= 60), n[0] = a + .5 | 0, n[1] = 100 * s + .5 | 0, n[2] = 100 * l + .5 | 0), n
                },
                de = function(e, t) {
                    var n, r, i, o = e.match(pe) || [],
                        a = 0,
                        s = "";
                    if (!o.length) return e;
                    for (n = 0; n < o.length; n++) r = o[n], a += (i = e.substr(a, e.indexOf(r, a) - a)).length + r.length, 3 === (r = fe(r, t)).length && r.push(1), s += i + (t ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                    return s + e.substr(a)
                },
                pe = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (s in ce) pe += "|" + s + "\\b";
            pe = new RegExp(pe + ")", "gi"), i.colorStringFilter = function(e) {
                var t, n = e[0] + " " + e[1];
                pe.test(n) && (t = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), e[0] = de(e[0], t), e[1] = de(e[1], t)), pe.lastIndex = 0
            }, wn.f.defaultStringFilter || (wn.f.defaultStringFilter = i.colorStringFilter);
            var me = function(e, t, n, r) {
                    if (null == e) return function(e) {
                        return e
                    };
                    var i, o = t ? (e.match(pe) || [""])[0] : "",
                        a = e.split(o).join("").match(v) || [],
                        s = e.substr(0, e.indexOf(a[0])),
                        l = ")" === e.charAt(e.length - 1) ? ")" : "",
                        u = -1 !== e.indexOf(" ") ? " " : ",",
                        c = a.length,
                        h = c > 0 ? a[0].replace(_, "") : "";
                    return c ? i = t ? function(e) {
                        var t, f, d, p;
                        if ("number" == typeof e) e += h;
                        else if (r && D.test(e)) {
                            for (p = e.replace(D, "|").split("|"), d = 0; d < p.length; d++) p[d] = i(p[d]);
                            return p.join(",")
                        }
                        if (t = (e.match(pe) || [o])[0], d = (f = e.split(t).join("").match(v) || []).length, c > d--)
                            for (; ++d < c;) f[d] = n ? f[(d - 1) / 2 | 0] : a[d];
                        return s + f.join(u) + u + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                    } : function(e) {
                        var t, o, f;
                        if ("number" == typeof e) e += h;
                        else if (r && D.test(e)) {
                            for (o = e.replace(D, "|").split("|"), f = 0; f < o.length; f++) o[f] = i(o[f]);
                            return o.join(",")
                        }
                        if (f = (t = e.match(v) || []).length, c > f--)
                            for (; ++f < c;) t[f] = n ? t[(f - 1) / 2 | 0] : a[f];
                        return s + t.join(u) + l
                    } : function(e) {
                        return e
                    }
                },
                _e = function(e) {
                    return e = e.split(","),
                        function(t, n, r, i, o, a, s) {
                            var l, u = (n + "").split(" ");
                            for (s = {}, l = 0; l < 4; l++) s[e[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                            return i.parse(t, s, o, a)
                        }
                },
                ge = (j._setPluginRatio = function(e) {
                    this.plugin.setRatio(e);
                    for (var t, n, r, i, o, a = this.data, s = a.proxy, l = a.firstMPT; l;) t = s[l.v], l.r ? t = l.r(t) : t < 1e-6 && t > -1e-6 && (t = 0), l.t[l.p] = t, l = l._next;
                    if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, s.rotation, this.t, this._tween) : s.rotation), 1 === e || 0 === e)
                        for (l = a.firstMPT, o = 1 === e ? "e" : "b"; l;) {
                            if ((n = l.t).type) {
                                if (1 === n.type) {
                                    for (i = n.xs0 + n.s + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                    n[o] = i
                                }
                            } else n[o] = n.s + n.xs0;
                            l = l._next
                        }
                }, function(e, t, n, r, i) {
                    this.t = e, this.p = t, this.v = n, this.r = i, r && (r._prev = this, this._next = r)
                }),
                ve = (j._parseToProxy = function(e, t, n, r, i, o) {
                    var a, s, l, u, c, h = r,
                        f = {},
                        d = {},
                        p = n._transform,
                        m = k;
                    for (n._transform = null, k = t, r = c = n.parse(e, t, r, i), k = m, o && (n._transform = p, h && (h._prev = null, h._prev && (h._prev._next = null))); r && r !== h;) {
                        if (r.type <= 1 && (d[s = r.p] = r.s + r.c, f[s] = r.s, o || (u = new ge(r, "s", s, u, r.r), r.c = 0), 1 === r.type))
                            for (a = r.l; --a > 0;) l = "xn" + a, d[s = r.p + "_" + l] = r.data[l], f[s] = r[l], o || (u = new ge(r, l, s, u, r.rxp[l]));
                        r = r._next
                    }
                    return {
                        proxy: f,
                        end: d,
                        firstMPT: u,
                        pt: c
                    }
                }, j.CSSPropTween = function(t, n, i, o, a, s, l, u, c, h, f) {
                    this.t = t, this.p = n, this.s = i, this.c = o, this.n = l || n, t instanceof ve || r.push(this.n), this.r = u ? "function" == typeof u ? u : Math.round : u, this.type = s || 0, c && (this.pr = c, e = !0), this.b = void 0 === h ? i : h, this.e = void 0 === f ? i + o : f, a && (this._next = a, a._prev = this)
                }),
                ye = function(e, t, n, r, i, o) {
                    var a = new ve(e, t, n, r - n, i, -1, o);
                    return a.b = n, a.e = a.xs0 = r, a
                },
                be = i.parseComplex = function(e, t, n, r, o, a, s, u, c, h) {
                    n = n || a || "", "function" == typeof r && (r = r(m, p)), s = new ve(e, t, 0, 0, s, h ? 2 : 1, null, !1, u, n, r), r += "", o && pe.test(r + n) && (r = [n, r], i.colorStringFilter(r), n = r[0], r = r[1]);
                    var f, d, v, y, b, w, x, T, A, M, P, C, R, E = n.split(", ").join(",").split(" "),
                        I = r.split(", ").join(",").split(" "),
                        O = E.length,
                        S = !1 !== l;
                    for (-1 === r.indexOf(",") && -1 === n.indexOf(",") || (-1 !== (r + n).indexOf("rgb") || -1 !== (r + n).indexOf("hsl") ? (E = E.join(" ").replace(D, ", ").split(" "), I = I.join(" ").replace(D, ", ").split(" ")) : (E = E.join(" ").split(",").join(", ").split(" "), I = I.join(" ").split(",").join(", ").split(" ")), O = E.length), O !== I.length && (O = (E = (a || "").split(" ")).length), s.plugin = c, s.setRatio = h, pe.lastIndex = 0, f = 0; f < O; f++)
                        if (y = E[f], b = I[f] + "", (T = parseFloat(y)) || 0 === T) s.appendXtra("", T, se(b, T), b.replace(g, ""), !(!S || -1 === b.indexOf("px")) && Math.round, !0);
                        else if (o && pe.test(y)) C = ")" + ((C = b.indexOf(")") + 1) ? b.substr(C) : ""), R = -1 !== b.indexOf("hsl") && z, M = b, y = fe(y, R), b = fe(b, R), (A = y.length + b.length > 6) && !z && 0 === b[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(I[f]).join("transparent")) : (z || (A = !1), R ? s.appendXtra(M.substr(0, M.indexOf("hsl")) + (A ? "hsla(" : "hsl("), y[0], se(b[0], y[0]), ",", !1, !0).appendXtra("", y[1], se(b[1], y[1]), "%,", !1).appendXtra("", y[2], se(b[2], y[2]), A ? "%," : "%" + C, !1) : s.appendXtra(M.substr(0, M.indexOf("rgb")) + (A ? "rgba(" : "rgb("), y[0], b[0] - y[0], ",", Math.round, !0).appendXtra("", y[1], b[1] - y[1], ",", Math.round).appendXtra("", y[2], b[2] - y[2], A ? "," : C, Math.round), A && (y = y.length < 4 ? 1 : y[3], s.appendXtra("", y, (b.length < 4 ? 1 : b[3]) - y, C, !1))), pe.lastIndex = 0;
                    else if (w = y.match(_)) {
                        if (!(x = b.match(g)) || x.length !== w.length) return s;
                        for (v = 0, d = 0; d < w.length; d++) P = w[d], M = y.indexOf(P, v), s.appendXtra(y.substr(v, M - v), Number(P), se(x[d], P), "", !(!S || "px" !== y.substr(M + P.length, 2)) && Math.round, 0 === d), v = M + P.length;
                        s["xs" + s.l] += y.substr(v)
                    } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + b : b;
                    if (-1 !== r.indexOf("=") && s.data) {
                        for (C = s.xs0 + s.data.s, f = 1; f < s.l; f++) C += s["xs" + f] + s.data["xn" + f];
                        s.e = C + s["xs" + f]
                    }
                    return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                },
                we = 9;
            for ((s = ve.prototype).l = s.pr = 0; --we > 0;) s["xn" + we] = 0, s["xs" + we] = "";
            s.xs0 = "", s._next = s._prev = s.xfirst = s.data = s.plugin = s.setRatio = s.rxp = null, s.appendXtra = function(e, t, n, r, i, o) {
                var a = this,
                    s = a.l;
                return a["xs" + s] += o && (s || a["xs" + s]) ? " " + e : e || "", n || 0 === s || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", s > 0 ? (a.data["xn" + s] = t + n, a.rxp["xn" + s] = i, a["xn" + s] = t, a.plugin || (a.xfirst = new ve(a, "xn" + s, t, n, a.xfirst || a, 0, a.n, i, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                    s: t + n
                }, a.rxp = {}, a.s = t, a.c = n, a.r = i, a)) : (a["xs" + s] += t + (r || ""), a)
            };
            var xe = function(e, t) {
                    t = t || {}, this.p = t.prefix && Q(e) || e, a[e] = a[this.p] = this, this.format = t.formatter || me(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.allowFunc = t.allowFunc, this.pr = t.priority || 0
                },
                Te = j._registerComplexSpecialProp = function(e, t, n) {
                    "object" != typeof t && (t = {
                        parser: n
                    });
                    var r, i = e.split(","),
                        o = t.defaultValue;
                    for (n = n || [o], r = 0; r < i.length; r++) t.prefix = 0 === r && t.prefix, t.defaultValue = n[r] || o, new xe(i[r], t)
                },
                Ae = j._registerPluginProp = function(e) {
                    if (!a[e]) {
                        var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                        Te(e, {
                            parser: function(e, n, r, i, s, l, u) {
                                var c = o.com.greensock.plugins[t];
                                return c ? (c._cssRegister(), a[r].parse(e, n, r, i, s, l, u)) : (W("Error: " + t + " js file not loaded."), s)
                            }
                        })
                    }
                };
            (s = xe.prototype).parseComplex = function(e, t, n, r, i, o) {
                var a, s, l, u, c, h, f = this.keyword;
                if (this.multi && (D.test(n) || D.test(t) ? (s = t.replace(D, "|").split("|"), l = n.replace(D, "|").split("|")) : f && (s = [t], l = [n])), l) {
                    for (u = l.length > s.length ? l.length : s.length, a = 0; a < u; a++) t = s[a] = s[a] || this.dflt, n = l[a] = l[a] || this.dflt, f && (c = t.indexOf(f)) !== (h = n.indexOf(f)) && (-1 === h ? s[a] = s[a].split(f).join("") : -1 === c && (s[a] += " " + f));
                    t = s.join(", "), n = l.join(", ")
                }
                return be(e, this.p, t, n, this.clrs, this.dflt, r, this.pr, i, o)
            }, s.parse = function(e, t, r, i, o, a, s) {
                return this.parseComplex(e.style, this.format($(e, this.p, n, !1, this.dflt)), this.format(t), o, a)
            }, i.registerSpecialProp = function(e, t, n) {
                Te(e, {
                    parser: function(e, r, i, o, a, s, l) {
                        var u = new ve(e, i, 0, 0, a, 2, i, !1, n);
                        return u.plugin = s, u.setRatio = t(e, r, o._tween, i), u
                    },
                    priority: n
                })
            }, i.useSVGTransformAttr = !0;
            var Me, Pe, Ce, Re, Ee, Ie = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Oe = Q("transform"),
                De = H + "transform",
                Se = Q("transformOrigin"),
                Fe = null !== Q("perspective"),
                Ne = j.Transform = function() {
                    this.perspective = parseFloat(i.defaultTransformPerspective) || 0, this.force3D = !(!1 === i.defaultForce3D || !Fe) && (i.defaultForce3D || "auto")
                },
                ke = wn.e.SVGElement,
                Be = function(e, t, n) {
                    var r, i = G.createElementNS("http://www.w3.org/2000/svg", e),
                        o = /([a-z])([A-Z])/g;
                    for (r in n) i.setAttributeNS(null, r.replace(o, "$1-$2").toLowerCase(), n[r]);
                    return t.appendChild(i), i
                },
                Ge = G.documentElement || {},
                Le = (Ee = d || /Android/i.test(V) && !wn.e.chrome, G.createElementNS && !Ee && (Pe = Be("svg", Ge), Re = (Ce = Be("rect", Pe, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Ce.style[Se] = "50% 50%", Ce.style[Oe] = "scaleX(0.5)", Ee = Re === Ce.getBoundingClientRect().width && !(h && Fe), Ge.removeChild(Pe)), Ee),
                Ue = function(e, t, n, r, o, a) {
                    var s, l, u, c, h, f, d, p, m, _, g, v, y, b, w = e._gsTransform,
                        x = ze(e, !0);
                    w && (y = w.xOrigin, b = w.yOrigin), (!r || (s = r.split(" ")).length < 2) && (0 === (d = e.getBBox()).x && 0 === d.y && d.width + d.height === 0 && (d = {
                        x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                        y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                    }), s = [(-1 !== (t = ae(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * d.width : parseFloat(t[0])) + d.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * d.height : parseFloat(t[1])) + d.y]), n.xOrigin = c = parseFloat(s[0]), n.yOrigin = h = parseFloat(s[1]), r && x !== Ve && (f = x[0], d = x[1], p = x[2], m = x[3], _ = x[4], g = x[5], (v = f * m - d * p) && (l = c * (m / v) + h * (-p / v) + (p * g - m * _) / v, u = c * (-d / v) + h * (f / v) - (f * g - d * _) / v, c = n.xOrigin = s[0] = l, h = n.yOrigin = s[1] = u)), w && (a && (n.xOffset = w.xOffset, n.yOffset = w.yOffset, w = n), o || !1 !== o && !1 !== i.defaultSmoothOrigin ? (l = c - y, u = h - b, w.xOffset += l * x[0] + u * x[2] - l, w.yOffset += l * x[1] + u * x[3] - u) : w.xOffset = w.yOffset = 0), a || e.setAttribute("data-svg-origin", s.join(" "))
                },
                Xe = function(e) {
                    var t, n = L("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        r = this.parentNode,
                        i = this.nextSibling,
                        o = this.style.cssText;
                    if (Ge.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
                        t = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Xe
                    } catch (e) {} else this._originalGetBBox && (t = this._originalGetBBox());
                    return i ? r.insertBefore(this, i) : r.appendChild(this), Ge.removeChild(n), this.style.cssText = o, t
                },
                je = function(e) {
                    return !(!ke || !e.getCTM || e.parentNode && !e.ownerSVGElement || ! function(e) {
                        try {
                            return e.getBBox()
                        } catch (t) {
                            return Xe.call(e, !0)
                        }
                    }(e))
                },
                Ve = [1, 0, 0, 1, 0, 0],
                ze = function(e, t) {
                    var n, r, i, o, a, s, l, u = e._gsTransform || new Ne,
                        c = e.style;
                    if (Oe ? r = $(e, De, null, !0) : e.currentStyle && (r = (r = e.currentStyle.filter.match(I)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), u.x || 0, u.y || 0].join(",") : ""), n = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, Oe && n && !e.offsetParent && (o = c.display, c.display = "block", (l = e.parentNode) && e.offsetParent || (a = 1, s = e.nextSibling, Ge.appendChild(e)), n = !(r = $(e, De, null, !0)) || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, o ? c.display = o : Qe(c, "display"), a && (s ? l.insertBefore(e, s) : l ? l.appendChild(e) : Ge.removeChild(e))), (u.svg || e.getCTM && je(e)) && (n && -1 !== (c[Oe] + "").indexOf("matrix") && (r = c[Oe], n = 0), i = e.getAttribute("transform"), n && i && (r = "matrix(" + (i = e.transform.baseVal.consolidate().matrix).a + "," + i.b + "," + i.c + "," + i.d + "," + i.e + "," + i.f + ")", n = 0)), n) return Ve;
                    for (i = (r || "").match(_) || [], we = i.length; --we > -1;) o = Number(i[we]), i[we] = (a = o - (o |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
                    return t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i
                },
                Ye = j.getTransform = function(e, t, n, r) {
                    if (e._gsTransform && n && !r) return e._gsTransform;
                    var o, a, s, l, u, c, h = n && e._gsTransform || new Ne,
                        f = h.scaleX < 0,
                        d = Fe && (parseFloat($(e, Se, t, !1, "0 0 0").split(" ")[2]) || h.zOrigin) || 0,
                        p = parseFloat(i.defaultTransformPerspective) || 0;
                    if (h.svg = !(!e.getCTM || !je(e)), h.svg && (Ue(e, $(e, Se, t, !1, "50% 50%") + "", h, e.getAttribute("data-svg-origin")), Me = i.useSVGTransformAttr || Le), (o = ze(e)) !== Ve) {
                        if (16 === o.length) {
                            var m, _, g, v, y, b = o[0],
                                w = o[1],
                                x = o[2],
                                T = o[3],
                                A = o[4],
                                M = o[5],
                                P = o[6],
                                C = o[7],
                                R = o[8],
                                E = o[9],
                                I = o[10],
                                O = o[12],
                                D = o[13],
                                S = o[14],
                                F = o[11],
                                k = Math.atan2(P, I);
                            h.zOrigin && (O = R * (S = -h.zOrigin) - o[12], D = E * S - o[13], S = I * S + h.zOrigin - o[14]), h.rotationX = k * N, k && (m = A * (v = Math.cos(-k)) + R * (y = Math.sin(-k)), _ = M * v + E * y, g = P * v + I * y, R = A * -y + R * v, E = M * -y + E * v, I = P * -y + I * v, F = C * -y + F * v, A = m, M = _, P = g), k = Math.atan2(-x, I), h.rotationY = k * N, k && (_ = w * (v = Math.cos(-k)) - E * (y = Math.sin(-k)), g = x * v - I * y, E = w * y + E * v, I = x * y + I * v, F = T * y + F * v, b = m = b * v - R * y, w = _, x = g), k = Math.atan2(w, b), h.rotation = k * N, k && (m = b * (v = Math.cos(k)) + w * (y = Math.sin(k)), _ = A * v + M * y, g = R * v + E * y, w = w * v - b * y, M = M * v - A * y, E = E * v - R * y, b = m, A = _, R = g), h.rotationX && Math.abs(h.rotationX) + Math.abs(h.rotation) > 359.9 && (h.rotationX = h.rotation = 0, h.rotationY = 180 - h.rotationY), k = Math.atan2(A, M), h.scaleX = (1e5 * Math.sqrt(b * b + w * w + x * x) + .5 | 0) / 1e5, h.scaleY = (1e5 * Math.sqrt(M * M + P * P) + .5 | 0) / 1e5, h.scaleZ = (1e5 * Math.sqrt(R * R + E * E + I * I) + .5 | 0) / 1e5, b /= h.scaleX, A /= h.scaleY, w /= h.scaleX, M /= h.scaleY, Math.abs(k) > 2e-5 ? (h.skewX = k * N, A = 0, "simple" !== h.skewType && (h.scaleY *= 1 / Math.cos(k))) : h.skewX = 0, h.perspective = F ? 1 / (F < 0 ? -F : F) : 0, h.x = O, h.y = D, h.z = S, h.svg && (h.x -= h.xOrigin - (h.xOrigin * b - h.yOrigin * A), h.y -= h.yOrigin - (h.yOrigin * w - h.xOrigin * M))
                        } else if (!Fe || r || !o.length || h.x !== o[4] || h.y !== o[5] || !h.rotationX && !h.rotationY) {
                            var B = o.length >= 6,
                                G = B ? o[0] : 1,
                                L = o[1] || 0,
                                U = o[2] || 0,
                                X = B ? o[3] : 1;
                            h.x = o[4] || 0, h.y = o[5] || 0, s = Math.sqrt(G * G + L * L), l = Math.sqrt(X * X + U * U), u = G || L ? Math.atan2(L, G) * N : h.rotation || 0, c = U || X ? Math.atan2(U, X) * N + u : h.skewX || 0, h.scaleX = s, h.scaleY = l, h.rotation = u, h.skewX = c, Fe && (h.rotationX = h.rotationY = h.z = 0, h.perspective = p, h.scaleZ = 1), h.svg && (h.x -= h.xOrigin - (h.xOrigin * G + h.yOrigin * U), h.y -= h.yOrigin - (h.xOrigin * L + h.yOrigin * X))
                        }
                        for (a in Math.abs(h.skewX) > 90 && Math.abs(h.skewX) < 270 && (f ? (h.scaleX *= -1, h.skewX += h.rotation <= 0 ? 180 : -180, h.rotation += h.rotation <= 0 ? 180 : -180) : (h.scaleY *= -1, h.skewX += h.skewX <= 0 ? 180 : -180)), h.zOrigin = d, h) h[a] < 2e-5 && h[a] > -2e-5 && (h[a] = 0)
                    }
                    return n && (e._gsTransform = h, h.svg && (Me && e.style[Oe] ? wn.f.delayedCall(.001, function() {
                        Qe(e.style, Oe)
                    }) : !Me && e.getAttribute("transform") && wn.f.delayedCall(.001, function() {
                        e.removeAttribute("transform")
                    }))), h
                },
                We = function(e) {
                    var t, n, r = this.data,
                        i = -r.rotation * F,
                        o = i + r.skewX * F,
                        a = (Math.cos(i) * r.scaleX * 1e5 | 0) / 1e5,
                        s = (Math.sin(i) * r.scaleX * 1e5 | 0) / 1e5,
                        l = (Math.sin(o) * -r.scaleY * 1e5 | 0) / 1e5,
                        u = (Math.cos(o) * r.scaleY * 1e5 | 0) / 1e5,
                        c = this.t.style,
                        h = this.t.currentStyle;
                    if (h) {
                        n = s, s = -l, l = -n, t = h.filter, c.filter = "";
                        var f, p, m = this.t.offsetWidth,
                            _ = this.t.offsetHeight,
                            g = "absolute" !== h.position,
                            v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + s + ", M21=" + l + ", M22=" + u,
                            y = r.x + m * r.xPercent / 100,
                            x = r.y + _ * r.yPercent / 100;
                        if (null != r.ox && (y += (f = (r.oxp ? m * r.ox * .01 : r.ox) - m / 2) - (f * a + (p = (r.oyp ? _ * r.oy * .01 : r.oy) - _ / 2) * s), x += p - (f * l + p * u)), v += g ? ", Dx=" + ((f = m / 2) - (f * a + (p = _ / 2) * s) + y) + ", Dy=" + (p - (f * l + p * u) + x) + ")" : ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = t.replace(O, v) : c.filter = v + " " + t, 0 !== e && 1 !== e || 1 === a && 0 === s && 0 === l && 1 === u && (g && -1 === v.indexOf("Dx=0, Dy=0") || w.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && c.removeAttribute("filter")), !g) {
                            var T, A, M, P = d < 8 ? 1 : -1;
                            for (f = r.ieOffsetX || 0, p = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (s < 0 ? -s : s) * _)) / 2 + y), r.ieOffsetY = Math.round((_ - ((u < 0 ? -u : u) * _ + (l < 0 ? -l : l) * m)) / 2 + x), we = 0; we < 4; we++) M = (n = -1 !== (T = h[A = ie[we]]).indexOf("px") ? parseFloat(T) : J(this.t, A, parseFloat(T), T.replace(b, "")) || 0) !== r[A] ? we < 2 ? -r.ieOffsetX : -r.ieOffsetY : we < 2 ? f - r.ieOffsetX : p - r.ieOffsetY, c[A] = (r[A] = Math.round(n - M * (0 === we || 2 === we ? 1 : P))) + "px"
                        }
                    }
                },
                He = j.set3DTransformRatio = j.setTransformRatio = function(e) {
                    var t, n, r, i, o, a, s, l, u, c, f, d, p, m, _, g, v, y, b, w, x = this.data,
                        T = this.t.style,
                        A = x.rotation,
                        M = x.rotationX,
                        P = x.rotationY,
                        C = x.scaleX,
                        R = x.scaleY,
                        E = x.scaleZ,
                        I = x.x,
                        O = x.y,
                        D = x.z,
                        S = x.svg,
                        N = x.perspective,
                        k = x.force3D,
                        B = x.skewY,
                        G = x.skewX;
                    if (B && (G += B, A += B), !((1 !== e && 0 !== e || "auto" !== k || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && k || D || N || P || M || 1 !== E) || Me && S || !Fe) A || G || S ? (A *= F, w = G * F, 1e5, n = Math.cos(A) * C, o = Math.sin(A) * C, r = Math.sin(A - w) * -R, a = Math.cos(A - w) * R, w && "simple" === x.skewType && (t = Math.tan(w - B * F), r *= t = Math.sqrt(1 + t * t), a *= t, B && (t = Math.tan(B * F), n *= t = Math.sqrt(1 + t * t), o *= t)), S && (I += x.xOrigin - (x.xOrigin * n + x.yOrigin * r) + x.xOffset, O += x.yOrigin - (x.xOrigin * o + x.yOrigin * a) + x.yOffset, Me && (x.xPercent || x.yPercent) && (_ = this.t.getBBox(), I += .01 * x.xPercent * _.width, O += .01 * x.yPercent * _.height), I < (_ = 1e-6) && I > -_ && (I = 0), O < _ && O > -_ && (O = 0)), b = (1e5 * n | 0) / 1e5 + "," + (1e5 * o | 0) / 1e5 + "," + (1e5 * r | 0) / 1e5 + "," + (1e5 * a | 0) / 1e5 + "," + I + "," + O + ")", S && Me ? this.t.setAttribute("transform", "matrix(" + b) : T[Oe] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + b) : T[Oe] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + R + "," + I + "," + O + ")";
                    else {
                        if (h && (C < (_ = 1e-4) && C > -_ && (C = E = 2e-5), R < _ && R > -_ && (R = E = 2e-5), !N || x.z || x.rotationX || x.rotationY || (N = 0)), A || G) A *= F, g = n = Math.cos(A), v = o = Math.sin(A), G && (A -= G * F, g = Math.cos(A), v = Math.sin(A), "simple" === x.skewType && (t = Math.tan((G - B) * F), g *= t = Math.sqrt(1 + t * t), v *= t, x.skewY && (t = Math.tan(B * F), n *= t = Math.sqrt(1 + t * t), o *= t))), r = -v, a = g;
                        else {
                            if (!(P || M || 1 !== E || N || S)) return void(T[Oe] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + O + "px," + D + "px)" + (1 !== C || 1 !== R ? " scale(" + C + "," + R + ")" : ""));
                            n = a = 1, r = o = 0
                        }
                        c = 1, i = s = l = u = f = d = 0, p = N ? -1 / N : 0, m = x.zOrigin, _ = 1e-6, ",", "0", (A = P * F) && (g = Math.cos(A), l = -(v = Math.sin(A)), f = p * -v, i = n * v, s = o * v, c = g, p *= g, n *= g, o *= g), (A = M * F) && (t = r * (g = Math.cos(A)) + i * (v = Math.sin(A)), y = a * g + s * v, u = c * v, d = p * v, i = r * -v + i * g, s = a * -v + s * g, c *= g, p *= g, r = t, a = y), 1 !== E && (i *= E, s *= E, c *= E, p *= E), 1 !== R && (r *= R, a *= R, u *= R, d *= R), 1 !== C && (n *= C, o *= C, l *= C, f *= C), (m || S) && (m && (I += i * -m, O += s * -m, D += c * -m + m), S && (I += x.xOrigin - (x.xOrigin * n + x.yOrigin * r) + x.xOffset, O += x.yOrigin - (x.xOrigin * o + x.yOrigin * a) + x.yOffset), I < _ && I > -_ && (I = "0"), O < _ && O > -_ && (O = "0"), D < _ && D > -_ && (D = 0)), b = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(" : "matrix3d(", b += (n < _ && n > -_ ? "0" : n) + "," + (o < _ && o > -_ ? "0" : o) + "," + (l < _ && l > -_ ? "0" : l), b += "," + (f < _ && f > -_ ? "0" : f) + "," + (r < _ && r > -_ ? "0" : r) + "," + (a < _ && a > -_ ? "0" : a), M || P || 1 !== E ? (b += "," + (u < _ && u > -_ ? "0" : u) + "," + (d < _ && d > -_ ? "0" : d) + "," + (i < _ && i > -_ ? "0" : i), b += "," + (s < _ && s > -_ ? "0" : s) + "," + (c < _ && c > -_ ? "0" : c) + "," + (p < _ && p > -_ ? "0" : p) + ",") : b += ",0,0,0,0,1,0,", b += I + "," + O + "," + D + "," + (N ? 1 + -D / N : 1) + ")", T[Oe] = b
                    }
                };
            (s = Ne.prototype).x = s.y = s.z = s.skewX = s.skewY = s.rotation = s.rotationX = s.rotationY = s.zOrigin = s.xPercent = s.yPercent = s.xOffset = s.yOffset = 0, s.scaleX = s.scaleY = s.scaleZ = 1, Te("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(e, t, r, o, a, s, l) {
                    if (o._lastParsedTransform === l) return a;
                    o._lastParsedTransform = l;
                    var u = l.scale && "function" == typeof l.scale ? l.scale : 0;
                    u && (l.scale = u(m, e));
                    var c, h, f, d, _, g, v, y, b, w = e._gsTransform,
                        x = e.style,
                        T = Ie.length,
                        A = l,
                        M = {},
                        P = Ye(e, n, !0, A.parseTransform),
                        C = A.transform && ("function" == typeof A.transform ? A.transform(m, p) : A.transform);
                    if (P.skewType = A.skewType || P.skewType || i.defaultSkewType, o._transform = P, "rotationZ" in A && (A.rotation = A.rotationZ), C && "string" == typeof C && Oe)(h = U.style)[Oe] = C, h.display = "block", h.position = "absolute", -1 !== C.indexOf("%") && (h.width = $(e, "width"), h.height = $(e, "height")), G.body.appendChild(U), c = Ye(U, null, !1), "simple" === P.skewType && (c.scaleY *= Math.cos(c.skewX * F)), P.svg && (g = P.xOrigin, v = P.yOrigin, c.x -= P.xOffset, c.y -= P.yOffset, (A.transformOrigin || A.svgOrigin) && (C = {}, Ue(e, ae(A.transformOrigin), C, A.svgOrigin, A.smoothOrigin, !0), g = C.xOrigin, v = C.yOrigin, c.x -= C.xOffset - P.xOffset, c.y -= C.yOffset - P.yOffset), (g || v) && (y = ze(U, !0), c.x -= g - (g * y[0] + v * y[2]), c.y -= v - (g * y[1] + v * y[3]))), G.body.removeChild(U), c.perspective || (c.perspective = P.perspective), null != A.xPercent && (c.xPercent = le(A.xPercent, P.xPercent)), null != A.yPercent && (c.yPercent = le(A.yPercent, P.yPercent));
                    else if ("object" == typeof A) {
                        if (c = {
                                scaleX: le(null != A.scaleX ? A.scaleX : A.scale, P.scaleX),
                                scaleY: le(null != A.scaleY ? A.scaleY : A.scale, P.scaleY),
                                scaleZ: le(A.scaleZ, P.scaleZ),
                                x: le(A.x, P.x),
                                y: le(A.y, P.y),
                                z: le(A.z, P.z),
                                xPercent: le(A.xPercent, P.xPercent),
                                yPercent: le(A.yPercent, P.yPercent),
                                perspective: le(A.transformPerspective, P.perspective)
                            }, null != (_ = A.directionalRotation))
                            if ("object" == typeof _)
                                for (h in _) A[h] = _[h];
                            else A.rotation = _;
                            "string" == typeof A.x && -1 !== A.x.indexOf("%") && (c.x = 0, c.xPercent = le(A.x, P.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (c.y = 0, c.yPercent = le(A.y, P.yPercent)), c.rotation = ue("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : P.rotation, P.rotation, "rotation", M), Fe && (c.rotationX = ue("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", M), c.rotationY = ue("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", M)), c.skewX = ue(A.skewX, P.skewX), c.skewY = ue(A.skewY, P.skewY)
                    }
                    for (Fe && null != A.force3D && (P.force3D = A.force3D, d = !0), (f = P.force3D || P.z || P.rotationX || P.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == A.scale || (c.scaleZ = 1); --T > -1;)((C = c[b = Ie[T]] - P[b]) > 1e-6 || C < -1e-6 || null != A[b] || null != k[b]) && (d = !0, a = new ve(P, b, P[b], C, a), b in M && (a.e = M[b]), a.xs0 = 0, a.plugin = s, o._overwriteProps.push(a.n));
                    return C = "function" == typeof A.transformOrigin ? A.transformOrigin(m, p) : A.transformOrigin, P.svg && (C || A.svgOrigin) && (g = P.xOffset, v = P.yOffset, Ue(e, ae(C), c, A.svgOrigin, A.smoothOrigin), a = ye(P, "xOrigin", (w ? P : c).xOrigin, c.xOrigin, a, "transformOrigin"), a = ye(P, "yOrigin", (w ? P : c).yOrigin, c.yOrigin, a, "transformOrigin"), g === P.xOffset && v === P.yOffset || (a = ye(P, "xOffset", w ? g : P.xOffset, P.xOffset, a, "transformOrigin"), a = ye(P, "yOffset", w ? v : P.yOffset, P.yOffset, a, "transformOrigin")), C = "0px 0px"), (C || Fe && f && P.zOrigin) && (Oe ? (d = !0, b = Se, C || (C = (C = ($(e, b, n, !1, "50% 50%") + "").split(" "))[0] + " " + C[1] + " " + P.zOrigin + "px"), C += "", (a = new ve(x, b, 0, 0, a, -1, "transformOrigin")).b = x[b], a.plugin = s, Fe ? (h = P.zOrigin, C = C.split(" "), P.zOrigin = (C.length > 2 ? parseFloat(C[2]) : h) || 0, a.xs0 = a.e = C[0] + " " + (C[1] || "50%") + " 0px", (a = new ve(P, "zOrigin", 0, 0, a, -1, a.n)).b = h, a.xs0 = a.e = P.zOrigin) : a.xs0 = a.e = C) : ae(C + "", P)), d && (o._transformType = P.svg && Me || !f && 3 !== this._transformType ? 2 : 3), u && (l.scale = u), a
                },
                allowFunc: !0,
                prefix: !0
            }), Te("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), Te("clipPath", {
                defaultValue: "inset(0px)",
                prefix: !0,
                multi: !0,
                formatter: me("inset(0px 0px 0px 0px)", !1, !0)
            }), Te("borderRadius", {
                defaultValue: "0px",
                parser: function(e, r, i, o, a, s) {
                    r = this.format(r);
                    var l, u, c, h, f, d, p, m, _, g, v, y, b, w, x, T, A = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        M = e.style;
                    for (_ = parseFloat(e.offsetWidth), g = parseFloat(e.offsetHeight), l = r.split(" "), u = 0; u < A.length; u++) this.p.indexOf("border") && (A[u] = Q(A[u])), -1 !== (f = h = $(e, A[u], n, !1, "0px")).indexOf(" ") && (h = f.split(" "), f = h[0], h = h[1]), d = c = l[u], p = parseFloat(f), y = f.substr((p + "").length), (b = "=" === d.charAt(1)) ? (m = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), m *= parseFloat(d), v = d.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(d), v = d.substr((m + "").length)), "" === v && (v = t[i] || y), v !== y && (w = J(e, "borderLeft", p, y), x = J(e, "borderTop", p, y), "%" === v ? (f = w / _ * 100 + "%", h = x / g * 100 + "%") : "em" === v ? (f = w / (T = J(e, "borderLeft", 1, "em")) + "em", h = x / T + "em") : (f = w + "px", h = x + "px"), b && (d = parseFloat(f) + m + v, c = parseFloat(h) + m + v)), a = be(M, A[u], f + " " + h, d + " " + c, !1, "0px", a);
                    return a
                },
                prefix: !0,
                formatter: me("0px 0px 0px 0px", !1, !0)
            }), Te("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(e, t, r, i, o, a) {
                    return be(e.style, r, this.format($(e, r, n, !1, "0px 0px")), this.format(t), !1, "0px", o)
                },
                prefix: !0,
                formatter: me("0px 0px", !1, !0)
            }), Te("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(e, t, r, i, o, a) {
                    var s, l, u, c, h, f, p = "background-position",
                        m = n || Z(e),
                        _ = this.format((m ? d ? m.getPropertyValue(p + "-x") + " " + m.getPropertyValue(p + "-y") : m.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                        g = this.format(t);
                    if (-1 !== _.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (f = $(e, "backgroundImage").replace(C, "")) && "none" !== f) {
                        for (s = _.split(" "), l = g.split(" "), X.setAttribute("src", f), u = 2; --u > -1;)(c = -1 !== (_ = s[u]).indexOf("%")) !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? e.offsetWidth - X.width : e.offsetHeight - X.height, s[u] = c ? parseFloat(_) / 100 * h + "px" : parseFloat(_) / h * 100 + "%");
                        _ = s.join(" ")
                    }
                    return this.parseComplex(e.style, _, g, o, a)
                },
                formatter: ae
            }), Te("backgroundSize", {
                defaultValue: "0 0",
                formatter: function(e) {
                    return "co" === (e += "").substr(0, 2) ? e : ae(-1 === e.indexOf(" ") ? e + " " + e : e)
                }
            }), Te("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), Te("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), Te("transformStyle", {
                prefix: !0
            }), Te("backfaceVisibility", {
                prefix: !0
            }), Te("userSelect", {
                prefix: !0
            }), Te("margin", {
                parser: _e("marginTop,marginRight,marginBottom,marginLeft")
            }), Te("padding", {
                parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), Te("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(e, t, r, i, o, a) {
                    var s, l, u;
                    return d < 9 ? (l = e.currentStyle, u = d < 8 ? " " : ",", s = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", t = this.format(t).split(",").join(u)) : (s = this.format($(e, this.p, n, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, s, t, o, a)
                }
            }), Te("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), Te("autoRound,strictUnits", {
                parser: function(e, t, n, r, i) {
                    return i
                }
            }), Te("border", {
                defaultValue: "0px solid #000",
                parser: function(e, t, r, i, o, a) {
                    var s = $(e, "borderTopWidth", n, !1, "0px"),
                        l = this.format(t).split(" "),
                        u = l[0].replace(b, "");
                    return "px" !== u && (s = parseFloat(s) / J(e, "borderTopWidth", 1, u) + u), this.parseComplex(e.style, this.format(s + " " + $(e, "borderTopStyle", n, !1, "solid") + " " + $(e, "borderTopColor", n, !1, "#000")), l.join(" "), o, a)
                },
                color: !0,
                formatter: function(e) {
                    var t = e.split(" ");
                    return t[0] + " " + (t[1] || "solid") + " " + (e.match(pe) || ["#000"])[0]
                }
            }), Te("borderWidth", {
                parser: _e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), Te("float,cssFloat,styleFloat", {
                parser: function(e, t, n, r, i, o) {
                    var a = e.style,
                        s = "cssFloat" in a ? "cssFloat" : "styleFloat";
                    return new ve(a, s, 0, 0, i, -1, n, !1, 0, a[s], t)
                }
            });
            var qe = function(e) {
                var t, n = this.t,
                    r = n.filter || $(this.data, "filter") || "",
                    i = this.s + this.c * e | 0;
                100 === i && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (n.removeAttribute("filter"), t = !$(this.data, "filter")) : (n.filter = r.replace(T, ""), t = !0)), t || (this.xn1 && (n.filter = r = r || "alpha(opacity=" + i + ")"), -1 === r.indexOf("pacity") ? 0 === i && this.xn1 || (n.filter = r + " alpha(opacity=" + i + ")") : n.filter = r.replace(w, "opacity=" + i))
            };
            Te("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(e, t, r, i, o, a) {
                    var s = parseFloat($(e, "opacity", n, !1, "1")),
                        l = e.style,
                        u = "autoAlpha" === r;
                    return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + s), u && 1 === s && "hidden" === $(e, "visibility", n) && 0 !== t && (s = 0), z ? o = new ve(l, "opacity", s, t - s, o) : ((o = new ve(l, "opacity", 100 * s, 100 * (t - s), o)).xn1 = u ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = e, o.plugin = a, o.setRatio = qe), u && ((o = new ve(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", i._overwriteProps.push(o.n), i._overwriteProps.push(r)), o
                }
            });
            var Qe = function(e, t) {
                    t && (e.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), e.removeProperty(t.replace(M, "-$1").toLowerCase())) : e.removeAttribute(t))
                },
                Ke = function(e) {
                    if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                        this.t.setAttribute("class", 0 === e ? this.b : this.e);
                        for (var t = this.data, n = this.t.style; t;) t.v ? n[t.p] = t.v : Qe(n, t.p), t = t._next;
                        1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            Te("className", {
                parser: function(t, r, i, o, a, s, l) {
                    var u, c, h, f, d, p = t.getAttribute("class") || "",
                        m = t.style.cssText;
                    if ((a = o._classNamePT = new ve(t, i, 0, 0, a, 2)).setRatio = Ke, a.pr = -11, e = !0, a.b = p, c = te(t, n), h = t._gsClassPT) {
                        for (f = {}, d = h.data; d;) f[d.p] = 1, d = d._next;
                        h.setRatio(1)
                    }
                    return t._gsClassPT = a, a.e = "=" !== r.charAt(1) ? r : p.replace(new RegExp("(?:\\s|^)" + r.substr(2) + "(?![\\w-])"), "") + ("+" === r.charAt(0) ? " " + r.substr(2) : ""), t.setAttribute("class", a.e), u = ne(t, c, te(t), l, f), t.setAttribute("class", p), a.data = u.firstMPT, t.style.cssText = m, a = a.xfirst = o.parse(t, u.difs, a, s)
                }
            });
            var Ze = function(e) {
                if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var t, n, r, i, o, s = this.t.style,
                        l = a.transform.parse;
                    if ("all" === this.e) s.cssText = "", i = !0;
                    else
                        for (r = (t = this.e.split(" ").join("").split(",")).length; --r > -1;) n = t[r], a[n] && (a[n].parse === l ? i = !0 : n = "transformOrigin" === n ? Se : a[n].p), Qe(s, n);
                    i && (Qe(s, Oe), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (Te("clearProps", {
                    parser: function(t, n, r, i, o) {
                        return (o = new ve(t, r, 0, 0, o, 2)).setRatio = Ze, o.e = n, o.pr = -10, o.data = i._tween, e = !0, o
                    }
                }), s = "bezier,throwProps,physicsProps,physics2D".split(","), we = s.length; we--;) Ae(s[we]);
            (s = i.prototype)._firstPT = s._lastParsedTransform = s._transform = null, s._onInitTween = function(o, s, h, d) {
                if (!o.nodeType) return !1;
                this._target = p = o, this._tween = h, this._vars = s, m = d, l = s.autoRound, e = !1, t = s.suffixMap || i.suffixMap, n = Z(o), r = this._overwriteProps;
                var _, g, v, y, b, w, T, A, M, P = o.style;
                if (u && "" === P.zIndex && ("auto" !== (_ = $(o, "zIndex", n)) && "" !== _ || this._addLazySet(P, "zIndex", 0)), "string" == typeof s && (y = P.cssText, _ = te(o, n), P.cssText = y + ";" + s, _ = ne(o, _, te(o)).difs, !z && x.test(s) && (_.opacity = parseFloat(RegExp.$1)), s = _, P.cssText = y), s.className ? this._firstPT = g = a.className.parse(o, s.className, "className", this, null, null, s) : this._firstPT = g = this.parse(o, s, null), this._transformType) {
                    for (M = 3 === this._transformType, Oe ? c && (u = !0, "" === P.zIndex && ("auto" !== (T = $(o, "zIndex", n)) && "" !== T || this._addLazySet(P, "zIndex", 0)), f && this._addLazySet(P, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (M ? "visible" : "hidden"))) : P.zoom = 1, v = g; v && v._next;) v = v._next;
                    A = new ve(o, "transform", 0, 0, null, 2), this._linkCSSP(A, null, v), A.setRatio = Oe ? He : We, A.data = this._transform || Ye(o, n, !0), A.tween = h, A.pr = -1, r.pop()
                }
                if (e) {
                    for (; g;) {
                        for (w = g._next, v = y; v && v.pr > g.pr;) v = v._next;
                        (g._prev = v ? v._prev : b) ? g._prev._next = g: y = g, (g._next = v) ? v._prev = g : b = g, g = w
                    }
                    this._firstPT = y
                }
                return !0
            }, s.parse = function(e, r, i, o) {
                var s, u, c, h, f, d, _, g, v, y, w = e.style;
                for (s in r) {
                    if (d = r[s], u = a[s], "function" != typeof d || u && u.allowFunc || (d = d(m, p)), u) i = u.parse(e, d, s, this, i, o, r);
                    else {
                        if ("--" === s.substr(0, 2)) {
                            this._tween._propLookup[s] = this._addTween.call(this._tween, e.style, "setProperty", Z(e).getPropertyValue(s) + "", d + "", s, !1, s);
                            continue
                        }
                        f = $(e, s, n) + "", v = "string" == typeof d, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || v && A.test(d) ? (v || (d = ((d = fe(d)).length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = be(w, s, f, d, !0, "transparent", i, 0, o)) : v && S.test(d) ? i = be(w, s, f, d, !0, null, i, 0, o) : (_ = (c = parseFloat(f)) || 0 === c ? f.substr((c + "").length) : "", "" !== f && "auto" !== f || ("width" === s || "height" === s ? (c = oe(e, s, n), _ = "px") : "left" === s || "top" === s ? (c = ee(e, s, n), _ = "px") : (c = "opacity" !== s ? 0 : 1, _ = "")), (y = v && "=" === d.charAt(1)) ? (h = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), h *= parseFloat(d), g = d.replace(b, "")) : (h = parseFloat(d), g = v ? d.replace(b, "") : ""), "" === g && (g = s in t ? t[s] : _), d = h || 0 === h ? (y ? h + c : h) + g : r[s], _ !== g && ("" === g && "lineHeight" !== s || (h || 0 === h) && c && (c = J(e, s, c, _), "%" === g ? (c /= J(e, s, 100, "%") / 100, !0 !== r.strictUnits && (f = c + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? c /= J(e, s, 1, g) : "px" !== g && (h = J(e, s, h, g), g = "px"), y && (h || 0 === h) && (d = h + c + g))), y && (h += c), !c && 0 !== c || !h && 0 !== h ? void 0 !== w[s] && (d || d + "" != "NaN" && null != d) ? (i = new ve(w, s, h || c || 0, 0, i, -1, s, !1, 0, f, d)).xs0 = "none" !== d || "display" !== s && -1 === s.indexOf("Style") ? d : f : W("invalid " + s + " tween value: " + r[s]) : (i = new ve(w, s, c, h - c, i, 0, s, !1 !== l && ("px" === g || "zIndex" === s), 0, f, d)).xs0 = g)
                    }
                    o && i && !i.plugin && (i.plugin = o)
                }
                return i
            }, s.setRatio = function(e) {
                var t, n, r, i = this._firstPT;
                if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; i;) {
                            if (t = i.c * e + i.s, i.r ? t = i.r(t) : t < 1e-6 && t > -1e-6 && (t = 0), i.type)
                                if (1 === i.type)
                                    if (2 === (r = i.l)) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2;
                                    else if (3 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3;
                            else if (4 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4;
                            else if (5 === r) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4 + i.xn4 + i.xs5;
                            else {
                                for (n = i.xs0 + t + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                i.t[i.p] = n
                            } else -1 === i.type ? i.t[i.p] = i.xs0 : i.setRatio && i.setRatio(e);
                            else i.t[i.p] = t + i.xs0;
                            i = i._next
                        } else
                            for (; i;) 2 !== i.type ? i.t[i.p] = i.b : i.setRatio(e), i = i._next;
                    else
                        for (; i;) {
                            if (2 !== i.type)
                                if (i.r && -1 !== i.type)
                                    if (t = i.r(i.s + i.c), i.type) {
                                        if (1 === i.type) {
                                            for (r = i.l, n = i.xs0 + t + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                            i.t[i.p] = n
                                        }
                                    } else i.t[i.p] = t + i.xs0;
                            else i.t[i.p] = i.e;
                            else i.setRatio(e);
                            i = i._next
                        }
            }, s._enableTransforms = function(e) {
                this._transform = this._transform || Ye(this._target, n, !0), this._transformType = this._transform.svg && Me || !e && 3 !== this._transformType ? 2 : 3
            };
            var $e = function(e) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            s._addLazySet = function(e, t, n) {
                var r = this._firstPT = new ve(e, t, 0, 0, this._firstPT, 2);
                r.e = n, r.setRatio = $e, r.data = this
            }, s._linkCSSP = function(e, t, n, r) {
                return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, r = !0), n ? n._next = e : r || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e
            }, s._mod = function(e) {
                for (var t = this._firstPT; t;) "function" == typeof e[t.p] && (t.r = e[t.p]), t = t._next
            }, s._kill = function(e) {
                var t, n, r, i = e;
                if (e.autoAlpha || e.alpha) {
                    for (n in i = {}, e) i[n] = e[n];
                    i.opacity = 1, i.autoAlpha && (i.visibility = 1)
                }
                for (e.className && (t = this._classNamePT) && ((r = t.xfirst) && r._prev ? this._linkCSSP(r._prev, t._next, r._prev._prev) : r === this._firstPT && (this._firstPT = t._next), t._next && this._linkCSSP(t._next, t._next._next, r._prev), this._classNamePT = null), t = this._firstPT; t;) t.plugin && t.plugin !== n && t.plugin._kill && (t.plugin._kill(e), n = t.plugin), t = t._next;
                return wn.d.prototype._kill.call(this, i)
            };
            var Je = function(e, t, n) {
                var r, i, o, a;
                if (e.slice)
                    for (i = e.length; --i > -1;) Je(e[i], t, n);
                else
                    for (i = (r = e.childNodes).length; --i > -1;) a = (o = r[i]).type, o.style && (t.push(te(o)), n && n.push(o)), 1 !== a && 9 !== a && 11 !== a || !o.childNodes.length || Je(o, t, n)
            };
            return i.cascadeTo = function(e, t, n) {
                var r, i, o, a, s = wn.f.to(e, t, n),
                    l = [s],
                    u = [],
                    c = [],
                    h = [],
                    f = wn.f._internals.reservedProps;
                for (e = s._targets || s.target, Je(e, u, h), s.render(t, !0, !0), Je(e, c), s.render(0, !0, !0), s._enabled(!0), r = h.length; --r > -1;)
                    if ((i = ne(h[r], u[r], c[r])).firstMPT) {
                        for (o in i = i.difs, n) f[o] && (i[o] = n[o]);
                        for (o in a = {}, i) a[o] = u[r][o];
                        l.push(wn.f.fromTo(h[r], t, a, i))
                    }
                return l
            }, wn.d.activate([i]), i
        }, !0);
        var Tn = wn.g.CSSPlugin,
            An = wn.e._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function(e, t, n, r) {
                    var i, o;
                    if ("function" != typeof e.setAttribute) return !1;
                    for (i in t) "function" == typeof(o = t[i]) && (o = o(r, e)), this._addTween(e, "setAttribute", e.getAttribute(i) + "", o + "", i, !1, i), this._overwriteProps.push(i);
                    return !0
                }
            }),
            Mn = wn.e._gsDefine.plugin({
                propName: "roundProps",
                version: "1.7.0",
                priority: -1,
                API: 2,
                init: function(e, t, n) {
                    return this._tween = n, !0
                }
            }),
            Pn = function(e) {
                var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
                return function(n) {
                    return (Math.round(n / e) * e * t | 0) / t
                }
            },
            Cn = function(e, t) {
                for (; e;) e.f || e.blob || (e.m = t || Math.round), e = e._next
            },
            Rn = Mn.prototype;
        /*!
         * VERSION: 0.6.1
         * DATE: 2018-08-27
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */
        Rn._onInitAllProps = function() {
            var e, t, n, r, i = this._tween,
                o = i.vars.roundProps,
                a = {},
                s = i._propLookup.roundProps;
            if ("object" != typeof o || o.push)
                for ("string" == typeof o && (o = o.split(",")), n = o.length; --n > -1;) a[o[n]] = Math.round;
            else
                for (r in o) a[r] = Pn(o[r]);
            for (r in a)
                for (e = i._firstPT; e;) t = e._next, e.pg ? e.t._mod(a) : e.n === r && (2 === e.f && e.t ? Cn(e.t._firstPT, a[r]) : (this._add(e.t, r, e.s, e.c, a[r]), t && (t._prev = e._prev), e._prev ? e._prev._next = t : i._firstPT === e && (i._firstPT = t), e._next = e._prev = null, i._propLookup[r] = s)), e = t;
            return !1
        }, Rn._add = function(e, t, n, r, i) {
            this._addTween(e, t, n, n + r, t, i || Math.round), this._overwriteProps.push(t)
        };
        /*!
         * VERSION: 0.3.1
         * DATE: 2018-08-27
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         **/
        var En = wn.e._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function(e, t, n, r) {
                "object" != typeof t && (t = {
                    rotation: t
                }), this.finals = {};
                var i, o, a, s, l, u, c = !0 === t.useRadians ? 2 * Math.PI : 360;
                for (i in t) "useRadians" !== i && ("function" == typeof(s = t[i]) && (s = s(r, e)), o = (u = (s + "").split("_"))[0], a = parseFloat("function" != typeof e[i] ? e[i] : e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), l = (s = this.finals[i] = "string" == typeof o && "=" === o.charAt(1) ? a + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - a, u.length && (-1 !== (o = u.join("_")).indexOf("short") && (l %= c) !== l % (c / 2) && (l = l < 0 ? l + c : l - c), -1 !== o.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > 1e-6 || l < -1e-6) && (this._addTween(e, i, a, a + l, i), this._overwriteProps.push(i)));
                return !0
            },
            set: function(e) {
                var t;
                if (1 !== e) this._super.setRatio.call(this, e);
                else
                    for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
            }
        });
        En._autoCSS = !0,
            /*!
             * VERSION: 2.1.2
             * DATE: 2019-03-01
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             */
            wn.e._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
                var e = function(e) {
                        wn.c.call(this, e);
                        var t, n, r = this.vars;
                        for (n in this._labels = {}, this.autoRemoveChildren = !!r.autoRemoveChildren, this.smoothChildTiming = !!r.smoothChildTiming, this._sortChildren = !0, this._onUpdate = r.onUpdate, r) t = r[n], i(t) && -1 !== t.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(t));
                        i(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    t = wn.f._internals,
                    n = e._internals = {},
                    r = t.isSelector,
                    i = t.isArray,
                    o = t.lazyTweens,
                    a = t.lazyRender,
                    s = wn.e._gsDefine.globals,
                    l = function(e) {
                        var t, n = {};
                        for (t in e) n[t] = e[t];
                        return n
                    },
                    u = function(e, t, n) {
                        var r, i, o = e.cycle;
                        for (r in o) i = o[r], e[r] = "function" == typeof i ? i(n, t[n], t) : i[n % i.length];
                        delete e.cycle
                    },
                    c = n.pauseCallback = function() {},
                    h = function(e, t, n, r) {
                        var i = "immediateRender";
                        return i in t || (t[i] = !(n && !1 === n[i] || r)), t
                    },
                    f = function(e) {
                        if ("function" == typeof e) return e;
                        var t = "object" == typeof e ? e : {
                                each: e
                            },
                            n = t.ease,
                            r = t.from || 0,
                            i = t.base || 0,
                            o = {},
                            a = isNaN(r),
                            s = t.axis,
                            l = {
                                center: .5,
                                end: 1
                            }[r] || 0;
                        return function(e, u, c) {
                            var h, f, d, p, m, _, g, v, y, b = (c || t).length,
                                w = o[b];
                            if (!w) {
                                if (!(y = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                                    for (g = -1 / 0; g < (g = c[y++].getBoundingClientRect().left) && y < b;);
                                    y--
                                }
                                for (w = o[b] = [], h = a ? Math.min(y, b) * l - .5 : r % y, f = a ? b * l / y - .5 : r / y | 0, g = 0, v = 1 / 0, _ = 0; _ < b; _++) d = _ % y - h, p = f - (_ / y | 0), w[_] = m = s ? Math.abs("y" === s ? p : d) : Math.sqrt(d * d + p * p), m > g && (g = m), m < v && (v = m);
                                w.max = g - v, w.min = v, w.v = b = t.amount || t.each * (y > b ? b : s ? "y" === s ? b / y : y : Math.max(y, b / y)) || 0, w.b = b < 0 ? i - b : i
                            }
                            return b = (w[e] - w.min) / w.max, w.b + (n ? n.getRatio(b) : b) * w.v
                        }
                    },
                    d = e.prototype = new wn.c;
                return e.version = "2.1.2", e.distribute = f, d.constructor = e, d.kill()._gc = d._forcingPlayhead = d._hasPause = !1, d.to = function(e, t, n, r) {
                    var i = n.repeat && s.TweenMax || wn.f;
                    return t ? this.add(new i(e, t, n), r) : this.set(e, n, r)
                }, d.from = function(e, t, n, r) {
                    return this.add((n.repeat && s.TweenMax || wn.f).from(e, t, h(0, n)), r)
                }, d.fromTo = function(e, t, n, r, i) {
                    var o = r.repeat && s.TweenMax || wn.f;
                    return r = h(0, r, n), t ? this.add(o.fromTo(e, t, n, r), i) : this.set(e, r, i)
                }, d.staggerTo = function(t, n, i, o, a, s, c, h) {
                    var d, p, m = new e({
                            onComplete: s,
                            onCompleteParams: c,
                            callbackScope: h,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        _ = f(i.stagger || o),
                        g = i.startAt,
                        v = i.cycle;
                    for ("string" == typeof t && (t = wn.f.selector(t) || t), r(t = t || []) && (t = function(e) {
                            var t, n = [],
                                r = e.length;
                            for (t = 0; t !== r; n.push(e[t++]));
                            return n
                        }(t)), p = 0; p < t.length; p++) d = l(i), g && (d.startAt = l(g), g.cycle && u(d.startAt, t, p)), v && (u(d, t, p), null != d.duration && (n = d.duration, delete d.duration)), m.to(t[p], n, d, _(p, t[p], t));
                    return this.add(m, a)
                }, d.staggerFrom = function(e, t, n, r, i, o, a, s) {
                    return n.runBackwards = !0, this.staggerTo(e, t, h(0, n), r, i, o, a, s)
                }, d.staggerFromTo = function(e, t, n, r, i, o, a, s, l) {
                    return r.startAt = n, this.staggerTo(e, t, h(0, r, n), i, o, a, s, l)
                }, d.call = function(e, t, n, r) {
                    return this.add(wn.f.delayedCall(0, e, t, n), r)
                }, d.set = function(e, t, n) {
                    return this.add(new wn.f(e, 0, h(0, t, null, !0)), n)
                }, e.exportRoot = function(t, n) {
                    null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, i, o, a, s = new e(t),
                        l = s._timeline;
                    for (null == n && (n = !0), l._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = l._time, o = l._first; o;) a = o._next, n && o instanceof wn.f && o.target === o.vars.onComplete || ((i = o._startTime - o._delay) < 0 && (r = 1), s.add(o, i)), o = a;
                    return l.add(s, 0), r && s.totalDuration(), s
                }, d.add = function(t, n, r, o) {
                    var a, s, l, u, c, h;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, t)), !(t instanceof wn.a)) {
                        if (t instanceof Array || t && t.push && i(t)) {
                            for (r = r || "normal", o = o || 0, a = n, s = t.length, l = 0; l < s; l++) i(u = t[l]) && (u = new e({
                                tweens: u
                            })), this.add(u, a), "string" != typeof u && "function" != typeof u && ("sequence" === r ? a = u._startTime + u.totalDuration() / u._timeScale : "start" === r && (u._startTime -= u.delay())), a += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof t) return this.addLabel(t, n);
                        if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                        t = wn.f.delayedCall(0, t)
                    }
                    if (wn.c.prototype.add.call(this, t, n), (t._time || !t._duration && t._initted) && (a = (this.rawTime() - t._startTime) * t._timeScale, (!t._duration || Math.abs(Math.max(0, Math.min(t.totalDuration(), a))) - t._totalTime > 1e-5) && t.render(a, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (h = (c = this).rawTime() > t._startTime; c._timeline;) h && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                    return this
                }, d.remove = function(e) {
                    if (e instanceof wn.a) {
                        this._remove(e, !1);
                        var t = e._timeline = e.vars.useFrames ? wn.a._rootFramesTimeline : wn.a._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && i(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, d._remove = function(e, t) {
                    return wn.c.prototype._remove.call(this, e, t), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, d.append = function(e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, d.insert = d.insertMultiple = function(e, t, n, r) {
                    return this.add(e, t || 0, n, r)
                }, d.appendMultiple = function(e, t, n, r) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, r)
                }, d.addLabel = function(e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, d.addPause = function(e, t, n, r) {
                    var i = wn.f.delayedCall(0, c, n, r || this);
                    return i.vars.onComplete = i.vars.onReverseComplete = t, i.data = "isPause", this._hasPause = !0, this.add(i, e)
                }, d.removeLabel = function(e) {
                    return delete this._labels[e], this
                }, d.getLabelTime = function(e) {
                    return null != this._labels[e] ? this._labels[e] : -1
                }, d._parseTimeOrLabel = function(e, t, n, r) {
                    var o, a;
                    if (r instanceof wn.a && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && i(r)))
                        for (a = r.length; --a > -1;) r[a] instanceof wn.a && r[a].timeline === this && this.remove(r[a]);
                    if (o = "number" != typeof e || t ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof t) return this._parseTimeOrLabel(t, n && "number" == typeof e && null == this._labels[t] ? e - o : 0, n);
                    if (t = t || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = o);
                    else {
                        if (-1 === (a = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = o + t : t : this._labels[e] + t;
                        t = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)), e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, n) : o
                    }
                    return Number(e) + t
                }, d.seek = function(e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
                }, d.stop = function() {
                    return this.paused(!0)
                }, d.gotoAndPlay = function(e, t) {
                    return this.play(e, t)
                }, d.gotoAndStop = function(e, t) {
                    return this.pause(e, t)
                }, d.render = function(e, t, n) {
                    this._gc && this._enabled(!0, !1);
                    var r, i, s, l, u, c, h, f, d = this._time,
                        p = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._startTime,
                        _ = this._timeScale,
                        g = this._paused;
                    if (d !== this._time && (e += this._time - d), e >= p - 1e-8 && e >= 0) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (i = !0, l = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && e >= -1e-8 || this._rawPrevTime < 0 || 1e-8 === this._rawPrevTime) && this._rawPrevTime !== e && this._first && (u = !0, this._rawPrevTime > 1e-8 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : 1e-8, e = p + 1e-4;
                    else if (e < 1e-8)
                        if (this._totalTime = this._time = 0, e > -1e-8 && (e = 0), (0 !== d || 0 === this._duration && 1e-8 !== this._rawPrevTime && (this._rawPrevTime > 0 || e < 0 && this._rawPrevTime >= 0)) && (l = "onReverseComplete", i = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = i = !0, l = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : 1e-8, 0 === e && i)
                                for (r = this._first; r && 0 === r._startTime;) r._duration || (i = !1), r = r._next;
                            e = 0, this._initted || (u = !0)
                        } else {
                        if (this._hasPause && !this._forcingPlayhead && !t) {
                            if (e >= d)
                                for (r = this._first; r && r._startTime <= e && !c;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (c = r), r = r._next;
                            else
                                for (r = this._last; r && r._startTime >= e && !c;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (c = r), r = r._prev;
                            c && (this._time = this._totalTime = e = c._startTime, f = this._startTime + e / this._timeScale)
                        }
                        this._totalTime = this._time = this._rawPrevTime = e
                    }
                    if (this._time !== d && this._first || n || u || c) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && e > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), (h = this._time) >= d)
                            for (r = this._first; r && (s = r._next, h === this._time && (!this._paused || g));)(r._active || r._startTime <= h && !r._paused && !r._gc) && (c === r && (this.pause(), this._pauseTime = f), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = s;
                        else
                            for (r = this._last; r && (s = r._prev, h === this._time && (!this._paused || g));) {
                                if (r._active || r._startTime <= d && !r._paused && !r._gc) {
                                    if (c === r) {
                                        for (c = r._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (e - c._startTime) * c._timeScale : (e - c._startTime) * c._timeScale, t, n), c = c._prev;
                                        c = null, this.pause(), this._pauseTime = f
                                    }
                                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)
                                }
                                r = s
                            }
                        this._onUpdate && (t || (o.length && a(), this._callback("onUpdate"))), l && (this._gc || m !== this._startTime && _ === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (i && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this._callback(l)))
                    }
                }, d._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof e && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, d.getChildren = function(e, t, n, r) {
                    r = r || -9999999999;
                    for (var i = [], o = this._first, a = 0; o;) o._startTime < r || (o instanceof wn.f ? !1 !== t && (i[a++] = o) : (!1 !== n && (i[a++] = o), !1 !== e && (a = (i = i.concat(o.getChildren(!0, t, n))).length))), o = o._next;
                    return i
                }, d.getTweensOf = function(e, t) {
                    var n, r, i = this._gc,
                        o = [],
                        a = 0;
                    for (i && this._enabled(!0, !0), r = (n = wn.f.getTweensOf(e)).length; --r > -1;)(n[r].timeline === this || t && this._contains(n[r])) && (o[a++] = n[r]);
                    return i && this._enabled(!1, !0), o
                }, d.recent = function() {
                    return this._recent
                }, d._contains = function(e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, d.shiftChildren = function(e, t, n) {
                    n = n || 0;
                    for (var r, i = this._first, o = this._labels; i;) i._startTime >= n && (i._startTime += e), i = i._next;
                    if (t)
                        for (r in o) o[r] >= n && (o[r] += e);
                    return this._uncache(!0)
                }, d._kill = function(e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = n.length, i = !1; --r > -1;) n[r]._kill(e, t) && (i = !0);
                    return i
                }, d.clear = function(e) {
                    var t = this.getChildren(!1, !0, !0),
                        n = t.length;
                    for (this._time = this._totalTime = 0; --n > -1;) t[n]._enabled(!1, !1);
                    return !1 !== e && (this._labels = {}), this._uncache(!0)
                }, d.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return wn.a.prototype.invalidate.call(this)
                }, d._enabled = function(e, t) {
                    if (e === this._gc)
                        for (var n = this._first; n;) n._enabled(e, !0), n = n._next;
                    return wn.c.prototype._enabled.call(this, e, t)
                }, d.totalTime = function(e, t, n) {
                    this._forcingPlayhead = !0;
                    var r = wn.a.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, d.duration = function(e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, d.totalDuration = function(e) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var t, n, r = 0, i = this._last, o = 999999999999; i;) t = i._prev, i._dirty && i.totalDuration(), i._startTime > o && this._sortChildren && !i._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(i, i._startTime - i._delay), this._calculatingDuration = 0) : o = i._startTime, i._startTime < 0 && !i._paused && (r -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale, this._time -= i._startTime, this._totalTime -= i._startTime, this._rawPrevTime -= i._startTime), this.shiftChildren(-i._startTime, !1, -9999999999), o = 0), (n = i._startTime + i._totalDuration / i._timeScale) > r && (r = n), i = t;
                            this._duration = this._totalDuration = r, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
                }, d.paused = function(e) {
                    if (!1 === e && this._paused)
                        for (var t = this._first; t;) t._startTime === this._time && "isPause" === t.data && (t._rawPrevTime = 0), t = t._next;
                    return wn.a.prototype.paused.apply(this, arguments)
                }, d.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === wn.a._rootFramesTimeline
                }, d.rawTime = function(e) {
                    return e && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
                }, e
            }, !0);
        var In = wn.g.TimelineLite;
        /*!
         * VERSION: 2.1.2
         * DATE: 2019-03-01
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */
        wn.e._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function() {
            var e = function(e) {
                    In.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
                },
                t = wn.f._internals,
                n = t.lazyTweens,
                r = t.lazyRender,
                i = wn.e._gsDefine.globals,
                o = new wn.b(null, null, 1, 0),
                a = e.prototype = new In;
            return a.constructor = e, a.kill()._gc = !1, e.version = "2.1.2", a.invalidate = function() {
                return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), In.prototype.invalidate.call(this)
            }, a.addCallback = function(e, t, n, r) {
                return this.add(wn.f.delayedCall(0, e, n, r), t)
            }, a.removeCallback = function(e, t) {
                if (e)
                    if (null == t) this._kill(null, e);
                    else
                        for (var n = this.getTweensOf(e, !1), r = n.length, i = this._parseTimeOrLabel(t); --r > -1;) n[r]._startTime === i && n[r]._enabled(!1, !1);
                return this
            }, a.removePause = function(e) {
                return this.removeCallback(In._internals.pauseCallback, e)
            }, a.tweenTo = function(e, t) {
                t = t || {};
                var n, r, a, s = {
                        ease: o,
                        useFrames: this.usesFrames(),
                        immediateRender: !1,
                        lazy: !1
                    },
                    l = t.repeat && i.TweenMax || wn.f;
                for (r in t) s[r] = t[r];
                return s.time = this._parseTimeOrLabel(e), n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, a = new l(this, n, s), s.onStart = function() {
                    a.target.paused(!0), a.vars.time === a.target.time() || n !== a.duration() || a.isFromTo || a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale).render(a.time(), !0, !0), t.onStart && t.onStart.apply(t.onStartScope || t.callbackScope || a, t.onStartParams || [])
                }, a
            }, a.tweenFromTo = function(e, t, n) {
                n = n || {}, e = this._parseTimeOrLabel(e), n.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [e],
                    callbackScope: this
                }, n.immediateRender = !1 !== n.immediateRender;
                var r = this.tweenTo(t, n);
                return r.isFromTo = 1, r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
            }, a.render = function(e, t, i) {
                this._gc && this._enabled(!0, !1);
                var o, a, s, l, u, c, h, f, d, p = this._time,
                    m = this._dirty ? this.totalDuration() : this._totalDuration,
                    _ = this._duration,
                    g = this._totalTime,
                    v = this._startTime,
                    y = this._timeScale,
                    b = this._rawPrevTime,
                    w = this._paused,
                    x = this._cycle;
                if (p !== this._time && (e += this._time - p), e >= m - 1e-8 && e >= 0) this._locked || (this._totalTime = m, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, l = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && e >= -1e-8 || b < 0 || 1e-8 === b) && b !== e && this._first && (u = !0, b > 1e-8 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : 1e-8, this._yoyo && 1 & this._cycle ? this._time = e = 0 : (this._time = _, e = _ + 1e-4);
                else if (e < 1e-8)
                    if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, e > -1e-8 && (e = 0), (0 !== p || 0 === _ && 1e-8 !== b && (b > 0 || e < 0 && b >= 0) && !this._locked) && (l = "onReverseComplete", a = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = a = !0, l = "onReverseComplete") : b >= 0 && this._first && (u = !0), this._rawPrevTime = e;
                    else {
                        if (this._rawPrevTime = _ || !t || e || this._rawPrevTime === e ? e : 1e-8, 0 === e && a)
                            for (o = this._first; o && 0 === o._startTime;) o._duration || (a = !1), o = o._next;
                        e = 0, this._initted || (u = !0)
                    } else if (0 === _ && b < 0 && (u = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (c = _ + this._repeatDelay, this._cycle = this._totalTime / c >> 0, this._cycle && this._cycle === this._totalTime / c && g <= e && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 1 & this._cycle && (this._time = _ - this._time), this._time > _ ? (this._time = _, e = _ + 1e-4) : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
                    if ((e = this._time) >= p || this._repeat && x !== this._cycle)
                        for (o = this._first; o && o._startTime <= e && !h;) o._duration || "isPause" !== o.data || o.ratio || 0 === o._startTime && 0 === this._rawPrevTime || (h = o), o = o._next;
                    else
                        for (o = this._last; o && o._startTime >= e && !h;) o._duration || "isPause" === o.data && o._rawPrevTime > 0 && (h = o), o = o._prev;
                    h && (d = this._startTime + h._startTime / this._timeScale, h._startTime < _ && (this._time = this._rawPrevTime = e = h._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay)))
                }
                if (this._cycle !== x && !this._locked) {
                    var T = this._yoyo && 0 != (1 & x),
                        A = T === (this._yoyo && 0 != (1 & this._cycle)),
                        M = this._totalTime,
                        P = this._cycle,
                        C = this._rawPrevTime,
                        R = this._time;
                    if (this._totalTime = x * _, this._cycle < x ? T = !T : this._totalTime += _, this._time = p, this._rawPrevTime = 0 === _ ? b - 1e-4 : b, this._cycle = x, this._locked = !0, p = T ? 0 : _, this.render(p, t, 0 === _), t || this._gc || this.vars.onRepeat && (this._cycle = P, this._locked = !1, this._callback("onRepeat")), p !== this._time) return;
                    if (A && (this._cycle = x, this._locked = !0, p = T ? _ + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !w) return;
                    this._time = R, this._totalTime = M, this._cycle = P, this._rawPrevTime = C
                }
                if (this._time !== p && this._first || i || u || h) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && e > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), (f = this._time) >= p)
                        for (o = this._first; o && (s = o._next, f === this._time && (!this._paused || w));)(o._active || o._startTime <= this._time && !o._paused && !o._gc) && (h === o && (this.pause(), this._pauseTime = d), o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (e - o._startTime) * o._timeScale, t, i) : o.render((e - o._startTime) * o._timeScale, t, i)), o = s;
                    else
                        for (o = this._last; o && (s = o._prev, f === this._time && (!this._paused || w));) {
                            if (o._active || o._startTime <= p && !o._paused && !o._gc) {
                                if (h === o) {
                                    for (h = o._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (e - h._startTime) * h._timeScale : (e - h._startTime) * h._timeScale, t, i), h = h._prev;
                                    h = null, this.pause(), this._pauseTime = d
                                }
                                o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (e - o._startTime) * o._timeScale, t, i) : o.render((e - o._startTime) * o._timeScale, t, i)
                            }
                            o = s
                        }
                    this._onUpdate && (t || (n.length && r(), this._callback("onUpdate"))), l && (this._locked || this._gc || v !== this._startTime && y === this._timeScale || (0 === this._time || m >= this.totalDuration()) && (a && (n.length && r(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this._callback(l)))
                } else g !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
            }, a.getActive = function(e, t, n) {
                var r, i, o = [],
                    a = this.getChildren(e || null == e, t || null == e, !!n),
                    s = 0,
                    l = a.length;
                for (r = 0; r < l; r++)(i = a[r]).isActive() && (o[s++] = i);
                return o
            }, a.getLabelAfter = function(e) {
                e || 0 !== e && (e = this._time);
                var t, n = this.getLabelsArray(),
                    r = n.length;
                for (t = 0; t < r; t++)
                    if (n[t].time > e) return n[t].name;
                return null
            }, a.getLabelBefore = function(e) {
                null == e && (e = this._time);
                for (var t = this.getLabelsArray(), n = t.length; --n > -1;)
                    if (t[n].time < e) return t[n].name;
                return null
            }, a.getLabelsArray = function() {
                var e, t = [],
                    n = 0;
                for (e in this._labels) t[n++] = {
                    time: this._labels[e],
                    name: e
                };
                return t.sort(function(e, t) {
                    return e.time - t.time
                }), t
            }, a.invalidate = function() {
                return this._locked = !1, In.prototype.invalidate.call(this)
            }, a.progress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
            }, a.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
            }, a.totalDuration = function(e) {
                return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (In.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, a.time = function(e, t) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var n = this._duration,
                    r = this._cycle,
                    i = r * (n + this._repeatDelay);
                return e > n && (e = n), this.totalTime(this._yoyo && 1 & r ? n - e + i : this._repeat ? e + i : e, t)
            }, a.repeat = function(e) {
                return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
            }, a.repeatDelay = function(e) {
                return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
            }, a.yoyo = function(e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, a.currentLabel = function(e) {
                return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
            }, e
        }, !0);
        var On = wn.g.TimelineMax,
            Dn = 180 / Math.PI,
            Sn = [],
            Fn = [],
            Nn = [],
            kn = {},
            Bn = wn.e._gsDefine.globals,
            Gn = function(e, t, n, r) {
                n === r && (n = r - (r - t) / 1e6), e === t && (t = e + (n - e) / 1e6), this.a = e, this.b = t, this.c = n, this.d = r, this.da = r - e, this.ca = n - e, this.ba = t - e
            },
            Ln = function(e, t, n, r) {
                var i = {
                        a: e
                    },
                    o = {},
                    a = {},
                    s = {
                        c: r
                    },
                    l = (e + t) / 2,
                    u = (t + n) / 2,
                    c = (n + r) / 2,
                    h = (l + u) / 2,
                    f = (u + c) / 2,
                    d = (f - h) / 8;
                return i.b = l + (e - l) / 4, o.b = h + d, i.c = o.a = (i.b + o.b) / 2, o.c = a.a = (h + f) / 2, a.b = f - d, s.b = c + (r - c) / 4, a.c = s.a = (a.b + s.b) / 2, [i, o, a, s]
            },
            Un = function(e, t, n, r, i) {
                var o, a, s, l, u, c, h, f, d, p, m, _, g, v = e.length - 1,
                    y = 0,
                    b = e[0].a;
                for (o = 0; o < v; o++) a = (u = e[y]).a, s = u.d, l = e[y + 1].d, i ? (m = Sn[o], g = ((_ = Fn[o]) + m) * t * .25 / (r ? .5 : Nn[o] || .5), f = s - ((c = s - (s - a) * (r ? .5 * t : 0 !== m ? g / m : 0)) + (((h = s + (l - s) * (r ? .5 * t : 0 !== _ ? g / _ : 0)) - c) * (3 * m / (m + _) + .5) / 4 || 0))) : f = s - ((c = s - (s - a) * t * .5) + (h = s + (l - s) * t * .5)) / 2, c += f, h += f, u.c = d = c, u.b = 0 !== o ? b : b = u.a + .6 * (u.c - u.a), u.da = s - a, u.ca = d - a, u.ba = b - a, n ? (p = Ln(a, b, d, s), e.splice(y, 1, p[0], p[1], p[2], p[3]), y += 4) : y++, b = h;
                (u = e[y]).b = b, u.c = b + .4 * (u.d - b), u.da = u.d - u.a, u.ca = u.c - u.a, u.ba = b - u.a, n && (p = Ln(u.a, b, u.c, u.d), e.splice(y, 1, p[0], p[1], p[2], p[3]))
            },
            Xn = function(e, t, n, r) {
                var i, o, a, s, l, u, c = [];
                if (r)
                    for (o = (e = [r].concat(e)).length; --o > -1;) "string" == typeof(u = e[o][t]) && "=" === u.charAt(1) && (e[o][t] = r[t] + Number(u.charAt(0) + u.substr(2)));
                if ((i = e.length - 2) < 0) return c[0] = new Gn(e[0][t], 0, 0, e[0][t]), c;
                for (o = 0; o < i; o++) a = e[o][t], s = e[o + 1][t], c[o] = new Gn(a, 0, 0, s), n && (l = e[o + 2][t], Sn[o] = (Sn[o] || 0) + (s - a) * (s - a), Fn[o] = (Fn[o] || 0) + (l - s) * (l - s));
                return c[o] = new Gn(e[o][t], 0, 0, e[o + 1][t]), c
            },
            jn = function(e, t, n, r, i, o) {
                var a, s, l, u, c, h, f, d, p = {},
                    m = [],
                    _ = o || e[0];
                for (s in i = "string" == typeof i ? "," + i + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == t && (t = 1), e[0]) m.push(s);
                if (e.length > 1) {
                    for (d = e[e.length - 1], f = !0, a = m.length; --a > -1;)
                        if (s = m[a], Math.abs(_[s] - d[s]) > .05) {
                            f = !1;
                            break
                        }
                    f && (e = e.concat(), o && e.unshift(o), e.push(e[1]), o = e[e.length - 3])
                }
                for (Sn.length = Fn.length = Nn.length = 0, a = m.length; --a > -1;) s = m[a], kn[s] = -1 !== i.indexOf("," + s + ","), p[s] = Xn(e, s, kn[s], o);
                for (a = Sn.length; --a > -1;) Sn[a] = Math.sqrt(Sn[a]), Fn[a] = Math.sqrt(Fn[a]);
                if (!r) {
                    for (a = m.length; --a > -1;)
                        if (kn[s])
                            for (h = (l = p[m[a]]).length - 1, u = 0; u < h; u++) c = l[u + 1].da / Fn[u] + l[u].da / Sn[u] || 0, Nn[u] = (Nn[u] || 0) + c * c;
                    for (a = Nn.length; --a > -1;) Nn[a] = Math.sqrt(Nn[a])
                }
                for (a = m.length, u = n ? 4 : 1; --a > -1;) l = p[s = m[a]], Un(l, t, n, r, kn[s]), f && (l.splice(0, u), l.splice(l.length - u, u));
                return p
            },
            Vn = function(e, t, n) {
                for (var r, i, o, a, s, l, u, c, h, f, d, p = 1 / n, m = e.length; --m > -1;)
                    for (o = (f = e[m]).a, a = f.d - o, s = f.c - o, l = f.b - o, r = i = 0, c = 1; c <= n; c++) r = i - (i = ((u = p * c) * u * a + 3 * (h = 1 - u) * (u * s + h * l)) * u), t[d = m * n + c - 1] = (t[d] || 0) + r * r
            },
            zn = wn.e._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.8",
                API: 2,
                global: !0,
                init: function(e, t, n) {
                    this._target = e, t instanceof Array && (t = {
                        values: t
                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                    var r, i, o, a, s, l = t.values || [],
                        u = {},
                        c = l[0],
                        h = t.autoRotate || n.vars.orientToBezier;
                    for (r in this._autoRotate = h ? h instanceof Array ? h : [
                            ["x", "y", "rotation", !0 === h ? 0 : Number(h) || 0]
                        ] : null, c) this._props.push(r);
                    for (o = this._props.length; --o > -1;) r = this._props[o], this._overwriteProps.push(r), i = this._func[r] = "function" == typeof e[r], u[r] = i ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), s || u[r] !== l[0][r] && (s = u);
                    if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? jn(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, s) : function(e, t, n) {
                            var r, i, o, a, s, l, u, c, h, f, d, p = {},
                                m = "cubic" === (t = t || "soft") ? 3 : 2,
                                _ = "soft" === t,
                                g = [];
                            if (_ && n && (e = [n].concat(e)), null == e || e.length < m + 1) throw "invalid Bezier data";
                            for (h in e[0]) g.push(h);
                            for (l = g.length; --l > -1;) {
                                for (p[h = g[l]] = s = [], f = 0, c = e.length, u = 0; u < c; u++) r = null == n ? e[u][h] : "string" == typeof(d = e[u][h]) && "=" === d.charAt(1) ? n[h] + Number(d.charAt(0) + d.substr(2)) : Number(d), _ && u > 1 && u < c - 1 && (s[f++] = (r + s[f - 2]) / 2), s[f++] = r;
                                for (c = f - m + 1, f = 0, u = 0; u < c; u += m) r = s[u], i = s[u + 1], o = s[u + 2], a = 2 === m ? 0 : s[u + 3], s[f++] = d = 3 === m ? new Gn(r, i, o, a) : new Gn(r, (2 * i + r) / 3, (2 * i + o) / 3, o);
                                s.length = f
                            }
                            return p
                        }(l, t.type, u), this._segCount = this._beziers[r].length, this._timeRes) {
                        var f = function(e, t) {
                            var n, r, i, o, a = [],
                                s = [],
                                l = 0,
                                u = 0,
                                c = (t = t >> 0 || 6) - 1,
                                h = [],
                                f = [];
                            for (n in e) Vn(e[n], a, t);
                            for (i = a.length, r = 0; r < i; r++) l += Math.sqrt(a[r]), f[o = r % t] = l, o === c && (u += l, h[o = r / t >> 0] = f, s[o] = u, l = 0, f = []);
                            return {
                                length: u,
                                lengths: s,
                                segments: h
                            }
                        }(this._beziers, this._timeRes);
                        this._length = f.length, this._lengths = f.lengths, this._segments = f.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (h = this._autoRotate)
                        for (this._initialRotations = [], h[0] instanceof Array || (this._autoRotate = h = [h]), o = h.length; --o > -1;) {
                            for (a = 0; a < 3; a++) r = h[o][a], this._func[r] = "function" == typeof e[r] && e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)];
                            r = h[o][2], this._initialRotations[o] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0, this._overwriteProps.push(r)
                        }
                    return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
                },
                set: function(e) {
                    var t, n, r, i, o, a, s, l, u, c, h = this._segCount,
                        f = this._func,
                        d = this._target,
                        p = e !== this._startRatio;
                    if (this._timeRes) {
                        if (u = this._lengths, c = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < h - 1) {
                            for (l = h - 1; r < l && (this._l2 = u[++r]) <= e;);
                            this._l1 = u[r - 1], this._li = r, this._curSeg = c = this._segments[r], this._s2 = c[this._s1 = this._si = 0]
                        } else if (e < this._l1 && r > 0) {
                            for (; r > 0 && (this._l1 = u[--r]) >= e;);
                            0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = c = this._segments[r], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                        }
                        if (t = r, e -= this._l1, r = this._si, e > this._s2 && r < c.length - 1) {
                            for (l = c.length - 1; r < l && (this._s2 = c[++r]) <= e;);
                            this._s1 = c[r - 1], this._si = r
                        } else if (e < this._s1 && r > 0) {
                            for (; r > 0 && (this._s1 = c[--r]) >= e;);
                            0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = c[r], this._si = r
                        }
                        a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else a = (e - (t = e < 0 ? 0 : e >= 1 ? h - 1 : h * e >> 0) * (1 / h)) * h;
                    for (n = 1 - a, r = this._props.length; --r > -1;) i = this._props[r], s = (a * a * (o = this._beziers[i][t]).da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._mod[i] && (s = this._mod[i](s, d)), f[i] ? d[i](s) : d[i] = s;
                    if (this._autoRotate) {
                        var m, _, g, v, y, b, w, x = this._autoRotate;
                        for (r = x.length; --r > -1;) i = x[r][2], b = x[r][3] || 0, w = !0 === x[r][4] ? 1 : Dn, o = this._beziers[x[r][0]], m = this._beziers[x[r][1]], o && m && (o = o[t], m = m[t], _ = o.a + (o.b - o.a) * a, _ += ((v = o.b + (o.c - o.b) * a) - _) * a, v += (o.c + (o.d - o.c) * a - v) * a, g = m.a + (m.b - m.a) * a, g += ((y = m.b + (m.c - m.b) * a) - g) * a, y += (m.c + (m.d - m.c) * a - y) * a, s = p ? Math.atan2(y - g, v - _) * w + b : this._initialRotations[r], this._mod[i] && (s = this._mod[i](s, d)), f[i] ? d[i](s) : d[i] = s)
                    }
                }
            }),
            Yn = zn.prototype;
        /*!
         * VERSION: 1.3.8
         * DATE: 2018-05-30
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         **/
        zn.bezierThrough = jn, zn.cubicToQuadratic = Ln, zn._autoCSS = !0, zn.quadraticToCubic = function(e, t, n) {
                return new Gn(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
            }, zn._cssRegister = function() {
                var e = Bn.CSSPlugin;
                if (e) {
                    var t = e._internals,
                        n = t._parseToProxy,
                        r = t._setPluginRatio,
                        i = t.CSSPropTween;
                    t._registerComplexSpecialProp("bezier", {
                        parser: function(e, t, o, a, s, l) {
                            t instanceof Array && (t = {
                                values: t
                            }), l = new zn;
                            var u, c, h, f = t.values,
                                d = f.length - 1,
                                p = [],
                                m = {};
                            if (d < 0) return s;
                            for (u = 0; u <= d; u++) h = n(e, f[u], a, s, l, d !== u), p[u] = h.end;
                            for (c in t) m[c] = t[c];
                            return m.values = p, (s = new i(e, "bezier", 0, 0, h.pt, 2)).data = h, s.plugin = l, s.setRatio = r, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (u = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != h.end.left ? [
                                ["left", "top", "rotation", u, !1]
                            ] : null != h.end.x && [
                                ["x", "y", "rotation", u, !1]
                            ]), m.autoRotate && (a._transform || a._enableTransforms(!1), h.autoRotate = a._target._gsTransform, h.proxy.rotation = h.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(h.proxy, m, a._tween), s
                        }
                    })
                }
            }, Yn._mod = function(e) {
                for (var t, n = this._overwriteProps, r = n.length; --r > -1;)(t = e[n[r]]) && "function" == typeof t && (this._mod[n[r]] = t)
            }, Yn._kill = function(e) {
                var t, n, r = this._props;
                for (t in this._beziers)
                    if (t in e)
                        for (delete this._beziers[t], delete this._func[t], n = r.length; --n > -1;) r[n] === t && r.splice(n, 1);
                if (r = this._autoRotate)
                    for (n = r.length; --n > -1;) e[r[n][2]] && r.splice(n, 1);
                return this._super._kill.call(this, e)
            },
            /*!
             * VERSION: 1.16.1
             * DATE: 2018-08-27
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             **/
            wn.e._gsDefine("easing.Back", ["easing.Ease"], function() {
                var e, t, n, r, i = wn.e.GreenSockGlobals || wn.e,
                    o = i.com.greensock,
                    a = 2 * Math.PI,
                    s = Math.PI / 2,
                    l = o._class,
                    u = function(e, t) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new wn.b;
                        return r.constructor = n, r.getRatio = t, n
                    },
                    c = wn.b.register || function() {},
                    h = function(e, t, n, r, i) {
                        var o = l("easing." + e, {
                            easeOut: new t,
                            easeIn: new n,
                            easeInOut: new r
                        }, !0);
                        return c(o, e), o
                    },
                    f = function(e, t, n) {
                        this.t = e, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - e)
                    },
                    d = function(e, t) {
                        var n = l("easing." + e, function(e) {
                                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new wn.b;
                        return r.constructor = n, r.getRatio = t, r.config = function(e) {
                            return new n(e)
                        }, n
                    },
                    p = h("Back", d("BackOut", function(e) {
                        return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), d("BackIn", function(e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), d("BackInOut", function(e) {
                        return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(e, t, n) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === n
                    }, !0),
                    _ = m.prototype = new wn.b;
                return _.constructor = m, _.getRatio = function(e) {
                    var t = e + (.5 - e) * this._p;
                    return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 === e ? 0 : 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, m.ease = new m(.7, .7), _.config = m.config = function(e, t, n) {
                    return new m(e, t, n)
                }, (_ = (e = l("easing.SteppedEase", function(e, t) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + (t ? 0 : 1), this._p3 = t ? 1 : 0
                }, !0)).prototype = new wn.b).constructor = e, _.getRatio = function(e) {
                    return e < 0 ? e = 0 : e >= 1 && (e = .999999999), ((this._p2 * e | 0) + this._p3) * this._p1
                }, _.config = e.config = function(t, n) {
                    return new e(t, n)
                }, (_ = (t = l("easing.ExpoScaleEase", function(e, t, n) {
                    this._p1 = Math.log(t / e), this._p2 = t - e, this._p3 = e, this._ease = n
                }, !0)).prototype = new wn.b).constructor = t, _.getRatio = function(e) {
                    return this._ease && (e = this._ease.getRatio(e)), (this._p3 * Math.exp(this._p1 * e) - this._p3) / this._p2
                }, _.config = t.config = function(e, n, r) {
                    return new t(e, n, r)
                }, (_ = (n = l("easing.RoughEase", function(e) {
                    for (var t, n, r, i, o, a, s = (e = e || {}).taper || "none", l = [], u = 0, c = 0 | (e.points || 20), h = c, d = !1 !== e.randomize, p = !0 === e.clamp, m = e.template instanceof wn.b ? e.template : null, _ = "number" == typeof e.strength ? .4 * e.strength : .4; --h > -1;) t = d ? Math.random() : 1 / c * h, n = m ? m.getRatio(t) : t, r = "none" === s ? _ : "out" === s ? (i = 1 - t) * i * _ : "in" === s ? t * t * _ : t < .5 ? (i = 2 * t) * i * .5 * _ : (i = 2 * (1 - t)) * i * .5 * _, d ? n += Math.random() * r - .5 * r : h % 2 ? n += .5 * r : n -= .5 * r, p && (n > 1 ? n = 1 : n < 0 && (n = 0)), l[u++] = {
                        x: t,
                        y: n
                    };
                    for (l.sort(function(e, t) {
                            return e.x - t.x
                        }), a = new f(1, 1, null), h = c; --h > -1;) o = l[h], a = new f(o.x, o.y, a);
                    this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
                }, !0)).prototype = new wn.b).constructor = n, _.getRatio = function(e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && e <= t.t;) t = t.prev;
                    return this._prev = t, t.v + (e - t.t) / t.gap * t.c
                }, _.config = function(e) {
                    return new n(e)
                }, n.ease = new n, h("Bounce", u("BounceOut", function(e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), u("BounceIn", function(e) {
                    return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), u("BounceInOut", function(e) {
                    var t = e < .5;
                    return (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75 ? e *= 7.5625 * e : e = e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), h("Circ", u("CircOut", function(e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }), u("CircIn", function(e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                }), u("CircInOut", function(e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })), h("Elastic", (r = function(e, t, n) {
                    var r = l("easing." + e, function(e, t) {
                            this._p1 = e >= 1 ? e : 1, this._p2 = (t || n) / (e < 1 ? e : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        i = r.prototype = new wn.b;
                    return i.constructor = r, i.getRatio = t, i.config = function(e, t) {
                        return new r(e, t)
                    }, r
                })("ElasticOut", function(e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
                }, .3), r("ElasticIn", function(e) {
                    return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
                }, .3), r("ElasticInOut", function(e) {
                    return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
                }, .45)), h("Expo", u("ExpoOut", function(e) {
                    return 1 - Math.pow(2, -10 * e)
                }), u("ExpoIn", function(e) {
                    return Math.pow(2, 10 * (e - 1)) - .001
                }), u("ExpoInOut", function(e) {
                    return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })), h("Sine", u("SineOut", function(e) {
                    return Math.sin(e * s)
                }), u("SineIn", function(e) {
                    return 1 - Math.cos(e * s)
                }), u("SineInOut", function(e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return wn.b.map[e]
                    }
                }, !0), c(i.SlowMo, "SlowMo", "ease,"), c(n, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), p
            }, !0);
        var Wn = wn.g.Back,
            Hn = wn.g.Elastic,
            qn = wn.g.Bounce,
            Qn = wn.g.RoughEase,
            Kn = wn.g.SlowMo,
            Zn = wn.g.SteppedEase,
            $n = wn.g.Circ,
            Jn = wn.g.Expo,
            er = wn.g.Sine,
            tr = wn.g.ExpoScaleEase,
            nr = xn;
        nr._autoActivated = [In, On, Tn, An, zn, Mn, En, Wn, Hn, qn, Qn, Kn, Zn, $n, Jn, er, tr];
        /*!
         * VERSION: 2.1.2
         * DATE: 2019-03-01
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         **/
        var rr, ir, or, ar, sr, lr, ur, cr, hr, fr, dr, pr, mr, _r, gr, vr, yr, br, wr = n("./node_modules/twgl.js/dist/4.x/twgl-full.js"),
            xr = !1,
            Tr = 0,
            Ar = 0,
            Mr = 0,
            Pr = 60,
            Cr = 1e3 / Pr,
            Rr = 512,
            Er = {},
            Ir = [0, 0, 0, 0],
            Or = [0, 0, 0, 0],
            Dr = [0, 0, 0, 0],
            Sr = [0, 0, 0, 0],
            Fr = [.09, .09, .09, .09],
            Nr = [1, 1, 1, 1];

        function kr() {
            rr = document.querySelector("#canvas");
            try {
                ir = rr.getContext("webgl") || rr.getContext("experimental-webgl")
            } catch (e) {
                return void console.warn("no WebGL in da house.")
            }
            if (!ir) throw "no WebGL in da house.";
            var e;
            (yr = document.querySelector("#audio")).crossOrigin = "anonymous", yr.loop = !0, yr.volume = 0, rr.addEventListener("webglcontextlost", Lr, !1), rr.addEventListener("webglcontextrestored", Ur, !1), vr = document.querySelector(".cover"), nr.to(vr.querySelector(".t"), 3, {
                autoAlpha: 1
            }), vr.addEventListener("click", function(e) {
                Xr()
            }), e = (ur = new bn).getBestGPUSettings(), Rr = e.bufferSize, Pr = 60, Tr = e.ratio, Cr = 1e3 / Pr, ir = wr.getContext(rr, {
                depth: !1,
                antialiasing: !0
            }), ar = wr.createFramebufferInfo(ir, null, Rr, Rr), sr = wr.createFramebufferInfo(ir, null, Rr, Rr), pr = wr.createProgramInfo(ir, [i.a, a.a]), mr = wr.createProgramInfo(ir, [i.a, l.a]), or = wr.createBufferInfoFromArrays(ir, {
                position: {
                    data: [-1, -1, -1, 4, 4, -1],
                    numComponents: 2
                }
            })
        }

        function Br() {
            var e = (Ar = window.performance.now()) - Mr;
            e > Cr && (Mr = Ar - e % Cr, function(e) {
                if (cr = Rr, hr = Rr, (rr.width !== cr || rr.height !== hr) && (rr.width = hr, rr.height = hr, ir.viewport(0, 0, ir.drawingBufferWidth, ir.drawingBufferHeight)), dr.getByteFrequencyData(gr), br) {
                    br.update(null, gr, !1), Er.low(Or), Er.sub(Ir), Er.high(Sr), Er.mid(Dr);
                    var t = Sr,
                        n = Dr,
                        r = Ir,
                        i = Or;
                    console.log(t[3] + t[0] + t[2] + n[0], r[3] + n[0] + i[0] + t[3])
                }
                ir.useProgram(pr.program), wr.setBuffersAndAttributes(ir, pr, or), wr.setUniforms(pr, {
                    iMusicSub: Ir,
                    iMusicLow: Or,
                    iMusicMid: Dr,
                    iMusicHigh: Sr,
                    iGlobalTime: e,
                    uTexture: ar.attachments[0],
                    iResolution: [cr, hr]
                }), wr.bindFramebufferInfo(ir, sr), wr.drawBufferInfo(ir, or, ir.TRIANGLES), ir.useProgram(mr.program), wr.setBuffersAndAttributes(ir, mr, or), wr.setUniforms(mr, {
                    uTime: e,
                    uResolution: [cr, hr],
                    uTexture: ar.attachments[0]
                }), wr.bindFramebufferInfo(ir, null), wr.drawBufferInfo(ir, or, ir.TRIANGLES), lr = ar, ar = sr, sr = lr, xr && (document.querySelector(".log").innerHTML = "devicePixelRatio=" + window.devicePixelRatio + " tier=" + ur.gpuTier.levelTier + " type=" + ur.gpuTier.type + "<br/>applied: pixel ratio=" + Tr + ", fps=" + Pr + "<br/>(" + window.innerWidth + "," + window.innerHeight + ")<br/>(" + rr.width + "," + rr.height + ")<br/>(bufferSize: " + Rr + ")<br/>" + dr.frequencyBinCount + ":" + fr.state + "<br/>" + e + "<br/>")
            }(Ar / 1e3));
            requestAnimationFrame(Br)
        }

        function Gr() {
            cancelAnimationFrame(Br)
        }

        function Lr(e) {
            console.warn("lost"), event.preventDefault(), Gr()
        }

        function Ur(e) {
            console.warn("restored"), kr()
        }

        function Xr() {
            vr.removeEventListener("click", Xr), nr.to(vr, .5, {
                autoAlpha: 0
            }), fr = new(window.AudioContext || window.webkitAudioContext), dr = fr.createAnalyser(), _r = dr.frequencyBinCount, dr.fftSize = 1024, gr = new Uint8Array(_r), yr.addEventListener("canplay", function(e) {
                try {
                    fr.createMediaElementSource(yr).connect(dr), dr.connect(fr.destination), br = new c.a({
                        context: fr,
                        analyser: dr
                    }), Er = {
                        sub: br.band({
                            template: "0234",
                            from: 1,
                            to: 32,
                            smooth: Fr,
                            adapt: Nr
                        }),
                        low: br.band({
                            template: "0234",
                            from: 32,
                            to: 48,
                            smooth: Fr,
                            adapt: Nr
                        }),
                        mid: br.band({
                            template: "0234",
                            from: 48,
                            to: 64,
                            smooth: Fr,
                            adapt: Nr
                        }),
                        high: br.band({
                            template: "0234",
                            from: 64,
                            to: 160,
                            smooth: Fr,
                            adapt: Nr
                        })
                    }
                } catch (e) {
                    console.log(e.toString())
                }
            }), yr.addEventListener("error", function(e) {
                console.log(e.toString())
            }), yr.src = "mp3/Bagatelleop119n1.mp3", yr.crossOrigin = "anonymous", yr.play(), nr.to(yr, 3, {
                volume: .75
            }), Mr = window.performance.now(), Br()
        }
        kr()
    },
    "./src/glsl/frag.glsl": function(e, t) {
        e.exports = "// by Andrea Bovo, spleennooname / 2016\r\n// Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.\r\n\r\nprecision highp float;\r\n\r\n
        varying vec2 vUv;\r\n\r\nuniform sampler2D uTexture;\r\nuniform float iGlobalTime;\r\nuniform vec2 iResolution;\r\n\r\nuniform vec4 iMusicSub;\r\nuniform vec4 iMusicLow;\r\n
        uniform vec4 iMusicMid;\r\nuniform vec4 iMusicHigh;\r\n\r\n#define time iGlobalTime\r\n#define R iResolution.xy\r\n\r\n#define COLOR 0.0\r\n\r\n
        #define N_WAVES 8.0\r\n\r\n// noise\r\nfloat rand(float n) {\r\n  return fract(sin(n) * 43758.5453123);\r\n}\r\n\r\nfloat hash11(float p) {\r\n  p = fract(p * .1031);\r\n  p *= p + 19.19;\r\n  p *= p + p;\r\n  return fract(p);\r\n}\r\n\r\nfloat noise(float p) {\r\n  float fl = floor(p);\r\n  float fc = fract(p);\r\n  return mix(hash11(fl), rand(fl + 1.0), fc);\r\n}\r\n\r\nfloat gauss(float s, float x) {\r\n  return (0.85) * exp(-x * x / (2. * s * s));\r\n}\r\n\r\nfloat blur(float dist, float width, float blur, float intens) {\r\n  dist = max(abs(dist) - width, 0.);\r\n  float b = gauss(0.02 + width * 2. * blur, dist);\r\n  return b * intens + .75 * width;\r\n}\r\n\r\nfloat wave(float x, float i, vec4 sub, vec4 low, vec4 mid, vec4 high) {\r\n\r\n  // 0 the note where the highest energy was seen,\r\n  // 1 the average note for the whole band,\r\n  // 2 the octave (bass vs treble) and\r\n  // 3 the average energy of all triggered notes.\r\n\r\n  float l = 1.0 * low[0] ;\r\n  float m = 1.0 * mid[0];\r\n  float h = 1.0 * high[0];\r\n  float s = 1.0 * sub[0];\r\n\r\n  float amp = mix(0., 1.0, high[1] + high[0] + sub[2] + mid[0] - .15 * i + x );\r\n  float fq =  2. * x - .45* time - .15 * i * mix(0., 3.0, sub[3] + mid[0] + low[0] + high[3]);\r\n\r\n  // amp. wave\r\n  // mix(x, y, a) = linear interpolate value between x and y with weight a\r\n  // smoothstep(l, r, a) = Hermite interpolate value between x and y with weight, sigmoid-like/clamping ( with l < r)\r\n\r\n  //float amp =mix(0., 0.75, wa - .25*x) ;\r\n  // float amp = .75 * smoothstep( wa - 0.5 * i, .5, x );\r\n  //float amp = mix(0., +.75,  high[1]*.75 + high[0] + mid[0]) - .25*i;\r\n\r\n  // wave form\r\n  // 10. * x + 0.55 * time -\r\n  //float fq = x*1.45  + .55*time- i * mix(-.5, +.5, sub[1] + mid[0] + low[0] + high[3]);\r\n  //float y = amp * sin( 1.*x + 0.25 * time - .25 * i * mix(0., 1.0, wx) );\r\n  //float y = amp * sin( fq );\r\n\r\n  return amp * sin(fq);\r\n}\r\n\r\nvoid main() {\r\n\r\n  vec2 uv = (1. * gl_FragCoord.xy - .5 * R) / R.y;\r\n  //vec2 uv = (2. * gl_FragCoord.xy - 1. * R) / R.y;\r\n  //vec2 uv = ( fragCoord - .5*R ) / R.y;  // [-1/2,1/2] vertically\r\n\r\n  float col = 0.0;\r\n  for (float i = 0.; i < N_WAVES; i+=1.0) {\r\n    float d = distance( 2. * uv.y, wave(uv.x, i, iMusicSub, iMusicLow, iMusicMid, iMusicHigh) );\r\n    float b = 0.5 *i + 0.001;\r\n    col += blur(d, 0.009, b, 0.5);\r\n  }\r\n\r\n  float note = smoothstep(0., 0.55, (iMusicLow[3] + iMusicMid[1] + iMusicHigh[3] * .25) / 3. );\r\n\r\n  gl_FragColor = mix( vec4(vec3(1. - col, 0., 0), 1.), texture2D(uTexture, uv), note);\r\n}\r\n"
    },
    "./src/glsl/post.glsl": function(e, t) {
        e.exports = "\nprecision highp float;\n\nuniform sampler2D uTexture;\nuniform float uTime;\nuniform vec2 uResolution;\n\n#define R uResolution\n#define time uTime\n\n
        void main() {\n\n  vec2 uv = (2. * gl_FragCoord.xy - .5*R) / R.y;\n\n  gl_FragColor =  texture2D(uTexture, uv);\n}\n"
    },
    "./src/glsl/vert.glsl": function(e, t) {
        e.exports = "precision highp float;\r\n\r\nattribute vec3 position;\r\n\r\nvoid main() {\r\n    gl_Position = vec4(position.xy,1.0, 1.0 );\r\n}"
    },
    "./src/js/raf.js": function(e, t) {
        ! function() {
            for (var e = 0, t = ["webkit", "moz"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
                var r = (new Date).getTime(),
                    i = Math.max(0, 16 - (r - e)),
                    o = window.setTimeout(function() {
                        t(r + i)
                    }, i);
                return e = r + i, o
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            })
        }()
    },
    "./src/styles/styles.scss": function(e, t, n) {}
});