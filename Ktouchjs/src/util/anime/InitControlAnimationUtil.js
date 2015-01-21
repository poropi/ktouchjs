


var InitControlAnimationUtil = {
	
	animeStatus : [
	               new AnimeStatus(Icon_Number.ICON_KUUGA,  ANIME_PATTERN.FADE_IN_OUT, 0.0, 0.4, res.effect_opening_mp3),
	               new AnimeStatus(Icon_Number.ICON_AGITO,  ANIME_PATTERN.FADE_IN_OUT, 0.0, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI, ANIME_PATTERN.FADE_IN_OUT, 0.2, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,  ANIME_PATTERN.FADE_IN_OUT, 0.0, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO, ANIME_PATTERN.FADE_IN_OUT, 0.0, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,   ANIME_PATTERN.FADE_IN_OUT, 0.2, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,  ANIME_PATTERN.FADE_IN_OUT, 0.0, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI, ANIME_PATTERN.FADE_IN_OUT, 0.0, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,  ANIME_PATTERN.FADE_IN_OUT, 0.2, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,  ANIME_PATTERN.FADE_IN_OUT, 0.0, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,  ANIME_PATTERN.FADE_IN_OUT, 0.0, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI, ANIME_PATTERN.FADE_IN_OUT, 0.2, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,  ANIME_PATTERN.FADE_IN_OUT, 0.0, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO, ANIME_PATTERN.FADE_IN_OUT, 0.0, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,   ANIME_PATTERN.FADE_IN_OUT, 0.2, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,  ANIME_PATTERN.FADE_IN_OUT, 0.0, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI, ANIME_PATTERN.FADE_IN_OUT, 0.0, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,  ANIME_PATTERN.FADE_IN_OUT, 0.2, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_DECADE, ANIME_PATTERN.FADE_IN,     1.0, 0.5, ""),
	               new AnimeStatus(Icon_Number.ICON_DECADE, ANIME_PATTERN.FADE_OUT,    0.5, 0.5, ""),
	               new AnimeStatus(Icon_Number.ICON_FINAL,  ANIME_PATTERN.FADE_OUT,    0.0, 0.2, "")
	],
	
	mLayer : null,
	
	startControlAnimation : function (layer) {
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
		
		for (i = Icon_Number.ICON_KUUGA; i < Icon_Number.ICON_SUM; i++) {
			switch (this.mLayer.mIconSprites[i].getIconType()) {
			case Icon_Type.TYPE_NUMBER:
				this.mLayer.mIconSprites[i].setOpacity(255);
				this.mLayer.mIconSprites[i].setOnOffFlg(true);
				this.mLayer.mAnimeSprites[i].setOpacity(0);
				this.mLayer.mAnimeSprites[i].setScale(0.8);
				break;

			case Icon_Type.TYPE_RIDER:
				this.mLayer.mIconSprites[i].setOpacity(64);
				this.mLayer.mIconSprites[i].setOnOffFlg(true);
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
			switch (InitControlAnimationUtil.mLayer.mIconSprites[i].getIconType()) {
			case Icon_Type.TYPE_RIDER:
				InitControlAnimationUtil.mLayer.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				InitControlAnimationUtil.mLayer.mIconSprites[i].setOnOffFlg(false);
				break;

			default:
				break;
			}
		}
	},

};

