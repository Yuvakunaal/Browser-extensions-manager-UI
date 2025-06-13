window.onload = () => {
  let body = document.querySelector("body");
  let topBar = document.querySelector(".topbar");
  let logo = document.querySelector(".topbar .logo");
  let themeContainer = document.querySelector(".topbar div");
  let themeElement = themeContainer.querySelector("img");
  let headingElement = document.querySelector(".filterbar .heading");
  let filterBtns = document.querySelectorAll(".filterbar .filters .filter");
  let [allBtn, activeBtn, inactiveBtn] = [...filterBtns];
  let toggles = document.querySelectorAll(".toggleSwitch");
  let items = document.querySelectorAll(".extensionsContainer .item");
  let infos = document.querySelectorAll(".extensionsContainer .item .info");
  let removeBtns = document.querySelectorAll(
    ".extensionsContainer .item .bottom .removebtn"
  );


  let toggleStates = {};
  toggles.forEach((toggle, index) => {
    if (!toggle.id) {
      toggle.id = `toggle-item${index}`;
    }
    toggleStates[toggle.id] = false;

    toggle.addEventListener("click", () => {
      toggleStates[toggle.id] = !toggleStates[toggle.id];
      toggle.classList.toggle("active1", toggleStates[toggle.id]);
      console.log(toggle.id + " is ", toggleStates[toggle.id] ? "ON" : "OFF");
      console.log(toggleStates);
    });
  });

  // When All button is clicked
  allBtn.addEventListener("click", () => {
    console.log(toggleActiveStates);
    activeBtn.classList.remove("active");
    inactiveBtn.classList.remove("active");
    if (!allBtn.classList.contains("active")) {
      allBtn.classList.add("active");
    }

    items.forEach((item) => {
      item.style.display = "flex";
    });
  });

  let toggleActiveStates = new Set();
  // When Active button is clicked
  activeBtn.addEventListener("click", () => {
    allBtn.classList.remove("active");
    inactiveBtn.classList.remove("active");
    if (!activeBtn.classList.contains("active")) {
      activeBtn.classList.add("active");
    }
    toggleActiveStates.clear();

    for (let key in toggleStates) {
      if (toggleStates[key]) {
        toggleActiveStates.add(key);
      }
    }

    items.forEach((item) => {
      let showItem = false;
      toggleActiveStates.forEach((toggleID) => {
        let itemElement = toggleID.split("-")[1];
        if (item.classList.contains(itemElement)) {
          showItem = true;
        }
      });
      item.style.display = showItem ? "flex" : "none";
    });
  });

  let toggleInactiveStates = new Set();
  // When Inactive button is clicked
  inactiveBtn.addEventListener("click", () => {
    allBtn.classList.remove("active");
    activeBtn.classList.remove("active");
    if (!inactiveBtn.classList.contains("active")) {
      inactiveBtn.classList.add("active");
    }
    toggleInactiveStates.clear();

    for (let key in toggleStates) {
      if (!toggleStates[key]) {
        toggleInactiveStates.add(key);
      }
    }

    items.forEach((item) => {
      let showItem = false;
      toggleInactiveStates.forEach((toggleID) => {
        let itemElement = toggleID.split("-")[1];
        if (item.classList.contains(itemElement)) {
          showItem = true;
        }
      });
      item.style.display = showItem ? "flex" : "none";
    });
  });

  // Removing item
  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener("click", (event) => {
      let removeBtnId = event.target.id;
      let itemName = removeBtnId.split("-")[1];
      let item = document.querySelector(`.${itemName}`);
      if (item) {
        item.remove();
      }
    });
  });

  // Handling Theme
  let themelight = "light";
  themeContainer.addEventListener("click", () => {
    if (themelight === "light") {
      body.classList.replace("light", "dark");
      topBar.classList.replace("topbarlight", "topbardark");
      logo.setAttribute("src", "assets/images/logo-dark.svg");
      themeContainer.classList.replace(
        "themeContainer-light",
        "themeContainer-dark"
      );
      themeElement.setAttribute("src", "assets/images/icon-sun.svg");
      headingElement.classList.replace("heading-light", "heading-dark");
      filterBtns.forEach((element) => {
        element.classList.replace("filter-light", "filter-dark");
      });
      items.forEach((element) => {
        element.classList.replace("item-light", "item-dark");
      });
      infos.forEach((element) => {
        element.classList.replace("info-light", "info-dark");
      });
      removeBtns.forEach((element) => {
        element.classList.replace("remove-light", "remove-dark");
      });
      themelight = "dark";
    } else {
      body.classList.replace("dark", "light");
      topBar.classList.replace("topbardark", "topbarlight");
      logo.setAttribute("src", "assets/images/logo.svg");
      themeContainer.classList.replace(
        "themeContainer-dark",
        "themeContainer-light"
      );
      themeElement.setAttribute("src", "assets/images/icon-moon.svg");
      headingElement.classList.replace("heading-dark", "heading-light");
      filterBtns.forEach((element) => {
        element.classList.replace("filter-dark", "filter-light");
      });
      items.forEach((element) => {
        element.classList.replace("item-dark", "item-light");
      });
      infos.forEach((element) => {
        element.classList.replace("info-dark", "info-light");
      });
      removeBtns.forEach((element) => {
        element.classList.replace("remove-dark", "remove-light");
      });
      themelight = "light";
    }
  });
};
