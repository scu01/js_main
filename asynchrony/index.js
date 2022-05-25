import {usersAjax, usersFetch, usersAsync, usersAxios, usersAxiosAsync} from "./asynchrony.js";
document.addEventListener("DOMContentLoaded", e => {

  usersAjax();
  usersFetch();
  usersAsync();
  usersAxios();
  usersAxiosAsync();

});