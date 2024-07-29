function abrir(){


document.getElementById('desplegar').style.display = "flex"


}


function cerrar(){


    document.getElementById('desplegar').style.display = "none"
    
    
    }


    function abrirModal(){


        document.getElementById('modal').style.display = "flex"
        
        
        }
        
        
        function cerrarModal(){
        
        
            document.getElementById('modal').style.display = "none"
            
            
            }
           


window.addEventListener('scroll', function(){

let animacion = document.querySelectorAll(".animado");

for (let i = 0; i < animacion.length; i++) {
    let posicionObj1 =  animacion[i].getBoundingClientRect().top;

    let tamañoPantalla = window.innerHeight/3;
    if (posicionObj1 < tamañoPantalla){
    
    
        animacion[i].style.animation= 'mover 2s ease-out';
    }
    
}




    })