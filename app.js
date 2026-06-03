/* ═══════════════════════════════════════════════
   telc B1 Study Plan — App Engine
   ═══════════════════════════════════════════════ */

// ── DATA ──────────────────────────────────────

const PHASES = [
  {
    id: 'p1', label: 'Phase 1: Foundation', weeks: 'Weeks 1–8', icon: '🔤',
    desc: 'Core grammar · basic sentence production · 600–800 new words',
    badge: 'WEEKS 1–8 · A1 → A2',
    schedule: {
      morning: {
        label: '☀️ Morning Block', cls: 'am', dur: '90 min',
        items: [
          { time: '00–15', name: 'Duolingo', detail: 'Daily habit — speaking & listening base', tags: [] },
          { time: '15–45', name: 'Grammar Book', detail: 'Study 1 new concept from this week\'s grammar focus', tags: ['BOOK'] },
          { time: '45–65', name: 'PWA Drill', detail: 'W1–3: Verb App (Präsens) · W4–5: Cases App (Nom/Acc) · W6–8: both', tags: ['PWA'] },
          { time: '65–90', name: 'Flashcards — New Words', detail: 'Add & drill 15–20 new words from this week\'s vocabulary theme', tags: ['PWA'] }
        ]
      },
      evening: {
        label: '🌙 Evening Block', cls: 'pm', dur: '90 min',
        items: [
          { time: '00–20', name: 'Flashcards — Review', detail: 'Yesterday\'s set · unlock gender & plural quizzes', tags: ['PWA'] },
          { time: '20–45', name: 'Reading — Authentic Text', detail: 'A2-level (DW Nicos Weg, einfach-deutsch.com) · note unknowns for next flashcard batch', tags: [] },
          { time: '45–65', name: 'QCM App', detail: 'Comprehension + grammar check on this week\'s theme', tags: ['PWA'] },
          { time: '65–90', name: 'Writing Practice', detail: 'Write 5–8 sentences using today\'s grammar concept. Check with AI.', tags: [] }
        ]
      },
      listening: {
        label: '🎧 Listening Slot — flexible, any time of day', cls: 'listen', dur: '20–30 min',
        items: [
          { time: '20–30 min', name: 'Listening Slot', detail: 'DW Nicos Weg (video + exercises, A1–B1, free) · Duolingo Stories (A1–A2) · DW Langsam gesprochen (slow daily news) · YouTube: "Deutsch für Euch" A1 lessons', tags: [] }
        ]
      }
    },
    grammar: [
      { wk: 'WEEK 1', topic: 'Present tense — regular -en verbs · all persons (ich/du/er/wir/ihr/Sie)' },
      { wk: 'WEEK 2', topic: 'sein · haben · werden + irregular Präsens (fahren, sehen, lesen, sprechen…)' },
      { wk: 'WEEK 3', topic: 'Modal verbs Präsens: können, müssen, wollen, dürfen, sollen, mögen' },
      { wk: 'WEEK 4', topic: 'Nominative case — definite & indefinite articles + personal pronouns' },
      { wk: 'WEEK 5', topic: 'Accusative case — den / einen + direct object pronouns' },
      { wk: 'WEEK 6', topic: 'Negation (nicht vs kein) + V2 word order + time–manner–place rule' },
      { wk: 'WEEK 7', topic: 'Noun plurals — 5 main patterns (‑e, ‑er, ‑en/‑n, Umlaut, no change)' },
      { wk: 'WEEK 8', topic: 'Perfekt intro — haben/sein auxiliary + Partizip II (top 30 common verbs)' }
    ],
    vocab: [
      { icon: '👤', name: 'Myself & Family', weeks: 'W1–W2' },
      { icon: '🏠', name: 'Home & Routine', weeks: 'W3–W4' },
      { icon: '🛒', name: 'Food & Shopping', weeks: 'W5–W6' },
      { icon: '🚌', name: 'Transport & Travel', weeks: 'W7–W8' }
    ]
  },
  {
    id: 'p2', label: 'Phase 2: Core B1 Grammar', weeks: 'Weeks 9–18', icon: '📚',
    desc: 'Dative · prepositions · subordinate clauses · Konjunktiv II · +600 new words',
    badge: 'WEEKS 9–18 · A2 → B1',
    schedule: {
      morning: {
        label: '☀️ Morning Block', cls: 'am', dur: '90 min',
        items: [
          { time: '00–15', name: 'Duolingo', detail: 'Daily habit maintenance', tags: [] },
          { time: '15–40', name: 'Grammar Book', detail: 'Study this week\'s concept (Dative, prepositions, subordinate clauses…)', tags: ['BOOK'] },
          { time: '40–65', name: 'Cases App — Dative Focus', detail: 'Generate 20+ Dative-specific JSON entries via AI each week. Mix Nom/Acc/Dat once Dative is solid (W13+).', tags: ['PWA'] },
          { time: '65–90', name: 'Flashcards — New Words', detail: '15–20 new words from this week\'s theme', tags: ['PWA'] }
        ]
      },
      evening: {
        label: '🌙 Evening Block', cls: 'pm', dur: '90 min',
        items: [
          { time: '00–15', name: 'Flashcards — Review', detail: 'Previous batch + gender/plural quizzes', tags: ['PWA'] },
          { time: '15–40', name: 'Reading — B1 Text', detail: 'Nachrichtenleicht.de or DW B1 — underline unknowns, add to next flashcard batch', tags: [] },
          { time: '40–65', name: 'QCM App', detail: 'B1-level questions on current grammar + vocabulary', tags: ['PWA'] },
          { time: '65–90', name: 'Writing — Short Email/Paragraph', detail: '80–120 words using this week\'s grammar (Dative verbs, subordinate clauses…). AI check after.', tags: [] }
        ]
      },
      listening: {
        label: '🎧 Listening Slot', cls: 'listen', dur: '30 min',
        items: [
          { time: '30 min', name: 'Listening Slot', detail: 'Slow German Podcast (transcript available, slowgerman.com) · Easy German YouTube (real dialogues, dual subtitles) · DW Langsam gesprochen · Start sampling official telc Hörverstehen audio for format awareness', tags: [] }
        ]
      }
    },
    grammar: [
      { wk: 'WEEK 9', topic: 'Perfekt — all regular weak verbs (ge-…-t pattern) · full drills' },
      { wk: 'WEEK 10', topic: 'Perfekt — strong/irregular (ge-…-en) + trennbare & untrennbare Verben' },
      { wk: 'WEEK 11', topic: 'Dative case — articles (dem/der/dem/den · einem/einer/einem) + indirect objects' },
      { wk: 'WEEK 12', topic: 'Dative personal pronouns (mir/dir/ihm…) + Dative verbs: helfen, gefallen, gehören, zeigen, geben' },
      { wk: 'WEEK 13', topic: 'Accusative prepositions: durch, für, gegen, ohne, um' },
      { wk: 'WEEK 14', topic: 'Dative prepositions: aus, bei, mit, nach, seit, von, zu, gegenüber' },
      { wk: 'WEEK 15', topic: 'Two-way prepositions (an/auf/in/neben/über/unter/vor/hinter/zwischen) — position (Dat) vs. movement (Acc)' },
      { wk: 'WEEK 16', topic: 'Subordinate clauses: weil, dass, wenn, ob, obwohl — verb moves to end' },
      { wk: 'WEEK 17', topic: 'Konjunktiv II: würde + Infinitiv · hätte · wäre · könnte · müsste' },
      { wk: 'WEEK 18', topic: 'Genitive case + Präteritum of sein, haben, and modal verbs only' }
    ],
    vocab: [
      { icon: '🏥', name: 'Health & Body', weeks: 'W9–W10' },
      { icon: '💼', name: 'Work & Education', weeks: 'W11–W12' },
      { icon: '🎭', name: 'Free Time & Culture', weeks: 'W13–W14' },
      { icon: '🌿', name: 'Environment & Nature', weeks: 'W15–W16' },
      { icon: '📱', name: 'Technology & Media', weeks: 'W17–W18' }
    ]
  },
  {
    id: 'p3', label: 'Phase 3: Exam Skills Integration', weeks: 'Weeks 19–22', icon: '🎯',
    desc: 'All 5 exam sections drilled in exact telc format · timed · scored',
    badge: 'WEEKS 19–22 · B1 Readiness',
    schedule: {
      morning: {
        label: '☀️ Morning Block', cls: 'am', dur: '90 min',
        items: [
          { time: '00–30', name: 'Sprachbausteine Drill', detail: 'Gap-fill format from telc Übungstest 1 & 2. Score yourself. Also use QCM App for extra reps.', tags: ['PWA'] },
          { time: '30–65', name: 'Leseverstehen Practice', detail: 'Rotate daily: W19 → Teil 1 · W20 → Teil 2 · W21 → Teil 3 · W22 → full section timed', tags: [] },
          { time: '65–90', name: 'Vocabulary Review', detail: 'Flashcards: B1 connectors + authorities vocabulary + exam-frequency words', tags: ['PWA'] }
        ]
      },
      evening: {
        label: '🌙 Evening Block', cls: 'pm', dur: '90 min',
        items: [
          { time: '00–30', name: 'Hörverstehen Drill', detail: 'Official telc sample audio (YouTube / Übungstest PDF). Practice T/F and MC format — don\'t pause the audio.', tags: [] },
          { time: '30–60', name: 'Schriftlicher Ausdruck — Timed', detail: 'Set timer to exactly 30 min. Write a full letter addressing all 4 bullet points. Check with AI against telc criteria after.', tags: [] },
          { time: '60–90', name: 'Mündliche Prüfung Prep', detail: 'Teil 1: self-intro · Teil 2: topic monologue from card · Teil 3: planning dialogue. Use AI voice or shadowing technique.', tags: [] }
        ]
      },
      listening: {
        label: '🎧 Listening Slot', cls: 'listen', dur: '30 min',
        items: [
          { time: '30 min', name: 'Listening Slot', detail: 'Search YouTube: "telc Deutsch B1 Hörverstehen" for official sample audio · Practice answering T/F and MC while the audio plays — no pausing · Focus on predicting question types before the recording starts', tags: [] }
        ]
      }
    },
    grammar: [],
    vocab: [
      { icon: '🏛️', name: 'Authorities & Bureaucracy', weeks: 'W19–W20' },
      { icon: '🔗', name: 'Connectors & Discourse', weeks: 'W21–W22' }
    ]
  },
  {
    id: 'p4', label: 'Phase 4: Mock Exams & Repair', weeks: 'Weeks 23–26', icon: '🏁',
    desc: 'Weekly full tests · identify weak sections · targeted drilling · rest before exam',
    badge: 'WEEKS 23–26 · Final Prep',
    schedule: {
      morning: {
        label: 'Repair: Leseverstehen < 60%', cls: 'am', dur: '',
        items: [
          { time: 'Fix', name: 'Leseverstehen', detail: 'Practice the 3 Teil formats separately with new texts. Train skimming (Teil 1), close reading (Teil 2), scanning (Teil 3). Use Nachrichtenleicht.de daily.', tags: [] }
        ]
      },
      evening: {
        label: 'Repair: Sprachbausteine < 60%', cls: 'pm', dur: '',
        items: [
          { time: 'Fix', name: 'Sprachbausteine', detail: 'Identify which grammar rule you got wrong. Generate fresh JSON for Cases App + Verb App targeting that rule. 30 min/day intensive drill.', tags: [] }
        ]
      },
      listening: {
        label: 'Repair: Schriftl. Ausdruck < 60%', cls: 'listen', dur: '',
        items: [
          { time: 'Fix', name: 'Schriftlicher Ausdruck', detail: '1 timed letter per day. Ask AI to score it against telc\'s 3 criteria: task completion · communicative design · grammatical accuracy. Focus on the lowest.', tags: [] }
        ]
      }
    },
    extraBlocks: [
      {
        label: 'Repair: Hörverstehen < 60%', cls: 'blue-block', dur: '',
        items: [
          { time: 'Fix', name: 'Hörverstehen', detail: 'Daily telc-format audio drills (30 min, no pausing). This is a vocabulary + attention issue more than a pure listening problem — continue vocab review in parallel.', tags: [] }
        ]
      },
      {
        label: '📅 Weekly Structure', cls: 'full', dur: '',
        items: [
          { time: 'Sun', name: 'Full Mock Test', detail: 'Full telc Übungstest — written portion (2.5 hours, timed, no interruptions). Score yourself section by section. Note any section below 60%.', tags: [] },
          { time: 'Mon–Sat', name: 'Targeted Repair', detail: '1h on weakest section from Sunday · 1h PWA apps on lowest-scoring grammar · 1h writing practice + speaking practice', tags: [] },
          { time: 'W26', name: 'Light Review', detail: 'No more mock tests. Light review only — max 1h/day. Prioritize sleep and rest.', tags: [] }
        ]
      }
    ]
  }
];

