import { useState, useEffect } from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [initData, setInitData] = useState<string | null>(null)
  const [userText, setUserText] = useState('')
  const [messages, setMessages] = useState<Array<{ text: string, time: string }>>([])

  useEffect(() => {
    setInitData(WebApp.initData);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newMessage = {
      text: userText,
      time: new Date().toLocaleTimeString()
    }
    setMessages(prevMessages => [newMessage, ...prevMessages]);
    setUserText('');
  }

  return (
    <>
      {/* Display initData */}
      <div className="card" style={{textAlign: 'left'}}>
        <p>Init Data: {initData}</p>
      </div>
      {/* Display messages */}
      <div className="card">
        {messages.map((message, index) => (
          <p key={index}>{message.time}: {message.text}</p>
        ))}
      </div>
      {/* Input form */}
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={userText} 
            onChange={(e) => setUserText(e.target.value)} 
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  )
}

export default App
