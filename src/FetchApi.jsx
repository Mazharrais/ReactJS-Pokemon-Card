

import React, { useEffect, useState } from 'react'

const FetchApi = () => {


  const [apiData, setApiData] = useState([]);

     useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((error)=> console.log('error', error))
     },[])
    

    
    
    

  return (
    <>
     <ul>
        Data :
        {
            apiData.map((currData)=>{
                return <li key={currData.id}>
                  {currData.title}
                </li>
            })
        }
     </ul>
    </>
  )
}

export default FetchApi;
