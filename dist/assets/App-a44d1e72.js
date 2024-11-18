import {
  r as E,
  R as ia,
  a as oa,
  j as i,
  b as X,
  g as aa,
  c as la,
  w as hr,
  _ as vr,
  L as br,
} from './index-a757f20d.js'
/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ee() {
  return (
    (Ee = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Ee.apply(this, arguments)
  )
}
var De
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(De || (De = {}))
const Es = 'popstate'
function ca(e) {
  e === void 0 && (e = {})
  function t(n, s) {
    let { pathname: o, search: a, hash: c } = n.location
    return dr(
      '',
      { pathname: o, search: a, hash: c },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || 'default',
    )
  }
  function r(n, s) {
    return typeof s == 'string' ? s : ft(s)
  }
  return da(t, r, null, e)
}
function se(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Se(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function ua() {
  return Math.random().toString(36).substr(2, 8)
}
function Ds(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function dr(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    Ee({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? it(t) : t, {
      state: r,
      key: (t && t.key) || n || ua(),
    })
  )
}
function ft(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  )
}
function it(e) {
  let t = {}
  if (e) {
    let r = e.indexOf('#')
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)))
    let n = e.indexOf('?')
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))), e && (t.pathname = e)
  }
  return t
}
function da(e, t, r, n) {
  n === void 0 && (n = {})
  let { window: s = document.defaultView, v5Compat: o = !1 } = n,
    a = s.history,
    c = De.Pop,
    l = null,
    u = d()
  u == null && ((u = 0), a.replaceState(Ee({}, a.state, { idx: u }), ''))
  function d() {
    return (a.state || { idx: null }).idx
  }
  function v() {
    c = De.Pop
    let D = d(),
      k = D == null ? null : D - u
    ;(u = D), l && l({ action: c, location: T.location, delta: k })
  }
  function g(D, k) {
    c = De.Push
    let y = dr(T.location, D, k)
    r && r(y, D), (u = d() + 1)
    let C = Ds(y, u),
      Y = T.createHref(y)
    try {
      a.pushState(C, '', Y)
    } catch (K) {
      if (K instanceof DOMException && K.name === 'DataCloneError') throw K
      s.location.assign(Y)
    }
    o && l && l({ action: c, location: T.location, delta: 1 })
  }
  function _(D, k) {
    c = De.Replace
    let y = dr(T.location, D, k)
    r && r(y, D), (u = d())
    let C = Ds(y, u),
      Y = T.createHref(y)
    a.replaceState(C, '', Y), o && l && l({ action: c, location: T.location, delta: 0 })
  }
  function w(D) {
    let k = s.location.origin !== 'null' ? s.location.origin : s.location.href,
      y = typeof D == 'string' ? D : ft(D)
    return se(k, 'No window.location.(origin|href) available to create URL for href: ' + y), new URL(y, k)
  }
  let T = {
    get action() {
      return c
    },
    get location() {
      return e(s, a)
    },
    listen(D) {
      if (l) throw new Error('A history only accepts one active listener')
      return (
        s.addEventListener(Es, v),
        (l = D),
        () => {
          s.removeEventListener(Es, v), (l = null)
        }
      )
    },
    createHref(D) {
      return t(s, D)
    },
    createURL: w,
    encodeLocation(D) {
      let k = w(D)
      return { pathname: k.pathname, search: k.search, hash: k.hash }
    },
    push: g,
    replace: _,
    go(D) {
      return a.go(D)
    },
  }
  return T
}
var Te
;(function (e) {
  ;(e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error')
})(Te || (Te = {}))
const fa = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
function ma(e) {
  return e.index === !0
}
function Mn(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((s, o) => {
      let a = [...r, o],
        c = typeof s.id == 'string' ? s.id : a.join('-')
      if (
        (se(s.index !== !0 || !s.children, 'Cannot specify children on an index route'),
        se(
          !n[c],
          'Found a route id collision on id "' + c + `".  Route id's must be globally unique within Data Router usages`,
        ),
        ma(s))
      ) {
        let l = Ee({}, s, t(s), { id: c })
        return (n[c] = l), l
      } else {
        let l = Ee({}, s, t(s), { id: c, children: void 0 })
        return (n[c] = l), s.children && (l.children = Mn(s.children, t, a, n)), l
      }
    })
  )
}
function Ct(e, t, r) {
  r === void 0 && (r = '/')
  let n = typeof t == 'string' ? it(t) : t,
    s = et(n.pathname || '/', r)
  if (s == null) return null
  let o = vi(e)
  va(o)
  let a = null
  for (let c = 0; a == null && c < o.length; ++c) a = Ea(o[c], Sa(s))
  return a
}
function ha(e, t) {
  let { route: r, pathname: n, params: s } = e
  return { id: r.id, pathname: n, params: s, data: t[r.id], handle: r.handle }
}
function vi(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = '')
  let s = (o, a, c) => {
    let l = {
      relativePath: c === void 0 ? o.path || '' : c,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o,
    }
    l.relativePath.startsWith('/') &&
      (se(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (l.relativePath = l.relativePath.slice(n.length)))
    let u = Qe([n, l.relativePath]),
      d = r.concat(l)
    o.children &&
      o.children.length > 0 &&
      (se(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".'),
      ),
      vi(o.children, t, d, u)),
      !(o.path == null && !o.index) && t.push({ path: u, score: ya(u, o.index), routesMeta: d })
  }
  return (
    e.forEach((o, a) => {
      var c
      if (o.path === '' || !((c = o.path) != null && c.includes('?'))) s(o, a)
      else for (let l of bi(o.path)) s(o, a, l)
    }),
    t
  )
}
function bi(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [r, ...n] = t,
    s = r.endsWith('?'),
    o = r.replace(/\?$/, '')
  if (n.length === 0) return s ? [o, ''] : [o]
  let a = bi(n.join('/')),
    c = []
  return (
    c.push(...a.map((l) => (l === '' ? o : [o, l].join('/')))),
    s && c.push(...a),
    c.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  )
}
function va(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Ta(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  )
}
const ba = /^:\w+$/,
  xa = 3,
  pa = 2,
  Na = 1,
  ga = 10,
  wa = -2,
  Ss = (e) => e === '*'
function ya(e, t) {
  let r = e.split('/'),
    n = r.length
  return (
    r.some(Ss) && (n += wa),
    t && (n += pa),
    r.filter((s) => !Ss(s)).reduce((s, o) => s + (ba.test(o) ? xa : o === '' ? Na : ga), n)
  )
}
function Ta(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, s) => n === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Ea(e, t) {
  let { routesMeta: r } = e,
    n = {},
    s = '/',
    o = []
  for (let a = 0; a < r.length; ++a) {
    let c = r[a],
      l = a === r.length - 1,
      u = s === '/' ? t : t.slice(s.length) || '/',
      d = In({ path: c.relativePath, caseSensitive: c.caseSensitive, end: l }, u)
    if (!d) return null
    Object.assign(n, d.params)
    let v = c.route
    o.push({ params: n, pathname: Qe([s, d.pathname]), pathnameBase: Ua(Qe([s, d.pathnameBase])), route: v }),
      d.pathnameBase !== '/' && (s = Qe([s, d.pathnameBase]))
  }
  return o
}
function In(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [r, n] = Da(e.path, e.caseSensitive, e.end),
    s = t.match(r)
  if (!s) return null
  let o = s[0],
    a = o.replace(/(.)\/+$/, '$1'),
    c = s.slice(1)
  return {
    params: n.reduce((u, d, v) => {
      let { paramName: g, isOptional: _ } = d
      if (g === '*') {
        let T = c[v] || ''
        a = o.slice(0, o.length - T.length).replace(/(.)\/+$/, '$1')
      }
      const w = c[v]
      return _ && !w ? (u[g] = void 0) : (u[g] = ka(w || '', g)), u
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  }
}
function Da(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Se(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    )
  let n = [],
    s =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:(\w+)(\?)?/g,
          (a, c, l) => (n.push({ paramName: c, isOptional: l != null }), l ? '/?([^\\/]+)?' : '/([^\\/]+)'),
        )
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }), (s += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
      ? (s += '\\/*$')
      : e !== '' && e !== '/' && (s += '(?:(?=\\/|$))'),
    [new RegExp(s, t ? void 0 : 'i'), n]
  )
}
function Sa(e) {
  try {
    return decodeURI(e)
  } catch (t) {
    return (
      Se(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    )
  }
}
function ka(e, t) {
  try {
    return decodeURIComponent(e)
  } catch (r) {
    return (
      Se(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' + e + '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + r + ').'),
      ),
      e
    )
  }
}
function et(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r)
  return n && n !== '/' ? null : e.slice(r) || '/'
}
function Ra(e, t) {
  t === void 0 && (t = '/')
  let { pathname: r, search: n = '', hash: s = '' } = typeof e == 'string' ? it(e) : e
  return { pathname: r ? (r.startsWith('/') ? r : _a(r, t)) : t, search: Ca(n), hash: Va(s) }
}
function _a(e, t) {
  let r = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((s) => {
      s === '..' ? r.length > 1 && r.pop() : s !== '.' && r.push(s)
    }),
    r.length > 1 ? r.join('/') : '/'
  )
}
function Dn(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(n) + '].  Please separate it out to the ') +
    ('`to.' + r + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function xi(e) {
  return e.filter((t, r) => r === 0 || (t.route.path && t.route.path.length > 0))
}
function Qn(e, t) {
  let r = xi(e)
  return t ? r.map((n, s) => (s === e.length - 1 ? n.pathname : n.pathnameBase)) : r.map((n) => n.pathnameBase)
}
function es(e, t, r, n) {
  n === void 0 && (n = !1)
  let s
  typeof e == 'string'
    ? (s = it(e))
    : ((s = Ee({}, e)),
      se(!s.pathname || !s.pathname.includes('?'), Dn('?', 'pathname', 'search', s)),
      se(!s.pathname || !s.pathname.includes('#'), Dn('#', 'pathname', 'hash', s)),
      se(!s.search || !s.search.includes('#'), Dn('#', 'search', 'hash', s)))
  let o = e === '' || s.pathname === '',
    a = o ? '/' : s.pathname,
    c
  if (a == null) c = r
  else if (n) {
    let v = t.length === 0 ? [] : t[t.length - 1].replace(/^\//, '').split('/')
    if (a.startsWith('..')) {
      let g = a.split('/')
      for (; g[0] === '..'; ) g.shift(), v.pop()
      s.pathname = g.join('/')
    }
    c = '/' + v.join('/')
  } else {
    let v = t.length - 1
    if (a.startsWith('..')) {
      let g = a.split('/')
      for (; g[0] === '..'; ) g.shift(), (v -= 1)
      s.pathname = g.join('/')
    }
    c = v >= 0 ? t[v] : '/'
  }
  let l = Ra(s, c),
    u = a && a !== '/' && a.endsWith('/'),
    d = (o || a === '.') && r.endsWith('/')
  return !l.pathname.endsWith('/') && (u || d) && (l.pathname += '/'), l
}
const Qe = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Ua = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Ca = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Va = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
class ts {
  constructor(t, r, n, s) {
    s === void 0 && (s = !1),
      (this.status = t),
      (this.statusText = r || ''),
      (this.internal = s),
      n instanceof Error ? ((this.data = n.toString()), (this.error = n)) : (this.data = n)
  }
}
function pi(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const Ni = ['post', 'put', 'patch', 'delete'],
  Aa = new Set(Ni),
  ja = ['get', ...Ni],
  Wa = new Set(ja),
  La = new Set([301, 302, 303, 307, 308]),
  Ma = new Set([307, 308]),
  Sn = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ia = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Gt = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  gi = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Pa = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  wi = 'remix-router-transitions'
function Oa(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    r = typeof t < 'u' && typeof t.document < 'u' && typeof t.document.createElement < 'u',
    n = !r
  se(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter')
  let s
  if (e.mapRouteProperties) s = e.mapRouteProperties
  else if (e.detectErrorBoundary) {
    let f = e.detectErrorBoundary
    s = (m) => ({ hasErrorBoundary: f(m) })
  } else s = Pa
  let o = {},
    a = Mn(e.routes, s, void 0, o),
    c,
    l = e.basename || '/',
    u = Ee(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future,
    ),
    d = null,
    v = new Set(),
    g = null,
    _ = null,
    w = null,
    T = e.hydrationData != null,
    D = Ct(a, e.history.location, l),
    k = null
  if (D == null) {
    let f = ze(404, { pathname: e.history.location.pathname }),
      { matches: m, route: N } = js(a)
    ;(D = m), (k = { [N.id]: f })
  }
  let y,
    C = D.some((f) => f.route.lazy),
    Y = D.some((f) => f.route.loader)
  if (C) y = !1
  else if (!Y) y = !0
  else if (u.v7_partialHydration) {
    let f = e.hydrationData ? e.hydrationData.loaderData : null,
      m = e.hydrationData ? e.hydrationData.errors : null
    y = D.every(
      (N) =>
        N.route.loader &&
        N.route.loader.hydrate !== !0 &&
        ((f && f[N.route.id] !== void 0) || (m && m[N.route.id] !== void 0)),
    )
  } else y = e.hydrationData != null
  let K,
    p = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: D,
      initialized: y,
      navigation: Sn,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || k,
      fetchers: new Map(),
      blockers: new Map(),
    },
    L = De.Pop,
    ee = !1,
    q,
    J = !1,
    le = new Map(),
    ke = null,
    de = !1,
    ye = !1,
    He = [],
    Ge = [],
    fe = new Map(),
    Ke = 0,
    Oe = -1,
    ie = new Map(),
    re = new Set(),
    x = new Map(),
    U = new Map(),
    V = new Set(),
    F = new Map(),
    M = new Map(),
    ne = !1
  function oe() {
    if (
      ((d = e.history.listen((f) => {
        let { action: m, location: N, delta: R } = f
        if (ne) {
          ne = !1
          return
        }
        Se(
          M.size === 0 || R != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        )
        let A = h({ currentLocation: p.location, nextLocation: N, historyAction: m })
        if (A && R != null) {
          ;(ne = !0),
            e.history.go(R * -1),
            b(A, {
              state: 'blocked',
              location: N,
              proceed() {
                b(A, { state: 'proceeding', proceed: void 0, reset: void 0, location: N }), e.history.go(R)
              },
              reset() {
                let z = new Map(p.blockers)
                z.set(A, Gt), ue({ blockers: z })
              },
            })
          return
        }
        return Ve(m, N)
      })),
      r)
    ) {
      Ja(t, le)
      let f = () => Qa(t, le)
      t.addEventListener('pagehide', f), (ke = () => t.removeEventListener('pagehide', f))
    }
    return p.initialized || Ve(De.Pop, p.location, { initialHydration: !0 }), K
  }
  function B() {
    d && d(),
      ke && ke(),
      v.clear(),
      q && q.abort(),
      p.fetchers.forEach((f, m) => St(m)),
      p.blockers.forEach((f, m) => Vr(m))
  }
  function be(f) {
    return v.add(f), () => v.delete(f)
  }
  function ue(f, m) {
    m === void 0 && (m = {}), (p = Ee({}, p, f))
    let N = [],
      R = []
    u.v7_fetcherPersist &&
      p.fetchers.forEach((A, z) => {
        A.state === 'idle' && (V.has(z) ? R.push(z) : N.push(z))
      }),
      [...v].forEach((A) =>
        A(p, {
          deletedFetchers: R,
          unstable_viewTransitionOpts: m.viewTransitionOpts,
          unstable_flushSync: m.flushSync === !0,
        }),
      ),
      u.v7_fetcherPersist && (N.forEach((A) => p.fetchers.delete(A)), R.forEach((A) => St(A)))
  }
  function ce(f, m, N) {
    var R, A
    let { flushSync: z } = N === void 0 ? {} : N,
      P =
        p.actionData != null &&
        p.navigation.formMethod != null &&
        qe(p.navigation.formMethod) &&
        p.navigation.state === 'loading' &&
        ((R = f.state) == null ? void 0 : R._isRedirect) !== !0,
      $
    m.actionData
      ? Object.keys(m.actionData).length > 0
        ? ($ = m.actionData)
        : ($ = null)
      : P
      ? ($ = p.actionData)
      : ($ = null)
    let O = m.loaderData ? As(p.loaderData, m.loaderData, m.matches || [], m.errors) : p.loaderData,
      te = p.blockers
    te.size > 0 && ((te = new Map(te)), te.forEach((pe, _e) => te.set(_e, Gt)))
    let Ne =
      ee === !0 ||
      (p.navigation.formMethod != null &&
        qe(p.navigation.formMethod) &&
        ((A = f.state) == null ? void 0 : A._isRedirect) !== !0)
    c && ((a = c), (c = void 0)),
      de ||
        L === De.Pop ||
        (L === De.Push ? e.history.push(f, f.state) : L === De.Replace && e.history.replace(f, f.state))
    let ae
    if (L === De.Pop) {
      let pe = le.get(p.location.pathname)
      pe && pe.has(f.pathname)
        ? (ae = { currentLocation: p.location, nextLocation: f })
        : le.has(f.pathname) && (ae = { currentLocation: f, nextLocation: p.location })
    } else if (J) {
      let pe = le.get(p.location.pathname)
      pe ? pe.add(f.pathname) : ((pe = new Set([f.pathname])), le.set(p.location.pathname, pe)),
        (ae = { currentLocation: p.location, nextLocation: f })
    }
    ue(
      Ee({}, m, {
        actionData: $,
        loaderData: O,
        historyAction: L,
        location: f,
        initialized: !0,
        navigation: Sn,
        revalidation: 'idle',
        restoreScrollPosition: H(f, m.matches || p.matches),
        preventScrollReset: Ne,
        blockers: te,
      }),
      { viewTransitionOpts: ae, flushSync: z === !0 },
    ),
      (L = De.Pop),
      (ee = !1),
      (J = !1),
      (de = !1),
      (ye = !1),
      (He = []),
      (Ge = [])
  }
  async function xe(f, m) {
    if (typeof f == 'number') {
      e.history.go(f)
      return
    }
    let N = Pn(
        p.location,
        p.matches,
        l,
        u.v7_prependBasename,
        f,
        u.v7_relativeSplatPath,
        m == null ? void 0 : m.fromRouteId,
        m == null ? void 0 : m.relative,
      ),
      { path: R, submission: A, error: z } = ks(u.v7_normalizeFormMethod, !1, N, m),
      P = p.location,
      $ = dr(p.location, R, m && m.state)
    $ = Ee({}, $, e.history.encodeLocation($))
    let O = m && m.replace != null ? m.replace : void 0,
      te = De.Push
    O === !0
      ? (te = De.Replace)
      : O === !1 ||
        (A != null && qe(A.formMethod) && A.formAction === p.location.pathname + p.location.search && (te = De.Replace))
    let Ne = m && 'preventScrollReset' in m ? m.preventScrollReset === !0 : void 0,
      ae = (m && m.unstable_flushSync) === !0,
      pe = h({ currentLocation: P, nextLocation: $, historyAction: te })
    if (pe) {
      b(pe, {
        state: 'blocked',
        location: $,
        proceed() {
          b(pe, { state: 'proceeding', proceed: void 0, reset: void 0, location: $ }), xe(f, m)
        },
        reset() {
          let _e = new Map(p.blockers)
          _e.set(pe, Gt), ue({ blockers: _e })
        },
      })
      return
    }
    return await Ve(te, $, {
      submission: A,
      pendingError: z,
      preventScrollReset: Ne,
      replace: m && m.replace,
      enableViewTransition: m && m.unstable_viewTransition,
      flushSync: ae,
    })
  }
  function We() {
    if ((zt(), ue({ revalidation: 'loading' }), p.navigation.state !== 'submitting')) {
      if (p.navigation.state === 'idle') {
        Ve(p.historyAction, p.location, { startUninterruptedRevalidation: !0 })
        return
      }
      Ve(L || p.historyAction, p.navigation.location, { overrideNavigation: p.navigation })
    }
  }
  async function Ve(f, m, N) {
    q && q.abort(),
      (q = null),
      (L = f),
      (de = (N && N.startUninterruptedRevalidation) === !0),
      I(p.location, p.matches),
      (ee = (N && N.preventScrollReset) === !0),
      (J = (N && N.enableViewTransition) === !0)
    let R = c || a,
      A = N && N.overrideNavigation,
      z = Ct(R, m, l),
      P = (N && N.flushSync) === !0
    if (!z) {
      let _e = ze(404, { pathname: m.pathname }),
        { matches: Be, route: Re } = js(R)
      S(), ce(m, { matches: Be, loaderData: {}, errors: { [Re.id]: _e } }, { flushSync: P })
      return
    }
    if (p.initialized && !ye && Ga(p.location, m) && !(N && N.submission && qe(N.submission.formMethod))) {
      ce(m, { matches: z }, { flushSync: P })
      return
    }
    q = new AbortController()
    let $ = qt(e.history, m, q.signal, N && N.submission),
      O,
      te
    if (N && N.pendingError) te = { [or(z).route.id]: N.pendingError }
    else if (N && N.submission && qe(N.submission.formMethod)) {
      let _e = await Ce($, m, N.submission, z, { replace: N.replace, flushSync: P })
      if (_e.shortCircuited) return
      ;(O = _e.pendingActionData),
        (te = _e.pendingActionError),
        (A = kn(m, N.submission)),
        (P = !1),
        ($ = new Request($.url, { signal: $.signal }))
    }
    let {
      shortCircuited: Ne,
      loaderData: ae,
      errors: pe,
    } = await Ae(
      $,
      m,
      z,
      A,
      N && N.submission,
      N && N.fetcherSubmission,
      N && N.replace,
      N && N.initialHydration === !0,
      P,
      O,
      te,
    )
    Ne || ((q = null), ce(m, Ee({ matches: z }, O ? { actionData: O } : {}, { loaderData: ae, errors: pe })))
  }
  async function Ce(f, m, N, R, A) {
    A === void 0 && (A = {}), zt()
    let z = Xa(m, N)
    ue({ navigation: z }, { flushSync: A.flushSync === !0 })
    let P,
      $ = $n(R, m)
    if (!$.route.action && !$.route.lazy)
      P = { type: Te.error, error: ze(405, { method: f.method, pathname: m.pathname, routeId: $.route.id }) }
    else if (((P = await Kt('action', f, $, R, o, s, l, u.v7_relativeSplatPath)), f.signal.aborted))
      return { shortCircuited: !0 }
    if (Vt(P)) {
      let O
      return (
        A && A.replace != null ? (O = A.replace) : (O = P.location === p.location.pathname + p.location.search),
        await at(p, P, { submission: N, replace: O }),
        { shortCircuited: !0 }
      )
    }
    if (ar(P)) {
      let O = or(R, $.route.id)
      return (
        (A && A.replace) !== !0 && (L = De.Push),
        { pendingActionData: {}, pendingActionError: { [O.route.id]: P.error } }
      )
    }
    if (pt(P)) throw ze(400, { type: 'defer-action' })
    return { pendingActionData: { [$.route.id]: P.data } }
  }
  async function Ae(f, m, N, R, A, z, P, $, O, te, Ne) {
    let ae = R || kn(m, A),
      pe = A || z || Ms(ae),
      _e = c || a,
      [Be, Re] = Rs(e.history, p, N, pe, m, u.v7_partialHydration && $ === !0, ye, He, Ge, V, x, re, _e, l, te, Ne)
    if (
      (S((me) => !(N && N.some((ge) => ge.route.id === me)) || (Be && Be.some((ge) => ge.route.id === me))),
      (Oe = ++Ke),
      Be.length === 0 && Re.length === 0)
    ) {
      let me = Cr()
      return (
        ce(
          m,
          Ee(
            { matches: N, loaderData: {}, errors: Ne || null },
            te ? { actionData: te } : {},
            me ? { fetchers: new Map(p.fetchers) } : {},
          ),
          { flushSync: O },
        ),
        { shortCircuited: !0 }
      )
    }
    if (!de && (!u.v7_partialHydration || !$)) {
      Re.forEach((ge) => {
        let Je = p.fetchers.get(ge.key),
          jr = Yt(void 0, Je ? Je.data : void 0)
        p.fetchers.set(ge.key, jr)
      })
      let me = te || p.actionData
      ue(
        Ee(
          { navigation: ae },
          me ? (Object.keys(me).length === 0 ? { actionData: null } : { actionData: me }) : {},
          Re.length > 0 ? { fetchers: new Map(p.fetchers) } : {},
        ),
        { flushSync: O },
      )
    }
    Re.forEach((me) => {
      fe.has(me.key) && Ze(me.key), me.controller && fe.set(me.key, me.controller)
    })
    let kt = () => Re.forEach((me) => Ze(me.key))
    q && q.signal.addEventListener('abort', kt)
    let { results: wn, loaderResults: Rt, fetcherResults: lt } = await Ft(p.matches, N, Be, Re, f)
    if (f.signal.aborted) return { shortCircuited: !0 }
    q && q.signal.removeEventListener('abort', kt), Re.forEach((me) => fe.delete(me.key))
    let bt = Ws(wn)
    if (bt) {
      if (bt.idx >= Be.length) {
        let me = Re[bt.idx - Be.length].key
        re.add(me)
      }
      return await at(p, bt.result, { replace: P }), { shortCircuited: !0 }
    }
    let { loaderData: yn, errors: Tn } = Vs(p, N, Be, Rt, Ne, Re, lt, F)
    F.forEach((me, ge) => {
      me.subscribe((Je) => {
        ;(Je || me.done) && F.delete(ge)
      })
    })
    let En = Cr(),
      _t = Ht(Oe),
      Ar = En || _t || Re.length > 0
    return Ee({ loaderData: yn, errors: Tn }, Ar ? { fetchers: new Map(p.fetchers) } : {})
  }
  function Rr(f, m, N, R) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      )
    fe.has(f) && Ze(f)
    let A = (R && R.unstable_flushSync) === !0,
      z = c || a,
      P = Pn(
        p.location,
        p.matches,
        l,
        u.v7_prependBasename,
        N,
        u.v7_relativeSplatPath,
        m,
        R == null ? void 0 : R.relative,
      ),
      $ = Ct(z, P, l)
    if (!$) {
      st(f, m, ze(404, { pathname: P }), { flushSync: A })
      return
    }
    let { path: O, submission: te, error: Ne } = ks(u.v7_normalizeFormMethod, !0, P, R)
    if (Ne) {
      st(f, m, Ne, { flushSync: A })
      return
    }
    let ae = $n($, O)
    if (((ee = (R && R.preventScrollReset) === !0), te && qe(te.formMethod))) {
      pn(f, m, O, ae, $, A, te)
      return
    }
    x.set(f, { routeId: m, path: O }), Bt(f, m, O, ae, $, A, te)
  }
  async function pn(f, m, N, R, A, z, P) {
    if ((zt(), x.delete(f), !R.route.action && !R.route.lazy)) {
      let ge = ze(405, { method: P.formMethod, pathname: N, routeId: m })
      st(f, m, ge, { flushSync: z })
      return
    }
    let $ = p.fetchers.get(f)
    $e(f, Za(P, $), { flushSync: z })
    let O = new AbortController(),
      te = qt(e.history, N, O.signal, P)
    fe.set(f, O)
    let Ne = Ke,
      ae = await Kt('action', te, R, A, o, s, l, u.v7_relativeSplatPath)
    if (te.signal.aborted) {
      fe.get(f) === O && fe.delete(f)
      return
    }
    if (V.has(f)) {
      $e(f, ct(void 0))
      return
    }
    if (Vt(ae))
      if ((fe.delete(f), Oe > Ne)) {
        $e(f, ct(void 0))
        return
      } else return re.add(f), $e(f, Yt(P)), at(p, ae, { fetcherSubmission: P })
    if (ar(ae)) {
      st(f, m, ae.error)
      return
    }
    if (pt(ae)) throw ze(400, { type: 'defer-action' })
    let pe = p.navigation.location || p.location,
      _e = qt(e.history, pe, O.signal),
      Be = c || a,
      Re = p.navigation.state !== 'idle' ? Ct(Be, p.navigation.location, l) : p.matches
    se(Re, "Didn't find any matches after fetcher action")
    let kt = ++Ke
    ie.set(f, kt)
    let wn = Yt(P, ae.data)
    p.fetchers.set(f, wn)
    let [Rt, lt] = Rs(e.history, p, Re, P, pe, !1, ye, He, Ge, V, x, re, Be, l, { [R.route.id]: ae.data }, void 0)
    lt
      .filter((ge) => ge.key !== f)
      .forEach((ge) => {
        let Je = ge.key,
          jr = p.fetchers.get(Je),
          sa = Yt(void 0, jr ? jr.data : void 0)
        p.fetchers.set(Je, sa), fe.has(Je) && Ze(Je), ge.controller && fe.set(Je, ge.controller)
      }),
      ue({ fetchers: new Map(p.fetchers) })
    let bt = () => lt.forEach((ge) => Ze(ge.key))
    O.signal.addEventListener('abort', bt)
    let { results: yn, loaderResults: Tn, fetcherResults: En } = await Ft(p.matches, Re, Rt, lt, _e)
    if (O.signal.aborted) return
    O.signal.removeEventListener('abort', bt), ie.delete(f), fe.delete(f), lt.forEach((ge) => fe.delete(ge.key))
    let _t = Ws(yn)
    if (_t) {
      if (_t.idx >= Rt.length) {
        let ge = lt[_t.idx - Rt.length].key
        re.add(ge)
      }
      return at(p, _t.result)
    }
    let { loaderData: Ar, errors: me } = Vs(p, p.matches, Rt, Tn, void 0, lt, En, F)
    if (p.fetchers.has(f)) {
      let ge = ct(ae.data)
      p.fetchers.set(f, ge)
    }
    Ht(kt),
      p.navigation.state === 'loading' && kt > Oe
        ? (se(L, 'Expected pending action'),
          q && q.abort(),
          ce(p.navigation.location, { matches: Re, loaderData: Ar, errors: me, fetchers: new Map(p.fetchers) }))
        : (ue({ errors: me, loaderData: As(p.loaderData, Ar, Re, me), fetchers: new Map(p.fetchers) }), (ye = !1))
  }
  async function Bt(f, m, N, R, A, z, P) {
    let $ = p.fetchers.get(f)
    $e(f, Yt(P, $ ? $.data : void 0), { flushSync: z })
    let O = new AbortController(),
      te = qt(e.history, N, O.signal)
    fe.set(f, O)
    let Ne = Ke,
      ae = await Kt('loader', te, R, A, o, s, l, u.v7_relativeSplatPath)
    if ((pt(ae) && (ae = (await Ei(ae, te.signal, !0)) || ae), fe.get(f) === O && fe.delete(f), !te.signal.aborted)) {
      if (V.has(f)) {
        $e(f, ct(void 0))
        return
      }
      if (Vt(ae))
        if (Oe > Ne) {
          $e(f, ct(void 0))
          return
        } else {
          re.add(f), await at(p, ae)
          return
        }
      if (ar(ae)) {
        st(f, m, ae.error)
        return
      }
      se(!pt(ae), 'Unhandled fetcher deferred data'), $e(f, ct(ae.data))
    }
  }
  async function at(f, m, N) {
    let { submission: R, fetcherSubmission: A, replace: z } = N === void 0 ? {} : N
    m.revalidate && (ye = !0)
    let P = dr(f.location, m.location, { _isRedirect: !0 })
    if ((se(P, 'Expected a location on the redirect navigation'), r)) {
      let pe = !1
      if (m.reloadDocument) pe = !0
      else if (gi.test(m.location)) {
        const _e = e.history.createURL(m.location)
        pe = _e.origin !== t.location.origin || et(_e.pathname, l) == null
      }
      if (pe) {
        z ? t.location.replace(m.location) : t.location.assign(m.location)
        return
      }
    }
    q = null
    let $ = z === !0 ? De.Replace : De.Push,
      { formMethod: O, formAction: te, formEncType: Ne } = f.navigation
    !R && !A && O && te && Ne && (R = Ms(f.navigation))
    let ae = R || A
    if (Ma.has(m.status) && ae && qe(ae.formMethod))
      await Ve($, P, { submission: Ee({}, ae, { formAction: m.location }), preventScrollReset: ee })
    else {
      let pe = kn(P, R)
      await Ve($, P, { overrideNavigation: pe, fetcherSubmission: A, preventScrollReset: ee })
    }
  }
  async function Ft(f, m, N, R, A) {
    let z = await Promise.all([
        ...N.map((O) => Kt('loader', A, O, m, o, s, l, u.v7_relativeSplatPath)),
        ...R.map((O) =>
          O.matches && O.match && O.controller
            ? Kt(
                'loader',
                qt(e.history, O.path, O.controller.signal),
                O.match,
                O.matches,
                o,
                s,
                l,
                u.v7_relativeSplatPath,
              )
            : { type: Te.error, error: ze(404, { pathname: O.path }) },
        ),
      ]),
      P = z.slice(0, N.length),
      $ = z.slice(N.length)
    return (
      await Promise.all([
        Ls(
          f,
          N,
          P,
          P.map(() => A.signal),
          !1,
          p.loaderData,
        ),
        Ls(
          f,
          R.map((O) => O.match),
          $,
          R.map((O) => (O.controller ? O.controller.signal : null)),
          !0,
        ),
      ]),
      { results: z, loaderResults: P, fetcherResults: $ }
    )
  }
  function zt() {
    ;(ye = !0),
      He.push(...S()),
      x.forEach((f, m) => {
        fe.has(m) && (Ge.push(m), Ze(m))
      })
  }
  function $e(f, m, N) {
    N === void 0 && (N = {}),
      p.fetchers.set(f, m),
      ue({ fetchers: new Map(p.fetchers) }, { flushSync: (N && N.flushSync) === !0 })
  }
  function st(f, m, N, R) {
    R === void 0 && (R = {})
    let A = or(p.matches, m)
    St(f), ue({ errors: { [A.route.id]: N }, fetchers: new Map(p.fetchers) }, { flushSync: (R && R.flushSync) === !0 })
  }
  function _r(f) {
    return u.v7_fetcherPersist && (U.set(f, (U.get(f) || 0) + 1), V.has(f) && V.delete(f)), p.fetchers.get(f) || Ia
  }
  function St(f) {
    let m = p.fetchers.get(f)
    fe.has(f) && !(m && m.state === 'loading' && ie.has(f)) && Ze(f),
      x.delete(f),
      ie.delete(f),
      re.delete(f),
      V.delete(f),
      p.fetchers.delete(f)
  }
  function Nn(f) {
    if (u.v7_fetcherPersist) {
      let m = (U.get(f) || 0) - 1
      m <= 0 ? (U.delete(f), V.add(f)) : U.set(f, m)
    } else St(f)
    ue({ fetchers: new Map(p.fetchers) })
  }
  function Ze(f) {
    let m = fe.get(f)
    se(m, 'Expected fetch controller: ' + f), m.abort(), fe.delete(f)
  }
  function Ur(f) {
    for (let m of f) {
      let N = _r(m),
        R = ct(N.data)
      p.fetchers.set(m, R)
    }
  }
  function Cr() {
    let f = [],
      m = !1
    for (let N of re) {
      let R = p.fetchers.get(N)
      se(R, 'Expected fetcher: ' + N), R.state === 'loading' && (re.delete(N), f.push(N), (m = !0))
    }
    return Ur(f), m
  }
  function Ht(f) {
    let m = []
    for (let [N, R] of ie)
      if (R < f) {
        let A = p.fetchers.get(N)
        se(A, 'Expected fetcher: ' + N), A.state === 'loading' && (Ze(N), ie.delete(N), m.push(N))
      }
    return Ur(m), m.length > 0
  }
  function gn(f, m) {
    let N = p.blockers.get(f) || Gt
    return M.get(f) !== m && M.set(f, m), N
  }
  function Vr(f) {
    p.blockers.delete(f), M.delete(f)
  }
  function b(f, m) {
    let N = p.blockers.get(f) || Gt
    se(
      (N.state === 'unblocked' && m.state === 'blocked') ||
        (N.state === 'blocked' && m.state === 'blocked') ||
        (N.state === 'blocked' && m.state === 'proceeding') ||
        (N.state === 'blocked' && m.state === 'unblocked') ||
        (N.state === 'proceeding' && m.state === 'unblocked'),
      'Invalid blocker state transition: ' + N.state + ' -> ' + m.state,
    )
    let R = new Map(p.blockers)
    R.set(f, m), ue({ blockers: R })
  }
  function h(f) {
    let { currentLocation: m, nextLocation: N, historyAction: R } = f
    if (M.size === 0) return
    M.size > 1 && Se(!1, 'A router only supports one blocker at a time')
    let A = Array.from(M.entries()),
      [z, P] = A[A.length - 1],
      $ = p.blockers.get(z)
    if (!($ && $.state === 'proceeding') && P({ currentLocation: m, nextLocation: N, historyAction: R })) return z
  }
  function S(f) {
    let m = []
    return (
      F.forEach((N, R) => {
        ;(!f || f(R)) && (N.cancel(), m.push(R), F.delete(R))
      }),
      m
    )
  }
  function W(f, m, N) {
    if (((g = f), (w = m), (_ = N || null), !T && p.navigation === Sn)) {
      T = !0
      let R = H(p.location, p.matches)
      R != null && ue({ restoreScrollPosition: R })
    }
    return () => {
      ;(g = null), (w = null), (_ = null)
    }
  }
  function j(f, m) {
    return (
      (_ &&
        _(
          f,
          m.map((R) => ha(R, p.loaderData)),
        )) ||
      f.key
    )
  }
  function I(f, m) {
    if (g && w) {
      let N = j(f, m)
      g[N] = w()
    }
  }
  function H(f, m) {
    if (g) {
      let N = j(f, m),
        R = g[N]
      if (typeof R == 'number') return R
    }
    return null
  }
  function G(f) {
    ;(o = {}), (c = Mn(f, s, void 0, o))
  }
  return (
    (K = {
      get basename() {
        return l
      },
      get future() {
        return u
      },
      get state() {
        return p
      },
      get routes() {
        return a
      },
      get window() {
        return t
      },
      initialize: oe,
      subscribe: be,
      enableScrollRestoration: W,
      navigate: xe,
      fetch: Rr,
      revalidate: We,
      createHref: (f) => e.history.createHref(f),
      encodeLocation: (f) => e.history.encodeLocation(f),
      getFetcher: _r,
      deleteFetcher: Nn,
      dispose: B,
      getBlocker: gn,
      deleteBlocker: Vr,
      _internalFetchControllers: fe,
      _internalActiveDeferreds: F,
      _internalSetRoutes: G,
    }),
    K
  )
}
function $a(e) {
  return e != null && (('formData' in e && e.formData != null) || ('body' in e && e.body !== void 0))
}
function Pn(e, t, r, n, s, o, a, c) {
  let l, u
  if (a) {
    l = []
    for (let v of t)
      if ((l.push(v), v.route.id === a)) {
        u = v
        break
      }
  } else (l = t), (u = t[t.length - 1])
  let d = es(s || '.', Qn(l, o), et(e.pathname, r) || e.pathname, c === 'path')
  return (
    s == null && ((d.search = e.search), (d.hash = e.hash)),
    (s == null || s === '' || s === '.') &&
      u &&
      u.route.index &&
      !rs(d.search) &&
      (d.search = d.search ? d.search.replace(/^\?/, '?index&') : '?index'),
    n && r !== '/' && (d.pathname = d.pathname === '/' ? r : Qe([r, d.pathname])),
    ft(d)
  )
}
function ks(e, t, r, n) {
  if (!n || !$a(n)) return { path: r }
  if (n.formMethod && !Ya(n.formMethod)) return { path: r, error: ze(405, { method: n.formMethod }) }
  let s = () => ({ path: r, error: ze(400, { type: 'invalid-body' }) }),
    o = n.formMethod || 'get',
    a = e ? o.toUpperCase() : o.toLowerCase(),
    c = Ti(r)
  if (n.body !== void 0) {
    if (n.formEncType === 'text/plain') {
      if (!qe(a)) return s()
      let g =
        typeof n.body == 'string'
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
          ? Array.from(n.body.entries()).reduce((_, w) => {
              let [T, D] = w
              return (
                '' +
                _ +
                T +
                '=' +
                D +
                `
`
              )
            }, '')
          : String(n.body)
      return {
        path: r,
        submission: {
          formMethod: a,
          formAction: c,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: g,
        },
      }
    } else if (n.formEncType === 'application/json') {
      if (!qe(a)) return s()
      try {
        let g = typeof n.body == 'string' ? JSON.parse(n.body) : n.body
        return {
          path: r,
          submission: {
            formMethod: a,
            formAction: c,
            formEncType: n.formEncType,
            formData: void 0,
            json: g,
            text: void 0,
          },
        }
      } catch {
        return s()
      }
    }
  }
  se(typeof FormData == 'function', 'FormData is not available in this environment')
  let l, u
  if (n.formData) (l = On(n.formData)), (u = n.formData)
  else if (n.body instanceof FormData) (l = On(n.body)), (u = n.body)
  else if (n.body instanceof URLSearchParams) (l = n.body), (u = Cs(l))
  else if (n.body == null) (l = new URLSearchParams()), (u = new FormData())
  else
    try {
      ;(l = new URLSearchParams(n.body)), (u = Cs(l))
    } catch {
      return s()
    }
  let d = {
    formMethod: a,
    formAction: c,
    formEncType: (n && n.formEncType) || 'application/x-www-form-urlencoded',
    formData: u,
    json: void 0,
    text: void 0,
  }
  if (qe(d.formMethod)) return { path: r, submission: d }
  let v = it(r)
  return t && v.search && rs(v.search) && l.append('index', ''), (v.search = '?' + l), { path: ft(v), submission: d }
}
function Ba(e, t) {
  let r = e
  if (t) {
    let n = e.findIndex((s) => s.route.id === t)
    n >= 0 && (r = e.slice(0, n))
  }
  return r
}
function Rs(e, t, r, n, s, o, a, c, l, u, d, v, g, _, w, T) {
  let D = T ? Object.values(T)[0] : w ? Object.values(w)[0] : void 0,
    k = e.createURL(t.location),
    y = e.createURL(s),
    C = T ? Object.keys(T)[0] : void 0,
    K = Ba(r, C).filter((L, ee) => {
      if (o) return Fa(t, L.route)
      if (L.route.lazy) return !0
      if (L.route.loader == null) return !1
      if (za(t.loaderData, t.matches[ee], L) || c.some((le) => le === L.route.id)) return !0
      let q = t.matches[ee],
        J = L
      return _s(
        L,
        Ee({ currentUrl: k, currentParams: q.params, nextUrl: y, nextParams: J.params }, n, {
          actionResult: D,
          defaultShouldRevalidate:
            a || k.pathname + k.search === y.pathname + y.search || k.search !== y.search || yi(q, J),
        }),
      )
    }),
    p = []
  return (
    d.forEach((L, ee) => {
      if (o || !r.some((de) => de.route.id === L.routeId) || u.has(ee)) return
      let q = Ct(g, L.path, _)
      if (!q) {
        p.push({ key: ee, routeId: L.routeId, path: L.path, matches: null, match: null, controller: null })
        return
      }
      let J = t.fetchers.get(ee),
        le = $n(q, L.path),
        ke = !1
      v.has(ee)
        ? (ke = !1)
        : l.includes(ee)
        ? (ke = !0)
        : J && J.state !== 'idle' && J.data === void 0
        ? (ke = a)
        : (ke = _s(
            le,
            Ee(
              {
                currentUrl: k,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: y,
                nextParams: r[r.length - 1].params,
              },
              n,
              { actionResult: D, defaultShouldRevalidate: a },
            ),
          )),
        ke &&
          p.push({
            key: ee,
            routeId: L.routeId,
            path: L.path,
            matches: q,
            match: le,
            controller: new AbortController(),
          })
    }),
    [K, p]
  )
}
function Fa(e, t) {
  return t.loader
    ? t.loader.hydrate
      ? !0
      : e.loaderData[t.id] === void 0 && (!e.errors || e.errors[t.id] === void 0)
    : !1
}
function za(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    s = e[r.route.id] === void 0
  return n || s
}
function yi(e, t) {
  let r = e.route.path
  return e.pathname !== t.pathname || (r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
}
function _s(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t)
    if (typeof r == 'boolean') return r
  }
  return t.defaultShouldRevalidate
}
async function Us(e, t, r) {
  if (!e.lazy) return
  let n = await e.lazy()
  if (!e.lazy) return
  let s = r[e.id]
  se(s, 'No route found in manifest')
  let o = {}
  for (let a in n) {
    let l = s[a] !== void 0 && a !== 'hasErrorBoundary'
    Se(
      !l,
      'Route "' +
        s.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.'),
    ),
      !l && !fa.has(a) && (o[a] = n[a])
  }
  Object.assign(s, o), Object.assign(s, Ee({}, t(s), { lazy: void 0 }))
}
async function Kt(e, t, r, n, s, o, a, c, l) {
  l === void 0 && (l = {})
  let u,
    d,
    v,
    g = (T) => {
      let D,
        k = new Promise((y, C) => (D = C))
      return (
        (v = () => D()),
        t.signal.addEventListener('abort', v),
        Promise.race([T({ request: t, params: r.params, context: l.requestContext }), k])
      )
    }
  try {
    let T = r.route[e]
    if (r.route.lazy)
      if (T) {
        let D,
          k = await Promise.all([
            g(T).catch((y) => {
              D = y
            }),
            Us(r.route, o, s),
          ])
        if (D) throw D
        d = k[0]
      } else if ((await Us(r.route, o, s), (T = r.route[e]), T)) d = await g(T)
      else if (e === 'action') {
        let D = new URL(t.url),
          k = D.pathname + D.search
        throw ze(405, { method: t.method, pathname: k, routeId: r.route.id })
      } else return { type: Te.data, data: void 0 }
    else if (T) d = await g(T)
    else {
      let D = new URL(t.url),
        k = D.pathname + D.search
      throw ze(404, { pathname: k })
    }
    se(
      d !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' + r.route.id + '" but didn\'t return anything from your `' + e + '` ') +
        'function. Please return a value or `null`.',
    )
  } catch (T) {
    ;(u = Te.error), (d = T)
  } finally {
    v && t.signal.removeEventListener('abort', v)
  }
  if (qa(d)) {
    let T = d.status
    if (La.has(T)) {
      let k = d.headers.get('Location')
      if ((se(k, 'Redirects returned/thrown from loaders/actions must have a Location header'), !gi.test(k)))
        k = Pn(new URL(t.url), n.slice(0, n.indexOf(r) + 1), a, !0, k, c)
      else if (!l.isStaticRequest) {
        let y = new URL(t.url),
          C = k.startsWith('//') ? new URL(y.protocol + k) : new URL(k),
          Y = et(C.pathname, a) != null
        C.origin === y.origin && Y && (k = C.pathname + C.search + C.hash)
      }
      if (l.isStaticRequest) throw (d.headers.set('Location', k), d)
      return {
        type: Te.redirect,
        status: T,
        location: k,
        revalidate: d.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: d.headers.get('X-Remix-Reload-Document') !== null,
      }
    }
    if (l.isRouteRequest) throw { type: u === Te.error ? Te.error : Te.data, response: d }
    let D
    try {
      let k = d.headers.get('Content-Type')
      k && /\bapplication\/json\b/.test(k) ? (D = await d.json()) : (D = await d.text())
    } catch (k) {
      return { type: Te.error, error: k }
    }
    return u === Te.error
      ? { type: u, error: new ts(T, d.statusText, D), headers: d.headers }
      : { type: Te.data, data: D, statusCode: d.status, headers: d.headers }
  }
  if (u === Te.error) return { type: u, error: d }
  if (Ka(d)) {
    var _, w
    return {
      type: Te.deferred,
      deferredData: d,
      statusCode: (_ = d.init) == null ? void 0 : _.status,
      headers: ((w = d.init) == null ? void 0 : w.headers) && new Headers(d.init.headers),
    }
  }
  return { type: Te.data, data: d }
}
function qt(e, t, r, n) {
  let s = e.createURL(Ti(t)).toString(),
    o = { signal: r }
  if (n && qe(n.formMethod)) {
    let { formMethod: a, formEncType: c } = n
    ;(o.method = a.toUpperCase()),
      c === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': c })), (o.body = JSON.stringify(n.json)))
        : c === 'text/plain'
        ? (o.body = n.text)
        : c === 'application/x-www-form-urlencoded' && n.formData
        ? (o.body = On(n.formData))
        : (o.body = n.formData)
  }
  return new Request(s, o)
}
function On(e) {
  let t = new URLSearchParams()
  for (let [r, n] of e.entries()) t.append(r, typeof n == 'string' ? n : n.name)
  return t
}
function Cs(e) {
  let t = new FormData()
  for (let [r, n] of e.entries()) t.append(r, n)
  return t
}
function Ha(e, t, r, n, s) {
  let o = {},
    a = null,
    c,
    l = !1,
    u = {}
  return (
    r.forEach((d, v) => {
      let g = t[v].route.id
      if ((se(!Vt(d), 'Cannot handle redirect results in processLoaderData'), ar(d))) {
        let _ = or(e, g),
          w = d.error
        n && ((w = Object.values(n)[0]), (n = void 0)),
          (a = a || {}),
          a[_.route.id] == null && (a[_.route.id] = w),
          (o[g] = void 0),
          l || ((l = !0), (c = pi(d.error) ? d.error.status : 500)),
          d.headers && (u[g] = d.headers)
      } else
        pt(d) ? (s.set(g, d.deferredData), (o[g] = d.deferredData.data)) : (o[g] = d.data),
          d.statusCode != null && d.statusCode !== 200 && !l && (c = d.statusCode),
          d.headers && (u[g] = d.headers)
    }),
    n && ((a = n), (o[Object.keys(n)[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: c || 200, loaderHeaders: u }
  )
}
function Vs(e, t, r, n, s, o, a, c) {
  let { loaderData: l, errors: u } = Ha(t, r, n, s, c)
  for (let d = 0; d < o.length; d++) {
    let { key: v, match: g, controller: _ } = o[d]
    se(a !== void 0 && a[d] !== void 0, 'Did not find corresponding fetcher result')
    let w = a[d]
    if (!(_ && _.signal.aborted))
      if (ar(w)) {
        let T = or(e.matches, g == null ? void 0 : g.route.id)
        ;(u && u[T.route.id]) || (u = Ee({}, u, { [T.route.id]: w.error })), e.fetchers.delete(v)
      } else if (Vt(w)) se(!1, 'Unhandled fetcher revalidation redirect')
      else if (pt(w)) se(!1, 'Unhandled fetcher deferred data')
      else {
        let T = ct(w.data)
        e.fetchers.set(v, T)
      }
  }
  return { loaderData: l, errors: u }
}
function As(e, t, r, n) {
  let s = Ee({}, t)
  for (let o of r) {
    let a = o.route.id
    if (
      (t.hasOwnProperty(a) ? t[a] !== void 0 && (s[a] = t[a]) : e[a] !== void 0 && o.route.loader && (s[a] = e[a]),
      n && n.hasOwnProperty(a))
    )
      break
  }
  return s
}
function or(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  )
}
function js(e) {
  let t = e.length === 1 ? e[0] : e.find((r) => r.index || !r.path || r.path === '/') || { id: '__shim-error-route__' }
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t }
}
function ze(e, t) {
  let { pathname: r, routeId: n, method: s, type: o } = t === void 0 ? {} : t,
    a = 'Unknown Server Error',
    c = 'Unknown @remix-run/router error'
  return (
    e === 400
      ? ((a = 'Bad Request'),
        s && r && n
          ? (c =
              'You made a ' +
              s +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + n + '", ') +
              'so there is no way to handle the request.')
          : o === 'defer-action'
          ? (c = 'defer() is not supported in actions')
          : o === 'invalid-body' && (c = 'Unable to encode submission body'))
      : e === 403
      ? ((a = 'Forbidden'), (c = 'Route "' + n + '" does not match URL "' + r + '"'))
      : e === 404
      ? ((a = 'Not Found'), (c = 'No route matches URL "' + r + '"'))
      : e === 405 &&
        ((a = 'Method Not Allowed'),
        s && r && n
          ? (c =
              'You made a ' +
              s.toUpperCase() +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide an `action` for route "' + n + '", ') +
              'so there is no way to handle the request.')
          : s && (c = 'Invalid request method "' + s.toUpperCase() + '"')),
    new ts(e || 500, a, new Error(c), !0)
  )
}
function Ws(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t]
    if (Vt(r)) return { result: r, idx: t }
  }
}
function Ti(e) {
  let t = typeof e == 'string' ? it(e) : e
  return ft(Ee({}, t, { hash: '' }))
}
function Ga(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== ''
}
function pt(e) {
  return e.type === Te.deferred
}
function ar(e) {
  return e.type === Te.error
}
function Vt(e) {
  return (e && e.type) === Te.redirect
}
function Ka(e) {
  let t = e
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  )
}
function qa(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  )
}
function Ya(e) {
  return Wa.has(e.toLowerCase())
}
function qe(e) {
  return Aa.has(e.toLowerCase())
}
async function Ls(e, t, r, n, s, o) {
  for (let a = 0; a < r.length; a++) {
    let c = r[a],
      l = t[a]
    if (!l) continue
    let u = e.find((v) => v.route.id === l.route.id),
      d = u != null && !yi(u, l) && (o && o[l.route.id]) !== void 0
    if (pt(c) && (s || d)) {
      let v = n[a]
      se(v, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Ei(c, v, s).then((g) => {
          g && (r[a] = g || r[a])
        })
    }
  }
}
async function Ei(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: Te.data, data: e.deferredData.unwrappedData }
      } catch (s) {
        return { type: Te.error, error: s }
      }
    return { type: Te.data, data: e.deferredData.data }
  }
}
function rs(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '')
}
function $n(e, t) {
  let r = typeof t == 'string' ? it(t).search : t.search
  if (e[e.length - 1].route.index && rs(r || '')) return e[e.length - 1]
  let n = xi(e)
  return n[n.length - 1]
}
function Ms(e) {
  let { formMethod: t, formAction: r, formEncType: n, text: s, formData: o, json: a } = e
  if (!(!t || !r || !n)) {
    if (s != null) return { formMethod: t, formAction: r, formEncType: n, formData: void 0, json: void 0, text: s }
    if (o != null) return { formMethod: t, formAction: r, formEncType: n, formData: o, json: void 0, text: void 0 }
    if (a !== void 0) return { formMethod: t, formAction: r, formEncType: n, formData: void 0, json: a, text: void 0 }
  }
}
function kn(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      }
}
function Xa(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  }
}
function Yt(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      }
}
function Za(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  }
}
function ct(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  }
}
function Ja(e, t) {
  try {
    let r = e.sessionStorage.getItem(wi)
    if (r) {
      let n = JSON.parse(r)
      for (let [s, o] of Object.entries(n || {})) o && Array.isArray(o) && t.set(s, new Set(o || []))
    }
  } catch {}
}
function Qa(e, t) {
  if (t.size > 0) {
    let r = {}
    for (let [n, s] of t) r[n] = [...s]
    try {
      e.sessionStorage.setItem(wi, JSON.stringify(r))
    } catch (n) {
      Se(!1, 'Failed to save applied view transitions in sessionStorage (' + n + ').')
    }
  }
}
/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fr() {
  return (
    (fr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    fr.apply(this, arguments)
  )
}
const It = E.createContext(null)
It.displayName = 'DataRouter'
const Yr = E.createContext(null)
Yr.displayName = 'DataRouterState'
const el = E.createContext(null)
el.displayName = 'Await'
const Ye = E.createContext(null)
Ye.displayName = 'Navigation'
const xr = E.createContext(null)
xr.displayName = 'Location'
const tt = E.createContext({ outlet: null, matches: [], isDataRoute: !1 })
tt.displayName = 'Route'
const ns = E.createContext(null)
ns.displayName = 'RouteError'
function tl(e, t) {
  let { relative: r } = t === void 0 ? {} : t
  pr() || se(!1, 'useHref() may be used only in the context of a <Router> component.')
  let { basename: n, navigator: s } = E.useContext(Ye),
    { hash: o, pathname: a, search: c } = Nr(e, { relative: r }),
    l = a
  return n !== '/' && (l = a === '/' ? n : Qe([n, a])), s.createHref({ pathname: l, search: c, hash: o })
}
function pr() {
  return E.useContext(xr) != null
}
function yt() {
  return (
    pr() || se(!1, 'useLocation() may be used only in the context of a <Router> component.'), E.useContext(xr).location
  )
}
const Di = 'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
function Si(e) {
  E.useContext(Ye).static || E.useLayoutEffect(e)
}
function Xe() {
  let { isDataRoute: e } = E.useContext(tt)
  return e ? bl() : rl()
}
function rl() {
  pr() || se(!1, 'useNavigate() may be used only in the context of a <Router> component.')
  let e = E.useContext(It),
    { basename: t, future: r, navigator: n } = E.useContext(Ye),
    { matches: s } = E.useContext(tt),
    { pathname: o } = yt(),
    a = JSON.stringify(Qn(s, r.v7_relativeSplatPath)),
    c = E.useRef(!1)
  return (
    Si(() => {
      c.current = !0
    }),
    E.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), Se(c.current, Di), !c.current)) return
        if (typeof u == 'number') {
          n.go(u)
          return
        }
        let v = es(u, JSON.parse(a), o, d.relative === 'path')
        e == null && t !== '/' && (v.pathname = v.pathname === '/' ? t : Qe([t, v.pathname])),
          (d.replace ? n.replace : n.push)(v, d.state, d)
      },
      [t, n, a, o, e],
    )
  )
}
const nl = E.createContext(null)
function sl(e) {
  let t = E.useContext(tt).outlet
  return t && E.createElement(nl.Provider, { value: e }, t)
}
function Nr(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = E.useContext(Ye),
    { matches: s } = E.useContext(tt),
    { pathname: o } = yt(),
    a = JSON.stringify(Qn(s, n.v7_relativeSplatPath))
  return E.useMemo(() => es(e, JSON.parse(a), o, r === 'path'), [e, a, o, r])
}
function il(e, t, r, n) {
  pr() || se(!1, 'useRoutes() may be used only in the context of a <Router> component.')
  let { navigator: s } = E.useContext(Ye),
    { matches: o } = E.useContext(tt),
    a = o[o.length - 1],
    c = a ? a.params : {},
    l = a ? a.pathname : '/',
    u = a ? a.pathnameBase : '/',
    d = a && a.route
  {
    let y = (d && d.path) || ''
    Ri(
      l,
      !d || y.endsWith('*'),
      'You rendered descendant <Routes> (or called `useRoutes()`) at ' +
        ('"' + l + '" (under <Route path="' + y + '">) but the ') +
        `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` +
        ('Please change the parent <Route path="' + y + '"> to <Route ') +
        ('path="' + (y === '/' ? '*' : y + '/*') + '">.'),
    )
  }
  let v = yt(),
    g
  if (t) {
    var _
    let y = typeof t == 'string' ? it(t) : t
    u === '/' ||
      ((_ = y.pathname) != null && _.startsWith(u)) ||
      se(
        !1,
        'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was ' +
          ('matched by all parent routes. The current pathname base is "' + u + '" ') +
          ('but pathname "' + y.pathname + '" was given in the `location` prop.'),
      ),
      (g = y)
  } else g = v
  let w = g.pathname || '/',
    T = u === '/' ? w : w.slice(u.length) || '/',
    D = Ct(e, { pathname: T })
  Se(d || D != null, 'No routes matched location "' + g.pathname + g.search + g.hash + '" '),
    Se(
      D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0,
      'Matched leaf route at location "' +
        g.pathname +
        g.search +
        g.hash +
        '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.',
    )
  let k = ul(
    D &&
      D.map((y) =>
        Object.assign({}, y, {
          params: Object.assign({}, c, y.params),
          pathname: Qe([u, s.encodeLocation ? s.encodeLocation(y.pathname).pathname : y.pathname]),
          pathnameBase:
            y.pathnameBase === '/'
              ? u
              : Qe([u, s.encodeLocation ? s.encodeLocation(y.pathnameBase).pathname : y.pathnameBase]),
        }),
      ),
    o,
    r,
    n,
  )
  return t && k
    ? E.createElement(
        xr.Provider,
        {
          value: {
            location: fr({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, g),
            navigationType: De.Pop,
          },
        },
        k,
      )
    : k
}
function ol() {
  let e = vl(),
    t = pi(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = 'rgba(200,200,200, 0.5)',
    s = { padding: '0.5rem', backgroundColor: n },
    o = { padding: '2px 4px', backgroundColor: n },
    a = null
  return (
    console.error('Error handled by React Router default ErrorBoundary:', e),
    (a = E.createElement(
      E.Fragment,
      null,
      E.createElement('p', null, '💿 Hey developer 👋'),
      E.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        E.createElement('code', { style: o }, 'ErrorBoundary'),
        ' or',
        ' ',
        E.createElement('code', { style: o }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    E.createElement(
      E.Fragment,
      null,
      E.createElement('h2', null, 'Unexpected Application Error!'),
      E.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      r ? E.createElement('pre', { style: s }, r) : null,
      a,
    )
  )
}
const al = E.createElement(ol, null)
class ll extends E.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location || (r.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        }
  }
  componentDidCatch(t, r) {
    console.error('React Router caught the following error during render', t, r)
  }
  render() {
    return this.state.error !== void 0
      ? E.createElement(
          tt.Provider,
          { value: this.props.routeContext },
          E.createElement(ns.Provider, { value: this.state.error, children: this.props.component }),
        )
      : this.props.children
  }
}
function cl(e) {
  let { routeContext: t, match: r, children: n } = e,
    s = E.useContext(It)
  return (
    s &&
      s.static &&
      s.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    E.createElement(tt.Provider, { value: t }, n)
  )
}
function ul(e, t, r, n) {
  var s
  if ((t === void 0 && (t = []), r === void 0 && (r = null), n === void 0 && (n = null), e == null)) {
    var o
    if ((o = r) != null && o.errors) e = r.matches
    else return null
  }
  let a = e,
    c = (s = r) == null ? void 0 : s.errors
  if (c != null) {
    let d = a.findIndex((v) => v.route.id && (c == null ? void 0 : c[v.route.id]))
    d >= 0 || se(!1, 'Could not find a matching route for errors on route IDs: ' + Object.keys(c).join(',')),
      (a = a.slice(0, Math.min(a.length, d + 1)))
  }
  let l = !1,
    u = -1
  if (r && n && n.v7_partialHydration)
    for (let d = 0; d < a.length; d++) {
      let v = a[d]
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (u = d),
        v.route.loader &&
          v.route.id &&
          r.loaderData[v.route.id] === void 0 &&
          (!r.errors || r.errors[v.route.id] === void 0))
      ) {
        ;(l = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]])
        break
      }
    }
  return a.reduceRight((d, v, g) => {
    let _,
      w = !1,
      T = null,
      D = null
    r &&
      ((_ = c && v.route.id ? c[v.route.id] : void 0),
      (T = v.route.errorElement || al),
      l &&
        (u < 0 && g === 0
          ? (Ri('route-fallback', !1, 'No `HydrateFallback` element provided to render during initial hydration'),
            (w = !0),
            (D = null))
          : u === g && ((w = !0), (D = v.route.hydrateFallbackElement || null))))
    let k = t.concat(a.slice(0, g + 1)),
      y = () => {
        let C
        return (
          _
            ? (C = T)
            : w
            ? (C = D)
            : v.route.Component
            ? (C = E.createElement(v.route.Component, null))
            : v.route.element
            ? (C = v.route.element)
            : (C = d),
          E.createElement(cl, {
            match: v,
            routeContext: { outlet: d, matches: k, isDataRoute: r != null },
            children: C,
          })
        )
      }
    return r && (v.route.ErrorBoundary || v.route.errorElement || g === 0)
      ? E.createElement(ll, {
          location: r.location,
          revalidation: r.revalidation,
          component: T,
          error: _,
          children: y(),
          routeContext: { outlet: null, matches: k, isDataRoute: !0 },
        })
      : y()
  }, null)
}
var ki = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), e
    )
  })(ki || {}),
  mr = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    )
  })(mr || {})
function ss(e) {
  return e + ' must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.'
}
function dl(e) {
  let t = E.useContext(It)
  return t || se(!1, ss(e)), t
}
function fl(e) {
  let t = E.useContext(Yr)
  return t || se(!1, ss(e)), t
}
function ml(e) {
  let t = E.useContext(tt)
  return t || se(!1, ss(e)), t
}
function is(e) {
  let t = ml(e),
    r = t.matches[t.matches.length - 1]
  return r.route.id || se(!1, e + ' can only be used on routes that contain a unique "id"'), r.route.id
}
function hl() {
  return is(mr.UseRouteId)
}
function vl() {
  var e
  let t = E.useContext(ns),
    r = fl(mr.UseRouteError),
    n = is(mr.UseRouteError)
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n]
}
function bl() {
  let { router: e } = dl(ki.UseNavigateStable),
    t = is(mr.UseNavigateStable),
    r = E.useRef(!1)
  return (
    Si(() => {
      r.current = !0
    }),
    E.useCallback(
      function (s, o) {
        o === void 0 && (o = {}),
          Se(r.current, Di),
          r.current && (typeof s == 'number' ? e.navigate(s) : e.navigate(s, fr({ fromRouteId: t }, o)))
      },
      [e, t],
    )
  )
}
const Is = {}
function Ri(e, t, r) {
  !t && !Is[e] && ((Is[e] = !0), Se(!1, r))
}
function Hb(e) {
  return sl(e.context)
}
function xl(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: s = De.Pop,
    navigator: o,
    static: a = !1,
    future: c,
  } = e
  pr() &&
    se(!1, 'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.')
  let l = t.replace(/^\/*/, '/'),
    u = E.useMemo(
      () => ({ basename: l, navigator: o, static: a, future: fr({ v7_relativeSplatPath: !1 }, c) }),
      [l, c, o, a],
    )
  typeof n == 'string' && (n = it(n))
  let { pathname: d = '/', search: v = '', hash: g = '', state: _ = null, key: w = 'default' } = n,
    T = E.useMemo(() => {
      let D = et(d, l)
      return D == null ? null : { location: { pathname: D, search: v, hash: g, state: _, key: w }, navigationType: s }
    }, [l, d, v, g, _, w, s])
  return (
    Se(
      T != null,
      '<Router basename="' +
        l +
        '"> is not able to match the URL ' +
        ('"' + d + v + g + '" because it does not start with the ') +
        "basename, so the <Router> won't render anything.",
    ),
    T == null
      ? null
      : E.createElement(Ye.Provider, { value: u }, E.createElement(xr.Provider, { children: r, value: T }))
  )
}
new Promise(() => {})
function pl(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null }
  return (
    e.Component &&
      (e.element &&
        Se(!1, 'You should not include both `Component` and `element` on your route - `Component` will be used.'),
      Object.assign(t, { element: E.createElement(e.Component), Component: void 0 })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        Se(
          !1,
          'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.',
        ),
      Object.assign(t, { hydrateFallbackElement: E.createElement(e.HydrateFallback), HydrateFallback: void 0 })),
    e.ErrorBoundary &&
      (e.errorElement &&
        Se(
          !1,
          'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.',
        ),
      Object.assign(t, { errorElement: E.createElement(e.ErrorBoundary), ErrorBoundary: void 0 })),
    t
  )
}
/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mt() {
  return (
    (mt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    mt.apply(this, arguments)
  )
}
function os(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    s,
    o
  for (o = 0; o < n.length; o++) (s = n[o]), !(t.indexOf(s) >= 0) && (r[s] = e[s])
  return r
}
const $r = 'get',
  Br = 'application/x-www-form-urlencoded'
function Xr(e) {
  return e != null && typeof e.tagName == 'string'
}
function Nl(e) {
  return Xr(e) && e.tagName.toLowerCase() === 'button'
}
function gl(e) {
  return Xr(e) && e.tagName.toLowerCase() === 'form'
}
function wl(e) {
  return Xr(e) && e.tagName.toLowerCase() === 'input'
}
function yl(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Tl(e, t) {
  return e.button === 0 && (!t || t === '_self') && !yl(e)
}
function Bn(e) {
  return (
    e === void 0 && (e = ''),
    new URLSearchParams(
      typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, r) => {
            let n = e[r]
            return t.concat(Array.isArray(n) ? n.map((s) => [r, s]) : [[r, n]])
          }, []),
    )
  )
}
function El(e, t) {
  let r = Bn(e)
  return (
    t &&
      t.forEach((n, s) => {
        r.has(s) ||
          t.getAll(s).forEach((o) => {
            r.append(s, o)
          })
      }),
    r
  )
}
let Wr = null
function Dl() {
  if (Wr === null)
    try {
      new FormData(document.createElement('form'), 0), (Wr = !1)
    } catch {
      Wr = !0
    }
  return Wr
}
const Sl = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'])
function Rn(e) {
  return e != null && !Sl.has(e)
    ? (Se(
        !1,
        '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Br + '"'),
      ),
      null)
    : e
}
function kl(e, t) {
  let r, n, s, o, a
  if (gl(e)) {
    let c = e.getAttribute('action')
    ;(n = c ? et(c, t) : null),
      (r = e.getAttribute('method') || $r),
      (s = Rn(e.getAttribute('enctype')) || Br),
      (o = new FormData(e))
  } else if (Nl(e) || (wl(e) && (e.type === 'submit' || e.type === 'image'))) {
    let c = e.form
    if (c == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')
    let l = e.getAttribute('formaction') || c.getAttribute('action')
    if (
      ((n = l ? et(l, t) : null),
      (r = e.getAttribute('formmethod') || c.getAttribute('method') || $r),
      (s = Rn(e.getAttribute('formenctype')) || Rn(c.getAttribute('enctype')) || Br),
      (o = new FormData(c, e)),
      !Dl())
    ) {
      let { name: u, type: d, value: v } = e
      if (d === 'image') {
        let g = u ? u + '.' : ''
        o.append(g + 'x', '0'), o.append(g + 'y', '0')
      } else u && o.append(u, v)
    }
  } else {
    if (Xr(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">')
    ;(r = $r), (n = null), (s = Br), (a = e)
  }
  return (
    o && s === 'text/plain' && ((a = o), (o = void 0)),
    { action: n, method: r.toLowerCase(), encType: s, formData: o, body: a }
  )
}
const Rl = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  _l = ['aria-current', 'caseSensitive', 'className', 'end', 'style', 'to', 'unstable_viewTransition', 'children'],
  Ul = [
    'fetcherKey',
    'navigate',
    'reloadDocument',
    'replace',
    'state',
    'method',
    'action',
    'onSubmit',
    'relative',
    'preventScrollReset',
    'unstable_viewTransition',
  ]
function Cl(e, t) {
  return Oa({
    basename: t == null ? void 0 : t.basename,
    future: mt({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: ca({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Vl(),
    routes: e,
    mapRouteProperties: pl,
    window: t == null ? void 0 : t.window,
  }).initialize()
}
function Vl() {
  var e
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData
  return t && t.errors && (t = mt({}, t, { errors: Al(t.errors) })), t
}
function Al(e) {
  if (!e) return null
  let t = Object.entries(e),
    r = {}
  for (let [n, s] of t)
    if (s && s.__type === 'RouteErrorResponse') r[n] = new ts(s.status, s.statusText, s.data, s.internal === !0)
    else if (s && s.__type === 'Error') {
      if (s.__subType) {
        let o = window[s.__subType]
        if (typeof o == 'function')
          try {
            let a = new o(s.message)
            ;(a.stack = ''), (r[n] = a)
          } catch {}
      }
      if (r[n] == null) {
        let o = new Error(s.message)
        ;(o.stack = ''), (r[n] = o)
      }
    } else r[n] = s
  return r
}
const as = E.createContext({ isTransitioning: !1 })
as.displayName = 'ViewTransition'
const _i = E.createContext(new Map())
_i.displayName = 'Fetchers'
const jl = 'startTransition',
  Ps = ia[jl],
  Wl = 'flushSync',
  Os = oa[Wl]
function Ll(e) {
  Ps ? Ps(e) : e()
}
function Xt(e) {
  Os ? Os(e) : e()
}
class Ml {
  constructor() {
    ;(this.status = 'pending'),
      (this.promise = new Promise((t, r) => {
        ;(this.resolve = (n) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(n))
        }),
          (this.reject = (n) => {
            this.status === 'pending' && ((this.status = 'rejected'), r(n))
          })
      }))
  }
}
function Il(e) {
  let { fallbackElement: t, router: r, future: n } = e,
    [s, o] = E.useState(r.state),
    [a, c] = E.useState(),
    [l, u] = E.useState({ isTransitioning: !1 }),
    [d, v] = E.useState(),
    [g, _] = E.useState(),
    [w, T] = E.useState(),
    D = E.useRef(new Map()),
    { v7_startTransition: k } = n || {},
    y = E.useCallback(
      (L) => {
        k ? Ll(L) : L()
      },
      [k],
    ),
    C = E.useCallback(
      (L, ee) => {
        let { deletedFetchers: q, unstable_flushSync: J, unstable_viewTransitionOpts: le } = ee
        q.forEach((de) => D.current.delete(de)),
          L.fetchers.forEach((de, ye) => {
            de.data !== void 0 && D.current.set(ye, de.data)
          })
        let ke = r.window == null || typeof r.window.document.startViewTransition != 'function'
        if (!le || ke) {
          J ? Xt(() => o(L)) : y(() => o(L))
          return
        }
        if (J) {
          Xt(() => {
            g && (d && d.resolve(), g.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: le.currentLocation,
                nextLocation: le.nextLocation,
              })
          })
          let de = r.window.document.startViewTransition(() => {
            Xt(() => o(L))
          })
          de.finished.finally(() => {
            Xt(() => {
              v(void 0), _(void 0), c(void 0), u({ isTransitioning: !1 })
            })
          }),
            Xt(() => _(de))
          return
        }
        g
          ? (d && d.resolve(),
            g.skipTransition(),
            T({ state: L, currentLocation: le.currentLocation, nextLocation: le.nextLocation }))
          : (c(L),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: le.currentLocation,
              nextLocation: le.nextLocation,
            }))
      },
      [r.window, g, d, D, y],
    )
  E.useLayoutEffect(() => r.subscribe(C), [r, C]),
    E.useEffect(() => {
      l.isTransitioning && !l.flushSync && v(new Ml())
    }, [l]),
    E.useEffect(() => {
      if (d && a && r.window) {
        let L = a,
          ee = d.promise,
          q = r.window.document.startViewTransition(async () => {
            y(() => o(L)), await ee
          })
        q.finished.finally(() => {
          v(void 0), _(void 0), c(void 0), u({ isTransitioning: !1 })
        }),
          _(q)
      }
    }, [y, a, d, r.window]),
    E.useEffect(() => {
      d && a && s.location.key === a.location.key && d.resolve()
    }, [d, g, s.location, a]),
    E.useEffect(() => {
      !l.isTransitioning &&
        w &&
        (c(w.state),
        u({ isTransitioning: !0, flushSync: !1, currentLocation: w.currentLocation, nextLocation: w.nextLocation }),
        T(void 0))
    }, [l.isTransitioning, w]),
    E.useEffect(() => {
      Se(
        t == null || !r.future.v7_partialHydration,
        '`<RouterProvider fallbackElement>` is deprecated when using `v7_partialHydration`, use a `HydrateFallback` component instead',
      )
    }, [])
  let Y = E.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (L) => r.navigate(L),
        push: (L, ee, q) => r.navigate(L, { state: ee, preventScrollReset: q == null ? void 0 : q.preventScrollReset }),
        replace: (L, ee, q) =>
          r.navigate(L, { replace: !0, state: ee, preventScrollReset: q == null ? void 0 : q.preventScrollReset }),
      }),
      [r],
    ),
    K = r.basename || '/',
    p = E.useMemo(() => ({ router: r, navigator: Y, static: !1, basename: K }), [r, Y, K])
  return E.createElement(
    E.Fragment,
    null,
    E.createElement(
      It.Provider,
      { value: p },
      E.createElement(
        Yr.Provider,
        { value: s },
        E.createElement(
          _i.Provider,
          { value: D.current },
          E.createElement(
            as.Provider,
            { value: l },
            E.createElement(
              xl,
              {
                basename: K,
                location: s.location,
                navigationType: s.historyAction,
                navigator: Y,
                future: { v7_relativeSplatPath: r.future.v7_relativeSplatPath },
              },
              s.initialized || r.future.v7_partialHydration
                ? E.createElement(Pl, { routes: r.routes, future: r.future, state: s })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  )
}
function Pl(e) {
  let { routes: t, future: r, state: n } = e
  return il(t, void 0, n, r)
}
const Ol = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  $l = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ui = E.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: s,
        reloadDocument: o,
        replace: a,
        state: c,
        target: l,
        to: u,
        preventScrollReset: d,
        unstable_viewTransition: v,
      } = t,
      g = os(t, Rl),
      { basename: _ } = E.useContext(Ye),
      w,
      T = !1
    if (typeof u == 'string' && $l.test(u) && ((w = u), Ol))
      try {
        let C = new URL(window.location.href),
          Y = u.startsWith('//') ? new URL(C.protocol + u) : new URL(u),
          K = et(Y.pathname, _)
        Y.origin === C.origin && K != null ? (u = K + Y.search + Y.hash) : (T = !0)
      } catch {
        Se(
          !1,
          '<Link to="' +
            u +
            '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.',
        )
      }
    let D = tl(u, { relative: s }),
      k = Hl(u, { replace: a, state: c, target: l, preventScrollReset: d, relative: s, unstable_viewTransition: v })
    function y(C) {
      n && n(C), C.defaultPrevented || k(C)
    }
    return E.createElement('a', mt({}, g, { href: w || D, onClick: T || o ? n : y, ref: r, target: l }))
  })
Ui.displayName = 'Link'
const Bl = E.forwardRef(function (t, r) {
  let {
      'aria-current': n = 'page',
      caseSensitive: s = !1,
      className: o = '',
      end: a = !1,
      style: c,
      to: l,
      unstable_viewTransition: u,
      children: d,
    } = t,
    v = os(t, _l),
    g = Nr(l, { relative: v.relative }),
    _ = yt(),
    w = E.useContext(Yr),
    { navigator: T } = E.useContext(Ye),
    D = w != null && Jl(g) && u === !0,
    k = T.encodeLocation ? T.encodeLocation(g).pathname : g.pathname,
    y = _.pathname,
    C = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null
  s || ((y = y.toLowerCase()), (C = C ? C.toLowerCase() : null), (k = k.toLowerCase()))
  const Y = k !== '/' && k.endsWith('/') ? k.length - 1 : k.length
  let K = y === k || (!a && y.startsWith(k) && y.charAt(Y) === '/'),
    p = C != null && (C === k || (!a && C.startsWith(k) && C.charAt(k.length) === '/')),
    L = { isActive: K, isPending: p, isTransitioning: D },
    ee = K ? n : void 0,
    q
  typeof o == 'function'
    ? (q = o(L))
    : (q = [o, K ? 'active' : null, p ? 'pending' : null, D ? 'transitioning' : null].filter(Boolean).join(' '))
  let J = typeof c == 'function' ? c(L) : c
  return E.createElement(
    Ui,
    mt({}, v, { 'aria-current': ee, className: q, ref: r, style: J, to: l, unstable_viewTransition: u }),
    typeof d == 'function' ? d(L) : d,
  )
})
Bl.displayName = 'NavLink'
const Fl = E.forwardRef((e, t) => {
  let {
      fetcherKey: r,
      navigate: n,
      reloadDocument: s,
      replace: o,
      state: a,
      method: c = $r,
      action: l,
      onSubmit: u,
      relative: d,
      preventScrollReset: v,
      unstable_viewTransition: g,
    } = e,
    _ = os(e, Ul),
    w = Xl(),
    T = Zl(l, { relative: d }),
    D = c.toLowerCase() === 'get' ? 'get' : 'post',
    k = (y) => {
      if ((u && u(y), y.defaultPrevented)) return
      y.preventDefault()
      let C = y.nativeEvent.submitter,
        Y = (C == null ? void 0 : C.getAttribute('formmethod')) || c
      w(C || y.currentTarget, {
        fetcherKey: r,
        method: Y,
        navigate: n,
        replace: o,
        state: a,
        relative: d,
        preventScrollReset: v,
        unstable_viewTransition: g,
      })
    }
  return E.createElement('form', mt({ ref: t, method: D, action: T, onSubmit: s ? u : k }, _))
})
Fl.displayName = 'Form'
var zr
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(zr || (zr = {}))
var $s
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration')
})($s || ($s = {}))
function zl(e) {
  return e + ' must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.'
}
function Ci(e) {
  let t = E.useContext(It)
  return t || se(!1, zl(e)), t
}
function Hl(e, t) {
  let {
      target: r,
      replace: n,
      state: s,
      preventScrollReset: o,
      relative: a,
      unstable_viewTransition: c,
    } = t === void 0 ? {} : t,
    l = Xe(),
    u = yt(),
    d = Nr(e, { relative: a })
  return E.useCallback(
    (v) => {
      if (Tl(v, r)) {
        v.preventDefault()
        let g = n !== void 0 ? n : ft(u) === ft(d)
        l(e, { replace: g, state: s, preventScrollReset: o, relative: a, unstable_viewTransition: c })
      }
    },
    [u, l, d, n, s, r, e, o, a, c],
  )
}
function Gl(e) {
  Se(
    typeof URLSearchParams < 'u',
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.",
  )
  let t = E.useRef(Bn(e)),
    r = E.useRef(!1),
    n = yt(),
    s = E.useMemo(() => El(n.search, r.current ? null : t.current), [n.search]),
    o = Xe(),
    a = E.useCallback(
      (c, l) => {
        const u = Bn(typeof c == 'function' ? c(s) : c)
        ;(r.current = !0), o('?' + u, l)
      },
      [o, s],
    )
  return [s, a]
}
function Kl() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.',
    )
}
let ql = 0,
  Yl = () => '__' + String(++ql) + '__'
function Xl() {
  let { router: e } = Ci(zr.UseSubmit),
    { basename: t } = E.useContext(Ye),
    r = hl()
  return E.useCallback(
    function (n, s) {
      s === void 0 && (s = {}), Kl()
      let { action: o, method: a, encType: c, formData: l, body: u } = kl(n, t)
      if (s.navigate === !1) {
        let d = s.fetcherKey || Yl()
        e.fetch(d, r, s.action || o, {
          preventScrollReset: s.preventScrollReset,
          formData: l,
          body: u,
          formMethod: s.method || a,
          formEncType: s.encType || c,
          unstable_flushSync: s.unstable_flushSync,
        })
      } else
        e.navigate(s.action || o, {
          preventScrollReset: s.preventScrollReset,
          formData: l,
          body: u,
          formMethod: s.method || a,
          formEncType: s.encType || c,
          replace: s.replace,
          state: s.state,
          fromRouteId: r,
          unstable_flushSync: s.unstable_flushSync,
          unstable_viewTransition: s.unstable_viewTransition,
        })
    },
    [e, t, r],
  )
}
function Zl(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { basename: n } = E.useContext(Ye),
    s = E.useContext(tt)
  s || se(!1, 'useFormAction must be used inside a RouteContext')
  let [o] = s.matches.slice(-1),
    a = mt({}, Nr(e || '.', { relative: r })),
    c = yt()
  if (e == null) {
    a.search = c.search
    let l = new URLSearchParams(a.search)
    l.has('index') && l.get('index') === '' && (l.delete('index'), (a.search = l.toString() ? '?' + l.toString() : ''))
  }
  return (
    (!e || e === '.') && o.route.index && (a.search = a.search ? a.search.replace(/^\?/, '?index&') : '?index'),
    n !== '/' && (a.pathname = a.pathname === '/' ? n : Qe([n, a.pathname])),
    ft(a)
  )
}
function Jl(e, t) {
  t === void 0 && (t = {})
  let r = E.useContext(as)
  r == null &&
    se(
      !1,
      "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
    )
  let { basename: n } = Ci(zr.useViewTransitionState),
    s = Nr(e, { relative: t.relative })
  if (!r.isTransitioning) return !1
  let o = et(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    a = et(r.nextLocation.pathname, n) || r.nextLocation.pathname
  return In(s.pathname, a) != null || In(s.pathname, o) != null
}
const Pe = {
    AUTH: '/',
    HOME: '/home',
    DASHBOARD: '/dashboard',
    ABOUT: '/about',
    LOG_IN: '/login',
    SIGN_UP: '/signup',
    CARD_DETAIL: '/product',
    ORDER_DETAIL: '/order',
    CART_LIST: '/cart',
    USER_DETAIL: '/user',
    CHECKOUT: '/checkout',
    SEARCH: '/search',
    ORIGIN_CART_DETAIL: '/origin-cart-detail',
  },
  Ql = () =>
    i.jsxDEV(
      'section',
      {
        className: 'animate-fade-left',
        children: i.jsxDEV(
          'img',
          {
            className: 'w-full',
            src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/headerHome.png',
            alt: '',
          },
          void 0,
          !1,
          {
            fileName:
              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/HeaderHomeComponent/index.tsx',
            lineNumber: 4,
            columnNumber: 7,
          },
          globalThis,
        ),
      },
      void 0,
      !1,
      {
        fileName:
          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/HeaderHomeComponent/index.tsx',
        lineNumber: 3,
        columnNumber: 5,
      },
      globalThis,
    ),
  Zt = () => {
    const e = Xe()
    return i.jsxDEV(
      'div',
      {
        onClick: () => e('/product'),
        className:
          'md:w-[20rem] lg:w-[14.75rem] w-[24rem] flex flex-col items-center  hover:shadow-2xl hover:cursor-pointer mb-4 item-content-hidden item',
        children: [
          i.jsxDEV(
            'div',
            {
              className: 'w-full h-[23.5rem] bg-gray-300',
              children: i.jsxDEV(
                'img',
                { src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/image-test.png', alt: '' },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
                  lineNumber: 11,
                  columnNumber: 9,
                },
                globalThis,
              ),
            },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
              lineNumber: 10,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            { className: 'px-4 py-2 text-xl text-center', children: 'Tên sách - Tên tác giả' },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
              lineNumber: 13,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            { className: 'text-[#4848A4] font-medium py-4', children: '188.000d' },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
              lineNumber: 14,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
        lineNumber: 6,
        columnNumber: 5,
      },
      globalThis,
    )
  },
  ec = () => {
    const [e, t] = X.useState(['a'])
    return (
      X.useEffect(() => {
        const r = new IntersectionObserver((o) => {
            console.log(o),
              o.forEach((a) => {
                a.isIntersecting
                  ? a.target.classList.add('item-content-show')
                  : a.target.classList.remove('item-content-show')
              })
          }),
          n = document.querySelectorAll('.item-content-hidden'),
          s = document.querySelectorAll('.item-content-hidden-right')
        n.forEach((o) => r.observe(o)), s.forEach((o) => r.observe(o))
      }, [e]),
      i.jsxDEV(
        'div',
        {
          className: 'container flex flex-col w-full mx-auto',
          children: [
            i.jsxDEV(
              'div',
              {
                className: 'py-12',
                children: i.jsxDEV(
                  'p',
                  { className: 'text-2xl', children: 'Sách mới ra' },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
                    lineNumber: 39,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              },
              void 0,
              !1,
              {
                fileName:
                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
                lineNumber: 38,
                columnNumber: 7,
              },
              globalThis,
            ),
            e.map((r, n) =>
              i.jsxDEV(
                'div',
                {
                  className: 'container flex flex-row flex-wrap justify-around px-8 mx-auto ',
                  children: [
                    i.jsxDEV(
                      Zt,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
                        lineNumber: 44,
                        columnNumber: 13,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      Zt,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
                        lineNumber: 45,
                        columnNumber: 13,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      Zt,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
                        lineNumber: 46,
                        columnNumber: 13,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      Zt,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
                        lineNumber: 47,
                        columnNumber: 13,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      Zt,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
                        lineNumber: 48,
                        columnNumber: 13,
                      },
                      globalThis,
                    ),
                  ],
                },
                `${r} + ${n}`,
                !0,
                {
                  fileName:
                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
                  lineNumber: 43,
                  columnNumber: 11,
                },
                globalThis,
              ),
            ),
            i.jsxDEV(
              'div',
              {
                className: 'flex justify-center w-full py-8',
                children: i.jsxDEV(
                  'button',
                  {
                    onClick: (r) => {
                      r.preventDefault(), t((n) => [...n, 'a'])
                    },
                    className: 'py-2 px-7 font-medium border-[3px] border-solid bg-gray-300 border-gray-500',
                    children: 'Xem thêm',
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
                    lineNumber: 53,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              },
              void 0,
              !1,
              {
                fileName:
                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
                lineNumber: 52,
                columnNumber: 7,
              },
              globalThis,
            ),
          ],
        },
        void 0,
        !0,
        {
          fileName:
            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/NewBookHomeComponent/index.tsx',
          lineNumber: 37,
          columnNumber: 5,
        },
        globalThis,
      )
    )
  },
  Jt = () => {
    const e = Xe()
    return i.jsxDEV(
      'div',
      {
        onClick: () => e('/product'),
        className:
          'md:w-[20rem] lg:w-[14.75rem] w-[24rem] flex flex-col items-center hover:shadow-2xl hover:cursor-pointer mb-4 item-content-hidden-right item',
        children: [
          i.jsxDEV(
            'div',
            {
              className: 'w-full h-[23.5rem] bg-gray-300',
              children: i.jsxDEV(
                'img',
                { src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/image-test-2.png', alt: '' },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
                  lineNumber: 11,
                  columnNumber: 9,
                },
                globalThis,
              ),
            },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
              lineNumber: 10,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            { className: 'px-4 py-2 text-xl text-center', children: 'Tên sách - Tên tác giả' },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
              lineNumber: 13,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            { className: 'text-[#4848A4] font-medium py-4', children: '188.000d' },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
              lineNumber: 14,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
        lineNumber: 6,
        columnNumber: 5,
      },
      globalThis,
    )
  },
  tc = () => {
    const [e, t] = X.useState(['a'])
    return (
      X.useEffect(() => {
        const r = new IntersectionObserver((o) => {
            console.log(o),
              o.forEach((a) => {
                a.isIntersecting
                  ? a.target.classList.add('item-content-show')
                  : a.target.classList.remove('item-content-show')
              })
          }),
          n = document.querySelectorAll('.item-content-hidden'),
          s = document.querySelectorAll('.item-content-hidden-right')
        n.forEach((o) => r.observe(o)), s.forEach((o) => r.observe(o))
      }, [e]),
      i.jsxDEV(
        'div',
        {
          className: 'container flex flex-col w-full mx-auto',
          children: [
            i.jsxDEV(
              'div',
              {
                className: 'py-12',
                children: i.jsxDEV(
                  'p',
                  { className: 'text-2xl', children: 'Sách bán chạy' },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
                    lineNumber: 39,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              },
              void 0,
              !1,
              {
                fileName:
                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
                lineNumber: 38,
                columnNumber: 7,
              },
              globalThis,
            ),
            e.map((r, n) =>
              i.jsxDEV(
                'div',
                {
                  className: 'container flex flex-row flex-wrap justify-around px-8 mx-auto ',
                  children: [
                    i.jsxDEV(
                      Jt,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
                        lineNumber: 44,
                        columnNumber: 13,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      Jt,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
                        lineNumber: 45,
                        columnNumber: 13,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      Jt,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
                        lineNumber: 46,
                        columnNumber: 13,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      Jt,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
                        lineNumber: 47,
                        columnNumber: 13,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      Jt,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
                        lineNumber: 48,
                        columnNumber: 13,
                      },
                      globalThis,
                    ),
                  ],
                },
                `${r} + ${n}`,
                !0,
                {
                  fileName:
                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
                  lineNumber: 43,
                  columnNumber: 11,
                },
                globalThis,
              ),
            ),
            i.jsxDEV(
              'div',
              {
                className: 'flex justify-center w-full py-8',
                children: i.jsxDEV(
                  'button',
                  {
                    onClick: (r) => {
                      r.preventDefault(), t((n) => [...n, 'a'])
                    },
                    className: 'py-2 px-7 font-medium border-[3px] border-solid bg-gray-300 border-gray-500',
                    children: 'Xem thêm',
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
                    lineNumber: 53,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              },
              void 0,
              !1,
              {
                fileName:
                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
                lineNumber: 52,
                columnNumber: 7,
              },
              globalThis,
            ),
          ],
        },
        void 0,
        !0,
        {
          fileName:
            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/BestSellerComponent/index.tsx',
          lineNumber: 37,
          columnNumber: 5,
        },
        globalThis,
      )
    )
  }
var Vi = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  Bs = X.createContext && X.createContext(Vi),
  dt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (dt =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
              t = arguments[r]
              for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
            }
            return e
          }),
        dt.apply(this, arguments)
      )
    },
  rc =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
          t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
      return r
    }
function Ai(e) {
  return (
    e &&
    e.map(function (t, r) {
      return X.createElement(t.tag, dt({ key: r }, t.attr), Ai(t.child))
    })
  )
}
function Me(e) {
  return function (t) {
    return X.createElement(nc, dt({ attr: dt({}, e.attr) }, t), Ai(e.child))
  }
}
function nc(e) {
  var t = function (r) {
    var n = e.attr,
      s = e.size,
      o = e.title,
      a = rc(e, ['attr', 'size', 'title']),
      c = s || r.size || '1em',
      l
    return (
      r.className && (l = r.className),
      e.className && (l = (l ? l + ' ' : '') + e.className),
      X.createElement(
        'svg',
        dt({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, r.attr, n, a, {
          className: l,
          style: dt(dt({ color: e.color || r.color }, r.style), e.style),
          height: c,
          width: c,
          xmlns: 'http://www.w3.org/2000/svg',
        }),
        o && X.createElement('title', null, o),
        e.children,
      )
    )
  }
  return Bs !== void 0
    ? X.createElement(Bs.Consumer, null, function (r) {
        return t(r)
      })
    : t(Vi)
}
function ji(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 576 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z',
        },
      },
    ],
  })(e)
}
function Fs(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z',
        },
      },
    ],
  })(e)
}
function Gb(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z',
        },
      },
    ],
  })(e)
}
function sc(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 576 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z',
        },
      },
    ],
  })(e)
}
function Wi(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M448 64H64a64 64 0 0 0-64 64v256a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64zM160 368H80a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h80zm128-16a16 16 0 0 1-16 16h-80v-48h80a16 16 0 0 1 16 16zm160-128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h320a32 32 0 0 1 32 32z',
        },
      },
    ],
  })(e)
}
function Kb(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z',
        },
      },
    ],
  })(e)
}
function qb(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 576 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z',
        },
      },
    ],
  })(e)
}
function Li(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M624 224h-16v-64c0-17.67-14.33-32-32-32h-73.6L419.22 24.02A64.025 64.025 0 0 0 369.24 0H256c-17.67 0-32 14.33-32 32v96H48c-8.84 0-16 7.16-16 16v80H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16.72c29.21-38.65 75.1-64 127.28-64s98.07 25.35 127.28 64h65.45c29.21-38.65 75.1-64 127.28-64s98.07 25.35 127.28 64H624c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-336-96V64h81.24l51.2 64H288zm304 224h-5.2c-2.2-7.33-5.07-14.28-8.65-20.89l3.67-3.67c6.25-6.25 6.25-16.38 0-22.63l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-3.67 3.67A110.85 110.85 0 0 0 512 277.2V272c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v5.2c-7.33 2.2-14.28 5.07-20.89 8.65l-3.67-3.67c-6.25-6.25-16.38-6.25-22.63 0l-22.63 22.63c-6.25 6.25-6.25 16.38 0 22.63l3.67 3.67A110.85 110.85 0 0 0 373.2 352H368c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h5.2c2.2 7.33 5.07 14.28 8.65 20.89l-3.67 3.67c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l3.67-3.67c6.61 3.57 13.57 6.45 20.9 8.65v5.2c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-5.2c7.33-2.2 14.28-5.07 20.9-8.65l3.67 3.67c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.25-6.25 6.25-16.38 0-22.63l-3.67-3.67a110.85 110.85 0 0 0 8.65-20.89h5.2c8.84 0 16-7.16 16-16v-32c-.02-8.84-7.18-16-16.02-16zm-112 80c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm-208-80h-5.2c-2.2-7.33-5.07-14.28-8.65-20.89l3.67-3.67c6.25-6.25 6.25-16.38 0-22.63l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-3.67 3.67A110.85 110.85 0 0 0 192 277.2V272c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v5.2c-7.33 2.2-14.28 5.07-20.89 8.65l-3.67-3.67c-6.25-6.25-16.38-6.25-22.63 0L58.18 304.8c-6.25 6.25-6.25 16.38 0 22.63l3.67 3.67a110.85 110.85 0 0 0-8.65 20.89H48c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h5.2c2.2 7.33 5.07 14.28 8.65 20.89l-3.67 3.67c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l3.67-3.67c6.61 3.57 13.57 6.45 20.9 8.65v5.2c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-5.2c7.33-2.2 14.28-5.07 20.9-8.65l3.67 3.67c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.25-6.25 6.25-16.38 0-22.63l-3.67-3.67a110.85 110.85 0 0 0 8.65-20.89h5.2c8.84 0 16-7.16 16-16v-32C288 359.16 280.84 352 272 352zm-112 80c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48z',
        },
      },
    ],
  })(e)
}
function ic(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z',
        },
      },
    ],
  })(e)
}
const oc = () =>
    i.jsxDEV(
      'div',
      {
        className: 'flex flex-col w-screen space-y-4 ',
        children: [
          i.jsxDEV(
            'div',
            { className: 'w-full py-8 mx-16 text-4xl', children: 'DANH MỤC SẢN PHẨM' },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
              lineNumber: 5,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className: 'flex flex-row flex-wrap justify-around px-20 2xl:px-48',
              children: [
                i.jsxDEV(
                  'div',
                  {
                    className:
                      'py-2 rounded-lg border-2 border-solid 2xl:mt-0 mt-4 border-[#4848A4] h-40 w-48 flex flex-col items-center justify-around item-content-hidden item ',
                    children: [
                      i.jsxDEV(
                        'div',
                        {
                          className: 'w-12 ',
                          children: i.jsxDEV(
                            'img',
                            {
                              src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/image-test-2.png',
                              alt: '',
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                              lineNumber: 9,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                          lineNumber: 8,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'text-[#4848A4]', children: 'BOX SET' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                          lineNumber: 11,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName:
                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                    lineNumber: 7,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className:
                      'py-2 rounded-lg border-2 border-solid 2xl:mt-0 mt-4 border-[#4848A4] h-40 w-48 flex flex-col items-center item-content-hidden justify-around item',
                    children: [
                      i.jsxDEV(
                        'div',
                        {
                          className: 'w-12 ',
                          children: i.jsxDEV(
                            'img',
                            {
                              src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/image-test-2.png',
                              alt: '',
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                              lineNumber: 15,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                          lineNumber: 14,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'text-[#4848A4]', children: 'BOX SET' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                          lineNumber: 17,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName:
                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                    lineNumber: 13,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className:
                      'py-2 rounded-lg border-2 border-solid 2xl:mt-0 mt-4 border-[#4848A4] h-40 w-48 flex flex-col items-center item-content-hidden justify-around item',
                    children: [
                      i.jsxDEV(
                        'div',
                        {
                          className: 'w-12 ',
                          children: i.jsxDEV(
                            'img',
                            {
                              src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/image-test-2.png',
                              alt: '',
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                              lineNumber: 21,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                          lineNumber: 20,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'text-[#4848A4]', children: 'BOX SET' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                          lineNumber: 23,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName:
                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                    lineNumber: 19,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className:
                      'py-2 rounded-lg border-2 border-solid 2xl:mt-0 mt-4 border-[#4848A4] h-40 w-48 flex flex-col items-center item-content-hidden justify-around item',
                    children: [
                      i.jsxDEV(
                        'div',
                        {
                          className: 'w-12 ',
                          children: i.jsxDEV(
                            'img',
                            {
                              src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/image-test-2.png',
                              alt: '',
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                              lineNumber: 27,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                          lineNumber: 26,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'text-[#4848A4]', children: 'BOX SET' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                          lineNumber: 29,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName:
                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                    lineNumber: 25,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className:
                      'py-2 rounded-lg border-2 border-solid 2xl:mt-0 mt-4 border-[#4848A4] h-40 w-48 flex flex-col items-center item-content-hidden justify-around item',
                    children: [
                      i.jsxDEV(
                        'div',
                        {
                          className: 'w-12 ',
                          children: i.jsxDEV(
                            'img',
                            {
                              src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/image-test-2.png',
                              alt: '',
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                              lineNumber: 33,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                          lineNumber: 32,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'text-[#4848A4]', children: 'BOX SET' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                          lineNumber: 35,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName:
                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                    lineNumber: 31,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
              lineNumber: 6,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className: 'flex items-center justify-center w-full py-8',
              children: i.jsxDEV(
                'button',
                {
                  className: 'py-2 bg-[#4848A4] font-normal text-xl px-8 rounded-full text-white',
                  children: 'XEM TẤT CẢ',
                },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
                  lineNumber: 39,
                  columnNumber: 9,
                },
                globalThis,
              ),
            },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
              lineNumber: 38,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/component/ListPostComponent/index.tsx',
        lineNumber: 4,
        columnNumber: 5,
      },
      globalThis,
    ),
  zs = () =>
    i.jsxDEV(
      'article',
      {
        className: 'flex flex-col',
        children: [
          i.jsxDEV(
            Ql,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
              lineNumber: 11,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            ec,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
              lineNumber: 12,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            tc,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
              lineNumber: 13,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className: 'w-full  bg-[#4848A4] flex flex-col justify-center items-center space-y-8 py-8',
              children: [
                i.jsxDEV(
                  'p',
                  { className: 'text-4xl font-medium text-white', children: 'BOOKSTAR' },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                    lineNumber: 16,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex flex-row space-x-36',
                    children: [
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-col items-center space-y-4 w-52',
                          children: [
                            i.jsxDEV(
                              Li,
                              { size: 120, color: 'white' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                                lineNumber: 19,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'p',
                              { className: 'text-2xl text-center text-white', children: 'Vân chuyển nhanh chóng' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                                lineNumber: 20,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                          lineNumber: 18,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-col items-center space-y-4 w-52',
                          children: [
                            i.jsxDEV(
                              Wi,
                              { size: 120, color: 'white' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                                lineNumber: 23,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'p',
                              { className: 'text-2xl text-center text-white', children: 'Khuyến mãi hấp dẫn' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                                lineNumber: 24,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                          lineNumber: 22,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-col items-center space-y-4 w-52',
                          children: [
                            i.jsxDEV(
                              ji,
                              { size: 120, color: 'white' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                                lineNumber: 27,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'p',
                              { className: 'text-2xl text-center text-white', children: 'Sách truyện phong phú' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                                lineNumber: 28,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                          lineNumber: 26,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                    lineNumber: 17,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
              lineNumber: 15,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            oc,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
              lineNumber: 32,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              style: {
                backgroundImage: 'url(https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/header-expect.png)',
              },
              className:
                'w-screen h-[27rem] flex flex-col justify-center items-center space-y-4 bg-[#4848A4] text-white',
              children: i.jsxDEV(
                'div',
                {
                  className:
                    'w-screen h-full flex flex-col justify-center items-center space-y-4 bg-[#4848A4]/60 text-white',
                  children: [
                    i.jsxDEV(
                      'p',
                      { className: 'mt-8 text-6xl font-medium', children: 'HÃY ĐẾN CỬA HÀNG CỦA CHÚNG TÔI' },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                        lineNumber: 39,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      'p',
                      {
                        className: 'text-2xl font-medium',
                        children: 'Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh',
                      },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                        lineNumber: 40,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      'div',
                      {
                        className: 'flex items-center justify-center py-4',
                        children: i.jsxDEV(
                          'button',
                          {
                            className:
                              'w-[15.75rem] py-2 border-[2px] border-solid border-white rounded-3xl text-white font-medium',
                            children: i.jsxDEV(
                              'a',
                              { href: 'https://oven.sh/', target: '_blank', children: 'Tìm hiểu thêm' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                                lineNumber: 43,
                                columnNumber: 15,
                              },
                              globalThis,
                            ),
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                            lineNumber: 42,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                      },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                        lineNumber: 41,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                  ],
                },
                void 0,
                !0,
                {
                  fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
                  lineNumber: 38,
                  columnNumber: 9,
                },
                globalThis,
              ),
            },
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
              lineNumber: 34,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Home/index.tsx',
        lineNumber: 10,
        columnNumber: 5,
      },
      globalThis,
    )
function Yb(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z',
        },
      },
    ],
  })(e)
}
function ac(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223 149.5c48.6-44.3 123-50.8 179.3-11.7c60.8 42.4 78.9 123.2 44.2 186.9L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3L223 149.5zm223.1 298L83.1 161.5c-11 14.4-20.5 28.7-28.4 42.2l339 265.7c18.7-5.5 36.2-13 52.6-21.8zM34.5 268.3c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c3.1 0 6.1-.1 9.2-.2L33.1 247.8c-1.8 6.8-1.3 14 1.4 20.5z',
        },
      },
    ],
  })(e)
}
function lc(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z',
        },
      },
    ],
  })(e)
}
function cc(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [{ tag: 'path', attr: { fill: 'none', strokeWidth: '2', d: 'M2,12 L22,12' } }],
  })(e)
}
var Mi = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ;(function (e) {
  ;(function () {
    var t = {}.hasOwnProperty
    function r() {
      for (var n = [], s = 0; s < arguments.length; s++) {
        var o = arguments[s]
        if (o) {
          var a = typeof o
          if (a === 'string' || a === 'number') n.push(o)
          else if (Array.isArray(o)) {
            if (o.length) {
              var c = r.apply(null, o)
              c && n.push(c)
            }
          } else if (a === 'object') {
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes('[native code]')) {
              n.push(o.toString())
              continue
            }
            for (var l in o) t.call(o, l) && o[l] && n.push(l)
          }
        }
      }
      return n.join(' ')
    }
    e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r)
  })()
})(Mi)
var uc = Mi.exports
const dc = aa(uc),
  fc = 'border-[1px] border-solid font-medium border-[#4848A4] bg-white text-[#4848A4]',
  mc = 'bg-[#4848A4] text-white font-medium',
  Hs = (e) => {
    const {
      width: t = '240px',
      height: r = '40px',
      padding_x: n,
      padding_y: s,
      variant: o,
      rounded: a = 'md',
      children: c,
      onClick: l,
    } = e
    return i.jsxDEV(
      'button',
      {
        onClick: l,
        style: { width: t, height: r, paddingLeft: n, paddingRight: n, paddingTop: s, paddingBottom: s },
        className: dc(
          { [`${fc}`]: o === 'outlined', [`${mc}`]: o === 'contained' },
          { 'rounded-md': a === 'md', 'rounded-lg': a === 'lg', 'rounded-xl': a === 'xl', 'rounded-2xl': a === '2xl' },
        ),
        children: c || 'Button',
      },
      void 0,
      !1,
      {
        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/components/atoms/button/index.tsx',
        lineNumber: 17,
        columnNumber: 5,
      },
      globalThis,
    )
  },
  hc = () =>
    i.jsxDEV(
      'section',
      {
        className: 'inline-flex items-center space-x-2',
        children: [
          i.jsxDEV(
            'p',
            { className: 'font-bold text-[#4848A4] text-xl', children: 'Giao hàng đến:' },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 17,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'p',
            { className: 'text-xl text-[#666666]', children: 'Q1, P. Ben nghe' },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 18,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
        lineNumber: 16,
        columnNumber: 5,
      },
      globalThis,
    ),
  vc = () =>
    i.jsxDEV(
      'section',
      {
        className: 'flex flex-col',
        children: [
          i.jsxDEV(
            'p',
            { className: 'text-xl text-[#666666]', children: 'Giao Thứ Tư' },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 25,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'p',
            { className: 'text-xl text-[#666666]', children: 'Trước 19h, 15/11: 23.000₫' },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 26,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
        lineNumber: 24,
        columnNumber: 5,
      },
      globalThis,
    ),
  bc = (e) => {
    const { quantity: t = 1 } = e
    return i.jsxDEV(
      'section',
      {
        className: 'flex flex-row items-center justify-start space-x-4 w-full p-[10px]',
        children: [
          i.jsxDEV(
            'p',
            { className: 'font-bold', children: 'Số Lượng' },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 34,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className:
                'flex flex-row border-[1px] border-solid border-gray-400 justify-center items-center space-x-4 py-1 px-4 rounded-lg',
              children: [
                i.jsxDEV(
                  cc,
                  {},
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
                    lineNumber: 36,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'p',
                  { children: t },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
                    lineNumber: 37,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  lc,
                  {},
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
                    lineNumber: 38,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 35,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
        lineNumber: 33,
        columnNumber: 5,
      },
      globalThis,
    )
  },
  xc = (e) => {
    const { price: t = 1e4 } = e
    return i.jsxDEV(
      'section',
      {
        className: 'flex flex-row items-center justify-start space-x-4 w-full p-[10px]',
        children: [
          i.jsxDEV(
            'p',
            { className: 'font-bold text-[#4848A4]', children: 'Tạm Tính' },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 47,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'p',
            { className: '', children: [t, 'đ'] },
            void 0,
            !0,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 48,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
        lineNumber: 46,
        columnNumber: 5,
      },
      globalThis,
    )
  },
  pc = () => {
    const e = Xe()
    return i.jsxDEV(
      'section',
      {
        className: 'flex flex-row items-center justify-center space-x-4 w-full p-[10px]',
        children: [
          i.jsxDEV(
            Hs,
            {
              onClick: (t) => {
                t.preventDefault(), e('/checkout')
              },
              variant: 'contained',
              width: '240px',
              height: '40px',
              children: 'Mua Ngay',
            },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 56,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            Hs,
            {
              onClick: (t) => {
                t.preventDefault(), e('/cart')
              },
              width: '240px',
              height: '40px',
              variant: 'outlined',
              rounded: 'md',
              children: 'Thêm vào giỏ hàng',
            },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 67,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
        lineNumber: 55,
        columnNumber: 5,
      },
      globalThis,
    )
  },
  Nc = () =>
    i.jsxDEV(
      'article',
      {
        className: 'w-[640px] flex flex-col border-[1px] border-solid border-[#4848A4] rounded-lg p-4 space-y-4',
        children: [
          i.jsxDEV(
            hc,
            {},
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 85,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            { className: 'w-full border-solid border-b-[1px] border-[#666666]' },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 86,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            vc,
            {},
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 87,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            bc,
            { quantity: 1 },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 88,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            xc,
            { price: 1e5 },
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 89,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            pc,
            {},
            void 0,
            !1,
            {
              fileName:
                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
              lineNumber: 90,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/components/InfoCartDetailComponent/index.tsx',
        lineNumber: 84,
        columnNumber: 5,
      },
      globalThis,
    ),
  gc = () => {
    const [e, t] = X.useState(!1)
    return i.jsxDEV(
      'div',
      {
        className: 'container flex flex-row flex-wrap justify-center p-10 mx-auto ',
        children: [
          i.jsxDEV(
            'div',
            {
              className: 'flex flex-col p-5 border-[1px] border-[#4848A4] rounded-lg h-fit',
              children: i.jsxDEV(
                'div',
                {
                  className: 'flex flex-col items-center p-5 space-y-5',
                  children: [
                    i.jsxDEV(
                      'div',
                      {
                        className:
                          '2xl:h-[37rem] 2xl:w-[37rem] h-[32rem] w-[32rem] aspect-square bg-gray-300 border-[1px] border-[#4848A4] rounded-lg',
                        children: i.jsxDEV(
                          'img',
                          {
                            src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png',
                            className: 'w-full aspect-square',
                            alt: '',
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                            lineNumber: 11,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                      },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                        lineNumber: 10,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      'div',
                      {
                        className: 'flex flex-row justify-between 2xl:w-[37rem] w-[32rem] h-[6.25rem]',
                        children: [
                          i.jsxDEV(
                            'div',
                            {
                              className:
                                '2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border-[1px] border-[#4848A4] rounded-lg overflow-hidden',
                              children: i.jsxDEV(
                                'img',
                                {
                                  src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png',
                                  alt: '',
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                  lineNumber: 19,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                              lineNumber: 18,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            'div',
                            {
                              className:
                                '2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border-[1px] border-[#4848A4] rounded-lg overflow-hidden',
                              children: i.jsxDEV(
                                'img',
                                {
                                  src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png',
                                  alt: '',
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                  lineNumber: 22,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                              lineNumber: 21,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            'div',
                            {
                              className:
                                '2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border-[1px] border-[#4848A4] rounded-lg overflow-hidden',
                              children: i.jsxDEV(
                                'img',
                                {
                                  src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png',
                                  alt: '',
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                  lineNumber: 25,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                              lineNumber: 24,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            'div',
                            {
                              className:
                                '2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border-[1px] border-[#4848A4] rounded-lg overflow-hidden',
                              children: i.jsxDEV(
                                'img',
                                {
                                  src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png',
                                  alt: '',
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                  lineNumber: 28,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                              lineNumber: 27,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            'div',
                            {
                              className:
                                '2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border-[1px] border-[#4848A4] rounded-lg overflow-hidden',
                              children: i.jsxDEV(
                                'img',
                                {
                                  src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png',
                                  alt: '',
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                  lineNumber: 31,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                              lineNumber: 30,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                        lineNumber: 17,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      'div',
                      {
                        className: 'flex flex-col space-y-5 text-xl w-[28.625rem] px-5 font-light',
                        children: [
                          i.jsxDEV(
                            'p',
                            { className: 'text-xl text-[#4848A4] font-bold', children: 'Đặc điểm nổi bật' },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                              lineNumber: 35,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            'div',
                            {
                              className: 'flex items-center space-x-3',
                              children: [
                                i.jsxDEV(
                                  'div',
                                  { className: 'border-4 rounded-full h-0 border-solid border-[#4848A4]' },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                    lineNumber: 37,
                                    columnNumber: 15,
                                  },
                                  globalThis,
                                ),
                                i.jsxDEV(
                                  'p',
                                  { children: 'Câu chuyện tình yêu sâu sắc và tinh tế.' },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                    lineNumber: 38,
                                    columnNumber: 15,
                                  },
                                  globalThis,
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                              lineNumber: 36,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            'div',
                            {
                              className: 'flex items-center space-x-3',
                              children: [
                                i.jsxDEV(
                                  'div',
                                  { className: 'border-4 rounded-full h-0 border-solid border-[#4848A4]' },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                    lineNumber: 41,
                                    columnNumber: 15,
                                  },
                                  globalThis,
                                ),
                                i.jsxDEV(
                                  'p',
                                  { children: 'Ngôn ngữ hài hước và lãng mạn.' },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                    lineNumber: 42,
                                    columnNumber: 15,
                                  },
                                  globalThis,
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                              lineNumber: 40,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            'div',
                            {
                              className: 'flex items-center space-x-3',
                              children: [
                                i.jsxDEV(
                                  'div',
                                  { className: 'border-4 rounded-full h-0 border-solid border-[#4848A4]' },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                    lineNumber: 45,
                                    columnNumber: 15,
                                  },
                                  globalThis,
                                ),
                                i.jsxDEV(
                                  'p',
                                  { children: 'Được ủng hộ nhiệt tình và nằm trong top 10 Kono Light novel ga Sugoi.' },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                    lineNumber: 46,
                                    columnNumber: 15,
                                  },
                                  globalThis,
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                              lineNumber: 44,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                        lineNumber: 34,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                  ],
                },
                void 0,
                !0,
                {
                  fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                  lineNumber: 9,
                  columnNumber: 9,
                },
                globalThis,
              ),
            },
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
              lineNumber: 8,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className: 'flex flex-col px-10 mt-6 space-y-5 2xl:mt-0',
              children: [
                i.jsxDEV(
                  'div',
                  {
                    className:
                      'w-[640px] flex flex-col border-[1px] border-solid border-[#4848A4] rounded-lg p-4 space-y-4',
                    children: [
                      i.jsxDEV(
                        'p',
                        {
                          className: 'text-[32px] font-bold text-[#4848A4]',
                          children: 'Thiên sứ nhà bên - Tập 7 - Bản Giới Hạn',
                        },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                          lineNumber: 54,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'p',
                        { className: 'text-4xl font-bold text-[#FF424E]', children: '90.000đ' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                          lineNumber: 55,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                    lineNumber: 53,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  Nc,
                  {},
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                    lineNumber: 58,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className:
                      'w-[640px] flex flex-col border-[1px] border-solid border-[#4848A4] rounded-lg p-4 space-y-4',
                    children: [
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-col w-full space-y-2 text-xl font-bold text-[#4848A4]',
                          children: [
                            i.jsxDEV(
                              'p',
                              { children: 'Thông tin chi tiết' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                lineNumber: 62,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'div',
                              { className: 'w-full border-b-[1px] border-black border-solid h-[1px]', content: '' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                lineNumber: 63,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                          lineNumber: 61,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-row space-x-5',
                          children: [
                            i.jsxDEV(
                              'div',
                              {
                                className: 'flex flex-col text-xl font-light text-[#666666]',
                                children: [
                                  i.jsxDEV(
                                    'p',
                                    { children: 'Hàng chính hãng' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                      lineNumber: 67,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                  i.jsxDEV(
                                    'p',
                                    { children: 'Công ty phát hành' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                      lineNumber: 68,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                  i.jsxDEV(
                                    'p',
                                    { children: 'Số trang' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                      lineNumber: 69,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                  i.jsxDEV(
                                    'p',
                                    { children: 'Nhà xuất bản' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                      lineNumber: 70,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                lineNumber: 66,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'div',
                              {
                                className: 'flex flex-col text-xl font-light text-black',
                                children: [
                                  i.jsxDEV(
                                    'p',
                                    { children: 'Có' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                      lineNumber: 73,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                  i.jsxDEV(
                                    'p',
                                    { children: 'Nhà Xuất Bản Kim Đồng' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                      lineNumber: 74,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                  i.jsxDEV(
                                    'p',
                                    { children: 'Có' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                      lineNumber: 75,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                  i.jsxDEV(
                                    'p',
                                    { children: 'Kim Đồng' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                      lineNumber: 76,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                lineNumber: 72,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                          lineNumber: 65,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                    lineNumber: 60,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className:
                      'w-[640px] flex flex-col border-[1px] border-solid border-[#4848A4] rounded-lg p-4 space-y-4',
                    children: [
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-col w-full space-y-2 text-xl font-bold text-[#4848A4]',
                          children: [
                            i.jsxDEV(
                              'p',
                              { className: 'text-2xl font-bold text-[#4848A4]', children: 'Mô tả sản phẩm' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                lineNumber: 83,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'div',
                              { className: 'w-full border-b-[1px] border-black border-solid h-[1px]', content: '' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                lineNumber: 84,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                          lineNumber: 82,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'p',
                        {
                          className: `text-xl text-justify font-light ${e ? 'animate-fade-down' : 'line-clamp-3'}`,
                          children:
                            'Nhờ có Mahiru luôn ở bên, Amane đã dũng cảm đối diện với những hồi ức đau khổ trong quá khứ. Trong chuyến về thăm nhà bố mẹ Amane, khi cảm nhận được sự chăm sóc, quan tâm và tình cảm ấm áp từ gia đình, Mahiru thấy rất hạnh phúc. Ngắm nhìn cô với nụ cười chan chứayêu thương, Amane một lần nữa củng cố quyết tâm sẽ luôn ở bên chăm sóc cô.Vào những ngày cuối mùa hè, cả hai đã cùng mặc yukata đến lễ hội . Dù thật chậm rãi, nhưng cả Amane và Mahiru đều dần biết cách thể hiện cảm xúc của mình một cách thẳng thắn hơn, khiến những kí ức mùa hè của họ càng trở nên sâu sắc.Đây là câu chuyện tình ngọt ngào với cô gái nhà bên tuy lạnh lùng nhưng thật đáng yêu đã được ủng hộ nhiệt tình trên trang Shousetsuka ni Narou.*THIÊN SỨ NHÀ BÊN được xem là cú hit của dòng Light Novel rom-com tại thị trường Nhật Bản, với nội dung hài hước - lãng mạn rất được yêu thích. Tác phẩm nằm top 10 Kono Light novel ga Sugoi năm 2021, đã bán ra 1,5 triệu bản, được chuyển thể thành manga và anime.Số tập: 8+ (on-going) Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....',
                        },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                          lineNumber: 86,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      !e &&
                        i.jsxDEV(
                          'div',
                          {
                            className: 'flex justify-center w-full',
                            children: i.jsxDEV(
                              'p',
                              {
                                className: 'hover:cursor-pointer text-[#4848A4]',
                                onClick: () => t(!e),
                                children: 'Xem Thêm',
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                lineNumber: 102,
                                columnNumber: 15,
                              },
                              globalThis,
                            ),
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                            lineNumber: 101,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                      e &&
                        i.jsxDEV(
                          'div',
                          {
                            className: 'flex justify-center w-full',
                            children: i.jsxDEV(
                              'p',
                              {
                                className: 'hover:cursor-pointer text-[#4848A4]',
                                onClick: () => t(!e),
                                children: 'Ít lại',
                              },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                                lineNumber: 109,
                                columnNumber: 15,
                              },
                              globalThis,
                            ),
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                            lineNumber: 108,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
                    lineNumber: 81,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
              lineNumber: 52,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CardDetail/index.tsx',
        lineNumber: 7,
        columnNumber: 5,
      },
      globalThis,
    )
  },
  wc = () =>
    i.jsxDEV(
      'div',
      {
        className: 'container flex flex-col items-center justify-center mx-auto mt-10 space-y-10 ',
        children: [
          i.jsxDEV(
            'div',
            {
              className:
                'flex flex-col p-10 space-y-5 xl:w-[1280px] border-[1px] border-solid border-[#4848A4] rounded-xl',
              children: [
                i.jsxDEV(
                  'div',
                  { className: 'text-4xl font-bold text-[#4848A4]', children: 'Về chúng mình' },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                    lineNumber: 7,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex flex-col p-10 space-y-5',
                    children: [
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-row items-center text-2xl',
                          children: [
                            i.jsxDEV(
                              'div',
                              { className: 'w-1/2 font-bold grow text-[#4848A4]', children: 'Văn phòng' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                lineNumber: 10,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'div',
                              {
                                className: 'w-1/2 text-xl font-light text-zinc-500',
                                children: '17/183 Dang Tien Dong, Trung Liet, Dong Da, Ha Noi',
                              },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                lineNumber: 11,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                          lineNumber: 9,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-full border-[1px] border-solid border-gray-500' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                          lineNumber: 15,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-row items-center justify-between text-2xl',
                          children: [
                            i.jsxDEV(
                              'div',
                              { className: 'w-1/2 font-bold grow text-[#4848A4]', children: 'Thành lập năm' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                lineNumber: 18,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'div',
                              { className: 'w-1/2 text-xl font-light text-zinc-500', children: '1969' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                lineNumber: 19,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                          lineNumber: 17,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-full border-[1px] border-solid border-gray-500' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                          lineNumber: 21,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-row items-center justify-between text-2xl',
                          children: [
                            i.jsxDEV(
                              'div',
                              { className: 'w-1/2 font-bold grow text-[#4848A4]', children: 'Lợi nhuận' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                lineNumber: 24,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'div',
                              { className: 'w-1/2 text-xl font-light text-zinc-500', children: '69.000.000đ' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                lineNumber: 25,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                          lineNumber: 23,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-full border-[1px] border-solid border-gray-500' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                          lineNumber: 27,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-row items-center justify-between text-2xl',
                          children: [
                            i.jsxDEV(
                              'div',
                              { className: 'w-1/2 font-bold grow text-[#4848A4]', children: 'Lãnh Đạo' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                lineNumber: 30,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'div',
                              { className: 'w-1/2 text-xl font-light text-zinc-500', children: 'Pham Minh Quang' },
                              void 0,
                              !1,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                lineNumber: 31,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                          lineNumber: 29,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                    lineNumber: 8,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
              lineNumber: 6,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className:
                'flex flex-col p-10 space-y-5 xl:w-[1280px] border-[1px] border-solid border-[#4848A4] rounded-xl',
              children: [
                i.jsxDEV(
                  'div',
                  { className: 'text-4xl font-bold text-[#4848A4]', children: 'Lịch sử' },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                    lineNumber: 36,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex flex-row pl-10 space-x-24 text-xl',
                    children: [
                      i.jsxDEV(
                        'div',
                        { className: 'text-4xl font-bold text-[#3896D6]', children: '2023' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                          lineNumber: 38,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-col w-full space-y-10',
                          children: [
                            i.jsxDEV(
                              'div',
                              {
                                className: 'flex flex-row space-x-10',
                                children: [
                                  i.jsxDEV(
                                    'div',
                                    { className: 'w-1/6', children: 'September' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                      lineNumber: 42,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                  i.jsxDEV(
                                    'div',
                                    {
                                      className: 'flex flex-col space-y-4 text-zinc-600 font-[350]',
                                      children: [
                                        i.jsxDEV(
                                          'div',
                                          {
                                            className: 'flex items-center space-x-4',
                                            children: [
                                              i.jsxDEV(
                                                'div',
                                                {
                                                  className:
                                                    'border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 45,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { children: 'Thiết kế' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 46,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                            lineNumber: 44,
                                            columnNumber: 17,
                                          },
                                          globalThis,
                                        ),
                                        i.jsxDEV(
                                          'div',
                                          {
                                            className: 'flex items-center space-x-4',
                                            children: [
                                              i.jsxDEV(
                                                'div',
                                                {
                                                  className:
                                                    'border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 49,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { children: 'Tạo công cụ' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 50,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                            lineNumber: 48,
                                            columnNumber: 17,
                                          },
                                          globalThis,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                      lineNumber: 43,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                lineNumber: 41,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'div',
                              {
                                className: 'flex flex-row w-full space-x-10',
                                children: [
                                  i.jsxDEV(
                                    'div',
                                    { className: 'w-1/6', children: 'October' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                      lineNumber: 56,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                  i.jsxDEV(
                                    'div',
                                    {
                                      className: 'flex flex-col space-y-4 text-zinc-600 font-[350]',
                                      children: [
                                        i.jsxDEV(
                                          'div',
                                          {
                                            className: 'flex items-center space-x-4',
                                            children: [
                                              i.jsxDEV(
                                                'div',
                                                {
                                                  className:
                                                    'border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 59,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { children: 'Làm form' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 60,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                            lineNumber: 58,
                                            columnNumber: 17,
                                          },
                                          globalThis,
                                        ),
                                        i.jsxDEV(
                                          'div',
                                          {
                                            className: 'flex items-center space-x-4',
                                            children: [
                                              i.jsxDEV(
                                                'div',
                                                {
                                                  className:
                                                    'border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 63,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { children: 'Gửi form' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 64,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                            lineNumber: 62,
                                            columnNumber: 17,
                                          },
                                          globalThis,
                                        ),
                                        i.jsxDEV(
                                          'div',
                                          {
                                            className: 'flex items-center space-x-4',
                                            children: [
                                              i.jsxDEV(
                                                'div',
                                                {
                                                  className:
                                                    'border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 67,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { children: 'Nhận phản hồi' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 68,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                            lineNumber: 66,
                                            columnNumber: 17,
                                          },
                                          globalThis,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                      lineNumber: 57,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                lineNumber: 55,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'div',
                              {
                                className: 'flex flex-row w-full space-x-10',
                                children: [
                                  i.jsxDEV(
                                    'div',
                                    { className: 'w-1/6', children: 'November' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                      lineNumber: 74,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                  i.jsxDEV(
                                    'div',
                                    {
                                      className: 'flex flex-col space-y-4 text-zinc-600 font-[350]',
                                      children: [
                                        i.jsxDEV(
                                          'div',
                                          {
                                            className: 'flex items-center space-x-4',
                                            children: [
                                              i.jsxDEV(
                                                'div',
                                                {
                                                  className:
                                                    'border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 77,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { children: 'Làm slide seminar' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 78,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                            lineNumber: 76,
                                            columnNumber: 17,
                                          },
                                          globalThis,
                                        ),
                                        i.jsxDEV(
                                          'div',
                                          {
                                            className: 'flex items-center space-x-4',
                                            children: [
                                              i.jsxDEV(
                                                'div',
                                                {
                                                  className:
                                                    'border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 81,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { children: 'Thiết kế trang' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 82,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                            lineNumber: 80,
                                            columnNumber: 17,
                                          },
                                          globalThis,
                                        ),
                                        i.jsxDEV(
                                          'div',
                                          {
                                            className: 'flex items-center space-x-4',
                                            children: [
                                              i.jsxDEV(
                                                'div',
                                                {
                                                  className:
                                                    'border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 85,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { children: 'Leader code' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 86,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                            lineNumber: 84,
                                            columnNumber: 17,
                                          },
                                          globalThis,
                                        ),
                                        i.jsxDEV(
                                          'div',
                                          {
                                            className: 'flex items-center space-x-4',
                                            children: [
                                              i.jsxDEV(
                                                'div',
                                                {
                                                  className:
                                                    'border-[6px] border-solid rounded-full border-[#4848A4] h-[1px]',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 89,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { children: 'Trang được tạo' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                                  lineNumber: 90,
                                                  columnNumber: 19,
                                                },
                                                globalThis,
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                            lineNumber: 88,
                                            columnNumber: 17,
                                          },
                                          globalThis,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                      lineNumber: 75,
                                      columnNumber: 15,
                                    },
                                    globalThis,
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                                lineNumber: 73,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                          lineNumber: 40,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
                    lineNumber: 37,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
              lineNumber: 35,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/About/index.tsx',
        lineNumber: 5,
        columnNumber: 5,
      },
      globalThis,
    ),
  yc = () => {
    const e = Xe()
    return i.jsxDEV(
      'div',
      {
        className: 'container flex flex-col mx-auto mt-20 space-y-5',
        children: [
          i.jsxDEV(
            'div',
            { className: 'text-[32px] font-bold', children: 'TÌNH TRẠNG ĐƠN HÀNG' },
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
              lineNumber: 8,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className: 'border-solid border-[1px] border-[#4848A4] px-6 py-12 rounded-lg flex flex-col space-y-5',
              children: [
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex flex-row space-x-32 text-xl',
                    children: [
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: 'Mã đơn hàng' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 11,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: 'Ngày mua' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 12,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: 'Người nhận' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 13,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: 'Thành tiền' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 14,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: 'Tình trạng' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 15,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                    lineNumber: 10,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  { className: 'w-full border-[0.5px] border-solid border-zinc-500' },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                    lineNumber: 17,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex flex-row items-center space-x-32 text-xl font-bold',
                    children: [
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: '00001234' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 20,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: '01/01/2024' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 21,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: 'Nguyễn Văn A' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 22,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: '999.999' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 23,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center text-[#4848a4]', children: 'Đã giao' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 24,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'button',
                        {
                          onClick: (t) => {
                            t.preventDefault(), e('/origin-cart-detail')
                          },
                          className:
                            'py-2 px-8 border-solid border-[1px] border-[#4848A4] font-semibold rounded-lg text-[#4848A4]',
                          children: 'Xem chi tiết',
                        },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 25,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                    lineNumber: 19,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  { className: 'w-full border-[0.5px] border-solid border-zinc-500' },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                    lineNumber: 35,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex flex-row items-center space-x-32 text-xl font-bold',
                    children: [
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: '00001234' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 38,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: '01/01/2024' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 39,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: 'Nguyễn Văn A' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 40,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: '999.999' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 41,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center text-[#FFA500]', children: 'Đang giao' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 42,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'button',
                        {
                          onClick: (t) => {
                            t.preventDefault(), e('/origin-cart-detail')
                          },
                          className:
                            'py-2 px-8 border-solid border-[1px] border-[#4848A4] font-semibold rounded-lg text-[#4848A4]',
                          children: 'Xem chi tiết',
                        },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 43,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                    lineNumber: 37,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  { className: 'w-full border-[0.5px] border-solid border-zinc-500' },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                    lineNumber: 53,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex flex-row items-center space-x-32 text-xl font-bold',
                    children: [
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: '00001234' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 56,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: '01/01/2024' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 57,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: 'Nguyễn Văn A' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 58,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center', children: '999.999' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 59,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-32 text-center text-[#FF0000]', children: 'Đã giao' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 60,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'button',
                        {
                          onClick: (t) => {
                            t.preventDefault(), e('/origin-cart-detail')
                          },
                          className:
                            'py-2 px-8 border-solid border-[1px] border-[#4848A4] font-semibold rounded-lg text-[#4848A4]',
                          children: 'Xem chi tiết',
                        },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                          lineNumber: 61,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                    lineNumber: 55,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  { className: 'w-full border-[0.5px] border-solid border-zinc-500' },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
                    lineNumber: 71,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
              lineNumber: 9,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OrderDetail/index.tsx',
        lineNumber: 7,
        columnNumber: 5,
      },
      globalThis,
    )
  },
  Tc = () => {
    const e = Xe()
    return i.jsxDEV(
      i.Fragment,
      {
        children: [
          i.jsxDEV(
            'div',
            {
              className: 'container flex flex-col py-8 mx-auto',
              children: i.jsxDEV(
                'div',
                { className: 'text-3xl', children: 'GIỎ HÀNG' },
                void 0,
                !1,
                {
                  fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                  lineNumber: 9,
                  columnNumber: 9,
                },
                globalThis,
              ),
            },
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
              lineNumber: 8,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className: 'bg-[#7775C5] container mx-auto flex flex-col px-52 py-6',
              children: i.jsxDEV(
                'div',
                {
                  className: 'flex flex-row items-center space-x-4 text-2xl text-white',
                  children: [
                    i.jsxDEV(
                      'div',
                      {
                        className: 'flex flex-row w-2/5 space-x-4',
                        children: [
                          i.jsxDEV(
                            'input',
                            {
                              type: 'checkbox',
                              name: '',
                              id: '',
                              className: 'border-solid border-[2px] border-black w-6 rounded-lg',
                            },
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                              lineNumber: 14,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            'p',
                            { children: 'Chọn tất cả' },
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                              lineNumber: 15,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                        lineNumber: 13,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      'div',
                      { className: 'w-1/5 text-center', children: 'Số lượng' },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                        lineNumber: 17,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      'div',
                      { className: 'w-1/5 text-center', children: 'Thành tiền' },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                        lineNumber: 18,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                  ],
                },
                void 0,
                !0,
                {
                  fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                  lineNumber: 12,
                  columnNumber: 9,
                },
                globalThis,
              ),
            },
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
              lineNumber: 11,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className: 'container flex flex-col py-12 mx-auto px-52 border-b-[0.5px] border-solid border-gray-500 ',
              children: i.jsxDEV(
                'div',
                {
                  className: 'flex flex-row items-center space-x-4 text-xl font-light ',
                  children: [
                    i.jsxDEV(
                      'div',
                      {
                        className: 'flex flex-row items-center w-2/5 space-x-6',
                        children: [
                          i.jsxDEV(
                            'input',
                            {
                              type: 'checkbox',
                              className: 'border-solid border-[2px] border-black h-6 w-6 rounded-lg',
                            },
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                              lineNumber: 25,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            'div',
                            {
                              className: 'w-16 h-20 ',
                              children: i.jsxDEV(
                                'img',
                                {
                                  src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/origin-1.png',
                                  alt: '',
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                                  lineNumber: 27,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            },
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                              lineNumber: 26,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            'p',
                            { children: 'Chàng Băng Giá Và Nàng Lạnh Lùng - 3' },
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                              lineNumber: 29,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                        lineNumber: 24,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      'div',
                      {
                        className: 'w-1/5 text-center',
                        children: i.jsxDEV(
                          'input',
                          {
                            type: 'number',
                            className: 'w-3/5 h-8 text-center border-gray-400 border-solid rounded-lg border-[1px]',
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                            lineNumber: 32,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                      },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                        lineNumber: 31,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      'div',
                      { className: 'w-1/5 text-center text-[#003499]', children: '188.888d' },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                        lineNumber: 37,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      'div',
                      { className: 'w-[10%] text-center', children: 'Xoa' },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                        lineNumber: 38,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                  ],
                },
                void 0,
                !0,
                {
                  fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                  lineNumber: 23,
                  columnNumber: 9,
                },
                globalThis,
              ),
            },
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
              lineNumber: 22,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className: 'container flex flex-col py-12 mx-auto px-52 border-b-[0.5px] border-solid border-gray-500 ',
              children: i.jsxDEV(
                'div',
                {
                  className: 'flex flex-row items-center space-x-4 text-xl font-light ',
                  children: [
                    i.jsxDEV(
                      'div',
                      {
                        className: 'flex flex-row items-center w-2/5 space-x-6',
                        children: [
                          i.jsxDEV(
                            'input',
                            {
                              type: 'checkbox',
                              className: 'border-solid border-[2px] border-black h-6 w-6 rounded-lg',
                            },
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                              lineNumber: 45,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            'div',
                            {
                              className: 'w-16 h-20 ',
                              children: i.jsxDEV(
                                'img',
                                {
                                  src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/origin-2.png',
                                  alt: '',
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                                  lineNumber: 47,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            },
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                              lineNumber: 46,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            'p',
                            { children: 'Skip and Loafer - Nhịp Bước Tuổi Xanh - 1' },
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                              lineNumber: 49,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                        lineNumber: 44,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      'div',
                      {
                        className: 'w-1/5 text-center',
                        children: i.jsxDEV(
                          'input',
                          {
                            type: 'number',
                            className: 'w-3/5 h-8 text-center border-gray-400 border-solid rounded-lg border-[1px]',
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                            lineNumber: 52,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                      },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                        lineNumber: 51,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      'div',
                      { className: 'w-1/5 text-center text-[#003499]', children: '188.888d' },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                        lineNumber: 57,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                    i.jsxDEV(
                      'div',
                      { className: 'w-[10%] text-center', children: 'Xoa' },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                        lineNumber: 58,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                  ],
                },
                void 0,
                !0,
                {
                  fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                  lineNumber: 43,
                  columnNumber: 9,
                },
                globalThis,
              ),
            },
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
              lineNumber: 42,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className: 'container flex flex-col items-end pt-12 mx-auto space-y-8 pr-28',
              children: [
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex flex-row items-center space-x-16 text-xl font-bold',
                    children: [
                      i.jsxDEV(
                        'div',
                        { children: 'Tổng cộng' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                          lineNumber: 64,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'text-[#003499]', children: '566.666d' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                          lineNumber: 65,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                    lineNumber: 63,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: '',
                    children: i.jsxDEV(
                      'button',
                      {
                        onClick: () => e('/checkout'),
                        className: 'py-4 bg-[#003499] px-16 rounded-xl text-[26px] text-white font-bold',
                        children: 'THANH TOÁN',
                      },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                        lineNumber: 68,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
                    lineNumber: 67,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
              lineNumber: 62,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/CartList/index.tsx',
        lineNumber: 7,
        columnNumber: 5,
      },
      globalThis,
    )
  }
function Ec(e) {
  return Me({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: { id: 'Logout' },
        child: [
          {
            tag: 'g',
            attr: {},
            child: [
              {
                tag: 'path',
                attr: {
                  d: 'M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z',
                },
              },
              {
                tag: 'path',
                attr: {
                  d: 'M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z',
                },
              },
            ],
          },
        ],
      },
    ],
  })(e)
}
function Dc(e) {
  const t = new Error(e)
  if (t.stack === void 0)
    try {
      throw t
    } catch {}
  return t
}
var Sc = Dc,
  Z = Sc
function kc(e) {
  return !!e && typeof e.then == 'function'
}
var he = kc
function Rc(e, t) {
  if (e != null) return e
  throw Z(t ?? 'Got unexpected null or undefined')
}
var we = Rc
function Q(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  )
}
class Zr {
  getValue() {
    throw Z('BaseLoadable')
  }
  toPromise() {
    throw Z('BaseLoadable')
  }
  valueMaybe() {
    throw Z('BaseLoadable')
  }
  valueOrThrow() {
    throw Z(`Loadable expected value, but in "${this.state}" state`)
  }
  promiseMaybe() {
    throw Z('BaseLoadable')
  }
  promiseOrThrow() {
    throw Z(`Loadable expected promise, but in "${this.state}" state`)
  }
  errorMaybe() {
    throw Z('BaseLoadable')
  }
  errorOrThrow() {
    throw Z(`Loadable expected error, but in "${this.state}" state`)
  }
  is(t) {
    return t.state === this.state && t.contents === this.contents
  }
  map(t) {
    throw Z('BaseLoadable')
  }
}
class _c extends Zr {
  constructor(t) {
    super(), Q(this, 'state', 'hasValue'), Q(this, 'contents', void 0), (this.contents = t)
  }
  getValue() {
    return this.contents
  }
  toPromise() {
    return Promise.resolve(this.contents)
  }
  valueMaybe() {
    return this.contents
  }
  valueOrThrow() {
    return this.contents
  }
  promiseMaybe() {}
  errorMaybe() {}
  map(t) {
    try {
      const r = t(this.contents)
      return he(r) ? Nt(r) : jt(r) ? r : gr(r)
    } catch (r) {
      return he(r) ? Nt(r.next(() => this.map(t))) : Jr(r)
    }
  }
}
class Uc extends Zr {
  constructor(t) {
    super(), Q(this, 'state', 'hasError'), Q(this, 'contents', void 0), (this.contents = t)
  }
  getValue() {
    throw this.contents
  }
  toPromise() {
    return Promise.reject(this.contents)
  }
  valueMaybe() {}
  promiseMaybe() {}
  errorMaybe() {
    return this.contents
  }
  errorOrThrow() {
    return this.contents
  }
  map(t) {
    return this
  }
}
class Ii extends Zr {
  constructor(t) {
    super(), Q(this, 'state', 'loading'), Q(this, 'contents', void 0), (this.contents = t)
  }
  getValue() {
    throw this.contents
  }
  toPromise() {
    return this.contents
  }
  valueMaybe() {}
  promiseMaybe() {
    return this.contents
  }
  promiseOrThrow() {
    return this.contents
  }
  errorMaybe() {}
  map(t) {
    return Nt(
      this.contents
        .then((r) => {
          const n = t(r)
          if (jt(n)) {
            const s = n
            switch (s.state) {
              case 'hasValue':
                return s.contents
              case 'hasError':
                throw s.contents
              case 'loading':
                return s.contents
            }
          }
          return n
        })
        .catch((r) => {
          if (he(r)) return r.then(() => this.map(t).contents)
          throw r
        }),
    )
  }
}
function gr(e) {
  return Object.freeze(new _c(e))
}
function Jr(e) {
  return Object.freeze(new Uc(e))
}
function Nt(e) {
  return Object.freeze(new Ii(e))
}
function Pi() {
  return Object.freeze(new Ii(new Promise(() => {})))
}
function Cc(e) {
  return e.every((t) => t.state === 'hasValue')
    ? gr(e.map((t) => t.contents))
    : e.some((t) => t.state === 'hasError')
    ? Jr(
        we(
          e.find((t) => t.state === 'hasError'),
          'Invalid loadable passed to loadableAll',
        ).contents,
      )
    : Nt(Promise.all(e.map((t) => t.contents)))
}
function Oi(e) {
  const r = (Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((s) => e[s])).map((s) =>
      jt(s) ? s : he(s) ? Nt(s) : gr(s),
    ),
    n = Cc(r)
  return Array.isArray(e)
    ? n
    : n.map((s) => Object.getOwnPropertyNames(e).reduce((o, a, c) => ({ ...o, [a]: s[c] }), {}))
}
function jt(e) {
  return e instanceof Zr
}
const Vc = {
  of: (e) => (he(e) ? Nt(e) : jt(e) ? e : gr(e)),
  error: (e) => Jr(e),
  loading: () => Pi(),
  all: Oi,
  isLoadable: jt,
}
var Tt = {
    loadableWithValue: gr,
    loadableWithError: Jr,
    loadableWithPromise: Nt,
    loadableLoading: Pi,
    loadableAll: Oi,
    isLoadable: jt,
    RecoilLoadable: Vc,
  },
  Ac = Tt.loadableWithValue,
  jc = Tt.loadableWithError,
  Wc = Tt.loadableWithPromise,
  Lc = Tt.loadableLoading,
  Mc = Tt.loadableAll,
  Ic = Tt.isLoadable,
  Pc = Tt.RecoilLoadable,
  wr = Object.freeze({
    __proto__: null,
    loadableWithValue: Ac,
    loadableWithError: jc,
    loadableWithPromise: Wc,
    loadableLoading: Lc,
    loadableAll: Mc,
    isLoadable: Ic,
    RecoilLoadable: Pc,
  })
const Fn = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  RECOIL_GKS_ENABLED: new Set([
    'recoil_hamt_2020',
    'recoil_sync_external_store',
    'recoil_suppress_rerender_in_callback',
    'recoil_memory_managament_2020',
  ]),
}
function Oc(e, t) {
  var r, n
  const s =
    (r = process.env[e]) === null || r === void 0 || (n = r.toLowerCase()) === null || n === void 0 ? void 0 : n.trim()
  if (s == null || s === '') return
  if (!['true', 'false'].includes(s)) throw Z(`({}).${e} value must be 'true', 'false', or empty: ${s}`)
  t(s === 'true')
}
function $c(e, t) {
  var r
  const n = (r = process.env[e]) === null || r === void 0 ? void 0 : r.trim()
  n == null || n === '' || t(n.split(/\s*,\s*|\s+/))
}
function Bc() {
  var e
  typeof process > 'u' ||
    (((e = process) === null || e === void 0 ? void 0 : e.env) != null &&
      (Oc('RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED', (t) => {
        Fn.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = t
      }),
      $c('RECOIL_GKS_ENABLED', (t) => {
        t.forEach((r) => {
          Fn.RECOIL_GKS_ENABLED.add(r)
        })
      })))
}
Bc()
var Pt = Fn
function Qr(e) {
  return Pt.RECOIL_GKS_ENABLED.has(e)
}
Qr.setPass = (e) => {
  Pt.RECOIL_GKS_ENABLED.add(e)
}
Qr.setFail = (e) => {
  Pt.RECOIL_GKS_ENABLED.delete(e)
}
Qr.clear = () => {
  Pt.RECOIL_GKS_ENABLED.clear()
}
var ve = Qr
function Fc(e, t, { error: r } = {}) {
  return console.error(e, r), null
}
var zc = Fc,
  Ue = zc,
  _n,
  Un,
  Cn
const Hc = (_n = X.createMutableSource) !== null && _n !== void 0 ? _n : X.unstable_createMutableSource,
  $i = (Un = X.useMutableSource) !== null && Un !== void 0 ? Un : X.unstable_useMutableSource,
  ls = (Cn = X.useSyncExternalStore) !== null && Cn !== void 0 ? Cn : X.unstable_useSyncExternalStore
let Gs = !1
function Gc() {
  var e
  const { ReactCurrentDispatcher: t, ReactCurrentOwner: r } = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    s =
      ((e = t == null ? void 0 : t.current) !== null && e !== void 0 ? e : r.currentDispatcher).useSyncExternalStore !=
      null
  return (
    ls && !s && !Gs && ((Gs = !0), Ue('A React renderer without React 18+ API support is being used with React 18+.')),
    s
  )
}
function Kc() {
  return ve('recoil_transition_support')
    ? { mode: 'TRANSITION_SUPPORT', early: !0, concurrent: !0 }
    : ve('recoil_sync_external_store') && ls != null
    ? { mode: 'SYNC_EXTERNAL_STORE', early: !0, concurrent: !1 }
    : ve('recoil_mutable_source') &&
      $i != null &&
      typeof window < 'u' &&
      !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
    ? ve('recoil_suppress_rerender_in_callback')
      ? { mode: 'MUTABLE_SOURCE', early: !0, concurrent: !0 }
      : { mode: 'MUTABLE_SOURCE', early: !1, concurrent: !1 }
    : ve('recoil_suppress_rerender_in_callback')
    ? { mode: 'LEGACY', early: !0, concurrent: !1 }
    : { mode: 'LEGACY', early: !1, concurrent: !1 }
}
function qc() {
  return !1
}
var Ot = {
  createMutableSource: Hc,
  useMutableSource: $i,
  useSyncExternalStore: ls,
  currentRendererSupportsUseSyncExternalStore: Gc,
  reactMode: Kc,
  isFastRefreshEnabled: qc,
}
class cs {
  constructor(t) {
    Q(this, 'key', void 0), (this.key = t)
  }
  toJSON() {
    return { key: this.key }
  }
}
class Bi extends cs {}
class Fi extends cs {}
function Yc(e) {
  return e instanceof Bi || e instanceof Fi
}
var en = { AbstractRecoilValue: cs, RecoilState: Bi, RecoilValueReadOnly: Fi, isRecoilValue: Yc },
  Xc = en.AbstractRecoilValue,
  Zc = en.RecoilState,
  Jc = en.RecoilValueReadOnly,
  Qc = en.isRecoilValue,
  gt = Object.freeze({
    __proto__: null,
    AbstractRecoilValue: Xc,
    RecoilState: Zc,
    RecoilValueReadOnly: Jc,
    isRecoilValue: Qc,
  })
function eu(e, ...t) {
  let r = 0
  return e.replace(/%s/g, () => String(t[r++]))
}
var tu = eu
function ru(e, ...t) {
  {
    const r = tu.call(null, e, ...t),
      n = new Error(r)
    ;(n.name = 'Expectation Violation'), console.error(n)
  }
}
var nu = ru,
  tn = nu
function su(e, t) {
  return (function* () {
    let r = 0
    for (const n of e) yield t(n, r++)
  })()
}
var rn = su
const { isFastRefreshEnabled: iu } = Ot
class zi {}
const ou = new zi(),
  wt = new Map(),
  us = new Map()
function au(e) {
  return rn(e, (t) => we(us.get(t)))
}
function lu(e) {
  if (wt.has(e)) {
    const t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`
    iu() || tn(t, 'recoil')
  }
}
function cu(e) {
  Pt.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && lu(e.key), wt.set(e.key, e)
  const t = e.set == null ? new gt.RecoilValueReadOnly(e.key) : new gt.RecoilState(e.key)
  return us.set(e.key, t), t
}
class Hi extends Error {}
function uu(e) {
  const t = wt.get(e)
  if (t == null) throw new Hi(`Missing definition for RecoilValue: "${e}""`)
  return t
}
function du(e) {
  return wt.get(e)
}
const Hr = new Map()
function fu(e) {
  var t
  if (!ve('recoil_memory_managament_2020')) return
  const r = wt.get(e)
  if (r != null && (t = r.shouldDeleteConfigOnRelease) !== null && t !== void 0 && t.call(r)) {
    var n
    wt.delete(e), (n = Gi(e)) === null || n === void 0 || n(), Hr.delete(e)
  }
}
function mu(e, t) {
  ve('recoil_memory_managament_2020') && (t === void 0 ? Hr.delete(e) : Hr.set(e, t))
}
function Gi(e) {
  return Hr.get(e)
}
var Ie = {
  nodes: wt,
  recoilValues: us,
  registerNode: cu,
  getNode: uu,
  getNodeMaybe: du,
  deleteNodeConfigIfPossible: fu,
  setConfigDeletionHandler: mu,
  getConfigDeletionHandler: Gi,
  recoilValuesForKeys: au,
  NodeMissingError: Hi,
  DefaultValue: zi,
  DEFAULT_VALUE: ou,
}
function hu(e, t) {
  t()
}
var vu = { enqueueExecution: hu }
function bu(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports
}
var xu = bu(function (e) {
  var t =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (b) {
            return typeof b
          }
        : function (b) {
            return b && typeof Symbol == 'function' && b.constructor === Symbol && b !== Symbol.prototype
              ? 'symbol'
              : typeof b
          },
    r = {},
    n = 5,
    s = Math.pow(2, n),
    o = s - 1,
    a = s / 2,
    c = s / 4,
    l = {},
    u = function (h) {
      return function () {
        return h
      }
    },
    d = (r.hash = function (b) {
      var h = typeof b > 'u' ? 'undefined' : t(b)
      if (h === 'number') return b
      h !== 'string' && (b += '')
      for (var S = 0, W = 0, j = b.length; W < j; ++W) {
        var I = b.charCodeAt(W)
        S = ((S << 5) - S + I) | 0
      }
      return S
    }),
    v = function (h) {
      return (
        (h -= (h >> 1) & 1431655765),
        (h = (h & 858993459) + ((h >> 2) & 858993459)),
        (h = (h + (h >> 4)) & 252645135),
        (h += h >> 8),
        (h += h >> 16),
        h & 127
      )
    },
    g = function (h, S) {
      return (S >>> h) & o
    },
    _ = function (h) {
      return 1 << h
    },
    w = function (h, S) {
      return v(h & (S - 1))
    },
    T = function (h, S, W, j) {
      var I = j
      if (!h) {
        var H = j.length
        I = new Array(H)
        for (var G = 0; G < H; ++G) I[G] = j[G]
      }
      return (I[S] = W), I
    },
    D = function (h, S, W) {
      var j = W.length - 1,
        I = 0,
        H = 0,
        G = W
      if (h) I = H = S
      else for (G = new Array(j); I < S; ) G[H++] = W[I++]
      for (++I; I <= j; ) G[H++] = W[I++]
      return h && (G.length = j), G
    },
    k = function (h, S, W, j) {
      var I = j.length
      if (h) {
        for (var H = I; H >= S; ) j[H--] = j[H]
        return (j[S] = W), j
      }
      for (var G = 0, f = 0, m = new Array(I + 1); G < S; ) m[f++] = j[G++]
      for (m[S] = W; G < I; ) m[++f] = j[G++]
      return m
    },
    y = 1,
    C = 2,
    Y = 3,
    K = 4,
    p = { __hamt_isEmpty: !0 },
    L = function (h) {
      return h === p || (h && h.__hamt_isEmpty)
    },
    ee = function (h, S, W, j) {
      return { type: y, edit: h, hash: S, key: W, value: j, _modify: Ke }
    },
    q = function (h, S, W) {
      return { type: C, edit: h, hash: S, children: W, _modify: Oe }
    },
    J = function (h, S, W) {
      return { type: Y, edit: h, mask: S, children: W, _modify: ie }
    },
    le = function (h, S, W) {
      return { type: K, edit: h, size: S, children: W, _modify: re }
    },
    ke = function (h) {
      return h === p || h.type === y || h.type === C
    },
    de = function (h, S, W, j, I) {
      for (var H = [], G = j, f = 0, m = 0; G; ++m) G & 1 && (H[m] = I[f++]), (G >>>= 1)
      return (H[S] = W), le(h, f + 1, H)
    },
    ye = function (h, S, W, j) {
      for (var I = new Array(S - 1), H = 0, G = 0, f = 0, m = j.length; f < m; ++f)
        if (f !== W) {
          var N = j[f]
          N && !L(N) && ((I[H++] = N), (G |= 1 << f))
        }
      return J(h, G, I)
    },
    He = function b(h, S, W, j, I, H) {
      if (W === I) return q(h, W, [H, j])
      var G = g(S, W),
        f = g(S, I)
      return J(h, _(G) | _(f), G === f ? [b(h, S + n, W, j, I, H)] : G < f ? [j, H] : [H, j])
    },
    Ge = function (h, S, W, j, I, H, G, f) {
      for (var m = I.length, N = 0; N < m; ++N) {
        var R = I[N]
        if (W(G, R.key)) {
          var A = R.value,
            z = H(A)
          return z === A ? I : z === l ? (--f.value, D(h, N, I)) : T(h, N, ee(S, j, G, z), I)
        }
      }
      var P = H()
      return P === l ? I : (++f.value, T(h, m, ee(S, j, G, P), I))
    },
    fe = function (h, S) {
      return h === S.edit
    },
    Ke = function (h, S, W, j, I, H, G) {
      if (S(H, this.key)) {
        var f = j(this.value)
        return f === this.value
          ? this
          : f === l
          ? (--G.value, p)
          : fe(h, this)
          ? ((this.value = f), this)
          : ee(h, I, H, f)
      }
      var m = j()
      return m === l ? this : (++G.value, He(h, W, this.hash, this, I, ee(h, I, H, m)))
    },
    Oe = function (h, S, W, j, I, H, G) {
      if (I === this.hash) {
        var f = fe(h, this),
          m = Ge(f, h, S, this.hash, this.children, j, H, G)
        return m === this.children ? this : m.length > 1 ? q(h, this.hash, m) : m[0]
      }
      var N = j()
      return N === l ? this : (++G.value, He(h, W, this.hash, this, I, ee(h, I, H, N)))
    },
    ie = function (h, S, W, j, I, H, G) {
      var f = this.mask,
        m = this.children,
        N = g(W, I),
        R = _(N),
        A = w(f, R),
        z = f & R,
        P = z ? m[A] : p,
        $ = P._modify(h, S, W + n, j, I, H, G)
      if (P === $) return this
      var O = fe(h, this),
        te = f,
        Ne = void 0
      if (z && L($)) {
        if (((te &= ~R), !te)) return p
        if (m.length <= 2 && ke(m[A ^ 1])) return m[A ^ 1]
        Ne = D(O, A, m)
      } else if (!z && !L($)) {
        if (m.length >= a) return de(h, N, $, f, m)
        ;(te |= R), (Ne = k(O, A, $, m))
      } else Ne = T(O, A, $, m)
      return O ? ((this.mask = te), (this.children = Ne), this) : J(h, te, Ne)
    },
    re = function (h, S, W, j, I, H, G) {
      var f = this.size,
        m = this.children,
        N = g(W, I),
        R = m[N],
        A = (R || p)._modify(h, S, W + n, j, I, H, G)
      if (R === A) return this
      var z = fe(h, this),
        P = void 0
      if (L(R) && !L(A)) ++f, (P = T(z, N, A, m))
      else if (!L(R) && L(A)) {
        if ((--f, f <= c)) return ye(h, f, N, m)
        P = T(z, N, p, m)
      } else P = T(z, N, A, m)
      return z ? ((this.size = f), (this.children = P), this) : le(h, f, P)
    }
  p._modify = function (b, h, S, W, j, I, H) {
    var G = W()
    return G === l ? p : (++H.value, ee(b, j, I, G))
  }
  function x(b, h, S, W, j) {
    ;(this._editable = b), (this._edit = h), (this._config = S), (this._root = W), (this._size = j)
  }
  x.prototype.setTree = function (b, h) {
    return this._editable
      ? ((this._root = b), (this._size = h), this)
      : b === this._root
      ? this
      : new x(this._editable, this._edit, this._config, b, h)
  }
  var U = (r.tryGetHash = function (b, h, S, W) {
    for (var j = W._root, I = 0, H = W._config.keyEq; ; )
      switch (j.type) {
        case y:
          return H(S, j.key) ? j.value : b
        case C: {
          if (h === j.hash)
            for (var G = j.children, f = 0, m = G.length; f < m; ++f) {
              var N = G[f]
              if (H(S, N.key)) return N.value
            }
          return b
        }
        case Y: {
          var R = g(I, h),
            A = _(R)
          if (j.mask & A) {
            ;(j = j.children[w(j.mask, A)]), (I += n)
            break
          }
          return b
        }
        case K: {
          if (((j = j.children[g(I, h)]), j)) {
            I += n
            break
          }
          return b
        }
        default:
          return b
      }
  })
  x.prototype.tryGetHash = function (b, h, S) {
    return U(b, h, S, this)
  }
  var V = (r.tryGet = function (b, h, S) {
    return U(b, S._config.hash(h), h, S)
  })
  x.prototype.tryGet = function (b, h) {
    return V(b, h, this)
  }
  var F = (r.getHash = function (b, h, S) {
    return U(void 0, b, h, S)
  })
  ;(x.prototype.getHash = function (b, h) {
    return F(b, h, this)
  }),
    (r.get = function (b, h) {
      return U(void 0, h._config.hash(b), b, h)
    }),
    (x.prototype.get = function (b, h) {
      return V(h, b, this)
    })
  var M = (r.has = function (b, h, S) {
    return U(l, b, h, S) !== l
  })
  x.prototype.hasHash = function (b, h) {
    return M(b, h, this)
  }
  var ne = (r.has = function (b, h) {
    return M(h._config.hash(b), b, h)
  })
  x.prototype.has = function (b) {
    return ne(b, this)
  }
  var oe = function (h, S) {
    return h === S
  }
  ;(r.make = function (b) {
    return new x(0, 0, { keyEq: (b && b.keyEq) || oe, hash: (b && b.hash) || d }, p, 0)
  }),
    (r.empty = r.make())
  var B = (r.isEmpty = function (b) {
    return b && !!L(b._root)
  })
  x.prototype.isEmpty = function () {
    return B(this)
  }
  var be = (r.modifyHash = function (b, h, S, W) {
    var j = { value: W._size },
      I = W._root._modify(W._editable ? W._edit : NaN, W._config.keyEq, 0, b, h, S, j)
    return W.setTree(I, j.value)
  })
  x.prototype.modifyHash = function (b, h, S) {
    return be(S, b, h, this)
  }
  var ue = (r.modify = function (b, h, S) {
    return be(b, S._config.hash(h), h, S)
  })
  x.prototype.modify = function (b, h) {
    return ue(h, b, this)
  }
  var ce = (r.setHash = function (b, h, S, W) {
    return be(u(S), b, h, W)
  })
  x.prototype.setHash = function (b, h, S) {
    return ce(b, h, S, this)
  }
  var xe = (r.set = function (b, h, S) {
    return ce(S._config.hash(b), b, h, S)
  })
  x.prototype.set = function (b, h) {
    return xe(b, h, this)
  }
  var We = u(l),
    Ve = (r.removeHash = function (b, h, S) {
      return be(We, b, h, S)
    })
  x.prototype.removeHash = x.prototype.deleteHash = function (b, h) {
    return Ve(b, h, this)
  }
  var Ce = (r.remove = function (b, h) {
    return Ve(h._config.hash(b), b, h)
  })
  x.prototype.remove = x.prototype.delete = function (b) {
    return Ce(b, this)
  }
  var Ae = (r.beginMutation = function (b) {
    return new x(b._editable + 1, b._edit + 1, b._config, b._root, b._size)
  })
  x.prototype.beginMutation = function () {
    return Ae(this)
  }
  var Rr = (r.endMutation = function (b) {
    return (b._editable = b._editable && b._editable - 1), b
  })
  x.prototype.endMutation = function () {
    return Rr(this)
  }
  var pn = (r.mutate = function (b, h) {
    var S = Ae(h)
    return b(S), Rr(S)
  })
  x.prototype.mutate = function (b) {
    return pn(b, this)
  }
  var Bt = function (h) {
      return h && at(h[0], h[1], h[2], h[3], h[4])
    },
    at = function (h, S, W, j, I) {
      for (; W < h; ) {
        var H = S[W++]
        if (H && !L(H)) return Ft(H, j, [h, S, W, j, I])
      }
      return Bt(I)
    },
    Ft = function (h, S, W) {
      switch (h.type) {
        case y:
          return { value: S(h), rest: W }
        case C:
        case K:
        case Y:
          var j = h.children
          return at(j.length, j, 0, S, W)
        default:
          return Bt(W)
      }
    },
    zt = { done: !0 }
  function $e(b) {
    this.v = b
  }
  ;($e.prototype.next = function () {
    if (!this.v) return zt
    var b = this.v
    return (this.v = Bt(b.rest)), b
  }),
    ($e.prototype[Symbol.iterator] = function () {
      return this
    })
  var st = function (h, S) {
      return new $e(Ft(h._root, S))
    },
    _r = function (h) {
      return [h.key, h.value]
    },
    St = (r.entries = function (b) {
      return st(b, _r)
    })
  x.prototype.entries = x.prototype[Symbol.iterator] = function () {
    return St(this)
  }
  var Nn = function (h) {
      return h.key
    },
    Ze = (r.keys = function (b) {
      return st(b, Nn)
    })
  x.prototype.keys = function () {
    return Ze(this)
  }
  var Ur = function (h) {
      return h.value
    },
    Cr =
      (r.values =
      x.prototype.values =
        function (b) {
          return st(b, Ur)
        })
  x.prototype.values = function () {
    return Cr(this)
  }
  var Ht = (r.fold = function (b, h, S) {
    var W = S._root
    if (W.type === y) return b(h, W.value, W.key)
    for (var j = [W.children], I = void 0; (I = j.pop()); )
      for (var H = 0, G = I.length; H < G; ) {
        var f = I[H++]
        f && f.type && (f.type === y ? (h = b(h, f.value, f.key)) : j.push(f.children))
      }
    return h
  })
  x.prototype.fold = function (b, h) {
    return Ht(b, h, this)
  }
  var gn = (r.forEach = function (b, h) {
    return Ht(
      function (S, W, j) {
        return b(W, j, h)
      },
      null,
      h,
    )
  })
  x.prototype.forEach = function (b) {
    return gn(b, this)
  }
  var Vr = (r.count = function (b) {
    return b._size
  })
  ;(x.prototype.count = function () {
    return Vr(this)
  }),
    Object.defineProperty(x.prototype, 'size', { get: x.prototype.count }),
    e.exports ? (e.exports = r) : ((void 0).hamt = r)
})
class pu {
  constructor(t) {
    Q(this, '_map', void 0), (this._map = new Map(t == null ? void 0 : t.entries()))
  }
  keys() {
    return this._map.keys()
  }
  entries() {
    return this._map.entries()
  }
  get(t) {
    return this._map.get(t)
  }
  has(t) {
    return this._map.has(t)
  }
  set(t, r) {
    return this._map.set(t, r), this
  }
  delete(t) {
    return this._map.delete(t), this
  }
  clone() {
    return fs(this)
  }
  toMap() {
    return new Map(this._map)
  }
}
class ds {
  constructor(t) {
    if ((Q(this, '_hamt', xu.empty.beginMutation()), t instanceof ds)) {
      const r = t._hamt.endMutation()
      ;(t._hamt = r.beginMutation()), (this._hamt = r.beginMutation())
    } else if (t) for (const [r, n] of t.entries()) this._hamt.set(r, n)
  }
  keys() {
    return this._hamt.keys()
  }
  entries() {
    return this._hamt.entries()
  }
  get(t) {
    return this._hamt.get(t)
  }
  has(t) {
    return this._hamt.has(t)
  }
  set(t, r) {
    return this._hamt.set(t, r), this
  }
  delete(t) {
    return this._hamt.delete(t), this
  }
  clone() {
    return fs(this)
  }
  toMap() {
    return new Map(this._hamt)
  }
}
function fs(e) {
  return ve('recoil_hamt_2020') ? new ds(e) : new pu(e)
}
var Nu = { persistentMap: fs },
  gu = Nu.persistentMap,
  wu = Object.freeze({ __proto__: null, persistentMap: gu })
function yu(e, ...t) {
  const r = new Set()
  e: for (const n of e) {
    for (const s of t) if (s.has(n)) continue e
    r.add(n)
  }
  return r
}
var lr = yu
function Tu(e, t) {
  const r = new Map()
  return (
    e.forEach((n, s) => {
      r.set(s, t(n, s))
    }),
    r
  )
}
var Gr = Tu
function Eu() {
  return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() }
}
function Du(e) {
  return {
    nodeDeps: Gr(e.nodeDeps, (t) => new Set(t)),
    nodeToNodeSubscriptions: Gr(e.nodeToNodeSubscriptions, (t) => new Set(t)),
  }
}
function Vn(e, t, r, n) {
  const { nodeDeps: s, nodeToNodeSubscriptions: o } = r,
    a = s.get(e)
  if (a && n && a !== n.nodeDeps.get(e)) return
  s.set(e, t)
  const c = a == null ? t : lr(t, a)
  for (const l of c) o.has(l) || o.set(l, new Set()), we(o.get(l)).add(e)
  if (a) {
    const l = lr(a, t)
    for (const u of l) {
      if (!o.has(u)) return
      const d = we(o.get(u))
      d.delete(e), d.size === 0 && o.delete(u)
    }
  }
}
function Su(e, t, r, n) {
  var s, o, a, c
  const l = r.getState()
  n === l.currentTree.version ||
    n === ((s = l.nextTree) === null || s === void 0 ? void 0 : s.version) ||
    n === ((o = l.previousTree) === null || o === void 0 ? void 0 : o.version) ||
    Ue('Tried to save dependencies to a discarded tree')
  const u = r.getGraph(n)
  if ((Vn(e, t, u), n === ((a = l.previousTree) === null || a === void 0 ? void 0 : a.version))) {
    const v = r.getGraph(l.currentTree.version)
    Vn(e, t, v, u)
  }
  if (n === ((c = l.previousTree) === null || c === void 0 ? void 0 : c.version) || n === l.currentTree.version) {
    var d
    const v = (d = l.nextTree) === null || d === void 0 ? void 0 : d.version
    if (v !== void 0) {
      const g = r.getGraph(v)
      Vn(e, t, g, u)
    }
  }
}
var yr = { cloneGraph: Du, graph: Eu, saveDepsToStore: Su }
let ku = 0
const Ru = () => ku++
let _u = 0
const Uu = () => _u++
let Cu = 0
const Vu = () => Cu++
var nn = { getNextTreeStateVersion: Ru, getNextStoreID: Uu, getNextComponentID: Vu }
const { persistentMap: Ks } = wu,
  { graph: Au } = yr,
  { getNextTreeStateVersion: Ki } = nn
function qi() {
  const e = Ki()
  return {
    version: e,
    stateID: e,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: Ks(),
    nonvalidatedAtoms: Ks(),
  }
}
function ju() {
  const e = qi()
  return {
    currentTree: e,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: new Set(),
    knownSelectors: new Set(),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(e.version, Au()),
    retention: { referenceCounts: new Map(), nodesRetainedByZone: new Map(), retainablesToCheckForRelease: new Set() },
    nodeCleanupFunctions: new Map(),
  }
}
var Yi = { makeEmptyTreeState: qi, makeEmptyStoreState: ju, getNextTreeStateVersion: Ki }
class Xi {}
function Wu() {
  return new Xi()
}
var sn = { RetentionZone: Xi, retentionZone: Wu }
function Lu(e, t) {
  const r = new Set(e)
  return r.add(t), r
}
function Mu(e, t) {
  const r = new Set(e)
  return r.delete(t), r
}
function Iu(e, t, r) {
  const n = new Map(e)
  return n.set(t, r), n
}
function Pu(e, t, r) {
  const n = new Map(e)
  return n.set(t, r(n.get(t))), n
}
function Ou(e, t) {
  const r = new Map(e)
  return r.delete(t), r
}
function $u(e, t) {
  const r = new Map(e)
  return t.forEach((n) => r.delete(n)), r
}
var Zi = {
  setByAddingToSet: Lu,
  setByDeletingFromSet: Mu,
  mapBySettingInMap: Iu,
  mapByUpdatingInMap: Pu,
  mapByDeletingFromMap: Ou,
  mapByDeletingMultipleFromMap: $u,
}
function* Bu(e, t) {
  let r = 0
  for (const n of e) t(n, r++) && (yield n)
}
var ms = Bu
function Fu(e, t) {
  return new Proxy(e, { get: (n, s) => (!(s in n) && s in t && (n[s] = t[s]()), n[s]), ownKeys: (n) => Object.keys(n) })
}
var Ji = Fu
const { getNode: Tr, getNodeMaybe: zu, recoilValuesForKeys: qs } = Ie,
  { RetentionZone: Ys } = sn,
  { setByAddingToSet: Hu } = Zi,
  Gu = Object.freeze(new Set())
class Ku extends Error {}
function qu(e, t, r) {
  if (!ve('recoil_memory_managament_2020')) return () => {}
  const { nodesRetainedByZone: n } = e.getState().retention
  function s(o) {
    let a = n.get(o)
    a || n.set(o, (a = new Set())), a.add(t)
  }
  if (r instanceof Ys) s(r)
  else if (Array.isArray(r)) for (const o of r) s(o)
  return () => {
    if (!ve('recoil_memory_managament_2020')) return
    const { retention: o } = e.getState()
    function a(c) {
      const l = o.nodesRetainedByZone.get(c)
      l == null || l.delete(t), l && l.size === 0 && o.nodesRetainedByZone.delete(c)
    }
    if (r instanceof Ys) a(r)
    else if (Array.isArray(r)) for (const c of r) a(c)
  }
}
function hs(e, t, r, n) {
  const s = e.getState()
  if (s.nodeCleanupFunctions.has(r)) return
  const o = Tr(r),
    a = qu(e, r, o.retainedBy),
    c = o.init(e, t, n)
  s.nodeCleanupFunctions.set(r, () => {
    c(), a()
  })
}
function Yu(e, t, r) {
  hs(e, e.getState().currentTree, t, r)
}
function Xu(e, t) {
  var r
  const n = e.getState()
  ;(r = n.nodeCleanupFunctions.get(t)) === null || r === void 0 || r(), n.nodeCleanupFunctions.delete(t)
}
function Zu(e, t, r) {
  return hs(e, t, r, 'get'), Tr(r).get(e, t)
}
function Qi(e, t, r) {
  return Tr(r).peek(e, t)
}
function Ju(e, t, r) {
  var n
  const s = zu(t)
  return (
    s == null || (n = s.invalidate) === null || n === void 0 || n.call(s, e),
    {
      ...e,
      atomValues: e.atomValues.clone().delete(t),
      nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, r),
      dirtyAtoms: Hu(e.dirtyAtoms, t),
    }
  )
}
function Qu(e, t, r, n) {
  const s = Tr(r)
  if (s.set == null) throw new Ku(`Attempt to set read-only RecoilValue: ${r}`)
  const o = s.set
  return hs(e, t, r, 'set'), o(e, t, n)
}
function ed(e, t, r) {
  const n = e.getState(),
    s = e.getGraph(t.version),
    o = Tr(r).nodeType
  return Ji(
    { type: o },
    {
      loadable: () => Qi(e, t, r),
      isActive: () => n.knownAtoms.has(r) || n.knownSelectors.has(r),
      isSet: () => (o === 'selector' ? !1 : t.atomValues.has(r)),
      isModified: () => t.dirtyAtoms.has(r),
      deps: () => {
        var a
        return qs((a = s.nodeDeps.get(r)) !== null && a !== void 0 ? a : [])
      },
      subscribers: () => {
        var a, c
        return {
          nodes: qs(ms(eo(e, t, new Set([r])), (l) => l !== r)),
          components: rn(
            (a = (c = n.nodeToComponentSubscriptions.get(r)) === null || c === void 0 ? void 0 : c.values()) !== null &&
              a !== void 0
              ? a
              : [],
            ([l]) => ({ name: l }),
          ),
        }
      },
    },
  )
}
function eo(e, t, r) {
  const n = new Set(),
    s = Array.from(r),
    o = e.getGraph(t.version)
  for (let c = s.pop(); c; c = s.pop()) {
    var a
    n.add(c)
    const l = (a = o.nodeToNodeSubscriptions.get(c)) !== null && a !== void 0 ? a : Gu
    for (const u of l) n.has(u) || s.push(u)
  }
  return n
}
var ht = {
  getNodeLoadable: Zu,
  peekNodeLoadable: Qi,
  setNodeValue: Qu,
  initializeNode: Yu,
  cleanUpNode: Xu,
  setUnvalidatedAtomValue_DEPRECATED: Ju,
  peekNodeInfo: ed,
  getDownstreamNodes: eo,
}
let to = null
function td(e) {
  to = e
}
function rd() {
  var e
  ;(e = to) === null || e === void 0 || e()
}
var ro = { setInvalidateMemoizedSnapshot: td, invalidateMemoizedSnapshot: rd }
const { getDownstreamNodes: nd, getNodeLoadable: no, setNodeValue: sd } = ht,
  { getNextComponentID: id } = nn,
  { getNode: od, getNodeMaybe: so } = Ie,
  { DefaultValue: vs } = Ie,
  { reactMode: ad } = Ot,
  { AbstractRecoilValue: ld, RecoilState: cd, RecoilValueReadOnly: ud, isRecoilValue: dd } = gt,
  { invalidateMemoizedSnapshot: fd } = ro
function md(e, { key: t }, r = e.getState().currentTree) {
  var n, s
  const o = e.getState()
  r.version === o.currentTree.version ||
    r.version === ((n = o.nextTree) === null || n === void 0 ? void 0 : n.version) ||
    r.version === ((s = o.previousTree) === null || s === void 0 ? void 0 : s.version) ||
    Ue('Tried to read from a discarded tree')
  const a = no(e, r, t)
  return a.state === 'loading' && a.contents.catch(() => {}), a
}
function hd(e, t) {
  const r = e.clone()
  return (
    t.forEach((n, s) => {
      n.state === 'hasValue' && n.contents instanceof vs ? r.delete(s) : r.set(s, n)
    }),
    r
  )
}
function vd(e, t, { key: r }, n) {
  if (typeof n == 'function') {
    const s = no(e, t, r)
    if (s.state === 'loading') {
      const o = `Tried to set atom or selector "${r}" using an updater function while the current state is pending, this is not currently supported.`
      throw (Ue(o), Z(o))
    } else if (s.state === 'hasError') throw s.contents
    return n(s.contents)
  } else return n
}
function bd(e, t, r) {
  if (r.type === 'set') {
    const { recoilValue: s, valueOrUpdater: o } = r,
      a = vd(e, t, s, o),
      c = sd(e, t, s.key, a)
    for (const [l, u] of c.entries()) zn(t, l, u)
  } else if (r.type === 'setLoadable') {
    const {
      recoilValue: { key: s },
      loadable: o,
    } = r
    zn(t, s, o)
  } else if (r.type === 'markModified') {
    const {
      recoilValue: { key: s },
    } = r
    t.dirtyAtoms.add(s)
  } else if (r.type === 'setUnvalidated') {
    var n
    const {
        recoilValue: { key: s },
        unvalidatedValue: o,
      } = r,
      a = so(s)
    a == null || (n = a.invalidate) === null || n === void 0 || n.call(a, t),
      t.atomValues.delete(s),
      t.nonvalidatedAtoms.set(s, o),
      t.dirtyAtoms.add(s)
  } else Ue(`Unknown action ${r.type}`)
}
function zn(e, t, r) {
  r.state === 'hasValue' && r.contents instanceof vs ? e.atomValues.delete(t) : e.atomValues.set(t, r),
    e.dirtyAtoms.add(t),
    e.nonvalidatedAtoms.delete(t)
}
function io(e, t) {
  e.replaceState((r) => {
    const n = oo(r)
    for (const s of t) bd(e, n, s)
    return ao(e, n), fd(), n
  })
}
function on(e, t) {
  if (cr.length) {
    const r = cr[cr.length - 1]
    let n = r.get(e)
    n || r.set(e, (n = [])), n.push(t)
  } else io(e, [t])
}
const cr = []
function xd() {
  const e = new Map()
  return (
    cr.push(e),
    () => {
      for (const [r, n] of e) io(r, n)
      cr.pop() !== e && Ue('Incorrect order of batch popping')
    }
  )
}
function oo(e) {
  return {
    ...e,
    atomValues: e.atomValues.clone(),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(e.dirtyAtoms),
  }
}
function ao(e, t) {
  const r = nd(e, t, t.dirtyAtoms)
  for (const o of r) {
    var n, s
    ;(n = so(o)) === null || n === void 0 || (s = n.invalidate) === null || s === void 0 || s.call(n, t)
  }
}
function lo(e, t, r) {
  on(e, { type: 'set', recoilValue: t, valueOrUpdater: r })
}
function pd(e, t, r) {
  if (r instanceof vs) return lo(e, t, r)
  on(e, { type: 'setLoadable', recoilValue: t, loadable: r })
}
function Nd(e, t) {
  on(e, { type: 'markModified', recoilValue: t })
}
function gd(e, t, r) {
  on(e, { type: 'setUnvalidated', recoilValue: t, unvalidatedValue: r })
}
function wd(e, { key: t }, r, n = null) {
  const s = id(),
    o = e.getState()
  o.nodeToComponentSubscriptions.has(t) || o.nodeToComponentSubscriptions.set(t, new Map()),
    we(o.nodeToComponentSubscriptions.get(t)).set(s, [n ?? '<not captured>', r])
  const a = ad()
  if (a.early && (a.mode === 'LEGACY' || a.mode === 'MUTABLE_SOURCE')) {
    const c = e.getState().nextTree
    c && c.dirtyAtoms.has(t) && r(c)
  }
  return {
    release: () => {
      const c = e.getState(),
        l = c.nodeToComponentSubscriptions.get(t)
      if (l === void 0 || !l.has(s)) {
        Ue(`Subscription missing at release time for atom ${t}. This is a bug in Recoil.`)
        return
      }
      l.delete(s), l.size === 0 && c.nodeToComponentSubscriptions.delete(t)
    },
  }
}
function yd(e, t) {
  var r
  const { currentTree: n } = e.getState(),
    s = od(t.key)
  ;(r = s.clearCache) === null || r === void 0 || r.call(s, e, n)
}
var rt = {
  RecoilValueReadOnly: ud,
  AbstractRecoilValue: ld,
  RecoilState: cd,
  getRecoilValueAsLoadable: md,
  setRecoilValue: lo,
  setRecoilValueLoadable: pd,
  markRecoilValueModified: Nd,
  setUnvalidatedRecoilValue: gd,
  subscribeToRecoilValue: wd,
  isRecoilValue: dd,
  applyAtomValueWrites: hd,
  batchStart: xd,
  writeLoadableToTreeState: zn,
  invalidateDownstreams: ao,
  copyTreeState: oo,
  refreshRecoilValue: yd,
}
function Td(e, t, r) {
  const n = e.entries()
  let s = n.next()
  for (; !s.done; ) {
    const o = s.value
    if (t.call(r, o[1], o[0], e)) return !0
    s = n.next()
  }
  return !1
}
var Ed = Td
const { cleanUpNode: Dd } = ht,
  { deleteNodeConfigIfPossible: Sd, getNode: co } = Ie,
  { RetentionZone: uo } = sn,
  kd = 12e4,
  fo = new Set()
function mo(e, t) {
  const r = e.getState(),
    n = r.currentTree
  if (r.nextTree) {
    Ue('releaseNodesNowOnCurrentTree should only be called at the end of a batch')
    return
  }
  const s = new Set()
  for (const a of t)
    if (a instanceof uo) for (const c of Cd(r, a)) s.add(c)
    else s.add(a)
  const o = Rd(e, s)
  for (const a of o) Ud(e, n, a)
}
function Rd(e, t) {
  const r = e.getState(),
    n = r.currentTree,
    s = e.getGraph(n.version),
    o = new Set(),
    a = new Set()
  return c(t), o
  function c(l) {
    const u = new Set(),
      d = _d(e, n, l, o, a)
    for (const w of d) {
      var v
      if (co(w).retainedBy === 'recoilRoot') {
        a.add(w)
        continue
      }
      if (((v = r.retention.referenceCounts.get(w)) !== null && v !== void 0 ? v : 0) > 0) {
        a.add(w)
        continue
      }
      if (ho(w).some((D) => r.retention.referenceCounts.get(D))) {
        a.add(w)
        continue
      }
      const T = s.nodeToNodeSubscriptions.get(w)
      if (T && Ed(T, (D) => a.has(D))) {
        a.add(w)
        continue
      }
      o.add(w), u.add(w)
    }
    const g = new Set()
    for (const w of u)
      for (const T of (_ = s.nodeDeps.get(w)) !== null && _ !== void 0 ? _ : fo) {
        var _
        o.has(T) || g.add(T)
      }
    g.size && c(g)
  }
}
function _d(e, t, r, n, s) {
  const o = e.getGraph(t.version),
    a = [],
    c = new Set()
  for (; r.size > 0; ) l(we(r.values().next().value))
  return a
  function l(u) {
    if (n.has(u) || s.has(u)) {
      r.delete(u)
      return
    }
    if (c.has(u)) return
    const d = o.nodeToNodeSubscriptions.get(u)
    if (d) for (const v of d) l(v)
    c.add(u), r.delete(u), a.push(u)
  }
}
function Ud(e, t, r) {
  if (!ve('recoil_memory_managament_2020')) return
  Dd(e, r)
  const n = e.getState()
  n.knownAtoms.delete(r),
    n.knownSelectors.delete(r),
    n.nodeTransactionSubscriptions.delete(r),
    n.retention.referenceCounts.delete(r)
  const s = ho(r)
  for (const l of s) {
    var o
    ;(o = n.retention.nodesRetainedByZone.get(l)) === null || o === void 0 || o.delete(r)
  }
  t.atomValues.delete(r), t.dirtyAtoms.delete(r), t.nonvalidatedAtoms.delete(r)
  const a = n.graphsByVersion.get(t.version)
  if (a) {
    const l = a.nodeDeps.get(r)
    if (l !== void 0) {
      a.nodeDeps.delete(r)
      for (const u of l) {
        var c
        ;(c = a.nodeToNodeSubscriptions.get(u)) === null || c === void 0 || c.delete(r)
      }
    }
    a.nodeToNodeSubscriptions.delete(r)
  }
  Sd(r)
}
function Cd(e, t) {
  var r
  return (r = e.retention.nodesRetainedByZone.get(t)) !== null && r !== void 0 ? r : fo
}
function ho(e) {
  const t = co(e).retainedBy
  return t === void 0 || t === 'components' || t === 'recoilRoot' ? [] : t instanceof uo ? [t] : t
}
function Vd(e, t) {
  const r = e.getState()
  r.nextTree ? r.retention.retainablesToCheckForRelease.add(t) : mo(e, new Set([t]))
}
function Ad(e, t, r) {
  var n
  if (!ve('recoil_memory_managament_2020')) return
  const s = e.getState().retention.referenceCounts,
    o = ((n = s.get(t)) !== null && n !== void 0 ? n : 0) + r
  o === 0 ? vo(e, t) : s.set(t, o)
}
function vo(e, t) {
  if (!ve('recoil_memory_managament_2020')) return
  e.getState().retention.referenceCounts.delete(t), Vd(e, t)
}
function jd(e) {
  if (!ve('recoil_memory_managament_2020')) return
  const t = e.getState()
  mo(e, t.retention.retainablesToCheckForRelease), t.retention.retainablesToCheckForRelease.clear()
}
function Wd(e) {
  return e === void 0 ? 'recoilRoot' : e
}
var Et = {
  SUSPENSE_TIMEOUT_MS: kd,
  updateRetainCount: Ad,
  updateRetainCountToZero: vo,
  releaseScheduledRetainablesNow: jd,
  retainedByOptionWithDefault: Wd,
}
const { unstable_batchedUpdates: Ld } = la
var Md = { unstable_batchedUpdates: Ld }
const { unstable_batchedUpdates: Id } = Md
var Pd = { unstable_batchedUpdates: Id }
const { batchStart: Od } = rt,
  { unstable_batchedUpdates: $d } = Pd
let bs = $d || ((e) => e())
const Bd = (e) => {
    bs = e
  },
  Fd = () => bs,
  zd = (e) => {
    bs(() => {
      let t = () => {}
      try {
        ;(t = Od()), e()
      } finally {
        t()
      }
    })
  }
var an = { getBatcher: Fd, setBatcher: Bd, batchUpdates: zd }
function* Hd(e) {
  for (const t of e) for (const r of t) yield r
}
var bo = Hd
const xo = typeof Window > 'u' || typeof window > 'u',
  Gd = (e) => !xo && (e === window || e instanceof Window),
  Kd = typeof navigator < 'u' && navigator.product === 'ReactNative'
var Er = { isSSR: xo, isReactNative: Kd, isWindow: Gd }
function qd(e, t) {
  let r
  return (...n) => {
    r || (r = {})
    const s = t(...n)
    return Object.hasOwnProperty.call(r, s) || (r[s] = e(...n)), r[s]
  }
}
function Yd(e, t) {
  let r, n
  return (...s) => {
    const o = t(...s)
    return r === o || ((r = o), (n = e(...s))), n
  }
}
function Xd(e, t) {
  let r, n
  return [
    (...a) => {
      const c = t(...a)
      return r === c || ((r = c), (n = e(...a))), n
    },
    () => {
      r = null
    },
  ]
}
var Zd = { memoizeWithArgsHash: qd, memoizeOneWithArgsHash: Yd, memoizeOneWithArgsHashAndInvalidation: Xd }
const { batchUpdates: Hn } = an,
  { initializeNode: Jd, peekNodeInfo: Qd } = ht,
  { graph: ef } = yr,
  { getNextStoreID: tf } = nn,
  { DEFAULT_VALUE: rf, recoilValues: Xs, recoilValuesForKeys: Zs } = Ie,
  { AbstractRecoilValue: nf, getRecoilValueAsLoadable: sf, setRecoilValue: Js, setUnvalidatedRecoilValue: of } = rt,
  { updateRetainCount: Fr } = Et,
  { setInvalidateMemoizedSnapshot: af } = ro,
  { getNextTreeStateVersion: lf, makeEmptyStoreState: cf } = Yi,
  { isSSR: uf } = Er,
  { memoizeOneWithArgsHashAndInvalidation: df } = Zd,
  ff = `
Recoil Snapshots only last for the duration of the callback they are provided to. To keep a Snapshot longer, do this:

  const release = snapshot.retain();
  try {
    await doSomethingWithSnapshot(snapshot);
  } finally {
    release();
  }

This is currently a DEV-only warning but will become a thrown exception in the next release of Recoil.
`
class ln {
  constructor(t, r) {
    Q(this, '_store', void 0),
      Q(this, '_refCount', 1),
      Q(this, 'getLoadable', (n) => (this.checkRefCount_INTERNAL(), sf(this._store, n))),
      Q(this, 'getPromise', (n) => (this.checkRefCount_INTERNAL(), this.getLoadable(n).toPromise())),
      Q(this, 'getNodes_UNSTABLE', (n) => {
        if ((this.checkRefCount_INTERNAL(), (n == null ? void 0 : n.isModified) === !0)) {
          if ((n == null ? void 0 : n.isInitialized) === !1) return []
          const a = this._store.getState().currentTree
          return Zs(a.dirtyAtoms)
        }
        const s = this._store.getState().knownAtoms,
          o = this._store.getState().knownSelectors
        return (n == null ? void 0 : n.isInitialized) == null
          ? Xs.values()
          : n.isInitialized === !0
          ? Zs(bo([s, o]))
          : ms(Xs.values(), ({ key: a }) => !s.has(a) && !o.has(a))
      }),
      Q(
        this,
        'getInfo_UNSTABLE',
        ({ key: n }) => (this.checkRefCount_INTERNAL(), Qd(this._store, this._store.getState().currentTree, n)),
      ),
      Q(this, 'map', (n) => {
        this.checkRefCount_INTERNAL()
        const s = new Gn(this, Hn)
        return n(s), s
      }),
      Q(this, 'asyncMap', async (n) => {
        this.checkRefCount_INTERNAL()
        const s = new Gn(this, Hn)
        return s.retain(), await n(s), s.autoRelease_INTERNAL(), s
      }),
      (this._store = {
        storeID: tf(),
        parentStoreID: r,
        getState: () => t,
        replaceState: (n) => {
          t.currentTree = n(t.currentTree)
        },
        getGraph: (n) => {
          const s = t.graphsByVersion
          if (s.has(n)) return we(s.get(n))
          const o = ef()
          return s.set(n, o), o
        },
        subscribeToTransactions: () => ({ release: () => {} }),
        addTransactionMetadata: () => {
          throw Z('Cannot subscribe to Snapshots')
        },
      })
    for (const n of this._store.getState().knownAtoms) Jd(this._store, n, 'get'), Fr(this._store, n, 1)
    this.autoRelease_INTERNAL()
  }
  retain() {
    if (this._refCount <= 0) throw Z('Snapshot has already been released.')
    this._refCount++
    let t = !1
    return () => {
      t || ((t = !0), this._release())
    }
  }
  autoRelease_INTERNAL() {
    uf || window.setTimeout(() => this._release(), 10)
  }
  _release() {
    if ((this._refCount--, this._refCount === 0)) {
      if (
        (this._store.getState().nodeCleanupFunctions.forEach((t) => t()),
        this._store.getState().nodeCleanupFunctions.clear(),
        !ve('recoil_memory_managament_2020'))
      )
        return
    } else this._refCount < 0 && Ue('Snapshot released an extra time.')
  }
  isRetained() {
    return this._refCount > 0
  }
  checkRefCount_INTERNAL() {
    ve('recoil_memory_managament_2020') && this._refCount <= 0 && Ue(ff)
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store
  }
  getID() {
    return this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID
  }
}
function po(e, t, r = !1) {
  const n = e.getState(),
    s = r ? lf() : t.version
  return {
    currentTree: {
      version: r ? s : t.version,
      stateID: r ? s : t.stateID,
      transactionMetadata: { ...t.transactionMetadata },
      dirtyAtoms: new Set(t.dirtyAtoms),
      atomValues: t.atomValues.clone(),
      nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(n.knownAtoms),
    knownSelectors: new Set(n.knownSelectors),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(s, e.getGraph(t.version)),
    retention: { referenceCounts: new Map(), nodesRetainedByZone: new Map(), retainablesToCheckForRelease: new Set() },
    nodeCleanupFunctions: new Map(rn(n.nodeCleanupFunctions.entries(), ([o]) => [o, () => {}])),
  }
}
function mf(e) {
  const t = new ln(cf())
  return e != null ? t.map(e) : t
}
const [Qs, No] = df(
  (e, t) => {
    var r
    const n = e.getState(),
      s = t === 'latest' ? ((r = n.nextTree) !== null && r !== void 0 ? r : n.currentTree) : we(n.previousTree)
    return new ln(po(e, s), e.storeID)
  },
  (e, t) => {
    var r, n
    return (
      String(t) +
      String(e.storeID) +
      String((r = e.getState().nextTree) === null || r === void 0 ? void 0 : r.version) +
      String(e.getState().currentTree.version) +
      String((n = e.getState().previousTree) === null || n === void 0 ? void 0 : n.version)
    )
  },
)
af(No)
function hf(e, t = 'latest') {
  const r = Qs(e, t)
  return r.isRetained() ? r : (No(), Qs(e, t))
}
class Gn extends ln {
  constructor(t, r) {
    super(po(t.getStore_INTERNAL(), t.getStore_INTERNAL().getState().currentTree, !0), t.getStoreID()),
      Q(this, '_batch', void 0),
      Q(this, 'set', (n, s) => {
        this.checkRefCount_INTERNAL()
        const o = this.getStore_INTERNAL()
        this._batch(() => {
          Fr(o, n.key, 1), Js(this.getStore_INTERNAL(), n, s)
        })
      }),
      Q(this, 'reset', (n) => {
        this.checkRefCount_INTERNAL()
        const s = this.getStore_INTERNAL()
        this._batch(() => {
          Fr(s, n.key, 1), Js(this.getStore_INTERNAL(), n, rf)
        })
      }),
      Q(this, 'setUnvalidatedAtomValues_DEPRECATED', (n) => {
        this.checkRefCount_INTERNAL()
        const s = this.getStore_INTERNAL()
        Hn(() => {
          for (const [o, a] of n.entries()) Fr(s, o, 1), of(s, new nf(o), a)
        })
      }),
      (this._batch = r)
  }
}
var cn = { Snapshot: ln, MutableSnapshot: Gn, freshSnapshot: mf, cloneSnapshot: hf },
  vf = cn.Snapshot,
  bf = cn.MutableSnapshot,
  xf = cn.freshSnapshot,
  pf = cn.cloneSnapshot,
  un = Object.freeze({ __proto__: null, Snapshot: vf, MutableSnapshot: bf, freshSnapshot: xf, cloneSnapshot: pf })
function Nf(...e) {
  const t = new Set()
  for (const r of e) for (const n of r) t.add(n)
  return t
}
var gf = Nf
const { useRef: wf } = X
function yf(e) {
  const t = wf(e)
  return t.current === e && typeof e == 'function' && (t.current = e()), t
}
var ei = yf
const { getNextTreeStateVersion: Tf, makeEmptyStoreState: go } = Yi,
  {
    cleanUpNode: Ef,
    getDownstreamNodes: Df,
    initializeNode: Sf,
    setNodeValue: kf,
    setUnvalidatedAtomValue_DEPRECATED: Rf,
  } = ht,
  { graph: _f } = yr,
  { cloneGraph: Uf } = yr,
  { getNextStoreID: wo } = nn,
  { createMutableSource: An, reactMode: yo } = Ot,
  { applyAtomValueWrites: Cf } = rt,
  { releaseScheduledRetainablesNow: To } = Et,
  { freshSnapshot: Vf } = un,
  { useCallback: Af, useContext: Eo, useEffect: Kn, useMemo: jf, useRef: Wf, useState: Lf } = X
function Qt() {
  throw Z('This component must be used inside a <RecoilRoot> component.')
}
const Do = Object.freeze({
  storeID: wo(),
  getState: Qt,
  replaceState: Qt,
  getGraph: Qt,
  subscribeToTransactions: Qt,
  addTransactionMetadata: Qt,
})
let qn = !1
function ti(e) {
  if (qn)
    throw Z(
      'An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.',
    )
  const t = e.getState()
  if (t.nextTree === null) {
    ve('recoil_memory_managament_2020') &&
      ve('recoil_release_on_cascading_update_killswitch_2021') &&
      t.commitDepth > 0 &&
      To(e)
    const r = t.currentTree.version,
      n = Tf()
    ;(t.nextTree = { ...t.currentTree, version: n, stateID: n, dirtyAtoms: new Set(), transactionMetadata: {} }),
      t.graphsByVersion.set(n, Uf(we(t.graphsByVersion.get(r))))
  }
}
const So = X.createContext({ current: Do }),
  dn = () => Eo(So),
  ko = X.createContext(null)
function Mf() {
  const e = Eo(ko)
  return (
    e == null &&
      tn(
        'Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks.',
      ),
    e
  )
}
function xs(e, t, r) {
  const n = Df(e, r, r.dirtyAtoms)
  for (const s of n) {
    const o = t.nodeToComponentSubscriptions.get(s)
    if (o) for (const [a, [c, l]] of o) l(r)
  }
}
function Ro(e) {
  const t = e.getState(),
    r = t.currentTree,
    n = r.dirtyAtoms
  if (n.size) {
    for (const [s, o] of t.nodeTransactionSubscriptions) if (n.has(s)) for (const [a, c] of o) c(e)
    for (const [s, o] of t.transactionSubscriptions) o(e)
    ;(!yo().early || t.suspendedComponentResolvers.size > 0) &&
      (xs(e, t, r), t.suspendedComponentResolvers.forEach((s) => s()), t.suspendedComponentResolvers.clear())
  }
  t.queuedComponentCallbacks_DEPRECATED.forEach((s) => s(r)),
    t.queuedComponentCallbacks_DEPRECATED.splice(0, t.queuedComponentCallbacks_DEPRECATED.length)
}
function If(e) {
  const t = e.getState()
  t.commitDepth++
  try {
    const { nextTree: r } = t
    if (r == null) return
    ;(t.previousTree = t.currentTree),
      (t.currentTree = r),
      (t.nextTree = null),
      Ro(e),
      t.previousTree != null
        ? t.graphsByVersion.delete(t.previousTree.version)
        : Ue('Ended batch with no previous state, which is unexpected', 'recoil'),
      (t.previousTree = null),
      ve('recoil_memory_managament_2020') && r == null && To(e)
  } finally {
    t.commitDepth--
  }
}
function Pf({ setNotifyBatcherOfChange: e }) {
  const t = dn(),
    [, r] = Lf([])
  return (
    e(() => r({})),
    Kn(
      () => (
        e(() => r({})),
        () => {
          e(() => {})
        }
      ),
      [e],
    ),
    Kn(() => {
      vu.enqueueExecution('Batcher', () => {
        If(t.current)
      })
    }),
    null
  )
}
typeof window < 'u' && !window.$recoilDebugStates && (window.$recoilDebugStates = [])
function Of(e, t) {
  const r = go()
  return (
    t({
      set: (n, s) => {
        const o = r.currentTree,
          a = kf(e, o, n.key, s),
          c = new Set(a.keys()),
          l = o.nonvalidatedAtoms.clone()
        for (const u of c) l.delete(u)
        r.currentTree = { ...o, dirtyAtoms: gf(o.dirtyAtoms, c), atomValues: Cf(o.atomValues, a), nonvalidatedAtoms: l }
      },
      setUnvalidatedAtomValues: (n) => {
        n.forEach((s, o) => {
          r.currentTree = Rf(r.currentTree, o, s)
        })
      },
    }),
    r
  )
}
function $f(e) {
  const t = Vf(e),
    r = t.getStore_INTERNAL().getState()
  return t.retain(), r.nodeCleanupFunctions.forEach((n) => n()), r.nodeCleanupFunctions.clear(), r
}
let ri = 0
function Bf({ initializeState_DEPRECATED: e, initializeState: t, store_INTERNAL: r, children: n }) {
  let s
  const o = (_) => {
      const w = s.current.graphsByVersion
      if (w.has(_)) return we(w.get(_))
      const T = _f()
      return w.set(_, T), T
    },
    a = (_, w) => {
      if (w == null) {
        const { transactionSubscriptions: T } = v.current.getState(),
          D = ri++
        return (
          T.set(D, _),
          {
            release: () => {
              T.delete(D)
            },
          }
        )
      } else {
        const { nodeTransactionSubscriptions: T } = v.current.getState()
        T.has(w) || T.set(w, new Map())
        const D = ri++
        return (
          we(T.get(w)).set(D, _),
          {
            release: () => {
              const k = T.get(w)
              k && (k.delete(D), k.size === 0 && T.delete(w))
            },
          }
        )
      }
    },
    c = (_) => {
      ti(v.current)
      for (const w of Object.keys(_)) we(v.current.getState().nextTree).transactionMetadata[w] = _[w]
    },
    l = (_) => {
      ti(v.current)
      const w = we(s.current.nextTree)
      let T
      try {
        ;(qn = !0), (T = _(w))
      } finally {
        qn = !1
      }
      T !== w &&
        (typeof window < 'u' && window.$recoilDebugStates.push(T),
        (s.current.nextTree = T),
        yo().early && xs(v.current, s.current, T),
        we(u.current)())
    },
    u = Wf(null),
    d = Af(
      (_) => {
        u.current = _
      },
      [u],
    ),
    v = ei(
      () =>
        r ?? {
          storeID: wo(),
          getState: () => s.current,
          replaceState: l,
          getGraph: o,
          subscribeToTransactions: a,
          addTransactionMetadata: c,
        },
    )
  r != null && (v.current = r), (s = ei(() => (e != null ? Of(v.current, e) : t != null ? $f(t) : go())))
  const g = jf(() => (An == null ? void 0 : An(s, () => s.current.currentTree.version)), [s])
  return (
    Kn(() => {
      const _ = v.current
      for (const w of new Set(_.getState().knownAtoms)) Sf(_, w, 'get')
      return () => {
        for (const w of _.getState().knownAtoms) Ef(_, w)
      }
    }, [v]),
    X.createElement(
      So.Provider,
      { value: v },
      X.createElement(ko.Provider, { value: g }, X.createElement(Pf, { setNotifyBatcherOfChange: d }), n),
    )
  )
}
function Ff(e) {
  const { override: t, ...r } = e,
    n = dn()
  return t === !1 && n.current !== Do ? e.children : X.createElement(Bf, r)
}
function zf() {
  return dn().current.storeID
}
var ot = {
  RecoilRoot: Ff,
  useStoreRef: dn,
  useRecoilMutableSource: Mf,
  useRecoilStoreID: zf,
  notifyComponents_FOR_TESTING: xs,
  sendEndOfBatchNotifications_FOR_TESTING: Ro,
}
function Hf(e, t) {
  if (e === t) return !0
  if (e.length !== t.length) return !1
  for (let r = 0, n = e.length; r < n; r++) if (e[r] !== t[r]) return !1
  return !0
}
var Gf = Hf
const { useEffect: Kf, useRef: qf } = X
function Yf(e) {
  const t = qf()
  return (
    Kf(() => {
      t.current = e
    }),
    t.current
  )
}
var _o = Yf
const { useStoreRef: Xf } = ot,
  { SUSPENSE_TIMEOUT_MS: Zf } = Et,
  { updateRetainCount: er } = Et,
  { RetentionZone: Jf } = sn,
  { useEffect: Qf, useRef: em } = X,
  { isSSR: ni } = Er
function tm(e) {
  if (ve('recoil_memory_managament_2020')) return rm(e)
}
function rm(e) {
  const r = (Array.isArray(e) ? e : [e]).map((a) => (a instanceof Jf ? a : a.key)),
    n = Xf()
  Qf(() => {
    if (!ve('recoil_memory_managament_2020')) return
    const a = n.current
    if (s.current && !ni) window.clearTimeout(s.current), (s.current = null)
    else for (const c of r) er(a, c, 1)
    return () => {
      for (const c of r) er(a, c, -1)
    }
  }, [n, ...r])
  const s = em(),
    o = _o(r)
  if (!ni && (o === void 0 || !Gf(o, r))) {
    const a = n.current
    for (const c of r) er(a, c, 1)
    if (o) for (const c of o) er(a, c, -1)
    s.current && window.clearTimeout(s.current),
      (s.current = window.setTimeout(() => {
        s.current = null
        for (const c of r) er(a, c, -1)
      }, Zf))
  }
}
var ps = tm
function nm() {
  return '<component name not available>'
}
var Dr = nm
const { batchUpdates: sm } = an,
  { DEFAULT_VALUE: Uo } = Ie,
  {
    currentRendererSupportsUseSyncExternalStore: im,
    reactMode: Dt,
    useMutableSource: om,
    useSyncExternalStore: am,
  } = Ot,
  { useRecoilMutableSource: lm, useStoreRef: nt } = ot,
  { isRecoilValue: cm } = gt,
  {
    AbstractRecoilValue: Yn,
    getRecoilValueAsLoadable: Sr,
    setRecoilValue: Kr,
    setUnvalidatedRecoilValue: um,
    subscribeToRecoilValue: Wt,
  } = rt,
  { useCallback: Le, useEffect: Lt, useMemo: Co, useRef: ur, useState: Ns } = X,
  { setByAddingToSet: dm } = Zi,
  { isSSR: fm } = Er
function gs(e, t, r) {
  if (e.state === 'hasValue') return e.contents
  throw e.state === 'loading'
    ? new Promise((s) => {
        const o = r.current.getState().suspendedComponentResolvers
        o.add(s),
          fm &&
            he(e.contents) &&
            e.contents.finally(() => {
              o.delete(s)
            })
      })
    : e.state === 'hasError'
    ? e.contents
    : Z(`Invalid value of loadable atom "${t.key}"`)
}
function je(e, t) {
  if (!cm(e)) throw Z(`Invalid argument to ${t}: expected an atom or selector but got ${String(e)}`)
}
function mm() {
  const e = Dr(),
    t = nt(),
    [, r] = Ns([]),
    n = ur(new Set())
  n.current = new Set()
  const s = ur(new Set()),
    o = ur(new Map()),
    a = Le(
      (l) => {
        const u = o.current.get(l)
        u && (u.release(), o.current.delete(l))
      },
      [o],
    ),
    c = Le((l, u) => {
      o.current.has(u) && r([])
    }, [])
  return (
    Lt(() => {
      const l = t.current
      lr(n.current, s.current).forEach((u) => {
        if (o.current.has(u)) {
          tn(`Double subscription to RecoilValue "${u}"`)
          return
        }
        const d = Wt(l, new Yn(u), (g) => c(g, u), e)
        o.current.set(u, d),
          l.getState().nextTree
            ? l.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                c(l.getState(), u)
              })
            : c(l.getState(), u)
      }),
        lr(s.current, n.current).forEach((u) => {
          a(u)
        }),
        (s.current = n.current)
    }),
    Lt(() => {
      const l = o.current
      return (
        lr(n.current, new Set(l.keys())).forEach((u) => {
          const d = Wt(t.current, new Yn(u), (v) => c(v, u), e)
          l.set(u, d)
        }),
        () => l.forEach((u, d) => a(d))
      )
    }, [e, t, a, c]),
    Co(() => {
      function l(w) {
        return (
          je(w, 'useSetRecoilState'),
          (T) => {
            Kr(t.current, w, T)
          }
        )
      }
      function u(w) {
        return je(w, 'useResetRecoilState'), () => Kr(t.current, w, Uo)
      }
      function d(w) {
        var T
        je(w, 'useRecoilValueLoadable'), n.current.has(w.key) || (n.current = dm(n.current, w.key))
        const D = t.current.getState()
        return Sr(t.current, w, Dt().early && (T = D.nextTree) !== null && T !== void 0 ? T : D.currentTree)
      }
      function v(w) {
        je(w, 'useRecoilValue')
        const T = d(w)
        return gs(T, w, t)
      }
      function g(w) {
        return je(w, 'useRecoilState'), [v(w), l(w)]
      }
      function _(w) {
        return je(w, 'useRecoilStateLoadable'), [d(w), l(w)]
      }
      return {
        getRecoilValue: v,
        getRecoilValueLoadable: d,
        getRecoilState: g,
        getRecoilStateLoadable: _,
        getSetRecoilState: l,
        getResetRecoilState: u,
      }
    }, [n, t])
  )
}
const kr = { current: 0 }
function hm(e) {
  const t = nt(),
    r = Dr(),
    n = Le(() => {
      var c
      kr.current++
      const l = t.current,
        u = l.getState(),
        d = Dt().early && (c = u.nextTree) !== null && c !== void 0 ? c : u.currentTree
      return { loadable: Sr(l, e, d), key: e.key }
    }, [t, e]),
    s = Le((c) => {
      let l
      return () => {
        var u, d
        const v = c()
        return (u = l) !== null &&
          u !== void 0 &&
          u.loadable.is(v.loadable) &&
          ((d = l) === null || d === void 0 ? void 0 : d.key) === v.key
          ? l
          : ((l = v), v)
      }
    }, []),
    o = Co(() => s(n), [n, s]),
    a = Le(
      (c) => {
        const l = t.current
        return Wt(l, e, c, r).release
      },
      [t, e, r],
    )
  return am(a, o, o).loadable
}
function vm(e) {
  const t = nt(),
    r = Le(() => {
      var u
      const d = t.current,
        v = d.getState(),
        g = Dt().early && (u = v.nextTree) !== null && u !== void 0 ? u : v.currentTree
      return Sr(d, e, g)
    }, [t, e]),
    n = Le(() => (kr.current++, r()), [r]),
    s = Dr(),
    o = Le(
      (u, d) => {
        const v = t.current
        return Wt(
          v,
          e,
          () => {
            if (!ve('recoil_suppress_rerender_in_callback')) return d()
            const _ = r()
            l.current.is(_) || d(), (l.current = _)
          },
          s,
        ).release
      },
      [t, e, s, r],
    ),
    a = lm()
  if (a == null) throw Z('Recoil hooks must be used in components contained within a <RecoilRoot> component.')
  const c = om(a, n, o),
    l = ur(c)
  return (
    Lt(() => {
      l.current = c
    }),
    c
  )
}
function Xn(e) {
  const t = nt(),
    r = Dr(),
    n = Le(() => {
      var l
      kr.current++
      const u = t.current,
        d = u.getState(),
        v = Dt().early && (l = d.nextTree) !== null && l !== void 0 ? l : d.currentTree
      return Sr(u, e, v)
    }, [t, e]),
    s = Le(() => ({ loadable: n(), key: e.key }), [n, e.key]),
    o = Le(
      (l) => {
        const u = s()
        return l.loadable.is(u.loadable) && l.key === u.key ? l : u
      },
      [s],
    )
  Lt(() => {
    const l = Wt(
      t.current,
      e,
      (u) => {
        c(o)
      },
      r,
    )
    return c(o), l.release
  }, [r, e, t, o])
  const [a, c] = Ns(s)
  return a.key !== e.key ? s().loadable : a.loadable
}
function bm(e) {
  const t = nt(),
    [, r] = Ns([]),
    n = Dr(),
    s = Le(() => {
      var c
      kr.current++
      const l = t.current,
        u = l.getState(),
        d = Dt().early && (c = u.nextTree) !== null && c !== void 0 ? c : u.currentTree
      return Sr(l, e, d)
    }, [t, e]),
    o = s(),
    a = ur(o)
  return (
    Lt(() => {
      a.current = o
    }),
    Lt(() => {
      const c = t.current,
        l = c.getState(),
        u = Wt(
          c,
          e,
          (v) => {
            var g
            if (!ve('recoil_suppress_rerender_in_callback')) return r([])
            const _ = s()
            ;((g = a.current) !== null && g !== void 0 && g.is(_)) || r(_), (a.current = _)
          },
          n,
        )
      if (l.nextTree)
        c.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          ;(a.current = null), r([])
        })
      else {
        var d
        if (!ve('recoil_suppress_rerender_in_callback')) return r([])
        const v = s()
        ;((d = a.current) !== null && d !== void 0 && d.is(v)) || r(v), (a.current = v)
      }
      return u.release
    }, [n, s, e, t]),
    o
  )
}
function ws(e) {
  return (
    je(e, 'useRecoilValueLoadable'),
    ve('recoil_memory_managament_2020') && ps(e),
    { TRANSITION_SUPPORT: Xn, SYNC_EXTERNAL_STORE: im() ? hm : Xn, MUTABLE_SOURCE: vm, LEGACY: bm }[Dt().mode](e)
  )
}
function Vo(e) {
  je(e, 'useRecoilValue')
  const t = nt(),
    r = ws(e)
  return gs(r, e, t)
}
function fn(e) {
  je(e, 'useSetRecoilState')
  const t = nt()
  return Le(
    (r) => {
      Kr(t.current, e, r)
    },
    [t, e],
  )
}
function xm(e) {
  je(e, 'useResetRecoilState')
  const t = nt()
  return Le(() => {
    Kr(t.current, e, Uo)
  }, [t, e])
}
function pm(e) {
  return je(e, 'useRecoilState'), [Vo(e), fn(e)]
}
function Nm(e) {
  return je(e, 'useRecoilStateLoadable'), [ws(e), fn(e)]
}
function gm() {
  const e = nt()
  return (t, r = {}) => {
    sm(() => {
      e.current.addTransactionMetadata(r), t.forEach((n, s) => um(e.current, new Yn(s), n))
    })
  }
}
function Ao(e) {
  return (
    je(e, 'useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE'),
    Dt().early ||
      Ue(
        'Attepmt to use a hook with UNSTABLE_TRANSITION_SUPPORT in a rendering mode incompatible with concurrent rendering.  Try enabling the recoil_sync_external_store or recoil_transition_support GKs.',
      ),
    ve('recoil_memory_managament_2020') && ps(e),
    Xn(e)
  )
}
function jo(e) {
  je(e, 'useRecoilValue_TRANSITION_SUPPORT_UNSTABLE')
  const t = nt(),
    r = Ao(e)
  return gs(r, e, t)
}
function wm(e) {
  return je(e, 'useRecoilState_TRANSITION_SUPPORT_UNSTABLE'), [jo(e), fn(e)]
}
var ym = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: kr,
  useRecoilInterface: mm,
  useRecoilState: pm,
  useRecoilStateLoadable: Nm,
  useRecoilValue: Vo,
  useRecoilValueLoadable: ws,
  useResetRecoilState: xm,
  useSetRecoilState: fn,
  useSetUnvalidatedAtomValues: gm,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Ao,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: jo,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: wm,
}
function Tm(e, t) {
  const r = new Map()
  for (const [n, s] of e) t(s, n) && r.set(n, s)
  return r
}
var Em = Tm
function Dm(e, t) {
  const r = new Set()
  for (const n of e) t(n) && r.add(n)
  return r
}
var Sm = Dm
function km(...e) {
  const t = new Map()
  for (let r = 0; r < e.length; r++) {
    const n = e[r].keys()
    let s
    for (; !(s = n.next()).done; ) t.set(s.value, e[r].get(s.value))
  }
  return t
}
var Rm = km
const { batchUpdates: _m } = an,
  { DEFAULT_VALUE: Um, getNode: Wo, nodes: Cm } = Ie,
  { useStoreRef: ys } = ot,
  { AbstractRecoilValue: Vm, setRecoilValueLoadable: Am } = rt,
  { SUSPENSE_TIMEOUT_MS: jm } = Et,
  { cloneSnapshot: qr } = un,
  { useCallback: mn, useEffect: Lo, useRef: si, useState: Wm } = X,
  { isSSR: ii } = Er
function hn(e) {
  const t = ys()
  Lo(() => t.current.subscribeToTransactions(e).release, [e, t])
}
function oi(e) {
  const t = e.atomValues.toMap(),
    r = Gr(
      Em(t, (n, s) => {
        const a = Wo(s).persistence_UNSTABLE
        return a != null && a.type !== 'none' && n.state === 'hasValue'
      }),
      (n) => n.contents,
    )
  return Rm(e.nonvalidatedAtoms.toMap(), r)
}
function Lm(e) {
  hn(
    mn(
      (t) => {
        let r = t.getState().previousTree
        const n = t.getState().currentTree
        r ||
          (Ue('Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil'),
          (r = t.getState().currentTree))
        const s = oi(n),
          o = oi(r),
          a = Gr(Cm, (l) => {
            var u, d, v, g
            return {
              persistence_UNSTABLE: {
                type:
                  (u = (d = l.persistence_UNSTABLE) === null || d === void 0 ? void 0 : d.type) !== null && u !== void 0
                    ? u
                    : 'none',
                backButton:
                  (v = (g = l.persistence_UNSTABLE) === null || g === void 0 ? void 0 : g.backButton) !== null &&
                  v !== void 0
                    ? v
                    : !1,
              },
            }
          }),
          c = Sm(n.dirtyAtoms, (l) => s.has(l) || o.has(l))
        e({
          atomValues: s,
          previousAtomValues: o,
          atomInfo: a,
          modifiedAtoms: c,
          transactionMetadata: { ...n.transactionMetadata },
        })
      },
      [e],
    ),
  )
}
function Mm(e) {
  hn(
    mn(
      (t) => {
        const r = qr(t, 'latest'),
          n = qr(t, 'previous')
        e({ snapshot: r, previousSnapshot: n })
      },
      [e],
    ),
  )
}
function Im() {
  const e = ys(),
    [t, r] = Wm(() => qr(e.current)),
    n = _o(t),
    s = si(),
    o = si()
  if (
    (hn(mn((c) => r(qr(c)), [])),
    Lo(() => {
      const c = t.retain()
      if (s.current && !ii) {
        var l
        window.clearTimeout(s.current),
          (s.current = null),
          (l = o.current) === null || l === void 0 || l.call(o),
          (o.current = null)
      }
      return () => {
        window.setTimeout(c, 10)
      }
    }, [t]),
    n !== t && !ii)
  ) {
    if (s.current) {
      var a
      window.clearTimeout(s.current),
        (s.current = null),
        (a = o.current) === null || a === void 0 || a.call(o),
        (o.current = null)
    }
    ;(o.current = t.retain()),
      (s.current = window.setTimeout(() => {
        var c
        ;(s.current = null), (c = o.current) === null || c === void 0 || c.call(o), (o.current = null)
      }, jm))
  }
  return t
}
function Mo(e, t) {
  var r
  const n = e.getState(),
    s = (r = n.nextTree) !== null && r !== void 0 ? r : n.currentTree,
    o = t.getStore_INTERNAL().getState().currentTree
  _m(() => {
    const a = new Set()
    for (const u of [s.atomValues.keys(), o.atomValues.keys()])
      for (const d of u) {
        var c, l
        ;((c = s.atomValues.get(d)) === null || c === void 0 ? void 0 : c.contents) !==
          ((l = o.atomValues.get(d)) === null || l === void 0 ? void 0 : l.contents) &&
          Wo(d).shouldRestoreFromSnapshots &&
          a.add(d)
      }
    a.forEach((u) => {
      Am(e, new Vm(u), o.atomValues.has(u) ? we(o.atomValues.get(u)) : Um)
    }),
      e.replaceState((u) => ({ ...u, stateID: t.getID() }))
  })
}
function Pm() {
  const e = ys()
  return mn((t) => Mo(e.current, t), [e])
}
var Io = {
  useRecoilSnapshot: Im,
  gotoSnapshot: Mo,
  useGotoRecoilSnapshot: Pm,
  useRecoilTransactionObserver: Mm,
  useTransactionObservation_DEPRECATED: Lm,
  useTransactionSubscription_DEPRECATED: hn,
}
const { peekNodeInfo: Om } = ht,
  { useStoreRef: $m } = ot
function Bm() {
  const e = $m()
  return ({ key: t }) => Om(e.current, e.current.getState().currentTree, t)
}
var Fm = Bm
const { reactMode: zm } = Ot,
  { RecoilRoot: Hm, useStoreRef: Gm } = ot,
  { useMemo: Km } = X
function qm() {
  zm().mode === 'MUTABLE_SOURCE' &&
    console.warn(
      'Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.',
    )
  const e = Gm().current
  return Km(() => {
    function t({ children: r }) {
      return X.createElement(Hm, { store_INTERNAL: e }, r)
    }
    return t
  }, [e])
}
var Ym = qm
const { loadableWithValue: Xm } = wr,
  { initializeNode: Zm } = ht,
  { DEFAULT_VALUE: Jm, getNode: Qm } = Ie,
  { copyTreeState: eh, getRecoilValueAsLoadable: th, invalidateDownstreams: rh, writeLoadableToTreeState: nh } = rt
function ai(e) {
  return Qm(e.key).nodeType === 'atom'
}
class sh {
  constructor(t, r) {
    Q(this, '_store', void 0),
      Q(this, '_treeState', void 0),
      Q(this, '_changes', void 0),
      Q(this, 'get', (n) => {
        if (this._changes.has(n.key)) return this._changes.get(n.key)
        if (!ai(n)) throw Z('Reading selectors within atomicUpdate is not supported')
        const s = th(this._store, n, this._treeState)
        if (s.state === 'hasValue') return s.contents
        throw s.state === 'hasError'
          ? s.contents
          : Z(`Expected Recoil atom ${n.key} to have a value, but it is in a loading state.`)
      }),
      Q(this, 'set', (n, s) => {
        if (!ai(n)) throw Z('Setting selectors within atomicUpdate is not supported')
        if (typeof s == 'function') {
          const o = this.get(n)
          this._changes.set(n.key, s(o))
        } else Zm(this._store, n.key, 'set'), this._changes.set(n.key, s)
      }),
      Q(this, 'reset', (n) => {
        this.set(n, Jm)
      }),
      (this._store = t),
      (this._treeState = r),
      (this._changes = new Map())
  }
  newTreeState_INTERNAL() {
    if (this._changes.size === 0) return this._treeState
    const t = eh(this._treeState)
    for (const [r, n] of this._changes) nh(t, r, Xm(n))
    return rh(this._store, t), t
  }
}
function ih(e) {
  return (t) => {
    e.replaceState((r) => {
      const n = new sh(e, r)
      return t(n), n.newTreeState_INTERNAL()
    })
  }
}
var oh = { atomicUpdater: ih },
  ah = oh.atomicUpdater,
  Po = Object.freeze({ __proto__: null, atomicUpdater: ah })
function lh(e, t) {
  if (!e) throw new Error(t)
}
var ch = lh,
  ir = ch
const { atomicUpdater: uh } = Po,
  { batchUpdates: dh } = an,
  { DEFAULT_VALUE: fh } = Ie,
  { useStoreRef: mh } = ot,
  { refreshRecoilValue: hh, setRecoilValue: li } = rt,
  { cloneSnapshot: vh } = un,
  { gotoSnapshot: bh } = Io,
  { useCallback: xh } = X
class Oo {}
const ph = new Oo()
function $o(e, t, r, n) {
  let s = ph,
    o
  if (
    (dh(() => {
      const c =
        'useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.'
      if (typeof t != 'function') throw Z(c)
      const l = Ji(
          {
            ...(n ?? {}),
            set: (d, v) => li(e, d, v),
            reset: (d) => li(e, d, fh),
            refresh: (d) => hh(e, d),
            gotoSnapshot: (d) => bh(e, d),
            transact_UNSTABLE: (d) => uh(e)(d),
          },
          {
            snapshot: () => {
              const d = vh(e)
              return (o = d.retain()), d
            },
          },
        ),
        u = t(l)
      if (typeof u != 'function') throw Z(c)
      s = u(...r)
    }),
    s instanceof Oo && ir(!1, 'batchUpdates should return immediately'),
    he(s))
  )
    s = s.finally(() => {
      var c
      ;(c = o) === null || c === void 0 || c()
    })
  else {
    var a
    ;(a = o) === null || a === void 0 || a()
  }
  return s
}
function Nh(e, t) {
  const r = mh()
  return xh((...n) => $o(r.current, e, n), t != null ? [...t, r] : void 0)
}
var Bo = { recoilCallback: $o, useRecoilCallback: Nh }
const { useStoreRef: gh } = ot,
  { refreshRecoilValue: wh } = rt,
  { useCallback: yh } = X
function Th(e) {
  const t = gh()
  return yh(() => {
    const r = t.current
    wh(r, e)
  }, [e, t])
}
var Eh = Th
const { atomicUpdater: Dh } = Po,
  { useStoreRef: Sh } = ot,
  { useMemo: kh } = X
function Rh(e, t) {
  const r = Sh()
  return kh(
    () =>
      (...n) => {
        Dh(r.current)((o) => {
          e(o)(...n)
        })
      },
    t != null ? [...t, r] : void 0,
  )
}
var _h = Rh
class Uh {
  constructor(t) {
    Q(this, 'value', void 0), (this.value = t)
  }
}
var Ch = { WrappedValue: Uh },
  Vh = Ch.WrappedValue,
  Fo = Object.freeze({ __proto__: null, WrappedValue: Vh })
const { isFastRefreshEnabled: Ah } = Ot
class ci extends Error {}
class jh {
  constructor(t) {
    var r, n, s
    Q(this, '_name', void 0),
      Q(this, '_numLeafs', void 0),
      Q(this, '_root', void 0),
      Q(this, '_onHit', void 0),
      Q(this, '_onSet', void 0),
      Q(this, '_mapNodeValue', void 0),
      (this._name = t == null ? void 0 : t.name),
      (this._numLeafs = 0),
      (this._root = null),
      (this._onHit = (r = t == null ? void 0 : t.onHit) !== null && r !== void 0 ? r : () => {}),
      (this._onSet = (n = t == null ? void 0 : t.onSet) !== null && n !== void 0 ? n : () => {}),
      (this._mapNodeValue = (s = t == null ? void 0 : t.mapNodeValue) !== null && s !== void 0 ? s : (o) => o)
  }
  size() {
    return this._numLeafs
  }
  root() {
    return this._root
  }
  get(t, r) {
    var n
    return (n = this.getLeafNode(t, r)) === null || n === void 0 ? void 0 : n.value
  }
  getLeafNode(t, r) {
    if (this._root == null) return
    let n = this._root
    for (; n; ) {
      if ((r == null || r.onNodeVisit(n), n.type === 'leaf')) return this._onHit(n), n
      const s = this._mapNodeValue(t(n.nodeKey))
      n = n.branches.get(s)
    }
  }
  set(t, r, n) {
    const s = () => {
      var o, a, c, l
      let u, d
      for (const [D, k] of t) {
        var v, g, _
        const y = this._root
        if ((y == null ? void 0 : y.type) === 'leaf') throw this.invalidCacheError()
        const C = u
        if (
          ((u = C ? C.branches.get(d) : y),
          (u =
            (v = u) !== null && v !== void 0
              ? v
              : { type: 'branch', nodeKey: D, parent: C, branches: new Map(), branchKey: d }),
          u.type !== 'branch' || u.nodeKey !== D)
        )
          throw this.invalidCacheError()
        C == null || C.branches.set(d, u),
          n == null || (g = n.onNodeVisit) === null || g === void 0 || g.call(n, u),
          (d = this._mapNodeValue(k)),
          (this._root = (_ = this._root) !== null && _ !== void 0 ? _ : u)
      }
      const w = u ? ((o = u) === null || o === void 0 ? void 0 : o.branches.get(d)) : this._root
      if (w != null && (w.type !== 'leaf' || w.branchKey !== d)) throw this.invalidCacheError()
      const T = { type: 'leaf', value: r, parent: u, branchKey: d }
      ;(a = u) === null || a === void 0 || a.branches.set(d, T),
        (this._root = (c = this._root) !== null && c !== void 0 ? c : T),
        this._numLeafs++,
        this._onSet(T),
        n == null || (l = n.onNodeVisit) === null || l === void 0 || l.call(n, T)
    }
    try {
      s()
    } catch (o) {
      if (o instanceof ci) this.clear(), s()
      else throw o
    }
  }
  delete(t) {
    const r = this.root()
    if (!r) return !1
    if (t === r) return (this._root = null), (this._numLeafs = 0), !0
    let n = t.parent,
      s = t.branchKey
    for (; n; ) {
      var o
      if ((n.branches.delete(s), n === r))
        return n.branches.size === 0 ? ((this._root = null), (this._numLeafs = 0)) : this._numLeafs--, !0
      if (n.branches.size > 0) break
      ;(s = (o = n) === null || o === void 0 ? void 0 : o.branchKey), (n = n.parent)
    }
    for (; n !== r; n = n.parent) if (n == null) return !1
    return this._numLeafs--, !0
  }
  clear() {
    ;(this._numLeafs = 0), (this._root = null)
  }
  invalidCacheError() {
    const t = Ah()
      ? 'Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.'
      : 'Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.'
    throw (Ue(t + (this._name != null ? ` - ${this._name}` : '')), new ci())
  }
}
var Wh = { TreeCache: jh },
  Lh = Wh.TreeCache,
  zo = Object.freeze({ __proto__: null, TreeCache: Lh })
class Mh {
  constructor(t) {
    var r
    Q(this, '_maxSize', void 0),
      Q(this, '_size', void 0),
      Q(this, '_head', void 0),
      Q(this, '_tail', void 0),
      Q(this, '_map', void 0),
      Q(this, '_keyMapper', void 0),
      (this._maxSize = t.maxSize),
      (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map()),
      (this._keyMapper = (r = t.mapKey) !== null && r !== void 0 ? r : (n) => n)
  }
  head() {
    return this._head
  }
  tail() {
    return this._tail
  }
  size() {
    return this._size
  }
  maxSize() {
    return this._maxSize
  }
  has(t) {
    return this._map.has(this._keyMapper(t))
  }
  get(t) {
    const r = this._keyMapper(t),
      n = this._map.get(r)
    if (n) return this.set(t, n.value), n.value
  }
  set(t, r) {
    const n = this._keyMapper(t)
    this._map.get(n) && this.delete(t)
    const o = this.head(),
      a = { key: t, right: o, left: null, value: r }
    o ? (o.left = a) : (this._tail = a), this._map.set(n, a), (this._head = a), this._size++, this._maybeDeleteLRU()
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru()
  }
  deleteLru() {
    const t = this.tail()
    t && this.delete(t.key)
  }
  delete(t) {
    const r = this._keyMapper(t)
    if (!this._size || !this._map.has(r)) return
    const n = we(this._map.get(r)),
      s = n.right,
      o = n.left
    s && (s.left = n.left),
      o && (o.right = n.right),
      n === this.head() && (this._head = s),
      n === this.tail() && (this._tail = o),
      this._map.delete(r),
      this._size--
  }
  clear() {
    ;(this._size = 0), (this._head = null), (this._tail = null), (this._map = new Map())
  }
}
var Ih = { LRUCache: Mh },
  Ph = Ih.LRUCache,
  Ho = Object.freeze({ __proto__: null, LRUCache: Ph })
const { LRUCache: Oh } = Ho,
  { TreeCache: $h } = zo
function Bh({ name: e, maxSize: t, mapNodeValue: r = (n) => n }) {
  const n = new Oh({ maxSize: t }),
    s = new $h({
      name: e,
      mapNodeValue: r,
      onHit: (o) => {
        n.set(o, !0)
      },
      onSet: (o) => {
        const a = n.tail()
        n.set(o, !0), a && s.size() > t && s.delete(a.key)
      },
    })
  return s
}
var ui = Bh
const Fh = 15
function Fe(e, t, r) {
  if (typeof e == 'string' && !e.includes('"') && !e.includes('\\')) return `"${e}"`
  switch (typeof e) {
    case 'undefined':
      return ''
    case 'boolean':
      return e ? 'true' : 'false'
    case 'number':
    case 'symbol':
      return String(e)
    case 'string':
      return JSON.stringify(e)
    case 'function':
      if ((t == null ? void 0 : t.allowFunctions) !== !0) throw Z('Attempt to serialize function in a Recoil cache key')
      return `__FUNCTION(${e.name})__`
  }
  if (e === null) return 'null'
  if (typeof e != 'object') {
    var n
    return (n = JSON.stringify(e)) !== null && n !== void 0 ? n : ''
  }
  if (he(e)) return '__PROMISE__'
  if (Array.isArray(e)) return `[${e.map((s, o) => Fe(s, t, o.toString()))}]`
  if (typeof e.toJSON == 'function') return Fe(e.toJSON(r), t, r)
  if (e instanceof Map) {
    const s = {}
    for (const [o, a] of e) s[typeof o == 'string' ? o : Fe(o, t)] = a
    return Fe(s, t, r)
  }
  return e instanceof Set
    ? Fe(
        Array.from(e).sort((s, o) => Fe(s, t).localeCompare(Fe(o, t))),
        t,
        r,
      )
    : Symbol !== void 0 && e[Symbol.iterator] != null && typeof e[Symbol.iterator] == 'function'
    ? Fe(Array.from(e), t, r)
    : `{${Object.keys(e)
        .filter((s) => e[s] !== void 0)
        .sort()
        .map((s) => `${Fe(s, t)}:${Fe(e[s], t, s)}`)
        .join(',')}}`
}
function zh(e, t = { allowFunctions: !1 }) {
  if (typeof window < 'u') {
    const r = window.performance ? window.performance.now() : 0,
      n = Fe(e, t),
      s = window.performance ? window.performance.now() : 0
    return (
      s - r > Fh &&
        (console.groupCollapsed(`Recoil: Spent ${s - r}ms computing a cache key`),
        console.warn(e, n),
        console.groupEnd()),
      n
    )
  }
  return Fe(e, t)
}
var vn = zh
const { TreeCache: Hh } = zo,
  Lr = { equality: 'reference', eviction: 'keep-all', maxSize: 1 / 0 }
function Gh({ equality: e = Lr.equality, eviction: t = Lr.eviction, maxSize: r = Lr.maxSize } = Lr, n) {
  const s = Kh(e)
  return qh(t, r, s, n)
}
function Kh(e) {
  switch (e) {
    case 'reference':
      return (t) => t
    case 'value':
      return (t) => vn(t)
  }
  throw Z(`Unrecognized equality policy ${e}`)
}
function qh(e, t, r, n) {
  switch (e) {
    case 'keep-all':
      return new Hh({ name: n, mapNodeValue: r })
    case 'lru':
      return ui({ name: n, maxSize: we(t), mapNodeValue: r })
    case 'most-recent':
      return ui({ name: n, maxSize: 1, mapNodeValue: r })
  }
  throw Z(`Unrecognized eviction policy ${e}`)
}
var Yh = Gh
function Xh(e) {
  var t, r
  if (typeof window > 'u') return !1
  const s =
    (r = (e != null ? ((t = e.ownerDocument) !== null && t !== void 0 ? t : e) : document).defaultView) !== null &&
    r !== void 0
      ? r
      : window
  return (
    e != null &&
    (typeof s.Node == 'function'
      ? e instanceof s.Node
      : typeof e == 'object' && typeof e.nodeType == 'number' && typeof e.nodeName == 'string')
  )
}
var Zh = Xh
const { isReactNative: Jh, isWindow: Qh } = Er
function ev(e) {
  if (e === null || typeof e != 'object') return !0
  switch (typeof e.$$typeof) {
    case 'symbol':
      return !0
    case 'number':
      return !0
  }
  return !!(
    e['@@__IMMUTABLE_ITERABLE__@@'] != null ||
    e['@@__IMMUTABLE_KEYED__@@'] != null ||
    e['@@__IMMUTABLE_INDEXED__@@'] != null ||
    e['@@__IMMUTABLE_ORDERED__@@'] != null ||
    e['@@__IMMUTABLE_RECORD__@@'] != null ||
    Zh(e) ||
    he(e) ||
    e instanceof Error ||
    ArrayBuffer.isView(e) ||
    (!Jh && Qh(e))
  )
}
function Go(e) {
  if (!(typeof e != 'object' || ev(e))) {
    Object.freeze(e)
    for (const t in e)
      if (Object.prototype.hasOwnProperty.call(e, t)) {
        const r = e[t]
        typeof r == 'object' && r != null && !Object.isFrozen(r) && Go(r)
      }
    Object.seal(e)
  }
}
var Zn = Go
function tv(e) {
  return () => null
}
var rv = { startPerfBlock: tv }
const { isLoadable: nv, loadableWithError: Mr, loadableWithPromise: sv, loadableWithValue: jn } = wr,
  { WrappedValue: Ko } = Fo,
  { getNodeLoadable: Ir, peekNodeLoadable: iv, setNodeValue: ov } = ht,
  { saveDepsToStore: av } = yr,
  { DEFAULT_VALUE: lv, getConfigDeletionHandler: cv, getNode: uv, registerNode: di } = Ie,
  { isRecoilValue: dv } = gt,
  { markRecoilValueModified: fi } = rt,
  { retainedByOptionWithDefault: fv } = Et,
  { recoilCallback: mv } = Bo,
  { startPerfBlock: hv } = rv
class qo {}
const tr = new qo(),
  rr = [],
  Pr = new Map(),
  vv = (() => {
    let e = 0
    return () => e++
  })()
function Yo(e) {
  let t = null
  const { key: r, get: n, cachePolicy_UNSTABLE: s } = e,
    o = e.set != null ? e.set : void 0
  {
    if (typeof r != 'string')
      throw Z('A key option with a unique string value must be provided when creating a selector.')
    if (typeof n != 'function') throw Z('Selectors must specify a get callback option to get the selector value.')
  }
  const a = new Set(),
    c = Yh(s ?? { equality: 'reference', eviction: 'keep-all' }, r),
    l = fv(e.retainedBy_UNSTABLE),
    u = new Map()
  let d = 0
  function v() {
    return !ve('recoil_memory_managament_2020') || d > 0
  }
  function g(x) {
    return (
      x.getState().knownSelectors.add(r),
      d++,
      () => {
        d--
      }
    )
  }
  function _() {
    return cv(r) !== void 0 && !v()
  }
  function w(x, U, V, F, M) {
    Ge(U, F, M), T(x, V)
  }
  function T(x, U) {
    ye(x, U) && de(x), k(U, !0)
  }
  function D(x, U) {
    ye(x, U) && (we(J(x)).stateVersions.clear(), k(U, !1))
  }
  function k(x, U) {
    const V = Pr.get(x)
    if (V != null) {
      for (const F of V) fi(F, we(t))
      U && Pr.delete(x)
    }
  }
  function y(x, U) {
    let V = Pr.get(U)
    V == null && Pr.set(U, (V = new Set())), V.add(x)
  }
  function C(x, U, V, F, M, ne) {
    return U.then((oe) => {
      if (!v()) throw (de(x), tr)
      const B = jn(oe)
      return w(x, V, M, B, F), oe
    }).catch((oe) => {
      if (!v()) throw (de(x), tr)
      if (he(oe)) return Y(x, oe, V, F, M, ne)
      const B = Mr(oe)
      throw (w(x, V, M, B, F), oe)
    })
  }
  function Y(x, U, V, F, M, ne) {
    return U.then((oe) => {
      if (!v()) throw (de(x), tr)
      ne.loadingDepKey != null && ne.loadingDepPromise === U
        ? V.atomValues.set(ne.loadingDepKey, jn(oe))
        : x.getState().knownSelectors.forEach((ce) => {
            V.atomValues.delete(ce)
          })
      const B = L(x, V)
      if (B && B.state !== 'loading') {
        if (((ye(x, M) || J(x) == null) && T(x, M), B.state === 'hasValue')) return B.contents
        throw B.contents
      }
      if (!ye(x, M)) {
        const ce = q(x, V)
        if (ce != null) return ce.loadingLoadable.contents
      }
      const [be, ue] = p(x, V, M)
      if ((be.state !== 'loading' && w(x, V, M, be, ue), be.state === 'hasError')) throw be.contents
      return be.contents
    }).catch((oe) => {
      if (oe instanceof qo) throw tr
      if (!v()) throw (de(x), tr)
      const B = Mr(oe)
      throw (w(x, V, M, B, F), oe)
    })
  }
  function K(x, U, V, F) {
    var M, ne, oe, B
    if (
      ye(x, F) ||
      U.version ===
        ((M = x.getState()) === null || M === void 0 || (ne = M.currentTree) === null || ne === void 0
          ? void 0
          : ne.version) ||
      U.version ===
        ((oe = x.getState()) === null || oe === void 0 || (B = oe.nextTree) === null || B === void 0
          ? void 0
          : B.version)
    ) {
      var be, ue, ce
      av(
        r,
        V,
        x,
        (be =
          (ue = x.getState()) === null || ue === void 0 || (ce = ue.nextTree) === null || ce === void 0
            ? void 0
            : ce.version) !== null && be !== void 0
          ? be
          : x.getState().currentTree.version,
      )
    }
    for (const xe of V) a.add(xe)
  }
  function p(x, U, V) {
    const F = hv(r)
    let M = !0,
      ne = !0
    const oe = () => {
      F(), (ne = !1)
    }
    let B,
      be = !1,
      ue
    const ce = { loadingDepKey: null, loadingDepPromise: null },
      xe = new Map()
    function We({ key: Ce }) {
      const Ae = Ir(x, U, Ce)
      switch ((xe.set(Ce, Ae), M || (K(x, U, new Set(xe.keys()), V), D(x, V)), Ae.state)) {
        case 'hasValue':
          return Ae.contents
        case 'hasError':
          throw Ae.contents
        case 'loading':
          throw ((ce.loadingDepKey = Ce), (ce.loadingDepPromise = Ae.contents), Ae.contents)
      }
      throw Z('Invalid Loadable state')
    }
    const Ve =
      (Ce) =>
      (...Ae) => {
        if (ne)
          throw Z(
            'Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.',
          )
        return t == null && ir(!1, 'Recoil Value can never be null'), mv(x, Ce, Ae, { node: t })
      }
    try {
      ;(B = n({ get: We, getCallback: Ve })),
        (B = dv(B) ? We(B) : B),
        nv(B) && (B.state === 'hasError' && (be = !0), (B = B.contents)),
        he(B) ? (B = C(x, B, U, xe, V, ce).finally(oe)) : oe(),
        (B = B instanceof Ko ? B.value : B)
    } catch (Ce) {
      ;(B = Ce), he(B) ? (B = Y(x, B, U, xe, V, ce).finally(oe)) : ((be = !0), oe())
    }
    return (
      be ? (ue = Mr(B)) : he(B) ? (ue = sv(B)) : (ue = jn(B)),
      (M = !1),
      ke(x, V, xe),
      K(x, U, new Set(xe.keys()), V),
      [ue, xe]
    )
  }
  function L(x, U) {
    let V = U.atomValues.get(r)
    if (V != null) return V
    const F = new Set()
    try {
      V = c.get((ne) => (typeof ne != 'string' && ir(!1, 'Cache nodeKey is type string'), Ir(x, U, ne).contents), {
        onNodeVisit: (ne) => {
          ne.type === 'branch' && ne.nodeKey !== r && F.add(ne.nodeKey)
        },
      })
    } catch (ne) {
      throw Z(`Problem with cache lookup for selector "${r}": ${ne.message}`)
    }
    if (V) {
      var M
      U.atomValues.set(r, V), K(x, U, F, (M = J(x)) === null || M === void 0 ? void 0 : M.executionID)
    }
    return V
  }
  function ee(x, U) {
    const V = L(x, U)
    if (V != null) return de(x), V
    const F = q(x, U)
    if (F != null) {
      var M
      return (
        ((M = F.loadingLoadable) === null || M === void 0 ? void 0 : M.state) === 'loading' && y(x, F.executionID),
        F.loadingLoadable
      )
    }
    const ne = vv(),
      [oe, B] = p(x, U, ne)
    return oe.state === 'loading' ? (le(x, ne, oe, B, U), y(x, ne)) : (de(x), Ge(U, oe, B)), oe
  }
  function q(x, U) {
    const V = bo([
      u.has(x) ? [we(u.get(x))] : [],
      rn(
        ms(u, ([M]) => M !== x),
        ([, M]) => M,
      ),
    ])
    function F(M) {
      for (const [ne, oe] of M) if (!Ir(x, U, ne).is(oe)) return !0
      return !1
    }
    for (const M of V) {
      if (M.stateVersions.get(U.version) || !F(M.depValuesDiscoveredSoFarDuringAsyncWork))
        return M.stateVersions.set(U.version, !0), M
      M.stateVersions.set(U.version, !1)
    }
  }
  function J(x) {
    return u.get(x)
  }
  function le(x, U, V, F, M) {
    u.set(x, {
      depValuesDiscoveredSoFarDuringAsyncWork: F,
      executionID: U,
      loadingLoadable: V,
      stateVersions: new Map([[M.version, !0]]),
    })
  }
  function ke(x, U, V) {
    if (ye(x, U)) {
      const F = J(x)
      F != null && (F.depValuesDiscoveredSoFarDuringAsyncWork = V)
    }
  }
  function de(x) {
    u.delete(x)
  }
  function ye(x, U) {
    var V
    return U === ((V = J(x)) === null || V === void 0 ? void 0 : V.executionID)
  }
  function He(x) {
    return Array.from(x.entries()).map(([U, V]) => [U, V.contents])
  }
  function Ge(x, U, V) {
    U.state !== 'loading' && !e.dangerouslyAllowMutability && Zn(U.contents), x.atomValues.set(r, U)
    try {
      c.set(He(V), U)
    } catch (F) {
      throw Z(`Problem with setting cache for selector "${r}": ${F.message}`)
    }
  }
  function fe(x) {
    if (rr.includes(r)) {
      const U = `Recoil selector has circular dependencies: ${rr.slice(rr.indexOf(r)).join(' → ')}`
      return Mr(Z(U))
    }
    rr.push(r)
    try {
      return x()
    } finally {
      rr.pop()
    }
  }
  function Ke(x, U) {
    const V = U.atomValues.get(r)
    return (
      V ??
      c.get((F) => {
        var M
        return (
          typeof F != 'string' && ir(!1, 'Cache nodeKey is type string'),
          (M = iv(x, U, F)) === null || M === void 0 ? void 0 : M.contents
        )
      })
    )
  }
  function Oe(x, U) {
    return fe(() => ee(x, U))
  }
  function ie(x) {
    x.atomValues.delete(r)
  }
  function re(x, U) {
    t == null && ir(!1, 'Recoil Value can never be null')
    for (const F of a) {
      var V
      const M = uv(F)
      ;(V = M.clearCache) === null || V === void 0 || V.call(M, x, U)
    }
    a.clear(), ie(U), c.clear(), fi(x, t)
  }
  return o != null
    ? (t = di({
        key: r,
        nodeType: 'selector',
        peek: Ke,
        get: Oe,
        set: (U, V, F) => {
          let M = !1
          const ne = new Map()
          function oe({ key: ce }) {
            if (M) throw Z('Recoil: Async selector sets are not currently supported.')
            const xe = Ir(U, V, ce)
            if (xe.state === 'hasValue') return xe.contents
            if (xe.state === 'loading') {
              const We = `Getting value of asynchronous atom or selector "${ce}" in a pending state while setting selector "${r}" is not yet supported.`
              throw (Ue(We), Z(We))
            } else throw xe.contents
          }
          function B(ce, xe) {
            if (M) {
              const Ce = 'Recoil: Async selector sets are not currently supported.'
              throw (Ue(Ce), Z(Ce))
            }
            const We = typeof xe == 'function' ? xe(oe(ce)) : xe
            ov(U, V, ce.key, We).forEach((Ce, Ae) => ne.set(Ae, Ce))
          }
          function be(ce) {
            B(ce, lv)
          }
          const ue = o({ set: B, get: oe, reset: be }, F)
          if (ue !== void 0)
            throw he(ue)
              ? Z('Recoil: Async selector sets are not currently supported.')
              : Z('Recoil: selector set should be a void function.')
          return (M = !0), ne
        },
        init: g,
        invalidate: ie,
        clearCache: re,
        shouldDeleteConfigOnRelease: _,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: l,
      }))
    : (t = di({
        key: r,
        nodeType: 'selector',
        peek: Ke,
        get: Oe,
        init: g,
        invalidate: ie,
        clearCache: re,
        shouldDeleteConfigOnRelease: _,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: l,
      }))
}
Yo.value = (e) => new Ko(e)
var Mt = Yo
const { isLoadable: bv, loadableWithError: Wn, loadableWithPromise: Ln, loadableWithValue: Ut } = wr,
  { WrappedValue: Xo } = Fo,
  { peekNodeInfo: xv } = ht,
  {
    DEFAULT_VALUE: xt,
    DefaultValue: ut,
    getConfigDeletionHandler: Zo,
    registerNode: pv,
    setConfigDeletionHandler: Nv,
  } = Ie,
  { isRecoilValue: gv } = gt,
  { getRecoilValueAsLoadable: wv, markRecoilValueModified: yv, setRecoilValue: mi, setRecoilValueLoadable: Tv } = rt,
  { retainedByOptionWithDefault: Ev } = Et,
  nr = (e) => (e instanceof Xo ? e.value : e)
function Dv(e) {
  const { key: t, persistence_UNSTABLE: r } = e,
    n = Ev(e.retainedBy_UNSTABLE)
  let s = 0
  function o(y) {
    return Ln(
      y
        .then((C) => ((a = Ut(C)), C))
        .catch((C) => {
          throw ((a = Wn(C)), C)
        }),
    )
  }
  let a = he(e.default)
    ? o(e.default)
    : bv(e.default)
    ? e.default.state === 'loading'
      ? o(e.default.contents)
      : e.default
    : Ut(nr(e.default))
  u(a.contents)
  let c
  const l = new Map()
  function u(y) {
    return e.dangerouslyAllowMutability !== !0 ? (he(y) ? y.then((C) => (Zn(C), C)) : (Zn(y), y)) : y
  }
  function d(y, C) {
    const Y = C.then((K) => {
      var p, L
      return (
        ((L = ((p = y.getState().nextTree) !== null && p !== void 0 ? p : y.getState().currentTree).atomValues.get(
          t,
        )) === null || L === void 0
          ? void 0
          : L.contents) === Y && mi(y, k, K),
        K
      )
    }).catch((K) => {
      var p, L
      throw (
        (((L = ((p = y.getState().nextTree) !== null && p !== void 0 ? p : y.getState().currentTree).atomValues.get(
          t,
        )) === null || L === void 0
          ? void 0
          : L.contents) === Y && Tv(y, k, Wn(K)),
        K)
      )
    })
    return Y
  }
  function v(y, C, Y) {
    var K
    s++
    const p = () => {
      var J
      s--, (J = l.get(y)) === null || J === void 0 || J.forEach((le) => le()), l.delete(y)
    }
    if ((y.getState().knownAtoms.add(t), a.state === 'loading')) {
      const J = () => {
        var le
        ;((le = y.getState().nextTree) !== null && le !== void 0 ? le : y.getState().currentTree).atomValues.has(t) ||
          yv(y, k)
      }
      a.contents.finally(J)
    }
    const L = (K = e.effects) !== null && K !== void 0 ? K : e.effects_UNSTABLE
    if (L != null) {
      let ye = function (ie) {
          if (le && ie.key === t) {
            const re = J
            return re instanceof ut
              ? g(y, C)
              : he(re)
              ? Ln(re.then((x) => (x instanceof ut ? a.toPromise() : x)))
              : Ut(re)
          }
          return wv(y, ie)
        },
        He = function (ie) {
          return ye(ie).toPromise()
        },
        Ge = function (ie) {
          var re
          const x = xv(
            y,
            (re = y.getState().nextTree) !== null && re !== void 0 ? re : y.getState().currentTree,
            ie.key,
          )
          return le && ie.key === t && !(J instanceof ut) ? { ...x, isSet: !0, loadable: ye(ie) } : x
        },
        J = xt,
        le = !0,
        ke = !1,
        de = null
      const fe = (ie) => (re) => {
          if (le) {
            const x = ye(k),
              U = x.state === 'hasValue' ? x.contents : xt
            ;(J = typeof re == 'function' ? re(U) : re),
              he(J) && (J = J.then((V) => ((de = { effect: ie, value: V }), V)))
          } else {
            if (he(re)) throw Z('Setting atoms to async values is not implemented.')
            typeof re != 'function' && (de = { effect: ie, value: nr(re) }),
              mi(
                y,
                k,
                typeof re == 'function'
                  ? (x) => {
                      const U = nr(re(x))
                      return (de = { effect: ie, value: U }), U
                    }
                  : nr(re),
              )
          }
        },
        Ke = (ie) => () => fe(ie)(xt),
        Oe = (ie) => (re) => {
          var x
          const { release: U } = y.subscribeToTransactions((V) => {
            var F
            let { currentTree: M, previousTree: ne } = V.getState()
            ne ||
              (Ue('Transaction subscribers notified without a next tree being present -- this is a bug in Recoil'),
              (ne = M))
            const oe = (F = M.atomValues.get(t)) !== null && F !== void 0 ? F : a
            if (oe.state === 'hasValue') {
              var B, be, ue, ce
              const xe = oe.contents,
                We = (B = ne.atomValues.get(t)) !== null && B !== void 0 ? B : a,
                Ve = We.state === 'hasValue' ? We.contents : xt
              ;((be = de) === null || be === void 0 ? void 0 : be.effect) !== ie ||
              ((ue = de) === null || ue === void 0 ? void 0 : ue.value) !== xe
                ? re(xe, Ve, !M.atomValues.has(t))
                : ((ce = de) === null || ce === void 0 ? void 0 : ce.effect) === ie && (de = null)
            }
          }, t)
          l.set(y, [...((x = l.get(y)) !== null && x !== void 0 ? x : []), U])
        }
      for (const ie of L)
        try {
          const re = ie({
            node: k,
            storeID: y.storeID,
            parentStoreID_UNSTABLE: y.parentStoreID,
            trigger: Y,
            setSelf: fe(ie),
            resetSelf: Ke(ie),
            onSet: Oe(ie),
            getPromise: He,
            getLoadable: ye,
            getInfo_UNSTABLE: Ge,
          })
          if (re != null) {
            var ee
            l.set(y, [...((ee = l.get(y)) !== null && ee !== void 0 ? ee : []), re])
          }
        } catch (re) {
          ;(J = re), (ke = !0)
        }
      if (((le = !1), !(J instanceof ut))) {
        var q
        const ie = ke ? Wn(J) : he(J) ? Ln(d(y, J)) : Ut(nr(J))
        u(ie.contents),
          C.atomValues.set(t, ie),
          (q = y.getState().nextTree) === null || q === void 0 || q.atomValues.set(t, ie)
      }
    }
    return p
  }
  function g(y, C) {
    var Y, K
    return (Y = (K = C.atomValues.get(t)) !== null && K !== void 0 ? K : c) !== null && Y !== void 0 ? Y : a
  }
  function _(y, C) {
    if (C.atomValues.has(t)) return we(C.atomValues.get(t))
    if (C.nonvalidatedAtoms.has(t)) {
      if (c != null) return c
      if (r == null)
        return tn(`Tried to restore a persisted value for atom ${t} but it has no persistence settings.`), a
      const Y = C.nonvalidatedAtoms.get(t),
        K = r.validator(Y, xt)
      return (c = K instanceof ut ? a : Ut(K)), c
    } else return a
  }
  function w() {
    c = void 0
  }
  function T(y, C, Y) {
    if (C.atomValues.has(t)) {
      const K = we(C.atomValues.get(t))
      if (K.state === 'hasValue' && Y === K.contents) return new Map()
    } else if (!C.nonvalidatedAtoms.has(t) && Y instanceof ut) return new Map()
    return u(Y), (c = void 0), new Map().set(t, Ut(Y))
  }
  function D() {
    return Zo(t) !== void 0 && s <= 0
  }
  const k = pv({
    key: t,
    nodeType: 'atom',
    peek: g,
    get: _,
    set: T,
    init: v,
    invalidate: w,
    shouldDeleteConfigOnRelease: D,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    persistence_UNSTABLE: e.persistence_UNSTABLE
      ? { type: e.persistence_UNSTABLE.type, backButton: e.persistence_UNSTABLE.backButton }
      : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: n,
  })
  return k
}
function Ts(e) {
  if (typeof e.key != 'string')
    throw Z('A key option with a unique string value must be provided when creating an atom.')
  const { ...t } = e,
    r = 'default' in e ? e.default : new Promise(() => {})
  return gv(r) ? Sv({ ...t, default: r }) : Dv({ ...t, default: r })
}
function Sv(e) {
  const t = Ts({
      ...e,
      default: xt,
      persistence_UNSTABLE:
        e.persistence_UNSTABLE === void 0
          ? void 0
          : {
              ...e.persistence_UNSTABLE,
              validator: (n) => (n instanceof ut ? n : we(e.persistence_UNSTABLE).validator(n, xt)),
            },
      effects: e.effects,
      effects_UNSTABLE: e.effects_UNSTABLE,
    }),
    r = Mt({
      key: `${e.key}__withFallback`,
      get: ({ get: n }) => {
        const s = n(t)
        return s instanceof ut ? e.default : s
      },
      set: ({ set: n }, s) => n(t, s),
      cachePolicy_UNSTABLE: { eviction: 'most-recent' },
      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    })
  return Nv(r.key, Zo(e.key)), r
}
Ts.value = (e) => new Xo(e)
var Jo = Ts
class kv {
  constructor(t) {
    var r
    Q(this, '_map', void 0),
      Q(this, '_keyMapper', void 0),
      (this._map = new Map()),
      (this._keyMapper = (r = t == null ? void 0 : t.mapKey) !== null && r !== void 0 ? r : (n) => n)
  }
  size() {
    return this._map.size
  }
  has(t) {
    return this._map.has(this._keyMapper(t))
  }
  get(t) {
    return this._map.get(this._keyMapper(t))
  }
  set(t, r) {
    this._map.set(this._keyMapper(t), r)
  }
  delete(t) {
    this._map.delete(this._keyMapper(t))
  }
  clear() {
    this._map.clear()
  }
}
var Rv = { MapCache: kv },
  _v = Rv.MapCache,
  Uv = Object.freeze({ __proto__: null, MapCache: _v })
const { LRUCache: hi } = Ho,
  { MapCache: Cv } = Uv,
  Or = { equality: 'reference', eviction: 'none', maxSize: 1 / 0 }
function Vv({ equality: e = Or.equality, eviction: t = Or.eviction, maxSize: r = Or.maxSize } = Or) {
  const n = Av(e)
  return jv(t, r, n)
}
function Av(e) {
  switch (e) {
    case 'reference':
      return (t) => t
    case 'value':
      return (t) => vn(t)
  }
  throw Z(`Unrecognized equality policy ${e}`)
}
function jv(e, t, r) {
  switch (e) {
    case 'keep-all':
      return new Cv({ mapKey: r })
    case 'lru':
      return new hi({ mapKey: r, maxSize: we(t) })
    case 'most-recent':
      return new hi({ mapKey: r, maxSize: 1 })
  }
  throw Z(`Unrecognized eviction policy ${e}`)
}
var Qo = Vv
const { setConfigDeletionHandler: Wv } = Ie
function Lv(e) {
  var t, r
  const n = Qo({
    equality:
      (t = (r = e.cachePolicyForParams_UNSTABLE) === null || r === void 0 ? void 0 : r.equality) !== null &&
      t !== void 0
        ? t
        : 'value',
    eviction: 'keep-all',
  })
  return (s) => {
    var o, a
    const c = n.get(s)
    if (c != null) return c
    const { cachePolicyForParams_UNSTABLE: l, ...u } = e,
      d = 'default' in e ? e.default : new Promise(() => {}),
      v = Jo({
        ...u,
        key: `${e.key}__${(o = vn(s)) !== null && o !== void 0 ? o : 'void'}`,
        default: typeof d == 'function' ? d(s) : d,
        retainedBy_UNSTABLE:
          typeof e.retainedBy_UNSTABLE == 'function' ? e.retainedBy_UNSTABLE(s) : e.retainedBy_UNSTABLE,
        effects:
          typeof e.effects == 'function'
            ? e.effects(s)
            : typeof e.effects_UNSTABLE == 'function'
            ? e.effects_UNSTABLE(s)
            : (a = e.effects) !== null && a !== void 0
            ? a
            : e.effects_UNSTABLE,
      })
    return (
      n.set(s, v),
      Wv(v.key, () => {
        n.delete(s)
      }),
      v
    )
  }
}
var Mv = Lv
const { setConfigDeletionHandler: Iv } = Ie
let Pv = 0
function Ov(e) {
  var t, r
  const n = Qo({
    equality:
      (t = (r = e.cachePolicyForParams_UNSTABLE) === null || r === void 0 ? void 0 : r.equality) !== null &&
      t !== void 0
        ? t
        : 'value',
    eviction: 'keep-all',
  })
  return (s) => {
    var o
    let a
    try {
      a = n.get(s)
    } catch (g) {
      throw Z(`Problem with cache lookup for selector ${e.key}: ${g.message}`)
    }
    if (a != null) return a
    const c = `${e.key}__selectorFamily/${
        (o = vn(s, { allowFunctions: !0 })) !== null && o !== void 0 ? o : 'void'
      }/${Pv++}`,
      l = (g) => e.get(s)(g),
      u = e.cachePolicy_UNSTABLE,
      d = typeof e.retainedBy_UNSTABLE == 'function' ? e.retainedBy_UNSTABLE(s) : e.retainedBy_UNSTABLE
    let v
    if (e.set != null) {
      const g = e.set
      v = Mt({
        key: c,
        get: l,
        set: (w, T) => g(s)(w, T),
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: d,
      })
    } else
      v = Mt({
        key: c,
        get: l,
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: d,
      })
    return (
      n.set(s, v),
      Iv(v.key, () => {
        n.delete(s)
      }),
      v
    )
  }
}
var vt = Ov
const $v = vt({ key: '__constant', get: (e) => () => e, cachePolicyForParams_UNSTABLE: { equality: 'reference' } })
function Bv(e) {
  return $v(e)
}
var Fv = Bv
const zv = vt({
  key: '__error',
  get: (e) => () => {
    throw Z(e)
  },
  cachePolicyForParams_UNSTABLE: { equality: 'reference' },
})
function Hv(e) {
  return zv(e)
}
var Gv = Hv
function Kv(e) {
  return e
}
var qv = Kv
const { loadableWithError: ea, loadableWithPromise: ta, loadableWithValue: ra } = wr
function bn(e, t) {
  const r = Array(t.length).fill(void 0),
    n = Array(t.length).fill(void 0)
  for (const [s, o] of t.entries())
    try {
      r[s] = e(o)
    } catch (a) {
      n[s] = a
    }
  return [r, n]
}
function Yv(e) {
  return e != null && !he(e)
}
function xn(e) {
  return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t])
}
function Jn(e, t) {
  return Array.isArray(e) ? t : Object.getOwnPropertyNames(e).reduce((r, n, s) => ({ ...r, [n]: t[s] }), {})
}
function At(e, t, r) {
  const n = r.map((s, o) => (s == null ? ra(t[o]) : he(s) ? ta(s) : ea(s)))
  return Jn(e, n)
}
function Xv(e, t) {
  return t.map((r, n) => (r === void 0 ? e[n] : r))
}
const Zv = vt({
    key: '__waitForNone',
    get:
      (e) =>
      ({ get: t }) => {
        const r = xn(e),
          [n, s] = bn(t, r)
        return At(e, n, s)
      },
    dangerouslyAllowMutability: !0,
  }),
  Jv = vt({
    key: '__waitForAny',
    get:
      (e) =>
      ({ get: t }) => {
        const r = xn(e),
          [n, s] = bn(t, r)
        return s.some((o) => !he(o))
          ? At(e, n, s)
          : new Promise((o) => {
              for (const [a, c] of s.entries())
                he(c) &&
                  c
                    .then((l) => {
                      ;(n[a] = l), (s[a] = void 0), o(At(e, n, s))
                    })
                    .catch((l) => {
                      ;(s[a] = l), o(At(e, n, s))
                    })
            })
      },
    dangerouslyAllowMutability: !0,
  }),
  Qv = vt({
    key: '__waitForAll',
    get:
      (e) =>
      ({ get: t }) => {
        const r = xn(e),
          [n, s] = bn(t, r)
        if (s.every((a) => a == null)) return Jn(e, n)
        const o = s.find(Yv)
        if (o != null) throw o
        return Promise.all(s).then((a) => Jn(e, Xv(n, a)))
      },
    dangerouslyAllowMutability: !0,
  }),
  eb = vt({
    key: '__waitForAllSettled',
    get:
      (e) =>
      ({ get: t }) => {
        const r = xn(e),
          [n, s] = bn(t, r)
        return s.every((o) => !he(o))
          ? At(e, n, s)
          : Promise.all(
              s.map((o, a) =>
                he(o)
                  ? o
                      .then((c) => {
                        ;(n[a] = c), (s[a] = void 0)
                      })
                      .catch((c) => {
                        ;(n[a] = void 0), (s[a] = c)
                      })
                  : null,
              ),
            ).then(() => At(e, n, s))
      },
    dangerouslyAllowMutability: !0,
  }),
  tb = vt({
    key: '__noWait',
    get:
      (e) =>
      ({ get: t }) => {
        try {
          return Mt.value(ra(t(e)))
        } catch (r) {
          return Mt.value(he(r) ? ta(r) : ea(r))
        }
      },
    dangerouslyAllowMutability: !0,
  })
var rb = { waitForNone: Zv, waitForAny: Jv, waitForAll: Qv, waitForAllSettled: eb, noWait: tb }
const { RecoilLoadable: nb } = wr,
  { DefaultValue: sb } = Ie,
  { RecoilRoot: ib, useRecoilStoreID: ob } = ot,
  { isRecoilValue: ab } = gt,
  { retentionZone: lb } = sn,
  { freshSnapshot: cb } = un,
  {
    useRecoilState: ub,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: db,
    useRecoilStateLoadable: fb,
    useRecoilValue: mb,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: hb,
    useRecoilValueLoadable: vb,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: bb,
    useResetRecoilState: xb,
    useSetRecoilState: pb,
  } = ym,
  { useGotoRecoilSnapshot: Nb, useRecoilSnapshot: gb, useRecoilTransactionObserver: wb } = Io,
  { useRecoilCallback: yb } = Bo,
  { noWait: Tb, waitForAll: Eb, waitForAllSettled: Db, waitForAny: Sb, waitForNone: kb } = rb
var $t = {
    DefaultValue: sb,
    isRecoilValue: ab,
    RecoilLoadable: nb,
    RecoilEnv: Pt,
    RecoilRoot: ib,
    useRecoilStoreID: ob,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: Ym,
    atom: Jo,
    selector: Mt,
    atomFamily: Mv,
    selectorFamily: vt,
    constSelector: Fv,
    errorSelector: Gv,
    readOnlySelector: qv,
    noWait: Tb,
    waitForNone: kb,
    waitForAny: Sb,
    waitForAll: Eb,
    waitForAllSettled: Db,
    useRecoilValue: mb,
    useRecoilValueLoadable: vb,
    useRecoilState: ub,
    useRecoilStateLoadable: fb,
    useSetRecoilState: pb,
    useResetRecoilState: xb,
    useGetRecoilValueInfo_UNSTABLE: Fm,
    useRecoilRefresher_UNSTABLE: Eh,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: bb,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: hb,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: db,
    useRecoilCallback: yb,
    useRecoilTransaction_UNSTABLE: _h,
    useGotoRecoilSnapshot: Nb,
    useRecoilSnapshot: gb,
    useRecoilTransactionObserver_UNSTABLE: wb,
    snapshot_UNSTABLE: cb,
    useRetain: ps,
    retentionZone: lb,
  },
  Rb = $t.RecoilRoot,
  na = $t.atom,
  Xb = $t.useRecoilValue,
  Zb = $t.useRecoilState,
  Jb = $t.useSetRecoilState,
  _b = $t.useResetRecoilState
const Qb = na({ key: 'logInFormStateAtom', default: { email: '', password: '' } }),
  Ub = na({ key: 'logInStateAtom', default: { state: 'idle', message: null } }),
  Cb = () => {
    const e = Xe(),
      [t, r] = X.useState('Detail'),
      [n, s] = X.useState(!1),
      o = _b(Ub)
    return i.jsxDEV(
      'div',
      {
        className: 'container flex flex-row px-24 mx-auto mt-20 space-x-12 ',
        children: [
          i.jsxDEV(
            'div',
            {
              className:
                'w-[34rem] text-white flex flex-col items-center justify-start border-[1px] border-solid border-gray-500 h-[52.25rem]',
              children: [
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex flex-col items-center justify-center w-full space-y-4 h-80 ',
                    children: [
                      i.jsxDEV(
                        ic,
                        { size: 120, color: '#4848A4' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                          lineNumber: 18,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'text-4xl text-[#4848A4]', children: 'username' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                          lineNumber: 19,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                    lineNumber: 17,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'w-full px-1 pt-1',
                    children: i.jsxDEV(
                      'button',
                      {
                        onClick: (a) => {
                          a.preventDefault(), r('Detail')
                        },
                        className: `${
                          t === 'Detail' ? 'text-[#4848A4]' : 'text-black'
                        } w-full p-4 space-y-4 text-base font-medium border-t-2 border-solid text-start border-zinc-400`,
                        children: 'Thông tin cá nhân',
                      },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                        lineNumber: 22,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                    lineNumber: 21,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'w-full px-1 pt-1',
                    children: i.jsxDEV(
                      'button',
                      {
                        onClick: (a) => {
                          a.preventDefault(), r('ChangePassword')
                        },
                        className: `${
                          t === 'ChangePassword' ? 'text-[#4848A4]' : 'text-black'
                        } w-full p-4 space-y-4 text-base font-medium border-t-2 border-solid text-start border-zinc-400`,
                        children: 'Đổi mật khẩu',
                      },
                      void 0,
                      !1,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                        lineNumber: 35,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                    lineNumber: 34,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex items-end w-full text-black grow',
                    children: i.jsxDEV(
                      'div',
                      {
                        onClick: () => {
                          o(), e('/home')
                        },
                        className:
                          'hover:cursor-pointer w-full p-4 flex flex-row border-t-[1px] border-solid border-zinc-500 items-center space-x-2 text-xl font-bold',
                        children: [
                          i.jsxDEV(
                            Ec,
                            { size: 24 },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                              lineNumber: 55,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                          ' ',
                          i.jsxDEV(
                            'p',
                            { children: 'Đăng xuất' },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                              lineNumber: 55,
                              columnNumber: 36,
                            },
                            globalThis,
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                        lineNumber: 48,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                    lineNumber: 47,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
              lineNumber: 16,
              columnNumber: 7,
            },
            globalThis,
          ),
          t === 'Detail' &&
            i.jsxDEV(
              'div',
              {
                className: 'flex flex-col w-full space-y-12',
                children: [
                  i.jsxDEV(
                    'div',
                    { className: 'text-2xl text-[#4848a4]', children: 'Thông tin cá nhân' },
                    void 0,
                    !1,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                      lineNumber: 62,
                      columnNumber: 11,
                    },
                    globalThis,
                  ),
                  i.jsxDEV(
                    'form',
                    {
                      action: '',
                      className: 'flex flex-col w-full space-y-4 font-light text-zinc-500',
                      children: [
                        i.jsxDEV(
                          'div',
                          {
                            className: 'flex flex-row w-full space-x-4',
                            children: [
                              i.jsxDEV(
                                'div',
                                {
                                  className: 'flex flex-col space-y-4 grow',
                                  children: [
                                    i.jsxDEV(
                                      'div',
                                      { className: 'text-base', children: 'Họ' },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                        lineNumber: 66,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                    i.jsxDEV(
                                      'input',
                                      {
                                        type: 'text',
                                        className: 'w-full p-2 rounded-lg border-[0.5px] border-solid border-zinc-500',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                        lineNumber: 67,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                  lineNumber: 65,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                              i.jsxDEV(
                                'div',
                                {
                                  className: 'flex flex-col space-y-4 grow',
                                  children: [
                                    i.jsxDEV(
                                      'div',
                                      { className: 'text-base', children: 'Tên' },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                        lineNumber: 70,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                    i.jsxDEV(
                                      'input',
                                      {
                                        type: 'text',
                                        className: 'w-full p-2 rounded-lg border-[0.5px] border-solid border-zinc-500',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                        lineNumber: 71,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                  lineNumber: 69,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                            lineNumber: 64,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                        i.jsxDEV(
                          'div',
                          {
                            className: 'flex flex-row w-full space-x-4',
                            children: i.jsxDEV(
                              'div',
                              {
                                className: 'flex flex-col space-y-4 grow',
                                children: [
                                  i.jsxDEV(
                                    'div',
                                    { className: 'text-base', children: 'Địa chỉ email' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                      lineNumber: 77,
                                      columnNumber: 17,
                                    },
                                    globalThis,
                                  ),
                                  i.jsxDEV(
                                    'input',
                                    {
                                      type: 'text',
                                      className: 'w-full p-2 rounded-lg border-[0.5px] border-solid border-zinc-500',
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                      lineNumber: 78,
                                      columnNumber: 17,
                                    },
                                    globalThis,
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                lineNumber: 76,
                                columnNumber: 15,
                              },
                              globalThis,
                            ),
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                            lineNumber: 75,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                        i.jsxDEV(
                          'div',
                          {
                            className: 'flex flex-row w-full space-x-4',
                            children: [
                              i.jsxDEV(
                                'div',
                                {
                                  className: 'flex flex-col space-y-4 grow',
                                  children: [
                                    i.jsxDEV(
                                      'div',
                                      { className: 'text-base', children: 'Số điện thoại' },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                        lineNumber: 84,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                    i.jsxDEV(
                                      'input',
                                      {
                                        type: 'text',
                                        className: 'w-full p-2 rounded-lg border-[0.5px] border-solid border-zinc-500',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                        lineNumber: 85,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                  lineNumber: 83,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                              i.jsxDEV(
                                'div',
                                {
                                  className: 'flex flex-col space-y-4 grow',
                                  children: [
                                    i.jsxDEV(
                                      'div',
                                      { className: 'text-base', children: 'Ngày sinh' },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                        lineNumber: 88,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                    i.jsxDEV(
                                      'input',
                                      {
                                        type: 'date',
                                        className: 'w-full p-2 rounded-lg border-[0.5px] border-solid border-zinc-500',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                        lineNumber: 89,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                  lineNumber: 87,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                            lineNumber: 82,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                      lineNumber: 63,
                      columnNumber: 11,
                    },
                    globalThis,
                  ),
                  i.jsxDEV(
                    'div',
                    {
                      className: 'text-base font-light text-zinc-500',
                      children:
                        'Để đơn hàng được giải quyết dễ dàng, hãy điền đầy đủ thông tin của bạn cho chúng tôi nhé!',
                    },
                    void 0,
                    !1,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                      lineNumber: 93,
                      columnNumber: 11,
                    },
                    globalThis,
                  ),
                  i.jsxDEV(
                    'div',
                    {
                      className: 'flex flex-row space-x-12 text-xl',
                      children: [
                        i.jsxDEV(
                          'button',
                          {
                            className:
                              'py-3 w-[10.75rem] rounded-lg border-[1px] border-solid border-[#4848A4] text-[#4848A4]',
                            children: 'Huỷ',
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                            lineNumber: 97,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                        i.jsxDEV(
                          'button',
                          {
                            className:
                              'py-3 bg-[#4848A4] w-[10.75rem] rounded-lg border-[1px] border-solid border-[#4848A4] text-white',
                            children: 'Lưu',
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                            lineNumber: 100,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                      lineNumber: 96,
                      columnNumber: 11,
                    },
                    globalThis,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                lineNumber: 61,
                columnNumber: 9,
              },
              globalThis,
            ),
          t === 'ChangePassword' &&
            i.jsxDEV(
              'div',
              {
                className: 'flex flex-col w-full space-y-12',
                children: [
                  i.jsxDEV(
                    'div',
                    { className: 'text-2xl text-[#4848a4]', children: 'Đổi mật khẩu' },
                    void 0,
                    !1,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                      lineNumber: 108,
                      columnNumber: 11,
                    },
                    globalThis,
                  ),
                  i.jsxDEV(
                    'form',
                    {
                      action: '',
                      className: 'flex flex-col w-full space-y-4 font-light text-zinc-500',
                      children: [
                        i.jsxDEV(
                          'div',
                          {
                            className: 'flex flex-row w-full space-x-4',
                            children: i.jsxDEV(
                              'div',
                              {
                                className: 'flex flex-col space-y-4 grow',
                                children: [
                                  i.jsxDEV(
                                    'div',
                                    { className: 'text-base', children: 'Mật khẩu mới' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                      lineNumber: 112,
                                      columnNumber: 17,
                                    },
                                    globalThis,
                                  ),
                                  i.jsxDEV(
                                    'div',
                                    {
                                      className:
                                        'w-full p-2 flex items-center flex-row rounded-lg border-[0.5px] border-solid border-zinc-500',
                                      children: [
                                        i.jsxDEV(
                                          'input',
                                          { type: `${n ? 'text' : 'password'}`, className: 'grow' },
                                          void 0,
                                          !1,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                            lineNumber: 114,
                                            columnNumber: 19,
                                          },
                                          globalThis,
                                        ),
                                        n
                                          ? i.jsxDEV(
                                              'div',
                                              {
                                                onClick: () => s(!1),
                                                children: i.jsxDEV(
                                                  ac,
                                                  {},
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                                    lineNumber: 117,
                                                    columnNumber: 23,
                                                  },
                                                  globalThis,
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName:
                                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                                lineNumber: 116,
                                                columnNumber: 21,
                                              },
                                              globalThis,
                                            )
                                          : i.jsxDEV(
                                              'div',
                                              {
                                                onClick: () => s(!0),
                                                children: i.jsxDEV(
                                                  sc,
                                                  {},
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                                    lineNumber: 121,
                                                    columnNumber: 23,
                                                  },
                                                  globalThis,
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName:
                                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                                lineNumber: 120,
                                                columnNumber: 21,
                                              },
                                              globalThis,
                                            ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                      lineNumber: 113,
                                      columnNumber: 17,
                                    },
                                    globalThis,
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                lineNumber: 111,
                                columnNumber: 15,
                              },
                              globalThis,
                            ),
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                            lineNumber: 110,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                        i.jsxDEV(
                          'div',
                          {
                            className: 'flex flex-row w-full space-x-4',
                            children: i.jsxDEV(
                              'div',
                              {
                                className: 'flex flex-col space-y-4 grow',
                                children: [
                                  i.jsxDEV(
                                    'div',
                                    { className: 'text-base', children: 'Nhập lại mật khẩu mới' },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                      lineNumber: 129,
                                      columnNumber: 17,
                                    },
                                    globalThis,
                                  ),
                                  i.jsxDEV(
                                    'div',
                                    {
                                      className: 'w-full p-2 rounded-lg border-[0.5px] border-solid border-zinc-500',
                                      children: i.jsxDEV(
                                        'input',
                                        { type: 'password', className: 'w-full' },
                                        void 0,
                                        !1,
                                        {
                                          fileName:
                                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                          lineNumber: 131,
                                          columnNumber: 19,
                                        },
                                        globalThis,
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                      lineNumber: 130,
                                      columnNumber: 17,
                                    },
                                    globalThis,
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                                lineNumber: 128,
                                columnNumber: 15,
                              },
                              globalThis,
                            ),
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                            lineNumber: 127,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                      lineNumber: 109,
                      columnNumber: 11,
                    },
                    globalThis,
                  ),
                  i.jsxDEV(
                    'div',
                    {
                      className: 'text-base font-light text-zinc-500',
                      children:
                        'Sử dụng tối thiểu 8 ký tự, và tối đa 15 ký tự. Chỉ bao gồm số, chữ thường, chữ in hoa và ký tự đặc biệt',
                    },
                    void 0,
                    !1,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                      lineNumber: 136,
                      columnNumber: 11,
                    },
                    globalThis,
                  ),
                  i.jsxDEV(
                    'div',
                    {
                      className: 'flex flex-row space-x-12 text-xl',
                      children: [
                        i.jsxDEV(
                          'button',
                          {
                            className:
                              'py-3 w-[10.75rem] rounded-lg border-[1px] border-solid border-[#4848A4] text-[#4848A4]',
                            children: 'Huỷ',
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                            lineNumber: 140,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                        i.jsxDEV(
                          'button',
                          {
                            className:
                              'py-3 bg-[#4848A4] w-[10.75rem] rounded-lg border-[1px] border-solid border-[#4848A4] text-white',
                            children: 'Lưu',
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                            lineNumber: 143,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                      lineNumber: 139,
                      columnNumber: 11,
                    },
                    globalThis,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
                lineNumber: 107,
                columnNumber: 9,
              },
              globalThis,
            ),
        ],
      },
      void 0,
      !0,
      {
        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/UserDetail/index.tsx',
        lineNumber: 15,
        columnNumber: 5,
      },
      globalThis,
    )
  },
  Vb = () => {
    const e = Xe(),
      [t, r] = X.useState(1)
    return i.jsxDEV(
      i.Fragment,
      {
        children: [
          t !== 3 &&
            i.jsxDEV(
              'div',
              {
                className: 'container flex flex-col items-center mx-auto',
                children: [
                  i.jsxDEV(
                    'div',
                    {
                      className: 'flex items-center justify-center w-full px-8 py-4 space-x-4 text-xl',
                      children: [
                        i.jsxDEV(
                          'div',
                          {
                            className: `w-2/12 text-center ${t <= 3 && 'text-[#4848a4]'}`,
                            children: 'Điền thông tin nhận hàng',
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                            lineNumber: 13,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                        i.jsxDEV(
                          'div',
                          {
                            className: 'flex items-center justify-center w-2/12 space-x-4',
                            children: [
                              i.jsxDEV(
                                'div',
                                {
                                  className: `grow border-b-[2px] border-solid ${
                                    t <= 3 ? 'border-[#4848A4]' : 'border-black'
                                  } `,
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                  lineNumber: 16,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                              i.jsxDEV(
                                Fs,
                                { size: 24, color: `${t <= 3 ? '#4848A4' : 'black'}` },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                  lineNumber: 17,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                              i.jsxDEV(
                                'div',
                                {
                                  className: `grow border-b-[2px] border-solid ${
                                    t <= 3 ? 'border-[#4848A4]' : 'border-black'
                                  } `,
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                  lineNumber: 18,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                            lineNumber: 15,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                        i.jsxDEV(
                          'div',
                          {
                            className: `w-2/12 text-center ${t > 1 && 'text-[#4848a4]'}`,
                            children: 'Chọn phương thức thanh toán',
                          },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                            lineNumber: 21,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                        i.jsxDEV(
                          'div',
                          {
                            className: 'flex items-center justify-center w-2/12 space-x-4',
                            children: [
                              i.jsxDEV(
                                'div',
                                {
                                  className: `grow border-b-[2px] border-solid ${
                                    t > 1 ? 'border-[#4848A4]' : 'border-black'
                                  } `,
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                  lineNumber: 24,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                              i.jsxDEV(
                                Fs,
                                { size: 24, color: `${t <= 3 ? '#4848A4' : 'black'}` },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                  lineNumber: 25,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                              i.jsxDEV(
                                'div',
                                {
                                  className: `grow border-b-[2px] border-solid ${
                                    t > 1 ? 'border-[#4848A4]' : 'border-black'
                                  } `,
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                  lineNumber: 26,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                            lineNumber: 23,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                        i.jsxDEV(
                          'div',
                          { className: 'w-2/12 text-center', children: 'Hoàn tất' },
                          void 0,
                          !1,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                            lineNumber: 29,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                      lineNumber: 12,
                      columnNumber: 11,
                    },
                    globalThis,
                  ),
                  i.jsxDEV(
                    'div',
                    {
                      className: 'flex items-start justify-around w-full max-w-[1440px]',
                      children: [
                        t === 1 &&
                          i.jsxDEV(
                            'div',
                            {
                              className: 'flex flex-col w-[700px]',
                              children: [
                                i.jsxDEV(
                                  'div',
                                  {
                                    className: 'text-[32px] text-[#4848A4] font-medium pb-4',
                                    children: 'Thông tin nhận hàng',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                    lineNumber: 35,
                                    columnNumber: 17,
                                  },
                                  globalThis,
                                ),
                                i.jsxDEV(
                                  'form',
                                  {
                                    action: '',
                                    className: 'flex flex-col space-y-4',
                                    children: [
                                      i.jsxDEV(
                                        'div',
                                        {
                                          className: 'flex justify-between space-x-8 text-xl text-zinc-500',
                                          children: [
                                            i.jsxDEV(
                                              'div',
                                              {
                                                className: 'flex flex-col space-y-2 grow',
                                                children: [
                                                  i.jsxDEV(
                                                    'div',
                                                    { children: 'Họ' },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName:
                                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                      lineNumber: 39,
                                                      columnNumber: 23,
                                                    },
                                                    globalThis,
                                                  ),
                                                  i.jsxDEV(
                                                    'input',
                                                    {
                                                      type: 'text',
                                                      name: '',
                                                      id: '',
                                                      className: 'border-[1px] border-zinc-500 rounded-md p-2',
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName:
                                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                      lineNumber: 40,
                                                      columnNumber: 23,
                                                    },
                                                    globalThis,
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              !0,
                                              {
                                                fileName:
                                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                lineNumber: 38,
                                                columnNumber: 21,
                                              },
                                              globalThis,
                                            ),
                                            i.jsxDEV(
                                              'div',
                                              {
                                                className: 'flex flex-col space-y-2 grow',
                                                children: [
                                                  i.jsxDEV(
                                                    'div',
                                                    { children: 'Tên' },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName:
                                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                      lineNumber: 43,
                                                      columnNumber: 23,
                                                    },
                                                    globalThis,
                                                  ),
                                                  i.jsxDEV(
                                                    'input',
                                                    {
                                                      type: 'text',
                                                      name: '',
                                                      id: '',
                                                      className: 'border-[1px] border-zinc-500 rounded-md p-2',
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName:
                                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                      lineNumber: 44,
                                                      columnNumber: 23,
                                                    },
                                                    globalThis,
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              !0,
                                              {
                                                fileName:
                                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                lineNumber: 42,
                                                columnNumber: 21,
                                              },
                                              globalThis,
                                            ),
                                          ],
                                        },
                                        void 0,
                                        !0,
                                        {
                                          fileName:
                                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                          lineNumber: 37,
                                          columnNumber: 19,
                                        },
                                        globalThis,
                                      ),
                                      i.jsxDEV(
                                        'div',
                                        {
                                          className: 'flex justify-between space-x-8 text-xl text-zinc-500',
                                          children: i.jsxDEV(
                                            'div',
                                            {
                                              className: 'flex flex-col space-y-2 grow',
                                              children: [
                                                i.jsxDEV(
                                                  'div',
                                                  { children: 'Địa chỉ email' },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                    lineNumber: 50,
                                                    columnNumber: 23,
                                                  },
                                                  globalThis,
                                                ),
                                                i.jsxDEV(
                                                  'input',
                                                  {
                                                    type: 'text',
                                                    name: '',
                                                    id: '',
                                                    className: 'border-[1px] border-zinc-500 rounded-md p-2',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                    lineNumber: 51,
                                                    columnNumber: 23,
                                                  },
                                                  globalThis,
                                                ),
                                              ],
                                            },
                                            void 0,
                                            !0,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 49,
                                              columnNumber: 21,
                                            },
                                            globalThis,
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName:
                                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                          lineNumber: 48,
                                          columnNumber: 19,
                                        },
                                        globalThis,
                                      ),
                                      i.jsxDEV(
                                        'div',
                                        {
                                          className: 'flex justify-between space-x-8 text-xl text-zinc-500',
                                          children: i.jsxDEV(
                                            'div',
                                            {
                                              className: 'flex flex-col space-y-2 grow',
                                              children: [
                                                i.jsxDEV(
                                                  'div',
                                                  { children: 'Số điện thoại' },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                    lineNumber: 57,
                                                    columnNumber: 23,
                                                  },
                                                  globalThis,
                                                ),
                                                i.jsxDEV(
                                                  'input',
                                                  {
                                                    type: 'text',
                                                    name: '',
                                                    id: '',
                                                    className: 'border-[1px] border-zinc-500 rounded-md p-2',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                    lineNumber: 58,
                                                    columnNumber: 23,
                                                  },
                                                  globalThis,
                                                ),
                                              ],
                                            },
                                            void 0,
                                            !0,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 56,
                                              columnNumber: 21,
                                            },
                                            globalThis,
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName:
                                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                          lineNumber: 55,
                                          columnNumber: 19,
                                        },
                                        globalThis,
                                      ),
                                      i.jsxDEV(
                                        'div',
                                        {
                                          className: 'flex justify-between space-x-8 text-xl text-zinc-500',
                                          children: i.jsxDEV(
                                            'div',
                                            {
                                              className: 'flex flex-col space-y-2 grow',
                                              children: [
                                                i.jsxDEV(
                                                  'div',
                                                  { children: 'Địa chỉ ngân hàng' },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                    lineNumber: 64,
                                                    columnNumber: 23,
                                                  },
                                                  globalThis,
                                                ),
                                                i.jsxDEV(
                                                  'input',
                                                  {
                                                    type: 'text',
                                                    name: '',
                                                    id: '',
                                                    className: 'border-[1px] border-zinc-500 rounded-md p-2',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName:
                                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                    lineNumber: 65,
                                                    columnNumber: 23,
                                                  },
                                                  globalThis,
                                                ),
                                              ],
                                            },
                                            void 0,
                                            !0,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 63,
                                              columnNumber: 21,
                                            },
                                            globalThis,
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName:
                                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                          lineNumber: 62,
                                          columnNumber: 19,
                                        },
                                        globalThis,
                                      ),
                                      i.jsxDEV(
                                        'div',
                                        {
                                          children: i.jsxDEV(
                                            'button',
                                            {
                                              onClick: (n) => {
                                                n.preventDefault(), r(2)
                                              },
                                              className:
                                                'px-8 py-2 bg-[#4848A4] text-white rounded-md text-xl hover:shadow-lg',
                                              children: 'Tiếp',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 69,
                                              columnNumber: 21,
                                            },
                                            globalThis,
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName:
                                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                          lineNumber: 68,
                                          columnNumber: 19,
                                        },
                                        globalThis,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName:
                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                    lineNumber: 36,
                                    columnNumber: 17,
                                  },
                                  globalThis,
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                              lineNumber: 34,
                              columnNumber: 15,
                            },
                            globalThis,
                          ),
                        t === 2 &&
                          i.jsxDEV(
                            'div',
                            {
                              className: 'flex flex-col w-[700px] space-y-12',
                              children: [
                                i.jsxDEV(
                                  'div',
                                  {
                                    className:
                                      'flex flex-col w-full p-6 shadow-xl rounded-xl border-[0.5px] border-zinc-200 border-solid',
                                    children: [
                                      i.jsxDEV(
                                        'div',
                                        { className: 'text-lg ', children: 'Đơn hàng #02144143' },
                                        void 0,
                                        !1,
                                        {
                                          fileName:
                                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                          lineNumber: 85,
                                          columnNumber: 19,
                                        },
                                        globalThis,
                                      ),
                                      i.jsxDEV(
                                        'div',
                                        {
                                          className: 'text-[42px] font-semibold text-[#000080]',
                                          children: '152.000 đ',
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName:
                                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                          lineNumber: 86,
                                          columnNumber: 19,
                                        },
                                        globalThis,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName:
                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                    lineNumber: 84,
                                    columnNumber: 17,
                                  },
                                  globalThis,
                                ),
                                i.jsxDEV(
                                  'div',
                                  { className: 'text-3xl font-[450]', children: 'Chọn phương thức thanh toán' },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                    lineNumber: 88,
                                    columnNumber: 17,
                                  },
                                  globalThis,
                                ),
                                i.jsxDEV(
                                  'div',
                                  {
                                    className: 'flex flex-col justify-center text-lg font-[500] space-y-4',
                                    children: [
                                      i.jsxDEV(
                                        'label',
                                        {
                                          htmlFor: 'check',
                                          className: 'flex items-center space-x-4',
                                          children: [
                                            i.jsxDEV(
                                              'input',
                                              { type: 'radio', name: 'radio', className: 'w-4' },
                                              void 0,
                                              !1,
                                              {
                                                fileName:
                                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                lineNumber: 92,
                                                columnNumber: 21,
                                              },
                                              globalThis,
                                            ),
                                            i.jsxDEV(
                                              'p',
                                              { children: 'Thanh toán khi nhận hàng' },
                                              void 0,
                                              !1,
                                              {
                                                fileName:
                                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                lineNumber: 93,
                                                columnNumber: 21,
                                              },
                                              globalThis,
                                            ),
                                          ],
                                        },
                                        void 0,
                                        !0,
                                        {
                                          fileName:
                                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                          lineNumber: 91,
                                          columnNumber: 19,
                                        },
                                        globalThis,
                                      ),
                                      i.jsxDEV(
                                        'label',
                                        {
                                          htmlFor: 'check',
                                          className: 'flex items-center space-x-4',
                                          children: [
                                            i.jsxDEV(
                                              'input',
                                              { type: 'radio', name: 'radio', className: 'w-4' },
                                              void 0,
                                              !1,
                                              {
                                                fileName:
                                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                lineNumber: 96,
                                                columnNumber: 21,
                                              },
                                              globalThis,
                                            ),
                                            i.jsxDEV(
                                              'p',
                                              { children: 'Quét mã QR' },
                                              void 0,
                                              !1,
                                              {
                                                fileName:
                                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                lineNumber: 97,
                                                columnNumber: 21,
                                              },
                                              globalThis,
                                            ),
                                          ],
                                        },
                                        void 0,
                                        !0,
                                        {
                                          fileName:
                                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                          lineNumber: 95,
                                          columnNumber: 19,
                                        },
                                        globalThis,
                                      ),
                                      i.jsxDEV(
                                        'label',
                                        {
                                          htmlFor: 'check',
                                          className: 'flex items-center space-x-4',
                                          children: [
                                            i.jsxDEV(
                                              'input',
                                              { type: 'radio', name: 'radio', className: 'w-4' },
                                              void 0,
                                              !1,
                                              {
                                                fileName:
                                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                lineNumber: 100,
                                                columnNumber: 21,
                                              },
                                              globalThis,
                                            ),
                                            i.jsxDEV(
                                              'p',
                                              { children: 'Visa / Mastercard ' },
                                              void 0,
                                              !1,
                                              {
                                                fileName:
                                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                lineNumber: 101,
                                                columnNumber: 21,
                                              },
                                              globalThis,
                                            ),
                                          ],
                                        },
                                        void 0,
                                        !0,
                                        {
                                          fileName:
                                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                          lineNumber: 99,
                                          columnNumber: 19,
                                        },
                                        globalThis,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName:
                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                    lineNumber: 90,
                                    columnNumber: 17,
                                  },
                                  globalThis,
                                ),
                                i.jsxDEV(
                                  'div',
                                  {
                                    children: i.jsxDEV(
                                      'button',
                                      {
                                        onClick: (n) => {
                                          n.preventDefault(), r(3)
                                        },
                                        className:
                                          'px-8 py-2 bg-[#7775C5] text-white rounded-md text-xl hover:shadow-lg',
                                        children: 'Thanh toán',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                        lineNumber: 106,
                                        columnNumber: 19,
                                      },
                                      globalThis,
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName:
                                      '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                    lineNumber: 105,
                                    columnNumber: 17,
                                  },
                                  globalThis,
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                              lineNumber: 83,
                              columnNumber: 15,
                            },
                            globalThis,
                          ),
                        i.jsxDEV(
                          'div',
                          {
                            className: 'p-7 rounded-lg border-[1px] border-zinc-500 w-[460px] flex flex-col space-y-4',
                            children: [
                              i.jsxDEV(
                                'div',
                                { className: 'text-[26px]', children: 'Đơn hàng' },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                  lineNumber: 120,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                              i.jsxDEV(
                                'div',
                                {
                                  className: 'py-2.5',
                                  children: i.jsxDEV(
                                    'div',
                                    {
                                      className: 'flex flex-wrap text-base',
                                      children: [
                                        i.jsxDEV(
                                          'p',
                                          { className: 'w-full', children: 'CLOVER (CLAMP) - Box Set 2 Tập' },
                                          void 0,
                                          !1,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                            lineNumber: 124,
                                            columnNumber: 19,
                                          },
                                          globalThis,
                                        ),
                                        i.jsxDEV(
                                          'p',
                                          {
                                            className: 'flex items-center justify-end w-full space-x-2 text-end',
                                            children: [
                                              i.jsxDEV(
                                                'p',
                                                {
                                                  className: 'text-xs line-through text-zinc-500',
                                                  children: '90.000d',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                  lineNumber: 126,
                                                  columnNumber: 21,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { children: '81.000d' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                  lineNumber: 127,
                                                  columnNumber: 21,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { className: 'px-4', children: '1' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                  lineNumber: 128,
                                                  columnNumber: 21,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { children: '81.000d' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                  lineNumber: 129,
                                                  columnNumber: 21,
                                                },
                                                globalThis,
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                            lineNumber: 125,
                                            columnNumber: 19,
                                          },
                                          globalThis,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                      lineNumber: 123,
                                      columnNumber: 17,
                                    },
                                    globalThis,
                                  ),
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                  lineNumber: 122,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                              i.jsxDEV(
                                'div',
                                {
                                  className: 'py-2.5',
                                  children: i.jsxDEV(
                                    'div',
                                    {
                                      className: 'flex flex-wrap text-base',
                                      children: [
                                        i.jsxDEV(
                                          'p',
                                          { className: 'w-full', children: 'CLOVER (CLAMP) - Box Set 2 Tập' },
                                          void 0,
                                          !1,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                            lineNumber: 136,
                                            columnNumber: 19,
                                          },
                                          globalThis,
                                        ),
                                        i.jsxDEV(
                                          'p',
                                          {
                                            className: 'flex items-center justify-end w-full space-x-2 text-end',
                                            children: [
                                              i.jsxDEV(
                                                'p',
                                                {
                                                  className: 'text-xs line-through text-zinc-500',
                                                  children: '90.000d',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                  lineNumber: 138,
                                                  columnNumber: 21,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { children: '81.000d' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                  lineNumber: 139,
                                                  columnNumber: 21,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { className: 'px-4', children: '1' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                  lineNumber: 140,
                                                  columnNumber: 21,
                                                },
                                                globalThis,
                                              ),
                                              i.jsxDEV(
                                                'p',
                                                { children: '81.000d' },
                                                void 0,
                                                !1,
                                                {
                                                  fileName:
                                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                                  lineNumber: 141,
                                                  columnNumber: 21,
                                                },
                                                globalThis,
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName:
                                              '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                            lineNumber: 137,
                                            columnNumber: 19,
                                          },
                                          globalThis,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName:
                                        '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                      lineNumber: 135,
                                      columnNumber: 17,
                                    },
                                    globalThis,
                                  ),
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                  lineNumber: 134,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                              i.jsxDEV(
                                'div',
                                {
                                  className: 'flex flex-col space-y-2',
                                  children: [
                                    i.jsxDEV(
                                      'div',
                                      { className: 'text-zinc-500', children: 'Mã giảm giá' },
                                      void 0,
                                      !1,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                        lineNumber: 147,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                    i.jsxDEV(
                                      'div',
                                      {
                                        className: 'flex justify-between space-x-2',
                                        children: [
                                          i.jsxDEV(
                                            'div',
                                            { className: 'w-[65%] bg-gray-200 border-[1px] rounded-lg' },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 149,
                                              columnNumber: 19,
                                            },
                                            globalThis,
                                          ),
                                          i.jsxDEV(
                                            'div',
                                            {
                                              className:
                                                'w-[30%] text-center rounded-lg px-4 py-2 border-[2px] border-solid border-[#4848a4]',
                                              children: 'Apply',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 150,
                                              columnNumber: 19,
                                            },
                                            globalThis,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                        lineNumber: 148,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                  lineNumber: 146,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                              i.jsxDEV(
                                'div',
                                {
                                  className: 'flex flex-col text-[18px] pt-6 space-y-4',
                                  children: [
                                    i.jsxDEV(
                                      'div',
                                      {
                                        className: 'flex justify-between',
                                        children: [
                                          i.jsxDEV(
                                            'div',
                                            { children: 'Tạm tính' },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 158,
                                              columnNumber: 19,
                                            },
                                            globalThis,
                                          ),
                                          i.jsxDEV(
                                            'div',
                                            { className: 'text-xl', children: '162.000d' },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 159,
                                              columnNumber: 19,
                                            },
                                            globalThis,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                        lineNumber: 157,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                    i.jsxDEV(
                                      'div',
                                      {
                                        className: 'flex justify-between',
                                        children: [
                                          i.jsxDEV(
                                            'div',
                                            { children: 'Phí ship' },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 162,
                                              columnNumber: 19,
                                            },
                                            globalThis,
                                          ),
                                          i.jsxDEV(
                                            'div',
                                            { className: 'text-xl text-[#27772F]', children: 'Miễn phí' },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 163,
                                              columnNumber: 19,
                                            },
                                            globalThis,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                        lineNumber: 161,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                    i.jsxDEV(
                                      'div',
                                      {
                                        className: 'flex justify-between',
                                        children: [
                                          i.jsxDEV(
                                            'div',
                                            { children: 'Giảm giá' },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 166,
                                              columnNumber: 19,
                                            },
                                            globalThis,
                                          ),
                                          i.jsxDEV(
                                            'div',
                                            { className: 'text-xl ', children: '-10.000d' },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 167,
                                              columnNumber: 19,
                                            },
                                            globalThis,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                        lineNumber: 165,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                    i.jsxDEV(
                                      'div',
                                      {
                                        className: 'flex justify-between',
                                        children: [
                                          i.jsxDEV(
                                            'div',
                                            { className: 'text-2xl font-bold', children: 'Tổng cộng' },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 170,
                                              columnNumber: 19,
                                            },
                                            globalThis,
                                          ),
                                          i.jsxDEV(
                                            'div',
                                            { className: 'text-2xl font-bold ', children: '152.000d' },
                                            void 0,
                                            !1,
                                            {
                                              fileName:
                                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                              lineNumber: 171,
                                              columnNumber: 19,
                                            },
                                            globalThis,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName:
                                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                        lineNumber: 169,
                                        columnNumber: 17,
                                      },
                                      globalThis,
                                    ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                                  lineNumber: 156,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                            lineNumber: 119,
                            columnNumber: 13,
                          },
                          globalThis,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                      lineNumber: 32,
                      columnNumber: 11,
                    },
                    globalThis,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                lineNumber: 11,
                columnNumber: 9,
              },
              globalThis,
            ),
          t === 3 &&
            i.jsxDEV(
              'div',
              {
                className: 'container flex flex-col items-center justify-center mx-auto space-y-2 h-96',
                children: [
                  i.jsxDEV(
                    'div',
                    { className: 'text-3xl font-medium', children: 'BẠN ĐÃ ĐẶT HÀNG THÀNH CÔNG' },
                    void 0,
                    !1,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                      lineNumber: 180,
                      columnNumber: 11,
                    },
                    globalThis,
                  ),
                  i.jsxDEV(
                    'div',
                    { className: 'text-3xl font-extralight', children: 'Mã đơn hàng #02144143' },
                    void 0,
                    !1,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                      lineNumber: 181,
                      columnNumber: 11,
                    },
                    globalThis,
                  ),
                  i.jsxDEV(
                    'div',
                    {
                      className: 'pt-8',
                      children: i.jsxDEV(
                        'button',
                        {
                          onClick: (n) => {
                            n.preventDefault(), e('/home')
                          },
                          className: 'rounded-lg shadow-xl px-8 text-xl bg-[#7775C5] py-3 text-white',
                          children: 'Quay về trang chủ',
                        },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                          lineNumber: 183,
                          columnNumber: 13,
                        },
                        globalThis,
                      ),
                    },
                    void 0,
                    !1,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                      lineNumber: 182,
                      columnNumber: 11,
                    },
                    globalThis,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
                lineNumber: 179,
                columnNumber: 9,
              },
              globalThis,
            ),
        ],
      },
      void 0,
      !0,
      {
        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Checkout/index.tsx',
        lineNumber: 9,
        columnNumber: 5,
      },
      globalThis,
    )
  },
  sr = () => {
    const e = Xe()
    return i.jsxDEV(
      'div',
      {
        onClick: () => e('/product'),
        className:
          'md:w-[20rem] lg:w-[14.75rem] w-[24rem] flex flex-col items-center  hover:shadow-2xl hover:cursor-pointer mb-4 item-content-hidden item',
        children: [
          i.jsxDEV(
            'div',
            {
              className: 'w-full h-[23.5rem] bg-gray-300',
              children: i.jsxDEV(
                'img',
                { src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/image-test-2.png', alt: '' },
                void 0,
                !1,
                {
                  fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                  lineNumber: 13,
                  columnNumber: 9,
                },
                globalThis,
              ),
            },
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
              lineNumber: 12,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            { className: 'px-4 py-2 text-xl text-center', children: 'Tên sách - Tên tác giả' },
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
              lineNumber: 15,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            { className: 'text-[#4848A4] font-medium py-4', children: '188.000d' },
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
              lineNumber: 16,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
        lineNumber: 8,
        columnNumber: 5,
      },
      globalThis,
    )
  },
  Ab = () => {
    const [e] = Gl(),
      [t, r] = X.useState(['a'])
    return (
      X.useEffect(() => {
        const n = new IntersectionObserver((a) => {
            console.log(a),
              a.forEach((c) => {
                c.isIntersecting
                  ? c.target.classList.add('item-content-show')
                  : c.target.classList.remove('item-content-show')
              })
          }),
          s = document.querySelectorAll('.item-content-hidden'),
          o = document.querySelectorAll('.item-content-hidden-right')
        s.forEach((a) => n.observe(a)), o.forEach((a) => n.observe(a))
      }, [t]),
      i.jsxDEV(
        'article',
        {
          className: 'flex flex-col',
          children: [
            i.jsxDEV(
              'div',
              {
                className: 'container flex flex-col w-full mx-auto',
                children: [
                  i.jsxDEV(
                    'div',
                    {
                      className: 'py-12',
                      children: i.jsxDEV(
                        'p',
                        { className: 'text-2xl', children: ['Danh sách từ khoá "', e.get('q'), '"'] },
                        void 0,
                        !0,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                          lineNumber: 45,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    },
                    void 0,
                    !1,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                      lineNumber: 44,
                      columnNumber: 9,
                    },
                    globalThis,
                  ),
                  t.map((n, s) =>
                    i.jsxDEV(
                      'div',
                      {
                        className: 'container flex flex-row flex-wrap justify-around px-8 mx-auto ',
                        children: [
                          i.jsxDEV(
                            sr,
                            {},
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                              lineNumber: 50,
                              columnNumber: 15,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            sr,
                            {},
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                              lineNumber: 51,
                              columnNumber: 15,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            sr,
                            {},
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                              lineNumber: 52,
                              columnNumber: 15,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            sr,
                            {},
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                              lineNumber: 53,
                              columnNumber: 15,
                            },
                            globalThis,
                          ),
                          i.jsxDEV(
                            sr,
                            {},
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                              lineNumber: 54,
                              columnNumber: 15,
                            },
                            globalThis,
                          ),
                        ],
                      },
                      `${n} + ${s}`,
                      !0,
                      {
                        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                        lineNumber: 49,
                        columnNumber: 13,
                      },
                      globalThis,
                    ),
                  ),
                  i.jsxDEV(
                    'div',
                    {
                      className: 'flex justify-center w-full py-8',
                      children: i.jsxDEV(
                        'button',
                        {
                          onClick: (n) => {
                            n.preventDefault(), r((s) => [...s, 'a'])
                          },
                          className: 'py-2 px-7 font-medium border-[3px] border-solid bg-gray-300 border-gray-500',
                          children: 'Xem thêm',
                        },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                          lineNumber: 60,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    },
                    void 0,
                    !1,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                      lineNumber: 59,
                      columnNumber: 9,
                    },
                    globalThis,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                lineNumber: 43,
                columnNumber: 7,
              },
              globalThis,
            ),
            i.jsxDEV(
              'div',
              {
                className: 'w-full  bg-[#4848A4] flex flex-col justify-center items-center space-y-8 py-8',
                children: [
                  i.jsxDEV(
                    'p',
                    { className: 'text-4xl font-medium text-white', children: 'BOOKSTAR' },
                    void 0,
                    !1,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                      lineNumber: 73,
                      columnNumber: 9,
                    },
                    globalThis,
                  ),
                  i.jsxDEV(
                    'div',
                    {
                      className: 'flex flex-row space-x-36',
                      children: [
                        i.jsxDEV(
                          'div',
                          {
                            className: 'flex flex-col items-center space-y-4 w-52',
                            children: [
                              i.jsxDEV(
                                Li,
                                { size: 120, color: 'white' },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                                  lineNumber: 76,
                                  columnNumber: 13,
                                },
                                globalThis,
                              ),
                              i.jsxDEV(
                                'p',
                                { className: 'text-2xl text-center text-white', children: 'Vân chuyển nhanh chóng' },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                                  lineNumber: 77,
                                  columnNumber: 13,
                                },
                                globalThis,
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                            lineNumber: 75,
                            columnNumber: 11,
                          },
                          globalThis,
                        ),
                        i.jsxDEV(
                          'div',
                          {
                            className: 'flex flex-col items-center space-y-4 w-52',
                            children: [
                              i.jsxDEV(
                                Wi,
                                { size: 120, color: 'white' },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                                  lineNumber: 80,
                                  columnNumber: 13,
                                },
                                globalThis,
                              ),
                              i.jsxDEV(
                                'p',
                                { className: 'text-2xl text-center text-white', children: 'Khuyến mãi hấp dẫn' },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                                  lineNumber: 81,
                                  columnNumber: 13,
                                },
                                globalThis,
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                            lineNumber: 79,
                            columnNumber: 11,
                          },
                          globalThis,
                        ),
                        i.jsxDEV(
                          'div',
                          {
                            className: 'flex flex-col items-center space-y-4 w-52',
                            children: [
                              i.jsxDEV(
                                ji,
                                { size: 120, color: 'white' },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                                  lineNumber: 84,
                                  columnNumber: 13,
                                },
                                globalThis,
                              ),
                              i.jsxDEV(
                                'p',
                                { className: 'text-2xl text-center text-white', children: 'Sách truyện phong phú' },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                                  lineNumber: 85,
                                  columnNumber: 13,
                                },
                                globalThis,
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          {
                            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                            lineNumber: 83,
                            columnNumber: 11,
                          },
                          globalThis,
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    {
                      fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                      lineNumber: 74,
                      columnNumber: 9,
                    },
                    globalThis,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                lineNumber: 72,
                columnNumber: 7,
              },
              globalThis,
            ),
            i.jsxDEV(
              'div',
              {
                style: {
                  backgroundImage: 'url(https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/header-expect.png)',
                },
                className:
                  'w-screen h-[27rem] flex flex-col justify-center items-center space-y-4 bg-[#4848A4] text-white',
                children: i.jsxDEV(
                  'div',
                  {
                    className:
                      'w-screen h-full flex flex-col justify-center items-center space-y-4 bg-[#4848A4]/60 text-white',
                    children: [
                      i.jsxDEV(
                        'p',
                        { className: 'mt-8 text-6xl font-medium', children: 'HÃY ĐẾN CỬA HÀNG CỦA CHÚNG TÔI' },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                          lineNumber: 95,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'p',
                        {
                          className: 'text-2xl font-medium',
                          children: 'Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh',
                        },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                          lineNumber: 96,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex items-center justify-center py-4',
                          children: i.jsxDEV(
                            'button',
                            {
                              className:
                                'w-[15.75rem] py-2 border-[2px] border-solid border-white rounded-3xl text-white font-medium',
                              children: i.jsxDEV(
                                'a',
                                { href: 'https://oven.sh/', target: '_blank', children: 'Tìm hiểu thêm' },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                                  lineNumber: 99,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            },
                            void 0,
                            !1,
                            {
                              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                              lineNumber: 98,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                          lineNumber: 97,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                    lineNumber: 94,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              },
              void 0,
              !1,
              {
                fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
                lineNumber: 90,
                columnNumber: 7,
              },
              globalThis,
            ),
          ],
        },
        void 0,
        !0,
        {
          fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/Search/index.tsx',
          lineNumber: 42,
          columnNumber: 5,
        },
        globalThis,
      )
    )
  },
  jb = () => {
    const e = Xe()
    return i.jsxDEV(
      'div',
      {
        className: 'container mx-auto p-2.5 flex flex-col justify-center items-center space-y-[1.625rem] w-[80rem]',
        children: [
          i.jsxDEV(
            'div',
            {
              className:
                'flex flex-col w-full px-4 py-2 space-y-2 shadow-xl border-[0.5px] border-solid border-gray-300',
              children: [
                i.jsxDEV(
                  'div',
                  {
                    className: 'py-2 text-3xl',
                    children: i.jsxDEV(
                      'p',
                      { children: 'CHI TIẾT ĐƠN HÀNG' },
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                        lineNumber: 10,
                        columnNumber: 11,
                      },
                      globalThis,
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                    lineNumber: 9,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'px-4 rounded-full bg-[#A2E7A9] w-fit text-[#27772F] font-medium',
                    children: 'Đơn hàng hoàn tất',
                  },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                    lineNumber: 12,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex flex-col py-3 text-xl font-[350] space-y-1',
                    children: [
                      i.jsxDEV(
                        'div',
                        {
                          children: [
                            'Mã đơn hàng: ',
                            i.jsxDEV(
                              'strong',
                              { children: '103243434' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 15,
                                columnNumber: 26,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 14,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          children: [
                            'Ngày mua: ',
                            i.jsxDEV(
                              'strong',
                              { children: '18/07/2023' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 18,
                                columnNumber: 23,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 17,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          children: [
                            'Tổng tiền: ',
                            i.jsxDEV(
                              'strong',
                              { children: '153.335d' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 21,
                                columnNumber: 24,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 20,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { children: 'Ghi chú: (Không có)' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 23,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                    lineNumber: 13,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
              lineNumber: 8,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className: 'flex w-full px-4 border-[0.5px] border-solid border-gray-300 shadow-xl',
              children: [
                i.jsxDEV(
                  'div',
                  {
                    className: 'py-2 pl-4 space-y-3 grow',
                    children: [
                      i.jsxDEV(
                        'div',
                        { className: 'text-3xl ', children: 'Thông tin người nhận' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 28,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-col space-y-3 text-xl font-light',
                          children: [
                            i.jsxDEV(
                              'p',
                              { children: 'Trần Lê Khánh Hân' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 30,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'p',
                              { children: '11 Đoàn Kết, TP. Thủ Đức, TP.Hồ Chí Minh, Việt Nam' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 31,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'p',
                              { children: 'Tel: 0383188154' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 32,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 29,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                    lineNumber: 27,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  { className: 'h-auto border-[0.5px] border-solid border-gray-300' },
                  void 0,
                  !1,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                    lineNumber: 35,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'w-1/2 py-2 pl-4',
                    children: [
                      i.jsxDEV(
                        'div',
                        { className: 'text-3xl', children: 'Phương thức thanh toán' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 37,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-col space-y-3 text-xl font-light',
                          children: i.jsxDEV(
                            'p',
                            { className: 'py-4', children: 'Thanh toán khi nhận hàng' },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                              lineNumber: 39,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 38,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                    lineNumber: 36,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
              lineNumber: 26,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className:
                'flex flex-col w-full px-4 border-[0.5px] border-solid border-gray-300 shadow-xl space-y-2 text-base',
              children: [
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex justify-between w-full py-6 text-xl',
                    children: [
                      i.jsxDEV(
                        'div',
                        { className: 'w-[6%] text-center', children: 'STT' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 45,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-1/12', children: 'Hình ảnh' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 46,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-5/12', children: 'Tên sản phẩm' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 47,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-1/12', children: 'Giá tiền' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 48,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-1/12', children: 'Số lượng' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 49,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-1/12', children: 'Thành tiền' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 50,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                    lineNumber: 44,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex justify-between w-full py-2 text-xl border-t-[1px] border-gray-300 items-center ',
                    children: [
                      i.jsxDEV(
                        'div',
                        {
                          className: 'w-[6%] text-center flex items-center justify-center',
                          children: i.jsxDEV(
                            'p',
                            { children: '1' },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                              lineNumber: 54,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 53,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          className: 'w-1/12',
                          children: i.jsxDEV(
                            'div',
                            {
                              className: 'w-[80px] h-[112px] ',
                              children: i.jsxDEV(
                                'img',
                                {
                                  src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/origin-1.png',
                                  alt: '',
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                  lineNumber: 58,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                              lineNumber: 57,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 56,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-5/12', children: 'Chàng Băng Giá Và Nàng Lạnh Lùng - 3' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 61,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-1/12', children: '188.888d' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 62,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-1/12 text-center', children: '1' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 63,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-1/12', children: '188.888d' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 64,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                    lineNumber: 52,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className: 'flex justify-between w-full py-2 text-xl border-t-[1px] border-gray-300 items-center ',
                    children: [
                      i.jsxDEV(
                        'div',
                        {
                          className: 'w-[6%] text-center flex items-center justify-center',
                          children: i.jsxDEV(
                            'p',
                            { children: '2' },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                              lineNumber: 68,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 67,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          className: 'w-1/12',
                          children: i.jsxDEV(
                            'div',
                            {
                              className: 'w-[80px] h-[112px] ',
                              children: i.jsxDEV(
                                'img',
                                {
                                  src: 'https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/origin-2.png',
                                  alt: '',
                                },
                                void 0,
                                !1,
                                {
                                  fileName:
                                    '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                  lineNumber: 72,
                                  columnNumber: 15,
                                },
                                globalThis,
                              ),
                            },
                            void 0,
                            !1,
                            {
                              fileName:
                                '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                              lineNumber: 71,
                              columnNumber: 13,
                            },
                            globalThis,
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 70,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-5/12', children: 'Skip and Loafer - Nhịp Bước Tuổi Xanh - 1' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 75,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-1/12', children: '188.888d' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 76,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-1/12 text-center', children: '1' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 77,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        { className: 'w-1/12', children: '188.888d' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 78,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                    lineNumber: 66,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
                i.jsxDEV(
                  'div',
                  {
                    className:
                      'flex font-[350] justify-end space-x-2 w-full py-6 text-xl border-t-[1px] border-gray-300 items-center',
                    children: [
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-col items-end',
                          children: [
                            i.jsxDEV(
                              'p',
                              { children: 'Thành tiền:' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 82,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'p',
                              { children: 'Phí vận chuyển:' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 83,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'p',
                              { children: 'Gỉảm giá:' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 84,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'p',
                              { children: 'Tổng Số Tiền (gồm VAT):' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 85,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 81,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                      i.jsxDEV(
                        'div',
                        {
                          className: 'flex flex-col items-end font-medium',
                          children: [
                            i.jsxDEV(
                              'p',
                              { children: '376.000d' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 88,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'p',
                              { children: 'Miễn phí' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 89,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'p',
                              { children: '0' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 90,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                            i.jsxDEV(
                              'p',
                              { children: '376.000d' },
                              void 0,
                              !1,
                              {
                                fileName:
                                  '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                                lineNumber: 91,
                                columnNumber: 13,
                              },
                              globalThis,
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName:
                            '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                          lineNumber: 87,
                          columnNumber: 11,
                        },
                        globalThis,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                    lineNumber: 80,
                    columnNumber: 9,
                  },
                  globalThis,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
              lineNumber: 43,
              columnNumber: 7,
            },
            globalThis,
          ),
          i.jsxDEV(
            'div',
            {
              className: 'flex items-center justify-center w-full ',
              children: i.jsxDEV(
                'button',
                {
                  onClick: () => e('/order'),
                  className: 'border-solid border-[1px] border-[#4848A4] p-3 rounded-lg font-[450] text-[#4848a4]',
                  children: 'Xem danh sách đơn hàng',
                },
                void 0,
                !1,
                {
                  fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
                  lineNumber: 96,
                  columnNumber: 9,
                },
                globalThis,
              ),
            },
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
              lineNumber: 95,
              columnNumber: 7,
            },
            globalThis,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/view/screens/OriginCartDetail/index.tsx',
        lineNumber: 7,
        columnNumber: 5,
      },
      globalThis,
    )
  },
  Wb = hr(
    X.lazy(() =>
      vr(
        () => import('./index-7d443de2.js'),
        ['assets/index-7d443de2.js', 'assets/index-a757f20d.js', 'assets/index-b541c59c.css'],
      ),
    ),
    i.jsxDEV(
      br,
      {},
      void 0,
      !1,
      { fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx', lineNumber: 15, columnNumber: 3 },
      globalThis,
    ),
  ),
  Lb = hr(
    X.lazy(() =>
      vr(
        () => import('./index-d7be4a6b.js'),
        ['assets/index-d7be4a6b.js', 'assets/index-a757f20d.js', 'assets/index-b541c59c.css'],
      ),
    ),
    i.jsxDEV(
      br,
      {},
      void 0,
      !1,
      { fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx', lineNumber: 19, columnNumber: 3 },
      globalThis,
    ),
  ),
  Mb = hr(
    X.lazy(() =>
      vr(
        () => import('./index-e13fe88e.js'),
        ['assets/index-e13fe88e.js', 'assets/index-a757f20d.js', 'assets/index-b541c59c.css'],
      ),
    ),
    i.jsxDEV(
      br,
      {},
      void 0,
      !1,
      { fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx', lineNumber: 23, columnNumber: 3 },
      globalThis,
    ),
  ),
  Ib = hr(
    X.lazy(() =>
      vr(
        () => import('./NotFounding-57e6f7b3.js'),
        ['assets/NotFounding-57e6f7b3.js', 'assets/index-a757f20d.js', 'assets/index-b541c59c.css'],
      ),
    ),
    i.jsxDEV(
      br,
      {},
      void 0,
      !1,
      { fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx', lineNumber: 27, columnNumber: 3 },
      globalThis,
    ),
  ),
  Pb = hr(
    X.lazy(() =>
      vr(
        () => import('./NotAuthorization-c4e2a6ea.js'),
        ['assets/NotAuthorization-c4e2a6ea.js', 'assets/index-a757f20d.js', 'assets/index-b541c59c.css'],
      ),
    ),
    i.jsxDEV(
      br,
      {},
      void 0,
      !1,
      { fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx', lineNumber: 31, columnNumber: 3 },
      globalThis,
    ),
  ),
  Ob = [
    {
      path: Pe.AUTH,
      element: i.jsxDEV(
        Wb,
        {},
        void 0,
        !1,
        { fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx', lineNumber: 37, columnNumber: 14 },
        globalThis,
      ),
      children: [
        {
          path: Pe.AUTH,
          element: i.jsxDEV(
            zs,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx',
              lineNumber: 41,
              columnNumber: 18,
            },
            globalThis,
          ),
        },
        {
          path: Pe.HOME,
          element: i.jsxDEV(
            zs,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx',
              lineNumber: 45,
              columnNumber: 18,
            },
            globalThis,
          ),
        },
        {
          path: Pe.CARD_DETAIL,
          element: i.jsxDEV(
            gc,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx',
              lineNumber: 49,
              columnNumber: 18,
            },
            globalThis,
          ),
        },
        {
          path: Pe.ABOUT,
          element: i.jsxDEV(
            wc,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx',
              lineNumber: 53,
              columnNumber: 18,
            },
            globalThis,
          ),
        },
        {
          path: Pe.ORDER_DETAIL,
          element: i.jsxDEV(
            yc,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx',
              lineNumber: 57,
              columnNumber: 18,
            },
            globalThis,
          ),
        },
        {
          path: Pe.CART_LIST,
          element: i.jsxDEV(
            Tc,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx',
              lineNumber: 61,
              columnNumber: 18,
            },
            globalThis,
          ),
        },
        {
          path: Pe.USER_DETAIL,
          element: i.jsxDEV(
            Cb,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx',
              lineNumber: 65,
              columnNumber: 18,
            },
            globalThis,
          ),
        },
        {
          path: Pe.SEARCH,
          element: i.jsxDEV(
            Ab,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx',
              lineNumber: 69,
              columnNumber: 18,
            },
            globalThis,
          ),
        },
        {
          path: Pe.CHECKOUT,
          element: i.jsxDEV(
            Vb,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx',
              lineNumber: 73,
              columnNumber: 18,
            },
            globalThis,
          ),
        },
        {
          path: Pe.ORIGIN_CART_DETAIL,
          element: i.jsxDEV(
            jb,
            {},
            void 0,
            !1,
            {
              fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx',
              lineNumber: 77,
              columnNumber: 18,
            },
            globalThis,
          ),
        },
      ],
    },
    {
      path: Pe.LOG_IN,
      element: i.jsxDEV(
        Lb,
        {},
        void 0,
        !1,
        { fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx', lineNumber: 83, columnNumber: 14 },
        globalThis,
      ),
    },
    {
      path: Pe.SIGN_UP,
      element: i.jsxDEV(
        Mb,
        {},
        void 0,
        !1,
        { fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx', lineNumber: 87, columnNumber: 14 },
        globalThis,
      ),
    },
    {
      path: '/403',
      element: i.jsxDEV(
        Pb,
        {},
        void 0,
        !1,
        { fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx', lineNumber: 91, columnNumber: 14 },
        globalThis,
      ),
    },
    {
      path: '*',
      element: i.jsxDEV(
        Ib,
        {},
        void 0,
        !1,
        { fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/route.tsx', lineNumber: 95, columnNumber: 14 },
        globalThis,
      ),
    },
  ],
  $b = Cl(Ob),
  Bb = () =>
    i.jsxDEV(
      Il,
      {
        router: $b,
        fallbackElement: i.jsxDEV(
          'p',
          { children: 'Loading....' },
          void 0,
          !1,
          {
            fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/index.tsx',
            lineNumber: 6,
            columnNumber: 59,
          },
          globalThis,
        ),
      },
      void 0,
      !1,
      { fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/routes/index.tsx', lineNumber: 6, columnNumber: 10 },
      globalThis,
    )
function Fb() {
  return i.jsxDEV(
    Rb,
    {
      children: i.jsxDEV(
        Bb,
        {},
        void 0,
        !1,
        { fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/App.tsx', lineNumber: 7, columnNumber: 7 },
        this,
      ),
    },
    void 0,
    !1,
    { fileName: '/Users/vfa/Workspace/uit/ie106-front-end/src/App.tsx', lineNumber: 6, columnNumber: 5 },
    this,
  )
}
const ex = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Fb }, Symbol.toStringTag, { value: 'Module' }),
)
export {
  ex as A,
  Kb as F,
  Me as G,
  Hb as O,
  na as R,
  qb as a,
  Jb as b,
  ic as c,
  Gb as d,
  Zb as e,
  Xb as f,
  Qb as g,
  _b as h,
  sc as i,
  ac as j,
  Yb as k,
  Ub as l,
  Xe as u,
}
