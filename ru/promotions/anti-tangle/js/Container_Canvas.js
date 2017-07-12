(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib._580b585b2edbce24c47b2646 = function() {
	this.initialize(img._580b585b2edbce24c47b2646);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,290);


(lib.bottom = function() {
	this.initialize(img.bottom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1204,1229);


(lib.feather_001 = function() {
	this.initialize(img.feather_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,218);


(lib.feather_002 = function() {
	this.initialize(img.feather_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,347);


(lib.feather_004 = function() {
	this.initialize(img.feather_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,324);


(lib.feather_005 = function() {
	this.initialize(img.feather_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,479,331);


(lib.feather_006 = function() {
	this.initialize(img.feather_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,284);


(lib.feather_007 = function() {
	this.initialize(img.feather_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,337);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.top, new cjs.Rectangle(0,0,281,290), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottom();
	this.instance.parent = this;
	this.instance.setTransform(228.9,0,0.19,0.19,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,228.9,233.7), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._580b585b2edbce24c47b2646();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,400,400), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.feather_007();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,291,337), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.feather_006();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,253,284), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.feather_005();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,479,331), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.feather_004();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,161,324), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.feather_002();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,249,347), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.feather_001();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,196,218), null);


(lib.bottom_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_305 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(305).call(this.frame_305).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhZ4BVnIAA/lUAAJiLtgAJAAAUCztAAJAAAgAJQADdZABdfUAACA69gAGAAAMgj2AADUgjvAADAAAgAGIAAzrIhbAAIgDAHQgOAGgiAEQgXADhYAIIhUAHIgXAAQo0ARiSABQm3AFl9gPQjOgIhzgNQg6gGgSgGQgcgHgCgCQgGgGgeA3QgiA9AAA5QAABbA6AnUAAJBEegAJAAAUgj4AAFgR8AAAQx7AAAAgFgEgFBAuHQhBgBiUgTQiMgRgRgGQgMgFADhbQAFhZgBAAQgBAAgInFQgInMgBgKIgGhCQgFg2gGgUQgGgVglhIIhIiMQgfg7gjgaQgVgRgIACQgBABgEiZQgEiZgBAAICQAKQG7AMDfABQDeAAKOgPQgCAAAKAGQAMAGAUAFQAWAGA3AFQAyAEAkAAQArABAlAbIgOAbQgNAcgBAAQgCAAgtAwQgxA1gaAfQgZAegIAkQgEARgBAMIgcLfQgdLkgKAaQgLAcguALQgRAEhRAJQgtAFi5ADIiyACQgBABgFrrQgFrrgBAAQgBABgULuQgVLugBAAQk/AIhzAAIggAAgAl2P+QgBgBjEgHQjFgIgBgBQgBgBgCglQgBgkgBgBQgCgCAIgHQAIgIALgDQAJgDAOACIAbAGQANACAGgDIASgJQAMgGASACQAaACAHgBIAXABQAIABAOgEQAQgFAeACIA5AFQAdACAugGQAsgGASgHQAQgHgQgCQgOgBgXACIhiAEQhTADgRADQgdAGhygGQgZgBgaAFIgVAEQgBgBADgUQAEgVgBgBQCiAKgCgCQgCgCKLAHQBCAAEmgIQEagIAGgCQgBADABBLQABBOgBgBQgBgBiaAHIivAHQgSAAgQgFIgigKQgQgEgtgHQgogGgBgBQgBgBgjAEQgvAGgjABQgdACiEACQh+ACgWACQgZACgZAIIgUAHQgBgBgkAEIgkADIgCgBgALdPZQgBgBABgrQABgrgBgBIBDgHIAUAPIACAVQACAWgBgBQgBgBgFATQgGASgBgBQgBgBglADIgjABIgEAAgAK6NPIAAAAIAAAAg");
	mask.setTransform(118.3,-75.7);

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(75.2,192.6,0.275,0.275,30,0,0,200.2,200);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({regX:200.5,regY:200.1,rotation:15,x:75.3},17).to({regX:200.8,regY:200,rotation:60,y:182.7},34).to({regX:200.4,regY:199.8,rotation:90,x:75.2,y:162.6},13).to({regX:199.8,regY:200.1,rotation:225,x:35.2,y:17.1},20).to({regX:199.6,regY:199.9,scaleX:0.35,scaleY:0.35,rotation:366,x:-185.4,y:-142.9},25).to({regX:199.8,regY:200.2,rotation:467.2,x:-467.4,y:-208.9},26).to({_off:true},83).wait(9));

	// Layer 21
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168.8,96.1,0.524,0.524,135,0,0,98.3,109);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({regX:98.2,scaleX:0.55,scaleY:0.55,rotation:240.1,x:160.6,y:-111.6},17,cjs.Ease.get(-1)).to({regY:109.1,scaleX:0.77,scaleY:0.77,rotation:726.8,x:-221.1,y:-604.3,alpha:0},47).to({_off:true},154).wait(9));

	// Layer 18
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(99.1,173.1,0.319,0.319,-156.8,0,0,98,108.9);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({regX:97.9,scaleX:0.34,scaleY:0.34,rotation:-15.7,x:86.8,y:10.3},17,cjs.Ease.get(-1)).to({regX:98.1,regY:109,scaleX:0.47,scaleY:0.47,rotation:615,x:-324.6,y:-141.6,alpha:0},47).to({_off:true},154).wait(9));

	// Symbol 2
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(153.5,171.9,0.156,0.156,-120,0,0,124,173.8);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({regX:123.6,regY:174.1,scaleX:0.17,scaleY:0.17,rotation:-223.1,x:153.6,y:-15.9},17,cjs.Ease.get(-1)).to({regX:124.4,regY:174.2,scaleX:0.23,scaleY:0.23,rotation:-233.2,x:-164.7,y:-357.1,alpha:0},47).to({_off:true},154).wait(9));

	// Symbol 2
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(96.2,101.1,0.319,0.319,90,0,0,124.5,173.6);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80).to({regY:173.3,scaleX:0.34,scaleY:0.34,rotation:27,x:68.5,y:-96.4},17,cjs.Ease.get(-1)).to({regX:124.2,regY:173.7,scaleX:0.47,scaleY:0.47,rotation:6.8,x:-460.6,y:-510.4,alpha:0},47).to({_off:true},153).wait(9));

	// Symbol 4
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(118.7,126.5,0.319,0.319,55.2,0,0,239.8,165.5);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(82).to({regY:165.4},0).to({regY:165.2,scaleX:0.34,scaleY:0.34,rotation:162.9,x:100.6,y:-41.6},17,cjs.Ease.get(-1)).to({regX:239.7,scaleX:0.46,scaleY:0.46,rotation:80.7,x:-299,y:-499.3,alpha:0.043},45).to({regY:165.5,scaleX:0.47,scaleY:0.47,rotation:77,x:-356,y:-234.1,alpha:0},2).to({_off:true},151).wait(9));

	// Symbol 6
	this.instance_6 = new lib.Symbol6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(173.7,56.1,0.16,0.16,105,0,0,146,168);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(82).to({regX:145.8,regY:167.8,scaleX:0.17,scaleY:0.17,rotation:196.8,x:150.3,y:-146.2},15,cjs.Ease.get(-1)).to({regX:145.6,scaleX:0.24,scaleY:0.24,rotation:351.8,x:-346.4,y:-598,alpha:0},49).to({_off:true},151).wait(9));

	// Symbol 5
	this.instance_7 = new lib.Symbol5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(158,117,0.319,0.319,-114.8,0,0,126.6,141.8);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80).to({regX:126.5,regY:141.9,scaleX:0.34,scaleY:0.34,rotation:-202.1,x:147.1,y:-64.8},17,cjs.Ease.get(-1)).to({regX:127,regY:142,scaleX:0.47,scaleY:0.47,rotation:-92.9,x:-255.1,y:-361.2,alpha:0},47).to({_off:true},153).wait(9));

	// Symbol 4
	this.instance_8 = new lib.Symbol4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(110.6,207.8,0.319,0.319,165,0,0,239.7,165.5);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(79).to({regX:239.6,regY:165.2,scaleX:0.34,scaleY:0.34,rotation:43.9,x:106.1,y:37.4},17,cjs.Ease.get(-1)).to({regX:239.4,regY:165.7,scaleX:0.47,scaleY:0.47,rotation:60.6,x:-247.2,y:-170.4,alpha:0},47).to({_off:true},154).wait(9));

	// Symbol 6
	this.instance_9 = new lib.Symbol6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(75.3,67.2,0.319,0.319,0,0,0,145.7,168.6);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(79).to({regX:145.6,regY:168.4,scaleX:0.34,scaleY:0.34,rotation:-0.8,x:48.7,y:-103.6},17,cjs.Ease.get(-1)).to({regY:168.2,scaleX:0.47,scaleY:0.47,rotation:-8.2,x:-472,y:-315.9,alpha:0},47).to({_off:true},154).wait(9));

	// Symbol 5
	this.instance_10 = new lib.Symbol5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(81.3,174,0.319,0.319,0,0,0,126.8,141.8);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(81).to({regX:126.9,regY:142,scaleX:0.34,scaleY:0.34,rotation:7.8,x:75.8,y:-4.1},17,cjs.Ease.get(-1)).to({regX:126.8,regY:141.6,scaleX:0.47,scaleY:0.47,rotation:66.8,x:-285.1,y:-271.6,alpha:0},47).to({_off:true},152).wait(9));

	// Symbol 4
	this.instance_11 = new lib.Symbol4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(152.5,52.9,0.319,0.319,0,0,0,239.8,165.6);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(77).to({scaleX:0.34,scaleY:0.34,rotation:-11.3,x:127.2,y:-137.9},17,cjs.Ease.get(-1)).to({regX:240.2,regY:165.2,scaleX:0.47,scaleY:0.47,rotation:-98.2,x:-383.4,y:-502,alpha:0},47).to({_off:true},156).wait(9));

	// Symbol 3
	this.instance_12 = new lib.Symbol3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(174.9,160.8,0.319,0.319,0,0,0,80.6,162);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(81).to({regX:80.5,regY:162.1,scaleX:0.34,scaleY:0.34,rotation:-11.3,x:172.6,y:-42.1},17,cjs.Ease.get(-1)).to({regX:80.7,regY:161.8,scaleX:0.47,scaleY:0.47,rotation:-98.2,x:-163.7,y:-498.3,alpha:0},47).to({_off:true},152).wait(9));

	// Symbol 2
	this.instance_13 = new lib.Symbol2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(47.1,157.1,0.319,0.319,0,0,0,124.5,173.6);

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(80).to({scaleX:0.34,scaleY:0.34,rotation:1.5,x:31.8,y:-7.4},17,cjs.Ease.get(-1)).to({regY:173.2,scaleX:0.47,scaleY:0.47,rotation:14.3,x:-403.5,y:-171.7,alpha:0},47).to({_off:true},153).wait(9));

	// Symbol 1
	this.instance_14 = new lib.Symbol1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(44.6,102,0.319,0.319,0,0,0,98.2,108.9);

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(80).to({regX:98,regY:108.8,scaleX:0.34,scaleY:0.34,rotation:0.8,x:30.8,y:-73.5},17,cjs.Ease.get(-1)).to({regX:98.1,regY:108.4,scaleX:0.47,scaleY:0.47,rotation:6.8,x:-392.9,y:-321.5,alpha:0},47).to({_off:true},153).wait(9));

	// Layer 1
	this.instance_15 = new lib.Symbol8();
	this.instance_15.parent = this;
	this.instance_15.setTransform(114.5,116.8,1,1,0,0,0,114.5,116.8);
	this.instance_15.cache(-2,-2,233,238);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},297).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245.6,278.6);


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_239 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(239).call(this.frame_239).wait(1));

	// Layer 1
	this.instance = new lib.bottom_1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(58.5,190.8,1,1,0,0,0,58.5,190.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245.6,278.6);


