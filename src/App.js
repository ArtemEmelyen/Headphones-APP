import './App.css';
import MainBlock from './Components/MainBlock/MainBlock';
import Collection from './Components/Collection/Collection';
import Feature from  './Components/Feature/Feature';
import Product from './Components/Product/Product';
import Boxing from './Components/Boxing/Boxing';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className = 'main'>
      <MainBlock/>
      <Collection/>
      <Feature/>
      <Product/>
      <Boxing/>
      <Footer/>
    </div>
  );
}

export default App;
