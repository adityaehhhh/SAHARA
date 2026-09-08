# SAHARA Project Memory & Development Log

## Overview
This document records the architectural decisions, created features, design systems, generated imagery, and future development plans for the **SAHARA** Women's Safety & Confidence Platform.

---

## 1. What Was Created & Redesigned

### A. SAHARA MMA & Safety Workshops (`mma.html`)
- **Visual Design**: Fully redesigned to match the `sos-emergency.html` design system:
  - Background: `#e8e6df`
  - Text: `#2a2c30`
  - Typography: Editorial TAN Astoria / Playfair Display / Poppins display hierarchy
  - Subtle botanical accents, soft shadows, rounded card radius (`16px`–`24px`), and warm editorial linen palette.
- **Top Brand Navigation & Readiness Bar**:
  - `top-navbar-card` with red brand letters (`S A H A R A`), logo, navigation links, and Emergency SOS button.
  - Active readiness status bar: `● SAHARA SAFETY LEARNING & READINESS SYSTEMS ACTIVE`.
- **Hero Section**:
  - Eyebrow: `SAHARA • LEARN TO FEEL READY`
  - Headline: `MMA & WORKSHOPS`
  - Subtitle: `“Build confidence. Learn practical skills. Stay ready.”`
  - High-res local editorial photography (`images/mma-hero.png`) with floating badges and organic botanical touches.
  - Primary CTAs: *Explore Workshops* & *Start Today's MMA*.
- **Section 1 — Your Safety Learning**:
  - 4 animated progress cards: Self-Defense (72%), Situational Awareness (58%), Digital Safety (84%), Emergency Preparedness (46%).
  - Smooth IntersectionObserver progress animations.
- **Section 2 — Featured Workshops (“Workshops Worth Showing Up For”)**:
  - Dynamic real-time search and 5 category filter buttons (*All, Self-Defense, Awareness, Cyber Safety, Emergency*).
  - 4 Workshop Cards (*Street Smart, Know Your Move, Digital Boundaries, When Things Go Wrong*).
  - Interactive "VIEW WORKSHOP" modal with curriculum points and "START WORKSHOP" simulation.
- **Section 3 — Daily MMA Micro-Habits**:
  - `“10 minutes. One useful skill.”`
  - Today's practice: *Create an Exit Plan* (10-second environmental scanning habit).
  - Multi-step interactive exercise modal (Steps 1–4 + Completion state).
  - LocalStorage persistence for streak counter (`sahara_daily_mma`) and completion badge.
- **Section 4 — Learning Path (Roadmap Timeline)**:
  - 6 milestone stages (*Foundations, Awareness, Self-Defense [Active], Digital Safety, Emergency Response, Confidence*).
  - Responsive horizontal connecting timeline collapsing into vertical timeline on mobile.
- **Section 5 — Upcoming Workshops (“Coming Up”)**:
  - 3 scheduled prototype sessions with facilitator profiles.
  - Interactive RSVP buttons with toast notification and `localStorage` state.
- **Section 6 — Safety Confidence Manifesto**:
  - High-end editorial typography: *“Confidence is a skill. You don't need to become fearless. You just need to know what to do next.”*
  - 3 core principles: *Notice Earlier, Move Smarter, Respond Calmly*.

---

### B. SAHARA Safety Assistant Chatbot (`chatbot.html`)
- **Local Intent-Routing Engine (Zero External APIs / Offline-First)**:
  - Centralized Intent Registry (12 Core Intents):
    - `EMERGENCY_SOS` (Priority 100 &rarr; `sos-emergency.html`)
    - `SAFE_MAP` (&rarr; `map.html`)
    - `SAFE_JOURNEY` (&rarr; `ambtracker.html`)
    - `COMMUNITY` (&rarr; `Feedback.html`)
    - `CYBER_SAFETY` (&rarr; `privacy.html`)
    - `WEARABLE` (&rarr; `wearable.html`)
    - `EVIDENCE_VAULT` (&rarr; `manage.html`)
    - `MMA_WORKSHOPS` (&rarr; `mma.html`)
    - `DAILY_MMA` (&rarr; `mma.html`)
    - `PROFILE` (&rarr; `profile.html`)
    - `VOLUNTEER` (&rarr; `volunteer-portal.html`)
    - `HOME` (&rarr; `index.html`)
