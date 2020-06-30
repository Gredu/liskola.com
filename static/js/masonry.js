const grid = document.querySelector(".grid");
const rowSize = parseInt(getComputedStyle(grid).getPropertyValue("grid-auto-rows"), 10);
const rowGap = parseInt(getComputedStyle(grid).getPropertyValue("grid-gap"), 10);
const gridItems = [];

const positionGridItems = () => {
  gridItems.forEach(({ item, content  }) => {
    content.classList.remove("cover");
    const rowSpan = Math.ceil(
      (content.offsetHeight + rowGap) / (rowSize + rowGap)

    );
    item.style.setProperty("--row-span", rowSpan);
    content.classList.add("cover");

  });

};

window.addEventListener("load", positionGridItems);
window.addEventListener("resize", _.debounce(positionGridItems, 100));

const generateImages = (el) => {

  const newImage = (name) => {
    const item = document.createElement("div");
    item.className = "grid__item";

    const content = document.createElement("img");
    content.src = `/gallery/${name}`;

    item.appendChild(content);
    gridItems.push({ item, content  });

    return item;

  };

  let images = document.createDocumentFragment();
  const names = [ "clap.jpg", "kungfu.jpg", "smily.jpg", "bully.jpg", "driver.jpg", "profilesmoke.jpg", "snow.jpg" ]
  names.forEach(name => images.appendChild(newImage(name)))
  el.appendChild(images);

};

generateImages(grid, 40);
