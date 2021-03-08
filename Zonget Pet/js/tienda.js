for(producto in productos){
    if(producto == 0 || ((producto%2) == 0)){
        let inicio = `<div class="row">`;
        document.write(inicio);
    }
    let convert = parseFloat(`${productos[producto][1]}`);
    let precio = (Math.round(convert * 100)/100).toFixed(2);
    let codigo = `
    <div class="col-12 col-md-6">
        <div class="item shadow mb-4">
            <img class="item-image" src="img/Tienda/${productos[producto][3]}" width="350" height="250">
            <h3 class="item-title">${productos[producto][0]}</h3>
            <div class="item-details">
                <h4 class="item-price">${precio}$</h4>
                <a href="carrito.html" class="item-button btn btn-primary addToCart">Ir al carrito</a>
            </div>
        </div>
    </div>`;
    document.write(codigo);
    if(producto%2 != 0){
        let final = `</div>`;
        document.write(final);
    }
    let funcion = `
    <Script>function envio${producto}(){
        var valor = "${producto}";
        if(nombre === undefined && correo ===   undefined || nombre === null && correo ===   null){
            nombre = prompt("Ingrese su Nombre");
            correo = prompt("Ingrese su Correo");
            localStorage.setItem("valor",valor);
            localStorage.setItem("nombre",nombre);
            localStorage.setItem("correo",correo);
            carrito = [];
        }else{
            localStorage.setItem("valor",valor);

        }
    }</script>`

document.write(funcion);
}


