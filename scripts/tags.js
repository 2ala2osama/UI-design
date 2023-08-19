// tags data array
const TAGS = [
  "Healt",
  "Life",
  "Woman",
  "Men",
  "Fmily Health",
  "Men",
  "Life",
  "Woman",
  "Habits",
  "Diseases"
];

// tags container
const tagsContaier = document.getElementById("tags");

// tags render function
let renderTags = function (tags) {
  let tagContent = "";
  tags.forEach((tag) => {
    tagContent += `<button class="tags-section-tags__button">${tag}</button>`;
  });
  tagsContaier.innerHTML = tagContent;
};
//call render function
renderTags(TAGS);
