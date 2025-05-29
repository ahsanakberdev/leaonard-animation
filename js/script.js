const logo = document.getElementById("logo");
const nard = document.getElementById("nard");
const sub = document.getElementById("subscript");

const initialText = "LEONARDCO";
const transitionText = "LEO<sub>CO</sub>";

const slideDelay = 600;       // Balanced delay
const slideDuration = 400;    // Smoother, slightly faster than original

let isHovered = false;

// Typewriter animation
// function typeWriterAnimation() {
//   let i = 0;
//   const typeSpeed = 180;  // Smooth speed

//   logo.innerHTML = "";
//   nard.innerHTML = "";
//   sub.innerHTML = "";

//   function typeNextLetter() {
//     if (i < initialText.length) {
//       if (i >= 3 && i < 7) {
//         nard.style.opacity = 1;
//         nard.innerHTML += initialText.charAt(i);
//       } else if (i > 6) {
//         sub.style.opacity = 1;
//         sub.innerHTML += initialText.charAt(i);
//       } else {
//         logo.innerHTML += initialText.charAt(i);
//         logo.style.opacity = 1;
//       }
//       i++;
//       setTimeout(typeNextLetter, typeSpeed);
//     } else {
//       setTimeout(transitionAnimation, 500);
//     }
//   }

//   setTimeout(typeNextLetter, 800);
// }

// NEW SCRIPT

function typeWriterAnimation() {
  let i = 0;
  const typeSpeed = 180;

  logo.innerHTML = "";
  nard.innerHTML = "";
  sub.innerHTML = "";

  function typeNextLetter() {
    if (i < initialText.length) {
      const span = document.createElement("span");
      span.textContent = initialText.charAt(i);
      span.style.opacity = 0;
      span.style.display = "inline-block";
      span.style.animation = `fadeIn 0.6s ease forwards`;
      span.style.animationDelay = `${i * 0.15}s`;

      if (i >= 3 && i < 7) {
        nard.style.opacity = 1;
        nard.appendChild(span);
      } else if (i > 6) {
        sub.style.opacity = 1;
        sub.appendChild(span);
      } else {
        logo.style.opacity = 1;
        logo.appendChild(span);
      }
      i++;
      setTimeout(typeNextLetter, typeSpeed);
    } else {
      setTimeout(transitionAnimation, 500);
    }
  }

  setTimeout(typeNextLetter, 800);
}


// Transition animation
function transitionAnimation() {
  nard.style.transition = "transform 0.9s ease, opacity 0.9s ease";
  logo.style.transition = "transform 0.9s ease";
  sub.style.transition = "transform 0.9s ease";

  nard.style.transform = "translateY(-100%)";
  nard.style.opacity = 0;
  logo.style.transform = "translateX(80%)";
  sub.style.transform = "translateX(-270%)";
}

// Hover animations
logo.addEventListener("mouseenter", () => {
  nard.style.transform = "translateY(0%)";
  nard.style.opacity = "1";
  logo.style.transform = "translateX(0%)";
  sub.style.transform = "translateX(0%)";
});

logo.addEventListener("mouseleave", () => {
  nard.style.transform = "translateY(-100%)";
  nard.style.opacity = 0;
  logo.style.transform = "translateX(80%)";
  sub.style.transform = "translateX(-270%)";
});

// Start animation on page load
window.addEventListener("DOMContentLoaded", typeWriterAnimation);




