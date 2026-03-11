---
layout: default
title: "Социальные решения для территорий - Михаил Яблоков"
description: "Научные методы для решения проблем, где интересы бизнеса, властей и местных жителей сталкиваются с охраной природы"
permalink: /social/
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

/* Адаптация фото-секции 1 */
@media (max-width: 850px) {
  .photo-section-1 {
    justify-content: center !important;
  }
  
  .photo-section-1-content {
    margin-right: 0 !important;
    max-width: 90% !important;
    text-align: center !important;
  }
  
  .photo-section-1 blockquote {
    text-align: left !important;
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
  <div class="hero-photo" style="background: url('{{ '/assets/images/hero/ymike.ru_2.1-1920w.webp' | relative_url }}') center center / cover no-repeat; min-height: 65vh; position: relative;">
  </div>
  
  <!-- Правая часть: Контент -->
  <div class="hero-content" style="background-color: var(--color-2-primary); color: var(--color-light-text); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: calc(var(--spacing-xxl) / 2) calc(var(--spacing-lg) * 2 / 3) 60px calc(var(--spacing-lg) * 2 / 3);">
    <h1 style="font-size: var(--font-size-4xl); margin-bottom: var(--spacing-md); line-height: 1.2;">
      Социальные проблемы на территориях: от непонимания к партнерству
    </h1>
    <p style="font-size: 22.5px; margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.6;">
      Научные методы для решения проблем, где интересы бизнеса, властей и местных жителей сталкиваются с охраной природы. Мой опыт управления ООПТ помогает находить точки роста даже в самых сложных ситуациях.
    </p>
    
    <!-- Статистика -->
    <div class="hero-stats">
      <!-- Пара 1: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">4+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">социологических<br>исследований</div>
      </div>
      
      <!-- Пара 2: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">3+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">конфликтных ситуаций<br>переведены в диалог</div>
      </div>
      
      <!-- Пара 3: цифра + текст -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">10+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">программ вовлечения<br>сообществ</div>
      </div>
    </div>
  </div>
</section>

<!-- 2. ДЛЯ КОГО? -->
<section class="audience-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-2-primary); margin-bottom: 0;">
      Для тех, кто сталкивается с социальными конфликтами на территориях и ищет научно обоснованные пути их решения
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Решаете социально-экологические конфликты и нуждаетесь в объективных данных? Проведу диагностику и создам дорожную карту перехода от кризиса к устойчивому развитию территории.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Ваша деятельность на чувствительных территориях требует социальной лицензии? Помогу наметить путь от конфликтов к партнерству через объективные исследования и вовлечение сообществ.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Конфликты с местными жителями мешают работе заповедника? Разработаю систему взаимодействия со стейкхолдерами, основанную на социологических данных, а не на интуиции.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Нужны социологические исследования для грантовых заявок при ограниченных ресурсах? Адаптирую методики сбора данных для повышения качества заявок и оценки социального воздействия.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 3. ПРОБЛЕМА / ПОЧЕМУ ЭТО ВАЖНО? -->
<section class="problems-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-2-primary); margin-bottom: var(--spacing-md);">
      Конфликт на ровном месте?<br>Это лишь верхушка айсберга
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-2-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Недовольство жителей, жалобы, непонимание — это симптомы. Бороться с симптомами бесполезно. Нужно найти и устранить причину, а для этого требуются объективные данные.
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Проекты буксуют из-за сопротивления</h3>
        <p style="color: var(--color-dark-text);">
          Любые инициативы (строительство, создание ООПТ, запуск программы) встречают необъяснимое противодействие. Переговоры заходят в тупик.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Ресурсы тратятся впустую</h3>
        <p style="color: var(--color-dark-text);">
          Вкладываетесь в развитие территории, но лояльность не растёт. Непонятно, что работает, а что нет. Нет метрик для оценки социального эффекта.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Риски для репутации и лицензии на деятельность</h3>
        <p style="color: var(--color-dark-text);">
          Конфликт выходит в публичное поле, привлекает внимание СМИ и контролирующих органов. Доверие стейкхолдеров падает.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Решения принимаются «вслепую»</h3>
        <p style="color: var(--color-dark-text);">
          Действуете на основе предположений, стереотипов или эмоций, а не на понимании реальных интересов и страхов людей.
        </p>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 900px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Хорошая новость:</strong> эти проблемы решаемы, если перейти от борьбы с симптомами к исследованию причин. Именно этим я и занимаюсь.
    </p>
  </div>
</section>

<!-- 4. ФОТО-СЕКЦИЯ 1 -->
<section class="quote-section photo-section-1" style="min-height: 75vh; display: flex; align-items: center; justify-content: flex-end; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_2.2-1400w.webp' | relative_url }}') 16% center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div class="photo-section-1-content" style="max-width: 700px; margin-right: 500px; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Почему стороны конфликта не слышат друг друга?
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-left: 4px solid var(--color-add-acc); padding-left: var(--spacing-lg); margin: 0;">
      Потому что говорят на разных языках. Это — дискоммуникация. Местные жители — о своём благополучии и традициях. Организация — о законах, технологиях и глобальных целях. Без «переводчика», который найдёт общий понятийный язык на основе фактов, диалог невозможен. Моя роль — быть таким переводчиком и мостом.
    </blockquote>
  </div>
</section>

<!-- 5. УНИКАЛЬНОСТЬ / ЧЕМ ЗАНИМАЮСЬ? -->
<section class="expertise-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-2-primary); margin-bottom: 0;">
      Почему мои социологические исследования меняют ситуацию, а не просто собирают данные?
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Практик, а не теоретик</h3>
        <p style="color: var(--color-dark-text);">
          12 лет руководил ООПТ и сам был на стороне администрации, сталкивающейся с проблемами. Понимаю логику и бизнеса, и жителей, и природоохраны.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Глубокая диагностика вместо поверхностных опросов</h3>
        <p style="color: var(--color-dark-text);">
          Как в исследовании в Териберке, я нахожу корневые причины конфликтов, а не симптомы, и показываю практические пути решения.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">От данных к конкретным действиям</h3>
        <p style="color: var(--color-dark-text);">
          Вы получаете не толстый отчет, а пошаговую дорожную карту с приоритетными мерами, и способами реализации.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Фокус на вовлечении, а не на изучении</h3>
        <p style="color: var(--color-dark-text);">
          Мои исследования сами по себе становятся инструментом диалога, как в Кыргызстане, где анонимный опрос местных жителей стал первым шагом к партнерству с ООПТ.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 6. ФОТО-СЕКЦИЯ 2 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_2.3-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Устойчивое решение рождается на стыке интересов
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      Мой главный вывод из работы в ООПТ: долгосрочный успех любого проекта на территории зависит не только от планируемых природоохранных эффектов, но и от того, насколько он учитывает интересы людей, которые на этой территории живут. Если проект направлен на благополучие людей и сохранение природы — это будет устойчивый и самоподдерживающийся проект.<br>Этот принцип универсален.
    </blockquote>
  </div>
</section>

<!-- 7. ПРОЦЕСС / КАК ЭТО РАБОТАЕТ? -->
<section class="process-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-2-primary); margin-bottom: var(--spacing-md);">
      Как устроено исследование:<br>от непонимания к плану действий
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-2-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Прозрачный процесс, который даёт результат на каждом этапе
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <!-- Этап 1 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">1</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Постановка задачи и контекстуальный анализ</h3>
          <p style="color: var(--color-dark-text);">
            Глубокое погружение: изучаем документы, историю вопроса, ваши цели. Формулируем гипотезы о причинах конфликта.
          </p>
        </div>
      </div>
      
      <!-- Этап 2 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">2</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Полевой этап: сбор данных</h3>
          <p style="color: var(--color-dark-text);">
            Выезд на территорию. Анонимные и доверительные интервью с ключевыми группами: местные жители, ваши сотрудники, представители администрации, активисты. Сбор данных там, где происходит конфликт или планируются изменения.
          </p>
        </div>
      </div>
      
      <!-- Этап 3 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">3</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Анализ и поиск «узких мест»</h3>
          <p style="color: var(--color-dark-text);">
            Обработка информации, выявление скрытых паттернов, экономических и культурных причин, разбор коммуникационных сбоев.
          </p>
        </div>
      </div>
      
      <!-- Этап 4 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">4</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Разработка рекомендаций и программы мероприятий</h3>
          <p style="color: var(--color-dark-text);">
            На основе данных создаём конкретные предложения: как изменить коммуникацию, какие пилотные проекты запустить, как выстроить диалог. Это готовый план для внедрения.
          </p>
        </div>
      </div>
      
      <!-- Этап 5 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative; grid-column: span 2;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">5</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Поддержка в запуске (опционально)</h3>
          <p style="color: var(--color-dark-text);">
            Помощь в конкретных шагах по реализации коммуникационной стратегии, фасилитация встреч со стейкхолдерами, мониторинг или корректировка плана по обратной связи.
          </p>
        </div>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 1200px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Сроки:</strong> От 2 месяцев (экспресс-диагностика) до 4-12 месяцев (комплексное исследование с сопровождением).
    </p>
  </div>
</section>

<!-- 7.5. ОСОБЫЙ КЕЙС -->
<!-- 7.5.1. Заголовок + Подзаголовок + Фото -->
<section id="kejs-2-0" style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: var(--spacing-md);">
      <!-- Текст слева -->
      <div>
        <h2 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md);">
          Исследование в Кыргызстане открыло путь к сохранению снежного барса
        </h2>
        <p style="font-size: var(--font-size-lg); color: var(--color-2-secondary); line-height: 1.6;">
          Анонимный опрос местных жителей выявил истинные причины конфликта и заложил основу для практических решений ООПТ и международного фонда.
        </p>
      </div>
      
      <!-- Фото справа -->
      <div style="margin: 0; padding: 0; height: 100%;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.0-1200w.jpg' | relative_url }}" alt="Исследование в Кыргызстане" style="width: 100%; height: 100%; border-radius: var(--radius-lg); display: block; margin: 0; object-fit: cover;">
      </div>
    </div>
  </div>
</section>

<!-- 7.5.2. Вызов (Проблема «До») -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7;">
      <span class="special-case-heading" style="color: var(--color-2-primary);">Вызов:</span> Успех проекта по внедрению современных методов охраны в двух ООПТ Кыргызстана зависел от поддержки местных сообществ. Однако у заказчика были лишь предположения об отношении жителей к территории и снежному барсу. Без объективных данных любые действия — будь то информирование или ограничения — несли высокий риск быть неэффективными или даже усугубить напряжённость.
    </p>
  </div>
</section>

<!-- 7.5.3. Решение (Процесс) - ТЕМНЫЙ БЛОК -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-2-primary); color: var(--color-light-text);">
  <div class="container">
    <p style="color: var(--color-light-text); line-height: 1.7; margin-bottom: var(--spacing-md);">
      <span class="special-case-heading" style="color: var(--color-accent);">Решение:</span> Я спроектировал и провёл анонимный опрос 90 жителей удалённых сёл, чтобы заменить субъективные представления — объективными фактами. Анализ показал ключевой инсайт: люди гордятся снежным барсом как символом своей земли, и браконьерство связано не с враждебностью, а с отсутствием альтернативных скотоводству источников дохода. При этом 87% респондентов выразили готовность сотрудничать с ООПТ и интерес к развитию туризма, но не знали, с чего начать.
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
        Заказчик (WCS/CEPF) получил не просто отчёт, а основу для управленческих решений: чёткую картину мотивов сообщества и три практических направления действий — целевая информационная работа, формирование общественной поддержки и, главное, развитие туризма как устойчивого источника дохода для местных жителей.
      </li>
    </ul>
  </div>
