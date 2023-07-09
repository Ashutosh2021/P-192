AFRAME.registerComponent("timer",{

    init: function(){
        var duration=120
        var timerEl=document.querySelector("#timer")
        this.startTimer(duration,timerEl)
    },
    
    startTimer: function(duration,timerEl){

        var seconds;
        var minutes;

        setInterval(()=>{

            if(duration>=0){
                minutes=parseInt(duration/60)
                seconds=parseInt(duration%60)

                if(minutes<10){
                    minutes="0"+minutes
                }

                if(seconds<10){
                    seconds="0"+seconds
                }

                timerEl.setAttribute("text",{value:minutes+":"+seconds})

                duration-=1
            }

        },1000)
    },

   
})
