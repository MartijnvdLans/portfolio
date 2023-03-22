/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var button0 = document.querySelectorAll('.button')[0];
var button1 = document.querySelectorAll('.button')[1];
var button2 = document.querySelectorAll('.button')[2];
var frontEnd = true;
var userExperience = true;
var frontEndItems = document.getElementsByClassName('frontEnd');
var uxItems = document.getElementsByClassName('ux');


function changeButton() {
    button0.classList.add("active");
    button1.classList.remove("active");
    button2.classList.remove("active");
    frontEnd = true;
    userExperience = true;
    check();
    
}

function changeButton2() {
    button1.classList.add("active");
    button0.classList.remove("active");
    button2.classList.remove("active");
    frontEnd = true;
    userExperience = false;
    check();
}

function changeButton3() {
    button2.classList.add("active");
    button0.classList.remove("active");
    button1.classList.remove("active");
    frontEnd = false;
    userExperience = true;
    check();
}

function check(){
    if (frontEnd == true && userExperience == true) {
       
    for (var i = 0; i < frontEndItems.length; i++)
{
    frontEndItems[i].classList.remove('invisible');
}
        
        for (var i = 0; i < uxItems.length; i++)
{
    uxItems[i].classList.remove('invisible');
}
        
}
    
    else if (frontEnd == true && userExperience == false) {
       
    for (var i = 0; i < frontEndItems.length; i++)
{
    frontEndItems[i].classList.remove('invisible');
}
        
        for (var i = 0; i < uxItems.length; i++)
{
    uxItems[i].classList.add('invisible');
}
        
}
    
    else if (frontEnd == false && userExperience == true) {
       
    for (var i = 0; i < frontEndItems.length; i++)
{
    frontEndItems[i].classList.add('invisible');
}
        
        for (var i = 0; i < uxItems.length; i++)
{
    uxItems[i].classList.remove('invisible');
}
        
}
}

document.querySelectorAll('.button')[0].addEventListener("click", changeButton);
document.querySelectorAll('.button')[1].addEventListener("click", changeButton2);
document.querySelectorAll('.button')[2].addEventListener("click", changeButton3);