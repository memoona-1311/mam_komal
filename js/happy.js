const chatBox = document.getElementById("chatBox");
const dateSelect = document.getElementById("dateSelect");

const messages = {
  "2025-03-19": [
    { sender: "her", text: "Thank a lot", time: "5:20 PM" },
    { sender: "her", text: "Belkul pagal ho tum", time: "5:20 PM" },
    {
      sender: "me",
      text: "Madam kl certificate bana kr dijaye ga tb manu gi m",
      time: "5:22 PM",
    },
  ],
  "2025-04-09": [
    {
      sender: "me",
      text: "Abhi se us ki team m hu gai h ap tu",
      time: "10:58 PM",
    },
    {
      sender: "her",
      text: "Ni ni AP ki side he ho me",
      time: "10:58 PM",
    },
  ],
  "2025-04-10": [
    { sender: "me", text: "Ap abhi office ma ha?", time: "7:48 PM" },
    {
      sender: "her",
      text: "Ni memoona sth le kar he nihklti hai kidr chorti h ya mujhe akela",
      time: "8:16 PM",
    },
    {
      sender: "me",
      text: "Jesy pehley tng karti thi k meri ap ki mama k sath picture h ap ki nhi",
      time: "10:21 PM",
    },
    {
      sender: "her",
      text: "Koi bt nhi Tum Mera sth bnna lena",
      time: "10:22 PM",
    },
  ],
  "2025-04-12": [
    { sender: "me", text: "Shukriya jnb", time: "3:28 PM" },
    { sender: "her", text: "No need jani", time: "3:28 PM" },
  ],
  "2025-05-17": [
    {
      sender: "her",
      text: "Koi dusra bt krna Walani hai",
      time: "7:13 PM",
    },
    { sender: "me", text: "or m ?", time: "7:16 PM" },
    { sender: "her", text: "Tum to ho yr", time: "7:18 PM" },
    {
      sender: "her",
      text: "Tum to zindgi ka ak important hisa ho",
      time: "7:18 PM",
    },
  ],
  "2025-06-05": [
    {
      sender: "her",
      text: "Ab net bnd kia h na or jta wkt msg ni kia sahi h ",
      time: "6:40 PM",
    },
    {
      sender: "me",
      text: "Net nahi bnd kiya mny package khtm hu gaya tha abhi karwaya h Rehman palza se ",
      time: "6:58 PM",
    },
  ],
  "2025-06-16": [
    { sender: "me", text: "kesi h ap", time: "9:09 AM" },
    { sender: "her", text: "Bht pyri", time: "11:10 AM" },
    { sender: "me", text: "Yh tu pata h mujhe ❤️", time: "11:11 AM" },
    { sender: "her", text: "Hahaha😂", time: "11:10 AM" },
  ],
  "2025-07-04": [
    { sender: "her", text: "Ggg ab chupa lo", time: "12:26 AM" },
    { sender: "her", text: "Bht change ho ge Tum", time: "12:26 AM" },
    { sender: "her", text: "Busy rehti", time: "12:27 AM" },
    { sender: "her", text: "Mera le time ni", time: "12:27 AM" },
    { sender: "me", text: "Asi baat nahi", time: "12:27 AM" },
    {
      sender: "me",
      text: "Mny ap se kya chupna h Ap ko sb pata h",
      time: "12:28 AM",
    },
    { sender: "me", text: "kya change hui hu m", time: "12:28 AM" },
    { sender: "her", text: "Bhtt pyri ho ge 🫂😘", time: "12:26 AM" },
  ],
  Daily: [
    {
      sender: "me",
      text: "Jb Ghr poch jai tu bata dijaye ga",
      time: "6:46 PM",
    },
    { sender: "her", text: "Ok or Ap bi", time: "6:50 PM" },
    { sender: "me", text: "G thk h", time: "06:52 PM" },
    { sender: "her", text: "Poch ge", time: "07:26 PM" },
    { sender: "me", text: "Good", time: "07:27 PM" },
    { sender: "me", text: "Ghr poch gai m", time: "07:40 PM" },
    { sender: "her", text: "Good", time: "07:45 PM" },
  ],
};

dateSelect.addEventListener("change", () => {
  const selected = dateSelect.value;
  chatBox.innerHTML = ""; // clear previous

  if (messages[selected]) {
    messages[selected].forEach((msg) => {
      const msgDiv = document.createElement("div");
      msgDiv.classList.add("message", msg.sender);

      msgDiv.innerHTML = `
            ${msg.text}
            <div class="timestamp">${msg.time}</div>
          `;

      chatBox.appendChild(msgDiv);
    });
  }
});

const byeBtn = document.getElementById("byeBtn");
const finalModal = document.getElementById("finalModal");
const closeModal = document.getElementById("closeModal");
const finalMessageTyping = document.getElementById("finalMessageTyping");

const finalText = `May Allah always protect your heart, bless your path, and fill your life with endless peace, joy, and noor. ✨

You’re not just someone I met… you’re someone Allah chose to place in my life.  
And I promise — I’m not someone who walks away easily.

Even if I’m not a good talker for you — maybe I don’t always say things right —  
but always remember this: I’ll always be there to *listen* to you…  
with no judgment, only care. 🫂

If we ever face misunderstandings, let’s not let silence or distance grow.  
Let’s talk, resolve, and hold onto what we built — because it matters. *You* matter.

You’ll always have the same place in my life, no matter how many days pass.  
Same respect. Same care. Same dua from my heart. 💖

So even if the world changes, know that I won’t.

I'm here — always.`;

function typeText(text, el, delay = 40) {
  let i = 0;
  el.textContent = "";
  const interval = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, delay);
}



closeModal.addEventListener("click", () => {
  finalModal.classList.remove("show");
  setTimeout(() => finalModal.classList.add("hidden"), 300);
});

window.addEventListener("click", (e) => {
  if (e.target === finalModal) {
    finalModal.classList.remove("show");
    setTimeout(() => finalModal.classList.add("hidden"), 300);
  }
});

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

window.addEventListener("resize", resizeCanvas);

function createParticles() {
  particles = [];
  for (let i = 0; i < 30; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      speedY: Math.random() * 0.5 + 0.2,
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 182, 193, ${p.opacity})`; // light pink
    ctx.fill();
    p.y += p.speedY;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  }
}

function animateParticles() {
  drawParticles();
  requestAnimationFrame(animateParticles);
}

// Start animation when modal opens
byeBtn.addEventListener("click", () => {
  finalModal.classList.remove("hidden");
  finalModal.classList.add("show");
  typeText(finalText, finalMessageTyping);
  resizeCanvas();
  createParticles();
  animateParticles();
});
// Toggle details under each date
function toggleDetails(summary) {
  const details = summary.nextElementSibling;
  const hint = summary.querySelector(".toggle-hint");
  if (details.style.display === "block") {
    details.style.display = "none";
    hint.textContent = "[+]";
  } else {
    details.style.display = "block";
    hint.textContent = "[-]";
  }
}

// Toggle month sections
document.querySelectorAll(".month-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

function toggleEventDetails(dateElement) {
  const eventDetails = dateElement.nextElementSibling;
  const hint = dateElement.querySelector(".toggle-hint");

  if (eventDetails.style.display === "none") {
    eventDetails.style.display = "block";
    if (hint) hint.textContent = "[-]";
  } else {
    eventDetails.style.display = "none";
    if (hint) hint.textContent = "[+]";
  }
}


