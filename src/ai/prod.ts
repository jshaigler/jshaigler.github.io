// This file is machine-generated - do not edit!

import {configureGenkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Import flows to ensure they are registered.
import '@/ai/flows/website-content-assistant';

configureGenkit({
  plugins: [googleAI()],
  logLevel: 'warn', // Change to 'info' or 'debug' for more logs in prod
  enableTracingAndMetrics: true, // Consider disabling if not needed for performance
});

// Note: You must ensure that your API key is secure. Use a secret manager,
//       environment variable, or similar mechanism. Ensure GOOGLE_API_KEY
//       is properly configured in your production environment.