const EXAM_DATA = {
  sections: [
    { pts: 75, unit: 'pts', name: 'Leseverstehen', time: '~60 min' },
    { pts: 50, unit: 'pts', name: 'Sprachbausteine', time: '~30 min' },
    { pts: 75, unit: 'pts', name: 'Hörverstehen', time: '~30 min' },
    { pts: 45, unit: 'pts', name: 'Schriftl. Ausdruck', time: '30 min' },
    { pts: 75, unit: 'pts', name: 'Mündl. Prüfung', time: '~15 min' }
  ],
  passWritten: { need: 135, total: 225 },
  passOral: { need: 45, total: 75 },
  breakdowns: [
    { cls: '', color: 'gold', title: 'Leseverstehen', text: '3 parts: (1) Match 5 texts to headlines from a list of 10 · (2) MC comprehension on a longer article · (3) Match 10 people\'s needs to 12 classified ads' },
    { cls: 'orange', color: 'orange', title: 'Sprachbausteine', text: '2 parts: (1) Paragraph with 10 blanks, choose from 4 MC options each · (2) 10 blanks, choose from a pool of 15 words (prepositions, connectors, verb forms)' },
    { cls: 'green', color: 'green', title: 'Hörverstehen', text: '3 parts: (1) T/F on a radio interview (heard once) · (2) MC on 5 short dialogues · (3) Statement matching on a longer monologue' },
    { cls: 'blue', color: 'blue', title: 'Schriftlicher Ausdruck', text: 'Write a semi-formal letter/email (~150–200 words) in exactly 30 min. Must address all 4 given bullet points. Scored on task completion, communicative design, grammatical accuracy.' },
    { cls: '', color: 'gold', title: 'Mündliche Prüfung', text: 'Teil 1: self-introduction (3-4 min) · Teil 2: discuss a topic from a card (5-6 min) · Teil 3: plan something collaboratively (5-6 min)' }
  ],
  toolkits: [
    { cls: 'green', strong: 'Strong:', text: 'Cases App → Sprachbausteine declension gaps + Writing · Verb App → Sprachbausteine verb forms · Flashcards + Gender/Plural → vocabulary across all sections · QCM App → mirrors Sprachbausteine MC format · Grammar Book → systematic Sprachbausteine + Writing prep' },
    { cls: 'orange', strong: 'Gaps covered by this plan:', text: 'Hörverstehen (dedicated time slot + methods) · Schriftlicher Ausdruck (daily timed writing in Phase 2–3) · Mündliche Prüfung (time slot + speaking methods in Phase 3) · Authentic B1 reading texts (Nachrichtenleicht, DW B1 — Phase 2+)' }
  ]
};

