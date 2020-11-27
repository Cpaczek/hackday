// console.log(document.getElementsByClassName("wd-Text"))
console.log("fully loaded")
if(typeof hackworkday_longtext === "undefined"){
    let hackworkday_longtext;
}
if(typeof parentDiv === "undefined"){
    let parentDiv;
}
if(typeof innerContent === "undefined"){
    let innerContent;
}
if(typeof curtain === "undefined"){
    let curtain;
}

function makeModal(){

    parentDiv = document.createElement("div");
    innerContent = document.createElement("div");
    curtain = document.createElement("div");
    curtain.className = "hackday_curtain"
    parentDiv.className = "hackday_popup_wrapper";
    innerContent.className = "hackday_popup_inner";
    parentDiv.prepend(innerContent)
    document.body.prepend(curtain)
    curtain.addEventListener("click", () => {
        parentDiv.className = "hackday_popup_wrapper";
        curtain.className = "hackday_curtain"
    })
    document.body.prepend(parentDiv);
}

function remakeModal(){
    if(typeof parentDiv === "undefined"){
        makeModal();
    }
}

function fixLongText(){
    hackworkday_longtext = document.getElementsByClassName("wd-Text");
    let hackday_storedtext = [];
    for (let item of hackworkday_longtext) {
        if (item.innerText.length > 200) {
            hackday_storedtext.push({
                itemref: item,
                text: item.innerText
            })
            item.innerText = item.innerText.slice(0, 199) + "..."
            item.addEventListener("click", () => {
                remakeModal();
                console.log("being clicked")
                hackday_storedtext.forEach((e) => {
                    if (item === e.itemref) {
                        parentDiv.className += " hackday_popup_active"
                        curtain.className += " hackday_curtain_active"
                        innerContent.innerText = e.text;
                    }
                })
            });
        }
    }
}
remakeModal()
fixLongText();



