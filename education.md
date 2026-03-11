---
layout: default
title: "Обучение и развитие команд - Михаил Яблоков"
description: "Создаю образовательные программы для бизнеса и госсектора, которые объединяют природоохранный опыт, практические инструменты и системное мышление"
permalink: /education/
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

/* Адаптация секции 2 (Для кого?) */
.audience-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

@media (max-width: 1024px) {
  .audience-grid {
    grid-template-columns: 1fr;
  }
  
  .audience-grid > div[style*="grid-column: span 2"] {
    grid-column: span 1 !important;
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
</style>

<!-- 1. HERO-СЕКЦИЯ -->
<section class="hero-section" style="min-height: 65vh; display: grid; grid-template-columns: 1fr 1fr; position: relative;">
  <!-- Левая часть: Фото -->
  <div class="hero-photo" style="background: url('{{ '/assets/images/hero/ymike.ru_5.1-1920w.webp' | relative_url }}') center center / cover no-repeat; min-height: 65vh; position: relative;">
  </div>
  
  <!-- Правая часть: Контент -->
  <div class="hero-content" style="background-color: var(--color-5-primary); color: var(--color-light-text); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: calc(var(--spacing-xxl) / 2) calc(var(--spacing-lg) * 2 / 3) 60px calc(var(--spacing-lg) * 2 / 3);">
    <h1 style="font-size: var(--font-size-4xl); margin-bottom: var(--spacing-md); line-height: 1.2;">
      Обучение для ESG и устойчивого развития, которое меняет подход к управлению природными территориями
    </h1>
    <p style="font-size: 22.5px; margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.6;">
      Создаю образовательные программы для бизнеса и госсектора, которые объединяют природоохранный опыт, практические инструменты и системное мышление. Мои курсы формируют не просто навыки, а профессиональное мировоззрение, необходимое для работы в сложных условиях.
    </p>
    
    <!-- Статистика -->
    <div class="hero-stats">
      <!-- Пара 1: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">120+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">дипломированных<br>специалистов</div>
      </div>
      
      <!-- Пара 2: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">10+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">корпоративных<br>программ</div>
      </div>
      
      <!-- Пара 3: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">>50%</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">применяют знания<br>в первый месяц</div>
      </div>
    </div>
  </div>
</section>

<!-- 2. ДЛЯ КОГО? -->
<section class="audience-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-5-primary); margin-bottom: 0;">
      Для тех, кто инвестирует в развитие команды как в главный ресурс устойчивого развития
    </h2>
    
    <div class="audience-grid" style="margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Нужны экологические модули для ESG-отчетности и обучения? Создам комплексные программы, которые систематизируют знания и формируют общую систему ценностей компании.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Хотите легально работать вокруг ООПТ и строить устойчивый бизнес? Подготовлю программы для вашего бизнеса, создающие долгосрочное партнерство с территориями.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Хотите внедрить практико-ориентированные курсы по управлению территориями? Адаптирую мировые методики под российскую реальность и обеспечу связь с работодателями.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Нужны практические навыки, а не теория? Создам программы, объединяющие биологию, управление и коммуникации в единую систему профессионального мировоззрения.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary); grid-column: span 2;">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Требуется профессиональное развитие при ограниченных ресурсах? Адаптирую лучшие международные практики под ваши условия без отрыва от основной деятельности.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 3. ПРОБЛЕМА / ПОЧЕМУ ЭТО ВАЖНО? -->
<section class="problems-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-5-primary); margin-bottom: var(--spacing-md);">
      Почему в охране природы так сложно найти качественное обучение?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-5-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Вызовы, с которыми сталкиваются и специалисты, и образовательные учреждения.
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Разрыв между теорией и практикой</h3>
        <p style="color: var(--color-dark-text);">
          Много академических знаний из учебников, но по биологии и направлениям природопользования, не по территориальной охране природы. Выпускники не готовы к работе.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Отсутствие системного взгляда</h3>
        <p style="color: var(--color-dark-text);">
          Обучение часто фрагментарно: отдельно про туризм, отдельно для юристов, отдельно для социологов. Нет целостной картины, связывающей всё это в логику одной территории.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Нет доступа к уникальному опыту</h3>
        <p style="color: var(--color-dark-text);">
          Знания лучших практиков остаются внутри их организаций или теряются. Нет механизмов передачи «неписаных» правил, тонкостей и глубокого смысла профессии.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Непонимание контекста смежных сфер</h3>
        <p style="color: var(--color-dark-text);">
          Экологи не понимают логику бизнеса, бизнес — логику ООПТ, чиновники — логику местных сообществ. Это порождает дискоммуникацию и неэффективные проекты.
        </p>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 900px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Решение</strong> — практические программы от эксперта, который знает и бизнес-логику, и природоохранную специфику. Я создаю обучение, которое формирует не просто знания, а систему профессионального мышления для работы в сложных условиях.
    </p>
  </div>
</section>

<!-- 4. ФОТО-СЕКЦИЯ 1 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_5.2-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Обучение — это инвестиция в будущее отрасли
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      Лучшие проекты, связанные с природой, учитывают и экологические, и социальные цели. Такое балансирование — это не глава из учебника, а сложное искусство.<br>Моя задача — передать его философию и дать инструменты для реализации.
    </blockquote>
  </div>
</section>

<!-- 5. УНИКАЛЬНОСТЬ / ЧЕМ ЗАНИМАЮСЬ? -->
<section class="expertise-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-5-primary); margin-bottom: 0;">
      Почему мои образовательные программы дают результат, а не просто заполняют учебные планы?
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Системный подход вместо разрозненных знаний</h3>
        <p style="color: var(--color-dark-text);">
          Как в программе «Заповедное дело», я объединяю экологию, управление и коммуникации в единую систему, дающую целостное понимание для принятия бизнес-решений.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Доступ к сообществу практиков</h3>
        <p style="color: var(--color-dark-text);">
          В моих программах участвуют не только теоретики, но и действующие руководители ООПТ и экспертов, как в кейсе с КамГУ, где 30+ практиков делились «неписаными» правилами профессии.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Смысл вместо инструкций</h3>
        <p style="color: var(--color-dark-text);">
          Я объясняю не только «как», но и «зачем», формируя у участников осознанное отношение к работе, как в программе для Росзаповедцентра.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Практические инструменты для конкретных задач</h3>
        <p style="color: var(--color-dark-text);">
          Каждый модуль завершается созданием реального проекта или инструмента, который участник сразу применяет в работе, как в программе «От специалиста к лидеру».
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 6. ФОТО-СЕКЦИЯ 2 -->
<section class="photo-section-2" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_5.3-1400w.webp' | relative_url }}') right center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Итог обучения — это не сертификат, а изменение подхода к работе
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      Самая ценная обратная связь, которую я получаю: «Вы помогли мне не просто научиться чему-то новому, а по-другому увидеть всю свою работу, понять её настоящее значение».<br>Именно к этому я стремлюсь в каждой программе.
    </blockquote>
  </div>
</section>

<!-- 7. ПРОЦЕСС / КАК ЭТО РАБОТАЕТ? -->
<section class="process-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-5-primary); margin-bottom: var(--spacing-md);">
      Как строится сотрудничество в сфере обучения?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-5-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Гибкий подход к задачам заказчика: от отдельной лекции или модуля до полноценной образовательной программы
    </p>
    
    <div class="process-grid">
      <!-- Этап 1 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">1</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Анализ потребностей и целей</h3>
          <p style="color: var(--color-dark-text);">
            Вместе определяем, какого результата нужно достичь: повысить квалификацию команды, внедрить новый курс в учебный план, разработать программу для ESG-модуля. Учитываем уровень аудитории.
          </p>
        </div>
      </div>
      
      <!-- Этап 2 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">2</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Разработка или адаптация программы</h3>
          <p style="color: var(--color-dark-text);">
            Создаю программу, которая отвечает вашим целям. Это может быть: готовая тема из моего опыта (стратегия, туризм, социология) или полностью новый курс, структурирующий знания под ваш запрос.
          </p>
        </div>
      </div>
      
      <!-- Этап 3 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">3</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Реализация в удобном формате</h3>
          <p style="color: var(--color-dark-text);">
            Провожу обучение в формате, который вам подходит: интенсивный тренинг на территории, онлайн-курс, серия вебинаров, цикл лекций в вузе, организация стажировки.
          </p>
        </div>
      </div>
      
      <!-- Этап 4 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">4</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Практика и обратная связь</h3>
          <p style="color: var(--color-dark-text);">
            Делаю акцент на интерактив, разбор реальных кейсов, практические задания. Даю обратную связь участникам.
          </p>
        </div>
      </div>
      
      <!-- Этап 5 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative; grid-column: span 2;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">5</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Поддержка после обучения</h3>
          <p style="color: var(--color-dark-text);">
            Предоставляю материалы, отвечаю на вопросы, консультирую по применению знаний на практике (опционально).
          </p>
        </div>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 1200px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Формат и сроки:</strong> От 2-дневного воркшопа до 9-месячной программы профессиональной переподготовки.
    </p>
  </div>
</section>

<!-- 7.5. ОСОБЫЙ КЕЙС -->
<!-- 7.5.1. Заголовок + Подзаголовок + Фото -->
<section id="kejs-5-0" style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <div class="special-case-intro">
      <!-- Текст слева -->
      <div>
        <h2 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md);">
          Первый диплом по заповедному делу: как мы создали систему знаний для всей отрасли
        </h2>
        <p style="font-size: var(--font-size-lg); color: var(--color-5-secondary); line-height: 1.6;">
          Опыт разработки и запуска программы профессиональной переподготовки, которая впервые в России систематизировала практику ООПТ в целостное мировоззрение и дала государственный диплом 120+ специалистам.
        </p>
      </div>
      
      <!-- Фото справа -->
      <div style="margin: 0; padding: 0; height: 100%;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.0-1200w.jpg' | relative_url }}" alt="Заповедное дело" style="width: 100%; height: 100%; border-radius: var(--radius-lg); display: block; margin: 0; object-fit: cover;">
      </div>
    </div>
  </div>
