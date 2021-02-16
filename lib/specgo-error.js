"use strict";

// An error class used to identify errors from this program as opposed to ones bubbling from elsewhere.
module.exports = class SpecgoError extends Error {};
module.exports.prototype.name = "SpecgoError";
