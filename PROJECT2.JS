const text =
    document.getElementById("textToConvert");
const convertBtn =
    document.getElementById("convertBtn");


convertBtn.addEventListener('click', function () {

    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;
    const error = document.querySelectorAll('.error-para');

    if (!speechSynth.speaking &&
        !enteredText.trim().length) {
        error.textContent = "enter something!!"
    }
    if (!speechSynth.speaking && enteredText.trim().length) {
        error.textContent = "";
        const newUtter = new SpeechSynthesisUtterance(enteredText);
        speechSynth.speak(newUtter);
        convertBtn.textContent = "wait until the text is converting"
    }
    setTimeout(() => {
        convertBtn.textContent = "play converted sound"
    }, 5000);
});
