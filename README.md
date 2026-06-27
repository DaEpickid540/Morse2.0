# Morse 2.0 — Inverted Alphabet Morse Encoder/Decoder

A Morse code encoder/decoder with a twist: all letters are inverted before encoding (A↔Z, B↔Y, C↔X, etc.). Built for Boy Scouts Signs, Signals & Codes Merit Badge requirement 10.

## How It Works

Standard Morse maps A→`.-`, B→`-...`, etc. Morse 2.0 flips the alphabet first, so A maps to Z's Morse pattern, B maps to Y's, and so on. Numbers encode normally.

**Example:** `A` → inverted to `Z` → encoded as `--..`

## Usage

Open `index.html` in a browser.

- **Encode:** Type text, click **Encode to Morse 2.0** — outputs the inverted-alphabet Morse sequence
- **Decode:** Paste a Morse 2.0 sequence, click **Decode** — outputs the original text

Words are separated by `/` in Morse notation.

## Files

- `index.html` — UI with input/output textareas and encode/decode buttons
- `script.js` — Morse lookup tables and encode/decode logic
