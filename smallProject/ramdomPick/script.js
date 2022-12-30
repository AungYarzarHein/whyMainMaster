
const textarea = document.getElementById("choices");
const tagEle = document.getElementById("btnContainer");
const info = document.querySelector(".info");

choices.focus();


function createTags(input){
    const tages = input.split(",").filter(choice => choice.trim() !==" ").map(choice => choice.trim());

    tagEle.innerHTML = "";
    tages.forEach(choice => {
        const choiceBtn = document.createElement("button");
        choiceBtn.classList.add("btn");
        choiceBtn.innerText = choice ;
        tagEle.appendChild(choiceBtn);
    })
    
}

function randomselect () {
    const times = 30;
    let winner ;
    const interVal = setInterval(()=>{
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        
        setTimeout(()=>{
            unHighlightTag(randomTag);
        },100)

    },100)

    setTimeout(()=>{
        clearInterval(interVal);
        setTimeout(()=>{
            const ranDomTag = pickRandomTag();
            highlightTag(ranDomTag)
            winner=ranDomTag;
            info.innerText = `the winner is ${winner.innerText}`;
            //alert(`the winner is ${winner.innerText}`)
            
        },100)

        
      },times*100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll(".btn");
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlightTag(tag){
    tag.classList.add("highlight");
}

function unHighlightTag(tag){
    tag.classList.remove("highlight");
}

choices.addEventListener("keyup",(e)=>{
    createTags(e.target.value);
    if(e.key === "Enter"){
        setTimeout(()=>{
            e.target.value = ""
        },10)

        if(document.querySelectorAll(".btn").length > 1){
            randomselect();
        }else{
            alert("must be two choice")
        }
        
    }
});