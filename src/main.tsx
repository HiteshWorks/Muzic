import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Playsong from './playsong.tsx'
import {Route ,Routes, BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
 <Routes>
<Route path={'/'} element={<App />}/>
<Route path='/playSong' element={<Playsong />}/>

 </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
