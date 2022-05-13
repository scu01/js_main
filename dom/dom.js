import online from "./online.js";
import theme from "./theme.js";
import {menu, aside} from "./menu_aside.js";
import clock from "./clock.js";
import responsive from "./responsive.js";
import getGeolocation from "./geolocation.js";
import searchFilter from "./searchFilter.js";
import smartVideo from "./smartVideo.js";
import voiceSpeech from "./voiceSpeech.js";

const d = document, w = window;
d.addEventListener("DOMContentLoaded", e => {
  
  const $clock = d.getElementById("clock"), $clock_on = d.getElementById("clock_on"), $clock_off = d.getElementById("clock_off");
  clock($clock, $clock_on, $clock_off);
  
  const $responsive = d.getElementById("responsive"), mq = w.matchMedia("(min-width: 1024px)");
  let desktop = `
  <h3>Desktop Content</h3>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;
  let mobile = `
  <h3>Mobile Content</h3>
  <a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91&t=774s&ab_channel=jonmircha" target="blank">Click to see the video</a>
  `;
  responsive($responsive, mq, desktop, mobile);
  
  online(mq); 

  const $geolocation = d.getElementById("geolocation");
  getGeolocation($geolocation, mq);

  const $not_found = d.getElementById("not_found");
  searchFilter("#search_bar", $not_found);

  const $menu_btn = d.getElementById("menu_btn") ,$sections = d.querySelectorAll(".sec"), $menu = d.getElementById("menu");
  menu($menu_btn, $sections, $menu, mq);
  const $aside = d.querySelector("aside");
  aside($sections, $aside);

  const $videos = d.querySelectorAll("[data-smart-video]");
  smartVideo($videos);
  
  
});

voiceSpeech();

d.addEventListener("DOMContentLoaded", e => {
  const $theme_btn = d.getElementById("theme_btn");
  theme($theme_btn);
});