window.onload = pageLoad;

function pageLoad(){
	var colorSelected = document.getElementById("color");
	var colorDrop = document.getElementById("color").value;
	document.body.style.backgroundColor = "#EB7372";
	colorSelected.style.backgroundColor = colorDrop;
	colorSelected.style.color = "#ffffff";
	
	document.getElementById("color").onchange = changeColor;
	function changeColor() 
	{
		var colorToChange = document.getElementById("color").value;
		colorSelected.style.backgroundColor = colorToChange;
		colorSelected.style.color = "#ffffff";
		if (colorToChange == "red")
		{
			document.body.style.backgroundColor = "#EB7372";
		}
		else if (colorToChange == "blue")
		{
			document.body.style.backgroundColor = "#467C9E";
			
		}
		else if (colorToChange == "green")
		{
			document.body.style.backgroundColor = "#A1F074";
		}		
	}
	document.getElementById("start").onclick = startGame;
}

function startGame(){
	alert("Ready");
	clearScreen();
	addBox();
	timeStart();
}

function timeStart(){	
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	if (timer !== null)
	{
		clearInterval(timer);
		timer = null;
	}
	timer = setInterval(timeCount,TIMER_TICK)
	x.innerHTML = second;

	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		if (second == 0 && allbox.length != 0)
		{
			clearInterval(timer);
			alert("Game over");
			clearScreen();
		}

		if (second > 0 && allbox.length == 0)
		{
			clearInterval(timer);
			alert("You win!");
		}

		else if (second > 0)
		{
		second -= 1;
		x.innerHTML = second;
		}

		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.background = colorDrop;
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer div");

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}




