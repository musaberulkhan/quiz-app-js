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


javascriptButton.addEventListener('click', ()=>{    
    toogleLanguageQuestionDisplay(questionSection);
    toogleLanguageQuestionDisplay(languageSection);
    questionDivSetHTML(questionDiv, "JavaScript Battle");
});

phpButton.addEventListener('click', ()=>{    
    toogleLanguageQuestionDisplay(questionSection);
    toogleLanguageQuestionDisplay(languageSection);
    questionDivSetHTML(questionDiv, "PHP Battle");
});

csharptButton.addEventListener('click', ()=>{    
    toogleLanguageQuestionDisplay(questionSection);
    toogleLanguageQuestionDisplay(languageSection);
    questionDivSetHTML(questionDiv, "C# Battle");
});

javaButton.addEventListener('click', ()=>{    
    toogleLanguageQuestionDisplay(questionSection);
    toogleLanguageQuestionDisplay(languageSection);
    questionDivSetHTML(questionDiv, "Java Battle");
});


const questionDivSetHTML = (divId, heading) =>{
    divId.innerHTML =
    `
        <h3 class="text-center mb-2">${heading}</h3>
        
    `;
}


// -------------      Question Close Button     --------------- 
questionCloseButton.addEventListener('click', ()=>{
    toogleLanguageQuestionDisplay(questionSection);
    toogleLanguageQuestionDisplay(languageSection);
    
;})


// -------------      Toogle Code for Section Display    --------------- 
const toogleLanguageQuestionDisplay = (field)=>{
    if(field.classList.contains("d-none")){
        field.classList.remove("d-none");
    }
    else{
        field.classList.add("d-none");
    }
}
