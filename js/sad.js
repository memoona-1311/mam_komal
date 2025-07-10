    const clue = document.getElementById("clue");
      const lockedBtn = document.getElementById("lockedHappy");

      const modal = document.getElementById("questionModal");
      const answerInput = document.getElementById("answerInput");
      const submitAnswer = document.getElementById("submitAnswer");
      const feedback = document.getElementById("feedback");
      const attemptsLeft = document.getElementById("attemptsLeft");

      let attempts = 3;
      const correctAnswer = "my smile";

      function showModal() {
        answerInput.value = "";
        feedback.textContent = "";
        attempts = 3;
        attemptsLeft.textContent = "Attempts left: 3";
        modal.classList.remove("hidden");
      }

      clue.addEventListener("click", () => {
        clue.style.display = "none";
        showModal(); // 🔐 Directly shows the question modal
      });

      submitAnswer.addEventListener("click", () => {
        const userAnswer = answerInput.value.trim().toLowerCase();

        if (userAnswer === correctAnswer.toLowerCase()) {
          feedback.textContent = "Correct! Unlocking Happy Memories... 💖";
          setTimeout(() => {
            modal.classList.add("hidden");
            lockedBtn.classList.remove("locked-btn");
            lockedBtn.classList.add("unlocked-btn");
            lockedBtn.disabled = false;
            lockedBtn.textContent = "Go to Happy Memories 🎉";
            lockedBtn.addEventListener("click", () => {
              window.location.href = "happy.html";
            });
          }, 1500);
        } else {
          attempts--;
          if (attempts > 0) {
            feedback.textContent = "That's not it... try again.";
            attemptsLeft.textContent = `Attempts left: ${attempts}`;
          } else {
            feedback.textContent = "Access denied. No more attempts. 😢";
            attemptsLeft.textContent = `Attempts left: 0`;
            setTimeout(() => {
              modal.classList.add("hidden");
              document.getElementById("secretHeart").classList.remove("hidden");
            }, 2000);
          }
        }
      });

      document.getElementById("secretHeart").addEventListener("click", () => {
        lockedBtn.classList.remove("locked-btn");
        lockedBtn.classList.add("unlocked-btn");
        lockedBtn.disabled = false;
        lockedBtn.textContent = "Happy Memories (Unlocked) ✅";
        lockedBtn.addEventListener("click", () => {
          window.location.href = "happy.html";
        });
      });
