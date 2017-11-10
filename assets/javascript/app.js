$(function() {
    // This is the only thing working 100%
    // Timer
    var count = 61;
    var intervalId;

    // score
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    $("#results").hide();
    $("#quiz").hide();

    function checkAnswer(questionNumber, expectedAnswer) {
        var userChoice = $("input[name=q" + questionNumber + "]:checked").val();
        console.log("Answer" + questionNumber + ": '" + userChoice + "'");
        if (userChoice === expectedAnswer) {
            correct++;
        }
        else if (userChoice === undefined) {
            unanswered++;
        }
        else {
            incorrect++;
        }
    }

    $("#submit").click(function() {

        stop();
        reset();

        // Check the answers
        checkAnswer("1", "3");
        checkAnswer("2", "4");
        checkAnswer("3", "1");
        checkAnswer("4", "4");
        checkAnswer("5", "2");
        checkAnswer("6", "3");
        checkAnswer("7", "1");
        checkAnswer("8", "4");

        console.log("Correct: " + correct);
        console.log("Incorrect: " + incorrect);
        console.log("Unanswered: " + unanswered);

        // Show hide
        $("#quiz").hide(500);
        $("#results").show(500);

        // Update HTML with score
        $("#correctAnswers").text(correct);
        $("#incorrectAnswers").text(incorrect);
        $("#noAnswer").text(unanswered);
    });


    $("#start").click(startGame);

    function startGame() {
        $("#instructions").hide();
        $("#quiz").show(500);
        intervalId = setInterval(decrement, 1000);

    }

    function decrement() {
        --count;
        // minutes = (minutes < 10) ? minutes : minutes;
        $('#timer').html("Time Remaining " + count + " Seconds");

        if (count === 0) {
            stop();
            reset();
            alert("TIME UP!");
            $("#quiz").hide(500);
            $("#results").show(500);
        }

    }

    function stop() {
        clearInterval(intervalId);
    }

    function reset() {
        count = 60;
        $("#timer").html("Time Remaining " + count + " Seconds");
    }

});
// End of 100% working code
