        const openingTimeWeek = new Date();
        openingTimeWeek.setHours(9);
        openingTimeWeek.setMinutes(0);
        openingTimeWeek.setSeconds(0);
        openingTimeWeek.setMilliseconds(0);
            
        const closingTimeWeek = new Date();
        closingTimeWeek.setHours(18);
        closingTimeWeek.setMinutes(0);
        closingTimeWeek.setSeconds(0);
        closingTimeWeek.setMilliseconds(0);
        
        const openingTimeSaturday = new Date();
        openingTimeSaturday.setHours(10)
        openingTimeSaturday.setMinutes(0);
        openingTimeSaturday.setSeconds(0);
        openingTimeSaturday.setMilliseconds(0);
        
        const closingTimeSaturday = new Date();
        closingTimeSaturday.setHours(16);
        closingTimeSaturday.setMinutes(0);
        closingTimeSaturday.setSeconds(0);
        closingTimeSaturday.setMilliseconds(0);
            
        var currentTime = new Date();
        var day = currentTime.getDay();
            
        function timeDifference(){
            if(currentTime > closingTimeWeek || day === 0){
                return "Butikken er stengt nå!"
            }
            else if (day === 6){
                if (currentTime < openingTimeSaturday){
                    var hours = Math.floor((openingTimeSaturday-currentTime)/36e5);
                    var minutes = Math.floor((openingTimeSaturday-currentTime)/6e4)-60*hours;
                    if(hours < 1){
                        return "Det er " + minutes + " minutter til vi åpner!";
                    }
                    else if(hours === 1){
                        return "Det er " + hours + " time og " + minutes + " minutter til vi åpner!";
                    }
                    else{
                        return "Det er " + hours + " timer og " + minutes +" minutter til vi åpner!";
                    }
                }
                else{
                    var hours = Math.floor((closingTimeSaturday-currentTime)/36e5);
                    var minutes = Math.floor((closingTimeSaturday-currentTime)/6e4)-60*hours;
                    if(hours < 1){
                        return "Det er " + minutes + " minutter til vi stenger!";
                    }
                    else if(hours === 1){
                        return "Det er " + hours + " time og " + minutes + " minutter til vi stenger!";
                    }
                    else{
                        return "Det er " + hours + " timer og " + minutes +" minutter til vi stenger!";
                    }
                }
                
            }
            else{
               if (currentTime < openingTimeWeek){
                    var hours = Math.floor((openingTimeWeek-currentTime)/36e5);
                    var minutes = Math.floor((openingTimeWeek-currentTime)/6e4)-60*hours;
                    if(hours < 1){
                        return "Det er " + minutes + " minutter til vi åpner!";
                    }
                    else if(hours === 1){
                        return "Det er " + hours + " time og " + minutes + " minutter til vi åpner!";
                    }
                    else{
                        return "Det er " + hours + " timer og " + minutes + " minutter til vi åpner!";
                    }
                }
                else{
                    var hours = Math.floor((closingTimeWeek-currentTime)/36e5);
                    var minutes = Math.floor((closingTimeWeek-currentTime)/6e4)-60*hours;
                    if(hours < 1){
                        return "Det er " + minutes + " minutter til vi stenger!";
                    }
                    else if(hours === 1){
                        return "Det er " + hours + " time og " + minutes + " minutter til vi stenger!";
                    }
                    else{
                        return "Det er " + hours + " timer og " + minutes +" minutter til vi stenger!";
                    }
                } 
            }
        }
        

            
        var openingHours = document.getElementById("clock");
        openingHours.innerHTML = timeDifference();