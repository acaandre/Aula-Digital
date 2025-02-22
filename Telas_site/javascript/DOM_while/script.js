let numero = document.getElementById("numero");

// Opção mais simples
function executarLoop(i, max) {
    if (i < max) {
        num = i;
        numero.innerHTML = num;
        console.log(num);
      setTimeout(function() {
        executarLoop(i + 1, max);
      }, 1000);
    }
  }
  
  executarLoop(1, 5);

  

//   Outra opção:
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function executarLoop() {
//     for (let i = 0; i <= 5; i++) {
//       num = i;
//       numero.innerHTML = num;
//       console.log(num);
//       await delay(1000); // aguarda 1 segundo
//     }
//   }
  
//   executarLoop();

// --------------------------------------------------------------

// function repeticao() {
//     let num = 1
//     numero.innerHTML=num

//     for (let x, x <=5; x++){
//         num = x;
//     }

//     setTimeout(() => {
//         numero.innerHTML = 2
//     }, 1000);
//     setTimeout(() => {
//         numero.innerHTML = 3
//     }, 1000);
// }

// repeticao()




// // while (num <=5){
// //     numero.innerHTML = num;
// //     num++ ;
// //     setInterval();
// // }