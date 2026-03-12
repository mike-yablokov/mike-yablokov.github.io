---
layout: default
title: "Team Development and Education - Mikhail Yablokov"
description: "I create educational programs for business and government that combine conservation experience, practical tools, and systems thinking"
permalink: /en/education/
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

/* Section 2 (Audience) adaptation */
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
</style>

<!-- 1. HERO SECTION -->
<section class="hero-section" style="min-height: 65vh; display: grid; grid-template-columns: 1fr 1fr; position: relative;">
  <!-- Left part: Photo -->
  <div class="hero-photo" style="background: url('{{ '/assets/images/hero/ymike.ru_5.1-1920w.webp' | relative_url }}') center center / cover no-repeat; min-height: 65vh; position: relative;">
  </div>
  
  <!-- Right part: Content -->
  <div class="hero-content" style="background-color: var(--color-5-primary); color: var(--color-light-text); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: calc(var(--spacing-xxl) / 2) calc(var(--spacing-lg) * 2 / 3) 60px calc(var(--spacing-lg) * 2 / 3);">
    <h1 style="font-size: var(--font-size-4xl); margin-bottom: var(--spacing-md); line-height: 1.2;">
      Education for ESG and Sustainable Development That Changes the Approach to Managing Natural Territories
    </h1>
    <p style="font-size: 22.5px; margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.6;">
      I create educational programs for business and government that combine conservation experience, practical tools, and systems thinking. My courses develop not just skills, but the professional worldview needed to work in complex conditions.
    </p>
    
    <!-- Statistics -->
    <div class="hero-stats">
      <!-- Pair 1: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">120+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">certified<br>specialists</div>
      </div>
      
      <!-- Pair 2: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">10+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">corporate<br>programs</div>
      </div>
      
      <!-- Pair 3: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">>50%</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">apply knowledge<br>in the first month</div>
      </div>
    </div>
  </div>
</section>

<!-- 2. FOR WHOM? -->
<section class="audience-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-5-primary); margin-bottom: 0;">
      For Those Investing in Team Development as the Key Resource for Sustainable Development
    </h2>
    
    <div class="audience-grid" style="margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Need environmental modules for ESG reporting and training? I'll create comprehensive programs that systematize knowledge and build a shared value system for your company.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Want to work legally around protected areas and build a sustainable business? I'll prepare programs for your business that create long-term partnerships with territories.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Want to implement practice-oriented courses on territory management? I'll adapt global methodologies to Russian realities and ensure connections with employers.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Need practical skills, not theory? I'll create programs that combine biology, management, and communications into a unified professional worldview.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary); grid-column: span 2;">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Need professional development with limited resources? I'll adapt best international practices to your conditions without interrupting core activities.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 3. THE PROBLEM / WHY IT MATTERS -->
<section class="problems-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-5-primary); margin-bottom: var(--spacing-md);">
      Why Is It So Hard to Find Quality Training in Nature Conservation?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-5-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Challenges faced by both specialists and educational institutions.
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Gap Between Theory and Practice</h3>
        <p style="color: var(--color-dark-text);">
          Lots of academic knowledge from textbooks, but in biology and natural resource management, not in territorial conservation. Graduates aren't ready for real work.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Lack of Systems Perspective</h3>
        <p style="color: var(--color-dark-text);">
          Training is often fragmented: separate modules on tourism, for lawyers, for sociologists. There's no holistic picture connecting everything into the logic of a single territory.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">No Access to Unique Experience</h3>
        <p style="color: var(--color-dark-text);">
          Knowledge of top practitioners stays within their organizations or is lost. There are no mechanisms for transferring the "unwritten" rules, nuances, and deeper meaning of the profession.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Misunderstanding of Adjacent Fields' Context</h3>
        <p style="color: var(--color-dark-text);">
          Ecologists don't understand business logic, business doesn't understand protected area logic, officials don't understand local community logic. This creates discommunication and ineffective projects.
        </p>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 900px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Solution</strong>: practical programs from an expert who understands both business logic and conservation specifics. I create training that builds not just knowledge, but a system of professional thinking for working in complex conditions.
    </p>
  </div>
</section>

