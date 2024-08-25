let inputText = document.getElementById('input_text');
let outputText = document.getElementById('output_text');
let encryptBtn = document.getElementById('btn_encrypt');
let decryptBtn = document.getElementById('btn_decrypt');
let copyBtn = document.getElementById('btn_copy');


/* --- Encrypt function --- */
encryptBtn.addEventListener('click', () => {
    let originText = inputText.value;
    let resultText = '';
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

    outputText.textContent = resultText;
})

/* --- Decrypt function --- */
decryptBtn.addEventListener('click', () => {
    let originText = inputText.value;
    let resultText = '';

    resultText = originText.replaceAll('ai', 'a');
    resultText = resultText.replaceAll('enter', 'e');
    resultText = resultText.replaceAll('imes', 'i');
    resultText = resultText.replaceAll('ober', 'o');
    resultText = resultText.replaceAll('ufat', 'u');
    
    outputText.textContent = resultText;

})
