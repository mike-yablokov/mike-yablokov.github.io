// Модальное окно для кейсов
(function() {
  'use strict';
  
  // Элементы DOM
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.querySelector('.modal-close');
  
  // Функция открытия модального окна
  function openModal(caseId) {
    const caseData = window.modalCasesData && window.modalCasesData[caseId];
    if (!caseData) {
      console.warn('Кейс не найден:', caseId);
      return;
    }
    
    // Генерируем HTML контента
    let html = '';
    
    // Добавляем изображение, если есть
    if (caseData.image) {
      html += `<div class="modal-image-container"><img src="${escapeHtml(caseData.image)}" alt="${escapeHtml(caseData.title)}" class="modal-image"></div>`;
    }
    
    // Добавляем заголовок
    html += `<h1>${escapeHtml(caseData.title)}</h1>`;
    
    caseData.sections.forEach(section => {
      html += `<div class="case-section case-section-${section.type}">`;
      
      // Для секций challenge, solution, result - делаем буквицу в первом параграфе
      if (section.type === 'challenge' || section.type === 'solution' || section.type === 'result') {
        if (section.content) {
          const paragraphs = section.content.split(/\n\s*\n/).filter(p => p.trim());
          paragraphs.forEach((para, index) => {
            const paraText = para.trim().replace(/\n/g, ' ');
            if (index === 0 && section.title) {
              // Первый параграф с буквицей
              html += `<p><span class="case-dropcap">${escapeHtml(section.title)}:</span> ${escapeHtml(paraText)}</p>`;
            } else {
              html += `<p>${escapeHtml(paraText)}</p>`;
            }
          });
        }
      } else {
        // Для секции appeal - без заголовка, только текст
        if (section.type === 'appeal') {
          if (section.content) {
            // Заменяем переносы строк на пробелы и разбиваем на параграфы
            const paragraphs = section.content.split(/\n\s*\n/).filter(p => p.trim());
            paragraphs.forEach(para => {
              html += `<p>${escapeHtml(para.trim().replace(/\n/g, ' '))}</p>`;
            });
          }
        } else {
          // Для секции additional - заголовок "Ссылки:"
          if (section.type === 'additional') {
            html += '<h2>Ссылки:</h2>';
          } else if (section.title) {
            // Для остальных секций - обычный заголовок
            html += `<h2>${escapeHtml(section.title)}</h2>`;
          }
          
          if (section.content) {
            // Заменяем переносы строк на пробелы и разбиваем на параграфы
            const paragraphs = section.content.split(/\n\s*\n/).filter(p => p.trim());
            paragraphs.forEach(para => {
              html += `<p>${escapeHtml(para.trim().replace(/\n/g, ' '))}</p>`;
            });
          }
        }
      }
      
      // Обработка ссылок в секции "Дополнительно"
      if (section.links && section.links.length > 0) {
        html += '<ul>';
        section.links.forEach(link => {
          const url = link.url.startsWith('http') ? link.url : (link.url.startsWith('/') ? link.url : '/' + link.url);
          // Определяем тип ссылки и формируем текст
          let linkText = link.text;
          
          // Заменяем "Док:" на "Структура документа:"
          linkText = linkText.replace(/^Док:\s*/i, 'Структура документа: ');
          linkText = linkText.replace(/^док:\s*/i, 'Структура документа: ');
          
          // Оставляем оригинальный текст для внешних ссылок (уже есть точные описания)
          
          html += `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(linkText)}</a></li>`;
        });
        html += '</ul>';
      }
      
      html += '</div>';
    });
    
    // Вставляем контент
    modalContent.innerHTML = html;
    
    // Показываем модальное окно
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Блокируем скролл body
    
    // Прокручиваем контейнер к началу (к фото)
    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer) {
      modalContainer.scrollTop = 0;
    }
    
    // Фокус на модальном окне для доступности
    modalClose.focus();
  }
  
  // Функция закрытия модального окна
  function closeModal() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = ''; // Возвращаем скролл body
    modalContent.innerHTML = ''; // Очищаем контент
    // Убираем hash из URL
    if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    }
  }
  
  // Функция экранирования HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
  
  // Обработчик клика на кнопку закрытия
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  // Закрытие по клику на оверлей (вне модального окна)
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }
  
  // Закрытие по клавише ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.style.display === 'flex') {
      closeModal();
    }
  });
  
  // Обработчик кликов на ссылки кейсов
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href^="#kejs-"]');
    if (link) {
      e.preventDefault();
      const caseId = link.getAttribute('href').substring(1); // Убираем #
      openModal(caseId);
      // Обновляем hash в URL
      history.pushState(null, null, '#' + caseId);
    }
  });
  
  // Проверка hash при загрузке страницы (прямая ссылка)
  window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#kejs-')) {
      const caseId = hash.substring(1);
      // Небольшая задержка для загрузки данных
      setTimeout(function() {
        openModal(caseId);
      }, 100);
    }
  });
  
  // Обработка изменения hash (навигация назад/вперёд)
  window.addEventListener('hashchange', function() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#kejs-')) {
      const caseId = hash.substring(1);
      openModal(caseId);
    } else if (modalOverlay && modalOverlay.style.display === 'flex') {
      closeModal();
    }
  });
  
})();
