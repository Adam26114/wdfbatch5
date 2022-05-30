let val;

val = document;
val = document.doctype;
val = document.head;
val = document.bady;
val = document.URL;

val = document.links; //HTMLCOLLECTION
val = document.links[0];
val = document.links[3];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList; //DOMTOKENLIST
val = document.links[0].classList[0];
val = document.links[0].classList[1];

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
val = document.images[0].getAttribute('tag');

val = document.scripts; //HTMLCOLLECTION
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;
val = document.scripts[0].getAttribute('src');
val = document.scripts[0].getAttribute('type');

// console.log(val);

//Change Styling
document.getElementById("tasktitle").style.background = "grey";
document.getElementById("tasktitle").style.color = "#fff";
document.getElementById("tasktitle").style.padding = "5px";

//Change Content
// document.getElementById("tasktitle").textContent = "My List";
// document.getElementById("tasktitle").innerText = "My Task";
//document.getElementById("tasktitle").innerHTML = `<span style="color:yellow">My Jobs</span>`;


//Call to class Name

let lis = document.getElementsByClassName("list-group-item"); //HTML Collection
//console.log(lis);
//console.log(list[0]);
// lis[0].style.color = "blue";
// lis[1].textContent = "Have to visit";


//Call to Tag
let litags = document.getElementsByTagName("li");
// console.log(litags);
// console.log(litags[0]);
// litags[0].style.color = "red";
// litags[1].innerText = "Have to cook";


//querySelector
// console.log(document.querySelector("#tasktitle"));
// console.log(document.querySelector("#card-title"));
// console.log(document.querySelector("h3"));


//querySelector
// console.log(document.querySelector("li"));
//document.querySelector("li").style.color="red";
//document.querySelector("ul li").style.color="blue";
//document.querySelector("ul li:nth-child(odd)").style.color="silver";
//document.querySelector("ul li:nth-child(even)").style.color="grey";
// document.querySelector("ul li:last-of-type").style.color = "green";
// document.querySelector("ul li:nth-of-type(3)").textContent = "How to read";

const listitems = document.querySelector("ul").getElementsByClassName("list-group-item");
console.log(listitems);

// document.querySelector("ul li:nth-child(odd)").style.background = "silver";
// document.querySelector("ul li:nth-child(even)").style.background = "grey";

// console.log(typeof listitems);



let arritems = Array.from(listitems);
console.log(arritems);

// arritems.forEach(function (arritem, index) {
//     console.log(arritems);
// });

// arritems.forEach(function (arritem, index) {
// console.log(arritem);
// arritem.textContent = 'Hello';
//     arritem.innerText = `${index}: Hello`;
// });


// querySelectorAll
let its = document.querySelectorAll('ul.list-group li.list-group-item');
console.log(its);

let itms = document.querySelectorAll('ul.list-group li.list-group-item'); //nodelist
console.log('itms');
console.log('itms[0]');

// itms.forEach(function (itm, index) {
// console.log('itm');
// itm.textContent = 'Hello';
//     itm.innerText = `${index}: Hello World`;
// });

const liodd = document.querySelectorAll('li:nth-child(odd)');
const lieven = document.querySelectorAll('li:nth-child(even)');

console.log(lieven);

// liodd.forEach(function (li, index) {
//     //console.log('li');
//     li.style.background = "grey";
// });

// for (let i = 0; i < lieven.length; i++) {
//     console.log('li');
//     console.log('lieven[i]');
//     lieven[i].style.background = 'silver';
// };

//childern

let chl;

const getul = document.querySelector('ul.list-group');
console.log(getul);
const getli = document.querySelector('li.list-item:first-child');
console.log(getli);

chl = getul.children; //HTML Collection
console.log(chl);
console.log(chl[0]);
chl = getul.children[1];
console.log(chl);

// getul.children[1].innerText = "Have to eat";
// getul.children[1].innerHTML = `Have to read <a href="#" id="delete-item2" class="delete-item"><i
// class="fa-solid fa-trash-can"></i></a>`;


// children of children

chl = getul.children[1].children; //HTML Collection
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList;
chl = getul.children[1].children[0].getAttribute('href');


chl = getul.children[1].children[0].children;
chl = getul.children[1].children[0].children[0];


