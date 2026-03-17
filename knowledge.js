// knowledge.js — Yasuyuki Sakane RAG Knowledge Base v2.0
// Sources: cv.sakane.dev, www.sakane.dev, en.sakane.dev,
//          EMVIS_WhitePaper.md (full 10,000-char whitepaper),
//          CCBR Gamma slide deck (ccbr-fo29cxo.gamma.site)
'use strict';

const SAKANE_KNOWLEDGE = [
  {
    id: "identity",
    tags: ["who","identity","name","profile","introduction","基本","自己紹介","坂根","プロフィール","about","概要"],
    content: `Yasuyuki Sakane (坂根康之) is a Principal Strategic Architect & Venture Partner based in Tokyo, Japan (Fujisawa area). Creator of "Structural Intelligence (構造知性)" — a methodology bridging Deep Tech innovation, Sovereign Governance, and Capital Efficiency. Title: CSVFO (Chief Structural Value & Future Officer) / Causal Codemancer. Contact: yasuyuki@sakane.dev | +81 80 1189 8979 | www.sakane.dev | en.sakane.dev | cv.sakane.dev. GitHub: github.com/sakane-dev | LinkedIn: linkedin.com/in/yasuyukis/. Languages: Japanese (Native), English (Professional Working Proficiency — Strategic Negotiation & Executive Briefing). Education: BA in English Literature, Meiji Gakuin University, Tokyo, 1996. Thesis: "A Socio-Engineering Analysis of Nathaniel Hawthorne's Works" — analyzing structural friction between Puritan governance and individual psychology, establishing the early theoretical basis for Structural Intelligence.`
  },
  {
    id: "structural_intelligence",
    tags: ["structural intelligence","構造知性","philosophy","哲学","methodology","方法論","causal","因果","concept","概念","codemancer","未来","選択権"],
    content: `Structural Intelligence (構造知性) is Yasuyuki Sakane's core philosophy: the ability to read and redesign the causal structures underlying organizational decisions, systemic contradictions, and technological transitions — rather than responding to surface phenomena. Key principle: "未来の選択権を構造から設計する" (Design the freedom of future choices from structural foundations). Sakane is called "Causal Codemancer" — one who encodes causal structure into organizational systems. The methodology redefines technology management not as administration, but as the architecture of decision-making operating systems. Intellectual foundations: cognitive science, systems thinking (physics/entropy), behavioral economics, Asimov's Psychohistory, and 26+ years of deep technical practice. Published whitepapers: "Breaking the Chains of Thought: Redesigning the Future with Structural Intelligence and AI Co-creation", "The Legacy Challenge Reimagined", "Structural Intelligence: Next-Gen Autonomous Careers & Compound Growth (2025+)", "Unlocking M&A Value: The Structural Intelligence Approach to Technology Due Diligence".`
  },
  {
    id: "emvis_overview",
    tags: ["EMVIS","poc","PoC","poc trap","PoC地獄","market entry","市場参入","japan market","日本市場","validation","検証","ringi","稟議","スタートアップ","israel","イスラエル","合意形成","意思決定加速","operating system","OS","GTM"],
    content: `EMVIS (Enhanced Micro-Validation Intelligence System) is Sakane's proprietary AI-driven operating system — full subtitle: "認知科学・社会工学・AI駆動型アーキテクチャによる日本市場進出の構造的ハッキング" (Structural Hacking of Japan Market Entry via Cognitive Science, Social Engineering, and AI-Driven Architecture).

Core problem: Excellent overseas startups (especially from Israel and Silicon Valley) entering Japan fail not due to technology quality, but due to Japan's "wet organizational dynamics" and highly complex, siloed decision-making structures — a fatal GTM mismatch. EMVIS is not a SaaS sales tool. It is a "thinking OS" that hacks the customer organization's cognitive-executive functions from the outside, systematically controlling consensus formation (合意形成). It transforms Japan's ambiguous, human-relationship-driven decision process into a dry, engineering-grade process controllable by data and algorithms.

Root cause — two collisions:
1. Technological Determinism vs Social Constructionism: Overseas startups assume "excellent tech + clear ROI = rational adoption." But Japanese enterprises are dominated by Social Constructionist processes (ringi/nemawashi) — prioritizing group harmony, avoiding conflicts with existing vendors, eliminating unknown risks. Result: "持ち帰り検討します" (endless deferral) → PoC地獄.
2. Stakeholder Working Memory Depletion and Ego Depletion: Constant multitasking depletes executive working memory → they flee to System 1 (heuristics) dominated by Status Quo Bias and Loss Aversion → instinctive rejection. Traditional GTM response (more data, more ROI slides) overflows cognition further.

Quantified outcomes: PoC period -50% (6-10 months → 3-6 months). Decision lead time -50% (12-18 months → 6-12 months). PoC success rate 20-30% → 60-75%. Contract probability predicted at 80%+ accuracy. Maximum 90-day PoC with mandatory Go/No-Go gate. VC dashboard with real-time TVS (Traction Velocity Score) metrics.`
  },
  {
    id: "emvis_cognitive_architecture",
    tags: ["EMVIS","認知","cognitive","kahneman","system1","system2","ego depletion","自我消耗","ワーキングメモリ","working memory","bias","バイアス","cognitive load","認知負荷","ESI","拡張認知","executive function","実行機能","solomonoff","MDL","stanovich"],
    content: `EMVIS Cognitive Architecture — the ESI (Executive Strategic Intelligence) cognitive-execution stack embedded in EMVIS:

Stanovich's intelligence distinction: Algorithmic Intelligence (logical processing) vs Rational Intelligence (optimal real-world action). Even high-IQ CTOs/CISOs suffer rational intelligence dysfunction due to bias and fatigue. EMVIS supplies "external cognitive OS" compensating for their lost Executive Function.

4-level Cognitive-Execution Stack:
- System 0 (Information Foundation Layer): Objective raw data before human bias — EDINET financial data, IPA/JVN vulnerability info, job posting tech stack inference, JPCERT/CC and PPC compliance data. Missing values补完 via Bayesian inference contingency models (scikit-learn).
- System 1.5 (AI-Enhanced Intuition): AI pattern-recognizes complex organizational dynamics imperceptible to human intuition — GNN-based hidden power structure mapping, Monte Carlo consensus simulation.
- System 2 (Logical Verification): Forces systematic gate checks every 2 weeks — activating the logical verification humans abandon when fatigued.
- System 3 (Structural Synthesis): Meta-cognitive control matching information disclosure to target's cognitive mode (System 1 or 2) to guide final consensus formation.

Strategic Constraint Philosophy (MDL/Solomonoff): Rather than flooding customers with options (分析の洪水), EMVIS deliberately strips information — surgically presenting only the minimum, most impactful insight digestible at that moment. Avoids Decision Fatigue by precisely calculating cognitive load and constraining "what NOT to choose."

Progressive Disclosure Strategy: Per stakeholder attribute and PoC phase, information is filtered so each person receives only what they can process AND what motivates next action — enhancing Cognitive Ease, gradually inducing Ownership.`
  },
  {
    id: "emvis_7layers",
    tags: ["EMVIS","7層","7 layers","architecture","アーキテクチャ","layer","レイヤー","microservice","GNN","graph neural network","monte carlo","モンテカルロ","digital twin","EDINET","組織図","hidden decision maker","隠れた意思決定者","game theory","ゲーム理論","TVS","TVC","VC","reporting"],
    content: `EMVIS 7-Layer Microservices Architecture (Separation of Concerns principle):

Layer 1 — Data Intelligence Foundation: System 0 objective data. EDINET financial extraction, tech stack inference from job postings, JPCERT/CC and PPC incident/compliance auto-collection. Missing data補完 via Bayesian contingency models.

Layer 2 — Organizational Intelligence Engine: GNN + network analysis visualizes informal power structures. Mathematically identifies Hidden Decision Makers (隠れた意思決定者) and information bottlenecks invisible on official org charts.

Layer 3 — Decision Process Simulator: Pre-PoC consensus simulation on Digital Twin. Markov chain + Monte Carlo — LLM AI agents autonomously dialogue as CISO/IT manager personas. Pre-maps technical and political resistance points, generates optimal intervention routes.

Layer 4 — Micro-Validation Framework: EMVIS's heart — the execution engine that breaks the PoC Trap. (See separate chunk for full detail.)

Layer 5 — Stakeholder Communication Advisor: Generates optimal communication protocols per stakeholder + engagement level. LLM understands Japan's high-context nemawashi culture — dynamically produces approach scripts avoiding System 1 defensive triggers.

Layer 6 — PoC Optimization & Partner Strategy: Analyzes target's existing SIer/vendor ecosystem. Designs Win-Win incentive structures (Game Theory Optimization) converting competitors into allies.

Layer 7 — Continuous Learning & VC Reporting: Meta-learning + investor accountability. Real-time composite KPIs: TVS (Traction Velocity Score = Engagement Rate × Contract Probability × ROI Clarity), BPI (Barrier Penetration Index). VC (LP/GP) dashboard eliminates "営業の手応え" (gut-feel sales reporting) with quantitative traction transparency.`
  },
  {
    id: "emvis_micro_validation",
    tags: ["EMVIS","micro validation","マイクロバリデーション","sprint","スプリント","2週間","2 weeks","progressive disclosure","段階的開示","gate check","ゲートチェック","sunk cost","埋没費用","engagement score","dynamic scoring","90日","technical proof","integration proof","value proof","scale proof"],
    content: `Micro-Validation Framework (Layer 4) — EMVIS's killer application:

4-Phase Structured Sprint (max 90 days, mandatory 2-week units):
1. Technical Proof (Week 1-2): For on-site engineers. Goal: prove basic operation in existing environment — create Quick Win.
2. Integration Proof (Week 3-4): For IT department heads. Goal: prove seamless integration with existing systems and APIs.
3. Value Proof (Week 5-6): For business owners. Goal: prove concrete ROI — operational efficiency and cost reduction with specific numbers.
4. Scale Proof (Week 7-8): For C-suite and CISO. Goal: prove security and scalability for company-wide deployment.

Why 2-week sprints work: Showing C-suite technical API specs (high cognitive load) in early stages → "too difficult" avoidance. Showing field staff company-wide ROI → "jobs will be taken" defensiveness. Each phase delivers precisely the information that stakeholder can absorb AND that motivates their next action.

Dynamic Engagement Scoring: Real-time tracking of stakeholder "heat." Demo attendance, technical questions, meeting requests weighted + Time Decay logic → exposes the "真の脈あり度" (true lead likelihood) behind Japan's ambiguous "検討します" → determines resource allocation priority.

Decision Gate + Automated Sunk Cost Trigger: At each 2-week end, system Gate Check activates. Even if technical verification succeeds, if Engagement Score is below threshold → next phase progression blocked. Prevents emotionally-driven PoC extensions. "Automated Sunk Cost Trigger" forces strategic withdrawal — protecting startup resources from Japan's PoC地獄.`
  },
  {
    id: "emvis_tech_stack",
    tags: ["EMVIS","technology","技術","agentic rag","LlamaIndex","FlowiseAI","LLM","ベイジアン","bayesian","synthetic data","合成データ","cold start","コールドスタート","DRPM","pre-training","scikit-learn","simulation","シミュレーション","non-zero-sum","非ゼロ和"],
    content: `EMVIS Technical Stack and AI Engineering Differentiation:

Agentic RAG Core (Head of EMVIS): LlamaIndex + FlowiseAI-based Agentic RAG. Multiple LLM agents autonomously cross-search Notion knowledge base, EDINET data, JPCERT/CC vulnerability info — quantitatively calculating risk scores (e.g., $S_{vuln_risk}$). When data is missing, Bayesian networks (scikit-learn) perform probabilistic inference — robust operation in Japan's incomplete data environments.

Virtual PoC Simulator for Synthetic Training Data (Key AI Engineering Advantage): B2B enterprise sales' "cold start problem" — labeled PoC success/failure data doesn't exist in reality. EMVIS solution: LLM agents play customer personas (CISO, IT Infrastructure Head), autonomously dialogue in virtual conference rooms executing PoC scenarios — non-zero-sum game simulations. Generates countless "virtual PoC result logs" → pre-trains prediction model (DRPM: Dynamic Risk Prediction Model) as training data. This eliminates the cold start problem with a decisive AI engineering advantage no competitor possesses.

EMVIS is enterprise-grade infrastructure — not theoretical. Validated on real RemOps startup: 50% validation cycle compression, doubled contract conversion rates, 70% ownership attribution automation via LLM agents.`
  },
  {
    id: "ccbr_overview",
    tags: ["CCBR","cyber","security","セキュリティ","background radiation","背景放射","anomaly","異常検知","宇宙背景放射","CMB","cosmic","ノイズ","noise","baseline","ベースライン","unknown threat","未知の脅威","ゼロデイ","zero day","gamma","スライド","presentation"],
    content: `CCBR (Cyber Security Background Radiation Theory / サイバーセキュリティ背景放射理論) is Sakane's theoretical framework for next-generation cybersecurity. Published as Gamma slide deck at: https://ccbr-fo29cxo.gamma.site/ (発案・作成: 坂根康之, 2025年1月3日)

Full title: "3Dデジタルツインを用いた分析・学習、欺瞞とリスク定量化フレームワークの提案"

Core concept inspired by Cosmic Microwave Background Radiation (CMB): Just as CMB exists uniformly throughout the universe as a trace of its birth, CCBR is the totality of fundamental digital noise and information fragments existing in cyberspace since the internet's creation — observable as cyberspace's continuous "rustling," independent of individual attacks.

2025 Cybersecurity Challenges CCBR addresses:
1. Sophistication/stealth of attacks: Zero-days and unknown threats increasing
2. Limitations of conventional defenses: Signature-based approaches cannot handle new threats
3. Framework deficiency: Cannot grasp ecological state of entire network
4. Dead Point: Cyber risk quantification is structurally impossible with existing approaches

Four components of CCBR background radiation:
1. Initial Protocol Echoes: Traces of past communication protocols
2. Defunct Service Responses: Residual signals from decommissioned services
3. Scan Activity Baseline: Constant network scan patterns by attackers/monitors
4. Failure Echoes: Noise communications from system failures

By comprehensively analyzing these, macro-level security monitoring beyond conventional individual attack detection becomes possible. CCBR treats cyberspace noise as an "asset" — foundation of a new defense strategy.`
  },
  {
    id: "ccbr_architecture",
    tags: ["CCBR","RAD","radiation anomaly detection","放射異常検知","digital twin","デジタルツイン","edge","エッジ","core","LLM","agentic","知識ライフサイクル","knowledge lifecycle","スペクトル","spectrum","3層","edge-core-llm","ベースライン学習","baseline learning","autonomous","自律的"],
    content: `CCBR Theoretical Structure and Architecture:

Three theoretical pillars:
1. RAD (Radiation Anomaly Detection Theory): Detects deviations from stable CCBR profiles — from legacy systems to zero-day attacks, maps phenomena as "wavelengths" and identifies early anomaly via deviation from stable profiles
2. Cyber Radiation Spectrum Theory: Maps phenomena and "wavelengths" across the cyberspace frequency domain
3. Cyber Radiation Intensity Distribution Law: Quantifies noise intensity at each network position

Edge-Core-LLM Distributed Architecture:
- Edge Layer (Sensor): Lightweight preprocessing. Edge AI + security devices collect CCBR data, remove noise in real-time
- Core Layer (Analysis Hub): High-performance computation + Digital Twin. Simulates anomaly detection and risk scenarios. Core ML/DL learns normal patterns
- LLM Layer (Intelligence): Anomaly interpretation, causal inference, risk explanation generation. Results fed back to edge for continuous learning

7-Step Knowledge Lifecycle (Autonomous Knowledge Ecosystem):
1. Data Collection & Preprocessing: Edge AI collects CCBR data, removes noise
2. Baseline Learning & Anomaly Detection: Core ML/DL builds normal pattern model, detects real-time deviations
3. Anomaly Analysis & Interpretation: Digital Twin simulates anomalies; LLM + humans add interpretation → Synthetic Data 1
4. Deception (欺瞞): Autonomously optimized deception architecture from psychology/cognitive science perspective → Synthetic Data 2
5. Risk Quantification: Results numerically expressed by business impact and probability
6. Response & Action: Countermeasures executed, coordinated with security devices
7. Learning & Feedback: Results become training data, autonomously evolving all components

Design principles: Modularity, distribution, scalability. Realizes predictive and adaptive cyber defense via self-evolving knowledge cycle.`
  },
  {
    id: "ccbr_deception_risk",
    tags: ["CCBR","deception","ディセプション","欺瞞","honeypot","ハニーポット","APT","3D","digital twin","テレメトリ","telemetry","legal evidence","法的証拠","CFAA","GDPR","VaR","risk quantification","リスク定量化","hackback","ハックバック","constitution","憲法21条","dead point","デッドポイント"],
    content: `CCBR Deception Component (欺瞞 / Autonomous Observation and Learning Catalyst):
Mechanism: 3D Digital Twin technology strategically deploys virtual networks, systems, users, data — guides attackers with honeypots, tokens, diverse deception elements. Builds advanced deception environments including AI camera footage imitation to counter AI attacks.
Features: Autonomous optimization of deception environment based on psychology and cognitive science. AI learns attacker behavior, auto-generates optimal strategies. Records all behavior including 3D spatial interactions (Deception Telemetry).
Contribution: Collects/analyzes real combat data on unknown attack methods and intentions — generates contextualized, visualized threat intelligence. Provides high-quality data for 3D Digital Twin and AI learning (synthetic data circulation model).
Legal evidence output: Compliant with US CFAA law and EU GDPR.
Hackback (能動的防御): On hold pending resolution of legal/ethical challenges in Japan.

CCBR Risk Quantification and the Dead Point:
The "Dead Point" is the structural impossibility of cyber risk quantification with existing approaches — CCBR exists to break this. Converts technical anomalies into VaR (Value at Risk) with quantifiable business impact and probability. Mechanically ensures legal accountability aligned with Japan's Constitution Article 21 (the key constitutional bottleneck for active cyber defense — Sakane's due diligence on Israeli Active Defense solution proved this: lack of GNN/LSTM/Bayesian models means inability to mechanically distinguish attack data from private communications as constitutionally required). Translates technical security jargon into C-suite decision language.

Future Vision: CCBR paradigm shift — unknown threat response dramatically enhanced, deception as active intelligence/learning engine, risk quantification enabling direct management investment optimization, breaking the Dead Point to create a new cyber era.`
  },
  {
    id: "esi",
    tags: ["ESI","decision","意思決定","executive","経営","framework","フレームワーク","cognitive","認知","bias","バイアス","organization","組織","socratic","ソクラテス","triage","トリアージ","3層","entropy","エントロピー","mckinsey","m&a"],
    content: `ESI (Executive Structural Intelligence) Framework is Sakane's decision-making OS redesign system. Problem: McKinsey research shows 72% of executives recognize problems in their decision-making. M&A success rate ~50% (coin flip). Cause: the "structure" of decision-making is invisible. ESI is also the cognitive architecture embedded within EMVIS as its "拡張認知アーキテクチャ" (Extended Cognitive Architecture).

3-Layer Responsibility Architecture:
- Layer 3: Strategic Constraint Design — "What NOT to choose" (Type A decisions), entropy-resistant strategic constraints
- Layer 2: Socratic Engine + Cognitive Bias Detection — automated questioning system, bias identification and mitigation
- Layer 1: Execution Monitoring + Feedback — real-time implementation oversight

Cognitive Triage System: 4-axis automatic optimization — Importance × Irreversibility × Complexity × Time Constraint. Auto-selects optimal thinking mode per decision type.

Impact: Thinking precision +50%. Decision error rate -60%. ROI improvement 70%+.

Foundation: Behavioral economics (Kahneman/Tversky prospect theory, Sunstein nudge theory, bounded rationality) + Cognitive science (Stanovich, Dennett) + Physics (entropy as organizational decay) + Asimov's Psychohistory for long-term pattern recognition.`
  },
  {
    id: "career_current",
    tags: ["current","現在","independent","独立","work","仕事","venture","startup","advisory","2024","present","activity","今","strategic","techno-capital","memex","sakane-memex"],
    content: `Current role (Apr 2024 – Present): Strategic Techno-Capital Architect & Venture Partner (Independent), Tokyo.

Key activities:
1. EMVIS development and deployment: Applied to RemOps startup — compressed validation cycle 50%, doubled contract conversion rates, validated 70% ownership attribution automation via LLM agents.
2. CCBR theoretical framework: Formalized into published Gamma slide deck (ccbr-fo29cxo.gamma.site).
3. Sovereign Governance & Risk Architecture: Executed anticipatory DD on Israeli AI-driven "Active Defense" solution — identified structural infeasibility (no GNN/LSTM/Bayesian models, cannot mechanically satisfy Constitution Article 21). Guided "Strategic Risk-Off" directive averting fatal legal/reputational exposure.
4. Executive Decision Intelligence / Thought Outsourcing: Re-engineered geopolitical risk firm model. Established invitation-only Athena Salon executive forum for sovereign decision-makers.
5. sakane-memex: Personal semantic knowledge base — 619-entry cognitive journal using local LLMs (qwen3-embedding, qwen3:latest), vector embeddings, knowledge graphs, Next.js 15 + React Three Fiber frontend. Dual-axis hypothesis (abstraction score × embodiment score). Roadmap: SaaS product by end of 2026, self-fine-tuned qwen3-7B via LoRA/QLoRA on RTX3060.`
  },
  {
    id: "career_accenture",
    tags: ["accenture","アクセンチュア","cto","CTO","fusion center","CFC","SOC","managed security","MSS","cyber fusion","managing director","2018","2021","adaptive defense","women in security","$25M","ransomware"],
    content: `Accenture Japan Ltd. — Security Japan CTO, Head of Cybersecurity Services, Managing Director (Jan 2018 – Feb 2021). Built Japan's first Cyber Fusion Center (CFC): $25M new revenue, 70% ROI, 35% annual growth. Developed Adaptive Defense methodology. 6 pillars: asset/vulnerability management, continuous vigilance, threat hunting, incident response, applied threat intelligence, detection engineering. During multi-billion-dollar M&A DD, architected Strategic Isolation policy. Led 20+ executive seminars/year. Launched "Women in Security" initiative — world's first female SOC manager in 2020. Successfully contained high-severity ransomware attack using Adaptive Defense + real-time telemetry. Also served as Accenture Ventures Managing Director (Dec 2018 – Feb 2021): cybersecurity M&A assessment and technical DD.`
  },
  {
    id: "career_tcs_fireeye_others",
    tags: ["TCS","tata","fireeye","ファイアアイ","consulting","2023","2024","2013","2015","president club","founding","COE","checkpoint","trend micro","fortinet","clearswift","systems trust","eugene schultz","comtec","serviceware"],
    content: `TCS Japan (Mar 2023 – Mar 2024): Head of Cyber Security Consulting + Head of R&I. Dynamic cyber resilience framework, cybersecurity CoEs, MITRE ATT&CK-based threat hunting for Tier-1 financial institutions, COIN™ Japan-India talent exchange, 3-month executive education program. FireEye Japan (2013–2015): Founding role, pioneered dynamic sandbox analysis in Japan, Mandiant portfolio integration, President Club 2013 (most valuable engineer globally). Check Point (Mar 2016–Feb 2017): Chief Security Architect/CTI Specialist, OT security, fintech. Trend Micro (Aug 2015–Jan 2016): Senior Manager Engineering, Japan-specific product localization. Fortinet KK (2011–2013): FortiMail Japan localization and market share growth. Clearswift KK (2008–2011): Senior Sales Engineer/TAM/APAC SysAdmin, HTTPS content inspection product launch, President Club 2010. Systems Trust Inc (2005–2008): Founding team, SIEM correlation engine co-development with High Tower Software, J-SOX consulting, studied under Dr. Eugene Schultz. COMTEC INC (1999–2002): Director/PMO, national ATM modernization, team of 88, IBM Japan/Microsoft/Oracle collaboration. Serviceware (1997–1999): SPOE Lead, ThinkPad Technical Support, Best Support Engineer 1998.`
  },
  {
    id: "intellectual_foundations",
    tags: ["cognitive science","認知科学","physics","物理学","entropy","エントロピー","behavioral economics","行動経済学","asimov","foundation","kahneman","nudge","roots","知的基盤","hawthorne","meiji gakuin","stanovich","solomonoff","MDL"],
    content: `Sakane's intellectual foundations — all self-studied and directly implemented in EMVIS/CCBR/ESI:

1. Cognitive Science & Philosophy: Kahneman/Tversky dual-process theory (System 1/2), Ego Depletion, Working Memory constraints, Status Quo Bias, Loss Aversion, Stanovich's Algorithmic vs Rational Intelligence. Foundation for EMVIS's 4-level cognitive stack (System 0→1.5→2→3), Progressive Disclosure, and Dynamic Engagement Scoring.

2. Physics & System Dynamics: Entropy, complex systems, feedback loops, chaos theory, Solomonoff's MDL (Minimum Description Length) principle — "知的倹約" (intellectual frugality). Foundation for CCBR's Background Radiation model and EMVIS's strategic information constraint.

3. History / Asimov's Psychohistory: Contextualizes events across decades. Resistance to DX/AI fads from reading them as historical pattern repetitions. Philosophical basis for CSVFO's civilization-scale perspective.

4. Behavioral Economics & Social Engineering: Prospect theory, nudge theory (Sunstein), bounded rationality, Game Theory Optimization. Foundation for EMVIS Layer 5 (Communication Advisor), Layer 6 (Partner Strategy), and the Progressive Disclosure algorithm.

5. 26 years Deep Tech Reality: Packet analysis to kernel level, SIEM correlation engine development, implementation hell, technical debt. Immunity to superficial DX/AI narratives. Validates EMVIS's tech stack choices (GNN, Monte Carlo, LlamaIndex, Agentic RAG) and CCBR's Edge-Core-LLM architecture.

6. Literature / Structural Analysis: BA thesis on Hawthorne's Puritan-individual structural friction — earliest theoretical basis for Structural Intelligence as analysis of friction between governance systems and individual behavioral psychology.`
  },
  {
    id: "contact_target",
    tags: ["contact","連絡","hire","採用","consult","相談","available","collaboration","advisory","target","audience","対象","お問い合わせ","vc","投資家","ciso","スタートアップ","island","enterprise browser"],
    content: `Yasuyuki Sakane is currently available for: Strategic advisory roles (cybersecurity, AI governance, Deep Tech Japan market entry). Part-time preferred (2-3 days/week) while pursuing startup trajectory. Open to enterprise browser security space and similar strategic advisory roles.

Target collaborators:
- VCs/investors: Deep Tech portfolio companies facing Japanese market PoC Trap → EMVIS is the direct solution, Sakane operates as both architect and implementer
- Startup Japan heads: HQ-Japan decision-making misalignment → ESI + EMVIS combination resolves structural disconnect
- Management consultants: Cannot identify intervention points in client decision structures → ESI Framework maps them structurally
- CISOs/Security executives: Cannot translate technical anomalies to executive language → CCBR converts to VaR, ensures legal accountability

Contact: yasuyuki@sakane.dev | contact@sakane.dev | +81 80 1189 8979
Sites: www.sakane.dev (Japanese) | en.sakane.dev (English) | cv.sakane.dev (full CV) | pages.sakane.dev/structural-gap-analysis/ (interactive infographic) | ccbr-fo29cxo.gamma.site (CCBR presentation deck)`
  }
];

