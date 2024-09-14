import React, { useState } from "react";

const CountBadPrice = () => {
  const [count, setCount] = useState(0);

  const calculateTotal = () => {
    let c1T =
      (parseFloat(document.getElementById("court1_hours").value) || 0) *
      (parseFloat(document.getElementById("court1_price").value) || 0);
    let c2T =
      (parseFloat(document.getElementById("court2_hours").value) || 0) *
      (parseFloat(document.getElementById("court2_price").value) || 0);
    let c3T =
      (parseFloat(document.getElementById("court3_hours").value) || 0) *
      (parseFloat(document.getElementById("court3_price").value) || 0);

    let b1T =
      ((parseFloat(document.getElementById("barrel1_price").value) || 0) /
        (parseFloat(document.getElementById("barrel1_amount").value) || 1)) *
      (parseFloat(document.getElementById("barrel1_used").value) || 0);
    let b2T =
      ((parseFloat(document.getElementById("barrel2_price").value) || 0) /
        (parseFloat(document.getElementById("barrel2_amount").value) || 1)) *
      (parseFloat(document.getElementById("barrel2_used").value) || 0);
    // let b3T =
    //   (document.getElementById("barrel3_price").value /
    //     document.getElementById("barrel3_amount").value) *
    //   document.getElementById("barrel3_used").value;

    let perPerson =
      (c1T + c2T + c3T + b1T + b2T) /
      document.getElementById("person_play").value;

    console.log(perPerson.toFixed(2));

    setCount(perPerson.toFixed(2));
  };

  return (
    <>
      <div>
        <h3>Court 1</h3>
        <input type="number" id="court1_hours" placeholder="Enter hours" />
        <input
          type="number"
          id="court1_price"
          placeholder="Enter price per hour"
        />

        <h3>Court 2</h3>
        <input type="number" id="court2_hours" placeholder="Enter hours" />
        <input
          type="number"
          id="court2_price"
          placeholder="Enter price per hour"
        />

        <h3>Court 3</h3>
        <input type="number" id="court3_hours" placeholder="Enter hours" />
        <input
          type="number"
          id="court3_price"
          placeholder="Enter price per hour"
        />
      </div>

      <div>
        <h3>Barrel of Ball 1</h3>
        <input
          type="number"
          id="barrel1_price"
          placeholder="Enter price per barrel"
        />
        <input
          type="number"
          id="barrel1_amount"
          placeholder="Enter amount per barrel"
        />
        <input
          type="number"
          id="barrel1_used"
          placeholder="Enter amount of ball used"
        />
        <h3>Barrel of Ball 2</h3>
        <input
          type="number"
          id="barrel2_price"
          placeholder="Enter price per barrel"
        />
        <input
          type="number"
          id="barrel2_amount"
          placeholder="Enter amount per barrel"
        />
        <input
          type="number"
          id="barrel2_used"
          placeholder="Enter amount of ball used"
        />
        {/* <h3>Barrel of Ball 3</h3>
        <input
          type="number"
          id="barrel3_price"
          placeholder="Enter price per barrel"
        />
        <input
          type="number"
          id="barrel3_amount"
          placeholder="Enter amount per barrel"
        />
        <input
          type="number"
          id="barrel3_used"
          placeholder="Enter amount of ball used"
        /> */}
      </div>

      <div>
        <p>Person(s) play:</p>
        <input type="number" id="person_play" />
        <br></br>
        <br></br>
        <button onClick={calculateTotal}> Calculate</button>
        <br></br>
        Total: RM {count} / per person
      </div>
    </>
  );
};

export default CountBadPrice;
