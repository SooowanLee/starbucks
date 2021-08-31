"use strict";

const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// searchInputEl 요소가 blur 됐을떄 focused 클래스를 지운다.
// 그리고  placeholder를 비운다.
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();