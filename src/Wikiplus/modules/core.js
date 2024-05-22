// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
(function Wikiplus() {
	/*! Wikiplus - 4.0.11 | Eridanus Sora (妹空酱) | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
	var t = {
			509: function (t, e, r) {
				var n = r(9985),
					o = r(3691),
					i = TypeError;
				t.exports = function (t) {
					if (n(t)) return t;
					throw new i(o(t) + ' is not a function');
				};
			},
			2655: function (t, e, r) {
				var n = r(9429),
					o = r(3691),
					i = TypeError;
				t.exports = function (t) {
					if (n(t)) return t;
					throw new i(o(t) + ' is not a constructor');
				};
			},
			9945: function (t, e, r) {
				var n = r(3914).has;
				t.exports = function (t) {
					return n(t), t;
				};
			},
			3550: function (t, e, r) {
				var n = r(9985),
					o = String,
					i = TypeError;
				t.exports = function (t) {
					if ('object' == typeof t || n(t)) return t;
					throw new i("Can't set " + o(t) + ' as a prototype');
				};
			},
			7370: function (t, e, r) {
				var n = r(4201),
					o = r(5391),
					i = r(2560).f,
					a = n('unscopables'),
					u = Array.prototype;
				void 0 === u[a] && i(u, a, {configurable: !0, value: o(null)}),
					(t.exports = function (t) {
						u[a][t] = !0;
					});
			},
			1514: function (t, e, r) {
				var n = r(730).charAt;
				t.exports = function (t, e, r) {
					return e + (r ? n(t, e).length : 1);
				};
			},
			767: function (t, e, r) {
				var n = r(3622),
					o = TypeError;
				t.exports = function (t, e) {
					if (n(e, t)) return t;
					throw new o('Incorrect invocation');
				};
			},
			5027: function (t, e, r) {
				var n = r(8999),
					o = String,
					i = TypeError;
				t.exports = function (t) {
					if (n(t)) return t;
					throw new i(o(t) + ' is not an object');
				};
			},
			1655: function (t, e, r) {
				var n = r(3689);
				t.exports = n(function () {
					if ('function' == typeof ArrayBuffer) {
						var t = new ArrayBuffer(8);
						Object.isExtensible(t) && Object.defineProperty(t, 'a', {value: 8});
					}
				});
			},
			7612: function (t, e, r) {
				var n = r(2960).forEach,
					o = r(6834)('forEach');
				t.exports = o
					? [].forEach
					: function (t) {
							return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
						};
			},
			1055: function (t, e, r) {
				var n = r(4071),
					o = r(2615),
					i = r(690),
					a = r(1228),
					u = r(3292),
					c = r(9429),
					s = r(6310),
					f = r(6522),
					l = r(5185),
					p = r(1664),
					h = Array;
				t.exports = function (t) {
					var e = i(t),
						r = c(this),
						v = arguments.length,
						d = v > 1 ? arguments[1] : void 0,
						y = void 0 !== d;
					y && (d = n(d, v > 2 ? arguments[2] : void 0));
					var g,
						m,
						b,
						w,
						x,
						k,
						S = p(e),
						E = 0;
					if (!S || (this === h && u(S)))
						for (g = s(e), m = r ? new this(g) : h(g); g > E; E++) (k = y ? d(e[E], E) : e[E]), f(m, E, k);
					else
						for (x = (w = l(e, S)).next, m = r ? new this() : []; !(b = o(x, w)).done; E++)
							(k = y ? a(w, d, [b.value, E], !0) : b.value), f(m, E, k);
					return (m.length = E), m;
				};
			},
			4328: function (t, e, r) {
				var n = r(5290),
					o = r(7578),
					i = r(6310),
					a = function (t) {
						return function (e, r, a) {
							var u,
								c = n(e),
								s = i(c),
								f = o(a, s);
							if (t && r != r) {
								for (; s > f; ) if ((u = c[f++]) != u) return !0;
							} else for (; s > f; f++) if ((t || f in c) && c[f] === r) return t || f || 0;
							return !t && -1;
						};
					};
				t.exports = {
					includes: a(!0),
					indexOf: a(!1),
				};
			},
			2960: function (t, e, r) {
				var n = r(4071),
					o = r(8844),
					i = r(4413),
					a = r(690),
					u = r(6310),
					c = r(7120),
					s = o([].push),
					f = function (t) {
						var e = 1 === t,
							r = 2 === t,
							o = 3 === t,
							f = 4 === t,
							l = 6 === t,
							p = 7 === t,
							h = 5 === t || l;
						return function (v, d, y, g) {
							for (
								var m,
									b,
									w = a(v),
									x = i(w),
									k = n(d, y),
									S = u(x),
									E = 0,
									O = g || c,
									P = e ? O(v, S) : r || p ? O(v, 0) : void 0;
								S > E;
								E++
							)
								if ((h || E in x) && ((b = k((m = x[E]), E, w)), t))
									if (e) P[E] = b;
									else if (b)
										switch (t) {
											case 3:
												return !0;
											case 5:
												return m;
											case 6:
												return E;
											case 2:
												s(P, m);
										}
									else
										switch (t) {
											case 4:
												return !1;
											case 7:
												s(P, m);
										}
							return l ? -1 : o || f ? f : P;
						};
					};
				t.exports = {
					forEach: f(0),
					map: f(1),
					filter: f(2),
					some: f(3),
					every: f(4),
					find: f(5),
					findIndex: f(6),
					filterReject: f(7),
				};
			},
			9042: function (t, e, r) {
				var n = r(3689),
					o = r(4201),
					i = r(3615),
					a = o('species');
				t.exports = function (t) {
					return (
						i >= 51 ||
						!n(function () {
							var e = [];
							return (
								((e.constructor = {})[a] = function () {
									return {
										foo: 1,
									};
								}),
								1 !== e[t](Boolean).foo
							);
						})
					);
				};
			},
			6834: function (t, e, r) {
				var n = r(3689);
				t.exports = function (t, e) {
					var r = [][t];
					return (
						!!r &&
						n(function () {
							r.call(
								null,
								e ||
									function () {
										return 1;
									},
								1
							);
						})
					);
				};
			},
			5649: function (t, e, r) {
				var n = r(7697),
					o = r(2297),
					i = TypeError,
					a = Object.getOwnPropertyDescriptor,
					u =
						n &&
						!(function () {
							if (void 0 !== this) return !0;
							try {
								Object.defineProperty([], 'length', {writable: !1}).length = 1;
							} catch (t) {
								return t instanceof TypeError;
							}
						})();
				t.exports = u
					? function (t, e) {
							if (o(t) && !a(t, 'length').writable) throw new i('Cannot set read only .length');
							return (t.length = e);
						}
					: function (t, e) {
							return (t.length = e);
						};
			},
			9015: function (t, e, r) {
				var n = r(7578),
					o = r(6310),
					i = r(6522),
					a = Array,
					u = Math.max;
				t.exports = function (t, e, r) {
					for (
						var c = o(t), s = n(e, c), f = n(void 0 === r ? c : r, c), l = a(u(f - s, 0)), p = 0;
						s < f;
						s++, p++
					)
						i(l, p, t[s]);
					return (l.length = p), l;
				};
			},
			6004: function (t, e, r) {
				var n = r(8844);
				t.exports = n([].slice);
			},
			382: function (t, e, r) {
				var n = r(9015),
					o = Math.floor,
					i = function (t, e) {
						var r = t.length,
							c = o(r / 2);
						return r < 8 ? a(t, e) : u(t, i(n(t, 0, c), e), i(n(t, c), e), e);
					},
					a = function (t, e) {
						for (var r, n, o = t.length, i = 1; i < o; ) {
							for (n = i, r = t[i]; n && e(t[n - 1], r) > 0; ) t[n] = t[--n];
							n !== i++ && (t[n] = r);
						}
						return t;
					},
					u = function (t, e, r, n) {
						for (var o = e.length, i = r.length, a = 0, u = 0; a < o || u < i; )
							t[a + u] =
								a < o && u < i ? (n(e[a], r[u]) <= 0 ? e[a++] : r[u++]) : a < o ? e[a++] : r[u++];
						return t;
					};
				t.exports = i;
			},
			5271: function (t, e, r) {
				var n = r(2297),
					o = r(9429),
					i = r(8999),
					a = r(4201)('species'),
					u = Array;
				t.exports = function (t) {
					var e;
					return (
						n(t) &&
							((e = t.constructor),
							((o(e) && (e === u || n(e.prototype))) || (i(e) && null === (e = e[a]))) && (e = void 0)),
						void 0 === e ? u : e
					);
				};
			},
			7120: function (t, e, r) {
				var n = r(5271);
				t.exports = function (t, e) {
					return new (n(t))(0 === e ? 0 : e);
				};
			},
			2399: function (t, e, r) {
				var n = r(2615),
					o = r(6058),
					i = r(4849);
				t.exports = function (t, e, r, a) {
					try {
						var u = i(t, 'return');
						if (u)
							return o('Promise')
								.resolve(n(u, t))
								.then(
									function () {
										e(r);
									},
									function (t) {
										a(t);
									}
								);
					} catch (t) {
						return a(t);
					}
					e(r);
				};
			},
			7394: function (t, e, r) {
				var n = r(2615),
					o = r(9302),
					i = r(5027),
					a = r(5391),
					u = r(5773),
					c = r(6045),
					s = r(4201),
					f = r(618),
					l = r(6058),
					p = r(4849),
					h = r(3070),
					v = r(7807),
					d = r(2125),
					y = l('Promise'),
					g = s('toStringTag'),
					m = 'AsyncIteratorHelper',
					b = 'WrapForValidAsyncIterator',
					w = f.set,
					x = function (t) {
						var e = !t,
							r = f.getterFor(t ? b : m),
							u = function (t) {
								var n = o(function () {
										return r(t);
									}),
									i = n.error,
									a = n.value;
								return i || (e && a.done)
									? {exit: !0, value: i ? y.reject(a) : y.resolve(v(void 0, !0))}
									: {exit: !1, value: a};
							};
						return c(a(h), {
							next: function () {
								var t = u(this),
									e = t.value;
								if (t.exit) return e;
								var r = o(function () {
										return i(e.nextHandler(y));
									}),
									n = r.error,
									a = r.value;
								return n && (e.done = !0), n ? y.reject(a) : y.resolve(a);
							},
							return: function () {
								var e = u(this),
									r = e.value;
								if (e.exit) return r;
								r.done = !0;
								var a,
									c,
									s = r.iterator,
									f = o(function () {
										if (r.inner)
											try {
												d(r.inner.iterator, 'normal');
											} catch (t) {
												return d(s, 'throw', t);
											}
										return p(s, 'return');
									});
								return (
									(a = c = f.value),
									f.error
										? y.reject(c)
										: void 0 === a
											? y.resolve(v(void 0, !0))
											: ((c = (f = o(function () {
													return n(a, s);
												})).value),
												f.error
													? y.reject(c)
													: t
														? y.resolve(c)
														: y.resolve(c).then(function (t) {
																return i(t), v(void 0, !0);
															}))
								);
							},
						});
					},
					k = x(!0),
					S = x(!1);
				u(S, g, 'Async Iterator Helper'),
					(t.exports = function (t, e) {
						var r = function (r, n) {
							n ? ((n.iterator = r.iterator), (n.next = r.next)) : (n = r),
								(n.type = e ? b : m),
								(n.nextHandler = t),
								(n.counter = 0),
								(n.done = !1),
								w(this, n);
						};
						return (r.prototype = e ? k : S), r;
					});
			},
			2489: function (t, e, r) {
				var n = r(2615),
					o = r(509),
					i = r(5027),
					a = r(8999),
					u = r(5565),
					c = r(6058),
					s = r(2302),
					f = r(2399),
					l = function (t) {
						var e = 0 === t,
							r = 1 === t,
							l = 2 === t,
							p = 3 === t;
						return function (t, h, v) {
							i(t);
							var d = void 0 !== h;
							(!d && e) || o(h);
							var y = s(t),
								g = c('Promise'),
								m = y.iterator,
								b = y.next,
								w = 0;
							return new g(function (t, o) {
								var c = function (t) {
										f(m, o, t, o);
									},
									s = function () {
										try {
											if (d)
												try {
													u(w);
												} catch (t) {
													c(t);
												}
											g.resolve(i(n(b, m))).then(function (n) {
												try {
													if (i(n).done) e ? ((v.length = w), t(v)) : t(!p && (l || void 0));
													else {
														var u = n.value;
														try {
															if (d) {
																var y = h(u, w),
																	b = function (n) {
																		if (r) s();
																		else if (l) n ? s() : f(m, t, !1, o);
																		else if (e)
																			try {
																				(v[w++] = n), s();
																			} catch (t) {
																				c(t);
																			}
																		else n ? f(m, t, p || u, o) : s();
																	};
																a(y) ? g.resolve(y).then(b, c) : b(y);
															} else (v[w++] = u), s();
														} catch (t) {
															c(t);
														}
													}
												} catch (t) {
													o(t);
												}
											}, o);
										} catch (t) {
											o(t);
										}
									};
								s();
							});
						};
					};
				t.exports = {
					toArray: l(0),
					forEach: l(1),
					every: l(2),
					some: l(3),
					find: l(4),
				};
			},
			3070: function (t, e, r) {
				var n,
					o,
					i = r(9037),
					a = r(4091),
					u = r(9985),
					c = r(5391),
					s = r(1868),
					f = r(1880),
					l = r(4201),
					p = r(3931),
					h = 'USE_FUNCTION_CONSTRUCTOR',
					v = l('asyncIterator'),
					d = i.AsyncIterator,
					y = a.AsyncIteratorPrototype;
				if (y) n = y;
				else if (u(d)) n = d.prototype;
				else if (a[h] || i[h])
					try {
						(o = s(s(s(Function('return async function*(){}()')())))), s(o) === Object.prototype && (n = o);
					} catch (t) {}
				n ? p && (n = c(n)) : (n = {}),
					u(n[v]) ||
						f(n, v, function () {
							return this;
						}),
					(t.exports = n);
			},
			1228: function (t, e, r) {
				var n = r(5027),
					o = r(2125);
				t.exports = function (t, e, r, i) {
					try {
						return i ? e(n(r)[0], r[1]) : e(r);
					} catch (e) {
						o(t, 'throw', e);
					}
				};
			},
			6431: function (t, e, r) {
				var n = r(4201)('iterator'),
					o = !1;
				try {
					var i = 0,
						a = {
							next: function () {
								return {
									done: !!i++,
								};
							},
							return: function () {
								o = !0;
							},
						};
					(a[n] = function () {
						return this;
					}),
						Array.from(a, function () {
							throw 2;
						});
				} catch (t) {}
				t.exports = function (t, e) {
					try {
						if (!e && !o) return !1;
					} catch (t) {
						return !1;
					}
					var r = !1;
					try {
						var i = {};
						(i[n] = function () {
							return {
								next: function () {
									return {
										done: (r = !0),
									};
								},
							};
						}),
							t(i);
					} catch (t) {}
					return r;
				};
			},
			6648: function (t, e, r) {
				var n = r(8844),
					o = n({}.toString),
					i = n(''.slice);
				t.exports = function (t) {
					return i(o(t), 8, -1);
				};
			},
			926: function (t, e, r) {
				var n = r(3043),
					o = r(9985),
					i = r(6648),
					a = r(4201)('toStringTag'),
					u = Object,
					c =
						'Arguments' ===
						i(
							(function () {
								return arguments;
							})()
						);
				t.exports = n
					? i
					: function (t) {
							var e, r, n;
							return void 0 === t
								? 'Undefined'
								: null === t
									? 'Null'
									: 'string' ==
										  typeof (r = (function (t, e) {
												try {
													return t[e];
												} catch (t) {}
										  })((e = u(t)), a))
										? r
										: c
											? i(e)
											: 'Object' === (n = i(e)) && o(e.callee)
												? 'Arguments'
												: n;
						};
			},
			800: function (t, e, r) {
				var n = r(5391),
					o = r(2148),
					i = r(6045),
					a = r(4071),
					u = r(767),
					c = r(981),
					s = r(8734),
					f = r(1934),
					l = r(7807),
					p = r(4241),
					h = r(7697),
					v = r(5375).fastKey,
					d = r(618),
					y = d.set,
					g = d.getterFor;
				t.exports = {
					getConstructor: function (t, e, r, f) {
						var l = t(function (t, o) {
								u(t, p),
									y(t, {type: e, index: n(null), first: void 0, last: void 0, size: 0}),
									h || (t.size = 0),
									c(o) || s(o, t[f], {that: t, AS_ENTRIES: r});
							}),
							p = l.prototype,
							d = g(e),
							m = function (t, e, r) {
								var n,
									o,
									i = d(t),
									a = b(t, e);
								return (
									a
										? (a.value = r)
										: ((i.last = a =
												{
													index: (o = v(e, !0)),
													key: e,
													value: r,
													previous: (n = i.last),
													next: void 0,
													removed: !1,
												}),
											i.first || (i.first = a),
											n && (n.next = a),
											h ? i.size++ : t.size++,
											'F' !== o && (i.index[o] = a)),
									t
								);
							},
							b = function (t, e) {
								var r,
									n = d(t),
									o = v(e);
								if ('F' !== o) return n.index[o];
								for (r = n.first; r; r = r.next) if (r.key === e) return r;
							};
						return (
							i(p, {
								clear: function () {
									for (var t = d(this), e = t.index, r = t.first; r; )
										(r.removed = !0),
											r.previous && (r.previous = r.previous.next = void 0),
											delete e[r.index],
											(r = r.next);
									(t.first = t.last = void 0), h ? (t.size = 0) : (this.size = 0);
								},
								delete: function (t) {
									var e = this,
										r = d(e),
										n = b(e, t);
									if (n) {
										var o = n.next,
											i = n.previous;
										delete r.index[n.index],
											(n.removed = !0),
											i && (i.next = o),
											o && (o.previous = i),
											r.first === n && (r.first = o),
											r.last === n && (r.last = i),
											h ? r.size-- : e.size--;
									}
									return !!n;
								},
								forEach: function (t) {
									for (
										var e, r = d(this), n = a(t, arguments.length > 1 ? arguments[1] : void 0);
										(e = e ? e.next : r.first);

									)
										for (n(e.value, e.key, this); e && e.removed; ) e = e.previous;
								},
								has: function (t) {
									return !!b(this, t);
								},
							}),
							i(
								p,
								r
									? {
											get: function (t) {
												var e = b(this, t);
												return e && e.value;
											},
											set: function (t, e) {
												return m(this, 0 === t ? 0 : t, e);
											},
										}
									: {
											add: function (t) {
												return m(this, (t = 0 === t ? 0 : t), t);
											},
										}
							),
							h &&
								o(p, 'size', {
									configurable: !0,
									get: function () {
										return d(this).size;
									},
								}),
							l
						);
					},
					setStrong: function (t, e, r) {
						var n = e + ' Iterator',
							o = g(e),
							i = g(n);
						f(
							t,
							e,
							function (t, e) {
								y(this, {type: n, target: t, state: o(t), kind: e, last: void 0});
							},
							function () {
								for (var t = i(this), e = t.kind, r = t.last; r && r.removed; ) r = r.previous;
								return t.target && (t.last = r = r ? r.next : t.state.first)
									? l('keys' === e ? r.key : 'values' === e ? r.value : [r.key, r.value], !1)
									: ((t.target = void 0), l(void 0, !0));
							},
							r ? 'entries' : 'values',
							!r,
							!0
						),
							p(e);
					},
				};
			},
			319: function (t, e, r) {
				var n = r(9989),
					o = r(9037),
					i = r(8844),
					a = r(5266),
					u = r(1880),
					c = r(5375),
					s = r(8734),
					f = r(767),
					l = r(9985),
					p = r(981),
					h = r(8999),
					v = r(3689),
					d = r(6431),
					y = r(5997),
					g = r(3457);
				t.exports = function (t, e, r) {
					var m = -1 !== t.indexOf('Map'),
						b = -1 !== t.indexOf('Weak'),
						w = m ? 'set' : 'add',
						x = o[t],
						k = x && x.prototype,
						S = x,
						E = {},
						O = function (t) {
							var e = i(k[t]);
							u(
								k,
								t,
								'add' === t
									? function (t) {
											return e(this, 0 === t ? 0 : t), this;
										}
									: 'delete' === t
										? function (t) {
												return !(b && !h(t)) && e(this, 0 === t ? 0 : t);
											}
										: 'get' === t
											? function (t) {
													return b && !h(t) ? void 0 : e(this, 0 === t ? 0 : t);
												}
											: 'has' === t
												? function (t) {
														return !(b && !h(t)) && e(this, 0 === t ? 0 : t);
													}
												: function (t, r) {
														return e(this, 0 === t ? 0 : t, r), this;
													}
							);
						};
					if (
						a(
							t,
							!l(x) ||
								!(
									b ||
									(k.forEach &&
										!v(function () {
											new x().entries().next();
										}))
								)
						)
					)
						(S = r.getConstructor(e, t, m, w)), c.enable();
					else if (a(t, !0)) {
						var P = new S(),
							j = P[w](b ? {} : -0, 1) !== P,
							L = v(function () {
								P.has(1);
							}),
							_ = d(function (t) {
								new x(t);
							}),
							I =
								!b &&
								v(function () {
									for (var t = new x(), e = 5; e--; ) t[w](e, e);
									return !t.has(-0);
								});
						_ ||
							(((S = e(function (t, e) {
								f(t, k);
								var r = g(new x(), t, S);
								return p(e) || s(e, r[w], {that: r, AS_ENTRIES: m}), r;
							})).prototype = k),
							(k.constructor = S)),
							(L || I) && (O('delete'), O('has'), m && O('get')),
							(I || j) && O(w),
							b && k.clear && delete k.clear;
					}
					return (
						(E[t] = S),
						n(
							{
								global: !0,
								constructor: !0,
								forced: S !== x,
							},
							E
						),
						y(S, t),
						b || r.setStrong(S, t, m),
						S
					);
				};
			},
			8758: function (t, e, r) {
				var n = r(6812),
					o = r(9152),
					i = r(2474),
					a = r(2560);
				t.exports = function (t, e, r) {
					for (var u = o(e), c = a.f, s = i.f, f = 0; f < u.length; f++) {
						var l = u[f];
						n(t, l) || (r && n(r, l)) || c(t, l, s(e, l));
					}
				};
			},
			7413: function (t, e, r) {
				var n = r(4201)('match');
				t.exports = function (t) {
					var e = /./;
					try {
						'/./'[t](e);
					} catch (r) {
						try {
							return (e[n] = !1), '/./'[t](e);
						} catch (t) {}
					}
					return !1;
				};
			},
			1748: function (t, e, r) {
				var n = r(3689);
				t.exports = !n(function () {
					function t() {}
					return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
				});
			},
			7807: function (t) {
				t.exports = function (t, e) {
					return {
						value: t,
						done: e,
					};
				};
			},
			5773: function (t, e, r) {
				var n = r(7697),
					o = r(2560),
					i = r(5684);
				t.exports = n
					? function (t, e, r) {
							return o.f(t, e, i(1, r));
						}
					: function (t, e, r) {
							return (t[e] = r), t;
						};
			},
			5684: function (t) {
				t.exports = function (t, e) {
					return {
						enumerable: !(1 & t),
						configurable: !(2 & t),
						writable: !(4 & t),
						value: e,
					};
				};
			},
			6522: function (t, e, r) {
				var n = r(8360),
					o = r(2560),
					i = r(5684);
				t.exports = function (t, e, r) {
					var a = n(e);
					a in t ? o.f(t, a, i(0, r)) : (t[a] = r);
				};
			},
			1797: function (t, e, r) {
				var n = r(5027),
					o = r(5899),
					i = TypeError;
				t.exports = function (t) {
					if ((n(this), 'string' === t || 'default' === t)) t = 'string';
					else if ('number' !== t) throw new i('Incorrect hint');
					return o(this, t);
				};
			},
			2148: function (t, e, r) {
				var n = r(8702),
					o = r(2560);
				t.exports = function (t, e, r) {
					return r.get && n(r.get, e, {getter: !0}), r.set && n(r.set, e, {setter: !0}), o.f(t, e, r);
				};
			},
			1880: function (t, e, r) {
				var n = r(9985),
					o = r(2560),
					i = r(8702),
					a = r(5014);
				t.exports = function (t, e, r, u) {
					u || (u = {});
					var c = u.enumerable,
						s = void 0 !== u.name ? u.name : e;
					if ((n(r) && i(r, s, u), u.global)) c ? (t[e] = r) : a(e, r);
					else {
						try {
							u.unsafe ? t[e] && (c = !0) : delete t[e];
						} catch (t) {}
						c
							? (t[e] = r)
							: o.f(t, e, {
									value: r,
									enumerable: !1,
									configurable: !u.nonConfigurable,
									writable: !u.nonWritable,
								});
					}
					return t;
				};
			},
			6045: function (t, e, r) {
				var n = r(1880);
				t.exports = function (t, e, r) {
					for (var o in e) n(t, o, e[o], r);
					return t;
				};
			},
			5014: function (t, e, r) {
				var n = r(9037),
					o = Object.defineProperty;
				t.exports = function (t, e) {
					try {
						o(n, t, {value: e, configurable: !0, writable: !0});
					} catch (r) {
						n[t] = e;
					}
					return e;
				};
			},
			7697: function (t, e, r) {
				var n = r(3689);
				t.exports = !n(function () {
					return (
						7 !==
						Object.defineProperty({}, 1, {
							get: function () {
								return 7;
							},
						})[1]
					);
				});
			},
			2659: function (t) {
				var e = 'object' == typeof document && document.all,
					r = void 0 === e && void 0 !== e;
				t.exports = {
					all: e,
					IS_HTMLDDA: r,
				};
			},
			6420: function (t, e, r) {
				var n = r(9037),
					o = r(8999),
					i = n.document,
					a = o(i) && o(i.createElement);
				t.exports = function (t) {
					return a ? i.createElement(t) : {};
				};
			},
			5565: function (t) {
				var e = TypeError;
				t.exports = function (t) {
					if (t > 9007199254740991) throw e('Maximum allowed index exceeded');
					return t;
				};
			},
			6338: function (t) {
				t.exports = {
					CSSRuleList: 0,
					CSSStyleDeclaration: 0,
					CSSValueList: 0,
					ClientRectList: 0,
					DOMRectList: 0,
					DOMStringList: 0,
					DOMTokenList: 1,
					DataTransferItemList: 0,
					FileList: 0,
					HTMLAllCollection: 0,
					HTMLCollection: 0,
					HTMLFormElement: 0,
					HTMLSelectElement: 0,
					MediaList: 0,
					MimeTypeArray: 0,
					NamedNodeMap: 0,
					NodeList: 1,
					PaintRequestList: 0,
					Plugin: 0,
					PluginArray: 0,
					SVGLengthList: 0,
					SVGNumberList: 0,
					SVGPathSegList: 0,
					SVGPointList: 0,
					SVGStringList: 0,
					SVGTransformList: 0,
					SourceBufferList: 0,
					StyleSheetList: 0,
					TextTrackCueList: 0,
					TextTrackList: 0,
					TouchList: 0,
				};
			},
			3265: function (t, e, r) {
				var n = r(6420)('span').classList,
					o = n && n.constructor && n.constructor.prototype;
				t.exports = o === Object.prototype ? void 0 : o;
			},
			2532: function (t, e, r) {
				var n = r(8563),
					o = r(806);
				t.exports = !n && !o && 'object' == typeof window && 'object' == typeof document;
			},
			8563: function (t) {
				t.exports = 'object' == typeof Deno && Deno && 'object' == typeof Deno.version;
			},
			3221: function (t, e, r) {
				var n = r(71);
				t.exports = /ipad|iphone|ipod/i.test(n) && 'undefined' != typeof Pebble;
			},
			4764: function (t, e, r) {
				var n = r(71);
				t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
			},
			806: function (t, e, r) {
				var n = r(9037),
					o = r(6648);
				t.exports = 'process' === o(n.process);
			},
			7486: function (t, e, r) {
				var n = r(71);
				t.exports = /web0s(?!.*chrome)/i.test(n);
			},
			71: function (t) {
				t.exports = ('undefined' != typeof navigator && String(navigator.userAgent)) || '';
			},
			3615: function (t, e, r) {
				var n,
					o,
					i = r(9037),
					a = r(71),
					u = i.process,
					c = i.Deno,
					s = (u && u.versions) || (c && c.version),
					f = s && s.v8;
				f && (o = (n = f.split('.'))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
					!o &&
						a &&
						(!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
						(n = a.match(/Chrome\/(\d+)/)) &&
						(o = +n[1]),
					(t.exports = o);
			},
			2739: function (t) {
				t.exports = [
					'constructor',
					'hasOwnProperty',
					'isPrototypeOf',
					'propertyIsEnumerable',
					'toLocaleString',
					'toString',
					'valueOf',
				];
			},
			6610: function (t, e, r) {
				var n = r(8844),
					o = Error,
					i = n(''.replace),
					a = String(new o('zxcasd').stack),
					u = /\n\s*at [^:]*:[^\n]*/,
					c = u.test(a);
				t.exports = function (t, e) {
					if (c && 'string' == typeof t && !o.prepareStackTrace) for (; e--; ) t = i(t, u, '');
					return t;
				};
			},
			5411: function (t, e, r) {
				var n = r(5773),
					o = r(6610),
					i = r(9599),
					a = Error.captureStackTrace;
				t.exports = function (t, e, r, u) {
					i && (a ? a(t, e) : n(t, 'stack', o(r, u)));
				};
			},
			9599: function (t, e, r) {
				var n = r(3689),
					o = r(5684);
				t.exports = !n(function () {
					var t = new Error('a');
					return !('stack' in t) || (Object.defineProperty(t, 'stack', o(1, 7)), 7 !== t.stack);
				});
			},
			9989: function (t, e, r) {
				var n = r(9037),
					o = r(2474).f,
					i = r(5773),
					a = r(1880),
					u = r(5014),
					c = r(8758),
					s = r(5266);
				t.exports = function (t, e) {
					var r,
						f,
						l,
						p,
						h,
						v = t.target,
						d = t.global,
						y = t.stat;
					if ((r = d ? n : y ? n[v] || u(v, {}) : (n[v] || {}).prototype))
						for (f in e) {
							if (
								((p = e[f]),
								(l = t.dontCallGetSet ? (h = o(r, f)) && h.value : r[f]),
								!s(d ? f : v + (y ? '.' : '#') + f, t.forced) && void 0 !== l)
							) {
								if (typeof p == typeof l) continue;
								c(p, l);
							}
							(t.sham || (l && l.sham)) && i(p, 'sham', !0), a(r, f, p, t);
						}
				};
			},
			3689: function (t) {
				t.exports = function (t) {
					try {
						return !!t();
					} catch (t) {
						return !0;
					}
				};
			},
			8678: function (t, e, r) {
				r(4043);
				var n = r(6576),
					o = r(1880),
					i = r(6308),
					a = r(3689),
					u = r(4201),
					c = r(5773),
					s = u('species'),
					f = RegExp.prototype;
				t.exports = function (t, e, r, l) {
					var p = u(t),
						h = !a(function () {
							var e = {};
							return (
								(e[p] = function () {
									return 7;
								}),
								7 !== ''[t](e)
							);
						}),
						v =
							h &&
							!a(function () {
								var e = !1,
									r = /a/;
								return (
									'split' === t &&
										(((r = {}).constructor = {}),
										(r.constructor[s] = function () {
											return r;
										}),
										(r.flags = ''),
										(r[p] = /./[p])),
									(r.exec = function () {
										return (e = !0), null;
									}),
									r[p](''),
									!e
								);
							});
					if (!h || !v || r) {
						var d = n(/./[p]),
							y = e(p, ''[t], function (t, e, r, o, a) {
								var u = n(t),
									c = e.exec;
								return c === i || c === f.exec
									? h && !a
										? {done: !0, value: d(e, r, o)}
										: {done: !0, value: u(r, e, o)}
									: {done: !1};
							});
						o(String.prototype, t, y[0]), o(f, p, y[1]);
					}
					l && c(f[p], 'sham', !0);
				};
			},
			1594: function (t, e, r) {
				var n = r(3689);
				t.exports = !n(function () {
					return Object.isExtensible(Object.preventExtensions({}));
				});
			},
			1735: function (t, e, r) {
				var n = r(7215),
					o = Function.prototype,
					i = o.apply,
					a = o.call;
				t.exports =
					('object' == typeof Reflect && Reflect.apply) ||
					(n
						? a.bind(i)
						: function () {
								return a.apply(i, arguments);
							});
			},
			4071: function (t, e, r) {
				var n = r(6576),
					o = r(509),
					i = r(7215),
					a = n(n.bind);
				t.exports = function (t, e) {
					return (
						o(t),
						void 0 === e
							? t
							: i
								? a(t, e)
								: function () {
										return t.apply(e, arguments);
									}
					);
				};
			},
			7215: function (t, e, r) {
				var n = r(3689);
				t.exports = !n(function () {
					var t = function () {}.bind();
					return 'function' != typeof t || t.hasOwnProperty('prototype');
				});
			},
			6761: function (t, e, r) {
				var n = r(8844),
					o = r(509),
					i = r(8999),
					a = r(6812),
					u = r(6004),
					c = r(7215),
					s = Function,
					f = n([].concat),
					l = n([].join),
					p = {};
				t.exports = c
					? s.bind
					: function (t) {
							var e = o(this),
								r = e.prototype,
								n = u(arguments, 1),
								c = function () {
									var r = f(n, u(arguments));
									return this instanceof c
										? (function (t, e, r) {
												if (!a(p, e)) {
													for (var n = [], o = 0; o < e; o++) n[o] = 'a[' + o + ']';
													p[e] = s('C,a', 'return new C(' + l(n, ',') + ')');
												}
												return p[e](t, r);
											})(e, r.length, r)
										: e.apply(t, r);
								};
							return i(r) && (c.prototype = r), c;
						};
			},
			2615: function (t, e, r) {
				var n = r(7215),
					o = Function.prototype.call;
				t.exports = n
					? o.bind(o)
					: function () {
							return o.apply(o, arguments);
						};
			},
			1236: function (t, e, r) {
				var n = r(7697),
					o = r(6812),
					i = Function.prototype,
					a = n && Object.getOwnPropertyDescriptor,
					u = o(i, 'name'),
					c = u && 'something' === function () {}.name,
					s = u && (!n || (n && a(i, 'name').configurable));
				t.exports = {
					EXISTS: u,
					PROPER: c,
					CONFIGURABLE: s,
				};
			},
			2743: function (t, e, r) {
				var n = r(8844),
					o = r(509);
				t.exports = function (t, e, r) {
					try {
						return n(o(Object.getOwnPropertyDescriptor(t, e)[r]));
					} catch (t) {}
				};
			},
			6576: function (t, e, r) {
				var n = r(6648),
					o = r(8844);
				t.exports = function (t) {
					if ('Function' === n(t)) return o(t);
				};
			},
			8844: function (t, e, r) {
				var n = r(7215),
					o = Function.prototype,
					i = o.call,
					a = n && o.bind.bind(i, i);
				t.exports = n
					? a
					: function (t) {
							return function () {
								return i.apply(t, arguments);
							};
						};
			},
			6058: function (t, e, r) {
				var n = r(9037),
					o = r(9985);
				t.exports = function (t, e) {
					return arguments.length < 2 ? ((r = n[t]), o(r) ? r : void 0) : n[t] && n[t][e];
					var r;
				};
			},
			2302: function (t) {
				t.exports = function (t) {
					return {
						iterator: t,
						next: t.next,
						done: !1,
					};
				};
			},
			1664: function (t, e, r) {
				var n = r(926),
					o = r(4849),
					i = r(981),
					a = r(9478),
					u = r(4201)('iterator');
				t.exports = function (t) {
					if (!i(t)) return o(t, u) || o(t, '@@iterator') || a[n(t)];
				};
			},
			5185: function (t, e, r) {
				var n = r(2615),
					o = r(509),
					i = r(5027),
					a = r(3691),
					u = r(1664),
					c = TypeError;
				t.exports = function (t, e) {
					var r = arguments.length < 2 ? u(t) : e;
					if (o(r)) return i(n(r, t));
					throw new c(a(t) + ' is not iterable');
				};
			},
			2643: function (t, e, r) {
				var n = r(8844),
					o = r(2297),
					i = r(9985),
					a = r(6648),
					u = r(4327),
					c = n([].push);
				t.exports = function (t) {
					if (i(t)) return t;
					if (o(t)) {
						for (var e = t.length, r = [], n = 0; n < e; n++) {
							var s = t[n];
							'string' == typeof s
								? c(r, s)
								: ('number' != typeof s && 'Number' !== a(s) && 'String' !== a(s)) || c(r, u(s));
						}
						var f = r.length,
							l = !0;
						return function (t, e) {
							if (l) return (l = !1), e;
							if (o(this)) return e;
							for (var n = 0; n < f; n++) if (r[n] === t) return e;
						};
					}
				};
			},
			4849: function (t, e, r) {
				var n = r(509),
					o = r(981);
				t.exports = function (t, e) {
					var r = t[e];
					return o(r) ? void 0 : n(r);
				};
			},
			7017: function (t, e, r) {
				var n = r(8844),
					o = r(690),
					i = Math.floor,
					a = n(''.charAt),
					u = n(''.replace),
					c = n(''.slice),
					s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
					f = /\$([$&'`]|\d{1,2})/g;
				t.exports = function (t, e, r, n, l, p) {
					var h = r + t.length,
						v = n.length,
						d = f;
					return (
						void 0 !== l && ((l = o(l)), (d = s)),
						u(p, d, function (o, u) {
							var s;
							switch (a(u, 0)) {
								case '$':
									return '$';
								case '&':
									return t;
								case '`':
									return c(e, 0, r);
								case "'":
									return c(e, h);
								case '<':
									s = l[c(u, 1, -1)];
									break;
								default:
									var f = +u;
									if (0 === f) return o;
									if (f > v) {
										var p = i(f / 10);
										return 0 === p
											? o
											: p <= v
												? void 0 === n[p - 1]
													? a(u, 1)
													: n[p - 1] + a(u, 1)
												: o;
									}
									s = n[f - 1];
							}
							return void 0 === s ? '' : s;
						})
					);
				};
			},
			9037: function (t, e, r) {
				var n = function (t) {
					return t && t.Math === Math && t;
				};
				t.exports =
					n('object' == typeof globalThis && globalThis) ||
					n('object' == typeof window && window) ||
					n('object' == typeof self && self) ||
					n('object' == typeof r.g && r.g) ||
					n('object' == typeof this && this) ||
					(function () {
						return this;
					})() ||
					Function('return this')();
			},
			6812: function (t, e, r) {
				var n = r(8844),
					o = r(690),
					i = n({}.hasOwnProperty);
				t.exports =
					Object.hasOwn ||
					function (t, e) {
						return i(o(t), e);
					};
			},
			7248: function (t) {
				t.exports = {};
			},
			920: function (t) {
				t.exports = function (t, e) {
					try {
						1 === arguments.length ? console.error(t) : console.error(t, e);
					} catch (t) {}
				};
			},
			2688: function (t, e, r) {
				var n = r(6058);
				t.exports = n('document', 'documentElement');
			},
			8506: function (t, e, r) {
				var n = r(7697),
					o = r(3689),
					i = r(6420);
				t.exports =
					!n &&
					!o(function () {
						return (
							7 !==
							Object.defineProperty(i('div'), 'a', {
								get: function () {
									return 7;
								},
							}).a
						);
					});
			},
			4413: function (t, e, r) {
				var n = r(8844),
					o = r(3689),
					i = r(6648),
					a = Object,
					u = n(''.split);
				t.exports = o(function () {
					return !a('z').propertyIsEnumerable(0);
				})
					? function (t) {
							return 'String' === i(t) ? u(t, '') : a(t);
						}
					: a;
			},
			3457: function (t, e, r) {
				var n = r(9985),
					o = r(8999),
					i = r(9385);
				t.exports = function (t, e, r) {
					var a, u;
					return (
						i && n((a = e.constructor)) && a !== r && o((u = a.prototype)) && u !== r.prototype && i(t, u),
						t
					);
				};
			},
			6738: function (t, e, r) {
				var n = r(8844),
					o = r(9985),
					i = r(4091),
					a = n(Function.toString);
				o(i.inspectSource) ||
					(i.inspectSource = function (t) {
						return a(t);
					}),
					(t.exports = i.inspectSource);
			},
			2570: function (t, e, r) {
				var n = r(8999),
					o = r(5773);
				t.exports = function (t, e) {
					n(e) && 'cause' in e && o(t, 'cause', e.cause);
				};
			},
			5375: function (t, e, r) {
				var n = r(9989),
					o = r(8844),
					i = r(7248),
					a = r(8999),
					u = r(6812),
					c = r(2560).f,
					s = r(2741),
					f = r(6062),
					l = r(1129),
					p = r(4630),
					h = r(1594),
					v = !1,
					d = p('meta'),
					y = 0,
					g = function (t) {
						c(t, d, {value: {objectID: 'O' + y++, weakData: {}}});
					},
					m = (t.exports = {
						enable: function () {
							(m.enable = function () {}), (v = !0);
							var t = s.f,
								e = o([].splice),
								r = {};
							(r[d] = 1),
								t(r).length &&
									((s.f = function (r) {
										for (var n = t(r), o = 0, i = n.length; o < i; o++)
											if (n[o] === d) {
												e(n, o, 1);
												break;
											}
										return n;
									}),
									n(
										{
											target: 'Object',
											stat: !0,
											forced: !0,
										},
										{getOwnPropertyNames: f.f}
									));
						},
						fastKey: function (t, e) {
							if (!a(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
							if (!u(t, d)) {
								if (!l(t)) return 'F';
								if (!e) return 'E';
								g(t);
							}
							return t[d].objectID;
						},
						getWeakData: function (t, e) {
							if (!u(t, d)) {
								if (!l(t)) return !0;
								if (!e) return !1;
								g(t);
							}
							return t[d].weakData;
						},
						onFreeze: function (t) {
							return h && v && l(t) && !u(t, d) && g(t), t;
						},
					});
				i[d] = !0;
			},
			618: function (t, e, r) {
				var n,
					o,
					i,
					a = r(9834),
					u = r(9037),
					c = r(8999),
					s = r(5773),
					f = r(6812),
					l = r(4091),
					p = r(2713),
					h = r(7248),
					v = 'Object already initialized',
					d = u.TypeError,
					y = u.WeakMap;
				if (a || l.state) {
					var g = l.state || (l.state = new y());
					(g.get = g.get),
						(g.has = g.has),
						(g.set = g.set),
						(n = function (t, e) {
							if (g.has(t)) throw new d(v);
							return (e.facade = t), g.set(t, e), e;
						}),
						(o = function (t) {
							return g.get(t) || {};
						}),
						(i = function (t) {
							return g.has(t);
						});
				} else {
					var m = p('state');
					(h[m] = !0),
						(n = function (t, e) {
							if (f(t, m)) throw new d(v);
							return (e.facade = t), s(t, m, e), e;
						}),
						(o = function (t) {
							return f(t, m) ? t[m] : {};
						}),
						(i = function (t) {
							return f(t, m);
						});
				}
				t.exports = {
					set: n,
					get: o,
					has: i,
					enforce: function (t) {
						return i(t) ? o(t) : n(t, {});
					},
					getterFor: function (t) {
						return function (e) {
							var r;
							if (!c(e) || (r = o(e)).type !== t)
								throw new d('Incompatible receiver, ' + t + ' required');
							return r;
						};
					},
				};
			},
			3292: function (t, e, r) {
				var n = r(4201),
					o = r(9478),
					i = n('iterator'),
					a = Array.prototype;
				t.exports = function (t) {
					return void 0 !== t && (o.Array === t || a[i] === t);
				};
			},
			2297: function (t, e, r) {
				var n = r(6648);
				t.exports =
					Array.isArray ||
					function (t) {
						return 'Array' === n(t);
					};
			},
			9985: function (t, e, r) {
				var n = r(2659),
					o = n.all;
				t.exports = n.IS_HTMLDDA
					? function (t) {
							return 'function' == typeof t || t === o;
						}
					: function (t) {
							return 'function' == typeof t;
						};
			},
			9429: function (t, e, r) {
				var n = r(8844),
					o = r(3689),
					i = r(9985),
					a = r(926),
					u = r(6058),
					c = r(6738),
					s = function () {},
					f = [],
					l = u('Reflect', 'construct'),
					p = /^\s*(?:class|function)\b/,
					h = n(p.exec),
					v = !p.test(s),
					d = function (t) {
						if (!i(t)) return !1;
						try {
							return l(s, f, t), !0;
						} catch (t) {
							return !1;
						}
					},
					y = function (t) {
						if (!i(t)) return !1;
						switch (a(t)) {
							case 'AsyncFunction':
							case 'GeneratorFunction':
							case 'AsyncGeneratorFunction':
								return !1;
						}
						try {
							return v || !!h(p, c(t));
						} catch (t) {
							return !0;
						}
					};
				(y.sham = !0),
					(t.exports =
						!l ||
						o(function () {
							var t;
							return (
								d(d.call) ||
								!d(Object) ||
								!d(function () {
									t = !0;
								}) ||
								t
							);
						})
							? y
							: d);
			},
			5266: function (t, e, r) {
				var n = r(3689),
					o = r(9985),
					i = /#|\.prototype\./,
					a = function (t, e) {
						var r = c[u(t)];
						return r === f || (r !== s && (o(e) ? n(e) : !!e));
					},
					u = (a.normalize = function (t) {
						return String(t).replace(i, '.').toLowerCase();
					}),
					c = (a.data = {}),
					s = (a.NATIVE = 'N'),
					f = (a.POLYFILL = 'P');
				t.exports = a;
			},
			981: function (t) {
				t.exports = function (t) {
					return null == t;
				};
			},
			8999: function (t, e, r) {
				var n = r(9985),
					o = r(2659),
					i = o.all;
				t.exports = o.IS_HTMLDDA
					? function (t) {
							return 'object' == typeof t ? null !== t : n(t) || t === i;
						}
					: function (t) {
							return 'object' == typeof t ? null !== t : n(t);
						};
			},
			3931: function (t) {
				t.exports = !1;
			},
			1245: function (t, e, r) {
				var n = r(8999),
					o = r(6648),
					i = r(4201)('match');
				t.exports = function (t) {
					var e;
					return n(t) && (void 0 !== (e = t[i]) ? !!e : 'RegExp' === o(t));
				};
			},
			734: function (t, e, r) {
				var n = r(6058),
					o = r(9985),
					i = r(3622),
					a = r(9525),
					u = Object;
				t.exports = a
					? function (t) {
							return 'symbol' == typeof t;
						}
					: function (t) {
							var e = n('Symbol');
							return o(e) && i(e.prototype, u(t));
						};
			},
			6704: function (t, e, r) {
				var n = r(2615);
				t.exports = function (t, e, r) {
					for (var o, i, a = r ? t : t.iterator, u = t.next; !(o = n(u, a)).done; )
						if (void 0 !== (i = e(o.value))) return i;
				};
			},
			8734: function (t, e, r) {
				var n = r(4071),
					o = r(2615),
					i = r(5027),
					a = r(3691),
					u = r(3292),
					c = r(6310),
					s = r(3622),
					f = r(5185),
					l = r(1664),
					p = r(2125),
					h = TypeError,
					v = function (t, e) {
						(this.stopped = t), (this.result = e);
					},
					d = v.prototype;
				t.exports = function (t, e, r) {
					var y,
						g,
						m,
						b,
						w,
						x,
						k,
						S = r && r.that,
						E = !(!r || !r.AS_ENTRIES),
						O = !(!r || !r.IS_RECORD),
						P = !(!r || !r.IS_ITERATOR),
						j = !(!r || !r.INTERRUPTED),
						L = n(e, S),
						_ = function (t) {
							return y && p(y, 'normal', t), new v(!0, t);
						},
						I = function (t) {
							return E ? (i(t), j ? L(t[0], t[1], _) : L(t[0], t[1])) : j ? L(t, _) : L(t);
						};
					if (O) y = t.iterator;
					else if (P) y = t;
					else {
						if (!(g = l(t))) throw new h(a(t) + ' is not iterable');
						if (u(g)) {
							for (m = 0, b = c(t); b > m; m++) if ((w = I(t[m])) && s(d, w)) return w;
							return new v(!1);
						}
						y = f(t, g);
					}
					for (x = O ? t.next : y.next; !(k = o(x, y)).done; ) {
						try {
							w = I(k.value);
						} catch (t) {
							p(y, 'throw', t);
						}
						if ('object' == typeof w && w && s(d, w)) return w;
					}
					return new v(!1);
				};
			},
			2125: function (t, e, r) {
				var n = r(2615),
					o = r(5027),
					i = r(4849);
				t.exports = function (t, e, r) {
					var a, u;
					o(t);
					try {
						if (!(a = i(t, 'return'))) {
							if ('throw' === e) throw r;
							return r;
						}
						a = n(a, t);
					} catch (t) {
						(u = !0), (a = t);
					}
					if ('throw' === e) throw r;
					if (u) throw a;
					return o(a), r;
				};
			},
			974: function (t, e, r) {
				var n = r(2013).IteratorPrototype,
					o = r(5391),
					i = r(5684),
					a = r(5997),
					u = r(9478),
					c = function () {
						return this;
					};
				t.exports = function (t, e, r, s) {
					var f = e + ' Iterator';
					return (t.prototype = o(n, {next: i(+!s, r)})), a(t, f, !1, !0), (u[f] = c), t;
				};
			},
			5419: function (t, e, r) {
				var n = r(2615),
					o = r(5391),
					i = r(5773),
					a = r(6045),
					u = r(4201),
					c = r(618),
					s = r(4849),
					f = r(2013).IteratorPrototype,
					l = r(7807),
					p = r(2125),
					h = u('toStringTag'),
					v = 'IteratorHelper',
					d = 'WrapForValidIterator',
					y = c.set,
					g = function (t) {
						var e = c.getterFor(t ? d : v);
						return a(o(f), {
							next: function () {
								var r = e(this);
								if (t) return r.nextHandler();
								try {
									var n = r.done ? void 0 : r.nextHandler();
									return l(n, r.done);
								} catch (t) {
									throw ((r.done = !0), t);
								}
							},
							return: function () {
								var r = e(this),
									o = r.iterator;
								if (((r.done = !0), t)) {
									var i = s(o, 'return');
									return i ? n(i, o) : l(void 0, !0);
								}
								if (r.inner)
									try {
										p(r.inner.iterator, 'normal');
									} catch (t) {
										return p(o, 'throw', t);
									}
								return p(o, 'normal'), l(void 0, !0);
							},
						});
					},
					m = g(!0),
					b = g(!1);
				i(b, h, 'Iterator Helper'),
					(t.exports = function (t, e) {
						var r = function (r, n) {
							n ? ((n.iterator = r.iterator), (n.next = r.next)) : (n = r),
								(n.type = e ? d : v),
								(n.nextHandler = t),
								(n.counter = 0),
								(n.done = !1),
								y(this, n);
						};
						return (r.prototype = e ? m : b), r;
					});
			},
			1934: function (t, e, r) {
				var n = r(9989),
					o = r(2615),
					i = r(3931),
					a = r(1236),
					u = r(9985),
					c = r(974),
					s = r(1868),
					f = r(9385),
					l = r(5997),
					p = r(5773),
					h = r(1880),
					v = r(4201),
					d = r(9478),
					y = r(2013),
					g = a.PROPER,
					m = a.CONFIGURABLE,
					b = y.IteratorPrototype,
					w = y.BUGGY_SAFARI_ITERATORS,
					x = v('iterator'),
					k = 'keys',
					S = 'values',
					E = 'entries',
					O = function () {
						return this;
					};
				t.exports = function (t, e, r, a, v, y, P) {
					c(r, e, a);
					var j,
						L,
						_,
						I = function (t) {
							if (t === v && C) return C;
							if (!w && t && t in $) return $[t];
							switch (t) {
								case k:
								case S:
								case E:
									return function () {
										return new r(this, t);
									};
							}
							return function () {
								return new r(this);
							};
						},
						T = e + ' Iterator',
						R = !1,
						$ = t.prototype,
						N = $[x] || $['@@iterator'] || (v && $[v]),
						C = (!w && N) || I(v),
						A = ('Array' === e && $.entries) || N;
					if (
						(A &&
							(j = s(A.call(new t()))) !== Object.prototype &&
							j.next &&
							(i || s(j) === b || (f ? f(j, b) : u(j[x]) || h(j, x, O)),
							l(j, T, !0, !0),
							i && (d[T] = O)),
						g &&
							v === S &&
							N &&
							N.name !== S &&
							(!i && m
								? p($, 'name', S)
								: ((R = !0),
									(C = function () {
										return o(N, this);
									}))),
						v)
					)
						if (
							((L = {
								values: I(S),
								keys: y ? C : I(k),
								entries: I(E),
							}),
							P)
						)
							for (_ in L) (w || R || !(_ in $)) && h($, _, L[_]);
						else
							n(
								{
									target: e,
									proto: !0,
									forced: w || R,
								},
								L
							);
					return (i && !P) || $[x] === C || h($, x, C, {name: v}), (d[e] = C), L;
				};
			},
			2013: function (t, e, r) {
				var n,
					o,
					i,
					a = r(3689),
					u = r(9985),
					c = r(8999),
					s = r(5391),
					f = r(1868),
					l = r(1880),
					p = r(4201),
					h = r(3931),
					v = p('iterator'),
					d = !1;
				[].keys && ('next' in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : (d = !0)),
					!c(n) ||
					a(function () {
						var t = {};
						return n[v].call(t) !== t;
					})
						? (n = {})
						: h && (n = s(n)),
					u(n[v]) ||
						l(n, v, function () {
							return this;
						}),
					(t.exports = {
						IteratorPrototype: n,
						BUGGY_SAFARI_ITERATORS: d,
					});
			},
			9478: function (t) {
				t.exports = {};
			},
			6310: function (t, e, r) {
				var n = r(3126);
				t.exports = function (t) {
					return n(t.length);
				};
			},
			8702: function (t, e, r) {
				var n = r(8844),
					o = r(3689),
					i = r(9985),
					a = r(6812),
					u = r(7697),
					c = r(1236).CONFIGURABLE,
					s = r(6738),
					f = r(618),
					l = f.enforce,
					p = f.get,
					h = String,
					v = Object.defineProperty,
					d = n(''.slice),
					y = n(''.replace),
					g = n([].join),
					m =
						u &&
						!o(function () {
							return 8 !== v(function () {}, 'length', {value: 8}).length;
						}),
					b = String(String).split('String'),
					w = (t.exports = function (t, e, r) {
						'Symbol(' === d(h(e), 0, 7) && (e = '[' + y(h(e), /^Symbol\(([^)]*)\)/, '$1') + ']'),
							r && r.getter && (e = 'get ' + e),
							r && r.setter && (e = 'set ' + e),
							(!a(t, 'name') || (c && t.name !== e)) &&
								(u ? v(t, 'name', {value: e, configurable: !0}) : (t.name = e)),
							m && r && a(r, 'arity') && t.length !== r.arity && v(t, 'length', {value: r.arity});
						try {
							r && a(r, 'constructor') && r.constructor
								? u && v(t, 'prototype', {writable: !1})
								: t.prototype && (t.prototype = void 0);
						} catch (t) {}
						var n = l(t);
						return a(n, 'source') || (n.source = g(b, 'string' == typeof e ? e : '')), t;
					});
				Function.prototype.toString = w(function () {
					return (i(this) && p(this).source) || s(this);
				}, 'toString');
			},
			3914: function (t, e, r) {
				var n = r(8844),
					o = Map.prototype;
				t.exports = {
					Map: Map,
					set: n(o.set),
					get: n(o.get),
					has: n(o.has),
					remove: n(o.delete),
					proto: o,
				};
			},
			613: function (t, e, r) {
				var n = r(8844),
					o = r(6704),
					i = r(3914),
					a = i.Map,
					u = i.proto,
					c = n(u.forEach),
					s = n(u.entries),
					f = s(new a()).next;
				t.exports = function (t, e, r) {
					return r
						? o(
								{
									iterator: s(t),
									next: f,
								},
								function (t) {
									return e(t[1], t[0]);
								}
							)
						: c(t, e);
				};
			},
			8828: function (t) {
				var e = Math.ceil,
					r = Math.floor;
				t.exports =
					Math.trunc ||
					function (t) {
						var n = +t;
						return (n > 0 ? r : e)(n);
					};
			},
			231: function (t, e, r) {
				var n,
					o,
					i,
					a,
					u,
					c = r(9037),
					s = r(4071),
					f = r(2474).f,
					l = r(9886).set,
					p = r(4410),
					h = r(4764),
					v = r(3221),
					d = r(7486),
					y = r(806),
					g = c.MutationObserver || c.WebKitMutationObserver,
					m = c.document,
					b = c.process,
					w = c.Promise,
					x = f(c, 'queueMicrotask'),
					k = x && x.value;
				if (!k) {
					var S = new p(),
						E = function () {
							var t, e;
							for (y && (t = b.domain) && t.exit(); (e = S.get()); )
								try {
									e();
								} catch (t) {
									throw (S.head && n(), t);
								}
							t && t.enter();
						};
					h || y || d || !g || !m
						? !v && w && w.resolve
							? (((a = w.resolve(void 0)).constructor = w),
								(u = s(a.then, a)),
								(n = function () {
									u(E);
								}))
							: y
								? (n = function () {
										b.nextTick(E);
									})
								: ((l = s(l, c)),
									(n = function () {
										l(E);
									}))
						: ((o = !0),
							(i = m.createTextNode('')),
							new g(E).observe(i, {characterData: !0}),
							(n = function () {
								i.data = o = !o;
							})),
						(k = function (t) {
							S.head || n(), S.add(t);
						});
				}
				t.exports = k;
			},
			8742: function (t, e, r) {
				var n = r(509),
					o = TypeError,
					i = function (t) {
						var e, r;
						(this.promise = new t(function (t, n) {
							if (void 0 !== e || void 0 !== r) throw new o('Bad Promise constructor');
							(e = t), (r = n);
						})),
							(this.resolve = n(e)),
							(this.reject = n(r));
					};
				t.exports.f = function (t) {
					return new i(t);
				};
			},
			3841: function (t, e, r) {
				var n = r(4327);
				t.exports = function (t, e) {
					return void 0 === t ? (arguments.length < 2 ? '' : e) : n(t);
				};
			},
			2124: function (t, e, r) {
				var n = r(1245),
					o = TypeError;
				t.exports = function (t) {
					if (n(t)) throw new o("The method doesn't accept regular expressions");
					return t;
				};
			},
			5394: function (t, e, r) {
				var n = r(7697),
					o = r(8844),
					i = r(2615),
					a = r(3689),
					u = r(300),
					c = r(7518),
					s = r(9556),
					f = r(690),
					l = r(4413),
					p = Object.assign,
					h = Object.defineProperty,
					v = o([].concat);
				t.exports =
					!p ||
					a(function () {
						if (
							n &&
							1 !==
								p(
									{b: 1},
									p(
										h({}, 'a', {
											enumerable: !0,
											get: function () {
												h(this, 'b', {value: 3, enumerable: !1});
											},
										}),
										{b: 2}
									)
								).b
						)
							return !0;
						var t = {},
							e = {},
							r = Symbol('assign detection'),
							o = 'abcdefghijklmnopqrst';
						return (
							(t[r] = 7),
							o.split('').forEach(function (t) {
								e[t] = t;
							}),
							7 !== p({}, t)[r] || u(p({}, e)).join('') !== o
						);
					})
						? function (t, e) {
								for (var r = f(t), o = arguments.length, a = 1, p = c.f, h = s.f; o > a; )
									for (
										var d, y = l(arguments[a++]), g = p ? v(u(y), p(y)) : u(y), m = g.length, b = 0;
										m > b;

									)
										(d = g[b++]), (n && !i(h, y, d)) || (r[d] = y[d]);
								return r;
							}
						: p;
			},
			5391: function (t, e, r) {
				var n,
					o = r(5027),
					i = r(8920),
					a = r(2739),
					u = r(7248),
					c = r(2688),
					s = r(6420),
					f = r(2713),
					l = 'prototype',
					p = 'script',
					h = f('IE_PROTO'),
					v = function () {},
					d = function (t) {
						return '<' + p + '>' + t + '</' + p + '>';
					},
					y = function (t) {
						t.write(d('')), t.close();
						var e = t.parentWindow.Object;
						return (t = null), e;
					},
					g = function () {
						try {
							n = new ActiveXObject('htmlfile');
						} catch (t) {}
						var t, e, r;
						g =
							'undefined' != typeof document
								? document.domain && n
									? y(n)
									: ((e = s('iframe')),
										(r = 'java' + p + ':'),
										(e.style.display = 'none'),
										c.appendChild(e),
										(e.src = String(r)),
										(t = e.contentWindow.document).open(),
										t.write(d('document.F=Object')),
										t.close(),
										t.F)
								: y(n);
						for (var o = a.length; o--; ) delete g[l][a[o]];
						return g();
					};
				(u[h] = !0),
					(t.exports =
						Object.create ||
						function (t, e) {
							var r;
							return (
								null !== t ? ((v[l] = o(t)), (r = new v()), (v[l] = null), (r[h] = t)) : (r = g()),
								void 0 === e ? r : i.f(r, e)
							);
						});
			},
			8920: function (t, e, r) {
				var n = r(7697),
					o = r(5648),
					i = r(2560),
					a = r(5027),
					u = r(5290),
					c = r(300);
				e.f =
					n && !o
						? Object.defineProperties
						: function (t, e) {
								a(t);
								for (var r, n = u(e), o = c(e), s = o.length, f = 0; s > f; )
									i.f(t, (r = o[f++]), n[r]);
								return t;
							};
			},
			2560: function (t, e, r) {
				var n = r(7697),
					o = r(8506),
					i = r(5648),
					a = r(5027),
					u = r(8360),
					c = TypeError,
					s = Object.defineProperty,
					f = Object.getOwnPropertyDescriptor,
					l = 'enumerable',
					p = 'configurable',
					h = 'writable';
				e.f = n
					? i
						? function (t, e, r) {
								if (
									(a(t),
									(e = u(e)),
									a(r),
									'function' == typeof t && 'prototype' === e && 'value' in r && h in r && !r[h])
								) {
									var n = f(t, e);
									n &&
										n[h] &&
										((t[e] = r.value),
										(r = {
											configurable: p in r ? r[p] : n[p],
											enumerable: l in r ? r[l] : n[l],
											writable: !1,
										}));
								}
								return s(t, e, r);
							}
						: s
					: function (t, e, r) {
							if ((a(t), (e = u(e)), a(r), o))
								try {
									return s(t, e, r);
								} catch (t) {}
							if ('get' in r || 'set' in r) throw new c('Accessors not supported');
							return 'value' in r && (t[e] = r.value), t;
						};
			},
			2474: function (t, e, r) {
				var n = r(7697),
					o = r(2615),
					i = r(9556),
					a = r(5684),
					u = r(5290),
					c = r(8360),
					s = r(6812),
					f = r(8506),
					l = Object.getOwnPropertyDescriptor;
				e.f = n
					? l
					: function (t, e) {
							if (((t = u(t)), (e = c(e)), f))
								try {
									return l(t, e);
								} catch (t) {}
							if (s(t, e)) return a(!o(i.f, t, e), t[e]);
						};
			},
			6062: function (t, e, r) {
				var n = r(6648),
					o = r(5290),
					i = r(2741).f,
					a = r(9015),
					u =
						'object' == typeof window && window && Object.getOwnPropertyNames
							? Object.getOwnPropertyNames(window)
							: [];
				t.exports.f = function (t) {
					return u && 'Window' === n(t)
						? (function (t) {
								try {
									return i(t);
								} catch (t) {
									return a(u);
								}
							})(t)
						: i(o(t));
				};
			},
			2741: function (t, e, r) {
				var n = r(4948),
					o = r(2739).concat('length', 'prototype');
				e.f =
					Object.getOwnPropertyNames ||
					function (t) {
						return n(t, o);
					};
			},
			7518: function (t, e) {
				e.f = Object.getOwnPropertySymbols;
			},
			1868: function (t, e, r) {
				var n = r(6812),
					o = r(9985),
					i = r(690),
					a = r(2713),
					u = r(1748),
					c = a('IE_PROTO'),
					s = Object,
					f = s.prototype;
				t.exports = u
					? s.getPrototypeOf
					: function (t) {
							var e = i(t);
							if (n(e, c)) return e[c];
							var r = e.constructor;
							return o(r) && e instanceof r ? r.prototype : e instanceof s ? f : null;
						};
			},
			1129: function (t, e, r) {
				var n = r(3689),
					o = r(8999),
					i = r(6648),
					a = r(1655),
					u = Object.isExtensible,
					c = n(function () {
						u(1);
					});
				t.exports =
					c || a
						? function (t) {
								return !!o(t) && (!a || 'ArrayBuffer' !== i(t)) && (!u || u(t));
							}
						: u;
			},
			3622: function (t, e, r) {
				var n = r(8844);
				t.exports = n({}.isPrototypeOf);
			},
			4948: function (t, e, r) {
				var n = r(8844),
					o = r(6812),
					i = r(5290),
					a = r(4328).indexOf,
					u = r(7248),
					c = n([].push);
				t.exports = function (t, e) {
					var r,
						n = i(t),
						s = 0,
						f = [];
					for (r in n) !o(u, r) && o(n, r) && c(f, r);
					for (; e.length > s; ) o(n, (r = e[s++])) && (~a(f, r) || c(f, r));
					return f;
				};
			},
			300: function (t, e, r) {
				var n = r(4948),
					o = r(2739);
				t.exports =
					Object.keys ||
					function (t) {
						return n(t, o);
					};
			},
			9556: function (t, e) {
				var r = {}.propertyIsEnumerable,
					n = Object.getOwnPropertyDescriptor,
					o =
						n &&
						!r.call(
							{
								1: 2,
							},
							1
						);
				e.f = o
					? function (t) {
							var e = n(this, t);
							return !!e && e.enumerable;
						}
					: r;
			},
			9385: function (t, e, r) {
				var n = r(2743),
					o = r(5027),
					i = r(3550);
				t.exports =
					Object.setPrototypeOf ||
					('__proto__' in {}
						? (function () {
								var t,
									e = !1,
									r = {};
								try {
									(t = n(Object.prototype, '__proto__', 'set'))(r, []), (e = r instanceof Array);
								} catch (t) {}
								return function (r, n) {
									return o(r), i(n), e ? t(r, n) : (r.__proto__ = n), r;
								};
							})()
						: void 0);
			},
			9419: function (t, e, r) {
				var n = r(7697),
					o = r(3689),
					i = r(8844),
					a = r(1868),
					u = r(300),
					c = r(5290),
					s = i(r(9556).f),
					f = i([].push),
					l =
						n &&
						o(function () {
							var t = Object.create(null);
							return (t[2] = 2), !s(t, 2);
						}),
					p = function (t) {
						return function (e) {
							for (
								var r, o = c(e), i = u(o), p = l && null === a(o), h = i.length, v = 0, d = [];
								h > v;

							)
								(r = i[v++]), (n && !(p ? r in o : s(o, r))) || f(d, t ? [r, o[r]] : o[r]);
							return d;
						};
					};
				t.exports = {
					entries: p(!0),
					values: p(!1),
				};
			},
			5073: function (t, e, r) {
				var n = r(3043),
					o = r(926);
				t.exports = n
					? {}.toString
					: function () {
							return '[object ' + o(this) + ']';
						};
			},
			5899: function (t, e, r) {
				var n = r(2615),
					o = r(9985),
					i = r(8999),
					a = TypeError;
				t.exports = function (t, e) {
					var r, u;
					if ('string' === e && o((r = t.toString)) && !i((u = n(r, t)))) return u;
					if (o((r = t.valueOf)) && !i((u = n(r, t)))) return u;
					if ('string' !== e && o((r = t.toString)) && !i((u = n(r, t)))) return u;
					throw new a("Can't convert object to primitive value");
				};
			},
			9152: function (t, e, r) {
				var n = r(6058),
					o = r(8844),
					i = r(2741),
					a = r(7518),
					u = r(5027),
					c = o([].concat);
				t.exports =
					n('Reflect', 'ownKeys') ||
					function (t) {
						var e = i.f(u(t)),
							r = a.f;
						return r ? c(e, r(t)) : e;
					};
			},
			6675: function (t, e, r) {
				var n = r(8844),
					o = r(6812),
					i = SyntaxError,
					a = parseInt,
					u = String.fromCharCode,
					c = n(''.charAt),
					s = n(''.slice),
					f = n(/./.exec),
					l = {
						'\\"': '"',
						'\\\\': '\\',
						'\\/': '/',
						'\\b': '\b',
						'\\f': '\f',
						'\\n': '\n',
						'\\r': '\r',
						'\\t': '\t',
					},
					p = /^[\da-f]{4}$/i,
					h = /^[\u0000-\u001F]$/;
				t.exports = function (t, e) {
					for (var r = !0, n = ''; e < t.length; ) {
						var v = c(t, e);
						if ('\\' === v) {
							var d = s(t, e, e + 2);
							if (o(l, d)) (n += l[d]), (e += 2);
							else {
								if ('\\u' !== d) throw new i('Unknown escape sequence: "' + d + '"');
								var y = s(t, (e += 2), e + 4);
								if (!f(p, y)) throw new i('Bad Unicode escape at: ' + e);
								(n += u(a(y, 16))), (e += 4);
							}
						} else {
							if ('"' === v) {
								(r = !1), e++;
								break;
							}
							if (f(h, v)) throw new i('Bad control character in string literal at: ' + e);
							(n += v), e++;
						}
					}
					if (r) throw new i('Unterminated string at: ' + e);
					return {
						value: n,
						end: e,
					};
				};
			},
			496: function (t, e, r) {
				var n = r(9037);
				t.exports = n;
			},
			9302: function (t) {
				t.exports = function (t) {
					try {
						return {
							error: !1,
							value: t(),
						};
					} catch (t) {
						return {
							error: !0,
							value: t,
						};
					}
				};
			},
			7073: function (t, e, r) {
				var n = r(9037),
					o = r(7919),
					i = r(9985),
					a = r(5266),
					u = r(6738),
					c = r(4201),
					s = r(2532),
					f = r(8563),
					l = r(3931),
					p = r(3615),
					h = o && o.prototype,
					v = c('species'),
					d = !1,
					y = i(n.PromiseRejectionEvent),
					g = a('Promise', function () {
						var t = u(o),
							e = t !== String(o);
						if (!e && 66 === p) return !0;
						if (l && (!h.catch || !h.finally)) return !0;
						if (!p || p < 51 || !/native code/.test(t)) {
							var r = new o(function (t) {
									t(1);
								}),
								n = function (t) {
									t(
										function () {},
										function () {}
									);
								};
							if ((((r.constructor = {})[v] = n), !(d = r.then(function () {}) instanceof n))) return !0;
						}
						return !e && (s || f) && !y;
					});
				t.exports = {
					CONSTRUCTOR: g,
					REJECTION_EVENT: y,
					SUBCLASSING: d,
				};
			},
			7919: function (t, e, r) {
				var n = r(9037);
				t.exports = n.Promise;
			},
			2945: function (t, e, r) {
				var n = r(5027),
					o = r(8999),
					i = r(8742);
				t.exports = function (t, e) {
					if ((n(t), o(e) && e.constructor === t)) return e;
					var r = i.f(t);
					return (0, r.resolve)(e), r.promise;
				};
			},
			562: function (t, e, r) {
				var n = r(7919),
					o = r(6431),
					i = r(7073).CONSTRUCTOR;
				t.exports =
					i ||
					!o(function (t) {
						n.all(t).then(void 0, function () {});
					});
			},
			8055: function (t, e, r) {
				var n = r(2560).f;
				t.exports = function (t, e, r) {
					r in t ||
						n(t, r, {
							configurable: !0,
							get: function () {
								return e[r];
							},
							set: function (t) {
								e[r] = t;
							},
						});
				};
			},
			4410: function (t) {
				var e = function () {
					(this.head = null), (this.tail = null);
				};
				(e.prototype = {
					add: function (t) {
						var e = {
								item: t,
								next: null,
							},
							r = this.tail;
						r ? (r.next = e) : (this.head = e), (this.tail = e);
					},
					get: function () {
						var t = this.head;
						if (t) return null === (this.head = t.next) && (this.tail = null), t.item;
					},
				}),
					(t.exports = e);
			},
			6100: function (t, e, r) {
				var n = r(2615),
					o = r(5027),
					i = r(9985),
					a = r(6648),
					u = r(6308),
					c = TypeError;
				t.exports = function (t, e) {
					var r = t.exec;
					if (i(r)) {
						var s = n(r, t, e);
						return null !== s && o(s), s;
					}
					if ('RegExp' === a(t)) return n(u, t, e);
					throw new c('RegExp#exec called on incompatible receiver');
				};
			},
			6308: function (t, e, r) {
				var n,
					o,
					i = r(2615),
					a = r(8844),
					u = r(4327),
					c = r(9633),
					s = r(7901),
					f = r(3430),
					l = r(5391),
					p = r(618).get,
					h = r(2100),
					v = r(6422),
					d = f('native-string-replace', String.prototype.replace),
					y = RegExp.prototype.exec,
					g = y,
					m = a(''.charAt),
					b = a(''.indexOf),
					w = a(''.replace),
					x = a(''.slice),
					k = ((o = /b*/g), i(y, (n = /a/), 'a'), i(y, o, 'a'), 0 !== n.lastIndex || 0 !== o.lastIndex),
					S = s.BROKEN_CARET,
					E = void 0 !== /()??/.exec('')[1];
				(k || E || S || h || v) &&
					(g = function (t) {
						var e,
							r,
							n,
							o,
							a,
							s,
							f,
							h = this,
							v = p(h),
							O = u(t),
							P = v.raw;
						if (P) return (P.lastIndex = h.lastIndex), (e = i(g, P, O)), (h.lastIndex = P.lastIndex), e;
						var j = v.groups,
							L = S && h.sticky,
							_ = i(c, h),
							I = h.source,
							T = 0,
							R = O;
						if (
							(L &&
								((_ = w(_, 'y', '')),
								-1 === b(_, 'g') && (_ += 'g'),
								(R = x(O, h.lastIndex)),
								h.lastIndex > 0 &&
									(!h.multiline || (h.multiline && '\n' !== m(O, h.lastIndex - 1))) &&
									((I = '(?: ' + I + ')'), (R = ' ' + R), T++),
								(r = new RegExp('^(?:' + I + ')', _))),
							E && (r = new RegExp('^' + I + '$(?!\\s)', _)),
							k && (n = h.lastIndex),
							(o = i(y, L ? r : h, R)),
							L
								? o
									? ((o.input = x(o.input, T)),
										(o[0] = x(o[0], T)),
										(o.index = h.lastIndex),
										(h.lastIndex += o[0].length))
									: (h.lastIndex = 0)
								: k && o && (h.lastIndex = h.global ? o.index + o[0].length : n),
							E &&
								o &&
								o.length > 1 &&
								i(d, o[0], r, function () {
									for (a = 1; a < arguments.length - 2; a++)
										void 0 === arguments[a] && (o[a] = void 0);
								}),
							o && j)
						)
							for (o.groups = s = l(null), a = 0; a < j.length; a++) s[(f = j[a])[0]] = o[f[1]];
						return o;
					}),
					(t.exports = g);
			},
			9633: function (t, e, r) {
				var n = r(5027);
				t.exports = function () {
					var t = n(this),
						e = '';
					return (
						t.hasIndices && (e += 'd'),
						t.global && (e += 'g'),
						t.ignoreCase && (e += 'i'),
						t.multiline && (e += 'm'),
						t.dotAll && (e += 's'),
						t.unicode && (e += 'u'),
						t.unicodeSets && (e += 'v'),
						t.sticky && (e += 'y'),
						e
					);
				};
			},
			3477: function (t, e, r) {
				var n = r(2615),
					o = r(6812),
					i = r(3622),
					a = r(9633),
					u = RegExp.prototype;
				t.exports = function (t) {
					var e = t.flags;
					return void 0 !== e || 'flags' in u || o(t, 'flags') || !i(u, t) ? e : n(a, t);
				};
			},
			7901: function (t, e, r) {
				var n = r(3689),
					o = r(9037).RegExp,
					i = n(function () {
						var t = o('a', 'y');
						return (t.lastIndex = 2), null !== t.exec('abcd');
					}),
					a =
						i ||
						n(function () {
							return !o('a', 'y').sticky;
						}),
					u =
						i ||
						n(function () {
							var t = o('^r', 'gy');
							return (t.lastIndex = 2), null !== t.exec('str');
						});
				t.exports = {
					BROKEN_CARET: u,
					MISSED_STICKY: a,
					UNSUPPORTED_Y: i,
				};
			},
			2100: function (t, e, r) {
				var n = r(3689),
					o = r(9037).RegExp;
				t.exports = n(function () {
					var t = o('.', 's');
					return !(t.dotAll && t.test('\n') && 's' === t.flags);
				});
			},
			6422: function (t, e, r) {
				var n = r(3689),
					o = r(9037).RegExp;
				t.exports = n(function () {
					var t = o('(?<a>b)', 'g');
					return 'b' !== t.exec('b').groups.a || 'bc' !== 'b'.replace(t, '$<a>c');
				});
			},
			4684: function (t, e, r) {
				var n = r(981),
					o = TypeError;
				t.exports = function (t) {
					if (n(t)) throw new o("Can't call method on " + t);
					return t;
				};
			},
			8600: function (t) {
				t.exports = function (t, e) {
					return t === e || (t != t && e != e);
				};
			},
			4241: function (t, e, r) {
				var n = r(6058),
					o = r(2148),
					i = r(4201),
					a = r(7697),
					u = i('species');
				t.exports = function (t) {
					var e = n(t);
					a &&
						e &&
						!e[u] &&
						o(e, u, {
							configurable: !0,
							get: function () {
								return this;
							},
						});
				};
			},
			5997: function (t, e, r) {
				var n = r(2560).f,
					o = r(6812),
					i = r(4201)('toStringTag');
				t.exports = function (t, e, r) {
					t && !r && (t = t.prototype), t && !o(t, i) && n(t, i, {configurable: !0, value: e});
				};
			},
			2713: function (t, e, r) {
				var n = r(3430),
					o = r(4630),
					i = n('keys');
				t.exports = function (t) {
					return i[t] || (i[t] = o(t));
				};
			},
			4091: function (t, e, r) {
				var n = r(9037),
					o = r(5014),
					i = '__core-js_shared__',
					a = n[i] || o(i, {});
				t.exports = a;
			},
			3430: function (t, e, r) {
				var n = r(3931),
					o = r(4091);
				(t.exports = function (t, e) {
					return o[t] || (o[t] = void 0 !== e ? e : {});
				})('versions', []).push({
					version: '3.33.3',
					mode: n ? 'pure' : 'global',
					copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
					license: 'https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE',
					source: 'https://github.com/zloirock/core-js',
				});
			},
			6373: function (t, e, r) {
				var n = r(5027),
					o = r(2655),
					i = r(981),
					a = r(4201)('species');
				t.exports = function (t, e) {
					var r,
						u = n(t).constructor;
					return void 0 === u || i((r = n(u)[a])) ? e : o(r);
				};
			},
			730: function (t, e, r) {
				var n = r(8844),
					o = r(8700),
					i = r(4327),
					a = r(4684),
					u = n(''.charAt),
					c = n(''.charCodeAt),
					s = n(''.slice),
					f = function (t) {
						return function (e, r) {
							var n,
								f,
								l = i(a(e)),
								p = o(r),
								h = l.length;
							return p < 0 || p >= h
								? t
									? ''
									: void 0
								: (n = c(l, p)) < 55296 ||
									  n > 56319 ||
									  p + 1 === h ||
									  (f = c(l, p + 1)) < 56320 ||
									  f > 57343
									? t
										? u(l, p)
										: n
									: t
										? s(l, p, p + 2)
										: f - 56320 + ((n - 55296) << 10) + 65536;
						};
					};
				t.exports = {
					codeAt: f(!1),
					charAt: f(!0),
				};
			},
			6430: function (t, e, r) {
				var n = r(8844),
					o = 2147483647,
					i = /[^\0-\u007E]/,
					a = /[.\u3002\uFF0E\uFF61]/g,
					u = 'Overflow: input needs wider integers to process',
					c = RangeError,
					s = n(a.exec),
					f = Math.floor,
					l = String.fromCharCode,
					p = n(''.charCodeAt),
					h = n([].join),
					v = n([].push),
					d = n(''.replace),
					y = n(''.split),
					g = n(''.toLowerCase),
					m = function (t) {
						return t + 22 + 75 * (t < 26);
					},
					b = function (t, e, r) {
						var n = 0;
						for (t = r ? f(t / 700) : t >> 1, t += f(t / e); t > 455; ) (t = f(t / 35)), (n += 36);
						return f(n + (36 * t) / (t + 38));
					},
					w = function (t) {
						var e = [];
						t = (function (t) {
							for (var e = [], r = 0, n = t.length; r < n; ) {
								var o = p(t, r++);
								if (o >= 55296 && o <= 56319 && r < n) {
									var i = p(t, r++);
									56320 == (64512 & i)
										? v(e, ((1023 & o) << 10) + (1023 & i) + 65536)
										: (v(e, o), r--);
								} else v(e, o);
							}
							return e;
						})(t);
						var r,
							n,
							i = t.length,
							a = 128,
							s = 0,
							d = 72;
						for (r = 0; r < t.length; r++) (n = t[r]) < 128 && v(e, l(n));
						var y = e.length,
							g = y;
						for (y && v(e, '-'); g < i; ) {
							var w = o;
							for (r = 0; r < t.length; r++) (n = t[r]) >= a && n < w && (w = n);
							var x = g + 1;
							if (w - a > f((o - s) / x)) throw new c(u);
							for (s += (w - a) * x, a = w, r = 0; r < t.length; r++) {
								if ((n = t[r]) < a && ++s > o) throw new c(u);
								if (n === a) {
									for (var k = s, S = 36; ; ) {
										var E = S <= d ? 1 : S >= d + 26 ? 26 : S - d;
										if (k < E) break;
										var O = k - E,
											P = 36 - E;
										v(e, l(m(E + (O % P)))), (k = f(O / P)), (S += 36);
									}
									v(e, l(m(k))), (d = b(s, x, g === y)), (s = 0), g++;
								}
							}
							s++, a++;
						}
						return h(e, '');
					};
				t.exports = function (t) {
					var e,
						r,
						n = [],
						o = y(d(g(t), a, '.'), '.');
					for (e = 0; e < o.length; e++) (r = o[e]), v(n, s(i, r) ? 'xn--' + w(r) : r);
					return h(n, '.');
				};
			},
			5984: function (t, e, r) {
				var n = r(1236).PROPER,
					o = r(3689),
					i = r(6350);
				t.exports = function (t) {
					return o(function () {
						return !!i[t]() || '​᠎' !== '​᠎'[t]() || (n && i[t].name !== t);
					});
				};
			},
			1435: function (t, e, r) {
				var n = r(8844),
					o = r(4684),
					i = r(4327),
					a = r(6350),
					u = n(''.replace),
					c = RegExp('^[' + a + ']+'),
					s = RegExp('(^|[^' + a + '])[' + a + ']+$'),
					f = function (t) {
						return function (e) {
							var r = i(o(e));
							return 1 & t && (r = u(r, c, '')), 2 & t && (r = u(r, s, '$1')), r;
						};
					};
				t.exports = {
					start: f(1),
					end: f(2),
					trim: f(3),
				};
			},
			146: function (t, e, r) {
				var n = r(3615),
					o = r(3689),
					i = r(9037).String;
				t.exports =
					!!Object.getOwnPropertySymbols &&
					!o(function () {
						var t = Symbol('symbol detection');
						return !i(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && n && n < 41);
					});
			},
			3032: function (t, e, r) {
				var n = r(2615),
					o = r(6058),
					i = r(4201),
					a = r(1880);
				t.exports = function () {
					var t = o('Symbol'),
						e = t && t.prototype,
						r = e && e.valueOf,
						u = i('toPrimitive');
					e &&
						!e[u] &&
						a(
							e,
							u,
							function (t) {
								return n(r, this);
							},
							{arity: 1}
						);
				};
			},
			6549: function (t, e, r) {
				var n = r(146);
				t.exports = n && !!Symbol.for && !!Symbol.keyFor;
			},
			9886: function (t, e, r) {
				var n,
					o,
					i,
					a,
					u = r(9037),
					c = r(1735),
					s = r(4071),
					f = r(9985),
					l = r(6812),
					p = r(3689),
					h = r(2688),
					v = r(6004),
					d = r(6420),
					y = r(1500),
					g = r(4764),
					m = r(806),
					b = u.setImmediate,
					w = u.clearImmediate,
					x = u.process,
					k = u.Dispatch,
					S = u.Function,
					E = u.MessageChannel,
					O = u.String,
					P = 0,
					j = {},
					L = 'onreadystatechange';
				p(function () {
					n = u.location;
				});
				var _ = function (t) {
						if (l(j, t)) {
							var e = j[t];
							delete j[t], e();
						}
					},
					I = function (t) {
						return function () {
							_(t);
						};
					},
					T = function (t) {
						_(t.data);
					},
					R = function (t) {
						u.postMessage(O(t), n.protocol + '//' + n.host);
					};
				(b && w) ||
					((b = function (t) {
						y(arguments.length, 1);
						var e = f(t) ? t : S(t),
							r = v(arguments, 1);
						return (
							(j[++P] = function () {
								c(e, void 0, r);
							}),
							o(P),
							P
						);
					}),
					(w = function (t) {
						delete j[t];
					}),
					m
						? (o = function (t) {
								x.nextTick(I(t));
							})
						: k && k.now
							? (o = function (t) {
									k.now(I(t));
								})
							: E && !g
								? ((a = (i = new E()).port2), (i.port1.onmessage = T), (o = s(a.postMessage, a)))
								: u.addEventListener &&
									  f(u.postMessage) &&
									  !u.importScripts &&
									  n &&
									  'file:' !== n.protocol &&
									  !p(R)
									? ((o = R), u.addEventListener('message', T, !1))
									: (o =
											L in d('script')
												? function (t) {
														h.appendChild(d('script'))[L] = function () {
															h.removeChild(this), _(t);
														};
													}
												: function (t) {
														setTimeout(I(t), 0);
													})),
					(t.exports = {
						set: b,
						clear: w,
					});
			},
			3648: function (t, e, r) {
				var n = r(8844);
				t.exports = n((1).valueOf);
			},
			7578: function (t, e, r) {
				var n = r(8700),
					o = Math.max,
					i = Math.min;
				t.exports = function (t, e) {
					var r = n(t);
					return r < 0 ? o(r + e, 0) : i(r, e);
				};
			},
			5290: function (t, e, r) {
				var n = r(4413),
					o = r(4684);
				t.exports = function (t) {
					return n(o(t));
				};
			},
			8700: function (t, e, r) {
				var n = r(8828);
				t.exports = function (t) {
					var e = +t;
					return e != e || 0 === e ? 0 : n(e);
				};
			},
			3126: function (t, e, r) {
				var n = r(8700),
					o = Math.min;
				t.exports = function (t) {
					return t > 0 ? o(n(t), 9007199254740991) : 0;
				};
			},
			690: function (t, e, r) {
				var n = r(4684),
					o = Object;
				t.exports = function (t) {
					return o(n(t));
				};
			},
			8732: function (t, e, r) {
				var n = r(2615),
					o = r(8999),
					i = r(734),
					a = r(4849),
					u = r(5899),
					c = r(4201),
					s = TypeError,
					f = c('toPrimitive');
				t.exports = function (t, e) {
					if (!o(t) || i(t)) return t;
					var r,
						c = a(t, f);
					if (c) {
						if ((void 0 === e && (e = 'default'), (r = n(c, t, e)), !o(r) || i(r))) return r;
						throw new s("Can't convert object to primitive value");
					}
					return void 0 === e && (e = 'number'), u(t, e);
				};
			},
			8360: function (t, e, r) {
				var n = r(8732),
					o = r(734);
				t.exports = function (t) {
					var e = n(t, 'string');
					return o(e) ? e : e + '';
				};
			},
			3043: function (t, e, r) {
				var n = {};
				(n[r(4201)('toStringTag')] = 'z'), (t.exports = '[object z]' === String(n));
			},
			4327: function (t, e, r) {
				var n = r(926),
					o = String;
				t.exports = function (t) {
					if ('Symbol' === n(t)) throw new TypeError('Cannot convert a Symbol value to a string');
					return o(t);
				};
			},
			3691: function (t) {
				var e = String;
				t.exports = function (t) {
					try {
						return e(t);
					} catch (t) {
						return 'Object';
					}
				};
			},
			4630: function (t, e, r) {
				var n = r(8844),
					o = 0,
					i = Math.random(),
					a = n((1).toString);
				t.exports = function (t) {
					return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + a(++o + i, 36);
				};
			},
			6837: function (t, e, r) {
				var n = r(3689),
					o = r(4201),
					i = r(7697),
					a = r(3931),
					u = o('iterator');
				t.exports = !n(function () {
					var t = new URL('b?a=1&b=2&c=3', 'http://a'),
						e = t.searchParams,
						r = new URLSearchParams('a=1&a=2&b=3'),
						n = '';
					return (
						(t.pathname = 'c%20d'),
						e.forEach(function (t, r) {
							e.delete('b'), (n += r + t);
						}),
						r.delete('a', 2),
						r.delete('b', void 0),
						(a && (!t.toJSON || !r.has('a', 1) || r.has('a', 2) || !r.has('a', void 0) || r.has('b'))) ||
							(!e.size && (a || !i)) ||
							!e.sort ||
							'http://a/c%20d?a=1&c=3' !== t.href ||
							'3' !== e.get('c') ||
							'a=1' !== String(new URLSearchParams('?a=1')) ||
							!e[u] ||
							'a' !== new URL('https://a@b').username ||
							'b' !== new URLSearchParams(new URLSearchParams('a=b')).get('a') ||
							'xn--e1aybc' !== new URL('http://тест').host ||
							'#%D0%B1' !== new URL('http://a#б').hash ||
							'a1c3' !== n ||
							'x' !== new URL('http://x', void 0).host
					);
				});
			},
			9525: function (t, e, r) {
				var n = r(146);
				t.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
			},
			5648: function (t, e, r) {
				var n = r(7697),
					o = r(3689);
				t.exports =
					n &&
					o(function () {
						return (
							42 !==
							Object.defineProperty(function () {}, 'prototype', {value: 42, writable: !1}).prototype
						);
					});
			},
			1500: function (t) {
				var e = TypeError;
				t.exports = function (t, r) {
					if (t < r) throw new e('Not enough arguments');
					return t;
				};
			},
			9834: function (t, e, r) {
				var n = r(9037),
					o = r(9985),
					i = n.WeakMap;
				t.exports = o(i) && /native code/.test(String(i));
			},
			5405: function (t, e, r) {
				var n = r(496),
					o = r(6812),
					i = r(6145),
					a = r(2560).f;
				t.exports = function (t) {
					var e = n.Symbol || (n.Symbol = {});
					o(e, t) || a(e, t, {value: i.f(t)});
				};
			},
			6145: function (t, e, r) {
				var n = r(4201);
				e.f = n;
			},
			4201: function (t, e, r) {
				var n = r(9037),
					o = r(3430),
					i = r(6812),
					a = r(4630),
					u = r(146),
					c = r(9525),
					s = n.Symbol,
					f = o('wks'),
					l = c ? s.for || s : (s && s.withoutSetter) || a;
				t.exports = function (t) {
					return i(f, t) || (f[t] = u && i(s, t) ? s[t] : l('Symbol.' + t)), f[t];
				};
			},
			6350: function (t) {
				t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff';
			},
			1064: function (t, e, r) {
				var n = r(6058),
					o = r(6812),
					i = r(5773),
					a = r(3622),
					u = r(9385),
					c = r(8758),
					s = r(8055),
					f = r(3457),
					l = r(3841),
					p = r(2570),
					h = r(5411),
					v = r(7697),
					d = r(3931);
				t.exports = function (t, e, r, y) {
					var g = 'stackTraceLimit',
						m = y ? 2 : 1,
						b = t.split('.'),
						w = b[b.length - 1],
						x = n.apply(null, b);
					if (x) {
						var k = x.prototype;
						if ((!d && o(k, 'cause') && delete k.cause, !r)) return x;
						var S = n('Error'),
							E = e(function (t, e) {
								var r = l(y ? e : t, void 0),
									n = y ? new x(t) : new x();
								return (
									void 0 !== r && i(n, 'message', r),
									h(n, E, n.stack, 2),
									this && a(k, this) && f(n, this, E),
									arguments.length > m && p(n, arguments[m]),
									n
								);
							});
						if (
							((E.prototype = k),
							'Error' !== w
								? u
									? u(E, S)
									: c(E, S, {name: !0})
								: v && g in x && (s(E, x, g), s(E, x, 'prepareStackTrace')),
							c(E, x),
							!d)
						)
							try {
								k.name !== w && i(k, 'name', w), (k.constructor = E);
							} catch (t) {}
						return E;
					}
				};
			},
			4338: function (t, e, r) {
				var n = r(9989),
					o = r(3689),
					i = r(2297),
					a = r(8999),
					u = r(690),
					c = r(6310),
					s = r(5565),
					f = r(6522),
					l = r(7120),
					p = r(9042),
					h = r(4201),
					v = r(3615),
					d = h('isConcatSpreadable'),
					y =
						v >= 51 ||
						!o(function () {
							var t = [];
							return (t[d] = !1), t.concat()[0] !== t;
						}),
					g = function (t) {
						if (!a(t)) return !1;
						var e = t[d];
						return void 0 !== e ? !!e : i(t);
					};
				n(
					{target: 'Array', proto: !0, arity: 1, forced: !y || !p('concat')},
					{
						concat: function (t) {
							var e,
								r,
								n,
								o,
								i,
								a = u(this),
								p = l(a, 0),
								h = 0;
							for (e = -1, n = arguments.length; e < n; e++)
								if (g((i = -1 === e ? a : arguments[e])))
									for (o = c(i), s(h + o), r = 0; r < o; r++, h++) r in i && f(p, h, i[r]);
								else s(h + 1), f(p, h++, i);
							return (p.length = h), p;
						},
					}
				);
			},
			8077: function (t, e, r) {
				var n = r(9989),
					o = r(2960).filter;
				n(
					{target: 'Array', proto: !0, forced: !r(9042)('filter')},
					{
						filter: function (t) {
							return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
						},
					}
				);
			},
			5728: function (t, e, r) {
				var n = r(9989),
					o = r(2960).find,
					i = r(7370),
					a = 'find',
					u = !0;
				a in [] &&
					Array(1)[a](function () {
						u = !1;
					}),
					n(
						{target: 'Array', proto: !0, forced: u},
						{
							find: function (t) {
								return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
							},
						}
					),
					i(a);
			},
			7049: function (t, e, r) {
				var n = r(9989),
					o = r(1055);
				n(
					{
						target: 'Array',
						stat: !0,
						forced: !r(6431)(function (t) {
							Array.from(t);
						}),
					},
					{from: o}
				);
			},
			6801: function (t, e, r) {
				var n = r(9989),
					o = r(4328).includes,
					i = r(3689),
					a = r(7370);
				n(
					{
						target: 'Array',
						proto: !0,
						forced: i(function () {
							return !Array(1).includes();
						}),
					},
					{
						includes: function (t) {
							return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
						},
					}
				),
					a('includes');
			},
			752: function (t, e, r) {
				var n = r(5290),
					o = r(7370),
					i = r(9478),
					a = r(618),
					u = r(2560).f,
					c = r(1934),
					s = r(7807),
					f = r(3931),
					l = r(7697),
					p = 'Array Iterator',
					h = a.set,
					v = a.getterFor(p);
				t.exports = c(
					Array,
					'Array',
					function (t, e) {
						h(this, {type: p, target: n(t), index: 0, kind: e});
					},
					function () {
						var t = v(this),
							e = t.target,
							r = t.index++;
						if (!e || r >= e.length) return (t.target = void 0), s(void 0, !0);
						switch (t.kind) {
							case 'keys':
								return s(r, !1);
							case 'values':
								return s(e[r], !1);
						}
						return s([r, e[r]], !1);
					},
					'values'
				);
				var d = (i.Arguments = i.Array);
				if ((o('keys'), o('values'), o('entries'), !f && l && 'values' !== d.name))
					try {
						u(d, 'name', {value: 'values'});
					} catch (t) {}
			},
			6203: function (t, e, r) {
				var n = r(9989),
					o = r(8844),
					i = r(4413),
					a = r(5290),
					u = r(6834),
					c = o([].join);
				n(
					{target: 'Array', proto: !0, forced: i !== Object || !u('join', ',')},
					{
						join: function (t) {
							return c(a(this), void 0 === t ? ',' : t);
						},
					}
				);
			},
			560: function (t, e, r) {
				var n = r(9989),
					o = r(690),
					i = r(6310),
					a = r(5649),
					u = r(5565);
				n(
					{
						target: 'Array',
						proto: !0,
						arity: 1,
						forced:
							r(3689)(function () {
								return (
									4294967297 !==
									[].push.call(
										{
											length: 4294967296,
										},
										1
									)
								);
							}) ||
							!(function () {
								try {
									Object.defineProperty([], 'length', {writable: !1}).push();
								} catch (t) {
									return t instanceof TypeError;
								}
							})(),
					},
					{
						push: function (t) {
							var e = o(this),
								r = i(e),
								n = arguments.length;
							u(r + n);
							for (var c = 0; c < n; c++) (e[r] = arguments[c]), r++;
							return a(e, r), r;
						},
					}
				);
			},
			9730: function (t, e, r) {
				var n = r(9989),
					o = r(2297),
					i = r(9429),
					a = r(8999),
					u = r(7578),
					c = r(6310),
					s = r(5290),
					f = r(6522),
					l = r(4201),
					p = r(9042),
					h = r(6004),
					v = p('slice'),
					d = l('species'),
					y = Array,
					g = Math.max;
				n(
					{target: 'Array', proto: !0, forced: !v},
					{
						slice: function (t, e) {
							var r,
								n,
								l,
								p = s(this),
								v = c(p),
								m = u(t, v),
								b = u(void 0 === e ? v : e, v);
							if (
								o(p) &&
								((r = p.constructor),
								((i(r) && (r === y || o(r.prototype))) || (a(r) && null === (r = r[d]))) &&
									(r = void 0),
								r === y || void 0 === r)
							)
								return h(p, m, b);
							for (n = new (void 0 === r ? y : r)(g(b - m, 0)), l = 0; m < b; m++, l++)
								m in p && f(n, l, p[m]);
							return (n.length = l), n;
						},
					}
				);
			},
			9903: function (t, e, r) {
				var n = r(6812),
					o = r(1880),
					i = r(1797),
					a = r(4201)('toPrimitive'),
					u = Date.prototype;
				n(u, a) || o(u, a, i);
			},
			1057: function (t, e, r) {
				var n = r(9989),
					o = r(9037),
					i = r(1735),
					a = r(1064),
					u = 'WebAssembly',
					c = o[u],
					s = 7 !== new Error('e', {cause: 7}).cause,
					f = function (t, e) {
						var r = {};
						(r[t] = a(t, e, s)),
							n(
								{
									global: !0,
									constructor: !0,
									arity: 1,
									forced: s,
								},
								r
							);
					},
					l = function (t, e) {
						if (c && c[t]) {
							var r = {};
							(r[t] = a(u + '.' + t, e, s)),
								n(
									{
										target: u,
										stat: !0,
										constructor: !0,
										arity: 1,
										forced: s,
									},
									r
								);
						}
					};
				f('Error', function (t) {
					return function (e) {
						return i(t, this, arguments);
					};
				}),
					f('EvalError', function (t) {
						return function (e) {
							return i(t, this, arguments);
						};
					}),
					f('RangeError', function (t) {
						return function (e) {
							return i(t, this, arguments);
						};
					}),
					f('ReferenceError', function (t) {
						return function (e) {
							return i(t, this, arguments);
						};
					}),
					f('SyntaxError', function (t) {
						return function (e) {
							return i(t, this, arguments);
						};
					}),
					f('TypeError', function (t) {
						return function (e) {
							return i(t, this, arguments);
						};
					}),
					f('URIError', function (t) {
						return function (e) {
							return i(t, this, arguments);
						};
					}),
					l('CompileError', function (t) {
						return function (e) {
							return i(t, this, arguments);
						};
					}),
					l('LinkError', function (t) {
						return function (e) {
							return i(t, this, arguments);
						};
					}),
					l('RuntimeError', function (t) {
						return function (e) {
							return i(t, this, arguments);
						};
					});
			},
			4284: function (t, e, r) {
				var n = r(7697),
					o = r(1236).EXISTS,
					i = r(8844),
					a = r(2148),
					u = Function.prototype,
					c = i(u.toString),
					s = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
					f = i(s.exec);
				n &&
					!o &&
					a(u, 'name', {
						configurable: !0,
						get: function () {
							try {
								return f(s, c(this))[1];
							} catch (t) {
								return '';
							}
						},
					});
			},
			8324: function (t, e, r) {
				var n = r(9989),
					o = r(6058),
					i = r(1735),
					a = r(2615),
					u = r(8844),
					c = r(3689),
					s = r(9985),
					f = r(734),
					l = r(6004),
					p = r(2643),
					h = r(146),
					v = String,
					d = o('JSON', 'stringify'),
					y = u(/./.exec),
					g = u(''.charAt),
					m = u(''.charCodeAt),
					b = u(''.replace),
					w = u((1).toString),
					x = /[\uD800-\uDFFF]/g,
					k = /^[\uD800-\uDBFF]$/,
					S = /^[\uDC00-\uDFFF]$/,
					E =
						!h ||
						c(function () {
							var t = o('Symbol')('stringify detection');
							return (
								'[null]' !== d([t]) ||
								'{}' !==
									d({
										a: t,
									}) ||
								'{}' !== d(Object(t))
							);
						}),
					O = c(function () {
						return '"\\udf06\\ud834"' !== d('\udf06\ud834') || '"\\udead"' !== d('\udead');
					}),
					P = function (t, e) {
						var r = l(arguments),
							n = p(e);
						if (s(n) || (void 0 !== t && !f(t)))
							return (
								(r[1] = function (t, e) {
									if ((s(n) && (e = a(n, this, v(t), e)), !f(e))) return e;
								}),
								i(d, null, r)
							);
					},
					j = function (t, e, r) {
						var n = g(r, e - 1),
							o = g(r, e + 1);
						return (y(k, t) && !y(S, o)) || (y(S, t) && !y(k, n)) ? '\\u' + w(m(t, 0), 16) : t;
					};
				d &&
					n(
						{target: 'JSON', stat: !0, arity: 3, forced: E || O},
						{
							stringify: function (t, e, r) {
								var n = l(arguments),
									o = i(E ? P : d, null, n);
								return O && 'string' == typeof o ? b(o, x, j) : o;
							},
						}
					);
			},
			7629: function (t, e, r) {
				var n = r(9037);
				r(5997)(n.JSON, 'JSON', !0);
			},
			9322: function (t, e, r) {
				r(319)(
					'Map',
					function (t) {
						return function () {
							return t(this, arguments.length ? arguments[0] : void 0);
						};
					},
					r(800)
				);
			},
			6646: function (t, e, r) {
				r(9322);
			},
			7509: function (t, e, r) {
				r(5997)(Math, 'Math', !0);
			},
			9288: function (t, e, r) {
				var n = r(9989),
					o = r(3931),
					i = r(7697),
					a = r(9037),
					u = r(496),
					c = r(8844),
					s = r(5266),
					f = r(6812),
					l = r(3457),
					p = r(3622),
					h = r(734),
					v = r(8732),
					d = r(3689),
					y = r(2741).f,
					g = r(2474).f,
					m = r(2560).f,
					b = r(3648),
					w = r(1435).trim,
					x = 'Number',
					k = a[x],
					S = u[x],
					E = k.prototype,
					O = a.TypeError,
					P = c(''.slice),
					j = c(''.charCodeAt),
					L = function (t) {
						var e,
							r,
							n,
							o,
							i,
							a,
							u,
							c,
							s = v(t, 'number');
						if (h(s)) throw new O('Cannot convert a Symbol value to a number');
						if ('string' == typeof s && s.length > 2)
							if (((s = w(s)), 43 === (e = j(s, 0)) || 45 === e)) {
								if (88 === (r = j(s, 2)) || 120 === r) return NaN;
							} else if (48 === e) {
								switch (j(s, 1)) {
									case 66:
									case 98:
										(n = 2), (o = 49);
										break;
									case 79:
									case 111:
										(n = 8), (o = 55);
										break;
									default:
										return +s;
								}
								for (a = (i = P(s, 2)).length, u = 0; u < a; u++)
									if ((c = j(i, u)) < 48 || c > o) return NaN;
								return parseInt(i, n);
							}
						return +s;
					},
					_ = s(x, !k(' 0o1') || !k('0b1') || k('+0x1')),
					I = function (t) {
						var e,
							r =
								arguments.length < 1
									? 0
									: k(
											(function (t) {
												var e = v(t, 'number');
												return 'bigint' == typeof e ? e : L(e);
											})(t)
										);
						return p(E, (e = this)) &&
							d(function () {
								b(e);
							})
							? l(Object(r), this, I)
							: r;
					};
				(I.prototype = E),
					_ && !o && (E.constructor = I),
					n(
						{
							global: !0,
							constructor: !0,
							wrap: !0,
							forced: _,
						},
						{Number: I}
					);
				var T = function (t, e) {
					for (
						var r,
							n = i
								? y(e)
								: 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range'.split(
										','
									),
							o = 0;
						n.length > o;
						o++
					)
						f(e, (r = n[o])) && !f(t, r) && m(t, r, g(e, r));
				};
				o && S && T(u[x], S), (_ || o) && T(u[x], k);
			},
			6585: function (t, e, r) {
				var n = r(9989),
					o = r(9419).entries;
				n(
					{target: 'Object', stat: !0},
					{
						entries: function (t) {
							return o(t);
						},
					}
				);
			},
			1919: function (t, e, r) {
				var n = r(9989),
					o = r(3689),
					i = r(5290),
					a = r(2474).f,
					u = r(7697);
				n(
					{
						target: 'Object',
						stat: !0,
						forced:
							!u ||
							o(function () {
								a(1);
							}),
						sham: !u,
					},
					{
						getOwnPropertyDescriptor: function (t, e) {
							return a(i(t), e);
						},
					}
				);
			},
			9474: function (t, e, r) {
				var n = r(9989),
					o = r(7697),
					i = r(9152),
					a = r(5290),
					u = r(2474),
					c = r(6522);
				n(
					{target: 'Object', stat: !0, sham: !o},
					{
						getOwnPropertyDescriptors: function (t) {
							for (var e, r, n = a(t), o = u.f, s = i(n), f = {}, l = 0; s.length > l; )
								void 0 !== (r = o(n, (e = s[l++]))) && c(f, e, r);
							return f;
						},
					}
				);
			},
			9434: function (t, e, r) {
				var n = r(9989),
					o = r(146),
					i = r(3689),
					a = r(7518),
					u = r(690);
				n(
					{
						target: 'Object',
						stat: !0,
						forced:
							!o ||
							i(function () {
								a.f(1);
							}),
					},
					{
						getOwnPropertySymbols: function (t) {
							var e = a.f;
							return e ? e(u(t)) : [];
						},
					}
				);
			},
			8052: function (t, e, r) {
				var n = r(9989),
					o = r(3689),
					i = r(690),
					a = r(1868),
					u = r(1748);
				n(
					{
						target: 'Object',
						stat: !0,
						forced: o(function () {
							a(1);
						}),
						sham: !u,
					},
					{
						getPrototypeOf: function (t) {
							return a(i(t));
						},
					}
				);
			},
			9358: function (t, e, r) {
				var n = r(9989),
					o = r(690),
					i = r(300);
				n(
					{
						target: 'Object',
						stat: !0,
						forced: r(3689)(function () {
							i(1);
						}),
					},
					{
						keys: function (t) {
							return i(o(t));
						},
					}
				);
			},
			228: function (t, e, r) {
				var n = r(3043),
					o = r(1880),
					i = r(5073);
				n || o(Object.prototype, 'toString', i, {unsafe: !0});
			},
			1692: function (t, e, r) {
				var n = r(9989),
					o = r(2615),
					i = r(509),
					a = r(8742),
					u = r(9302),
					c = r(8734);
				n(
					{target: 'Promise', stat: !0, forced: r(562)},
					{
						all: function (t) {
							var e = this,
								r = a.f(e),
								n = r.resolve,
								s = r.reject,
								f = u(function () {
									var r = i(e.resolve),
										a = [],
										u = 0,
										f = 1;
									c(t, function (t) {
										var i = u++,
											c = !1;
										f++,
											o(r, e, t).then(function (t) {
												c || ((c = !0), (a[i] = t), --f || n(a));
											}, s);
									}),
										--f || n(a);
								});
							return f.error && s(f.value), r.promise;
						},
					}
				);
			},
			5089: function (t, e, r) {
				var n = r(9989),
					o = r(3931),
					i = r(7073).CONSTRUCTOR,
					a = r(7919),
					u = r(6058),
					c = r(9985),
					s = r(1880),
					f = a && a.prototype;
				if (
					(n(
						{target: 'Promise', proto: !0, forced: i, real: !0},
						{
							catch: function (t) {
								return this.then(void 0, t);
							},
						}
					),
					!o && c(a))
				) {
					var l = u('Promise').prototype.catch;
					f.catch !== l && s(f, 'catch', l, {unsafe: !0});
				}
			},
			6697: function (t, e, r) {
				var n,
					o,
					i,
					a = r(9989),
					u = r(3931),
					c = r(806),
					s = r(9037),
					f = r(2615),
					l = r(1880),
					p = r(9385),
					h = r(5997),
					v = r(4241),
					d = r(509),
					y = r(9985),
					g = r(8999),
					m = r(767),
					b = r(6373),
					w = r(9886).set,
					x = r(231),
					k = r(920),
					S = r(9302),
					E = r(4410),
					O = r(618),
					P = r(7919),
					j = r(7073),
					L = r(8742),
					_ = 'Promise',
					I = j.CONSTRUCTOR,
					T = j.REJECTION_EVENT,
					R = j.SUBCLASSING,
					$ = O.getterFor(_),
					N = O.set,
					C = P && P.prototype,
					A = P,
					W = C,
					B = s.TypeError,
					F = s.document,
					U = s.process,
					M = L.f,
					D = M,
					G = !!(F && F.createEvent && s.dispatchEvent),
					q = 'unhandledrejection',
					Q = function (t) {
						var e;
						return !(!g(t) || !y((e = t.then))) && e;
					},
					H = function (t, e) {
						var r,
							n,
							o,
							i = e.value,
							a = 1 === e.state,
							u = a ? t.ok : t.fail,
							c = t.resolve,
							s = t.reject,
							l = t.domain;
						try {
							u
								? (a || (2 === e.rejection && K(e), (e.rejection = 1)),
									!0 === u ? (r = i) : (l && l.enter(), (r = u(i)), l && (l.exit(), (o = !0))),
									r === t.promise
										? s(new B('Promise-chain cycle'))
										: (n = Q(r))
											? f(n, r, c, s)
											: c(r))
								: s(i);
						} catch (t) {
							l && !o && l.exit(), s(t);
						}
					},
					z = function (t, e) {
						t.notified ||
							((t.notified = !0),
							x(function () {
								for (var r, n = t.reactions; (r = n.get()); ) H(r, t);
								(t.notified = !1), e && !t.rejection && V(t);
							}));
					},
					Y = function (t, e, r) {
						var n, o;
						G
							? (((n = F.createEvent('Event')).promise = e),
								(n.reason = r),
								n.initEvent(t, !1, !0),
								s.dispatchEvent(n))
							: (n = {
									promise: e,
									reason: r,
								}),
							!T && (o = s['on' + t]) ? o(n) : t === q && k('Unhandled promise rejection', r);
					},
					V = function (t) {
						f(w, s, function () {
							var e,
								r = t.facade,
								n = t.value;
							if (
								J(t) &&
								((e = S(function () {
									c ? U.emit('unhandledRejection', n, r) : Y(q, r, n);
								})),
								(t.rejection = c || J(t) ? 2 : 1),
								e.error)
							)
								throw e.value;
						});
					},
					J = function (t) {
						return 1 !== t.rejection && !t.parent;
					},
					K = function (t) {
						f(w, s, function () {
							var e = t.facade;
							c ? U.emit('rejectionHandled', e) : Y('rejectionhandled', e, t.value);
						});
					},
					X = function (t, e, r) {
						return function (n) {
							t(e, n, r);
						};
					},
					Z = function (t, e, r) {
						t.done || ((t.done = !0), r && (t = r), (t.value = e), (t.state = 2), z(t, !0));
					},
					tt = function (t, e, r) {
						if (!t.done) {
							(t.done = !0), r && (t = r);
							try {
								if (t.facade === e) throw new B("Promise can't be resolved itself");
								var n = Q(e);
								n
									? x(function () {
											var r = {
												done: !1,
											};
											try {
												f(n, e, X(tt, r, t), X(Z, r, t));
											} catch (e) {
												Z(r, e, t);
											}
										})
									: ((t.value = e), (t.state = 1), z(t, !1));
							} catch (e) {
								Z(
									{
										done: !1,
									},
									e,
									t
								);
							}
						}
					};
				if (
					I &&
					((W = (A = function (t) {
						m(this, W), d(t), f(n, this);
						var e = $(this);
						try {
							t(X(tt, e), X(Z, e));
						} catch (t) {
							Z(e, t);
						}
					}).prototype),
					((n = function (t) {
						N(this, {
							type: _,
							done: !1,
							notified: !1,
							parent: !1,
							reactions: new E(),
							rejection: !1,
							state: 0,
							value: void 0,
						});
					}).prototype = l(W, 'then', function (t, e) {
						var r = $(this),
							n = M(b(this, A));
						return (
							(r.parent = !0),
							(n.ok = !y(t) || t),
							(n.fail = y(e) && e),
							(n.domain = c ? U.domain : void 0),
							0 === r.state
								? r.reactions.add(n)
								: x(function () {
										H(n, r);
									}),
							n.promise
						);
					})),
					(o = function () {
						var t = new n(),
							e = $(t);
						(this.promise = t), (this.resolve = X(tt, e)), (this.reject = X(Z, e));
					}),
					(L.f = M =
						function (t) {
							return t === A || undefined === t ? new o(t) : D(t);
						}),
					!u && y(P) && C !== Object.prototype)
				) {
					(i = C.then),
						R ||
							l(
								C,
								'then',
								function (t, e) {
									var r = this;
									return new A(function (t, e) {
										f(i, r, t, e);
									}).then(t, e);
								},
								{unsafe: !0}
							);
					try {
						delete C.constructor;
					} catch (t) {}
					p && p(C, W);
				}
				a(
					{
						global: !0,
						constructor: !0,
						wrap: !0,
						forced: I,
					},
					{Promise: A}
				),
					h(A, _, !1, !0),
					v(_);
			},
			3964: function (t, e, r) {
				r(6697), r(1692), r(5089), r(8829), r(2092), r(7905);
			},
			8829: function (t, e, r) {
				var n = r(9989),
					o = r(2615),
					i = r(509),
					a = r(8742),
					u = r(9302),
					c = r(8734);
				n(
					{target: 'Promise', stat: !0, forced: r(562)},
					{
						race: function (t) {
							var e = this,
								r = a.f(e),
								n = r.reject,
								s = u(function () {
									var a = i(e.resolve);
									c(t, function (t) {
										o(a, e, t).then(r.resolve, n);
									});
								});
							return s.error && n(s.value), r.promise;
						},
					}
				);
			},
			2092: function (t, e, r) {
				var n = r(9989),
					o = r(2615),
					i = r(8742);
				n(
					{target: 'Promise', stat: !0, forced: r(7073).CONSTRUCTOR},
					{
						reject: function (t) {
							var e = i.f(this);
							return o(e.reject, void 0, t), e.promise;
						},
					}
				);
			},
			7905: function (t, e, r) {
				var n = r(9989),
					o = r(6058),
					i = r(3931),
					a = r(7919),
					u = r(7073).CONSTRUCTOR,
					c = r(2945),
					s = o('Promise'),
					f = i && !u;
				n(
					{target: 'Promise', stat: !0, forced: i || u},
					{
						resolve: function (t) {
							return c(f && this === s ? a : this, t);
						},
					}
				);
			},
			50: function (t, e, r) {
				var n = r(9989),
					o = r(6058),
					i = r(1735),
					a = r(6761),
					u = r(2655),
					c = r(5027),
					s = r(8999),
					f = r(5391),
					l = r(3689),
					p = o('Reflect', 'construct'),
					h = Object.prototype,
					v = [].push,
					d = l(function () {
						function t() {}
						return !(p(function () {}, [], t) instanceof t);
					}),
					y = !l(function () {
						p(function () {});
					}),
					g = d || y;
				n(
					{target: 'Reflect', stat: !0, forced: g, sham: g},
					{
						construct: function (t, e) {
							u(t), c(e);
							var r = arguments.length < 3 ? t : u(arguments[2]);
							if (y && !d) return p(t, e, r);
							if (t === r) {
								switch (e.length) {
									case 0:
										return new t();
									case 1:
										return new t(e[0]);
									case 2:
										return new t(e[0], e[1]);
									case 3:
										return new t(e[0], e[1], e[2]);
									case 4:
										return new t(e[0], e[1], e[2], e[3]);
								}
								var n = [null];
								return i(v, n, e), new (i(a, t, n))();
							}
							var o = r.prototype,
								l = f(s(o) ? o : h),
								g = i(t, l, e);
							return s(g) ? g : l;
						},
					}
				);
			},
			6034: function (t, e, r) {
				var n = r(9989),
					o = r(9037),
					i = r(5997);
				n(
					{
						global: !0,
					},
					{Reflect: {}}
				),
					i(o.Reflect, 'Reflect', !0);
			},
			2003: function (t, e, r) {
				var n = r(7697),
					o = r(9037),
					i = r(8844),
					a = r(5266),
					u = r(3457),
					c = r(5773),
					s = r(2741).f,
					f = r(3622),
					l = r(1245),
					p = r(4327),
					h = r(3477),
					v = r(7901),
					d = r(8055),
					y = r(1880),
					g = r(3689),
					m = r(6812),
					b = r(618).enforce,
					w = r(4241),
					x = r(4201),
					k = r(2100),
					S = r(6422),
					E = x('match'),
					O = o.RegExp,
					P = O.prototype,
					j = o.SyntaxError,
					L = i(P.exec),
					_ = i(''.charAt),
					I = i(''.replace),
					T = i(''.indexOf),
					R = i(''.slice),
					$ = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
					N = /a/g,
					C = /a/g,
					A = new O(N) !== N,
					W = v.MISSED_STICKY,
					B = v.UNSUPPORTED_Y,
					F =
						n &&
						(!A ||
							W ||
							k ||
							S ||
							g(function () {
								return (C[E] = !1), O(N) !== N || O(C) === C || '/a/i' !== String(O(N, 'i'));
							}));
				if (a('RegExp', F)) {
					for (
						var U = function (t, e) {
								var r,
									n,
									o,
									i,
									a,
									s,
									v = f(P, this),
									d = l(t),
									y = void 0 === e,
									g = [],
									w = t;
								if (!v && d && y && t.constructor === U) return t;
								if (
									((d || f(P, t)) && ((t = t.source), y && (e = h(w))),
									(t = void 0 === t ? '' : p(t)),
									(e = void 0 === e ? '' : p(e)),
									(w = t),
									k && ('dotAll' in N) && (n = !!e && T(e, 's') > -1) && (e = I(e, /s/g, '')),
									(r = e),
									W && ('sticky' in N) && (o = !!e && T(e, 'y') > -1) && B && (e = I(e, /y/g, '')),
									S &&
										((i = (function (t) {
											for (
												var e,
													r = t.length,
													n = 0,
													o = '',
													i = [],
													a = {},
													u = !1,
													c = !1,
													s = 0,
													f = '';
												n <= r;
												n++
											) {
												if ('\\' === (e = _(t, n))) e += _(t, ++n);
												else if (']' === e) u = !1;
												else if (!u)
													switch (!0) {
														case '[' === e:
															u = !0;
															break;
														case '(' === e:
															L($, R(t, n + 1)) && ((n += 2), (c = !0)), (o += e), s++;
															continue;
														case '>' === e && c:
															if ('' === f || m(a, f))
																throw new j('Invalid capture group name');
															(a[f] = !0), (i[i.length] = [f, s]), (c = !1), (f = '');
															continue;
													}
												c ? (f += e) : (o += e);
											}
											return [o, i];
										})(t)),
										(t = i[0]),
										(g = i[1])),
									(a = u(O(t, e), v ? this : P, U)),
									(n || o || g.length) &&
										((s = b(a)),
										n &&
											((s.dotAll = !0),
											(s.raw = U(
												(function (t) {
													for (var e, r = t.length, n = 0, o = '', i = !1; n <= r; n++)
														'\\' !== (e = _(t, n))
															? i || '.' !== e
																? ('[' === e ? (i = !0) : ']' === e && (i = !1),
																	(o += e))
																: (o += '[\\s\\S]')
															: (o += e + _(t, ++n));
													return o;
												})(t),
												r
											))),
										o && (s.sticky = !0),
										g.length && (s.groups = g)),
									t !== w)
								)
									try {
										c(a, 'source', '' === w ? '(?:)' : w);
									} catch (t) {}
								return a;
							},
							M = s(O),
							D = 0;
						M.length > D;

					)
						d(U, O, M[D++]);
					(P.constructor = U), (U.prototype = P), y(o, 'RegExp', U, {constructor: !0});
				}
				w('RegExp');
			},
			8518: function (t, e, r) {
				var n = r(7697),
					o = r(2100),
					i = r(6648),
					a = r(2148),
					u = r(618).get,
					c = RegExp.prototype,
					s = TypeError;
				n &&
					o &&
					a(c, 'dotAll', {
						configurable: !0,
						get: function () {
							if (this !== c) {
								if ('RegExp' === i(this)) return !!u(this).dotAll;
								throw new s('Incompatible receiver, RegExp required');
							}
						},
					});
			},
			4043: function (t, e, r) {
				var n = r(9989),
					o = r(6308);
				n(
					{
						target: 'RegExp',
						proto: !0,
						forced: /./.exec !== o,
					},
					{exec: o}
				);
			},
			3440: function (t, e, r) {
				var n = r(7697),
					o = r(7901).MISSED_STICKY,
					i = r(6648),
					a = r(2148),
					u = r(618).get,
					c = RegExp.prototype,
					s = TypeError;
				n &&
					o &&
					a(c, 'sticky', {
						configurable: !0,
						get: function () {
							if (this !== c) {
								if ('RegExp' === i(this)) return !!u(this).sticky;
								throw new s('Incompatible receiver, RegExp required');
							}
						},
					});
			},
			7409: function (t, e, r) {
				r(4043);
				var n,
					o,
					i = r(9989),
					a = r(2615),
					u = r(9985),
					c = r(5027),
					s = r(4327),
					f =
						((n = !1),
						((o = /[ac]/).exec = function () {
							return (n = !0), /./.exec.apply(this, arguments);
						}),
						!0 === o.test('abc') && n),
					l = /./.test;
				i(
					{target: 'RegExp', proto: !0, forced: !f},
					{
						test: function (t) {
							var e = c(this),
								r = s(t),
								n = e.exec;
							if (!u(n)) return a(l, e, r);
							var o = a(n, e, r);
							return null !== o && (c(o), !0);
						},
					}
				);
			},
			2826: function (t, e, r) {
				var n = r(1236).PROPER,
					o = r(1880),
					i = r(5027),
					a = r(4327),
					u = r(3689),
					c = r(3477),
					s = 'toString',
					f = RegExp.prototype[s],
					l = u(function () {
						return (
							'/a/b' !==
							f.call({
								source: 'a',
								flags: 'b',
							})
						);
					}),
					p = n && f.name !== s;
				(l || p) &&
					o(
						RegExp.prototype,
						s,
						function () {
							var t = i(this);
							return '/' + a(t.source) + '/' + a(c(t));
						},
						{unsafe: !0}
					);
			},
			3843: function (t, e, r) {
				var n = r(9989),
					o = r(8844),
					i = r(2124),
					a = r(4684),
					u = r(4327),
					c = r(7413),
					s = o(''.indexOf);
				n(
					{target: 'String', proto: !0, forced: !c('includes')},
					{
						includes: function (t) {
							return !!~s(u(a(this)), u(i(t)), arguments.length > 1 ? arguments[1] : void 0);
						},
					}
				);
			},
			1694: function (t, e, r) {
				var n = r(730).charAt,
					o = r(4327),
					i = r(618),
					a = r(1934),
					u = r(7807),
					c = 'String Iterator',
					s = i.set,
					f = i.getterFor(c);
				a(
					String,
					'String',
					function (t) {
						s(this, {type: c, string: o(t), index: 0});
					},
					function () {
						var t,
							e = f(this),
							r = e.string,
							o = e.index;
						return o >= r.length ? u(void 0, !0) : ((t = n(r, o)), (e.index += t.length), u(t, !1));
					}
				);
			},
			2462: function (t, e, r) {
				var n = r(2615),
					o = r(8678),
					i = r(5027),
					a = r(981),
					u = r(3126),
					c = r(4327),
					s = r(4684),
					f = r(4849),
					l = r(1514),
					p = r(6100);
				o('match', function (t, e, r) {
					return [
						function (e) {
							var r = s(this),
								o = a(e) ? void 0 : f(e, t);
							return o ? n(o, e, r) : new RegExp(e)[t](c(r));
						},
						function (t) {
							var n = i(this),
								o = c(t),
								a = r(e, n, o);
							if (a.done) return a.value;
							if (!n.global) return p(n, o);
							var s = n.unicode;
							n.lastIndex = 0;
							for (var f, h = [], v = 0; null !== (f = p(n, o)); ) {
								var d = c(f[0]);
								(h[v] = d), '' === d && (n.lastIndex = l(o, u(n.lastIndex), s)), v++;
							}
							return 0 === v ? null : h;
						},
					];
				});
			},
			7267: function (t, e, r) {
				var n = r(1735),
					o = r(2615),
					i = r(8844),
					a = r(8678),
					u = r(3689),
					c = r(5027),
					s = r(9985),
					f = r(981),
					l = r(8700),
					p = r(3126),
					h = r(4327),
					v = r(4684),
					d = r(1514),
					y = r(4849),
					g = r(7017),
					m = r(6100),
					b = r(4201)('replace'),
					w = Math.max,
					x = Math.min,
					k = i([].concat),
					S = i([].push),
					E = i(''.indexOf),
					O = i(''.slice),
					P = '$0' === 'a'.replace(/./, '$0'),
					j = !!/./[b] && '' === /./[b]('a', '$0');
				a(
					'replace',
					function (t, e, r) {
						var i = j ? '$' : '$0';
						return [
							function (t, r) {
								var n = v(this),
									i = f(t) ? void 0 : y(t, b);
								return i ? o(i, t, n, r) : o(e, h(n), t, r);
							},
							function (t, o) {
								var a = c(this),
									u = h(t);
								if ('string' == typeof o && -1 === E(o, i) && -1 === E(o, '$<')) {
									var f = r(e, a, u, o);
									if (f.done) return f.value;
								}
								var v = s(o);
								v || (o = h(o));
								var y,
									b = a.global;
								b && ((y = a.unicode), (a.lastIndex = 0));
								for (var P, j = []; null !== (P = m(a, u)) && (S(j, P), b); ) {
									'' === h(P[0]) && (a.lastIndex = d(u, p(a.lastIndex), y));
								}
								for (var L, _ = '', I = 0, T = 0; T < j.length; T++) {
									for (
										var R, $ = h((P = j[T])[0]), N = w(x(l(P.index), u.length), 0), C = [], A = 1;
										A < P.length;
										A++
									)
										S(C, void 0 === (L = P[A]) ? L : String(L));
									var W = P.groups;
									if (v) {
										var B = k([$], C, N, u);
										void 0 !== W && S(B, W), (R = h(n(o, void 0, B)));
									} else R = g($, u, N, C, W, o);
									N >= I && ((_ += O(u, I, N) + R), (I = N + $.length));
								}
								return _ + O(u, I);
							},
						];
					},
					!!u(function () {
						var t = /./;
						return (
							(t.exec = function () {
								var t = [];
								return (
									(t.groups = {
										a: '7',
									}),
									t
								);
							}),
							'7' !== ''.replace(t, '$<a>')
						);
					}) ||
						!P ||
						j
				);
			},
			8436: function (t, e, r) {
				var n = r(9989),
					o = r(1435).trim;
				n(
					{target: 'String', proto: !0, forced: r(5984)('trim')},
					{
						trim: function () {
							return o(this);
						},
					}
				);
			},
			8373: function (t, e, r) {
				r(5405)('asyncIterator');
			},
			7855: function (t, e, r) {
				var n = r(9989),
					o = r(9037),
					i = r(2615),
					a = r(8844),
					u = r(3931),
					c = r(7697),
					s = r(146),
					f = r(3689),
					l = r(6812),
					p = r(3622),
					h = r(5027),
					v = r(5290),
					d = r(8360),
					y = r(4327),
					g = r(5684),
					m = r(5391),
					b = r(300),
					w = r(2741),
					x = r(6062),
					k = r(7518),
					S = r(2474),
					E = r(2560),
					O = r(8920),
					P = r(9556),
					j = r(1880),
					L = r(2148),
					_ = r(3430),
					I = r(2713),
					T = r(7248),
					R = r(4630),
					$ = r(4201),
					N = r(6145),
					C = r(5405),
					A = r(3032),
					W = r(5997),
					B = r(618),
					F = r(2960).forEach,
					U = I('hidden'),
					M = 'Symbol',
					D = 'prototype',
					G = B.set,
					q = B.getterFor(M),
					Q = Object[D],
					H = o.Symbol,
					z = H && H[D],
					Y = o.RangeError,
					V = o.TypeError,
					J = o.QObject,
					K = S.f,
					X = E.f,
					Z = x.f,
					tt = P.f,
					et = a([].push),
					rt = _('symbols'),
					nt = _('op-symbols'),
					ot = _('wks'),
					it = !J || !J[D] || !J[D].findChild,
					at = function (t, e, r) {
						var n = K(Q, e);
						n && delete Q[e], X(t, e, r), n && t !== Q && X(Q, e, n);
					},
					ut =
						c &&
						f(function () {
							return (
								7 !==
								m(
									X({}, 'a', {
										get: function () {
											return X(this, 'a', {value: 7}).a;
										},
									})
								).a
							);
						})
							? at
							: X,
					ct = function (t, e) {
						var r = (rt[t] = m(z));
						return G(r, {type: M, tag: t, description: e}), c || (r.description = e), r;
					},
					st = function (t, e, r) {
						t === Q && st(nt, e, r), h(t);
						var n = d(e);
						return (
							h(r),
							l(rt, n)
								? (r.enumerable
										? (l(t, U) && t[U][n] && (t[U][n] = !1), (r = m(r, {enumerable: g(0, !1)})))
										: (l(t, U) || X(t, U, g(1, {})), (t[U][n] = !0)),
									ut(t, n, r))
								: X(t, n, r)
						);
					},
					ft = function (t, e) {
						h(t);
						var r = v(e),
							n = b(r).concat(vt(r));
						return (
							F(n, function (e) {
								(c && !i(lt, r, e)) || st(t, e, r[e]);
							}),
							t
						);
					},
					lt = function (t) {
						var e = d(t),
							r = i(tt, this, e);
						return (
							!(this === Q && l(rt, e) && !l(nt, e)) &&
							(!(r || !l(this, e) || !l(rt, e) || (l(this, U) && this[U][e])) || r)
						);
					},
					pt = function (t, e) {
						var r = v(t),
							n = d(e);
						if (r !== Q || !l(rt, n) || l(nt, n)) {
							var o = K(r, n);
							return !o || !l(rt, n) || (l(r, U) && r[U][n]) || (o.enumerable = !0), o;
						}
					},
					ht = function (t) {
						var e = Z(v(t)),
							r = [];
						return (
							F(e, function (t) {
								l(rt, t) || l(T, t) || et(r, t);
							}),
							r
						);
					},
					vt = function (t) {
						var e = t === Q,
							r = Z(e ? nt : v(t)),
							n = [];
						return (
							F(r, function (t) {
								!l(rt, t) || (e && !l(Q, t)) || et(n, rt[t]);
							}),
							n
						);
					};
				s ||
					((H = function () {
						if (p(z, this)) throw new V('Symbol is not a constructor');
						var t = arguments.length && void 0 !== arguments[0] ? y(arguments[0]) : void 0,
							e = R(t),
							r = function (t) {
								var n = void 0 === this ? o : this;
								n === Q && i(r, nt, t), l(n, U) && l(n[U], e) && (n[U][e] = !1);
								var a = g(1, t);
								try {
									ut(n, e, a);
								} catch (t) {
									if (!(t instanceof Y)) throw t;
									at(n, e, a);
								}
							};
						return c && it && ut(Q, e, {configurable: !0, set: r}), ct(e, t);
					}),
					j((z = H[D]), 'toString', function () {
						return q(this).tag;
					}),
					j(H, 'withoutSetter', function (t) {
						return ct(R(t), t);
					}),
					(P.f = lt),
					(E.f = st),
					(O.f = ft),
					(S.f = pt),
					(w.f = x.f = ht),
					(k.f = vt),
					(N.f = function (t) {
						return ct($(t), t);
					}),
					c &&
						(L(z, 'description', {
							configurable: !0,
							get: function () {
								return q(this).description;
							},
						}),
						u || j(Q, 'propertyIsEnumerable', lt, {unsafe: !0}))),
					n(
						{
							global: !0,
							constructor: !0,
							wrap: !0,
							forced: !s,
							sham: !s,
						},
						{Symbol: H}
					),
					F(b(ot), function (t) {
						C(t);
					}),
					n(
						{target: M, stat: !0, forced: !s},
						{
							useSetter: function () {
								it = !0;
							},
							useSimple: function () {
								it = !1;
							},
						}
					),
					n(
						{target: 'Object', stat: !0, forced: !s, sham: !c},
						{
							create: function (t, e) {
								return void 0 === e ? m(t) : ft(m(t), e);
							},
							defineProperty: st,
							defineProperties: ft,
							getOwnPropertyDescriptor: pt,
						}
					),
					n(
						{
							target: 'Object',
							stat: !0,
							forced: !s,
						},
						{getOwnPropertyNames: ht}
					),
					A(),
					W(H, M),
					(T[U] = !0);
			},
			6544: function (t, e, r) {
				var n = r(9989),
					o = r(7697),
					i = r(9037),
					a = r(8844),
					u = r(6812),
					c = r(9985),
					s = r(3622),
					f = r(4327),
					l = r(2148),
					p = r(8758),
					h = i.Symbol,
					v = h && h.prototype;
				if (o && c(h) && (!('description' in v) || void 0 !== h().description)) {
					var d = {},
						y = function () {
							var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : f(arguments[0]),
								e = s(v, this) ? new h(t) : void 0 === t ? h() : h(t);
							return '' === t && (d[e] = !0), e;
						};
					p(y, h), (y.prototype = v), (v.constructor = y);
					var g = 'Symbol(description detection)' === String(h('description detection')),
						m = a(v.valueOf),
						b = a(v.toString),
						w = /^Symbol\((.*)\)[^)]+$/,
						x = a(''.replace),
						k = a(''.slice);
					l(v, 'description', {
						configurable: !0,
						get: function () {
							var t = m(this);
							if (u(d, t)) return '';
							var e = b(t),
								r = g ? k(e, 7, -1) : x(e, w, '$1');
							return '' === r ? void 0 : r;
						},
					}),
						n(
							{
								global: !0,
								constructor: !0,
								forced: !0,
							},
							{Symbol: y}
						);
				}
			},
			3975: function (t, e, r) {
				var n = r(9989),
					o = r(6058),
					i = r(6812),
					a = r(4327),
					u = r(3430),
					c = r(6549),
					s = u('string-to-symbol-registry'),
					f = u('symbol-to-string-registry');
				n(
					{target: 'Symbol', stat: !0, forced: !c},
					{
						for: function (t) {
							var e = a(t);
							if (i(s, e)) return s[e];
							var r = o('Symbol')(e);
							return (s[e] = r), (f[r] = e), r;
						},
					}
				);
			},
			4254: function (t, e, r) {
				r(5405)('iterator');
			},
			9749: function (t, e, r) {
				r(7855), r(3975), r(1445), r(8324), r(9434);
			},
			1445: function (t, e, r) {
				var n = r(9989),
					o = r(6812),
					i = r(734),
					a = r(3691),
					u = r(3430),
					c = r(6549),
					s = u('symbol-to-string-registry');
				n(
					{target: 'Symbol', stat: !0, forced: !c},
					{
						keyFor: function (t) {
							if (!i(t)) throw new TypeError(a(t) + ' is not a symbol');
							if (o(s, t)) return s[t];
						},
					}
				);
			},
			9373: function (t, e, r) {
				var n = r(5405),
					o = r(3032);
				n('toPrimitive'), o();
			},
			6793: function (t, e, r) {
				var n = r(6058),
					o = r(5405),
					i = r(5997);
				o('toStringTag'), i(n('Symbol'), 'Symbol');
			},
			6237: function (t, e, r) {
				var n = r(9989),
					o = r(2615),
					i = r(509),
					a = r(5027),
					u = r(8999),
					c = r(2302),
					s = r(7394),
					f = r(7807),
					l = r(2399),
					p = r(3931),
					h = s(function (t) {
						var e = this,
							r = e.iterator,
							n = e.predicate;
						return new t(function (i, c) {
							var s = function (t) {
									(e.done = !0), c(t);
								},
								p = function (t) {
									l(r, s, t, s);
								},
								h = function () {
									try {
										t.resolve(a(o(e.next, r))).then(function (r) {
											try {
												if (a(r).done) (e.done = !0), i(f(void 0, !0));
												else {
													var o = r.value;
													try {
														var c = n(o, e.counter++),
															l = function (t) {
																t ? i(f(o, !1)) : h();
															};
														u(c) ? t.resolve(c).then(l, p) : l(c);
													} catch (t) {
														p(t);
													}
												}
											} catch (t) {
												s(t);
											}
										}, s);
									} catch (t) {
										s(t);
									}
								};
							h();
						});
					});
				n(
					{target: 'AsyncIterator', proto: !0, real: !0, forced: p},
					{
						filter: function (t) {
							return a(this), i(t), new h(c(this), {predicate: t});
						},
					}
				);
			},
			1954: function (t, e, r) {
				var n = r(9989),
					o = r(2489).find;
				n(
					{target: 'AsyncIterator', proto: !0, real: !0},
					{
						find: function (t) {
							return o(this, t);
						},
					}
				);
			},
			9667: function (t, e, r) {
				var n = r(9989),
					o = r(2489).forEach;
				n(
					{target: 'AsyncIterator', proto: !0, real: !0},
					{
						forEach: function (t) {
							return o(this, t);
						},
					}
				);
			},
			7602: function (t, e, r) {
				var n = r(9989),
					o = r(9037),
					i = r(767),
					a = r(9985),
					u = r(1868),
					c = r(5773),
					s = r(3689),
					f = r(6812),
					l = r(4201),
					p = r(2013).IteratorPrototype,
					h = r(3931),
					v = l('toStringTag'),
					d = TypeError,
					y = o.Iterator,
					g =
						h ||
						!a(y) ||
						y.prototype !== p ||
						!s(function () {
							y({});
						}),
					m = function () {
						if ((i(this, p), u(this) === p))
							throw new d('Abstract class Iterator not directly constructable');
					};
				f(p, v) || c(p, v, 'Iterator'),
					(!g && f(p, 'constructor') && p.constructor !== Object) || c(p, 'constructor', m),
					(m.prototype = p),
					n(
						{
							global: !0,
							constructor: !0,
							forced: g,
						},
						{Iterator: m}
					);
			},
			3476: function (t, e, r) {
				var n = r(9989),
					o = r(2615),
					i = r(509),
					a = r(5027),
					u = r(2302),
					c = r(5419),
					s = r(1228),
					f = r(3931),
					l = c(function () {
						for (var t, e, r = this.iterator, n = this.predicate, i = this.next; ; ) {
							if (((t = a(o(i, r))), (this.done = !!t.done))) return;
							if (((e = t.value), s(r, n, [e, this.counter++], !0))) return e;
						}
					});
				n(
					{target: 'Iterator', proto: !0, real: !0, forced: f},
					{
						filter: function (t) {
							return a(this), i(t), new l(u(this), {predicate: t});
						},
					}
				);
			},
			928: function (t, e, r) {
				var n = r(9989),
					o = r(8734),
					i = r(509),
					a = r(5027),
					u = r(2302);
				n(
					{target: 'Iterator', proto: !0, real: !0},
					{
						find: function (t) {
							a(this), i(t);
							var e = u(this),
								r = 0;
							return o(
								e,
								function (e, n) {
									if (t(e, r++)) return n(e);
								},
								{IS_RECORD: !0, INTERRUPTED: !0}
							).result;
						},
					}
				);
			},
			5: function (t, e, r) {
				var n = r(9989),
					o = r(8734),
					i = r(509),
					a = r(5027),
					u = r(2302);
				n(
					{target: 'Iterator', proto: !0, real: !0},
					{
						forEach: function (t) {
							a(this), i(t);
							var e = u(this),
								r = 0;
							o(
								e,
								function (e) {
									t(e, r++);
								},
								{IS_RECORD: !0}
							);
						},
					}
				);
			},
			691: function (t, e, r) {
				var n = r(9989),
					o = r(7697),
					i = r(9037),
					a = r(6058),
					u = r(8844),
					c = r(2615),
					s = r(9985),
					f = r(8999),
					l = r(2297),
					p = r(6812),
					h = r(4327),
					v = r(6310),
					d = r(6522),
					y = r(3689),
					g = r(6675),
					m = r(146),
					b = i.JSON,
					w = i.Number,
					x = i.SyntaxError,
					k = b && b.parse,
					S = a('Object', 'keys'),
					E = Object.getOwnPropertyDescriptor,
					O = u(''.charAt),
					P = u(''.slice),
					j = u(/./.exec),
					L = u([].push),
					_ = /^\d$/,
					I = /^[1-9]$/,
					T = /^(?:-|\d)$/,
					R = /^[\t\n\r ]$/,
					$ = function (t, e, r, n) {
						var o,
							i,
							a,
							u,
							s,
							h = t[e],
							d = n && h === n.value,
							y = d && 'string' == typeof n.source ? {source: n.source} : {};
						if (f(h)) {
							var g = l(h),
								m = d ? n.nodes : g ? [] : {};
							if (g)
								for (o = m.length, a = v(h), u = 0; u < a; u++)
									N(h, u, $(h, '' + u, r, u < o ? m[u] : void 0));
							else
								for (i = S(h), a = v(i), u = 0; u < a; u++)
									(s = i[u]), N(h, s, $(h, s, r, p(m, s) ? m[s] : void 0));
						}
						return c(r, t, e, h, y);
					},
					N = function (t, e, r) {
						if (o) {
							var n = E(t, e);
							if (n && !n.configurable) return;
						}
						void 0 === r ? delete t[e] : d(t, e, r);
					},
					C = function (t, e, r, n) {
						(this.value = t), (this.end = e), (this.source = r), (this.nodes = n);
					},
					A = function (t, e) {
						(this.source = t), (this.index = e);
					};
				A.prototype = {
					fork: function (t) {
						return new A(this.source, t);
					},
					parse: function () {
						var t = this.source,
							e = this.skip(R, this.index),
							r = this.fork(e),
							n = O(t, e);
						if (j(T, n)) return r.number();
						switch (n) {
							case '{':
								return r.object();
							case '[':
								return r.array();
							case '"':
								return r.string();
							case 't':
								return r.keyword(!0);
							case 'f':
								return r.keyword(!1);
							case 'n':
								return r.keyword(null);
						}
						throw new x('Unexpected character: "' + n + '" at: ' + e);
					},
					node: function (t, e, r, n, o) {
						return new C(e, n, t ? null : P(this.source, r, n), o);
					},
					object: function () {
						for (var t = this.source, e = this.index + 1, r = !1, n = {}, o = {}; e < t.length; ) {
							if (((e = this.until(['"', '}'], e)), '}' === O(t, e) && !r)) {
								e++;
								break;
							}
							var i = this.fork(e).string(),
								a = i.value;
							(e = i.end),
								(e = this.until([':'], e) + 1),
								(e = this.skip(R, e)),
								(i = this.fork(e).parse()),
								d(o, a, i),
								d(n, a, i.value),
								(e = this.until([',', '}'], i.end));
							var u = O(t, e);
							if (',' === u) (r = !0), e++;
							else if ('}' === u) {
								e++;
								break;
							}
						}
						return this.node(1, n, this.index, e, o);
					},
					array: function () {
						for (var t = this.source, e = this.index + 1, r = !1, n = [], o = []; e < t.length; ) {
							if (((e = this.skip(R, e)), ']' === O(t, e) && !r)) {
								e++;
								break;
							}
							var i = this.fork(e).parse();
							if ((L(o, i), L(n, i.value), (e = this.until([',', ']'], i.end)), ',' === O(t, e)))
								(r = !0), e++;
							else if (']' === O(t, e)) {
								e++;
								break;
							}
						}
						return this.node(1, n, this.index, e, o);
					},
					string: function () {
						var t = this.index,
							e = g(this.source, this.index + 1);
						return this.node(0, e.value, t, e.end);
					},
					number: function () {
						var t = this.source,
							e = this.index,
							r = e;
						if (('-' === O(t, r) && r++, '0' === O(t, r))) r++;
						else {
							if (!j(I, O(t, r))) throw new x('Failed to parse number at: ' + r);
							r = this.skip(_, ++r);
						}
						if (
							('.' === O(t, r) && (r = this.skip(_, ++r)), 'e' === O(t, r) || 'E' === O(t, r)) &&
							(r++, ('+' !== O(t, r) && '-' !== O(t, r)) || r++, r === (r = this.skip(_, r)))
						)
							throw new x("Failed to parse number's exponent value at: " + r);
						return this.node(0, w(P(t, e, r)), e, r);
					},
					keyword: function (t) {
						var e = '' + t,
							r = this.index,
							n = r + e.length;
						if (P(this.source, r, n) !== e) throw new x('Failed to parse value at: ' + r);
						return this.node(0, t, r, n);
					},
					skip: function (t, e) {
						for (var r = this.source; e < r.length && j(t, O(r, e)); e++);
						return e;
					},
					until: function (t, e) {
						e = this.skip(R, e);
						for (var r = O(this.source, e), n = 0; n < t.length; n++) if (t[n] === r) return e;
						throw new x('Unexpected character: "' + r + '" at: ' + e);
					},
				};
				var W = y(function () {
						var t,
							e = '9007199254740993';
						return (
							k(e, function (e, r, n) {
								t = n.source;
							}),
							t !== e
						);
					}),
					B =
						m &&
						!y(function () {
							return 1 / k('-0 \t') != -1 / 0;
						});
				n(
					{target: 'JSON', stat: !0, forced: W},
					{
						parse: function (t, e) {
							return B && !s(e)
								? k(t)
								: (function (t, e) {
										t = h(t);
										var r = new A(t, 0, ''),
											n = r.parse(),
											o = n.value,
											i = r.skip(R, n.end);
										if (i < t.length)
											throw new x(
												'Unexpected extra character: "' +
													O(t, i) +
													'" after the parsed data at: ' +
													i
											);
										return s(e)
											? $(
													{
														'': o,
													},
													'',
													e,
													n
												)
											: o;
									})(t, e);
						},
					}
				);
			},
			7444: function (t, e, r) {
				var n = r(9989),
					o = r(9945),
					i = r(3914).remove;
				n(
					{target: 'Map', proto: !0, real: !0, forced: !0},
					{
						deleteAll: function () {
							for (var t, e = o(this), r = !0, n = 0, a = arguments.length; n < a; n++)
								(t = i(e, arguments[n])), (r = r && t);
							return !!r;
						},
					}
				);
			},
			7968: function (t, e, r) {
				var n = r(9989),
					o = r(9945),
					i = r(3914),
					a = i.get,
					u = i.has,
					c = i.set;
				n(
					{target: 'Map', proto: !0, real: !0, forced: !0},
					{
						emplace: function (t, e) {
							var r,
								n,
								i = o(this);
							return u(i, t)
								? ((r = a(i, t)), 'update' in e && ((r = e.update(r, t, i)), c(i, t, r)), r)
								: ((n = e.insert(t, i)), c(i, t, n), n);
						},
					}
				);
			},
			747: function (t, e, r) {
				var n = r(9989),
					o = r(4071),
					i = r(9945),
					a = r(613);
				n(
					{target: 'Map', proto: !0, real: !0, forced: !0},
					{
						every: function (t) {
							var e = i(this),
								r = o(t, arguments.length > 1 ? arguments[1] : void 0);
							return (
								!1 !==
								a(
									e,
									function (t, n) {
										if (!r(t, n, e)) return !1;
									},
									!0
								)
							);
						},
					}
				);
			},
			1099: function (t, e, r) {
				var n = r(9989),
					o = r(4071),
					i = r(9945),
					a = r(3914),
					u = r(613),
					c = a.Map,
					s = a.set;
				n(
					{target: 'Map', proto: !0, real: !0, forced: !0},
					{
						filter: function (t) {
							var e = i(this),
								r = o(t, arguments.length > 1 ? arguments[1] : void 0),
								n = new c();
							return (
								u(e, function (t, o) {
									r(t, o, e) && s(n, o, t);
								}),
								n
							);
						},
					}
				);
			},
			876: function (t, e, r) {
				var n = r(9989),
					o = r(4071),
					i = r(9945),
					a = r(613);
				n(
					{target: 'Map', proto: !0, real: !0, forced: !0},
					{
						findKey: function (t) {
							var e = i(this),
								r = o(t, arguments.length > 1 ? arguments[1] : void 0),
								n = a(
									e,
									function (t, n) {
										if (r(t, n, e))
											return {
												key: n,
											};
									},
									!0
								);
							return n && n.key;
						},
					}
				);
			},
			6320: function (t, e, r) {
				var n = r(9989),
					o = r(4071),
					i = r(9945),
					a = r(613);
				n(
					{target: 'Map', proto: !0, real: !0, forced: !0},
					{
						find: function (t) {
							var e = i(this),
								r = o(t, arguments.length > 1 ? arguments[1] : void 0),
								n = a(
									e,
									function (t, n) {
										if (r(t, n, e))
											return {
												value: t,
											};
									},
									!0
								);
							return n && n.value;
						},
					}
				);
			},
			6791: function (t, e, r) {
				var n = r(9989),
					o = r(8600),
					i = r(9945),
					a = r(613);
				n(
					{target: 'Map', proto: !0, real: !0, forced: !0},
					{
						includes: function (t) {
							return (
								!0 ===
								a(
									i(this),
									function (e) {
										if (o(e, t)) return !0;
									},
									!0
								)
							);
						},
					}
				);
			},
			19: function (t, e, r) {
				var n = r(9989),
					o = r(9945),
					i = r(613);
				n(
					{target: 'Map', proto: !0, real: !0, forced: !0},
					{
						keyOf: function (t) {
							var e = i(
								o(this),
								function (e, r) {
									if (e === t)
										return {
											key: r,
										};
								},
								!0
							);
							return e && e.key;
						},
					}
				);
			},
			2343: function (t, e, r) {
				var n = r(9989),
					o = r(4071),
					i = r(9945),
					a = r(3914),
					u = r(613),
					c = a.Map,
					s = a.set;
				n(
					{target: 'Map', proto: !0, real: !0, forced: !0},
					{
						mapKeys: function (t) {
							var e = i(this),
								r = o(t, arguments.length > 1 ? arguments[1] : void 0),
								n = new c();
							return (
								u(e, function (t, o) {
									s(n, r(t, o, e), t);
								}),
								n
							);
						},
					}
				);
			},
			1096: function (t, e, r) {
				var n = r(9989),
					o = r(4071),
					i = r(9945),
					a = r(3914),
					u = r(613),
					c = a.Map,
					s = a.set;
				n(
					{target: 'Map', proto: !0, real: !0, forced: !0},
					{
						mapValues: function (t) {
							var e = i(this),
								r = o(t, arguments.length > 1 ? arguments[1] : void 0),
								n = new c();
							return (
								u(e, function (t, o) {
									s(n, o, r(t, o, e));
								}),
								n
							);
						},
					}
				);
			},
			4314: function (t, e, r) {
				var n = r(9989),
					o = r(9945),
					i = r(8734),
					a = r(3914).set;
				n(
					{target: 'Map', proto: !0, real: !0, arity: 1, forced: !0},
					{
						merge: function (t) {
							for (var e = o(this), r = arguments.length, n = 0; n < r; )
								i(
									arguments[n++],
									function (t, r) {
										a(e, t, r);
									},
									{AS_ENTRIES: !0}
								);
							return e;
						},
					}
				);
			},
			3346: function (t, e, r) {
				var n = r(9989),
					o = r(509),
					i = r(9945),
					a = r(613),
					u = TypeError;
				n(
					{target: 'Map', proto: !0, real: !0, forced: !0},
					{
						reduce: function (t) {
							var e = i(this),
								r = arguments.length < 2,
								n = r ? void 0 : arguments[1];
							if (
								(o(t),
								a(e, function (o, i) {
									r ? ((r = !1), (n = o)) : (n = t(n, o, i, e));
								}),
								r)
							)
								throw new u('Reduce of empty map with no initial value');
							return n;
						},
					}
				);
			},
			4984: function (t, e, r) {
				var n = r(9989),
					o = r(4071),
					i = r(9945),
					a = r(613);
				n(
					{target: 'Map', proto: !0, real: !0, forced: !0},
					{
						some: function (t) {
							var e = i(this),
								r = o(t, arguments.length > 1 ? arguments[1] : void 0);
							return (
								!0 ===
								a(
									e,
									function (t, n) {
										if (r(t, n, e)) return !0;
									},
									!0
								)
							);
						},
					}
				);
			},
			4078: function (t, e, r) {
				var n = r(9989),
					o = r(509),
					i = r(9945),
					a = r(3914),
					u = TypeError,
					c = a.get,
					s = a.has,
					f = a.set;
				n(
					{target: 'Map', proto: !0, real: !0, forced: !0},
					{
						update: function (t, e) {
							var r = i(this),
								n = arguments.length;
							o(e);
							var a = s(r, t);
							if (!a && n < 3) throw new u('Updating absent value');
							var l = a ? c(r, t) : o(n > 2 ? arguments[2] : void 0)(t, r);
							return f(r, t, e(l, t, r)), r;
						},
					}
				);
			},
			7522: function (t, e, r) {
				var n = r(9037),
					o = r(6338),
					i = r(3265),
					a = r(7612),
					u = r(5773),
					c = function (t) {
						if (t && t.forEach !== a)
							try {
								u(t, 'forEach', a);
							} catch (e) {
								t.forEach = a;
							}
					};
				for (var s in o) o[s] && c(n[s] && n[s].prototype);
				c(i);
			},
			6265: function (t, e, r) {
				var n = r(9037),
					o = r(6338),
					i = r(3265),
					a = r(752),
					u = r(5773),
					c = r(4201),
					s = c('iterator'),
					f = c('toStringTag'),
					l = a.values,
					p = function (t, e) {
						if (t) {
							if (t[s] !== l)
								try {
									u(t, s, l);
								} catch (e) {
									t[s] = l;
								}
							if ((t[f] || u(t, f, e), o[e]))
								for (var r in a)
									if (t[r] !== a[r])
										try {
											u(t, r, a[r]);
										} catch (e) {
											t[r] = a[r];
										}
						}
					};
				for (var h in o) p(n[h] && n[h].prototype, h);
				p(i, 'DOMTokenList');
			},
			2625: function (t, e, r) {
				r(752);
				var n = r(9989),
					o = r(9037),
					i = r(2615),
					a = r(8844),
					u = r(7697),
					c = r(6837),
					s = r(1880),
					f = r(2148),
					l = r(6045),
					p = r(5997),
					h = r(974),
					v = r(618),
					d = r(767),
					y = r(9985),
					g = r(6812),
					m = r(4071),
					b = r(926),
					w = r(5027),
					x = r(8999),
					k = r(4327),
					S = r(5391),
					E = r(5684),
					O = r(5185),
					P = r(1664),
					j = r(7807),
					L = r(1500),
					_ = r(4201),
					I = r(382),
					T = _('iterator'),
					R = 'URLSearchParams',
					$ = R + 'Iterator',
					N = v.set,
					C = v.getterFor(R),
					A = v.getterFor($),
					W = Object.getOwnPropertyDescriptor,
					B = function (t) {
						if (!u) return o[t];
						var e = W(o, t);
						return e && e.value;
					},
					F = B('fetch'),
					U = B('Request'),
					M = B('Headers'),
					D = U && U.prototype,
					G = M && M.prototype,
					q = o.RegExp,
					Q = o.TypeError,
					H = o.decodeURIComponent,
					z = o.encodeURIComponent,
					Y = a(''.charAt),
					V = a([].join),
					J = a([].push),
					K = a(''.replace),
					X = a([].shift),
					Z = a([].splice),
					tt = a(''.split),
					et = a(''.slice),
					rt = /\+/g,
					nt = Array(4),
					ot = function (t) {
						return nt[t - 1] || (nt[t - 1] = q('((?:%[\\da-f]{2}){' + t + '})', 'gi'));
					},
					it = function (t) {
						try {
							return H(t);
						} catch (e) {
							return t;
						}
					},
					at = function (t) {
						var e = K(t, rt, ' '),
							r = 4;
						try {
							return H(e);
						} catch (t) {
							for (; r; ) e = K(e, ot(r--), it);
							return e;
						}
					},
					ut = /[!'()~]|%20/g,
					ct = {
						'!': '%21',
						"'": '%27',
						'(': '%28',
						')': '%29',
						'~': '%7E',
						'%20': '+',
					},
					st = function (t) {
						return ct[t];
					},
					ft = function (t) {
						return K(z(t), ut, st);
					},
					lt = h(
						function (t, e) {
							N(this, {type: $, target: C(t).entries, index: 0, kind: e});
						},
						R,
						function () {
							var t = A(this),
								e = t.target,
								r = t.index++;
							if (!e || r >= e.length) return (t.target = void 0), j(void 0, !0);
							var n = e[r];
							switch (t.kind) {
								case 'keys':
									return j(n.key, !1);
								case 'values':
									return j(n.value, !1);
							}
							return j([n.key, n.value], !1);
						},
						!0
					),
					pt = function (t) {
						(this.entries = []),
							(this.url = null),
							void 0 !== t &&
								(x(t)
									? this.parseObject(t)
									: this.parseQuery('string' == typeof t ? ('?' === Y(t, 0) ? et(t, 1) : t) : k(t)));
					};
				pt.prototype = {
					type: R,
					bindURL: function (t) {
						(this.url = t), this.update();
					},
					parseObject: function (t) {
						var e,
							r,
							n,
							o,
							a,
							u,
							c,
							s = this.entries,
							f = P(t);
						if (f)
							for (r = (e = O(t, f)).next; !(n = i(r, e)).done; ) {
								if (
									((a = (o = O(w(n.value))).next),
									(u = i(a, o)).done || (c = i(a, o)).done || !i(a, o).done)
								)
									throw new Q('Expected sequence with length 2');
								J(s, {key: k(u.value), value: k(c.value)});
							}
						else for (var l in t) g(t, l) && J(s, {key: l, value: k(t[l])});
					},
					parseQuery: function (t) {
						if (t)
							for (var e, r, n = this.entries, o = tt(t, '&'), i = 0; i < o.length; )
								(e = o[i++]).length && ((r = tt(e, '=')), J(n, {key: at(X(r)), value: at(V(r, '='))}));
					},
					serialize: function () {
						for (var t, e = this.entries, r = [], n = 0; n < e.length; )
							(t = e[n++]), J(r, ft(t.key) + '=' + ft(t.value));
						return V(r, '&');
					},
					update: function () {
						(this.entries.length = 0), this.parseQuery(this.url.query);
					},
					updateURL: function () {
						this.url && this.url.update();
					},
				};
				var ht = function () {
						d(this, vt);
						var t = N(this, new pt(arguments.length > 0 ? arguments[0] : void 0));
						u || (this.size = t.entries.length);
					},
					vt = ht.prototype;
				if (
					(l(
						vt,
						{
							append: function (t, e) {
								var r = C(this);
								L(arguments.length, 2),
									J(r.entries, {key: k(t), value: k(e)}),
									u || this.length++,
									r.updateURL();
							},
							delete: function (t) {
								for (
									var e = C(this),
										r = L(arguments.length, 1),
										n = e.entries,
										o = k(t),
										i = r < 2 ? void 0 : arguments[1],
										a = void 0 === i ? i : k(i),
										c = 0;
									c < n.length;

								) {
									var s = n[c];
									if (s.key !== o || (void 0 !== a && s.value !== a)) c++;
									else if ((Z(n, c, 1), void 0 !== a)) break;
								}
								u || (this.size = n.length), e.updateURL();
							},
							get: function (t) {
								var e = C(this).entries;
								L(arguments.length, 1);
								for (var r = k(t), n = 0; n < e.length; n++) if (e[n].key === r) return e[n].value;
								return null;
							},
							getAll: function (t) {
								var e = C(this).entries;
								L(arguments.length, 1);
								for (var r = k(t), n = [], o = 0; o < e.length; o++) e[o].key === r && J(n, e[o].value);
								return n;
							},
							has: function (t) {
								for (
									var e = C(this).entries,
										r = L(arguments.length, 1),
										n = k(t),
										o = r < 2 ? void 0 : arguments[1],
										i = void 0 === o ? o : k(o),
										a = 0;
									a < e.length;

								) {
									var u = e[a++];
									if (u.key === n && (void 0 === i || u.value === i)) return !0;
								}
								return !1;
							},
							set: function (t, e) {
								var r = C(this);
								L(arguments.length, 1);
								for (var n, o = r.entries, i = !1, a = k(t), c = k(e), s = 0; s < o.length; s++)
									(n = o[s]).key === a && (i ? Z(o, s--, 1) : ((i = !0), (n.value = c)));
								i || J(o, {key: a, value: c}), u || (this.size = o.length), r.updateURL();
							},
							sort: function () {
								var t = C(this);
								I(t.entries, function (t, e) {
									return t.key > e.key ? 1 : -1;
								}),
									t.updateURL();
							},
							forEach: function (t) {
								for (
									var e,
										r = C(this).entries,
										n = m(t, arguments.length > 1 ? arguments[1] : void 0),
										o = 0;
									o < r.length;

								)
									n((e = r[o++]).value, e.key, this);
							},
							keys: function () {
								return new lt(this, 'keys');
							},
							values: function () {
								return new lt(this, 'values');
							},
							entries: function () {
								return new lt(this, 'entries');
							},
						},
						{enumerable: !0}
					),
					s(vt, T, vt.entries, {name: 'entries'}),
					s(
						vt,
						'toString',
						function () {
							return C(this).serialize();
						},
						{enumerable: !0}
					),
					u &&
						f(vt, 'size', {
							get: function () {
								return C(this).entries.length;
							},
							configurable: !0,
							enumerable: !0,
						}),
					p(ht, R),
					n(
						{
							global: !0,
							constructor: !0,
							forced: !c,
						},
						{URLSearchParams: ht}
					),
					!c && y(M))
				) {
					var dt = a(G.has),
						yt = a(G.set),
						gt = function (t) {
							if (x(t)) {
								var e,
									r = t.body;
								if (b(r) === R)
									return (
										(e = t.headers ? new M(t.headers) : new M()),
										dt(e, 'content-type') ||
											yt(e, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
										S(t, {body: E(0, k(r)), headers: E(0, e)})
									);
							}
							return t;
						};
					if (
						(y(F) &&
							n(
								{global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0},
								{
									fetch: function (t) {
										return F(t, arguments.length > 1 ? gt(arguments[1]) : {});
									},
								}
							),
						y(U))
					) {
						var mt = function (t) {
							return d(this, D), new U(t, arguments.length > 1 ? gt(arguments[1]) : {});
						};
						(D.constructor = mt),
							(mt.prototype = D),
							n(
								{
									global: !0,
									constructor: !0,
									dontCallGetSet: !0,
									forced: !0,
								},
								{Request: mt}
							);
					}
				}
				t.exports = {
					URLSearchParams: ht,
					getState: C,
				};
			},
			8858: function (t, e, r) {
				var n = r(1880),
					o = r(8844),
					i = r(4327),
					a = r(1500),
					u = URLSearchParams,
					c = u.prototype,
					s = o(c.append),
					f = o(c.delete),
					l = o(c.forEach),
					p = o([].push),
					h = new u('a=1&a=2&b=3');
				h.delete('a', 1),
					h.delete('b', void 0),
					h + '' != 'a=2' &&
						n(
							c,
							'delete',
							function (t) {
								var e = arguments.length,
									r = e < 2 ? void 0 : arguments[1];
								if (e && void 0 === r) return f(this, t);
								var n = [];
								l(this, function (t, e) {
									p(n, {key: e, value: t});
								}),
									a(e, 1);
								for (var o, u = i(t), c = i(r), h = 0, v = 0, d = !1, y = n.length; h < y; )
									(o = n[h++]), d || o.key === u ? ((d = !0), f(this, o.key)) : v++;
								for (; v < y; ) ((o = n[v++]).key === u && o.value === c) || s(this, o.key, o.value);
							},
							{enumerable: !0, unsafe: !0}
						);
			},
			1318: function (t, e, r) {
				var n = r(1880),
					o = r(8844),
					i = r(4327),
					a = r(1500),
					u = URLSearchParams,
					c = u.prototype,
					s = o(c.getAll),
					f = o(c.has),
					l = new u('a=1');
				(!l.has('a', 2) && l.has('a', void 0)) ||
					n(
						c,
						'has',
						function (t) {
							var e = arguments.length,
								r = e < 2 ? void 0 : arguments[1];
							if (e && void 0 === r) return f(this, t);
							var n = s(this, t);
							a(e, 1);
							for (var o = i(r), u = 0; u < n.length; ) if (n[u++] === o) return !0;
							return !1;
						},
						{enumerable: !0, unsafe: !0}
					);
			},
			9307: function (t, e, r) {
				r(2625);
			},
			3228: function (t, e, r) {
				var n = r(7697),
					o = r(8844),
					i = r(2148),
					a = URLSearchParams.prototype,
					u = o(a.forEach);
				n &&
					!('size' in a) &&
					i(a, 'size', {
						get: function () {
							var t = 0;
							return (
								u(this, function () {
									t++;
								}),
								t
							);
						},
						configurable: !0,
						enumerable: !0,
					});
			},
			9391: function (t, e, r) {
				r(1694);
				var n,
					o = r(9989),
					i = r(7697),
					a = r(6837),
					u = r(9037),
					c = r(4071),
					s = r(8844),
					f = r(1880),
					l = r(2148),
					p = r(767),
					h = r(6812),
					v = r(5394),
					d = r(1055),
					y = r(9015),
					g = r(730).codeAt,
					m = r(6430),
					b = r(4327),
					w = r(5997),
					x = r(1500),
					k = r(2625),
					S = r(618),
					E = S.set,
					O = S.getterFor('URL'),
					P = k.URLSearchParams,
					j = k.getState,
					L = u.URL,
					_ = u.TypeError,
					I = u.parseInt,
					T = Math.floor,
					R = Math.pow,
					$ = s(''.charAt),
					N = s(/./.exec),
					C = s([].join),
					A = s((1).toString),
					W = s([].pop),
					B = s([].push),
					F = s(''.replace),
					U = s([].shift),
					M = s(''.split),
					D = s(''.slice),
					G = s(''.toLowerCase),
					q = s([].unshift),
					Q = 'Invalid scheme',
					H = 'Invalid host',
					z = 'Invalid port',
					Y = /[a-z]/i,
					V = /[\d+-.a-z]/i,
					J = /\d/,
					K = /^0x/i,
					X = /^[0-7]+$/,
					Z = /^\d+$/,
					tt = /^[\da-f]+$/i,
					et = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
					rt = /[\0\t\n\r #/:<>?@[\\\]^|]/,
					nt = /^[\u0000-\u0020]+/,
					ot = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
					it = /[\t\n\r]/g,
					at = function (t) {
						var e, r, n, o;
						if ('number' == typeof t) {
							for (e = [], r = 0; r < 4; r++) q(e, t % 256), (t = T(t / 256));
							return C(e, '.');
						}
						if ('object' == typeof t) {
							for (
								e = '',
									n = (function (t) {
										for (var e = null, r = 1, n = null, o = 0, i = 0; i < 8; i++)
											0 !== t[i]
												? (o > r && ((e = n), (r = o)), (n = null), (o = 0))
												: (null === n && (n = i), ++o);
										return o > r && ((e = n), (r = o)), e;
									})(t),
									r = 0;
								r < 8;
								r++
							)
								(o && 0 === t[r]) ||
									(o && (o = !1),
									n === r
										? ((e += r ? ':' : '::'), (o = !0))
										: ((e += A(t[r], 16)), r < 7 && (e += ':')));
							return '[' + e + ']';
						}
						return t;
					},
					ut = {},
					ct = v({}, ut, {' ': 1, '"': 1, '<': 1, '>': 1, '`': 1}),
					st = v({}, ct, {'#': 1, '?': 1, '{': 1, '}': 1}),
					ft = v({}, st, {'/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1}),
					lt = function (t, e) {
						var r = g(t, 0);
						return r > 32 && r < 127 && !h(e, t) ? t : encodeURIComponent(t);
					},
					pt = {
						ftp: 21,
						file: null,
						http: 80,
						https: 443,
						ws: 80,
						wss: 443,
					},
					ht = function (t, e) {
						var r;
						return 2 === t.length && N(Y, $(t, 0)) && (':' === (r = $(t, 1)) || (!e && '|' === r));
					},
					vt = function (t) {
						var e;
						return (
							t.length > 1 &&
							ht(D(t, 0, 2)) &&
							(2 === t.length || '/' === (e = $(t, 2)) || '\\' === e || '?' === e || '#' === e)
						);
					},
					dt = function (t) {
						return '.' === t || '%2e' === G(t);
					},
					yt = {},
					gt = {},
					mt = {},
					bt = {},
					wt = {},
					xt = {},
					kt = {},
					St = {},
					Et = {},
					Ot = {},
					Pt = {},
					jt = {},
					Lt = {},
					_t = {},
					It = {},
					Tt = {},
					Rt = {},
					$t = {},
					Nt = {},
					Ct = {},
					At = {},
					Wt = function (t, e, r) {
						var n,
							o,
							i,
							a = b(t);
						if (e) {
							if ((o = this.parse(a))) throw new _(o);
							this.searchParams = null;
						} else {
							if ((void 0 !== r && (n = new Wt(r, !0)), (o = this.parse(a, null, n)))) throw new _(o);
							(i = j(new P())).bindURL(this), (this.searchParams = i);
						}
					};
				Wt.prototype = {
					type: 'URL',
					parse: function (t, e, r) {
						var o,
							i,
							a,
							u,
							c,
							s = this,
							f = e || yt,
							l = 0,
							p = '',
							v = !1,
							g = !1,
							m = !1;
						for (
							t = b(t),
								e ||
									((s.scheme = ''),
									(s.username = ''),
									(s.password = ''),
									(s.host = null),
									(s.port = null),
									(s.path = []),
									(s.query = null),
									(s.fragment = null),
									(s.cannotBeABaseURL = !1),
									(t = F(t, nt, '')),
									(t = F(t, ot, '$1'))),
								t = F(t, it, ''),
								o = d(t);
							l <= o.length;

						) {
							switch (((i = o[l]), f)) {
								case yt:
									if (!i || !N(Y, i)) {
										if (e) return Q;
										f = mt;
										continue;
									}
									(p += G(i)), (f = gt);
									break;
								case gt:
									if (i && (N(V, i) || '+' === i || '-' === i || '.' === i)) p += G(i);
									else {
										if (':' !== i) {
											if (e) return Q;
											(p = ''), (f = mt), (l = 0);
											continue;
										}
										if (
											e &&
											(s.isSpecial() !== h(pt, p) ||
												('file' === p && (s.includesCredentials() || null !== s.port)) ||
												('file' === s.scheme && !s.host))
										)
											return;
										if (((s.scheme = p), e))
											return void (s.isSpecial() && pt[s.scheme] === s.port && (s.port = null));
										(p = ''),
											'file' === s.scheme
												? (f = _t)
												: s.isSpecial() && r && r.scheme === s.scheme
													? (f = bt)
													: s.isSpecial()
														? (f = St)
														: '/' === o[l + 1]
															? ((f = wt), l++)
															: ((s.cannotBeABaseURL = !0), B(s.path, ''), (f = Nt));
									}
									break;
								case mt:
									if (!r || (r.cannotBeABaseURL && '#' !== i)) return Q;
									if (r.cannotBeABaseURL && '#' === i) {
										(s.scheme = r.scheme),
											(s.path = y(r.path)),
											(s.query = r.query),
											(s.fragment = ''),
											(s.cannotBeABaseURL = !0),
											(f = At);
										break;
									}
									f = 'file' === r.scheme ? _t : xt;
									continue;
								case bt:
									if ('/' !== i || '/' !== o[l + 1]) {
										f = xt;
										continue;
									}
									(f = Et), l++;
									break;
								case wt:
									if ('/' === i) {
										f = Ot;
										break;
									}
									f = $t;
									continue;
								case xt:
									if (((s.scheme = r.scheme), i === n))
										(s.username = r.username),
											(s.password = r.password),
											(s.host = r.host),
											(s.port = r.port),
											(s.path = y(r.path)),
											(s.query = r.query);
									else if ('/' === i || ('\\' === i && s.isSpecial())) f = kt;
									else if ('?' === i)
										(s.username = r.username),
											(s.password = r.password),
											(s.host = r.host),
											(s.port = r.port),
											(s.path = y(r.path)),
											(s.query = ''),
											(f = Ct);
									else {
										if ('#' !== i) {
											(s.username = r.username),
												(s.password = r.password),
												(s.host = r.host),
												(s.port = r.port),
												(s.path = y(r.path)),
												s.path.length--,
												(f = $t);
											continue;
										}
										(s.username = r.username),
											(s.password = r.password),
											(s.host = r.host),
											(s.port = r.port),
											(s.path = y(r.path)),
											(s.query = r.query),
											(s.fragment = ''),
											(f = At);
									}
									break;
								case kt:
									if (!s.isSpecial() || ('/' !== i && '\\' !== i)) {
										if ('/' !== i) {
											(s.username = r.username),
												(s.password = r.password),
												(s.host = r.host),
												(s.port = r.port),
												(f = $t);
											continue;
										}
										f = Ot;
									} else f = Et;
									break;
								case St:
									if (((f = Et), '/' !== i || '/' !== $(p, l + 1))) continue;
									l++;
									break;
								case Et:
									if ('/' !== i && '\\' !== i) {
										f = Ot;
										continue;
									}
									break;
								case Ot:
									if ('@' === i) {
										v && (p = '%40' + p), (v = !0), (a = d(p));
										for (var w = 0; w < a.length; w++) {
											var x = a[w];
											if (':' !== x || m) {
												var k = lt(x, ft);
												m ? (s.password += k) : (s.username += k);
											} else m = !0;
										}
										p = '';
									} else if (
										i === n ||
										'/' === i ||
										'?' === i ||
										'#' === i ||
										('\\' === i && s.isSpecial())
									) {
										if (v && '' === p) return 'Invalid authority';
										(l -= d(p).length + 1), (p = ''), (f = Pt);
									} else p += i;
									break;
								case Pt:
								case jt:
									if (e && 'file' === s.scheme) {
										f = Tt;
										continue;
									}
									if (':' !== i || g) {
										if (
											i === n ||
											'/' === i ||
											'?' === i ||
											'#' === i ||
											('\\' === i && s.isSpecial())
										) {
											if (s.isSpecial() && '' === p) return H;
											if (e && '' === p && (s.includesCredentials() || null !== s.port)) return;
											if ((u = s.parseHost(p))) return u;
											if (((p = ''), (f = Rt), e)) return;
											continue;
										}
										'[' === i ? (g = !0) : ']' === i && (g = !1), (p += i);
									} else {
										if ('' === p) return H;
										if ((u = s.parseHost(p))) return u;
										if (((p = ''), (f = Lt), e === jt)) return;
									}
									break;
								case Lt:
									if (!N(J, i)) {
										if (
											i === n ||
											'/' === i ||
											'?' === i ||
											'#' === i ||
											('\\' === i && s.isSpecial()) ||
											e
										) {
											if ('' !== p) {
												var S = I(p, 10);
												if (S > 65535) return z;
												(s.port = s.isSpecial() && S === pt[s.scheme] ? null : S), (p = '');
											}
											if (e) return;
											f = Rt;
											continue;
										}
										return z;
									}
									p += i;
									break;
								case _t:
									if (((s.scheme = 'file'), '/' === i || '\\' === i)) f = It;
									else {
										if (!r || 'file' !== r.scheme) {
											f = $t;
											continue;
										}
										switch (i) {
											case n:
												(s.host = r.host), (s.path = y(r.path)), (s.query = r.query);
												break;
											case '?':
												(s.host = r.host), (s.path = y(r.path)), (s.query = ''), (f = Ct);
												break;
											case '#':
												(s.host = r.host),
													(s.path = y(r.path)),
													(s.query = r.query),
													(s.fragment = ''),
													(f = At);
												break;
											default:
												vt(C(y(o, l), '')) ||
													((s.host = r.host), (s.path = y(r.path)), s.shortenPath()),
													(f = $t);
												continue;
										}
									}
									break;
								case It:
									if ('/' === i || '\\' === i) {
										f = Tt;
										break;
									}
									r &&
										'file' === r.scheme &&
										!vt(C(y(o, l), '')) &&
										(ht(r.path[0], !0) ? B(s.path, r.path[0]) : (s.host = r.host)),
										(f = $t);
									continue;
								case Tt:
									if (i === n || '/' === i || '\\' === i || '?' === i || '#' === i) {
										if (!e && ht(p)) f = $t;
										else if ('' === p) {
											if (((s.host = ''), e)) return;
											f = Rt;
										} else {
											if ((u = s.parseHost(p))) return u;
											if (('localhost' === s.host && (s.host = ''), e)) return;
											(p = ''), (f = Rt);
										}
										continue;
									}
									p += i;
									break;
								case Rt:
									if (s.isSpecial()) {
										if (((f = $t), '/' !== i && '\\' !== i)) continue;
									} else if (e || '?' !== i)
										if (e || '#' !== i) {
											if (i !== n && ((f = $t), '/' !== i)) continue;
										} else (s.fragment = ''), (f = At);
									else (s.query = ''), (f = Ct);
									break;
								case $t:
									if (
										i === n ||
										'/' === i ||
										('\\' === i && s.isSpecial()) ||
										(!e && ('?' === i || '#' === i))
									) {
										if (
											('..' === (c = G((c = p))) || '%2e.' === c || '.%2e' === c || '%2e%2e' === c
												? (s.shortenPath(),
													'/' === i || ('\\' === i && s.isSpecial()) || B(s.path, ''))
												: dt(p)
													? '/' === i || ('\\' === i && s.isSpecial()) || B(s.path, '')
													: ('file' === s.scheme &&
															!s.path.length &&
															ht(p) &&
															(s.host && (s.host = ''), (p = $(p, 0) + ':')),
														B(s.path, p)),
											(p = ''),
											'file' === s.scheme && (i === n || '?' === i || '#' === i))
										)
											for (; s.path.length > 1 && '' === s.path[0]; ) U(s.path);
										'?' === i
											? ((s.query = ''), (f = Ct))
											: '#' === i && ((s.fragment = ''), (f = At));
									} else p += lt(i, st);
									break;
								case Nt:
									'?' === i
										? ((s.query = ''), (f = Ct))
										: '#' === i
											? ((s.fragment = ''), (f = At))
											: i !== n && (s.path[0] += lt(i, ut));
									break;
								case Ct:
									e || '#' !== i
										? i !== n &&
											("'" === i && s.isSpecial()
												? (s.query += '%27')
												: (s.query += '#' === i ? '%23' : lt(i, ut)))
										: ((s.fragment = ''), (f = At));
									break;
								case At:
									i !== n && (s.fragment += lt(i, ct));
							}
							l++;
						}
					},
					parseHost: function (t) {
						var e, r, n;
						if ('[' === $(t, 0)) {
							if (']' !== $(t, t.length - 1)) return H;
							if (
								((e = (function (t) {
									var e,
										r,
										n,
										o,
										i,
										a,
										u,
										c = [0, 0, 0, 0, 0, 0, 0, 0],
										s = 0,
										f = null,
										l = 0,
										p = function () {
											return $(t, l);
										};
									if (':' === p()) {
										if (':' !== $(t, 1)) return;
										(l += 2), (f = ++s);
									}
									for (; p(); ) {
										if (8 === s) return;
										if (':' !== p()) {
											for (e = r = 0; r < 4 && N(tt, p()); ) (e = 16 * e + I(p(), 16)), l++, r++;
											if ('.' === p()) {
												if (0 === r) return;
												if (((l -= r), s > 6)) return;
												for (n = 0; p(); ) {
													if (((o = null), n > 0)) {
														if (!('.' === p() && n < 4)) return;
														l++;
													}
													if (!N(J, p())) return;
													for (; N(J, p()); ) {
														if (((i = I(p(), 10)), null === o)) o = i;
														else {
															if (0 === o) return;
															o = 10 * o + i;
														}
														if (o > 255) return;
														l++;
													}
													(c[s] = 256 * c[s] + o), (2 != ++n && 4 !== n) || s++;
												}
												if (4 !== n) return;
												break;
											}
											if (':' === p()) {
												if ((l++, !p())) return;
											} else if (p()) return;
											c[s++] = e;
										} else {
											if (null !== f) return;
											l++, (f = ++s);
										}
									}
									if (null !== f)
										for (a = s - f, s = 7; 0 !== s && a > 0; )
											(u = c[s]), (c[s--] = c[f + a - 1]), (c[f + --a] = u);
									else if (8 !== s) return;
									return c;
								})(D(t, 1, -1))),
								!e)
							)
								return H;
							this.host = e;
						} else if (this.isSpecial()) {
							if (((t = m(t)), N(et, t))) return H;
							if (
								((e = (function (t) {
									var e,
										r,
										n,
										o,
										i,
										a,
										u,
										c = M(t, '.');
									if ((c.length && '' === c[c.length - 1] && c.length--, (e = c.length) > 4))
										return t;
									for (r = [], n = 0; n < e; n++) {
										if ('' === (o = c[n])) return t;
										if (
											((i = 10),
											o.length > 1 &&
												'0' === $(o, 0) &&
												((i = N(K, o) ? 16 : 8), (o = D(o, 8 === i ? 1 : 2))),
											'' === o)
										)
											a = 0;
										else {
											if (!N(10 === i ? Z : 8 === i ? X : tt, o)) return t;
											a = I(o, i);
										}
										B(r, a);
									}
									for (n = 0; n < e; n++)
										if (((a = r[n]), n === e - 1)) {
											if (a >= R(256, 5 - e)) return null;
										} else if (a > 255) return null;
									for (u = W(r), n = 0; n < r.length; n++) u += r[n] * R(256, 3 - n);
									return u;
								})(t)),
								null === e)
							)
								return H;
							this.host = e;
						} else {
							if (N(rt, t)) return H;
							for (e = '', r = d(t), n = 0; n < r.length; n++) e += lt(r[n], ut);
							this.host = e;
						}
					},
					cannotHaveUsernamePasswordPort: function () {
						return !this.host || this.cannotBeABaseURL || 'file' === this.scheme;
					},
					includesCredentials: function () {
						return '' !== this.username || '' !== this.password;
					},
					isSpecial: function () {
						return h(pt, this.scheme);
					},
					shortenPath: function () {
						var t = this.path,
							e = t.length;
						!e || ('file' === this.scheme && 1 === e && ht(t[0], !0)) || t.length--;
					},
					serialize: function () {
						var t = this,
							e = t.scheme,
							r = t.username,
							n = t.password,
							o = t.host,
							i = t.port,
							a = t.path,
							u = t.query,
							c = t.fragment,
							s = e + ':';
						return (
							null !== o
								? ((s += '//'),
									t.includesCredentials() && (s += r + (n ? ':' + n : '') + '@'),
									(s += at(o)),
									null !== i && (s += ':' + i))
								: 'file' === e && (s += '//'),
							(s += t.cannotBeABaseURL ? a[0] : a.length ? '/' + C(a, '/') : ''),
							null !== u && (s += '?' + u),
							null !== c && (s += '#' + c),
							s
						);
					},
					setHref: function (t) {
						var e = this.parse(t);
						if (e) throw new _(e);
						this.searchParams.update();
					},
					getOrigin: function () {
						var t = this.scheme,
							e = this.port;
						if ('blob' === t)
							try {
								return new Bt(t.path[0]).origin;
							} catch (t) {
								return 'null';
							}
						return 'file' !== t && this.isSpecial()
							? t + '://' + at(this.host) + (null !== e ? ':' + e : '')
							: 'null';
					},
					getProtocol: function () {
						return this.scheme + ':';
					},
					setProtocol: function (t) {
						this.parse(b(t) + ':', yt);
					},
					getUsername: function () {
						return this.username;
					},
					setUsername: function (t) {
						var e = d(b(t));
						if (!this.cannotHaveUsernamePasswordPort()) {
							this.username = '';
							for (var r = 0; r < e.length; r++) this.username += lt(e[r], ft);
						}
					},
					getPassword: function () {
						return this.password;
					},
					setPassword: function (t) {
						var e = d(b(t));
						if (!this.cannotHaveUsernamePasswordPort()) {
							this.password = '';
							for (var r = 0; r < e.length; r++) this.password += lt(e[r], ft);
						}
					},
					getHost: function () {
						var t = this.host,
							e = this.port;
						return null === t ? '' : null === e ? at(t) : at(t) + ':' + e;
					},
					setHost: function (t) {
						this.cannotBeABaseURL || this.parse(t, Pt);
					},
					getHostname: function () {
						var t = this.host;
						return null === t ? '' : at(t);
					},
					setHostname: function (t) {
						this.cannotBeABaseURL || this.parse(t, jt);
					},
					getPort: function () {
						var t = this.port;
						return null === t ? '' : b(t);
					},
					setPort: function (t) {
						this.cannotHaveUsernamePasswordPort() ||
							('' === (t = b(t)) ? (this.port = null) : this.parse(t, Lt));
					},
					getPathname: function () {
						var t = this.path;
						return this.cannotBeABaseURL ? t[0] : t.length ? '/' + C(t, '/') : '';
					},
					setPathname: function (t) {
						this.cannotBeABaseURL || ((this.path = []), this.parse(t, Rt));
					},
					getSearch: function () {
						var t = this.query;
						return t ? '?' + t : '';
					},
					setSearch: function (t) {
						'' === (t = b(t))
							? (this.query = null)
							: ('?' === $(t, 0) && (t = D(t, 1)), (this.query = ''), this.parse(t, Ct)),
							this.searchParams.update();
					},
					getSearchParams: function () {
						return this.searchParams.facade;
					},
					getHash: function () {
						var t = this.fragment;
						return t ? '#' + t : '';
					},
					setHash: function (t) {
						'' !== (t = b(t))
							? ('#' === $(t, 0) && (t = D(t, 1)), (this.fragment = ''), this.parse(t, At))
							: (this.fragment = null);
					},
					update: function () {
						this.query = this.searchParams.serialize() || null;
					},
				};
				var Bt = function (t) {
						var e = p(this, Ft),
							r = x(arguments.length, 1) > 1 ? arguments[1] : void 0,
							n = E(e, new Wt(t, !1, r));
						i ||
							((e.href = n.serialize()),
							(e.origin = n.getOrigin()),
							(e.protocol = n.getProtocol()),
							(e.username = n.getUsername()),
							(e.password = n.getPassword()),
							(e.host = n.getHost()),
							(e.hostname = n.getHostname()),
							(e.port = n.getPort()),
							(e.pathname = n.getPathname()),
							(e.search = n.getSearch()),
							(e.searchParams = n.getSearchParams()),
							(e.hash = n.getHash()));
					},
					Ft = Bt.prototype,
					Ut = function (t, e) {
						return {
							get: function () {
								return O(this)[t]();
							},
							set:
								e &&
								function (t) {
									return O(this)[e](t);
								},
							configurable: !0,
							enumerable: !0,
						};
					};
				if (
					(i &&
						(l(Ft, 'href', Ut('serialize', 'setHref')),
						l(Ft, 'origin', Ut('getOrigin')),
						l(Ft, 'protocol', Ut('getProtocol', 'setProtocol')),
						l(Ft, 'username', Ut('getUsername', 'setUsername')),
						l(Ft, 'password', Ut('getPassword', 'setPassword')),
						l(Ft, 'host', Ut('getHost', 'setHost')),
						l(Ft, 'hostname', Ut('getHostname', 'setHostname')),
						l(Ft, 'port', Ut('getPort', 'setPort')),
						l(Ft, 'pathname', Ut('getPathname', 'setPathname')),
						l(Ft, 'search', Ut('getSearch', 'setSearch')),
						l(Ft, 'searchParams', Ut('getSearchParams')),
						l(Ft, 'hash', Ut('getHash', 'setHash'))),
					f(
						Ft,
						'toJSON',
						function () {
							return O(this).serialize();
						},
						{enumerable: !0}
					),
					f(
						Ft,
						'toString',
						function () {
							return O(this).serialize();
						},
						{enumerable: !0}
					),
					L)
				) {
					var Mt = L.createObjectURL,
						Dt = L.revokeObjectURL;
					Mt && f(Bt, 'createObjectURL', c(Mt, L)), Dt && f(Bt, 'revokeObjectURL', c(Dt, L));
				}
				w(Bt, 'URL'),
					o(
						{
							global: !0,
							constructor: !0,
							forced: !a,
							sham: !i,
						},
						{URL: Bt}
					);
			},
			8730: function (t, e, r) {
				r(9391);
			},
		},
		e = {};
	function r(n) {
		var o = e[n];
		if (void 0 !== o) return o.exports;
		var i = (e[n] = {
			exports: {},
		});
		return t[n].call(i.exports, i, i.exports, r), i.exports;
	}
	(r.g = (function () {
		if ('object' == typeof globalThis) return globalThis;
		try {
			return this || new Function('return this')();
		} catch (t) {
			if ('object' == typeof window) return window;
		}
	})()),
		(function () {
			r(6801),
				r(3843),
				r(4338),
				r(6203),
				r(4043),
				r(7267),
				r(9358),
				r(691),
				r(228),
				r(3964),
				r(9749),
				r(6544),
				r(4254),
				r(752),
				r(1694),
				r(6265),
				r(8373),
				r(6793),
				r(7629),
				r(7509),
				r(8052),
				r(1057),
				r(560),
				r(9667),
				r(7602),
				r(5),
				r(7522),
				r(4284),
				r(9730),
				r(9373),
				r(9903),
				r(9288),
				r(8077),
				r(6237),
				r(3476),
				r(1919),
				r(9474),
				r(8730),
				r(9307),
				r(8858),
				r(1318),
				r(3228),
				r(6585),
				r(2826),
				r(7049),
				r(7409);
			function t(e) {
				return (
					(t =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (t) {
									return typeof t;
								}
							: function (t) {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
								}),
					t(e)
				);
			}
			function e(t, e) {
				for (var r = 0; r < e.length; r++) {
					var o = e[r];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						'value' in o && (o.writable = !0),
						Object.defineProperty(t, n(o.key), o);
				}
			}
			function n(e) {
				var r = (function (e, r) {
					if ('object' !== t(e) || null === e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var o = n.call(e, r || 'default');
						if ('object' !== t(o)) return o;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === r ? String : Number)(e);
				})(e, 'string');
				return 'symbol' === t(r) ? r : String(r);
			}
			var o = (function () {
					function t() {
						var e, r, o;
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t),
							(e = this),
							(o = '4.0.12'),
							(r = n((r = 'version'))) in e
								? Object.defineProperty(e, r, {
										value: o,
										enumerable: !0,
										configurable: !0,
										writable: !0,
									})
								: (e[r] = o);
					}
					var r, o, i;
					return (
						(r = t),
						(o = [
							{
								key: 'isArticle',
								get: function () {
									return window.mw.config.get('wgIsArticle');
								},
							},
							{
								key: 'currentPageName',
								get: function () {
									return window.mw.config.get('wgPageName').replace(/ /g, '_');
								},
							},
							{
								key: 'articleId',
								get: function () {
									return window.mw.config.get('wgArticleId');
								},
							},
							{
								key: 'revisionId',
								get: function () {
									return window.mw.config.get('wgRevisionId');
								},
							},
							{
								key: 'latestRevisionId',
								get: function () {
									return window.mw.config.get('wgCurRevisionId');
								},
							},
							{
								key: 'articlePath',
								get: function () {
									return window.mw.config.get('wgArticlePath');
								},
							},
							{
								key: 'scriptPath',
								get: function () {
									return window.mw.config.get('wgScriptPath');
								},
							},
							{
								key: 'action',
								get: function () {
									return window.mw.config.get('wgAction');
								},
							},
							{
								key: 'skin',
								get: function () {
									return window.mw.config.get('skin');
								},
							},
							{
								key: 'userGroups',
								get: function () {
									return window.mw.config.get('wgUserGroups');
								},
							},
							{
								key: 'wikiId',
								get: function () {
									return window.mw.config.get('wgWikiID');
								},
							},
						]) && e(r.prototype, o),
						i && e(r, i),
						Object.defineProperty(r, 'prototype', {writable: !1}),
						t
					);
				})(),
				i = new o();
			function a(t) {
				return (
					(a =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (t) {
									return typeof t;
								}
							: function (t) {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
								}),
					a(t)
				);
			}
			function u(t, e) {
				return (
					(function (t) {
						if (Array.isArray(t)) return t;
					})(t) ||
					(function (t, e) {
						var r =
							null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
						if (null != r) {
							var n,
								o,
								i,
								a,
								u = [],
								c = !0,
								s = !1;
							try {
								if (((i = (r = r.call(t)).next), 0 === e)) {
									if (Object(r) !== r) return;
									c = !1;
								} else for (; !(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); c = !0);
							} catch (t) {
								(s = !0), (o = t);
							} finally {
								try {
									if (!c && null != r.return && ((a = r.return()), Object(a) !== a)) return;
								} finally {
									if (s) throw o;
								}
							}
							return u;
						}
					})(t, e) ||
					(function (t, e) {
						if (!t) return;
						if ('string' == typeof t) return c(t, e);
						var r = Object.prototype.toString.call(t).slice(8, -1);
						'Object' === r && t.constructor && (r = t.constructor.name);
						if ('Map' === r || 'Set' === r) return Array.from(t);
						if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(t, e);
					})(t, e) ||
					(function () {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						);
					})()
				);
			}
			function c(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
				return n;
			}
			function s() {
				/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ s =
					function () {
						return e;
					};
				var t,
					e = {},
					r = Object.prototype,
					n = r.hasOwnProperty,
					o =
						Object.defineProperty ||
						function (t, e, r) {
							t[e] = r.value;
						},
					i = 'function' == typeof Symbol ? Symbol : {},
					u = i.iterator || '@@iterator',
					c = i.asyncIterator || '@@asyncIterator',
					f = i.toStringTag || '@@toStringTag';
				function l(t, e, r) {
					return (
						Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					l({}, '');
				} catch (t) {
					l = function (t, e, r) {
						return (t[e] = r);
					};
				}
				function p(t, e, r, n) {
					var i = e && e.prototype instanceof b ? e : b,
						a = Object.create(i.prototype),
						u = new R(n || []);
					return o(a, '_invoke', {value: L(t, r, u)}), a;
				}
				function h(t, e, r) {
					try {
						return {
							type: 'normal',
							arg: t.call(e, r),
						};
					} catch (t) {
						return {
							type: 'throw',
							arg: t,
						};
					}
				}
				e.wrap = p;
				var v = 'suspendedStart',
					d = 'suspendedYield',
					y = 'executing',
					g = 'completed',
					m = {};
				function b() {}
				function w() {}
				function x() {}
				var k = {};
				l(k, u, function () {
					return this;
				});
				var S = Object.getPrototypeOf,
					E = S && S(S($([])));
				E && E !== r && n.call(E, u) && (k = E);
				var O = (x.prototype = b.prototype = Object.create(k));
				function P(t) {
					['next', 'throw', 'return'].forEach(function (e) {
						l(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function j(t, e) {
					function r(o, i, u, c) {
						var s = h(t[o], t, i);
						if ('throw' !== s.type) {
							var f = s.arg,
								l = f.value;
							return l && 'object' == a(l) && n.call(l, '__await')
								? e.resolve(l.__await).then(
										function (t) {
											r('next', t, u, c);
										},
										function (t) {
											r('throw', t, u, c);
										}
									)
								: e.resolve(l).then(
										function (t) {
											(f.value = t), u(f);
										},
										function (t) {
											return r('throw', t, u, c);
										}
									);
						}
						c(s.arg);
					}
					var i;
					o(this, '_invoke', {
						value: function (t, n) {
							function o() {
								return new e(function (e, o) {
									r(t, n, e, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function L(e, r, n) {
					var o = v;
					return function (i, a) {
						if (o === y) throw new Error('Generator is already running');
						if (o === g) {
							if ('throw' === i) throw a;
							return {
								value: t,
								done: !0,
							};
						}
						for (n.method = i, n.arg = a; ; ) {
							var u = n.delegate;
							if (u) {
								var c = _(u, n);
								if (c) {
									if (c === m) continue;
									return c;
								}
							}
							if ('next' === n.method) n.sent = n._sent = n.arg;
							else if ('throw' === n.method) {
								if (o === v) throw ((o = g), n.arg);
								n.dispatchException(n.arg);
							} else 'return' === n.method && n.abrupt('return', n.arg);
							o = y;
							var s = h(e, r, n);
							if ('normal' === s.type) {
								if (((o = n.done ? g : d), s.arg === m)) continue;
								return {
									value: s.arg,
									done: n.done,
								};
							}
							'throw' === s.type && ((o = g), (n.method = 'throw'), (n.arg = s.arg));
						}
					};
				}
				function _(e, r) {
					var n = r.method,
						o = e.iterator[n];
					if (o === t)
						return (
							(r.delegate = null),
							('throw' === n &&
								e.iterator.return &&
								((r.method = 'return'), (r.arg = t), _(e, r), 'throw' === r.method)) ||
								('return' !== n &&
									((r.method = 'throw'),
									(r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
							m
						);
					var i = h(o, e.iterator, r.arg);
					if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), m;
					var a = i.arg;
					return a
						? a.done
							? ((r[e.resultName] = a.value),
								(r.next = e.nextLoc),
								'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
								(r.delegate = null),
								m)
							: a
						: ((r.method = 'throw'),
							(r.arg = new TypeError('iterator result is not an object')),
							(r.delegate = null),
							m);
				}
				function I(t) {
					var e = {
						tryLoc: t[0],
					};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function T(t) {
					var e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function R(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(I, this), this.reset(!0);
				}
				function $(e) {
					if (e || '' === e) {
						var r = e[u];
						if (r) return r.call(e);
						if ('function' == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var o = -1,
								i = function r() {
									for (; ++o < e.length; )
										if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
									return (r.value = t), (r.done = !0), r;
								};
							return (i.next = i);
						}
					}
					throw new TypeError(a(e) + ' is not iterable');
				}
				return (
					(w.prototype = x),
					o(O, 'constructor', {value: x, configurable: !0}),
					o(x, 'constructor', {value: w, configurable: !0}),
					(w.displayName = l(x, f, 'GeneratorFunction')),
					(e.isGeneratorFunction = function (t) {
						var e = 'function' == typeof t && t.constructor;
						return !!e && (e === w || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(e.mark = function (t) {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, x)
								: ((t.__proto__ = x), l(t, f, 'GeneratorFunction')),
							(t.prototype = Object.create(O)),
							t
						);
					}),
					(e.awrap = function (t) {
						return {
							__await: t,
						};
					}),
					P(j.prototype),
					l(j.prototype, c, function () {
						return this;
					}),
					(e.AsyncIterator = j),
					(e.async = function (t, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new j(p(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(function (t) {
									return t.done ? t.value : a.next();
								});
					}),
					P(O),
					l(O, f, 'Generator'),
					l(O, u, function () {
						return this;
					}),
					l(O, 'toString', function () {
						return '[object Generator]';
					}),
					(e.keys = function (t) {
						var e = Object(t),
							r = [];
						for (var n in e) r.push(n);
						return (
							r.reverse(),
							function t() {
								for (; r.length; ) {
									var n = r.pop();
									if (n in e) return (t.value = n), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = $),
					(R.prototype = {
						constructor: R,
						reset: function (e) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = t),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = t),
								this.tryEntries.forEach(T),
								!e)
							)
								for (var r in this)
									't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
						},
						stop: function () {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException: function (e) {
							if (this.done) throw e;
							var r = this;
							function o(n, o) {
								return (
									(u.type = 'throw'),
									(u.arg = e),
									(r.next = n),
									o && ((r.method = 'next'), (r.arg = t)),
									!!o
								);
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									u = a.completion;
								if ('root' === a.tryLoc) return o('end');
								if (a.tryLoc <= this.prev) {
									var c = n.call(a, 'catchLoc'),
										s = n.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt: function (t, e) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var i = o;
									break;
								}
							}
							i &&
								('break' === t || 'continue' === t) &&
								i.tryLoc <= e &&
								e <= i.finallyLoc &&
								(i = null);
							var a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								i ? ((this.method = 'next'), (this.next = i.finallyLoc), m) : this.complete(a)
							);
						},
						complete: function (t, e) {
							if ('throw' === t.type) throw t.arg;
							return (
								'break' === t.type || 'continue' === t.type
									? (this.next = t.arg)
									: 'return' === t.type
										? ((this.rval = this.arg = t.arg),
											(this.method = 'return'),
											(this.next = 'end'))
										: 'normal' === t.type && e && (this.next = e),
								m
							);
						},
						finish: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), T(r), m;
							}
						},
						catch: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ('throw' === n.type) {
										var o = n.arg;
										T(r);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield: function (e, r, n) {
							return (
								(this.delegate = {
									iterator: $(e),
									resultName: r,
									nextLoc: n,
								}),
								'next' === this.method && (this.arg = t),
								m
							);
						},
					}),
					e
				);
			}
			function f(t, e, r, n, o, i, a) {
				try {
					var u = t[i](a),
						c = u.value;
				} catch (t) {
					return void r(t);
				}
				u.done ? e(c) : Promise.resolve(c).then(n, o);
			}
			function l(t) {
				return function () {
					var e = this,
						r = arguments;
					return new Promise(function (n, o) {
						var i = t.apply(e, r);
						function a(t) {
							f(i, n, o, a, u, 'next', t);
						}
						function u(t) {
							f(i, n, o, a, u, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			function p(t, e) {
				for (var r = 0; r < e.length; r++) {
					var n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, h(n.key), n);
				}
			}
			function h(t) {
				var e = (function (t, e) {
					if ('object' !== a(t) || null === t) return t;
					var r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						var n = r.call(t, e || 'default');
						if ('object' !== a(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === a(e) ? e : String(e);
			}
			var v,
				d,
				y,
				g = (function () {
					function t() {
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t);
					}
					var e, r, n, o, a;
					return (
						(e = t),
						(r = null),
						(n = [
							{
								key: 'get',
								value:
									((a = l(
										s().mark(function e(r) {
											var n, o;
											return s().wrap(function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(n = new URL(t.base)),
																Object.keys(r).forEach(function (t) {
																	n.searchParams.append(t, r[t]);
																}),
																(e.next = 4),
																fetch(n, {
																	credentials: 'same-origin',
																	headers: {
																		'Api-User-Agent': 'Wikiplus/'
																			.concat(i.version, ' (')
																			.concat(i.wikiId, ')'),
																	},
																})
															);
														case 4:
															return (o = e.sent), (e.next = 7), o.json();
														case 7:
															return e.abrupt('return', e.sent);
														case 8:
														case 'end':
															return e.stop();
													}
											}, e);
										})
									)),
									function (t) {
										return a.apply(this, arguments);
									}),
							},
							{
								key: 'post',
								value:
									((o = l(
										s().mark(function e(r) {
											var n, o, a;
											return s().wrap(function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(n = new URL(t.base)),
																(o = new FormData()),
																Object.entries(r).forEach(function (t) {
																	var e = u(t, 2),
																		r = e[0],
																		n = e[1];
																	o.append(r, n);
																}),
																(e.next = 5),
																fetch(n, {
																	method: 'POST',
																	body: o,
																	credentials: 'same-origin',
																	headers: {
																		'Api-User-Agent': 'Wikiplus/'
																			.concat(i.version, ' (')
																			.concat(i.wikiId, ')'),
																	},
																})
															);
														case 5:
															return (a = e.sent), (e.next = 8), a.json();
														case 8:
															return e.abrupt('return', e.sent);
														case 9:
														case 'end':
															return e.stop();
													}
											}, e);
										})
									)),
									function (t) {
										return o.apply(this, arguments);
									}),
							},
						]),
						r && p(e.prototype, r),
						n && p(e, n),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})();
			(v = g),
				(d = 'base'),
				(y = ''.concat(location.protocol, '//').concat(location.host).concat(i.scriptPath, '/api.php')),
				(d = h(d)) in v
					? Object.defineProperty(v, d, {value: y, enumerable: !0, configurable: !0, writable: !0})
					: (v[d] = y);
			var m = g;
			r(2003),
				r(8518),
				r(3440),
				r(6034),
				r(50),
				r(6646),
				r(7444),
				r(7968),
				r(747),
				r(1099),
				r(6320),
				r(876),
				r(6791),
				r(19),
				r(2343),
				r(1096),
				r(4314),
				r(3346),
				r(4984),
				r(4078),
				r(8324);
			function b(t) {
				return (
					(b =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (t) {
									return typeof t;
								}
							: function (t) {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
								}),
					b(t)
				);
			}
			function w() {
				/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ w =
					function () {
						return e;
					};
				var t,
					e = {},
					r = Object.prototype,
					n = r.hasOwnProperty,
					o =
						Object.defineProperty ||
						function (t, e, r) {
							t[e] = r.value;
						},
					i = 'function' == typeof Symbol ? Symbol : {},
					a = i.iterator || '@@iterator',
					u = i.asyncIterator || '@@asyncIterator',
					c = i.toStringTag || '@@toStringTag';
				function s(t, e, r) {
					return (
						Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					s({}, '');
				} catch (t) {
					s = function (t, e, r) {
						return (t[e] = r);
					};
				}
				function f(t, e, r, n) {
					var i = e && e.prototype instanceof g ? e : g,
						a = Object.create(i.prototype),
						u = new R(n || []);
					return o(a, '_invoke', {value: L(t, r, u)}), a;
				}
				function l(t, e, r) {
					try {
						return {
							type: 'normal',
							arg: t.call(e, r),
						};
					} catch (t) {
						return {
							type: 'throw',
							arg: t,
						};
					}
				}
				e.wrap = f;
				var p = 'suspendedStart',
					h = 'suspendedYield',
					v = 'executing',
					d = 'completed',
					y = {};
				function g() {}
				function m() {}
				function x() {}
				var k = {};
				s(k, a, function () {
					return this;
				});
				var S = Object.getPrototypeOf,
					E = S && S(S($([])));
				E && E !== r && n.call(E, a) && (k = E);
				var O = (x.prototype = g.prototype = Object.create(k));
				function P(t) {
					['next', 'throw', 'return'].forEach(function (e) {
						s(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function j(t, e) {
					function r(o, i, a, u) {
						var c = l(t[o], t, i);
						if ('throw' !== c.type) {
							var s = c.arg,
								f = s.value;
							return f && 'object' == b(f) && n.call(f, '__await')
								? e.resolve(f.__await).then(
										function (t) {
											r('next', t, a, u);
										},
										function (t) {
											r('throw', t, a, u);
										}
									)
								: e.resolve(f).then(
										function (t) {
											(s.value = t), a(s);
										},
										function (t) {
											return r('throw', t, a, u);
										}
									);
						}
						u(c.arg);
					}
					var i;
					o(this, '_invoke', {
						value: function (t, n) {
							function o() {
								return new e(function (e, o) {
									r(t, n, e, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function L(e, r, n) {
					var o = p;
					return function (i, a) {
						if (o === v) throw new Error('Generator is already running');
						if (o === d) {
							if ('throw' === i) throw a;
							return {
								value: t,
								done: !0,
							};
						}
						for (n.method = i, n.arg = a; ; ) {
							var u = n.delegate;
							if (u) {
								var c = _(u, n);
								if (c) {
									if (c === y) continue;
									return c;
								}
							}
							if ('next' === n.method) n.sent = n._sent = n.arg;
							else if ('throw' === n.method) {
								if (o === p) throw ((o = d), n.arg);
								n.dispatchException(n.arg);
							} else 'return' === n.method && n.abrupt('return', n.arg);
							o = v;
							var s = l(e, r, n);
							if ('normal' === s.type) {
								if (((o = n.done ? d : h), s.arg === y)) continue;
								return {
									value: s.arg,
									done: n.done,
								};
							}
							'throw' === s.type && ((o = d), (n.method = 'throw'), (n.arg = s.arg));
						}
					};
				}
				function _(e, r) {
					var n = r.method,
						o = e.iterator[n];
					if (o === t)
						return (
							(r.delegate = null),
							('throw' === n &&
								e.iterator.return &&
								((r.method = 'return'), (r.arg = t), _(e, r), 'throw' === r.method)) ||
								('return' !== n &&
									((r.method = 'throw'),
									(r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
							y
						);
					var i = l(o, e.iterator, r.arg);
					if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
					var a = i.arg;
					return a
						? a.done
							? ((r[e.resultName] = a.value),
								(r.next = e.nextLoc),
								'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
								(r.delegate = null),
								y)
							: a
						: ((r.method = 'throw'),
							(r.arg = new TypeError('iterator result is not an object')),
							(r.delegate = null),
							y);
				}
				function I(t) {
					var e = {
						tryLoc: t[0],
					};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function T(t) {
					var e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function R(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(I, this), this.reset(!0);
				}
				function $(e) {
					if (e || '' === e) {
						var r = e[a];
						if (r) return r.call(e);
						if ('function' == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var o = -1,
								i = function r() {
									for (; ++o < e.length; )
										if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
									return (r.value = t), (r.done = !0), r;
								};
							return (i.next = i);
						}
					}
					throw new TypeError(b(e) + ' is not iterable');
				}
				return (
					(m.prototype = x),
					o(O, 'constructor', {value: x, configurable: !0}),
					o(x, 'constructor', {value: m, configurable: !0}),
					(m.displayName = s(x, c, 'GeneratorFunction')),
					(e.isGeneratorFunction = function (t) {
						var e = 'function' == typeof t && t.constructor;
						return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(e.mark = function (t) {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, x)
								: ((t.__proto__ = x), s(t, c, 'GeneratorFunction')),
							(t.prototype = Object.create(O)),
							t
						);
					}),
					(e.awrap = function (t) {
						return {
							__await: t,
						};
					}),
					P(j.prototype),
					s(j.prototype, u, function () {
						return this;
					}),
					(e.AsyncIterator = j),
					(e.async = function (t, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new j(f(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(function (t) {
									return t.done ? t.value : a.next();
								});
					}),
					P(O),
					s(O, c, 'Generator'),
					s(O, a, function () {
						return this;
					}),
					s(O, 'toString', function () {
						return '[object Generator]';
					}),
					(e.keys = function (t) {
						var e = Object(t),
							r = [];
						for (var n in e) r.push(n);
						return (
							r.reverse(),
							function t() {
								for (; r.length; ) {
									var n = r.pop();
									if (n in e) return (t.value = n), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = $),
					(R.prototype = {
						constructor: R,
						reset: function (e) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = t),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = t),
								this.tryEntries.forEach(T),
								!e)
							)
								for (var r in this)
									't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
						},
						stop: function () {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException: function (e) {
							if (this.done) throw e;
							var r = this;
							function o(n, o) {
								return (
									(u.type = 'throw'),
									(u.arg = e),
									(r.next = n),
									o && ((r.method = 'next'), (r.arg = t)),
									!!o
								);
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									u = a.completion;
								if ('root' === a.tryLoc) return o('end');
								if (a.tryLoc <= this.prev) {
									var c = n.call(a, 'catchLoc'),
										s = n.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt: function (t, e) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var i = o;
									break;
								}
							}
							i &&
								('break' === t || 'continue' === t) &&
								i.tryLoc <= e &&
								e <= i.finallyLoc &&
								(i = null);
							var a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
							);
						},
						complete: function (t, e) {
							if ('throw' === t.type) throw t.arg;
							return (
								'break' === t.type || 'continue' === t.type
									? (this.next = t.arg)
									: 'return' === t.type
										? ((this.rval = this.arg = t.arg),
											(this.method = 'return'),
											(this.next = 'end'))
										: 'normal' === t.type && e && (this.next = e),
								y
							);
						},
						finish: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), T(r), y;
							}
						},
						catch: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ('throw' === n.type) {
										var o = n.arg;
										T(r);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield: function (e, r, n) {
							return (
								(this.delegate = {
									iterator: $(e),
									resultName: r,
									nextLoc: n,
								}),
								'next' === this.method && (this.arg = t),
								y
							);
						},
					}),
					e
				);
			}
			function x(t, e, r, n, o, i, a) {
				try {
					var u = t[i](a),
						c = u.value;
				} catch (t) {
					return void r(t);
				}
				u.done ? e(c) : Promise.resolve(c).then(n, o);
			}
			function k(t, e) {
				for (var r = 0; r < e.length; r++) {
					var n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, E(n.key), n);
				}
			}
			function S(t, e, r) {
				return (
					(e = E(e)) in t
						? Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = r),
					t
				);
			}
			function E(t) {
				var e = (function (t, e) {
					if ('object' !== b(t) || null === t) return t;
					var r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						var n = r.call(t, e || 'default');
						if ('object' !== b(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === b(e) ? e : String(e);
			}
			var O = (function () {
					function t() {
						var e;
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t),
							S(this, 'language', void 0),
							S(this, 'i18nData', {}),
							S(this, 'sessionUpdateLog', []);
						try {
							e = JSON.parse(localStorage.Wikiplus_Settings).language || navigator.language.toLowerCase();
						} catch (t) {
							e = (navigator.language || navigator.browserLanguage)
								.replace(/han[st]-?/i, '')
								.toLowerCase();
						}
						this.language = e;
						try {
							for (
								var r = JSON.parse(localStorage.getItem('Wikiplus_i18nCache')),
									n = 0,
									o = Object.keys(r);
								n < o.length;
								n++
							) {
								var i = o[n];
								this.i18nData[i] = r[i];
							}
						} catch (t) {
							localStorage.setItem('Wikiplus_i18nCache', '{}');
						}
					}
					var e, r, n, o, i;
					return (
						(e = t),
						(r = [
							{
								key: 'translate',
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
										r = '';
									return (
										this.language in this.i18nData
											? t in this.i18nData[this.language]
												? (r = this.i18nData[this.language][t])
												: (this.loadLanguage(this.language),
													(r = t in this.i18nData['en-us'] ? this.i18nData['en-us'][t] : t))
											: this.loadLanguage(this.language),
										e.length > 0 &&
											e.forEach(function (t, e) {
												r = r.replace('$'.concat(e + 1), t);
											}),
										r
									);
								},
							},
							{
								key: 'loadLanguage',
								value:
									((o = w().mark(function t(e) {
										var r, n;
										return w().wrap(
											function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															if (!this.sessionUpdateLog.includes(e)) {
																t.next = 2;
																break;
															}
															return t.abrupt('return');
														case 2:
															return (
																(t.prev = 2),
																(t.next = 5),
																fetch(
																	'https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/'.concat(
																		e,
																		'.json'
																	)
																)
															);
														case 5:
															return (t.next = 7), t.sent.json();
														case 7:
															(r = t.sent),
																(n =
																	localStorage.getItem('Wikiplus_LanguageVersion') ||
																	'000'),
																this.sessionUpdateLog.push(e),
																(r.__version === n && e in this.i18nData) ||
																	(console.info(
																		'Update '
																			.concat(e, ' support to version ')
																			.concat(r.__version)
																	),
																	(this.i18nData[e] = r),
																	localStorage.setItem(
																		'Wikiplus_i18nCache',
																		JSON.stringify(this.i18nData)
																	)),
																(t.next = 15);
															break;
														case 13:
															(t.prev = 13), (t.t0 = t.catch(2));
														case 15:
														case 'end':
															return t.stop();
													}
											},
											t,
											this,
											[[2, 13]]
										);
									})),
									(i = function () {
										var t = this,
											e = arguments;
										return new Promise(function (r, n) {
											var i = o.apply(t, e);
											function a(t) {
												x(i, r, n, a, u, 'next', t);
											}
											function u(t) {
												x(i, r, n, a, u, 'throw', t);
											}
											a(void 0);
										});
									}),
									function (t) {
										return i.apply(this, arguments);
									}),
							},
						]),
						r && k(e.prototype, r),
						n && k(e, n),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})(),
				P = new O();
			function j(t) {
				return (
					(j =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (t) {
									return typeof t;
								}
							: function (t) {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
								}),
					j(t)
				);
			}
			function L(t, e) {
				for (var r = 0; r < e.length; r++) {
					var n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, I(n.key), n);
				}
			}
			function _(t, e, r) {
				return e && L(t.prototype, e), r && L(t, r), Object.defineProperty(t, 'prototype', {writable: !1}), t;
			}
			function I(t) {
				var e = (function (t, e) {
					if ('object' !== j(t) || null === t) return t;
					var r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						var n = r.call(t, e || 'default');
						if ('object' !== j(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === j(e) ? e : String(e);
			}
			function T(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			}
			function R(t) {
				var e = A();
				return function () {
					var r,
						n = B(t);
					if (e) {
						var o = B(this).constructor;
						r = Reflect.construct(n, arguments, o);
					} else r = n.apply(this, arguments);
					return (function (t, e) {
						if (e && ('object' === j(e) || 'function' == typeof e)) return e;
						if (void 0 !== e)
							throw new TypeError('Derived constructors may only return object or undefined');
						return (function (t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
						})(t);
					})(this, r);
				};
			}
			function N(t) {
				var e = 'function' == typeof Map ? new Map() : void 0;
				return (
					(N = function (t) {
						if (
							null === t ||
							!(function (t) {
								try {
									return -1 !== Function.toString.call(t).indexOf('[native code]');
								} catch (e) {
									return 'function' == typeof t;
								}
							})(t)
						)
							return t;
						if ('function' != typeof t)
							throw new TypeError('Super expression must either be null or a function');
						if (void 0 !== e) {
							if (e.has(t)) return e.get(t);
							e.set(t, r);
						}
						function r() {
							return C(t, arguments, B(this).constructor);
						}
						return (
							(r.prototype = Object.create(t.prototype, {
								constructor: {value: r, enumerable: !1, writable: !0, configurable: !0},
							})),
							W(r, t)
						);
					}),
					N(t)
				);
			}
			function C(t, e, r) {
				return (
					(C = A()
						? Reflect.construct.bind()
						: function (t, e, r) {
								var n = [null];
								n.push.apply(n, e);
								var o = new (Function.bind.apply(t, n))();
								return r && W(o, r.prototype), o;
							}),
					C.apply(null, arguments)
				);
			}
			function A() {
				if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ('function' == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
				} catch (t) {
					return !1;
				}
			}
			function W(t, e) {
				return (
					(W = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (t, e) {
								return (t.__proto__ = e), t;
							}),
					W(t, e)
				);
			}
			function B(t) {
				return (
					(B = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (t) {
								return t.__proto__ || Object.getPrototypeOf(t);
							}),
					B(t)
				);
			}
			var F = (function (t) {
					!(function (t, e) {
						if ('function' != typeof e && null !== e)
							throw new TypeError('Super expression must either be null or a function');
						(t.prototype = Object.create(e && e.prototype, {
							constructor: {value: t, writable: !0, configurable: !0},
						})),
							Object.defineProperty(t, 'prototype', {writable: !1}),
							e && W(t, e);
					})(r, t);
					var e = R(r);
					function r(t, n) {
						var o;
						return T(this, r), ((o = e.call(this, t)).code = n), o;
					}
					return _(r);
				})(N(Error)),
				U = (function () {
					function t() {
						T(this, t);
					}
					return (
						_(t, null, [
							{
								key: 'debug',
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
									console.debug('[Wikiplus-DEBUG] '.concat(t));
								},
							},
							{
								key: 'info',
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
									console.info('[Wikiplus-INFO] '.concat(t));
								},
							},
							{
								key: 'error',
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
										r = P.translate(t);
									throw (
										(e.length > 0 &&
											e.forEach(function (t, e) {
												r = r.replace(new RegExp('\\'.concat(e + 1), 'ig'), t);
											}),
										console.error('[Wikiplus-ERROR] '.concat(r)),
										new F(''.concat(r), t))
									);
								},
							},
						]),
						t
					);
				})(),
				M = U;
			function D(t) {
				return (
					(D =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (t) {
									return typeof t;
								}
							: function (t) {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
								}),
					D(t)
				);
			}
			function G(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e &&
						(n = n.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function q(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2
						? G(Object(r), !0).forEach(function (e) {
								V(t, e, r[e]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
							: G(Object(r)).forEach(function (e) {
									Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
								});
				}
				return t;
			}
			function Q() {
				/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Q =
					function () {
						return e;
					};
				var t,
					e = {},
					r = Object.prototype,
					n = r.hasOwnProperty,
					o =
						Object.defineProperty ||
						function (t, e, r) {
							t[e] = r.value;
						},
					i = 'function' == typeof Symbol ? Symbol : {},
					a = i.iterator || '@@iterator',
					u = i.asyncIterator || '@@asyncIterator',
					c = i.toStringTag || '@@toStringTag';
				function s(t, e, r) {
					return (
						Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					s({}, '');
				} catch (t) {
					s = function (t, e, r) {
						return (t[e] = r);
					};
				}
				function f(t, e, r, n) {
					var i = e && e.prototype instanceof g ? e : g,
						a = Object.create(i.prototype),
						u = new I(n || []);
					return o(a, '_invoke', {value: P(t, r, u)}), a;
				}
				function l(t, e, r) {
					try {
						return {
							type: 'normal',
							arg: t.call(e, r),
						};
					} catch (t) {
						return {
							type: 'throw',
							arg: t,
						};
					}
				}
				e.wrap = f;
				var p = 'suspendedStart',
					h = 'suspendedYield',
					v = 'executing',
					d = 'completed',
					y = {};
				function g() {}
				function m() {}
				function b() {}
				var w = {};
				s(w, a, function () {
					return this;
				});
				var x = Object.getPrototypeOf,
					k = x && x(x(T([])));
				k && k !== r && n.call(k, a) && (w = k);
				var S = (b.prototype = g.prototype = Object.create(w));
				function E(t) {
					['next', 'throw', 'return'].forEach(function (e) {
						s(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function O(t, e) {
					function r(o, i, a, u) {
						var c = l(t[o], t, i);
						if ('throw' !== c.type) {
							var s = c.arg,
								f = s.value;
							return f && 'object' == D(f) && n.call(f, '__await')
								? e.resolve(f.__await).then(
										function (t) {
											r('next', t, a, u);
										},
										function (t) {
											r('throw', t, a, u);
										}
									)
								: e.resolve(f).then(
										function (t) {
											(s.value = t), a(s);
										},
										function (t) {
											return r('throw', t, a, u);
										}
									);
						}
						u(c.arg);
					}
					var i;
					o(this, '_invoke', {
						value: function (t, n) {
							function o() {
								return new e(function (e, o) {
									r(t, n, e, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function P(e, r, n) {
					var o = p;
					return function (i, a) {
						if (o === v) throw new Error('Generator is already running');
						if (o === d) {
							if ('throw' === i) throw a;
							return {
								value: t,
								done: !0,
							};
						}
						for (n.method = i, n.arg = a; ; ) {
							var u = n.delegate;
							if (u) {
								var c = j(u, n);
								if (c) {
									if (c === y) continue;
									return c;
								}
							}
							if ('next' === n.method) n.sent = n._sent = n.arg;
							else if ('throw' === n.method) {
								if (o === p) throw ((o = d), n.arg);
								n.dispatchException(n.arg);
							} else 'return' === n.method && n.abrupt('return', n.arg);
							o = v;
							var s = l(e, r, n);
							if ('normal' === s.type) {
								if (((o = n.done ? d : h), s.arg === y)) continue;
								return {
									value: s.arg,
									done: n.done,
								};
							}
							'throw' === s.type && ((o = d), (n.method = 'throw'), (n.arg = s.arg));
						}
					};
				}
				function j(e, r) {
					var n = r.method,
						o = e.iterator[n];
					if (o === t)
						return (
							(r.delegate = null),
							('throw' === n &&
								e.iterator.return &&
								((r.method = 'return'), (r.arg = t), j(e, r), 'throw' === r.method)) ||
								('return' !== n &&
									((r.method = 'throw'),
									(r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
							y
						);
					var i = l(o, e.iterator, r.arg);
					if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
					var a = i.arg;
					return a
						? a.done
							? ((r[e.resultName] = a.value),
								(r.next = e.nextLoc),
								'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
								(r.delegate = null),
								y)
							: a
						: ((r.method = 'throw'),
							(r.arg = new TypeError('iterator result is not an object')),
							(r.delegate = null),
							y);
				}
				function L(t) {
					var e = {
						tryLoc: t[0],
					};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function _(t) {
					var e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function I(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(L, this), this.reset(!0);
				}
				function T(e) {
					if (e || '' === e) {
						var r = e[a];
						if (r) return r.call(e);
						if ('function' == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var o = -1,
								i = function r() {
									for (; ++o < e.length; )
										if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
									return (r.value = t), (r.done = !0), r;
								};
							return (i.next = i);
						}
					}
					throw new TypeError(D(e) + ' is not iterable');
				}
				return (
					(m.prototype = b),
					o(S, 'constructor', {value: b, configurable: !0}),
					o(b, 'constructor', {value: m, configurable: !0}),
					(m.displayName = s(b, c, 'GeneratorFunction')),
					(e.isGeneratorFunction = function (t) {
						var e = 'function' == typeof t && t.constructor;
						return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(e.mark = function (t) {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, b)
								: ((t.__proto__ = b), s(t, c, 'GeneratorFunction')),
							(t.prototype = Object.create(S)),
							t
						);
					}),
					(e.awrap = function (t) {
						return {
							__await: t,
						};
					}),
					E(O.prototype),
					s(O.prototype, u, function () {
						return this;
					}),
					(e.AsyncIterator = O),
					(e.async = function (t, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new O(f(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(function (t) {
									return t.done ? t.value : a.next();
								});
					}),
					E(S),
					s(S, c, 'Generator'),
					s(S, a, function () {
						return this;
					}),
					s(S, 'toString', function () {
						return '[object Generator]';
					}),
					(e.keys = function (t) {
						var e = Object(t),
							r = [];
						for (var n in e) r.push(n);
						return (
							r.reverse(),
							function t() {
								for (; r.length; ) {
									var n = r.pop();
									if (n in e) return (t.value = n), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = T),
					(I.prototype = {
						constructor: I,
						reset: function (e) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = t),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = t),
								this.tryEntries.forEach(_),
								!e)
							)
								for (var r in this)
									't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
						},
						stop: function () {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException: function (e) {
							if (this.done) throw e;
							var r = this;
							function o(n, o) {
								return (
									(u.type = 'throw'),
									(u.arg = e),
									(r.next = n),
									o && ((r.method = 'next'), (r.arg = t)),
									!!o
								);
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									u = a.completion;
								if ('root' === a.tryLoc) return o('end');
								if (a.tryLoc <= this.prev) {
									var c = n.call(a, 'catchLoc'),
										s = n.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt: function (t, e) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var i = o;
									break;
								}
							}
							i &&
								('break' === t || 'continue' === t) &&
								i.tryLoc <= e &&
								e <= i.finallyLoc &&
								(i = null);
							var a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
							);
						},
						complete: function (t, e) {
							if ('throw' === t.type) throw t.arg;
							return (
								'break' === t.type || 'continue' === t.type
									? (this.next = t.arg)
									: 'return' === t.type
										? ((this.rval = this.arg = t.arg),
											(this.method = 'return'),
											(this.next = 'end'))
										: 'normal' === t.type && e && (this.next = e),
								y
							);
						},
						finish: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), y;
							}
						},
						catch: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ('throw' === n.type) {
										var o = n.arg;
										_(r);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield: function (e, r, n) {
							return (
								(this.delegate = {
									iterator: T(e),
									resultName: r,
									nextLoc: n,
								}),
								'next' === this.method && (this.arg = t),
								y
							);
						},
					}),
					e
				);
			}
			function H(t, e, r, n, o, i, a) {
				try {
					var u = t[i](a),
						c = u.value;
				} catch (t) {
					return void r(t);
				}
				u.done ? e(c) : Promise.resolve(c).then(n, o);
			}
			function z(t) {
				return function () {
					var e = this,
						r = arguments;
					return new Promise(function (n, o) {
						var i = t.apply(e, r);
						function a(t) {
							H(i, n, o, a, u, 'next', t);
						}
						function u(t) {
							H(i, n, o, a, u, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			function Y(t, e) {
				for (var r = 0; r < e.length; r++) {
					var n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, J(n.key), n);
				}
			}
			function V(t, e, r) {
				return (
					(e = J(e)) in t
						? Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = r),
					t
				);
			}
			function J(t) {
				var e = (function (t, e) {
					if ('object' !== D(t) || null === t) return t;
					var r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						var n = r.call(t, e || 'default');
						if ('object' !== D(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === D(e) ? e : String(e);
			}
			var K = (function () {
					function t() {
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t),
							V(this, 'pageInfoCache', {});
					}
					var e, r, n, o, a, u, c, s, f;
					return (
						(e = t),
						(r = [
							{
								key: 'getEditToken',
								value:
									((f = z(
										Q().mark(function t() {
											var e;
											return Q().wrap(function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (
																(t.next = 2),
																m.get({
																	action: 'query',
																	meta: 'tokens',
																	format: 'json',
																})
															);
														case 2:
															if (
																!(
																	(e = t.sent).query &&
																	e.query.tokens &&
																	e.query.tokens.csrftoken &&
																	'+\\' !== e.query.tokens.csrftoken
																)
															) {
																t.next = 7;
																break;
															}
															return t.abrupt('return', e.query.tokens.csrftoken);
														case 7:
															return t.abrupt('return', M.error('fail_to_get_edittoken'));
														case 8:
														case 'end':
															return t.stop();
													}
											}, t);
										})
									)),
									function () {
										return f.apply(this, arguments);
									}),
							},
							{
								key: 'getPageInfo',
								value:
									((s = z(
										Q().mark(function t(e) {
											var r, n, o, i, a;
											return Q().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																if (
																	((r = e.title),
																	(n = e.revisionId),
																	(t.prev = 1),
																	(o = {
																		action: 'query',
																		prop: 'revisions|info',
																		rvprop: 'timestamp|ids',
																		format: 'json',
																	}),
																	!n)
																) {
																	t.next = 7;
																	break;
																}
																(o.revids = n), (t.next = 11);
																break;
															case 7:
																if (!r) {
																	t.next = 11;
																	break;
																}
																if (!this.pageInfoCache[r]) {
																	t.next = 10;
																	break;
																}
																return t.abrupt('return', {
																	timestamp: this.pageInfoCache[r].timestamp,
																	revisionId: this.pageInfoCache[r].revid,
																});
															case 10:
																o.titles = r;
															case 11:
																return (t.next = 13), m.get(o);
															case 13:
																if (!(i = t.sent).query || !i.query.pages) {
																	t.next = 20;
																	break;
																}
																if ('-1' !== Object.keys(i.query.pages)[0]) {
																	t.next = 17;
																	break;
																}
																return t.abrupt('return', {});
															case 17:
																return (
																	(a =
																		i.query.pages[Object.keys(i.query.pages)[0]]
																			.revisions[0]),
																	r && (this.pageInfoCache[r] = a),
																	t.abrupt('return', {
																		timestamp: a.timestamp,
																		revisionId: a.revid,
																	})
																);
															case 20:
																t.next = 25;
																break;
															case 22:
																(t.prev = 22),
																	(t.t0 = t.catch(1)),
																	M.error('fail_to_get_edittoken');
															case 25:
															case 'end':
																return t.stop();
														}
												},
												t,
												this,
												[[1, 22]]
											);
										})
									)),
									function (t) {
										return s.apply(this, arguments);
									}),
							},
							{
								key: 'getWikiText',
								value:
									((c = z(
										Q().mark(function t(e) {
											var r, n, o;
											return Q().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(r = e.section),
																	(n = e.revisionId),
																	(t.prev = 1),
																	(t.next = 4),
																	fetch(
																		''
																			.concat(location.protocol, '//')
																			.concat(location.host)
																			.concat(i.scriptPath, '/index.php?oldid=')
																			.concat(n, '&section=')
																			.concat(r, '&action=raw')
																	)
																);
															case 4:
																return (t.next = 6), t.sent.text();
															case 6:
																return (o = t.sent), t.abrupt('return', o);
															case 10:
																(t.prev = 10),
																	(t.t0 = t.catch(1)),
																	M.error('fail_to_get_wikitext');
															case 13:
															case 'end':
																return t.stop();
														}
												},
												t,
												null,
												[[1, 10]]
											);
										})
									)),
									function (t) {
										return c.apply(this, arguments);
									}),
							},
							{
								key: 'parseWikiText',
								value:
									((u = z(
										Q().mark(function t(e) {
											var r,
												n,
												o = arguments;
											return Q().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(r = o.length > 1 && void 0 !== o[1] ? o[1] : ''),
																	(t.prev = 2),
																	(t.next = 5),
																	m.post({
																		format: 'json',
																		action: 'parse',
																		text: e,
																		title: r,
																		pst: 'true',
																	})
																);
															case 5:
																if (!(n = t.sent).parse || !n.parse.text) {
																	t.next = 8;
																	break;
																}
																return t.abrupt('return', n.parse.text['*']);
															case 8:
																t.next = 13;
																break;
															case 10:
																(t.prev = 10),
																	(t.t0 = t.catch(2)),
																	M.error('cant_parse_wikitext');
															case 13:
															case 'end':
																return t.stop();
														}
												},
												t,
												null,
												[[2, 10]]
											);
										})
									)),
									function (t) {
										return u.apply(this, arguments);
									}),
							},
							{
								key: 'edit',
								value:
									((a = z(
										Q().mark(function t() {
											var e,
												r,
												n,
												o,
												i,
												a,
												u,
												c,
												s,
												f,
												l = arguments;
											return Q().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(r = (e =
																		l.length > 0 && void 0 !== l[0] ? l[0] : {})
																		.title),
																	(n = e.content),
																	(o = e.editToken),
																	(i = e.timestamp),
																	(a = e.config),
																	(u = void 0 === a ? {} : a),
																	(c = e.additionalConfig),
																	(s = void 0 === c ? {} : c),
																	(t.prev = 1),
																	(t.next = 4),
																	m.post(
																		q(
																			q(
																				q(
																					{
																						action: 'edit',
																						format: 'json',
																						text: n,
																						title: r,
																						token: o,
																					},
																					i ? {basetimestamp: i} : {}
																				),
																				u
																			),
																			s
																		)
																	)
																);
															case 4:
																(f = t.sent), (t.next = 10);
																break;
															case 7:
																(t.prev = 7),
																	(t.t0 = t.catch(1)),
																	M.error('network_edit_error');
															case 10:
																if (!f.edit) {
																	t.next = 22;
																	break;
																}
																if ('Success' !== f.edit.result) {
																	t.next = 15;
																	break;
																}
																return t.abrupt('return', !0);
															case 15:
																if (!f.edit.code) {
																	t.next = 19;
																	break;
																}
																throw new Error(
																	'\n                        '
																		.concat(P.translate('hit_abusefilter'), ':')
																		.concat(
																			f.edit.info.replace(
																				'/Hit AbuseFilter: /ig',
																				''
																			),
																			'\n                        <br>\n                        <div style="font-size: smaller;">'
																		)
																		.concat(
																			f.edit.warning,
																			'</div>\n                    '
																		)
																);
															case 19:
																M.error('unknown_edit_error');
															case 20:
																t.next = 23;
																break;
															case 22:
																f.error && f.error.code
																	? M.error(f.error.code)
																	: f.code
																		? M.error(f.code)
																		: M.error('unknown_edit_error');
															case 23:
															case 'end':
																return t.stop();
														}
												},
												t,
												null,
												[[1, 7]]
											);
										})
									)),
									function () {
										return a.apply(this, arguments);
									}),
							},
							{
								key: 'getLatestRevisionIdForPage',
								value:
									((o = z(
										Q().mark(function t(e) {
											var r, n;
											return Q().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(t.next = 2),
																	this.getPageInfo({
																		title: e,
																	})
																);
															case 2:
																return (
																	(r = t.sent),
																	(n = r.revisionId),
																	t.abrupt('return', n)
																);
															case 5:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function (t) {
										return o.apply(this, arguments);
									}),
							},
						]),
						r && Y(e.prototype, r),
						n && Y(e, n),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})(),
				X = new K();
			function Z(t) {
				return (
					(Z =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (t) {
									return typeof t;
								}
							: function (t) {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
								}),
					Z(t)
				);
			}
			function tt(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e &&
						(n = n.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function et(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2
						? tt(Object(r), !0).forEach(function (e) {
								at(t, e, r[e]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
							: tt(Object(r)).forEach(function (e) {
									Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
								});
				}
				return t;
			}
			function rt() {
				/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ rt =
					function () {
						return e;
					};
				var t,
					e = {},
					r = Object.prototype,
					n = r.hasOwnProperty,
					o =
						Object.defineProperty ||
						function (t, e, r) {
							t[e] = r.value;
						},
					i = 'function' == typeof Symbol ? Symbol : {},
					a = i.iterator || '@@iterator',
					u = i.asyncIterator || '@@asyncIterator',
					c = i.toStringTag || '@@toStringTag';
				function s(t, e, r) {
					return (
						Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					s({}, '');
				} catch (t) {
					s = function (t, e, r) {
						return (t[e] = r);
					};
				}
				function f(t, e, r, n) {
					var i = e && e.prototype instanceof g ? e : g,
						a = Object.create(i.prototype),
						u = new I(n || []);
					return o(a, '_invoke', {value: P(t, r, u)}), a;
				}
				function l(t, e, r) {
					try {
						return {
							type: 'normal',
							arg: t.call(e, r),
						};
					} catch (t) {
						return {
							type: 'throw',
							arg: t,
						};
					}
				}
				e.wrap = f;
				var p = 'suspendedStart',
					h = 'suspendedYield',
					v = 'executing',
					d = 'completed',
					y = {};
				function g() {}
				function m() {}
				function b() {}
				var w = {};
				s(w, a, function () {
					return this;
				});
				var x = Object.getPrototypeOf,
					k = x && x(x(T([])));
				k && k !== r && n.call(k, a) && (w = k);
				var S = (b.prototype = g.prototype = Object.create(w));
				function E(t) {
					['next', 'throw', 'return'].forEach(function (e) {
						s(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function O(t, e) {
					function r(o, i, a, u) {
						var c = l(t[o], t, i);
						if ('throw' !== c.type) {
							var s = c.arg,
								f = s.value;
							return f && 'object' == Z(f) && n.call(f, '__await')
								? e.resolve(f.__await).then(
										function (t) {
											r('next', t, a, u);
										},
										function (t) {
											r('throw', t, a, u);
										}
									)
								: e.resolve(f).then(
										function (t) {
											(s.value = t), a(s);
										},
										function (t) {
											return r('throw', t, a, u);
										}
									);
						}
						u(c.arg);
					}
					var i;
					o(this, '_invoke', {
						value: function (t, n) {
							function o() {
								return new e(function (e, o) {
									r(t, n, e, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function P(e, r, n) {
					var o = p;
					return function (i, a) {
						if (o === v) throw new Error('Generator is already running');
						if (o === d) {
							if ('throw' === i) throw a;
							return {
								value: t,
								done: !0,
							};
						}
						for (n.method = i, n.arg = a; ; ) {
							var u = n.delegate;
							if (u) {
								var c = j(u, n);
								if (c) {
									if (c === y) continue;
									return c;
								}
							}
							if ('next' === n.method) n.sent = n._sent = n.arg;
							else if ('throw' === n.method) {
								if (o === p) throw ((o = d), n.arg);
								n.dispatchException(n.arg);
							} else 'return' === n.method && n.abrupt('return', n.arg);
							o = v;
							var s = l(e, r, n);
							if ('normal' === s.type) {
								if (((o = n.done ? d : h), s.arg === y)) continue;
								return {
									value: s.arg,
									done: n.done,
								};
							}
							'throw' === s.type && ((o = d), (n.method = 'throw'), (n.arg = s.arg));
						}
					};
				}
				function j(e, r) {
					var n = r.method,
						o = e.iterator[n];
					if (o === t)
						return (
							(r.delegate = null),
							('throw' === n &&
								e.iterator.return &&
								((r.method = 'return'), (r.arg = t), j(e, r), 'throw' === r.method)) ||
								('return' !== n &&
									((r.method = 'throw'),
									(r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
							y
						);
					var i = l(o, e.iterator, r.arg);
					if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
					var a = i.arg;
					return a
						? a.done
							? ((r[e.resultName] = a.value),
								(r.next = e.nextLoc),
								'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
								(r.delegate = null),
								y)
							: a
						: ((r.method = 'throw'),
							(r.arg = new TypeError('iterator result is not an object')),
							(r.delegate = null),
							y);
				}
				function L(t) {
					var e = {
						tryLoc: t[0],
					};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function _(t) {
					var e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function I(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(L, this), this.reset(!0);
				}
				function T(e) {
					if (e || '' === e) {
						var r = e[a];
						if (r) return r.call(e);
						if ('function' == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var o = -1,
								i = function r() {
									for (; ++o < e.length; )
										if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
									return (r.value = t), (r.done = !0), r;
								};
							return (i.next = i);
						}
					}
					throw new TypeError(Z(e) + ' is not iterable');
				}
				return (
					(m.prototype = b),
					o(S, 'constructor', {value: b, configurable: !0}),
					o(b, 'constructor', {value: m, configurable: !0}),
					(m.displayName = s(b, c, 'GeneratorFunction')),
					(e.isGeneratorFunction = function (t) {
						var e = 'function' == typeof t && t.constructor;
						return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(e.mark = function (t) {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, b)
								: ((t.__proto__ = b), s(t, c, 'GeneratorFunction')),
							(t.prototype = Object.create(S)),
							t
						);
					}),
					(e.awrap = function (t) {
						return {
							__await: t,
						};
					}),
					E(O.prototype),
					s(O.prototype, u, function () {
						return this;
					}),
					(e.AsyncIterator = O),
					(e.async = function (t, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new O(f(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(function (t) {
									return t.done ? t.value : a.next();
								});
					}),
					E(S),
					s(S, c, 'Generator'),
					s(S, a, function () {
						return this;
					}),
					s(S, 'toString', function () {
						return '[object Generator]';
					}),
					(e.keys = function (t) {
						var e = Object(t),
							r = [];
						for (var n in e) r.push(n);
						return (
							r.reverse(),
							function t() {
								for (; r.length; ) {
									var n = r.pop();
									if (n in e) return (t.value = n), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = T),
					(I.prototype = {
						constructor: I,
						reset: function (e) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = t),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = t),
								this.tryEntries.forEach(_),
								!e)
							)
								for (var r in this)
									't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
						},
						stop: function () {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException: function (e) {
							if (this.done) throw e;
							var r = this;
							function o(n, o) {
								return (
									(u.type = 'throw'),
									(u.arg = e),
									(r.next = n),
									o && ((r.method = 'next'), (r.arg = t)),
									!!o
								);
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									u = a.completion;
								if ('root' === a.tryLoc) return o('end');
								if (a.tryLoc <= this.prev) {
									var c = n.call(a, 'catchLoc'),
										s = n.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt: function (t, e) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var i = o;
									break;
								}
							}
							i &&
								('break' === t || 'continue' === t) &&
								i.tryLoc <= e &&
								e <= i.finallyLoc &&
								(i = null);
							var a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
							);
						},
						complete: function (t, e) {
							if ('throw' === t.type) throw t.arg;
							return (
								'break' === t.type || 'continue' === t.type
									? (this.next = t.arg)
									: 'return' === t.type
										? ((this.rval = this.arg = t.arg),
											(this.method = 'return'),
											(this.next = 'end'))
										: 'normal' === t.type && e && (this.next = e),
								y
							);
						},
						finish: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), y;
							}
						},
						catch: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ('throw' === n.type) {
										var o = n.arg;
										_(r);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield: function (e, r, n) {
							return (
								(this.delegate = {
									iterator: T(e),
									resultName: r,
									nextLoc: n,
								}),
								'next' === this.method && (this.arg = t),
								y
							);
						},
					}),
					e
				);
			}
			function nt(t, e, r, n, o, i, a) {
				try {
					var u = t[i](a),
						c = u.value;
				} catch (t) {
					return void r(t);
				}
				u.done ? e(c) : Promise.resolve(c).then(n, o);
			}
			function ot(t) {
				return function () {
					var e = this,
						r = arguments;
					return new Promise(function (n, o) {
						var i = t.apply(e, r);
						function a(t) {
							nt(i, n, o, a, u, 'next', t);
						}
						function u(t) {
							nt(i, n, o, a, u, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			function it(t, e) {
				for (var r = 0; r < e.length; r++) {
					var n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, ut(n.key), n);
				}
			}
			function at(t, e, r) {
				return (
					(e = ut(e)) in t
						? Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = r),
					t
				);
			}
			function ut(t) {
				var e = (function (t, e) {
					if ('object' !== Z(t) || null === t) return t;
					var r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						var n = r.call(t, e || 'default');
						if ('object' !== Z(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === Z(e) ? e : String(e);
			}
			var ct = (function () {
					function t(e) {
						var r = e.title,
							n = e.revisionId;
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t),
							at(this, 'timestamp', void 0),
							at(this, 'editToken', void 0),
							at(this, 'title', void 0),
							at(this, 'revisionId', void 0),
							at(this, 'inited', !1),
							at(this, 'isNewPage', !1),
							at(this, 'sectionCache', {}),
							(this.title = r),
							(this.revisionId = n),
							(this.isNewPage = !n);
					}
					var e, r, n, o, i, a, u, c, s;
					return (
						(e = t),
						(r = [
							{
								key: 'init',
								value:
									((s = ot(
										rt().mark(function t() {
											var e,
												r,
												n,
												o = arguments;
											return rt().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(e = (o.length > 0 && void 0 !== o[0] ? o[0] : {})
																		.editToken),
																	(r = void 0 === e ? '' : e),
																	(n = [this.getTimestamp()]),
																	r || n.push(this.getEditToken()),
																	(t.next = 5),
																	Promise.all(n)
																);
															case 5:
																(this.inited = !0),
																	M.info(
																		'Page initialization for '
																			.concat(this.title, '#')
																			.concat(this.revisionId, ' finished.')
																	);
															case 7:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function () {
										return s.apply(this, arguments);
									}),
							},
							{
								key: 'getEditToken',
								value:
									((c = ot(
										rt().mark(function t() {
											return rt().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (t.next = 2), mw.loader.using('mediawiki.user');
															case 2:
																if (
																	!mw.user.tokens.get('csrfToken') ||
																	'+\\' === mw.user.tokens.get('csrfToken')
																) {
																	t.next = 5;
																	break;
																}
																return (
																	(this.editToken = mw.user.tokens.get('csrfToken')),
																	t.abrupt('return')
																);
															case 5:
																return (t.next = 7), X.getEditToken();
															case 7:
																this.editToken = t.sent;
															case 8:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function () {
										return c.apply(this, arguments);
									}),
							},
							{
								key: 'getTimestamp',
								value:
									((u = ot(
										rt().mark(function t() {
											var e, r, n;
											return rt().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(t.next = 2),
																	X.getPageInfo({
																		revisionId: this.revisionId,
																		title: this.title,
																	})
																);
															case 2:
																(e = t.sent),
																	(r = e.timestamp),
																	(n = e.revisionId),
																	(this.timestamp = r),
																	n && ((this.revisionId = n), (this.isNewPage = !1));
															case 7:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function () {
										return u.apply(this, arguments);
									}),
							},
							{
								key: 'getWikiText',
								value:
									((a = ot(
										rt().mark(function t() {
											var e,
												r,
												n,
												o,
												i = arguments;
											return rt().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																if (
																	((e = (i.length > 0 && void 0 !== i[0] ? i[0] : {})
																		.section),
																	(n = -1 === (r = void 0 === e ? '' : e) ? '' : r),
																	!this.sectionCache[n])
																) {
																	t.next = 4;
																	break;
																}
																return t.abrupt('return', this.sectionCache[n]);
															case 4:
																return (
																	(t.next = 6),
																	X.getWikiText({
																		section: n,
																		revisionId: this.revisionId,
																	})
																);
															case 6:
																return (
																	(o = t.sent),
																	M.info(
																		'Wikitext of '
																			.concat(this.title, '#')
																			.concat(r, ' fetched.')
																	),
																	(this.sectionCache[n] = o),
																	t.abrupt('return', o)
																);
															case 10:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function () {
										return a.apply(this, arguments);
									}),
							},
							{
								key: 'parseWikiText',
								value:
									((i = ot(
										rt().mark(function t(e) {
											return rt().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return t.abrupt(
																	'return',
																	X.parseWikiText(e, this.title)
																);
															case 1:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function (t) {
										return i.apply(this, arguments);
									}),
							},
							{
								key: 'edit',
								value:
									((o = ot(
										rt().mark(function t(e) {
											return rt().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																if (this.editToken) {
																	t.next = 3;
																	break;
																}
																return (
																	M.error('fail_to_get_edittoken'), t.abrupt('return')
																);
															case 3:
																if (this.timestamp || this.isNewPage) {
																	t.next = 6;
																	break;
																}
																return (
																	M.error('fail_to_get_timestamp'), t.abrupt('return')
																);
															case 6:
																return t.abrupt(
																	'return',
																	X.edit(
																		et(
																			et(
																				et(
																					{
																						title: this.title,
																						editToken: this.editToken,
																					},
																					this.timestamp
																						? {timestamp: this.timestamp}
																						: {}
																				),
																				e
																			),
																			{},
																			{
																				additionalConfig: et(
																					{},
																					this.isNewPage
																						? {createonly: this.isNewPage}
																						: {}
																				),
																			}
																		)
																	)
																);
															case 7:
															case 'end':
																return t.stop();
														}
												},
												t,
												this
											);
										})
									)),
									function (t) {
										return o.apply(this, arguments);
									}),
							},
						]),
						r && it(e.prototype, r),
						n && it(e, n),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})(),
				st = ct;
			r(5728), r(1954), r(928), r(2462), r(8436);
			function ft(t) {
				return (
					(ft =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (t) {
									return typeof t;
								}
							: function (t) {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
								}),
					ft(t)
				);
			}
			function lt(t, e) {
				for (var r = 0; r < e.length; r++) {
					var n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, pt(n.key), n);
				}
			}
			function pt(t) {
				var e = (function (t, e) {
					if ('object' !== ft(t) || null === t) return t;
					var r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						var n = r.call(t, e || 'default');
						if ('object' !== ft(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === ft(e) ? e : String(e);
			}
			var ht = (function () {
					function t() {
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t),
							this.init();
					}
					var e, r, n;
					return (
						(e = t),
						(r = [
							{
								key: 'init',
								value: function () {
									$('body').append('<div id="MoeNotification"></div>');
								},
							},
							{
								key: 'display',
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '喵~',
										e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'success',
										r =
											arguments.length > 2 && void 0 !== arguments[2]
												? arguments[2]
												: function () {};
									$('#MoeNotification').append(
										$('<div>')
											.addClass('MoeNotification-notice')
											.addClass('MoeNotification-notice-' + e)
											.append('<span>' + t + '</span>')
									),
										$('#MoeNotification').find('.MoeNotification-notice').last().fadeIn(300),
										this.bind(),
										this.clear(),
										r($('#MoeNotification').find('.MoeNotification-notice').last());
								},
							},
							{
								key: 'bind',
								value: function () {
									var t = this;
									$('.MoeNotification-notice').on('mouseover', function () {
										t.slideLeft($(this));
									});
								},
							},
							{
								key: 'success',
								value: function (t, e) {
									this.display(t, 'success', e);
								},
							},
							{
								key: 'warning',
								value: function (t, e) {
									this.display(t, 'warning', e);
								},
							},
							{
								key: 'error',
								value: function (t, e) {
									this.display(t, 'error', e);
								},
							},
							{
								key: 'clear',
								value: function () {
									$('.MoeNotification-notice').length >= 10 &&
										($('#MoeNotification')
											.children()
											.first()
											.fadeOut(150, function () {
												$(this).remove();
											}),
										setTimeout(this.clear, 300));
								},
							},
							{
								key: 'empty',
								value: function (t) {
									$('.MoeNotification-notice').each(function (e) {
										if ('function' == typeof t) {
											var r = $(this);
											setTimeout(function () {
												t(r);
											}, 200 * e);
										} else
											$(this)
												.delay(200 * e)
												.fadeOut('fast', function () {
													$(this).remove();
												});
									});
								},
							},
							{
								key: 'slideLeft',
								value: function (t, e) {
									t.css('position', 'relative'),
										t.animate(
											{
												left: '-200%',
											},
											e || 150,
											function () {
												$(this).fadeOut('fast', function () {
													$(this).remove();
												});
											}
										);
								},
							},
						]),
						r && lt(e.prototype, r),
						n && lt(e, n),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})(),
				vt = new ht(),
				dt = function (t) {
					return new Promise(function (e) {
						return setTimeout(e, t);
					});
				};
			function yt(t) {
				return (
					(yt =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (t) {
									return typeof t;
								}
							: function (t) {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
								}),
					yt(t)
				);
			}
			function gt() {
				/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ gt =
					function () {
						return e;
					};
				var t,
					e = {},
					r = Object.prototype,
					n = r.hasOwnProperty,
					o =
						Object.defineProperty ||
						function (t, e, r) {
							t[e] = r.value;
						},
					i = 'function' == typeof Symbol ? Symbol : {},
					a = i.iterator || '@@iterator',
					u = i.asyncIterator || '@@asyncIterator',
					c = i.toStringTag || '@@toStringTag';
				function s(t, e, r) {
					return (
						Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					s({}, '');
				} catch (t) {
					s = function (t, e, r) {
						return (t[e] = r);
					};
				}
				function f(t, e, r, n) {
					var i = e && e.prototype instanceof g ? e : g,
						a = Object.create(i.prototype),
						u = new I(n || []);
					return o(a, '_invoke', {value: P(t, r, u)}), a;
				}
				function l(t, e, r) {
					try {
						return {
							type: 'normal',
							arg: t.call(e, r),
						};
					} catch (t) {
						return {
							type: 'throw',
							arg: t,
						};
					}
				}
				e.wrap = f;
				var p = 'suspendedStart',
					h = 'suspendedYield',
					v = 'executing',
					d = 'completed',
					y = {};
				function g() {}
				function m() {}
				function b() {}
				var w = {};
				s(w, a, function () {
					return this;
				});
				var x = Object.getPrototypeOf,
					k = x && x(x(T([])));
				k && k !== r && n.call(k, a) && (w = k);
				var S = (b.prototype = g.prototype = Object.create(w));
				function E(t) {
					['next', 'throw', 'return'].forEach(function (e) {
						s(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function O(t, e) {
					function r(o, i, a, u) {
						var c = l(t[o], t, i);
						if ('throw' !== c.type) {
							var s = c.arg,
								f = s.value;
							return f && 'object' == yt(f) && n.call(f, '__await')
								? e.resolve(f.__await).then(
										function (t) {
											r('next', t, a, u);
										},
										function (t) {
											r('throw', t, a, u);
										}
									)
								: e.resolve(f).then(
										function (t) {
											(s.value = t), a(s);
										},
										function (t) {
											return r('throw', t, a, u);
										}
									);
						}
						u(c.arg);
					}
					var i;
					o(this, '_invoke', {
						value: function (t, n) {
							function o() {
								return new e(function (e, o) {
									r(t, n, e, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function P(e, r, n) {
					var o = p;
					return function (i, a) {
						if (o === v) throw new Error('Generator is already running');
						if (o === d) {
							if ('throw' === i) throw a;
							return {
								value: t,
								done: !0,
							};
						}
						for (n.method = i, n.arg = a; ; ) {
							var u = n.delegate;
							if (u) {
								var c = j(u, n);
								if (c) {
									if (c === y) continue;
									return c;
								}
							}
							if ('next' === n.method) n.sent = n._sent = n.arg;
							else if ('throw' === n.method) {
								if (o === p) throw ((o = d), n.arg);
								n.dispatchException(n.arg);
							} else 'return' === n.method && n.abrupt('return', n.arg);
							o = v;
							var s = l(e, r, n);
							if ('normal' === s.type) {
								if (((o = n.done ? d : h), s.arg === y)) continue;
								return {
									value: s.arg,
									done: n.done,
								};
							}
							'throw' === s.type && ((o = d), (n.method = 'throw'), (n.arg = s.arg));
						}
					};
				}
				function j(e, r) {
					var n = r.method,
						o = e.iterator[n];
					if (o === t)
						return (
							(r.delegate = null),
							('throw' === n &&
								e.iterator.return &&
								((r.method = 'return'), (r.arg = t), j(e, r), 'throw' === r.method)) ||
								('return' !== n &&
									((r.method = 'throw'),
									(r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
							y
						);
					var i = l(o, e.iterator, r.arg);
					if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
					var a = i.arg;
					return a
						? a.done
							? ((r[e.resultName] = a.value),
								(r.next = e.nextLoc),
								'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
								(r.delegate = null),
								y)
							: a
						: ((r.method = 'throw'),
							(r.arg = new TypeError('iterator result is not an object')),
							(r.delegate = null),
							y);
				}
				function L(t) {
					var e = {
						tryLoc: t[0],
					};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function _(t) {
					var e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function I(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(L, this), this.reset(!0);
				}
				function T(e) {
					if (e || '' === e) {
						var r = e[a];
						if (r) return r.call(e);
						if ('function' == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var o = -1,
								i = function r() {
									for (; ++o < e.length; )
										if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
									return (r.value = t), (r.done = !0), r;
								};
							return (i.next = i);
						}
					}
					throw new TypeError(yt(e) + ' is not iterable');
				}
				return (
					(m.prototype = b),
					o(S, 'constructor', {value: b, configurable: !0}),
					o(b, 'constructor', {value: m, configurable: !0}),
					(m.displayName = s(b, c, 'GeneratorFunction')),
					(e.isGeneratorFunction = function (t) {
						var e = 'function' == typeof t && t.constructor;
						return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(e.mark = function (t) {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, b)
								: ((t.__proto__ = b), s(t, c, 'GeneratorFunction')),
							(t.prototype = Object.create(S)),
							t
						);
					}),
					(e.awrap = function (t) {
						return {
							__await: t,
						};
					}),
					E(O.prototype),
					s(O.prototype, u, function () {
						return this;
					}),
					(e.AsyncIterator = O),
					(e.async = function (t, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new O(f(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(function (t) {
									return t.done ? t.value : a.next();
								});
					}),
					E(S),
					s(S, c, 'Generator'),
					s(S, a, function () {
						return this;
					}),
					s(S, 'toString', function () {
						return '[object Generator]';
					}),
					(e.keys = function (t) {
						var e = Object(t),
							r = [];
						for (var n in e) r.push(n);
						return (
							r.reverse(),
							function t() {
								for (; r.length; ) {
									var n = r.pop();
									if (n in e) return (t.value = n), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = T),
					(I.prototype = {
						constructor: I,
						reset: function (e) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = t),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = t),
								this.tryEntries.forEach(_),
								!e)
							)
								for (var r in this)
									't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
						},
						stop: function () {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException: function (e) {
							if (this.done) throw e;
							var r = this;
							function o(n, o) {
								return (
									(u.type = 'throw'),
									(u.arg = e),
									(r.next = n),
									o && ((r.method = 'next'), (r.arg = t)),
									!!o
								);
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									u = a.completion;
								if ('root' === a.tryLoc) return o('end');
								if (a.tryLoc <= this.prev) {
									var c = n.call(a, 'catchLoc'),
										s = n.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt: function (t, e) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var i = o;
									break;
								}
							}
							i &&
								('break' === t || 'continue' === t) &&
								i.tryLoc <= e &&
								e <= i.finallyLoc &&
								(i = null);
							var a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
							);
						},
						complete: function (t, e) {
							if ('throw' === t.type) throw t.arg;
							return (
								'break' === t.type || 'continue' === t.type
									? (this.next = t.arg)
									: 'return' === t.type
										? ((this.rval = this.arg = t.arg),
											(this.method = 'return'),
											(this.next = 'end'))
										: 'normal' === t.type && e && (this.next = e),
								y
							);
						},
						finish: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), y;
							}
						},
						catch: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ('throw' === n.type) {
										var o = n.arg;
										_(r);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield: function (e, r, n) {
							return (
								(this.delegate = {
									iterator: T(e),
									resultName: r,
									nextLoc: n,
								}),
								'next' === this.method && (this.arg = t),
								y
							);
						},
					}),
					e
				);
			}
			function mt(t, e, r, n, o, i, a) {
				try {
					var u = t[i](a),
						c = u.value;
				} catch (t) {
					return void r(t);
				}
				u.done ? e(c) : Promise.resolve(c).then(n, o);
			}
			function bt(t) {
				return function () {
					var e = this,
						r = arguments;
					return new Promise(function (n, o) {
						var i = t.apply(e, r);
						function a(t) {
							mt(i, n, o, a, u, 'next', t);
						}
						function u(t) {
							mt(i, n, o, a, u, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			function wt(t, e) {
				for (var r = 0; r < e.length; r++) {
					var n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, kt(n.key), n);
				}
			}
			function xt(t, e, r) {
				return (
					(e = kt(e)) in t
						? Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = r),
					t
				);
			}
			function kt(t) {
				var e = (function (t, e) {
					if ('object' !== yt(t) || null === t) return t;
					var r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						var n = r.call(t, e || 'default');
						if ('object' !== yt(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === yt(e) ? e : String(e);
			}
			var St = (function () {
					function t() {
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t),
							xt(this, 'quickEditPanelVisible', !1),
							xt(this, 'scrollTop', 0);
					}
					var e, r, n;
					return (
						(e = t),
						(r = [
							{
								key: 'createDialogBox',
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'Wikiplus',
										e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
										r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 600,
										n =
											arguments.length > 3 && void 0 !== arguments[3]
												? arguments[3]
												: function () {};
									$('.Wikiplus-InterBox').length > 0 &&
										$('.Wikiplus-InterBox').each(function () {
											$(this).remove();
										});
									var o = window.innerWidth,
										i = window.innerHeight,
										a = Math.min(o, r),
										u = $('<div>')
											.addClass('Wikiplus-InterBox')
											.css({
												'margin-left': o / 2 - a / 2,
												top: $(document).scrollTop() + 0.2 * i,
												display: 'none',
											})
											.append($('<div>').addClass('Wikiplus-InterBox-Header').html(t))
											.append($('<div>').addClass('Wikiplus-InterBox-Content').append(e))
											.append($('<span>').text('×').addClass('Wikiplus-InterBox-Close'));
									return (
										$('body').append(u),
										$('.Wikiplus-InterBox').width(a),
										$('.Wikiplus-InterBox-Close').on('click', function () {
											$(this)
												.parent()
												.fadeOut('fast', function () {
													(window.onclose = window.onbeforeunload = void 0), $(this).remove();
												});
										}),
										(function t(e) {
											e.mousedown(function (r) {
												var n = r.clientX,
													o = r.clientY,
													i = e.parent().offset().left,
													a = e.parent().offset().top;
												$(document).on('mousemove', function (t) {
													e.parent().css({
														'margin-left': i + t.clientX - n,
														top: a + t.clientY - o,
													});
												}),
													$(document).on('mouseup', function () {
														e.unbind('mousedown'),
															$(document).off('mousemove'),
															$(document).off('mouseup'),
															t(e);
													});
											});
										})($('.Wikiplus-InterBox-Header')),
										$('.Wikiplus-InterBox').fadeIn(500),
										n(),
										u
									);
								},
							},
							{
								key: 'addFunctionButton',
								value: function (t, e) {
									var r;
									switch (i.skin) {
										case 'minerva':
											r = $('<li>')
												.attr('id', e)
												.addClass('toggle-list-item')
												.append(
													$('<a>')
														.addClass(
															'mw-ui-icon mw-ui-icon-before toggle-list-item__anchor'
														)
														.append(
															$('<span>')
																.attr('href', 'javascript:void(0);')
																.addClass('toggle-list-item__label')
																.text(t)
														)
												);
											break;
										case 'moeskin':
											r = $('<li>')
												.addClass('Wikiplus-More-Function-Button')
												.attr('id', e)
												.append($('<a>').attr('href', 'javascript:void(0);').text(t));
											break;
										default:
											r = $('<li>')
												.addClass('mw-list-item')
												.addClass('vector-tab-noicon')
												.attr('id', e)
												.append($('<a>').attr('href', 'javascript:void(0);').text(t));
									}
									return 'minerva' === i.skin && $('#p-tb').length > 0
										? ($('#p-tb').append(r), $('#'.concat(e)))
										: 'moeskin' === i.skin
											? ($('.more-actions-list').first().append(r), $('#'.concat(e)))
											: $('#p-cactions').length > 0
												? ($('#p-cactions ul').append(r), $('#'.concat(e)))
												: void M.info(P.translate('cant_add_funcbtn'));
								},
							},
							{
								key: 'insertSimpleRedirectButton',
								value: function () {
									var t =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: function () {},
										e = this.addFunctionButton(P.translate('redirect_from'), 'Wikiplus-SR-Intro');
									e && e.on('click', t);
								},
							},
							{
								key: 'insertSettingsPanelButton',
								value: function () {
									var t =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: function () {},
										e = this.addFunctionButton(
											P.translate('wikiplus_settings'),
											'Wikiplus-Settings-Intro'
										);
									e && e.on('click', t);
								},
							},
							{
								key: 'insertTopQuickEditEntry',
								value: function (t) {
									var e = $('<li>').attr('id', 'Wikiplus-Edit-TopBtn').attr('class', 'mw-list-item'),
										r = $('<a>')
											.attr('href', 'javascript:void(0)')
											.text(''.concat(P.translate('quickedit_topbtn')));
									switch ((e.append(r), i.skin)) {
										case 'minerva':
											e.css({
												'align-items': 'center',
												display: 'flex',
											}),
												e.find('span').addClass('page-actions-menu__list-item'),
												e
													.find('a')
													.addClass(
														'mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 mw-ui-icon-with-label-desktop'
													)
													.css('vertical-align', 'middle');
											break;
										case 'vector-2022':
											e.addClass('vector-tab-noicon');
											break;
										case 'vector':
											e.append($('<span>').append(r));
									}
									$(e).on('click', function () {
										t({
											sectionNumber: -1,
											targetPageName: i.currentPageName,
										});
									}),
										$('#ca-edit').length > 0 &&
											0 === $('#Wikiplus-Edit-TopBtn').length &&
											('minerva' === i.skin
												? $('#ca-edit').parent().after(e)
												: $('#ca-edit').after(e));
								},
							},
							{
								key: 'insertSectionQuickEditEntries',
								value: function () {
									var t =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: function () {},
										e =
											'minerva' === i.skin
												? $('<span>').append(
														$('<a>')
															.addClass(
																'Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right'
															)
															.css('margin-left', '0.75em')
															.attr('href', 'javascript:void(0)')
															.attr('title', P.translate('quickedit_sectionbtn'))
													)
												: $('<span>')
														.append(
															$('<span>').addClass('mw-editsection-divider').text(' | ')
														)
														.append(
															$('<a>')
																.addClass('Wikiplus-Edit-SectionBtn')
																.attr('href', 'javascript:void(0)')
																.text(P.translate('quickedit_sectionbtn'))
														);
									$('.mw-editsection').each(function (r) {
										try {
											var n = $(this).find("a[href*='action=edit']").first().attr('href'),
												o = n.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, ''),
												a = decodeURIComponent(n.match(/title=(.+?)&/)[1]),
												u = $(this).prev().clone();
											u.find('.mw-headline-number').remove();
											var c = u.text().trim(),
												s = e.clone();
											s.find('.Wikiplus-Edit-SectionBtn').on('click', function () {
												t({
													sectionNumber: o,
													sectionName: c,
													targetPageName: a,
												});
											}),
												'minerva' === i.skin
													? $(this).append(s)
													: $(this).find('.mw-editsection-bracket').last().before(s);
										} catch (t) {
											M.error('fail_to_init_quickedit');
										}
									});
								},
							},
							{
								key: 'insertLinkEditEntries',
								value: function () {
									var t =
										arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {};
									$('#mw-content-text a.external').each(function (e) {
										var r = (function (t) {
											for (var e, r = /(([^?&=]+)(?:=([^?&=]*))*)/g, n = {}; (e = r.exec(t)); )
												try {
													n[e[2]] = decodeURIComponent(e[3]);
												} catch (t) {
													n[e[2]] = e[3];
												}
											return n;
										})($(this).attr('href'));
										'edit' === r.action &&
											void 0 !== r.title &&
											'new' !== r.section &&
											$(this).after(
												$('<a>')
													.attr({
														href: 'javascript:void(0)',
														class: 'Wikiplus-Edit-EveryWhereBtn',
													})
													.text('('.concat(P.translate('quickedit_sectionbtn'), ')'))
													.on('click', function () {
														var e;
														t({
															targetPageName: r.title,
															sectionNumber:
																null !== (e = r.section) && void 0 !== e ? e : -1,
														});
													})
											);
									});
								},
							},
							{
								key: 'showQuickEditPanel',
								value: function (t) {
									var e = t.title,
										r = void 0 === e ? '' : e,
										n = t.content,
										o = void 0 === n ? '' : n,
										i = t.summary,
										a = void 0 === i ? '' : i,
										u = t.onBack,
										c = void 0 === u ? function () {} : u,
										s = t.onParse,
										f = void 0 === s ? function () {} : s,
										l = t.onEdit,
										p = void 0 === l ? function () {} : l,
										h = t.escExit,
										v = void 0 !== h && h,
										d = this;
									(this.scrollTop = $(document).scrollTop()),
										this.quickEditPanelVisible && this.hideQuickEditPanel(),
										(this.quickEditPanelVisible = !0),
										(window.onclose = window.onbeforeunload =
											function () {
												return ''.concat(P.translate('onclose_confirm'));
											});
									var y = $('.noarticletext').length > 0,
										g = $('<span>')
											.attr('id', 'Wikiplus-Quickedit-Back')
											.addClass('Wikiplus-Btn')
											.text(''.concat(P.translate('back'))),
										m = $('<span>')
											.attr('id', 'Wikiplus-Quickedit-Jump')
											.addClass('Wikiplus-Btn')
											.append(
												$('<a>')
													.attr('href', '#Wikiplus-Quickedit')
													.text(''.concat(P.translate('goto_editbox')))
											),
										b = $('<textarea>').attr('id', 'Wikiplus-Quickedit'),
										w = $('<div>').attr('id', 'Wikiplus-Quickedit-Preview-Output'),
										x = $('<input>')
											.attr('id', 'Wikiplus-Quickedit-Summary-Input')
											.attr('placeholder', ''.concat(P.translate('summary_placehold'))),
										k = $('<button>')
											.attr('id', 'Wikiplus-Quickedit-Submit')
											.text(
												''.concat(
													P.translate(y ? 'publish_page' : 'publish_change'),
													'(Ctrl+S)'
												)
											),
										S = $('<button>')
											.attr('id', 'Wikiplus-Quickedit-Preview-Submit')
											.text(''.concat(P.translate('preview'))),
										E = $('<div>')
											.append(
												$('<input>').attr({
													type: 'checkbox',
													id: 'Wikiplus-Quickedit-MinorEdit',
												})
											)
											.append(
												$('<label>')
													.attr('for', 'Wikiplus-Quickedit-MinorEdit')
													.text(''.concat(P.translate('mark_minoredit'), '(Ctrl+Shift+S)'))
											)
											.css({
												margin: '5px 5px 5px -3px',
												display: 'inline',
											}),
										O = $('<div>').append(g, m, w, b, x, $('<br>'), E, k, S);
									this.createDialogBox(r, O, 1e3, function () {
										$('#Wikiplus-Quickedit').val(o), $('#Wikiplus-Quickedit-Summary-Input').val(a);
									}),
										$('#Wikiplus-Quickedit-Back').on('click', c),
										$('#Wikiplus-Quickedit-Preview-Submit').on(
											'click',
											bt(
												gt().mark(function t() {
													var e, r, n;
													return gt().wrap(
														function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		return (
																			(e = $('<div>')
																				.addClass('Wikiplus-Banner')
																				.text(
																					''.concat(
																						P.translate('loading_preview')
																					)
																				)),
																			(r = $('#Wikiplus-Quickedit').val()),
																			$(this).attr('disabled', 'disabled'),
																			$(
																				'#Wikiplus-Quickedit-Preview-Output'
																			).fadeOut(100, function () {
																				$('#Wikiplus-Quickedit-Preview-Output')
																					.html('')
																					.append(e),
																					$(
																						'#Wikiplus-Quickedit-Preview-Output'
																					).fadeIn(100);
																			}),
																			$('html, body').animate(
																				{scrollTop: d.scrollTop},
																				200
																			),
																			(t.next = 7),
																			f(r)
																		);
																	case 7:
																		(n = t.sent),
																			$(
																				'#Wikiplus-Quickedit-Preview-Output'
																			).fadeOut('100', function () {
																				$(
																					'#Wikiplus-Quickedit-Preview-Output'
																				).html(
																					'<hr><div class="mw-body-content">' +
																						n +
																						'</div><hr>'
																				),
																					$(
																						'#Wikiplus-Quickedit-Preview-Output'
																					).fadeIn('100'),
																					$(
																						'#Wikiplus-Quickedit-Preview-Submit'
																					).prop('disabled', !1);
																			});
																	case 9:
																	case 'end':
																		return t.stop();
																}
														},
														t,
														this
													);
												})
											)
										),
										$('#Wikiplus-Quickedit-Submit').on(
											'click',
											bt(
												gt().mark(function t() {
													var e, r, n, o;
													return gt().wrap(
														function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		return (
																			(e = new Date().valueOf()),
																			(r = $('<div>')
																				.addClass('Wikiplus-Banner')
																				.text(
																					''.concat(
																						P.translate('submitting_edit')
																					)
																				)),
																			(n = {
																				summary: $(
																					'#Wikiplus-Quickedit-Summary-Input'
																				).val(),
																				content: $('#Wikiplus-Quickedit').val(),
																				isMinorEdit: $(
																					'#Wikiplus-Quickedit-MinorEdit'
																				).is(':checked'),
																			}),
																			$(
																				'#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit'
																			).attr('disabled', 'disabled'),
																			$('html, body').animate(
																				{scrollTop: d.scrollTop},
																				200
																			),
																			$(
																				'#Wikiplus-Quickedit-Preview-Output'
																			).fadeOut(100, function () {
																				$('#Wikiplus-Quickedit-Preview-Output')
																					.html('')
																					.append(r),
																					$(
																						'#Wikiplus-Quickedit-Preview-Output'
																					).fadeIn(100);
																			}),
																			(t.prev = 6),
																			(t.next = 9),
																			p(n)
																		);
																	case 9:
																		(o = new Date().valueOf() - e),
																			$('#Wikiplus-Quickedit-Preview-Output')
																				.find('.Wikiplus-Banner')
																				.css(
																					'background',
																					'rgba(6, 239, 92, 0.44)'
																				),
																			$('#Wikiplus-Quickedit-Preview-Output')
																				.find('.Wikiplus-Banner')
																				.text(
																					''.concat(
																						P.translate('edit_success', [
																							o.toString(),
																						])
																					)
																				),
																			(window.onclose = window.onbeforeunload =
																				void 0),
																			setTimeout(function () {
																				location.reload();
																			}, 500),
																			(t.next = 21);
																		break;
																	case 16:
																		(t.prev = 16),
																			(t.t0 = t.catch(6)),
																			console.log(t.t0),
																			$('.Wikiplus-Banner').css(
																				'background',
																				'rgba(218, 142, 167, 0.65)'
																			),
																			$('.Wikiplus-Banner').html(t.t0.message);
																	case 21:
																		return (
																			(t.prev = 21),
																			$(
																				'#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit'
																			).prop('disabled', !1),
																			t.finish(21)
																		);
																	case 24:
																	case 'end':
																		return t.stop();
																}
														},
														t,
														null,
														[[6, 16, 21, 24]]
													);
												})
											)
										),
										$(
											'#Wikiplus-Quickedit,#Wikiplus-Quickedit-Summary-Input,#Wikiplus-Quickedit-MinorEdit'
										).on('keydown', function (t) {
											t.ctrlKey &&
												83 === t.which &&
												(t.shiftKey && $('#Wikiplus-Quickedit-MinorEdit').trigger('click'),
												$('#Wikiplus-Quickedit-Submit').trigger('click'),
												t.preventDefault(),
												t.stopPropagation());
										}),
										v &&
											$(document).on('keydown', function (t) {
												27 === t.which && $('#Wikiplus-Quickedit-Back').click();
											});
								},
							},
							{
								key: 'hideQuickEditPanel',
								value: function () {
									(this.quickEditPanelVisible = !1),
										$('.Wikiplus-InterBox').fadeOut('fast', function () {
											(window.onclose = window.onbeforeunload = void 0), $(this).remove();
										});
								},
							},
							{
								key: 'showSimpleRedirectPanel',
								value: function () {
									var t = this,
										e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
										r = e.onEdit,
										n = void 0 === r ? function () {} : r,
										o = e.onSuccess,
										i = void 0 === o ? function () {} : o,
										a = $('<input>').addClass('Wikiplus-InterBox-Input'),
										u = $('<div>')
											.addClass('Wikiplus-InterBox-Btn')
											.attr('id', 'Wikiplus-SR-Apply')
											.text(P.translate('submit')),
										c = $('<div>')
											.addClass('Wikiplus-InterBox-Btn')
											.attr('id', 'Wikiplus-SR-Cancel')
											.text(P.translate('cancel')),
										s = $('<div>')
											.addClass('Wikiplus-InterBox-Btn')
											.attr('id', 'Wikiplus-SR-Continue')
											.text(P.translate('continue')),
										f = $('<div>').append(a).append($('<hr>')).append(u).append(c),
										l = this.createDialogBox(P.translate('redirect_desc'), f, 600);
									u.on(
										'click',
										bt(
											gt().mark(function e() {
												var r;
												return gt().wrap(
													function (e) {
														for (;;)
															switch ((e.prev = e.next)) {
																case 0:
																	return (
																		(r = $('.Wikiplus-InterBox-Input').val()),
																		$('.Wikiplus-InterBox-Content').html(
																			'<div class="Wikiplus-Banner">'.concat(
																				P.translate('submitting_edit'),
																				'</div>'
																			)
																		),
																		(e.prev = 2),
																		(e.next = 5),
																		n({
																			title: r,
																			forceOverwrite: !1,
																		})
																	);
																case 5:
																	$('.Wikiplus-Banner').text(
																		P.translate('redirect_saved')
																	),
																		t.hideSimpleRedirectPanel(l),
																		i({
																			title: r,
																		}),
																		(e.next = 15);
																	break;
																case 10:
																	(e.prev = 10),
																		(e.t0 = e.catch(2)),
																		$('.Wikiplus-Banner').css(
																			'background',
																			'rgba(218, 142, 167, 0.65)'
																		),
																		$('.Wikiplus-Banner').text(e.t0.message),
																		'articleexists' === e.t0.code &&
																			($('.Wikiplus-InterBox-Content')
																				.append($('<hr>'))
																				.append(s)
																				.append(c),
																			c.on('click', function () {
																				t.hideSimpleRedirectPanel(l);
																			}),
																			s.on(
																				'click',
																				bt(
																					gt().mark(function e() {
																						return gt().wrap(
																							function (e) {
																								for (;;)
																									switch (
																										(e.prev =
																											e.next)
																									) {
																										case 0:
																											return (
																												$(
																													'.Wikiplus-InterBox-Content'
																												).html(
																													'<div class="Wikiplus-Banner">'.concat(
																														P.translate(
																															'submitting_edit'
																														),
																														'</div>'
																													)
																												),
																												(e.prev = 1),
																												(e.next = 4),
																												n({
																													title: r,
																													forceOverwrite:
																														!0,
																												})
																											);
																										case 4:
																											$(
																												'.Wikiplus-Banner'
																											).text(
																												P.translate(
																													'redirect_saved'
																												)
																											),
																												t.hideSimpleRedirectPanel(
																													l
																												),
																												i({
																													title: r,
																												}),
																												(e.next = 13);
																											break;
																										case 9:
																											(e.prev = 9),
																												(e.t0 =
																													e.catch(
																														1
																													)),
																												$(
																													'.Wikiplus-Banner'
																												).css(
																													'background',
																													'rgba(218, 142, 167, 0.65)'
																												),
																												$(
																													'.Wikiplus-Banner'
																												).text(
																													e.t0
																														.message
																												);
																										case 13:
																										case 'end':
																											return e.stop();
																									}
																							},
																							e,
																							null,
																							[[1, 9]]
																						);
																					})
																				)
																			));
																case 15:
																case 'end':
																	return e.stop();
															}
													},
													e,
													null,
													[[2, 10]]
												);
											})
										)
									),
										c.on('click', function () {
											t.hideSimpleRedirectPanel(l);
										});
								},
							},
							{
								key: 'hideSimpleRedirectPanel',
								value: function () {
									(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $('body'))
										.find('.Wikiplus-InterBox-Close')
										.trigger('click');
								},
							},
							{
								key: 'showSettingsPanel',
								value: function () {
									var t = this,
										e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
											.onSubmit,
										r = void 0 === e ? function () {} : e,
										n = $('<textarea>').attr('id', 'Wikiplus-Setting-Input').attr('rows', '10'),
										o = $('<div>')
											.addClass('Wikiplus-InterBox-Btn')
											.attr('id', 'Wikiplus-Setting-Apply')
											.text(P.translate('submit')),
										i = $('<div>')
											.addClass('Wikiplus-InterBox-Btn')
											.attr('id', 'Wikiplus-Setting-Cancel')
											.text(P.translate('cancel')),
										a = $('<div>').append(n).append($('<hr>')).append(o).append(i),
										u = this.createDialogBox(
											P.translate('wikiplus_settings_desc'),
											a,
											600,
											function () {
												if (localStorage.Wikiplus_Settings) {
													$('#Wikiplus-Setting-Input').val(localStorage.Wikiplus_Settings);
													try {
														var t = JSON.parse(localStorage.Wikiplus_Settings);
														$('#Wikiplus-Setting-Input').val(JSON.stringify(t, null, 2));
													} catch (t) {}
												} else
													$('#Wikiplus-Setting-Input').attr(
														'placeholder',
														P.translate('wikiplus_settings_placeholder')
													);
											}
										);
									o.on(
										'click',
										bt(
											gt().mark(function e() {
												var n, o;
												return gt().wrap(
													function (e) {
														for (;;)
															switch ((e.prev = e.next)) {
																case 0:
																	return (
																		(n = $('<div>')
																			.addClass('Wikiplus-Banner')
																			.text(
																				P.translate('wikiplus_settings_saved')
																			)),
																		(o = $('#Wikiplus-Setting-Input').val()),
																		(e.prev = 2),
																		r({
																			settings: o,
																		}),
																		$('.Wikiplus-InterBox-Content')
																			.html('')
																			.append(n),
																		(e.next = 7),
																		dt(1500)
																	);
																case 7:
																	t.hideSettingsPanel(u), (e.next = 13);
																	break;
																case 10:
																	(e.prev = 10),
																		(e.t0 = e.catch(2)),
																		vt.error(
																			P.translate(
																				'wikiplus_settings_grammar_error'
																			)
																		);
																case 13:
																case 'end':
																	return e.stop();
															}
													},
													e,
													null,
													[[2, 10]]
												);
											})
										)
									),
										i.on('click', function () {
											t.hideSettingsPanel(u);
										});
								},
							},
							{
								key: 'hideSettingsPanel',
								value: function () {
									(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $('body'))
										.find('.Wikiplus-InterBox-Close')
										.trigger('click');
								},
							},
							{
								key: 'bindPreloadEvents',
								value: function (t) {
									$('#toc')
										.children('ul')
										.find('a')
										.each(function (e) {
											$(this).on('mouseover', function () {
												$(this).off('mouseover'),
													t({
														sectionNumber: e + 1,
													});
											});
										});
								},
							},
						]),
						r && wt(e.prototype, r),
						n && wt(e, n),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})(),
				Et = new St();
			function Ot(t) {
				return (
					(Ot =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (t) {
									return typeof t;
								}
							: function (t) {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
								}),
					Ot(t)
				);
			}
			function Pt(t, e) {
				for (var r = 0; r < e.length; r++) {
					var n = e[r];
					(n.enumerable = n.enumerable || !1),
						(n.configurable = !0),
						'value' in n && (n.writable = !0),
						Object.defineProperty(t, jt(n.key), n);
				}
			}
			function jt(t) {
				var e = (function (t, e) {
					if ('object' !== Ot(t) || null === t) return t;
					var r = t[Symbol.toPrimitive];
					if (void 0 !== r) {
						var n = r.call(t, e || 'default');
						if ('object' !== Ot(n)) return n;
						throw new TypeError('@@toPrimitive must return a primitive value.');
					}
					return ('string' === e ? String : Number)(t);
				})(t, 'string');
				return 'symbol' === Ot(e) ? e : String(e);
			}
			var Lt = (function () {
					function t() {
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
						})(this, t);
					}
					var e, r, n;
					return (
						(e = t),
						(r = [
							{
								key: 'getSetting',
								value: function (t) {
									var e,
										r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
										n = r;
									try {
										e = JSON.parse(localStorage.Wikiplus_Settings);
									} catch (t) {
										return;
									}
									try {
										var o = new Function('return ' + e[t]);
										if ('function' != typeof o) return e[t];
										try {
											return !0 === o()(n) ? void 0 : o()(n) || e[t];
										} catch (r) {
											return e[t];
										}
									} catch (n) {
										try {
											for (var i = e[t], a = 0, u = Object.keys(r); a < u.length; a++) {
												var c = u[a];
												i = i.replace('${'.concat(c, '}'), r[c]);
											}
											return i;
										} catch (t) {
											return;
										}
									}
								},
							},
						]),
						r && Pt(e.prototype, r),
						n && Pt(e, n),
						Object.defineProperty(e, 'prototype', {writable: !1}),
						t
					);
				})(),
				_t = new Lt();
			function It(t) {
				return (
					(It =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (t) {
									return typeof t;
								}
							: function (t) {
									return t &&
										'function' == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? 'symbol'
										: typeof t;
								}),
					It(t)
				);
			}
			function Tt(t, e) {
				var r = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e &&
						(n = n.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function Rt(t) {
				for (var e = 1; e < arguments.length; e++) {
					var r = null != arguments[e] ? arguments[e] : {};
					e % 2
						? Tt(Object(r), !0).forEach(function (e) {
								$t(t, e, r[e]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
							: Tt(Object(r)).forEach(function (e) {
									Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
								});
				}
				return t;
			}
			function $t(t, e, r) {
				return (
					(e = (function (t) {
						var e = (function (t, e) {
							if ('object' !== It(t) || null === t) return t;
							var r = t[Symbol.toPrimitive];
							if (void 0 !== r) {
								var n = r.call(t, e || 'default');
								if ('object' !== It(n)) return n;
								throw new TypeError('@@toPrimitive must return a primitive value.');
							}
							return ('string' === e ? String : Number)(t);
						})(t, 'string');
						return 'symbol' === It(e) ? e : String(e);
					})(e)) in t
						? Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0})
						: (t[e] = r),
					t
				);
			}
			function Nt() {
				/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Nt =
					function () {
						return e;
					};
				var t,
					e = {},
					r = Object.prototype,
					n = r.hasOwnProperty,
					o =
						Object.defineProperty ||
						function (t, e, r) {
							t[e] = r.value;
						},
					i = 'function' == typeof Symbol ? Symbol : {},
					a = i.iterator || '@@iterator',
					u = i.asyncIterator || '@@asyncIterator',
					c = i.toStringTag || '@@toStringTag';
				function s(t, e, r) {
					return (
						Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
					);
				}
				try {
					s({}, '');
				} catch (t) {
					s = function (t, e, r) {
						return (t[e] = r);
					};
				}
				function f(t, e, r, n) {
					var i = e && e.prototype instanceof g ? e : g,
						a = Object.create(i.prototype),
						u = new I(n || []);
					return o(a, '_invoke', {value: P(t, r, u)}), a;
				}
				function l(t, e, r) {
					try {
						return {
							type: 'normal',
							arg: t.call(e, r),
						};
					} catch (t) {
						return {
							type: 'throw',
							arg: t,
						};
					}
				}
				e.wrap = f;
				var p = 'suspendedStart',
					h = 'suspendedYield',
					v = 'executing',
					d = 'completed',
					y = {};
				function g() {}
				function m() {}
				function b() {}
				var w = {};
				s(w, a, function () {
					return this;
				});
				var x = Object.getPrototypeOf,
					k = x && x(x(T([])));
				k && k !== r && n.call(k, a) && (w = k);
				var S = (b.prototype = g.prototype = Object.create(w));
				function E(t) {
					['next', 'throw', 'return'].forEach(function (e) {
						s(t, e, function (t) {
							return this._invoke(e, t);
						});
					});
				}
				function O(t, e) {
					function r(o, i, a, u) {
						var c = l(t[o], t, i);
						if ('throw' !== c.type) {
							var s = c.arg,
								f = s.value;
							return f && 'object' == It(f) && n.call(f, '__await')
								? e.resolve(f.__await).then(
										function (t) {
											r('next', t, a, u);
										},
										function (t) {
											r('throw', t, a, u);
										}
									)
								: e.resolve(f).then(
										function (t) {
											(s.value = t), a(s);
										},
										function (t) {
											return r('throw', t, a, u);
										}
									);
						}
						u(c.arg);
					}
					var i;
					o(this, '_invoke', {
						value: function (t, n) {
							function o() {
								return new e(function (e, o) {
									r(t, n, e, o);
								});
							}
							return (i = i ? i.then(o, o) : o());
						},
					});
				}
				function P(e, r, n) {
					var o = p;
					return function (i, a) {
						if (o === v) throw new Error('Generator is already running');
						if (o === d) {
							if ('throw' === i) throw a;
							return {
								value: t,
								done: !0,
							};
						}
						for (n.method = i, n.arg = a; ; ) {
							var u = n.delegate;
							if (u) {
								var c = j(u, n);
								if (c) {
									if (c === y) continue;
									return c;
								}
							}
							if ('next' === n.method) n.sent = n._sent = n.arg;
							else if ('throw' === n.method) {
								if (o === p) throw ((o = d), n.arg);
								n.dispatchException(n.arg);
							} else 'return' === n.method && n.abrupt('return', n.arg);
							o = v;
							var s = l(e, r, n);
							if ('normal' === s.type) {
								if (((o = n.done ? d : h), s.arg === y)) continue;
								return {
									value: s.arg,
									done: n.done,
								};
							}
							'throw' === s.type && ((o = d), (n.method = 'throw'), (n.arg = s.arg));
						}
					};
				}
				function j(e, r) {
					var n = r.method,
						o = e.iterator[n];
					if (o === t)
						return (
							(r.delegate = null),
							('throw' === n &&
								e.iterator.return &&
								((r.method = 'return'), (r.arg = t), j(e, r), 'throw' === r.method)) ||
								('return' !== n &&
									((r.method = 'throw'),
									(r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
							y
						);
					var i = l(o, e.iterator, r.arg);
					if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
					var a = i.arg;
					return a
						? a.done
							? ((r[e.resultName] = a.value),
								(r.next = e.nextLoc),
								'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
								(r.delegate = null),
								y)
							: a
						: ((r.method = 'throw'),
							(r.arg = new TypeError('iterator result is not an object')),
							(r.delegate = null),
							y);
				}
				function L(t) {
					var e = {
						tryLoc: t[0],
					};
					1 in t && (e.catchLoc = t[1]),
						2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
						this.tryEntries.push(e);
				}
				function _(t) {
					var e = t.completion || {};
					(e.type = 'normal'), delete e.arg, (t.completion = e);
				}
				function I(t) {
					(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(L, this), this.reset(!0);
				}
				function T(e) {
					if (e || '' === e) {
						var r = e[a];
						if (r) return r.call(e);
						if ('function' == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var o = -1,
								i = function r() {
									for (; ++o < e.length; )
										if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
									return (r.value = t), (r.done = !0), r;
								};
							return (i.next = i);
						}
					}
					throw new TypeError(It(e) + ' is not iterable');
				}
				return (
					(m.prototype = b),
					o(S, 'constructor', {value: b, configurable: !0}),
					o(b, 'constructor', {value: m, configurable: !0}),
					(m.displayName = s(b, c, 'GeneratorFunction')),
					(e.isGeneratorFunction = function (t) {
						var e = 'function' == typeof t && t.constructor;
						return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
					}),
					(e.mark = function (t) {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(t, b)
								: ((t.__proto__ = b), s(t, c, 'GeneratorFunction')),
							(t.prototype = Object.create(S)),
							t
						);
					}),
					(e.awrap = function (t) {
						return {
							__await: t,
						};
					}),
					E(O.prototype),
					s(O.prototype, u, function () {
						return this;
					}),
					(e.AsyncIterator = O),
					(e.async = function (t, r, n, o, i) {
						void 0 === i && (i = Promise);
						var a = new O(f(t, r, n, o), i);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(function (t) {
									return t.done ? t.value : a.next();
								});
					}),
					E(S),
					s(S, c, 'Generator'),
					s(S, a, function () {
						return this;
					}),
					s(S, 'toString', function () {
						return '[object Generator]';
					}),
					(e.keys = function (t) {
						var e = Object(t),
							r = [];
						for (var n in e) r.push(n);
						return (
							r.reverse(),
							function t() {
								for (; r.length; ) {
									var n = r.pop();
									if (n in e) return (t.value = n), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = T),
					(I.prototype = {
						constructor: I,
						reset: function (e) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = t),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = t),
								this.tryEntries.forEach(_),
								!e)
							)
								for (var r in this)
									't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
						},
						stop: function () {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ('throw' === t.type) throw t.arg;
							return this.rval;
						},
						dispatchException: function (e) {
							if (this.done) throw e;
							var r = this;
							function o(n, o) {
								return (
									(u.type = 'throw'),
									(u.arg = e),
									(r.next = n),
									o && ((r.method = 'next'), (r.arg = t)),
									!!o
								);
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var a = this.tryEntries[i],
									u = a.completion;
								if ('root' === a.tryLoc) return o('end');
								if (a.tryLoc <= this.prev) {
									var c = n.call(a, 'catchLoc'),
										s = n.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return o(a.finallyLoc);
									}
								}
							}
						},
						abrupt: function (t, e) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var i = o;
									break;
								}
							}
							i &&
								('break' === t || 'continue' === t) &&
								i.tryLoc <= e &&
								e <= i.finallyLoc &&
								(i = null);
							var a = i ? i.completion : {};
							return (
								(a.type = t),
								(a.arg = e),
								i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
							);
						},
						complete: function (t, e) {
							if ('throw' === t.type) throw t.arg;
							return (
								'break' === t.type || 'continue' === t.type
									? (this.next = t.arg)
									: 'return' === t.type
										? ((this.rval = this.arg = t.arg),
											(this.method = 'return'),
											(this.next = 'end'))
										: 'normal' === t.type && e && (this.next = e),
								y
							);
						},
						finish: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), y;
							}
						},
						catch: function (t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc === t) {
									var n = r.completion;
									if ('throw' === n.type) {
										var o = n.arg;
										_(r);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield: function (e, r, n) {
							return (
								(this.delegate = {
									iterator: T(e),
									resultName: r,
									nextLoc: n,
								}),
								'next' === this.method && (this.arg = t),
								y
							);
						},
					}),
					e
				);
			}
			function Ct(t, e, r, n, o, i, a) {
				try {
					var u = t[i](a),
						c = u.value;
				} catch (t) {
					return void r(t);
				}
				u.done ? e(c) : Promise.resolve(c).then(n, o);
			}
			function At(t) {
				return function () {
					var e = this,
						r = arguments;
					return new Promise(function (n, o) {
						var i = t.apply(e, r);
						function a(t) {
							Ct(i, n, o, a, u, 'next', t);
						}
						function u(t) {
							Ct(i, n, o, a, u, 'throw', t);
						}
						a(void 0);
					});
				};
			}
			$(
				At(
					Nt().mark(function t() {
						var e, r, n, o, a, u, c, s, f, l;
						return Nt().wrap(function (t) {
							for (;;)
								switch ((t.prev = t.next)) {
									case 0:
										if (
											((e = {}),
											(r = $('.noarticletext').length > 0 && 0 === i.articleId),
											(n = (function () {
												var t = At(
													Nt().mark(function t(r) {
														var n, o, i;
														return Nt().wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		if (
																			((n = r.revisionId), (o = r.title), !e[n])
																		) {
																			t.next = 3;
																			break;
																		}
																		return t.abrupt('return', e[n]);
																	case 3:
																		return (
																			(i = new st({
																				revisionId: n,
																				title: o,
																			})),
																			(t.next = 6),
																			i.init()
																		);
																	case 6:
																		return (e[n] = i), t.abrupt('return', e[n]);
																	case 8:
																	case 'end':
																		return t.stop();
																}
														}, t);
													})
												);
												return function (e) {
													return t.apply(this, arguments);
												};
											})()),
											M.info('Wikiplus now loading. Version: '.concat(i.version)),
											window.mw)
										) {
											t.next = 7;
											break;
										}
										return (
											console.log('Mediawiki JavaScript not loaded or not a Mediawiki website.'),
											t.abrupt('return')
										);
									case 7:
										if (i.userGroups.includes('autoconfirmed')) {
											t.next = 11;
											break;
										}
										return (
											vt.error(P.translate('not_autoconfirmed_user')),
											M.info(P.translate('not_autoconfirmed_user')),
											t.abrupt('return')
										);
									case 11:
										if (i.isArticle && 'view' === i.action) {
											t.next = 14;
											break;
										}
										return M.info('Not an editable page. Stop initialization.'), t.abrupt('return');
									case 14:
										return (
											(window._WikiplusPages = e),
											(o = i.currentPageName),
											(a = i.revisionId),
											(t.next = 19),
											n({
												revisionId: a,
												title: o,
											})
										);
									case 19:
										(u = t.sent),
											(c = (function () {
												var t = At(
													Nt().mark(function t() {
														var e,
															a,
															u,
															c,
															s,
															f,
															l,
															p,
															h,
															v,
															d,
															y,
															g,
															m,
															b,
															w,
															x,
															k = arguments;
														return Nt().wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		if (
																			((a = (e =
																				k.length > 0 && void 0 !== k[0]
																					? k[0]
																					: {}).sectionNumber),
																			(u = e.sectionName),
																			(c = e.targetPageName),
																			!(s = c !== o) ||
																				i.latestRevisionId === i.revisionId)
																		) {
																			t.next = 5;
																			break;
																		}
																		return (
																			M.error(
																				'cross_page_history_revision_edit_warning'
																			),
																			t.abrupt('return')
																		);
																	case 5:
																		if (!s) {
																			t.next = 11;
																			break;
																		}
																		return (
																			(t.next = 8),
																			X.getLatestRevisionIdForPage(c)
																		);
																	case 8:
																		(t.t0 = t.sent), (t.next = 12);
																		break;
																	case 11:
																		t.t0 = i.revisionId;
																	case 12:
																		return (
																			(f = t.t0),
																			(t.next = 15),
																			n({
																				revisionId: f,
																				title: c,
																			})
																		);
																	case 15:
																		return (
																			(l = t.sent),
																			(p = _t.getSetting('defaultSummary', {
																				sectionName: u,
																				sectionNumber: a,
																				sectionTargetName: c,
																			})),
																			(h =
																				p ||
																				(u
																					? '/* '
																							.concat(u, ' */ ')
																							.concat(
																								P.translate(
																									'default_summary_suffix'
																								)
																							)
																					: P.translate(
																							'default_summary_suffix'
																						))),
																			(v = setTimeout(function () {
																				vt.success(P.translate('loading'));
																			}, 200)),
																			(t.next = 21),
																			l.getWikiText({
																				section: a,
																			})
																		);
																	case 21:
																		(d = t.sent),
																			(y =
																				!s &&
																				i.latestRevisionId !== i.revisionId),
																			(g =
																				!0 ===
																					_t.getSetting(
																						'esc_to_exit_quickedit'
																					) ||
																				'true' ===
																					_t.getSetting(
																						'esc_to_exit_quickedit'
																					) ||
																				!0 ===
																					_t.getSetting(
																						'escToExitQuickEdit'
																					) ||
																				'true' ===
																					_t.getSetting(
																						'escToExitQuickEdit'
																					)),
																			(m = _t.getSetting('custom_edit_tags')),
																			(b =
																				location.host.includes(
																					'zh.wikipedia.org'
																				) ||
																				location.host.includes(
																					'zh.m.wikipedia.org'
																				)
																					? ['wikiplus']
																					: []),
																			(w = null != m && m.length ? m : b),
																			clearTimeout(v),
																			vt.empty(),
																			y &&
																				vt.warning(
																					P.translate('history_edit_warning')
																				),
																			(x = s ? !f : r),
																			Et.showQuickEditPanel({
																				title: ''
																					.concat(
																						P.translate('quickedit_topbtn')
																					)
																					.concat(
																						y
																							? P.translate(
																									'history_edit_warning'
																								)
																							: ''
																					),
																				content: x
																					? P.translate('create_page_tip')
																					: d,
																				summary: h,
																				onBack: Et.hideQuickEditPanel,
																				onParse: function (t) {
																					return l.parseWikiText(t);
																				},
																				onEdit: (function () {
																					var t = At(
																						Nt().mark(function t(e) {
																							var r, n, o, i;
																							return Nt().wrap(function (
																								t
																							) {
																								for (;;)
																									switch (
																										(t.prev =
																											t.next)
																									) {
																										case 0:
																											return (
																												(r =
																													e.content),
																												(n =
																													e.summary),
																												(o =
																													e.isMinorEdit),
																												(i = {
																													content:
																														r,
																													config: Rt(
																														Rt(
																															{
																																summary:
																																	n,
																															},
																															-1 !==
																																a
																																? {
																																		section:
																																			a,
																																	}
																																: {}
																														),
																														w.length
																															? {
																																	tags: w.join(
																																		'|'
																																	),
																																}
																															: {}
																													),
																												}),
																												o
																													? (i.config.minor =
																															'true')
																													: (i.config.notminor =
																															'true'),
																												(t.next = 5),
																												l.edit(
																													i
																												)
																											);
																										case 5:
																										case 'end':
																											return t.stop();
																									}
																							}, t);
																						})
																					);
																					return function (e) {
																						return t.apply(this, arguments);
																					};
																				})(),
																				escExit: g,
																			});
																	case 32:
																	case 'end':
																		return t.stop();
																}
														}, t);
													})
												);
												return function () {
													return t.apply(this, arguments);
												};
											})()),
											(s = (function () {
												var t = At(
													Nt().mark(function t() {
														return Nt().wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		Et.showSimpleRedirectPanel({
																			onEdit: (function () {
																				var t = At(
																					Nt().mark(function t(e) {
																						var r, o, a, u, c, s;
																						return Nt().wrap(function (t) {
																							for (;;)
																								switch (
																									(t.prev = t.next)
																								) {
																									case 0:
																										return (
																											(r =
																												e.title),
																											(o =
																												e.forceOverwrite),
																											(a =
																												void 0 !==
																													o &&
																												o),
																											(t.next = 3),
																											n({
																												title: r,
																											})
																										);
																									case 3:
																										return (
																											(u =
																												t.sent),
																											(c =
																												i.currentPageName),
																											(s = {
																												content:
																													'#REDIRECT [['.concat(
																														c,
																														']]'
																													),
																												config: {
																													summary:
																														P.translate(
																															'redirect_from_summary',
																															[
																																r,
																																c,
																															]
																														),
																												},
																											}),
																											a ||
																												(s.config.createonly =
																													'true'),
																											(t.next = 9),
																											u.edit(s)
																										);
																									case 9:
																									case 'end':
																										return t.stop();
																								}
																						}, t);
																					})
																				);
																				return function (e) {
																					return t.apply(this, arguments);
																				};
																			})(),
																			onSuccess: function (t) {
																				var e = t.title;
																				location.href = i.articlePath.replace(
																					/\$1/gi,
																					e
																				);
																			},
																		});
																	case 1:
																	case 'end':
																		return t.stop();
																}
														}, t);
													})
												);
												return function () {
													return t.apply(this, arguments);
												};
											})()),
											(f = (function () {
												var t = At(
													Nt().mark(function t() {
														return Nt().wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		Et.showSettingsPanel({
																			onSubmit: function (t) {
																				var e = t.settings;
																				JSON.parse(e),
																					localStorage.setItem(
																						'Wikiplus_Settings',
																						e
																					);
																			},
																		});
																	case 1:
																	case 'end':
																		return t.stop();
																}
														}, t);
													})
												);
												return function () {
													return t.apply(this, arguments);
												};
											})()),
											(l = (function () {
												var t = At(
													Nt().mark(function t(e) {
														var r;
														return Nt().wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		return (
																			(r = e.sectionNumber),
																			(t.next = 3),
																			u.getWikiText({
																				section: r,
																			})
																		);
																	case 3:
																	case 'end':
																		return t.stop();
																}
														}, t);
													})
												);
												return function (e) {
													return t.apply(this, arguments);
												};
											})()),
											Et.insertTopQuickEditEntry(c),
											Et.insertSectionQuickEditEntries(c),
											Et.insertLinkEditEntries(c),
											Et.insertSimpleRedirectButton(s),
											Et.insertSettingsPanelButton(f),
											Et.bindPreloadEvents(l);
									case 30:
									case 'end':
										return t.stop();
								}
						}, t);
					})
				)
			);
		})();
})();

export {};
