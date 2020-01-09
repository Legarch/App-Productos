
class producto {

    constructor(nombre, precio, año){
      
    this.nombre= nombre ; 
    this.precio=precio; 
    this.año= año ;

    }


}

class interfax{
   
  agregarProducto (producto) {

   const productoLista= document.getElementById('lista-producto');

   const element = document.createElement('div') ; 
   
   element.innerHTML= `

   <div class="card text-center mb-4">

      <div clas="card-body">
      
       
            <strong>Nombre Producto</strong>: ${producto.nombre}
            <strong>Precio Producto</strong>: ${producto.precio}
            <strong>Año Producto</strong>: ${producto.año}
            <a href="#" class="btn btn-danger" name="delete">Delete</a>
            
      </div>

   
   
   </div>
   
    
   `;


   productoLista.appendChild(element);
   
  }

  resetForm(){

    document.getElementById('producto-form').reset();


  }
  eliminarProducto(element){


 if(element.name ==='delete'){


    element.parentElement.parentElement.remove();

    this.mostrarMensaje('Producto eliminado con exito', 'danger');



 }
    
  }

  mostrarMensaje(mensaje, cssClass){

  const div = document.createElement('div');
  div.className = `alert alert-${cssClass} mt-2`;
  div.appendChild(document.createTextNode(mensaje));

  //Mostramos en el DOM

 const container = document.querySelector('.container');
 const app = document.querySelector('#App');

 
 //AGREGAMOS EL MENSAJE EN LA IU
 
 
 container.insertBefore(div,app);

 setTimeout(function(){
   document.querySelector('.alert').remove();
 },3000);


  }

}

//Eventos del DOM


document.getElementById('producto-form').addEventListener('submit', function(e) {

const nombre=document.getElementById('nombre').value;
const precio = document.getElementById('precio').value;
const año = document.getElementById('año').value;

const product = new producto(nombre,precio,año);


const ui = new interfax ();

//VALIDACION DEL FORMULARIO

if(nombre==='' || precio==='' || año==''){

    return ui.mostrarMensaje('Por favor complete el formulario','danger');
    

}


//GUARDAMOS EL PRODUCTO



ui.agregarProducto(product);
ui.mostrarMensaje('Producto Agregado' , 'info') ; 
ui.resetForm();

e.preventDefault();


})


document.getElementById('lista-producto').addEventListener('click', function(e) {
          const ui = new interfax();
          ui.eliminarProducto(e.target);
          e.preventDefault();

})





