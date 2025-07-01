import React from 'react'

const Experience = (
 {
  year,
  postName,
  postDescription,
  companyName,
  timeDuration,
  siteName,
  siteURL,
  targetBlank
 }

) => {
 return (
  <>
   {(year || postName || postDescription || companyName || timeDuration || siteURL) &&
    <div className="relative overflow-hidden before:absolute before:-top-5 before:-right-5 before:size-20 before:bg-primary/40 before:blur-2xl before:rounded-full group h-full bg-white/10 p-5 rounded-lg border border-primary/20 hover:bg-black/10 transition-all duration-300">
     {year &&
      <div className="text-primary [&_h3]:mb-0">
       <h2 className='h4'>{year}</h2>
      </div>
     }
     {(postName || companyName || postDescription) &&
      <div div className="pt-2 [&_h3]:capitalize mb-3 [&_p]:mb-0">
       <div className="mb-8">
        <h3>{postName}</h3>
        <p>{postDescription}</p>
       </div>
       <div className="flex gap-2">
        <p>{companyName}</p>
        <a href={siteURL} target={targetBlank} className='stretched-link group-hover:text-primary'>{siteName}</a>
       </div>
      </div>
     }

     {timeDuration &&
      <div className="mt-1">
       <p>{timeDuration}</p>
      </div>
     }
    </div >
   }
  </>
 )
}

export default Experience;
