/* objects */
var prices ={
    lemon:5,
    radish:3,
    broccoli:5,
    eggplant:4,
    tomato:7,
    apple:5,
    carrot:2,
    watermelon:2.5,
    cherry:8,
    potato:2,
    corn:1.3,
    strawberry:7,
    zucchini:6,
    cabbage:5,
    apricot:8,
    lime:6,
    leek:8 ,
    pear: 9,
    grapes:5 ,
    pineapple:7 ,
    squash: 7,
    cauliflower:2 ,
    sweet_potato:2 ,
    garlic: 1,
    plum: 4,
    oak:7 ,
    lettuce:.5 ,
    peas: 1,
    onion: 0.8,
    pomegranate: 1,
    coconut: 7,
    mango: 2,
    pepper: 7,
    olives:8 ,
    cucumber:1.5 ,
    kiwi: 8.5,
    asparagus:7.5 ,
    pumpkin: 1.4,
    chili:1.4 ,
    horseradish:4 ,
    beetroot: 5,
    blueberry: 6.3,
    honey: 15,
    bread: 0.2,
    spinach: 0.5,
    bacon: 9.5,
    meat: 20,
    beer: .7,
    cheese: 5,
    chicken: 15,
    tea: 2,
    olive_oil:10 ,
    tangerine: 0.5,
    avocado: 7.5,
    mushroom: 6,
    ribs: 21,
    meatballs: 20.5,
    salmon: 16.7,
    banana: 6,
    sugar: 1,
    egg: 1.25,
    cookies: 1.5,
    cake: 2,
    cream: 1.5,

}
var quantities = {}

/* HTML collections*/
var inputs =document.getElementsByClassName('number');
var trash = document.getElementsByClassName('fa-trash');
var hearts = document.getElementsByClassName('fa-heart');
var edits = document.getElementsByClassName('fa-edit');
var plus = document.getElementsByClassName('fa-plus');
var minus = document.getElementsByClassName('fa-minus');


/*caluculate total*/
function total(){
    var sum = 0;
    for(let i = 0 ; i < inputs.length;i++){
        var itm = inputs[i].getAttribute('name');
        sum += Number(quantities[itm])*prices[itm];

    }
    document.getElementById('total').value = sum+'DT';  
}



/*filling quantities */
for(let i = 0; i < inputs.length; i++){
    var elid =inputs[i].getAttribute('name');
    quantities[elid]=inputs[i].value;
}

/* add and minus button */
for (let i = 0; i < plus.length; i++){
    plus[i].addEventListener('click',function(){
        inputs[i].value++; 
        quantities[plus[i].parentElement.getAttribute('id')]=inputs[i].value
        total()
    });
}
for (let i = 0; i < minus.length; i++){
    minus[i].addEventListener('click',function(){
        if(inputs[i].value != 0){
            inputs[i].value--;
            quantities[minus[i].parentElement.getAttribute('id')]=inputs[i].value
            total()
        }
    });
}

/* adding an output updated on change of inputs */  
total();   
for(let i = 0 ; i < inputs.length;i++){
    inputs[i].addEventListener('change',function(){
        for(let i = 0; i < inputs.length; i++){
            var elid =inputs[i].getAttribute('name');
            quantities[elid]=inputs[i].value;
        }
        total();   
    })
}


/* like and inlike*/
for (let i = 0; i < hearts.length; i++){
    hearts[i].addEventListener('click',function(){
        if(hearts[i].classList.contains('fas')){
            hearts[i].classList.replace('fas','far');
            hearts[i].parentElement.classList.remove('liked');

        }else{
            hearts[i].classList.replace('far','fas');
            hearts[i].parentElement.classList.add('liked');
        }
        
    })
}

/*delete => change value to 0 ,
            update quantities object
            update total bar
*/

for (let i = 0; i < hearts.length; i++){
    trash[i].addEventListener('click',function(){
        inputs[i].value = "0";
        quantities[inputs[i].getAttribute('name')]="0";
        total();   

    })
}






