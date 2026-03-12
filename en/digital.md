---
layout: default
title: "Digital Solutions for Territories - Mikhail Yablokov"
description: "I implement digital solutions that truly solve your operational tasks: from field data collection to analytics for reporting"
permalink: /en/digital/
---

<style>
/* Hero stats - pairs always together */
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

/* Hero section adaptation */
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

/* Section 7 (Process) adaptation */
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

/* Special Case Intro adaptation */
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

/* Special Case heading adaptation */
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

/* Section 9 (Results) adaptation */
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

<!-- 1. HERO SECTION -->
<section class="hero-section" style="min-height: 65vh; display: grid; grid-template-columns: 1fr 1fr; position: relative;">
  <!-- Left part: Photo -->
  <div class="hero-photo" style="background: url('{{ '/assets/images/hero/ymike.ru_4.1-1920w.webp' | relative_url }}') center center / cover no-repeat; min-height: 65vh; position: relative;">
  </div>
  
  <!-- Right part: Content -->
  <div class="hero-content" style="background-color: var(--color-4-primary); color: var(--color-light-text); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: calc(var(--spacing-xxl) / 2) calc(var(--spacing-lg) * 2 / 3) 60px calc(var(--spacing-lg) * 2 / 3);">
    <h1 style="font-size: var(--font-size-4xl); margin-bottom: var(--spacing-md); line-height: 1.2;">
      Digitalization for Natural Territories: When Technology Works for Results
    </h1>
    <p style="font-size: 22.5px; margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.6;">
      I implement digital solutions that truly solve your operational tasks: from field data collection to analytics for reporting. I adapt technologies to your work specifics.
    </p>
    
    <!-- Statistics -->
    <div class="hero-stats">
      <!-- Pair 1: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">6</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">SMART system<br>implementations</div>
      </div>
      
      <!-- Pair 2: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">15-20x</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">reporting time<br>reduction</div>
      </div>
      
      <!-- Pair 3: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">95%</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">executive satisfaction<br>rate</div>
      </div>
    </div>
  </div>
</section>

<!-- 2. FOR WHOM? -->
<section class="audience-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-4-primary); margin-bottom: 0;">
      For Those Seeking Practical Digital Solutions That Work in Real Russian Conditions with Limited Resources
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Employees fear technology, processes are on paper? I'll implement and adapt digital management systems to your tasks, reducing reporting time multiple times.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Need environmental monitoring or land use analysis? I'll create specialized digital solutions based on satellite data and GIS.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Need digitalization but no IT specialists or budget? I'll configure SMART and GIS systems for your tasks and train your team to work with them effectively.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Need affordable monitoring tools with limited budget? I'll develop simple mobile apps or adapt existing solutions for your tasks.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 3. THE PROBLEM / WHY IT MATTERS -->
<section class="problems-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-4-primary); margin-bottom: var(--spacing-md);">
      Why Does Digitalization for Natural Territories So Often Fail?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-4-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Typical problems both government agencies and business face when implementing IT solutions.
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Data in Chaos, Decisions on Intuition</h3>
        <p style="color: var(--color-dark-text);">
          All information is scattered across paper journals, Excel files, and personal notebooks. Management doesn't see the real picture on the territory and makes decisions randomly, risking reputation and work effectiveness.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Technology Sits Unused Due to Staff Fear</h3>
        <p style="color: var(--color-dark-text);">
          Employees, especially older generation, fear new systems. They prefer manual work that takes hours instead of minutes, creating a bottleneck for the entire organization.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">No Expert Who Understands Both Ecology and IT</h3>
        <p style="color: var(--color-dark-text);">
          In-house IT specialists don't understand conservation task specifics, while ecologists don't know technology. This leads to choosing unsuitable solutions and losing investments.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Ready-Made Solutions Don't Account for Russian Realities</h3>
        <p style="color: var(--color-dark-text);">
          Foreign systems are too expensive and complex for Russian budgets, or don't meet security requirements, while domestic alternatives often don't solve specific conservation or environmental monitoring tasks.
        </p>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 900px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Good news:</strong> digitalization works if you adapt technologies to your real tasks and conditions. My experience managing protected areas and deep IT knowledge allow finding solutions where others see a dead end.
    </p>
  </div>
