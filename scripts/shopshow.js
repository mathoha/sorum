var pic=document.getElementById("picture")
bildeArray=["shopmain.jpg","shop1.jpg","shop2.jpg","shop3.jpg"]
i=1;
setInterval(function(){
	pic.src="img/shop/"+bildeArray[i];
	i++;
	if(i==4){
		i=0;
	}
},4000)
