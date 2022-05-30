let val;

val = document
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL; //(URL ကစာလုံးအကြီး)

val = document.links; //HTMLCOLLECTION
val = document.links[0];
val = document.links[3];
val = document.links[0].id;
val = document.links[0].className; // DOMTOKENLIST
val = document.links[0].classList;
// val = document.links[0].classList[1];
val = document.links[0].classList[0];

val = document.forms; //HTMLCOLLECTION
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList;
val = document.forms[0].classList[0];
val = document.forms[0].action;
val = document.forms[0].method;

val = document.images; //HTMLCOLLECTION
val = document.images[0]; 
val = document.images[0].src; 
val = document.images[0].className; 
val = document.images[0].classList; 
val = document.images[0].classList[0]; 
val = document.images[0].alt;
val = document.images[0].getAttribute('abc'); 
val = document.images[0].getAttribute('alt');

val = document.scripts; //HTMLCOLLECTION
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;
val = document.scripts[0].getAttribute('src');
val = document.scripts[0].getAttribute('type');

// console.log(val);

// Chaange Style
// document.getElementById('tasktitle').style.background = 'grey';
// document.getElementById('tasktitle').style.color = '#fff';
// document.getElementById('tasktitle').style.padding = '5px';

// Change Content
// document.getElementById('tasktitle').textContent = 'My List';
// document.getElementById('tasktittle').innerText = 'My List';
// document.getElementById('tasktitle').innerHTML = '<span style= "color:yellow">My Jobs</span>'

// Call to Class Name
let lis = document.getElementsByClassName('list-group-item'); //HTMLCOLLECTION
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color='blue';
// lis[1].textContent = 'Have to visit';

// Call To Tag
let litags = document.getElementsByTagName('li') //HTML COLLECTION
// console.log(litags);
// console.log(litags[0]);
// litags[0].style.color = 'red';
// litags[1].innerText = 'Have to cook';

// querrySelector
console.log(document.querySelector("#tasktitle")); 
// (id ကို querySelector မှာလှမ်းခေါ်မယ်ဆိုရင် # နဲ့ခေါ်ရမယ်)
console.log(document.querySelector(".card-title")); 
// (class ကို querySelector မှာလှမ်းခေါ်မယ်ဆိုရင် . နဲ့ခေါ်ရမယ်)
console.log(document.querySelector("h3"));
// (tag ကို querySelector မှာလှမ်းခေါ်မယ်ဆိုရင်  ဘာမှထည့်စရာမလိုဝုး)

// querySelector က တစ်ခုတည်းရှိတဲ့ ကောင်ကိုဘဲလှမ်း ခေါ် လို့ရမယိ / အများကြီးရှိတဲ့ကိုလှမ်း ခေါ်တဲ့ အခါ တစ်ခုဘဲ ရမယ်
console.log(document.querySelector("li"));
// document.querySelector('li').style.color= 'red';
// document.querySelector('ul li').style.color ='blue';
// document.querySelector('ul li:nth-child(odd)').style.background ='blue';
// document.querySelector('ul li:nth-child(even)').style.background ='grey';
// document.querySelector('ul li:last-of-type').style.color ='green';
// document.querySelector('ul li:nth-of-type(3)').textContent ='Have To Read';



const listitems = document.querySelector("ul").getElementsByClassName("list-group-item");
console.log(listitems);

// document.querySelector('ul li:nth-child(odd)').style.background = 'silver';
// document.querySelector('ul li:nth-of-type(even)').style.background = 'grey';

// console.log(typeof listitems);

let arritems = Array.from(listitems);
console.log(arritems);

// arritems.forEach(function(arritem,index){
    // console.log(arritem);
    // arritem.textContent = 'Hello';
    // arritem.innerText = `${index} : Hello`;
// });

// querySelectorAll
let its = document.querySelector('ul.list-group li.list-group-item');
console.log(its);

//NodeList
let itms = document.querySelectorAll('ul.list-group li.list-group-item');
console.log(itms);
console.log(itms[0])

// itms.forEach(function(itm,index){
    // console.log(index);
    // console.log(itm);
    // itm.textContent = 'Hello';
    // itm.innerText = `${index} : Hello World`;
// });

const liodd = document.querySelectorAll('li:nth-child(odd)');
const lieven = document.querySelectorAll('li:nth-child(even)');
// console.log(lieven);

// liodd.forEach(function(li,index){
    // console.log(li);
    // li.style.background = 'grey';
// });

// for(let i = 0; i < lieven.length ; i++){

    // console.log(i);
    // console.log(lieven[i]);
//     lieven[i].style.background = 'silver';
// }


//children

let chl;

const getul = document.querySelector('ul.list-group');
console.log(getul);
const getli = document.querySelector('li.list-group-item:first-child');
// console.log(getli);

