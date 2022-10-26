var run = document.querySelector("#RUN");
run.addEventListener('click', function(){
	var str2Bytes = "a";
	var hugeStr = "", preHugeStr = "";
	var quotaExceed = false;
	var increaseBytes = 1000000;
	while (true) {
		if (quotaExceed) {
			increaseBytes /= 10;
		if (increaseBytes < 1) break;
			quotaExceed = false;
		}
		preHugeStr = hugeStr;
		hugeStr += Array(increaseBytes+1).join(str2Bytes);
		try {
			localStorage.setItem("0", hugeStr);
		} catch(e) {
			hugeStr = preHugeStr;
			quotaExceed = true;
		}
	}
	let size = preHugeStr.length*2+2; // localStorageのkeyでも1文字（2byte）使っているので足して返す});
	var screen = document.querySelector("#screen");
	screen.innerHTML = size + " byte<br>" + (size/1024) + " KB<br>" + (size/1024/1024) + " MB" ;
	localStorage.clear();
});
var runTest = document.querySelector("#runTest");
runTest.addEventListener('click', function(){
	let singleArray = ["0123456","012"];
	let preArray = [];
	for(var i=0; i<5000; i++){
		preArray.push(singleArray);
		let json = JSON.stringify(preArray, undefined, 1);
		localStorage.setItem("array",json);
	}
	var size = preArray.length;
	var screen = document.querySelector("#screen");
	screen.innerHTML = size + " cards" ;
	// localStorage.clear();
	
});
var getArray = document.querySelector("#getArray");
getArray.addEventListener('click', function(){
	let json = localStorage.getItem('array');
	let array = JSON.parse(json);
	var screen = document.querySelector("#screen");
	screen.innerHTML = array.length;
});