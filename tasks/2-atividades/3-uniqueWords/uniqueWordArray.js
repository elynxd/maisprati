function extractDuplicateWords(str) {
    const transformStr = str.toLowerCase().replace(/[^\p{L}\s]/gu, " ");
    const words = transformStr.split(/\s+/).filter((word) => word !== "");
    let duplicates = [];
    let wordCount = {};

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (wordCount[word] > 1 && !duplicates.includes(word)) {
            duplicates.push(word);
        }
    }
    return {
        duplicatesWords: duplicates,
        wordCounts: wordCount,
    };
}

const strWithDuplicates =
    "Olá olá mundo mundo";
const strResult = extractDuplicateWords(strWithDuplicates);

console.log("Original string: ", strWithDuplicates);
console.log("Duplicate words: ", strResult.duplicatesWords);
console.log("Word counts: ", strResult.wordCounts);
