import { useState } from "react";

const colors = {
  bg: "#0f1117",
  card: "#181c27",
  cardBorder: "#252a3a",
  accent: "#f5c842",
  accentSoft: "#f5c84222",
  accentSoft2: "#f5c84244",
  green: "#4ade80",
  greenSoft: "#4ade8020",
  red: "#f87171",
  redSoft: "#f8717120",
  blue: "#60a5fa",
  blueSoft: "#60a5fa20",
  purple: "#a78bfa",
  purpleSoft: "#a78bfa20",
  orange: "#fb923c",
  orangeSoft: "#fb923c20",
  teal: "#2dd4bf",
  tealSoft: "#2dd4bf20",
  text: "#e8eaf0",
  textMuted: "#8892a4",
  textDim: "#4a5568",
};

const TENSES = [
  {
    id: "present-simple",
    name: "Present Simple",
    emoji: "🔄",
    color: colors.blue,
    colorSoft: colors.blueSoft,
    level: 1,
    tag: "LEVEL 1 — START HERE",
    when: [
      "Habits & routines — things you do regularly",
      "General truths & facts — things that are always true",
      "Permanent situations — things that don't change",
      "Scheduled future events — like timetables",
    ],
    formula: [
      { label: "I/You/We/They", form: "play / study / eat" },
      { label: "He/She/It", form: "plays / studies / eats (add -s/-es)" },
      { label: "Negative", form: "don't / doesn't + verb" },
      { label: "Question", form: "Do/Does + subject + verb?" },
    ],
    keywords: ["always", "usually", "often", "sometimes", "rarely", "never", "every day/week", "on Mondays", "in general"],
    examples: [
      "I drink coffee every morning.",
      "She studies English on Tuesdays and Thursdays.",
      "The sun rises in the east.",
      "He doesn't like spicy food.",
      "Do you speak English?",
    ],
    mistakes: [
      { wrong: "She play football.", right: "She plays football.", tip: "Add -s/-es for he/she/it!" },
      { wrong: "He don't study.", right: "He doesn't study.", tip: "Use 'doesn't' for he/she/it." },
      { wrong: "I am go to school every day.", right: "I go to school every day.", tip: "No 'am/is/are' for habits — that's Present Continuous." },
    ],
    trick: "🧠 MEMORY TRICK: Think of Present Simple as your 'NORMAL LIFE' tense. It describes what is true about your regular life. Ask: 'Is this my routine or a general fact?' → YES = Present Simple.",
    exercises: [
      { q: "She _____ (go) to work by bus.", a: "goes", exp: "He/She/It needs -es → goes" },
      { q: "I _____ (not/like) horror movies.", a: "don't like", exp: "I uses 'don't' for negative" },
      { q: "_____ they _____ (speak) French?", a: "Do they speak", exp: "Questions: Do + subject + base verb" },
      { q: "Water _____ (boil) at 100°C.", a: "boils", exp: "General truth, he/she/it rule → boils" },
      { q: "We _____ (have) class every Tuesday.", a: "have", exp: "We → base form, no change" },
    ],
  },
  {
    id: "past-simple",
    name: "Past Simple",
    emoji: "📅",
    color: colors.orange,
    colorSoft: colors.orangeSoft,
    level: 2,
    tag: "LEVEL 2",
    when: [
      "Completed actions at a specific time in the past",
      "A series of finished events in the past",
      "Past habits (used to do something regularly)",
      "The time is clear — yesterday, last week, in 2010",
    ],
    formula: [
      { label: "Regular verbs", form: "verb + -ed (play → played, study → studied)" },
      { label: "Irregular verbs", form: "special form (go → went, eat → ate, have → had)" },
      { label: "Negative", form: "didn't + base verb (NOT didn't played)" },
      { label: "Question", form: "Did + subject + base verb?" },
    ],
    keywords: ["yesterday", "last night/week/year", "ago", "in 2010", "when I was young", "in the morning", "last Tuesday"],
    examples: [
      "I visited the Great Wall of China last year.",
      "She studied English for three hours yesterday.",
      "They went to Amsterdam last weekend.",
      "He didn't eat breakfast this morning.",
      "Did you watch the film last night?",
    ],
    mistakes: [
      { wrong: "I didn't went to school.", right: "I didn't go to school.", tip: "After 'didn't', always use the BASE form of the verb." },
      { wrong: "She goed to the store.", right: "She went to the store.", tip: "'Go' is irregular → went. Learn the irregular verb list!" },
      { wrong: "Did you went out?", right: "Did you go out?", tip: "After 'Did', always use the BASE form." },
    ],
    trick: "🧠 MEMORY TRICK: Past Simple = a CLOSED DOOR. The action happened, finished, and the door is closed. It's done. Key signal words: YESTERDAY, LAST, AGO. See those words? → Use Past Simple!",
    exercises: [
      { q: "She _____ (travel) to Turkey last summer.", a: "travelled", exp: "Completed action with 'last summer' → past simple" },
      { q: "We _____ (not/watch) TV yesterday.", a: "didn't watch", exp: "Negative: didn't + base verb" },
      { q: "_____ he _____ (call) you?", a: "Did he call", exp: "Question: Did + subject + base verb" },
      { q: "I _____ (eat) a delicious meal at the restaurant.", a: "ate", exp: "Irregular verb: eat → ate" },
      { q: "They _____ (build) this bridge in 1989.", a: "built", exp: "Irregular verb: build → built" },
    ],
  },
  {
    id: "present-continuous",
    name: "Present Continuous",
    emoji: "▶️",
    color: colors.green,
    colorSoft: colors.greenSoft,
    level: 3,
    tag: "LEVEL 3",
    when: [
      "Actions happening RIGHT NOW, at this moment",
      "Temporary situations (not your normal routine)",
      "Planned future arrangements (already decided)",
      "Changing or developing situations",
    ],
    formula: [
      { label: "Affirmative", form: "am/is/are + verb-ing" },
      { label: "I", form: "I am studying (I'm studying)" },
      { label: "He/She/It", form: "He is walking (He's walking)" },
      { label: "We/You/They", form: "They are reading (They're reading)" },
      { label: "Negative", form: "am/is/are + NOT + verb-ing" },
      { label: "Question", form: "Am/Is/Are + subject + verb-ing?" },
    ],
    keywords: ["now", "right now", "at the moment", "currently", "today", "this week", "tonight (planned)", "Look!"],
    examples: [
      "I am studying English at the moment.",
      "She is walking to school now.",
      "They are watching TV this evening.",
      "He isn't sleeping — he's working.",
      "Are you coming to class tonight?",
    ],
    mistakes: [
      { wrong: "I am go to school now.", right: "I am going to school now.", tip: "You need am/is/are + verb-ING. Don't forget the -ing!" },
      { wrong: "She is liking coffee.", right: "She likes coffee.", tip: "Some verbs NEVER use -ing (like, love, know, want, need, believe). These are 'state verbs'." },
      { wrong: "I working now.", right: "I am working now.", tip: "You must include am/is/are. You can't drop it!" },
    ],
    trick: "🧠 MEMORY TRICK: Present Continuous = a MOVIE PLAYING RIGHT NOW. Imagine pointing at a screen and saying 'Look! He is running!' The action is in progress like a movie you're watching live. Also: -ING = IN PROGRESS.",
    exercises: [
      { q: "Listen! The birds _____ (sing).", a: "are singing", exp: "Happening right now → are + singing" },
      { q: "She _____ (not/work) today — she's sick.", a: "is not working / isn't working", exp: "Temporary situation → is not working" },
      { q: "_____ you _____ (enjoy) the class?", a: "Are you enjoying", exp: "Question form: Are + subject + verb-ing" },
      { q: "I _____ (meet) my friend tonight.", a: "am meeting", exp: "Planned future arrangement → am meeting" },
      { q: "The company _____ (grow) very fast this year.", a: "is growing", exp: "Developing situation → is growing" },
    ],
  },
  {
    id: "past-continuous",
    name: "Past Continuous",
    emoji: "⏸️",
    color: colors.purple,
    colorSoft: colors.purpleSoft,
    level: 4,
    tag: "LEVEL 4",
    when: [
      "An action was IN PROGRESS at a specific past time",
      "A longer background action that was interrupted by a shorter one",
      "Two actions happening at the same time in the past (parallel actions)",
      "Setting the scene in a story",
    ],
    formula: [
      { label: "Affirmative", form: "was/were + verb-ing" },
      { label: "I/He/She/It", form: "was + verb-ing" },
      { label: "We/You/They", form: "were + verb-ing" },
      { label: "Negative", form: "wasn't / weren't + verb-ing" },
      { label: "Question", form: "Was/Were + subject + verb-ing?" },
    ],
    keywords: ["while", "when", "as", "at that moment", "all day", "at 8 o'clock yesterday", "at the time"],
    examples: [
      "I was cooking when you called.",
      "She was sleeping at midnight.",
      "They were watching TV while I was studying.",
      "It was raining at lunchtime.",
      "What were you doing when I arrived?",
    ],
    mistakes: [
      { wrong: "I was study when he arrived.", right: "I was studying when he arrived.", tip: "Don't forget the -ing! was/were + verb-ING." },
      { wrong: "While I cooked, she called.", right: "While I was cooking, she called.", tip: "The background/longer action needs was/were + -ing." },
      { wrong: "Were you sleeping when I was calling?", right: "Were you sleeping when I called?", tip: "The short interrupting action usually uses Past Simple, not Past Continuous." },
    ],
    trick: "🧠 MEMORY TRICK: Past Continuous = a MOVIE PAUSED. You pressed pause on a moment in the past. When you say 'I was cooking', imagine the video is paused mid-action. The KEY PATTERN: 'I was doing [long action] WHEN [short interruption happened]'.",
    exercises: [
      { q: "He _____ (read) a book when I arrived.", a: "was reading", exp: "Longer background action → was reading" },
      { q: "They _____ (not/sleep) at 11 PM.", a: "were not sleeping / weren't sleeping", exp: "Negative: were not + verb-ing" },
      { q: "What _____ you _____ (do) at 8 o'clock yesterday?", a: "were you doing", exp: "Question about past action in progress" },
      { q: "While she _____ (cook), he _____ (set) the table.", a: "was cooking / was setting", exp: "Two parallel past actions → both were + -ing" },
      { q: "It _____ (rain) when we left the house.", a: "was raining", exp: "Background condition at a past moment" },
    ],
  },
  {
    id: "present-perfect",
    name: "Present Perfect",
    emoji: "🔗",
    color: colors.teal,
    colorSoft: colors.tealSoft,
    level: 5,
    tag: "LEVEL 5",
    when: [
      "Actions from the past that are connected to the present (you can still feel the effect NOW)",
      "Life experiences — things you have or haven't done in your life",
      "Actions with 'for' and 'since' that started in the past and continue now",
      "Recent actions with results visible now (She has stolen the chocolate!)",
    ],
    formula: [
      { label: "I/You/We/They", form: "have + past participle" },
      { label: "He/She/It", form: "has + past participle" },
      { label: "Negative", form: "haven't / hasn't + past participle" },
      { label: "Question", form: "Have/Has + subject + past participle?" },
    ],
    keywords: ["ever", "never", "already", "yet", "just", "recently", "for (+ duration)", "since (+ point in time)", "so far", "this week/year"],
    examples: [
      "I have lived in the Netherlands for 5 years.",
      "Have you ever visited Machu Picchu?",
      "She has already eaten lunch.",
      "He hasn't called me yet.",
      "They have just arrived at the airport.",
    ],
    mistakes: [
      { wrong: "I have seen her yesterday.", right: "I saw her yesterday.", tip: "When you name a FINISHED time (yesterday, last week, in 2010), use Past Simple — not Present Perfect!" },
      { wrong: "Have you ever went to Paris?", right: "Have you ever been to Paris?", tip: "After have/has, use the PAST PARTICIPLE (3rd form). go → gone/been, not went." },
      { wrong: "I live here since 2019.", right: "I have lived here since 2019.", tip: "With 'since' showing an ongoing situation, you MUST use Present Perfect." },
    ],
    trick: "🧠 MEMORY TRICK: Present Perfect = a BRIDGE between past and present. The action happened in the past BUT it's still relevant NOW. Ask yourself: 'Does this past action still matter today?' YES → Present Perfect. Also remember: FOR = duration, SINCE = starting point.",
    exercises: [
      { q: "She _____ (live) here since 2019.", a: "has lived", exp: "Ongoing situation with 'since' → has + lived" },
      { q: "_____ you ever _____ (eat) Dutch stroopwafels?", a: "Have you ever eaten", exp: "Life experience question → Have + past participle" },
      { q: "I _____ (not/finish) my homework yet.", a: "haven't finished", exp: "'yet' signals Present Perfect → haven't + past participle" },
      { q: "He _____ (just/arrive) at the station.", a: "has just arrived", exp: "'just' = very recently → has + past participle" },
      { q: "We _____ (study) English for three months.", a: "have studied", exp: "Duration with 'for', still ongoing → have + studied" },
    ],
  },
  {
    id: "past-perfect",
    name: "Past Perfect",
    emoji: "⬅️",
    color: colors.red,
    colorSoft: colors.redSoft,
    level: 6,
    tag: "LEVEL 6",
    when: [
      "An action that happened BEFORE another past action",
      "To make clear which of two past actions came first",
      "In reported speech and conditional sentences",
      "After 'after', 'before', 'when', 'by the time'",
    ],
    formula: [
      { label: "All subjects", form: "had + past participle" },
      { label: "Affirmative", form: "I/She/They had eaten when..." },
      { label: "Negative", form: "hadn't + past participle" },
      { label: "Question", form: "Had + subject + past participle?" },
    ],
    keywords: ["already", "before", "after", "when", "by the time", "never (before)", "just (before)", "as soon as"],
    examples: [
      "I had read the book before I watched the film.",
      "She had already eaten when I arrived.",
      "We could cook dinner because I had gone to the grocery store.",
      "Had you met her before the party?",
      "By the time he arrived, they had left.",
    ],
    mistakes: [
      { wrong: "Before I went to sleep, I eat dinner.", right: "Before I went to sleep, I had eaten dinner.", tip: "The action that happened FIRST needs Past Perfect (had + past participle)." },
      { wrong: "She had went to the store.", right: "She had gone to the store.", tip: "After 'had', use past participle (3rd form): go → gone, NOT went." },
    ],
    trick: "🧠 MEMORY TRICK: Past Perfect = STEP BACK IN TIME. You're already in the past (Past Simple), and Past Perfect takes you one step further back. Use it when you have TWO past events and you need to show which one happened FIRST. Think: 'Before [past event], I had already [earlier past event]'.",
    exercises: [
      { q: "She _____ (finish) cooking before he arrived.", a: "had finished", exp: "First action before another past action → had finished" },
      { q: "By the time I got to the cinema, the film _____ (already/start).", a: "had already started", exp: "By the time = classic Past Perfect signal" },
      { q: "_____ you _____ (travel) abroad before 2020?", a: "Had you travelled", exp: "Question about experience before a past point" },
      { q: "He was tired because he _____ (not/sleep) well.", a: "hadn't slept", exp: "Cause from before the past moment → hadn't slept" },
      { q: "After they _____ (eat), they went for a walk.", a: "had eaten", exp: "'After' + first action → had eaten" },
    ],
  },
  {
    id: "future-simple",
    name: "Future Simple (Will & Going to)",
    emoji: "🔮",
    color: colors.accent,
    colorSoft: colors.accentSoft,
    level: 7,
    tag: "LEVEL 7",
    when: [
      "WILL: spontaneous decisions made at the moment of speaking",
      "WILL: predictions based on opinion (I think...)",
      "WILL: promises, offers, requests",
      "GOING TO: planned decisions made before speaking",
      "GOING TO: predictions based on evidence you can see NOW",
    ],
    formula: [
      { label: "WILL (all subjects)", form: "will + base verb" },
      { label: "GOING TO", form: "am/is/are + going to + base verb" },
      { label: "WILL Negative", form: "won't + base verb" },
      { label: "GOING TO Negative", form: "am/is/are + not + going to + base verb" },
    ],
    keywords: ["tomorrow", "next week/year", "soon", "in the future", "I think... will", "I'm sure... will", "one day", "tonight"],
    examples: [
      "The phone rings → I'll answer it! (spontaneous)",
      "She is going to start university next year. (planned)",
      "Look at those clouds! It's going to rain. (evidence now)",
      "I don't think I will enjoy this movie. (opinion)",
      "I promise I will come home by midnight. (promise)",
    ],
    mistakes: [
      { wrong: "I will to go to the store.", right: "I will go to the store.", tip: "After 'will', use the BASE verb. No 'to'!" },
      { wrong: "He is going go to Paris.", right: "He is going to go to Paris.", tip: "Don't forget 'to' in 'going to'!" },
      { wrong: "She wills study tomorrow.", right: "She will study tomorrow.", tip: "'Will' NEVER changes. No -s, no -ed, no -ing." },
    ],
    trick: "🧠 MEMORY TRICK: WILL = Lightbulb moment 💡 (decided just now). GOING TO = Calendar appointment 📅 (decided before). Quick test: Did you just decide? → WILL. Did you plan it earlier? → GOING TO. Evidence = GOING TO ('Look! It's going to rain!').",
    exercises: [
      { q: "(Phone rings) Don't worry, I _____ (answer) it!", a: "will answer", exp: "Spontaneous decision → will" },
      { q: "They _____ (visit) their cousins this summer — they already bought tickets.", a: "are going to visit", exp: "Pre-planned decision → going to" },
      { q: "Look at that car! It _____ (crash)!", a: "is going to crash", exp: "Evidence visible now → going to" },
      { q: "I think Brazil _____ (win) the match.", a: "will win", exp: "Opinion-based prediction → will" },
      { q: "I promise I _____ (not/be) late.", a: "won't be / will not be", exp: "Promise → will (negative = won't)" },
    ],
  },
];

