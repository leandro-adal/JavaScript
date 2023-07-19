let data = new Date("2023-07-18 17:27:54"); // Ano/Mês(1-12)/Dia/Hora/Minutos/Segundos/Milissegundos
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
  case 0:
    diaSemanaTexto = "Domingo";
    break;
  case 1:
    diaSemanaTexto = "Segundo";
    break;
  case 2:
    diaSemanaTexto = "Terça";
    break;
  case 3:
    diaSemanaTexto = "Quarta";
    break;
  case 4:
    diaSemanaTexto = "Quinta";
    break;
  case 5:
    diaSemanaTexto = "Sexta";
    break;
  case 6:
    diaSemanaTexto = "Sábado";
    break;
  default:
    diaSemanaTexto = "";
    break;
}
console.log(diaSemana, diaSemanaTexto);
