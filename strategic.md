---
layout: default
title: "Стратегии устойчивости - Михаил Яблоков"
description: "Помогаю бизнесу и регионам создавать работающие стратегии развития природных территорий"
permalink: /strategic/
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
</style>

<!-- 1. HERO-СЕКЦИЯ -->
<section class="hero-section" style="min-height: 65vh; display: grid; grid-template-columns: 1fr 1fr; position: relative;">
  <!-- Левая часть: Фото -->
  <div class="hero-photo" style="background: url('{{ '/assets/images/hero/ymike.ru_1.1-1920w.webp' | relative_url }}') left center / cover no-repeat; min-height: 65vh; position: relative;">
  </div>
  
  <!-- Правая часть: Контент -->
  <div class="hero-content" style="background-color: var(--color-1-primary); color: var(--color-light-text); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: calc(var(--spacing-xxl) / 2) calc(var(--spacing-lg) * 2 / 3) 60px calc(var(--spacing-lg) * 2 / 3);">
    <h1 style="font-size: var(--font-size-4xl); margin-bottom: var(--spacing-md); line-height: 1.2;">
      Стратегии, которые работают: от конфликта интересов к измеримым результатам
    </h1>
    <p style="font-size: 22.5px; margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.6;">
      Помогаю бизнесу и регионам создавать работающие стратегии развития природных территорий, которые реально влияют на ESG-показатели и получают поддержку всех стейкхолдеров. Мой подход вовлекает команду и позволяет находить решения там, где другие видят тупик.
    </p>
    
    <!-- Статистика -->
    <div class="hero-stats">
      <!-- Пара 1: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">40+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">стратегических<br>сессий</div>
      </div>
      
      <!-- Пара 2: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">12</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">лет «изнутри<br>системы»</div>
      </div>
      
      <!-- Пара 3: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">с 2017</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">адаптирую методики<br>под российские реалии</div>
      </div>
    </div>
  </div>
</section>

<!-- 2. ДЛЯ КОГО? -->
<section class="audience-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-1-primary); margin-bottom: 0;">
      Для тех, кто хочет превратить стратегию в инструмент реальных решений, а не в отчетную формальность
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Нужна стратегия для достижений и снижения рисков? Я помогу создать стратегию с вовлечением команды и поддержкой всех ключевых групп для ESG-эффективности.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Управляете природными территориями и сталкиваетесь с конфликтом интересов? Помогу найти баланс между охраной природы и развитием вашей территории.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Ваша организация работает с территориями? Превращу разрозненные инициативы в единую стратегию для повышения эффективности проектов и доверия доноров.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Ваши стратегии остаются «на бумаге», а команда разобщена? Вовлеку сотрудников в планирование, чтобы стратегия стала руководством к действию в ежедневной работе.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 3. ПРОБЛЕМА / ПОЧЕМУ ЭТО ВАЖНО? -->
<section class="problems-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-1-primary); margin-bottom: var(--spacing-md);">
      Узнаёте эти вызовы в работе с природными территориями?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-1-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Проблемы управления, с которыми я работаю, универсальны — от регионального департамента до корпоративного ESG-отдела.
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Планы есть, но ничего не меняется</h3>
        <p style="color: var(--color-dark-text);">
          Документы пылятся на полке, а команда каждый год «тушит» одни и те же «пожары». Нет связи между стратегией и операционными задачами.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Конфликт интересов</h3>
        <p style="color: var(--color-dark-text);">
          Экологи, бизнес, местные жители, власти не могут найти общий язык. Проекты буксуют или встречают сопротивление.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Невозможно доказать эффективность</h3>
        <p style="color: var(--color-dark-text);">
          Сложно отчитаться перед руководством, советом директоров или акционерами о вкладе в развитие территории или ESG. Нет ясных метрик.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Ресурсы распыляются</h3>
        <p style="color: var(--color-dark-text);">
          Нет четких приоритетов. Деньги и время уходят на сиюминутные задачи, а не на системное развитие.
        </p>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 900px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Хорошая новость:</strong> эти проблемы решаемы. Методы, которые я использовал для трансформации федеральных ООПТ, отлично работают и для бизнеса с ESG-повесткой и региональных администраций.
    </p>
  </div>
