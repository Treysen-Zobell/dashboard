/* Config Start*/
const mobileDeviceWidth = 600;  // Width where the website transitions from desktop to mobile in px

/* Config End */


const sidebar = document.querySelector("#sidebar");
const tileArea = document.querySelector("#tile-area");
const sidebarWidth = getComputedStyle(document.documentElement)
    .getPropertyValue("--side-bar-width");
let sidebarExpanded = false;
let platform = checkPlatform();


function toggleSidebar() {
    if (sidebarExpanded) {
        sidebar.style.left = "-" + sidebarWidth;
        tileArea.style.left = "0";
    }
    else {
        if (platform === "desktop") {
            sidebar.style.left = "0";
            tileArea.style.left = sidebarWidth;
        }
        else {
            sidebar.style.left = "0px";
            tileArea.style.left = "0";
        }
    }
    sidebarExpanded = !sidebarExpanded;
}

function checkPlatform() {
    return (window.innerWidth < mobileDeviceWidth) ? "mobile" : "desktop";
}

function resizeCallback() {
    let newPlatform = checkPlatform();
    if (newPlatform === "mobile" && platform === "desktop" && sidebarExpanded) {
        toggleSidebar();
    }
    platform = newPlatform;
}


window.onresize = resizeCallback;
toggleSidebar();