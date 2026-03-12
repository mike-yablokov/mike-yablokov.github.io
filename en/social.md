---
layout: default
title: "Social Solutions for Territories - Mikhail Yablokov"
description: "Scientific methods for solving problems where business, government, and local community interests intersect with nature conservation"
permalink: /en/social/
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

/* Photo section 1 adaptation */
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

/* Special case subsection 7.5.1 adaptation (intro) */
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

/* Special case subsection headings adaptation */
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

/* Section 9 adaptation (Results) */
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
      Social Challenges in Territories: From Misunderstanding to Partnership
    </h1>
    <p style="font-size: 22.5px; margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.6;">
      Scientific methods for solving problems where business, government, and local community interests intersect with nature conservation. My experience managing protected areas helps identify growth opportunities even in the most complex situations.
    </p>
    
    <!-- Статистика -->
    <div class="hero-stats">
      <!-- Para 1: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">4+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">sociological<br>studies</div>
      </div>
      
      <!-- Para 2: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">3+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">conflict situations<br>turned into dialogue</div>
      </div>
      
      <!-- Para 3: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">10+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">community engagement<br>programs</div>
      </div>
    </div>
  </div>
</section>

<!-- 2. FOR WHOM? -->
<section class="audience-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-2-primary); margin-bottom: 0;">
      For Those Facing Social Conflicts in Territories and Seeking Science-Based Solutions
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Addressing socio-environmental conflicts and need objective data? I'll conduct diagnostics and create a roadmap for transitioning from crisis to sustainable territory development.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Does your activity in sensitive territories require a social license? I'll help chart a path from conflicts to partnership through objective research and community engagement.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Do conflicts with local residents hinder your reserve's work? I'll develop a stakeholder engagement system based on sociological data, not intuition.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Need sociological research for grant applications with limited resources? I'll adapt data collection methodologies to improve application quality and social impact assessment.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 3. THE PROBLEM / WHY IT MATTERS -->
<section class="problems-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-2-primary); margin-bottom: var(--spacing-md);">
      Conflict Out of Nowhere?<br>This Is Just the Tip of the Iceberg
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-2-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Resident dissatisfaction, complaints, misunderstanding — these are symptoms. Fighting symptoms is pointless. You need to find and eliminate the root cause, and that requires objective data.
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Projects Stall Due to Resistance</h3>
        <p style="color: var(--color-dark-text);">
          Any initiatives (construction, creating protected areas, launching programs) face unexplained resistance. Negotiations reach a dead end.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Resources Are Wasted</h3>
        <p style="color: var(--color-dark-text);">
          You invest in territory development, but loyalty doesn't grow. It's unclear what works and what doesn't. There are no metrics to assess social impact.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Risks to Reputation and Social License to Operate</h3>
        <p style="color: var(--color-dark-text);">
          The conflict goes public, attracting media and regulatory attention. Stakeholder trust declines.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Decisions Made "Blindly"</h3>
        <p style="color: var(--color-dark-text);">
          You act on assumptions, stereotypes, or emotions rather than understanding people's real interests and fears.
        </p>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 900px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Good news:</strong> these problems are solvable if you shift from fighting symptoms to investigating root causes. That's exactly what I do.
    </p>
  </div>
</section>

<!-- 4. PHOTO SECTION 1 -->
<section class="quote-section photo-section-1" style="min-height: 75vh; display: flex; align-items: center; justify-content: flex-end; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_2.2-1400w.webp' | relative_url }}') 16% center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div class="photo-section-1-content" style="max-width: 700px; margin-right: 500px; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Why Don't Conflicting Parties Hear Each Other?
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-left: 4px solid var(--color-add-acc); padding-left: var(--spacing-lg); margin: 0;">
      Because they speak different languages. This is discommunication. Local residents talk about their well-being and traditions. The organization talks about laws, technologies, and global goals. Without a "translator" who can find common conceptual language based on facts, dialogue is impossible. My role is to be that translator and bridge.
    </blockquote>
  </div>
</section>

<!-- 5. UNIQUENESS / WHAT I DO -->
<section class="expertise-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-2-primary); margin-bottom: 0;">
      Why Do My Sociological Studies Change the Situation, Not Just Collect Data?
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Practitioner, Not Theorist</h3>
        <p style="color: var(--color-dark-text);">
          For 12 years I led protected areas and was on the administration side facing these problems. I understand the logic of business, residents, and conservation alike.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Deep Diagnostics Instead of Surface-Level Surveys</h3>
        <p style="color: var(--color-dark-text);">
          As in the Teriberka study, I find root causes of conflicts, not symptoms, and show practical paths to solutions.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">From Data to Concrete Actions</h3>
        <p style="color: var(--color-dark-text);">
          You receive not a thick report, but a step-by-step roadmap with priority measures and implementation methods.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Focus on Engagement, Not Just Study</h3>
        <p style="color: var(--color-dark-text);">
          My studies themselves become a dialogue tool, as in Kyrgyzstan, where an anonymous survey of local residents became the first step toward partnership with the protected area.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 6. PHOTO SECTION 2 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_2.3-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Sustainable Solutions Are Born at the Intersection of Interests
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      My key insight from working in protected areas: the long-term success of any territory-based project depends not only on planned conservation outcomes, but also on how well it accounts for the interests of people living there. If a project aims at both people's well-being and nature conservation — it becomes sustainable and self-sustaining.<br>This principle is universal.
    </blockquote>
  </div>
