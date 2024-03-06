

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen'
import SignUpScreen from './pages/SignUpScreen'
import { QueryClient, QueryClientProvider } from 'react-query'
import HomseScreen from './pages/HomseScreen'
import PrivateLayout from './Header/PrivateLayout'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
         staleTime:0
      },
    },
  })

  return (
  
   <QueryClientProvider client={queryClient}>
   <Provider store={store}>
   <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<PrivateLayout/>} >
    <Route  index element={<HomseScreen/>} /> </Route>
      <Route path='/login' element={<LoginScreen/>} />
      <Route path='/signup' element={<SignUpScreen/>} />
    
    </Routes>
    </BrowserRouter>
   </Provider>
   </QueryClientProvider>
 
  )
}

export default App
