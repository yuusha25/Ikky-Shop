
import './App.css';
import ContentInput from './components/contentInput';
import Header from './components/headernya';
import './style/landingPage.css';

function App() {
  return (
    <div>
      <div className='myBGHeader'>
        <Header />
      </div>
      <div className='myBGContent d-flex justify-content-center align-items-center'>
        <ContentInput />
      </div>

    </div>
  );
}

export default App;
