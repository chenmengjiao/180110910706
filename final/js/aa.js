function showTime(){
	var myDate = new Date();
	var h = myDate.getHours();
	var m = myDate.getMinutes();
	var s = myDate.getSeconds();
	var strTime = myDate.getFullYear() + "年" + (myDate.getMonth()+1) + "月" + myDate.getDate() + "日  ";
	strTime += h<10 ? "0"+String(h) : String(h);
	strTime += ":";
	strTime += m<10 ? "0"+String(m) : String(m);
	strTime += ":";
	strTime += s<10 ? "0"+String(s) : String(s);
	document.getElementById("currentTime").innerHTML = strTime;
	setTimeout(showTime, 1000);
}

window.onload = showTime;