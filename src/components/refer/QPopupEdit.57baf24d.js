var E = Object.defineProperty;
var T = (t, e, o) =>
  e in t
    ? E(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (t[e] = o);
var s = (t, e, o) => (T(t, typeof e != "symbol" ? e + "" : e, o), o);
import { d as O, u as j } from "./monitoring-service.42782783.js";
import {
  j as q,
  c as M,
  k as N,
  v as Q,
  G as A,
  a2 as L,
  d as H,
  a3 as $,
  am as G,
  r as g,
  d2 as J,
  ai as K,
  az as U,
  h as u,
  aJ as W,
  g as X,
  a4 as z,
} from "./index.0b1d1347.js";
class te {
  constructor(e, o) {
    s(this, "id");
    s(this, "name");
    s(this, "description");
    s(this, "resourceType");
    s(this, "mapId");
    s(this, "mapTool");
    var r, i, c, l;
    (this.id = e != null && e.id ? e.id : e._id ? e._id : "new-id"),
      (this.name = (r = e.name) != null ? r : ""),
      (this.description = (i = e.description) != null ? i : ""),
      (this.resourceType = (c = e.resource_type) != null ? c : ""),
      (this.mapId = (l = e.map) != null ? l : ""),
      (this.mapTool = o);
  }
  serializeBase() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      resource_type: this.resourceType,
      map: this.mapId,
    };
  }
  async create(e) {
    return (
      console.log("[ResourceClass]::create method"),
      await O(this.resourceType, e).catch((o) => {
        throw (console.log("[ResourceClass]::create method catch error", o), o);
      })
    );
  }
  async update(e) {
    return (
      console.log("[ResourceClass]::update method"),
      await j(this.resourceType, e).catch((o) => {
        throw (console.log("[ResourceClass]::update method catch error", o), o);
      })
    );
  }
  async delete() {
    console.log("[ResourceClass]::delete method");
  }
  async created() {
    console.log("[ResourceClass]::after create method");
  }
  async updated() {
    console.log("[ResourceClass]::after update method");
  }
  async deleted() {
    console.log("[ResourceClass]::after delete method");
  }
}
class I {
  constructor(e) {
    s(this, "x");
    s(this, "y");
    s(this, "theta");
    s(this, "degree");
    var o;
    (this.x = e.x),
      (this.y = e.y),
      (this.theta = (o = e.theta) != null ? o : 0),
      (this.degree = b(this.theta));
  }
  serialize() {
    return { x: this.x, y: this.y, theta: v(this.degree), degree: this.degree };
  }
}
class oe {
  constructor(e) {
    s(this, "x");
    s(this, "y");
    s(this, "theta");
    s(this, "degree");
    var o;
    (this.x = e.x),
      (this.y = e.y),
      (this.theta = (o = e.theta) != null ? o : 0),
      (this.degree = b(this.theta));
  }
  serialize(e = !0) {
    const o = { x: this.x, y: this.y };
    return e && ((o.theta = v(this.degree)), (o.degree = this.degree)), o;
  }
}
class se {
  constructor(e) {
    s(this, "x");
    s(this, "y");
    s(this, "width");
    s(this, "height");
    s(this, "theta");
    s(this, "degree");
    var o;
    (this.x = e.x),
      (this.y = e.y),
      (this.width = e.width),
      (this.height = e.height),
      (this.theta = (o = e.theta) != null ? o : 0),
      (this.degree = b(this.theta));
  }
  serialize() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      theta: v(this.degree),
    };
  }
}
class re {
  constructor(e) {
    s(this, "index");
    s(this, "pose");
    s(this, "type");
    s(this, "name");
    var o, r;
    (this.index = e.index),
      (this.pose = new I(e.pose)),
      (this.type = (o = e.type) != null ? o : ""),
      (this.name = (r = e.name) != null ? r : "");
  }
  serialize() {
    return {
      index: this.index,
      pose: this.pose.serialize(),
      type: this.type,
      name: this.name,
    };
  }
}
class ie {
  constructor(e) {
    s(this, "from");
    s(this, "to");
    (this.from = e.from), (this.to = e.to);
  }
  serialize() {
    return { from: this.from, to: this.to };
  }
}
class ne {
  constructor(e) {
    s(this, "ip");
    s(this, "port");
    s(this, "groupId");
    s(this, "openCheck");
    s(this, "closeCheck");
    s(this, "authId");
    s(this, "authPw");
    s(this, "vendor");
    s(this, "waitClose");
    var o, r, i, c, l, n, a;
    (this.ip = ((o = e.connection) == null ? void 0 : o.ip) || "localhost"),
      (this.port = ((r = e.connection) == null ? void 0 : r.port) || 1234),
      (this.groupId = ((i = e.connection) == null ? void 0 : i.group_id) || [
        1,
      ]),
      (this.openCheck =
        ((c = e.connection) == null ? void 0 : c.open_check) || 0),
      (this.closeCheck =
        ((l = e.connection) == null ? void 0 : l.close_check) || 1),
      (this.authId =
        ((n = e.connection) == null ? void 0 : n.auth_id) || "root"),
      (this.authPw =
        ((a = e.connection) == null ? void 0 : a.auth_pw) || "00000000"),
      (this.vendor = e.vendor || "virtual"),
      (this.waitClose = e.wait_close || !1);
  }
  serialize() {
    return {
      connection: {
        ip: this.ip,
        port: this.port,
        group_id: this.groupId,
        open_check: this.openCheck,
        close_check: this.closeCheck,
        auth_id: this.authId,
        auth_pw: this.authPw,
      },
      vendor: this.vendor,
      wait_close: this.waitClose,
    };
  }
}
class C {
  constructor(e) {
    s(this, "id");
    s(this, "no");
    s(this, "rid");
    s(this, "x");
    s(this, "y");
    s(this, "z");
    s(this, "rx");
    s(this, "ry");
    s(this, "rz");
    (this.id = e.id),
      (this.no = e.no),
      (this.rid = e.rid),
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.rx = m(e.rx)),
      (this.ry = m(e.ry)),
      (this.rz = m(e.rz));
  }
  serialize() {
    return {
      id: this.id,
      no: this.no,
      rid: this.rid,
      x: this.x,
      y: this.y,
      z: this.z,
      rx: _(this.rx, 4),
      ry: _(this.ry, 4),
      rz: _(this.rz, 4),
    };
  }
}
const b = (t, e = 2) => {
    const o = t * (-180 / Math.PI);
    return Number(o.toFixed(e));
  },
  v = (t, e = 2) => {
    const o = t * (Math.PI / -180);
    return Number(o.toFixed(e));
  },
  m = (t, e = 2) => {
    const o = t * (180 / Math.PI);
    return Number(o.toFixed(e));
  },
  _ = (t, e = 2) => {
    const o = t * (Math.PI / 180);
    return Number(o.toFixed(e));
  },
  Y = { id: "new-id", name: "", resource_type: "DIMFactory" };
