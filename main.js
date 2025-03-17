const form = document.querySelector('.container')
const fieldset = document.querySelector('.field')
let inputweight = document.querySelector('#weight')
let inputheight = document.querySelector('#height')
let inputname = document.querySelector('#name')
const buttonF = document.querySelector('input[id="FEMALE"]')
const buttonM = document.querySelector('input[id="MALE"]')
const buttonK = document.getElementById('KID')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal-wrapper .title span')
const modalName = document.querySelector('.modal-wrapper .nameShow span')
const modalError = document.querySelector('.modal_error')
const modalInfo = document.querySelector('modalinfo')
const botaofechar = document.getElementById('close')
const gradientGood = document.querySelector('.gradientGood')
const gradientBadMinor = document.querySelector('.imagesGradient.gradientBadMinor')
const gradientMidMinor = document.querySelector('.gradientMidMinor')
const RG = document.querySelector('.modal-wrapper .resultGradient span')
const textHeight = document.getElementById('textHeight')
const textWeight = document.getElementById('textWeight')
const info = document.querySelector('.modal-wrapper .info')
const alertMessage = document.querySelector('.ALERT')

/*new test*/

function AddComma(text) {
    switch (text.value.length) {
        case 1:
            document.getElementById("#textWeight").value = "0.0" + text.value;
            break;
        default:
            var data = text.value.replace(".", "");
            var first = data.substring(0, (data.length - 2));
            var second = data.substring(data.length - 2);
            var temp = Math.abs(first) + "." + second;
            document.getElementById("#textWeight").value = temp;
    }
}

