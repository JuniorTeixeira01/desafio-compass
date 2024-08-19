const remover = document.getElementById("remover");

function remove() {
    if(true){
        remover.style = "display: none"
    }

}

const pageLogin = document.querySelector('.style-login');
const login = document.querySelector('.login');

let isActive = false;
let play = 1;

login.addEventListener('click', () => {
    document.querySelector('#contstar').classList.add('remover-display');
    document.querySelector('.container-banner-info').classList.add('remover-display');
    pageLogin.classList.remove('remover-display');
    
    if(isActive){
        isActive = false;
        play = 0;
        document.querySelector('#contstar').classList.remove('remover-display');
        document.querySelector('.container-banner-info').classList.remove('remover-display');
        pageLogin.classList.add('remover-display');
    }else{
        isActive = true;
        play = 1;
    }
    
})

const pageCarrinho = document.querySelector('.carrinho-compras')
const carrinho = document.querySelector('.carrinho');

carrinho.addEventListener('click', () => {

    document.querySelector('#contstar').classList.add('remover-display');
    document.querySelector('.container-banner-info').classList.add('remover-display');
    pageCarrinho.classList.remove('remover-display');
    
    
    if(isActive){
        document.querySelector('#contstar').classList.remove('remover-display');
        document.querySelector('.container-banner-info').classList.remove('remover-display');
        pageCarrinho.classList.add('remover-display');
        isActive = false;
        play = 0;
    }else{
        isActive = true;
        play = 1;
    }
})

const containerShop = document.querySelector('.container-shop');
const btnShop = document.querySelector('.btn-shop');

btnShop.addEventListener('click', () => {
    containerShop.classList.remove('remover-display');

    if(isActive){
        containerShop.classList.add('remover-display');
        isActive = false;
        play = 0;
    }else{
        isActive = true;
        play = 1;
    }
})
    
    


const controls = document.querySelectorAll(".control");

let currentItem = 0;
const items = document.querySelectorAll(".item")

const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('control-left')
        
        if(isLeft) {
            currentItem -= 1;
        }else{
            currentItem += 1;
        }   

        if(currentItem >= maxItems){
            currentItem = 0;
        }

        if(currentItem < 0){
            currentItem = maxItems -1;
        }
        
        items.forEach(item => item.classList.remove('current-item'));

        items[currentItem].scrollIntoView({inline: "center", behavior: "smooth"});

        items[currentItem].classList.add('current-item');
        
    });
});

const formEmail = document.querySelector("formemail");
const email = document.querySelector("#email");
const btnEmail = document.querySelector(".final-button")

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  btnEmail.addEventListener('click', function(event) {
    let emailValue = email.value;
 
    let response = validateEmail(emailValue)
    if(response){
     alert("Email Válido");
    }else{
     alert("Email Inválido");
    }
 })

//  function emailValue() {
//      const valor = email.value;
//      return valor;
//  }
// //     let response = validateEmail(valor);
//     if(response){
//         alert("") 
//     }else{
//         alert('Email Inválido')
//     }
// }

/* Esta função pega o valor enquanto o input está acontecendo*/
// email.addEventListener('input', function() {
//     const valor = email.value; 
//     //console.log(valor)
//     console.log(validateEmail(valor))

// })










