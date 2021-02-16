"use strict";
const fetch = require("node-fetch");
const SpecgoError = require("./specgo-error.js");

exports.getURL = async input => {
  if (input.includes(",")) {
    throw new SpecgoError("Spec name is invalid (it contains a comma)");
  }

  const res = await fetch(`https://api.specref.org/bibrefs?refs=${input}`);
  if (!res.ok) {
    throw new SpecgoError("Received a non-OK status code from the Specref API");
  }

  const body = await res.json();

  const keys = Object.keys(body);
  if (keys.length === 0) {
    throw new SpecgoError(`No spec with name "${input}" found in the Specref database.`);
  }

  // Assume the first is correct. The others always seem to be different casings.
  const spec = body[keys[0]];

  if (spec.aliasOf) {
    return exports.getURL(spec.aliasOf);
  }

  return spec.edDraft ?? spec.href;
};
