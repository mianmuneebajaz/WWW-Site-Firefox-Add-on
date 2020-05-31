 document.addEventListener("click", (e) => {

     if (e.target.id === "tabs-create-tag-checker") {
         browser.tabs.create({ url: "http://wwwtags.net" });
     } else if (e.target.id === "tabs-create-sheet") {
         browser.tabs.create({ url: "http://wwwtags.net/Sheet" });

         browser.tabs.query({
             currentWindow: true
         }).then((tabs) => {
             for (var tab of tabs) {
                 if (tab.id === tabId) {
                     browser.tabs.update(tabId, {
                         active: true
                     });
                 }
             }
         });
     }
     e.preventDefault();
 });