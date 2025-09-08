const PromptSync = require("prompt-sync")();

const prompt = PromptSync("Enter a new Word: ");

const translate = (word) => {
    const vowels = ["a", "e", "i", "o", "u", "y"];

    const letters = word.split("");
    const indexletters = letters.findIndex((letter) => vowels.includes(letter));

    if (indexletters == -1) return word;

    let prefix = word.slice(0, indexletters);
    let stem = word.slice(indexletters);

    return stem + prefix + "ay";
};

console.log(prompt + " -> " + translate(prompt));
