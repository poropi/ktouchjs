


var KamenRideControlSoundUtil = {
	
	mLayer : null,
	mCallCount : 0,
	mMaxCallCount : 0,
	mCallArray : null,
	
	animeStatus : [
		new AnimeStatus(Icon_Number.ICON_CANCEL, ANIME_PATTERN.NONE, 0.5   , 0.0 , res.effect_kamen_mp3),
		new AnimeStatus(Icon_Number.ICON_CANCEL, ANIME_PATTERN.NONE, 0.0   , 0.0 , res.effect_raido_mp3),
		new AnimeStatus(Icon_Number.ICON_FINAL,  ANIME_PATTERN.NONE, 0.0   , 0.0 , "")
	],
	
	startControlAnimation : function (layer) {
		this.mLayer = layer;
		this.mCallArray = Array.prototype.slice.call(CommonUtil.mPushIconNumArray);
		this.mMaxCallCount = this.mCallArray.length;
		this.mCallCount = 0;
	},

	startAnimation : function (nextAnimeInterval, sprite) {
	},

	getAnimeStatus : function (animeCount) {
		return this.animeStatus[animeCount];
	},

	endAnimation : function() {
		var callback = function () {
			var callCount = KamenRideControlSoundUtil.mCallCount;
			var maxCallCount = KamenRideControlSoundUtil.mMaxCallCount;
			var callArray = +(KamenRideControlSoundUtil.mCallArray[callCount]);
			var sprite = KamenRideControlSoundUtil.mLayer.mIconSprites[callArray];
			var animeSprite = KamenRideControlSoundUtil.mLayer.mAnimeSprites[callArray];
			
			cc.audioEngine.playEffect(sprite.getIconKamenSoundFileName(), false);
			CommonUtil.mLastPushIconNum = Icon_Number.ICON_DECADE;

			if (sprite.getOnOffFlg()) {
				sprite.stopAllActions();
				sprite.setOpacity(64);
				animeSprite.stopAllActions();
				animeSprite.setOpacity(255);
				animeSprite.setScale(DEFAULT_SPRITE_SCALE);
				animeSprite.setUserData(KamenRideControlSoundUtil.mLayer);
				animeSprite.runAction(AnimationUtil.iconSummonAnimation(animeSprite));
			}
			
			++KamenRideControlSoundUtil.mCallCount;
			++callCount;
			
			if (callCount >= maxCallCount) {
				KamenRideControlSoundUtil.mLayer.unscheduleAllCallbacks();
				for (i=0;i<Icon_Number.ICON_SUM;i++) {
					switch (KamenRideControlSoundUtil.mLayer.mIconSprites[i].getIconType()) {
					case Icon_Type.TYPE_NUMBER:
					case Icon_Type.TYPE_RIDER:
						KamenRideControlSoundUtil.mLayer.mIconSprites[i].setOnOffFlg(false);
						break;
					default:
						break;
					}
				}
				KamenRideControlSoundUtil.mLayer.scheduleOnce(function(){
					for (i=0;i<Icon_Number.ICON_SUM;i++) {
						switch (KamenRideControlSoundUtil.mLayer.mIconSprites[i].getIconType()) {
						case Icon_Type.TYPE_NUMBER:
						case Icon_Type.TYPE_RIDER:
							iconStatus = IconInfomation.getIconStatus(KamenRideControlSoundUtil.mLayer.mIconSprites[i].getIconNumber(), KamenRideControlSoundUtil.mLayer.mModeValue);
							KamenRideControlSoundUtil.mLayer.mAnimeSprites[i].setPosition(iconStatus.iconPosition);
							KamenRideControlSoundUtil.mLayer.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
							KamenRideControlSoundUtil.mLayer.mAnimeSprites[i].setOpacity(0);
							KamenRideControlSoundUtil.mLayer.mIconSprites[i].setOnOffFlg(false);
							break;
						default:
							break;
						}
					}
					ControlAnimationUtil.mControlAnimationListener = FinalRaidControlAnimationUtil;
					ControlAnimationUtil.startControlAnimation(KamenRideControlSoundUtil.mLayer);
				}, 0.5);
			}
			
		}
		KamenRideControlSoundUtil.mLayer.schedule(callback, 0.7);
	},

};