</section>

<!-- 7. PROCESS / HOW IT WORKS -->
<section class="process-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-2-primary); margin-bottom: var(--spacing-md);">
      How Research Works:<br>From Misunderstanding to Action Plan
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-2-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      A transparent process that delivers results at every stage
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <!-- Stage 1 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">1</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Task Definition and Contextual Analysis</h3>
          <p style="color: var(--color-dark-text);">
            Deep immersion: we study documents, background, and your goals. We formulate hypotheses about conflict causes.
          </p>
        </div>
      </div>
      
      <!-- Stage 2 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">2</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Field Stage: Data Collection</h3>
          <p style="color: var(--color-dark-text);">
            Field visit. Anonymous and confidential interviews with key groups: local residents, your staff, administration representatives, activists. Data collection where conflict occurs or changes are planned.
          </p>
        </div>
      </div>
      
      <!-- Stage 3 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">3</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Analysis and Identifying "Bottlenecks"</h3>
          <p style="color: var(--color-dark-text);">
            Information processing, identifying hidden patterns, economic and cultural causes, analyzing communication breakdowns.
          </p>
        </div>
      </div>
      
      <!-- Stage 4 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">4</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Developing Recommendations and Action Program</h3>
          <p style="color: var(--color-dark-text);">
            Based on data, we create concrete proposals: how to change communication, which pilot projects to launch, how to build dialogue. This is a ready-to-implement plan.
          </p>
        </div>
      </div>
      
      <!-- Stage 5 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative; grid-column: span 2;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">5</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-sm);">Launch Support (Optional)</h3>
          <p style="color: var(--color-dark-text);">
            Help with concrete steps for implementing communication strategy, facilitating stakeholder meetings, monitoring or adjusting the plan based on feedback.
          </p>
        </div>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 1200px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Timeline:</strong> From 2 months (express diagnostics) to 4-12 months (comprehensive research with support).
    </p>
  </div>
</section>

<!-- 7.5. SPECIAL CASE -->
<!-- 7.5.1. Heading + Subheading + Photo -->
<section id="kejs-2-0" style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: var(--spacing-md);">
      <!-- Text left -->
      <div>
        <h2 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md);">
          Research in Kyrgyzstan Opened the Path to Snow Leopard Conservation
        </h2>
        <p style="font-size: var(--font-size-lg); color: var(--color-2-secondary); line-height: 1.6;">
          An anonymous survey of local residents revealed the true causes of conflict and laid the foundation for practical solutions by the protected area and international fund.
        </p>
      </div>
      
      <!-- Photo right -->
      <div style="margin: 0; padding: 0; height: 100%;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.0-1200w.jpg' | relative_url }}" alt="Research in Kyrgyzstan" style="width: 100%; height: 100%; border-radius: var(--radius-lg); display: block; margin: 0; object-fit: cover;">
      </div>
    </div>
  </div>
</section>

<!-- 7.5.2. Challenge (Problem "Before") -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7;">
      <span class="special-case-heading" style="color: var(--color-2-primary);">Challenge:</span> The success of a project implementing modern conservation methods in two Kyrgyz protected areas depended on local community support. However, the client had only assumptions about residents' attitudes toward the territory and the snow leopard. Without objective data, any actions — whether awareness campaigns or restrictions — carried high risk of being ineffective or even worsening tensions.
    </p>
  </div>
</section>

<!-- 7.5.3. Solution (Process) - DARK BLOCK -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-2-primary); color: var(--color-light-text);">
  <div class="container">
    <p style="color: var(--color-light-text); line-height: 1.7; margin-bottom: var(--spacing-md);">
      <span class="special-case-heading" style="color: var(--color-accent);">Solution:</span> I designed and conducted an anonymous survey of 90 residents from remote villages to replace subjective assumptions with objective facts. Analysis revealed a key insight: people are proud of the snow leopard as a symbol of their land, and poaching stems not from hostility but from lack of alternative income sources to livestock. Meanwhile, 87% of respondents expressed willingness to cooperate with the protected area and interest in tourism development, but didn't know where to start.
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
        The client (WCS/CEPF) received not just a report, but a foundation for management decisions: a clear picture of community motivations and three practical action directions — targeted awareness work, building public support, and most importantly, developing tourism as a sustainable income source for local residents.
      </li>
    </ul>
  </div>