form.onsubmit = function (event) {
    event.preventDefault()

    let name = inputname.value
    let weight = inputweight.value
    let height = inputheight.value
    const alertError = isNaN(weight) || isNaN(height)
    const inputError = (!inputweight.value) || (!inputheight.value)


    const result = IMC(weight, height)
    function IMC(weight, height) {
        return (weight / ((height / 100) ** 2)).toFixed(2);
    }



    if (!inputweight.value) {

        document.getElementById("weight").style.border = "2px solid red";
    } else {
        document.getElementById("weight").style.border = "2px solid black";
    }

    if (!inputheight.value) {

        document.getElementById("height").style.border = "2px solid red";
    } else {
        document.getElementById("height").style.border = "2px solid black";
    }
/*
    if (!inputname.value) {
        
       document.getElementById("name").style.border = "2px solid red";
    } else {
        document.getElementById("name").style.border = "2px solid black";
    }
    
*/
    if (inputError) {
        return;
    }

    if (alertError) {
        modalError.classList.add('open')
            ("alertError").fadeIn("slow");
        alertError;
        return;
    }


    //const inputErrorS = (buttonM.checked === false && buttonF.checked === false)

    /*
        if (inputErrorS) {
            document.querySelector('.male').style.border = "2px solid red";
            document.querySelector('.female').style.border = "2px solid red";
            return;
        }
    */

    var message0 = 'Magreza grave.';
    var message1 = 'Magreza moderada.';
    var message2 = 'Magreza leve.';
    var message3 = 'Você está em seu peso ideal.';
    var message4 = 'Sobrepeso.';
    var message5 = 'Obesidade grau I.';
    var message6 = 'Obesidade grau II.';
    var message7 = 'Obesidade III.';
    var messageInfo = `Com ${weight}kg e ${height}cm de altura,`;

    let A = (result < 16.00);
    let B = (result < 17.00);
    let C = (result < 19.00);
    let D = (result < 23.99);
    let E = (result < 28.99);
    let F = (result < 34.99);
    let G = (result < 35.00);
    let H = (result > 38.99);

    let A1 = (result <= 16.00);
    let B1 = (result <= 18.00);
    let C1 = (result <= 20.00);
    let D1 = (result <= 24.99);
    let E1 = (result <= 29.00);
    let F1 = (result <= 34.00);
    let G1 = (result <= 39.00);
    let H1 = (result >= 39.99);

    switch (buttonF.checked) {

        case A: {
            RG.innerText = message0;
            RG.style.color = "#e51f1f";
            info.innerText = `A magreza grave (IMC abaixo de 16) é uma condição que pode ser causada por desnutrição severa. Assim, consulte um médico, pois este peso é uma ameaça à saúde.`;
        } break;

        case B: {
            RG.innerText = message1;
            RG.style.color = "#f2a134";
            info.innerText = 'Condições hormonais, como o hipertireoidismo, podem afetar o peso de uma pessoa, lém de parasitas ou simplesmente uma dieta com poucas calorias diárias. Nesse sentido, você pode consultar um médico para ter certeza de que não tem nada de errado.';
        } break;


        case C: {
            RG.innerText = message2;
            RG.style.color = "#f7e379";
            info.innerText = `Pode ter algumas consequências, mas no geral não é preocupante. Logo, 
                                um IMC acima de 17 não fica muito longe do saudável.`;
        } break;


        case D: {
            RG.innerText = message3;
            RG.style.color = "#44ce1b";
            info.innerText = `Essa classificação garante um risco menor para diversas doenças que variam de anemia a infarto. 
                                Estar nessa classificação é estar no peso ideal para seu corpo, mas é bom lembrar de verificar a circunferência 
                                da cintura em busca de excesso de gordura.`;
        } break;


        case E: {
            RG.innerText = message4;
            RG.style.color = "#f7e379";
            info.innerText = `O sobrepeso pode causar alguns problemas de circulação no corpo, além de fadiga. Mas assim como a magreza leve, 
                                se o IMC estiver pouco acima de 25, não é preocupante. Ou seja, uma dieta com um pouco menos de calorias ou um pouco mais de exercícios 
                                na rotina pode resolver a situação.`;
        } break;


        case F: {
            RG.innerText = message5;
            RG.style.color = "#f2a134";
            info.innerText = `Acima do IMC 30 a pessoa é considerada obesa, o que por si só já é uma doença. Graças ao peso, o risco para diversas 
                                            condições aumenta consideravelmente. Um médico pode indicar um meio ideal para a regulação do peso.`;
        } break;


        case G: {
            RG.innerText = message6;
            RG.style.color = "#e51f1f";
            info.innerText = `Estar com obesidade grau II é ter riscos elevados de diabetes, hipertensão, além de câncer e infarto. Procure um médico 
                        para lidar com a situação.`;
        } break;


        case H: {
            RG.innerText = message7;
            RG.style.color = "#e51f1f";
            info.innerText = `Chamada de obesidade mórbida, esta condição representa sérios riscos à saúde. Procure ajuda médica.`;
            break;
        }
    }

    switch (buttonM.checked) {

        case A1: {
            if (buttonM.checked) {
            RG.innerText = message0;
            RG.style.color = "#e51f1f";
            info.innerText = `A magreza grave (IMC abaixo de 16) é uma condição que pode ser causada por desnutrição severa. Assim, consulte um médico, pois este peso é uma ameaça à saúde.`;
        }} break;



        case B1: {
            if (buttonM.checked) {
            RG.innerText = message1;
            RG.style.color = "#f2a134";
            info.innerText = 'Condições hormonais, como o hipertireoidismo, podem afetar o peso de uma pessoa, lém de parasitas ou simplesmente uma dieta com poucas calorias diárias. Nesse sentido, você pode consultar um médico para ter certeza de que não tem nada de errado.';
        }} break;



        case C1: {
            if (buttonM.checked) {
            RG.innerText = message2;
            RG.style.color = "#f7e379";
            info.innerText = `Pode ter algumas consequências, mas no geral não é preocupante. Logo, 
                um IMC acima de 17 não fica muito longe do saudável.`;
        }} break;



        case D1: {
            if (buttonM.checked) {
            RG.innerText = message3;
            RG.style.color = "#44ce1b";
            info.innerText = `Essa classificação garante um risco menor para diversas doenças que variam de anemia a infarto. 
                Estar nessa classificação é estar no peso ideal para seu corpo, mas é bom lembrar de verificar a circunferência 
                da cintura em busca de excesso de gordura.`;
        }} break;



        case E1: {
            if (buttonM.checked) {
            RG.innerText = message4;
            RG.style.color = "#f7e379";
            info.innerText = `O sobrepeso pode causar alguns problemas de circulação no corpo, além de fadiga. Mas assim como a magreza leve, 
                    se o IMC estiver pouco acima de 25, não é preocupante. Ou seja, uma dieta com um pouco menos de calorias ou um pouco mais de exercícios
                    na rotina pode resolver a situação.`;
        }} break;




        case F1: {
            if (buttonM.checked) {
            RG.innerText = message5;
            RG.style.color = "#f2a134";
            info.innerText = `Acima do IMC 30 a pessoa é considerada obesa, o que por si só já é uma doença. Graças ao peso, o risco para diversas 
                    condições aumenta consideravelmente. Um médico pode indicar um meio ideal para a regulação do peso.`;
        }} break;


        case G1: {
            if (buttonM.checked) {
            RG.innerText = message6;
            RG.style.color = "#e51f1f";
            info.innerText = `Estar com obesidade grau II é ter riscos elevados de diabetes, hipertensão, além de câncer e infarto. Procure um médico 
                    para lidar com a situação.`;
        }} break;




        case H1: {
            if (buttonM.checked) {
            RG.innerText = message7;
            RG.style.color = "#e51f1f";
            info.innerText = `Chamada de obesidade mórbida, esta condição representa sérios riscos à saúde. Procure ajuda médica.`;
        }} break;
    }

    
    
    const messageWelcomeM = `Bem vindo, 
    ${name}!`
    const messageWelcomeF = `Bem vinda, 
    ${name}!`
            const messageWelcomeEM = `Bem vindo!`
            const messageWelcomeEF = `Bem vinda!`
            document.querySelector('.modal-wrapper .h3 span').innerText = messageInfo;
            const message = `seu IMC é de ${result}.`
            modalMessage.innerText = message
            
            if (buttonM.checked) {
                modalName.innerText = messageWelcomeM
            } else {
                modalName.innerText = messageWelcomeF
            } if (!name && buttonM.checked) {
                modalName.innerText = messageWelcomeEM
            } else if (!name && buttonF.checked) {
                modalName.innerText = messageWelcomeEF
            }


const lowerName = inputname.value.toLowerCase();
const specialNames = [
  "bolinha de ouro",
  "wan",
  "wania mara",
  "wania mara albino",
  "ludovick",
  "wan ludovick",
  "wan lucida",
  "wan ludovick"
];

if (specialNames.includes(lowerName)) {
  modalName.innerText = "Amor da minha vida!"
                modalMessage.innerText = "Você esta perfeita, como sempre vai estar."
                info.innerText = "Perfeição e quando você e o grande amor da vida de alguem, nesse caso, nada mais importa, apenas você."
                RG.innerText = "Perfeição!"
                RG.style.color = "green"
                alertMessage.innerText = "Valido somente para meu grande amor."
            }

            modalWrapper.classList.add('open')
            
            
            const BtnClose = document.getElementById('close')
            BtnClose.onclick = function (event) {
                event.target == modalWrapper
                modalWrapper.style.visibility = "hidden"
                location.reload()
                return;

            }
    }
