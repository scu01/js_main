const d = document, n = navigator;
export default function getGeolocation(div, mq) {
  
  const options = {
    enableHighAccuaracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  const success = position => {

    let lat = position.coords.latitude;
    let long = position.coords.longitude

    const change = e => {
      (mq.matches) ? div.innerHTML = `
        <b>Latitude: ${lat}</b>
        <b>Longitude: ${long}</b>
        <b>Accuracy: ${position.coords.accuracy}mts</b>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.082360809724!2d${long}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28fc1c27dcbf4efe!2zMzTCsDMxJzM0LjEiUyA1OMKwNDMnMzMuNCJX!5e0!3m2!1ses-419!2sar!4v1651588791687!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      ` :
      div.innerHTML = `
        <b>Latitude: ${lat}</b>
        <b>Longitude: ${long}</b>
        <b>Accuracy: ${position.coords.accuracy}mts</b>
        <a href="https://www.google.com/maps/@${lat},${long},20z" target="blank">See Location</a>
      `;
    }

    change(mq);
    mq.addEventListener("change", change);
    
  }

  const error = e => {
    div.classList.add("error");
    div.textContent = `Error: ${e}`;
  }

  n.geolocation.getCurrentPosition(success, error, options);
  
}