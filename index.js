var i =0;
text = 'Stay Safe!';

function typeWriter(){
    if(i < text.length){
        document.getElementById('typing').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,200)
    }
}

var reqToggle = document.getElementsByClassName('link')[0];
var list = document.getElementsByClassName('req-list')[0];

reqToggle.addEventListener('click',function(){
    list.classList.toggle('hide');
    
})

typeWriter();


