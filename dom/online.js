const d = document, w = window;
export default function online() {

  const off_on = d.querySelector(".off_on");

  w.addEventListener("offline", e => {
    off_on.textContent = "offline";
    off_on.classList.remove("online");
    off_on.classList.add("offline");
    d.querySelector("header").style.top = "15px";
  });

  w.addEventListener("online", e => {
    off_on.textContent = "online";
    off_on.classList.remove("offline");
    off_on.classList.add("online");
    setTimeout(() => {
      off_on.classList.remove("online");
      d.querySelector("header").style.top = "0";
    }, 3000);
  });

}
