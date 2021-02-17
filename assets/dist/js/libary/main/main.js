
/* 
    JS CAPTURE
*/


function $find($x, $y){
    if($y == 'all'){
        var loc = document.querySelectorAll($x);
        return loc;
    }else{
        var loc = document.querySelector($x);
        return loc; 
    }
    
};



/* 
    JS INCLUDE ELEMENTS
*/ 


function $classAdd($x, $y){
    find($x).classList.add($y)
};


function $action($action, $req, $resp, $funReq, $funResp){

    var loc = $find($action)

    loc.addEventListener($req, $funReq)
    loc.addEventListener($resp, $funResp)

}

function $togggleClass($loc,$variante, $remove, $add){
    var loc = $find($loc)
    var resp = loc.classList.contains($variante)
    if(resp == true){
        var itensRev = $remove.split(',')
        var itensAdd = $add.split(',')
        for(var itens of itensAdd){
            var obj = $find("."+itens)
                obj.classList.add(itens)
            }
        for(var itens of itensRev){
            var obj = $find("."+itens)
            alert(obj+"    + "+itens)
            obj.classList.remove(itens)
        }
    }else{
        for(var itens of itensRev){
            $find(itens).classList.add(itens)
        }
        for(var itens of itensAdd){
            itens.classList.remove(itens)
        }
    }
}


export {
    $find,
    $classAdd,
    $action,
    $togggleClass
}
