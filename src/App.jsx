import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import LogInSingnUp from './component/LogInSingnUp';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './component/Profile';
import UpdateTime from './component/UpdateTime';
import Compare from './component/Compare';
import DailyStat from './component/DailyStat';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LogInSingnUp/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/updateTime" element={<UpdateTime/>}/>
          <Route path="/compare" element={<Compare/>}/>
          <Route path="/dailyStat" element={<DailyStat/>}/>

        </Routes>
        <ToastContainer/> 
    </div>
  );
}

export default App;
