// let name = "Eldorbek";
// let result = name.indexOf("E");
// console.log(result);
// let charat = name.charAt(2);
// console.log(charat);

// let message = "ball bat";
// let result = message.replaceAll("b", "c");
// console.log(result);
// let rep = result.repeat(3);
// console.log(rep);

let box = "String Methods";
let boxResult = box.length;
console.log(boxResult);

let ism = "Jamol";
let ismResult = ism.replace("J", "K");
console.log(ismResult);

let goal = "I can learn java script";
let goalResult = goal.indexOf("can");
console.log(goalResult);

let idea = "Java Script is cool!";
let ideaResult = idea.startsWith("Java");
console.log(ideaResult);

let ideaEnds = idea.endsWith("cool!");
console.log(ideaEnds);

let ideaUpper = idea.toUpperCase();
console.log(ideaUpper);

let ideaLower = idea.toLowerCase();
console.log(ideaLower);

let ideaIncludes = idea.includes("Java");
console.log(ideaIncludes);

let ideaRepeat = idea.repeat(5);
console.log(ideaRepeat);

let ideaCharAt = idea.charAt(15);
console.log(ideaCharAt);

let ideaSubstr = idea.substring(15, 19);
console.log(ideaSubstr);

let ideaPadStart = idea.padStart(25, "$");
console.log(ideaPadStart);

let empty = "";

let emptyConcat = empty.concat("Java Script", " is", " cool!");
console.log(emptyConcat);

let ideaSplit = idea.split("");
console.log(ideaSplit);

let ideaSlice = idea.slice(15);
console.log(ideaSlice);
///////////////////////////////////////////
let isim = prompt("Ismingizni kiriting:");

let ismSlice = isim.slice(1).toLowerCase();
let ismUpper = isim.charAt().toUpperCase();

alert(`Salom ${ismUpper}${ismSlice} teacher! Thanks for checking my homework!`);
