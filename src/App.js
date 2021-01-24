import {Provider} from 'react-redux'
import store from './redux/store'
import Header from './components/header/Header'
import ListApartmentsContainer from './components/list_ apartments/ListApartmentsContainer'
import './sass/general.sass'
import './css/fontawesome.min.css'
import './css/solid.min.css'

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Header/>
        <ListApartmentsContainer/>
      </div>
    </Provider>
  );
}

export default App;
