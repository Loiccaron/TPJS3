 let displayLine = (function(){

    function displayName(id, line){

        //Create a box for the name
        let nom = document.createElement('th');
        nom.textContent = plat.name(id);
        line.appendChild(nom);
    }

    function displayTime(id, line){

        //create a box for the preparation time
        let prep = document.createElement('th');
        prep.textContent = plat.preparation(id);
        line.appendChild(prep);
    }

    function displayPreparationTime(id, line){

        //To display the price of the preparation
        let preparationPrice = document.createElement('th');
        preparationPrice.textContent = plat.prixPreparation(id);
        line.appendChild(preparationPrice);
    }

    function displayIngredients(id, line){

        //Create a box with all the ingredients
        let ingredients = document.createElement('th');
        let ingredientsTab = plat.ingredients(id);
        let p = document.createElement('p');

        for(let i = 0; i < ingredientsTab.length; i++){
    
            p.innerHTML += ingredient.name(ingredientsTab[i]);
            
            if(i !=  ingredientsTab.length - 1){
               p.innerHTML += ', ';
            }
        }

        ingredients.appendChild(p);
        line.appendChild(ingredients);
    }

    function displayLocal(id, line){

        //To display the local ingredients
        let local = document.createElement('th');
        let ingredientsTab = plat.ingredients(id);
        let p = document.createElement('p');
        let cpt = 0;

        for(let i = 0; i < ingredientsTab.length; i++){

            if(ingredient.local(ingredientsTab[i]) == 1){

                if(cpt == 0){
                        
                    p.innerHTML += ingredient.name(ingredientsTab[i]);
                }
                if(cpt != 0){
                        
                    p.innerHTML += ', ';
                    p.innerHTML += ingredient.name(ingredientsTab[i]);
                }

                cpt++;
            }
        }

        local.appendChild(p);
        line.appendChild(local);

    }

    function displayPrice(id, line){

        //To display the total price (preparation price + ingredients prices)
        let price = 0;
        let totalPrice = document.createElement('th');
        let ingredientsTab_ = plat.ingredients(id);

        for(let i = 0; i < ingredientsTab_.length; i++){

            price += parseFloat(ingredient.prix(ingredientsTab_[i]));
        }

        price += parseFloat(plat.prixPreparation(id));

        totalPrice.textContent = price;
        line.appendChild(totalPrice);
    }

    function displayLine(id){ //To display a line with all the details about the plate depending on the id

        let tab = document.getElementById('tab'); //Search the tab
        let line = document.createElement('tr'); //Create a line for the tab

        displayName(id, line);
        displayTime(id, line);
        displayIngredients(id, line);
        displayLocal(id, line);
        displayPreparationTime(id, line);
        displayPrice(id, line);
        
         tab.appendChild(line);
    }

    return{

        outDisplayLine(id){
            
            displayLine(id);
        }
    }

})();