---
layout: home
title: "Mikhail Yablokov - Expert in Territorial Nature Conservation"
description: "Turning Conflicts into Partnerships, Strategies into Working Tools"
permalink: /en/
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
      Advancing Natural Territories and Teams
    </h1>
    <p style="font-size: var(--font-size-xl); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.6;">
      I help businesses, regions, and protected areas find balance between nature conservation, economics, and people's interests. PhD in Biology, 12 years managing nature reserves and parks.
    </p>
    <a href="#contact" class="btn btn-primary" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-lg);">
      Discuss Your Case
    </a>
  </div>
</section>

<!-- 2. МОЯ ЭКСПЕРТИЗА -->
<section class="expertise-section" style="padding: var(--spacing-xxl) 0 calc(var(--spacing-xxl) / 2) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-m-primary); margin-bottom: 20px;">
      Why My Solutions Work Where Others See a Dead End?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-m-secondary); margin-bottom: 30px; max-width: 900px; margin-left: auto; margin-right: auto;">
      For 12 years I led federal protected areas, and for the last 7 years I've been helping organizations as an external expert. My strength lies in being a "translator" between the worlds of nature conservation and business.
    </p>
    
    <div class="expertise-grid" style="margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Experience "From Inside the System"</h3>
        <p style="color: var(--color-dark-text);">I know the budgetary and bureaucratic realities of federal institutions and government agencies from the inside. This allows me to create implementable strategies.</p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Understanding Business Logic</h3>
        <p style="color: var(--color-dark-text);">I adapt international ESG and sustainable development methodologies to Russian conditions and commercial tasks.</p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Practitioner, Not Theorist</h3>
        <p style="color: var(--color-dark-text);">All tools are field-tested — from Teriberka to Kamchatka. I deliver not a report, but a roadmap.</p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">I Work With Your Team, Not Instead of It</h3>
        <p style="color: var(--color-dark-text);">I involve your team in the process so the solution becomes yours and support is universal.</p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary); grid-column: 1 / -1;">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Recognition in the Professional Community:</h3>
        <ul style="color: var(--color-dark-text); line-height: 1.5; list-style-position: outside; padding-left: 20px; margin-bottom: var(--spacing-md);">
          <li style="margin-bottom: var(--spacing-xs);">Russia Focal Point at IUCN World Commission on Protected Areas (WCPA)</li>
          <li style="margin-bottom: var(--spacing-xs);">Member of the Expert Council on Protected Area Management</li>
          <li style="margin-bottom: var(--spacing-xs);">Board Member of the "Association of Protected Area Employees"</li>
          <li>Coordinator of the Association of Nature Reserves and Parks of the North-West Region</li>
        </ul>
        <div style="text-align: right;">
          <a href="{{ '/pdfs/enYablokovCV.pdf' | relative_url }}" target="_blank" class="btn btn-secondary" style="display: inline-block;">
            Download My CV (PDF)
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
      Recognize the Challenges Slowing Down Your Territory or Project Development?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-m-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      These problems are universal — from corporate ESG departments to regional administrations. Good news: all of them are solvable.
    </p>
    
    <div class="problems-grid">
      <!-- Карточка 1: Стратегия -->
      <div class="problem-card-1" style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Strategies Stay on Paper</h3>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Problem:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Strategies stay on paper, teams are disconnected, resources are scattered.</p>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Consequence:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Impossible to prove effectiveness to investors or report on ESG contribution.</p>
        <p style="color: var(--color-accent); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>My Solution:</strong></p>
        <p style="color: var(--color-dark-text);">I turn your team into co-authors of a working strategy that stops being a formal document.</p>
      </div>
      
      <!-- Карточка 2: Цифровизация -->
      <div class="problem-card-2" style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Data in Chaos</h3>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Problem:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Data is in chaos, employees fear technology, reporting takes weeks.</p>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Consequence:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Decisions are made blindly, work effectiveness cannot be evaluated.</p>
        <p style="color: var(--color-accent); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>My Solution:</strong></p>
        <p style="color: var(--color-dark-text);">I implement and adapt digital tools for data collection, monitoring, and analytics to your tasks.</p>
      </div>
      
      <!-- Карточка 3: Туризм -->
      <div class="problem-card-3" style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Unclear How to Develop Tourism</h3>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Problem:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Unclear how to develop tourism without harming nature or causing conflicts.</p>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Consequence:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Risk of "overtourism", image losses, missed economic benefits.</p>
        <p style="color: var(--color-accent); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>My Solution:</strong></p>
        <p style="color: var(--color-dark-text);">I develop concepts where tourism becomes a tool for nature conservation and territory development.</p>
      </div>
      
      <!-- Карточка 4: Взаимодействие с сообществом -->
      <div class="problem-card-4" style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Misunderstanding Local Residents' Sentiments</h3>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Problem:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Misunderstanding real sentiments and interests of people in the territory leads to risks and project resistance.</p>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Consequence:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Reputation losses, deadline failures, loss of "social license" to operate.</p>
        <p style="color: var(--color-accent); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>My Solution:</strong></p>
        <p style="color: var(--color-dark-text);">I conduct sociological diagnostics and create an interaction system based on data, turning risks into partnerships.</p>
      </div>
      
      <!-- Карточка 5: Обучение -->
      <div class="problem-card-last" style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-m-secondary);">
        <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">No Practical Training</h3>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Problem:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">No quality practical training at the intersection of ecology, management, and communications for working with territories.</p>
        <p style="color: var(--color-dark-text); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>Consequence:</strong></p>
        <p style="color: var(--color-dark-text); margin-bottom: var(--spacing-sm);">Employees or students are not ready for real tasks, projects fail, ESG reporting becomes a formality.</p>
        <p style="color: var(--color-accent); font-weight: 600; margin-bottom: var(--spacing-xs);"><strong>My Solution:</strong></p>
        <p style="color: var(--color-dark-text);">I create and conduct practice-oriented programs that form a holistic professional worldview, not fragmented knowledge.</p>
      </div>
    </div>
  </div>
