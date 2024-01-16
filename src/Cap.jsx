import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
//import App from './App.jsx'
const Cap = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <>
      
      <p>Microphone:{listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript }>Reset</button>
      <p>{transcript}</p>
    </>
  )
}

export default Cap