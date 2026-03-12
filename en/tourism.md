---
layout: default
title: "Sustainable Nature Tourism - Mikhail Yablokov"
description: "I develop working solutions that attract visitors, preserve nature, and consider local community interests"
permalink: /en/tourism/
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

/* Section 7 adaptation (Process) */
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
  <div class="hero-photo" style="background: url('{{ '/assets/images/hero/ymike.ru_3.1-1920w.webp' | relative_url }}') center center / cover no-repeat; min-height: 65vh; position: relative;">
  </div>
  
  <!-- Правая часть: Контент -->
  <div class="hero-content" style="background-color: var(--color-3-primary); color: var(--color-light-text); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: calc(var(--spacing-xxl) / 2) calc(var(--spacing-lg) * 2 / 3) 60px calc(var(--spacing-lg) * 2 / 3);">
    <h1 style="font-size: var(--font-size-4xl); margin-bottom: var(--spacing-md); line-height: 1.2;">
      Concepts for Sustainable Tourism on Natural Territories
    </h1>
    <p style="font-size: 22.5px; margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.6;">
      I develop working solutions that attract visitors, preserve nature, and consider local community interests. My experience creating successful facilities in protected areas will help you avoid typical mistakes and risks.
    </p>
    
    <!-- Statistics -->
    <div class="hero-stats">
      <!-- Pair 1: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">5</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">implemented<br>facilities</div>
      </div>
      
      <!-- Pair 2: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">15+</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">concepts that passed<br>approvals</div>
      </div>
      
      <!-- Pair 3: figure + text -->
      <div class="hero-stats-pair">
        <div style="font-size: 48px; font-weight: 900; line-height: 1; color: var(--color-accent);">40-100%</div>
        <div style="font-size: 14px; line-height: 1.3; opacity: 0.9;">visitor growth<br>while maintaining balance</div>
      </div>
    </div>
  </div>
</section>

<!-- 2. FOR WHOM? -->
<section class="audience-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-3-primary); margin-bottom: 0;">
      For Those Seeking Balance Between Economic Benefits from Tourism and Preservation of Natural Values
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Looking for partnership with protected areas, unique products, and sustainable business without conflicts? I'll create facility concepts that attract guests and are safe for nature.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Developing a tourism cluster as an economic driver but concerned about overtourism? I'll develop a business partnership model for balanced territory development.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Want to turn tourism into a nature conservation tool? I'll create a strategy where territory visits build public support and solve conservation tasks.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <p style="color: var(--color-dark-text); line-height: 1.7;">
          Want more sustainability in nature tourism? I'll help engage local communities in tourism projects, reducing social risks and creating unique, authentic offerings for guests.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 3. THE PROBLEM / WHY IT MATTERS -->
<section class="problems-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-3-primary); margin-bottom: var(--spacing-md);">
      Why Do Many Tourism Projects on Natural Territories Fail or Create Problems?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-3-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Typical Challenges Business and Regional Authorities Face in Tourism Development
    </p>
    
    <div class="grid grid-2" style="gap: var(--spacing-md);">
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Unclear Goals and Format</h3>
        <p style="color: var(--color-dark-text);">
          "Develop tourism" — clear enough. But what kind? What product will be in demand without harming nature? There's no clear vision or calculations.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Resistance and Conflicts</h3>
        <p style="color: var(--color-dark-text);">
          Environmentalists, inspectors, or local residents may oppose. There's no understanding of how to combine economic interests with environmental and social ones.
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Risk of Repeating Others' Mistakes</h3>
        <p style="color: var(--color-dark-text);">
          Examples of overloaded territories (Baikal, Teriberka) are frightening. How to plan development without killing the "golden goose"?
        </p>
      </div>
      
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Lack of Comprehensive Approach</h3>
        <p style="color: var(--color-dark-text);">
          Focus only on profit or only on nature leads to unbalanced solutions that don't work in reality.
        </p>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 900px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Good news:</strong> these problems are solvable. A properly designed, scientifically grounded concept becomes a tool for nature conservation and stable income. My experience creating working concepts will help you avoid these traps.
    </p>
  </div>
