import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin); 


Draggable.create(".page2 svg", {
  type: "x,y",
  edgeResistance: 0.65,
  bounds: ".page2",
  inertia: true,
  dragResistance: 0.6,
});