let ingredient = (function(){

    function getPrix(id){

        return ingredients[id].prix;
    }

    function getName(id){

        return ingredients[id].name;
    }

    function getLocal(id){

        return ingredients[id].local;
    }

    return{

        prix(id){

            return getPrix(id);
        },

        name(id){

            return getName(id);
        },

        local(id){

            return getLocal(id);
        }
    }
})();