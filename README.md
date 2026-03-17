# Structural Gap Analysis — Interactive Infographic
### 坂根康之 | Yasuyuki Sakane — Structural Intelligence Architect

**🌐 Live:** [pages.sakane.dev/structural-gap-analysis/](https://pages.sakane.dev/structural-gap-analysis/)

---

## 日本語

### 概要

このリポジトリは、坂根康之のプロフェッショナル・ポートフォリオとして公開しているインタラクティブ・インフォグラフィックのソースコードです。

「市場が持つ認識（As Is）」と「実際の活動・能力（To Be）」の間にある**構造的断絶（THE VOID）**を4層アーキテクチャで可視化し、その断絶を解消するメカニズム（EMVIS・CCBR・ESI）を探索できます。

### 主な機能

- **インタラクティブSVGマップ** — 13ノードをクリックして各要素の意味・相関・タイムラインを探索
- **日本語 / 英語 切り替え** — 右上ボタンで即時言語切り替え（設定はlocalStorageに保存）
- **AIチャットアシスタント** — Gemini APIを使用した坂根康之に関するQ&Aチャットボット
- **静的RAG** — EMVIS・CCBR・ESIなどの詳細情報をナレッジベースから動的に検索して回答
- **レスポンシブデザイン** — モバイル・デスクトップ対応

### ファイル構成

```
structural-gap-analysis/
├── index.html      # メインページ（i18n・チャットUI統合）
├── knowledge.js    # RAGナレッジベース（坂根康之の情報チャンク）
└── README.md       # このファイル
```

### 4層アーキテクチャ

| Layer | 内容 |
|-------|------|
| **Layer 1 — AS IS** | 市場が認識している坂根のラベル（Security Specialist / Tech Risk Advisor / PM） |
| **Layer 2 — Hidden Substrate** | 履歴書には現れない26年間の知的基盤（認知科学・物理学・行動経済学・歴史学） |
| **Layer 3 — Transformation Engine** | THE VOID（認識の断絶）とそれが生む3つの構造的矛盾、および解消メカニズム（EMVIS・CCBR・ESI） |
| **Layer 4 — TO BE** | 向かうべき姿（Structural Architect / Chief Decision Architect / Sovereign Venture Partner） |

### AIチャット機能のセットアップ

1. [Google AI Studio](https://aistudio.google.com/) でGemini APIキーを取得
2. サイトの右下チャットボタン（🤖）をクリック
3. モーダルにAPIキーを入力して保存
4. キーはブラウザの`localStorage`にのみ保存され、外部には送信されません

### 独自フレームワーク

- **EMVIS** (Enhanced Micro-Validation Intelligence System) — 日本市場のPoC地獄を解消するAI駆動型意思決定OS。詳細: [ホワイトペーパー](https://surf-entrance-fa8.notion.site/Enhanced-Micro-Validation-Intelligence-System-EMVIS-3269ee114e2c804ca8e5e65826cb0432)
- **CCBR** (Cyber Security Background Radiation Theory) — 宇宙背景放射のアナロジーによる次世代サイバーセキュリティ理論。詳細: [Gammaスライド](https://ccbr-fo29cxo.gamma.site/)
- **ESI** (Executive Structural Intelligence) — 意思決定OSを再設計する認知アーキテクチャフレームワーク

---

## English

### Overview

This repository contains the source code for an interactive infographic published as Yasuyuki Sakane's professional portfolio.

It visualizes the **structural gap (THE VOID)** between how the market perceives Sakane (As Is) and his actual activities and capabilities (To Be) through a 4-layer architecture — and lets visitors explore the mechanisms (EMVIS, CCBR, ESI) that resolve this gap.

### Key Features

- **Interactive SVG Map** — Click 13 nodes to explore each element's meaning, correlations, and timeline
- **Japanese / English Toggle** — Instant language switching via top-right button (preference saved to localStorage)
- **AI Chat Assistant** — Gemini API-powered Q&A chatbot about Yasuyuki Sakane
- **Static RAG** — Dynamically retrieves relevant chunks from knowledge base to answer questions about EMVIS, CCBR, ESI, and career history
- **Responsive Design** — Mobile and desktop compatible

### File Structure

```
structural-gap-analysis/
├── index.html      # Main page (i18n + chat UI integrated)
├── knowledge.js    # RAG knowledge base (chunked information about Yasuyuki Sakane)
└── README.md       # This file
```

### 4-Layer Architecture

| Layer | Content |
|-------|---------|
| **Layer 1 — AS IS** | Labels the market associates with Sakane (Security Specialist / Tech Risk Advisor / PM) |
| **Layer 2 — Hidden Substrate** | 26 years of intellectual foundations invisible on a resume (Cognitive Science, Physics, Behavioral Economics, History/Asimov) |
| **Layer 3 — Transformation Engine** | THE VOID (perceptual gap) and the 3 structural contradictions it generates, plus resolution mechanisms (EMVIS, CCBR, ESI) |
| **Layer 4 — TO BE** | Target identity (Structural Architect / Chief Decision Architect / Sovereign Venture Partner) |

### AI Chat Setup

1. Obtain a Gemini API key from [Google AI Studio](https://aistudio.google.com/)
2. Click the chat button (🤖) at the bottom-right of the site
3. Enter your API key in the modal and save
4. The key is stored only in your browser's `localStorage` and never transmitted externally

### Proprietary Frameworks

- **EMVIS** (Enhanced Micro-Validation Intelligence System) — AI-driven decision intelligence OS eliminating Japan's PoC Trap. Details: [Whitepaper](https://surf-entrance-fa8.notion.site/Enhanced-Micro-Validation-Intelligence-System-EMVIS-3269ee114e2c804ca8e5e65826cb0432)
- **CCBR** (Cyber Security Background Radiation Theory) — Next-generation cybersecurity theory inspired by Cosmic Microwave Background Radiation. Details: [Gamma Slide Deck](https://ccbr-fo29cxo.gamma.site/)
- **ESI** (Executive Structural Intelligence) — Cognitive architecture framework for redesigning the decision-making OS

### Tech Stack

- Vanilla HTML / CSS / JavaScript (zero dependencies, GitHub Pages compatible)
- Gemini API (`gemini-2.5-flash-lite`) for AI chat
- Static RAG via keyword + tag matching against `knowledge.js`
- Google Fonts: Syne + Noto Sans JP

---

## Contact / お問い合わせ

**Yasuyuki Sakane (坂根康之)**

📧 [yasuyuki@sakane.dev](mailto:yasuyuki@sakane.dev)
🌐 [www.sakane.dev](https://www.sakane.dev) / [en.sakane.dev](https://en.sakane.dev)
📄 [cv.sakane.dev](https://cv.sakane.dev)
💼 [linkedin.com/in/yasuyukis](https://www.linkedin.com/in/yasuyukis/)
🐙 [github.com/sakane-dev](https://github.com/sakane-dev)

---

© 2026 Yasuyuki Sakane. All rights reserved.