class R {
  constructor(e) {
    s(this, "id");
    s(this, "name");
    s(this, "description");
    s(this, "resourceType");
    s(this, "type");
    s(this, "width");
    s(this, "height");
    s(this, "parkingOffset");
    s(this, "markers", []);
    s(this, "markerFlags");
    s(this, "barrier");
    s(this, "chargeable");
    s(this, "payloadLeft");
    s(this, "payloadRight");
    s(this, "payloadFront");
    s(this, "payloadBack");
    s(this, "markerCount");
    s(this, "createdAt");
    s(this, "updatedAt");
    var i, c, l;
    (this.id = (i = e.id) != null ? i : "new-id"),
      (this.name = (c = e.name) != null ? c : ""),
      (this.description = (l = e.description) != null ? l : ""),
      (this.resourceType = e.resource_type),
      (this.type = e.type),
      (this.width = e.area.width),
      (this.height = e.area.height),
      (this.parkingOffset = new I(e.parking_offset)),
      (this.barrier = e.barrier),
      (this.chargeable = e.chargeable),
      (this.payloadFront = e.payload_size.robot_center_to_front),
      (this.payloadBack = e.payload_size.robot_center_to_back),
      (this.payloadLeft = e.payload_size.robot_center_to_left),
      (this.payloadRight = e.payload_size.robot_center_to_right);
    const o = R.getDefaultData(this.type).markers,
      r = this.type == "DIM1" ? 5 : 2;
    (this.markerFlags = new Array(r).fill(!1)),
      e.markers.forEach((n) => {
        const a = n.no;
        (this.markers[a] = new C(n)), (this.markerFlags[a] = !0);
      }),
      this.markerFlags.forEach((n, a) => {
        console.log("[DIMModel]::marker", n, this.markers[a]),
          !n && (this.markers[a] = new C(o[a]));
      }),
      (this.markerCount = e.markers.length),
      console.log("[DIMModel]::constructor", e, this);
  }
  static getDefaultData(e = "DIM1") {
    const o = {
      ...Y,
      type: e,
      area: { width: 0.93, height: 1.36 },
      markers: [
        {
          id: 0,
          rid: 0,
          no: 0,
          x: 0,
          y: 0,
          z: 0.37,
          rx: -1.57,
          ry: 0,
          rz: -1.57,
        },
        {
          id: 1,
          rid: 0,
          no: 1,
          x: -0.53,
          y: -0.46,
          z: 0.37,
          rx: -1.57,
          ry: 0,
          rz: 3.14,
        },
        {
          id: 2,
          rid: 0,
          no: 2,
          x: -0.53,
          y: 0.46,
          z: 0.37,
          rx: -1.57,
          ry: 0,
          rz: 0,
        },
        {
          id: 3,
          rid: 0,
          no: 3,
          x: -1.15,
          y: 0.46,
          z: 0.37,
          rx: -1.57,
          ry: 0,
          rz: 0,
        },
        {
          id: 4,
          rid: 0,
          no: 4,
          x: -1.15,
          y: -0.46,
          z: 0.37,
          rx: -1.57,
          ry: 0,
          rz: 3.14,
        },
      ],
      parking_offset: { x: -0.1, y: 0, theta: 0, degree: 0 },
      chargeable: !1,
      barrier: -0.2,
      payload_size: {
        robot_center_to_left: 0.46,
        robot_center_to_right: 0.46,
        robot_center_to_front: 0.7,
        robot_center_to_back: 0.7,
      },
    };
    return (
      e == "DIM2" &&
        ((o.area = { width: 0.821, height: 0.88 }),
        (o.parking_offset = { x: 0, y: 0, theta: 0, degree: 0 }),
        (o.payload_size = {
          robot_center_to_left: 0.42,
          robot_center_to_right: 0.42,
          robot_center_to_front: 0.44,
          robot_center_to_back: 0.44,
        }),
        (o.markers = [
          {
            id: 1,
            rid: 0,
            no: 0,
            x: 0.007,
            y: -0.4105,
            z: -0.371,
            rx: -1.57,
            ry: 0,
            rz: 3.14,
          },
          {
            id: 2,
            rid: 0,
            no: 1,
            x: -0.0011,
            y: 0.4105,
            z: -0.3735,
            rx: -1.57,
            ry: 0,
            rz: 0,
          },
        ])),
      o
    );
  }
  serialize() {
    const e = [];
    return (
      this.markerFlags.forEach(
        (r, i) => r && e.push(this.markers[i].serialize())
      ),
      {
        id: this.id,
        name: this.name,
        description: this.description,
        resource_type: this.resourceType,
        type: this.type,
        parking_offset: this.parkingOffset.serialize(),
        markers: e,
        barrier: this.barrier,
        area: { width: this.width, height: this.height },
        chargeable: this.chargeable,
        payload_size: {
          robot_center_to_left: this.payloadLeft,
          robot_center_to_right: this.payloadRight,
          robot_center_to_front: this.payloadFront,
          robot_center_to_back: this.payloadBack,
        },
      }
    );
  }
}
const ce = q({
  __name: "SiteInput",
  props: {
    modelValue: null,
    bgColor: { default: "white" },
    stackLabel: { type: Boolean, default: !0 },
    dense: { type: Boolean, default: !0 },
    outlined: { type: Boolean, default: !0 },
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = t,
      r = M({ get: () => o.modelValue, set: (i) => e("update:modelValue", i) });
    return (i, c) => (
      N(),
      Q(
        $,
        A(
          {
            modelValue: L(r),
            "onUpdate:modelValue":
              c[0] || (c[0] = (l) => (H(r) ? (r.value = l) : null)),
          },
          i.$attrs,
          {
            outlined: t.outlined,
            dense: t.dense,
            "stack-label": t.stackLabel,
            "bg-color": t.bgColor,
          }
        ),
        null,
        16,
        ["modelValue", "outlined", "dense", "stack-label", "bg-color"]
      )
    );
  },
});
function d(t, e = new WeakMap()) {
  if (Object(t) !== t) return t;
  if (e.has(t)) return e.get(t);
  const o =
    t instanceof Date
      ? new Date(t)
      : t instanceof RegExp
      ? new RegExp(t.source, t.flags)
      : t instanceof Set
      ? new Set()
      : t instanceof Map
      ? new Map()
      : typeof t.constructor != "function"
      ? Object.create(null)
      : t.prototype !== void 0 && typeof t.prototype.constructor == "function"
      ? t
      : new t.constructor();
  if (typeof t.constructor == "function" && typeof t.valueOf == "function") {
    const r = t.valueOf();
    if (Object(r) !== r) {
      const i = new t.constructor(r);
      return e.set(t, i), i;
    }
  }
  return (
    e.set(t, o),
    t instanceof Set
      ? t.forEach((r) => {
          o.add(d(r, e));
        })
      : t instanceof Map &&
        t.forEach((r, i) => {
          o.set(i, d(r, e));
        }),
    Object.assign(o, ...Object.keys(t).map((r) => ({ [r]: d(t[r], e) })))
  );
}
var le = G({
  name: "QPopupEdit",
  props: {
    modelValue: { required: !0 },
    title: String,
    buttons: Boolean,
    labelSet: String,
    labelCancel: String,
    color: { type: String, default: "primary" },
    validate: { type: Function, default: () => !0 },
    autoSave: Boolean,
    cover: { type: Boolean, default: !0 },
    disable: Boolean,
  },
  emits: [
    "update:modelValue",
    "save",
    "cancel",
    "beforeShow",
    "show",
    "beforeHide",
    "hide",
  ],
  setup(t, { slots: e, emit: o }) {
    const { proxy: r } = X(),
      { $q: i } = r,
      c = g(null),
      l = g(""),
      n = g("");
    let a = !1;
    const B = M(() =>
      J(
        {
          initialValue: l.value,
          validate: t.validate,
          set: f,
          cancel: p,
          updatePosition: k,
        },
        "value",
        () => n.value,
        (h) => {
          n.value = h;
        }
      )
    );
    function f() {
      t.validate(n.value) !== !1 &&
        (y() === !0 &&
          (o("save", n.value, l.value), o("update:modelValue", n.value)),
        x());
    }
    function p() {
      y() === !0 && o("cancel", n.value, l.value), x();
    }
    function k() {
      K(() => {
        c.value.updatePosition();
      });
    }
    function y() {
      return U(n.value, l.value) === !1;
    }
    function x() {
      (a = !0), c.value.hide();
    }
    function P() {
      (a = !1),
        (l.value = d(t.modelValue)),
        (n.value = d(t.modelValue)),
        o("beforeShow");
    }
    function S() {
      o("show");
    }
    function w() {
      a === !1 &&
        y() === !0 &&
        (t.autoSave === !0 && t.validate(n.value) === !0
          ? (o("save", n.value, l.value), o("update:modelValue", n.value))
          : o("cancel", n.value, l.value)),
        o("beforeHide");
    }
    function V() {
      o("hide");
    }
    function F() {
      const h = e.default !== void 0 ? [].concat(e.default(B.value)) : [];
      return (
        t.title &&
          h.unshift(
            u("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, t.title)
          ),
        t.buttons === !0 &&
          h.push(
            u(
              "div",
              { class: "q-popup-edit__buttons row justify-center no-wrap" },
              [
                u(z, {
                  flat: !0,
                  color: t.color,
                  label: t.labelCancel || i.lang.label.cancel,
                  onClick: p,
                }),
                u(z, {
                  flat: !0,
                  color: t.color,
                  label: t.labelSet || i.lang.label.set,
                  onClick: f,
                }),
              ]
            )
          ),
        h
      );
    }
    return (
      Object.assign(r, {
        set: f,
        cancel: p,
        show(h) {
          c.value !== null && c.value.show(h);
        },
        hide(h) {
          c.value !== null && c.value.hide(h);
        },
        updatePosition: k,
      }),
      () => {
        if (t.disable !== !0)
          return u(
            W,
            {
              ref: c,
              class: "q-popup-edit",
              cover: t.cover,
              onBeforeShow: P,
              onShow: S,
              onBeforeHide: w,
              onHide: V,
              onEscapeKey: p,
            },
            F
          );
      }
    );
  },
});
export {
  se as A,
  R as D,
  ie as E,
  C as M,
  re as N,
  I as P,
  le as Q,
  te as R,
  ce as _,
  oe as a,
  ne as b,
};