</section>

<!-- 4. PHOTO SECTION 1 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: flex-end; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_4.2-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 10%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Who Can Become a Bridge Between the World of Nature Conservation and the World of IT?
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-left: 4px solid var(--color-add-acc); padding-left: var(--spacing-lg); margin: 0;">
      Someone who lived in both worlds. For 12 years I led nature reserves and national parks and know from the inside how data is collected in the field, how reports are written, and where the main "bottlenecks" are. Then I purposefully mastered modern IT tools (GIS, server solutions, mobile development) to automate exactly these processes. I speak both languages.
    </blockquote>
  </div>
</section>

<!-- 5. UNIQUENESS / WHAT I DO -->
<section class="expertise-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-4-primary); margin-bottom: 0;">
      Why Do I Succeed in Implementing IT Where Others Are Powerless?
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Former Protected Area Director</h3>
        <p style="color: var(--color-dark-text);">
          I'm a practitioner. I know the budgetary, staffing, and bureaucratic realities of government institutions. All proposed solutions are initially tested for feasibility in your conditions.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">IT for Tasks, Not Vice Versa</h3>
        <p style="color: var(--color-dark-text);">
          I start work by analyzing your specific task (patrolling, bird counting, violation monitoring, or permit issuance) and select or configure a tool for it.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Turnkey Digitalization with Limited Resources</h3>
        <p style="color: var(--color-dark-text);">
          I offer not "expensive solutions for ideal conditions" but working tools for real tasks within your budget. This could be open-source software adaptation, configuring affordable platforms, or developing simple mobile apps — the main thing is that the result is measurable.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Full Cycle: From Idea to Training</h3>
        <p style="color: var(--color-dark-text);">
          I handle the entire process: we discuss the task, select/configure the tool, implement it, train your team (from inspector to research scientist), and provide technical support.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 6. PHOTO SECTION 2 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_4.3-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Digitalization Is Not About Technology, It's About Efficiency.
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      The goal of any IT implementation in protected areas is not to "be modern" but to free up employee time and resources for the main thing: nature conservation and research. When an inspector spends minutes instead of hours on a report, and a scientist sees data on a map instead of in a stack of papers — that's real efficiency.
    </blockquote>
  </div>
</section>

<!-- 7. PROCESS / HOW IT WORKS -->
<section class="process-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-4-primary); margin-bottom: var(--spacing-md);">
      How Does Digital Tool Implementation Happen?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-4-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Transparent Stages Where You Get Results at Each Step
    </p>
    
    <div class="process-grid">
      <!-- Stage 1 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">1</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Diagnostics and Task Definition</h3>
          <p style="color: var(--color-dark-text);">
            We thoroughly study which specific operation needs improvement (field data collection, map creation, reporting). We define what result will be success.
          </p>
        </div>
      </div>
      
      <!-- Stage 2 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">2</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Solution Selection and Adaptation</h3>
          <p style="color: var(--color-dark-text);">
            Based on the task, budget and infrastructure, we select a tool (e.g., SMART, QGIS, mobile app, or SaaS platform) and configure it specifically for your needs: creating forms, maps, reports.
          </p>
        </div>
      </div>
      
      <!-- Stage 3 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">3</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Pilot Implementation and Training</h3>
          <p style="color: var(--color-dark-text);">
            We implement the solution for one department or at one site. I conduct training seminars for employees and create simple, clear instructions.
          </p>
        </div>
      </div>
      
      <!-- Stage 4 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">4</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-sm);">Full-Scale Launch and Support</h3>
          <p style="color: var(--color-dark-text);">
            After a successful pilot, we scale to the entire organization. I provide technical and consulting support during the team's adaptation period.
          </p>
        </div>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 1200px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Format and Timing:</strong> I work remotely and with site visits. Timing depends on the task: from SMART configuration (1-2 months) to mobile app development (2-4 months).
    </p>
  </div>
