

document.addEventListener("DOMContentLoaded", function() {
    const navTabs = document.getElementById('navTabs');
    const navItems = navTabs.getElementsByTagName('li');

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', function() {
            // Remove the active class from all <li> elements
            for (let j = 0; j < navItems.length; j++) {
                navItems[j].classList.remove('active');
            }
            // Add the active class to the clicked <li> element
            this.classList.add('active');
        });
    }
});





$('.logoCarousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:20,
    dotsEach:2,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
})


$('.testimonialCarousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    stagePadding:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        },
        1400:{
            items:3
        }
    }
})

// for sidebar
function openNav() {
    document.getElementById("mySidepanel").style.left = "0%";
  }
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.left = "100%";
  }

 


// const playButtons = document.getElementById('play');

//   // Loop through all play buttons
// //   playButtons.forEach(button => {
// //     button.addEventListener('click', () => {
// //       // Find the video container of the clicked card
// //       const videoContainer = button.closest('.card').querySelector('.video-container');

// //       // Toggle the display of the video container
// //       videoContainer.style.display = videoContainer.style.display === 'none' ? 'block' : 'none';
// //     });
// //   });

// const plyBtn =()=>{
//     playButtons.play()
// }





var playButtons = document.querySelectorAll('.playParent');

// Add event listeners to each button
playButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        var cardId = this.getAttribute('data-card-id');
        toggleVideo(cardId);
        event.stopPropagation(); // Prevent card click event from triggering
    });
});

// Add event listeners to each card
var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        var cardId = this.id.replace('card', '');
        toggleVideo(cardId);
    });
});

function toggleVideo(cardId) {
    var card = document.getElementById('card' + cardId);
    var thumbnail = card.querySelector('.video-thumbnail');
    var iframe = card.querySelector('.video-frame');
    var playButton = card.querySelector('.playParent');
    var video = iframe.contentWindow.document.querySelector('video');

    if (iframe.style.display === "none" || iframe.style.display === "") {
        thumbnail.style.display = "none";
        iframe.style.display = "block";
        playButton.style.display = "none";
        playVideo(video);
    } else {
        thumbnail.style.display = "block";
        iframe.style.display = "none";
        playButton.style.display = "flex";
        pauseVideo(video);
    }
}

function playVideo(video) {
    video.play();
}

function pauseVideo(video) {
    video.pause();
}