// stage content:
(lib.Container_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_278 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(278).call(this.frame_278).wait(19));

	// bottom
	this.instance = new lib.bottom_1();
	this.instance.parent = this;
	this.instance.setTransform(441.5,526.8,1,1,0,0,0,58.5,190.8);

	this.instance_1 = new lib.anim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(497.5,452.8,1,1,0,0,0,114.5,116.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},47).to({state:[{t:this.instance_1}]},44).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(154));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({y:472.8},44,cjs.Ease.get(1)).wait(1).to({regX:-105.7,regY:-172.7,rotation:-0.2,x:276.1,y:183.7},0).wait(1).to({rotation:-0.9,x:272.4,y:184.9},0).wait(1).to({rotation:-2,x:266.1,y:187},0).wait(1).to({rotation:-3.6,x:257.4,y:190.3},0).wait(1).to({rotation:-5.7,x:246.1,y:194.9},0).wait(1).to({rotation:-8.4,x:232.5,y:201.2},0).wait(1).to({rotation:-11.5,x:216.9,y:209.6},0).wait(1).to({rotation:-15.3,x:199.5,y:220.2},0).wait(1).to({rotation:-19.6,x:181.1,y:233.7},0).wait(1).to({rotation:-24.4,x:162.4,y:250.3},0).wait(1).to({rotation:-29.9,x:144.2,y:270.2},0).wait(1).to({rotation:-35.8,x:127.8,y:293.5},0).wait(1).to({rotation:-42.2,x:114.2,y:319.9},0).wait(1).to({rotation:-49.1,x:104.7,y:348.9},0).wait(1).to({rotation:-56.2,x:100.3,y:379.6},0).wait(1).to({rotation:-63.6,x:101.6,y:410.9},0).wait(1).to({rotation:-71,x:108.9,y:441.2},0).wait(1).to({rotation:-78.3,x:121.8,y:469.2},0).wait(1).to({rotation:-85.3,x:139.2,y:493.8},0).wait(1).to({rotation:-91.9,x:159.7,y:514.1},0).wait(1).to({rotation:-97.9,x:181.4,y:529.9},0).wait(1).to({rotation:-103.1,x:202.7,y:541.4},0).wait(1).to({rotation:-107.4,x:221.9,y:549.3},0).wait(1).to({rotation:-110.8,x:237.9,y:554.4},0).wait(1).to({rotation:-113.3,x:249.7,y:557.3},0).wait(1).to({rotation:-114.7,x:256.9,y:558.7},0).wait(1).to({regX:114.4,regY:116.9,rotation:-115.2,x:427.5,y:236.7},0).to({rotation:-123},13,cjs.Ease.get(1)).wait(1).to({regX:-105.7,regY:-172.7,rotation:-122.8,x:303.2,y:578.5},0).wait(1).to({rotation:-122.3,x:300.2,y:577.4},0).wait(1).to({rotation:-121.5,x:295.6,y:575.6},0).wait(1).to({rotation:-120.5,x:289.7,y:573.3},0).wait(1).to({rotation:-119.4,x:283.2,y:570.5},0).wait(1).to({rotation:-118.3,x:276.9,y:567.7},0).wait(1).to({rotation:-117.4,x:271.3,y:565.2},0).wait(1).to({rotation:-116.6,x:266.8,y:563},0).wait(1).to({rotation:-115.9,x:263.4,y:561.2},0).wait(1).to({rotation:-115.5,x:261,y:560.1},0).wait(1).to({rotation:-115.3,x:259.6,y:559.3},0).wait(1).to({regX:114.4,regY:116.9,rotation:-115.2,x:427.5,y:236.7},0).wait(154));

	// top
	this.instance_2 = new lib.top();
	this.instance_2.parent = this;
	this.instance_2.setTransform(495.5,191.2,1,1,0,0,0,140.5,145.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47).to({y:154.2,alpha:0},55,cjs.Ease.get(-1)).wait(195));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286,44.9,1150.7,1096.7);