const CURRICULUM = [
  { wk: 'W1', grammar: 'Present tense — regular -en verbs (all persons)', vocab: 'Myself & Family', phase: 'p1' },
  { wk: 'W2', grammar: 'sein · haben · werden + irregular Präsens', vocab: 'Myself & Family', phase: 'p1' },
  { wk: 'W3', grammar: 'Modal verbs Präsens (können, müssen, wollen, dürfen, sollen, mögen)', vocab: 'Home & Routine', phase: 'p1' },
  { wk: 'W4', grammar: 'Nominative case — articles + personal pronouns', vocab: 'Home & Routine', phase: 'p1' },
  { wk: 'W5', grammar: 'Accusative case — den / einen + direct object pronouns', vocab: 'Food & Shopping', phase: 'p1' },
  { wk: 'W6', grammar: 'Negation (nicht vs kein) + V2 word order + time–manner–place', vocab: 'Food & Shopping', phase: 'p1' },
  { wk: 'W7', grammar: 'Noun plurals — 5 patterns + Umlaut changes', vocab: 'Transport & Travel', phase: 'p1' },
  { wk: 'W8', grammar: 'Perfekt intro — haben/sein + Partizip II (top 30 verbs)', vocab: 'Transport & Travel', phase: 'p1' },
  { wk: 'W9', grammar: 'Perfekt — all regular weak verbs (ge-…-t)', vocab: 'Health & Body', phase: 'p2' },
  { wk: 'W10', grammar: 'Perfekt — strong/irregular (ge-…-en) + trennbare Verben', vocab: 'Health & Body', phase: 'p2' },
  { wk: 'W11', grammar: 'Dative case — articles (dem/der/dem/den) + indirect objects', vocab: 'Work & Education', phase: 'p2' },
  { wk: 'W12', grammar: 'Dative pronouns + Dative verbs (helfen, gefallen, gehören, zeigen…)', vocab: 'Work & Education', phase: 'p2' },
  { wk: 'W13', grammar: 'Accusative prepositions: durch, für, gegen, ohne, um', vocab: 'Free Time & Culture', phase: 'p2' },
  { wk: 'W14', grammar: 'Dative prepositions: aus, bei, mit, nach, seit, von, zu, gegenüber', vocab: 'Free Time & Culture', phase: 'p2' },
  { wk: 'W15', grammar: 'Two-way prepositions — position (Dative) vs. movement (Accusative)', vocab: 'Environment & Nature', phase: 'p2' },
  { wk: 'W16', grammar: 'Subordinate clauses: weil, dass, wenn, ob, obwohl (verb-final)', vocab: 'Environment & Nature', phase: 'p2' },
  { wk: 'W17', grammar: 'Konjunktiv II: würde + Inf · hätte · wäre · könnte · müsste', vocab: 'Technology & Media', phase: 'p2' },
  { wk: 'W18', grammar: 'Genitive case + Präteritum of sein/haben/modals only', vocab: 'Technology & Media', phase: 'p2' },
  { wk: 'W19', grammar: 'Exam format: Sprachbausteine + Leseverstehen Teil 1 & 2', vocab: 'Authorities & Bureaucracy', phase: 'p3' },
  { wk: 'W20', grammar: 'Exam format: Leseverstehen Teil 3 + Sprachbausteine Teil 2', vocab: 'Authorities & Bureaucracy', phase: 'p3' },
  { wk: 'W21', grammar: 'Exam format: Full Hörverstehen (all 3 parts) + Schriftlicher Ausdruck', vocab: 'Connectors & Discourse', phase: 'p3' },
  { wk: 'W22', grammar: 'Full written integration + Mündliche Prüfung structure', vocab: 'Connectors & Discourse', phase: 'p3' },
  { wk: 'W23', grammar: 'Mock Test 1 (Sunday) + targeted weak-area repair Mon–Sat', vocab: 'Review all', phase: 'p4' },
  { wk: 'W24', grammar: 'Mock Test 2 (Sunday) + targeted weak-area repair Mon–Sat', vocab: 'Review all', phase: 'p4' },
  { wk: 'W25', grammar: 'Mock Test 3 (Sunday) + final targeted repair Mon–Sat', vocab: 'Review all', phase: 'p4' },
  { wk: 'W26', grammar: 'Light review only — max 1h/day. Rest before exam.', vocab: '—', phase: 'p4' }
];

const RESOURCES = [
  { icon: '🎬', name: 'DW Nicos Weg', desc: 'Interactive A1–B1 video series. Free. Covers all telc B1 life topics following one character through Germany. Start here in Phase 1.', link: 'learngerman.dw.com → Nicos Weg', url: 'https://learngerman.dw.com/de/nicos-weg/s-56100919' },
  { icon: '📡', name: 'DW Deutsch — Langsam gesprochen', desc: 'Daily news in slow, clear German. Free. Full transcript provided. Good for Phase 1–2 listening habit.', link: 'dw.com → Langsam gesprochen', url: 'https://www.dw.com/de/deutsch-lernen/nachrichten/s-8030' },
  { icon: '🐢', name: 'Slow German Podcast', desc: 'Short cultural episodes (~8–12 min) at slow-medium speed. Full transcripts on site. Great for Phase 2 — real content, manageable pace.', link: 'slowgerman.com', url: 'https://slowgerman.com' },
  { icon: '🎤', name: 'Easy German YouTube', desc: 'Real street conversations with dual German/English subtitles. Natural pace. Good for Phase 2–3 for both listening modeling and speaking technique.', link: 'youtube.com/@EasyGerman', url: 'https://www.youtube.com/@EasyGerman' },
  { icon: '📰', name: 'Nachrichtenleicht.de', desc: 'Weekly news written at B1 level + audio. Authentic vocabulary, real topics. Perfect for Phase 2+ reading practice. Covers telc B1 themes directly.', link: 'nachrichtenleicht.de', url: 'https://www.nachrichtenleicht.de' },
  { icon: '📋', name: 'telc Übungstest 1 (Official Free PDF)', desc: 'Official practice test with answer key. Essential for Phase 3–4. Contains all written sections + Schriftlicher Ausdruck model.', link: 'Direct PDF Download', url: 'https://shop.telc.net/media/catalog/product/file/telc_deutsch_b1_zd_uebungstest_1.pdf' },
  { icon: '🗣️', name: 'Speaking: Shadowing Technique', desc: 'Pick an Easy German or DW clip → listen once → replay and speak simultaneously, mirroring rhythm and intonation. 10 min/day is sufficient. Best for Mündliche Prüfung fluency.', link: '', url: '' },
  { icon: '🤖', name: 'AI Voice Conversation (Claude / Gemini)', desc: 'For Mündliche Prüfung Teil 2 practice: prompt the AI to act as examiner, give you a topic card, and react to your answers. Use in Phase 3–4.', link: '', url: '' }
];

