---
layout: default
title: "Устойчивый природный туризм - Михаил Яблоков"
description: "Разрабатываю работающие решения, которые привлекают посетителей, сохраняют природу и учитывают интересы местных жителей"
permalink: /tourism/
---

<style>
/* Статистика в hero - пары всегда вместе */
.hero-stats {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: var(--spacing-sm);
  row-gap: var(--spacing-md);
}

.hero-stats-pair {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
  white-space: nowrap;
}

/* Адаптация hero-секции */
@media (max-width: 1250px) {
  .hero-section {
    grid-template-columns: 1fr !important;
    min-height: auto !important;
  }
  
  .hero-photo {
    min-height: 50vh !important;
  }
  
  .hero-content {
    padding: var(--spacing-xl) var(--spacing-md) var(--spacing-xl) var(--spacing-md) !important;
  }
  
  .hero-stats {
    flex-wrap: wrap;
    gap: var(--spacing-md);
  }
}

@media (max-width: 768px) {
  .hero-photo {
    min-height: 40vh !important;
  }
  
  .hero-content h1 {
    font-size: 32px !important;
  }
  
  .hero-content p {
    font-size: 18px !important;
  }
  
  .hero-stats {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }
  
  .hero-stats > div {
    display: flex;
    gap: var(--spacing-sm);
    align-items: center;
  }
}

/* Адаптация секции 7 (Процесс) */
.process-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

@media (max-width: 1024px) {
  .process-grid {
    grid-template-columns: 1fr;
  }
  
  .process-grid > div[style*="grid-column: span 2"] {
    grid-column: span 1 !important;
  }
}
</style>

<!-- 1. HERO-СЕКЦИЯ -->
<section class="hero-section" style="min-height: 65vh; display: grid; grid-template-columns: 1fr 1fr; position: relative;">
  <!-- Левая часть: Фото -->
  <div class="hero-photo" style="background: url('{{ '/assets/images/hero/ymike.ru_3.1-1920w.webp' | relative_url }}') center center / cover no-repeat; min-height: 65vh; position: relative;">
  </div>
  
  <!-- Правая часть: Контент -->
  <div class="hero-content" style="background-color: var(--color-3-primary); color: var(--color-light-text); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: calc(var(--spacing-xxl) / 2) calc(var(--spacing-lg) * 2 / 3) 60px calc(var(--spacing-lg) * 2 / 3);">
    <h1 style="font-size: var(--font-size-4xl); margin-bottom: var(--spacing-md); line-height: 1.2;">
      Концепции для устойчивого туризма на природных территориях
    </h1>
    <p style="font-size: 22.5px; margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.6;">
      Разрабатываю работающие решения, которые привлекают посетителей, сохраняют природу и учитывают интересы местных жителей. Мой опыт создания работающих объектов в ООПТ поможет вам избежать типичных ошибок и рисков.
    </p>
    
    <!-- Статистика -->
    <div class="hero-stats">
      <!-- Пара 1: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">5</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">реализованных<br>объектов</div>
      </div>
      
      <!-- Пара 2: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">15+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">концепций, прошедших<br>согласования</div>
      </div>
      
      <!-- Пара 3: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">40-100%</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">рост посещаемости<br>при сохранении баланса</div>
      </div>
    </div>
  </div>
</section>

