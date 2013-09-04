function Screen(name,ip){
	this.name = name;
	this.ipv4=ip;
	this.avaliable = true;
}

function ScreenManager(){
	this.screens = new Object();
	
	this.GetScreen = function(name){
		return this.screens[name];
	}
	
	this.GetAvaliableScreens(){
		var length = this.screens.length;
		var avaliableScreens = null, avaliableCount = 0;
		
		for (var i = 0; i < length; i++) {
			this.screens[i]
		}
	}
}