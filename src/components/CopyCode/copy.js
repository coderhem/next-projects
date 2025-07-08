'use client';
import React, { useState } from 'react'


const CopyCode = ({ code, buttonClassName }) => {
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
    className={`group text-[var(--orange)] hover:text-[var(--dark-orange)] transition-all duration-300 cursor-pointer ${buttonClassName}`}
   >
    <i className={`fa ${copied ? 'fa-check-circle-o text-green-500' : 'fa-clipboard'} pr-[6px]`}
     aria-hidden="true"
    ></i>
    <span className={`${copied ? 'text-green-500' : 'text-[var(--orange)] group-hover:text-[var(--dark-orange)] transition-all duration-300'}`}>
     {copied ? 'Copied!' : 'Copy'}
    </span>
   </button>
   <code dangerouslySetInnerHTML={{ __html: code }} className='hidden opacity-0' />
  </div>
 )
}

export default CopyCode;