<!-- 2. ДЛЯ КОГО? -->
<section class="audience-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-3-primary); margin-bottom: 0;">
      Для тех, кто ищет баланс между экономическими выгодами от туризма и сохранением природных ценностей
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Ищете партнёрство с ООПТ, уникальные продукты и устойчивый бизнес без конфликтов? Создам концепции объектов, привлекающие гостей и безопасные для природы.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Развиваете туристический кластер как драйвер экономики, но опасаетесь овертуризма? Разработаю модель партнерства с бизнесом для сбалансированного развития территории.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Хотите превратить туризм в инструмент сохранения природы? Создам стратегию, где посещение территории формирует общественную поддержку и решает природоохранные задачи.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Хотите большей устойчивости в природном туризме? Помогу вовлечь местное сообщество в туристические проекты, снижая социальные риски и создавая уникальные, аутентичные предложения для гостей.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 3. ПРОБЛЕМА / ПОЧЕМУ ЭТО ВАЖНО? -->
<section class="problems-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-3-primary); margin-bottom: var(--spacing-md);">
      Почему многие туристические проекты на природных территориях терпят крах или создают проблемы?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-3-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Типичные вызовы, с которыми сталкиваются бизнес и региональные власти при развитии туризма
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Неясность цели и формата</h3>
        <p style="color: var(--color-dark-text);">
          «Развивать туризм» — понятно. Но какой именно? Какой продукт будет востребован и при этом не навредит природе? Нет ясного видения и расчётов.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Сопротивление и конфликты</h3>
        <p style="color: var(--color-dark-text);">
          Экологи, инспекторы или местные жители могут выступать против. Нет понимания, как совместить экономические интересы с экологическими и социальными.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Риск повторения чужих ошибок</h3>
        <p style="color: var(--color-dark-text);">
          Примеры перегруженных территорий (Байкал, Териберка) пугают. Как спланировать развитие, чтобы не убить «курицу, несущую золотые яйца»?
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Отсутствие комплексного подхода</h3>
        <p style="color: var(--color-dark-text);">
          Фокус только на прибыли или только на природе приводит к несбалансированным решениям, которые не работают в реальности.
        </p>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 900px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Хорошая новость:</strong> эти проблемы решаемы. Грамотно спроектированная, научно обоснованная концепция становится инструментом сохранения природы и стабильного дохода. Мой опыт создания работающих концепций поможет вам избежать этих ловушек.
    </p>
  </div>
</section>

<!-- 4. ФОТО-СЕКЦИЯ 1 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_3.2-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Зачем туризм там, где главная цель — сохранение?
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      Этот вопрос задают почти все — и сотрудники ООПТ, и инвесторы. Ответ лежит в правильном подходе. Грамотный туризм — это не угроза, а инструмент. Инструмент для сохранения дикой природы, формирования общественной поддержки и создания альтернативных источников дохода для местных жителей. Моя работа часто начинается с семинара, где мы находим этот ответ для вашей конкретной территории.
    </blockquote>
  </div>
</section>

<!-- 5. УНИКАЛЬНОСТЬ / ЧЕМ ЗАНИМАЮСЬ? -->
<section class="expertise-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-3-primary); margin-bottom: 0;">
      Почему ко мне обращаются за разработкой концепций?
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Автор проверенной методологии</h3>
        <p style="color: var(--color-dark-text);">
          Я разработал и применяю систему создания основы природоохранного туризма, которая прошла испытание реальными проектами в ООПТ. Это не теория.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Опыт «по обе стороны баррикады»</h3>
        <p style="color: var(--color-dark-text);">
          12 лет руководил заповедником. Я знаю, как думают в ООПТ, понимаю их ограничения и опасения. Это помогает создавать реализуемые концепции, которые получат одобрение.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Комплексный подход от смыслов до инфраструктуры</h3>
        <p style="color: var(--color-dark-text);">
          Работаю на всех этапах: от формулировки идеи и смыслового наполнения до авторского надзора при дизайне и строительстве, чтобы задуманное не потерялось при воплощении.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Фокус на вовлечении и диалоге</h3>
        <p style="color: var(--color-dark-text);">
          Любая концепция обречена без поддержки ключевых стейкхолдеров. Я закладываю в проекты механизмы диалога с местным сообществом и командами ООПТ с самого начала.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 6. ФОТО-СЕКЦИЯ 2 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: flex-end; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_3.3-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 850px; margin-right: 10%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      4 компонента экологического туризма
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-left: 4px solid var(--color-add-acc); padding-left: var(--spacing-lg); margin: 0;">
      В основе каждой моей разработки лежит система, проверенная на практике:<br>1. Природный характер — Подлинность и связь с дикой природой как главная ценность.<br>2. Минимальное и контролируемое воздействие — природосберегающая инфраструктура, мониторинг антропогенного воздействия.<br>3. Природоохранный эффект — Как проект поможет охране природы? (Через просвещение, изменение социальных норм, финансирование и т.д.).<br>4. Социальная интеграция — Учёт интересов и выгод для местного сообщества. Это не теория. Это каркас, который делает туристический проект устойчивым.
    </blockquote>
  </div>