<!-- 4. PHOTO SECTION 1 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_5.2-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Education Is an Investment in the Industry's Future
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      The best nature-related projects account for both environmental and social goals. Such balancing is not a textbook chapter, but a complex art.<br>My task is to convey its philosophy and provide tools for implementation.
    </blockquote>
  </div>
</section>

<!-- 5. UNIQUENESS / WHAT I DO -->
<section class="expertise-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-5-primary); margin-bottom: 0;">
      Why Do My Educational Programs Deliver Results, Not Just Fill Curricula?
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Systems Approach Instead of Fragmented Knowledge</h3>
        <p style="color: var(--color-dark-text);">
          As in the "Protected Area Management" program, I combine ecology, management, and communications into a unified system that provides holistic understanding for business decisions.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Access to a Community of Practitioners</h3>
        <p style="color: var(--color-dark-text);">
          My programs involve not only theorists but also current protected area leaders and experts, as in the KamGU case where 30+ practitioners shared the profession's "unwritten" rules.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Meaning Instead of Instructions</h3>
        <p style="color: var(--color-dark-text);">
          I explain not only "how" but also "why," fostering participants' conscious attitude toward their work, as in the Roszapovedcenter program.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Practical Tools for Specific Tasks</h3>
        <p style="color: var(--color-dark-text);">
          Each module concludes with creating a real project or tool that participants immediately apply in their work, as in the "From Specialist to Leader" program.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 6. PHOTO SECTION 2 -->
<section class="photo-section-2" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_5.3-1400w.webp' | relative_url }}') right center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      The Outcome of Training Is Not a Certificate, But a Change in Work Approach
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      The most valuable feedback I receive: "You helped me not just learn something new, but see my entire work differently and understand its true meaning."<br>This is exactly what I strive for in every program.
    </blockquote>
  </div>
</section>

<!-- 7. PROCESS / HOW IT WORKS -->
<section class="process-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-5-primary); margin-bottom: var(--spacing-md);">
      How Is Collaboration in Education Structured?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-5-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Flexible Approach to Client Tasks: From a Single Lecture or Module to a Full Educational Program
    </p>
    
    <div class="process-grid">
      <!-- Stage 1 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">1</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Needs and Goals Analysis</h3>
          <p style="color: var(--color-dark-text);">
            Together we define what result needs to be achieved: upskill the team, introduce a new course into the curriculum, develop a program for an ESG module. We consider the audience's level.
          </p>
        </div>
      </div>
      
      <!-- Stage 2 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">2</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Program Development or Adaptation</h3>
          <p style="color: var(--color-dark-text);">
            I create a program that meets your goals. This could be: a ready-made topic from my experience (strategy, tourism, sociology) or a completely new course structuring knowledge for your request.
          </p>
        </div>
      </div>
      
      <!-- Stage 3 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">3</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Implementation in a Convenient Format</h3>
          <p style="color: var(--color-dark-text);">
            I conduct training in a format that suits you: an intensive on-site workshop, online course, webinar series, university lecture cycle, or internship organization.
          </p>
        </div>
      </div>
      
      <!-- Stage 4 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">4</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Practice and Feedback</h3>
          <p style="color: var(--color-dark-text);">
            I emphasize interactivity, real case analysis, and practical assignments. I provide feedback to participants.
          </p>
        </div>
      </div>
      
      <!-- Stage 5 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative; grid-column: span 2;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">5</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-sm);">Post-Training Support</h3>
          <p style="color: var(--color-dark-text);">
            I provide materials, answer questions, and consult on applying knowledge in practice (optional).
          </p>
        </div>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 1200px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Format and Timing:</strong> From a 2-day workshop to a 9-month professional retraining program.
    </p>
  </div>
</section>

<!-- 7.5. SPECIAL CASE -->
<!-- 7.5.1. Heading + Subheading + Photo -->
<section id="kejs-5-0" style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <div class="special-case-intro">
      <!-- Text left -->
      <div>
        <h2 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md);">
          First Diploma in Protected Area Management: How We Created a Knowledge System for the Entire Industry
        </h2>
        <p style="font-size: var(--font-size-lg); color: var(--color-5-secondary); line-height: 1.6;">
          Experience developing and launching a professional retraining program that, for the first time in Russia, systematized protected area practices into a holistic worldview and awarded state diplomas to 120+ specialists.
        </p>
      </div>
      
      <!-- Photo right -->
      <div style="margin: 0; padding: 0; height: 100%;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.0-1200w.jpg' | relative_url }}" alt="Protected Area Management" style="width: 100%; height: 100%; border-radius: var(--radius-lg); display: block; margin: 0; object-fit: cover;">
      </div>
    </div>
  </div>
