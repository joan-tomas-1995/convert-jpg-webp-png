// PROYECTO DESPLEGADO EN NETLIFY
// https://stellular-profiterole-f43ef8.netlify.app/

const inputFile = document.getElementById("inputFile");
const preview = document.getElementById("preview");
const convertToWebpButton = document.getElementById("convertToWebp");
const convertToJpgButton = document.getElementById("convertToJpg");
const convertToPngButton = document.getElementById("convertToPng");
const downloadLink = document.getElementById("downloadLink");
const downloadButton = document.getElementById("downloadButton");
const message = document.getElementById("message");
const textoImagen = document.querySelector(".texto-imagen");
const errorImagen = document.querySelector(".error-imagen");

// Función para mostrar mensaje
function showMessage() {
  message.classList.add("show");
  setTimeout(function () {
    message.classList.remove("show");
  }, 3000);
}

// Función para convertir a WebP
function convertToWebp() {
  const file = inputFile.files[0];
  // SI NO HAY UNA FOTO CARGADA SE AVISA CON MENSAJE DE ERROR
  if (file == undefined) {
    errorImagen.style.visibility = "visible";
  } else {
    errorImagen.style.visibility = "hidden";
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    const img = new Image();
    img.src = reader.result;
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(function (blob) {
        const fileName = file.name.replace(/\.[^/.]+$/, ""); // Obtener el nombre del archivo sin la extensión
        const url = URL.createObjectURL(blob);
        preview.src = url;
        downloadLink.href = url;
        downloadLink.setAttribute("download", `${fileName}.webp`); // Agregar la extensión correspondiente
        downloadButton.disabled = false;
        showMessage();
        textoImagen.innerHTML = "";
      }, "image/webp");
    };
  };
}

// Función para convertir a JPG
function convertToJpg() {
  const file = inputFile.files[0];
  // SI NO HAY UNA FOTO CARGADA SE AVISA CON MENSAJE DE ERROR
  if (file == undefined) {
    errorImagen.style.visibility = "visible";
  } else {
    errorImagen.style.visibility = "hidden";
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    const img = new Image();
    img.src = reader.result;
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(function (blob) {
        const fileName = file.name.replace(/\.[^/.]+$/, ""); // Obtener el nombre del archivo sin la extensión
        const url = URL.createObjectURL(blob);
        preview.src = url;
        downloadLink.href = url;
        downloadLink.setAttribute("download", `${fileName}.jpg`); // Agregar la extensión correspondiente
        downloadButton.disabled = false;
        showMessage();
        textoImagen.innerHTML = "";
      }, "image/jpeg");
    };
  };
}

// Función para convertir a PNG
function convertToPng() {
  const file = inputFile.files[0];
  // SI NO HAY UNA FOTO CARGADA SE AVISA CON MENSAJE DE ERROR
  if (file == undefined) {
    errorImagen.style.visibility = "visible";
  } else {
    errorImagen.style.visibility = "hidden";
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    const img = new Image();
    img.src = reader.result;
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(function (blob) {
        const fileName = file.name.replace(/\.[^/.]+$/, ""); // Obtener el nombre del archivo sin la extensión
        const url = URL.createObjectURL(blob);
        preview.src = url;
        downloadLink.href = url;
        downloadLink.setAttribute("download", `${fileName}.png`); // Agregar la extensión correspondiente
        downloadButton.disabled = false;
        showMessage();
        textoImagen.innerHTML = "";
      }, "image/png");
    };
  };
}

const mainDiv = document.querySelector(".main-div");
let boxShadowSize = 100;
let isBoxShadowGrowing = false;

// HACER QUE LA SOMBRA SE HAGA MAS DIFUMINE

setInterval(function () {
  if (boxShadowSize >= 100) {
    isBoxShadowGrowing = false;
  } else if (boxShadowSize <= 20) {
    isBoxShadowGrowing = true;
  }

  boxShadowSize = isBoxShadowGrowing ? boxShadowSize + 1 : boxShadowSize - 1;
  mainDiv.style.boxShadow = `0 0 ${boxShadowSize}px #00A6ED`;
}, 25);

// AddEventListener
convertToWebpButton.addEventListener("click", convertToWebp);
convertToJpgButton.addEventListener("click", convertToJpg);
convertToPngButton.addEventListener("click", convertToPng);
