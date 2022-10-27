import React, { useState } from "react";

// import data from "../helper/Data";

const GorevEkle = ({ veri, setVeri }) => {
  const [gorev, setGorev] = useState("");
  const [tarih, setTarih] = useState("");
  // const [veri, setVeri] = useState(data);
  const formGönder = (e) => {
    e.preventDefault();

    setVeri([
      { id: veri.length + 1, text: gorev, day: tarih, bittiMi: false },
      ...veri,
    ]);
    setGorev("");
    setTarih("");
  };
  console.log(veri);
  return (
    <div>
      <form onSubmit={formGönder}>
        <div className="form-control">
          <label htmlFor="text">Task</label>
          <input
            type="text"
            name="text"
            id="textk"
            value={gorev}
            onInput={(e) => setGorev(e.target.value)}
            placeholder="Add Task"
          />
        </div>
        <div className="form-control">
          <label htmlFor="time">Day & Time</label>
          <input
            type="date"
            name="time"
            id="time"
            value={tarih}
            onChange={(e) => setTarih(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-submit">
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default GorevEkle;
