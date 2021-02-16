"use strict";

const { getURL } = require("../lib/specgo.js");
const SpecgoError = require("../lib/specgo-error.js");

// TODO: we should stub out fetch() with saved results and make these proper unit tests.
// Then we can do two integration tests (which test cli.js with mocked open() but real fetch()).

describe("Basics", () => {
  testURL("html", "https://html.spec.whatwg.org/multipage/");
  testURL("mixed-content", "https://w3c.github.io/webappsec-mixed-content/");
  testURL("rfc7234", "https://httpwg.org/specs/rfc7234.html");
});

describe("Aliases", () => {
  testURL("whatwg-html", "https://html.spec.whatwg.org/multipage/");
  testURL("mix", "https://w3c.github.io/webappsec-mixed-content/");
});

describe("Casing doesn't matter", () => {
  testURL("HTML", "https://html.spec.whatwg.org/multipage/");
  testURL("HtMl", "https://html.spec.whatwg.org/multipage/");
  testURL("MiX", "https://w3c.github.io/webappsec-mixed-content/");
  testURL("MIXED-content", "https://w3c.github.io/webappsec-mixed-content/");
  testURL("RFC7234", "https://httpwg.org/specs/rfc7234.html");
});

describe("Failure cases", () => {
  testURLFailure("html,mix");
  testURLFailure("asdf");
});

function testURL(input, expectedURL) {
  test(input, async () => {
    expect(await getURL(input)).toEqual(expectedURL);
  });
}

function testURLFailure(input) {
  test(input, () => {
    return expect(getURL(input)).rejects.toThrow(SpecgoError);
  });
}
