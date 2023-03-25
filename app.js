(function(){

   let buttons = document.querySelectorAll(".btn");
   let count = 0;

   buttons.forEach(function(button){
    button.addEventListener("click", function(e){

        if(button.classList.contains('prevBtn')){
            count--;
        }else if(button.classList.contains('nextBtn')){
            count++;
        }

        let counter = document.querySelector("#counter");
        counter.textContent = count;

        if(count < 0 ){
            counter.style.color = "Red";
        }else if(count > 0 ){
            counter.style.color = "Green";
        }else{
            counter.style.color = "Black";
        }
    });

   });

})();