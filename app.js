let doc = document;
let opener = doc.getElementsByClassName("open")[0];
let formB = doc.getElementsByClassName('form-block')[0];
let close = doc.getElementsByClassName('closer')[0];

let width;
/*
window.onresize = window.onload = function() {
    width = this.innerWidth;
    if(width > 481) {formB.id = ""; formB.classList.remove('called');} 
}


window.onresize= function() {a = this.innerWidth;            //выдает размер страницы при ее переменнах
   console.log(a) ;
}; */


doc.addEventListener('click', function(event) { 
    if ((!opener.contains(event.target)) && (!formB.contains(event.target)) && (formB.classList.contains('called')) ){
        formB.id ="hidden";
        formB.classList.toggle('called');}});

    close.onclick = function(event) {
    formB.id = 'hidden';
    formB.classList.toggle('called');
}  

//opener.onclick

 function openn(event) {
    formB.id = '';
    formB.classList.toggle('called');};
/*-----------------------------------------------------------------------next----------------------------------------------*/


let openerB = doc.getElementsByClassName("ob")[0];
let formBB = doc.getElementsByClassName('fb')[0];
let closeB = doc.getElementsByClassName('cb')[0];
    
    
    
doc.addEventListener('click', function(event) { 
    if ((!openerB.contains(event.target)) && (!formBB.contains(event.target))){
            formBB.id ="hidden";
            formBB.classList.toggle('called');}});
    
        closeB.onclick = function(event) {
        formBB.id = 'hidden';
        formBB.classList.toggle('called');
    }  
    
    openerB.onclick = function (event) {
        formBB.id = '';
        formBB.classList.toggle('called');};    

/*------------------------------------------------------------Text A Expand-------------------------------------------*/

let deskA = doc.getElementById('deskhid-2');
let mobA = doc.getElementById('mobhid-2');
let expander = doc.getElementsByClassName('moretext')[0];

let deskB = doc.getElementById('deskhid-5');
let mobB = doc.getElementById('mobhid-5');
let expanderB = doc.getElementById('expB');

window.onresize = window.onload = function() {
    width = this.innerWidth;
        if(width > 481) {
            expander.innerHTML = '...ещё';
            deskA.style.display = "none";
            mobA.style.display = "inline";

            expanderB.innerHTML = '...ещё';
            deskB.style.display = "none";
            mobB.style.display = "inline";

            formB.id = "";
            formB.classList.remove('called');
        } else {
            expander.innerHTML = '...ещё';
            deskA.style.display = "inline";
            mobA.style.display = "none"; 
            
            expanderB.innerHTML = '...ещё';
            deskB.style.display = "inline";
            mobB.style.display = "none";  
        }
    };  

function moreA() {
    if(window.innerWidth > 481) {
        if(deskA.style.display === 'inline') {
        deskA.style.display = "none";
        mobA.style.display = "inline";
        expander.innerHTML = '...ещё';
         } else {
        deskA.style.display = "inline";
        mobA.style.display = "inline";
        expander.innerHTML = 'свернуть. <br><br>'; 
        } } else {
             if(mobA.style.display === 'inline') {
            mobA.style.display = "none";
            deskA.style.display = "inline";
            expander.innerHTML = '...ещё';
             } else {
            mobA.style.display = "inline";
            deskA.style.display = "inline";
            expander.innerHTML = 'свернуть. <br><br>'; 
            } 
    } };

/*------------------------------------------------------------Text B Expand-------------------------------------------
-------------------------------------------------------------------------------------------------------------------------*/

function moreB() {
    if(window.innerWidth > 481) {
        if(deskB.style.display === 'inline') {
        deskB.style.display = "none";
        expanderB.innerHTML = '...ещё';
         } else {
     deskB.style.display = "inline";
        expanderB.innerHTML = 'свернуть. <br><br>'; 
        } } else {
             if(mobB.style.display === 'inline') {
            mobB.style.display = "none";
            expanderB.innerHTML = '...ещё';
             } else {
            mobB.style.display = "inline";
            expanderB.innerHTML = 'свернуть. <br><br>'; 
            } 
    } };  

/*---------------------------------------------Image Viewer------------------------------------------------*/
let slide = doc.getElementsByClassName('viewer')[0];
let ima = doc.getElementById('dip-1-Big');
let imb = doc.getElementById('dip-2-Big');
let imc = doc.getElementById('dip-3-Big');


function imgA(event) {
    slide.classList.remove('imgUnvis');
ima.classList.remove('imgUnvis');
ima.style.display='block';
};

function imgB(event) {
    slide.classList.remove('imgUnvis');
imb.classList.remove('imgUnvis');
imb.style.display='block';
};

function imgC(event) {
    slide.classList.remove('imgUnvis');
    imc.classList.remove('imgUnvis');
    imc.style.display='block';
};

function imgClose() {
    slide.classList.add('imgUnvis');
    imc.classList.add('imgUnvis');
    imb.classList.add('imgUnvis');
    imc.classList.add('imgUnvis');
    imc.style.display='none';
    imb.style.display='none';
    ima.style.display='none';  
}
/*---------------------------------------------------------Navigation-------------------------------------------*/
function tob() { window.scroll ({top:890, left:0, behavior: 'smooth'});
window.scroll (0, 890);};

function toc() { window.scroll ({top:890, left:0, behavior: 'smooth'});
window.scroll (0, 1610);};

function tod() { window.scroll ({top:890, left:0, behavior: 'smooth'});
window.scroll (0, 2385);};

function toe() { window.scroll ({top:890, left:0, behavior: 'smooth'});
window.scroll (0, 2800);};

function tof() { window.scroll ({top:890, left:0, behavior: 'smooth'});
window.scroll (0, 3700);};
