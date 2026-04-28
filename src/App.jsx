import { useState } from "react";

// Import styles
import "./styles/index.css";
import "./styles/App.css";
import "./styles/components.css";

// Import colors and data
import { colors } from "./data/colors";

// Import components
import { Header } from "./components/Header";
import { RoadmapTab } from "./components/tabs/RoadmapTab";
import { TensesTab } from "./components/tabs/TensesTab";
import { CompareTab } from "./components/tabs/CompareTab";
import { IrregularVerbsTab } from "./components/tabs/IrregularVerbsTab";
import { StudyPlanTab } from "./components/tabs/StudyPlanTab";

export default function App() {
  const [activeTab, setActiveTab] = useState("roadmap");
  const [activeTense, setActiveTense] = useState(null);
  const [activeComparison, setActiveComparison] = useState(null);
  const [showAnswers, setShowAnswers] = useState({});
  const [userAnswers, setUserAnswers] = useState({});

  const toggleAnswer = (key) => {
    setShowAnswers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleTabChange = () => {
    setActiveTense(null);
    setActiveComparison(null);
  };

  return (
    <div style={{ background: colors.bg, minHeight: "100vh", fontFamily: "'Georgia', 'Times New Roman', serif", color: colors.text }}>
      {/* Header with navigation */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onTabChange={handleTabChange}
      />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>
        {/* ROADMAP TAB */}
        {activeTab === "roadmap" && (
          <RoadmapTab setActiveTab={setActiveTab} setActiveTense={setActiveTense} setActiveComparison={setActiveComparison} />
        )}

        {/* TENSES TAB */}
        {activeTab === "tenses" && (
          <TensesTab 
            activeTense={activeTense} 
            setActiveTense={setActiveTense} 
            showAnswers={showAnswers} 
            toggleAnswer={toggleAnswer}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
          />
        )}

        {/* COMPARE TAB */}
        {activeTab === "compare" && (
          <CompareTab 
            activeComparison={activeComparison} 
            setActiveComparison={setActiveComparison}
            showAnswers={showAnswers}
            toggleAnswer={toggleAnswer}
          />
        )}

        {/* IRREGULAR VERBS TAB */}
        {activeTab === "irregular" && (
          <IrregularVerbsTab />
        )}

        {/* 7-DAY PLAN TAB */}
        {activeTab === "plan" && (
          <StudyPlanTab />
        )}
      </div>
    </div>
  );
}

/*
  ===== ORIGINAL DATA (KEPT FOR REFERENCE - NOW ORGANIZED INTO /data FOLDER) =====
  
  This section previously contained:
  - TENSES array with 7 tense types
  - COMPARISONS array with 5 comparison pairs
  - STUDY_PLAN array with 7-day study schedule
  - IRREGULAR_VERBS array with 30 irregular verbs

  All data has been moved to organized files in src/data/:
  - src/data/colors.js
  - src/data/tenses.js
  - src/data/comparisons.js
  - src/data/studyPlan.js
  - src/data/irregularVerbs.js

  This maintains separation of concerns and makes the code more maintainable.
*/

/*
  ===== COMPONENT STRUCTURE =====
  
  src/
  ├── App.jsx (main app orchestrator)
  ├── data/
  │   ├── colors.js
  │   ├── tenses.js
  │   ├── comparisons.js
  │   ├── studyPlan.js
  │   └── irregularVerbs.js
  ├── components/
  │   ├── Header.jsx
  │   ├── Card.jsx
  │   ├── SectionTitle.jsx
  │   ├── SectionLabel.jsx
  │   ├── Bullet.jsx
  │   ├── TenseDetail.jsx
  │   ├── ComparisonDetail.jsx
  │   └── tabs/
  │       ├── RoadmapTab.jsx
  │       ├── TensesTab.jsx
  │       ├── CompareTab.jsx
  │       ├── IrregularVerbsTab.jsx
  │       └── StudyPlanTab.jsx
  └── styles/
      ├── App.css
      ├── components.css
      └── index.css
*/

/*
  ===== PROJECT STRUCTURE =====
  
  This React project has been refactored into a modular, maintainable structure:
  
  src/
  ├── App.jsx (main app orchestrator)
  ├── data/ (all data and constants)
  │   ├── colors.js (color palette)
  │   ├── tenses.js (7 English tenses)
  │   ├── comparisons.js (5 tense comparison pairs)
  │   ├── studyPlan.js (7-day study plan)
  │   └── irregularVerbs.js (30 irregular verbs)
  ├── components/ (reusable React components)
  │   ├── Header.jsx (navigation header)
  │   ├── Card.jsx (card wrapper component)
  │   ├── SectionTitle.jsx (section heading)
  │   ├── SectionLabel.jsx (label for sections)
  │   ├── Bullet.jsx (bullet point component)
  │   ├── TenseDetail.jsx (detailed tense view)
  │   ├── ComparisonDetail.jsx (detailed comparison view)
  │   └── tabs/ (tab content components)
  │       ├── RoadmapTab.jsx (learning roadmap)
  │       ├── TensesTab.jsx (tenses lesson)
  │       ├── CompareTab.jsx (tense comparisons)
  │       ├── IrregularVerbsTab.jsx (verb reference)
  │       └── StudyPlanTab.jsx (study schedule)
  └── styles/ (organized CSS)
      ├── index.css (global styles & CSS variables)
      ├── App.css (app-level styles)
      └── components.css (component-specific styles)
  
  === KEY BENEFITS ===
  ✓ Separation of Concerns: Each file has a single responsibility
  ✓ Reusable Components: Card, Section* components used across tabs
  ✓ Centralized Data: All data in /data folder, easy to update
  ✓ Organized Styles: CSS in /styles folder with clear structure
  ✓ Easy to Maintain: Finding and updating features is straightforward
  ✓ Scalable: Easy to add new tenses, comparisons, or study plans
  ✓ Type-Friendly: Structure ready for TypeScript conversion
  
  **OLD DATA MOVED**: All original data (TENSES array, COMPARISONS, STUDY_PLAN, 
  IRREGULAR_VERBS) and component functions have been moved to their respective 
  organized files. This file now only orchestrates the top-level app structure.
*/
