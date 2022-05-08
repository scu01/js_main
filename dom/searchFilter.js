const d = document;
export default function searchFilter(input, nf) {

  d.addEventListener("keyup", e => {

    if (e.target.matches(input)) {

      const cards = d.querySelectorAll(".card"); let show = true;

      cards.forEach(card => {
        card.style.display = "none";
        if (card.querySelector("figcaption").textContent.toLowerCase().includes(d.querySelector(input).value.toLowerCase())) card.style.display = "block";
      });

      cards.forEach(card => (card.style.display === "block") ? show = false : true);
      (show) ? nf.style.display = "block" : nf.style.display = "none";

    }

  });

}
