import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Routes>
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Dialogs' element={<Dialogs />} />
      </Routes>
    </div>
  );
}

export default App;
