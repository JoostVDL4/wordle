import wordBank from "./words.txt";
export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];
 
export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;
    await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
        const wordArr = result
            .split("\n")
            .map(word => word.replace("\r", "").trim())
            .filter(word => word);  
            todaysWord = wordArr[Math.floor(Math.random() * wordArr.length )]
        wordSet = new Set(wordArr);
    });

    return { wordSet, todaysWord };
};