</section>

<!-- 7. ПРОЦЕСС / КАК ЭТО РАБОТАЕТ? -->
<section class="process-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-3-primary); margin-bottom: var(--spacing-md);">
      Как создаётся концепция?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-3-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Чёткий процесс, который приводит к конкретному результату
    </p>
    
    <div class="process-grid">
      <!-- Этап 1 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">1</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Анализ территории и контекста</h3>
          <p style="color: var(--color-dark-text);">
            Изучаю природные и культурные ресурсы, инфраструктуру, целевую аудиторию, нормативные рамки. Провожу встречи с ключевыми стейкхолдерами (администрация, ООПТ, бизнес, местные жители).
          </p>
        </div>
      </div>
      
      <!-- Этап 2 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">2</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Совместная разработка видения</h3>
          <p style="color: var(--color-dark-text);">
            Помогаю с формулировкой миссии, целей и принципов будущего туристического продукта.
          </p>
        </div>
      </div>
      
      <!-- Этап 3 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">3</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Создание детальной концепции</h3>
          <p style="color: var(--color-dark-text);">
            Разрабатываю документ, который включает: смысловое ядро, детальную проработку целей, тщательный анализ целевых групп аудитории, проработанную тематику.
          </p>
        </div>
      </div>
      
      <!-- Этап 4 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">4</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Разработка планировочных и пространственных решений</h3>
          <p style="color: var(--color-dark-text);">
            Функциональное зонирование и планировка территории, пространственное распределение тематики, маршрутизация целевых групп.
          </p>
        </div>
      </div>
      
      <!-- Этап 5 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative; grid-column: span 2;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">5</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Поддержка реализации (опционально)</h3>
          <p style="color: var(--color-dark-text);">
            Включаюсь в команду и работаю с дизайнерами, проектировщиками, интерпретаторами.<br>Помогаю сохранить первоначальный замысел (авторский надзор).
          </p>
        </div>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 1200px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Формат и сроки:</strong> Разработка концепции — 1-3 месяца, в зависимости от сложности объекта.
    </p>
  </div>
</section>

<!-- 7.5. ОСОБЫЙ КЕЙС -->
<!-- 7.5.1. Заголовок + Подзаголовок + Фото -->
<section id="kejs-3-0" style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: var(--spacing-md);">
      <!-- Текст слева -->
      <div>
        <h2 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md);">
          От проселочной дороги к визит-центру: как «Семибратка» стала образцом устойчивого туризма для нацпарка «Таганай»
        </h2>
        <p style="font-size: var(--font-size-lg); color: var(--color-3-secondary); line-height: 1.6;">
          Разработка концепции, которая превратила точку неорганизованного посещения в популярный объект, формирующий общественную поддержку ООПТ и решающий задачи территории.
        </p>
      </div>
      
      <!-- Фото справа -->
      <div style="margin: 0; padding: 0; height: 100%;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_3.0-1200w.jpg' | relative_url }}" alt="Семибратка" style="width: 100%; height: 100%; border-radius: var(--radius-lg); display: block; margin: 0; object-fit: cover;">
      </div>
    </div>
  </div>
</section>

<!-- 7.5.2. Вызов (Проблема «До») -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <p style="color: var(--color-dark-text); font-size: var(--font-size-lg); line-height: 1.7;">
      <span style="font-weight: 700; font-size: 36px; color: var(--color-3-primary);">Вызов:</span> Урочище «Семь Братьев» (Семибратка) — один из главных входов в нацпарк «Таганай», ежегодная посещаемость парка около 200 000 посетителей. Но Семибратка была «точка ноль»: проселочная дорога, стихийная парковка на обочине, сеть тропинок, ведущих вглубь ООПТ. Не было ни информации, ни инфраструктуры, ни понятных правил. Ключевой вызов заключался в противоречии интересов: местные жители видели здесь просто лес для пикника, туристы-походники — стартовую точку без «лишней» цивилизации, а парк не мог выполнять просветительскую миссию и управлять потоком.
    </p>
  </div>
</section>

