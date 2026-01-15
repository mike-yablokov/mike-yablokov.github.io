---
layout: home
title: "Михаил Яблоков - Эксперт по территориальной охране природы"
description: "Переводим конфликты в партнёрство, а стратегии — в работающие инструменты"
permalink: /
---

<!-- 1. HERO-СЕКЦИЯ -->
<style>
.hero-main {
  min-height: 65vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.hero-photo {
  background: url('{{ '/assets/images/hero/ymike.ru_0.1-1920w.webp' | relative_url }}') center center / cover no-repeat;
  min-height: 65vh;
}
.hero-content-main {
  background-color: var(--color-m-primary);
  color: var(--color-light-text);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--spacing-xxl) var(--spacing-lg);
}
.hero-content-main .btn {
  align-self: flex-start;
}
@media (max-width: 1250px) {
  .hero-content-main .btn {
    align-self: flex-end;
  }
}
@media (max-width: 1250px) {
  .hero-main {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
  .hero-photo {
    min-height: 50vh;
  }
  .hero-content-main {
    padding: var(--spacing-lg);
  }
}
@media (max-width: 768px) {
  .hero-photo {
    min-height: 40vh;
  }
  .hero-content-main h1 {
    font-size: var(--font-size-3xl) !important;
  }
  .hero-content-main p {
    font-size: var(--font-size-lg) !important;
  }
}

/* Адаптация секции 2 (Моя экспертиза) */
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

@media (max-width: 1024px) {
  .expertise-grid {
    grid-template-columns: 1fr;
  }
  
  .expertise-grid > div[style*="grid-column"] {
    grid-column: span 1 !important;
  }
}

/* Адаптация секции 6 (Реализованные проекты) */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* Адаптация секции 8 (Как я работаю) */
.process-grid-main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

@media (max-width: 1024px) {
  .process-grid-main {
    grid-template-columns: 1fr;
  }
}
</style>

<section class="hero-section hero-main">
  <!-- Левая часть: Фото -->
  <div class="hero-photo"></div>
  
  <!-- Правая часть: Контент -->
  <div class="hero-content-main">
    <h1 style="font-size: var(--font-size-4xl); margin-bottom: var(--spacing-md); line-height: 1.2;">
      Развиваю природные территории и команды
    </h1>
    <p style="font-size: var(--font-size-xl); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.6;">
      Помогаю бизнесу, регионам и ООПТ находить баланс между охраной природы, экономикой и интересами людей. Кандидат биологических наук, 12 лет руководил заповедниками.
    </p>
    <a href="#contact" class="btn btn-primary" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-lg);">
      Обсудить ваш кейс
    </a>
  </div>
</section>

