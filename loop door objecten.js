let obj = {
    a: 1,
    b: 2,
    firstname: "luka",
    lastname: "verhoeven"
}
​
// Get single value from object
console.log("gaa");
console.log(obj);
console.log(obj.firstname);
console.log(obj["firstname"]);
// extra controle voor het vermijden van errors.
if (obj.hasOwnProperty("firstname")) {
    console.log(`${obj["firstname"]}  is my firstname.`);
}
​
​
// method1: for in
for (const key in obj) {
    const element = obj[key];
    console.log(`forin: ${element}`);
}
​
​
// Method2: covert to array
console.log(Object.entries(obj));
console.log(Object.values(obj));
console.log(Object.keys(obj));
​
Object.values(obj).forEach((value) => {
    console.log(`foreach: ${value}`);
})