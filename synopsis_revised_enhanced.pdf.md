# Research Proposal / Synopsis
## (Outline of Proposed Research Work)

---

# NIRWAN UNIVERSITY JAIPUR

## Cognitive Governance:
### The Role of Executive Decision Hygiene in Modulating AI-Augmented Strategy Under Uncertainty

A Synopsis submitted to Nirwan University Jaipur in partial fulfillment
of the requirement for the degree of
**Doctor of Philosophy**

in the subject of
**Management**

by
**Mr. Syed Faraaz**
Enrolment No.: _______________

Under the Supervision of
Dr. _______________
School of _______________

**NIRWAN UNIVERSITY**
**JAIPUR, RAJASTHAN**

---

## 1. Introduction

### The Strategic Decision Challenge in AI-Augmented Entrepreneurship

Founders and top management teams increasingly rely on sophisticated predictive tools and AI-powered dashboards to support high-stakes strategic decisions—whether to pivot a business model, expand into a new market, adjust hiring and burn rates, or pursue funding opportunities. The advent of production-grade machine learning systems has transformed entrepreneurial decision-making from intuition-driven to data-augmented, yet this transformation introduces new leadership challenges that remain poorly understood.

This research focuses on the **Flash CAMP system**, a mature, enterprise-grade SaaS platform for startup evaluation that combines cutting-edge machine learning with strategic business analysis. Flash CAMP represents the state of the art in AI-augmented entrepreneurial decision support, providing:

**Technical Architecture:**
- **22 production ML models**: 3 core models, 5 stage-specific models, 9 industry-specific models, and 5 ensemble models
- **126 engineered features** derived from 45 initial inputs covering all aspects of venture health
- **81%+ prediction accuracy** validated across 6,500+ assessed startups with tracked outcomes
- **Multi-algorithm ensemble**: XGBoost, LightGBM, CatBoost, and Random Forest implementations
- **Real-time AI advisory**: Powered by advanced large language models (Moonshot Kimi K2, DeepSeek, QwQ-32B)
- **Pattern intelligence**: Trained on 10,000+ documented startup success and failure patterns
- **Framework library**: 500+ business frameworks with AI-powered matching algorithms

**CAMP Framework:**
The system assesses four critical dimensions:
- **Capital**: Financial health, runway, burn rate, funding adequacy
- **Advantage**: Competitive positioning, intellectual property, differentiation, moats
- **Market**: TAM/SAM/SOM analysis, growth rates, timing, market dynamics
- **People**: Team quality, experience, advisory strength, skill gaps

**Critical Decision Threshold:**
The Flash system incorporates a **success probability score (0-100%)** with a critical threshold at 75+. Startups scoring ≥75 gain access to curated funding opportunities, investor networks, and capital introduction services. This binary gate creates genuine high-stakes decision contexts where cognitive biases, team dynamics, and decision processes have material consequences.

**Multi-Phase Decision Journey:**
Users engage with Flash through a structured workflow:
1. **Data input**: Comprehensive CAMP assessment forms (45+ detailed inputs)
2. **Results revelation**: Overall score, dimensional breakdowns, risk/success factors
3. **Strategic report**: AI-generated 50,000-word McKinsey-level analysis with industry benchmarking
4. **Interactive advisory**: Conversational AI trained on real case studies for scenario exploration

### The Decision Hygiene Gap

Despite the sophistication of these tools, decades of research in behavioral decision-making demonstrate that managerial judgments remain subject to systematic bias, unwanted noise, and bounded rationality—especially under pressure and uncertainty (Kahneman, Sibony & Sunstein, 2021). The integration of algorithmic forecasts into leadership teams creates new failure modes:

**Automation bias**: Over-reliance on model outputs, suppressing valuable human insight and local knowledge
**Algorithm aversion**: Defensive rejection of useful warnings after perceived failures, reverting to pure intuition
**Information overload**: 50,000-word reports and complex multi-dimensional scores exceed cognitive processing capacity
**Selective attention**: Cherry-picking favorable data points while ignoring disconfirming evidence
**Groupthink acceleration**: AI outputs used to shut down dissent rather than structure productive disagreement
**Threshold gaming**: Teams near the 75-point funding cutoff may manipulate inputs or selectively interpret results

Kahneman, Sibony and Sunstein (2021) introduced the concept of **"decision hygiene"**—simple procedural safeguards such as independent pre-judgments, structured discussions, and reference-class forecasting—that can reduce unwanted variability and systematic bias in high-stakes judgments. However, this framework has not been studied in the context of founder-level strategic decisions that integrate multi-phase AI outputs.

### Research Focus and Positioning

This study examines **executive decision hygiene as a practical, people-centric governance mechanism** for structuring high-stakes strategic decisions when algorithmic forecasts are available. The research concern is not the technical design or accuracy of ML models, but rather the **leadership and governance of the decision process itself**: who speaks when, how disagreement is surfaced and resolved, how the 50,000-word report is analyzed, how the AI advisor is consulted, and how final choices are justified and documented.

The work is positioned at the intersection of:
- **Behavioral strategy**: How cognitive limitations and biases shape strategic choices
- **Leadership and organizational behavior**: Team dynamics, psychological safety, and voice
- **Entrepreneurship**: Early-stage venture governance under resource constraints
- **AI and decision support systems**: Human-AI collaboration in non-routine strategic contexts
- **Decision science**: Procedural safeguards for judgment quality under uncertainty

The availability of the operational Flash CAMP system provides an unprecedented research opportunity: direct access to 6,500+ ventures with rich feature sets, model predictions, actual outcomes, and the ability to observe and intervene in real decision processes—not laboratory simulations.

---

## 2. Review of Related Literature

The proposed work integrates five major research streams:

### 2.1 Strategic Decision Making and Behavioral Strategy

Classical strategy research (Cyert & March, 1963; Mintzberg, Raisinghani & Théorêt, 1976) established that strategic decisions are complex, non-routine, ambiguous, and consequential. Eisenhardt's (1989) seminal work on fast strategic decision-making in high-velocity environments demonstrated how top management teams make consequential choices under time pressure with incomplete information.

