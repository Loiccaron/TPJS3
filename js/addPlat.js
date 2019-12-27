let addPlat = (function(){
       
    var validate = document.getElementById('button');

    validate.addEventListener('click', event => {
        
        let container = document.getElementById('checkbox')
        let name = document.getElementById('name').value;
        let prix = document.getElementById('prix').value;
        let preparation = document.getElementById('preparation').value;
        let alert = document.createElement('p');
        let message = document.getElementById('alert');

        if(name != null && prix > 0 && preparation > 0){ //Pour creer les checkBox pour afficher les ingredients dispo et les selectionner
                                                         // mais je n'ai pas reussi dans le temps imparti
            /*for( let i = 0; i < ingredients.length; i++){

                let ingredients = null;

                var checkbox = document.createElement('input');
                checkbox.type = "checkbox";
                checkbox.name = ingredients.name(i);
                checkbox.value = "ingredient";
                checkbox.id = "id";

                var label = document.createElement('label')
                label.htmlFor = "id";
                label.appendChild(document.createTextNode(ingredient.name(i)));

                container.appendChild(checkbox);
                container.appendChild(label);
            }*/

            let newDish = {"name:":name, "preparation:": preparation, /*"ingrédients:": ingredientsTab,*/ "prixPreparation:": prix};
            plats.push(newDish);
            console.log(plats);

            alert.textContent = name + " added to the list";
            message.appendChild(alert);
        }
        else{
            alert.textContent = "Your dish is not valid";
            message.appendChild(alert);
        }
    });
})();