# Research Proposal / Synopsis

---

**NIRWAN UNIVERSITY JAIPUR**

---

## From Prediction to Performance:
### Structuring Founding Team Decisions in AI-Supported Entrepreneurship

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

### The Problem

I've watched founding teams fall apart over a number on a screen.

A startup gets scored 74 by an AI system—just one point below the threshold for funding access—and suddenly everyone's questioning the inputs. "Should we have said we had three advisors instead of two?" Another team scores 76, barely above the line, and treats it like gospel truth even though they're ignoring obvious warning signs in their burn rate.

This isn't theoretical. I have direct access to the Flash CAMP system, which has assessed over 6,500 startups using 22 machine learning models. The system takes 45 inputs about a company, engineers them into 126 features, and outputs success probabilities alongside detailed scores for Capital, Advantage, Market, and People. It's technically impressive—81% prediction accuracy, industry-specific models, the whole works. But here's what I keep seeing: the technology works fine. It's what happens *after* the prediction that's messy.

The Flash system doesn't just give you a score and send you on your way. First you get the verdict—your overall success probability and whether you've hit 75 or above, which unlocks access to funding networks. Then you get a 50,000-word strategic report that reads like something McKinsey would charge you $200K for. Then you can talk to an AI advisor that's been trained on 10,000+ real startup cases.

That's a lot of information hitting a founding team all at once. And I want to understand how teams actually handle this. Not how they should handle it in some idealized world, but how they really do—and whether some ways of handling it lead to better outcomes than others.

### Why This Matters

The broader question is about how we make high-stakes decisions when algorithms are involved. A lot of research has looked at this in controlled settings—medical diagnosis, loan approvals, hiring decisions. Usually it's one person, one algorithm, one decision. But that's not what entrepreneurial strategy looks like. You've got a team of co-founders who've probably been arguing for months, they're burning through runway, and now an AI system is telling them something they might not want to hear.

There's research from Kahneman and his colleagues suggesting that "decision hygiene"—basically, structured procedures for making judgments—can reduce both bias and noise. Things like having people write down independent opinions before discussing, breaking complex decisions into parts, that sort of thing. But this work comes from contexts like insurance underwriting or forensic analysis. Nobody's really looked at whether these ideas work when you're a founding team trying to figure out if you should pivot your entire business model based partly on what an AI told you.

The Flash system creates an unusual research opportunity because I can observe real decisions with real stakes, track what happens over time, and link decision processes to actual outcomes. Most research on AI and decision-making either uses students in labs or relies on surveys asking people to remember what they did months ago. Here I can potentially watch teams discuss their Flash results, see how they use (or ignore) the information, and then check whether the company is still alive six months later.

### What I'm Actually Studying

The core question is simple: When founding teams get algorithmic forecasts about their startup's chances, how does their decision process affect both the team and the venture?

I'm particularly interested in three things:

**First, the structure issue.** Some teams will look at their Flash score together and just start arguing. Others might do something more systematic—everyone writes down their reaction first, or they divide up the 50,000-word report so each person analyzes a different section. Does structure matter?

**Second, the team dynamics piece.** When an AI system says "you have a 68% chance of success," does that make it harder for junior team members to voice concerns? If you're the least experienced person on a founding team and the AI agrees with the CEO, are you going to speak up? I suspect psychological safety—whether people feel safe to disagree—becomes critical here in ways we haven't studied yet.

**Third, the threshold effects.** That 75-point cutoff for funding access is fascinating from a research standpoint. It's arbitrary but consequential. Teams right below it face real pressure, teams right above it might get overconfident. This natural experiment lets me look at how process quality matters more (or less) depending on the stakes.

### Research Context: The Flash CAMP System

Since this entire study is built around Flash, I should explain what it actually is.

Flash CAMP is a production system, not a prototype. It's running right now, assessing real companies. The technical stack includes:

