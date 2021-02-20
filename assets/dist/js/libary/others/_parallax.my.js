
import * as main from '../main/main.js';

//Insert Background-position
var scrollUp;
var start = 0;
var $scroll = 0; 

window.addEventListener('scroll', (event) =>{
    
    var loc = main.$find('.dragon_wallpaper-about');

    if(window.scrollY < scrollUp){
        if(start < 0){
            
            for(var x = 0; x < 3; x++){
                $scroll = start++; 
            }
            if($scroll > 0 || window.scrollY == 0){
                $scroll = $scroll / 2;
            }
            loc.style="transition: backgroud-position .5s;background-position: 50% "+$scroll+"px;";
        }

    }else if(window.scrollY > scrollUp){
        if(start >= -400){
            for(var x = 0; x < 2; x++){
                $scroll = start--; 
            }
            loc.style="background-position: 50% "+$scroll+"px;";
        }
    }

    console.log(window.scrollY)
    scrollUp = window.scrollY;
    
})