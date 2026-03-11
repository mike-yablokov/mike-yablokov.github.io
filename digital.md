---
layout: default
title: "Цифровые решения для территорий - Михаил Яблоков"
description: "Внедряю цифровые решения, которые реально решают ваши операционные задачи: от сбора данных «в поле» до аналитики для отчетности"
permalink: /digital/
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

/* Адаптация подсекции 7.5.1 (Особый кейс - вступление) */
.special-case-intro {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--spacing-md);
}

@media (max-width: 900px) {
  .special-case-intro {
    grid-template-columns: 1fr !important;
  }
}

/* Адаптация заголовков подсекций особого кейса */
.special-case-heading {
  font-weight: 700;
  font-size: 36px;
}

@media (max-width: 1024px) {
  .special-case-heading {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .special-case-heading {
    font-size: 22px;
  }
}

/* Адаптация секции 9 (Результаты) */
.results-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

@media (max-width: 1024px) {
  .results-grid {
    grid-template-columns: 1fr;
  }
  
  .results-grid > div[style*="grid-column: span 2"] {
    grid-column: span 1 !important;
  }
}
</style>

<!-- 1. HERO-СЕКЦИЯ -->
<section class="hero-section" style="min-height: 65vh; display: grid; grid-template-columns: 1fr 1fr; position: relative;">
  <!-- Левая часть: Фото -->
  <div class="hero-photo" style="background: url('{{ '/assets/images/hero/ymike.ru_4.1-1920w.webp' | relative_url }}') center center / cover no-repeat; min-height: 65vh; position: relative;">
  </div>
  
  <!-- Правая часть: Контент -->
  <div class="hero-content" style="background-color: var(--color-4-primary); color: var(--color-light-text); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: calc(var(--spacing-xxl) / 2) calc(var(--spacing-lg) * 2 / 3) 60px calc(var(--spacing-lg) * 2 / 3);">
    <h1 style="font-size: var(--font-size-4xl); margin-bottom: var(--spacing-md); line-height: 1.2;">
      Цифровизация для природных территорий: когда технологии работают на результат
    </h1>
    <p style="font-size: 22.5px; margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.6;">
      Внедряю цифровые решения, которые реально решают ваши операционные задачи: от сбора данных «в поле» до аналитики для отчетности. Адаптирую технологии под специфику вашей работы.
    </p>
    
    <!-- Статистика -->
    <div class="hero-stats">
      <!-- Пара 1: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">6</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">внедрений системы<br>SMART</div>
      </div>
      
      <!-- Пара 2: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">15-20x</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">сокращение времени<br>на отчетность</div>
      </div>
      
      <!-- Пара 3: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">95%</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">удовлетворенности<br>руководителей</div>
      </div>
    </div>
  </div>
</section>

<!-- 2. ДЛЯ КОГО? -->
<section class="audience-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-4-primary); margin-bottom: 0;">
      Для тех, кто ищет практические цифровые решения, работающие в реальных российских условиях при ограниченных ресурсах
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Сотрудники боятся технологий, а процессы на бумаге? Внедрю и адаптирую системы цифрового управления под ваши задачи, сокращая время на отчетность в разы.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Нужен экологический мониторинг или анализ природопользования? Создам специализированные цифровые решения на основе спутниковых данных и ГИС.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Требуется цифровизация, но нет IT-специалистов и бюджета? Настрою системы SMART и ГИС под ваши задачи и обучу команду эффективной работе с ними.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Нужны доступные инструменты для мониторинга при ограниченном бюджете? Разработаю простые мобильные приложения или адаптирую существующие решения для ваших задач.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 3. ПРОБЛЕМА / ПОЧЕМУ ЭТО ВАЖНО? -->
<section class="problems-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-4-primary); margin-bottom: var(--spacing-md);">
      Почему цифровизация для природных территорий так часто проваливается?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-4-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Типичные проблемы, с которыми сталкиваются и госорганы, и бизнес при внедрении IT-решений.
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Данные в хаосе, решения на интуиции</h3>
        <p style="color: var(--color-dark-text);">
          Вся информация разбросана по бумажным журналам, Excel и личным блокнотам. Руководитель не видит реальной картины на территории и принимает решения наугад, рискуя репутацией и эффективностью работы.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Технологии простаивают из-за страха персонала</h3>
        <p style="color: var(--color-dark-text);">
          Сотрудники, особенно старшего поколения, боятся новых систем. Они предпочитают ручную работу, которая занимает часы вместо минут, создавая бутылочное горлышко для всей организации.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Нет эксперта, который понимает и экологию, и IT</h3>
        <p style="color: var(--color-dark-text);">
          Штатные IT-специалисты не разбираются в специфике природоохранных задач, а экологи не знают технологий. Это приводит к выбору неподходящих решений и потере инвестиций.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Готовые решения не учитывают российские реалии</h3>
        <p style="color: var(--color-dark-text);">
          Зарубежные системы слишком дороги и сложны для российских бюджетов, либо не соответствуют требованиям безопасности, а отечественные аналоги часто не решают конкретные задачи по охране природы или экологическому мониторингу.
        </p>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 900px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Хорошая новость:</strong> цифровизация работает, если адаптировать технологии под ваши реальные задачи и условия. Мой опыт руководства ООПТ и глубокое знание IT позволяют находить решения там, где другие видят тупик.
    </p>
  </div>
</section>

<!-- 4. ФОТО-СЕКЦИЯ 1 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: flex-end; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_4.2-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 10%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Кто может стать мостом между миром охраны природы и миром IT?
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-left: 4px solid var(--color-add-acc); padding-left: var(--spacing-lg); margin: 0;">
      Тот, кто жил в обоих мирах. 12 лет я руководил заповедниками и нацпарками и знаю изнутри, как собираются данные в поле, как пишутся отчёты и где главные «узкие места». Потом я целенаправленно освоил современные IT-инструменты (ГИС, серверные решения, мобильную разработку), чтобы автоматизировать именно эти процессы. Я говорю на обоих языках.
    </blockquote>
  </div>
</section>

<!-- 5. УНИКАЛЬНОСТЬ / ЧЕМ ЗАНИМАЮСЬ? -->
<section class="expertise-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-4-primary); margin-bottom: 0;">
      Почему у меня получается внедрять IT там, где другие бессильны?
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Бывший директор ООПТ</h3>
        <p style="color: var(--color-dark-text);">
          Я практик. Я знаю бюджетные, кадровые и бюрократические реалии госучреждений. Все предлагаемые решения изначально проверяю на реализуемость в ваших условиях.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">IT для задач, а не наоборот</h3>
        <p style="color: var(--color-dark-text);">
          Я начинаю работу с анализа вашей конкретной задачи (патрулирование, учёт птиц, мониторинг нарушений или выдача разрешений) и подбираю или настраиваю инструмент под неё.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Цифровизация под ключ при ограниченных ресурсах</h3>
        <p style="color: var(--color-dark-text);">
          Предлагаю не «дорогие решения для идеальных условий», а рабочие инструменты для реальных задач с вашим бюджетом. Это может быть адаптация открытого ПО, настройка доступных платформ или разработка простых мобильных приложений — главное, чтобы результат был измерим.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Полный цикл: от идеи до обучения</h3>
        <p style="color: var(--color-dark-text);">
          Беру на себя весь процесс: обсуждаем задачу, выбираем/настраиваем инструмент, внедряем, обучаю вашу команду (от инспектора до научного сотрудника) и оказываю техподдержку.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 6. ФОТО-СЕКЦИЯ 2 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_4.3-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Цифровизация — это не про технологии, а про эффективность.
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      Цель любого IT-внедрения в ООПТ — не «быть современным», а освободить время и ресурсы сотрудников для главного: охраны природы и исследований. Когда инспектор тратит минуты, а не часы на отчёт, а учёный видит данные на карте, а не в стопке бумаг — это и есть настоящая эффективность.
    </blockquote>
  </div>
</section>

<!-- 7. ПРОЦЕСС / КАК ЭТО РАБОТАЕТ? -->
<section class="process-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-4-primary); margin-bottom: var(--spacing-md);">
      Как происходит внедрение цифрового инструмента?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-4-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Прозрачные этапы, на каждом из которых вы получаете результат
    </p>
    
    <div class="process-grid">
      <!-- Этап 1 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">1</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Диагностика и постановка задачи</h3>
          <p style="color: var(--color-dark-text);">
            Подробно изучаем, какую именно операцию нужно улучшить (сбор полевых данных, создание карт, отчётность). Определяем, какой результат будет успехом.
          </p>
        </div>
      </div>
      
      <!-- Этап 2 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">2</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Подбор и адаптация решения</h3>
          <p style="color: var(--color-dark-text);">
            Исходя из задачи, бюджета и инфраструктуры, выбираем инструмент (например, SMART, QGIS, мобильное приложение или SaaS-платформа) и настраиваем его именно под ваши нужды: создаём формы, карты, отчёты.
          </p>
        </div>
      </div>
      
      <!-- Этап 3 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">3</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Пилотное внедрение и обучение</h3>
          <p style="color: var(--color-dark-text);">
            Внедряем решение для одного отдела или на одном участке. Провожу обучающие семинары для сотрудников, делаю простые и понятные инструкции.
          </p>
        </div>
      </div>
      
      <!-- Этап 4 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">4</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Полномасштабный запуск и поддержка</h3>
          <p style="color: var(--color-dark-text);">
            После успешного пилота масштабируем на всю организацию. Оказываю техническую и консультационную поддержку на период привыкания команды.
          </p>
        </div>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 1200px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Формат и сроки:</strong> Работаю удалённо и с выездами. Сроки зависят от задачи: от настройки SMART (1-2 месяца) до разработки мобильного приложения (2-4 месяца).
    </p>
  </div>
</section>

<!-- 7.5. ОСОБЫЙ КЕЙС -->
<!-- 7.5.1. Заголовок + Подзаголовок + Фото -->
<section id="kejs-4-0" style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <div class="special-case-intro">
      <!-- Текст слева -->
      <div>
        <h2 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md);">
          Как IT-решение превратило хаос данных в инструмент управления охраной природы
        </h2>
        <p style="font-size: var(--font-size-lg); color: var(--color-4-secondary); line-height: 1.6;">
          Опыт внедрения и адаптации системы SMART в 6 локациях — от нацпарков до региональных охотуправлений. Не просто установка софта, а полная настройка под ваши задачи и команду.
        </p>
      </div>
      
      <!-- Фото справа -->
      <div style="margin: 0; padding: 0; height: 100%;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_4.0-1200w.jpg' | relative_url }}" alt="SMART" style="width: 100%; height: 100%; border-radius: var(--radius-lg); display: block; margin: 0; object-fit: cover;">
      </div>
    </div>
  </div>
