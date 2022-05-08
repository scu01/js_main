export default function clock(clock, on, off) {

  let interval;
  on.addEventListener("click", e => {
    on.disabled = true;
    off.disabled = false;
    clock.textContent = new Date().toLocaleTimeString();
    interval = setInterval(() => clock.textContent = new Date().toLocaleTimeString(), 1000);
  });

  off.addEventListener("click", e => {
    off.disabled = true;
    on.disabled = false;
    clearInterval(interval);
    clock.textContent = "00:00:00";
  });

}