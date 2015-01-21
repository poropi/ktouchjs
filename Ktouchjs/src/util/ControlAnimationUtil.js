var ANIME_PATTERN = {
	NONE        : 0,
	FADE_IN     : 1,
	FADE_OUT    : 2,
	FADE_IN_OUT : 3
}

var AnimeStatus = function (iconNumber, animePattern, nextAnimeInterval, animeInterval, soundFileName) {
	this.iconNumber = iconNumber;
	this.animePattern = animePattern;
	this.nextAnimeInterval = nextAnimeInterval;
	this.animeInterval = animeInterval;
	this.soundFileName = soundFileName;
}

var ControlAnimationUtil = {
	
	mIconLayer : null,
	mAnimeCount : 0,
	mControlAnimationListener : {
		animeStatus : null,
		startControlAnimation : function (layer) {},
		getAnimeStatus : function (animeCount) {return null;},
		startAnimation : function (nextAnimeInterval, sprite) {},
		endAnimation : function() {}

	},
	
	startControlAnimation : function (layer) {
		this.mControlAnimationListener.startControlAnimation(layer);
		this.mIconLayer = layer;
		this.mAnimeCount = 0;
		this.iconBlinkAnimation();
	},
	
	iconBlinkAnimation : function() {
		_animeStatus = this.mControlAnimationListener.getAnimeStatus(this.mAnimeCount);
		while (_animeStatus.nextAnimeInterval == 0.0 && _animeStatus.iconNumber != Icon_Number.ICON_FINAL) {
			this.iconNumberAnimation(_animeStatus);
			_animeStatus = this.mControlAnimationListener.getAnimeStatus(this.mAnimeCount);
		}

		this.iconNumberAnimation(_animeStatus);

		if (!CommonUtil.mTouchControlFlg) {
			this.startAnimation(_animeStatus.nextAnimeInterval, ControlAnimationUtil.mIconLayer.mAnimeSprites[_animeStatus.iconNumber]);
		}
	},

	startAnimation : function (nextAnimeInterval, sprite) {
		this.mControlAnimationListener.startAnimation(nextAnimeInterval, sprite);
		delayTime = cc.delayTime(nextAnimeInterval);
		callFunc = cc.callFunc(this.nextIconBlinkAnimation);
		sprite.runAction(cc.sequence(delayTime, callFunc));
	},
	
	endAnimation : function() {
		this.mControlAnimationListener.endAnimation();
		this.mAnimeCount = 0;
		CommonUtil.mTouchControlFlg = true;
		CommonUtil.mFinishAnimationFlg = false;
		CommonUtil.mDecadeAnimationFlg = false;
		CommonUtil.mLongTapSprite = Icon_Number.ICON_SUM;
	},
	nextIconBlinkAnimation : function(node) {
		ControlAnimationUtil.iconBlinkAnimation();
	},

	iconNumberAnimation : function(_animeStatus) {
		
		switch (_animeStatus.iconNumber) {
		case Icon_Number.ICON_DECADE:
			for (i = Icon_Number.ICON_KUUGA; i < Icon_Number.ICON_DECADE; i++) {
				this.iconBlinkPattern(i, _animeStatus);
			}
			break;

		case Icon_Number.ICON_FINAL:
			this.endAnimation();
			return ControlAnimationUtil.mIconLayer.mAnimeSprites[_animeStatus.iconNumber];

		default:
			this.iconBlinkPattern(_animeStatus.iconNumber, _animeStatus);
			break;
		}
		
		this.mAnimeCount++;
		
		return ControlAnimationUtil.mIconLayer.mAnimeSprites[_animeStatus.iconNumber];
	},
	
	iconBlinkPattern : function(iconNumber, _animeStatus) {
		if (_animeStatus.soundFileName != "") {
			cc.audioEngine.playEffect(_animeStatus.soundFileName, false);
		}
		switch (_animeStatus.animePattern) {
		case ANIME_PATTERN.FADE_IN:
			ControlAnimationUtil.mIconLayer.mAnimeSprites[iconNumber].stopAllActions();
			ControlAnimationUtil.mIconLayer.mAnimeSprites[iconNumber].runAction(AnimationUtil.iconLedOnAnimation4(_animeStatus.animeInterval));
			break;

		case ANIME_PATTERN.FADE_OUT:
			ControlAnimationUtil.mIconLayer.mAnimeSprites[iconNumber].stopAllActions();
			ControlAnimationUtil.mIconLayer.mAnimeSprites[iconNumber].runAction(AnimationUtil.iconLedOffAnimation2(_animeStatus.animeInterval));
			break;

		case ANIME_PATTERN.FADE_IN_OUT:
			ControlAnimationUtil.mIconLayer.mAnimeSprites[iconNumber].stopAllActions();
			ControlAnimationUtil.mIconLayer.mAnimeSprites[iconNumber].runAction(cc.sequence(AnimationUtil.iconLedOnAnimation4(_animeStatus.animeInterval / 2), AnimationUtil.iconLedOffAnimation2(_animeStatus.animeInterval / 2)));
			break;

		default:
			break;
		}
		return ControlAnimationUtil.mIconLayer.mAnimeSprites[iconNumber];
	}
};


