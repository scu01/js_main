const $body = document.querySelector("body"); // Body

// HTML append to body
$body.insertAdjacentHTML(
  "afterbegin",
  `
<h1>Javascript</h1>
    <br>
    <h2>What is Javascript?</h2>
    <br>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius a vero tempore
      aperiam quia velit culpa, eveniet, reiciendis quaerat dolore. Voluptates odit possimus repellat numquam ut
      dolore at cupiditate!
    </p>
    <hr>
    <h2>DOM Handle</h2>
    <br>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod culpa dolores quo, commodi
      sint vel beatae
      error sequi repellendus tempora excepturi eligendi, in, voluptate fuga enim similique. Repudiandae, totam!
    </p>

    <nav id="nav_menu"></nav>

    <template id="template_menu">
      <ul class="menu">
          <li><a></a></li>
          <li><a></a></li>
          <li><a></a></li>
          <li><a></a></li>
      </ul>
    </template>

    <input type="text" name="search" class="text" placeholder="Search">
    <input type="button" name="click" class="button" value="Click">
    <hr>

    <div class="cards"></div>
    <template id="template_card">
        <figure class="card">
            <img>
            <figcaption></figcaption>
        </figure>
    </template>

    <div class="view_img">
        <figure>
            <img>
            <figcaption></figcaption>
        </figure>
    </div>
    <hr>
`
);

// <--- Menu --->

const $nav_menu = document.getElementById("nav_menu"), // Menu container (nav)
  $template_menu = document.getElementById("template_menu").content, // Menu Template
  $fragment_menu = document.createDocumentFragment(); // Fragment for menu template

// Sets attributes of every a in menu
$template_menu.querySelectorAll("li a").forEach((a, i) => {
  a.setAttribute("href", "index.html");
  a.textContent = `Section ${i + 1}`;
});

let $template_menu_clone = document.importNode($template_menu, true); // Creates clone of template
$fragment_menu.append($template_menu_clone); // Appends template clone to fragment
$nav_menu.append($fragment_menu); // Appends fragment to nav (DOM)

// <--- Cards --->

const json_cards = // json data for cards
    '[{"title":"Tech","src":"http://placeimg.com/1000/700/tech"},{"title":"Nature","src":"http://placeimg.com/1000/700/nature"},{"title":"Architecture","src":"http://placeimg.com/1000/700/arch"},{"title":"Animals","src":"http://placeimg.com/1000/700/animals"},{"title":"Tech","src":"http://placeimg.com/1000/700/tech"},{"title":"Nature","src":"http://placeimg.com/1000/700/nature"},{"title":"Architecture","src":"http://placeimg.com/1000/700/arch"},{"title":"Animals","src":"http://placeimg.com/1000/700/animals"},{"title":"Tech","src":"http://placeimg.com/1000/700/tech"},{"title":"Nature","src":"http://placeimg.com/1000/700/nature"},{"title":"Architecture","src":"http://placeimg.com/1000/700/arch"},{"title":"Animals","src":"http://placeimg.com/1000/700/animals"}]',
  card_array = JSON.parse(json_cards); // json_cards array

const $cards = document.querySelector(".cards"), // Cards container (div)
  $template_card = document.getElementById("template_card").content, // Card Template
  $fragment_card = document.createDocumentFragment(), // Fragment for card template
  $view_img = document.querySelector(".view_img"); // Img viewer (div)

// Creates an img viewer
const view_img = (e) => {
  if (e.target.hasAttribute("src")) {
    // If e.target is 'img'
    $view_img.querySelector("img").setAttribute("alt", e.target.alt);
    $view_img.querySelector("img").setAttribute("src", e.target.src);
    $view_img.querySelector("figcaption").textContent = e.target.alt;
  } else {
    // If e.target is 'figcaption'
    $view_img
      .querySelector("img")
      .setAttribute("alt", e.target.previousElementSibling.getAttribute("alt"));
    $view_img
      .querySelector("img")
      .setAttribute("src", e.target.previousElementSibling.getAttribute("src"));
    $view_img.querySelector("figcaption").textContent = e.target.textContent;
  }

  $view_img.style.display = "flex"; // Makes img container visible
  $view_img.addEventListener("click", () => ($view_img.style.display = "none")); // Adds click event to img container to hide it
};

// Creates cards (img carrousel)
card_array.forEach((card) => {
  $template_card.querySelector("img").setAttribute("alt", card.title);
  $template_card.querySelector("img").setAttribute("src", card.src);
  $template_card.querySelector("figcaption").textContent = card.title;

  let $template_card_clone = document.importNode($template_card, true); // Creates clone of template
  $template_card_clone
    .querySelector("figure")
    .addEventListener("click", view_img); // Creates click event for every card (view_img)
  $fragment_card.append($template_card_clone); // Appends template clone to fragment
});

$cards.append($fragment_card); // Appends fragment to cards container (DOM)