//First Element Child (keyword)
chl = getul.firstElementChild;

//lastElement child (keyword)
chl = getul.lastElementChild;

//Child Element Count 
chl = getul.children.length;
chl = getul.childElementCount;

chl = getul.children[0].childElementCount;
chl = getul.children[0].children[0].childElementCount;


console.log(chl);

//Parent Element

const getfirstli = document.querySelector('li.list-group-item:first-child');

let par = getfirstli.parentElement;
//console.log(par);


let sbl = getfirstli.nextElementSibling;

//1         2                3                   4               5                            
sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

// console.log(sbl);

//     1           2                       3                   2
let psbl = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
// console.log(psbl);




//Create Element
const newli = document.createElement('li');
// console.log(newli);

//Add ID
newli.id = 'new-item';

//Add Class
newli.className = 'list-group-item';
console.log(newli);


//Add Attribute (qualifiedname,value)
newli.setAttribute('title', 'newitem');
//console.log(newli);

// newli.textContent = 'hay';
// newli.innerText = 'hi';
// newli.innerHTML = `List Item 6 <a href="#" id="delete-item6" class="delete-item"><i
// class="fa-solid fa-trash-can"></i></a>`;

//Create Text Node
newli.appendChild(document.createTextNode('Save Myanmar'));


const newlink = document.createElement('a');

//Add ID
newlink.id = 'delete-item6';

//Add Class 
newlink.className = 'delete-item';


newlink.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

// console.log(newlink);


newli.appendChild(newlink);
// console.log(newli);

document.querySelector('ul.list-group').appendChild(newli);

//Replace Element
const newtitle = document.createElement('h2');

//Add ID
newtitle.id = 'tasktitle';

//create Text Node
newtitle.appendChild(document.createTextNode('All My List'));

//console.log(newtitle);


const oldtitle = document.getElementById('tasktitle');
console.log(oldtitle);

const getcardaction = document.querySelector('.card-action');

//Replace Child(new,old)
getcardaction.replaceChild(newtitle, oldtitle);



//Remove Element(self)

const getlis = document.querySelectorAll('li');  //Node List 

//console.log(getlis);
//console.log(getlis[0]);

// getlis[0].remove();
// getlis[4].remove();

// Remove Element (self)
const getfirstul = document.querySelector('ul');
// console.log(getfirstul);
// console.log(getlis[5]);

// getfirstul.removeChild(getlis[0]);
// getfirstul.removeChild(getlis[5]);

//ClassName VS ClassList
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




firstlnk = firstlink.classList; //DOM Token List
// console.log(firstlnk);
// console.log(firstlnk[0]);
// console.log(firstlnk[1]);

// firstlink.classList.add('delete-ourselve');
// firstlink.classList.add('delete-myself');

// firstlink.classList.add('delete-myself', 'delete-ourselve');
// firstlink.classList.remove('delete-ourselve');
// firstlink.classList.remove('delete-me', 'delete-myself');


//replace(old,new);

//firstlink.classList.replace('delete-ourselve', 'delete-delete');


if (firstlink.classList.contains('delete-me')) {
    console.log('yes');
} else {
    console.log('no');
}

//Attribute
let getatt = firstlink.getAttribute('href');
//console.log(getatt);
firstlink.setAttribute('href', 'https://google.com');
getatt = firstlink.hasAttribute('href');
console.log(getatt); //true
getatt = firstlink.hasAttribute('title');
console.log(getatt);   //false


// addeEventListener(eventtype,callbackfunction)
const clearbtn = document.querySelector('.clear-tasks');

// Method 1
// clearbtn.addEventListener('click', function (e) {
//     console.log('hay i am working');

//     e.preventDefault();
// });


//Method 2
clearbtn.addEventListener('click', myclick);
function myclick(e) {
    // console.log('hay i am myclick');

    let val
    val = e;

    // Event target Element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList; //Dom Token List

    e.target.innerText = 'Clear Me';

    //Event Type

    val = e.type;

    //Coordinates event-rekative to the window

    // val = e.clientX;
    val = e.clientY;


    //Coordinates event-rekative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);

    e.preventDefault();
}


//MouseEvent 

const clbtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h2');

console.log(clbtn);