<!-- 7.5.3. Решение (Процесс) - ТЕМНЫЙ БЛОК -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-3-primary); color: var(--color-light-text);">
  <div class="container">
    <p style="color: var(--color-light-text); font-size: var(--font-size-lg); line-height: 1.7; margin-bottom: var(--spacing-md);">
      <span style="font-weight: 700; font-size: 36px; color: var(--color-accent);">Решение:</span> Я применил авторскую методику, где во главу угла ставится не объект, а баланс целей территории и потребностей аудитории.
    </p>
    
    <p style="color: var(--color-light-text); font-size: var(--font-size-lg); line-height: 1.7; opacity: 0.95; margin-bottom: var(--spacing-md);">
      <strong>Шаг 1: Анализ без компромиссов.</strong> Я детально сегментировал всех посетителей (от жителей Златоуста до приезжих туристов) и выявил их истинные мотивы и «боли». Это позволило говорить с каждой группой на её языке.
    </p>
    
    <p style="color: var(--color-light-text); font-size: var(--font-size-lg); line-height: 1.7; opacity: 0.95; margin-bottom: var(--spacing-md);">
      <strong>Шаг 2: Проектирование через синтез.</strong> Вместо ультиматумов я создал концепцию, которая интегрировала все интересы. Для местных — комфортная парковка, беседки и краеведческая история. Для туристов — логичная навигация и информация о маршрутах. Для парка — центральный элемент: современный визит-центр, чья экспозиция не «читает лекции», а вовлекает через интерактив и эмоции (например, кормушки для птиц прямо у панорамного окна).
    </p>
    
    <p style="color: var(--color-light-text); font-size: var(--font-size-lg); line-height: 1.7; opacity: 0.95;">
      <strong>Шаг 3: Фокус на главном — поддержке ООПТ.</strong> Каждый элемент, от планировки до текста на стенде, работал на ключевую цель: сформировать у посетителя понимание и гордость за парк, показать его личную роль в сохранении природы.
    </p>
  </div>
</section>

<!-- 7.5.4. Итог (Результаты «После») -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <h3 style="text-align: center; color: var(--color-accent); margin-bottom: var(--spacing-md); font-size: var(--font-size-2xl);">
      Итог
    </h3>
    <ul style="color: var(--color-dark-text); font-size: var(--font-size-lg); line-height: 1.8; list-style: none; padding: 0;">
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Для посетителей:</strong> Это стало комфортным, современным и интересным местом старта. Они получают нужную информацию легко и с удовольствием.
      </li>
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Для парка:</strong> Появился мощный инструмент коммуникации. «Семибратка» теперь работает на имидж, формирует общественную поддержку и вовлекает людей в природоохранную повестку.
      </li>
      <li style="padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Для территории:</strong> Конфликт интересов снят. Местные жители гордятся обновлённым местом, туристы получили качественный сервис, а нагрузка на природу стала управляемой.
      </li>
    </ul>
  </div>
</section>

<!-- 7.5.5. Ценность для будущего клиента -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <p style="color: var(--color-dark-text); font-size: var(--font-size-xl); line-height: 1.7; font-weight: 500; text-align: left; font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-lg);">
      Этот кейс — готовый алгоритм для любой территории, стоящей перед развитием туризма. Будь то федеральный нацпарк, регион, планирующий кластер, или турбизнес, который хочет работать на ООПТ легально и устойчиво. Я не просто рисую красивые объекты. Я создаю социальный договор в виде инфраструктуры: нахожу баланс между спросом аудитории, экономикой и миссией охраны природы. Если вам нужно превратить проблемное место в точку роста, которая будет приносить доход, лояльность и реальную поддержку вашим целям — эта методология ваш выбор.
    </p>
  </div>
</section>

