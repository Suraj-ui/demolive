import React from 'react';


function sum(a,b){
   let sum = a+b;
   return sum;
}

function sub(a,b){
    let sub = a-b;
    return sub;
 }

 function div(a,b){
    let div = a/b;
    return div;
 }

 function multi(a,b){
    let multi = a*b;
    return multi;
 }

export default sum;

export {sub,div,multi};