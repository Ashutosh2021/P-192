AFRAME.registerComponent("coins", {
    schema: {
      height: { type: "number", default: 0.07 },
      radius: { type: "number", default: 0.24 },
    },
    init: function () {
  
      //x position array
      px = [];
      var max=55;
      var min=-50

      for(var i = 0; i<50; i++){
        var ranX = Math.random()*(max-min)+min
        px.push(ranX)
      }
      //z position array
      pz = [];
      var max=-55;
      var min=5

      for(var i = 0; i<50; i++){
        var ranZ = Math.random()*(max-min)+min
        pz.push(ranZ)
      }
  
      for (var i = 0; i < 50; i++) {
        
        var coin = document.createElement("a-entity");
  
        //Update the position variables values from the array values.
        posX = px[i]
        posY = 1.5
        posZ = pz[i]
  
        position = { x: posX, y: posY, z: posZ };
  
        coin.setAttribute("id", "coin" + i);
        
        coin.setAttribute("position", position);
        coin.setAttribute("rotation",{x:90,y:0,z:90})
  
        coin.setAttribute("geometry", {
          primitive: "cylinder",
          height: this.data.height,
          radius: this.data.radius
        });
  
        coin.setAttribute("material",{
            color:"orange"
        });
  
        coin.setAttribute("static-body", {});
        coin.setAttribute("animation",{
            property:"rotation",
            to:"0 360 0",
            loop:"true",
            dur:1000
        });
        
        coin.setAttribute("game-play",{
            elementId:`#coin${i}`
        })
        var sceneEl = document.querySelector("#main_scene");
        sceneEl.appendChild(coin);
      }
    },
  });
  