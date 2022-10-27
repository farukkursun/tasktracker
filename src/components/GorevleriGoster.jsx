import React from "react";
import { FaCrosshairs } from "react-icons/fa";

const GorevleriGoster = ({ veri, setVeri }) => {
  // console.log(veri);
  const veriSil = (id) => {
    setVeri(veri.filter((element) => element.id !== id));
  };
  // console.log(veri);
  return (
    <div>
      {veri.length !== 0 ? (
        veri.map((a) => {
          return (
            <div
              onDoubleClick={() =>
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
                <i className="cross">
                  <FaCrosshairs onClick={() => veriSil(a.id)} />
                </i>
              </h3>
              <p>{a.day}</p>
            </div>
          );
        })
      ) : (
        <h1>No Task</h1>
      )}
    </div>
  );
};

export default GorevleriGoster;
