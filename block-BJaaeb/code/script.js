/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
let createInputElm = (la,type = "text") => {
  let label = document.createElement('label');
   label.append(`${la}: <input type="${type}">`)
  return label
  }

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
let createInputElm = (la,type = "text") => {
  let label = document.createElement('label');
   label.append(`${la}: <input type="${type}">`)
  return label
  }
// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
let createList = (arr) => {
  let ul = document.createElement('ul');
  arr.forEach((ele) => {
var li = document.createElement('li');
li.append(ele)
 ul.append(li)})
  return ul
  }

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
let createTodoList = (arr) => {
  var ul = document.createElement('ul')
  arr.forEach((obj) =>{
   var li = document.createElement('li')
  var p = document.createElement('p')
  var input = document.createElement('input');
var span = document.createElement("span");
span.append('X');
  p.append(obj.name);
  input["type"]= 'checkbox';
  input['name']= " ";
  input['id'] =  " ";
  input['checked']= obj.isDone;
  li.append(p,input,span)
  ul.append(li);})
 return ul
  }



// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