const PROMPTS = [
  {
    app: 'FLASHCARDS APP',
    id: 'fc',
    text: `Generate [NUMBER] German vocabulary flashcard entries as a JSON array for the theme [THEME].

Each entry must have exactly these keys:
- "article": "der" | "die" | "das"
- "german": the noun in singular form
- "english": English translation
- "plural": plural form WITH article (e.g. "die Häuser")

Only include nouns. Return only the JSON array, no extra text or markdown.`
  },
  {
    app: 'VERB CONJUGATION APP',
    id: 'verb',
    text: `Generate [NUMBER] German verb conjugation drill entries as a JSON array.

Tense: [TENSE — e.g. Präsens / Perfekt / Konjunktiv II]
Verbs to include: [LIST — e.g. gehen, kommen, schreiben, lesen, fahren]

Each entry must have exactly these keys:
- "verb": the infinitive form
- "phrase": full sentence with the blank shown as ___
- "answer": the correct conjugated form that fills the blank
- "english": full English sentence translation

Return only the JSON array, no extra text or markdown.`
  },
  {
    app: 'CASES APP',
    id: 'cases',
    text: `Generate [NUMBER] German case drill entries as a JSON array.

Focus case: [e.g. Accusative / Dative / mixed Accusative+Dative]
Include genders: [e.g. Masculine and Neuter / all four]

Each entry must have exactly these keys:
- "part1": beginning of the sentence (string, end with a space before the blank)
- "part2": rest of the sentence after the blank
- "answer": the correct article (e.g. "den" / "dem" / "einer")
- "case": case name in English (Accusative / Dative / Nominative / Genitive)
- "gender": noun gender (Masculine / Feminine / Neuter / Plural)
- "translation": full English sentence

Return only the JSON array, no extra text or markdown.`
  },
  {
    app: 'QCM APP',
    id: 'qcm',
    text: `Generate [NUMBER] German multiple-choice quiz entries as a JSON array.

Topic / Grammar Focus: [e.g. Dative verbs / Perfekt tense / B1 vocabulary — health theme]
Difficulty: B1 level

Each entry must have exactly these keys:
- "german": the German sentence or phrase to evaluate
- "english": correct English meaning
- "question": the MC question to ask (e.g. "What does this sentence mean?")
- "choices": array of exactly 4 strings (correct answer + 3 plausible distractors)
- "correct": the correct answer (must exactly match one entry in choices)

Return only the JSON array, no extra text or markdown.`
  }
];

const PHASE_DOT = { p1: 'p1', p2: 'p2', p3: 'p3', p4: 'p4' };
const PHASE_LABEL = { p1: 'Foundation', p2: 'B1 Grammar', p3: 'Exam Skills', p4: 'Mock Tests' };

// ── STATE ─────────────────────────────────────

const STORAGE_KEY = 'telc-b1-state';

function defaultState() {
  return {
    done: {},
    streak: 0,
    lastDate: null,
    zenPhase: null
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const s = JSON.parse(raw);
    // auto-reset if date changed
    const today = todayStr();
    if (s.lastDate !== today) {
      s.done = {};
      s.lastDate = today;
      saveState(s);
    }
    return s;
  } catch {
    return defaultState();
  }
}

function saveState(s) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {}
}

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function isEvening() {
  return new Date().getHours() >= 17;
}

// ── DOM REFS ──────────────────────────────────

const $ = id => document.getElementById(id);
const qs = (sel, ctx) => (ctx || document).querySelector(sel);
const qsa = (sel, ctx) => (ctx || document).querySelectorAll(sel);

// ── RENDER ENGINE ─────────────────────────────

let state = loadState();

function getAllSteps(phaseId) {
  const ph = PHASES.find(p => p.id === phaseId);
  if (!ph) return [];
  const steps = [];
  const blocks = isEvening()
    ? [ph.schedule.evening, ph.schedule.listening]
    : [ph.schedule.morning, ph.schedule.listening];
  blocks.forEach(block => {
    (block.items || []).forEach(item => {
      steps.push({ ...item, phaseId, blockLabel: block.label, blockCls: block.cls });
    });
  });
  // Add extra blocks for p4
  if (ph.extraBlocks) {
    ph.extraBlocks.forEach(block => {
      (block.items || []).forEach(item => {
        steps.push({ ...item, phaseId, blockLabel: block.label, blockCls: block.cls });
      });
    });
  }
  return steps;
}

function stepKey(phaseId, name) {
  return `${phaseId}::${name}`;
}

function isDone(key) {
  return !!state.done[key];
}

function markDone(key) {
  state.done[key] = true;
  state.lastDate = todayStr();
  saveState(state);
}

function getTotalSteps(phaseId) {
  return getAllSteps(phaseId).length;
}

function getCompletedSteps(phaseId) {
  return getAllSteps(phaseId).filter(s => isDone(stepKey(s.phaseId, s.name))).length;
}

// ── NAVIGATION ────────────────────────────────

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard / Progress', icon: '📊', weeks: '' },
  { id: 'p1', label: 'Phase 1: Foundation', icon: '🔤', weeks: 'Weeks 1-8' },
  { id: 'p2', label: 'Phase 2: Core B1 Grammar', icon: '📚', weeks: 'Weeks 9-18' },
  { id: 'p3', label: 'Phase 3: Exam Skills', icon: '🎯', weeks: 'Weeks 19-22' },
  { id: 'p4', label: 'Phase 4: Mock Exams & Repair', icon: '🏁', weeks: 'Weeks 23-26' },
  { id: 'curr', label: 'Full Curriculum Ledger', icon: '📋', weeks: '' },
  { id: 'res', label: 'Resources & Prompts', icon: '📦', weeks: '' }
];

function renderNav() {
  const el = $('sidebar');
  el.innerHTML = NAV_ITEMS.map(item => `
    <div class="nav-item${item.id === currentView ? ' active' : ''}" data-view="${item.id}">
      <span class="nav-icon">${item.icon}</span>
      <span class="nav-label">${item.label}</span>
      ${item.weeks ? `<span class="nav-weeks">${item.weeks}</span>` : ''}
    </div>
  `).join('');
  el.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', () => {
      navigateTo(el.dataset.view);
      if (window.innerWidth <= 768) {
        $('sidebar').classList.remove('open');
        $('sidebar-backdrop').classList.remove('open');
      }
    });
  });
}

let currentView = 'dashboard';

