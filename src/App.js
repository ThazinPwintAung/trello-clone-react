import React, {useState} from 'react';
import './App.css';
import BottomNav from './components/BottomNav';
import TopNav from './components/TopNav';
import Wrapper from './components/Wrapper';

const App = () => {

  const [isLoading, setIsLoading] = useState(false)

  return(
    <div className="App">
      <TopNav isLoading={isLoading}/>
      <BottomNav />
      <Wrapper setIsLoading={setIsLoading} />
    </div>
  )
}

export default App;
