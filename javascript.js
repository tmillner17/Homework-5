let answers = ["Python", "Michael Jordan", "1998", "Reticulated Python", "Komodo Dragon"]
let time = 45
let timerId = setInterval(myTimer, 1000)
let correctAnswers = 0 

function doneClick(){
    let userAnswers = $("input:checked");
    for (var x = 0; x < userAnswers.length; x++){
        let curQuestion = $(userAnswers[x]).attr("data-question");
        let curAnswer = $(userAnswers[x]).val();
        console.log( curAnswer === answers[curQuestion]);
        if (curAnswer === curQuestion){
            correctAnswers++
            $("#correct-answers").text("Correct Answers" + correctAnswers)
        }
    }
}

$("#done").on("click", doneClick)


function myTimer() {
    time--
    $(".timer").text("Timer:" + time)
    if (time === 0) {
        clearInterval(timerId)
    }
}


