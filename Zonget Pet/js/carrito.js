let user = sessionStorage.getItem("nombre");;
let correo = sessionStorage.getItem("correo");

if(user === null || correo === null){
    do{
        if(user == null){
            user = prompt("Por favor ingrese su nombre");
        }
        if(correo == null){
            correo = prompt("Por favor ingrese su correo");
        }
        
    }while(user === null || correo === null);
    sessionStorage.setItem("nombre",user);
    sessionStorage.setItem("correo",correo);
}

let codigo = `
<section class="CP">
<form id="form">
    <h1>Carrito de Compras</h1>
    <br>
    <h3>Bienvenido/a ${user}, por el momento nuestro sistema de compra a domicilio esta en espera, pero puedes cotizar nuestros productos y luego contactarnos.</h3>
    <br>
    <select id="productos">
    <option value="null">Selecciona un articulo</option>`;
document.write(codigo);
for(producto in productos){
    let option = `<option value="${producto}">${productos[producto][0]}</option>`;
    document.write(option);
}

let codigoo = `
    </select>
    <br>
    <input type="number" min="1" id="cant" placeholder="Cantidad de producto">
    <br>
    <input type="button" value="Comprar" id="btn" onclick="agregar()">
    <br>
</form>
</section>`;
document.write(codigoo);

for(producto in productos){
    if(window.sessionStorage.getItem(`${producto}`)){

        let code = `
        <section class="DC">
            <h2 id="rec">Compra</h2>
            <br>
            <form class="form">
                <p><b>Nombre:</b></p>
                <p class="rs">${user}</p>
                <p><b>Correo electrónico:</b></p>
                <p>${correo}</p>
                <p><b>Productos: </b></p>
                <ul>`;
                document.write(code);
        for(producto in productos){
            if(window.sessionStorage.getItem(`${producto}`) !== null && window.sessionStorage.getItem(`${producto}`)){
                let cantidad = sessionStorage.getItem(`${producto}`);
                let precio = productos[producto][1];
                let precioOriginal = (Math.round(precio * 100)/100).toFixed(2);
                precio *= cantidad;
                precio = (Math.round(precio * 100)/100).toFixed(2);
                let codeul = `<li>-${productos[producto][0]} <b>(${precioOriginal}$ x ${cantidad} =  ${precio}$)
                <input type="hidden" value="${producto}" id="notting">
                <input type="button" value="Eliminar" id="btnoption" onclick="eliminar()"></b></li>`;  
                document.write(codeul);
            }
        }
        let subto = 0;
        for(producto in productos){
            if(window.sessionStorage.getItem(`${producto}`) !== null && window.sessionStorage.getItem(`${producto}`)){
                let cantidad = sessionStorage.getItem(`${producto}`);
                let precio = productos[producto][1];
                precio *= cantidad;
                subto = (precio*1)+(subto*1);
            }
        }
        subto = (Math.round(subto * 100)/100).toFixed(2);

        let iva;
        let totalPagar;
        iva = subto * 0.13;
        totalPagar = (subto*1) + (iva*1);
        
        iva = (Math.round(iva * 100)/100).toFixed(2);
        totalPagar = (Math.round(totalPagar * 100)/100).toFixed(2);
        let codefin = `
                <p><b>Subtotal a pagar:</b></p>
                <p>${subto}$</p>
                <p><b>IVA de la compra:</b></p>
                <p>${iva}$</p>
                <p><b>Total a pagar:</b></p>
                <p>${totalPagar}$</p>
                <input type="button" value="Aceptar" id="btnReset" onclick="reinicio()">
            </form>
        </section>`;
        document.write(codefin);
        break;
    }
}

function agregar(){
    let tproduct = document.getElementById("productos").value;
    let cant = document.getElementById("cant").value;
    if(tproduct >= 0){
        if(cant > 0){
            for(producto in productos){
                if(window.sessionStorage.getItem(`${producto}`) !== null && window.sessionStorage.getItem(`${producto}`)){
                    let valor = sessionStorage.getItem(`${producto}`);
                    Number(valor);
                    Number(cant);
                    valor = (valor*1)+(cant*1);
                    if(producto == tproduct){
                        sessionStorage.setItem(`${tproduct}`,valor);
                        document.getElementById("cant").value = 0;
                        alert("Los cambios se han registrado con exito");
                        location.reload();
                    }
                }
            }
            if(window.sessionStorage.getItem(`${tproduct}`) === null){
                sessionStorage.setItem(`${tproduct}`,cant);
                document.getElementById("cant").value = 0;
                alert("Tu producto se ha registrado con exito");
                location.reload();
                
            }
        }else{
            alert("Deber agregar una cantidad valida");
        }
    }else{
        alert("Debe agregar un producto");
    }
}

function eliminar(){
    let borrar = document.getElementById("notting").value;
    sessionStorage.removeItem(borrar);
    alert("Producto eliminado exitosamente");
    location.reload();
}

function reinicio(){
    alert("Gracias por preferirnos");
    sessionStorage.clear();
    window.location.href = "productos.html";
}
