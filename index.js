
$(document).ready(function() {
    // Initialize the scores
    let homeScore = 0
    let guestScore = 0

    //Update the scores display
    function updateScores() {
        $('#left-side h3').text(homeScore)
        $('#right-side h3').text(guestScore)
    }

    // Increment the home score when the corresponding button is clicked
    $('#left-side .btns button').click(function() {
        let value = parseInt($(this).text());
        homeScore += value;
        updateScores();
    })

    // Increment the guest score when the corresponding button is clicked
    $('#right-side .btns button').click(function() {
        let value = parseInt($(this).text())
        guestScore += value
        updateScores()
    })

    // Reset the scores when the "New Game" button is clicked
    $('#new-game').click(function() {
        homeScore = 0
        guestScore = 0
        updateScores()
    })
})