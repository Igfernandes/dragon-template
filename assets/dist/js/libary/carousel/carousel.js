/**
 PROJETC: Carousel 
 DEVELOPER: IGOR FERNANDES
 DATE: 18/02/2021
 */


import * as main from '../main/main.js';


/**
 *  STRUCT BASE 
 */

var qtd = 1;
var md = -10;
var nm = 0;
var turn = 'off';
var turn2 = "off";

 document.addEventListener("DOMContentLoaded", function(event) {

    var map = main.$find('.dragon_carousel-inner')
    var item = main.$find('.dragon_carousel-item', 'all')
    var prev = main.$find('.dragon_carousel-controls-prev')
    var next = main.$find('.dragon_carousel-controls-next')
    
    next.addEventListener('click', (event) =>{
        
        prev.style = "display: block";
        if(qtd < item.length){
            md += item[0].offsetWidth;
            item[nm].classList.add('carousel_active');
            nw = nm + 1;
            item[nw].classList.remove('carousel_active');
            
            if(nm >= 1){
                var nw = nm - 1;
                item[nw].classList.remove('carousel_active');
            }
            qtd++;
            nm++;
            

            if(qtd == item.length){
                if(turn == 'off'){
                    md += 20
                    turn = 'on';
                    turn2 = 'off';
                }
                next.style = "display: none";
            }

            map.style="transform: translate3d(-"+(md)+"px, 0px, 0px)";
        }
        
    })

    if(qtd == 1){
        prev.style = "display: none";
    }
    
    prev.addEventListener('click', (event) =>{
        next.style = "display: block";
       if(qtd <= item.length){
            md -= item[0].offsetWidth
            map.style="transform: translate3d(-"+(md)+"px, 0px, 0px";
            item[nm].classList.toggle('carousel_active');
            nm--
            item[nm].classList.remove('carousel_active');
            if(turn2 == 'off'){
                md -= 20
                turn2 = 'on';
                turn = 'off'
            }
       }
       qtd--;
       if(qtd == 1){
        prev.style = "display: none";
        }
    
    })
 });