</section>

<!-- 4. PHOTO SECTION 1 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_3.2-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 700px; margin-right: 35%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      Why Tourism Where the Main Goal Is Conservation?
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-right: 4px solid var(--color-add-acc); padding-right: var(--spacing-lg); margin: 0; text-align: right;">
      Almost everyone asks this question — both protected area staff and investors. The answer lies in the right approach. Proper tourism is not a threat, but a tool. A tool for preserving wilderness, building public support, and creating alternative income sources for local residents. My work often starts with a seminar where we find this answer for your specific territory.
    </blockquote>
  </div>
</section>

<!-- 5. UNIQUENESS / WHAT I DO -->
<section class="expertise-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-3-primary); margin-bottom: 0;">
      Why Do Clients Come to Me for Concept Development?
    </h2>
    
    <div class="grid grid-2" style="gap: var(--spacing-md); margin-top: calc(var(--spacing-xl) / 2);">
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Author of a Proven Methodology</h3>
        <p style="color: var(--color-dark-text);">
          I developed and apply a system for creating nature-based tourism foundations that has been tested on real protected area projects. This is not theory.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Experience "On Both Sides of the Barricades"</h3>
        <p style="color: var(--color-dark-text);">
          For 12 years I led a nature reserve. I know how protected area teams think, understand their limitations and concerns. This helps create implementable concepts that will get approval.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Comprehensive Approach from Meanings to Infrastructure</h3>
        <p style="color: var(--color-dark-text);">
          I work at all stages: from idea formulation and meaningful content to author's supervision during design and construction, so the original vision isn't lost in implementation.
        </p>
      </div>
      
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Focus on Engagement and Dialogue</h3>
        <p style="color: var(--color-dark-text);">
          Any concept is doomed without key stakeholder support. I build dialogue mechanisms with local communities and protected area teams into projects from the very beginning.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 6. PHOTO SECTION 2 -->
<section class="quote-section" style="min-height: 75vh; display: flex; align-items: center; justify-content: flex-end; background: linear-gradient(rgba(44, 46, 36, 0.75), rgba(44, 46, 36, 0.75)), url('{{ '/assets/images/sections/ymike.ru_3.3-1400w.webp' | relative_url }}') center center / cover no-repeat; background-attachment: scroll; color: var(--color-light-text); padding: var(--spacing-xxl) var(--spacing-md);">
  <div style="max-width: 850px; margin-right: 10%; text-align: left;">
    <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-md); line-height: 1.4;">
      4 Components of Ecological Tourism
    </h3>
    <blockquote style="font-size: var(--font-size-xl); line-height: 1.6; font-style: italic; border-left: 4px solid var(--color-add-acc); padding-left: var(--spacing-lg); margin: 0;">
      Every development I create is based on a system tested in practice:<br>1. Natural Character — authenticity and connection with wilderness as the main value.<br>2. Minimal and Controlled Impact — nature-saving infrastructure, monitoring of anthropogenic impact.<br>3. Conservation Effect — how will the project help nature conservation? (Through education, changing social norms, funding, etc.).<br>4. Social Integration — consideration of interests and benefits for the local community. This is not theory. This is a framework that makes a tourism project sustainable.
    </blockquote>
  </div>
</section>