<!-- 2. МОЯ ЭКСПЕРТИЗА -->
<section class="expertise-section" style="padding: var(--spacing-xxl) 0 calc(var(--spacing-xxl) / 2) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-m-primary); margin-bottom: 20px;">
      Почему мои решения работают там,<br>где другие видят тупик?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-m-secondary); margin-bottom: 30px; max-width: 900px; margin-left: auto; margin-right: auto;">
      12 лет я руководил федеральными ООПТ, а последние 7 лет помогаю организациям как внешний эксперт. Моя сила — в умении быть «переводчиком» между мирами.
    </p>
    
    <div class="expertise-grid" style="margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Опыт «изнутри системы»</h3>
        <p style="color: var(--color-dark-text);">Знаю бюджетные и бюрократические реалии ФГБУ и госорганов изнутри. Это позволяет создавать реализуемые стратегии.</p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Понимание логики бизнеса</h3>
        <p style="color: var(--color-dark-text);">Адаптирую международные методики ESG и устойчивого развития под российские условия и коммерческие задачи.</p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Практик, а не теоретик</h3>
        <p style="color: var(--color-dark-text);">Все инструменты проверены в полевых условиях — от Териберки до Кыргызстана. Даю не отчёт, а дорожную карту.</p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Фасилитация, а не навязывание</h3>
        <p style="color: var(--color-dark-text);">Вовлекаю вашу команду в процесс, чтобы решение было вашим, а поддержка — всеобщей.</p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary); grid-column: 1 / -1;">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Признание в профессиональном сообществе:</h3>
        <ul style="color: var(--color-dark-text); line-height: 1.5; list-style-position: outside; padding-left: 20px; margin-bottom: var(--spacing-md);">
          <li style="margin-bottom: var(--spacing-xs);">Координатор от России во Всемирной Комиссии по ООПТ МСОП (WCPA IUCN Focal Point)</li>
          <li style="margin-bottom: var(--spacing-xs);">Член Экспертного совета по заповедному делу</li>
          <li style="margin-bottom: var(--spacing-xs);">Член управляющего совета «Ассоциация работников заповедного дела»</li>
          <li>Координатор Ассоциации заповедников и парков Северо-Западного региона</li>
        </ul>
        <div style="text-align: right;">
          <a href="{{ '/pdfs/ruYablokovCV.pdf' | relative_url }}" target="_blank" class="btn btn-secondary" style="display: inline-block;">
            Скачать моё резюме (CV) в PDF
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 3. С КАКИМИ ПРОБЛЕМАМИ Я ПОМОГАЮ СПРАВИТЬСЯ -->
<style>
.problems-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--spacing-md);
  margin-top: calc(var(--spacing-xl) / 2);
}
.problems-grid > div {
  /* По умолчанию карточки занимают указанные колонки */
}
.problems-grid > div.problem-card-1,
.problems-grid > div.problem-card-2,
.problems-grid > div.problem-card-3 {
  grid-column: span 2;
}
.problems-grid > div.problem-card-4,
.problems-grid > div.problem-card-last {
  grid-column: span 3;
}
@media (min-width: 769px) and (max-width: 1500px) {
  .problems-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .problems-grid > div.problem-card-1,
  .problems-grid > div.problem-card-2,
  .problems-grid > div.problem-card-3,
  .problems-grid > div.problem-card-4 {
    grid-column: span 1 !important;
  }
  .problems-grid > div.problem-card-last {
    grid-column: span 2 !important;
  }
}
@media (max-width: 768px) {
  .problems-grid {
    grid-template-columns: 1fr !important;
  }
  .problems-grid > div.problem-card-1,
  .problems-grid > div.problem-card-2,
  .problems-grid > div.problem-card-3,
  .problems-grid > div.problem-card-4,
  .problems-grid > div.problem-card-last {
    grid-column: span 1 !important;
  }
}
</style>

<section class="problems-section" style="padding: calc(var(--spacing-xxl) / 2) 0 var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-m-primary); margin-bottom: 20px;">
      Узнаёте вызовы, которые тормозят развитие вашей территории или проекта?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-m-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Эти проблемы универсальны — от корпоративного ESG-отдела до региональной администрации. Хорошая новость: все они решаемы.
    </p>
    
    <div class="problems-grid">
      <!-- Карточка 1: Стратегия -->
      <div class="problem-card-1" style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Стратегии остаются на бумаге</h3>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Проблема:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Стратегии остаются на бумаге, команда разобщена, ресурсы распыляются.</p>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Последствие:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Невозможно доказать эффективность инвесторам или отчитаться о вкладе в ESG.</p>
        <p style="color: var(--color-accent); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Моё решение:</strong></p>
        <p style="color: var(--color-dark-text);">Превращаю вашу команду в соавторов рабочей стратегии, которая перестает быть формальным документом.</p>
      </div>
      
      <!-- Карточка 2: Цифровизация -->
      <div class="problem-card-2" style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Данные в хаосе<br><br></h3>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Проблема:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Данные в хаосе, сотрудники боятся технологий, а отчетность отнимает недели.</p>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Последствие:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Решения принимаются вслепую, эффективность работы невозможно оценить.<br><br></p>
        <p style="color: var(--color-accent); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Моё решение:</strong></p>
        <p style="color: var(--color-dark-text);">Внедряю и адаптирую под ваши задачи цифровые инструменты для сбора данных, мониторинга и аналитики.</p>
      </div>
      
      <!-- Карточка 3: Туризм -->
      <div class="problem-card-3" style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Неясно, как развивать туризм</h3>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Проблема:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Неясно, как развивать туризм, не навредив природе и не вызвав конфликтов.</p>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Последствие:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Риск «овертуризма», имиджевые потери, упущенная экономическая выгода.<br><br></p>
        <p style="color: var(--color-accent); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Моё решение:</strong></p>
        <p style="color: var(--color-dark-text);">Разрабатываю концепции, где туризм становится инструментом сохранения природы и развития территории.</p>
      </div>
      
      <!-- Карточка 4: Взаимодействие с сообществом -->
      <div class="problem-card-4" style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Непонимание настроений местных жителей</h3>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Проблема:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Непонимание реальных настроений и интересов людей на территории ведет к рискам и сопротивлению проектам.</p>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Последствие:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Репутационные потери, срыв сроков, утрата «социальной лицензии» на деятельность.<br><br></p>
        <p style="color: var(--color-accent); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Моё решение:</strong></p>
        <p style="color: var(--color-dark-text);">Провожу социологическую диагностику и на основе данных создаю систему взаимодействия, превращая риски в партнерство.</p>
      </div>
      
      <!-- Карточка 5: Обучение -->
      <div class="problem-card-last" style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Нет практического обучения</h3>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Проблема:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Нет качественного практического обучения на стыке экологии, управления и коммуникаций для работы с территориями.</p>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Последствие:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Сотрудники или студенты не готовы к реальным задачам, проекты терпят неудачу, ESG-отчетность становится формальностью.</p>
        <p style="color: var(--color-accent); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Моё решение:</strong></p>
        <p style="color: var(--color-dark-text);">Создаю и провожу практико-ориентированные программы, формирующие целостное профессиональное мировоззрение, а не разрозненные знания.</p>
      </div>
    </div>
  </div>
