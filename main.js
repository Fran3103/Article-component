let share = document.querySelector('.share_icon');
let share2 = document.querySelector('.share2');

let container1= document.querySelector('.user-1');
let container2=document.querySelector('.user-2')

share.addEventListener('click', ()=>{
   
    container2.style.display= 'flex';

})
share2.addEventListener('click', ()=>{
    
    container2.style.display= 'none';

})