<!-- 7. PROCESS / HOW IT WORKS -->
<section class="process-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-background);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-3-primary); margin-bottom: var(--spacing-md);">
      How Is a Concept Created?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-3-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      A Clear Process That Leads to a Concrete Result
    </p>
    
    <div class="process-grid">
      <!-- Stage 1 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">1</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Territory and Context Analysis</h3>
          <p style="color: var(--color-dark-text);">
            I study natural and cultural resources, infrastructure, target audience, regulatory frameworks. I conduct meetings with key stakeholders (administration, protected areas, business, local residents).
          </p>
        </div>
      </div>
      
      <!-- Stage 2 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">2</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Collaborative Vision Development</h3>
          <p style="color: var(--color-dark-text);">
            I help formulate the mission, goals, and principles of the future tourism product.
          </p>
        </div>
      </div>
      
      <!-- Stage 3 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">3</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Creating a Detailed Concept</h3>
          <p style="color: var(--color-dark-text);">
            I develop a document that includes: core meaning, detailed goal elaboration, thorough target audience analysis, developed thematics.
          </p>
        </div>
      </div>
      
      <!-- Stage 4 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">4</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Development of Planning and Spatial Solutions</h3>
          <p style="color: var(--color-dark-text);">
            Functional zoning and territory planning, spatial distribution of thematics, routing for target groups.
          </p>
        </div>
      </div>
      
      <!-- Stage 5 -->
      <div style="background: var(--color-add-bg); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-accent); position: relative; grid-column: span 2;">
        <div style="position: absolute; top: var(--spacing-md); left: var(--spacing-md); background: var(--color-accent); color: var(--color-light-text); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: var(--font-size-lg);">5</div>
        <div style="padding-left: 60px;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-sm);">Implementation Support (Optional)</h3>
          <p style="color: var(--color-dark-text);">
            I join the team and work with designers, engineers, interpreters.<br>I help preserve the original vision (author's supervision).
          </p>
        </div>
      </div>
    </div>
    
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-dark-text); margin-top: calc(var(--spacing-xl) / 2); max-width: 1200px; margin-left: auto; margin-right: auto;">
      <strong style="color: var(--color-accent);">Format and Timing:</strong> Concept development — 1-3 months, depending on facility complexity.
    </p>
  </div>
</section>

<!-- 7.5. SPECIAL CASE -->
<!-- 7.5.1. Heading + Subheading + Photo -->
<section id="kejs-3-0" style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <div class="special-case-intro">
      <!-- Text left -->
      <div>
        <h2 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md);">
          From a Dirt Road to a Visitor Center: How "Semibratka" Became a Model of Sustainable Tourism for Taganai National Park
        </h2>
        <p style="font-size: var(--font-size-lg); color: var(--color-3-secondary); line-height: 1.6;">
          Development of a concept that turned an unorganized visitation point into a popular facility that builds public support for the protected area and solves territory tasks.
        </p>
      </div>
      
      <!-- Photo right -->
      <div style="margin: 0; padding: 0; height: 100%;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_3.0-1200w.jpg' | relative_url }}" alt="Semibratka" style="width: 100%; height: 100%; border-radius: var(--radius-lg); display: block; margin: 0; object-fit: cover;">
      </div>
    </div>
  </div>
</section>

<!-- 7.5.2. Challenge (Problem "Before") -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-background);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7;">
      <span class="special-case-heading" style="color: var(--color-3-primary);">Challenge:</span> The "Seven Brothers" tract (Semibratka) is one of the main entrances to Taganai National Park, with annual park visitation of about 200,000 visitors. But Semibratka was "ground zero": a dirt road, spontaneous roadside parking, a network of trails leading deep into the protected area. There was no information, no infrastructure, no clear rules. The key challenge was conflicting interests: local residents saw it simply as a forest for picnics, hiking tourists saw it as a starting point without "extra" civilization, and the park couldn't fulfill its educational mission or manage the flow.
    </p>
  </div>
</section>

