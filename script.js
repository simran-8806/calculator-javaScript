let inputBox= document.getElementById("input-box");
let buttons = document.querySelectorAll("button");

let buttonArray = Array.from(buttons);
 let string ="";

buttonArray.forEach((btn) => {
    btn.addEventListener("click", (event) =>{

        if(event.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
            inputBox.value = string;
        } else if(event.target.innerHTML == "AC"){
            string = "";
             inputBox.value = string;
        }else if(event.target.innerHTML == "="){
            string = eval(string);
             inputBox.value = string;
        }else{
           string = string + event.target.innerHTML;
           inputBox.value = string;
        }
        
        // console.log(event.target.innerHTML);
        
    });
    
});
