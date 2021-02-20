/* 
    COMANDS
*/

import * as main from './main/main.js';




document.addEventListener("DOMContentLoaded", function(event) {

    //NAVBAR TOP

    var scrollTop 
    window.addEventListener('scroll', (event)=>{

        var escopo = main.$find('[data-sticky]');
        var resp = escopo.dataset.sticky;
        if(window.scrollY >= 400){
            if(window.scrollY < scrollTop){
                escopo.dataset.sticky = "on";
            }else if(window.scrollY > scrollTop && resp == 'on'){
                escopo.dataset.sticky = "off";
            }

        }else if(window.scrollY < 400){
            if(resp == 'on'){
                escopo.dataset.sticky = "off";
            }
           
        }

        scrollTop = window.scrollY;
    });

    
    // CURT ANIMATION

    var loc = main.$find('[data-curt]')

    var el = loc.dataset.curt
    if(el == '' || el == null){
        var item = loc
    }else{
        var item = main.$find('[data-curt] '+el, 'all')  
        for(var itens of item){
            itens.innerHTML += '<span></span>'
            itens.addEventListener('mouseleave', eventCurt)
            itens.addEventListener('mouseenter', eventCurt)
        }
 
    }

    function eventCurt(){
            
        var x = this.children[1]
        var res = x.classList.contains('scarllet_curt-on')
        var pa = this.classList.contains('active')
        if(pa == false){
            if(res == true){
                x.classList.remove('scarllet_curt-on')
                x.classList.add('scarllet_curt-off')
            }else{
                x.classList.remove('scarllet_curt-off')
                x.classList.add('scarllet_curt-on')
            }
        }else{
            return false;
        }
        
    }


    // ICON CLOSE GIRO

    main.$action(
        '.icon-close',
        'mouseleave',
        'mouseenter',
        eventGiro,
        eventGiro
    );

    //var menu = main.$find('.dragon_development-navbar li', 'all')

    function eventGiro(){
            
        var res = this.classList.contains('scarllet_spin-on')
        if(res == true){
            this.classList.remove('scarllet_spin-on')
            this.classList.add('scarllet_spin-off')
        }else{
            this.classList.remove('scarllet_spin-off')
            this.classList.add('scarllet_spin-on')
        }
        
    }


    // SIDEBAR 

    var close = main.$find('.icon-close')
    var toggle = main.$find('.button-toggle', 'all')
    
    for(var iten of toggle){
       iten.addEventListener('click', sideBar)
    }
    close.addEventListener('click', sideBar)
    

    /*
    main.$togggleClass(
        'button-toggle',
        'scarllet_sidebar-on,scarllet_edge-off',
        'scarllet_sidebar-off,scarllet_edge-on'

    )*/
    

    function sideBar(){
        
        var sidebar = main.$find('.dragon_development-sidebar')
        var edge = main.$find('.dragon_development-edge')
        var resp = this.classList.contains('button-toggle')
        if(resp == true){
            sidebar.classList.remove('scarllet_sidebar-on')
            sidebar.classList.add('scarllet_sidebar-off')
            edge.classList.remove('scarllet_edge-off')
            edge.classList.add('scarllet_edge-on')
        }else{
            sidebar.classList.remove('scarllet_sidebar-off')
            sidebar.classList.add('scarllet_sidebar-on')
            edge.classList.remove('scarllet_edge-on')
            edge.classList.add('scarllet_edge-off')
        }
    }


    //EVENT UP CLOSE

    window.addEventListener('scroll', (event) =>{

        var sidebar = main.$find('.dragon_development-sidebar')
        var edge = main.$find('.dragon_development-edge')
  
        var resp = sidebar.classList.contains('scarllet_sidebar-off')
        if(resp == true){
            sidebar.classList.remove('scarllet_sidebar-off')
            sidebar.classList.add('scarllet_sidebar-on')
            edge.classList.remove('scarllet_edge-on')
            edge.classList.add('scarllet_edge-off')
        }
  
    })


    // CLICK IN EDGE 
    var edge = main.$find('.dragon_development-edge')

    edge.addEventListener('click', (event) =>{
        var sidebar = main.$find('.dragon_development-sidebar')

        var resp = sidebar.classList.contains('scarllet_sidebar-off')
        if(resp == true){
            sidebar.classList.remove('scarllet_sidebar-off')
            sidebar.classList.add('scarllet_sidebar-on')
            edge.classList.remove('scarllet_edge-on')
            edge.classList.add('scarllet_edge-off')
        }
        
      
    })



    //SWICHT ITENS 

    var loc = main.$find('.dragon_development-section-list li', 'all');
  
    for(itens of loc){
        itens.addEventListener('click', listMartchs)
    }
    
    function listMartchs(){
        var name = this.dataset.name
        var active = main.$find('.on')
        console.log(active.classList.remove('on'))

        this.classList.add('on')


        if(name == 'progress' || name == 'finished'){

            var objects = main.$find('[data-status]', 'all')
            for(itens of objects){

                var value = itens.dataset.status

                if(value == name){
                    itens.style="display:static"
                }
                else{
                    itens.style="display:none"
                    
                }
            }
        }else if( name == 'all'){
            var objects = main.$find('[data-status]', 'all')
            for(itens of objects){

                itens.style="display:static"
            }

        }else{
            var name = this.dataset.name

            var objects = main.$find('[data-categ]', 'all')
            for(itens of objects){

                var value = itens.dataset.categ

                if(value == name){
                    itens.style="display:static"
                }
                else{
                    itens.style="display:none"
                    
                }
            }  
           
        }
        
    }



    //BTN TO TOP

    var status = 0

    window.addEventListener('scroll', (event) =>{


        if(window.scrollY > 500 && status == 0){
            var div = document.createElement('div')
            div.classList.add('btnScroll')
            var a = document.createElement('a')
            a.href="#totop"
            a.classList.add('btnScroll_ToTop')
            div.appendChild(a)

            document.body.appendChild(div)
            status = 1;
        }else if(window.scrollY < 500 && status == 1){
            var btn = main.$find('.btnScroll')
            btn.remove()
            status = 0;
        }
    })

});



