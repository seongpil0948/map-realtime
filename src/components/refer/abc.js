var Vn = Object.defineProperty;
var qn = (n, s, e) =>
  s in n
    ? Vn(n, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e,
      })
    : (n[s] = e);
var p = (n, s, e) => (qn(n, typeof s != "symbol" ? s + "" : s, e), e);
import {
  dN as zs,
  dO as Xn,
  dP as ti,
  dQ as oi,
  dR as Qn,
  dS as Zn,
  dJ as F,
  dT as Me,
  L as fe,
  dU as lt,
  aN as bs,
  dV as Un,
  i as qe,
  cB as cs,
  dW as jn,
  c as G,
  g as Kt,
  cx as es,
  h as pe,
  am as ro,
  j as Te,
  r as N,
  k as A,
  v as q,
  G as Fo,
  s as ft,
  Z as Ye,
  ag as pt,
  x as y,
  f as h,
  I as kt,
  a4 as J,
  a2 as W,
  bk as sn,
  A as oe,
  cQ as ct,
  a_ as ze,
  a9 as Ze,
  a1 as g,
  l as ge,
  F as Be,
  aM as st,
  D as V,
  aJ as nn,
  cA as vt,
  H as Ve,
  E as $e,
  ab as Nt,
  bw as he,
  aa as an,
  K as uo,
  bR as Wt,
  bQ as Gt,
  J as $t,
  C as ue,
  d as Jt,
  a3 as xt,
  aO as Ws,
  aQ as Gs,
  aA as Yn,
  w as Je,
  ai as Hn,
  aH as Kn,
  dI as Jn,
  dv as Cs,
  aI as Es,
  dX as ea,
  d2 as si,
  o as Mt,
  aZ as no,
  cJ as rn,
  aT as Zt,
  B as St,
  ak as ta,
  y as lo,
  X as co,
  z as ho,
  dY as un,
  d8 as oa,
  d4 as ln,
  cR as sa,
  aE as ia,
  p as it,
  _ as nt,
  aB as na,
  ae as aa,
  $ as yt,
  ct as Eo,
  bb as To,
  ah as Po,
  a5 as Ue,
  a6 as ra,
  m as ua,
  a7 as As,
  cu as _t,
  a8 as la,
  a0 as at,
  ds as ca,
  cW as ds,
  cP as da,
  aw as ha,
  cK as so,
  dw as pa,
  aS as fa,
  cS as ga,
  cV as ma,
  aK as cn,
  cv as ya,
  dG as dn,
  n as hn,
  dZ as va,
  cs as _a,
  R as xa,
  d7 as Da,
  db as wa,
  df as ba,
  af as Oo,
  d_ as Ca,
  aL as Ea,
  dE as ii,
  cN as Aa,
} from "./index.0b1d1347.js";
import { Q as pn } from "./QBtnGroup.3bd5a747.js";
import { Q as ka } from "./QPopupProxy.d0cacd58.js";
import { Q as Wo } from "./QBadge.c99ea254.js";
import { u as gt } from "./use-quasar.89a257f3.js";
import { u as Fe } from "./monitoring.842318a3.js";
import { Q as Fa } from "./QImg.333aa49c.js";
import { Q as Pa } from "./QScrollArea.29b22f10.js";
import { r as ni, c as ai, a as Go } from "./constants.d7cfa744.js";
import {
  d as Ut,
  u as Vo,
  e as Sa,
  f as Ta,
  h as fn,
  i as $a,
  j as gn,
  k as qo,
  r as Vs,
  l as ri,
  m as Ma,
  n as Ba,
  o as Ia,
  g as Ra,
  c as La,
} from "./monitoring-service.42782783.js";
import { Q as rt } from "./QChip.4a445f8a.js";
import { Q as Oa } from "./QForm.9f5e5771.js";
import {
  R as It,
  P as Ie,
  a as Na,
  E as $o,
  D as za,
  M as mn,
  A as eo,
  b as yn,
  N as So,
  Q as io,
  _ as Qe,
} from "./QPopupEdit.57baf24d.js";
import { Q as vn } from "./QMarkupTable.00b7e193.js";
import { Q as qs } from "./QSelect.30c8e1e2.js";
import { Q as At } from "./QTooltip.3146d6fb.js";
import { Q as Wa, a as Ga } from "./QFooter.d7075b7b.js";
import { d as Va } from "./vuedraggable.umd.c3b0f280.js";
import {
  o as _n,
  c as xn,
  f as Yt,
  g as qa,
} from "./schedule-service.c936318a.js";
var Xa = (function (n) {
    zs(s, n);
    function s(e, t) {
      return n.call(this) || this;
    }
    return (
      (s.prototype.schedule = function (e, t) {
        return this;
      }),
      s
    );
  })(Xn),
  Xo = {
    setInterval: function (n, s) {
      for (var e = [], t = 2; t < arguments.length; t++)
        e[t - 2] = arguments[t];
      var o = Xo.delegate;
      return o != null && o.setInterval
        ? o.setInterval.apply(o, ti([n, s], oi(e)))
        : setInterval.apply(void 0, ti([n, s], oi(e)));
    },
    clearInterval: function (n) {
      var s = Xo.delegate;
      return ((s == null ? void 0 : s.clearInterval) || clearInterval)(n);
    },
    delegate: void 0,
  },
  Qa = (function (n) {
    zs(s, n);
    function s(e, t) {
      var o = n.call(this, e, t) || this;
      return (o.scheduler = e), (o.work = t), (o.pending = !1), o;
    }
    return (
      (s.prototype.schedule = function (e, t) {
        var o;
        if ((t === void 0 && (t = 0), this.closed)) return this;
        this.state = e;
        var i = this.id,
          a = this.scheduler;
        return (
          i != null && (this.id = this.recycleAsyncId(a, i, t)),
          (this.pending = !0),
          (this.delay = t),
          (this.id =
            (o = this.id) !== null && o !== void 0
              ? o
              : this.requestAsyncId(a, this.id, t)),
          this
        );
      }),
      (s.prototype.requestAsyncId = function (e, t, o) {
        return (
          o === void 0 && (o = 0), Xo.setInterval(e.flush.bind(e, this), o)
        );
      }),
      (s.prototype.recycleAsyncId = function (e, t, o) {
        if (
          (o === void 0 && (o = 0),
          o != null && this.delay === o && this.pending === !1)
        )
          return t;
        t != null && Xo.clearInterval(t);
      }),
      (s.prototype.execute = function (e, t) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var o = this._execute(e, t);
        if (o) return o;
        this.pending === !1 &&
          this.id != null &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (s.prototype._execute = function (e, t) {
        var o = !1,
          i;
        try {
          this.work(e);
        } catch (a) {
          (o = !0), (i = a || new Error("Scheduled action threw falsy error"));
        }
        if (o) return this.unsubscribe(), i;
      }),
      (s.prototype.unsubscribe = function () {
        if (!this.closed) {
          var e = this,
            t = e.id,
            o = e.scheduler,
            i = o.actions;
          (this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            Qn(i, this),
            t != null && (this.id = this.recycleAsyncId(o, t, null)),
            (this.delay = null),
            n.prototype.unsubscribe.call(this);
        }
      }),
      s
    );
  })(Xa),
  ui = (function () {
    function n(s, e) {
      e === void 0 && (e = n.now),
        (this.schedulerActionCtor = s),
        (this.now = e);
    }
    return (
      (n.prototype.schedule = function (s, e, t) {
        return (
          e === void 0 && (e = 0),
          new this.schedulerActionCtor(this, s).schedule(t, e)
        );
      }),
      (n.now = Zn.now),
      n
    );
  })(),
  Za = (function (n) {
    zs(s, n);
    function s(e, t) {
      t === void 0 && (t = ui.now);
      var o = n.call(this, e, t) || this;
      return (o.actions = []), (o._active = !1), o;
    }
    return (
      (s.prototype.flush = function (e) {
        var t = this.actions;
        if (this._active) {
          t.push(e);
          return;
        }
        var o;
        this._active = !0;
        do if ((o = e.execute(e.state, e.delay))) break;
        while ((e = t.shift()));
        if (((this._active = !1), o)) {
          for (; (e = t.shift()); ) e.unsubscribe();
          throw o;
        }
      }),
      s
    );
  })(ui),
  Ua = new Za(Qa);
function ja(n, s) {
  return _n(function (e, t) {
    var o = 0;
    e.subscribe(
      xn(t, function (i) {
        t.next(n.call(s, i, o++));
      })
    );
  });
}
function Ya(n) {
  return (
    n === void 0 && (n = Ua),
    _n(function (s, e) {
      var t = n.now();
      s.subscribe(
        xn(e, function (o) {
          var i = n.now(),
            a = i - t;
          (t = i), e.next(new Ha(o, a));
        })
      );
    })
  );
}
var Ha = (function () {
  function n(s, e) {
    (this.value = s), (this.interval = e);
  }
  return n;
})();
class Mo {
  constructor(s) {
    p(this, "aligns$", []);
    p(this, "waitings$", []);
    p(this, "mapTool");
    p(this, "shapeGroup");
    p(this, "shape");
    p(this, "text");
    p(this, "transformer");
    (this.mapTool = s), console.log("[Shape]::init", this);
  }
  remove(s = !1) {
    s ? this.shapeGroup.destroy() : this.shapeGroup.destroyChildren();
  }
  pulse() {
    var s;
    (s = this.shape) == null ||
      s.to({
        scaleX: 1.5,
        scaleY: 1.5,
        onFinish: () => {
          this.shape.to({
            scaleX: 1,
            scaleY: 1,
          });
        },
      });
  }
  indicate(s) {
    s
      ? this.shape.scale({
          x: 1.25,
          y: 1.25,
        })
      : this.shape.scale({
          x: 1,
          y: 1,
        });
  }
  getCenterPontOfStageByShape() {
    return this.shape
      ? {
          x: (this.shape.x() - window.innerWidth / 2) * -1,
          y: (this.shape.y() - window.innerHeight / 2) * -1,
        }
      : void 0;
  }
  bindMouseOverEvent(s, e) {
    s
      ? (this.shapeGroup.on("mouseover", () => {
          (this.shape.getStage().container().style.cursor = "pointer"),
            Reflect.apply(e, this, [!0]);
        }),
        this.shapeGroup.on("mouseleave", () => {
          (this.shape.getStage().container().style.cursor = "auto"),
            Reflect.apply(e, this, [!1]);
        }))
      : (this.shapeGroup.off("mouseover"), this.shapeGroup.off("mouseleave"));
  }
  bindClickEvent(s, e) {
    s
      ? (this.shapeGroup.on("click", (t) => {
          this.mapTool.selectedResource$.next(e);
        }),
        this.shapeGroup.on("dblclick contextmenu", (t) => {
          t.evt.preventDefault(), console.log("[Shape]::dblClick", t);
          const o = this.shapeGroup.getStage(),
            i = o == null ? void 0 : o.getPointerPosition().x,
            a = o == null ? void 0 : o.getPointerPosition().y,
            r = {
              x: i,
              y: a,
            };
          this.mapTool.selectedPopup$.next({
            point: r,
            resourceId: e,
          });
        }))
      : this.shapeGroup.off("click dblclick contextmenu");
  }
  positionText(s, e, t, o) {
    const i = "position_name",
      a = this.mapTool.transformPoseM2PX(s),
      r = new F.Text({
        name: i,
        x: a.x,
        y: a.y,
        text: e,
        fontSize: o || 10,
        fill: t || "#272727",
        draggable: !1,
      });
    return r.offsetX(r.width() / 2), r.offsetY(-6), r;
  }
  align(s, e, t = !1, o = 0) {
    const i = `align-${o}`,
      a = this.mapTool.transformPoseM2PX(s),
      r = 2.5,
      u = new F.Arrow({
        resource: s,
        name: "Sub",
        x: a.x,
        y: a.y,
        rotation: a.degree,
        points: [0, 0, r * 2 + 1, 0],
        pointerWidth: r,
        pointerLength: r,
        strokeWidth: r,
        fill: e,
        stroke: e,
        offset: {
          x: 8.5,
          y: 0,
        },
        draggable: t,
      });
    return t && this.aligns$.push(new Me()), t && u.id(i), u;
  }
  locationWaiting(s, e, t) {
    const o = this.mapTool.transformPoseM2PX(s),
      i = new F.Line({
        resource: s,
        name: "Sub",
        x: o.x,
        y: o.y,
        rotation: o.degree,
        points: [0, 0, 5, 2, 0, 4],
        offsetX: 6,
        offsetY: 2,
        fill: e,
        stroke: e,
        strokeWidth: 2,
        closed: !0,
        draggable: t,
      });
    return t && this.waitings$.push(new Me()), i;
  }
  changeResourcePose(s, e, t, o) {
    const i = o != null ? o : 0;
    this.mapTool.changePoseByPointPX2M(s, e),
      this.mapTool.changePoseByDegree(s, t - i);
  }
  changeResourcePoseByDelta(s, e, t, o = 0) {
    this.mapTool.changePoseByDeltaPX2M(s, e, t, o);
  }
}
const Ka = "rgba(81,81,81,0.5)";
class Xs extends Mo {
  constructor(e) {
    super(e);
    p(this, "polygon$");
    p(this, "editorGroup");
    p(this, "editReset");
    p(this, "dragPoints");
    p(this, "dragPointTexts");
    p(this, "areaLines");
    this.polygon$ = new Me();
  }
  pulse() {
    this.text.to({
      scaleX: 1.5,
      scaleY: 1.5,
      onFinish: () => {
        this.text.to({
          scaleX: 1,
          scaleY: 1,
        });
      },
    });
  }
  indicate(e) {
    var t, o;
    e
      ? (t = this.text) == null ||
        t.scale({
          x: 1.25,
          y: 1.25,
        })
      : (o = this.text) == null ||
        o.scale({
          x: 1,
          y: 1,
        });
  }
  getCenterPontOfStageByPolygon(e) {
    if (!this.shape) return;
    const t = this.mapTool.getCentroidM2PX(e.polygon);
    return {
      x: (t.x - window.innerWidth / 2) * -1,
      y: (t.y - window.innerHeight / 2) * -1,
    };
  }
  textOnPolygon(e, t = "#272727", o = 12, i = !1) {
    const a = `name_${e.id}`,
      r = this.mapTool.getCentroidM2PX(e.polygon),
      u = 0,
      l = i && e.name.length > 13 ? `${e.name.substring(0, 13)}...` : e.name,
      c = o,
      d = new F.Text({
        id: a,
        name: "Title",
        ...r,
        text: l,
        offsetY: 10,
        fontSize: c,
        fill: t,
      });
    return d.rotation(u), d.offsetX(d.width() / 2), d;
  }
  polygon(e, t = !1) {
    const o = t ? "zone_edit" : `zone_${e.id}`,
      i = Ka,
      a = [];
    return (
      e.polygon.map((l) => {
        const c = this.mapTool.transformPointM2PX(l);
        a.push(c.x), a.push(c.y);
      }),
      new F.Line({
        id: o,
        points: a,
        stroke: i,
        strokeWidth: 1,
        opacity: this.mapTool.getOpacity(),
        closed: !0,
      })
    );
  }
  setPolygonEditor(e, t) {
    (this.editorGroup = new F.Group()),
      (this.dragPoints = []),
      (this.dragPointTexts = []),
      (this.areaLines = []);
    const o = this.shape;
    o.fill("rgba(255,0,0,0.07"), o.draggable(!0);
    let i = 0,
      a = 0;
    o.on("dragstart", () => {
      (i = o.x()), (a = o.y()), console.log("@@_________[dragstart]", i, a);
    }),
      o.on("dragmove", () => {
        const l = o.x() - i,
          c = o.y() - a;
        if (
          ((i = o.x()),
          (a = o.y()),
          this.editorGroup.getChildren().map((d) => {
            d.x(d.x() + l), d.y(d.y() + c);
          }),
          this.shapeGroup.getChildren().map((d) => {
            if (d != this.shape && d != this.editorGroup)
              if (t && d.getClassName() == "Arrow") {
                const f = d,
                  v = f.points();
                f.points([v[0] + l, v[1] + c, v[2] + l, v[3] + c]);
              } else
                d.move({
                  x: l,
                  y: c,
                });
          }),
          t)
        )
          this.mapTool.changePolygonNNodesPoseByDelta(e.polygon, t, l, c);
        else {
          const d = e;
          this.mapTool.changeZonePoseByDelta(d.polygon, l, c, d.escapePose);
        }
        this.polygon$.next(e.polygon);
      });
    const r = e.polygon,
      u = r.length - 1;
    r.forEach((l, c) => {
      const d = c == u ? 0 : c + 1,
        f = this.mapTool.transformPointM2PX(l),
        v = this.mapTool.transformPointM2PX(r[d]),
        w = new F.Rect({
          _index: c,
          ...f,
          width: 12,
          height: 12,
          offsetX: 6,
          offsetY: 6,
          fill: "orange",
          stroke: "#ff0000",
          strokeWidth: 2,
          draggable: !0,
        });
      this.dragPoints.push(w);
      const E = new F.Text({
        _index: c,
        ...f,
        text: `${c + 1}`,
        fontSize: 12,
        fill: "#000000",
        offsetX: 15,
        offsetY: 18,
      });
      this.dragPointTexts.push(E);
      const C = new F.Line({
        _index: c,
        points: [f.x, f.y, v.x, v.y],
        stroke: "orange",
        strokeWidth: 6,
        closed: !1,
        draggable: !1,
      });
      this.areaLines.push(C), this.editorGroup.add(C);
      let x = 0,
        b = 0;
      w.on("mouseenter", () => {
        this.shape.getStage().container().style.cursor = "pointer";
      }),
        w.on("mouseleave", () => {
          this.shape.getStage().container().style.cursor = "auto";
        }),
        w.on("dblclick", () => {
          e.polygon.length != 3 && this.modifyPolygon(e, c, !1);
        }),
        w.on("dragstart", () => {
          (x = w.x()), (b = w.y());
        }),
        w.on("dragmove", () => {
          const m = w.x() - x,
            _ = w.y() - b;
          (x = w.x()), (b = w.y());
          const D = this.shape,
            k = D.points()[c * 2] + m,
            O = D.points()[c * 2 + 1] + _;
          D.points().splice(c * 2, 2, k, O),
            this.dragAreaLineByIndexNDelta(e.polygon, c, m, _),
            this.dragPointTextByIndexNDelta(c, m, _),
            this.mapTool.changePolygonPoseByIndexNDelta(e.polygon, c, m, _),
            this.polygon$.next(e.polygon);
        }),
        C.on("mouseenter", () => {
          (this.shape.getStage().container().style.cursor = "pointer"),
            this.displayButtonOnLine(e, c);
        }),
        C.on("mouseleave", () => {
          this.destroyButtonOnLine(c),
            (this.shape.getStage().container().style.cursor = "auto");
        }),
        C.on("click", () => {
          this.modifyPolygon(e, c, !0);
        });
    }),
      this.dragPoints.map((l) => this.editorGroup.add(l)),
      this.dragPointTexts.map((l) => this.editorGroup.add(l)),
      this.shapeGroup.add(this.editorGroup);
  }
  removePolygonEditor() {
    const e = this.shape;
    e.fill("rgba(255,0,0,0.01"),
      e.draggable(!1),
      e.off("dragstart dragmove"),
      this.editorGroup.destroy();
  }
  modifyPolygon(e, t, o) {
    const i = e.polygon;
    if (o) {
      const a = e.polygon.length - 1,
        r = i[t],
        u = t == a ? i[0] : i[t + 1],
        l = {
          x: (r.x + u.x) / 2,
          y: (r.y + u.y) / 2,
        };
      i.splice(t + 1, 0, l);
    } else i.splice(t, 1);
    this.editReset(), this.polygon$.next(e.polygon);
  }
  dragAreaLineByIndexNDelta(e, t, o, i) {
    const a = e.length - 1,
      r = t == 0 ? this.areaLines[a] : this.areaLines[t - 1],
      u = this.areaLines[t];
    r.points().splice(2, 2, r.points()[2] + o, r.points()[3] + i),
      u.points().splice(0, 2, u.points()[0] + o, u.points()[1] + i);
  }
  dragPointTextByIndexNDelta(e, t, o) {
    this.dragPointTexts[e].move({
      x: t,
      y: o,
    });
  }
  displayButtonOnLine(e, t, o) {
    if (this.editorGroup.find(`#b_${t}`)[0]) return;
    const a = `b_${t}`,
      u = this.areaLines[t].points(),
      l = {
        x: this.shape.x() + (u[0] + u[2]) / 2,
        y: this.shape.y() + (u[1] + u[3]) / 2,
      },
      c = new F.Text({
        id: a,
        ...l,
        offsetX: 6,
        offsetY: 5,
        text: "[+]",
        fontSize: 10,
        fill: "red",
      });
    c.on("click", () => {
      this.modifyPolygon(e, t, !0);
    }),
      c.on("mouseenter", () => {
        (this.shape.getStage().container().style.cursor = "pointer"),
          this.displayButtonOnLine(e, t);
      }),
      c.on("mouseleave", () => {
        (this.shape.getStage().container().style.cursor = "auto"),
          this.destroyButtonOnLine(t);
      }),
      this.editorGroup.add(c);
  }
  destroyButtonOnLine(e) {
    const t = this.editorGroup.find(`#b_${e}`)[0];
    t == null || t.destroy();
  }
}
const Ja = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "FMZ",
};
class li {
  constructor(s) {
    p(this, "pose");
    p(this, "connect");
    (this.pose = new Ie(s.pose)), (this.connect = s.connect);
  }
  serialize() {
    return {
      pose: this.pose.serialize(),
      connect: this.connect,
    };
  }
}
class xo {
  constructor(s) {
    p(this, "index");
    p(this, "pose");
    p(this, "type");
    p(this, "name");
    p(this, "hasOption", !1);
    p(this, "toleranceRadius", 0);
    p(this, "maxSpeed", 0);
    p(this, "maxAccel", 0);
    p(this, "angularSpeed", 0);
    var e, t;
    (this.index = s.index),
      (this.pose = new Na(s.pose)),
      (this.type = (e = s.type) != null ? e : ""),
      (this.name = (t = s.name) != null ? t : ""),
      s.option &&
        ((this.hasOption = !0),
        (this.toleranceRadius = s.option.tolerance_radius),
        (this.maxSpeed = s.option.max_speed),
        (this.maxAccel = s.option.max_accel),
        (this.angularSpeed = s.option.angular_speed));
  }
  static getDefaultData(s, e = 0) {
    return {
      index: e,
      pose: {
        x: s.x,
        y: s.y,
        theta: 0,
        degree: 0,
      },
      type: "default",
      name: "",
    };
  }
  serialize() {
    const s = {
      index: this.index,
      type: this.type,
      name: this.name,
      pose: this.pose.serialize(this.type == "charge" || this.type == "work"),
    };
    if (this.hasOption) {
      const e = {
        tolerance_radius: this.toleranceRadius,
        max_speed: this.maxSpeed,
        max_accel: this.maxAccel,
        angular_speed: this.angularSpeed,
      };
      s.option = e;
    }
    return s;
  }
}
class jt extends $o {
  constructor(e) {
    super(e);
    p(this, "hasOption", !1);
    p(this, "backward", !1);
    p(this, "maxSpeed", 0);
    p(this, "maxAccel", 0);
    p(this, "angularSpeed", 0);
    e.option &&
      ((this.hasOption = !0),
      (this.backward = e.option.backward),
      (this.maxSpeed = e.option.max_speed),
      (this.maxAccel = e.option.max_accel),
      (this.angularSpeed = e.option.angular_speed));
  }
  static getDefaultData(e, t) {
    return {
      from: e,
      to: t,
    };
  }
  serialize() {
    const e = {
      ...super.serialize(),
    };
    if (this.hasOption) {
      const t = {
        backward: this.backward,
        max_speed: this.maxSpeed,
        max_accel: this.maxAccel,
        angular_speed: this.angularSpeed,
      };
      e.option = t;
    }
    return e;
  }
}
class Do extends It {
  constructor(e, t) {
    var o, i, a, r, u, l, c, d;
    super(e, t);
    p(this, "polygon");
    p(this, "nodes", []);
    p(this, "edges", []);
    p(this, "entryPoints", []);
    p(this, "exitPoints", []);
    p(this, "waitingQueues", []);
    p(this, "markers", []);
    p(this, "preemptNodeLength");
    p(this, "velocity");
    p(this, "detour");
    p(this, "delay");
    p(this, "workingStations", []);
    p(this, "chargingStations", []);
    p(this, "shape");
    p(this, "fmzService");
    (this.resourceType = "FMZ"),
      (this.polygon = [...e.polygon]),
      e.nodes.forEach((f) => this.nodes.push(new xo(f))),
      e.edges.forEach((f) => this.edges.push(new jt(f))),
      (o = e.entry_points) == null ||
        o.forEach((f) => this.entryPoints.push(new li(f))),
      (i = e.exit_points) == null ||
        i.forEach((f) => this.exitPoints.push(new li(f))),
      (a = e.waiting_queues) == null ||
        a.forEach((f) =>
          this.waitingQueues.push({
            waitingQueue: f.waiting_queue,
            connectedNode: f.connected_node,
            oldWaitingQueue: f.waiting_queue,
          })
        ),
      (r = e.markers) == null ||
        r.forEach((f) =>
          this.markers.push({
            marker: f.marker,
            connectedNode: f.connected_node,
          })
        ),
      (this.preemptNodeLength =
        (u = e.configs.preempt_node_length) != null ? u : 3),
      (this.velocity = (l = e.configs.velocity) != null ? l : 1),
      (this.detour = (c = e.configs.detour) != null ? c : 5),
      (this.delay = (d = e.configs.delay) != null ? d : 1),
      (this.shape = new or(this, t));
  }
  setFmzService(e) {
    this.fmzService = e;
  }
  static getDefaultData(e, t) {
    return {
      ...Ja,
      map: e,
      polygon: [
        {
          x: t.x - 3,
          y: t.y + 3,
        },
        {
          x: t.x + 3,
          y: t.y + 3,
        },
        {
          x: t.x + 3,
          y: t.y - 3,
        },
        {
          x: t.x - 3,
          y: t.y - 3,
        },
      ],
      nodes: [],
      edges: [],
      entry_points: [],
      exit_points: [],
      configs: {
        preempt_node_length: 3,
        velocity: 1,
        detour: 5,
        delay: 1,
      },
      working_stations: [],
      charging_stations: [],
      waiting_queues: [],
      markers: [],
    };
  }
  serialize() {
    const e = this.serializeBase(),
      t = [],
      o = [];
    this.nodes.forEach((c) => t.push(c.serialize())),
      this.edges.forEach((c) => o.push(c.serialize()));
    const i = [],
      a = [];
    this.entryPoints.forEach((c) => i.push(c.serialize())),
      this.exitPoints.forEach((c) => a.push(c.serialize()));
    const r = [],
      u = [];
    return (
      this.waitingQueues.forEach((c) =>
        r.push({
          waiting_queue: c.waitingQueue,
          connected_node: c.connectedNode,
        })
      ),
      this.markers.forEach((c) =>
        u.push({
          marker: c.marker,
          connected_node: c.connectedNode,
        })
      ),
      {
        ...e,
        polygon: [...this.polygon],
        nodes: t,
        edges: o,
        entry_points: i,
        exit_points: a,
        configs: {
          preempt_node_length: this.preemptNodeLength,
          velocity: this.velocity,
          detour: this.detour,
          delay: this.delay,
        },
        working_stations: [],
        charging_stations: [],
        waiting_queues: r,
        markers: u,
      }
    );
  }
  getNodeByIndex(e) {
    return this.nodes.find((t) => t.index == e);
  }
  getEdgeByIndex(e, t) {
    return this.edges.find((o) => o.from == e && o.to == t);
  }
  getWaitingQueueById(e) {
    return this.fmzService.stageService.resourceStore.get(e);
  }
  async create(e) {
    return (
      console.log("[FMZ]::create method::create FMZ"), await super.create(e)
    );
  }
  async update(e) {
    return (
      console.log("[FMZ]::update method::create FMZ"), await super.update(e)
    );
  }
  async created() {
    console.log("[FMZ]::after create method");
    for (const e of this.waitingQueues)
      if (e.waitingQueue) {
        const t = this.mapTool.resourceStore.get(e.waitingQueue);
        t.connectResource(this.id);
        const o = t == null ? void 0 : t.serialize();
        t == null || t.update(o);
      }
  }
  async updated() {
    console.log("[FMZ]::after update method");
    const e = [];
    for (const t of this.waitingQueues)
      if (t.oldWaitingQueue !== t.waitingQueue) {
        if (t.waitingQueue) {
          const o = this.mapTool.resourceStore.get(t.waitingQueue),
            i = e.find((a) => a.target.id === o.id);
          i
            ? !i.link && (i.link = !0)
            : e.push({
                target: o,
                link: !0,
              });
        }
        if (t.oldWaitingQueue) {
          const o = this.mapTool.resourceStore.get(t.oldWaitingQueue);
          e.find((a) => a.target.id === o.id) ||
            e.push({
              target: o,
              link: !1,
            });
        }
      }
    e.forEach((t) => {
      const o = t.target;
      t.link ? o.connectResource(this.id) : o.disconnectResource(this.id);
      const i = o == null ? void 0 : o.serialize();
      o == null || o.update(i);
    });
  }
  async deleted() {
    console.log("[FMZ]::after delete method");
    for (const e of this.waitingQueues)
      if (e.waitingQueue) {
        const t = this.mapTool.resourceStore.get(e.waitingQueue);
        t.disconnectResource(this.id);
        const o = t == null ? void 0 : t.serialize();
        t == null || t.update(o);
      }
  }
  disconnectWaitingQueue(e) {
    const t = this.waitingQueues.findIndex((o) => o.waitingQueue == e);
    t > -1 && this.waitingQueues.splice(t, 1);
  }
}
const Et = 10,
  Qo = 2,
  er = "blue",
  Ct = {
    entry: "red",
    exit: "blue",
    work: "green",
    way: "#5E5E62",
    default: "#5E5E62",
  },
  hs = 0.65,
  tr = 2,
  ps = 5,
  fs = 4;
class or extends Xs {
  constructor(e, t) {
    super(t);
    p(this, "poi");
    p(this, "editMode", "area");
    p(this, "editTarget");
    p(this, "maxNodeIndex", -1);
    p(this, "isNodeDragging", !1);
    p(this, "draggingNodeIndex", -1);
    p(this, "editingStatus$");
    p(this, "node$");
    p(this, "nodeShapes", new Map());
    p(this, "edgeShapes", new Map());
    p(this, "toolGroup", new F.Group());
    (this.poi = e),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: "FMZ",
      })),
      (this.editTarget = -1),
      (this.editingStatus$ = new Me()),
      (this.node$ = new Me());
  }
  draw() {
    this.shapeGroup.destroyChildren(),
      (this.shape = this.polygon(this.poi)),
      this.shape.stroke(er),
      this.shape.strokeWidth(4),
      (this.text = this.textOnPolygon(this.poi)),
      this.shape && this.shapeGroup.add(this.shape),
      this.text && this.shapeGroup.add(this.text);
    const e = this.poi.nodes,
      t = this.poi.edges,
      o = this.poi.waitingQueues || [];
    return (
      e.forEach((i) => this.node(i)),
      t.forEach((i) => this.edge(i)),
      o.forEach((i) => this.waitingQueueConnection(i)),
      this.shape && this.bindMouseOverEvent(!0, this.indicate),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    if (
      (console.log(
        "[FMZ-shape]::edit",
        this.poi,
        this.editMode,
        this.editTarget
      ),
      this.shapeGroup.destroyChildren(),
      (this.shape = this.polygon(this.poi, this.editMode == "area")),
      this.shape && this.shapeGroup.add(this.shape),
      this.shapeGroup.moveToTop(),
      this.editMode == "area")
    ) {
      const e = this.poi.nodes,
        t = this.poi.edges;
      e.forEach((o) => this.node(o)),
        t.forEach((o) => this.edge(o)),
        (this.editReset = this.edit),
        this.setPolygonEditor(this.poi, e);
    } else {
      this.setGraphEditor();
      const e = this.poi.nodes,
        t = this.poi.edges;
      e.forEach((o) => this.node(o, !0)), t.forEach((o) => this.edge(o, !0));
    }
    return this.shapeGroup;
  }
  setEditMode(e) {
    this.editMode = e;
  }
  setEditTarget(e, t) {
    if (((this.editMode = e), (this.editTarget = t), this.editMode == "node")) {
      const o = this.editTarget,
        i = this.poi.getNodeByIndex(o);
      i && this.setNodeEditor(i);
    }
    if (this.editMode == "edge") {
      const o = this.editTarget;
      console.log(
        "[FMZ-shape]::setEditTarget",
        this.editMode,
        this.editTarget,
        o
      ),
        o && this.setEdgeEditor(o);
    }
  }
  move() {
    this.edit();
  }
  getCenterPontOfStageByShape() {
    return this.getCenterPontOfStageByPolygon(this.poi);
  }
  node(e, t = !1) {
    t && (this.maxNodeIndex = Math.max(this.maxNodeIndex, e.index));
    const o = e.pose,
      i = this.mapTool.transformPointM2PX(o),
      a = Ct[e.type],
      r = new F.Circle({
        x: i.x,
        y: i.y,
        radius: Et,
        fill: t ? "" : "#C7C6CA",
        stroke: a,
        strokeWidth: Qo,
        opacity: t ? 0.75 : hs,
        draggable: t || !1,
      }),
      u = e.type == "default" || e.type == "way" ? "way" : e.type,
      l = Et * 2,
      c = new Image(),
      d = new F.Image({
        x: i.x,
        y: i.y,
        width: l,
        height: l,
        image: c,
        rotation: e.pose.degree,
        draggable: !1,
      });
    d.offsetX(l / 2),
      d.offsetY(l / 2),
      (c.onload = () => {
        d.image(c);
      }),
      (c.src = `/monitoring/poi/node_${u}.svg`);
    const f = e.index.toString(),
      v = new F.Text({
        x: i.x,
        y: i.y,
        text: f,
        fontSize: 8,
        opacity: t ? 1 : hs,
        fill: "#000000",
      });
    v.offsetX(v.width() / 2), v.offsetY(4);
    const w = e.name,
      E = new F.Text({
        x: i.x,
        y: i.y,
        text: w,
        fontSize: 10,
        opacity: t ? 1 : hs,
        fill: "#272727",
      });
    if ((E.offsetX(E.width() / 2), E.offsetY(-10), t)) {
      const C = [],
        x = [];
      r.on("dragstart", () => {
        this.poi.edges.forEach((m) => {
          m.from == e.index && C.push(m), m.to == e.index && x.push(m);
        }),
          this.removeNodeEditor(),
          this.removeEdgeEditor(),
          this.editingStatus$.next({
            mode: "node",
            target: e.index,
          });
      }),
        r.on("dragmove", () => {
          const b = r.x(),
            m = r.y();
          v.x(b),
            v.y(m),
            d.x(b),
            d.y(m),
            E.x(b),
            E.y(m),
            C.map((D) => {
              const k = this.edgeShapes.get(D),
                O = this.getNodeByIndex(D.to),
                Q = this.mapTool.transformPointM2PX(O.pose),
                X = this.getArrowEndPoint(Q, {
                  x: b,
                  y: m,
                }),
                B = this.getArrowEndPoint(
                  {
                    x: b,
                    y: m,
                  },
                  Q
                );
              k == null || k.points([X.x, X.y, B.x, B.y]);
            }),
            x.map((D) => {
              const k = this.edgeShapes.get(D),
                O = this.getNodeByIndex(D.from),
                Q = this.mapTool.transformPointM2PX(O.pose),
                X = this.getArrowEndPoint(
                  {
                    x: b,
                    y: m,
                  },
                  Q
                ),
                B = this.getArrowEndPoint(Q, {
                  x: b,
                  y: m,
                });
              k == null || k.points([X.x, X.y, B.x, B.y]);
            });
          const _ = this.mapTool.transformPointPX2M({
            x: b,
            y: m,
          });
          (e.pose.x = _.x), (e.pose.y = _.y), this.node$.next(e);
        }),
        r.on("dragend", (b) => {
          (C.length = 0),
            (x.length = 0),
            this.setNodeEditor(e),
            (this.shape.getStage().container().style.cursor = "crosshair");
        }),
        r.on("click", (b) => {
          this.editTarget != e.index &&
            (console.log("@@@___[FMZ-Shape]::node::click", b, e),
            this.removeNodeEditor(),
            this.removeEdgeEditor(),
            this.setNodeEditor(e),
            this.editingStatus$.next({
              mode: "node",
              target: e.index,
            }));
        }),
        r.on("mouseup", (b) => {
          if (
            (console.log("@@@___[FMZ-Shape]::node::mouse-up", b, e),
            this.isNodeDragging)
          ) {
            if (
              ((this.isNodeDragging = !1),
              this.isExistingEdge(this.draggingNodeIndex, e.index))
            )
              return;
            const m = new jt({
              from: this.draggingNodeIndex,
              to: e.index,
            });
            this.poi.edges.push(m),
              this.edge(m, !0),
              this.removeNodeEditor(),
              this.editingStatus$.next({
                mode: "edge",
                target: m,
              });
          }
        }),
        r.on("dblclick", (b) => {
          console.log("@@@___[FMZ-Shape]::node::double-click", b, e),
            (b.cancelBubble = !0),
            this.editingStatus$.next({
              mode: "del-node",
              target: e.index,
            });
        });
    }
    e.type !== "default" && v.opacity(0),
      t
        ? (this.shapeGroup.add(E),
          r.opacity(0),
          this.shapeGroup.add(d).add(v).add(r))
        : (this.shapeGroup.add(E),
          r.opacity(0),
          this.shapeGroup.add(d).add(v).add(r)),
      this.nodeShapes.set(e.index, [r, v, E, d]);
  }
  isExistingEdge(e, t) {
    return this.poi.edges.findIndex((a) => a.from == e && a.to == t) > -1;
  }
  setNodeEditor(e) {
    (this.editMode = "node"), (this.editTarget = e.index);
    const t = e.pose,
      o = this.mapTool.transformPointM2PX(t),
      i = this.nodeShapes.get(e.index);
    i && (i[0].stroke("#0055D3"), i[0].opacity(1)),
      this.makeNodeTool(e, o, 3),
      this.makeNodeTool(e, o, 6),
      this.makeNodeTool(e, o, 9),
      this.makeNodeTool(e, o, 12),
      this.shapeGroup.add(this.toolGroup),
      this.toolGroup.moveToTop(),
      (this.shape.getStage().container().style.cursor = "crosshair");
  }
  removeNodeEditor() {
    if (this.editMode !== "node") return;
    const e = this.editTarget;
    if (e > -1) {
      const t = this.poi.getNodeByIndex(e),
        o = this.nodeShapes.get(e);
      if (t && o) {
        const i = Ct[t.type];
        o[0].stroke(i),
          o[0].opacity(0),
          console.log("[FMZ-Shape]::remove-node-editor", t, i);
      }
    }
    (this.editMode = "graph"),
      (this.editTarget = -1),
      this.toolGroup.destroyChildren();
  }
  makeNodeTool(e, t, o) {
    const a = {
      x: e.pose.x + 2,
      y: e.pose.y,
    };
    let r = t.x + Et + 5,
      u = t.y,
      l = 8,
      c = 12,
      d = 0,
      f = [0, 0, 30, 0];
    o == 6
      ? ((r = t.x),
        (u = t.y + Et + 5),
        (l = 12),
        (c = 8),
        (d = 90),
        (f = [0, 0, 0, 30]),
        (a.x = e.pose.x),
        (a.y = e.pose.y - 2))
      : o == 9
      ? ((r = t.x - Et - 5),
        (d = 180),
        (f = [0, 0, -30, 0]),
        (a.x = e.pose.x - 2),
        (a.y = e.pose.y))
      : o == 12 &&
        ((r = t.x),
        (u = t.y - Et - 5),
        (l = 12),
        (c = 8),
        (d = 270),
        (f = [0, 0, 0, -30]),
        (a.x = e.pose.x),
        (a.y = e.pose.y + 2));
    const v = new F.Circle({
        x: r,
        y: u,
        radius: 0.5,
        stroke: "#0055D3",
        strokeWidth: 1,
        opacity: 1,
      }),
      w = new F.Arrow({
        x: r,
        y: u,
        points: f,
        fill: "black",
        stroke: "black",
        strokeWidth: 1,
        opacity: 0.5,
        pointerLength: ps,
        pointerWidth: fs,
        visible: !1,
      }),
      E = new Image(),
      C = new Image(),
      x = new F.Image({
        x: r,
        y: u,
        width: 6,
        height: 6,
        image: E,
        rotation: d,
        draggable: !0,
      });
    x.offsetX(3),
      x.offsetY(3),
      x.visible(!1),
      (E.onload = () => {
        x.image(E);
      }),
      (E.src = "/monitoring/poi/node_pointer.svg"),
      (C.src = "/monitoring/poi/node_pointer2.svg");
    const b = new F.Ellipse({
      x: r,
      y: u,
      radiusX: l,
      radiusY: c,
      stroke: "black",
      strokeWidth: 0,
    });
    b.on("mouseenter", (D) => {
      console.log("___________[eventArea]::mouse-enter", o),
        v.visible(!1),
        x.image(E),
        x.visible(!0);
    }),
      b.on("mouseleave", (D) => {
        console.log("____xxx____[eventArea]::mouse-leave", o),
          x.visible(!1),
          v.visible(!0);
      }),
      x.on("mouseover", (D) => {
        console.log("_______----____[imagePointer]::mouse-enter", o),
          w.visible(!0),
          x.image(C),
          x.visible(!0);
      }),
      x.on("mouseout", (D) => {
        console.log("_______----xxx____[imagePointer]::mouse-enter", o),
          w.visible(!1);
      }),
      x.on("click", (D) => {
        console.log("__________[imagePointer]::click", e, this.maxNodeIndex),
          this.makeNodeEdge(a, e.index);
      });
    const m = x.x(),
      _ = x.y();
    x.on("dragstart", (D) => {
      x.visible(!1),
        w.visible(!0),
        (this.isNodeDragging = !0),
        (this.draggingNodeIndex = e.index);
    }),
      x.on("dragmove", (D) => {
        this.shape.getStage().container().style.cursor = "crosshair";
        const k = t,
          O = this.shape.getStage().getRelativePointerPosition(),
          Q = this.getArrowEndPoint(O, k),
          X = this.getArrowEndPoint(k, O, 6);
        w.visible(!0),
          w.x(Q.x),
          w.y(Q.y),
          w.points([0, 0, X.x - Q.x, X.y - Q.y]);
      }),
      x.on("dragend", (D) => {
        if (this.isNodeDragging) {
          console.log("@@__[imagePointer]::drag-end::no node", D);
          const k = this.shape.getStage().getRelativePointerPosition(),
            O = this.mapTool.transformPointPX2M(k);
          this.makeNodeEdge(O, e.index);
        }
        (this.isNodeDragging = !1),
          console.log("@@__[imagePointer]::drag-end", this.isNodeDragging),
          x.x(m),
          x.y(_),
          w.visible(!1),
          w.x(r),
          w.y(u),
          w.points(f);
      }),
      this.toolGroup.add(v).add(w).add(b).add(x);
  }
  makeNodeEdge(e, t) {
    const o = xo.getDefaultData(e, ++this.maxNodeIndex),
      i = new xo(o),
      a = new jt({
        from: t,
        to: o.index,
      });
    this.poi.nodes.push(i),
      this.poi.edges.push(a),
      this.node(i, !0),
      this.edge(a, !0),
      this.removeNodeEditor(),
      this.setNodeEditor(i),
      this.editingStatus$.next({
        mode: "node",
        target: i.index,
      });
  }
  edge(e, t = !1) {
    const o = this.getNodeByIndex(e.from),
      i = this.getNodeByIndex(e.to),
      a = this.mapTool.transformPointM2PX(o.pose),
      r = this.mapTool.transformPointM2PX(i.pose),
      u = this.getArrowEndPoint(r, a),
      l = this.getArrowEndPoint(a, r),
      c = Ct.default,
      d = Ct.default,
      f = new F.Arrow({
        name: "__edge",
        points: [u.x, u.y, l.x, l.y],
        fill: d,
        stroke: c,
        strokeWidth: 1,
        pointerLength: ps,
        pointerWidth: fs,
      });
    t &&
      (f.on("click", (v) => {
        console.log("@@@___[FMZ-Shape]::arrow::click", e, v),
          this.removeNodeEditor(),
          this.removeEdgeEditor(),
          this.setEdgeEditor(e),
          this.editingStatus$.next({
            mode: "edge",
            target: e,
          });
      }),
      f.on("dblclick", (v) => {
        console.log("@@@___[FMZ-Shape]::arrow::double-click", e, v),
          (v.cancelBubble = !0),
          this.editingStatus$.next({
            mode: "del-edge",
            target: e,
          });
      })),
      this.shapeGroup.add(f),
      this.edgeShapes.set(e, f);
  }
  setEdgeEditor(e) {
    (this.editMode = "edge"),
      (this.editTarget = this.poi.getEdgeByIndex(e.from, e.to));
    const t = this.edgeShapes.get(this.editTarget);
    console.log("@_[FMZ-shape]::setEdgeEditor", e, t),
      t && (t.fill("#0055D3"), t.stroke("#0055D3"), t.moveToTop());
  }
  removeEdgeEditor() {
    if (this.editMode !== "edge") return;
    const e = this.editTarget;
    if (e) {
      const t = this.edgeShapes.get(e);
      if (t) {
        const o = Ct.default,
          i = Ct.default;
        t.stroke(o),
          t.fill(i),
          console.log("[FMZ-Shape]::remove-edge-editor", e);
      }
    }
    (this.editMode = "graph"), (this.editTarget = -1);
  }
  connectedPoint(e) {
    const t = this.getNodeByIndex(e.connect),
      o = this.mapTool.transformPointM2PX(e.pose),
      i = this.mapTool.transformPointM2PX(t.pose),
      a = this.getArrowEndPoint(o, i),
      r = Ct.default,
      u = Ct.default,
      l = 0.5,
      c = new F.Line({
        name: "__connectedPointLine",
        points: [o.x, o.y, a.x, a.y],
        stroke: r,
        strokeWidth: 1,
        opacity: l,
      }),
      d = new F.Circle({
        name: "__connectedPoint",
        x: o.x,
        y: o.y,
        radius: tr,
        fill: u,
        stroke: r,
        strokeWidth: 1,
        opacity: 1,
      });
    this.shapeGroup.add(c), this.shapeGroup.add(d);
  }
  waitingQueueConnection(e) {
    var a;
    const t = this.poi.getWaitingQueueById(e.waitingQueue),
      o = this.getNodeByIndex(e.connectedNode),
      i = (a = t == null ? void 0 : t.nodes.length) != null ? a : 0;
    if (i && o) {
      const r = t.nodes[i - 1].pose,
        u = this.mapTool.transformPointM2PX(o.pose),
        l = this.mapTool.transformPointM2PX(r),
        c = this.getArrowEndPoint(l, u),
        d = Ct.default,
        f = Ct.default,
        v = new F.Arrow({
          name: "__entry",
          points: [l.x, l.y, c.x, c.y],
          fill: f,
          stroke: d,
          strokeWidth: 1,
          pointerLength: ps,
          pointerWidth: fs,
        });
      this.shapeGroup.add(v);
    }
  }
  getNodeByIndex(e) {
    return this.poi.nodes.find((t) => t.index == e);
  }
  getDegreeByPoints(e, t) {
    const o = t.x - e.x,
      i = t.y - e.y;
    let a = Math.atan(i / o);
    return o < 0 && (a += Math.PI), a;
  }
  getArrowEndPoint(e, t, o) {
    const i = Math.PI - this.getDegreeByPoints(e, t),
      a = o != null ? o : Et - 1 + Qo / 2;
    return {
      x: t.x + a * Math.cos(i),
      y: t.y - a * Math.sin(i),
    };
  }
  bindClickEvent(e, t) {
    e
      ? (this.shape.on("click", () => {
          this.mapTool.selectedFmz$.next({
            id: t,
            mode: "area",
            target: -1,
          });
        }),
        this.shapeGroup.on("dblclick contextmenu", (o) => {
          o.evt.preventDefault(), console.log("[Shape]::FMZ::dblClick", o);
          const i = this.shapeGroup.getStage(),
            a = i == null ? void 0 : i.getPointerPosition().x,
            r = i == null ? void 0 : i.getPointerPosition().y,
            u = {
              x: a,
              y: r,
            };
          this.mapTool.selectedPopup$.next({
            point: u,
            resourceId: t,
          });
        }),
        this.nodeShapes.forEach((o, i) => {
          const a = o[0],
            r = o[1];
          a.on("click", (u) => {
            this.mapTool.selectedFmz$.next({
              id: t,
              mode: "node",
              target: i,
            });
          }),
            r.on("click", (u) => {
              this.mapTool.selectedFmz$.next({
                id: t,
                mode: "node",
                target: i,
              });
            });
        }),
        this.edgeShapes.forEach((o, i) => {
          o.on("click", (r) => {
            this.mapTool.selectedFmz$.next({
              id: t,
              mode: "edge",
              target: i,
            });
          });
        }))
      : (this.shape.off("click"), this.shapeGroup.off("dblclick contextmenu"));
  }
  initGraphEditor() {
    const e = {
        x: 0,
        y: 0,
        width: this.mapTool.mapWidth,
        height: this.mapTool.mapHeight,
        stroke: "black",
        strokeWidth: 5,
      },
      t = new F.Rect(e);
    return this.shapeGroup.add(t), t;
  }
  setGraphEditor() {
    const e = this.initGraphEditor();
    this.mapTool.layer,
      e.on("mousemove", (t) => {
        this.shape.getStage().container().style.cursor = "crosshair";
      }),
      e.on("click", (t) => {
        console.log("@@__[FMZ-Shape]::graph-editor::base-click", t),
          this.removeNodeEditor(),
          this.removeEdgeEditor(),
          this.editingStatus$.next({
            mode: "graph",
            target: -1,
          });
      }),
      e.on("dblclick", (t) => {
        console.log("@@__[FMZ-Shape]::graph-editor::base-double-click", t),
          t.evt.preventDefault();
        const o = this.shape.getStage().getRelativePointerPosition(),
          i = this.mapTool.transformPointPX2M(o),
          a = xo.getDefaultData(i, ++this.maxNodeIndex),
          r = new xo(a);
        this.poi.nodes.push(r),
          this.node(r, !0),
          this.removeNodeEditor(),
          this.removeEdgeEditor(),
          this.setNodeEditor(r),
          this.editingStatus$.next({
            mode: "node",
            target: r.index,
          });
      });
  }
}
const sr = ["#EEF5FC", "#CEE1F7", "#5194E3"],
  ir = "#C4D9F7",
  ci = "#0069FF";
class nr extends Mo {
  constructor(e, t) {
    super(t);
    p(this, "poi");
    p(this, "width");
    p(this, "length");
    p(this, "status");
    p(this, "workerImg");
    p(this, "workerImg2");
    p(this, "blinker");
    p(this, "isBlinking", !1);
    p(this, "blinkFlag", !1);
    p(this, "waitingNumber");
    p(this, "numberShape");
    p(this, "viewWorkerPath");
    p(this, "viewFmzPath");
    p(this, "payload");
    p(this, "pathPlan");
    p(this, "path");
    p(this, "MAIN_COLOR");
    (this.poi = e),
      (this.width = Math.round(e.robotWidth * t.M2PX)),
      (this.length = Math.round(e.robotLength * t.M2PX)),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: "Worker",
      })),
      (this.status = this.poi.statusP),
      (this.pathPlan = new F.Group()),
      (this.payload = new F.Group()),
      (this.MAIN_COLOR = this.generateRandomColorHex()),
      (this.path = new F.Group()),
      (this.viewWorkerPath = t.workerConfig.viewWorkerPathGlobal),
      (this.viewFmzPath = t.workerConfig.viewFmzPathGlobal);
  }
  draw() {
    var e, t;
    return (
      this.shape
        ? this.move()
        : (this.shapeGroup.destroyChildren(),
          (this.shape = this.worker()),
          (this.text = this.drawText("#ff0000")),
          this.text && this.shapeGroup.add(this.text),
          this.shapeGroup.add(this.pathPlan),
          this.shapeGroup.add(this.payload),
          this.shape && this.shapeGroup.add(this.shape),
          this.shape && this.bindMouseOverEvent(!0, this.indicate),
          this.bindClickEvent(!0, this.poi.id)),
      this.setBlink(this.isBlinking),
      this.poi.status == "offline" &&
        !this.mapTool.canViewOfflineWorker &&
        this.shapeGroup.visible(!1),
      this.pathPlan.destroyChildren(),
      (e = this.path) == null || e.destroyChildren(),
      this.poi.useFmz
        ? this.viewFmzPath &&
          ((this.path = this.fmzPath()),
          this.path && this.shapeGroup.add(this.path),
          (t = this.path) == null || t.moveToBottom())
        : this.viewWorkerPath && (this.pathLocal(), this.pathGlobal()),
      this.footprint(),
      this.shapeGroup
    );
  }
  move() {
    const e = this.shape,
      t = this.poi.pose,
      o = this.mapTool.transformPoseM2PX(t);
    e.x(o.x),
      e.y(o.y),
      e.rotation(o.degree),
      this.text.x(o.x),
      this.text.y(o.y),
      (this.status = this.poi.statusP);
    const i = this.getStatusImageName();
    (this.workerImg.src = this.getWorkerImg(i)),
      (this.workerImg2.src = this.getWorkerImg2(i)),
      this.numberShape
        ? (this.numberShape.x(o.x),
          this.numberShape.y(o.y),
          this.numberShape.rotation(o.degree + 90))
        : e.strokeWidth(0);
  }
  moveAni(e) {
    if (!this.shape) return;
    const t = this.shape,
      o = this.poi.pose,
      i = this.mapTool.transformPoseM2PX(o),
      a = (t.rotation() + 360) % 360,
      r = (i.degree + 360) % 360,
      u = Math.abs(r - a),
      l = {
        node: t,
        duration: e / 1e3,
        x: i.x,
        y: i.y,
      };
    u < 180
      ? (l.rotation = r)
      : (l.onFinish = () => {
          t.rotation(r);
        });
    const c = new F.Tween(l),
      d = new F.Tween({
        node: this.text,
        duration: e / 1e3,
        x: i.x,
        y: i.y,
      });
    if (
      (c.play(),
      d.play(),
      this.numberShape
        ? new F.Tween({
            node: this.numberShape,
            duration: e / 1e3,
            x: i.x,
            y: i.y,
            rotation: i.degree + 90,
          }).play()
        : t.strokeWidth(0),
      this.status != this.poi.statusP)
    ) {
      this.status = this.poi.statusP;
      const f = this.getStatusImageName();
      (this.workerImg.src = this.getWorkerImg(f)),
        (this.workerImg2.src = this.getWorkerImg2(f));
    }
    this.setBlink(this.isBlinking),
      this.poi.status == "offline" && !this.mapTool.canViewOfflineWorker
        ? this.shapeGroup.visible(!1)
        : this.shapeGroup.visible(!0);
  }
  edit() {
    console.log("[WorkerShape]::remove", this.poi),
      this.shapeGroup.destroyChildren();
  }
  remove() {
    this.shapeGroup.destroyChildren();
  }
  setWaitingStatus(e, t) {
    (this.waitingNumber = t), this.displayNumber(e);
  }
  setWaitingIndicator(e) {
    e
      ? this.numberShape && this.shape.strokeWidth(4)
      : this.shape.strokeWidth(0);
  }
  worker() {
    if (this.poi.status == "init") {
      console.log("[WorkerShape]::worker::init", this.poi.pose);
      return;
    }
    const e = `worker_${this.poi.id}`,
      t = this.poi.pose,
      o = this.mapTool.transformPoseM2PX(t);
    if (!o) {
      console.log("[WorkerShape]::worker::pose", this.poi.pose);
      return;
    }
    const i = new Image(this.length, this.width),
      a = new Image(this.length, this.width),
      r = new F.Image({
        id: e,
        x: o.x,
        y: o.y,
        rotation: o.degree,
        offset: {
          y: this.width / 2,
          x: this.length / 2,
        },
        image: i,
        stroke: "orange",
        strokeWidth: 0,
      });
    (i.onload = () => {
      r.image(i), r.rotation(r.rotation());
    }),
      (this.status = this.poi.statusP);
    const u = this.getStatusImageName();
    return (
      (i.src = this.getWorkerImg(u)),
      (a.src = this.getWorkerImg2(u)),
      (this.workerImg = i),
      (this.workerImg2 = a),
      r
    );
  }
  getStatusImageName() {
    return this.poi.robotLength > 60 ? "bad_network" : this.poi.statusP;
  }
  pathLocal() {
    const e = this.poi.pathPlanLocal;
    e.length &&
      e.forEach((t) => {
        const o = this.mapTool.transformPointM2PX(t),
          i = new F.Circle({
            x: o.x,
            y: o.y,
            radius: 2,
            fill: ci,
            stroke: ci,
            strokeWidth: 1,
            opacity: 0.85,
          });
        this.pathPlan.add(i);
      });
  }
  pathGlobal() {
    const e = this.poi.pathPlanGlobal;
    if (e.length) {
      const t = [];
      e.forEach((u) => {
        const l = this.mapTool.transformPointM2PX(u);
        t.push(l.x), t.push(l.y);
      });
      const o = new F.Line({
          points: t,
          stroke: ir,
          strokeWidth: 4,
          opacity: 0.35,
        }),
        i = new F.Group(),
        a = e[e.length - 1],
        r = this.mapTool.transformPointM2PX(a);
      for (let u = 0; u < 3; u++) {
        const l = new F.Circle({
          x: r.x,
          y: r.y,
          radius: 12 - u * 4,
          fill: sr[u],
          opacity: 0.75,
        });
        i.add(l);
      }
      this.pathPlan.add(i), this.pathPlan.add(o);
    }
  }
  footprint() {
    if (
      (this.payload.destroyChildren(),
      !this.poi.footprintLength || !this.poi.footprintWidth)
    )
      return;
    const e = Math.round(this.poi.footprintWidth * this.mapTool.M2PX),
      t = Math.round(this.poi.footprintLength * this.mapTool.M2PX),
      o = this.mapTool.transformPoseM2PX(this.poi.pose),
      i = new F.Rect({
        x: o.x,
        y: o.y,
        width: t,
        height: e,
        rotation: o.degree,
        offset: {
          x: t / 2,
          y: e / 2,
        },
        fill: this.MAIN_COLOR,
        opacity: 0.35,
      });
    this.payload.add(i);
  }
  getWorkerImg(e) {
    const t = "/monitoring/poi/worker/worker-",
      o = [
        "idle",
        "busy",
        "offline",
        "busy_self",
        "virtual_joystick",
        "auto_charging",
        "required_charging",
        "soft_paused",
        "traffic_paused",
        "button_paused",
        "manual_mode",
        "suspend",
        "error",
        "brake_released",
        "robot_locked",
        "emergency_button",
        "emergency_alarm",
        "escaping",
        "localizing",
        "push_cancel",
        "push_start",
        "init",
        "explore",
        "idle_auto_charging",
        "busy_on_hold",
        "idle_on_hold",
        "bad_network",
      ],
      i = [
        "auto_charging",
        "busy_self",
        "virtual_joystick",
        "emergency_button",
        "localizing",
        "push_cancel",
        "push_start",
        "suspend",
        "bad_network",
      ];
    return (
      (this.isBlinking = i.indexOf(e) > -1),
      o.indexOf(e) > -1 ? `${t}${e}.svg` : `${t}default.svg`
    );
  }
  getWorkerImg2(e) {
    const t = "/monitoring/poi/worker/worker-";
    return e == "busy_self"
      ? `${t}init.svg`
      : e == "virtual_joystick"
      ? `${t}init.svg`
      : e == "auto_charging"
      ? `${t}offline.svg`
      : e == "localizing"
      ? `${t}offline.svg`
      : e == "suspend"
      ? `${t}idle.svg`
      : e == "push_cancel"
      ? `${t}blink.svg`
      : e == "push_start"
      ? `${t}blink.svg`
      : e == "emergency_button"
      ? `${t}blink.svg`
      : e == "bad_network"
      ? `${t}bad_network2.svg`
      : `${t}${e}.svg`;
  }
  setBlink(e) {
    e
      ? this.blinker ||
        (this.blinker = setInterval(() => {
          const t = this.shape;
          this.blinkFlag ? t.image(this.workerImg) : t.image(this.workerImg2),
            (this.blinkFlag = !this.blinkFlag);
        }, 500))
      : this.blinker && (clearInterval(this.blinker), (this.blinker = void 0));
  }
  drawText(e = "#272727", t = !1, o = !1) {
    const i = `name_${this.poi.id}`,
      a = this.poi.pose,
      r = this.mapTool.transformPoseM2PX(a),
      u = o ? -25 : 0,
      l =
        t && this.poi.name.length > 13
          ? `${this.poi.name.substring(0, 13)}...`
          : this.poi.name,
      c = new F.Text({
        id: i,
        name: "Title",
        ...r,
        text: l,
        fontSize: 12,
        fill: e,
      });
    return c.offsetX(c.width() / 2), c.offsetY(28), c.rotation(u), c;
  }
  displayNumber(e) {
    var i;
    if (!e) {
      (i = this.numberShape) == null || i.destroy(),
        (this.numberShape = void 0);
      return;
    }
    if (this.numberShape) {
      this.numberShape.text(this.waitingNumber);
      return;
    }
    const t = this.poi.pose,
      o = this.mapTool.transformPoseM2PX(t);
    (this.numberShape = new F.Text({
      ...o,
      offsetX: 3,
      offsetY: -1,
      text: this.waitingNumber,
      fontSize: 11,
      fill: "#ffffff",
    })),
      this.numberShape.rotation(o.degree + 90),
      this.shapeGroup.add(this.numberShape);
  }
  generateRandomColorHex() {
    return (
      "#" +
      (
        "00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)
      ).slice(-6)
    );
  }
  fmzPath() {
    if (!this.poi.useFmz) return null;
    const e = new F.Group(),
      t = [],
      o = [],
      i = this.poi.fmzNodePath,
      a = this.poi.fmzDestination,
      r = [],
      u = [],
      l = this.MAIN_COLOR;
    t.push(this.mapTool.transformPoseM2PX(this.poi.pose));
    const c = this.getNodeBySdkId(a);
    c && t.push(this.mapTool.transformPoseM2PX(c.pose)),
      t.forEach((v, w) => {
        const E = w == 0 ? v : this.getArrowEndPoint(t[0], v);
        o.push(E.x), o.push(E.y);
      }),
      i == null ||
        i.forEach((v) => {
          var E;
          const w = {
            x: v.x,
            y: v.y,
            degree: 0,
            theta: (E = v.theta) != null ? E : 0,
          };
          r.push(w);
        }),
      r.forEach((v) => {
        const w = this.mapTool.transformPoseM2PX(v);
        u.push(w.x), u.push(w.y);
        const E = new F.Circle({
          x: w.x,
          y: w.y,
          radius: Et,
          fill: l,
          strokeWidth: 0,
          opacity: 0.33,
        });
        e.add(E);
        const C = new F.Circle({
          x: w.x,
          y: w.y,
          radius: Et,
          stroke: l,
          strokeWidth: Qo,
          opacity: 1,
        });
        e.add(C);
      });
    const d = new F.Line({
      points: u,
      stroke: l,
      strokeWidth: 3,
      opacity: 0.33,
      closed: !1,
    });
    e.add(d);
    const f = new F.Arrow({
      points: o,
      fill: l,
      stroke: l,
      strokeWidth: 1,
      lineJoin: "round",
      dash: [4, 2],
      pointerLength: 8,
      pointerWidth: 6,
    });
    return e.add(f), e;
  }
  getFMZById(e) {
    const t = this.poi.stageService.resourceStore.get(e);
    return t || null;
  }
  getNodeBySdkId(e) {
    if (!e) return;
    const t = e.split("_");
    if (t.length < 4) return;
    const o = t[1],
      i = parseInt(t[3]),
      a = this.poi.stageService.resourceStore.get(o);
    return a ? a.nodes.find((r) => r.index == i) : void 0;
  }
  getDegreeByPoints(e, t) {
    const o = t.x - e.x,
      i = t.y - e.y;
    let a = Math.atan(i / o);
    return o < 0 && (a += Math.PI), a;
  }
  getArrowEndPoint(e, t) {
    const o = Math.PI - this.getDegreeByPoints(e, t),
      i = Et + Qo / 2;
    return {
      x: t.x + i * Math.cos(o),
      y: t.y - i * Math.sin(o),
    };
  }
}
class ar {
  constructor(s, e, t, o) {
    p(this, "resourceType", "Worker");
    p(this, "id");
    p(this, "name");
    p(this, "uuid");
    p(this, "updatedAt");
    p(this, "status");
    p(this, "statusP");
    p(this, "statusToggles", []);
    p(this, "map");
    p(this, "pose");
    p(this, "pathPlanGlobal", []);
    p(this, "pathPlanLocal", []);
    p(this, "batteryLevel");
    p(this, "batteryNowCharging");
    p(this, "ip");
    p(this, "robotWidth");
    p(this, "robotLength");
    p(this, "robotSizeC2Front");
    p(this, "robotSizeC2Rear");
    p(this, "robotSizeC2Left");
    p(this, "robotSizeC2Right");
    p(this, "batteryChargingSource");
    p(this, "locationSemantic");
    p(this, "locationRomoState");
    p(this, "locationOdometry");
    p(this, "payload");
    p(this, "footprintWidth", 0);
    p(this, "footprintLength", 0);
    p(this, "useFmz", !1);
    p(this, "fmzId");
    p(this, "fmzCurrent");
    p(this, "fmzNodePath");
    p(this, "fmzDestination");
    p(this, "homeStationId");
    p(this, "homeStationName");
    p(this, "shape");
    p(this, "isTracking", !1);
    p(this, "stageService");
    p(this, "worker$");
    p(this, "zone$");
    p(this, "subscription");
    p(this, "pose$", new Me());
    p(this, "status$", new Me());
    p(this, "prePose");
    p(this, "preStatus");
    var a, r, u, l;
    const i = s.type_specific.location.pose2d;
    if (
      ((this.id = s.id),
      (this.name = s.name),
      (this.uuid = s.uuid),
      (this.ip = s.type_specific.ip),
      (this.robotWidth = s.type_specific.robot_info.width || 0.73),
      (this.robotLength = s.type_specific.robot_info.length || 0.51),
      (this.preStatus = s.status_p),
      (this.status = s.status),
      (this.statusP = s.status_p),
      (this.statusToggles = fe.cloneDeep(s.status_toggle)),
      (this.map = s.type_specific.location.map),
      i && (this.pose = new Ie(i)),
      s.type_specific.location.path_plan &&
        ((this.pathPlanGlobal = s.type_specific.location.path_plan.global),
        (this.pathPlanLocal = s.type_specific.location.path_plan.local)),
      (this.payload = (a = s.type_specific.payload) != null ? a : "-"),
      s.type_specific.dynamic_footprint)
    ) {
      const c = s.type_specific.dynamic_footprint;
      (this.footprintLength = c.size_center_to_front + c.size_center_to_back),
        (this.footprintWidth = c.size_center_to_left + c.size_center_to_right);
    }
    (this.batteryLevel = s.type_specific.battery.battery_level),
      (this.batteryNowCharging = s.type_specific.battery.now_charging),
      (this.batteryChargingSource = s.type_specific.battery.charge_source),
      (this.homeStationId =
        (r = s.type_specific.home_station) == null ? void 0 : r.id),
      (this.homeStationName =
        (u = s.type_specific.home_station) == null ? void 0 : u.name),
      (this.updatedAt = new Date(s.updated_at)),
      (this.shape = new nr(this, e)),
      (this.worker$ = t),
      t && this.receiveRawData(),
      (this.zone$ = o),
      (l = this.zone$) == null ||
        l
          .pipe(
            Yt((c) => {
              const d = c.requestWorker.findIndex((v) => v.workerId == this.id),
                f = c.currentWorker.findIndex((v) => v.workerId == this.id);
              return d > -1 || f > -1;
            })
          )
          .subscribe((c) => this.parseRestrictedZoneMessage(c)),
      console.log("[Worker]::constructor", this.name, this.updatedAt);
  }
  serialize() {}
  setStageService(s) {
    this.stageService = s;
  }
  parseRestrictedZoneMessage(s) {
    if (s.caller) {
      "isIndicator" in s && this.shape.setWaitingIndicator(s.isIndicating);
      return;
    }
    const e = s.currentWorker.findIndex((i) => i.workerId == this.id) > -1,
      t = s.requestWorker.findIndex((i) => i.workerId == this.id) + 1,
      o = t > 0 ? `${t}` : "";
    this.shape.setWaitingStatus(!e, o);
  }
  receiveRawData() {
    var s;
    this.subscription =
      (s = this.worker$) == null
        ? void 0
        : s
            .pipe(
              ja((e) => e.document),
              Yt((e) => (e == null ? void 0 : e.id) == this.id),
              Yt(
                (e) =>
                  (e == null ? void 0 : e.type_specific.location.pose2d) !==
                  null
              ),
              Ya()
            )
            .subscribe((e) => {
              e.value && this.update(e.value, e.interval);
            });
  }
  async create(s) {}
  async update(s, e) {
    var a, r;
    const t = s,
      o = t.type_specific.location.pose2d,
      i = {
        x: Number.parseFloat(o.x.toFixed(2)),
        y: Number.parseFloat(o.y.toFixed(2)),
        theta: Number.parseFloat(o.theta.toFixed(2)),
        degree: 0,
      };
    if (
      ((this.updatedAt = new Date(t.updated_at)),
      (this.status = t.status),
      (this.statusToggles = t.status_toggle),
      (this.batteryLevel = t.type_specific.battery.battery_level),
      (this.batteryNowCharging = t.type_specific.battery.now_charging),
      (this.statusP = t.status_p),
      this.status$.next(this.statusP),
      this.preStatus != this.statusP && (this.preStatus = this.statusP),
      this.map != t.type_specific.location.map,
      (this.map = t.type_specific.location.map),
      (this.pose = new Ie(i)),
      this.pose$.next(i),
      t.type_specific.location.path_plan
        ? ((this.pathPlanGlobal = t.type_specific.location.path_plan.global),
          (this.pathPlanLocal = t.type_specific.location.path_plan.local))
        : ((this.pathPlanGlobal = []), (this.pathPlanLocal = [])),
      (this.payload = (a = t.type_specific.payload) != null ? a : "-"),
      t.type_specific.dynamic_footprint)
    ) {
      const u = t.type_specific.dynamic_footprint;
      (this.footprintLength = u.size_center_to_front + u.size_center_to_back),
        (this.footprintWidth = u.size_center_to_left + u.size_center_to_right);
    } else (this.footprintLength = 0), (this.footprintWidth = 0);
    if ((r = t.type_specific.fmz) != null && r.fmz_id) {
      const u = t.type_specific.fmz;
      (this.useFmz = !0),
        (this.fmzId = u.fmz_id),
        (this.fmzCurrent = u.current),
        (this.fmzDestination = u.destination),
        (this.fmzNodePath = u.node_path);
    } else (this.useFmz = !1), (this.fmzId = "");
    this.map == this.shape.mapTool.map.id && this.shape.draw();
  }
  async delete() {}
  async created() {}
  async updated() {}
  async deleted() {}
  getIntervalSec() {
    return (Date.now() - this.updatedAt.getTime()) / 1e3;
  }
}
class ts extends Mo {
  constructor(e) {
    super(e);
    p(this, "pose$");
    p(this, "editingParamSet");
    p(this, "degreeOffset", 0);
    this.pose$ = new Me();
  }
  move(e) {
    const t = this.mapTool.transformPoseM2PX(e);
    this.shape.x(t.x),
      this.shape.y(t.y),
      this.shape.rotation(t.degree + this.degreeOffset);
  }
  moveParam(e) {
    const { shape: t, text: o } = this.editingParamSet,
      i = this.mapTool.transformPoseM2PX(e);
    console.log("@@@___[ParkFrontShape]::moveParam", t, o, e),
      t.x(i.x),
      t.y(i.y),
      t.rotation(i.degree + this.degreeOffset),
      o.x(i.x),
      o.y(i.y),
      o.rotation(i.degree + this.degreeOffset);
  }
  textOnPose(e, t, o = "#272727") {
    const i = `name_${e.id}`,
      a = this.mapTool.transformPoseM2PX(e.pose),
      r = 0,
      u = e.name,
      l = this.mapTool.textSize,
      c = this.mapTool.textEllipsis,
      d = this.mapTool.textTilt,
      f =
        c && (u == null ? void 0 : u.length) > 13
          ? `${u == null ? void 0 : u.substring(0, 13)}...`
          : u,
      v = (a.degree + 360) % 360 > 190 ? -20 : -10,
      w = new F.Text({
        id: i,
        name: "Title",
        x: a.x,
        y: a.y,
        rotation: r,
        text: f,
        fontSize: l,
        fill: o,
      });
    return w.offsetX(w.width() / 2), w.offsetY(v), d && w.rotate(-25), w;
  }
  getTextOffsetY(e) {
    const t = e.theta < 0 ? 6.28 + e.theta : e.theta;
    let o = -12;
    return t > 0 && t < 3.14 && (o = 30), o;
  }
  paramPoint(e, t = !1, o = !1) {
    const i = this.mapTool.transformPoseM2PX(e),
      a = new Image(),
      r = new F.Image({
        resource: e,
        name: "Sub",
        x: i.x,
        y: i.y,
        rotation: i.degree + this.degreeOffset,
        width: 12,
        height: 9,
        offset: {
          x: 6,
          y: 3,
        },
        image: a,
        draggable: t,
      });
    return (
      (a.src = o
        ? "/monitoring/poi/param_point.svg"
        : "/monitoring/poi/param_point_front.svg"),
      (a.onload = () => {
        r.image(a);
      }),
      r
    );
  }
  bindEditingEvent2ShapeGroup(e) {
    var u;
    const t = this.shape,
      o = this.shapeGroup,
      i = this.transformer,
      a = (u = this.degreeOffset) != null ? u : 0,
      r = {
        x: 0,
        y: 0,
        theta: 0,
      };
    t.on("dragstart", (l) => {
      (r.x = t.x()), (r.y = t.y());
    }),
      t.on("dragmove", (l) => {
        const c = t.x() - r.x,
          d = t.y() - r.y;
        (r.x = t.x()),
          (r.y = t.y()),
          this.mapTool.changePoseByPointPX2M(e, {
            x: t.x(),
            y: t.y(),
          }),
          o.getChildren().map((f) => {
            t._id != f._id &&
              (f.x(f.x() + c),
              f.y(f.y() + d),
              f.attrs.resource &&
                this.changeResourcePoseByDelta(f.attrs.resource, c, d, 0));
          }),
          this.pose$.next(e);
      }),
      t.on("transformstart", () => {
        (r.x = t.x()), (r.y = t.y()), (r.theta = t.rotation());
      }),
      t.on("transform", () => {
        const l = i.getActiveAnchor(),
          c = t.rotation() - r.theta;
        (r.x = t.x()),
          (r.y = t.y()),
          (r.theta = t.rotation()),
          (e.theta = (t.rotation() - a) * (Math.PI / -180)),
          (e.degree = t.rotation() - a),
          o.getChildren().map((d) => {
            if (t._id != d._id && d.getClassName() != "Transformer")
              switch (l) {
                case "rotater":
                  const f = this.mapTool.transformByDegree(
                    {
                      x: d.x(),
                      y: d.y(),
                    },
                    {
                      x: t.x(),
                      y: t.y(),
                      theta: c * -1,
                    }
                  );
                  this.handleRotation(d, f, c);
                  break;
              }
          }),
          this.pose$.next(e);
      }),
      t.on("mouseenter", () => {
        t.getStage().container().style.cursor = "pointer";
      });
  }
  handleRotation(e, t, o) {
    const i = e.rotation() + o;
    e.x(t.x),
      e.y(t.y),
      e.rotation(i),
      e.attrs.resource &&
        (this.changeResourcePose(e.attrs.resource, t, i, this.degreeOffset),
        console.log("@__[PointShape]::handleRotation", e, t, o));
  }
  bindEvent2SubResourceWithChecker(e, t, o, i, a) {
    const r = this.shape,
      u = {
        x: r.x(),
        y: r.y(),
        width: r.width(),
        height: r.height(),
      },
      l = this.mapTool.transformAreaPX2M(u);
    e.on("dragmove", () => {
      const c = this.mapTool.transformPointPX2M({
          x: e.x(),
          y: e.y(),
        }),
        d = i(c, l),
        f = this.mapTool.transformPoseM2PX({
          x: d[0],
          y: d[1],
          degree: o.degree,
          theta: o.theta,
        });
      e.x(f.x),
        e.y(f.y),
        t.x(e.x()),
        t.y(e.y()),
        (o.x = d[0]),
        (o.y = d[1]),
        a.next(o);
    }),
      e.on("mouseenter", () => {
        e.getStage().container().style.cursor = "pointer";
      });
  }
  bindEditingEvent(e) {
    const t = this.shape,
      o = this.degreeOffset;
    t.on("dragmove transform", () => {
      const i = this.mapTool.transformPosePX2M({
        x: t.x(),
        y: t.y(),
        theta: e.theta,
        degree: t.rotation() + o,
      });
      (e.x = i.x),
        (e.y = i.y),
        (e.theta = i.theta),
        (e.degree = i.degree),
        this.pose$.next(i);
    });
  }
}
const rr = "#1b3f94";
class ur extends ts {
  constructor(e, t) {
    super(t);
    p(this, "poi");
    p(this, "shapeTypes", {
      waypoint: this.locationWaypoint,
      parameter: this.locationParameter,
      evacuation: this.locationEvacuation,
      waiting_after_cancel: this.locationWaitingAfterCancel,
      teleporter_evacuation: this.locationEvacuation,
      teleporter_waiting_after_cancel: this.locationWaitingAfterCancel,
      waiting: this.locationWaiting,
    });
    (this.degreeOffset = 90),
      (this.poi = e),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: e.resourceType,
      }));
  }
  draw() {
    this.shapeGroup.destroyChildren();
    const e = this.poi.type,
      t = this.shapeTypes[e];
    return (
      console.log("[LocationShape]::draw", e, this),
      (this.shape = Reflect.apply(t, this, [])),
      this.shape && this.shapeGroup.add(this.shape),
      (this.text = this.textOnPose(this.poi, rr)),
      this.text && this.shapeGroup.add(this.text),
      this.shape && this.bindMouseOverEvent(!0, this.indicate),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    var e, t;
    return (
      this.shapeGroup.destroyChildren(),
      console.log("[LocationShape]::edit", this.poi.type, this),
      (this.shape = this.locationEditor()),
      (this.transformer = new F.Transformer()),
      (e = this.transformer) == null || e.resizeEnabled(!1),
      (t = this.transformer) == null || t.nodes([this.shape]),
      this.shape && this.shapeGroup.add(this.shape),
      this.shapeGroup.add(this.transformer),
      this.bindEditingEvent(this.poi.pose),
      this.shapeGroup
    );
  }
  move(e) {
    const t = this.mapTool.transformPoseM2PX(e);
    console.log("@@___[Shape]::move", t, e),
      this.shape.x(t.x),
      this.shape.y(t.y);
    const o =
      this.poi.type == "parameter" ? t.degree : t.degree - this.degreeOffset;
    this.shape.rotation(o);
  }
  locationEditor() {
    const e = "loaction_edit",
      t = this.mapTool.transformPoseM2PX(this.poi.pose),
      o = new Image(22, 22),
      i = new F.Image({
        id: e,
        x: t.x,
        y: t.y,
        rotation: t.degree,
        offset: {
          x: 11,
          y: 11,
        },
        image: o,
        draggable: !0,
      });
    return (
      (o.onload = () => {
        i.image(o), i.rotation(i.rotation() - this.degreeOffset);
      }),
      (o.src = "/monitoring/resource/location.svg"),
      i
    );
  }
  locationWaypoint(e = !1) {
    const t = e ? "location_edit" : `location_${this.poi.id}`,
      o = this.mapTool.transformPoseM2PX(this.poi.pose),
      i = new Image(22, 22),
      a = new F.Image({
        id: t,
        x: o.x,
        y: o.y,
        rotation: o.degree,
        offset: {
          x: 11,
          y: 22,
        },
        image: i,
        draggable: e,
      });
    return (
      (i.onload = () => {
        a.image(i), a.rotation(a.rotation() - this.degreeOffset);
      }),
      (i.src = "/monitoring/resource/waypoint.svg"),
      a
    );
  }
  locationParameter(e = !1) {
    const t = e ? "location_edit" : `location_${this.poi.id}`,
      o = this.mapTool.transformPoseM2PX(this.poi.pose);
    return new F.Path({
      id: t,
      x: o.x,
      y: o.y,
      rotation: o.degree,
      data: "M0 0 L-8 0 -20 6 -20 -6 -8 0Z",
      fill: "gray",
      stroke: "#707070",
      strokeWidth: 0.5,
      draggable: e,
    });
  }
  locationEvacuation(e = !1) {
    const t = e ? "evacuation_edit" : `evacuation_${this.poi.id}`,
      o = this.mapTool.transformPoseM2PX(this.poi.pose),
      i = new Image(22, 22),
      a = new F.Image({
        id: t,
        x: o.x,
        y: o.y,
        rotation: o.degree,
        offset: {
          x: 11,
          y: 22,
        },
        image: i,
        draggable: e,
      });
    return (
      (i.onload = () => {
        a.image(i), a.rotation(a.rotation() - this.degreeOffset);
      }),
      (i.src = "/monitoring/resource/evacuation.svg"),
      a
    );
  }
  locationWaitingAfterCancel(e = !1) {
    const t = e ? "waiting_cancel_edit" : `waiting_cancel_${this.poi.id}`,
      o = this.mapTool.transformPoseM2PX(this.poi.pose),
      i = new Image(22, 22),
      a = new F.Image({
        id: t,
        x: o.x,
        y: o.y,
        rotation: o.degree,
        offset: {
          x: 11,
          y: 22,
        },
        image: i,
        draggable: e,
      });
    return (
      (i.onload = () => {
        a.image(i), a.rotation(a.rotation() - this.degreeOffset);
      }),
      (i.src = "/monitoring/resource/waiting_cancel.svg"),
      a
    );
  }
}
const lr = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "Location",
  type: "waypoint",
};
class tt extends It {
  constructor(e, t) {
    super(e, t);
    p(this, "type");
    p(this, "pose");
    p(this, "shape");
    (this.type = e.type),
      (this.pose = new Ie(e.pose)),
      console.log("[ResourceInit]:", this.constructor.name, this),
      (this.shape = new ur(this, t));
  }
  static getDefaultData(e, t) {
    return {
      ...lr,
      map: e,
      pose: {
        x: t.x,
        y: t.y,
        degree: 0,
        theta: 0,
      },
    };
  }
  serialize() {
    return {
      ...this.serializeBase(),
      type: this.type,
      pose: this.pose.serialize(),
    };
  }
}
class ht {
  static setNodeInOutRect(s, e, t) {
    const o = [
      {
        coord: [e.A, e.B],
        val: +de.distToSegment(s, e.A, e.B),
      },
      {
        coord: [e.B, e.C],
        val: +de.distToSegment(s, e.B, e.C),
      },
      {
        coord: [e.C, e.D],
        val: +de.distToSegment(s, e.C, e.D),
      },
      {
        coord: [e.D, e.A],
        val: +de.distToSegment(s, e.D, e.A),
      },
    ];
    o.sort((f, v) => f.val - v.val);
    const i = o[0].coord[0],
      a = o[0].coord[1],
      r = {
        x: de.roundNumbers(a.x, 8) - de.roundNumbers(i.x, 8),
        y: de.roundNumbers(a.y, 8) - de.roundNumbers(i.y, 8),
      },
      u = {
        x: de.roundNumbers(s.x, 8) - de.roundNumbers(i.x, 8),
        y: de.roundNumbers(s.y, 8) - de.roundNumbers(i.y, 8),
      },
      l = r.x * r.x + r.y * r.y,
      c = u.x * r.x + u.y * r.y,
      d = Math.min(1, Math.max(0, c / l));
    return t == "in"
      ? de.isPointInRect(s, e)
        ? [s.x, s.y]
        : [i.x + r.x * d, i.y + r.y * d]
      : de.isPointInRect(s, e)
      ? [i.x + r.x * d, i.y + r.y * d]
      : [s.x, s.y];
  }
  static setNodeInArea(s, e, t) {
    const o = de.areasToRect(e, t);
    return ht.setNodeInOutRect(s, o, "in");
  }
  static setNodeOutArea(s, e, t) {
    const o = de.areasToRect(e, t);
    return ht.setNodeInOutRect(s, o, "out");
  }
  static setNodeOnAreaEdge(s, e, t) {
    const o = de.areasToRect(e, t),
      i = [
        {
          coord: [o.A, o.B],
          val: +de.distToSegment(s, o.A, o.B),
        },
        {
          coord: [o.B, o.C],
          val: +de.distToSegment(s, o.B, o.C),
        },
        {
          coord: [o.C, o.D],
          val: +de.distToSegment(s, o.C, o.D),
        },
        {
          coord: [o.D, o.A],
          val: +de.distToSegment(s, o.D, o.A),
        },
      ];
    i.sort((v, w) => v.val - w.val);
    const a = i[0].coord[0],
      r = i[0].coord[1],
      u = {
        x: de.roundNumbers(r.x, 8) - de.roundNumbers(a.x, 8),
        y: de.roundNumbers(r.y, 8) - de.roundNumbers(a.y, 8),
      },
      l = {
        x: de.roundNumbers(s.x, 8) - de.roundNumbers(a.x, 8),
        y: de.roundNumbers(s.y, 8) - de.roundNumbers(a.y, 8),
      },
      c = u.x * u.x + u.y * u.y;
    let d = l.x * u.x + l.y * u.y;
    const f = Math.min(1, Math.max(0, d / c));
    return (
      (d = (r.x - a.x) * (s.y - a.y) - (r.y - a.y) * (s.x - a.x)),
      [a.x + u.x * f, a.y + u.y * f]
    );
  }
  static isPointInArea(s, e) {
    const t = de.areasToRect(e);
    return de.isPointInRect(s, t);
  }
}
class de {
  static getDistance(s, e, t) {
    const o = e - s.x,
      i = t - s.y;
    return Math.sqrt(o * o + i * i);
  }
  static distToSegmentSquared(s, e, t) {
    const o = t.x - e.x,
      i = t.y - e.y,
      a = o * o + i * i;
    if (a === 0) return this.getDistance(s, e.x, e.y);
    let r = ((s.x - e.x) * o + (s.y - e.y) * i) / a;
    return (
      (r = Math.max(0, Math.min(1, r))),
      this.getDistance(s, e.x + r * o, e.y + r * i)
    );
  }
  static getVector(s, e) {
    return {
      x: de.roundNumbers(fe.get(e, "x") - fe.get(s, "x"), 8),
      y: de.roundNumbers(fe.get(e, "y") - fe.get(s, "y"), 8),
    };
  }
  static getDot(s, e) {
    const t = fe.get(s, "x") * fe.get(e, "x") + fe.get(s, "y") * fe.get(e, "y");
    return de.roundNumbers(t, 8);
  }
  static getLocation(s, e, t) {
    const o = t,
      i = Math.cos(o),
      a = Math.sin(o),
      r = i * (e.x - s.x) - a * (e.y - s.y) + s.x,
      u = i * (e.y - s.y) + a * (e.x - s.x) + s.y;
    return {
      x: de.roundNumbers(r, 8),
      y: de.roundNumbers(u, 8),
    };
  }
  static areasToRect(s, e) {
    fe.set(s, "x", de.roundNumbers(fe.get(s, "x"), 8)),
      fe.set(s, "y", de.roundNumbers(fe.get(s, "y"), 8)),
      fe.set(s, "theta", de.roundNumbers(fe.get(s, "theta"), 8)),
      fe.set(s, "width", de.roundNumbers(fe.get(s, "width"), 8)),
      fe.set(s, "height", de.roundNumbers(fe.get(s, "height"), 8));
    const t = e
        ? de.roundNumbers((fe.get(s, "width") + e) / 2, 8)
        : de.roundNumbers(fe.get(s, "width") / 2, 8),
      o = e
        ? de.roundNumbers((fe.get(s, "height") + e) / 2, 8)
        : de.roundNumbers(fe.get(s, "height") / 2, 8),
      i = fe.get(s, "x"),
      a = fe.get(s, "y"),
      r = fe.get(s, "theta"),
      u = {
        x: i - t,
        y: a + o,
      },
      l = {
        x: i + t,
        y: a + o,
      },
      c = {
        x: i + t,
        y: a - o,
      },
      d = {
        x: i - t,
        y: a - o,
      },
      f = {
        x: i,
        y: a,
      };
    let v = this.getLocation(f, u, r),
      w = this.getLocation(f, l, r),
      E = this.getLocation(f, c, r),
      C = this.getLocation(f, d, r),
      x = [v, w, E, C];
    return (
      (x = fe.orderBy(x, ["x", "y"], ["asc", "desc"])),
      (v = x[0]),
      (C = x[1]),
      (w = x[2]),
      (E = x[3]),
      {
        A: v,
        B: w,
        C: E,
        D: C,
      }
    );
  }
  static roundNumbers(s, e) {
    const t = !(Math.sign(s) > -1),
      o = Math.pow(10, e);
    return t == !0 ? (Math.round(s * -1 * o) / o) * -1 : Math.round(s * o) / o;
  }
  static isPointInRect(s, e) {
    const t = de.getVector(e.A, e.B),
      o = de.getVector(e.A, s),
      i = de.getVector(e.B, e.C),
      a = de.getVector(e.B, s),
      r = this.getDot(t, o),
      u = this.getDot(t, t),
      l = this.getDot(i, a),
      c = this.getDot(i, i);
    return 0 <= r && r <= u && 0 <= l && l <= c;
  }
  static distToSegment(s, e, t) {
    return Math.sqrt(this.distToSegmentSquared(s, e, t));
  }
  static OverlapsTwoArea(s, e) {
    const t = new lt.exports.Polygon(new lt.exports.Vector(), [
        new lt.exports.Vector(s.A.x, s.A.y),
        new lt.exports.Vector(s.B.x, s.B.y),
        new lt.exports.Vector(s.C.x, s.C.y),
        new lt.exports.Vector(s.D.x, s.D.y),
      ]),
      o = new lt.exports.Polygon(new lt.exports.Vector(), [
        new lt.exports.Vector(e.A.x, e.A.y),
        new lt.exports.Vector(e.B.x, e.B.y),
        new lt.exports.Vector(e.C.x, e.C.y),
        new lt.exports.Vector(e.D.x, e.D.y),
      ]);
    return lt.exports.testPolygonPolygon(t, o);
  }
}
const cr = "#1b3f94",
  dr = "#0000ff",
  gs = 0.0625;
class hr extends ts {
  constructor(e, t) {
    super(t);
    p(this, "poi");
    p(this, "param$");
    (this.degreeOffset = 90),
      (this.poi = e),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: e.resourceType,
      })),
      (this.param$ = new Me());
  }
  draw() {
    this.setModelType(),
      this.shapeGroup.destroyChildren(),
      (this.shape = this.dim()),
      (this.text = this.textOnPose(this.poi, this.poi.id, cr));
    const e = this.paramPoint(this.poi.paramPose, !1, !0);
    return (
      e && this.shapeGroup.add(e),
      this.shape && this.shapeGroup.add(this.shape),
      this.text && this.shapeGroup.add(this.text),
      this.shape && this.bindMouseOverEvent(!0, this.indicate),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    this.setModelType(),
      this.shapeGroup.destroyChildren(),
      (this.shape = this.dim(!0)),
      this.shapeGroup.add(this.shape);
    const e = this.poi.paramPose,
      t = this.paramPoint(e, !0),
      o = "Param",
      i = -6,
      a = this.positionText(e, o, dr, 8);
    a.offsetY(i),
      (this.editingParamSet = {
        shape: t,
        text: a,
      }),
      this.shapeGroup.add(t),
      this.shapeGroup.add(a);
    const r = ht.setNodeOutArea;
    return (
      this.bindEvent2SubResourceWithChecker(t, a, e, r, this.param$),
      (this.transformer = new F.Transformer()),
      this.transformer.resizeEnabled(!1),
      this.transformer.nodes([this.shape]),
      this.shapeGroup.add(this.transformer),
      this.shapeGroup.moveToTop(),
      this.bindEditingEvent2ShapeGroup(this.poi.pose),
      this.shapeGroup
    );
  }
  dim(e = !1) {
    const t = this.poi.pose,
      o = e ? "dim_edit" : `dim_${this.poi.id}`,
      i = this.mapTool.transformPoseM2PX(t),
      a = new Image(),
      r = this.poi.width,
      u = this.poi.height,
      l = r / 2,
      c = u / 2,
      d = new F.Image({
        id: o,
        x: i.x,
        y: i.y,
        rotation: i.degree,
        width: r,
        height: u,
        offsetX: l,
        offsetY: c,
        image: a,
        draggable: e,
      });
    return (
      (a.src =
        this.poi.type == "DIM1"
          ? "/monitoring/poi/dim1.svg"
          : "/monitoring/poi/dim2.svg"),
      d.rotation(d.rotation() + 90),
      (a.onload = () => {
        d.image(a);
      }),
      d
    );
  }
  setModelType() {
    const e = this.poi.dimModel;
    let t,
      o = 28,
      i = 28;
    typeof e == "object"
      ? ((t = e.type),
        (o = (e.width + gs + gs) * this.mapTool.M2PX),
        (i = t == "DIM1" ? e.height + gs : e.height),
        (i *= this.mapTool.M2PX))
      : (t = this.poi.type),
      (this.poi.width = o),
      (this.poi.height = i);
  }
  getTextOffsetY() {
    const e = this.poi.pose,
      t = e.theta < 0 ? 6.28 + e.theta : e.theta;
    let o = this.poi.width,
      i = -8;
    return (
      t > Math.PI * 0.25 &&
        t < Math.PI * 0.75 &&
        ((o = this.poi.height * -1), (i = 15)),
      t > Math.PI * 1.25 && t < Math.PI * 1.75 && (i = this.poi.height),
      o / -2 + i
    );
  }
}
const pr = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "Dim",
};
class di extends It {
  constructor(e, t) {
    super(e, t);
    p(this, "pose");
    p(this, "paramPose");
    p(this, "dimModel");
    p(this, "unparkDistance");
    p(this, "unparkBackward");
    p(this, "tags", []);
    p(this, "shape");
    p(this, "width", 1);
    p(this, "height", 1);
    p(this, "type");
    (this.pose = new Ie(e.pose)),
      (this.paramPose = new Ie(e.param_point.pose)),
      (this.type = e.type),
      typeof e.DIMFactory == "object"
        ? ((this.dimModel = new za(e.DIMFactory)),
          (this.type = e.DIMFactory.type),
          (this.width = this.dimModel.width),
          (this.height = this.dimModel.height))
        : (this.dimModel = e.DIMFactory),
      (this.unparkDistance = e.unpark.distance),
      (this.unparkBackward = e.unpark.backward),
      e.tags.forEach((o) => this.tags.push(o)),
      (this.shape = new hr(this, t));
  }
  static getDefaultData(e, t, o) {
    const i = o != null ? o : "DIM1";
    return {
      ...pr,
      map: e,
      pose: {
        x: t.x,
        y: t.y,
        degree: 0,
        theta: 0,
      },
      unpark: {
        distance: 1,
        backward: !0,
      },
      param_point: {
        pose: {
          x: t.x - 1.5,
          y: t.y,
          degree: 0,
          theta: 0,
        },
      },
      DIMFactory: "",
      type: i,
      tags: [],
    };
  }
  serialize(e = !1) {
    const t = this.serializeBase(),
      o = [];
    this.tags.forEach((a) => o.push(a));
    const i = {
      ...t,
      pose: this.pose.serialize(),
      unpark: {
        distance: this.unparkDistance,
        backward: this.unparkBackward,
      },
      param_point: {
        pose: this.paramPose.serialize(),
      },
      DIMFactory:
        typeof this.dimModel == "object" ? this.dimModel.id : this.dimModel,
      tags: o,
    };
    return (
      e &&
        typeof this.dimModel == "object" &&
        (i.DIMFactory = this.dimModel.serialize()),
      i
    );
  }
}
const fr = "#1b3f94",
  gr = "#0000ff";
class mr extends ts {
  constructor(e, t) {
    super(t);
    p(this, "poi");
    p(this, "param$");
    (this.degreeOffset = 90),
      (this.poi = e),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: e.resourceType,
      })),
      (this.param$ = new Me());
  }
  draw() {
    this.shapeGroup.destroyChildren(),
      (this.shape = this.markerSide()),
      (this.text = this.textOnPose(this.poi, this.poi.id, fr));
    const e = this.paramPoint(this.poi.paramPose);
    return (
      e && this.shapeGroup.add(e),
      this.shape && this.shapeGroup.add(this.shape),
      this.text && this.shapeGroup.add(this.text),
      this.shape && this.bindMouseOverEvent(!0, this.indicate),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    this.shapeGroup.destroyChildren(),
      (this.shape = this.markerSide(!0)),
      this.shapeGroup.add(this.shape);
    const e = this.poi.paramPose,
      t = this.paramPoint(e, !0),
      o = "Param",
      i = -6,
      a = this.positionText(e, o, gr, 8);
    a.offsetY(i),
      (this.editingParamSet = {
        shape: t,
        text: a,
      }),
      this.shapeGroup.add(t),
      this.shapeGroup.add(a);
    const r = ht.setNodeOutArea;
    return (
      this.bindEvent2SubResourceWithChecker(t, a, e, r, this.param$),
      (this.transformer = new F.Transformer()),
      this.transformer.resizeEnabled(!1),
      this.transformer.nodes([this.shape]),
      this.shapeGroup.add(this.transformer),
      this.shapeGroup.moveToTop(),
      this.bindEditingEvent2ShapeGroup(this.poi.pose),
      this.shapeGroup
    );
  }
  markerSide(e = !1) {
    const t = e ? "marker_edit" : `markerFront_${this.poi.id}`,
      o = this.mapTool.transformPoseM2PX(this.poi.pose),
      i = new Image(),
      a = new F.Image({
        id: t,
        x: o.x,
        y: o.y,
        rotation: o.degree,
        width: 32,
        height: 32,
        offset: {
          x: 16,
          y: 16,
        },
        image: i,
        draggable: e,
      });
    return (
      (i.onload = () => {
        a.image(i), a.rotation(a.rotation() + 90);
      }),
      this.poi.parkingOffset.y < 0
        ? (i.src = "/monitoring/poi/marker_side_l.svg")
        : (i.src = "/monitoring/poi/marker_side_r.svg"),
      a
    );
  }
}
const yr = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "Robostop",
};
class hi extends It {
  constructor(e, t) {
    super(e, t);
    p(this, "pose");
    p(this, "parkingOffset");
    p(this, "unparkDistance");
    p(this, "unparkBackward");
    p(this, "markers", []);
    p(this, "length");
    p(this, "barrierX");
    p(this, "barrierY");
    p(this, "paramPose");
    p(this, "shape");
    (this.pose = new Ie(e.pose)),
      (this.parkingOffset = new Ie(e.parking_offset)),
      (this.unparkDistance = e.unpark.distance),
      (this.unparkBackward = e.unpark.backward),
      e.markers.forEach((o) => this.markers.push(new mn(o))),
      (this.length = e.length),
      (this.barrierX = e.barrier.x),
      (this.barrierY = e.barrier.y),
      (this.paramPose = new Ie(e.param_point.pose)),
      (this.shape = new mr(this, t));
  }
  static getDefaultData(e, t) {
    return {
      ...yr,
      map: e,
      pose: {
        x: t.x,
        y: t.y,
        degree: 0,
        theta: 0,
      },
      parking_offset: {
        x: 0,
        y: 0.2,
        degree: 0,
        theta: 0,
      },
      unpark: {
        distance: 0.6,
        backward: !0,
      },
      markers: [
        {
          no: 0,
          id: 1,
          rid: 4,
          x: 0.3,
          y: 0,
          z: 0.37,
          rx: -1.5708,
          ry: 0,
          rz: 3.1415,
        },
        {
          no: 1,
          id: 2,
          rid: 4,
          x: -0.3,
          y: 0,
          z: 0.37,
          rx: -1.5708,
          ry: 0,
          rz: 3.1415,
        },
      ],
      length: 1,
      barrier: {
        x: -0.2,
        y: 0,
      },
      param_point: {
        pose: {
          x: t.x - 1.5,
          y: t.y + 0.5,
          degree: 0,
          theta: 0,
        },
      },
    };
  }
  serialize() {
    const e = this.serializeBase(),
      t = [];
    return (
      this.markers.forEach((i) => t.push(i.serialize())),
      {
        ...e,
        pose: this.pose.serialize(),
        parking_offset: this.parkingOffset.serialize(),
        unpark: {
          distance: this.unparkDistance,
          backward: this.unparkBackward,
        },
        markers: t,
        length: this.length,
        barrier: {
          x: this.barrierX,
          y: this.barrierY,
        },
        param_point: {
          pose: this.paramPose.serialize(),
        },
      }
    );
  }
}
const vr = "#1b3f94",
  _r = "#0000ff";
class xr extends ts {
  constructor(e, t) {
    super(t);
    p(this, "poi");
    p(this, "param$");
    (this.degreeOffset = 90),
      (this.poi = e),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: e.resourceType,
      })),
      (this.param$ = new Me());
  }
  draw() {
    this.shapeGroup.destroyChildren(),
      (this.shape = this.markerFront()),
      (this.text = this.textOnPose(this.poi, this.poi.id, vr));
    const e = this.paramPoint(this.poi.paramPose),
      t = this.paramLine();
    return (
      t && this.shapeGroup.add(t),
      e && this.shapeGroup.add(e),
      this.shape && this.shapeGroup.add(this.shape),
      this.text && this.shapeGroup.add(this.text),
      this.shape && this.bindMouseOverEvent(!0, this.indicate),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    this.shapeGroup.destroyChildren(),
      (this.shape = this.markerFront(!0)),
      this.shapeGroup.add(this.shape);
    const e = this.poi.paramPose,
      t = this.paramPoint(e, !0),
      o = "Param",
      i = -6,
      a = this.positionText(e, o, _r, 8);
    a.offsetY(i),
      (this.editingParamSet = {
        shape: t,
        text: a,
      }),
      this.shapeGroup.add(t),
      this.shapeGroup.add(a);
    const r = ht.setNodeOutArea;
    return (
      this.bindEvent2SubResourceWithChecker(t, a, e, r, this.param$),
      (this.transformer = new F.Transformer()),
      this.transformer.resizeEnabled(!1),
      this.transformer.nodes([this.shape]),
      this.shapeGroup.add(this.transformer),
      this.shapeGroup.moveToTop(),
      this.bindEditingEvent2ShapeGroup(this.poi.pose),
      this.shapeGroup
    );
  }
  markerFront(e = !1) {
    const t = e ? "marker_edit" : `markerFront_${this.poi.id}`,
      o = this.mapTool.transformPoseM2PX(this.poi.pose),
      i = new Image(),
      a = new F.Image({
        id: t,
        x: o.x,
        y: o.y,
        rotation: o.degree,
        width: 20,
        height: 20,
        offset: {
          x: 10,
          y: 10,
        },
        image: i,
        draggable: e,
      });
    return (
      (i.onload = () => {
        a.image(i), a.rotation(a.rotation() + this.degreeOffset);
      }),
      (i.src = "/monitoring/poi/marker_front.svg"),
      a
    );
  }
  paramLine() {
    const e = this.poi.pose,
      t = this.mapTool.transformPoseM2PX(e),
      o = this.poi.paramPose,
      i = this.mapTool.transformPoseM2PX(o),
      a = [t.x, t.y, i.x, i.y];
    return new F.Line({
      points: a,
      name: "Sub",
      stroke: "#646464",
      strokeWidth: 0.4,
      dash: [1, 0.5],
    });
  }
}
const Dr = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "Marker",
};
class ks extends It {
  constructor(e, t) {
    var o, i, a, r, u, l, c, d;
    super(e, t);
    p(this, "pose");
    p(this, "parkingOffset");
    p(this, "unparkDistance");
    p(this, "unparkBackward");
    p(this, "marker");
    p(this, "barrier");
    p(this, "paramPose");
    p(this, "paramLandformType");
    p(this, "paramLandformMaxSpeed");
    p(this, "paramLandformMaxAngularSpeed");
    p(this, "gocartMarker");
    p(this, "chargeable");
    p(this, "chargerType");
    p(this, "tags", []);
    p(this, "useLine");
    p(this, "lineColor");
    p(this, "lineTolerance");
    p(this, "lineWidth");
    p(this, "lineHeight");
    p(this, "shape");
    (this.pose = new Ie(e.pose)),
      (this.parkingOffset = new Ie(e.parking_offset)),
      (this.unparkDistance = e.unpark.distance),
      (this.unparkBackward = e.unpark.backward),
      (this.marker = new mn(e.marker_value)),
      (this.barrier = e.barrier),
      (this.paramPose = new Ie(e.param_point.pose)),
      (this.paramLandformType = e.param_point.landform.type),
      (this.paramLandformMaxSpeed = e.param_point.landform.max_speed),
      (this.paramLandformMaxAngularSpeed =
        e.param_point.landform.max_angular_speed),
      (this.gocartMarker = e.gocart_marker),
      (this.chargeable = e.chargeable),
      (this.chargerType = e.charger_type),
      e.tags.forEach((f) => this.tags.push(f)),
      (this.useLine = !!e.line),
      (this.lineColor =
        (i = (o = e.line) == null ? void 0 : o.color) != null ? i : "#000000"),
      (this.lineTolerance =
        (r = (a = e.line) == null ? void 0 : a.tolerance) != null ? r : 0.003),
      (this.lineWidth =
        (l = (u = e.line) == null ? void 0 : u.width) != null ? l : 0.048),
      (this.lineHeight =
        (d = (c = e.line) == null ? void 0 : c.height) != null ? d : 0),
      (this.shape = new xr(this, t));
  }
  static getDefaultData(e, t) {
    return {
      ...Dr,
      map: e,
      pose: {
        x: t.x,
        y: t.y,
        degree: 0,
        theta: 0,
      },
      parking_offset: {
        x: -0.1,
        y: 0,
        degree: 0,
        theta: 0,
      },
      unpark: {
        distance: 1,
        backward: !0,
      },
      marker_value: {
        no: 0,
        id: 0,
        rid: 4,
        x: 0,
        y: 0,
        z: 0.37,
        rx: -1.5708,
        ry: 0,
        rz: -1.5708,
      },
      barrier: -0.2,
      param_point: {
        pose: {
          x: t.x + 0.6,
          y: t.y,
          degree: 180,
          theta: 3.14,
        },
        landform: {
          type: "flat",
          max_speed: 1,
          max_angular_speed: 1,
        },
      },
      gocart_marker: !0,
      chargeable: !1,
      charger_type: "",
      tags: [],
    };
  }
  serialize() {
    const e = this.serializeBase(),
      t = [];
    this.tags.forEach((i) => t.push(i));
    const o = {
      ...e,
      pose: this.pose.serialize(),
      parking_offset: this.parkingOffset.serialize(),
      unpark: {
        distance: this.unparkDistance,
        backward: this.unparkBackward,
      },
      marker_value: this.marker.serialize(),
      barrier: this.barrier,
      param_point: {
        pose: this.paramPose.serialize(),
        landform: {
          type: this.paramLandformType,
          max_speed: this.paramLandformMaxSpeed,
          max_angular_speed: this.paramLandformMaxAngularSpeed,
        },
      },
      gocart_marker: this.gocartMarker,
      chargeable: this.chargeable,
      charger_type: this.chargerType,
      tags: t,
    };
    return (
      this.chargeable || delete o.charger_type,
      this.useLine &&
        (o.line = {
          color: this.lineColor,
          tolerance: this.lineTolerance,
          width: this.lineWidth,
          height: this.lineHeight,
        }),
      o
    );
  }
}
class po extends It {
  constructor(e, t) {
    super(e, t);
    p(this, "waitingLocations", []);
    p(this, "deletedLocations", []);
  }
  addWaitingLocationByPoint(e) {
    const t = tt.getDefaultData(this.mapId, e),
      o = new bs({
        length: 10,
      });
    return (
      (t.type = "waiting"),
      (t.name = `${this.resourceType}-waiting${
        this.waitingLocations.length
      }-${o.randomUUID()}`),
      this.waitingLocations.push(new tt(t, this.mapTool))
    );
  }
  deleteWaitingLocationByIndex(e) {
    const t = fe.cloneDeep(this.waitingLocations[e]);
    this.waitingLocations.splice(e, 1), this.deletedLocations.push(t);
  }
  async create(e) {
    return (
      console.log("[AreaResourceClass]::create method"),
      (e = await this.createLocations(e)),
      super.create(e)
    );
  }
  async update(e) {
    return (e = await this.updateLocations(e)), super.update(e);
  }
  async updateLocations(e) {
    const t = [];
    for (const o of this.waitingLocations)
      if (o.id == "new-id") {
        const i = await Ut(o.resourceType, o.serialize()).catch((r) => {
            console.log("[ResourceCard]::updateResource::createLocation", r);
          }),
          a = i && i.id;
        a && (t.push(a), (o.id = a));
      } else
        await Vo(o.resourceType, o.serialize()).catch((i) => {
          console.log("[ResourceCard]::updateResource::updateLocation", i);
        }),
          t.push(o.id);
    return fe.set(e, "resource_waitings", t), e;
  }
  async createLocations(e) {
    const t = [];
    for (const o of this.waitingLocations) {
      const i = await Ut(o.resourceType, o.serialize()).catch((r) => {
          throw (
            (console.log(
              "[AreaResourceClass]::createResource::createLocations",
              r
            ),
            r)
          );
        }),
        a = i && i.id;
      a && t.push(a);
    }
    return fe.set(e, "resource_waitings", t), e;
  }
  async deleteLocations() {
    for (const e of this.deletedLocations)
      if (e.id !== "new-id") {
        const t = await Sa(e.resourceType, e.id).catch((o) => {
          console.log("[AreaResourceClass]::updateResource::deleteLocation", o);
        });
        console.log("[AreaResourceClass]::delete::res", t);
      }
    return Un.exports.result;
  }
}
class fo extends Mo {
  constructor(e, t) {
    super(t);
    p(this, "areaPoi");
    p(this, "area$");
    p(this, "editingAligns", []);
    p(this, "editingWaitings", []);
    p(this, "degreeOffset", 0);
    p(this, "SHAPE_MIN_PX", 3.75);
    (this.areaPoi = e), (this.area$ = new Me());
  }
  move(e) {
    const t = this.mapTool.transformAreaM2PX(e);
    this.shape.x(t.x),
      this.shape.y(t.y),
      this.shape.width(t.width),
      this.shape.height(t.height),
      this.shape.offsetX(t.offsetX),
      this.shape.offsetY(t.offsetY),
      this.shape.rotation(t.rotation),
      console.log("[AreaShape]::move", t);
  }
  moveAlign(e, t) {
    const { shape: o, text: i } = this.editingAligns[e],
      a = this.mapTool.transformPoseM2PX(t);
    console.log("@@@___[AreaShape]::moveAlign", e, o, i, t),
      o.x(a.x),
      o.y(a.y),
      o.rotation(a.degree),
      i.x(a.x),
      i.y(a.y);
  }
  moveWaitingLocation(e, t) {
    const { shape: o, text: i } = this.editingWaitings[e],
      a = this.mapTool.transformPoseM2PX(t);
    console.log("@@@___[AreaShape]::moveWaiting", e, o, i, t),
      o.x(a.x),
      o.y(a.y),
      o.rotation(a.degree),
      i.x(a.x),
      i.y(a.y),
      i.rotation(a.degree);
  }
  textOnArea(e, t = "#272727", o = 12, i = !1) {
    const a = `name_${e.id}`,
      r = this.mapTool.getAreaCenterM2PX(e.area),
      u = 0,
      l = e.name,
      c =
        i && (l == null ? void 0 : l.length) > 13
          ? `${l == null ? void 0 : l.substring(0, 13)}...`
          : l,
      d = new F.Text({
        id: a,
        name: "Title",
        ...r,
        text: c,
        fontSize: o,
        fill: t,
      });
    return (
      d.rotation(u), d.offsetX(d.width() / 2), d.offsetY(d.height() / 2 - 8), d
    );
  }
  resetWaitingLocations(e, t) {
    this.editingWaitings.forEach((o) => {
      o.shape.destroy(), o.text.destroy(), o.pose$.complete();
    }),
      (this.editingWaitings = []),
      this.editWaitingLocations(e, t);
  }
  clearWaitingLocations() {
    this.editingWaitings.forEach((e) => {
      e.shape.destroy(), e.text.destroy(), e.pose$.complete();
    }),
      (this.editingWaitings = []);
  }
  drawAligns(e, t) {
    e.forEach((o) => {
      this.shapeGroup.add(this.align(o, t));
    });
  }
  drawWaitingLocations(e, t) {
    e.forEach((o) => {
      this.shapeGroup.add(this.locationWaiting(o.pose, t));
    });
  }
  editAligns(e, t, o, i, a) {
    e.forEach((r, u) => {
      const l = this.align(r, t, !0, u),
        c = i ? i[u] : `Align ${u + 1}`,
        d = this.positionText(r, c, t, 8),
        f = {
          shape: l,
          text: d,
          pose$: new Me(),
        },
        v = a
          ? a == "in"
            ? ht.setNodeInArea
            : ht.setNodeOutArea
          : ht.setNodeOnAreaEdge;
      this.shapeGroup.add(l),
        this.shapeGroup.add(d),
        this.editingAligns.push(f),
        this.bindEvent2SubResourceWithChecker(f, this.areaPoi.area, r, v, o);
    });
  }
  editWaitingLocations(e, t, o) {
    e.forEach((i, a) => {
      const r = this.locationWaiting(i.pose, t, !0),
        u = i.pose,
        l = o || `W${a + 1}`,
        c = this.positionText(u, l, t, 6),
        d = {
          shape: r,
          text: c,
          pose$: new Me(),
        },
        f = ht.setNodeOutArea;
      this.shapeGroup.add(r),
        this.shapeGroup.add(c),
        this.editingWaitings.push(d),
        this.bindEvent2SubResourceWithChecker(d, this.areaPoi.area, u, f);
    });
  }
  bindEvent2SubResourceWithChecker(e, t, o, i, a) {
    const { shape: r, text: u, pose$: l } = e;
    r.on("dragstart", () => {
      r.x(), r.y();
    }),
      r.on("dragmove", () => {
        const c = this.mapTool.transformPointPX2M({
            x: r.x(),
            y: r.y(),
          }),
          d = i(c, t, a),
          f = this.mapTool.transformPoseM2PX({
            x: d[0],
            y: d[1],
            theta: o.theta,
          });
        r.x(f.x),
          r.y(f.y),
          u.x(r.x()),
          u.y(r.y()),
          (o.x = d[0]),
          (o.y = d[1]),
          l.next(o);
      }),
      r.on("dragend", () => {}),
      r.on("mouseenter", () => {
        r.getStage().container().style.cursor = "pointer";
      });
  }
  bindEvent2AreaShapeGroup(e) {
    const t = this.shape,
      o = this.shapeGroup,
      i = this.transformer,
      a = this.areaPoi.area,
      r = this.degreeOffset,
      u = {
        x: 0,
        y: 0,
        theta: 0,
      },
      l = {
        x: 1,
        y: 1,
      };
    t.on("dragstart", () => {
      (u.x = t.x()), (u.y = t.y());
    }),
      t.on("dragmove", () => {
        const c = t.x() - u.x,
          d = t.y() - u.y;
        (u.x = t.x()),
          (u.y = t.y()),
          this.mapTool.changeAreaXYByPointPX2M(a, {
            x: t.x(),
            y: t.y(),
          }),
          this.area$.next(a),
          o.getChildren().map((f) => {
            t._id != f._id &&
              (f.x(f.x() + c),
              f.y(f.y() + d),
              f.attrs.resource &&
                this.changeResourcePoseByDelta(f.attrs.resource, c, d, 0));
          });
      }),
      t.on("transformstart", () => {
        (u.x = t.x()),
          (u.y = t.y()),
          (u.theta = t.rotation()),
          (l.x = t.width() * t.scaleX()),
          (l.y = t.height() * t.scaleY());
      }),
      t.on("transform", (c) => {
        console.log(
          ">>> [ShapeArea]::Transform",
          i.getActiveAnchor(),
          t.scaleX(),
          t.scaleY(),
          c
        ),
          t.scaleX() < 0 &&
            (console.log(
              ">>>-----[ShapeArea]::Transform-flipped::X",
              i,
              t.scaleX()
            ),
            t.scaleX(t.scaleX() * -1)),
          t.scaleY() < 0 &&
            (console.log(
              ">>>-----[ShapeArea]::Transform-flipped::Y",
              i,
              t.scaleY()
            ),
            t.scaleY(t.scaleY() * -1)),
          t.width() * t.scaleX() < this.SHAPE_MIN_PX &&
            (i.stopTransform(), t.scaleX((this.SHAPE_MIN_PX + 1) / t.width())),
          t.height() * t.scaleY() < this.SHAPE_MIN_PX &&
            (i.stopTransform(), t.scaleY((this.SHAPE_MIN_PX + 1) / t.height()));
        const d = i.getActiveAnchor(),
          f = t.rotation() - u.theta,
          v = t.width() * t.scaleX() - l.x,
          w = t.height() * t.scaleY() - l.y;
        (u.x = t.x()),
          (u.y = t.y()),
          (u.theta = t.rotation()),
          (l.x = t.width() * t.scaleX()),
          (l.y = t.height() * t.scaleY());
        const E = {
          x: t.x(),
          y: t.y(),
          degree: t.rotation() - r,
          width: t.width() * t.scaleX(),
          height: t.height() * t.scaleY(),
        };
        this.mapTool.changeAreaByNewAreaPX2M(a, E),
          this.area$.next(a),
          o.getChildren().map((C) => {
            if (t._id != C._id && C.getClassName() != "Transformer")
              switch (d) {
                case "rotater":
                  const x = this.mapTool.transformByDegree(
                    {
                      x: C.x(),
                      y: C.y(),
                    },
                    {
                      x: t.x(),
                      y: t.y(),
                      theta: f * -1,
                    }
                  );
                  this.handleRotation(C, x, f), e && e(t, a);
                  break;
                case "top-left":
                  this.handleAnchorMovingY(C, t, w * -1, -1),
                    this.handleAnchorMovingX(C, t, v * -1, -1);
                  break;
                case "top-center":
                  this.handleAnchorMovingY(C, t, w * -1, -1);
                  break;
                case "top-right":
                  this.handleAnchorMovingY(C, t, w * -1, -1),
                    this.handleAnchorMovingX(C, t, v, 1);
                  break;
                case "middle-left":
                  this.handleAnchorMovingX(C, t, v * -1, -1);
                  break;
                case "middle-right":
                  this.handleAnchorMovingX(C, t, v, 1);
                  break;
                case "bottom-left":
                  this.handleAnchorMovingY(C, t, w, 1),
                    this.handleAnchorMovingX(C, t, v * -1, -1);
                  break;
                case "bottom-center":
                  this.handleAnchorMovingY(C, t, w, 1);
                  break;
                case "bottom-right":
                  this.handleAnchorMovingY(C, t, w, 1),
                    this.handleAnchorMovingX(C, t, v, 1);
                  break;
              }
          });
      }),
      t.on("mouseenter", () => {
        t.getStage().container().style.cursor = "pointer";
      });
  }
  handleAnchorMovingX(e, t, o, i) {
    const a = this.mapTool.transformByDegree(
      {
        x: e.x(),
        y: e.y(),
      },
      {
        x: t.x(),
        y: t.y(),
        theta: t.rotation(),
      }
    );
    if (i > 0 ? a.x <= t.x() : a.x > t.x()) return;
    const u = this.mapTool.transformByDegree(
      {
        x: a.x + o,
        y: a.y,
      },
      {
        x: t.x(),
        y: t.y(),
        theta: t.rotation() * -1,
      }
    );
    e.x(u.x),
      e.y(u.y),
      e.attrs.resource &&
        this.changeResourcePose(e.attrs.resource, u, e.rotation());
  }
  handleAnchorMovingY(e, t, o, i) {
    const a = this.mapTool.transformByDegree(
      {
        x: e.x(),
        y: e.y(),
      },
      {
        x: t.x(),
        y: t.y(),
        theta: t.rotation(),
      }
    );
    if (i > 0 ? a.y <= t.y() : a.y > t.y()) return;
    const u = this.mapTool.transformByDegree(
      {
        x: a.x,
        y: a.y + o,
      },
      {
        x: t.x(),
        y: t.y(),
        theta: t.rotation() * -1,
      }
    );
    e.x(u.x),
      e.y(u.y),
      e.attrs.resource &&
        this.changeResourcePose(e.attrs.resource, u, e.rotation());
  }
  handleRotation(e, t, o) {
    const i = e.rotation() + o;
    e.x(t.x),
      e.y(t.y),
      e.rotation(i),
      e.attrs.resource && this.changeResourcePose(e.attrs.resource, t, i);
  }
}
const wr = "#00f0ff",
  br = "#0000ff",
  Cr = "#00f0ff",
  pi = "#0000ff",
  Er = 0.2;
class Ar extends fo {
  constructor(e, t) {
    super(e, t);
    p(this, "poi");
    (this.poi = e),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: e.resourceType,
      }));
  }
  draw() {
    return (
      this.shapeGroup.destroyChildren(),
      console.log("[AutodoorShape]::draw", this),
      (this.shape = this.autodoor()),
      (this.text = this.textOnArea(this.poi)),
      this.text && this.shapeGroup.add(this.text),
      this.shape && this.shapeGroup.add(this.shape),
      this.drawAligns(this.poi.aligns, wr),
      this.drawWaitingLocations(this.poi.waitingLocations, Cr),
      this.shape && this.bindMouseOverEvent(!0, this.indicate),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    return (
      this.shapeGroup.destroyChildren(),
      console.log("[AutodoorShape]::edit", this),
      (this.shape = this.autodoor(!0)),
      this.shapeGroup.add(this.shape),
      this.editAligns(this.poi.aligns, br, Er),
      this.editWaitingLocations(this.poi.waitingLocations, pi),
      (this.transformer = new F.Transformer({
        boundBoxFunc: (e, t) => (Math.abs(t.width) < 50 ? e : t),
        flipEnabled: !1,
      })),
      this.transformer.nodes([this.shape]),
      this.shapeGroup.add(this.transformer),
      this.bindEvent2AreaShapeGroup(),
      this.shapeGroup
    );
  }
  redrawWaitingLocations() {
    this.resetWaitingLocations(this.poi.waitingLocations, pi);
  }
  autodoor(e = !1) {
    const t = this.poi.area,
      o = e ? "autodoor_edit" : `autodoor_${this.poi.id}`,
      i = this.mapTool.transformAreaM2PX(t);
    return new F.Rect({
      id: o,
      ...i,
      stroke: "#00F0FF",
      strokeWidth: 1,
      strokeScaleEnabled: !1,
      draggable: e,
      opacity: this.mapTool.getOpacity(),
      fill: "rgba(0,240,255,0.1)",
    });
  }
}
const kr = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "Autodoor",
};
class fi extends po {
  constructor(e, t) {
    super(e, t);
    p(this, "area");
    p(this, "aligns", []);
    p(this, "properties");
    p(this, "shape");
    (this.area = new eo(e.areas[0])),
      e.aligns.forEach((i) => this.aligns.push(new Ie(i))),
      e.resource_waitings.forEach((i) =>
        this.waitingLocations.push(new tt(i, t))
      ),
      (this.properties = new yn(e.properties)),
      console.log("[ResourceInit]:", this.constructor.name, this),
      (this.shape = new Ar(this, t));
  }
  static getDefaultData(e, t) {
    return {
      ...kr,
      map: e,
      areas: [
        {
          x: t.x,
          y: t.y,
          theta: 0,
          width: 0.5,
          height: 4,
        },
      ],
      aligns: [
        {
          x: t.x - 0.25 - 0.1,
          y: t.y,
          theta: 0,
          degree: 0,
        },
        {
          x: t.x + 0.25 + 0.1,
          y: t.y,
          theta: 3.14,
          degree: 180,
        },
      ],
      resource_waitings: [],
      properties: {
        connection: {
          ip: "localhost",
          port: 1234,
          group_id: [1],
          open_check: 0,
          close_check: 1,
          auth_id: "root",
          auth_pw: "00000000",
        },
        vendor: "virtual",
        wait_close: !1,
      },
    };
  }
  serialize(e = !1) {
    const t = this.serializeBase(),
      o = [],
      i = [],
      a = [];
    this.aligns.forEach((u) => o.push(u.serialize())),
      this.waitingLocations.forEach((u) => {
        i.push(u.serialize()), a.push(u.id);
      });
    const r = {
      ...t,
      areas: [this.area.serialize()],
      aligns: o,
      resource_waitings: a,
      properties: this.properties.serialize(),
    };
    return e && (r.resource_waitings = i), r;
  }
}
const Fr = void 0,
  Pr = "#00f0ff",
  gi = "#0000ff";
class Sr extends fo {
  constructor(e, t) {
    super(e, t);
    p(this, "poi");
    p(this, "door$");
    p(this, "doorArea$");
    p(this, "doorArea");
    p(this, "doorAreaView");
    p(this, "doorPointTexts");
    p(this, "doorAreaPointTexts");
    (this.poi = e),
      (this.degreeOffset = 0),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: e.resourceType,
      })),
      (this.door$ = new Me()),
      (this.doorArea$ = new Me());
  }
  draw() {
    return (
      this.shapeGroup.destroyChildren(),
      console.log("[AutodoorExtShape]::draw", this),
      (this.shape = this.autodoor()),
      (this.doorAreaView = this.autodoorAreaView()),
      (this.text = this.drawTextOnLine(Fr)),
      this.doorAreaView && this.shapeGroup.add(this.doorAreaView),
      this.shape && this.shapeGroup.add(this.shape),
      this.text && this.shapeGroup.add(this.text),
      this.poi.aligns.forEach((t, o) => {
        this.shapeGroup.add(this.alignImage(t.pose, o));
      }),
      this.drawWaitingLocations(this.poi.waitingLocations, Pr),
      this.shape && this.bindMouseOverEvent(!0, this.indicate),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    this.shapeGroup.destroyChildren(),
      console.log("[AutodoorExtShape]::edit", this),
      (this.shape = this.autodoor(!0)),
      (this.doorArea = this.autodoorArea()),
      this.shapeGroup.add(this.doorArea),
      this.shapeGroup.add(this.shape);
    const e = [];
    return (
      this.poi.aligns.forEach((t) => e.push(t.pose)),
      this.editAligns([e[0]], "green", 0, ["Entry1"], "out"),
      this.editAligns([e[1]], "green", 0, ["Exit1"], "out"),
      this.editAligns([e[2]], "black", 0, ["Entry2"], "out"),
      this.editAligns([e[3]], "black", 0, ["Exit2"], "out"),
      this.editWaitingLocations(this.poi.waitingLocations, gi),
      this.doorEditor(),
      this.doorAreaEditor(),
      this.bindEvent2ShapeGroup(),
      this.shapeGroup
    );
  }
  redrawWaitingLocations() {
    this.resetWaitingLocations(this.poi.waitingLocations, gi);
  }
  autodoor(e = !1) {
    const t = e ? "autodoorExt_edit" : `autodoorExt_${this.poi.id}`,
      o = [],
      i = [];
    this.poi.door.map((d, f) => {
      const v = this.mapTool.transformPointM2PX(d);
      i.push(v), o.push(v.x), o.push(v.y);
    });
    const { center: r, length: u } = this.getCenterNLengthFromPoints(
        i[0],
        i[1]
      ),
      l = new Image(20, 4),
      c = e
        ? new F.Line({
            id: t,
            points: o,
            stroke: "rgba(70,70,74,0.5)",
            strokeWidth: 6,
            draggable: e,
          })
        : new F.Image({
            id: t,
            x: r.x,
            y: r.y,
            width: u,
            height: u * 0.2,
            image: l,
          });
    return (
      e ||
        ((l.src = "/monitoring/poi/autodoor_line.svg"),
        (l.onload = () => {
          c.offsetX(c.width() / 2),
            c.offsetY(c.height() / 2),
            c.rotation(this.getAngleFromPoints(i[0], i[1]));
        })),
      c
    );
  }
  doorEditor() {
    const e = this.poi.door;
    (this.doorPointTexts = []),
      e.map((t, o) => {
        const i = this.mapTool.transformPointM2PX(t),
          a = new F.Rect({
            _index: o,
            x: i.x,
            y: i.y,
            width: 6,
            height: 6,
            offsetX: 3,
            offsetY: 3,
            strokeWidth: 2,
            fill: "rgba(70,70,74,0.8)",
            stroke: "gray",
            draggable: !0,
          }),
          r = new F.Text({
            _index: o,
            x: i.x,
            y: i.y,
            text: `${o + 1}`,
            fontSize: 7,
            fill: "gray",
            offsetX: 8,
            offsetY: 8,
          });
        this.doorPointTexts.push(r),
          this.shapeGroup.add(a),
          this.shapeGroup.add(r),
          a.on("mouseenter", () => {
            this.shape.getStage().container().style.cursor = "pointer";
          }),
          a.on("mouseleave", () => {
            this.shape.getStage().container().style.cursor = "auto";
          });
        let u = 0,
          l = 0;
        a.on("dragstart", () => {
          (u = a.x()), (l = a.y());
        }),
          a.on("dragmove", () => {
            const c = a.x() - u,
              d = a.y() - l;
            (u = a.x()), (l = a.y());
            const f = this.shape,
              v = f.points()[o * 2] + c,
              w = f.points()[o * 2 + 1] + d;
            f.points().splice(o * 2, 2, v, w),
              this.doorPointTexts[o].move({
                x: c,
                y: d,
              }),
              this.changeResourcePoseByDelta(t, c, d),
              this.door$.next(this.poi.door);
          });
      });
  }
  autodoorArea() {
    const e = "autodoorExt_area_edit",
      t = [];
    return (
      this.poi.doorArea.map((a) => {
        const r = this.mapTool.transformPointM2PX(a);
        t.push(r.x), t.push(r.y);
      }),
      new F.Line({
        id: e,
        points: t,
        stroke: "rgba(0,240,255,0.5)",
        strokeWidth: 1,
        fill: "rgba(0,240,255,0.05)",
        closed: !0,
      })
    );
  }
  autodoorAreaView() {
    const e = `autodoorExt_area_${this.poi.id}`,
      t = [],
      o = [],
      i = this.poi.doorArea,
      r = this.poi.door.map((x) => this.mapTool.transformPointM2PX(x)),
      u = i.map((x) => this.mapTool.transformPointM2PX(x)),
      l = Math.abs(this.getAngleFromPoints(r[0], r[1]) - 360),
      c = Math.abs(this.getAngleFromPoints(u[0], u[1]) - 360);
    let d;
    Math.abs(c - l) < 45
      ? (d = this.getHorizontalAreas(u))
      : (d = this.getVerticalAreas(u)),
      d.forEach((x, b) => {
        b < 4 ? (t.push(x.x), t.push(x.y)) : (o.push(x.x), o.push(x.y));
      });
    const f = new F.Group({
        id: e,
      }),
      v = new F.Line({
        points: t,
        stroke: "rgba(70,70,74,0.5)",
        strokeWidth: 1,
      }),
      w = new F.Line({
        points: t,
        fill: "rgba(70,70,74,0.05)",
        closed: !0,
      }),
      E = new F.Line({
        points: o,
        stroke: "rgba(0,240,255,0.5)",
        strokeWidth: 1,
      }),
      C = new F.Line({
        points: o,
        fill: "rgba(0,240,255,0.05)",
        closed: !0,
      });
    return f.add(w), f.add(v), f.add(C), f.add(E), f;
  }
  getHorizontalAreas(e) {
    const t = [];
    return (
      t.push(this.getCenterFromPoints(e[3], e[0])),
      t.push(e[0]),
      t.push(e[1]),
      t.push(this.getCenterFromPoints(e[1], e[2])),
      t.push(this.getCenterFromPoints(e[1], e[2])),
      t.push(e[2]),
      t.push(e[3]),
      t.push(this.getCenterFromPoints(e[3], e[0])),
      t
    );
  }
  getVerticalAreas(e) {
    const t = [];
    return (
      t.push(this.getCenterFromPoints(e[0], e[1])),
      t.push(e[0]),
      t.push(e[3]),
      t.push(this.getCenterFromPoints(e[2], e[3])),
      t.push(this.getCenterFromPoints(e[0], e[1])),
      t.push(e[1]),
      t.push(e[2]),
      t.push(this.getCenterFromPoints(e[2], e[3])),
      t
    );
  }
  doorAreaEditor() {
    const e = this.poi.doorArea;
    (this.doorAreaPointTexts = []),
      e.map((t, o) => {
        const i = this.mapTool.transformPointM2PX(t),
          a = new F.Rect({
            _index: o,
            x: i.x,
            y: i.y,
            width: 6,
            height: 6,
            offsetX: 3,
            offsetY: 3,
            strokeWidth: 2,
            fill: "rgba(0,240,255,0.5)",
            stroke: "rgba(0,0,255,0.8)",
            draggable: !0,
          }),
          r = new F.Text({
            _index: o,
            x: i.x,
            y: i.y,
            text: `${o + 1}`,
            fontSize: 7,
            fill: "blue",
            offsetX: 8,
            offsetY: 8,
          });
        this.doorAreaPointTexts.push(r),
          this.shapeGroup.add(a),
          this.shapeGroup.add(r),
          a.on("mouseenter", () => {
            this.shape.getStage().container().style.cursor = "pointer";
          }),
          a.on("mouseleave", () => {
            this.shape.getStage().container().style.cursor = "auto";
          });
        let u = 0,
          l = 0;
        a.on("dragstart", () => {
          (u = a.x()), (l = a.y());
        }),
          a.on("dragmove", () => {
            const c = a.x() - u,
              d = a.y() - l;
            (u = a.x()), (l = a.y());
            const f = this.doorArea,
              v = f.points()[o * 2] + c,
              w = f.points()[o * 2 + 1] + d;
            f.points().splice(o * 2, 2, v, w),
              this.doorAreaPointTexts[o].move({
                x: c,
                y: d,
              }),
              this.changeResourcePoseByDelta(t, c, d),
              this.doorArea$.next(this.poi.doorArea);
          });
      });
  }
  alignImage(e, t, o) {
    const i = o ? "align_edit" : `align_${this.poi.id}`,
      a = this.mapTool.transformPoseM2PX(e),
      r = new Image(12, 12),
      u = new F.Image({
        resource: e,
        name: i,
        ...a,
        offset: {
          x: 6,
          y: 6,
        },
        image: r,
        draggable: o,
      });
    return (
      (r.src =
        t > 1 ? "/monitoring/poi/align2.svg" : "/monitoring/poi/align1.svg"),
      (r.onload = () => {
        u.rotate(90 + e.degree);
      }),
      u
    );
  }
  drawTextOnLine(e = "#272727", t = !1, o = !1, i = 12) {
    const a = `name_${this.poi.id}`,
      r = {
        x: (this.poi.door[1].x + this.poi.door[0].x) / 2,
        y: (this.poi.door[1].y + this.poi.door[0].y) / 2,
      },
      u = this.mapTool.transformPointM2PX(r),
      l = t ? -25 : 0,
      c =
        o && this.poi.name.length > 13
          ? `${this.poi.name.substring(0, 13)}...`
          : this.poi.name,
      d = new F.Text({
        id: a,
        ...u,
        text: c,
        fontSize: i,
        fill: e || "#272727",
      });
    return d.rotation(l), d.offsetX(d.width() / 2), d;
  }
  bindEvent2ShapeGroup() {
    const e = this.shape,
      t = this.shapeGroup,
      o = {
        x: 0,
        y: 0,
        theta: 0,
      };
    e.on("dragstart", () => {
      (o.x = e.x()), (o.y = e.y());
    }),
      e.on("dragmove", () => {
        const i = e.x() - o.x,
          a = e.y() - o.y;
        (o.x = e.x()),
          (o.y = e.y()),
          this.poi.door.forEach((l) => this.changeResourcePoseByDelta(l, i, a)),
          this.poi.doorArea.forEach((l) =>
            this.changeResourcePoseByDelta(l, i, a)
          ),
          t.getChildren().map((l) => {
            e._id != l._id &&
              (l.x(l.x() + i),
              l.y(l.y() + a),
              l.attrs.resource &&
                this.changeResourcePoseByDelta(l.attrs.resource, i, a, 0));
          }),
          this.door$.next(this.poi.door);
      }),
      e.on("mouseenter", () => {
        e.getStage().container().style.cursor = "pointer";
      });
  }
  getAngleFromPoints(e, t) {
    const o = t.x - e.x,
      i = t.y - e.y;
    let a = Math.atan(i / o) * (180 / Math.PI);
    return o < 0 ? (a += 180) : i < 0 && (a += 360), Math.round(a * 100) / 100;
  }
  getCenterNLengthFromPoints(e, t) {
    const o = t.x - e.x,
      i = t.y - e.y,
      a = Math.pow(o, 2) + Math.pow(i, 2),
      r = Math.round(Math.sqrt(a));
    return {
      center: {
        x: (e.x + t.x) / 2,
        y: (e.y + t.y) / 2,
      },
      length: r,
    };
  }
  getCenterFromPoints(e, t) {
    return {
      x: (e.x + t.x) / 2,
      y: (e.y + t.y) / 2,
    };
  }
}
const Tr = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "AutodoorExt",
};
class Zo extends po {
  constructor(e, t) {
    super(e, t);
    p(this, "area");
    p(this, "door");
    p(this, "doorArea");
    p(this, "aligns", []);
    p(this, "properties");
    p(this, "shape");
    (this.area = new eo({
      ...e.polygon[0],
      width: 0.1,
      height: 0.1,
    })),
      (this.door = [...e.polygon]),
      (this.doorArea = [...e.door_open_area]),
      e.aligns.forEach((i) => {
        this.aligns.push({
          pose: new Ie(i.pose),
          tolerance: i.tolerance,
          waitingQueue: i == null ? void 0 : i.waiting_queue,
          oldWaitingQueue: i == null ? void 0 : i.waiting_queue,
        });
      }),
      e.resource_waitings.forEach((i) =>
        this.waitingLocations.push(new tt(i, t))
      ),
      (this.properties = new yn(e.properties)),
      console.log("[ResourceInit]:", this.constructor.name, this),
      (this.shape = new Sr(this, t));
  }
  static getDefaultData(e, t) {
    return {
      ...Tr,
      map: e,
      polygon: [
        {
          x: t.x,
          y: t.y + 1,
        },
        {
          x: t.x,
          y: t.y - 1,
        },
      ],
      door_open_area: [
        {
          x: t.x - 1,
          y: t.y + 1,
        },
        {
          x: t.x + 1,
          y: t.y + 1,
        },
        {
          x: t.x + 1,
          y: t.y - 1,
        },
        {
          x: t.x - 1,
          y: t.y - 1,
        },
      ],
      aligns: [
        {
          pose: {
            x: t.x - 1 - 0.5,
            y: t.y + 0.3,
            theta: 0,
            degree: 0,
          },
          tolerance: 0.5,
        },
        {
          pose: {
            x: t.x + 1 + 0.5,
            y: t.y + 0.3,
            theta: 0,
            degree: 0,
          },
          tolerance: 0.5,
        },
        {
          pose: {
            x: t.x + 1 + 0.5,
            y: t.y - 0.3,
            theta: 3.14,
            degree: 180,
          },
          tolerance: 0.5,
        },
        {
          pose: {
            x: t.x - 1 - 0.5,
            y: t.y - 0.3,
            theta: 3.14,
            degree: 180,
          },
          tolerance: 0.5,
        },
      ],
      resource_waitings: [],
      properties: {
        connection: {
          ip: "localhost",
          port: 1234,
          group_id: [1],
          open_check: 0,
          close_check: 1,
          auth_id: "root",
          auth_pw: "00000000",
        },
        vendor: "virtual",
        wait_close: !1,
      },
    };
  }
  serialize(e = !1) {
    const t = this.serializeBase(),
      o = [],
      i = [],
      a = [];
    this.aligns.forEach((u) =>
      o.push({
        pose: u.pose.serialize(),
        tolerance: u.tolerance,
        waiting_queue: u.waitingQueue,
      })
    ),
      this.waitingLocations.forEach((u) => {
        i.push(u.serialize()), a.push(u.id);
      });
    const r = {
      ...t,
      polygon: [...this.door],
      door_open_area: [...this.doorArea],
      aligns: o,
      resource_waitings: a,
      properties: this.properties.serialize(),
    };
    return e && (r.resource_waitings = i), r;
  }
  async create(e) {
    return (
      console.log("[AutoDoorEXT]::create method::create AutoDoorEXT"),
      await super.create(e)
    );
  }
  async update(e) {
    return (
      console.log("[AutoDoorEXT]::update method::create AutoDoorEXT"),
      await super.update(e)
    );
  }
  async created() {
    console.log("[AutoDoorEXT]::after create method");
    for (const e of this.aligns)
      if (e.waitingQueue) {
        const t = this.mapTool.resourceStore.get(e.waitingQueue);
        t.connectResource(this.id);
        const o = t == null ? void 0 : t.serialize();
        t == null || t.update(o);
      }
  }
  async updated() {
    console.log("[AutoDoorEXT]::after update method");
    const e = [];
    for (const t of this.aligns)
      if (t.oldWaitingQueue !== t.waitingQueue) {
        if (t.waitingQueue) {
          const o = this.mapTool.resourceStore.get(t.waitingQueue),
            i = e.find((a) => a.target.id === o.id);
          i
            ? !i.link && (i.link = !0)
            : e.push({
                target: o,
                link: !0,
              });
        }
        if (t.oldWaitingQueue) {
          const o = this.mapTool.resourceStore.get(t.oldWaitingQueue);
          e.find((a) => a.target.id === o.id) ||
            e.push({
              target: o,
              link: !1,
            });
        }
      }
    e.forEach((t) => {
      const o = t.target;
      t.link ? o.connectResource(this.id) : o.disconnectResource(this.id);
      const i = o == null ? void 0 : o.serialize();
      o == null || o.update(i);
    });
  }
  async deleted() {
    console.log("[AutoDoorEXT]::after delete method");
    for (const e of this.aligns)
      if (e.waitingQueue) {
        const t = this.mapTool.resourceStore.get(e.waitingQueue);
        t.disconnectResource(this.id);
        const o = t == null ? void 0 : t.serialize();
        t == null || t.update(o);
      }
  }
  disconnectWaitingQueue(e) {
    for (const t of this.aligns)
      t.waitingQueue &&
        t.waitingQueue == e &&
        ((t.oldWaitingQueue = t.waitingQueue), (t.waitingQueue = void 0));
  }
}
const $r = void 0,
  Mr = "#008000",
  Br = "#7ebeff",
  mi = "#0000ff",
  Ir = "#ff0000",
  Rr = "#0000ff",
  Lr = "#00ff00",
  Or = "#0000ff",
  Nr = 0.22;
class zr extends fo {
  constructor(e, t) {
    super(e, t);
    p(this, "poi");
    p(this, "pathGroup");
    p(this, "resizeEnabled", !0);
    (this.poi = e),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: e.resourceType,
      })),
      (this.pathGroup = new F.Group({
        visible: !1,
      }));
  }
  draw() {
    this.shapeGroup.destroyChildren(),
      this.pathGroup.destroyChildren(),
      console.log("[TeleporterGateShape]::draw", this),
      (this.shape = this.teleporterGate()),
      (this.text = this.textOnArea(this.poi, $r)),
      this.text && this.shapeGroup.add(this.text),
      this.shape && this.shapeGroup.add(this.shape),
      this.shapeGroup.add(this.pathGroup),
      this.poi.doors.forEach((t) => {
        const o = this.door(t.point, t.direction);
        o && this.shapeGroup.add(o);
        const i = [t.entryPoint, t.exitPoint, t.releasePoint];
        t.entryPoint && this.drawAligns(i, Mr);
        const a = t.evacuation;
        a &&
          (this.shapeGroup.add(this.locationWaiting(a.pose, Ir)),
          this.pathGroup.add(this.shortPath(a)));
      }),
      this.poi.teleporter && this.elevatorStandingOffset(),
      this.drawWaitingLocations(this.poi.waitingLocations, Br);
    const e = this.poi.waitingAfterCancel;
    return (
      e &&
        (this.shapeGroup.add(this.locationWaiting(e.pose, Lr)),
        this.pathGroup.add(this.shortPath(this.poi.waitingAfterCancel))),
      this.shapeGroup.add(this.pathGroup),
      this.shape && this.bindMouseOverEvent(!0, this.indicate),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    this.shapeGroup.destroyChildren(),
      this.pathGroup.destroyChildren(),
      console.log("[TeleporterGateShape]::edit", this),
      (this.shape = this.teleporterGate(!0)),
      this.shapeGroup.add(this.shape);
    const e = ["front", "rear"];
    return (
      this.poi.doors.forEach((t, o) => {
        const i = t.no ? 1 : -1;
        this.editDoor(t.point, "blue", t.direction || e[o]),
          !t.entryPoint &&
            (t.entryPoint = new Ie({
              x: t.point.x + this.poi.area.width / 2 + i,
              y: t.point.y + 0.5,
              theta: 0,
              degree: 0,
            })),
          !t.exitPoint &&
            (t.exitPoint = new Ie({
              x: t.point.x + this.poi.area.width / 2 + i,
              y: t.point.y - 0.5,
              theta: 0,
              degree: 0,
            })),
          !t.releasePoint &&
            (t.releasePoint = new Ie({
              x: t.point.x + this.poi.area.width / 2 + i * 1.5,
              y: t.point.y,
              theta: 0,
              degree: 0,
            }));
        const a = [t.entryPoint, t.exitPoint, t.releasePoint],
          r = ["Entry Point", "Exit Point", "Release Point"];
        this.editAligns(a, "green", 0, r, "out");
      }),
      this.editLocations(),
      (this.transformer = new F.Transformer()),
      this.transformer.nodes([this.shape]),
      this.shapeGroup.add(this.transformer),
      this.transformer.resizeEnabled(this.resizeEnabled),
      this.bindEvent2AreaShapeGroup(),
      this.shapeGroup
    );
  }
  editLocations() {
    this.clearWaitingLocations(),
      this.editWaitingLocations(this.poi.waitingLocations, mi),
      this.editWaitingLocations(
        this.poi.cancellationLocations,
        Or,
        "Waiting After Cancel"
      );
    const e = [];
    this.poi.doors.forEach((t) => {
      t.evacuation && e.push(t.evacuation);
    }),
      this.editWaitingLocations(e, Rr, "Evacuation");
  }
  moveDoor(e, t) {
    const { shape: o, text: i } = this.editingAligns[e],
      a = this.mapTool.transformPointM2PX(t);
    console.log("@@@___[AreaShape]::moveAlign", e, o, i, t),
      o.x(a.x),
      o.y(a.y),
      i.x(a.x),
      i.y(a.y);
  }
  setAreaFixedSize(e, t) {
    this.shape.width(e * this.mapTool.M2PX),
      this.shape.height(t * this.mapTool.M2PX),
      this.transformer.resizeEnabled(!1);
  }
  setAreaResizeEnable(e) {
    this.resizeEnabled = e;
  }
  redrawWaitingLocations() {
    this.resetWaitingLocations(this.poi.waitingLocations, mi);
  }
  teleporterGate(e = !1) {
    const t = this.poi.area,
      o = e ? "gate_edit" : `gate_${this.poi.id}`,
      i = this.mapTool.transformAreaM2PX(t),
      a = new Image(60, 60),
      r = e
        ? new F.Rect({
            id: o,
            ...i,
            stroke: "#7EBEFF",
            strokeWidth: 1,
            strokeScaleEnabled: !1,
            draggable: e,
            opacity: this.mapTool.getOpacity(),
            fill: "rgba(0,240,255,0.1)",
          })
        : new F.Image({
            x: i.x,
            y: i.y,
            width: i.width,
            height: i.height,
            offsetX: i.width / 2,
            offsetY: i.height / 2,
            rotation: i.rotation,
            image: a,
          });
    return (a.src = "/monitoring/poi/teleport.svg"), r;
  }
  elevatorStandingOffset() {
    var o;
    const e = this.poi.area,
      t = (o = this.poi.teleporter) == null ? void 0 : o.standing_offset;
    t &&
      t.forEach((i) => {
        const a = {
            x: e.x + i.x,
            y: e.y + i.y,
          },
          r = this.mapTool.transformPointM2PX(a),
          u = new F.Circle({
            x: r.x,
            y: r.y,
            radius: 2,
            fill: "blue",
            stroke: "blue",
            strokeWidth: 1,
          });
        this.shapeGroup.add(u);
      });
  }
  door(e, t) {
    const o = this.mapTool.transformPointM2PX(e),
      i = new Image(10, 10),
      a = new F.Image({
        x: o.x,
        y: o.y,
        offsetX: 5,
        offsetY: 5,
        image: i,
      });
    return (
      (i.src =
        t == "rear"
          ? "/monitoring/poi/teleport_r.svg"
          : "/monitoring/poi/teleport_f.svg"),
      a
    );
  }
  editDoor(e, t, o) {
    const i = this.mapTool.transformPointM2PX(e),
      a = new F.Circle({
        resource: e,
        x: i.x,
        y: i.y,
        radius: 5,
        fill: t,
        draggable: !0,
      }),
      r = o || "Door",
      u = new F.Text({
        x: i.x,
        y: i.y,
        text: r,
        fontSize: 8,
        fill: t || "#272727",
        draggable: !1,
      });
    u.offsetX(u.width() / 2), u.offsetY(-6);
    const l = {
      shape: a,
      text: u,
      pose$: new Me(),
    };
    this.shapeGroup.add(a),
      this.shapeGroup.add(u),
      this.editingAligns.push(l),
      this.bindEvent2DoorPoint(l, this.areaPoi.area, e);
  }
  bindEvent2DoorPoint(e, t, o) {
    const { shape: i, text: a, pose$: r } = e;
    i.on("dragstart", () => {
      i.x(), i.y(), i.fill("red");
    }),
      i.on("dragmove", () => {
        const u = this.mapTool.transformPointPX2M({
            x: i.x(),
            y: i.y(),
          }),
          l = ht.setNodeOnAreaEdge(u, t, Nr),
          c = this.mapTool.transformPointM2PX({
            x: l[0],
            y: l[1],
          });
        i.x(c.x),
          i.y(c.y),
          a.x(i.x()),
          a.y(i.y()),
          (o.x = l[0]),
          (o.y = l[1]),
          r.next(o);
      }),
      i.on("dragend", () => {
        i.fill("blue");
      }),
      i.on("mouseenter", () => {
        i.getStage().container().style.cursor = "pointer";
      });
  }
  shortPath(e) {
    const t = this.poi.area,
      o = e.pose,
      i = this.mapTool.getAreaCenterM2PX(t),
      a = this.mapTool.transformPoseM2PX(o);
    return new F.Line({
      points: [i.x, i.y, a.x, a.y],
      name: "Sub",
      stroke: "red",
      strokeWidth: 1,
      lineJoin: "round",
      dash: [9, 3],
    });
  }
  indicate(e) {
    super.indicate(e), this.pathGroup.moveToTop(), this.pathGroup.visible(e);
  }
}
const Wr = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "TeleporterGate",
};
class Uo extends po {
  constructor(e, t) {
    super(e, t);
    p(this, "area");
    p(this, "waitingAfterCancel");
    p(this, "cancellationLocations", []);
    p(this, "teleporterId");
    p(this, "floorId");
    p(this, "floorName");
    p(this, "doors", []);
    p(this, "teleporter", null);
    p(this, "shape");
    (this.area = new eo(e.area)),
      e.resource_waitings.forEach((o) =>
        this.waitingLocations.push(new tt(o, t))
      ),
      (this.waitingAfterCancel =
        typeof e.waiting_after_cancel == "object"
          ? e.waiting_after_cancel && new tt(e.waiting_after_cancel, t)
          : null),
      this.waitingAfterCancel &&
        this.cancellationLocations.push(this.waitingAfterCancel),
      (this.teleporter = typeof e.teleporter == "object" ? e.teleporter : null),
      (this.teleporterId =
        typeof e.teleporter == "object"
          ? fe.get(e.teleporter, "id")
          : e.teleporter),
      (this.floorId = e.properties.floor_id),
      (this.floorName = e.properties.floor_name),
      e.doors.forEach((o, i) => {
        o &&
          this.doors.push({
            no: o.door_no,
            point: o.pose,
            direction: o.direction,
            evacuation: o.evacuation ? new tt(o.evacuation, t) : null,
            waitingQueue: o.waiting_queue,
            oldWaitingQueue: o.waiting_queue,
            entryPoint: o.entry_point ? new Ie(o.entry_point) : null,
            exitPoint: o.exit_point ? new Ie(o.exit_point) : null,
            releasePoint: o.release_point ? new Ie(o.release_point) : null,
          });
      }),
      console.log("[TeleporterGate]::init::doors", this.doors),
      (this.shape = new zr(this, t));
  }
  addEvacuationLocationByPoint(e, t) {
    const o = tt.getDefaultData(this.mapId, e),
      i = new bs({
        length: 10,
      });
    (o.type = "waiting"),
      (o.name = `${this.resourceType}-evacuation-${i.randomUUID()}`);
    const a = new tt(o, this.mapTool);
    this.doors[t].evacuation = a;
  }
  deleteEvacuationLocation(e) {
    const t = fe.cloneDeep(this.doors[e].evacuation);
    (this.doors[e].evacuation = null), t && this.deletedLocations.push(t);
  }
  addCancellationLocationByPoint(e) {
    const t = tt.getDefaultData(this.mapId, e),
      o = new bs({
        length: 10,
      });
    (t.type = "waiting"),
      (t.name = `${this.resourceType}-cancellation-${o.randomUUID()}`),
      (this.waitingAfterCancel = new tt(t, this.mapTool)),
      this.cancellationLocations.push(this.waitingAfterCancel);
  }
  deleteCancellationLocation() {
    const e = fe.cloneDeep(this.waitingAfterCancel);
    (this.waitingAfterCancel = null),
      (this.cancellationLocations.length = 0),
      e && this.deletedLocations.push(e);
  }
  static getDefaultData(e, t) {
    return {
      ...Wr,
      map: e,
      area: {
        x: t.x,
        y: t.y,
        width: 2,
        height: 2,
        theta: 0,
      },
      resource_waitings: [],
      properties: {
        floor_id: "",
        floor_name: "",
      },
      waiting_after_cancel: null,
      teleporter: "",
      doors: [
        {
          door_no: 0,
          pose: {
            x: t.x - 1 - 0.11,
            y: t.y,
          },
          direction: "front",
          evacuation: null,
          waiting_queue: void 0,
          entry_point: {
            x: t.x - 2,
            y: t.y + 0.5,
            theta: 0,
            degree: 0,
          },
          exit_point: {
            x: t.x - 2,
            y: t.y - 0.5,
            theta: 0,
            degree: 0,
          },
          release_point: {
            x: t.x - 2.5,
            y: t.y,
            theta: 0,
            degree: 0,
          },
        },
      ],
    };
  }
  serialize(e = !1) {
    const t = this.serializeBase(),
      o = [],
      i = [];
    this.waitingLocations.forEach((c) => {
      o.push(c.serialize()), i.push(c.id);
    });
    const a = this.waitingAfterCancel
        ? this.waitingAfterCancel.serialize()
        : null,
      r = this.waitingAfterCancel ? this.waitingAfterCancel.id : null,
      u = [];
    this.doors.forEach((c) => {
      var d, f, v;
      u.push({
        door_no: c.no,
        pose: c.point,
        direction: c.direction,
        evacuation: c.evacuation
          ? e
            ? c.evacuation.serialize()
            : c.evacuation.id
          : null,
        waiting_queue: c.waitingQueue,
        entry_point: (d = c.entryPoint) == null ? void 0 : d.serialize(),
        exit_point: (f = c.exitPoint) == null ? void 0 : f.serialize(),
        release_point: (v = c.releasePoint) == null ? void 0 : v.serialize(),
      });
    });
    const l = {
      ...t,
      area: this.area.serialize(),
      resource_waitings: i,
      waiting_after_cancel: r,
      teleporter: e ? this.teleporter : this.teleporterId,
      properties: {
        floor_id: this.floorId,
        floor_name: this.floorName,
      },
      doors: u,
    };
    return e && ((l.resource_waitings = o), (l.waiting_after_cancel = a)), l;
  }
  async create(e) {
    console.log("[TeleporterGate]::create method::create TeleporterGate");
    let t = 0;
    for (const o of this.doors) {
      if (o.evacuation) {
        const i = o.evacuation,
          a = await Ut(i.resourceType, i.serialize()).catch((u) => {
            throw (
              (console.log(
                "[TeleporterGate]::create method::createLocation",
                u
              ),
              u)
            );
          }),
          r = a && a.id;
        r
          ? (i.id = r)
          : console.log(
              "[TeleporterGate]::create method::createLocation::result",
              a
            ),
          fe.set(e, `doors[${t}].evacuation`, r);
      }
      t++;
    }
    if (this.waitingAfterCancel) {
      const o = this.waitingAfterCancel,
        i = await Ut(o.resourceType, o.serialize()).catch((r) => {
          console.log("[TeleporterGate]::create method::createLocation", r);
        }),
        a = i && i.id;
      a && (o.id = a), fe.set(e, "waiting_after_cancel", a);
    }
    return await super.create(e);
  }
  async update(e) {
    console.log("[TeleporterGate]::update method::create TeleporterGate");
    let t = 0;
    for (const o of this.doors) {
      const i = o.evacuation;
      if (i)
        if (i.id == "new-id") {
          const a = await Ut(i.resourceType, i.serialize()).catch((u) => {
              throw (
                (console.log(
                  "[TeleporterGate]::update method::createLocation",
                  u
                ),
                u)
              );
            }),
            r = a && a.id;
          r && (i.id = r), fe.set(e, `doors[${t}].evacuation`, r);
        } else {
          await Vo(i.resourceType, i.serialize()).catch((r) => {
            throw (
              (console.log(
                "[TeleporterGate]::update method::updateLocation",
                r
              ),
              r)
            );
          });
          const a = i.id;
          fe.set(e, `doors[${t}].evacuation`, a);
        }
      t++;
    }
    if (this.waitingAfterCancel) {
      const o = this.waitingAfterCancel;
      if (o.id == "new-id") {
        const i = await Ut(o.resourceType, o.serialize()).catch((r) => {
            console.log("[TeleporterGate]::update method::createLocation", r);
          }),
          a = i && i.id;
        a && (o.id = a), fe.set(e, "waiting_after_cancel", a);
      } else {
        await Vo(o.resourceType, o.serialize()).catch((a) => {
          console.log("[TeleporterGate]::update method::updateLocation", a);
        });
        const i = o.id;
        fe.set(e, "waiting_after_cancel", i);
      }
    }
    return await super.update(e);
  }
  async created() {
    console.log("[TeleporterGate]::after create method");
    for (const e of this.doors)
      if (e.waitingQueue) {
        const t = this.mapTool.resourceStore.get(e.waitingQueue);
        t.connectResource(this.id);
        const o = t == null ? void 0 : t.serialize();
        t == null || t.update(o);
      }
  }
  async updated() {
    console.log("[TeleporterGate]::after update method");
    const e = [];
    for (const t of this.doors)
      if (t.oldWaitingQueue !== t.waitingQueue) {
        if (t.waitingQueue) {
          const o = this.mapTool.resourceStore.get(t.waitingQueue),
            i = e.find((a) => a.target.id === o.id);
          i
            ? !i.link && (i.link = !0)
            : e.push({
                target: o,
                link: !0,
              });
        }
        if (t.oldWaitingQueue) {
          const o = this.mapTool.resourceStore.get(t.oldWaitingQueue);
          e.find((a) => a.target.id === o.id) ||
            e.push({
              target: o,
              link: !1,
            });
        }
      }
    e.forEach((t) => {
      const o = t.target;
      t.link ? o.connectResource(this.id) : o.disconnectResource(this.id);
      const i = o == null ? void 0 : o.serialize();
      o == null || o.update(i);
    });
  }
  async deleted() {
    console.log("[TeleporterGate]::after delete method");
    for (const e of this.doors)
      if (e.waitingQueue) {
        const t = this.mapTool.resourceStore.get(e.waitingQueue);
        t.disconnectResource(this.id);
        const o = t == null ? void 0 : t.serialize();
        t == null || t.update(o);
      }
  }
  disconnectWaitingQueue(e) {
    for (const t of this.doors)
      t.waitingQueue &&
        t.waitingQueue == e &&
        ((t.oldWaitingQueue = t.waitingQueue), (t.waitingQueue = void 0));
  }
  setElevatorStandingOffset(e, t) {}
}
const Gr = "#FF7600",
  yi = "#0000ff",
  Vr = "#FF7600",
  vi = "#0000ff",
  _i = 0.22;
class qr extends fo {
  constructor(e, t) {
    super(e, t);
    p(this, "poi");
    (this.poi = e),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: e.resourceType,
      }));
  }
  draw() {
    return (
      this.shapeGroup.destroyChildren(),
      console.log("[ExclusiveAreaShape]::draw", this),
      (this.shape = this.areaExclusive()),
      (this.text = this.textOnArea(this.poi)),
      this.text && this.shapeGroup.add(this.text),
      this.shape && this.shapeGroup.add(this.shape),
      this.drawAligns(this.poi.aligns, Gr),
      this.drawWaitingLocations(this.poi.waitingLocations, Vr),
      this.shape && this.bindMouseOverEvent(!0, this.indicate),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    return (
      this.shapeGroup.destroyChildren(),
      console.log("[ExclusiveAreaShape]::edit", this),
      (this.shape = this.areaExclusive(!0)),
      this.shapeGroup.add(this.shape),
      this.editAligns(this.poi.aligns, yi, _i),
      this.editWaitingLocations(this.poi.waitingLocations, vi),
      (this.transformer = new F.Transformer()),
      this.transformer.nodes([this.shape]),
      this.shapeGroup.add(this.transformer),
      this.bindEvent2AreaShapeGroup(),
      this.shapeGroup
    );
  }
  redrawWaitingLocations() {
    this.resetWaitingLocations(this.poi.waitingLocations, vi);
  }
  redrawAligns() {
    this.editingAligns.forEach((e) => {
      e.shape.destroy(), e.text.destroy(), e.pose$.complete();
    }),
      (this.editingAligns = []),
      this.editAligns(this.poi.aligns, yi, _i);
  }
  areaExclusive(e = !1) {
    const t = this.poi.area,
      o = e ? "area_edit" : `area_${this.poi.id}`,
      i = this.mapTool.transformAreaM2PX(t);
    return new F.Rect({
      id: o,
      ...i,
      fill: "#ffb1001a",
      stroke: "#FFBD32",
      strokeWidth: 1,
      opacity: this.mapTool.getOpacity(),
      draggable: e,
    });
  }
}
const Xr = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "ExclusiveArea",
};
class xi extends po {
  constructor(e, t) {
    super(e, t);
    p(this, "area");
    p(this, "aligns", []);
    p(this, "shape");
    (this.area = new eo(e.areas[0])),
      e.aligns.forEach((o) => this.aligns.push(new Ie(o))),
      e.resource_waitings.forEach((o) =>
        this.waitingLocations.push(new tt(o, t))
      ),
      (this.shape = new qr(this, t));
  }
  static getDefaultData(e, t) {
    return {
      ...Xr,
      map: e,
      areas: [
        {
          x: t.x,
          y: t.y,
          theta: 0,
          width: 2,
          height: 2,
        },
      ],
      aligns: [
        {
          x: t.x - 1 - 0.11,
          y: t.y - 0.5,
          theta: 0,
          degree: 0,
        },
        {
          x: t.x - 1 - 0.11,
          y: t.y + 0.5,
          theta: 0,
          degree: 0,
        },
      ],
      resource_waitings: [],
    };
  }
  serialize() {
    const e = this.serializeBase(),
      t = [],
      o = [];
    return (
      this.aligns.forEach((a) => t.push(a.serialize())),
      this.waitingLocations.forEach((a) => o.push(a.serialize())),
      {
        ...e,
        areas: [this.area.serialize()],
        aligns: t,
        resource_waitings: o,
      }
    );
  }
}
const Qr = "rgba(0, 255, 0, 0.5)",
  Di = "rgba(0, 0, 255, 0.5)",
  wi = 0;
class Zr extends fo {
  constructor(e, t) {
    super(e, t);
    p(this, "poi");
    (this.poi = e),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: e.resourceType,
      }));
  }
  draw() {
    this.shapeGroup.destroyChildren(),
      console.log("[SlopeShape]::draw", this),
      (this.shape = this.slope()),
      (this.text = this.textOnArea(this.poi)),
      this.text && this.shapeGroup.add(this.text),
      this.shape && this.shapeGroup.add(this.shape);
    const e = [this.poi.inPose, this.poi.outPose];
    return (
      this.drawAligns(e, Qr),
      this.shape && this.bindMouseOverEvent(!0, this.indicate),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    this.shapeGroup.destroyChildren(),
      (this.shape = this.slope(!0)),
      this.shapeGroup.add(this.shape);
    const e = this.poi.inPose;
    this.editAligns([e], Di, wi, ["Parameter 1"], "in");
    const t = this.poi.outPose;
    return (
      this.editAligns([t], Di, wi, ["Parameter 2"], "out"),
      (this.transformer = new F.Transformer()),
      this.transformer.nodes([this.shape]),
      this.shapeGroup.add(this.transformer),
      this.bindEvent2AreaShapeGroup(this.checkAngle),
      this.shapeGroup
    );
  }
  move(e) {
    super.move(e);
    const t = {
      x: this.shape.x(),
      y: this.shape.y(),
      degree: this.shape.rotation() - this.degreeOffset,
      width: this.shape.width(),
      height: this.shape.height(),
    };
    this.mapTool.changeAreaByNewAreaPX2M(e, t), this.checkAngle(this.shape, e);
  }
  redrawWaitingLocations() {}
  slope(e = !1) {
    const t = this.poi.area,
      o = e ? "slope_edit" : `slope_${this.poi.id}`,
      i = this.mapTool.transformAreaM2PX(t),
      a = Math.PI * 2,
      r = (a + t.theta) % a,
      u =
        r > Math.PI / 2 && r < (Math.PI / 2) * 3
          ? "slope_flipped.svg"
          : "slope.svg",
      l = new Image();
    return (
      (l.src = `/monitoring/poi/${u}`),
      new F.Image({
        id: o,
        ...i,
        stroke: "rgba(90, 206, 232, 0.5)",
        strokeWidth: 1,
        strokeScaleEnabled: !1,
        opacity: this.mapTool.getOpacity(),
        draggable: e,
        image: l,
      })
    );
  }
  checkAngle(e, t) {
    const o = t.theta,
      i = Math.PI * 2,
      a = (i + o) % i,
      r =
        a > Math.PI / 2 && a < (Math.PI / 2) * 3
          ? "slope_flipped.svg"
          : "slope.svg",
      u = new Image();
    (u.src = `/monitoring/poi/${r}`), e.image(u);
  }
}
const Ur = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "Slope",
};
class bi extends po {
  constructor(e, t) {
    super(e, t);
    p(this, "area");
    p(this, "inPose");
    p(this, "inUpParam");
    p(this, "inDownParam");
    p(this, "outPose");
    p(this, "outUpParam");
    p(this, "outDownParam");
    p(this, "shape");
    this.area = new eo(e.areas[0]);
    const o = e.param_points[0];
    (this.inPose = new Ie(o.pose)),
      (this.inUpParam = o.upward),
      (this.inDownParam = o.downward);
    const i = e.param_points[1];
    (this.outPose = new Ie(i.pose)),
      (this.outUpParam = i.upward),
      (this.outDownParam = i.downward),
      (this.shape = new Zr(this, t));
  }
  static getDefaultData(e, t) {
    return {
      ...Ur,
      map: e,
      areas: [
        {
          x: t.x,
          y: t.y,
          width: 2,
          height: 2,
          theta: 0,
        },
      ],
      param_points: [
        {
          pose: {
            x: t.x,
            y: t.y,
            theta: 0,
            degree: 0,
          },
          upward: {
            landform: "flat",
            max_speed: 1,
            max_angular_speed: 0.6,
          },
          downward: {
            landform: "slope",
            max_speed: 0.2,
            max_angular_speed: 0.6,
          },
        },
        {
          pose: {
            x: t.x - 2,
            y: t.y,
            theta: 0,
            degree: 0,
          },
          upward: {
            landform: "slope",
            max_speed: 0.2,
            max_angular_speed: 0.6,
          },
          downward: {
            landform: "flat",
            max_speed: 1,
            max_angular_speed: 0.6,
          },
        },
      ],
    };
  }
  serialize() {
    return {
      ...this.serializeBase(),
      areas: [this.area.serialize()],
      param_points: [
        {
          pose: this.inPose.serialize(),
          upward: fe.clone(this.inUpParam),
          downward: fe.clone(this.inDownParam),
        },
        {
          pose: this.outPose.serialize(),
          upward: fe.clone(this.outUpParam),
          downward: fe.clone(this.outDownParam),
        },
      ],
    };
  }
}
const jr = "green",
  Yr = "yellowgreen",
  Hr = "#0000ff",
  Kr = "yellowgreen",
  Ci = "#0000ff",
  Jr = 0.4;
class eu extends fo {
  constructor(e, t) {
    super(e, t);
    p(this, "poi");
    (this.poi = e),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: e.resourceType,
      }));
  }
  draw() {
    return (
      this.shapeGroup.destroyChildren(),
      console.log("[WorkingStationShape]::draw", this),
      (this.shape = this.workingStation()),
      (this.text = this.textOnArea(this.poi, jr)),
      this.text && this.shapeGroup.add(this.text),
      this.shape && this.shapeGroup.add(this.shape),
      this.drawAligns(this.poi.aligns, Yr),
      this.drawWaitingLocations(this.poi.waitingLocations, Kr),
      this.shape && this.bindMouseOverEvent(!0, this.indicate),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    return (
      this.shapeGroup.destroyChildren(),
      console.log("[WorkingStationShape]::edit", this),
      (this.shape = this.workingStation(!0)),
      this.shape && this.shapeGroup.add(this.shape),
      this.editAligns(this.poi.aligns, Hr, Jr),
      this.editWaitingLocations(this.poi.waitingLocations, Ci),
      (this.transformer = new F.Transformer()),
      this.transformer.nodes([this.shape]),
      this.shapeGroup.add(this.transformer),
      this.bindEvent2AreaShapeGroup(),
      this.shapeGroup
    );
  }
  redrawWaitingLocations() {
    this.resetWaitingLocations(this.poi.waitingLocations, Ci);
  }
  workingStation(e = !1) {
    const t = this.poi.area,
      o = e ? "working_edit" : `working_${this.poi.id}`,
      i = this.mapTool.transformAreaM2PX(t);
    return new F.Rect({
      id: o,
      ...i,
      fill: "rgba(0, 255, 49, 0.1)",
      stroke: "rgba(18, 255, 64, 0.5)",
      strokeWidth: 1,
      opacity: this.mapTool.getOpacity(),
      draggable: e,
    });
  }
}
const tu = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "WorkingStation",
};
class Ei extends po {
  constructor(e, t) {
    super(e, t);
    p(this, "type");
    p(this, "area");
    p(this, "aligns", []);
    p(this, "markerType", "");
    p(this, "markerValue", 1);
    p(this, "properties");
    p(this, "shape");
    (this.type = e.type),
      (this.area = new eo(e.areas[0])),
      e.aligns.forEach((o) => this.aligns.push(new Ie(o))),
      e.resource_waitings.forEach((o) =>
        this.waitingLocations.push(new tt(o, t))
      ),
      (this.markerType = e.marker_type),
      (this.markerValue = e.marker_value),
      (this.properties = fe.cloneDeep(e.properties)),
      (this.shape = new eu(this, t));
  }
  static getDefaultData(e, t) {
    return {
      ...tu,
      map: e,
      type: "washing_machine",
      areas: [
        {
          x: t.x,
          y: t.y,
          width: 2,
          height: 2,
          theta: 0,
        },
      ],
      aligns: [
        {
          x: t.x - 1 - 0.4,
          y: t.y,
          theta: 0,
          degree: 0,
        },
      ],
      resource_waitings: [],
      marker_type: "",
      marker_value: 0,
      properties: {
        custom: {},
      },
    };
  }
  serialize() {
    const e = this.serializeBase(),
      t = [],
      o = [];
    return (
      this.aligns.forEach((a) => t.push(a.serialize())),
      this.waitingLocations.forEach((a) => o.push(a.serialize())),
      {
        ...e,
        type: this.type,
        areas: [this.area.serialize()],
        aligns: t,
        resource_waitings: o,
        marker_type: this.markerType,
        marker_value: this.markerValue,
        properties: fe.cloneDeep(this.properties),
      }
    );
  }
}
const ou = "#ff00ff",
  su = "#0000ff";
class iu extends Xs {
  constructor(e, t) {
    super(t);
    p(this, "poi");
    p(this, "pathLine");
    p(this, "costLabel");
    p(this, "escapeAlign");
    p(this, "escapeAlignText");
    p(this, "shapeTypes", {
      prohibit: this.zoneProhibit,
      escape: this.zoneEscape,
      parameter: this.zoneParameter,
      preferred: this.zonePreferred,
      unpreferred: this.zoneUnpreferred,
    });
    (this.poi = e),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: e.resourceType,
      }));
  }
  draw() {
    var o;
    this.shapeGroup.destroyChildren();
    const e = this.poi.type,
      t = this.shapeTypes[e];
    if (
      (console.log("[ZoneShape]::draw", e, this),
      (this.shape = Reflect.apply(t, this, [])),
      e == "escape")
    ) {
      const i = this.poi.escapePose;
      console.log("[ZoneShpae::Escape]::pose", i),
        this.shapeGroup.add(this.align(i, ou)),
        (this.pathLine = this.escapePath(i)),
        this.shapeGroup.add(this.pathLine);
    }
    if (e == "preferred" || e == "unpreferred") {
      const i = (o = this.poi.costLevel) != null ? o : "-";
      this.costLabel = this.costOnPolygon(i);
    }
    return (
      (this.text = this.textOnPolygon(this.poi)),
      this.shape && this.shapeGroup.add(this.shape),
      this.text && this.shapeGroup.add(this.text),
      this.costLabel && this.shapeGroup.add(this.costLabel),
      this.shape && this.bindMouseOverEvent(!0, this.indicate),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    this.shapeGroup.destroyChildren();
    const e = this.poi.type,
      t = this.shapeTypes[e];
    if (
      (console.log("[ZoneShape]::edit", e, this),
      (this.shape = Reflect.apply(t, this, [!0])),
      e == "escape")
    ) {
      const o = this.poi.escapePose,
        i = this.align(o, su, !0),
        a = "Escaping Point";
      (this.escapeAlignText = this.positionText(o, a, "blue", 8)),
        (this.escapeAlign = i),
        this.shapeGroup.add(i),
        this.shapeGroup.add(this.escapeAlignText),
        this.bindEvent2SubResourceWithChecker(i, this.escapeAlignText, o);
    }
    return (
      this.shapeGroup.add(this.shape),
      this.shapeGroup.moveToTop(),
      (this.editReset = this.edit),
      this.setPolygonEditor(this.poi),
      this.shapeGroup
    );
  }
  move() {
    this.edit();
  }
  moveAlign(e) {
    const t = this.mapTool.transformPoseM2PX(e);
    this.escapeAlign.x(t.x),
      this.escapeAlign.y(t.y),
      this.escapeAlign.rotation(t.degree),
      this.escapeAlignText.x(t.x),
      this.escapeAlignText.y(t.y);
  }
  indicate(e) {
    super.indicate(e),
      this.poi.type == "escape" &&
        (this.pathLine.moveToTop(), this.pathLine.visible(e));
  }
  getCenterPontOfStageByShape() {
    return this.getCenterPontOfStageByPolygon(this.poi);
  }
  zoneEscape(e = !1) {
    const t = this.polygon(this.poi, e);
    return t.fill("rgba(241,215,241,0.5)"), t.stroke("#ff00ff"), t;
  }
  zoneParameter(e = !1) {
    const t = this.polygon(this.poi, e);
    return t.fill("#5800ff1a"), t.stroke("#5800ff"), t;
  }
  zoneProhibit(e = !1) {
    const t = this.polygon(this.poi, e),
      o = new Image();
    return (
      (o.onload = () => {
        t.fillPatternImage(o);
      }),
      (o.src = "/monitoring/resource/pattern_prohibit.svg"),
      t.stroke("#333333"),
      t.strokeScaleEnabled(!1),
      t.fillPatternRepeat("repeat"),
      t.fillPatternRotation(45),
      t
    );
  }
  zonePreferred(e = !1) {
    const t = this.polygon(this.poi, e),
      o = this.poi.type,
      i = new Image(11, 11);
    return (
      (i.onload = () => {
        t.fillPatternImage(i);
      }),
      (i.src = `/monitoring/resource/pattern_${o}.svg`),
      t.stroke("#333333"),
      t.strokeScaleEnabled(!1),
      t.fillPatternRepeat("repeat"),
      t
    );
  }
  zoneUnpreferred(e = !1) {
    const t = this.polygon(this.poi, e),
      o = this.poi.type,
      i = new Image(11, 11);
    return (
      (i.onload = () => {
        t.fillPatternImage(i);
      }),
      (i.src = `/monitoring/resource/pattern_${o}.svg`),
      t.stroke("#333333"),
      t.strokeScaleEnabled(!1),
      t.fillPatternRepeat("repeat"),
      t
    );
  }
  escapePath(e) {
    const t = this.poi.polygon,
      o = e,
      i = this.mapTool.getCentroidM2PX(t),
      a = this.mapTool.transformPointM2PX(o);
    return new F.Line({
      points: [i.x, i.y, a.x, a.y],
      stroke: "red",
      strokeWidth: 2,
      lineJoin: "round",
      dash: [9, 3],
      visible: !1,
    });
  }
  costOnPolygon(e, t = "#272727") {
    const o = `const_${this.poi.id}`,
      i = this.mapTool.getCentroidM2PX(this.poi.polygon),
      a = 12,
      r = new F.Label({
        id: o,
        ...i,
        offsetX: 8,
        offsetY: -10,
      });
    return (
      r.add(
        new F.Tag({
          fill: "rgba(81,81,81,0.5)",
        })
      ),
      r.add(
        new F.Text({
          width: 28,
          text: e,
          align: "center",
          fontSize: a,
          fill: t,
        })
      ),
      r
    );
  }
  bindEvent2SubResourceWithChecker(e, t, o) {
    this.poi.polygon;
    const i = {
      x: 0,
      y: 0,
      theta: 0,
    };
    e.on("dragstart", () => {
      (i.x = e.x()), (i.y = e.y()), e.fill("red"), e.stroke("red");
    }),
      e.on("dragmove", () => {
        this.pointPXInPolygonM({
          x: e.x(),
          y: e.y(),
        })
          ? (e.x(i.x), e.y(i.y))
          : ((i.x = e.x()), (i.y = e.y())),
          t.x(e.x()),
          t.y(e.y()),
          this.mapTool.changePoseByPointPX2M(o, {
            x: e.x(),
            y: e.y(),
          }),
          this.aligns$[0].next(o);
      }),
      e.on("dragend", () => {
        e.fill("blue"), e.stroke("blue");
      }),
      e.on("mouseenter", () => {
        e.getStage().container().style.cursor = "pointer";
      });
  }
  pointPXInPolygonM(e) {
    const t = this.poi.polygon;
    let o = !1;
    const i = e.x,
      a = e.y;
    for (let r = 0, u = t.length - 1; r < t.length; u = r++) {
      const l = this.mapTool.transformPointM2PX(t[r]),
        c = this.mapTool.transformPointM2PX(t[u]),
        d = l.x,
        f = l.y,
        v = c.x,
        w = c.y;
      f > a != w > a && i < ((v - d) * (a - f)) / (w - f) + d && (o = !o);
    }
    return o;
  }
}
const nu = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "Zone",
};
class Ai extends It {
  constructor(e, t) {
    super(e, t);
    p(this, "type");
    p(this, "polygon");
    p(this, "escapePose", null);
    p(this, "parameters", {
      driving_mode: "autonomous_avoidance",
    });
    p(this, "costLevel");
    p(this, "shape");
    if (
      ((this.type = e.type),
      (this.polygon = [...e.polygon]),
      e.type == "escape")
    ) {
      const o = e.worker_params;
      (this.escapePose = new Ie(o.designated.pose[0])),
        console.log("[ZoneClass]::Escape", o, this.escapePose);
    }
    e.type == "parameter" && (this.parameters = e.worker_params),
      (this.costLevel = e.cost_level),
      (this.shape = new iu(this, t));
  }
  static getDefaultData(e, t, o) {
    const i = o != null ? o : "prohibit",
      a = 1,
      r = 1,
      u = {
        ...nu,
        map: e,
        type: i,
        polygon: [
          {
            x: t.x - a,
            y: t.y + r,
          },
          {
            x: t.x + a,
            y: t.y + r,
          },
          {
            x: t.x + a,
            y: t.y - r,
          },
          {
            x: t.x - a,
            y: t.y - r,
          },
        ],
      };
    return (
      i == "escape" &&
        (u.worker_params = {
          designated: {
            pose: [
              {
                x: t.x - a - 0.5,
                y: t.y + r,
                theta: 0,
                degree: 0,
              },
            ],
          },
        }),
      i == "parameter" &&
        (u.worker_params = {
          driving_mode: "autonomous_avoidance",
          driving_option: {
            stop_distance: 0.4,
            avoidance_tolerance: 2,
          },
        }),
      (i == "preferred" || i == "unpreferred") && (u.cost_level = "mid"),
      console.log("@____[Zone]::getDefaultData", i, u),
      u
    );
  }
  serialize() {
    const e = this.serializeBase();
    let t = null;
    this.type == "escape" &&
      (t = {
        designated: {
          pose: [this.escapePose.serialize()],
        },
      }),
      this.type == "parameter" && (t = this.parameters);
    const o = {
      ...e,
      type: this.type,
      polygon: [...this.polygon],
      worker_params: t,
    };
    return (
      (this.type == "preferred" || this.type == "unpreferred") &&
        (o.cost_level = this.costLevel),
      o
    );
  }
  area2polygon(e) {
    const t = e.width / 2,
      o = e.height / 2;
    return [
      {
        x: e.x - t,
        y: e.y - o,
      },
      {
        x: e.x + t,
        y: e.y - o,
      },
      {
        x: e.x + t,
        y: e.y + o,
      },
      {
        x: e.x - t,
        y: e.y + o,
      },
    ];
  }
}
const ki = 11,
  Fi = 1,
  au = "rgba(100,100,100,0.05)",
  ru = "rgba(81,81,81,0.5)",
  uu = "rgba(255,0,0,0.07)",
  lu = "orange",
  ms = {
    entry: "red",
    exit: "blue",
    work: "green",
    default: "gray",
    waypoint: "gray",
  },
  ys = 0.6,
  cu = 5,
  du = 4;
class hu extends Xs {
  constructor(e, t) {
    super(t);
    p(this, "poi");
    p(this, "node$");
    p(this, "canEnter", !0);
    p(this, "shapeTypes", {
      restricted: this.zoneRestricted,
      directional: this.zoneDirectional,
    });
    p(this, "nodeIndex");
    p(this, "nodesShapes", new Map());
    p(this, "edgeShapes", new Map());
    p(this, "editingStatus", {
      target: "area",
      mode: "create",
    });
    p(this, "currentWorkers", []);
    p(this, "requestWorkers", []);
    (this.poi = e),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: e.resourceType,
      })),
      (this.nodeIndex = e.nodes.reduce((o, i) => Math.max(o, i.index), 0)),
      (this.node$ = new Me());
  }
  draw() {
    this.shapeGroup.destroyChildren();
    const e = this.poi.type,
      t = this.shapeTypes[e];
    console.log("[FleetZoneShape]::draw", e, this),
      (this.shape = Reflect.apply(t, this, [])),
      (this.text = this.textOnPolygon(this.poi)),
      this.shape && this.shapeGroup.add(this.shape);
    const o = this.poi.nodes,
      i = this.poi.edges;
    return (
      o.forEach((a) => this.node(a, !1)),
      i.forEach((a) => this.edge(a, !1)),
      this.text && this.shapeGroup.add(this.text),
      this.shape && this.bindMouseOverEvent(!0, this.indicate),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    this.shapeGroup.destroyChildren();
    const e = this.poi.type,
      t = this.shapeTypes[e];
    console.log("[FleetZoneShape]::edit", e, this),
      (this.shape = Reflect.apply(t, this, [!0])),
      this.shapeGroup.add(this.shape),
      this.shapeGroup.moveToTop(),
      e == "directional" &&
        this.poi.lines.length == 0 &&
        this.initWaypointsFromNodeEdge();
    const o = this.poi.nodes,
      i = this.poi.edges;
    return (
      o.forEach((a) => this.node(a, !0)),
      i.forEach((a) => this.edge(a, !0)),
      (this.editReset = this.edit),
      this.setPolygonEditor(this.poi, this.poi.nodes),
      this.editingStatus.target == "waypoint" && this.setWaypointsEditor(),
      this.shapeGroup
    );
  }
  move() {
    this.edit();
  }
  getCenterPontOfStageByShape() {
    return this.getCenterPontOfStageByPolygon(this.poi);
  }
  setStatus(e) {
    fe.get(e, "target") == "waypoint" &&
      ((this.editingStatus.target = e.target),
      (this.editingStatus.mode = e.mode));
  }
  setRestrictedZoneStatus(e) {
    const t = e ? 1 : 2;
    this.shape.strokeWidth(t), this.shape.dashEnabled(e), (this.canEnter = e);
  }
  indicate(e) {
    var t;
    if ((super.indicate(e), !this.canEnter && this.poi.lastMessage)) {
      const o = this.poi.lastMessage;
      (o.caller = "zone"),
        (o.isIndicating = e),
        (t = this.poi.zone$) == null || t.next(o);
    }
  }
  zoneRestricted(e = !1) {
    const t = this.polygon(this.poi, e);
    return t.fill(uu), t.stroke(lu), t.dash([10, 4]), t;
  }
  zoneDirectional(e = !1) {
    const t = this.polygon(this.poi, e);
    return t.fill(au), t.stroke(ru), t;
  }
  node(e, t) {
    const o = e.pose,
      i = this.mapTool.transformPointM2PX(o),
      a = ms[e.type],
      r = new F.Circle({
        x: i.x,
        y: i.y,
        radius: ki,
        stroke: a,
        strokeWidth: Fi,
        opacity: t ? 1 : ys,
        draggable: t || !1,
      }),
      u = e.index.toString(),
      l = new F.Text({
        x: i.x,
        y: i.y,
        text: u,
        fontSize: 9,
        opacity: t ? 1 : ys,
        fill: "#262B10",
      });
    if (
      (l.offsetX(l.width() / 2),
      l.offsetY(4),
      !t &&
        (e.type == "entry" || e.type == "exit") &&
        (r.strokeWidth(2), r.stroke("#515151")),
      t)
    ) {
      const c = [],
        d = [];
      r.on("dragstart", () => {
        this.poi.edges.forEach((v) => {
          v.from == e.index && c.push(v), v.to == e.index && d.push(v);
        });
      }),
        r.on("dragmove", () => {
          const f = r.x(),
            v = r.y();
          l.x(f),
            l.y(v),
            c.map((E) => {
              const C = this.edgeShapes.get(E),
                x = this.getNodeByIndex(E.to),
                b = this.mapTool.transformPointM2PX(x.pose),
                m = this.getArrowEndPoint(b, {
                  x: f,
                  y: v,
                }),
                _ = this.getArrowEndPoint(
                  {
                    x: f,
                    y: v,
                  },
                  b
                );
              C == null || C.points([m.x, m.y, _.x, _.y]);
            }),
            d.map((E) => {
              const C = this.edgeShapes.get(E),
                x = this.getNodeByIndex(E.from),
                b = this.mapTool.transformPointM2PX(x.pose),
                m = this.getArrowEndPoint(
                  {
                    x: f,
                    y: v,
                  },
                  b
                ),
                _ = this.getArrowEndPoint(b, {
                  x: f,
                  y: v,
                });
              C == null || C.points([m.x, m.y, _.x, _.y]);
            });
          const w = this.mapTool.transformPointPX2M({
            x: f,
            y: v,
          });
          (e.pose.x = w.x), (e.pose.y = w.y), this.node$.next(e);
        }),
        r.on("dragend", (f) => {
          (c.length = 0), (d.length = 0);
        });
    }
    this.shapeGroup.add(l),
      this.shapeGroup.add(r),
      this.nodesShapes.set(e.index, [r, l, l]);
  }
  edge(e, t) {
    const o = this.getNodeByIndex(e.from),
      i = this.getNodeByIndex(e.to),
      a = this.mapTool.transformPointM2PX(o.pose),
      r = this.mapTool.transformPointM2PX(i.pose),
      u = this.getArrowEndPoint(r, a),
      l = this.getArrowEndPoint(a, r),
      c = ms.default,
      d = ms.default,
      f = new F.Arrow({
        name: "__edge",
        points: [u.x, u.y, l.x, l.y],
        fill: d,
        stroke: c,
        strokeWidth: 1,
        opacity: t ? 1 : ys,
        pointerLength: cu,
        pointerWidth: du,
      });
    this.shapeGroup.add(f), this.edgeShapes.set(e, f);
  }
  getNodeByIndex(e) {
    return this.poi.nodes.find((t) => t.index == e);
  }
  getDegreeByPoints(e, t) {
    const o = t.x - e.x,
      i = t.y - e.y;
    let a = Math.atan(i / o);
    return o < 0 && (a += Math.PI), a;
  }
  getArrowEndPoint(e, t) {
    const o = Math.PI - this.getDegreeByPoints(e, t),
      i = ki + Fi / 2;
    return {
      x: t.x + i * Math.cos(o),
      y: t.y - i * Math.sin(o),
    };
  }
  initWaypointsFromNodeEdge() {
    const e = this.poi.nodes;
    this.poi.lines || (this.poi.lines = []);
    const t = (this.poi.lines = []),
      o = [];
    e.map((i) => {
      o.push(i.index), i.type == "exit" && (t.push([...o]), (o.length = 0));
    });
  }
  initWaypointsEditor() {
    const e = {
        x: 0,
        y: 0,
        width: this.mapTool.mapWidth,
        height: this.mapTool.mapHeight,
        stroke: "black",
        strokeWidth: 5,
      },
      t = new F.Rect(e);
    return this.shapeGroup.add(t), t;
  }
  setWaypointsEditor() {
    const e = this.initWaypointsEditor(),
      t = this.mapTool.layer,
      o = [],
      i = [],
      a = [];
    let r = !1,
      u;
    t.on("click contextmenu", (l) => {
      if ((l.evt.preventDefault(), l.evt.button == 0)) {
        let c = function () {
          if (i.length == 0) return;
          i.map((C) => C.off("click")),
            i[i.length - 1].on("click", () => {
              var C, x;
              o.pop(),
                (C = i.pop()) == null || C.destroy(),
                (x = a.pop()) == null || x.destroy(),
                (u = a.length ? a[a.length - 1] : null),
                c();
            });
        };
        const f = l.currentTarget.getRelativePointerPosition();
        r = !0;
        const v = new F.Circle({
            x: f.x,
            y: f.y,
            radius: 10,
            fill: "orange",
          }),
          w = new F.Line({
            points: [f.x, f.y, f.x, f.y],
            stroke: "red",
            strokeWidth: 2,
          });
        o.push(f),
          i.push(v),
          a.push(w),
          c(),
          this.shapeGroup.add(w),
          this.shapeGroup.add(v),
          (u = w);
      }
      if (l.evt.button == 2) {
        const c = o.length ? o[o.length - 1] : null;
        (r = !1),
          c && (u == null || u.points([c.x, c.y])),
          (u = null),
          this.makeNodeEdgeFromWaypoints(o),
          t.off("click contextmenu"),
          (this.editingStatus.target = ""),
          this.edit();
      }
    }),
      e.on("mousemove", (l) => {
        if (
          ((this.shape.getStage().container().style.cursor = "crosshair"), !r)
        )
          return;
        const d = l.currentTarget.getRelativePointerPosition(),
          f = o.length ? o[o.length - 1] : null;
        f && (u == null || u.points([f.x, f.y, d.x, d.y]));
      });
  }
  makeNodeEdgeFromWaypoints(e) {
    const t = this.poi.nodes,
      o = this.poi.edges,
      i = this.poi.lines,
      a = [];
    e.map((r, u) => {
      const l = ++this.nodeIndex,
        c = {
          x: (r.x - this.mapTool.mapOrigin.x) / this.mapTool.M2PX,
          y: ((r.y - this.mapTool.mapOrigin.y) / this.mapTool.M2PX) * -1,
          theta: 0,
        };
      let d = "waypoint",
        f = !0;
      u == 0 && (d = "entry"),
        u == e.length - 1 && ((d = "exit"), (f = !1)),
        t.push(
          new So({
            index: l,
            type: d,
            name: "",
            pose: c,
          })
        ),
        f &&
          o.push(
            new $o({
              from: l,
              to: l + 1,
            })
          ),
        a.push(l);
    }),
      i.push(a),
      i.length == 1 && (this.poi.mode = "1way"),
      i.length == 2 && (this.poi.mode = "2way");
  }
}
const pu = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "FleetZone",
};
class Pi extends It {
  constructor(e, t, o) {
    var i;
    super(e, t);
    p(this, "type");
    p(this, "polygon");
    p(this, "nodes", []);
    p(this, "edges", []);
    p(this, "mode");
    p(this, "capacity");
    p(this, "lines", []);
    p(this, "shape");
    p(this, "zone$");
    p(this, "lastMessage");
    p(this, "subscription");
    (this.type = e.type),
      (this.polygon = [...e.polygon]),
      e.nodes.forEach((a) => this.nodes.push(new So(a))),
      e.edges.forEach((a) => this.edges.push(new $o(a))),
      (this.mode = e.mode),
      (this.capacity = e.capacity),
      (this.shape = new hu(this, t)),
      this.type == "directional" && this.initWaypointsFromNodeEdge(),
      this.type == "restricted" &&
        Ta(this.id).then((a) => {
          var r;
          !this.lastMessage && ((r = this.zone$) == null || r.next(a));
        }),
      (this.zone$ = o),
      (i = this.zone$) == null ||
        i
          .pipe(Yt((a) => a.id == this.id))
          .subscribe((a) => this.parseRestrictedZoneMessage(a));
  }
  parseRestrictedZoneMessage(e) {
    const t = e.capacity > e.currentWorker.length;
    (this.lastMessage = e), this.shape.setRestrictedZoneStatus(t);
  }
  initWaypointsFromNodeEdge() {
    const e = [];
    this.nodes.map((t) => {
      e.push(t.index),
        t.type == "exit" && (this.lines.push([...e]), (e.length = 0));
    });
  }
  static getDefaultData(e, t, o) {
    const i = o != null ? o : "directional",
      a = 1,
      r = 1,
      u = {
        ...pu,
        map: e,
        type: i,
        polygon: [
          {
            x: t.x - a,
            y: t.y + r,
          },
          {
            x: t.x + a,
            y: t.y + r,
          },
          {
            x: t.x + a,
            y: t.y - r,
          },
          {
            x: t.x - a,
            y: t.y - r,
          },
        ],
        nodes: [],
        edges: [],
        mode: "1way",
      };
    return i == "restricted" && ((u.mode = "loose"), (u.capacity = 1)), u;
  }
  serialize() {
    const e = this.serializeBase(),
      t = [],
      o = [];
    this.nodes.forEach((a) => t.push(a.serialize())),
      this.edges.forEach((a) => o.push(a.serialize()));
    const i = {
      ...e,
      type: this.type,
      polygon: [...this.polygon],
      nodes: t,
      edges: o,
      mode: this.mode,
    };
    return this.type == "restricted" && (i.capacity = this.capacity), i;
  }
}
class fu {
  constructor(s, e) {
    p(this, "mapWidth");
    p(this, "mapHeight");
    p(this, "mapOrigin");
    p(this, "M2PX");
    p(this, "map");
    p(this, "layer");
    p(this, "selectedFmz$");
    p(this, "selectedResource$");
    p(this, "selectedPopup$");
    p(this, "resourceStore");
    p(this, "fmzStore");
    p(this, "workerStore");
    p(this, "areaOpacity", 0.75);
    p(this, "zoneOpacity", 0.75);
    p(this, "fleetZoneOpacity", 0.75);
    p(this, "textSize", 12);
    p(this, "textEllipsis", !1);
    p(this, "textTilt", !1);
    p(this, "canViewOfflineWorker", !1);
    p(this, "canViewSubResource", !0);
    p(this, "workerConfig", {
      viewWorkerPathGlobal: !0,
      viewFmzPathGlobal: !0,
    });
    (this.map = s),
      (this.mapWidth = s.width),
      (this.mapHeight = s.height),
      (this.mapOrigin = s.getOriginPoint()),
      (this.M2PX = s.M2PX),
      (this.layer = e),
      (this.selectedFmz$ = new Me()),
      (this.selectedResource$ = new Me()),
      (this.selectedPopup$ = new Me());
  }
  setStores(s, e) {
    (this.resourceStore = s), (this.workerStore = e);
  }
  getMapName() {
    return this.map.name;
  }
  getPoseProxy(s) {
    const e = {
        x: (i) => this.mapOrigin.x + i * this.M2PX,
        y: (i) => this.mapOrigin.y - i * this.M2PX,
        theta: (i) => i,
        degree: (i) => i,
      },
      t = {
        x: (i) => (i - this.mapOrigin.x) / this.M2PX,
        y: (i) => ((i - this.mapOrigin.y) / this.M2PX) * -1,
        theta: (i) => i,
        degree: (i) => i,
      },
      o = {
        get(i, a, r) {
          const u = Reflect.get(i, a, r);
          return (
            console.log("@___[ProxyPose]::get", i, a, u),
            Object.hasOwn(e, a) ? e[a](u) : u
          );
        },
        set(i, a, r, u) {
          const l = t[a](r),
            c = Reflect.set(i, a, l, u);
          return console.log("@___[ProxyPose]::set", i, a, l, c), c;
        },
      };
    return new Proxy(s, o);
  }
  transformPoseM2PX(s) {
    var e;
    try {
      return {
        x: this.mapOrigin.x + s.x * this.M2PX,
        y: this.mapOrigin.y - s.y * this.M2PX,
        degree: (e = s.degree) != null ? e : 0,
        theta: s.degree * (Math.PI / -180),
      };
    } catch (t) {
      return console.error("[transformPoseM2PX]", t, s), s;
    }
  }
  transformPosePX2M(s) {
    var e;
    try {
      return {
        x: (s.x - this.mapOrigin.x) / this.M2PX,
        y: ((s.y - this.mapOrigin.y) / this.M2PX) * -1,
        degree: (e = s.degree) != null ? e : 0,
        theta: s.degree * (Math.PI / -180),
      };
    } catch (t) {
      return console.error("[transformPosePX2M]", t, s), s;
    }
  }
  transformByDegree(s, e) {
    const t = e.x,
      o = e.y,
      i = e.theta * (Math.PI / 180),
      a = s.x - t,
      r = (s.y - o) * -1;
    return {
      x: a * Math.cos(i) - r * Math.sin(i) + t,
      y: (a * Math.sin(i) + r * Math.cos(i)) * -1 + o,
      theta: e.theta,
    };
  }
  changePoseByPointPX2M(s, e) {
    (s.x = (e.x - this.mapOrigin.x) / this.M2PX),
      (s.y = ((e.y - this.mapOrigin.y) / this.M2PX) * -1);
  }
  changePoseByDegree(s, e) {
    (s.degree = e), (s.theta = e * (Math.PI / -180));
  }
  changePoseByDeltaPX2M(s, e, t, o) {
    (s.x += e / this.M2PX),
      (s.y += (t / this.M2PX) * -1),
      (s.degree += o),
      (s.theta += o * (Math.PI / -180));
  }
  getAreaCenterM2PX(s) {
    const e = this.transformAreaM2PX(s);
    return {
      x: Math.round(e.x),
      y: Math.round(e.y),
    };
  }
  transformAreaM2PX(s) {
    var t, o;
    return {
      x: this.mapOrigin.x + s.x * this.M2PX,
      y: this.mapOrigin.y - s.y * this.M2PX,
      width: s.width * this.M2PX,
      height: s.height * this.M2PX,
      degree: (t = s.degree) != null ? t : 0,
      theta: s.degree ? (s.degree * -180) / Math.PI : 0,
      rotation: (o = s.degree) != null ? o : 0,
      offsetX: (s.width * this.M2PX) / 2,
      offsetY: (s.height * this.M2PX) / 2,
    };
  }
  transformAreaPX2M(s) {
    var t;
    return {
      x: (s.x - this.mapOrigin.x) / this.M2PX,
      y: ((s.y - this.mapOrigin.y) / this.M2PX) * -1,
      width: s.width / this.M2PX,
      height: s.height / this.M2PX,
      theta: s.degree ? s.degree * (Math.PI / -180) : 0,
      degree: (t = s.degree) != null ? t : 0,
    };
  }
  changeAreaByNewAreaPX2M(s, e) {
    const t = this.transformAreaPX2M(e);
    (s.x = t.x),
      (s.y = t.y),
      (s.width = t.width),
      (s.height = t.height),
      (s.degree = t.degree),
      (s.theta = t.theta);
  }
  changeAreaXYByPointPX2M(s, e) {
    (s.x = (e.x - this.mapOrigin.x) / this.M2PX),
      (s.y = ((e.y - this.mapOrigin.y) / this.M2PX) * -1);
  }
  transformPointM2PX(s) {
    return {
      x: this.mapOrigin.x + s.x * this.M2PX,
      y: this.mapOrigin.y - s.y * this.M2PX,
    };
  }
  transformPointPX2M(s) {
    return {
      x: (s.x - this.mapOrigin.x) / this.M2PX,
      y: ((s.y - this.mapOrigin.y) / this.M2PX) * -1,
    };
  }
  getCentroidM2PX(s) {
    let e = 0,
      t = 0,
      o = 0;
    for (let a = 0; a < s.length; a++) {
      const r = (a + 1) % s.length,
        u = this.transformPointM2PX(s[a]),
        l = this.transformPointM2PX(s[r]),
        c = u.x,
        d = u.y,
        f = l.x,
        v = l.y;
      (e += c * v),
        (e -= d * f),
        (t += (c + f) * (c * v - f * d)),
        (o += (d + v) * (c * v - f * d));
    }
    return (
      (e /= 2),
      (e = Math.abs(e)),
      (t = t / (6 * e)),
      (o = o / (6 * e)),
      {
        x: Math.abs(t),
        y: Math.abs(o),
      }
    );
  }
  changePolygonNNodesPoseByDelta(s, e, t, o) {
    s.map((i) => {
      (i.x += t / this.M2PX), (i.y += (o / this.M2PX) * -1);
    }),
      e.map((i) => {
        (i.pose.x += t / this.M2PX), (i.pose.y += (o / this.M2PX) * -1);
      });
  }
  changeZonePoseByDelta(s, e, t, o) {
    s.map((i) => {
      (i.x += e / this.M2PX), (i.y += (t / this.M2PX) * -1);
    }),
      o &&
        (console.log("@______________escapePose", o),
        (o.x += e / this.M2PX),
        (o.y += (t / this.M2PX) * -1));
  }
  changePolygonPoseByIndexNDelta(s, e, t, o) {
    const i = s[e];
    (i.x += t / this.M2PX), (i.y += (o / this.M2PX) * -1);
  }
  getOpacity() {
    return 0.75;
  }
}
class gu {
  constructor(s) {
    p(this, "id");
    p(this, "name");
    p(this, "width");
    p(this, "height");
    p(this, "originX");
    p(this, "originY");
    p(this, "M2PX");
    p(this, "imageData");
    var t, o, i, a, r, u, l, c, d, f, v, w, E;
    const e =
      (o = (t = s.metadata) == null ? void 0 : t.origin_py) != null ? o : 0;
    (this.id = (i = s._id) != null ? i : ""),
      (this.name = (a = s.name) != null ? a : ""),
      (this.width =
        (u = (r = s.metadata) == null ? void 0 : r.width_gm) != null ? u : 0),
      (this.height =
        (c = (l = s.metadata) == null ? void 0 : l.height_gm) != null ? c : 0),
      (this.originX =
        (f = (d = s.metadata) == null ? void 0 : d.origin_px) != null ? f : 0),
      (this.originY = this.height - e),
      (this.M2PX =
        (w = (v = s.metadata) == null ? void 0 : v.scale_m2px) != null
          ? w
          : 32),
      (this.imageData = (E = s.encoded_map) != null ? E : "");
  }
  serialize() {
    return {
      name: "",
      metadata: {
        height_gm: void 0,
        width_gm: void 0,
        origin_px: void 0,
        origin_py: void 0,
        ox: void 0,
        oy: void 0,
        scale_m2px: void 0,
      },
      encoded_map: "",
    };
  }
  getOriginPoint() {
    return {
      x: this.originX,
      y: this.originY,
    };
  }
  draw() {
    const s = new Image(),
      e = new F.Image({
        name: "map-image",
        width: this.width,
        height: this.height,
        scaleY: -1,
        offsetY: this.height,
        image: s,
      });
    return (
      (s.onload = () => {
        e.image(s);
      }),
      (s.onerror = (t) => {
        console.log("[MapImageError", t);
      }),
      (s.src = `data:image/png;base64,${this.imageData}`),
      e
    );
  }
}
const _o = 7,
  mu = 2,
  Si = {
    entry: "red",
    exit: "blue",
    work: "green",
    default: "gray",
    waypoint: "gray",
  },
  Ti = 0.6,
  yu = 5,
  vu = 4;
class _u extends Mo {
  constructor(e, t) {
    super(t);
    p(this, "poi");
    p(this, "node$");
    p(this, "editEventHandlerFlg");
    p(this, "nodeIndex");
    p(this, "nodesShapes", new Map());
    p(this, "edgeShapes", new Map());
    (this.editEventHandlerFlg = !1),
      (this.poi = e),
      (this.shapeGroup = new F.Group({
        id: e.id,
        name: e.resourceType,
      })),
      (this.nodeIndex = e.nodes.reduce((o, i) => Math.max(o, i.index), 0)),
      (this.node$ = new Me());
  }
  draw() {
    this.shapeGroup.destroyChildren();
    const e = this.poi.nodes,
      t = this.poi.edges;
    return (
      e.forEach((o) => this.node(o, !1)),
      t.forEach((o) => this.edge(o, !1)),
      this.bindClickEvent(!0, this.poi.id),
      this.shapeGroup
    );
  }
  edit() {
    this.shapeGroup.destroyChildren();
    const e = this.poi.nodes,
      t = this.poi.edges;
    return (
      e.forEach((o) => this.node(o, !0)),
      t.forEach((o) => this.edge(o, !0)),
      this.editEventHandlerFlg ||
        ((this.editEventHandlerFlg = !0),
        this.setNodeEditor(this.editEventHandlerFlg)),
      this.shapeGroup.moveToTop(),
      this.shapeGroup
    );
  }
  move() {
    (this.editEventHandlerFlg = !0), this.edit();
  }
  deleteNode(e) {
    const t = this.poi.nodes;
    t.length !== 1 &&
      (this.poi.edges.pop(),
      t.splice(e - 1, 1),
      t.forEach((o) => {
        o.index > e && (o.index -= 1);
      }),
      (this.editEventHandlerFlg = !1),
      this.edit(),
      this.node$.next({}));
  }
  deleteAllNode() {
    const e = this.poi.nodes;
    e.length !== 1 &&
      ((this.poi.edges = []),
      e.splice(1),
      (this.editEventHandlerFlg = !1),
      this.edit(),
      this.node$.next({}));
  }
  node(e, t) {
    const o = e.pose,
      i = this.mapTool.transformPointM2PX(o),
      a = new Image(_o * 2, _o * 2),
      r = new F.Image({
        image: a,
        index: e.index,
        x: i.x,
        y: i.y,
        offset: {
          x: _o,
          y: _o,
        },
        draggable: t || !1,
      });
    (a.onload = () => {
      r.image(a);
    }),
      (a.src = "/monitoring/resource/waiting_queue.svg");
    const u =
        e.index == 1 && !!this.poi.name
          ? `${this.poi.name}_${e.index.toString()}`
          : e.index.toString(),
      l = new F.Text({
        index: e.index,
        x: i.x,
        y: i.y,
        text: u,
        fontSize: 9,
        opacity: t ? 1 : Ti,
        fill: "#262B10",
        name: "nodeText",
      });
    if (
      (l.offsetX(l.width() / 2),
      l.offsetY(l.height() / -2 - l.height()),
      t &&
        r.on("dblclick", (c) => {
          c.evt.preventDefault(),
            (c.cancelBubble = !0),
            t && this.deleteNode(c.currentTarget.attrs.index);
        }),
      t)
    ) {
      const c = [],
        d = [];
      r.on("dragstart", () => {
        this.poi.edges.forEach((v) => {
          v.from == e.index && c.push(v), v.to == e.index && d.push(v);
        });
      }),
        r.on("dragmove", () => {
          const f = r.x(),
            v = r.y();
          l.x(f),
            l.y(v),
            c.map((E) => {
              const C = this.edgeShapes.get(E),
                x = this.getNodeByIndex(E.to),
                b = this.mapTool.transformPointM2PX(x.pose),
                m = this.getArrowEndPoint(b, {
                  x: f,
                  y: v,
                }),
                _ = this.getArrowEndPoint(
                  {
                    x: f,
                    y: v,
                  },
                  b
                );
              C == null || C.points([m.x, m.y, _.x, _.y]);
            }),
            d.map((E) => {
              const C = this.edgeShapes.get(E),
                x = this.getNodeByIndex(E.from),
                b = this.mapTool.transformPointM2PX(x.pose),
                m = this.getArrowEndPoint(
                  {
                    x: f,
                    y: v,
                  },
                  b
                ),
                _ = this.getArrowEndPoint(b, {
                  x: f,
                  y: v,
                });
              C == null || C.points([m.x, m.y, _.x, _.y]);
            });
          const w = this.mapTool.transformPointPX2M({
            x: f,
            y: v,
          });
          (e.pose.x = w.x), (e.pose.y = w.y), this.node$.next(e);
        }),
        r.on("dragend", (f) => {
          (c.length = 0), (d.length = 0);
        });
    }
    this.shapeGroup.add(l),
      this.shapeGroup.add(r),
      this.nodesShapes.set(e.index, [r, l, l]);
  }
  edge(e, t) {
    const o = this.getNodeByIndex(e.from),
      i = this.getNodeByIndex(e.to),
      a = this.mapTool.transformPointM2PX(o.pose),
      r = this.mapTool.transformPointM2PX(i.pose),
      u = this.getArrowEndPoint(r, a),
      l = this.getArrowEndPoint(a, r),
      c = Si.default,
      d = Si.default,
      f = new F.Arrow({
        name: "__edge",
        points: [u.x, u.y, l.x, l.y],
        fill: d,
        dash: this.poi.connectedResource ? [0] : [2],
        stroke: c,
        strokeWidth: 1,
        opacity: t ? 1 : Ti,
        pointerLength: yu,
        pointerWidth: vu,
      });
    this.shapeGroup.add(f), this.edgeShapes.set(e, f);
  }
  getNodeByIndex(e) {
    return this.poi.nodes.find((t) => t.index == e);
  }
  getDegreeByPoints(e, t) {
    const o = t.x - e.x,
      i = t.y - e.y;
    let a = Math.atan(i / o);
    return o < 0 && (a += Math.PI), a;
  }
  getArrowEndPoint(e, t) {
    const o = Math.PI - this.getDegreeByPoints(e, t),
      i = _o + mu / 2;
    return {
      x: t.x + i * Math.cos(o),
      y: t.y - i * Math.sin(o),
    };
  }
  initNodeEditor() {
    const e = {
        x: 0,
        y: 0,
        width: this.mapTool.mapWidth,
        height: this.mapTool.mapHeight,
        stroke: "black",
        strokeWidth: 5,
      },
      t = new F.Rect(e);
    return this.shapeGroup.add(t), t.moveToBottom(), t;
  }
  setNodeEditor(e = !1) {
    e &&
      this.initNodeEditor().on("dblclick", (o) => {
        o.evt.preventDefault(), (o.cancelBubble = !0);
        const a = o.currentTarget.getRelativePointerPosition(),
          r = this.mapTool.transformPosePX2M(a),
          u = this.poi.nodes.length,
          l = new So({
            pose: {
              x: r.x,
              y: r.y,
              theta: 0,
              degree: 0,
            },
            index: u + 1,
          });
        this.poi.nodes.push(l),
          this.poi.edges.push(
            new $o({
              from: u,
              to: u + 1,
            })
          ),
          (this.editEventHandlerFlg = !1),
          this.edit(),
          this.node$.next(l);
      });
  }
  findFirstNodeText() {
    const e = this.shapeGroup.find(".nodeText").find((t) => t.attrs.index == 1);
    if (e) return e;
  }
  changeNodeName() {
    const e = this.findFirstNodeText();
    if (e) {
      const t = this.poi.name ? `${this.poi.name}_1` : "1";
      e.text(t), e.offsetX(e.width() / 2);
    }
  }
}
const xu = {
  id: "new-id",
  name: "",
  description: "",
  resource_type: "WaitingQueue",
};
class Fs extends It {
  constructor(e, t) {
    super(e, t);
    p(this, "nodes", []);
    p(this, "edges", []);
    p(this, "connectedResource");
    p(this, "disconnectedResourceId", "");
    p(this, "pose");
    p(this, "shape");
    e.pose &&
      (this.nodes.push(
        new So({
          pose: {
            x: e.pose.x,
            y: e.pose.y,
            theta: 0,
            degree: 0,
          },
          index: 1,
        })
      ),
      (this.pose = new Ie(e.pose))),
      e.nodes.forEach((o) => this.nodes.push(new So(o))),
      e.edges.forEach((o) => this.edges.push(new $o(o))),
      (this.connectedResource = e == null ? void 0 : e.connected_resource),
      (this.shape = new _u(this, t));
  }
  static getDefaultData(e, t) {
    return {
      ...xu,
      map: e,
      nodes: [],
      edges: [],
      pose: {
        x: t.x,
        y: t.y,
        degree: 0,
        theta: 0,
      },
      connected_resource: "",
    };
  }
  serialize() {
    const e = this.serializeBase(),
      t = [],
      o = [];
    this.nodes.forEach((r) => t.push(r.serialize())),
      this.edges.forEach((r) => o.push(r.serialize()));
    const i = this.connectedResource;
    return {
      ...e,
      nodes: t,
      edges: o,
      connected_resource: i,
    };
  }
  async create(e) {
    return console.log("[WaitingQueue]::create method"), await super.create(e);
  }
  async update(e) {
    return console.log("[WaitingQueue]::update method"), await super.update(e);
  }
  async delete() {}
  async created() {
    console.log("[WaitingQueue]::after create method");
  }
  async updated() {
    if (
      (console.log("[WaitingQueue]::after update method"),
      this.disconnectedResourceId)
    ) {
      const e = this.mapTool.resourceStore.get(this.disconnectedResourceId);
      if (e instanceof Uo || e instanceof Zo || e instanceof Do) {
        e == null || e.disconnectWaitingQueue(this.id);
        const t = e == null ? void 0 : e.serialize();
        e == null || e.update(t);
      }
    }
  }
  async deleted() {
    if (
      (console.log("[WaitingQueue]::after delete method"),
      this.connectedResource)
    ) {
      const e = this.mapTool.resourceStore.get(this.connectedResource);
      if (e instanceof Uo || e instanceof Zo) {
        e == null || e.disconnectWaitingQueue(this.id);
        const t = e == null ? void 0 : e.serialize();
        e == null || e.update(t);
      }
    }
  }
  connectResource(e) {
    (this.connectedResource = e), (this.disconnectedResourceId = "");
  }
  disconnectResource(e) {
    this.connectedResource == e &&
      ((this.disconnectedResourceId = this.connectedResource),
      (this.connectedResource = ""));
  }
}
const Du = [
  "Autodoor",
  "TeleporterGate",
  "Slope",
  "WorkingStation",
  "ExclusiveArea",
];
class wu {
  constructor(s) {
    p(this, "mapTool");
    p(this, "baseMap");
    p(this, "resourceStore", new Map());
    p(this, "fmzStore", new Map());
    p(this, "workerStore", new Map());
    p(this, "editingResource");
    p(this, "websocketService");
    p(this, "loadedMap$", new Me());
    p(this, "restrictedZoneWorker$", new Me());
    p(this, "trackingWorker$", new Me());
    p(this, "workerPath$", new Me());
    p(this, "stage");
    p(this, "layerMap");
    p(this, "layerPoi");
    p(this, "layerFmz");
    p(this, "layerWorker");
    p(this, "layerUtil");
    p(
      this,
      "shortPathGroup",
      new F.Group({
        id: "short-path-group",
      })
    );
    p(
      this,
      "pathGroup",
      new F.Group({
        id: "path-group",
      })
    );
    p(this, "trackingPathGroup");
    p(this, "scale", 1);
    p(this, "scaleBy", 1.05);
    p(this, "minScale", 0.2);
    p(this, "maxScale", 5);
    p(this, "classLoader", {
      Location: (s) => new tt(s, this.mapTool),
      Marker: (s) => new ks(s, this.mapTool),
      Robostop: (s) => new hi(s, this.mapTool),
      Dim: (s) => new di(s, this.mapTool),
      Autodoor: (s) => new fi(s, this.mapTool),
      AutodoorExt: (s) => new Zo(s, this.mapTool),
      TeleporterGate: (s) => new Uo(s, this.mapTool),
      ExclusiveArea: (s) => new xi(s, this.mapTool),
      Slope: (s) => new bi(s, this.mapTool),
      WorkingStation: (s) => new Ei(s, this.mapTool),
      Zone: (s) => new Ai(s, this.mapTool),
      FleetZone: (s) => new Pi(s, this.mapTool, this.restrictedZoneWorker$),
      WaitingQueue: (s) => new Fs(s, this.mapTool),
    });
    p(this, "initDataLoader", {
      Location: (s) => tt.getDefaultData(this.baseMap.id, s),
      Marker: (s) => ks.getDefaultData(this.baseMap.id, s),
      Robostop: (s) => hi.getDefaultData(this.baseMap.id, s),
      Dim: (s, e) => di.getDefaultData(this.baseMap.id, s, e),
      Autodoor: (s) => fi.getDefaultData(this.baseMap.id, s),
      AutodoorExt: (s) => Zo.getDefaultData(this.baseMap.id, s),
      TeleporterGate: (s) => Uo.getDefaultData(this.baseMap.id, s),
      ExclusiveArea: (s) => xi.getDefaultData(this.baseMap.id, s),
      Slope: (s) => bi.getDefaultData(this.baseMap.id, s),
      WorkingStation: (s) => Ei.getDefaultData(this.baseMap.id, s),
      Zone: (s, e) => Ai.getDefaultData(this.baseMap.id, s, e),
      FleetZone: (s, e) => Pi.getDefaultData(this.baseMap.id, s, e),
      WaitingQueue: (s) => Fs.getDefaultData(this.baseMap.id, s),
    });
    this.websocketService = s;
  }
  initStage(s) {
    (this.stage = new F.Stage({
      container: s,
      width: window.innerWidth,
      height: window.innerHeight,
      draggable: !0,
    })),
      (this.layerMap = new F.Layer({
        name: "base-map",
      })),
      (this.layerPoi = new F.Layer({
        name: "resource-poi",
      })),
      (this.layerFmz = new F.Layer({
        name: "fmz-poi",
      })),
      (this.layerWorker = new F.Layer({
        name: "worker-poi",
      })),
      (this.layerUtil = new F.Layer({
        name: "path-util",
      })),
      this.stage
        .add(this.layerMap)
        .add(this.layerFmz)
        .add(this.layerPoi)
        .add(this.layerWorker)
        .add(this.layerUtil);
  }
  loadBaseMap(s) {
    var t;
    (this.baseMap = new gu(s)),
      (this.mapTool = new fu(this.baseMap, this.layerPoi)),
      this.mapTool.setStores(this.resourceStore, this.workerStore),
      this.stage.absolutePosition({
        x: 0,
        y: 0,
      }),
      this.layerMap.destroyChildren(),
      this.layerPoi.destroyChildren(),
      this.layerWorker.destroyChildren(),
      this.stage.off("mousemove");
    const e = this.baseMap.draw();
    e && this.layerMap.add(e),
      this.moveStage2MapCenter(),
      (t = this.websocketService) == null ||
        t.connectMonitoring(this.baseMap.id).subscribe((o) => {
          console.log("[StageService]::websocket::monitoring", o);
          const i = o.document;
          this.restrictedZoneWorker$.next(i);
        });
  }
  loadWorkers(s) {
    this.layerWorker.destroyChildren(),
      this.workerStore.forEach((e, t) => {
        var o;
        (o = e == null ? void 0 : e.subscription) == null || o.unsubscribe(),
          (e = null),
          console.log("[WorkerStore]", t, e);
      }),
      this.workerStore.clear(),
      s.forEach((e) => this.loadWorker(e));
  }
  loadWorker(s) {
    var i;
    (s.map = s.type_specific.location.map), (s.resource_type = "Worker");
    const e = (i = this.websocketService) == null ? void 0 : i.connectWorker2(),
      t = new ar(s, this.mapTool, e, this.restrictedZoneWorker$);
    t.setStageService(this), this.workerStore.set(t.id, t);
    const o = t.shape.draw();
    return o && this.layerWorker.add(o), t;
  }
  removeWorker(s) {
    const e = this.workerStore.get(s);
    e && e.shape.edit(), this.workerStore.delete(s);
  }
  drawWorker(s) {
    const e = this.workerStore.get(s);
    e && this.layerWorker.add(e.shape.draw());
  }
  trackWorker(s) {
    this.workerStore.forEach((t) => t && (t.isTracking = !1));
    const e = this.workerStore.get(s);
    this.trackingWorker$.next(s),
      e && ((e.isTracking = !0), this.moveStage2ShapeByResource(e));
  }
  loadResources(s) {
    this.layerPoi.destroyChildren(),
      this.resourceStore.clear(),
      Object.keys(s).forEach((t) => {
        s[t].forEach((i) => this.loadResource(t, i));
      });
  }
  loadResource(s, e) {
    var i;
    if (!(s in this.classLoader)) return;
    const t = this.classLoader[s](e);
    this.resourceStore.set(t.id, t);
    const o = (i = t.shape) == null ? void 0 : i.draw();
    return (
      o && this.layerPoi.add(o),
      console.log("[StageService]::loadResource", t, o),
      t
    );
  }
  createResource(s, e, t) {
    const o = [e];
    t && o.push(t);
    const i = this.initDataLoader[s](...o);
    return (
      console.log("@__[CreateResource]::rawData", i),
      (this.editingResource = this.classLoader[s](i)),
      this.editResource(),
      this.editingResource
    );
  }
  insertResource(s) {
    this.isWaitingLocation(s) ||
      this.resourceStore.has(s.id) ||
      this.loadResource(s.resource_type, s);
  }
  updateResource(s) {
    if (this.isWaitingLocation(s)) return;
    const e = this.resourceStore.get(s.id);
    e && e.shape.remove(!0), this.loadResource(s.resource_type, s);
  }
  deleteResource(s) {
    const e = s.id,
      t = this.resourceStore.get(e);
    t && t.shape.remove(!0), t && this.resourceStore.delete(e);
  }
  isWaitingLocation(s) {
    return s.resource_type == "Location" && s.type == "waiting";
  }
  cloneResource(s) {
    const e = s.resource_type;
    return (
      console.log("@__[CloneResource]::rawData", e, s),
      (this.editingResource = this.classLoader[e](s)),
      this.editResource(),
      this.editingResource
    );
  }
  editResource() {
    const s = this.editingResource;
    if (s) {
      const t = s.shape.edit();
      t && this.layerPoi.add(t);
    }
    const e = this.resourceStore.get(this.editingResource.id);
    e && e.shape.remove(),
      this.layerWorker.moveToBottom(),
      this.layerMap.moveToBottom();
  }
  closeEditingResource(s) {
    this.editingResource.shape.remove(!0);
    const e = this.resourceStore.get(s);
    e && e.shape.draw(), this.layerWorker.moveToTop();
  }
  removeResource(s) {
    let e = this.resourceStore.get(s);
    e && (e.shape.remove(!0), (e = void 0), this.resourceStore.delete(s));
  }
  bindEvent2Stage(s) {
    this.stage.on("mouseenter", () => {
      this.stage.container().style.cursor = "auto";
    }),
      this.stage.on("dragstart", () => {
        this.stage.container().style.cursor = "grabbing";
      }),
      this.stage.on("dragend", () => {
        this.stage.container().style.cursor = "auto";
      }),
      this.stage.on("wheel", (e) => {
        var u;
        e.evt.preventDefault();
        const t = this.stage.scaleX(),
          o =
            (u = this.stage.getPointerPosition()) != null
              ? u
              : {
                  x: 0,
                  y: 0,
                },
          i = {
            x: (o.x - this.stage.x()) / t,
            y: (o.y - this.stage.y()) / t,
          };
        let a = e.evt.deltaY < 0 ? t * this.scaleBy : t / this.scaleBy;
        (a = a > this.minScale ? a : this.minScale),
          (a = a < this.maxScale ? a : this.maxScale);
        const r = {
          x: o.x - i.x * a,
          y: o.y - i.y * a,
        };
        s(a), (this.scale = a), this.setStageScale(a), this.stage.position(r);
      });
  }
  bindPointerEvent2Map(s, e = !0) {
    e
      ? this.stage.on("mousemove", () => {
          const t = this.stage.getRelativePointerPosition(),
            o = {
              x: (t.x - this.baseMap.originX) / this.baseMap.M2PX,
              y: ((t.y - this.baseMap.originY) / this.baseMap.M2PX) * -1,
            };
          s(o, t);
        })
      : this.stage.off("mousemove");
  }
  bindClosePopupEvent2Map(s) {
    this.stage.on("click", (e) => {
      console.log("[StageService]::click", e), e.evt.button == 0 && s();
    });
  }
  ready4NewResource(s) {
    this.layerMap.on("mousemove", () => {
      this.stage.container().style.cursor = "crosshair";
    }),
      this.stage.on("click", () => {
        const e = this.stage.getRelativePointerPosition(),
          t = {
            x: (e.x - this.baseMap.originX) / this.baseMap.M2PX,
            y: ((e.y - this.baseMap.originY) / this.baseMap.M2PX) * -1,
          };
        this.closeNewResourceEvent(), s(t);
      });
  }
  closeNewResourceEvent() {
    this.stage.off("click"),
      this.layerMap.off("mousemove"),
      (this.stage.container().style.cursor = "auto");
  }
  setStageSize(s, e) {
    var t;
    (t = this.stage) == null ||
      t.size({
        width: s,
        height: e,
      });
  }
  setStageScaleUp() {
    let s = this.scale * this.scaleBy;
    (s = s < this.maxScale ? s : this.maxScale), this.setStageCenterScale(s);
  }
  setStageScaleDown() {
    let s = this.scale / this.scaleBy;
    (s = s > this.minScale ? s : this.minScale), this.setStageCenterScale(s);
  }
  setStageCenterScale(s) {
    const e = this.stage.scaleX(),
      t = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2 - 50,
      },
      o = {
        x: (t.x - this.stage.x()) / e,
        y: (t.y - this.stage.y()) / e,
      },
      i = {
        x: t.x - o.x * s,
        y: t.y - o.y * s,
      };
    (this.scale = s), this.setStageScale(s), this.stage.position(i);
  }
  setStageScale(s) {
    this.stage.scale({
      x: s,
      y: s,
    }),
      (this.scale = s);
  }
  getStageRotation() {
    return this.stage.rotation();
  }
  setStageRotation(s) {
    this.stage.rotation(s);
  }
  rotateStage(s) {
    const e = this.stage.rotation() + s,
      t = ({ x: i, y: a }, r) => {
        const u = Math.cos(r),
          l = Math.sin(r);
        return {
          x: i * u - a * l,
          y: a * u + i * l,
        };
      };
    function o(i, a) {
      const r = {
          x: -i.width() / 2,
          y: -i.height() / 2,
        },
        u = t(r, (Math.PI / 180) * i.rotation()),
        l = t(r, (Math.PI / 180) * a),
        c = l.x - u.x,
        d = l.y - u.y;
      i.rotation(a), i.x(i.x() + c), i.y(i.y() + d);
    }
    o(this.stage, e);
  }
  resetStage() {
    this.setStageScale(1), this.stage.rotation(0), this.moveStage2MapCenter();
  }
  moveStage2MapCenter() {
    this.stage.absolutePosition({
      x: -(this.baseMap.width / 2 - window.innerWidth / 2),
      y: -(this.baseMap.height / 2 - window.innerHeight / 2),
    }),
      this.moveStage2ViewCenterByScale(this.scale);
  }
  moveStage2ShapeByResource(s) {
    const t = s.shape.getCenterPontOfStageByShape();
    t && ((t.y -= 50), this.stage.absolutePosition(t)),
      this.moveStage2ViewCenterByScale(this.scale);
  }
  moveStage2ViewCenterByScale(s) {
    const e = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2 - 50,
      },
      t = {
        x: e.x - this.stage.x(),
        y: e.y - this.stage.y(),
      },
      o = {
        x: e.x - t.x * s,
        y: e.y - t.y * s,
      };
    this.stage.position(o);
  }
  getFmzSelectionSubject() {
    return this.mapTool.selectedFmz$;
  }
  getResourceSelectionSubject() {
    return this.mapTool.selectedResource$;
  }
  getResourcePopupSubject() {
    return this.mapTool.selectedPopup$;
  }
  toggleResourceSelectionByType(s, e) {
    const t = s == "Worker" ? this.workerStore : this.resourceStore;
    for (const o of t.values())
      (o == null ? void 0 : o.resourceType) == s &&
        (o.shape.bindClickEvent(e, o.id),
        o.shape.bindMouseOverEvent(e, o.shape.indicate));
  }
  toggleResourceDisplayByType(s, e) {
    (s == "Worker"
      ? this.layerWorker.find(`.${s}`)
      : this.layerPoi.find(`.${s}`)
    ).forEach((o) => o.visible(e));
  }
  toggleSubShapeDisplay(s) {
    (this.mapTool.canViewSubResource = s),
      this.layerPoi.find(".Sub").forEach((e) => e.visible(s));
  }
  toggleOfflineWorkerDisplay(s) {
    this.mapTool.canViewOfflineWorker = s;
    for (const e of this.workerStore.values())
      (e == null ? void 0 : e.status) == "offline" &&
        e.shape.shapeGroup.visible(s);
  }
  toggleTextDisplayByType(s, e) {
    const t =
      s == "Worker"
        ? this.layerWorker.find(`.${s}`)
        : this.layerPoi.find(`.${s}`);
    console.log("[StageService]::Text::shapeGroups", t),
      t.forEach((o) => {
        o.find(".Title").forEach((a) => a.visible(e));
      });
  }
  toggleTextTilt(s) {
    this.mapTool.textTilt = s;
    const e = s ? -25 : 25;
    this.layerPoi.find(".Title").forEach((t) => t.rotate(e));
  }
  toggleTextEllipsis(s) {
    this.mapTool.textEllipsis = s;
    for (const e of this.resourceStore.values()) {
      const t = e ? e.name : "",
        o = s && t.length > 13 ? `${t.substring(0, 13)}...` : t;
      e.shape.shapeGroup
        .find(".Title")
        .forEach((i) => i instanceof F.Text && i.text(o));
    }
  }
  setTextSize(s) {
    (this.mapTool.textSize = s),
      this.layerPoi
        .find(".Title")
        .forEach((e) => e instanceof F.Text && e.fontSize(s));
  }
  setOpacityByType(s, e) {
    Du.includes(s) && (this.mapTool.areaOpacity = e),
      s == "Zone" && (this.mapTool.zoneOpacity = e),
      s == "FleetZone" && (this.mapTool.fleetZoneOpacity = e);
    for (const t of this.resourceStore.values())
      t.resourceType == s && t.shape.shape.opacity(e);
  }
  moveToBottomByType(s) {
    var e;
    console.log(">>> [StageService]::down ZIndex", s),
      (e = this.layerPoi.find(`.${s}`)) == null ||
        e.map((t) => {
          t.moveToBottom();
        });
  }
  measureDistance() {
    const s = this.initMeasureDistance(),
      e = [];
    let t = !1,
      o,
      i;
    s.preventDefault(!0),
      s.on("click contextmenu", (a) => {
        if (
          (console.log("[StageService]::measure", a),
          a.evt.preventDefault(),
          a.evt.button == 0)
        ) {
          const u = a.currentTarget.getRelativePointerPosition();
          (t = !0), e.push(u), i && i.fill("black");
          const l = new F.Circle({
              x: u.x,
              y: u.y,
              radius: 2,
              fill: "red",
            }),
            c = new F.Line({
              points: [u.x, u.y, u.x, u.y],
              stroke: "red",
              strokeWidth: 1,
            }),
            d = new F.Text({
              x: u.x,
              y: u.y + 5,
              fill: "blue",
              fontSize: 9,
            });
          this.pathGroup.add(c),
            this.pathGroup.add(d),
            this.pathGroup.add(l),
            (o = c),
            (i = d);
        }
        if (a.evt.button == 2) {
          const r = e.length ? e[e.length - 1] : null;
          (t = !1),
            r && (o == null || o.points([r.x, r.y]), i == null || i.text("")),
            e.splice(0, e.length),
            (i = null),
            (o = null);
        }
      }),
      s.on("mousemove", (a) => {
        if (((this.stage.container().style.cursor = "crosshair"), !t)) return;
        const u = a.currentTarget.getRelativePointerPosition(),
          l = e.length ? e[e.length - 1] : null;
        if (l) {
          const c = this.calcDistancePX2M(l, u);
          o == null || o.points([l.x, l.y, u.x, u.y]),
            i == null || i.x(u.x),
            i == null || i.y(u.y + 10),
            i == null || i.text(`${c.toFixed(2)}m`);
        }
      }),
      s.on("mouseleave", (a) => {
        this.stage.container().style.cursor = "auto";
      });
  }
  closeMeasureDistance() {
    this.removePath(), this.pathGroup.preventDefault(!1);
  }
  initMeasureDistance() {
    const s = {
        x: 0,
        y: 0,
        width: this.mapTool.mapWidth,
        height: this.mapTool.mapHeight,
        stroke: "black",
        strokeWidth: 4,
      },
      e = new F.Rect(s);
    return this.pathGroup.add(e), this.layerUtil.add(this.pathGroup), e;
  }
  initTrackingPath() {
    (this.trackingPathGroup = new F.Group({
      id: "tracking-path",
    })),
      this.layerUtil.add(this.trackingPathGroup);
  }
  closeTrackingPath() {
    var s;
    (s = this.trackingPathGroup) == null || s.destroyChildren();
  }
  removeTrackingPath() {
    this.trackingPathGroup.destroyChildren();
  }
  drawTrackingPath(s, e) {
    s.forEach((t, o) => {
      const i = o == 0 ? "blue" : "red",
        a = o == 0 ? t : s[o - 1],
        r = this.translatePointByType(t, e),
        u = this.translatePointByType(a, e),
        l = new F.Circle({
          ...r,
          radius: 2,
          fill: i,
        }),
        c = new F.Text({
          x: r.x,
          y: r.y + 5,
          fill: "blue",
          fontSize: 9,
          text: `${o}`,
        }),
        d = new F.Line({
          points: [u.x, u.y, r.x, r.y],
          stroke: "red",
          strokeWidth: 1,
        });
      this.trackingPathGroup.add(l),
        this.trackingPathGroup.add(c),
        this.trackingPathGroup.add(d);
    });
  }
  translatePointByType(s, e) {
    let t;
    return e == "m" ? (t = this.mapTool.transformPointM2PX(s)) : (t = s), t;
  }
  drawShortPath(s, e) {
    const t = this.mapTool.transformPoseM2PX(s.pose),
      o = this.mapTool.transformPoseM2PX(e.pose),
      i = new F.Line({
        points: [t.x, t.y, o.x, o.y],
        stroke: "red",
        strokeWidth: 2,
        lineJoin: "round",
        dash: [9, 3],
      });
    this.shortPathGroup.add(i), this.layerUtil.add(this.shortPathGroup);
  }
  removeShortPath() {
    var s;
    (s = this.shortPathGroup) == null || s.destroyChildren();
  }
  async drawPathAni(s, e = "red") {
    const t = s.shift();
    if (s.length == 0) return Promise.resolve();
    const o = s[0];
    if (t) {
      const i = this.mapTool.transformPointM2PX(t),
        a = this.mapTool.transformPointM2PX(o),
        r = this.calcDistance(i, a),
        u = new F.Line({
          points: [0, 0, 0, 0],
          x: i.x,
          y: i.y,
          stroke: e,
          strokeWidth: 3,
          lineJoin: "round",
          opacity: 0.6,
        });
      this.pathGroup.add(u),
        this.layerUtil.add(this.pathGroup),
        new F.Tween({
          node: u,
          points: [0, 0, a.x - i.x, a.y - i.y],
          x: i.x,
          y: i.y,
          duration: r / 350,
          onFinish: () => this.drawPathAni(s, e),
        }).play();
    }
  }
  removePath() {
    var s;
    (s = this.pathGroup) == null || s.destroyChildren();
  }
  calcDistance(s, e) {
    const t = (e.x - s.x) * (e.x - s.x),
      o = (e.y - s.y) * (e.y - s.y);
    return Math.sqrt(t + o);
  }
  calcDistancePX2M(s, e) {
    const t = Math.pow(e.x - s.x, 2),
      o = Math.pow(e.y - s.y, 2);
    return Math.sqrt(t + o) / this.mapTool.M2PX;
  }
  setViewWorkerPathGlobal(s) {
    (this.mapTool.workerConfig.viewWorkerPathGlobal = s),
      this.workerStore.forEach((e) => {
        e && (e.shape.viewWorkerPath = s);
      }),
      this.workerPath$.next(s);
  }
  setViewFmzPathGlobal(s) {
    (this.mapTool.workerConfig.viewFmzPathGlobal = s),
      this.workerStore.forEach((e) => {
        e && (e.shape.viewFmzPath = s);
      });
  }
  setViewWorkerPathLocal(s, e) {
    const t = this.workerStore.get(s);
    t && (t.shape.viewWorkerPath = e);
  }
  setViewFmzPathLocal(s, e) {
    const t = this.workerStore.get(s);
    t && (t.shape.viewFmzPath = e);
  }
}
class bu {
  constructor(s) {
    p(this, "stageService");
    this.stageService = s;
  }
  loadFmzOnStage(s) {
    s.forEach((e) => this.loadFmz(e));
  }
  loadFmz(s) {
    const e = new Do(s, this.stageService.mapTool);
    e.setFmzService(this), this.stageService.resourceStore.set(e.id, e);
    const t = e.shape.draw();
    return t && this.stageService.layerPoi.add(t), t && t.moveToBottom(), e;
  }
  createFmz(s) {
    const e = Do.getDefaultData(this.stageService.baseMap.id, s);
    return (
      (this.stageService.editingResource = new Do(
        e,
        this.stageService.mapTool
      )),
      this.editFmz(),
      this.stageService.editingResource
    );
  }
  cloneFmz(s) {
    return (
      (this.stageService.editingResource = new Do(
        s,
        this.stageService.mapTool
      )),
      this.stageService.editingResource
    );
  }
  editFmz() {
    this.stageService.editResource();
  }
  changeEditMode(s) {
    const e = this.stageService.editingResource.shape;
    (e.editMode = s), e.edit();
  }
  insertResource(s) {
    this.stageService.resourceStore.has(s.id) || this.loadFmz(s);
  }
  updateResource(s) {
    const e = this.stageService.resourceStore.get(s.id);
    e && e.shape.remove(!0), this.loadFmz(s);
  }
  deleteResource(s) {
    const e = s.id,
      t = this.stageService.resourceStore.get(e);
    t && t.shape.remove(!0), t && this.stageService.resourceStore.delete(e);
  }
}
const Cu = {
  position: {
    type: String,
    default: "bottom-right",
    validator: (n) =>
      [
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
        "top",
        "right",
        "bottom",
        "left",
      ].includes(n),
  },
  offset: {
    type: Array,
    validator: (n) => n.length === 2,
  },
  expand: Boolean,
};
function Eu() {
  const {
      props: n,
      proxy: { $q: s },
    } = Kt(),
    e = qe(jn, cs);
  if (e === cs)
    return console.error("QPageSticky needs to be child of QLayout"), cs;
  const t = G(() => {
      const d = n.position;
      return {
        top: d.indexOf("top") > -1,
        right: d.indexOf("right") > -1,
        bottom: d.indexOf("bottom") > -1,
        left: d.indexOf("left") > -1,
        vertical: d === "top" || d === "bottom",
        horizontal: d === "left" || d === "right",
      };
    }),
    o = G(() => e.header.offset),
    i = G(() => e.right.offset),
    a = G(() => e.footer.offset),
    r = G(() => e.left.offset),
    u = G(() => {
      let d = 0,
        f = 0;
      const v = t.value,
        w = s.lang.rtl === !0 ? -1 : 1;
      v.top === !0 && o.value !== 0
        ? (f = `${o.value}px`)
        : v.bottom === !0 && a.value !== 0 && (f = `${-a.value}px`),
        v.left === !0 && r.value !== 0
          ? (d = `${w * r.value}px`)
          : v.right === !0 && i.value !== 0 && (d = `${-w * i.value}px`);
      const E = {
        transform: `translate(${d}, ${f})`,
      };
      return (
        n.offset && (E.margin = `${n.offset[1]}px ${n.offset[0]}px`),
        v.vertical === !0
          ? (r.value !== 0 &&
              (E[s.lang.rtl === !0 ? "right" : "left"] = `${r.value}px`),
            i.value !== 0 &&
              (E[s.lang.rtl === !0 ? "left" : "right"] = `${i.value}px`))
          : v.horizontal === !0 &&
            (o.value !== 0 && (E.top = `${o.value}px`),
            a.value !== 0 && (E.bottom = `${a.value}px`)),
        E
      );
    }),
    l = G(
      () =>
        `q-page-sticky row flex-center fixed-${n.position} q-page-sticky--${
          n.expand === !0 ? "expand" : "shrink"
        }`
    );
  function c(d) {
    const f = es(d.default);
    return pe(
      "div",
      {
        class: l.value,
        style: u.value,
      },
      n.expand === !0 ? f : [pe("div", f)]
    );
  }
  return {
    $layout: e,
    getStickyContent: c,
  };
}
var No = ro({
  name: "QPageSticky",
  props: Cu,
  setup(n, { slots: s }) {
    const { getStickyContent: e } = Eu();
    return () => e(s);
  },
});
const Ot = Te({
  __name: "SiteIcon",
  props: {
    type: {
      default: "resource",
    },
    name: null,
    workerId: null,
  },
  setup(n) {
    const s = n,
      e = qe("stage"),
      t = N(s.name);
    if (s.workerId) {
      const o = e == null ? void 0 : e.workerStore.get(s.workerId);
      o &&
        ((t.value = `worker-${o.statusP}`),
        o.status$.subscribe((i) => {
          t.value = `worker-${i}`;
        }));
    }
    return (o, i) => (
      A(),
      q(
        Fa,
        Fo(o.$attrs, {
          lazy: "eager",
          src: `/monitoring/${n.type}/${t.value}.svg`,
        }),
        null,
        16,
        ["src"]
      )
    );
  },
});
const os = (n) => (Wt("data-v-95e66cba"), (n = n()), Gt(), n),
  Au = os(() =>
    g(
      "span",
      {
        class: "q-ml-sm",
      },
      "Create",
      -1
    )
  ),
  ku = {
    class: "row no-wrap scroll q-col-gutter-x-md",
  },
  Fu = {
    class: "resource-box__btn",
  },
  Pu = {
    class: "resource-box__btn",
  },
  Su = {
    key: 0,
    class: "row no-wrap scroll q-col-gutter-x-md",
  },
  Tu = {
    class: "col-auto",
  },
  $u = os(() =>
    g(
      "div",
      {
        class: "resource-box__btn",
      },
      "FMZ",
      -1
    )
  ),
  Mu = os(() =>
    g(
      "div",
      {
        class: "resource-box__btn",
      },
      "Area",
      -1
    )
  ),
  Bu = os(() =>
    g(
      "div",
      {
        class: "resource-box__btn",
      },
      "Node Edge",
      -1
    )
  ),
  Iu = Te({
    __name: "SiteHeader",
    setup(n) {
      const {
          changeMode: s,
          changeRightDrawerType: e,
          openLegendByCategory: t,
          setEditingResource: o,
          setEditingFmz: i,
          setEmptyResource: a,
        } = Fe(),
        {
          mode: r,
          fmzMode: u,
          drawerRight: l,
          drawerLeft: c,
          rightDrawerType: d,
        } = Ye(Fe()),
        f = qe("stage"),
        v = qe("fmz"),
        w = gt();
      console.log("[SiteHeader]::init", f);
      const E = G(() => (c.value ? 300 : 0)),
        C = N(!1),
        x = () => {
          (r.value == "edit" && !C.value) ||
            ((C.value = !C.value),
            C.value
              ? ((c.value = !1), (l.value = !0), t(0), (r.value = "edit"))
              : (r.value = "detail"));
        },
        b = G(() => C.value || r.value == "edit"),
        m = [
          {
            label: "Autodoor",
            type: "Autodoor",
            icon: "autodoor",
          },
          {
            label: "Autodoor Ext",
            type: "AutodoorExt",
            icon: "autodoor_ext",
          },
          {
            label: "Teleporter gate",
            type: "TeleporterGate",
            icon: "teleporter_gate",
          },
          {
            label: "Slope",
            type: "Slope",
            icon: "slope",
          },
          {
            label: "Working station",
            type: "WorkingStation",
            icon: "working_station",
          },
          {
            label: "Zone",
            icon: "zone",
            children: [
              {
                label: "Prohibit zone",
                type: "Zone",
                subType: "prohibit",
                icon: "zone_prohibit",
              },
              {
                label: "Parameter zone",
                type: "Zone",
                subType: "parameter",
                icon: "zone_parameter",
              },
              {
                label: "Escape zone",
                type: "Zone",
                subType: "escape",
                icon: "zone_escape",
              },
              {
                label: "Preferred zone",
                type: "Zone",
                subType: "preferred",
                icon: "zone_parameter",
              },
              {
                label: "Unpreferred zone",
                type: "Zone",
                subType: "unpreferred",
                icon: "zone_escape",
              },
            ],
          },
          {
            label: "Fleet Zone",
            icon: "fleet_zone",
            children: [
              {
                label: "Restricted zone",
                type: "FleetZone",
                subType: "restricted",
                icon: "fleet_zone_restrict",
              },
              {
                label: "Directional zone",
                type: "FleetZone",
                subType: "directional",
                icon: "fleet_zone_directional",
              },
            ],
          },
          {
            label: "Markers",
            icon: "markers",
            children: [
              {
                label: "Marker (front)",
                type: "Marker",
                icon: "markers_front",
              },
              {
                label: "Robostop (side)",
                type: "Robostop",
                icon: "marker_side",
              },
            ],
          },
          {
            label: "DIM",
            icon: "dims",
            children: [
              {
                label: "DIM1",
                type: "Dim",
                subType: "DIM1",
                icon: "DIM1",
              },
              {
                label: "DIM2",
                type: "Dim",
                subType: "DIM2",
                icon: "DIM2",
              },
            ],
          },
          {
            label: "Location",
            type: "Location",
            icon: "location",
          },
          {
            label: "Waiting queue",
            type: "WaitingQueue",
            icon: "waiting_queue",
          },
        ];
      if ((w.localStorage.getItem("projectCode") || "default") == "default") {
        const T = m.findIndex((ae) => ae.type == "WorkingStation");
        T > -1 && m.splice(T, 1);
      }
      const D = () =>
        w.notify({
          message: "Click the desired location on the map.",
          color: "primary",
          timeout: 0,
          actions: [
            {
              label: "Cancel",
              color: "white",
              handler: X,
            },
          ],
        });
      let k;
      const O = (T) => {
          if ((console.log("@__[SiteHeader]::clickResource", T), T.type)) {
            const ae = T.type == "FMZ" ? "fmz" : "resource";
            e(ae), B(T.type, T.subType), (k = D());
          }
        },
        Q = (T) => {
          console.log("@__[SiteHeader]::FMZ", T),
            (u.value = T),
            v == null || v.changeEditMode(T);
        },
        X = () => {
          f == null || f.closeNewResourceEvent(), a(), k();
        };
      pt(() => {
        (r.value = "detail"), e("legend"), k && k();
      });
      function B(T, ae) {
        s("new"),
          (l.value = !1),
          (C.value = !1),
          f == null ||
            f.ready4NewResource((K) => {
              if (
                (console.log("[StageService]::createResource", T, K, ae),
                T == "FMZ")
              ) {
                const R = v == null ? void 0 : v.createFmz(K);
                i(R, "area", -1);
              } else o(f == null ? void 0 : f.createResource(T, K, ae));
              k();
            });
      }
      return (T, ae) => (
        A(),
        q(
          uo,
          {
            class: "bg-white text-black shadow-3",
            bordered: "",
            style: {
              height: "50px",
            },
            "height-hint": 60,
          },
          {
            default: y(() => [
              h(
                kt,
                {
                  style: {
                    height: "50px",
                  },
                },
                {
                  default: y(() => [
                    h(
                      J,
                      {
                        class: "q-mx-sm q-px-md col-auto",
                        color: "primary",
                        outline: !W(b),
                        unelevated: "",
                        dense: "",
                        "no-caps": "",
                        style: sn({
                          "margin-left": W(E) + "px",
                        }),
                        onClick: x,
                      },
                      {
                        default: y(() => [
                          h(oe, {
                            size: "xs",
                            name: "edit",
                          }),
                          Au,
                        ]),
                        _: 1,
                      },
                      8,
                      ["outline", "style"]
                    ),
                    h(ct, {
                      spaced: "",
                      vertical: "",
                    }),
                    h(ze),
                    Ze(
                      g(
                        "div",
                        ku,
                        [
                          (A(),
                          ge(
                            Be,
                            null,
                            st(m, (K, R) =>
                              g(
                                "div",
                                {
                                  key: R,
                                  class: "col-auto",
                                },
                                [
                                  h(
                                    J,
                                    {
                                      class: "resource-box",
                                      padding: "xs",
                                      stack: "",
                                      unelevated: "",
                                      "no-caps": "",
                                      onClick: (M) => O(K),
                                    },
                                    {
                                      default: y(() => [
                                        h(
                                          Ot,
                                          {
                                            name: K.icon,
                                            width: "30px",
                                            height: "30px",
                                          },
                                          null,
                                          8,
                                          ["name"]
                                        ),
                                        g("div", Fu, V(K.label), 1),
                                        K.children
                                          ? (A(),
                                            q(
                                              nn,
                                              {
                                                key: 0,
                                              },
                                              {
                                                default: y(() => [
                                                  h(
                                                    vt,
                                                    {
                                                      separator: "",
                                                    },
                                                    {
                                                      default: y(() => [
                                                        (A(!0),
                                                        ge(
                                                          Be,
                                                          null,
                                                          st(
                                                            K.children,
                                                            (M, Z) =>
                                                              Ze(
                                                                (A(),
                                                                q(
                                                                  Ve,
                                                                  {
                                                                    key: Z,
                                                                    clickable:
                                                                      "",
                                                                    onClick: (
                                                                      P
                                                                    ) => O(M),
                                                                  },
                                                                  {
                                                                    default: y(
                                                                      () => [
                                                                        h(
                                                                          $e,
                                                                          {
                                                                            class:
                                                                              "column items-center text-center",
                                                                          },
                                                                          {
                                                                            default:
                                                                              y(
                                                                                () => [
                                                                                  h(
                                                                                    Ot,
                                                                                    {
                                                                                      name: M.icon,
                                                                                      width:
                                                                                        "30px",
                                                                                      height:
                                                                                        "24px",
                                                                                    },
                                                                                    null,
                                                                                    8,
                                                                                    [
                                                                                      "name",
                                                                                    ]
                                                                                  ),
                                                                                  g(
                                                                                    "span",
                                                                                    Pu,
                                                                                    V(
                                                                                      M.label
                                                                                    ),
                                                                                    1
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            _: 2,
                                                                          },
                                                                          1024
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 2,
                                                                  },
                                                                  1032,
                                                                  ["onClick"]
                                                                )),
                                                                [[Nt]]
                                                              )
                                                          ),
                                                          128
                                                        )),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1024
                                            ))
                                          : he("", !0),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["onClick"]
                                  ),
                                ]
                              )
                            ),
                            64
                          )),
                        ],
                        512
                      ),
                      [[an, C.value]]
                    ),
                    W(r) == "edit" && W(d) == "fmz"
                      ? (A(),
                        ge("div", Su, [
                          g("div", Tu, [
                            h(
                              J,
                              {
                                class: "resource-box",
                                padding: "xs",
                                stack: "",
                                unelevated: "",
                                "no-caps": "",
                              },
                              {
                                default: y(() => [
                                  h(Ot, {
                                    name: "fmz",
                                    width: "30px",
                                    height: "30px",
                                  }),
                                  $u,
                                ]),
                                _: 1,
                              }
                            ),
                            h(
                              J,
                              {
                                class: "resource-box",
                                padding: "xs",
                                stack: "",
                                unelevated: "",
                                "no-caps": "",
                                onClick: ae[0] || (ae[0] = (K) => Q("area")),
                              },
                              {
                                default: y(() => [
                                  h(Ot, {
                                    name: "fmz_area",
                                    width: "30px",
                                    height: "30px",
                                  }),
                                  Mu,
                                ]),
                                _: 1,
                              }
                            ),
                            h(
                              J,
                              {
                                class: "resource-box",
                                padding: "xs",
                                stack: "",
                                unelevated: "",
                                "no-caps": "",
                                onClick: ae[1] || (ae[1] = (K) => Q("graph")),
                              },
                              {
                                default: y(() => [
                                  h(Ot, {
                                    name: "fmz_node",
                                    width: "30px",
                                    height: "30px",
                                  }),
                                  Bu,
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                        ]))
                      : he("", !0),
                    h(ze),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          }
        )
      );
    },
  });
var Ru = ft(Iu, [["__scopeId", "data-v-95e66cba"]]);
const Lu = {
    class: "q-pa-md",
  },
  Ou = {
    class: "flex q-gutter-sm q-mt-sm",
  },
  Nu = Te({
    __name: "SearchHeader",
    props: {
      filter: null,
      type: null,
    },
    emits: ["update:filter", "update:type"],
    setup(n, { emit: s }) {
      const e = n,
        t = G({
          get: () => e.filter,
          set: (i) => s("update:filter", i),
        }),
        o = G(() =>
          e.type == "type"
            ? "Resource Name Search"
            : "Map & Resource Name Search"
        );
      return (i, a) => (
        A(),
        ge(
          Be,
          null,
          [
            h(
              kt,
              {
                style: {
                  height: "50px",
                },
              },
              {
                default: y(() => [
                  h(
                    $t,
                    {
                      class: "text-h6 q-mr-xl",
                    },
                    {
                      default: y(() => [ue(" Resources ")]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            ),
            h(ct),
            g("div", Lu, [
              h(
                xt,
                {
                  modelValue: W(t),
                  "onUpdate:modelValue":
                    a[1] || (a[1] = (r) => (Jt(t) ? (t.value = r) : null)),
                  "input-class": "q-px-sm",
                  borderless: "",
                  placeholder: W(o),
                  "bg-color": "white",
                  rounded: "",
                  dense: "",
                },
                {
                  append: y(() => [
                    W(t) !== ""
                      ? (A(),
                        q(oe, {
                          key: 0,
                          name: "close",
                          onClick: a[0] || (a[0] = (r) => (t.value = "")),
                          class: "cursor-pointer",
                        }))
                      : he("", !0),
                    h(oe, {
                      name: "search",
                    }),
                  ]),
                  _: 1,
                },
                8,
                ["modelValue", "placeholder"]
              ),
              g("div", Ou, [
                h(ze),
                h(
                  J,
                  {
                    label: "Map",
                    size: "xs",
                    color: "primary",
                    unelevated: "",
                    outline: n.type !== "map",
                    onClick:
                      a[2] || (a[2] = (r) => i.$emit("update:type", "map")),
                  },
                  null,
                  8,
                  ["outline"]
                ),
                h(
                  J,
                  {
                    label: "Type",
                    size: "xs",
                    color: "primary",
                    unelevated: "",
                    outline: n.type !== "type",
                    onClick:
                      a[3] || (a[3] = (r) => i.$emit("update:type", "type")),
                  },
                  null,
                  8,
                  ["outline"]
                ),
              ]),
            ]),
          ],
          64
        )
      );
    },
  }),
  zu = ["none", "strict", "leaf", "leaf-filtered"];
var Dn = ro({
  name: "QTree",
  props: {
    ...Ws,
    nodes: {
      type: Array,
      required: !0,
    },
    nodeKey: {
      type: String,
      required: !0,
    },
    labelKey: {
      type: String,
      default: "label",
    },
    childrenKey: {
      type: String,
      default: "children",
    },
    dense: Boolean,
    color: String,
    controlColor: String,
    textColor: String,
    selectedColor: String,
    icon: String,
    tickStrategy: {
      type: String,
      default: "none",
      validator: (n) => zu.includes(n),
    },
    ticked: Array,
    expanded: Array,
    selected: {},
    noSelectionUnset: Boolean,
    defaultExpandAll: Boolean,
    accordion: Boolean,
    filter: String,
    filterMethod: Function,
    duration: Number,
    noConnectors: Boolean,
    noTransition: Boolean,
    noNodesLabel: String,
    noResultsLabel: String,
  },
  emits: [
    "update:expanded",
    "update:ticked",
    "update:selected",
    "lazyLoad",
    "afterShow",
    "afterHide",
  ],
  setup(n, { slots: s, emit: e }) {
    const { proxy: t } = Kt(),
      { $q: o } = t,
      i = Gs(n, o),
      a = N({}),
      r = N(n.ticked || []),
      u = N(n.expanded || []);
    let l = {};
    Yn(() => {
      l = {};
    });
    const c = G(
        () =>
          `q-tree q-tree--${n.dense === !0 ? "dense" : "standard"}` +
          (n.noConnectors === !0 ? " q-tree--no-connectors" : "") +
          (i.value === !0 ? " q-tree--dark" : "") +
          (n.color !== void 0 ? ` text-${n.color}` : "")
      ),
      d = G(() => n.selected !== void 0),
      f = G(() => n.icon || o.iconSet.tree.icon),
      v = G(() => n.controlColor || n.color),
      w = G(() => (n.textColor !== void 0 ? ` text-${n.textColor}` : "")),
      E = G(() => {
        const $ = n.selectedColor || n.color;
        return $ ? ` text-${$}` : "";
      }),
      C = G(() =>
        n.filterMethod !== void 0
          ? n.filterMethod
          : ($, H) => {
              const L = H.toLowerCase();
              return (
                $[n.labelKey] && $[n.labelKey].toLowerCase().indexOf(L) > -1
              );
            }
      ),
      x = G(() => {
        const $ = {},
          H = (L, re) => {
            const ie =
                L.tickStrategy || (re ? re.tickStrategy : n.tickStrategy),
              Ce = L[n.nodeKey],
              Pe = L[n.childrenKey] && L[n.childrenKey].length !== 0,
              we = L.disabled !== !0 && d.value === !0 && L.selectable !== !1,
              se = L.disabled !== !0 && L.expandable !== !1,
              ne = ie !== "none",
              et = ie === "strict",
              He = ie === "leaf-filtered",
              ut = ie === "leaf" || ie === "leaf-filtered";
            let dt = L.disabled !== !0 && L.tickable !== !1;
            ut === !0 && dt === !0 && re && re.tickable !== !0 && (dt = !1);
            let je = L.lazy;
            je === !0 &&
              a.value[Ce] !== void 0 &&
              Array.isArray(L[n.childrenKey]) === !0 &&
              (je = a.value[Ce]);
            const xe = {
              key: Ce,
              parent: re,
              isParent: Pe,
              lazy: je,
              disabled: L.disabled,
              link:
                L.disabled !== !0 &&
                (we === !0 || (se === !0 && (Pe === !0 || je === !0))),
              children: [],
              matchesFilter: n.filter ? C.value(L, n.filter) : !0,
              selected: Ce === n.selected && we === !0,
              selectable: we,
              expanded: Pe === !0 ? u.value.includes(Ce) : !1,
              expandable: se,
              noTick: L.noTick === !0 || (et !== !0 && je && je !== "loaded"),
              tickable: dt,
              tickStrategy: ie,
              hasTicking: ne,
              strictTicking: et,
              leafFilteredTicking: He,
              leafTicking: ut,
              ticked:
                et === !0
                  ? r.value.includes(Ce)
                  : Pe === !0
                  ? !1
                  : r.value.includes(Ce),
            };
            if (
              (($[Ce] = xe),
              Pe === !0 &&
                ((xe.children = L[n.childrenKey].map((j) => H(j, xe))),
                n.filter &&
                  (xe.matchesFilter !== !0
                    ? (xe.matchesFilter = xe.children.some(
                        (j) => j.matchesFilter
                      ))
                    : xe.noTick !== !0 &&
                      xe.disabled !== !0 &&
                      xe.tickable === !0 &&
                      He === !0 &&
                      xe.children.every(
                        (j) =>
                          j.matchesFilter !== !0 ||
                          j.noTick === !0 ||
                          j.tickable !== !0
                      ) === !0 &&
                      (xe.tickable = !1)),
                xe.matchesFilter === !0 &&
                  (xe.noTick !== !0 &&
                    et !== !0 &&
                    xe.children.every((j) => j.noTick) === !0 &&
                    (xe.noTick = !0),
                  ut)))
            ) {
              if (
                ((xe.ticked = !1),
                (xe.indeterminate = xe.children.some(
                  (j) => j.indeterminate === !0
                )),
                (xe.tickable =
                  xe.tickable === !0 && xe.children.some((j) => j.tickable)),
                xe.indeterminate !== !0)
              ) {
                const j = xe.children.reduce(
                  (ce, me) => (me.ticked === !0 ? ce + 1 : ce),
                  0
                );
                j === xe.children.length
                  ? (xe.ticked = !0)
                  : j > 0 && (xe.indeterminate = !0);
              }
              xe.indeterminate === !0 &&
                (xe.indeterminateNextState = xe.children.every(
                  (j) => j.tickable !== !0 || j.ticked !== !0
                ));
            }
            return xe;
          };
        return n.nodes.forEach((L) => H(L, null)), $;
      });
    Je(
      () => n.ticked,
      ($) => {
        r.value = $;
      }
    ),
      Je(
        () => n.expanded,
        ($) => {
          u.value = $;
        }
      );
    function b($) {
      const H = [].reduce,
        L = (re, ie) => {
          if (re || !ie) return re;
          if (Array.isArray(ie) === !0) return H.call(Object(ie), L, re);
          if (ie[n.nodeKey] === $) return ie;
          if (ie[n.childrenKey]) return L(null, ie[n.childrenKey]);
        };
      return L(null, n.nodes);
    }
    function m() {
      return r.value.map(($) => b($));
    }
    function _() {
      return u.value.map(($) => b($));
    }
    function D($) {
      return $ && x.value[$] ? x.value[$].expanded : !1;
    }
    function k() {
      n.expanded !== void 0 ? e("update:expanded", []) : (u.value = []);
    }
    function O() {
      const $ = [],
        H = (L) => {
          L[n.childrenKey] &&
            L[n.childrenKey].length !== 0 &&
            L.expandable !== !1 &&
            L.disabled !== !0 &&
            ($.push(L[n.nodeKey]), L[n.childrenKey].forEach(H));
        };
      n.nodes.forEach(H),
        n.expanded !== void 0 ? e("update:expanded", $) : (u.value = $);
    }
    function Q($, H, L = b($), re = x.value[$]) {
      if (re.lazy && re.lazy !== "loaded") {
        if (re.lazy === "loading") return;
        (a.value[$] = "loading"),
          Array.isArray(L[n.childrenKey]) !== !0 && (L[n.childrenKey] = []),
          e("lazyLoad", {
            node: L,
            key: $,
            done: (ie) => {
              (a.value[$] = "loaded"),
                (L[n.childrenKey] = Array.isArray(ie) === !0 ? ie : []),
                Hn(() => {
                  const Ce = x.value[$];
                  Ce && Ce.isParent === !0 && X($, !0);
                });
            },
            fail: () => {
              delete a.value[$],
                L[n.childrenKey].length === 0 && delete L[n.childrenKey];
            },
          });
      } else re.isParent === !0 && re.expandable === !0 && X($, H);
    }
    function X($, H) {
      let L = u.value;
      const re = n.expanded !== void 0;
      if ((re === !0 && (L = L.slice()), H)) {
        if (n.accordion && x.value[$]) {
          const ie = [];
          x.value[$].parent
            ? x.value[$].parent.children.forEach((Ce) => {
                Ce.key !== $ && Ce.expandable === !0 && ie.push(Ce.key);
              })
            : n.nodes.forEach((Ce) => {
                const Pe = Ce[n.nodeKey];
                Pe !== $ && ie.push(Pe);
              }),
            ie.length !== 0 && (L = L.filter((Ce) => ie.includes(Ce) === !1));
        }
        L = L.concat([$]).filter((ie, Ce, Pe) => Pe.indexOf(ie) === Ce);
      } else L = L.filter((ie) => ie !== $);
      re === !0 ? e("update:expanded", L) : (u.value = L);
    }
    function B($) {
      return $ && x.value[$] ? x.value[$].ticked : !1;
    }
    function T($, H) {
      let L = r.value;
      const re = n.ticked !== void 0;
      re === !0 && (L = L.slice()),
        H
          ? (L = L.concat($).filter((ie, Ce, Pe) => Pe.indexOf(ie) === Ce))
          : (L = L.filter((ie) => $.includes(ie) === !1)),
        re === !0 && e("update:ticked", L);
    }
    function ae($, H, L) {
      const re = {
        tree: t,
        node: $,
        key: L,
        color: n.color,
        dark: i.value,
      };
      return (
        si(
          re,
          "expanded",
          () => H.expanded,
          (ie) => {
            ie !== H.expanded && Q(L, ie);
          }
        ),
        si(
          re,
          "ticked",
          () => H.ticked,
          (ie) => {
            ie !== H.ticked && T([L], ie);
          }
        ),
        re
      );
    }
    function K($) {
      return (
        n.filter ? $.filter((H) => x.value[H[n.nodeKey]].matchesFilter) : $
      ).map((H) => P(H));
    }
    function R($) {
      if ($.icon !== void 0)
        return pe(oe, {
          class: "q-tree__icon q-mr-sm",
          name: $.icon,
          color: $.iconColor,
        });
      const H = $.img || $.avatar;
      if (H)
        return pe("img", {
          class: `q-tree__${$.img ? "img" : "avatar"} q-mr-sm`,
          src: H,
        });
    }
    function M() {
      e("afterShow");
    }
    function Z() {
      e("afterHide");
    }
    function P($) {
      const H = $[n.nodeKey],
        L = x.value[H],
        re = ($.header && s[`header-${$.header}`]) || s["default-header"],
        ie = L.isParent === !0 ? K($[n.childrenKey]) : [],
        Ce = ie.length !== 0 || (L.lazy && L.lazy !== "loaded");
      let Pe = ($.body && s[`body-${$.body}`]) || s["default-body"];
      const we = re !== void 0 || Pe !== void 0 ? ae($, L, H) : null;
      return (
        Pe !== void 0 &&
          (Pe = pe(
            "div",
            {
              class: "q-tree__node-body relative-position",
            },
            [
              pe(
                "div",
                {
                  class: w.value,
                },
                [Pe(we)]
              ),
            ]
          )),
        pe(
          "div",
          {
            key: H,
            class: `q-tree__node relative-position q-tree__node--${
              Ce === !0 ? "parent" : "child"
            }`,
          },
          [
            pe(
              "div",
              {
                class:
                  "q-tree__node-header relative-position row no-wrap items-center" +
                  (L.link === !0
                    ? " q-tree__node--link q-hoverable q-focusable"
                    : "") +
                  (L.selected === !0 ? " q-tree__node--selected" : "") +
                  (L.disabled === !0 ? " q-tree__node--disabled" : ""),
                tabindex: L.link === !0 ? 0 : -1,
                onClick: (se) => {
                  te($, L, se);
                },
                onKeypress(se) {
                  Kn(se) !== !0 &&
                    (se.keyCode === 13
                      ? te($, L, se, !0)
                      : se.keyCode === 32 && le($, L, se, !0));
                },
              },
              [
                pe("div", {
                  class: "q-focus-helper",
                  tabindex: -1,
                  ref: (se) => {
                    l[L.key] = se;
                  },
                }),
                L.lazy === "loading"
                  ? pe(Jn, {
                      class: "q-tree__spinner",
                      color: v.value,
                    })
                  : Ce === !0
                  ? pe(oe, {
                      class:
                        "q-tree__arrow" +
                        (L.expanded === !0 ? " q-tree__arrow--rotate" : ""),
                      name: f.value,
                      onClick(se) {
                        le($, L, se);
                      },
                    })
                  : null,
                L.hasTicking === !0 && L.noTick !== !0
                  ? pe(Cs, {
                      class: "q-tree__tickbox",
                      modelValue: L.indeterminate === !0 ? null : L.ticked,
                      color: v.value,
                      dark: i.value,
                      dense: !0,
                      keepColor: !0,
                      disable: L.tickable !== !0,
                      onKeydown: Es,
                      "onUpdate:modelValue": (se) => {
                        ee(L, se);
                      },
                    })
                  : null,
                pe(
                  "div",
                  {
                    class:
                      "q-tree__node-header-content col row no-wrap items-center" +
                      (L.selected === !0 ? E.value : w.value),
                  },
                  [re ? re(we) : [R($), pe("div", $[n.labelKey])]]
                ),
              ]
            ),
            Ce === !0
              ? n.noTransition === !0
                ? pe(
                    "div",
                    {
                      class: "q-tree__node-collapsible" + w.value,
                      key: `${H}__q`,
                    },
                    [
                      Pe,
                      pe(
                        "div",
                        {
                          class:
                            "q-tree__children" +
                            (L.disabled === !0
                              ? " q-tree__node--disabled"
                              : ""),
                        },
                        L.expanded ? ie : null
                      ),
                    ]
                  )
                : pe(
                    ea,
                    {
                      duration: n.duration,
                      onShow: M,
                      onHide: Z,
                    },
                    () =>
                      Ze(
                        pe(
                          "div",
                          {
                            class: "q-tree__node-collapsible" + w.value,
                            key: `${H}__q`,
                          },
                          [
                            Pe,
                            pe(
                              "div",
                              {
                                class:
                                  "q-tree__children" +
                                  (L.disabled === !0
                                    ? " q-tree__node--disabled"
                                    : ""),
                              },
                              ie
                            ),
                          ]
                        ),
                        [[an, L.expanded]]
                      )
                  )
              : Pe,
          ]
        )
      );
    }
    function S($) {
      const H = l[$];
      H && H.focus();
    }
    function te($, H, L, re) {
      re !== !0 && H.selectable !== !1 && S(H.key),
        d.value && H.selectable
          ? n.noSelectionUnset === !1
            ? e("update:selected", H.key !== n.selected ? H.key : null)
            : H.key !== n.selected &&
              e("update:selected", H.key === void 0 ? null : H.key)
          : le($, H, L, re),
        typeof $.handler == "function" && $.handler($);
    }
    function le($, H, L, re) {
      L !== void 0 && Es(L),
        re !== !0 && H.selectable !== !1 && S(H.key),
        Q(H.key, !H.expanded, $, H);
    }
    function ee($, H) {
      if (
        ($.indeterminate === !0 && (H = $.indeterminateNextState),
        $.strictTicking)
      )
        T([$.key], H);
      else if ($.leafTicking) {
        const L = [],
          re = (ie) => {
            ie.isParent
              ? (H !== !0 &&
                  ie.noTick !== !0 &&
                  ie.tickable === !0 &&
                  L.push(ie.key),
                ie.leafTicking === !0 && ie.children.forEach(re))
              : ie.noTick !== !0 &&
                ie.tickable === !0 &&
                (ie.leafFilteredTicking !== !0 || ie.matchesFilter === !0) &&
                L.push(ie.key);
          };
        re($), T(L, H);
      }
    }
    return (
      n.defaultExpandAll === !0 && O(),
      Object.assign(t, {
        getNodeByKey: b,
        getTickedNodes: m,
        getExpandedNodes: _,
        isExpanded: D,
        collapseAll: k,
        expandAll: O,
        setExpanded: Q,
        isTicked: B,
        setTicked: T,
      }),
      () => {
        const $ = K(n.nodes);
        return pe(
          "div",
          {
            class: c.value,
          },
          $.length === 0
            ? n.filter
              ? n.noResultsLabel || o.lang.tree.noResults
              : n.noNodesLabel || o.lang.tree.noNodes
            : $
        );
      }
    );
  },
});
const Wu = Te({
    __name: "SearchMapTree",
    props: {
      items: null,
      filter: null,
      selectedMap: null,
      selectedItemHandler: null,
    },
    setup(n) {
      const s = n,
        e = N(),
        t = N(null),
        o = (i) => {
          const a = e.value,
            r = a == null ? void 0 : a.getNodeByKey(i);
          r.children
            ? (a == null || a.setExpanded(i, !(a != null && a.isExpanded(i))),
              (t.value = null))
            : s.selectedItemHandler(r),
            console.log("@@@___[ResourceTree]::mapTree::selected", i, r);
        };
      return (
        Mt(() => {
          console.log("[MapTree]::mounted -------------");
        }),
        pt(() => {
          console.log("[MapTree]::unmount -------------");
        }),
        Je(
          () => s.selectedMap,
          (i) => {
            var a, r;
            (a = e.value) == null || a.collapseAll(),
              (r = e.value) == null || r.setExpanded(i, !0);
          }
        ),
        Je(
          () => s.filter,
          (i) => {
            var a, r;
            i.length
              ? (a = e.value) == null || a.expandAll()
              : (r = e.value) == null || r.collapseAll();
          }
        ),
        (i, a) => (
          A(),
          q(
            W(Dn),
            {
              ref_key: "mapTree",
              ref: e,
              nodes: n.items,
              "node-key": "id",
              filter: n.filter,
              "no-selection-unset": "",
              "selected-color": "primary",
              selected: t.value,
              "onUpdate:selected": [a[0] || (a[0] = (r) => (t.value = r)), o],
            },
            null,
            8,
            ["nodes", "filter", "selected"]
          )
        )
      );
    },
  }),
  Gu = {
    class: "row items-center",
  },
  Vu = {
    key: 0,
  },
  qu = Te({
    __name: "SearchTypeTree",
    props: {
      items: null,
      filter: null,
      selectedItemHandler: null,
      itemShapeHandler: null,
    },
    setup(n) {
      const s = n,
        e = qe("stage"),
        t = N(),
        o = N(null),
        i = (l) => {
          const c = t.value,
            d = c == null ? void 0 : c.getNodeByKey(l);
          d.children
            ? (c == null || c.setExpanded(l, !(c != null && c.isExpanded(l))),
              (o.value = null))
            : s.selectedItemHandler(d),
            console.log("@@@___[ResourceTree]::mapTree::selected", l, d);
        },
        a = (l) => {
          (l.lock = !l.lock), s.itemShapeHandler(l, "lock", !l.lock);
        },
        r = (l) => {
          (l.display = !l.display),
            s.itemShapeHandler(l, "display", !l.display);
        },
        u =
          e == null
            ? void 0
            : e.loadedMap$.subscribe((l) => {
                var c;
                console.log("[ResourceTree-Type]::subscribe", l),
                  (c = t.value) == null || c.setExpanded("Worker", !0);
              });
      return (
        Mt(() => {
          console.log("[TypeTree]::mounted -------------");
        }),
        pt(() => {
          console.log("[TypeTree]::beforeUnmounted -------------"),
            u && u.unsubscribe();
        }),
        Je(
          () => s.filter,
          (l) => {
            var c, d;
            l.length
              ? (c = t.value) == null || c.expandAll()
              : (d = t.value) == null || d.collapseAll();
          }
        ),
        (l, c) => (
          A(),
          q(
            W(Dn),
            {
              ref_key: "typeTree",
              ref: t,
              nodes: n.items,
              "node-key": "id",
              filter: n.filter,
              "no-connectors": "",
              "no-selection-unset": "",
              "selected-color": "primary",
              selected: o.value,
              "onUpdate:selected": [c[0] || (c[0] = (d) => (o.value = d)), i],
            },
            {
              "default-header": y((d) => [
                g("div", Gu, [
                  d.node.type !== "Worker"
                    ? (A(),
                      q(
                        oe,
                        {
                          key: 0,
                          name: d.node.icon,
                          color: "orange",
                          size: "22px",
                          class: "q-mr-sm",
                        },
                        null,
                        8,
                        ["name"]
                      ))
                    : he("", !0),
                  d.node.type == "Worker"
                    ? (A(),
                      q(
                        Ot,
                        {
                          key: 1,
                          type: "worker",
                          "worker-id": d.node.id,
                          width: "22px",
                          class: "q-mr-sm",
                        },
                        null,
                        8,
                        ["worker-id"]
                      ))
                    : he("", !0),
                  g("div", null, V(d.node.label), 1),
                ]),
                h(ze),
                d.node.children
                  ? (A(),
                    ge("div", Vu, [
                      h(
                        J,
                        {
                          round: "",
                          dense: "",
                          flat: "",
                          size: "xs",
                          color: "grey-7",
                          onClick: no((f) => a(d.node), ["stop"]),
                        },
                        {
                          default: y(() => [
                            h(
                              oe,
                              {
                                size: "12px",
                                name: d.node.lock ? "lock" : "lock_open",
                              },
                              null,
                              8,
                              ["name"]
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["onClick"]
                      ),
                      h(
                        J,
                        {
                          round: "",
                          dense: "",
                          flat: "",
                          size: "xs",
                          color: "grey-7",
                          onClick: no((f) => r(d.node), ["stop"]),
                        },
                        {
                          default: y(() => [
                            h(
                              oe,
                              {
                                size: "12px",
                                name: d.node.display
                                  ? "visibility_off"
                                  : "visibility",
                              },
                              null,
                              8,
                              ["name"]
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["onClick"]
                      ),
                    ]))
                  : he("", !0),
              ]),
              _: 1,
            },
            8,
            ["nodes", "filter", "selected"]
          )
        )
      );
    },
  });
const Xu = {
    key: 0,
    class: "q-mx-md",
  },
  Qu = {
    key: 1,
    class: "q-mx-md",
  },
  Zu = Te({
    __name: "SiteLeftDrawer",
    setup(n) {
      const { drawerLeft: s, mode: e, maps: t, selectedMap: o } = Ye(Fe()),
        a = gt().localStorage.getItem("projectCode") || "default",
        r = N(""),
        u = N("type"),
        l = N([]),
        c = N([]),
        d = N(),
        { setViewingResource: f, setViewingFmz: v } = Fe(),
        w = qe("stage"),
        E = qe("resourceManager");
      w == null ||
        w.loadedMap$.subscribe(() => {
          c.value = b();
        }),
        E == null ||
          E.changedOnMap$.subscribe(() => {
            c.value = b();
          }),
        Je(u, (k) => {
          k === "map"
            ? (m(), (d.value = setInterval(m, 3e3)))
            : clearInterval(d.value);
        }),
        pt(() => {
          clearInterval(d.value);
        });
      function C(k) {
        if (e.value == "edit") return;
        const O = k.id,
          Q = k.mapId,
          X = () => {
            const B = w == null ? void 0 : w.resourceStore.get(O);
            if (B)
              B.resourceType == "FMZ" ? v(B, "area", -1) : f(B),
                w == null || w.moveStage2ShapeByResource(B),
                B.shape.pulse();
            else {
              const T = w == null ? void 0 : w.workerStore.get(O);
              T && f(T),
                T && T.shape.pulse(),
                T && (w == null || w.moveStage2ShapeByResource(T));
            }
          };
        o.value == Q
          ? X()
          : ((o.value = Q),
            w == null ||
              w.loadedMap$.subscribe((B) => {
                B == Q && X();
              }));
      }
      function x(k, O, Q) {
        console.log("[ResourceTree]::Type", k, O, Q);
        const X = k.label;
        O == "display" && (w == null || w.toggleResourceDisplayByType(X, Q)),
          O == "lock" && (w == null || w.toggleResourceSelectionByType(X, Q));
      }
      function b() {
        const k = E == null ? void 0 : E.resourcesOnMap,
          O = [];
        Object.keys(k).forEach((T) => {
          const ae = k[T],
            K = [];
          ae.forEach((M) => {
            const Z = {
              label: M.name,
              id: M.id,
              mapId: M.map,
              icon: _(M),
              type: M.resource_type,
              subType: "type" in M ? M.type : void 0,
            };
            K.push(Z);
          });
          const R = {
            label: T,
            id: T,
            type: T,
            children: K,
          };
          K.length && O.push(R);
        });
        const Q = E == null ? void 0 : E.getWorkers(),
          X = [];
        Q.forEach((T) => {
          const ae = {
            label: T.name,
            id: T.id,
            mapId: T.map,
            icon: ni[T.resource_type],
            type: "Worker",
          };
          X.push(ae);
        });
        const B = {
          label: "Worker",
          id: "Worker",
          type: "Worker",
          children: X,
        };
        return X.length && O.unshift(B), O;
      }
      async function m() {
        const { data: k } = await fn(),
          O = await $a().catch(
            (K) => (console.error("[ResourceTree]::getFmz", K), [])
          ),
          Q = await gn();
        O.length && (k.FMZ = O),
          a == "default" && delete k.WorkingStation,
          Q.forEach((K, R) => {
            try {
              (K.map = K.type_specific.location.map),
                (K.resource_type = "Worker");
            } catch (M) {
              console.error("[ResourcePanel]::initResourceTree::Worker", R, M),
                delete Q[R];
            }
          });
        const X = Object.values(k),
          B = [];
        X.forEach((K) => B.push(...K)), B.push(...Q);
        const T = fe.groupBy(B, "map"),
          ae = [];
        t.value.forEach((K) => {
          const R = T[K.id];
          if (!R) return;
          const M = [];
          R.forEach((P) => {
            if (!P.map) return;
            let S = "";
            P.resource_type == "Worker" ? (S = D(P)) : (S = _(P));
            const te = {
              label: P.name,
              id: P.id,
              mapId: P.map,
              icon: S,
              type: P.resource_type,
              subType: "type" in P ? P.type : void 0,
            };
            M.push(te);
          });
          const Z = {
            label: K.name,
            id: K.id,
            mapId: K.id,
            icon: "map",
            children: M,
          };
          ae.push(Z);
        }),
          (l.value = ae);
      }
      function _(k) {
        let O = k.resource_type;
        "type" in k && (O += `_${k.type}`);
        const Q = ni[O];
        return Q ? `img:/monitoring/resource/${Q}.svg` : "question_mark";
      }
      function D(k) {
        return `img:/monitoring/worker/${k.status_p}.svg`;
      }
      return (k, O) => (
        A(),
        q(
          rn,
          {
            modelValue: W(s),
            "onUpdate:modelValue":
              O[2] || (O[2] = (Q) => (Jt(s) ? (s.value = Q) : null)),
            class: "bg-grey-2",
            overlay: "",
            width: 300,
            breakpoint: 300,
          },
          {
            default: y(() => [
              h(
                Nu,
                {
                  filter: r.value,
                  "onUpdate:filter": O[0] || (O[0] = (Q) => (r.value = Q)),
                  type: u.value,
                  "onUpdate:type": O[1] || (O[1] = (Q) => (u.value = Q)),
                },
                null,
                8,
                ["filter", "type"]
              ),
              h(
                Pa,
                {
                  class: "tree-area",
                },
                {
                  default: y(() => [
                    u.value === "map"
                      ? (A(),
                        ge("div", Xu, [
                          h(
                            Wu,
                            {
                              items: l.value,
                              filter: r.value,
                              "selected-map": W(o),
                              "selected-item-handler": C,
                            },
                            null,
                            8,
                            ["items", "filter", "selected-map"]
                          ),
                        ]))
                      : (A(),
                        ge("div", Qu, [
                          h(
                            qu,
                            {
                              items: c.value,
                              filter: r.value,
                              "selected-item-handler": C,
                              "item-shape-handler": x,
                            },
                            null,
                            8,
                            ["items", "filter"]
                          ),
                        ])),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          },
          8,
          ["modelValue"]
        )
      );
    },
  });
var Uu = ft(Zu, [["__scopeId", "data-v-7cd0b22d"]]);
const ju = Te({
  __name: "LegendRoot",
  props: {
    items: null,
  },
  emits: ["click"],
  setup(n, { emit: s }) {
    const e = (t) => {
      s("click", t);
    };
    return (t, o) => (
      A(),
      q(vt, null, {
        default: y(() => [
          (A(!0),
          ge(
            Be,
            null,
            st(n.items, (i, a) =>
              Ze(
                (A(),
                q(
                  Ve,
                  {
                    key: a,
                    clickable: "",
                    onClick: (r) => e(i),
                  },
                  {
                    default: y(() => [
                      h(
                        $e,
                        {
                          side: "",
                        },
                        {
                          default: y(() => [
                            h(
                              oe,
                              {
                                name: i.icon,
                              },
                              null,
                              8,
                              ["name"]
                            ),
                          ]),
                          _: 2,
                        },
                        1024
                      ),
                      h(
                        $e,
                        null,
                        {
                          default: y(() => [ue(V(i.label), 1)]),
                          _: 2,
                        },
                        1024
                      ),
                    ]),
                    _: 2,
                  },
                  1032,
                  ["onClick"]
                )),
                [[Zt]]
              )
            ),
            128
          )),
        ]),
        _: 1,
      })
    );
  },
});
const Yu = {
    class: "row no-wrap items-center",
  },
  Hu = {
    class: "col-auto",
  },
  Ku = {
    class: "col item__description text-grey-8",
  },
  Ju = Te({
    __name: "LegendItemList",
    props: {
      type: null,
      items: null,
    },
    emits: ["click"],
    setup(n, { emit: s }) {
      const e = (t) => {
        s("click", t);
      };
      return (t, o) => (
        A(),
        q(vt, null, {
          default: y(() => [
            (A(!0),
            ge(
              Be,
              null,
              st(
                n.items,
                (i, a) => (
                  A(),
                  ge(
                    Be,
                    {
                      key: a,
                    },
                    [
                      i.type === "header"
                        ? (A(),
                          q(
                            St,
                            {
                              key: 0,
                              class:
                                "q-pb-xs text-subtitle1 text-black text-weight-medium",
                              header: "",
                            },
                            {
                              default: y(() => [ue(V(i.label), 1)]),
                              _: 2,
                            },
                            1024
                          ))
                        : (A(),
                          q(
                            Ve,
                            {
                              key: 1,
                              class: "column q-pt-xs",
                              clickable: "",
                              onClick: (r) => e(i),
                            },
                            {
                              default: y(() => [
                                h(
                                  $e,
                                  {
                                    class:
                                      "text-medium item__label text-grey-10",
                                  },
                                  {
                                    default: y(() => [ue(V(i.label), 1)]),
                                    _: 2,
                                  },
                                  1024
                                ),
                                g("div", Yu, [
                                  g("div", Hu, [
                                    n.type === "resource"
                                      ? (A(),
                                        q(
                                          Ot,
                                          {
                                            key: 0,
                                            type: "resource",
                                            name: i.icon,
                                            width: "32px",
                                          },
                                          null,
                                          8,
                                          ["name"]
                                        ))
                                      : (A(),
                                        q(
                                          Ot,
                                          {
                                            key: 1,
                                            type: "worker",
                                            name: i.icon,
                                            width: "16px",
                                          },
                                          null,
                                          8,
                                          ["name"]
                                        )),
                                  ]),
                                  h(ct, {
                                    class: "q-mx-md q-my-sm",
                                    vertical: "",
                                  }),
                                  g("div", Ku, V(i.description), 1),
                                ]),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["onClick"]
                          )),
                    ],
                    64
                  )
                )
              ),
              128
            )),
          ]),
          _: 1,
        })
      );
    },
  });
var el = ft(Ju, [["__scopeId", "data-v-ea87a34c"]]);
const tl = g(
    "span",
    {
      class: "col-auto",
    },
    " Legend ",
    -1
  ),
  ol = {
    class: "col-auto",
  },
  sl = Te({
    __name: "LegendCard",
    setup(n) {
      const { closeDrawerRight: s } = Fe(),
        { legendIndex: e } = Ye(Fe()),
        t = N(null),
        o = N(),
        i = N(),
        a = (u) => {
          (t.value = u), (o.value = u.children), (i.value = u.type);
        },
        r = () => {
          t.value ? ((t.value = null), (o.value = []), (e.value = -1)) : s();
        };
      return (
        ta(() => {
          if (e.value > -1) {
            const u = ai[e.value];
            a(u);
          }
        }),
        (u, l) => (
          A(),
          q(
            ho,
            {
              container: "",
              view: "lHh Lpr fFf",
            },
            {
              default: y(() => [
                h(
                  uo,
                  {
                    class: "bg-grey-2 text-black",
                  },
                  {
                    default: y(() => [
                      h(kt, null, {
                        default: y(() => [
                          h(
                            $t,
                            {
                              class:
                                "text-subtitle1 text-weight-bold row items-center no-wrap",
                            },
                            {
                              default: y(() => [
                                tl,
                                t.value
                                  ? (A(),
                                    ge(
                                      Be,
                                      {
                                        key: 0,
                                      },
                                      [
                                        h(oe, {
                                          name: "chevron_right",
                                        }),
                                        g("span", ol, V(t.value.label), 1),
                                      ],
                                      64
                                    ))
                                  : he("", !0),
                              ]),
                              _: 1,
                            }
                          ),
                          h(J, {
                            round: "",
                            icon: "close",
                            dense: "",
                            flat: "",
                            onClick: r,
                          }),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
                h(lo, null, {
                  default: y(() => [
                    h(co, null, {
                      default: y(() => [
                        t.value
                          ? (A(),
                            q(
                              el,
                              {
                                key: 1,
                                type: i.value,
                                items: o.value,
                              },
                              null,
                              8,
                              ["type", "items"]
                            ))
                          : (A(),
                            q(
                              ju,
                              {
                                key: 0,
                                items: W(ai),
                                onClick: a,
                              },
                              null,
                              8,
                              ["items"]
                            )),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          )
        )
      );
    },
  }),
  il = Object.keys(un),
  nl = (n) =>
    il.reduce((s, e) => {
      const t = n[e];
      return t !== void 0 && (s[e] = t), s;
    }, {});
var wn = ro({
  name: "QBtnDropdown",
  props: {
    ...un,
    ...oa,
    modelValue: Boolean,
    split: Boolean,
    dropdownIcon: String,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    cover: Boolean,
    persistent: Boolean,
    noRouteDismiss: Boolean,
    autoClose: Boolean,
    menuAnchor: {
      type: String,
      default: "bottom end",
    },
    menuSelf: {
      type: String,
      default: "top end",
    },
    menuOffset: Array,
    disableMainBtn: Boolean,
    disableDropdown: Boolean,
    noIconAnimation: Boolean,
    toggleAriaLabel: String,
  },
  emits: [
    "update:modelValue",
    "click",
    "beforeShow",
    "show",
    "beforeHide",
    "hide",
  ],
  setup(n, { slots: s, emit: e }) {
    const { proxy: t } = Kt(),
      o = N(n.modelValue),
      i = N(null),
      a = ln(),
      r = G(() => {
        const _ = {
          "aria-expanded": o.value === !0 ? "true" : "false",
          "aria-haspopup": "true",
          "aria-controls": a,
          "aria-label":
            n.toggleAriaLabel ||
            t.$q.lang.label[o.value === !0 ? "collapse" : "expand"](n.label),
        };
        return (
          (n.disable === !0 ||
            (n.split === !1 && n.disableMainBtn === !0) ||
            n.disableDropdown === !0) &&
            (_["aria-disabled"] = "true"),
          _
        );
      }),
      u = G(
        () =>
          "q-btn-dropdown__arrow" +
          (o.value === !0 && n.noIconAnimation === !1 ? " rotate-180" : "") +
          (n.split === !1 ? " q-btn-dropdown__arrow-container" : "")
      ),
      l = G(() => sa(n)),
      c = G(() => nl(n));
    Je(
      () => n.modelValue,
      (_) => {
        i.value !== null && i.value[_ ? "show" : "hide"]();
      }
    ),
      Je(() => n.split, m);
    function d(_) {
      (o.value = !0), e("beforeShow", _);
    }
    function f(_) {
      e("show", _), e("update:modelValue", !0);
    }
    function v(_) {
      (o.value = !1), e("beforeHide", _);
    }
    function w(_) {
      e("hide", _), e("update:modelValue", !1);
    }
    function E(_) {
      e("click", _);
    }
    function C(_) {
      ia(_), m(), e("click", _);
    }
    function x(_) {
      i.value !== null && i.value.toggle(_);
    }
    function b(_) {
      i.value !== null && i.value.show(_);
    }
    function m(_) {
      i.value !== null && i.value.hide(_);
    }
    return (
      Object.assign(t, {
        show: b,
        hide: m,
        toggle: x,
      }),
      Mt(() => {
        n.modelValue === !0 && b();
      }),
      () => {
        const _ = [
          pe(oe, {
            class: u.value,
            name: n.dropdownIcon || t.$q.iconSet.arrow.dropdown,
          }),
        ];
        return (
          n.disableDropdown !== !0 &&
            _.push(
              pe(
                nn,
                {
                  ref: i,
                  id: a,
                  class: n.contentClass,
                  style: n.contentStyle,
                  cover: n.cover,
                  fit: !0,
                  persistent: n.persistent,
                  noRouteDismiss: n.noRouteDismiss,
                  autoClose: n.autoClose,
                  anchor: n.menuAnchor,
                  self: n.menuSelf,
                  offset: n.menuOffset,
                  separateClosePopup: !0,
                  transitionShow: n.transitionShow,
                  transitionHide: n.transitionHide,
                  transitionDuration: n.transitionDuration,
                  onBeforeShow: d,
                  onShow: f,
                  onBeforeHide: v,
                  onHide: w,
                },
                s.default
              )
            ),
          n.split === !1
            ? pe(
                J,
                {
                  class: "q-btn-dropdown q-btn-dropdown--simple",
                  ...c.value,
                  ...r.value,
                  disable: n.disable === !0 || n.disableMainBtn === !0,
                  noWrap: !0,
                  round: !1,
                  onClick: E,
                },
                {
                  default: () => es(s.label, []).concat(_),
                  loading: s.loading,
                }
              )
            : pe(
                pn,
                {
                  class:
                    "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
                  rounded: n.rounded,
                  square: n.square,
                  ...l.value,
                  glossy: n.glossy,
                  stretch: n.stretch,
                },
                () => [
                  pe(
                    J,
                    {
                      class: "q-btn-dropdown--current",
                      ...c.value,
                      disable: n.disable === !0 || n.disableMainBtn === !0,
                      noWrap: !0,
                      round: !1,
                      onClick: C,
                    },
                    {
                      default: s.label,
                      loading: s.loading,
                    }
                  ),
                  pe(
                    J,
                    {
                      class: "q-btn-dropdown__arrow-container q-anchor--skip",
                      ...r.value,
                      ...l.value,
                      disable: n.disable === !0 || n.disableDropdown === !0,
                      rounded: n.rounded,
                      color: n.color,
                      textColor: n.textColor,
                      dense: n.dense,
                      size: n.size,
                      padding: n.padding,
                      ripple: n.ripple,
                    },
                    () => _
                  ),
                ]
              )
        );
      }
    );
  },
});
const al = Te({
  __name: "ResourceCard",
  setup(n) {
    const { mode: s, selectedResource: e, selectedWorkers: t } = Ye(Fe()),
      {
        changeMode: o,
        setEmptyResource: i,
        setEditingResource: a,
        setViewingResource: r,
        closeDrawerRight: u,
      } = Fe(),
      l = qe("stage"),
      c = e,
      d = gt(),
      f = G(() => {
        var P;
        const M = (P = c.value) == null ? void 0 : P.resourceType;
        let Z;
        if ("type" in c.value) {
          const S = c.value.type;
          S && (Z = S.charAt(0).toUpperCase() + S.slice(1));
        }
        return Z ? `${M} - ${Z}` : M;
      }),
      v = G(() => {
        var M;
        return (M = e.value) == null ? void 0 : M.resourceType;
      }),
      w = {
        Location: it(() =>
          nt(
            () => import("./LocationCard.cff74528.js"),
            [
              "assets/LocationCard.cff74528.js",
              "assets/LocationCard.19465fb6.css",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QForm.9f5e5771.js",
              "assets/QPopupEdit.57baf24d.js",
              "assets/monitoring-service.42782783.js",
              "assets/PoseFormPopup.8fa60abf.js",
              "assets/PoseFormPopup.865c1916.css",
              "assets/QTooltip.3146d6fb.js",
              "assets/QMarkupTable.00b7e193.js",
              "assets/monitoring.842318a3.js",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/use-quasar.89a257f3.js",
              "assets/QImg.333aa49c.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/constants.d7cfa744.js",
              "assets/QChip.4a445f8a.js",
              "assets/QSelect.30c8e1e2.js",
              "assets/rtl.b51694b1.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
              "assets/schedule-service.c936318a.js",
            ]
          )
        ),
        Marker: it(() =>
          nt(
            () => import("./ParkFrontCard.fbb4b669.js"),
            [
              "assets/ParkFrontCard.fbb4b669.js",
              "assets/ParkFrontCard.e3da576d.css",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QMarkupTable.00b7e193.js",
              "assets/QSelect.30c8e1e2.js",
              "assets/QChip.4a445f8a.js",
              "assets/rtl.b51694b1.js",
              "assets/QPopupEdit.57baf24d.js",
              "assets/monitoring-service.42782783.js",
              "assets/QForm.9f5e5771.js",
              "assets/monitoring.842318a3.js",
              "assets/PoseFormPopup.8fa60abf.js",
              "assets/PoseFormPopup.865c1916.css",
              "assets/QTooltip.3146d6fb.js",
              "assets/MarkerFormPopup.1c6d14cc.js",
              "assets/MarkerFormPopup.d21a5c8d.css",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/use-quasar.89a257f3.js",
              "assets/QImg.333aa49c.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/constants.d7cfa744.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
              "assets/schedule-service.c936318a.js",
            ]
          )
        ),
        Robostop: it(() =>
          nt(
            () => import("./ParkSideCard.764d94d7.js"),
            [
              "assets/ParkSideCard.764d94d7.js",
              "assets/ParkSideCard.352108aa.css",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QPopupEdit.57baf24d.js",
              "assets/monitoring-service.42782783.js",
              "assets/QMarkupTable.00b7e193.js",
              "assets/QForm.9f5e5771.js",
              "assets/monitoring.842318a3.js",
              "assets/PoseFormPopup.8fa60abf.js",
              "assets/PoseFormPopup.865c1916.css",
              "assets/QTooltip.3146d6fb.js",
              "assets/QSelect.30c8e1e2.js",
              "assets/QChip.4a445f8a.js",
              "assets/rtl.b51694b1.js",
              "assets/MarkerFormPopup.1c6d14cc.js",
              "assets/MarkerFormPopup.d21a5c8d.css",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/use-quasar.89a257f3.js",
              "assets/QImg.333aa49c.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/constants.d7cfa744.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
              "assets/schedule-service.c936318a.js",
            ]
          )
        ),
        Dim: it(() =>
          nt(
            () => import("./DimCard.adc1e439.js"),
            [
              "assets/DimCard.adc1e439.js",
              "assets/DimCard.cf7056c2.css",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QPopupEdit.57baf24d.js",
              "assets/monitoring-service.42782783.js",
              "assets/QMarkupTable.00b7e193.js",
              "assets/QForm.9f5e5771.js",
              "assets/monitoring.842318a3.js",
              "assets/PoseFormPopup.8fa60abf.js",
              "assets/PoseFormPopup.865c1916.css",
              "assets/QTooltip.3146d6fb.js",
              "assets/DIMModelEditor.b9a6d417.js",
              "assets/DIMModelEditor.183812ed.css",
              "assets/QSelect.30c8e1e2.js",
              "assets/QChip.4a445f8a.js",
              "assets/rtl.b51694b1.js",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/use-quasar.89a257f3.js",
              "assets/QImg.333aa49c.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/constants.d7cfa744.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
              "assets/schedule-service.c936318a.js",
            ]
          )
        ),
        Autodoor: it(() =>
          nt(
            () => import("./AutodoorCard.c4e93ec2.js"),
            [
              "assets/AutodoorCard.c4e93ec2.js",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QForm.9f5e5771.js",
              "assets/monitoring.842318a3.js",
              "assets/QPopupEdit.57baf24d.js",
              "assets/monitoring-service.42782783.js",
              "assets/AreaFormPopup.678a3387.js",
              "assets/AreaFormPopup.159e7ec1.css",
              "assets/QTooltip.3146d6fb.js",
              "assets/QMarkupTable.00b7e193.js",
              "assets/PoseFormPopup.8fa60abf.js",
              "assets/PoseFormPopup.865c1916.css",
              "assets/AutodoorPropertyForm.650b9eb7.js",
              "assets/AutodoorPropertyForm.fd226e9e.css",
              "assets/WaitingLocationForm.697efca5.js",
              "assets/use-quasar.89a257f3.js",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/QImg.333aa49c.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/constants.d7cfa744.js",
              "assets/QChip.4a445f8a.js",
              "assets/QSelect.30c8e1e2.js",
              "assets/rtl.b51694b1.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
              "assets/schedule-service.c936318a.js",
            ]
          )
        ),
        AutodoorExt: it(() =>
          nt(
            () => import("./AutodoorExtCard.b3bd6e6c.js"),
            [
              "assets/AutodoorExtCard.b3bd6e6c.js",
              "assets/AutodoorExtCard.eedb4915.css",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QForm.9f5e5771.js",
              "assets/monitoring.842318a3.js",
              "assets/QPopupEdit.57baf24d.js",
              "assets/monitoring-service.42782783.js",
              "assets/PoseFormPopup.8fa60abf.js",
              "assets/PoseFormPopup.865c1916.css",
              "assets/QTooltip.3146d6fb.js",
              "assets/QMarkupTable.00b7e193.js",
              "assets/AutodoorPropertyForm.650b9eb7.js",
              "assets/AutodoorPropertyForm.fd226e9e.css",
              "assets/WaitingLocationForm.697efca5.js",
              "assets/use-quasar.89a257f3.js",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/QImg.333aa49c.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/constants.d7cfa744.js",
              "assets/QChip.4a445f8a.js",
              "assets/QSelect.30c8e1e2.js",
              "assets/rtl.b51694b1.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
              "assets/schedule-service.c936318a.js",
            ]
          )
        ),
        Slope: it(() =>
          nt(
            () => import("./SlopeCard.e6a82271.js"),
            [
              "assets/SlopeCard.e6a82271.js",
              "assets/SlopeCard.2d1fe8a5.css",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QForm.9f5e5771.js",
              "assets/monitoring.842318a3.js",
              "assets/QPopupEdit.57baf24d.js",
              "assets/monitoring-service.42782783.js",
              "assets/AreaFormPopup.678a3387.js",
              "assets/AreaFormPopup.159e7ec1.css",
              "assets/QTooltip.3146d6fb.js",
              "assets/QMarkupTable.00b7e193.js",
              "assets/PoseFormPopup.8fa60abf.js",
              "assets/PoseFormPopup.865c1916.css",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/use-quasar.89a257f3.js",
              "assets/QImg.333aa49c.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/constants.d7cfa744.js",
              "assets/QChip.4a445f8a.js",
              "assets/QSelect.30c8e1e2.js",
              "assets/rtl.b51694b1.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
              "assets/schedule-service.c936318a.js",
            ]
          )
        ),
        TeleporterGate: it(() =>
          nt(
            () => import("./TeleporterGateCard.36e24fcd.js"),
            [
              "assets/TeleporterGateCard.36e24fcd.js",
              "assets/TeleporterGateCard.db93fab4.css",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QPopupEdit.57baf24d.js",
              "assets/monitoring-service.42782783.js",
              "assets/QMarkupTable.00b7e193.js",
              "assets/QForm.9f5e5771.js",
              "assets/use-quasar.89a257f3.js",
              "assets/monitoring.842318a3.js",
              "assets/AreaFormPopup.678a3387.js",
              "assets/AreaFormPopup.159e7ec1.css",
              "assets/QTooltip.3146d6fb.js",
              "assets/PoseFormPopup.8fa60abf.js",
              "assets/PoseFormPopup.865c1916.css",
              "assets/WaitingLocationForm.697efca5.js",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/QImg.333aa49c.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/constants.d7cfa744.js",
              "assets/QChip.4a445f8a.js",
              "assets/QSelect.30c8e1e2.js",
              "assets/rtl.b51694b1.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
              "assets/schedule-service.c936318a.js",
            ]
          )
        ),
        WorkingStation: it(() =>
          nt(
            () => import("./WorkingStationCard.5fa716a0.js"),
            [
              "assets/WorkingStationCard.5fa716a0.js",
              "assets/WorkingStationCard.2a7d3f5b.css",
              "assets/QSelect.30c8e1e2.js",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QChip.4a445f8a.js",
              "assets/rtl.b51694b1.js",
              "assets/QForm.9f5e5771.js",
              "assets/use-quasar.89a257f3.js",
              "assets/monitoring.842318a3.js",
              "assets/QPopupEdit.57baf24d.js",
              "assets/monitoring-service.42782783.js",
              "assets/AreaFormPopup.678a3387.js",
              "assets/AreaFormPopup.159e7ec1.css",
              "assets/QTooltip.3146d6fb.js",
              "assets/QMarkupTable.00b7e193.js",
              "assets/PoseFormPopup.8fa60abf.js",
              "assets/PoseFormPopup.865c1916.css",
              "assets/WaitingLocationForm.697efca5.js",
              "assets/JsonPretty.bca957f5.js",
              "assets/JsonPretty.955dd7b0.css",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/QImg.333aa49c.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/constants.d7cfa744.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/schedule-service.c936318a.js",
            ]
          )
        ),
        ExclusiveArea: it(() =>
          nt(
            () => import("./ZoneExclusiveCard.405cbb49.js"),
            [
              "assets/ZoneExclusiveCard.405cbb49.js",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QForm.9f5e5771.js",
              "assets/monitoring.842318a3.js",
              "assets/QPopupEdit.57baf24d.js",
              "assets/monitoring-service.42782783.js",
              "assets/AreaFormPopup.678a3387.js",
              "assets/AreaFormPopup.159e7ec1.css",
              "assets/QTooltip.3146d6fb.js",
              "assets/QMarkupTable.00b7e193.js",
              "assets/PoseFormPopup.8fa60abf.js",
              "assets/PoseFormPopup.865c1916.css",
              "assets/WaitingLocationForm.697efca5.js",
              "assets/use-quasar.89a257f3.js",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/QImg.333aa49c.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/constants.d7cfa744.js",
              "assets/QChip.4a445f8a.js",
              "assets/QSelect.30c8e1e2.js",
              "assets/rtl.b51694b1.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
              "assets/schedule-service.c936318a.js",
            ]
          )
        ),
        Zone: it(() =>
          nt(
            () => import("./ZoneCard.79a94e70.js"),
            [
              "assets/ZoneCard.79a94e70.js",
              "assets/ZoneCard.9973f0b7.css",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QForm.9f5e5771.js",
              "assets/monitoring.842318a3.js",
              "assets/QPopupEdit.57baf24d.js",
              "assets/monitoring-service.42782783.js",
              "assets/PoseFormPopup.8fa60abf.js",
              "assets/PoseFormPopup.865c1916.css",
              "assets/QTooltip.3146d6fb.js",
              "assets/QMarkupTable.00b7e193.js",
              "assets/QSelect.30c8e1e2.js",
              "assets/QChip.4a445f8a.js",
              "assets/rtl.b51694b1.js",
              "assets/JsonPretty.bca957f5.js",
              "assets/JsonPretty.955dd7b0.css",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/use-quasar.89a257f3.js",
              "assets/QImg.333aa49c.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/constants.d7cfa744.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/schedule-service.c936318a.js",
            ]
          )
        ),
        FleetZone: it(() =>
          nt(
            () => import("./FleetZoneCard.30a6952e.js"),
            [
              "assets/FleetZoneCard.30a6952e.js",
              "assets/FleetZoneCard.a3d6acb3.css",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QForm.9f5e5771.js",
              "assets/monitoring.842318a3.js",
              "assets/QPopupEdit.57baf24d.js",
              "assets/monitoring-service.42782783.js",
              "assets/QMarkupTable.00b7e193.js",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/use-quasar.89a257f3.js",
              "assets/QImg.333aa49c.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/constants.d7cfa744.js",
              "assets/QChip.4a445f8a.js",
              "assets/QSelect.30c8e1e2.js",
              "assets/rtl.b51694b1.js",
              "assets/QTooltip.3146d6fb.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
              "assets/schedule-service.c936318a.js",
            ]
          )
        ),
        Worker: it(() =>
          nt(
            () => import("./WorkerDetail.2d300b01.js"),
            [
              "assets/WorkerDetail.2d300b01.js",
              "assets/WorkerDetail.ba1c3dc9.css",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QTooltip.3146d6fb.js",
              "assets/QChip.4a445f8a.js",
              "assets/use-quasar.89a257f3.js",
              "assets/monitoring.842318a3.js",
              "assets/schedule-service.c936318a.js",
              "assets/monitoring-service.42782783.js",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/QImg.333aa49c.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/constants.d7cfa744.js",
              "assets/QForm.9f5e5771.js",
              "assets/QPopupEdit.57baf24d.js",
              "assets/QMarkupTable.00b7e193.js",
              "assets/QSelect.30c8e1e2.js",
              "assets/rtl.b51694b1.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
            ]
          )
        ),
        WaitingQueue: it(() =>
          nt(
            () => import("./WaitingQueueCard.ebc02d70.js"),
            [
              "assets/WaitingQueueCard.ebc02d70.js",
              "assets/WaitingQueueCard.25ec5f00.css",
              "assets/index.0b1d1347.js",
              "assets/index.94da7c4c.css",
              "assets/QImg.333aa49c.js",
              "assets/QForm.9f5e5771.js",
              "assets/QPopupEdit.57baf24d.js",
              "assets/monitoring-service.42782783.js",
              "assets/monitoring.842318a3.js",
              "assets/constants.d7cfa744.js",
              "assets/QBtnGroup.3bd5a747.js",
              "assets/QPopupProxy.d0cacd58.js",
              "assets/QBadge.c99ea254.js",
              "assets/use-quasar.89a257f3.js",
              "assets/QScrollArea.29b22f10.js",
              "assets/QChip.4a445f8a.js",
              "assets/QMarkupTable.00b7e193.js",
              "assets/QSelect.30c8e1e2.js",
              "assets/rtl.b51694b1.js",
              "assets/QTooltip.3146d6fb.js",
              "assets/QFooter.d7075b7b.js",
              "assets/vuedraggable.umd.c3b0f280.js",
              "assets/vue.runtime.esm-bundler.60f716a8.js",
              "assets/schedule-service.c936318a.js",
            ]
          )
        ),
      },
      E = N(""),
      C = N(0);
    Je(e, (M) => {
      console.log("[ResourceCard]::watch::resource", M), C.value++;
    }),
      Mt(() => {
        console.log("@______________[ResourceCard]::mounted", e.value);
      }),
      na(() => {
        console.log("@______________[ResourceCard]::updated");
      });
    const x = () => {
        var Z;
        const M = (Z = e.value) == null ? void 0 : Z.id;
        if (M) {
          const P = t.value.findIndex((S) => S == M);
          P > -1 && t.value.splice(P, 1), t.value.push(M);
        }
      },
      b = (M) => {
        const Z = M;
        E.value = Z.statusP.toUpperCase();
      },
      m = () => {
        const M = `Save ${c.value.resourceType}`;
        T(M, "Do you want to save it?").onOk(async () => {
          var S;
          const P = (S = e.value) == null ? void 0 : S.id;
          try {
            P == "new-id" ? await D(e.value) : await k(e.value);
            const te = `${c.value.resourceType} '${c.value.name}' has saved.`;
            R(te, "positive"), o("detail");
          } catch (te) {
            const le = te,
              ee = `Error: Save ${c.value.resourceType}`;
            K(le, ee), console.log("[ResourceCard]::save::error", le.response);
          }
        });
      },
      _ = () => {
        const M = `Editing ${c.value.resourceType}`;
        ae(M, "Do you want to exit without saving it?").onOk(() => {
          var S, te;
          const P =
            (te = (S = e.value) == null ? void 0 : S.id) != null ? te : "";
          l == null || l.closeEditingResource(P), i();
        });
      };
    async function D(M) {
      const Z = M.resourceType,
        P = M.serialize(),
        S = await M.create(P).catch((te) => {
          throw te;
        });
      if (S && S.id) {
        const te = S.id;
        (M.id = te), M.created(), l == null || l.closeEditingResource("");
        const le = M.serialize(!0),
          ee = l == null ? void 0 : l.loadResource(Z, le);
        ee && r(ee);
      }
    }
    async function k(M) {
      console.log("[ResourceCard]::updateResource ------------------");
      const Z = M.resourceType;
      let P = M.serialize();
      if (
        await M.update(P).catch((te) => {
          throw te;
        })
      ) {
        M.updated(), l == null || l.closeEditingResource("");
        const te = M.serialize(!0),
          le = l == null ? void 0 : l.loadResource(Z, te);
        le && r(le);
      }
      "waitingLocations" in M && M.deleteLocations();
    }
    const O = () => {
        i(), u();
      },
      Q = () => {
        const M = qo(e.value),
          Z = l == null ? void 0 : l.cloneResource(M);
        Z && a(Z);
      },
      X = () => {
        const M = `Copy ${c.value.name} (${c.value.resourceType})`;
        T(M, "Do you want to create a new from it?").onOk(() => {
          const P = qo(e.value, !0),
            S = l == null ? void 0 : l.cloneResource(P);
          if (S) {
            a(S);
            const te = `${S.resourceType} '${S.name}' has cloned.`;
            R(te, "info");
          }
        });
      },
      B = async () => {
        const M = `Remove ${c.value.name} (${c.value.resourceType})`;
        T(M, "Do you want to remove it?").onOk(async () => {
          var S;
          const P = (S = e.value) == null ? void 0 : S.id;
          await Vs(e.value)
            .then((te) => {
              c.value.deleted();
              const le = `${te.resource_type} '${te.name}' has removed.`;
              R(le, "warning"), P && (l == null || l.removeResource(P)), i();
            })
            .catch((te) => {
              var $, H;
              const le = te,
                ee = `Error: Remove ${
                  (H = ($ = c.value) == null ? void 0 : $.resourceType) != null
                    ? H
                    : "resource"
                }`;
              le && K(le, ee);
            });
        });
      };
    function T(M, Z) {
      return d.dialog({
        title: M,
        message: Z,
        cancel: !0,
        persistent: !0,
      });
    }
    function ae(M, Z) {
      return d.dialog({
        title: M,
        message: Z,
        cancel: "Edit",
        ok: "Exit",
        persistent: !0,
      });
    }
    function K(M, Z) {
      var te;
      const P = (te = M.response) == null ? void 0 : te.data;
      let S = `<div>[${P.error.code}] ${P.error.message}</div>`;
      (S += `<div>${P.error.reason}</div>`),
        d.dialog({
          title: Z,
          message: S,
          html: !0,
        });
    }
    function R(M, Z = "primary") {
      return d.notify({
        message: M,
        color: Z,
      });
    }
    return (M, Z) => (
      A(),
      q(
        yt,
        {
          flat: "",
          class: "my-card bg-transparent",
          key: C.value,
        },
        {
          default: y(() => [
            W(s) === "edit"
              ? (A(),
                q(
                  kt,
                  {
                    key: 0,
                  },
                  {
                    default: y(() => [
                      h(
                        $t,
                        {
                          class: "text-h6 row items-center no-wrap",
                        },
                        {
                          default: y(() => [ue(" Edit ")]),
                          _: 1,
                        }
                      ),
                      h(J, {
                        round: "",
                        icon: "save",
                        flat: "",
                        dense: "",
                        onClick: m,
                      }),
                      h(ct, {
                        class: "q-my-md",
                        vertical: "",
                      }),
                      h(J, {
                        round: "",
                        icon: "close",
                        flat: "",
                        dense: "",
                        onClick: _,
                      }),
                    ]),
                    _: 1,
                  }
                ))
              : he("", !0),
            W(s) === "detail"
              ? (A(),
                q(
                  kt,
                  {
                    key: 1,
                    class: "items-center",
                  },
                  {
                    default: y(() => {
                      var P, S;
                      return [
                        h(J, {
                          round: "",
                          icon: "arrow_back_ios",
                          dense: "",
                          flat: "",
                          onClick: O,
                        }),
                        h($t, null, {
                          default: y(() => [
                            h(
                              St,
                              {
                                class: "text-subtitle1",
                              },
                              {
                                default: y(() => {
                                  var te, le;
                                  return [
                                    ue(
                                      V(
                                        (te = W(e)) == null ? void 0 : te.name
                                      ) + " ",
                                      1
                                    ),
                                    ((le = W(e)) == null
                                      ? void 0
                                      : le.resourceType) == "Worker" && E.value
                                      ? (A(),
                                        q(
                                          rt,
                                          {
                                            key: 0,
                                            dense: "",
                                            color: "primary",
                                            "text-color": "white",
                                            class: "chip-name q-mx-xm",
                                          },
                                          {
                                            default: y(() => [
                                              ue(V(E.value), 1),
                                            ]),
                                            _: 1,
                                          }
                                        ))
                                      : he("", !0),
                                  ];
                                }),
                                _: 1,
                              }
                            ),
                            h(
                              St,
                              {
                                caption: "",
                                class: "text-grey-7",
                              },
                              {
                                default: y(() => [ue(V(W(f)), 1)]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }),
                        ((P = W(e)) == null ? void 0 : P.resourceType) !==
                        "Worker"
                          ? (A(),
                            q(
                              wn,
                              {
                                key: 0,
                                rounded: "",
                                flat: "",
                                dense: "",
                                "no-icon-animation": "",
                                "dropdown-icon": "more_vert",
                              },
                              {
                                default: y(() => [
                                  h(vt, null, {
                                    default: y(() => [
                                      Ze(
                                        (A(),
                                        q(
                                          Ve,
                                          {
                                            clickable: "",
                                            onClick: Q,
                                          },
                                          {
                                            default: y(() => [
                                              h(
                                                $e,
                                                {
                                                  avatar: "",
                                                },
                                                {
                                                  default: y(() => [
                                                    h(oe, {
                                                      name: "edit",
                                                      "text-color": "white",
                                                    }),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                              h($e, null, {
                                                default: y(() => [ue("Edit")]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        )),
                                        [[Nt]]
                                      ),
                                      Ze(
                                        (A(),
                                        q(
                                          Ve,
                                          {
                                            clickable: "",
                                            onClick: X,
                                          },
                                          {
                                            default: y(() => [
                                              h(
                                                $e,
                                                {
                                                  avatar: "",
                                                },
                                                {
                                                  default: y(() => [
                                                    h(oe, {
                                                      name: "content_copy",
                                                      "text-color": "white",
                                                    }),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                              h($e, null, {
                                                default: y(() => [ue("Copy")]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        )),
                                        [[Nt]]
                                      ),
                                      Ze(
                                        (A(),
                                        q(
                                          Ve,
                                          {
                                            clickable: "",
                                            onClick: B,
                                          },
                                          {
                                            default: y(() => [
                                              h(
                                                $e,
                                                {
                                                  avatar: "",
                                                },
                                                {
                                                  default: y(() => [
                                                    h(oe, {
                                                      name: "delete_forever",
                                                      "text-color": "white",
                                                    }),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                              h($e, null, {
                                                default: y(() => [
                                                  h(St, null, {
                                                    default: y(() => [
                                                      ue("Remove"),
                                                    ]),
                                                    _: 1,
                                                  }),
                                                ]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        )),
                                        [[Nt]]
                                      ),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }
                            ))
                          : he("", !0),
                        ((S = W(e)) == null ? void 0 : S.resourceType) ==
                        "Worker"
                          ? (A(),
                            q(J, {
                              key: 1,
                              round: "",
                              flat: "",
                              dense: "",
                              icon: "launch",
                              onClick: x,
                            }))
                          : he("", !0),
                      ];
                    }),
                    _: 1,
                  }
                ))
              : he("", !0),
            (A(),
            q(
              aa(w[W(v)]),
              {
                onUpdated: b,
              },
              null,
              32
            )),
          ]),
          _: 1,
        }
      )
    );
  },
});
var rl = ft(al, [["__scopeId", "data-v-aa73a0ce"]]);
const ul = (n) => (Wt("data-v-681fee06"), (n = n()), Gt(), n),
  ll = ul(() =>
    g(
      "thead",
      null,
      [
        g(
          "tr",
          {
            class: "bg-blue-grey-1",
          },
          [
            g("th", null, [
              g(
                "span",
                {
                  class: "text-title",
                },
                "No."
              ),
            ]),
            g("th", null, [
              g(
                "span",
                {
                  class: "text-title",
                },
                "x (m)"
              ),
            ]),
            g("th", null, [
              g(
                "span",
                {
                  class: "text-title",
                },
                "y (m)"
              ),
            ]),
          ]
        ),
      ],
      -1
    )
  ),
  cl = {
    class: "text-center",
  },
  dl = {
    class: "cursor-pointer text-right",
  },
  hl = {
    class: "cursor-pointer text-right",
  },
  pl = Te({
    __name: "PolygonForm",
    props: {
      modelValue: null,
    },
    emits: ["update:modelValue", "update-polygon"],
    setup(n, { emit: s }) {
      const e = n,
        t = G({
          get: () => e.modelValue,
          set: (i) => s("update:modelValue", i),
        });
      function o(i, a = 2) {
        return Number.parseFloat(i).toFixed(a);
      }
      return (i, a) => (
        A(),
        q(
          vn,
          {
            flat: "",
            bordered: "",
            dense: "",
            class: "table-polygon",
          },
          {
            default: y(() => [
              ll,
              g("tbody", null, [
                (A(!0),
                ge(
                  Be,
                  null,
                  st(
                    W(t),
                    (r, u) => (
                      A(),
                      ge(
                        "tr",
                        {
                          key: u,
                        },
                        [
                          g("td", cl, V(u + 1), 1),
                          g("td", dl, [
                            ue(V(o(r.x)) + " ", 1),
                            h(
                              io,
                              {
                                modelValue: r.x,
                                "onUpdate:modelValue": [
                                  (l) => (r.x = l),
                                  a[0] ||
                                    (a[0] = (l) => i.$emit("update-polygon")),
                                ],
                                modelModifiers: {
                                  number: !0,
                                },
                                title: "x",
                                "auto-save": "",
                                buttons: "",
                                persistent: "",
                              },
                              {
                                default: y((l) => [
                                  h(
                                    xt,
                                    {
                                      modelValue: l.value,
                                      "onUpdate:modelValue": (c) =>
                                        (l.value = c),
                                      modelModifiers: {
                                        number: !0,
                                      },
                                      type: "number",
                                      step: "0.01",
                                      dense: "",
                                      autofocus: "",
                                      onKeyup: Eo(l.set, ["enter"]),
                                    },
                                    null,
                                    8,
                                    [
                                      "modelValue",
                                      "onUpdate:modelValue",
                                      "onKeyup",
                                    ]
                                  ),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["modelValue", "onUpdate:modelValue"]
                            ),
                          ]),
                          g("td", hl, [
                            ue(V(o(r.y)) + " ", 1),
                            h(
                              io,
                              {
                                modelValue: r.y,
                                "onUpdate:modelValue": [
                                  (l) => (r.y = l),
                                  a[1] ||
                                    (a[1] = (l) => i.$emit("update-polygon")),
                                ],
                                modelModifiers: {
                                  number: !0,
                                },
                                title: "y",
                                "auto-save": "",
                                buttons: "",
                                persistent: "",
                              },
                              {
                                default: y((l) => [
                                  h(
                                    xt,
                                    {
                                      modelValue: l.value,
                                      "onUpdate:modelValue": (c) =>
                                        (l.value = c),
                                      modelModifiers: {
                                        number: !0,
                                      },
                                      type: "number",
                                      step: "0.01",
                                      dense: "",
                                      autofocus: "",
                                      onKeyup: Eo(l.set, ["enter"]),
                                    },
                                    null,
                                    8,
                                    [
                                      "modelValue",
                                      "onUpdate:modelValue",
                                      "onKeyup",
                                    ]
                                  ),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["modelValue", "onUpdate:modelValue"]
                            ),
                          ]),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            _: 1,
          }
        )
      );
    },
  });
var fl = ft(pl, [["__scopeId", "data-v-681fee06"]]);
const gl = {
    class: "col-12",
  },
  ml = {
    class: "q-px-md q-pb-sm q-gutter-y-sm",
  },
  yl = {
    class: "row q-mx-md q-col-gutter-x-xs q-col-gutter-y-sm",
  },
  vl = {
    class: "row justify-center q-my-md",
  },
  _l = Te({
    __name: "FormArea",
    setup(n) {
      const { selectedResource: s } = Fe(),
        e = To(s),
        t = e.shape,
        o = t.polygon$,
        i = Po({
          val: 0,
          area: "a-0",
        });
      return (
        o.subscribe((a) => {
          i.val++, (i.area = `a-${i.val}`);
        }),
        (a, r) => (
          A(),
          ge("div", gl, [
            g("div", ml, [
              h(
                Qe,
                {
                  modelValue: W(e).name,
                  "onUpdate:modelValue":
                    r[0] || (r[0] = (u) => (W(e).name = u)),
                  label: "Name",
                },
                null,
                8,
                ["modelValue"]
              ),
              h(
                Qe,
                {
                  modelValue: W(e).description,
                  "onUpdate:modelValue":
                    r[1] || (r[1] = (u) => (W(e).description = u)),
                  label: "Description",
                },
                null,
                8,
                ["modelValue"]
              ),
            ]),
            h(ct),
            h(
              Ue,
              {
                "switch-toggle-side": "",
                dense: "",
                "default-opened": "",
                "expand-icon": "arrow_drop_down",
                label: "Parameter",
              },
              {
                default: y(() => [
                  g("div", yl, [
                    h(
                      Qe,
                      {
                        modelValue: W(e).preemptNodeLength,
                        "onUpdate:modelValue":
                          r[2] || (r[2] = (u) => (W(e).preemptNodeLength = u)),
                        modelModifiers: {
                          number: !0,
                        },
                        label: "Preempt Node Length",
                        class: "col-6 text-caption",
                        type: "number",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    h(
                      Qe,
                      {
                        modelValue: W(e).delay,
                        "onUpdate:modelValue":
                          r[3] || (r[3] = (u) => (W(e).delay = u)),
                        modelModifiers: {
                          number: !0,
                        },
                        label: "Delay",
                        class: "col-6 text-caption",
                        type: "number",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    h(
                      Qe,
                      {
                        modelValue: W(e).detour,
                        "onUpdate:modelValue":
                          r[4] || (r[4] = (u) => (W(e).detour = u)),
                        modelModifiers: {
                          number: !0,
                        },
                        label: "Detour",
                        class: "col-6 text-caption",
                        type: "number",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    h(
                      Qe,
                      {
                        modelValue: W(e).velocity,
                        "onUpdate:modelValue":
                          r[5] || (r[5] = (u) => (W(e).velocity = u)),
                        modelModifiers: {
                          number: !0,
                        },
                        label: "Velocity",
                        class: "col-6 text-caption",
                        type: "number",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                  ]),
                ]),
                _: 1,
              }
            ),
            (A(),
            q(
              Ue,
              {
                "switch-toggle-side": "",
                dense: "",
                "default-opened": "",
                "expand-icon": "arrow_drop_down",
                label: "Area",
                key: i.area,
              },
              {
                default: y(() => [
                  g("div", vl, [
                    h(
                      fl,
                      {
                        modelValue: W(e).polygon,
                        "onUpdate:modelValue":
                          r[6] || (r[6] = (u) => (W(e).polygon = u)),
                        onUpdatePolygon: r[7] || (r[7] = (u) => W(t).move()),
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                  ]),
                ]),
                _: 1,
              }
            )),
          ])
        )
      );
    },
  });
const xl = (n) => (Wt("data-v-2a671f6e"), (n = n()), Gt(), n),
  Dl = {
    class: "col-12",
  },
  wl = {
    class: "row q-ml-sm q-mr-md q-my-sm q-col-gutter-x-sm",
  },
  bl = {
    class: "row items-center full-width",
  },
  Cl = {
    class: "col-auto",
  },
  El = {
    class: "col-auto",
  },
  Al = {
    class: "col-12 q-mx-md",
  },
  kl = {
    class: "col-12 q-mx-md",
  },
  Fl = xl(() =>
    g(
      "div",
      {
        class: "row items-center justify-between full-width",
      },
      [
        g(
          "div",
          {
            class: "col-3",
          },
          "Node"
        ),
        g(
          "div",
          {
            class: "col-8 q-pr-lg",
          },
          "Edges"
        ),
      ],
      -1
    )
  ),
  Pl = {
    class: "row justify-end items-center",
  },
  Sl = {
    class: "col-3",
  },
  Tl = {
    class: "row col-6",
  },
  $l = ["onClick"],
  Ml = Te({
    __name: "FormGraph",
    setup(n) {
      const { selectedResource: s } = Fe(),
        { fmzMode: e, fmzTarget: t } = Ye(Fe()),
        o = To(s),
        i = o.shape;
      gt();
      const a = N("Node & Edge"),
        r = N(""),
        u = Po([]),
        l = () => {
          console.log("[FormGraph]::removeAll", o);
        },
        c = (v) => {
          console.log("[FormGraph]::editNode", v),
            (e.value = "node"),
            (t.value = v);
          const w = o.getNodeByIndex(v);
          w && i.setNodeEditor(w);
        },
        d = (v) => {
          (e.value = "edge"), (t.value = v), v && i.setEdgeEditor(v);
        };
      o.nodes.forEach((v) => {
        const w = {
          fromNodeIndex: v.index,
          edges: [],
        };
        o.edges.forEach((E) => {
          E.from == v.index &&
            w.edges.push({
              edge: E,
              hasReverseEdge: f(E.from, E.to),
            });
        }),
          u.push(w);
      });
      function f(v, w) {
        return o.edges.findIndex((C) => C.from == w && C.to == v) > -1;
      }
      return (v, w) => (
        A(),
        ge("div", Dl, [
          g("div", wl, [
            h(
              xt,
              {
                readonly: "",
                outlined: "",
                dense: "",
                modelValue: W(o).nodes.length,
                "onUpdate:modelValue":
                  w[0] || (w[0] = (E) => (W(o).nodes.length = E)),
                label: "Node Count",
                class: "col-6",
              },
              null,
              8,
              ["modelValue"]
            ),
            h(
              xt,
              {
                readonly: "",
                outlined: "",
                dense: "",
                modelValue: W(o).edges.length,
                "onUpdate:modelValue":
                  w[1] || (w[1] = (E) => (W(o).edges.length = E)),
                label: "Edge Count",
                class: "col-6",
              },
              null,
              8,
              ["modelValue"]
            ),
          ]),
          h(
            Ue,
            {
              "switch-toggle-side": "",
              "default-opened": "",
              "expand-icon": "arrow_drop_down",
            },
            {
              header: y(() => [
                g("div", bl, [
                  g("div", Cl, V(a.value), 1),
                  h(ze),
                  g("div", El, [
                    h(J, {
                      flat: "",
                      round: "",
                      dense: "",
                      size: "md",
                      color: "grey-7",
                      icon: "delete_forever",
                      onClick: w[2] || (w[2] = no((E) => l(), ["stop"])),
                    }),
                  ]),
                ]),
              ]),
              default: y(() => [
                g("div", Al, [
                  h(
                    xt,
                    {
                      outlined: "",
                      dense: "",
                      "bg-color": "white",
                      modelValue: r.value,
                      "onUpdate:modelValue":
                        w[3] || (w[3] = (E) => (r.value = E)),
                      label: "Node & Edge",
                      class: "q-ml-md",
                    },
                    {
                      after: y(() => [
                        h(J, {
                          round: "",
                          dense: "",
                          flat: "",
                          icon: "search",
                        }),
                      ]),
                      _: 1,
                    },
                    8,
                    ["modelValue"]
                  ),
                ]),
                g("div", kl, [
                  (A(!0),
                  ge(
                    Be,
                    null,
                    st(
                      u,
                      (E, C) => (
                        A(),
                        q(
                          Ue,
                          {
                            key: C,
                            dense: "",
                            "switch-toggle-side": "",
                            "default-opened": "",
                            "expand-icon": "arrow_drop_down",
                          },
                          {
                            header: y(() => [Fl]),
                            default: y(() => [
                              g("div", Pl, [
                                g("div", Sl, [
                                  h(
                                    rt,
                                    {
                                      square: "",
                                      clickable: "",
                                      color: "primary",
                                      "text-color": "white",
                                      class: "cursor-pointer",
                                      onClick: (x) => c(E.fromNodeIndex),
                                    },
                                    {
                                      default: y(() => [
                                        ue(V(E.fromNodeIndex), 1),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["onClick"]
                                  ),
                                ]),
                                g("div", Tl, [
                                  (A(!0),
                                  ge(
                                    Be,
                                    null,
                                    st(
                                      E.edges,
                                      (x, b) => (
                                        A(),
                                        ge(
                                          "div",
                                          {
                                            key: b,
                                            class:
                                              "column justify-center items-center cursor-pointer edge-item",
                                            onClick: (m) => d(x.edge),
                                          },
                                          [
                                            x.hasReverseEdge
                                              ? (A(),
                                                q(oe, {
                                                  key: 0,
                                                  name: "img:/monitoring/poi/edge2.svg",
                                                }))
                                              : (A(),
                                                q(oe, {
                                                  key: 1,
                                                  name: "img:/monitoring/poi/edge.svg",
                                                })),
                                            h(
                                              rt,
                                              {
                                                dense: "",
                                                square: "",
                                                color: "black",
                                                "text-color": "white",
                                              },
                                              {
                                                default: y(() => [
                                                  ue(V(x.edge.to), 1),
                                                ]),
                                                _: 2,
                                              },
                                              1024
                                            ),
                                          ],
                                          8,
                                          $l
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                              ]),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  });
var Bl = ft(Ml, [["__scopeId", "data-v-2a671f6e"]]);
const vs = Te({
  __name: "SiteSelect",
  props: {
    modelValue: null,
    bgColor: {
      default: "white",
    },
    stackLabel: {
      type: Boolean,
      default: !0,
    },
    dense: {
      type: Boolean,
      default: !0,
    },
    outlined: {
      type: Boolean,
      default: !0,
    },
  },
  emits: ["update:modelValue"],
  setup(n, { emit: s }) {
    const e = n,
      t = G({
        get: () => e.modelValue,
        set: (o) => s("update:modelValue", o),
      });
    return (o, i) => (
      A(),
      q(
        qs,
        Fo(
          {
            modelValue: W(t),
            "onUpdate:modelValue":
              i[0] || (i[0] = (a) => (Jt(t) ? (t.value = a) : null)),
          },
          o.$attrs,
          {
            outlined: n.outlined,
            dense: n.dense,
            "stack-label": n.stackLabel,
            "bg-color": n.bgColor,
          }
        ),
        ra(
          {
            _: 2,
          },
          [
            st(o.$slots, (a, r) => ({
              name: r,
              fn: y((u) => [
                ua(
                  o.$slots,
                  r,
                  Fo(u, {
                    key: r,
                  })
                ),
              ]),
            })),
          ]
        ),
        1040,
        ["modelValue", "outlined", "dense", "stack-label", "bg-color"]
      )
    );
  },
});
const ss = (n) => (Wt("data-v-c83e663c"), (n = n()), Gt(), n),
  Il = {
    class: "bg-blue-grey-1",
  },
  Rl = ss(() =>
    g(
      "th",
      null,
      [
        g(
          "span",
          {
            class: "text-title",
          },
          "x (m)"
        ),
      ],
      -1
    )
  ),
  Ll = ss(() =>
    g(
      "th",
      null,
      [
        g(
          "span",
          {
            class: "text-title",
          },
          "y (m)"
        ),
      ],
      -1
    )
  ),
  Ol = ss(() =>
    g(
      "th",
      null,
      [
        g(
          "span",
          {
            class: "text-title",
          },
          "degree"
        ),
      ],
      -1
    )
  ),
  Nl = {
    class: "cursor-pointer",
  },
  zl = ss(() =>
    g(
      "span",
      {
        class: "text-title",
      },
      "rotation",
      -1
    )
  ),
  Wl = {
    class: "row",
  },
  Gl = {
    class: "cursor-pointer text-right",
  },
  Vl = {
    class: "cursor-pointer text-right",
  },
  ql = {
    class: "cursor-pointer text-right",
  },
  Xl = {
    class: "text-center",
  },
  Ql = ["src"],
  Zl = Te({
    __name: "NodePose",
    props: {
      modelValue: null,
      canEdit: {
        type: Boolean,
        default: !0,
      },
      degreeBase: {
        default: "right",
      },
      degreeDirection: {
        default: 1,
      },
      title: null,
      hasHeaderIcon: {
        type: Boolean,
        default: !1,
      },
      bgColor: {
        default: "white",
      },
      stackLabel: {
        type: Boolean,
        default: !0,
      },
      dense: {
        type: Boolean,
        default: !0,
      },
      outlined: {
        type: Boolean,
        default: !0,
      },
      precision: {
        default: 2,
      },
    },
    emits: ["update:modelValue", "update-pose"],
    setup(n, { emit: s }) {
      const e = n;
      console.log("[PoseForm]::props", e);
      const t = G({
          get: () => e.modelValue,
          set: (u) => s("update:modelValue", u),
        }),
        o = G({
          get: () => t.value.degree * -1,
          set: (u) => (t.value.degree = u * -1),
        }),
        i = G(() => `/monitoring/poi/arrow_${e.degreeBase}.png`);
      function a(u, l = 2) {
        return u.toFixed(l);
      }
      function r(u) {
        u == "l"
          ? (t.value.degree = (t.value.degree - 15 * e.degreeDirection) % 360)
          : u == "r"
          ? (t.value.degree = (t.value.degree + 15 * e.degreeDirection) % 360)
          : u == "+"
          ? (t.value.degree = (t.value.degree + 1 * e.degreeDirection) % 360)
          : u == "-"
          ? (t.value.degree = (t.value.degree - 1 * e.degreeDirection) % 360)
          : (t.value.degree = 0),
          s("update-pose");
      }
      return (u, l) => (
        A(),
        q(
          vn,
          {
            flat: "",
            bordered: "",
            dense: "",
            "wrap-cells": "",
            class: "table-pose",
          },
          {
            default: y(() => [
              g("thead", null, [
                g("tr", Il, [
                  Rl,
                  Ll,
                  Ol,
                  g("th", Nl, [
                    zl,
                    n.canEdit
                      ? (A(),
                        q(
                          io,
                          {
                            key: 0,
                            modelValue: W(t).degree,
                            "onUpdate:modelValue":
                              l[4] || (l[4] = (c) => (W(t).degree = c)),
                            modelModifiers: {
                              number: !0,
                            },
                            anchor: "bottom right",
                          },
                          {
                            default: y(() => [
                              g("div", Wl, [
                                h(J, {
                                  flat: "",
                                  round: "",
                                  icon: "img:/icons/left15.svg",
                                  onClick: l[0] || (l[0] = (c) => r("l")),
                                }),
                                h(J, {
                                  flat: "",
                                  round: "",
                                  icon: "img:/icons/left1.svg",
                                  onClick: l[1] || (l[1] = (c) => r("-")),
                                }),
                                h(J, {
                                  flat: "",
                                  round: "",
                                  icon: "img:/icons/right1.svg",
                                  onClick: l[2] || (l[2] = (c) => r("+")),
                                }),
                                h(J, {
                                  flat: "",
                                  round: "",
                                  icon: "img:/icons/right15.svg",
                                  onClick: l[3] || (l[3] = (c) => r("r")),
                                }),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue"]
                        ))
                      : he("", !0),
                    n.canEdit
                      ? (A(),
                        q(
                          At,
                          {
                            key: 1,
                            class: "bg-info text-black shadow-4",
                            anchor: "top middle",
                            self: "top middle",
                            offset: [0, 30],
                          },
                          {
                            default: y(() => [ue(" Click to rotate ")]),
                            _: 1,
                          }
                        ))
                      : he("", !0),
                  ]),
                ]),
              ]),
              g("tbody", null, [
                g("tr", null, [
                  g("td", Gl, [
                    ue(V(a(W(t).x, n.precision)) + " ", 1),
                    n.canEdit
                      ? (A(),
                        q(
                          io,
                          {
                            key: 0,
                            modelValue: W(t).x,
                            "onUpdate:modelValue": [
                              l[5] || (l[5] = (c) => (W(t).x = c)),
                              l[6] || (l[6] = (c) => u.$emit("update-pose")),
                            ],
                            modelModifiers: {
                              number: !0,
                            },
                            title: "x",
                            "auto-save": "",
                            buttons: "",
                            persistent: "",
                          },
                          {
                            default: y((c) => [
                              h(
                                xt,
                                {
                                  modelValue: c.value,
                                  "onUpdate:modelValue": (d) => (c.value = d),
                                  modelModifiers: {
                                    number: !0,
                                  },
                                  type: "number",
                                  step: "0.01",
                                  dense: "",
                                  autofocus: "",
                                  onKeyup: Eo(c.set, ["enter"]),
                                },
                                null,
                                8,
                                ["modelValue", "onUpdate:modelValue", "onKeyup"]
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue"]
                        ))
                      : he("", !0),
                  ]),
                  g("td", Vl, [
                    ue(V(a(W(t).y, n.precision)) + " ", 1),
                    n.canEdit
                      ? (A(),
                        q(
                          io,
                          {
                            key: 0,
                            modelValue: W(t).y,
                            "onUpdate:modelValue": [
                              l[7] || (l[7] = (c) => (W(t).y = c)),
                              l[8] || (l[8] = (c) => u.$emit("update-pose")),
                            ],
                            modelModifiers: {
                              number: !0,
                            },
                            title: "y",
                            "auto-save": "",
                            buttons: "",
                            persistent: "",
                          },
                          {
                            default: y((c) => [
                              h(
                                xt,
                                {
                                  modelValue: c.value,
                                  "onUpdate:modelValue": (d) => (c.value = d),
                                  modelModifiers: {
                                    number: !0,
                                  },
                                  type: "number",
                                  step: "0.01",
                                  dense: "",
                                  autofocus: "",
                                  onKeyup: Eo(c.set, ["enter"]),
                                },
                                null,
                                8,
                                ["modelValue", "onUpdate:modelValue", "onKeyup"]
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue"]
                        ))
                      : he("", !0),
                  ]),
                  g("td", ql, [
                    ue(V(a(W(o), 0)) + " ", 1),
                    n.canEdit
                      ? (A(),
                        q(
                          io,
                          {
                            key: 0,
                            modelValue: W(o),
                            "onUpdate:modelValue": [
                              l[9] ||
                                (l[9] = (c) => (Jt(o) ? (o.value = c) : null)),
                              l[10] || (l[10] = (c) => u.$emit("update-pose")),
                            ],
                            modelModifiers: {
                              number: !0,
                            },
                            title: "degree",
                            "auto-save": "",
                            buttons: "",
                            persistent: "",
                          },
                          {
                            default: y((c) => [
                              h(
                                xt,
                                {
                                  modelValue: c.value,
                                  "onUpdate:modelValue": (d) => (c.value = d),
                                  modelModifiers: {
                                    number: !0,
                                  },
                                  type: "number",
                                  dense: "",
                                  autofocus: "",
                                  onKeyup: Eo(c.set, ["enter"]),
                                },
                                null,
                                8,
                                ["modelValue", "onUpdate:modelValue", "onKeyup"]
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue"]
                        ))
                      : he("", !0),
                  ]),
                  g("td", Xl, [
                    h(
                      J,
                      {
                        disable: !n.canEdit,
                        flat: "",
                        round: "",
                        dense: "",
                        onClick: l[11] || (l[11] = (c) => r("0")),
                      },
                      {
                        default: y(() => [
                          n.canEdit
                            ? (A(),
                              q(
                                At,
                                {
                                  key: 0,
                                  class: "bg-amber text-black shadow-4",
                                  offset: [5, 5],
                                },
                                {
                                  default: y(() => [ue(" Reset: 0 ")]),
                                  _: 1,
                                }
                              ))
                            : he("", !0),
                          g(
                            "img",
                            {
                              loading: "eager",
                              class: "arrow",
                              src: W(i),
                              style: sn({
                                transform: `rotate(${
                                  W(t).degree * n.degreeDirection
                                }deg)`,
                              }),
                            },
                            null,
                            12,
                            Ql
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["disable"]
                    ),
                  ]),
                ]),
              ]),
            ]),
            _: 1,
          }
        )
      );
    },
  });
var Ul = ft(Zl, [["__scopeId", "data-v-c83e663c"]]);
const jl = {
    class: "row items-center full-width",
  },
  Yl = {
    class: "col-auto",
  },
  Hl = {
    class: "col-auto",
  },
  Kl = {
    key: 0,
    class: "row q-mx-md q-col-gutter-x-xs q-col-gutter-y-sm",
  },
  Jl = {
    class: "col-12 justify-center q-my-sm",
  },
  ec = {
    class: "row items-center full-width",
  },
  tc = g(
    "div",
    {
      class: "col-auto",
    },
    "Waiting Queue",
    -1
  ),
  oc = {
    class: "col-auto q-mx-md q-col-gutter-x-xs q-col-gutter-y-sm",
  },
  sc = {
    class: "row items-center full-width",
  },
  ic = g(
    "div",
    {
      class: "col-auto",
    },
    "Marker",
    -1
  ),
  nc = {
    class: "col-auto q-mx-md q-col-gutter-x-xs q-col-gutter-y-sm",
  },
  ac = {
    class: "row items-center full-width",
  },
  rc = g(
    "div",
    {
      class: "col-auto",
    },
    "Parameters",
    -1
  ),
  uc = {
    class: "col-auto",
  },
  lc = {
    class: "row q-mx-md q-mb-xs q-col-gutter-x-xs q-col-gutter-y-sm",
  },
  cc = {
    class: "row items-center full-width",
  },
  dc = g(
    "div",
    {
      class: "col-auto",
    },
    "Edges",
    -1
  ),
  hc = {
    class: "col-auto",
  },
  pc = {
    class: "row q-mb-md q-mx-lg",
  },
  fc = {
    class: "col-auto",
  },
  gc = {
    class: "col-auto",
  },
  mc = Te({
    __name: "FormNode",
    setup(n) {
      const { fmzMode: s, fmzTarget: e } = Ye(Fe()),
        { selectedResource: t } = Fe(),
        o = To(t),
        i = o.shape,
        a = i.editingStatus$,
        r = gt(),
        u = N("Node"),
        l = i.node$,
        c = N(0),
        d = N(),
        f = N([]),
        v = ["default", "entry", "exit", "work", "charge"],
        w = N(),
        E = N(),
        C = qe("stage"),
        x = Po([]),
        b = Po([]),
        m = [],
        _ = [];
      M(), K();
      const D = () => {
          var P, S, te, le, ee;
          if (
            (console.log("@@@___[FMZ Node]::updateNodeType", d.value),
            ((P = d.value) == null ? void 0 : P.type) !== "entry")
          ) {
            const $ = o.waitingQueues.find((H) => {
              var L;
              return (
                H.connectedNode == ((L = d.value) == null ? void 0 : L.index)
              );
            });
            console.log("@@@___[FMZ Node]::updateNodeType::!entry", $, m),
              $ &&
                (m.splice(0),
                o.waitingQueues.splice(o.waitingQueues.indexOf($), 1),
                (w.value = ""),
                M());
          } else (w.value = ""), m.splice(0), M();
          ((S = d.value) == null ? void 0 : S.type) === "entry"
            ? (d.value.name = `entry-${d.value.index}`)
            : ((te = d.value) == null ? void 0 : te.type) === "exit"
            ? (d.value.name = `exit-${d.value.index}`)
            : ((le = d.value) == null ? void 0 : le.type) === "work"
            ? (d.value.name = `work-${d.value.index}`)
            : ((ee = d.value) == null ? void 0 : ee.type) === "charge" &&
              (d.value.name = `charge-${d.value.index}`),
            i.edit(),
            i.setNodeEditor(d.value);
        },
        k = () => {
          console.log("@@@___[FMZ Node]::updateNode", d.value),
            i.edit(),
            i.setNodeEditor(d.value);
        },
        O = () => {
          if ((console.log("[FormNode]::remove", d.value), d.value)) {
            const P = d.value.index,
              S = [],
              te = `Remove Node ${P}`;
            T(te, "Do you want to delete it?").onOk(() => {
              const ee = o.nodes.findIndex((H) => H.index == P);
              o.edges.forEach((H) => {
                (H.from == P || H.to == P) && S.push(H);
              }),
                S.forEach((H) => {
                  const L = o.edges.findIndex(
                    (re) => re.from == H.from && re.to == H.to
                  );
                  L > -1 && o.edges.splice(L, 1);
                }),
                ee > -1 && o.nodes.splice(ee, 1);
              const $ = `Node '${P}' is removed.`;
              ae($, "positive"),
                (s.value = "graph"),
                (e.value = -1),
                i.setEditMode("graph"),
                i.edit();
            });
          }
        },
        Q = (P, S) => {
          console.log("[FormNode]::editEdge", S, P),
            i.removeNodeEditor(),
            (s.value = "edge"),
            (e.value = P),
            i.setEdgeEditor(P);
        };
      l.subscribe((P) => {
        c.value++;
      }),
        a.subscribe((P) => {
          P.mode == "del-node" &&
            (console.log("@@__[FormNode]::editingStatus$::del-node", P), O());
        }),
        Je(
          e,
          (P, S) => {
            console.log("@@__[FMZ NodeForm]::watch", P, S, s.value, e);
            const te = e.value;
            (f.value.length = 0),
              (d.value = X(te)),
              B(te),
              (w.value = ""),
              (E.value = ""),
              _.splice(0),
              m.splice(0),
              M(),
              K(),
              c.value++;
          },
          {
            immediate: !0,
          }
        );
      function X(P) {
        return o.nodes.find((S) => S.index == P);
      }
      function B(P) {
        o.edges.forEach((S) => {
          S.from == P && f.value.push(S), S.to == P && f.value.push(S);
        });
      }
      function T(P, S) {
        return r.dialog({
          title: P,
          message: S,
          cancel: !0,
          persistent: !0,
        });
      }
      function ae(P, S = "primary") {
        return r.notify({
          message: P,
          color: S,
        });
      }
      async function K() {
        console.log("makeMarkerOptions called", d.value, _),
          (b.length = 0),
          o.markers.map((P) => {
            var S;
            P.marker &&
              (P.connectedNode == ((S = d.value) == null ? void 0 : S.index) &&
                (E.value = P.marker),
              _.push(P.marker));
          }),
          C == null ||
            C.resourceStore.forEach((P) => {
              P instanceof ks &&
                (_.includes(P.id) || P.chargeable) &&
                b.push({
                  label: P.name,
                  value: P.id,
                });
            });
      }
      function R(P) {
        var te, le;
        console.log("syncMarkerOptions called", d.value, P);
        const S = o.markers.find((ee) => {
          var $;
          return ee.connectedNode == (($ = d.value) == null ? void 0 : $.index);
        });
        P &&
          (S
            ? (S.marker = P)
            : o.markers.push({
                marker: P,
                connectedNode:
                  (le = (te = d.value) == null ? void 0 : te.index) != null
                    ? le
                    : -1,
              })),
          console.log("@__[FormNode]::syncWaitingQueueOptions", o),
          m.splice(0),
          o.waitingQueues.map((ee) => {
            ee.waitingQueue && m.push(ee.waitingQueue);
          });
      }
      async function M() {
        (x.length = 0),
          o.waitingQueues.map((P) => {
            var S;
            P.waitingQueue &&
              (P.connectedNode == ((S = d.value) == null ? void 0 : S.index) &&
                (w.value = P.waitingQueue),
              m.push(P.waitingQueue));
          }),
          C == null ||
            C.resourceStore.forEach((P) => {
              P instanceof Fs &&
                (m.includes(P.id) || !P.connectedResource) &&
                x.push({
                  label: P.name,
                  value: P.id,
                });
            });
      }
      function Z(P) {
        var te, le;
        const S = o.waitingQueues.find((ee) => {
          var $;
          return ee.connectedNode == (($ = d.value) == null ? void 0 : $.index);
        });
        P &&
          (S
            ? (S.waitingQueue = P)
            : o.waitingQueues.push({
                waitingQueue: P,
                connectedNode:
                  (le = (te = d.value) == null ? void 0 : te.index) != null
                    ? le
                    : -1,
              })),
          console.log("@__[FormNode]::syncWaitingQueueOptions", o),
          m.splice(0),
          o.waitingQueues.map((ee) => {
            ee.waitingQueue && m.push(ee.waitingQueue);
          });
      }
      return (P, S) => {
        var te, le;
        return (
          A(),
          ge(
            "div",
            {
              class: "col-12",
              key: c.value,
            },
            [
              h(
                Ue,
                {
                  "switch-toggle-side": "",
                  "default-opened": "",
                  "expand-icon": "arrow_drop_down",
                },
                {
                  header: y(() => [
                    g("div", jl, [
                      g("div", Yl, V(u.value), 1),
                      h(ze),
                      g("div", Hl, [
                        h(J, {
                          flat: "",
                          round: "",
                          dense: "",
                          size: "md",
                          color: "grey-7",
                          icon: "delete_forever",
                          onClick: S[0] || (S[0] = no((ee) => O(), ["stop"])),
                        }),
                      ]),
                    ]),
                  ]),
                  default: y(() => [
                    d.value
                      ? (A(),
                        ge("div", Kl, [
                          h(
                            xt,
                            {
                              readonly: "",
                              dense: "",
                              outlined: "",
                              modelValue: d.value.index,
                              "onUpdate:modelValue":
                                S[1] || (S[1] = (ee) => (d.value.index = ee)),
                              label: "Index",
                              class: "col-6 text-caption",
                            },
                            null,
                            8,
                            ["modelValue"]
                          ),
                          h(
                            vs,
                            {
                              modelValue: d.value.type,
                              "onUpdate:modelValue": [
                                S[2] || (S[2] = (ee) => (d.value.type = ee)),
                                D,
                              ],
                              options: v,
                              label: "Type",
                              class: "col-6 text-caption",
                            },
                            null,
                            8,
                            ["modelValue"]
                          ),
                          h(
                            Qe,
                            {
                              modelValue: d.value.name,
                              "onUpdate:modelValue":
                                S[3] || (S[3] = (ee) => (d.value.name = ee)),
                              label: "Name",
                              class: "col-12 text-caption",
                            },
                            null,
                            8,
                            ["modelValue"]
                          ),
                          g("div", Jl, [
                            h(
                              Ul,
                              {
                                modelValue: d.value.pose,
                                "onUpdate:modelValue":
                                  S[4] || (S[4] = (ee) => (d.value.pose = ee)),
                                onUpdatePose: S[5] || (S[5] = (ee) => k()),
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                        ]))
                      : he("", !0),
                  ]),
                  _: 1,
                }
              ),
              ((te = d.value) == null ? void 0 : te.type) == "entry"
                ? (A(),
                  q(
                    Ue,
                    {
                      key: 0,
                      "switch-toggle-side": "",
                      "default-opened": "",
                      "expand-icon": "arrow_drop_down",
                    },
                    {
                      header: y(() => [g("div", ec, [tc, h(ze)])]),
                      default: y(() => [
                        g("div", oc, [
                          h(
                            vs,
                            {
                              modelValue: w.value,
                              "onUpdate:modelValue": [
                                S[6] || (S[6] = (ee) => (w.value = ee)),
                                Z,
                              ],
                              "emit-value": "",
                              "map-options": "",
                              options: x,
                              label: "Waiting Queue",
                            },
                            {
                              option: y(({ itemProps: ee, opt: $ }) => [
                                m.includes($.value)
                                  ? he("", !0)
                                  : (A(),
                                    q(
                                      Ve,
                                      As(
                                        Fo(
                                          {
                                            key: 0,
                                          },
                                          ee
                                        )
                                      ),
                                      {
                                        default: y(() => [
                                          h(
                                            $e,
                                            null,
                                            {
                                              default: y(() => [
                                                h(
                                                  St,
                                                  null,
                                                  {
                                                    default: y(() => [
                                                      ue(V($.label), 1),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1040
                                    )),
                              ]),
                              _: 1,
                            },
                            8,
                            ["modelValue", "options"]
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ))
                : he("", !0),
              ((le = d.value) == null ? void 0 : le.type) == "charge"
                ? (A(),
                  q(
                    Ue,
                    {
                      key: 1,
                      "switch-toggle-side": "",
                      "default-opened": "",
                      "expand-icon": "arrow_drop_down",
                    },
                    {
                      header: y(() => [g("div", sc, [ic, h(ze)])]),
                      default: y(() => [
                        g("div", nc, [
                          h(
                            vs,
                            {
                              modelValue: E.value,
                              "onUpdate:modelValue": [
                                S[7] || (S[7] = (ee) => (E.value = ee)),
                                R,
                              ],
                              "emit-value": "",
                              "map-options": "",
                              options: b,
                              label: "Marker",
                            },
                            {
                              option: y(({ itemProps: ee, opt: $ }) => [
                                _.includes($.value)
                                  ? he("", !0)
                                  : (A(),
                                    q(
                                      Ve,
                                      As(
                                        Fo(
                                          {
                                            key: 0,
                                          },
                                          ee
                                        )
                                      ),
                                      {
                                        default: y(() => [
                                          h(
                                            $e,
                                            null,
                                            {
                                              default: y(() => [
                                                h(
                                                  St,
                                                  null,
                                                  {
                                                    default: y(() => [
                                                      ue(V($.label), 1),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1040
                                    )),
                              ]),
                              _: 1,
                            },
                            8,
                            ["modelValue", "options"]
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ))
                : he("", !0),
              d.value
                ? (A(),
                  q(
                    Ue,
                    {
                      key: 2,
                      "switch-toggle-side": "",
                      "model-value": d.value.hasOption,
                      "expand-icon": "arrow_drop_down",
                      class: "q-my-sm",
                    },
                    {
                      header: y(() => [
                        g("div", ac, [
                          rc,
                          h(ze),
                          g("div", uc, [
                            h(
                              _t,
                              {
                                modelValue: d.value.hasOption,
                                "onUpdate:modelValue":
                                  S[8] ||
                                  (S[8] = (ee) => (d.value.hasOption = ee)),
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                        ]),
                      ]),
                      default: y(() => [
                        g("div", lc, [
                          h(
                            Qe,
                            {
                              modelValue: d.value.toleranceRadius,
                              "onUpdate:modelValue":
                                S[9] ||
                                (S[9] = (ee) => (d.value.toleranceRadius = ee)),
                              modelModifiers: {
                                number: !0,
                              },
                              label: "Tolerance Radius",
                              class: "col-6",
                              type: "number",
                              disable: !d.value.hasOption,
                            },
                            null,
                            8,
                            ["modelValue", "disable"]
                          ),
                          h(
                            Qe,
                            {
                              modelValue: d.value.angularSpeed,
                              "onUpdate:modelValue":
                                S[10] ||
                                (S[10] = (ee) => (d.value.angularSpeed = ee)),
                              modelModifiers: {
                                number: !0,
                              },
                              label: "Angular Speed",
                              class: "col-6",
                              type: "number",
                              disable: !d.value.hasOption,
                            },
                            null,
                            8,
                            ["modelValue", "disable"]
                          ),
                          h(
                            Qe,
                            {
                              modelValue: d.value.maxSpeed,
                              "onUpdate:modelValue":
                                S[11] ||
                                (S[11] = (ee) => (d.value.maxSpeed = ee)),
                              modelModifiers: {
                                number: !0,
                              },
                              label: "Max Speed",
                              class: "col-6",
                              type: "number",
                              disable: !d.value.hasOption,
                            },
                            null,
                            8,
                            ["modelValue", "disable"]
                          ),
                          h(
                            Qe,
                            {
                              modelValue: d.value.maxAccel,
                              "onUpdate:modelValue":
                                S[12] ||
                                (S[12] = (ee) => (d.value.maxAccel = ee)),
                              modelModifiers: {
                                number: !0,
                              },
                              label: "Max Accel",
                              class: "col-6",
                              type: "number",
                              disable: !d.value.hasOption,
                            },
                            null,
                            8,
                            ["modelValue", "disable"]
                          ),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["model-value"]
                  ))
                : he("", !0),
              h(
                Ue,
                {
                  "switch-toggle-side": "",
                  "default-opened": "",
                  "expand-icon": "arrow_drop_down",
                },
                {
                  header: y(() => [
                    g("div", cc, [
                      dc,
                      h(ze),
                      g("div", hc, "Count " + V(f.value.length), 1),
                    ]),
                  ]),
                  default: y(() => [
                    g("div", pc, [
                      (A(!0),
                      ge(
                        Be,
                        null,
                        st(
                          f.value,
                          (ee, $) => (
                            A(),
                            ge(
                              "div",
                              {
                                class: "row items-center full-width",
                                key: $,
                              },
                              [
                                g("div", fc, [
                                  h(
                                    rt,
                                    {
                                      square: "",
                                      color: "primary",
                                      "text-color": "white",
                                    },
                                    {
                                      default: y(() => [ue(V(ee.from), 1)]),
                                      _: 2,
                                    },
                                    1024
                                  ),
                                  h(oe, {
                                    name: "img:/monitoring/poi/edge.svg",
                                  }),
                                  h(
                                    rt,
                                    {
                                      square: "",
                                      color: "primary",
                                      "text-color": "white",
                                    },
                                    {
                                      default: y(() => [ue(V(ee.to), 1)]),
                                      _: 2,
                                    },
                                    1024
                                  ),
                                ]),
                                h(ze),
                                g("div", gc, [
                                  h(
                                    J,
                                    {
                                      rounded: "",
                                      dense: "",
                                      color: "grey-7",
                                      label: "edit",
                                      onClick: no((H) => Q(ee, $), ["stop"]),
                                    },
                                    null,
                                    8,
                                    ["onClick"]
                                  ),
                                ]),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ]),
                  _: 1,
                }
              ),
            ]
          )
        );
      };
    },
  }),
  yc = {
    class: "row items-center full-width",
  },
  vc = {
    class: "col-auto",
  },
  _c = {
    class: "col-auto",
  },
  xc = {
    class: "row q-mx-md q-my-sm q-col-gutter-x-sm",
  },
  Dc = {
    class: "col-6",
  },
  wc = {
    class: "col-6",
  },
  bc = {
    class: "row q-mx-sm q-mt-md",
  },
  Cc = {
    class: "row items-center full-width",
  },
  Ec = g(
    "div",
    {
      class: "col-auto",
    },
    "Parameters",
    -1
  ),
  Ac = {
    class: "col-auto",
  },
  kc = {
    class: "row justify-center q-mx-md",
  },
  Fc = {
    class: "row q-mx-sm q-mt-md",
  },
  Pc = {
    class: "row items-center full-width",
  },
  Sc = g(
    "div",
    {
      class: "col-auto",
    },
    "Parameters",
    -1
  ),
  Tc = {
    class: "col-auto",
  },
  $c = {
    class: "row justify-center q-mx-md",
  },
  Mc = {
    key: 1,
    class: "row justify-center",
  },
  Bc = Te({
    __name: "FormEdge",
    setup(n) {
      const { fmzMode: s, fmzTarget: e } = Ye(Fe()),
        { selectedResource: t } = Fe(),
        o = To(t),
        i = o.shape,
        a = i.editingStatus$,
        r = gt(),
        u = N("Edge"),
        l = N(0),
        c = N(0),
        d = N(0),
        f = N(),
        v = N(),
        w = N("0"),
        E = [
          {
            label: "-->",
            value: 1,
            description: "",
            icon: "img:/monitoring/poi/edge_type1.svg",
            icon2: "img:/monitoring/poi/edge.svg",
          },
          {
            label: "<--",
            value: 2,
            description: "",
            icon: "img:/monitoring/poi/edge_type2.svg",
            icon2: "img:/monitoring/poi/edgeR.svg",
          },
          {
            label: "<->",
            value: 3,
            description: "",
            icon: "img:/monitoring/poi/edge_type3.svg",
            icon2: "img:/monitoring/poi/edge2.svg",
          },
        ],
        C = N(),
        x = () => {
          console.log("[FormEdge]::remove", f.value, v.value);
          const X = `Remove Edges Between ${l.value} and ${c.value}`,
            B = "Do you want to delete it?";
          f.value &&
            f.value.from > -1 &&
            O(X, B).onOk(() => {
              const T = o.edges.findIndex((K) => {
                var R;
                return (
                  K.from == ((R = f.value) == null ? void 0 : R.from) &&
                  K.to == f.value.to
                );
              });
              T > -1 && o.edges.splice(T, 1), (f.value = void 0);
              let ae = "Edge is removed.";
              if (v.value) {
                const K = o.edges.findIndex((R) => {
                  var M;
                  return (
                    R.from == ((M = v.value) == null ? void 0 : M.from) &&
                    R.to == v.value.to
                  );
                });
                K > -1 && o.edges.splice(K, 1),
                  (v.value = void 0),
                  (ae = "Edges are removed.");
              }
              Q(ae, "positive"),
                (s.value = "graph"),
                (e.value = -1),
                i.setEditMode("graph"),
                i.edit();
            });
        },
        b = () => {
          const X = C.value.value;
          if (
            (console.log("[FormEdge]::change-edge-type", X, l.value, c.value),
            m(l.value, c.value),
            X == 1)
          ) {
            const B = new jt({
              from: l.value,
              to: c.value,
            });
            o.edges.push(B),
              (f.value = void 0),
              (v.value = void 0),
              i.edit(),
              i.setEdgeEditor(B),
              (e.value = B);
          }
          if (X == 2) {
            const B = new jt({
              from: c.value,
              to: l.value,
            });
            o.edges.push(B),
              (f.value = void 0),
              (v.value = void 0),
              i.edit(),
              i.setEdgeEditor(B),
              (e.value = B);
          }
          if (X == 3) {
            const B = new jt({
                from: l.value,
                to: c.value,
              }),
              T = new jt({
                from: c.value,
                to: l.value,
              });
            o.edges.push(T),
              o.edges.push(B),
              (f.value = void 0),
              (v.value = void 0),
              i.edit(),
              i.setEdgeEditor(B),
              (e.value = B);
          }
        };
      function m(X, B) {
        const T = o.edges.findIndex((K) => K.from == X && K.to == B),
          ae = o.edges.findIndex((K) => K.from == B && K.to == X);
        T > -1 && o.edges.splice(T, 1), ae > -1 && o.edges.splice(ae, 1);
      }
      a.subscribe((X) => {
        X.mode == "del-edge" &&
          (console.log("@@__[FormEdge]::editingStatus$::del-edge", X), x());
      }),
        Je(
          e,
          (X, B) => {
            console.log("@@__[FormEdge::watch-target", X, B, s.value, e);
            const T = e.value;
            (f.value = T),
              (v.value = D(T.from, T.to)),
              (w.value = k(T)),
              (l.value = T.from),
              (c.value = T.to),
              (C.value = v.value ? E[2] : E[0]),
              d.value++;
          },
          {
            immediate: !0,
          }
        );
      function _(X) {
        return o.nodes.find((B) => B.index == X);
      }
      function D(X, B) {
        return o.edges.find((T) => T.from == B && T.to == X);
      }
      function k(X) {
        var R, M, Z, P;
        const B =
            (M = (R = _(X.from)) == null ? void 0 : R.pose) != null
              ? M
              : {
                  x: 0,
                  y: 0,
                },
          T =
            (P = (Z = _(X.to)) == null ? void 0 : Z.pose) != null
              ? P
              : {
                  x: 0,
                  y: 0,
                },
          ae = (T.x - B.x) ** 2,
          K = (T.y - B.y) ** 2;
        return Math.sqrt(ae + K).toFixed(2);
      }
      function O(X, B) {
        return r.dialog({
          title: X,
          message: B,
          cancel: !0,
          persistent: !0,
        });
      }
      function Q(X, B = "primary") {
        return r.notify({
          message: X,
          color: B,
        });
      }
      return (X, B) =>
        f.value
          ? (A(),
            ge(
              "div",
              {
                class: "col-12",
                key: d.value,
              },
              [
                h(
                  Ue,
                  {
                    "switch-toggle-side": "",
                    "default-opened": "",
                    "expand-icon": "arrow_drop_down",
                    class: "q-mb-lg",
                  },
                  {
                    header: y(() => [
                      g("div", yc, [
                        g("div", vc, V(u.value), 1),
                        h(ze),
                        g("div", _c, [
                          h(
                            rt,
                            {
                              square: "",
                              color: "primary",
                              "text-color": "white",
                            },
                            {
                              default: y(() => [ue(V(f.value.from), 1)]),
                              _: 1,
                            }
                          ),
                          h(
                            oe,
                            {
                              name: C.value.icon2,
                            },
                            null,
                            8,
                            ["name"]
                          ),
                          h(
                            rt,
                            {
                              square: "",
                              color: "primary",
                              "text-color": "white",
                            },
                            {
                              default: y(() => [ue(V(f.value.to), 1)]),
                              _: 1,
                            }
                          ),
                          h(J, {
                            flat: "",
                            round: "",
                            dense: "",
                            size: "md",
                            color: "grey-7",
                            icon: "delete_forever",
                            onClick: B[0] || (B[0] = no((T) => x(), ["stop"])),
                          }),
                        ]),
                      ]),
                    ]),
                    default: y(() => [
                      g("div", xc, [
                        g("div", Dc, [
                          h(
                            Qe,
                            {
                              modelValue: w.value,
                              "onUpdate:modelValue":
                                B[1] || (B[1] = (T) => (w.value = T)),
                              label: "Length",
                              readonly: "",
                            },
                            null,
                            8,
                            ["modelValue"]
                          ),
                        ]),
                        g("div", wc, [
                          h(
                            qs,
                            {
                              outlined: "",
                              dense: "",
                              "bg-color": "white",
                              modelValue: C.value,
                              "onUpdate:modelValue": [
                                B[2] || (B[2] = (T) => (C.value = T)),
                                B[3] || (B[3] = (T) => b()),
                              ],
                              options: E,
                            },
                            {
                              option: y((T) => [
                                h(
                                  Ve,
                                  As(la(T.itemProps)),
                                  {
                                    default: y(() => [
                                      h(
                                        $e,
                                        null,
                                        {
                                          default: y(() => [
                                            h(
                                              oe,
                                              {
                                                name: T.opt.icon,
                                                size: "28px",
                                              },
                                              null,
                                              8,
                                              ["name"]
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1040
                                ),
                              ]),
                              selected: y(() => [
                                h(
                                  oe,
                                  {
                                    name: C.value.icon,
                                    size: "28px",
                                  },
                                  null,
                                  8,
                                  ["name"]
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["modelValue"]
                          ),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
                f.value
                  ? (A(),
                    ge(
                      Be,
                      {
                        key: 0,
                      },
                      [
                        g("div", bc, [
                          g("div", null, [
                            h(
                              rt,
                              {
                                square: "",
                                color: "primary",
                                "text-color": "white",
                              },
                              {
                                default: y(() => [ue(V(f.value.from), 1)]),
                                _: 1,
                              }
                            ),
                            h(oe, {
                              name: "img:/monitoring/poi/edge.svg",
                            }),
                            h(
                              rt,
                              {
                                square: "",
                                color: "primary",
                                "text-color": "white",
                              },
                              {
                                default: y(() => [ue(V(f.value.to), 1)]),
                                _: 1,
                              }
                            ),
                          ]),
                          h(ze),
                        ]),
                        h(
                          Ue,
                          {
                            dense: "",
                            "switch-toggle-side": "",
                            "model-value": f.value.hasOption,
                            "expand-icon": "arrow_drop_down",
                            class: "q-ml-md",
                          },
                          {
                            header: y(() => [
                              g("div", Cc, [
                                Ec,
                                h(ze),
                                g("div", Ac, [
                                  h(
                                    _t,
                                    {
                                      modelValue: f.value.hasOption,
                                      "onUpdate:modelValue":
                                        B[4] ||
                                        (B[4] = (T) => (f.value.hasOption = T)),
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                ]),
                              ]),
                            ]),
                            default: y(() => [
                              g("div", kc, [
                                h(
                                  Qe,
                                  {
                                    modelValue: f.value.maxSpeed,
                                    "onUpdate:modelValue":
                                      B[5] ||
                                      (B[5] = (T) => (f.value.maxSpeed = T)),
                                    modelModifiers: {
                                      number: !0,
                                    },
                                    label: "Max Speed",
                                    type: "number",
                                    disable: !f.value.hasOption,
                                  },
                                  null,
                                  8,
                                  ["modelValue", "disable"]
                                ),
                                h(
                                  Qe,
                                  {
                                    modelValue: f.value.maxAccel,
                                    "onUpdate:modelValue":
                                      B[6] ||
                                      (B[6] = (T) => (f.value.maxAccel = T)),
                                    modelModifiers: {
                                      number: !0,
                                    },
                                    label: "Max Accel",
                                    type: "number",
                                    disable: !f.value.hasOption,
                                  },
                                  null,
                                  8,
                                  ["modelValue", "disable"]
                                ),
                                h(
                                  Qe,
                                  {
                                    modelValue: f.value.angularSpeed,
                                    "onUpdate:modelValue":
                                      B[7] ||
                                      (B[7] = (T) =>
                                        (f.value.angularSpeed = T)),
                                    modelModifiers: {
                                      number: !0,
                                    },
                                    label: "Angular Speed",
                                    type: "number",
                                    disable: !f.value.hasOption,
                                  },
                                  null,
                                  8,
                                  ["modelValue", "disable"]
                                ),
                                h(
                                  _t,
                                  {
                                    "left-label": "",
                                    modelValue: f.value.backward,
                                    "onUpdate:modelValue":
                                      B[8] ||
                                      (B[8] = (T) => (f.value.backward = T)),
                                    label: "Backward",
                                    disable: !f.value.hasOption,
                                  },
                                  null,
                                  8,
                                  ["modelValue", "disable"]
                                ),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["model-value"]
                        ),
                      ],
                      64
                    ))
                  : he("", !0),
                v.value
                  ? (A(),
                    ge(
                      Be,
                      {
                        key: 1,
                      },
                      [
                        g("div", Fc, [
                          g("div", null, [
                            h(
                              rt,
                              {
                                square: "",
                                color: "primary",
                                "text-color": "white",
                              },
                              {
                                default: y(() => [ue(V(v.value.from), 1)]),
                                _: 1,
                              }
                            ),
                            h(oe, {
                              name: "img:/monitoring/poi/edge.svg",
                            }),
                            h(
                              rt,
                              {
                                square: "",
                                color: "primary",
                                "text-color": "white",
                              },
                              {
                                default: y(() => [ue(V(v.value.to), 1)]),
                                _: 1,
                              }
                            ),
                          ]),
                          h(ze),
                        ]),
                        h(
                          Ue,
                          {
                            dense: "",
                            "switch-toggle-side": "",
                            "model-value": v.value.hasOption,
                            "expand-icon": "arrow_drop_down",
                            class: "q-ml-md",
                          },
                          {
                            header: y(() => [
                              g("div", Pc, [
                                Sc,
                                h(ze),
                                g("div", Tc, [
                                  h(
                                    _t,
                                    {
                                      modelValue: v.value.hasOption,
                                      "onUpdate:modelValue":
                                        B[9] ||
                                        (B[9] = (T) => (v.value.hasOption = T)),
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                ]),
                              ]),
                            ]),
                            default: y(() => [
                              g("div", $c, [
                                h(
                                  Qe,
                                  {
                                    modelValue: v.value.maxSpeed,
                                    "onUpdate:modelValue":
                                      B[10] ||
                                      (B[10] = (T) => (v.value.maxSpeed = T)),
                                    modelModifiers: {
                                      number: !0,
                                    },
                                    label: "Max Speed",
                                    type: "number",
                                    disable: !v.value.hasOption,
                                  },
                                  null,
                                  8,
                                  ["modelValue", "disable"]
                                ),
                                h(
                                  Qe,
                                  {
                                    modelValue: v.value.maxAccel,
                                    "onUpdate:modelValue":
                                      B[11] ||
                                      (B[11] = (T) => (v.value.maxAccel = T)),
                                    modelModifiers: {
                                      number: !0,
                                    },
                                    label: "Max Accel",
                                    type: "number",
                                    disable: !v.value.hasOption,
                                  },
                                  null,
                                  8,
                                  ["modelValue", "disable"]
                                ),
                                h(
                                  Qe,
                                  {
                                    modelValue: v.value.angularSpeed,
                                    "onUpdate:modelValue":
                                      B[12] ||
                                      (B[12] = (T) =>
                                        (v.value.angularSpeed = T)),
                                    modelModifiers: {
                                      number: !0,
                                    },
                                    label: "Angular Speed",
                                    type: "number",
                                    disable: !v.value.hasOption,
                                  },
                                  null,
                                  8,
                                  ["modelValue", "disable"]
                                ),
                                h(
                                  _t,
                                  {
                                    "left-label": "",
                                    modelValue: v.value.backward,
                                    "onUpdate:modelValue":
                                      B[13] ||
                                      (B[13] = (T) => (v.value.backward = T)),
                                    label: "Backward",
                                    disable: !v.value.hasOption,
                                  },
                                  null,
                                  8,
                                  ["modelValue", "disable"]
                                ),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["model-value"]
                        ),
                      ],
                      64
                    ))
                  : he("", !0),
              ]
            ))
          : (A(), ge("div", Mc, "Edge is not selected!"));
    },
  }),
  Ic = Te({
    __name: "FormMain",
    setup(n) {
      const s = qe("fmz"),
        { fmzMode: e, fmzTarget: t } = Ye(Fe()),
        {
          selectedResource: o,
          changeMode: i,
          setViewingFmz: a,
          setEmptyResource: r,
        } = Fe(),
        u = To(o),
        l = u.shape,
        c = gt();
      l.editingStatus$.subscribe((D) => {
        var O;
        console.log("@@__[FormMain]::editingStatus$", D),
          ["area", "graph", "node", "edge"].includes(D.mode) &&
            ((e.value = D.mode), (t.value = (O = D.target) != null ? O : -1));
      });
      const f = () => {
          x("Save FMZ", "Do you want to save it?").onOk(async () => {
            const O = u.serialize();
            console.log("@___[FMZ-FormMain]::save", O);
            const Q = u.id;
            try {
              Q == "new-id" ? await E(u) : await C(u);
              const X = `FMZ '${u.name}' has saved.`;
              m(X, "positive");
            } catch (X) {
              const B = X;
              _(B, "Error: Save FMZ"),
                console.log("[ResourceCard]::save::error", B.response);
            }
          });
        },
        v = () => {
          console.log("@_[FMZ Card]::cancel", o),
            b("Editing FMZ", "Do you want to exit without saving it?").onOk(
              () => {
                var Q;
                const O = (Q = u.id) != null ? Q : "";
                s == null || s.stageService.closeEditingResource(O), r();
              }
            );
        },
        w = () => {
          console.log("@_[FMZ Card]::back", o),
            e.value == "node" && l.removeNodeEditor(),
            e.value == "edge" && l.removeEdgeEditor(),
            (e.value = "graph"),
            (t.value = -1);
        };
      async function E(D) {
        const k = D.serialize(),
          O = await Ut("FMZ", k).catch((Q) => {
            throw Q;
          });
        if (O.id) {
          const Q = O.id;
          (D.id = Q), D.created();
          const X = D.serialize();
          s == null || s.stageService.closeEditingResource("");
          const B = s == null ? void 0 : s.loadFmz(X);
          B && a(B, "area", -1);
        }
      }
      async function C(D) {
        const k = D.serialize();
        if (
          await Vo("FMZ", k).catch((Q) => {
            throw Q;
          })
        ) {
          D.updated(), s == null || s.stageService.closeEditingResource("");
          const Q = D.serialize(),
            X = s == null ? void 0 : s.loadFmz(Q);
          X && a(X, "area", -1);
        }
      }
      function x(D, k) {
        return c.dialog({
          title: D,
          message: k,
          cancel: !0,
          persistent: !0,
        });
      }
      function b(D, k) {
        return c.dialog({
          title: D,
          message: k,
          cancel: "Edit",
          ok: "Exit",
          persistent: !0,
        });
      }
      function m(D, k = "primary") {
        return c.notify({
          message: D,
          color: k,
        });
      }
      function _(D, k) {
        var X;
        const O = (X = D.response) == null ? void 0 : X.data;
        let Q = `<div>[${O.error.code}] ${O.error.message}</div>`;
        (Q += `<div>${O.error.reason}</div>`),
          c.dialog({
            title: k,
            message: Q,
            html: !0,
          });
      }
      return (D, k) => (
        A(),
        q(Oa, null, {
          default: y(() => [
            h(kt, null, {
              default: y(() => [
                h(
                  $t,
                  {
                    class: "text-h6 row items-center no-wrap",
                  },
                  {
                    default: y(() => [ue(" Edit ")]),
                    _: 1,
                  }
                ),
                W(e) == "area" || W(e) == "graph"
                  ? (A(),
                    ge(
                      Be,
                      {
                        key: 0,
                      },
                      [
                        h(J, {
                          round: "",
                          icon: "save",
                          flat: "",
                          dense: "",
                          onClick: f,
                        }),
                        h(ct, {
                          class: "q-my-md",
                          vertical: "",
                        }),
                        h(J, {
                          round: "",
                          icon: "close",
                          flat: "",
                          dense: "",
                          onClick: v,
                        }),
                      ],
                      64
                    ))
                  : (A(),
                    q(J, {
                      key: 1,
                      round: "",
                      icon: "chevron_left",
                      flat: "",
                      dense: "",
                      onClick: w,
                    })),
              ]),
              _: 1,
            }),
            W(e) == "area"
              ? (A(),
                q(_l, {
                  key: 0,
                }))
              : he("", !0),
            W(e) == "graph"
              ? (A(),
                q(Bl, {
                  key: 1,
                }))
              : he("", !0),
            W(e) == "node"
              ? (A(),
                q(mc, {
                  key: 2,
                }))
              : he("", !0),
            W(e) == "edge"
              ? (A(),
                q(Bc, {
                  key: 3,
                }))
              : he("", !0),
          ]),
          _: 1,
        })
      );
    },
  });
function Rc(n) {
  const s = n.shape.mapTool.getMapName(),
    e = n.area,
    t = `
    ${e.x.toFixed(2)},
    ${e.y.toFixed(2)},
    ${(e.degree * -1).toFixed(2)}`;
  return {
    mapName: s,
    poseStr: `(${t})`,
  };
}
function $i(n) {
  const s = n instanceof eo ? n : n.area,
    e = `Width: ${s.width.toFixed(2)}`,
    t = `Height: ${s.height.toFixed(2)}`;
  return {
    widthStr: e,
    heightStr: t,
  };
}
function jo(n) {
  let s = "-";
  return (
    n &&
      (s = `(${n.x.toFixed(2)},
      ${n.y.toFixed(2)},
      ${(n.degree * -1).toFixed(0)})`),
    s
  );
}
function Ro(n) {
  return [
    `Landform: ${n.landform}`,
    `Max Speed: ${n.max_speed}`,
    `Max Angular Speed: ${n.max_angular_speed}`,
  ];
}
function Mi(n) {
  let s = "-";
  if (n)
    try {
      s = `(${n.x.toFixed(2)},
        ${n.y.toFixed(2)})`;
    } catch (e) {
      console.log("[detail-info]::getPointStr", e);
    }
  return s;
}
const i0 = (n) => {
    const s = G(() => n.value.shape.mapTool.getMapName()),
      e = G(() => jo(n.value.pose));
    return {
      mapName: s,
      poseStr: e,
      getPoseStr: jo,
    };
  },
  n0 = (n) => {
    const s = [];
    return (
      s.push(`id: ${n.id}, rid: ${n.rid}`),
      s.push(`x: ${n.x}, y: ${n.y}, z: ${n.z} (m)`),
      s.push(`rx: ${n.rx}, ry: ${n.ry}, rz: ${n.rz} (d)`),
      s
    );
  },
  a0 = (n) => {
    const s = G(() => n.value.shape.mapTool.getMapName()),
      e = G(() => {
        const { poseStr: i } = Rc(n.value);
        return i;
      }),
      t = G(() => {
        const { widthStr: i } = $i(n.value);
        return i;
      }),
      o = G(() => {
        const { heightStr: i } = $i(n.value);
        return i;
      });
    return {
      mapName: s,
      areaPose: e,
      width: t,
      height: o,
      getPoseStr: jo,
    };
  },
  r0 = (n) => {
    const s = G(() => Ro(n.value.inUpParam)),
      e = G(() => Ro(n.value.inDownParam)),
      t = G(() => Ro(n.value.outUpParam)),
      o = G(() => Ro(n.value.outDownParam));
    return {
      inUpParam: s,
      inDownParam: e,
      outUpParam: t,
      outDownParam: o,
    };
  },
  Lc = (n) => {
    const s = G(() => n.value.shape.mapTool.getMapName()),
      e = G(() => {
        const t = n.value.shape.mapTool.getCentroidM2PX(n.value.polygon),
          o = n.value.shape.mapTool.transformPointPX2M(t);
        return Mi(o);
      });
    return {
      mapName: s,
      centroidStr: e,
      getPointStr: Mi,
      getPoseStr: jo,
    };
  },
  Oc = {
    class: "col-12",
  },
  Nc = {
    class: "row q-pa-sm q-col-gutter-sm",
  },
  zc = g(
    "div",
    {
      class: "col-4",
    },
    "ID",
    -1
  ),
  Wc = {
    class: "col-8 text-grey-7",
  },
  Gc = g(
    "div",
    {
      class: "col-4",
    },
    "Description",
    -1
  ),
  Vc = {
    class: "col-8 text-grey-7",
  },
  qc = g(
    "div",
    {
      class: "col-4",
    },
    "Position",
    -1
  ),
  Xc = {
    class: "col-8 text-grey-7",
  },
  Qc = g(
    "div",
    {
      class: "col-4",
    },
    "Polygon",
    -1
  ),
  Zc = {
    class: "col-8 text-grey-7",
  },
  Uc = g(
    "div",
    {
      class: "col-4",
    },
    "Node Count",
    -1
  ),
  jc = {
    class: "col-8 text-grey-7",
  },
  Yc = g(
    "div",
    {
      class: "col-4",
    },
    "Edge Count",
    -1
  ),
  Hc = {
    class: "col-8 text-grey-7",
  },
  Kc = g(
    "div",
    {
      class: "col-4",
    },
    "Preempt Node Length",
    -1
  ),
  Jc = {
    class: "col-8 text-grey-7",
  },
  ed = g(
    "div",
    {
      class: "col-4",
    },
    "Velocity",
    -1
  ),
  td = {
    class: "col-8 text-grey-7",
  },
  od = g(
    "div",
    {
      class: "col-4",
    },
    "Detour",
    -1
  ),
  sd = {
    class: "col-8 text-grey-7",
  },
  id = g(
    "div",
    {
      class: "col-4",
    },
    "Delay",
    -1
  ),
  nd = {
    class: "col-8 text-grey-7",
  },
  ad = g(
    "div",
    {
      class: "col-4",
    },
    "Entry Tolerance",
    -1
  ),
  rd = {
    class: "col-8 text-grey-7",
  },
  ud = g(
    "div",
    {
      class: "col-4",
    },
    "Exit Tolerance",
    -1
  ),
  ld = {
    class: "col-8 text-grey-7",
  },
  cd = g(
    "div",
    {
      class: "col-4",
    },
    "Entry Point Tolerance",
    -1
  ),
  dd = {
    class: "col-8 text-grey-7",
  },
  hd = g(
    "div",
    {
      class: "col-4",
    },
    "Node Count",
    -1
  ),
  pd = {
    class: "col-8 text-grey-7",
  },
  fd = g(
    "div",
    {
      class: "col-4",
    },
    "Index",
    -1
  ),
  gd = {
    class: "col-8 text-grey-7",
  },
  md = g(
    "div",
    {
      class: "col-4",
    },
    "Type",
    -1
  ),
  yd = {
    class: "col-8 text-grey-7",
  },
  vd = g(
    "div",
    {
      class: "col-4",
    },
    "Pose",
    -1
  ),
  _d = {
    class: "col-8 text-grey-7",
  },
  xd = g(
    "div",
    {
      class: "col-4",
    },
    "Parameters",
    -1
  ),
  Dd = {
    class: "col-8 text-grey-7",
  },
  wd = g(
    "div",
    {
      class: "col-4",
    },
    "Tolerance Radius",
    -1
  ),
  bd = {
    class: "col-8 text-grey-7",
  },
  Cd = g(
    "div",
    {
      class: "col-4",
    },
    "Max Speed",
    -1
  ),
  Ed = {
    class: "col-8 text-grey-7",
  },
  Ad = g(
    "div",
    {
      class: "col-4",
    },
    "Max Accel",
    -1
  ),
  kd = {
    class: "col-8 text-grey-7",
  },
  Fd = g(
    "div",
    {
      class: "col-4",
    },
    "Angular Speed",
    -1
  ),
  Pd = {
    class: "col-8 text-grey-7",
  },
  Sd = g(
    "div",
    {
      class: "col-4",
    },
    "Edge Count",
    -1
  ),
  Td = {
    class: "col-8 text-grey-7",
  },
  $d = {
    class: "col-12",
  },
  Md = g(
    "div",
    {
      class: "col-4",
    },
    "Length",
    -1
  ),
  Bd = {
    class: "col-8 text-grey-7",
  },
  Id = g(
    "div",
    {
      class: "col-4",
    },
    "Parameters",
    -1
  ),
  Rd = {
    class: "col-8 text-grey-7",
  },
  Ld = g(
    "div",
    {
      class: "col-4",
    },
    "Max Speed",
    -1
  ),
  Od = {
    class: "col-8 text-grey-7",
  },
  Nd = g(
    "div",
    {
      class: "col-4",
    },
    "Max Accel",
    -1
  ),
  zd = {
    class: "col-8 text-grey-7",
  },
  Wd = g(
    "div",
    {
      class: "col-4",
    },
    "Angular Speed",
    -1
  ),
  Gd = {
    class: "col-8 text-grey-7",
  },
  Vd = g(
    "div",
    {
      class: "col-4",
    },
    "Backward",
    -1
  ),
  qd = {
    class: "col-8 text-grey-7",
  },
  Xd = {
    class: "col-12",
  },
  Qd = g(
    "div",
    {
      class: "col-4",
    },
    "Length",
    -1
  ),
  Zd = {
    class: "col-8 text-grey-7",
  },
  Ud = g(
    "div",
    {
      class: "col-4",
    },
    "Parameters",
    -1
  ),
  jd = {
    class: "col-8 text-grey-7",
  },
  Yd = g(
    "div",
    {
      class: "col-4",
    },
    "Max Speed",
    -1
  ),
  Hd = {
    class: "col-8 text-grey-7",
  },
  Kd = g(
    "div",
    {
      class: "col-4",
    },
    "Max Accel",
    -1
  ),
  Jd = {
    class: "col-8 text-grey-7",
  },
  eh = g(
    "div",
    {
      class: "col-4",
    },
    "Angular Speed",
    -1
  ),
  th = {
    class: "col-8 text-grey-7",
  },
  oh = g(
    "div",
    {
      class: "col-4",
    },
    "Occupied",
    -1
  ),
  sh = {
    class: "col-8 text-grey-7",
  },
  ih = Te({
    __name: "DetailMain",
    setup(n) {
      const { selectedResource: s, fmzMode: e, fmzTarget: t } = Ye(Fe()),
        o = s,
        { mapName: i, centroidStr: a, getPointStr: r, getPoseStr: u } = Lc(o),
        l = N(!1),
        c = N(0),
        d = N(),
        f = N(),
        v = N(),
        w = N("0"),
        E = N("0");
      Je(
        t,
        (m, _) => {
          if (
            (console.log("@@__[FMZ Detail]::watch", m, _, e.value, t),
            e.value == "node")
          ) {
            const D = t.value;
            d.value = C(D);
          }
          if (e.value == "edge") {
            const D = t.value;
            (f.value = D),
              (v.value = x(D.from, D.to)),
              (w.value = b(D)),
              v.value && (E.value = b(v.value));
          }
          c.value++;
        },
        {
          immediate: !0,
        }
      ),
        console.log("@@__[FMZ Detail]::init", e, t);
      function C(m) {
        return o.value.nodes.find((_) => _.index == m);
      }
      function x(m, _) {
        return o.value.edges.find((D) => D.from == _ && D.to == m);
      }
      function b(m) {
        var Q, X, B, T;
        const _ =
            (X = (Q = C(m.from)) == null ? void 0 : Q.pose) != null
              ? X
              : {
                  x: 0,
                  y: 0,
                },
          D =
            (T = (B = C(m.to)) == null ? void 0 : B.pose) != null
              ? T
              : {
                  x: 0,
                  y: 0,
                },
          k = (D.x - _.x) ** 2,
          O = (D.y - _.y) ** 2;
        return Math.sqrt(k + O).toFixed(2);
      }
      return (m, _) => {
        var D, k, O, Q, X, B, T, ae, K, R, M, Z, P, S, te;
        return W(o)
          ? (A(),
            ge(
              "div",
              {
                class: "row q-col-gutter-sm q-pa-md items-center text-caption",
                key: c.value,
              },
              [
                g("div", Oc, [
                  h(
                    Ue,
                    {
                      dense: "",
                      "dense-toggle": "",
                      label: "Information",
                      "header-class": "q-pa-none text-weight-medium",
                    },
                    {
                      default: y(() => [
                        g("div", Nc, [
                          zc,
                          g("div", Wc, V(W(o).id), 1),
                          Gc,
                          g("div", Vc, V(W(o).description), 1),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                W(e) == "area"
                  ? (A(),
                    ge(
                      Be,
                      {
                        key: 0,
                      },
                      [
                        qc,
                        g("div", Xc, [
                          g("div", null, V(W(i)), 1),
                          g("div", null, V(W(a)), 1),
                        ]),
                        Qc,
                        g("div", Zc, [
                          (A(!0),
                          ge(
                            Be,
                            null,
                            st(
                              W(o).polygon,
                              (le, ee) => (
                                A(),
                                ge(
                                  "div",
                                  {
                                    key: ee,
                                  },
                                  V(`${ee + 1}. ${W(r)(le)}`),
                                  1
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        Uc,
                        g("div", jc, V(W(o).nodes.length), 1),
                        Yc,
                        g("div", Hc, V(W(o).edges.length), 1),
                        Kc,
                        g("div", Jc, V(W(o).preemptNodeLength), 1),
                        ed,
                        g("div", td, V(W(o).velocity), 1),
                        od,
                        g("div", sd, V(W(o).detour), 1),
                        id,
                        g("div", nd, V(W(o).delay), 1),
                        ad,
                        g("div", rd, V(W(o).entryTolerance), 1),
                        ud,
                        g("div", ld, V(W(o).exitTolerance), 1),
                        cd,
                        g("div", dd, V(W(o).entryPointTolerance), 1),
                      ],
                      64
                    ))
                  : he("", !0),
                W(e) == "node"
                  ? (A(),
                    ge(
                      Be,
                      {
                        key: 1,
                      },
                      [
                        hd,
                        g("div", pd, V(W(o).nodes.length), 1),
                        fd,
                        g(
                          "div",
                          gd,
                          V((D = d.value) == null ? void 0 : D.index),
                          1
                        ),
                        md,
                        g(
                          "div",
                          yd,
                          V((k = d.value) == null ? void 0 : k.type),
                          1
                        ),
                        vd,
                        g(
                          "div",
                          _d,
                          V(W(u)((O = d.value) == null ? void 0 : O.pose)),
                          1
                        ),
                        xd,
                        g(
                          "div",
                          Dd,
                          V((Q = d.value) == null ? void 0 : Q.hasOption),
                          1
                        ),
                        wd,
                        g(
                          "div",
                          bd,
                          V((X = d.value) == null ? void 0 : X.toleranceRadius),
                          1
                        ),
                        Cd,
                        g(
                          "div",
                          Ed,
                          V((B = d.value) == null ? void 0 : B.maxSpeed) +
                            " (m/s)",
                          1
                        ),
                        Ad,
                        g(
                          "div",
                          kd,
                          V((T = d.value) == null ? void 0 : T.maxAccel),
                          1
                        ),
                        Fd,
                        g(
                          "div",
                          Pd,
                          V((ae = f.value) == null ? void 0 : ae.angularSpeed) +
                            " (d/s) ",
                          1
                        ),
                      ],
                      64
                    ))
                  : he("", !0),
                W(e) == "edge"
                  ? (A(),
                    ge(
                      Be,
                      {
                        key: 2,
                      },
                      [
                        Sd,
                        g("div", Td, V(W(o).edges.length), 1),
                        g(
                          "div",
                          $d,
                          V((K = f.value) == null ? void 0 : K.from) +
                            " -> " +
                            V((R = f.value) == null ? void 0 : R.to),
                          1
                        ),
                        Md,
                        g("div", Bd, V(w.value) + " (m)", 1),
                        Id,
                        g(
                          "div",
                          Rd,
                          V((M = f.value) == null ? void 0 : M.hasOption),
                          1
                        ),
                        Ld,
                        g(
                          "div",
                          Od,
                          V((Z = f.value) == null ? void 0 : Z.maxSpeed) +
                            " (m/s)",
                          1
                        ),
                        Nd,
                        g(
                          "div",
                          zd,
                          V((P = f.value) == null ? void 0 : P.maxAccel),
                          1
                        ),
                        Wd,
                        g(
                          "div",
                          Gd,
                          V((S = f.value) == null ? void 0 : S.angularSpeed) +
                            " (d/s) ",
                          1
                        ),
                        Vd,
                        g(
                          "div",
                          qd,
                          V((te = f.value) == null ? void 0 : te.backward),
                          1
                        ),
                        v.value
                          ? (A(),
                            ge(
                              Be,
                              {
                                key: 0,
                              },
                              [
                                g(
                                  "div",
                                  Xd,
                                  V(v.value.from) + " -> " + V(v.value.to),
                                  1
                                ),
                                Qd,
                                g("div", Zd, V(E.value) + " (m)", 1),
                                Ud,
                                g("div", jd, V(v.value.hasOption), 1),
                                Yd,
                                g("div", Hd, V(v.value.maxSpeed) + " (m/s)", 1),
                                Kd,
                                g("div", Jd, V(v.value.maxAccel), 1),
                                eh,
                                g(
                                  "div",
                                  th,
                                  V(v.value.angularSpeed) + " (d/s) ",
                                  1
                                ),
                              ],
                              64
                            ))
                          : he("", !0),
                      ],
                      64
                    ))
                  : he("", !0),
                oh,
                g("div", sh, [
                  h(
                    _t,
                    {
                      modelValue: l.value,
                      "onUpdate:modelValue":
                        _[0] || (_[0] = (le) => (l.value = le)),
                    },
                    null,
                    8,
                    ["modelValue"]
                  ),
                ]),
              ]
            ))
          : he("", !0);
      };
    },
  }),
  nh = Te({
    __name: "FmzCard",
    setup(n) {
      const s = qe("fmz"),
        {
          selectedResource: e,
          mode: t,
          fmzMode: o,
          fmzTarget: i,
          drawerLeft: a,
        } = Ye(Fe()),
        {
          setEditingFmz: r,
          setViewingFmz: u,
          closeDrawerRight: l,
          setEmptyResource: c,
        } = Fe(),
        d = gt();
      console.log("@@@___[FmzCard]::init", t, e);
      const f = () => {
          c(), l();
        },
        v = () => {
          const b = e.value;
          console.log("@_[FMZ Card]::edit", e, b);
          const m = b == null ? void 0 : b.serialize(),
            _ = s == null ? void 0 : s.cloneFmz(m),
            D = _ == null ? void 0 : _.shape;
          D.setEditMode(o.value),
            s == null || s.editFmz(),
            _ && r(_, o.value, i.value),
            console.log("[FmzCard]::edit", _, o.value, i.value),
            D.setEditTarget(o.value, i.value),
            (a.value = !1);
        },
        w = async () => {
          const b = e.value,
            m = `Remove ${b.name} (FMZ)`;
          E(m, "Do you want to remove it?").onOk(async () => {
            const D = b == null ? void 0 : b.id;
            await Vs(b)
              .then((k) => {
                var Q;
                b.deleted(), c();
                const O = `FMZ '${k.name}' has removed.`;
                x(O, "warning"),
                  D &&
                    ((Q = s == null ? void 0 : s.stageService) == null ||
                      Q.removeResource(D));
              })
              .catch((k) => {
                const O = k;
                O && C(O, "Error: Remove FMZ");
              });
          });
        };
      function E(b, m) {
        return d.dialog({
          title: b,
          message: m,
          cancel: !0,
          persistent: !0,
        });
      }
      function C(b, m) {
        var k;
        const _ = (k = b.response) == null ? void 0 : k.data;
        let D = `<div>[${_.error.code}] ${_.error.message}</div>`;
        (D += `<div>${_.error.reason}</div>`),
          d.dialog({
            title: m,
            message: D,
            html: !0,
          });
      }
      function x(b, m = "primary") {
        return d.notify({
          message: b,
          color: m,
        });
      }
      return (b, m) => (
        A(),
        q(
          yt,
          {
            flat: "",
            class: "my-card bg-transparent",
          },
          {
            default: y(() => [
              W(t) === "detail"
                ? (A(),
                  q(
                    kt,
                    {
                      key: 0,
                    },
                    {
                      default: y(() => [
                        h(J, {
                          round: "",
                          icon: "arrow_back_ios",
                          dense: "",
                          flat: "",
                          onClick: f,
                        }),
                        h($t, null, {
                          default: y(() => [
                            h(
                              St,
                              {
                                class: "text-subtitle1",
                              },
                              {
                                default: y(() => {
                                  var _;
                                  return [
                                    ue(
                                      V((_ = W(e)) == null ? void 0 : _.name),
                                      1
                                    ),
                                  ];
                                }),
                                _: 1,
                              }
                            ),
                            h(
                              St,
                              {
                                caption: "",
                                class: "text-grey-7",
                              },
                              {
                                default: y(() => [ue(" FMZ - " + V(W(o)), 1)]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }),
                        W(o) == "area"
                          ? (A(),
                            q(
                              wn,
                              {
                                key: 0,
                                rounded: "",
                                flat: "",
                                dense: "",
                                "no-icon-animation": "",
                                "dropdown-icon": "more_vert",
                              },
                              {
                                default: y(() => [
                                  h(vt, null, {
                                    default: y(() => [
                                      Ze(
                                        (A(),
                                        q(
                                          Ve,
                                          {
                                            clickable: "",
                                            onClick: v,
                                          },
                                          {
                                            default: y(() => [
                                              h(
                                                $e,
                                                {
                                                  avatar: "",
                                                },
                                                {
                                                  default: y(() => [
                                                    h(oe, {
                                                      name: "edit",
                                                      "text-color": "white",
                                                    }),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                              h($e, null, {
                                                default: y(() => [ue("Edit")]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        )),
                                        [[Nt]]
                                      ),
                                      Ze(
                                        (A(),
                                        q(
                                          Ve,
                                          {
                                            clickable: "",
                                            onClick: w,
                                          },
                                          {
                                            default: y(() => [
                                              h(
                                                $e,
                                                {
                                                  avatar: "",
                                                },
                                                {
                                                  default: y(() => [
                                                    h(oe, {
                                                      name: "delete_forever",
                                                      "text-color": "white",
                                                    }),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                              h($e, null, {
                                                default: y(() => [
                                                  h(St, null, {
                                                    default: y(() => [
                                                      ue("Remove"),
                                                    ]),
                                                    _: 1,
                                                  }),
                                                ]),
                                                _: 1,
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        )),
                                        [[Nt]]
                                      ),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }
                            ))
                          : (A(),
                            q(J, {
                              key: 1,
                              round: "",
                              icon: "edit",
                              flat: "",
                              dense: "",
                              onClick: v,
                            })),
                      ]),
                      _: 1,
                    }
                  ))
                : he("", !0),
              W(t) === "edit"
                ? (A(),
                  q(Ic, {
                    key: 1,
                  }))
                : (A(),
                  q(ih, {
                    key: 2,
                  })),
            ]),
            _: 1,
          }
        )
      );
    },
  });
function ah(n, ...s) {
  return (...e) => n(...s, ...e);
}
function Bo(n) {
  return function (...s) {
    var e = s.pop();
    return n.call(this, s, e);
  };
}
var rh = typeof queueMicrotask == "function" && queueMicrotask,
  bn = typeof setImmediate == "function" && setImmediate,
  Cn = typeof process == "object" && typeof process.nextTick == "function";
function En(n) {
  setTimeout(n, 0);
}
function An(n) {
  return (s, ...e) => n(() => s(...e));
}
var wo;
rh
  ? (wo = queueMicrotask)
  : bn
  ? (wo = setImmediate)
  : Cn
  ? (wo = process.nextTick)
  : (wo = En);
var Ht = An(wo);
function Ps(n) {
  return Io(n)
    ? function (...s) {
        const e = s.pop(),
          t = n.apply(this, s);
        return Bi(t, e);
      }
    : Bo(function (s, e) {
        var t;
        try {
          t = n.apply(this, s);
        } catch (o) {
          return e(o);
        }
        if (t && typeof t.then == "function") return Bi(t, e);
        e(null, t);
      });
}
function Bi(n, s) {
  return n.then(
    (e) => {
      Ii(s, null, e);
    },
    (e) => {
      Ii(s, e && e.message ? e : new Error(e));
    }
  );
}
function Ii(n, s, e) {
  try {
    n(s, e);
  } catch (t) {
    Ht((o) => {
      throw o;
    }, t);
  }
}
function Io(n) {
  return n[Symbol.toStringTag] === "AsyncFunction";
}
function uh(n) {
  return n[Symbol.toStringTag] === "AsyncGenerator";
}
function lh(n) {
  return typeof n[Symbol.asyncIterator] == "function";
}
function be(n) {
  if (typeof n != "function") throw new Error("expected a function");
  return Io(n) ? Ps(n) : n;
}
function De(n, s = n.length) {
  if (!s) throw new Error("arity is undefined");
  function e(...t) {
    return typeof t[s - 1] == "function"
      ? n.apply(this, t)
      : new Promise((o, i) => {
          (t[s - 1] = (a, ...r) => {
            if (a) return i(a);
            o(r.length > 1 ? r : r[0]);
          }),
            n.apply(this, t);
        });
  }
  return e;
}
function kn(n) {
  return function (e, ...t) {
    return De(function (i) {
      var a = this;
      return n(
        e,
        (r, u) => {
          be(r).apply(a, t.concat(u));
        },
        i
      );
    });
  };
}
function Qs(n, s, e, t) {
  s = s || [];
  var o = [],
    i = 0,
    a = be(e);
  return n(
    s,
    (r, u, l) => {
      var c = i++;
      a(r, (d, f) => {
        (o[c] = f), l(d);
      });
    },
    (r) => {
      t(r, o);
    }
  );
}
function is(n) {
  return (
    n && typeof n.length == "number" && n.length >= 0 && n.length % 1 === 0
  );
}
const ns = {};
function Vt(n) {
  function s(...e) {
    if (n !== null) {
      var t = n;
      (n = null), t.apply(this, e);
    }
  }
  return Object.assign(s, n), s;
}
function ch(n) {
  return n[Symbol.iterator] && n[Symbol.iterator]();
}
function dh(n) {
  var s = -1,
    e = n.length;
  return function () {
    return ++s < e
      ? {
          value: n[s],
          key: s,
        }
      : null;
  };
}
function hh(n) {
  var s = -1;
  return function () {
    var t = n.next();
    return t.done
      ? null
      : (s++,
        {
          value: t.value,
          key: s,
        });
  };
}
function ph(n) {
  var s = n ? Object.keys(n) : [],
    e = -1,
    t = s.length;
  return function o() {
    var i = s[++e];
    return i === "__proto__"
      ? o()
      : e < t
      ? {
          value: n[i],
          key: i,
        }
      : null;
  };
}
function fh(n) {
  if (is(n)) return dh(n);
  var s = ch(n);
  return s ? hh(s) : ph(n);
}
function qt(n) {
  return function (...s) {
    if (n === null) throw new Error("Callback was already called.");
    var e = n;
    (n = null), e.apply(this, s);
  };
}
function Ri(n, s, e, t) {
  let o = !1,
    i = !1,
    a = !1,
    r = 0,
    u = 0;
  function l() {
    r >= s ||
      a ||
      o ||
      ((a = !0),
      n
        .next()
        .then(({ value: f, done: v }) => {
          if (!(i || o)) {
            if (((a = !1), v)) {
              (o = !0), r <= 0 && t(null);
              return;
            }
            r++, e(f, u, c), u++, l();
          }
        })
        .catch(d));
  }
  function c(f, v) {
    if (((r -= 1), !i)) {
      if (f) return d(f);
      if (f === !1) {
        (o = !0), (i = !0);
        return;
      }
      if (v === ns || (o && r <= 0)) return (o = !0), t(null);
      l();
    }
  }
  function d(f) {
    i || ((a = !1), (o = !0), t(f));
  }
  l();
}
var bt = (n) => (s, e, t) => {
  if (((t = Vt(t)), n <= 0))
    throw new RangeError("concurrency limit cannot be less than 1");
  if (!s) return t(null);
  if (uh(s)) return Ri(s, n, e, t);
  if (lh(s)) return Ri(s[Symbol.asyncIterator](), n, e, t);
  var o = fh(s),
    i = !1,
    a = !1,
    r = 0,
    u = !1;
  function l(d, f) {
    if (!a)
      if (((r -= 1), d)) (i = !0), t(d);
      else if (d === !1) (i = !0), (a = !0);
      else {
        if (f === ns || (i && r <= 0)) return (i = !0), t(null);
        u || c();
      }
  }
  function c() {
    for (u = !0; r < n && !i; ) {
      var d = o();
      if (d === null) {
        (i = !0), r <= 0 && t(null);
        return;
      }
      (r += 1), e(d.value, d.key, qt(l));
    }
    u = !1;
  }
  c();
};
function gh(n, s, e, t) {
  return bt(s)(n, be(e), t);
}
var Yo = De(gh, 4);
function mh(n, s, e) {
  e = Vt(e);
  var t = 0,
    o = 0,
    { length: i } = n,
    a = !1;
  i === 0 && e(null);
  function r(u, l) {
    u === !1 && (a = !0),
      a !== !0 && (u ? e(u) : (++o === i || l === ns) && e(null));
  }
  for (; t < i; t++) s(n[t], t, qt(r));
}
function yh(n, s, e) {
  return Yo(n, 1 / 0, s, e);
}
function vh(n, s, e) {
  var t = is(n) ? mh : yh;
  return t(n, be(s), e);
}
var wt = De(vh, 3);
function _h(n, s, e) {
  return Qs(wt, n, s, e);
}
var Zs = De(_h, 3),
  xh = kn(Zs);
function Dh(n, s, e) {
  return Yo(n, 1, s, e);
}
var Bt = De(Dh, 3);
function wh(n, s, e) {
  return Qs(Bt, n, s, e);
}
var Fn = De(wh, 3),
  bh = kn(Fn);
const go = Symbol("promiseCallback");
function ao() {
  let n, s;
  function e(t, ...o) {
    if (t) return s(t);
    n(o.length > 1 ? o : o[0]);
  }
  return (
    (e[go] = new Promise((t, o) => {
      (n = t), (s = o);
    })),
    e
  );
}
function Pn(n, s, e) {
  typeof s != "number" && ((e = s), (s = null)), (e = Vt(e || ao()));
  var t = Object.keys(n).length;
  if (!t) return e(null);
  s || (s = t);
  var o = {},
    i = 0,
    a = !1,
    r = !1,
    u = Object.create(null),
    l = [],
    c = [],
    d = {};
  Object.keys(n).forEach((m) => {
    var _ = n[m];
    if (!Array.isArray(_)) {
      f(m, [_]), c.push(m);
      return;
    }
    var D = _.slice(0, _.length - 1),
      k = D.length;
    if (k === 0) {
      f(m, _), c.push(m);
      return;
    }
    (d[m] = k),
      D.forEach((O) => {
        if (!n[O])
          throw new Error(
            "async.auto task `" +
              m +
              "` has a non-existent dependency `" +
              O +
              "` in " +
              D.join(", ")
          );
        w(O, () => {
          k--, k === 0 && f(m, _);
        });
      });
  }),
    x(),
    v();
  function f(m, _) {
    l.push(() => C(m, _));
  }
  function v() {
    if (!a) {
      if (l.length === 0 && i === 0) return e(null, o);
      for (; l.length && i < s; ) {
        var m = l.shift();
        m();
      }
    }
  }
  function w(m, _) {
    var D = u[m];
    D || (D = u[m] = []), D.push(_);
  }
  function E(m) {
    var _ = u[m] || [];
    _.forEach((D) => D()), v();
  }
  function C(m, _) {
    if (!r) {
      var D = qt((O, ...Q) => {
        if ((i--, O === !1)) {
          a = !0;
          return;
        }
        if ((Q.length < 2 && ([Q] = Q), O)) {
          var X = {};
          if (
            (Object.keys(o).forEach((B) => {
              X[B] = o[B];
            }),
            (X[m] = Q),
            (r = !0),
            (u = Object.create(null)),
            a)
          )
            return;
          e(O, X);
        } else (o[m] = Q), E(m);
      });
      i++;
      var k = be(_[_.length - 1]);
      _.length > 1 ? k(o, D) : k(D);
    }
  }
  function x() {
    for (var m, _ = 0; c.length; )
      (m = c.pop()),
        _++,
        b(m).forEach((D) => {
          --d[D] === 0 && c.push(D);
        });
    if (_ !== t)
      throw new Error(
        "async.auto cannot execute tasks due to a recursive dependency"
      );
  }
  function b(m) {
    var _ = [];
    return (
      Object.keys(n).forEach((D) => {
        const k = n[D];
        Array.isArray(k) && k.indexOf(m) >= 0 && _.push(D);
      }),
      _
    );
  }
  return e[go];
}
var Ch = /^(?:async\s+)?(?:function)?\s*\w*\s*\(\s*([^)]+)\s*\)(?:\s*{)/,
  Eh = /^(?:async\s+)?\(?\s*([^)=]+)\s*\)?(?:\s*=>)/,
  Ah = /,/,
  kh = /(=.+)?(\s*)$/;
function Fh(n) {
  let s = "",
    e = 0,
    t = n.indexOf("*/");
  for (; e < n.length; )
    if (n[e] === "/" && n[e + 1] === "/") {
      let o = n.indexOf(
        `
`,
        e
      );
      e = o === -1 ? n.length : o;
    } else if (t !== -1 && n[e] === "/" && n[e + 1] === "*") {
      let o = n.indexOf("*/", e);
      o !== -1 ? ((e = o + 2), (t = n.indexOf("*/", e))) : ((s += n[e]), e++);
    } else (s += n[e]), e++;
  return s;
}
function Ph(n) {
  const s = Fh(n.toString());
  let e = s.match(Ch);
  if ((e || (e = s.match(Eh)), !e))
    throw new Error(
      `could not parse args in autoInject
Source:
` + s
    );
  let [, t] = e;
  return t
    .replace(/\s/g, "")
    .split(Ah)
    .map((o) => o.replace(kh, "").trim());
}
function Sh(n, s) {
  var e = {};
  return (
    Object.keys(n).forEach((t) => {
      var o = n[t],
        i,
        a = Io(o),
        r = (!a && o.length === 1) || (a && o.length === 0);
      if (Array.isArray(o))
        (i = [...o]), (o = i.pop()), (e[t] = i.concat(i.length > 0 ? u : o));
      else if (r) e[t] = o;
      else {
        if (((i = Ph(o)), o.length === 0 && !a && i.length === 0))
          throw new Error(
            "autoInject task functions require explicit parameters."
          );
        a || i.pop(), (e[t] = i.concat(u));
      }
      function u(l, c) {
        var d = i.map((f) => l[f]);
        d.push(c), be(o)(...d);
      }
    }),
    Pn(e, s)
  );
}
class Th {
  constructor() {
    (this.head = this.tail = null), (this.length = 0);
  }
  removeLink(s) {
    return (
      s.prev ? (s.prev.next = s.next) : (this.head = s.next),
      s.next ? (s.next.prev = s.prev) : (this.tail = s.prev),
      (s.prev = s.next = null),
      (this.length -= 1),
      s
    );
  }
  empty() {
    for (; this.head; ) this.shift();
    return this;
  }
  insertAfter(s, e) {
    (e.prev = s),
      (e.next = s.next),
      s.next ? (s.next.prev = e) : (this.tail = e),
      (s.next = e),
      (this.length += 1);
  }
  insertBefore(s, e) {
    (e.prev = s.prev),
      (e.next = s),
      s.prev ? (s.prev.next = e) : (this.head = e),
      (s.prev = e),
      (this.length += 1);
  }
  unshift(s) {
    this.head ? this.insertBefore(this.head, s) : Li(this, s);
  }
  push(s) {
    this.tail ? this.insertAfter(this.tail, s) : Li(this, s);
  }
  shift() {
    return this.head && this.removeLink(this.head);
  }
  pop() {
    return this.tail && this.removeLink(this.tail);
  }
  toArray() {
    return [...this];
  }
  *[Symbol.iterator]() {
    for (var s = this.head; s; ) yield s.data, (s = s.next);
  }
  remove(s) {
    for (var e = this.head; e; ) {
      var { next: t } = e;
      s(e) && this.removeLink(e), (e = t);
    }
    return this;
  }
}
function Li(n, s) {
  (n.length = 1), (n.head = n.tail = s);
}
function Us(n, s, e) {
  if (s == null) s = 1;
  else if (s === 0) throw new RangeError("Concurrency must not be zero");
  var t = be(n),
    o = 0,
    i = [];
  const a = {
    error: [],
    drain: [],
    saturated: [],
    unsaturated: [],
    empty: [],
  };
  function r(b, m) {
    a[b].push(m);
  }
  function u(b, m) {
    const _ = (...D) => {
      l(b, _), m(...D);
    };
    a[b].push(_);
  }
  function l(b, m) {
    if (!b) return Object.keys(a).forEach((_) => (a[_] = []));
    if (!m) return (a[b] = []);
    a[b] = a[b].filter((_) => _ !== m);
  }
  function c(b, ...m) {
    a[b].forEach((_) => _(...m));
  }
  var d = !1;
  function f(b, m, _, D) {
    if (D != null && typeof D != "function")
      throw new Error("task callback must be a function");
    x.started = !0;
    var k, O;
    function Q(B, ...T) {
      if (B) return _ ? O(B) : k();
      if (T.length <= 1) return k(T[0]);
      k(T);
    }
    var X = x._createTaskItem(b, _ ? Q : D || Q);
    if (
      (m ? x._tasks.unshift(X) : x._tasks.push(X),
      d ||
        ((d = !0),
        Ht(() => {
          (d = !1), x.process();
        })),
      _ || !D)
    )
      return new Promise((B, T) => {
        (k = B), (O = T);
      });
  }
  function v(b) {
    return function (m, ..._) {
      o -= 1;
      for (var D = 0, k = b.length; D < k; D++) {
        var O = b[D],
          Q = i.indexOf(O);
        Q === 0 ? i.shift() : Q > 0 && i.splice(Q, 1),
          O.callback(m, ..._),
          m != null && c("error", m, O.data);
      }
      o <= x.concurrency - x.buffer && c("unsaturated"),
        x.idle() && c("drain"),
        x.process();
    };
  }
  function w(b) {
    return b.length === 0 && x.idle() ? (Ht(() => c("drain")), !0) : !1;
  }
  const E = (b) => (m) => {
    if (!m)
      return new Promise((_, D) => {
        u(b, (k, O) => {
          if (k) return D(k);
          _(O);
        });
      });
    l(b), r(b, m);
  };
  var C = !1,
    x = {
      _tasks: new Th(),
      _createTaskItem(b, m) {
        return {
          data: b,
          callback: m,
        };
      },
      *[Symbol.iterator]() {
        yield* x._tasks[Symbol.iterator]();
      },
      concurrency: s,
      payload: e,
      buffer: s / 4,
      started: !1,
      paused: !1,
      push(b, m) {
        return Array.isArray(b)
          ? w(b)
            ? void 0
            : b.map((_) => f(_, !1, !1, m))
          : f(b, !1, !1, m);
      },
      pushAsync(b, m) {
        return Array.isArray(b)
          ? w(b)
            ? void 0
            : b.map((_) => f(_, !1, !0, m))
          : f(b, !1, !0, m);
      },
      kill() {
        l(), x._tasks.empty();
      },
      unshift(b, m) {
        return Array.isArray(b)
          ? w(b)
            ? void 0
            : b.map((_) => f(_, !0, !1, m))
          : f(b, !0, !1, m);
      },
      unshiftAsync(b, m) {
        return Array.isArray(b)
          ? w(b)
            ? void 0
            : b.map((_) => f(_, !0, !0, m))
          : f(b, !0, !0, m);
      },
      remove(b) {
        x._tasks.remove(b);
      },
      process() {
        if (!C) {
          for (C = !0; !x.paused && o < x.concurrency && x._tasks.length; ) {
            var b = [],
              m = [],
              _ = x._tasks.length;
            x.payload && (_ = Math.min(_, x.payload));
            for (var D = 0; D < _; D++) {
              var k = x._tasks.shift();
              b.push(k), i.push(k), m.push(k.data);
            }
            (o += 1),
              x._tasks.length === 0 && c("empty"),
              o === x.concurrency && c("saturated");
            var O = qt(v(b));
            t(m, O);
          }
          C = !1;
        }
      },
      length() {
        return x._tasks.length;
      },
      running() {
        return o;
      },
      workersList() {
        return i;
      },
      idle() {
        return x._tasks.length + o === 0;
      },
      pause() {
        x.paused = !0;
      },
      resume() {
        x.paused !== !1 && ((x.paused = !1), Ht(x.process));
      },
    };
  return (
    Object.defineProperties(x, {
      saturated: {
        writable: !1,
        value: E("saturated"),
      },
      unsaturated: {
        writable: !1,
        value: E("unsaturated"),
      },
      empty: {
        writable: !1,
        value: E("empty"),
      },
      drain: {
        writable: !1,
        value: E("drain"),
      },
      error: {
        writable: !1,
        value: E("error"),
      },
    }),
    x
  );
}
function $h(n, s) {
  return Us(n, 1, s);
}
function Mh(n, s, e) {
  return Us(n, s, e);
}
function Bh(n, s, e, t) {
  t = Vt(t);
  var o = be(e);
  return Bt(
    n,
    (i, a, r) => {
      o(s, i, (u, l) => {
        (s = l), r(u);
      });
    },
    (i) => t(i, s)
  );
}
var Ao = De(Bh, 4);
function Sn(...n) {
  var s = n.map(be);
  return function (...e) {
    var t = this,
      o = e[e.length - 1];
    return (
      typeof o == "function" ? e.pop() : (o = ao()),
      Ao(
        s,
        e,
        (i, a, r) => {
          a.apply(
            t,
            i.concat((u, ...l) => {
              r(u, l);
            })
          );
        },
        (i, a) => o(i, ...a)
      ),
      o[go]
    );
  };
}
function Ih(...n) {
  return Sn(...n.reverse());
}
function Rh(n, s, e, t) {
  return Qs(bt(s), n, e, t);
}
var as = De(Rh, 4);
function Lh(n, s, e, t) {
  var o = be(e);
  return as(
    n,
    s,
    (i, a) => {
      o(i, (r, ...u) => (r ? a(r) : a(r, u)));
    },
    (i, a) => {
      for (var r = [], u = 0; u < a.length; u++)
        a[u] && (r = r.concat(...a[u]));
      return t(i, r);
    }
  );
}
var Ho = De(Lh, 4);
function Oh(n, s, e) {
  return Ho(n, 1 / 0, s, e);
}
var Oi = De(Oh, 3);
function Nh(n, s, e) {
  return Ho(n, 1, s, e);
}
var Ni = De(Nh, 3);
function zh(...n) {
  return function (...s) {
    var e = s.pop();
    return e(null, ...n);
  };
}
function Rt(n, s) {
  return (e, t, o, i) => {
    var a = !1,
      r;
    const u = be(o);
    e(
      t,
      (l, c, d) => {
        u(l, (f, v) => {
          if (f || f === !1) return d(f);
          if (n(v) && !r) return (a = !0), (r = s(!0, l)), d(null, ns);
          d();
        });
      },
      (l) => {
        if (l) return i(l);
        i(null, a ? r : s(!1));
      }
    );
  };
}
function Wh(n, s, e) {
  return Rt(
    (t) => t,
    (t, o) => o
  )(wt, n, s, e);
}
var zi = De(Wh, 3);
function Gh(n, s, e, t) {
  return Rt(
    (o) => o,
    (o, i) => i
  )(bt(s), n, e, t);
}
var Wi = De(Gh, 4);
function Vh(n, s, e) {
  return Rt(
    (t) => t,
    (t, o) => o
  )(bt(1), n, s, e);
}
var Gi = De(Vh, 3);
function Tn(n) {
  return (s, ...e) =>
    be(s)(...e, (t, ...o) => {
      typeof console == "object" &&
        (t
          ? console.error && console.error(t)
          : console[n] && o.forEach((i) => console[n](i)));
    });
}
var qh = Tn("dir");
function Xh(n, s, e) {
  e = qt(e);
  var t = be(n),
    o = be(s),
    i;
  function a(u, ...l) {
    if (u) return e(u);
    u !== !1 && ((i = l), o(...l, r));
  }
  function r(u, l) {
    if (u) return e(u);
    if (u !== !1) {
      if (!l) return e(null, ...i);
      t(a);
    }
  }
  return r(null, !0);
}
var Ss = De(Xh, 3);
function Qh(n, s, e) {
  const t = be(s);
  return Ss(
    n,
    (...o) => {
      const i = o.pop();
      t(...o, (a, r) => i(a, !r));
    },
    e
  );
}
function $n(n) {
  return (s, e, t) => n(s, t);
}
function Zh(n, s, e) {
  return wt(n, $n(be(s)), e);
}
var Vi = De(Zh, 3);
function Uh(n, s, e, t) {
  return bt(s)(n, $n(be(e)), t);
}
var Ts = De(Uh, 4);
function jh(n, s, e) {
  return Ts(n, 1, s, e);
}
var $s = De(jh, 3);
function Mn(n) {
  return Io(n)
    ? n
    : function (...s) {
        var e = s.pop(),
          t = !0;
        s.push((...o) => {
          t ? Ht(() => e(...o)) : e(...o);
        }),
          n.apply(this, s),
          (t = !1);
      };
}
function Yh(n, s, e) {
  return Rt(
    (t) => !t,
    (t) => !t
  )(wt, n, s, e);
}
var qi = De(Yh, 3);
function Hh(n, s, e, t) {
  return Rt(
    (o) => !o,
    (o) => !o
  )(bt(s), n, e, t);
}
var Xi = De(Hh, 4);
function Kh(n, s, e) {
  return Rt(
    (t) => !t,
    (t) => !t
  )(Bt, n, s, e);
}
var Qi = De(Kh, 3);
function Jh(n, s, e, t) {
  var o = new Array(s.length);
  n(
    s,
    (i, a, r) => {
      e(i, (u, l) => {
        (o[a] = !!l), r(u);
      });
    },
    (i) => {
      if (i) return t(i);
      for (var a = [], r = 0; r < s.length; r++) o[r] && a.push(s[r]);
      t(null, a);
    }
  );
}
function ep(n, s, e, t) {
  var o = [];
  n(
    s,
    (i, a, r) => {
      e(i, (u, l) => {
        if (u) return r(u);
        l &&
          o.push({
            index: a,
            value: i,
          }),
          r(u);
      });
    },
    (i) => {
      if (i) return t(i);
      t(
        null,
        o.sort((a, r) => a.index - r.index).map((a) => a.value)
      );
    }
  );
}
function rs(n, s, e, t) {
  var o = is(s) ? Jh : ep;
  return o(n, s, be(e), t);
}
function tp(n, s, e) {
  return rs(wt, n, s, e);
}
var Zi = De(tp, 3);
function op(n, s, e, t) {
  return rs(bt(s), n, e, t);
}
var Ui = De(op, 4);
function sp(n, s, e) {
  return rs(Bt, n, s, e);
}
var ji = De(sp, 3);
function ip(n, s) {
  var e = qt(s),
    t = be(Mn(n));
  function o(i) {
    if (i) return e(i);
    i !== !1 && t(o);
  }
  return o();
}
var np = De(ip, 2);
function ap(n, s, e, t) {
  var o = be(e);
  return as(
    n,
    s,
    (i, a) => {
      o(i, (r, u) =>
        r
          ? a(r)
          : a(r, {
              key: u,
              val: i,
            })
      );
    },
    (i, a) => {
      for (
        var r = {}, { hasOwnProperty: u } = Object.prototype, l = 0;
        l < a.length;
        l++
      )
        if (a[l]) {
          var { key: c } = a[l],
            { val: d } = a[l];
          u.call(r, c) ? r[c].push(d) : (r[c] = [d]);
        }
      return t(i, r);
    }
  );
}
var js = De(ap, 4);
function rp(n, s, e) {
  return js(n, 1 / 0, s, e);
}
function up(n, s, e) {
  return js(n, 1, s, e);
}
var lp = Tn("log");
function cp(n, s, e, t) {
  t = Vt(t);
  var o = {},
    i = be(e);
  return bt(s)(
    n,
    (a, r, u) => {
      i(a, r, (l, c) => {
        if (l) return u(l);
        (o[r] = c), u(l);
      });
    },
    (a) => t(a, o)
  );
}
var Ys = De(cp, 4);
function dp(n, s, e) {
  return Ys(n, 1 / 0, s, e);
}
function hp(n, s, e) {
  return Ys(n, 1, s, e);
}
function pp(n, s = (e) => e) {
  var e = Object.create(null),
    t = Object.create(null),
    o = be(n),
    i = Bo((a, r) => {
      var u = s(...a);
      u in e
        ? Ht(() => r(null, ...e[u]))
        : u in t
        ? t[u].push(r)
        : ((t[u] = [r]),
          o(...a, (l, ...c) => {
            l || (e[u] = c);
            var d = t[u];
            delete t[u];
            for (var f = 0, v = d.length; f < v; f++) d[f](l, ...c);
          }));
    });
  return (i.memo = e), (i.unmemoized = n), i;
}
var zo;
Cn ? (zo = process.nextTick) : bn ? (zo = setImmediate) : (zo = En);
var fp = An(zo),
  Hs = De((n, s, e) => {
    var t = is(s) ? [] : {};
    n(
      s,
      (o, i, a) => {
        be(o)((r, ...u) => {
          u.length < 2 && ([u] = u), (t[i] = u), a(r);
        });
      },
      (o) => e(o, t)
    );
  }, 3);
function gp(n, s) {
  return Hs(wt, n, s);
}
function mp(n, s, e) {
  return Hs(bt(s), n, e);
}
function Bn(n, s) {
  var e = be(n);
  return Us(
    (t, o) => {
      e(t[0], o);
    },
    s,
    1
  );
}
class yp {
  constructor() {
    (this.heap = []), (this.pushCount = Number.MIN_SAFE_INTEGER);
  }
  get length() {
    return this.heap.length;
  }
  empty() {
    return (this.heap = []), this;
  }
  percUp(s) {
    let e;
    for (; s > 0 && _s(this.heap[s], this.heap[(e = Yi(s))]); ) {
      let t = this.heap[s];
      (this.heap[s] = this.heap[e]), (this.heap[e] = t), (s = e);
    }
  }
  percDown(s) {
    let e;
    for (
      ;
      (e = vp(s)) < this.heap.length &&
      (e + 1 < this.heap.length &&
        _s(this.heap[e + 1], this.heap[e]) &&
        (e = e + 1),
      !_s(this.heap[s], this.heap[e]));

    ) {
      let t = this.heap[s];
      (this.heap[s] = this.heap[e]), (this.heap[e] = t), (s = e);
    }
  }
  push(s) {
    (s.pushCount = ++this.pushCount),
      this.heap.push(s),
      this.percUp(this.heap.length - 1);
  }
  unshift(s) {
    return this.heap.push(s);
  }
  shift() {
    let [s] = this.heap;
    return (
      (this.heap[0] = this.heap[this.heap.length - 1]),
      this.heap.pop(),
      this.percDown(0),
      s
    );
  }
  toArray() {
    return [...this];
  }
  *[Symbol.iterator]() {
    for (let s = 0; s < this.heap.length; s++) yield this.heap[s].data;
  }
  remove(s) {
    let e = 0;
    for (let t = 0; t < this.heap.length; t++)
      s(this.heap[t]) || ((this.heap[e] = this.heap[t]), e++);
    this.heap.splice(e);
    for (let t = Yi(this.heap.length - 1); t >= 0; t--) this.percDown(t);
    return this;
  }
}
function vp(n) {
  return (n << 1) + 1;
}
function Yi(n) {
  return ((n + 1) >> 1) - 1;
}
function _s(n, s) {
  return n.priority !== s.priority
    ? n.priority < s.priority
    : n.pushCount < s.pushCount;
}
function _p(n, s) {
  var e = Bn(n, s),
    { push: t, pushAsync: o } = e;
  (e._tasks = new yp()),
    (e._createTaskItem = ({ data: a, priority: r }, u) => ({
      data: a,
      priority: r,
      callback: u,
    }));
  function i(a, r) {
    return Array.isArray(a)
      ? a.map((u) => ({
          data: u,
          priority: r,
        }))
      : {
          data: a,
          priority: r,
        };
  }
  return (
    (e.push = function (a, r = 0, u) {
      return t(i(a, r), u);
    }),
    (e.pushAsync = function (a, r = 0, u) {
      return o(i(a, r), u);
    }),
    delete e.unshift,
    delete e.unshiftAsync,
    e
  );
}
function xp(n, s) {
  if (((s = Vt(s)), !Array.isArray(n)))
    return s(
      new TypeError("First argument to race must be an array of functions")
    );
  if (!n.length) return s();
  for (var e = 0, t = n.length; e < t; e++) be(n[e])(s);
}
var Dp = De(xp, 2);
function Hi(n, s, e, t) {
  var o = [...n].reverse();
  return Ao(o, s, e, t);
}
function Ms(n) {
  var s = be(n);
  return Bo(function (t, o) {
    return (
      t.push((i, ...a) => {
        let r = {};
        if ((i && (r.error = i), a.length > 0)) {
          var u = a;
          a.length <= 1 && ([u] = a), (r.value = u);
        }
        o(null, r);
      }),
      s.apply(this, t)
    );
  });
}
function wp(n) {
  var s;
  return (
    Array.isArray(n)
      ? (s = n.map(Ms))
      : ((s = {}),
        Object.keys(n).forEach((e) => {
          s[e] = Ms.call(this, n[e]);
        })),
    s
  );
}
function Ks(n, s, e, t) {
  const o = be(e);
  return rs(
    n,
    s,
    (i, a) => {
      o(i, (r, u) => {
        a(r, !u);
      });
    },
    t
  );
}
function bp(n, s, e) {
  return Ks(wt, n, s, e);
}
var Cp = De(bp, 3);
function Ep(n, s, e, t) {
  return Ks(bt(s), n, e, t);
}
var Ap = De(Ep, 4);
function kp(n, s, e) {
  return Ks(Bt, n, s, e);
}
var Fp = De(kp, 3);
function In(n) {
  return function () {
    return n;
  };
}
const Bs = 5,
  Rn = 0;
function Is(n, s, e) {
  var t = {
    times: Bs,
    intervalFunc: In(Rn),
  };
  if (
    (arguments.length < 3 && typeof n == "function"
      ? ((e = s || ao()), (s = n))
      : (Pp(t, n), (e = e || ao())),
    typeof s != "function")
  )
    throw new Error("Invalid arguments for async.retry");
  var o = be(s),
    i = 1;
  function a() {
    o((r, ...u) => {
      r !== !1 &&
        (r &&
        i++ < t.times &&
        (typeof t.errorFilter != "function" || t.errorFilter(r))
          ? setTimeout(a, t.intervalFunc(i - 1))
          : e(r, ...u));
    });
  }
  return a(), e[go];
}
function Pp(n, s) {
  if (typeof s == "object")
    (n.times = +s.times || Bs),
      (n.intervalFunc =
        typeof s.interval == "function" ? s.interval : In(+s.interval || Rn)),
      (n.errorFilter = s.errorFilter);
  else if (typeof s == "number" || typeof s == "string") n.times = +s || Bs;
  else throw new Error("Invalid arguments for async.retry");
}
function Sp(n, s) {
  s || ((s = n), (n = null));
  let e = (n && n.arity) || s.length;
  Io(s) && (e += 1);
  var t = be(s);
  return Bo((o, i) => {
    (o.length < e - 1 || i == null) && (o.push(i), (i = ao()));
    function a(r) {
      t(...o, r);
    }
    return n ? Is(n, a, i) : Is(a, i), i[go];
  });
}
function Tp(n, s) {
  return Hs(Bt, n, s);
}
function $p(n, s, e) {
  return Rt(Boolean, (t) => t)(wt, n, s, e);
}
var Ki = De($p, 3);
function Mp(n, s, e, t) {
  return Rt(Boolean, (o) => o)(bt(s), n, e, t);
}
var Ji = De(Mp, 4);
function Bp(n, s, e) {
  return Rt(Boolean, (t) => t)(Bt, n, s, e);
}
var en = De(Bp, 3);
function Ip(n, s, e) {
  var t = be(s);
  return Zs(
    n,
    (i, a) => {
      t(i, (r, u) => {
        if (r) return a(r);
        a(r, {
          value: i,
          criteria: u,
        });
      });
    },
    (i, a) => {
      if (i) return e(i);
      e(
        null,
        a.sort(o).map((r) => r.value)
      );
    }
  );
  function o(i, a) {
    var r = i.criteria,
      u = a.criteria;
    return r < u ? -1 : r > u ? 1 : 0;
  }
}
var Rp = De(Ip, 3);
function Lp(n, s, e) {
  var t = be(n);
  return Bo((o, i) => {
    var a = !1,
      r;
    function u() {
      var l = n.name || "anonymous",
        c = new Error('Callback function "' + l + '" timed out.');
      (c.code = "ETIMEDOUT"), e && (c.info = e), (a = !0), i(c);
    }
    o.push((...l) => {
      a || (i(...l), clearTimeout(r));
    }),
      (r = setTimeout(u, s)),
      t(...o);
  });
}
function Op(n) {
  for (var s = Array(n); n--; ) s[n] = n;
  return s;
}
function Js(n, s, e, t) {
  var o = be(e);
  return as(Op(n), s, o, t);
}
function Np(n, s, e) {
  return Js(n, 1 / 0, s, e);
}
function zp(n, s, e) {
  return Js(n, 1, s, e);
}
function Wp(n, s, e, t) {
  arguments.length <= 3 &&
    typeof s == "function" &&
    ((t = e), (e = s), (s = Array.isArray(n) ? [] : {})),
    (t = Vt(t || ao()));
  var o = be(e);
  return (
    wt(
      n,
      (i, a, r) => {
        o(s, i, a, r);
      },
      (i) => t(i, s)
    ),
    t[go]
  );
}
function Gp(n, s) {
  var e = null,
    t;
  return $s(
    n,
    (o, i) => {
      be(o)((a, ...r) => {
        if (a === !1) return i(a);
        r.length < 2 ? ([t] = r) : (t = r), (e = a), i(a ? null : {});
      });
    },
    () => s(e, t)
  );
}
var Vp = De(Gp);
function qp(n) {
  return (...s) => (n.unmemoized || n)(...s);
}
function Xp(n, s, e) {
  e = qt(e);
  var t = be(s),
    o = be(n),
    i = [];
  function a(u, ...l) {
    if (u) return e(u);
    (i = l), u !== !1 && o(r);
  }
  function r(u, l) {
    if (u) return e(u);
    if (u !== !1) {
      if (!l) return e(null, ...i);
      t(a);
    }
  }
  return o(r);
}
var Rs = De(Xp, 3);
function Qp(n, s, e) {
  const t = be(n);
  return Rs((o) => t((i, a) => o(i, !a)), s, e);
}
function Zp(n, s) {
  if (((s = Vt(s)), !Array.isArray(n)))
    return s(
      new Error("First argument to waterfall must be an array of functions")
    );
  if (!n.length) return s();
  var e = 0;
  function t(i) {
    var a = be(n[e++]);
    a(...i, qt(o));
  }
  function o(i, ...a) {
    if (i !== !1) {
      if (i || e === n.length) return s(i, ...a);
      t(a);
    }
  }
  t([]);
}
var Up = De(Zp),
  jp = {
    apply: ah,
    applyEach: xh,
    applyEachSeries: bh,
    asyncify: Ps,
    auto: Pn,
    autoInject: Sh,
    cargo: $h,
    cargoQueue: Mh,
    compose: Ih,
    concat: Oi,
    concatLimit: Ho,
    concatSeries: Ni,
    constant: zh,
    detect: zi,
    detectLimit: Wi,
    detectSeries: Gi,
    dir: qh,
    doUntil: Qh,
    doWhilst: Ss,
    each: Vi,
    eachLimit: Ts,
    eachOf: wt,
    eachOfLimit: Yo,
    eachOfSeries: Bt,
    eachSeries: $s,
    ensureAsync: Mn,
    every: qi,
    everyLimit: Xi,
    everySeries: Qi,
    filter: Zi,
    filterLimit: Ui,
    filterSeries: ji,
    forever: np,
    groupBy: rp,
    groupByLimit: js,
    groupBySeries: up,
    log: lp,
    map: Zs,
    mapLimit: as,
    mapSeries: Fn,
    mapValues: dp,
    mapValuesLimit: Ys,
    mapValuesSeries: hp,
    memoize: pp,
    nextTick: fp,
    parallel: gp,
    parallelLimit: mp,
    priorityQueue: _p,
    queue: Bn,
    race: Dp,
    reduce: Ao,
    reduceRight: Hi,
    reflect: Ms,
    reflectAll: wp,
    reject: Cp,
    rejectLimit: Ap,
    rejectSeries: Fp,
    retry: Is,
    retryable: Sp,
    seq: Sn,
    series: Tp,
    setImmediate: Ht,
    some: Ki,
    someLimit: Ji,
    someSeries: en,
    sortBy: Rp,
    timeout: Lp,
    times: Np,
    timesLimit: Js,
    timesSeries: zp,
    transform: Wp,
    tryEach: Vp,
    unmemoize: qp,
    until: Qp,
    waterfall: Up,
    whilst: Rs,
    all: qi,
    allLimit: Xi,
    allSeries: Qi,
    any: Ki,
    anyLimit: Ji,
    anySeries: en,
    find: zi,
    findLimit: Wi,
    findSeries: Gi,
    flatMap: Oi,
    flatMapLimit: Ho,
    flatMapSeries: Ni,
    forEach: Vi,
    forEachSeries: $s,
    forEachLimit: Ts,
    forEachOf: wt,
    forEachOfSeries: Bt,
    forEachOfLimit: Yo,
    inject: Ao,
    foldl: Ao,
    foldr: Hi,
    select: Zi,
    selectLimit: Ui,
    selectSeries: ji,
    wrapSync: Ps,
    during: Rs,
    doDuring: Ss,
  };
const Yp = g(
    "span",
    {
      class: "col-auto",
    },
    "Path Planing Inspection",
    -1
  ),
  Hp = {
    class: "row items-center q-col-gutter-x-sm q-mt-sm",
  },
  Kp = {
    class: "col-auto",
  },
  Jp = {
    class: "text-grey-9 text-caption q-ml-xs",
  },
  ef = {
    class: "col-auto",
  },
  tf = {
    class: "text-grey-9 text-caption q-ml-xs",
  },
  of = {
    class: "col-auto",
  },
  sf = {
    class: "text-grey-9 text-caption q-ml-xs",
  },
  nf = {
    class: "col-auto",
  },
  af = {
    class: "row items-center q-mt-md",
  },
  rf = {
    class: "col-auto q-gutter-x-xs",
  },
  uf = g(
    "span",
    {
      class: "text-grey-9 text-caption",
    },
    "Draft Path",
    -1
  ),
  lf = {
    class: "col-auto q-gutter-x-xs",
  },
  cf = g(
    "span",
    {
      class: "text-grey-9 text-caption",
    },
    "Revision Path",
    -1
  ),
  df = {
    class: "row items-center full-width",
  },
  hf = g(
    "div",
    {
      class: "col-auto",
    },
    null,
    -1
  ),
  pf = ["onMouseover", "onMouseleave"],
  ff = {
    class: "col-auto",
  },
  gf = {
    class: "row",
  },
  mf = {
    class: "col-auto text-caption text-grey-10 q-gutter-x-xs",
  },
  yf = g(
    "span",
    {
      class: "text-primary text-weight-medium",
    },
    "move",
    -1
  ),
  vf = g("span", null, "A", -1),
  _f = g(
    "span",
    {
      class: "text-primary text-weight-medium",
    },
    "to",
    -1
  ),
  xf = g("span", null, "B", -1),
  Df = {
    class: "col-auto q-gutter-x-xs",
  },
  wf = {
    class: "row q-mt-sm",
  },
  bf = {
    class: "col-auto text-caption text-grey-10 q-gutter-x-xs",
  },
  Cf = g(
    "span",
    {
      class: "text-primary text-weight-medium",
    },
    "move",
    -1
  ),
  Ef = g("span", null, "B", -1),
  Af = g(
    "span",
    {
      class: "text-primary text-weight-medium",
    },
    "to",
    -1
  ),
  kf = g("span", null, "A", -1),
  Ff = {
    class: "col-auto q-gutter-x-xs",
  },
  Pf = Te({
    __name: "PathPlaningCard",
    setup(n) {
      const { closeDrawerRight: s } = Fe(),
        { selectedMap: e } = Ye(Fe()),
        t = qe("stage"),
        o = Po([]),
        i = N(0),
        a = N(0),
        r = N(0),
        u = N(0),
        l = N(!1),
        c = N(""),
        d = 5,
        f = G(() => {
          const R = ae();
          return Math.ceil(R.length / d);
        }),
        v = N(1),
        w = G(() => {
          const R = (v.value - 1) * d;
          return ae().slice(R, v.value * d);
        });
      X(e.value);
      const E = Je(e, () => {
          (i.value = a.value = 0), (r.value = u.value = 0), X(e.value);
        }),
        C = N(!1),
        x = () => {
          jp.mapLimit(
            o,
            6,
            (R, M) => {
              R.expanded || K(R, M);
            },
            () => (l.value = !0)
          ),
            (C.value = !0);
        },
        b = (R) => {
          if (R.expanded) {
            (R.expanded = !1), (R.result = void 0);
            return;
          }
          K(R);
        },
        m = () => {
          (i.value = 0),
            (a.value = 0),
            (r.value = 0),
            (u.value = 0),
            (l.value = !1),
            (C.value = !1),
            o.forEach((R) => {
              (R.expanded = !1), (R.result = void 0);
            });
        },
        _ = (R) => {
          console.log("[PathPlan]::showShotPath", R),
            t == null || t.drawShortPath(R.fromNode, R.toNode);
        },
        D = (R) => {
          console.log("[PathPlan]::hideShotPath", R),
            t == null || t.removeShortPath();
        },
        k = (R, M = 0) => {
          if ((console.log("[PathPlan]::drawDraftPath", R), R.result)) {
            t == null || t.removePath();
            const Z = M ? "blue" : "purple";
            t == null || t.drawPathAni([...R.result.draftPath[M]], Z);
          }
        },
        O = (R, M = 0) => {
          if ((console.log("[PathPlan]::drawDraftPath", R), R.result)) {
            t == null || t.removePath();
            const Z = M ? "red" : "orange";
            t == null || t.drawPathAni([...R.result.revisionPath[M]], Z);
          }
        },
        Q = async (R, M = 0) => {
          if ((console.log("[PathPlan]::drawDraftPath", R), R.result)) {
            t == null || t.removePath();
            let Z = M ? "blue" : "purple";
            await (t == null
              ? void 0
              : t.drawPathAni([...R.result.draftPath[M]], Z)),
              (Z = M ? "red" : "orange"),
              t == null || t.drawPathAni([...R.result.revisionPath[M]], Z);
          }
        };
      pt(() => {
        console.log("[PathPlan]::unmount", E), E(), t == null || t.removePath();
      });
      async function X(R) {
        const M = await ri("Location", R),
          Z = await B(M);
        (o.length = 0), T(Z), console.log("[PathPlan]::init", Z, o);
      }
      async function B(R) {
        const M = await ri("ExclusiveArea", e.value);
        return (
          M.length == 0 ||
            (M.forEach((Z) => {
              const P = Z.areas[0];
              R.forEach((S, te) => {
                const le = S.pose;
                ht.isPointInArea(le, P) &&
                  (delete R[te], console.log("[PathPlan]::makePairs", R));
              });
            }),
            console.log("[PathPlan]::check", M, R)),
          R
        );
      }
      function T(R) {
        const M = R.shift();
        R.length != 0 &&
          (M &&
            R.forEach((Z) => {
              o.push({
                fromNode: M,
                toNode: Z,
                expanded: !1,
                a2bDraftSuccess: !1,
                a2bRevisionSuccess: !1,
                b2aDraftSuccess: !1,
                b2aRevisionSuccess: !1,
              });
            }),
          T(R));
      }
      function ae() {
        return o.filter(
          (R) =>
            R.fromNode.name.includes(c.value) || R.toNode.name.includes(c.value)
        );
      }
      async function K(R, M) {
        if (R.result) return;
        const Z = {
            mapId: e.value,
            prevLocationId: R.fromNode.id,
            nextLocationId: R.toNode.id,
          },
          P = await Ma(Z);
        P &&
          ((R.result = P),
          (R.expanded = !0),
          (R.a2bDraftSuccess = P.draftPath[0].length > 1),
          (R.a2bRevisionSuccess = !P.reason[0] && P.revisionPath[0].length > 1),
          (R.b2aDraftSuccess = P.draftPath[1].length > 1),
          (R.b2aRevisionSuccess = !P.reason[1] && P.revisionPath[1].length > 1),
          !R.a2bDraftSuccess && r.value++,
          !R.b2aDraftSuccess && r.value++,
          !R.a2bRevisionSuccess && u.value++,
          !R.b2aRevisionSuccess && u.value++,
          R.a2bDraftSuccess &&
          R.a2bRevisionSuccess &&
          R.b2aDraftSuccess &&
          R.b2aRevisionSuccess
            ? i.value++
            : a.value++),
          M && M(null, R);
      }
      return (R, M) => (
        A(),
        q(
          ho,
          {
            container: "",
            view: "lHh Lpr fFf",
          },
          {
            default: y(() => [
              h(
                uo,
                {
                  bordered: "",
                  class: "bg-grey-2 text-black",
                },
                {
                  default: y(() => [
                    h(
                      yt,
                      {
                        flat: "",
                        class: "my-card bg-transparent",
                      },
                      {
                        default: y(() => [
                          h(kt, null, {
                            default: y(() => [
                              h(
                                $t,
                                {
                                  class:
                                    "text-subtitle1 text-weight-bold row items-center no-wrap",
                                },
                                {
                                  default: y(() => [Yp]),
                                  _: 1,
                                }
                              ),
                              h(
                                J,
                                {
                                  round: "",
                                  icon: "close",
                                  dense: "",
                                  flat: "",
                                  onClick: W(s),
                                },
                                null,
                                8,
                                ["onClick"]
                              ),
                            ]),
                            _: 1,
                          }),
                          h(at, null, {
                            default: y(() => [
                              h(
                                xt,
                                {
                                  modelValue: c.value,
                                  "onUpdate:modelValue":
                                    M[0] || (M[0] = (Z) => (c.value = Z)),
                                  "input-class": "q-px-sm",
                                  borderless: "",
                                  placeholder: "Enter Resource Name",
                                  "bg-color": "white",
                                  rounded: "",
                                  dense: "",
                                },
                                {
                                  append: y(() => [
                                    h(
                                      J,
                                      {
                                        dense: "",
                                        flat: "",
                                      },
                                      {
                                        default: y(() => [
                                          h(oe, {
                                            name: "search",
                                          }),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["modelValue"]
                              ),
                              g("div", Hp, [
                                g("div", Kp, [
                                  h(oe, {
                                    size: "xs",
                                    name: "sync_alt",
                                    color: "grey-8",
                                  }),
                                  g("span", Jp, V(o.length), 1),
                                ]),
                                g("div", ef, [
                                  h(oe, {
                                    size: "xs",
                                    name: "check_circle",
                                    color: "green",
                                  }),
                                  g("span", tf, V(i.value), 1),
                                ]),
                                g("div", of, [
                                  h(oe, {
                                    size: "xs",
                                    name: "error",
                                    color: "red",
                                  }),
                                  g("span", sf, V(a.value), 1),
                                ]),
                                h(ze),
                                g("div", nf, [
                                  C.value
                                    ? he("", !0)
                                    : (A(),
                                      q(
                                        J,
                                        {
                                          key: 0,
                                          size: "xs",
                                          "text-color": C.value
                                            ? "white"
                                            : "primary",
                                          color: C.value ? "primary" : "white",
                                          label: C.value
                                            ? "Reset"
                                            : "Get All Path",
                                          "no-caps": "",
                                          onClick: x,
                                        },
                                        null,
                                        8,
                                        ["text-color", "color", "label"]
                                      )),
                                  l.value
                                    ? (A(),
                                      q(J, {
                                        key: 1,
                                        size: "xs",
                                        "text-color": "white",
                                        color: "primary",
                                        label: "Reset",
                                        "no-caps": "",
                                        onClick: m,
                                      }))
                                    : he("", !0),
                                ]),
                              ]),
                              g("div", af, [
                                g("div", rf, [
                                  h(oe, {
                                    size: "xs",
                                    name: "error",
                                    color: "red",
                                  }),
                                  uf,
                                  h(
                                    Wo,
                                    {
                                      color: "grey",
                                      label: r.value,
                                    },
                                    null,
                                    8,
                                    ["label"]
                                  ),
                                ]),
                                h(ze),
                                g("div", lf, [
                                  h(oe, {
                                    size: "xs",
                                    name: "error",
                                    color: "red",
                                  }),
                                  cf,
                                  h(
                                    Wo,
                                    {
                                      color: "grey",
                                      label: u.value,
                                    },
                                    null,
                                    8,
                                    ["label"]
                                  ),
                                ]),
                              ]),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
              h(lo, null, {
                default: y(() => [
                  h(co, null, {
                    default: y(() => [
                      h(
                        vt,
                        {
                          padding: "",
                        },
                        {
                          default: y(() => [
                            (A(!0),
                            ge(
                              Be,
                              null,
                              st(
                                W(w),
                                (Z, P) => (
                                  A(),
                                  ge(
                                    Be,
                                    {
                                      key: P,
                                    },
                                    [
                                      P !== 0
                                        ? (A(),
                                          q(ct, {
                                            key: 0,
                                            spaced: "",
                                          }))
                                        : he("", !0),
                                      h(
                                        Ve,
                                        {
                                          class: "column",
                                        },
                                        {
                                          default: y(() => [
                                            h(
                                              $e,
                                              null,
                                              {
                                                default: y(() => [
                                                  g("div", df, [
                                                    hf,
                                                    g(
                                                      "div",
                                                      {
                                                        class:
                                                          "col-auto q-ml-sm text-caption text-grey-10 cursor-pointer",
                                                        onMouseover: (S) =>
                                                          _(Z),
                                                        onMouseleave: (S) =>
                                                          D(Z),
                                                      },
                                                      [
                                                        g(
                                                          "div",
                                                          null,
                                                          "A: " +
                                                            V(Z.fromNode.name),
                                                          1
                                                        ),
                                                        g(
                                                          "div",
                                                          null,
                                                          "B: " +
                                                            V(Z.toNode.name),
                                                          1
                                                        ),
                                                      ],
                                                      40,
                                                      pf
                                                    ),
                                                    h(ze),
                                                    g("div", ff, [
                                                      !C.value && !Z.expanded
                                                        ? (A(),
                                                          q(
                                                            J,
                                                            {
                                                              key: 0,
                                                              label: Z.expanded
                                                                ? "Reset"
                                                                : "Get Path",
                                                              color: Z.expanded
                                                                ? "primary"
                                                                : void 0,
                                                              "no-caps": "",
                                                              size: "xs",
                                                              onClick: (S) =>
                                                                b(Z),
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              "label",
                                                              "color",
                                                              "onClick",
                                                            ]
                                                          ))
                                                        : he("", !0),
                                                    ]),
                                                  ]),
                                                ]),
                                                _: 2,
                                              },
                                              1024
                                            ),
                                            Z.result
                                              ? (A(),
                                                q(
                                                  $e,
                                                  {
                                                    key: 0,
                                                    class: "q-pt-sm",
                                                  },
                                                  {
                                                    default: y(() => [
                                                      g("div", gf, [
                                                        g("div", mf, [
                                                          Z.a2bDraftSuccess &&
                                                          Z.a2bRevisionSuccess
                                                            ? (A(),
                                                              q(oe, {
                                                                key: 0,
                                                                size: "xs",
                                                                name: "check_circle",
                                                                color: "green",
                                                              }))
                                                            : (A(),
                                                              q(
                                                                oe,
                                                                {
                                                                  key: 1,
                                                                  size: "xs",
                                                                  name: "error",
                                                                  color: "red",
                                                                  class:
                                                                    "cursor-pointer",
                                                                },
                                                                {
                                                                  default: y(
                                                                    () => [
                                                                      h(
                                                                        At,
                                                                        {
                                                                          anchor:
                                                                            "center right",
                                                                          self: "center left",
                                                                          offset:
                                                                            [
                                                                              10,
                                                                              10,
                                                                            ],
                                                                          class:
                                                                            "bg-red-6",
                                                                        },
                                                                        {
                                                                          default:
                                                                            y(
                                                                              () => {
                                                                                var S;
                                                                                return [
                                                                                  ue(
                                                                                    V(
                                                                                      (S =
                                                                                        Z
                                                                                          .result
                                                                                          .reason[0]) !=
                                                                                        null
                                                                                        ? S
                                                                                        : "Error"
                                                                                    ),
                                                                                    1
                                                                                  ),
                                                                                ];
                                                                              }
                                                                            ),
                                                                          _: 2,
                                                                        },
                                                                        1024
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _: 2,
                                                                },
                                                                1024
                                                              )),
                                                          yf,
                                                          vf,
                                                          _f,
                                                          xf,
                                                        ]),
                                                        h(ze),
                                                        g("div", Df, [
                                                          h(
                                                            J,
                                                            {
                                                              dense: "",
                                                              flat: "",
                                                              size: "xs",
                                                              onClick: (S) =>
                                                                k(Z),
                                                            },
                                                            {
                                                              default: y(() => [
                                                                h(oe, {
                                                                  size: "xs",
                                                                  name: "linear_scale",
                                                                  color:
                                                                    "purple",
                                                                }),
                                                                h(
                                                                  At,
                                                                  {
                                                                    anchor:
                                                                      "bottom middle",
                                                                    self: "bottom middle",
                                                                    offset: [
                                                                      0, 35,
                                                                    ],
                                                                  },
                                                                  {
                                                                    default: y(
                                                                      () => [
                                                                        ue(
                                                                          " Draft Path "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 1,
                                                                  }
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"]
                                                          ),
                                                          h(
                                                            J,
                                                            {
                                                              dense: "",
                                                              flat: "",
                                                              size: "xs",
                                                              onClick: (S) =>
                                                                O(Z),
                                                            },
                                                            {
                                                              default: y(() => [
                                                                h(oe, {
                                                                  size: "xs",
                                                                  name: "moving",
                                                                  color:
                                                                    "amber",
                                                                }),
                                                                h(
                                                                  At,
                                                                  {
                                                                    anchor:
                                                                      "bottom middle",
                                                                    self: "bottom middle",
                                                                    offset: [
                                                                      0, 35,
                                                                    ],
                                                                  },
                                                                  {
                                                                    default: y(
                                                                      () => [
                                                                        ue(
                                                                          " Revision Path "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 1,
                                                                  }
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"]
                                                          ),
                                                          h(
                                                            J,
                                                            {
                                                              dense: "",
                                                              flat: "",
                                                              size: "xs",
                                                              onClick: (S) =>
                                                                Q(Z),
                                                            },
                                                            {
                                                              default: y(() => [
                                                                ue("All "),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"]
                                                          ),
                                                        ]),
                                                      ]),
                                                      g("div", wf, [
                                                        g("div", bf, [
                                                          Z.b2aDraftSuccess &&
                                                          Z.b2aRevisionSuccess
                                                            ? (A(),
                                                              q(oe, {
                                                                key: 0,
                                                                size: "xs",
                                                                name: "check_circle",
                                                                color: "green",
                                                              }))
                                                            : (A(),
                                                              q(
                                                                oe,
                                                                {
                                                                  key: 1,
                                                                  size: "xs",
                                                                  name: "error",
                                                                  color: "red",
                                                                  class:
                                                                    "cursor-pointer",
                                                                },
                                                                {
                                                                  default: y(
                                                                    () => [
                                                                      h(
                                                                        At,
                                                                        {
                                                                          anchor:
                                                                            "center right",
                                                                          self: "center left",
                                                                          offset:
                                                                            [
                                                                              10,
                                                                              10,
                                                                            ],
                                                                          class:
                                                                            "bg-red-6",
                                                                        },
                                                                        {
                                                                          default:
                                                                            y(
                                                                              () => {
                                                                                var S;
                                                                                return [
                                                                                  ue(
                                                                                    V(
                                                                                      (S =
                                                                                        Z
                                                                                          .result
                                                                                          .reason[1]) !=
                                                                                        null
                                                                                        ? S
                                                                                        : "Error"
                                                                                    ),
                                                                                    1
                                                                                  ),
                                                                                ];
                                                                              }
                                                                            ),
                                                                          _: 2,
                                                                        },
                                                                        1024
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _: 2,
                                                                },
                                                                1024
                                                              )),
                                                          Cf,
                                                          Ef,
                                                          Af,
                                                          kf,
                                                        ]),
                                                        h(ze),
                                                        g("div", Ff, [
                                                          h(
                                                            J,
                                                            {
                                                              dense: "",
                                                              flat: "",
                                                              size: "xs",
                                                              onClick: (S) =>
                                                                k(Z, 1),
                                                            },
                                                            {
                                                              default: y(() => [
                                                                h(oe, {
                                                                  size: "xs",
                                                                  name: "linear_scale",
                                                                  color: "blue",
                                                                }),
                                                                h(
                                                                  At,
                                                                  {
                                                                    anchor:
                                                                      "bottom middle",
                                                                    self: "bottom middle",
                                                                    offset: [
                                                                      0, 35,
                                                                    ],
                                                                  },
                                                                  {
                                                                    default: y(
                                                                      () => [
                                                                        ue(
                                                                          " Draft Path "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 1,
                                                                  }
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"]
                                                          ),
                                                          h(
                                                            J,
                                                            {
                                                              dense: "",
                                                              flat: "",
                                                              size: "xs",
                                                              onClick: (S) =>
                                                                O(Z, 1),
                                                            },
                                                            {
                                                              default: y(() => [
                                                                h(oe, {
                                                                  size: "xs",
                                                                  name: "moving",
                                                                  color: "red",
                                                                }),
                                                                h(
                                                                  At,
                                                                  {
                                                                    anchor:
                                                                      "bottom middle",
                                                                    self: "bottom middle",
                                                                    offset: [
                                                                      0, 35,
                                                                    ],
                                                                  },
                                                                  {
                                                                    default: y(
                                                                      () => [
                                                                        ue(
                                                                          " Revision Path "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 1,
                                                                  }
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"]
                                                          ),
                                                          h(
                                                            J,
                                                            {
                                                              dense: "",
                                                              flat: "",
                                                              size: "xs",
                                                              onClick: (S) =>
                                                                Q(Z, 1),
                                                            },
                                                            {
                                                              default: y(() => [
                                                                ue("All "),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"]
                                                          ),
                                                        ]),
                                                      ]),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024
                                                ))
                                              : he("", !0),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ),
                                    ],
                                    64
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }),
              h(
                Wa,
                {
                  bordered: "",
                  class: "bg-grey-2 text-black flex flex-center q-pa-md",
                },
                {
                  default: y(() => [
                    h(
                      Ga,
                      {
                        modelValue: v.value,
                        "onUpdate:modelValue":
                          M[1] || (M[1] = (Z) => (v.value = Z)),
                        max: W(f),
                        input: "",
                        "direction-links": "",
                        "boundary-links": "",
                        "icon-first": "skip_previous",
                        "icon-last": "skip_next",
                        "icon-prev": "fast_rewind",
                        "icon-next": "fast_forward",
                        size: "sm",
                      },
                      null,
                      8,
                      ["modelValue", "max"]
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          }
        )
      );
    },
  }),
  tn = "q-slider__marker-labels",
  Sf = (n) => ({
    value: n,
  }),
  Tf = ({ marker: n }) =>
    pe(
      "div",
      {
        key: n.value,
        style: n.style,
        class: n.classes,
      },
      n.label
    ),
  Ln = [34, 37, 40, 33, 39, 38],
  $f = {
    ...Ws,
    ...ha,
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    innerMin: Number,
    innerMax: Number,
    step: {
      type: Number,
      default: 1,
      validator: (n) => n >= 0,
    },
    snap: Boolean,
    vertical: Boolean,
    reverse: Boolean,
    hideSelection: Boolean,
    color: String,
    markerLabelsClass: String,
    label: Boolean,
    labelColor: String,
    labelTextColor: String,
    labelAlways: Boolean,
    switchLabelSide: Boolean,
    markers: [Boolean, Number],
    markerLabels: [Boolean, Array, Object, Function],
    switchMarkerLabelsSide: Boolean,
    trackImg: String,
    trackColor: String,
    innerTrackImg: String,
    innerTrackColor: String,
    selectionColor: String,
    selectionImg: String,
    thumbSize: {
      type: String,
      default: "20px",
    },
    trackSize: {
      type: String,
      default: "4px",
    },
    disable: Boolean,
    readonly: Boolean,
    dense: Boolean,
    tabindex: [String, Number],
    thumbColor: String,
    thumbPath: {
      type: String,
      default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0",
    },
  },
  Mf = ["pan", "update:modelValue", "change"];
function Bf({
  updateValue: n,
  updatePosition: s,
  getDragging: e,
  formAttrs: t,
}) {
  const {
      props: o,
      emit: i,
      slots: a,
      proxy: { $q: r },
    } = Kt(),
    u = Gs(o, r),
    l = ga(t),
    c = N(!1),
    d = N(!1),
    f = N(!1),
    v = N(!1),
    w = G(() => (o.vertical === !0 ? "--v" : "--h")),
    E = G(() => "-" + (o.switchLabelSide === !0 ? "switched" : "standard")),
    C = G(() =>
      o.vertical === !0 ? o.reverse === !0 : o.reverse !== (r.lang.rtl === !0)
    ),
    x = G(() =>
      isNaN(o.innerMin) === !0 || o.innerMin < o.min ? o.min : o.innerMin
    ),
    b = G(() =>
      isNaN(o.innerMax) === !0 || o.innerMax > o.max ? o.max : o.innerMax
    ),
    m = G(() => o.disable !== !0 && o.readonly !== !0 && x.value < b.value),
    _ = G(() => (String(o.step).trim().split(".")[1] || "").length),
    D = G(() => (o.step === 0 ? 1 : o.step)),
    k = G(() => (m.value === !0 ? o.tabindex || 0 : -1)),
    O = G(() => o.max - o.min),
    Q = G(() => b.value - x.value),
    X = G(() => ne(x.value)),
    B = G(() => ne(b.value)),
    T = G(() =>
      o.vertical === !0
        ? C.value === !0
          ? "bottom"
          : "top"
        : C.value === !0
        ? "right"
        : "left"
    ),
    ae = G(() => (o.vertical === !0 ? "height" : "width")),
    K = G(() => (o.vertical === !0 ? "width" : "height")),
    R = G(() => (o.vertical === !0 ? "vertical" : "horizontal")),
    M = G(() => {
      const U = {
        role: "slider",
        "aria-valuemin": x.value,
        "aria-valuemax": b.value,
        "aria-orientation": R.value,
        "data-step": o.step,
      };
      return (
        o.disable === !0
          ? (U["aria-disabled"] = "true")
          : o.readonly === !0 && (U["aria-readonly"] = "true"),
        U
      );
    }),
    Z = G(
      () =>
        `q-slider q-slider${w.value} q-slider--${
          c.value === !0 ? "" : "in"
        }active inline no-wrap ` +
        (o.vertical === !0 ? "row" : "column") +
        (o.disable === !0
          ? " disabled"
          : " q-slider--enabled" +
            (m.value === !0 ? " q-slider--editable" : "")) +
        (f.value === "both" ? " q-slider--focus" : "") +
        (o.label || o.labelAlways === !0 ? " q-slider--label" : "") +
        (o.labelAlways === !0 ? " q-slider--label-always" : "") +
        (u.value === !0 ? " q-slider--dark" : "") +
        (o.dense === !0 ? " q-slider--dense q-slider--dense" + w.value : "")
    );
  function P(U) {
    const ke = "q-slider__" + U;
    return `${ke} ${ke}${w.value} ${ke}${w.value}${E.value}`;
  }
  function S(U) {
    const ke = "q-slider__" + U;
    return `${ke} ${ke}${w.value}`;
  }
  const te = G(() => {
      const U = o.selectionColor || o.color;
      return (
        "q-slider__selection absolute" + (U !== void 0 ? ` text-${U}` : "")
      );
    }),
    le = G(() => S("markers") + " absolute overflow-hidden"),
    ee = G(() => S("track-container")),
    $ = G(() => P("pin")),
    H = G(() => P("label")),
    L = G(() => P("text-container")),
    re = G(
      () =>
        P("marker-labels-container") +
        (o.markerLabelsClass !== void 0 ? ` ${o.markerLabelsClass}` : "")
    ),
    ie = G(
      () =>
        "q-slider__track relative-position no-outline" +
        (o.trackColor !== void 0 ? ` bg-${o.trackColor}` : "")
    ),
    Ce = G(() => {
      const U = {
        [K.value]: o.trackSize,
      };
      return (
        o.trackImg !== void 0 &&
          (U.backgroundImage = `url(${o.trackImg}) !important`),
        U
      );
    }),
    Pe = G(
      () =>
        "q-slider__inner absolute" +
        (o.innerTrackColor !== void 0 ? ` bg-${o.innerTrackColor}` : "")
    ),
    we = G(() => {
      const U = {
        [T.value]: `${100 * X.value}%`,
        [ae.value]: `${100 * (B.value - X.value)}%`,
      };
      return (
        o.innerTrackImg !== void 0 &&
          (U.backgroundImage = `url(${o.innerTrackImg}) !important`),
        U
      );
    });
  function se(U) {
    const { min: ke, max: Re, step: Ne } = o;
    let Ke = ke + U * (Re - ke);
    if (Ne > 0) {
      const Lt = (Ke - ke) % Ne;
      Ke += (Math.abs(Lt) >= Ne / 2 ? (Lt < 0 ? -1 : 1) * Ne : 0) - Lt;
    }
    return (
      _.value > 0 && (Ke = parseFloat(Ke.toFixed(_.value))),
      so(Ke, x.value, b.value)
    );
  }
  function ne(U) {
    return O.value === 0 ? 0 : (U - o.min) / O.value;
  }
  function et(U, ke) {
    const Re = pa(U),
      Ne =
        o.vertical === !0
          ? so((Re.top - ke.top) / ke.height, 0, 1)
          : so((Re.left - ke.left) / ke.width, 0, 1);
    return so(C.value === !0 ? 1 - Ne : Ne, X.value, B.value);
  }
  const He = G(() => (ca(o.markers) === !0 ? o.markers : D.value)),
    ut = G(() => {
      const U = [],
        ke = He.value,
        Re = o.max;
      let Ne = o.min;
      do U.push(Ne), (Ne += ke);
      while (Ne < Re);
      return U.push(Re), U;
    }),
    dt = G(() => {
      const U = ` ${tn}${w.value}-`;
      return (
        tn +
        `${U}${o.switchMarkerLabelsSide === !0 ? "switched" : "standard"}${U}${
          C.value === !0 ? "rtl" : "ltr"
        }`
      );
    }),
    je = G(() =>
      o.markerLabels === !1
        ? null
        : ce(o.markerLabels).map((U, ke) => ({
            index: ke,
            value: U.value,
            label: U.label || U.value,
            classes: dt.value + (U.classes !== void 0 ? " " + U.classes : ""),
            style: {
              ...me(U.value),
              ...(U.style || {}),
            },
          }))
    ),
    xe = G(() => ({
      markerList: je.value,
      markerMap: Ae.value,
      classes: dt.value,
      getStyle: me,
    })),
    j = G(() => {
      if (Q.value !== 0) {
        const U = (100 * He.value) / Q.value;
        return {
          ...we.value,
          backgroundSize: o.vertical === !0 ? `2px ${U}%` : `${U}% 2px`,
        };
      }
      return null;
    });
  function ce(U) {
    if (U === !1) return null;
    if (U === !0) return ut.value.map(Sf);
    if (typeof U == "function")
      return ut.value.map((Re) => {
        const Ne = U(Re);
        return ds(Ne) === !0
          ? {
              ...Ne,
              value: Re,
            }
          : {
              value: Re,
              label: Ne,
            };
      });
    const ke = ({ value: Re }) => Re >= o.min && Re <= o.max;
    return Array.isArray(U) === !0
      ? U.map((Re) =>
          ds(Re) === !0
            ? Re
            : {
                value: Re,
              }
        ).filter(ke)
      : Object.keys(U)
          .map((Re) => {
            const Ne = U[Re],
              Ke = Number(Re);
            return ds(Ne) === !0
              ? {
                  ...Ne,
                  value: Ke,
                }
              : {
                  value: Ke,
                  label: Ne,
                };
          })
          .filter(ke);
  }
  function me(U) {
    return {
      [T.value]: `${(100 * (U - o.min)) / O.value}%`,
    };
  }
  const Ae = G(() => {
    if (o.markerLabels === !1) return null;
    const U = {};
    return (
      je.value.forEach((ke) => {
        U[ke.value] = ke;
      }),
      U
    );
  });
  function I() {
    if (a["marker-label-group"] !== void 0)
      return a["marker-label-group"](xe.value);
    const U = a["marker-label"] || Tf;
    return je.value.map((ke) =>
      U({
        marker: ke,
        ...xe.value,
      })
    );
  }
  const Y = G(() => [
    [
      da,
      ve,
      void 0,
      {
        [R.value]: !0,
        prevent: !0,
        stop: !0,
        mouse: !0,
        mouseAllDir: !0,
      },
    ],
  ]);
  function ve(U) {
    U.isFinal === !0
      ? (v.value !== void 0 &&
          (s(U.evt),
          U.touch === !0 && n(!0),
          (v.value = void 0),
          i("pan", "end")),
        (c.value = !1),
        (f.value = !1))
      : U.isFirst === !0
      ? ((v.value = e(U.evt)), s(U.evt), n(), (c.value = !0), i("pan", "start"))
      : (s(U.evt), n());
  }
  function Se() {
    f.value = !1;
  }
  function We(U) {
    s(U, e(U)),
      n(),
      (d.value = !0),
      (c.value = !0),
      document.addEventListener("mouseup", mt, !0);
  }
  function mt() {
    (d.value = !1),
      (c.value = !1),
      n(!0),
      Se(),
      document.removeEventListener("mouseup", mt, !0);
  }
  function yo(U) {
    s(U, e(U)), n(!0);
  }
  function oo(U) {
    Ln.includes(U.keyCode) && n(!0);
  }
  function vo(U) {
    if (o.vertical === !0) return null;
    const ke = r.lang.rtl !== o.reverse ? 1 - U : U;
    return {
      transform: `translateX(calc(${2 * ke - 1} * ${o.thumbSize} / 2 + ${
        50 - 100 * ke
      }%))`,
    };
  }
  function Wn(U) {
    const ke = G(() =>
        d.value === !1 && (f.value === U.focusValue || f.value === "both")
          ? " q-slider--focus"
          : ""
      ),
      Re = G(
        () =>
          `q-slider__thumb q-slider__thumb${w.value} q-slider__thumb${
            w.value
          }-${C.value === !0 ? "rtl" : "ltr"} absolute non-selectable` +
          ke.value +
          (U.thumbColor.value !== void 0 ? ` text-${U.thumbColor.value}` : "")
      ),
      Ne = G(() => ({
        width: o.thumbSize,
        height: o.thumbSize,
        [T.value]: `${100 * U.ratio.value}%`,
        zIndex: f.value === U.focusValue ? 2 : void 0,
      })),
      Ke = G(() =>
        U.labelColor.value !== void 0 ? ` text-${U.labelColor.value}` : ""
      ),
      Lt = G(() => vo(U.ratio.value)),
      us = G(
        () =>
          "q-slider__text" +
          (U.labelTextColor.value !== void 0
            ? ` text-${U.labelTextColor.value}`
            : "")
      );
    return () => {
      const ls = [
        pe(
          "svg",
          {
            class: "q-slider__thumb-shape absolute-full",
            viewBox: "0 0 20 20",
            "aria-hidden": "true",
          },
          [
            pe("path", {
              d: o.thumbPath,
            }),
          ]
        ),
        pe("div", {
          class: "q-slider__focus-ring fit",
        }),
      ];
      return (
        (o.label === !0 || o.labelAlways === !0) &&
          (ls.push(
            pe(
              "div",
              {
                class: $.value + " absolute fit no-pointer-events" + Ke.value,
              },
              [
                pe(
                  "div",
                  {
                    class: H.value,
                    style: {
                      minWidth: o.thumbSize,
                    },
                  },
                  [
                    pe(
                      "div",
                      {
                        class: L.value,
                        style: Lt.value,
                      },
                      [
                        pe(
                          "span",
                          {
                            class: us.value,
                          },
                          U.label.value
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            )
          ),
          o.name !== void 0 && o.disable !== !0 && l(ls, "push")),
        pe(
          "div",
          {
            class: Re.value,
            style: Ne.value,
            ...U.getNodeData(),
          },
          ls
        )
      );
    };
  }
  function Gn(U, ke, Re, Ne) {
    const Ke = [];
    o.innerTrackColor !== "transparent" &&
      Ke.push(
        pe("div", {
          key: "inner",
          class: Pe.value,
          style: we.value,
        })
      ),
      o.selectionColor !== "transparent" &&
        Ke.push(
          pe("div", {
            key: "selection",
            class: te.value,
            style: U.value,
          })
        ),
      o.markers !== !1 &&
        Ke.push(
          pe("div", {
            key: "marker",
            class: le.value,
            style: j.value,
          })
        ),
      Ne(Ke);
    const Lt = [
      fa(
        "div",
        {
          key: "trackC",
          class: ee.value,
          tabindex: ke.value,
          ...Re.value,
        },
        [
          pe(
            "div",
            {
              class: ie.value,
              style: Ce.value,
            },
            Ke
          ),
        ],
        "slide",
        m.value,
        () => Y.value
      ),
    ];
    if (o.markerLabels !== !1) {
      const us = o.switchMarkerLabelsSide === !0 ? "unshift" : "push";
      Lt[us](
        pe(
          "div",
          {
            key: "markerL",
            class: re.value,
          },
          I()
        )
      );
    }
    return Lt;
  }
  return (
    pt(() => {
      document.removeEventListener("mouseup", mt, !0);
    }),
    {
      state: {
        active: c,
        focus: f,
        preventFocus: d,
        dragging: v,
        editable: m,
        classes: Z,
        tabindex: k,
        attributes: M,
        step: D,
        decimals: _,
        trackLen: O,
        innerMin: x,
        innerMinRatio: X,
        innerMax: b,
        innerMaxRatio: B,
        positionProp: T,
        sizeProp: ae,
        isReversed: C,
      },
      methods: {
        onActivate: We,
        onMobileClick: yo,
        onBlur: Se,
        onKeyup: oo,
        getContent: Gn,
        getThumbRenderFn: Wn,
        convertRatioToModel: se,
        convertModelToRatio: ne,
        getDraggingRatio: et,
      },
    }
  );
}
const If = () => ({});
var bo = ro({
  name: "QSlider",
  props: {
    ...$f,
    modelValue: {
      required: !0,
      default: null,
      validator: (n) => typeof n == "number" || n === null,
    },
    labelValue: [String, Number],
  },
  emits: Mf,
  setup(n, { emit: s }) {
    const {
        proxy: { $q: e },
      } = Kt(),
      { state: t, methods: o } = Bf({
        updateValue: w,
        updatePosition: C,
        getDragging: E,
        formAttrs: ma(n),
      }),
      i = N(null),
      a = N(0),
      r = N(0);
    function u() {
      r.value =
        n.modelValue === null
          ? t.innerMin.value
          : so(n.modelValue, t.innerMin.value, t.innerMax.value);
    }
    Je(() => `${n.modelValue}|${t.innerMin.value}|${t.innerMax.value}`, u), u();
    const l = G(() => o.convertModelToRatio(r.value)),
      c = G(() => (t.active.value === !0 ? a.value : l.value)),
      d = G(() => {
        const m = {
          [t.positionProp.value]: `${100 * t.innerMinRatio.value}%`,
          [t.sizeProp.value]: `${100 * (c.value - t.innerMinRatio.value)}%`,
        };
        return (
          n.selectionImg !== void 0 &&
            (m.backgroundImage = `url(${n.selectionImg}) !important`),
          m
        );
      }),
      f = o.getThumbRenderFn({
        focusValue: !0,
        getNodeData: If,
        ratio: c,
        label: G(() => (n.labelValue !== void 0 ? n.labelValue : r.value)),
        thumbColor: G(() => n.thumbColor || n.color),
        labelColor: G(() => n.labelColor),
        labelTextColor: G(() => n.labelTextColor),
      }),
      v = G(() =>
        t.editable.value !== !0
          ? {}
          : e.platform.is.mobile === !0
          ? {
              onClick: o.onMobileClick,
            }
          : {
              onMousedown: o.onActivate,
              onFocus: x,
              onBlur: o.onBlur,
              onKeydown: b,
              onKeyup: o.onKeyup,
            }
      );
    function w(m) {
      r.value !== n.modelValue && s("update:modelValue", r.value),
        m === !0 && s("change", r.value);
    }
    function E() {
      return i.value.getBoundingClientRect();
    }
    function C(m, _ = t.dragging.value) {
      const D = o.getDraggingRatio(m, _);
      (r.value = o.convertRatioToModel(D)),
        (a.value =
          n.snap !== !0 || n.step === 0 ? D : o.convertModelToRatio(r.value));
    }
    function x() {
      t.focus.value = !0;
    }
    function b(m) {
      if (!Ln.includes(m.keyCode)) return;
      Es(m);
      const _ = ([34, 33].includes(m.keyCode) ? 10 : 1) * t.step.value,
        D =
          ([34, 37, 40].includes(m.keyCode) ? -1 : 1) *
          (t.isReversed.value === !0 ? -1 : 1) *
          (n.vertical === !0 ? -1 : 1) *
          _;
      (r.value = so(
        parseFloat((r.value + D).toFixed(t.decimals.value)),
        t.innerMin.value,
        t.innerMax.value
      )),
        w();
    }
    return () => {
      const m = o.getContent(d, t.tabindex, v, (_) => {
        _.push(f());
      });
      return pe(
        "div",
        {
          ref: i,
          class:
            t.classes.value +
            (n.modelValue === null ? " q-slider--no-value" : ""),
          ...t.attributes.value,
          "aria-valuenow": n.modelValue,
        },
        m
      );
    };
  },
});
const to = (n) => (Wt("data-v-1afbc0fb"), (n = n()), Gt(), n),
  Rf = to(() =>
    g(
      "span",
      {
        class: "col-auto",
      },
      "Monitoring setting",
      -1
    )
  ),
  Lf = {
    class: "row items-center full-width",
  },
  Of = {
    class: "col-auto",
  },
  Nf = to(() =>
    g(
      "div",
      {
        class: "col-auto q-ml-sm text-weight-bold text-grey-10",
      },
      [g("div", null, "Resource")],
      -1
    )
  ),
  zf = {
    class: "row q-col-gutter-y-xs",
  },
  Wf = {
    class: "row items-center full-width",
  },
  Gf = {
    class: "col-auto",
  },
  Vf = to(() =>
    g(
      "div",
      {
        class: "col-auto q-ml-sm text-weight-bold text-grey-10",
      },
      [g("div", null, "Text")],
      -1
    )
  ),
  qf = {
    class: "row q-col-gutter-y-xs",
  },
  Xf = {
    class: "q-mt-md",
  },
  Qf = {
    class: "text-caption",
  },
  Zf = {
    class: "row items-center",
  },
  Uf = {
    class: "row items-center full-width",
  },
  jf = {
    class: "col-auto",
  },
  Yf = to(() =>
    g(
      "div",
      {
        class: "col-auto q-ml-sm text-weight-bold text-grey-10",
      },
      [g("div", null, "Opacity")],
      -1
    )
  ),
  Hf = {
    class: "q-mt-sm",
  },
  Kf = {
    class: "text-caption",
  },
  Jf = {
    class: "row items-center",
  },
  eg = {
    class: "q-mt-sm",
  },
  tg = {
    class: "text-caption",
  },
  og = {
    class: "row items-center",
  },
  sg = {
    class: "q-mt-sm",
  },
  ig = {
    class: "text-caption",
  },
  ng = {
    class: "row items-center",
  },
  ag = {
    class: "row items-center full-width",
  },
  rg = {
    class: "col-auto",
  },
  ug = to(() =>
    g(
      "div",
      {
        class: "col-auto q-ml-sm text-weight-bold text-grey-10",
      },
      [g("div", null, "Snippet")],
      -1
    )
  ),
  lg = {
    class: "row items-center full-width",
  },
  cg = {
    class: "col-auto",
  },
  dg = to(() =>
    g(
      "div",
      {
        class: "col-auto q-ml-sm text-weight-bold text-grey-10",
      },
      [g("div", null, "Developer Mode")],
      -1
    )
  ),
  hg = {
    class: "column q-gutter-y-md q-mx-md q-my-xs",
  },
  pg = to(() =>
    g(
      "div",
      {
        class: "cursor-pointer",
      },
      "Reset Setting",
      -1
    )
  ),
  fg = Te({
    __name: "SettingsCard",
    setup(n) {
      var ie, Ce, Pe;
      const { closeDrawerRight: s } = Fe(),
        e = qe("stage"),
        t = gt(),
        o = t.localStorage.getItem("monitoringSetting"),
        i = (ie = t.localStorage.getItem("devMode")) != null ? ie : !1,
        a = [
          {
            label: "Offline Worker",
            target: "offline",
            value: !0,
          },
          {
            label: "Sub Resource",
            target: "sub",
            value: !0,
          },
        ],
        r = [
          {
            label: "Worker",
            target: "Worker",
            value: !0,
          },
          {
            label: "Waypoint",
            target: "Location",
            value: !0,
          },
          {
            label: "Marker Type",
            target: "Marker",
            value: !0,
          },
          {
            label: "Area Type",
            target: "area",
            value: !0,
          },
          {
            label: "Zone",
            target: "Zone",
            value: !0,
          },
          {
            label: "Fleet Zone",
            target: "FleetZone",
            value: !0,
          },
          {
            label: "Tilt POI Text",
            target: "tilt",
            value: !1,
          },
          {
            label: "Ellipsis Text",
            target: "ellipsis",
            value: !1,
          },
        ],
        u = {
          area: 75,
          zone: 75,
          fleetZone: 75,
          textSize: 12,
        },
        l = [
          {
            id: "Location",
            label: "Location",
            icon: "img:/monitoring/resource/location.svg",
          },
          {
            id: "Marker",
            label: "Marker",
            icon: "img:/monitoring/resource/markers_front.svg",
          },
          {
            id: "Dim",
            label: "DIM",
            icon: "img:/monitoring/resource/dim_group.svg",
          },
          {
            id: "TeleporterGate",
            label: "Teleporter Gate",
            icon: "img:/monitoring/resource/teleporter_gate.svg",
          },
          {
            id: "Autodoor",
            label: "Autodoor",
            icon: "img:/monitoring/resource/autodoor.svg",
          },
          {
            id: "Slope",
            label: "Marker",
            icon: "img:/monitoring/resource/slope.svg",
          },
          {
            id: "ExclusiveArea",
            label: "Exclusive Area",
            icon: "img:/monitoring/resource/zone_exclusive.svg",
          },
          {
            id: "Zone",
            label: "Marker",
            icon: "img:/monitoring/resource/zone.svg",
          },
          {
            id: "FleetZone",
            label: "Fleet Zone",
            icon: "img:/monitoring/resource/fleet_zone.svg",
          },
        ],
        c = N([...l]),
        d = N(!1),
        f = N(!1),
        v = () => (c.value = [...l]),
        w = () => {
          c.value.forEach((we) =>
            e == null ? void 0 : e.moveToBottomByType(we.id)
          );
        },
        E = o ? o.resources : a,
        C = o ? o.text : r,
        x = o ? o.numberType : u,
        b = N(E),
        m = N(C),
        _ = N(x.textSize),
        D = N(x.area),
        k = N(x.zone),
        O = N(x.fleetZone),
        Q =
          (Ce = t.localStorage.getItem("coordinateDisplay")) != null ? Ce : !0,
        X = N(Q),
        B = N(!1),
        T =
          (Pe = t.localStorage.getItem("coordinatePixelDisplay")) != null
            ? Pe
            : !1,
        ae = N(T),
        {
          coordinateDisplay: K,
          coordinatePixelDisplay: R,
          trackingPathDisplay: M,
        } = Ye(Fe()),
        Z = (we) => {
          if ((re(), we.target == "offline")) {
            e == null || e.toggleOfflineWorkerDisplay(we.value);
            return;
          }
          if (we.target == "sub") {
            e == null || e.toggleSubShapeDisplay(we.value);
            return;
          }
        },
        P = (we) => {
          if ((re(), we.target == "area")) {
            Go.forEach((se) =>
              e == null ? void 0 : e.toggleTextDisplayByType(se, we.value)
            );
            return;
          }
          if (we.target == "tilt") {
            e == null || e.toggleTextTilt(we.value);
            return;
          }
          if (we.target == "ellipsis") {
            e == null || e.toggleTextEllipsis(we.value);
            return;
          }
          e == null || e.toggleTextDisplayByType(we.target, we.value);
        },
        S = () => {
          e == null || e.setTextSize(_.value), re();
        },
        te = (we) => {
          if ((re(), we == "area")) {
            const se = D.value / 100;
            Go.forEach((ne) =>
              e == null ? void 0 : e.setOpacityByType(ne, se)
            );
            return;
          }
          if (we == "Zone") {
            const se = k.value / 100;
            e == null || e.setOpacityByType(we, se);
            return;
          }
          if (we == "FleetZone") {
            const se = O.value / 100;
            e == null || e.setOpacityByType(we, se);
          }
        },
        le = () =>
          t.notify({
            message: "Left Click : Spotting / Right Click : Reset",
            color: "info",
            timeout: 0,
          });
      let ee;
      const $ = () => {
          t.localStorage.set("coordinateDisplay", X.value), (K.value = X.value);
        },
        H = () => {
          B.value
            ? ((ee = le()), e == null || e.measureDistance())
            : (e == null || e.closeMeasureDistance(), ee());
        },
        L = () => {
          t.localStorage.set("coordinatePixelDisplay", ae.value),
            (R.value = ae.value);
        };
      Mt(() => {}),
        pt(() => {
          console.log("[MonitoringSetting]::unmount"), re();
        });
      function re() {
        const we = {
          resources: b.value,
          text: m.value,
          numberType: {
            area: D.value,
            zone: k.value,
            fleetZone: O.value,
            textSize: _.value,
          },
        };
        t.localStorage.set("monitoringSetting", we);
      }
      return (we, se) => (
        A(),
        q(
          ho,
          {
            container: "",
            view: "lHh Lpr fFf",
          },
          {
            default: y(() => [
              h(
                uo,
                {
                  class: "bg-grey-2 text-black",
                },
                {
                  default: y(() => [
                    h(
                      yt,
                      {
                        flat: "",
                        class: "my-card bg-transparent",
                      },
                      {
                        default: y(() => [
                          h(kt, null, {
                            default: y(() => [
                              h(
                                $t,
                                {
                                  class:
                                    "text-subtitle1 text-weight-bold row items-center no-wrap",
                                },
                                {
                                  default: y(() => [Rf]),
                                  _: 1,
                                }
                              ),
                              h(
                                J,
                                {
                                  round: "",
                                  icon: "close",
                                  dense: "",
                                  flat: "",
                                  onClick: W(s),
                                },
                                null,
                                8,
                                ["onClick"]
                              ),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
              h(lo, null, {
                default: y(() => [
                  h(co, null, {
                    default: y(() => [
                      h(
                        vt,
                        {
                          class: "rounded-borders",
                        },
                        {
                          default: y(() => [
                            h(
                              Ue,
                              {
                                dense: "",
                                "hide-expand-icon": "",
                                "default-opened": "",
                              },
                              {
                                header: y(({ expanded: ne }) => [
                                  g("div", Lf, [
                                    g("div", Of, [
                                      h(
                                        oe,
                                        {
                                          size: "xs",
                                          color: "grey-8",
                                          name: ne
                                            ? "arrow_drop_down"
                                            : "arrow_right",
                                        },
                                        null,
                                        8,
                                        ["name"]
                                      ),
                                    ]),
                                    Nf,
                                  ]),
                                ]),
                                default: y(() => [
                                  h(
                                    yt,
                                    {
                                      class: "bg-transparent",
                                    },
                                    {
                                      default: y(() => [
                                        h(
                                          at,
                                          {
                                            class: "q-pt-sm",
                                          },
                                          {
                                            default: y(() => [
                                              g("div", zf, [
                                                (A(!0),
                                                ge(
                                                  Be,
                                                  null,
                                                  st(
                                                    b.value,
                                                    (ne, et) => (
                                                      A(),
                                                      ge(
                                                        "div",
                                                        {
                                                          key: et,
                                                          class: "col-6",
                                                        },
                                                        [
                                                          h(
                                                            Cs,
                                                            {
                                                              class:
                                                                "text-caption",
                                                              dense: "",
                                                              modelValue:
                                                                ne.value,
                                                              "onUpdate:modelValue":
                                                                [
                                                                  (He) =>
                                                                    (ne.value =
                                                                      He),
                                                                  (He) => Z(ne),
                                                                ],
                                                              size: "xs",
                                                              label: ne.label,
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              "modelValue",
                                                              "onUpdate:modelValue",
                                                              "label",
                                                            ]
                                                          ),
                                                        ]
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                              ]),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            h(
                              Ue,
                              {
                                dense: "",
                                "hide-expand-icon": "",
                                "default-opened": "",
                              },
                              {
                                header: y(({ expanded: ne }) => [
                                  g("div", Wf, [
                                    g("div", Gf, [
                                      h(
                                        oe,
                                        {
                                          size: "xs",
                                          color: "grey-8",
                                          name: ne
                                            ? "arrow_drop_down"
                                            : "arrow_right",
                                        },
                                        null,
                                        8,
                                        ["name"]
                                      ),
                                    ]),
                                    Vf,
                                  ]),
                                ]),
                                default: y(() => [
                                  h(
                                    yt,
                                    {
                                      class: "bg-transparent",
                                    },
                                    {
                                      default: y(() => [
                                        h(
                                          at,
                                          {
                                            class: "q-pt-sm",
                                          },
                                          {
                                            default: y(() => [
                                              g("div", qf, [
                                                (A(!0),
                                                ge(
                                                  Be,
                                                  null,
                                                  st(
                                                    m.value,
                                                    (ne, et) => (
                                                      A(),
                                                      ge(
                                                        "div",
                                                        {
                                                          key: et,
                                                          class: "col-6",
                                                        },
                                                        [
                                                          h(
                                                            Cs,
                                                            {
                                                              class:
                                                                "text-caption",
                                                              dense: "",
                                                              modelValue:
                                                                ne.value,
                                                              "onUpdate:modelValue":
                                                                [
                                                                  (He) =>
                                                                    (ne.value =
                                                                      He),
                                                                  (He) => P(ne),
                                                                ],
                                                              size: "xs",
                                                              label: ne.label,
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                              "modelValue",
                                                              "onUpdate:modelValue",
                                                              "label",
                                                            ]
                                                          ),
                                                        ]
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                              ]),
                                              g("div", Xf, [
                                                g(
                                                  "div",
                                                  Qf,
                                                  " Text Size: " +
                                                    V(_.value) +
                                                    " (8 to 24) ",
                                                  1
                                                ),
                                                g("div", Zf, [
                                                  h(
                                                    bo,
                                                    {
                                                      modelValue: _.value,
                                                      "onUpdate:modelValue": [
                                                        se[0] ||
                                                          (se[0] = (ne) =>
                                                            (_.value = ne)),
                                                        S,
                                                      ],
                                                      min: 8,
                                                      max: 24,
                                                    },
                                                    null,
                                                    8,
                                                    ["modelValue"]
                                                  ),
                                                ]),
                                              ]),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            h(
                              Ue,
                              {
                                dense: "",
                                "hide-expand-icon": "",
                                "default-opened": "",
                              },
                              {
                                header: y(({ expanded: ne }) => [
                                  g("div", Uf, [
                                    g("div", jf, [
                                      h(
                                        oe,
                                        {
                                          size: "xs",
                                          color: "grey-8",
                                          name: ne
                                            ? "arrow_drop_down"
                                            : "arrow_right",
                                        },
                                        null,
                                        8,
                                        ["name"]
                                      ),
                                    ]),
                                    Yf,
                                  ]),
                                ]),
                                default: y(() => [
                                  h(
                                    yt,
                                    {
                                      class: "bg-transparent",
                                    },
                                    {
                                      default: y(() => [
                                        h(
                                          at,
                                          {
                                            class: "q-pt-xs",
                                          },
                                          {
                                            default: y(() => [
                                              g("div", Hf, [
                                                g(
                                                  "div",
                                                  Kf,
                                                  " Area Type Opacity: " +
                                                    V(D.value) +
                                                    "% ",
                                                  1
                                                ),
                                                g("div", Jf, [
                                                  h(
                                                    bo,
                                                    {
                                                      modelValue: D.value,
                                                      "onUpdate:modelValue": [
                                                        se[1] ||
                                                          (se[1] = (ne) =>
                                                            (D.value = ne)),
                                                        se[2] ||
                                                          (se[2] = (ne) =>
                                                            te("area")),
                                                      ],
                                                      min: 0,
                                                      max: 100,
                                                    },
                                                    null,
                                                    8,
                                                    ["modelValue"]
                                                  ),
                                                ]),
                                              ]),
                                              g("div", eg, [
                                                g(
                                                  "div",
                                                  tg,
                                                  " Zone Opacity: " +
                                                    V(k.value) +
                                                    "% ",
                                                  1
                                                ),
                                                g("div", og, [
                                                  h(
                                                    bo,
                                                    {
                                                      modelValue: k.value,
                                                      "onUpdate:modelValue": [
                                                        se[3] ||
                                                          (se[3] = (ne) =>
                                                            (k.value = ne)),
                                                        se[4] ||
                                                          (se[4] = (ne) =>
                                                            te("Zone")),
                                                      ],
                                                      min: 0,
                                                      max: 100,
                                                    },
                                                    null,
                                                    8,
                                                    ["modelValue"]
                                                  ),
                                                ]),
                                              ]),
                                              g("div", sg, [
                                                g(
                                                  "div",
                                                  ig,
                                                  " Fleet Zone Opacity: " +
                                                    V(O.value) +
                                                    "% ",
                                                  1
                                                ),
                                                g("div", ng, [
                                                  h(
                                                    bo,
                                                    {
                                                      modelValue: O.value,
                                                      "onUpdate:modelValue": [
                                                        se[5] ||
                                                          (se[5] = (ne) =>
                                                            (O.value = ne)),
                                                        se[6] ||
                                                          (se[6] = (ne) =>
                                                            te("FleetZone")),
                                                      ],
                                                      min: 0,
                                                      max: 100,
                                                    },
                                                    null,
                                                    8,
                                                    ["modelValue"]
                                                  ),
                                                ]),
                                              ]),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            h(
                              Ue,
                              {
                                dense: "",
                                "hide-expand-icon": "",
                                "default-opened": "",
                              },
                              {
                                header: y(({ expanded: ne }) => [
                                  g("div", ag, [
                                    g("div", rg, [
                                      h(
                                        oe,
                                        {
                                          size: "xs",
                                          color: "grey-8",
                                          name: ne
                                            ? "arrow_drop_down"
                                            : "arrow_right",
                                        },
                                        null,
                                        8,
                                        ["name"]
                                      ),
                                    ]),
                                    ug,
                                  ]),
                                ]),
                                default: y(() => [
                                  h(
                                    yt,
                                    {
                                      class: "bg-transparent",
                                    },
                                    {
                                      default: y(() => [
                                        h(
                                          at,
                                          {
                                            class: "q-pt-sm",
                                          },
                                          {
                                            default: y(() => [
                                              h(
                                                _t,
                                                {
                                                  class: "text-caption",
                                                  modelValue: X.value,
                                                  "onUpdate:modelValue": [
                                                    se[7] ||
                                                      (se[7] = (ne) =>
                                                        (X.value = ne)),
                                                    $,
                                                  ],
                                                  label: "Coordinate Layer",
                                                  size: "xs",
                                                },
                                                null,
                                                8,
                                                ["modelValue"]
                                              ),
                                              h(
                                                _t,
                                                {
                                                  class: "text-caption",
                                                  modelValue: B.value,
                                                  "onUpdate:modelValue": [
                                                    se[8] ||
                                                      (se[8] = (ne) =>
                                                        (B.value = ne)),
                                                    H,
                                                  ],
                                                  label: "Distance Measurement",
                                                  size: "xs",
                                                },
                                                null,
                                                8,
                                                ["modelValue"]
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            W(i)
                              ? (A(),
                                q(
                                  Ue,
                                  {
                                    key: 0,
                                    dense: "",
                                    "hide-expand-icon": "",
                                    "default-opened": "",
                                  },
                                  {
                                    header: y(({ expanded: ne }) => [
                                      g("div", lg, [
                                        g("div", cg, [
                                          h(
                                            oe,
                                            {
                                              size: "xs",
                                              color: "grey-8",
                                              name: ne
                                                ? "arrow_drop_down"
                                                : "arrow_right",
                                            },
                                            null,
                                            8,
                                            ["name"]
                                          ),
                                        ]),
                                        dg,
                                      ]),
                                    ]),
                                    default: y(() => [
                                      h(
                                        yt,
                                        {
                                          class: "bg-transparent",
                                        },
                                        {
                                          default: y(() => [
                                            h(
                                              at,
                                              {
                                                class: "q-pt-xs",
                                              },
                                              {
                                                default: y(() => [
                                                  h(
                                                    _t,
                                                    {
                                                      class: "text-caption",
                                                      modelValue: ae.value,
                                                      "onUpdate:modelValue": [
                                                        se[9] ||
                                                          (se[9] = (ne) =>
                                                            (ae.value = ne)),
                                                        L,
                                                      ],
                                                      label:
                                                        "Coordinate Value [px]",
                                                      size: "xs",
                                                    },
                                                    null,
                                                    8,
                                                    ["modelValue"]
                                                  ),
                                                  h(
                                                    _t,
                                                    {
                                                      class: "text-caption",
                                                      modelValue: W(M),
                                                      "onUpdate:modelValue":
                                                        se[10] ||
                                                        (se[10] = (ne) =>
                                                          Jt(M)
                                                            ? (M.value = ne)
                                                            : null),
                                                      label: "Tracking Path",
                                                      size: "xs",
                                                    },
                                                    null,
                                                    8,
                                                    ["modelValue"]
                                                  ),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ))
                              : he("", !0),
                            g("div", hg, [
                              g(
                                "div",
                                {
                                  class: "cursor-pointer",
                                  onClick:
                                    se[11] || (se[11] = (ne) => (f.value = !0)),
                                },
                                " Layer Order "
                              ),
                              pg,
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                      h(
                        cn,
                        {
                          modelValue: f.value,
                          "onUpdate:modelValue":
                            se[15] || (se[15] = (ne) => (f.value = ne)),
                        },
                        {
                          default: y(() => [
                            h(
                              yt,
                              {
                                style: {
                                  width: "400px",
                                },
                              },
                              {
                                default: y(() => [
                                  h(kt, null, {
                                    default: y(() => [
                                      h($t, null, {
                                        default: y(() => [
                                          ue(" Change Layer Order "),
                                        ]),
                                        _: 1,
                                      }),
                                      h(J, {
                                        flat: "",
                                        round: "",
                                        dense: "",
                                        icon: "autorenew",
                                        onClick: v,
                                      }),
                                      h(J, {
                                        flat: "",
                                        round: "",
                                        dense: "",
                                        icon: "save",
                                        onClick: w,
                                      }),
                                      Ze(
                                        h(
                                          J,
                                          {
                                            flat: "",
                                            round: "",
                                            dense: "",
                                            icon: "close",
                                          },
                                          null,
                                          512
                                        ),
                                        [[Nt]]
                                      ),
                                    ]),
                                    _: 1,
                                  }),
                                  h(at, null, {
                                    default: y(() => [
                                      h(
                                        W(Va),
                                        {
                                          modelValue: c.value,
                                          "onUpdate:modelValue":
                                            se[12] ||
                                            (se[12] = (ne) => (c.value = ne)),
                                          onStart:
                                            se[13] ||
                                            (se[13] = (ne) => (d.value = !0)),
                                          onEnd:
                                            se[14] ||
                                            (se[14] = (ne) => (d.value = !1)),
                                          "item-key": "id",
                                        },
                                        {
                                          item: y((ne) => [
                                            h(
                                              Ve,
                                              {
                                                class:
                                                  "layer-item cursor-pointer",
                                              },
                                              {
                                                default: y(() => [
                                                  h(
                                                    $e,
                                                    {
                                                      avatar: "",
                                                    },
                                                    {
                                                      default: y(() => [
                                                        h(
                                                          oe,
                                                          {
                                                            color: "primary",
                                                            name: ne.element
                                                              .icon,
                                                          },
                                                          null,
                                                          8,
                                                          ["name"]
                                                        ),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024
                                                  ),
                                                  h(
                                                    $e,
                                                    null,
                                                    {
                                                      default: y(() => [
                                                        ue(
                                                          V(ne.element.label),
                                                          1
                                                        ),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1024
                                            ),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["modelValue"]
                                      ),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["modelValue"]
                      ),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          }
        )
      );
    },
  });
var gg = ft(fg, [["__scopeId", "data-v-1afbc0fb"]]);
const mg = Te({
  __name: "SiteRightDrawer",
  setup(n) {
    const { rightDrawerType: s, drawerRight: e } = Ye(Fe());
    return (t, o) => (
      A(),
      q(
        rn,
        {
          modelValue: W(e),
          "onUpdate:modelValue":
            o[0] || (o[0] = (i) => (Jt(e) ? (e.value = i) : null)),
          side: "right",
          class: "bg-grey-2",
          bordered: "",
          width: 300,
          breakpoint: 300,
        },
        {
          default: y(() => [
            W(s) === "legend"
              ? (A(),
                q(sl, {
                  key: 0,
                }))
              : W(s) === "resource"
              ? (A(),
                q(rl, {
                  key: 1,
                }))
              : W(s) === "fmz"
              ? (A(),
                q(nh, {
                  key: 2,
                }))
              : W(s) === "planing"
              ? (A(),
                q(Pf, {
                  key: 3,
                }))
              : W(s) === "setting"
              ? (A(),
                q(gg, {
                  key: 4,
                }))
              : he("", !0),
          ]),
          _: 1,
        },
        8,
        ["modelValue"]
      )
    );
  },
});
var On = ro({
  name: "QBar",
  props: {
    ...Ws,
    dense: Boolean,
  },
  setup(n, { slots: s }) {
    const {
        proxy: { $q: e },
      } = Kt(),
      t = Gs(n, e),
      o = G(
        () =>
          `q-bar row no-wrap items-center q-bar--${
            n.dense === !0 ? "dense" : "standard"
          }  q-bar--${t.value === !0 ? "dark" : "light"}`
      );
    return () =>
      pe(
        "div",
        {
          class: o.value,
          role: "toolbar",
        },
        es(s.default)
      );
  },
});
const mo = (n) => (Wt("data-v-56f0a9fe"), (n = n()), Gt(), n),
  yg = {
    class: "title text-weight-medium",
  },
  vg = {
    class: "row",
  },
  _g = {
    class: "row justify-between q-py-md",
  },
  xg = {
    class: "column items-center",
  },
  Dg = {
    class: "icon-name",
  },
  wg = {
    class: "column items-center",
  },
  bg = mo(() =>
    g(
      "div",
      {
        class: "icon-name",
      },
      "Occupied",
      -1
    )
  ),
  Cg = {
    class: "column items-center",
  },
  Eg = {
    class: "icon-name",
  },
  Ag = {
    class: "column items-center",
  },
  kg = {
    class: "icon-name",
  },
  Fg = {
    key: 0,
    class: "row q-ma-xs",
  },
  Pg = mo(() =>
    g(
      "div",
      {
        class: "col-3 justify-center title text-weight-medium",
      },
      "Report",
      -1
    )
  ),
  Sg = {
    class: "col-9 items-center",
  },
  Tg = {
    class: "icon-name q-mb-xs ellipsis",
  },
  $g = {
    class: "icon-name text-bold",
  },
  Mg = {
    class: "row",
  },
  Bg = {
    class: "column justify-center q-pl-xs report-bold",
  },
  Ig = {
    key: 1,
    class: "row q-ma-xs",
  },
  Rg = mo(() =>
    g(
      "div",
      {
        class: "col-3 title text-weight-medium",
      },
      "Position",
      -1
    )
  ),
  Lg = {
    class: "col-9 text-caption",
  },
  Og = {
    class: "row q-ma-xs",
  },
  Ng = {
    class: "col-3 title text-weight-medium",
  },
  zg = {
    class: "col-9 text-caption",
  },
  Wg = {
    class: "column",
  },
  Gg = {
    class: "row q-ma-xs justify-end",
  },
  Vg = mo(() =>
    g(
      "div",
      {
        class: "col-4 title text-weight-medium",
      },
      "Transporting",
      -1
    )
  ),
  qg = {
    class: "col-8 items-end text-caption",
  },
  Xg = {
    class: "row justify-end",
  },
  Qg = {
    class: "row q-ma-xs justify-end",
  },
  Zg = mo(() =>
    g(
      "div",
      {
        class: "col-4 title text-weight-medium",
      },
      " Toggle Status ",
      -1
    )
  ),
  Ug = {
    class: "col-8 items-end text-caption",
  },
  jg = {
    class: "row justify-end",
  },
  Yg = mo(() =>
    g(
      "span",
      {
        class: "q-ml-sm",
      },
      "Warning",
      -1
    )
  ),
  Hg = Te({
    __name: "WorkerCard",
    props: {
      workerId: null,
    },
    setup(n) {
      const s = n,
        e = gt(),
        { removeWorkerCard: t } = Fe(),
        { selectedMap: o } = Ye(Fe()),
        i = qe("stage"),
        a = qe("websocket"),
        r = qe("resourceManager");
      i == null || i.workerStore.get(s.workerId);
      const u = N(!0),
        l = i == null ? void 0 : i.trackingWorker$,
        c = N(!1),
        d = () => t(s.workerId),
        f = N(!1),
        v = N("worker-default"),
        w = N("1"),
        E = N(""),
        C = N(""),
        x = N(""),
        b = N("-"),
        m = N("-"),
        _ = N(""),
        D = N(""),
        k = N([]),
        O = N("-"),
        Q = N("-"),
        X = N(""),
        B = N("-"),
        T = N(!1),
        ae = N(0),
        K = N(""),
        R = N(""),
        M = N(""),
        Z = N(0),
        P = N([]),
        S = {
          worker: void 0,
          workerStatus: void 0,
          schedule: void 0,
        };
      (S.worker =
        a == null
          ? void 0
          : a
              .connectWorker2()
              .pipe(
                Yt((I) => I.operation == "update"),
                Yt((I) => I.document_id == s.workerId)
              )
              .subscribe((I) => {
                le(I.document);
              })),
        (S.schedule =
          a == null
            ? void 0
            : a
                .connectScheduler2()
                .pipe(Yt((I) => I.collection == "Report"))
                .subscribe((I) => {
                  var Y;
                  if (I.operation == "update") {
                    const ve = I.document;
                    we(ve);
                  }
                  I.operation == "delete" &&
                    ((Y = I.document) == null ? void 0 : Y.id) == K.value &&
                    ((T.value = !1),
                    (K.value = ""),
                    (R.value = ""),
                    (M.value = ""),
                    (P.value = []),
                    (Z.value = 0),
                    (ae.value = 0));
                })),
        te(),
        se(),
        l &&
          l.subscribe((I) => {
            c.value = I == s.workerId;
          }),
        Mt(() => {
          console.log("[WorkerCard]::onMounted", s.workerId);
        }),
        pt(() => {
          S.schedule && S.schedule.unsubscribe(),
            S.worker && S.worker.unsubscribe();
        });
      async function te() {
        let I = r == null ? void 0 : r.getWorkerRawDataById(s.workerId);
        !I && (I = await Ba(s.workerId)),
          I && ((C.value = I.name), (x.value = I.type_specific.ip), le(I));
      }
      function le(I) {
        var mt;
        const Y = I.type_specific.battery.battery_level,
          ve = new Date(I.updated_at),
          Se = Date.now() - ve.getTime(),
          We = I.type_specific.location.pose2d;
        (v.value = `worker-${I.status_p}`),
          (E.value = I.type_specific.location.map),
          (B.value = H(We)),
          (b.value = `${Y == null ? void 0 : Y.toFixed(0)}%`),
          (w.value = ee(I)),
          (m.value = $(Se)),
          (_.value = I.status_p.toUpperCase()),
          (D.value = I.status_p),
          (k.value = I.status_toggle),
          (v.value = `worker-${I.status_p}`),
          (X.value = new Date(I.updated_at).toLocaleString()),
          (Q.value = `${Se / 1e3} sec`),
          (O.value = (mt = I.type_specific.payload) != null ? mt : "-"),
          c.value && re();
      }
      function ee(I) {
        if (I.type_specific.battery.now_charging) return "charging";
        const Y = I.type_specific.battery.battery_level;
        return Y
          ? Y > 99
            ? "full"
            : Y > 89
            ? "6"
            : Y > 59
            ? "5"
            : Y > 29
            ? "4"
            : Y > 10
            ? "3"
            : "1"
          : "1";
      }
      function $(I) {
        let Y = "MISSING";
        return (
          I < 3e3
            ? (Y = "EXCELLENT")
            : I < 1e4
            ? (Y = "GOOD")
            : I < 3e4
            ? (Y = "NORMAL")
            : I < 6e4 && (Y = "BAD"),
          Y
        );
      }
      function H(I) {
        var We;
        const Y = I.x.toFixed(2),
          ve = I.y.toFixed(2),
          Se =
            (We = I.degree) != null
              ? We
              : Math.round(I.theta * (-180 / Math.PI));
        return `(${Y}, ${ve}, ${Se})`;
      }
      function L() {
        c.value
          ? ((c.value = !1), i == null || i.trackWorker(""))
          : ((c.value = !0), re());
      }
      function re() {
        o.value === E.value
          ? i == null || i.trackWorker(s.workerId)
          : ((o.value = E.value),
            i == null ||
              i.loadedMap$.subscribe(() => {
                i == null || i.trackWorker(s.workerId);
              }));
      }
      async function ie() {
        console.log("[WorkerCard]::releaseWorker-------"),
          await Ia(s.workerId)
            .then((I) => {
              const Y = `${C.value}(\uC774)\uAC00 \uC810\uC720 \uD574\uC81C\uB97C \uC694\uCCAD\uD558\uC600\uC2B5\uB2C8\uB2E4.`;
              (f.value = !1), Ce(Y, "positive");
            })
            .catch((I) => {
              const Y = I,
                ve = `Error: Release ${C.value}`;
              Pe(Y, ve), console.log("[ResourceCard]::save::error", Y.response);
            });
      }
      function Ce(I, Y = "primary") {
        return e.notify({
          message: I,
          color: Y,
        });
      }
      function Pe(I, Y) {
        var We;
        const ve = (We = I.response) == null ? void 0 : We.data;
        let Se = `<div>[${ve.error.code}] ${ve.error.message}</div>`;
        (Se += `<div>${ve.error.reason}</div>`),
          e.dialog({
            title: Y,
            message: Se,
            html: !0,
          });
      }
      function we(I) {
        I.worker === s.workerId && (K.value !== I.id ? se() : ne(I));
      }
      async function se() {
        const I = await qa(s.workerId);
        if (I.length) {
          const Y = I[0],
            ve = Y.result.returns;
          let Se = 0;
          if (ve) {
            ve.forEach((mt) => {
              mt.status == "success" && Se++;
            });
            const We = ve.length || 1;
            ae.value = Math.round((Se / We) * 100);
          }
          (K.value = Y.id),
            (R.value = Y.title),
            (P.value = Y.instructions),
            (Z.value = Se),
            et(Y),
            (T.value = !0);
        } else T.value = !1;
      }
      function ne(I) {
        const Y = I.result.current,
          ve = I.result.status,
          Se = I.result.status_msg,
          We = P.value.length;
        We &&
          ((Se == "PROCESS_FINISHED" || Se == "POST_PROCESS_FINISHED") &&
            (Y && (Z.value = Y), ve == "success" && (Z.value = We)),
          (ae.value = Math.round((Z.value / We) * 100)),
          et(I));
      }
      function et(I) {
        var mt;
        const Y = I.result.current,
          ve = P.value;
        let Se = "",
          We = "";
        if (ve) {
          const yo = ve[Y - 1];
          if (yo) {
            const oo = yo.action.func_name;
            let vo;
            (oo == "move" || oo == "use_resource") &&
              (vo =
                (mt = yo.action.args[0].value_alias) == null
                  ? void 0
                  : mt.alias),
              (Se = vo ? `${oo} [${vo}]` : oo),
              (We = `(${Y}/${ve.length})`);
          }
        }
        M.value = `${Se} ${We}`;
      }
      const He = N();
      let ut = !1,
        dt = 0,
        je = 0,
        xe = 0,
        j = 0;
      function ce(I) {
        I.preventDefault(), (ut = !0), (dt = I.clientX), (je = I.clientY);
      }
      function me(I) {
        if ((I.preventDefault(), !ut)) return;
        const Y = He.value;
        (xe = dt - I.clientX),
          (j = je - I.clientY),
          (dt = I.clientX),
          (je = I.clientY),
          (Y.style.top = `${Y.offsetTop - j}px`),
          (Y.style.left = `${Y.offsetLeft - xe}px`);
      }
      function Ae(I) {
        I.preventDefault(), (ut = !1);
      }
      return (I, Y) => (
        A(),
        ge(
          "div",
          {
            class: "worker-widget",
            ref_key: "workerCard",
            ref: He,
            onMousedown: ce,
            onMousemove: me,
            onMouseup: Ae,
          },
          [
            h(
              ho,
              {
                view: "lHh lpr lFf",
                container: "",
                class: hn([
                  [
                    u.value
                      ? T.value
                        ? "widget-report"
                        : "widget-full"
                      : "widget-mini",
                  ],
                  "shadow-2 rounded-borders",
                ]),
              },
              {
                default: y(() => [
                  h(
                    uo,
                    {
                      elevated: !1,
                    },
                    {
                      default: y(() => [
                        h(
                          On,
                          {
                            class: "bg-white text-black",
                          },
                          {
                            default: y(() => [
                              h(
                                oe,
                                {
                                  class: "rotate-270",
                                  name: `img:/monitoring/worker/${v.value}.svg`,
                                },
                                null,
                                8,
                                ["name"]
                              ),
                              g("div", yg, V(C.value), 1),
                              g("div", vg, [
                                h(
                                  rt,
                                  {
                                    dense: "",
                                    color: "primary",
                                    "text-color": "white",
                                    class: "chip-name q-mx-xm",
                                  },
                                  {
                                    default: y(() => [
                                      ue(V(D.value.toUpperCase()), 1),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              h(ze),
                              u.value
                                ? (A(),
                                  q(J, {
                                    key: 0,
                                    dense: "",
                                    flat: "",
                                    icon: "minimize",
                                    onClick:
                                      Y[0] || (Y[0] = (ve) => (u.value = !1)),
                                  }))
                                : (A(),
                                  q(J, {
                                    key: 1,
                                    dense: "",
                                    flat: "",
                                    icon: "crop_square",
                                    onClick:
                                      Y[1] || (Y[1] = (ve) => (u.value = !0)),
                                  })),
                              h(J, {
                                dense: "",
                                flat: "",
                                icon: "close",
                                onClick: d,
                              }),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  h(lo, null, {
                    default: y(() => [
                      u.value
                        ? (A(),
                          q(
                            co,
                            {
                              key: 0,
                              class: "no-scroll",
                            },
                            {
                              default: y(() => [
                                h(
                                  at,
                                  {
                                    class: "q-py-none",
                                  },
                                  {
                                    default: y(() => [
                                      g("div", _g, [
                                        g("div", xg, [
                                          h(
                                            J,
                                            {
                                              class: "icon-btn",
                                              flat: "",
                                              onClick: L,
                                            },
                                            {
                                              default: y(() => [
                                                c.value
                                                  ? (A(),
                                                    q(oe, {
                                                      key: 0,
                                                      class: "icon-btn-hover",
                                                      name: "gps_fixed",
                                                    }))
                                                  : (A(),
                                                    q(oe, {
                                                      key: 1,
                                                      class: "icon-btn-hover",
                                                      name: "gps_not_fixed",
                                                    })),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          g(
                                            "div",
                                            Dg,
                                            V(c.value ? "ON" : "OFF"),
                                            1
                                          ),
                                        ]),
                                        g("div", wg, [
                                          h(
                                            J,
                                            {
                                              class: "icon-btn",
                                              flat: "",
                                              onClick:
                                                Y[2] ||
                                                (Y[2] = (ve) => (f.value = !0)),
                                            },
                                            {
                                              default: y(() => [
                                                h(oe, {
                                                  class: "icon-btn-hover",
                                                  name: "logout",
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          bg,
                                        ]),
                                        h(ct, {
                                          vertical: "",
                                        }),
                                        g("div", Cg, [
                                          h(
                                            J,
                                            {
                                              class: "icon-btn",
                                              flat: "",
                                            },
                                            {
                                              default: y(() => [
                                                h(
                                                  oe,
                                                  {
                                                    name: `img:/monitoring/worker/battery_${w.value}.svg`,
                                                  },
                                                  null,
                                                  8,
                                                  ["name"]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          g("div", Eg, V(b.value), 1),
                                        ]),
                                        g("div", Ag, [
                                          h(
                                            J,
                                            {
                                              class: "icon-btn",
                                              flat: "",
                                            },
                                            {
                                              default: y(() => [
                                                h(oe, {
                                                  name: "signal_wifi_4_bar",
                                                }),
                                                h(At, null, {
                                                  default: y(() => [
                                                    ue(V(x.value), 1),
                                                  ]),
                                                  _: 1,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          g("div", kg, V(m.value), 1),
                                        ]),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                h(ct, {
                                  inset: "",
                                }),
                                h(
                                  at,
                                  {
                                    class: "q-py-xs",
                                    style: {
                                      "min-height": "60px",
                                    },
                                  },
                                  {
                                    default: y(() => [
                                      T.value
                                        ? (A(),
                                          ge("div", Fg, [
                                            Pg,
                                            g("div", Sg, [
                                              g("div", Tg, V(R.value), 1),
                                              g("div", $g, V(M.value), 1),
                                              g("div", Mg, [
                                                h(
                                                  bo,
                                                  {
                                                    class: "col-10",
                                                    readonly: "",
                                                    modelValue: ae.value,
                                                    "onUpdate:modelValue":
                                                      Y[3] ||
                                                      (Y[3] = (ve) =>
                                                        (ae.value = ve)),
                                                    min: 0,
                                                    max: 100,
                                                    color: "green",
                                                    "track-size": "8px",
                                                    "thumb-size": "0px",
                                                    "thumb-color": "green",
                                                  },
                                                  null,
                                                  8,
                                                  ["modelValue"]
                                                ),
                                                g(
                                                  "div",
                                                  Bg,
                                                  V(ae.value) + "% ",
                                                  1
                                                ),
                                              ]),
                                            ]),
                                          ]))
                                        : (A(),
                                          ge("div", Ig, [
                                            Rg,
                                            g("div", Lg, V(B.value), 1),
                                          ])),
                                      g("div", Og, [
                                        g("div", Ng, [
                                          ue(" Updated "),
                                          h(At, null, {
                                            default: y(() => [
                                              ue(V(X.value), 1),
                                            ]),
                                            _: 1,
                                          }),
                                        ]),
                                        g("div", zg, V(Q.value), 1),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                h(ct, {
                                  inset: "",
                                }),
                                h(
                                  at,
                                  {
                                    class: "q-py-sm",
                                  },
                                  {
                                    default: y(() => [
                                      g("div", Wg, [
                                        g("div", Gg, [
                                          Vg,
                                          g("div", qg, [
                                            g("div", Xg, V(O.value), 1),
                                          ]),
                                        ]),
                                        g("div", Qg, [
                                          Zg,
                                          g("div", Ug, [
                                            g("div", jg, [
                                              h(
                                                rt,
                                                {
                                                  dense: "",
                                                  color: "primary",
                                                  "text-color": "white",
                                                  class: "chip-name q-mx-xm",
                                                },
                                                {
                                                  default: y(() => [
                                                    ue(V(D.value), 1),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                              (A(!0),
                                              ge(
                                                Be,
                                                null,
                                                st(
                                                  k.value,
                                                  (ve, Se) => (
                                                    A(),
                                                    q(
                                                      rt,
                                                      {
                                                        dense: "",
                                                        color: "primary",
                                                        "text-color": "white",
                                                        class:
                                                          "chip-name q-mx-xm",
                                                        key: Se,
                                                      },
                                                      {
                                                        default: y(() => [
                                                          ue(V(ve), 1),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1024
                                                    )
                                                  )
                                                ),
                                                128
                                              )),
                                            ]),
                                          ]),
                                        ]),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                h(
                                  cn,
                                  {
                                    modelValue: f.value,
                                    "onUpdate:modelValue":
                                      Y[4] || (Y[4] = (ve) => (f.value = ve)),
                                    persistent: "",
                                  },
                                  {
                                    default: y(() => [
                                      h(yt, null, {
                                        default: y(() => [
                                          h(
                                            at,
                                            {
                                              class: "row items-center",
                                            },
                                            {
                                              default: y(() => [
                                                h(ya, {
                                                  icon: "warning",
                                                  color: "warning",
                                                  "text-color": "white",
                                                }),
                                                Yg,
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          h(
                                            at,
                                            {
                                              class: "row items-center",
                                            },
                                            {
                                              default: y(() => [
                                                ue(
                                                  " \uD574\uB2F9 worker\uAC00 FMS\uC5D0\uC11C \uC810\uC720\uD55C \uBAA8\uB4E0 \uC790\uC6D0\uC744 \uD574\uC81C\uD569\uB2C8\uB2E4. \uB85C\uBD07\uC744 \uC601\uC5ED \uBC16\uC73C\uB85C \uC218\uB3D9\uC73C\uB85C \uC774\uB3D9\uC2DC\uD0A8 \uD6C4 \uD574\uC81C \uD655\uC778\uC744 \uB20C\uB7EC\uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. \uB9CC\uC57D \uC815\uC0C1 \uB3D9\uC791 \uC911\uC778 worker\uC758 \uC810\uC720\uB97C \uD574\uC81C\uD55C \uACBD\uC6B0 \uB2E4\uB978 \uB85C\uBD07\uC774 \uD574\uB2F9 \uC601\uC5ED\uC5D0 \uC9C4\uC785\uD558\uB294 \uB4F1 \uC2DC\uC2A4\uD15C\uC774 \uC758\uB3C4\uD558\uC9C0 \uC54A\uAC8C \uB3D9\uC791\uD560 \uC218 \uC788\uC73C\uB2C8 \uC8FC\uC758\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. > "
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          h(
                                            dn,
                                            {
                                              align: "right",
                                            },
                                            {
                                              default: y(() => [
                                                Ze(
                                                  h(
                                                    J,
                                                    {
                                                      flat: "",
                                                      label: "Cancel",
                                                      color: "primary",
                                                    },
                                                    null,
                                                    512
                                                  ),
                                                  [[Nt]]
                                                ),
                                                h(J, {
                                                  flat: "",
                                                  label: "Release",
                                                  color: "primary",
                                                  onClick: ie,
                                                }),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 1,
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["modelValue"]
                                ),
                              ]),
                              _: 1,
                            }
                          ))
                        : he("", !0),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ["class"]
            ),
          ],
          544
        )
      );
    },
  });
var Kg = ft(Hg, [["__scopeId", "data-v-56f0a9fe"]]),
  Jg = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
  em =
    /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
  tm =
    /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
  xs = {
    Space_Separator: Jg,
    ID_Start: em,
    ID_Continue: tm,
  },
  Ge = {
    isSpaceSeparator(n) {
      return typeof n == "string" && xs.Space_Separator.test(n);
    },
    isIdStartChar(n) {
      return (
        typeof n == "string" &&
        ((n >= "a" && n <= "z") ||
          (n >= "A" && n <= "Z") ||
          n === "$" ||
          n === "_" ||
          xs.ID_Start.test(n))
      );
    },
    isIdContinueChar(n) {
      return (
        typeof n == "string" &&
        ((n >= "a" && n <= "z") ||
          (n >= "A" && n <= "Z") ||
          (n >= "0" && n <= "9") ||
          n === "$" ||
          n === "_" ||
          n === "\u200C" ||
          n === "\u200D" ||
          xs.ID_Continue.test(n))
      );
    },
    isDigit(n) {
      return typeof n == "string" && /[0-9]/.test(n);
    },
    isHexDigit(n) {
      return typeof n == "string" && /[0-9A-Fa-f]/.test(n);
    },
  };
let Ls, ot, Pt, Ko, zt, Dt, Xe, ei, ko;
var om = function (s, e) {
  (Ls = String(s)),
    (ot = "start"),
    (Pt = []),
    (Ko = 0),
    (zt = 1),
    (Dt = 0),
    (Xe = void 0),
    (ei = void 0),
    (ko = void 0);
  do (Xe = sm()), am[ot]();
  while (Xe.type !== "eof");
  return typeof e == "function"
    ? Os(
        {
          "": ko,
        },
        "",
        e
      )
    : ko;
};
function Os(n, s, e) {
  const t = n[s];
  if (t != null && typeof t == "object")
    if (Array.isArray(t))
      for (let o = 0; o < t.length; o++) {
        const i = String(o),
          a = Os(t, i, e);
        a === void 0
          ? delete t[i]
          : Object.defineProperty(t, i, {
              value: a,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      }
    else
      for (const o in t) {
        const i = Os(t, o, e);
        i === void 0
          ? delete t[o]
          : Object.defineProperty(t, o, {
              value: i,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      }
  return e.call(n, s, t);
}
let _e, ye, Co, Ft, Ee;
function sm() {
  for (_e = "default", ye = "", Co = !1, Ft = 1; ; ) {
    Ee = Tt();
    const n = Nn[_e]();
    if (n) return n;
  }
}
function Tt() {
  if (Ls[Ko]) return String.fromCodePoint(Ls.codePointAt(Ko));
}
function z() {
  const n = Tt();
  return (
    n ===
    `
`
      ? (zt++, (Dt = 0))
      : n
      ? (Dt += n.length)
      : Dt++,
    n && (Ko += n.length),
    n
  );
}
const Nn = {
  default() {
    switch (Ee) {
      case "	":
      case "\v":
      case "\f":
      case " ":
      case "\xA0":
      case "\uFEFF":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        z();
        return;
      case "/":
        z(), (_e = "comment");
        return;
      case void 0:
        return z(), Le("eof");
    }
    if (Ge.isSpaceSeparator(Ee)) {
      z();
      return;
    }
    return Nn[ot]();
  },
  comment() {
    switch (Ee) {
      case "*":
        z(), (_e = "multiLineComment");
        return;
      case "/":
        z(), (_e = "singleLineComment");
        return;
    }
    throw Oe(z());
  },
  multiLineComment() {
    switch (Ee) {
      case "*":
        z(), (_e = "multiLineCommentAsterisk");
        return;
      case void 0:
        throw Oe(z());
    }
    z();
  },
  multiLineCommentAsterisk() {
    switch (Ee) {
      case "*":
        z();
        return;
      case "/":
        z(), (_e = "default");
        return;
      case void 0:
        throw Oe(z());
    }
    z(), (_e = "multiLineComment");
  },
  singleLineComment() {
    switch (Ee) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        z(), (_e = "default");
        return;
      case void 0:
        return z(), Le("eof");
    }
    z();
  },
  value() {
    switch (Ee) {
      case "{":
      case "[":
        return Le("punctuator", z());
      case "n":
        return z(), Xt("ull"), Le("null", null);
      case "t":
        return z(), Xt("rue"), Le("boolean", !0);
      case "f":
        return z(), Xt("alse"), Le("boolean", !1);
      case "-":
      case "+":
        z() === "-" && (Ft = -1), (_e = "sign");
        return;
      case ".":
        (ye = z()), (_e = "decimalPointLeading");
        return;
      case "0":
        (ye = z()), (_e = "zero");
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        (ye = z()), (_e = "decimalInteger");
        return;
      case "I":
        return z(), Xt("nfinity"), Le("numeric", 1 / 0);
      case "N":
        return z(), Xt("aN"), Le("numeric", NaN);
      case '"':
      case "'":
        (Co = z() === '"'), (ye = ""), (_e = "string");
        return;
    }
    throw Oe(z());
  },
  identifierNameStartEscape() {
    if (Ee !== "u") throw Oe(z());
    z();
    const n = Ns();
    switch (n) {
      case "$":
      case "_":
        break;
      default:
        if (!Ge.isIdStartChar(n)) throw on();
        break;
    }
    (ye += n), (_e = "identifierName");
  },
  identifierName() {
    switch (Ee) {
      case "$":
      case "_":
      case "\u200C":
      case "\u200D":
        ye += z();
        return;
      case "\\":
        z(), (_e = "identifierNameEscape");
        return;
    }
    if (Ge.isIdContinueChar(Ee)) {
      ye += z();
      return;
    }
    return Le("identifier", ye);
  },
  identifierNameEscape() {
    if (Ee !== "u") throw Oe(z());
    z();
    const n = Ns();
    switch (n) {
      case "$":
      case "_":
      case "\u200C":
      case "\u200D":
        break;
      default:
        if (!Ge.isIdContinueChar(n)) throw on();
        break;
    }
    (ye += n), (_e = "identifierName");
  },
  sign() {
    switch (Ee) {
      case ".":
        (ye = z()), (_e = "decimalPointLeading");
        return;
      case "0":
        (ye = z()), (_e = "zero");
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        (ye = z()), (_e = "decimalInteger");
        return;
      case "I":
        return z(), Xt("nfinity"), Le("numeric", Ft * (1 / 0));
      case "N":
        return z(), Xt("aN"), Le("numeric", NaN);
    }
    throw Oe(z());
  },
  zero() {
    switch (Ee) {
      case ".":
        (ye += z()), (_e = "decimalPoint");
        return;
      case "e":
      case "E":
        (ye += z()), (_e = "decimalExponent");
        return;
      case "x":
      case "X":
        (ye += z()), (_e = "hexadecimal");
        return;
    }
    return Le("numeric", Ft * 0);
  },
  decimalInteger() {
    switch (Ee) {
      case ".":
        (ye += z()), (_e = "decimalPoint");
        return;
      case "e":
      case "E":
        (ye += z()), (_e = "decimalExponent");
        return;
    }
    if (Ge.isDigit(Ee)) {
      ye += z();
      return;
    }
    return Le("numeric", Ft * Number(ye));
  },
  decimalPointLeading() {
    if (Ge.isDigit(Ee)) {
      (ye += z()), (_e = "decimalFraction");
      return;
    }
    throw Oe(z());
  },
  decimalPoint() {
    switch (Ee) {
      case "e":
      case "E":
        (ye += z()), (_e = "decimalExponent");
        return;
    }
    if (Ge.isDigit(Ee)) {
      (ye += z()), (_e = "decimalFraction");
      return;
    }
    return Le("numeric", Ft * Number(ye));
  },
  decimalFraction() {
    switch (Ee) {
      case "e":
      case "E":
        (ye += z()), (_e = "decimalExponent");
        return;
    }
    if (Ge.isDigit(Ee)) {
      ye += z();
      return;
    }
    return Le("numeric", Ft * Number(ye));
  },
  decimalExponent() {
    switch (Ee) {
      case "+":
      case "-":
        (ye += z()), (_e = "decimalExponentSign");
        return;
    }
    if (Ge.isDigit(Ee)) {
      (ye += z()), (_e = "decimalExponentInteger");
      return;
    }
    throw Oe(z());
  },
  decimalExponentSign() {
    if (Ge.isDigit(Ee)) {
      (ye += z()), (_e = "decimalExponentInteger");
      return;
    }
    throw Oe(z());
  },
  decimalExponentInteger() {
    if (Ge.isDigit(Ee)) {
      ye += z();
      return;
    }
    return Le("numeric", Ft * Number(ye));
  },
  hexadecimal() {
    if (Ge.isHexDigit(Ee)) {
      (ye += z()), (_e = "hexadecimalInteger");
      return;
    }
    throw Oe(z());
  },
  hexadecimalInteger() {
    if (Ge.isHexDigit(Ee)) {
      ye += z();
      return;
    }
    return Le("numeric", Ft * Number(ye));
  },
  string() {
    switch (Ee) {
      case "\\":
        z(), (ye += im());
        return;
      case '"':
        if (Co) return z(), Le("string", ye);
        ye += z();
        return;
      case "'":
        if (!Co) return z(), Le("string", ye);
        ye += z();
        return;
      case `
`:
      case "\r":
        throw Oe(z());
      case "\u2028":
      case "\u2029":
        rm(Ee);
        break;
      case void 0:
        throw Oe(z());
    }
    ye += z();
  },
  start() {
    switch (Ee) {
      case "{":
      case "[":
        return Le("punctuator", z());
    }
    _e = "value";
  },
  beforePropertyName() {
    switch (Ee) {
      case "$":
      case "_":
        (ye = z()), (_e = "identifierName");
        return;
      case "\\":
        z(), (_e = "identifierNameStartEscape");
        return;
      case "}":
        return Le("punctuator", z());
      case '"':
      case "'":
        (Co = z() === '"'), (_e = "string");
        return;
    }
    if (Ge.isIdStartChar(Ee)) {
      (ye += z()), (_e = "identifierName");
      return;
    }
    throw Oe(z());
  },
  afterPropertyName() {
    if (Ee === ":") return Le("punctuator", z());
    throw Oe(z());
  },
  beforePropertyValue() {
    _e = "value";
  },
  afterPropertyValue() {
    switch (Ee) {
      case ",":
      case "}":
        return Le("punctuator", z());
    }
    throw Oe(z());
  },
  beforeArrayValue() {
    if (Ee === "]") return Le("punctuator", z());
    _e = "value";
  },
  afterArrayValue() {
    switch (Ee) {
      case ",":
      case "]":
        return Le("punctuator", z());
    }
    throw Oe(z());
  },
  end() {
    throw Oe(z());
  },
};
function Le(n, s) {
  return {
    type: n,
    value: s,
    line: zt,
    column: Dt,
  };
}
function Xt(n) {
  for (const s of n) {
    if (Tt() !== s) throw Oe(z());
    z();
  }
}
function im() {
  switch (Tt()) {
    case "b":
      return z(), "\b";
    case "f":
      return z(), "\f";
    case "n":
      return (
        z(),
        `
`
      );
    case "r":
      return z(), "\r";
    case "t":
      return z(), "	";
    case "v":
      return z(), "\v";
    case "0":
      if ((z(), Ge.isDigit(Tt()))) throw Oe(z());
      return "\0";
    case "x":
      return z(), nm();
    case "u":
      return z(), Ns();
    case `
`:
    case "\u2028":
    case "\u2029":
      return z(), "";
    case "\r":
      return (
        z(),
        Tt() ===
          `
` && z(),
        ""
      );
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw Oe(z());
    case void 0:
      throw Oe(z());
  }
  return z();
}
function nm() {
  let n = "",
    s = Tt();
  if (!Ge.isHexDigit(s) || ((n += z()), (s = Tt()), !Ge.isHexDigit(s)))
    throw Oe(z());
  return (n += z()), String.fromCodePoint(parseInt(n, 16));
}
function Ns() {
  let n = "",
    s = 4;
  for (; s-- > 0; ) {
    const e = Tt();
    if (!Ge.isHexDigit(e)) throw Oe(z());
    n += z();
  }
  return String.fromCodePoint(parseInt(n, 16));
}
const am = {
  start() {
    if (Xe.type === "eof") throw Qt();
    Ds();
  },
  beforePropertyName() {
    switch (Xe.type) {
      case "identifier":
      case "string":
        (ei = Xe.value), (ot = "afterPropertyName");
        return;
      case "punctuator":
        Lo();
        return;
      case "eof":
        throw Qt();
    }
  },
  afterPropertyName() {
    if (Xe.type === "eof") throw Qt();
    ot = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (Xe.type === "eof") throw Qt();
    Ds();
  },
  beforeArrayValue() {
    if (Xe.type === "eof") throw Qt();
    if (Xe.type === "punctuator" && Xe.value === "]") {
      Lo();
      return;
    }
    Ds();
  },
  afterPropertyValue() {
    if (Xe.type === "eof") throw Qt();
    switch (Xe.value) {
      case ",":
        ot = "beforePropertyName";
        return;
      case "}":
        Lo();
    }
  },
  afterArrayValue() {
    if (Xe.type === "eof") throw Qt();
    switch (Xe.value) {
      case ",":
        ot = "beforeArrayValue";
        return;
      case "]":
        Lo();
    }
  },
  end() {},
};
function Ds() {
  let n;
  switch (Xe.type) {
    case "punctuator":
      switch (Xe.value) {
        case "{":
          n = {};
          break;
        case "[":
          n = [];
          break;
      }
      break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
      n = Xe.value;
      break;
  }
  if (ko === void 0) ko = n;
  else {
    const s = Pt[Pt.length - 1];
    Array.isArray(s)
      ? s.push(n)
      : Object.defineProperty(s, ei, {
          value: n,
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
  }
  if (n !== null && typeof n == "object")
    Pt.push(n),
      Array.isArray(n)
        ? (ot = "beforeArrayValue")
        : (ot = "beforePropertyName");
  else {
    const s = Pt[Pt.length - 1];
    s == null
      ? (ot = "end")
      : Array.isArray(s)
      ? (ot = "afterArrayValue")
      : (ot = "afterPropertyValue");
  }
}
function Lo() {
  Pt.pop();
  const n = Pt[Pt.length - 1];
  n == null
    ? (ot = "end")
    : Array.isArray(n)
    ? (ot = "afterArrayValue")
    : (ot = "afterPropertyValue");
}
function Oe(n) {
  return Jo(
    n === void 0
      ? `JSON5: invalid end of input at ${zt}:${Dt}`
      : `JSON5: invalid character '${zn(n)}' at ${zt}:${Dt}`
  );
}
function Qt() {
  return Jo(`JSON5: invalid end of input at ${zt}:${Dt}`);
}
function on() {
  return (Dt -= 5), Jo(`JSON5: invalid identifier character at ${zt}:${Dt}`);
}
function rm(n) {
  console.warn(
    `JSON5: '${zn(n)}' in strings is not valid ECMAScript; consider escaping`
  );
}
function zn(n) {
  const s = {
    "'": "\\'",
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\v",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  };
  if (s[n]) return s[n];
  if (n < " ") {
    const e = n.charCodeAt(0).toString(16);
    return "\\x" + ("00" + e).substring(e.length);
  }
  return n;
}
function Jo(n) {
  const s = new SyntaxError(n);
  return (s.lineNumber = zt), (s.columnNumber = Dt), s;
}
var um = function (s, e, t) {
  const o = [];
  let i = "",
    a,
    r,
    u = "",
    l;
  if (
    (e != null &&
      typeof e == "object" &&
      !Array.isArray(e) &&
      ((t = e.space), (l = e.quote), (e = e.replacer)),
    typeof e == "function")
  )
    r = e;
  else if (Array.isArray(e)) {
    a = [];
    for (const E of e) {
      let C;
      typeof E == "string"
        ? (C = E)
        : (typeof E == "number" ||
            E instanceof String ||
            E instanceof Number) &&
          (C = String(E)),
        C !== void 0 && a.indexOf(C) < 0 && a.push(C);
    }
  }
  return (
    t instanceof Number
      ? (t = Number(t))
      : t instanceof String && (t = String(t)),
    typeof t == "number"
      ? t > 0 &&
        ((t = Math.min(10, Math.floor(t))), (u = "          ".substr(0, t)))
      : typeof t == "string" && (u = t.substr(0, 10)),
    c("", {
      "": s,
    })
  );
  function c(E, C) {
    let x = C[E];
    switch (
      (x != null &&
        (typeof x.toJSON5 == "function"
          ? (x = x.toJSON5(E))
          : typeof x.toJSON == "function" && (x = x.toJSON(E))),
      r && (x = r.call(C, E, x)),
      x instanceof Number
        ? (x = Number(x))
        : x instanceof String
        ? (x = String(x))
        : x instanceof Boolean && (x = x.valueOf()),
      x)
    ) {
      case null:
        return "null";
      case !0:
        return "true";
      case !1:
        return "false";
    }
    if (typeof x == "string") return d(x);
    if (typeof x == "number") return String(x);
    if (typeof x == "object") return Array.isArray(x) ? w(x) : f(x);
  }
  function d(E) {
    const C = {
        "'": 0.1,
        '"': 0.2,
      },
      x = {
        "'": "\\'",
        '"': '\\"',
        "\\": "\\\\",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "	": "\\t",
        "\v": "\\v",
        "\0": "\\0",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029",
      };
    let b = "";
    for (let _ = 0; _ < E.length; _++) {
      const D = E[_];
      switch (D) {
        case "'":
        case '"':
          C[D]++, (b += D);
          continue;
        case "\0":
          if (Ge.isDigit(E[_ + 1])) {
            b += "\\x00";
            continue;
          }
      }
      if (x[D]) {
        b += x[D];
        continue;
      }
      if (D < " ") {
        let k = D.charCodeAt(0).toString(16);
        b += "\\x" + ("00" + k).substring(k.length);
        continue;
      }
      b += D;
    }
    const m = l || Object.keys(C).reduce((_, D) => (C[_] < C[D] ? _ : D));
    return (b = b.replace(new RegExp(m, "g"), x[m])), m + b + m;
  }
  function f(E) {
    if (o.indexOf(E) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    o.push(E);
    let C = i;
    i = i + u;
    let x = a || Object.keys(E),
      b = [];
    for (const _ of x) {
      const D = c(_, E);
      if (D !== void 0) {
        let k = v(_) + ":";
        u !== "" && (k += " "), (k += D), b.push(k);
      }
    }
    let m;
    if (b.length === 0) m = "{}";
    else {
      let _;
      if (u === "") (_ = b.join(",")), (m = "{" + _ + "}");
      else {
        let D =
          `,
` + i;
        (_ = b.join(D)),
          (m =
            `{
` +
            i +
            _ +
            `,
` +
            C +
            "}");
      }
    }
    return o.pop(), (i = C), m;
  }
  function v(E) {
    if (E.length === 0) return d(E);
    const C = String.fromCodePoint(E.codePointAt(0));
    if (!Ge.isIdStartChar(C)) return d(E);
    for (let x = C.length; x < E.length; x++)
      if (!Ge.isIdContinueChar(String.fromCodePoint(E.codePointAt(x))))
        return d(E);
    return E;
  }
  function w(E) {
    if (o.indexOf(E) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    o.push(E);
    let C = i;
    i = i + u;
    let x = [];
    for (let m = 0; m < E.length; m++) {
      const _ = c(String(m), E);
      x.push(_ !== void 0 ? _ : "null");
    }
    let b;
    if (x.length === 0) b = "[]";
    else if (u === "") {
      let m = x.join(",");
      b = "[" + m + "]";
    } else {
      let m =
          `,
` + i,
        _ = x.join(m);
      b =
        `[
` +
        i +
        _ +
        `,
` +
        C +
        "]";
    }
    return o.pop(), (i = C), b;
  }
};
const lm = {
  parse: om,
  stringify: um,
};
var cm = lm;
const dm = (n) => (Wt("data-v-6c9b2f26"), (n = n()), Gt(), n),
  hm = dm(() =>
    g(
      "div",
      {
        class: "title text-weight-medium",
      },
      "Draw Tracking Path",
      -1
    )
  ),
  pm = Te({
    __name: "TrackingPathCard",
    setup(n) {
      const s = gt(),
        e = qe("stage"),
        t = N(!0),
        o = N("m"),
        i = [
          {
            label: "Pixel",
            value: "px",
          },
          {
            label: "Meter",
            value: "m",
          },
        ],
        a = N("");
      Mt(() => {
        e == null || e.initTrackingPath();
      }),
        pt(() => {
          e == null || e.closeTrackingPath();
        });
      function r(m, _ = "primary") {
        return s.notify({
          message: m,
          color: _,
        });
      }
      function u() {
        try {
          const m = cm.parse(a.value);
          e == null || e.drawTrackingPath(m, o.value);
        } catch (m) {
          r(m.message);
        }
      }
      function l() {
        e == null || e.closeTrackingPath();
      }
      const c = N();
      let d = !1,
        f = 0,
        v = 0,
        w = 0,
        E = 0;
      function C(m) {
        m.preventDefault(), (d = !0), (f = m.clientX), (v = m.clientY);
      }
      function x(m) {
        if ((m.preventDefault(), !d)) return;
        const _ = c.value;
        (w = f - m.clientX),
          (E = v - m.clientY),
          (f = m.clientX),
          (v = m.clientY),
          (_.style.top = `${_.offsetTop - E}px`),
          (_.style.left = `${_.offsetLeft - w}px`);
      }
      function b(m) {
        d = !1;
      }
      return (
        Mt(() => {}),
        pt(() => {}),
        (m, _) => (
          A(),
          ge(
            "div",
            {
              class: "tool-widget",
              ref_key: "pathCard",
              ref: c,
            },
            [
              h(
                ho,
                {
                  view: "lHh lpr lFf",
                  container: "",
                  class: hn([
                    "shadow-2 rounded-borders",
                    [t.value ? "widget-full" : "widget-mini"],
                  ]),
                },
                {
                  default: y(() => [
                    h(
                      uo,
                      {
                        elevated: !1,
                      },
                      {
                        default: y(() => [
                          h(
                            On,
                            {
                              onMousedown: C,
                              onMousemove: x,
                              onMouseup: b,
                              class: "bg-white text-black widget-header",
                            },
                            {
                              default: y(() => [
                                h(oe, {
                                  name: "timeline",
                                }),
                                hm,
                                h(ze),
                                t.value
                                  ? (A(),
                                    q(J, {
                                      key: 0,
                                      dense: "",
                                      flat: "",
                                      icon: "minimize",
                                      onClick:
                                        _[0] || (_[0] = (D) => (t.value = !1)),
                                    }))
                                  : (A(),
                                    q(J, {
                                      key: 1,
                                      dense: "",
                                      flat: "",
                                      icon: "crop_square",
                                      onClick:
                                        _[1] || (_[1] = (D) => (t.value = !0)),
                                    })),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    h(lo, null, {
                      default: y(() => [
                        t.value
                          ? (A(),
                            q(
                              co,
                              {
                                key: 0,
                                class: "no-scroll",
                              },
                              {
                                default: y(() => [
                                  h(
                                    at,
                                    {
                                      class: "q-py-sm",
                                    },
                                    {
                                      default: y(() => [
                                        h(
                                          va,
                                          {
                                            modelValue: o.value,
                                            "onUpdate:modelValue":
                                              _[2] ||
                                              (_[2] = (D) => (o.value = D)),
                                            options: i,
                                            inline: "",
                                          },
                                          null,
                                          8,
                                          ["modelValue"]
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                  h(ct, {
                                    inset: "",
                                  }),
                                  h(
                                    at,
                                    {
                                      class: "q-py-sm",
                                      style: {
                                        "min-height": "100px",
                                      },
                                    },
                                    {
                                      default: y(() => [
                                        Ze(
                                          g(
                                            "textarea",
                                            {
                                              "onUpdate:modelValue":
                                                _[3] ||
                                                (_[3] = (D) => (a.value = D)),
                                              placeholder:
                                                "ex) [{x: 0, y: 0}, {x: 10, y: 10}]",
                                              style: {
                                                width: "265px",
                                                height: "110px",
                                              },
                                            },
                                            null,
                                            512
                                          ),
                                          [[_a, a.value]]
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                  h(ct, {
                                    inset: "",
                                  }),
                                  h(
                                    dn,
                                    {
                                      align: "around",
                                    },
                                    {
                                      default: y(() => [
                                        h(
                                          J,
                                          {
                                            flat: "",
                                            onClick: u,
                                          },
                                          {
                                            default: y(() => [ue("Draw")]),
                                            _: 1,
                                          }
                                        ),
                                        h(
                                          J,
                                          {
                                            flat: "",
                                            onClick: l,
                                          },
                                          {
                                            default: y(() => [ue("Clear")]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ))
                          : he("", !0),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
                8,
                ["class"]
              ),
            ],
            512
          )
        )
      );
    },
  });
var fm = ft(pm, [["__scopeId", "data-v-6c9b2f26"]]);
const gm = xa("map-setting", {
    state: () => ({
      scale: 1,
      rotation: 0,
    }),
    actions: {
      setScale(n) {
        this.scale = n;
      },
      setRotation(n) {
        this.rotation = n;
      },
    },
  }),
  mm = ["top", "right", "bottom", "left"],
  ym = {
    type: {
      type: String,
      default: "a",
    },
    outline: Boolean,
    push: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    color: String,
    textColor: String,
    glossy: Boolean,
    square: Boolean,
    padding: String,
    label: {
      type: [String, Number],
      default: "",
    },
    labelPosition: {
      type: String,
      default: "right",
      validator: (n) => mm.includes(n),
    },
    externalLabel: Boolean,
    hideLabel: {
      type: Boolean,
    },
    labelClass: [Array, String, Object],
    labelStyle: [Array, String, Object],
    disable: Boolean,
    tabindex: [Number, String],
  };
function vm(n, s) {
  return {
    formClass: G(() => `q-fab--form-${n.square === !0 ? "square" : "rounded"}`),
    stacked: G(
      () =>
        n.externalLabel === !1 && ["top", "bottom"].includes(n.labelPosition)
    ),
    labelProps: G(() => {
      if (n.externalLabel === !0) {
        const e = n.hideLabel === null ? s.value === !1 : n.hideLabel;
        return {
          action: "push",
          data: {
            class: [
              n.labelClass,
              `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${n.labelPosition}` +
                (e === !0 ? " q-fab__label--external-hidden" : ""),
            ],
            style: n.labelStyle,
          },
        };
      }
      return {
        action: ["left", "top"].includes(n.labelPosition) ? "unshift" : "push",
        data: {
          class: [
            n.labelClass,
            `q-fab__label q-fab__label--internal q-fab__label--internal-${n.labelPosition}` +
              (n.hideLabel === !0 ? " q-fab__label--internal-hidden" : ""),
          ],
          style: n.labelStyle,
        },
      };
    }),
  };
}
const _m = ["up", "right", "down", "left"],
  xm = ["left", "center", "right"];
var ws = ro({
  name: "QFab",
  props: {
    ...ym,
    ...Da,
    icon: String,
    activeIcon: String,
    hideIcon: Boolean,
    hideLabel: {
      default: null,
    },
    direction: {
      type: String,
      default: "right",
      validator: (n) => _m.includes(n),
    },
    persistent: Boolean,
    verticalActionsAlign: {
      type: String,
      default: "center",
      validator: (n) => xm.includes(n),
    },
  },
  emits: wa,
  setup(n, { slots: s }) {
    const e = N(null),
      t = N(n.modelValue === !0),
      o = ln(),
      {
        proxy: { $q: i },
      } = Kt(),
      { formClass: a, labelProps: r } = vm(n, t),
      u = G(() => n.persistent !== !0),
      { hide: l, toggle: c } = ba({
        showing: t,
        hideOnRouteChange: u,
      }),
      d = G(() => ({
        opened: t.value,
      })),
      f = G(
        () =>
          `q-fab z-fab row inline justify-center q-fab--align-${n.verticalActionsAlign} ${a.value}` +
          (t.value === !0 ? " q-fab--opened" : " q-fab--closed")
      ),
      v = G(
        () =>
          `q-fab__actions flex no-wrap inline q-fab__actions--${
            n.direction
          } q-fab__actions--${t.value === !0 ? "opened" : "closed"}`
      ),
      w = G(() => {
        const b = {
          id: o,
          role: "menu",
        };
        return t.value !== !0 && (b["aria-hidden"] = "true"), b;
      }),
      E = G(
        () =>
          `q-fab__icon-holder  q-fab__icon-holder--${
            t.value === !0 ? "opened" : "closed"
          }`
      );
    function C(b, m) {
      const _ = s[b],
        D = `q-fab__${b} absolute-full`;
      return _ === void 0
        ? pe(oe, {
            class: D,
            name: n[m] || i.iconSet.fab[m],
          })
        : pe(
            "div",
            {
              class: D,
            },
            _(d.value)
          );
    }
    function x() {
      const b = [];
      return (
        n.hideIcon !== !0 &&
          b.push(
            pe(
              "div",
              {
                class: E.value,
              },
              [C("icon", "icon"), C("active-icon", "activeIcon")]
            )
          ),
        (n.label !== "" || s.label !== void 0) &&
          b[r.value.action](
            pe(
              "div",
              r.value.data,
              s.label !== void 0 ? s.label(d.value) : [n.label]
            )
          ),
        Ea(s.tooltip, b)
      );
    }
    return (
      Oo(Ca, {
        showing: t,
        onChildClick(b) {
          l(b), e.value !== null && e.value.$el.focus();
        },
      }),
      () =>
        pe(
          "div",
          {
            class: f.value,
          },
          [
            pe(
              J,
              {
                ref: e,
                class: a.value,
                ...n,
                noWrap: !0,
                stack: n.stacked,
                align: void 0,
                icon: void 0,
                label: void 0,
                noCaps: !0,
                fab: !0,
                "aria-expanded": t.value === !0 ? "true" : "false",
                "aria-haspopup": "true",
                "aria-controls": o,
                onClick: c,
              },
              x
            ),
            pe(
              "div",
              {
                class: v.value,
                ...w.value,
              },
              es(s.default)
            ),
          ]
        )
    );
  },
});
const Dm = Te({
  __name: "SitePageSticky",
  setup(n) {
    const {
        drawerLeft: s,
        drawerRight: e,
        rightDrawerType: t,
        mode: o,
        selectedMap: i,
      } = Ye(Fe()),
      { maps: a } = Fe(),
      r = N(a),
      u = (_) => {
        (e.value = !0), (t.value = _);
      },
      l = G(() => (s.value ? [300, 0] : [0, 0])),
      c = () => {
        s.value = !s.value;
      },
      d = N(),
      f = N(!1);
    gm();
    const v = qe("stage");
    console.log("[SiteSticky::MapControl]::init", v, a);
    const w = () => (v == null ? void 0 : v.setStageScaleUp()),
      E = () => (v == null ? void 0 : v.setStageScaleDown()),
      C = (_) => (v == null ? void 0 : v.rotateStage(_)),
      x = () => (v == null ? void 0 : v.resetStage());
    pt(() => {
      s.value = !0;
    });
    function b(_, D) {
      if (_ === "") {
        D(() => {
          r.value = a;
        });
        return;
      }
      D(() => {
        r.value = a.filter((k) => k.label.includes(_));
      });
    }
    function m(_) {
      var D;
      u(_), (D = d.value) == null || D.hide();
    }
    return (_, D) => (
      A(),
      ge(
        Be,
        null,
        [
          h(
            No,
            {
              position: "left",
              offset: W(l),
            },
            {
              default: y(() => [
                h(
                  J,
                  {
                    icon: W(s) ? "chevron_left" : "chevron_right",
                    dense: "",
                    unelevated: "",
                    style: {
                      width: "40px",
                      height: "70px",
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    },
                    color: "grey-2",
                    "text-color": "black",
                    onClick: c,
                  },
                  null,
                  8,
                  ["icon"]
                ),
              ]),
              _: 1,
            },
            8,
            ["offset"]
          ),
          h(
            No,
            {
              position: "top-right",
              offset: [65, 18],
            },
            {
              default: y(() => [
                W(o) !== "edit"
                  ? (A(),
                    q(
                      qs,
                      {
                        key: 0,
                        modelValue: W(i),
                        "onUpdate:modelValue":
                          D[0] ||
                          (D[0] = (k) => (Jt(i) ? (i.value = k) : null)),
                        "use-input": "",
                        "input-debounce": "1",
                        options: r.value,
                        onFilter: b,
                        "emit-value": "",
                        "map-options": "",
                        outlined: !0,
                        dense: "",
                        "bg-color": "white",
                        style: {
                          width: "320px",
                        },
                      },
                      {
                        prepend: y(() => [
                          h(oe, {
                            name: "map",
                            color: "primary",
                          }),
                          h(ct, {
                            class: "q-mx-sm",
                            vertical: "",
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue", "options"]
                    ))
                  : he("", !0),
              ]),
              _: 1,
            }
          ),
          h(
            No,
            {
              position: "top-right",
              offset: [18, 8],
            },
            {
              default: y(() => [
                h(
                  vt,
                  {
                    class: "bg-white rounded-borders q-mt-sm",
                    bordered: "",
                  },
                  {
                    default: y(() => [
                      Ze(
                        (A(),
                        q(
                          Ve,
                          {
                            clickable: "",
                            onClick: D[1] || (D[1] = (k) => m("legend")),
                          },
                          {
                            default: y(() => [
                              h($e, null, {
                                default: y(() => [
                                  h(oe, {
                                    color: "grey-8",
                                    name: "info",
                                    size: "sm",
                                  }),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }
                        )),
                        [[Zt]]
                      ),
                    ]),
                    _: 1,
                  }
                ),
                h(
                  vt,
                  {
                    class: "bg-white rounded-borders q-my-sm",
                    bordered: "",
                    separator: "",
                  },
                  {
                    default: y(() => [
                      Ze(
                        (A(),
                        q(
                          Ve,
                          {
                            clickable: "",
                            onClick: w,
                          },
                          {
                            default: y(() => [
                              h($e, null, {
                                default: y(() => [
                                  h(oe, {
                                    color: "grey-8",
                                    name: "add",
                                    size: "sm",
                                  }),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }
                        )),
                        [[Zt]]
                      ),
                      Ze(
                        (A(),
                        q(
                          Ve,
                          {
                            clickable: "",
                            onClick: E,
                          },
                          {
                            default: y(() => [
                              h($e, null, {
                                default: y(() => [
                                  h(oe, {
                                    color: "grey-8",
                                    name: "remove",
                                    size: "sm",
                                  }),
                                ]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }
                        )),
                        [[Zt]]
                      ),
                    ]),
                    _: 1,
                  }
                ),
                h(
                  W(ws),
                  {
                    ref_key: "fabControl",
                    ref: d,
                    modelValue: f.value,
                    "onUpdate:modelValue":
                      D[10] || (D[10] = (k) => (f.value = k)),
                    square: "",
                    unelevated: !1,
                    glossy: !1,
                    dense: "",
                    color: "grey-2",
                    "text-color": "grey-8",
                    icon: "keyboard_arrow_down",
                    "active-icon": "keyboard_arrow_up",
                    padding: "sm",
                    direction: "down",
                  },
                  {
                    default: y(() => [
                      W(o) !== "edit"
                        ? (A(),
                          q(
                            vt,
                            {
                              key: 0,
                              class: "bg-white rounded-borders q-mt-sm",
                              bordered: "",
                              separator: "",
                            },
                            {
                              default: y(() => [
                                Ze(
                                  (A(),
                                  q(
                                    Ve,
                                    {
                                      clickable: "",
                                      onClick:
                                        D[2] || (D[2] = (k) => m("planing")),
                                    },
                                    {
                                      default: y(() => [
                                        h($e, null, {
                                          default: y(() => [
                                            h(oe, {
                                              color: "grey-8",
                                              name: "repeat",
                                              size: "sm",
                                            }),
                                          ]),
                                          _: 1,
                                        }),
                                      ]),
                                      _: 1,
                                    }
                                  )),
                                  [[Zt]]
                                ),
                                Ze(
                                  (A(),
                                  q(
                                    Ve,
                                    {
                                      clickable: "",
                                      onClick:
                                        D[3] || (D[3] = (k) => m("setting")),
                                    },
                                    {
                                      default: y(() => [
                                        h($e, null, {
                                          default: y(() => [
                                            h(oe, {
                                              color: "grey-8",
                                              name: "settings",
                                              size: "sm",
                                            }),
                                          ]),
                                          _: 1,
                                        }),
                                      ]),
                                      _: 1,
                                    }
                                  )),
                                  [[Zt]]
                                ),
                              ]),
                              _: 1,
                            }
                          ))
                        : he("", !0),
                      h(
                        vt,
                        {
                          class: "bg-white rounded-borders q-mt-sm",
                          bordered: "",
                          separator: "",
                        },
                        {
                          default: y(() => [
                            h(
                              Ve,
                              {
                                dense: "",
                                class: "rotation-item",
                              },
                              {
                                default: y(() => [
                                  h(
                                    W(ws),
                                    {
                                      square: "",
                                      dense: "",
                                      unelevated: "",
                                      direction: "left",
                                      icon: "rotate_left",
                                      "active-icon": "keyboard_arrow_right",
                                      "text-color": "grey-8",
                                      padding: "0px",
                                    },
                                    {
                                      default: y(() => [
                                        h(
                                          J,
                                          {
                                            flat: "",
                                            dense: "",
                                            size: "md",
                                            class: "bg-white",
                                            onClick:
                                              D[4] || (D[4] = (k) => C(-1)),
                                          },
                                          {
                                            default: y(() => [
                                              h(oe, {
                                                name: "img:/icons/left1.svg",
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        h(
                                          J,
                                          {
                                            flat: "",
                                            dense: "",
                                            size: "md",
                                            class: "bg-white",
                                            onClick:
                                              D[5] || (D[5] = (k) => C(-15)),
                                          },
                                          {
                                            default: y(() => [
                                              h(oe, {
                                                name: "img:/icons/left15.svg",
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        h(
                                          J,
                                          {
                                            flat: "",
                                            dense: "",
                                            size: "md",
                                            class: "bg-white",
                                            onClick:
                                              D[6] || (D[6] = (k) => C(-45)),
                                          },
                                          {
                                            default: y(() => [
                                              h(oe, {
                                                name: "img:/icons/left45.svg",
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            h(
                              Ve,
                              {
                                dense: "",
                                class: "rotation-item",
                              },
                              {
                                default: y(() => [
                                  h(
                                    W(ws),
                                    {
                                      square: "",
                                      dense: "",
                                      unelevated: "",
                                      direction: "left",
                                      icon: "rotate_right",
                                      "active-icon": "keyboard_arrow_right",
                                      "text-color": "grey-8",
                                      padding: "0px",
                                    },
                                    {
                                      default: y(() => [
                                        h(
                                          J,
                                          {
                                            flat: "",
                                            dense: "",
                                            size: "md",
                                            class: "bg-white",
                                            onClick:
                                              D[7] || (D[7] = (k) => C(1)),
                                          },
                                          {
                                            default: y(() => [
                                              h(oe, {
                                                name: "img:/icons/right1.svg",
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        h(
                                          J,
                                          {
                                            flat: "",
                                            dense: "",
                                            size: "md",
                                            class: "bg-white",
                                            onClick:
                                              D[8] || (D[8] = (k) => C(15)),
                                          },
                                          {
                                            default: y(() => [
                                              h(oe, {
                                                name: "img:/icons/right15.svg",
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        h(
                                          J,
                                          {
                                            flat: "",
                                            dense: "",
                                            size: "md",
                                            class: "bg-white",
                                            onClick:
                                              D[9] || (D[9] = (k) => C(45)),
                                          },
                                          {
                                            default: y(() => [
                                              h(oe, {
                                                name: "img:/icons/right45.svg",
                                              }),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            Ze(
                              (A(),
                              q(
                                Ve,
                                {
                                  clickable: "",
                                  onClick: x,
                                },
                                {
                                  default: y(() => [
                                    h($e, null, {
                                      default: y(() => [
                                        h(oe, {
                                          color: "grey-8",
                                          name: "refresh",
                                          size: "sm",
                                        }),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                }
                              )),
                              [[Zt]]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue"]
                ),
              ]),
              _: 1,
            }
          ),
        ],
        64
      )
    );
  },
});
var wm = ft(Dm, [["__scopeId", "data-v-1e7ad9e8"]]);
class bm {
  constructor(s, e) {
    p(this, "currentMapId", "");
    p(this, "mapItems", []);
    p(this, "resourcesOnMap");
    p(this, "workersOnMap", []);
    p(this, "workersAll", []);
    p(this, "mapMap", new Map());
    p(this, "resourceMap", new Map());
    p(this, "workerMap", new Map());
    p(this, "stageService");
    p(this, "fmzService");
    p(this, "websocketService");
    p(this, "changedOnMap$", new Me());
    p(this, "subscription", {
      config: void 0,
      worker: void 0,
    });
    p(this, "resourceOperations", {
      insert: (s) => {
        this.addResource(s), this.stageService.insertResource(s);
      },
      update: (s) => {
        this.deleteResource(s),
          this.addResource(s),
          this.stageService.updateResource(s);
      },
      delete: (s) => {
        this.deleteResource(s), this.stageService.deleteResource(s);
      },
    });
    p(this, "fmzOperations", {
      insert: (s) => {
        this.addFmz(s), this.fmzService.insertResource(s);
      },
      update: (s) => {
        this.deleteFmz(s), this.addFmz(s), this.fmzService.updateResource(s);
      },
      delete: (s) => {
        this.fmzService.deleteResource(s);
      },
    });
    p(this, "workerOperations", {
      insert: (s) => {
        this.addWorker(s), this.stageService.loadWorker(s);
      },
      update: (s) => {
        this.checkWorkerMap(s);
      },
      delete: (s) => {
        this.deleteWorker(s), this.stageService.removeWorker(s.id);
      },
    });
    (this.stageService = s),
      (this.fmzService = e),
      (this.websocketService = s.websocketService);
  }
  setMaps(s) {
    (this.mapItems = s),
      this.mapItems.forEach((e) => {
        this.mapMap.set(e.id, e);
      });
  }
  getMapById(s) {
    return this.mapMap.get(s);
  }
  setResources(s) {
    (this.resourcesOnMap = s), this.resourceMap.clear();
    for (const e in s)
      s[e].forEach((o) => {
        this.resourceMap.set(o.id, o);
      });
    console.log(
      "[ResourceManager]::setResource",
      this.resourcesOnMap,
      this.resourceMap
    ),
      this.stageService.loadResources(s);
  }
  getResourceById(s) {
    return this.resourceMap.get(s);
  }
  addFmzs(s) {
    (this.resourcesOnMap.FMZ = s),
      s.forEach((e) => {
        this.resourceMap.set(e.id, e);
      }),
      this.fmzService.loadFmzOnStage(s);
  }
  addResource(s) {
    const e = s.resource_type,
      t = this.resourcesOnMap[e];
    t ? t.push(s) : (this.resourcesOnMap[e] = [s]),
      this.resourceMap.set(s.id, s);
  }
  addFmz(s) {
    const e = this.resourcesOnMap.FMZ;
    e ? e.push(s) : (this.resourcesOnMap.FMZ = [s]),
      this.resourceMap.set(s.id, s);
  }
  deleteResource(s) {
    const e = this.resourceMap.get(s.id),
      t = e == null ? void 0 : e.resource_type,
      o = this.resourcesOnMap[t],
      i =
        o == null
          ? void 0
          : o.findIndex((a) => a.id === (e == null ? void 0 : e.id));
    i > -1 && o.splice(i, 1),
      this.resourceMap.delete(e == null ? void 0 : e.id);
  }
  deleteFmz(s) {
    const e = this.resourcesOnMap.FMZ,
      t = e.findIndex((o) => o.id === s.id);
    t > -1 && e.splice(t, 1), this.resourceMap.delete(s.id);
  }
  setWorkers(s) {
    this.workerMap.clear(),
      s.forEach((e) => {
        this.workerMap.set(e.id, e);
      }),
      this.stageService.loadWorkers(s);
  }
  getWorkerById(s) {
    return this.workerMap.get(s);
  }
  getWorkers() {
    const s = [];
    for (const [e, t] of this.workerMap) s.push(t);
    return s;
  }
  addWorker(s) {
    this.workerMap.set(s.id, s);
  }
  deleteWorker(s) {
    this.workerMap.delete(s.id);
  }
  subscribeConfiguration(s) {
    var e;
    this.unsubscribeConfiguration(),
      (this.currentMapId = s),
      (this.subscription.config =
        (e = this.websocketService) == null
          ? void 0
          : e.connectConfiguration(s).subscribe((t) => {
              t.collection === "FMZ"
                ? this.handleFMZMessage(t.operation, t.document)
                : this.handleResourceMessage(t.operation, t.document),
                this.changedOnMap$.next(t.document);
            }));
  }
  unsubscribeConfiguration() {
    var s;
    (s = this.subscription.config) == null || s.unsubscribe();
  }
  subscribeWorker() {
    var s;
    this.unsubscribeWorker(),
      (this.subscription.worker =
        (s = this.websocketService) == null
          ? void 0
          : s.connectWorker2().subscribe((e) => {
              this.handleWorkerMessage(e.operation, e.document),
                e.operation !== "update" && this.changedOnMap$.next(e.document);
            }));
  }
  unsubscribeWorker() {
    var s;
    (s = this.subscription.worker) == null || s.unsubscribe();
  }
  handleResourceMessage(s, e) {
    this.resourceOperations[s](e);
  }
  handleFMZMessage(s, e) {
    this.fmzOperations[s](e);
  }
  handleWorkerMessage(s, e) {
    this.workerOperations[s](e);
  }
  checkWorkerMap(s) {
    const e = s.type_specific.location.map == this.currentMapId,
      t = this.workerMap.has(s.id);
    e
      ? t
        ? this.workerMap.set(s.id, s)
        : (this.stageService.loadWorker(s),
          this.workerMap.set(s.id, s),
          this.changedOnMap$.next(s))
      : t &&
        (this.stageService.removeWorker(s.id),
        this.workerMap.delete(s.id),
        this.changedOnMap$.next(s));
  }
  isWorkerOnMap(s) {
    return this.workerMap.has(s);
  }
  getWorkerRawDataById(s) {
    return this.workerMap.get(s);
  }
}
const Cm = (n) => (Wt("data-v-d0c0b086"), (n = n()), Gt(), n),
  Em = Cm(() =>
    g(
      "div",
      {
        id: "monitoring-map",
        class: "map-wrapper no-scroll",
      },
      null,
      -1
    )
  ),
  Am = {
    id: "popup-menu",
  },
  km = {
    class: "column q-ma-md",
  },
  Fm = {
    style: {
      "font-weight": "500",
    },
  },
  Pm = {
    style: {
      color: "#7b7b7b",
      "font-size": "12px",
    },
  },
  Sm = {
    class: "row q-mt-sm",
  },
  Tm = {
    class: "row items-center",
  },
  $m = {
    class: "col-6",
  },
  Mm = {
    class: "col-6 text-grey-7",
  },
  Bm = {
    class: "row justify-end",
  },
  Im = Te({
    __name: "index",
    setup(n) {
      var xe;
      const {
          maps: s,
          setSelectedMap: e,
          typeItems: t,
          setViewingResource: o,
          setEmptyResource: i,
          setEditingResource: a,
          setViewingFmz: r,
          setEditingFmz: u,
          closeDrawerRight: l,
        } = Fe(),
        {
          mode: c,
          selectedMap: d,
          selectedResource: f,
          coordinateDisplay: v,
          coordinatePixelDisplay: w,
          trackingPathDisplay: E,
        } = Ye(Fe()),
        C = gt(),
        x = we(),
        b = qe("websocket"),
        m = new wu(b);
      Oo("stage", m);
      const _ = new bu(m);
      Oo("fmz", _);
      const D = new bm(m, _);
      Oo("resourceManager", D);
      const k = f,
        { selectedWorkers: O } = Ye(Fe()),
        Q = N(""),
        X = N(),
        B = N(!0),
        T = C.localStorage.getItem("projectCode") || "default",
        ae = (xe = C.localStorage.getItem("viewWorkerPath")) != null ? xe : !0,
        K = N(ae),
        R = ii().query.map,
        M = ii().query.worker;
      Je(d, async (j) => {
        !j ||
          ((t.length = 0),
          await P(),
          await S(),
          D.subscribeConfiguration(d.value),
          m.loadedMap$.next(j),
          se(),
          Pe(j),
          i(),
          l());
      }),
        Mt(() => {
          Z();
        }),
        pt(() => {
          d.value = "";
        });
      async function Z() {
        console.log("@_[MonitoringMain]::getBaseData----------< initStage"),
          m.initStage("monitoring-map"),
          m.bindEvent2Stage((I) => {});
        const j = await Ra().catch((I) => {
            console.log("@_[MonitoringMain]::initMapStage -----< getMaps", I);
          }),
          ce = j.data;
        console.log("[rawMaps]", j),
          (s.length = 0),
          ce.forEach((I) => {
            (I.label = I.name), (I.value = I.id), s.push(I);
          }),
          s.sort((I, Y) => (I.name >= Y.name ? 1 : -1)),
          D.setMaps(s);
        const me = C.localStorage.getItem("lastSelectedMap"),
          Ae = me != null ? me : ce[0].id;
        e(R ? R.valueOf() : Ae), Pe(Ae);
      }
      async function P() {
        var Ae;
        const j = await La(d.value);
        m.loadBaseMap(j),
          (v.value =
            (Ae = C.localStorage.getItem("coordinateDisplay")) != null
              ? Ae
              : !0),
          te(v.value);
        const { data: ce } = await fn(d.value, !0);
        T == "default" && delete ce.WorkingStation;
        const me = ce;
        D.setResources(me), Ce();
      }
      async function S() {
        const j = await gn(d.value);
        if (
          (m.setViewWorkerPathGlobal(K.value),
          D.subscribeWorker(),
          D.setWorkers(j),
          M)
        ) {
          const ce = m.workerStore.get(M.valueOf());
          ce && m.moveStage2ShapeByResource(ce), ce && o(ce);
        }
      }
      Je(v, (j) => {
        te(j);
      });
      function te(j = !0) {
        var ce;
        console.log("@_[MonitoringMain]::bindEvents----------"),
          (w.value =
            (ce = C.localStorage.getItem("coordinatePixelDisplay")) != null
              ? ce
              : !1),
          m.bindPointerEvent2Map((me, Ae) => {
            const I = `${me.x.toFixed(2)}, ${me.y.toFixed(2)}[m]`,
              Y = w.value ? `${Ae.x.toFixed(0)}, ${Ae.y.toFixed(0)}[px]` : "",
              ve = `x${m.scale.toFixed(1)}`,
              Se = `rotate ${m.getStageRotation()}\xB0`;
            Q.value = `${Y} ${I} ${ve} ${Se}`;
          }, j),
          m.bindClosePopupEvent2Map(() => le());
      }
      function le() {
        const j = document.getElementById("popup-menu");
        X.value.hide(), (j.style.display = "none");
      }
      function ee(j) {
        m == null || m.setStageSize(j.width, j.height);
      }
      function $() {
        m.setViewWorkerPathGlobal(K.value),
          C.localStorage.set("viewWorkerPath", K.value);
      }
      const H = (j) => {
          if ((console.log("@@@___[resourceClicked!!]", j), c.value == "edit"))
            return;
          const ce = m.resourceStore.get(j);
          if (ce) o(ce);
          else {
            const me = m.workerStore.get(j);
            me && o(me);
          }
        },
        L = (j) => {
          if (
            (console.log("@@@___[FMZ Clicked!!]", j.id, j.mode, j.target),
            c.value == "edit")
          )
            return;
          const ce = m.resourceStore.get(j.id);
          ce && r(ce, j.mode, j.target);
        },
        re = N(""),
        ie = N("");
      function Ce() {
        m.getFmzSelectionSubject().subscribe({
          next: L,
        }),
          m.getResourceSelectionSubject().subscribe({
            next: H,
          }),
          m.getResourcePopupSubject().subscribe({
            next: (j) => {
              const { point: ce, resourceId: me } = j;
              if (c.value == "edit") return;
              const Ae = m.resourceStore.get(me),
                I = (Ae == null ? void 0 : Ae.resourceType) == "FMZ";
              if (Ae) {
                const Y = document.getElementById("popup-menu");
                (B.value = !I),
                  (re.value = Ae.name),
                  (ie.value = Ae.resourceType),
                  (Y.style.display = "initial"),
                  (Y.style.top = ce.y + 4 + "px"),
                  (Y.style.left = ce.x + 4 + "px"),
                  X.value.show();
              }
            },
          });
      }
      function Pe(j) {
        C.localStorage.set("lastSelectedMap", j);
      }
      function we() {
        return C.localStorage.getItem("monitoringSetting");
      }
      function se() {
        x &&
          (x.resources.forEach((j) => {
            if (j.target == "offline") {
              m == null || m.toggleOfflineWorkerDisplay(j.value);
              return;
            }
            if (j.target == "sub") {
              m == null || m.toggleSubShapeDisplay(j.value);
              return;
            }
          }),
          x.text.forEach((j) => {
            if (j.target == "area") {
              Go.forEach((ce) =>
                m == null ? void 0 : m.toggleTextDisplayByType(ce, j.value)
              );
              return;
            }
            if (j.target == "tilt") {
              j.value && (m == null || m.toggleTextTilt(j.value));
              return;
            }
            if (j.target == "ellipsis") {
              m == null || m.toggleTextEllipsis(j.value);
              return;
            }
            m == null || m.toggleTextDisplayByType(j.target, j.value);
          }),
          m == null || m.setTextSize(x.numberType.textSize),
          Go.forEach((j) =>
            m == null ? void 0 : m.setOpacityByType(j, x.numberType.area / 100)
          ),
          m == null || m.setOpacityByType("Zone", x.numberType.zone / 100),
          m == null ||
            m.setOpacityByType("FleetZone", x.numberType.fleetZone / 100));
      }
      const ne = () => {
          var ce, me;
          if (
            (le(),
            console.log("[MainMap]::PopupMenu::edit", f.value),
            ((ce = f.value) == null ? void 0 : ce.resourceType) == "FMZ")
          ) {
            const Ae = (me = f.value) == null ? void 0 : me.serialize(),
              I = _.cloneFmz(Ae),
              Y = I.shape;
            Y.setEditMode("area"),
              _ == null || _.editFmz(),
              I && u(I, "area", -1),
              Y.setEditTarget("area", -1);
          } else {
            const Ae = qo(f.value),
              I = m == null ? void 0 : m.cloneResource(Ae);
            I && a(I);
          }
        },
        et = () => {
          le();
          const j = `Copy ${k.value.name} (${k.value.resourceType})`;
          ut(j, "Do you want to create a new from it?").onOk(() => {
            var Ae;
            if (
              !(((Ae = f.value) == null ? void 0 : Ae.resourceType) == "FMZ")
            ) {
              const I = qo(f.value, !0),
                Y = m == null ? void 0 : m.cloneResource(I);
              if (Y) {
                a(Y);
                const ve = `${Y.resourceType} '${Y.name}' has cloned.`;
                je(ve, "info");
              }
            }
          });
        },
        He = async () => {
          le();
          const j = `Remove ${k.value.name} (${k.value.resourceType})`;
          ut(j, "Do you want to remove it?").onOk(async () => {
            var Ae;
            const me = (Ae = f.value) == null ? void 0 : Ae.id;
            await Vs(f.value)
              .then((I) => {
                i();
                const Y = `${I.resource_type} '${I.name}' has removed.`;
                je(Y, "warning"), me && (m == null || m.removeResource(me));
              })
              .catch((I) => {
                var Se, We;
                const Y = I,
                  ve = `Error: Remove ${
                    (We = (Se = k.value) == null ? void 0 : Se.resourceType) !=
                    null
                      ? We
                      : "resource"
                  }`;
                Y && dt(Y, ve);
              });
          });
        };
      function ut(j, ce) {
        return C.dialog({
          title: j,
          message: ce,
          cancel: !0,
          persistent: !0,
        });
      }
      function dt(j, ce) {
        var I, Y, ve, Se;
        const me = (I = j.response) == null ? void 0 : I.data;
        let Ae = `<div>[${
          (Y = me == null ? void 0 : me.error.code) != null ? Y : "-"
        }] ${
          (ve = me == null ? void 0 : me.error.message) != null ? ve : "-"
        }</div>`;
        (Ae += `<div>${
          (Se = me == null ? void 0 : me.error.reason) != null ? Se : "-"
        }</div>`),
          C.dialog({
            title: ce,
            message: Ae,
            html: !0,
          });
      }
      function je(j, ce = "primary") {
        return C.notify({
          message: j,
          color: ce,
        });
      }
      return (j, ce) => (
        A(),
        q(
          ho,
          {
            view: "lHh LpR fFf",
            container: "",
            style: {
              height: "calc(100vh - 51px)",
            },
          },
          {
            default: y(() => [
              h(Ru),
              h(Uu),
              h(mg),
              h(lo, null, {
                default: y(() => [
                  h(
                    co,
                    {
                      style: {
                        "user-select": "none",
                      },
                    },
                    {
                      default: y(() => [
                        h(Aa, {
                          onResize: ee,
                        }),
                        Em,
                        g("div", Am, [
                          h(
                            ka,
                            {
                              ref_key: "resourcePopup",
                              ref: X,
                            },
                            {
                              default: y(() => [
                                g("div", km, [
                                  g("span", Fm, V(re.value), 1),
                                  g("span", Pm, V(ie.value), 1),
                                  g("div", Sm, [
                                    h(pn, null, {
                                      default: y(() => [
                                        h(J, {
                                          color: "grey-7",
                                          outline: "",
                                          icon: "edit",
                                          onClick:
                                            ce[0] || (ce[0] = (me) => ne()),
                                        }),
                                        B.value
                                          ? (A(),
                                            q(J, {
                                              key: 0,
                                              color: "grey-7",
                                              outline: "",
                                              icon: "content_copy",
                                              onClick:
                                                ce[1] || (ce[1] = (me) => et()),
                                            }))
                                          : he("", !0),
                                        h(J, {
                                          color: "grey-7",
                                          outline: "",
                                          icon: "delete_forever",
                                          onClick:
                                            ce[2] || (ce[2] = (me) => He()),
                                        }),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                ]),
                              ]),
                              _: 1,
                            },
                            512
                          ),
                        ]),
                        (A(!0),
                        ge(
                          Be,
                          null,
                          st(
                            W(O),
                            (me, Ae) => (
                              A(),
                              q(
                                Kg,
                                {
                                  key: `${me}-${Ae}`,
                                  "worker-id": me,
                                },
                                null,
                                8,
                                ["worker-id"]
                              )
                            )
                          ),
                          128
                        )),
                        W(E)
                          ? (A(),
                            q(fm, {
                              key: 0,
                            }))
                          : he("", !0),
                        h(wm),
                        h(
                          No,
                          {
                            position: "bottom-right",
                            offset: [18, 18],
                          },
                          {
                            default: y(() => [
                              g("div", Tm, [
                                g("div", $m, [
                                  h(Wo, {
                                    color: "grey",
                                    "text-color": "white",
                                    label: "Worker Path",
                                  }),
                                ]),
                                g("div", Mm, [
                                  g("div", Bm, [
                                    h(
                                      _t,
                                      {
                                        dense: "",
                                        color: "primary",
                                        "keep-color": "",
                                        modelValue: K.value,
                                        "onUpdate:modelValue": [
                                          ce[3] ||
                                            (ce[3] = (me) => (K.value = me)),
                                          $,
                                        ],
                                      },
                                      null,
                                      8,
                                      ["modelValue"]
                                    ),
                                  ]),
                                ]),
                              ]),
                              W(v)
                                ? (A(),
                                  q(
                                    Wo,
                                    {
                                      key: 0,
                                      color: "grey",
                                      "text-color": "black",
                                      label: Q.value,
                                    },
                                    null,
                                    8,
                                    ["label"]
                                  ))
                                : he("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          }
        )
      );
    },
  });
var Rm = ft(Im, [["__scopeId", "data-v-d0c0b086"]]);
const Lm = Te({
  __name: "index",
  setup(n) {
    return (s, e) => (A(), q(Rm));
  },
});
var u0 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Lm,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    }
  )
);
export {
  fl as P,
  bo as Q,
  Fs as W,
  vs as _,
  n0 as a,
  a0 as b,
  r0 as c,
  Lc as d,
  Ot as e,
  Mi as g,
  u0 as i,
  ja as m,
  i0 as u,
};
