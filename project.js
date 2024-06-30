$(function () {
    setLetters();
    $(".letter1,.letter2,.letter3,.letter4,.letter5").click(function () {
      $(this).addClass("purple");
      selectLetter($(this)[0].innerText);
    });
    $(".shuffle").click(function () {
      shuffle(letters);
    });

  });

 
  $(function(){
    $(".bulb").on("click",function (){
       // alert("clicked"); 
       hint(words);
      });     
  })

  //when you double click the bulb icon, it will hide all 
  $(function(){
    $(".bulb").on("dblclick",function (){
        //alert(" dbl clicked"); 
        hide(words);
      });     
  })

  
  
  let letters = ["S", "O", "U", "E", "M"];
  
  let global_word = "";
  
  let words = [
    {
      value: "SOME",
      status: false,
    },
    {
      value: "SUM",
      status: false,
    },
    {
      value: "MUSE",
      status: false,
    },
    {
      value: "MOUSE",
      status: false,
    },
    {
      value: "SUE",
      status: false,
    },
    {
      value: "USE",
      status: false,
    },
  ];
  
  // Selected Word
  
  let selectedWord = $("#selectedWord");
  
  // Set up letters
  
  function setLetters() {
    let object = $(".letters p");
  
    for (let i = 0; i < object.length; i++) {
      object[i].append(letters[i]);
    }
  }
  
 
//prevent right click on grey circle area
  
  $(".circle").contextmenu(function(e){
      e.preventDefault() ;
  })


  // Write a function that takes a param letter.
  function selectLetter(letter) {
    // Create the word base
    selectedWord.append(letter);
    global_word = global_word + letter;
  
    // Compare here will be triggered with right click
    
    $('.circle').bind('mousedown contextmenu', function () {
        compare(global_word, words);
        
    });
  }
  
  function compare(word, words) {
    for (var i = 0; i < words.length; i++) {
      if (words[i].value === word) {
        words[i].status = true;
        // Calls activate  Word
        console.log(words[i].value, "was found !!");
  
        activateWord(words[i].value);
  
        $(".letter1,.letter2,.letter3,.letter4,.letter5").removeClass("purple");
  
        global_word = "";
  
        selectedWord.empty();
      }
    }
  }
  
  function activateWord(word) {
    $(`.${word}`).addClass("selected");
  }

  function deactivateWord(word) {
     $(`.${word}`).removeClass("selected");

  }
  
  function hint(words) {
    // Show all of them
    for (var i = 0; i < words.length; i++) {
       if( words[i].status=true){
        activateWord(words[i].value);
       }
    }
  }

  function hide(words) {
 
    for (var i = 0; i < words.length; i++) {
       if( words[i].status=true){
        deactivateWord(words[i].value);
       }
    }
  }

  
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    let object = $(".letters p");
    $(".letter1,.letter2,.letter3,.letter4,.letter5").empty();
  
    for (let i = 0; i < object.length; i++) {
      object[i].append(array[i]);
    }
  }


  
 function shake(){
    $('document').ready(function() {
        $('.circle').hide();
        $('.circle').slideDown();
        if ($('.circle').is(':visible')) {
            $('.circle').effect( "shake" );
        }
    });
  }

  function errors(words, global_word){
    
    for (var i = 0; i < words.length; i++) {
        if(global_word!==words[i].value){
            //console.log("false");
            shakeElement();
        }
    }
    
  }
