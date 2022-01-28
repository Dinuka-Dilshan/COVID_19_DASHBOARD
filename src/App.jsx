import './App.css';
import Cards from './UI/Cards';
import Header from './UI/Header';
import useFetch from '../src/Hooks/useFetch';
import ReactDOM from "react-dom";
import LoadingSpinner from './UI/LoadingSpinner';


function App() {

  const {data,error,loading} = useFetch('https://www.hpb.health.gov.lk/api/get-current-statistical');
  
  const time = <div style={{padding:'0.5rem',marginLeft:'1.2rem',marginTop:'1.5rem',fontWeight:'bold',fontSize:'0.9rem',color:'gray'}}>UPDATED AT - {data && !error && !loading && data.time}<div>https://www.hpb.health.gov.lk/</div></div>
  const footerPortal = ReactDOM.createPortal(time,document.getElementById('footer'));
 

  return (
    <div>
    {loading && <LoadingSpinner/>}
      <Header url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/800px-Flag_of_Sri_Lanka.svg.png">
      COVID-19 DASHBOARD 
      </Header>
      {data && !error && !loading && <Cards data={data.data}/>}
      {footerPortal}
      
    </div>
  );
}

export default App;
