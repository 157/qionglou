// ../node_modules/.pnpm/@splinetool+runtime@0.9.310/node_modules/@splinetool/runtime/build/physics.js
var A;
var I = new Array(32).fill(void 0);
function g(A2) {
  return I[A2];
}
I.push(void 0, null, true, false);
var C = I.length;
function B(A2) {
  const B2 = g(A2);
  return function(A3) {
    A3 < 36 || (I[A3] = C, C = A3);
  }(A2), B2;
}
function Q(A2) {
  C === I.length && I.push(I.length + 1);
  const g2 = C;
  return C = I[g2], I[g2] = A2, g2;
}
function E(A2) {
  return null == A2;
}
var i = new Float64Array();
function D() {
  return 0 === i.byteLength && (i = new Float64Array(A.memory.buffer)), i;
}
var o = new Int32Array();
function G() {
  return 0 === o.byteLength && (o = new Int32Array(A.memory.buffer)), o;
}
var w = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
w.decode();
var k = new Uint8Array();
function S(I2, g2) {
  return w.decode((0 === k.byteLength && (k = new Uint8Array(A.memory.buffer)), k).subarray(I2, I2 + g2));
}
function a(A2, I2) {
  if (!(A2 instanceof I2))
    throw new Error(`expected instance of ${I2.name}`);
  return A2.ptr;
}
var M = new Float32Array();
function K() {
  return 0 === M.byteLength && (M = new Float32Array(A.memory.buffer)), M;
}
var y = 32;
function J(A2) {
  if (1 == y)
    throw new Error("out of js stack");
  return I[--y] = A2, y;
}
function U(A2, I2) {
  return K().subarray(A2 / 4, A2 / 4 + I2);
}
var h = new Uint32Array();
function N() {
  return 0 === h.byteLength && (h = new Uint32Array(A.memory.buffer)), h;
}
var F = 0;
function q(A2, I2) {
  const g2 = I2(4 * A2.length);
  return K().set(A2, g2 / 4), F = A2.length, g2;
}
function R(A2, I2) {
  const g2 = I2(4 * A2.length);
  return N().set(A2, g2 / 4), F = A2.length, g2;
}
function s(I2, g2) {
  try {
    return I2.apply(this, g2);
  } catch (I3) {
    A.__wbindgen_exn_store(Q(I3));
  }
}
Object.freeze({ Revolute: 0, 0: "Revolute", Fixed: 1, 1: "Fixed", Prismatic: 2, 2: "Prismatic", Spherical: 3, 3: "Spherical", Generic: 4, 4: "Generic" }), Object.freeze({ AccelerationBased: 0, 0: "AccelerationBased", ForceBased: 1, 1: "ForceBased" });
var c = Object.freeze({ X: 0, 0: "X", Y: 1, 1: "Y", Z: 2, 2: "Z", AngX: 3, 3: "AngX", AngY: 4, 4: "AngY", AngZ: 5, 5: "AngZ" });
Object.freeze({ Dynamic: 0, 0: "Dynamic", Fixed: 1, 1: "Fixed", KinematicPositionBased: 2, 2: "KinematicPositionBased", KinematicVelocityBased: 3, 3: "KinematicVelocityBased" }), Object.freeze({ Vertex: 0, 0: "Vertex", Edge: 1, 1: "Edge", Face: 2, 2: "Face", Unknown: 3, 3: "Unknown" }), Object.freeze({ Ball: 0, 0: "Ball", Cuboid: 1, 1: "Cuboid", Capsule: 2, 2: "Capsule", Segment: 3, 3: "Segment", Polyline: 4, 4: "Polyline", Triangle: 5, 5: "Triangle", TriMesh: 6, 6: "TriMesh", HeightField: 7, 7: "HeightField", Compound: 8, 8: "Compound", ConvexPolyhedron: 9, 9: "ConvexPolyhedron", Cylinder: 10, 10: "Cylinder", Cone: 11, 11: "Cone", RoundCuboid: 12, 12: "RoundCuboid", RoundTriangle: 13, 13: "RoundTriangle", RoundCylinder: 14, 14: "RoundCylinder", RoundCone: 15, 15: "RoundCone", RoundConvexPolyhedron: 16, 16: "RoundConvexPolyhedron", HalfSpace: 17, 17: "HalfSpace" });
var Y = class {
  static __wrap(A2) {
    const I2 = Object.create(Y.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawbroadphase_free(I2);
  }
  constructor() {
    const I2 = A.rawbroadphase_new();
    return Y.__wrap(I2);
  }
};
var L = class {
  static __wrap(A2) {
    const I2 = Object.create(L.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawccdsolver_free(I2);
  }
  constructor() {
    const I2 = A.rawccdsolver_new();
    return L.__wrap(I2);
  }
};
var H = class {
  static __wrap(A2) {
    const I2 = Object.create(H.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcharactercollision_free(I2);
  }
  constructor() {
    const I2 = A.rawcharactercollision_new();
    return H.__wrap(I2);
  }
  handle() {
    return A.rawcharactercollision_handle(this.ptr);
  }
  translationApplied() {
    const I2 = A.rawcharactercollision_translationApplied(this.ptr);
    return QA.__wrap(I2);
  }
  translationRemaining() {
    const I2 = A.rawcharactercollision_translationRemaining(this.ptr);
    return QA.__wrap(I2);
  }
  toi() {
    return A.rawcharactercollision_toi(this.ptr);
  }
  worldWitness1() {
    const I2 = A.rawcharactercollision_worldWitness1(this.ptr);
    return QA.__wrap(I2);
  }
  worldWitness2() {
    const I2 = A.rawcharactercollision_worldWitness2(this.ptr);
    return QA.__wrap(I2);
  }
  worldNormal1() {
    const I2 = A.rawcharactercollision_worldNormal1(this.ptr);
    return QA.__wrap(I2);
  }
  worldNormal2() {
    const I2 = A.rawcharactercollision_worldNormal2(this.ptr);
    return QA.__wrap(I2);
  }
};
var l = class {
  static __wrap(A2) {
    const I2 = Object.create(l.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcolliderset_free(I2);
  }
  coTranslation(I2) {
    const g2 = A.rawcolliderset_coTranslation(this.ptr, I2);
    return QA.__wrap(g2);
  }
  coRotation(I2) {
    const g2 = A.rawcolliderset_coRotation(this.ptr, I2);
    return _.__wrap(g2);
  }
  coSetTranslation(I2, g2, C2, B2) {
    A.rawcolliderset_coSetTranslation(this.ptr, I2, g2, C2, B2);
  }
  coSetTranslationWrtParent(I2, g2, C2, B2) {
    A.rawcolliderset_coSetTranslationWrtParent(this.ptr, I2, g2, C2, B2);
  }
  coSetRotation(I2, g2, C2, B2, Q2) {
    A.rawcolliderset_coSetRotation(this.ptr, I2, g2, C2, B2, Q2);
  }
  coSetRotationWrtParent(I2, g2, C2, B2, Q2) {
    A.rawcolliderset_coSetRotationWrtParent(this.ptr, I2, g2, C2, B2, Q2);
  }
  coIsSensor(I2) {
    return 0 !== A.rawcolliderset_coIsSensor(this.ptr, I2);
  }
  coShapeType(I2) {
    return A.rawcolliderset_coShapeType(this.ptr, I2) >>> 0;
  }
  coHalfspaceNormal(I2) {
    const g2 = A.rawcolliderset_coHalfspaceNormal(this.ptr, I2);
    return 0 === g2 ? void 0 : QA.__wrap(g2);
  }
  coHalfExtents(I2) {
    const g2 = A.rawcolliderset_coHalfExtents(this.ptr, I2);
    return 0 === g2 ? void 0 : QA.__wrap(g2);
  }
  coSetHalfExtents(I2, g2) {
    a(g2, QA), A.rawcolliderset_coSetHalfExtents(this.ptr, I2, g2.ptr);
  }
  coRadius(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coRadius(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return 0 === g2 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coSetRadius(I2, g2) {
    A.rawcolliderset_coSetRadius(this.ptr, I2, g2);
  }
  coHalfHeight(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coHalfHeight(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return 0 === g2 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coSetHalfHeight(I2, g2) {
    A.rawcolliderset_coSetHalfHeight(this.ptr, I2, g2);
  }
  coRoundRadius(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coRoundRadius(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return 0 === g2 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coSetRoundRadius(I2, g2) {
    A.rawcolliderset_coSetRoundRadius(this.ptr, I2, g2);
  }
  coVertices(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coVertices(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      let Q2;
      return 0 !== g2 && (Q2 = U(g2, C2).slice(), A.__wbindgen_free(g2, 4 * C2)), Q2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coIndices(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coIndices(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      let Q2;
      return 0 !== g2 && (Q2 = function(A2, I3) {
        return N().subarray(A2 / 4, A2 / 4 + I3);
      }(g2, C2).slice(), A.__wbindgen_free(g2, 4 * C2)), Q2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHeightfieldHeights(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coHeightfieldHeights(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      let Q2;
      return 0 !== g2 && (Q2 = U(g2, C2).slice(), A.__wbindgen_free(g2, 4 * C2)), Q2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHeightfieldScale(I2) {
    const g2 = A.rawcolliderset_coHeightfieldScale(this.ptr, I2);
    return 0 === g2 ? void 0 : QA.__wrap(g2);
  }
  coHeightfieldNRows(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coHeightfieldNRows(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      return 0 === g2 ? void 0 : C2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHeightfieldNCols(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coHeightfieldNCols(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      return 0 === g2 ? void 0 : C2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coParent(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coParent(B2, this.ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = D()[B2 / 8 + 1];
      return 0 === g2 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coSetEnabled(I2, g2) {
    A.rawcolliderset_coSetEnabled(this.ptr, I2, g2);
  }
  coIsEnabled(I2) {
    return 0 !== A.rawcolliderset_coIsEnabled(this.ptr, I2);
  }
  coFriction(I2) {
    return A.rawcolliderset_coFriction(this.ptr, I2);
  }
  coRestitution(I2) {
    return A.rawcolliderset_coRestitution(this.ptr, I2);
  }
  coDensity(I2) {
    return A.rawcolliderset_coDensity(this.ptr, I2);
  }
  coMass(I2) {
    return A.rawcolliderset_coMass(this.ptr, I2);
  }
  coVolume(I2) {
    return A.rawcolliderset_coVolume(this.ptr, I2);
  }
  coCollisionGroups(I2) {
    return A.rawcolliderset_coCollisionGroups(this.ptr, I2) >>> 0;
  }
  coSolverGroups(I2) {
    return A.rawcolliderset_coSolverGroups(this.ptr, I2) >>> 0;
  }
  coActiveHooks(I2) {
    return A.rawcolliderset_coActiveHooks(this.ptr, I2) >>> 0;
  }
  coActiveCollisionTypes(I2) {
    return A.rawcolliderset_coActiveCollisionTypes(this.ptr, I2);
  }
  coActiveEvents(I2) {
    return A.rawcolliderset_coActiveEvents(this.ptr, I2) >>> 0;
  }
  coContactForceEventThreshold(I2) {
    return A.rawcolliderset_coContactForceEventThreshold(this.ptr, I2);
  }
  coContainsPoint(I2, g2) {
    a(g2, QA);
    return 0 !== A.rawcolliderset_coContainsPoint(this.ptr, I2, g2.ptr);
  }
  coCastShape(I2, g2, C2, B2, Q2, E2, i2, D2) {
    a(g2, QA), a(C2, IA), a(B2, QA), a(Q2, _), a(E2, QA);
    const o2 = A.rawcolliderset_coCastShape(this.ptr, I2, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, E2.ptr, i2, D2);
    return 0 === o2 ? void 0 : BA.__wrap(o2);
  }
  coCastCollider(I2, g2, C2, B2, Q2, E2) {
    a(g2, QA), a(B2, QA);
    const i2 = A.rawcolliderset_coCastCollider(this.ptr, I2, g2.ptr, C2, B2.ptr, Q2, E2);
    return 0 === i2 ? void 0 : gA.__wrap(i2);
  }
  coIntersectsShape(I2, g2, C2, B2) {
    a(g2, IA), a(C2, QA), a(B2, _);
    return 0 !== A.rawcolliderset_coIntersectsShape(this.ptr, I2, g2.ptr, C2.ptr, B2.ptr);
  }
  coContactShape(I2, g2, C2, B2, Q2) {
    a(g2, IA), a(C2, QA), a(B2, _);
    const E2 = A.rawcolliderset_coContactShape(this.ptr, I2, g2.ptr, C2.ptr, B2.ptr, Q2);
    return 0 === E2 ? void 0 : CA.__wrap(E2);
  }
  coContactCollider(I2, g2, C2) {
    const B2 = A.rawcolliderset_coContactCollider(this.ptr, I2, g2, C2);
    return 0 === B2 ? void 0 : CA.__wrap(B2);
  }
  coProjectPoint(I2, g2, C2) {
    a(g2, QA);
    const B2 = A.rawcolliderset_coProjectPoint(this.ptr, I2, g2.ptr, C2);
    return X.__wrap(B2);
  }
  coIntersectsRay(I2, g2, C2, B2) {
    a(g2, QA), a(C2, QA);
    return 0 !== A.rawcolliderset_coIntersectsRay(this.ptr, I2, g2.ptr, C2.ptr, B2);
  }
  coCastRay(I2, g2, C2, B2, Q2) {
    a(g2, QA), a(C2, QA);
    return A.rawcolliderset_coCastRay(this.ptr, I2, g2.ptr, C2.ptr, B2, Q2);
  }
  coCastRayAndGetNormal(I2, g2, C2, B2, Q2) {
    a(g2, QA), a(C2, QA);
    const E2 = A.rawcolliderset_coCastRayAndGetNormal(this.ptr, I2, g2.ptr, C2.ptr, B2, Q2);
    return 0 === E2 ? void 0 : u.__wrap(E2);
  }
  coSetSensor(I2, g2) {
    A.rawcolliderset_coSetSensor(this.ptr, I2, g2);
  }
  coSetRestitution(I2, g2) {
    A.rawcolliderset_coSetRestitution(this.ptr, I2, g2);
  }
  coSetFriction(I2, g2) {
    A.rawcolliderset_coSetFriction(this.ptr, I2, g2);
  }
  coFrictionCombineRule(I2) {
    return A.rawcolliderset_coFrictionCombineRule(this.ptr, I2) >>> 0;
  }
  coSetFrictionCombineRule(I2, g2) {
    A.rawcolliderset_coSetFrictionCombineRule(this.ptr, I2, g2);
  }
  coRestitutionCombineRule(I2) {
    return A.rawcolliderset_coRestitutionCombineRule(this.ptr, I2) >>> 0;
  }
  coSetRestitutionCombineRule(I2, g2) {
    A.rawcolliderset_coSetRestitutionCombineRule(this.ptr, I2, g2);
  }
  coSetCollisionGroups(I2, g2) {
    A.rawcolliderset_coSetCollisionGroups(this.ptr, I2, g2);
  }
  coSetSolverGroups(I2, g2) {
    A.rawcolliderset_coSetSolverGroups(this.ptr, I2, g2);
  }
  coSetActiveHooks(I2, g2) {
    A.rawcolliderset_coSetActiveHooks(this.ptr, I2, g2);
  }
  coSetActiveEvents(I2, g2) {
    A.rawcolliderset_coSetActiveEvents(this.ptr, I2, g2);
  }
  coSetActiveCollisionTypes(I2, g2) {
    A.rawcolliderset_coSetActiveCollisionTypes(this.ptr, I2, g2);
  }
  coSetShape(I2, g2) {
    a(g2, IA), A.rawcolliderset_coSetShape(this.ptr, I2, g2.ptr);
  }
  coSetContactForceEventThreshold(I2, g2) {
    A.rawcolliderset_coSetContactForceEventThreshold(this.ptr, I2, g2);
  }
  coSetDensity(I2, g2) {
    A.rawcolliderset_coSetDensity(this.ptr, I2, g2);
  }
  coSetMass(I2, g2) {
    A.rawcolliderset_coSetMass(this.ptr, I2, g2);
  }
  coSetMassProperties(I2, g2, C2, B2, Q2) {
    a(C2, QA), a(B2, QA), a(Q2, _), A.rawcolliderset_coSetMassProperties(this.ptr, I2, g2, C2.ptr, B2.ptr, Q2.ptr);
  }
  constructor() {
    const I2 = A.rawcolliderset_new();
    return l.__wrap(I2);
  }
  len() {
    return A.rawcolliderset_len(this.ptr) >>> 0;
  }
  contains(I2) {
    return 0 !== A.rawcolliderset_contains(this.ptr, I2);
  }
  createCollider(I2, g2, C2, B2, Q2, E2, i2, o2, w2, k2, S2, M2, K2, y2, J2, U2, h2, N2, F2, q2, R2, s2, c2, Y2) {
    try {
      const l2 = A.__wbindgen_add_to_stack_pointer(-16);
      a(g2, IA), a(C2, QA), a(B2, _), a(i2, QA), a(o2, QA), a(w2, _), a(Y2, v), A.rawcolliderset_createCollider(l2, this.ptr, I2, g2.ptr, C2.ptr, B2.ptr, Q2, E2, i2.ptr, o2.ptr, w2.ptr, k2, S2, M2, K2, y2, J2, U2, h2, N2, F2, q2, R2, s2, c2, Y2.ptr);
      var L2 = G()[l2 / 4 + 0], H2 = D()[l2 / 8 + 1];
      return 0 === L2 ? void 0 : H2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  remove(I2, g2, C2, B2) {
    a(g2, b), a(C2, v), A.rawcolliderset_remove(this.ptr, I2, g2.ptr, C2.ptr, B2);
  }
  isHandleValid(I2) {
    return 0 !== A.rawcolliderset_contains(this.ptr, I2);
  }
  forEachColliderHandle(g2) {
    try {
      A.rawcolliderset_forEachColliderHandle(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
};
var t = class {
  static __wrap(A2) {
    const I2 = Object.create(t.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcontactforceevent_free(I2);
  }
  collider1() {
    return A.rawcharactercollision_handle(this.ptr);
  }
  collider2() {
    return A.rawcontactforceevent_collider2(this.ptr);
  }
  total_force() {
    const I2 = A.rawcontactforceevent_total_force(this.ptr);
    return QA.__wrap(I2);
  }
  total_force_magnitude() {
    return A.rawcontactforceevent_total_force_magnitude(this.ptr);
  }
  max_force_direction() {
    const I2 = A.rawcontactforceevent_max_force_direction(this.ptr);
    return QA.__wrap(I2);
  }
  max_force_magnitude() {
    return A.rawcontactforceevent_max_force_magnitude(this.ptr);
  }
};
var p = class {
  static __wrap(A2) {
    const I2 = Object.create(p.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcontactmanifold_free(I2);
  }
  normal() {
    const I2 = A.rawcontactmanifold_normal(this.ptr);
    return QA.__wrap(I2);
  }
  local_n1() {
    const I2 = A.rawcontactmanifold_local_n1(this.ptr);
    return QA.__wrap(I2);
  }
  local_n2() {
    const I2 = A.rawcontactmanifold_local_n2(this.ptr);
    return QA.__wrap(I2);
  }
  subshape1() {
    return A.rawcontactmanifold_subshape1(this.ptr) >>> 0;
  }
  subshape2() {
    return A.rawcontactmanifold_subshape2(this.ptr) >>> 0;
  }
  num_contacts() {
    return A.rawcontactmanifold_num_contacts(this.ptr) >>> 0;
  }
  contact_local_p1(I2) {
    const g2 = A.rawcontactmanifold_contact_local_p1(this.ptr, I2);
    return 0 === g2 ? void 0 : QA.__wrap(g2);
  }
  contact_local_p2(I2) {
    const g2 = A.rawcontactmanifold_contact_local_p2(this.ptr, I2);
    return 0 === g2 ? void 0 : QA.__wrap(g2);
  }
  contact_dist(I2) {
    return A.rawcontactmanifold_contact_dist(this.ptr, I2);
  }
  contact_fid1(I2) {
    return A.rawcontactmanifold_contact_fid1(this.ptr, I2) >>> 0;
  }
  contact_fid2(I2) {
    return A.rawcontactmanifold_contact_fid2(this.ptr, I2) >>> 0;
  }
  contact_impulse(I2) {
    return A.rawcontactmanifold_contact_impulse(this.ptr, I2);
  }
  contact_tangent_impulse_x(I2) {
    return A.rawcontactmanifold_contact_tangent_impulse_x(this.ptr, I2);
  }
  contact_tangent_impulse_y(I2) {
    return A.rawcontactmanifold_contact_tangent_impulse_y(this.ptr, I2);
  }
  num_solver_contacts() {
    return A.rawcontactmanifold_num_solver_contacts(this.ptr) >>> 0;
  }
  solver_contact_point(I2) {
    const g2 = A.rawcontactmanifold_solver_contact_point(this.ptr, I2);
    return 0 === g2 ? void 0 : QA.__wrap(g2);
  }
  solver_contact_dist(I2) {
    return A.rawcontactmanifold_solver_contact_dist(this.ptr, I2);
  }
  solver_contact_friction(I2) {
    return A.rawcontactmanifold_solver_contact_friction(this.ptr, I2);
  }
  solver_contact_restitution(I2) {
    return A.rawcontactmanifold_solver_contact_restitution(this.ptr, I2);
  }
  solver_contact_tangent_velocity(I2) {
    const g2 = A.rawcontactmanifold_solver_contact_tangent_velocity(this.ptr, I2);
    return QA.__wrap(g2);
  }
};
var e = class {
  static __wrap(A2) {
    const I2 = Object.create(e.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcontactpair_free(I2);
  }
  collider1() {
    return A.rawcontactpair_collider1(this.ptr);
  }
  collider2() {
    return A.rawcontactpair_collider2(this.ptr);
  }
  numContactManifolds() {
    return A.rawcontactpair_numContactManifolds(this.ptr) >>> 0;
  }
  contactManifold(I2) {
    const g2 = A.rawcontactpair_contactManifold(this.ptr, I2);
    return 0 === g2 ? void 0 : p.__wrap(g2);
  }
};
var r = class {
  static __wrap(A2) {
    const I2 = Object.create(r.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawdebugrenderpipeline_free(I2);
  }
  constructor() {
    const I2 = A.rawdebugrenderpipeline_new();
    return r.__wrap(I2);
  }
  vertices() {
    return B(A.rawdebugrenderpipeline_vertices(this.ptr));
  }
  colors() {
    return B(A.rawdebugrenderpipeline_colors(this.ptr));
  }
  render(I2, g2, C2, B2, Q2) {
    a(I2, v), a(g2, l), a(C2, n), a(B2, j), a(Q2, x), A.rawdebugrenderpipeline_render(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr);
  }
};
var d = class {
  static __wrap(A2) {
    const I2 = Object.create(d.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawdeserializedworld_free(I2);
  }
  takeGravity() {
    const I2 = A.rawdeserializedworld_takeGravity(this.ptr);
    return 0 === I2 ? void 0 : QA.__wrap(I2);
  }
  takeIntegrationParameters() {
    const I2 = A.rawdeserializedworld_takeIntegrationParameters(this.ptr);
    return 0 === I2 ? void 0 : Z.__wrap(I2);
  }
  takeIslandManager() {
    const I2 = A.rawdeserializedworld_takeIslandManager(this.ptr);
    return 0 === I2 ? void 0 : b.__wrap(I2);
  }
  takeBroadPhase() {
    const I2 = A.rawdeserializedworld_takeBroadPhase(this.ptr);
    return 0 === I2 ? void 0 : Y.__wrap(I2);
  }
  takeNarrowPhase() {
    const I2 = A.rawdeserializedworld_takeNarrowPhase(this.ptr);
    return 0 === I2 ? void 0 : x.__wrap(I2);
  }
  takeBodies() {
    const I2 = A.rawdeserializedworld_takeBodies(this.ptr);
    return 0 === I2 ? void 0 : v.__wrap(I2);
  }
  takeColliders() {
    const I2 = A.rawdeserializedworld_takeColliders(this.ptr);
    return 0 === I2 ? void 0 : l.__wrap(I2);
  }
  takeImpulseJoints() {
    const I2 = A.rawdeserializedworld_takeImpulseJoints(this.ptr);
    return 0 === I2 ? void 0 : n.__wrap(I2);
  }
  takeMultibodyJoints() {
    const I2 = A.rawdeserializedworld_takeMultibodyJoints(this.ptr);
    return 0 === I2 ? void 0 : j.__wrap(I2);
  }
};
var T = class {
  static __wrap(A2) {
    const I2 = Object.create(T.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_raweventqueue_free(I2);
  }
  constructor(I2) {
    const g2 = A.raweventqueue_new(I2);
    return T.__wrap(g2);
  }
  drainCollisionEvents(g2) {
    try {
      A.raweventqueue_drainCollisionEvents(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
  drainContactForceEvents(g2) {
    try {
      A.raweventqueue_drainContactForceEvents(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
  clear() {
    A.raweventqueue_clear(this.ptr);
  }
};
var O = class {
  static __wrap(A2) {
    const I2 = Object.create(O.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawgenericjoint_free(I2);
  }
  static spherical(I2, g2) {
    a(I2, QA), a(g2, QA);
    const C2 = A.rawgenericjoint_spherical(I2.ptr, g2.ptr);
    return O.__wrap(C2);
  }
  static prismatic(I2, g2, C2, B2, Q2, E2) {
    a(I2, QA), a(g2, QA), a(C2, QA);
    const i2 = A.rawgenericjoint_prismatic(I2.ptr, g2.ptr, C2.ptr, B2, Q2, E2);
    return 0 === i2 ? void 0 : O.__wrap(i2);
  }
  static fixed(I2, g2, C2, B2) {
    a(I2, QA), a(g2, _), a(C2, QA), a(B2, _);
    const Q2 = A.rawgenericjoint_fixed(I2.ptr, g2.ptr, C2.ptr, B2.ptr);
    return O.__wrap(Q2);
  }
  static revolute(I2, g2, C2) {
    a(I2, QA), a(g2, QA), a(C2, QA);
    const B2 = A.rawgenericjoint_revolute(I2.ptr, g2.ptr, C2.ptr);
    return 0 === B2 ? void 0 : O.__wrap(B2);
  }
};
var n = class {
  static __wrap(A2) {
    const I2 = Object.create(n.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawimpulsejointset_free(I2);
  }
  jointType(I2) {
    return A.rawimpulsejointset_jointType(this.ptr, I2) >>> 0;
  }
  jointBodyHandle1(I2) {
    return A.rawimpulsejointset_jointBodyHandle1(this.ptr, I2);
  }
  jointBodyHandle2(I2) {
    return A.rawimpulsejointset_jointBodyHandle2(this.ptr, I2);
  }
  jointFrameX1(I2) {
    const g2 = A.rawimpulsejointset_jointFrameX1(this.ptr, I2);
    return _.__wrap(g2);
  }
  jointFrameX2(I2) {
    const g2 = A.rawimpulsejointset_jointFrameX2(this.ptr, I2);
    return _.__wrap(g2);
  }
  jointAnchor1(I2) {
    const g2 = A.rawimpulsejointset_jointAnchor1(this.ptr, I2);
    return QA.__wrap(g2);
  }
  jointAnchor2(I2) {
    const g2 = A.rawimpulsejointset_jointAnchor2(this.ptr, I2);
    return QA.__wrap(g2);
  }
  jointSetAnchor1(I2, g2) {
    a(g2, QA), A.rawimpulsejointset_jointSetAnchor1(this.ptr, I2, g2.ptr);
  }
  jointSetAnchor2(I2, g2) {
    a(g2, QA), A.rawimpulsejointset_jointSetAnchor2(this.ptr, I2, g2.ptr);
  }
  jointContactsEnabled(I2) {
    return 0 !== A.rawimpulsejointset_jointContactsEnabled(this.ptr, I2);
  }
  jointSetContactsEnabled(I2, g2) {
    A.rawimpulsejointset_jointSetContactsEnabled(this.ptr, I2, g2);
  }
  jointLimitsEnabled(I2, g2) {
    return 0 !== A.rawimpulsejointset_jointLimitsEnabled(this.ptr, I2, g2);
  }
  jointLimitsMin(I2, g2) {
    return A.rawimpulsejointset_jointLimitsMin(this.ptr, I2, g2);
  }
  jointLimitsMax(I2, g2) {
    return A.rawimpulsejointset_jointLimitsMax(this.ptr, I2, g2);
  }
  jointSetLimits(I2, g2, C2, B2) {
    A.rawimpulsejointset_jointSetLimits(this.ptr, I2, g2, C2, B2);
  }
  jointConfigureMotorModel(I2, g2, C2) {
    A.rawimpulsejointset_jointConfigureMotorModel(this.ptr, I2, g2, C2);
  }
  jointConfigureMotorVelocity(I2, g2, C2, B2) {
    A.rawimpulsejointset_jointConfigureMotorVelocity(this.ptr, I2, g2, C2, B2);
  }
  jointConfigureMotorPosition(I2, g2, C2, B2, Q2) {
    A.rawimpulsejointset_jointConfigureMotorPosition(this.ptr, I2, g2, C2, B2, Q2);
  }
  jointConfigureMotor(I2, g2, C2, B2, Q2, E2) {
    A.rawimpulsejointset_jointConfigureMotor(this.ptr, I2, g2, C2, B2, Q2, E2);
  }
  constructor() {
    const I2 = A.rawimpulsejointset_new();
    return n.__wrap(I2);
  }
  createJoint(I2, g2, C2, B2) {
    a(I2, O);
    return A.rawimpulsejointset_createJoint(this.ptr, I2.ptr, g2, C2, B2);
  }
  remove(I2, g2) {
    A.rawimpulsejointset_remove(this.ptr, I2, g2);
  }
  len() {
    return A.rawimpulsejointset_len(this.ptr) >>> 0;
  }
  contains(I2) {
    return 0 !== A.rawimpulsejointset_contains(this.ptr, I2);
  }
  forEachJointHandle(g2) {
    try {
      A.rawimpulsejointset_forEachJointHandle(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
  forEachJointAttachedToRigidBody(g2, C2) {
    try {
      A.rawimpulsejointset_forEachJointAttachedToRigidBody(this.ptr, g2, J(C2));
    } finally {
      I[y++] = void 0;
    }
  }
};
var Z = class {
  static __wrap(A2) {
    const I2 = Object.create(Z.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawintegrationparameters_free(I2);
  }
  constructor() {
    const I2 = A.rawintegrationparameters_new();
    return Z.__wrap(I2);
  }
  get dt() {
    return A.rawintegrationparameters_dt(this.ptr);
  }
  get erp() {
    return A.rawcharactercollision_toi(this.ptr);
  }
  get allowedLinearError() {
    return A.rawintegrationparameters_allowedLinearError(this.ptr);
  }
  get predictionDistance() {
    return A.rawintegrationparameters_predictionDistance(this.ptr);
  }
  get maxVelocityIterations() {
    return A.rawintegrationparameters_maxVelocityIterations(this.ptr) >>> 0;
  }
  get maxVelocityFrictionIterations() {
    return A.rawintegrationparameters_maxVelocityFrictionIterations(this.ptr) >>> 0;
  }
  get maxStabilizationIterations() {
    return A.rawintegrationparameters_maxStabilizationIterations(this.ptr) >>> 0;
  }
  get minIslandSize() {
    return A.rawintegrationparameters_minIslandSize(this.ptr) >>> 0;
  }
  get maxCcdSubsteps() {
    return A.rawintegrationparameters_maxCcdSubsteps(this.ptr) >>> 0;
  }
  set dt(I2) {
    A.rawintegrationparameters_set_dt(this.ptr, I2);
  }
  set erp(I2) {
    A.rawintegrationparameters_set_erp(this.ptr, I2);
  }
  set allowedLinearError(I2) {
    A.rawintegrationparameters_set_allowedLinearError(this.ptr, I2);
  }
  set predictionDistance(I2) {
    A.rawintegrationparameters_set_predictionDistance(this.ptr, I2);
  }
  set maxVelocityIterations(I2) {
    A.rawintegrationparameters_set_maxVelocityIterations(this.ptr, I2);
  }
  set maxVelocityFrictionIterations(I2) {
    A.rawintegrationparameters_set_maxVelocityFrictionIterations(this.ptr, I2);
  }
  set maxStabilizationIterations(I2) {
    A.rawintegrationparameters_set_maxStabilizationIterations(this.ptr, I2);
  }
  set minIslandSize(I2) {
    A.rawintegrationparameters_set_minIslandSize(this.ptr, I2);
  }
  set maxCcdSubsteps(I2) {
    A.rawintegrationparameters_set_maxCcdSubsteps(this.ptr, I2);
  }
};
var b = class {
  static __wrap(A2) {
    const I2 = Object.create(b.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawislandmanager_free(I2);
  }
  constructor() {
    const I2 = A.rawislandmanager_new();
    return b.__wrap(I2);
  }
  forEachActiveRigidBodyHandle(g2) {
    try {
      A.rawislandmanager_forEachActiveRigidBodyHandle(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
};
var W = class {
  static __wrap(A2) {
    const I2 = Object.create(W.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawkinematiccharactercontroller_free(I2);
  }
  constructor(I2) {
    const g2 = A.rawkinematiccharactercontroller_new(I2);
    return W.__wrap(g2);
  }
  up() {
    const I2 = A.rawkinematiccharactercontroller_up(this.ptr);
    return QA.__wrap(I2);
  }
  setUp(I2) {
    a(I2, QA), A.rawkinematiccharactercontroller_setUp(this.ptr, I2.ptr);
  }
  offset() {
    return A.rawkinematiccharactercontroller_offset(this.ptr);
  }
  setOffset(I2) {
    A.rawkinematiccharactercontroller_setOffset(this.ptr, I2);
  }
  slideEnabled() {
    return 0 !== A.rawkinematiccharactercontroller_slideEnabled(this.ptr);
  }
  setSlideEnabled(I2) {
    A.rawkinematiccharactercontroller_setSlideEnabled(this.ptr, I2);
  }
  autostepMaxHeight() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawkinematiccharactercontroller_autostepMaxHeight(C2, this.ptr);
      var I2 = G()[C2 / 4 + 0], g2 = K()[C2 / 4 + 1];
      return 0 === I2 ? void 0 : g2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  autostepMinWidth() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawkinematiccharactercontroller_autostepMinWidth(C2, this.ptr);
      var I2 = G()[C2 / 4 + 0], g2 = K()[C2 / 4 + 1];
      return 0 === I2 ? void 0 : g2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  autostepIncludesDynamicBodies() {
    const I2 = A.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.ptr);
    return 16777215 === I2 ? void 0 : 0 !== I2;
  }
  autostepEnabled() {
    return 0 !== A.rawkinematiccharactercontroller_autostepEnabled(this.ptr);
  }
  enableAutostep(I2, g2, C2) {
    A.rawkinematiccharactercontroller_enableAutostep(this.ptr, I2, g2, C2);
  }
  disableAutostep() {
    A.rawkinematiccharactercontroller_disableAutostep(this.ptr);
  }
  maxSlopeClimbAngle() {
    return A.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.ptr);
  }
  setMaxSlopeClimbAngle(I2) {
    A.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.ptr, I2);
  }
  minSlopeSlideAngle() {
    return A.rawkinematiccharactercontroller_minSlopeSlideAngle(this.ptr);
  }
  setMinSlopeSlideAngle(I2) {
    A.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.ptr, I2);
  }
  snapToGroundDistance() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawkinematiccharactercontroller_snapToGroundDistance(C2, this.ptr);
      var I2 = G()[C2 / 4 + 0], g2 = K()[C2 / 4 + 1];
      return 0 === I2 ? void 0 : g2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  enableSnapToGround(I2) {
    A.rawkinematiccharactercontroller_enableSnapToGround(this.ptr, I2);
  }
  disableSnapToGround() {
    A.rawkinematiccharactercontroller_disableSnapToGround(this.ptr);
  }
  snapToGroundEnabled() {
    return 0 !== A.rawkinematiccharactercontroller_snapToGroundEnabled(this.ptr);
  }
  computeColliderMovement(g2, C2, B2, Q2, i2, D2, o2, G2, w2, k2, S2) {
    try {
      a(C2, v), a(B2, l), a(Q2, V), a(D2, QA), A.rawkinematiccharactercontroller_computeColliderMovement(this.ptr, g2, C2.ptr, B2.ptr, Q2.ptr, i2, D2.ptr, o2, !E(G2), E(G2) ? 0 : G2, w2, !E(k2), E(k2) ? 0 : k2, J(S2));
    } finally {
      I[y++] = void 0;
    }
  }
  computedMovement() {
    const I2 = A.rawkinematiccharactercontroller_computedMovement(this.ptr);
    return QA.__wrap(I2);
  }
  computedGrounded() {
    return 0 !== A.rawkinematiccharactercontroller_computedGrounded(this.ptr);
  }
  numComputedCollisions() {
    return A.rawkinematiccharactercontroller_numComputedCollisions(this.ptr) >>> 0;
  }
  computedCollision(I2, g2) {
    a(g2, H);
    return 0 !== A.rawkinematiccharactercontroller_computedCollision(this.ptr, I2, g2.ptr);
  }
};
var j = class {
  static __wrap(A2) {
    const I2 = Object.create(j.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawmultibodyjointset_free(I2);
  }
  jointType(I2) {
    return A.rawmultibodyjointset_jointType(this.ptr, I2) >>> 0;
  }
  jointFrameX1(I2) {
    const g2 = A.rawmultibodyjointset_jointFrameX1(this.ptr, I2);
    return _.__wrap(g2);
  }
  jointFrameX2(I2) {
    const g2 = A.rawmultibodyjointset_jointFrameX2(this.ptr, I2);
    return _.__wrap(g2);
  }
  jointAnchor1(I2) {
    const g2 = A.rawmultibodyjointset_jointAnchor1(this.ptr, I2);
    return QA.__wrap(g2);
  }
  jointAnchor2(I2) {
    const g2 = A.rawmultibodyjointset_jointAnchor2(this.ptr, I2);
    return QA.__wrap(g2);
  }
  jointContactsEnabled(I2) {
    return 0 !== A.rawmultibodyjointset_jointContactsEnabled(this.ptr, I2);
  }
  jointSetContactsEnabled(I2, g2) {
    A.rawmultibodyjointset_jointSetContactsEnabled(this.ptr, I2, g2);
  }
  jointLimitsEnabled(I2, g2) {
    return 0 !== A.rawmultibodyjointset_jointLimitsEnabled(this.ptr, I2, g2);
  }
  jointLimitsMin(I2, g2) {
    return A.rawmultibodyjointset_jointLimitsMin(this.ptr, I2, g2);
  }
  jointLimitsMax(I2, g2) {
    return A.rawmultibodyjointset_jointLimitsMax(this.ptr, I2, g2);
  }
  constructor() {
    const I2 = A.rawmultibodyjointset_new();
    return j.__wrap(I2);
  }
  createJoint(I2, g2, C2, B2) {
    a(I2, O);
    return A.rawmultibodyjointset_createJoint(this.ptr, I2.ptr, g2, C2, B2);
  }
  remove(I2, g2) {
    A.rawmultibodyjointset_remove(this.ptr, I2, g2);
  }
  contains(I2) {
    return 0 !== A.rawmultibodyjointset_contains(this.ptr, I2);
  }
  forEachJointHandle(g2) {
    try {
      A.rawmultibodyjointset_forEachJointHandle(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
  forEachJointAttachedToRigidBody(g2, C2) {
    try {
      A.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.ptr, g2, J(C2));
    } finally {
      I[y++] = void 0;
    }
  }
};
var x = class {
  static __wrap(A2) {
    const I2 = Object.create(x.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawnarrowphase_free(I2);
  }
  constructor() {
    const I2 = A.rawnarrowphase_new();
    return x.__wrap(I2);
  }
  contacts_with(I2, g2) {
    A.rawnarrowphase_contacts_with(this.ptr, I2, Q(g2));
  }
  contact_pair(I2, g2) {
    const C2 = A.rawnarrowphase_contact_pair(this.ptr, I2, g2);
    return 0 === C2 ? void 0 : e.__wrap(C2);
  }
  intersections_with(I2, g2) {
    A.rawnarrowphase_intersections_with(this.ptr, I2, Q(g2));
  }
  intersection_pair(I2, g2) {
    return 0 !== A.rawnarrowphase_intersection_pair(this.ptr, I2, g2);
  }
};
var f = class {
  static __wrap(A2) {
    const I2 = Object.create(f.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawphysicspipeline_free(I2);
  }
  constructor() {
    const I2 = A.rawphysicspipeline_new();
    return f.__wrap(I2);
  }
  step(I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2) {
    a(I2, QA), a(g2, Z), a(C2, b), a(B2, Y), a(Q2, x), a(E2, v), a(i2, l), a(D2, n), a(o2, j), a(G2, L), A.rawphysicspipeline_step(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, E2.ptr, i2.ptr, D2.ptr, o2.ptr, G2.ptr);
  }
  stepWithEvents(I2, g2, C2, B2, E2, i2, D2, o2, G2, w2, k2, S2, M2, K2) {
    a(I2, QA), a(g2, Z), a(C2, b), a(B2, Y), a(E2, x), a(i2, v), a(D2, l), a(o2, n), a(G2, j), a(w2, L), a(k2, T), A.rawphysicspipeline_stepWithEvents(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, E2.ptr, i2.ptr, D2.ptr, o2.ptr, G2.ptr, w2.ptr, k2.ptr, Q(S2), Q(M2), Q(K2));
  }
};
var m = class {
  static __wrap(A2) {
    const I2 = Object.create(m.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawpointcolliderprojection_free(I2);
  }
  colliderHandle() {
    return A.rawpointcolliderprojection_colliderHandle(this.ptr);
  }
  point() {
    const I2 = A.rawkinematiccharactercontroller_computedMovement(this.ptr);
    return QA.__wrap(I2);
  }
  isInside() {
    return 0 !== A.rawkinematiccharactercontroller_computedGrounded(this.ptr);
  }
  featureType() {
    return A.rawpointcolliderprojection_featureType(this.ptr) >>> 0;
  }
  featureId() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawpointcolliderprojection_featureId(C2, this.ptr);
      var I2 = G()[C2 / 4 + 0], g2 = G()[C2 / 4 + 1];
      return 0 === I2 ? void 0 : g2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var X = class {
  static __wrap(A2) {
    const I2 = Object.create(X.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawpointprojection_free(I2);
  }
  point() {
    const I2 = A.rawkinematiccharactercontroller_computedMovement(this.ptr);
    return QA.__wrap(I2);
  }
  isInside() {
    return 0 !== A.rawkinematiccharactercontroller_computedGrounded(this.ptr);
  }
};
var V = class {
  static __wrap(A2) {
    const I2 = Object.create(V.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawquerypipeline_free(I2);
  }
  constructor() {
    const I2 = A.rawquerypipeline_new();
    return V.__wrap(I2);
  }
  update(I2, g2) {
    a(I2, v), a(g2, l), A.rawquerypipeline_update(this.ptr, I2.ptr, g2.ptr);
  }
  castRay(g2, C2, B2, Q2, i2, D2, o2, G2, w2, k2, S2) {
    try {
      a(g2, v), a(C2, l), a(B2, QA), a(Q2, QA);
      const M2 = A.rawquerypipeline_castRay(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, i2, D2, o2, !E(G2), E(G2) ? 0 : G2, !E(w2), E(w2) ? 0 : w2, !E(k2), E(k2) ? 0 : k2, J(S2));
      return 0 === M2 ? void 0 : z.__wrap(M2);
    } finally {
      I[y++] = void 0;
    }
  }
  castRayAndGetNormal(g2, C2, B2, Q2, i2, D2, o2, G2, w2, k2, S2) {
    try {
      a(g2, v), a(C2, l), a(B2, QA), a(Q2, QA);
      const M2 = A.rawquerypipeline_castRayAndGetNormal(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, i2, D2, o2, !E(G2), E(G2) ? 0 : G2, !E(w2), E(w2) ? 0 : w2, !E(k2), E(k2) ? 0 : k2, J(S2));
      return 0 === M2 ? void 0 : P.__wrap(M2);
    } finally {
      I[y++] = void 0;
    }
  }
  intersectionsWithRay(g2, C2, B2, Q2, i2, D2, o2, G2, w2, k2, S2, M2) {
    try {
      a(g2, v), a(C2, l), a(B2, QA), a(Q2, QA), A.rawquerypipeline_intersectionsWithRay(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, i2, D2, J(o2), G2, !E(w2), E(w2) ? 0 : w2, !E(k2), E(k2) ? 0 : k2, !E(S2), E(S2) ? 0 : S2, J(M2));
    } finally {
      I[y++] = void 0, I[y++] = void 0;
    }
  }
  intersectionWithShape(g2, C2, B2, Q2, i2, o2, w2, k2, S2, M2) {
    try {
      const h2 = A.__wbindgen_add_to_stack_pointer(-16);
      a(g2, v), a(C2, l), a(B2, QA), a(Q2, _), a(i2, IA), A.rawquerypipeline_intersectionWithShape(h2, this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, i2.ptr, o2, !E(w2), E(w2) ? 0 : w2, !E(k2), E(k2) ? 0 : k2, !E(S2), E(S2) ? 0 : S2, J(M2));
      var K2 = G()[h2 / 4 + 0], U2 = D()[h2 / 8 + 1];
      return 0 === K2 ? void 0 : U2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16), I[y++] = void 0;
    }
  }
  projectPoint(g2, C2, B2, Q2, i2, D2, o2, G2, w2) {
    try {
      a(g2, v), a(C2, l), a(B2, QA);
      const k2 = A.rawquerypipeline_projectPoint(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2, i2, !E(D2), E(D2) ? 0 : D2, !E(o2), E(o2) ? 0 : o2, !E(G2), E(G2) ? 0 : G2, J(w2));
      return 0 === k2 ? void 0 : m.__wrap(k2);
    } finally {
      I[y++] = void 0;
    }
  }
  projectPointAndGetFeature(g2, C2, B2, Q2, i2, D2, o2, G2) {
    try {
      a(g2, v), a(C2, l), a(B2, QA);
      const w2 = A.rawquerypipeline_projectPointAndGetFeature(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2, !E(i2), E(i2) ? 0 : i2, !E(D2), E(D2) ? 0 : D2, !E(o2), E(o2) ? 0 : o2, J(G2));
      return 0 === w2 ? void 0 : m.__wrap(w2);
    } finally {
      I[y++] = void 0;
    }
  }
  intersectionsWithPoint(g2, C2, B2, Q2, i2, D2, o2, G2, w2) {
    try {
      a(g2, v), a(C2, l), a(B2, QA), A.rawquerypipeline_intersectionsWithPoint(this.ptr, g2.ptr, C2.ptr, B2.ptr, J(Q2), i2, !E(D2), E(D2) ? 0 : D2, !E(o2), E(o2) ? 0 : o2, !E(G2), E(G2) ? 0 : G2, J(w2));
    } finally {
      I[y++] = void 0, I[y++] = void 0;
    }
  }
  castShape(g2, C2, B2, Q2, i2, D2, o2, G2, w2, k2, S2, M2, K2) {
    try {
      a(g2, v), a(C2, l), a(B2, QA), a(Q2, _), a(i2, QA), a(D2, IA);
      const U2 = A.rawquerypipeline_castShape(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, i2.ptr, D2.ptr, o2, G2, w2, !E(k2), E(k2) ? 0 : k2, !E(S2), E(S2) ? 0 : S2, !E(M2), E(M2) ? 0 : M2, J(K2));
      return 0 === U2 ? void 0 : gA.__wrap(U2);
    } finally {
      I[y++] = void 0;
    }
  }
  intersectionsWithShape(g2, C2, B2, Q2, i2, D2, o2, G2, w2, k2, S2) {
    try {
      a(g2, v), a(C2, l), a(B2, QA), a(Q2, _), a(i2, IA), A.rawquerypipeline_intersectionsWithShape(this.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, i2.ptr, J(D2), o2, !E(G2), E(G2) ? 0 : G2, !E(w2), E(w2) ? 0 : w2, !E(k2), E(k2) ? 0 : k2, J(S2));
    } finally {
      I[y++] = void 0, I[y++] = void 0;
    }
  }
  collidersWithAabbIntersectingAabb(g2, C2, B2) {
    try {
      a(g2, QA), a(C2, QA), A.rawquerypipeline_collidersWithAabbIntersectingAabb(this.ptr, g2.ptr, C2.ptr, J(B2));
    } finally {
      I[y++] = void 0;
    }
  }
};
var P = class {
  static __wrap(A2) {
    const I2 = Object.create(P.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawraycolliderintersection_free(I2);
  }
  colliderHandle() {
    return A.rawcharactercollision_handle(this.ptr);
  }
  normal() {
    const I2 = A.rawraycolliderintersection_normal(this.ptr);
    return QA.__wrap(I2);
  }
  toi() {
    return A.rawraycolliderintersection_toi(this.ptr);
  }
  featureType() {
    return A.rawraycolliderintersection_featureType(this.ptr) >>> 0;
  }
  featureId() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawraycolliderintersection_featureId(C2, this.ptr);
      var I2 = G()[C2 / 4 + 0], g2 = G()[C2 / 4 + 1];
      return 0 === I2 ? void 0 : g2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var z = class {
  static __wrap(A2) {
    const I2 = Object.create(z.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawraycollidertoi_free(I2);
  }
  colliderHandle() {
    return A.rawcharactercollision_handle(this.ptr);
  }
  toi() {
    return A.rawcharactercollision_toi(this.ptr);
  }
};
var u = class {
  static __wrap(A2) {
    const I2 = Object.create(u.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawrayintersection_free(I2);
  }
  normal() {
    const I2 = A.rawcharactercollision_worldWitness1(this.ptr);
    return QA.__wrap(I2);
  }
  toi() {
    return A.rawcharactercollision_toi(this.ptr);
  }
  featureType() {
    return A.rawrayintersection_featureType(this.ptr) >>> 0;
  }
  featureId() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawrayintersection_featureId(C2, this.ptr);
      var I2 = G()[C2 / 4 + 0], g2 = G()[C2 / 4 + 1];
      return 0 === I2 ? void 0 : g2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var v = class {
  static __wrap(A2) {
    const I2 = Object.create(v.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawrigidbodyset_free(I2);
  }
  rbTranslation(I2) {
    const g2 = A.rawrigidbodyset_rbTranslation(this.ptr, I2);
    return QA.__wrap(g2);
  }
  rbRotation(I2) {
    const g2 = A.rawrigidbodyset_rbRotation(this.ptr, I2);
    return _.__wrap(g2);
  }
  rbSleep(I2) {
    A.rawrigidbodyset_rbSleep(this.ptr, I2);
  }
  rbIsSleeping(I2) {
    return 0 !== A.rawrigidbodyset_rbIsSleeping(this.ptr, I2);
  }
  rbIsMoving(I2) {
    return 0 !== A.rawrigidbodyset_rbIsMoving(this.ptr, I2);
  }
  rbNextTranslation(I2) {
    const g2 = A.rawrigidbodyset_rbNextTranslation(this.ptr, I2);
    return QA.__wrap(g2);
  }
  rbNextRotation(I2) {
    const g2 = A.rawrigidbodyset_rbNextRotation(this.ptr, I2);
    return _.__wrap(g2);
  }
  rbSetTranslation(I2, g2, C2, B2, Q2) {
    A.rawrigidbodyset_rbSetTranslation(this.ptr, I2, g2, C2, B2, Q2);
  }
  rbSetRotation(I2, g2, C2, B2, Q2, E2) {
    A.rawrigidbodyset_rbSetRotation(this.ptr, I2, g2, C2, B2, Q2, E2);
  }
  rbSetLinvel(I2, g2, C2) {
    a(g2, QA), A.rawrigidbodyset_rbSetLinvel(this.ptr, I2, g2.ptr, C2);
  }
  rbSetAngvel(I2, g2, C2) {
    a(g2, QA), A.rawrigidbodyset_rbSetAngvel(this.ptr, I2, g2.ptr, C2);
  }
  rbSetNextKinematicTranslation(I2, g2, C2, B2) {
    A.rawrigidbodyset_rbSetNextKinematicTranslation(this.ptr, I2, g2, C2, B2);
  }
  rbSetNextKinematicRotation(I2, g2, C2, B2, Q2) {
    A.rawrigidbodyset_rbSetNextKinematicRotation(this.ptr, I2, g2, C2, B2, Q2);
  }
  rbRecomputeMassPropertiesFromColliders(I2, g2) {
    a(g2, l), A.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.ptr, I2, g2.ptr);
  }
  rbSetAdditionalMass(I2, g2, C2) {
    A.rawrigidbodyset_rbSetAdditionalMass(this.ptr, I2, g2, C2);
  }
  rbSetAdditionalMassProperties(I2, g2, C2, B2, Q2, E2) {
    a(C2, QA), a(B2, QA), a(Q2, _), A.rawrigidbodyset_rbSetAdditionalMassProperties(this.ptr, I2, g2, C2.ptr, B2.ptr, Q2.ptr, E2);
  }
  rbLinvel(I2) {
    const g2 = A.rawrigidbodyset_rbLinvel(this.ptr, I2);
    return QA.__wrap(g2);
  }
  rbAngvel(I2) {
    const g2 = A.rawrigidbodyset_rbAngvel(this.ptr, I2);
    return QA.__wrap(g2);
  }
  rbLockTranslations(I2, g2, C2) {
    A.rawrigidbodyset_rbLockTranslations(this.ptr, I2, g2, C2);
  }
  rbSetEnabledTranslations(I2, g2, C2, B2, Q2) {
    A.rawrigidbodyset_rbSetEnabledTranslations(this.ptr, I2, g2, C2, B2, Q2);
  }
  rbLockRotations(I2, g2, C2) {
    A.rawrigidbodyset_rbLockRotations(this.ptr, I2, g2, C2);
  }
  rbSetEnabledRotations(I2, g2, C2, B2, Q2) {
    A.rawrigidbodyset_rbSetEnabledRotations(this.ptr, I2, g2, C2, B2, Q2);
  }
  rbDominanceGroup(I2) {
    return A.rawrigidbodyset_rbDominanceGroup(this.ptr, I2);
  }
  rbSetDominanceGroup(I2, g2) {
    A.rawrigidbodyset_rbSetDominanceGroup(this.ptr, I2, g2);
  }
  rbEnableCcd(I2, g2) {
    A.rawrigidbodyset_rbEnableCcd(this.ptr, I2, g2);
  }
  rbMass(I2) {
    return A.rawrigidbodyset_rbMass(this.ptr, I2);
  }
  rbInvMass(I2) {
    return A.rawrigidbodyset_rbInvMass(this.ptr, I2);
  }
  rbEffectiveInvMass(I2) {
    const g2 = A.rawrigidbodyset_rbEffectiveInvMass(this.ptr, I2);
    return QA.__wrap(g2);
  }
  rbLocalCom(I2) {
    const g2 = A.rawrigidbodyset_rbLocalCom(this.ptr, I2);
    return QA.__wrap(g2);
  }
  rbWorldCom(I2) {
    const g2 = A.rawrigidbodyset_rbWorldCom(this.ptr, I2);
    return QA.__wrap(g2);
  }
  rbInvPrincipalInertiaSqrt(I2) {
    const g2 = A.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.ptr, I2);
    return QA.__wrap(g2);
  }
  rbPrincipalInertiaLocalFrame(I2) {
    const g2 = A.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.ptr, I2);
    return _.__wrap(g2);
  }
  rbPrincipalInertia(I2) {
    const g2 = A.rawrigidbodyset_rbPrincipalInertia(this.ptr, I2);
    return QA.__wrap(g2);
  }
  rbEffectiveWorldInvInertiaSqrt(I2) {
    const g2 = A.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.ptr, I2);
    return $.__wrap(g2);
  }
  rbEffectiveAngularInertia(I2) {
    const g2 = A.rawrigidbodyset_rbEffectiveAngularInertia(this.ptr, I2);
    return $.__wrap(g2);
  }
  rbWakeUp(I2) {
    A.rawrigidbodyset_rbWakeUp(this.ptr, I2);
  }
  rbIsCcdEnabled(I2) {
    return 0 !== A.rawrigidbodyset_rbIsCcdEnabled(this.ptr, I2);
  }
  rbNumColliders(I2) {
    return A.rawrigidbodyset_rbNumColliders(this.ptr, I2) >>> 0;
  }
  rbCollider(I2, g2) {
    return A.rawrigidbodyset_rbCollider(this.ptr, I2, g2);
  }
  rbBodyType(I2) {
    return A.rawrigidbodyset_rbBodyType(this.ptr, I2) >>> 0;
  }
  rbSetBodyType(I2, g2, C2) {
    A.rawrigidbodyset_rbSetBodyType(this.ptr, I2, g2, C2);
  }
  rbIsFixed(I2) {
    return 0 !== A.rawrigidbodyset_rbIsFixed(this.ptr, I2);
  }
  rbIsKinematic(I2) {
    return 0 !== A.rawrigidbodyset_rbIsKinematic(this.ptr, I2);
  }
  rbIsDynamic(I2) {
    return 0 !== A.rawrigidbodyset_rbIsDynamic(this.ptr, I2);
  }
  rbLinearDamping(I2) {
    return A.rawrigidbodyset_rbLinearDamping(this.ptr, I2);
  }
  rbAngularDamping(I2) {
    return A.rawrigidbodyset_rbAngularDamping(this.ptr, I2);
  }
  rbSetLinearDamping(I2, g2) {
    A.rawrigidbodyset_rbSetLinearDamping(this.ptr, I2, g2);
  }
  rbSetAngularDamping(I2, g2) {
    A.rawrigidbodyset_rbSetAngularDamping(this.ptr, I2, g2);
  }
  rbSetEnabled(I2, g2) {
    A.rawrigidbodyset_rbSetEnabled(this.ptr, I2, g2);
  }
  rbIsEnabled(I2) {
    return 0 !== A.rawrigidbodyset_rbIsEnabled(this.ptr, I2);
  }
  rbGravityScale(I2) {
    return A.rawrigidbodyset_rbGravityScale(this.ptr, I2);
  }
  rbSetGravityScale(I2, g2, C2) {
    A.rawrigidbodyset_rbSetGravityScale(this.ptr, I2, g2, C2);
  }
  rbResetForces(I2, g2) {
    A.rawrigidbodyset_rbResetForces(this.ptr, I2, g2);
  }
  rbResetTorques(I2, g2) {
    A.rawrigidbodyset_rbResetTorques(this.ptr, I2, g2);
  }
  rbAddForce(I2, g2, C2) {
    a(g2, QA), A.rawrigidbodyset_rbAddForce(this.ptr, I2, g2.ptr, C2);
  }
  rbApplyImpulse(I2, g2, C2) {
    a(g2, QA), A.rawrigidbodyset_rbApplyImpulse(this.ptr, I2, g2.ptr, C2);
  }
  rbAddTorque(I2, g2, C2) {
    a(g2, QA), A.rawrigidbodyset_rbAddTorque(this.ptr, I2, g2.ptr, C2);
  }
  rbApplyTorqueImpulse(I2, g2, C2) {
    a(g2, QA), A.rawrigidbodyset_rbApplyTorqueImpulse(this.ptr, I2, g2.ptr, C2);
  }
  rbAddForceAtPoint(I2, g2, C2, B2) {
    a(g2, QA), a(C2, QA), A.rawrigidbodyset_rbAddForceAtPoint(this.ptr, I2, g2.ptr, C2.ptr, B2);
  }
  rbApplyImpulseAtPoint(I2, g2, C2, B2) {
    a(g2, QA), a(C2, QA), A.rawrigidbodyset_rbApplyImpulseAtPoint(this.ptr, I2, g2.ptr, C2.ptr, B2);
  }
  rbUserData(I2) {
    return A.rawrigidbodyset_rbUserData(this.ptr, I2) >>> 0;
  }
  rbSetUserData(I2, g2) {
    A.rawrigidbodyset_rbSetUserData(this.ptr, I2, g2);
  }
  constructor() {
    const I2 = A.rawrigidbodyset_new();
    return v.__wrap(I2);
  }
  createRigidBody(I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2, w2, k2, S2, M2, K2, y2, J2, U2, h2, N2, F2, q2, R2, s2) {
    a(g2, QA), a(C2, _), a(i2, QA), a(D2, QA), a(o2, QA), a(G2, QA), a(w2, _);
    return A.rawrigidbodyset_createRigidBody(this.ptr, I2, g2.ptr, C2.ptr, B2, Q2, E2, i2.ptr, D2.ptr, o2.ptr, G2.ptr, w2.ptr, k2, S2, M2, K2, y2, J2, U2, h2, N2, F2, q2, R2, s2);
  }
  remove(I2, g2, C2, B2, Q2) {
    a(g2, b), a(C2, l), a(B2, n), a(Q2, j), A.rawrigidbodyset_remove(this.ptr, I2, g2.ptr, C2.ptr, B2.ptr, Q2.ptr);
  }
  len() {
    return A.rawrigidbodyset_len(this.ptr) >>> 0;
  }
  contains(I2) {
    return 0 !== A.rawrigidbodyset_contains(this.ptr, I2);
  }
  forEachRigidBodyHandle(g2) {
    try {
      A.rawrigidbodyset_forEachRigidBodyHandle(this.ptr, J(g2));
    } finally {
      I[y++] = void 0;
    }
  }
  propagateModifiedBodyPositionsToColliders(I2) {
    a(I2, l), A.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.ptr, I2.ptr);
  }
};
var _ = class {
  static __wrap(A2) {
    const I2 = Object.create(_.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawrotation_free(I2);
  }
  constructor(I2, g2, C2, B2) {
    const Q2 = A.rawrotation_new(I2, g2, C2, B2);
    return _.__wrap(Q2);
  }
  static identity() {
    const I2 = A.rawrotation_identity();
    return _.__wrap(I2);
  }
  get x() {
    return A.rawintegrationparameters_dt(this.ptr);
  }
  get y() {
    return A.rawrotation_y(this.ptr);
  }
  get z() {
    return A.rawcharactercollision_toi(this.ptr);
  }
  get w() {
    return A.rawrotation_w(this.ptr);
  }
};
var $ = class {
  static __wrap(A2) {
    const I2 = Object.create($.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawsdpmatrix3_free(I2);
  }
  elements() {
    return B(A.rawsdpmatrix3_elements(this.ptr));
  }
};
var AA = class {
  static __wrap(A2) {
    const I2 = Object.create(AA.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawserializationpipeline_free(I2);
  }
  constructor() {
    const I2 = A.rawserializationpipeline_new();
    return AA.__wrap(I2);
  }
  serializeAll(I2, g2, C2, Q2, E2, i2, D2, o2, G2) {
    a(I2, QA), a(g2, Z), a(C2, b), a(Q2, Y), a(E2, x), a(i2, v), a(D2, l), a(o2, n), a(G2, j);
    return B(A.rawserializationpipeline_serializeAll(this.ptr, I2.ptr, g2.ptr, C2.ptr, Q2.ptr, E2.ptr, i2.ptr, D2.ptr, o2.ptr, G2.ptr));
  }
  deserializeAll(I2) {
    const g2 = A.rawserializationpipeline_deserializeAll(this.ptr, Q(I2));
    return 0 === g2 ? void 0 : d.__wrap(g2);
  }
};
var IA = class {
  static __wrap(A2) {
    const I2 = Object.create(IA.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawshape_free(I2);
  }
  static cuboid(I2, g2, C2) {
    const B2 = A.rawshape_cuboid(I2, g2, C2);
    return IA.__wrap(B2);
  }
  static roundCuboid(I2, g2, C2, B2) {
    const Q2 = A.rawshape_roundCuboid(I2, g2, C2, B2);
    return IA.__wrap(Q2);
  }
  static ball(I2) {
    const g2 = A.rawshape_ball(I2);
    return IA.__wrap(g2);
  }
  static halfspace(I2) {
    a(I2, QA);
    const g2 = A.rawshape_halfspace(I2.ptr);
    return IA.__wrap(g2);
  }
  static capsule(I2, g2) {
    const C2 = A.rawshape_capsule(I2, g2);
    return IA.__wrap(C2);
  }
  static cylinder(I2, g2) {
    const C2 = A.rawshape_cylinder(I2, g2);
    return IA.__wrap(C2);
  }
  static roundCylinder(I2, g2, C2) {
    const B2 = A.rawshape_roundCylinder(I2, g2, C2);
    return IA.__wrap(B2);
  }
  static cone(I2, g2) {
    const C2 = A.rawshape_cone(I2, g2);
    return IA.__wrap(C2);
  }
  static roundCone(I2, g2, C2) {
    const B2 = A.rawshape_roundCone(I2, g2, C2);
    return IA.__wrap(B2);
  }
  static polyline(I2, g2) {
    const C2 = q(I2, A.__wbindgen_malloc), B2 = F, Q2 = R(g2, A.__wbindgen_malloc), E2 = F, i2 = A.rawshape_polyline(C2, B2, Q2, E2);
    return IA.__wrap(i2);
  }
  static trimesh(I2, g2) {
    const C2 = q(I2, A.__wbindgen_malloc), B2 = F, Q2 = R(g2, A.__wbindgen_malloc), E2 = F, i2 = A.rawshape_trimesh(C2, B2, Q2, E2);
    return IA.__wrap(i2);
  }
  static heightfield(I2, g2, C2, B2) {
    const Q2 = q(C2, A.__wbindgen_malloc), E2 = F;
    a(B2, QA);
    const i2 = A.rawshape_heightfield(I2, g2, Q2, E2, B2.ptr);
    return IA.__wrap(i2);
  }
  static segment(I2, g2) {
    a(I2, QA), a(g2, QA);
    const C2 = A.rawshape_segment(I2.ptr, g2.ptr);
    return IA.__wrap(C2);
  }
  static triangle(I2, g2, C2) {
    a(I2, QA), a(g2, QA), a(C2, QA);
    const B2 = A.rawshape_triangle(I2.ptr, g2.ptr, C2.ptr);
    return IA.__wrap(B2);
  }
  static roundTriangle(I2, g2, C2, B2) {
    a(I2, QA), a(g2, QA), a(C2, QA);
    const Q2 = A.rawshape_roundTriangle(I2.ptr, g2.ptr, C2.ptr, B2);
    return IA.__wrap(Q2);
  }
  static convexHull(I2) {
    const g2 = q(I2, A.__wbindgen_malloc), C2 = F, B2 = A.rawshape_convexHull(g2, C2);
    return 0 === B2 ? void 0 : IA.__wrap(B2);
  }
  static roundConvexHull(I2, g2) {
    const C2 = q(I2, A.__wbindgen_malloc), B2 = F, Q2 = A.rawshape_roundConvexHull(C2, B2, g2);
    return 0 === Q2 ? void 0 : IA.__wrap(Q2);
  }
  static convexMesh(I2, g2) {
    const C2 = q(I2, A.__wbindgen_malloc), B2 = F, Q2 = R(g2, A.__wbindgen_malloc), E2 = F, i2 = A.rawshape_convexMesh(C2, B2, Q2, E2);
    return 0 === i2 ? void 0 : IA.__wrap(i2);
  }
  static roundConvexMesh(I2, g2, C2) {
    const B2 = q(I2, A.__wbindgen_malloc), Q2 = F, E2 = R(g2, A.__wbindgen_malloc), i2 = F, D2 = A.rawshape_roundConvexMesh(B2, Q2, E2, i2, C2);
    return 0 === D2 ? void 0 : IA.__wrap(D2);
  }
  castShape(I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
    a(I2, QA), a(g2, _), a(C2, QA), a(B2, IA), a(Q2, QA), a(E2, _), a(i2, QA);
    const G2 = A.rawshape_castShape(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, E2.ptr, i2.ptr, D2, o2);
    return 0 === G2 ? void 0 : BA.__wrap(G2);
  }
  intersectsShape(I2, g2, C2, B2, Q2) {
    a(I2, QA), a(g2, _), a(C2, IA), a(B2, QA), a(Q2, _);
    return 0 !== A.rawshape_intersectsShape(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr);
  }
  contactShape(I2, g2, C2, B2, Q2, E2) {
    a(I2, QA), a(g2, _), a(C2, IA), a(B2, QA), a(Q2, _);
    const i2 = A.rawshape_contactShape(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2.ptr, E2);
    return 0 === i2 ? void 0 : CA.__wrap(i2);
  }
  containsPoint(I2, g2, C2) {
    a(I2, QA), a(g2, _), a(C2, QA);
    return 0 !== A.rawshape_containsPoint(this.ptr, I2.ptr, g2.ptr, C2.ptr);
  }
  projectPoint(I2, g2, C2, B2) {
    a(I2, QA), a(g2, _), a(C2, QA);
    const Q2 = A.rawshape_projectPoint(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2);
    return X.__wrap(Q2);
  }
  intersectsRay(I2, g2, C2, B2, Q2) {
    a(I2, QA), a(g2, _), a(C2, QA), a(B2, QA);
    return 0 !== A.rawshape_intersectsRay(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2);
  }
  castRay(I2, g2, C2, B2, Q2, E2) {
    a(I2, QA), a(g2, _), a(C2, QA), a(B2, QA);
    return A.rawshape_castRay(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2, E2);
  }
  castRayAndGetNormal(I2, g2, C2, B2, Q2, E2) {
    a(I2, QA), a(g2, _), a(C2, QA), a(B2, QA);
    const i2 = A.rawshape_castRayAndGetNormal(this.ptr, I2.ptr, g2.ptr, C2.ptr, B2.ptr, Q2, E2);
    return 0 === i2 ? void 0 : u.__wrap(i2);
  }
};
var gA = class {
  static __wrap(A2) {
    const I2 = Object.create(gA.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawshapecollidertoi_free(I2);
  }
  colliderHandle() {
    return A.rawcharactercollision_handle(this.ptr);
  }
  toi() {
    return A.rawcharactercollision_toi(this.ptr);
  }
  witness1() {
    const I2 = A.rawcharactercollision_worldWitness1(this.ptr);
    return QA.__wrap(I2);
  }
  witness2() {
    const I2 = A.rawshapecollidertoi_witness2(this.ptr);
    return QA.__wrap(I2);
  }
  normal1() {
    const I2 = A.rawcharactercollision_worldNormal1(this.ptr);
    return QA.__wrap(I2);
  }
  normal2() {
    const I2 = A.rawshapecollidertoi_normal2(this.ptr);
    return QA.__wrap(I2);
  }
};
var CA = class {
  static __wrap(A2) {
    const I2 = Object.create(CA.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawshapecontact_free(I2);
  }
  distance() {
    return A.rawshapecontact_distance(this.ptr);
  }
  point1() {
    const I2 = A.rawkinematiccharactercontroller_computedMovement(this.ptr);
    return QA.__wrap(I2);
  }
  point2() {
    const I2 = A.rawcharactercollision_worldWitness1(this.ptr);
    return QA.__wrap(I2);
  }
  normal1() {
    const I2 = A.rawshapecollidertoi_witness2(this.ptr);
    return QA.__wrap(I2);
  }
  normal2() {
    const I2 = A.rawcharactercollision_worldNormal1(this.ptr);
    return QA.__wrap(I2);
  }
};
var BA = class {
  static __wrap(A2) {
    const I2 = Object.create(BA.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawshapetoi_free(I2);
  }
  toi() {
    return A.rawintegrationparameters_dt(this.ptr);
  }
  witness1() {
    const I2 = A.rawshapetoi_witness1(this.ptr);
    return QA.__wrap(I2);
  }
  witness2() {
    const I2 = A.rawcontactforceevent_total_force(this.ptr);
    return QA.__wrap(I2);
  }
  normal1() {
    const I2 = A.rawshapetoi_normal1(this.ptr);
    return QA.__wrap(I2);
  }
  normal2() {
    const I2 = A.rawshapetoi_normal2(this.ptr);
    return QA.__wrap(I2);
  }
};
var QA = class {
  static __wrap(A2) {
    const I2 = Object.create(QA.prototype);
    return I2.ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.ptr;
    return this.ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawvector_free(I2);
  }
  static zero() {
    const I2 = A.rawvector_zero();
    return QA.__wrap(I2);
  }
  constructor(I2, g2, C2) {
    const B2 = A.rawvector_new(I2, g2, C2);
    return QA.__wrap(B2);
  }
  get x() {
    return A.rawintegrationparameters_dt(this.ptr);
  }
  set x(I2) {
    A.rawintegrationparameters_set_dt(this.ptr, I2);
  }
  get y() {
    return A.rawrotation_y(this.ptr);
  }
  set y(I2) {
    A.rawvector_set_y(this.ptr, I2);
  }
  get z() {
    return A.rawcharactercollision_toi(this.ptr);
  }
  set z(I2) {
    A.rawintegrationparameters_set_erp(this.ptr, I2);
  }
  xyz() {
    const I2 = A.rawvector_xyz(this.ptr);
    return QA.__wrap(I2);
  }
  yxz() {
    const I2 = A.rawvector_yxz(this.ptr);
    return QA.__wrap(I2);
  }
  zxy() {
    const I2 = A.rawvector_zxy(this.ptr);
    return QA.__wrap(I2);
  }
  xzy() {
    const I2 = A.rawvector_xzy(this.ptr);
    return QA.__wrap(I2);
  }
  yzx() {
    const I2 = A.rawvector_yzx(this.ptr);
    return QA.__wrap(I2);
  }
  zyx() {
    const I2 = A.rawvector_zyx(this.ptr);
    return QA.__wrap(I2);
  }
};
async function EA(I2) {
  void 0 === I2 && (I2 = new URL("rapier_wasm3d_bg.wasm", "<deleted>"));
  const C2 = function() {
    const I3 = { wbg: {} };
    return I3.wbg.__wbindgen_object_drop_ref = function(A2) {
      B(A2);
    }, I3.wbg.__wbindgen_number_new = function(A2) {
      return Q(A2);
    }, I3.wbg.__wbindgen_number_get = function(A2, I4) {
      const C3 = g(I4), B2 = "number" == typeof C3 ? C3 : void 0;
      D()[A2 / 8 + 1] = E(B2) ? 0 : B2, G()[A2 / 4 + 0] = !E(B2);
    }, I3.wbg.__wbindgen_boolean_get = function(A2) {
      const I4 = g(A2);
      return "boolean" == typeof I4 ? I4 ? 1 : 0 : 2;
    }, I3.wbg.__wbindgen_is_function = function(A2) {
      return "function" == typeof g(A2);
    }, I3.wbg.__wbg_rawraycolliderintersection_new = function(A2) {
      return Q(P.__wrap(A2));
    }, I3.wbg.__wbg_rawcontactforceevent_new = function(A2) {
      return Q(t.__wrap(A2));
    }, I3.wbg.__wbg_call_168da88779e35f61 = function() {
      return s(function(A2, I4, C3) {
        return Q(g(A2).call(g(I4), g(C3)));
      }, arguments);
    }, I3.wbg.__wbg_call_3999bee59e9f7719 = function() {
      return s(function(A2, I4, C3, B2) {
        return Q(g(A2).call(g(I4), g(C3), g(B2)));
      }, arguments);
    }, I3.wbg.__wbg_call_e1f72c051cdab859 = function() {
      return s(function(A2, I4, C3, B2, E2) {
        return Q(g(A2).call(g(I4), g(C3), g(B2), g(E2)));
      }, arguments);
    }, I3.wbg.__wbg_bind_10dfe70e95d2a480 = function(A2, I4, C3, B2) {
      return Q(g(A2).bind(g(I4), g(C3), g(B2)));
    }, I3.wbg.__wbg_buffer_3f3d764d4747d564 = function(A2) {
      return Q(g(A2).buffer);
    }, I3.wbg.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be = function(A2, I4, C3) {
      return Q(new Uint8Array(g(A2), I4 >>> 0, C3 >>> 0));
    }, I3.wbg.__wbg_new_8c3f0052272a457a = function(A2) {
      return Q(new Uint8Array(g(A2)));
    }, I3.wbg.__wbg_set_83db9690f9353e79 = function(A2, I4, C3) {
      g(A2).set(g(I4), C3 >>> 0);
    }, I3.wbg.__wbg_length_9e1ae1900cb0fbd5 = function(A2) {
      return g(A2).length;
    }, I3.wbg.__wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4 = function(A2, I4, C3) {
      return Q(new Float32Array(g(A2), I4 >>> 0, C3 >>> 0));
    }, I3.wbg.__wbg_set_0e0314cf6675c1b9 = function(A2, I4, C3) {
      g(A2).set(g(I4), C3 >>> 0);
    }, I3.wbg.__wbg_length_9a2deed95d22668d = function(A2) {
      return g(A2).length;
    }, I3.wbg.__wbg_newwithlength_a7168e4a1e8f5e12 = function(A2) {
      return Q(new Float32Array(A2 >>> 0));
    }, I3.wbg.__wbindgen_throw = function(A2, I4) {
      throw new Error(S(A2, I4));
    }, I3.wbg.__wbindgen_memory = function() {
      return Q(A.memory);
    }, I3;
  }();
  ("string" == typeof I2 || "function" == typeof Request && I2 instanceof Request || "function" == typeof URL && I2 instanceof URL) && (I2 = fetch(I2));
  const { instance: w2, module: a2 } = await async function(A2, I3) {
    if ("function" == typeof Response && A2 instanceof Response) {
      if ("function" == typeof WebAssembly.instantiateStreaming)
        try {
          return await WebAssembly.instantiateStreaming(A2, I3);
        } catch (I4) {
          if ("application/wasm" == A2.headers.get("Content-Type"))
            throw I4;
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", I4);
        }
      const g2 = await A2.arrayBuffer();
      return await WebAssembly.instantiate(g2, I3);
    }
    {
      const g2 = await WebAssembly.instantiate(A2, I3);
      return g2 instanceof WebAssembly.Instance ? { instance: g2, module: A2 } : g2;
    }
  }(await I2, C2);
  return function(I3, g2) {
    return A = I3.exports, EA.__wbindgen_wasm_module = g2, M = new Float32Array(), i = new Float64Array(), o = new Int32Array(), h = new Uint32Array(), k = new Uint8Array(), A;
  }(w2, a2);
}
var iA = class {
  constructor(A2, I2, g2) {
    this.x = A2, this.y = I2, this.z = g2;
  }
};
var DA = class {
  static new(A2, I2, g2) {
    return new iA(A2, I2, g2);
  }
  static intoRaw(A2) {
    return new QA(A2.x, A2.y, A2.z);
  }
  static zeros() {
    return DA.new(0, 0, 0);
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    let I2 = DA.new(A2.x, A2.y, A2.z);
    return A2.free(), I2;
  }
  static copy(A2, I2) {
    A2.x = I2.x, A2.y = I2.y, A2.z = I2.z;
  }
};
var oA = class {
  constructor(A2, I2, g2, C2) {
    this.x = A2, this.y = I2, this.z = g2, this.w = C2;
  }
};
var GA = class {
  static identity() {
    return new oA(0, 0, 0, 1);
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    let I2 = new oA(A2.x, A2.y, A2.z, A2.w);
    return A2.free(), I2;
  }
  static intoRaw(A2) {
    return new _(A2.x, A2.y, A2.z, A2.w);
  }
  static copy(A2, I2) {
    A2.x = I2.x, A2.y = I2.y, A2.z = I2.z, A2.w = I2.w;
  }
};
var wA = class {
  constructor(A2) {
    this.elements = A2;
  }
  get m11() {
    return this.elements[0];
  }
  get m12() {
    return this.elements[1];
  }
  get m21() {
    return this.m12;
  }
  get m13() {
    return this.elements[2];
  }
  get m31() {
    return this.m13;
  }
  get m22() {
    return this.elements[3];
  }
  get m23() {
    return this.elements[4];
  }
  get m32() {
    return this.m23;
  }
  get m33() {
    return this.elements[5];
  }
};
var kA = class {
  static fromRaw(A2) {
    const I2 = new wA(A2.elements());
    return A2.free(), I2;
  }
};
var SA;
var aA;
var MA;
var KA;
var yA;
var JA;
var UA;
var hA;
var NA;
var FA;
var qA;
var RA;
!function(A2) {
  A2[A2.Dynamic = 0] = "Dynamic", A2[A2.Fixed = 1] = "Fixed", A2[A2.KinematicPositionBased = 2] = "KinematicPositionBased", A2[A2.KinematicVelocityBased = 3] = "KinematicVelocityBased";
}(SA || (SA = {}));
var sA = class {
  constructor(A2, I2, g2) {
    this.rawSet = A2, this.colliderSet = I2, this.handle = g2;
  }
  finalizeDeserialization(A2) {
    this.colliderSet = A2;
  }
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  lockTranslations(A2, I2) {
    return this.rawSet.rbLockTranslations(this.handle, A2, I2);
  }
  lockRotations(A2, I2) {
    return this.rawSet.rbLockRotations(this.handle, A2, I2);
  }
  setEnabledTranslations(A2, I2, g2, C2) {
    return this.rawSet.rbSetEnabledTranslations(this.handle, A2, I2, g2, C2);
  }
  restrictTranslations(A2, I2, g2, C2) {
    this.setEnabledTranslations(A2, I2, g2, C2);
  }
  setEnabledRotations(A2, I2, g2, C2) {
    return this.rawSet.rbSetEnabledRotations(this.handle, A2, I2, g2, C2);
  }
  restrictRotations(A2, I2, g2, C2) {
    this.setEnabledRotations(A2, I2, g2, C2);
  }
  dominanceGroup() {
    return this.rawSet.rbDominanceGroup(this.handle);
  }
  setDominanceGroup(A2) {
    this.rawSet.rbSetDominanceGroup(this.handle, A2);
  }
  enableCcd(A2) {
    this.rawSet.rbEnableCcd(this.handle, A2);
  }
  translation() {
    let A2 = this.rawSet.rbTranslation(this.handle);
    return DA.fromRaw(A2);
  }
  rotation() {
    let A2 = this.rawSet.rbRotation(this.handle);
    return GA.fromRaw(A2);
  }
  nextTranslation() {
    let A2 = this.rawSet.rbNextTranslation(this.handle);
    return DA.fromRaw(A2);
  }
  nextRotation() {
    let A2 = this.rawSet.rbNextRotation(this.handle);
    return GA.fromRaw(A2);
  }
  setTranslation(A2, I2) {
    this.rawSet.rbSetTranslation(this.handle, A2.x, A2.y, A2.z, I2);
  }
  setLinvel(A2, I2) {
    let g2 = DA.intoRaw(A2);
    this.rawSet.rbSetLinvel(this.handle, g2, I2), g2.free();
  }
  gravityScale() {
    return this.rawSet.rbGravityScale(this.handle);
  }
  setGravityScale(A2, I2) {
    this.rawSet.rbSetGravityScale(this.handle, A2, I2);
  }
  setRotation(A2, I2) {
    this.rawSet.rbSetRotation(this.handle, A2.x, A2.y, A2.z, A2.w, I2);
  }
  setAngvel(A2, I2) {
    let g2 = DA.intoRaw(A2);
    this.rawSet.rbSetAngvel(this.handle, g2, I2), g2.free();
  }
  setNextKinematicTranslation(A2) {
    this.rawSet.rbSetNextKinematicTranslation(this.handle, A2.x, A2.y, A2.z);
  }
  setNextKinematicRotation(A2) {
    this.rawSet.rbSetNextKinematicRotation(this.handle, A2.x, A2.y, A2.z, A2.w);
  }
  linvel() {
    return DA.fromRaw(this.rawSet.rbLinvel(this.handle));
  }
  angvel() {
    return DA.fromRaw(this.rawSet.rbAngvel(this.handle));
  }
  mass() {
    return this.rawSet.rbMass(this.handle);
  }
  effectiveInvMass() {
    return DA.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
  }
  invMass() {
    return this.rawSet.rbInvMass(this.handle);
  }
  localCom() {
    return DA.fromRaw(this.rawSet.rbLocalCom(this.handle));
  }
  worldCom() {
    return DA.fromRaw(this.rawSet.rbWorldCom(this.handle));
  }
  invPrincipalInertiaSqrt() {
    return DA.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
  }
  principalInertia() {
    return DA.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
  }
  principalInertiaLocalFrame() {
    return GA.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
  }
  effectiveWorldInvInertiaSqrt() {
    return kA.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle));
  }
  effectiveAngularInertia() {
    return kA.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
  }
  sleep() {
    this.rawSet.rbSleep(this.handle);
  }
  wakeUp() {
    this.rawSet.rbWakeUp(this.handle);
  }
  isCcdEnabled() {
    return this.rawSet.rbIsCcdEnabled(this.handle);
  }
  numColliders() {
    return this.rawSet.rbNumColliders(this.handle);
  }
  collider(A2) {
    return this.colliderSet.get(this.rawSet.rbCollider(this.handle, A2));
  }
  setEnabled(A2) {
    this.rawSet.rbSetEnabled(this.handle, A2);
  }
  isEnabled() {
    return this.rawSet.rbIsEnabled(this.handle);
  }
  bodyType() {
    return this.rawSet.rbBodyType(this.handle);
  }
  setBodyType(A2, I2) {
    return this.rawSet.rbSetBodyType(this.handle, A2, I2);
  }
  isSleeping() {
    return this.rawSet.rbIsSleeping(this.handle);
  }
  isMoving() {
    return this.rawSet.rbIsMoving(this.handle);
  }
  isFixed() {
    return this.rawSet.rbIsFixed(this.handle);
  }
  isKinematic() {
    return this.rawSet.rbIsKinematic(this.handle);
  }
  isDynamic() {
    return this.rawSet.rbIsDynamic(this.handle);
  }
  linearDamping() {
    return this.rawSet.rbLinearDamping(this.handle);
  }
  angularDamping() {
    return this.rawSet.rbAngularDamping(this.handle);
  }
  setLinearDamping(A2) {
    this.rawSet.rbSetLinearDamping(this.handle, A2);
  }
  recomputeMassPropertiesFromColliders() {
    this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
  }
  setAdditionalMass(A2, I2) {
    this.rawSet.rbSetAdditionalMass(this.handle, A2, I2);
  }
  setAdditionalMassProperties(A2, I2, g2, C2, B2) {
    let Q2 = DA.intoRaw(I2), E2 = DA.intoRaw(g2), i2 = GA.intoRaw(C2);
    this.rawSet.rbSetAdditionalMassProperties(this.handle, A2, Q2, E2, i2, B2), Q2.free(), E2.free(), i2.free();
  }
  setAngularDamping(A2) {
    this.rawSet.rbSetAngularDamping(this.handle, A2);
  }
  resetForces(A2) {
    this.rawSet.rbResetForces(this.handle, A2);
  }
  resetTorques(A2) {
    this.rawSet.rbResetTorques(this.handle, A2);
  }
  addForce(A2, I2) {
    const g2 = DA.intoRaw(A2);
    this.rawSet.rbAddForce(this.handle, g2, I2), g2.free();
  }
  applyImpulse(A2, I2) {
    const g2 = DA.intoRaw(A2);
    this.rawSet.rbApplyImpulse(this.handle, g2, I2), g2.free();
  }
  addTorque(A2, I2) {
    const g2 = DA.intoRaw(A2);
    this.rawSet.rbAddTorque(this.handle, g2, I2), g2.free();
  }
  applyTorqueImpulse(A2, I2) {
    const g2 = DA.intoRaw(A2);
    this.rawSet.rbApplyTorqueImpulse(this.handle, g2, I2), g2.free();
  }
  addForceAtPoint(A2, I2, g2) {
    const C2 = DA.intoRaw(A2), B2 = DA.intoRaw(I2);
    this.rawSet.rbAddForceAtPoint(this.handle, C2, B2, g2), C2.free(), B2.free();
  }
  applyImpulseAtPoint(A2, I2, g2) {
    const C2 = DA.intoRaw(A2), B2 = DA.intoRaw(I2);
    this.rawSet.rbApplyImpulseAtPoint(this.handle, C2, B2, g2), C2.free(), B2.free();
  }
};
var cA = class {
  constructor(A2) {
    this.enabled = true, this.status = A2, this.translation = DA.zeros(), this.rotation = GA.identity(), this.gravityScale = 1, this.linvel = DA.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = DA.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = DA.zeros(), this.principalAngularInertia = DA.zeros(), this.angularInertiaLocalFrame = GA.identity(), this.translationsEnabledZ = true, this.rotationsEnabledX = true, this.rotationsEnabledY = true, this.rotationsEnabledZ = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.dominanceGroup = 0;
  }
  static dynamic() {
    return new cA(SA.Dynamic);
  }
  static kinematicPositionBased() {
    return new cA(SA.KinematicPositionBased);
  }
  static kinematicVelocityBased() {
    return new cA(SA.KinematicVelocityBased);
  }
  static fixed() {
    return new cA(SA.Fixed);
  }
  static newDynamic() {
    return new cA(SA.Dynamic);
  }
  static newKinematicPositionBased() {
    return new cA(SA.KinematicPositionBased);
  }
  static newKinematicVelocityBased() {
    return new cA(SA.KinematicVelocityBased);
  }
  static newStatic() {
    return new cA(SA.Fixed);
  }
  setDominanceGroup(A2) {
    return this.dominanceGroup = A2, this;
  }
  setEnabled(A2) {
    return this.enabled = A2, this;
  }
  setTranslation(A2, I2, g2) {
    if ("number" != typeof A2 || "number" != typeof I2 || "number" != typeof g2)
      throw TypeError("The translation components must be numbers.");
    return this.translation = { x: A2, y: I2, z: g2 }, this;
  }
  setRotation(A2) {
    return GA.copy(this.rotation, A2), this;
  }
  setGravityScale(A2) {
    return this.gravityScale = A2, this;
  }
  setAdditionalMass(A2) {
    return this.mass = A2, this.massOnly = true, this;
  }
  setLinvel(A2, I2, g2) {
    if ("number" != typeof A2 || "number" != typeof I2 || "number" != typeof g2)
      throw TypeError("The linvel components must be numbers.");
    return this.linvel = { x: A2, y: I2, z: g2 }, this;
  }
  setAngvel(A2) {
    return DA.copy(this.angvel, A2), this;
  }
  setAdditionalMassProperties(A2, I2, g2, C2) {
    return this.mass = A2, DA.copy(this.centerOfMass, I2), DA.copy(this.principalAngularInertia, g2), GA.copy(this.angularInertiaLocalFrame, C2), this.massOnly = false, this;
  }
  enabledTranslations(A2, I2, g2) {
    return this.translationsEnabledX = A2, this.translationsEnabledY = I2, this.translationsEnabledZ = g2, this;
  }
  restrictTranslations(A2, I2, g2) {
    return this.enabledTranslations(A2, I2, g2);
  }
  lockTranslations() {
    return this.enabledTranslations(false, false, false);
  }
  enabledRotations(A2, I2, g2) {
    return this.rotationsEnabledX = A2, this.rotationsEnabledY = I2, this.rotationsEnabledZ = g2, this;
  }
  restrictRotations(A2, I2, g2) {
    return this.enabledRotations(A2, I2, g2);
  }
  lockRotations() {
    return this.restrictRotations(false, false, false);
  }
  setLinearDamping(A2) {
    return this.linearDamping = A2, this;
  }
  setAngularDamping(A2) {
    return this.angularDamping = A2, this;
  }
  setCanSleep(A2) {
    return this.canSleep = A2, this;
  }
  setSleeping(A2) {
    return this.sleeping = A2, this;
  }
  setCcdEnabled(A2) {
    return this.ccdEnabled = A2, this;
  }
  setUserData(A2) {
    return this.userData = A2, this;
  }
};
var YA = class {
  constructor() {
    this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array(), this.size = 0;
  }
  set(A2, I2) {
    let g2 = this.index(A2);
    for (; this.data.length <= g2; )
      this.data.push(null);
    null == this.data[g2] && (this.size += 1), this.data[g2] = I2;
  }
  len() {
    return this.size;
  }
  delete(A2) {
    let I2 = this.index(A2);
    I2 < this.data.length && (null != this.data[I2] && (this.size -= 1), this.data[I2] = null);
  }
  clear() {
    this.data = new Array();
  }
  get(A2) {
    let I2 = this.index(A2);
    return I2 < this.data.length ? this.data[I2] : null;
  }
  forEach(A2) {
    for (const I2 of this.data)
      null != I2 && A2(I2);
  }
  getAll() {
    return this.data.filter((A2) => null != A2);
  }
  index(A2) {
    return this.fconv[0] = A2, this.uconv[0];
  }
};
var LA = class {
  constructor(A2) {
    this.raw = A2 || new v(), this.map = new YA(), A2 && A2.forEachRigidBodyHandle((I2) => {
      this.map.set(I2, new sA(A2, null, I2));
    });
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
  }
  finalizeDeserialization(A2) {
    this.map.forEach((I2) => I2.finalizeDeserialization(A2));
  }
  createRigidBody(A2, I2) {
    let g2 = DA.intoRaw(I2.translation), C2 = GA.intoRaw(I2.rotation), B2 = DA.intoRaw(I2.linvel), Q2 = DA.intoRaw(I2.centerOfMass), E2 = DA.intoRaw(I2.angvel), i2 = DA.intoRaw(I2.principalAngularInertia), D2 = GA.intoRaw(I2.angularInertiaLocalFrame), o2 = this.raw.createRigidBody(I2.enabled, g2, C2, I2.gravityScale, I2.mass, I2.massOnly, Q2, B2, E2, i2, D2, I2.translationsEnabledX, I2.translationsEnabledY, I2.translationsEnabledZ, I2.rotationsEnabledX, I2.rotationsEnabledY, I2.rotationsEnabledZ, I2.linearDamping, I2.angularDamping, I2.status, I2.canSleep, I2.sleeping, I2.ccdEnabled, I2.dominanceGroup);
    g2.free(), C2.free(), B2.free(), Q2.free(), E2.free(), i2.free(), D2.free();
    const G2 = new sA(this.raw, A2, o2);
    return G2.userData = I2.userData, this.map.set(o2, G2), G2;
  }
  remove(A2, I2, g2, C2, B2) {
    for (let I3 = 0; I3 < this.raw.rbNumColliders(A2); I3 += 1)
      g2.unmap(this.raw.rbCollider(A2, I3));
    C2.forEachJointHandleAttachedToRigidBody(A2, (A3) => C2.unmap(A3)), B2.forEachJointHandleAttachedToRigidBody(A2, (A3) => B2.unmap(A3)), this.raw.remove(A2, I2.raw, g2.raw, C2.raw, B2.raw), this.map.delete(A2);
  }
  len() {
    return this.map.len();
  }
  contains(A2) {
    return null != this.get(A2);
  }
  get(A2) {
    return this.map.get(A2);
  }
  forEach(A2) {
    this.map.forEach(A2);
  }
  forEachActiveRigidBody(A2, I2) {
    A2.forEachActiveRigidBodyHandle((A3) => {
      I2(this.get(A3));
    });
  }
  getAll() {
    return this.map.getAll();
  }
};
var HA = class {
  constructor(A2) {
    this.raw = A2 || new Z();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  get dt() {
    return this.raw.dt;
  }
  get erp() {
    return this.raw.erp;
  }
  get allowedLinearError() {
    return this.raw.allowedLinearError;
  }
  get predictionDistance() {
    return this.raw.predictionDistance;
  }
  get maxVelocityIterations() {
    return this.raw.maxVelocityIterations;
  }
  get maxVelocityFrictionIterations() {
    return this.raw.maxVelocityFrictionIterations;
  }
  get maxStabilizationIterations() {
    return this.raw.maxStabilizationIterations;
  }
  get minIslandSize() {
    return this.raw.minIslandSize;
  }
  get maxCcdSubsteps() {
    return this.raw.maxCcdSubsteps;
  }
  set dt(A2) {
    this.raw.dt = A2;
  }
  set erp(A2) {
    this.raw.erp = A2;
  }
  set allowedLinearError(A2) {
    this.raw.allowedLinearError = A2;
  }
  set predictionDistance(A2) {
    this.raw.predictionDistance = A2;
  }
  set maxVelocityIterations(A2) {
    this.raw.maxVelocityIterations = A2;
  }
  set maxVelocityFrictionIterations(A2) {
    this.raw.maxVelocityFrictionIterations = A2;
  }
  set maxStabilizationIterations(A2) {
    this.raw.maxStabilizationIterations = A2;
  }
  set minIslandSize(A2) {
    this.raw.minIslandSize = A2;
  }
  set maxCcdSubsteps(A2) {
    this.raw.maxCcdSubsteps = A2;
  }
};
!function(A2) {
  A2[A2.Revolute = 0] = "Revolute", A2[A2.Fixed = 1] = "Fixed", A2[A2.Prismatic = 2] = "Prismatic", A2[A2.Spherical = 3] = "Spherical";
}(aA || (aA = {})), function(A2) {
  A2[A2.AccelerationBased = 0] = "AccelerationBased", A2[A2.ForceBased = 1] = "ForceBased";
}(MA || (MA = {}));
var lA = class {
  constructor(A2, I2, g2) {
    this.rawSet = A2, this.bodySet = I2, this.handle = g2;
  }
  static newTyped(A2, I2, g2) {
    switch (A2.jointType(g2)) {
      case aA.Revolute:
        return new rA(A2, I2, g2);
      case aA.Prismatic:
        return new eA(A2, I2, g2);
      case aA.Fixed:
        return new pA(A2, I2, g2);
      case aA.Spherical:
        return new dA(A2, I2, g2);
      default:
        return new lA(A2, I2, g2);
    }
  }
  finalizeDeserialization(A2) {
    this.bodySet = A2;
  }
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  body1() {
    return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
  }
  body2() {
    return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
  }
  type() {
    return this.rawSet.jointType(this.handle);
  }
  frameX1() {
    return GA.fromRaw(this.rawSet.jointFrameX1(this.handle));
  }
  frameX2() {
    return GA.fromRaw(this.rawSet.jointFrameX2(this.handle));
  }
  anchor1() {
    return DA.fromRaw(this.rawSet.jointAnchor1(this.handle));
  }
  anchor2() {
    return DA.fromRaw(this.rawSet.jointAnchor2(this.handle));
  }
  setAnchor1(A2) {
    const I2 = DA.intoRaw(A2);
    this.rawSet.jointSetAnchor1(this.handle, I2), I2.free();
  }
  setAnchor2(A2) {
    const I2 = DA.intoRaw(A2);
    this.rawSet.jointSetAnchor2(this.handle, I2), I2.free();
  }
  setContactsEnabled(A2) {
    this.rawSet.jointSetContactsEnabled(this.handle, A2);
  }
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
};
var tA = class extends lA {
  limitsEnabled() {
    return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
  }
  limitsMin() {
    return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
  }
  limitsMax() {
    return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
  }
  setLimits(A2, I2) {
    this.rawSet.jointSetLimits(this.handle, this.rawAxis(), A2, I2);
  }
  configureMotorModel(A2) {
    this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), A2);
  }
  configureMotorVelocity(A2, I2) {
    this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), A2, I2);
  }
  configureMotorPosition(A2, I2, g2) {
    this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), A2, I2, g2);
  }
  configureMotor(A2, I2, g2, C2) {
    this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), A2, I2, g2, C2);
  }
};
var pA = class extends lA {
};
var eA = class extends tA {
  rawAxis() {
    return c.X;
  }
};
var rA = class extends tA {
  rawAxis() {
    return c.AngX;
  }
};
var dA = class extends lA {
};
var TA = class {
  constructor() {
  }
  static fixed(A2, I2, g2, C2) {
    let B2 = new TA();
    return B2.anchor1 = A2, B2.anchor2 = g2, B2.frame1 = I2, B2.frame2 = C2, B2.jointType = aA.Fixed, B2;
  }
  static spherical(A2, I2) {
    let g2 = new TA();
    return g2.anchor1 = A2, g2.anchor2 = I2, g2.jointType = aA.Spherical, g2;
  }
  static prismatic(A2, I2, g2) {
    let C2 = new TA();
    return C2.anchor1 = A2, C2.anchor2 = I2, C2.axis = g2, C2.jointType = aA.Prismatic, C2;
  }
  static revolute(A2, I2, g2) {
    let C2 = new TA();
    return C2.anchor1 = A2, C2.anchor2 = I2, C2.axis = g2, C2.jointType = aA.Revolute, C2;
  }
  intoRaw() {
    let A2, I2, g2 = DA.intoRaw(this.anchor1), C2 = DA.intoRaw(this.anchor2), B2 = false, Q2 = 0, E2 = 0;
    switch (this.jointType) {
      case aA.Fixed:
        let i2 = GA.intoRaw(this.frame1), D2 = GA.intoRaw(this.frame2);
        I2 = O.fixed(g2, i2, C2, D2), i2.free(), D2.free();
        break;
      case aA.Prismatic:
        A2 = DA.intoRaw(this.axis), this.limitsEnabled && (B2 = true, Q2 = this.limits[0], E2 = this.limits[1]), I2 = O.prismatic(g2, C2, A2, B2, Q2, E2), A2.free();
        break;
      case aA.Spherical:
        I2 = O.spherical(g2, C2);
        break;
      case aA.Revolute:
        A2 = DA.intoRaw(this.axis), I2 = O.revolute(g2, C2, A2), A2.free();
    }
    return g2.free(), C2.free(), I2;
  }
};
var OA = class {
  constructor(A2) {
    this.raw = A2 || new n(), this.map = new YA(), A2 && A2.forEachJointHandle((I2) => {
      this.map.set(I2, lA.newTyped(A2, null, I2));
    });
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
  }
  finalizeDeserialization(A2) {
    this.map.forEach((I2) => I2.finalizeDeserialization(A2));
  }
  createJoint(A2, I2, g2, C2, B2) {
    const Q2 = I2.intoRaw(), E2 = this.raw.createJoint(Q2, g2, C2, B2);
    Q2.free();
    let i2 = lA.newTyped(this.raw, A2, E2);
    return this.map.set(E2, i2), i2;
  }
  remove(A2, I2) {
    this.raw.remove(A2, I2), this.unmap(A2);
  }
  forEachJointHandleAttachedToRigidBody(A2, I2) {
    this.raw.forEachJointAttachedToRigidBody(A2, I2);
  }
  unmap(A2) {
    this.map.delete(A2);
  }
  len() {
    return this.map.len();
  }
  contains(A2) {
    return null != this.get(A2);
  }
  get(A2) {
    return this.map.get(A2);
  }
  forEach(A2) {
    this.map.forEach(A2);
  }
  getAll() {
    return this.map.getAll();
  }
};
var nA = class {
  constructor(A2, I2) {
    this.rawSet = A2, this.handle = I2;
  }
  static newTyped(A2, I2) {
    switch (A2.jointType(I2)) {
      case aA.Revolute:
        return new jA(A2, I2);
      case aA.Prismatic:
        return new WA(A2, I2);
      case aA.Fixed:
        return new bA(A2, I2);
      case aA.Spherical:
        return new xA(A2, I2);
      default:
        return new nA(A2, I2);
    }
  }
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  setContactsEnabled(A2) {
    this.rawSet.jointSetContactsEnabled(this.handle, A2);
  }
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
};
var ZA = class extends nA {
};
var bA = class extends nA {
};
var WA = class extends ZA {
  rawAxis() {
    return c.X;
  }
};
var jA = class extends ZA {
  rawAxis() {
    return c.AngX;
  }
};
var xA = class extends nA {
};
var fA = class {
  constructor(A2) {
    this.raw = A2 || new j(), this.map = new YA(), A2 && A2.forEachJointHandle((A3) => {
      this.map.set(A3, nA.newTyped(this.raw, A3));
    });
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
  }
  createJoint(A2, I2, g2, C2) {
    const B2 = A2.intoRaw(), Q2 = this.raw.createJoint(B2, I2, g2, C2);
    B2.free();
    let E2 = nA.newTyped(this.raw, Q2);
    return this.map.set(Q2, E2), E2;
  }
  remove(A2, I2) {
    this.raw.remove(A2, I2), this.map.delete(A2);
  }
  unmap(A2) {
    this.map.delete(A2);
  }
  len() {
    return this.map.len();
  }
  contains(A2) {
    return null != this.get(A2);
  }
  get(A2) {
    return this.map.get(A2);
  }
  forEach(A2) {
    this.map.forEach(A2);
  }
  forEachJointHandleAttachedToRigidBody(A2, I2) {
    this.raw.forEachJointAttachedToRigidBody(A2, I2);
  }
  getAll() {
    return this.map.getAll();
  }
};
!function(A2) {
  A2[A2.Average = 0] = "Average", A2[A2.Min = 1] = "Min", A2[A2.Multiply = 2] = "Multiply", A2[A2.Max = 3] = "Max";
}(KA || (KA = {}));
var mA = class {
  constructor(A2) {
    this.raw = A2 || new L();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
};
var XA = class {
  constructor(A2) {
    this.raw = A2 || new b();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  forEachActiveRigidBodyHandle(A2) {
    this.raw.forEachActiveRigidBodyHandle(A2);
  }
};
var VA = class {
  constructor(A2) {
    this.raw = A2 || new Y();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
};
var PA = class {
  constructor(A2) {
    this.raw = A2 || new x(), this.tempManifold = new zA(null);
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  contactsWith(A2, I2) {
    this.raw.contacts_with(A2, I2);
  }
  intersectionsWith(A2, I2) {
    this.raw.intersections_with(A2, I2);
  }
  contactPair(A2, I2, g2) {
    const C2 = this.raw.contact_pair(A2, I2);
    if (C2) {
      const I3 = C2.collider1() != A2;
      let B2;
      for (B2 = 0; B2 < C2.numContactManifolds(); ++B2)
        this.tempManifold.raw = C2.contactManifold(B2), this.tempManifold.raw && g2(this.tempManifold, I3), this.tempManifold.free();
      C2.free();
    }
  }
  intersectionPair(A2, I2) {
    return this.raw.intersection_pair(A2, I2);
  }
};
var zA = class {
  constructor(A2) {
    this.raw = A2;
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  normal() {
    return DA.fromRaw(this.raw.normal());
  }
  localNormal1() {
    return DA.fromRaw(this.raw.local_n1());
  }
  localNormal2() {
    return DA.fromRaw(this.raw.local_n2());
  }
  subshape1() {
    return this.raw.subshape1();
  }
  subshape2() {
    return this.raw.subshape2();
  }
  numContacts() {
    return this.raw.num_contacts();
  }
  localContactPoint1(A2) {
    return DA.fromRaw(this.raw.contact_local_p1(A2));
  }
  localContactPoint2(A2) {
    return DA.fromRaw(this.raw.contact_local_p2(A2));
  }
  contactDist(A2) {
    return this.raw.contact_dist(A2);
  }
  contactFid1(A2) {
    return this.raw.contact_fid1(A2);
  }
  contactFid2(A2) {
    return this.raw.contact_fid2(A2);
  }
  contactImpulse(A2) {
    return this.raw.contact_impulse(A2);
  }
  contactTangentImpulseX(A2) {
    return this.raw.contact_tangent_impulse_x(A2);
  }
  contactTangentImpulseY(A2) {
    return this.raw.contact_tangent_impulse_y(A2);
  }
  numSolverContacts() {
    return this.raw.num_solver_contacts();
  }
  solverContactPoint(A2) {
    return DA.fromRaw(this.raw.solver_contact_point(A2));
  }
  solverContactDist(A2) {
    return this.raw.solver_contact_dist(A2);
  }
  solverContactFriction(A2) {
    return this.raw.solver_contact_friction(A2);
  }
  solverContactRestitution(A2) {
    return this.raw.solver_contact_restitution(A2);
  }
  solverContactTangentVelocity(A2) {
    return DA.fromRaw(this.raw.solver_contact_tangent_velocity(A2));
  }
};
var uA = class {
  constructor(A2, I2, g2, C2, B2) {
    this.distance = A2, this.point1 = I2, this.point2 = g2, this.normal1 = C2, this.normal2 = B2;
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    const I2 = new uA(A2.distance(), DA.fromRaw(A2.point1()), DA.fromRaw(A2.point2()), DA.fromRaw(A2.normal1()), DA.fromRaw(A2.normal2()));
    return A2.free(), I2;
  }
};
!function(A2) {
  A2[A2.Vertex = 0] = "Vertex", A2[A2.Edge = 1] = "Edge", A2[A2.Face = 2] = "Face", A2[A2.Unknown = 3] = "Unknown";
}(yA || (yA = {}));
var vA = class {
  constructor(A2, I2) {
    this.point = A2, this.isInside = I2;
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    const I2 = new vA(DA.fromRaw(A2.point()), A2.isInside());
    return A2.free(), I2;
  }
};
var _A = class {
  constructor(A2, I2, g2, C2, B2) {
    this.featureType = yA.Unknown, this.featureId = void 0, this.collider = A2, this.point = I2, this.isInside = g2, void 0 !== B2 && (this.featureId = B2), void 0 !== C2 && (this.featureType = C2);
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new _A(A2.get(I2.colliderHandle()), DA.fromRaw(I2.point()), I2.isInside(), I2.featureType(), I2.featureId());
    return I2.free(), g2;
  }
};
var $A = class {
  constructor(A2, I2) {
    this.origin = A2, this.dir = I2;
  }
  pointAt(A2) {
    return { x: this.origin.x + this.dir.x * A2, y: this.origin.y + this.dir.y * A2, z: this.origin.z + this.dir.z * A2 };
  }
};
var AI = class {
  constructor(A2, I2, g2, C2) {
    this.featureType = yA.Unknown, this.featureId = void 0, this.toi = A2, this.normal = I2, void 0 !== C2 && (this.featureId = C2), void 0 !== g2 && (this.featureType = g2);
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    const I2 = new AI(A2.toi(), DA.fromRaw(A2.normal()), A2.featureType(), A2.featureId());
    return A2.free(), I2;
  }
};
var II = class {
  constructor(A2, I2, g2, C2, B2) {
    this.featureType = yA.Unknown, this.featureId = void 0, this.collider = A2, this.toi = I2, this.normal = g2, void 0 !== B2 && (this.featureId = B2), void 0 !== C2 && (this.featureType = C2);
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new II(A2.get(I2.colliderHandle()), I2.toi(), DA.fromRaw(I2.normal()), I2.featureType(), I2.featureId());
    return I2.free(), g2;
  }
};
var gI = class {
  constructor(A2, I2) {
    this.collider = A2, this.toi = I2;
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new gI(A2.get(I2.colliderHandle()), I2.toi());
    return I2.free(), g2;
  }
};
var CI = class {
  constructor(A2, I2, g2, C2, B2) {
    this.toi = A2, this.witness1 = I2, this.witness2 = g2, this.normal1 = C2, this.normal2 = B2;
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new CI(I2.toi(), DA.fromRaw(I2.witness1()), DA.fromRaw(I2.witness2()), DA.fromRaw(I2.normal1()), DA.fromRaw(I2.normal2()));
    return I2.free(), g2;
  }
};
var BI = class extends CI {
  constructor(A2, I2, g2, C2, B2, Q2) {
    super(I2, g2, C2, B2, Q2), this.collider = A2;
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new BI(A2.get(I2.colliderHandle()), I2.toi(), DA.fromRaw(I2.witness1()), DA.fromRaw(I2.witness2()), DA.fromRaw(I2.normal1()), DA.fromRaw(I2.normal2()));
    return I2.free(), g2;
  }
};
var QI = class {
  static fromRaw(A2, I2) {
    const g2 = A2.coShapeType(I2);
    let C2, B2, Q2, E2, i2, D2, o2;
    switch (g2) {
      case JA.Ball:
        return new EI(A2.coRadius(I2));
      case JA.Cuboid:
        return C2 = A2.coHalfExtents(I2), new DI(C2.x, C2.y, C2.z);
      case JA.RoundCuboid:
        return C2 = A2.coHalfExtents(I2), B2 = A2.coRoundRadius(I2), new oI(C2.x, C2.y, C2.z, B2);
      case JA.Capsule:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), new GI(i2, D2);
      case JA.Segment:
        return Q2 = A2.coVertices(I2), new wI(DA.new(Q2[0], Q2[1], Q2[2]), DA.new(Q2[3], Q2[4], Q2[5]));
      case JA.Polyline:
        return Q2 = A2.coVertices(I2), E2 = A2.coIndices(I2), new aI(Q2, E2);
      case JA.Triangle:
        return Q2 = A2.coVertices(I2), new kI(DA.new(Q2[0], Q2[1], Q2[2]), DA.new(Q2[3], Q2[4], Q2[5]), DA.new(Q2[6], Q2[7], Q2[8]));
      case JA.RoundTriangle:
        return Q2 = A2.coVertices(I2), B2 = A2.coRoundRadius(I2), new SI(DA.new(Q2[0], Q2[1], Q2[2]), DA.new(Q2[3], Q2[4], Q2[5]), DA.new(Q2[6], Q2[7], Q2[8]), B2);
      case JA.HalfSpace:
        return o2 = DA.fromRaw(A2.coHalfspaceNormal(I2)), new iI(o2);
      case JA.TriMesh:
        return Q2 = A2.coVertices(I2), E2 = A2.coIndices(I2), new MI(Q2, E2);
      case JA.HeightField:
        const G2 = A2.coHeightfieldScale(I2), w2 = A2.coHeightfieldHeights(I2), k2 = A2.coHeightfieldNRows(I2), S2 = A2.coHeightfieldNCols(I2);
        return new JI(k2, S2, w2, G2);
      case JA.ConvexPolyhedron:
        return Q2 = A2.coVertices(I2), E2 = A2.coIndices(I2), new KI(Q2, E2);
      case JA.RoundConvexPolyhedron:
        return Q2 = A2.coVertices(I2), E2 = A2.coIndices(I2), B2 = A2.coRoundRadius(I2), new yI(Q2, E2, B2);
      case JA.Cylinder:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), new UI(i2, D2);
      case JA.RoundCylinder:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), B2 = A2.coRoundRadius(I2), new hI(i2, D2, B2);
      case JA.Cone:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), new NI(i2, D2);
      case JA.RoundCone:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), B2 = A2.coRoundRadius(I2), new FI(i2, D2, B2);
      default:
        throw new Error("unknown shape type: " + g2);
    }
  }
  castShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    let o2 = DA.intoRaw(A2), G2 = GA.intoRaw(I2), w2 = DA.intoRaw(g2), k2 = DA.intoRaw(B2), S2 = GA.intoRaw(Q2), a2 = DA.intoRaw(E2), M2 = this.intoRaw(), K2 = C2.intoRaw(), y2 = CI.fromRaw(null, M2.castShape(o2, G2, w2, K2, k2, S2, a2, i2, D2));
    return o2.free(), G2.free(), w2.free(), k2.free(), S2.free(), a2.free(), M2.free(), K2.free(), y2;
  }
  intersectsShape(A2, I2, g2, C2, B2) {
    let Q2 = DA.intoRaw(A2), E2 = GA.intoRaw(I2), i2 = DA.intoRaw(C2), D2 = GA.intoRaw(B2), o2 = this.intoRaw(), G2 = g2.intoRaw(), w2 = o2.intersectsShape(Q2, E2, G2, i2, D2);
    return Q2.free(), E2.free(), i2.free(), D2.free(), o2.free(), G2.free(), w2;
  }
  contactShape(A2, I2, g2, C2, B2, Q2) {
    let E2 = DA.intoRaw(A2), i2 = GA.intoRaw(I2), D2 = DA.intoRaw(C2), o2 = GA.intoRaw(B2), G2 = this.intoRaw(), w2 = g2.intoRaw(), k2 = uA.fromRaw(G2.contactShape(E2, i2, w2, D2, o2, Q2));
    return E2.free(), i2.free(), D2.free(), o2.free(), G2.free(), w2.free(), k2;
  }
  containsPoint(A2, I2, g2) {
    let C2 = DA.intoRaw(A2), B2 = GA.intoRaw(I2), Q2 = DA.intoRaw(g2), E2 = this.intoRaw(), i2 = E2.containsPoint(C2, B2, Q2);
    return C2.free(), B2.free(), Q2.free(), E2.free(), i2;
  }
  projectPoint(A2, I2, g2, C2) {
    let B2 = DA.intoRaw(A2), Q2 = GA.intoRaw(I2), E2 = DA.intoRaw(g2), i2 = this.intoRaw(), D2 = vA.fromRaw(i2.projectPoint(B2, Q2, E2, C2));
    return B2.free(), Q2.free(), E2.free(), i2.free(), D2;
  }
  intersectsRay(A2, I2, g2, C2) {
    let B2 = DA.intoRaw(I2), Q2 = GA.intoRaw(g2), E2 = DA.intoRaw(A2.origin), i2 = DA.intoRaw(A2.dir), D2 = this.intoRaw(), o2 = D2.intersectsRay(B2, Q2, E2, i2, C2);
    return B2.free(), Q2.free(), E2.free(), i2.free(), D2.free(), o2;
  }
  castRay(A2, I2, g2, C2, B2) {
    let Q2 = DA.intoRaw(I2), E2 = GA.intoRaw(g2), i2 = DA.intoRaw(A2.origin), D2 = DA.intoRaw(A2.dir), o2 = this.intoRaw(), G2 = o2.castRay(Q2, E2, i2, D2, C2, B2);
    return Q2.free(), E2.free(), i2.free(), D2.free(), o2.free(), G2;
  }
  castRayAndGetNormal(A2, I2, g2, C2, B2) {
    let Q2 = DA.intoRaw(I2), E2 = GA.intoRaw(g2), i2 = DA.intoRaw(A2.origin), D2 = DA.intoRaw(A2.dir), o2 = this.intoRaw(), G2 = AI.fromRaw(o2.castRayAndGetNormal(Q2, E2, i2, D2, C2, B2));
    return Q2.free(), E2.free(), i2.free(), D2.free(), o2.free(), G2;
  }
};
!function(A2) {
  A2[A2.Ball = 0] = "Ball", A2[A2.Cuboid = 1] = "Cuboid", A2[A2.Capsule = 2] = "Capsule", A2[A2.Segment = 3] = "Segment", A2[A2.Polyline = 4] = "Polyline", A2[A2.Triangle = 5] = "Triangle", A2[A2.TriMesh = 6] = "TriMesh", A2[A2.HeightField = 7] = "HeightField", A2[A2.ConvexPolyhedron = 9] = "ConvexPolyhedron", A2[A2.Cylinder = 10] = "Cylinder", A2[A2.Cone = 11] = "Cone", A2[A2.RoundCuboid = 12] = "RoundCuboid", A2[A2.RoundTriangle = 13] = "RoundTriangle", A2[A2.RoundCylinder = 14] = "RoundCylinder", A2[A2.RoundCone = 15] = "RoundCone", A2[A2.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", A2[A2.HalfSpace = 17] = "HalfSpace";
}(JA || (JA = {}));
var EI = class extends QI {
  constructor(A2) {
    super(), this.type = JA.Ball, this.radius = A2;
  }
  intoRaw() {
    return IA.ball(this.radius);
  }
};
var iI = class extends QI {
  constructor(A2) {
    super(), this.type = JA.HalfSpace, this.normal = A2;
  }
  intoRaw() {
    let A2 = DA.intoRaw(this.normal), I2 = IA.halfspace(A2);
    return A2.free(), I2;
  }
};
var DI = class extends QI {
  constructor(A2, I2, g2) {
    super(), this.type = JA.Cuboid, this.halfExtents = DA.new(A2, I2, g2);
  }
  intoRaw() {
    return IA.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
  }
};
var oI = class extends QI {
  constructor(A2, I2, g2, C2) {
    super(), this.type = JA.RoundCuboid, this.halfExtents = DA.new(A2, I2, g2), this.borderRadius = C2;
  }
  intoRaw() {
    return IA.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
  }
};
var GI = class extends QI {
  constructor(A2, I2) {
    super(), this.type = JA.Capsule, this.halfHeight = A2, this.radius = I2;
  }
  intoRaw() {
    return IA.capsule(this.halfHeight, this.radius);
  }
};
var wI = class extends QI {
  constructor(A2, I2) {
    super(), this.type = JA.Segment, this.a = A2, this.b = I2;
  }
  intoRaw() {
    let A2 = DA.intoRaw(this.a), I2 = DA.intoRaw(this.b), g2 = IA.segment(A2, I2);
    return A2.free(), I2.free(), g2;
  }
};
var kI = class extends QI {
  constructor(A2, I2, g2) {
    super(), this.type = JA.Triangle, this.a = A2, this.b = I2, this.c = g2;
  }
  intoRaw() {
    let A2 = DA.intoRaw(this.a), I2 = DA.intoRaw(this.b), g2 = DA.intoRaw(this.c), C2 = IA.triangle(A2, I2, g2);
    return A2.free(), I2.free(), g2.free(), C2;
  }
};
var SI = class extends QI {
  constructor(A2, I2, g2, C2) {
    super(), this.type = JA.RoundTriangle, this.a = A2, this.b = I2, this.c = g2, this.borderRadius = C2;
  }
  intoRaw() {
    let A2 = DA.intoRaw(this.a), I2 = DA.intoRaw(this.b), g2 = DA.intoRaw(this.c), C2 = IA.roundTriangle(A2, I2, g2, this.borderRadius);
    return A2.free(), I2.free(), g2.free(), C2;
  }
};
var aI = class extends QI {
  constructor(A2, I2) {
    super(), this.type = JA.Polyline, this.vertices = A2, this.indices = null != I2 ? I2 : new Uint32Array(0);
  }
  intoRaw() {
    return IA.polyline(this.vertices, this.indices);
  }
};
var MI = class extends QI {
  constructor(A2, I2) {
    super(), this.type = JA.TriMesh, this.vertices = A2, this.indices = I2;
  }
  intoRaw() {
    return IA.trimesh(this.vertices, this.indices);
  }
};
var KI = class extends QI {
  constructor(A2, I2) {
    super(), this.type = JA.ConvexPolyhedron, this.vertices = A2, this.indices = I2;
  }
  intoRaw() {
    return this.indices ? IA.convexMesh(this.vertices, this.indices) : IA.convexHull(this.vertices);
  }
};
var yI = class extends QI {
  constructor(A2, I2, g2) {
    super(), this.type = JA.RoundConvexPolyhedron, this.vertices = A2, this.indices = I2, this.borderRadius = g2;
  }
  intoRaw() {
    return this.indices ? IA.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : IA.roundConvexHull(this.vertices, this.borderRadius);
  }
};
var JI = class extends QI {
  constructor(A2, I2, g2, C2) {
    super(), this.type = JA.HeightField, this.nrows = A2, this.ncols = I2, this.heights = g2, this.scale = C2;
  }
  intoRaw() {
    let A2 = DA.intoRaw(this.scale), I2 = IA.heightfield(this.nrows, this.ncols, this.heights, A2);
    return A2.free(), I2;
  }
};
var UI = class extends QI {
  constructor(A2, I2) {
    super(), this.type = JA.Cylinder, this.halfHeight = A2, this.radius = I2;
  }
  intoRaw() {
    return IA.cylinder(this.halfHeight, this.radius);
  }
};
var hI = class extends QI {
  constructor(A2, I2, g2) {
    super(), this.type = JA.RoundCylinder, this.borderRadius = g2, this.halfHeight = A2, this.radius = I2;
  }
  intoRaw() {
    return IA.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
  }
};
var NI = class extends QI {
  constructor(A2, I2) {
    super(), this.type = JA.Cone, this.halfHeight = A2, this.radius = I2;
  }
  intoRaw() {
    return IA.cone(this.halfHeight, this.radius);
  }
};
var FI = class extends QI {
  constructor(A2, I2, g2) {
    super(), this.type = JA.RoundCone, this.halfHeight = A2, this.radius = I2, this.borderRadius = g2;
  }
  intoRaw() {
    return IA.roundCone(this.halfHeight, this.radius, this.borderRadius);
  }
};
!function(A2) {
  A2[A2.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", A2[A2.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", A2[A2.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", A2[A2.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", A2[A2.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", A2[A2.FIXED_FIXED = 32] = "FIXED_FIXED", A2[A2.DEFAULT = 15] = "DEFAULT", A2[A2.ALL = 60943] = "ALL";
}(UA || (UA = {}));
var qI = class {
  constructor(A2, I2, g2, C2) {
    this.colliderSet = A2, this.handle = I2, this._parent = g2, this._shape = C2;
  }
  finalizeDeserialization(A2) {
    null != this.handle && (this._parent = A2.get(this.colliderSet.raw.coParent(this.handle)));
  }
  ensureShapeIsCached() {
    this._shape || (this._shape = QI.fromRaw(this.colliderSet.raw, this.handle));
  }
  get shape() {
    return this.ensureShapeIsCached(), this._shape;
  }
  isValid() {
    return this.colliderSet.raw.contains(this.handle);
  }
  translation() {
    return DA.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
  }
  rotation() {
    return GA.fromRaw(this.colliderSet.raw.coRotation(this.handle));
  }
  isSensor() {
    return this.colliderSet.raw.coIsSensor(this.handle);
  }
  setSensor(A2) {
    this.colliderSet.raw.coSetSensor(this.handle, A2);
  }
  setShape(A2) {
    let I2 = A2.intoRaw();
    this.colliderSet.raw.coSetShape(this.handle, I2), I2.free(), this._shape = A2;
  }
  setEnabled(A2) {
    this.colliderSet.raw.coSetEnabled(this.handle, A2);
  }
  isEnabled() {
    return this.colliderSet.raw.coIsEnabled(this.handle);
  }
  setRestitution(A2) {
    this.colliderSet.raw.coSetRestitution(this.handle, A2);
  }
  setFriction(A2) {
    this.colliderSet.raw.coSetFriction(this.handle, A2);
  }
  frictionCombineRule() {
    return this.colliderSet.raw.coFrictionCombineRule(this.handle);
  }
  setFrictionCombineRule(A2) {
    this.colliderSet.raw.coSetFrictionCombineRule(this.handle, A2);
  }
  restitutionCombineRule() {
    return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
  }
  setRestitutionCombineRule(A2) {
    this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, A2);
  }
  setCollisionGroups(A2) {
    this.colliderSet.raw.coSetCollisionGroups(this.handle, A2);
  }
  setSolverGroups(A2) {
    this.colliderSet.raw.coSetSolverGroups(this.handle, A2);
  }
  activeHooks() {
    return this.colliderSet.raw.coActiveHooks(this.handle);
  }
  setActiveHooks(A2) {
    this.colliderSet.raw.coSetActiveHooks(this.handle, A2);
  }
  activeEvents() {
    return this.colliderSet.raw.coActiveEvents(this.handle);
  }
  setActiveEvents(A2) {
    this.colliderSet.raw.coSetActiveEvents(this.handle, A2);
  }
  activeCollisionTypes() {
    return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
  }
  setContactForceEventThreshold(A2) {
    return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, A2);
  }
  contactForceEventThreshold() {
    return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
  }
  setActiveCollisionTypes(A2) {
    this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, A2);
  }
  setDensity(A2) {
    this.colliderSet.raw.coSetDensity(this.handle, A2);
  }
  setMass(A2) {
    this.colliderSet.raw.coSetMass(this.handle, A2);
  }
  setMassProperties(A2, I2, g2, C2) {
    let B2 = DA.intoRaw(I2), Q2 = DA.intoRaw(g2), E2 = GA.intoRaw(C2);
    this.colliderSet.raw.coSetMassProperties(this.handle, A2, B2, Q2, E2), B2.free(), Q2.free(), E2.free();
  }
  setTranslation(A2) {
    this.colliderSet.raw.coSetTranslation(this.handle, A2.x, A2.y, A2.z);
  }
  setTranslationWrtParent(A2) {
    this.colliderSet.raw.coSetTranslationWrtParent(this.handle, A2.x, A2.y, A2.z);
  }
  setRotation(A2) {
    this.colliderSet.raw.coSetRotation(this.handle, A2.x, A2.y, A2.z, A2.w);
  }
  setRotationWrtParent(A2) {
    this.colliderSet.raw.coSetRotationWrtParent(this.handle, A2.x, A2.y, A2.z, A2.w);
  }
  shapeType() {
    return this.colliderSet.raw.coShapeType(this.handle);
  }
  halfExtents() {
    return DA.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
  }
  setHalfExtents(A2) {
    const I2 = DA.intoRaw(A2);
    this.colliderSet.raw.coSetHalfExtents(this.handle, I2);
  }
  radius() {
    return this.colliderSet.raw.coRadius(this.handle);
  }
  setRadius(A2) {
    this.colliderSet.raw.coSetRadius(this.handle, A2);
  }
  roundRadius() {
    return this.colliderSet.raw.coRoundRadius(this.handle);
  }
  setRoundRadius(A2) {
    this.colliderSet.raw.coSetRoundRadius(this.handle, A2);
  }
  halfHeight() {
    return this.colliderSet.raw.coHalfHeight(this.handle);
  }
  setHalfHeight(A2) {
    this.colliderSet.raw.coSetHalfHeight(this.handle, A2);
  }
  vertices() {
    return this.colliderSet.raw.coVertices(this.handle);
  }
  indices() {
    return this.colliderSet.raw.coIndices(this.handle);
  }
  heightfieldHeights() {
    return this.colliderSet.raw.coHeightfieldHeights(this.handle);
  }
  heightfieldScale() {
    let A2 = this.colliderSet.raw.coHeightfieldScale(this.handle);
    return DA.fromRaw(A2);
  }
  heightfieldNRows() {
    return this.colliderSet.raw.coHeightfieldNRows(this.handle);
  }
  heightfieldNCols() {
    return this.colliderSet.raw.coHeightfieldNCols(this.handle);
  }
  parent() {
    return this._parent;
  }
  friction() {
    return this.colliderSet.raw.coFriction(this.handle);
  }
  restitution() {
    return this.colliderSet.raw.coRestitution(this.handle);
  }
  density() {
    return this.colliderSet.raw.coDensity(this.handle);
  }
  mass() {
    return this.colliderSet.raw.coMass(this.handle);
  }
  volume() {
    return this.colliderSet.raw.coVolume(this.handle);
  }
  collisionGroups() {
    return this.colliderSet.raw.coCollisionGroups(this.handle);
  }
  solverGroups() {
    return this.colliderSet.raw.coSolverGroups(this.handle);
  }
  containsPoint(A2) {
    let I2 = DA.intoRaw(A2), g2 = this.colliderSet.raw.coContainsPoint(this.handle, I2);
    return I2.free(), g2;
  }
  projectPoint(A2, I2) {
    let g2 = DA.intoRaw(A2), C2 = vA.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, g2, I2));
    return g2.free(), C2;
  }
  intersectsRay(A2, I2) {
    let g2 = DA.intoRaw(A2.origin), C2 = DA.intoRaw(A2.dir), B2 = this.colliderSet.raw.coIntersectsRay(this.handle, g2, C2, I2);
    return g2.free(), C2.free(), B2;
  }
  castShape(A2, I2, g2, C2, B2, Q2, E2) {
    let i2 = DA.intoRaw(A2), D2 = DA.intoRaw(g2), o2 = GA.intoRaw(C2), G2 = DA.intoRaw(B2), w2 = I2.intoRaw(), k2 = CI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, i2, w2, D2, o2, G2, Q2, E2));
    return i2.free(), D2.free(), o2.free(), G2.free(), w2.free(), k2;
  }
  castCollider(A2, I2, g2, C2, B2) {
    let Q2 = DA.intoRaw(A2), E2 = DA.intoRaw(g2), i2 = BI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, Q2, I2.handle, E2, C2, B2));
    return Q2.free(), E2.free(), i2;
  }
  intersectsShape(A2, I2, g2) {
    let C2 = DA.intoRaw(I2), B2 = GA.intoRaw(g2), Q2 = A2.intoRaw(), E2 = this.colliderSet.raw.coIntersectsShape(this.handle, Q2, C2, B2);
    return C2.free(), B2.free(), Q2.free(), E2;
  }
  contactShape(A2, I2, g2, C2) {
    let B2 = DA.intoRaw(I2), Q2 = GA.intoRaw(g2), E2 = A2.intoRaw(), i2 = uA.fromRaw(this.colliderSet.raw.coContactShape(this.handle, E2, B2, Q2, C2));
    return B2.free(), Q2.free(), E2.free(), i2;
  }
  contactCollider(A2, I2) {
    return uA.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, A2.handle, I2));
  }
  castRay(A2, I2, g2) {
    let C2 = DA.intoRaw(A2.origin), B2 = DA.intoRaw(A2.dir), Q2 = this.colliderSet.raw.coCastRay(this.handle, C2, B2, I2, g2);
    return C2.free(), B2.free(), Q2;
  }
  castRayAndGetNormal(A2, I2, g2) {
    let C2 = DA.intoRaw(A2.origin), B2 = DA.intoRaw(A2.dir), Q2 = AI.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, C2, B2, I2, g2));
    return C2.free(), B2.free(), Q2;
  }
};
!function(A2) {
  A2[A2.Density = 0] = "Density", A2[A2.Mass = 1] = "Mass", A2[A2.MassProps = 2] = "MassProps";
}(hA || (hA = {}));
var RI = class {
  constructor(A2) {
    this.enabled = true, this.shape = A2, this.massPropsMode = hA.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = GA.identity(), this.translation = DA.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = KA.Average, this.restitutionCombineRule = KA.Average, this.activeCollisionTypes = UA.DEFAULT, this.activeEvents = 0, this.activeHooks = 0, this.mass = 0, this.centerOfMass = DA.zeros(), this.contactForceEventThreshold = 0, this.principalAngularInertia = DA.zeros(), this.angularInertiaLocalFrame = GA.identity();
  }
  static ball(A2) {
    const I2 = new EI(A2);
    return new RI(I2);
  }
  static capsule(A2, I2) {
    const g2 = new GI(A2, I2);
    return new RI(g2);
  }
  static segment(A2, I2) {
    const g2 = new wI(A2, I2);
    return new RI(g2);
  }
  static triangle(A2, I2, g2) {
    const C2 = new kI(A2, I2, g2);
    return new RI(C2);
  }
  static roundTriangle(A2, I2, g2, C2) {
    const B2 = new SI(A2, I2, g2, C2);
    return new RI(B2);
  }
  static polyline(A2, I2) {
    const g2 = new aI(A2, I2);
    return new RI(g2);
  }
  static trimesh(A2, I2) {
    const g2 = new MI(A2, I2);
    return new RI(g2);
  }
  static cuboid(A2, I2, g2) {
    const C2 = new DI(A2, I2, g2);
    return new RI(C2);
  }
  static roundCuboid(A2, I2, g2, C2) {
    const B2 = new oI(A2, I2, g2, C2);
    return new RI(B2);
  }
  static heightfield(A2, I2, g2, C2) {
    const B2 = new JI(A2, I2, g2, C2);
    return new RI(B2);
  }
  static cylinder(A2, I2) {
    const g2 = new UI(A2, I2);
    return new RI(g2);
  }
  static roundCylinder(A2, I2, g2) {
    const C2 = new hI(A2, I2, g2);
    return new RI(C2);
  }
  static cone(A2, I2) {
    const g2 = new NI(A2, I2);
    return new RI(g2);
  }
  static roundCone(A2, I2, g2) {
    const C2 = new FI(A2, I2, g2);
    return new RI(C2);
  }
  static convexHull(A2) {
    const I2 = new KI(A2, null);
    return new RI(I2);
  }
  static convexMesh(A2, I2) {
    const g2 = new KI(A2, I2);
    return new RI(g2);
  }
  static roundConvexHull(A2, I2) {
    const g2 = new yI(A2, null, I2);
    return new RI(g2);
  }
  static roundConvexMesh(A2, I2, g2) {
    const C2 = new yI(A2, I2, g2);
    return new RI(C2);
  }
  setTranslation(A2, I2, g2) {
    if ("number" != typeof A2 || "number" != typeof I2 || "number" != typeof g2)
      throw TypeError("The translation components must be numbers.");
    return this.translation = { x: A2, y: I2, z: g2 }, this;
  }
  setRotation(A2) {
    return GA.copy(this.rotation, A2), this;
  }
  setSensor(A2) {
    return this.isSensor = A2, this;
  }
  setEnabled(A2) {
    return this.enabled = A2, this;
  }
  setDensity(A2) {
    return this.massPropsMode = hA.Density, this.density = A2, this;
  }
  setMass(A2) {
    return this.massPropsMode = hA.Mass, this.mass = A2, this;
  }
  setMassProperties(A2, I2, g2, C2) {
    return this.massPropsMode = hA.MassProps, this.mass = A2, DA.copy(this.centerOfMass, I2), DA.copy(this.principalAngularInertia, g2), GA.copy(this.angularInertiaLocalFrame, C2), this;
  }
  setRestitution(A2) {
    return this.restitution = A2, this;
  }
  setFriction(A2) {
    return this.friction = A2, this;
  }
  setFrictionCombineRule(A2) {
    return this.frictionCombineRule = A2, this;
  }
  setRestitutionCombineRule(A2) {
    return this.restitutionCombineRule = A2, this;
  }
  setCollisionGroups(A2) {
    return this.collisionGroups = A2, this;
  }
  setSolverGroups(A2) {
    return this.solverGroups = A2, this;
  }
  setActiveHooks(A2) {
    return this.activeHooks = A2, this;
  }
  setActiveEvents(A2) {
    return this.activeEvents = A2, this;
  }
  setActiveCollisionTypes(A2) {
    return this.activeCollisionTypes = A2, this;
  }
  setContactForceEventThreshold(A2) {
    return this.contactForceEventThreshold = A2, this;
  }
};
var sI = class {
  constructor(A2) {
    this.raw = A2 || new l(), this.map = new YA(), A2 && A2.forEachColliderHandle((A3) => {
      this.map.set(A3, new qI(this, A3, null));
    });
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
  }
  castClosure(A2) {
    return (I2) => A2 ? A2(this.get(I2)) : void 0;
  }
  finalizeDeserialization(A2) {
    this.map.forEach((I2) => I2.finalizeDeserialization(A2));
  }
  createCollider(A2, I2, g2) {
    let C2 = null != g2 && null != g2;
    if (C2 && isNaN(g2))
      throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
    let B2 = I2.shape.intoRaw(), Q2 = DA.intoRaw(I2.translation), E2 = GA.intoRaw(I2.rotation), i2 = DA.intoRaw(I2.centerOfMass), D2 = DA.intoRaw(I2.principalAngularInertia), o2 = GA.intoRaw(I2.angularInertiaLocalFrame), G2 = this.raw.createCollider(I2.enabled, B2, Q2, E2, I2.massPropsMode, I2.mass, i2, D2, o2, I2.density, I2.friction, I2.restitution, I2.frictionCombineRule, I2.restitutionCombineRule, I2.isSensor, I2.collisionGroups, I2.solverGroups, I2.activeCollisionTypes, I2.activeHooks, I2.activeEvents, I2.contactForceEventThreshold, C2, C2 ? g2 : 0, A2.raw);
    B2.free(), Q2.free(), E2.free(), i2.free(), D2.free(), o2.free();
    let w2 = C2 ? A2.get(g2) : null, k2 = new qI(this, G2, w2, I2.shape);
    return this.map.set(G2, k2), k2;
  }
  remove(A2, I2, g2, C2) {
    this.raw.remove(A2, I2.raw, g2.raw, C2), this.unmap(A2);
  }
  unmap(A2) {
    this.map.delete(A2);
  }
  get(A2) {
    return this.map.get(A2);
  }
  len() {
    return this.map.len();
  }
  contains(A2) {
    return null != this.get(A2);
  }
  forEach(A2) {
    this.map.forEach(A2);
  }
  getAll() {
    return this.map.getAll();
  }
};
var cI = class {
  constructor(A2) {
    this.raw = A2 || new f();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  step(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2, w2) {
    let k2 = DA.intoRaw(A2);
    G2 ? this.raw.stepWithEvents(k2, I2.raw, g2.raw, C2.raw, B2.raw, Q2.raw, E2.raw, i2.raw, D2.raw, o2.raw, G2.raw, w2, w2 ? w2.filterContactPair : null, w2 ? w2.filterIntersectionPair : null) : this.raw.step(k2, I2.raw, g2.raw, C2.raw, B2.raw, Q2.raw, E2.raw, i2.raw, D2.raw, o2.raw), k2.free();
  }
};
!function(A2) {
  A2[A2.EXCLUDE_FIXED = 1] = "EXCLUDE_FIXED", A2[A2.EXCLUDE_KINEMATIC = 2] = "EXCLUDE_KINEMATIC", A2[A2.EXCLUDE_DYNAMIC = 4] = "EXCLUDE_DYNAMIC", A2[A2.EXCLUDE_SENSORS = 8] = "EXCLUDE_SENSORS", A2[A2.EXCLUDE_SOLIDS = 16] = "EXCLUDE_SOLIDS", A2[A2.ONLY_DYNAMIC = 3] = "ONLY_DYNAMIC", A2[A2.ONLY_KINEMATIC = 5] = "ONLY_KINEMATIC", A2[A2.ONLY_FIXED = 6] = "ONLY_FIXED";
}(NA || (NA = {}));
var YI = class {
  constructor(A2) {
    this.raw = A2 || new V();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  update(A2, I2) {
    this.raw.update(A2.raw, I2.raw);
  }
  castRay(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
    let G2 = DA.intoRaw(g2.origin), w2 = DA.intoRaw(g2.dir), k2 = gI.fromRaw(I2, this.raw.castRay(A2.raw, I2.raw, G2, w2, C2, B2, Q2, E2, i2, D2, o2));
    return G2.free(), w2.free(), k2;
  }
  castRayAndGetNormal(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
    let G2 = DA.intoRaw(g2.origin), w2 = DA.intoRaw(g2.dir), k2 = II.fromRaw(I2, this.raw.castRayAndGetNormal(A2.raw, I2.raw, G2, w2, C2, B2, Q2, E2, i2, D2, o2));
    return G2.free(), w2.free(), k2;
  }
  intersectionsWithRay(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2) {
    let w2 = DA.intoRaw(g2.origin), k2 = DA.intoRaw(g2.dir);
    this.raw.intersectionsWithRay(A2.raw, I2.raw, w2, k2, C2, B2, (A3) => Q2(II.fromRaw(I2, A3)), E2, i2, D2, o2, G2), w2.free(), k2.free();
  }
  intersectionWithShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
    let G2 = DA.intoRaw(g2), w2 = GA.intoRaw(C2), k2 = B2.intoRaw(), S2 = this.raw.intersectionWithShape(A2.raw, I2.raw, G2, w2, k2, Q2, E2, i2, D2, o2);
    return G2.free(), w2.free(), k2.free(), S2;
  }
  projectPoint(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    let o2 = DA.intoRaw(g2), G2 = _A.fromRaw(I2, this.raw.projectPoint(A2.raw, I2.raw, o2, C2, B2, Q2, E2, i2, D2));
    return o2.free(), G2;
  }
  projectPointAndGetFeature(A2, I2, g2, C2, B2, Q2, E2, i2) {
    let D2 = DA.intoRaw(g2), o2 = _A.fromRaw(I2, this.raw.projectPointAndGetFeature(A2.raw, I2.raw, D2, C2, B2, Q2, E2, i2));
    return D2.free(), o2;
  }
  intersectionsWithPoint(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    let o2 = DA.intoRaw(g2);
    this.raw.intersectionsWithPoint(A2.raw, I2.raw, o2, C2, B2, Q2, E2, i2, D2), o2.free();
  }
  castShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2, w2, k2) {
    let S2 = DA.intoRaw(g2), a2 = GA.intoRaw(C2), M2 = DA.intoRaw(B2), K2 = Q2.intoRaw(), y2 = BI.fromRaw(I2, this.raw.castShape(A2.raw, I2.raw, S2, a2, M2, K2, E2, i2, D2, o2, G2, w2, k2));
    return S2.free(), a2.free(), M2.free(), K2.free(), y2;
  }
  intersectionsWithShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2) {
    let w2 = DA.intoRaw(g2), k2 = GA.intoRaw(C2), S2 = B2.intoRaw();
    this.raw.intersectionsWithShape(A2.raw, I2.raw, w2, k2, S2, Q2, E2, i2, D2, o2, G2), w2.free(), k2.free(), S2.free();
  }
  collidersWithAabbIntersectingAabb(A2, I2, g2) {
    let C2 = DA.intoRaw(A2), B2 = DA.intoRaw(I2);
    this.raw.collidersWithAabbIntersectingAabb(C2, B2, g2), C2.free(), B2.free();
  }
};
var LI = class {
  constructor(A2) {
    this.raw = A2 || new AA();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  serializeAll(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    let o2 = DA.intoRaw(A2);
    const G2 = this.raw.serializeAll(o2, I2.raw, g2.raw, C2.raw, B2.raw, Q2.raw, E2.raw, i2.raw, D2.raw);
    return o2.free(), G2;
  }
  deserializeAll(A2) {
    return eI.fromRaw(this.raw.deserializeAll(A2));
  }
};
var HI = class {
  constructor(A2, I2) {
    this.vertices = A2, this.colors = I2;
  }
};
var lI = class {
  constructor(A2) {
    this.raw = A2 || new r();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
  }
  render(A2, I2, g2, C2, B2) {
    this.raw.render(A2.raw, I2.raw, g2.raw, C2.raw, B2.raw), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
  }
};
var tI = class {
};
var pI = class {
  constructor(A2, I2, g2, C2, B2) {
    this.params = I2, this.bodies = g2, this.colliders = C2, this.queries = B2, this.raw = new W(A2), this.rawCharacterCollision = new H(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
  }
  free() {
    this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
  }
  up() {
    return this.raw.up();
  }
  setUp(A2) {
    let I2 = DA.intoRaw(A2);
    return this.raw.setUp(I2);
  }
  applyImpulsesToDynamicBodies() {
    return this._applyImpulsesToDynamicBodies;
  }
  setApplyImpulsesToDynamicBodies(A2) {
    this._applyImpulsesToDynamicBodies = A2;
  }
  characterMass() {
    return this._characterMass;
  }
  setCharacterMass(A2) {
    this._characterMass = A2;
  }
  offset() {
    return this.raw.offset();
  }
  setOffset(A2) {
    this.raw.setOffset(A2);
  }
  slideEnabled() {
    return this.raw.slideEnabled();
  }
  setSlideEnabled(A2) {
    this.raw.setSlideEnabled(A2);
  }
  autostepMaxHeight() {
    return this.raw.autostepMaxHeight();
  }
  autostepMinWidth() {
    return this.raw.autostepMinWidth();
  }
  autostepIncludesDynamicBodies() {
    return this.raw.autostepIncludesDynamicBodies();
  }
  autostepEnabled() {
    return this.raw.autostepEnabled();
  }
  enableAutostep(A2, I2, g2) {
    this.raw.enableAutostep(A2, I2, g2);
  }
  disableAutostep() {
    return this.raw.disableAutostep();
  }
  maxSlopeClimbAngle() {
    return this.raw.maxSlopeClimbAngle();
  }
  setMaxSlopeClimbAngle(A2) {
    this.raw.setMaxSlopeClimbAngle(A2);
  }
  minSlopeSlideAngle() {
    return this.raw.minSlopeSlideAngle();
  }
  setMinSlopeSlideAngle(A2) {
    this.raw.setMinSlopeSlideAngle(A2);
  }
  snapToGroundDistance() {
    return this.raw.snapToGroundDistance();
  }
  enableSnapToGround(A2) {
    this.raw.enableSnapToGround(A2);
  }
  disableSnapToGround() {
    this.raw.disableSnapToGround();
  }
  snapToGroundEnabled() {
    return this.raw.snapToGroundEnabled();
  }
  computeColliderMovement(A2, I2, g2, C2, B2) {
    let Q2 = DA.intoRaw(I2);
    this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, A2.handle, Q2, this._applyImpulsesToDynamicBodies, this._characterMass, g2, C2, this.colliders.castClosure(B2)), Q2.free();
  }
  computedMovement() {
    return DA.fromRaw(this.raw.computedMovement());
  }
  computedGrounded() {
    return this.raw.computedGrounded();
  }
  numComputedCollisions() {
    return this.raw.numComputedCollisions();
  }
  computedCollision(A2, I2) {
    if (this.raw.computedCollision(A2, this.rawCharacterCollision)) {
      let A3 = this.rawCharacterCollision;
      return (I2 = null != I2 ? I2 : new tI()).translationApplied = DA.fromRaw(A3.translationApplied()), I2.translationRemaining = DA.fromRaw(A3.translationRemaining()), I2.toi = A3.toi(), I2.witness1 = DA.fromRaw(A3.worldWitness1()), I2.witness2 = DA.fromRaw(A3.worldWitness2()), I2.normal1 = DA.fromRaw(A3.worldNormal1()), I2.normal2 = DA.fromRaw(A3.worldNormal2()), I2.collider = this.colliders.get(A3.handle()), I2;
    }
    return null;
  }
};
var eI = class {
  constructor(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2, w2, k2, S2) {
    this.gravity = A2, this.integrationParameters = new HA(I2), this.islands = new XA(g2), this.broadPhase = new VA(C2), this.narrowPhase = new PA(B2), this.bodies = new LA(Q2), this.colliders = new sI(E2), this.impulseJoints = new OA(i2), this.multibodyJoints = new fA(D2), this.ccdSolver = new mA(o2), this.queryPipeline = new YI(G2), this.physicsPipeline = new cI(w2), this.serializationPipeline = new LI(k2), this.debugRenderPipeline = new lI(S2), this.characterControllers = /* @__PURE__ */ new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
  }
  free() {
    this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.queryPipeline.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((A2) => A2.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.queryPipeline = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0;
  }
  static fromRaw(A2) {
    return A2 ? new eI(DA.fromRaw(A2.takeGravity()), A2.takeIntegrationParameters(), A2.takeIslandManager(), A2.takeBroadPhase(), A2.takeNarrowPhase(), A2.takeBodies(), A2.takeColliders(), A2.takeImpulseJoints(), A2.takeMultibodyJoints()) : null;
  }
  takeSnapshot() {
    return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
  }
  static restoreSnapshot(A2) {
    return new LI().deserializeAll(A2);
  }
  debugRender() {
    return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase), new HI(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
  }
  step(A2, I2) {
    this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, A2, I2), this.queryPipeline.update(this.bodies, this.colliders);
  }
  propagateModifiedBodyPositionsToColliders() {
    this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
  }
  updateSceneQueries() {
    this.propagateModifiedBodyPositionsToColliders(), this.queryPipeline.update(this.bodies, this.colliders);
  }
  get timestep() {
    return this.integrationParameters.dt;
  }
  set timestep(A2) {
    this.integrationParameters.dt = A2;
  }
  get maxVelocityIterations() {
    return this.integrationParameters.maxVelocityIterations;
  }
  set maxVelocityIterations(A2) {
    this.integrationParameters.maxVelocityIterations = A2;
  }
  get maxVelocityFrictionIterations() {
    return this.integrationParameters.maxVelocityFrictionIterations;
  }
  set maxVelocityFrictionIterations(A2) {
    this.integrationParameters.maxVelocityFrictionIterations = A2;
  }
  get maxStabilizationIterations() {
    return this.integrationParameters.maxStabilizationIterations;
  }
  set maxStabilizationIterations(A2) {
    this.integrationParameters.maxStabilizationIterations = A2;
  }
  createRigidBody(A2) {
    return this.bodies.createRigidBody(this.colliders, A2);
  }
  createCharacterController(A2) {
    let I2 = new pI(A2, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
    return this.characterControllers.add(I2), I2;
  }
  removeCharacterController(A2) {
    this.characterControllers.delete(A2), A2.free();
  }
  createCollider(A2, I2) {
    let g2 = I2 ? I2.handle : void 0;
    return this.colliders.createCollider(this.bodies, A2, g2);
  }
  createImpulseJoint(A2, I2, g2, C2) {
    return this.impulseJoints.createJoint(this.bodies, A2, I2.handle, g2.handle, C2);
  }
  createMultibodyJoint(A2, I2, g2, C2) {
    return this.multibodyJoints.createJoint(A2, I2.handle, g2.handle, C2);
  }
  getRigidBody(A2) {
    return this.bodies.get(A2);
  }
  getCollider(A2) {
    return this.colliders.get(A2);
  }
  getImpulseJoint(A2) {
    return this.impulseJoints.get(A2);
  }
  getMultibodyJoint(A2) {
    return this.multibodyJoints.get(A2);
  }
  removeRigidBody(A2) {
    this.bodies && this.bodies.remove(A2.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
  }
  removeCollider(A2, I2) {
    this.colliders && this.colliders.remove(A2.handle, this.islands, this.bodies, I2);
  }
  removeImpulseJoint(A2, I2) {
    this.impulseJoints && this.impulseJoints.remove(A2.handle, I2);
  }
  removeMultibodyJoint(A2, I2) {
    this.impulseJoints && this.multibodyJoints.remove(A2.handle, I2);
  }
  forEachCollider(A2) {
    this.colliders.forEach(A2);
  }
  forEachRigidBody(A2) {
    this.bodies.forEach(A2);
  }
  forEachActiveRigidBody(A2) {
    this.bodies.forEachActiveRigidBody(this.islands, A2);
  }
  castRay(A2, I2, g2, C2, B2, Q2, E2, i2) {
    return this.queryPipeline.castRay(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2 ? Q2.handle : null, E2 ? E2.handle : null, this.colliders.castClosure(i2));
  }
  castRayAndGetNormal(A2, I2, g2, C2, B2, Q2, E2, i2) {
    return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2 ? Q2.handle : null, E2 ? E2.handle : null, this.colliders.castClosure(i2));
  }
  intersectionsWithRay(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2, E2 ? E2.handle : null, i2 ? i2.handle : null, this.colliders.castClosure(D2));
  }
  intersectionWithShape(A2, I2, g2, C2, B2, Q2, E2, i2) {
    let D2 = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2 ? Q2.handle : null, E2 ? E2.handle : null, this.colliders.castClosure(i2));
    return null != D2 ? this.colliders.get(D2) : null;
  }
  projectPoint(A2, I2, g2, C2, B2, Q2, E2) {
    return this.queryPipeline.projectPoint(this.bodies, this.colliders, A2, I2, g2, C2, B2 ? B2.handle : null, Q2 ? Q2.handle : null, this.colliders.castClosure(E2));
  }
  projectPointAndGetFeature(A2, I2, g2, C2, B2, Q2) {
    return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, A2, I2, g2, C2 ? C2.handle : null, B2 ? B2.handle : null, this.colliders.castClosure(Q2));
  }
  intersectionsWithPoint(A2, I2, g2, C2, B2, Q2, E2) {
    this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, A2, this.colliders.castClosure(I2), g2, C2, B2 ? B2.handle : null, Q2 ? Q2.handle : null, this.colliders.castClosure(E2));
  }
  castShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2) {
    return this.queryPipeline.castShape(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2, E2, i2, D2 ? D2.handle : null, o2 ? o2.handle : null, this.colliders.castClosure(G2));
  }
  intersectionsWithShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, A2, I2, g2, this.colliders.castClosure(C2), B2, Q2, E2 ? E2.handle : null, i2 ? i2.handle : null, this.colliders.castClosure(D2));
  }
  collidersWithAabbIntersectingAabb(A2, I2, g2) {
    this.queryPipeline.collidersWithAabbIntersectingAabb(A2, I2, this.colliders.castClosure(g2));
  }
  contactsWith(A2, I2) {
    this.narrowPhase.contactsWith(A2.handle, this.colliders.castClosure(I2));
  }
  intersectionsWith(A2, I2) {
    this.narrowPhase.intersectionsWith(A2.handle, this.colliders.castClosure(I2));
  }
  contactPair(A2, I2, g2) {
    this.narrowPhase.contactPair(A2.handle, I2.handle, g2);
  }
  intersectionPair(A2, I2) {
    return this.narrowPhase.intersectionPair(A2.handle, I2.handle);
  }
};
!function(A2) {
  A2[A2.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", A2[A2.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
}(FA || (FA = {}));
var rI = class {
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  collider1() {
    return this.raw.collider1();
  }
  collider2() {
    return this.raw.collider2();
  }
  totalForce() {
    return DA.fromRaw(this.raw.total_force());
  }
  totalForceMagnitude() {
    return this.raw.total_force_magnitude();
  }
  maxForceDirection() {
    return DA.fromRaw(this.raw.max_force_direction());
  }
  maxForceMagnitude() {
    return this.raw.max_force_magnitude();
  }
};
var dI = class {
  constructor(A2, I2) {
    this.raw = I2 || new T(A2);
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  drainCollisionEvents(A2) {
    this.raw.drainCollisionEvents(A2);
  }
  drainContactForceEvents(A2) {
    let I2 = new rI();
    this.raw.drainContactForceEvents((g2) => {
      I2.raw = g2, A2(I2), I2.free();
    });
  }
  clear() {
    this.raw.clear();
  }
};
function TI(A2, I2, g2, C2) {
  return new (g2 || (g2 = Promise))(function(B2, Q2) {
    function E2(A3) {
      try {
        D2(C2.next(A3));
      } catch (A4) {
        Q2(A4);
      }
    }
    function i2(A3) {
      try {
        D2(C2.throw(A3));
      } catch (A4) {
        Q2(A4);
      }
    }
    function D2(A3) {
      var I3;
      A3.done ? B2(A3.value) : (I3 = A3.value, I3 instanceof g2 ? I3 : new g2(function(A4) {
        A4(I3);
      })).then(E2, i2);
    }
    D2((C2 = C2.apply(A2, I2 || [])).next());
  });
}
!function(A2) {
  A2[A2.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", A2[A2.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
}(qA || (qA = {})), function(A2) {
  A2[A2.EMPTY = 0] = "EMPTY", A2[A2.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
}(RA || (RA = {}));
for (OI = { byteLength: function(A2) {
  var I2 = fI(A2), g2 = I2[0], C2 = I2[1];
  return 3 * (g2 + C2) / 4 - C2;
}, toByteArray: function(A2) {
  var I2, g2, C2 = fI(A2), B2 = C2[0], Q2 = C2[1], E2 = new bI(function(A3, I3, g3) {
    return 3 * (I3 + g3) / 4 - g3;
  }(0, B2, Q2)), i2 = 0, D2 = Q2 > 0 ? B2 - 4 : B2;
  for (g2 = 0; g2 < D2; g2 += 4)
    I2 = ZI[A2.charCodeAt(g2)] << 18 | ZI[A2.charCodeAt(g2 + 1)] << 12 | ZI[A2.charCodeAt(g2 + 2)] << 6 | ZI[A2.charCodeAt(g2 + 3)], E2[i2++] = I2 >> 16 & 255, E2[i2++] = I2 >> 8 & 255, E2[i2++] = 255 & I2;
  2 === Q2 && (I2 = ZI[A2.charCodeAt(g2)] << 2 | ZI[A2.charCodeAt(g2 + 1)] >> 4, E2[i2++] = 255 & I2);
  1 === Q2 && (I2 = ZI[A2.charCodeAt(g2)] << 10 | ZI[A2.charCodeAt(g2 + 1)] << 4 | ZI[A2.charCodeAt(g2 + 2)] >> 2, E2[i2++] = I2 >> 8 & 255, E2[i2++] = 255 & I2);
  return E2;
}, fromByteArray: function(A2) {
  for (var I2, g2 = A2.length, C2 = g2 % 3, B2 = [], Q2 = 16383, E2 = 0, i2 = g2 - C2; E2 < i2; E2 += Q2)
    B2.push(mI(A2, E2, E2 + Q2 > i2 ? i2 : E2 + Q2));
  1 === C2 ? (I2 = A2[g2 - 1], B2.push(nI[I2 >> 2] + nI[I2 << 4 & 63] + "==")) : 2 === C2 && (I2 = (A2[g2 - 2] << 8) + A2[g2 - 1], B2.push(nI[I2 >> 10] + nI[I2 >> 4 & 63] + nI[I2 << 2 & 63] + "="));
  return B2.join("");
} }, nI = [], ZI = [], bI = "undefined" != typeof Uint8Array ? Uint8Array : Array, WI = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", jI = 0, xI = WI.length; jI < xI; ++jI)
  nI[jI] = WI[jI], ZI[WI.charCodeAt(jI)] = jI;
var OI;
var nI;
var ZI;
var bI;
var WI;
var jI;
var xI;
function fI(A2) {
  var I2 = A2.length;
  if (I2 % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var g2 = A2.indexOf("=");
  return -1 === g2 && (g2 = I2), [g2, g2 === I2 ? 0 : 4 - g2 % 4];
}
function mI(A2, I2, g2) {
  for (var C2, B2, Q2 = [], E2 = I2; E2 < g2; E2 += 3)
    C2 = (A2[E2] << 16 & 16711680) + (A2[E2 + 1] << 8 & 65280) + (255 & A2[E2 + 2]), Q2.push(nI[(B2 = C2) >> 18 & 63] + nI[B2 >> 12 & 63] + nI[B2 >> 6 & 63] + nI[63 & B2]);
  return Q2.join("");
}
function XI() {
  return TI(this, void 0, void 0, function* () {
  });
}
function VI() {
  return function() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.version(C2);
      var I2 = G()[C2 / 4 + 0], g2 = G()[C2 / 4 + 1];
      return S(I2, g2);
    } finally {
      A.__wbindgen_add_to_stack_pointer(16), A.__wbindgen_free(I2, g2);
    }
  }();
}
ZI["-".charCodeAt(0)] = 62, ZI["_".charCodeAt(0)] = 63;
var PI = Object.freeze({ __proto__: null, version: VI, Vector3: iA, VectorOps: DA, Quaternion: oA, RotationOps: GA, SdpMatrix3: wA, SdpMatrix3Ops: kA, get RigidBodyType() {
  return SA;
}, RigidBody: sA, RigidBodyDesc: cA, RigidBodySet: LA, IntegrationParameters: HA, get JointType() {
  return aA;
}, get MotorModel() {
  return MA;
}, ImpulseJoint: lA, UnitImpulseJoint: tA, FixedImpulseJoint: pA, PrismaticImpulseJoint: eA, RevoluteImpulseJoint: rA, SphericalImpulseJoint: dA, JointData: TA, ImpulseJointSet: OA, MultibodyJoint: nA, UnitMultibodyJoint: ZA, FixedMultibodyJoint: bA, PrismaticMultibodyJoint: WA, RevoluteMultibodyJoint: jA, SphericalMultibodyJoint: xA, MultibodyJointSet: fA, get CoefficientCombineRule() {
  return KA;
}, CCDSolver: mA, IslandManager: XA, BroadPhase: VA, NarrowPhase: PA, TempContactManifold: zA, Shape: QI, get ShapeType() {
  return JA;
}, Ball: EI, HalfSpace: iI, Cuboid: DI, RoundCuboid: oI, Capsule: GI, Segment: wI, Triangle: kI, RoundTriangle: SI, Polyline: aI, TriMesh: MI, ConvexPolyhedron: KI, RoundConvexPolyhedron: yI, Heightfield: JI, Cylinder: UI, RoundCylinder: hI, Cone: NI, RoundCone: FI, get ActiveCollisionTypes() {
  return UA;
}, Collider: qI, get MassPropsMode() {
  return hA;
}, ColliderDesc: RI, ColliderSet: sI, get FeatureType() {
  return yA;
}, Ray: $A, RayIntersection: AI, RayColliderIntersection: II, RayColliderToi: gI, PointProjection: vA, PointColliderProjection: _A, ShapeTOI: CI, ShapeColliderTOI: BI, ShapeContact: uA, World: eI, PhysicsPipeline: cI, SerializationPipeline: LI, get ActiveEvents() {
  return FA;
}, TempContactForceEvent: rI, EventQueue: dI, get ActiveHooks() {
  return qA;
}, get SolverFlags() {
  return RA;
}, DebugRenderBuffers: HI, DebugRenderPipeline: lI, get QueryFilterFlags() {
  return NA;
}, QueryPipeline: YI, init: XI, CharacterCollision: tI, KinematicCharacterController: pI });
export {
  UA as ActiveCollisionTypes,
  FA as ActiveEvents,
  qA as ActiveHooks,
  EI as Ball,
  VA as BroadPhase,
  mA as CCDSolver,
  GI as Capsule,
  tI as CharacterCollision,
  KA as CoefficientCombineRule,
  qI as Collider,
  RI as ColliderDesc,
  sI as ColliderSet,
  NI as Cone,
  KI as ConvexPolyhedron,
  DI as Cuboid,
  UI as Cylinder,
  HI as DebugRenderBuffers,
  lI as DebugRenderPipeline,
  dI as EventQueue,
  yA as FeatureType,
  pA as FixedImpulseJoint,
  bA as FixedMultibodyJoint,
  iI as HalfSpace,
  JI as Heightfield,
  lA as ImpulseJoint,
  OA as ImpulseJointSet,
  HA as IntegrationParameters,
  XA as IslandManager,
  TA as JointData,
  aA as JointType,
  pI as KinematicCharacterController,
  hA as MassPropsMode,
  MA as MotorModel,
  nA as MultibodyJoint,
  fA as MultibodyJointSet,
  PA as NarrowPhase,
  cI as PhysicsPipeline,
  _A as PointColliderProjection,
  vA as PointProjection,
  aI as Polyline,
  eA as PrismaticImpulseJoint,
  WA as PrismaticMultibodyJoint,
  oA as Quaternion,
  NA as QueryFilterFlags,
  YI as QueryPipeline,
  $A as Ray,
  II as RayColliderIntersection,
  gI as RayColliderToi,
  AI as RayIntersection,
  rA as RevoluteImpulseJoint,
  jA as RevoluteMultibodyJoint,
  sA as RigidBody,
  cA as RigidBodyDesc,
  LA as RigidBodySet,
  SA as RigidBodyType,
  GA as RotationOps,
  FI as RoundCone,
  yI as RoundConvexPolyhedron,
  oI as RoundCuboid,
  hI as RoundCylinder,
  SI as RoundTriangle,
  wA as SdpMatrix3,
  kA as SdpMatrix3Ops,
  wI as Segment,
  LI as SerializationPipeline,
  QI as Shape,
  BI as ShapeColliderTOI,
  uA as ShapeContact,
  CI as ShapeTOI,
  JA as ShapeType,
  RA as SolverFlags,
  dA as SphericalImpulseJoint,
  xA as SphericalMultibodyJoint,
  rI as TempContactForceEvent,
  zA as TempContactManifold,
  MI as TriMesh,
  kI as Triangle,
  tA as UnitImpulseJoint,
  ZA as UnitMultibodyJoint,
  iA as Vector3,
  DA as VectorOps,
  eI as World,
  PI as default,
  XI as init,
  VI as version
};
//# sourceMappingURL=physics-EXAKFRBK.js.map