function navigateTo(view) {
  currentView = view;
  // hide all panels
  qsa('.main-panel').forEach(p => p.classList.add('hidden'));
  // show target panel
  const panel = $(`panel-${view}`);
  if (panel) panel.classList.remove('hidden');
  // update nav
  renderNav();
  // render content if not dashboard
  if (view === 'dashboard') renderDashboard();
  else if (view === 'curr') renderCurriculum();
  else if (view === 'res') renderResources();
  else renderPhase(view);
}

// ── DASHBOARD ─────────────────────────────────

function renderDashboard() {
  const el = $('panel-dashboard');
  if (!el) return;

  const phases = PHASES.map(ph => {
    const t = getTotalSteps(ph.id);
    const d = getCompletedSteps(ph.id);
    return { ...ph, total: t, done: d, pct: t > 0 ? Math.round((d / t) * 100) : 0 };
  });

  const total = phases.reduce((s, p) => s + p.total, 0);
  const done = phases.reduce((s, p) => s + p.done, 0);
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const circumference = 289.03;
  const offset = circumference - (pct / 100) * circumference;
  const streak = state.streak || 0;
  const timeBlock = isEvening() ? '🌙 Evening Block' : '☀️ Morning Block';

  el.innerHTML = `
    <div class="breadcrumb">
      <span>Dashboard</span>
      <span class="crumb-sep">›</span>
      <span class="crumb-current">Progress</span>
    </div>

    <div class="dashboard-layout">
      <div class="progress-column">
        <div class="progress-card ring-card${pct > 0 ? ' has-progress' : ''}">
          <div class="ring-svg-wrap">
            <svg class="ring-svg" viewBox="0 0 100 100">
              <circle class="ring-bg" cx="50" cy="50" r="46" />
              <circle class="ring-fg" cx="50" cy="50" r="46" style="stroke-dashoffset:${offset}" />
            </svg>
            <div class="ring-label">${pct}%</div>
          </div>
          <div class="ring-title">Today</div>
        </div>
        <div class="progress-card streak-card${streak > 0 ? ' streak-active' : ''}">
          ${streak > 0 ? '<div class="streak-fire">🔥</div>' : ''}
          <div class="streak-num${streak > 0 ? ' glowing' : ''}">${streak}</div>
          <div class="streak-unit">${streak === 1 ? 'day' : 'days'} streak</div>
        </div>
      </div>

      <div class="phase-list">
        ${phases.map(ph => `
          <div class="phase-list-item${ph.pct === 100 ? ' complete' : ''}" data-view="${ph.id}">
            <div class="phase-list-icon">${ph.icon}</div>
            <div class="phase-list-info">
              <div class="phase-list-name">${ph.label}</div>
              <div class="phase-list-meta">${ph.weeks}</div>
            </div>
            <div class="phase-list-progress">
              <div class="phase-list-bar">
                <div class="phase-list-bar-fill" style="width:${ph.pct}%"></div>
              </div>
              <span>${ph.done}/${ph.total}</span>
            </div>
            <div class="phase-list-arrow">›</div>
          </div>
        `).join('')}
      </div>
    </div>

    <p class="section-title" style="margin-top:18px">⏰ Current Time Block: ${timeBlock}</p>
  `;

  el.querySelectorAll('.phase-list-item').forEach(item => {
    item.addEventListener('click', () => navigateTo(item.dataset.view));
  });
}

// ── PHASE VIEW ────────────────────────────────

function renderPhase(phaseId) {
  const el = $(`panel-${phaseId}`);
  if (!el) return;
  const ph = PHASES.find(p => p.id === phaseId);
  if (!ph) return;

  const total = getTotalSteps(phaseId);
  const doneCount = getCompletedSteps(phaseId);

  // For p1-p3, the main block is morning or evening (always expanded).
  // For p4, there is no "main" block — all are repair items, render all collapsed.
  let mainBlock = null;
  let secondaryBlocks = [];
  if (phaseId === 'p4') {
    // p4: all blocks collapsed
    const allBlocks = [
      ph.schedule.morning,
      ph.schedule.evening,
      ph.schedule.listening,
      ...(ph.extraBlocks || [])
    ].filter(Boolean);
    secondaryBlocks = allBlocks;
  } else {
    mainBlock = isEvening() ? ph.schedule.evening : ph.schedule.morning;
    secondaryBlocks = [ph.schedule.listening].filter(Boolean);
  }

  const mainBlockHtml = mainBlock ? renderBlock(mainBlock, phaseId, 'full-block') : '';

  const secondaryHtml = secondaryBlocks.map(block => {
    const title = block.label.replace(/^[^\w]+/, '').trim();
    const content = renderBlock(block, phaseId, 'full-block');
    return renderCollapsible(`📦 ${title}`, content, false);
  }).join('');

  // Grammar collapsible
  let grammarCollapsible = '';
  if (ph.grammar && ph.grammar.length) {
    const grammarContent = `
      <div class="grammar-grid">
        ${ph.grammar.map(g => `
          <div class="gcard">
            <div class="wk">${g.wk}</div>
            <div class="topic">${g.topic}</div>
          </div>
        `).join('')}
      </div>
    `;
    grammarCollapsible = renderCollapsible(
      `📖 Grammar — Week by Week (${ph.grammar.length} weeks)`,
      grammarContent,
      false
    );
  }

  // Vocab collapsible
  let vocabCollapsible = '';
  if (ph.vocab && ph.vocab.length) {
    const vocabContent = `
      <div class="theme-list">
        ${ph.vocab.map(v => `
          <div class="titem">
            <div class="ticon">${v.icon}</div>
            <div>
              <div class="tname">${v.name}</div>
              <div class="tweeks">${v.weeks}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    vocabCollapsible = renderCollapsible(
      `📚 Vocabulary Themes (${ph.vocab.length})`,
      vocabContent,
      false
    );
  }

  const sectionLabel = mainBlock
    ? `Daily Schedule — ${isEvening() ? '🌙 Evening Block' : '☀️ Morning Block'}`
    : `Repair Matrix`;

  el.innerHTML = `
    <div class="phase-banner">
      <div>
        <h2>${ph.icon} ${ph.label} <small>${doneCount}/${total} done</small></h2>
        <p>${ph.desc}</p>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="phase-badge">${ph.badge}</span>
        <button class="eye-btn${state.zenPhase === phaseId ? ' active' : ''}" data-zen="${phaseId}" title="Zen Focus Mode">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </button>
      </div>
    </div>

    ${mainBlock ? `
      <p class="section-title">${sectionLabel}</p>
      <div class="schedule-grid">
        ${mainBlockHtml}
      </div>
    ` : ''}

    ${secondaryHtml}
    ${grammarCollapsible}
    ${vocabCollapsible}
  `;

  // Eye button
  el.querySelector('.eye-btn').addEventListener('click', function() {
    openZen(phaseId);
  });

  // Collapsible toggles
  el.querySelectorAll('.collapsible-header').forEach(h => {
    h.addEventListener('click', function() {
      this.parentElement.classList.toggle('open');
    });
  });

  // Schedule item click to mark done
  el.querySelectorAll('.sitem').forEach(item => {
    item.addEventListener('click', function(e) {
      if (e.button !== 0) return;
      const key = this.dataset.key;
      if (!key) return;
      if (isDone(key)) return;
      state.done[key] = true;
      state.lastDate = todayStr();
      saveState(state);
      this.classList.add('done', 'just-done');
      setTimeout(() => this.classList.remove('just-done'), 800);
      // burst confetti at the check icon position
      const icon = this.querySelector('.check-icon');
      if (icon) {
        const r = icon.getBoundingClientRect();
        celebrate(r.left + r.width / 2, r.top + r.height / 2, false);
      }
      if (currentView === 'dashboard') renderDashboard();
    });
  });
}

