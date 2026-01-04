# Korg ES2 Sample Converter (Web)

A browser-based tool to convert WAV or MP3 audio files into a  
**Korg Electribe Sampler (ES2) compatible WAV format**.

👉 Runs **entirely in your browser**  
👉 **No servers**, **no uploads**, **no tracking**

---

## 🎛️ Features

- Converts **MP3 & WAV → WAV**
- Output format:
  - 48,000 Hz sample rate
  - 16-bit PCM
  - Mono (ES2-friendly)
- Optimized for **Korg Electribe Sampler ES2**
- Built with **HTML / CSS / JavaScript**
- Uses the **Web Audio API**
- Works offline after initial load

---

## 🚀 Live Demo
👉 https://korg-es-2-sample-converter-5b7vifutk-xlitos-projects.vercel.app/

---

## 🧠 Technical Overview

This tool relies exclusively on:
- the browser’s **Web Audio API**
- client-side resampling and WAV encoding

❌ No FFmpeg  
❌ No Node.js  
❌ No backend  
❌ No cloud processing  

All audio data stays **entirely in your local browser memory**.

---

## 🔒 Privacy & Data Protection

### Short Version
**This tool does not collect, store, or transmit any data.**

### Details
- ❌ No file uploads
- ❌ No cookies
- ❌ No tracking
- ❌ No analytics
- ❌ No external APIs
- ❌ No server-side processing

All audio conversion happens **locally on your device**.

### GDPR / DSGVO
Since no personal data is processed:
- No consent is required
- No data controller or processor relationship exists
- This tool does **not** fall under GDPR data processing obligations

If you self-host this project, you are **not processing user data** in the legal sense.

---

## ⚠️ Browser Compatibility

Tested on:
- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

Notes:
- Large files require sufficient system memory
- Very long samples may take longer to process

---

## 📂 Using Samples with Korg ES2

1. Convert your sample using the web tool
2. Download the WAV file
3. Copy it to your SD card:
4. Import it on the Electribe ES2