</section>

<!-- 4. ФОТО-СЕКЦИЯ 1 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_1.2-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      «Сначала кажется, что стратегия — это лишняя нагрузка, трата времени...»
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      ...А потом команда обнаруживает, что это — инструмент, который экономит время и ресурсы. Я видел, как это «прозрение» меняет работу десятков команд — от госучреждений до НКО.
    </blockquote>
  </div>
</section>

<!-- 5. УНИКАЛЬНОСТЬ / ЧЕМ ЗАНИМАЮСЬ? -->
<section class="expertise-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-1-primary); margin-bottom: 0;">
      Почему мои стратегии не остаются на бумаге?
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Госэксперт, понимающий бизнес-реалии</h3>
        <p style="color: var(--color-dark-text);">
          12 лет руководил ФГБУ при жестких бюджетных ограничениях. Знаю, как создавать стратегии, которые проходят согласования и получают финансирование.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Практические методики вместо теории</h3>
        <p style="color: var(--color-dark-text);">
          Мои инструменты проверены в реальных проблемах, когда за месяц мы сформировали стратегию как руководство к действию.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Фасилитация, а не навязывание</h3>
        <p style="color: var(--color-dark-text);">
          Я создаю процесс, где ваша команда сама находит решения и берет ответственность за их реализацию. Это гарантирует поддержку стратегии на всех уровнях.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Язык всех стейкхолдеров</h3>
        <p style="color: var(--color-dark-text);">
          Умею находить точки соприкосновения между экологическими, экономическими и социальными интересами.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 6. ФОТО-СЕКЦИЯ 2 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_1.3-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Итог — это не документ, а способность команды действовать согласованно
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      Успешная стратегия — это не файл в PDF. Это — общее понимание в команде, куда и зачем мы движемся. Это личный вклад каждого в это направление. Это — инструмент, который помогает принимать согласованные решения каждый день. Именно такую трансформацию я создавал в десятках проектов.
    </blockquote>
  </div>
</section>

<!-- 7. ПРОЦЕСС / КАК ЭТО РАБОТАЕТ? -->
<section class="process-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-1-primary); margin-bottom: var(--spacing-md);">
      Как строится работа: от диагностики до внедрения
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-1-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Гибкий, прозрачный процесс, который адаптируется под ваши задачи и возможности
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <!-- Этап 1 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">1</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Диагностика и анализ контекста</h3>
          <p style="color: var(--color-dark-text);">
            Изучаю вашу ситуацию, ресурсы, ограничения и формулируем измеримые цели, которые будут реальной победой для организации.
          </p>
        </div>
      </div>
      
      <!-- Этап 2 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">2</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Определение формата и вовлечение стейкхолдеров</h3>
          <p style="color: var(--color-dark-text);">
            Выбираем оптимальный формат работы (стратегическая сессия, серия встреч, интенсив) и определяем ключевых участников процесса.
          </p>
        </div>
      </div>
      
      <!-- Этап 3 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">3</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Совместная разработка</h3>
          <p style="color: var(--color-dark-text);">
            На сессиях вместе с вашей командой определяем стратегическое видение, ценности, приоритеты и конкретные шаги с ответственными и сроками.
          </p>
        </div>
      </div>
      
      <!-- Этап 4 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">4</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Формализация и адаптация</h3>
          <p style="color: var(--color-dark-text);">
            Превращаем решения сессий в понятные инструменты: дорожную карту, систему KPI или OKR, согласованные с вашими отчетными требованиями.
          </p>
        </div>
      </div>
      
      <!-- Этап 5 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">5</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Поддержка внедрения</h3>
          <p style="color: var(--color-dark-text);">
            При необходимости помогаю запустить стратегию в работу: адаптирую формат планерок, настраиваю систему контроля, провожу тренинги для команды.
          </p>
        </div>
      </div>
      
      <!-- Этап 6 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">6</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Обратная связь и корректировка</h3>
          <p style="color: var(--color-dark-text);">
            Через оговоренный срок (квартал, год) анализируем результаты и корректируем стратегию, делая ее живым инструментом управления.
          </p>
        </div>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 1200px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Формат и сроки:</strong> Работаю очно и онлайн. Длительность — от 2-дневной сессии до годового сопровождения. Гибкий график, адаптированный под вашу загрузку и бюджет.
    </p>
  </div>