function renderCollapsible(title, contentHtml, isOpen) {
  return `
    <div class="collapsible${isOpen ? ' open' : ''}">
      <div class="collapsible-header">
        <span class="collapsible-arrow">▶</span>
        <span class="collapsible-title">${title}</span>
      </div>
      <div class="collapsible-body">${contentHtml}</div>
    </div>
  `;
}

function renderBlock(block, phaseId, extraClass = '') {
  if (!block || !block.items) return '';
  return `
    <div class="schedule-block${block.cls ? ' ' + block.cls : ''}${extraClass ? ' ' + extraClass : ''}">
      <div class="sblock-header">
        ${block.label}
        ${block.dur ? `<span class="dur">${block.dur}</span>` : ''}
      </div>
      ${block.items.map(item => {
        const sk = stepKey(phaseId, item.name);
        const done = isDone(sk);
        return `
          <div class="sitem${done ? ' done' : ''}" data-key="${sk}">
            <span class="check-icon"></span>
            <div class="stime">${item.time}</div>
            <div>
              <div class="sact-name">
                ${item.name}
                ${item.tags.map(t => `<span class="atag">${t}</span>`).join('')}
              </div>
              <div class="sact-detail">${item.detail}</div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ── CURRICULUM ────────────────────────────────

function renderCurriculum() {
  const el = $('panel-curr');
  if (!el) return;
  el.innerHTML = `
    <p class="section-title">26-Week Full Curriculum</p>
    <div class="curr-wrap">
      <table class="curr-table">
        <thead>
          <tr>
            <th>Week</th>
            <th>Grammar Focus</th>
            <th>Vocabulary Theme</th>
            <th>Phase</th>
          </tr>
        </thead>
        <tbody>
          ${CURRICULUM.map(row => `
            <tr>
              <td class="wk">${row.wk}</td>
              <td>${row.grammar}</td>
              <td>${row.vocab}</td>
              <td><span class="pdot ${PHASE_DOT[row.phase]}"></span>${PHASE_LABEL[row.phase]}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// ── RESOURCES ─────────────────────────────────

function renderResources() {
  const el = $('panel-res');
  if (!el) return;

  el.innerHTML = `
    <p class="section-title">Listening & Speaking Resources</p>
    ${RESOURCES.map(r => `
      <div class="res-item">
        <div class="res-icon">${r.icon}</div>
        <div>
          <div class="res-name">${r.name}</div>
          <div class="res-desc">${r.desc}</div>
          ${r.url ? `<a class="res-link" href="${r.url}" target="_blank">${r.link}</a>` : ''}
        </div>
      </div>
    `).join('')}

    <p class="section-title" style="margin-top:28px">JSON Prompt Templates for Your PWA</p>
    <div class="info-box" style="margin-bottom:18px">
      Paste these into any AI assistant. Replace the <span class="ph">[BRACKETS]</span> with your target topic or grammar, and get clean JSON ready to drop into your app.
    </div>
    ${PROMPTS.map(p => `
      <div class="prompt-box">
        <div class="prompt-header">
          <span class="prompt-appname">${p.app}</span>
          <button class="copy-btn" data-prompt="${p.id}">Copy</button>
        </div>
        <pre class="ptext" id="pt-${p.id}">${p.text}</pre>
      </div>
    `).join('')}
  `;

  el.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = this.dataset.prompt;
      const text = document.getElementById(`pt-${id}`).innerText;
      navigator.clipboard.writeText(text).then(() => {
        this.textContent = 'Copied!';
        this.classList.add('ok');
        setTimeout(() => {
          this.textContent = 'Copy';
          this.classList.remove('ok');
        }, 2000);
      });
    });
  });
}

// ── ZEN MODE ──────────────────────────────────

function openZen(phaseId) {
  state.zenPhase = phaseId;
  saveState(state);
  const steps = getAllSteps(phaseId);
  if (!steps.length) return;

  const overlay = $('zen-overlay');
  const closeBtn = $('zen-close');
  const content = $('zen-content');
  const doneBtn = $('zen-done-btn');
  const skipBtn = $('zen-skip-link');
  const title = $('zen-title');
  const subtitle = $('zen-subtitle');
  const phaseObj = PHASES.find(p => p.id === phaseId);

  let currentStepIdx = 0;
  let transitionActive = false;

  function findCurrentIdx() {
    for (let i = 0; i < steps.length; i++) {
      const sk = stepKey(phaseId, steps[i].name);
      if (!isDone(sk)) return i;
    }
    return steps.length - 1; // all done, show last
  }

  currentStepIdx = findCurrentIdx();

  function renderZenStep() {
    const step = steps[currentStepIdx];
    if (!step) { closeZen(); return; }

    title.textContent = step.name;
    // Subtitle = step detail (or phase fallback) — matches Duolingo "Daily habit — …" style
    const subText = (step.detail || '').replace(/\s+/g, ' ').trim();
    if (subText) {
      subtitle.textContent = subText;
      subtitle.style.display = '';
    } else if (phaseObj) {
      subtitle.textContent = `${phaseObj.label} — ${phaseObj.weeks}`;
      subtitle.style.display = '';
    } else {
      subtitle.style.display = 'none';
    }

    // Initialize / reset timer for this step
    initTimerForStep(step);

    // Update button text
    const sk = stepKey(phaseId, step.name);
    if (isDone(sk)) {
      doneBtn.textContent = 'Next →';
    } else {
      doneBtn.textContent = '✓ Done';
    }
  }

  function advanceStep(e) {
    if (transitionActive) return;
    if (e) spawnRipple(doneBtn, e);

    const step = steps[currentStepIdx];
    const sk = stepKey(phaseId, step.name);
    const wasDone = isDone(sk);

    if (!wasDone) {
      markDone(sk);
      const rect = doneBtn.getBoundingClientRect();
      celebrate(rect.left + rect.width / 2, rect.top + rect.height / 2, true);
      const allDone = steps.every(s => isDone(stepKey(s.phaseId, s.name)));
      if (allDone) {
        state.streak = (state.streak || 0) + 1;
        saveState(state);
      }
    }

    // Find next incomplete
    let nextIdx = -1;
    for (let i = currentStepIdx + 1; i < steps.length; i++) {
      if (!isDone(stepKey(phaseId, steps[i].name))) {
        nextIdx = i;
        break;
      }
    }

    if (nextIdx === -1) {
      transitionActive = true;
      overlay.classList.add('closing');
      setTimeout(() => {
        closeZen();
        renderPhase(phaseId);
      }, 350);
      return;
    }

    transitionActive = true;
    overlay.classList.add('closing');
    setTimeout(() => {
      currentStepIdx = nextIdx;
      overlay.classList.remove('closing');
      transitionActive = false;
      renderZenStep();
    }, 300);
  }

  function closeZen() {
    overlay.classList.remove('open', 'closing');
    state.zenPhase = null;
    saveState(state);
    document.body.style.overflow = '';
    if (timer.active || timer.ended) {
      if (timer.intervalId) {
        clearInterval(timer.intervalId);
        timer.intervalId = null;
      }
      dismissTimerNotification();
    }
  }

  renderZenStep();
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  doneBtn.onclick = advanceStep;
  skipBtn.onclick = advanceStep;
  closeBtn.onclick = () => {
    closeZen();
    renderPhase(phaseId);
  };
}

