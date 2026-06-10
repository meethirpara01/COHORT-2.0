import { gsap } from "gsap";
import "./app.css";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    gsap.to(".flair", {
      x: 900,
      duration: 1,
      ease: "expo.inOut",
      delay: 0.5,
      // repeat: 3,
      yoyo: true,

      onStart: () => console.log("Animation started"),
      onComplete: () => console.log("Animation completed"),
      onUpdate: () => console.log("Animation updated"),
    });
  }, []);

  return (
    <div className="container">
      <div className="flair flair--25"></div>
    </div>
  )
}

export default App