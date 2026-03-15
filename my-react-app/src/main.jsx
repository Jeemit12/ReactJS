import { createRoot } from 'react-dom/client';
import Header from './Practice2/Header.jsx';
import Body from './Practice2/Body.jsx'
import './Practice2/main.css'



createRoot(document.getElementById('root')).render(
  <>
  <div className="index">
    <Header />
    <Body />
  </div>
    
  </>
  
);