</section>

<!-- 7.5. SPECIAL CASE -->
<!-- 7.5.1. Heading + Subheading + Photo -->
<section id="kejs-4-0" style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <div class="special-case-intro">
      <!-- Text left -->
      <div>
        <h2 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md);">
          How an IT Solution Turned Data Chaos into a Nature Conservation Management Tool
        </h2>
        <p style="font-size: var(--font-size-lg); color: var(--color-4-secondary); line-height: 1.6;">
          Experience implementing and adapting the SMART system in 6 locations — from national parks to regional hunting departments. Not just software installation, but full configuration for your tasks and team.
        </p>
      </div>
      
      <!-- Photo right -->
      <div style="margin: 0; padding: 0; height: 100%;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_4.0-1200w.jpg' | relative_url }}" alt="SMART" style="width: 100%; height: 100%; border-radius: var(--radius-lg); display: block; margin: 0; object-fit: cover;">
      </div>
    </div>
  </div>
</section>

<!-- 7.5.2. Challenge (Problem "Before") -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7;">
      <span style="font-weight: 700; font-size: 36px; color: var(--color-4-primary);">Challenge:</span> Before system implementation, work was based on paper and intuition. Inspectors recorded data in notebooks, and the security chief had to spend weeks manually consolidating scattered information for reports. There was no objective picture: where do violations most often occur? Where do rare species concentrate? Are patrols distributed effectively? Management was based on habits, not data. This led to information loss, irrational resource use, and inability to objectively evaluate work effectiveness before management and regulatory bodies.
    </p>
  </div>
</section>

<!-- 7.5.3. Solution (Process) - DARK BLOCK -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-4-primary); color: var(--color-light-text);">
  <div class="container">
    <p style="color: var(--color-light-text); line-height: 1.7; margin-bottom: var(--spacing-md);">
      <span class="special-case-heading" style="color: var(--color-accent);">Solution:</span> I act as a bridge between the world of nature conservation and the world of IT. I select a tool that can solve your specific operational problems with minimal resource costs.
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95; margin-bottom: var(--spacing-md);">
      <strong>Stage 1: Translating Needs into Digital.</strong> Together with the client, I determine: what reports does management and regulatory bodies need? What data should specialists collect in the field to ensure transparency and control?
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95; margin-bottom: var(--spacing-md);">
      <strong>Stage 2: Adapting SMART to Russian Realities.</strong> I configure the database structure, create convenient forms for the mobile app, write scripts for automatic reports. The system learns to speak your language and solve your tasks.
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95;">
      <strong>Stage 3: Implementation and "Bringing the System to Life".</strong> I install SMART on computers and smartphones, conduct training for employees (often working with smartphones in the field for the first time) and for analysts. Then I support the project for a year so the system becomes part of daily work, not a burden.
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
        <strong>Reports in a Minute.</strong> A quarterly violations report that previously took a week is generated with one click.
      </li>
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Management Based on Maps and Analytics.</strong> Management sees not only patrol routes but also real violation "hot spots", allowing targeted resource distribution and cost reduction.
      </li>
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Transparency and Control.</strong> All employee actions are recorded with geotags, ensuring discipline, decision objectivity, and protection from regulatory body claims.
      </li>
      <li style="padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Unified Digital Space.</strong> Data from different departments is collected into one system, becoming the foundation for comprehensive territory management and ESG reporting preparation.
      </li>
    </ul>
  </div>
</section>

