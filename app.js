// app.js
const apiKey = process.env.WEATHER_API_KEY;

if (!apiKey) {
  // If the secret isn't configured in GitHub, the build will fail here
  console.error("CRITICAL ERROR: No API Key found!");
  process.exit(1);
}

console.log("App is running securely. API Key detected.");