</section>

<!-- 7.5. ОСОБЫЙ КЕЙС -->
<!-- 7.5.1. Заголовок + Подзаголовок + Фото -->
<section id="kejs-1-0" style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: var(--spacing-md);">
      <!-- Текст слева -->
      <div>
        <h2 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md);">
          Опыт трансформации команды Дирекции ООПТ Санкт-Петербурга
        </h2>
        <p style="font-size: var(--font-size-lg); color: var(--color-1-secondary); line-height: 1.6;">
          Как за месяц согласовать охрану природы и развитие — и превратить стратегию из формального документа в инструмент ежедневных решений.
        </p>
      </div>
      
      <!-- Фото справа -->
      <div style="margin: 0; padding: 0; height: 100%;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_1.0-1200w.jpg' | relative_url }}" alt="Команда Дирекции ООПТ Санкт-Петербурга" style="width: 100%; height: 100%; border-radius: var(--radius-lg); display: block; margin: 0; object-fit: cover;">
      </div>
    </div>
  </div>
</section>

<!-- 7.5.2. Вызов (Проблема «До») -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <p style="color: var(--color-dark-text); font-size: var(--font-size-lg); line-height: 1.7;">
      <span style="font-weight: 700; font-size: 36px; color: var(--color-1-primary);">Вызов:</span> Дирекция ООПТ Санкт-Петербурга — прогрессивное казённое учреждение с молодым коллективом, сформированным после реструктуризации. Все сотрудники — сильные специалисты, но каждый работал в своём направлении. Отсутствовал общий язык и ясное понимание целей, что приводило к выгоранию и потере смысла в работе. Противоречия между задачами охраны природы и развития туризма блокировали возможность содержательных стратегических обсуждений.
    </p>
  </div>
</section>

<!-- 7.5.3. Решение (Процесс) - ТЕМНЫЙ БЛОК -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-1-primary); color: var(--color-light-text);">
  <div class="container">
    <p style="color: var(--color-light-text); font-size: var(--font-size-lg); line-height: 1.7; margin-bottom: var(--spacing-md);">
      <span style="font-weight: 700; font-size: 36px; color: var(--color-accent);">Решение:</span> Я разработал и провёл интенсивную месячную программу, включавшую две недели подготовки и две поездки в Санкт-Петербург. Моя задача состояла не в том, чтобы дать готовые ответы, а в том, чтобы организовать процесс, в ходе которого команда сама пришла к согласованным решениям.
    </p>
    
    <p style="color: var(--color-light-text); font-size: var(--font-size-lg); line-height: 1.7; opacity: 0.95;">
      Первый день был посвящён диалоговым семинарам на языке, понятном участникам, и позволил преодолеть первоначальный скепсис. На второй день, в ходе тренингов, команда сформулировала общие ценности и миссию, отвечая на сложные вопросы, а не получая их извне — моя роль сводилась к слушанию, структурированию и направлению дискуссии. В третий день прошла стратегическая сессия, в которой коллектив определил приоритетные направления развития, опираясь на сформированное видение и осознание ключевых проблем. На четвёртый день, уже на волне доверия и ясности, команда совместно определила стратегические задачи на год с учётом реальных ресурсов, сроков и ответственных. Каждый понимает свой вклад и как он связан с общей целью.
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
        Появилась настоящая команда с сформулированными ценностями, общим видением и языком.
      </li>
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        Был снят ключевой конфликт непонимания — баланс между охраной и использованием территории нашла сама команда.
      </li>
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        Выросла мотивация и снизились риски выгорания благодаря пониманию личного вклада и ясности целей.
      </li>
      <li style="padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        Стратегия и план перестали быть «бумагой», превратившись в руководство к действию для ежедневных решений.
      </li>
    </ul>
  </div>
