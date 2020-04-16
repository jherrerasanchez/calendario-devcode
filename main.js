var mes_text = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

estructurar();

function estructurar() {
  for (m = 0; m <= 11; m++) {
    //Mes
    let mes = document.createElement("DIV");
    mes.className = "mes";
    document.body.appendChild(mes);
    //Tabla
    let tabla_mes = document.createElement("TABLE");
    tabla_mes.className = "tabla_mes";
    mes.appendChild(tabla_mes);
    //Título
    let titulo = document.createElement("CAPTION");
    titulo.className = "titulo";
    titulo.innerText = mes_text[m];
    tabla_mes.appendChild(titulo);
  }
}