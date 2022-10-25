import React, { useState } from "react";

// import data from "../helper/Data";

const GorevEkle = ({ veri, setVeri }) => {
  const [gorev, setGorev] = useState("");
  const [tarih, setTarih] = useState("");
  // const [veri, setVeri] = useState(data);
  const formGönder = (e) => {
    e.preventDefault();

    const id = veri.length + 1;
    setVeri([{ id, text: gorev, day: tarih, bittiMi: false }, ...veri]);
  };
  console.log(veri);
  return (
    <div>
      <form className="" onSubmit={formGönder}>
        <div className="">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="task"
            onInput={(e) => setGorev(e.target.value)}
            placeholder="Add Task"
          />
          <label htmlFor="time" className="form-label">
            Day & Time
          </label>
          <input
            type="date"
            className="form-control"
            id="time"
            onChange={(e) => setTarih(e.target.value)}
            
          />
        </div>
        <button type="submit" className="btn-submit">
          Save Task
        </button>
      </form>
    </div>
  );
};

export default GorevEkle;
