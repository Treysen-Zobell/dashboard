const sidebar = document.querySelector("#sidebar");
const tileArea = document.querySelector("#tile-area");
const sidebarWidth = getComputedStyle(document.documentElement)
    .getPropertyValue("--side-bar-width");
const selectedRadio = document.querySelector('#sidebar')
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
        console.log(sidebar.style.left);
    }
    sidebarExpanded = !sidebarExpanded;
}

function checkPlatform() {
    return (window.innerWidth < 600) ? "mobile" : "desktop";
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