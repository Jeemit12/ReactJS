import { createRoot } from 'react-dom/client';
import './Practice/index.css';
import Header from './Practice/Header.jsx';
import Main from './Practice/main2.jsx';
import Footer from './Practice/footer.jsx';



createRoot(document.getElementById('root')).render(
  <>
  <div className="index">
    <Header />
    <Main />
    <Footer />
  </div>
    
  </>
  
);