//Single Click
// clbtn.addEventListener('click', mouseeventType);



//Double Click

// clbtn.addEventListener('dbl', mouseeventType);

//mousedown

// clbtn.addEventListener('mousedown', mouseeventType);

//mouseup
// clbtn.addEventListener('mouseup', mouseeventType);

//mouseenter
// card.addEventListener('mouseenter', mouseeventType);

// mouseleave
// card.addEventListener('mouseleave', mouseeventType);

//mouseout
// card.addEventListener('mouseout', mouseeventType);

//mouseover
// card.addEventListener('mouseover', mouseeventType);

// mousemove
// card.addEventListener('mousemove', mouseeventType);

// function mouseeventType(e) {

//     console.log(`Event type= ${e.type}`);

//     e.preventDefault();

// }

const formel = document.querySelector('form');


// formel.addEventListener('submit', inputeventtype);

// function inputeventtype(e) {
//     console.log(`Event Type= ${e.type}`);


//     e.preventDefault();
// }

const inputtask = document.getElementById('task');


//keydown

// inputtask.addEventListener('keydown', inputeventtype);

// const geth2 = document.querySelector('h2');

// //keypress
// inputtask.addEventListener('keypress', inputeventtype);

// //keyup
// inputtask.addEventListener('keyup', inputeventtype);

//focus
// inputtask.addEventListener('focus', inputeventtype);

//blur
// inputtask.addEventListener('blur', inputeventtype);

// //cut
// inputtask.addEventListener('cut', inputeventtype);

// //paste
// inputtask.addEventListener('paste', inputeventtype);

//input
// inputtask.addEventListener('input', inputeventtype);

// function inputeventtype(e) {
//     console.log(`Event Type= ${e.type}`);

//     console.log(e.target.value);

//     geth2.textContent = e.target.value;

//     // e.preventDefault();
// }


// function mouseeventType(e) {
//     console.log(`Event type= ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//     document.body.style.background = `rgba(${e.offsetX},${e.offsetY},1)`;

//     e.preventDefault();
// }


//Event Bubbling 

// document.querySelector('.card-title').addEventListener('click', function () {
//     console.log('I am card title');
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//     console.log('I am card content');
// });

// document.querySelector('.card').addEventListener('click', function () {
//     console.log('I am card');
// });




//Event Delegation

// const deleitem = document.querySelector('.delete-item');
// deleitem.addEventListener('click', deleteitem);

// function deleteitem(e) {
//     console.log('I am delete item');

//     console.log(e.target);

//     e.preventDefault();
// }


document.body.addEventListener('click', eventdelg);


function eventdelg(e) {
    // console.log('i am working');
    // console.log(e.target);

    // if (e.target.className === 'fa-solid fa-trash-can') {
    //     console.log('I am trash can');
    // }

    // if (e.target.parentElement.className === 'delete-item') {
    //     console.log('I am delete item by a tag');
    // }

    // if (e.target.parentElement.className === 'delete-item delete-me') {
    //     console.log('I am delete item by a tag');
    // }

    // if (e.target.parentElement.classList.contains('delete-item')) {
    // console.log('I am delete item by a tag');

    // i 
    // e.target.remove();

    // i        a
    // e.target.parentElement.remove();

    // i           a               li 
    // e.target.parentElement.parentElement.remove();

}



// e.preventDefault();
// }



document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('hay i am working');

    const getnewtask = document.getElementById('task').value;
    // console.log(getnewtask);

    //localStorage.setItem('mytask', getnewtask);

    let alltask;

    if (localStorage.getItem('mytask') === null) {
        alltask = [];
    } else {
        alltask = JSON.parse(localStorage.getItem('mytask'));
    }
    alltask.push(getnewtask);

    //console.log(alltask);

    // alltask = [];

    // alltask.push(getnewtask);

    // console.log(alltask);


    localStorage.setItem('mytask', JSON.stringify(alltask));

});


console.log(JSON.parse(localStorage.getItem('mytask')));
console.log(typeof JSON.parse(localStorage.getItem('mytask')));


let getalltasks = localStorage.getItem('mytasks');
getalltasks = JSON.parse(getalltasks);

console.log(getalltasks);

getalltasks.forEach(function (getalltasks) {
    console.log(getalltasks);
});

