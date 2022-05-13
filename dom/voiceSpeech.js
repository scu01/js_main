const d = document;
export default function voiceSpeech() {

  const select = d.getElementById("speech_select");
  const text = d.getElementById("speech_text");
  const btn = d.getElementById("speech_btn");

  const msg = new SpeechSynthesisUtterance();
  let voices = [];

  d.addEventListener("DOMContentLoaded", e => {

    speechSynthesis.addEventListener("voiceschanged", e => {
      voices = speechSynthesis.getVoices();

      voices.forEach(voice => {
        const option = d.createElement("option");
        option.value = voice.name;
        option.textContent = `${voice.name} - ${voice.lang}`;
        select.append(option);
      });
      
    });
  });

  d.addEventListener("change", e => (e.target === select) ? msg.voice = voices.find(voice => voice.name === e.target.value) : false);

  btn.addEventListener("click", e => {
    msg.text = text.value;
    speechSynthesis.speak(msg);
  });

}