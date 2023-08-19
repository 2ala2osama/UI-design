const firstTab = document.getElementById("tab-1");
const secTab = document.getElementById("tab-2");
const thirdTab = document.getElementById("tab-3");
const DATA_TABS = [
  {
    id: 1,
    name: "Sarah mac fa",
    title: "Smarter Food Choices 101 Tips For Busy Woman",
    img: "./assets/images/image 14.png",
    date: "15 june 2019",
  },
  {
    id: 2,
    name: "Sarah mac fa",
    title: "Smarter Food Choices 101 Tips For Busy Woman",
    img: "./assets/images/image 14.png",
    date: "15 june 2019",
  },
  {
    id: 3,
    name: "Sarah mac fa",
    title: "Smarter Food Choices 101 Tips For Busy Woman",
    img: "./assets/images/image 16.png",
    date: "15 june 2019",
  },
  {
    id: 4,
    name: "Sarah mac fa",
    title: "Smarter Food Choices 101 Tips For Busy Woman",
    img: "./assets/images/image 21.png",
    date: "15 june 2019",
  },
];

//to render tabs
let render_lists = function (lists) {
  let tabContent = "";
  lists.forEach((content) => {
    tabContent += `
        <div class="content-tab">
            <div class="flex content-tab-card">
              <div class="content-tab-card_img">
                <img width="60" height="60"
                src="${content.img}"
                alt="${content.title}" />
                <button>${content.id}</button>
              </div>
              <div class="content-tab-card_description">
                <h5>${content.title}</h5>
                <p>By <u>${content.name}</u>.. | ${content.date}</p>
              </div>
            </div>
        </div>
               `;
  });
  firstTab.innerHTML = tabContent;
  secTab.innerHTML = tabContent;
  thirdTab.innerHTML = tabContent;
};
render_lists(DATA_TABS);

function Tabs(evt, Name) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Name).style.display = "block";
  evt.currentTarget.className += " active";
}
