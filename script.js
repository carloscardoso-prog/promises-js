let promessa = new Promise(function(sucesso, erro){
    // Chama a classe Promise, passa parametro de sucesso e erro pra servir como return
    let nome = "jao"

    if(nome == "Carlos"){
        sucesso("Meu nome é Carlos!"); // sucesso é retorno sem erro
    }else{
        erro("Meu nome não é Carlos :c"); // erro é retorno com erro (obviamente)
    } 

});

promessa.then(function(e){ //.then é uma função da classe Promise que inicia a promessa. o parametro "e" é o retorno da promessa
    console.log(e);
});

// then encadeado

let promessa2 = new Promise(function(sucesso, erro){
    
    let nome = "Carlos"

    if(nome == "Carlos"){
        sucesso("Meu nome é Carlos!");
    }else{
        erro("Meu nome não é Carlos :c");
    } 

});

promessa2.then(function(e){
    return e.toLowerCase();
}).then(function(retornoCaixaBaixa){
    console.log(retornoCaixaBaixa);
});

// then catch

let promessa3 = new Promise(function(sucesso, erro){
    
    let nome = "Carloss"

    if(nome == "Carlos"){
        sucesso("Meu nome é Carlos!");
    }else{
        erro("Meu nome não é Carlos :c");
    } 

});

promessa3.then(function(e){
    console.log(e);
}).catch(function(erro){
    console.log("Deu erro!");
});