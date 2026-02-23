  /* ===== MOBILE NAV ===== */
  function toggleMobile() {
    var m = document.getElementById('mobile-menu');
    var h = document.getElementById('hamburger');
    var open = m.classList.toggle('mobile-menu-open');
    h.textContent = open ? '✕' : '☰';
  }

  /* ===== GLOBAL TOAST (available to topic pages too if shared) ===== */
  function showToast(title, message, type) {
    var c = document.getElementById('toast-container');
    if (!c) return;
    var icons = { success:'✅', error:'❌', warn:'⚠️', info:'💡' };
    var t = document.createElement('div');
    t.className = 'toast ' + (type || 'success');
    t.innerHTML =
      '<span class="toast-icon">' + (icons[type]||'✅') + '</span>' +
      '<div class="toast-body"><div class="toast-title">' + title + '</div><div class="toast-msg">' + message + '</div></div>' +
      '<button class="toast-close" onclick="dismissToast(this.parentElement)">✕</button>';
    c.appendChild(t);
    setTimeout(function(){ dismissToast(t); }, 4500);
  }
  function dismissToast(t) {
    if (!t || t.classList.contains('hiding')) return;
    t.classList.add('hiding');
    setTimeout(function(){ if (t.parentElement) t.parentElement.removeChild(t); }, 300);
  }

  /* ===== STAT COUNTER ===== */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.stat-num').forEach(function (el) {
      var text = el.textContent.trim();
      var num = parseInt(text);
      if (!isNaN(num) && num > 1) {
        var s = 0, step = Math.ceil(num / 75);
        var timer = setInterval(function () {
          s += step;
          if (s >= num) { el.textContent = text; clearInterval(timer); }
          else el.textContent = s;
        }, 16);
      }
    });

    /* ===== CARD FADE-IN ===== */
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.topic-card').forEach(function (card, i) {
      card.style.cssText += 'opacity:0;transform:translateY(22px);transition:opacity .45s ease '+(i*.065)+'s,transform .45s ease '+(i*.065)+'s,border-color .25s,box-shadow .25s';
      observer.observe(card);
    });
  });