// ─── Retrieval Engine ───────────────────────────────────────────
function retrieveKnowledge(query, topK = 4) {
  const q = query.toLowerCase();
  const scored = SAKANE_KNOWLEDGE.map(chunk => {
    let score = 0;
    // Tag matching (high weight)
    chunk.tags.forEach(tag => {
      if (q.includes(tag.toLowerCase())) score += 3;
    });
    // Content keyword matching (lower weight)
    q.split(/[\s　、。？！]+/).forEach(word => {
      if (word.length > 2 && chunk.content.toLowerCase().includes(word)) score += 1;
    });
    return { chunk, score };
  });

  const top = scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(s => s.chunk);

  // Fallback: return identity + current + structural_intelligence
  if (top.length === 0) {
    return SAKANE_KNOWLEDGE.filter(c =>
      ['identity', 'career_current', 'structural_intelligence'].includes(c.id)
    );
  }
  return top;
}

// ─── System Prompt Builder ──────────────────────────────────────
function buildSystemPrompt(query, lang) {
  const chunks = retrieveKnowledge(query);
  const ctx = chunks.map(c => `[${c.id}]\n${c.content}`).join('\n\n---\n\n');

  if (lang === 'en') {
    return `You are an AI assistant for Yasuyuki Sakane's professional portfolio site. Answer questions about Yasuyuki Sakane accurately and helpfully based on the following knowledge base. Do not fabricate information not present in the knowledge base. Refer to him as "Sakane" or "Yasuyuki Sakane" (you are an assistant, not Sakane himself). Be concise yet informative. Answer in English.

KNOWLEDGE BASE:
${ctx}`;
  }

  return `あなたは坂根康之のポートフォリオサイトのAIアシスタントです。以下のナレッジベースに基づき、坂根康之に関する質問に正確かつ丁寧に回答してください。ナレッジベースにない情報は捏造しないでください。「坂根さん」または「坂根康之氏」と呼んでください（あなたは坂根本人ではなくアシスタントです）。簡潔かつ情報量のある日本語で回答してください。

ナレッジベース:
${ctx}`;
}
