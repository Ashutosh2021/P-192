AFRAME.registerComponent("game-play",{
    schema:{
        elementId:{type:"string",default:"#coin1"}
    },

    tick: function(){
        this.isCollided(this.data.elementId)
    },

    isCollided: function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener("collide",(e)=>{
            if(elementId.includes("#coin")){
                element.setAttribute("visible",false)
                
            }
        })
    },

   
})