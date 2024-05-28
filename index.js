const yesBtn = document.querySelector(' #yesBtn'); 

yesBtn.addEventListener('click', function () { 
    alert(' Quiero decirte algo que he estado pensando desde hace un tiempo. Me gusta mucho pasar tiempo contigo, hablar y compartir momentos especiales. Eres una persona increíble, y me haces sentir muy feliz. Me encantaría saber si quisieras ser mi novia. Igual ya aceptaste pero para confirmar')
}); 

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () { 
    const randomX = parseInt(Math.random()*100); 
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+' %');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn,style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
 })
