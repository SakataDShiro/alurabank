const botonAbrirCamara = document.querySelector("#dataVideo")
const video = document.querySelector("#cameraDatos")
const campoCamara = document.querySelector("#dataCamera")
const botonTomarFoto = document.querySelector("#tomarFoto")
const mensaje = document.querySelector("#mensaje")
const canvas = document.querySelector("#canvas")
let imgUrl=""
const botonEnviar =document.querySelector("#enviar")

botonAbrirCamara.addEventListener("click", async () =>{
    const iniciarVideo= await navigator.mediaDevices.getUserMedia({video:true, audio:false})
    botonAbrirCamara.style.display="none";
    campoCamara.style.display="block";
    video.srcObject = iniciarVideo;
})

botonTomarFoto.addEventListener("click",()=>{
    canvas.getContext("2d").drawImage(video,0,0, canvas.width, canvas.height )
    imgUrl= canvas.toDataURL("image/jpeg");
    campoCamara.style.display="none";
    mensaje.style.display="block";
})

botonEnviar.addEventListener("click",()=>{
    const recibirDatos = localStorage.getItem("registro")
    const convertirDatos = JSON.parse(recibirDatos)
    convertirDatos.img_url= imgUrl
    localStorage.setItem("registro", JSON.stringify(convertirDatos))
    window.location.href= "./abrir-cuenta-form-3.html"
})