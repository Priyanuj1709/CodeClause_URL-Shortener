import React, {useState} from 'react';
import './App.css';
import axios from 'axios';



function App() {

  const[shortUrl, setShortUrl] = useState('');
  const[result, setResult] = useState('');
  const [loader, setLoader] = useState(false);
  
  
    const fetchData = async () => {
    try{
      setLoader(true);
      const response = await axios.post('https://api.shrtco.de/v2/shorten?url=' + shortUrl);
      setLoader(false);
      setResult(response.data.result.full_short_link);
    }catch(error){
      alert(error);
    }
  }

  const handleClick = () => {
    fetchData();
    setShortUrl("");
  }


  return (
    <div className='container'>
    <div className="App">
      <h1 className='title'>URL SHORTNER</h1>
      <div className='btn-grp'>
      <input 
      className='input'
      type="text" 
      placeholder="Enter URL" 
      value={shortUrl}
      onChange={(e) => setShortUrl(e.target.value)}
      />
      <button className="btn" onClick={handleClick}>SHORTEN</button>
      </div>
     {loader === true ? <h3 className='loader'>Loading...</h3> : <h3 className='result'>{result}</h3>}
    
    </div>
    </div>
  );
}

export default App;
