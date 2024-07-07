const searchContainer = document.querySelector(".search");
const searchBtn = document.querySelector(".btn");
const searchInput = document.querySelector(".input")

const showInput = () => {
  searchContainer.classList.toggle("active");
  searchInput.focus();
};

searchBtn.addEventListener("click", showInput);
