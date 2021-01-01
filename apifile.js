 
    var r = n(2),
        o = n.n(r),
        i = n(5),
        a = n.n(i),
        u = n(174),
        c = n.n(u),
        s = n(20),
        l = "https://api.pedulilindungi.id",
        f = {
            Authorization: "Bearer ".concat(Object(s.c)())
        },
        d = {
            Authorization: "Basic dGVsa29tOmRhMWMyNWQ4LTM3YzgtNDFiMS1hZmUyLTQyZGQ0ODI1YmZlYQ=="
        },
        p = {
            Authorization: "Basic VkFLU0lOOjVmYmNkNjc4NDE2ZjVkOTUzMzFlODJhNA=="
        },
        h = function(e, t, n, r) {
            return new Promise((function(o, i) {
                c.a[t](e, n, r).then((function(e) {
                    return o(e.data)
                })).catch((function(e) {
                    var t = {
                        code: 500,
                        status: "error",
                        message: "Failed to fetch data. Please contact developer."
                    };
                    e.response && e.response.data ? i(e.response.data) : i(t)
                }))
            }))
        },
        v = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h("".concat(l, "/vaccine/v1/dashboard/nik/status"), "post", t, {
                                headers: p
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        m = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h("".concat(l, "/users/v1/login"), "post", t, {
                                headers: d
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        y = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h("".concat(l, "/users/v2/verify"), "post", t, {
                                headers: d
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        b = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h("".concat(l, "/users/v1/register"), "post", t, {
                                headers: d
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        g = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h("".concat(l, "/users/v1/profile/email/verify"), "post", t, {
                                headers: f
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        w = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h("".concat(l, "/users/v1/profile/update"), "post", t, {
                                headers: f
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        x = function() {
            var e = a()(o.a.mark((function e() {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h("".concat(l, "/vaccine/v1/ticket"), "get", {
                                headers: f
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        E = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h("".concat(l, "/vaccine/v1/ticket?vaccineId=").concat(t), "get", {
                                headers: f
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        O = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h("".concat(l, "/vaccine/v1/certificates-detail?vaccineId=").concat(t), "get", {
                                headers: f
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        k = function() {
            var e = a()(o.a.mark((function e() {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h("".concat(l, "/vaccine/v1/ticket"), "get", {
                                headers: f
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        S = function() {
            var e = a()(o.a.mark((function e(t, n) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", h("".concat(l, "/vaccine/v2/hospital?longitude=").concat(n, "&latitude=").concat(t, "&size=999&page=1"), "get", {
                                headers: f
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }(),
        j = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", h("".concat(l, "/vaccine/v1/reference?nik=").concat(t), "get", {
                                headers: f
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        P = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", h("".concat(l, "/vaccine/v2/register"), "post", t, {
                                headers: f
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        T = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", h("".concat(l, "/vaccine/v1/reject"), "post", t, {
                                headers: f
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        C = function() {
            var e = a()(o.a.mark((function e(t, n) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", h("".concat(l, "/vaccine/v1/verify"), "post", t, {
                                headers: null != n && n.Authorization ? n : f
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }(),
        _ = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", h("".concat(l, "/vaccine/v1/hospital/schedules-period?hospitalId=").concat(t), "get", {
                                headers: f
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        R = function() {
            var e = a()(o.a.mark((function e() {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", h("".concat(l, "/users/v2/provinces"), "get", {
                                headers: d
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        N = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", h("".concat(l, "/users/v1/cities?provinceId=").concat(t), "get", {
                                headers: d
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        A = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", h("".concat(l, "/users/v1/districts?cityId=").concat(t), "get", {
                                headers: d
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        I = function() {
            var e = a()(o.a.mark((function e() {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h("".concat(l, "/vaccine/v1/symptoms"), "get", {
                                headers: f
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        F = function() {
            var e = a()(o.a.mark((function e(t) {
                return o.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", h("".concat(l, "/vaccine/v1/symptoms"), "post", t, {
                                headers: f
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
