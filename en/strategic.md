---
layout: default
title: "Sustainability Strategies - Mikhail Yablokov"
description: "I help businesses and regions create working strategies for the development of natural territories"
permalink: /en/strategic/
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
  <div class="hero-photo" style="background: url('{{ '/assets/images/hero/ymike.ru_1.1-1920w.webp' | relative_url }}') left center / cover no-repeat; min-height: 65vh; position: relative;">
  </div>
  
  <!-- Правая часть: Контент -->
  <div class="hero-content" style="background-color: var(--color-1-primary); color: var(--color-light-text); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: calc(var(--spacing-xxl) / 2) calc(var(--spacing-lg) * 2 / 3) 60px calc(var(--spacing-lg) * 2 / 3);">
    <h1 style="font-size: var(--font-size-4xl); margin-bottom: var(--spacing-md); line-height: 1.2;">
      Strategies That Work: From Conflict of Interests to Measurable Results
    </h1>
    <p style="font-size: 22.5px; margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.6;">
      I help businesses and regions create working strategies for natural territories that truly impact ESG metrics and gain support from all stakeholders. My approach engages your team and finds solutions where others see a dead end.
    </p>
    
    <!-- Statistics -->
    <div class="hero-stats">
      <!-- Pair 1: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">40+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">strategic<br>sessions</div>
      </div>
      
      <!-- Pair 2: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">12</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">years "from inside<br>the system"</div>
      </div>
      
      <!-- Pair 3: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">since 2017</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">adapting methodologies<br>to Russian realities</div>
      </div>
    </div>
  </div>
</section>

<!-- 2. FOR WHOM? -->
<section class="audience-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-1-primary); margin-bottom: 0;">
      For Those Who Want to Turn Strategy into a Tool for Real Decisions, Not a Reporting Formality
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Need a strategy for achievements and risk reduction? I'll help create a strategy with team involvement and support from all key groups for ESG effectiveness.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Managing natural territories and facing conflict of interests? I'll help find balance between nature conservation and your territory's development.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Does your organization work with territories? I'll help consolidate scattered initiatives into a unified strategy to boost project effectiveness and donor trust.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Do your strategies stay "on paper" while your team is disconnected? I'll involve employees in planning so the strategy becomes a guide to action in daily work.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 3. THE PROBLEM / WHY IT MATTERS -->
<section class="problems-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-1-primary); margin-bottom: var(--spacing-md);">
      Recognize These Challenges in Working with Natural Territories?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-1-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      The management problems I work with are universal — from regional departments to corporate ESG units.
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Plans Exist, But Nothing Changes</h3>
        <p style="color: var(--color-dark-text);">
          Documents gather dust on shelves while the team "puts out" the same "fires" every year. There's no connection between strategy and operational tasks.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Conflict of Interests</h3>
        <p style="color: var(--color-dark-text);">
          Environmentalists, business, local residents, and authorities can't find common ground. Projects stall or face resistance.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Impossible to Prove Effectiveness</h3>
        <p style="color: var(--color-dark-text);">
          It's hard to report to management, the board, or shareholders about your contribution to territory development or ESG. There are no clear metrics.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Resources Are Scattered</h3>
        <p style="color: var(--color-dark-text);">
          No clear priorities. Money and time go to immediate tasks, not systemic development.
        </p>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 900px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Good news:</strong> these problems are solvable. The methods I used to transform federal protected areas work equally well for businesses with ESG agendas and regional administrations.
    </p>
  </div>
</section>

<!-- 4. PHOTO SECTION 1 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_1.2-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      "At first, strategy seems like an extra burden, a waste of time..."
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      ...But then the team discovers it's a tool that saves time and resources. I've seen how this "revelation" transforms the work of dozens of teams — from government agencies to NGOs.
    </blockquote>
  </div>
</section>

