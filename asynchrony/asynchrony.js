const d = document;

const get = (get, clear, ol) => {
  get.disabled = true;
  clear.disabled = false;
  ol.previousElementSibling.style.marginBottom = "20px";
}

const clear = (get, clear, ol) => {
  clear.disabled = true;
  get.disabled = false;
  ol.previousElementSibling.style.marginBottom = 0;
  ol.classList.remove("ol");
  ol.innerHTML = "";
}

export function usersAjax() {

  const $get = d.getElementById("getAjax"), $clear = d.getElementById("clearAjax"), $xhr = d.getElementById("xhr"), xhr = new XMLHttpRequest(), $fragment = d.createDocumentFragment();
  if ($clear.disabled) $xhr.previousElementSibling.style.margin = 0;

  $get.addEventListener("click", e => {

    get($get, $clear, $xhr);
    xhr.addEventListener("readystatechange", e => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("Success"); $xhr.classList.add("ol");
        const users = JSON.parse(xhr.responseText);
        users.forEach(user => {
          const $li = d.createElement("li");
          $li.textContent = `${user.name} - ${user.email} - ${user.phone}`;
          $fragment.append($li);
        });
        $xhr.append($fragment);
      } else {
        console.error("Error");
        $xhr.innerHTML = `Error ${xhr.status}: ${xhr.statusText || "An error has ocurred"}`;
      }
    });
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
    $clear.addEventListener("click", e => clear($get, $clear, $xhr));

  });

};

export function usersFetch() {

  const $get = d.getElementById("getFetch"), $clear = d.getElementById("clearFetch"), $fetch = d.getElementById("fetch"), $fragment = d.createDocumentFragment();
  if ($clear.disabled) $fetch.previousElementSibling.style.margin = 0;

  $get.addEventListener("click", e => {

    get($get, $clear, $fetch);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(users => users.ok ? users.json() : Promise.reject(users))
      .then(users => {
        console.log("Success"); $fetch.classList.add("ol");
        users.forEach(user => {
          const $li = d.createElement("li");
          $li.textContent = `${user.name} - ${user.email} - ${user.phone}`;
          $fragment.append($li);
        });
        $fetch.append($fragment);
      })
      .catch(e => {
        console.error("Error");
        $fetch.innerHTML = `Error ${e.status}: ${e.statusText || "An error has ocurred"}`;
      });
    $clear.addEventListener("click", e => clear($get, $clear, $fetch));

  });

}

export function usersAsync() {

  const $get = d.getElementById("getAsync"), $clear = d.getElementById("clearAsync"), $async = d.getElementById("async"), $fragment = d.createDocumentFragment();
  if ($clear.disabled) $async.previousElementSibling.style.margin = 0;

  $get.addEventListener("click", e => {

    async function getUsers() {
      try {
        get($get, $clear, $async);
        let res = await fetch("https://jsonplaceholder.typicode.com/users"), users = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        console.log("Success"); $async.classList.add("ol");
        users.forEach(user => {
          const $li = d.createElement("li");
          $li.textContent = `${user.name} - ${user.email} - ${user.phone}`;
          $fragment.append($li);
        });
        $async.append($fragment);
      } catch (e) {
        console.error("Error");
        $async.innerHTML = `Error ${e.status}: ${e.statusText || "An error has ocurred"}`;
      }
    }
    getUsers();
    $clear.addEventListener("click", e => clear($get, $clear, $async));

  });

}

export function usersAxios() {

  const $get = d.getElementById("getAxios"), $clear = d.getElementById("clearAxios"), $axios = d.getElementById("axios"), $fragment = d.createDocumentFragment();
  if ($clear.disabled) $axios.previousElementSibling.style.margin = 0;

  $get.addEventListener("click", e => {

    get($get, $clear, $axios);
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log("Success"); $axios.classList.add("ol");
        let users = res.data;
        users.forEach(user => {
          const $li = d.createElement("li");
          $li.textContent = `${user.name} - ${user.email} - ${user.phone}`;
          $fragment.append($li);
        });
        $axios.append($fragment);
      })
      .catch(e => {
        console.error("Error");
        $axios.innerHTML = `Error ${e.response.status}: ${e.response.statusText || "An error has ocurred"}`;
      });
    $clear.addEventListener("click", e => clear($get, $clear, $axios));

  });

}

export function usersAxiosAsync() {

  const $get = d.getElementById("getAxiosAsync"), $clear = d.getElementById("clearAxiosAsync"), $axiosAsync = d.getElementById("axiosAsync"), $fragment = d.createDocumentFragment();
  if ($clear.disabled) $axiosAsync.previousElementSibling.style.margin = 0;

  $get.addEventListener("click", e => {

    async function getUsers() {
      try {
        get($get, $clear, $axiosAsync);
        let res = await axios.get("https://jsonplaceholder.typicode.com/users"), users = await res.data;
        console.log("Success"); $axiosAsync.classList.add("ol");
        users.forEach(user => {
          const $li = d.createElement("li");
          $li.textContent = `${user.name} - ${user.email} - ${user.phone}`;
          $fragment.append($li);
        });
        $axiosAsync.append($fragment);
      } catch (e) {
        console.error("Error");
        $axiosAsync.innerHTML = `Error ${e.response.status}: ${e.response.statusText || "An error has ocurred"}`;
      }
    }
    getUsers();
    $clear.addEventListener("click", e => clear($get, $clear, $axiosAsync));

  });

}