const header=document.querySelector('header'),menu=document.querySelector('.menu'),links=document.querySelector('.links');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>20));
menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));