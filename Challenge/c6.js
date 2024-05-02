function sentenceManipulation(sentence) {
  const vowels = "aiueoAIUEO";
  const sen = sentence.split(" ").map((word) => {
    if (vowels.includes(word[0])) {
      return word;
    } else {
      const str = word.split("");
      const firstEl = str.shift();
      str.push(firstEl);
      return str.join("") + "nyo";
    }
  });
  return sen.join(" ");
}

sentenceManipulation("ibu pergi ke pasar bersama aku");