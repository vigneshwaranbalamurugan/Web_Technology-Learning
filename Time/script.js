setInterval(showtime,1000);
showtime();
function showtime(){
	let time=new Date();
	let hour=time.getHours();
	let min=time.getMinutes();
	let sec=time.getSeconds();
	am_pm="AM";
	if(hour>=12)
	{
		if(hour>12)
			hour-=12;
		am_pm="PM";
	}else if(hour==0){
		hour=12;
		am_pm="AM";
	}
	hour =hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
	let ctime=hour+":"+min+":"+sec;
	document.getElementById("time").innerHTML=ctime;
}
function dark(){
  var element = document.body;
  var color=document.getElementById("time");
   var x = document.getElementById("mode");
  if (x.innerHTML === "Light Mode") {
    x.innerHTML = "Dark Mode";
	element.classList.toggle("dark-mode");
   x.style.color="black";
   color.style.color="#333333";
  
  } else {
    x.innerHTML = "Light Mode";
	x.style.color="white";
	  element.classList.toggle("dark-mode");
   
   color.style.color="white";
   
  }
}