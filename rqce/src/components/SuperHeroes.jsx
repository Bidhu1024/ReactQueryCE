import React,{useState,useEffect} from 'react';
import axios from 'axios';
const SuperHeroes = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [data,setData] = useState([])

useEffect(()=>{
axios.get('http://localhost:4000/superheroes').then((res)=>{
    console.log(res)
    setData(res.data)
    setIsLoading(false)
})
},[])

if(isLoading){
    return <h2>Loading</h2>
}

  return (
    <div>
    <h2> SuperHeroes</h2>
    {data.map((hero)=>{
        return <div key={hero.name}>{hero.name}</div>
    })} 
    
    </div>

  )
}

export default SuperHeroes