- **True Multilingual Support**:
  - Supported Languages: **English**, **Hindi (हिन्दी)**, **Hinglish (Roman Hindi)**, **Punjabi (ਪੰਜਾਬੀ)**, **Marathi (मराठी)**.
  - Dynamic Language Selector (`localStorage` key: `sahara_chat_language`).
  - Localized system responses, action cards, quick prompts, and voice recognition/synthesis.
- **Voice Capabilities**:
  - Web Speech API speech recognition mapped to browser language codes (`en-IN`, `hi-IN`, `pa-IN`, `mr-IN`).
  - Audio feedback via `window.speechSynthesis` with Voice Toggle.
- **Chat Interface & Visual Harmony**:
  - Matched to `sos-emergency.html` design language: `#e8e6df` linen background, `#2a2c30` text, TAN Astoria typography, rounded message bubbles, action cards with interactive redirect buttons.
  - History sidebar with conversation previews and "New Chat" confirmation.
  - Quick action chips and suggested emergency/safety prompts.
  - Full keyboard accessibility and mobile drawer responsiveness.

---

### C. Dedicated Gemini-Generated Feature Imagery (`index.html`)
Replaced mismatched legacy hospital/ambulance icons on `index.html` with purpose-built, high-end editorial photography:

1. **Emergency SOS** &rarr; [`images/sos-card.jpg`](file:///c:/Users/adity/Desktop/Res-Q-Rush-main/images/sos-card.jpg)
   - *Visual*: Confident Indian woman holding an illuminated SOS safety smartphone in evening city lighting.
2. **SafeMap (Intelligent Safe Navigation)** &rarr; [`images/safemap-card.jpg`](file:///c:/Users/adity/Desktop/Res-Q-Rush-main/images/safemap-card.jpg)
   - *Visual*: Indian woman navigating well-lit Delhi streets at night with a live route map.
3. **SAHARA Smart Wearable** &rarr; [`images/wearable-card.jpg`](file:///c:/Users/adity/Desktop/Res-Q-Rush-main/images/wearable-card.jpg)
   - *Visual*: Macro product photography of a modern safety smartwatch displaying heart rate and telemetry on an Indian woman's wrist.
4. **Safety Assistant Concierge** &rarr; [`images/chatbot-card.jpg`](file:///c:/Users/adity/Desktop/Res-Q-Rush-main/images/chatbot-card.jpg)
   - *Visual*: Modern Indian woman comfortably speaking with an intuitive voice safety assistant.
5. **MMA & Safety Workshops** &rarr; [`images/mma-card.jpg`](file:///c:/Users/adity/Desktop/Res-Q-Rush-main/images/mma-card.jpg)
   - *Visual*: Adult Indian woman practicing a practical self-defense stance in a sunlit training studio.
6. **Volunteer Safety Network** &rarr; [`images/volunteer-card.jpg`](file:///c:/Users/adity/Desktop/Res-Q-Rush-main/images/volunteer-card.jpg)
   - *Visual*: Indian woman community safety volunteer warmly supporting another woman in an urban neighborhood.

---

## 2. Future Roadmap & Enhancements

1. **Voice Distress Keyword Hotword Detection**:
   - Background passive trigger for discreet SOS activation using browser audio stream.
2. **Offline Vector / Fuzzy Rule Database Sync**:
   - Sync community safety alerts and safe hub locations to offline IndexedDB.
3. **Wearable Telemetry Live Integration**:
   - Direct Bluetooth Web API handshake between `wearable.html` and `chatbot.html` for real-time stress escalation.
4. **SafeJourney Live Geofence Monitoring**:
   - Continuous automated path deviation checks with automated SOS escalation triggers.
