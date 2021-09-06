var boton = document.getElementById('guardarLibro');
var contador = 1;
//arrays del formulario
var isbn = [];
var titulo = [];
var nombre = [];
var apellido =[];
var categoria = [];
var precio = [];
var url = [];
// campos del formulario
var txtIsbn = document.getElementById('isbn');
var txtTitulo = document.getElementById('txttitulo');
var txtNombre = document.getElementById('txtnombre');
var txtApellido = document.getElementById('txtapellido');
var txtCategoria = document.getElementById('txtcategoria');
var txtPrecio = document.getElementById('txtprecio');
//Contenedor de cartas
var contenedorCartas = document.getElementById("contenedorCartas");

//input file
var inputBox = document.getElementById("seleccionArchivos");

boton.onclick = function() {
    if(txtIsbn.value == "" || txtTitulo.value == "" || txtNombre.value =="" || txtApellido.value == "" || txtCategoria.value == "" || txtPrecio.value == "" || inputBox.value == ""){
        alert("Llenar todos los campos");
    }else{
        var html = "";
        var urlImagen = "";
        //Ingresando los datos al array 
        isbn.push(txtIsbn.value);
        titulo.push(txtTitulo.value);
        nombre.push(txtNombre.value);
        apellido.push(txtApellido.value);
        categoria.push(txtCategoria.value);
        precio.push(txtPrecio.value);
        
        //Obtenemos la ruta de la imagen
        var reader = new FileReader();
        reader.readAsDataURL (inputBox.files [0]);
        reader.onload = function(){
            url.push(this.result);
            //For para mostrar las cartas 
            for(i=0; i < contador; i++){
                html += "<div class='col-md-4 mb-5'>";
                    html += "<div class='card shadow p-3 bg-white rounded'>";
                        html += "<img class='card-img-top' id='prueba' src='" + url[i] + "' alt='Card image cap'>";
                        html += "<div class='card-body'>";
                            html += "<strong><p class='card-text text-justify'>ISBN: " + isbn[i] +"<br>Titulo: " + titulo[i] + "<br>Nombre: " + nombre[i] + "<br>Apellido: " + apellido[i] +"<br>Categoria: " + categoria[i] + "<br>Precio: $" + precio[i] + "</p>";
                        html += "</div>";
                    html += "</div>";
                html += "</div>";
            }
            contenedorCartas.innerHTML = html;
            contador = contador + 1;
        }
        txtIsbn.value = ""; 
        txtTitulo.value = ""; 
        txtNombre.value = "";
        txtApellido.value = ""; 
        txtCategoria.value = ""; 
        txtPrecio.value = "";
        inputBox.value = "";
    }
}