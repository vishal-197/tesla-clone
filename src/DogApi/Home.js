import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [value, setValue] = useState([]);
  const [item, setItem] = useState("");
  const [image, setImage] = useState("");
 
 

 
//   useEffect(() => {
//     axios.get("https://dog.ceo/api/breeds/list/all").then((result) => {
//       console.log(result.data.message);
//       setValue(Object.keys (result.data.message));
//     });
//   }, []);
  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((result) => {
      console.log(result.data.message);
      setValue(Object.values(result.data.message));
  

    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    return axios
      .get(`https://dog.ceo/api/breed/${item}/images/random`)
      .then((result) => {
        setImage(result.data.message);
        console.log(result);
      });
  }

  useEffect(() => {
    axios
    //   .get(`https://dog.ceo/api/breed/${item}//images/random`)
      .get(`https://dog.ceo/api/breed/${item}/images/random`)
      .then((result) => {
        setImage(result.data.message);
        console.log(result);
      });
  }, [item]);

  const handelChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <select value={item} onChange={handelChange}>
            <option value="">Select a breed</option>
            {value.map((items, index) => {
              return (
                <option value={items} key={index}>
                  {items}
                </option>
              );
            })}
            

        
          </select>
          <button>fetch</button>
        </form>

        <div>
          <img src={`${image}`} />
        </div>
      </section>
    </>
  );
}

export default Home;
