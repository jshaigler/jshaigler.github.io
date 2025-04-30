
// This file is machine-generated - do not edit!

import {configureGenkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Import flows to ensure they are registered.
// Removed import '@/ai/flows/website-content-assistant';

configureGenkit({
  plugins: [googleAI()],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

// Note: You must ensure that your API key is secure. Use a secret manager,
//       environment variable, or similar mechanism. Add the GOOGLE_API_KEY
//       environment variable with your key.