</section>

<!-- 4. ЭМОЦИОНАЛЬНАЯ ПЕРЕБИВКА -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: flex-end; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_0.2-1600w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 10%; text-align: left;">
    <blockquote style="font-size: var(--font-size-2xl); line-height: 1.6; font-style: italic; border-left: 4px solid var(--color-add-acc); padding-left: var(--spacing-lg); margin: 0;">
      «Моя задача — не просто сохранить кусок дикой природы. Моя задача — помочь людям и организациям выстроить с этой территорией такие отношения, при которых она будет сохраняться сама, благодаря пониманию, участию и взаимной выгоде. Это и есть настоящее устойчивое развитие»
    </blockquote>
  </div>
</section>

<!-- 5. НАПРАВЛЕНИЯ МОЕЙ РАБОТЫ -->
<style>
.directions-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-md);
}
@media (max-width: 1500px) {
  .directions-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1024px) {
  .directions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .directions-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<section class="directions-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div style="max-width: 1800px; margin: 0 auto; padding: 0 var(--spacing-md);">
    <h2 class="text-center" style="margin-bottom: 20px; color: var(--color-m-primary);">В каких форматах я работаю с этими проблемами?</h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-m-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Выберите направление, которое соответствует вашей текущей задаче.
    </p>
    
    <div class="directions-grid">
      <div style="background: var(--color-background); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; min-width: 0; overflow: hidden;">
        <img src="{{ '/assets/images/cards/ymike.ru_0.3.1-600w.webp' | relative_url }}" alt="Стратегии устойчивости" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); font-size: 32px;">Стратегии устойчивости</h3>
          <p style="margin: var(--spacing-sm) 0; flex-grow: 1;">Фасилитация и создание рабочих стратегий для ООПТ и бизнеса</p>
          <a href="{{ '/strategic/' | relative_url }}" class="btn btn-primary" style="margin-top: var(--spacing-sm);">Подробнее</a>
        </div>
      </div>
      
      <div style="background: var(--color-background); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; min-width: 0; overflow: hidden;">
        <img src="{{ '/assets/images/cards/ymike.ru_0.3.2-600w.webp' | relative_url }}" alt="Социальные решения" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); font-size: 32px;">Социальные решения</h3>
          <p style="margin: var(--spacing-sm) 0; flex-grow: 1;">Социологические исследования и партнерство с сообществами</p>
          <a href="{{ '/social/' | relative_url }}" class="btn btn-primary" style="margin-top: var(--spacing-sm);">Подробнее</a>
        </div>
      </div>
      
      <div style="background: var(--color-background); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; min-width: 0; overflow: hidden;">
        <img src="{{ '/assets/images/cards/ymike.ru_0.3.3-600w.webp' | relative_url }}" alt="Природный туризм" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); font-size: 32px;">Природный туризм</h3>
          <p style="margin: var(--spacing-sm) 0; flex-grow: 1;">Концепции визит-центров и турпродуктов для природных территорий</p>
          <a href="{{ '/tourism/' | relative_url }}" class="btn btn-primary" style="margin-top: var(--spacing-sm);">Подробнее</a>
        </div>
      </div>
      
      <div style="background: var(--color-background); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; min-width: 0; overflow: hidden;">
        <img src="{{ '/assets/images/cards/ymike.ru_0.3.4-480w.webp' | relative_url }}" alt="Цифровые решения" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); font-size: 32px;">Цифровые решения</h3>
          <p style="margin: var(--spacing-sm) 0; flex-grow: 1;">Цифровизация мониторинга и управления территориями</p>
          <a href="{{ '/digital/' | relative_url }}" class="btn btn-primary" style="margin-top: var(--spacing-sm);">Подробнее</a>
        </div>
      </div>
      
      <div style="background: var(--color-background); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; min-width: 0; overflow: hidden;">
        <img src="{{ '/assets/images/cards/ymike.ru_0.3.5-600w.webp' | relative_url }}" alt="Развитие команд" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); font-size: 32px;">Развитие команд</h3>
          <p style="margin: var(--spacing-sm) 0; flex-grow: 1;">Практические программы по ESG и заповедному делу</p>
          <a href="{{ '/education/' | relative_url }}" class="btn btn-primary" style="margin-top: var(--spacing-sm);">Подробнее</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 6. РЕАЛИЗОВАННЫЕ ПРОЕКТЫ -->
