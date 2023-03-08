
//Strings
//Extract the last four characters from the string below;
//"extravaganza"
let y = "extravaganza";
console.log(y[8],y[9],y[10],y[11])

//2
//Insert the following string at the fourth index of the below variable:
//"eat"
//const food = "The quick fox jumped over the lazy dog"
const d = "eat"
const food = "The quick fox jumped over the lazy dog"
console.log(food)

//Count how many times the following string appears in the string variable:
//1. "the"
//2."brown"
//const story= "The quick brown fox jumps over the lazy dog"
const story = "The quick brown fox jumps over the lazy dog"
const quick = (story.match(/the/g)||[]).length;
const fox = (story.match(/brown/g)||[]).length;
console.log(quick);
console.log(fox);


//Using JavaScript, find the following words from the following strings:
//1. "are"
//const string1 = "The pupils are reading in the library";
//2. "sitting"
//const string2 = "The child was sitting on the table before it fell"

const string1="The pupils are reading in the library";
const library = string1.search("are")
console.log(library);
const string2 = "The child was sitting on the table before it fell"
const child = string2.search("sitting");
console.log(child);



//Convert the following strings into the specified format:
1. //UpperCase: "wonderful"
2. //LowerCase: "amazing", "UndERneath"
3. //Title case "A wonderful world"

const huge ="wonderful"
const huger = huge.to UpperCase()
console.log(huger)

const less ="amazing"
const lesser = less.to LowerCase()
console.assert(lesser)

const tiny = "Beneath"
const tinner = tiny.to LowerCase()
console.log(tiner)

const title = "A wonderfil world"
const title2 = title.toLocaleUpperCase()
console.log(title2)