<!-- 7.5.5. Value for future client -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7; font-weight: 500; text-align: left; font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-lg);">
      This case proves that digitalization in natural territory management is not about complex technologies for IT specialists. It's about clarity and control for management. SMART implementation through me is a guarantee that the system will work specifically in your conditions, whether it's a federal reserve, hunting enterprise, or extraction company conducting environmental monitoring. You'll receive not software, but a tool for making informed decisions and proving your work effectiveness to any auditors and stakeholders.
    </p>
  </div>
</section>

<!-- 8. IMPLEMENTED PROJECTS -->
<section class="projects-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-4-primary); color: var(--color-light-text);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-light-text); margin-bottom: var(--spacing-md);">
      Digitalization That Works: From Government Institutions to Business
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); opacity: 0.8; margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Real projects in different regions of Russia where digital tool implementation solved operational tasks and reduced routine time multiple times. Each case started with understanding task specifics, not technology selection.
    </p>
    
    <div class="grid grid-3" style="gap: var(--spacing-md);">
      <!-- Case 4.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_4.1-800w.webp' | relative_url }}" alt="Case 4.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">From Satellite to Route: How Spatial Analysis Increased Field Research Effectiveness Several Times</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/digital/#kejs-4-1' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 4.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_4.2-800w.webp' | relative_url }}" alt="Case 4.2" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Forest Research: How a Custom App Simplified Field Research for a GIS Project</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/digital/#kejs-4-2' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 9. RESULTS -->
<section class="results-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-4-primary); margin-bottom: var(--spacing-md);">
      What Changes Does Competent Digitalization Bring?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-4-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Concrete Benefits Your Employees and Management Will Feel
    </p>
    
    <div class="results-grid">
      <!-- Result 1 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md);">Paperwork Routine Reduction</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Key data (routes, violations, animal sightings) is immediately recorded digitally in the field. The transcription and rewriting stage from paper journals disappears.
        </p>
      </div>
      
      <!-- Result 2 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md);">Report Automation and Effectiveness Analysis</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          The system itself generates reports on completed routes, identified violations, patrol activity. Management receives an objective picture of territory work in the form of maps and dashboards.
        </p>
      </div>
      
      <!-- Result 3 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md);">Resource Optimization for Planning</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          GIS analysis allows planning survey or patrol routes with maximum coverage and minimum time and fuel costs, as was done for bird counting in Remdovsky Reserve.
        </p>
      </div>
      
      <!-- Result 4 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary);">
        <h3 style="color: var(--color-4-primary); margin-bottom: var(--spacing-md);">Data Standardization and Quality</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          All data is collected in a unified, structured format (as in the Forest Research app). This allows easy analysis, storage, and transfer, excluding errors and information loss.
        </p>
      </div>
      
      <!-- Result 5 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-4-secondary); grid-column: span 2;">
        <p style="color: var(--color-dark-text); font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-md);">
          <strong style="color: var(--color-4-primary);">Honestly about the main thing:</strong> Digitalization is a process. It requires initial efforts in training and habit change. But in the end, you receive not just "digital" but a tool for making more informed management decisions and freeing your team's time for meaningful work. I help you go through this path with minimal resistance.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 10. FINAL CALL TO ACTION -->
<section id="contact" class="contact-section" style="padding: calc(var(--spacing-xxl) * 2 / 3) 0; background-color: var(--color-4-primary); color: var(--color-light-text); text-align: center;">
  <div class="container">
    <h2 style="color: var(--color-add-acc); margin-bottom: var(--spacing-md); font-size: var(--font-size-3xl);">
      Ready to Discuss<br>Digitalization of a Specific Task?
    </h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.8;">
      Describe what you want to improve: animal counting, inspector work, visitor permit issuance with anthropogenic load control, data analysis, or reporting. I'll study the request and suggest an IT solution that will work in your territory's conditions.
    </p>
    <a href="#consult-modal" class="btn btn-primary js-open-consult-modal" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl);">
      Book a Consultation
    </a>
  </div>
</section>