</section>

<!-- 7.5.5. Ценность для будущего клиента -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <p style="color: var(--color-dark-text); font-size: var(--font-size-xl); line-height: 1.7; font-weight: 500; text-align: left; font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-lg);">
      Этот кейс — доказательство универсального алгоритма. Он работает как для создания нового направления с нуля, так и для запуска «буксующего» проекта. Моя фасилитация — это короткий путь к успеху: я помогаю вашей команде быстро преодолеть разобщённость и выработать собственные, поддержанные всеми решения, которые будут реально исполняться.
    </p>
  </div>
</section>

<!-- 8. РЕАЛИЗОВАННЫЕ ПРОЕКТЫ -->
<section class="projects-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-1-primary); color: var(--color-light-text);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-light-text); margin-bottom: var(--spacing-md);">
      Стратегии, которые меняют реальность: проекты с бизнесом и регионами
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); opacity: 0.8; margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Как я создавал рабочие стратегии для организаций, где сталкивались интересы экологии, бизнеса и местных сообществ. Каждый кейс — это пример преодоления разобщенности через вовлечение всех стейкхолдеров в процесс планирования.
    </p>
    
    <div class="grid grid-3" style="gap: var(--spacing-md);">
      <!-- Кейс 1.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_1.1-800w.webp' | relative_url }}" alt="Кейс 1.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Минприроды и ООПТ: найден общий язык</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-1-1" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 1.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_1.2-800w.webp' | relative_url }}" alt="Кейс 1.2" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Три года поддержки: как Шорский национальный парк движется к цели вопреки ограничениям</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-1-2" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 1.3 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_1.3-800w.webp' | relative_url }}" alt="Кейс 1.3" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">АНО «ОСДЖ»: как согласовать противоположные взгляды на будущее НКО</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-1-3" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 2.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.2-800w.webp' | relative_url }}" alt="Лосиный остров" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Лосиный остров: как изменить имидж и наладить управление для ООПТ в мегаполисе</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-2-2" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 3.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_3.2-800w.webp' | relative_url }}" alt="Кейс 3.2" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Визит-центр заповедника «Пасвик»: ESG-партнёрство, которое меняет отношение к природе</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-3-2" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 5.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.2-800w.webp' | relative_url }}" alt="Кейс 5.2" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Оперативное погружение: как за 4 дня мы синхронизировали команду Росзаповедцентра</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-5-2" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 9. РЕЗУЛЬТАТЫ -->
