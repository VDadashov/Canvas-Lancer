let bars = document.querySelector('.bars-custom');
let mobile = document.querySelector('.mobile')
bars.addEventListener('click',()=>{
    mobile.classList.toggle('active');
    bars.classList.toggle('active');
    
});