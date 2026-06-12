// ================================================================
// Configuratie voor weekendjeweg.fun WK Poul
// ================================================================

// === FIREBASE CONFIGURATIE ===
// Eigen Firebase project voor weekendjeweg.fun
// (apart van wksimps.nl, dus aparte voorspellingen)
export const firebaseConfig = {
  apiKey: "AIzaSyA8l2BsXhloftXKTB3KGGWJYkEtB8Qiq94",
  authDomain: "weekendjeweg-a415f.firebaseapp.com",
  projectId: "weekendjeweg-a415f",
  storageBucket: "weekendjeweg-a415f.firebasestorage.app",
  messagingSenderId: "929555739701",
  appId: "1:929555739701:web:2f962d0d7b0b1fd729ad7c"
};

// === POUL INSTELLINGEN ===

// Naam van de poul (verschijnt bovenaan)
export const POOL_NAME = "Weekendje Weg WK Poul";

// Beheerderwachtwoord
export const ADMIN_PASSWORD = "HollPi2509!";

// Globale deadline voor voorspellingen
// null = geen globale deadline, alleen per-wedstrijd 1 uur voor aftrap
export const PREDICTION_DEADLINE = null;

// === AFTELTELLER ===
// Datum van het weekendje weg (verschijnt als aftelteller in de header)
// Format: ISO datetime "YYYY-MM-DDTHH:MM:SS"
// null = geen aftelteller tonen
export const COUNTDOWN_DATE = "2026-11-12T12:00:00";
export const COUNTDOWN_LABEL = "Weekendje weg over";

// === API-FOOTBALL ===
// Pro plan: 7500 calls/dag, real-time elke 15 seconden
// Allowed Domains zijn ingesteld in API-Football dashboard
// Deze key wordt gedeeld met wksimps.nl
export const API_FOOTBALL_KEY = "b8f6b9f8d54d5184e3ddf38e24c02622";
