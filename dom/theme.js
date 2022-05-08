const d = document, ls = localStorage;
export default function theme(btn) {
  
  const elements = d.querySelectorAll("[data-theme]");
  
  if (!ls.getItem("theme")) ls.setItem("theme", "light");
  (ls.getItem("theme") === "light") ? light() : dark();

  function light() {
    btn.textContent = "dark_mode";
    ls.setItem("theme", "light");
    elements.forEach(e => {
      if (e.matches("body")) e.classList.remove("dark_body");
      if (e.matches("header")) e.classList.remove("dark_header");
      if (e.matches(".card")) e.classList.remove("dark_card");
    });
  }

  function dark() {
    btn.textContent = "light_mode";
    ls.setItem("theme", "dark");
    elements.forEach(e => {
      if (e.matches("body")) e.classList.add("dark_body");
      if (e.matches("header")) e.classList.add("dark_header");
      if (e.matches(".card")) e.classList.add("dark_card");
    });
  }

  btn.addEventListener("click", e => (ls.getItem("theme") === "light") ? dark() : light());

}