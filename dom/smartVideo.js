const d = document, w = window;
export default function smartVideo(videos) {

  const cb = entries => {
    entries.forEach(entry => {
      (entry.isIntersecting) ? entry.target.play() : entry.target.pause();
      w.addEventListener("visibilitychange", e => (d.visibilityState === "visible") ? entry.target.play() : entry.target.pause());
    });
  }

  const observer = new IntersectionObserver(cb,{threshold: 0.5})
  videos.forEach(e => observer.observe(e));

}