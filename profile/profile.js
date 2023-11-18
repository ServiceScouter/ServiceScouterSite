const params = new URLSearchParams(window.location.search);
const page = params.get("page");

if(page == null) {
    document.getElementById("account").classList.add("action-bar-selected");
    document.getElementById("account-content").style.display = "flex";
} else {
    document.getElementById(page).classList.add("action-bar-selected");
    document.getElementById(page + "-content").style.display = "flex";
}