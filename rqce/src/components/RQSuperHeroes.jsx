import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const RQSuperHeroes = () => {
  const { isLoading, data, error, isError,isFetching,refetch } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superheroes")
      
    
  },{
    enabled:false
  });
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  console.log("isFetching:: "+isFetching);
  return (
    <div>
      <h1> RQSuperHeroes </h1>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero?.name}</div>;
      })}

      <button onClick={refetch}>Heroes</button>
    </div>
  );
};

export default RQSuperHeroes;
