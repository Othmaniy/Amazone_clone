import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import reducer,{initialState} from './component/reducer.jsx'
import { StateProvider } from './component/StateProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
   <StateProvider initialState={initialState} reducer={reducer}>
        <App />
   </StateProvider>
  
)
