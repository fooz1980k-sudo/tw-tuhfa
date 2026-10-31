var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js
var t, e, s, o, n, r, i, S, c;
var init_css_tag = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js"() {
    t = globalThis;
    e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    s = Symbol();
    o = /* @__PURE__ */ new WeakMap();
    n = class {
      constructor(t3, e6, o8) {
        if (this._$cssResult$ = true, o8 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t3, this.t = e6;
      }
      get styleSheet() {
        let t3 = this.o;
        const s7 = this.t;
        if (e && void 0 === t3) {
          const e6 = void 0 !== s7 && 1 === s7.length;
          e6 && (t3 = o.get(s7)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && o.set(s7, t3));
        }
        return t3;
      }
      toString() {
        return this.cssText;
      }
    };
    r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
    i = (t3, ...e6) => {
      const o8 = 1 === t3.length ? t3[0] : e6.reduce((e7, s7, o9) => e7 + ((t4) => {
        if (true === t4._$cssResult$) return t4.cssText;
        if ("number" == typeof t4) return t4;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(s7) + t3[o9 + 1], t3[0]);
      return new n(o8, t3, s);
    };
    S = (s7, o8) => {
      if (e) s7.adoptedStyleSheets = o8.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
      else for (const e6 of o8) {
        const o9 = document.createElement("style"), n5 = t.litNonce;
        void 0 !== n5 && o9.setAttribute("nonce", n5), o9.textContent = e6.cssText, s7.appendChild(o9);
      }
    };
    c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
      let e6 = "";
      for (const s7 of t4.cssRules) e6 += s7.cssText;
      return r(e6);
    })(t3) : t3;
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js
var i2, e2, h, r2, o2, n2, a, c2, l, p, d, u, f, b, y;
var init_reactive_element = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js"() {
    init_css_tag();
    init_css_tag();
    ({ is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object);
    a = globalThis;
    c2 = a.trustedTypes;
    l = c2 ? c2.emptyScript : "";
    p = a.reactiveElementPolyfillSupport;
    d = (t3, s7) => t3;
    u = { toAttribute(t3, s7) {
      switch (s7) {
        case Boolean:
          t3 = t3 ? l : null;
          break;
        case Object:
        case Array:
          t3 = null == t3 ? t3 : JSON.stringify(t3);
      }
      return t3;
    }, fromAttribute(t3, s7) {
      let i5 = t3;
      switch (s7) {
        case Boolean:
          i5 = null !== t3;
          break;
        case Number:
          i5 = null === t3 ? null : Number(t3);
          break;
        case Object:
        case Array:
          try {
            i5 = JSON.parse(t3);
          } catch (t4) {
            i5 = null;
          }
      }
      return i5;
    } };
    f = (t3, s7) => !i2(t3, s7);
    b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
    Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
    y = class extends HTMLElement {
      static addInitializer(t3) {
        this._$Ei(), (this.l ??= []).push(t3);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(t3, s7 = b) {
        if (s7.state && (s7.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s7 = Object.create(s7)).wrapped = true), this.elementProperties.set(t3, s7), !s7.noAccessor) {
          const i5 = Symbol(), h8 = this.getPropertyDescriptor(t3, i5, s7);
          void 0 !== h8 && e2(this.prototype, t3, h8);
        }
      }
      static getPropertyDescriptor(t3, s7, i5) {
        const { get: e6, set: r7 } = h(this.prototype, t3) ?? { get() {
          return this[s7];
        }, set(t4) {
          this[s7] = t4;
        } };
        return { get: e6, set(s8) {
          const h8 = e6?.call(this);
          r7?.call(this, s8), this.requestUpdate(t3, h8, i5);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t3) {
        return this.elementProperties.get(t3) ?? b;
      }
      static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t3 = n2(this);
        t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
          const t4 = this.properties, s7 = [...r2(t4), ...o2(t4)];
          for (const i5 of s7) this.createProperty(i5, t4[i5]);
        }
        const t3 = this[Symbol.metadata];
        if (null !== t3) {
          const s7 = litPropertyMetadata.get(t3);
          if (void 0 !== s7) for (const [t4, i5] of s7) this.elementProperties.set(t4, i5);
        }
        this._$Eh = /* @__PURE__ */ new Map();
        for (const [t4, s7] of this.elementProperties) {
          const i5 = this._$Eu(t4, s7);
          void 0 !== i5 && this._$Eh.set(i5, t4);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
      static finalizeStyles(s7) {
        const i5 = [];
        if (Array.isArray(s7)) {
          const e6 = new Set(s7.flat(1 / 0).reverse());
          for (const s8 of e6) i5.unshift(c(s8));
        } else void 0 !== s7 && i5.push(c(s7));
        return i5;
      }
      static _$Eu(t3, s7) {
        const i5 = s7.attribute;
        return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
      }
      constructor() {
        super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
      }
      _$Ev() {
        this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
      }
      addController(t3) {
        (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
      }
      removeController(t3) {
        this._$EO?.delete(t3);
      }
      _$E_() {
        const t3 = /* @__PURE__ */ new Map(), s7 = this.constructor.elementProperties;
        for (const i5 of s7.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
        t3.size > 0 && (this._$Ep = t3);
      }
      createRenderRoot() {
        const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return S(t3, this.constructor.elementStyles), t3;
      }
      connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
      }
      enableUpdating(t3) {
      }
      disconnectedCallback() {
        this._$EO?.forEach((t3) => t3.hostDisconnected?.());
      }
      attributeChangedCallback(t3, s7, i5) {
        this._$AK(t3, i5);
      }
      _$ET(t3, s7) {
        const i5 = this.constructor.elementProperties.get(t3), e6 = this.constructor._$Eu(t3, i5);
        if (void 0 !== e6 && true === i5.reflect) {
          const h8 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s7, i5.type);
          this._$Em = t3, null == h8 ? this.removeAttribute(e6) : this.setAttribute(e6, h8), this._$Em = null;
        }
      }
      _$AK(t3, s7) {
        const i5 = this.constructor, e6 = i5._$Eh.get(t3);
        if (void 0 !== e6 && this._$Em !== e6) {
          const t4 = i5.getPropertyOptions(e6), h8 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
          this._$Em = e6;
          const r7 = h8.fromAttribute(s7, t4.type);
          this[e6] = r7 ?? this._$Ej?.get(e6) ?? r7, this._$Em = null;
        }
      }
      requestUpdate(t3, s7, i5, e6 = false, h8) {
        if (void 0 !== t3) {
          const r7 = this.constructor;
          if (false === e6 && (h8 = this[t3]), i5 ??= r7.getPropertyOptions(t3), !((i5.hasChanged ?? f)(h8, s7) || i5.useDefault && i5.reflect && h8 === this._$Ej?.get(t3) && !this.hasAttribute(r7._$Eu(t3, i5)))) return;
          this.C(t3, s7, i5);
        }
        false === this.isUpdatePending && (this._$ES = this._$EP());
      }
      C(t3, s7, { useDefault: i5, reflect: e6, wrapped: h8 }, r7) {
        i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r7 ?? s7 ?? this[t3]), true !== h8 || void 0 !== r7) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s7 = void 0), this._$AL.set(t3, s7)), true === e6 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
      }
      async _$EP() {
        this.isUpdatePending = true;
        try {
          await this._$ES;
        } catch (t4) {
          Promise.reject(t4);
        }
        const t3 = this.scheduleUpdate();
        return null != t3 && await t3, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
          if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
            for (const [t5, s8] of this._$Ep) this[t5] = s8;
            this._$Ep = void 0;
          }
          const t4 = this.constructor.elementProperties;
          if (t4.size > 0) for (const [s8, i5] of t4) {
            const { wrapped: t5 } = i5, e6 = this[s8];
            true !== t5 || this._$AL.has(s8) || void 0 === e6 || this.C(s8, void 0, i5, e6);
          }
        }
        let t3 = false;
        const s7 = this._$AL;
        try {
          t3 = this.shouldUpdate(s7), t3 ? (this.willUpdate(s7), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s7)) : this._$EM();
        } catch (s8) {
          throw t3 = false, this._$EM(), s8;
        }
        t3 && this._$AE(s7);
      }
      willUpdate(t3) {
      }
      _$AE(t3) {
        this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
      }
      _$EM() {
        this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$ES;
      }
      shouldUpdate(t3) {
        return true;
      }
      update(t3) {
        this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
      }
      updated(t3) {
      }
      firstUpdated(t3) {
      }
    };
    y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");
  }
});

