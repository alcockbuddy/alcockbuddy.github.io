/* ================================================================
   script.js — Your Portfolio JavaScript
   ================================================================

   This file handles three things:
   1. The custom cursor (the small red dot that follows your mouse)
   2. The nav bar border that appears when you scroll down
   3. The scroll-reveal animations (elements fade in as you scroll)

   You do not need to edit this file at all.
   It will just work as long as it's in the same folder as index.html.
================================================================ */


/* ────────────────────────────────────────────────────────────────
   1. CUSTOM CURSOR
   Moves a small <div class="cursor"> element to follow your mouse.
──────────────────────────────────────────────────────────────── */
const cursor = document.getElementById('cursor');

// Update cursor position whenever the mouse moves
document.addEventListener('mousemove', function(e) {
  cursor.style.left = (e.clientX - 4) + 'px';
  cursor.style.top  = (e.clientY - 4) + 'px';
});

// Make the cursor grow slightly when you click
document.addEventListener('mousedown', function() {
  cursor.style.transform = 'scale(2.5)';
});

document.addEventListener('mouseup', function() {
  cursor.style.transform = 'scale(1)';
});


/* ────────────────────────────────────────────────────────────────
   2. NAV BAR SCROLL BORDER
   Adds the class "scrolled" to the nav when you scroll down.
   The CSS then shows a thin line under the nav bar.
──────────────────────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


/* ────────────────────────────────────────────────────────────────
   3. SCROLL-REVEAL ANIMATIONS
   Any element with class="reveal" starts invisible (opacity: 0).
   This code watches the page and adds class="visible" to each
   element when it scrolls into view, triggering the CSS fade-in.
──────────────────────────────────────────────────────────────── */
const observer = new IntersectionObserver(
  function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.1,           // trigger when 10% of the element is visible
    rootMargin: '0px 0px -40px 0px'  // trigger slightly before element reaches the bottom of the viewport
  }
);

// Attach the observer to every element with class="reveal"
document.querySelectorAll('.reveal').forEach(function(el) {
  observer.observe(el);
});
