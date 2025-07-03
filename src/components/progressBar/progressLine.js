import React, { useEffect, useState } from 'react';

const ProgressLine = ({ progress, label }) => {
 const [count, setCount] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setCount(prev => {
    if (prev < progress) {
     return prev + 1;
    } else {
     clearInterval(interval);
     return prev;
    }
   });
  }, 20);

  // Cleanup on unmount
  return () => clearInterval(interval);
 }, [progress]);

 return (
  <div className="mt-4">
   <div className="flex justify-between mb-2">
    <small className="text-white/70 text-xs font-semibold block">{label}</small>
    <div className="text-white/70 text-sm percentage">{count}%</div>
   </div>
   <div className="bg-white/20 h-5 rounded-full overflow-hidden relative lineBg">
    <div
     className="bg-primary h-full transition-all duration-700 ease-linear rounded-full"
     style={{ width: `${count}%` }} />
   </div>
  </div>
 );
};

export default ProgressLine;
