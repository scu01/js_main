const d = document;
export function menu(btn, sections, menu) {

  sections.forEach(e => {
      
    const a = d.createElement("a");
    const h2 = e.querySelector("h2");
    const id = `#${e.getAttribute("id")}`;

    a.textContent = h2.textContent.toUpperCase();
    a.setAttribute("href",id);
    a.setAttribute("data-theme","");
    menu.append(a);
    
  });

  btn.addEventListener("click", e => (menu.style.display === "none") ? menu.style.display = "flex" : menu.style.display = "none");
  menu.addEventListener("click", e => menu.style.display = "none");

}

export function aside(sections, aside) {

  sections.forEach(e => {

    const a = d.createElement("a");
    const text = e.querySelector("h2").textContent.toUpperCase();
    const id = `#${e.getAttribute("id")}`;
    
    a.textContent = text;
    a.setAttribute("href",id);
    a.setAttribute("data-theme","");
    aside.append(a);

  });

}