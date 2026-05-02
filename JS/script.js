// ── MOBILE MENU ──
const menuToggle = document.getElementById("menu-toggle");
const navLinks   = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const spans = menuToggle.querySelectorAll("span");
    menuToggle.classList.toggle("open");
    if (menuToggle.classList.contains("open")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity   = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
      spans[0].style.transform = "";
      spans[1].style.opacity   = "";
      spans[2].style.transform = "";
    }
  });
}

// ── HEADER SCROLL ──
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

// ── AUTH MODALS ──
function openModal(type) {
  const overlay = document.getElementById(type + '-overlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(type) {
  const overlay = document.getElementById(type + '-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function switchModal(from, to) {
  closeModal(from);
  setTimeout(() => openModal(to), 200);
}

// ── WAIT FOR DOM ──
document.addEventListener('DOMContentLoaded', function () {

  // Close buttons
  const loginClose  = document.getElementById('login-close');
  const signupClose = document.getElementById('signup-close');

  if (loginClose) {
    loginClose.addEventListener('click', function (e) {
      e.stopPropagation();
      closeModal('login');
    });
  }

  if (signupClose) {
    signupClose.addEventListener('click', function (e) {
      e.stopPropagation();
      closeModal('signup');
    });
  }

  // Click outside to close
  const loginOverlay  = document.getElementById('login-overlay');
  const signupOverlay = document.getElementById('signup-overlay');

  if (loginOverlay) {
    loginOverlay.addEventListener('click', function (e) {
      if (e.target === this) closeModal('login');
    });
  }

  if (signupOverlay) {
    signupOverlay.addEventListener('click', function (e) {
      if (e.target === this) closeModal('signup');
    });
  }

  // Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal('login');
      closeModal('signup');
    }
  });

  // ── CONTACT FORM SUBMIT ──
  const sendBtn    = document.getElementById('send-btn');
  const successMsg = document.getElementById('success-msg');

  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      const name    = document.getElementById('name-input')?.value.trim();
      const email   = document.getElementById('email-input')?.value.trim();
      const message = document.getElementById('message-input')?.value.trim();

      if (!name || !email || !message) {
        sendBtn.style.animation = 'none';
        sendBtn.offsetHeight;
        sendBtn.style.animation = 'shake 0.4s ease';
        return;
      }

      sendBtn.style.display = 'none';
      if (successMsg) successMsg.classList.add('show');

      setTimeout(() => {
        sendBtn.style.display = 'flex';
        if (successMsg) successMsg.classList.remove('show');
        document.getElementById('name-input').value    = '';
        document.getElementById('email-input').value   = '';
        document.getElementById('message-input').value = '';
        const subject = document.getElementById('subject-input');
        if (subject) subject.value = '';
      }, 4000);
    });
  }

});