// ── SIDEBAR TOGGLE (MOBILE) ───────────────────

function setupMobileNav() {
  const hamburger = $('hamburger');
  const sidebar = $('sidebar');
  const backdrop = $('sidebar-backdrop');
  if (hamburger && sidebar && backdrop) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      backdrop.classList.toggle('open');
    });
    backdrop.addEventListener('click', () => {
      sidebar.classList.remove('open');
      backdrop.classList.remove('open');
    });
  }
}

// ── CELEBRATION EFFECTS ───────────────────────

const CONFETTI_COLORS = ['#f5c518', '#5eead4', '#93c5fd', '#e8734a', '#ffe066', '#fff'];

function spawnConfetti(x, y, count = 32) {
  const host = $('confetti-host');
  if (!host) return;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const angle = (Math.random() * Math.PI * 2);
    const dist = 120 + Math.random() * 280;
    const cx = Math.cos(angle) * dist;
    const cy = Math.sin(angle) * dist + 180;
    const cr = (Math.random() * 720 - 360) + 'deg';
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.setProperty('--cx', cx + 'px');
    piece.style.setProperty('--cy', cy + 'px');
    piece.style.setProperty('--cr', cr);
    piece.style.left = x + 'px';
    piece.style.top = y + 'px';
    host.appendChild(piece);
    setTimeout(() => piece.remove(), 1500);
  }
}

function showBigCheck() {
  const check = $('celebration-check');
  if (!check) return;
  check.classList.remove('show');
  void check.offsetWidth;
  check.classList.add('show');
  setTimeout(() => check.classList.remove('show'), 1100);
}

function celebrate(x, y, big = true) {
  if (x != null && y != null) spawnConfetti(x, y, big ? 38 : 18);
  if (big) showBigCheck();
  if (navigator.vibrate) navigator.vibrate(big ? [15, 40, 20] : 12);
}

