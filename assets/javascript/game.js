
var characterSelected = false;
var defenderSelected = false;
var character = {};
var defender = {};
var enemiesDefeated = 0;
gameOver = false;

var gary = {
    name: "Gary",
    health: 120,
    baseAttack: 8,
    attack: 8
  };
  
  var patrick = {
    name: "Patrick",
    health: 100,
    baseAttack: 5,
    attack: 5
  };
  
  var plankton = {
    name: "Plankton",
    health: 150,
    baseAttack: 20,
    attack: 20
  };
  
  var spongebob = {
    name: "Spongebob",
    health: 180,
    baseAttack: 25,
    attack: 25
  };


//   / ----- Helper Functions ----- //

// This function will initialize the character value from the global object variables defined above
  function initializeCharacter(chosenCharacter) {
    character.name = chosenCharacter.name;
    character.health = chosenCharacter.health;
    character.baseAttack = chosenCharacter.baseAttack;
    character.attack = chosenCharacter.attack;
  }

// This function will initialize the enemy's value from the global object variables defined above
  function initializeDefender(chosenDefender) {
    defender.name = chosenDefender.name;
    defender.health = chosenDefender.health;
    defender.baseAttack = chosenDefender.baseAttack;
    defender.attack = chosenDefender.attack;
  }

  // This function will move the remaining characters to the enemies section
     
function moveToEnemies() {
    $(".available-character").removeClass("available-character").addClass("enemy-character");
    $("#enemies-available").append($(".enemy-character"));
  }
  
  // This function will reset the state of the game
  function resetGame() {
    // Reset all the health values to the original

    $("#gary-character").children(".health").html(gary.health);
    $("#patrick-character").children(".health").html(patrick.health);
    $("#plankton-character").children(".health").html(plankton.health);
    $("#spongebob-character").children(".health").html(spongebob.health);
  
    $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
    var available = $(".available-character").show();
    $("#characters-available").html(available);
  
    $("#game-message").empty();
    $("#restart").hide();
  
    characterSelected = false;
    defenderSelected = false;
    enemiesDefeated = 0;
    gameOver = false;
  
    character = {};
    defender = {};
  }

  $(document).ready(function() {

    // Hide the "Restart" button on document load
    $("#restart").hide();
  
    // Determine which character the user has clicked
    $("#gary-character").on("click", function () {
      console.log("gary is selected");
  
      // User is choosing the character
      if(characterSelected == false) {
        $("#game-message").empty();
  
        // Set the user's character
        initializeCharacter(gary);
        characterSelected = true;
  
        // Display the chosen character
        $("#gary-character").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        // Move the remaining characters to the enemies section
        moveToEnemies();
      } else if ((characterSelected == true) && (defenderSelected == false)) {
        // User is choosing the defender
        if($("#gary-character").hasClass("enemy-character")) {
          $("#game-message").empty();
  
          // Set the user's enemy
          initializeDefender(gary);
          defenderSelected = true;
  
          // Add the character to the defender section
          $("#gary-character").removeClass("enemy-character").addClass("defender-character");
          $("#defender-section").append(this);
        }
      }
    });
  
    $("#patrick-character").on("click", function () {
      console.log("Patrick is selected");
  
      // User is choosing the character
      if(characterSelected == false) {
        $("#game-message").empty();
  
        // Set the user's character
        initializeCharacter(patrick);
        characterSelected = true;
  
        // Display the chosen character
        $("#patrick-character").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        // Move the remaining characters to the enemies section
        moveToEnemies();
      } else if ((characterSelected == true) && (defenderSelected == false)) {
        // User is choosing the defender
        if($("#patrick-character").hasClass("enemy-character")) {
          $("#game-message").empty();
  
          // Set the user's enemy
          initializeDefender("#patrick-character");
          defenderSelected = true;
  
          // Add the character to the defender section 
          $("#patrick-character").removeClass("enemy-character").addClass("defender-character");
          $("#defender-section").append(this);
        }
      }
    });
  
    $("#plankton-character").on("click", function () {
      console.log("Plankton is selected");
  
      // User is choosing the character
      if(characterSelected == false) {
        $("#game-message").empty();
  
        // Set the user's character
        initializeCharacter(plankton);
        characterSelected = true;
  
        // Display the chosen character
        $("#plankton-character").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        // Move the remaining characters to the enemies section
        moveToEnemies();
      } else if ((characterSelected == true) && (defenderSelected == false)) {
        // User is choosing the defender
        if($("#plankton-character").hasClass("enemy-character")) {
          $("#game-message").empty();
  
          // Set the user's enemy
          initializeDefender(plankton);
          defenderSelected = true;
  
          // Add the character to the defender section 
          $("#plankton-character").removeClass("enemy-character").addClass("defender-character");
          $("#defender-section").append(this);
        }
      }
    });
  
    $("#spongebob-character").on("click", function () {
      console.log("Spongebob is selected");
  
      // User is choosing the character
      if(characterSelected == false) {
        $("#game-message").empty();
  
        // Set the user's character
        initializeCharacter(spongebob);
        characterSelected = true;
  
        // Display chosen character
        $("#spongebob-character").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);
  
        // Move  remaining characters to the enemies section
        moveToEnemies();
      } else if ((characterSelected == true) && (defenderSelected == false)) {
        // User is choosing the defender
        if($("#spongebob-character").hasClass("enemy-character")) {
          $("#game-message").empty();
  
          // Set user's enemy
          initializeDefender(spongebob);
          defenderSelected = true;
  
          // Add the character to the defender section 
          $("#spongebob-character").removeClass("enemy-character").addClass("defender-character");
          $("#defender-section").append(this);
        }
      }
    });
  
    $("#attack").on("click", function() {
      console.log("Attack selected");
  
      console.log("character = " + JSON.stringify(character));
      console.log("defender = " + JSON.stringify(defender));
  
      // User is ready to attack the defender
      if (characterSelected && defenderSelected && !gameOver) {
        // User attacks the defender and decreases the defender's health points
        defender.health = defender.health - character.attack;
        $(".defender-character").children(".health").html(defender.health);
        $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + " damage.<p>");
  
        // User's attack power increases
        character.attack = character.attack + character.baseAttack;
  
        // If defender is still alive, counter attack the user
        if (defender.health > 0) {
          character.health = character.health - defender.baseAttack;
          $(".chosen-character").children(".health").html(character.health);
  
          // Check if user survives attack
          if (character.health > 0) {
            $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</p>");
          } else {
            gameOver = true;
            $("#game-message").html("<p>You were defeated... womp womp...</p><p>Play again?</p>");
            $("#restart").show();
          }
        } else {
          // Defender  defeated
          enemiesDefeated++;
          defenderSelected = false;
          $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
          $(".defender-character").hide();
  
          // Check if the user has won the game
          if (enemiesDefeated === 3) {
            gameOver = true;
            $("#game-message").html("<p>You have won the game!!!</p><p>Play again?</p>");
            $("#restart").show();
          }
        }
      } else if (!characterSelected && !gameOver) {
        $("#game-message").html("<p>You must first select your game character.</p>");
      } else if (!defenderSelected && !gameOver) {
        $("#game-message").html("<p>You must choose an enemy to fight.</p>");
      }
  
      console.log("character = " + JSON.stringify(character));
      console.log("defender = " + JSON.stringify(defender));
    });
  
    $("#restart").on("click", function() {
      console.log("Restart selected");
  
      resetGame();
    });
  
  }); // Main routine


  