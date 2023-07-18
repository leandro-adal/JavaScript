const dataForm = document.querySelector(".titulo");

const data = new Date("2023-07-18 17:27:54");

const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemana(diaSemana);
const dia = data.getDate();
const mes = data.getMonth();
const mesTexto = getMes(mes);
const ano = data.getFullYear();
const hora =  ZeroAEsquerda(data.getHours());
const minuto =  ZeroAEsquerda(data.getMinutes());

dataForm.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${minuto}`;

function getDiaSemana(diaSemana) {
  switch (diaSemana) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda";
    case 2:
      return "Terça";
    case 3:
      return "Quarta";
    case 4:
      return "Quinta";
    case 5:
      return "Sexta";
    case 6:
      return "Sábado";
    default:
      return "";
  }
}

function getMes(mes) {
  switch (mes) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "Setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
    default:
      return "";
  }
}

function ZeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}
