let search = (function(){
       
    var input = document.getElementById('searchbar');

    input.addEventListener('keyup', event => {
        
        let string = input.value.toUpperCase();
        let tab = document.getElementById('tab')
        let len = tab.getElementsByTagName('tr').length;

        for(let i = 1; i < len; i++){
            
           tab.deleteRow(1);
        }

        for(let i = 0; i < plats.length; i++){
            
            if(((plat.name(i)).toUpperCase().indexOf(string)) != -1){

                displayLine.outDisplayLine(i);
            }
        }
    });
})();