- 22 ML models working together: some are general-purpose, some are stage-specific (seed vs. Series A), some are industry-specific (fintech vs. healthcare vs. SaaS)
- Models use gradient boosting algorithms—XGBoost, LightGBM, CatBoost, plus Random Forests for certain ensemble components
- Feature engineering transforms 45 raw inputs into 126 calculated features that capture relationships and patterns
- The system has been trained on 6,500+ ventures where we know the outcomes

The CAMP framework breaks down into:
- **Capital**: Not just "how much money do you have" but runway modeling, burn patterns, capital efficiency metrics
- **Advantage**: Competitive moats, IP strength, network effects, differentiation sustainability
- **Market**: TAM/SAM/SOM but also timing indicators, competitive density, growth trajectory signals
- **People**: Team experience, skill coverage, advisor quality, gaps in critical areas

What makes Flash interesting for research is the multi-phase engagement. Most AI decision support is "here's your score, goodbye." Flash is:

1. **Assessment phase**: Founder fills out detailed forms (takes 30-45 minutes)
2. **Results phase**: See your score, see if you cleared 75, see CAMP breakdown
3. **Report phase**: Get a massive strategic analysis document
4. **Advisory phase**: Interactive conversation with an AI that's been trained on real case patterns

Each phase creates different decision moments. And I'm betting that how teams handle these phases matters more than the technical accuracy of the models.

### What We Don't Know

Despite growing interest in AI and entrepreneurship, we have almost no evidence on:

- How founding teams actually use algorithmic forecasts in strategic decisions (most work looks at individuals, not teams)
- Whether structured decision processes help or just slow things down when you're already stressed and time-constrained
- How AI "verdicts" affect team dynamics—who speaks up, who stays quiet, how conflict gets resolved
- What happens behaviorally near threshold points in AI systems (the 74 vs. 76 problem)
- Whether any of this actually correlates with venture performance

The entrepreneurship literature talks a lot about pivots, experiments, and board governance. The AI literature talks about algorithm aversion and automation bias. The organizational behavior literature talks about psychological safety. But these conversations haven't really connected yet, especially not in the specific context of founding teams using sophisticated multi-phase AI systems to make strategic decisions that could determine whether their company survives.

That's the gap I want to address.

---

## 2. Literature Review

I'm drawing on several research areas that don't usually talk to each other. Let me walk through what each area tells us and where the gaps are.

### Strategic Decision-Making in Entrepreneurship

The foundational work here goes back to researchers like Cyert and March in the 1960s, who argued that organizational decisions are messier than rational choice models suggest. People satisfice instead of optimize. Politics and power matter. Attention is limited.

Eisenhardt's research on fast decision-making has been particularly influential in understanding entrepreneurial contexts. She studied how top management teams make strategic choices under time pressure and found that faster decisions actually came from teams that used *more* information, not less—but they were selective about which information and had clear processes for integrating it.

More recently, the "behavioral strategy" movement has been trying to bring psychology into strategy research. Lovallo and Sibony's work at McKinsey, for instance, found that better decision *processes* explained performance differences across companies more than better analysis did. They documented how biases like anchoring, confirmation bias, and groupthink systematically degraded strategic choices.

But here's what's missing: almost none of this work deals with algorithmic inputs. The implicit assumption is that strategic decisions involve human judgment applied to data, not human judgment responding to algorithmic verdicts. That made sense in 1989 or even 2015, but it's not the world we're in anymore.

Recent work is starting to catch up. A 2024 paper in Strategy Science looked at how AI changes three cognitive processes in strategic decision-making: how people search for alternatives, how they represent problems, and how they aggregate information. They found that large language models could both expand and constrain strategic thinking depending on how they were used. But this was still mostly conceptual—they didn't observe real teams over time or link processes to outcomes.

### Decision Quality and Noise

The book "Noise" by Kahneman, Sibony, and Sunstein fundamentally changed how I think about judgment. Their argument is that we focus too much on bias (systematic errors in one direction) and not enough on noise (random variability in judgments that should be consistent).

Their example: insurance underwriters at the same company, looking at the same case, giving wildly different premium quotes. That's not bias—it's noise. And it's expensive.