const COMPARISONS = [
  {
    id: "ps-vs-pp",
    title: "Past Simple vs Present Perfect",
    emoji: "⚔️",
    color: colors.orange,
    left: {
      name: "Past Simple",
      signal: "Finished time mentioned",
      examples: ["I saw her yesterday.", "We met in 2015.", "He left an hour ago."],
      rule: "Use when the TIME is over and specific: yesterday, last week, in 2010, ago",
    },
    right: {
      name: "Present Perfect",
      signal: "Connected to NOW",
      examples: ["I have seen her recently.", "We have met before.", "He has just left."],
      rule: "Use when the past is still relevant NOW, or when no specific finished time is given",
    },
    tip: "🔑 KEY TEST: Can you add 'yesterday' or 'last week' naturally? → Past Simple. Does the action still matter NOW? → Present Perfect.",
    exercises: [
      { q: "I _____ (see) that film last Monday.", a: "saw", exp: "'Last Monday' = finished time → Past Simple" },
      { q: "_____ you ever _____ (be) to Turkey?", a: "Have you ever been", exp: "Life experience, no specific time → Present Perfect" },
      { q: "She _____ (just/send) you an email.", a: "has just sent", exp: "'Just' = very recently, still relevant now → Present Perfect" },
      { q: "They _____ (arrive) in Amsterdam in 2020.", a: "arrived", exp: "'In 2020' = specific past time → Past Simple" },
    ],
  },
  {
    id: "ps-vs-pc",
    title: "Present Simple vs Present Continuous",
    emoji: "⚔️",
    color: colors.green,
    left: {
      name: "Present Simple",
      signal: "Regular / Always true",
      examples: ["I drink coffee every morning.", "She works in a hospital.", "Water boils at 100°C."],
      rule: "Habits, routines, facts, permanent situations",
    },
    right: {
      name: "Present Continuous",
      signal: "Happening right now / Temporary",
      examples: ["I am drinking coffee (right now).", "She is working from home (this week).", "Look! It is boiling!"],
      rule: "Actions in progress NOW, temporary situations, planned future events",
    },
    tip: "🔑 KEY TEST: Is this your NORMAL LIFE or is this happening RIGHT NOW as a temporary thing? Normal life → Simple. Right now / temporary → Continuous.",
    exercises: [
      { q: "She usually _____ (walk) to work, but today she _____ (take) the bus.", a: "walks / is taking", exp: "Usually = habit (simple); today = temporary now (continuous)" },
      { q: "I _____ (not/understand) this grammar rule.", a: "don't understand", exp: "'Understand' is a state verb — NEVER use continuous" },
      { q: "What _____ you _____ (do) right now?", a: "are you doing", exp: "'Right now' = in progress → continuous" },
    ],
  },
  {
    id: "will-vs-going-to",
    title: "Will vs Going To",
    emoji: "⚔️",
    color: colors.accent,
    left: {
      name: "Will",
      signal: "Spontaneous / Opinion / Promise",
      examples: ["I'll get the door! (just decided)", "I think it will be sunny.", "I promise I'll help you."],
      rule: "Instant decisions, opinions about future, offers, promises, requests",
    },
    right: {
      name: "Going To",
      signal: "Planned / Evidence",
      examples: ["I'm going to call her later (I planned it).", "Look! It's going to rain (dark clouds).", "We're going to move house next month."],
      rule: "Plans made in advance, predictions based on present evidence",
    },
    tip: "🔑 KEY TEST: Did you decide just NOW? → Will. Did you plan it BEFORE? → Going To. Can you see EVIDENCE it will happen? → Going To.",
    exercises: [
      { q: "Don't worry about dinner — I _____ (cook) something. (just decided)", a: "will cook", exp: "Spontaneous decision in the moment → will" },
      { q: "We _____ (visit) Paris next summer. We've already booked the hotel.", a: "are going to visit", exp: "Pre-planned with evidence → going to" },
      { q: "She's pale and shaking — she _____ (faint)!", a: "is going to faint", exp: "Visible evidence right now → going to" },
    ],
  },
  {
    id: "pastsimp-vs-pastcont",
    title: "Past Simple vs Past Continuous",
    emoji: "⚔️",
    color: colors.purple,
    left: {
      name: "Past Simple",
      signal: "Short / Completed action",
      examples: ["He arrived at 8.", "She called me.", "I dropped my keys."],
      rule: "Completed actions, the short interrupting event",
    },
    right: {
      name: "Past Continuous",
      signal: "Longer / Ongoing background action",
      examples: ["He was sleeping when I arrived.", "She was cooking when he called.", "I was walking when I dropped my keys."],
      rule: "Background action in progress when something else happened",
    },
    tip: "🔑 KEY PATTERN: 'I was [doing something] WHEN [something happened].' The WAS/WERE action is the long background. The WHEN action is the short interruption (Past Simple).",
    exercises: [
      { q: "I _____ (read) a book when the lights _____ (go out).", a: "was reading / went out", exp: "Long background (was reading) + short interruption (went out)" },
      { q: "While she _____ (cook) dinner, he _____ (set) the table.", a: "was cooking / was setting", exp: "Two parallel ongoing actions → both past continuous" },
      { q: "They _____ (play) football when it _____ (start) to rain.", a: "were playing / started", exp: "Background activity + sudden interruption" },
    ],
  },
  {
    id: "pp-vs-ppc",
    title: "Present Perfect vs Present Perfect Continuous",
    emoji: "⚔️",
    color: colors.teal,
    left: {
      name: "Present Perfect",
      signal: "Completed with a result",
      examples: ["I have written three emails.", "She has eaten already.", "He has lived here for years."],
      rule: "Focus on the result/completion, the number of times, or a state that has continued",
    },
    right: {
      name: "Present Perfect Continuous",
      signal: "Ongoing action up to now",
      examples: ["I have been writing emails all morning.", "She has been eating (she's still at the table).", "He has been living here for years."],
      rule: "Focus on the DURATION, the activity itself still in progress, or recently finished but effect is visible",
    },
    tip: "🔑 KEY TEST: RESULT or completion? → Present Perfect. DURATION or ongoing activity? → Present Perfect Continuous. 'I have cleaned the house' (it's clean now). 'I have been cleaning the house' (I'm tired, I just stopped).",
    exercises: [
      { q: "I _____ (read) five chapters already. (focus: quantity done)", a: "have read", exp: "Completed with quantity → Present Perfect" },
      { q: "She looks exhausted — she _____ (work) all day.", a: "has been working", exp: "Duration, activity ongoing/just finished → Present Perfect Continuous" },
      { q: "How long _____ you _____ (study) English?", a: "have you been studying", exp: "Duration question → Present Perfect Continuous" },
    ],
  },
];