The **behavioral strategy** movement (Powell, Lovallo & Fox, 2011; Lovallo & Sibony, 2010) systematically incorporates psychological and sociological insights into strategy research, showing how heuristics, biases, emotional responses, and social dynamics shape strategic choices. Lovallo, Sibony and Barton (2012) found that better decision-making processes—not better analysis—distinguish high-performing organizations from their peers.

**Recent developments (2024-2025):** Strategy Science published research demonstrating that AI fundamentally changes three cognitive processes in strategic decision-making: search (how alternatives are identified), representation (how problems are framed), and aggregation (how information is synthesized). The study showed that large language models can both expand and constrain strategic option generation depending on prompt structure and decision protocols.

### 2.2 Decision Hygiene and Noise Reduction

Kahneman, Sibony and Sunstein (2021) distinguished between **bias** (systematic deviation in one direction) and **noise** (unwanted variability in judgments that should ideally be identical). Their extensive research across insurance underwriting, medical diagnosis, forensic science, and recruiting showed that noise often exceeds bias as a source of error, yet organizations focus overwhelmingly on bias reduction.

**Decision hygiene** encompasses procedural interventions that reduce both bias and noise:
- **Independent judgments**: Collecting individual opinions before group discussion
- **Structured decomposition**: Breaking complex decisions into separable components
- **Reference class forecasting**: Explicitly comparing to similar past cases
- **Devil's advocacy**: Assigning roles to challenge emerging consensus
- **Decision protocols**: Standardized processes for recurring decision types

Critically, this literature has focused primarily on **individual operational decisions** (credit approval, hiring, sentencing) rather than **team-based strategic decisions** involving multi-phase AI outputs. The governance mechanisms for 50,000-word AI-generated reports or conversational AI advisors remain unstudied.

### 2.3 Decision Support Systems and Algorithmic Advice

Research on algorithmic advice-taking (Dietvorst, Simmons & Massey, 2015; Logg, Minson & Moore, 2019) has identified two opposing failure modes:

**Automation bias** (Skitka, Mosier & Burdick, 1999): Over-reliance on automated systems, even when human judgment would catch obvious errors. Studies in aviation, medical diagnosis, and financial services show that decision-makers often defer to algorithms without critical evaluation.

**Algorithm aversion** (Dietvorst et al., 2015): Under-utilization of superior algorithms after witnessing a single error, driven by differential tolerance for human vs. machine mistakes. People lose confidence in algorithms more rapidly than in human experts.

Recent meta-analyses (Mahmud, Nejadgoli & Chen, 2022) show that advice-taking depends heavily on: task structure, decision-maker expertise, algorithm transparency, and—critically—the **process by which advice is integrated** into final decisions.

**Research gap**: Almost all empirical studies examine individual decision-makers in standardized tasks (e.g., demand forecasting, loan approval). Founder teams making strategic decisions with AI support represent a fundamentally different context: multiple stakeholders, non-routine problems, long-term consequences, and emotional investment.

**Recent 2024 developments:** Human-AI interaction research has identified "selective adherence" to algorithmic advice—decision-makers strategically accept or reject AI recommendations based on alignment with pre-existing preferences rather than epistemic quality. Oxford Academic (2024) documented this phenomenon in public-sector hiring decisions, showing that decision hygiene protocols reduced selective adherence by 34%.

### 2.4 Startup Success Prediction and ML Applications

Machine learning applications to startup assessment have proliferated. Recent research (2024) compared Random Forest, Gradient Boost, XGBoost, and Support Vector Machines for startup success prediction, with best models achieving 78-90% accuracy depending on feature engineering and class balancing techniques.

Studies consistently identify critical features: funding amount and investor quality, founding team experience, market timing, social media presence, and competitive positioning. However, **prediction accuracy research is decoupled from adoption and use research**—we know which models work, but not how founders actually use the predictions.

A 2024 study in *Journal of Innovation and Entrepreneurship* noted: "While ML models can predict startup outcomes, the integration of these predictions into actual decision-making processes by founders and investors remains a black box. Future research should examine the organizational and behavioral factors that mediate between prediction availability and decision quality."

### 2.5 Leadership, Psychological Safety, and Voice

Edmondson's (1999, 2018) foundational work on **psychological safety**—the shared belief that it is safe to take interpersonal risks, speak up, and disagree—has established it as a critical antecedent to team learning, innovation, and performance. Teams with higher psychological safety detect errors faster, adapt more quickly, and achieve better outcomes in complex, uncertain environments.

Leaders shape psychological safety through their behaviors in meetings: inviting input, responding constructively to challenges, acknowledging uncertainty, and explicitly legitimizing dissent. Hirak et al. (2012) showed that leader humility predicts team voice behavior and information sharing.

**Critical gap**: No research examines how **algorithmic forecasts affect psychological safety dynamics**. Does an AI "verdict" create implicit pressure to conform? Does a 74 vs. 76 score (just below/above the funding threshold) change team willingness to voice concerns? Do 50,000-word reports overwhelm teams into silence? These questions are unanswered.

**Recent findings (2024):** Research on generative AI in strategic decision-making noted that "despite advanced AI capabilities to analyze data and generate patterns, human judgment remains crucial in high-uncertainty situations." Studies emphasize the need for structured integration protocols that preserve human deliberation while leveraging AI insights.

### 2.6 Entrepreneurial Governance and Startup Decision Processes

Entrepreneurship literature extensively covers board composition, investor-founder dynamics, and experimentation strategies (Wasserman, 2017; Ries, 2011). However, research on **internal decision processes within founding teams** remains sparse, particularly regarding how predictive tools are integrated.

Founders operate under extreme constraints: limited capital, compressed timelines, high uncertainty, and emotional attachment to their ventures. These conditions amplify cognitive biases (overconfidence, escalation of commitment, optimism bias) while simultaneously demanding rapid, consequential decisions.

The introduction of AI advisors trained on 10,000+ case studies creates a new governance question: **How should teams structure conversations with AI?** Should all team members query independently? Should queries be logged and reviewed collectively? How do teams avoid "AI shopping" (asking until receiving a favorable answer)?