Their solution is what they call "decision hygiene"—procedures that reduce unwanted variability:
- Get independent judgments before people talk to each other (prevents groupthink)
- Break decisions into components (prevents halo effects)
- Use relative comparisons instead of absolute scales (prevents scale miscalibration)
- Structure the discussion explicitly (prevents dominant voices from shutting down dissent)

The evidence for this comes mostly from operational judgments—hiring, underwriting, forecasting, medical diagnosis. These are important contexts, but they're different from strategic decisions in a few ways:

First, strategic decisions are more ambiguous. There's no obviously "right" answer you can check against later, at least not quickly.

Second, strategic decisions involve teams with power dynamics and history. The CTO and CEO have been fighting about technical debt for six months—that context matters.

Third, strategic decisions in startups have this existential quality. Getting your insurance estimate wrong by 10% is different from choosing the wrong pivot and dying.

So I'm not sure if decision hygiene ideas translate directly. That's part of what I want to test.

### Algorithmic Advice and Human Judgment

There's a growing body of research on how people respond to algorithmic predictions. Two patterns keep showing up:

**Automation bias**: People over-rely on algorithms, even when the algorithm is clearly wrong. This has been documented in aviation (pilots following faulty autopilot), medicine (doctors accepting incorrect AI diagnoses), and finance (traders trusting flawed models).

**Algorithm aversion**: After seeing an algorithm make a mistake, people trust it *less* than they would trust a human who made the same mistake. Dietvorst and colleagues demonstrated this in forecasting tasks—even when the algorithm was statistically superior, people abandoned it after watching it err.

What determines which way people go? The research suggests several factors: expertise (experts are more appropriately skeptical), transparency (understanding the algorithm helps), task structure (clear tasks favor algorithms), and stakes (high stakes sometimes increase and sometimes decrease reliance).

But again, almost all this work is experimental studies with individual decision-makers. I found one 2024 study looking at "selective adherence"—people in hiring contexts strategically accepting AI recommendations when it aligned with their preferences and rejecting it when it didn't. That's closer to reality, but it's still hiring decisions, not strategic pivots.

Nobody has really looked at what happens when a founding team gets algorithmic input and has to figure out together what to do with it.

### Psychological Safety and Team Voice

Amy Edmondson's work on psychological safety is important here. She defines it as "a shared belief that the team is safe for interpersonal risk-taking." Teams with higher psychological safety learn faster, catch errors sooner, and adapt more successfully.

The mechanism is voice—team members actually speak up with concerns, questions, and disagreement. In psychologically safe teams, people voice dissent. In unsafe teams, they stay quiet even when they see problems.

Leaders create psychological safety (or destroy it) through small behaviors: how they respond to challenges, whether they acknowledge their own uncertainty, how they handle disagreement in meetings.

Here's my question: What happens to psychological safety when an AI system enters the conversation?

Scenario one: The AI scores your startup at 73. The CEO wants to reframe some answers and try again. Does the junior developer feel safe saying "that seems like gaming the system"? Or does the AI verdict create pressure to conform?

Scenario two: The AI scores you at 82 and flags your market sizing as the biggest risk. The CEO built the market model and is confident in it. Does the VP of Product voice her private agreement with the AI? Or does she stay quiet because challenging the CEO means both disagreeing with a person and agreeing with a machine?

I suspect AI verdicts change team dynamics in ways we haven't studied. Sometimes they might provide cover for dissent ("I'm not saying this, the model is"). Sometimes they might suppress it ("the algorithm has spoken, who am I to disagree"). The structure of the decision process probably matters a lot for which way it goes.

### Where the Literature Leaves Me

After reading all this, here's what I know and don't know:

**I know** that decision processes affect decision quality in many contexts.

**I don't know** whether structured processes help or hurt when founding teams are using AI forecasts for strategic decisions.

**I know** that algorithms can improve individual judgments in well-defined tasks.

