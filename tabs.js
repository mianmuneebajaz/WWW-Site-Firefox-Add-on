document.addEventListener("click", (e) => {

    if (e.target.id === "tabs-create-tag-checker") {
        browser.tabs.create({ url: "http://wwwtags.net" });
    } else if (e.target.id === "tabs-create-sheet") {
        browser.tabs.create({ url: "http://wwwtags.net/Sheet" });
    }
    e.preventDefault();
});