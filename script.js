const morse = {
    "A": "--..", "B": "-.--", "C": "-..-", "D": ".--",
    "E": "...-", "F": "..-.", "G": "-", "H": "...",
    "I": ".-.", "J": "--.-", "K": ".--.", "L": "---",
    "M": "-.", "N": "--", "O": ".-..", "P": "-.-",
    "Q": ".---", "R": "..", "S": "....", "T": "--.",
    "U": "..-.", "V": ".", "W": "-..", "X": "-.-.",
    "Y": "-...", "Z": ".-",

    "0": "-----", "1": ".----", "2": "..---", "3": "...--",
    "4": "....-", "5": ".....", "6": "-....", "7": "--...",
    "8": "---..", "9": "----."
};


const reverseMorse = Object.fromEntries(
    Object.entries(morse).map(([k, v]) => [v, k])
);

function encode() {
    const text = document.getElementById("input").value.toUpperCase();
    const result = text.split("").map(ch => {
        if (morse[ch]) return morse[ch];
        if (ch === " ") return "/";
        return "";
    }).join(" ");
    document.getElementById("output").value = result;
}

function decode() {
    const code = document.getElementById("input").value.trim();
    const result = code.split(" ").map(symbol => {
        if (symbol === "/") return " ";
        return reverseMorse[symbol] || "";
    }).join("");
    document.getElementById("output").value = result;
}