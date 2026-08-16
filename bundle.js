(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn3, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn3 && (res = (0, fn3[__getOwnPropNames(fn3)[0]])(fn3 = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // assets/motion-CBSrzxBb.js
  function $r(t) {
    return t === null || typeof t != "object" ? null : (t = Vn && t[Vn] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  function gt(t, e, n) {
    this.props = t, this.context = e, this.refs = Xs, this.updater = n || zs;
  }
  function qs() {
  }
  function Ue(t, e, n) {
    this.props = t, this.context = e, this.refs = Xs, this.updater = n || zs;
  }
  function Js(t, e, n) {
    var s, i = {}, o = null, r = null;
    if (e != null) for (s in e.ref !== void 0 && (r = e.ref), e.key !== void 0 && (o = "" + e.key), e) Ys.call(e, s) && !Zs.hasOwnProperty(s) && (i[s] = e[s]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
      i.children = l;
    }
    if (t && t.defaultProps) for (s in a = t.defaultProps, a) i[s] === void 0 && (i[s] = a[s]);
    return { $$typeof: kt, type: t, key: o, ref: r, props: i, _owner: Ke.current };
  }
  function Kr(t, e) {
    return { $$typeof: kt, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
  }
  function We(t) {
    return typeof t == "object" && t !== null && t.$$typeof === kt;
  }
  function Wr(t) {
    var e = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(n) {
      return e[n];
    });
  }
  function he(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? Wr("" + t.key) : e.toString(36);
  }
  function Kt(t, e, n, s, i) {
    var o = typeof t;
    (o === "undefined" || o === "boolean") && (t = null);
    var r = false;
    if (t === null) r = true;
    else switch (o) {
      case "string":
      case "number":
        r = true;
        break;
      case "object":
        switch (t.$$typeof) {
          case kt:
          case Lr:
            r = true;
        }
    }
    if (r) return r = t, i = i(r), t = s === "" ? "." + he(r, 0) : s, Cn(i) ? (n = "", t != null && (n = t.replace(Dn, "$&/") + "/"), Kt(i, e, n, "", function(u) {
      return u;
    })) : i != null && (We(i) && (i = Kr(i, n + (!i.key || r && r.key === i.key ? "" : ("" + i.key).replace(Dn, "$&/") + "/") + t)), e.push(i)), 1;
    if (r = 0, s = s === "" ? "." : s + ":", Cn(t)) for (var a = 0; a < t.length; a++) {
      o = t[a];
      var l = s + he(o, a);
      r += Kt(o, e, n, l, i);
    }
    else if (l = $r(t), typeof l == "function") for (t = l.call(t), a = 0; !(o = t.next()).done; ) o = o.value, l = s + he(o, a++), r += Kt(o, e, n, l, i);
    else if (o === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return r;
  }
  function It(t, e, n) {
    if (t == null) return t;
    var s = [], i = 0;
    return Kt(t, s, "", "", function(o) {
      return e.call(n, o, i++);
    }), s;
  }
  function Gr(t) {
    if (t._status === -1) {
      var e = t._result;
      e = e(), e.then(function(n) {
        (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n);
      }, function(n) {
        (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n);
      }), t._status === -1 && (t._status = 0, t._result = e);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  function Qs() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  function ti(t, e, n) {
    var s, i = {}, o = null, r = null;
    n !== void 0 && (o = "" + n), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (r = e.ref);
    for (s in e) Yr.call(e, s) && !Jr.hasOwnProperty(s) && (i[s] = e[s]);
    if (t && t.defaultProps) for (s in e = t.defaultProps, e) i[s] === void 0 && (i[s] = e[s]);
    return { $$typeof: Xr, type: t, key: o, ref: r, props: i, _owner: Zr.current };
  }
  function ne(t) {
    const e = v.useRef(null);
    return e.current === null && (e.current = t()), e.current;
  }
  function to({ children: t, isPresent: e }) {
    const n = v.useId(), s = v.useRef(null), i = v.useRef({ width: 0, height: 0, top: 0, left: 0 }), { nonce: o } = v.useContext(Ct);
    return v.useInsertionEffect(() => {
      const { width: r, height: a, top: l, left: u } = i.current;
      if (e || !s.current || !r || !a) return;
      s.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return o && (c.nonce = o), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `), () => {
        document.head.removeChild(c);
      };
    }, [e]), W.jsx(Qr, { isPresent: e, childRef: s, sizeRef: i, children: v.cloneElement(t, { ref: s }) });
  }
  function no() {
    return /* @__PURE__ */ new Map();
  }
  function ei(t = true) {
    const e = v.useContext(se);
    if (e === null) return [true, null];
    const { isPresent: n, onExitComplete: s, register: i } = e, o = v.useId();
    v.useEffect(() => {
      t && i(o);
    }, [t]);
    const r = v.useCallback(() => t && s && s(o), [o, s, t]);
    return !n && s ? [false, r] : [true];
  }
  function Mn(t) {
    const e = [];
    return v.Children.forEach(t, (n) => {
      v.isValidElement(n) && e.push(n);
    }), e;
  }
  function He(t) {
    let e;
    return () => (e === void 0 && (e = t()), e);
  }
  function io(t) {
    let e = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = false, i = false;
    const o = /* @__PURE__ */ new WeakSet();
    let r = { delta: 0, timestamp: 0, isProcessing: false };
    function a(u) {
      o.has(u) && (l.schedule(u), t()), u(r);
    }
    const l = { schedule: (u, c = false, h = false) => {
      const d = h && s ? e : n;
      return c && o.add(u), d.has(u) || d.add(u), u;
    }, cancel: (u) => {
      n.delete(u), o.delete(u);
    }, process: (u) => {
      if (r = u, s) {
        i = true;
        return;
      }
      s = true, [e, n] = [n, e], e.forEach(a), e.clear(), s = false, i && (i = false, l.process(u));
    } };
    return l;
  }
  function ii(t, e) {
    let n = false, s = true;
    const i = { delta: 0, timestamp: 0, isProcessing: false }, o = () => n = true, r = Nt.reduce((g2, T2) => (g2[T2] = io(o), g2), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: h, postRender: f } = r, d = () => {
      const g2 = performance.now();
      n = false, i.delta = s ? 1e3 / 60 : Math.max(Math.min(g2 - i.timestamp, ro), 1), i.timestamp = g2, i.isProcessing = true, a.process(i), l.process(i), u.process(i), c.process(i), h.process(i), f.process(i), i.isProcessing = false, n && e && (s = false, t(d));
    }, p = () => {
      n = true, s = true, i.isProcessing || t(d);
    };
    return { schedule: Nt.reduce((g2, T2) => {
      const P2 = r[T2];
      return g2[T2] = (b2, x = false, V3 = false) => (n || p(), P2.schedule(b2, x, V3)), g2;
    }, {}), cancel: (g2) => {
      for (let T2 = 0; T2 < Nt.length; T2++) r[Nt[T2]].cancel(g2);
    }, state: i, steps: r };
  }
  function oo(t) {
    for (const e in t) pt[e] = { ...pt[e], ...t[e] };
  }
  function Xt(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || ao.has(t);
  }
  function ai(t) {
    t && (oi = (e) => e.startsWith("on") ? !Xt(e) : t(e));
  }
  function lo(t, e, n) {
    const s = {};
    for (const i in t) i === "values" && typeof t.values == "object" || (oi(i) || n === true && Xt(i) || !e && !Xt(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
    return s;
  }
  function Dc({ children: t, isValidProp: e, ...n }) {
    e && ai(e), n = { ...v.useContext(Ct), ...n }, n.isStatic = ne(() => n.isStatic);
    const s = v.useMemo(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
    return W.jsx(Ct.Provider, { value: s, children: t });
  }
  function uo(t) {
    if (typeof Proxy > "u") return t;
    const e = /* @__PURE__ */ new Map(), n = (...s) => t(...s);
    return new Proxy(n, { get: (s, i) => i === "create" ? t : (e.has(i) || e.set(i, t(i)), e.get(i)) });
  }
  function Dt(t) {
    return typeof t == "string" || Array.isArray(t);
  }
  function re(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function";
  }
  function oe(t) {
    return re(t.animate) || qe.some((e) => Dt(t[e]));
  }
  function li(t) {
    return !!(oe(t) || t.variants);
  }
  function co(t, e) {
    if (oe(t)) {
      const { initial: n, animate: s } = t;
      return { initial: n === false || Dt(n) ? n : void 0, animate: Dt(s) ? s : void 0 };
    }
    return t.inherit !== false ? e : {};
  }
  function ho(t) {
    const { initial: e, animate: n } = co(t, v.useContext(ie));
    return v.useMemo(() => ({ initial: e, animate: n }), [En(e), En(n)]);
  }
  function En(t) {
    return Array.isArray(t) ? t.join(" ") : t;
  }
  function lt(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
  }
  function po(t, e, n) {
    return v.useCallback((s) => {
      s && t.onMount && t.onMount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : lt(n) && (n.current = s));
    }, [e]);
  }
  function go(t, e, n, s, i) {
    var o, r;
    const { visualElement: a } = v.useContext(ie), l = v.useContext(ri), u = v.useContext(se), c = v.useContext(Ct).reducedMotion, h = v.useRef(null);
    s = s || l.renderer, !h.current && s && (h.current = s(t, { visualState: e, parent: a, props: n, presenceContext: u, blockInitialAnimation: u ? u.initial === false : false, reducedMotionConfig: c }));
    const f = h.current, d = v.useContext(ci);
    f && !f.projection && i && (f.type === "html" || f.type === "svg") && yo(h.current, n, i, d);
    const p = v.useRef(false);
    v.useInsertionEffect(() => {
      f && p.current && f.update(n, u);
    });
    const m = n[ui], y2 = v.useRef(!!m && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, m)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, m)));
    return ni(() => {
      f && (p.current = true, window.MotionIsMounted = true, f.updateFeatures(), Ze.render(f.render), y2.current && f.animationState && f.animationState.animateChanges());
    }), v.useEffect(() => {
      f && (!y2.current && f.animationState && f.animationState.animateChanges(), y2.current && (queueMicrotask(() => {
        var g2;
        (g2 = window.MotionHandoffMarkAsComplete) === null || g2 === void 0 || g2.call(window, m);
      }), y2.current = false));
    }), f;
  }
  function yo(t, e, n, s) {
    const { layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u } = e;
    t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : hi(t.parent)), t.projection.setOptions({ layoutId: i, layout: o, alwaysMeasureLayout: !!r || a && lt(a), visualElement: t, animationType: typeof o == "string" ? o : "both", initialPromotionConfig: s, layoutScroll: l, layoutRoot: u });
  }
  function hi(t) {
    if (t) return t.options.allowProjection !== false ? t.projection : hi(t.parent);
  }
  function vo({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: s, Component: i }) {
    var o, r;
    t && oo(t);
    function a(u, c) {
      let h;
      const f = { ...v.useContext(Ct), ...u, layoutId: xo(u) }, { isStatic: d } = f, p = ho(u), m = s(u, d);
      if (!d && ze) {
        To();
        const y2 = Po(f);
        h = y2.MeasureLayout, p.visualElement = go(i, m, f, e, y2.ProjectionNode);
      }
      return W.jsxs(ie.Provider, { value: p, children: [h && p.visualElement ? W.jsx(h, { visualElement: p.visualElement, ...f }) : null, n(i, u, po(m, p.visualElement, c), m, d, p.visualElement)] });
    }
    a.displayName = `motion.${typeof i == "string" ? i : `create(${(r = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && r !== void 0 ? r : ""})`}`;
    const l = v.forwardRef(a);
    return l[fo] = i, l;
  }
  function xo({ layoutId: t }) {
    const e = v.useContext(Ge).id;
    return e && t !== void 0 ? e + "-" + t : t;
  }
  function To(t, e) {
    v.useContext(ri).strict;
  }
  function Po(t) {
    const { drag: e, layout: n } = pt;
    if (!e && !n) return {};
    const s = { ...e, ...n };
    return { MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? s.MeasureLayout : void 0, ProjectionNode: s.ProjectionNode };
  }
  function Je(t) {
    return typeof t != "string" || t.includes("-") ? false : !!(So.indexOf(t) > -1 || /[A-Z]/u.test(t));
  }
  function Ln(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach((n, s) => {
      e[0][s] = n.get(), e[1][s] = n.getVelocity();
    }), e;
  }
  function Qe(t, e, n, s) {
    if (typeof e == "function") {
      const [i, o] = Ln(s);
      e = e(n !== void 0 ? n : t.custom, i, o);
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
      const [i, o] = Ln(s);
      e = e(n !== void 0 ? n : t.custom, i, o);
    }
    return e;
  }
  function Gt(t) {
    const e = j(t) ? t.get() : t;
    return wo(e) ? e.toValue() : e;
  }
  function Ao({ scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n }, s, i, o) {
    const r = { latestValues: Vo(s, i, o, t), renderState: e() };
    return n && (r.onMount = (a) => n({ props: s, current: a, ...r }), r.onUpdate = (a) => n(a)), r;
  }
  function Vo(t, e, n, s) {
    const i = {}, o = s(t, {});
    for (const f in o) i[f] = Gt(o[f]);
    let { initial: r, animate: a } = t;
    const l = oe(t), u = li(t);
    e && u && !l && t.inherit !== false && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
    let c = n ? n.initial === false : false;
    c = c || r === false;
    const h = c ? a : r;
    if (h && typeof h != "boolean" && !re(h)) {
      const f = Array.isArray(h) ? h : [h];
      for (let d = 0; d < f.length; d++) {
        const p = Qe(t, f[d]);
        if (p) {
          const { transitionEnd: m, transition: y2, ...g2 } = p;
          for (const T2 in g2) {
            let P2 = g2[T2];
            if (Array.isArray(P2)) {
              const b2 = c ? P2.length - 1 : 0;
              P2 = P2[b2];
            }
            P2 !== null && (i[T2] = P2);
          }
          for (const T2 in m) i[T2] = m[T2];
        }
      }
    }
    return i;
  }
  function jo(t, e, n) {
    let s = "", i = true;
    for (let o = 0; o < Fo; o++) {
      const r = yt[o], a = t[r];
      if (a === void 0) continue;
      let l = true;
      if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
        const u = mi(a, en[r]);
        if (!l) {
          i = false;
          const c = ko[r] || r;
          s += `${c}(${u}) `;
        }
        n && (e[r] = u);
      }
    }
    return s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s;
  }
  function nn(t, e, n) {
    const { style: s, vars: i, transformOrigin: o } = t;
    let r = false, a = false;
    for (const l in e) {
      const u = e[l];
      if (ot.has(l)) {
        r = true;
        continue;
      } else if (pi(l)) {
        i[l] = u;
        continue;
      } else {
        const c = mi(u, en[l]);
        l.startsWith("origin") ? (a = true, o[l] = c) : s[l] = c;
      }
    }
    if (e.transform || (r || n ? s.transform = jo(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
      const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
      s.transformOrigin = `${l} ${u} ${c}`;
    }
  }
  function Io(t, e, n = 1, s = 0, i = true) {
    t.pathLength = 1;
    const o = i ? Bo : Oo;
    t[o.offset] = S.transform(-s);
    const r = S.transform(e), a = S.transform(n);
    t[o.array] = `${r} ${a}`;
  }
  function jn(t, e, n) {
    return typeof t == "string" ? t : S.transform(e + n * t);
  }
  function _o(t, e, n) {
    const s = jn(e, t.x, t.width), i = jn(n, t.y, t.height);
    return `${s} ${i}`;
  }
  function sn(t, { attrX: e, attrY: n, attrScale: s, originX: i, originY: o, pathLength: r, pathSpacing: a = 1, pathOffset: l = 0, ...u }, c, h) {
    if (nn(t, u, h), c) {
      t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
      return;
    }
    t.attrs = t.style, t.style = {};
    const { attrs: f, style: d, dimensions: p } = t;
    f.transform && (p && (d.transform = f.transform), delete f.transform), p && (i !== void 0 || o !== void 0 || d.transform) && (d.transformOrigin = _o(p, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), s !== void 0 && (f.scale = s), r !== void 0 && Io(f, r, a, l, false);
  }
  function yi(t, { style: e, vars: n }, s, i) {
    Object.assign(t.style, e, i && i.getProjectionStyles(s));
    for (const o in n) t.style.setProperty(o, n[o]);
  }
  function xi(t, e, n, s) {
    yi(t, e, void 0, s);
    for (const i in e.attrs) t.setAttribute(vi.has(i) ? i : Ye(i), e.attrs[i]);
  }
  function No(t) {
    Object.assign(qt, t);
  }
  function Ti(t, { layout: e, layoutId: n }) {
    return ot.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!qt[t] || t === "opacity");
  }
  function an(t, e, n) {
    var s;
    const { style: i } = t, o = {};
    for (const r in i) (j(i[r]) || e.style && j(e.style[r]) || Ti(r, t) || ((s = n == null ? void 0 : n.getValue(r)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (o[r] = i[r]);
    return o;
  }
  function Pi(t, e, n) {
    const s = an(t, e, n);
    for (const i in t) if (j(t[i]) || j(e[i])) {
      const o = yt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = t[i];
    }
    return s;
  }
  function Uo(t, e) {
    try {
      e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
    } catch {
      e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
    }
  }
  function Si(t, e, n) {
    for (const s in e) !j(e[s]) && !Ti(s, n) && (t[s] = e[s]);
  }
  function Wo({ transformTemplate: t }, e) {
    return v.useMemo(() => {
      const n = rn();
      return nn(n, e, t), Object.assign({}, n.vars, n.style);
    }, [e]);
  }
  function Go(t, e) {
    const n = t.style || {}, s = {};
    return Si(s, n, t), Object.assign(s, Wo(t, e)), s;
  }
  function zo(t, e) {
    const n = {}, s = Go(t, e);
    return t.drag && t.dragListener !== false && (n.draggable = false, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === true ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n;
  }
  function Ho(t, e, n, s) {
    const i = v.useMemo(() => {
      const o = gi();
      return sn(o, e, on(s), t.transformTemplate), { ...o.attrs, style: { ...o.style } };
    }, [e]);
    if (t.style) {
      const o = {};
      Si(o, t.style, t), i.style = { ...o, ...i.style };
    }
    return i;
  }
  function Xo(t = false) {
    return (n, s, i, { latestValues: o }, r) => {
      const l = (Je(n) ? Ho : zo)(s, o, r, n), u = lo(s, typeof n == "string", t), c = n !== v.Fragment ? { ...u, ...l, ref: i } : {}, { children: h } = s, f = v.useMemo(() => j(h) ? h.get() : h, [h]);
      return v.createElement(n, { ...c, children: f });
    };
  }
  function qo(t, e) {
    return function(s, { forwardMotionProps: i } = { forwardMotionProps: false }) {
      const r = { ...Je(s) ? $o : Ko, preloadedFeatures: t, useRender: Xo(i), createVisualElement: e, Component: s };
      return vo(r);
    };
  }
  function wi(t, e) {
    if (!Array.isArray(e)) return false;
    const n = e.length;
    if (n !== t.length) return false;
    for (let s = 0; s < n; s++) if (e[s] !== t[s]) return false;
    return true;
  }
  function ae(t, e, n) {
    const s = t.getProps();
    return Qe(s, e, n !== void 0 ? n : s.custom, t);
  }
  function ln(t, e) {
    return t ? t[e] || t.default || t : void 0;
  }
  function bi(t) {
    let e = 0;
    const n = 50;
    let s = t.next(e);
    for (; !s.done && e < Ve; ) e += n, s = t.next(e);
    return e >= Ve ? 1 / 0 : e;
  }
  function un(t) {
    return typeof t == "function";
  }
  function On(t, e) {
    t.timeline = e, t.onfinish = null;
  }
  function ta(t, e) {
    const n = He(t);
    return () => {
      var s;
      return (s = Qo[e]) !== null && s !== void 0 ? s : n();
    };
  }
  function Vi(t) {
    return !!(typeof t == "function" && Yt() || !t || typeof t == "string" && (t in Ce || Yt()) || cn(t) || Array.isArray(t) && t.every(Vi));
  }
  function Ci(t, e) {
    if (t) return typeof t == "function" && Yt() ? Ai(t, e) : cn(t) ? Tt(t) : Array.isArray(t) ? t.map((n) => Ci(n, e) || Ce.easeOut) : Ce[t];
  }
  function Di() {
    return K.x || K.y;
  }
  function ea(t, e, n) {
    var s;
    if (t instanceof Element) return [t];
    if (typeof t == "string") {
      let i = document;
      const o = (s = void 0) !== null && s !== void 0 ? s : i.querySelectorAll(t);
      return o ? Array.from(o) : [];
    }
    return Array.from(t);
  }
  function Mi(t, e) {
    const n = ea(t), s = new AbortController(), i = { passive: true, ...e, signal: s.signal };
    return [n, i, () => s.abort()];
  }
  function In(t) {
    return (e) => {
      e.pointerType === "touch" || Di() || t(e);
    };
  }
  function na(t, e, n = {}) {
    const [s, i, o] = Mi(t, n), r = In((a) => {
      const { target: l } = a, u = e(a);
      if (typeof u != "function" || !l) return;
      const c = In((h) => {
        u(h), l.removeEventListener("pointerleave", c);
      });
      l.addEventListener("pointerleave", c, i);
    });
    return s.forEach((a) => {
      a.addEventListener("pointerenter", r, i);
    }), o;
  }
  function ia(t) {
    return sa.has(t.tagName) || t.tabIndex !== -1;
  }
  function _n(t) {
    return (e) => {
      e.key === "Enter" && t(e);
    };
  }
  function de(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: true, bubbles: true }));
  }
  function Nn(t) {
    return hn(t) && !Di();
  }
  function oa(t, e, n = {}) {
    const [s, i, o] = Mi(t, n), r = (a) => {
      const l = a.currentTarget;
      if (!Nn(a) || Pt.has(l)) return;
      Pt.add(l);
      const u = e(a), c = (d, p) => {
        window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", f), !(!Nn(d) || !Pt.has(l)) && (Pt.delete(l), typeof u == "function" && u(d, { success: p }));
      }, h = (d) => {
        c(d, n.useGlobalTarget || Ri(l, d.target));
      }, f = (d) => {
        c(d, false);
      };
      window.addEventListener("pointerup", h, i), window.addEventListener("pointercancel", f, i);
    };
    return s.forEach((a) => {
      !ia(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i), a.addEventListener("focus", (u) => ra(u, i), i);
    }), o;
  }
  function aa(t) {
    return t === "x" || t === "y" ? K[t] ? null : (K[t] = true, () => {
      K[t] = false;
    }) : K.x || K.y ? null : (K.x = K.y = true, () => {
      K.x = K.y = false;
    });
  }
  function la() {
    zt = void 0;
  }
  function fn(t, e) {
    t.indexOf(e) === -1 && t.push(e);
  }
  function dn(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  }
  function Li(t, e) {
    return e ? t * (1e3 / e) : 0;
  }
  function Rt(t, e) {
    return new ca(t, e);
  }
  function ha(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Rt(n));
  }
  function fa(t, e) {
    const n = ae(t, e);
    let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
    o = { ...o, ...s };
    for (const r in o) {
      const a = bo(o[r]);
      ha(t, r, a);
    }
  }
  function da(t) {
    return !!(j(t) && t.add);
  }
  function De(t, e) {
    const n = t.getValue("willChange");
    if (da(n)) return n.add(e);
  }
  function ki(t) {
    return t.props[ui];
  }
  function ga(t, e, n, s, i) {
    let o, r, a = 0;
    do
      r = e + (n - e) / 2, o = Fi(r, s, i) - t, o > 0 ? n = r : e = r;
    while (Math.abs(o) > pa && ++a < ma);
    return r;
  }
  function jt(t, e, n, s) {
    if (t === e && n === s) return I;
    const i = (o) => ga(o, 0, 1, t, n);
    return (o) => o === 0 || o === 1 ? o : Fi(i(o), e, s);
  }
  function ya(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || $i(t) : true;
  }
  function va(t) {
    return t == null;
  }
  function Pa(t) {
    let e = "", n = "", s = "", i = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), { red: parseInt(e, 16), green: parseInt(n, 16), blue: parseInt(s, 16), alpha: i ? parseInt(i, 16) / 255 : 1 };
  }
  function wa(t) {
    var e, n;
    return isNaN(t) && typeof t == "string" && (((e = t.match(yn)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Sa)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
  }
  function Et(t) {
    const e = t.toString(), n = [], s = { color: [], number: [], var: [] }, i = [];
    let o = 0;
    const a = e.replace(Va, (l) => (F.test(l) ? (s.color.push(o), i.push(Gi), n.push(F.parse(l))) : l.startsWith(Aa) ? (s.var.push(o), i.push(ba), n.push(l)) : (s.number.push(o), i.push(Wi), n.push(parseFloat(l))), ++o, $n)).split($n);
    return { values: n, split: a, indexes: s, types: i };
  }
  function zi(t) {
    return Et(t).values;
  }
  function Hi(t) {
    const { split: e, types: n } = Et(t), s = e.length;
    return (i) => {
      let o = "";
      for (let r = 0; r < s; r++) if (o += e[r], i[r] !== void 0) {
        const a = n[r];
        a === Wi ? o += wt(i[r]) : a === Gi ? o += F.transform(i[r]) : o += i[r];
      }
      return o;
    };
  }
  function Da(t) {
    const e = zi(t);
    return Hi(t)(e.map(Ca));
  }
  function Ra(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [s] = n.match(yn) || [];
    if (!s) return t;
    const i = n.replace(s, "");
    let o = Ma.has(e) ? 1 : 0;
    return s !== n && (o *= 100), e + "(" + o + i + ")";
  }
  function Xi(t, e) {
    let n = xn(t);
    return n !== Re && (n = Q), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
  }
  function Fa(t, e, n) {
    let s = 0, i;
    for (; s < t.length && !i; ) {
      const o = t[s];
      typeof o == "string" && !ka.has(o) && Et(o).values.length && (i = t[s]), s++;
    }
    if (i && n) for (const o of e) t[o] = Xi(n, i);
  }
  function Oa(t) {
    const e = [];
    return Ba.forEach((n) => {
      const s = t.getValue(n);
      s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
    }), e;
  }
  function qi() {
    if (Le) {
      const t = Array.from(rt).filter((s) => s.needsMeasurement), e = new Set(t.map((s) => s.element)), n = /* @__PURE__ */ new Map();
      e.forEach((s) => {
        const i = Oa(s);
        i.length && (n.set(s, i), s.render());
      }), t.forEach((s) => s.measureInitialState()), e.forEach((s) => {
        s.render();
        const i = n.get(s);
        i && i.forEach(([o, r]) => {
          var a;
          (a = s.getValue(o)) === null || a === void 0 || a.set(r);
        });
      }), t.forEach((s) => s.measureEndState()), t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
    }
    Le = false, Ee = false, rt.forEach((t) => t.complete()), rt.clear();
  }
  function Yi() {
    rt.forEach((t) => {
      t.readKeyframes(), t.needsMeasurement && (Le = true);
    });
  }
  function Ia() {
    Yi(), qi();
  }
  function Na(t) {
    const e = _a.exec(t);
    if (!e) return [,];
    const [, n, s, i] = e;
    return [`--${n ?? s}`, i];
  }
  function Ji(t, e, n = 1) {
    const [s, i] = Na(t);
    if (!s) return;
    const o = window.getComputedStyle(e).getPropertyValue(s);
    if (o) {
      const r = o.trim();
      return Zi(r) ? parseFloat(r) : r;
    }
    return tn(i) ? Ji(i, e, n + 1) : i;
  }
  function $a(t) {
    const e = t[0];
    if (t.length === 1) return true;
    for (let n = 0; n < t.length; n++) if (t[n] !== e) return true;
  }
  function Ka(t, e, n, s) {
    const i = t[0];
    if (i === null) return false;
    if (e === "display" || e === "visibility") return true;
    const o = t[t.length - 1], r = Hn(i, e), a = Hn(o, e);
    return !r || !a ? false : $a(t) || (n === "spring" || un(n)) && s;
  }
  function le(t, { repeat: e, repeatType: n = "loop" }, s) {
    const i = t.filter(Wa), o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
    return !o || s === void 0 ? i[o] : s;
  }
  function me(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
  }
  function za({ hue: t, saturation: e, lightness: n, alpha: s }) {
    t /= 360, e /= 100, n /= 100;
    let i = 0, o = 0, r = 0;
    if (!e) i = o = r = n;
    else {
      const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
      i = me(l, a, t + 1 / 3), o = me(l, a, t), r = me(l, a, t - 1 / 3);
    }
    return { red: Math.round(i * 255), green: Math.round(o * 255), blue: Math.round(r * 255), alpha: s };
  }
  function Zt(t, e) {
    return (n) => n > 0 ? e : t;
  }
  function Xn(t) {
    const e = Xa(t);
    if (!e) return false;
    let n = e.parse(t);
    return e === ut && (n = za(n)), n;
  }
  function Ya(t, e) {
    return ke.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
  }
  function Za(t, e) {
    return (n) => D(t, e, n);
  }
  function Pn(t) {
    return typeof t == "number" ? Za : typeof t == "string" ? tn(t) ? Zt : F.test(t) ? qn : tl : Array.isArray(t) ? sr : typeof t == "object" ? F.test(t) ? qn : Ja : Zt;
  }
  function sr(t, e) {
    const n = [...t], s = n.length, i = t.map((o, r) => Pn(o)(o, e[r]));
    return (o) => {
      for (let r = 0; r < s; r++) n[r] = i[r](o);
      return n;
    };
  }
  function Ja(t, e) {
    const n = { ...t, ...e }, s = {};
    for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = Pn(t[i])(t[i], e[i]));
    return (i) => {
      for (const o in s) n[o] = s[o](i);
      return n;
    };
  }
  function Qa(t, e) {
    var n;
    const s = [], i = { color: 0, var: 0, number: 0 };
    for (let o = 0; o < e.values.length; o++) {
      const r = e.types[o], a = t.indexes[r][i[r]], l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
      s[o] = l, i[r]++;
    }
    return s;
  }
  function ir(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? D(t, e, n) : Pn(t)(t, e);
  }
  function rr(t, e, n) {
    const s = Math.max(e - el, 0);
    return Li(n - t(s), e - s);
  }
  function nl({ duration: t = M.duration, bounce: e = M.bounce, velocity: n = M.velocity, mass: s = M.mass }) {
    let i, o, r = 1 - e;
    r = Y(M.minDamping, M.maxDamping, r), t = Y(M.minDuration, M.maxDuration, q(t)), r < 1 ? (i = (u) => {
      const c = u * r, h = c * t, f = c - n, d = Fe(u, r), p = Math.exp(-h);
      return ye - f / d * p;
    }, o = (u) => {
      const h = u * r * t, f = h * n + n, d = Math.pow(r, 2) * Math.pow(u, 2) * t, p = Math.exp(-h), m = Fe(Math.pow(u, 2), r);
      return (-i(u) + ye > 0 ? -1 : 1) * ((f - d) * p) / m;
    }) : (i = (u) => {
      const c = Math.exp(-u * t), h = (u - n) * t + 1;
      return -ye + c * h;
    }, o = (u) => {
      const c = Math.exp(-u * t), h = (n - u) * (t * t);
      return c * h;
    });
    const a = 5 / t, l = il(i, o, a);
    if (t = X(t), isNaN(l)) return { stiffness: M.stiffness, damping: M.damping, duration: t };
    {
      const u = Math.pow(l, 2) * s;
      return { stiffness: u, damping: r * 2 * Math.sqrt(s * u), duration: t };
    }
  }
  function il(t, e, n) {
    let s = n;
    for (let i = 1; i < sl; i++) s = s - t(s) / e(s);
    return s;
  }
  function Fe(t, e) {
    return t * Math.sqrt(1 - e * e);
  }
  function Yn(t, e) {
    return e.some((n) => t[n] !== void 0);
  }
  function al(t) {
    let e = { velocity: M.velocity, stiffness: M.stiffness, damping: M.damping, mass: M.mass, isResolvedFromDuration: false, ...t };
    if (!Yn(t, ol) && Yn(t, rl)) if (t.visualDuration) {
      const n = t.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, o = 2 * Y(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = { ...e, mass: M.mass, stiffness: i, damping: o };
    } else {
      const n = nl(t);
      e = { ...e, ...n, mass: M.mass }, e.isResolvedFromDuration = true;
    }
    return e;
  }
  function or(t = M.visualDuration, e = M.bounce) {
    const n = typeof t != "object" ? { visualDuration: t, keyframes: [0, 1], bounce: e } : t;
    let { restSpeed: s, restDelta: i } = n;
    const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: false, value: o }, { stiffness: l, damping: u, mass: c, duration: h, velocity: f, isResolvedFromDuration: d } = al({ ...n, velocity: -q(n.velocity || 0) }), p = f || 0, m = u / (2 * Math.sqrt(l * c)), y2 = r - o, g2 = q(Math.sqrt(l / c)), T2 = Math.abs(y2) < 5;
    s || (s = T2 ? M.restSpeed.granular : M.restSpeed.default), i || (i = T2 ? M.restDelta.granular : M.restDelta.default);
    let P2;
    if (m < 1) {
      const x = Fe(g2, m);
      P2 = (V3) => {
        const R3 = Math.exp(-m * g2 * V3);
        return r - R3 * ((p + m * g2 * y2) / x * Math.sin(x * V3) + y2 * Math.cos(x * V3));
      };
    } else if (m === 1) P2 = (x) => r - Math.exp(-g2 * x) * (y2 + (p + g2 * y2) * x);
    else {
      const x = g2 * Math.sqrt(m * m - 1);
      P2 = (V3) => {
        const R3 = Math.exp(-m * g2 * V3), w = Math.min(x * V3, 300);
        return r - R3 * ((p + m * g2 * y2) * Math.sinh(w) + x * y2 * Math.cosh(w)) / x;
      };
    }
    const b2 = { calculatedDuration: d && h || null, next: (x) => {
      const V3 = P2(x);
      if (d) a.done = x >= h;
      else {
        let R3 = 0;
        m < 1 && (R3 = x === 0 ? X(p) : rr(P2, x, V3));
        const w = Math.abs(R3) <= s, k = Math.abs(r - V3) <= i;
        a.done = w && k;
      }
      return a.value = a.done ? r : V3, a;
    }, toString: () => {
      const x = Math.min(bi(b2), Ve), V3 = Ai((R3) => b2.next(x * R3).value, x, 30);
      return x + "ms " + V3;
    } };
    return b2;
  }
  function Zn({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
    const h = t[0], f = { done: false, value: h }, d = (w) => a !== void 0 && w < a || l !== void 0 && w > l, p = (w) => a === void 0 ? l : l === void 0 || Math.abs(a - w) < Math.abs(l - w) ? a : l;
    let m = n * e;
    const y2 = h + m, g2 = r === void 0 ? y2 : r(y2);
    g2 !== y2 && (m = g2 - h);
    const T2 = (w) => -m * Math.exp(-w / s), P2 = (w) => g2 + T2(w), b2 = (w) => {
      const k = T2(w), N = P2(w);
      f.done = Math.abs(k) <= u, f.value = f.done ? g2 : N;
    };
    let x, V3;
    const R3 = (w) => {
      d(f.value) && (x = w, V3 = or({ keyframes: [f.value, p(f.value)], velocity: rr(P2, w, f.value), damping: i, stiffness: o, restDelta: u, restSpeed: c }));
    };
    return R3(0), { calculatedDuration: null, next: (w) => {
      let k = false;
      return !V3 && x === void 0 && (k = true, b2(w), R3(w)), x !== void 0 && w >= x ? V3.next(w - x) : (!k && b2(w), f);
    } };
  }
  function fl(t, e, n) {
    const s = [], i = n || ir, o = t.length - 1;
    for (let r = 0; r < o; r++) {
      let a = i(t[r], t[r + 1]);
      if (e) {
        const l = Array.isArray(e) ? e[r] || I : e;
        a = Bt(l, a);
      }
      s.push(a);
    }
    return s;
  }
  function dl(t, e, { clamp: n = true, ease: s, mixer: i } = {}) {
    const o = t.length;
    if (si(o === e.length), o === 1) return () => e[0];
    if (o === 2 && e[0] === e[1]) return () => e[1];
    const r = t[0] === t[1];
    t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const a = fl(e, s, i), l = a.length, u = (c) => {
      if (r && c < t[0]) return e[0];
      let h = 0;
      if (l > 1) for (; h < t.length - 2 && !(c < t[h + 1]); h++) ;
      const f = dt(t[h], t[h + 1], c);
      return a[h](f);
    };
    return n ? (c) => u(Y(t[0], t[o - 1], c)) : u;
  }
  function pl(t, e) {
    const n = t[t.length - 1];
    for (let s = 1; s <= e; s++) {
      const i = dt(0, e, s);
      t.push(D(n, 1, i));
    }
  }
  function ml(t) {
    const e = [0];
    return pl(e, t.length - 1), e;
  }
  function gl(t, e) {
    return t.map((n) => n * e);
  }
  function yl(t, e) {
    return t.map(() => e || ar).splice(0, t.length - 1);
  }
  function Jt({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
    const i = cl(s) ? s.map(Jn) : Jn(s), o = { done: false, value: e[0] }, r = gl(n && n.length === e.length ? n : ml(e), t), a = dl(r, e, { ease: Array.isArray(i) ? i : yl(e, i) });
    return { calculatedDuration: t, next: (l) => (o.value = a(l), o.done = l >= t, o) };
  }
  function Sl(t, e, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: l } = {}) {
    const u = { [e]: n };
    l && (u.offset = l);
    const c = Ci(a, i);
    return Array.isArray(c) && (u.easing = c), t.animate(u, { delay: s, duration: i, easing: Array.isArray(c) ? "linear" : c, fill: "both", iterations: o + 1, direction: r === "reverse" ? "alternate" : "normal" });
  }
  function Al(t) {
    return un(t.type) || t.type === "spring" || !Vi(t.ease);
  }
  function Vl(t, e) {
    const n = new Sn({ ...e, keyframes: t, repeat: 0, delay: 0, isGenerator: true });
    let s = { done: false, value: t[0] };
    const i = [];
    let o = 0;
    for (; !s.done && o < bl; ) s = n.sample(o), i.push(s.value), o += Qt;
    return { times: void 0, keyframes: i, duration: o - Qt, ease: "linear" };
  }
  function Cl(t) {
    return t in lr;
  }
  function kl({ when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length;
  }
  function Fl({ protectedKeys: t, needsAnimating: e }, n) {
    const s = t.hasOwnProperty(n) && e[n] !== true;
    return e[n] = false, s;
  }
  function ur(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
    var o;
    let { transition: r = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
    s && (r = s);
    const u = [], c = i && t.animationState && t.animationState.getState()[i];
    for (const h in l) {
      const f = t.getValue(h, (o = t.latestValues[h]) !== null && o !== void 0 ? o : null), d = l[h];
      if (d === void 0 || c && Fl(c, h)) continue;
      const p = { delay: n, ...ln(r || {}, h) };
      let m = false;
      if (window.MotionHandoffAnimation) {
        const g2 = ki(t);
        if (g2) {
          const T2 = window.MotionHandoffAnimation(g2, h, C);
          T2 !== null && (p.startTime = T2, m = true);
        }
      }
      De(t, h), f.start(wn(h, f, d, t.shouldReduceMotion && Ei.has(h) ? { type: false } : p, t, m));
      const y2 = f.animation;
      y2 && u.push(y2);
    }
    return a && Promise.all(u).then(() => {
      C.update(() => {
        a && fa(t, a);
      });
    }), u;
  }
  function je(t, e, n = {}) {
    var s;
    const i = ae(t, e, n.type === "exit" ? (s = t.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
    let { transition: o = t.getDefaultTransition() || {} } = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const r = i ? () => Promise.all(ur(t, i, n)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (u = 0) => {
      const { delayChildren: c = 0, staggerChildren: h, staggerDirection: f } = o;
      return jl(t, e, c + u, h, f, n);
    } : () => Promise.resolve(), { when: l } = o;
    if (l) {
      const [u, c] = l === "beforeChildren" ? [r, a] : [a, r];
      return u().then(() => c());
    } else return Promise.all([r(), a(n.delay)]);
  }
  function jl(t, e, n = 0, s = 0, i = 1, o) {
    const r = [], a = (t.variantChildren.size - 1) * s, l = i === 1 ? (u = 0) => u * s : (u = 0) => a - u * s;
    return Array.from(t.variantChildren).sort(Bl).forEach((u, c) => {
      u.notify("AnimationStart", e), r.push(je(u, e, { ...o, delay: n + l(c) }).then(() => u.notify("AnimationComplete", e)));
    }), Promise.all(r);
  }
  function Bl(t, e) {
    return t.sortNodePosition(e);
  }
  function Ol(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let s;
    if (Array.isArray(e)) {
      const i = e.map((o) => je(t, o, n));
      s = Promise.all(i);
    } else if (typeof e == "string") s = je(t, e, n);
    else {
      const i = typeof e == "function" ? ae(t, e, n.custom) : e;
      s = Promise.all(ur(t, i, n));
    }
    return s.then(() => {
      t.notify("AnimationComplete", e);
    });
  }
  function cr(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
      const n = t.parent ? cr(t.parent) || {} : {};
      return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
    }
    const e = {};
    for (let n = 0; n < Il; n++) {
      const s = qe[n], i = t.props[s];
      (Dt(i) || i === false) && (e[s] = i);
    }
    return e;
  }
  function Ul(t) {
    return (e) => Promise.all(e.map(({ animation: n, options: s }) => Ol(t, n, s)));
  }
  function $l(t) {
    let e = Ul(t), n = ts(), s = true;
    const i = (l) => (u, c) => {
      var h;
      const f = ae(t, c, l === "exit" ? (h = t.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
      if (f) {
        const { transition: d, transitionEnd: p, ...m } = f;
        u = { ...u, ...m, ...p };
      }
      return u;
    };
    function o(l) {
      e = l(t);
    }
    function r(l) {
      const { props: u } = t, c = cr(t.parent) || {}, h = [], f = /* @__PURE__ */ new Set();
      let d = {}, p = 1 / 0;
      for (let y2 = 0; y2 < Nl; y2++) {
        const g2 = _l[y2], T2 = n[g2], P2 = u[g2] !== void 0 ? u[g2] : c[g2], b2 = Dt(P2), x = g2 === l ? T2.isActive : null;
        x === false && (p = y2);
        let V3 = P2 === c[g2] && P2 !== u[g2] && b2;
        if (V3 && s && t.manuallyAnimateOnMount && (V3 = false), T2.protectedKeys = { ...d }, !T2.isActive && x === null || !P2 && !T2.prevProp || re(P2) || typeof P2 == "boolean") continue;
        const R3 = Kl(T2.prevProp, P2);
        let w = R3 || g2 === l && T2.isActive && !V3 && b2 || y2 > p && b2, k = false;
        const N = Array.isArray(P2) ? P2 : [P2];
        let at4 = N.reduce(i(g2), {});
        x === false && (at4 = {});
        const { prevResolvedValues: bn2 = {} } = T2, Er2 = { ...bn2, ...at4 }, An2 = (B) => {
          w = true, f.has(B) && (k = true, f.delete(B)), T2.needsAnimating[B] = true;
          const H2 = t.getValue(B);
          H2 && (H2.liveStyle = false);
        };
        for (const B in Er2) {
          const H2 = at4[B], ue3 = bn2[B];
          if (d.hasOwnProperty(B)) continue;
          let ce4 = false;
          Ae(H2) && Ae(ue3) ? ce4 = !wi(H2, ue3) : ce4 = H2 !== ue3, ce4 ? H2 != null ? An2(B) : f.add(B) : H2 !== void 0 && f.has(B) ? An2(B) : T2.protectedKeys[B] = true;
        }
        T2.prevProp = P2, T2.prevResolvedValues = at4, T2.isActive && (d = { ...d, ...at4 }), s && t.blockInitialAnimation && (w = false), w && (!(V3 && R3) || k) && h.push(...N.map((B) => ({ animation: B, options: { type: g2 } })));
      }
      if (f.size) {
        const y2 = {};
        f.forEach((g2) => {
          const T2 = t.getBaseTarget(g2), P2 = t.getValue(g2);
          P2 && (P2.liveStyle = true), y2[g2] = T2 ?? null;
        }), h.push({ animation: y2 });
      }
      let m = !!h.length;
      return s && (u.initial === false || u.initial === u.animate) && !t.manuallyAnimateOnMount && (m = false), s = false, m ? e(h) : Promise.resolve();
    }
    function a(l, u) {
      var c;
      if (n[l].isActive === u) return Promise.resolve();
      (c = t.variantChildren) === null || c === void 0 || c.forEach((f) => {
        var d;
        return (d = f.animationState) === null || d === void 0 ? void 0 : d.setActive(l, u);
      }), n[l].isActive = u;
      const h = r(l);
      for (const f in n) n[f].protectedKeys = {};
      return h;
    }
    return { animateChanges: r, setActive: a, setAnimateFunction: o, getState: () => n, reset: () => {
      n = ts(), s = true;
    } };
  }
  function Kl(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !wi(e, t) : false;
  }
  function et(t = false) {
    return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
  }
  function ts() {
    return { animate: et(true), whileInView: et(), whileHover: et(), whileTap: et(), whileDrag: et(), whileFocus: et(), exit: et() };
  }
  function Lt(t, e, n, s = { passive: true }) {
    return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
  }
  function Ot(t) {
    return { point: { x: t.pageX, y: t.pageY } };
  }
  function bt(t, e, n, s) {
    return Lt(t, e, Xl(n), s);
  }
  function ql(t, e) {
    const n = es(t.x, e.x), s = es(t.y, e.y);
    return Math.sqrt(n ** 2 + s ** 2);
  }
  function ve(t, e) {
    return e ? { point: e(t.point) } : t;
  }
  function ns(t, e) {
    return { x: t.x - e.x, y: t.y - e.y };
  }
  function xe({ point: t }, e) {
    return { point: t, delta: ns(t, fr(e)), offset: ns(t, Yl(e)), velocity: Zl(e, 0.1) };
  }
  function Yl(t) {
    return t[0];
  }
  function fr(t) {
    return t[t.length - 1];
  }
  function Zl(t, e) {
    if (t.length < 2) return { x: 0, y: 0 };
    let n = t.length - 1, s = null;
    const i = fr(t);
    for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > X(e))); ) n--;
    if (!s) return { x: 0, y: 0 };
    const o = q(i.timestamp - s.timestamp);
    if (o === 0) return { x: 0, y: 0 };
    const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
    return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
  }
  function _(t) {
    return t.max - t.min;
  }
  function nu(t, e, n) {
    return Math.abs(t - e) <= n;
  }
  function ss(t, e, n, s = 0.5) {
    t.origin = s, t.originPoint = D(e.min, e.max, t.origin), t.scale = _(n) / _(e), t.translate = D(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Jl && t.scale <= Ql || isNaN(t.scale)) && (t.scale = 1), (t.translate >= tu && t.translate <= eu || isNaN(t.translate)) && (t.translate = 0);
  }
  function At(t, e, n, s) {
    ss(t.x, e.x, n.x, s ? s.originX : void 0), ss(t.y, e.y, n.y, s ? s.originY : void 0);
  }
  function is(t, e, n) {
    t.min = n.min + e.min, t.max = t.min + _(e);
  }
  function su(t, e, n) {
    is(t.x, e.x, n.x), is(t.y, e.y, n.y);
  }
  function rs(t, e, n) {
    t.min = e.min - n.min, t.max = t.min + _(e);
  }
  function Vt(t, e, n) {
    rs(t.x, e.x, n.x), rs(t.y, e.y, n.y);
  }
  function iu(t, { min: e, max: n }, s) {
    return e !== void 0 && t < e ? t = s ? D(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? D(n, t, s.max) : Math.min(t, n)), t;
  }
  function os(t, e, n) {
    return { min: e !== void 0 ? t.min + e : void 0, max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0 };
  }
  function ru(t, { top: e, left: n, bottom: s, right: i }) {
    return { x: os(t.x, n, i), y: os(t.y, e, s) };
  }
  function as(t, e) {
    let n = e.min - t.min, s = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
  }
  function ou(t, e) {
    return { x: as(t.x, e.x), y: as(t.y, e.y) };
  }
  function au(t, e) {
    let n = 0.5;
    const s = _(t), i = _(e);
    return i > s ? n = dt(e.min, e.max - s, t.min) : s > i && (n = dt(t.min, t.max - i, e.min)), Y(0, 1, n);
  }
  function lu(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
  }
  function uu(t = Be) {
    return t === false ? t = 0 : t === true && (t = Be), { x: ls(t, "left", "right"), y: ls(t, "top", "bottom") };
  }
  function ls(t, e, n) {
    return { min: us(t, e), max: us(t, n) };
  }
  function us(t, e) {
    return typeof t == "number" ? t : t[e] || 0;
  }
  function $(t) {
    return [t("x"), t("y")];
  }
  function mr({ top: t, left: e, right: n, bottom: s }) {
    return { x: { min: e, max: n }, y: { min: t, max: s } };
  }
  function cu({ x: t, y: e }) {
    return { top: e.min, right: t.max, bottom: e.max, left: t.min };
  }
  function hu(t, e) {
    if (!e) return t;
    const n = e({ x: t.left, y: t.top }), s = e({ x: t.right, y: t.bottom });
    return { top: n.y, left: n.x, bottom: s.y, right: s.x };
  }
  function Te(t) {
    return t === void 0 || t === 1;
  }
  function Oe({ scale: t, scaleX: e, scaleY: n }) {
    return !Te(t) || !Te(e) || !Te(n);
  }
  function nt(t) {
    return Oe(t) || gr(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
  }
  function gr(t) {
    return fs(t.x) || fs(t.y);
  }
  function fs(t) {
    return t && t !== "0%";
  }
  function te(t, e, n) {
    const s = t - n, i = e * s;
    return n + i;
  }
  function ds(t, e, n, s, i) {
    return i !== void 0 && (t = te(t, i, s)), te(t, n, s) + e;
  }
  function Ie(t, e = 0, n = 1, s, i) {
    t.min = ds(t.min, e, n, s, i), t.max = ds(t.max, e, n, s, i);
  }
  function yr(t, { x: e, y: n }) {
    Ie(t.x, e.translate, e.scale, e.originPoint), Ie(t.y, n.translate, n.scale, n.originPoint);
  }
  function fu(t, e, n, s = false) {
    const i = n.length;
    if (!i) return;
    e.x = e.y = 1;
    let o, r;
    for (let a = 0; a < i; a++) {
      o = n[a], r = o.projectionDelta;
      const { visualElement: l } = o.options;
      l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && ft(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }), r && (e.x *= r.x.scale, e.y *= r.y.scale, yr(t, r)), s && nt(o.latestValues) && ft(t, o.latestValues));
    }
    e.x < ms && e.x > ps && (e.x = 1), e.y < ms && e.y > ps && (e.y = 1);
  }
  function ht(t, e) {
    t.min = t.min + e, t.max = t.max + e;
  }
  function gs(t, e, n, s, i = 0.5) {
    const o = D(t.min, t.max, i);
    Ie(t, e, n, o, s);
  }
  function ft(t, e) {
    gs(t.x, e.x, e.scaleX, e.scale, e.originX), gs(t.y, e.y, e.scaleY, e.scale, e.originY);
  }
  function vr(t, e) {
    return mr(hu(t.getBoundingClientRect(), e));
  }
  function du(t, e, n) {
    const s = vr(t, n), { scroll: i } = e;
    return i && (ht(s.x, i.offset.x), ht(s.y, i.offset.y)), s;
  }
  function $t(t, e, n) {
    return (e === true || e === t) && (n === null || n === t);
  }
  function gu(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
  }
  function vs(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
  }
  function Tr(t) {
    const [e, n] = ei(), s = v.useContext(Ge);
    return W.jsx(Tu, { ...t, layoutGroup: s, switchLayoutGroup: v.useContext(ci), isPresent: e, safeToRemove: n });
  }
  function Su(t, e, n) {
    const s = j(t) ? t : Rt(t);
    return s.start(wn("", s, e, n)), s.animation;
  }
  function wu(t) {
    return t instanceof SVGElement && t.tagName !== "svg";
  }
  function Vu(t, e) {
    const n = z.now(), s = ({ timestamp: i }) => {
      const o = i - n;
      o >= e && (J(s), t(o - e));
    };
    return C.read(s, true), () => J(s);
  }
  function Du(t, e, n, s, i, o) {
    i ? (t.opacity = D(0, n.opacity !== void 0 ? n.opacity : 1, Mu(s)), t.opacityExit = D(e.opacity !== void 0 ? e.opacity : 1, 0, Ru(s))) : o && (t.opacity = D(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
    for (let r = 0; r < Cu; r++) {
      const a = `border${Pr[r]}Radius`;
      let l = Ps(e, a), u = Ps(n, a);
      if (l === void 0 && u === void 0) continue;
      l || (l = 0), u || (u = 0), l === 0 || u === 0 || Ts(l) === Ts(u) ? (t[a] = Math.max(D(xs(l), xs(u), s), 0), (G.test(u) || G.test(l)) && (t[a] += "%")) : t[a] = u;
    }
    (e.rotate || n.rotate) && (t.rotate = D(e.rotate || 0, n.rotate || 0, s));
  }
  function Ps(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius;
  }
  function Sr(t, e, n) {
    return (s) => s < t ? 0 : s > e ? 1 : n(dt(t, e, s));
  }
  function Ss(t, e) {
    t.min = e.min, t.max = e.max;
  }
  function U(t, e) {
    Ss(t.x, e.x), Ss(t.y, e.y);
  }
  function ws(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
  }
  function bs(t, e, n, s, i) {
    return t -= e, t = te(t, 1 / n, s), i !== void 0 && (t = te(t, 1 / i, s)), t;
  }
  function Eu(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
    if (G.test(e) && (e = parseFloat(e), e = D(r.min, r.max, e / 100) - r.min), typeof e != "number") return;
    let a = D(o.min, o.max, s);
    t === o && (a -= e), t.min = bs(t.min, e, n, a, i), t.max = bs(t.max, e, n, a, i);
  }
  function As(t, e, [n, s, i], o, r) {
    Eu(t, e[n], e[s], e[i], e.scale, o, r);
  }
  function Vs(t, e, n, s) {
    As(t.x, e, Lu, n ? n.x : void 0, s ? s.x : void 0), As(t.y, e, ku, n ? n.y : void 0, s ? s.y : void 0);
  }
  function Cs(t) {
    return t.translate === 0 && t.scale === 1;
  }
  function wr(t) {
    return Cs(t.x) && Cs(t.y);
  }
  function Ds(t, e) {
    return t.min === e.min && t.max === e.max;
  }
  function Fu(t, e) {
    return Ds(t.x, e.x) && Ds(t.y, e.y);
  }
  function Ms(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
  }
  function br(t, e) {
    return Ms(t.x, e.x) && Ms(t.y, e.y);
  }
  function Rs(t) {
    return _(t.x) / _(t.y);
  }
  function Es(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
  }
  function Bu(t, e, n) {
    let s = "";
    const i = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
    if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
      const { transformPerspective: u, rotate: c, rotateX: h, rotateY: f, skewX: d, skewY: p } = n;
      u && (s = `perspective(${u}px) ${s}`), c && (s += `rotate(${c}deg) `), h && (s += `rotateX(${h}deg) `), f && (s += `rotateY(${f}deg) `), d && (s += `skewX(${d}deg) `), p && (s += `skewY(${p}deg) `);
    }
    const a = t.x.scale * e.x, l = t.y.scale * e.y;
    return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
  }
  function Se(t, e, n, s) {
    const { latestValues: i } = e;
    i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0));
  }
  function Ar(t) {
    if (t.hasCheckedOptimisedAppear = true, t.root === t) return;
    const { visualElement: e } = t.options;
    if (!e) return;
    const n = ki(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const { layout: i, layoutId: o } = t.options;
      window.MotionCancelOptimisedAnimation(n, "transform", C, !(i || o));
    }
    const { parent: s } = t;
    s && !s.hasCheckedOptimisedAppear && Ar(s);
  }
  function Vr({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
    return class {
      constructor(r = {}, a = e == null ? void 0 : e()) {
        this.id = Iu++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = false, St && (st.totalNodes = st.resolvedTargetDeltas = st.recalculatedProjection = 0), this.nodes.forEach(Uu), this.nodes.forEach(zu), this.nodes.forEach(Hu), this.nodes.forEach($u), St && window.MotionDebug.record(st);
        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
        for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = true;
        this.root === this && (this.nodes = new Au());
      }
      addEventListener(r, a) {
        return this.eventHandlers.has(r) || this.eventHandlers.set(r, new pn()), this.eventHandlers.get(r).add(a);
      }
      notifyListeners(r, ...a) {
        const l = this.eventHandlers.get(r);
        l && l.notify(...a);
      }
      hasListeners(r) {
        return this.eventHandlers.has(r);
      }
      mount(r, a = this.root.hasTreeAnimated) {
        if (this.instance) return;
        this.isSVG = wu(r), this.instance = r;
        const { layoutId: l, layout: u, visualElement: c } = this.options;
        if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = true), t) {
          let h;
          const f = () => this.root.updateBlockedByResize = false;
          t(r, () => {
            this.root.updateBlockedByResize = true, h && h(), h = Vu(f, 250), Ht.hasAnimatedSinceResize && (Ht.hasAnimatedSinceResize = false, this.nodes.forEach(Fs));
          });
        }
        l && this.root.registerSharedNode(l, this), this.options.animate !== false && c && (l || u) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: f, hasRelativeTargetChanged: d, layout: p }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          const m = this.options.transition || c.getDefaultTransition() || Ju, { onLayoutAnimationStart: y2, onLayoutAnimationComplete: g2 } = c.getProps(), T2 = !this.targetLayout || !br(this.targetLayout, p) || d, P2 = !f && d;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || P2 || f && (T2 || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, P2);
            const b2 = { ...ln(m, "layout"), onPlay: y2, onComplete: g2 };
            (c.shouldReduceMotion || this.options.layoutRoot) && (b2.delay = 0, b2.type = false), this.startAnimation(b2);
          } else f || Fs(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = p;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        const r = this.getStack();
        r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, J(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = true;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      startUpdate() {
        this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(Xu), this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: r } = this.options;
        return r && r.getProps().transformTemplate;
      }
      willUpdate(r = true) {
        if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ar(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
        this.isLayoutDirty = true;
        for (let c = 0; c < this.path.length; c++) {
          const h = this.path[c];
          h.shouldResetTransform = true, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(false);
        }
        const { layoutId: a, layout: l } = this.options;
        if (a === void 0 && !l) return;
        const u = this.getTransformTemplate();
        this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
      }
      update() {
        if (this.updateScheduled = false, this.isUpdateBlocked()) {
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ks);
          return;
        }
        this.isUpdating || this.nodes.forEach(Wu), this.isUpdating = false, this.nodes.forEach(Gu), this.nodes.forEach(_u), this.nodes.forEach(Nu), this.clearAllSnapshots();
        const a = z.now();
        L.delta = Y(0, 1e3 / 60, a - L.timestamp), L.timestamp = a, L.isProcessing = true, fe.update.process(L), fe.preRender.process(L), fe.render.process(L), L.isProcessing = false;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = true, Ze.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(Ku), this.sharedNodes.forEach(qu);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, C.preRender(this.updateProjection, false, true));
      }
      scheduleCheckAfterUnmount() {
        C.postRender(() => {
          this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        this.snapshot || !this.instance || (this.snapshot = this.measure());
      }
      updateLayout() {
        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
        if (this.resumeFrom && !this.resumeFrom.instance) for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
        const r = this.layout;
        this.layout = this.measure(false), this.layoutCorrected = E(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: a } = this.options;
        a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
      }
      updateScroll(r = "measure") {
        let a = !!(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = false), a) {
          const l = s(this.instance);
          this.scroll = { animationId: this.root.animationId, phase: r, isRoot: l, offset: n(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : l };
        }
      }
      resetTransform() {
        if (!i) return;
        const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !wr(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
        r && (a || nt(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = false, this.scheduleRender());
      }
      measure(r = true) {
        const a = this.measurePageBox();
        let l = this.removeElementScroll(a);
        return r && (l = this.removeTransform(l)), Qu(l), { animationId: this.root.animationId, measuredBox: a, layoutBox: l, latestValues: {}, source: this.id };
      }
      measurePageBox() {
        var r;
        const { visualElement: a } = this.options;
        if (!a) return E();
        const l = a.measureViewportBox();
        if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(tc))) {
          const { scroll: c } = this.root;
          c && (ht(l.x, c.offset.x), ht(l.y, c.offset.y));
        }
        return l;
      }
      removeElementScroll(r) {
        var a;
        const l = E();
        if (U(l, r), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return l;
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u], { scroll: h, options: f } = c;
          c !== this.root && h && f.layoutScroll && (h.wasRoot && U(l, r), ht(l.x, h.offset.x), ht(l.y, h.offset.y));
        }
        return l;
      }
      applyTransform(r, a = false) {
        const l = E();
        U(l, r);
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u];
          !a && c.options.layoutScroll && c.scroll && c !== c.root && ft(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }), nt(c.latestValues) && ft(l, c.latestValues);
        }
        return nt(this.latestValues) && ft(l, this.latestValues), l;
      }
      removeTransform(r) {
        const a = E();
        U(a, r);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !nt(u.latestValues)) continue;
          Oe(u.latestValues) && u.updateSnapshot();
          const c = E(), h = u.measurePageBox();
          U(c, h), Vs(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
        }
        return nt(this.latestValues) && Vs(a, this.latestValues), a;
      }
      setTargetDelta(r) {
        this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
      }
      setOptions(r) {
        this.options = { ...this.options, ...r, crossfade: r.crossfade !== void 0 ? r.crossfade : true };
      }
      clearMeasurements() {
        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== L.timestamp && this.relativeParent.resolveTargetDelta(true);
      }
      resolveTargetDelta(r = false) {
        var a;
        const l = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
        const u = !!this.resumingFrom || this !== l;
        if (!(r || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
        const { layout: h, layoutId: f } = this.options;
        if (!(!this.layout || !(h || f))) {
          if (this.resolvedRelativeTargetAt = L.timestamp, !this.targetDelta && !this.relativeTarget) {
            const d = this.getClosestProjectingParent();
            d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Vt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), U(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          if (!(!this.relativeTarget && !this.targetDelta)) {
            if (this.target || (this.target = E(), this.targetWithTransforms = E()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), su(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : U(this.target, this.layout.layoutBox), yr(this.target, this.targetDelta)) : U(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = false;
              const d = this.getClosestProjectingParent();
              d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Vt(this.relativeTargetOrigin, this.target, d.target), U(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
            }
            St && st.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (!(!this.parent || Oe(this.parent.latestValues) || gr(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
        var r;
        const a = this.getLead(), l = !!this.resumingFrom || this !== a;
        let u = true;
        if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (u = false), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = false), this.resolvedRelativeTargetAt === L.timestamp && (u = false), u) return;
        const { layout: c, layoutId: h } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || h)) return;
        U(this.layoutCorrected, this.layout.layoutBox);
        const f = this.treeScale.x, d = this.treeScale.y;
        fu(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = E());
        const { target: p } = a;
        if (!p) {
          this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ws(this.prevProjectionDelta.x, this.projectionDelta.x), ws(this.prevProjectionDelta.y, this.projectionDelta.y)), At(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== d || !Es(this.projectionDelta.x, this.prevProjectionDelta.x) || !Es(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", p)), St && st.recalculatedProjection++;
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender(r = true) {
        var a;
        if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), r) {
          const l = this.getStack();
          l && l.scheduleRender();
        }
        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = ct(), this.projectionDelta = ct(), this.projectionDeltaWithTransform = ct();
      }
      setAnimationOrigin(r, a = false) {
        const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = ct();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
        const f = E(), d = l ? l.source : void 0, p = this.layout ? this.layout.source : void 0, m = d !== p, y2 = this.getStack(), g2 = !y2 || y2.members.length <= 1, T2 = !!(m && !g2 && this.options.crossfade === true && !this.path.some(Zu));
        this.animationProgress = 0;
        let P2;
        this.mixTargetDelta = (b2) => {
          const x = b2 / 1e3;
          js(h.x, r.x, x), js(h.y, r.y, x), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Vt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Yu(this.relativeTarget, this.relativeTargetOrigin, f, x), P2 && Fu(this.relativeTarget, P2) && (this.isProjectionDirty = false), P2 || (P2 = E()), U(P2, this.relativeTarget)), m && (this.animationValues = c, Du(c, u, this.latestValues, x, T2, g2)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = x;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(r) {
        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (J(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = C.update(() => {
          Ht.hasAnimatedSinceResize = true, this.currentAnimation = Su(0, Ls, { ...r, onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          }, onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
        const r = this.getStack();
        r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ls), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        const r = this.getLead();
        let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
        if (!(!a || !l || !u)) {
          if (this !== r && this.layout && u && Cr(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
            l = this.target || E();
            const h = _(this.layout.layoutBox.x);
            l.x.min = r.target.x.min, l.x.max = l.x.min + h;
            const f = _(this.layout.layoutBox.y);
            l.y.min = r.target.y.min, l.y.max = l.y.min + f;
          }
          U(a, l), ft(a, c), At(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
        }
      }
      registerSharedNode(r, a) {
        this.sharedNodes.has(r) || this.sharedNodes.set(r, new ju()), this.sharedNodes.get(r).add(a);
        const u = a.options.initialPromotionConfig;
        a.promote({ transition: u ? u.transition : void 0, preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0 });
      }
      isLead() {
        const r = this.getStack();
        return r ? r.lead === this : true;
      }
      getLead() {
        var r;
        const { layoutId: a } = this.options;
        return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this;
      }
      getPrevLead() {
        var r;
        const { layoutId: a } = this.options;
        return a ? (r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead : void 0;
      }
      getStack() {
        const { layoutId: r } = this.options;
        if (r) return this.root.sharedNodes.get(r);
      }
      promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
        const u = this.getStack();
        u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = true), a && this.setOptions({ transition: a });
      }
      relegate() {
        const r = this.getStack();
        return r ? r.relegate(this) : false;
      }
      resetSkewAndRotation() {
        const { visualElement: r } = this.options;
        if (!r) return;
        let a = false;
        const { latestValues: l } = r;
        if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = true), !a) return;
        const u = {};
        l.z && Se("z", r, u, this.animationValues);
        for (let c = 0; c < Pe.length; c++) Se(`rotate${Pe[c]}`, r, u, this.animationValues), Se(`skew${Pe[c]}`, r, u, this.animationValues);
        r.render();
        for (const c in u) r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
        r.scheduleRender();
      }
      getProjectionStyles(r) {
        var a, l;
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return Ou;
        const u = { visibility: "" }, c = this.getTransformTemplate();
        if (this.needsReset) return this.needsReset = false, u.opacity = "", u.pointerEvents = Gt(r == null ? void 0 : r.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
        const h = this.getLead();
        if (!this.projectionDelta || !this.layout || !h.target) {
          const m = {};
          return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = Gt(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !nt(this.latestValues) && (m.transform = c ? c({}, "") : "none", this.hasProjected = false), m;
        }
        const f = h.animationValues || h.latestValues;
        this.applyTransformsToTarget(), u.transform = Bu(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
        const { x: d, y: p } = this.projectionDelta;
        u.transformOrigin = `${d.origin * 100}% ${p.origin * 100}% 0`, h.animationValues ? u.opacity = h === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = h === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
        for (const m in qt) {
          if (f[m] === void 0) continue;
          const { correct: y2, applyTo: g2 } = qt[m], T2 = u.transform === "none" ? f[m] : y2(f[m], h);
          if (g2) {
            const P2 = g2.length;
            for (let b2 = 0; b2 < P2; b2++) u[g2[b2]] = T2;
          } else u[m] = T2;
        }
        return this.options.layoutId && (u.pointerEvents = h === this ? Gt(r == null ? void 0 : r.pointerEvents) || "" : "none"), u;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((r) => {
          var a;
          return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
        }), this.root.nodes.forEach(ks), this.root.sharedNodes.clear();
      }
    };
  }
  function _u(t) {
    t.updateLayout();
  }
  function Nu(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
      const { layoutBox: s, measuredBox: i } = t.layout, { animationType: o } = t.options, r = n.source !== t.layout.source;
      o === "size" ? $((h) => {
        const f = r ? n.measuredBox[h] : n.layoutBox[h], d = _(f);
        f.min = s[h].min, f.max = f.min + d;
      }) : Cr(o, n.layoutBox, s) && $((h) => {
        const f = r ? n.measuredBox[h] : n.layoutBox[h], d = _(s[h]);
        f.max = f.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = true, t.relativeTarget[h].max = t.relativeTarget[h].min + d);
      });
      const a = ct();
      At(a, s, n.layoutBox);
      const l = ct();
      r ? At(l, t.applyTransform(i, true), n.measuredBox) : At(l, s, n.layoutBox);
      const u = !wr(a);
      let c = false;
      if (!t.resumeFrom) {
        const h = t.getClosestProjectingParent();
        if (h && !h.resumeFrom) {
          const { snapshot: f, layout: d } = h;
          if (f && d) {
            const p = E();
            Vt(p, n.layoutBox, f.layoutBox);
            const m = E();
            Vt(m, s, d.layoutBox), br(p, m) || (c = true), h.options.layoutRoot && (t.relativeTarget = m, t.relativeTargetOrigin = p, t.relativeParent = h);
          }
        }
      }
      t.notifyListeners("didUpdate", { layout: s, snapshot: n, delta: l, layoutDelta: a, hasLayoutChanged: u, hasRelativeTargetChanged: c });
    } else if (t.isLead()) {
      const { onExitComplete: s } = t.options;
      s && s();
    }
    t.options.transition = void 0;
  }
  function Uu(t) {
    St && st.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
  }
  function $u(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
  }
  function Ku(t) {
    t.clearSnapshot();
  }
  function ks(t) {
    t.clearMeasurements();
  }
  function Wu(t) {
    t.isLayoutDirty = false;
  }
  function Gu(t) {
    const { visualElement: e } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
  }
  function Fs(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = true;
  }
  function zu(t) {
    t.resolveTargetDelta();
  }
  function Hu(t) {
    t.calcProjection();
  }
  function Xu(t) {
    t.resetSkewAndRotation();
  }
  function qu(t) {
    t.removeLeadSnapshot();
  }
  function js(t, e, n) {
    t.translate = D(e.translate, 0, n), t.scale = D(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
  }
  function Bs(t, e, n, s) {
    t.min = D(e.min, n.min, s), t.max = D(e.max, n.max, s);
  }
  function Yu(t, e, n, s) {
    Bs(t.x, e.x, n.x, s), Bs(t.y, e.y, n.y, s);
  }
  function Zu(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0;
  }
  function _s(t) {
    t.min = Is(t.min), t.max = Is(t.max);
  }
  function Qu(t) {
    _s(t.x), _s(t.y);
  }
  function Cr(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !nu(Rs(e), Rs(n), 0.2);
  }
  function tc(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot);
  }
  function Ns(t, e, n) {
    const { props: s } = t;
    t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n, o = s[i];
    o && C.postRender(() => o(e, Ot(e)));
  }
  function Us(t, e, n) {
    const { props: s } = t;
    t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n), o = s[i];
    o && C.postRender(() => o(e, Ot(e)));
  }
  function lc({ root: t, ...e }) {
    const n = t || document;
    be.has(n) || be.set(n, {});
    const s = be.get(n), i = JSON.stringify(e);
    return s[i] || (s[i] = new IntersectionObserver(ac, { root: t, ...e })), s[i];
  }
  function uc(t, e, n) {
    const s = lc(e);
    return _e.set(t, n), s.observe(t), () => {
      _e.delete(t), s.unobserve(t);
    };
  }
  function fc({ viewport: t = {} }, { viewport: e = {} } = {}) {
    return (n) => t[n] !== e[n];
  }
  function mc() {
    if (Mr.current = true, !!ze) if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Ne.current = t.matches;
      t.addListener(e), e();
    } else Ne.current = false;
  }
  function vc(t, e, n) {
    for (const s in e) {
      const i = e[s], o = n[s];
      if (j(i)) t.addValue(s, i);
      else if (j(o)) t.addValue(s, Rt(i, { owner: t }));
      else if (o !== i) if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === true ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, Rt(r !== void 0 ? r : i, { owner: t }));
      }
    }
    for (const s in n) e[s] === void 0 && t.removeValue(s);
    return e;
  }
  function Tc(t) {
    return window.getComputedStyle(t);
  }
  var Ws, ee, Gs, A, kt, Lr, kr, Fr, jr, Br, Or, Ir, _r, Nr, Ur, Vn, zs, Hs, Xs, $e, Cn, Ys, Ke, Zs, Dn, O, Wt, zr, v, Hr, Xr, qr, Yr, Zr, Jr, W, Ge, se, Ct, Qr, eo, _t, ze, ni, Cc, I, si, dt, X, q, so, Nt, ro, C, J, L, fe, ri, Rn, pt, ao, oi, ie, Xe, qe, fo, Ye, mo, ui, Ze, ci, So, Ae, wo, bo, j, fi, yt, ot, di, pi, Co, tn, Do, mi, Y, vt, Mt, Ut, Ft, Z, G, S, Mo, Ro, kn, Eo, Lo, Fn, en, ko, Fo, Bo, Oo, rn, gi, on, vi, qt, Bn, $o, Ko, Yo, Zo, Jo, Ve, cn, Qo, Yt, Ai, Tt, Ce, K, Ri, hn, sa, Pt, ra, Ei, zt, z, pn, Un, ua, ca, Fi, pa, ma, ji, Bi, Oi, mn, Ii, _i, gn, Ni, Ui, $i, wt, yn, xa, vn, Ki, Ta, pe, it, Me, ut, F, Sa, Wi, Gi, ba, Aa, $n, Va, Ca, Q, Ma, Ea, Re, La, xn, ka, Kn, Wn, Gn, ja, Ba, mt, rt, Ee, Le, Tn, Zi, _a, Qi, Ua, tr, zn, er, Hn, Wa, Ga, nr, D, ge, Ha, Xa, qn, qa, Bt, ke, tl, el, M, ye, sl, rl, ol, ll, ul, ar, cl, hl, Jn, vl, xl, Tl, Sn, Pl, wl, Qt, bl, lr, Qn, Dl, Ml, Rl, El, Ll, wn, Il, _l, Nl, tt, Wl, Gl, zl, Hl, Xl, es, hr, dr, Jl, Ql, pr, tu, eu, Be, cs, ct, hs, E, ps, ms, xr, pu, mu, yu, ys, vu, Ht, xt, xu, Tu, Pu, bu, Au, Pr, Cu, xs, Ts, Mu, Ru, Lu, ku, ju, st, St, Pe, Ou, Ls, Iu, Ju, Os, Is, ec, we, Dr, nc, sc, ic, rc, _e, be, oc, ac, cc, hc, dc, pc, Ne, Mr, gc, yc, $s, Ks, xc, Rr, Pc, Sc, wc, bc, Rc;
  var init_motion_CBSrzxBb = __esm({
    "assets/motion-CBSrzxBb.js"() {
      Ws = { exports: {} };
      ee = {};
      Gs = { exports: {} };
      A = {};
      kt = /* @__PURE__ */ Symbol.for("react.element");
      Lr = /* @__PURE__ */ Symbol.for("react.portal");
      kr = /* @__PURE__ */ Symbol.for("react.fragment");
      Fr = /* @__PURE__ */ Symbol.for("react.strict_mode");
      jr = /* @__PURE__ */ Symbol.for("react.profiler");
      Br = /* @__PURE__ */ Symbol.for("react.provider");
      Or = /* @__PURE__ */ Symbol.for("react.context");
      Ir = /* @__PURE__ */ Symbol.for("react.forward_ref");
      _r = /* @__PURE__ */ Symbol.for("react.suspense");
      Nr = /* @__PURE__ */ Symbol.for("react.memo");
      Ur = /* @__PURE__ */ Symbol.for("react.lazy");
      Vn = Symbol.iterator;
      zs = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      Hs = Object.assign;
      Xs = {};
      gt.prototype.isReactComponent = {};
      gt.prototype.setState = function(t, e) {
        if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, t, e, "setState");
      };
      gt.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
      };
      qs.prototype = gt.prototype;
      $e = Ue.prototype = new qs();
      $e.constructor = Ue;
      Hs($e, gt.prototype);
      $e.isPureReactComponent = true;
      Cn = Array.isArray;
      Ys = Object.prototype.hasOwnProperty;
      Ke = { current: null };
      Zs = { key: true, ref: true, __self: true, __source: true };
      Dn = /\/+/g;
      O = { current: null };
      Wt = { transition: null };
      zr = { ReactCurrentDispatcher: O, ReactCurrentBatchConfig: Wt, ReactCurrentOwner: Ke };
      A.Children = { map: It, forEach: function(t, e, n) {
        It(t, function() {
          e.apply(this, arguments);
        }, n);
      }, count: function(t) {
        var e = 0;
        return It(t, function() {
          e++;
        }), e;
      }, toArray: function(t) {
        return It(t, function(e) {
          return e;
        }) || [];
      }, only: function(t) {
        if (!We(t)) throw Error("React.Children.only expected to receive a single React element child.");
        return t;
      } };
      A.Component = gt;
      A.Fragment = kr;
      A.Profiler = jr;
      A.PureComponent = Ue;
      A.StrictMode = Fr;
      A.Suspense = _r;
      A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zr;
      A.act = Qs;
      A.cloneElement = function(t, e, n) {
        if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
        var s = Hs({}, t.props), i = t.key, o = t.ref, r = t._owner;
        if (e != null) {
          if (e.ref !== void 0 && (o = e.ref, r = Ke.current), e.key !== void 0 && (i = "" + e.key), t.type && t.type.defaultProps) var a = t.type.defaultProps;
          for (l in e) Ys.call(e, l) && !Zs.hasOwnProperty(l) && (s[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
        }
        var l = arguments.length - 2;
        if (l === 1) s.children = n;
        else if (1 < l) {
          a = Array(l);
          for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
          s.children = a;
        }
        return { $$typeof: kt, type: t.type, key: i, ref: o, props: s, _owner: r };
      };
      A.createContext = function(t) {
        return t = { $$typeof: Or, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: Br, _context: t }, t.Consumer = t;
      };
      A.createElement = Js;
      A.createFactory = function(t) {
        var e = Js.bind(null, t);
        return e.type = t, e;
      };
      A.createRef = function() {
        return { current: null };
      };
      A.forwardRef = function(t) {
        return { $$typeof: Ir, render: t };
      };
      A.isValidElement = We;
      A.lazy = function(t) {
        return { $$typeof: Ur, _payload: { _status: -1, _result: t }, _init: Gr };
      };
      A.memo = function(t, e) {
        return { $$typeof: Nr, type: t, compare: e === void 0 ? null : e };
      };
      A.startTransition = function(t) {
        var e = Wt.transition;
        Wt.transition = {};
        try {
          t();
        } finally {
          Wt.transition = e;
        }
      };
      A.unstable_act = Qs;
      A.useCallback = function(t, e) {
        return O.current.useCallback(t, e);
      };
      A.useContext = function(t) {
        return O.current.useContext(t);
      };
      A.useDebugValue = function() {
      };
      A.useDeferredValue = function(t) {
        return O.current.useDeferredValue(t);
      };
      A.useEffect = function(t, e) {
        return O.current.useEffect(t, e);
      };
      A.useId = function() {
        return O.current.useId();
      };
      A.useImperativeHandle = function(t, e, n) {
        return O.current.useImperativeHandle(t, e, n);
      };
      A.useInsertionEffect = function(t, e) {
        return O.current.useInsertionEffect(t, e);
      };
      A.useLayoutEffect = function(t, e) {
        return O.current.useLayoutEffect(t, e);
      };
      A.useMemo = function(t, e) {
        return O.current.useMemo(t, e);
      };
      A.useReducer = function(t, e, n) {
        return O.current.useReducer(t, e, n);
      };
      A.useRef = function(t) {
        return O.current.useRef(t);
      };
      A.useState = function(t) {
        return O.current.useState(t);
      };
      A.useSyncExternalStore = function(t, e, n) {
        return O.current.useSyncExternalStore(t, e, n);
      };
      A.useTransition = function() {
        return O.current.useTransition();
      };
      A.version = "18.3.1";
      Gs.exports = A;
      v = Gs.exports;
      Hr = v;
      Xr = /* @__PURE__ */ Symbol.for("react.element");
      qr = /* @__PURE__ */ Symbol.for("react.fragment");
      Yr = Object.prototype.hasOwnProperty;
      Zr = Hr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      Jr = { key: true, ref: true, __self: true, __source: true };
      ee.Fragment = qr;
      ee.jsx = ti;
      ee.jsxs = ti;
      Ws.exports = ee;
      W = Ws.exports;
      Ge = v.createContext({});
      se = v.createContext(null);
      Ct = v.createContext({ transformPagePoint: (t) => t, isStatic: false, reducedMotion: "never" });
      Qr = class extends v.Component {
        getSnapshotBeforeUpdate(e) {
          const n = this.props.childRef.current;
          if (n && e.isPresent && !this.props.isPresent) {
            const s = this.props.sizeRef.current;
            s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft;
          }
          return null;
        }
        componentDidUpdate() {
        }
        render() {
          return this.props.children;
        }
      };
      eo = ({ children: t, initial: e, isPresent: n, onExitComplete: s, custom: i, presenceAffectsLayout: o, mode: r }) => {
        const a = ne(no), l = v.useId(), u = v.useCallback((h) => {
          a.set(h, true);
          for (const f of a.values()) if (!f) return;
          s && s();
        }, [a, s]), c = v.useMemo(() => ({ id: l, initial: e, isPresent: n, custom: i, onExitComplete: u, register: (h) => (a.set(h, false), () => a.delete(h)) }), o ? [Math.random(), u] : [n, u]);
        return v.useMemo(() => {
          a.forEach((h, f) => a.set(f, false));
        }, [n]), v.useEffect(() => {
          !n && !a.size && s && s();
        }, [n]), r === "popLayout" && (t = W.jsx(to, { isPresent: n, children: t })), W.jsx(se.Provider, { value: c, children: t });
      };
      _t = (t) => t.key || "";
      ze = typeof window < "u";
      ni = ze ? v.useLayoutEffect : v.useEffect;
      Cc = ({ children: t, custom: e, initial: n = true, onExitComplete: s, presenceAffectsLayout: i = true, mode: o = "sync", propagate: r = false }) => {
        const [a, l] = ei(r), u = v.useMemo(() => Mn(t), [t]), c = r && !a ? [] : u.map(_t), h = v.useRef(true), f = v.useRef(u), d = ne(() => /* @__PURE__ */ new Map()), [p, m] = v.useState(u), [y2, g2] = v.useState(u);
        ni(() => {
          h.current = false, f.current = u;
          for (let b2 = 0; b2 < y2.length; b2++) {
            const x = _t(y2[b2]);
            c.includes(x) ? d.delete(x) : d.get(x) !== true && d.set(x, false);
          }
        }, [y2, c.length, c.join("-")]);
        const T2 = [];
        if (u !== p) {
          let b2 = [...u];
          for (let x = 0; x < y2.length; x++) {
            const V3 = y2[x], R3 = _t(V3);
            c.includes(R3) || (b2.splice(x, 0, V3), T2.push(V3));
          }
          o === "wait" && T2.length && (b2 = T2), g2(Mn(b2)), m(u);
          return;
        }
        const { forceRender: P2 } = v.useContext(Ge);
        return W.jsx(W.Fragment, { children: y2.map((b2) => {
          const x = _t(b2), V3 = r && !a ? false : u === y2 || c.includes(x), R3 = () => {
            if (d.has(x)) d.set(x, true);
            else return;
            let w = true;
            d.forEach((k) => {
              k || (w = false);
            }), w && (P2 == null || P2(), g2(f.current), r && (l == null || l()), s && s());
          };
          return W.jsx(eo, { isPresent: V3, initial: !h.current || n ? void 0 : false, custom: V3 ? void 0 : e, presenceAffectsLayout: i, mode: o, onExitComplete: V3 ? void 0 : R3, children: b2 }, x);
        }) });
      };
      I = (t) => t;
      si = I;
      dt = (t, e, n) => {
        const s = e - t;
        return s === 0 ? 1 : (n - t) / s;
      };
      X = (t) => t * 1e3;
      q = (t) => t / 1e3;
      so = { useManualTiming: false };
      Nt = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
      ro = 40;
      ({ schedule: C, cancel: J, state: L, steps: fe } = ii(typeof requestAnimationFrame < "u" ? requestAnimationFrame : I, true));
      ri = v.createContext({ strict: false });
      Rn = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] };
      pt = {};
      for (const t in Rn) pt[t] = { isEnabled: (e) => Rn[t].some((n) => !!e[n]) };
      ao = /* @__PURE__ */ new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
      oi = (t) => !Xt(t);
      try {
        ai(__require("@emotion/is-prop-valid").default);
      } catch {
      }
      ie = v.createContext({});
      Xe = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
      qe = ["initial", ...Xe];
      fo = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
      Ye = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
      mo = "framerAppearId";
      ui = "data-" + Ye(mo);
      ({ schedule: Ze } = ii(queueMicrotask, false));
      ci = v.createContext({});
      So = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
      Ae = (t) => Array.isArray(t);
      wo = (t) => !!(t && typeof t == "object" && t.mix && t.toValue);
      bo = (t) => Ae(t) ? t[t.length - 1] || 0 : t;
      j = (t) => !!(t && t.getVelocity);
      fi = (t) => (e, n) => {
        const s = v.useContext(ie), i = v.useContext(se), o = () => Ao(t, e, s, i);
        return n ? o() : ne(o);
      };
      yt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
      ot = new Set(yt);
      di = (t) => (e) => typeof e == "string" && e.startsWith(t);
      pi = di("--");
      Co = di("var(--");
      tn = (t) => Co(t) ? Do.test(t.split("/*")[0].trim()) : false;
      Do = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
      mi = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
      Y = (t, e, n) => n > e ? e : n < t ? t : n;
      vt = { test: (t) => typeof t == "number", parse: parseFloat, transform: (t) => t };
      Mt = { ...vt, transform: (t) => Y(0, 1, t) };
      Ut = { ...vt, default: 1 };
      Ft = (t) => ({ test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1, parse: parseFloat, transform: (e) => `${e}${t}` });
      Z = Ft("deg");
      G = Ft("%");
      S = Ft("px");
      Mo = Ft("vh");
      Ro = Ft("vw");
      kn = { ...G, parse: (t) => G.parse(t) / 100, transform: (t) => G.transform(t * 100) };
      Eo = { borderWidth: S, borderTopWidth: S, borderRightWidth: S, borderBottomWidth: S, borderLeftWidth: S, borderRadius: S, radius: S, borderTopLeftRadius: S, borderTopRightRadius: S, borderBottomRightRadius: S, borderBottomLeftRadius: S, width: S, maxWidth: S, height: S, maxHeight: S, top: S, right: S, bottom: S, left: S, padding: S, paddingTop: S, paddingRight: S, paddingBottom: S, paddingLeft: S, margin: S, marginTop: S, marginRight: S, marginBottom: S, marginLeft: S, backgroundPositionX: S, backgroundPositionY: S };
      Lo = { rotate: Z, rotateX: Z, rotateY: Z, rotateZ: Z, scale: Ut, scaleX: Ut, scaleY: Ut, scaleZ: Ut, skew: Z, skewX: Z, skewY: Z, distance: S, translateX: S, translateY: S, translateZ: S, x: S, y: S, z: S, perspective: S, transformPerspective: S, opacity: Mt, originX: kn, originY: kn, originZ: S };
      Fn = { ...vt, transform: Math.round };
      en = { ...Eo, ...Lo, zIndex: Fn, size: S, fillOpacity: Mt, strokeOpacity: Mt, numOctaves: Fn };
      ko = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" };
      Fo = yt.length;
      Bo = { offset: "stroke-dashoffset", array: "stroke-dasharray" };
      Oo = { offset: "strokeDashoffset", array: "strokeDasharray" };
      rn = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
      gi = () => ({ ...rn(), attrs: {} });
      on = (t) => typeof t == "string" && t.toLowerCase() === "svg";
      vi = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
      qt = {};
      Bn = ["x", "y", "width", "height", "cx", "cy", "r"];
      $o = { useVisualState: fi({ scrapeMotionValuesFromProps: Pi, createRenderState: gi, onUpdate: ({ props: t, prevProps: e, current: n, renderState: s, latestValues: i }) => {
        if (!n) return;
        let o = !!t.drag;
        if (!o) {
          for (const a in i) if (ot.has(a)) {
            o = true;
            break;
          }
        }
        if (!o) return;
        let r = !e;
        if (e) for (let a = 0; a < Bn.length; a++) {
          const l = Bn[a];
          t[l] !== e[l] && (r = true);
        }
        r && C.read(() => {
          Uo(n, s), C.render(() => {
            sn(s, i, on(n.tagName), t.transformTemplate), xi(n, s);
          });
        });
      } }) };
      Ko = { useVisualState: fi({ scrapeMotionValuesFromProps: an, createRenderState: rn }) };
      Yo = He(() => window.ScrollTimeline !== void 0);
      Zo = class {
        constructor(e) {
          this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
        }
        get finished() {
          return Promise.all(this.animations.map((e) => "finished" in e ? e.finished : e));
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, n) {
          for (let s = 0; s < this.animations.length; s++) this.animations[s][e] = n;
        }
        attachTimeline(e, n) {
          const s = this.animations.map((i) => {
            if (Yo() && i.attachTimeline) return i.attachTimeline(e);
            if (typeof n == "function") return n(i);
          });
          return () => {
            s.forEach((i, o) => {
              i && i(), this.animations[o].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(e) {
          this.setAll("time", e);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(e) {
          this.setAll("speed", e);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let e = 0;
          for (let n = 0; n < this.animations.length; n++) e = Math.max(e, this.animations[n].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((n) => n[e]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      };
      Jo = class extends Zo {
        then(e, n) {
          return Promise.all(this.animations).then(e).catch(n);
        }
      };
      Ve = 2e4;
      cn = (t) => Array.isArray(t) && typeof t[0] == "number";
      Qo = { linearEasing: void 0 };
      Yt = ta(() => {
        try {
          document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch {
          return false;
        }
        return true;
      }, "linearEasing");
      Ai = (t, e, n = 10) => {
        let s = "";
        const i = Math.max(Math.round(e / n), 2);
        for (let o = 0; o < i; o++) s += t(dt(0, i - 1, o)) + ", ";
        return `linear(${s.substring(0, s.length - 2)})`;
      };
      Tt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`;
      Ce = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: Tt([0, 0.65, 0.55, 1]), circOut: Tt([0.55, 0, 1, 0.45]), backIn: Tt([0.31, 0.01, 0.66, -0.59]), backOut: Tt([0.33, 1.53, 0.69, 0.99]) };
      K = { x: false, y: false };
      Ri = (t, e) => e ? t === e ? true : Ri(t, e.parentElement) : false;
      hn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false;
      sa = /* @__PURE__ */ new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
      Pt = /* @__PURE__ */ new WeakSet();
      ra = (t, e) => {
        const n = t.currentTarget;
        if (!n) return;
        const s = _n(() => {
          if (Pt.has(n)) return;
          de(n, "down");
          const i = _n(() => {
            de(n, "up");
          }), o = () => de(n, "cancel");
          n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e);
        });
        n.addEventListener("keydown", s, e), n.addEventListener("blur", () => n.removeEventListener("keydown", s), e);
      };
      Ei = /* @__PURE__ */ new Set(["width", "height", "top", "left", "right", "bottom", ...yt]);
      z = { now: () => (zt === void 0 && z.set(L.isProcessing || so.useManualTiming ? L.timestamp : performance.now()), zt), set: (t) => {
        zt = t, queueMicrotask(la);
      } };
      pn = class {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return fn(this.subscriptions, e), () => dn(this.subscriptions, e);
        }
        notify(e, n, s) {
          const i = this.subscriptions.length;
          if (i) if (i === 1) this.subscriptions[0](e, n, s);
          else for (let o = 0; o < i; o++) {
            const r = this.subscriptions[o];
            r && r(e, n, s);
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      };
      Un = 30;
      ua = (t) => !isNaN(parseFloat(t));
      ca = class {
        constructor(e, n = {}) {
          this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, i = true) => {
            const o = z.now();
            this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
          }, this.hasAnimated = false, this.setCurrent(e), this.owner = n.owner;
        }
        setCurrent(e) {
          this.current = e, this.updatedAt = z.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = ua(this.current));
        }
        setPrevFrameValue(e = this.current) {
          this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, n) {
          this.events[e] || (this.events[e] = new pn());
          const s = this.events[e].add(n);
          return e === "change" ? () => {
            s(), C.read(() => {
              this.events.change.getSize() || this.stop();
            });
          } : s;
        }
        clearListeners() {
          for (const e in this.events) this.events[e].clear();
        }
        attach(e, n) {
          this.passiveEffect = e, this.stopPassiveEffect = n;
        }
        set(e, n = true) {
          !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
        }
        setWithVelocity(e, n, s) {
          this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
        }
        jump(e, n = true) {
          this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          const e = z.now();
          if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Un) return 0;
          const n = Math.min(this.updatedAt - this.prevUpdatedAt, Un);
          return Li(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
        }
        start(e) {
          return this.stop(), new Promise((n) => {
            this.hasAnimated = true, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
          }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
          });
        }
        stop() {
          this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
        }
      };
      Fi = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
      pa = 1e-7;
      ma = 12;
      ji = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
      Bi = (t) => (e) => 1 - t(1 - e);
      Oi = jt(0.33, 1.53, 0.69, 0.99);
      mn = Bi(Oi);
      Ii = ji(mn);
      _i = (t) => (t *= 2) < 1 ? 0.5 * mn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
      gn = (t) => 1 - Math.sin(Math.acos(t));
      Ni = Bi(gn);
      Ui = ji(gn);
      $i = (t) => /^0[^.\s]+$/u.test(t);
      wt = (t) => Math.round(t * 1e5) / 1e5;
      yn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
      xa = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      vn = (t, e) => (n) => !!(typeof n == "string" && xa.test(n) && n.startsWith(t) || e && !va(n) && Object.prototype.hasOwnProperty.call(n, e));
      Ki = (t, e, n) => (s) => {
        if (typeof s != "string") return s;
        const [i, o, r, a] = s.match(yn);
        return { [t]: parseFloat(i), [e]: parseFloat(o), [n]: parseFloat(r), alpha: a !== void 0 ? parseFloat(a) : 1 };
      };
      Ta = (t) => Y(0, 255, t);
      pe = { ...vt, transform: (t) => Math.round(Ta(t)) };
      it = { test: vn("rgb", "red"), parse: Ki("red", "green", "blue"), transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + pe.transform(t) + ", " + pe.transform(e) + ", " + pe.transform(n) + ", " + wt(Mt.transform(s)) + ")" };
      Me = { test: vn("#"), parse: Pa, transform: it.transform };
      ut = { test: vn("hsl", "hue"), parse: Ki("hue", "saturation", "lightness"), transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + G.transform(wt(e)) + ", " + G.transform(wt(n)) + ", " + wt(Mt.transform(s)) + ")" };
      F = { test: (t) => it.test(t) || Me.test(t) || ut.test(t), parse: (t) => it.test(t) ? it.parse(t) : ut.test(t) ? ut.parse(t) : Me.parse(t), transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? it.transform(t) : ut.transform(t) };
      Sa = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      Wi = "number";
      Gi = "color";
      ba = "var";
      Aa = "var(";
      $n = "${}";
      Va = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      Ca = (t) => typeof t == "number" ? 0 : t;
      Q = { test: wa, parse: zi, createTransformer: Hi, getAnimatableNone: Da };
      Ma = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
      Ea = /\b([a-z-]*)\(.*?\)/gu;
      Re = { ...Q, getAnimatableNone: (t) => {
        const e = t.match(Ea);
        return e ? e.map(Ra).join(" ") : t;
      } };
      La = { ...en, color: F, backgroundColor: F, outlineColor: F, fill: F, stroke: F, borderColor: F, borderTopColor: F, borderRightColor: F, borderBottomColor: F, borderLeftColor: F, filter: Re, WebkitFilter: Re };
      xn = (t) => La[t];
      ka = /* @__PURE__ */ new Set(["auto", "none", "0"]);
      Kn = (t) => t === vt || t === S;
      Wn = (t, e) => parseFloat(t.split(", ")[e]);
      Gn = (t, e) => (n, { transform: s }) => {
        if (s === "none" || !s) return 0;
        const i = s.match(/^matrix3d\((.+)\)$/u);
        if (i) return Wn(i[1], e);
        {
          const o = s.match(/^matrix\((.+)\)$/u);
          return o ? Wn(o[1], t) : 0;
        }
      };
      ja = /* @__PURE__ */ new Set(["x", "y", "z"]);
      Ba = yt.filter((t) => !ja.has(t));
      mt = { width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n), height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n), top: (t, { top: e }) => parseFloat(e), left: (t, { left: e }) => parseFloat(e), bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min), right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min), x: Gn(4, 13), y: Gn(5, 14) };
      mt.translateX = mt.x;
      mt.translateY = mt.y;
      rt = /* @__PURE__ */ new Set();
      Ee = false;
      Le = false;
      Tn = class {
        constructor(e, n, s, i, o, r = false) {
          this.isComplete = false, this.isAsync = false, this.needsMeasurement = false, this.isScheduled = false, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
        }
        scheduleResolve() {
          this.isScheduled = true, this.isAsync ? (rt.add(this), Ee || (Ee = true, C.read(Yi), C.resolveKeyframes(qi))) : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
          for (let o = 0; o < e.length; o++) if (e[o] === null) if (o === 0) {
            const r = i == null ? void 0 : i.get(), a = e[e.length - 1];
            if (r !== void 0) e[0] = r;
            else if (s && n) {
              const l = s.readValue(n, a);
              l != null && (e[0] = l);
            }
            e[0] === void 0 && (e[0] = a), i && r === void 0 && i.set(e[0]);
          } else e[o] = e[o - 1];
        }
        setFinalKeyframe() {
        }
        measureInitialState() {
        }
        renderEndStyles() {
        }
        measureEndState() {
        }
        complete() {
          this.isComplete = true, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), rt.delete(this);
        }
        cancel() {
          this.isComplete || (this.isScheduled = false, rt.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      };
      Zi = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
      _a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      Qi = (t) => (e) => e.test(t);
      Ua = { test: (t) => t === "auto", parse: (t) => t };
      tr = [vt, S, G, Z, Ro, Mo, Ua];
      zn = (t) => tr.find(Qi(t));
      er = class extends Tn {
        constructor(e, n, s, i, o) {
          super(e, n, s, i, o, true);
        }
        readKeyframes() {
          const { unresolvedKeyframes: e, element: n, name: s } = this;
          if (!n || !n.current) return;
          super.readKeyframes();
          for (let l = 0; l < e.length; l++) {
            let u = e[l];
            if (typeof u == "string" && (u = u.trim(), tn(u))) {
              const c = Ji(u, n.current);
              c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
            }
          }
          if (this.resolveNoneKeyframes(), !Ei.has(s) || e.length !== 2) return;
          const [i, o] = e, r = zn(i), a = zn(o);
          if (r !== a) if (Kn(r) && Kn(a)) for (let l = 0; l < e.length; l++) {
            const u = e[l];
            typeof u == "string" && (e[l] = parseFloat(u));
          }
          else this.needsMeasurement = true;
        }
        resolveNoneKeyframes() {
          const { unresolvedKeyframes: e, name: n } = this, s = [];
          for (let i = 0; i < e.length; i++) ya(e[i]) && s.push(i);
          s.length && Fa(e, s, n);
        }
        measureInitialState() {
          const { element: e, unresolvedKeyframes: n, name: s } = this;
          if (!e || !e.current) return;
          s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = mt[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
          const i = n[n.length - 1];
          i !== void 0 && e.getValue(s, i).jump(i, false);
        }
        measureEndState() {
          var e;
          const { element: n, name: s, unresolvedKeyframes: i } = this;
          if (!n || !n.current) return;
          const o = n.getValue(s);
          o && o.jump(this.measuredOrigin, false);
          const r = i.length - 1, a = i[r];
          i[r] = mt[s](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([l, u]) => {
            n.getValue(l).set(u);
          }), this.resolveNoneKeyframes();
        }
      };
      Hn = (t, e) => e === "zIndex" ? false : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Q.test(t) || t === "0") && !t.startsWith("url("));
      Wa = (t) => t !== null;
      Ga = 40;
      nr = class {
        constructor({ autoplay: e = true, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
          this.isStopped = false, this.hasAttemptedResolve = false, this.createdAt = z.now(), this.options = { autoplay: e, delay: n, type: s, repeat: i, repeatDelay: o, repeatType: r, ...a }, this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt ? this.resolvedAt - this.createdAt > Ga ? this.resolvedAt : this.createdAt : this.createdAt;
        }
        get resolved() {
          return !this._resolved && !this.hasAttemptedResolve && Ia(), this._resolved;
        }
        onKeyframesResolved(e, n) {
          this.resolvedAt = z.now(), this.hasAttemptedResolve = true;
          const { name: s, type: i, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
          if (!u && !Ka(e, s, i, o)) if (r) this.options.duration = 0;
          else {
            l && l(le(e, this.options, n)), a && a(), this.resolveFinishedPromise();
            return;
          }
          const c = this.initPlayback(e, n);
          c !== false && (this._resolved = { keyframes: e, finalKeyframe: n, ...c }, this.onPostResolved());
        }
        onPostResolved() {
        }
        then(e, n) {
          return this.currentFinishedPromise.then(e, n);
        }
        flatten() {
          this.options.type = "keyframes", this.options.ease = "linear";
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      };
      D = (t, e, n) => t + (e - t) * n;
      ge = (t, e, n) => {
        const s = t * t, i = n * (e * e - s) + s;
        return i < 0 ? 0 : Math.sqrt(i);
      };
      Ha = [Me, it, ut];
      Xa = (t) => Ha.find((e) => e.test(t));
      qn = (t, e) => {
        const n = Xn(t), s = Xn(e);
        if (!n || !s) return Zt(t, e);
        const i = { ...n };
        return (o) => (i.red = ge(n.red, s.red, o), i.green = ge(n.green, s.green, o), i.blue = ge(n.blue, s.blue, o), i.alpha = D(n.alpha, s.alpha, o), it.transform(i));
      };
      qa = (t, e) => (n) => e(t(n));
      Bt = (...t) => t.reduce(qa);
      ke = /* @__PURE__ */ new Set(["none", "hidden"]);
      tl = (t, e) => {
        const n = Q.createTransformer(e), s = Et(t), i = Et(e);
        return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? ke.has(t) && !i.values.length || ke.has(e) && !s.values.length ? Ya(t, e) : Bt(sr(Qa(s, i), i.values), n) : Zt(t, e);
      };
      el = 5;
      M = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: 0.3, visualDuration: 0.3, restSpeed: { granular: 0.01, default: 2 }, restDelta: { granular: 5e-3, default: 0.5 }, minDuration: 0.01, maxDuration: 10, minDamping: 0.05, maxDamping: 1 };
      ye = 1e-3;
      sl = 12;
      rl = ["duration", "bounce"];
      ol = ["stiffness", "damping", "mass"];
      ll = jt(0.42, 0, 1, 1);
      ul = jt(0, 0, 0.58, 1);
      ar = jt(0.42, 0, 0.58, 1);
      cl = (t) => Array.isArray(t) && typeof t[0] != "number";
      hl = { linear: I, easeIn: ll, easeInOut: ar, easeOut: ul, circIn: gn, circInOut: Ui, circOut: Ni, backIn: mn, backInOut: Ii, backOut: Oi, anticipate: _i };
      Jn = (t) => {
        if (cn(t)) {
          si(t.length === 4);
          const [e, n, s, i] = t;
          return jt(e, n, s, i);
        } else if (typeof t == "string") return hl[t];
        return t;
      };
      vl = (t) => {
        const e = ({ timestamp: n }) => t(n);
        return { start: () => C.update(e, true), stop: () => J(e), now: () => L.isProcessing ? L.timestamp : z.now() };
      };
      xl = { decay: Zn, inertia: Zn, tween: Jt, keyframes: Jt, spring: or };
      Tl = (t) => t / 100;
      Sn = class extends nr {
        constructor(e) {
          super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = true, this.state === "idle") return;
            this.teardown();
            const { onStop: l } = this.options;
            l && l();
          };
          const { name: n, motionValue: s, element: i, keyframes: o } = this.options, r = (i == null ? void 0 : i.KeyframeResolver) || Tn, a = (l, u) => this.onKeyframesResolved(l, u);
          this.resolver = new r(o, a, n, s, i), this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
        }
        initPlayback(e) {
          const { type: n = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = this.options, a = un(n) ? n : xl[n] || Jt;
          let l, u;
          a !== Jt && typeof e[0] != "number" && (l = Bt(Tl, ir(e[0], e[1])), e = [0, 100]);
          const c = a({ ...this.options, keyframes: e });
          o === "mirror" && (u = a({ ...this.options, keyframes: [...e].reverse(), velocity: -r })), c.calculatedDuration === null && (c.calculatedDuration = bi(c));
          const { calculatedDuration: h } = c, f = h + i, d = f * (s + 1) - i;
          return { generator: c, mirroredGenerator: u, mapPercentToKeyframes: l, calculatedDuration: h, resolvedDuration: f, totalDuration: d };
        }
        onPostResolved() {
          const { autoplay: e = true } = this.options;
          this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState;
        }
        tick(e, n = false) {
          const { resolved: s } = this;
          if (!s) {
            const { keyframes: w } = this.options;
            return { done: true, value: w[w.length - 1] };
          }
          const { finalKeyframe: i, generator: o, mirroredGenerator: r, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: h } = s;
          if (this.startTime === null) return o.next(0);
          const { delay: f, repeat: d, repeatType: p, repeatDelay: m, onUpdate: y2 } = this.options;
          this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
          const g2 = this.currentTime - f * (this.speed >= 0 ? 1 : -1), T2 = this.speed >= 0 ? g2 < 0 : g2 > c;
          this.currentTime = Math.max(g2, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
          let P2 = this.currentTime, b2 = o;
          if (d) {
            const w = Math.min(this.currentTime, c) / h;
            let k = Math.floor(w), N = w % 1;
            !N && w >= 1 && (N = 1), N === 1 && k--, k = Math.min(k, d + 1), !!(k % 2) && (p === "reverse" ? (N = 1 - N, m && (N -= m / h)) : p === "mirror" && (b2 = r)), P2 = Y(0, 1, N) * h;
          }
          const x = T2 ? { done: false, value: l[0] } : b2.next(P2);
          a && (x.value = a(x.value));
          let { done: V3 } = x;
          !T2 && u !== null && (V3 = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
          const R3 = this.holdTime === null && (this.state === "finished" || this.state === "running" && V3);
          return R3 && i !== void 0 && (x.value = le(l, this.options, i)), y2 && y2(x.value), R3 && this.finish(), x;
        }
        get duration() {
          const { resolved: e } = this;
          return e ? q(e.calculatedDuration) : 0;
        }
        get time() {
          return q(this.currentTime);
        }
        set time(e) {
          e = X(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          const n = this.playbackSpeed !== e;
          this.playbackSpeed = e, n && (this.time = q(this.currentTime));
        }
        play() {
          if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          const { driver: e = vl, onPlay: n, startTime: s } = this.options;
          this.driver || (this.driver = e((o) => this.tick(o))), n && n();
          const i = this.driver.now();
          this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = s ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0;
        }
        complete() {
          this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
        }
        finish() {
          this.teardown(), this.state = "finished";
          const { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
        }
        teardown() {
          this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), this.driver = void 0);
        }
        sample(e) {
          return this.startTime = 0, this.tick(e, true);
        }
      };
      Pl = /* @__PURE__ */ new Set(["opacity", "clipPath", "filter", "transform"]);
      wl = He(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      Qt = 10;
      bl = 2e4;
      lr = { anticipate: _i, backInOut: Ii, circInOut: Ui };
      Qn = class extends nr {
        constructor(e) {
          super(e);
          const { name: n, motionValue: s, element: i, keyframes: o } = this.options;
          this.resolver = new er(o, (r, a) => this.onKeyframesResolved(r, a), n, s, i), this.resolver.scheduleResolve();
        }
        initPlayback(e, n) {
          let { duration: s = 300, times: i, ease: o, type: r, motionValue: a, name: l, startTime: u } = this.options;
          if (!a.owner || !a.owner.current) return false;
          if (typeof o == "string" && Yt() && Cl(o) && (o = lr[o]), Al(this.options)) {
            const { onComplete: h, onUpdate: f, motionValue: d, element: p, ...m } = this.options, y2 = Vl(e, m);
            e = y2.keyframes, e.length === 1 && (e[1] = e[0]), s = y2.duration, i = y2.times, o = y2.ease, r = "keyframes";
          }
          const c = Sl(a.owner.current, l, e, { ...this.options, duration: s, times: i, ease: o });
          return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (On(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
            const { onComplete: h } = this.options;
            a.set(le(e, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
          }, { animation: c, duration: s, times: i, type: r, ease: o, keyframes: e };
        }
        get duration() {
          const { resolved: e } = this;
          if (!e) return 0;
          const { duration: n } = e;
          return q(n);
        }
        get time() {
          const { resolved: e } = this;
          if (!e) return 0;
          const { animation: n } = e;
          return q(n.currentTime || 0);
        }
        set time(e) {
          const { resolved: n } = this;
          if (!n) return;
          const { animation: s } = n;
          s.currentTime = X(e);
        }
        get speed() {
          const { resolved: e } = this;
          if (!e) return 1;
          const { animation: n } = e;
          return n.playbackRate;
        }
        set speed(e) {
          const { resolved: n } = this;
          if (!n) return;
          const { animation: s } = n;
          s.playbackRate = e;
        }
        get state() {
          const { resolved: e } = this;
          if (!e) return "idle";
          const { animation: n } = e;
          return n.playState;
        }
        get startTime() {
          const { resolved: e } = this;
          if (!e) return null;
          const { animation: n } = e;
          return n.startTime;
        }
        attachTimeline(e) {
          if (!this._resolved) this.pendingTimeline = e;
          else {
            const { resolved: n } = this;
            if (!n) return I;
            const { animation: s } = n;
            On(s, e);
          }
          return I;
        }
        play() {
          if (this.isStopped) return;
          const { resolved: e } = this;
          if (!e) return;
          const { animation: n } = e;
          n.playState === "finished" && this.updateFinishedPromise(), n.play();
        }
        pause() {
          const { resolved: e } = this;
          if (!e) return;
          const { animation: n } = e;
          n.pause();
        }
        stop() {
          if (this.resolver.cancel(), this.isStopped = true, this.state === "idle") return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          const { resolved: e } = this;
          if (!e) return;
          const { animation: n, keyframes: s, duration: i, type: o, ease: r, times: a } = e;
          if (n.playState === "idle" || n.playState === "finished") return;
          if (this.time) {
            const { motionValue: u, onUpdate: c, onComplete: h, element: f, ...d } = this.options, p = new Sn({ ...d, keyframes: s, duration: i, type: o, ease: r, times: a, isGenerator: true }), m = X(this.time);
            u.setWithVelocity(p.sample(m - Qt).value, p.sample(m).value, Qt);
          }
          const { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          const { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          const { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          const { motionValue: n, name: s, repeatDelay: i, repeatType: o, damping: r, type: a } = e;
          if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return false;
          const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
          return wl() && s && Pl.has(s) && !l && !u && !i && o !== "mirror" && r !== 0 && a !== "inertia";
        }
      };
      Dl = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
      Ml = (t) => ({ type: "spring", stiffness: 550, damping: t === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 });
      Rl = { type: "keyframes", duration: 0.8 };
      El = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 };
      Ll = (t, { keyframes: e }) => e.length > 2 ? Rl : ot.has(t) ? t.startsWith("scale") ? Ml(e[1]) : Dl : El;
      wn = (t, e, n, s = {}, i, o) => (r) => {
        const a = ln(s, t) || {}, l = a.delay || s.delay || 0;
        let { elapsed: u = 0 } = s;
        u = u - X(l);
        let c = { keyframes: Array.isArray(n) ? n : [null, n], ease: "easeOut", velocity: e.getVelocity(), ...a, delay: -u, onUpdate: (f) => {
          e.set(f), a.onUpdate && a.onUpdate(f);
        }, onComplete: () => {
          r(), a.onComplete && a.onComplete();
        }, name: t, motionValue: e, element: o ? void 0 : i };
        kl(a) || (c = { ...c, ...Ll(t, c) }), c.duration && (c.duration = X(c.duration)), c.repeatDelay && (c.repeatDelay = X(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
        let h = false;
        if ((c.type === false || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (h = true)), h && !o && e.get() !== void 0) {
          const f = le(c.keyframes, a);
          if (f !== void 0) return C.update(() => {
            c.onUpdate(f), c.onComplete();
          }), new Jo([]);
        }
        return !o && Qn.supports(c) ? new Qn(c) : new Sn(c);
      };
      Il = qe.length;
      _l = [...Xe].reverse();
      Nl = Xe.length;
      tt = class {
        constructor(e) {
          this.isMounted = false, this.node = e;
        }
        update() {
        }
      };
      Wl = class extends tt {
        constructor(e) {
          super(e), e.animationState || (e.animationState = $l(e));
        }
        updateAnimationControlsSubscription() {
          const { animate: e } = this.node.getProps();
          re(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
          e !== n && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var e;
          this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this);
        }
      };
      Gl = 0;
      zl = class extends tt {
        constructor() {
          super(...arguments), this.id = Gl++;
        }
        update() {
          if (!this.node.presenceContext) return;
          const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === s) return;
          const i = this.node.animationState.setActive("exit", !e);
          n && !e && i.then(() => n(this.id));
        }
        mount() {
          const { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {
        }
      };
      Hl = { animation: { Feature: Wl }, exit: { Feature: zl } };
      Xl = (t) => (e) => hn(e) && t(e, Ot(e));
      es = (t, e) => Math.abs(t - e);
      hr = class {
        constructor(e, n, { transformPagePoint: s, contextWindow: i, dragSnapToOrigin: o = false } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const h = xe(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, d = ql(h.offset, { x: 0, y: 0 }) >= 3;
            if (!f && !d) return;
            const { point: p } = h, { timestamp: m } = L;
            this.history.push({ ...p, timestamp: m });
            const { onStart: y2, onMove: g2 } = this.handlers;
            f || (y2 && y2(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), g2 && g2(this.lastMoveEvent, h);
          }, this.handlePointerMove = (h, f) => {
            this.lastMoveEvent = h, this.lastMoveEventInfo = ve(f, this.transformPagePoint), C.update(this.updatePoint, true);
          }, this.handlePointerUp = (h, f) => {
            this.end();
            const { onEnd: d, onSessionEnd: p, resumeAnimation: m } = this.handlers;
            if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const y2 = xe(h.type === "pointercancel" ? this.lastMoveEventInfo : ve(f, this.transformPagePoint), this.history);
            this.startEvent && d && d(h, y2), p && p(h, y2);
          }, !hn(e)) return;
          this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
          const r = Ot(e), a = ve(r, this.transformPagePoint), { point: l } = a, { timestamp: u } = L;
          this.history = [{ ...l, timestamp: u }];
          const { onSessionStart: c } = n;
          c && c(e, xe(a, this.history)), this.removeListeners = Bt(bt(this.contextWindow, "pointermove", this.handlePointerMove), bt(this.contextWindow, "pointerup", this.handlePointerUp), bt(this.contextWindow, "pointercancel", this.handlePointerUp));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(), J(this.updatePoint);
        }
      };
      dr = 1e-4;
      Jl = 1 - dr;
      Ql = 1 + dr;
      pr = 0.01;
      tu = 0 - pr;
      eu = 0 + pr;
      Be = 0.35;
      cs = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 });
      ct = () => ({ x: cs(), y: cs() });
      hs = () => ({ min: 0, max: 0 });
      E = () => ({ x: hs(), y: hs() });
      ps = 0.999999999999;
      ms = 1.0000000000001;
      xr = ({ current: t }) => t ? t.ownerDocument.defaultView : null;
      pu = /* @__PURE__ */ new WeakMap();
      mu = class {
        constructor(e) {
          this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = E(), this.visualElement = e;
        }
        start(e, { snapToCursor: n = false } = {}) {
          const { presenceContext: s } = this.visualElement;
          if (s && s.isPresent === false) return;
          const i = (c) => {
            const { dragSnapToOrigin: h } = this.getProps();
            h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ot(c).point);
          }, o = (c, h) => {
            const { drag: f, dragPropagation: d, onDragStart: p } = this.getProps();
            if (f && !d && (this.openDragLock && this.openDragLock(), this.openDragLock = aa(f), !this.openDragLock)) return;
            this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), $((y2) => {
              let g2 = this.getAxisMotionValue(y2).get() || 0;
              if (G.test(g2)) {
                const { projection: T2 } = this.visualElement;
                if (T2 && T2.layout) {
                  const P2 = T2.layout.layoutBox[y2];
                  P2 && (g2 = _(P2) * (parseFloat(g2) / 100));
                }
              }
              this.originPoint[y2] = g2;
            }), p && C.postRender(() => p(c, h)), De(this.visualElement, "transform");
            const { animationState: m } = this.visualElement;
            m && m.setActive("whileDrag", true);
          }, r = (c, h) => {
            const { dragPropagation: f, dragDirectionLock: d, onDirectionLock: p, onDrag: m } = this.getProps();
            if (!f && !this.openDragLock) return;
            const { offset: y2 } = h;
            if (d && this.currentDirection === null) {
              this.currentDirection = gu(y2), this.currentDirection !== null && p && p(this.currentDirection);
              return;
            }
            this.updateAxis("x", h.point, y2), this.updateAxis("y", h.point, y2), this.visualElement.render(), m && m(c, h);
          }, a = (c, h) => this.stop(c, h), l = () => $((c) => {
            var h;
            return this.getAnimationState(c) === "paused" && ((h = this.getAxisMotionValue(c).animation) === null || h === void 0 ? void 0 : h.play());
          }), { dragSnapToOrigin: u } = this.getProps();
          this.panSession = new hr(e, { onSessionStart: i, onStart: o, onMove: r, onSessionEnd: a, resumeAnimation: l }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: u, contextWindow: xr(this.visualElement) });
        }
        stop(e, n) {
          const s = this.isDragging;
          if (this.cancel(), !s) return;
          const { velocity: i } = n;
          this.startAnimation(i);
          const { onDragEnd: o } = this.getProps();
          o && C.postRender(() => o(e, n));
        }
        cancel() {
          this.isDragging = false;
          const { projection: e, animationState: n } = this.visualElement;
          e && (e.isAnimationBlocked = false), this.panSession && this.panSession.end(), this.panSession = void 0;
          const { dragPropagation: s } = this.getProps();
          !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", false);
        }
        updateAxis(e, n, s) {
          const { drag: i } = this.getProps();
          if (!s || !$t(e, i, this.currentDirection)) return;
          const o = this.getAxisMotionValue(e);
          let r = this.originPoint[e] + s[e];
          this.constraints && this.constraints[e] && (r = iu(r, this.constraints[e], this.elastic[e])), o.set(r);
        }
        resolveConstraints() {
          var e;
          const { dragConstraints: n, dragElastic: s } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
          n && lt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = ru(i.layoutBox, n) : this.constraints = false, this.elastic = uu(s), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && $((r) => {
            this.constraints !== false && this.getAxisMotionValue(r) && (this.constraints[r] = lu(i.layoutBox[r], this.constraints[r]));
          });
        }
        resolveRefConstraints() {
          const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
          if (!e || !lt(e)) return false;
          const s = e.current, { projection: i } = this.visualElement;
          if (!i || !i.layout) return false;
          const o = du(s, i.root, this.visualElement.getTransformPagePoint());
          let r = ou(i.layout.layoutBox, o);
          if (n) {
            const a = n(cu(r));
            this.hasMutatedConstraints = !!a, a && (r = mr(a));
          }
          return r;
        }
        startAnimation(e) {
          const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = $((c) => {
            if (!$t(c, n, this.currentDirection)) return;
            let h = l && l[c] || {};
            r && (h = { min: 0, max: 0 });
            const f = i ? 200 : 1e6, d = i ? 40 : 1e7, p = { type: "inertia", velocity: s ? e[c] : 0, bounceStiffness: f, bounceDamping: d, timeConstant: 750, restDelta: 1, restSpeed: 10, ...o, ...h };
            return this.startAxisValueAnimation(c, p);
          });
          return Promise.all(u).then(a);
        }
        startAxisValueAnimation(e, n) {
          const s = this.getAxisMotionValue(e);
          return De(this.visualElement, e), s.start(wn(e, s, 0, n, this.visualElement, false));
        }
        stopAnimation() {
          $((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          $((e) => {
            var n;
            return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause();
          });
        }
        getAnimationState(e) {
          var n;
          return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state;
        }
        getAxisMotionValue(e) {
          const n = `_drag${e.toUpperCase()}`, s = this.visualElement.getProps(), i = s[n];
          return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
        }
        snapToCursor(e) {
          $((n) => {
            const { drag: s } = this.getProps();
            if (!$t(n, s, this.currentDirection)) return;
            const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
            if (i && i.layout) {
              const { min: r, max: a } = i.layout.layoutBox[n];
              o.set(e[n] - D(r, a, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          const { drag: e, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
          if (!lt(n) || !s || !this.constraints) return;
          this.stopAnimation();
          const i = { x: 0, y: 0 };
          $((r) => {
            const a = this.getAxisMotionValue(r);
            if (a && this.constraints !== false) {
              const l = a.get();
              i[r] = au({ min: l, max: l }, this.constraints[r]);
            }
          });
          const { transformTemplate: o } = this.visualElement.getProps();
          this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), $((r) => {
            if (!$t(r, e, null)) return;
            const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
            a.set(D(l, u, i[r]));
          });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          pu.set(this.visualElement, this);
          const e = this.visualElement.current, n = bt(e, "pointerdown", (l) => {
            const { drag: u, dragListener: c = true } = this.getProps();
            u && c && this.start(l);
          }), s = () => {
            const { dragConstraints: l } = this.getProps();
            lt(l) && l.current && (this.constraints = this.resolveRefConstraints());
          }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), C.read(s);
          const r = Lt(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
            this.isDragging && u && ($((c) => {
              const h = this.getAxisMotionValue(c);
              h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
            }), this.visualElement.render());
          });
          return () => {
            r(), n(), o(), a && a();
          };
        }
        getProps() {
          const e = this.visualElement.getProps(), { drag: n = false, dragDirectionLock: s = false, dragPropagation: i = false, dragConstraints: o = false, dragElastic: r = Be, dragMomentum: a = true } = e;
          return { ...e, drag: n, dragDirectionLock: s, dragPropagation: i, dragConstraints: o, dragElastic: r, dragMomentum: a };
        }
      };
      yu = class extends tt {
        constructor(e) {
          super(e), this.removeGroupControls = I, this.removeListeners = I, this.controls = new mu(e);
        }
        mount() {
          const { dragControls: e } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || I;
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      };
      ys = (t) => (e, n) => {
        t && C.postRender(() => t(e, n));
      };
      vu = class extends tt {
        constructor() {
          super(...arguments), this.removePointerDownListener = I;
        }
        onPointerDown(e) {
          this.session = new hr(e, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: xr(this.node) });
        }
        createPanHandlers() {
          const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
          return { onSessionStart: ys(e), onStart: ys(n), onMove: s, onEnd: (o, r) => {
            delete this.session, i && C.postRender(() => i(o, r));
          } };
        }
        mount() {
          this.removePointerDownListener = bt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      };
      Ht = { hasAnimatedSinceResize: true, hasEverUpdated: false };
      xt = { correct: (t, e) => {
        if (!e.target) return t;
        if (typeof t == "string") if (S.test(t)) t = parseFloat(t);
        else return t;
        const n = vs(t, e.target.x), s = vs(t, e.target.y);
        return `${n}% ${s}%`;
      } };
      xu = { correct: (t, { treeScale: e, projectionDelta: n }) => {
        const s = t, i = Q.parse(t);
        if (i.length > 5) return s;
        const o = Q.createTransformer(t), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
        i[0 + r] /= a, i[1 + r] /= l;
        const u = D(a, l, 0.5);
        return typeof i[2 + r] == "number" && (i[2 + r] /= u), typeof i[3 + r] == "number" && (i[3 + r] /= u), o(i);
      } };
      Tu = class extends v.Component {
        componentDidMount() {
          const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = e;
          No(Pu), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }), o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })), Ht.hasEverUpdated = true;
        }
        getSnapshotBeforeUpdate(e) {
          const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, r = s.projection;
          return r && (r.isPresent = o, i || e.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || C.postRender(() => {
            const a = r.getStack();
            (!a || !a.members.length) && this.safeToRemove();
          }))), null;
        }
        componentDidUpdate() {
          const { projection: e } = this.props.visualElement;
          e && (e.root.didUpdate(), Ze.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove();
          }));
        }
        componentWillUnmount() {
          const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: i } = e;
          i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i));
        }
        safeToRemove() {
          const { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      };
      Pu = { borderRadius: { ...xt, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: xt, borderTopRightRadius: xt, borderBottomLeftRadius: xt, borderBottomRightRadius: xt, boxShadow: xu };
      bu = (t, e) => t.depth - e.depth;
      Au = class {
        constructor() {
          this.children = [], this.isDirty = false;
        }
        add(e) {
          fn(this.children, e), this.isDirty = true;
        }
        remove(e) {
          dn(this.children, e), this.isDirty = true;
        }
        forEach(e) {
          this.isDirty && this.children.sort(bu), this.isDirty = false, this.children.forEach(e);
        }
      };
      Pr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
      Cu = Pr.length;
      xs = (t) => typeof t == "string" ? parseFloat(t) : t;
      Ts = (t) => typeof t == "number" || S.test(t);
      Mu = Sr(0, 0.5, Ni);
      Ru = Sr(0.5, 0.95, I);
      Lu = ["x", "scaleX", "originX"];
      ku = ["y", "scaleY", "originY"];
      ju = class {
        constructor() {
          this.members = [];
        }
        add(e) {
          fn(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (dn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n);
          }
        }
        relegate(e) {
          const n = this.members.findIndex((i) => e === i);
          if (n === 0) return false;
          let s;
          for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== false) {
              s = o;
              break;
            }
          }
          return s ? (this.promote(s), true) : false;
        }
        promote(e, n) {
          const s = this.lead;
          if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
            s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = true), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = true);
            const { crossfade: i } = e.options;
            i === false && s.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            const { options: n, resumingFrom: s } = e;
            n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(false);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      };
      st = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 };
      St = typeof window < "u" && window.MotionDebug !== void 0;
      Pe = ["", "X", "Y", "Z"];
      Ou = { visibility: "hidden" };
      Ls = 1e3;
      Iu = 0;
      Ju = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      Os = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t);
      Is = Os("applewebkit/") && !Os("chrome/") ? Math.round : I;
      ec = Vr({ attachResizeListener: (t, e) => Lt(t, "resize", e), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => true });
      we = { current: void 0 };
      Dr = Vr({ measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }), defaultParent: () => {
        if (!we.current) {
          const t = new ec({});
          t.mount(window), t.setOptions({ layoutScroll: true }), we.current = t;
        }
        return we.current;
      }, resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none";
      }, checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed" });
      nc = { pan: { Feature: vu }, drag: { Feature: yu, ProjectionNode: Dr, MeasureLayout: Tr } };
      sc = class extends tt {
        mount() {
          const { current: e } = this.node;
          e && (this.unmount = na(e, (n) => (Ns(this.node, n, "Start"), (s) => Ns(this.node, s, "End"))));
        }
        unmount() {
        }
      };
      ic = class extends tt {
        constructor() {
          super(...arguments), this.isActive = false;
        }
        onFocus() {
          let e = false;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch {
            e = true;
          }
          !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
        }
        onBlur() {
          !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
        }
        mount() {
          this.unmount = Bt(Lt(this.node.current, "focus", () => this.onFocus()), Lt(this.node.current, "blur", () => this.onBlur()));
        }
        unmount() {
        }
      };
      rc = class extends tt {
        mount() {
          const { current: e } = this.node;
          e && (this.unmount = oa(e, (n) => (Us(this.node, n, "Start"), (s, { success: i }) => Us(this.node, s, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
        }
        unmount() {
        }
      };
      _e = /* @__PURE__ */ new WeakMap();
      be = /* @__PURE__ */ new WeakMap();
      oc = (t) => {
        const e = _e.get(t.target);
        e && e(t);
      };
      ac = (t) => {
        t.forEach(oc);
      };
      cc = { some: 0, all: 1 };
      hc = class extends tt {
        constructor() {
          super(...arguments), this.hasEnteredView = false, this.isInView = false;
        }
        startObserver() {
          this.unmount();
          const { viewport: e = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = e, r = { root: n ? n.current : void 0, rootMargin: s, threshold: typeof i == "number" ? i : cc[i] }, a = (l) => {
            const { isIntersecting: u } = l;
            if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), f = u ? c : h;
            f && f(l);
          };
          return uc(this.node.current, r, a);
        }
        mount() {
          this.startObserver();
        }
        update() {
          if (typeof IntersectionObserver > "u") return;
          const { props: e, prevProps: n } = this.node;
          ["amount", "margin", "root"].some(fc(e, n)) && this.startObserver();
        }
        unmount() {
        }
      };
      dc = { inView: { Feature: hc }, tap: { Feature: rc }, focus: { Feature: ic }, hover: { Feature: sc } };
      pc = { layout: { ProjectionNode: Dr, MeasureLayout: Tr } };
      Ne = { current: null };
      Mr = { current: false };
      gc = [...tr, F, Q];
      yc = (t) => gc.find(Qi(t));
      $s = /* @__PURE__ */ new WeakMap();
      Ks = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      xc = class {
        scrapeMotionValuesFromProps(e, n, s) {
          return {};
        }
        constructor({ parent: e, props: n, presenceContext: s, reducedMotionConfig: i, blockInitialAnimation: o, visualState: r }, a = {}) {
          this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Tn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
          }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const d = z.now();
            this.renderScheduledAt < d && (this.renderScheduledAt = d, C.render(this.render, false, true));
          };
          const { latestValues: l, renderState: u, onUpdate: c } = r;
          this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = oe(n), this.isVariantNode = li(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
          const { willChange: h, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
          for (const d in f) {
            const p = f[d];
            l[d] !== void 0 && j(p) && p.set(l[d], false);
          }
        }
        mount(e) {
          this.current = e, $s.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), Mr.current || mc(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : Ne.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
        }
        unmount() {
          $s.delete(this.current), this.projection && this.projection.unmount(), J(this.notifyUpdate), J(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
          for (const e in this.events) this.events[e].clear();
          for (const e in this.features) {
            const n = this.features[e];
            n && (n.unmount(), n.isMounted = false);
          }
          this.current = null;
        }
        bindToMotionValue(e, n) {
          this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
          const s = ot.has(e), i = n.on("change", (a) => {
            this.latestValues[e] = a, this.props.onUpdate && C.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = true);
          }), o = n.on("renderRequest", this.scheduleRender);
          let r;
          window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
            i(), o(), r && r(), n.owner && n.stop();
          });
        }
        sortNodePosition(e) {
          return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
        }
        updateFeatures() {
          let e = "animation";
          for (e in pt) {
            const n = pt[e];
            if (!n) continue;
            const { isEnabled: s, Feature: i } = n;
            if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
              const o = this.features[e];
              o.isMounted ? o.update() : (o.mount(), o.isMounted = true);
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : E();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, n) {
          this.latestValues[e] = n;
        }
        update(e, n) {
          (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
          for (let s = 0; s < Ks.length; s++) {
            const i = Ks[s];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const o = "on" + i, r = e[o];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          this.prevMotionValues = vc(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
        }
        addVariantChild(e) {
          const n = this.getClosestVariantNode();
          if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
        }
        addValue(e, n) {
          const s = this.values.get(e);
          n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
        }
        removeValue(e) {
          this.values.delete(e);
          const n = this.valueSubscriptions.get(e);
          n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, n) {
          if (this.props.values && this.props.values[e]) return this.props.values[e];
          let s = this.values.get(e);
          return s === void 0 && n !== void 0 && (s = Rt(n === null ? void 0 : n, { owner: this }), this.addValue(e, s)), s;
        }
        readValue(e, n) {
          var s;
          let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (s = this.getBaseTargetFromProps(this.props, e)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, e, this.options);
          return i != null && (typeof i == "string" && (Zi(i) || $i(i)) ? i = parseFloat(i) : !yc(i) && Q.test(n) && (i = Xi(e, n)), this.setBaseTarget(e, j(i) ? i.get() : i)), j(i) ? i.get() : i;
        }
        setBaseTarget(e, n) {
          this.baseTarget[e] = n;
        }
        getBaseTarget(e) {
          var n;
          const { initial: s } = this.props;
          let i;
          if (typeof s == "string" || typeof s == "object") {
            const r = Qe(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            r && (i = r[e]);
          }
          if (s && i !== void 0) return i;
          const o = this.getBaseTargetFromProps(this.props, e);
          return o !== void 0 && !j(o) ? o : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
        }
        on(e, n) {
          return this.events[e] || (this.events[e] = new pn()), this.events[e].add(n);
        }
        notify(e, ...n) {
          this.events[e] && this.events[e].notify(...n);
        }
      };
      Rr = class extends xc {
        constructor() {
          super(...arguments), this.KeyframeResolver = er;
        }
        sortInstanceNodePosition(e, n) {
          return e.compareDocumentPosition(n) & 2 ? 1 : -1;
        }
        getBaseTargetFromProps(e, n) {
          return e.style ? e.style[n] : void 0;
        }
        removeValueFromRenderState(e, { vars: n, style: s }) {
          delete n[e], delete s[e];
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          const { children: e } = this.props;
          j(e) && (this.childSubscription = e.on("change", (n) => {
            this.current && (this.current.textContent = `${n}`);
          }));
        }
      };
      Pc = class extends Rr {
        constructor() {
          super(...arguments), this.type = "html", this.renderInstance = yi;
        }
        readValueFromInstance(e, n) {
          if (ot.has(n)) {
            const s = xn(n);
            return s && s.default || 0;
          } else {
            const s = Tc(e), i = (pi(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof i == "string" ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: n }) {
          return vr(e, n);
        }
        build(e, n, s) {
          nn(e, n, s.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, n, s) {
          return an(e, n, s);
        }
      };
      Sc = class extends Rr {
        constructor() {
          super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = E;
        }
        getBaseTargetFromProps(e, n) {
          return e[n];
        }
        readValueFromInstance(e, n) {
          if (ot.has(n)) {
            const s = xn(n);
            return s && s.default || 0;
          }
          return n = vi.has(n) ? n : Ye(n), e.getAttribute(n);
        }
        scrapeMotionValuesFromProps(e, n, s) {
          return Pi(e, n, s);
        }
        build(e, n, s) {
          sn(e, n, this.isSVGTag, s.transformTemplate);
        }
        renderInstance(e, n, s, i) {
          xi(e, n, s, i);
        }
        mount(e) {
          this.isSVGTag = on(e.tagName), super.mount(e);
        }
      };
      wc = (t, e) => Je(t) ? new Sc(e) : new Pc(e, { allowProjection: t !== v.Fragment });
      bc = qo({ ...Hl, ...dc, ...nc, ...pc }, wc);
      Rc = uo(bc);
    }
  });

  // assets/react-C2245jk2.js
  function y(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function zn2(e, n) {
    Xn2(e, n), Xn2(e + "Capture", n);
  }
  function Xn2(e, n) {
    for (Nt2[e] = n, e = 0; e < n.length; e++) No2.add(n[e]);
  }
  function Ta2(e) {
    return Ol2.call(gi2, e) ? true : Ol2.call(yi2, e) ? false : Pa2.test(e) ? gi2[e] = true : (yi2[e] = true, false);
  }
  function La2(e, n, t, r) {
    if (t !== null && t.type === 0) return false;
    switch (typeof n) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r ? false : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function Ma2(e, n, t, r) {
    if (n === null || typeof n > "u" || La2(e, n, t, r)) return true;
    if (r) return false;
    if (t !== null) switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === false;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
    return false;
  }
  function ue(e, n, t, r, l, u, i) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = u, this.removeEmptyString = i;
  }
  function zu2(e) {
    return e[1].toUpperCase();
  }
  function Pu2(e, n, t, r) {
    var l = q2.hasOwnProperty(n) ? q2[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Ma2(n, t, l, r) && (t = null), r || l === null ? Ta2(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? false : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === true ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  function ut2(e) {
    return e === null || typeof e != "object" ? null : (e = wi2 && e[wi2] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  function pt2(e) {
    if (al2 === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      al2 = n && n[1] || "";
    }
    return `
` + al2 + e;
  }
  function cl2(e, n) {
    if (!e || fl2) return "";
    fl2 = true;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n) if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (d) {
          r = d;
        }
        e.call(n.prototype);
      }
      else {
        try {
          throw Error();
        } catch (d) {
          r = d;
        }
        e();
      }
    } catch (d) {
      if (d && r && typeof d.stack == "string") {
        for (var l = d.stack.split(`
`), u = r.stack.split(`
`), i = l.length - 1, o = u.length - 1; 1 <= i && 0 <= o && l[i] !== u[o]; ) o--;
        for (; 1 <= i && 0 <= o; i--, o--) if (l[i] !== u[o]) {
          if (i !== 1 || o !== 1) do
            if (i--, o--, 0 > o || l[i] !== u[o]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= o);
          break;
        }
      }
    } finally {
      fl2 = false, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? pt2(e) : "";
  }
  function Da2(e) {
    switch (e.tag) {
      case 5:
        return pt2(e.type);
      case 16:
        return pt2("Lazy");
      case 13:
        return pt2("Suspense");
      case 19:
        return pt2("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = cl2(e.type, false), e;
      case 11:
        return e = cl2(e.type.render, false), e;
      case 1:
        return e = cl2(e.type, true), e;
      default:
        return "";
    }
  }
  function Ul2(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Mn2:
        return "Fragment";
      case Ln2:
        return "Portal";
      case Fl2:
        return "Profiler";
      case Tu2:
        return "StrictMode";
      case Il2:
        return "Suspense";
      case jl2:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Po2:
        return (e.displayName || "Context") + ".Consumer";
      case zo2:
        return (e._context.displayName || "Context") + ".Provider";
      case Lu2:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Mu2:
        return n = e.displayName || null, n !== null ? n : Ul2(e.type) || "Memo";
      case Ye2:
        n = e._payload, e = e._init;
        try {
          return Ul2(e(n));
        } catch {
        }
    }
    return null;
  }
  function Ra2(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ul2(n);
      case 8:
        return n === Tu2 ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function sn2(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Lo2(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Oa2(e) {
    var n = Lo2(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, u = t.set;
      return Object.defineProperty(e, n, { configurable: true, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, u.call(this, i);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function Zt2(e) {
    e._valueTracker || (e._valueTracker = Oa2(e));
  }
  function Mo2(e) {
    if (!e) return false;
    var n = e._valueTracker;
    if (!n) return true;
    var t = n.getValue(), r = "";
    return e && (r = Lo2(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), true) : false;
  }
  function Sr2(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Vl2(e, n) {
    var t = n.checked;
    return V({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function ki2(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = sn2(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function Do2(e, n) {
    n = n.checked, n != null && Pu2(e, "checked", n, false);
  }
  function Al2(e, n) {
    Do2(e, n);
    var t = sn2(n.value), r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Bl2(e, n.type, t) : n.hasOwnProperty("defaultValue") && Bl2(e, n.type, sn2(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Si2(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Bl2(e, n, t) {
    (n !== "number" || Sr2(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  function Hn2(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = true;
      for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = true);
    } else {
      for (t = "" + sn2(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = true, r && (e[l].defaultSelected = true);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = true);
    }
  }
  function Hl2(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
    return V({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ei2(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(y(92));
        if (mt2(t)) {
          if (1 < t.length) throw Error(y(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: sn2(t) };
  }
  function Ro2(e, n) {
    var t = sn2(n.value), r = sn2(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Ci2(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Oo2(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ql2(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Oo2(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  function zt2(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  function Io2(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || yt2.hasOwnProperty(e) && yt2[e] ? ("" + n).trim() : n + "px";
  }
  function jo2(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = Io2(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
  }
  function Wl2(e, n) {
    if (n) {
      if (Ia2[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(y(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(y(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(y(62));
    }
  }
  function $l2(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  function Du2(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  function xi2(e) {
    if (e = $t2(e)) {
      if (typeof Yl2 != "function") throw Error(y(280));
      var n = e.stateNode;
      n && (n = Gr2(n), Yl2(e.stateNode, e.type, n));
    }
  }
  function Uo2(e) {
    Qn2 ? Wn2 ? Wn2.push(e) : Wn2 = [e] : Qn2 = e;
  }
  function Vo2() {
    if (Qn2) {
      var e = Qn2, n = Wn2;
      if (Wn2 = Qn2 = null, xi2(e), n) for (e = 0; e < n.length; e++) xi2(n[e]);
    }
  }
  function Ao2(e, n) {
    return e(n);
  }
  function Bo2() {
  }
  function Ho2(e, n, t) {
    if (dl2) return e(n, t);
    dl2 = true;
    try {
      return Ao2(e, n, t);
    } finally {
      dl2 = false, (Qn2 !== null || Wn2 !== null) && (Bo2(), Vo2());
    }
  }
  function Pt2(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = Gr2(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(y(231, n, typeof t));
    return t;
  }
  function ja2(e, n, t, r, l, u, i, o, s) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, d);
    } catch (v2) {
      this.onError(v2);
    }
  }
  function Va2(e, n, t, r, l, u, i, o, s) {
    gt2 = false, Er = null, ja2.apply(Ua2, arguments);
  }
  function Aa2(e, n, t, r, l, u, i, o, s) {
    if (Va2.apply(this, arguments), gt2) {
      if (gt2) {
        var d = Er;
        gt2 = false, Er = null;
      } else throw Error(y(198));
      Cr2 || (Cr2 = true, Gl2 = d);
    }
  }
  function Pn2(e) {
    var n = e, t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, n.flags & 4098 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Qo2(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function _i2(e) {
    if (Pn2(e) !== e) throw Error(y(188));
  }
  function Ba2(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Pn2(e), n === null) throw Error(y(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (r = l.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t) return _i2(l), e;
          if (u === r) return _i2(l), n;
          u = u.sibling;
        }
        throw Error(y(188));
      }
      if (t.return !== r.return) t = l, r = u;
      else {
        for (var i = false, o = l.child; o; ) {
          if (o === t) {
            i = true, t = l, r = u;
            break;
          }
          if (o === r) {
            i = true, r = l, t = u;
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === t) {
              i = true, t = u, r = l;
              break;
            }
            if (o === r) {
              i = true, r = u, t = l;
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(y(189));
        }
      }
      if (t.alternate !== r) throw Error(y(190));
    }
    if (t.tag !== 3) throw Error(y(188));
    return t.stateNode.current === t ? e : n;
  }
  function Wo2(e) {
    return e = Ba2(e), e !== null ? $o2(e) : null;
  }
  function $o2(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = $o2(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  function Ka2(e) {
    if (Oe2 && typeof Oe2.onCommitFiberRoot == "function") try {
      Oe2.onCommitFiberRoot($r2, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  function Ga2(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ya2(e) / Xa2 | 0) | 0;
  }
  function vt2(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function _r2(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, i = t & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? r = vt2(o) : (u &= i, u !== 0 && (r = vt2(u)));
    } else i = t & ~l, i !== 0 ? r = vt2(i) : u !== 0 && (r = vt2(u));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, u = n & -n, l >= u || l === 16 && (u & 4194240) !== 0)) return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - Pe2(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function Za2(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ja2(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var i = 31 - Pe2(u), o = 1 << i, s = l[i];
      s === -1 ? (!(o & t) || o & r) && (l[i] = Za2(o, n)) : s <= n && (e.expiredLanes |= o), u &= ~o;
    }
  }
  function Zl2(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Go2() {
    var e = qt2;
    return qt2 <<= 1, !(qt2 & 4194240) && (qt2 = 64), e;
  }
  function pl2(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function Qt2(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Pe2(n), e[n] = t;
  }
  function qa2(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - Pe2(t), u = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~u;
    }
  }
  function Ou2(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - Pe2(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  function Zo2(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  function zi2(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        be2 = null;
        break;
      case "dragenter":
      case "dragleave":
        en2 = null;
        break;
      case "mouseover":
      case "mouseout":
        nn2 = null;
        break;
      case "pointerover":
      case "pointerout":
        Tt2.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Lt2.delete(n.pointerId);
    }
  }
  function ot2(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, n !== null && (n = $t2(n), n !== null && Fu2(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function ef(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return be2 = ot2(be2, e, n, t, r, l), true;
      case "dragenter":
        return en2 = ot2(en2, e, n, t, r, l), true;
      case "mouseover":
        return nn2 = ot2(nn2, e, n, t, r, l), true;
      case "pointerover":
        var u = l.pointerId;
        return Tt2.set(u, ot2(Tt2.get(u) || null, e, n, t, r, l)), true;
      case "gotpointercapture":
        return u = l.pointerId, Lt2.set(u, ot2(Lt2.get(u) || null, e, n, t, r, l)), true;
    }
    return false;
  }
  function ns2(e) {
    var n = yn2(e.target);
    if (n !== null) {
      var t = Pn2(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Qo2(t), n !== null) {
            e.blockedOn = n, es2(e.priority, function() {
              qo2(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function cr2(e) {
    if (e.blockedOn !== null) return false;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = ql2(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        Kl2 = r, t.target.dispatchEvent(r), Kl2 = null;
      } else return n = $t2(t), n !== null && Fu2(n), e.blockedOn = t, false;
      n.shift();
    }
    return true;
  }
  function Pi2(e, n, t) {
    cr2(e) && t.delete(n);
  }
  function nf() {
    Jl2 = false, be2 !== null && cr2(be2) && (be2 = null), en2 !== null && cr2(en2) && (en2 = null), nn2 !== null && cr2(nn2) && (nn2 = null), Tt2.forEach(Pi2), Lt2.forEach(Pi2);
  }
  function st2(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Jl2 || (Jl2 = true, me2.unstable_scheduleCallback(me2.unstable_NormalPriority, nf)));
  }
  function Mt2(e) {
    function n(l) {
      return st2(l, e);
    }
    if (0 < er2.length) {
      st2(er2[0], e);
      for (var t = 1; t < er2.length; t++) {
        var r = er2[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (be2 !== null && st2(be2, e), en2 !== null && st2(en2, e), nn2 !== null && st2(nn2, e), Tt2.forEach(n), Lt2.forEach(n), t = 0; t < Ge2.length; t++) r = Ge2[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ge2.length && (t = Ge2[0], t.blockedOn === null); ) ns2(t), t.blockedOn === null && Ge2.shift();
  }
  function tf(e, n, t, r) {
    var l = M2, u = $n2.transition;
    $n2.transition = null;
    try {
      M2 = 1, Iu2(e, n, t, r);
    } finally {
      M2 = l, $n2.transition = u;
    }
  }
  function rf(e, n, t, r) {
    var l = M2, u = $n2.transition;
    $n2.transition = null;
    try {
      M2 = 4, Iu2(e, n, t, r);
    } finally {
      M2 = l, $n2.transition = u;
    }
  }
  function Iu2(e, n, t, r) {
    if (Nr2) {
      var l = ql2(e, n, t, r);
      if (l === null) Cl2(e, n, r, zr2, t), zi2(e, r);
      else if (ef(l, e, n, t, r)) r.stopPropagation();
      else if (zi2(e, r), n & 4 && -1 < ba2.indexOf(e)) {
        for (; l !== null; ) {
          var u = $t2(l);
          if (u !== null && Jo2(u), u = ql2(e, n, t, r), u === null && Cl2(e, n, r, zr2, t), u === l) break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else Cl2(e, n, r, null, t);
    }
  }
  function ql2(e, n, t, r) {
    if (zr2 = null, e = Du2(r), e = yn2(e), e !== null) if (n = Pn2(e), n === null) e = null;
    else if (t = n.tag, t === 13) {
      if (e = Qo2(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return zr2 = e, null;
  }
  function ts2(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Wa2()) {
          case Ru2:
            return 1;
          case Yo2:
            return 4;
          case xr2:
          case $a2:
            return 16;
          case Xo2:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  function rs2() {
    if (dr2) return dr2;
    var e, n = ju2, t = n.length, r, l = "value" in Je2 ? Je2.value : Je2.textContent, u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++) ;
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[u - r]; r++) ;
    return dr2 = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function pr2(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function nr2() {
    return true;
  }
  function Ti2() {
    return false;
  }
  function he2(e) {
    function n(t, r, l, u, i) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var o in e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? nr2 : Ti2, this.isPropagationStopped = Ti2, this;
    }
    return V(n.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = false), this.isDefaultPrevented = nr2);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = true), this.isPropagationStopped = nr2);
    }, persist: function() {
    }, isPersistent: nr2 }), n;
  }
  function yf(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = hf[e]) ? !!n[e] : false;
  }
  function Vu2() {
    return yf;
  }
  function us2(e, n) {
    switch (e) {
      case "keyup":
        return zf.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function is2(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  function Tf(e, n) {
    switch (e) {
      case "compositionend":
        return is2(n);
      case "keypress":
        return n.which !== 32 ? null : (Oi2 = true, Ri2);
      case "textInput":
        return e = n.data, e === Ri2 && Oi2 ? null : e;
      default:
        return null;
    }
  }
  function Lf(e, n) {
    if (Dn2) return e === "compositionend" || !Au2 && us2(e, n) ? (e = rs2(), dr2 = ju2 = Je2 = null, Dn2 = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return ls2 && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  function Fi2(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Mf[e.type] : n === "textarea";
  }
  function os2(e, n, t, r) {
    Uo2(r), n = Pr2(n, "onChange"), 0 < n.length && (t = new Uu2("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  function Df(e) {
    gs2(e, 0);
  }
  function Yr2(e) {
    var n = Fn2(e);
    if (Mo2(n)) return e;
  }
  function Rf(e, n) {
    if (e === "change") return n;
  }
  function ji2() {
    kt2 && (kt2.detachEvent("onpropertychange", as2), Dt2 = kt2 = null);
  }
  function as2(e) {
    if (e.propertyName === "value" && Yr2(Dt2)) {
      var n = [];
      os2(n, Dt2, e, Du2(e)), Ho2(Df, n);
    }
  }
  function Of(e, n, t) {
    e === "focusin" ? (ji2(), kt2 = n, Dt2 = t, kt2.attachEvent("onpropertychange", as2)) : e === "focusout" && ji2();
  }
  function Ff(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Yr2(Dt2);
  }
  function If(e, n) {
    if (e === "click") return Yr2(n);
  }
  function jf(e, n) {
    if (e === "input" || e === "change") return Yr2(n);
  }
  function Uf(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  function Rt2(e, n) {
    if (Le2(e, n)) return true;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return false;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return false;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!Ol2.call(n, l) || !Le2(e[l], n[l])) return false;
    }
    return true;
  }
  function Ui2(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Vi2(e, n) {
    var t = Ui2(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Ui2(t);
    }
  }
  function fs2(e, n) {
    return e && n ? e === n ? true : e && e.nodeType === 3 ? false : n && n.nodeType === 3 ? fs2(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : false : false;
  }
  function cs2() {
    for (var e = window, n = Sr2(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = false;
      }
      if (t) e = n.contentWindow;
      else break;
      n = Sr2(e.document);
    }
    return n;
  }
  function Bu2(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Vf(e) {
    var n = cs2(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && fs2(t.ownerDocument.documentElement, t)) {
      if (r !== null && Bu2(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = Vi2(t, u);
          var i = Vi2(t, r);
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  function Ai2(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    eu2 || Rn2 == null || Rn2 !== Sr2(r) || (r = Rn2, "selectionStart" in r && Bu2(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), St2 && Rt2(St2, r) || (St2 = r, r = Pr2(bl2, "onSelect"), 0 < r.length && (n = new Uu2("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Rn2)));
  }
  function tr2(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  function Xr2(e) {
    if (wl2[e]) return wl2[e];
    if (!On2[e]) return e;
    var n = On2[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in ds2) return wl2[e] = n[t];
    return e;
  }
  function fn2(e, n) {
    ys2.set(e, n), zn2(n, [e]);
  }
  function Hi2(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Aa2(r, n, void 0, e), e.currentTarget = null;
  }
  function gs2(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n) for (var i = r.length - 1; 0 <= i; i--) {
          var o = r[i], s = o.instance, d = o.currentTarget;
          if (o = o.listener, s !== u && l.isPropagationStopped()) break e;
          Hi2(l, o, d), u = s;
        }
        else for (i = 0; i < r.length; i++) {
          if (o = r[i], s = o.instance, d = o.currentTarget, o = o.listener, s !== u && l.isPropagationStopped()) break e;
          Hi2(l, o, d), u = s;
        }
      }
    }
    if (Cr2) throw e = Gl2, Cr2 = false, Gl2 = null, e;
  }
  function R(e, n) {
    var t = n[uu2];
    t === void 0 && (t = n[uu2] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (ws2(n, e, 2, false), t.add(r));
  }
  function El2(e, n, t) {
    var r = 0;
    n && (r |= 4), ws2(t, e, r, n);
  }
  function Ot2(e) {
    if (!e[rr2]) {
      e[rr2] = true, No2.forEach(function(t) {
        t !== "selectionchange" && (Qf.has(t) || El2(t, false, e), El2(t, true, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[rr2] || (n[rr2] = true, El2("selectionchange", false, n));
    }
  }
  function ws2(e, n, t, r) {
    switch (ts2(n)) {
      case 1:
        var l = tf;
        break;
      case 4:
        l = rf;
        break;
      default:
        l = Iu2;
    }
    t = l.bind(null, n, t, e), l = void 0, !Xl2 || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = true), r ? l !== void 0 ? e.addEventListener(n, t, { capture: true, passive: l }) : e.addEventListener(n, t, true) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, false);
  }
  function Cl2(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || o.nodeType === 8 && o.parentNode === l) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var s = i.tag;
          if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          i = i.return;
        }
        for (; o !== null; ) {
          if (i = yn2(o), i === null) return;
          if (s = i.tag, s === 5 || s === 6) {
            r = u = i;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
    Ho2(function() {
      var d = u, v2 = Du2(t), m = [];
      e: {
        var p = ys2.get(e);
        if (p !== void 0) {
          var g2 = Uu2, w = e;
          switch (e) {
            case "keypress":
              if (pr2(t) === 0) break e;
            case "keydown":
            case "keyup":
              g2 = wf;
              break;
            case "focusin":
              w = "focus", g2 = hl2;
              break;
            case "focusout":
              w = "blur", g2 = hl2;
              break;
            case "beforeblur":
            case "afterblur":
              g2 = hl2;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g2 = Li2;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g2 = of;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g2 = Ef;
              break;
            case ps2:
            case ms2:
            case vs2:
              g2 = ff;
              break;
            case hs2:
              g2 = xf;
              break;
            case "scroll":
              g2 = lf;
              break;
            case "wheel":
              g2 = Nf;
              break;
            case "copy":
            case "cut":
            case "paste":
              g2 = df;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g2 = Di2;
          }
          var k = (n & 4) !== 0, F2 = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
          k = [];
          for (var a = d, c; a !== null; ) {
            c = a;
            var h = c.stateNode;
            if (c.tag === 5 && h !== null && (c = h, f !== null && (h = Pt2(a, f), h != null && k.push(Ft2(a, h, c)))), F2) break;
            a = a.return;
          }
          0 < k.length && (p = new g2(p, w, null, t, v2), m.push({ event: p, listeners: k }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (p = e === "mouseover" || e === "pointerover", g2 = e === "mouseout" || e === "pointerout", p && t !== Kl2 && (w = t.relatedTarget || t.fromElement) && (yn2(w) || w[He2])) break e;
          if ((g2 || p) && (p = v2.window === v2 ? v2 : (p = v2.ownerDocument) ? p.defaultView || p.parentWindow : window, g2 ? (w = t.relatedTarget || t.toElement, g2 = d, w = w ? yn2(w) : null, w !== null && (F2 = Pn2(w), w !== F2 || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g2 = null, w = d), g2 !== w)) {
            if (k = Li2, h = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = Di2, h = "onPointerLeave", f = "onPointerEnter", a = "pointer"), F2 = g2 == null ? p : Fn2(g2), c = w == null ? p : Fn2(w), p = new k(h, a + "leave", g2, t, v2), p.target = F2, p.relatedTarget = c, h = null, yn2(v2) === d && (k = new k(f, a + "enter", w, t, v2), k.target = c, k.relatedTarget = F2, h = k), F2 = h, g2 && w) n: {
              for (k = g2, f = w, a = 0, c = k; c; c = Tn2(c)) a++;
              for (c = 0, h = f; h; h = Tn2(h)) c++;
              for (; 0 < a - c; ) k = Tn2(k), a--;
              for (; 0 < c - a; ) f = Tn2(f), c--;
              for (; a--; ) {
                if (k === f || f !== null && k === f.alternate) break n;
                k = Tn2(k), f = Tn2(f);
              }
              k = null;
            }
            else k = null;
            g2 !== null && Qi2(m, p, g2, k, false), w !== null && F2 !== null && Qi2(m, F2, w, k, true);
          }
        }
        e: {
          if (p = d ? Fn2(d) : window, g2 = p.nodeName && p.nodeName.toLowerCase(), g2 === "select" || g2 === "input" && p.type === "file") var E3 = Rf;
          else if (Fi2(p)) if (ss2) E3 = jf;
          else {
            E3 = Ff;
            var x = Of;
          }
          else (g2 = p.nodeName) && g2.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E3 = If);
          if (E3 && (E3 = E3(e, d))) {
            os2(m, E3, t, v2);
            break e;
          }
          x && x(e, p, d), e === "focusout" && (x = p._wrapperState) && x.controlled && p.type === "number" && Bl2(p, "number", p.value);
        }
        switch (x = d ? Fn2(d) : window, e) {
          case "focusin":
            (Fi2(x) || x.contentEditable === "true") && (Rn2 = x, bl2 = d, St2 = null);
            break;
          case "focusout":
            St2 = bl2 = Rn2 = null;
            break;
          case "mousedown":
            eu2 = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            eu2 = false, Ai2(m, t, v2);
            break;
          case "selectionchange":
            if (Af) break;
          case "keydown":
          case "keyup":
            Ai2(m, t, v2);
        }
        var _3;
        if (Au2) e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
        else Dn2 ? us2(e, t) && (N = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (N = "onCompositionStart");
        N && (ls2 && t.locale !== "ko" && (Dn2 || N !== "onCompositionStart" ? N === "onCompositionEnd" && Dn2 && (_3 = rs2()) : (Je2 = v2, ju2 = "value" in Je2 ? Je2.value : Je2.textContent, Dn2 = true)), x = Pr2(d, N), 0 < x.length && (N = new Mi2(N, e, null, t, v2), m.push({ event: N, listeners: x }), _3 ? N.data = _3 : (_3 = is2(t), _3 !== null && (N.data = _3)))), (_3 = Pf ? Tf(e, t) : Lf(e, t)) && (d = Pr2(d, "onBeforeInput"), 0 < d.length && (v2 = new Mi2("onBeforeInput", "beforeinput", null, t, v2), m.push({ event: v2, listeners: d }), v2.data = _3));
      }
      gs2(m, n);
    });
  }
  function Ft2(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Pr2(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Pt2(e, t), u != null && r.unshift(Ft2(e, u, l)), u = Pt2(e, n), u != null && r.push(Ft2(e, u, l))), e = e.return;
    }
    return r;
  }
  function Tn2(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qi2(e, n, t, r, l) {
    for (var u = n._reactName, i = []; t !== null && t !== r; ) {
      var o = t, s = o.alternate, d = o.stateNode;
      if (s !== null && s === r) break;
      o.tag === 5 && d !== null && (o = d, l ? (s = Pt2(t, u), s != null && i.unshift(Ft2(t, s, o))) : l || (s = Pt2(t, u), s != null && i.push(Ft2(t, s, o)))), t = t.return;
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  function Wi2(e) {
    return (typeof e == "string" ? e : "" + e).replace(Wf, `
`).replace($f, "");
  }
  function lr2(e, n, t) {
    if (n = Wi2(n), Wi2(e) !== n && t) throw Error(y(425));
  }
  function Tr2() {
  }
  function ru2(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  function Xf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function xl2(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), Mt2(n);
          return;
        }
        r--;
      } else t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    Mt2(n);
  }
  function tn2(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Ki2(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function yn2(e) {
    var n = e[Re2];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[He2] || t[Re2]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Ki2(e); e !== null; ) {
          if (t = e[Re2]) return t;
          e = Ki2(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function $t2(e) {
    return e = e[Re2] || e[He2], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Fn2(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(y(33));
  }
  function Gr2(e) {
    return e[It2] || null;
  }
  function cn2(e) {
    return { current: e };
  }
  function O2(e) {
    0 > In2 || (e.current = iu2[In2], iu2[In2] = null, In2--);
  }
  function D2(e, n) {
    In2++, iu2[In2] = e.current, e.current = n;
  }
  function Gn2(e, n) {
    var t = e.type.contextTypes;
    if (!t) return an2;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in t) l[u] = n[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function ae2(e) {
    return e = e.childContextTypes, e != null;
  }
  function Lr2() {
    O2(se2), O2(te2);
  }
  function Yi2(e, n, t) {
    if (te2.current !== an2) throw Error(y(168));
    D2(te2, n), D2(se2, t);
  }
  function ks2(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(y(108, Ra2(e) || "Unknown", l));
    return V({}, t, r);
  }
  function Mr2(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an2, En2 = te2.current, D2(te2, e), D2(se2, se2.current), true;
  }
  function Xi2(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(y(169));
    t ? (e = ks2(e, n, En2), r.__reactInternalMemoizedMergedChildContext = e, O2(se2), O2(te2), D2(te2, e)) : O2(se2), D2(se2, t);
  }
  function Ss2(e) {
    je2 === null ? je2 = [e] : je2.push(e);
  }
  function Jf(e) {
    Zr2 = true, Ss2(e);
  }
  function dn2() {
    if (!_l2 && je2 !== null) {
      _l2 = true;
      var e = 0, n = M2;
      try {
        var t = je2;
        for (M2 = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(true);
          while (r !== null);
        }
        je2 = null, Zr2 = false;
      } catch (l) {
        throw je2 !== null && (je2 = je2.slice(e + 1)), Ko2(Ru2, dn2), l;
      } finally {
        M2 = n, _l2 = false;
      }
    }
    return null;
  }
  function vn2(e, n) {
    jn2[Un2++] = Rr2, jn2[Un2++] = Dr2, Dr2 = e, Rr2 = n;
  }
  function Es2(e, n, t) {
    ye2[ge2++] = Ue2, ye2[ge2++] = Ve2, ye2[ge2++] = Cn2, Cn2 = e;
    var r = Ue2;
    e = Ve2;
    var l = 32 - Pe2(r) - 1;
    r &= ~(1 << l), t += 1;
    var u = 32 - Pe2(n) + l;
    if (30 < u) {
      var i = l - l % 5;
      u = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ue2 = 1 << 32 - Pe2(n) + l | t << l | r, Ve2 = u + e;
    } else Ue2 = 1 << u | t << l | r, Ve2 = e;
  }
  function Hu2(e) {
    e.return !== null && (vn2(e, 1), Es2(e, 1, 0));
  }
  function Qu2(e) {
    for (; e === Dr2; ) Dr2 = jn2[--Un2], jn2[Un2] = null, Rr2 = jn2[--Un2], jn2[Un2] = null;
    for (; e === Cn2; ) Cn2 = ye2[--ge2], ye2[ge2] = null, Ve2 = ye2[--ge2], ye2[ge2] = null, Ue2 = ye2[--ge2], ye2[ge2] = null;
  }
  function Cs2(e, n) {
    var t = we2(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Gi2(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, pe2 = e, de2 = tn2(n.firstChild), true) : false;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, pe2 = e, de2 = null, true) : false;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Cn2 !== null ? { id: Ue2, overflow: Ve2 } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = we2(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, pe2 = e, de2 = null, true) : false;
      default:
        return false;
    }
  }
  function ou2(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function su2(e) {
    if (I2) {
      var n = de2;
      if (n) {
        var t = n;
        if (!Gi2(e, n)) {
          if (ou2(e)) throw Error(y(418));
          n = tn2(t.nextSibling);
          var r = pe2;
          n && Gi2(e, n) ? Cs2(r, t) : (e.flags = e.flags & -4097 | 2, I2 = false, pe2 = e);
        }
      } else {
        if (ou2(e)) throw Error(y(418));
        e.flags = e.flags & -4097 | 2, I2 = false, pe2 = e;
      }
    }
  }
  function Zi2(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    pe2 = e;
  }
  function ur2(e) {
    if (e !== pe2) return false;
    if (!I2) return Zi2(e), I2 = true, false;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !ru2(e.type, e.memoizedProps)), n && (n = de2)) {
      if (ou2(e)) throw xs2(), Error(y(418));
      for (; n; ) Cs2(e, n), n = tn2(n.nextSibling);
    }
    if (Zi2(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                de2 = tn2(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        de2 = null;
      }
    } else de2 = pe2 ? tn2(e.stateNode.nextSibling) : null;
    return true;
  }
  function xs2() {
    for (var e = de2; e; ) e = tn2(e.nextSibling);
  }
  function Zn2() {
    de2 = pe2 = null, I2 = false;
  }
  function Wu2(e) {
    ze2 === null ? ze2 = [e] : ze2.push(e);
  }
  function ft2(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(y(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(y(147, e));
        var l = r, u = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === u ? n.ref : (n = function(i) {
          var o = l.refs;
          i === null ? delete o[u] : o[u] = i;
        }, n._stringRef = u, n);
      }
      if (typeof e != "string") throw Error(y(284));
      if (!t._owner) throw Error(y(290, e));
    }
    return e;
  }
  function ir2(e, n) {
    throw e = Object.prototype.toString.call(n), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function Ji2(e) {
    var n = e._init;
    return n(e._payload);
  }
  function _s2(e) {
    function n(f, a) {
      if (e) {
        var c = f.deletions;
        c === null ? (f.deletions = [a], f.flags |= 16) : c.push(a);
      }
    }
    function t(f, a) {
      if (!e) return null;
      for (; a !== null; ) n(f, a), a = a.sibling;
      return null;
    }
    function r(f, a) {
      for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
      return f;
    }
    function l(f, a) {
      return f = on2(f, a), f.index = 0, f.sibling = null, f;
    }
    function u(f, a, c) {
      return f.index = c, e ? (c = f.alternate, c !== null ? (c = c.index, c < a ? (f.flags |= 2, a) : c) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function o(f, a, c, h) {
      return a === null || a.tag !== 6 ? (a = Dl2(c, f.mode, h), a.return = f, a) : (a = l(a, c), a.return = f, a);
    }
    function s(f, a, c, h) {
      var E3 = c.type;
      return E3 === Mn2 ? v2(f, a, c.props.children, h, c.key) : a !== null && (a.elementType === E3 || typeof E3 == "object" && E3 !== null && E3.$$typeof === Ye2 && Ji2(E3) === a.type) ? (h = l(a, c.props), h.ref = ft2(f, a, c), h.return = f, h) : (h = kr2(c.type, c.key, c.props, null, f.mode, h), h.ref = ft2(f, a, c), h.return = f, h);
    }
    function d(f, a, c, h) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== c.containerInfo || a.stateNode.implementation !== c.implementation ? (a = Rl2(c, f.mode, h), a.return = f, a) : (a = l(a, c.children || []), a.return = f, a);
    }
    function v2(f, a, c, h, E3) {
      return a === null || a.tag !== 7 ? (a = Sn2(c, f.mode, h, E3), a.return = f, a) : (a = l(a, c), a.return = f, a);
    }
    function m(f, a, c) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = Dl2("" + a, f.mode, c), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case Gt2:
            return c = kr2(a.type, a.key, a.props, null, f.mode, c), c.ref = ft2(f, null, a), c.return = f, c;
          case Ln2:
            return a = Rl2(a, f.mode, c), a.return = f, a;
          case Ye2:
            var h = a._init;
            return m(f, h(a._payload), c);
        }
        if (mt2(a) || ut2(a)) return a = Sn2(a, f.mode, c, null), a.return = f, a;
        ir2(f, a);
      }
      return null;
    }
    function p(f, a, c, h) {
      var E3 = a !== null ? a.key : null;
      if (typeof c == "string" && c !== "" || typeof c == "number") return E3 !== null ? null : o(f, a, "" + c, h);
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case Gt2:
            return c.key === E3 ? s(f, a, c, h) : null;
          case Ln2:
            return c.key === E3 ? d(f, a, c, h) : null;
          case Ye2:
            return E3 = c._init, p(f, a, E3(c._payload), h);
        }
        if (mt2(c) || ut2(c)) return E3 !== null ? null : v2(f, a, c, h, null);
        ir2(f, c);
      }
      return null;
    }
    function g2(f, a, c, h, E3) {
      if (typeof h == "string" && h !== "" || typeof h == "number") return f = f.get(c) || null, o(a, f, "" + h, E3);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Gt2:
            return f = f.get(h.key === null ? c : h.key) || null, s(a, f, h, E3);
          case Ln2:
            return f = f.get(h.key === null ? c : h.key) || null, d(a, f, h, E3);
          case Ye2:
            var x = h._init;
            return g2(f, a, c, x(h._payload), E3);
        }
        if (mt2(h) || ut2(h)) return f = f.get(c) || null, v2(a, f, h, E3, null);
        ir2(a, h);
      }
      return null;
    }
    function w(f, a, c, h) {
      for (var E3 = null, x = null, _3 = a, N = a = 0, B = null; _3 !== null && N < c.length; N++) {
        _3.index > N ? (B = _3, _3 = null) : B = _3.sibling;
        var T2 = p(f, _3, c[N], h);
        if (T2 === null) {
          _3 === null && (_3 = B);
          break;
        }
        e && _3 && T2.alternate === null && n(f, _3), a = u(T2, a, N), x === null ? E3 = T2 : x.sibling = T2, x = T2, _3 = B;
      }
      if (N === c.length) return t(f, _3), I2 && vn2(f, N), E3;
      if (_3 === null) {
        for (; N < c.length; N++) _3 = m(f, c[N], h), _3 !== null && (a = u(_3, a, N), x === null ? E3 = _3 : x.sibling = _3, x = _3);
        return I2 && vn2(f, N), E3;
      }
      for (_3 = r(f, _3); N < c.length; N++) B = g2(_3, f, N, c[N], h), B !== null && (e && B.alternate !== null && _3.delete(B.key === null ? N : B.key), a = u(B, a, N), x === null ? E3 = B : x.sibling = B, x = B);
      return e && _3.forEach(function(Ce3) {
        return n(f, Ce3);
      }), I2 && vn2(f, N), E3;
    }
    function k(f, a, c, h) {
      var E3 = ut2(c);
      if (typeof E3 != "function") throw Error(y(150));
      if (c = E3.call(c), c == null) throw Error(y(151));
      for (var x = E3 = null, _3 = a, N = a = 0, B = null, T2 = c.next(); _3 !== null && !T2.done; N++, T2 = c.next()) {
        _3.index > N ? (B = _3, _3 = null) : B = _3.sibling;
        var Ce3 = p(f, _3, T2.value, h);
        if (Ce3 === null) {
          _3 === null && (_3 = B);
          break;
        }
        e && _3 && Ce3.alternate === null && n(f, _3), a = u(Ce3, a, N), x === null ? E3 = Ce3 : x.sibling = Ce3, x = Ce3, _3 = B;
      }
      if (T2.done) return t(f, _3), I2 && vn2(f, N), E3;
      if (_3 === null) {
        for (; !T2.done; N++, T2 = c.next()) T2 = m(f, T2.value, h), T2 !== null && (a = u(T2, a, N), x === null ? E3 = T2 : x.sibling = T2, x = T2);
        return I2 && vn2(f, N), E3;
      }
      for (_3 = r(f, _3); !T2.done; N++, T2 = c.next()) T2 = g2(_3, f, N, T2.value, h), T2 !== null && (e && T2.alternate !== null && _3.delete(T2.key === null ? N : T2.key), a = u(T2, a, N), x === null ? E3 = T2 : x.sibling = T2, x = T2);
      return e && _3.forEach(function(rt4) {
        return n(f, rt4);
      }), I2 && vn2(f, N), E3;
    }
    function F2(f, a, c, h) {
      if (typeof c == "object" && c !== null && c.type === Mn2 && c.key === null && (c = c.props.children), typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case Gt2:
            e: {
              for (var E3 = c.key, x = a; x !== null; ) {
                if (x.key === E3) {
                  if (E3 = c.type, E3 === Mn2) {
                    if (x.tag === 7) {
                      t(f, x.sibling), a = l(x, c.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (x.elementType === E3 || typeof E3 == "object" && E3 !== null && E3.$$typeof === Ye2 && Ji2(E3) === x.type) {
                    t(f, x.sibling), a = l(x, c.props), a.ref = ft2(f, x, c), a.return = f, f = a;
                    break e;
                  }
                  t(f, x);
                  break;
                } else n(f, x);
                x = x.sibling;
              }
              c.type === Mn2 ? (a = Sn2(c.props.children, f.mode, h, c.key), a.return = f, f = a) : (h = kr2(c.type, c.key, c.props, null, f.mode, h), h.ref = ft2(f, a, c), h.return = f, f = h);
            }
            return i(f);
          case Ln2:
            e: {
              for (x = c.key; a !== null; ) {
                if (a.key === x) if (a.tag === 4 && a.stateNode.containerInfo === c.containerInfo && a.stateNode.implementation === c.implementation) {
                  t(f, a.sibling), a = l(a, c.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
                else n(f, a);
                a = a.sibling;
              }
              a = Rl2(c, f.mode, h), a.return = f, f = a;
            }
            return i(f);
          case Ye2:
            return x = c._init, F2(f, a, x(c._payload), h);
        }
        if (mt2(c)) return w(f, a, c, h);
        if (ut2(c)) return k(f, a, c, h);
        ir2(f, c);
      }
      return typeof c == "string" && c !== "" || typeof c == "number" ? (c = "" + c, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, c), a.return = f, f = a) : (t(f, a), a = Dl2(c, f.mode, h), a.return = f, f = a), i(f)) : t(f, a);
    }
    return F2;
  }
  function Ku2() {
    $u2 = Vn2 = Fr2 = null;
  }
  function Yu2(e) {
    var n = Or2.current;
    O2(Or2), e._currentValue = n;
  }
  function au2(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function Kn2(e, n) {
    Fr2 = e, $u2 = Vn2 = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (oe2 = true), e.firstContext = null);
  }
  function Se2(e) {
    var n = e._currentValue;
    if ($u2 !== e) if (e = { context: e, memoizedValue: n, next: null }, Vn2 === null) {
      if (Fr2 === null) throw Error(y(308));
      Vn2 = e, Fr2.dependencies = { lanes: 0, firstContext: e };
    } else Vn2 = Vn2.next = e;
    return n;
  }
  function Xu2(e) {
    gn2 === null ? gn2 = [e] : gn2.push(e);
  }
  function zs2(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Xu2(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Qe2(e, r);
  }
  function Qe2(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  function Gu2(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ps2(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ae2(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function rn2(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, L2 & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Qe2(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Xu2(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Qe2(e, t);
  }
  function mr2(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Ou2(e, t);
    }
  }
  function qi2(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, u = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          u === null ? l = u = i : u = u.next = i, t = t.next;
        } while (t !== null);
        u === null ? l = u = n : u = u.next = n;
      } else l = u = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function Ir2(e, n, t, r) {
    var l = e.updateQueue;
    Xe2 = false;
    var u = l.firstBaseUpdate, i = l.lastBaseUpdate, o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o, d = s.next;
      s.next = null, i === null ? u = d : i.next = d, i = s;
      var v2 = e.alternate;
      v2 !== null && (v2 = v2.updateQueue, o = v2.lastBaseUpdate, o !== i && (o === null ? v2.firstBaseUpdate = d : o.next = d, v2.lastBaseUpdate = s));
    }
    if (u !== null) {
      var m = l.baseState;
      i = 0, v2 = d = s = null, o = u;
      do {
        var p = o.lane, g2 = o.eventTime;
        if ((r & p) === p) {
          v2 !== null && (v2 = v2.next = { eventTime: g2, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
          e: {
            var w = e, k = o;
            switch (p = n, g2 = t, k.tag) {
              case 1:
                if (w = k.payload, typeof w == "function") {
                  m = w.call(g2, m, p);
                  break e;
                }
                m = w;
                break e;
              case 3:
                w.flags = w.flags & -65537 | 128;
              case 0:
                if (w = k.payload, p = typeof w == "function" ? w.call(g2, m, p) : w, p == null) break e;
                m = V({}, m, p);
                break e;
              case 2:
                Xe2 = true;
            }
          }
          o.callback !== null && o.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [o] : p.push(o));
        } else g2 = { eventTime: g2, lane: p, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, v2 === null ? (d = v2 = g2, s = m) : v2 = v2.next = g2, i |= p;
        if (o = o.next, o === null) {
          if (o = l.shared.pending, o === null) break;
          p = o, o = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
        }
      } while (true);
      if (v2 === null && (s = m), l.baseState = s, l.firstBaseUpdate = d, l.lastBaseUpdate = v2, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          i |= l.lane, l = l.next;
        while (l !== n);
      } else u === null && (l.shared.lanes = 0);
      _n2 |= i, e.lanes = i, e.memoizedState = m;
    }
  }
  function bi2(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function") throw Error(y(191, l));
        l.call(r);
      }
    }
  }
  function wn2(e) {
    if (e === Kt2) throw Error(y(174));
    return e;
  }
  function Zu2(e, n) {
    switch (D2(Ut2, n), D2(jt2, e), D2(Fe2, Kt2), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ql2(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Ql2(n, e);
    }
    O2(Fe2), D2(Fe2, n);
  }
  function qn2() {
    O2(Fe2), O2(jt2), O2(Ut2);
  }
  function Ts2(e) {
    wn2(Ut2.current);
    var n = wn2(Fe2.current), t = Ql2(n, e.type);
    n !== t && (D2(jt2, e), D2(Fe2, t));
  }
  function Ju2(e) {
    jt2.current === e && (O2(Fe2), O2(jt2));
  }
  function jr2(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function qu2() {
    for (var e = 0; e < Nl2.length; e++) Nl2[e]._workInProgressVersionPrimary = null;
    Nl2.length = 0;
  }
  function b() {
    throw Error(y(321));
  }
  function bu2(e, n) {
    if (n === null) return false;
    for (var t = 0; t < n.length && t < e.length; t++) if (!Le2(e[t], n[t])) return false;
    return true;
  }
  function ei2(e, n, t, r, l, u) {
    if (xn2 = u, U2 = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, vr2.current = e === null || e.memoizedState === null ? rc2 : lc2, e = t(r, l), Et2) {
      u = 0;
      do {
        if (Et2 = false, Vt2 = 0, 25 <= u) throw Error(y(301));
        u += 1, X2 = $2 = null, n.updateQueue = null, vr2.current = uc2, e = t(r, l);
      } while (Et2);
    }
    if (vr2.current = Vr2, n = $2 !== null && $2.next !== null, xn2 = 0, X2 = $2 = U2 = null, Ur2 = false, n) throw Error(y(300));
    return e;
  }
  function ni2() {
    var e = Vt2 !== 0;
    return Vt2 = 0, e;
  }
  function De2() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return X2 === null ? U2.memoizedState = X2 = e : X2 = X2.next = e, X2;
  }
  function Ee2() {
    if ($2 === null) {
      var e = U2.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $2.next;
    var n = X2 === null ? U2.memoizedState : X2.next;
    if (n !== null) X2 = n, $2 = e;
    else {
      if (e === null) throw Error(y(310));
      $2 = e, e = { memoizedState: $2.memoizedState, baseState: $2.baseState, baseQueue: $2.baseQueue, queue: $2.queue, next: null }, X2 === null ? U2.memoizedState = X2 = e : X2 = X2.next = e;
    }
    return X2;
  }
  function At2(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Pl2(e) {
    var n = Ee2(), t = n.queue;
    if (t === null) throw Error(y(311));
    t.lastRenderedReducer = e;
    var r = $2, l = r.baseQueue, u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = u.next, u.next = i;
      }
      r.baseQueue = l = u, t.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var o = i = null, s = null, d = u;
      do {
        var v2 = d.lane;
        if ((xn2 & v2) === v2) s !== null && (s = s.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
        else {
          var m = { lane: v2, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null };
          s === null ? (o = s = m, i = r) : s = s.next = m, U2.lanes |= v2, _n2 |= v2;
        }
        d = d.next;
      } while (d !== null && d !== u);
      s === null ? i = r : s.next = o, Le2(r, n.memoizedState) || (oe2 = true), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, U2.lanes |= u, _n2 |= u, l = l.next;
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Tl2(e) {
    var n = Ee2(), t = n.queue;
    if (t === null) throw Error(y(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = l = l.next;
      do
        u = e(u, i.action), i = i.next;
      while (i !== l);
      Le2(u, n.memoizedState) || (oe2 = true), n.memoizedState = u, n.baseQueue === null && (n.baseState = u), t.lastRenderedState = u;
    }
    return [u, r];
  }
  function Ls2() {
  }
  function Ms2(e, n) {
    var t = U2, r = Ee2(), l = n(), u = !Le2(r.memoizedState, l);
    if (u && (r.memoizedState = l, oe2 = true), r = r.queue, ti2(Os2.bind(null, t, r, e), [e]), r.getSnapshot !== n || u || X2 !== null && X2.memoizedState.tag & 1) {
      if (t.flags |= 2048, Bt2(9, Rs2.bind(null, t, r, l, n), void 0, null), G2 === null) throw Error(y(349));
      xn2 & 30 || Ds2(t, n, l);
    }
    return l;
  }
  function Ds2(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = U2.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, U2.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function Rs2(e, n, t, r) {
    n.value = t, n.getSnapshot = r, Fs2(n) && Is2(e);
  }
  function Os2(e, n, t) {
    return t(function() {
      Fs2(n) && Is2(e);
    });
  }
  function Fs2(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !Le2(e, t);
    } catch {
      return true;
    }
  }
  function Is2(e) {
    var n = Qe2(e, 1);
    n !== null && Te2(n, e, 1, -1);
  }
  function eo2(e) {
    var n = De2();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: At2, lastRenderedState: e }, n.queue = e, e = e.dispatch = tc2.bind(null, U2, e), [n.memoizedState, e];
  }
  function Bt2(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = U2.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, U2.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function js2() {
    return Ee2().memoizedState;
  }
  function hr2(e, n, t, r) {
    var l = De2();
    U2.flags |= e, l.memoizedState = Bt2(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function Jr2(e, n, t, r) {
    var l = Ee2();
    r = r === void 0 ? null : r;
    var u = void 0;
    if ($2 !== null) {
      var i = $2.memoizedState;
      if (u = i.destroy, r !== null && bu2(r, i.deps)) {
        l.memoizedState = Bt2(n, t, u, r);
        return;
      }
    }
    U2.flags |= e, l.memoizedState = Bt2(1 | n, t, u, r);
  }
  function no2(e, n) {
    return hr2(8390656, 8, e, n);
  }
  function ti2(e, n) {
    return Jr2(2048, 8, e, n);
  }
  function Us2(e, n) {
    return Jr2(4, 2, e, n);
  }
  function Vs2(e, n) {
    return Jr2(4, 4, e, n);
  }
  function As2(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function Bs2(e, n, t) {
    return t = t != null ? t.concat([e]) : null, Jr2(4, 4, As2.bind(null, n, e), t);
  }
  function ri2() {
  }
  function Hs2(e, n) {
    var t = Ee2();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && bu2(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Qs2(e, n) {
    var t = Ee2();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && bu2(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function Ws2(e, n, t) {
    return xn2 & 21 ? (Le2(t, n) || (t = Go2(), U2.lanes |= t, _n2 |= t, e.baseState = true), n) : (e.baseState && (e.baseState = false, oe2 = true), e.memoizedState = t);
  }
  function ec2(e, n) {
    var t = M2;
    M2 = t !== 0 && 4 > t ? t : 4, e(true);
    var r = zl2.transition;
    zl2.transition = {};
    try {
      e(false), n();
    } finally {
      M2 = t, zl2.transition = r;
    }
  }
  function $s2() {
    return Ee2().memoizedState;
  }
  function nc2(e, n, t) {
    var r = un2(e);
    if (t = { lane: r, action: t, hasEagerState: false, eagerState: null, next: null }, Ks2(e)) Ys2(n, t);
    else if (t = zs2(e, n, t, r), t !== null) {
      var l = le2();
      Te2(t, e, r, l), Xs2(t, n, r);
    }
  }
  function tc2(e, n, t) {
    var r = un2(e), l = { lane: r, action: t, hasEagerState: false, eagerState: null, next: null };
    if (Ks2(e)) Ys2(n, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = n.lastRenderedReducer, u !== null)) try {
        var i = n.lastRenderedState, o = u(i, t);
        if (l.hasEagerState = true, l.eagerState = o, Le2(o, i)) {
          var s = n.interleaved;
          s === null ? (l.next = l, Xu2(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      t = zs2(e, n, l, r), t !== null && (l = le2(), Te2(t, e, r, l), Xs2(t, n, r));
    }
  }
  function Ks2(e) {
    var n = e.alternate;
    return e === U2 || n !== null && n === U2;
  }
  function Ys2(e, n) {
    Et2 = Ur2 = true;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Xs2(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Ou2(e, t);
    }
  }
  function _e2(e, n) {
    if (e && e.defaultProps) {
      n = V({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function fu2(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : V({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  function to2(e, n, t, r, l, u, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, i) : n.prototype && n.prototype.isPureReactComponent ? !Rt2(t, r) || !Rt2(l, u) : true;
  }
  function Gs2(e, n, t) {
    var r = false, l = an2, u = n.contextType;
    return typeof u == "object" && u !== null ? u = Se2(u) : (l = ae2(n) ? En2 : te2.current, r = n.contextTypes, u = (r = r != null) ? Gn2(e, l) : an2), n = new n(t, u), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = qr2, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), n;
  }
  function ro2(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && qr2.enqueueReplaceState(n, n.state, null);
  }
  function cu2(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, Gu2(e);
    var u = n.contextType;
    typeof u == "object" && u !== null ? l.context = Se2(u) : (u = ae2(n) ? En2 : te2.current, l.context = Gn2(e, u)), l.state = e.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (fu2(e, n, u, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && qr2.enqueueReplaceState(l, l.state, null), Ir2(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function bn(e, n) {
    try {
      var t = "", r = n;
      do
        t += Da2(r), r = r.return;
      while (r);
      var l = t;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Ll2(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function du2(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  function Zs2(e, n, t) {
    t = Ae2(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      Br2 || (Br2 = true, Eu2 = r), du2(e, n);
    }, t;
  }
  function Js2(e, n, t) {
    t = Ae2(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        du2(e, n);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      du2(e, n), typeof r != "function" && (ln2 === null ? ln2 = /* @__PURE__ */ new Set([this]) : ln2.add(this));
      var i = n.stack;
      this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
    }), t;
  }
  function lo2(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new ic2();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = kc.bind(null, e, n, t), n.then(e, e));
  }
  function uo2(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : true), n) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function io2(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Ae2(-1, 1), n.tag = 2, rn2(t, n, 1))), t.lanes |= 1), e);
  }
  function re2(e, n, t, r) {
    n.child = e === null ? Ns2(n, null, t, r) : Jn2(n, e.child, t, r);
  }
  function oo2(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return Kn2(n, l), r = ei2(e, n, t, r, u, l), t = ni2(), e !== null && !oe2 ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, We2(e, n, l)) : (I2 && t && Hu2(n), n.flags |= 1, re2(e, n, r, l), n.child);
  }
  function so2(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" && !ci2(u) && u.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = u, qs2(e, n, u, r, l)) : (e = kr2(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (u = e.child, !(e.lanes & l)) {
      var i = u.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Rt2, t(i, r) && e.ref === n.ref) return We2(e, n, l);
    }
    return n.flags |= 1, e = on2(u, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function qs2(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Rt2(u, r) && e.ref === n.ref) if (oe2 = false, n.pendingProps = r = u, (e.lanes & l) !== 0) e.flags & 131072 && (oe2 = true);
      else return n.lanes = e.lanes, We2(e, n, l);
    }
    return pu2(e, n, t, r, l);
  }
  function bs2(e, n, t) {
    var r = n.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, D2(Bn2, ce), ce |= t;
    else {
      if (!(t & 1073741824)) return e = u !== null ? u.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, D2(Bn2, ce), ce |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : t, D2(Bn2, ce), ce |= r;
    }
    else u !== null ? (r = u.baseLanes | t, n.memoizedState = null) : r = t, D2(Bn2, ce), ce |= r;
    return re2(e, n, l, t), n.child;
  }
  function ea2(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function pu2(e, n, t, r, l) {
    var u = ae2(t) ? En2 : te2.current;
    return u = Gn2(n, u), Kn2(n, l), t = ei2(e, n, t, r, u, l), r = ni2(), e !== null && !oe2 ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, We2(e, n, l)) : (I2 && r && Hu2(n), n.flags |= 1, re2(e, n, t, l), n.child);
  }
  function ao2(e, n, t, r, l) {
    if (ae2(t)) {
      var u = true;
      Mr2(n);
    } else u = false;
    if (Kn2(n, l), n.stateNode === null) yr2(e, n), Gs2(n, t, r), cu2(n, t, r, l), r = true;
    else if (e === null) {
      var i = n.stateNode, o = n.memoizedProps;
      i.props = o;
      var s = i.context, d = t.contextType;
      typeof d == "object" && d !== null ? d = Se2(d) : (d = ae2(t) ? En2 : te2.current, d = Gn2(n, d));
      var v2 = t.getDerivedStateFromProps, m = typeof v2 == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== r || s !== d) && ro2(n, i, r, d), Xe2 = false;
      var p = n.memoizedState;
      i.state = p, Ir2(n, r, i, l), s = n.memoizedState, o !== r || p !== s || se2.current || Xe2 ? (typeof v2 == "function" && (fu2(n, t, v2, r), s = n.memoizedState), (o = Xe2 || to2(n, t, o, r, p, s, d)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = d, r = o) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = false);
    } else {
      i = n.stateNode, Ps2(e, n), o = n.memoizedProps, d = n.type === n.elementType ? o : _e2(n.type, o), i.props = d, m = n.pendingProps, p = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = Se2(s) : (s = ae2(t) ? En2 : te2.current, s = Gn2(n, s));
      var g2 = t.getDerivedStateFromProps;
      (v2 = typeof g2 == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== m || p !== s) && ro2(n, i, r, s), Xe2 = false, p = n.memoizedState, i.state = p, Ir2(n, r, i, l);
      var w = n.memoizedState;
      o !== m || p !== w || se2.current || Xe2 ? (typeof g2 == "function" && (fu2(n, t, g2, r), w = n.memoizedState), (d = Xe2 || to2(n, t, d, r, p, w, s) || false) ? (v2 || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), i.props = r, i.state = w, i.context = s, r = d) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = false);
    }
    return mu2(e, n, t, r, u, l);
  }
  function mu2(e, n, t, r, l, u) {
    ea2(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && Xi2(n, t, false), We2(e, n, u);
    r = n.stateNode, oc2.current = n;
    var o = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && i ? (n.child = Jn2(n, e.child, null, u), n.child = Jn2(n, null, o, u)) : re2(e, n, o, u), n.memoizedState = r.state, l && Xi2(n, t, true), n.child;
  }
  function na2(e) {
    var n = e.stateNode;
    n.pendingContext ? Yi2(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Yi2(e, n.context, false), Zu2(e, n.containerInfo);
  }
  function fo2(e, n, t, r, l) {
    return Zn2(), Wu2(l), n.flags |= 256, re2(e, n, t, r), n.child;
  }
  function hu2(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ta2(e, n, t) {
    var r = n.pendingProps, l = j2.current, u = false, i = (n.flags & 128) !== 0, o;
    if ((o = i) || (o = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), o ? (u = true, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D2(j2, l & 1), e === null) return su2(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, u ? (r = n.mode, u = n.child, i = { mode: "hidden", children: i }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = i) : u = nl2(i, r, 0, null), e = Sn2(e, r, t, null), u.return = n, e.return = n, u.sibling = e, n.child = u, n.child.memoizedState = hu2(t), n.memoizedState = vu2, e) : li2(n, i));
    if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return sc2(e, n, i, r, o, l, t);
    if (u) {
      u = r.fallback, i = n.mode, l = e.child, o = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = on2(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? u = on2(o, u) : (u = Sn2(u, i, t, null), u.flags |= 2), u.return = n, r.return = n, r.sibling = u, n.child = r, r = u, u = n.child, i = e.child.memoizedState, i = i === null ? hu2(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, u.memoizedState = i, u.childLanes = e.childLanes & ~t, n.memoizedState = vu2, r;
    }
    return u = e.child, e = u.sibling, r = on2(u, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function li2(e, n) {
    return n = nl2({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function or2(e, n, t, r) {
    return r !== null && Wu2(r), Jn2(n, e.child, null, t), e = li2(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function sc2(e, n, t, r, l, u, i) {
    if (t) return n.flags & 256 ? (n.flags &= -257, r = Ll2(Error(y(422))), or2(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (u = r.fallback, l = n.mode, r = nl2({ mode: "visible", children: r.children }, l, 0, null), u = Sn2(u, l, i, null), u.flags |= 2, r.return = n, u.return = n, r.sibling = u, n.child = r, n.mode & 1 && Jn2(n, e.child, null, i), n.child.memoizedState = hu2(i), n.memoizedState = vu2, u);
    if (!(n.mode & 1)) return or2(e, n, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
      return r = o, u = Error(y(419)), r = Ll2(u, r, void 0), or2(e, n, i, r);
    }
    if (o = (i & e.childLanes) !== 0, oe2 || o) {
      if (r = G2, r !== null) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Qe2(e, l), Te2(r, e, l, -1));
      }
      return fi2(), r = Ll2(Error(y(421))), or2(e, n, i, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Sc2.bind(null, e), l._reactRetry = n, null) : (e = u.treeContext, de2 = tn2(l.nextSibling), pe2 = n, I2 = true, ze2 = null, e !== null && (ye2[ge2++] = Ue2, ye2[ge2++] = Ve2, ye2[ge2++] = Cn2, Ue2 = e.id, Ve2 = e.overflow, Cn2 = n), n = li2(n, r.children), n.flags |= 4096, n);
  }
  function co2(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), au2(e.return, n, t);
  }
  function Ml2(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (u.isBackwards = n, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = t, u.tailMode = l);
  }
  function ra2(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, u = r.tail;
    if (re2(e, n, r.children, t), r = j2.current, r & 2) r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && co2(e, t, n);
        else if (e.tag === 19) co2(e, t, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (D2(j2, r), !(n.mode & 1)) n.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && jr2(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Ml2(n, false, l, t, u);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && jr2(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        Ml2(n, true, t, null, u);
        break;
      case "together":
        Ml2(n, false, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function yr2(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function We2(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), _n2 |= n.lanes, !(t & n.childLanes)) return null;
    if (e !== null && n.child !== e.child) throw Error(y(153));
    if (n.child !== null) {
      for (e = n.child, t = on2(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = on2(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function ac2(e, n, t) {
    switch (n.tag) {
      case 3:
        na2(n), Zn2();
        break;
      case 5:
        Ts2(n);
        break;
      case 1:
        ae2(n.type) && Mr2(n);
        break;
      case 4:
        Zu2(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        D2(Or2, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null) return r.dehydrated !== null ? (D2(j2, j2.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? ta2(e, n, t) : (D2(j2, j2.current & 1), e = We2(e, n, t), e !== null ? e.sibling : null);
        D2(j2, j2.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r) return ra2(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D2(j2, j2.current), r) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, bs2(e, n, t);
    }
    return We2(e, n, t);
  }
  function ct2(e, n) {
    if (!I2) switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function ee2(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function fc2(e, n, t) {
    var r = n.pendingProps;
    switch (Qu2(n), n.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ee2(n), null;
      case 1:
        return ae2(n.type) && Lr2(), ee2(n), null;
      case 3:
        return r = n.stateNode, qn2(), O2(se2), O2(te2), qu2(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ur2(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, ze2 !== null && (_u2(ze2), ze2 = null))), yu2(e, n), ee2(n), null;
      case 5:
        Ju2(n);
        var l = wn2(Ut2.current);
        if (t = n.type, e !== null && n.stateNode != null) ua2(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(y(166));
            return ee2(n), null;
          }
          if (e = wn2(Fe2.current), ur2(n)) {
            r = n.stateNode, t = n.type;
            var u = n.memoizedProps;
            switch (r[Re2] = n, r[It2] = u, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                R("cancel", r), R("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                R("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ht2.length; l++) R(ht2[l], r);
                break;
              case "source":
                R("error", r);
                break;
              case "img":
              case "image":
              case "link":
                R("error", r), R("load", r);
                break;
              case "details":
                R("toggle", r);
                break;
              case "input":
                ki2(r, u), R("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, R("invalid", r);
                break;
              case "textarea":
                Ei2(r, u), R("invalid", r);
            }
            Wl2(t, u), l = null;
            for (var i in u) if (u.hasOwnProperty(i)) {
              var o = u[i];
              i === "children" ? typeof o == "string" ? r.textContent !== o && (u.suppressHydrationWarning !== true && lr2(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (u.suppressHydrationWarning !== true && lr2(r.textContent, o, e), l = ["children", "" + o]) : Nt2.hasOwnProperty(i) && o != null && i === "onScroll" && R("scroll", r);
            }
            switch (t) {
              case "input":
                Zt2(r), Si2(r, u, true);
                break;
              case "textarea":
                Zt2(r), Ci2(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Tr2);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Oo2(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = true : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Re2] = n, e[It2] = r, la2(e, n, false, false), n.stateNode = e;
            e: {
              switch (i = $l2(t, r), t) {
                case "dialog":
                  R("cancel", e), R("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  R("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ht2.length; l++) R(ht2[l], e);
                  l = r;
                  break;
                case "source":
                  R("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  R("error", e), R("load", e), l = r;
                  break;
                case "details":
                  R("toggle", e), l = r;
                  break;
                case "input":
                  ki2(e, r), l = Vl2(e, r), R("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = V({}, r, { value: void 0 }), R("invalid", e);
                  break;
                case "textarea":
                  Ei2(e, r), l = Hl2(e, r), R("invalid", e);
                  break;
                default:
                  l = r;
              }
              Wl2(t, l), o = l;
              for (u in o) if (o.hasOwnProperty(u)) {
                var s = o[u];
                u === "style" ? jo2(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Fo2(e, s)) : u === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && zt2(e, s) : typeof s == "number" && zt2(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Nt2.hasOwnProperty(u) ? s != null && u === "onScroll" && R("scroll", e) : s != null && Pu2(e, u, s, i));
              }
              switch (t) {
                case "input":
                  Zt2(e), Si2(e, r, false);
                  break;
                case "textarea":
                  Zt2(e), Ci2(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + sn2(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? Hn2(e, !!r.multiple, u, false) : r.defaultValue != null && Hn2(e, !!r.multiple, r.defaultValue, true);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Tr2);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = true;
                  break e;
                default:
                  r = false;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return ee2(n), null;
      case 6:
        if (e && n.stateNode != null) ia2(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
          if (t = wn2(Ut2.current), wn2(Fe2.current), ur2(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[Re2] = n, (u = r.nodeValue !== t) && (e = pe2, e !== null)) switch (e.tag) {
              case 3:
                lr2(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== true && lr2(r.nodeValue, t, (e.mode & 1) !== 0);
            }
            u && (n.flags |= 4);
          } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Re2] = n, n.stateNode = r;
        }
        return ee2(n), null;
      case 13:
        if (O2(j2), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (I2 && de2 !== null && n.mode & 1 && !(n.flags & 128)) xs2(), Zn2(), n.flags |= 98560, u = false;
          else if (u = ur2(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(y(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(y(317));
              u[Re2] = n;
            } else Zn2(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            ee2(n), u = false;
          } else ze2 !== null && (_u2(ze2), ze2 = null), u = true;
          if (!u) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || j2.current & 1 ? K2 === 0 && (K2 = 3) : fi2())), n.updateQueue !== null && (n.flags |= 4), ee2(n), null);
      case 4:
        return qn2(), yu2(e, n), e === null && Ot2(n.stateNode.containerInfo), ee2(n), null;
      case 10:
        return Yu2(n.type._context), ee2(n), null;
      case 17:
        return ae2(n.type) && Lr2(), ee2(n), null;
      case 19:
        if (O2(j2), u = n.memoizedState, u === null) return ee2(n), null;
        if (r = (n.flags & 128) !== 0, i = u.rendering, i === null) if (r) ct2(u, false);
        else {
          if (K2 !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
            if (i = jr2(e), i !== null) {
              for (n.flags |= 128, ct2(u, false), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) u = t, e = r, u.flags &= 14680066, i = u.alternate, i === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = i.childLanes, u.lanes = i.lanes, u.child = i.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = i.memoizedProps, u.memoizedState = i.memoizedState, u.updateQueue = i.updateQueue, u.type = i.type, e = i.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return D2(j2, j2.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Q2() > et2 && (n.flags |= 128, r = true, ct2(u, false), n.lanes = 4194304);
        }
        else {
          if (!r) if (e = jr2(i), e !== null) {
            if (n.flags |= 128, r = true, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), ct2(u, true), u.tail === null && u.tailMode === "hidden" && !i.alternate && !I2) return ee2(n), null;
          } else 2 * Q2() - u.renderingStartTime > et2 && t !== 1073741824 && (n.flags |= 128, r = true, ct2(u, false), n.lanes = 4194304);
          u.isBackwards ? (i.sibling = n.child, n.child = i) : (t = u.last, t !== null ? t.sibling = i : n.child = i, u.last = i);
        }
        return u.tail !== null ? (n = u.tail, u.rendering = n, u.tail = n.sibling, u.renderingStartTime = Q2(), n.sibling = null, t = j2.current, D2(j2, r ? t & 1 | 2 : t & 1), n) : (ee2(n), null);
      case 22:
      case 23:
        return ai2(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? ce & 1073741824 && (ee2(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ee2(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(y(156, n.tag));
  }
  function cc2(e, n) {
    switch (Qu2(n), n.tag) {
      case 1:
        return ae2(n.type) && Lr2(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return qn2(), O2(se2), O2(te2), qu2(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Ju2(n), null;
      case 13:
        if (O2(j2), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(y(340));
          Zn2();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return O2(j2), null;
      case 4:
        return qn2(), null;
      case 10:
        return Yu2(n.type._context), null;
      case 22:
      case 23:
        return ai2(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  function An(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (r) {
      A2(e, n, r);
    }
    else t.current = null;
  }
  function gu2(e, n, t) {
    try {
      t();
    } catch (r) {
      A2(e, n, r);
    }
  }
  function pc2(e, n) {
    if (nu2 = Nr2, e = cs2(), Bu2(e)) {
      if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, u.nodeType;
          } catch {
            t = null;
            break e;
          }
          var i = 0, o = -1, s = -1, d = 0, v2 = 0, m = e, p = null;
          n: for (; ; ) {
            for (var g2; m !== t || l !== 0 && m.nodeType !== 3 || (o = i + l), m !== u || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (g2 = m.firstChild) !== null; ) p = m, m = g2;
            for (; ; ) {
              if (m === e) break n;
              if (p === t && ++d === l && (o = i), p === u && ++v2 === r && (s = i), (g2 = m.nextSibling) !== null) break;
              m = p, p = m.parentNode;
            }
            m = g2;
          }
          t = o === -1 || s === -1 ? null : { start: o, end: s };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (tu2 = { focusedElem: e, selectionRange: t }, Nr2 = false, S2 = n; S2 !== null; ) if (n = S2, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, S2 = e;
    else for (; S2 !== null; ) {
      n = S2;
      try {
        var w = n.alternate;
        if (n.flags & 1024) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (w !== null) {
              var k = w.memoizedProps, F2 = w.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? k : _e2(n.type, k), F2);
              f.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var c = n.stateNode.containerInfo;
            c.nodeType === 1 ? c.textContent = "" : c.nodeType === 9 && c.documentElement && c.removeChild(c.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(y(163));
        }
      } catch (h) {
        A2(n, n.return, h);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, S2 = e;
        break;
      }
      S2 = n.return;
    }
    return w = po2, po2 = false, w;
  }
  function Ct2(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && gu2(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function br2(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function wu2(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function oa2(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, oa2(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Re2], delete n[It2], delete n[uu2], delete n[Gf], delete n[Zf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function sa2(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function mo2(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || sa2(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ku2(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Tr2));
    else if (r !== 4 && (e = e.child, e !== null)) for (ku2(e, n, t), e = e.sibling; e !== null; ) ku2(e, n, t), e = e.sibling;
  }
  function Su2(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Su2(e, n, t), e = e.sibling; e !== null; ) Su2(e, n, t), e = e.sibling;
  }
  function Ke2(e, n, t) {
    for (t = t.child; t !== null; ) aa2(e, n, t), t = t.sibling;
  }
  function aa2(e, n, t) {
    if (Oe2 && typeof Oe2.onCommitFiberUnmount == "function") try {
      Oe2.onCommitFiberUnmount($r2, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        ne2 || An(t, n);
      case 6:
        var r = Z2, l = Ne2;
        Z2 = null, Ke2(e, n, t), Z2 = r, Ne2 = l, Z2 !== null && (Ne2 ? (e = Z2, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : Z2.removeChild(t.stateNode));
        break;
      case 18:
        Z2 !== null && (Ne2 ? (e = Z2, t = t.stateNode, e.nodeType === 8 ? xl2(e.parentNode, t) : e.nodeType === 1 && xl2(e, t), Mt2(e)) : xl2(Z2, t.stateNode));
        break;
      case 4:
        r = Z2, l = Ne2, Z2 = t.stateNode.containerInfo, Ne2 = true, Ke2(e, n, t), Z2 = r, Ne2 = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ne2 && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, i = u.destroy;
            u = u.tag, i !== void 0 && (u & 2 || u & 4) && gu2(t, n, i), l = l.next;
          } while (l !== r);
        }
        Ke2(e, n, t);
        break;
      case 1:
        if (!ne2 && (An(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (o) {
          A2(t, n, o);
        }
        Ke2(e, n, t);
        break;
      case 21:
        Ke2(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (ne2 = (r = ne2) || t.memoizedState !== null, Ke2(e, n, t), ne2 = r) : Ke2(e, n, t);
        break;
      default:
        Ke2(e, n, t);
    }
  }
  function vo2(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new dc2()), n.forEach(function(r) {
        var l = Ec.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function xe2(e, n) {
    var t = n.deletions;
    if (t !== null) for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var u = e, i = n, o = i;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              Z2 = o.stateNode, Ne2 = false;
              break e;
            case 3:
              Z2 = o.stateNode.containerInfo, Ne2 = true;
              break e;
            case 4:
              Z2 = o.stateNode.containerInfo, Ne2 = true;
              break e;
          }
          o = o.return;
        }
        if (Z2 === null) throw Error(y(160));
        aa2(u, i, l), Z2 = null, Ne2 = false;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (d) {
        A2(l, n, d);
      }
    }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) fa2(n, e), n = n.sibling;
  }
  function fa2(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (xe2(n, e), Me2(e), r & 4) {
          try {
            Ct2(3, e, e.return), br2(3, e);
          } catch (k) {
            A2(e, e.return, k);
          }
          try {
            Ct2(5, e, e.return);
          } catch (k) {
            A2(e, e.return, k);
          }
        }
        break;
      case 1:
        xe2(n, e), Me2(e), r & 512 && t !== null && An(t, t.return);
        break;
      case 5:
        if (xe2(n, e), Me2(e), r & 512 && t !== null && An(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            zt2(l, "");
          } catch (k) {
            A2(e, e.return, k);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, i = t !== null ? t.memoizedProps : u, o = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            o === "input" && u.type === "radio" && u.name != null && Do2(l, u), $l2(o, i);
            var d = $l2(o, u);
            for (i = 0; i < s.length; i += 2) {
              var v2 = s[i], m = s[i + 1];
              v2 === "style" ? jo2(l, m) : v2 === "dangerouslySetInnerHTML" ? Fo2(l, m) : v2 === "children" ? zt2(l, m) : Pu2(l, v2, m, d);
            }
            switch (o) {
              case "input":
                Al2(l, u);
                break;
              case "textarea":
                Ro2(l, u);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var g2 = u.value;
                g2 != null ? Hn2(l, !!u.multiple, g2, false) : p !== !!u.multiple && (u.defaultValue != null ? Hn2(l, !!u.multiple, u.defaultValue, true) : Hn2(l, !!u.multiple, u.multiple ? [] : "", false));
            }
            l[It2] = u;
          } catch (k) {
            A2(e, e.return, k);
          }
        }
        break;
      case 6:
        if (xe2(n, e), Me2(e), r & 4) {
          if (e.stateNode === null) throw Error(y(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (k) {
            A2(e, e.return, k);
          }
        }
        break;
      case 3:
        if (xe2(n, e), Me2(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
          Mt2(n.containerInfo);
        } catch (k) {
          A2(e, e.return, k);
        }
        break;
      case 4:
        xe2(n, e), Me2(e);
        break;
      case 13:
        xe2(n, e), Me2(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (oi2 = Q2())), r & 4 && vo2(e);
        break;
      case 22:
        if (v2 = t !== null && t.memoizedState !== null, e.mode & 1 ? (ne2 = (d = ne2) || v2, xe2(n, e), ne2 = d) : xe2(n, e), Me2(e), r & 8192) {
          if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !v2 && e.mode & 1) for (S2 = e, v2 = e.child; v2 !== null; ) {
            for (m = S2 = v2; S2 !== null; ) {
              switch (p = S2, g2 = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ct2(4, p, p.return);
                  break;
                case 1:
                  An(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = p, t = p.return;
                    try {
                      n = r, w.props = n.memoizedProps, w.state = n.memoizedState, w.componentWillUnmount();
                    } catch (k) {
                      A2(r, t, k);
                    }
                  }
                  break;
                case 5:
                  An(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    yo2(m);
                    continue;
                  }
              }
              g2 !== null ? (g2.return = p, S2 = g2) : yo2(m);
            }
            v2 = v2.sibling;
          }
          e: for (v2 = null, m = e; ; ) {
            if (m.tag === 5) {
              if (v2 === null) {
                v2 = m;
                try {
                  l = m.stateNode, d ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (o = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, o.style.display = Io2("display", i));
                } catch (k) {
                  A2(e, e.return, k);
                }
              }
            } else if (m.tag === 6) {
              if (v2 === null) try {
                m.stateNode.nodeValue = d ? "" : m.memoizedProps;
              } catch (k) {
                A2(e, e.return, k);
              }
            } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
              m.child.return = m, m = m.child;
              continue;
            }
            if (m === e) break e;
            for (; m.sibling === null; ) {
              if (m.return === null || m.return === e) break e;
              v2 === m && (v2 = null), m = m.return;
            }
            v2 === m && (v2 = null), m.sibling.return = m.return, m = m.sibling;
          }
        }
        break;
      case 19:
        xe2(n, e), Me2(e), r & 4 && vo2(e);
        break;
      case 21:
        break;
      default:
        xe2(n, e), Me2(e);
    }
  }
  function Me2(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (sa2(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(y(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (zt2(l, ""), r.flags &= -33);
            var u = mo2(e);
            Su2(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, o = mo2(e);
            ku2(e, o, i);
            break;
          default:
            throw Error(y(161));
        }
      } catch (s) {
        A2(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function mc2(e, n, t) {
    S2 = e, ca2(e);
  }
  function ca2(e, n, t) {
    for (var r = (e.mode & 1) !== 0; S2 !== null; ) {
      var l = S2, u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || sr2;
        if (!i) {
          var o = l.alternate, s = o !== null && o.memoizedState !== null || ne2;
          o = sr2;
          var d = ne2;
          if (sr2 = i, (ne2 = s) && !d) for (S2 = l; S2 !== null; ) i = S2, s = i.child, i.tag === 22 && i.memoizedState !== null ? go2(l) : s !== null ? (s.return = i, S2 = s) : go2(l);
          for (; u !== null; ) S2 = u, ca2(u), u = u.sibling;
          S2 = l, sr2 = o, ne2 = d;
        }
        ho2(e);
      } else l.subtreeFlags & 8772 && u !== null ? (u.return = l, S2 = u) : ho2(e);
    }
  }
  function ho2(e) {
    for (; S2 !== null; ) {
      var n = S2;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              ne2 || br2(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !ne2) if (t === null) r.componentDidMount();
              else {
                var l = n.elementType === n.type ? t.memoizedProps : _e2(n.type, t.memoizedProps);
                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = n.updateQueue;
              u !== null && bi2(n, u, r);
              break;
            case 3:
              var i = n.updateQueue;
              if (i !== null) {
                if (t = null, n.child !== null) switch (n.child.tag) {
                  case 5:
                    t = n.child.stateNode;
                    break;
                  case 1:
                    t = n.child.stateNode;
                }
                bi2(n, i, t);
              }
              break;
            case 5:
              var o = n.stateNode;
              if (t === null && n.flags & 4) {
                t = o;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var d = n.alternate;
                if (d !== null) {
                  var v2 = d.memoizedState;
                  if (v2 !== null) {
                    var m = v2.dehydrated;
                    m !== null && Mt2(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
          ne2 || n.flags & 512 && wu2(n);
        } catch (p) {
          A2(n, n.return, p);
        }
      }
      if (n === e) {
        S2 = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, S2 = t;
        break;
      }
      S2 = n.return;
    }
  }
  function yo2(e) {
    for (; S2 !== null; ) {
      var n = S2;
      if (n === e) {
        S2 = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, S2 = t;
        break;
      }
      S2 = n.return;
    }
  }
  function go2(e) {
    for (; S2 !== null; ) {
      var n = S2;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              br2(4, n);
            } catch (s) {
              A2(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                A2(n, l, s);
              }
            }
            var u = n.return;
            try {
              wu2(n);
            } catch (s) {
              A2(n, u, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              wu2(n);
            } catch (s) {
              A2(n, i, s);
            }
        }
      } catch (s) {
        A2(n, n.return, s);
      }
      if (n === e) {
        S2 = null;
        break;
      }
      var o = n.sibling;
      if (o !== null) {
        o.return = n.return, S2 = o;
        break;
      }
      S2 = n.return;
    }
  }
  function le2() {
    return L2 & 6 ? Q2() : gr2 !== -1 ? gr2 : gr2 = Q2();
  }
  function un2(e) {
    return e.mode & 1 ? L2 & 2 && J2 !== 0 ? J2 & -J2 : qf.transition !== null ? (wr2 === 0 && (wr2 = Go2()), wr2) : (e = M2, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ts2(e.type)), e) : 1;
  }
  function Te2(e, n, t, r) {
    if (50 < _t2) throw _t2 = 0, Cu2 = null, Error(y(185));
    Qt2(e, t, r), (!(L2 & 2) || e !== G2) && (e === G2 && (!(L2 & 2) && (el2 |= t), K2 === 4 && Ze2(e, J2)), fe2(e, r), t === 1 && L2 === 0 && !(n.mode & 1) && (et2 = Q2() + 500, Zr2 && dn2()));
  }
  function fe2(e, n) {
    var t = e.callbackNode;
    Ja2(e, n);
    var r = _r2(e, e === G2 ? J2 : 0);
    if (r === 0) t !== null && Ni2(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && Ni2(t), n === 1) e.tag === 0 ? Jf(wo2.bind(null, e)) : Ss2(wo2.bind(null, e)), Yf(function() {
        !(L2 & 6) && dn2();
      }), t = null;
      else {
        switch (Zo2(r)) {
          case 1:
            t = Ru2;
            break;
          case 4:
            t = Yo2;
            break;
          case 16:
            t = xr2;
            break;
          case 536870912:
            t = Xo2;
            break;
          default:
            t = xr2;
        }
        t = wa2(t, da2.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function da2(e, n) {
    if (gr2 = -1, wr2 = 0, L2 & 6) throw Error(y(327));
    var t = e.callbackNode;
    if (Yn2() && e.callbackNode !== t) return null;
    var r = _r2(e, e === G2 ? J2 : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = Qr2(e, r);
    else {
      n = r;
      var l = L2;
      L2 |= 2;
      var u = ma2();
      (G2 !== e || J2 !== n) && (Ie2 = null, et2 = Q2() + 500, kn2(e, n));
      do
        try {
          gc2();
          break;
        } catch (o) {
          pa2(e, o);
        }
      while (true);
      Ku2(), Ar2.current = u, L2 = l, W2 !== null ? n = 0 : (G2 = null, J2 = 0, n = K2);
    }
    if (n !== 0) {
      if (n === 2 && (l = Zl2(e), l !== 0 && (r = l, n = xu2(e, l))), n === 1) throw t = Ht2, kn2(e, 0), Ze2(e, r), fe2(e, Q2()), t;
      if (n === 6) Ze2(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !hc2(l) && (n = Qr2(e, r), n === 2 && (u = Zl2(e), u !== 0 && (r = u, n = xu2(e, u))), n === 1)) throw t = Ht2, kn2(e, 0), Ze2(e, r), fe2(e, Q2()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
            hn2(e, ie2, Ie2);
            break;
          case 3:
            if (Ze2(e, r), (r & 130023424) === r && (n = oi2 + 500 - Q2(), 10 < n)) {
              if (_r2(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                le2(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = lu2(hn2.bind(null, e, ie2, Ie2), n);
              break;
            }
            hn2(e, ie2, Ie2);
            break;
          case 4:
            if (Ze2(e, r), (r & 4194240) === r) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - Pe2(r);
              u = 1 << i, i = n[i], i > l && (l = i), r &= ~u;
            }
            if (r = l, r = Q2() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vc2(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = lu2(hn2.bind(null, e, ie2, Ie2), r);
              break;
            }
            hn2(e, ie2, Ie2);
            break;
          case 5:
            hn2(e, ie2, Ie2);
            break;
          default:
            throw Error(y(329));
        }
      }
    }
    return fe2(e, Q2()), e.callbackNode === t ? da2.bind(null, e) : null;
  }
  function xu2(e, n) {
    var t = xt2;
    return e.current.memoizedState.isDehydrated && (kn2(e, n).flags |= 256), e = Qr2(e, n), e !== 2 && (n = ie2, ie2 = t, n !== null && _u2(n)), e;
  }
  function _u2(e) {
    ie2 === null ? ie2 = e : ie2.push.apply(ie2, e);
  }
  function hc2(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
          var l = t[r], u = l.getSnapshot;
          l = l.value;
          try {
            if (!Le2(u(), l)) return false;
          } catch {
            return false;
          }
        }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return true;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return true;
  }
  function Ze2(e, n) {
    for (n &= ~ii2, n &= ~el2, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - Pe2(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function wo2(e) {
    if (L2 & 6) throw Error(y(327));
    Yn2();
    var n = _r2(e, 0);
    if (!(n & 1)) return fe2(e, Q2()), null;
    var t = Qr2(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Zl2(e);
      r !== 0 && (n = r, t = xu2(e, r));
    }
    if (t === 1) throw t = Ht2, kn2(e, 0), Ze2(e, n), fe2(e, Q2()), t;
    if (t === 6) throw Error(y(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, hn2(e, ie2, Ie2), fe2(e, Q2()), null;
  }
  function si2(e, n) {
    var t = L2;
    L2 |= 1;
    try {
      return e(n);
    } finally {
      L2 = t, L2 === 0 && (et2 = Q2() + 500, Zr2 && dn2());
    }
  }
  function Nn2(e) {
    qe2 !== null && qe2.tag === 0 && !(L2 & 6) && Yn2();
    var n = L2;
    L2 |= 1;
    var t = ke2.transition, r = M2;
    try {
      if (ke2.transition = null, M2 = 1, e) return e();
    } finally {
      M2 = r, ke2.transition = t, L2 = n, !(L2 & 6) && dn2();
    }
  }
  function ai2() {
    ce = Bn2.current, O2(Bn2);
  }
  function kn2(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Kf(t)), W2 !== null) for (t = W2.return; t !== null; ) {
      var r = t;
      switch (Qu2(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Lr2();
          break;
        case 3:
          qn2(), O2(se2), O2(te2), qu2();
          break;
        case 5:
          Ju2(r);
          break;
        case 4:
          qn2();
          break;
        case 13:
          O2(j2);
          break;
        case 19:
          O2(j2);
          break;
        case 10:
          Yu2(r.type._context);
          break;
        case 22:
        case 23:
          ai2();
      }
      t = t.return;
    }
    if (G2 = e, W2 = e = on2(e.current, null), J2 = ce = n, K2 = 0, Ht2 = null, ii2 = el2 = _n2 = 0, ie2 = xt2 = null, gn2 !== null) {
      for (n = 0; n < gn2.length; n++) if (t = gn2[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, u = t.pending;
        if (u !== null) {
          var i = u.next;
          u.next = l, r.next = i;
        }
        t.pending = r;
      }
      gn2 = null;
    }
    return e;
  }
  function pa2(e, n) {
    do {
      var t = W2;
      try {
        if (Ku2(), vr2.current = Vr2, Ur2) {
          for (var r = U2.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          Ur2 = false;
        }
        if (xn2 = 0, X2 = $2 = U2 = null, Et2 = false, Vt2 = 0, ui2.current = null, t === null || t.return === null) {
          K2 = 1, Ht2 = n, W2 = null;
          break;
        }
        e: {
          var u = e, i = t.return, o = t, s = n;
          if (n = J2, o.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var d = s, v2 = o, m = v2.tag;
            if (!(v2.mode & 1) && (m === 0 || m === 11 || m === 15)) {
              var p = v2.alternate;
              p ? (v2.updateQueue = p.updateQueue, v2.memoizedState = p.memoizedState, v2.lanes = p.lanes) : (v2.updateQueue = null, v2.memoizedState = null);
            }
            var g2 = uo2(i);
            if (g2 !== null) {
              g2.flags &= -257, io2(g2, i, o, u, n), g2.mode & 1 && lo2(u, d, n), n = g2, s = d;
              var w = n.updateQueue;
              if (w === null) {
                var k = /* @__PURE__ */ new Set();
                k.add(s), n.updateQueue = k;
              } else w.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                lo2(u, d, n), fi2();
                break e;
              }
              s = Error(y(426));
            }
          } else if (I2 && o.mode & 1) {
            var F2 = uo2(i);
            if (F2 !== null) {
              !(F2.flags & 65536) && (F2.flags |= 256), io2(F2, i, o, u, n), Wu2(bn(s, o));
              break e;
            }
          }
          u = s = bn(s, o), K2 !== 4 && (K2 = 2), xt2 === null ? xt2 = [u] : xt2.push(u), u = i;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, n &= -n, u.lanes |= n;
                var f = Zs2(u, s, n);
                qi2(u, f);
                break e;
              case 1:
                o = s;
                var a = u.type, c = u.stateNode;
                if (!(u.flags & 128) && (typeof a.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (ln2 === null || !ln2.has(c)))) {
                  u.flags |= 65536, n &= -n, u.lanes |= n;
                  var h = Js2(u, o, n);
                  qi2(u, h);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ha2(t);
      } catch (E3) {
        n = E3, W2 === t && t !== null && (W2 = t = t.return);
        continue;
      }
      break;
    } while (true);
  }
  function ma2() {
    var e = Ar2.current;
    return Ar2.current = Vr2, e === null ? Vr2 : e;
  }
  function fi2() {
    (K2 === 0 || K2 === 3 || K2 === 2) && (K2 = 4), G2 === null || !(_n2 & 268435455) && !(el2 & 268435455) || Ze2(G2, J2);
  }
  function Qr2(e, n) {
    var t = L2;
    L2 |= 2;
    var r = ma2();
    (G2 !== e || J2 !== n) && (Ie2 = null, kn2(e, n));
    do
      try {
        yc2();
        break;
      } catch (l) {
        pa2(e, l);
      }
    while (true);
    if (Ku2(), L2 = t, Ar2.current = r, W2 !== null) throw Error(y(261));
    return G2 = null, J2 = 0, K2;
  }
  function yc2() {
    for (; W2 !== null; ) va2(W2);
  }
  function gc2() {
    for (; W2 !== null && !Ha2(); ) va2(W2);
  }
  function va2(e) {
    var n = ga2(e.alternate, e, ce);
    e.memoizedProps = e.pendingProps, n === null ? ha2(e) : W2 = n, ui2.current = null;
  }
  function ha2(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = cc2(t, n), t !== null) {
          t.flags &= 32767, W2 = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          K2 = 6, W2 = null;
          return;
        }
      } else if (t = fc2(t, n, ce), t !== null) {
        W2 = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        W2 = n;
        return;
      }
      W2 = n = e;
    } while (n !== null);
    K2 === 0 && (K2 = 5);
  }
  function hn2(e, n, t) {
    var r = M2, l = ke2.transition;
    try {
      ke2.transition = null, M2 = 1, wc2(e, n, t, r);
    } finally {
      ke2.transition = l, M2 = r;
    }
    return null;
  }
  function wc2(e, n, t, r) {
    do
      Yn2();
    while (qe2 !== null);
    if (L2 & 6) throw Error(y(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(y(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = t.lanes | t.childLanes;
    if (qa2(e, u), e === G2 && (W2 = G2 = null, J2 = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || ar2 || (ar2 = true, wa2(xr2, function() {
      return Yn2(), null;
    })), u = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || u) {
      u = ke2.transition, ke2.transition = null;
      var i = M2;
      M2 = 1;
      var o = L2;
      L2 |= 4, ui2.current = null, pc2(e, t), fa2(t, e), Vf(tu2), Nr2 = !!nu2, tu2 = nu2 = null, e.current = t, mc2(t), Qa2(), L2 = o, M2 = i, ke2.transition = u;
    } else e.current = t;
    if (ar2 && (ar2 = false, qe2 = e, Hr2 = l), u = e.pendingLanes, u === 0 && (ln2 = null), Ka2(t.stateNode), fe2(e, Q2()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Br2) throw Br2 = false, e = Eu2, Eu2 = null, e;
    return Hr2 & 1 && e.tag !== 0 && Yn2(), u = e.pendingLanes, u & 1 ? e === Cu2 ? _t2++ : (_t2 = 0, Cu2 = e) : _t2 = 0, dn2(), null;
  }
  function Yn2() {
    if (qe2 !== null) {
      var e = Zo2(Hr2), n = ke2.transition, t = M2;
      try {
        if (ke2.transition = null, M2 = 16 > e ? 16 : e, qe2 === null) var r = false;
        else {
          if (e = qe2, qe2 = null, Hr2 = 0, L2 & 6) throw Error(y(331));
          var l = L2;
          for (L2 |= 4, S2 = e.current; S2 !== null; ) {
            var u = S2, i = u.child;
            if (S2.flags & 16) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var d = o[s];
                  for (S2 = d; S2 !== null; ) {
                    var v2 = S2;
                    switch (v2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ct2(8, v2, u);
                    }
                    var m = v2.child;
                    if (m !== null) m.return = v2, S2 = m;
                    else for (; S2 !== null; ) {
                      v2 = S2;
                      var p = v2.sibling, g2 = v2.return;
                      if (oa2(v2), v2 === d) {
                        S2 = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = g2, S2 = p;
                        break;
                      }
                      S2 = g2;
                    }
                  }
                }
                var w = u.alternate;
                if (w !== null) {
                  var k = w.child;
                  if (k !== null) {
                    w.child = null;
                    do {
                      var F2 = k.sibling;
                      k.sibling = null, k = F2;
                    } while (k !== null);
                  }
                }
                S2 = u;
              }
            }
            if (u.subtreeFlags & 2064 && i !== null) i.return = u, S2 = i;
            else e: for (; S2 !== null; ) {
              if (u = S2, u.flags & 2048) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Ct2(9, u, u.return);
              }
              var f = u.sibling;
              if (f !== null) {
                f.return = u.return, S2 = f;
                break e;
              }
              S2 = u.return;
            }
          }
          var a = e.current;
          for (S2 = a; S2 !== null; ) {
            i = S2;
            var c = i.child;
            if (i.subtreeFlags & 2064 && c !== null) c.return = i, S2 = c;
            else e: for (i = a; S2 !== null; ) {
              if (o = S2, o.flags & 2048) try {
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    br2(9, o);
                }
              } catch (E3) {
                A2(o, o.return, E3);
              }
              if (o === i) {
                S2 = null;
                break e;
              }
              var h = o.sibling;
              if (h !== null) {
                h.return = o.return, S2 = h;
                break e;
              }
              S2 = o.return;
            }
          }
          if (L2 = l, dn2(), Oe2 && typeof Oe2.onPostCommitFiberRoot == "function") try {
            Oe2.onPostCommitFiberRoot($r2, e);
          } catch {
          }
          r = true;
        }
        return r;
      } finally {
        M2 = t, ke2.transition = n;
      }
    }
    return false;
  }
  function ko2(e, n, t) {
    n = bn(t, n), n = Zs2(e, n, 1), e = rn2(e, n, 1), n = le2(), e !== null && (Qt2(e, 1, n), fe2(e, n));
  }
  function A2(e, n, t) {
    if (e.tag === 3) ko2(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        ko2(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ln2 === null || !ln2.has(r))) {
          e = bn(t, e), e = Js2(n, e, 1), n = rn2(n, e, 1), e = le2(), n !== null && (Qt2(n, 1, e), fe2(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function kc(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = le2(), e.pingedLanes |= e.suspendedLanes & t, G2 === e && (J2 & t) === t && (K2 === 4 || K2 === 3 && (J2 & 130023424) === J2 && 500 > Q2() - oi2 ? kn2(e, 0) : ii2 |= t), fe2(e, n);
  }
  function ya2(e, n) {
    n === 0 && (e.mode & 1 ? (n = bt2, bt2 <<= 1, !(bt2 & 130023424) && (bt2 = 4194304)) : n = 1);
    var t = le2();
    e = Qe2(e, n), e !== null && (Qt2(e, n, t), fe2(e, t));
  }
  function Sc2(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), ya2(e, t);
  }
  function Ec(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(y(314));
    }
    r !== null && r.delete(n), ya2(e, t);
  }
  function wa2(e, n) {
    return Ko2(e, n);
  }
  function Cc2(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function we2(e, n, t, r) {
    return new Cc2(e, n, t, r);
  }
  function ci2(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function xc2(e) {
    if (typeof e == "function") return ci2(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Lu2) return 11;
      if (e === Mu2) return 14;
    }
    return 2;
  }
  function on2(e, n) {
    var t = e.alternate;
    return t === null ? (t = we2(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function kr2(e, n, t, r, l, u) {
    var i = 2;
    if (r = e, typeof e == "function") ci2(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case Mn2:
        return Sn2(t.children, l, u, n);
      case Tu2:
        i = 8, l |= 8;
        break;
      case Fl2:
        return e = we2(12, t, n, l | 2), e.elementType = Fl2, e.lanes = u, e;
      case Il2:
        return e = we2(13, t, n, l), e.elementType = Il2, e.lanes = u, e;
      case jl2:
        return e = we2(19, t, n, l), e.elementType = jl2, e.lanes = u, e;
      case To2:
        return nl2(t, l, u, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case zo2:
            i = 10;
            break e;
          case Po2:
            i = 9;
            break e;
          case Lu2:
            i = 11;
            break e;
          case Mu2:
            i = 14;
            break e;
          case Ye2:
            i = 16, r = null;
            break e;
        }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
    return n = we2(i, t, n, l), n.elementType = e, n.type = r, n.lanes = u, n;
  }
  function Sn2(e, n, t, r) {
    return e = we2(7, e, r, n), e.lanes = t, e;
  }
  function nl2(e, n, t, r) {
    return e = we2(22, e, r, n), e.elementType = To2, e.lanes = t, e.stateNode = { isHidden: false }, e;
  }
  function Dl2(e, n, t) {
    return e = we2(6, e, null, n), e.lanes = t, e;
  }
  function Rl2(e, n, t) {
    return n = we2(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function _c(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = pl2(0), this.expirationTimes = pl2(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pl2(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function di2(e, n, t, r, l, u, i, o, s) {
    return e = new _c(e, n, t, o, s), n === 1 ? (n = 1, u === true && (n |= 8)) : n = 0, u = we2(3, null, null, n), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Gu2(u), e;
  }
  function Nc(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ln2, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function ka2(e) {
    if (!e) return an2;
    e = e._reactInternals;
    e: {
      if (Pn2(e) !== e || e.tag !== 1) throw Error(y(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (ae2(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(y(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (ae2(t)) return ks2(e, t, n);
    }
    return n;
  }
  function Sa2(e, n, t, r, l, u, i, o, s) {
    return e = di2(t, r, true, e, l, u, i, o, s), e.context = ka2(null), t = e.current, r = le2(), l = un2(t), u = Ae2(r, l), u.callback = n ?? null, rn2(t, u, l), e.current.lanes = l, Qt2(e, l, r), fe2(e, r), e;
  }
  function tl2(e, n, t, r) {
    var l = n.current, u = le2(), i = un2(l);
    return t = ka2(t), n.context === null ? n.context = t : n.pendingContext = t, n = Ae2(u, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = rn2(l, n, i), e !== null && (Te2(e, l, i, u), mr2(e, l, i)), i;
  }
  function Wr2(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function So2(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function pi2(e, n) {
    So2(e, n), (e = e.alternate) && So2(e, n);
  }
  function zc() {
    return null;
  }
  function mi2(e) {
    this._internalRoot = e;
  }
  function rl2(e) {
    this._internalRoot = e;
  }
  function vi2(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ll2(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Eo2() {
  }
  function Pc2(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var d = Wr2(i);
          u.call(d);
        };
      }
      var i = Sa2(n, r, e, 0, null, false, false, "", Eo2);
      return e._reactRootContainer = i, e[He2] = i.current, Ot2(e.nodeType === 8 ? e.parentNode : e), Nn2(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var d = Wr2(s);
        o.call(d);
      };
    }
    var s = di2(e, 0, false, null, null, false, false, "", Eo2);
    return e._reactRootContainer = s, e[He2] = s.current, Ot2(e.nodeType === 8 ? e.parentNode : e), Nn2(function() {
      tl2(n, s, t, r);
    }), s;
  }
  function ul2(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function() {
          var s = Wr2(i);
          o.call(s);
        };
      }
      tl2(n, i, e, l);
    } else i = Pc2(t, n, e, l, r);
    return Wr2(i);
  }
  function Ca2() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ca2);
    } catch (e) {
      console.error(e);
    }
  }
  var Co2, ve2, xo2, _o2, Na2, za2, me2, No2, Nt2, Be2, Ol2, Pa2, yi2, gi2, q2, Nu2, $e2, Gt2, Ln2, Mn2, Tu2, Fl2, zo2, Po2, Lu2, Il2, jl2, Mu2, Ye2, To2, wi2, V, al2, fl2, mt2, Jt2, Fo2, yt2, Fa2, Ia2, Kl2, Yl2, Qn2, Wn2, dl2, Xl2, it2, gt2, Er, Cr2, Gl2, Ua2, Ko2, Ni2, Ha2, Qa2, Q2, Wa2, Ru2, Yo2, xr2, $a2, Xo2, $r2, Oe2, Pe2, Ya2, Xa2, qt2, bt2, M2, Jo2, Fu2, qo2, bo2, es2, Jl2, er2, be2, en2, nn2, Tt2, Lt2, Ge2, ba2, $n2, Nr2, zr2, Je2, ju2, dr2, nt2, Uu2, Wt2, lf, ml2, vl2, at, Kr2, Li2, uf, of, sf, hl2, af, ff, cf, df, pf, Mi2, mf, vf, hf, gf, wf, kf, Di2, Sf, Ef, Cf, xf, _f, Nf, zf, Au2, wt2, Pf, ls2, Ri2, Oi2, Dn2, Mf, kt2, Dt2, ss2, yl2, gl2, Ii2, Le2, Af, Rn2, bl2, St2, eu2, On2, wl2, ds2, ps2, ms2, vs2, hs2, ys2, Bi2, Sl2, Bf, Hf, kl2, ht2, Qf, rr2, Wf, $f, nu2, tu2, lu2, Kf, $i2, Yf, tt2, Re2, It2, He2, uu2, Gf, Zf, iu2, In2, an2, te2, se2, En2, je2, Zr2, _l2, jn2, Un2, Dr2, Rr2, ye2, ge2, Cn2, Ue2, Ve2, pe2, de2, I2, ze2, qf, Jn2, Ns2, Or2, Fr2, Vn2, $u2, gn2, Xe2, Kt2, Fe2, jt2, Ut2, j2, Nl2, vr2, zl2, xn2, U2, $2, X2, Ur2, Et2, Vt2, bf, Vr2, rc2, lc2, uc2, qr2, ic2, oc2, oe2, vu2, la2, yu2, ua2, ia2, sr2, ne2, dc2, S2, po2, Z2, Ne2, vc2, Ar2, ui2, ke2, L2, G2, W2, J2, ce, Bn2, K2, Ht2, _n2, el2, ii2, xt2, ie2, oi2, et2, Ie2, Br2, Eu2, ln2, ar2, qe2, Hr2, _t2, Cu2, gr2, wr2, ga2, Ea2, Tc2, dt2, Lc, fr2, Dc2;
  var init_react_C2245jk2 = __esm({
    "assets/react-C2245jk2.js"() {
      init_motion_CBSrzxBb();
      Co2 = { exports: {} };
      ve2 = {};
      xo2 = { exports: {} };
      _o2 = {};
      (function(e) {
        function n(C2, z2) {
          var P2 = C2.length;
          C2.push(z2);
          e: for (; 0 < P2; ) {
            var H2 = P2 - 1 >>> 1, Y4 = C2[H2];
            if (0 < l(Y4, z2)) C2[H2] = z2, C2[P2] = Y4, P2 = H2;
            else break e;
          }
        }
        function t(C2) {
          return C2.length === 0 ? null : C2[0];
        }
        function r(C2) {
          if (C2.length === 0) return null;
          var z2 = C2[0], P2 = C2.pop();
          if (P2 !== z2) {
            C2[0] = P2;
            e: for (var H2 = 0, Y4 = C2.length, Yt3 = Y4 >>> 1; H2 < Yt3; ) {
              var pn2 = 2 * (H2 + 1) - 1, sl2 = C2[pn2], mn2 = pn2 + 1, Xt3 = C2[mn2];
              if (0 > l(sl2, P2)) mn2 < Y4 && 0 > l(Xt3, sl2) ? (C2[H2] = Xt3, C2[mn2] = P2, H2 = mn2) : (C2[H2] = sl2, C2[pn2] = P2, H2 = pn2);
              else if (mn2 < Y4 && 0 > l(Xt3, P2)) C2[H2] = Xt3, C2[mn2] = P2, H2 = mn2;
              else break e;
            }
          }
          return z2;
        }
        function l(C2, z2) {
          var P2 = C2.sortIndex - z2.sortIndex;
          return P2 !== 0 ? P2 : C2.id - z2.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var u = performance;
          e.unstable_now = function() {
            return u.now();
          };
        } else {
          var i = Date, o = i.now();
          e.unstable_now = function() {
            return i.now() - o;
          };
        }
        var s = [], d = [], v2 = 1, m = null, p = 3, g2 = false, w = false, k = false, F2 = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function c(C2) {
          for (var z2 = t(d); z2 !== null; ) {
            if (z2.callback === null) r(d);
            else if (z2.startTime <= C2) r(d), z2.sortIndex = z2.expirationTime, n(s, z2);
            else break;
            z2 = t(d);
          }
        }
        function h(C2) {
          if (k = false, c(C2), !w) if (t(s) !== null) w = true, il2(E3);
          else {
            var z2 = t(d);
            z2 !== null && ol2(h, z2.startTime - C2);
          }
        }
        function E3(C2, z2) {
          w = false, k && (k = false, f(N), N = -1), g2 = true;
          var P2 = p;
          try {
            for (c(z2), m = t(s); m !== null && (!(m.expirationTime > z2) || C2 && !Ce3()); ) {
              var H2 = m.callback;
              if (typeof H2 == "function") {
                m.callback = null, p = m.priorityLevel;
                var Y4 = H2(m.expirationTime <= z2);
                z2 = e.unstable_now(), typeof Y4 == "function" ? m.callback = Y4 : m === t(s) && r(s), c(z2);
              } else r(s);
              m = t(s);
            }
            if (m !== null) var Yt3 = true;
            else {
              var pn2 = t(d);
              pn2 !== null && ol2(h, pn2.startTime - z2), Yt3 = false;
            }
            return Yt3;
          } finally {
            m = null, p = P2, g2 = false;
          }
        }
        var x = false, _3 = null, N = -1, B = 5, T2 = -1;
        function Ce3() {
          return !(e.unstable_now() - T2 < B);
        }
        function rt4() {
          if (_3 !== null) {
            var C2 = e.unstable_now();
            T2 = C2;
            var z2 = true;
            try {
              z2 = _3(true, C2);
            } finally {
              z2 ? lt4() : (x = false, _3 = null);
            }
          } else x = false;
        }
        var lt4;
        if (typeof a == "function") lt4 = function() {
          a(rt4);
        };
        else if (typeof MessageChannel < "u") {
          var hi2 = new MessageChannel(), xa3 = hi2.port2;
          hi2.port1.onmessage = rt4, lt4 = function() {
            xa3.postMessage(null);
          };
        } else lt4 = function() {
          F2(rt4, 0);
        };
        function il2(C2) {
          _3 = C2, x || (x = true, lt4());
        }
        function ol2(C2, z2) {
          N = F2(function() {
            C2(e.unstable_now());
          }, z2);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C2) {
          C2.callback = null;
        }, e.unstable_continueExecution = function() {
          w || g2 || (w = true, il2(E3));
        }, e.unstable_forceFrameRate = function(C2) {
          0 > C2 || 125 < C2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < C2 ? Math.floor(1e3 / C2) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
          return p;
        }, e.unstable_getFirstCallbackNode = function() {
          return t(s);
        }, e.unstable_next = function(C2) {
          switch (p) {
            case 1:
            case 2:
            case 3:
              var z2 = 3;
              break;
            default:
              z2 = p;
          }
          var P2 = p;
          p = z2;
          try {
            return C2();
          } finally {
            p = P2;
          }
        }, e.unstable_pauseExecution = function() {
        }, e.unstable_requestPaint = function() {
        }, e.unstable_runWithPriority = function(C2, z2) {
          switch (C2) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              C2 = 3;
          }
          var P2 = p;
          p = C2;
          try {
            return z2();
          } finally {
            p = P2;
          }
        }, e.unstable_scheduleCallback = function(C2, z2, P2) {
          var H2 = e.unstable_now();
          switch (typeof P2 == "object" && P2 !== null ? (P2 = P2.delay, P2 = typeof P2 == "number" && 0 < P2 ? H2 + P2 : H2) : P2 = H2, C2) {
            case 1:
              var Y4 = -1;
              break;
            case 2:
              Y4 = 250;
              break;
            case 5:
              Y4 = 1073741823;
              break;
            case 4:
              Y4 = 1e4;
              break;
            default:
              Y4 = 5e3;
          }
          return Y4 = P2 + Y4, C2 = { id: v2++, callback: z2, priorityLevel: C2, startTime: P2, expirationTime: Y4, sortIndex: -1 }, P2 > H2 ? (C2.sortIndex = P2, n(d, C2), t(s) === null && C2 === t(d) && (k ? (f(N), N = -1) : k = true, ol2(h, P2 - H2))) : (C2.sortIndex = Y4, n(s, C2), w || g2 || (w = true, il2(E3))), C2;
        }, e.unstable_shouldYield = Ce3, e.unstable_wrapCallback = function(C2) {
          var z2 = p;
          return function() {
            var P2 = p;
            p = z2;
            try {
              return C2.apply(this, arguments);
            } finally {
              p = P2;
            }
          };
        };
      })(_o2);
      xo2.exports = _o2;
      Na2 = xo2.exports;
      za2 = v;
      me2 = Na2;
      No2 = /* @__PURE__ */ new Set();
      Nt2 = {};
      Be2 = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u");
      Ol2 = Object.prototype.hasOwnProperty;
      Pa2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      yi2 = {};
      gi2 = {};
      q2 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        q2[e] = new ue(e, 0, false, e, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var n = e[0];
        q2[n] = new ue(n, 1, false, e[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        q2[e] = new ue(e, 2, false, e.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        q2[e] = new ue(e, 2, false, e, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        q2[e] = new ue(e, 3, false, e.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        q2[e] = new ue(e, 3, true, e, null, false, false);
      });
      ["capture", "download"].forEach(function(e) {
        q2[e] = new ue(e, 4, false, e, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(e) {
        q2[e] = new ue(e, 6, false, e, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(e) {
        q2[e] = new ue(e, 5, false, e.toLowerCase(), null, false, false);
      });
      Nu2 = /[\-:]([a-z])/g;
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var n = e.replace(Nu2, zu2);
        q2[n] = new ue(n, 1, false, e, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var n = e.replace(Nu2, zu2);
        q2[n] = new ue(n, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var n = e.replace(Nu2, zu2);
        q2[n] = new ue(n, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(e) {
        q2[e] = new ue(e, 1, false, e.toLowerCase(), null, false, false);
      });
      q2.xlinkHref = new ue("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(e) {
        q2[e] = new ue(e, 1, false, e.toLowerCase(), null, true, true);
      });
      $e2 = za2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      Gt2 = /* @__PURE__ */ Symbol.for("react.element");
      Ln2 = /* @__PURE__ */ Symbol.for("react.portal");
      Mn2 = /* @__PURE__ */ Symbol.for("react.fragment");
      Tu2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      Fl2 = /* @__PURE__ */ Symbol.for("react.profiler");
      zo2 = /* @__PURE__ */ Symbol.for("react.provider");
      Po2 = /* @__PURE__ */ Symbol.for("react.context");
      Lu2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      Il2 = /* @__PURE__ */ Symbol.for("react.suspense");
      jl2 = /* @__PURE__ */ Symbol.for("react.suspense_list");
      Mu2 = /* @__PURE__ */ Symbol.for("react.memo");
      Ye2 = /* @__PURE__ */ Symbol.for("react.lazy");
      To2 = /* @__PURE__ */ Symbol.for("react.offscreen");
      wi2 = Symbol.iterator;
      V = Object.assign;
      fl2 = false;
      mt2 = Array.isArray;
      Fo2 = (function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function() {
            return e(n, t, r, l);
          });
        } : e;
      })(function(e, n) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
        else {
          for (Jt2 = Jt2 || document.createElement("div"), Jt2.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Jt2.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
          for (; n.firstChild; ) e.appendChild(n.firstChild);
        }
      });
      yt2 = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true };
      Fa2 = ["Webkit", "ms", "Moz", "O"];
      Object.keys(yt2).forEach(function(e) {
        Fa2.forEach(function(n) {
          n = n + e.charAt(0).toUpperCase() + e.substring(1), yt2[n] = yt2[e];
        });
      });
      Ia2 = V({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      Kl2 = null;
      Yl2 = null;
      Qn2 = null;
      Wn2 = null;
      dl2 = false;
      Xl2 = false;
      if (Be2) try {
        it2 = {};
        Object.defineProperty(it2, "passive", { get: function() {
          Xl2 = true;
        } }), window.addEventListener("test", it2, it2), window.removeEventListener("test", it2, it2);
      } catch {
        Xl2 = false;
      }
      gt2 = false;
      Er = null;
      Cr2 = false;
      Gl2 = null;
      Ua2 = { onError: function(e) {
        gt2 = true, Er = e;
      } };
      Ko2 = me2.unstable_scheduleCallback;
      Ni2 = me2.unstable_cancelCallback;
      Ha2 = me2.unstable_shouldYield;
      Qa2 = me2.unstable_requestPaint;
      Q2 = me2.unstable_now;
      Wa2 = me2.unstable_getCurrentPriorityLevel;
      Ru2 = me2.unstable_ImmediatePriority;
      Yo2 = me2.unstable_UserBlockingPriority;
      xr2 = me2.unstable_NormalPriority;
      $a2 = me2.unstable_LowPriority;
      Xo2 = me2.unstable_IdlePriority;
      $r2 = null;
      Oe2 = null;
      Pe2 = Math.clz32 ? Math.clz32 : Ga2;
      Ya2 = Math.log;
      Xa2 = Math.LN2;
      qt2 = 64;
      bt2 = 4194304;
      M2 = 0;
      Jl2 = false;
      er2 = [];
      be2 = null;
      en2 = null;
      nn2 = null;
      Tt2 = /* @__PURE__ */ new Map();
      Lt2 = /* @__PURE__ */ new Map();
      Ge2 = [];
      ba2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      $n2 = $e2.ReactCurrentBatchConfig;
      Nr2 = true;
      zr2 = null;
      Je2 = null;
      ju2 = null;
      dr2 = null;
      nt2 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
        return e.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      Uu2 = he2(nt2);
      Wt2 = V({}, nt2, { view: 0, detail: 0 });
      lf = he2(Wt2);
      Kr2 = V({}, Wt2, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vu2, button: 0, buttons: 0, relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      }, movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== at && (at && e.type === "mousemove" ? (ml2 = e.screenX - at.screenX, vl2 = e.screenY - at.screenY) : vl2 = ml2 = 0, at = e), ml2);
      }, movementY: function(e) {
        return "movementY" in e ? e.movementY : vl2;
      } });
      Li2 = he2(Kr2);
      uf = V({}, Kr2, { dataTransfer: 0 });
      of = he2(uf);
      sf = V({}, Wt2, { relatedTarget: 0 });
      hl2 = he2(sf);
      af = V({}, nt2, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      ff = he2(af);
      cf = V({}, nt2, { clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      } });
      df = he2(cf);
      pf = V({}, nt2, { data: 0 });
      Mi2 = he2(pf);
      mf = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" };
      vf = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" };
      hf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      gf = V({}, Wt2, { key: function(e) {
        if (e.key) {
          var n = mf[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress" ? (e = pr2(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vf[e.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vu2, charCode: function(e) {
        return e.type === "keypress" ? pr2(e) : 0;
      }, keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }, which: function(e) {
        return e.type === "keypress" ? pr2(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      } });
      wf = he2(gf);
      kf = V({}, Kr2, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      Di2 = he2(kf);
      Sf = V({}, Wt2, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vu2 });
      Ef = he2(Sf);
      Cf = V({}, nt2, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      xf = he2(Cf);
      _f = V({}, Kr2, { deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      }, deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      }, deltaZ: 0, deltaMode: 0 });
      Nf = he2(_f);
      zf = [9, 13, 27, 32];
      Au2 = Be2 && "CompositionEvent" in window;
      wt2 = null;
      Be2 && "documentMode" in document && (wt2 = document.documentMode);
      Pf = Be2 && "TextEvent" in window && !wt2;
      ls2 = Be2 && (!Au2 || wt2 && 8 < wt2 && 11 >= wt2);
      Ri2 = " ";
      Oi2 = false;
      Dn2 = false;
      Mf = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      kt2 = null;
      Dt2 = null;
      ss2 = false;
      if (Be2) {
        if (Be2) {
          gl2 = "oninput" in document;
          if (!gl2) {
            Ii2 = document.createElement("div");
            Ii2.setAttribute("oninput", "return;"), gl2 = typeof Ii2.oninput == "function";
          }
          yl2 = gl2;
        } else yl2 = false;
        ss2 = yl2 && (!document.documentMode || 9 < document.documentMode);
      }
      Le2 = typeof Object.is == "function" ? Object.is : Uf;
      Af = Be2 && "documentMode" in document && 11 >= document.documentMode;
      Rn2 = null;
      bl2 = null;
      St2 = null;
      eu2 = false;
      On2 = { animationend: tr2("Animation", "AnimationEnd"), animationiteration: tr2("Animation", "AnimationIteration"), animationstart: tr2("Animation", "AnimationStart"), transitionend: tr2("Transition", "TransitionEnd") };
      wl2 = {};
      ds2 = {};
      Be2 && (ds2 = document.createElement("div").style, "AnimationEvent" in window || (delete On2.animationend.animation, delete On2.animationiteration.animation, delete On2.animationstart.animation), "TransitionEvent" in window || delete On2.transitionend.transition);
      ps2 = Xr2("animationend");
      ms2 = Xr2("animationiteration");
      vs2 = Xr2("animationstart");
      hs2 = Xr2("transitionend");
      ys2 = /* @__PURE__ */ new Map();
      Bi2 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      for (kl2 = 0; kl2 < Bi2.length; kl2++) {
        Sl2 = Bi2[kl2], Bf = Sl2.toLowerCase(), Hf = Sl2[0].toUpperCase() + Sl2.slice(1);
        fn2(Bf, "on" + Hf);
      }
      fn2(ps2, "onAnimationEnd");
      fn2(ms2, "onAnimationIteration");
      fn2(vs2, "onAnimationStart");
      fn2("dblclick", "onDoubleClick");
      fn2("focusin", "onFocus");
      fn2("focusout", "onBlur");
      fn2(hs2, "onTransitionEnd");
      Xn2("onMouseEnter", ["mouseout", "mouseover"]);
      Xn2("onMouseLeave", ["mouseout", "mouseover"]);
      Xn2("onPointerEnter", ["pointerout", "pointerover"]);
      Xn2("onPointerLeave", ["pointerout", "pointerover"]);
      zn2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      zn2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      zn2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      zn2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      zn2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      zn2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      ht2 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      Qf = new Set("cancel close invalid load scroll toggle".split(" ").concat(ht2));
      rr2 = "_reactListening" + Math.random().toString(36).slice(2);
      Wf = /\r\n?/g;
      $f = /\u0000|\uFFFD/g;
      nu2 = null;
      tu2 = null;
      lu2 = typeof setTimeout == "function" ? setTimeout : void 0;
      Kf = typeof clearTimeout == "function" ? clearTimeout : void 0;
      $i2 = typeof Promise == "function" ? Promise : void 0;
      Yf = typeof queueMicrotask == "function" ? queueMicrotask : typeof $i2 < "u" ? function(e) {
        return $i2.resolve(null).then(e).catch(Xf);
      } : lu2;
      tt2 = Math.random().toString(36).slice(2);
      Re2 = "__reactFiber$" + tt2;
      It2 = "__reactProps$" + tt2;
      He2 = "__reactContainer$" + tt2;
      uu2 = "__reactEvents$" + tt2;
      Gf = "__reactListeners$" + tt2;
      Zf = "__reactHandles$" + tt2;
      iu2 = [];
      In2 = -1;
      an2 = {};
      te2 = cn2(an2);
      se2 = cn2(false);
      En2 = an2;
      je2 = null;
      Zr2 = false;
      _l2 = false;
      jn2 = [];
      Un2 = 0;
      Dr2 = null;
      Rr2 = 0;
      ye2 = [];
      ge2 = 0;
      Cn2 = null;
      Ue2 = 1;
      Ve2 = "";
      pe2 = null;
      de2 = null;
      I2 = false;
      ze2 = null;
      qf = $e2.ReactCurrentBatchConfig;
      Jn2 = _s2(true);
      Ns2 = _s2(false);
      Or2 = cn2(null);
      Fr2 = null;
      Vn2 = null;
      $u2 = null;
      gn2 = null;
      Xe2 = false;
      Kt2 = {};
      Fe2 = cn2(Kt2);
      jt2 = cn2(Kt2);
      Ut2 = cn2(Kt2);
      j2 = cn2(0);
      Nl2 = [];
      vr2 = $e2.ReactCurrentDispatcher;
      zl2 = $e2.ReactCurrentBatchConfig;
      xn2 = 0;
      U2 = null;
      $2 = null;
      X2 = null;
      Ur2 = false;
      Et2 = false;
      Vt2 = 0;
      bf = 0;
      Vr2 = { readContext: Se2, useCallback: b, useContext: b, useEffect: b, useImperativeHandle: b, useInsertionEffect: b, useLayoutEffect: b, useMemo: b, useReducer: b, useRef: b, useState: b, useDebugValue: b, useDeferredValue: b, useTransition: b, useMutableSource: b, useSyncExternalStore: b, useId: b, unstable_isNewReconciler: false };
      rc2 = { readContext: Se2, useCallback: function(e, n) {
        return De2().memoizedState = [e, n === void 0 ? null : n], e;
      }, useContext: Se2, useEffect: no2, useImperativeHandle: function(e, n, t) {
        return t = t != null ? t.concat([e]) : null, hr2(4194308, 4, As2.bind(null, n, e), t);
      }, useLayoutEffect: function(e, n) {
        return hr2(4194308, 4, e, n);
      }, useInsertionEffect: function(e, n) {
        return hr2(4, 2, e, n);
      }, useMemo: function(e, n) {
        var t = De2();
        return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
      }, useReducer: function(e, n, t) {
        var r = De2();
        return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = nc2.bind(null, U2, e), [r.memoizedState, e];
      }, useRef: function(e) {
        var n = De2();
        return e = { current: e }, n.memoizedState = e;
      }, useState: eo2, useDebugValue: ri2, useDeferredValue: function(e) {
        return De2().memoizedState = e;
      }, useTransition: function() {
        var e = eo2(false), n = e[0];
        return e = ec2.bind(null, e[1]), De2().memoizedState = e, [n, e];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(e, n, t) {
        var r = U2, l = De2();
        if (I2) {
          if (t === void 0) throw Error(y(407));
          t = t();
        } else {
          if (t = n(), G2 === null) throw Error(y(349));
          xn2 & 30 || Ds2(r, n, t);
        }
        l.memoizedState = t;
        var u = { value: t, getSnapshot: n };
        return l.queue = u, no2(Os2.bind(null, r, u, e), [e]), r.flags |= 2048, Bt2(9, Rs2.bind(null, r, u, t, n), void 0, null), t;
      }, useId: function() {
        var e = De2(), n = G2.identifierPrefix;
        if (I2) {
          var t = Ve2, r = Ue2;
          t = (r & ~(1 << 32 - Pe2(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Vt2++, 0 < t && (n += "H" + t.toString(32)), n += ":";
        } else t = bf++, n = ":" + n + "r" + t.toString(32) + ":";
        return e.memoizedState = n;
      }, unstable_isNewReconciler: false };
      lc2 = { readContext: Se2, useCallback: Hs2, useContext: Se2, useEffect: ti2, useImperativeHandle: Bs2, useInsertionEffect: Us2, useLayoutEffect: Vs2, useMemo: Qs2, useReducer: Pl2, useRef: js2, useState: function() {
        return Pl2(At2);
      }, useDebugValue: ri2, useDeferredValue: function(e) {
        var n = Ee2();
        return Ws2(n, $2.memoizedState, e);
      }, useTransition: function() {
        var e = Pl2(At2)[0], n = Ee2().memoizedState;
        return [e, n];
      }, useMutableSource: Ls2, useSyncExternalStore: Ms2, useId: $s2, unstable_isNewReconciler: false };
      uc2 = { readContext: Se2, useCallback: Hs2, useContext: Se2, useEffect: ti2, useImperativeHandle: Bs2, useInsertionEffect: Us2, useLayoutEffect: Vs2, useMemo: Qs2, useReducer: Tl2, useRef: js2, useState: function() {
        return Tl2(At2);
      }, useDebugValue: ri2, useDeferredValue: function(e) {
        var n = Ee2();
        return $2 === null ? n.memoizedState = e : Ws2(n, $2.memoizedState, e);
      }, useTransition: function() {
        var e = Tl2(At2)[0], n = Ee2().memoizedState;
        return [e, n];
      }, useMutableSource: Ls2, useSyncExternalStore: Ms2, useId: $s2, unstable_isNewReconciler: false };
      qr2 = { isMounted: function(e) {
        return (e = e._reactInternals) ? Pn2(e) === e : false;
      }, enqueueSetState: function(e, n, t) {
        e = e._reactInternals;
        var r = le2(), l = un2(e), u = Ae2(r, l);
        u.payload = n, t != null && (u.callback = t), n = rn2(e, u, l), n !== null && (Te2(n, e, l, r), mr2(n, e, l));
      }, enqueueReplaceState: function(e, n, t) {
        e = e._reactInternals;
        var r = le2(), l = un2(e), u = Ae2(r, l);
        u.tag = 1, u.payload = n, t != null && (u.callback = t), n = rn2(e, u, l), n !== null && (Te2(n, e, l, r), mr2(n, e, l));
      }, enqueueForceUpdate: function(e, n) {
        e = e._reactInternals;
        var t = le2(), r = un2(e), l = Ae2(t, r);
        l.tag = 2, n != null && (l.callback = n), n = rn2(e, l, r), n !== null && (Te2(n, e, r, t), mr2(n, e, r));
      } };
      ic2 = typeof WeakMap == "function" ? WeakMap : Map;
      oc2 = $e2.ReactCurrentOwner;
      oe2 = false;
      vu2 = { dehydrated: null, treeContext: null, retryLane: 0 };
      la2 = function(e, n) {
        for (var t = n.child; t !== null; ) {
          if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
          else if (t.tag !== 4 && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === n) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) return;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      };
      yu2 = function() {
      };
      ua2 = function(e, n, t, r) {
        var l = e.memoizedProps;
        if (l !== r) {
          e = n.stateNode, wn2(Fe2.current);
          var u = null;
          switch (t) {
            case "input":
              l = Vl2(e, l), r = Vl2(e, r), u = [];
              break;
            case "select":
              l = V({}, l, { value: void 0 }), r = V({}, r, { value: void 0 }), u = [];
              break;
            case "textarea":
              l = Hl2(e, l), r = Hl2(e, r), u = [];
              break;
            default:
              typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Tr2);
          }
          Wl2(t, r);
          var i;
          t = null;
          for (d in l) if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
            var o = l[d];
            for (i in o) o.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
          } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Nt2.hasOwnProperty(d) ? u || (u = []) : (u = u || []).push(d, null));
          for (d in r) {
            var s = r[d];
            if (o = l != null ? l[d] : void 0, r.hasOwnProperty(d) && s !== o && (s != null || o != null)) if (d === "style") if (o) {
              for (i in o) !o.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
              for (i in s) s.hasOwnProperty(i) && o[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
            } else t || (u || (u = []), u.push(d, t)), t = s;
            else d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, o = o ? o.__html : void 0, s != null && o !== s && (u = u || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Nt2.hasOwnProperty(d) ? (s != null && d === "onScroll" && R("scroll", e), u || o === s || (u = [])) : (u = u || []).push(d, s));
          }
          t && (u = u || []).push("style", t);
          var d = u;
          (n.updateQueue = d) && (n.flags |= 4);
        }
      };
      ia2 = function(e, n, t, r) {
        t !== r && (n.flags |= 4);
      };
      sr2 = false;
      ne2 = false;
      dc2 = typeof WeakSet == "function" ? WeakSet : Set;
      S2 = null;
      po2 = false;
      Z2 = null;
      Ne2 = false;
      vc2 = Math.ceil;
      Ar2 = $e2.ReactCurrentDispatcher;
      ui2 = $e2.ReactCurrentOwner;
      ke2 = $e2.ReactCurrentBatchConfig;
      L2 = 0;
      G2 = null;
      W2 = null;
      J2 = 0;
      ce = 0;
      Bn2 = cn2(0);
      K2 = 0;
      Ht2 = null;
      _n2 = 0;
      el2 = 0;
      ii2 = 0;
      xt2 = null;
      ie2 = null;
      oi2 = 0;
      et2 = 1 / 0;
      Ie2 = null;
      Br2 = false;
      Eu2 = null;
      ln2 = null;
      ar2 = false;
      qe2 = null;
      Hr2 = 0;
      _t2 = 0;
      Cu2 = null;
      gr2 = -1;
      wr2 = 0;
      ga2 = function(e, n, t) {
        if (e !== null) if (e.memoizedProps !== n.pendingProps || se2.current) oe2 = true;
        else {
          if (!(e.lanes & t) && !(n.flags & 128)) return oe2 = false, ac2(e, n, t);
          oe2 = !!(e.flags & 131072);
        }
        else oe2 = false, I2 && n.flags & 1048576 && Es2(n, Rr2, n.index);
        switch (n.lanes = 0, n.tag) {
          case 2:
            var r = n.type;
            yr2(e, n), e = n.pendingProps;
            var l = Gn2(n, te2.current);
            Kn2(n, t), l = ei2(null, n, r, e, l, t);
            var u = ni2();
            return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, ae2(r) ? (u = true, Mr2(n)) : u = false, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Gu2(n), l.updater = qr2, n.stateNode = l, l._reactInternals = n, cu2(n, r, e, t), n = mu2(null, n, r, true, u, t)) : (n.tag = 0, I2 && u && Hu2(n), re2(null, n, l, t), n = n.child), n;
          case 16:
            r = n.elementType;
            e: {
              switch (yr2(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = xc2(r), e = _e2(r, e), l) {
                case 0:
                  n = pu2(null, n, r, e, t);
                  break e;
                case 1:
                  n = ao2(null, n, r, e, t);
                  break e;
                case 11:
                  n = oo2(null, n, r, e, t);
                  break e;
                case 14:
                  n = so2(null, n, r, _e2(r.type, e), t);
                  break e;
              }
              throw Error(y(306, r, ""));
            }
            return n;
          case 0:
            return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : _e2(r, l), pu2(e, n, r, l, t);
          case 1:
            return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : _e2(r, l), ao2(e, n, r, l, t);
          case 3:
            e: {
              if (na2(n), e === null) throw Error(y(387));
              r = n.pendingProps, u = n.memoizedState, l = u.element, Ps2(e, n), Ir2(n, r, null, t);
              var i = n.memoizedState;
              if (r = i.element, u.isDehydrated) if (u = { element: r, isDehydrated: false, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = u, n.memoizedState = u, n.flags & 256) {
                l = bn(Error(y(423)), n), n = fo2(e, n, r, t, l);
                break e;
              } else if (r !== l) {
                l = bn(Error(y(424)), n), n = fo2(e, n, r, t, l);
                break e;
              } else for (de2 = tn2(n.stateNode.containerInfo.firstChild), pe2 = n, I2 = true, ze2 = null, t = Ns2(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
              else {
                if (Zn2(), r === l) {
                  n = We2(e, n, t);
                  break e;
                }
                re2(e, n, r, t);
              }
              n = n.child;
            }
            return n;
          case 5:
            return Ts2(n), e === null && su2(n), r = n.type, l = n.pendingProps, u = e !== null ? e.memoizedProps : null, i = l.children, ru2(r, l) ? i = null : u !== null && ru2(r, u) && (n.flags |= 32), ea2(e, n), re2(e, n, i, t), n.child;
          case 6:
            return e === null && su2(n), null;
          case 13:
            return ta2(e, n, t);
          case 4:
            return Zu2(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = Jn2(n, null, r, t) : re2(e, n, r, t), n.child;
          case 11:
            return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : _e2(r, l), oo2(e, n, r, l, t);
          case 7:
            return re2(e, n, n.pendingProps, t), n.child;
          case 8:
            return re2(e, n, n.pendingProps.children, t), n.child;
          case 12:
            return re2(e, n, n.pendingProps.children, t), n.child;
          case 10:
            e: {
              if (r = n.type._context, l = n.pendingProps, u = n.memoizedProps, i = l.value, D2(Or2, r._currentValue), r._currentValue = i, u !== null) if (Le2(u.value, i)) {
                if (u.children === l.children && !se2.current) {
                  n = We2(e, n, t);
                  break e;
                }
              } else for (u = n.child, u !== null && (u.return = n); u !== null; ) {
                var o = u.dependencies;
                if (o !== null) {
                  i = u.child;
                  for (var s = o.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        s = Ae2(-1, t & -t), s.tag = 2;
                        var d = u.updateQueue;
                        if (d !== null) {
                          d = d.shared;
                          var v2 = d.pending;
                          v2 === null ? s.next = s : (s.next = v2.next, v2.next = s), d.pending = s;
                        }
                      }
                      u.lanes |= t, s = u.alternate, s !== null && (s.lanes |= t), au2(u.return, t, n), o.lanes |= t;
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10) i = u.type === n.type ? null : u.child;
                else if (u.tag === 18) {
                  if (i = u.return, i === null) throw Error(y(341));
                  i.lanes |= t, o = i.alternate, o !== null && (o.lanes |= t), au2(i, t, n), i = u.sibling;
                } else i = u.child;
                if (i !== null) i.return = u;
                else for (i = u; i !== null; ) {
                  if (i === n) {
                    i = null;
                    break;
                  }
                  if (u = i.sibling, u !== null) {
                    u.return = i.return, i = u;
                    break;
                  }
                  i = i.return;
                }
                u = i;
              }
              re2(e, n, l.children, t), n = n.child;
            }
            return n;
          case 9:
            return l = n.type, r = n.pendingProps.children, Kn2(n, t), l = Se2(l), r = r(l), n.flags |= 1, re2(e, n, r, t), n.child;
          case 14:
            return r = n.type, l = _e2(r, n.pendingProps), l = _e2(r.type, l), so2(e, n, r, l, t);
          case 15:
            return qs2(e, n, n.type, n.pendingProps, t);
          case 17:
            return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : _e2(r, l), yr2(e, n), n.tag = 1, ae2(r) ? (e = true, Mr2(n)) : e = false, Kn2(n, t), Gs2(n, r, l), cu2(n, r, l, t), mu2(null, n, r, true, e, t);
          case 19:
            return ra2(e, n, t);
          case 22:
            return bs2(e, n, t);
        }
        throw Error(y(156, n.tag));
      };
      Ea2 = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
      };
      rl2.prototype.render = mi2.prototype.render = function(e) {
        var n = this._internalRoot;
        if (n === null) throw Error(y(409));
        tl2(e, n, null, null);
      };
      rl2.prototype.unmount = mi2.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          Nn2(function() {
            tl2(null, e, null, null);
          }), n[He2] = null;
        }
      };
      rl2.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
          var n = bo2();
          e = { blockedOn: null, target: e, priority: n };
          for (var t = 0; t < Ge2.length && n !== 0 && n < Ge2[t].priority; t++) ;
          Ge2.splice(t, 0, e), t === 0 && ns2(e);
        }
      };
      Jo2 = function(e) {
        switch (e.tag) {
          case 3:
            var n = e.stateNode;
            if (n.current.memoizedState.isDehydrated) {
              var t = vt2(n.pendingLanes);
              t !== 0 && (Ou2(n, t | 1), fe2(n, Q2()), !(L2 & 6) && (et2 = Q2() + 500, dn2()));
            }
            break;
          case 13:
            Nn2(function() {
              var r = Qe2(e, 1);
              if (r !== null) {
                var l = le2();
                Te2(r, e, 1, l);
              }
            }), pi2(e, 1);
        }
      };
      Fu2 = function(e) {
        if (e.tag === 13) {
          var n = Qe2(e, 134217728);
          if (n !== null) {
            var t = le2();
            Te2(n, e, 134217728, t);
          }
          pi2(e, 134217728);
        }
      };
      qo2 = function(e) {
        if (e.tag === 13) {
          var n = un2(e), t = Qe2(e, n);
          if (t !== null) {
            var r = le2();
            Te2(t, e, n, r);
          }
          pi2(e, n);
        }
      };
      bo2 = function() {
        return M2;
      };
      es2 = function(e, n) {
        var t = M2;
        try {
          return M2 = e, n();
        } finally {
          M2 = t;
        }
      };
      Yl2 = function(e, n, t) {
        switch (n) {
          case "input":
            if (Al2(e, t), n = t.name, t.type === "radio" && n != null) {
              for (t = e; t.parentNode; ) t = t.parentNode;
              for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
                var r = t[n];
                if (r !== e && r.form === e.form) {
                  var l = Gr2(r);
                  if (!l) throw Error(y(90));
                  Mo2(r), Al2(r, l);
                }
              }
            }
            break;
          case "textarea":
            Ro2(e, t);
            break;
          case "select":
            n = t.value, n != null && Hn2(e, !!t.multiple, n, false);
        }
      };
      Ao2 = si2;
      Bo2 = Nn2;
      Tc2 = { usingClientEntryPoint: false, Events: [$t2, Fn2, Gr2, Uo2, Vo2, si2] };
      dt2 = { findFiberByHostInstance: yn2, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      Lc = { bundleType: dt2.bundleType, version: dt2.version, rendererPackageName: dt2.rendererPackageName, rendererConfig: dt2.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $e2.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
        return e = Wo2(e), e === null ? null : e.stateNode;
      }, findFiberByHostInstance: dt2.findFiberByHostInstance || zc, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        fr2 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!fr2.isDisabled && fr2.supportsFiber) try {
          $r2 = fr2.inject(Lc), Oe2 = fr2;
        } catch {
        }
      }
      ve2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tc2;
      ve2.createPortal = function(e, n) {
        var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!vi2(n)) throw Error(y(200));
        return Nc(e, n, null, t);
      };
      ve2.createRoot = function(e, n) {
        if (!vi2(e)) throw Error(y(299));
        var t = false, r = "", l = Ea2;
        return n != null && (n.unstable_strictMode === true && (t = true), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = di2(e, 1, false, null, null, t, false, r, l), e[He2] = n.current, Ot2(e.nodeType === 8 ? e.parentNode : e), new mi2(n);
      };
      ve2.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var n = e._reactInternals;
        if (n === void 0) throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
        return e = Wo2(n), e = e === null ? null : e.stateNode, e;
      };
      ve2.flushSync = function(e) {
        return Nn2(e);
      };
      ve2.hydrate = function(e, n, t) {
        if (!ll2(n)) throw Error(y(200));
        return ul2(null, e, n, true, t);
      };
      ve2.hydrateRoot = function(e, n, t) {
        if (!vi2(e)) throw Error(y(405));
        var r = t != null && t.hydratedSources || null, l = false, u = "", i = Ea2;
        if (t != null && (t.unstable_strictMode === true && (l = true), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = Sa2(n, null, e, 1, t ?? null, l, false, u, i), e[He2] = n.current, Ot2(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(t, l);
        return new rl2(n);
      };
      ve2.render = function(e, n, t) {
        if (!ll2(n)) throw Error(y(200));
        return ul2(null, e, n, false, t);
      };
      ve2.unmountComponentAtNode = function(e) {
        if (!ll2(e)) throw Error(y(40));
        return e._reactRootContainer ? (Nn2(function() {
          ul2(null, null, e, false, function() {
            e._reactRootContainer = null, e[He2] = null;
          });
        }), true) : false;
      };
      ve2.unstable_batchedUpdates = si2;
      ve2.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
        if (!ll2(t)) throw Error(y(200));
        if (e == null || e._reactInternals === void 0) throw Error(y(38));
        return ul2(e, n, t, false, r);
      };
      ve2.version = "18.3.1-next-f1338f8080-20240426";
      Ca2(), Co2.exports = ve2;
      Dc2 = Co2.exports;
    }
  });

  // assets/AdminApp-DEDpPrVC.js
  var AdminApp_DEDpPrVC_exports = {};
  __export(AdminApp_DEDpPrVC_exports, {
    default: () => pt3
  });
  function K4() {
    try {
      return localStorage.getItem(J3);
    } catch {
      return null;
    }
  }
  function Q3(t) {
    try {
      t ? localStorage.setItem(J3, t) : localStorage.removeItem(J3);
    } catch {
    }
  }
  async function P(t, a = {}) {
    const r = new Headers(a.headers), d = K4();
    d && r.set("Authorization", `Bearer ${d}`);
    let u;
    try {
      u = await fetch(t, { ...a, headers: r });
    } catch {
      throw new E2(0, "\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u786E\u8BA4\u540E\u53F0\u670D\u52A1\u5DF2\u542F\u52A8");
    }
    if (u.status === 401) throw Q3(null), new E2(401, "\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55");
    if (!u.ok) {
      let c = `\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${u.status}\uFF09`;
      try {
        const h = await u.json();
        typeof (h == null ? void 0 : h.detail) == "string" && (c = h.detail);
      } catch {
      }
      throw new E2(u.status, c);
    }
    return u.json();
  }
  async function Pe3(t) {
    const a = await P("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: t }) });
    Q3(a.token);
  }
  function Te3() {
    Q3(null);
  }
  async function Ae3() {
    return (await P("/api/admin/terms")).terms;
  }
  async function Be3() {
    return (await P("/api/admin/logs")).lines;
  }
  async function Re3(t, a, r) {
    const d = new FormData();
    return d.append("file", t), d.append("year", a), d.append("semester", r), P("/api/admin/upload", { method: "POST", body: d });
  }
  async function Le3(t) {
    await P(`/api/admin/terms/${encodeURIComponent(t)}`, { method: "DELETE" });
  }
  async function De3() {
    return P("/api/admin/rebuild", { method: "POST" });
  }
  async function Oe3(t, a) {
    await P("/api/admin/password", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ oldPassword: t, newPassword: a }) });
  }
  async function $e3(t) {
    return (await P("/api/admin/site-config", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ branding: { siteName: t.siteName } }) })).config;
  }
  async function ce2(t, a) {
    const r = new FormData();
    return r.append("file", a), (await P(t, { method: "POST", body: r })).config;
  }
  function Ue3(t) {
    return ce2("/api/admin/site-config/branding-logo", t);
  }
  function Fe3(t) {
    return ce2("/api/admin/site-config/branding-favicon", t);
  }
  async function Me3(t) {
    return (await P(t === "logo" ? "/api/admin/site-config/branding-logo" : "/api/admin/site-config/branding-favicon", { method: "DELETE" })).config;
  }
  async function D3() {
    return P("/api/admin/site-config");
  }
  async function ze3(t, a) {
    return (await P("/api/admin/site-config", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ watermark: t, ad: a }) })).config;
  }
  async function U3(t) {
    return (await P("/api/admin/site-config", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) })).config;
  }
  async function We3(t) {
    return U3({ nav: t });
  }
  async function _e3(t) {
    return U3({ banner: t });
  }
  async function Ge3(t) {
    return U3({ popup: t });
  }
  async function Je3(t) {
    return U3({ announcement: t });
  }
  async function de3(t, a) {
    const r = new FormData();
    return r.append("file", a), (await P(t, { method: "POST", body: r })).config;
  }
  async function oe3(t) {
    return (await P(t, { method: "DELETE" })).config;
  }
  function qe3(t) {
    return de3("/api/admin/site-config/banner-image", t);
  }
  function He3() {
    return oe3("/api/admin/site-config/banner-image");
  }
  function Ke3(t) {
    return de3("/api/admin/site-config/popup-image", t);
  }
  function Qe3() {
    return oe3("/api/admin/site-config/popup-image");
  }
  async function Ve3(t) {
    const a = new FormData();
    return a.append("file", t), (await P("/api/admin/site-config/qrcode", { method: "POST", body: a })).config;
  }
  async function Xe3() {
    return (await P("/api/admin/site-config/qrcode", { method: "DELETE" })).config;
  }
  async function Ye3(t) {
    const a = K4(), r = await fetch(`/api/admin/terms/${encodeURIComponent(t)}/excel`, { headers: a ? { Authorization: `Bearer ${a}` } : void 0 });
    if (!r.ok) throw new E2(r.status, "\u4E0B\u8F7D\u5931\u8D25");
    const d = await r.blob(), u = r.headers.get("Content-Disposition") ?? "", c = /filename\*=UTF-8''([^;]+)/i.exec(u), h = c ? decodeURIComponent(c[1]) : `${t}.xlsx`, f = URL.createObjectURL(d), b2 = document.createElement("a");
    b2.href = f, b2.download = h, document.body.appendChild(b2), b2.click(), b2.remove(), URL.revokeObjectURL(f);
  }
  function Ze3({ onSuccess: t }) {
    const [a, r] = v.useState(""), [d, u] = v.useState(""), [c, h] = v.useState(false), f = async () => {
      if (!(!a || c)) {
        h(true), u("");
        try {
          await Pe3(a), t();
        } catch (b2) {
          u(b2 instanceof E2 ? b2.message : "\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
        } finally {
          h(false);
        }
      }
    };
    return W.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: W.jsxs(Rc.div, { className: "card w-full max-w-sm p-8", initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, children: [W.jsxs("div", { className: "mb-6 flex flex-col items-center gap-3 text-center", children: [W.jsx("span", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-lift", children: W.jsx(nt3, { className: "h-7 w-7" }) }), W.jsxs("div", { children: [W.jsx("h1", { className: "text-lg font-bold text-slate-800 dark:text-slate-100", children: "\u8BFE\u8868\u7BA1\u7406\u540E\u53F0" }), W.jsx("p", { className: "mt-1 text-xs text-slate-400 dark:text-slate-500", children: "\u4E0A\u4F20\u3001\u66F4\u65B0\u4E0E\u5220\u9664\u8BFE\u8868\u6570\u636E" })] })] }), W.jsxs("label", { className: "mb-1.5 flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400", children: [W.jsx(Oa3, { className: "h-3.5 w-3.5" }), "\u7BA1\u7406\u5458\u5BC6\u7801"] }), W.jsx("input", { type: "password", value: a, onChange: (b2) => {
      r(b2.target.value), u("");
    }, onKeyDown: (b2) => b2.key === "Enter" && f(), placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801", autoFocus: true, className: "input-base", "aria-label": "\u7BA1\u7406\u5458\u5BC6\u7801" }), d && W.jsx(Rc.p, { className: "mt-2 text-sm text-red-500", initial: { opacity: 0 }, animate: { opacity: 1 }, role: "alert", children: d }), W.jsx("button", { type: "button", onClick: f, disabled: !a || c, className: "btn-primary mt-5 w-full", children: c ? "\u767B\u5F55\u4E2D\u2026" : "\u767B \u5F55" }), W.jsx("a", { href: "#/", className: "mt-4 block text-center text-xs text-slate-400 transition-colors hover:text-brand-500 dark:text-slate-500", children: "\u2190 \u8FD4\u56DE\u8BFE\u8868\u67E5\u8BE2" })] }) });
  }
  function ee4(t) {
    const a = et3.exec(t);
    return a ? { year: a[1], semester: a[2] } : null;
  }
  function tt3() {
    const t = (/* @__PURE__ */ new Date()).getFullYear();
    return Array.from({ length: 4 }, (a, r) => {
      const d = t - 1 + r;
      return `${d}-${d + 1}`;
    });
  }
  function at2({ onUploaded: t, onError: a }) {
    const [r, d] = v.useState(null), [u, c] = v.useState(""), [h, f] = v.useState("1"), [b2, k] = v.useState(false), [v2, S3] = v.useState(false), C2 = v.useRef(null), N = v.useMemo(tt3, []), j3 = r ? ee4(r.name) : null, w = v.useCallback((l) => {
      if (!l) return;
      if (!l.name.toLowerCase().endsWith(".xlsx")) {
        a("\u4EC5\u652F\u6301 .xlsx \u683C\u5F0F\u7684 Excel \u6587\u4EF6");
        return;
      }
      d(l);
      const n = ee4(l.name);
      n && (c(n.year), f(n.semester));
    }, [a]), g2 = async () => {
      if (!(!r || v2)) {
        if (!j3 && !u) {
          a("\u65E0\u6CD5\u4ECE\u6587\u4EF6\u540D\u8BC6\u522B\u5B66\u5E74\uFF0C\u8BF7\u5148\u9009\u62E9\u5B66\u5E74\u4E0E\u5B66\u671F");
          return;
        }
        S3(true);
        try {
          const l = await Re3(r, u, h);
          t(`${l.replaced ? "\u5DF2\u66F4\u65B0" : "\u5DF2\u65B0\u589E"} ${l.term.label}\uFF1A\u8BFE\u7A0B ${l.term.courseCount} \u6761 / \u73ED\u7EA7 ${l.term.classCount} \u4E2A`), d(null), c(""), C2.current && (C2.current.value = "");
        } catch (l) {
          a(l instanceof E2 ? l.message : "\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
        } finally {
          S3(false);
        }
      }
    };
    return W.jsxs("div", { children: [W.jsxs("div", { role: "button", tabIndex: 0, "aria-label": "\u4E0A\u4F20\u8BFE\u8868 Excel \u6587\u4EF6", onClick: () => {
      var l;
      return (l = C2.current) == null ? void 0 : l.click();
    }, onKeyDown: (l) => {
      var n;
      return (l.key === "Enter" || l.key === " ") && ((n = C2.current) == null ? void 0 : n.click());
    }, onDragOver: (l) => {
      l.preventDefault(), k(true);
    }, onDragLeave: () => k(false), onDrop: (l) => {
      var n;
      l.preventDefault(), k(false), w((n = l.dataTransfer.files) == null ? void 0 : n[0]);
    }, className: "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-6 py-8 text-center transition-colors " + (b2 ? "border-brand-400 bg-brand-50 dark:border-brand-500 dark:bg-brand-500/10" : "border-brand-200 bg-brand-50/40 hover:border-brand-300 hover:bg-brand-50 dark:border-slate-700 dark:bg-slate-800/40 dark:hover:border-brand-500/50 dark:hover:bg-slate-800/70"), children: [W.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-500 dark:bg-brand-500/15 dark:text-brand-300", children: W.jsx(Aa3, { className: "h-6 w-6" }) }), W.jsx("p", { className: "text-sm font-medium text-slate-700 dark:text-slate-200", children: "\u62D6\u62FD Excel \u6587\u4EF6\u5230\u6B64\u5904\uFF0C\u6216\u70B9\u51FB\u9009\u62E9" }), W.jsx("p", { className: "text-xs text-slate-400 dark:text-slate-500", children: "\u652F\u6301 .xlsx\uFF08\u226430MB\uFF09\uFF1B\u6587\u4EF6\u540D\u5F62\u5982\u300C2026-2027\u5168\u6821\u8BFE\u8868_\u7B2C1\u5B66\u671F.xlsx\u300D\u53EF\u81EA\u52A8\u8BC6\u522B\u5B66\u671F" }), W.jsx("input", { ref: C2, type: "file", accept: ".xlsx", className: "hidden", onChange: (l) => {
      var n;
      return w((n = l.target.files) == null ? void 0 : n[0]);
    } })] }), r && W.jsxs(Rc.div, { className: "mt-3 rounded-xl border border-brand-100 bg-white p-4 dark:border-slate-700 dark:bg-slate-900", initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, children: [W.jsxs("div", { className: "flex items-center gap-3", children: [W.jsx("span", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10", children: W.jsx($a3, { className: "h-5 w-5" }) }), W.jsxs("div", { className: "min-w-0 flex-1", children: [W.jsx("p", { className: "truncate text-sm font-medium text-slate-700 dark:text-slate-200", title: r.name, children: r.name }), W.jsx("p", { className: "text-xs text-slate-400", children: Ma3(r.size) })] }), W.jsx("button", { type: "button", onClick: () => {
      d(null), C2.current && (C2.current.value = "");
    }, className: "flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800", "aria-label": "\u79FB\u9664\u6587\u4EF6", children: W.jsx(K3, { className: "h-4 w-4" }) })] }), W.jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-3", children: [j3 ? W.jsxs("span", { className: "inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-medium text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300", children: [W.jsx(bs3, { className: "h-3.5 w-3.5" }), "\u5DF2\u8BC6\u522B\uFF1A", j3.year, " \u7B2C", j3.semester, "\u5B66\u671F"] }) : W.jsxs(W.Fragment, { children: [W.jsxs("label", { className: "flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400", children: ["\u5B66\u5E74", W.jsxs("select", { value: u, onChange: (l) => c(l.target.value), className: "h-9 rounded-lg border border-slate-200 bg-white px-2 text-sm text-slate-700 outline-none focus:border-brand-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200", children: [W.jsx("option", { value: "", children: "\u8BF7\u9009\u62E9" }), N.map((l) => W.jsx("option", { value: l, children: l }, l))] })] }), W.jsxs("label", { className: "flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400", children: ["\u5B66\u671F", W.jsxs("select", { value: h, onChange: (l) => f(l.target.value), className: "h-9 rounded-lg border border-slate-200 bg-white px-2 text-sm text-slate-700 outline-none focus:border-brand-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200", children: [W.jsx("option", { value: "1", children: "\u7B2C1\u5B66\u671F" }), W.jsx("option", { value: "2", children: "\u7B2C2\u5B66\u671F" }), W.jsx("option", { value: "3", children: "\u7B2C3\u5B66\u671F" })] })] })] }), W.jsx("button", { type: "button", onClick: g2, disabled: v2, className: "btn-primary ml-auto", children: v2 ? "\u4E0A\u4F20\u5E76\u8F6C\u6362\u4E2D\u2026" : "\u4E0A\u4F20\u5E76\u8F6C\u6362" })] })] })] });
  }
  function st3({ onSaved: t, onError: a, onAuthExpired: r }) {
    const [d, u] = v.useState(null), [c, h] = v.useState(false), [f, b2] = v.useState(""), [k, v2] = v.useState(8), [S3, C2] = v.useState(false), [N, j3] = v.useState(""), [w, g2] = v.useState(""), [l, n] = v.useState(false), x = v.useRef(null), o = (y2) => {
      u(y2), h(y2.watermark.enabled), b2(y2.watermark.text), v2(Math.round(y2.watermark.opacity * 100)), C2(y2.ad.enabled), j3(y2.ad.title), g2(y2.ad.qrImage);
    }, m = (y2, B) => {
      if (y2 instanceof E2 && y2.status === 401) {
        r();
        return;
      }
      a(y2 instanceof E2 ? y2.message : B);
    };
    v.useEffect(() => {
      let y2 = false;
      return D3().then((B) => {
        y2 || o(B);
      }).catch((B) => {
        y2 || m(B, "\u7AD9\u70B9\u8BBE\u7F6E\u52A0\u8F7D\u5931\u8D25");
      }), () => {
        y2 = true;
      };
    }, []);
    const p = async () => {
      if (!l) {
        n(true);
        try {
          const y2 = await ze3({ enabled: c, text: f.trim(), opacity: k / 100 }, { enabled: S3, title: N.trim() });
          o(y2), t("\u7AD9\u70B9\u8BBE\u7F6E\u5DF2\u4FDD\u5B58\uFF0C\u7528\u6237\u7AEF\u5237\u65B0\u540E\u751F\u6548");
        } catch (y2) {
          m(y2, "\u4FDD\u5B58\u5931\u8D25");
        } finally {
          n(false);
        }
      }
    }, s = async (y2) => {
      var X4;
      const B = (X4 = y2.target.files) == null ? void 0 : X4[0];
      if (y2.target.value = "", !(!B || l)) {
        n(true);
        try {
          const F2 = await Ve3(B);
          o(F2), t("\u4E8C\u7EF4\u7801\u5DF2\u4E0A\u4F20\uFF08\u8BB0\u5F97\u542F\u7528\u60AC\u6D6E\u5E7F\u544A\u5E76\u4FDD\u5B58\uFF09");
        } catch (F2) {
          m(F2, "\u4E8C\u7EF4\u7801\u4E0A\u4F20\u5931\u8D25");
        } finally {
          n(false);
        }
      }
    }, I3 = async () => {
      if (!l) {
        n(true);
        try {
          const y2 = await Xe3();
          o(y2), t("\u5DF2\u79FB\u9664\u4E8C\u7EF4\u7801");
        } catch (y2) {
          m(y2, "\u79FB\u9664\u5931\u8D25");
        } finally {
          n(false);
        }
      }
    };
    return d === null ? W.jsx("div", { className: "skeleton h-40 w-full", "aria-busy": "true" }) : W.jsxs("div", { className: "flex flex-col gap-6", children: [W.jsxs("div", { className: "flex flex-col gap-3", children: [W.jsxs("div", { className: "flex items-center justify-between gap-3", children: [W.jsxs("div", { children: [W.jsx("h3", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: "\u5168\u5C40\u6587\u672C\u6C34\u5370" }), W.jsx("p", { className: "mt-0.5 text-xs text-slate-400 dark:text-slate-500", children: "\u5E73\u94FA\u663E\u793A\u5728\u7528\u6237\u7AEF\u6240\u6709\u754C\u9762\uFF08\u542B\u5F39\u7A97\uFF09\u4E4B\u4E0A\uFF0C\u4E0D\u5F71\u54CD\u64CD\u4F5C" })] }), W.jsx(te3, { checked: c, onChange: h, label: "\u542F\u7528\u6C34\u5370" })] }), W.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [W.jsxs("label", { className: "flex flex-col gap-1.5", children: [W.jsx("span", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: "\u6C34\u5370\u6587\u672C\uFF08\u6700\u957F 60 \u5B57\uFF09" }), W.jsx("input", { type: "text", value: f, maxLength: 60, onChange: (y2) => b2(y2.target.value), placeholder: "\u5982\uFF1A\u8BFE\u8868\u6570\u636E\u4EC5\u4F9B\u53C2\u8003 \xB7 XX\u5927\u5B66", className: "input-base" })] }), W.jsxs("label", { className: "flex flex-col gap-1.5", children: [W.jsxs("span", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: ["\u4E0D\u900F\u660E\u5EA6\uFF1A", k, "%"] }), W.jsx("input", { type: "range", min: 1, max: 50, step: 1, value: k, onChange: (y2) => v2(Number(y2.target.value)), className: "h-9 w-full accent-brand-500", "aria-label": "\u6C34\u5370\u4E0D\u900F\u660E\u5EA6" })] })] }), W.jsxs("div", { className: "relative h-28 overflow-hidden rounded-xl border border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900", children: [W.jsxs("div", { className: "flex h-full flex-col justify-center gap-1.5 px-4 text-xs text-slate-400 dark:text-slate-500", "aria-hidden": "true", children: [W.jsx("p", { className: "font-semibold text-slate-500 dark:text-slate-300", children: "\u9884\u89C8\uFF1A\u6A21\u62DF\u7528\u6237\u7AEF\u9875\u9762" }), W.jsx("p", { children: "\u9AD8\u7B49\u6570\u5B66A \xB7 \u65592-201 \xB7 \u5F20\u8001\u5E08" }), W.jsx("p", { children: "\u5927\u5B66\u82F1\u8BED1 \xB7 \u5916\u8BED\u697C305 \xB7 \u674E\u8001\u5E08" })] }), f.trim() && W.jsx(Ws3, { text: f.trim(), opacity: k / 100, fixed: false })] })] }), W.jsx("hr", { className: "border-slate-100 dark:border-slate-800" }), W.jsxs("div", { className: "flex flex-col gap-3", children: [W.jsxs("div", { className: "flex items-center justify-between gap-3", children: [W.jsxs("div", { children: [W.jsx("h3", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: "\u60AC\u6D6E\u5E7F\u544A" }), W.jsx("p", { className: "mt-0.5 text-xs text-slate-400 dark:text-slate-500", children: "\u5E38\u9A7B\u7528\u6237\u754C\u9762\u6700\u9876\u5C42\u7684\u5C0F\u5361\u7247\uFF08\u65E0\u5173\u95ED\u6309\u94AE\u3001\u53EF\u62D6\u62FD\u632A\u4F4D\uFF09\uFF0C\u4EFB\u4F55\u622A\u56FE\u90FD\u4F1A\u5E26\u4E0A" })] }), W.jsx(te3, { checked: S3, onChange: C2, label: "\u542F\u7528\u60AC\u6D6E\u5E7F\u544A" })] }), W.jsxs("div", { className: "flex flex-wrap items-start gap-4", children: [W.jsxs("div", { className: "flex flex-col items-center gap-2", children: [w ? W.jsx("img", { src: w, alt: "\u5E7F\u544A\u4E8C\u7EF4\u7801\u9884\u89C8", className: "h-28 w-28 rounded-xl border border-slate-100 object-contain dark:border-slate-800" }) : W.jsx("div", { className: "flex h-28 w-28 items-center justify-center rounded-xl border border-dashed border-slate-200 text-[11px] text-slate-400 dark:border-slate-700 dark:text-slate-500", children: "\u672A\u4E0A\u4F20\u4E8C\u7EF4\u7801" }), W.jsxs("div", { className: "flex items-center gap-1.5", children: [W.jsxs("button", { type: "button", className: "btn-ghost", onClick: () => {
      var y2;
      return (y2 = x.current) == null ? void 0 : y2.click();
    }, disabled: l, children: [W.jsx(Aa3, { className: "h-3.5 w-3.5" }), w ? "\u66F4\u6362" : "\u4E0A\u4F20"] }), w && W.jsx("button", { type: "button", className: "btn-ghost !text-red-500", onClick: I3, disabled: l, "aria-label": "\u79FB\u9664\u4E8C\u7EF4\u7801", children: W.jsx(Pa3, { className: "h-3.5 w-3.5" }) })] }), W.jsx("input", { ref: x, type: "file", accept: "image/png,image/jpeg,image/webp", className: "hidden", onChange: s })] }), W.jsxs("label", { className: "flex min-w-[14rem] flex-1 flex-col gap-1.5", children: [W.jsx("span", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: "\u5E7F\u544A\u6807\u9898\uFF08\u6700\u957F 40 \u5B57\uFF09" }), W.jsx("input", { type: "text", value: N, maxLength: 40, onChange: (y2) => j3(y2.target.value), placeholder: "\u5982\uFF1A\u626B\u7801\u52A0\u5165\u8BFE\u8868\u4EA4\u6D41\u7FA4", className: "input-base" }), W.jsx("span", { className: "text-[11px] leading-relaxed text-slate-400 dark:text-slate-500", children: "\u652F\u6301 PNG / JPEG / WebP\uFF0C2MB \u4EE5\u5185\u3002\u4E8C\u7EF4\u7801\u4E0E\u6807\u9898\u81F3\u5C11\u8BBE\u7F6E\u4E00\u9879\u624D\u80FD\u542F\u7528\u3002" })] })] })] }), W.jsx("div", { className: "flex justify-end", children: W.jsx("button", { type: "button", className: "btn-primary", onClick: p, disabled: l, children: l ? "\u5904\u7406\u4E2D\u2026" : "\u4FDD\u5B58\u7AD9\u70B9\u8BBE\u7F6E" }) })] });
  }
  function te3({ checked: t, onChange: a, label: r }) {
    return W.jsx("button", { type: "button", role: "switch", "aria-checked": t, "aria-label": r, onClick: () => a(!t), className: "relative h-6 w-11 flex-shrink-0 rounded-full transition-colors " + (t ? "bg-brand-500" : "bg-slate-200 dark:bg-slate-700"), children: W.jsx("span", { className: "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all " + (t ? "left-[1.375rem]" : "left-0.5") }) });
  }
  function lt2({ onSaved: t, onError: a, onAuthExpired: r }) {
    const [d, u] = v.useState(null), [c, h] = v.useState(""), [f, b2] = v.useState(false), k = v.useRef(null), v2 = v.useRef(null), S3 = (l) => {
      u(l), h(l.branding.siteName);
    }, C2 = (l, n) => {
      if (l instanceof E2 && l.status === 401) {
        r();
        return;
      }
      a(l instanceof E2 ? l.message : n);
    };
    v.useEffect(() => {
      let l = false;
      return D3().then((n) => {
        l || S3(n);
      }).catch((n) => {
        l || C2(n, "\u54C1\u724C\u8BBE\u7F6E\u52A0\u8F7D\u5931\u8D25");
      }), () => {
        l = true;
      };
    }, []);
    const N = async () => {
      if (!f) {
        b2(true);
        try {
          const l = await $e3({ ...d == null ? void 0 : d.branding, siteName: c.trim() });
          S3(l), t("\u7F51\u7AD9\u540D\u79F0\u5DF2\u4FDD\u5B58\uFF0C\u7528\u6237\u7AEF\u5237\u65B0\u540E\u751F\u6548");
        } catch (l) {
          C2(l, "\u54C1\u724C\u8BBE\u7F6E\u4FDD\u5B58\u5931\u8D25");
        } finally {
          b2(false);
        }
      }
    }, j3 = async (l, n) => {
      var o;
      const x = (o = n.target.files) == null ? void 0 : o[0];
      if (n.target.value = "", !(!x || f)) {
        b2(true);
        try {
          const m = l === "logo" ? await Ue3(x) : await Fe3(x);
          S3(m), t(l === "logo" ? "\u5DE6\u4E0A\u89D2 Logo \u5DF2\u66F4\u65B0" : "\u6D4F\u89C8\u5668\u6807\u7B7E\u9875\u56FE\u6807\u5DF2\u66F4\u65B0");
        } catch (m) {
          C2(m, "\u56FE\u7247\u4E0A\u4F20\u5931\u8D25");
        } finally {
          b2(false);
        }
      }
    }, w = async (l) => {
      if (!f) {
        b2(true);
        try {
          const n = await Me3(l);
          S3(n), t(l === "logo" ? "\u5DE6\u4E0A\u89D2 Logo \u5DF2\u79FB\u9664" : "\u6D4F\u89C8\u5668\u6807\u7B7E\u9875\u56FE\u6807\u5DF2\u79FB\u9664");
        } catch (n) {
          C2(n, "\u56FE\u7247\u79FB\u9664\u5931\u8D25");
        } finally {
          b2(false);
        }
      }
    };
    if (!d) return W.jsx("div", { className: "skeleton h-44 w-full", "aria-busy": "true" });
    const g2 = d.branding;
    return W.jsxs("div", { className: "flex flex-col gap-5", children: [W.jsxs("label", { className: "flex max-w-xl flex-col gap-1.5", children: [W.jsx("span", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: "\u7F51\u7AD9\u540D\u79F0\uFF08\u6700\u957F 60 \u5B57\uFF09" }), W.jsx("input", { type: "text", value: c, maxLength: 60, onChange: (l) => h(l.target.value), placeholder: "\u8BFE\u8868\u67E5\u8BE2", className: "input-base" }), W.jsx("span", { className: "text-[11px] text-slate-400 dark:text-slate-500", children: "\u4F1A\u540C\u65F6\u663E\u793A\u5728\u6D4F\u89C8\u5668\u6807\u7B7E\u9875\u548C\u7528\u6237\u7AEF\u5DE6\u4E0A\u89D2\u3002" })] }), W.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [W.jsx(ae3, { title: "\u5DE6\u4E0A\u89D2 Logo", description: "\u5EFA\u8BAE\u4F7F\u7528\u6B63\u65B9\u5F62 PNG / JPEG / WebP\uFF0C2MB \u4EE5\u5185\u3002", value: g2.logo, fallback: W.jsx(nt3, { className: "h-9 w-9 text-brand-500" }), inputRef: k, accept: "image/png,image/jpeg,image/webp", busy: f, onPick: (l) => j3("logo", l), onRemove: () => w("logo") }), W.jsx(ae3, { title: "\u6D4F\u89C8\u5668\u6807\u7B7E\u9875\u56FE\u6807", description: "\u5EFA\u8BAE\u4F7F\u7528 32\xD732 \u6216 48\xD748 \u7684 PNG / ICO\uFF0C2MB \u4EE5\u5185\u3002", value: g2.favicon, fallback: W.jsx(nt3, { className: "h-7 w-7 text-brand-500" }), inputRef: v2, accept: "image/png,image/jpeg,image/webp,image/x-icon,.ico", busy: f, onPick: (l) => j3("favicon", l), onRemove: () => w("favicon") })] }), W.jsx("div", { className: "flex justify-end", children: W.jsx("button", { type: "button", className: "btn-primary", onClick: N, disabled: f, children: f ? "\u5904\u7406\u4E2D\u2026" : "\u4FDD\u5B58\u54C1\u724C\u8BBE\u7F6E" }) })] });
  }
  function ae3({ title: t, description: a, value: r, fallback: d, inputRef: u, accept: c, busy: h, onPick: f, onRemove: b2 }) {
    return W.jsxs("div", { className: "flex items-center gap-4 rounded-xl border border-slate-100 p-4 dark:border-slate-800", children: [W.jsx("div", { className: "flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/60", children: r ? W.jsx("img", { src: r, alt: `${t}\u9884\u89C8`, className: "h-full w-full object-contain" }) : d }), W.jsxs("div", { className: "min-w-0 flex-1", children: [W.jsx("h3", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: t }), W.jsx("p", { className: "mt-1 text-[11px] leading-relaxed text-slate-400 dark:text-slate-500", children: a }), W.jsxs("div", { className: "mt-2 flex items-center gap-1.5", children: [W.jsxs("button", { type: "button", className: "btn-ghost", onClick: () => {
      var k;
      return (k = u.current) == null ? void 0 : k.click();
    }, disabled: h, children: [W.jsx(Aa3, { className: "h-3.5 w-3.5" }), r ? "\u66F4\u6362" : "\u4E0A\u4F20"] }), r && W.jsx("button", { type: "button", className: "btn-ghost !text-red-500", onClick: b2, disabled: h, "aria-label": `\u79FB\u9664${t}`, children: W.jsx(Pa3, { className: "h-3.5 w-3.5" }) })] }), W.jsx("input", { ref: u, type: "file", accept: c, className: "hidden", onChange: f })] })] });
  }
  function nt4() {
    return { id: "t" + Math.random().toString(16).slice(2, 10), label: "", icon: "link", url: "", badge: "" };
  }
  function rt2({ onSaved: t, onError: a, onAuthExpired: r }) {
    const [d, u] = v.useState(false), [c, h] = v.useState([]), [f, b2] = v.useState(false), [k, v2] = v.useState(false), S3 = (n, x) => {
      if (n instanceof E2 && n.status === 401) {
        r();
        return;
      }
      a(n instanceof E2 ? n.message : x);
    };
    v.useEffect(() => {
      let n = false;
      return D3().then((x) => {
        n || (u(x.nav.enabled), h(x.nav.items.map((o) => ({ ...o }))), b2(true));
      }).catch((x) => {
        n || S3(x, "\u5E95\u680F\u8BBE\u7F6E\u52A0\u8F7D\u5931\u8D25");
      }), () => {
        n = true;
      };
    }, []);
    const C2 = (n, x) => {
      h((o) => o.map((m, p) => p === n ? { ...m, ...x } : m));
    }, N = (n) => {
      h((x) => x.filter((o, m) => m !== n));
    }, j3 = (n, x) => {
      h((o) => {
        const m = [...o], p = n + x;
        return p < 0 || p >= m.length ? o : ([m[n], m[p]] = [m[p], m[n]], m);
      });
    }, w = () => {
      h((n) => n.length >= R2 ? n : [...n, nt4()]);
    }, g2 = async () => {
      if (k) return;
      const n = c.map((x) => ({ ...x, label: x.label.trim(), url: x.url.trim(), badge: x.badge.trim() }));
      for (let x = 0; x < n.length; x += 1) {
        const o = n[x];
        if (!o.label) {
          a(`\u7B2C ${x + 1} \u4E2A\u6309\u94AE\u672A\u586B\u5199\u540D\u79F0`);
          return;
        }
        if (!o.url) {
          a(`\u7B2C ${x + 1} \u4E2A\u6309\u94AE\u672A\u586B\u5199\u8DF3\u8F6C\u94FE\u63A5`);
          return;
        }
        if (!/^(https?:\/\/|\/|#)/.test(o.url)) {
          a(`\u7B2C ${x + 1} \u4E2A\u6309\u94AE\u7684\u94FE\u63A5\u9700\u4EE5 http(s):// \u3001/ \u6216 # \u5F00\u5934`);
          return;
        }
      }
      if (d && n.length === 0) {
        a("\u542F\u7528\u5E95\u680F\u9700\u8981\u81F3\u5C11\u6DFB\u52A0\u4E00\u4E2A\u6309\u94AE");
        return;
      }
      v2(true);
      try {
        const x = await We3({ enabled: d, items: n });
        u(x.nav.enabled), h(x.nav.items.map((o) => ({ ...o }))), t("\u5E95\u680F\u8BBE\u7F6E\u5DF2\u4FDD\u5B58\uFF0C\u7528\u6237\u7AEF\u5237\u65B0\u540E\u751F\u6548");
      } catch (x) {
        S3(x, "\u4FDD\u5B58\u5931\u8D25");
      } finally {
        v2(false);
      }
    };
    if (!f) return W.jsx("div", { className: "skeleton h-40 w-full", "aria-busy": "true" });
    const l = c.filter((n) => n.label.trim() && n.url.trim());
    return W.jsxs("div", { className: "flex flex-col gap-5", children: [W.jsxs("div", { className: "flex items-center justify-between gap-3", children: [W.jsxs("div", { children: [W.jsx("h3", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: "\u5E95\u680F\u6309\u94AE" }), W.jsxs("p", { className: "mt-0.5 text-xs text-slate-400 dark:text-slate-500", children: ["\u5E38\u9A7B\u7528\u6237\u7AEF\u9875\u9762\u5E95\u90E8\u7684\u5BFC\u822A\u6761\uFF0C\u6700\u591A ", R2, " \u4E2A\u6309\u94AE\uFF0C\u70B9\u51FB\u8DF3\u8F6C\u5230\u6307\u5B9A\u94FE\u63A5"] })] }), W.jsx(it3, { checked: d, onChange: u, label: "\u542F\u7528\u5E95\u680F" })] }), W.jsxs("div", { className: "rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/40", children: [W.jsx("p", { className: "mb-2 text-[11px] font-medium text-slate-400 dark:text-slate-500", children: "\u5E95\u680F\u9884\u89C8" }), l.length === 0 ? W.jsx("p", { className: "py-3 text-center text-xs text-slate-400 dark:text-slate-500", children: "\u6DFB\u52A0\u5E76\u586B\u5199\u6309\u94AE\u540E\u5728\u6B64\u9884\u89C8" }) : W.jsx("div", { className: "flex items-stretch overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900", children: l.map((n) => {
      const x = Ss3[n.icon] ?? ut3, o = n.badge.trim();
      return W.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center gap-0.5 px-1 py-2 text-slate-500 dark:text-slate-400", children: [W.jsxs("span", { className: "relative flex h-6 w-6 items-center justify-center", children: [W.jsx(x, { className: "h-[22px] w-[22px]" }), o && W.jsx("span", { className: "absolute -right-2.5 -top-1.5 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold leading-none text-white", children: o })] }), W.jsx("span", { className: "max-w-full truncate text-[11px] font-medium leading-tight", children: n.label.trim() })] }, n.id);
    }) })] }), W.jsx("div", { className: "flex flex-col gap-3", children: c.length === 0 ? W.jsxs("div", { className: "flex flex-col items-center gap-2 rounded-xl border border-dashed border-slate-200 py-8 text-center dark:border-slate-700", children: [W.jsx("p", { className: "text-sm font-medium text-slate-500 dark:text-slate-400", children: "\u8FD8\u6CA1\u6709\u5E95\u680F\u6309\u94AE" }), W.jsx("p", { className: "text-xs text-slate-400 dark:text-slate-500", children: "\u70B9\u51FB\u4E0B\u65B9\u300C\u6DFB\u52A0\u6309\u94AE\u300D\u5F00\u59CB\u914D\u7F6E" })] }) : c.map((n, x) => {
      const o = Ss3[n.icon] ?? ut3;
      return W.jsxs("div", { className: "rounded-xl border border-slate-100 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900", children: [W.jsxs("div", { className: "mb-2 flex items-center justify-between gap-2", children: [W.jsxs("span", { className: "flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400", children: [W.jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-md bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-300", children: W.jsx(o, { className: "h-4 w-4" }) }), "\u6309\u94AE ", x + 1] }), W.jsxs("div", { className: "flex items-center gap-1", children: [W.jsx(W3, { label: "\u4E0A\u79FB", disabled: x === 0, onClick: () => j3(x, -1), children: W.jsx(za3, { className: "h-3.5 w-3.5" }) }), W.jsx(W3, { label: "\u4E0B\u79FB", disabled: x === c.length - 1, onClick: () => j3(x, 1), children: W.jsx(Ba3, { className: "h-3.5 w-3.5" }) }), W.jsx(W3, { label: "\u5220\u9664", danger: true, onClick: () => N(x), children: W.jsx(Pa3, { className: "h-3.5 w-3.5" }) })] })] }), W.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [W.jsxs("label", { className: "flex flex-col gap-1.5", children: [W.jsx("span", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: "\u540D\u79F0\uFF08\u6700\u957F 8 \u5B57\uFF09" }), W.jsx("input", { type: "text", value: n.label, maxLength: 8, onChange: (m) => C2(x, { label: m.target.value }), placeholder: "\u5982\uFF1A\u5B98\u7F51", className: "input-base" })] }), W.jsxs("label", { className: "flex flex-col gap-1.5", children: [W.jsx("span", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: "\u89D2\u6807\uFF08\u53EF\u9009\uFF0C\u6700\u957F 6 \u5B57\uFF09" }), W.jsx("input", { type: "text", value: n.badge, maxLength: 6, onChange: (m) => C2(x, { badge: m.target.value }), placeholder: "\u5982\uFF1ANEW / \u70ED / 9", className: "input-base" })] }), W.jsxs("label", { className: "flex flex-col gap-1.5 sm:col-span-2", children: [W.jsx("span", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: "\u8DF3\u8F6C\u94FE\u63A5" }), W.jsx("input", { type: "text", value: n.url, onChange: (m) => C2(x, { url: m.target.value }), placeholder: "https://example.com \u6216 /path \u6216 #/admin", className: "input-base" })] })] }), W.jsxs("div", { className: "mt-3", children: [W.jsx("span", { className: "mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400", children: "\u56FE\u6807" }), W.jsx("div", { className: "flex flex-wrap gap-1.5", children: Fa3.map((m) => {
        const p = Ss3[m.key] ?? ut3, s = n.icon === m.key;
        return W.jsx("button", { type: "button", onClick: () => C2(x, { icon: m.key }), "aria-label": m.label, "aria-pressed": s, title: m.label, className: "flex h-9 w-9 items-center justify-center rounded-lg border transition-colors " + (s ? "border-brand-400 bg-brand-50 text-brand-600 dark:border-brand-500 dark:bg-brand-500/15 dark:text-brand-300" : "border-slate-200 bg-white text-slate-400 hover:border-brand-300 hover:text-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-500 dark:hover:border-brand-500/50"), children: W.jsx(p, { className: "h-4 w-4" }) }, m.key);
      }) })] })] }, n.id);
    }) }), W.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [W.jsxs("button", { type: "button", className: "btn-ghost", onClick: w, disabled: c.length >= R2, title: c.length >= R2 ? `\u6700\u591A ${R2} \u4E2A\u6309\u94AE` : "\u6DFB\u52A0\u5E95\u680F\u6309\u94AE", children: [W.jsx(Ha3, { className: "h-4 w-4" }), "\u6DFB\u52A0\u6309\u94AE", c.length > 0 ? `\uFF08${c.length}/${R2}\uFF09` : ""] }), W.jsx("button", { type: "button", className: "btn-primary", onClick: g2, disabled: k, children: k ? "\u5904\u7406\u4E2D\u2026" : "\u4FDD\u5B58\u5E95\u680F\u8BBE\u7F6E" })] })] });
  }
  function W3({ children: t, label: a, danger: r, disabled: d, onClick: u }) {
    return W.jsx("button", { type: "button", onClick: u, disabled: d, "aria-label": a, title: a, className: "flex h-7 w-7 items-center justify-center rounded-lg transition-colors disabled:cursor-not-allowed disabled:opacity-40 " + (r ? "bg-red-50 text-red-500 hover:bg-red-100 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20" : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"), children: t });
  }
  function it3({ checked: t, onChange: a, label: r }) {
    return W.jsx("button", { type: "button", role: "switch", "aria-checked": t, "aria-label": r, onClick: () => a(!t), className: "relative h-6 w-11 flex-shrink-0 rounded-full transition-colors " + (t ? "bg-brand-500" : "bg-slate-200 dark:bg-slate-700"), children: W.jsx("span", { className: "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all " + (t ? "left-[1.375rem]" : "left-0.5") }) });
  }
  function V2({ checked: t, onChange: a, label: r }) {
    return W.jsx("button", { type: "button", role: "switch", "aria-checked": t, "aria-label": r, onClick: () => a(!t), className: "relative h-6 w-11 flex-shrink-0 rounded-full transition-colors " + (t ? "bg-brand-500" : "bg-slate-200 dark:bg-slate-700"), children: W.jsx("span", { className: "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all " + (t ? "left-[1.375rem]" : "left-0.5") }) });
  }
  function ct3({ onSaved: t, onError: a, onAuthExpired: r }) {
    const [d, u] = v.useState(false), [c, h] = v.useState(""), [f, b2] = v.useState(false), [k, v2] = v.useState(false), S3 = (N, j3) => {
      if (N instanceof E2 && N.status === 401) {
        r();
        return;
      }
      a(N instanceof E2 ? N.message : j3);
    };
    v.useEffect(() => {
      let N = false;
      return D3().then((j3) => {
        N || (u(j3.announcement.enabled), h(j3.announcement.text), b2(true));
      }).catch((j3) => {
        N || S3(j3, "\u516C\u544A\u8BBE\u7F6E\u52A0\u8F7D\u5931\u8D25");
      }), () => {
        N = true;
      };
    }, []);
    const C2 = async () => {
      if (k) return;
      const N = c.trim();
      if (d && !N) {
        a("\u542F\u7528\u6EDA\u52A8\u516C\u544A\u9700\u8981\u5148\u586B\u5199\u516C\u544A\u6587\u672C");
        return;
      }
      v2(true);
      try {
        const j3 = await Je3({ enabled: d, text: N });
        u(j3.announcement.enabled), h(j3.announcement.text), t("\u6EDA\u52A8\u516C\u544A\u5DF2\u4FDD\u5B58\uFF0C\u7528\u6237\u7AEF\u5237\u65B0\u540E\u751F\u6548");
      } catch (j3) {
        S3(j3, "\u4FDD\u5B58\u5931\u8D25");
      } finally {
        v2(false);
      }
    };
    return f ? W.jsxs("div", { className: "flex flex-col gap-4", children: [W.jsxs("div", { className: "flex items-center justify-between gap-3", children: [W.jsxs("div", { children: [W.jsx("h3", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: "\u6EDA\u52A8\u516C\u544A" }), W.jsx("p", { className: "mt-0.5 text-xs text-slate-400 dark:text-slate-500", children: "\u663E\u793A\u5728\u9876\u680F\u4E0B\u65B9\u901A\u680F\u533A\u57DF\uFF0C\u6587\u672C\u4ECE\u53F3\u5411\u5DE6\u6EDA\u52A8\uFF0C\u9F20\u6807\u60AC\u505C\u6682\u505C" })] }), W.jsx(V2, { checked: d, onChange: u, label: "\u542F\u7528\u6EDA\u52A8\u516C\u544A" })] }), W.jsxs("label", { className: "flex flex-col gap-1.5", children: [W.jsx("span", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: "\u516C\u544A\u6587\u672C\uFF08\u6700\u957F 300 \u5B57\uFF09" }), W.jsx("textarea", { value: c, maxLength: 300, rows: 2, onChange: (N) => h(N.target.value), placeholder: "\u5982\uFF1A\u671F\u672B\u8003\u8BD5\u5468\u8BFE\u8868\u5DF2\u66F4\u65B0\uFF0C\u8BF7\u540C\u5B66\u4EEC\u6CE8\u610F\u67E5\u770B\u6700\u65B0\u5B89\u6392\u3002", className: "input-base h-auto resize-y py-2 leading-relaxed" })] }), W.jsxs("div", { children: [W.jsx("p", { className: "mb-1.5 text-[11px] font-medium text-slate-400 dark:text-slate-500", children: "\u6EDA\u52A8\u9884\u89C8" }), c.trim() ? W.jsx("div", { className: "overflow-hidden rounded-xl border border-slate-100 dark:border-slate-800", children: W.jsx(qs3, { text: c.trim() }) }) : W.jsx("p", { className: "rounded-xl border border-dashed border-slate-200 py-3 text-center text-xs text-slate-400 dark:border-slate-700 dark:text-slate-500", children: "\u586B\u5199\u516C\u544A\u6587\u672C\u540E\u5728\u6B64\u9884\u89C8\u6EDA\u52A8\u6548\u679C" })] }), W.jsx("div", { className: "flex justify-end", children: W.jsx("button", { type: "button", className: "btn-primary", onClick: C2, disabled: k, children: k ? "\u5904\u7406\u4E2D\u2026" : "\u4FDD\u5B58\u516C\u544A\u8BBE\u7F6E" }) })] }) : W.jsx("div", { className: "skeleton h-32 w-full", "aria-busy": "true" });
  }
  function dt4({ onSaved: t, onError: a, onAuthExpired: r }) {
    const [d, u] = v.useState(false), [c, h] = v.useState(""), [f, b2] = v.useState(""), [k, v2] = v.useState(""), [S3, C2] = v.useState(false), [N, j3] = v.useState(false), w = v.useRef(null), g2 = (o, m) => {
      if (o instanceof E2 && o.status === 401) {
        r();
        return;
      }
      a(o instanceof E2 ? o.message : m);
    };
    v.useEffect(() => {
      let o = false;
      return D3().then((m) => {
        o || (u(m.banner.enabled), h(m.banner.image), b2(m.banner.url), v2(m.banner.alt), C2(true));
      }).catch((m) => {
        o || g2(m, "\u6A2A\u5E45\u8BBE\u7F6E\u52A0\u8F7D\u5931\u8D25");
      }), () => {
        o = true;
      };
    }, []);
    const l = async (o) => {
      var p;
      const m = (p = o.target.files) == null ? void 0 : p[0];
      if (o.target.value = "", !(!m || N)) {
        j3(true);
        try {
          const s = await qe3(m);
          h(s.banner.image), t("\u6A2A\u5E45\u5E7F\u544A\u56FE\u5DF2\u4E0A\u4F20\uFF08\u8BB0\u5F97\u542F\u7528\u5E76\u4FDD\u5B58\uFF09");
        } catch (s) {
          g2(s, "\u56FE\u7247\u4E0A\u4F20\u5931\u8D25");
        } finally {
          j3(false);
        }
      }
    }, n = async () => {
      if (!N) {
        j3(true);
        try {
          const o = await He3();
          h(o.banner.image), t("\u5DF2\u79FB\u9664\u6A2A\u5E45\u5E7F\u544A\u56FE");
        } catch (o) {
          g2(o, "\u79FB\u9664\u5931\u8D25");
        } finally {
          j3(false);
        }
      }
    }, x = async () => {
      if (N) return;
      const o = f.trim();
      if (o && !/^(https?:\/\/|\/|#)/.test(o)) {
        a("\u8DF3\u8F6C\u94FE\u63A5\u9700\u4EE5 http(s):// \u3001/ \u6216 # \u5F00\u5934");
        return;
      }
      if (d && !c) {
        a("\u542F\u7528\u5E95\u90E8\u6A2A\u5E45\u9700\u8981\u5148\u4E0A\u4F20\u5E7F\u544A\u56FE");
        return;
      }
      j3(true);
      try {
        const m = await _e3({ enabled: d, url: o, alt: k.trim() });
        u(m.banner.enabled), b2(m.banner.url), v2(m.banner.alt), t("\u5E95\u90E8\u6A2A\u5E45\u8BBE\u7F6E\u5DF2\u4FDD\u5B58\uFF0C\u7528\u6237\u7AEF\u5237\u65B0\u540E\u751F\u6548");
      } catch (m) {
        g2(m, "\u4FDD\u5B58\u5931\u8D25");
      } finally {
        j3(false);
      }
    };
    return S3 ? W.jsxs("div", { className: "flex flex-col gap-4", children: [W.jsxs("div", { className: "flex items-center justify-between gap-3", children: [W.jsxs("div", { children: [W.jsx("h3", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: "\u5E95\u90E8\u6A2A\u5E45\u5E7F\u544A" }), W.jsx("p", { className: "mt-0.5 text-xs text-slate-400 dark:text-slate-500", children: "\u5C55\u793A\u5728\u7528\u6237\u7AEF\u9875\u9762\u5E95\u90E8\u7684\u901A\u680F\u56FE\u7247\uFF08\u5982\u8FD0\u8425\u5546 Logo\uFF09\uFF0C\u53EF\u914D\u7F6E\u70B9\u51FB\u8DF3\u8F6C" })] }), W.jsx(V2, { checked: d, onChange: u, label: "\u542F\u7528\u5E95\u90E8\u6A2A\u5E45" })] }), W.jsxs("div", { className: "flex flex-col gap-2", children: [c ? W.jsx("div", { className: "overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-800/40", children: W.jsx("img", { src: c, alt: "\u6A2A\u5E45\u9884\u89C8", className: "mx-auto max-h-24 w-auto max-w-full object-contain" }) }) : W.jsx("div", { className: "flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-200 text-xs text-slate-400 dark:border-slate-700 dark:text-slate-500", children: "\u672A\u4E0A\u4F20\u6A2A\u5E45\u56FE\u7247" }), W.jsxs("div", { className: "flex items-center gap-1.5", children: [W.jsxs("button", { type: "button", className: "btn-ghost", onClick: () => {
      var o;
      return (o = w.current) == null ? void 0 : o.click();
    }, disabled: N, children: [W.jsx(Aa3, { className: "h-3.5 w-3.5" }), c ? "\u66F4\u6362\u56FE\u7247" : "\u4E0A\u4F20\u56FE\u7247"] }), c && W.jsxs("button", { type: "button", className: "btn-ghost !text-red-500", onClick: n, disabled: N, "aria-label": "\u79FB\u9664\u6A2A\u5E45\u56FE\u7247", children: [W.jsx(Pa3, { className: "h-3.5 w-3.5" }), "\u79FB\u9664"] })] }), W.jsx("input", { ref: w, type: "file", accept: "image/png,image/jpeg,image/webp", className: "hidden", onChange: l })] }), W.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [W.jsxs("label", { className: "flex flex-col gap-1.5", children: [W.jsx("span", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: "\u8DF3\u8F6C\u94FE\u63A5\uFF08\u53EF\u9009\uFF09" }), W.jsx("input", { type: "text", value: f, onChange: (o) => b2(o.target.value), placeholder: "https://example.com", className: "input-base" })] }), W.jsxs("label", { className: "flex flex-col gap-1.5", children: [W.jsx("span", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: "\u8BF4\u660E\u6587\u5B57\uFF08\u53EF\u9009\uFF0C\u6700\u957F 40 \u5B57\uFF09" }), W.jsx("input", { type: "text", value: k, maxLength: 40, onChange: (o) => v2(o.target.value), placeholder: "\u5982\uFF1A\u4E2D\u56FD\u79FB\u52A8", className: "input-base" })] })] }), W.jsx("p", { className: "text-[11px] leading-relaxed text-slate-400 dark:text-slate-500", children: "\u652F\u6301 PNG / JPEG / WebP\uFF0C2MB \u4EE5\u5185\u3002\u5EFA\u8BAE\u4F7F\u7528\u5BBD\u5E45\u6A2A\u56FE\uFF0C\u5C55\u793A\u65F6\u6309\u6BD4\u4F8B\u7F29\u653E\uFF0C\u9AD8\u5EA6\u6700\u5927\u7EA6 96px\u3002" }), W.jsx("div", { className: "flex justify-end", children: W.jsx("button", { type: "button", className: "btn-primary", onClick: x, disabled: N, children: N ? "\u5904\u7406\u4E2D\u2026" : "\u4FDD\u5B58\u6A2A\u5E45\u8BBE\u7F6E" }) })] }) : W.jsx("div", { className: "skeleton h-40 w-full", "aria-busy": "true" });
  }
  function ot3({ onSaved: t, onError: a, onAuthExpired: r }) {
    const [d, u] = v.useState(false), [c, h] = v.useState(""), [f, b2] = v.useState(""), [k, v2] = v.useState(""), [S3, C2] = v.useState(""), [N, j3] = v.useState(false), [w, g2] = v.useState(false), l = v.useRef(null), n = (p, s) => {
      if (p instanceof E2 && p.status === 401) {
        r();
        return;
      }
      a(p instanceof E2 ? p.message : s);
    };
    v.useEffect(() => {
      let p = false;
      return D3().then((s) => {
        p || (u(s.popup.enabled), h(s.popup.title), b2(s.popup.content), v2(s.popup.image), C2(s.popup.url), j3(true));
      }).catch((s) => {
        p || n(s, "\u5F39\u7A97\u8BBE\u7F6E\u52A0\u8F7D\u5931\u8D25");
      }), () => {
        p = true;
      };
    }, []);
    const x = async (p) => {
      var I3;
      const s = (I3 = p.target.files) == null ? void 0 : I3[0];
      if (p.target.value = "", !(!s || w)) {
        g2(true);
        try {
          const y2 = await Ke3(s);
          v2(y2.popup.image), t("\u5F39\u7A97\u56FE\u7247\u5DF2\u4E0A\u4F20\uFF08\u8BB0\u5F97\u542F\u7528\u5E76\u4FDD\u5B58\uFF09");
        } catch (y2) {
          n(y2, "\u56FE\u7247\u4E0A\u4F20\u5931\u8D25");
        } finally {
          g2(false);
        }
      }
    }, o = async () => {
      if (!w) {
        g2(true);
        try {
          const p = await Qe3();
          v2(p.popup.image), t("\u5DF2\u79FB\u9664\u5F39\u7A97\u56FE\u7247");
        } catch (p) {
          n(p, "\u79FB\u9664\u5931\u8D25");
        } finally {
          g2(false);
        }
      }
    }, m = async () => {
      if (w) return;
      const p = S3.trim();
      if (p && !/^(https?:\/\/|\/|#)/.test(p)) {
        a("\u8DF3\u8F6C\u94FE\u63A5\u9700\u4EE5 http(s):// \u3001/ \u6216 # \u5F00\u5934");
        return;
      }
      if (d && !c.trim() && !f.trim() && !k) {
        a("\u542F\u7528\u5F39\u7A97\u9700\u8981\u5148\u586B\u5199\u6807\u9898/\u6B63\u6587\u6216\u4E0A\u4F20\u56FE\u7247");
        return;
      }
      g2(true);
      try {
        const s = await Ge3({ enabled: d, title: c.trim(), content: f.trim(), url: p });
        u(s.popup.enabled), h(s.popup.title), b2(s.popup.content), C2(s.popup.url), t("\u521D\u59CB\u5F39\u7A97\u8BBE\u7F6E\u5DF2\u4FDD\u5B58\uFF0C\u7528\u6237\u7AEF\u5237\u65B0\u540E\u751F\u6548");
      } catch (s) {
        n(s, "\u4FDD\u5B58\u5931\u8D25");
      } finally {
        g2(false);
      }
    };
    return N ? W.jsxs("div", { className: "flex flex-col gap-4", children: [W.jsxs("div", { className: "flex items-center justify-between gap-3", children: [W.jsxs("div", { children: [W.jsx("h3", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: "\u521D\u59CB\u5F39\u7A97" }), W.jsx("p", { className: "mt-0.5 text-xs text-slate-400 dark:text-slate-500", children: "\u8BBF\u5BA2\u8FDB\u5165\u7F51\u7AD9\u65F6\u5F39\u51FA\u4E00\u6B21\uFF1B\u66F4\u65B0\u5185\u5BB9\u540E\u4F1A\u5BF9\u6240\u6709\u8BBF\u5BA2\u91CD\u65B0\u5F39\u51FA" })] }), W.jsx(V2, { checked: d, onChange: u, label: "\u542F\u7528\u521D\u59CB\u5F39\u7A97" })] }), W.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [W.jsxs("div", { className: "flex flex-col items-center gap-2", children: [k ? W.jsx("img", { src: k, alt: "\u5F39\u7A97\u56FE\u7247\u9884\u89C8", className: "h-32 w-32 rounded-xl border border-slate-100 object-cover dark:border-slate-800" }) : W.jsx("div", { className: "flex h-32 w-32 items-center justify-center rounded-xl border border-dashed border-slate-200 text-[11px] text-slate-400 dark:border-slate-700 dark:text-slate-500", children: "\u672A\u4E0A\u4F20\u56FE\u7247" }), W.jsxs("div", { className: "flex items-center gap-1.5", children: [W.jsxs("button", { type: "button", className: "btn-ghost", onClick: () => {
      var p;
      return (p = l.current) == null ? void 0 : p.click();
    }, disabled: w, children: [W.jsx(Aa3, { className: "h-3.5 w-3.5" }), k ? "\u66F4\u6362" : "\u4E0A\u4F20"] }), k && W.jsx("button", { type: "button", className: "btn-ghost !text-red-500", onClick: o, disabled: w, "aria-label": "\u79FB\u9664\u5F39\u7A97\u56FE\u7247", children: W.jsx(Pa3, { className: "h-3.5 w-3.5" }) })] }), W.jsx("input", { ref: l, type: "file", accept: "image/png,image/jpeg,image/webp", className: "hidden", onChange: x })] }), W.jsxs("div", { className: "flex flex-1 flex-col gap-3", children: [W.jsxs("label", { className: "flex flex-col gap-1.5", children: [W.jsx("span", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: "\u6807\u9898\uFF08\u6700\u957F 40 \u5B57\uFF09" }), W.jsx("input", { type: "text", value: c, maxLength: 40, onChange: (p) => h(p.target.value), placeholder: "\u5982\uFF1A\u6B22\u8FCE\u4F7F\u7528\u8BFE\u8868\u67E5\u8BE2", className: "input-base" })] }), W.jsxs("label", { className: "flex flex-col gap-1.5", children: [W.jsx("span", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: "\u8DF3\u8F6C\u94FE\u63A5\uFF08\u53EF\u9009\uFF09" }), W.jsx("input", { type: "text", value: S3, onChange: (p) => C2(p.target.value), placeholder: "https://example.com\uFF08\u586B\u5199\u540E\u5F39\u7A97\u663E\u793A\u300C\u4E86\u89E3\u66F4\u591A\u300D\u6309\u94AE\uFF09", className: "input-base" })] })] })] }), W.jsxs("label", { className: "flex flex-col gap-1.5", children: [W.jsx("span", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: "\u6B63\u6587\uFF08\u652F\u6301\u591A\u884C\uFF0C\u6700\u957F 2000 \u5B57\uFF09" }), W.jsx("textarea", { value: f, maxLength: 2e3, rows: 4, onChange: (p) => b2(p.target.value), placeholder: "\u5728\u6B64\u586B\u5199\u516C\u544A / \u8BF4\u660E\u5185\u5BB9\uFF0C\u652F\u6301\u6362\u884C\u3002", className: "input-base h-auto resize-y py-2 leading-relaxed" })] }), W.jsx("p", { className: "text-[11px] leading-relaxed text-slate-400 dark:text-slate-500", children: "\u56FE\u7247\u652F\u6301 PNG / JPEG / WebP\uFF0C2MB \u4EE5\u5185\u3002\u6807\u9898\u3001\u6B63\u6587\u3001\u56FE\u7247\u81F3\u5C11\u8BBE\u7F6E\u4E00\u9879\u624D\u80FD\u542F\u7528\u3002" }), W.jsx("div", { className: "flex justify-end", children: W.jsx("button", { type: "button", className: "btn-primary", onClick: m, disabled: w, children: w ? "\u5904\u7406\u4E2D\u2026" : "\u4FDD\u5B58\u5F39\u7A97\u8BBE\u7F6E" }) })] }) : W.jsx("div", { className: "skeleton h-56 w-full", "aria-busy": "true" });
  }
  function se4({ open: t, title: a, description: r, confirmText: d = "\u786E\u8BA4", danger: u, busy: c, onConfirm: h, onCancel: f }) {
    return W.jsx(Cc, { children: t && W.jsxs(Rc.div, { className: "fixed inset-0 z-50 flex items-center justify-center px-4", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.15 }, role: "alertdialog", "aria-modal": "true", "aria-label": a, children: [W.jsx("div", { className: "absolute inset-0 bg-black/45", onClick: c ? void 0 : f, "aria-hidden": "true" }), W.jsxs(Rc.div, { className: "card relative z-10 w-full max-w-sm p-6", initial: { opacity: 0, scale: 0.94, y: 8 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.94, y: 8 }, transition: { duration: 0.18 }, children: [W.jsxs("div", { className: "flex items-start gap-3", children: [u && W.jsx("span", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 dark:bg-red-500/10", children: W.jsx(_a2, { className: "h-5 w-5" }) }), W.jsxs("div", { className: "min-w-0", children: [W.jsx("h3", { className: "text-base font-semibold text-slate-800 dark:text-slate-100", children: a }), r && W.jsx("p", { className: "mt-1.5 break-words text-sm leading-relaxed text-slate-500 dark:text-slate-400", children: r })] })] }), W.jsxs("div", { className: "mt-5 flex justify-end gap-2", children: [W.jsx("button", { type: "button", onClick: f, disabled: c, className: "btn-ghost", children: "\u53D6\u6D88" }), W.jsx("button", { type: "button", onClick: h, disabled: c, className: "inline-flex min-h-[40px] items-center justify-center rounded-xl px-4 text-sm font-semibold text-white shadow-sm transition active:scale-[0.98] disabled:opacity-50 " + (u ? "bg-red-500 hover:bg-red-600" : "bg-brand-500 hover:bg-brand-600"), children: c ? "\u5904\u7406\u4E2D\u2026" : d })] })] })] }) });
  }
  function xt3({ open: t, onClose: a, onChanged: r }) {
    const [d, u] = v.useState(""), [c, h] = v.useState(""), [f, b2] = v.useState(""), [k, v2] = v.useState(""), [S3, C2] = v.useState(false), N = () => {
      u(""), h(""), b2(""), v2("");
    }, j3 = async () => {
      if (!S3) {
        if (c.length < 6) {
          v2("\u65B0\u5BC6\u7801\u81F3\u5C11 6 \u4F4D");
          return;
        }
        if (c !== f) {
          v2("\u4E24\u6B21\u8F93\u5165\u7684\u65B0\u5BC6\u7801\u4E0D\u4E00\u81F4");
          return;
        }
        C2(true), v2("");
        try {
          await Oe3(d, c), N(), r();
        } catch (w) {
          v2(w instanceof E2 ? w.message : "\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
        } finally {
          C2(false);
        }
      }
    };
    return W.jsx(Cc, { children: t && W.jsxs(Rc.div, { className: "fixed inset-0 z-50 flex items-center justify-center px-4", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.15 }, role: "dialog", "aria-modal": "true", "aria-label": "\u4FEE\u6539\u7BA1\u7406\u5458\u5BC6\u7801", children: [W.jsx("div", { className: "absolute inset-0 bg-black/45", onClick: S3 ? void 0 : () => {
      N(), a();
    }, "aria-hidden": "true" }), W.jsxs(Rc.div, { className: "card relative z-10 w-full max-w-sm p-6", initial: { opacity: 0, scale: 0.94, y: 8 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.94, y: 8 }, transition: { duration: 0.18 }, children: [W.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [W.jsxs("h3", { className: "flex items-center gap-2 text-base font-semibold text-slate-800 dark:text-slate-100", children: [W.jsx(Oa3, { className: "h-4 w-4 text-brand-500" }), "\u4FEE\u6539\u7BA1\u7406\u5458\u5BC6\u7801"] }), W.jsx("button", { type: "button", onClick: () => {
      N(), a();
    }, className: "flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800", "aria-label": "\u5173\u95ED", children: W.jsx(K3, { className: "h-4 w-4" }) })] }), W.jsxs("div", { className: "space-y-3", children: [W.jsx("input", { type: "password", value: d, onChange: (w) => {
      u(w.target.value), v2("");
    }, placeholder: "\u539F\u5BC6\u7801", className: "input-base", "aria-label": "\u539F\u5BC6\u7801" }), W.jsx("input", { type: "password", value: c, onChange: (w) => {
      h(w.target.value), v2("");
    }, placeholder: "\u65B0\u5BC6\u7801\uFF08\u81F3\u5C11 6 \u4F4D\uFF09", className: "input-base", "aria-label": "\u65B0\u5BC6\u7801" }), W.jsx("input", { type: "password", value: f, onChange: (w) => {
      b2(w.target.value), v2("");
    }, onKeyDown: (w) => w.key === "Enter" && j3(), placeholder: "\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801", className: "input-base", "aria-label": "\u786E\u8BA4\u65B0\u5BC6\u7801" })] }), k && W.jsx("p", { className: "mt-2 text-sm text-red-500", role: "alert", children: k }), W.jsx("button", { type: "button", onClick: j3, disabled: !d || !c || !f || S3, className: "btn-primary mt-4 w-full", children: S3 ? "\u63D0\u4EA4\u4E2D\u2026" : "\u786E\u8BA4\u4FEE\u6539" })] })] }) });
  }
  function pt3() {
    const [t, a] = v.useState(() => !!K4());
    return v.useEffect(() => {
      se3(ee3());
    }, []), t ? W.jsx(mt3, { onLogout: () => {
      Te3(), a(false);
    } }) : W.jsx(Ze3, { onSuccess: () => a(true) });
  }
  function mt3({ onLogout: t }) {
    const [a, r] = v.useState(null), [d, u] = v.useState([]), [c, h] = v.useState(null), [f, b2] = v.useState(null), [k, v2] = v.useState(false), [S3, C2] = v.useState(false), [N, j3] = v.useState(false), w = v.useRef(null), g2 = v.useCallback((s, I3) => {
      h({ type: s, text: I3 }), w.current && clearTimeout(w.current), w.current = setTimeout(() => h(null), 4e3);
    }, []), l = v.useCallback(async () => {
      try {
        const [s, I3] = await Promise.all([Ae3(), Be3()]);
        r(s), u(I3);
      } catch (s) {
        if (s instanceof E2 && s.status === 401) {
          t();
          return;
        }
        g2("error", s instanceof E2 ? s.message : "\u52A0\u8F7D\u5931\u8D25"), r((I3) => I3 ?? []);
      }
    }, [t, g2]);
    v.useEffect(() => {
      l();
    }, [l]);
    const n = async () => {
      if (!(!f || N)) {
        j3(true);
        try {
          await Le3(f.id), g2("success", `\u5DF2\u5220\u9664 ${f.label}\uFF08Excel \u4E0E\u6570\u636E\u6587\u4EF6\u5747\u5DF2\u79FB\u9664\uFF09`), b2(null), await l();
        } catch (s) {
          g2("error", s instanceof E2 ? s.message : "\u5220\u9664\u5931\u8D25");
        } finally {
          j3(false);
        }
      }
    }, x = async () => {
      if (!N) {
        j3(true);
        try {
          await De3(), g2("success", "\u5168\u91CF\u91CD\u5EFA\u5B8C\u6210\uFF0C\u6240\u6709\u5B66\u671F\u6570\u636E\u5DF2\u6309\u6E90 Excel \u91CD\u65B0\u751F\u6210"), v2(false), await l();
        } catch (s) {
          g2("error", s instanceof E2 ? s.message : "\u91CD\u5EFA\u5931\u8D25");
        } finally {
          j3(false);
        }
      }
    }, o = async (s) => {
      try {
        await Ye3(s.id);
      } catch (I3) {
        g2("error", I3 instanceof E2 ? I3.message : "\u4E0B\u8F7D\u5931\u8D25");
      }
    }, m = (a ?? []).reduce((s, I3) => s + (I3.courseCount || 0), 0), p = (a ?? []).reduce((s, I3) => s + (I3.classCount || 0), 0);
    return W.jsxs("div", { className: "min-h-screen pb-16", children: [W.jsx("header", { className: "sticky top-0 z-30 border-b border-white/10 bg-brand-500/95 text-white shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/95", children: W.jsxs("div", { className: "mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3", children: [W.jsxs("div", { className: "flex items-center gap-2", children: [W.jsx(nt3, { className: "h-5 w-5 opacity-90" }), W.jsx("h1", { className: "text-lg font-semibold tracking-wide", children: "\u8BFE\u8868\u7BA1\u7406\u540E\u53F0" })] }), W.jsxs("div", { className: "flex items-center gap-1.5", children: [W.jsxs("a", { href: "#/", className: "flex h-9 items-center gap-1.5 rounded-lg bg-white/10 px-3 text-xs font-medium transition-colors hover:bg-white/20", children: [W.jsx(fs3, { className: "h-3.5 w-3.5" }), "\u67E5\u8BE2\u9996\u9875"] }), W.jsx("button", { type: "button", onClick: () => C2(true), className: "flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20", "aria-label": "\u4FEE\u6539\u5BC6\u7801", title: "\u4FEE\u6539\u5BC6\u7801", children: W.jsx(Oa3, { className: "h-4 w-4" }) }), W.jsx("button", { type: "button", onClick: t, className: "flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20", "aria-label": "\u9000\u51FA\u767B\u5F55", title: "\u9000\u51FA\u767B\u5F55", children: W.jsx(Da3, { className: "h-4 w-4" }) })] })] }) }), W.jsxs("main", { className: "mx-auto flex w-full max-w-4xl flex-col gap-5 px-4 py-5", children: [W.jsx(Cc, { children: c && W.jsxs(Rc.div, { className: "flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium " + (c.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300" : "border-red-200 bg-red-50 text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"), initial: { opacity: 0, y: -8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, role: "status", children: [c.type === "error" && W.jsx(_a2, { className: "h-4 w-4 flex-shrink-0" }), c.text] }, c.text) }), W.jsxs("section", { className: "grid grid-cols-3 gap-3", children: [W.jsx(_2, { icon: W.jsx(Wa3, { className: "h-5 w-5" }), label: "\u5B66\u671F", value: a ? String(a.length) : "\u2026" }), W.jsx(_2, { icon: W.jsx(gs3, { className: "h-5 w-5" }), label: "\u8BFE\u7A0B\u603B\u6570", value: a ? String(m) : "\u2026" }), W.jsx(_2, { icon: W.jsx(dt3, { className: "h-5 w-5" }), label: "\u73ED\u7EA7\u603B\u6570", value: a ? String(p) : "\u2026" })] }), W.jsxs("section", { className: "card p-5", children: [W.jsx(T, { title: "\u4E0A\u4F20 / \u66F4\u65B0\u8BFE\u8868", hint: "\u4E0A\u4F20\u540C\u5B66\u5E74\u5B66\u671F\u7684\u6587\u4EF6\u5C06\u8986\u76D6\u539F\u6709\u6570\u636E" }), W.jsx(at2, { onUploaded: (s) => {
      g2("success", s), l();
    }, onError: (s) => g2("error", s) })] }), W.jsxs("section", { className: "card p-5", children: [W.jsxs("div", { className: "mb-4 flex items-center justify-between gap-2", children: [W.jsx(T, { title: "\u5B66\u671F\u6570\u636E", hint: "\u5220\u9664\u4F1A\u540C\u65F6\u79FB\u9664 Excel \u6E90\u6587\u4EF6\u4E0E\u751F\u6210\u7684\u6570\u636E", noMargin: true }), W.jsxs("div", { className: "flex items-center gap-2", children: [W.jsxs("button", { type: "button", onClick: () => l(), className: "btn-ghost", "aria-label": "\u5237\u65B0\u5217\u8868", children: [W.jsx(La3, { className: "h-4 w-4" }), "\u5237\u65B0"] }), W.jsxs("button", { type: "button", onClick: () => v2(true), className: "btn-ghost", title: "\u6309\u5168\u90E8\u6E90 Excel \u91CD\u65B0\u751F\u6210\u6240\u6709\u5B66\u671F\u6570\u636E", children: [W.jsx(Wa3, { className: "h-4 w-4" }), "\u5168\u91CF\u91CD\u5EFA"] })] })] }), a === null ? W.jsxs("div", { className: "space-y-2", "aria-busy": "true", children: [W.jsx("div", { className: "skeleton h-16 w-full" }), W.jsx("div", { className: "skeleton h-16 w-full" })] }) : a.length === 0 ? W.jsxs("div", { className: "flex flex-col items-center gap-2 py-10 text-center", children: [W.jsx($a3, { className: "h-10 w-10 text-slate-300 dark:text-slate-600" }), W.jsx("p", { className: "text-sm font-medium text-slate-500 dark:text-slate-400", children: "\u8FD8\u6CA1\u6709\u4EFB\u4F55\u5B66\u671F\u6570\u636E" }), W.jsx("p", { className: "text-xs text-slate-400 dark:text-slate-500", children: "\u4F7F\u7528\u4E0A\u65B9\u7684\u4E0A\u4F20\u533A\u6DFB\u52A0\u7B2C\u4E00\u4E2A\u8BFE\u8868 Excel \u5427" })] }) : W.jsx("ul", { className: "space-y-2.5", children: a.map((s) => W.jsx(Rc.li, { layout: true, initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, className: "rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900", children: W.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [W.jsxs("div", { className: "min-w-0 flex-1", children: [W.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [W.jsx("h3", { className: "text-sm font-semibold text-slate-800 dark:text-slate-100", children: s.label }), W.jsx("span", { className: "rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-400 dark:bg-slate-800 dark:text-slate-500", children: s.id }), !s.hasExcel && W.jsx("span", { className: "rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-medium text-amber-600 dark:bg-amber-500/10 dark:text-amber-400", title: "\u4EC5\u5B58\u5728\u751F\u6210\u7684\u6570\u636E\u6587\u4EF6\uFF0C\u6E90 Excel \u5DF2\u4E0D\u5728\u670D\u52A1\u5668\u4E0A", children: "\u65E0\u6E90\u6587\u4EF6" }), s.error && W.jsx("span", { className: "rounded-md bg-red-50 px-1.5 py-0.5 text-[10px] font-medium text-red-500 dark:bg-red-500/10", children: "\u6570\u636E\u5F02\u5E38" })] }), W.jsxs("p", { className: "mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-slate-400 dark:text-slate-500", children: [W.jsxs("span", { children: ["\u8BFE\u7A0B ", s.courseCount, " \u6761"] }), W.jsxs("span", { children: ["\u73ED\u7EA7 ", s.classCount, " \u4E2A"] }), W.jsxs("span", { children: ["\u6570\u636E ", Ma3(s.jsonSize)] }), s.hasExcel && W.jsxs("span", { children: ["Excel ", Ma3(s.excelSize)] }), s.updatedAt && W.jsxs("span", { children: ["\u66F4\u65B0\u4E8E ", ns3(s.updatedAt)] })] })] }), W.jsxs("div", { className: "flex items-center gap-1.5", children: [s.hasExcel && W.jsx(le3, { label: "\u4E0B\u8F7D\u6E90 Excel", onClick: () => o(s), children: W.jsx(hs3, { className: "h-4 w-4" }) }), W.jsx(le3, { label: "\u5220\u9664 " + s.label, danger: true, onClick: () => b2(s), children: W.jsx(Pa3, { className: "h-4 w-4" }) })] })] }) }, s.id)) })] }), W.jsxs("section", { className: "card p-5", children: [W.jsx(T, { title: "\u7F51\u7AD9\u54C1\u724C", hint: "\u81EA\u5B9A\u4E49\u7F51\u7AD9\u540D\u79F0\u3001\u5DE6\u4E0A\u89D2 Logo \u548C\u6D4F\u89C8\u5668\u6807\u7B7E\u9875\u56FE\u6807\uFF0C\u4FDD\u5B58\u540E\u7528\u6237\u5237\u65B0\u9875\u9762\u5373\u751F\u6548" }), W.jsx(lt2, { onSaved: (s) => {
      g2("success", s), l();
    }, onError: (s) => g2("error", s), onAuthExpired: t })] }), W.jsxs("section", { className: "card p-5", children: [W.jsx(T, { title: "\u7AD9\u70B9\u8BBE\u7F6E", hint: "\u5168\u5C40\u6C34\u5370\u4E0E\u60AC\u6D6E\u5E7F\u544A\u5C55\u793A\u5728\u7528\u6237\u7AEF\uFF0C\u4FDD\u5B58\u540E\u7528\u6237\u5237\u65B0\u9875\u9762\u5373\u751F\u6548" }), W.jsx(st3, { onSaved: (s) => {
      g2("success", s), l();
    }, onError: (s) => g2("error", s), onAuthExpired: t })] }), W.jsxs("section", { className: "card p-5", children: [W.jsx(T, { title: "\u5E95\u680F\u5BFC\u822A", hint: "\u914D\u7F6E\u7528\u6237\u7AEF\u5E95\u90E8\u7684\u81EA\u5B9A\u4E49\u6309\u94AE\uFF08\u56FE\u6807 + \u540D\u79F0 + \u89D2\u6807 + \u8DF3\u8F6C\u94FE\u63A5\uFF09\uFF0C\u4FDD\u5B58\u540E\u7528\u6237\u5237\u65B0\u5373\u751F\u6548" }), W.jsx(rt2, { onSaved: (s) => {
      g2("success", s), l();
    }, onError: (s) => g2("error", s), onAuthExpired: t })] }), W.jsxs("section", { className: "card p-5", children: [W.jsx(T, { title: "\u6EDA\u52A8\u516C\u544A", hint: "\u9876\u680F\u4E0B\u65B9\u4ECE\u53F3\u5411\u5DE6\u6EDA\u52A8\u7684\u516C\u544A\u6587\u672C\uFF0C\u4FDD\u5B58\u540E\u7528\u6237\u5237\u65B0\u5373\u751F\u6548" }), W.jsx(ct3, { onSaved: (s) => {
      g2("success", s), l();
    }, onError: (s) => g2("error", s), onAuthExpired: t })] }), W.jsxs("section", { className: "card p-5", children: [W.jsx(T, { title: "\u521D\u59CB\u5F39\u7A97", hint: "\u8BBF\u5BA2\u8FDB\u5165\u7F51\u7AD9\u65F6\u5F39\u51FA\u7684\u516C\u544A\u5F39\u7A97\uFF0C\u652F\u6301\u6807\u9898\u3001\u6B63\u6587\u3001\u56FE\u7247\u4E0E\u8DF3\u8F6C\u94FE\u63A5" }), W.jsx(ot3, { onSaved: (s) => {
      g2("success", s), l();
    }, onError: (s) => g2("error", s), onAuthExpired: t })] }), W.jsxs("section", { className: "card p-5", children: [W.jsx(T, { title: "\u5E95\u90E8\u6A2A\u5E45\u5E7F\u544A", hint: "\u7528\u6237\u7AEF\u9875\u9762\u5E95\u90E8\u7684\u901A\u680F\u5E7F\u544A\u56FE\uFF08\u5982\u8FD0\u8425\u5546 Logo\uFF09\uFF0C\u652F\u6301\u70B9\u51FB\u8DF3\u8F6C" }), W.jsx(dt4, { onSaved: (s) => {
      g2("success", s), l();
    }, onError: (s) => g2("error", s), onAuthExpired: t })] }), W.jsxs("section", { className: "card p-5", children: [W.jsx(T, { title: "\u64CD\u4F5C\u65E5\u5FD7", hint: "\u6700\u8FD1 200 \u6761\u7BA1\u7406\u64CD\u4F5C\u8BB0\u5F55" }), d.length === 0 ? W.jsx("p", { className: "py-4 text-center text-xs text-slate-400 dark:text-slate-500", children: "\u6682\u65E0\u65E5\u5FD7" }) : W.jsx("div", { className: "max-h-64 overflow-y-auto rounded-xl bg-slate-50 p-3 font-mono text-[11px] leading-relaxed text-slate-500 dark:bg-slate-800/60 dark:text-slate-400", children: d.map((s, I3) => W.jsx("p", { className: "break-all border-b border-slate-100 py-1 last:border-0 dark:border-slate-800", children: s }, I3)) })] })] }), W.jsx(se4, { open: f !== null, title: f ? `\u5220\u9664 ${f.label}\uFF1F` : "", description: "\u5C06\u540C\u65F6\u5220\u9664\u6E90 Excel \u6587\u4EF6\u4E0E\u751F\u6210\u7684\u8BFE\u8868\u6570\u636E\uFF0C\u7528\u6237\u7AEF\u5C06\u65E0\u6CD5\u518D\u67E5\u8BE2\u8BE5\u5B66\u671F\u3002\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002", confirmText: "\u5220\u9664", danger: true, busy: N, onConfirm: n, onCancel: () => b2(null) }), W.jsx(se4, { open: k, title: "\u5168\u91CF\u91CD\u5EFA\u6240\u6709\u5B66\u671F\u6570\u636E\uFF1F", description: "\u5C06\u6309\u670D\u52A1\u5668\u4E0A\u73B0\u5B58\u7684\u5168\u90E8 Excel \u6E90\u6587\u4EF6\u91CD\u65B0\u89E3\u6790\u751F\u6210\u6570\u636E\u6587\u4EF6\uFF0C\u5E76\u91CD\u5EFA\u5B66\u671F\u7D22\u5F15\u3002\u9002\u7528\u4E8E\u89E3\u6790\u89C4\u5219\u66F4\u65B0\u540E\u7684\u6570\u636E\u5237\u65B0\u3002", confirmText: "\u5F00\u59CB\u91CD\u5EFA", busy: N, onConfirm: x, onCancel: () => v2(false) }), W.jsx(xt3, { open: S3, onClose: () => C2(false), onChanged: () => {
      C2(false), g2("success", "\u5BC6\u7801\u5DF2\u4FEE\u6539\uFF0C\u4E0B\u6B21\u767B\u5F55\u8BF7\u4F7F\u7528\u65B0\u5BC6\u7801");
    } })] });
  }
  function _2({ icon: t, label: a, value: r }) {
    return W.jsxs("div", { className: "card flex items-center gap-3 p-4", children: [W.jsx("span", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-300", children: t }), W.jsxs("div", { className: "min-w-0", children: [W.jsx("p", { className: "truncate text-lg font-bold leading-tight text-slate-800 dark:text-slate-100", children: r }), W.jsx("p", { className: "text-xs text-slate-400 dark:text-slate-500", children: a })] })] });
  }
  function T({ title: t, hint: a, noMargin: r }) {
    return W.jsxs("div", { className: r ? "" : "mb-4", children: [W.jsxs("h2", { className: "flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200", children: [W.jsx("span", { className: "inline-block h-4 w-1 rounded-full bg-brand-400", "aria-hidden": "true" }), t] }), a && W.jsx("p", { className: "mt-0.5 pl-3 text-xs text-slate-400 dark:text-slate-500", children: a })] });
  }
  function le3({ children: t, label: a, danger: r, onClick: d }) {
    return W.jsx("button", { type: "button", onClick: d, "aria-label": a, title: a, className: "flex h-9 w-9 items-center justify-center rounded-lg transition-colors " + (r ? "bg-red-50 text-red-500 hover:bg-red-100 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20" : "bg-brand-50 text-brand-600 hover:bg-brand-100 dark:bg-brand-500/10 dark:text-brand-300 dark:hover:bg-brand-500/20"), children: t });
  }
  var xe3, me3, Y2, J3, E2, et3, R2;
  var init_AdminApp_DEDpPrVC = __esm({
    "assets/AdminApp-DEDpPrVC.js"() {
      init_motion_CBSrzxBb();
      init_index_Cmv43DoB();
      init_react_C2245jk2();
      xe3 = Object.defineProperty;
      me3 = (t, a, r) => a in t ? xe3(t, a, { enumerable: true, configurable: true, writable: true, value: r }) : t[a] = r;
      Y2 = (t, a, r) => me3(t, typeof a != "symbol" ? a + "" : a, r);
      J3 = "schedule.admin.token";
      E2 = class extends Error {
        constructor(r, d) {
          super(d);
          Y2(this, "status");
          this.status = r;
        }
      };
      et3 = /(\d{4}-\d{4})全校课表_第(\d+)学期\.xlsx$/;
      R2 = 5;
    }
  });

  // assets/index-Cmv43DoB.js
  function U4(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t);
  }
  async function ce3(t, s) {
    let a;
    try {
      a = await fetch(t, { cache: "no-cache" });
    } catch {
      throw new Error(`${s}\uFF1A\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u91CD\u8BD5`);
    }
    if (!a.ok) {
      let r = "";
      try {
        const n = await a.json();
        typeof n.detail == "string" && (r = `\uFF1A${n.detail}`);
      } catch {
      }
      throw new Error(`${s}${r || `\uFF1AHTTP ${a.status} ${a.statusText}`}`);
    }
    return a.json();
  }
  async function $t3() {
    const t = await ce3(_t3, "\u5B66\u671F\u7D22\u5F15\u52A0\u8F7D\u5931\u8D25");
    if (!U4(t) || !Array.isArray(t.terms)) throw new Error("\u5B66\u671F\u7D22\u5F15\u683C\u5F0F\u65E0\u6548");
    return t;
  }
  async function Wt3(t) {
    const s = Ee3.get(t);
    if (s) return s;
    const a = ne3.get(t);
    if (a) return a;
    const r = `/api/schedule/${encodeURIComponent(t)}/catalog`, n = ce3(r, `\u8BFE\u8868\u76EE\u5F55\u52A0\u8F7D\u5931\u8D25\uFF08${t}\uFF09`).then((l) => (zt3(l), Ee3.set(t, l), l)).finally(() => ne3.delete(t));
    return ne3.set(t, n), n;
  }
  async function Ht3(t, s, a) {
    const r = JSON.stringify([t, s, a]), n = Ie3.get(r);
    if (n) return n;
    const l = le4.get(r);
    if (l) return l;
    const i = new URLSearchParams({ kind: s, name: a }), d = `/api/schedule/${encodeURIComponent(t)}/query?${i}`, u = ce3(d, "\u8BFE\u8868\u67E5\u8BE2\u5931\u8D25").then((m) => (Bt3(m), Ie3.set(r, m), m)).finally(() => le4.delete(r));
    return le4.set(r, u), u;
  }
  function zt3(t) {
    if (!U4(t) || !U4(t.term) || typeof t.term.label != "string" || !Array.isArray(t.classNames) || !U4(t.collegeTree) || !Array.isArray(t.teacherNames) || typeof t.maxWeek != "number") throw new Error("\u8BFE\u8868\u76EE\u5F55\u683C\u5F0F\u65E0\u6548");
  }
  function Bt3(t) {
    if (!U4(t) || typeof t.termId != "string" || t.kind !== "class" && t.kind !== "teacher" || typeof t.name != "string" || !Array.isArray(t.courses)) throw new Error("\u8BFE\u8868\u67E5\u8BE2\u7ED3\u679C\u683C\u5F0F\u65E0\u6548");
  }
  function Ft3(t) {
    let s = 2166136261;
    for (let a = 0; a < t.length; a++) s ^= t.charCodeAt(a), s = s + ((s << 1) + (s << 4) + (s << 7) + (s << 8) + (s << 24)) >>> 0;
    return s >>> 0;
  }
  function de4(t) {
    const a = Ft3(t) % Te4.length;
    return Te4[a];
  }
  function Vt3(t, s, a = 50) {
    const r = s.trim();
    if (r.length === 0) return [];
    const n = r.toLowerCase(), l = [], i = [];
    for (const d of t) {
      if (l.length >= a) break;
      const m = d.toLowerCase().indexOf(n);
      m === 0 ? l.push(d) : m > 0 && l.length + i.length < a && i.push(d);
    }
    return [...l, ...i].slice(0, a);
  }
  function qt3(t) {
    const s = [];
    for (const a of t) {
      const r = de4(a.courseName);
      for (const n of a.sessions) s.push({ course: a, session: n, day: n.day, startPeriod: n.startPeriod, span: n.endPeriod - n.startPeriod + 1, colorToken: r });
    }
    return s;
  }
  function ue2(t) {
    try {
      const s = localStorage.getItem(t);
      return s ? JSON.parse(s) : null;
    } catch {
      return null;
    }
  }
  function te4(t, s) {
    try {
      localStorage.setItem(t, JSON.stringify(s));
    } catch {
    }
  }
  function Xe4(t) {
    return typeof t == "object" && t !== null && (t.kind === "class" || t.kind === "teacher") && typeof t.name == "string" && t.name.length > 0;
  }
  function Ze4(t, s) {
    return Array.isArray(t) ? t.filter(Xe4).slice(0, s) : [];
  }
  function me4() {
    return Ze4(ue2(Ye4), Ge4);
  }
  function Ut3(t) {
    return me4().some((s) => Z3(s, t));
  }
  function Kt3(t) {
    const s = me4(), a = s.some((r) => Z3(r, t)) ? s.filter((r) => !Z3(r, t)) : [t, ...s].slice(0, Ge4);
    return te4(Ye4, a), a;
  }
  function et4() {
    return Ze4(ue2(xe4), Je4);
  }
  function Yt2(t) {
    const s = et4().filter((r) => !Z3(r, t)), a = [t, ...s].slice(0, Je4);
    return te4(xe4, a), a;
  }
  function Qt3() {
    te4(xe4, []);
  }
  function Gt3() {
    const t = ue2(Qe4);
    return !t || typeof t.termId != "string" || t.termId.length === 0 || t.target !== null && !Xe4(t.target) ? null : t;
  }
  function Jt3(t) {
    te4(Qe4, t);
  }
  function ee3() {
    try {
      const t = localStorage.getItem(tt4);
      if (t === "light" || t === "dark" || t === "auto") return t;
    } catch {
    }
    return "auto";
  }
  function Xt2() {
    return typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function Zt3(t) {
    return t === "dark" ? true : t === "light" ? false : Xt2();
  }
  function se3(t) {
    const s = Zt3(t), a = document.documentElement;
    a.classList.toggle("dark", s), a.style.colorScheme = s ? "dark" : "light";
  }
  function es3(t) {
    try {
      localStorage.setItem(tt4, t);
    } catch {
    }
    se3(t);
  }
  function ts3(t) {
    return t === "auto" ? "light" : t === "light" ? "dark" : "auto";
  }
  function st4(t) {
    if (typeof window.matchMedia != "function") return () => {
    };
    const s = window.matchMedia("(prefers-color-scheme: dark)"), a = (r) => {
      ee3() === "auto" && (se3("auto"), t(r.matches));
    };
    return typeof s.addEventListener == "function" ? (s.addEventListener("change", a), () => s.removeEventListener("change", a)) : () => {
    };
  }
  function as3(t) {
    return ss3[t] ?? `\u5468${t}`;
  }
  function at3(t, s) {
    return t === s ? `\u7B2C${t}\u8282` : `\u7B2C${t}-${s}\u8282`;
  }
  function rt3(t) {
    const s = t.segments.map((r) => r.start === r.end ? `${r.start}` : `${r.start}-${r.end}`), a = t.parity === "odd" ? "\uFF08\u5355\u5468\uFF09" : t.parity === "even" ? "\uFF08\u53CC\u5468\uFF09" : "";
    return s.length === 0 ? t.raw || "\u5468\u6B21\u672A\u77E5" : `${s.join("\u3001")}\u5468${a}`;
  }
  function rs3() {
    const t = (/* @__PURE__ */ new Date()).getDay();
    return t === 0 ? 7 : t;
  }
  function ns3(t) {
    if (!t) return "";
    const s = new Date(t);
    if (Number.isNaN(s.getTime())) return t;
    const a = (r) => String(r).padStart(2, "0");
    return `${s.getFullYear()}-${a(s.getMonth() + 1)}-${a(s.getDate())} ${a(s.getHours())}:${a(s.getMinutes())}`;
  }
  function Ma3(t) {
    return !Number.isFinite(t) || t < 0 ? "-" : t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(1)} KB` : `${(t / 1024 / 1024).toFixed(2)} MB`;
  }
  function ls3(t) {
    const s = t && typeof t == "object" ? t : {};
    return { siteName: String(s.siteName ?? "\u8BFE\u8868\u67E5\u8BE2").trim() || "\u8BFE\u8868\u67E5\u8BE2", logo: String(s.logo ?? ""), favicon: String(s.favicon ?? "") };
  }
  function os3(t) {
    const s = t && typeof t == "object" ? t : {}, r = (Array.isArray(s.items) ? s.items : []).filter((n) => !!n && typeof n == "object").map((n) => ({ id: String(n.id ?? ""), label: String(n.label ?? ""), icon: String(n.icon ?? "link"), url: String(n.url ?? ""), badge: String(n.badge ?? "") })).filter((n) => n.label && n.url);
    return { enabled: !!s.enabled, items: r };
  }
  function is3(t) {
    const s = t && typeof t == "object" ? t : {};
    return { enabled: !!s.enabled, image: String(s.image ?? ""), url: String(s.url ?? ""), alt: String(s.alt ?? "") };
  }
  function cs3(t) {
    const s = t && typeof t == "object" ? t : {};
    return { enabled: !!s.enabled, title: String(s.title ?? ""), content: String(s.content ?? ""), image: String(s.image ?? ""), url: String(s.url ?? "") };
  }
  function ds3(t) {
    const s = t && typeof t == "object" ? t : {};
    return { enabled: !!s.enabled, text: String(s.text ?? "") };
  }
  async function xs3() {
    try {
      const t = await fetch("/api/site-config", { cache: "no-store" });
      if (!t.ok) return null;
      const s = await t.json();
      return !s || typeof s != "object" || !s.watermark || !s.ad ? null : { branding: ls3(s.branding), watermark: { enabled: !!s.watermark.enabled, text: String(s.watermark.text ?? ""), opacity: Number(s.watermark.opacity) || 0.08 }, ad: { enabled: !!s.ad.enabled, title: String(s.ad.title ?? ""), qrImage: String(s.ad.qrImage ?? "") }, nav: os3(s.nav), banner: is3(s.banner), popup: cs3(s.popup), announcement: ds3(s.announcement) };
    } catch {
      return null;
    }
  }
  function g(t) {
    return { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, ...t };
  }
  function Cs3({ name: t, query: s }) {
    const a = s.trim().toLowerCase(), r = a ? t.toLowerCase().indexOf(a) : -1;
    return r < 0 ? W.jsx(W.Fragment, { children: t }) : W.jsxs(W.Fragment, { children: [t.slice(0, r), W.jsx("mark", { className: "rounded-sm bg-brand-100 px-0.5 font-semibold text-brand-700 dark:bg-brand-500/25 dark:text-brand-200", children: t.slice(r, r + a.length) }), t.slice(r + a.length)] });
  }
  function Me4({ classNames: t, onSelect: s, placeholder: a = "\u641C\u7D22\u73ED\u7EA7\u540D\u5FEB\u901F\u8DF3\u8F6C", noMatchText: r = "\u672A\u627E\u5230\u5339\u914D\u7684\u73ED\u7EA7", ariaLabel: n = "\u641C\u7D22\u73ED\u7EA7" }) {
    const [l, i] = v.useState(""), [d, u] = v.useState(""), [m, x] = v.useState(0), [p, w] = v.useState(false), j3 = v.useRef(null), v2 = v.useRef(null);
    v.useEffect(() => {
      const y2 = setTimeout(() => u(l), 120);
      return () => clearTimeout(y2);
    }, [l]);
    const E3 = d.trim().length > 0, C2 = v.useMemo(() => E3 ? Vt3(t, d, J4) : [], [t, d, E3]);
    v.useEffect(() => x(0), [d]), v.useEffect(() => {
      const y2 = j3.current;
      if (!y2) return;
      const b2 = y2.children[m];
      b2 && typeof b2.scrollIntoView == "function" && b2.scrollIntoView({ block: "nearest" });
    }, [m]);
    const M3 = E3 && C2.length === 0, O3 = !p && E3 && (C2.length > 0 || M3), W4 = (y2) => {
      var b2;
      s(y2), i(""), u(""), (b2 = v2.current) == null || b2.blur();
    }, _3 = (y2) => {
      var b2;
      O3 && (y2.key === "ArrowDown" ? (y2.preventDefault(), x((N) => Math.min(N + 1, C2.length - 1))) : y2.key === "ArrowUp" ? (y2.preventDefault(), x((N) => Math.max(N - 1, 0))) : y2.key === "Enter" && C2[m] ? (y2.preventDefault(), W4(C2[m])) : y2.key === "Escape" && (w(true), (b2 = v2.current) == null || b2.blur()));
    };
    return W.jsxs("div", { className: "relative w-full", children: [W.jsxs("div", { className: "relative", children: [W.jsx("span", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-brand-400", "aria-hidden": "true", children: W.jsx(lt3, { className: "h-5 w-5", strokeWidth: 1.8 }) }), W.jsx("input", { ref: v2, type: "text", inputMode: "search", maxLength: 50, value: l, onChange: (y2) => {
      i(y2.target.value), w(false);
    }, onFocus: () => w(false), onBlur: () => setTimeout(() => w(true), 120), onKeyDown: _3, placeholder: a, "aria-label": n, role: "combobox", "aria-expanded": O3, "aria-autocomplete": "list", className: "h-11 w-full rounded-xl border border-brand-200 bg-white pl-10 pr-9 text-base text-slate-700 placeholder:text-slate-400 shadow-sm outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-brand-500 dark:focus:ring-brand-500/25" }), l.length > 0 && W.jsx("button", { type: "button", onMouseDown: (y2) => y2.preventDefault(), onClick: () => {
      var y2;
      i(""), u(""), (y2 = v2.current) == null || y2.focus();
    }, className: "absolute inset-y-0 right-0 flex items-center pr-3 text-slate-300 transition-colors hover:text-slate-500 dark:text-slate-600 dark:hover:text-slate-400", "aria-label": "\u6E05\u7A7A\u641C\u7D22", children: W.jsx(K3, { className: "h-4 w-4" }) })] }), W.jsx(Cc, { children: O3 && W.jsx(Rc.div, { className: "absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-brand-100 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900", initial: { opacity: 0, y: -6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -6 }, transition: { duration: 0.18 }, children: M3 ? W.jsx("p", { className: "px-4 py-3 text-sm text-slate-500 dark:text-slate-400", children: r }) : W.jsxs(W.Fragment, { children: [C2.length > 10 && W.jsxs("p", { className: "border-b border-slate-100 px-4 py-1.5 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500", children: ["\u5339\u914D ", C2.length, C2.length >= J4 ? "+" : "", " \u6761\uFF0C\u53EF\u6EDA\u52A8\u67E5\u770B"] }), W.jsx("ul", { ref: j3, role: "listbox", className: "max-h-[min(24rem,55vh)] overflow-y-auto overscroll-contain py-1", children: C2.map((y2, b2) => W.jsx("li", { role: "option", "aria-selected": b2 === m, children: W.jsx("button", { type: "button", onMouseDown: (N) => N.preventDefault(), onMouseEnter: () => x(b2), onClick: () => W4(y2), className: "flex min-h-[44px] w-full items-center px-4 py-2 text-left text-sm transition-colors " + (b2 === m ? "bg-brand-50 text-slate-800 dark:bg-brand-500/15 dark:text-slate-100" : "text-slate-700 dark:text-slate-300"), children: W.jsx(Cs3, { name: y2, query: d }) }) }, y2)) }), C2.length >= J4 && W.jsxs("p", { className: "border-t border-slate-100 px-4 py-2 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500", children: ["\u7ED3\u679C\u8F83\u591A\uFF0C\u4EC5\u5C55\u793A\u524D ", J4, " \u6761\uFF0C\u8BF7\u8F93\u5165\u66F4\u7CBE\u786E\u7684\u5173\u952E\u8BCD"] })] }) }) })] });
  }
  function Is3({ bundle: t, onSelect: s }) {
    const [a, r] = v.useState(null), [n, l] = v.useState(null), [i, d] = v.useState("college");
    v.useEffect(() => {
      r(null), l(null), d("college");
    }, [t]);
    const u = Rs3(t), m = a ? Ms3(t, a) : [], x = a && n ? Ls3(t, a, n) : [], p = (j3) => {
      r(j3), l(null), d("major");
    }, w = (j3) => {
      l(j3), d("class");
    };
    return W.jsxs("div", { children: [W.jsx("div", { className: "mb-3 flex items-center gap-1", "aria-hidden": "true", children: Le4.map((j3, v2) => {
      const E3 = Le4.indexOf(i), C2 = v2 < E3 ? "done" : v2 === E3 ? "active" : "todo";
      return W.jsxs("div", { className: "flex items-center gap-1", children: [v2 > 0 && W.jsx("span", { className: "h-px w-4 bg-brand-200 dark:bg-slate-700" }), W.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors " + (C2 === "active" ? "bg-brand-500 text-white" : C2 === "done" ? "bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-200" : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"), children: [v2 + 1, " ", Es3[j3]] })] }, j3);
    }) }), (i === "major" || i === "class") && a && W.jsxs("div", { className: "mb-4 flex flex-wrap items-center gap-1.5 text-sm", children: [W.jsx(Pe4, { label: As3(a), onClick: () => {
      l(null), d("college");
    }, title: a }), i === "class" && n && W.jsxs(W.Fragment, { children: [W.jsx(he3, { className: "h-3.5 w-3.5 text-slate-400" }), W.jsx(Pe4, { label: n, onClick: () => d("major") })] })] }), W.jsxs(Cc, { mode: "wait", children: [i === "college" && W.jsxs(Rc.div, { ...oe4, children: [W.jsx(ie3, { text: "\u9009\u62E9\u5B66\u9662" }), W.jsx("div", { className: "flex flex-col gap-2", role: "listbox", "aria-label": "\u5B66\u9662", children: u.map((j3) => {
      var v2;
      return W.jsx(Ps3, { label: j3, badge: Object.keys(((v2 = t.collegeTree) == null ? void 0 : v2[j3]) ?? {}).length + " \u4E2A\u4E13\u4E1A", onClick: () => p(j3) }, j3);
    }) })] }, "college"), i === "major" && a && W.jsxs(Rc.div, { ...oe4, children: [W.jsx(ie3, { text: "\u9009\u62E9\u4E13\u4E1A" }), W.jsx("div", { className: "flex flex-wrap gap-2", role: "listbox", "aria-label": "\u4E13\u4E1A", children: m.map((j3) => W.jsx(De4, { label: j3, onClick: () => w(j3) }, j3)) })] }, "major"), i === "class" && a && n && W.jsxs(Rc.div, { ...oe4, children: [W.jsx(ie3, { text: "\u9009\u62E9\u73ED\u7EA7" }), W.jsx("div", { className: "flex flex-wrap gap-2", role: "listbox", "aria-label": "\u73ED\u7EA7", children: x.map((j3) => W.jsx(De4, { label: j3, onClick: () => s(j3), accent: true }, j3)) })] }, "class")] })] });
  }
  function Ts3(t, s) {
    const a = Ae4.indexOf(t), r = Ae4.indexOf(s);
    return a !== -1 || r !== -1 ? a === -1 ? -1 : r === -1 ? 1 : a - r : t.localeCompare(s, "zh-Hans-CN");
  }
  function Rs3(t) {
    return Object.keys(t.collegeTree).sort(Ts3);
  }
  function Ms3(t, s) {
    return Object.keys(t.collegeTree[s] ?? {}).sort();
  }
  function Ls3(t, s, a) {
    var r;
    return ((r = t.collegeTree[s]) == null ? void 0 : r[a]) ?? [];
  }
  function As3(t) {
    return t.split(/[、（(]/)[0];
  }
  function ie3({ text: t }) {
    return W.jsx("h3", { className: "mb-2 text-sm font-semibold text-slate-600 dark:text-slate-300", children: t });
  }
  function Pe4({ label: t, onClick: s, title: a }) {
    return W.jsx("button", { type: "button", onClick: s, title: a, className: "inline-flex min-h-[36px] items-center rounded-lg bg-brand-100 px-3 font-medium text-brand-700 transition-colors hover:bg-brand-200 dark:bg-brand-500/20 dark:text-brand-200 dark:hover:bg-brand-500/30", children: t });
  }
  function De4({ label: t, onClick: s, accent: a }) {
    return W.jsx(Rc.button, { type: "button", role: "option", onClick: s, whileTap: { scale: 0.96 }, initial: { opacity: 0, y: 4 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.18 }, className: "inline-flex min-h-[44px] items-center justify-center rounded-xl border px-4 text-sm font-medium transition-colors " + (a ? "border-brand-200 bg-brand-50 text-brand-700 hover:border-brand-300 hover:bg-brand-100 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-200 dark:hover:bg-brand-500/20" : "border-brand-200 bg-brand-50 text-slate-700 hover:bg-brand-100 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800"), children: t });
  }
  function Ps3({ label: t, badge: s, onClick: a }) {
    return W.jsxs(Rc.button, { type: "button", role: "option", onClick: a, whileTap: { scale: 0.99 }, className: "flex min-h-[44px] w-full items-center justify-between gap-2 rounded-xl border border-brand-200 bg-brand-50 px-4 py-2 text-left text-sm font-medium text-slate-700 transition-colors hover:border-brand-300 hover:bg-brand-100 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800", children: [W.jsx("span", { className: "flex-1", children: t }), W.jsxs("span", { className: "flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500", children: [s, W.jsx(he3, { className: "h-3.5 w-3.5" })] })] });
  }
  function Ds3({ bundle: t, onSelect: s }) {
    const [a, r] = v.useState("class"), n = t.teacherNames ?? [];
    return W.jsxs("div", { className: "space-y-5", children: [W.jsxs("div", { className: "flex rounded-xl bg-brand-50 p-1 dark:bg-slate-800/80", role: "tablist", "aria-label": "\u67E5\u8BE2\u6A21\u5F0F", children: [W.jsx(Oe4, { active: a === "class", onClick: () => r("class"), icon: W.jsx(dt3, { className: "h-4 w-4" }), label: "\u6309\u73ED\u7EA7\u67E5\u8BE2" }), W.jsx(Oe4, { active: a === "teacher", onClick: () => r("teacher"), icon: W.jsx(Y3, { className: "h-4 w-4" }), label: "\u6309\u6559\u5E08\u67E5\u8BE2" })] }), a === "class" ? W.jsxs(W.Fragment, { children: [W.jsx(Me4, { classNames: t.classNames, onSelect: (l) => s({ kind: "class", name: l }) }), W.jsxs("div", { className: "flex items-center gap-3", role: "separator", "aria-label": "\u6216\u4F7F\u7528\u9010\u7EA7\u9009\u62E9", children: [W.jsx("span", { className: "h-px flex-1 bg-brand-100 dark:bg-slate-700", "aria-hidden": "true" }), W.jsx("span", { className: "whitespace-nowrap text-xs text-slate-400 dark:text-slate-500", children: "\u6216\u6309\u5B66\u9662 / \u4E13\u4E1A / \u73ED\u7EA7\u9010\u7EA7\u9009\u62E9" }), W.jsx("span", { className: "h-px flex-1 bg-brand-100 dark:bg-slate-700", "aria-hidden": "true" })] }), W.jsx(Is3, { bundle: t, onSelect: (l) => s({ kind: "class", name: l }) })] }) : W.jsxs(W.Fragment, { children: [W.jsx(Me4, { classNames: n, onSelect: (l) => s({ kind: "teacher", name: l }), placeholder: "\u8F93\u5165\u6559\u5E08\u59D3\u540D\u67E5\u8BE2\u8BFE\u8868", noMatchText: "\u672A\u627E\u5230\u5339\u914D\u7684\u6559\u5E08", ariaLabel: "\u641C\u7D22\u6559\u5E08" }), W.jsxs("p", { className: "rounded-xl bg-brand-50/70 px-4 py-3 text-xs leading-relaxed text-slate-500 dark:bg-slate-800/60 dark:text-slate-400", children: ["\u5171\u6536\u5F55 ", n.length, " \u4F4D\u6559\u5E08\u3002\u8F93\u5165\u59D3\u540D\uFF08\u652F\u6301\u90E8\u5206\u5339\u914D\uFF09\u5373\u53EF\u67E5\u770B\u8BE5\u6559\u5E08\u672C\u5B66\u671F\u7684\u5168\u90E8\u8BFE\u7A0B\u5B89\u6392\u3002"] })] })] });
  }
  function Oe4({ active: t, onClick: s, icon: a, label: r }) {
    return W.jsxs("button", { type: "button", role: "tab", "aria-selected": t, onClick: s, className: "flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-lg text-sm font-medium transition-all " + (t ? "bg-white text-brand-600 shadow-sm dark:bg-slate-900 dark:text-brand-200" : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"), children: [a, r] });
  }
  function _e4({ options: t, value: s, onChange: a, placeholder: r, "aria-label": n }) {
    const [l, i] = v.useState(false), d = v.useRef(null), u = t.find((p) => p.value === s), m = (u == null ? void 0 : u.label) || r || "\u8BF7\u9009\u62E9", x = v.useCallback((p) => {
      d.current && !d.current.contains(p.target) && i(false);
    }, []);
    return v.useEffect(() => (document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x)), [x]), W.jsxs("div", { ref: d, className: "relative inline-block", children: [W.jsxs("button", { type: "button", onClick: () => i(!l), "aria-haspopup": "listbox", "aria-expanded": l, "aria-label": n, className: "flex h-10 min-w-[100px] items-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-3 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-brand-100 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:focus:border-brand-500 dark:focus:ring-brand-500/25", children: [W.jsx("span", { className: "flex-1 truncate text-left", children: m }), W.jsx(us3, { className: `h-4 w-4 flex-shrink-0 text-brand-400 transition-transform ${l ? "rotate-180" : ""}`, strokeWidth: 2.5 })] }), W.jsx(Cc, { children: l && W.jsx(Rc.div, { className: "absolute z-20 mt-1 max-h-[min(18rem,50vh)] w-max min-w-full overflow-y-auto overscroll-contain rounded-xl border border-brand-100 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-900", initial: { opacity: 0, y: -6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -6 }, transition: { duration: 0.16 }, role: "listbox", children: t.map((p) => {
      const w = p.value === s;
      return W.jsxs("button", { type: "button", role: "option", "aria-selected": w, onClick: () => {
        a(p.value), i(false);
      }, className: `flex min-h-[42px] w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm transition-colors ${w ? "bg-brand-50 font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200" : "text-slate-600 hover:bg-brand-50/60 dark:text-slate-300 dark:hover:bg-slate-800"}`, children: [W.jsx("span", { className: "truncate", children: p.label }), w && W.jsx(bs3, { className: "h-4 w-4 flex-shrink-0 text-brand-500" })] }, p.value);
    }) }) })] });
  }
  function Os3({ favorites: t, recents: s, onPick: a, onClearRecents: r }) {
    const n = s.filter((l) => !t.some((i) => i.kind === l.kind && i.name === l.name));
    return t.length === 0 && n.length === 0 ? null : W.jsxs(Rc.section, { className: "flex flex-col gap-3", initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.25 }, "aria-label": "\u5FEB\u6377\u5165\u53E3", children: [t.length > 0 && W.jsxs("div", { children: [W.jsxs("h3", { className: "mb-1.5 flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400", children: [W.jsx(be3, { className: "h-3.5 w-3.5 text-amber-400", filled: true }), "\u6211\u7684\u6536\u85CF"] }), W.jsx("div", { className: "flex flex-wrap gap-1.5", children: t.map((l) => W.jsx($e4, { target: l, onPick: a, accent: true }, l.kind + ":" + l.name)) })] }), n.length > 0 && W.jsxs("div", { children: [W.jsxs("h3", { className: "mb-1.5 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400", children: [W.jsxs("span", { className: "flex items-center gap-1", children: [W.jsx(fe3, { className: "h-3.5 w-3.5" }), "\u6700\u8FD1\u67E5\u770B"] }), r && W.jsxs("button", { type: "button", onClick: r, className: "flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[11px] font-normal text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300", children: [W.jsx(K3, { className: "h-3 w-3" }), "\u6E05\u7A7A"] })] }), W.jsx("div", { className: "flex flex-wrap gap-1.5", children: n.map((l) => W.jsx($e4, { target: l, onPick: a }, l.kind + ":" + l.name)) })] })] });
  }
  function $e4({ target: t, onPick: s, accent: a }) {
    return W.jsxs(Rc.button, { type: "button", onClick: () => s(t), whileTap: { scale: 0.95 }, className: "inline-flex min-h-[36px] items-center gap-1 rounded-lg border px-2.5 text-sm font-medium transition-colors " + (a ? "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300 dark:hover:bg-amber-500/20" : "border-brand-100 bg-white text-slate-600 hover:border-brand-300 hover:bg-brand-50 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"), children: [t.kind === "teacher" && W.jsx(Y3, { className: "h-3.5 w-3.5 opacity-60" }), t.name] });
  }
  function _s3(t) {
    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  function $s3(t) {
    const s = _s3(t), a = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="240"><text x="150" y="90" font-size="15" font-family="system-ui, -apple-system, sans-serif" fill="#64748b" text-anchor="middle" transform="rotate(-26 150 90)">' + s + '</text><text x="30" y="210" font-size="15" font-family="system-ui, -apple-system, sans-serif" fill="#64748b" text-anchor="middle" transform="rotate(-26 30 210)">' + s + "</text></svg>";
    return 'url("data:image/svg+xml,' + encodeURIComponent(a) + '")';
  }
  function Ws3({ text: t, opacity: s, fixed: a = true }) {
    const r = v.useMemo(() => $s3(t), [t]);
    return t ? W.jsx("div", { "aria-hidden": "true", className: (a ? "fixed" : "absolute") + " inset-0 z-[70] select-none overflow-hidden pointer-events-none", style: { backgroundImage: r, backgroundRepeat: "repeat", opacity: s } }) : null;
  }
  function Hs3({ title: t, qrImage: s }) {
    const a = v.useRef(null), [r, n] = v.useState(false), l = v.useRef(false), i = () => {
      l.current || n(true);
    };
    return v.useEffect(() => {
      if (!r) return;
      const d = (u) => {
        u.key === "Escape" && n(false);
      };
      return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
    }, [r]), !t && !s ? null : W.jsxs(W.Fragment, { children: [W.jsx("div", { ref: a, className: "pointer-events-none fixed inset-2 z-[80] overflow-hidden", children: W.jsxs(Rc.div, { drag: true, dragConstraints: a, dragElastic: 0.08, dragMomentum: false, whileDrag: { scale: 1.04 }, onDragStart: () => {
      l.current = true;
    }, onDragEnd: () => {
      setTimeout(() => {
        l.current = false;
      }, 0);
    }, className: "pointer-events-auto absolute bottom-16 right-1 flex w-28 cursor-grab touch-none flex-col items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/95 p-2 shadow-lg backdrop-blur active:cursor-grabbing dark:border-slate-700 dark:bg-slate-900/95", role: "complementary", "aria-label": "\u63A8\u5E7F\u4FE1\u606F\uFF1A" + (t || "\u4E8C\u7EF4\u7801"), children: [s && W.jsx("button", { type: "button", onClick: i, className: "cursor-zoom-in rounded-md", "aria-label": "\u653E\u5927\u4E8C\u7EF4\u7801", title: "\u70B9\u6309\u653E\u5927\u4E8C\u7EF4\u7801", children: W.jsx("img", { src: s, alt: t ? t + " \u4E8C\u7EF4\u7801" : "\u63A8\u5E7F\u4E8C\u7EF4\u7801", className: "h-24 w-24 rounded-md object-contain", draggable: false }) }), t && W.jsx("p", { className: "w-full break-words text-center text-[11px] font-medium leading-snug text-slate-600 dark:text-slate-300", children: t })] }) }), W.jsx(Cc, { children: r && s && W.jsxs(Rc.div, { className: "fixed inset-0 z-[90] flex flex-col items-center justify-center gap-4 bg-black/80 px-6 backdrop-blur-sm", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.18 }, onClick: () => n(false), role: "dialog", "aria-modal": "true", "aria-label": (t || "\u63A8\u5E7F") + " \u4E8C\u7EF4\u7801\u5927\u56FE", children: [W.jsx("button", { type: "button", onClick: () => n(false), className: "absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25", "aria-label": "\u5173\u95ED\u5927\u56FE", children: W.jsx(K3, { className: "h-5 w-5" }) }), W.jsx(Rc.img, { src: s, alt: t ? t + " \u4E8C\u7EF4\u7801" : "\u63A8\u5E7F\u4E8C\u7EF4\u7801", onClick: (d) => d.stopPropagation(), className: "h-auto w-full max-w-[min(78vw,20rem)] rounded-2xl bg-white p-3 shadow-2xl", initial: { scale: 0.86, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.9, opacity: 0 }, transition: { duration: 0.2, ease: "easeOut" } }), t && W.jsx("p", { className: "max-w-xs text-center text-sm font-medium leading-relaxed text-white/90", children: t }), W.jsx("p", { className: "text-xs text-white/50", children: "\u70B9\u51FB\u7A7A\u767D\u5904\u5173\u95ED \xB7 \u957F\u6309\u4E8C\u7EF4\u7801\u53EF\u8BC6\u522B" })] }) })] });
  }
  function zs3(t) {
    if (t.startsWith("/") || t.startsWith("#")) {
      window.location.href = t;
      return;
    }
    window.open(t, "_blank", "noopener,noreferrer");
  }
  function Bs3({ items: t }) {
    return t.length === 0 ? null : W.jsx("nav", { className: `fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/70 bg-white/95 backdrop-blur\r
        shadow-[0_-2px_12px_rgba(15,23,42,0.06)] dark:border-slate-800 dark:bg-slate-900/95\r
        dark:shadow-[0_-2px_12px_rgba(0,0,0,0.4)]`, style: { paddingBottom: "env(safe-area-inset-bottom)" }, "aria-label": "\u5E95\u90E8\u5BFC\u822A", children: W.jsx("div", { className: "mx-auto flex max-w-3xl items-stretch", children: t.map((s) => {
      const a = Ss3[s.icon] ?? ut3, r = s.badge.trim();
      return W.jsxs("button", { type: "button", onClick: () => zs3(s.url), className: `group relative flex flex-1 flex-col items-center justify-center gap-0.5\r
                px-1 py-2 text-slate-500 transition-colors hover:text-brand-600\r
                focus:outline-none focus-visible:text-brand-600\r
                dark:text-slate-400 dark:hover:text-brand-300`, title: s.label, children: [W.jsxs("span", { className: "relative flex h-6 w-6 items-center justify-center", children: [W.jsx(a, { className: "h-[22px] w-[22px]" }), r && W.jsx("span", { className: `absolute -right-2.5 -top-1.5 flex h-4 min-w-[1rem] items-center\r
                      justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold\r
                      leading-none text-white shadow-sm`, "aria-hidden": "true", children: r })] }), W.jsxs("span", { className: "max-w-full truncate text-[11px] font-medium leading-tight", children: [s.label, r && W.jsxs("span", { className: "sr-only", children: ["\uFF08", r, "\uFF09"] })] })] }, s.id);
    }) }) });
  }
  function qs3({ text: t }) {
    const s = t.trim(), a = v.useMemo(() => Math.max(Vs3, s.length * Fs3), [s]);
    return s ? W.jsx("div", { className: "border-b border-brand-100 bg-brand-50/80 dark:border-slate-800 dark:bg-slate-900/70", role: "marquee", "aria-label": "\u516C\u544A", children: W.jsxs("div", { className: "mx-auto flex max-w-3xl items-center gap-2 px-4 py-1.5", children: [W.jsx("span", { className: "flex-shrink-0 rounded-md bg-brand-500 px-1.5 py-0.5 text-[10px] font-semibold text-white", children: "\u516C\u544A" }), W.jsx("div", { className: "relative flex-1 overflow-hidden", children: W.jsxs("div", { className: "marquee-track text-xs font-medium text-brand-700 dark:text-brand-200", style: { animationDuration: `${a}s` }, children: [W.jsx("span", { className: "px-6", children: s }), W.jsx("span", { className: "px-6", "aria-hidden": "true", children: s })] }) })] }) }) : null;
  }
  function Us3({ banner: t }) {
    const { image: s, url: a, alt: r } = t;
    if (!s) return null;
    const n = r.trim() || "\u5E7F\u544A", l = W.jsx("img", { src: s, alt: n, className: "mx-auto max-h-24 w-auto max-w-full rounded-xl object-contain", draggable: false });
    return W.jsx("div", { className: "mx-auto w-full max-w-3xl px-4 pb-3", children: W.jsx("div", { className: "overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-2 shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:shadow-soft-dark", children: a ? a.startsWith("/") || a.startsWith("#") ? W.jsx("a", { href: a, "aria-label": n, className: "block", children: l }) : W.jsx("a", { href: a, target: "_blank", rel: "noopener noreferrer", "aria-label": n, className: "block", children: l }) : l }) });
  }
  function Ks3(t) {
    const s = [t.title, t.content, t.url, String(t.image.length)].join("|");
    let a = 5381;
    for (let r = 0; r < s.length; r += 1) a = (a << 5) + a + s.charCodeAt(r) | 0;
    return (a >>> 0).toString(36);
  }
  function Ys3() {
    try {
      return localStorage.getItem(mt4) ?? "";
    } catch {
      return "";
    }
  }
  function Qs3(t) {
    try {
      localStorage.setItem(mt4, t);
    } catch {
    }
  }
  function Gs3({ popup: t }) {
    const s = !!(t.title || t.content || t.image), a = v.useMemo(() => Ks3(t), [t]), [r, n] = v.useState(false);
    v.useEffect(() => {
      if (!s) {
        n(false);
        return;
      }
      n(Ys3() !== a);
    }, [s, a]), v.useEffect(() => {
      if (!r) return;
      const d = (u) => {
        u.key === "Escape" && l();
      };
      return document.addEventListener("keydown", d), document.body.style.overflow = "hidden", () => {
        document.removeEventListener("keydown", d), document.body.style.overflow = "";
      };
    }, [r]);
    const l = () => {
      Qs3(a), n(false);
    }, i = () => {
      const d = t.url.trim();
      d && (d.startsWith("/") || d.startsWith("#") ? window.location.href = d : window.open(d, "_blank", "noopener,noreferrer"), l());
    };
    return W.jsx(Cc, { children: r && s && W.jsxs(Rc.div, { className: "fixed inset-0 z-[75] flex items-center justify-center px-4", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, role: "dialog", "aria-modal": "true", "aria-label": t.title || "\u7F51\u7AD9\u516C\u544A", children: [W.jsx("div", { className: "absolute inset-0 bg-black/50 backdrop-blur-[2px]", onClick: l, "aria-hidden": "true" }), W.jsxs(Rc.div, { className: "relative z-10 flex max-h-[85vh] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-900", initial: { opacity: 0, y: 24, scale: 0.96 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: 24, scale: 0.96 }, transition: { duration: 0.25, ease: "easeOut" }, children: [W.jsx("button", { type: "button", onClick: l, className: "absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-black/10 text-white transition-colors hover:bg-black/25", "aria-label": "\u5173\u95ED\u5F39\u7A97", children: W.jsx(K3, { className: "h-5 w-5" }) }), t.image && W.jsx("img", { src: t.image, alt: t.title || "\u5F39\u7A97\u56FE\u7247", className: "max-h-64 w-full object-cover", draggable: false }), W.jsxs("div", { className: "flex flex-col gap-3 overflow-y-auto px-5 py-5", children: [t.title && W.jsx("h2", { className: "text-lg font-bold leading-snug text-slate-800 dark:text-slate-100", children: t.title }), t.content && W.jsx("p", { className: "whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-600 dark:text-slate-300", children: t.content }), W.jsxs("div", { className: "mt-1 flex items-center justify-end gap-2", children: [t.url.trim() && W.jsx("button", { type: "button", className: "btn-primary", onClick: i, children: "\u4E86\u89E3\u66F4\u591A" }), W.jsx("button", { type: "button", className: "btn-ghost", onClick: l, children: "\u6211\u77E5\u9053\u4E86" })] })] })] })] }) });
  }
  function Zs3(t, s) {
    return `${t}-${s}`;
  }
  function ea3(t) {
    const s = /* @__PURE__ */ new Set();
    for (const a of t) {
      const r = a.startPeriod + a.span - 1;
      for (let n = a.startPeriod; n <= r; n++) s.add(Zs3(a.day, n));
    }
    return s;
  }
  function We4(t) {
    let s = Number.POSITIVE_INFINITY;
    for (const a of t.session.weeks.segments) a.start < s && (s = a.start);
    return s;
  }
  function ta3(t, s) {
    if (t.startPeriod !== s.startPeriod) return t.startPeriod - s.startPeriod;
    const a = We4(t) - We4(s);
    return a !== 0 ? a : t.course.courseName.localeCompare(s.course.courseName, "zh-Hans-CN");
  }
  function sa3(t) {
    const s = /* @__PURE__ */ new Map();
    for (const r of t) {
      const n = s.get(r.day);
      n ? n.push(r) : s.set(r.day, [r]);
    }
    const a = [];
    for (const r of [...s.keys()].sort((n, l) => n - l)) {
      const n = s.get(r);
      n.sort((i, d) => i.startPeriod - d.startPeriod);
      let l = null;
      for (const i of n) {
        const d = i.startPeriod + i.span - 1;
        l !== null && i.startPeriod <= l.endPeriod ? (l.items.push(i), d > l.endPeriod && (l.endPeriod = d)) : (l !== null && a.push(l), l = { day: r, startPeriod: i.startPeriod, endPeriod: d, items: [i] });
      }
      l !== null && a.push(l);
    }
    for (const r of a) r.items.sort(ta3);
    return a;
  }
  function pe3(t, s) {
    if (!t.segments.some((n) => s >= n.start && s <= n.end)) return false;
    if (t.parity === "all") return true;
    const r = s % 2 === 1;
    return t.parity === "odd" ? r : !r;
  }
  function aa3(t, s) {
    return t.filter((a) => pe3(a.session.weeks, s));
  }
  function ra3(t, s) {
    const a = /* @__PURE__ */ new Set();
    for (let r = 1; r <= s; r++) t.some((n) => pe3(n.session.weeks, r)) && a.add(r);
    return a;
  }
  function na3(t, s) {
    for (let a = 1; a <= s; a++) if (t.some((r) => pe3(r.session.weeks, a))) return a;
    return 1;
  }
  function la3(t) {
    const s = t.filter((a) => a && a.trim().length > 0);
    return s.length === 0 ? ht3 : s.length <= 2 ? s.join("\u3001") : s[0] + " \u7B49" + s.length + "\u4EBA";
  }
  function oa3({ courseName: t, location: s, teachers: a, colorToken: r, span: n, meta: l, onClick: i }) {
    const d = s && s.trim().length > 0 ? s.trim() : ht3, u = la3(a), m = (n ?? 1) > 1;
    return W.jsxs(Rc.button, { type: "button", onClick: i, className: "group relative flex h-full w-full cursor-pointer flex-col gap-0.5 overflow-hidden rounded-md border px-1 py-1 text-left shadow-sm transition-shadow duration-200 hover:shadow-md sm:rounded-lg sm:px-1.5 sm:py-1.5 " + r.bg + " " + r.text + " " + r.border, style: n && n > 1 ? { minHeight: n * 2.6 + "rem" } : void 0, "aria-rowspan": n, "aria-label": t + "\uFF0C" + (l ? l + "\uFF0C" : "") + d + "\uFF0C" + u + "\uFF0C\u70B9\u6309\u67E5\u770B\u8BE6\u60C5", initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.22 }, whileTap: { scale: 0.97 }, children: [W.jsx("span", { className: "absolute bottom-1 left-0 top-1 w-[3px] rounded-r-full bg-current opacity-50", "aria-hidden": "true" }), W.jsx("p", { className: "break-words pl-1 text-[10px] font-semibold leading-snug sm:text-xs " + (m ? "line-clamp-3" : "line-clamp-2"), title: t, children: t }), l && W.jsx("p", { className: "truncate pl-1 text-[9px] font-medium leading-tight opacity-90 sm:text-[10px]", title: l, children: l }), W.jsx("p", { className: "truncate pl-1 text-[9px] leading-tight opacity-80 sm:text-[11px]", title: d, children: d }), W.jsx("p", { className: "truncate pl-1 text-[9px] leading-tight opacity-80 sm:text-[11px]", title: u, children: u })] });
  }
  function bt3({ variant: t, className: s }) {
    const { title: a, hint: r } = ca3[t];
    return W.jsxs(Rc.div, { role: "status", "aria-live": "polite", className: "flex flex-col items-center justify-center gap-3 px-6 py-14 text-center" + (s ? ` ${s}` : ""), initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.3 }, children: [W.jsx("span", { className: "flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-50 dark:bg-slate-800", "aria-hidden": "true", children: W.jsxs("svg", { className: "h-11 w-11 text-brand-300", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", children: [W.jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }), W.jsx("line", { x1: "3", y1: "9", x2: "21", y2: "9" }), W.jsx("line", { x1: "8", y1: "2", x2: "8", y2: "6" }), W.jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" }), W.jsx("line", { x1: "9", y1: "15", x2: "15", y2: "15" })] }) }), W.jsx("p", { className: "text-base font-semibold text-slate-700 dark:text-slate-200", children: a }), W.jsx("p", { className: "max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400", children: r })] });
  }
  function da3({ maxWeek: t, week: s, weeksWithCourses: a, onPickWeek: r }) {
    const n = Array.from({ length: t }, (m, x) => x + 1), l = s > D4, i = s < t, d = v.useRef(null);
    v.useEffect(() => {
      const m = d.current;
      if (!m || typeof m.scrollTo != "function") return;
      const x = m.querySelector(`[data-week="${s}"]`);
      if (!x) return;
      const p = x.offsetLeft - m.clientWidth / 2 + x.clientWidth / 2;
      m.scrollTo({ left: p, behavior: "smooth" });
    }, [s]);
    const u = "flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-600 transition-colors hover:bg-brand-200 disabled:opacity-40 disabled:hover:bg-brand-100 dark:bg-brand-500/15 dark:text-brand-200 dark:hover:bg-brand-500/25 dark:disabled:hover:bg-brand-500/15";
    return W.jsxs("div", { className: "mb-3 flex flex-col gap-2", children: [W.jsxs("div", { className: "flex items-center justify-center gap-2 sm:justify-start", children: [W.jsx("button", { type: "button", "aria-label": "\u4E0A\u4E00\u5468", disabled: !l, onClick: () => l && r(s - 1), className: u, children: W.jsx(ot4, { className: "h-4 w-4", strokeWidth: 2.5 }) }), W.jsx("span", { className: "min-w-[4.5rem] text-center text-base font-semibold text-slate-700 dark:text-slate-200", children: s === D4 ? "\u5168\u90E8\u5468" : "\u7B2C " + s + " \u5468" }), W.jsx("button", { type: "button", "aria-label": "\u4E0B\u4E00\u5468", disabled: !i, onClick: () => i && r(s + 1), className: u, children: W.jsx(he3, { className: "h-4 w-4", strokeWidth: 2.5 }) })] }), W.jsxs("div", { ref: d, className: "scrollbar-none -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1", children: [W.jsx(Rc.button, { type: "button", "data-week": D4, onClick: () => r(D4), whileTap: { scale: 0.94 }, "aria-label": "\u5168\u90E8\u5468\uFF08\u663E\u793A\u6574\u5B66\u671F\u5B8C\u6574\u8BFE\u8868\uFF0C\u6807\u6CE8\u6BCF\u95E8\u8BFE\u7684\u4E0A\u8BFE\u5468\u6B21\uFF09", "aria-current": s === D4, className: "relative flex h-11 min-w-[3.25rem] flex-shrink-0 flex-col items-center justify-center rounded-lg text-xs font-medium transition-colors " + (s === D4 ? "bg-brand-500 text-white shadow-sm shadow-brand-500/30" : "bg-brand-50 text-brand-600 hover:bg-brand-100 dark:bg-brand-500/10 dark:text-brand-200 dark:hover:bg-brand-500/20"), children: "\u5168\u90E8" }), n.map((m) => {
      const x = m === s, p = a.has(m);
      return W.jsxs(Rc.button, { type: "button", "data-week": m, onClick: () => r(m), whileTap: { scale: 0.94 }, "aria-label": "\u7B2C " + m + " \u5468" + (p ? "\uFF08\u6709\u8BFE\uFF09" : "\uFF08\u65E0\u8BFE\uFF09"), "aria-current": x, className: "relative flex h-11 min-w-[2.75rem] flex-shrink-0 flex-col items-center justify-center rounded-lg text-xs font-medium transition-colors " + (x ? "bg-brand-500 text-white shadow-sm shadow-brand-500/30" : p ? "bg-brand-50 text-brand-600 hover:bg-brand-100 dark:bg-brand-500/10 dark:text-brand-200 dark:hover:bg-brand-500/20" : "bg-slate-50 text-slate-300 hover:bg-slate-100 dark:bg-slate-800/60 dark:text-slate-600 dark:hover:bg-slate-800"), children: [W.jsx("span", { children: m }), p && !x && W.jsx("span", { className: "absolute bottom-1 h-1 w-1 rounded-full bg-brand-400", "aria-hidden": "true" })] }, m);
    })] })] });
  }
  function ua3() {
    try {
      return localStorage.getItem(ft3) === "1";
    } catch {
      return false;
    }
  }
  function ma3(t, s, a) {
    const r = s.items.length > 1, n = [];
    return r && s.items.some((i) => i.startPeriod !== s.items[0].startPeriod || i.span !== s.items[0].span) && n.push(at3(t.session.startPeriod, t.session.endPeriod)), (a || r) && n.push(rt3(t.session.weeks)), n.length > 0 ? n.join(" \xB7 ") : void 0;
  }
  function ha3({ placedSessions: t, term: s, maxWeek: a, onCourseClick: r }) {
    const [n, l] = v.useState(1), [i, d] = v.useState(ua3), u = v.useRef(0), m = v.useMemo(() => ra3(t, a), [t, a]), x = v.useMemo(() => t.some((b2) => b2.day > 5), [t]);
    v.useEffect(() => {
      l(na3(t, a));
    }, [t, a]);
    const p = rs3();
    if (t.length === 0) return W.jsxs("section", { className: "w-full", children: [W.jsx(ze4, { label: s.label }), W.jsx(bt3, { variant: "no-timed" })] });
    const w = x && i, j3 = w ? Js3 : 5, v2 = n === D4, E3 = v2 ? t : aa3(t, n), C2 = w ? 0 : E3.filter((b2) => b2.day > 5).length, M3 = w ? E3 : E3.filter((b2) => b2.day <= 5), O3 = ea3(M3), W4 = sa3(M3), _3 = (b2) => {
      u.current = b2 > n ? 1 : -1, l(b2);
    }, y2 = () => {
      const b2 = !i;
      d(b2);
      try {
        localStorage.setItem(ft3, b2 ? "1" : "0");
      } catch {
      }
    };
    return W.jsxs("section", { className: "w-full", children: [W.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [W.jsx(ze4, { label: s.label }), x && W.jsx("button", { type: "button", onClick: y2, className: "mb-3 inline-flex items-center gap-1 rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-600 transition-colors hover:bg-brand-100 dark:bg-brand-500/10 dark:text-brand-200 dark:hover:bg-brand-500/20", children: w ? "\u6536\u8D77\u5468\u672B" : "\u5C55\u5F00\u5468\u672B" })] }), W.jsx(xa2, { maxWeek: a, week: n, weeksWithCourses: m, onPickWeek: _3 }), C2 > 0 && W.jsxs("button", { type: "button", onClick: y2, className: "mb-2 w-full rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-center text-xs font-medium text-amber-700 transition-colors hover:bg-amber-100 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300 dark:hover:bg-amber-500/20", children: [v2 ? "\u672C\u5B66\u671F" : "\u672C\u5468", "\u5468\u672B\u6709 ", C2, " \u8282\u8BFE\u88AB\u6536\u8D77\uFF0C\u70B9\u6B64\u5C55\u5F00\u5468\u672B\u5217"] }), W.jsx(Cc, { mode: "wait", initial: false, children: W.jsx(Rc.div, { className: "w-full touch-pan-y overflow-x-visible", initial: { opacity: 0, x: u.current * 32 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: u.current * -32 }, transition: { duration: 0.18, ease: "easeOut" }, drag: "x", dragConstraints: { left: 0, right: 0 }, dragElastic: 0.12, dragMomentum: false, onDragEnd: (b2, N) => {
      N.offset.x < -He4 && n < a ? _3(n + 1) : N.offset.x > He4 && n > D4 && _3(n - 1);
    }, children: W.jsxs("div", { className: "grid gap-0.5 rounded-xl bg-white p-1 shadow-soft dark:bg-slate-900 dark:shadow-soft-dark", style: { gridTemplateColumns: `2rem repeat(${j3}, minmax(0, 1fr))`, gridTemplateRows: "2rem repeat(10, minmax(2.8rem, auto))" }, role: "grid", "aria-label": s.label + (v2 ? " \u5168\u90E8\u5468" : " \u7B2C" + n + "\u5468") + " \u8BFE\u8868", children: [W.jsx("div", { className: "rounded-md bg-brand-50/60 dark:bg-slate-800/60", style: { gridColumn: 1, gridRow: 1 }, "aria-hidden": "true" }), Xs3.slice(0, j3).map((b2, N) => {
      const A3 = N + 1 === p;
      return W.jsxs("div", { className: "flex items-center justify-center gap-1 rounded-md text-[11px] font-semibold sm:text-xs " + (A3 ? "bg-brand-500 text-white shadow-sm shadow-brand-500/30" : "bg-brand-50 text-brand-600 dark:bg-slate-800 dark:text-brand-200"), style: { gridColumn: N + 1 + H, gridRow: 1 }, role: "columnheader", "aria-current": A3 ? "date" : void 0, children: [b2, A3 && W.jsx("span", { className: "hidden text-[9px] font-normal opacity-80 sm:inline", children: "\u4ECA\u5929" })] }, "day-" + N);
    }), Array.from({ length: ge3 }, (b2, N) => W.jsxs("div", { className: "flex flex-col items-center justify-center rounded-md bg-brand-50 leading-none text-brand-600 dark:bg-slate-800 dark:text-brand-200", style: { gridColumn: 1, gridRow: N + 1 + H }, role: "rowheader", "aria-label": "\u7B2C" + (N + 1) + "\u8282", children: [W.jsx("span", { className: "text-[11px] font-semibold sm:text-xs", children: N + 1 }), W.jsx("span", { className: "text-[8px] opacity-60", children: "\u8282" })] }, "period-" + N)), ba3(O3, j3, p), W4.map((b2) => {
      const N = b2.endPeriod - b2.startPeriod + 1, A3 = b2.items.length > 1;
      return W.jsx("div", { className: "flex flex-col gap-0.5", style: { gridColumn: b2.day + H, gridRowStart: b2.startPeriod + H, gridRowEnd: "span " + N }, role: "gridcell", children: b2.items.map((I3, z2) => W.jsx("div", { className: "flex min-h-0 w-full", style: A3 ? { flexGrow: I3.span, minHeight: "2.6rem" } : { flexGrow: 1 }, children: W.jsx(ia3, { courseName: I3.course.courseName, location: I3.session.location, teachers: I3.course.teachers, colorToken: I3.colorToken, span: A3 ? void 0 : I3.span, meta: ma3(I3, b2, v2), onClick: r ? () => r(I3.course) : void 0 }) }, I3.course.id + "-" + I3.session.raw + "-" + z2)) }, "cell-" + b2.day + "-" + b2.startPeriod);
    })] }) }, n + "-" + j3) }), W.jsx("p", { className: "mt-2 text-center text-[11px] text-slate-400 dark:text-slate-500", children: "\u5DE6\u53F3\u6ED1\u52A8\u8BFE\u8868\u53EF\u5207\u6362\u5468\u6B21" }), M3.length === 0 && W.jsx("p", { className: "mt-3 rounded-lg bg-brand-50 px-4 py-3 text-center text-sm text-slate-500 dark:bg-slate-800/70 dark:text-slate-400", children: v2 ? "\u672C\u5B66\u671F\u5DE5\u4F5C\u65E5\u6682\u65E0\u8BFE\u7A0B\u3002" : "\u7B2C " + n + " \u5468\u6682\u65E0\u8BFE\u7A0B\uFF0C\u8BD5\u8BD5\u5207\u6362\u5230\u5176\u5B83\u5468\u3002" })] });
  }
  function ze4({ label: t }) {
    return W.jsxs("div", { className: "mb-3 flex items-center gap-2", children: [W.jsx("span", { className: "inline-block h-4 w-1 rounded-full bg-brand-400", "aria-hidden": "true" }), W.jsx("h2", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200", children: t })] });
  }
  function ba3(t, s, a) {
    const r = [];
    for (let n = 1; n <= ge3; n++) for (let l = 1; l <= s; l++) {
      if (t.has(l + "-" + n)) continue;
      const i = l === a;
      r.push(W.jsx("div", { className: "rounded-md border " + (i ? "border-brand-200/80 bg-brand-100/40 dark:border-brand-500/25 dark:bg-brand-500/10" : "border-brand-100/70 bg-brand-50/20 dark:border-slate-800 dark:bg-slate-800/30"), style: { gridColumn: l + H, gridRow: n + H }, "aria-hidden": "true" }, "empty-" + l + "-" + n));
    }
    return r;
  }
  function fa3(t) {
    const s = t.filter((a) => a && a.trim().length > 0);
    return s.length > 0 ? s.join("\u3001") : ye3;
  }
  function ga3(t) {
    return t && t.trim().length > 0 ? t : ye3;
  }
  function pa3({ courses: t, onCourseClick: s }) {
    return t.length === 0 ? null : W.jsxs("section", { className: "w-full", "aria-label": "\u65E0\u56FA\u5B9A\u65F6\u95F4\u8BFE\u7A0B", children: [W.jsxs("h3", { className: "mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200", children: [W.jsx("span", { className: "inline-block h-4 w-1 rounded-full bg-brand-400", "aria-hidden": "true" }), "\u65E0\u56FA\u5B9A\u65F6\u95F4\u8BFE\u7A0B\uFF08\u5B9E\u4E60 / \u5B9E\u9A8C\u7B49\uFF09", W.jsx("span", { className: "rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-600 dark:bg-brand-500/15 dark:text-brand-200", children: t.length })] }), W.jsx("ul", { className: "flex flex-col gap-2", children: t.map((a, r) => {
      const n = de4(a.courseName);
      return W.jsx(Rc.li, { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.28, delay: Math.min(r * 0.04, 0.4) }, children: W.jsxs("button", { type: "button", onClick: s ? () => s(a) : void 0, className: "relative min-h-[44px] w-full overflow-hidden rounded-xl border border-brand-100 bg-white px-4 py-3 text-left shadow-sm transition-all hover:-translate-y-px hover:shadow-md dark:border-slate-800 dark:bg-slate-900", children: [W.jsx("span", { className: "absolute bottom-0 left-0 top-0 w-1 " + n.bg, "aria-hidden": "true" }), W.jsxs("div", { className: "flex flex-wrap items-center gap-x-2 gap-y-1 pl-1.5", children: [W.jsx("p", { className: "text-sm font-semibold text-slate-800 dark:text-slate-100", children: a.courseName && a.courseName.trim().length > 0 ? a.courseName : ye3 }), a.credits && W.jsxs("span", { className: "rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400", children: [a.credits, " \u5B66\u5206"] })] }), W.jsxs("div", { className: "mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 pl-1.5 text-xs text-slate-500 dark:text-slate-400", children: [W.jsxs("span", { children: [W.jsx("span", { className: "text-slate-400 dark:text-slate-500", children: "\u6559\u5E08\uFF1A" }), fa3(a.teachers)] }), W.jsxs("span", { children: [W.jsx("span", { className: "text-slate-400 dark:text-slate-500", children: "\u6027\u8D28\uFF1A" }), ga3(a.courseNature)] }), a.weekRangeRaw && W.jsxs("span", { children: [W.jsx("span", { className: "text-slate-400 dark:text-slate-500", children: "\u5468\u6B21\uFF1A" }), a.weekRangeRaw] })] })] }) }, a.id);
    }) })] });
  }
  function ja3({ course: t, onClose: s }) {
    v.useEffect(() => {
      if (!t) return;
      const r = (n) => {
        n.key === "Escape" && s();
      };
      return document.addEventListener("keydown", r), document.body.style.overflow = "hidden", () => {
        document.removeEventListener("keydown", r), document.body.style.overflow = "";
      };
    }, [t, s]);
    const a = t ? de4(t.courseName) : null;
    return W.jsx(Cc, { children: t && a && W.jsxs(Rc.div, { className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, role: "dialog", "aria-modal": "true", "aria-label": t.courseName + " \u8BFE\u7A0B\u8BE6\u60C5", children: [W.jsx("div", { className: "absolute inset-0 bg-black/45 backdrop-blur-[2px]", onClick: s, "aria-hidden": "true" }), W.jsxs(Rc.div, { className: "relative z-10 w-full max-w-lg overflow-hidden rounded-t-3xl bg-white shadow-xl dark:bg-slate-900 sm:mx-4 sm:rounded-2xl", initial: { opacity: 0, y: 48, scale: 0.97 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: 48, scale: 0.97 }, transition: { duration: 0.25, ease: "easeOut" }, drag: "y", dragConstraints: { top: 0, bottom: 0 }, dragElastic: { top: 0, bottom: 0.6 }, onDragEnd: (r, n) => {
      (n.offset.y > 96 || n.velocity.y > 600) && s();
    }, children: [W.jsxs("div", { className: "relative px-5 pb-4 pt-4 " + a.bg, children: [W.jsx("div", { className: "mx-auto mb-3 h-1 w-10 rounded-full bg-black/15 dark:bg-white/20 sm:hidden", "aria-hidden": "true" }), W.jsx("button", { type: "button", onClick: s, className: "absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-black/10 dark:hover:bg-white/10 " + a.text, "aria-label": "\u5173\u95ED", children: W.jsx(K3, { className: "h-5 w-5" }) }), W.jsx("h2", { className: "pr-9 text-lg font-bold leading-snug " + a.text, children: t.courseName || "\u672A\u547D\u540D\u8BFE\u7A0B" }), W.jsxs("div", { className: "mt-1.5 flex flex-wrap items-center gap-1.5 text-xs " + a.text, children: [t.courseCode && W.jsx("span", { className: "rounded-md bg-white/50 px-1.5 py-0.5 font-mono dark:bg-white/10", children: t.courseCode }), t.credits && W.jsxs("span", { className: "rounded-md bg-white/50 px-1.5 py-0.5 dark:bg-white/10", children: [t.credits, " \u5B66\u5206"] }), t.courseNature && W.jsx("span", { className: "rounded-md bg-white/50 px-1.5 py-0.5 dark:bg-white/10", children: t.courseNature }), t.assessment && W.jsx("span", { className: "rounded-md bg-white/50 px-1.5 py-0.5 dark:bg-white/10", children: t.assessment })] })] }), W.jsxs("div", { className: "max-h-[62vh] overflow-y-auto px-5 pb-6 pt-4 sm:max-h-[70vh]", children: [W.jsx(Be4, { icon: W.jsx(fe3, { className: "h-3.5 w-3.5" }), text: "\u4E0A\u8BFE\u5B89\u6392" }), t.sessions.length > 0 ? W.jsx("ul", { className: "mt-2 space-y-2", children: t.sessions.map((r, n) => W.jsxs("li", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl bg-slate-50 px-3 py-2.5 text-sm text-slate-700 dark:bg-slate-800/70 dark:text-slate-200", children: [W.jsx("span", { className: "font-semibold", children: as3(r.day) }), W.jsx("span", { children: at3(r.startPeriod, r.endPeriod) }), W.jsx("span", { className: "text-slate-500 dark:text-slate-400", children: rt3(r.weeks) }), r.location && W.jsxs("span", { className: "inline-flex items-center gap-1 text-slate-500 dark:text-slate-400", children: [W.jsx(ct4, { className: "h-3.5 w-3.5" }), r.location] })] }, n)) }) : W.jsxs("p", { className: "mt-2 rounded-xl bg-slate-50 px-3 py-2.5 text-sm text-slate-500 dark:bg-slate-800/70 dark:text-slate-400", children: ["\u65E0\u56FA\u5B9A\u4E0A\u8BFE\u65F6\u95F4\uFF08\u5B9E\u4E60 / \u5B9E\u9A8C / \u81EA\u4E3B\u5B89\u6392\u7B49\uFF09", t.weekRangeRaw ? `\uFF0C\u5468\u6B21\uFF1A${t.weekRangeRaw}` : ""] }), W.jsx(Be4, { icon: W.jsx(Y3, { className: "h-3.5 w-3.5" }), text: "\u4EFB\u8BFE\u6559\u5E08", className: "mt-5" }), W.jsx("div", { className: "mt-2 flex flex-wrap gap-1.5", children: t.teachers.filter(Boolean).length > 0 ? t.teachers.filter(Boolean).map((r) => W.jsx("span", { className: "inline-flex items-center rounded-lg bg-brand-50 px-2.5 py-1 text-sm font-medium text-brand-700 dark:bg-brand-500/15 dark:text-brand-200", children: r }, r)) : W.jsx("span", { className: "text-sm text-slate-400", children: "\u672A\u63D0\u4F9B" }) }), W.jsxs("div", { className: "mt-5 space-y-2.5 border-t border-slate-100 pt-4 dark:border-slate-800", children: [W.jsx(q3, { label: "\u6559\u5B66\u73ED", value: t.teachingClassName }), W.jsx(q3, { label: "\u5468\u6B21\u539F\u6587", value: t.weekRangeRaw }), W.jsx(q3, { label: "\u6559\u5B66\u5730\u70B9", value: t.locationRaw || "\u5F85\u5B9A" }), W.jsx(q3, { label: "\u5F00\u8BFE\u5B66\u9662", value: t.college }), W.jsx(q3, { label: "\u5408\u73ED\u4FE1\u606F", value: t.mergeInfoRaw || "\u65E0" })] })] })] })] }) });
  }
  function Be4({ icon: t, text: s, className: a }) {
    return W.jsxs("h3", { className: "flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 " + (a ?? ""), children: [t, s] });
  }
  function q3({ label: t, value: s }) {
    const a = s && s.trim() ? s.trim() : "\u2014";
    return W.jsxs("div", { className: "flex gap-3 text-sm", children: [W.jsx("span", { className: "w-16 flex-shrink-0 text-slate-400 dark:text-slate-500", children: t }), W.jsx("span", { className: "flex-1 break-words text-slate-700 dark:text-slate-300", children: a })] });
  }
  function Fe4({ message: t, onRetry: s }) {
    return W.jsxs(Rc.div, { role: "alert", "aria-live": "assertive", className: "flex flex-col items-center justify-center gap-4 px-6 py-16 text-center", initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, children: [W.jsx("span", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-red-50 dark:bg-red-500/10", "aria-hidden": "true", children: W.jsxs("svg", { className: "h-9 w-9 text-red-400", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [W.jsx("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" }), W.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }), W.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })] }) }), W.jsx("p", { className: "text-lg font-semibold text-slate-700 dark:text-slate-200", children: "\u8BFE\u8868\u6570\u636E\u52A0\u8F7D\u5931\u8D25" }), t ? W.jsx("p", { className: "max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400", children: t }) : W.jsx("p", { className: "max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400", children: "\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u540E\u91CD\u8BD5\uFF0C\u6216\u7A0D\u540E\u518D\u8BD5\u3002" }), s && W.jsx("button", { type: "button", onClick: s, className: "mt-2 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-brand-500 px-6 py-2.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300", children: "\u91CD\u8BD5" })] });
  }
  function Ve4({ message: t = "\u6B63\u5728\u52A0\u8F7D\u8BFE\u8868\u6570\u636E\u2026" }) {
    return W.jsxs(Rc.div, { role: "status", "aria-live": "polite", "aria-busy": "true", className: "flex flex-col gap-4 px-2 py-6", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 }, children: [W.jsxs("div", { className: "flex items-center gap-3", children: [W.jsx("span", { className: "skeleton h-9 w-28", "aria-hidden": "true" }), W.jsx("span", { className: "skeleton h-9 w-24", "aria-hidden": "true" }), W.jsx("span", { className: "skeleton ml-auto h-9 w-20", "aria-hidden": "true" })] }), W.jsx("div", { className: "grid gap-1 rounded-xl bg-white p-1.5 shadow-soft dark:bg-slate-900 dark:shadow-soft-dark", style: { gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gridTemplateRows: "repeat(7, 2.6rem)" }, "aria-hidden": "true", children: ka3.map((s, a) => W.jsx("span", { className: "skeleton", style: { gridColumn: s.col, gridRowStart: s.row, gridRowEnd: `span ${s.span}`, animationDelay: `${a * 0.08}s` } }, a)) }), W.jsx(Rc.p, { className: "text-center text-sm font-medium text-brand-600 dark:text-brand-300", animate: { opacity: [0.5, 1, 0.5] }, transition: { duration: 1.4, ease: "easeInOut", repeat: 1 / 0 }, children: t })] });
  }
  function wa3() {
    try {
      const t = window.location.hash.replace(/^#/, ""), s = t.indexOf("?");
      if (s < 0) return { termId: null, target: null };
      const a = new URLSearchParams(t.slice(s + 1)), r = a.get("term"), n = a.get("class"), l = a.get("teacher");
      return { termId: r, target: n ? { kind: "class", name: n } : l ? { kind: "teacher", name: l } : null };
    } catch {
      return { termId: null, target: null };
    }
  }
  function va3(t, s) {
    try {
      let a = "#/";
      if (t) {
        const r = new URLSearchParams();
        r.set("term", t), s && r.set(s.kind === "class" ? "class" : "teacher", s.name), a = "#/?" + r.toString();
      }
      window.history.replaceState(null, "", a);
    } catch {
    }
  }
  function Na3() {
    const [t, s] = v.useState(null), [a, r] = v.useState(null), [n, l] = v.useState(null), [i, d] = v.useState("loading"), [u, m] = v.useState(null), [x, p] = v.useState(null), [w, j3] = v.useState("idle"), [v2, E3] = v.useState(null), [C2, M3] = v.useState(""), [O3, W4] = v.useState(0), [_3, y2] = v.useState(true), [b2, N] = v.useState(null), [A3, I3] = v.useState(""), [z2, pt4] = v.useState(() => me4()), [yt3, je3] = v.useState(() => et4()), [P2, jt3] = v.useState(() => ee3()), [ke3, we3] = v.useState(null), [h, kt3] = v.useState(null);
    v.useEffect(() => {
      let c = false;
      return xs3().then((f) => {
        c || kt3(f);
      }), () => {
        c = true;
      };
    }, []), v.useEffect(() => {
      const c = h == null ? void 0 : h.branding;
      document.title = (c == null ? void 0 : c.siteName) || "\u8BFE\u8868\u67E5\u8BE2";
      let f = document.querySelector('link[rel="icon"]');
      return f || (f = document.createElement("link"), f.rel = "icon", document.head.appendChild(f)), f.dataset.defaultHref || (f.dataset.defaultHref = f.href), f.href = (c == null ? void 0 : c.favicon) || f.dataset.defaultHref, () => {
      };
    }, [h]);
    const B = v.useRef(null), ae4 = v.useRef(null), $3 = v.useCallback((c) => {
      we3(c), ae4.current && clearTimeout(ae4.current), ae4.current = setTimeout(() => we3(null), 2200);
    }, []);
    v.useEffect(() => (se3(P2), st4(() => {
    })), [P2]);
    const wt3 = v.useCallback(() => {
      const c = ts3(ee3());
      es3(c), jt3(c), $3(c === "auto" ? "\u4E3B\u9898\uFF1A\u8DDF\u968F\u7CFB\u7EDF" : c === "light" ? "\u4E3B\u9898\uFF1A\u6D45\u8272" : "\u4E3B\u9898\uFF1A\u6DF1\u8272");
    }, [$3]);
    v.useEffect(() => {
      let c = false;
      return d("loading"), Promise.resolve().then(() => $t3()).then((f) => {
        if (c) return;
        s(f);
        const S3 = wa3(), T2 = Gt3(), G3 = S3.termId && f.terms.find((V3) => V3.id === S3.termId) || T2 && f.terms.find((V3) => V3.id === T2.termId) || f.terms.find((V3) => V3.id === f.defaultTermId) || f.terms[0];
        G3 && (S3.termId && S3.target ? B.current = S3.target : T2 && T2.termId === G3.id ? B.current = T2.target : B.current = null, r(G3.year), l(G3.id));
      }).catch((f) => {
        c || (I3(f instanceof Error ? f.message : "\u5B66\u671F\u7D22\u5F15\u52A0\u8F7D\u5931\u8D25"), d("error"));
      }), () => {
        c = true;
      };
    }, []), v.useEffect(() => {
      if (!n) return;
      let c = false;
      return d("loading"), I3(""), Wt3(n).then((f) => {
        if (c) return;
        m(f), d("ready");
        const S3 = B.current;
        if (B.current = null, S3 && (S3.kind === "class" ? f.classNames.includes(S3.name) : f.teacherNames.includes(S3.name))) {
          p(S3), y2(false);
          return;
        }
        p(null), y2(true);
      }).catch((f) => {
        if (c) return;
        const S3 = f instanceof Error ? f.message : "\u672A\u77E5\u9519\u8BEF";
        I3(S3), d("error");
      }), () => {
        c = true;
      };
    }, [n]), v.useEffect(() => {
      if (i !== "ready" || !n || !x) {
        j3("idle"), E3(null);
        return;
      }
      let c = false;
      return j3("loading"), E3(null), M3(""), Ht3(n, x.kind, x.name).then((f) => {
        c || (E3(f.courses), j3("ready"));
      }).catch((f) => {
        c || (M3(f instanceof Error ? f.message : "\u8BFE\u8868\u67E5\u8BE2\u5931\u8D25"), j3("error"));
      }), () => {
        c = true;
      };
    }, [i, n, x, O3]), v.useEffect(() => {
      n && (Jt3({ termId: n, target: x }), va3(n, x));
    }, [n, x]);
    const vt3 = v.useCallback(() => {
      if (t && n) {
        const c = n;
        l(""), setTimeout(() => l(c), 0);
      } else window.location.reload();
    }, [t, n]), Nt3 = v.useCallback(() => W4((c) => c + 1), []), St3 = v.useMemo(() => t ? [...new Set(t.terms.map((c) => c.year))].sort().reverse() : [], [t]), ve3 = v.useMemo(() => !t || !a ? [] : t.terms.filter((c) => c.year === a).sort((c, f) => c.semester - f.semester), [t, a]), Ct3 = v.useCallback((c) => {
      if (r(c), p(null), y2(true), t) {
        const f = t.terms.filter((S3) => S3.year === c).sort((S3, T2) => S3.semester - T2.semester);
        f.length > 0 && l(f[0].id);
      }
    }, [t]), Et3 = v.useCallback((c) => {
      l(c), p(null), y2(true);
    }, []), Ne3 = v.useCallback((c) => {
      p(c), y2(false), je3(Yt2(c)), window.scrollTo({ top: 0, behavior: "smooth" });
    }, []), It3 = v.useCallback(() => {
      if (!x) return;
      const c = Ut3(x);
      pt4(Kt3(x)), $3(c ? "\u5DF2\u53D6\u6D88\u6536\u85CF" : "\u5DF2\u52A0\u5165\u6536\u85CF");
    }, [x, $3]), Tt3 = v.useCallback(async () => {
      const c = window.location.href;
      try {
        if (navigator.share) {
          await navigator.share({ title: "\u8BFE\u8868\u67E5\u8BE2", url: c });
          return;
        }
        await navigator.clipboard.writeText(c), $3("\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u53EF\u76F4\u63A5\u5206\u4EAB");
      } catch {
        $3("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236\u5730\u5740\u680F\u94FE\u63A5");
      }
    }, [$3]), Rt3 = v.useCallback(() => {
      Qt3(), je3([]);
    }, []), F2 = v.useMemo(() => {
      if (w !== "ready" || v2 === null) return null;
      const c = v2.filter((T2) => T2.sessions.length > 0), f = v2.filter((T2) => T2.sessions.length === 0), S3 = qt3(c);
      return { timed: c, untimed: f, placed: S3 };
    }, [w, v2]), Mt3 = (u == null ? void 0 : u.maxWeek) ?? 20, Q4 = v.useMemo(() => x ? z2.some((c) => c.kind === x.kind && c.name === x.name) : false, [x, z2]), L3 = v.useMemo(() => (t == null ? void 0 : t.terms.find((c) => c.id === n)) ?? null, [t, n]), re3 = v.useMemo(() => h != null && h.nav.enabled ? h.nav.items : [], [h]);
    return W.jsxs("div", { className: "min-h-full text-slate-800 dark:text-slate-200", style: re3.length > 0 ? { paddingBottom: "calc(4rem + env(safe-area-inset-bottom))" } : void 0, children: [W.jsx("header", { className: "sticky top-0 z-30 border-b border-white/10 bg-brand-500/95 text-white shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/95", children: W.jsxs("div", { className: "mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3", children: [W.jsxs("div", { className: "flex items-center gap-2", children: [h != null && h.branding.logo ? W.jsx("img", { src: h.branding.logo, alt: "", className: "h-6 w-6 rounded-md object-cover" }) : W.jsx(nt3, { className: "h-5 w-5 opacity-90" }), W.jsx("h1", { className: "text-lg font-semibold tracking-wide", children: (h == null ? void 0 : h.branding.siteName) || "\u8BFE\u8868\u67E5\u8BE2" })] }), W.jsxs("div", { className: "flex items-center gap-2", children: [u && W.jsx("span", { className: "hidden rounded-full bg-white/15 px-3 py-1 text-xs font-medium sm:inline-block", children: u.term.label }), W.jsx("button", { type: "button", onClick: wt3, className: "flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20", "aria-label": "\u5207\u6362\u4E3B\u9898\uFF0C\u5F53\u524D\uFF1A" + (P2 === "auto" ? "\u8DDF\u968F\u7CFB\u7EDF" : P2 === "light" ? "\u6D45\u8272" : "\u6DF1\u8272"), title: P2 === "auto" ? "\u8DDF\u968F\u7CFB\u7EDF" : P2 === "light" ? "\u6D45\u8272\u6A21\u5F0F" : "\u6DF1\u8272\u6A21\u5F0F", children: P2 === "dark" ? W.jsx(ms3, { className: "h-5 w-5" }) : P2 === "light" ? W.jsx(Re4, { className: "h-5 w-5" }) : W.jsxs("span", { className: "relative flex h-5 w-5 items-center justify-center", children: [W.jsx(Re4, { className: "h-5 w-5" }), W.jsx("span", { className: "absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-white/90 text-[7px] font-bold text-brand-600", children: "A" })] }) })] })] }) }), (h == null ? void 0 : h.announcement.enabled) && h.announcement.text && W.jsx(qs3, { text: h.announcement.text }), W.jsx("main", { className: "mx-auto w-full max-w-3xl px-4 py-5", children: W.jsxs(Cc, { mode: "wait", children: [i === "loading" && W.jsx(Rc.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: X3, children: W.jsx(Ve4, {}) }, "loading"), i === "error" && W.jsx(Rc.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: X3, children: W.jsx(Fe4, { message: A3, onRetry: vt3 }) }, "error"), i === "ready" && u && W.jsxs(Rc.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: X3, className: "flex flex-col gap-5", children: [t && W.jsx("section", { className: "card p-4", children: W.jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [W.jsxs("div", { className: "flex items-center gap-2", children: [W.jsx("span", { className: "text-xs text-slate-500 dark:text-slate-400", children: "\u5B66\u5E74" }), W.jsx(_e4, { value: a || "", onChange: (c) => Ct3(c), options: St3.map((c) => ({ value: c, label: c })), "aria-label": "\u9009\u62E9\u5B66\u5E74" })] }), ve3.length > 0 && W.jsxs("div", { className: "flex items-center gap-2", children: [W.jsx("span", { className: "text-xs text-slate-500 dark:text-slate-400", children: "\u5B66\u671F" }), W.jsx(_e4, { value: n || "", onChange: (c) => Et3(c), options: ve3.map((c) => ({ value: c.id, label: "\u7B2C" + c.semester + "\u5B66\u671F" })), "aria-label": "\u9009\u62E9\u5B66\u671F" })] }), (L3 == null ? void 0 : L3.courseCount) != null && W.jsxs("span", { className: "ml-auto hidden text-xs text-slate-400 dark:text-slate-500 sm:inline", children: [L3.courseCount, " \u95E8\u8BFE\u7A0B \xB7 ", L3.classCount ?? "-", " \u4E2A\u73ED\u7EA7"] })] }) }), W.jsx(Cc, { children: _3 && W.jsx(Sa3, { children: W.jsxs("div", { className: "flex flex-col gap-5", children: [W.jsx(Os3, { favorites: z2, recents: yt3, onPick: Ne3, onClearRecents: Rt3 }), W.jsx(Ds3, { bundle: u, onSelect: Ne3 })] }) }, "selector") }), W.jsx(Cc, { mode: "wait", children: x && W.jsxs(Rc.section, { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: X3, className: "flex flex-col gap-4", children: [W.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [W.jsx("div", { className: "flex min-w-0 items-center gap-2", children: W.jsxs("span", { className: "inline-flex max-w-full items-center gap-1.5 truncate rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700 dark:bg-brand-500/20 dark:text-brand-200", children: [x.kind === "teacher" && W.jsx(Y3, { className: "h-3.5 w-3.5 flex-shrink-0" }), W.jsx("span", { className: "truncate", children: x.name }), x.kind === "teacher" && W.jsx("span", { className: "flex-shrink-0 text-xs font-normal opacity-70", children: "\u6559\u5E08" })] }) }), W.jsxs("div", { className: "flex items-center gap-1.5", children: [W.jsx("button", { type: "button", onClick: It3, className: "flex h-9 w-9 items-center justify-center rounded-lg transition-colors " + (Q4 ? "bg-amber-50 text-amber-500 hover:bg-amber-100 dark:bg-amber-500/15 dark:hover:bg-amber-500/25" : "bg-brand-50 text-slate-400 hover:bg-brand-100 hover:text-amber-500 dark:bg-slate-800 dark:text-slate-500 dark:hover:bg-slate-700"), "aria-label": Q4 ? "\u53D6\u6D88\u6536\u85CF" : "\u6536\u85CF", "aria-pressed": Q4, children: W.jsx(be3, { className: "h-4 w-4", filled: Q4 }) }), W.jsx("button", { type: "button", onClick: Tt3, className: "flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-slate-400 transition-colors hover:bg-brand-100 hover:text-brand-600 dark:bg-slate-800 dark:text-slate-500 dark:hover:bg-slate-700 dark:hover:text-brand-300", "aria-label": "\u5206\u4EAB\u5F53\u524D\u8BFE\u8868", children: W.jsx(it4, { className: "h-4 w-4" }) }), W.jsxs("button", { type: "button", onClick: () => y2(true), className: "inline-flex h-9 items-center gap-1 rounded-lg bg-brand-50 px-3 text-xs font-medium text-brand-600 transition-colors hover:bg-brand-100 dark:bg-slate-800 dark:text-brand-200 dark:hover:bg-slate-700", children: [W.jsx(ot4, { className: "h-3.5 w-3.5", strokeWidth: 2.5 }), "\u91CD\u65B0\u9009\u62E9"] })] })] }), w === "loading" && W.jsx(Ve4, { message: "\u6B63\u5728\u67E5\u8BE2\u8BFE\u8868\u2026" }), w === "error" && W.jsx(Fe4, { message: C2, onRetry: Nt3 }), w === "ready" && F2 && (F2.timed.length === 0 && F2.untimed.length === 0 ? W.jsx(bt3, { variant: "no-courses" }) : W.jsxs(W.Fragment, { children: [W.jsx(ha3, { placedSessions: F2.placed, term: u.term, maxWeek: Mt3, onCourseClick: (c) => N(c) }), W.jsx(ya3, { courses: F2.untimed, onCourseClick: (c) => N(c) })] }))] }, "result-" + x.kind + "-" + x.name) })] }, "ready")] }) }), (h == null ? void 0 : h.banner.enabled) && h.banner.image && W.jsx(Us3, { banner: h.banner }), W.jsxs("footer", { className: "mx-auto flex w-full max-w-3xl items-center justify-between gap-2 px-4 pb-6 pt-2 text-xs text-slate-400 dark:text-slate-600", children: [W.jsx("span", { children: L3 != null && L3.updatedAt ? "\u6570\u636E\u66F4\u65B0\u4E8E " + ns3(L3.updatedAt) : "\u8BFE\u8868\u6570\u636E\u4EC5\u4F9B\u53C2\u8003" }), W.jsxs("a", { href: "#/admin", className: "flex items-center gap-1 rounded-lg px-2 py-1 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-400", "aria-label": "\u7BA1\u7406\u540E\u53F0", children: [W.jsx(xt4, { className: "h-3.5 w-3.5" }), "\u7BA1\u7406"] })] }), W.jsx(Cc, { children: ke3 && W.jsx(Rc.div, { className: "pointer-events-none fixed bottom-8 left-1/2 z-[60] -translate-x-1/2", initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 12 }, transition: { duration: 0.2 }, children: W.jsx("span", { className: "rounded-full bg-slate-800/95 px-4 py-2 text-sm text-white shadow-lg dark:bg-slate-700/95", children: ke3 }) }) }), W.jsx(ja3, { course: b2, onClose: () => N(null) }), (h == null ? void 0 : h.watermark.enabled) && h.watermark.text && W.jsx(Ws3, { text: h.watermark.text, opacity: h.watermark.opacity }), (h == null ? void 0 : h.ad.enabled) && (h.ad.qrImage || h.ad.title) && W.jsx(Hs3, { title: h.ad.title, qrImage: h.ad.qrImage }), re3.length > 0 && W.jsx(Bs3, { items: re3 }), (h == null ? void 0 : h.popup.enabled) && W.jsx(Gs3, { popup: h.popup })] });
  }
  function qe4(t) {
    if (typeof t == "object" && t !== null && "height" in t) return t.height;
  }
  function Sa3({ children: t }) {
    const [s, a] = v.useState(false);
    return W.jsx(Rc.section, { className: "card p-4", style: { overflow: s ? "visible" : "hidden" }, initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.3 }, onAnimationStart: (r) => {
      qe4(r) === 0 && a(false);
    }, onAnimationComplete: (r) => {
      qe4(r) === "auto" && a(true);
    }, children: t });
  }
  function Ue4() {
    const t = window.location.hash.replace(/^#/, "") || "/", s = t.indexOf("?");
    return s >= 0 ? t.slice(0, s) : t;
  }
  function Ea3() {
    const [t, s] = v.useState(Ue4);
    return v.useEffect(() => {
      const a = () => s(Ue4());
      return window.addEventListener("hashchange", a), () => window.removeEventListener("hashchange", a);
    }, []), t;
  }
  function Ia3() {
    const t = Ea3();
    return v.useEffect(() => (se3(ee3()), st4(() => {
    })), []), W.jsx(Dc, { reducedMotion: "user", children: t.startsWith("/admin") ? W.jsx(v.Suspense, { fallback: W.jsx("div", { className: "flex min-h-screen items-center justify-center text-sm text-slate-400", children: "\u6B63\u5728\u52A0\u8F7D\u7BA1\u7406\u540E\u53F0\u2026" }), children: W.jsx(Ca3, {}) }) : W.jsx(Na3, {}) });
  }
  var __vite__mapDeps, Pt3, Dt3, Se3, Ot3, Ke4, Ce2, _t3, Ee3, Ie3, ne3, le4, Te4, Ye4, xe4, Qe4, Ge4, Je4, Z3, tt4, ss3, nt3, lt3, ot4, he3, us3, K3, be3, Re4, ms3, it4, ct4, Y3, dt3, fe3, La3, xt4, Aa3, hs3, Pa3, Da3, Oa3, bs3, _a2, $a3, fs3, gs3, Wa3, ut3, ps3, ys3, js3, ks3, ws3, vs3, Ns3, Ha3, za3, Ba3, Ss3, Fa3, J4, oe4, Le4, Es3, Ae4, Fs3, Vs3, mt4, Js3, ge3, Xs3, D4, ht3, ia3, ca3, xa2, H, ft3, He4, ye3, ya3, ka3, X3, Ca3, gt3;
  var init_index_Cmv43DoB = __esm({
    "assets/index-Cmv43DoB.js"() {
      init_motion_CBSrzxBb();
      init_react_C2245jk2();
      __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = ["assets/AdminApp-DEDpPrVC.js", "assets/motion-CBSrzxBb.js", "assets/react-C2245jk2.js"])) => i.map((i2) => d[i2]);
      (function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload")) return;
        for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
        new MutationObserver((n) => {
          for (const l of n) if (l.type === "childList") for (const i of l.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
        }).observe(document, { childList: true, subtree: true });
        function a(n) {
          const l = {};
          return n.integrity && (l.integrity = n.integrity), n.referrerPolicy && (l.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? l.credentials = "include" : n.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l;
        }
        function r(n) {
          if (n.ep) return;
          n.ep = true;
          const l = a(n);
          fetch(n.href, l);
        }
      })();
      Pt3 = "modulepreload";
      Dt3 = function(t) {
        return "/" + t;
      };
      Se3 = {};
      Ot3 = function(s, a, r) {
        let n = Promise.resolve();
        if (a && a.length > 0) {
          document.getElementsByTagName("link");
          const i = document.querySelector("meta[property=csp-nonce]"), d = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
          n = Promise.allSettled(a.map((u) => {
            if (u = Dt3(u), u in Se3) return;
            Se3[u] = true;
            const m = u.endsWith(".css"), x = m ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${u}"]${x}`)) return;
            const p = document.createElement("link");
            if (p.rel = m ? "stylesheet" : Pt3, m || (p.as = "script"), p.crossOrigin = "", p.href = u, d && p.setAttribute("nonce", d), document.head.appendChild(p), m) return new Promise((w, j3) => {
              p.addEventListener("load", w), p.addEventListener("error", () => j3(new Error(`Unable to preload CSS for ${u}`)));
            });
          }));
        }
        function l(i) {
          const d = new Event("vite:preloadError", { cancelable: true });
          if (d.payload = i, window.dispatchEvent(d), !d.defaultPrevented) throw i;
        }
        return n.then((i) => {
          for (const d of i || []) d.status === "rejected" && l(d.reason);
          return s().catch(l);
        });
      };
      Ce2 = Dc2;
      Ke4 = Ce2.createRoot, Ce2.hydrateRoot;
      _t3 = "/schedule/index.json";
      Ee3 = /* @__PURE__ */ new Map();
      Ie3 = /* @__PURE__ */ new Map();
      ne3 = /* @__PURE__ */ new Map();
      le4 = /* @__PURE__ */ new Map();
      Te4 = [{ name: "sky", bg: "bg-sky-100 dark:bg-sky-500/15", text: "text-sky-800 dark:text-sky-200", border: "border-sky-200 dark:border-sky-500/30" }, { name: "blue", bg: "bg-blue-100 dark:bg-blue-500/15", text: "text-blue-800 dark:text-blue-200", border: "border-blue-200 dark:border-blue-500/30" }, { name: "mint", bg: "bg-emerald-100 dark:bg-emerald-500/15", text: "text-emerald-800 dark:text-emerald-200", border: "border-emerald-200 dark:border-emerald-500/30" }, { name: "teal", bg: "bg-teal-100 dark:bg-teal-500/15", text: "text-teal-800 dark:text-teal-200", border: "border-teal-200 dark:border-teal-500/30" }, { name: "cyan", bg: "bg-cyan-100 dark:bg-cyan-500/15", text: "text-cyan-800 dark:text-cyan-200", border: "border-cyan-200 dark:border-cyan-500/30" }, { name: "peach", bg: "bg-orange-100 dark:bg-orange-500/15", text: "text-orange-800 dark:text-orange-200", border: "border-orange-200 dark:border-orange-500/30" }, { name: "amber", bg: "bg-amber-100 dark:bg-amber-500/15", text: "text-amber-800 dark:text-amber-200", border: "border-amber-200 dark:border-amber-500/30" }, { name: "pink", bg: "bg-pink-100 dark:bg-pink-500/15", text: "text-pink-800 dark:text-pink-200", border: "border-pink-200 dark:border-pink-500/30" }, { name: "rose", bg: "bg-rose-100 dark:bg-rose-500/15", text: "text-rose-800 dark:text-rose-200", border: "border-rose-200 dark:border-rose-500/30" }, { name: "lavender", bg: "bg-violet-100 dark:bg-violet-500/15", text: "text-violet-800 dark:text-violet-200", border: "border-violet-200 dark:border-violet-500/30" }, { name: "indigo", bg: "bg-indigo-100 dark:bg-indigo-500/15", text: "text-indigo-800 dark:text-indigo-200", border: "border-indigo-200 dark:border-indigo-500/30" }, { name: "slate", bg: "bg-slate-100 dark:bg-slate-500/15", text: "text-slate-700 dark:text-slate-200", border: "border-slate-200 dark:border-slate-500/30" }];
      Ye4 = "schedule.favorites.v1";
      xe4 = "schedule.recents.v1";
      Qe4 = "schedule.lastView.v1";
      Ge4 = 20;
      Je4 = 8;
      Z3 = (t, s) => t.kind === s.kind && t.name === s.name;
      tt4 = "schedule.theme";
      ss3 = ["", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D", "\u5468\u65E5"];
      nt3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "3" }), W.jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" }), W.jsx("line", { x1: "8", y1: "2", x2: "8", y2: "6" }), W.jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" })] });
      lt3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("circle", { cx: "11", cy: "11", r: "7" }), W.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })] });
      ot4 = (t) => W.jsx("svg", { ...g(t), children: W.jsx("polyline", { points: "15 18 9 12 15 6" }) });
      he3 = (t) => W.jsx("svg", { ...g(t), children: W.jsx("polyline", { points: "9 18 15 12 9 6" }) });
      us3 = (t) => W.jsx("svg", { ...g(t), children: W.jsx("polyline", { points: "6 9 12 15 18 9" }) });
      K3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), W.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] });
      be3 = ({ filled: t, ...s }) => W.jsx("svg", { ...g(s), fill: t ? "currentColor" : "none", children: W.jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
      Re4 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("circle", { cx: "12", cy: "12", r: "4" }), W.jsx("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })] });
      ms3 = (t) => W.jsx("svg", { ...g(t), children: W.jsx("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }) });
      it4 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("circle", { cx: "18", cy: "5", r: "3" }), W.jsx("circle", { cx: "6", cy: "12", r: "3" }), W.jsx("circle", { cx: "18", cy: "19", r: "3" }), W.jsx("line", { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }), W.jsx("line", { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" })] });
      ct4 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), W.jsx("circle", { cx: "12", cy: "10", r: "3" })] });
      Y3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }), W.jsx("circle", { cx: "12", cy: "7", r: "4" })] });
      dt3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), W.jsx("circle", { cx: "9", cy: "7", r: "4" }), W.jsx("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }), W.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })] });
      fe3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("circle", { cx: "12", cy: "12", r: "9" }), W.jsx("polyline", { points: "12 7 12 12 15 14" })] });
      La3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("path", { d: "M21 12a9 9 0 1 1-2.64-6.36" }), W.jsx("polyline", { points: "21 3 21 9 15 9" })] });
      xt4 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("circle", { cx: "12", cy: "12", r: "3" }), W.jsx("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" })] });
      Aa3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), W.jsx("polyline", { points: "17 8 12 3 7 8" }), W.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" })] });
      hs3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), W.jsx("polyline", { points: "7 10 12 15 17 10" }), W.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })] });
      Pa3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("polyline", { points: "3 6 5 6 21 6" }), W.jsx("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }), W.jsx("line", { x1: "10", y1: "11", x2: "10", y2: "17" }), W.jsx("line", { x1: "14", y1: "11", x2: "14", y2: "17" })] });
      Da3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }), W.jsx("polyline", { points: "16 17 21 12 16 7" }), W.jsx("line", { x1: "21", y1: "12", x2: "9", y2: "12" })] });
      Oa3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }), W.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })] });
      bs3 = (t) => W.jsx("svg", { ...g(t), children: W.jsx("polyline", { points: "20 6 9 17 4 12" }) });
      _a2 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" }), W.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }), W.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })] });
      $a3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), W.jsx("polyline", { points: "14 2 14 8 20 8" })] });
      fs3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), W.jsx("polyline", { points: "9 22 9 12 15 12 15 22" })] });
      gs3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("path", { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }), W.jsx("path", { d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" })] });
      Wa3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }), W.jsx("polyline", { points: "2 17 12 22 22 17" }), W.jsx("polyline", { points: "2 12 12 17 22 12" })] });
      ut3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }), W.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })] });
      ps3 = (t) => W.jsx("svg", { ...g(t), children: W.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }) });
      ys3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("polyline", { points: "20 12 20 22 4 22 4 12" }), W.jsx("rect", { x: "2", y: "7", width: "20", height: "5" }), W.jsx("line", { x1: "12", y1: "22", x2: "12", y2: "7" }), W.jsx("path", { d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" }), W.jsx("path", { d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" })] });
      js3 = (t) => W.jsx("svg", { ...g(t), children: W.jsx("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }) });
      ks3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("circle", { cx: "12", cy: "12", r: "10" }), W.jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }), W.jsx("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })] });
      ws3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }), W.jsx("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }), W.jsx("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" }), W.jsx("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" })] });
      vs3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("circle", { cx: "12", cy: "12", r: "10" }), W.jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }), W.jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })] });
      Ns3 = (t) => W.jsx("svg", { ...g(t), children: W.jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" }) });
      Ha3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }), W.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })] });
      za3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "5" }), W.jsx("polyline", { points: "5 12 12 5 19 12" })] });
      Ba3 = (t) => W.jsxs("svg", { ...g(t), children: [W.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }), W.jsx("polyline", { points: "19 12 12 19 5 12" })] });
      Ss3 = { home: fs3, book: gs3, calendar: nt3, users: dt3, user: Y3, star: (t) => W.jsx(be3, { ...t }), settings: xt4, share: it4, mappin: ct4, clock: fe3, link: ut3, message: ps3, gift: ys3, heart: js3, globe: ks3, grid: ws3, info: vs3, phone: Ns3, search: lt3, download: hs3 };
      Fa3 = [{ key: "link", label: "\u94FE\u63A5" }, { key: "home", label: "\u4E3B\u9875" }, { key: "globe", label: "\u7F51\u7AD9" }, { key: "grid", label: "\u5E94\u7528" }, { key: "book", label: "\u4E66\u7C4D" }, { key: "calendar", label: "\u65E5\u5386" }, { key: "clock", label: "\u65F6\u949F" }, { key: "message", label: "\u6D88\u606F" }, { key: "phone", label: "\u7535\u8BDD" }, { key: "user", label: "\u7528\u6237" }, { key: "users", label: "\u7FA4\u7EC4" }, { key: "star", label: "\u6536\u85CF" }, { key: "heart", label: "\u559C\u6B22" }, { key: "gift", label: "\u793C\u7269" }, { key: "info", label: "\u4FE1\u606F" }, { key: "mappin", label: "\u4F4D\u7F6E" }, { key: "share", label: "\u5206\u4EAB" }, { key: "search", label: "\u641C\u7D22" }, { key: "download", label: "\u4E0B\u8F7D" }, { key: "settings", label: "\u8BBE\u7F6E" }];
      J4 = 200;
      oe4 = { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, transition: { duration: 0.22 } };
      Le4 = ["college", "major", "class"];
      Es3 = { college: "\u5B66\u9662", major: "\u4E13\u4E1A", class: "\u73ED\u7EA7" };
      Ae4 = ["\u7814\u7A76\u751F\u9662", "\u5176\u4ED6"];
      Fs3 = 0.32;
      Vs3 = 8;
      mt4 = "schedule.popup.dismissed.v1";
      Js3 = 7;
      ge3 = 10;
      Xs3 = ["\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D", "\u5468\u65E5"];
      Array.from({ length: ge3 }, (t, s) => `\u7B2C${s + 1}\u8282`);
      D4 = 0;
      ht3 = "\u5F85\u5B9A";
      ia3 = v.memo(oa3);
      ca3 = { "no-timed": { title: "\u5F53\u524D\u73ED\u7EA7\u6682\u65E0\u53EF\u5728\u7F51\u683C\u5C55\u793A\u7684\u56FA\u5B9A\u65F6\u95F4\u8BFE\u7A0B", hint: "\u8BE5\u73ED\u7EA7\u53EF\u80FD\u4ECD\u6709\u65E0\u56FA\u5B9A\u65F6\u95F4\u8BFE\u7A0B\uFF0C\u53EF\u5728\u4E0B\u65B9\u5217\u8868\u4E2D\u67E5\u770B\u3002" }, "no-courses": { title: "\u8BE5\u73ED\u7EA7\u6682\u65E0\u4EFB\u4F55\u8BFE\u7A0B\u6570\u636E", hint: "\u8BF7\u5C1D\u8BD5\u9009\u62E9\u5176\u4ED6\u73ED\u7EA7\uFF0C\u6216\u786E\u8BA4\u8BE5\u73ED\u7EA7\u672C\u5B66\u671F\u662F\u5426\u5DF2\u5B89\u6392\u8BFE\u7A0B\u3002" } };
      xa2 = v.memo(da3);
      H = 1;
      ft3 = "schedule.showWeekend.v1";
      He4 = 64;
      ye3 = "\u672A\u63D0\u4F9B";
      ya3 = v.memo(pa3);
      ka3 = [{ col: 1, row: 1, span: 2 }, { col: 2, row: 3, span: 2 }, { col: 3, row: 1, span: 2 }, { col: 4, row: 5, span: 2 }, { col: 5, row: 2, span: 2 }, { col: 2, row: 6, span: 2 }, { col: 5, row: 5, span: 2 }, { col: 1, row: 5, span: 2 }, { col: 3, row: 6, span: 2 }];
      X3 = { duration: 0.25 };
      Ca3 = v.lazy(() => Ot3(() => Promise.resolve().then(() => (init_AdminApp_DEDpPrVC(), AdminApp_DEDpPrVC_exports)), __vite__mapDeps([0, 1, 2])));
      gt3 = document.getElementById("root");
      if (!gt3) throw new Error("\u672A\u627E\u5230 #root \u6302\u8F7D\u8282\u70B9");
      Ke4(gt3).render(W.jsx(v.StrictMode, { children: W.jsx(Ia3, {}) }));
    }
  });
  init_index_Cmv43DoB();
})();
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
