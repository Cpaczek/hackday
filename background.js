// chrome.tabs.onActivated.addListener(inject)
chrome.browserAction.onClicked.addListener(inject)
function inject(tab){
    console.log(tab)
        if (/^https:\/\/wd5.myworkday\.com/.test(tab.url)) {
            chrome.tabs.insertCSS(null, {file: './style.css'});
            chrome.tabs.executeScript(null, {file: './foreground.js'}, () => {
                console.log("injected")
            })

    }
}
// chrome.tabs.executeScript(null, {file: './forground.js'}, ()=>{
//     console.log("injected")
// })