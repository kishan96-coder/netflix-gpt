import { GoogleGenerativeAI } from '@google/generative-ai';

export const genAI = new GoogleGenerativeAI(
  process.env.REACT_APP_GOOGLE_API_KEY
);