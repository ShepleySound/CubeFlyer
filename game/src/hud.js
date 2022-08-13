var score = 0;
let highScore = 0;
var scoreText;
var highScoreText;
var createHud = function() {
    var hudTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    // Create a Text Block that can display the current score
    scoreText = new BABYLON.GUI.TextBlock();
    scoreText.fontFamily = "Parchment";
    scoreText.color = "white";
    scoreText.fontSize = 48;
    scoreText.verticalAlignment = BABYLON.GUI.TextBlock.VERTICAL_ALIGNMENT_TOP;
    scoreText.horizontalAlignment = BABYLON.GUI.TextBlock.HORIZONTAL_ALIGNMENT_LEFT;
    scoreText.width = .5;
    scoreText.height = .15;
    
    highScoreText = new BABYLON.GUI.TextBlock();
    highScoreText.fontFamily = "Parchment";
    highScoreText.color = "white";
    highScoreText.fontSize = 48;
    highScoreText.verticalAlignment = BABYLON.GUI.TextBlock.VERTICAL_ALIGNMENT_TOP;
    highScoreText.horizontalAlignment = BABYLON.GUI.TextBlock.HORIZONTAL_ALIGNMENT_RIGHT;
    highScoreText.width = .5;
    highScoreText.height = .15;

    updateScoreText();
    updateHighScoreText();
    hudTexture.addControl(scoreText);
    hudTexture.addControl(highScoreText);
}

var updateScoreText = function() {
    scoreText.text = "Score: " + score;
}

var resetScore = function() {
    console.log("Score reset at: " + score);
    score = 0;
    updateScoreText();
}

var addScore = function(points) {
    score += points;
    updateScoreText();
}

var updateHighScoreText = function() {
    highScoreText.text = "High Score: " + highScore;
}
