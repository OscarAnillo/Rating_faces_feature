import { useEffect, useState } from "react";
import { Rating } from "./Components/Rating";
import "./App.css";

function App() {
  const [submit, setSubmit] = useState(true);

  useEffect(() => {
    let divClass = document.getElementsByClassName("rating");
    divClass[0].addEventListener("click", function () {
      this.classList.add("selected");
      divClass[1].className = "rating";
      divClass[2].className = "rating";
      divClass[3].className = "rating";
      divClass[4].className = "rating";
      setTimeout(() => setSubmit(false), 3000);
    });
    divClass[1].addEventListener("click", function () {
      this.classList.add("selected");
      divClass[2].className = "rating";
      divClass[3].className = "rating";
      divClass[4].className = "rating";
      divClass[0].className = "rating";
      setTimeout(() => setSubmit(false), 3000);
    });
    divClass[2].addEventListener("click", function () {
      this.classList.add("selected");
      divClass[3].className = "rating";
      divClass[4].className = "rating";
      divClass[0].className = "rating";
      divClass[1].className = "rating";
      setTimeout(() => setSubmit(false), 3000);
    });
    divClass[3].addEventListener("click", function () {
      this.classList.add("selected");
      divClass[4].className = "rating";
      divClass[0].className = "rating";
      divClass[1].className = "rating";
      divClass[2].className = "rating";
      setTimeout(() => setSubmit(false), 3000);
    });
    divClass[4].addEventListener("click", function () {
      this.classList.add("selected");
      divClass[0].className = "rating";
      divClass[1].className = "rating";
      divClass[2].className = "rating";
      divClass[3].className = "rating";
      setTimeout(() => setSubmit(false), 3000);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        {submit ? (
          <div>
            <h1 className="title">Rate Your Experience</h1>
            <Rating />
          </div>
        ) : (
          <div>
            <h2 className="msg">Thanks for your feedback!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