function spawnRipple(btn, e) {
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

// ── TIMER ENGINE ──────────────────────────────

const TIMER_KEY = 'telc-b1-timer';
const timer = {
  active: false,
  paused: false,
  ended: false,
  phaseId: null,
  stepKey: null,
  stepName: null,
  defaultSec: 0,
  totalSec: 0,
  remainingSec: 0,
  startedAt: 0,
  endAt: 0,
  intervalId: null,
  chimePlayed: false
};

function parseStepDuration(timeStr) {
  if (!timeStr) return 15;
  const cleaned = String(timeStr).replace(/[–—]/g, '-').trim();
  const range = cleaned.match(/^(\d+)\s*-\s*(\d+)/);
  if (range) {
    const s = parseInt(range[1], 10);
    const e = parseInt(range[2], 10);
    if (!isNaN(s) && !isNaN(e) && e >= s) return Math.max(e - s, 1);
  }
  const single = cleaned.match(/(\d+)/);
  if (single) return parseInt(single[1], 10);
  return 15;
}

function formatMMSS(sec) {
  sec = Math.max(0, Math.round(sec));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function saveTimerState() {
  try {
    const snapshot = { ...timer };
    delete snapshot.intervalId;
    localStorage.setItem(TIMER_KEY, JSON.stringify(snapshot));
  } catch {}
}

function clearTimerStorage() {
  try { localStorage.removeItem(TIMER_KEY); } catch {}
}

function loadTimerState() {
  try {
    const raw = localStorage.getItem(TIMER_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}

// Arc circumference (half-circle r=80) → 251.33
const ARC_LENGTH = 251.33;

function setArcTime(text) {
  const el = $('zen-arc-time');
  if (el) el.textContent = text;
}

function setArcProgress() {
  const arcFg = $('zen-arc-fg');
  if (!arcFg) return;
  const total = Math.max(1, timer.totalSec || 1);
  const ratio = Math.max(0, Math.min(1, timer.remainingSec / total));
  // offset=0 → full arc visible; offset=ARC_LENGTH → empty
  arcFg.style.strokeDashoffset = String((1 - ratio) * ARC_LENGTH);
}

function renderTimerUI() {
  const arcTime = $('zen-arc-time');
  const arcPlay = $('zen-arc-pause');
  const arcFg = $('zen-arc-fg');
  const arcSvg = $('zen-arc-svg'); // Added arcSvg selection
  if (!arcTime || !arcPlay || !arcSvg) return;

  // Reset all state classes
  arcTime.classList.remove('paused', 'ended');
  arcFg.classList.remove('ended');
  arcPlay.classList.remove('running', 'paused'); // Ensure paused class is removed
  arcSvg.classList.remove('running'); // Added for arc animation

  if (timer.ended) {
    arcTime.textContent = "Time's up!";
    arcTime.classList.add('ended');
    arcFg.classList.add('ended');
    if (arcFg) arcFg.style.strokeDashoffset = String(ARC_LENGTH);
    return;
  }

  arcTime.textContent = `${formatMMSS(timer.remainingSec)} left`;
  if (timer.paused) {
    arcTime.classList.add('paused');
    arcPlay.classList.add('paused'); // Add paused class to play button
  }
  if (timer.active) {
    arcPlay.classList.add('running');
    arcSvg.classList.add('running'); // Add running class to arc svg
  }


  setArcProgress();
}

function initTimerForStep(step) {
  if (!step) return;
  const def = parseStepDuration(step.time);
  timer.active = false;
  timer.paused = false;
  timer.ended = false;
  timer.phaseId = state.zenPhase;
  timer.stepKey = stepKey(timer.phaseId, step.name);
  timer.stepName = step.name;
  timer.defaultSec = def * 60;
  timer.totalSec = def * 60;
  timer.remainingSec = def * 60;
  timer.chimePlayed = false;
  if (timer.intervalId) {
    clearInterval(timer.intervalId);
    timer.intervalId = null;
  }
  clearTimerStorage();
  renderTimerUI();
}

function startTimer() {
  if (Notification && Notification.permission === 'default') {
    try { Notification.requestPermission(); } catch {}
  }
  timer.active = true;
  timer.paused = false;
  timer.ended = false;
  timer.remainingSec = timer.totalSec;
  timer.startedAt = Date.now();
  timer.endAt = timer.startedAt + timer.totalSec * 1000;
  timer.chimePlayed = false;
  saveTimerState();
  renderTimerUI();
  startTimerInterval();
  showTimerNotification();
  scheduleTimerEnd();
}

function pauseTimer() {
  if (!timer.active || timer.paused) return;
  timer.paused = true;
  timer.remainingSec = Math.max(0, Math.round((timer.endAt - Date.now()) / 1000));
  saveTimerState();
  renderTimerUI();
  showTimerNotification();
  if (timer.intervalId) {
    clearInterval(timer.intervalId);
    timer.intervalId = null;
  }
}

function resumeTimer() {
  if (!timer.active || !timer.paused) return;
  timer.paused = false;
  timer.endAt = Date.now() + timer.remainingSec * 1000;
  saveTimerState();
  renderTimerUI();
  showTimerNotification();
  scheduleTimerEnd();
  startTimerInterval();
}

function stopTimer() {
  timer.active = false;
  timer.paused = false;
  timer.ended = false;
  timer.remainingSec = timer.totalSec;
  if (timer.intervalId) {
    clearInterval(timer.intervalId);
    timer.intervalId = null;
  }
  clearTimerStorage();
  dismissTimerNotification();
  renderTimerUI();
}

function toggleTimer() {
  if (timer.ended) {
    // Restart from full duration
    timer.ended = false;
    timer.remainingSec = timer.totalSec;
    startTimer();
    return;
  }
  if (!timer.active) {
    startTimer();
    return;
  }
  if (timer.paused) resumeTimer();
  else pauseTimer();
}

function startTimerInterval() {
  if (timer.intervalId) clearInterval(timer.intervalId);
  let lastNotifSec = -1;
  timer.intervalId = setInterval(() => {
    if (timer.paused) return;
    if (!timer.active) return;
    const sec = Math.max(0, Math.round((timer.endAt - Date.now()) / 1000));
    timer.remainingSec = sec;
    setArcTime(`${formatMMSS(sec)} left`);
    setArcProgress();
    if (sec !== lastNotifSec && sec % 5 === 0) {
      showTimerNotification();
      lastNotifSec = sec;
    }
    if (sec <= 0) {
      onTimerEnd();
    }
  }, 1000);
}

function onTimerEnd() {
  if (timer.ended) return;
  timer.ended = true;
  timer.active = false;
  timer.paused = false;
  if (timer.intervalId) {
    clearInterval(timer.intervalId);
    timer.intervalId = null;
  }
  saveTimerState();
  playChime();
  if (!timer.chimePlayed) {
    timer.chimePlayed = true;
    celebrate(window.innerWidth / 2, window.innerHeight / 2, true);
  }
  renderTimerUI();
  showTimerEndedNotification();
}

function showTimerNotification() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  if (!('serviceWorker' in navigator)) return;
  const title = `telc B1 — ${timer.stepName || 'Timer'}`;
  const opts = {
    body: timer.paused
      ? `⏸ Paused at ${formatMMSS(timer.remainingSec)}`
      : `⏱ ${formatMMSS(timer.remainingSec)} remaining`,
    tag: `telc-timer-${timer.stepKey}`,
    requireInteraction: true,
    silent: true,
    renotify: false,
    actions: [
      { action: timer.paused ? 'resume' : 'pause', title: timer.paused ? '▶ Resume' : '⏸ Pause' },
      { action: 'stop', title: '⏹ Stop' }
    ]
  };
  navigator.serviceWorker.ready.then(reg => {
    reg.showNotification(title, opts).catch(() => {});
  });
}

function showTimerEndedNotification() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  if (!('serviceWorker' in navigator)) return;
  const title = `telc B1 — Time's up!`;
  const opts = {
    body: `${timer.stepName || 'Timer'} complete`,
    tag: `telc-timer-ended-${timer.stepKey}`,
    requireInteraction: false,
    silent: false,
    actions: []
  };
  navigator.serviceWorker.ready.then(reg => {
    reg.showNotification(title, opts).catch(() => {});
    setTimeout(() => {
      reg.getNotifications({ tag: `telc-timer-${timer.stepKey}` }).then(ns => {
        ns.forEach(n => n.close());
      });
    }, 200);
  });
}

function dismissTimerNotification() {
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.ready.then(reg => {
    reg.getNotifications({ tag: `telc-timer-${timer.stepKey}` }).then(ns => {
      ns.forEach(n => n.close());
    });
    reg.getNotifications({ tag: `telc-timer-ended-${timer.stepKey}` }).then(ns => {
      ns.forEach(n => n.close());
    });
  });
}

function scheduleTimerEnd() {
  if (!('serviceWorker' in navigator)) return;
  if (!timer.endAt) return;
  navigator.serviceWorker.ready.then(reg => {
    try {
      if (typeof TimestampTrigger !== 'undefined' && reg.showNotification) {
        // Use the same tag, so it replaces the persistent one when it fires
        const opts = {
          body: `⏰ ${timer.stepName || 'Timer'} — Time's up!`,
          tag: `telc-timer-${timer.stepKey}`,
          showTrigger: new TimestampTrigger(timer.endAt),
          requireInteraction: false,
          silent: false,
          actions: []
        };
        reg.showNotification(`telc B1 — Time's up!`, opts).catch(() => {});
      }
    } catch {}
  });
}

// ── WEB AUDIO CHIME ───────────────────────────

let audioCtx = null;
function getAudioCtx() {
  if (audioCtx) return audioCtx;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  audioCtx = new AC();
  return audioCtx;
}

function playChime() {
  try {
    const ctx = getAudioCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    const now = ctx.currentTime;
    const notes = [
      { freq: 523.25, start: 0.00, dur: 0.45 }, // C5
      { freq: 659.25, start: 0.18, dur: 0.45 }, // E5
      { freq: 783.99, start: 0.36, dur: 0.70 }  // G5
    ];
    notes.forEach(({ freq, start, dur }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.connect(gain);
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(0, now + start);
      gain.gain.linearRampToValueAtTime(0.22, now + start + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + start + dur);
      osc.start(now + start);
      osc.stop(now + start + dur + 0.05);
    });
  } catch {}
}

// ── TIMER EVENT WIRING ────────────────────────

function setupTimerEvents() {
  const playBtn = $('zen-arc-pause');
  const stopBtn = $('zen-arc-stop');

  if (playBtn) playBtn.addEventListener('click', toggleTimer);
  if (stopBtn) stopBtn.addEventListener('click', stopTimer);

  // BroadcastChannel: receive actions from service worker (notification action buttons)
  if (typeof BroadcastChannel !== 'undefined') {
    const ch = new BroadcastChannel('telc-timer');
    ch.onmessage = e => {
      const t = e.data && e.data.type;
      if (t === 'pause') pauseTimer();
      else if (t === 'resume') resumeTimer();
      else if (t === 'stop') stopTimer();
    };
  }

  // Sync when app comes back to foreground
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      syncTimerOnResume();
    }
  });
}

function syncTimerOnResume() {
  if (!timer.active && !timer.ended) return;
  if (timer.paused) {
    renderTimerUI();
    showTimerNotification();
    return;
  }
  if (timer.active) {
    const sec = Math.max(0, Math.round((timer.endAt - Date.now()) / 1000));
    timer.remainingSec = sec;
    if (sec <= 0) {
      onTimerEnd();
    } else {
      renderTimerUI();
      showTimerNotification();
      startTimerInterval();
    }
  }
}

// ── PWA REGISTRATION ──────────────────────────

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

// ── INIT ──────────────────────────────────────

function init() {
  setupMobileNav();
  setupTimerEvents();
  registerSW();
  renderNav();
  renderDashboard();
}

// Check if the DOM is already loaded, otherwise listen for it
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init(); // DOM is already loaded, run init immediately
}
