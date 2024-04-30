

    let sliders = document.getElementsByClassName('slider');
    let a=document.getElementsByClassName('banner1');
    let b=document.getElementsByClassName('banner2');
    let c=document.getElementsByClassName('banner3');
    
    
    document.querySelector("#btn1").addEventListener('click', function(){
       
        
        for (var i = 0; i < sliders.length; i++) {
            sliders[i].a.value.style.display=block;
        }
    });
    
    document.querySelector("#btn2").addEventListener('click', function(){
       
        for (var i = 0; i < sliders.length; i++) {
            sliders[i].b.value.style.display=block;
        }
    });
     
    document.querySelector("#btn3").addEventListener('click', function(){
       
        for (var i = 0; i < sliders.length; i++) {
            sliders[i].c.value.style.display=block;
        }
    });


       

 export default Script.js
