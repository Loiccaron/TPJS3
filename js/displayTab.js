let displayTab = (function(){

    function tab(){
        for(let i = 0; i < plats.length; i++){

            displayLine.outDisplayLine(i);
        }
    }

    return{

        outTab(){
            
            tab();
        }
    }
})();