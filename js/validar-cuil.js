export default function esCuil(campo){
    const cuil = campo.value.replace(/[-\/]/g, "");
    if (HayNumerosRepetidos(cuil)){
        console.log("Valores Repetidos");
        campo.setCustomValidity("Valores Repetidos")
    }else{
        if(validarPrimerosDigitos(cuil) && validarDigitoVerificador(cuil)){
            console.log("Cuil Válido")
        }else{
            console.log("Cuil No Existe");
            campo.setCustomValidity("Cuil No Existe")
        }

    }
}

function HayNumerosRepetidos(cuil){
    const numerosRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ]
    return numerosRepetidos.includes(cuil);
}

function validarPrimerosDigitos(cuil){
    let primerosDigitos= cuil.substr(0,2);
    let digitosValidos = ['20','23', '24', '37','30','33','34'];
    return digitosValidos.includes(primerosDigitos)
}

function validarDigitoVerificador(cuil){
    let acumulado=0
    const factores=[5,4,3,2,7,6,5,4,3,2]
    for(let i=0; i<10;i++){
        acumulado+= parseInt(cuil[i],10) * [factores[i]]
    }
    let validadorTeorico= 11 - (acumulado % 11)
    if (validadorTeorico== 11) {
        validadorTeorico=0
    }else if(validadorTeorico==10){
        validadorTeorico=9
    }

    const DigitoVerificador= parseInt(cuil[10], 10)

    return DigitoVerificador===validadorTeorico; 
}