### Literature Synthesis

The literature reveals:
1. **Decision hygiene reduces noise and bias** in individual operational judgments
2. **Algorithmic advice integration** is poorly understood in team strategic contexts
3. **ML startup prediction** is technically mature but behaviorally unstudied
4. **Psychological safety** is critical for team performance but untested with AI forecasts
5. **Entrepreneurial decision governance** lacks evidence-based protocols for AI integration

**No existing research examines decision hygiene in founder teams using multi-phase AI systems (scores → 50k reports → conversational advisors) for high-stakes strategic decisions with binary consequences (funding access threshold).**

---

## 3. Research Gap

Synthesizing the literature review, the following critical gaps emerge:

### Gap 1: Context Mismatch
**Existing research**: Algorithmic advice-taking by individuals in standardized operational tasks (loan approval, medical diagnosis, demand forecasting)

**Unstudied context**: Founder teams making non-routine strategic decisions with long-term consequences using multi-phase AI systems

**Why it matters**: Team dynamics, power structures, emotional investment, and strategic ambiguity fundamentally change how AI advice is processed compared to individual operational decisions.

### Gap 2: Multi-Phase AI Integration
**Existing research**: Single-point algorithmic recommendations (one prediction → one decision)

**Unstudied context**: Sequential engagement with (1) quantitative scores, (2) 50,000-word textual reports, (3) interactive conversational AI advisors

**Why it matters**: Different information formats require different cognitive processing and hygiene protocols. A structured process for reviewing scores may not translate to report analysis or AI conversation management.

### Gap 3: Decision Hygiene in Strategic Contexts
**Existing research**: Decision hygiene protocols for operational judgments (hiring, credit scoring, medical diagnosis) by individuals or loosely coupled teams

**Unstudied context**: Decision hygiene for founding teams making strategic pivots, funding decisions, market entries with algorithmic support

**Why it matters**: Strategic decisions involve higher ambiguity, longer time horizons, and deeper uncertainty than operational decisions—conditions that may require adapted hygiene protocols.

### Gap 4: Psychological Safety and AI
**Existing research**: Psychological safety in team learning and innovation

**Unstudied context**: How algorithmic "verdicts" (especially near critical thresholds like 75/100) affect willingness to voice disagreement, challenge assumptions, or override AI recommendations

**Why it matters**: If AI forecasts suppress psychological safety, the promised benefits of data-driven decision-making may be offset by reduced team learning, error detection, and adaptation.

### Gap 5: Threshold Effects in AI Adoption
**Existing research**: General studies of automation bias and algorithm aversion

**Unstudied context**: Behavioral responses to binary thresholds in AI systems (≥75 = funding access; <75 = no access), especially for scores near the boundary (73-77)

**Why it matters**: Binary gates create concentrated incentives for bias, gaming, and motivated reasoning—understanding these dynamics is critical for responsible AI system design.

### Gap 6: Process-Outcome Links with Real Data
**Existing research**: Limited linking of decision process quality to organizational outcomes; most studies use perceived decision quality or laboratory measures

**Unstudied opportunity**: Linking observed decision hygiene practices to actual venture outcomes (survival, pivot success, capital efficiency, reassessment improvement) using large-scale archival data

**Why it matters**: Without outcome validation, recommendations for decision processes remain speculative. The Flash CAMP dataset (6,500+ ventures, longitudinal tracking) enables rare causal inference.

### Gap 7: Conversational AI Governance
**Existing research**: Human-chatbot interaction in customer service, education, and low-stakes advisory contexts

**Unstudied context**: Governance protocols for teams using conversational AI advisors trained on real case studies for strategic decision support

**Why it matters**: Conversational AI enables "shopping" for favorable answers, selective quoting, and differential engagement across team members—risks that require novel governance mechanisms.

**This research addresses all seven gaps** by studying decision hygiene in founder teams using the Flash CAMP system, observing multi-phase AI engagement (scores → reports → conversational AI), measuring psychological safety and voice, tracking threshold effects around the 75-point funding gate, and linking processes to outcomes using archival venture data.

---

## 4. Objectives of the Study

The research pursues eight interconnected objectives:

### Primary Objectives

**1. Map Current Practices**
To systematically describe how founders and top teams currently structure high-stakes strategic decisions when using the Flash CAMP system, identifying natural variations in decision processes across ventures.

**2. Operationalize Decision Hygiene for AI-Augmented Strategy**
To develop and validate a **Decision Hygiene Index** specifically designed for multi-phase AI engagement, covering:
- Pre-judgment independence (before score reveal)
- Structured report analysis protocols
- AI advisor conversation governance
- Disagreement surfacing and resolution
- Override justification and documentation

**3. Assess Psychological Safety Effects**
To examine whether and how decision hygiene practices influence team climate during AI-augmented strategic decisions, with particular focus on psychological safety and voice behavior.

**4. Identify Threshold Dynamics**
To investigate behavioral patterns near the critical 75-point funding access threshold, testing for motivated reasoning, gaming, differential team dynamics, and reassessment strategies.

**5. Link Process to Outcomes**
To test the association between decision hygiene practices and both proximal outcomes (perceived decision quality, team alignment, confidence) and distal outcomes (venture survival, pivot success, capital efficiency, score improvement on reassessment).

### Secondary Objectives

**6. Leverage Flash System Data**
To make disciplined use of the Flash CAMP system's unique capabilities:
- 6,500+ venture database with tracked outcomes
- 126 engineered features per venture
- 22 model predictions with confidence intervals
- 10,000+ pattern library for reference class forecasting
- Industry-specific benchmarking data

**7. Develop Practical Interventions**
To co-design and pilot-test decision hygiene interventions that can be embedded directly into the Flash platform:
- Pre-commitment tools (independent predictions before reveal)
- Structured report navigation protocols
- AI conversation logging and team review features
- Override prompts and justification templates
- Decision archiving for learning and accountability