const STUDY_PLAN = [
  { day: 1, title: "Foundation Day", emoji: "🏗️", focus: "Present Simple", activities: ["Read the Present Simple section", "Do all 5 exercises", "Write 5 sentences about your own daily routine", "Learn 10 irregular verbs from the list"], homework: "Write a short paragraph (5-6 sentences) about your typical week using Present Simple." },
  { day: 2, title: "Into the Past", emoji: "📅", focus: "Past Simple", activities: ["Study Past Simple", "Review the irregular verbs handout — learn 15 more", "Do the exercises", "Practice: describe what you did last weekend"], homework: "Write 6 sentences about what you did last week (try to use at least 3 irregular verbs)." },
  { day: 3, title: "Right Now!", emoji: "▶️", focus: "Present & Past Continuous", activities: ["Study Present Continuous", "Study Past Continuous", "Focus on the KEY PATTERN: was doing WHEN happened", "Compare: I eat vs I am eating"], homework: "Write a short story (5-7 sentences) about something that happened to you. Use Past Continuous for the background." },
  { day: 4, title: "The Tricky One", emoji: "🔗", focus: "Present Perfect + For/Since", activities: ["Study Present Perfect carefully", "Practice the FOR vs SINCE exercises from class", "Do the comparison: Past Simple vs Present Perfect", "Test yourself: when do you use each?"], homework: "Write 4 sentences with 'for' and 4 sentences with 'since' about your own life." },
  { day: 5, title: "Past Perfect + Future", emoji: "⬅️🔮", focus: "Past Perfect + Future Simple", activities: ["Study Past Perfect — focus on the TWO-EVENTS rule", "Study Will vs Going To", "Do the Will vs Going To exercises from class", "Write about your plans for next month"], homework: "Write 3 sentences using Past Perfect, and 4 sentences using Will or Going To about your future plans." },
  { day: 6, title: "Comparison Day", emoji: "⚔️", focus: "All Comparisons", activities: ["Work through ALL 5 comparison sections", "For each comparison, do the exercises", "Make a personal cheat sheet with the key rules", "Review your memory tricks"], homework: "Write a paragraph about your life using at LEAST 5 different tenses." },
  { day: 7, title: "Exam Ready!", emoji: "🎯", focus: "Review + Practice", activities: ["Redo any exercises you got wrong this week", "Review all memory tricks", "Do the exercises from the class slides that weren't in this guide", "Focus on irregular verbs you still don't know"], homework: "Write a short narrative essay (10+ sentences) about an important experience in your life — use as many tenses as fit naturally." },
];