</section>

<!-- 7.5.2. Вызов (Проблема «До») -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7;">
      <span class="special-case-heading" style="color: var(--color-5-primary);">Вызов:</span> В сфере управления природными территориями наблюдался образовательный вакуум. Специалисты приходили с узкопрофессиональными знаниями, но без понимания комплексного подхода к сохранению природы. Не существовало программ, которые объясняли бы, как интегрировать охрану территории, научные исследования, работу с людьми и развитие туризма в единую стратегию. Это приводило к фрагментарному управлению и потере преемственности опыта между поколениями специалистов.
    </p>
  </div>
</section>

<!-- 7.5.3. Решение (Процесс) - ТЕМНЫЙ БЛОК -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-5-primary); color: var(--color-light-text);">
  <div class="container">
    <p style="color: var(--color-light-text); line-height: 1.7; margin-bottom: var(--spacing-md);">
      <span class="special-case-heading" style="color: var(--color-accent);">Решение:</span> Первая в России программа профессиональной переподготовки «Заповедное дело» с дипломом государственного образца, разработку которой я возглавил по инициативе «Школы защитников природы». Моя задача заключалась в систематизации разрозненного опыта всей отрасли.
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95; margin-bottom: var(--spacing-md);">
      <strong>Шаг 1: Создание каркаса знаний.</strong> Я проанализировал практический опыт и выделил ключевые дисциплины — от биологических основ территориальной охраны природы до управления репутацией ООПТ. Получилась целостная учебная система.
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95; margin-bottom: var(--spacing-md);">
      <strong>Шаг 2: Наполнение живым опытом.</strong> В программу были приглашены более 30 ведущих практиков из лучших ООПТ и НКО страны. Они наполнили систему конкретными кейсами, решениями и «неписаными» правилами профессии.
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95;">
      <strong>Шаг 3: Передача смысла, а не только навыков.</strong> Сердцем программы стал смысловой стержень. Через парадокс «Мы охраняем природу и от людей, и для людей» удалось раскрыть слушателям глубину и сложность их миссии, превращая набор должностных инструкций в осознанную профессию.
    </p>
  </div>