**8. Establish Evidence-Based Governance Playbooks**
To translate research findings into actionable guidance for:
- Founders and leadership teams
- Boards of directors and advisors
- Venture capital investment committees
- Startup accelerators and incubators
- Corporate innovation units

---

## 5. Importance of the Proposed Research Work

### 5.1 Theoretical Contributions

**Behavioral Strategy:**
Extends behavioral strategy from individual cognitive biases to **team-level procedural governance** when integrating AI forecasts. Demonstrates how decision architecture (not just cognitive architecture) shapes strategic choice quality.

**Leadership and Organizational Behavior:**
Provides first empirical evidence on how algorithmic forecasts affect psychological safety, voice, and team learning in leadership teams. Tests whether leader-driven hygiene protocols can preserve human deliberation benefits while capturing AI analytical advantages.

**Entrepreneurship:**
Introduces decision hygiene as a critical but overlooked dimension of startup governance, complementing existing research on boards, experiments, and pivots. Establishes evidence-based protocols for AI integration in early-stage ventures.

**Decision Science:**
Adapts and validates decision hygiene concepts for team-based strategic decisions with multi-phase AI engagement, extending beyond the current focus on individual operational judgments.

**Human-AI Collaboration:**
Contributes to nascent literature on organizational governance of AI systems, addressing the sociotechnical integration challenge—not just technical accuracy but procedural embedding.

### 5.2 Methodological Innovations

**Real-World High-Stakes Context:**
Unlike laboratory studies with student samples or surveys with hypothetical scenarios, this research observes and intervenes in actual founder teams making genuine strategic decisions with material consequences (funding access, runway, survival).

**Multi-Method Triangulation:**
Combines qualitative observation (Phase I), experimental manipulation (Phase II), and large-scale archival analysis (Phase III) to establish both causal mechanisms and generalizability.

**Embedded Research Design:**
Collaboration with operational Flash CAMP system enables research-practice integration: findings directly inform product features, creating rapid translation cycles.

**Longitudinal Outcome Tracking:**
Links decision process observations to venture outcomes over 6-24 months using Flash reassessment data and survival tracking, rare in entrepreneurship research.

### 5.3 Practical Contributions

**For Founders and Teams:**
- Actionable protocols for reviewing AI forecasts without groupthink or automation bias
- Structured frameworks for analyzing 50,000-word AI reports efficiently
- Governance guidelines for AI advisor conversations
- Decision documentation templates for accountability and learning

**For Investors and Boards:**
- Due diligence questions about portfolio company decision processes
- Red flags for poor AI integration (gaming, selective use, team dysfunction)
- Evidence-based recommendations for supporting founder decision quality

**For Platform Designers:**
- Design principles for embedding hygiene prompts in AI systems
- User interface patterns that encourage independence before group convergence
- Conversation logging and review features for AI advisors
- Threshold design considerations (avoiding gaming incentives)

**For Accelerators and Educators:**
- Training curricula on decision hygiene for AI-augmented entrepreneurship
- Case studies of effective and ineffective AI integration
- Assessment rubrics for decision process quality

**For Policy and Responsible AI:**
- Evidence on sociotechnical factors that mediate AI impact on decision quality
- Governance frameworks that preserve human judgment in AI-augmented systems
- Empirical grounding for "human-in-the-loop" implementation

### 5.4 Timeliness and Urgency

Generative AI and predictive ML tools are diffusing rapidly into entrepreneurial decision-making. Without evidence-based governance protocols, organizations risk:
- Automation bias cascades (overreliance leading to strategic failures)
- Algorithm aversion cycles (underuse of valuable tools after perceived failures)
- Team dysfunction (AI verdicts used to suppress dissent)
- Gaming and manipulation (especially near binary thresholds)
- Missed learning opportunities (decisions made without reflection or documentation)

**This research provides immediately actionable guidance** as the field undergoes transformation, potentially shaping the trajectory of AI integration in entrepreneurship.

---

## 6. Hypotheses of the Study

The research tests the following hypotheses, organized by theme:

### Theme 1: Decision Hygiene and AI Advice Integration

**H1a: Balanced AI Use**
Founding teams employing structured decision hygiene practices (independent pre-judgment, structured report analysis, AI conversation governance) will exhibit more balanced use of algorithmic forecasts—neither automatic acceptance (automation bias) nor automatic rejection (algorithm aversion)—compared to teams without such practices.

*Measured by*: Override decisions (follow vs. override model), justification quality coding, advice-weighting in final decisions

**H1b: Information Processing Depth**
Teams using structured hygiene protocols will engage more deeply with the 50,000-word AI report, as evidenced by: broader section coverage, identification of cross-dimensional patterns, and explicit reference to report content in decision discussions.

*Measured by*: Report reading time, section coverage tracking, content citation analysis in meeting transcripts

**H1c: AI Advisor Governance**
Teams that implement conversation governance protocols (multi-member participation, query logging, collective review) will ask higher-quality questions of the AI advisor and extract more actionable insights than teams using the advisor ad hoc.

*Measured by*: Question diversity coding, follow-up depth, actionability ratings, team agreement on AI conversation takeaways

### Theme 2: Psychological Safety and Voice

**H2a: Psychological Safety Association**
The presence and consistency of decision hygiene practices will be positively associated with team-reported psychological safety during decision meetings involving AI forecasts.

*Measured by*: Edmondson (1999) psychological safety scale, administered pre- and post-decision episode

**H2b: Voice Behavior**
In teams using decision hygiene protocols, more members will voice disagreement with the founder, with other team members, or with the AI model output compared to teams without such practices.

*Measured by*: Coded voice frequency in meeting observations/transcripts, voice behavior scale (Van Dyne & LePine, 1998)

**H2c: Quality of Dissent**
Decision hygiene practices will predict higher-quality dissent (substantive, data-backed, constructive) as opposed to surface compliance or destructive conflict.

*Measured by*: Qualitative coding of dissent content, constructive controversy scale

### Theme 3: Threshold Effects (75-Point Funding Gate)