<!-- 8. РЕАЛИЗОВАННЫЕ ПРОЕКТЫ -->
<section class="projects-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-3-primary); color: var(--color-light-text);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-light-text); margin-bottom: var(--spacing-md);">
      Как я создавал концепции туристических объектов, которые работают для бизнеса и природы
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); opacity: 0.8; margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Реальные проекты для турбизнеса и региональных администраций, где природоохранные требования стали преимуществом, а не ограничением. Каждая концепция начиналась с понимания экономической модели и юридических рамок для устойчивого развития.
    </p>
    
    <div class="grid grid-3" style="gap: var(--spacing-md);">
      <!-- Кейс 3.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_3.1-800w.webp' | relative_url }}" alt="Кейс 3.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">«Ворота в дикую Камчатку»: как визит-центр в городе стал стержнем коммуникации для заповедника и турбизнеса</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-3-1" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 3.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_3.2-800w.webp' | relative_url }}" alt="Кейс 3.2" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Визит-центр заповедника «Пасвик»: ESG-партнёрство, которое меняет отношение к природе</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-3-2" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 2.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.1-800w.webp' | relative_url }}" alt="Кейс 2.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Диагностика кризиса: социологическое исследование туристического бума в Териберке</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-2-1" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 2.3 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.3-800w.webp' | relative_url }}" alt="Кейс 2.3" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Как измерить результат поездки в заповедник: одно из первых в России исследование природоохранного эффекта от посещения ООПТ</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-2-3" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 5.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.1-800w.webp' | relative_url }}" alt="Кейс 5.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">От специалиста к лидеру: как 9-месячная программа научила сотрудников ООПТ создавать проекты на стыке экологии и социологии</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-5-1" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 9. РЕЗУЛЬТАТЫ -->
<section class="results-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-3-primary); margin-bottom: var(--spacing-md);">
      Что вы получите в итоге?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-3-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Конкретный продукт и ясность вместо неопределённости
    </p>
    
    <div class="grid grid-2" style="column-gap: var(--spacing-md); row-gap: var(--spacing-md);">
      <!-- Результат 1 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md);">Детальная, реализуемая концепция</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Не эскиз или презентация, а проработанный документ, который можно передавать подрядчикам, использовать для получения финансирования и согласований. Более 15 таких концепций уже разработано, 5 — реализованы в виде работающих объектов.
        </p>
      </div>
      
      <!-- Результат 2 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md);">Снижение рисков и экономия ресурсов</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Вы избежите дорогостоящих ошибок на этапе реализации, потому что ключевые решения (включая природоохранные эффекты) будут просчитаны и обоснованы заранее.
        </p>
      </div>
      
      <!-- Результат 3 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md);">Легитимность и поддержка стейкхолдеров</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Концепция, созданная с учётом интересов ООПТ, местных жителей и администрации, получит меньше сопротивления и больше шансов на успешный запуск.
        </p>
      </div>
      
      <!-- Результат 4 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md);">Чёткое понимание следующих шагов</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Вы получите не просто идею, а научно обоснованный, пошаговый план действий: что делать, в какой последовательности, на что обратить внимание.
        </p>
      </div>
    </div>
    
    <div style="margin-top: var(--spacing-xl); background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <p style="color: var(--color-dark-text); margin-top: var(--spacing-md); font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-md);">
        <strong style="color: var(--color-3-primary);">Честно о главном:</strong> Я создаю профессиональный Концепт туристического продукта. Его реализация зависит от многих факторов: финансирования, команды, воли заказчика. Но с качественной концепцией вы стартуете не с чистого листа, а с детальной карты, которая в разы увеличивает шансы на успех.
      </p>
    </div>
  </div>
</section>

<!-- 10. ФИНАЛЬНЫЙ ПРИЗЫВ К ДЕЙСТВИЮ -->
<section id="contact" class="contact-section" style="padding: calc(var(--spacing-xxl) * 2 / 3) 0; background-color: var(--color-3-primary); color: var(--color-light-text); text-align: center;">
  <div class="container">
    <h2 style="color: var(--color-add-acc); margin-bottom: var(--spacing-md); font-size: var(--font-size-3xl);">
      Нужна концепция, которая будет работать?
    </h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.8;">
      Опишите вашу задачу: разработка нового турпродукта, создание визит-центра, планирование деятельности на природной территории. Я изучу запрос и расскажу, как мы вместе можем создать конкретную, жизнеспособную концепцию.
    </p>
    <a href="mailto:ymike@mail.ru" class="btn btn-primary" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl);">
      Записаться на консультацию
    </a>
  </div>
</section>