</section>

<!-- 7.5.4. Итог (Результаты «После») -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <h3 style="text-align: center; color: var(--color-accent); margin-bottom: var(--spacing-md); font-size: var(--font-size-2xl);">
      Итог
    </h3>
    <p style="color: var(--color-dark-text); line-height: 1.7; margin-bottom: var(--spacing-md);">
      За два года программа выпустила свыше 120 дипломированных специалистов — в основном, действующих сотрудников ООПТ. Главным итогом стало не количество часов, а качественное изменение:
    </p>
    <ul style="color: var(--color-dark-text); line-height: 1.8; list-style: none; padding: 0;">
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Сформировано системное мышление.</strong> Слушатели получили не просто навыки, а целостное понимание своей работы через призму сохранения природы и взаимодействия с обществом.
      </li>
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Заложен новый стандарт образования.</strong> Программа доказала, что можно и нужно обучать комплексному подходу к охране природы, объединяющему экологию, управление и коммуникации.
      </li>
      <li style="padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Создано профессиональное ядро.</strong> Выпускники, разъехавшись по разным уголкам страны, теперь являются носителями единого, артикулированного подхода к сохранению природных территорий.
      </li>
    </ul>
  </div>
</section>

<!-- 7.5.5. Ценность для будущего клиента -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7; font-weight: 500; text-align: left; font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-lg);">
      Этот кейс — доказательство высшего уровня экспертизы в обучении. Если вам, будь то ВУЗ, корпоративный учебный центр или крупная территория, нужна не разовая лекция, а глубокое, системное влияние — я могу создать для вас такой же комплексный образовательный продукт. Я превращаю личный опыт и знания лучших практиков отрасли в структурированные программы, которые формируют не просто специалистов, а профессионалов с целостным видением. Это инвестиция не в отчётность, а в будущее вашей команды или проекта.
    </p>
  </div>
