# Role: Senior Frontend Engineer & PWA Architect

## Core Objective
Transform the monolithic single-file application `telc-b1-study-plan.html` into a fully decoupled, responsive, and installable **Progressive Web App (PWA)**[cite: 1]. The app must transition from a static reference document into a time-aware, gamified daily task execution engine optimized for mobile viewing, featuring a radically immersive, hyper-focused "Zen Mode" for active task tracking.

---

## Part 1: Target File Architecture
Break out the original codebase into modular files across the following structure:
*   `index.html`: Core semantic markup and placeholder layout skeletons.
*   `styles.css`: Dark-theme palette (`#0e0e14`), systems layouts, interactive states, micro-animations, and responsive full-screen utilities[cite: 1].
*   `app.js`: State persistence, dynamic rendering pipelines, time-window calculation, and progress calculations.
*   `sw.js`: Service worker managing offline caching strategies for local shell assets.
*   `manifest.json`: Web app configurations required to pass PWA criteria for standalone mobile installation.

---

## Part 2: UI, UX & Layout Overhaul

### 1. Main Navigation Flow
*   Replace standard horizontal tabs with a clean, mobile-first **vertical navigation list** on the landing dashboard view:
    1.  Dashboard / Progress Overview
    2.  Phase 1: Foundation (Weeks 1-8)[cite: 1]
    3.  Phase 2: Core B1 Grammar (Weeks 9-18)[cite: 1]
    4.  Phase 3: Exam Skills Integration (Weeks 19-22)[cite: 1]
    5.  Phase 4: Mock Exams & Repair (Weeks 23-26)[cite: 1]
    6.  Full Curriculum Ledger[cite: 1]
    7.  Resource Repositories & PWA Prompts[cite: 1]

### 2. View-Mode State Toggle (The "Eye" Icon)
Beside each phase header block, place a highly interactive **Eye Icon** (SVG component). This button toggles the rendering engine between two completely different design systems:

#### 👁️ State A: Current Step Mode ("Zen Focus Card" — Default)
This view is engineered for absolute, distraction-free cognitive focus. 
*   **Immersive Scale:** The active task must expand to **take over the entire viewport page**, hiding the navigation, dashboard metrics, headers, and all downstream or upstream tasks completely.
*   **Minimalist Information Density:** Strip away all non-essential data. The screen must *only* present three massive visual components:
    1.  The time window/allotted duration (rendered in massive, high-contrast typography).
    2.  The structural title of the task (e.g., **"Duolingo"** or **"Grammar Book"**)[cite: 1].
    3.  A short, singular line of instruction text.
*   **Primary Action Button:** A massive, easily targetable, high-contrast **"Mark as Done"** action button positioned comfortably near the thumb at the bottom of the screen.

#### 📋 State B: Full Phase View Mode (Expanded Reference)
When toggled, the focus card collapses back into standard document flow, revealing the macro schedule sequence[cite: 1]. 
*   This view reveals **all supplementary information**: the entire comprehensive timeline sequence, external document anchor links, extended syntax instructions, phase resource suggestions, and prompt builder copy/paste boxes[cite: 1].

---

## Part 3: Functional & Behavioral Engine

### 1. Sequential Step Execution Pipeline
*   In *Current Step Mode*, the engine queries the current step configuration state. It renders *only* that file component block as a full-screen card.
*   When the user interacts with the **"Mark as Done"** mechanism:
    *   Trigger an immediate CSS out-fade transition animation.
    *   Save the checked item state ID directly into `localStorage`.
    *   Instantly swap the card node contents to reveal the exact next step inline in the sequence.

### 2. Smart Time-Slicing Window (17:00 Boundary Rule)
The runtime lifecycle engine automatically monitors the system's local hours to isolate daily tasks:
*   **Condition A (System Time < 17:00 / 5:00 PM):** The viewport automatically displays only the **Morning Block** workflow data arrays[cite: 1].
*   **Condition B (System Time ≥ 17:00 / 5:00 PM):** The application changes states automatically, purging the morning flow to construct the **Evening/Night Block** layout components[cite: 1].

### 3. Automated 24-Hour State Reset Cycle
*   Save completion timestamps, active streak numbers, and item validation states directly into `localStorage`.
*   Upon application initialization, check if the real-time calendar date has advanced beyond the timestamp recorded during the last logged user execution.
*   If the date has changed, **automatically trigger an atomic app reset**. This flushes out the transient check-boxes from the previous calendar day and brings the user straight back to Step 1 of the appropriate morning time block, preserving only the macro user streak values.

---

## Part 4: Behavioral Psychology Dashboard
To visually reward progress and optimize accountability loops, the home landing screen must feature high-impact, programmatic UI components reading raw `localStorage` states:

*   **Dopamine Progress Ring:** An elegant, large SVG circular track element that scales dynamically as individual tasks are checked off within the current time slice. 
*   **Habit Streak Counter:** A prominent gamified counter tracking consecutive successful study dates, glowing with distinct CSS animations once the daily cycle checks are completed.

---

## Part 5: Execution Instructions
1.  Review `telc-b1-study-plan.html` to systematically scrape all time allocations, text descriptions, tool structures, JSON variables, and phase themes[cite: 1].
2.  Produce cleanly separated web production assets (`html`, `css`, `js`, `sw`) using clean, framework-free vanilla APIs.
3.  Ensure touch layouts use modern layout techniques (`flexbox`, `grid`, `viewport units`) ensuring the full-screen focus cards adapt natively to diverse mobile screen formats.