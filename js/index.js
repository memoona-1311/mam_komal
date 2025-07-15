const canvas = document.getElementById("star-canvas");
const ctx = canvas.getContext("2d");

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speedY: Math.random() * 0.5 + 0.2,
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    star.y += star.speedY;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(animateStars);
}

animateStars();

const revealBtn = document.getElementById("reveal-btn");
const messageBox = document.querySelector(".message-box");
const typedElement = document.getElementById("typed-message");
const chatLink = document.querySelector(".chat-link");

messageBox.style.display = "none";
chatLink.style.display = "none"; // 🔒 Hide chat button on load

const messages = [
  "You're not just someone I met — you're the sister Allah gave me through love. 🤍",
  "On this day, the world was blessed with your kind heart and soft smile.",
  "Your presence brings calm, your words bring strength. You mean the world to me.",
  "May your heart always be full of peace, light, and barakah. 🌙✨",
  "Happy Birthday, my beautiful soul. I’m so thankful you exist. 🎂",
];

let messageIndex = 0;
let charIndex = 0;

function typeMessage() {
  if (charIndex < messages[messageIndex].length) {
    typedElement.textContent += messages[messageIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeMessage, 50); // Typing speed
  } else {
    setTimeout(() => {
      charIndex = 0;
      messageIndex++;
      if (messageIndex < messages.length) {
        typedElement.textContent = "";
        typeMessage();
      } else {
        chatLink.style.display = "block"; // ✅ Show after all messages
      }
    }, 2000);
  }
}

// revealBtn.addEventListener("click", function () {
//   // revealBtn.style.display = "none";
//   // messageBox.style.display = "block";
//   // typeMessage();
//   revealBtn.style.display = "none";
//   document.getElementById("mcq-modal").classList.remove("hidden");
// });


revealBtn.addEventListener("click", function () {
  revealBtn.style.display = "none";
  document.getElementById("mcq-modal").classList.remove("hidden");
});





// Q1 logic
const optionButtons = document.querySelectorAll(".option-btn");
const feedback = document.getElementById("feedback");
const triesLeft = document.getElementById("tries-left");
const mcqModal = document.getElementById("mcq-modal");
const q2Modal = document.getElementById("q2-modal");

let clickCount = 0;
let firstChoice = null;

function typeFeedback(text, callback) {
  feedback.textContent = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      feedback.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 40);
    } else if (callback) {
      setTimeout(callback, 500);
    }
  }
  typing();
}

function updateTriesLeft() {
  const remaining = 4 - clickCount;
  triesLeft.textContent = remaining > 0 ? `Tries left: ${remaining}` : "";
}

optionButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (clickCount >= 4) return;

    const selected = btn.getAttribute("data-option");
    clickCount++;

    if (clickCount === 1) {
      firstChoice = selected;
      typeFeedback("kabhi kabhi hm galt sochty h");
    } else if (clickCount === 2) {
      typeFeedback("Kabhi pehli choice bhi sahi hoti hai.");
    } else if (clickCount === 3) {
      if (selected === firstChoice) {
        typeFeedback("Aur kabhi hume move on karna parta hai...");
      } else {
        typeFeedback("I am sorry you lost the chance 😔");
      }
    } else if (clickCount === 4) {
      typeFeedback("🎉 Unlocking...", () => {
        mcqModal.classList.add("hidden");

        setTimeout(() => {
          q2Modal.classList.remove("hidden");
        }, 2000);
      });
    }

    updateTriesLeft();
  });
});



const submitBtn = document.getElementById("submit-answer");
const q2Feedback = document.getElementById("q2-feedback");
const answerInput = document.getElementById("answer-input");

submitBtn.addEventListener("click", function () {
  const answer = answerInput.value.trim();
  if (answer === "") {
    q2Feedback.textContent = "Jawab dena zaroori hai... 💭";
    return;
  }

  q2Feedback.textContent = "Bas yehi sun’na tha mujhe 💖";

  localStorage.setItem("herAnswer", answer); // store locally

  setTimeout(() => {
    q2Modal.classList.add("hidden");

    setTimeout(() => {
      messageBox.classList.remove("hidden");
      messageBox.style.display = "block";  // ✅ Just in case
      typeMessage(); // ✅ Start typing effect
    }, 1500); // short suspense before message
  }, 2500); // wait after feedback
});