</section>

<!-- 8. РЕАЛИЗОВАННЫЕ ПРОЕКТЫ -->
<section class="projects-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-5-primary); color: var(--color-light-text);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-light-text); margin-bottom: var(--spacing-md);">
      Как мы создавали образовательные программы с измеримым результатом для бизнеса и госсектора
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); opacity: 0.8; margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Реальные проекты для корпоративных учебных центров и образовательных учреждений, где глубокая экспертиза в природоохранной сфере помогла решить задачи ESG-отчетности, взаимодействия с ООПТ и профессиональной подготовки. Каждая программа начиналась с понимания бизнес-целей заказчика, а не с учебного плана.
    </p>
    
    <div class="grid grid-3" style="gap: var(--spacing-md);">
      <!-- Кейс 5.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.1-800w.webp' | relative_url }}" alt="Кейс 5.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">От специалиста к лидеру: как 9-месячная программа научила сотрудников ООПТ создавать проекты на стыке экологии и социологии</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-5-1" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 5.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.2-800w.webp' | relative_url }}" alt="Кейс 5.2" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Оперативное погружение: как за 4 дня мы синхронизировали команду Росзаповедцентра</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-5-2" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 5.3 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.3-800w.webp' | relative_url }}" alt="Кейс 5.3" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Адаптация мирового опыта: международный курс для сотрудников российских ООПТ</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-5-3" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 5.4 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.4-800w.webp' | relative_url }}" alt="Кейс 5.4" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Трансформация команды: как за месяц сплотить коллектив и вернуть смысл работе</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-5-4" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 9. РЕЗУЛЬТАТЫ -->
