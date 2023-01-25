import moment from "moment";
import React, { useState } from "react";

const GorevEkle = ({ veri, setVeri }) => {
  const [gorev, setGorev] = useState("");
  const [tarih, setTarih] = useState("");
  const ytarih = moment(tarih).format('MMM Do, h:mm a')
  const formGönder = (e) => {
    e.preventDefault();
    if(gorev && tarih){setVeri([
      { id: veri.length + 1, text: gorev, day: ytarih, bittiMi: false },
      ...veri,
    ])}else{
      alert('görev ve tarih girmen gerekiyor')
    }
    
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GorevEkle;
