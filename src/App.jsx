
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'


const countriesPromise = async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data;
}


function App() {
 const countriesFetch = countriesPromise();

  return (
    <>
     

      <Suspense fallback={<h1>Data is Coming..</h1>}> <Countries countriesFetch={countriesFetch}></Countries>
      </Suspense>
      
      
    </>
  )
}

export default App
