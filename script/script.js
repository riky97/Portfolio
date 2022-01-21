setAttribute = () => {
  const a = document.querySelectorAll("#navbar_link");
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    element.setAttribute("onclick", "clickItemNav(this)");
  }
};
setAttribute();

clickItemNav = (ele) => {
  const a = document.querySelectorAll("#navbar_link");
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (element !== ele) {
      element.classList.remove("item-selected");
    } else {
      ele.classList.add("item-selected");
    }
  }
};
