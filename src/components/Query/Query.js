import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import getQoute from "./getQouteAPI";

const Query = () => {
  const { data, isLoading } = useQuery("quote", () => getQoute());
  console.log(data);
  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  return (
    <div>
      <h2>Get Quote using React Query api</h2>
      <div>{data?.content}</div>
    </div>
  );
};

export default Query;
