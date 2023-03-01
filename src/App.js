import './App.css';
import { lazy,Suspense, useContext, useReducer } from 'react';
import { Route,Routes } from 'react-router-dom';
const Inside=  lazy(()=>import('./Pages/Inside'));
const Login=lazy(()=> import('./Pages/Login'))
const Header=lazy(()=> import('./Components/Header'))
const Home=lazy(()=> import('./Pages/Home'))
function App() {

  return (


<Suspense fallback='loading' >
            <Header/>
      <Routes>
        <Route element={<Login/>} path="/login"  />
        
          state.user ? <Route element={<Home/>} path="/"  /> 
       
         <Route element={<Inside/>} path="/inside/:id"  /> 
        
        
        
          
        
      </Routes>
    </Suspense>


  );
}

export default App;