</section>

<!-- 7.5.5. Ценность для будущего клиента -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7; font-weight: 500; text-align: left; font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-lg);">
      Этот кейс показывает, как объективные данные помогают находить точки роста даже в сложных социально-экологических ситуациях. Моя двойная экспертиза — практический опыт управления ООПТ и навыки социологического анализа — позволяет не просто собрать информацию, а сразу перевести её в конкретные шаги. Если ваша деятельность — будь то охрана природы, добыча ресурсов или природопользование — зависит от отношения местного сообщества, такой подход даст вам ясность и научную основу для принятия решений.
    </p>
  </div>
</section>

<!-- 8. РЕАЛИЗОВАННЫЕ ПРОЕКТЫ -->
<section class="projects-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-2-primary); color: var(--color-light-text);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-light-text); margin-bottom: var(--spacing-md);">
      Как я находил точки роста<br>в сложных социально-экологических конфликтах
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); opacity: 0.8; margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Реальные проекты для бизнеса, региональных властей и ООПТ, где научные методы помогли преодолеть противостояние и создать устойчивое развитие территорий. Каждый кейс начинался с объективной диагностики вместо эмоциональных решений.
    </p>
    
    <div class="grid grid-3" style="gap: var(--spacing-md);">
      <!-- Кейс 2.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.1-800w.webp' | relative_url }}" alt="Кейс 2.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Диагностика кризиса: социологическое исследование туристического бума в Териберке</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-2-1" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 2.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.2-800w.webp' | relative_url }}" alt="Лосиный остров" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Лосиный остров: как изменить имидж и наладить управление для ООПТ в мегаполисе</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-2-2" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 2.3 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.3-800w.webp' | relative_url }}" alt="Кейс 2.3" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Как измерить результат поездки в заповедник: одно из первых в России исследование природоохранного эффекта от посещения ООПТ</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-2-3" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 5.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.1-800w.webp' | relative_url }}" alt="Кейс 5.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">От специалиста к лидеру: как 9-месячная программа научила сотрудников ООПТ создавать проекты на стыке экологии и социологии</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-5-1" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
      
      <!-- Кейс 5.3 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.3-800w.webp' | relative_url }}" alt="Кейс 5.3" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Адаптация мирового опыта: международный курс для сотрудников российских ООПТ</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-5-3" class="btn btn-secondary">Читать кейс</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 9. РЕЗУЛЬТАТЫ -->
