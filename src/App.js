import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Header />,
    <Nav />,
    <Profile />,
    <Dialogs />
  );
}

export default App;
