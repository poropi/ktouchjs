var ControlSoundUtil = {
	
	mIconLayer : null,
	mAnimeCount : 0,
	mControlSoundListener : {
		animeStatus : null,
		startControlAnimation : function (layer) {},
		getAnimeStatus : function (animeCount) {return null;},
		startAnimation : function (nextAnimeInterval, sprite) {},
		endAnimation : function() {}

	},
	
	startControlAnimation : function (layer) {
		this.mControlSoundListener.startControlAnimation(layer);
		this.mIconLayer = layer;
		this.mAnimeCount = 0;
		this.iconBlinkAnimation();
	},
	
	iconBlinkAnimation : function() {
		_animeStatus = this.mControlSoundListener.getAnimeStatus(this.mAnimeCount);
		while (_animeStatus.nextAnimeInterval == 0.0 && _animeStatus.iconNumber != Icon_Number.ICON_FINAL) {
			this.iconNumberAnimation(_animeStatus);
			_animeStatus = this.mControlSoundListener.getAnimeStatus(this.mAnimeCount);
		}

		this.iconNumberAnimation(_animeStatus);

		if (_animeStatus.iconNumber != Icon_Number.ICON_FINAL) {
			this.startAnimation(_animeStatus.nextAnimeInterval, ControlSoundUtil.mIconLayer.mAnimeSprites[_animeStatus.iconNumber]);
		}
	},

	startAnimation : function (nextAnimeInterval, sprite) {
		this.mControlSoundListener.startAnimation(nextAnimeInterval, sprite);
		delayTime = cc.delayTime(nextAnimeInterval);
		callFunc = cc.callFunc(this.nextIconBlinkAnimation);
		sprite.runAction(cc.sequence(delayTime, callFunc));
	},
	
	endAnimation : function() {
		this.mControlSoundListener.endAnimation();
		this.mAnimeCount = 0;
	},
	nextIconBlinkAnimation : function(node) {
		ControlSoundUtil.iconBlinkAnimation();
	},

	iconNumberAnimation : function(_animeStatus) {
		
		switch (_animeStatus.iconNumber) {
		case Icon_Number.ICON_FINAL:
			this.endAnimation();
			return ControlSoundUtil.mIconLayer.mAnimeSprites[_animeStatus.iconNumber];

		default:
			this.iconBlinkPattern(_animeStatus.iconNumber, _animeStatus);
			break;
		}
		
		this.mAnimeCount++;
		
		return ControlSoundUtil.mIconLayer.mAnimeSprites[_animeStatus.iconNumber];
	},
	
	iconBlinkPattern : function(iconNumber, _animeStatus) {
		if (_animeStatus.soundFileName != "") {
			cc.audioEngine.playEffect(_animeStatus.soundFileName, false);
		}
		return ControlSoundUtil.mIconLayer.mAnimeSprites[iconNumber];
	}
};