chl = getul.children; // HTML Collection
console.log(chl);
console.log(chl[0]);
chl = getul.children[1];
console.log(chl);

// getul.children[1].innerText = 'Have To Eat';
// getul.children[1].innerHTML = `Have To Read <a href="#" id="delete-item2" class="delete-item"> <i class="fa-solid fa-trash-can"></i> </a>`;

// children of children

chl = getul.children[1].children; //HTML Collection
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList; // DOM Token List
chl = getul.children[1].children[0].getAttribute('href');


chl = getul.children[0].children[0].children;
chl = getul.children[0].children[0].children[0];

// Fist Child
chl = getul.firstElementChild;

// Last Child
chl = getul.lastElementChild;

// Child Element Count
chl = getul.children.length;
chl = getul.childElementCount;

chl = getul.children[0].childElementCount;
chl = getul.children[0].children[0].childElementCount;

console.log(chl);

// Parent Element

const getfirstli = document.querySelector('li.list-group-item:first-child');

let par = getfirstli.parentElement;
// console.log(par);

//Sibling

let sbl = getfirstli.nextElementSibling;
		// list item 1 	lisitem 2 		listitems 3 	listitem 4 	 listitem 5	
sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling

// console.log(sbl);

				// listitem 1  listitem 2    listitem 3 			listitem 4
let psbl = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(psbl);


// Create Element 
const newli = document.createElement('li');
console.log(newli)

// Add ID
newli.id = 'new-item';

// Add Class
newli.className = 'list-group-item';

// Add Attribute (qualifiedname,value)
newli.setAttribute('title','newitem');

// newli.textContent = 'hay';
// newli.innerText = 'hi';
// newli.innerHTML = 'List Item 6 <a href="#" id="delete-item5" class="delete-item"> <i class="fa-solid fa-trash-can"></i> </a> ';

//Create Text Node
newli.appendChild(document.createTextNode('Save Myanmar'));

const newlink = document.createElement('a');
newlink.href = '#';

//Add id
newlink.id = 'delete-item6';

//Add Class
newlink.className = 'delete-item';

newlink.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
// console.log(newlink);

newli.appendChild(newlink);

// console.log(newli);

document.querySelector('ul.list-group').appendChild(newli);


// Replace Element

const newtitle = document.createElement('h2');

// Add id
newtitle.id = 'tasktitle';

// Create Text Node
newtitle.appendChild(document.createTextNode('All My Lists'));

console.log(newtitle);

const oldtitle = document.getElementById('tasktitle');
// console.log(oldtitle);

const getcardaction = document.querySelector('.card-action');

// Replace Child(new,old)
getcardaction.replaceChild(newtitle,oldtitle);

console.log(getcardaction);


// Remove Element
const getlis = document.querySelectorAll('li'); // Node List
// console.log(getlis);
// console.log(getlis[0]);
// getlis[0].remove();
// getlis[4].remove();

//Remove Child Element
const getfirstul = document.querySelector('ul');
// console.log(getfirstli);
// console.log(getli[5]);

// getfirstul.removeChild(getlis[0]);
// getfirstul.removeChild(getlis[5]);

//Class
const firstli = document.querySelector('li:first-child');
//console.log(firstli);
//const firstlink=firstli.children; //HTML collection
const firstlink = firstli.children[0];
// console.log(firstlink);
let firstlnk;
firstlnk = firstlink.className;
// console.log(firstlnk);
// firstlink.className = "delete-myself";
// firstlink.className = "delete-item delete-myself";
// firstlink.className = "delete-item delete-me delete-myself";

firstlnk = firstlink.classList; // DOM Token List
// console.log(firstlnk);
// console.log(firstlnk[0]);
// console.log(firstlnk[1]);

// firstlink.classList.add('delete-ourserve');
// firstlink.classList.add('delete-myself');
// firstlink.classList.add('delete-myself','delete-ourserve');
// firstlink.classList.remove('delete-item');
// firstlink.classList.remove('delete-me','delete-myself');

// replace class(old,new)
// firstlink.classList.replace('delete-ourserve','delete-delete')


if(firstlink.classList.contains('delete-me')){
	console.log('Yes');
}else{
	console.log('No');
}



//Attribute
let getatt = firstlink.getAttribute('href');
console.log(getatt);
firstlink.setAttribute('href','https://google.com');
getatt = firstlink.hasAttribute('href');
console.log(getatt); //true
getatt=firstlink.hasAttribute('title')
console.log(getatt); //false

//addEventListener(eventtype,callbackfunction)
const clearbtn = document.querySelector('.clear-task');

//Method 1
// clearbtn.addEventListener('click',function(e){
// 	console.log('hay i am working');

// 	e.preventDefault();    //bl link or bl web ko ma mayout say chin yin use tl
// });


// Method 2
clearbtn.addEventListener('click',myclick);

