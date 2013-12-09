(function () {
	var ready = function () {
		MC.addPlatformFlubbyBox();
		MC.addPlatformFlubbyBlackBox();
		MC.addPlatformDibbleSlab();
		MC.addPlatformDibbleSlabElite();
		MC.addPlatformFC();
		MC.addPlatformFC2();
	};
		
	var error = function () {
	};

	GDT.loadJs(['mods/MC/code/code.js'], ready, error);
})();
