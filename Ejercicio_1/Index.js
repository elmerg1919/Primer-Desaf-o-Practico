let rows = parseInt(prompt("introduce el numero de filas"));
let columns = parseInt(prompt("introduce el numero de columnas"));

$(document).ready(function () {
  
     
    function geraNumeroAleatorio(min, max) {
        var valor = Math.round(Math.random() * (max - min) + min);;        
        return valor = parseFloat(valor.toFixed(2));    // arredondar com 2 casas decimais
    }   
    
     matrizFila = new Array(rows);
     matrizColumna = new Array(columns);
     mayor = null;
     menor = null;
    
    // gera a mtriz com numeros aleatorios e exibe
    for (var i = 0; i < matrizFila.length; i++) {
        for (var j = 0; j < matrizColumna.length; j++) {
          matrizFila[i] = new Array     
          matrizFila[i][j] = geraNumeroAleatorio(i+22,i+34.5)

    
    
            if (matrizFila[i][j]>mayor || mayor == null)
                mayor = matrizFila[i][j];
    
            if (matrizFila[i][j]<menor || menor == null)
                menor = matrizFila[i][j];

            $("<tr id='" +i + "' >"+ matrizFila[i][j] + "</tr>").appendTo('#Tabla') ; 
            $("<td>"+ matrizFila[i][j] + "</td>").appendTo('#' + i) ;
 
    
        }    
    }   


    
    
        $('.visor').val("Numeros Mayor: " + mayor); 
        $('.visor2').val("Numeros Menor: " + menor);        
   
    
   
    
    });
    document.write("<article>");
    document.write("<section>");
    document.write("<h3>Numero mayor " + mayor + "</h3>");
    document.write("<h3>Numero menor " + menor + "</h3>");
    document.write("</article>");
    document.write("</section>");