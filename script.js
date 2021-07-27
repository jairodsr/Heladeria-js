//console.log("Hola mundo");
let opcion = 0;
let vHelados = [];
let vVentas = [];

do{
    opcion = mostrarMenu();
    switch(opcion){
        case 1: agregarHelado();
        console.log(vHelados);
        break;

        case 2: modificarHelado();
        
        break;

        case 3: eliminarHelado();
        
        break;

        case 4: mostrarInventario();
        
        break;

        case 5: realizarVenta();
        
        break;

        case 5: salir();
        
        break;
    }
}while(opcion !== 6); 

function mostrarMenu() {
    const mensaje = `
    Escriba el número que corresponda a la acción
    que desea realizar en el sistema:
    1. Agregar un helado
    2. Modificar un helado
    3. Eliminar un helado
    4. Mostrar inventario
    5. Realizar venta
    6. Salir del sistema`;
    return parseInt(prompt(mensaje));
}

function agregarHelado(){
    let nombre=prompt("Nombre del helado")
    let sabor=prompt("Sabor del helado")
    let cantidad=parseInt(prompt("Cantidad de inventario"))
    let precio=parseInt(prompt("Valor unitario"))
    nHelado= new helado(nombre,sabor,cantidad,precio)
    vHelados.push(nHelado)
}

function helado(nombre,sabor,cantidad,precio){
    this.nombre=nombre
    this.sabor=sabor
    this.cantidad=cantidad
    this.precio=precio
}

function eliminarHelado(){
    let mensaje = `Ingrese el numero (indice) de Helado a eliminar:\n `
    for(let i=0; i<vHelados.length;i++){
        mensaje +=  `\n ${i}: ${vHelados[i].nombre} \n`
    }
    let mensajeF = parseInt(prompt(mensaje))
    vHelados.splice(mensajeF,1)
}


function mostrarInventario(){
    let mensaje = `\n El inventario es : \n `
    for(let i=0;i<vHelados.length;i++){
        mensaje += `\n ${i} => Nombre:  ${vHelados[i].nombre}  , Sabor: ${vHelados[i].sabor}, Cantidad: ${vHelados[i].cantidad}, Valor: S/ ${vHelados[i].precio} soles \n `
    }
    alert(mensaje)
}


function modificarHelado(){
    let mensaje = `Ingrese el numero (indice) del Helado a modificiar: `
    for(let i=0;i<vHelados.length;i++){
        mensaje +=`\n ${i} => ${vHelados[i].nombre} \n`
    }
    let n=prompt(mensaje)
    let helado=vHelados[n]
    let nombre=prompt(`Nombre: ${helado.nombre}`, helado.nombre)
    let sabor=prompt(`Sabor: ${helado.sabor}`, helado.sabor)
    let cantidad=parseInt(prompt(`Cantidad: ${helado.cantidad}`,helado.cantidad))
    let precio=parseInt(prompt(`Valor: ${helado.precio}`,helado.precio))

    vHelados[n]={ nombre, sabor, cantidad, precio }
}


function realizarVenta(){
    let mensaje= `\n Ingrese  el numero (indice) de Helado a vender: \n`
    for(let i=0; i<vHelados.length;i++){
        mensaje += `\n ${i} => Nombre:  ${vHelados[i].nombre}  , Sabor: ${vHelados[i].sabor}, Cantidad: ${vHelados[i].cantidad}, Valor: S/ ${vHelados[i].precio} soles \n `
    }
    let n=parseInt(prompt(mensaje))
    let cantidad_compra =Number(prompt(`Ingrese cantidad a comprar:  \n-stock actual: ${vHelados[n].cantidad}`))

    if(cantidad_compra>vHelados[n].cantidad){
        alert(`El stock actual es de ${vHelados[n].cantidad}, ! ERROR !`)
    }else{
        let montoPagar = vHelados[n].precio*cantidad_compra
        alert(`venta ! EXITOSA !, el costo total es: ${montoPagar} soles `)
        
        cantidad_compra -=  vHelados[n].cantida
         /*
        vVentas.push({
            nombre: vHelados[n].nombre,
            cantidad: cantidad_compra
        }) */

    }
}
