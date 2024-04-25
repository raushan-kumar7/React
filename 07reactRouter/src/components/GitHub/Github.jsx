import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https:api.github.com/users/raushan-kumar7")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData()

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <h1 className="text-center text-white">{data.name}</h1>
      <img src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https:api.github.com/users/raushan-kumar7")
  return response.json()
}