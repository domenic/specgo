#!/usr/bin/env node
"use strict";

const open = require("open");
const { getURL } = require("./specgo.js");

main().catch(e => {
  if (e.name === "SpecgoError") {
    console.error(e.message);
  } else {
    console.error(e.stack);
  }

  process.exit(1);
});

async function main() {
  const url = await getURL(process.argv[2]);
  await open(url);
}
