// dot notation
const person = {
  name: "Lynette",
};
console.log(person.name); // this will display the name john
person.age = 25; //this will add the property age to the person object
console.log(person); // this will display the object person with the two propeties person and age

//square bracket notation

const items = {
  "featured-items": ["item1", "item2"],
};

console.log(items["featured-items"]); //i access the property of the object using a square bracket so it will display the array['item1','item2']
console.log(person["name"]);

let appState = "loading";
const keyName = "computer";

const app = {
  [appState]: true,
};
app[keyName] = "apple";
console.log(app); //dissplays the object the names in the square brackets represent the value of the variable

const state = {
  loading: true,
  name: "",
  position: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "Lynette");
updateState("loading", false);
updateState("position", "developer");
updateState("age", 25);
console.log(state);
