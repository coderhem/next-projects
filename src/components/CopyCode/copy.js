'use client';
import React, { useState } from 'react';

const CopyCode = ({ code, jsCode, buttonClassName }) => {
 const [copiedCode, setCopiedCode] = useState(false);
 const [copiedJs, setCopiedJs] = useState(false);

 const handleCopy = async (text, setCopiedFn) => {
  try {
   await navigator.clipboard.writeText(text);
   setCopiedFn(true);
   setTimeout(() => setCopiedFn(false), 3000);
  } catch (err) {
   console.error('Failed to copy!', err);
  }
 };

 return (
  <div>
   <div className="flex gap-3">
    <button
     onClick={() => handleCopy(code, setCopiedCode)}
     className={`group text-[var(--orange)] hover:text-[var(--dark-orange)] transition-all duration-300 cursor-pointer ${buttonClassName}`}
    >
     <i className={`fa ${copiedCode ? 'fa-check-circle-o text-green-500' : 'fa-clipboard'} pr-[6px]`} aria-hidden="true"></i>
     <span className={`${copiedCode ? 'text-green-500' : 'text-[var(--orange)] group-hover:text-[var(--dark-orange)] transition-all duration-300'}`}>
      {copiedCode ? 'Copied!' : 'Copy'}
     </span>
    </button>

    {jsCode && (
     <button
      onClick={() => handleCopy(jsCode, setCopiedJs)}
      className={`group text-[var(--orange)] hover:text-[var(--dark-orange)] transition-all duration-300 cursor-pointer ${buttonClassName}`}
     >
      <i className={`fa ${copiedJs ? 'fa-check-circle-o text-green-500' : 'fa-clipboard'} pr-[6px]`} aria-hidden="true"></i>
      <span className={`${copiedJs ? 'text-green-500' : 'text-[var(--orange)] group-hover:text-[var(--dark-orange)] transition-all duration-300'}`}>
       {copiedJs ? 'Copied!' : 'JS'}
      </span>
     </button>
    )}

   </div>
   {jsCode && (
    <code dangerouslySetInnerHTML={{ __html: jsCode }} className='hidden opacity-0' />
   )}
  </div>
 );
};

export default CopyCode;
