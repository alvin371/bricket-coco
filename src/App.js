import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Landing from './Frontend/indexContent'
import Product from './Frontend/productContent'
import Faq from './Frontend/faqProduct'
import About from './Frontend/aboutProduct'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "./Backend/views/Dashboard.js";
import Login from "./Backend/views/Login.js";
import ProductList from "./Backend/views/Product.js";
import ProductHighlights from "./Backend/views/ProductHighlights.js";
import AskedQuestion from "./Backend/views/Faq.js";
import QuestionList from "./Backend/views/QuestionList.js";
import HomePage from "./Backend/views/HomePage.js";
import axios from 'axios';


axios.defaults.withCredentials = true
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token')
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config
})

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/product" exact component={Product} />
        <Route path="/faq" exact component={Faq} />
        <Route path="/about" exact component={About} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/product-list" component={ProductList} />
        <Route exact path="/product-highlights" component={ProductHighlights} />
        <Route exact path="/home-page-information" component={HomePage} />
        <Route exact path="/question-list" component={QuestionList} />
        <Route exact path="/faq-be" component={AskedQuestion} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
