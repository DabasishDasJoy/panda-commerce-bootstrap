const h2Items = document.getElementsByTagName('h2');
for (const item of h2Items) {
    item.style.color = "lightblue";
}

document.getElementById('backpack').style.backgroundColor = 'tomato';

const cards = document.getElementsByClassName('card');

for (const card of cards) { 
    card.classList.remove('rounded-3');
    card.style.borderRadius="30px";
}

//click handler
function clickHandler(){
    console.log("Clicke Button");
}

//Button events
const buynowButtons =  document.querySelectorAll('.btn-buy-now:not(.btn-subscribe)');
for (const btn of buynowButtons) {
    btn.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    })
}

//Subscribe on condition type "email"

// document.querySelector('#emailField').addEventListener('keyup', function(event){
//     const value = event.target.value;
//     if(value == 'email'){
//         document.querySelector('.btn-subscribe').removeAttribute('disabled');
//     }
//     else{
//         document.querySelector('.btn-subscribe').setAttribute('disabled', true);
//     }
// })
//subcribe condition on "gmail.com"
    document.querySelector('#emailField').addEventListener('keyup', function(event){
        const value = event.target.value;
        const button = document.querySelector('.btn-subscribe');
        if(value.endsWith('gmail.com')){
            button.removeAttribute('disabled');
        }
        else{
            button.setAttribute('disabled', true);
        }
    })

    //change image on mouseenter

    const images = document.getElementsByTagName('img');
    for (const image of images) {
        let preSrc;
        image.addEventListener('mouseenter', function(event){
            preSrc = event.target.src;
            event.target.src = "images/IMG_9872.jpg";
        })
        image.addEventListener('mouseleave', function(event){
            event.target.src = preSrc;
        })
    }


//double click background change
document.getElementById('subscribe').addEventListener('dblclick', function(){
    document.getElementById('subscribe').style.backgroundColor = "green";
})