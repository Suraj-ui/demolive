import React from 'react';
import sum from './cal';
import {sub,div,multi} from './cal';


function App() {
return(
  <>
  <h1>The sum of two no is : {sum(10,5)}</h1>
  <h1>The substraction of two no is : {sub(10,5)}</h1>
  <h1>The division of two no is : {div(10,5)}</h1>
  <h1>The multiplication of two no is : {multi(10,5)}</h1>
  </>
);
}

export default App;
