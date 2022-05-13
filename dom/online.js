const d = document, w = window, $body = d.querySelector("body"), $aside = d.querySelector("aside");
export default function online(mq) {

  const off_on = d.querySelector(".off_on");

  w.addEventListener("offline", e => {

    off_on.textContent = "offline";
    off_on.classList.remove("online");
    off_on.classList.add("offline");
    d.querySelector("header").style.top = "16px";
    if (mq.matches) {
      $body.style.gridTemplateRows = "16px 4rem auto";
      $body.style.gridTemplateAreas = `"on_off on_off" "header header" "main aside"`;
      $aside.style.height = "calc(100vh - 4rem - 16px)";
      $aside.style.top = "calc(4rem + 16px)";
    }

  });

  w.addEventListener("online", e => {

    off_on.textContent = "online";
    off_on.classList.remove("offline");
    off_on.classList.add("online");

    setTimeout(() => {
      $body.style.gridTemplateRows = "4rem auto";
      $body.style.gridTemplateAreas = `"header header" "main aside"`;
      $aside.style.height = "calc(100vh - 4rem)";
      $aside.style.top = "4rem";
      off_on.classList.remove("online");
      d.querySelector("header").style.top = "0";
    }, 3000);

  });

}