</section>

<!-- 7.5.2. Challenge (Problem "Before") -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7;">
      <span class="special-case-heading" style="color: var(--color-5-primary);">Challenge:</span> In the field of natural territory management, there was an educational vacuum. Specialists came with narrow professional knowledge but without understanding an integrated approach to nature conservation. No programs existed that explained how to integrate territory protection, scientific research, community engagement, and tourism development into a unified strategy. This led to fragmented management and loss of experience continuity between generations of specialists.
    </p>
  </div>
</section>

<!-- 7.5.3. Solution (Process) - DARK BLOCK -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-5-primary); color: var(--color-light-text);">
  <div class="container">
    <p style="color: var(--color-light-text); line-height: 1.7; margin-bottom: var(--spacing-md);">
      <span class="special-case-heading" style="color: var(--color-accent);">Solution:</span> Russia's first professional retraining program "Protected Area Management" with a state-standard diploma, whose development I led at the initiative of the "School of Nature Defenders." My task was to systematize the fragmented experience of the entire industry.
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95; margin-bottom: var(--spacing-md);">
      <strong>Step 1: Creating the Knowledge Framework.</strong> I analyzed practical experience and identified key disciplines — from biological foundations of territorial conservation to protected area reputation management. The result was a holistic educational system.
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95; margin-bottom: var(--spacing-md);">
      <strong>Step 2: Filling with Living Experience.</strong> Over 30 leading practitioners from the country's best protected areas and NGOs were invited to the program. They filled the system with specific cases, solutions, and the profession's "unwritten" rules.
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95;">
      <strong>Step 3: Conveying Meaning, Not Just Skills.</strong> The heart of the program became its meaningful core. Through the paradox "We protect nature both from people and for people," we revealed to participants the depth and complexity of their mission, turning a set of job instructions into a conscious profession.
    </p>
  </div>
</section>

<!-- 7.5.4. Outcome (Results "After") -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <h3 style="text-align: center; color: var(--color-accent); margin-bottom: var(--spacing-md); font-size: var(--font-size-2xl);">
      Outcome
    </h3>
    <p style="color: var(--color-dark-text); line-height: 1.7; margin-bottom: var(--spacing-md);">
      Over two years, the program graduated over 120 certified specialists — mostly current protected area staff. The main outcome was not the number of hours, but a qualitative change:
    </p>
    <ul style="color: var(--color-dark-text); line-height: 1.8; list-style: none; padding: 0;">
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>Systems thinking developed.</strong> Participants gained not just skills, but a holistic understanding of their work through the lens of nature conservation and community engagement.
      </li>
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>A new education standard was established.</strong> The program proved that it is possible and necessary to teach an integrated approach to nature conservation that combines ecology, management, and communications.
      </li>
      <li style="padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>A professional core was created.</strong> Graduates, now working across different parts of the country, are carriers of a unified, articulated approach to conserving natural territories.
      </li>
    </ul>
  </div>
</section>

<!-- 7.5.5. Value for future client -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7; font-weight: 500; text-align: left; font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-lg);">
      This case proves the highest level of expertise in education. If you — whether a university, corporate training center, or large territory — need not a one-time lecture but deep, systemic impact, I can create a similarly comprehensive educational product for you. I transform personal experience and knowledge of the industry's best practitioners into structured programs that develop not just specialists, but professionals with a holistic vision. This is an investment not in reporting, but in the future of your team or project.
    </p>
  </div>
</section>

