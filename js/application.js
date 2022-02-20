// JavaScript Document



$(document).ready(function(){
	"use strict";

 $('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});


//repeat slider as slider 2 for workshop page//
    
    //I AM REPEATING THE SAME CODE HERE AS I NEED THE SAME SLIDER ON THE WORKSHOP PAGE, INSTEAD OF COMPLICATING THE CODE WITH CLASSES, I PREFER TO COPY AND PASTE THIS CODE WITH A NEW CLASS//
    

    $('.slider2').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group2');
  var $slides = $this.find('.slide2');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn2').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn2').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn2">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons2');
    bulletArray.push($button);
  });
  
  advance();
});
	
	
	
	//repeat slider 2 as slider 3 for subscribtion page//
	  
    
    

    $('.slider3').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group3');
  var $slides = $this.find('.slide3');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn3').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn3').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn3">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons3');
    bulletArray.push($button);
  });
  
  advance();
});
	
	 
	

    //TESTIMONIALS SLIDER
    //by https://codepen.io/feyinway/

    var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}


//NEWSLETTER SIGN UP 
//newsletter form animation by Aude
//codepen.io/audeficheux

var subscribe_button = document.querySelector(".subscribe_button");

subscribe_button.addEventListener('click', function(){
	var subscribing = document.querySelector(".subscribing");
	var thanks = document.querySelector(".thanks");
	var login = document.querySelector(".login");

	subscribing.classList.add("subscribing_active");
	subscribe_button.classList.add("subscribe_button_active");
	setTimeout(function(){
		login.classList.add("login_active");
	}, 1200);
	setTimeout(function(){
		thanks.classList.add("thanks_active");
	}, 1400);

	setTimeout(function(){
		thanks.classList.remove("thanks_active");
		login.classList.remove("login_active");
		subscribing.classList.remove("subscribing_active");
		subscribe_button.classList.remove("subscribe_button_active");
	}, 4000);
});
     
    (function(){
  var strReturned = "";
  var arrLength;
  var count = 0;
  var submittedForm = document.getElementById('user-form');
  submittedForm.addEventListener('submit', validateData, false);
  submittedForm.addEventListener('reset', resetFormEntry, false);
  
  function resetEntry(formNode){
    formNode.classList.remove("invalid");
    formNode.nextElementSibling.classList.remove("valdiation-error");
  }

  function resetFormEntry(){
    var invalidNodes = document.getElementsByClassName("invalid");
    var invalidNodesAsArray = [].slice.call(invalidNodes);
    for(let j = 0; j <= invalidNodesAsArray.length; j++){
      resetEntry(invalidNodesAsArray[j]);

    }
  }



  function invalidateFormEntry(formSection){
    formSection.classList.add("invalid");
    formSection.nextElementSibling.classList.add("valdiation-error");
  }

  function validateUserBirthdateYear(inputData){
    var dayAsNum = parseInt(inputData.value);
      if(dayAsNum > 1998 || dayAsNum < 1916){
        invalidateFormEntry(inputData);
      } 
  }

  function validateUserBirthdateMonth(formMonthData){
    var monthAsNum = parseInt(formMonthData.value);
      if(monthAsNum > 12 || monthAsNum < 1){
        invalidateFormEntry(formMonthData);
      } 
  }

  function validateUserEmail(formEmailData){
    var atSymbolIndex;
    var periodIndex;
      if(formEmailData.value.indexOf("@")){
        atSymbolIndex = formEmailData.value.indexOf("@");
        if(formEmailData.value.lastIndexOf(".")){
          periodIndex = formEmailData.value.lastIndexOf(".");
            if(atSymbolIndex + 1 > periodIndex){
              formEmailData.classList.add("invalid");
              formEmailData.nextElementSibling.classList.add("valdiation-error");
            }
        }
      }
  }

  function validateData(event){
    var formData = submittedForm.elements;
    event.preventDefault();
    var userEmail = formData['user-email'];
    var userName = formData['user-name'];
    var userBirthDateMonth = formData['birthdate-month'];
    var userBirthDateYear = formData['birthdate-year'];
    var userBirthDateDay = formData['birthdate-day'];

    if(userName.value === ""){
      invalidateFormEntry(userName);
    }
    
    if(userEmail){
      var atSymbolIndex;
      var periodIndex;
      if(userEmail.value.indexOf("@")){
        atSymbolIndex = userEmail.value.indexOf("@");
        if(userEmail.value.lastIndexOf(".")){
          periodIndex = userEmail.value.lastIndexOf(".");
          if(atSymbolIndex + 1 > periodIndex){
            userEmail.classList.add("invalid");
            userEmail.nextElementSibling.classList.add("valdiation-error");
          }
        }
      }
    }

    if(userBirthDateMonth){
      invalidateFormEntry(userBirthDateMonth);
    }    

    if(userBirthDateDay){
      invalidateFormEntry(userBirthDateDay);
    }    

    if(userBirthDateYear){
      invalidateFormEntry(userBirthDateYear);
    }

    if(formData['checkbox'].checked === false){
      formData['checkbox'].nextElementSibling.classList.add("invalidcheckbox");
      document.getElementById("error-terms-of-service").classList.add("valdiation-error");
    }
  }


  function postDataCall(){
    $.ajax({
      type: "POST",
      data: {},
      url: "link",
      success: function(result){
        arrLength = result.length;
        sortData(result, sortItems);
      },
      error: function(err){
        console.log("There is an error: " + err);
      }
    });
  }

  })();
	
$('.photo').on('click', function(){ 
		var bgImage = $(this).attr("data-img");
	
 		$(".bg-image").attr("src", bgImage);
 	
  

       }); 
     
    
    
    
//	
//	      
    
    });