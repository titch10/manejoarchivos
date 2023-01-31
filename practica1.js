/*Se creará una instancia de la clase “ProductManager”
Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
Se llamará al método “addProduct” con los campos:
title: “producto prueba”
description:”Este es un producto prueba”
price:200,
thumbnail:”Sin imagen”
code:”abc123”,
stock:25
El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
*/

class productManager{
    #datos;
    baseDatos=[];
    constructor(title, description,price,thumbnail,code){
        this.agregar(title,description,price,thumbnail,code);
    }

    
    agregar=(title,descripcion,price,thumbnail,code)=>{
        this.baseDatos.push({
            title,
            descripcion,  
            price, 
            thumbnail, 
            code, 
            stock:this.baseDatos.length+1
    });
    }
    
    
    
    getProducts=()=>{
        console.log(this.baseDatos);
    }

    getProductsById=(id)=>{

       let dato=this.baseDatos.find((selector)=>selector.stock==id)
       if(dato===undefined)
       {
          console.log("error")
       }else{
             console.log(dato);
       }
                    
             
    }
     
    updateProduct=(id,title,descripcion,price,thumbnail,code)=>{
        let dato={
           title:title,
          descripcion:descripcion,  
          price:price,
          thumbnail:thumbnail, 
          code:code,
          stock:id
        }
        this.baseDatos[id-1]=dato;
     }
    
     deleteProduct=(id)=>{
        this.baseDatos.splice(id)
     }
    
}


let instancia1=new productManager('50 Sombras','Pelicula nopor','500 pesos','5 estrellas','jda8ua2uda2')



instancia1.agregar('Pepe el grillo','Pelicula cool','344 pesos','2 estrellas','18289c2e')
        



console.log("Prueba")
instancia1.updateProduct(1,'Santiago','Mainstream','200 pesos','1 estrellas','jdaDawd2uda2');


instancia1.deleteProduct(1);


console.log(instancia1.getProducts())


