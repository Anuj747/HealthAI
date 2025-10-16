import React, { useState } from 'react';



export default function Chatbox(){
  const [open, setOpen] = useState(false);
  const [spec, setSpec] = useState('MBBS');
  const [msgs, setMsgs] = useState([]);
  const [text, setText] = useState('');

  async function send() {
  if (!text.trim()) return;
  const user = text.trim();
  setMsgs(m => [...m, { who: 'user', text: user }]);
  setText('');

  try {
    const response = await fetch('http://localhost:4000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        speciality: spec,
        question: user
      })
    });
    const data = await response.json();
    const reply = data.answer || 'Sorry, no response from the server.';
    setMsgs(m => [...m, { who: 'bot', text: reply }]);
  } catch (err) {
    console.error('Error:', err);
    setMsgs(m => [...m, { who: 'bot', text: 'Server error. Please try again.' }]);
  }
}


  return (
    <>
      <div className="chat-launcher">
        <div className="chat-bubble" onClick={()=> setOpen(o=>!o)}>AI</div>
      </div>

      {open && (
        <div className="chat-panel" role="dialog" aria-label="HealthAI chat">
          <div className="header">
            <div style={{display:'flex', gap:8, alignItems:'center'}}>
              <div style={{width:36,height:36,borderRadius:8,background:'linear-gradient(90deg,#56a1ff,#78dcc8)',display:'flex',alignItems:'center',justifyContent:'center',color:'#022',fontWeight:800}}>H</div>
              <div>
                <div style={{fontWeight:700}}>HealthAI Assistant</div>
                <div style={{fontSize:12, color:'var(--muted)'}}>Choose speciality and ask</div>
              </div>
            </div>
            <div style={{display:'flex', gap:8, alignItems:'center'}}>
              <select value={spec} onChange={(e)=> setSpec(e.target.value)} style={{background:'transparent', border:'1px solid rgba(255,255,255,0.04)', color:'inherit', padding:6, borderRadius:8}}>
                <option value="MBBS">MBBS</option>
                <option value="BAMS">BAMS</option>
                <option value="BDS">BDS</option>
              </select>
              <button onClick={()=> setOpen(false)} style={{background:'transparent', border:'none', color:'var(--muted)'}}>✕</button>
            </div>
          </div>

          <div className="messages" role="log" aria-live="polite">
            {msgs.length === 0 && <div style={{color:'var(--muted)'}}>Ask something like "I have a toothache since morning".</div>}
            {msgs.map((m,i)=> (
              <div key={i} className={'msg ' + (m.who==='user' ? 'user' : 'bot') }>{m.text}</div>
            ))}
          </div>

          <div className="chat-input">
            <textarea value={text} onChange={(e)=> setText(e.target.value)} placeholder="Describe your symptoms..." />
            <button onClick={send}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
