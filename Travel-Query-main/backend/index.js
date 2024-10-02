import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 5000; // Set your desired port number

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Handler for trip recommendations
app.post('/api/index', async (req, res) => {
  const { start, destination } = req.body;

  try {
    const recommendations = await getTravelRecommendations(start, destination);
    res.status(200).json({ recommendations });
  } catch (error) {
    console.error('Error generating recommendations:', error);
    res.status(500).json({ error: 'Error generating travel recommendations.' });
  }
});

// Function to get travel recommendations from the Gemini API
const getTravelRecommendations = async (start, destination) => {
  const geminiApiKey = 'AIzaSyBRWkvbENdqSd_kFstx2uUhxlCFcIGOMkc'; // Directly use your Gemini API key
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`;
  const prompt = `I want to travel from ${start} to ${destination}. Give the small description of the ${destination} Please suggest the best mode of transport, distance, Top 5 hotels to stay and top 10 places to visit like temple, historical places, tourist place etc and other important things. Also, include any travel tips.`;

  const data = {
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(endpoint, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const recommendation = response.data.candidates[0].content.parts[0].text;
    return recommendation;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw new Error('Could not generate travel recommendations.');
  }
};

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
