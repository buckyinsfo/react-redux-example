import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import PayloadCakeContainer from './components/PayloadCakeContainer'
import HooksPayloadCakeContainer from './components/HooksPayloadCakeContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <PayloadCakeContainer />
        <HooksPayloadCakeContainer /> */}
      </div>
    </Provider>
  )
}

export default App;