<!-- 5. UNIQUENESS / WHAT I DO? -->
<section class="expertise-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-1-primary); margin-bottom: 0;">
      Why Don't My Strategies Stay on Paper?
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Government Expert Who Understands Business Realities</h3>
        <p style="color: var(--color-dark-text);">
          For 12 years I led federal institutions under tight budget constraints. I know how to create strategies that get approved and funded.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Practical Methodologies Instead of Theory</h3>
        <p style="color: var(--color-dark-text);">
          My tools are field-tested — in real situations, we've built actionable strategies in just one month.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Facilitation, Not Imposition</h3>
        <p style="color: var(--color-dark-text);">
          I create a process where your team finds solutions themselves and takes ownership of implementation. This ensures strategy support at all levels.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Speaking the Language of All Stakeholders</h3>
        <p style="color: var(--color-dark-text);">
          I know how to find common ground between environmental, economic, and social interests.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 6. PHOTO SECTION 2 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_1.3-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      The outcome is not a document, but the team's ability to act in coordination
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      A successful strategy is not a PDF file. It's a shared understanding within the team of where we're going and why. It's each individual's personal contribution to that direction. It's a tool that helps make consistent decisions every day. This is exactly the kind of transformation I've created in dozens of projects.
    </blockquote>
  </div>
</section>

<!-- 7. PROCESS / HOW IT WORKS? -->
<section class="process-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-1-primary); margin-bottom: var(--spacing-md);">
      How the Work Is Structured: From Diagnostics to Implementation
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-1-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      A flexible, transparent process that adapts to your tasks and capabilities
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <!-- Stage 1 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">1</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Diagnostics and Context Analysis</h3>
          <p style="color: var(--color-dark-text);">
            I study your situation, resources, and constraints, and we formulate measurable goals that will be a real win for your organization.
          </p>
        </div>
      </div>
      
      <!-- Stage 2 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">2</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Defining the Format and Engaging Stakeholders</h3>
          <p style="color: var(--color-dark-text);">
            We choose the optimal work format (strategic session, series of meetings, intensive) and identify key participants.
          </p>
        </div>
      </div>
      
      <!-- Stage 3 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">3</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Collaborative Development</h3>
          <p style="color: var(--color-dark-text);">
            In sessions with your team, we define strategic vision, values, priorities, and concrete steps with responsible parties and deadlines.
          </p>
        </div>
      </div>
      
      <!-- Stage 4 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">4</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Formalization and Adaptation</h3>
          <p style="color: var(--color-dark-text);">
            We turn session decisions into clear tools: a roadmap, KPI or OKR system, aligned with your reporting requirements.
          </p>
        </div>
      </div>
      
      <!-- Stage 5 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">5</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Implementation Support</h3>
          <p style="color: var(--color-dark-text);">
            If needed, I help launch the strategy: adapt meeting formats, configure control systems, conduct training for teams and leaders.
          </p>
        </div>
      </div>
      
      <!-- Stage 6 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">6</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-sm);">Feedback and Adjustment</h3>
          <p style="color: var(--color-dark-text);">
            After an agreed period (quarter, year), we analyze results and adjust the strategy, making it a living management tool.
          </p>
        </div>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 1200px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Format and Timing:</strong> I work in-person and online. Duration — from a 2-day session to year-long support. Flexible schedule adapted to your workload and budget.
    </p>
  </div>
</section>

<!-- 7.5. SPECIAL CASE -->
<!-- 7.5.1. Title + Subtitle + Photo -->
<section id="kejs-1-0" style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <div class="special-case-intro">
      <!-- Text on the left -->
      <div>
        <h2 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md);">
          Experience Transforming the Team of St. Petersburg Protected Areas Directorate
        </h2>
        <p style="font-size: var(--font-size-lg); color: var(--color-1-secondary); line-height: 1.6;">
          How to align nature conservation and development in one month — and turn strategy from a formal document into a tool for daily decisions.
        </p>
      </div>
      
      <!-- Photo on the right -->
      <div style="margin: 0; padding: 0; height: 100%;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_1.0-1200w.jpg' | relative_url }}" alt="Team of St. Petersburg Protected Areas Directorate" style="width: 100%; height: 100%; border-radius: var(--radius-lg); display: block; margin: 0; object-fit: cover;">
      </div>
    </div>
  </div>
</section>

<!-- 7.5.2. Challenge (Problem "Before") -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7;">
      <span class="special-case-heading" style="color: var(--color-1-primary);">Challenge:</span> The St. Petersburg Protected Areas Directorate is a progressive state institution with a young team formed after restructuring. All employees are strong specialists, but each worked in their own direction. Contradictions between nature conservation and tourism development tasks were subjects of discussion and even disputes.
    </p>
  </div>
