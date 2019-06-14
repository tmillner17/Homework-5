let answers = ["Python", "Michael Jordan", "1998", "Reticulated Python", "Komodo Dragon"]
let time = 45
let timerId = setInterval(myTimer, 1000)
let correctAnswers = 0

function doneClick() {
    let userAnswers = $("input:checked");
    userAnswers.each(function (x, cur) {
        let curQuestion = $(cur).attr("data-question");
        let curAnswer = $(cur).val();
        console.log(curAnswer, answers[curQuestion]);
        if (curAnswer === answers[curQuestion]) {
            correctAnswers++
            $("#correct-answers").text("Correct Answers:" + correctAnswers + '/' + answers.length)
        }
    });
}

$("#done").on("click", doneClick)


function myTimer() {
    time--
    $(".timer").text("Timer:" + time)
    if (time === 0) {
        clearInterval(timerId)
    }
}