<!-- 7.5.3. Solution (Process) - DARK BLOCK -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-3-primary); color: var(--color-light-text);">
  <div class="container">
    <p style="color: var(--color-light-text); line-height: 1.7; margin-bottom: var(--spacing-md);">
      <span class="special-case-heading" style="color: var(--color-accent);">Solution:</span> I applied an original methodology where the focus is not on the facility, but on balancing territory goals and audience needs.
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95; margin-bottom: var(--spacing-md);">
      <strong>Step 1: Analysis Without Compromise.</strong> I thoroughly segmented all visitors (from Zlatoust residents to visiting tourists) and identified their true motives and "pain points." This allowed speaking to each group in their language.
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95; margin-bottom: var(--spacing-md);">
      <strong>Step 2: Design Through Synthesis.</strong> Instead of ultimatums, I created a concept that integrated all interests. For locals — comfortable parking, gazebos, and local history. For tourists — logical navigation and route information. For the park — a central element: a modern visitor center whose exposition doesn't "lecture" but engages through interactivity and emotions (for example, bird feeders right by the panoramic window).
    </p>
    
    <p style="color: var(--color-light-text); line-height: 1.7; opacity: 0.95;">
      <strong>Step 3: Focus on the Main Thing — Protected Area Support.</strong> Every element, from layout to text on displays, worked toward the key goal: to form visitor understanding and pride in the park, showing their personal role in nature conservation.
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
        <strong>For Visitors:</strong> It became a comfortable, modern, and interesting starting point. They get needed information easily and with pleasure.
      </li>
      <li style="margin-bottom: var(--spacing-sm); padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>For the Park:</strong> A powerful communication tool emerged. "Semibratka" now works on image, builds public support, and engages people in the conservation agenda.
      </li>
      <li style="padding-left: var(--spacing-lg); position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-accent); font-weight: 700;">✓</span>
        <strong>For the Territory:</strong> Conflict of interests resolved. Local residents are proud of the updated place, tourists received quality service, and the load on nature became manageable.
      </li>
    </ul>
  </div>
</section>

<!-- 7.5.5. Value for future client -->
<section style="padding: var(--spacing-lg) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <p style="color: var(--color-dark-text); line-height: 1.7; font-weight: 500; text-align: left; font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-lg);">
      This case is a ready-made algorithm for any territory facing tourism development. Whether it's a federal national park, a region planning a cluster, or a tourism business wanting to work with protected areas legally and sustainably. I don't just draw beautiful facilities. I create a social contract in the form of infrastructure: finding balance between audience demand, economics, and the conservation mission. If you need to turn a problematic place into a growth point that will bring income, loyalty, and real support to your goals — this methodology is your choice.
    </p>
  </div>
</section>

<!-- 8. IMPLEMENTED PROJECTS -->
<section class="projects-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-3-primary); color: var(--color-light-text);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-light-text); margin-bottom: var(--spacing-md);">
      How I Created Tourism Facility Concepts That Work for Business and Nature
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); opacity: 0.8; margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Real projects for tourism business and regional administrations where conservation requirements became an advantage, not a limitation. Each concept started with understanding the economic model and legal framework for sustainable development.
    </p>
    
    <div class="grid grid-3" style="gap: var(--spacing-md);">
      <!-- Case 3.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_3.1-800w.webp' | relative_url }}" alt="Case 3.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">"Gateway to Wild Kamchatka": How an Urban Visitor Center Became the Communication Hub for a Reserve and Tourism Business</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/tourism/#kejs-3-1' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 3.2 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_3.2-800w.webp' | relative_url }}" alt="Case 3.2" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Pasvik Reserve Visitor Center: ESG Partnership That Changes Attitudes Toward Nature</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/tourism/#kejs-3-2' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 2.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.1-800w.webp' | relative_url }}" alt="Case 2.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">Crisis Diagnostics: Sociological Study of the Tourism Boom in Teriberka</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/tourism/#kejs-2-1' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 2.3 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_2.3-800w.webp' | relative_url }}" alt="Case 2.3" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">How to Measure the Impact of a Reserve Visit: One of Russia's First Studies on the Conservation Effect of Protected Area Visits</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/tourism/#kejs-2-3' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
      
      <!-- Case 5.1 -->
      <div style="background: var(--color-background); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;">
        <img src="{{ '/assets/images/cases/ymike.ru_c_5.1-800w.webp' | relative_url }}" alt="Case 5.1" style="width: 100%; height: 200px; object-fit: cover;">
        <div style="padding: var(--spacing-md); display: flex; flex-direction: column; flex: 1;">
          <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md); font-size: var(--font-size-lg); line-height: 1.3;">From Specialist to Leader: How a 9-Month Program Taught Protected Area Staff to Create Projects at the Intersection of Ecology and Sociology</h3>
          <div style="margin-top: auto; text-align: right;">
            <a href="{{ '/en/tourism/#kejs-5-1' | relative_url }}" class="btn btn-secondary">Read Case</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 9. RESULTS -->
