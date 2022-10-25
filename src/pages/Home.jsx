import { useState } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";
import data from "../helper/Data";
const Home = () => {
  const [veri, setVeri] = useState(data);
  return (
    <div >
      <GorevEkle veri={veri} setVeri={setVeri}  />
      <GorevleriGoster veri={veri} setVeri={setVeri} />
    </div>
  );
};

export default Home;
