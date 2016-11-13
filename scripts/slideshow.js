var pic=document.getElementById("bildefremvisning")
bildeArray=["butikkForside.jpg","ekstra1.jpg","ekstra2.jpg","ekstra3.jpg","ekstra4.jpg","ekstra5.jpg"]
i=0;
setInterval(function(){
	pic.src="img/index/"+bildeArray[i];
	i++;
	if(i==6){
		i=0;
	}
},4000)
