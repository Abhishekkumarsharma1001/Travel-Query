import React, { useState } from 'react';
import axios from 'axios';
import './translate.css'; // Import the CSS file

const Translate = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLang, setTargetLang] = useState('hi'); // Default language: Hindi

  const handleTranslation = async () => {
    const url = 'https://api.mymemory.translated.net/get';

    try {
      const response = await axios.get(url, {
        params: {
          q: text,
          langpair: `en|${targetLang}`,
        },
      });
      setTranslatedText(response.data.responseData.translatedText);
    } catch (error) {
      console.error('Translation Error:', error);
    }
  };

  const speakTranslatedText = () => {
    if (translatedText) {
      window.responsiveVoice.speak(translatedText, "Arabic Female"); // Specify the voice based on targetLang if needed
    }
  };

  return (
    <div className="translate-container">
      <h2>Language Translation</h2>
      
      <textarea
        rows="3"
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div>
        <label>Select Language: </label>
        <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
          <option value="pa">Punjabi</option>
          <option value="ta">Tamil</option>
          <option value="bn">Bengali</option>
          <option value="te">Telugu</option>
          <option value="gu">Gujarati</option>
          <option value="kn">Kannada</option>
          <option value="ml">Malayalam</option>
          <option value="ur">Urdu</option>
        </select>
      </div>
<br />
      <button onClick={handleTranslation}>Translate</button>

      {translatedText && (
        <div className="translated-text-container">
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
          <br />
          <button onClick={speakTranslatedText}>Speak</button> {/* Button to speak the translated text */}
        </div>
      )}
    </div>
  );
};

export default Translate;