const IRREGULAR_VERBS = [
  ["be", "was/were", "been"], ["go", "went", "gone"], ["eat", "ate", "eaten"],
  ["have", "had", "had"], ["do", "did", "done"], ["take", "took", "taken"],
  ["come", "came", "come"], ["see", "saw", "seen"], ["get", "got", "gotten"],
  ["give", "gave", "given"], ["know", "knew", "known"], ["think", "thought", "thought"],
  ["say", "said", "said"], ["make", "made", "made"], ["find", "found", "found"],
  ["write", "wrote", "written"], ["read", "read", "read"], ["buy", "bought", "bought"],
  ["bring", "brought", "brought"], ["feel", "felt", "felt"], ["leave", "left", "left"],
  ["tell", "told", "told"], ["build", "built", "built"], ["sleep", "slept", "slept"],
  ["meet", "met", "met"], ["speak", "spoke", "spoken"], ["begin", "began", "begun"],
  ["drive", "drove", "driven"], ["send", "sent", "sent"], ["break", "broke", "broken"],
];

export default function App() {
  const [activeTab, setActiveTab] = useState("roadmap");
  const [activeTense, setActiveTense] = useState(null);
  const [activeComparison, setActiveComparison] = useState(null);
  const [showAnswers, setShowAnswers] = useState({});
  const [userAnswers, setUserAnswers] = useState({});

  const toggleAnswer = (key) => {
    setShowAnswers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const tabs = [
    { id: "roadmap", label: "📍 Roadmap", short: "Roadmap" },
    { id: "tenses", label: "📚 Tenses", short: "Tenses" },
    { id: "compare", label: "⚔️ Compare", short: "Compare" },
    { id: "irregular", label: "📋 Irregular Verbs", short: "Verbs" },
    { id: "plan", label: "📆 7-Day Plan", short: "Plan" },
  ];

  return (
    <div style={{ background: colors.bg, minHeight: "100vh", fontFamily: "'Georgia', 'Times New Roman', serif", color: colors.text }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg, #0f1117 0%, #1a1f2e 50%, #0f1117 100%)`, borderBottom: `2px solid ${colors.accent}`, padding: "24px 20px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 4 }}>
            <span style={{ background: colors.accent, color: "#000", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 3, fontFamily: "monospace", letterSpacing: 2 }}>RIGHT2EDUCATION · A2+/B1</span>
          </div>
          <h1 style={{ margin: "8px 0 4px", fontSize: "clamp(22px, 5vw, 38px)", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>
            English Tenses<br />
            <span style={{ color: colors.accent }}>Master Guide</span>
          </h1>
          <p style={{ margin: "0 0 20px", color: colors.textMuted, fontSize: 14 }}>
            Built from your class materials · Elle & Mina · Classes 1–3
          </p>
          {/* Tabs */}
          <div style={{ display: "flex", gap: 2, overflowX: "auto", paddingBottom: 0 }}>
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => { setActiveTab(tab.id); setActiveTense(null); setActiveComparison(null); }}
                style={{ padding: "10px 16px", background: activeTab === tab.id ? colors.accent : "transparent", color: activeTab === tab.id ? "#000" : colors.textMuted, border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 600, borderRadius: "6px 6px 0 0", whiteSpace: "nowrap", transition: "all 0.2s" }}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>

        {/* ROADMAP TAB */}
        {activeTab === "roadmap" && (
          <div>
            <SectionTitle>🗺️ Your Learning Roadmap</SectionTitle>
            <Card style={{ marginBottom: 24, background: `linear-gradient(135deg, ${colors.accentSoft}, ${colors.card})`, borderColor: colors.accent }}>
              <h3 style={{ color: colors.accent, margin: "0 0 12px", fontSize: 16 }}>🎯 The Big Idea: What Is a Tense?</h3>
              <p style={{ color: colors.text, lineHeight: 1.7, margin: "0 0 12px" }}>
                A tense tells you <strong style={{ color: colors.accent }}>WHEN</strong> something happens. Think of time as a line: left is the past, middle is now, right is the future. Every tense places an action somewhere on this line — and tells you whether it's finished, ongoing, or connected to another moment.
              </p>
              <p style={{ color: colors.text, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: colors.accent }}>Good news:</strong> You don't need to learn all tenses at once. Follow this guide level by level — each tense builds on the previous one.
              </p>
            </Card>

            {/* Timeline visual */}
            <div style={{ background: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 10, padding: 20, marginBottom: 24, overflowX: "auto" }}>
              <h3 style={{ color: colors.textMuted, fontSize: 12, letterSpacing: 2, margin: "0 0 16px", textTransform: "uppercase" }}>The Tense Timeline</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 0, minWidth: 500 }}>
                {[
                  { label: "Past Perfect", sub: "had done", color: colors.red, pos: "far past" },
                  { label: "Past Simple", sub: "did", color: colors.orange, pos: "past" },
                  { label: "Past Continuous", sub: "was doing", color: colors.purple, pos: "past ongoing" },
                  { label: "Present", sub: "now", color: colors.accent, pos: "NOW", center: true },
                  { label: "Present Simple", sub: "do", color: colors.blue, pos: "routine" },
                  { label: "Present Continuous", sub: "am doing", color: colors.green, pos: "now" },
                  { label: "Present Perfect", sub: "have done", color: colors.teal, pos: "past→now" },
                  { label: "Future", sub: "will / going to", color: colors.accent, pos: "future" },
                ].map((item, i) => (
                  <div key={i} style={{ flex: item.center ? 0 : 1, minWidth: item.center ? 40 : 60, textAlign: "center" }}>
                    {item.center ? (
                      <div style={{ width: 3, height: 60, background: colors.accent, margin: "0 auto", borderRadius: 3 }} />
                    ) : (
                      <div style={{ padding: "4px 2px" }}>
                        <div style={{ fontSize: 9, color: item.color, fontWeight: 700, marginBottom: 2 }}>{item.label}</div>
                        <div style={{ fontSize: 8, color: colors.textMuted }}>{item.sub}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ height: 3, background: `linear-gradient(to right, ${colors.red}, ${colors.orange}, ${colors.blue}, ${colors.accent}, ${colors.green}, ${colors.teal})`, borderRadius: 3, marginTop: 4 }} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                <span style={{ color: colors.textDim, fontSize: 10 }}>◀ FAR PAST</span>
                <span style={{ color: colors.accent, fontSize: 10 }}>▲ NOW</span>
                <span style={{ color: colors.textDim, fontSize: 10 }}>FUTURE ▶</span>
              </div>
            </div>

            {/* Tense cards on roadmap */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 12 }}>
              {TENSES.map(t => (
                <Card key={t.id} style={{ borderColor: t.color, cursor: "pointer", transition: "transform 0.15s" }}
                  onClick={() => { setActiveTab("tenses"); setActiveTense(t.id); }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 24 }}>{t.emoji}</span>
                    <div>
                      <div style={{ color: t.color, fontSize: 10, fontWeight: 700, letterSpacing: 1, marginBottom: 2 }}>{t.tag}</div>
                      <div style={{ color: colors.text, fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                    </div>
                  </div>
                  <div style={{ color: colors.textMuted, fontSize: 12 }}>{t.when[0]}</div>
                  <div style={{ marginTop: 8, color: t.color, fontSize: 11, fontWeight: 600 }}>Study this tense →</div>
                </Card>
              ))}
            </div>

            <Card style={{ marginTop: 24, borderColor: colors.purple }}>
              <h3 style={{ color: colors.purple, margin: "0 0 12px" }}>💡 Quick Reference: Which Tense Do I Use?</h3>
              {[
                ["It's my routine / I do it regularly", "Present Simple 🔄"],
                ["It happened in the past and it's finished", "Past Simple 📅"],
                ["It's happening right now / It's temporary", "Present Continuous ▶️"],
                ["Something was in progress when something else interrupted", "Past Continuous ⏸️"],
                ["Past action still connected to or relevant now", "Present Perfect 🔗"],
                ["Action A happened before Action B in the past", "Past Perfect ⬅️"],
                ["I just decided / It's my opinion about the future", "Future with WILL 🔮"],
                ["I planned this already / I see evidence it will happen", "Future with GOING TO 🔮"],
              ].map(([situation, tense], i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: i < 7 ? `1px solid ${colors.cardBorder}` : "none" }}>
                  <span style={{ color: colors.text, fontSize: 13 }}>{situation}</span>
                  <span style={{ color: colors.purple, fontWeight: 700, fontSize: 12, textAlign: "right", minWidth: 160 }}>{tense}</span>
                </div>
              ))}
            </Card>
          </div>
        )}

        {/* TENSES TAB */}
        {activeTab === "tenses" && (
          <div>
            {!activeTense ? (
              <>
                <SectionTitle>📚 Learn Each Tense</SectionTitle>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 12 }}>
                  {TENSES.map(t => (
                    <Card key={t.id} style={{ borderColor: t.color, cursor: "pointer" }} onClick={() => setActiveTense(t.id)}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 28 }}>{t.emoji}</span>
                        <div>
                          <div style={{ color: t.color, fontSize: 10, fontWeight: 700, letterSpacing: 1 }}>{t.tag}</div>
                          <div style={{ color: colors.text, fontWeight: 700, fontSize: 16 }}>{t.name}</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 10, color: t.color, fontSize: 12, fontWeight: 600 }}>Open lesson →</div>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <TenseDetail tense={TENSES.find(t => t.id === activeTense)} onBack={() => setActiveTense(null)} showAnswers={showAnswers} toggleAnswer={toggleAnswer} userAnswers={userAnswers} setUserAnswers={setUserAnswers} />
            )}
          </div>
        )}

        {/* COMPARE TAB */}
        {activeTab === "compare" && (
          <div>
            {!activeComparison ? (
              <>
                <SectionTitle>⚔️ Compare Confusing Tenses</SectionTitle>
                <p style={{ color: colors.textMuted, marginBottom: 20 }}>These pairs are the most common sources of mistakes. Master these comparisons and your English will jump to a higher level.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
                  {COMPARISONS.map(c => (
                    <Card key={c.id} style={{ borderColor: c.color, cursor: "pointer" }} onClick={() => setActiveComparison(c.id)}>
                      <div style={{ fontSize: 24, marginBottom: 8 }}>{c.emoji}</div>
                      <div style={{ color: c.color, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{c.title}</div>
                      <div style={{ color: colors.textMuted, fontSize: 12 }}>{c.left.name} · vs · {c.right.name}</div>
                      <div style={{ marginTop: 10, color: c.color, fontSize: 12, fontWeight: 600 }}>Study comparison →</div>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <ComparisonDetail comparison={COMPARISONS.find(c => c.id === activeComparison)} onBack={() => setActiveComparison(null)} showAnswers={showAnswers} toggleAnswer={toggleAnswer} />
            )}
          </div>
        )}

        {/* IRREGULAR VERBS TAB */}
        {activeTab === "irregular" && (
          <div>
            <SectionTitle>📋 Irregular Verbs Reference</SectionTitle>
            <Card style={{ marginBottom: 16, borderColor: colors.orange }}>
              <p style={{ color: colors.text, margin: 0, lineHeight: 1.7 }}>
                🧠 <strong style={{ color: colors.orange }}>How to learn them:</strong> Don't try to memorize all at once! Learn 10 per week. Group them by pattern: verbs where all 3 forms are the same (cut/cut/cut), verbs where 2 are the same (have/had/had), and completely irregular ones (go/went/gone). Say them OUT LOUD in sets of three!
              </p>
            </Card>
            <div style={{ background: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 10, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: colors.cardBorder, padding: "10px 16px" }}>
                {["INFINITIVE (Base)", "PAST SIMPLE (V2)", "PAST PARTICIPLE (V3)"].map(h => (
                  <div key={h} style={{ color: colors.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{h}</div>
                ))}
              </div>
              {IRREGULAR_VERBS.map(([inf, past, pp], i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "8px 16px", background: i % 2 === 0 ? colors.card : colors.bg, borderBottom: `1px solid ${colors.cardBorder}20` }}>
                  <div style={{ color: colors.blue, fontWeight: 600 }}>{inf}</div>
                  <div style={{ color: colors.orange }}>{past}</div>
                  <div style={{ color: colors.green }}>{pp}</div>
                </div>
              ))}
              <div style={{ padding: "10px 16px", background: colors.cardBorder, color: colors.textMuted, fontSize: 12 }}>
                + 80 more verbs in your HANDOUT__Irregular_Verbs reference sheet from class
              </div>
            </div>
          </div>
        )}

        {/* 7-DAY PLAN TAB */}
        {activeTab === "plan" && (
          <div>
            <SectionTitle>📆 7-Day Study Plan</SectionTitle>
            <Card style={{ marginBottom: 20, borderColor: colors.accent }}>
              <p style={{ color: colors.text, margin: 0, lineHeight: 1.7 }}>
                🎯 <strong style={{ color: colors.accent }}>How to use this plan:</strong> Spend about 45–60 minutes per day. Do the activities in order. Write the homework exercises in a notebook — writing helps you remember. Don't skip to the next day until you feel comfortable with the current one.
              </p>
            </Card>
            {STUDY_PLAN.map((day, i) => (
              <Card key={i} style={{ marginBottom: 16, borderColor: i === 6 ? colors.accent : colors.cardBorder }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ background: i === 6 ? colors.accent : colors.cardBorder, color: i === 6 ? "#000" : colors.textMuted, borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                    {day.day}
                  </div>
                  <div>
                    <div style={{ color: i === 6 ? colors.accent : colors.text, fontWeight: 700, fontSize: 16 }}>{day.emoji} {day.title}</div>
                    <div style={{ color: colors.textMuted, fontSize: 12 }}>Focus: {day.focus}</div>
                  </div>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ color: colors.textMuted, fontSize: 11, letterSpacing: 1, marginBottom: 6, textTransform: "uppercase" }}>Today's Activities</div>
                  {day.activities.map((a, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, marginBottom: 4, alignItems: "flex-start" }}>
                      <span style={{ color: colors.accent, marginTop: 2 }}>✓</span>
                      <span style={{ color: colors.text, fontSize: 13 }}>{a}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: `${colors.accentSoft}`, border: `1px solid ${colors.accentSoft2}`, borderRadius: 8, padding: 12 }}>
                  <div style={{ color: colors.accent, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>✍️ HOMEWORK</div>
                  <div style={{ color: colors.text, fontSize: 13 }}>{day.homework}</div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TenseDetail({ tense, onBack, showAnswers, toggleAnswer, userAnswers, setUserAnswers }) {
  return (
    <div>
      <button onClick={onBack} style={{ background: "transparent", border: `1px solid ${colors.cardBorder}`, color: colors.textMuted, padding: "6px 14px", borderRadius: 6, cursor: "pointer", marginBottom: 20, fontSize: 13 }}>← Back to all tenses</button>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <span style={{ fontSize: 40 }}>{tense.emoji}</span>
        <div>
          <div style={{ color: tense.color, fontSize: 11, fontWeight: 700, letterSpacing: 2 }}>{tense.tag}</div>
          <h2 style={{ margin: 0, color: "#fff", fontSize: 28 }}>{tense.name}</h2>
        </div>
      </div>

      {/* WHEN */}
      <Card style={{ marginBottom: 16, borderColor: tense.color }}>
        <SectionLabel color={tense.color}>📌 When to Use It</SectionLabel>
        {tense.when.map((w, i) => (
          <Bullet key={i} color={tense.color}>{w}</Bullet>
        ))}
      </Card>

      {/* FORMULA */}
      <Card style={{ marginBottom: 16, borderColor: tense.color }}>
        <SectionLabel color={tense.color}>🔧 How to Form It</SectionLabel>
        <div style={{ display: "grid", gap: 6 }}>
          {tense.formula.map((f, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "6px 10px", background: colors.bg, borderRadius: 6 }}>
              <span style={{ color: colors.textMuted, fontSize: 12, minWidth: 120, flexShrink: 0 }}>{f.label}</span>
              <span style={{ color: tense.color, fontWeight: 600, fontFamily: "monospace", fontSize: 13 }}>{f.form}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* KEYWORDS */}
      <Card style={{ marginBottom: 16 }}>
        <SectionLabel color={tense.color}>🔑 Signal Words & Keywords</SectionLabel>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tense.keywords.map((k, i) => (
            <span key={i} style={{ background: `${tense.color}22`, color: tense.color, padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{k}</span>
          ))}
        </div>
      </Card>

      {/* EXAMPLES */}
      <Card style={{ marginBottom: 16 }}>
        <SectionLabel color={tense.color}>💬 5 Simple Examples</SectionLabel>
        {tense.examples.map((ex, i) => (
          <div key={i} style={{ padding: "8px 12px", margin: "4px 0", background: colors.bg, borderRadius: 6, borderLeft: `3px solid ${tense.color}`, color: colors.text, fontSize: 14 }}>
            {ex}
          </div>
        ))}
      </Card>

      {/* MISTAKES */}
      <Card style={{ marginBottom: 16, borderColor: colors.red }}>
        <SectionLabel color={colors.red}>⚠️ Common Mistakes</SectionLabel>
        {tense.mistakes.map((m, i) => (
          <div key={i} style={{ marginBottom: 12, padding: "10px", background: colors.bg, borderRadius: 8 }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
              <span style={{ color: colors.red }}>✗</span>
              <span style={{ color: colors.red, textDecoration: "line-through", fontSize: 13 }}>{m.wrong}</span>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
              <span style={{ color: colors.green }}>✓</span>
              <span style={{ color: colors.green, fontSize: 13 }}>{m.right}</span>
            </div>
            <div style={{ color: colors.textMuted, fontSize: 12, marginLeft: 20 }}>💡 {m.tip}</div>
          </div>
        ))}
      </Card>

      {/* MEMORY TRICK */}
      <Card style={{ marginBottom: 16, background: `linear-gradient(135deg, ${colors.accentSoft}, ${colors.card})`, borderColor: colors.accent }}>
        <div style={{ color: colors.text, fontSize: 14, lineHeight: 1.7 }}>{tense.trick}</div>
      </Card>

      {/* EXERCISES */}
      <Card style={{ borderColor: tense.color }}>
        <SectionLabel color={tense.color}>✏️ Practice Exercises</SectionLabel>
        {tense.exercises.map((ex, i) => {
          const key = `${tense.id}-ex-${i}`;
          return (
            <div key={i} style={{ marginBottom: 14, padding: "12px", background: colors.bg, borderRadius: 8 }}>
              <div style={{ color: colors.text, fontSize: 14, marginBottom: 8 }}>
                <strong style={{ color: tense.color }}>{i + 1}.</strong> {ex.q}
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <button onClick={() => toggleAnswer(key)}
                  style={{ padding: "5px 14px", background: showAnswers[key] ? tense.color : "transparent", color: showAnswers[key] ? "#000" : tense.color, border: `1px solid ${tense.color}`, borderRadius: 5, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
                  {showAnswers[key] ? "Hide Answer" : "Show Answer"}
                </button>
                {showAnswers[key] && (
                  <div style={{ color: colors.green, fontSize: 13 }}>
                    <strong>Answer:</strong> {ex.a} — <em style={{ color: colors.textMuted }}>{ex.exp}</em>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
}

function ComparisonDetail({ comparison, onBack, showAnswers, toggleAnswer }) {
  return (
    <div>
      <button onClick={onBack} style={{ background: "transparent", border: `1px solid ${colors.cardBorder}`, color: colors.textMuted, padding: "6px 14px", borderRadius: 6, cursor: "pointer", marginBottom: 20, fontSize: 13 }}>← Back to comparisons</button>

      <h2 style={{ color: "#fff", fontSize: 24, marginBottom: 20 }}>{comparison.emoji} {comparison.title}</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
        {[comparison.left, comparison.right].map((side, i) => (
          <div key={i} style={{ background: colors.card, border: `1px solid ${comparison.color}`, borderRadius: 10, padding: 16 }}>
            <div style={{ color: comparison.color, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{side.name}</div>
            <div style={{ color: colors.accent, fontSize: 11, fontWeight: 700, marginBottom: 6 }}>SIGNAL: {side.signal}</div>
            <div style={{ color: colors.textMuted, fontSize: 12, marginBottom: 10, lineHeight: 1.5 }}>{side.rule}</div>
            {side.examples.map((ex, j) => (
              <div key={j} style={{ padding: "6px 10px", margin: "3px 0", background: colors.bg, borderRadius: 5, borderLeft: `2px solid ${comparison.color}`, color: colors.text, fontSize: 12 }}>
                {ex}
              </div>
            ))}
          </div>
        ))}
      </div>

      <Card style={{ marginBottom: 16, background: `linear-gradient(135deg, ${colors.accentSoft}, ${colors.card})`, borderColor: colors.accent }}>
        <div style={{ color: colors.text, fontSize: 14, lineHeight: 1.7 }}>{comparison.tip}</div>
      </Card>

      <Card style={{ borderColor: comparison.color }}>
        <SectionLabel color={comparison.color}>✏️ Practice</SectionLabel>
        {comparison.exercises.map((ex, i) => {
          const key = `${comparison.id}-${i}`;
          return (
            <div key={i} style={{ marginBottom: 12, padding: "12px", background: colors.bg, borderRadius: 8 }}>
              <div style={{ color: colors.text, fontSize: 14, marginBottom: 8 }}>
                <strong style={{ color: comparison.color }}>{i + 1}.</strong> {ex.q}
              </div>
              <button onClick={() => toggleAnswer(key)}
                style={{ padding: "5px 14px", background: showAnswers[key] ? comparison.color : "transparent", color: showAnswers[key] ? "#000" : comparison.color, border: `1px solid ${comparison.color}`, borderRadius: 5, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
                {showAnswers[key] ? "Hide Answer" : "Show Answer"}
              </button>
              {showAnswers[key] && (
                <div style={{ marginTop: 6, color: colors.green, fontSize: 13 }}>
                  <strong>Answer:</strong> {ex.a} — <em style={{ color: colors.textMuted }}>{ex.exp}</em>
                </div>
              )}
            </div>
          );
        })}
      </Card>
    </div>
  );
}

function Card({ children, style = {}, onClick }) {
  return (
    <div onClick={onClick} style={{ background: colors.card, border: `1px solid ${colors.cardBorder}`, borderRadius: 10, padding: 16, ...style }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{ color: "#fff", fontSize: 22, marginBottom: 16, marginTop: 0, borderBottom: `1px solid ${colors.cardBorder}`, paddingBottom: 10 }}>
      {children}
    </h2>
  );
}

function SectionLabel({ children, color }) {
  return (
    <div style={{ color: color || colors.textMuted, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>
      {children}
    </div>
  );
}

function Bullet({ children, color }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
      <span style={{ color: color, marginTop: 2 }}>▸</span>
      <span style={{ color: colors.text, fontSize: 13, lineHeight: 1.5 }}>{children}</span>
    </div>
  );
}
