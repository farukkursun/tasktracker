import { useState } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";
import data from "../helper/Data";
const Home = () => {
  const [veri, setVeri] = useState(data);
  const [buton, setButon] = useState({
    renk: "red",
    yazi: "CLOSE ADD TASK BAR",
  });

  const butonClick = () => {
    if (buton.renk === "red") {
      setButon({ renk: "purple", yazi: "show add task bar" });
    } else {
      setButon({
        renk: "red",
        yazi: "CLOSE ADD TASK BAR",
      });
    }
  };

  return (
<div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button
          className="btn"
          style={{ backgroundColor: buton.renk }}
          onClick={butonClick}
        >
          {buton.yazi}
        </button>
      </header>

      {buton.renk === "red" && 
      
      (
      <GorevEkle veri={veri} setVeri={setVeri} />)}
      <GorevleriGoster veri={veri} setVeri={setVeri} />
    </div>
  );
};

export default Home;
