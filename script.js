
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
    "You're not just a friend, you're my chosen sister. 💖",
    "On this day, the world was gifted with your light.",
    "You’ve always been my safe place — my best listener, my loudest cheerleader.",
    "I pray your heart is always filled with peace and joy. 🌙",
    "Happy Birthday, my precious soul. May today be as beautiful as you are. 🎉"
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
  
  revealBtn.addEventListener("click", function () {
    revealBtn.style.display = "none";
    messageBox.style.display = "block";
    typeMessage(); // ✅ Start typing only after button click
  });
  



  