var AnimationUtil =  {
	iconLedOnAnimation : function () {
		var fadeOut = cc.fadeOut(0.3);
		var scaleToOut = cc.scaleTo(0.3, 3.0);
		var spawnfadeOut = cc.spawn(fadeOut, scaleToOut);
		return spawnfadeOut;
	},
	
	iconLedOnAnimation2 : function () {
		var scaleTo = cc.scaleTo(0, DEFAULT_SPRITE_SCALE);
		return cc.spawn(scaleTo, cc.fadeIn(0.3));
	},
	
	iconLedOnAnimation3 : function () {
		var fadeOut = cc.fadeOut(0.6);
		var scaleToOut = cc.scaleTo(0.6, 5.0);
		var spawnfadeOut = cc.spawn(fadeOut, scaleToOut);
		return spawnfadeOut;
	},
	
	iconLedOnAnimation4 : function (timerCount) {
		var scaleTo = cc.scaleTo(0, DEFAULT_SPRITE_SCALE);
		return cc.spawn(scaleTo, cc.fadeIn(timerCount));
	},

	iconLedOffAnimation : function () {
		return cc.fadeOut(0.5);
	},

	iconLedOffAnimation2 : function (timerCount) {
		var scaleTo = cc.scaleTo(0, DEFAULT_SPRITE_SCALE);
		return cc.spawn(scaleTo, cc.fadeOut(timerCount));
	},
	
	iconSummonAnimation : function(ccNode) {
		var spawnfadeOut1 = cc.spawn(cc.fadeOut(0.5), cc.scaleTo(0.5, 5.0));
		var spawnfadeOut2 = cc.spawn(spawnfadeOut1, cc.moveTo(0.5, cc.p(180, 170)));
		
		callFuncN = cc.callFunc(function(ccNode) {
			var sprite = new IconSprite();
			sprite = ccNode;
			var baseIconLayer = sprite.getUserData();
			var iconStatus = new InitIconStatus();
			iconStatus = IconInfomation.getIconStatus(sprite.getIconNumber(), baseIconLayer.mModeValue);
			
			sprite.setPosition(iconStatus.iconPosition);
			sprite.setScale(DEFAULT_SPRITE_SCALE);
			sprite.setOpacity(0);
		});
		
		return cc.sequence(spawnfadeOut2, callFuncN);
		
	},
	
	iconBlinkAnimation : function (nextAnimeNode) {
		var ccsequence1 = cc.sequence(cc.fadeTo(0.5, 255), cc.fadeTo(0.5, 64));
		return cc.repeatForever(ccsequence1);
	},

	iconLedOnOffAnimation : function (nextAnimeNode) {
		
		return cc.sequence(cc.fadeTo(0.5, 255), cc.fadeTo(0.5, 0));

	},

	iconFlipAnimation1 : function (nextAnimeNode) {
		
//		flip1 = cc.orbitCamera(0.25, 1, 0, 0.0, 180.0, 0.0, 0.0);
//		flip2 = cc.orbitCamera(0.25, 1, 0, 180.0, 180.0, 0.0, 0.0);
		var fadeIn  = cc.fadeIn(0.1);
		var fadeOut = cc.fadeOut(0.1);
		var seqAnim = cc.sequence(fadeOut, fadeIn);
		
		return cc.sequence(seqAnim, seqAnim, seqAnim);

	}

}