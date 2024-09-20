import { useState, useEffect } from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [initData, setInitData] = useState<string | null>(null)
  const [userText, setUserText] = useState('')

  useEffect(() => {
    setInitData(WebApp.initData);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setInitData(userText);
  }

  return (
    <>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={userText} 
            onChange={(e) => setUserText(e.target.value)} 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* Display initData */}
      <div className="card">
        <p>Init Data: {initData}</p>
      </div>
    </>
  )
}

export default App