function myclick(e){
	// console.log('hay I am my click');

	let val;
	val = e;

	//Event target element
	val = e.target;
	val = e.target.id; //result = string nae pay tl
	val = e.target.className; //result = string nae pay tl
	val = e.target.classList; //DomToken List

	//Event Type
	val = e.type;

			// Coordinates event - relative to the window
	// val = e.clientX;  //document ka na count lote tl
	val = e.clientY        //document ka na count lote tl

			// Coordinates event - relative to the element
	val = e.offsetX;   //document ka na element lote tl 
	val = e.offsetY;   //document ka na element lote tl



	console.log(val);

	e.preventDefault();
};







//Mouse Event
const clbtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h2');

// console.log(heading);

// single click
// clbin.addEventListener('click',mouseventtype);

// double click
// clbin.addEventListener('dblclick',mouseventtype);

// mousedown
// clbin.addEventListener('mousedown',mouseventtype);

// mouseup
// clbin.addEventListener('mouseup',mouseventtype);



//mouseenter
// card.addEventListener('mouseenter',mouseventtype);


//mouserleave
// card.addEventListener('mouserleave',mouseventtype);

//mousemove
// card.addEventListener('mousemove',mouseventtype);


//mouseover
// card.addEventListener('mouseover',mouseventtype);




// function mouseventtype(e){
//   console.log(`Event type = ${e.type}`);
  
//   heading.textContent = `MouseX : ${e.clientX} MouseY : ${e.clientY}`;
  
//   document.body.style.background = `rgba(${e.clientX},${e.clientY},1)`;
  
//   e.preventDefault();
// }


const formel = document.querySelector('form');
const inputask = document.getElementById('task');

// formel.addEventListener('submit',inputeventtype);

// function inputeventtype(e){
//   console.log(`Event Type = ${e.type}`);

  
//   e.preventDefault();
// }

const inputtask = document.getElementById('task');
const geth2 = document.querySelector('h2');

// keydown
// inputtask.addEventListener('keydown',inputeventtype);

// keypress
// inputtask.addEventListener('keypress',inputeventtype);

// keyup
// inputtask.addEventListener('keyup',inputeventtype);

// input
// inputtask.addEventListener('input',inputeventtype);

// focus
// inputtask.addEventListener('focus',inputeventtype);


// blur
// inputtask.addEventListener('blur',inputeventtype);

// cut
// inputtask.addEventListener('cut',inputeventtype);

// paste
// inputtask.addEventListener('paste',inputeventtype);

// copy
// inputtask.addEventListener('copy',inputeventtype);

// function inputeventtype(e){
  
//   console.log(`Event Type = ${e.type}`);
  
//   console.log(e.target.value);
  
//   geth2.textContent = e.target.value;
// }


// Event Bubbling
// document.querySelector('.card-title').addEventListener('click',function(){
//   console.log('i am card-title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
//   console.log('i am card-content');
// });

// document.querySelector('.card').addEventListener('click',function(){
//   console.log('i am card');
// });


// Event Delegation

// const deleitem = document.querySelector('.delere-item');
// deleitem.addEventListener('click',deleteitem);

// function deleteitem(){
//   console.log('i am delete item');
  
//   console.log(e.target);
  
//   e.preventDefault();
// }


document.body.addEventListener('click',evendelg);

function evendelg(){
  // console.log('i am working');
  // console.log(e.target);
  
  // if(e.target.className === 'fa-solid fa-trash-can'){
  //   console.log('hay i am trash can');
  // }
  
  // if(e.target.parentElement.className === 'delete-item delete-me'){
  //   console.log('i am delete item by a tag');
  // }
  
  if(e.target.parentElement.classList.contains('delete-item')){
    // console.log('i am delete item by a tag');
    
    //  i        a
    // e.target.parentElement.remove();
    
    //  i      a             li
    // e.target.parentElement.parentElement.remove();
  }
  
  e.preventDefault();
}


document.querySelector('form').addEventListener('submit',function(e){
  e.preventDefault();
  // console.log('hey i am working')
  
  
  const getnewtask = document.getElementById('task').value;
  // console.log(getnewtask);
  
  // localStorage.setItem('mytask',getnewtask);
  
  let alltasks;
  
  if(localStorage.getItem('mytask') === null){
    alltasks = [];
  }else{
    alltasks = JSON.parse(localStorage.getItem('mytask'));
  }
  
  
  
  alltasks.push(getnewtask);
  // console.log(alltasks);
  
  localStorage.setItem('mytask',JSON
  .stringify(alltasks));
});

// console.log(JSON.parse(localStorage.getItem('mytask')));

// console.log(typeof localStorage.getItem('mytask'));

let getalltasks = localStorage.getItem('mytask');
    getalltasks = JSON.parse(getalltasks);
console.log(getalltasks);


getalltasks.forEach(function(getalltask){
  console.log(getalltask);
});

// 8LC