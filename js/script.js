
// making the header smaller when scrolling
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust the scrollY value as needed
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

// handling the nestedList 
// document.addEventListener('DOMContentLoaded', function() {
//     const nestedList = document.getElementById('nestedList');
//     const hiddenList = document.getElementById('hiddenList');

//     nestedList.addEventListener('click', function(event) {
//         event.stopPropagation(); // Prevent the click from bubbling up to the document
//         if (hiddenList.style.display === 'block') {
//             hiddenList.style.display = 'none';
//         } else {
//             hiddenList.style.display = 'block';
//         }
//     });

//     document.addEventListener('click', function(event) {
//         // Check if the click is outside of nestedList and hiddenList
//         if (!nestedList.contains(event.target) && !hiddenList.contains(event.target)) {
//             hiddenList.style.display = 'none';
//         }
//     });
// });

// handling the flags list
document.addEventListener('DOMContentLoaded', function() {
    const SvgFlag = document.getElementById('flags');
    const UkFlag = document.getElementById('uk');
    const svg = document.getElementById('svg_flag');

    SvgFlag.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from bubbling up to the document
        if (UkFlag.style.display === 'block') {
            UkFlag.style.display = 'none';
            svg.classList.remove('rotate');
            uk.classList.remove('dropdown');
        } else {
            UkFlag.style.display = 'block';
            svg.classList.add('rotate');
            uk.classList.add('dropdown');

        }
    });

    document.addEventListener('click', function(event) {
        // Check if the click is outside of SvgFlag and UkFlag
        if (!SvgFlag.contains(event.target) && !UkFlag.contains(event.target)) {
            UkFlag.style.display = 'none';
        }
    });
});


// 

// document.addEventListener('DOMContentLoaded', function() {
//     const nestedList = document.getElementById('nestedList');
//     const hiddenList = document.getElementById('hiddenList');

//     nestedList.addEventListener('click', function() {
//         if (hiddenList.style.display === 'block') {
//             hiddenList.style.display = 'none';
//         } else {
//             hiddenList.style.display = 'block';
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const SvgFlag = document.getElementById('flags');
//     const UkFlag = document.getElementById('uk');
//     SvgFlag.addEventListener('click', function() {
//         if (UkFlag.style.display === 'block') {
//             UkFlag.style.display = 'none';
//         } else {
//             UkFlag.style.display = 'block';
//         }
//     });
// });

// add the currenct date 

document.addEventListener('DOMContentLoaded', function() {
    const currentDateElement = document.getElementById('currentDate');
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    currentDateElement.textContent = formattedDate;
});

// img slider
// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("imgElement");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("imgElement");
    let totalSlides = slides.length;
    let slidesToShow = 3;

   // Normalize slideIndex to ensure it wraps around correctly
   if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slidesToShow;
  }

    // Hide all slides
    for (i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";  
        if(slideIndex > totalSlides){
          slideIndex = 0;
        }
        
    }

    // Display the current set of slides
    for (i = slideIndex; i < slideIndex + slidesToShow; i++) {
        if (i < totalSlides) {
            slides[i].style.display = "flex";  
        }
    }

    // Update navigation buttons visibility
    document.querySelector('.prev').classList.toggle('hidden', slideIndex === 0);
    document.querySelector('.next').classList.toggle('hidden', slideIndex + slidesToShow >= totalSlides);
}

// Initial call to show the first set of slides
showSlides();

// loginpage , when click on the languages 
document.addEventListener('DOMContentLoaded', function() {
  const LangElement = document.getElementById('element');
  LangElement.addEventListener('click', function(event){
    LangElement.classList.add('current');
  })
});