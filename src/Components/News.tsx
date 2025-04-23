import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import NewsCard from "./NewsCard";

interface MyState {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  website: string;
  phone: number;
}

export default function News() {
  const [datas, setDatas] = useState<MyState[]>([]);
  const [search, setSearch] = useState("");
  
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(API_URL);
      //   console.log(req.data);
      setDatas(req.data);
    };

    fetchData();
  }, []);

  const filteredData = datas.filter((data) => {
    const searchTerm =
      data.name.toLowerCase() ||
      data.username.toLowerCase() ||
      data.email.toLowerCase();

    setSearch(searchTerm);
  });
  return (
    <>
      <Header filteredData={filteredData} search={search} setSearch={setSearch} />

      <main className="flex flex-wrap justify-center w-full p-3 items-center gap-4">
        {/* <h1 className="my-3 text-2xl ">Check on the Latest Users</h1> */}
        {filteredData.map((data) => (
          <NewsCard data={data} key={data.id} />
        ))}
      </main>
    </>
  );
}