</section>

<!-- 7.5.3. Solution (Process) - DARK BLOCK -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-1-primary); color: var(--color-light-text);">
  <div class="container">
    <p style="color: var(--color-light-text); line-height: 1.7; margin-bottom: var(--spacing-md);">
      <span class="special-case-heading" style="color: var(--color-accent);">Solution:</span> I developed and conducted an intensive month-long program, including two weeks of preparation and two trips to St. Petersburg. My task was not to provide ready-made answers, but to organize a process where the team itself reached consensus decisions.
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95;">
      Day one was dedicated to dialogue seminars in language accessible to participants, helping overcome initial skepticism. On day two, during trainings, the team formulated shared values and mission by answering tough questions rather than receiving them from outside — my role was limited to listening, structuring, and guiding the discussion. On day three, a strategic session was held where the team defined priority development directions based on the formed vision and awareness of key problems. On day four, riding a wave of trust and clarity, the team jointly defined strategic tasks for the year considering real resources, deadlines, and responsible parties. Everyone understands their contribution and how it connects to the overall goal.
    </p>
  </div>
</section>

<!-- 7.5.4. Outcome (Results "After") -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <h3 style="text-align: center; color: var(--color-accent); margin-bottom: var(--spacing-md); font-size: var(--font-size-2xl);">
      Outcome
    </h3>
    <ul style="color: var(--color-dark-text); line-height: 1.8; list-style: none; padding: 0;">
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        A team emerged with formulated values, shared vision, and common language.
      </li>
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        The team found balance between nature conservation and territory use.
      </li>
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        Motivation increased and burnout risks decreased thanks to understanding personal contribution and goal clarity.
      </li>
      <li style="padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        Strategy and plan stopped being "paper" and became a guide to action for daily decisions.
      </li>
    </ul>
  </div>
</section>

<!-- 7.5.5. Value for Future Clients -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7; font-weight: 500; text-align: left; font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-lg);">
      This case proves the universal algorithm. It works both for creating a new direction from scratch and for launching a "stalled" project. My facilitation is a shortcut to success: I help your team quickly overcome disconnection and develop their own, universally supported solutions that will actually be implemented.
    </p>
  </div>
</section>

<!-- 8. IMPLEMENTED PROJECTS -->
<section class="projects-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-1-primary); color: var(--color-light-text);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-light-text); margin-bottom: var(--spacing-md);">
      Strategies That Change Reality: Projects with Business and Regions
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); opacity: 0.8; margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Real strategies for organizations where environmental, business, and local community interests collided. Each case is an example of overcoming disconnection by involving all stakeholders in the planning process.
    </p>
    
    <div class="grid grid-3" style="gap: var(--spacing-md);">
      <!-- Case 1.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_1.1-800w.webp' | relative_url }}" alt="Case 1.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Ministry of Natural Resources and Protected Areas: Common Ground Found</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-1-1" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 1.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_1.2-800w.webp' | relative_url }}" alt="Case 1.2" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Three Years of Support: How Shorsky National Park Moves Toward Its Goal Despite Constraints</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-1-2" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 1.3 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_1.3-800w.webp' | relative_url }}" alt="Case 1.3" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">ANO "OSDJ": How to Align Opposing Views on an NGO's Future</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-1-3" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 2.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.2-800w.webp' | relative_url }}" alt="Losiny Ostrov" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Losiny Ostrov: How to Change Image and Establish Management for a Protected Area in a Megacity</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-2-2" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 3.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_3.2-800w.webp' | relative_url }}" alt="Case 3.2" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Pasvik Reserve Visitor Center: ESG Partnership That Changes Attitudes Toward Nature</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-3-2" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 5.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.2-800w.webp' | relative_url }}" alt="Case 5.2" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Rapid Immersion: How We Synchronized the Roszapovedcenter Team in 4 Days</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="#kejs-5-2" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 9. RESULTS -->
