import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Frontend/indexContent'
import Product from './Frontend/productContent'
import Faq from './Frontend/faqProduct'
import About from './Frontend/aboutProduct'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/product" exact component={Product} />
        <Route path="/faq" exact component={Faq} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
