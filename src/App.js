import { Redirect, Route, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  // stranky /products a /products/p1 sa nacitaju naraz, pretoze Route je aktivny
  // pre obe, lebo vyhodnoducuje, ci pasuje path s linkom - porovnava zaciatky
  // Switch sposobi, ze skoci hladanie pri prvom Route, ktory pasuje,
  // cize staci posunut viac specifickejsi dopredu...alebo pouzit parameter exact!
  // pozor, zvlast dolezity je exact pri path='/'...inac s tym redirectom vznikne nekonecna slucka!!!
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