**I don't know** how founding teams actually integrate algorithmic predictions into strategic choices, or whether they do it well.

**I know** that psychological safety matters for team performance.

**I don't know** how AI verdicts affect psychological safety and voice behavior.

**I know** that thresholds in decision systems can create behavioral distortions.

**I don't know** what happens around the 75-point funding access threshold in Flash, or whether decision processes moderate those effects.

**I know** that better decision processes should theoretically lead to better outcomes.

**I don't know** whether I can demonstrate that empirically with real ventures and real outcomes.

Those unknowns are what this research is about.

---

## 3. Research Questions and Objectives

Rather than state formal hypotheses upfront (I'll get to those), let me start with the actual questions driving this work.

### Primary Research Questions

**RQ1: Process Question**
How do founding teams currently structure their decision-making when they receive AI-generated forecasts about their venture? What does the "natural" process look like, and how much does it vary?

**RQ2: Team Dynamics Question**
Do structured decision processes affect team dynamics—specifically psychological safety and voice behavior—when teams are reviewing algorithmic predictions? Does structure help or hurt?

**RQ3: Threshold Question**
What happens behaviorally near the 75-point funding access threshold? Do teams scoring 73-77 behave differently than teams scoring far from the threshold? Does process quality matter more when you're near the edge?

**RQ4: Performance Question**
Can I link decision process characteristics to venture outcomes? Do teams that structure their decisions differently actually see different results—in survival, pivot success, capital efficiency, or learning?

### Research Objectives

**Objective 1: Document Current Practice**
Map the range of decision processes that founding teams actually use when working with Flash CAMP results. I want rich qualitative description before I start measuring and testing.

**Objective 2: Develop Measurement**
Create and validate a way to measure decision process quality in this specific context. The existing literature gives me concepts (independence, structure, dissent facilitation) but I need instruments that work for AI-augmented startup strategy.

**Objective 3: Test Causal Claims**
Run controlled experiments to test whether structured decision processes actually cause changes in team dynamics and decision quality. Correlation from field data won't be enough—I need causal evidence.

**Objective 4: Scale and Generalize**
Use the Flash database to test relationships at scale. Can I show that process differences predict outcomes across hundreds of ventures? What are the boundary conditions?

**Objective 5: Build Practical Tools**
Translate findings into usable protocols, checklists, and interface features. The research should produce artifacts that founding teams and platforms can actually use.

**Objective 6: Contribute Theoretically**
Extend behavioral strategy, organizational behavior, and entrepreneurship theory to account for AI-augmented decision contexts. Show scholars why this matters beyond the specific Flash case.

---

## 4. Hypotheses

Let me organize these by theme. Some are confirmatory (testing established ideas in new contexts), others are exploratory (investigating novel phenomena).

### Theme 1: Decision Process Structure

**H1**: Teams that use structured processes—specifically independent pre-judgments before group discussion, systematic report analysis, and explicit dissent rounds—will show more balanced integration of algorithmic forecasts compared to unstructured teams.

*Operationalization*: "Balanced integration" means neither automatic acceptance (automation bias) nor automatic rejection (algorithm aversion). I'll measure this through override decisions, justification quality, and advice-weighting in final choices.

**H2**: Teams that divide the 50,000-word Flash report systematically (each member analyzes specific CAMP dimensions independently before group synthesis) will extract more actionable insights than teams that read together or don't structure their analysis.

*Why I think this*: The report is too long for shared reading to work well. Division of cognitive labor should help, but only if there's good synthesis afterward.

### Theme 2: Team Dynamics

**H3**: Structured decision processes will be positively associated with psychological safety during decision episodes involving algorithmic forecasts.

*Mechanism*: Structure legitimizes dissent by making it procedural rather than personal. If the process says "everyone must voice one concern," that's different from someone choosing to challenge the boss.

**H4**: In teams using structured processes, more members will voice disagreement with either the founder or the AI model compared to unstructured teams.

*Measurement*: Frequency and distribution of voice acts in observed or recorded decision discussions. I'm particularly interested in whether junior members speak up.

### Theme 3: The 75-Point Threshold

**H5**: Teams scoring 73-77 (near the funding access threshold) will exhibit different behaviors than teams scoring 60-70 or 85-95, specifically: higher emotional intensity, more post-hoc justification, greater sensitivity to input changes, and faster reassessment requests.

*This is exploratory*. I don't have strong priors about exactly what happens at thresholds in this context, but I know from behavioral economics that threshold effects are real and often substantial.

**H6**: The positive effects of structured decision processes on team dynamics and decision quality will be stronger for teams near the threshold than for teams far from it.

*Logic*: When stakes are higher and stress is greater, structure matters more. Process probably acts as a stabilizer.

### Theme 4: Performance Outcomes

**H7**: Decisions made under structured processes will receive higher quality ratings from participants (fairness, thoroughness, confidence) compared to unstructured decisions.

*This is the subjective outcome*. Even if I can't prove better venture performance, I should be able to show better perceived decision quality.

**H8 (Exploratory)**: Ventures that consistently use structured decision processes when working with Flash will show better performance over 6-24 months (higher survival rates, more successful pivots, better capital efficiency, stronger reassessment improvement) controlling for initial score, stage, and industry.

*This is ambitious*. Performance is noisy and multiply determined. But if I can't find any signal here, it raises questions about whether the process stuff actually matters or is just procedural theater.

### Theme 5: Learning and Adaptation

**H9**: Teams that document their decision rationale, areas of disagreement, and reasoning for following/overriding the AI will show greater score improvement on reassessment compared to teams without documentation practices.

*Mechanism*: Documentation enables learning. You can't improve if you don't remember what you thought before or why.

---

## 5. Research Design and Methodology

I'm using a three-phase mixed-methods design. Each phase builds on the previous one and they triangulate on the core questions from different angles.

### Phase I: Qualitative Foundation (Months 1-9)

**Purpose**: Understand the territory before I start measuring it.

**Sample**: 10-12 early-stage ventures currently using Flash for strategic decisions. I'll sample for variation—different scores (including several in the 73-77 range), different industries, different team sizes and compositions.

**Data collection**:

*Interviews*: Semi-structured conversations with founders and key team members. I want to hear how they describe their decision process, what they found useful or frustrating about Flash, how the team handled disagreements, what happened after they got their results. 45-60 minutes each, probably 3-4 people per venture.

*Observations*: For some teams, I'll sit in on decision meetings where they review Flash results. Just observe and take notes—what's the energy in the room, who talks, who's quiet, how do they handle the 50K report, do they pull up the AI advisor, what happens when someone disagrees. This is gold for understanding real process, but it's also intrusive so I won't get it for everyone.

*Documents*: Flash inputs and outputs for each company, any internal memos or board presentations about the assessment, follow-up actions they took.

**Analysis**: Thematic analysis using NVivo. I'll code for decision process elements, team dynamics, use of different Flash components, and outcome stories. The goal is to develop a preliminary typology of decision approaches and identify the dimensions that seem to matter.

I'll also use this phase to build the first version of my decision process measurement instrument. What are the specific behaviors I should be measuring? The literature gives me concepts, but I need items that capture what actually varies in practice.

**Deliverable**: Rich case descriptions, preliminary process typology, draft measurement instrument, refined hypotheses based on what I'm seeing.

### Phase II: Experimental Manipulation (Months 13-21)

**Purpose**: Test causal claims in a controlled setting.

**Design**: 2x2 factorial experiment. Two factors:
1. Process structure (Structured vs. Unstructured)
2. Threshold proximity (Near: score 74 or 76 / Far: score 68 or 82)

**Sample**: 80 teams of 3-4 people each (240-320 total participants). I'll recruit from:
- MBA/EMBA students with startup experience
- Early-stage founders in accelerator networks
- Corporate innovation teams

Team composition will be mixed by role (business, technical, domain) to approximate real founding teams.

**Procedure**:

Teams get a realistic startup case with full background—market context, team bios, financial history, competitive landscape. Then they get Flash-style outputs: the overall score (manipulated to be 74, 76, 68, or 82), CAMP dimensional breakdowns, and an abbreviated strategic report (condensed from real Flash outputs to ~5,000 words—still substantial but manageable in 90 minutes).

They also get access to a simulated AI advisor built from real Flash Intelligence conversation patterns.

**The manipulation**:

*Structured condition*: Teams receive a protocol:
- Before seeing the score, each person independently writes down their prediction and biggest concern
- After seeing results, each person spends 15 minutes analyzing one CAMP dimension independently
- Team reconvenes, each person presents their analysis
- Explicit dissent round: everyone must voice one concern or question
- Any AI advisor queries are logged and collectively reviewed
- Final decision documented with justification template

*Unstructured condition*: Teams just get the materials and standard instructions to "review and make your best decision as a team."

**Task**: Teams must decide whether to pursue a specific strategic option (accept funding opportunity for near-threshold scores, or make a pivot decision for far-threshold scores). They justify their choice and identify key risks.

**Measures**:
- *Process observation*: Video recording, coded for voice frequency, participation distribution, information integration patterns
- *Psychological safety*: Survey immediately after (Edmondson's 7-item scale)
- *Voice behavior*: Self-report and behavioral coding
- *Decision quality*: Participant ratings, expert blind coding of justifications
- *Advice integration*: How much did they weight the AI input vs. other considerations?

**Analysis**: ANOVA for main effects and interactions, process coding with inter-rater reliability checks, qualitative analysis of decision justifications.

The experimental approach lets me say "structured processes *cause* changes in team dynamics" rather than just "they're correlated." That's important for credibility.

### Phase III: Field Survey and Archival Analysis (Months 19-30)

**Purpose**: Test at scale with real ventures and real outcomes.

**Sample**: 250-300 founding teams that used Flash CAMP in the past 18 months. I'll draw from the Flash user database.

**Data sources**:

*Survey*: Administered to all team members who were involved in Flash-related decisions. I'll measure:
- Decision process characteristics (using the instrument developed in Phase I, validated in Phase II)
- Team dynamics (psychological safety, voice climate)
- Perceptions of Flash usefulness and trust
- Retrospective decision quality ratings

*Archival data from Flash system*:
- All 126 features and 22 model predictions
- CAMP scores and overall verdict
- Timestamp data, usage patterns if available
- Reassessment data for companies that came back

*Outcome data* (this is the hard part):
- Survival status at 6, 12, and 24 months
- Funding events (raised capital, sources, amounts if disclosed)
- Pivot activity (detected through reassessment data showing major business model changes)
- Score trajectory on reassessment (learning indicator)
- Capital efficiency metrics where available

**Analysis**:

*Measurement validation*: Confirmatory factor analysis for my decision process instrument, reliability checks, discriminant validity.

*Main hypotheses*: Regression models testing whether decision process predicts psychological safety, voice, and decision quality. Moderation models for threshold proximity effects.

*Performance analysis*: This is tricky because outcome data will be incomplete and noisy. I'll use:
- Survival analysis (Cox regression) with decision process as predictor, controlling for initial score, industry, stage, team size
- For companies that reassessed, panel models looking at score improvement
- For the threshold sample specifically, regression discontinuity design comparing 74 vs. 76 scorers

*Robustness*: Propensity score matching to address selection bias (teams choosing structured processes might differ in other ways), sensitivity analysis for missing data.

The field study trades experimental control for realism and actual stakes. If I find signals in noisy performance data, that's powerful. If I don't, I'll at least have the process-dynamics relationships.

### Integration Across Phases

The three phases aren't independent. Phase I findings shape Phase II scenarios and Phase III measurement. Phase II causal evidence helps interpret Phase III correlations. I'll run integration workshops where I triangulate findings and look for contradictions or confirmations.

By the end I should be able to say:
- Here's how teams actually handle AI forecasts (Phase I)
- Here's what happens when you manipulate process structure (Phase II)
- Here's whether it matters at scale in the real world (Phase III)

### Limitations and Ethical Considerations

**Limitations**:

The experimental work uses approximations of real stakes. The field work has selection issues (I can only study Flash users, who opted into algorithmic assessment). The performance outcomes are long-term and noisy. I'm studying one system (Flash) which limits generalizability, though it's a sophisticated system so probably better than studying a simple scoring tool.

**Ethics**:

- Informed consent for all participants, right to withdraw
- Confidentiality protections—no company names in publications, aggregate reporting only
- Data security—encrypted storage, limited access
- Data use agreement with Flash specifying permitted uses
- University ethics approval before any data collection

The research observes natural processes or introduces low-risk interventions (structured discussion protocols). No deception, no harmful manipulations.

---

## 6. Expected Contributions

### Theoretical Contributions

**To behavioral strategy**: I'll extend our understanding of how procedural governance shapes strategic choice quality beyond the individual cognitive level. Most behavioral strategy focuses on debiasing individual judgment. I'm looking at team-level processes for integrating algorithmic inputs—a different level of analysis that's increasingly important.

**To organizational behavior**: New evidence on how algorithmic forecasts affect psychological safety and voice. The OB literature has studied team climate extensively but hasn't really engaged with AI as a team member or judge. This work shows whether and how AI changes interpersonal dynamics.

**To entrepreneurship**: Evidence-based governance protocols for early-stage ventures using predictive tools. The entrepreneurship literature talks about experiments, pivots, and boards but hasn't addressed internal decision processes much. This makes process quality a first-class concern.

**To decision science**: Extension of decision hygiene concepts to team-based strategic decisions with multi-phase AI engagement. Kahneman et al.'s work is brilliant but focused on operational judgments. I'm testing whether the ideas hold in more ambiguous, higher-stakes, team-based contexts.

**To human-AI interaction**: Sociotechnical governance frameworks for AI-augmented strategy. Most HCI work treats AI as a tool. I'm treating it as a participant in a social process that needs governance.

### Methodological Contributions

A validated measurement instrument for decision process quality in AI-augmented contexts. Other researchers can use this.

A mixed-method template that combines qualitative depth, experimental control, and archival scale. The integration across methods is unusual.

Demonstration of how to link decision process observations to long-term organizational outcomes using platform archival data.

### Practical Contributions

**For founding teams**: Usable protocols, checklists, and templates. Something a founding team can actually implement Monday morning when they get their Flash results.

**For AI platforms**: Design patterns for embedding process support into product features. Flash could add:
- Pre-commitment interface (independent predictions before reveal)
- Structured report navigator
- Conversation logging and team review prompts
- Decision documentation templates

**For investors and boards**: Due diligence questions about portfolio company decision processes. Red flags for poor AI integration. Evidence-based recommendations.

**For accelerators**: Training curricula on decision processes for AI-augmented entrepreneurship. This could be a workshop module.

### Why This Matters Beyond Academics

AI tools for strategic decisions are proliferating. Every founder can now get algorithmic predictions about market size, customer acquisition cost, churn risk, optimal pricing. As these tools get better and more available, the question shifts from "what does the AI say?" to "how do we decide what to do about what the AI says?"

If we don't have good answers to that second question, we'll see:
- Teams torn apart by disagreements about whether to trust the algorithm
- Automation bias cascades where everyone follows the AI off a cliff
- Gaming and manipulation near threshold points
- Psychological safety destruction when AI verdicts suppress dissent
- Lost learning opportunities because decisions aren't documented

Those are bad outcomes. This research aims to prevent them by showing what good process looks like and demonstrating that it actually matters.

---

## 7. Timeline (36 Months)

**Year 1: Foundation and Qualitative Work**

Months 1-3: Literature review, protocol development, ethics approvals
Months 4-9: Phase I interviews and observations, transcription, analysis
Months 10-12: Instrument development, Phase II experimental design and piloting

**Year 2: Experimentation and Survey Prep**

Months 13-18: Phase II data collection with 80 teams, video coding, analysis
Months 19-21: Phase III survey instrument finalization and validation
Months 22-24: Phase III survey deployment, archival data extraction

**Year 3: Scaling, Analysis, and Writing**

Months 25-27: Phase III outcome data collection (ongoing), statistical analysis
Months 28-30: Cross-phase integration, robustness checks
Months 31-33: Tool development, practitioner prototypes
Months 34-36: Dissertation writing and defense

I'm planning to submit papers along the way:
- Qualitative paper from Phase I (entrepreneurship or OB journal)
- Experimental paper from Phase II (strategy or OB journal)
- Main field study from Phase III (top-tier strategy or entrepreneurship journal)

---

## 8. References

Cyert, R. M., & March, J. G. (1963). *A Behavioral Theory of the Firm*. Prentice-Hall.

Dietvorst, B. J., Simmons, J. P., & Massey, C. (2015). Algorithm aversion: People erroneously avoid algorithms after seeing them err. *Journal of Experimental Psychology: General*, 144(1), 114-126.

Edmondson, A. C. (1999). Psychological safety and learning behavior in work teams. *Administrative Science Quarterly*, 44(2), 350-383.

Edmondson, A. C. (2018). *The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth*. Wiley.

Eisenhardt, K. M. (1989). Making fast strategic decisions in high-velocity environments. *Academy of Management Journal*, 32(3), 543-576.

Kahneman, D., Sibony, O., & Sunstein, C. R. (2021). *Noise: A Flaw in Human Judgment*. Little, Brown Spark.

Logg, J. M., Minson, J. A., & Moore, D. A. (2019). Algorithm appreciation: People prefer algorithmic to human judgment. *Organizational Behavior and Human Decision Processes*, 151, 90-103.

Lovallo, D., & Sibony, O. (2010). The case for behavioral strategy. *McKinsey Quarterly*, March, 30-43.

Powell, T. C., Lovallo, D., & Fox, C. R. (2011). Behavioral strategy. *Strategic Management Journal*, 32(13), 1369-1386.

Recent work (2024-2025):

Agrawal, A., Gans, J., & Goldfarb, A. (2024). Artificial intelligence and strategic decision-making: Evidence from entrepreneurs and investors. *Strategy Science*, 9(2), 190-215.

Colombo, M. G., Piva, E., & Rossi-Lamastra, C. (2024). Human-AI interactions in public sector decision making: Automation bias and selective adherence to algorithmic advice. *Journal of Public Administration Research and Theory*, 34(1), 153-171.

Martínez-Rodríguez, I., Martínez-Plumed, F., Contreras-Bárcena, D., & Alegre, J. (2024). Predicting the success of startups using a machine learning approach. *Journal of Innovation and Entrepreneurship*, 13(1), 73.

Nambisan, S., Wright, M., & Feldman, M. (2025). Effect of generative artificial intelligence on strategic decision-making in entrepreneurial business initiatives: A systematic literature review. *Administrative Sciences*, 15(2), 66.

---

## 9. Conclusion

The question this research asks is straightforward: When founding teams get algorithmic forecasts about their startup's future, how should they decide what to do?

I have access to a unique empirical setting—the Flash CAMP system with 6,500+ assessed ventures, multi-phase AI engagement, and a natural threshold creating high-stakes decision moments. That access enables me to study this question with unusual rigor: observing real teams, running controlled experiments, and tracking actual performance outcomes.

The findings should matter theoretically, extending behavioral strategy and organizational behavior into AI-augmented contexts. They should matter practically, giving founders and platforms evidence-based guidance on decision processes. And they should matter for the broader challenge of human-AI collaboration in high-stakes strategic decisions.

I'm not expecting perfect answers. Decision-making is complex, startups are noisy, and people are messy. But I think we can do better than we're doing now, and this research aims to show how.

---

*Word count: ~8,500 words*
