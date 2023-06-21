// Header
function toggleHiddenHeaderTabsCtr() {
    const hiddenHeaderTabsCtr = document.querySelector(".hidden-header-tabs-ctr");
    if (hiddenHeaderTabsCtr.style.display == "none") {
        hiddenHeaderTabsCtr.style.display = "flex";
    } else {
        hiddenHeaderTabsCtr.style.display = "none";
    }
}