</section>

<!-- 4. ЭМОЦИОНАЛЬНАЯ ПЕРЕБИВКА -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: flex-end; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_0.2-1600w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 10%; text-align: left;">
    <blockquote style="font-size: var(--font-size-2xl); line-height: 1.6; font-style: italic; border-left: 4px solid var(--color-add-acc); padding-left: var(--spacing-lg); margin: 0;">
      My task is not just to preserve a piece of wilderness. My task is to help people and organizations build relationships with this territory where it preserves itself through understanding, participation, and mutual benefit. This is true sustainable development.
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
    <h2 class="text-center" style="margin-bottom: 20px; color: var(--color-m-primary);">In What Formats Do I Work With These Problems?</h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-m-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Choose the Direction That Matches Your Current Task.
    </p>
    
    <div class="directions-grid">
      <div style="background: var(--color-background); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; min-width: 0; overflow: hidden;">
        <img src="{{ '/assets/images/cards/ymike.ru_0.3.1-600w.webp' | relative_url }}" alt="Sustainability Strategies" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); font-size: 32px;">Sustainability Strategies</h3>
          <p style="margin: var(--spacing-sm) 0; flex-grow: 1;">Facilitation and Creation of Working Strategies for Protected Areas and Business</p>
          <a href="{{ '/en/strategic/' | relative_url }}" class="btn btn-primary" style="margin-top: var(--spacing-sm);">Learn More</a>
        </div>
      </div>
      
      <div style="background: var(--color-background); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; min-width: 0; overflow: hidden;">
        <img src="{{ '/assets/images/cards/ymike.ru_0.3.2-600w.webp' | relative_url }}" alt="Social Solutions" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); font-size: 32px;">Social Solutions</h3>
          <p style="margin: var(--spacing-sm) 0; flex-grow: 1;">Sociological Research and Partnership with Communities</p>
          <a href="{{ '/en/social/' | relative_url }}" class="btn btn-primary" style="margin-top: var(--spacing-sm);">Learn More</a>
        </div>
      </div>
      
      <div style="background: var(--color-background); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; min-width: 0; overflow: hidden;">
        <img src="{{ '/assets/images/cards/ymike.ru_0.3.3-600w.webp' | relative_url }}" alt="Nature Tourism" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); font-size: 32px;">Nature Tourism</h3>
          <p style="margin: var(--spacing-sm) 0; flex-grow: 1;">Concepts for Visitor Centers and Tourism Products for Natural Territories</p>
          <a href="{{ '/en/tourism/' | relative_url }}" class="btn btn-primary" style="margin-top: var(--spacing-sm);">Learn More</a>
        </div>
      </div>
      
      <div style="background: var(--color-background); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; min-width: 0; overflow: hidden;">
        <img src="{{ '/assets/images/cards/ymike.ru_0.3.4-480w.webp' | relative_url }}" alt="Digital Solutions" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); font-size: 32px;">Digital Solutions</h3>
          <p style="margin: var(--spacing-sm) 0; flex-grow: 1;">Digitalization of Monitoring and Territory Management</p>
          <a href="{{ '/en/digital/' | relative_url }}" class="btn btn-primary" style="margin-top: var(--spacing-sm);">Learn More</a>
        </div>
      </div>
      
      <div style="background: var(--color-background); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; min-width: 0; overflow: hidden;">
        <img src="{{ '/assets/images/cards/ymike.ru_0.3.5-600w.webp' | relative_url }}" alt="Team Development" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); font-size: 32px;">Team Development</h3>
          <p style="margin: var(--spacing-sm) 0; flex-grow: 1;">Practical Programs on ESG and Protected Area Management</p>
          <a href="{{ '/en/education/' | relative_url }}" class="btn btn-primary" style="margin-top: var(--spacing-sm);">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 6. РЕАЛИЗОВАННЫЕ ПРОЕКТЫ -->