<section class="projects-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-m-primary); color: var(--color-light-text);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-light-text); margin-bottom: 20px;">
      Реальные примеры, как это работает
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); opacity: 0.8; margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Каждый проект начинался с конкретного вызова. Вот как мы находили решение.
    </p>
    
    <div class="grid grid-3" style="gap: var(--spacing-md);">
      <!-- Кейс 1: Стратегия -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_1.0-800w.webp' | relative_url }}" alt="Трансформация команды Дирекции ООПТ" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Опыт трансформации команды Дирекции ООПТ Санкт-Петербурга</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/strategic/#kejs-1-0' | relative_url }}" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 2: Социальные решения -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.0-800w.webp' | relative_url }}" alt="Исследование в Кыргызстане" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Исследование в Кыргызстане открыло путь к сохранению снежного барса</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/social/#kejs-2-0' | relative_url }}" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 3: Туризм -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_3.0-800w.webp' | relative_url }}" alt="Визит-центр Семибратка" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Как «Семибратка» в Таганае стала образцом устойчивого туризма</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/tourism/#kejs-3-0' | relative_url }}" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 4: Цифровизация -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_4.0-800w.webp' | relative_url }}" alt="Система SMART" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">SMART: как готовое IT-решение превратило хаос данных в инструмент управления</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/digital/#kejs-4-0' | relative_url }}" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 5: Обучение -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.0-800w.webp' | relative_url }}" alt="Диплом по заповедному делу" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Первый диплом по заповедному делу: как мы создали систему знаний для всей отрасли</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/education/#kejs-5-0' | relative_url }}" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 2.2: Социальные решения -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.2-800w.webp' | relative_url }}" alt="Лосиный остров" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Лосиный остров: как изменить имидж и наладить управление для ООПТ в мегаполисе</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-2-2" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 7. МНЕ ДОВЕРЯЮТ -->
<style>
@keyframes scroll-logos {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-container {
  overflow: hidden;
  background: var(--color-background);
  padding: calc(var(--spacing-xl) / 2) 0;
}
.marquee-content {
  display: flex;
  animation: scroll-logos 40s linear infinite;
  width: fit-content;
}
.marquee-content:hover {
  animation-play-state: paused;
}
.marquee-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xxl);
  padding: 0 var(--spacing-xl);
}
.marquee-item a {
  display: inline-block;
  flex-shrink: 0;
}
.marquee-item img {
  max-width: 150px;
  height: 80px;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.9);
  transition: filter var(--transition-fast);
  flex-shrink: 0;
  display: block;
}
.marquee-item a:hover img {
  filter: grayscale(0%) opacity(1);
}
/* Инверсия для белых логотипов - более прозрачные т.к. становятся темными */
.marquee-item img[src*="logos/1.png"],
.marquee-item img[src*="logos/5.png"],
.marquee-item img[src*="logos/10.png"],
.marquee-item img[src*="logos/12.png"] {
  filter: invert(1) grayscale(100%) opacity(0.7);
}
.marquee-item img[src*="logos/1.png"]:hover,
.marquee-item img[src*="logos/5.png"]:hover,
.marquee-item img[src*="logos/10.png"]:hover,
.marquee-item img[src*="logos/12.png"]:hover {
  filter: invert(0.85) saturate(1.8) brightness(1.3) grayscale(0%) opacity(1);
}
</style>

