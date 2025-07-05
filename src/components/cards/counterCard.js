'use client'
import React, { useEffect, useState } from 'react'

const CounterCard = (
 {
  targetValue,
  targetTitle
 }
) => {
 const [counter, setCounter] = useState(0);
 let speed;
 if (targetValue > 200) {
  speed = 20;
 } else if (targetValue > 100) {
  speed = 100;
 } else if (targetValue > 30) {
  speed = 400;
 } else {
  speed = 1000;
 }


 useEffect(() => {
  const timeout = setTimeout(() => {
   if (counter < targetValue) {
    setCounter(counter + 1)
   }
  }, speed);
  return () => clearTimeout(timeout);
 }, [counter, targetValue, speed]);

 return (
  <>
   {targetTitle &&
    <div className="bg-black text-center h-full p-5 sm:max-w-2xs rounded text-primary [&_p]:text-white/80 min-h-36">
     <h2>{counter}</h2>
     <p>{targetTitle}</p>
    </div>
   }
  </>
 )
}

export default CounterCard
