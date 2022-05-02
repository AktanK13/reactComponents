import Header from './components/Header/Header';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx'
import Side from './components/Side/Side.jsx'
import './App.css'

function App() {
  return (
    <div className="App container">
      <Header/>
      <Main/>
      <Side/>
      <Footer/>
    </div>
  );
}

export default App;
