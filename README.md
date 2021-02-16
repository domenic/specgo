# Specgo

Specgo is a command-line utility for opening web specifications (such as those from the WHATWG, W3C, or IETF) in your web browser.

Once you install it, using

```bash
npm install -g specgo
```

you can use it like so:

```bash
specgo html          # opens https://html.spec.whatwg.org/multipage/

specgo mix           # opens https://w3c.github.io/webappsec-mixed-content/
specgo mixed-content # ditto

specgo rfc7234       # opens https://httpwg.org/specs/rfc7234.html
```

## Acknowledgments

This tool is largely a frontend to [Specref](https://www.specref.org/), by [@tobie](https://github.com/tobie).
