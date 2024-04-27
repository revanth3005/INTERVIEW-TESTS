document.addEventListener("DOMContentLoaded", function () {
  let tabCounter = 1;
  const addTabBtn = document.getElementById("add-tab");
  const tabContent = document.getElementById("tab-content");
  const tabList = document.getElementById("tab-list");
  let tabsArray = [];

  // Create a new tab
  addTabBtn.addEventListener("click", createTab);

  function createTab() {
    const tabId = "tab-" + tabCounter++;
    const tabHeader = document.createElement("div");
    tabHeader.classList.add("tab");
    tabHeader.textContent = "Tab " + (tabCounter - 1);

    const tabsDisplay = document.getElementById("main-tab-bar");

    const tabContentDiv = document.createElement("div");
    tabContentDiv.style.display = "flex";
    tabContentDiv.style.flexDirection = "column";
    tabContentDiv.style.gap = "20px";
    tabContentDiv.id = tabId;
    if (tabId !== "tab-1") {
      tabContentDiv.style.display = "none";
    }
    tabContentDiv.classList.add("tab-content-data");

    const tabNumber = document.createElement("span");
    tabNumber.innerHTML = "Tab";
    tabNumber.className = "tabItem";
    tabNumber.style.color = "black";
    tabNumber.style.cursor = "pointer";
    tabNumber.style.borderRadius = "1px";
    tabNumber.style.display = "inline-block";
    tabNumber.style.justifyContent = "center";

    tabNumber.style.width = "100px";
    tabNumber.id = "H" + tabId;
    tabNumber.onclick = function () {
      activateTab(tabId);
    };
    tabsDisplay.appendChild(tabNumber);
    const tabRemover = document.createElement("span");
    tabRemover.style.padding = "5px";
    tabRemover.innerHTML = "X";
    tabRemover.id = "R" + tabId;
    tabRemover.style.cursor = "pointer";
    tabRemover.style.borderRadius = "20%";
    tabRemover.style.border = "1px solid grey";
    tabRemover.onclick = function () {
      removeTab(tabId);
    };
    tabsDisplay.appendChild(tabRemover);

    if (tabId === "tab-1") {
      document.getElementById("H" + tabId).style.background = "grey";
      document.getElementById("H" + tabId).style.color = "white";
    }

    const urlInput = document.createElement("input");
    urlInput.style.height = "30px";
    urlInput.type = "text";
    urlInput.placeholder = "Enter URL";
    tabContentDiv.appendChild(urlInput);

    const iframe = document.createElement("iframe");
    tabContentDiv.appendChild(iframe);

    tabList?.appendChild(tabHeader);
    tabContent.appendChild(tabContentDiv);

    tabHeader.addEventListener("click", function () {
      const tabId = this.id;
      activateTab(tabId);
    });

    urlInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        const url = this.value;
        iframe.src = url;
      }
    });

    document.getElementById("main-h1").style.display = "none";
  }

  function activateTab(tabId) {
    const tabContentsData = document.querySelectorAll(".tab-content-data");
    const tabItems = document.querySelectorAll(".tabItem");
    tabItems.forEach(function (content) {
      if (content.id === "H" + tabId) {
        console.log("H" + tabId);
        content.style.background = "grey";
        content.style.color = "white";
        // document.getElementById("H" + tabId).style.background = "grey";
        // document.getElementById("H" + tabId).style.color = "white";
      } else {
        console.log(content);
        content.style.background = "white";
        content.style.color = "black";
        // document.getElementById("H" + tabId).style.background = "white";
        // document.getElementById("H" + tabId).style.color = "black";
      }
    });

    tabContentsData.forEach(function (content) {
      if (content.id === tabId) {
        content.style.display = "flex";
        // document.getElementById("H" + tabId).style.border = "1px solid purple";
      } else {
        content.style.display = "none";
        // document.getElementById("H" + tabId).style.border = "1px solid red";
      }
    });
    document.getElementById(tabId).style.display = "flex";
  }

  function removeTab(tabId) {
    console.log(tabId);
    document.getElementById("H" + tabId).remove();
    document.getElementById("R" + tabId).remove();
    const tabContentsData = document.querySelectorAll(".tab-content-data");
    tabContentsData.forEach(function (content,index) {
      if (content.id === tabId) {
        content.remove();
        //  document.getElementById("Htab-"+String(index-1)).style.background = "grey";
        //  document.getElementById("Htab-"+String(index-1)).style.color = "white";
        console.log(tabContentsData.length,index);
      }
    });
    if(tabContentsData.length === 1){
      const ele= document.getElementById("main-h1")
      ele.style.display = "flex";
      ele.style.textAlign="center";
    }
  }

});
