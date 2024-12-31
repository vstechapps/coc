!(function (e) {
    var t = {};
    function n(i) {
      if (t[i]) return t[i].exports;
      var r = (t[i] = { i: i, l: !1, exports: {} });
      return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = e),
      (n.c = t),
      (n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
      }),
      (n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (
          (n.r(i),
            Object.defineProperty(i, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
        )
          for (var r in e)
            n.d(
              i,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return i;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
              return e.default;
            }
            : function () {
              return e;
            };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = "/"),
      n((n.s = 471));
  })({
    23: function (e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      n.d(t, "a", function () {
        return i;
      });
    },
    26: function (e, t, n) {
      "use strict";
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    28: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return r;
        });
      var i = "FLYWIRE_INITIATE_AGENTS_INTEGRATION_EXP",
        r = "FLYWIRE_CLOSE_AGENTS_INTEGRATION_EXP";
    },
    4: function (e, t, n) {
      "use strict";
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
            : (e[t] = n),
          e
        );
      }
      n.d(t, "a", function () {
        return i;
      });
    },
    471: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(4),
        r = n(28),
        o = n(23),
        l = n(26),
        a = { onClose: "onClose" },
        s = function () { },
        u = (function () {
          function e(t) {
            var n = this;
            Object(o.a)(this, e),
              (this.messageHandler = function (e) {
                if (e.data && e.data.type)
                  switch (e.data.type) {
                    case r.a:
                      n.closeCallback();
                  }
              }),
              (this.closeCallback = t[a.onClose] || s),
              this.init();
          }
          return (
            Object(l.a)(e, [
              {
                key: "init",
                value: function () {
                  window.addEventListener("message", this.messageHandler);
                },
              },
              {
                key: "destroy",
                value: function () {
                  window.removeEventListener("message", this.messageHandler);
                },
              },
            ]),
            e
          );
        })(),
        c = navigator.userAgent.indexOf("Chrome") > -1,
        d = navigator.userAgent.indexOf("Safari") > -1,
        f = function () {
          return !!d && !c;
        },
        y = new (function () {
          var e = this,
            t = null,
            n = null,
            o = null,
            l = null,
            s = function () {
              return 640;
            },
            c = function () {
              return 690;
            };
          function d() {
            (n.style.position = "static"),
              (n.style.top = ""),
              (n.style.bottom = ""),
              (n.style.left = ""),
              (n.style.right = ""),
              (n.style.width = Math.min(s(), window.innerWidth) + "px"),
              (n.style.height = Math.min(c(), window.innerHeight) + "px"),
              (o.style.paddingRight = "0"),
              (l.style.borderRadius = "6px");
          }
          (this.init = function () {
            (t = (function () {
              var e = document.createElement("div");
              return (
                (e.style.display = "flex"),
                (e.style.alignItems = "center"),
                (e.style.justifyContent = "center"),
                (e.style.position = "fixed"),
                (e.style.top = 0),
                (e.style.bottom = 0),
                (e.style.left = 0),
                (e.style.right = 0),
                (e.style.zIndex = 2147483647),
                (e.style.backgroundColor = "rgba(56, 73, 91, 0.8)"),
                e
              );
            })()),
              (n = (function () {
                var e = document.createElement("div");
                return (
                  (e.style.display = "flex"),
                  (e.style.flexDirection = "column"),
                  e
                );
              })()),
              (o = (function () {
                var e = document.createElement("div");
                (e.style.width = "2px"),
                  (e.style.height = "20px"),
                  (e.style.marginLeft = "10px"),
                  (e.style.backgroundColor = "white"),
                  (e.style.transform = "rotate(45deg)");
                var t = document.createElement("div");
                (t.style.width = "2px"),
                  (t.style.height = "20px"),
                  (t.style.backgroundColor = "white"),
                  (t.style.transform = "rotate(90deg)");
                var n = document.createElement("a");
                return (
                  (n.style.alignSelf = "flex-end"),
                  (n.style.boxSizing = "border-box"),
                  (n.style.width = "20px"),
                  (n.style.height = "40px"),
                  (n.style.padding = "10px 0"),
                  (n.style.cursor = "pointer"),
                  e.appendChild(t),
                  n.appendChild(e),
                  n.addEventListener("click", function () {
                    return y.close();
                  }),
                  n
                );
              })()),
              (l = (function () {
                var e = document.createElement("iframe");
                return (
                  e.setAttribute(
                    "src",
                    "https://agents-integration.flywire.com/"
                  ),
                  (e.style.width = "100%"),
                  (e.style.flexGrow = "1"),
                  (e.style.border = "none"),
                  (e.style.backgroundColor = "white"),
                  e
                );
              })()),
              n.appendChild(o),
              n.appendChild(l),
              t.appendChild(n);
          }),
            (this.open = function (e, n) {
              this.initCallbackEngine(n),
                d(),
                window.addEventListener("resize", d),
                document.body.appendChild(t);
              var i = "https://agents-integration.flywire.com/";
              l.onload = function () {
                l.contentWindow.focus(),
                  f
                    ? setTimeout(function () {
                      return l.contentWindow.postMessage(
                        { type: r.b, data: e },
                        i
                      );
                    }, 300)
                    : l.contentWindow.postMessage({ type: r.b, data: e }, i);
              };
            }),
            (this.initCallbackEngine = function (e) {
              var t = this.computeMergedCallbacks(e);
              this.cbEngine = new u(t);
            }),
            (this.close = function () {
              window.removeEventListener("resize", d),
                this.cbEngine.destroy(),
                document.body.removeChild(t);
            }),
            (this.flywireCallbacks = Object(i.a)({}, a.onClose, function () {
              e.close();
            })),
            (this.computeMergedCallbacks = function (t) {
              var n = {},
                i = function (i) {
                  var r = a[i];
                  n[r] = function () {
                    "function" === typeof t[r] && t[r](),
                      "function" === typeof e.flywireCallbacks[r] &&
                      e.flywireCallbacks[r]();
                  };
                };
              for (var r in a) i(r);
              return n;
            });
        })(),
        p = y;
      window.FlywireIntegration = new (function () {
        return (
          p.init(),
          {
            initiate: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              p.open(e, t);
            },
          }
        );
      })();
    },
  });