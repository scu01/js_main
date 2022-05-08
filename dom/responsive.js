const ua = navigator.userAgent
export default function responsive(div, mq, desk, mob) {

  const change = e => {
    (mq.matches) ? div.innerHTML = desk : div.innerHTML = mob;
    (ua.match(/chrome/i)) ? div.innerHTML += "<h3>You are using Chrome Browser. Good choice!</h3>" : div.innerHTML = "<h3>Use Chrome Browser to see the hideen message</h3>";
  }

  change(mq);
  mq.addEventListener("change", change);

}