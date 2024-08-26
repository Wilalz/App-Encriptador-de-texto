const inputText = document.getElementById('input_text');
const outputText = document.getElementById('output_text');
const encryptBtn = document.getElementById('btn_encrypt');
const decryptBtn = document.getElementById('btn_decrypt');
const copyBtn = document.getElementById('btn_copy');
const inputRules = document.getElementById('input_rules');
const outputRules = document.getElementById('output_rules');
// const regex = /[A-ZÁÉÍÓÚáéíóúÑñ!@#$%^&*(),.?":{}|<>]/g;
const regex = /^[a-z\s]+$/;
let timeOutMessage;


/* --- Encrypt function --- */
encryptBtn.addEventListener('click', () => {
    if (inputText.value !== "") {
        if(regex.test(inputText.value)){
            let originText = inputText.value;
            let resultText = '';
            inputRules.style.color = 'transparent';

            for (let i = 0; i < originText.length; i++) {
                let letter = originText[i];
                switch (letter) {
                    case 'a':
                        resultText = resultText.concat('ai');
                        break;
                    case 'e':
                        resultText = resultText.concat('enter');
                        break;
                    case 'i':
                        resultText = resultText.concat('imes');
                        break;
                    case 'o':
                        resultText = resultText.concat('ober');
                        break;
                    case 'u':
                        resultText = resultText.concat('ufat');
                        break;
                    default:
                        resultText = resultText.concat(letter);
                        break;
                }
            }

            messageOutput("Mensaje cifrado");
            outputText.textContent = resultText;
            outputText.style.backgroundImage = 'none';
            inputText.value = "";
            originText = "";

        } else {
            inputRules.style.color = '#ED217C';
            outputText.textContent = '';
            outputText.style.backgroundImage = 'url(../images/boy-searching.png)';
        }
    }
})

/* --- Decrypt function --- */
decryptBtn.addEventListener('click', () => {
    if (inputText.value !== "") {
        if(regex.test(inputText.value)){
            let originText = inputText.value;
            let resultText = '';
            inputRules.style.color = 'transparent';

            resultText = originText.replaceAll('ai', 'a');
            resultText = resultText.replaceAll('enter', 'e');
            resultText = resultText.replaceAll('imes', 'i');
            resultText = resultText.replaceAll('ober', 'o');
            resultText = resultText.replaceAll('ufat', 'u');
            
            messageOutput("Mensaje descifrado");
            outputText.textContent = resultText;
            outputText.style.backgroundImage = 'none';
            inputText.value = "";
            originText = "";
        } else {
            inputRules.style.color = '#ED217C';
            outputText.textContent = '';
            outputText.style.backgroundImage = 'url(../images/boy-searching.png)';
        }
    }
})



/* --- Copy function --- */
copyBtn.addEventListener('click', () => {
    if (outputText.value !== "") {
        navigator.clipboard.writeText(outputText.value);
        messageOutput("Mensaje copiado");
    }
    else {
        messageOutput("Nada que copiar");
    }
})


/* --- Set a message in each action --- */
function messageOutput(message){
    if (timeOutMessage){
        clearTimeout(timeOutMessage);
    }
    outputRules.style.color = '#ED217C';
    outputRules.textContent = message;

    timeOutMessage = setTimeout(() => {
        outputRules.style.color = 'transparent';
        outputRules.textContent = '_';
    }, 3000);
}