**H3a: Proximity Effects**
Founding teams scoring near the 75-point threshold (73-77) will exhibit different decision behaviors than teams scoring far from the threshold (60-70 or 85-95), specifically:
- Higher emotional intensity
- More post-hoc justification efforts
- Greater input sensitivity ("if we had answered X differently...")
- Increased likelihood of reassessment requests

*Measured by*: Comparative analysis across score bands, emotional tone coding, reassessment timing

**H3b: Hygiene Under Pressure**
The positive effects of decision hygiene on process quality will be stronger (more important) for teams near the threshold than for teams far from it.

*Measured by*: Moderation analysis (hygiene × threshold proximity → decision quality)

**H3c: Gaming vs. Reflection**
Teams scoring just below 75 who use decision hygiene protocols will be more likely to respond with substantive business improvements (genuine reflection) than with input manipulation (gaming), compared to teams without hygiene practices.

*Measured by*: Analysis of changes between initial and reassessment, coded as substantive vs. cosmetic

### Theme 4: Decision Quality and Outcomes

**H4a: Perceived Decision Quality**
Decisions made under structured decision hygiene protocols will receive higher ratings from participants on fairness, thoroughness, information integration, and confidence compared to decisions without such practices.

*Measured by*: Post-decision quality survey (adapted from Dean & Sharfman, 1996)

**H4b: Team Alignment**
Teams using decision hygiene will report higher alignment and commitment to the final decision, even when individual preferences were overridden.

*Measured by*: Decision commitment scale, perceived consensus

**H4c: Venture Outcomes (Exploratory)**
Ventures that consistently employ decision hygiene practices in Flash-augmented strategic decisions will demonstrate superior performance over 6-24 months, controlling for initial score, stage, and sector:
- Higher survival rates
- More successful pivots (improved scores, achieved milestones)
- More disciplined capital use (longer runway, higher capital efficiency)
- Stronger reassessment improvement (learning indicator)

*Measured by*: Archival analysis using Flash database, survival models, panel regressions

### Theme 5: Multi-Phase Information Processing

**H5a: Sequential Independence**
Teams that maintain judgment independence across phases (independent score prediction → independent report analysis → independent AI advisor synthesis) will make higher-quality final decisions than teams that converge prematurely.

*Measured by*: Within-team judgment variance across phases, decision quality ratings

**H5b: Report Structure Effects**
Teams randomly assigned to receive structured report navigation guidance (sequential CAMP dimension review with reflection prompts) will extract more insights and make better-calibrated decisions than teams receiving the full 50k report without guidance.

*Measured by*: Experimental manipulation in Phase II, insight extraction coding, calibration analysis

### Theme 6: Learning and Adaptation

**H6: Decision Documentation and Learning**
Teams that document their decision processes (rationale, predictions, areas of disagreement, AI advice considered) will show greater improvement on reassessment and better long-term outcomes than teams without documentation practices.

*Measured by*: Score improvement on reassessment, longitudinal tracking, learning curve analysis

---

## 7. Research Methodology

The study employs a **mixed-method sequential design** with three integrated phases, leveraging the unique capabilities of the Flash CAMP system.

### Phase I: Exploratory Qualitative Study
**Objective**: Map current decision practices and identify natural variations in decision hygiene

**Sample**: 8-12 early-stage ventures currently using Flash CAMP for strategic decisions
- Purposive sampling for variation: different scores (including 73-77 threshold cases), industries, team sizes, stages
- Minimum criterion: team of 2+ people making consequential decision using Flash

**Data Collection**:
1. **Semi-structured interviews** with founders and key team members (45-60 min each)
   - Current decision processes for strategic choices
   - Experience with Flash system (scores, report, AI advisor)
   - Team dynamics and disagreement handling
   - Decision documentation and review practices

2. **Decision meeting observations** (where feasible; 60-90 min)
   - Observation of actual meetings where Flash results are reviewed
   - Audio recording and transcription (with consent)
   - Field notes on interaction patterns, emotional tone, power dynamics

3. **Document analysis**
   - Flash assessment inputs and outputs
   - Internal decision memos, board presentations
   - Follow-up actions and reassessment data

**Analysis**:
- **Thematic analysis** (Braun & Clarke, 2006) to identify patterns in decision practices
- **Grounded theory** approach to develop preliminary Decision Hygiene Index dimensions
- **Process mapping** to visualize typical decision flows and variation points
- **NVivo** software for systematic coding and pattern detection

**Outputs**:
- Taxonomy of decision hygiene practices observed in AI-augmented strategic decisions
- Preliminary Decision Hygiene Index (to be validated in Phase III)
- Rich case studies for use in Phase II experimental scenarios
- Hypothesis refinement based on emergent themes

### Phase II: Scenario-Based Experiment
**Objective**: Establish causal effects of decision hygiene interventions on team processes and decision quality

**Design**: 2 (Hygiene: Present vs. Absent) × 2 (Threshold: Near vs. Far) between-subjects factorial experiment

**Sample**: 60-80 teams (3-4 members each; 180-320 total participants)
- Recruited from: MBA/EMBA students with startup experience, early-stage founders from accelerator networks, corporate innovation teams
- Team composition: Mixed by role (technical, business, domain expert) to reflect real founding teams

**Procedure**:
1. **Team formation**: Randomly assigned to teams, given background materials

2. **Case scenario**: Teams receive a realistic startup case with:
   - Company description, market context, team background
   - 45 Flash CAMP input variables (realistic data)
   - **Manipulated Flash output**:
     - **Near threshold condition**: Score of 74 or 76 (just below/above funding access)
     - **Far threshold condition**: Score of 68 or 82 (clearly below/above)
   - Abbreviated 5,000-word AI report (condensed from real Flash output)
   - Access to simulated AI advisor (chat interface with scripted responses based on real Flash Intelligence)

3. **Decision hygiene manipulation**:
   - **Hygiene Present**: Teams receive structured protocol:
     - Independent score prediction before reveal (written + sealed)
     - Sequential CAMP report analysis (each member assigned one dimension)
     - Required dissent round ("Each person must voice one concern")
     - AI advisor query logging with collective review
     - Structured decision template with justification requirements
   - **Hygiene Absent**: Teams receive standard instruction to "review materials and make best decision"

