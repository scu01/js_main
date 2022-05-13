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
      if (e.matches("aside")) e.classList.remove("dark_aside");
      if (e.matches(".menu")) e.classList.remove("dark_menu");
      if (e.matches("input[type='text']") || e.matches("input[type='email']") || e.matches("input[type='search']") || e.matches("textarea")) e.classList.remove("dark_input");
      if (e.matches("button") || e.matches("input[type='submit']") || e.matches("select")) e.classList.remove("dark_btn");
      if (e.matches(".card")) e.classList.remove("dark_card");
    });
  }

  function dark() {
    btn.textContent = "light_mode";
    ls.setItem("theme", "dark");
    elements.forEach(e => {
      if (e.matches("body")) e.classList.add("dark_body");
      if (e.matches("header")) e.classList.add("dark_header");
      if (e.matches("aside")) e.classList.add("dark_aside");
      if (e.matches(".menu")) e.classList.add("dark_menu");
      if (e.matches("input[type='text']") || e.matches("input[type='email']") || e.matches("input[type='search']") || e.matches("textarea")) e.classList.add("dark_input");
      if (e.matches("button") || e.matches("input[type='submit']") || e.matches("select")) e.classList.add("dark_btn");
      if (e.matches(".card")) e.classList.add("dark_card");
    });
  }

  btn.addEventListener("click", e => (ls.getItem("theme") === "light") ? dark() : light());

}