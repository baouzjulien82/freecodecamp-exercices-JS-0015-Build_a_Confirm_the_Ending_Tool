// version initiale

const confirmEnding = (string1, string2) => {
  let str1length = string1.length;
  console.log(str1length);
  let str2length = string2.length;
  console.log(str2length);
  let str1End = string1.slice(str1length-str2length, str1length);
  console.log(str1End);
  if (str1End === string2) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("azerty", "erty");

// Version améliorée

const confirmEnding = (string1, string2) => {
  return string1.slice(-string2.length) === string2;
}