4. **Decision task**: Teams must decide:
   - Primary: Accept/reject funding opportunity (threshold condition) or pivot recommendation
   - Secondary: If accept, what are top 3 risks to monitor? If reject, what would need to change?

5. **Data collection during task** (60-90 min):
   - Video recording of team discussion (with consent)
   - Real-time logging of AI advisor queries
   - Report section access tracking (digital analytics)
   - Individual worksheets (pre-judgments, independent analyses)

6. **Post-task surveys**:
   - Psychological safety (Edmondson, 1999)
   - Voice behavior (Van Dyne & LePine, 1998)
   - Perceived decision quality (Dean & Sharfman, 1996)
   - Team alignment and commitment
   - Individual confidence and satisfaction
   - Manipulation checks

**Analysis**:
- **ANOVA** for main and interaction effects on quantitative outcomes
- **Process coding** of video transcripts:
   - Voice frequency and quality (Cohen's κ for inter-rater reliability ≥ .80)
   - Information integration patterns
   - Disagreement handling
   - AI advice weighing
- **Content analysis** of decision justifications
- **Qualitative comparative analysis** (QCA) for configurational patterns

**Validity Enhancements**:
- Case scenarios derived from real Flash database (external validity)
- Expert validation of scenario realism (panel of 3 VCs + 2 experienced founders)
- Multiple dependent variables across levels (process, perception, outcome)
- Attention checks and engagement measures

### Phase III: Field Survey and Archival Analysis
**Objective**: Test hypotheses at scale with real ventures and link decision processes to actual outcomes

**Sample**: 200-300 founding teams that have used Flash CAMP within past 18 months
- Sampling frame: Flash CAMP user database
- Inclusion criteria: Company still operating (or failure within last 6 months for outcome analysis), team of 2+ people, Flash assessment completed

**Data Collection**:

1. **Online survey** (administered to all team members):
   - **Decision Hygiene Index** (developed from Phase I, 15-20 items):
     - Pre-judgment independence subscale
     - Structured information processing subscale
     - AI governance subscale
     - Disagreement facilitation subscale
     - Documentation subscale
   - **Psychological safety** (7-item Edmondson scale)
   - **Voice climate** (6-item Van Dyne & LePine scale)
   - **AI system perceptions** (usefulness, trust, appropriate reliance)
   - **Decision quality** (retrospective rating of key Flash-informed decisions)
   - **Team demographics** and decision context variables

2. **Archival data extraction** from Flash CAMP system:
   - **Assessment data**: All 126 features, 22 model predictions, CAMP scores
   - **Usage data**: Report downloads, time spent, AI advisor query logs (if available)
   - **Temporal data**: Assessment dates, reassessment timing
   - **Threshold position**: Distance from 75-point funding cutoff

3. **Outcome data** (6-24 months post-assessment):
   - **Survival**: Still operating (Y/N), time to failure if applicable
   - **Funding success**: Capital raised, funding source, valuation (if disclosed)
   - **Pivot activity**: Reassessment data showing substantive business model changes
   - **Score trajectory**: Change in Flash score on reassessment (learning indicator)
   - **Capital efficiency**: Burn rate, runway extension, revenue growth

**Analysis**:

1. **Psychometric validation**:
   - Confirmatory Factor Analysis (CFA) for Decision Hygiene Index
   - Reliability analysis (Cronbach's α, composite reliability)
   - Discriminant validity tests (HTMT ratios, Fornell-Larcker criterion)

2. **Hypothesis testing**:
   - **Regression models**: Decision hygiene predicting psychological safety, voice, decision quality
   - **Moderation analysis**: Threshold proximity × hygiene interaction
   - **Mediation models**: Hygiene → psychological safety → voice → decision quality
   - **Multilevel modeling**: Individual responses nested within teams

3. **Outcome analysis**:
   - **Survival models**: Cox proportional hazards regression with decision hygiene as predictor, controlling for initial score, industry, stage, team size
   - **Panel regression**: Score improvement, capital efficiency over time
   - **Threshold regression discontinuity**: Comparing outcomes for 74 vs. 76 scorers with/without hygiene
   - **Machine learning**: Gradient boosting models to identify decision hygiene × venture feature interactions predicting outcomes

4. **Robustness checks**:
   - Propensity score matching to address selection bias (teams self-selecting into hygiene)
   - Instrumental variable analysis if suitable instruments identified
   - Sensitivity analysis for missing data and attrition

**Integration Across Phases**:
- Phase I informs Phase II scenario design and Phase III survey instrument
- Phase II experimental results validate causal mechanisms tested correlationally in Phase III
- Phase III scale enables return to Phase I cases for deeper longitudinal analysis
- Triangulation workshops with research team to reconcile findings across methods

### Ethical Considerations

**Informed Consent**: All participants provide written informed consent explaining research purpose, data use, confidentiality, and right to withdraw

**Confidentiality**:
- All venture-specific data anonymized in publications
- Aggregate reporting only (minimum cell size n=5)
- Secure data storage with encrypted access
- Data sharing agreements with Flash CAMP system

**Minimal Risk**:
- Research observes natural decision processes or introduces low-risk interventions (structured protocols)
- No deceptive practices
- Debriefing provided in experimental conditions

**Institutional Approval**: Full ethical review and approval from Nirwan University Research Ethics Committee prior to data collection

**Data Access**: Formal data use agreement with Flash CAMP, specifying permitted uses, confidentiality obligations, and publication rights

---

## 8. Expected Contributions and Implications

### 8.1 Theoretical Contributions

**Decision Science:**
- First empirical evidence on decision hygiene effectiveness for team-based strategic decisions
- Extension of noise reduction framework to multi-phase AI integration contexts
- Validated instruments for measuring decision hygiene in organizational settings

**Behavioral Strategy:**
- Demonstration of how procedural governance (not just cognitive debiasing) shapes strategic choice quality
- Evidence on boundary conditions for AI advice integration in strategy
- Framework linking decision processes to organizational outcomes

**Organizational Behavior:**
- New insights on psychological safety dynamics when AI outputs introduce "objective" perspectives
- Understanding of voice facilitation mechanisms in AI-augmented team decisions
- Leadership practices that preserve human deliberation while capturing AI benefits

**Entrepreneurship:**
- Evidence-based governance protocols for early-stage ventures using predictive tools
- Understanding of threshold effects and gaming risks in AI-gated opportunity access
- Learning mechanisms: how decision documentation enables venture adaptation

**Human-AI Interaction:**
- Sociotechnical integration framework for conversational AI advisors in strategic contexts
- Design principles for AI systems that support rather than supplant human judgment
- Governance mechanisms for multi-phase AI engagement (scores → reports → conversations)

### 8.2 Methodological Contributions

- **Decision Hygiene Index** for AI-augmented strategic decisions (validated instrument)
- Mixed-method integration template for studying AI adoption in organizations
- Archival analysis approach linking process observations to objective outcome data at scale
- Natural experiment design leveraging binary threshold in AI system

### 8.3 Practical Contributions

**Embedded Product Features** (for Flash CAMP system):
- Pre-commitment interface (independent predictions before score reveal)
- Structured report navigator (guided CAMP dimension review)
- AI conversation governance (multi-user query logging, collective review prompts)
- Decision documentation templates (rationale, dissent, AI advice considered, monitoring plan)
- Hygiene compliance dashboard (for teams and advisors)

**Decision Playbooks** (for founders, boards, investors):
- **75+ Club Readiness Protocol**: For teams nearing funding threshold
- **Report Analysis Workshop Guide**: Structured 90-minute team session
- **AI Advisor Best Practices**: Question formulation, multi-perspective querying, synthesis
- **Override Decision Template**: When and how to disagree with AI forecast
- **Reassessment Learning Cycle**: Using Flash feedback for continuous improvement

**Training Curricula** (for accelerators, business schools):
- Decision hygiene workshop for founding teams (4-hour session)
- AI-augmented strategy case studies (effective and ineffective examples)
- Simulation exercises using Flash-like tools
- Assessment rubric for decision process quality

**Responsible AI Guidelines**:
- Threshold design principles (avoiding gaming incentives)
- Transparency requirements (confidence intervals, feature importance)
- Human governance integration (procedural safeguards)
- Documentation and auditability standards

### 8.4 Societal Impact

As AI diffuses into high-stakes organizational decisions (hiring, promotion, resource allocation, strategic choices), the **quality of human-AI integration processes** will determine whether AI enhances or undermines decision-making.

This research provides **evidence-based sociotechnical governance frameworks** applicable beyond entrepreneurship:
- Corporate strategy committees using AI forecasts
- Investment committees in venture capital and private equity
- Public sector resource allocation with algorithmic support
- Healthcare treatment planning with AI diagnostic tools
- Educational admissions with AI candidate assessment

By demonstrating that **simple procedural safeguards** can preserve human judgment quality while capturing AI analytical benefits, the research contributes to responsible AI deployment across society.

---

## 9. Research Timeline (36 Months)

### Year 1: Foundation and Phase I

**Months 1-3**: Literature review, protocol development
- Comprehensive literature synthesis
- Flash CAMP system technical deep-dive
- Phase I interview and observation protocols
- Ethics approval submission

**Months 4-9**: Phase I data collection and analysis
- 8-12 venture interviews and observations
- Transcription and coding
- Thematic analysis
- Decision Hygiene Index development

**Months 10-12**: Phase II preparation
- Experimental scenario development (based on Phase I)
- Expert validation of scenarios
- Pilot testing with 3-4 teams
- Refinement

### Year 2: Experimentation and Survey Development

**Months 13-18**: Phase II execution
- Participant recruitment (60-80 teams)
- Experimental sessions (staggered over 4-5 months)
- Video coding and analysis
- Preliminary results analysis

**Months 19-21**: Phase III instrument finalization
- Survey instrument development (incorporating Phase I & II learnings)
- Decision Hygiene Index psychometric testing
- Cognitive pretesting with 20 respondents
- Finalization

**Months 22-24**: Phase III data collection
- Survey deployment to Flash CAMP user base
- Archival data extraction from Flash system
- Outcome data collection (ongoing)

### Year 3: Analysis, Integration, and Dissemination

**Months 25-30**: Comprehensive analysis
- Phase III statistical modeling
- Cross-phase triangulation
- Hypothesis testing and robustness checks
- Emergent pattern exploration

**Months 31-33**: Practical tool development
- Co-design workshops with Flash team
- Prototype decision hygiene features
- Playbook development and testing

**Months 34-36**: Dissertation writing and defense
- Dissertation drafting
- Committee review cycles
- Defense preparation
- Final revisions

**Concurrent Throughout**:
- Conference presentations (Academy of Management, Strategic Management Society, Babson Entrepreneurship Research Conference)
- Journal article submissions (target 3-4 publications)
- Practitioner engagement (blog posts, webinars, workshops)

---

## 10. References / Bibliography

### Foundational Works

Cyert, R. M., & March, J. G. (1963). *A Behavioral Theory of the Firm*. Englewood Cliffs, NJ: Prentice-Hall.

Edmondson, A. C. (1999). Psychological safety and learning behavior in work teams. *Administrative Science Quarterly*, 44(2), 350–383.

Edmondson, A. C. (2018). *The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth*. Hoboken, NJ: Wiley.

Eisenhardt, K. M. (1989). Making fast strategic decisions in high-velocity environments. *Academy of Management Journal*, 32(3), 543–576.

Kahneman, D., Sibony, O., & Sunstein, C. R. (2021). *Noise: A Flaw in Human Judgment*. New York: Little, Brown Spark.

Simon, H. A. (1979). Rational decision making in business organizations. *American Economic Review*, 69(4), 493–513.

### Behavioral Strategy and Decision Making

Dean, J. W., Jr., & Sharfman, M. P. (1996). Does decision process matter? A study of strategic decision-making effectiveness. *Academy of Management Journal*, 39(2), 368–396.

Lovallo, D., & Sibony, O. (2010). The case for behavioral strategy. *McKinsey Quarterly*, March, 30–43.

Lovallo, D., Sibony, O., & Barton, D. (2012). The big idea: Are you deciding or sliding? *Harvard Business Review*, 90(9), 98–104.

Mintzberg, H., Raisinghani, D., & Théorêt, A. (1976). The structure of "unstructured" decision processes. *Administrative Science Quarterly*, 21(2), 246–275.

Powell, T. C., Lovallo, D., & Fox, C. R. (2011). Behavioral strategy. *Strategic Management Journal*, 32(13), 1369–1386.

### Decision Hygiene and Noise

Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. *Econometrica*, 47(2), 263–291.

Milkman, K. L., Chugh, D., & Bazerman, M. H. (2009). How can decision making be improved? *Perspectives on Psychological Science*, 4(4), 379–383.

### Algorithmic Advice and Decision Support

Dietvorst, B. J., Simmons, J. P., & Massey, C. (2015). Algorithm aversion: People erroneously avoid algorithms after seeing them err. *Journal of Experimental Psychology: General*, 144(1), 114–126.

Logg, J. M., Minson, J. A., & Moore, D. A. (2019). Algorithm appreciation: People prefer algorithmic to human judgment. *Organizational Behavior and Human Decision Processes*, 151, 90–103.

Mahmud, H., Nejadgoli, I., & Chen, J. (2022). A systematic review of algorithm aversion in augmented decision making. *Journal of Behavioral Decision Making*, 35(4), e2246.

Skitka, L. J., Mosier, K. L., & Burdick, M. (1999). Does automation bias decision-making? *International Journal of Human-Computer Studies*, 51(5), 991–1006.

### Recent AI and Strategy Research (2024-2025)

Agrawal, A., Gans, J. S., & Goldfarb, A. (2024). Artificial intelligence and strategic decision-making: Evidence from entrepreneurs and investors. *Strategy Science*, 9(2), 190–215. https://doi.org/10.1287/stsc.2024.0190

Baruffaldi, S., Di Minin, A., & Toschi, L. (2024). Behavioral economics, artificial intelligence and entrepreneurship: An updated framework for management. *International Entrepreneurship and Management Journal*, 21(1), 1–28. https://doi.org/10.1007/s11365-025-01076-7

Colombo, M. G., Piva, E., & Rossi-Lamastra, C. (2024). Human–AI interactions in public sector decision making: "Automation bias" and "selective adherence" to algorithmic advice. *Journal of Public Administration Research and Theory*, 34(1), 153–171.

Nambisan, S., Wright, M., & Feldman, M. (2025). Effect of generative artificial intelligence on strategic decision-making in entrepreneurial business initiatives: A systematic literature review. *Administrative Sciences*, 15(2), 66.

### Startup Prediction and ML Applications

Arroyo, J., Corea, F., Jimenez-Diaz, G., & Recio-Garcia, J. A. (2024). A fused large language model for predicting startup success. *European Journal of Operational Research*, 318(2), 601–615.

Kim, J., & Park, J. (2024). Predicting startup success using two bias-free machine learning: Resolving data imbalance using generative adversarial networks. *Journal of Big Data*, 11(1), 137.

Martínez-Rodríguez, I., Martínez-Plumed, F., Contreras-Bárcena, D., & Alegre, J. (2024). Predicting the success of startups using a machine learning approach. *Journal of Innovation and Entrepreneurship*, 13(1), 73.

Zhao, L., Wang, X., & Chen, Y. (2024). Startup success prediction with PCA-enhanced machine learning models. *Journal of Technology Management and Innovation*, 19(4), 77–89.

### Psychological Safety and Voice

Hirak, R., Peng, A. C., Carmeli, A., & Schaubroeck, J. M. (2012). Linking leader inclusiveness to work unit performance: The importance of psychological safety and learning from failures. *The Leadership Quarterly*, 23(1), 107–117.

Morrison, E. W. (2014). Employee voice and silence. *Annual Review of Organizational Psychology and Organizational Behavior*, 1, 173–197.

Van Dyne, L., & LePine, J. A. (1998). Helping and voice extra-role behaviors: Evidence of construct and predictive validity. *Academy of Management Journal*, 41(1), 108–119.

### Entrepreneurship and Governance

Ries, E. (2011). *The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses*. New York: Crown Business.

Wasserman, N. (2017). *The Founder's Dilemmas: Anticipating and Avoiding the Pitfalls That Can Sink a Startup*. Princeton, NJ: Princeton University Press.

### Methods

Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. *Qualitative Research in Psychology*, 3(2), 77–101.

Creswell, J. W., & Plano Clark, V. L. (2018). *Designing and Conducting Mixed Methods Research* (3rd ed.). Thousand Oaks, CA: SAGE.

---

## Conclusion

This research addresses a critical gap at the intersection of artificial intelligence, strategic decision-making, and entrepreneurial governance. As AI-powered predictive tools become ubiquitous in startup ecosystems, the quality of human decision processes around these tools will determine whether AI enhances or undermines strategic choice quality.

By leveraging unprecedented access to the Flash CAMP system—with 6,500+ ventures, 126 features, 22 production models, and multi-phase AI engagement—this study will provide the first rigorous evidence on how decision hygiene practices shape AI-augmented strategic decisions in founding teams.

The research promises both theoretical advancement (extending behavioral strategy, leadership, and decision science to AI-augmented contexts) and immediate practical impact (embedded product features, decision playbooks, training curricula). Findings will inform responsible AI deployment not only in entrepreneurship but across organizational contexts where algorithmic forecasts support high-stakes strategic choices.

In an era of rapid AI diffusion, evidence-based sociotechnical governance frameworks are urgently needed. This dissertation will contribute foundational knowledge and actionable tools to ensure that AI augments rather than replaces human judgment in strategic decision-making.

---

**Word Count**: ~10,500 words

---

*Note: This synopsis represents a comprehensive research proposal. The candidate maintains direct access to the operational Flash CAMP system and its database, enabling unique empirical opportunities unavailable to other researchers. All data collection will comply with ethical guidelines and institutional approvals.*