</section>

<!-- 7.5.5. Value for future client -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7; font-weight: 500; text-align: left; font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-lg);">
      This case shows how objective data helps identify growth opportunities even in complex socio-environmental situations. My dual expertise — practical experience managing protected areas and sociological analysis skills — allows me not just to collect information, but to immediately translate it into concrete steps. If your activity — whether conservation, resource extraction, or land use — depends on local community attitudes, this approach will give you clarity and a scientific basis for decision-making.
    </p>
  </div>
</section>

<!-- 8. IMPLEMENTED PROJECTS -->
<section class="projects-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-2-primary); color: var(--color-light-text);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-light-text); margin-bottom: var(--spacing-md);">
      How I Found Growth Opportunities<br>in Complex Socio-Environmental Conflicts
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); opacity: 0.8; margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Real projects for business, regional authorities, and protected areas where scientific methods helped overcome confrontation and create sustainable territory development. Each case started with objective diagnostics instead of emotional decisions.
    </p>
    
    <div class="grid grid-3" style="gap: var(--spacing-md);">
      <!-- Case 2.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.1-800w.webp' | relative_url }}" alt="Case 2.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Crisis Diagnostics: Sociological Study of the Tourism Boom in Teriberka</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/social/#kejs-2-1' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 2.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.2-800w.webp' | relative_url }}" alt="Losiny Ostrov" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Losiny Ostrov: How to Change Image and Establish Management for a Protected Area in a Megacity</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/social/#kejs-2-2' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 2.3 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.3-800w.webp' | relative_url }}" alt="Case 2.3" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">How to Measure the Impact of a Reserve Visit: One of Russia's First Studies on the Conservation Effect of Protected Area Visits</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/social/#kejs-2-3' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 5.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.1-800w.webp' | relative_url }}" alt="Case 5.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">From Specialist to Leader: How a 9-Month Program Taught Protected Area Staff to Create Projects at the Intersection of Ecology and Sociology</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/social/#kejs-5-1' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 5.3 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.3-800w.webp' | relative_url }}" alt="Case 5.3" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Adapting Global Experience: International Course for Russian Protected Area Staff</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/social/#kejs-5-3' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 9. RESULTS -->
<section class="results-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-2-primary); margin-bottom: var(--spacing-md);">
      What Will You Gain from Our Collaboration?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-2-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Concrete Tools and Clarity Instead of Uncertainty and Conflict
    </p>
    
    <div class="results-grid">
      <!-- Result 1 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md);">Objective Situation Diagnosis</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          You'll receive not an opinion, but a structured data-based analysis: what people actually think, what are the hidden causes of tension, where growth opportunities for dialogue lie.
        </p>
      </div>
      
      <!-- Result 2 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md);">Everything About Stakeholder Communication</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          From channel selection to trusted sources. This guarantees you'll finally hear each other.
        </p>
      </div>
      
      <!-- Result 3 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md);">Action Program or Roadmap</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          A concrete, step-by-step plan for moving forward: what to change in communication, which "beacon" projects to launch first, how to build regular dialogue with stakeholders.
        </p>
      </div>
      
      <!-- Result 4 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary);">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md);">Reduced Uncertainty and Risk Levels</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          You'll understand the logic of what's happening and gain tools to manage the situation. This reduces reputational and operational risks, especially for business.
        </p>
      </div>
      
      <!-- Result 5 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-2-secondary); grid-column: span 2;">
        <h3 style="color: var(--color-2-primary); margin-bottom: var(--spacing-md);">Foundation for Long-Term Engagement Strategy</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Research findings will become the foundation for building sustainable relationships with the local community, which is critical for long-term work in the territory.
        </p>
        
        <p style="color: var(--color-dark-text); margin-top: var(--spacing-md); font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-md);">
          <strong style="color: var(--color-2-primary);">Honestly about the main thing:</strong> A sociological study doesn't magically resolve conflict. It provides a map and compass — understanding of the situation and direction for movement. Real changes happen when you start applying recommendations in practice. My task is to make this map as accurate as possible, and the compass as reliable.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 10. FINAL CALL TO ACTION -->
<section id="contact" class="contact-section" style="padding: calc(var(--spacing-xxl) * 2 / 3) 0; background-color: var(--color-2-primary); color: var(--color-light-text); text-align: center;">
  <div class="container">
    <h2 style="color: var(--color-add-acc); margin-bottom: var(--spacing-md); font-size: var(--font-size-3xl);">
      Experiencing Difficulties in Relations<br>with the Local Community?
    </h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.8;">
      Tell me about your situation. Let's see how my experience solving similar problems in protected areas<br>can be useful for your organization or project.
    </p>
    <a href="#consult-modal" class="btn btn-primary js-open-consult-modal" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl);">
      Book a Consultation
    </a>
  </div>
</section>
