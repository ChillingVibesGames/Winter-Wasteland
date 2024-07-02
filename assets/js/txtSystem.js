function writeFromID(id) {
    let i=0;
    let text="";
    let organDoner=document.querySelector(id);
    let image=document.querySelector("#icon");
    if (organDoner.getAttribute("hide")===null || organDoner.getAttribute("hide") === 0) {
        image.src='assets/CharacterDialogueSprites/'+organDoner.getAttribute("voice")+'.png';
        image.hidden=false;
    }
    if (organDoner.getAttribute("start") !== "1" && organDoner.getAttribute("start") !== null || organDoner.getAttribute("end") === 1){
            return;
        }
    if (organDoner.getAttribute("options") !==null && organDoner.getAttribute("options") !==0) {
        let buttons=organDoner.getAttribute("options");
        let optionsArray=organDoner.innerText.split("/");
        let menuTitle=optionsArray[0];
        document.querySelector("#dialogue").innerText="";
        prompt.innerText=menuTitle;
        prompt.hidden=false;

        let top=75;
        while (i !==optionsArray.length) {
            i++;
            let buttonElement=document.createElement("button");

            if (optionsArray.length !==i) {
                buttonElement.id="button-"+i;
                buttonElement.setAttribute('class', "choiceButton"); 
                buttonElement.innerText=optionsArray[i];
                buttonElement.style.top=top;
                buttonElement.setAttribute('onclick', "choice = " +i+"; done = 1; delBut();");
                prompt.appendChild(buttonElement);
                let script = document.createElement('script')
                script.innerText="function delBut () {if (choice !== null && choice !== undefined) { const buttonsToDelete = document.querySelectorAll('.choiceButton'); buttonsToDelete.forEach(button => button.remove()); prompt.innerText = ''; prompt.hidden = true;}}";
                buttonElement.appendChild(script);
            }

            top=top+60;
        }

    }

    else {
        prompt.hidden=true;

        function appendNextCharacter() {
            if (i < organDoner.innerText.length) {
                text+=organDoner.innerText[i];
                i++;
                document.querySelector("#dialogue").innerText=text;
                if (organDoner.getAttribute("voice") !== "") {
                const audio = new Audio('assets/Voices/' + organDoner.getAttribute("voice") + '.mp3');
                    audio.currentTime=0;
                    audio.play();
                }
                if (skip === 0) {
                    setTimeout(appendNextCharacter, 30); // Delay of 30 milliseconds
                } else if (skip === 1) {
                    setTimeout(appendNextCharacter, 5);
                }
            }
        }

        appendNextCharacter();
    }
    if (organDoner.getAttribute("end") === 1) {
        let textbox=document.querySelector("#textbox");
        textbox.hidden=true;
    }

    else {
        let textbox=document.querySelector("#textbox");
        textbox.hidden=false;
    }
}

let num=0;
let visible=document.querySelector('#textbox');
let prompt=document.querySelector("#prompt");
let parent=null;
let choice;
let done;
let deleteAllButton;
let skip = 0;
document.body.onmousedown=()=> {
    if (start===1 && prompt.innerText==="") {
        num++;
        writeFromID("#dialogue-" + num);
    }

    console.log(choice, done);
}
document.body.addEventListener("keydown", function(e) {
    if (e.key === " " || e.code === "Space" || e.keyCode === 32) {
        skip = 1;
    }
});
document.body.addEventListener("keyup", function(e) {
    if (e.key === " " || e.code === "Space" || e.keyCode === 32) {
        skip = 0;
    }
});