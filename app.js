let javaScriptQuestion =
    [{
        question: "Javascript is _ language?",
        option: ["Dynamic computer programming language", "Javascript is an object-oriented programming language", "Javascript is a Scripting language", "All the Above"],
        answer: "All the Above"
    },
    {
        question: "What is the correct file extension for Javascript files?",
        option: [".java", ".js", ".jsc", ".jp"],
        answer: ".js"
    },
    {
        question: "What is the output of below? 33 == 33.0",
        option: ["False", "33", "True", "None of the above"],
        answer: "True"
    }];

/*********************************************************************************
                        Declare All Variables                                   */
const languageSection = document.getElementById('languages-section');
const questionSection = document.getElementById('question-section');
const questionDiv = document.getElementById('question');


const javascriptButton = document.getElementById('javascript-btn');
const phpButton = document.getElementById('php-btn');
const csharptButton = document.getElementById('csharp-btn');
const javaButton = document.getElementById('java-btn');
const questionCloseButton = document.getElementById('question-close');

const testControlButton = document.getElementById('testControlButton');

let currentQuestionNo = 1;


/*********************************************************************************
               Add Event Listener to Language Buttons                           */
javascriptButton.addEventListener('click', () => {
    toogleLanguageQuestionDisplay(questionSection);
    toogleLanguageQuestionDisplay(languageSection);
    questionDivSetHTML(questionDiv, "JavaScript")
    testControlButton.setAttribute('test', "JavaScript");
    
});

phpButton.addEventListener('click', () => {
    toogleLanguageQuestionDisplay(questionSection);
    toogleLanguageQuestionDisplay(languageSection);
    testControlButton.setAttribute('test', "PHP");
});

csharptButton.addEventListener('click', () => {
    toogleLanguageQuestionDisplay(questionSection);
    toogleLanguageQuestionDisplay(languageSection);
    testControlButton.setAttribute('test', "CSharp");
});

javaButton.addEventListener('click', () => {
    toogleLanguageQuestionDisplay(questionSection);
    toogleLanguageQuestionDisplay(languageSection);
    testControlButton.setAttribute('test', "Java");
});



/*********************************************************************************
                    Set Question and Start Test                                  */
const questionDivSetHTML = (divId, heading) => {
    divId.innerHTML =
        `
        <h3 class="text-center mb-2">${heading}</h3>
        <div id="questions" class="p-3">
            <h5>Test Rules:</h5>
            <ul>
                <li>1. For each right answer you will get 2 marks</li>
                <li class="text-danger">2. For each wrong answer 0.25 marks will be deducted</li>
                <li>3. If you skip any question, you will get 0 for the corresponding question</li>
                <li>4. Pass Mark is 60%</li>
                <li>5. Once you answer a question, you can not recall or change it</li>
            </ul>           
        </div>
    `;
}


testControlButton.addEventListener('click', (Event)=>{
    if(Event.target.innerText === "Start Test"){
        const test = Event.target.getAttribute('test');   
        if(test === "JavaScript"){
            questionDisplay(javaScriptQuestion, currentQuestionNo);
            currentQuestionNo++
            if(javaScriptQuestion.length>2){
                Event.target.innerText = "Next";
            }
            else{
                Event.target.innerText = "Finish";
            }
        }
        else if(test === "CSharp"){
            console.log(test);
        }
        else if(test === "PHP"){
            console.log(test);
        }
        else if(test === "Java"){
            console.log(test);
        }
    }
    else if(Event.target.innerText === "Next"){
        questionDisplay(javaScriptQuestion, currentQuestionNo);  
        currentQuestionNo++;      
        if(javaScriptQuestion.length === currentQuestionNo){
            Event.target.innerText = "Finish";
        }  
    }
    else if(Event.target.innerText === "Finish"){
        
    }    
});


// const startTest = (qSetString) => {
//     const qSet = eval(qSetString);
//     let questionNo = 1;
//     let score = 0;
//     questionDisplay(qSet, 1);
//         console.log(qSet);
   
// }

const questionDisplay = (set, qNo) => {    
    questionDiv.innerHTML =
    `<form>
        <p>${set[qNo].question}</p>
        <input type="radio" id="html" name="fav_language" value="HTML">
        <label for="html">${set[qNo].option[0]}</label><br>
        <input type="radio" id="css" name="fav_language" value="CSS">
        <label for="css">${set[qNo].option[1]}</label><br>
        <input type="radio" id="javascript" name="fav_language" value="JavaScript">
        <label for="javascript">${set[qNo].option[2]}</label><br>
        <input type="radio" id="javascript" name="fav_language" value="JavaScript">
        <label for="javascript">${set[qNo].option[3]}</label>
    </form >    
    `    
}


// -------------      Question Close Button     --------------- 
questionCloseButton.addEventListener('click', () => {
    toogleLanguageQuestionDisplay(questionSection);
    toogleLanguageQuestionDisplay(languageSection);

    ;
})


// -------------      Toogle Code for Section Display    --------------- 
const toogleLanguageQuestionDisplay = (field) => {
    if (field.classList.contains("d-none")) {
        field.classList.remove("d-none");
    }
    else {
        field.classList.add("d-none");
    }
}