</section>

<!-- 7.5.2. Вызов (Проблема «До») -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7;">
      <span style="font-weight: 700; font-size: 36px; color: var(--color-4-primary);">Вызов:</span> До внедрения системы работа строилась на бумаге и интуиции. Инспекторы фиксировали данные в блокнотах, а начальнику охраны приходилось неделями сводить вручную разрозненные сведения для отчётов. Не было объективной картины: где чаще всего происходят нарушения? Где концентрируются редкие виды? Эффективно ли распределяются патрули? Управление строилось на привычках, а не на данных. Это приводило к потере информации, нерациональному использованию ресурсов и невозможности объективно оценить эффективность работы перед руководством и надзорными органами.
    </p>
  </div>
</section>

<!-- 7.5.3. Решение (Процесс) - ТЕМНЫЙ БЛОК -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-4-primary); color: var(--color-light-text);">
  <div class="container">
    <p style="color: var(--color-light-text); line-height: 1.7; margin-bottom: var(--spacing-md);">
      <span class="special-case-heading" style="color: var(--color-accent);">Решение:</span> Я выступаю как проводник между миром охраны природы и миром IT. Подбираю такой инструмент, который сможет решить ваши конкретные операционные проблемы при минимальных затратах ресурсов.
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95; margin-bottom: var(--spacing-md);">
      <strong>Этап 1: Перевод потребностей в цифру.</strong> Вместе с заказчиком я определяю: какие отчёты нужны руководству и надзорным органам? Какие данные должны собирать специалисты в поле для обеспечения прозрачности и контроля?
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95; margin-bottom: var(--spacing-md);">
      <strong>Этап 2: Адаптация SMART под российские реалии.</strong> Я настраиваю структуру базы данных, создаю удобные формы для мобильного приложения, пишу скрипты для автоматических отчётов. Система учится говорить на вашем языке и решать ваши задачи.
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95;">
      <strong>Этап 3: Внедрение и «оживление» системы.</strong> Я устанавливаю SMART на компьютеры и смартфоны, провожу обучение для сотрудников (часто впервые работающих со смартфоном в поле) и для аналитиков. Затем сопровождаю проект в течение года, чтобы система стала частью повседневной работы, а не обузой.
    </p>
  </div>
