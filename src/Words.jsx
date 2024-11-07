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
    await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
        const wordArr = result
            .split("\n")
            .map(word => word.replace("\r", "").trim())
            .filter(word => word);  
        wordSet = new Set(wordArr);
    });

    return { wordSet };
};
