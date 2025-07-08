'use client';
import React, { useState } from 'react'


const CopyCode = ({code}) => {
 const [copied, setCopied] = useState();
 const handleCopy = async () => {
  try {
   await navigator.clipboard.writeText(code);
   setCopied(true);
   setTimeout(() => setCopied(false), 3000);
  } catch (err) {
   console.error('Failed to copy!', err);
  }
 };
 return (
  <div>
   <button
    onClick={handleCopy}
    className="text-[var(--orange)] hover:text-[var(--dark-orange)] transition-all duration-300 cursor-pointer"
   >
    <i className="fa fa-clipboard pr-[6px]" aria-hidden="true"></i>
    {copied ? 'Copied!' : 'Copy Code'}
   </button>
   <code className='hidden'>{code}</code>
  </div>
 )
}

export default CopyCode;
