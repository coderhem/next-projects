import React from 'react'

const Education = (
 {
  year,
  degreeName,
  campusName,
  achivedGrade
 }

) => {
 return (
  <>
   {(year || degreeName || campusName || achivedGrade) &&
    <div className="bg-white/10 p-5 rounded-lg border border-primary/20">
     {year &&
      <div className="text-primary mb-3">
       <h2>{year}</h2>
      </div>
     }
     {degreeName && campusName &&
      <div div className="pt-2 [&_h3]:capitalize [&_h3]:mb-3">
       <h3>{degreeName}</h3>
       <p>{campusName}</p>
      </div>
     }

     {achivedGrade &&
      <div className="mt-8">
       <p>{achivedGrade}</p>
      </div>
     }
    </div >
   }
  </>
 )
}

export default Education;