<section class="results-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-1-primary); margin-bottom: var(--spacing-md);">
      Какие качественные изменения приносит работа со стратегическим планированием?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-1-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Выгоды, которые получают мои клиенты — от региональных администраций до корпоративных отделов
    </p>
    
    <div class="grid grid-2" style="column-gap: var(--spacing-md); row-gap: var(--spacing-md);">
      <!-- До -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); text-align: center;">Типичная ситуация «До»</h3>
        <ul style="color: var(--color-dark-text); line-height: 1.5; list-style-position: outside; padding-left: 20px;">
          <li style="margin-bottom: var(--spacing-sm);">Приоритеты противоречивы, ресурсы распыляются</li>
          <li style="margin-bottom: var(--spacing-sm);">Команда разобщена, работает вразнобой, энергия уходит на внутренние трения</li>
          <li style="margin-bottom: var(--spacing-sm);">Управление реактивное, «пожарный» режим, нет времени на развитие</li>
          <li>Результаты размыты, невозможно не только отчитаться, а самим понять, чего достигли</li>
        </ul>
      </div>
      
      <!-- После -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border: 2px solid var(--color-accent);">
        <h3 style="color: var(--color-accent); margin-bottom: var(--spacing-md); text-align: center;">Ситуация «После» внедрения подходов</h3>
        <ul style="color: var(--color-dark-text); line-height: 1.5; list-style-position: outside; padding-left: 20px;">
          <li style="margin-bottom: var(--spacing-sm);">Приоритеты ясны и согласованы на всех уровнях. Ресурсы фокусируются на главном</li>
          <li style="margin-bottom: var(--spacing-sm);">Команда понимает общую цель и свою роль в её достижении. Исчезают «войны» между отделами</li>
          <li style="margin-bottom: var(--spacing-sm);">Управление становится проактивным. Появляется время и план для развития, а не только для «тушения пожаров»</li>
          <li>Результаты становятся измеримыми. Появляется четкая картина для отчётов перед вышестоящими органами, советом директоров или донорами</li>
        </ul>
      </div>
    </div>
    
    <div style="margin-top: var(--spacing-xl); background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
      <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md);">Почему это работает на практике (из моего опыта):</h3>
      <ul style="color: var(--color-dark-text); line-height: 1.5; list-style-position: outside; padding-left: 20px;">
        <li style="margin-bottom: var(--spacing-sm);"><strong style="color: var(--color-accent);">Сокращаются сроки согласований</strong> — когда все стейкхолдеры участвуют в создании плана, исчезает саботаж на этапе реализации</li>
        <li style="margin-bottom: var(--spacing-sm);"><strong style="color: var(--color-accent);">Повышается вовлеченность команды</strong> — люди поддерживают то, что создали сами, а не спущенный сверху документ</li>
        <li><strong style="color: var(--color-accent);">Появляется устойчивость развития</strong> — стратегия становится не разовым событием, а цикличным процессом, адаптирующимся к изменениям</li>
      </ul>
      
        <p style="color: var(--color-dark-text); margin-top: var(--spacing-md); font-style: italic; border-left: 4px solid var(--color-1-secondary); padding-left: var(--spacing-md);">
        <strong style="color: var(--color-1-primary);">Честно о главном:</strong> Я не создаю «волшебные таблетки». Я даю вашей команде инструменты и алгоритмы, которые работают. Но чтобы они заработали, их нужно применять. Моя задача — максимально облегчить этот старт и поддержать на первых этапах.
      </p>
    </div>
  </div>
</section>

<!-- 10. ФИНАЛЬНЫЙ ПРИЗЫВ К ДЕЙСТВИЮ -->
<section id="contact" class="contact-section" style="padding: calc(var(--spacing-xxl) * 2 / 3) 0; background-color: var(--color-1-primary); color: var(--color-light-text); text-align: center;">
  <div class="container">
    <h2 style="color: var(--color-add-acc); margin-bottom: var(--spacing-md); font-size: var(--font-size-3xl);">
      Готовы к стратегии, которая работает,<br>а не пылится на полке?
    </h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.8;">
      Забронируйте консультацию. Вместе проанализируем Вашу ситуацию и разработаем план первых шагов по созданию стратегии, которую поддержит вся Ваша команда. Вы получите конкретные рекомендации и понимание сроков, бюджета и ожидаемых результатов. Консультация ни к чему не обязывает, но может стать первым шагом к управлению без «пожаров».
    </p>
    <a href="mailto:ymike@mail.ru" class="btn btn-primary" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl);">
      Записаться на консультацию
    </a>
  </div>
</section>

<!-- МОДАЛЬНЫЕ ОКНА ДЛЯ КЕЙСОВ -->
<!-- Будут добавлены позже -->
