document.addEventListener("DOMContentLoaded", () => {
    
    const userAgent = navigator.userAgent.toLowerCase();
    let activeTabId;

    if (/safari/.test(userAgent) && !/chrome|edg/.test(userAgent)) {
      activeTabId = "tab1";
    } else if (/chrome/.test(userAgent) && !/edg/.test(userAgent) && !/opr/.test(userAgent)) {
      activeTabId = "tab2";
    } else {
      
      if (/firefox/.test(userAgent)) {
        activeTabId = "tab3";
      } else {
        activeTabId = "tab4";
      }
    }

    openTab(activeTabId);
  });

  function openTab(tabId) {
    
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.classList.remove("active"));

    
    const selectedTab = document.getElementById(tabId + "-content");
    selectedTab.classList.add("active");

    const tabElement = document.getElementById(tabId);
    if (selectedTab.classList.contains("active")) {
       
        const tabstop = document.querySelectorAll(".active-top");
        tabstop.forEach(tabstop => tabstop.classList.remove("active-top"));

        tabElement.classList.add("active-top");
        
    } else {
        tabElement.classList.remove("active-top");
    }
  }

  
  const tab1 = document.getElementById("tab1");
  const tab2 = document.getElementById("tab2");
  const tab3 = document.getElementById("tab3");
  const tab4 = document.getElementById("tab4");

  tab1.addEventListener("click", () => openTab("tab1"));
  tab2.addEventListener("click", () => openTab("tab2"));
  tab3.addEventListener("click", () => openTab("tab3"));
  tab4.addEventListener("click", () => openTab("tab4"));