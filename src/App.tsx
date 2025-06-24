import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'
 
import Landing from './pages/Landing';
 
import ChatPage from './pages/Chat';
import { ThemeProvider } from './context/ThemeProvider';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
    <ThemeProvider>
          <Router>
       
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
    </>
  )
}

export default App
