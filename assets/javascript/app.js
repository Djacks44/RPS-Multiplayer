var nameData = new Firebase("https://bluetoyuakl.firebaseio.com/"); 
var wins1 = 0
var wins2 = 0
var losses1 = 0
var losses2 = 0
var player1Guess = [];
var player2Guess = [];
var clicks = 0
$("#addName").on("click", function(){
  if (clicks==0) {
    clicks++;
    var name = $("#name-input").val().trim();

nameData.push({
            name1: name,
            wins1: wins1,
            losses1: losses1,
            clicks: clicks,
        });

  } else {
     clicks--;
    var name = $("#name-input").val().trim();
    nameData.push({
            name2: name,
             wins2: wins2,
            losses2: losses2,
            clicks: clicks,

  });
};


  return false;
});

      


nameData.on("child_added", function(childSnapshot) {
    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().name1);
    console.log(childSnapshot.val().name2);
    console.log(childSnapshot.val().wins2);
    console.log(childSnapshot.val().losses2);
    console.log(childSnapshot.val().wins1);
    console.log(childSnapshot.val().losses1);
    // full list of items to the well
            clicks = childSnapshot.val().clicks
$("#name2").text(childSnapshot.val().name2);
$("#r").html("<br><br>Rock");
$("#p").html("<br>Paper");
$("#s").html("<br>Scissors<br>");
$("#wins2").html("<br><br>Wins: "+childSnapshot.val().wins2+" losses: "+childSnapshot.val().losses2);

$("#name1").text(childSnapshot.val().name1);
$("#r1").html("<br><br>Rock");
$("#p1").html("<br>Paper");
$("#s1").html("<br>Scissors<br>");
$("#wins1").html("<br><br>Wins: "+childSnapshot.val().wins1+" losses: "+childSnapshot.val().losses1);
});


$("#r,#p,#s").on("click", function(){
    console.log(this.id)
    player2Guess.push(this.id)
    
    if (this.id == "r") {
        $("#player2").html("Rock"); 
    }else if (this.id == "p") {
        $("#player2").html("Paper"); 
    }else{
        $("#player2").html("Scissors"); 
    }
 if (player1Guess[0] == player2Guess[0]) {
        $("#whowins").html("The Rresult is a Draw"); 
    }else if (player1Guess[0] == "r" && player2Guess[0] == "p") { 
         $("#whowins").html("Player 2 Wins!");
        wins2++;
        losses1++;
    }else if (player1Guess[0] == "r" && player2Guess[0] == "s") { 
         $("#whowins").html("Player 1 Wins!");
        wins1++;
        losses2++;
    }else if (player1Guess[0] == "p" && player2Guess[0] == "r") { 
         $("#whowins").html("Player 1 Wins!");
        wins1++;
        losses2++;
    } else if (player1Guess[0] == "p" && player2Guess[0] == "s") { 
         $("#whowins").html("Player 2 Wins!");
        wins2++;
        losses1++;
    } else if (player1Guess[0] == "s" && player2Guess[0] == "r") { 
         $("#whowins").html("Player 2 Wins!");
        wins2++;
        losses1++;
    }else if (player1Guess[0] == "s" && player2Guess[0] == "p") { 
        $("#whowins").html("Player 1 Wins!");
        wins1++;
        losses2++;
    };


   
});

$("#r1,#p1,#s1").on("click", function(){
    console.log(this.className)
    player1Guess.push(this.className)
    if (this.className == "r") {
        $("#player1").html("Rock"); 
    }else if (this.className == "p") {
        $("#player1").html("Paper"); 
    }else{
        $("#player1").html("Scissors"); 
    }

 if (player1Guess[0] == player2Guess[0]) {
 $("#whowins").html("The Rresult is a Draw"); 
    } else if (player1Guess[0] == "r" && player2Guess[0] == "p") { 
         $("#whowins").html(name+" Wins!");
        wins2++;
        losses1++;
    }else if (player1Guess[0] == "r" && player2Guess[0] == "s") { 
         $("#whowins").html(name+" Wins!");
        wins1++;
        losses2++;
    }else if (player1Guess[0] == "p" && player2Guess[0] == "r") { 
         $("#whowins").html(name+" Wins!");
        wins1++;
        losses2++;
    } else if (player1Guess[0] == "p" && player2Guess[0] == "s") { 
         $("#whowins").html(name+" Wins!");
        wins2++;
        losses1++;
    } else if (player1Guess[0] == "s" && player2Guess[0] == "r") { 
         $("#whowins").html(name+" Wins!");
        wins2++;
        losses1++;
    }else if (player1Guess[0] == "s" && player2Guess[0] == "p") { 
        $("#whowins").html(name+" Wins!");
        wins1++;
        losses2++;
    };

   











return false;
});

      var myDataRef = new Firebase('https://bluetoyuakl.firebaseio.com/'); 
      $('#messageInput').keypress(function (e) { 
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();  
          var text = $('#messageInput').val();
          myDataRef.push({name: name, text: text}); 
          $('#messageInput').val('');
        }
      });
      myDataRef.on('child_added', function(snapshot) { 
        var message = snapshot.val(); 
        displayChatMessage(message.name, message.text); 
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
