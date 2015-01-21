var CancelFinishControlAnimationUtil = {
		
	mLayer : null,
	
	animeStatus : [
	               new AnimeStatus(Icon_Number.ICON_DECADE,  ANIME_PATTERN.FADE_IN,  2.5, 0.5, res.effect_cancel_mp3),
	               new AnimeStatus(Icon_Number.ICON_DECADE,  ANIME_PATTERN.FADE_OUT, 0.5, 0.5, ""),
	               new AnimeStatus(Icon_Number.ICON_FINAL,   ANIME_PATTERN.FADE_IN_OUT, 0.0 ,0.0, "")
	],
	
	startControlAnimation : function (layer) {
		layer.unscheduleAllCallbacks();
		this.mLayer = layer;
		CommonUtil.mLastPushIconNum = Icon_Number.ICON_DECADE;
		CommonUtil.mSumPushIconCount = 0;
		CommonUtil.mPushIconNumArray = "";
		CommonUtil.mTouchControlFlg = false;
		CommonUtil.mFinishAnimationFlg = true;
		CommonUtil.mDecadeAnimationFlg = true;
		CommonUtil.mLongTapSprite = Icon_Number.ICON_SUM;
		CommonUtil.mCallAnimationFinishFlg = false;
		layer.mCallFlg = false;
		CommonUtil.mCompleteFlg = false;

		for (i=0;i<Icon_Number.ICON_SUM;i++) {
			switch (this.mLayer.mIconSprites[i].getIconType()) {
			case Icon_Type.TYPE_NUMBER:
				iconStatus = IconInfomation.getIconStatus(this.mLayer.mIconSprites[i].getIconNumber(), CancelFinishControlAnimationUtil.mLayer.mModeValue);
				this.mLayer.mIconSprites[i].stopAllActions();
				this.mLayer.mIconSprites[i].setOpacity(255);
				this.mLayer.mIconSprites[i].setOnOffFlg(true);
				this.mLayer.mIconSprites[i].setScale(0.8);
				this.mLayer.mAnimeSprites[i].setPosition(iconStatus.iconPosition);
				this.mLayer.mAnimeSprites[i].stopAllActions();
				this.mLayer.mAnimeSprites[i].setOpacity(0);
				this.mLayer.mAnimeSprites[i].setScale(0.8);
				break;

			case Icon_Type.TYPE_RIDER:
				iconStatus = IconInfomation.getIconStatus(this.mLayer.mIconSprites[i].getIconNumber(), CancelFinishControlAnimationUtil.mLayer.mModeValue);
				this.mLayer.mIconSprites[i].stopAllActions();
				this.mLayer.mIconSprites[i].setOpacity(64);
				this.mLayer.mIconSprites[i].setOnOffFlg(true);
				this.mLayer.mIconSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				this.mLayer.mAnimeSprites[i].setPosition(iconStatus.iconPosition);
				this.mLayer.mAnimeSprites[i].stopAllActions();
				this.mLayer.mAnimeSprites[i].setOpacity(0);
				this.mLayer.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				break;

			case Icon_Type.TYPE_DECADE:
				this.mLayer.mIconSprites[i].stopAllActions();
				this.mLayer.mIconSprites[i].setOpacity(255);
				this.mLayer.mIconSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				this.mLayer.mAnimeSprites[i].stopAllActions();
				this.mLayer.mAnimeSprites[i].setOpacity(0);
				this.mLayer.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				break;

			default:
				break;
			}
		}
	},

	startAnimation : function (nextAnimeInterval, sprite) {
	},

	getAnimeStatus : function (animeCount) {
		return this.animeStatus[animeCount];
	},

	endAnimation : function() {
		for (i = 0; i < Icon_Number.ICON_SUM; i++) {
			switch (CancelFinishControlAnimationUtil.mLayer.mIconSprites[i].getIconType()) {
			case Icon_Type.TYPE_RIDER:
				CancelFinishControlAnimationUtil.mLayer.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				CancelFinishControlAnimationUtil.mLayer.mIconSprites[i].setOnOffFlg(false);
				break;

			default:
				break;
			}
		}
		CommonUtil.mTouchControlFlg = true;
		CommonUtil.mFinishAnimationFlg = false;
		CommonUtil.mDecadeAnimationFlg = false;
		CancelFinishControlAnimationUtil.mLayer.mNumberString = "";
	},

};

