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
// LET OP: verander dit naar iets dat alleen jij weet!
// Gebruik een ANDER wachtwoord dan voor wksimps.nl
export const ADMIN_PASSWORD = "HollPi2509!";

// Globale deadline voor voorspellingen
// null = geen globale deadline, alleen per-wedstrijd 1 uur voor aftrap
export const PREDICTION_DEADLINE = null;
