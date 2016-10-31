var pic=document.getElementById("bildefremvisning")
bildeArray=["butikkForside.JPG","ekstra1.JPG","ekstra2.JPG","ekstra3.JPG","ekstra4.JPG","ekstra5.JPG"]
i=0;
setInterval(function(){
	pic.src="slideshow/"+bildeArray[i];
	i++;
	if(i==6){
		i=0;
	}
},2500)