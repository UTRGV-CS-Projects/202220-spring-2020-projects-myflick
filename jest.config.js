// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
    preset: "jest-expo",
    // collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
    // testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}", "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"],
    transformIgnorePatterns: [
        "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@ptomasroos/.*|@react-native-async-storage/.*)"
      ]
  };
  
  module.exports = config;
  
  // Or async function
//   module.exports = async () => {
//     return {
//       verbose: true,
//     };
//   };