<!-- 8. IMPLEMENTED PROJECTS -->
<section class="projects-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-5-primary); color: var(--color-light-text);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-light-text); margin-bottom: var(--spacing-md);">
      How We Created Educational Programs with Measurable Results for Business and Government
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); opacity: 0.8; margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Real projects for corporate training centers and educational institutions where deep expertise in conservation helped solve ESG reporting, protected area engagement, and professional training tasks. Each program started with understanding the client's business goals, not a curriculum.
    </p>
    
    <div class="grid grid-3" style="gap: var(--spacing-md);">
      <!-- Case 5.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.1-800w.webp' | relative_url }}" alt="Case 5.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">From Specialist to Leader: How a 9-Month Program Taught Protected Area Staff to Create Projects at the Intersection of Ecology and Sociology</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/education/#kejs-5-1' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 5.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.2-800w.webp' | relative_url }}" alt="Case 5.2" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Rapid Immersion: How We Synchronized the Roszapovedcenter Team in 4 Days</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/education/#kejs-5-2' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 5.3 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.3-800w.webp' | relative_url }}" alt="Case 5.3" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Adapting Global Experience: International Course for Russian Protected Area Staff</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/education/#kejs-5-3' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 5.4 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.4-800w.webp' | relative_url }}" alt="Case 5.4" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Team Transformation: How to Unite a Team and Restore Meaning to Work in One Month</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/education/#kejs-5-4' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 9. RESULTS -->
<section class="results-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-5-primary); margin-bottom: var(--spacing-md);">
      What Do Clients and Program Participants Gain?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-5-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Dual Effect: For the Training Organizer and for Its Participants
    </p>
    
    <div class="results-grid">
      <!-- For organizers -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md);">For Organizers (University, Company, Protected Area)</h3>
        <ul style="color: var(--color-dark-text); line-height: 1.5; list-style-position: outside; padding-left: 20px;">
          <li style="margin-bottom: var(--spacing-sm);"><strong>Ready, Structured Expertise</strong> — You receive not just a lecturer, but a complete, validated educational product that solves your tasks (accreditation, ESG reporting, team development).</li>
          <li style="margin-bottom: var(--spacing-sm);"><strong>Enhanced Status and Appeal</strong> — The ability to offer your audience (students, employees) unique content from a recognized practitioner, strengthening your reputation.</li>
          <li><strong>Practical Return</strong> — Trained specialists adapt faster, work more effectively, and deliver measurable benefits, whether implementing a project or reducing conflicts.</li>
        </ul>
      </div>
      
      <!-- For participants -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary);">
        <h3 style="color: var(--color-5-primary); margin-bottom: var(--spacing-md);">For Participants (Specialists, Students)</h3>
        <ul style="color: var(--color-dark-text); line-height: 1.5; list-style-position: outside; padding-left: 20px;">
          <li style="margin-bottom: var(--spacing-sm);"><strong>Not Just Skills, But Understanding</strong> — You move beyond operational tasks, begin to see systemic connections and the deeper meaning of your work, which boosts motivation and career prospects.</li>
          <li style="margin-bottom: var(--spacing-sm);"><strong>Access to Unique Experience and Community</strong> — You gain knowledge not found in open sources and build connections with leading experts and colleagues from adjacent fields.</li>
          <li><strong>Tools for Real Projects</strong> — The ability to develop strategies, conduct research, create tourism concepts — skills you can apply immediately after training.</li>
        </ul>
      </div>
      
      <!-- Result 3 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-5-secondary); grid-column: span 2;">
        <p style="color: var(--color-dark-text); font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-md);">
          <strong style="color: var(--color-5-primary);">Honestly about the main thing:</strong> My training provides two things: a solid foundation and tools for building. The foundation is a deep understanding of the meaning of protected area work, a value system, and a professional worldview. The tools are specific methodologies and skills for daily work. With the foundation, you won't collapse under pressure; with the tools, you can build anything.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 10. FINAL CALL TO ACTION -->
<section id="contact" class="contact-section" style="padding: calc(var(--spacing-xxl) * 2 / 3) 0; background-color: var(--color-5-primary); color: var(--color-light-text); text-align: center;">
  <div class="container">
    <h2 style="color: var(--color-add-acc); margin-bottom: var(--spacing-md); font-size: var(--font-size-3xl);">
      Want to Discuss an Educational Project?
    </h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.8;">
      Describe your task: developing a course for a university, a module for corporate training, a professional development program for a team. I'll study the request and suggest options for how my experience and developments can be transformed into an effective training program for you.
    </p>
    <a href="#consult-modal" class="btn btn-primary js-open-consult-modal" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl);">
      Book a Consultation
    </a>
  </div>
</section>
