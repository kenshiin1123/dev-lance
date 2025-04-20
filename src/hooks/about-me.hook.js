import { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import paragraphs from "../data/about-me";

const useAboutMe = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { voices } = useSpeechSynthesis();
  const text = paragraphs.join(" ");

  // Wait until voices are loaded before selecting Google Voice
  const [googleVoice, setGoogleVoice] = useState(null);

  useEffect(() => {
    const voice = voices.find((v) => v.name === "Google UK English Male");
    if (voice) {
      setGoogleVoice(voice);
    }
  }, [voices]);

  const handleButtonClick = () => {
    if (!googleVoice || !text || isSpeaking) return;

    setIsSpeaking(true);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = googleVoice;

    utterance.onend = () => {
      setIsSpeaking(false); // Set to false when speech ends
    };

    utterance.onerror = (err) => {
      console.warn("Speech synthesis error:", err.error);

      // Treat "interrupted" as normal cancellation
      if (err.error === "interrupted") {
        // console.log("Speech was interrupted by user or another call.");
      }

      setIsSpeaking(false);
    };

    speechSynthesis.speak(utterance);
  };

  const handleCancelButtonClick = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false); // Make sure state syncs with cancel
    }
  };
  return { isSpeaking, handleButtonClick, handleCancelButtonClick };
};

export default useAboutMe;
