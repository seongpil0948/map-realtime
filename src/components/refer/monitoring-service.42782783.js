import { O as y, W as a, N as s, L as p, aN as d } from "./index.0b1d1347.js";
async function h(r) {
  let e = "/maps";
  (e += "?$select[]=name&$select[]=description&$select[]=metadata"),
    (e += "&$select[]=created_at&$select[]=updated_at&$select[]=version"),
    r && (e += y.stringify(r));
  try {
    const { data: t } = await a.get(e);
    return t;
  } catch (t) {
    throw (console.error(t), t);
  }
}
async function f(r) {
  let e = `/maps/${r}`;
  (e += "?$select[]=name&$select[]=description&$select[]=metadata"),
    (e += "&$select[]=encoded_map");
  try {
    const { data: t } = await a.get(e);
    return t;
  } catch (t) {
    throw (console.error(t), t);
  }
}
async function $(r, e = !1) {
  let t = "/resources?";
  r && (t += `map=${r}&`),
    e &&
      ((t += "$populate=resource_waitings&"),
      (t += "$populate=evacuation&"),
      (t += "$populate=waiting_after_cancel&"),
      (t += "$populate=DIMFactory&"),
      (t += "$populate=teleporter&"),
      (t += "$populate=doors.evacuation&")),
    (t += "type[$nin][]=waiting&"),
    (t += "type[$nin][]=evacuation&"),
    (t += "type[$nin][]=waiting_after_cancel");
  try {
    const { data: o } = await a.get(t);
    return o;
  } catch (o) {
    throw (console.error(o), o);
  }
}
const i = {
  Location: "/locations",
  Marker: "/markers",
  Robostop: "robostop",
  Dim: "/dim",
  DimModel: "/dimFactory",
  Autodoor: "/autodoors",
  AutodoorExt: "/autodoorexts",
  TeleporterGate: "/teleporter-gates",
  ExclusiveArea: "/exclusive-areas",
  Slope: "/slope",
  WorkingStation: "/working-Stations",
  Zone: "/zones",
  FleetZone: "/fleetzones",
  FMZ: "/fmz",
  WaitingQueue: "/waiting-queues",
};
async function m(r, e) {
  let t = i[r];
  (t += `?map=${e}&$sort[name]=1}`), r == "Location" && (t += "&type=waypoint");
  try {
    const { data: o } = await a.get(t);
    return o.data;
  } catch (o) {
    throw (console.error(o), o);
  }
}
async function _(r, e) {
  const t = i[r];
  try {
    return (await a.post(t, e)).data;
  } catch (o) {
    throw (console.error(o), o);
  }
}
async function I(r, e) {
  var c;
  const t = (c = e.id) != null ? c : e._id,
    o = `${i[r]}/${t}`;
  try {
    return (await a.put(o, e)).data;
  } catch (n) {
    throw (console.error(n), n);
  }
}
async function g(r, e) {
  const t = `${i[r]}/${e}`;
  try {
    const o = await a.delete(t);
    return console.log("[MonitoringService]::deleteResource", o), o.data;
  } catch (o) {
    throw (console.error(o), o);
  }
}
async function v(r) {
  let e = "/workers";
  r && (e += `?type_specific.location.map=${r}`);
  try {
    const { data: t } = await s.get(e);
    return t.data;
  } catch (t) {
    throw (console.error(t), t);
  }
}
async function T(r) {
  const e = `/workers/${r}`;
  try {
    const { data: t } = await s.get(e);
    return console.log("@__[fetchWorkers]", t), t;
  } catch (t) {
    throw (console.error(t), t);
  }
}
async function B(r) {
  const e = `/workers/${r}/release_occupancy`,
    t = { serviceId: "gocart" };
  try {
    const { data: o } = await s.post(e, t);
    return o;
  } catch (o) {
    throw (console.error(o), o);
  }
}
async function M(r) {
  const e = `/status/restricted/resources/${r}`;
  try {
    const { data: t } = await a.get(e);
    return t;
  } catch (t) {
    throw (console.error(t), t);
  }
}
async function k() {
  const r = "/chargeInfo/stationType";
  try {
    const { data: e } = await a.get(r);
    return e.data;
  } catch (e) {
    throw (console.error(e), e);
  }
}
async function R(r) {
  const e = `/chargeInfo/stationType/${r}`;
  try {
    const { data: t } = await a.get(e);
    return t;
  } catch (t) {
    throw (console.error(t), t);
  }
}
async function S() {
  const r = "/teleporters";
  try {
    const { data: e } = await a.get(r);
    return e.data;
  } catch (e) {
    throw (console.error(e), e);
  }
}
async function D(r) {
  const e = `/teleporters/${r}`;
  try {
    const { data: t } = await a.get(e);
    return t;
  } catch (t) {
    throw (console.error(t), t);
  }
}
async function U(r) {
  const e = `/locations/${r}`;
  try {
    const { data: t } = await a.get(e);
    return t;
  } catch (t) {
    throw (console.error(t), t);
  }
}
async function W(r) {
  let e = "/locations";
  e += `?type=${r}`;
  try {
    const { data: t } = await a.get(e);
    return t.data;
  } catch (t) {
    throw (console.error(t), t);
  }
}
async function z(r) {
  let e = "/dimFactory";
  e += `?type=${r}`;
  try {
    const { data: t } = await a.get(e);
    return console.log("@__[fetchDIMModels]", t), t.data;
  } catch (t) {
    throw (console.error(t), t);
  }
}
async function F(r) {
  const e = "/pathinspector";
  try {
    const { data: t } = await s.post(e, r);
    return t;
  } catch (t) {
    throw (console.error(t), t);
  }
}
function x(r, e = !1) {
  const t = r.serialize(!0),
    o = p.cloneDeep(t);
  if (e && o) {
    if (
      ((o.id = "new-id"),
      (o.name = "clone: " + o.name),
      "resource_waitings" in o)
    ) {
      const c = new d({ length: 10 });
      o.resource_waitings.forEach((n, l) => {
        (n.id = "new-id"),
          (n.name = `${o.resource_type}-waiting${l + 1}-${c.randomUUID()}`);
      });
    }
    if ("waiting_after_cancel" in o) {
      const c = new d({ length: 10 }),
        n = o.waiting_after_cancel;
      n &&
        ((n.id = "new-id"),
        (n.name = `${o.resource_type}-cancel-${c.randomUUID()}`));
    }
    if ("doors" in o) {
      const c = new d({ length: 10 });
      o.doors.forEach((n, l) => {
        const u = n.evacuation;
        u &&
          ((u.id = "new-id"),
          (u.name = `${o.resource_type}-evacuation${l + 1}-${c.randomUUID()}`));
      });
    }
  }
  return o;
}
async function A(r) {
  try {
    return await g(r.resourceType, r.id);
  } catch (e) {
    throw (console.log("[MonitoringService]::remove", e), e);
  }
}
async function L(r) {
  let e = "/fmz";
  r && (e += `?map=${r}`);
  try {
    const { data: t } = await a.get(e);
    return t.data;
  } catch (t) {
    throw (console.error(t), t);
  }
}
export {
  W as a,
  U as b,
  f as c,
  _ as d,
  g as e,
  M as f,
  h as g,
  $ as h,
  L as i,
  v as j,
  x as k,
  m as l,
  F as m,
  T as n,
  B as o,
  k as p,
  R as q,
  A as r,
  z as s,
  S as t,
  I as u,
  D as v,
};
