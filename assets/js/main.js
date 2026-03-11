/**
 * Главный JavaScript файл для ymike.ru v2.0
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
    
    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });
  }
});

// Smooth scroll for anchor links (кроме элементов, которые открывают модальное окно)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.classList.contains('js-open-consult-modal')) {
      return;
    }
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* Индикатор ширины окна (временный для отладки адаптации) отключён
function updateWidthIndicator() {
  let indicator = document.getElementById('width-indicator');
  if (!indicator) {
    indicator = document.createElement('div');
    indicator.id = 'width-indicator';
    indicator.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: rgba(32, 32, 29, 0.8);
      color: #FEFAE0;
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 700;
      z-index: 10000;
      pointer-events: none;
    `;
    document.body.appendChild(indicator);
  }
  const width = window.innerWidth;
  indicator.textContent = width + 'px';
}

window.addEventListener('load', updateWidthIndicator);
window.addEventListener('resize', updateWidthIndicator);
*/

// Автоматическая прокрутка к якорю при загрузке страницы (для кейсов с "0")
window.addEventListener('load', function() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#kejs-')) {
    // Небольшая задержка для полной загрузки страницы
    setTimeout(function() {
      const target = document.querySelector(hash);
      if (target) {
        // Вычисляем offset для учёта фиксированного header (если есть)
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  }
});

// Модальное окно записи на консультацию (Getform)
document.addEventListener('DOMContentLoaded', () => {
  const consultOverlay = document.getElementById('consult-modal-overlay');
  const openButtons = document.querySelectorAll('.js-open-consult-modal');
  const closeButtons = document.querySelectorAll('.consult-modal-close');

  if (!consultOverlay || openButtons.length === 0) {
    return;
  }

  const openConsultModal = () => {
    consultOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  const closeConsultModal = () => {
    consultOverlay.style.display = 'none';
    document.body.style.overflow = '';
    // Сброс формы Яндекс: перезагружаем iframe, чтобы при следующем открытии показывалась пустая форма
    const yaFrame = document.querySelector('iframe[name="ya-form-69b1b47ee010db5db2fe4612"]');
    if (yaFrame && yaFrame.src) {
      yaFrame.src = yaFrame.src;
    }
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openConsultModal();
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeConsultModal();
    });
  });

  consultOverlay.addEventListener('click', (e) => {
    if (e.target === consultOverlay) {
      closeConsultModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && consultOverlay.style.display === 'flex') {
      closeConsultModal();
    }
  });
});