// library properties:
lib.properties = {
	width: 720,
	height: 666,
	fps: 25,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"/res/actions/antiTangle/ru/promotions/anti-tangle/img/anim/_580b585b2edbce24c47b2646.png?1491981796332", id:"_580b585b2edbce24c47b2646"},
		{src:"/res/actions/antiTangle/ru/promotions/anti-tangle/img/anim/Bitmap1.png?1491981796332", id:"Bitmap1"},
		{src:"/res/actions/antiTangle/ru/promotions/anti-tangle/img/anim/bottom.png?1491981796332", id:"bottom"},
		{src:"/res/actions/antiTangle/ru/promotions/anti-tangle/img/anim/feather_001.png?1491981796332", id:"feather_001"},
		{src:"/res/actions/antiTangle/ru/promotions/anti-tangle/img/anim/feather_002.png?1491981796332", id:"feather_002"},
		{src:"/res/actions/antiTangle/ru/promotions/anti-tangle/img/anim/feather_004.png?1491981796332", id:"feather_004"},
		{src:"/res/actions/antiTangle/ru/promotions/anti-tangle/img/anim/feather_005.png?1491981796332", id:"feather_005"},
		{src:"/res/actions/antiTangle/ru/promotions/anti-tangle/img/anim/feather_006.png?1491981796332", id:"feather_006"},
		{src:"/res/actions/antiTangle/ru/promotions/anti-tangle/img/anim/feather_007.png?1491981796332", id:"feather_007"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;