const display1 = document.querySelector("#display1")
        const display2 = document.querySelector("#display2")
        const display3 = document.querySelector("#display3")
        const display4 = document.querySelector("#display4")
        const startButton = document.querySelector("#start")
        const stopButton = document.querySelector("#stop")
        const resetButton = document.querySelector("#reset")
        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        // let count4 = 0;


        // function startCount() {
                
        //         count1++
        //         display1.innerText = "0" + count1;
        //         if(count1 === 10) {
        //             count2++;
        //             display2.innerText = count2;
        //             count1 = 0;
        //             if(count2 === 10){
        //                 count3++;
        //                 display3.innerText = count3;
        //                 count2 = 0;
                        
        //             }
                    
        //         }
                


        // }
        function startCount() {
                
            count1++
            count1 = count1 < 10 ? "0" + count1 : count1;
            display1.innerText =  count1;
            if(count1 === 15) {
                count2++;
                count2 = count2 < 10 ? "0" + count2 : count2;
                display2.innerText = count2;
                count1 = 0;
                if(count2 === 15){
                    count3++;
                    count3 = count3 < 10 ? "0" + count3 : count3;
                    display3.innerText = count3;
                    count2 = 0;
                    
                }
                
            }
            


    }
        
        
        // const startCount = () => {
        //     count1++
        //     if(count1 < 10) {
        //         console.log(count1)
        //         count1 = "0" + count1;
        //         display1.innerText = count1
                
        //     }
        //     else if(count1 === 15 && count2 < 10){
        //         count2++;
        //         count2 = "0" + count2
        //         display2.innerText = count2
        //         count1 = 0

        //     }
        //     else if(count2 === 15 && count3 < 10){
        //         count3++;
        //         count3 = "0" + count3
        //         display3.innerText =  count3
        //         count2 = 0
        //     }else {
        //         count1;
        //         count2;
        //         count3;
        //     }
        // }
        // function startCount1 () {
        //     display2.innerText = count2;
        //         count2++
        // }

        function setCount() {
            value = setInterval(startCount, 500); 
            // value1 = setInterval(startCount1, 500);     

        }
        function stopCount() {
            clearInterval(value);
            // clearInterval(value1);

        }
        function resetCount() {
            count1 = "0" + 0;
            count2 = "0" + 0;
            count3 = "0" + 0;
            // count4 = 0;
            stopCount();
            display1.innerText = count1;
            display2.innerText = count2;
            display3.innerText = count3;
            // display4.innerText = count4;
            
            
            
        }
        startButton.addEventListener("click", setCount)
        stopButton.addEventListener("click", stopCount)
        resetButton.addEventListener("click", resetCount)

    
