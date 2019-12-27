let addIngredients = (function(){
       
    var validate = document.getElementById('button');

    validate.addEventListener('click', event => {
        
        let name = document.getElementById('name').value;
        let prix = document.getElementById('prix').value;
        let local = document.getElementById('local').value;
        let alert = document.createElement('p');
        let message = document.getElementById('alert');

        if(name != null && prix > 0){

            let newIngredient = {"idIng:": (ingredients.length), "name:":name, "local:": (local == 0 ? "1":"0"), "prix:": prix};
            ingredients.push(newIngredient);
            console.log(ingredients);

            alert.textContent = name + ' (Local: ' + local + ', price: ' + prix + '€)' + " added to the list";
            message.appendChild(alert);
        }
        else{
            alert.textContent = "Your ingredient is not valid";
            message.appendChild(alert);
        }
    });
})();