<section class="results-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-2-primary); margin-bottom: var(--spacing-md);">
      Что вы получите в итоге сотрудничества?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-2-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Конкретные инструменты и ясность вместо неопределённости и конфликта
    </p>
    
    <div class="results-grid">
      <!-- Результат 1 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md);">Объективный диагноз ситуации</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Вы получите не мнение, а структурированный анализ на основе данных: что на самом деле думают люди, каковы скрытые причины напряжённости, где находятся точки роста для диалога.
        </p>
      </div>
      
      <!-- Результат 2 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md);">Всё о коммуникации сторон</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          От выбора канала до доверительных источников. Это гарантия, что вы, наконец, услышите друг друга.
        </p>
      </div>
      
      <!-- Результат 3 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md);">Программа мероприятий или дорожная карта</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Конкретный, пошаговый план, как двигаться дальше: что изменить в коммуникации, какие проекты-«маяки» запустить в первую очередь, как выстроить регулярный диалог со стейкхолдерами.
        </p>
      </div>
      
      <!-- Результат 4 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md);">Снижение уровня неопределённости и рисков</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Вы будете понимать логику происходящего и получите инструменты для управления ситуацией. Это снижает репутационные и операционные риски, особенно для бизнеса.
        </p>
      </div>
      
      <!-- Результат 5 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary); grid-column: span 2;">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md);">Основа для долгосрочной стратегии взаимодействия</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Итоги исследования станут фундаментом для построения устойчивых отношений с местным сообществом, что критически важно для долгосрочной работы на территории.
        </p>
        
        <p style="color: var(--color-dark-text); margin-top: var(--spacing-md); font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-md);">
          <strong style="color: var(--color-2-primary);">Честно о главном:</strong> Социологическое исследование не решает конфликт волшебным образом. Оно даёт карту и компас — понимание ситуации и направление движения. Реальные изменения наступают, когда вы начинаете применять рекомендации на практике. Моя задача — сделать эту карту максимально точной, а компас — надёжным.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 10. ФИНАЛЬНЫЙ ПРИЗЫВ К ДЕЙСТВИЮ -->
<section id="contact" class="contact-section" style="padding: calc(var(--spacing-xxl) * 2 / 3) 0; background-color: var(--color-2-primary); color: var(--color-light-text); text-align: center;">
  <div class="container">
    <h2 style="color: var(--color-add-acc); margin-bottom: var(--spacing-md); font-size: var(--font-size-3xl);">
      Есть сложности во взаимоотношениях<br>с местным сообществом?
    </h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.8;">
      Расскажите о вашей ситуации. Посмотрим, как мой опыт решения подобных проблем в ООПТ<br>может быть полезен для вашей организации или проекта.
    </p>
    <a href="#consult-modal" class="btn btn-primary js-open-consult-modal" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl);">
      Записаться на консультацию
    </a>
  </div>
</section>
