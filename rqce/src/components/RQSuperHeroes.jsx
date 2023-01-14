import React from "react";
import { useQuery } from "react-query";
import {Link} from 'react-router-dom';
import axios from "axios";

const RQSuperHeroes = () => {
  const onSuccess = () =>{
    console.log('data after successful fetch')
  }
  const onError = () =>{
    console.log('data after error ');
  }
  const { isLoading, data, error, isError,refetch } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superheroes")
      
    
  },{
    onSuccess,
    onError
  });
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading) {
    return <h2>Loading....</h2>;
  }


  return (
    <div>
      <h1> RQSuperHeroes </h1>
      {data?.data.map((hero) => {
        return <div key={hero.id}>
        <Link to={`/rq-super-heroes/${hero.id}`}>{hero?.name}</Link></div>;
      })}

      <button onClick={refetch}>Heroes</button>
    </div>
  );
};

export default RQSuperHeroes;