<section class="projects-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-m-primary); color: var(--color-light-text);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-light-text); margin-bottom: 20px;">
      Real Examples of How It Works
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); opacity: 0.8; margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Each project started with a specific challenge. Here's how we found the solution.
    </p>
    
    <div class="grid grid-3" style="gap: var(--spacing-md);">
      <!-- Case 1: Strategy -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_1.0-800w.webp' | relative_url }}" alt="Transforming the team of Protected Areas Directorate" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Experience Transforming the Team of St. Petersburg Protected Areas Directorate</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/strategic/#kejs-1-0' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 2: Social Solutions -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.0-800w.webp' | relative_url }}" alt="Research in Kyrgyzstan" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Research in Kyrgyzstan Opened the Path to Snow Leopard Conservation</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/social/#kejs-2-0' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 3: Tourism -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_3.0-800w.webp' | relative_url }}" alt="Semibratka Visitor Center" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">How "Semibratka" in Taganai Became a Model of Sustainable Tourism</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/tourism/#kejs-3-0' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 4: Digitalization -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_4.0-800w.webp' | relative_url }}" alt="SMART System" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">SMART: How a Ready-Made IT Solution Turned Data Chaos into a Management Tool</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/digital/#kejs-4-0' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 5: Education -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.0-800w.webp' | relative_url }}" alt="Diploma in Protected Area Management" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">First Diploma in Protected Area Management: How We Created a Knowledge System for the Entire Industry</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/education/#kejs-5-0' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 2.2: Social Solutions -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.2-800w.webp' | relative_url }}" alt="Losiny Ostrov" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Losiny Ostrov: How to Change Image and Establish Management for a Protected Area in a Megacity</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-2-2" class="btn btn-secondary">Read Case</a>
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
      Trusted By
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
      From Diagnostics to Result: A Transparent and Engaging Process
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-m-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Flexible scheme that adapts to your request — from a one-time session to year-long support.
    </p>
    
    <div class="process-grid-main">
      <!-- Stage 1 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">1</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">In-depth Diagnostics</h3>
          <p style="color: var(--color-dark-text);">I study the context, your goals, resources, and limitations. We formulate measurable success criteria.</p>
        </div>
      </div>
      
      <!-- Stage 2 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">2</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Collaborative Development</h3>
          <p style="color: var(--color-dark-text);">I conduct strategic sessions or research with key stakeholders involved. Solutions are born in dialogue.</p>
        </div>
      </div>
      
      <!-- Stage 3 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">3</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Concrete Plan</h3>
          <p style="color: var(--color-dark-text);">I deliver the result in a convenient form: roadmap, concept, action program, configured system.</p>
        </div>
      </div>
      
      <!-- Stage 4 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">4</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-m-primary); margin-bottom: var(--spacing-sm);">Implementation Support</h3>
          <p style="color: var(--color-dark-text);">If needed, I help launch the solution: train the team, consult, adjust based on feedback.</p>
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
      Ready to Discuss How This Approach Can Solve Your Task?
    </h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.8;">
      Book an online consultation. I will analyze your situation and suggest options and a preliminary work plan. This is a conversation between experts that obligates you to nothing.
    </p>
    <div style="display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap;">
      <a href="#consult-modal" class="btn btn-primary js-open-consult-modal" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl);">
        Book a Consultation
      </a>
      <a href="{{ '/pdfs/enYablokovCV.pdf' | relative_url }}" target="_blank" class="btn btn-secondary btn-cv-hover" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl); background: transparent; border: 2px solid var(--color-light-text); color: var(--color-light-text);">
        Download CV<br>for a Joint Project
      </a>
    </div>
  </div>
</section>
