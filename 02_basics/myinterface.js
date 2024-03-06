"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sameer = {
    dbId: 1223,
    email: "s@s.com",
    userId: 213,
    githubToken: "github",
    startTrial: function () {
        return "trial started";
    },
    getCoupon: function (name, value) {
        return value;
    },
};
var sam = {
    dbId: 2121,
    email: "sam@gmail.com",
    userId: 2211,
    githubToken: "git",
    startTrial: function () {
        return "admin";
    },
    getCoupon: function (name, value) {
        return 50;
    },
    role: "admin",
};
console.log(sam);