</section>

<!-- 7.5.4. Итог (Результаты «После») -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <h3 style="text-align: center; color: var(--color-accent); margin-bottom: var(--spacing-md); font-size: var(--font-size-2xl);">
      Итог
    </h3>
    <ul style="color: var(--color-dark-text); line-height: 1.8; list-style: none; padding: 0;">
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Отчёты за минуту.</strong> Квартальный отчёт по нарушениям, на который раньше уходила неделя, формируется одним кликом.
      </li>
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Управление на основе карт и аналитики.</strong> Руководство видит не только маршруты патрулей, но и реальные «горячие точки» нарушений, что позволяет точечно распределять ресурсы и снижать издержки.
      </li>
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Прозрачность и контроль.</strong> Все действия сотрудников фиксируются с геометкой, обеспечивая дисциплину, объективность решений и защиту от претензий надзорных органов.
      </li>
      <li style="padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Единое цифровое пространство.</strong> Данные от разных подразделений собираются в одну систему, становясь основой для комплексного управления территорией и подготовки ESG-отчётности.
      </li>
    </ul>
  </div>
</section>

<!-- 7.5.5. Ценность для будущего клиента -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7; font-weight: 500; text-align: left; font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-lg);">
      Этот кейс доказывает, что цифровизация в управлении природными территориями — это не про сложные технологии для IT-специалистов. Это про ясность и контроль для руководителя. Внедрение SMART через меня — это гарантия, что система будет работать именно в ваших условиях, будь то федеральный заповедник, охотничье хозяйство или добывающая компания, ведущая экологический мониторинг. Вы получите не софт, а инструмент для принятия обоснованных решений и доказательства эффективности вашей работы перед любыми проверяющими и стейкхолдерами.
    </p>
  </div>