<section class="clients-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-m-primary); margin-bottom: 50px;">
      Мне доверяют
    </h2>
  </div>
  
  <div class="marquee-container">
    <div class="marquee-content">
      <div class="marquee-item">
        <a href="https://naturepeople.ru/" target="_blank" rel="noopener noreferrer" title="Фонд «Природа и люди»">
          <img src="{{ '/assets/images/logos/1.png' | relative_url }}" alt="Фонд «Природа и люди»">
        </a>
        <a href="https://kronoki.ru/" target="_blank" rel="noopener noreferrer" title="ФГБУ «Кроноцкий государственный заповедник»">
          <img src="{{ '/assets/images/logos/2.png' | relative_url }}" alt="ФГБУ «Кроноцкий заповедник»">
        </a>
        <a href="https://oopt-murman.ru/" target="_blank" rel="noopener noreferrer" title="Дирекция ООПТ Мурманской области">
          <img src="{{ '/assets/images/logos/3.png' | relative_url }}" alt="Дирекция ООПТ Мурманской области">
        </a>
        <a href="https://losinyiostrov.ru/" target="_blank" rel="noopener noreferrer" title="Национальный парк «Лосиный остров»">
          <img src="{{ '/assets/images/logos/4.png' | relative_url }}" alt="Национальный парк «Лосиный остров»">
        </a>
        <a href="https://iacgov.ru/" target="_blank" rel="noopener noreferrer" title="ФГБУ «Росзаповедцентр»">
          <img src="{{ '/assets/images/logos/5.png' | relative_url }}" alt="ФГБУ «Росзаповедцентр»">
        </a>
        <a href="https://anowcs.ru/" target="_blank" rel="noopener noreferrer" title="АНО «Общество сохранения диких животных»">
          <img src="{{ '/assets/images/logos/6.png' | relative_url }}" alt="АНО «Общество сохранения диких животных»">
        </a>
        <a href="https://защитиприроду.рф/" target="_blank" rel="noopener noreferrer" title="Фонд защитников природы">
          <img src="{{ '/assets/images/logos/7.png' | relative_url }}" alt="Фонд защитников природы">
        </a>
        <a href="https://www.mnr.gov.ru/about/" target="_blank" rel="noopener noreferrer" title="Министерство природных ресурсов и экологии РФ">
          <img src="{{ '/assets/images/logos/8.png' | relative_url }}" alt="Министерство природных ресурсов РФ">
        </a>
        <a href="https://sev-in.ru/" target="_blank" rel="noopener noreferrer" title="ИПЭЭ РАН им. А.Н. Северцова">
          <img src="{{ '/assets/images/logos/9.png' | relative_url }}" alt="ИПЭЭ РАН">
        </a>
        <a href="https://sikhote-alin.ru/" target="_blank" rel="noopener noreferrer" title="ФГБУ «Сихотэ-Алинский государственный заповедник»">
          <img src="{{ '/assets/images/logos/10.png' | relative_url }}" alt="ФГБУ «Сихотэ-Алинский заповедник»">
        </a>
        <a href="https://pasvik-reserve.ru/" target="_blank" rel="noopener noreferrer" title="ФГБУ «Государственный заповедник «Пасвик»">
          <img src="{{ '/assets/images/logos/11.png' | relative_url }}" alt="ФГБУ «Заповедник «Пасвик»">
        </a>
        <a href="https://smartconservationtools.org/en-us/" target="_blank" rel="noopener noreferrer" title="SMART Conservation Tools">
          <img src="{{ '/assets/images/logos/12.png' | relative_url }}" alt="SMART Conservation Tools">
        </a>
        <a href="https://kamgu.ru/" target="_blank" rel="noopener noreferrer" title="КамГУ им. Витуса Беринга">
          <img src="{{ '/assets/images/logos/13.png' | relative_url }}" alt="КамГУ им. Витуса Беринга">
        </a>
        <a href="https://www.wcs.org/" target="_blank" rel="noopener noreferrer" title="Wildlife Conservation Society">
          <img src="{{ '/assets/images/logos/14.png' | relative_url }}" alt="Wildlife Conservation Society">
        </a>
        <a href="https://www.taganay.org/" target="_blank" rel="noopener noreferrer" title="ФГБУ «Национальный парк «Таганай»">
          <img src="{{ '/assets/images/logos/15.png' | relative_url }}" alt="ФГБУ «Национальный парк «Таганай»">
        </a>
        <a href="https://oopt.spb.ru/" target="_blank" rel="noopener noreferrer" title="Дирекция ООПТ Санкт-Петербурга">
          <img src="{{ '/assets/images/logos/16.png' | relative_url }}" alt="Дирекция ООПТ Санкт-Петербурга">
        </a>
      </div>
      <!-- Дубликат для бесшовной анимации -->
      <div class="marquee-item">
        <a href="https://naturepeople.ru/" target="_blank" rel="noopener noreferrer" title="Фонд «Природа и люди»">
          <img src="{{ '/assets/images/logos/1.png' | relative_url }}" alt="Фонд «Природа и люди»">
        </a>
        <a href="https://kronoki.ru/" target="_blank" rel="noopener noreferrer" title="ФГБУ «Кроноцкий государственный заповедник»">
          <img src="{{ '/assets/images/logos/2.png' | relative_url }}" alt="ФГБУ «Кроноцкий заповедник»">
        </a>
        <a href="https://oopt-murman.ru/" target="_blank" rel="noopener noreferrer" title="Дирекция ООПТ Мурманской области">
          <img src="{{ '/assets/images/logos/3.png' | relative_url }}" alt="Дирекция ООПТ Мурманской области">
        </a>
        <a href="https://losinyiostrov.ru/" target="_blank" rel="noopener noreferrer" title="Национальный парк «Лосиный остров»">
          <img src="{{ '/assets/images/logos/4.png' | relative_url }}" alt="Национальный парк «Лосиный остров»">
        </a>
        <a href="https://iacgov.ru/" target="_blank" rel="noopener noreferrer" title="ФГБУ «Росзаповедцентр»">
          <img src="{{ '/assets/images/logos/5.png' | relative_url }}" alt="ФГБУ «Росзаповедцентр»">
        </a>
        <a href="https://anowcs.ru/" target="_blank" rel="noopener noreferrer" title="АНО «Общество сохранения диких животных»">
          <img src="{{ '/assets/images/logos/6.png' | relative_url }}" alt="АНО «Общество сохранения диких животных»">
        </a>
        <a href="https://защитиприроду.рф/" target="_blank" rel="noopener noreferrer" title="Фонд защитников природы">
          <img src="{{ '/assets/images/logos/7.png' | relative_url }}" alt="Фонд защитников природы">
        </a>
        <a href="https://www.mnr.gov.ru/about/" target="_blank" rel="noopener noreferrer" title="Министерство природных ресурсов и экологии РФ">
          <img src="{{ '/assets/images/logos/8.png' | relative_url }}" alt="Министерство природных ресурсов РФ">
        </a>
        <a href="https://sev-in.ru/" target="_blank" rel="noopener noreferrer" title="ИПЭЭ РАН им. А.Н. Северцова">
          <img src="{{ '/assets/images/logos/9.png' | relative_url }}" alt="ИПЭЭ РАН">
        </a>
        <a href="https://sikhote-alin.ru/" target="_blank" rel="noopener noreferrer" title="ФГБУ «Сихотэ-Алинский государственный заповедник»">
          <img src="{{ '/assets/images/logos/10.png' | relative_url }}" alt="ФГБУ «Сихотэ-Алинский заповедник»">
        </a>
        <a href="https://pasvik-reserve.ru/" target="_blank" rel="noopener noreferrer" title="ФГБУ «Государственный заповедник «Пасвик»">
          <img src="{{ '/assets/images/logos/11.png' | relative_url }}" alt="ФГБУ «Заповедник «Пасвик»">
        </a>
        <a href="https://smartconservationtools.org/en-us/" target="_blank" rel="noopener noreferrer" title="SMART Conservation Tools">
          <img src="{{ '/assets/images/logos/12.png' | relative_url }}" alt="SMART Conservation Tools">
        </a>
        <a href="https://kamgu.ru/" target="_blank" rel="noopener noreferrer" title="КамГУ им. Витуса Беринга">
          <img src="{{ '/assets/images/logos/13.png' | relative_url }}" alt="КамГУ им. Витуса Беринга">
        </a>
        <a href="https://www.wcs.org/" target="_blank" rel="noopener noreferrer" title="Wildlife Conservation Society">
          <img src="{{ '/assets/images/logos/14.png' | relative_url }}" alt="Wildlife Conservation Society">
        </a>
        <a href="https://www.taganay.org/" target="_blank" rel="noopener noreferrer" title="ФГБУ «Национальный парк «Таганай»">
          <img src="{{ '/assets/images/logos/15.png' | relative_url }}" alt="ФГБУ «Национальный парк «Таганай»">
        </a>
        <a href="https://oopt.spb.ru/" target="_blank" rel="noopener noreferrer" title="Дирекция ООПТ Санкт-Петербурга">
          <img src="{{ '/assets/images/logos/16.png' | relative_url }}" alt="Дирекция ООПТ Санкт-Петербурга">
        </a>
      </div>
    </div>
  </div>
