import { useState } from "react";


function App() {
  const [ inputText,setinputText]=useState("");
  const[suggestedText,setsuggestedText]=useState("");
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };
 const handleInputChange = (e) => {
    const text = e.target.value;
    setinputText(text);

    // Implement a basic spelling check and correction
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

  

    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setsuggestedText( firstCorrection || "" );
  };
  return (

    <div className="App">
       <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputText}
          onChange={(e)=>handleInputChange(e)}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
