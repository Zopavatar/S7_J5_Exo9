let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}


let elements = document.querySelector("div#liste-soft-skills").querySelectorAll("h2");

console.log(elements);

elements.forEach(element =>{
    for(const property in softSkills){
        if(element.innerText == property){
            element.innerText += ` : ${softSkills[property]}`;

            switch(true){
                case softSkills[property] == '100%':
                    element.style.background = "gold";
                    element.style.color = "black";
                    break;

                case softSkills[property] < "50%":
                    element.style.background = "red";
                    break;
                case softSkills[property] > '50%':
                    element.style.background = "green";
                    element.style.color = "white";
                    break;

                 case softSkills[property] == '50%':
                    element.style.background = "none";
                    break;

            }
        }
    }
})