<section class="results-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-5-primary); margin-bottom: var(--spacing-md);">
      Что получают заказчики и участники программ?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-5-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Двойной эффект: для организатора обучения и для его слушателей
    </p>
    
    <div class="results-grid">
      <!-- Для организаторов -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md);">Для организаторов (вуз, компания, ООПТ)</h3>
        <ul style="color: var(--color-dark-text); line-height: 1.5; list-style-position: outside; padding-left: 20px;">
          <li style="margin-bottom: var(--spacing-sm);"><strong>Готовая, структурированная экспертиза</strong> — Вы получаете не лектора, а полноценный, выверенный образовательный продукт, который решает ваши задачи (аккредитация, ESG-отчётность, развитие команды).</li>
          <li style="margin-bottom: var(--spacing-sm);"><strong>Повышение статуса и привлекательности</strong> — Возможность предложить аудитории (студентам, сотрудникам) уникальный контент от признанного практика, что усиливает вашу репутацию.</li>
          <li><strong>Практическая отдача</strong> — Обученные специалисты быстрее адаптируются, эффективнее работают и приносят измеримую пользу, будь то реализация проекта или снижение конфликтов.</li>
        </ul>
      </div>
      
      <!-- Для участников -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md);">Для участников (специалисты, студенты)</h3>
        <ul style="color: var(--color-dark-text); line-height: 1.5; list-style-position: outside; padding-left: 20px;">
          <li style="margin-bottom: var(--spacing-sm);"><strong>Не только навыки, но и понимание</strong> — Вы выходите за рамки операционных задач, начинаете видеть системные связи и глубокий смысл своей работы, что повышает мотивацию и карьерные перспективы.</li>
          <li style="margin-bottom: var(--spacing-sm);"><strong>Доступ к уникальному опыту и сообществу</strong> — Получаете знания, которые не найти в открытом доступе, и устанавливаете связи с ведущими экспертами и коллегами из смежных сфер.</li>
          <li><strong>Инструменты для реальных проектов</strong> — Умение разрабатывать стратегии, проводить исследования, создавать туристические концепции — то, что можно применить сразу после обучения.</li>
        </ul>
      </div>
      
      <!-- Результат 3 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary); grid-column: span 2;">
        <p style="color: var(--color-dark-text); font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-md);">
          <strong style="color: var(--color-5-primary);">Честно о главном:</strong> Моё обучение даёт две вещи: прочный фундамент и инструменты для строительства. Фундамент — это глубокое понимание смысла заповедного дела, система ценностей и профессиональное мировоззрение. Инструменты — это конкретные методики и навыки для ежедневной работы. С фундаментом вы не развалитесь под нагрузкой, а с инструментами — сможете построить что угодно.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 10. ФИНАЛЬНЫЙ ПРИЗЫВ К ДЕЙСТВИЮ -->
<section id="contact" class="contact-section" style="padding: calc(var(--spacing-xxl) * 2 / 3) 0; background-color: var(--color-5-primary); color: var(--color-light-text); text-align: center;">
  <div class="container">
    <h2 style="color: var(--color-add-acc); margin-bottom: var(--spacing-md); font-size: var(--font-size-3xl);">
      Хотите обсудить образовательный проект?
    </h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.8;">
      Опишите вашу задачу: разработка курса для вуза, модуль для корпоративного обучения, программа повышения квалификации для команды. Я изучу запрос и предложу варианты, как мой опыт и наработки могут быть трансформированы в эффективную обучающую программу для вас.
    </p>
    <a href="#consult-modal" class="btn btn-primary js-open-consult-modal" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl);">
      Записаться на консультацию
    </a>
  </div>
</section>