</section>

<!-- 8. КАК Я РАБОТАЮ -->
<section class="process-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-m-primary); margin-bottom: 20px;">
      От диагностики до результата: прозрачный и вовлекающий процесс
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-m-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Гибкая схема, которая адаптируется под ваш запрос — от разовой сессии до годового сопровождения.
    </p>
    
    <div class="process-grid-main">
      <!-- Этап 1 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">1</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Глубокая диагностика</h3>
          <p style="color: var(--color-dark-text);">Изучаю контекст, ваши цели, ресурсы и ограничения. Формулируем измеримые критерии успеха.</p>
        </div>
      </div>
      
      <!-- Этап 2 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">2</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Совместная разработка</h3>
          <p style="color: var(--color-dark-text);">Провожу стратегические сессии или исследования с вовлечением ключевых стейкхолдеров. Решения рождаются в диалоге.</p>
        </div>
      </div>
      
      <!-- Этап 3 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">3</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Конкретный план</h3>
          <p style="color: var(--color-dark-text);">Предоставляю результат в удобной форме: дорожная карта, концепция, программа мероприятий, настроенная система.</p>
        </div>
      </div>
      
      <!-- Этап 4 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">4</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Поддержка внедрения</h3>
          <p style="color: var(--color-dark-text);">При необходимости помогаю запустить решение: обучаю команду, консультирую, корректирую по обратной связи.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 9. ФИНАЛЬНЫЙ ПРИЗЫВ К ДЕЙСТВИЮ -->
<style>
.btn-cv-hover {
  transition: all var(--transition-fast);
}
.btn-cv-hover:hover {
  border-color: var(--color-add-acc) !important;
  color: var(--color-add-acc) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>

<section id="contact" class="contact-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-m-primary); color: var(--color-light-text); text-align: center;">
  <div class="container-narrow">
    <h2 style="color: var(--color-add-acc); margin-bottom: var(--spacing-md); font-size: var(--font-size-3xl);">
      Готовы обсудить, как этот подход может решить вашу задачу?
    </h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.8;">
      Забронируйте онлайн-консультацию. Я проанализирую Вашу ситуацию и предложу варианты и принципиальный план работы. Это разговор между экспертами, который ни к чему Вас не обязывает.
    </p>
    <div style="display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap;">
      <a href="mailto:ymike@mail.ru" class="btn btn-primary" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl);">
        Записаться на консультацию
      </a>
      <a href="{{ '/pdfs/ruYablokovCV.pdf' | relative_url }}" target="_blank" class="btn btn-secondary btn-cv-hover" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl); background: transparent; border: 2px solid var(--color-light-text); color: var(--color-light-text);">
        Скачать резюме<br>для совместного проекта
      </a>
    </div>
  </div>
</section>
