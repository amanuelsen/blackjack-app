// let incrementButton = document.getElementById("incrementButton");
// let numberDisplay = document.getElementById("numberDisplay");
// let savebtn = document.getElementById("save-btn");
// let andra=document.getElementById("save")

// let count= 0




// function inc(){
//     count += + 1
//   numberDisplay.textContent= count
  
// }

// function save(){
//   let contstc=count + "-"
//   andra.innerText+=contstc
//   count=0
//   numberDisplay.textContent=count

// }


// let mypints= 3
// function remve1(){
//     mypints -= 1
    
// }
// function add3(){
//     mypints += 3
    
// }

// add3()
// add3()
// add3()
// remve1()
// console.log(mypints)







// const s= ["ed", "nej", "ja"]
// for (ja of s) {
//     console.log(ja)
//     if(ja ==="nej" ){
//         console.log("nej is in my list")
//         break
//     }
// }

// for(let i = 0; i<s.lenght; i++){
   
//     let alla= "hellow" + s[i] ;
// }

// let loading= 0;
// while(loading < 100){
//     console.log("website is still loading")
//      loading += 1;
// }







// // function comicalEffect(message) {
// //   let formattedMessage = "";
// //   for (let i = 0; i < message.length; i++) {
// //     if (i % 2 === 0) {

// //       formattedMessage += message[i].toUpperCase();
// //     } else {
// //       formattedMessage += message[i].toLowerCase();
// //     }
// //   }
// //   return formattedMessage;
// // }



// let eror= document.getElementById("error")


// function fel(){
//     eror.innerText= "Something went grong"
// }

// let sum= document.getElementById("sum")
// let num1=8
// let num2= 2
// document.getElementById("num1-el").textContent=num1
// document.getElementById("num2-el").textContent=num2

// function add(){
//     let res=num1 + num2
//     sum.textContent=res


// }
// function sub(){
//     let res=num1 - num2
//     sum.textContent=res
    
    
// }
// function div(){
//     let res=num1 / num2
//     sum.textContent=res
    
    
// }
// function mul(){
//     let res=num1 * num2
//     sum.textContent=res
    
    
// }
let summan= document.getElementById("sum")
let kort= document.getElementById("card")
let messageel= document.getElementById("message")

function getrandomnumner(){
    return 5

}
let one= getrandomnumner()
let two= getrandomnumner()
let cards= [one, two]
let hasbl= false
let summm= one + two 
let isalive=true
let message= true





function rendergame(){
    kort.textContent= "Cards :"  
    for(let i= 0; i<cards.length; i++){
        kort.textContent +=cards[i] + ","
    }
    summan.textContent = "sum:" + summm

    if(summm == 21) {
        hasbl=true
        message="Blackjack"
    } else if (summm > 21){
        message="you have lost"
    
        isalive=false
       
    } else {
        message="do you want to dram a new card?"
    
        isalive=false
    }
    messageel.textContent=message
    
}

function Newcard(){
    console.log("drawing out a new card")
    
    let card =getrandomnumner()
     summm+= card
     cards.push(card)
         
         rendergame()
}
function startgame(){
    rendergame()
}



let player= 102
let player2= 107
function getfas(){
    if(player < player2){
        return player
    } else if (player2 < player){
        return player2
    } else{
        return "lika"
    }
}


function totalracetime(){
   return  player+ player2
}
let final= totalracetime()
console.log(final)