// node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js
function V(t3, i5) {
  if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
function M(t3, i5, s7 = t3, e6) {
  if (i5 === E) return i5;
  let h8 = void 0 !== e6 ? s7._$Co?.[e6] : s7._$Cl;
  const o8 = a2(i5) ? void 0 : i5._$litDirective$;
  return h8?.constructor !== o8 && (h8?._$AO?.(false), void 0 === o8 ? h8 = void 0 : (h8 = new o8(t3), h8._$AT(t3, s7, e6)), void 0 !== e6 ? (s7._$Co ??= [])[e6] = h8 : s7._$Cl = h8), void 0 !== h8 && (i5 = M(t3, h8._$AS(t3, i5.values), h8, e6)), i5;
}
var t2, i3, s2, e3, h2, o3, n3, r3, l2, c3, a2, u2, d2, f2, v, _, m, p2, g, $, y2, x, b2, w, T, E, A, C, P, N, S2, R, k, H, I, L, z, Z, B, D;
var init_lit_html = __esm({
  "node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js"() {
    t2 = globalThis;
    i3 = (t3) => t3;
    s2 = t2.trustedTypes;
    e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
    h2 = "$lit$";
    o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
    n3 = "?" + o3;
    r3 = `<${n3}>`;
    l2 = document;
    c3 = () => l2.createComment("");
    a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
    u2 = Array.isArray;
    d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
    f2 = "[ 	\n\f\r]";
    v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    _ = /-->/g;
    m = />/g;
    p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
    g = /'/g;
    $ = /"/g;
    y2 = /^(?:script|style|textarea|title)$/i;
    x = (t3) => (i5, ...s7) => ({ _$litType$: t3, strings: i5, values: s7 });
    b2 = x(1);
    w = x(2);
    T = x(3);
    E = Symbol.for("lit-noChange");
    A = Symbol.for("lit-nothing");
    C = /* @__PURE__ */ new WeakMap();
    P = l2.createTreeWalker(l2, 129);
    N = (t3, i5) => {
      const s7 = t3.length - 1, e6 = [];
      let n5, l6 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c6 = v;
      for (let i6 = 0; i6 < s7; i6++) {
        const s8 = t3[i6];
        let a4, u6, d3 = -1, f8 = 0;
        for (; f8 < s8.length && (c6.lastIndex = f8, u6 = c6.exec(s8), null !== u6); ) f8 = c6.lastIndex, c6 === v ? "!--" === u6[1] ? c6 = _ : void 0 !== u6[1] ? c6 = m : void 0 !== u6[2] ? (y2.test(u6[2]) && (n5 = RegExp("</" + u6[2], "g")), c6 = p2) : void 0 !== u6[3] && (c6 = p2) : c6 === p2 ? ">" === u6[0] ? (c6 = n5 ?? v, d3 = -1) : void 0 === u6[1] ? d3 = -2 : (d3 = c6.lastIndex - u6[2].length, a4 = u6[1], c6 = void 0 === u6[3] ? p2 : '"' === u6[3] ? $ : g) : c6 === $ || c6 === g ? c6 = p2 : c6 === _ || c6 === m ? c6 = v : (c6 = p2, n5 = void 0);
        const x6 = c6 === p2 && t3[i6 + 1].startsWith("/>") ? " " : "";
        l6 += c6 === v ? s8 + r3 : d3 >= 0 ? (e6.push(a4), s8.slice(0, d3) + h2 + s8.slice(d3) + o3 + x6) : s8 + o3 + (-2 === d3 ? i6 : x6);
      }
      return [V(t3, l6 + (t3[s7] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e6];
    };
    S2 = class _S {
      constructor({ strings: t3, _$litType$: i5 }, e6) {
        let r7;
        this.parts = [];
        let l6 = 0, a4 = 0;
        const u6 = t3.length - 1, d3 = this.parts, [f8, v5] = N(t3, i5);
        if (this.el = _S.createElement(f8, e6), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
          const t4 = this.el.content.firstChild;
          t4.replaceWith(...t4.childNodes);
        }
        for (; null !== (r7 = P.nextNode()) && d3.length < u6; ) {
          if (1 === r7.nodeType) {
            if (r7.hasAttributes()) for (const t4 of r7.getAttributeNames()) if (t4.endsWith(h2)) {
              const i6 = v5[a4++], s7 = r7.getAttribute(t4).split(o3), e7 = /([.?@])?(.*)/.exec(i6);
              d3.push({ type: 1, index: l6, name: e7[2], strings: s7, ctor: "." === e7[1] ? I : "?" === e7[1] ? L : "@" === e7[1] ? z : H }), r7.removeAttribute(t4);
            } else t4.startsWith(o3) && (d3.push({ type: 6, index: l6 }), r7.removeAttribute(t4));
            if (y2.test(r7.tagName)) {
              const t4 = r7.textContent.split(o3), i6 = t4.length - 1;
              if (i6 > 0) {
                r7.textContent = s2 ? s2.emptyScript : "";
                for (let s7 = 0; s7 < i6; s7++) r7.append(t4[s7], c3()), P.nextNode(), d3.push({ type: 2, index: ++l6 });
                r7.append(t4[i6], c3());
              }
            }
          } else if (8 === r7.nodeType) if (r7.data === n3) d3.push({ type: 2, index: l6 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = r7.data.indexOf(o3, t4 + 1)); ) d3.push({ type: 7, index: l6 }), t4 += o3.length - 1;
          }
          l6++;
        }
      }
      static createElement(t3, i5) {
        const s7 = l2.createElement("template");
        return s7.innerHTML = t3, s7;
      }
    };
    R = class {
      constructor(t3, i5) {
        this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      u(t3) {
        const { el: { content: i5 }, parts: s7 } = this._$AD, e6 = (t3?.creationScope ?? l2).importNode(i5, true);
        P.currentNode = e6;
        let h8 = P.nextNode(), o8 = 0, n5 = 0, r7 = s7[0];
        for (; void 0 !== r7; ) {
          if (o8 === r7.index) {
            let i6;
            2 === r7.type ? i6 = new k(h8, h8.nextSibling, this, t3) : 1 === r7.type ? i6 = new r7.ctor(h8, r7.name, r7.strings, this, t3) : 6 === r7.type && (i6 = new Z(h8, this, t3)), this._$AV.push(i6), r7 = s7[++n5];
          }
          o8 !== r7?.index && (h8 = P.nextNode(), o8++);
        }
        return P.currentNode = l2, e6;
      }
      p(t3) {
        let i5 = 0;
        for (const s7 of this._$AV) void 0 !== s7 && (void 0 !== s7.strings ? (s7._$AI(t3, s7, i5), i5 += s7.strings.length - 2) : s7._$AI(t3[i5])), i5++;
      }
    };
    k = class _k {
      get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
      }
      constructor(t3, i5, s7, e6) {
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s7, this.options = e6, this._$Cv = e6?.isConnected ?? true;
      }
      get parentNode() {
        let t3 = this._$AA.parentNode;
        const i5 = this._$AM;
        return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t3, i5 = this) {
        t3 = M(this, t3, i5), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
      }
      O(t3) {
        return this._$AA.parentNode.insertBefore(t3, this._$AB);
      }
      T(t3) {
        this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
      }
      _(t3) {
        this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
      }
      $(t3) {
        const { values: i5, _$litType$: s7 } = t3, e6 = "number" == typeof s7 ? this._$AC(t3) : (void 0 === s7.el && (s7.el = S2.createElement(V(s7.h, s7.h[0]), this.options)), s7);
        if (this._$AH?._$AD === e6) this._$AH.p(i5);
        else {
          const t4 = new R(e6, this), s8 = t4.u(this.options);
          t4.p(i5), this.T(s8), this._$AH = t4;
        }
      }
      _$AC(t3) {
        let i5 = C.get(t3.strings);
        return void 0 === i5 && C.set(t3.strings, i5 = new S2(t3)), i5;
      }
      k(t3) {
        u2(this._$AH) || (this._$AH = [], this._$AR());
        const i5 = this._$AH;
        let s7, e6 = 0;
        for (const h8 of t3) e6 === i5.length ? i5.push(s7 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s7 = i5[e6], s7._$AI(h8), e6++;
        e6 < i5.length && (this._$AR(s7 && s7._$AB.nextSibling, e6), i5.length = e6);
      }
      _$AR(t3 = this._$AA.nextSibling, s7) {
        for (this._$AP?.(false, true, s7); t3 !== this._$AB; ) {
          const s8 = i3(t3).nextSibling;
          i3(t3).remove(), t3 = s8;
        }
      }
      setConnected(t3) {
        void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
      }
    };
    H = class {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(t3, i5, s7, e6, h8) {
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e6, this.options = h8, s7.length > 2 || "" !== s7[0] || "" !== s7[1] ? (this._$AH = Array(s7.length - 1).fill(new String()), this.strings = s7) : this._$AH = A;
      }
      _$AI(t3, i5 = this, s7, e6) {
        const h8 = this.strings;
        let o8 = false;
        if (void 0 === h8) t3 = M(this, t3, i5, 0), o8 = !a2(t3) || t3 !== this._$AH && t3 !== E, o8 && (this._$AH = t3);
        else {
          const e7 = t3;
          let n5, r7;
          for (t3 = h8[0], n5 = 0; n5 < h8.length - 1; n5++) r7 = M(this, e7[s7 + n5], i5, n5), r7 === E && (r7 = this._$AH[n5]), o8 ||= !a2(r7) || r7 !== this._$AH[n5], r7 === A ? t3 = A : t3 !== A && (t3 += (r7 ?? "") + h8[n5 + 1]), this._$AH[n5] = r7;
        }
        o8 && !e6 && this.j(t3);
      }
      j(t3) {
        t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
      }
    };
    I = class extends H {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(t3) {
        this.element[this.name] = t3 === A ? void 0 : t3;
      }
    };
    L = class extends H {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(t3) {
        this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
      }
    };
    z = class extends H {
      constructor(t3, i5, s7, e6, h8) {
        super(t3, i5, s7, e6, h8), this.type = 5;
      }
      _$AI(t3, i5 = this) {
        if ((t3 = M(this, t3, i5, 0) ?? A) === E) return;
        const s7 = this._$AH, e6 = t3 === A && s7 !== A || t3.capture !== s7.capture || t3.once !== s7.once || t3.passive !== s7.passive, h8 = t3 !== A && (s7 === A || e6);
        e6 && this.element.removeEventListener(this.name, this, s7), h8 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
      }
      handleEvent(t3) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
      }
    };
    Z = class {
      constructor(t3, i5, s7) {
        this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s7;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t3) {
        M(this, t3);
      }
    };
    B = t2.litHtmlPolyfillSupport;
    B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.3");
    D = (t3, i5, s7) => {
      const e6 = s7?.renderBefore ?? i5;
      let h8 = e6._$litPart$;
      if (void 0 === h8) {
        const t4 = s7?.renderBefore ?? null;
        e6._$litPart$ = h8 = new k(i5.insertBefore(c3(), t4), t4, void 0, s7 ?? {});
      }
      return h8._$AI(t3), h8;
    };
  }
});

// node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js
var s3, i4, o4;
var init_lit_element = __esm({
  "node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js"() {
    init_reactive_element();
    init_reactive_element();
    init_lit_html();
    init_lit_html();
    s3 = globalThis;
    i4 = class extends y {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
      }
      createRenderRoot() {
        const t3 = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t3.firstChild, t3;
      }
      update(t3) {
        const r7 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r7, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(true);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(false);
      }
      render() {
        return E;
      }
    };
    i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
    o4 = s3.litElementPolyfillSupport;
    o4?.({ LitElement: i4 });
    (s3.litElementVersions ??= []).push("4.2.2");
  }
});

// node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js
var init_is_server = __esm({
  "node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js"() {
  }
});

// node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js
var init_lit = __esm({
  "node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js"() {
    init_reactive_element();
    init_lit_html();
    init_lit_element();
    init_is_server();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js
var init_custom_element = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js"() {
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js
function n4(t3) {
  return (e6, o8) => "object" == typeof o8 ? r4(t3, e6, o8) : ((t4, e7, o9) => {
    const r7 = e7.hasOwnProperty(o9);
    return e7.constructor.createProperty(o9, t4), r7 ? Object.getOwnPropertyDescriptor(e7, o9) : void 0;
  })(t3, e6, o8);
}
var o5, r4;
var init_property = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js"() {
    init_reactive_element();
    o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
    r4 = (t3 = o5, e6, r7) => {
      const { kind: n5, metadata: i5 } = r7;
      let s7 = globalThis.litPropertyMetadata.get(i5);
      if (void 0 === s7 && globalThis.litPropertyMetadata.set(i5, s7 = /* @__PURE__ */ new Map()), "setter" === n5 && ((t3 = Object.create(t3)).wrapped = true), s7.set(r7.name, t3), "accessor" === n5) {
        const { name: o8 } = r7;
        return { set(r8) {
          const n6 = e6.get.call(this);
          e6.set.call(this, r8), this.requestUpdate(o8, n6, t3, true, r8);
        }, init(e7) {
          return void 0 !== e7 && this.C(o8, void 0, t3, e7), e7;
        } };
      }
      if ("setter" === n5) {
        const { name: o8 } = r7;
        return function(r8) {
          const n6 = this[o8];
          e6.call(this, r8), this.requestUpdate(o8, n6, t3, true, r8);
        };
      }
      throw Error("Unsupported decorator location: " + n5);
    };
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js
function r5(r7) {
  return n4({ ...r7, state: true, attribute: false });
}
var init_state = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js"() {
    init_property();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js
var init_event_options = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js"() {
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js
var init_base = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js"() {
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js
var init_query = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js"() {
    init_base();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js
var init_query_all = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js"() {
    init_base();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js
var init_query_async = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js"() {
    init_base();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var init_query_assigned_elements = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js"() {
    init_base();
  }
});

// node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
var init_query_assigned_nodes = __esm({
  "node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"() {
    init_base();
  }
});

// node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js
var init_decorators = __esm({
  "node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js"() {
    init_custom_element();
    init_property();
    init_state();
    init_event_options();
    init_query();
    init_query_all();
    init_query_async();
    init_query_assigned_elements();
    init_query_assigned_nodes();
  }
});

// dist/tuhfa-hero.js
var tuhfa_hero_exports = {};
__export(tuhfa_hero_exports, {
  default: () => l3
});
var z2, o6, M2, j, y3, p3, l3;
var init_tuhfa_hero = __esm({
  "dist/tuhfa-hero.js"() {
    "use strict";
    init_lit();
    init_decorators();
    z2 = i`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
    o6 = (r7) => String(r7 && typeof r7 == "object" ? r7[(document.documentElement.lang || "ar").slice(0, 2)] ?? r7.ar ?? "" : r7 ?? "");
    M2 = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
    j = Object.defineProperty;
    y3 = (r7, t3, e6, h8) => {
      for (var n5 = void 0, c6 = r7.length - 1, d3; c6 >= 0; c6--)
        (d3 = r7[c6]) && (n5 = d3(t3, e6, n5) || n5);
      return n5 && j(t3, e6, n5), n5;
    };
    p3 = class p4 extends i4 {
      constructor() {
        super(...arguments), this.i = 0, this.x0 = 0, this.vis = () => document.hidden ? clearInterval(this.timer) : this.play();
      }
      connectedCallback() {
        super.connectedCallback(), this.play(), document.addEventListener("visibilitychange", this.vis);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), clearInterval(this.timer), document.removeEventListener("visibilitychange", this.vis);
      }
      // Config arrives on the first update (after connectedCallback): restart autoplay whenever it changes.
      updated(t3) {
        t3.has("config") && this.play();
      }
      get slides() {
        var t3;
        return (((t3 = this.config) == null ? void 0 : t3.slides) ?? []).filter((e6) => e6 == null ? void 0 : e6.image);
      }
      get secs() {
        var t3;
        return Math.max(3, Math.min(20, Number((t3 = this.config) == null ? void 0 : t3.seconds) || 7));
      }
      play() {
        clearInterval(this.timer), this.slides.length > 1 && !M2() && (this.timer = window.setInterval(() => this.go(this.i + 1), this.secs * 1e3));
      }
      go(t3) {
        const e6 = this.slides.length;
        e6 && (this.i = (t3 + e6) % e6, this.play());
      }
      render() {
        var c6, d3, f8, g5, m6, x6, b7, u6;
        const t3 = this.slides;
        if (!t3.length) return b2`<div class="empty">أضف صور العرض السينمائي من إعدادات العنصر</div>`;
        const h8 = (Array.isArray((c6 = this.config) == null ? void 0 : c6.align) ? (g5 = (f8 = (d3 = this.config) == null ? void 0 : d3.align) == null ? void 0 : f8[0]) == null ? void 0 : g5.value : (m6 = this.config) == null ? void 0 : m6.align) === "center", n5 = `--h:${Math.max(50, Math.min(100, Number((x6 = this.config) == null ? void 0 : x6.height) || 78))}vh;--o:${Math.max(0, Math.min(85, Number(((b7 = this.config) == null ? void 0 : b7.overlay) ?? 55))) / 100};--dur:${this.secs}s;--ji:${h8 ? "center" : "start"};--ta:${h8 ? "center" : "start"};${(u6 = this.config) != null && u6.color ? `--tf-custom:${this.config.color}` : ""}`;
        return b2`<section class="hero" style=${n5} @mouseenter=${() => clearInterval(this.timer)} @mouseleave=${() => this.play()}
      @touchstart=${(i5) => this.x0 = i5.touches[0].clientX} @touchend=${(i5) => {
          const a4 = i5.changedTouches[0].clientX - this.x0;
          Math.abs(a4) > 40 && this.go(this.i + (a4 < 0 ? 1 : -1));
        }}>
      ${t3.map((i5, a4) => b2`<div class="s ${a4 === this.i ? "on" : ""}" aria-hidden=${a4 !== this.i}>
        <img src=${i5.image} alt=${o6(i5.title)} loading=${a4 ? "lazy" : "eager"} />
        <div class="shade"></div>
        <div class="txt">${o6(i5.title) ? b2`<h2>${o6(i5.title)}</h2>` : ""}${o6(i5.subtitle) ? b2`<p>${o6(i5.subtitle)}</p>` : ""}
          ${o6(i5.button) && i5.link ? b2`<a class="btn" href=${i5.link}>${o6(i5.button)} ←</a>` : ""}</div></div>`)}
      ${t3.length > 1 ? b2`<div class="bars">${t3.map((i5, a4) => b2`<button class="bar ${a4 === this.i ? "on" : a4 < this.i ? "done" : ""}" aria-label=${`\u0627\u0644\u0634\u0631\u064A\u062D\u0629 ${a4 + 1}`} @click=${() => this.go(a4)}><i></i></button>`)}</div>` : ""}
    </section>`;
      }
    };
    p3.styles = [z2, i`
    .hero { position: relative; overflow: hidden; height: var(--h, 78vh); min-height: 420px; max-height: 900px; color: #fff; background: #0f0c18; border-radius: 0; }
    .s { position: absolute; inset: 0; opacity: 0; transition: opacity 1.2s ease; }
    .s.on { opacity: 1; }
    .s img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.04); }
    .s.on img { animation: kb var(--dur, 7s) linear forwards; }
    @keyframes kb { from { transform: scale(1.04); } to { transform: scale(1.14) translate(-1.5%, -1%); } }
    .shade { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(10,8,18,var(--o,.55)) 0, rgba(10,8,18,calc(var(--o,.55) * .35)) 55%, transparent 100%); }
    .txt { position: absolute; inset: auto 0 0 0; padding: clamp(24px, 6vw, 80px); display: grid; gap: 14px; justify-items: var(--ji, start); text-align: var(--ta, start); }
    .txt h2 { margin: 0; font-size: clamp(30px, 5.6vw, 72px); line-height: 1.12; font-weight: 800; max-width: 16ch; text-shadow: 0 6px 30px #0008;
      opacity: 0; transform: translateY(18px); transition: all .9s .25s; }
    .txt p { margin: 0; max-width: 46ch; font-size: clamp(15px, 1.8vw, 20px); line-height: 1.8; opacity: 0; transform: translateY(18px); transition: all .9s .45s; color: #f2ecff; }
    .txt .btn { opacity: 0; transform: translateY(18px); transition: all .9s .6s, box-shadow .25s; }
    .s.on .txt h2, .s.on .txt p, .s.on .txt .btn { opacity: 1; transform: none; }
    .bars { position: absolute; z-index: 2; inset: 18px clamp(18px, 4vw, 48px) auto; display: flex; gap: 8px; }
    .bar { flex: 1; height: 3px; border-radius: 3px; background: #fff4; overflow: hidden; cursor: pointer; border: 0; padding: 0; }
    .bar i { display: block; height: 100%; width: 0; background: var(--tf-accent); }
    .bar.done i { width: 100%; } .bar.on i { animation: fill var(--dur, 7s) linear forwards; }
    @keyframes fill { to { width: 100%; } }
    .empty { display: grid; place-items: center; height: 300px; color: var(--tf-mut); background: #0f0c18; border: 1px dashed #c9a45c66; }
  `];
    l3 = p3;
    y3([
      n4({ type: Object })
    ], l3.prototype, "config");
    y3([
      r5()
    ], l3.prototype, "i");
    typeof l3 < "u" && l3.registerSallaComponent("salla-tuhfa-hero");
  }
});

// dist/tuhfa-smart-products.js
var tuhfa_smart_products_exports = {};
__export(tuhfa_smart_products_exports, {
  default: () => u3
});
function z3(t3) {
  var i5, r7, o8, l6, n5, s7;
  const a4 = c4(t3 == null ? void 0 : t3.sale_price) && c4(t3 == null ? void 0 : t3.sale_price) < c4((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)) ? c4(t3 == null ? void 0 : t3.sale_price) : c4(t3 == null ? void 0 : t3.price), e6 = Math.max(c4(t3 == null ? void 0 : t3.regular_price), c4(t3 == null ? void 0 : t3.price), a4);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((i5 = t3 == null ? void 0 : t3.image) == null ? void 0 : i5.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? ((o8 = (r7 = t3 == null ? void 0 : t3.images) == null ? void 0 : r7[0]) == null ? void 0 : o8.url) ?? ""),
    price: a4,
    regular: e6,
    rating: c4(((l6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : l6.stars) ?? ((n5 = t3 == null ? void 0 : t3.rating) == null ? void 0 : n5.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: c4((s7 = t3 == null ? void 0 : t3.rating) == null ? void 0 : s7.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : c4(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out"
  };
}
async function _2(t3) {
  return await w2(), (await Promise.all(q(t3).map((e6) => {
    var i5, r7, o8, l6;
    return (l6 = (o8 = (r7 = (i5 = g2()) == null ? void 0 : i5.product) == null ? void 0 : r7.api) == null ? void 0 : o8.getDetails) == null ? void 0 : l6.call(o8, e6).then((n5) => z3(n5 == null ? void 0 : n5.data)).catch(() => null);
  }))).filter((e6) => !!e6 && !!e6.name);
}
async function C2(t3) {
  var a4, e6, i5;
  await w2();
  try {
    await ((i5 = (e6 = (a4 = g2()) == null ? void 0 : a4.cart) == null ? void 0 : e6.addItem) == null ? void 0 : i5.call(e6, { id: t3, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t3}`;
  }
}
function S3(t3) {
  var a4, e6;
  try {
    (e6 = (a4 = g2()) == null ? void 0 : a4.success) == null || e6.call(a4, t3);
  } catch {
  }
}
var p5, g2, w2, x2, c4, q, b3, f3, j2, m2, h3, u3;
var init_tuhfa_smart_products = __esm({
  "dist/tuhfa-smart-products.js"() {
    "use strict";
    init_lit();
    init_decorators();
    p5 = i`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
    g2 = () => window.Salla;
    w2 = async () => {
      var t3, a4;
      try {
        await ((a4 = (t3 = g2()) == null ? void 0 : t3.onReady) == null ? void 0 : a4.call(t3));
      } catch {
      }
    };
    x2 = (t3, a4) => (document.documentElement.lang || "ar").startsWith("en") ? a4 : t3;
    c4 = (t3) => {
      const a4 = typeof t3 == "object" && t3 ? t3.amount : t3, e6 = Number(a4);
      return Number.isFinite(e6) ? e6 : 0;
    };
    q = (t3) => (Array.isArray(t3) ? t3 : []).map((a4) => Number(typeof a4 == "object" && a4 ? a4.value : a4)).filter((a4) => Number.isFinite(a4) && a4 > 0);
    b3 = (t3) => {
      var a4, e6;
      try {
        return ((e6 = (a4 = g2()) == null ? void 0 : a4.money) == null ? void 0 : e6.call(a4, t3)) ?? `${t3} ${x2("\u0631.\u0633", "SAR")}`;
      } catch {
        return `${t3} ${x2("\u0631.\u0633", "SAR")}`;
      }
    };
    f3 = (t3) => String(t3 && typeof t3 == "object" ? t3[(document.documentElement.lang || "ar").slice(0, 2)] ?? t3.ar ?? "" : t3 ?? "");
    j2 = Object.defineProperty;
    m2 = (t3, a4, e6, i5) => {
      for (var r7 = void 0, o8 = t3.length - 1, l6; o8 >= 0; o8--)
        (l6 = t3[o8]) && (r7 = l6(a4, e6, r7) || r7);
      return r7 && j2(a4, e6, r7), r7;
    };
    h3 = class h4 extends i4 {
      constructor() {
        super(...arguments), this.list = null, this.busy = 0, this.seq = 0;
      }
      willUpdate(a4) {
        var e6;
        if (a4.has("config")) {
          const i5 = ++this.seq;
          this.list = null, _2((e6 = this.config) == null ? void 0 : e6.products).then((r7) => {
            i5 === this.seq && (this.list = r7);
          });
        }
      }
      badges(a4, e6) {
        const i5 = [], r7 = a4.regular > a4.price ? Math.round((1 - a4.price / a4.regular) * 100) : 0;
        return r7 >= 5 && i5.push([`\u062E\u0635\u0645 ${r7}\u066A`, "hot"]), a4.qty != null && a4.qty > 0 && a4.qty <= 5 && i5.push([`\u0622\u062E\u0631 ${a4.qty} \u0642\u0637\u0639`, ""]), e6.reduce((n5, s7) => s7.rating * Math.log2(2 + s7.ratingCount) > n5.rating * Math.log2(2 + n5.ratingCount) ? s7 : n5, e6[0]) === a4 && a4.rating >= 4 && i5.push(["\u0627\u0644\u0623\u0639\u0644\u0649 \u062A\u0642\u064A\u064A\u0645\u0627\u064B", "gold"]), e6.reduce((n5, s7) => s7.regular - s7.price > n5.regular - n5.price ? s7 : n5, e6[0]) === a4 && a4.regular - a4.price > 0 && !i5.some((n5) => n5[1] === "gold") && i5.push(["\u0627\u0644\u0623\u0648\u0641\u0631", "gold"]), a4.available || i5.unshift(["\u0646\u0641\u062F", ""]), i5.slice(0, 3);
      }
      async add(a4) {
        this.busy = a4.id, await C2(a4.id), this.busy = 0, S3(`\u0627\u0646\u0636\u0627\u0641 \xAB${a4.name}\xBB \u0644\u0644\u0633\u0644\u0629`);
      }
      render() {
        const a4 = this.config ?? {}, e6 = this.list;
        return b2`<section class=${a4.dark ? "dark" : ""} style=${a4.color ? `--tf-custom:${a4.color}` : ""}><div class="wrap">
      ${f3(a4.title) ? b2`<span class="eyebrow">✦ مختارات</span><h2 class="title">${f3(a4.title)}</h2>` : ""}${f3(a4.subtitle) ? b2`<p class="sub">${f3(a4.subtitle)}</p>` : ""}
      <div class="grid">${e6 == null ? [1, 2, 3, 4].map(() => b2`<div class="skel" style="aspect-ratio:.72"></div>`) : e6.length ? e6.map((i5) => b2`<article class="c">
          <a class="img" href=${i5.url}><img src=${i5.image} alt=${i5.name} loading="lazy" /></a>
          <div class="badges">${this.badges(i5, e6).map(([r7, o8]) => b2`<span class="b ${o8}">${r7}</span>`)}</div>
          <div class="body"><a class="n" href=${i5.url}>${i5.name}</a>
            ${i5.rating ? b2`<span class="stars">${"\u2605".repeat(Math.round(i5.rating))}${"\u2606".repeat(5 - Math.round(i5.rating))} <small>(${i5.ratingCount})</small></span>` : ""}
            <div class="p"><b>${b3(i5.price)}</b>${i5.regular > i5.price ? b2`<s>${b3(i5.regular)}</s><span class="save">وفّر ${b3(Math.round((i5.regular - i5.price) * 100) / 100)}</span>` : ""}</div>
            <button class="btn" ?disabled=${!i5.available || this.busy === i5.id} @click=${() => this.add(i5)}>${this.busy === i5.id ? "..." : i5.available ? "\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629" : "\u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631"}</button></div>
        </article>`) : b2`<p class="sub">اختر المنتجات من إعدادات العنصر.</p>`}</div></div></section>`;
      }
    };
    h3.styles = [p5, i`
    .grid { display: grid; gap: 18px; grid-template-columns: repeat(auto-fill, minmax(min(240px, 44vw), 1fr)); }
    .c { position: relative; border-radius: 20px; overflow: hidden; background: var(--card, #fff); color: inherit; border: 1px solid #8882; transition: transform .35s, box-shadow .35s; display: flex; flex-direction: column; }
    .dark .c { --card: #17122b; border-color: #2b2348; }
    .c:hover { transform: translateY(-6px); box-shadow: 0 24px 50px -24px #0006; }
    .img { aspect-ratio: 1; overflow: hidden; background: #8881; } .img img { width: 100%; height: 100%; object-fit: cover; transition: transform .8s; } .c:hover .img img { transform: scale(1.07); }
    .badges { position: absolute; inset: 12px 12px auto; display: flex; gap: 6px; flex-wrap: wrap; }
    .b { font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 999px; background: #0f0c18cc; color: #fff; backdrop-filter: blur(6px); }
    .b.gold { background: var(--tf-gold); color: #1a1033; } .b.hot { background: #e5484d; }
    .body { padding: 14px 16px 16px; display: grid; gap: 8px; flex: 1; }
    .n { margin: 0; font-size: 15px; font-weight: 700; line-height: 1.5; color: inherit; text-decoration: none; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .p { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; } .p b { font-size: 18px; color: var(--tf-accent); } .p s { opacity: .5; font-size: 13px; }
    .save { font-size: 12px; color: #16a34a; font-weight: 700; } .stars { font-size: 13px; color: #f5b301; }
    .btn { justify-content: center; margin-top: auto; padding: 11px; }
  `];
    u3 = h3;
    m2([
      n4({ type: Object })
    ], u3.prototype, "config");
    m2([
      r5()
    ], u3.prototype, "list");
    m2([
      r5()
    ], u3.prototype, "busy");
    typeof u3 < "u" && u3.registerSallaComponent("salla-tuhfa-smart-products");
  }
});

// dist/tuhfa-countdown.js
var tuhfa_countdown_exports = {};
__export(tuhfa_countdown_exports, {
  default: () => r6
});
function k2(i5) {
  var t3, e6;
  try {
    (e6 = (t3 = v2()) == null ? void 0 : t3.success) == null || e6.call(t3, i5);
  } catch {
  }
}
var h5, v2, s4, y4, p6, f4, r6;
var init_tuhfa_countdown = __esm({
  "dist/tuhfa-countdown.js"() {
    "use strict";
    init_lit();
    init_decorators();
    h5 = i`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
    v2 = () => window.Salla;
    s4 = (i5) => String(i5 && typeof i5 == "object" ? i5[(document.documentElement.lang || "ar").slice(0, 2)] ?? i5.ar ?? "" : i5 ?? "");
    y4 = Object.defineProperty;
    p6 = (i5, t3, e6, d3) => {
      for (var n5 = void 0, o8 = i5.length - 1, c6; o8 >= 0; o8--)
        (c6 = i5[o8]) && (n5 = c6(t3, e6, n5) || n5);
      return n5 && y4(t3, e6, n5), n5;
    };
    f4 = class f5 extends i4 {
      constructor() {
        super(...arguments), this.left = 0, this.copied = false;
      }
      connectedCallback() {
        super.connectedCallback(), this.tick(), this.timer = window.setInterval(() => this.tick(), 1e3);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), clearInterval(this.timer);
      }
      end() {
        var e6;
        const t3 = Date.parse(((e6 = this.config) == null ? void 0 : e6.end) ?? "");
        return Number.isFinite(t3) ? t3 : 0;
      }
      tick() {
        var t3;
        this.left = Math.max(0, Math.floor((this.end() - Date.now()) / 1e3)), !this.left && ((t3 = this.config) == null ? void 0 : t3.hide_after) !== false && this.end() && (this.hidden = true, clearInterval(this.timer));
      }
      async copy() {
        var e6;
        const t3 = ((e6 = this.config) == null ? void 0 : e6.coupon) ?? "";
        try {
          await navigator.clipboard.writeText(t3);
        } catch {
        }
        this.copied = true, k2(`\u062A\u0645 \u0646\u0633\u062E \u0627\u0644\u0643\u0648\u062F ${t3}`), setTimeout(() => this.copied = false, 1800);
      }
      render() {
        const t3 = this.config ?? {};
        if (!this.end()) return b2`<div class="wrap"><p class="sub">حدد تاريخ ونهاية العرض من إعدادات العنصر.</p></div>`;
        const e6 = this.left, d3 = Math.floor(e6 / 86400), n5 = Math.floor(e6 % 86400 / 3600), o8 = Math.floor(e6 % 3600 / 60), c6 = e6 % 60, l6 = (g5) => String(g5).padStart(2, "0");
        return b2`<div class="wrap"><div class="box dark ${e6 ? "" : "ended"}" style=${t3.color ? `--tf-custom:${t3.color}` : ""}>
      <div class="in"><span class="eyebrow">⏳ عرض لفترة محدودة</span>
        <h2 class="title">${s4(t3.title) || "\u0639\u0631\u0636 \u062E\u0627\u0635"}</h2>${s4(t3.subtitle) ? b2`<p class="sub" style="margin:0">${s4(t3.subtitle)}</p>` : ""}
        ${e6 ? b2`<div class="clock ${e6 < 3600 ? "urgent" : ""}" role="timer" aria-label="الوقت المتبقي">${d3 ? b2`<div class="u"><b>${d3}</b><span>يوم</span></div>` : ""}
          <div class="u"><b>${l6(n5)}</b><span>ساعة</span></div><div class="u"><b>${l6(o8)}</b><span>دقيقة</span></div><div class="u"><b>${l6(c6)}</b><span>ثانية</span></div></div>` : b2`<b>انتهى العرض</b>`}
        ${t3.coupon && e6 ? b2`<button class="cp" @click=${this.copy}>الكود <code>${t3.coupon}</code> <small>${this.copied ? "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E \u2713" : "\u0627\u0636\u063A\u0637 \u0644\u0644\u0646\u0633\u062E"}</small></button>` : ""}
        ${s4(t3.button) && t3.link && e6 ? b2`<a class="btn" href=${t3.link}>${s4(t3.button)} ←</a>` : ""}</div>
      ${t3.image ? b2`<div class="media"><img src=${t3.image} alt="" loading="lazy" /></div>` : ""}
    </div></div>`;
      }
    };
    f4.styles = [h5, i`
    .box { position: relative; overflow: hidden; border-radius: 26px; display: grid; grid-template-columns: 1.1fr .9fr; min-height: 340px; }
    @media (max-width: 760px) { .box { grid-template-columns: 1fr; } .media { height: 220px; order: -1; } }
    .media { position: relative; } .media img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
    .media::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, #0f0c18 0, transparent 40%); }
    :host-context([dir=ltr]) .media::after { background: linear-gradient(270deg, #0f0c18 0, transparent 40%); }
    .in { padding: clamp(24px, 4vw, 48px); display: grid; gap: 16px; align-content: center; position: relative; z-index: 1; }
    .clock { display: flex; gap: 10px; direction: ltr; justify-content: flex-end; } :host-context([dir=ltr]) .clock { justify-content: flex-start; }
    .u { min-width: 72px; padding: 12px 6px; border-radius: 16px; text-align: center; background: #ffffff0f; border: 1px solid #ffffff1f; }
    .u b { display: block; font-size: clamp(26px, 4vw, 38px); font-variant-numeric: tabular-nums; background: var(--tf-gold); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .u span { font-size: 12px; color: var(--tf-mut); }
    .urgent .u { border-color: #e5484d88; animation: pulse 1.2s infinite; } @keyframes pulse { 50% { box-shadow: 0 0 0 6px #e5484d22; } }
    .cp { display: inline-flex; gap: 10px; align-items: center; border: 1px dashed var(--tf-accent); border-radius: 14px; padding: 10px 14px; background: transparent; color: inherit; font: inherit; cursor: pointer; width: fit-content; }
    .cp code { font-size: 20px; letter-spacing: .15em; font-weight: 800; direction: ltr; }
    .ended { opacity: .8; }
  `];
    r6 = f4;
    p6([
      n4({ type: Object })
    ], r6.prototype, "config");
    p6([
      r5()
    ], r6.prototype, "left");
    p6([
      r5()
    ], r6.prototype, "copied");
    typeof r6 < "u" && r6.registerSallaComponent("salla-tuhfa-countdown");
  }
});

// dist/tuhfa-numbers.js
var tuhfa_numbers_exports = {};
__export(tuhfa_numbers_exports, {
  default: () => a3
});
var g3, o7, x3, h6, f6, p7, a3;
var init_tuhfa_numbers = __esm({
  "dist/tuhfa-numbers.js"() {
    "use strict";
    init_lit();
    init_decorators();
    g3 = i`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
    o7 = (i5) => String(i5 && typeof i5 == "object" ? i5[(document.documentElement.lang || "ar").slice(0, 2)] ?? i5.ar ?? "" : i5 ?? "");
    x3 = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
    h6 = Object.defineProperty;
    f6 = (i5, t3, r7, e6) => {
      for (var n5 = void 0, c6 = i5.length - 1, l6; c6 >= 0; c6--)
        (l6 = i5[c6]) && (n5 = l6(t3, r7, n5) || n5);
      return n5 && h6(t3, r7, n5), n5;
    };
    p7 = class p8 extends i4 {
      constructor() {
        super(...arguments), this.k = 0;
      }
      firstUpdated() {
        this.io = new IntersectionObserver((t3) => {
          var r7;
          t3[0].isIntersecting && ((r7 = this.io) == null || r7.disconnect(), this.run());
        }, { threshold: 0.3 }), this.io.observe(this);
      }
      disconnectedCallback() {
        var t3;
        super.disconnectedCallback(), (t3 = this.io) == null || t3.disconnect();
      }
      run() {
        if (x3()) {
          this.k = 1;
          return;
        }
        const t3 = performance.now(), r7 = 1600, e6 = (n5) => {
          this.k = Math.min(1, (n5 - t3) / r7), this.k < 1 && requestAnimationFrame(e6);
        };
        requestAnimationFrame(e6);
      }
      fmt(t3) {
        return Math.round(t3 * (1 - Math.pow(1 - this.k, 3))).toLocaleString("en");
      }
      render() {
        const t3 = this.config ?? {}, r7 = (t3.items ?? []).filter((e6) => e6 && (e6.number != null || o7(e6.label)));
        return b2`<section class=${t3.light ? "light" : "dark"} style=${t3.color ? `--tf-custom:${t3.color}` : ""}><div class="wrap">
      ${o7(t3.title) ? b2`<span class="eyebrow">✦ بالأرقام</span><h2 class="title">${o7(t3.title)}</h2>` : ""}${o7(t3.subtitle) ? b2`<p class="sub">${o7(t3.subtitle)}</p>` : ""}
      <div class="g">${r7.map((e6) => b2`<div class="it">${e6.icon ? b2`<div class="ic" aria-hidden="true">${e6.icon}</div>` : ""}
        <span class="n">${this.fmt(Number(e6.number) || 0)}${o7(e6.suffix)}</span><span class="l">${o7(e6.label)}</span></div>`)}</div>
    </div></section>`;
      }
    };
    p7.styles = [g3, i`
    .g { display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(min(200px, 42vw), 1fr)); }
    .it { position: relative; padding: 26px 20px; border-radius: 22px; text-align: center; background: #ffffff08; border: 1px solid #ffffff14; overflow: hidden; }
    .light .it { background: #fff; border-color: #0001; }
    .it::before { content: ''; position: absolute; inset: -40% -40% auto auto; width: 140px; height: 140px; border-radius: 50%; background: var(--tf-accent); opacity: .12; filter: blur(20px); }
    .ic { font-size: 30px; color: var(--tf-accent); }
    .n { display: block; margin: 8px 0 4px; font-size: clamp(32px, 5vw, 52px); font-weight: 800; font-variant-numeric: tabular-nums; background: var(--tf-gold); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .l { font-size: 15px; opacity: .75; }
    .light { background: #faf7f1; color: #1b1408; }
  `];
    a3 = p7;
    f6([
      n4({ type: Object })
    ], a3.prototype, "config");
    f6([
      r5()
    ], a3.prototype, "k");
    typeof a3 < "u" && a3.registerSallaComponent("salla-tuhfa-numbers");
  }
});

// dist/tuhfa-compare.js
var tuhfa_compare_exports = {};
__export(tuhfa_compare_exports, {
  default: () => u4
});
function _3(t3) {
  var r7, n5, o8, s7, a4, d3;
  const i5 = c5(t3 == null ? void 0 : t3.sale_price) && c5(t3 == null ? void 0 : t3.sale_price) < c5((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)) ? c5(t3 == null ? void 0 : t3.sale_price) : c5(t3 == null ? void 0 : t3.price), e6 = Math.max(c5(t3 == null ? void 0 : t3.regular_price), c5(t3 == null ? void 0 : t3.price), i5);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((r7 = t3 == null ? void 0 : t3.image) == null ? void 0 : r7.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? ((o8 = (n5 = t3 == null ? void 0 : t3.images) == null ? void 0 : n5[0]) == null ? void 0 : o8.url) ?? ""),
    price: i5,
    regular: e6,
    rating: c5(((s7 = t3 == null ? void 0 : t3.rating) == null ? void 0 : s7.stars) ?? ((a4 = t3 == null ? void 0 : t3.rating) == null ? void 0 : a4.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: c5((d3 = t3 == null ? void 0 : t3.rating) == null ? void 0 : d3.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : c5(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out"
  };
}
async function S4(t3) {
  return await y5(), (await Promise.all(z4(t3).map((e6) => {
    var r7, n5, o8, s7;
    return (s7 = (o8 = (n5 = (r7 = g4()) == null ? void 0 : r7.product) == null ? void 0 : n5.api) == null ? void 0 : o8.getDetails) == null ? void 0 : s7.call(o8, e6).then((a4) => _3(a4 == null ? void 0 : a4.data)).catch(() => null);
  }))).filter((e6) => !!e6 && !!e6.name);
}
async function p9(t3) {
  var i5, e6, r7;
  await y5();
  try {
    await ((r7 = (e6 = (i5 = g4()) == null ? void 0 : i5.cart) == null ? void 0 : e6.addItem) == null ? void 0 : r7.call(e6, { id: t3, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t3}`;
  }
}
function j3(t3) {
  var i5, e6;
  try {
    (e6 = (i5 = g4()) == null ? void 0 : i5.success) == null || e6.call(i5, t3);
  } catch {
  }
}
var q2, g4, y5, x4, c5, z4, b4, f7, M3, v3, m3, u4;
var init_tuhfa_compare = __esm({
  "dist/tuhfa-compare.js"() {
    "use strict";
    init_lit();
    init_decorators();
    q2 = i`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
    g4 = () => window.Salla;
    y5 = async () => {
      var t3, i5;
      try {
        await ((i5 = (t3 = g4()) == null ? void 0 : t3.onReady) == null ? void 0 : i5.call(t3));
      } catch {
      }
    };
    x4 = (t3, i5) => (document.documentElement.lang || "ar").startsWith("en") ? i5 : t3;
    c5 = (t3) => {
      const i5 = typeof t3 == "object" && t3 ? t3.amount : t3, e6 = Number(i5);
      return Number.isFinite(e6) ? e6 : 0;
    };
    z4 = (t3) => (Array.isArray(t3) ? t3 : []).map((i5) => Number(typeof i5 == "object" && i5 ? i5.value : i5)).filter((i5) => Number.isFinite(i5) && i5 > 0);
    b4 = (t3) => {
      var i5, e6;
      try {
        return ((e6 = (i5 = g4()) == null ? void 0 : i5.money) == null ? void 0 : e6.call(i5, t3)) ?? `${t3} ${x4("\u0631.\u0633", "SAR")}`;
      } catch {
        return `${t3} ${x4("\u0631.\u0633", "SAR")}`;
      }
    };
    f7 = (t3) => String(t3 && typeof t3 == "object" ? t3[(document.documentElement.lang || "ar").slice(0, 2)] ?? t3.ar ?? "" : t3 ?? "");
    M3 = Object.defineProperty;
    v3 = (t3, i5, e6, r7) => {
      for (var n5 = void 0, o8 = t3.length - 1, s7; o8 >= 0; o8--)
        (s7 = t3[o8]) && (n5 = s7(i5, e6, n5) || n5);
      return n5 && M3(i5, e6, n5), n5;
    };
    m3 = class m4 extends i4 {
      constructor() {
        super(...arguments), this.list = null, this.seq = 0;
      }
      willUpdate(i5) {
        var e6;
        if (i5.has("config")) {
          const r7 = ++this.seq;
          this.list = null, S4((e6 = this.config) == null ? void 0 : e6.products).then((n5) => {
            r7 === this.seq && (this.list = n5.slice(0, 4));
          });
        }
      }
      render() {
        const i5 = this.config ?? {}, e6 = this.list;
        if (e6 && e6.length < 2) return b2`<div class="wrap"><p class="sub">اختر منتجين على الأقل للمقارنة من إعدادات العنصر.</p></div>`;
        const r7 = e6 ? Math.min(...e6.map((a4) => a4.price)) : 0, n5 = e6 ? Math.max(...e6.map((a4) => a4.rating)) : 0, o8 = (a4) => a4.regular - a4.price, s7 = e6 == null ? void 0 : e6.filter((a4) => a4.available).reduce((a4, d3) => !a4 || (d3.rating || 3) / Math.max(1, d3.price) > (a4.rating || 3) / Math.max(1, a4.price) ? d3 : a4, null);
        return b2`<section class=${i5.dark ? "dark" : ""} style=${i5.color ? `--tf-custom:${i5.color}` : ""}><div class="wrap">
      <span class="eyebrow">⚖️ قارن قبل ما تشتري</span><h2 class="title">${f7(i5.title) || "\u0623\u064A\u0647\u0645 \u064A\u0646\u0627\u0633\u0628\u0643\u061F"}</h2>${f7(i5.subtitle) ? b2`<p class="sub">${f7(i5.subtitle)}</p>` : ""}
      ${e6 == null ? b2`<div class="skel" style="height:420px"></div>` : b2`<div class="t" style=${`--n:${e6.length}`}>${e6.map((a4) => b2`
        <article class="col ${a4 === s7 ? "win" : ""}">${a4 === s7 ? b2`<span class="crown">👑 الاختيار الذكي</span>` : ""}
          <img src=${a4.image} alt=${a4.name} loading="lazy" /><h3>${a4.name}</h3>
          <dl><div><dt>السعر</dt><dd class=${a4.price === r7 ? "best" : ""}>${b4(a4.price)}${a4.price === r7 ? " \u2713" : ""}</dd></div>
            <div><dt>التوفير</dt><dd>${o8(a4) > 0 ? b4(Math.round(o8(a4) * 100) / 100) : "\u2014"}</dd></div>
            <div><dt>التقييم</dt><dd class=${a4.rating && a4.rating === n5 ? "best" : ""}>${a4.rating ? `${a4.rating.toFixed(1)} \u2605 (${a4.ratingCount})` : "\u2014"}</dd></div>
            <div><dt>التوفر</dt><dd>${a4.available ? a4.qty != null && a4.qty <= 5 ? `\u0622\u062E\u0631 ${a4.qty}` : "\u0645\u062A\u0648\u0641\u0631" : "\u0646\u0641\u062F"}</dd></div></dl>
          <button class="btn ${a4 === s7 ? "" : "ghost"}" ?disabled=${!a4.available} @click=${async () => {
          await p9(a4.id), j3(`\u0627\u0646\u0636\u0627\u0641 \xAB${a4.name}\xBB \u0644\u0644\u0633\u0644\u0629`);
        }}>أضف للسلة</button>
        </article>`)}</div>`}
    </div></section>`;
      }
    };
    m3.styles = [q2, i`
    .t { display: grid; gap: 14px; grid-template-columns: repeat(var(--n, 3), minmax(200px, 1fr)); overflow-x: auto; padding-bottom: 6px; scroll-snap-type: x mandatory; }
    .col { scroll-snap-align: start; position: relative; border-radius: 22px; border: 1px solid #8883; background: var(--card, #fff); overflow: hidden; display: flex; flex-direction: column; }
    .dark .col { --card: #17122b; border-color: #2b2348; }
    .col.win { border: 2px solid var(--tf-accent); box-shadow: 0 20px 50px -26px var(--tf-accent); }
    .crown { position: absolute; inset: 12px 12px auto auto; background: var(--tf-gold); color: #1a1033; font-weight: 800; font-size: 12px; padding: 5px 12px; border-radius: 999px; }
    img { width: 100%; aspect-ratio: 4/3; object-fit: cover; background: #8881; }
    h3 { margin: 12px 16px 6px; font-size: 15px; line-height: 1.5; }
    dl { margin: 0; padding: 0 16px; display: grid; } dl div { display: flex; justify-content: space-between; gap: 8px; padding: 10px 0; border-top: 1px dashed #8883; font-size: 14px; }
    dt { opacity: .65; } dd { margin: 0; font-weight: 700; } .best { color: #16a34a; }
    .btn { margin: 14px 16px 16px; justify-content: center; }
  `];
    u4 = m3;
    v3([
      n4({ type: Object })
    ], u4.prototype, "config");
    v3([
      r5()
    ], u4.prototype, "list");
    typeof u4 < "u" && u4.registerSallaComponent("salla-tuhfa-compare");
  }
});

// dist/tuhfa-reviews.js
var tuhfa_reviews_exports = {};
__export(tuhfa_reviews_exports, {
  default: () => p10
});
var b5, s5, h7, u5, v4, l4, p10;
var init_tuhfa_reviews = __esm({
  "dist/tuhfa-reviews.js"() {
    "use strict";
    init_lit();
    init_decorators();
    b5 = i`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
    s5 = (n5) => String(n5 && typeof n5 == "object" ? n5[(document.documentElement.lang || "ar").slice(0, 2)] ?? n5.ar ?? "" : n5 ?? "");
    h7 = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
    u5 = Object.defineProperty;
    v4 = (n5, e6, t3, g5) => {
      for (var r7 = void 0, o8 = n5.length - 1, a4; o8 >= 0; o8--)
        (a4 = n5[o8]) && (r7 = a4(e6, t3, r7) || r7);
      return r7 && u5(e6, t3, r7), r7;
    };
    l4 = class l5 extends i4 {
      render() {
        const e6 = this.config ?? {}, t3 = (e6.reviews ?? []).filter((a4) => s5(a4 == null ? void 0 : a4.text)), g5 = t3.length ? t3.reduce((a4, d3) => a4 + Math.max(1, Math.min(5, Number(d3.stars) || 5)), 0) / t3.length : 0, r7 = (a4) => {
          const d3 = s5(a4.name) || "\u0639\u0645\u064A\u0644", c6 = Math.max(1, Math.min(5, Math.round(Number(a4.stars) || 5)));
          return b2`<figure class="r"><span class="stars" aria-label=${`${c6} \u0645\u0646 5`}>${"\u2605".repeat(c6)}${"\u2606".repeat(5 - c6)}</span><p>«${s5(a4.text)}»</p>
        <figcaption class="who"><span class="av">${d3.trim()[0]}</span>${d3}${s5(a4.city) ? ` \xB7 ${s5(a4.city)}` : ""}</figcaption></figure>`;
        }, o8 = t3.length > 2 && !h7();
        return b2`<section class=${e6.dark ? "dark" : ""} style=${e6.color ? `--tf-custom:${e6.color}` : ""}><div class="wrap">
      <div class="head"><div><span class="eyebrow">✦ ثقة عملائنا</span><h2 class="title">${s5(e6.title) || "\u0648\u0634 \u064A\u0642\u0648\u0644\u0648\u0646 \u0639\u0646\u0627"}</h2></div>
        ${t3.length ? b2`<div class="avg"><b>${g5.toFixed(1)}</b><div><div class="stars">★★★★★</div><small>من ${t3.length} تقييم مختار</small></div></div>` : ""}</div>
      ${t3.length ? b2`<div class="rail"><div class="track" style=${`--d:${Math.max(20, t3.length * 8)}s;${o8 ? "" : "animation:none;flex-wrap:wrap;width:auto"}`}>${t3.map(r7)}${o8 ? t3.map(r7) : ""}</div></div>` : b2`<p class="sub">أضف آراء عملائك من إعدادات العنصر.</p>`}
      ${(e6.badges ?? []).length ? b2`<div class="badges">${(e6.badges ?? []).map((a4) => b2`<span class="bd">${a4.emoji ?? "\u2713"} ${s5(a4.text)}</span>`)}</div>` : ""}
    </div></section>`;
      }
    };
    l4.styles = [b5, i`
    .head { display: flex; flex-wrap: wrap; gap: 18px; align-items: center; justify-content: space-between; margin-bottom: 26px; }
    .avg { display: flex; align-items: center; gap: 12px; } .avg b { font-size: 46px; background: var(--tf-gold); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .stars { color: #f5b301; letter-spacing: 2px; }
    .rail { overflow: hidden; mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
    .track { display: flex; gap: 16px; width: max-content; animation: m var(--d, 40s) linear infinite; } .rail:hover .track { animation-play-state: paused; }
    @keyframes m { to { transform: translateX(calc(-50% - 8px)); } } :host-context([dir=rtl]) .track { animation-name: mr; } @keyframes mr { to { transform: translateX(calc(50% + 8px)); } }
    .r { width: min(340px, 78vw); padding: 20px; border-radius: 20px; background: var(--card, #fff); border: 1px solid #8882; display: grid; gap: 10px; }
    .dark .r { --card: #17122b; border-color: #2b2348; }
    .r p { margin: 0; line-height: 1.8; font-size: 15px; } .who { display: flex; gap: 10px; align-items: center; font-size: 13px; opacity: .8; }
    .av { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; background: var(--tf-gold); color: #1a1033; font-weight: 800; }
    .badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 26px; justify-content: center; }
    .bd { display: flex; gap: 8px; align-items: center; padding: 10px 16px; border-radius: 999px; border: 1px solid #8883; font-size: 14px; }
  `];
    p10 = l4;
    v4([
      n4({ type: Object })
    ], p10.prototype, "config");
    typeof p10 < "u" && p10.registerSallaComponent("salla-tuhfa-reviews");
  }
});

// dist/tuhfa-categories.js
var tuhfa_categories_exports = {};
__export(tuhfa_categories_exports, {
  default: () => s6
});
var m5, e5, x5, b6, p11, s6;
var init_tuhfa_categories = __esm({
  "dist/tuhfa-categories.js"() {
    "use strict";
    init_lit();
    init_decorators();
    m5 = i`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
    e5 = (i5) => String(i5 && typeof i5 == "object" ? i5[(document.documentElement.lang || "ar").slice(0, 2)] ?? i5.ar ?? "" : i5 ?? "");
    x5 = Object.defineProperty;
    b6 = (i5, a4, r7, t3) => {
      for (var o8 = void 0, l6 = i5.length - 1, c6; l6 >= 0; l6--)
        (c6 = i5[l6]) && (o8 = c6(a4, r7, o8) || o8);
      return o8 && x5(a4, r7, o8), o8;
    };
    p11 = class p12 extends i4 {
      render() {
        const a4 = this.config ?? {}, r7 = (a4.tiles ?? []).filter((t3) => t3 == null ? void 0 : t3.image);
        return b2`<section style=${a4.color ? `--tf-custom:${a4.color}` : ""}><div class="wrap">
      ${e5(a4.title) ? b2`<span class="eyebrow">✦ تسوّق حسب القسم</span><h2 class="title">${e5(a4.title)}</h2>` : ""}${e5(a4.subtitle) ? b2`<p class="sub">${e5(a4.subtitle)}</p>` : ""}
      ${r7.length ? b2`<div class="g">${r7.map((t3) => b2`<a href=${t3.link || "#"}><img src=${t3.image} alt=${e5(t3.title)} loading="lazy" />
        <span class="cap"><span class="line"></span><b>${e5(t3.title)}</b>${e5(t3.caption) ? b2`<small>${e5(t3.caption)} ←</small>` : ""}</span></a>`)}</div>` : b2`<p class="sub">أضف صور الأقسام من إعدادات العنصر.</p>`}
    </div></section>`;
      }
    };
    p11.styles = [m5, i`
    .g { display: grid; gap: 14px; grid-template-columns: repeat(4, 1fr); grid-auto-rows: clamp(150px, 20vw, 240px); }
    .g a:nth-child(6n+1) { grid-column: span 2; grid-row: span 2; } .g a:nth-child(6n+4) { grid-column: span 2; }
    @media (max-width: 760px) { .g { grid-template-columns: 1fr 1fr; } .g a:nth-child(6n+4) { grid-column: span 2; } }
    a { position: relative; overflow: hidden; border-radius: 22px; color: #fff; text-decoration: none; background: #0f0c18; isolation: isolate; }
    img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s cubic-bezier(.2,.7,.2,1); z-index: -1; }
    a::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, #0f0c18e6, transparent 60%); z-index: -1; transition: opacity .5s; }
    a:hover img, a:focus-visible img { transform: scale(1.1); }
    .cap { position: absolute; inset: auto 0 0; padding: 18px; display: grid; gap: 4px; }
    .cap b { font-size: clamp(16px, 2vw, 24px); } .cap small { opacity: 0; transform: translateY(8px); transition: all .5s; color: #f5d68a; }
    a:hover .cap small, a:focus-visible .cap small { opacity: 1; transform: none; }
    .line { width: 0; height: 2px; background: var(--tf-accent); transition: width .5s; } a:hover .line, a:focus-visible .line { width: 48px; }
  `];
    s6 = p11;
    b6([
      n4({ type: Object })
    ], s6.prototype, "config");
    typeof s6 < "u" && s6.registerSallaComponent("salla-tuhfa-categories");
  }
});

// demo/entry.js
init_lit();
i4.registerSallaComponent = function(name) {
  if (!customElements.get(name)) customElements.define(name, this);
};
await Promise.resolve().then(() => (init_tuhfa_hero(), tuhfa_hero_exports));
await Promise.resolve().then(() => (init_tuhfa_smart_products(), tuhfa_smart_products_exports));
await Promise.resolve().then(() => (init_tuhfa_countdown(), tuhfa_countdown_exports));
await Promise.resolve().then(() => (init_tuhfa_numbers(), tuhfa_numbers_exports));
await Promise.resolve().then(() => (init_tuhfa_compare(), tuhfa_compare_exports));
await Promise.resolve().then(() => (init_tuhfa_reviews(), tuhfa_reviews_exports));
await Promise.resolve().then(() => (init_tuhfa_categories(), tuhfa_categories_exports));
window.__ready = true;
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
