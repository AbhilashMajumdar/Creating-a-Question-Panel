var correctCount=0;
var length=5;
var i=0;

var prev=document.getElementById("prev");
var score=document.getElementById("score");

//initialize the first question
generate(0);

//generate from json file with index
function generate(index)
{
    document.getElementById("qsn_no").innerHTML = `<h1>Question No -  ${index+1} </h1>`;
    document.getElementById("question").innerText = jsonData[index].question;
    document.getElementById("opt1").innerText = jsonData[index].opt1;
    document.getElementById("opt2").innerText = jsonData[index].opt2;
    document.getElementById("opt3").innerText = jsonData[index].opt3;
    document.getElementById("opt4").innerText = jsonData[index].opt4;
    if(index==0)
    {
        prev.style.display = "none";
        score.style.display = "none";
    }
    else
    {
        prev.style.display = "inline";
    }
}


//function for going to next question
function goNext()
{
    if(document.getElementById("option1").checked && jsonData[i].opt1 == jsonData[i].answer)
    {
        correctCount++;
    }
    else if(document.getElementById("option2").checked && jsonData[i].opt2 == jsonData[i].answer)
    {
        correctCount++;
    }
    else if(document.getElementById("option3").checked && jsonData[i].opt3 == jsonData[i].answer)
    {
        correctCount++;
    }
    else if(document.getElementById("option4").checked && jsonData[i].opt4 == jsonData[i].answer)
    {
        correctCount++;
    }

    document.getElementById("option1").checked = false;
    document.getElementById("option2").checked = false;
    document.getElementById("option3").checked = false;
    document.getElementById("option4").checked = false;


    console.log(correctCount);
    i++;
    
    if(length-1<i)
    {
        question = document.getElementById("questionPanel");
        question.style.display = "none";
        score.style.display = "inline";
        score.innerText = "Your Score is : " + correctCount;
    }
    
    generate(i);
}


//function for going to previous question
function goPrev()
{
    i--;
    --correctCount;
    generate(i);
}