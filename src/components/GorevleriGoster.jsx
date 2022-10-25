import React from "react";
import { FaCrosshairs } from "react-icons/fa";

const GorevleriGoster = ({ veri, setVeri }) => {
  // console.log(veri);
  const veriSil=(id)=>{
    setVeri(veri.filter((element)=>element.id !==id))

  }
  console.log(veri);
  return (
    <div>
      {veri.map((a) => {
        return (
          <div
            onClick={() =>
              setVeri(
                veri.map((i) =>
                  i.id === a.id ? { ...i, bittiMi: !i.bittiMi } : i
                )
              )
            }
            className={a.bittiMi ? "trueStil" : "falseStil"}
            key={a.id}
          >
            <h3>
              {a.text}
              <i  className="cross">
                <FaCrosshairs onDoubleClick={()=>veriSil(a.id)} />
              </i>
            </h3>
            <p>{a.day}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
