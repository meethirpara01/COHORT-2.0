import { gsap } from "gsap";
import "./app.css";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    gsap.to(".green", {
      rotate: 360,
      x: 100,
      duration: 1,
      delay: 0.5,
    });

    gsap.from(".purple", {
      rotate: 360,
      x: 100,
      duration: 1,
      delay: 0.5,
    });

    gsap.fromTo(".blue", {
      x: -100,
    }, {
      rotate: 360,
      x: 100,
      duration: 1,
      delay: 0.5,
    });

    gsap.set(".red", {
      x: -100,
      opacity: 0
    });
    gsap.to(".red", {
      x: 200,
      duration: 1,
      opacity: 1,
      delay: 0.5,
    });

  }, []);

  return (
    <div className="container">
      <div className="box gradient-green green">TO</div>
      <div className="box gradient-purple purple">FROM</div>
      <div className="box gradient-blue blue">FROM-TO</div>
      <div className="box gradient-red red">SET</div>
    </div>
  )
}

export default App