<section class="results-section" style="padding: var(--spacing-xxl) 0; background-color: var(--color-add-bg);">
  <div class="container">
    <h2 style="text-align: center; color: var(--color-3-primary); margin-bottom: var(--spacing-md);">
      What Will You Get in the End?
    </h2>
    <p style="text-align: center; font-size: var(--font-size-lg); color: var(--color-3-secondary); margin-bottom: 50px; max-width: 900px; margin-left: auto; margin-right: auto;">
      Concrete Product and Clarity Instead of Uncertainty
    </p>
    
    <div class="results-grid">
      <!-- Result 1 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md);">Detailed, Implementable Concept</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          Not a sketch or presentation, but a developed document that can be handed to contractors, used for obtaining funding and approvals. More than 15 such concepts have been developed, 5 — implemented as working facilities.
        </p>
      </div>
      
      <!-- Result 2 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md);">Risk Reduction and Resource Savings</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          You will avoid costly mistakes at the implementation stage because key decisions (including conservation effects) will be calculated and justified in advance.
        </p>
      </div>
      
      <!-- Result 3 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md);">Legitimacy and Stakeholder Support</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          A concept created considering the interests of protected areas, local residents, and administration will face less resistance and have more chances for successful launch.
        </p>
      </div>
      
      <!-- Result 4 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary);">
        <h3 style="color: var(--color-3-primary); margin-bottom: var(--spacing-md);">Clear Understanding of Next Steps</h3>
        <p style="color: var(--color-dark-text); line-height: 1.5;">
          You will receive not just an idea, but a scientifically grounded, step-by-step action plan: what to do, in what sequence, on what to pay attention to.
        </p>
      </div>
      
      <!-- Result 5 -->
      <div style="background: var(--color-background); padding: var(--spacing-lg); border-radius: var(--radius-lg); border-left: 4px solid var(--color-3-secondary); grid-column: span 2;">
        <p style="color: var(--color-dark-text); font-style: italic; border-left: 4px solid var(--color-accent); padding-left: var(--spacing-md);">
          <strong style="color: var(--color-3-primary);">Honestly about the main thing:</strong> I create a professional Concept of a tourism product. Its implementation depends on many factors: funding, team, client's will. But with a quality concept you start not from a blank sheet, but with a detailed map that multiplies your chances of success.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- 10. FINAL CALL TO ACTION -->
<section id="contact" class="contact-section" style="padding: calc(var(--spacing-xxl) * 2 / 3) 0; background-color: var(--color-3-primary); color: var(--color-light-text); text-align: center;">
  <div class="container">
    <h2 style="color: var(--color-add-acc); margin-bottom: var(--spacing-md); font-size: var(--font-size-3xl);">
      Need a Concept That Will Work?
    </h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-lg); opacity: 0.9; line-height: 1.8;">
      Describe your task: developing a new tourism product, creating a visitor center, planning activity on a natural territory. I'll study the request and tell you how together we can create a concrete, viable concept.
    </p>
    <a href="#consult-modal" class="btn btn-primary js-open-consult-modal" style="font-size: var(--font-size-lg); padding: var(--spacing-md) var(--spacing-xl);">
      Book a Consultation
    </a>
  </div>
</section>
