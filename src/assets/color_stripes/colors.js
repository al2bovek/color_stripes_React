 import { hexaColor } from "./color_generator.js";
 export const colors = ((l = 6) => {
    const arr = [];
     for (let i = 0; i < l; i++) {
        arr.push(hexaColor());
     }
   return arr;
 })(9);
 