</section>

<!-- 8. РЕАЛИЗОВАННЫЕ ПРОЕКТЫ -->
<section class="projects-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-4-primary); color: var(--color-light-text);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-light-text); margin-bottom: var(--spacing-md);">
      Цифровизация, которая работает: от госучреждений до бизнеса
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); opacity: 0.8; margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Реальные проекты в разных регионах России, где внедрение цифровых инструментов решило операционные задачи и сократило время на рутину в несколько раз. Каждый кейс начинался с понимания специфики задачи, а не с выбора технологии.
    </p>
    
    <div class="grid grid-3" style="gap: var(--spacing-md);">
      <!-- Кейс 4.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_4.1-800w.webp' | relative_url }}" alt="Кейс 4.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">От спутника до маршрута: как пространственный анализ увеличил эффективность полевых исследований в несколько раз</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-4-1" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 4.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_4.2-800w.webp' | relative_url }}" alt="Кейс 4.2" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Forest Research: как собственное приложение упростило полевые исследования для ГИС-проекта</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-4-2" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 9. РЕЗУЛЬТАТЫ -->
<section class="results-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-4-primary); margin-bottom: var(--spacing-md);">
      Какие изменения приносит грамотная цифровизация?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-4-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Конкретные выгоды, которые почувствуют ваши сотрудники и руководство
    </p>
    
    <div class="results-grid">
      <!-- Результат 1 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md);">Сокращение бумажной рутины</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Ключевые данные (маршруты, нарушения, встречи животных) сразу фиксируются в цифровом виде в поле. Пропадает этап расшифровки и переписывания из бумажных журналов.
        </p>
      </div>
      
      <!-- Результат 2 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md);">Автоматизация отчётов и анализ эффективности</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Система сама генерирует отчёты о пройденных маршрутах, выявленных нарушениях, активности патрулирования. Руководство получает объективную картину работы на территории в виде карт и дашбордов.
        </p>
      </div>
      
      <!-- Результат 3 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md);">Оптимизация ресурсов на планирование</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          ГИС-анализ позволяет планировать маршруты учётов или патрулирования с максимальным охватом и минимальными затратами времени и ГСМ, как было сделано для учёта птиц в Ремдовском заказнике.
        </p>
      </div>
      
      <!-- Результат 4 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md);">Стандартизация и качество данных</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Все данные собираются в едином, структурированном формате (как в приложении Forest Research). Это позволяет их легко анализировать, хранить и передавать, исключая ошибки и потерю информации.
        </p>
      </div>
      
      <!-- Результат 5 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary); grid-column: span 2;">
        <p style="color: var(--color-dark-text); font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-md);">
          <strong style="color: var(--color-4-primary);">Честно о главном:</strong> Цифровизация — это процесс. Она требует первоначальных усилий по обучению и изменению привычек. Но на выходе вы получаете не просто «цифру», а инструмент для принятия более обоснованных управленческих решений и высвобождения времени вашей команды для содержательной работы. Я помогаю пройти этот путь с минимальным сопротивлением.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 10. ФИНАЛЬНЫЙ ПРИЗЫВ К ДЕЙСТВИЮ -->
<section id="contact" class="contact-section" style="padding: calc(var(--spacing-xxl) * 2 / 3) 0; background-color: var(--color-4-primary); color: var(--color-light-text); text-align: center;">
  <div class="container">
    <h2 style="color: var(--color-add-acc); margin-bottom: var(--spacing-md); font-size: var(--font-size-3xl);">
      Готовы обсуждать<br>цифровизацию конкретной задачи?
    </h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.8;">
      Опишите, что вы хотите улучшить: учёт животных, работу инспекторов, выдачу разрешений посетителям с контролем антропогенной нагрузки, анализ данных или отчётность. Я изучу запрос и предложу IT-решение, которое будет работать в условиях вашей территории.
    </p>
    <a href="#consult-modal" class="btn btn-primary js-open-consult-modal" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl);">
      Записаться на консультацию
    </a>
  </div>
</section>
