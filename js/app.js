/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// get needed elements
let bars = document.getElementById('navbar__list');
let toggleBars = document.getElementById('toggle-bars');

toggleBars.addEventListener('click', function() {
    bars.classList.toggle('active');
});

// Process a window resize event.
window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Function returns element using the querySelector
function getElem(el) {
    return document.querySelector(el);
}

// Build the nav dynamically
let sections = ['Section One', 'Section Two', 'Section Three', 'Section Four'];
let aClass = "menu__links__";
let ul = document.querySelector('ul');

for (let i = 0; i < sections.length; i++) {
    ul.innerHTML += `<li><a class=${aClass}${[i]} >${sections[i]}</a></li>`;
}

// Get sections locations
// Array to store section locations
let clientRect = [];

const section1 = getElem('#section1');
const section2 = getElem('#section2');
const section3 = getElem('#section3');
const section4 = getElem('#section4');

// Iterate over array of sections
[section1, section2, section3, section4].forEach(item => {
    clientRect.push(item.getBoundingClientRect());
});

console.log(clientRect);

// scrollTo function and scrolls to an arbitrary distance from the top of the viewport.
const element1 = getElem('.menu__links__0');
const element2 = getElem('.menu__links__1');
const element3 = getElem('.menu__links__2');
const element4 = getElem('.menu__links__3');

// Iterate over array of anchors classes
function scrollToPortView(element1, element2, element3, element4) {
    [element1, element2, element3, element4].forEach(item => {
        item.addEventListener('click', event => {
            // scrollTo
            if(event.target == element1) {                
                window.scrollTo({
                    top: `${clientRect[0].y}`,
                    left: `${clientRect[0].x}`,
                    behavior: 'smooth'
                  });
            } else if (event.target == element2) {
                window.scrollTo({
                    top: `${clientRect[1].y}`,
                    left: `${clientRect[1].x}`,
                    behavior: 'smooth'
                  });
            } else if (event.target == element3) {
                window.scrollTo({
                    top: `${clientRect[2].y}`,
                    left: `${clientRect[2].x}`,
                    behavior: 'smooth'
                  });
            } else if (event.target == element4) {
                window.scrollTo({
                    top: `${clientRect[3].y}`,
                    left: `${clientRect[3].x}`,
                    behavior: 'smooth'
                });
            }
            else {
                return;
            }
        });
    });
}

console.time("scrollToPortView Test");
scrollToPortView(element1, element2, element3, element4);
console.timeEnd("scrollToPortView Test");

/**
 * Get element by class or id
*/
let scrollUpBtn = document.getElementById('btn');

// Scroll Back to Top function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = 'block';
    } else {
        scrollUpBtn.style.display = 'none';
    }

    // Add an active state to your navigation items when a section is in the viewport
    if(section1.offsetTop <= window.scrollY && section1.offsetTop + section1.offsetHeight > window.scrollY){
        element1.classList.add('current');
    } else {
        element1.classList.remove("current");
    }

    if(section2.offsetTop <= window.scrollY && section2.offsetTop + section2.offsetHeight > window.scrollY){
        element2.classList.add('current');
    } else {
        element2.classList.remove("current");
    }

    if(section3.offsetTop <= window.scrollY && section3.offsetTop + section3.offsetHeight > window.scrollY){
        element3.classList.add('current');
    } else {
        element3.classList.remove("current");
    }

    if(section4.offsetTop <= window.scrollY && section4.offsetTop + section4.offsetHeight > window.scrollY){
        element4.classList.add('current');
    } else {
        element4.classList.remove("current");
    }
}

function scrollBackUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


