let plat = (function(){

    function getName(id){

        return plats[id].name;
    }

    function getIngredients(id){

        return plats[id].ingrédients;
    }

    function getPreparation(id){

        return  plats[id].preparation;
    }

    function getPrixPreparation(id){

        return plats[id].prixPreparation;
    }
    
    return{
        
        name(id){
            
            return getName(id);
        },

        ingredients(id){

            return getIngredients(id);
        },

        preparation(id){

            return  getPreparation(id);
        },

        prixPreparation(id){

            return getPrixPreparation(id);
        }

    }
})();
