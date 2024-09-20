import { useState, useEffect } from 'react'
import twaLogo from './assets/tapps.png'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [username, setUsername] = useState<string | null>(null)
  const [userText, setUserText] = useState('')
  const [messages, setMessages] = useState<Array<{ text: string, time: string }>>([])

  useEffect(() => {
    if (WebApp.initData) {
      const params = new URLSearchParams(WebApp.initData);
      const user = JSON.parse(decodeURIComponent(params.get('user') || ''));
      if (user && user.username) {
        setUsername(user.username);
      }
    }
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
      {/* Display username */}
      <div className="card" style={{textAlign: 'left'}}>
        <img src={twaLogo} className="logo" alt="TWA logo" />
        <p>Username: {username}</p>
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
      {/* Display messages */}
      <div className="card" style={{textAlign: 'left'}}>
        {messages.map((message, index) => (
          <p key={index}>{message.time}: {message.text}</p>
        ))}
      </div>
    </>
  )
}

export default App