<section class="results-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-1-primary); margin-bottom: var(--spacing-md);">
      What Qualitative Changes Does Strategic Planning Work Bring?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-1-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Benefits my clients receive — from regional administrations to corporate departments
    </p>
    
    <div class="grid grid-2" style="column-gap: var(--spacing-md); row-gap: var(--spacing-md);">
      <!-- Before -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
        <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md); text-align: center;">Typical Situation "Before"</h3>
        <ul style="color: var(--color-dark-text); line-height: 1.5; list-style-position: outside; padding-left: 20px;">
          <li style="margin-bottom: var(--spacing-sm);">Priorities are contradictory, resources are scattered</li>
          <li style="margin-bottom: var(--spacing-sm);">Team is disconnected, works at cross-purposes, energy is lost to internal friction</li>
          <li style="margin-bottom: var(--spacing-sm);">Management is reactive, "firefighting" mode, no time for development</li>
          <li>Results are vague, impossible not only to report but even to understand what was achieved</li>
        </ul>
      </div>
      
      <!-- After -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border: 2px solid var(--color-accent);">
        <h3 style="color: var(--color-accent); margin-bottom: var(--spacing-md); text-align: center;">Situation "After" Approach Implementation</h3>
        <ul style="color: var(--color-dark-text); line-height: 1.5; list-style-position: outside; padding-left: 20px;">
          <li style="margin-bottom: var(--spacing-sm);">Priorities are clear and aligned at all levels. Resources focus on what matters</li>
          <li style="margin-bottom: var(--spacing-sm);">Team understands the common goal and their role in achieving it. "Wars" between departments disappear</li>
          <li style="margin-bottom: var(--spacing-sm);">Management becomes proactive. Time and a plan appear for development, not just "firefighting"</li>
          <li>Results become measurable. A clear picture emerges for reports to higher authorities, boards, or donors</li>
        </ul>
      </div>
    </div>
    
    <div style="margin-top: var(--spacing-xl); background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-1-secondary);">
      <h3 style="color: var(--color-1-primary); margin-bottom: var(--spacing-md);">Why This Works in Practice (from my experience):</h3>
      <ul style="color: var(--color-dark-text); line-height: 1.5; list-style-position: outside; padding-left: 20px;">
        <li style="margin-bottom: var(--spacing-sm);"><strong style="color: var(--color-accent);">Approval timelines shorten</strong> — when all stakeholders participate in creating the plan, sabotage at the implementation stage disappears</li>
        <li style="margin-bottom: var(--spacing-sm);"><strong style="color: var(--color-accent);">Team engagement increases</strong> — people support what they created themselves, not a document imposed from above</li>
        <li><strong style="color: var(--color-accent);">Development sustainability emerges</strong> — strategy becomes not a one-time event but a cyclical process adapting to changes</li>
      </ul>
      
        <p style="color: var(--color-dark-text); margin-top: var(--spacing-md); font-style: italic; border-left: 4px solid var(--color-1-secondary); padding-left: var(--spacing-md);">
        <strong style="color: var(--color-1-primary);">Honestly about the main thing:</strong> I'm not a magician: strategy works only if the team applies it and leadership is committed to change. I give you tools and algorithms that work. My task is to make this start as easy as possible and support you in the early stages.
      </p>
    </div>
  </div>
</section>

<!-- 10. FINAL CALL TO ACTION -->
<section id="contact" class="contact-section" style="padding: calc(var(--spacing-xxl) * 2 / 3) 0; background-color: var(--color-1-primary); color: var(--color-light-text); text-align: center;">
  <div class="container">
    <h2 style="color: var(--color-add-acc); margin-bottom: var(--spacing-md); font-size: var(--font-size-3xl);">
      Ready for a Strategy That Works, Not One That Gathers Dust on a Shelf?
    </h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.8;">
      Book a consultation. Together we'll analyze your situation and develop a plan for the first steps toward creating a strategy that your entire team will support. You'll receive specific recommendations and clarity on timelines, budget, and expected results. The consultation obligates you to nothing but may be the first step toward management without "firefighting".
    </p>
    <a href="#consult-modal" class="btn btn-primary js-open-consult-modal" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl);">
      Book a Consultation
    </a>
  </div>
</section>

<!-- МОДАЛЬНЫЕ ОКНА ДЛЯ КЕЙСОВ -->
<!-- Будут добавлены позже -->
