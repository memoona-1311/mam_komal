const continueBtn = document.getElementById("continueBtn");
const choiceModal = document.getElementById("choiceModal");

continueBtn.addEventListener("click", () => {
  choiceModal.classList.remove("hidden");
});


const happyBtn = document.getElementById("happyBtn");
const sadBtn = document.getElementById("sadBtn");
const typedResponse = document.getElementById("typed-response");

function typeAndRedirect(text, redirectUrl) {
  typedResponse.classList.remove("hidden");
  typedResponse.textContent = "";
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      typedResponse.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, 40);
    } else {
      // After typing is done, wait 3 seconds then redirect
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 3000);
    }
  }

  typeChar();
}

happyBtn.addEventListener("click", () => {
  happyBtn.disabled = true;
  sadBtn.disabled = true;
typeAndRedirect("You chose joy — just like you bring it into my life 💖 Let's relive the good times...", "happy.html");

});

sadBtn.addEventListener("click", () => {
  happyBtn.disabled = true;
  sadBtn.disabled = true;
  typeAndRedirect("You picked a tear... but there’s love hidden here too. Let me show you. 💭", "sad.html");

});
