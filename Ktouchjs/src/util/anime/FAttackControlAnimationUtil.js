


var FAttackControlAnimationUtil = {
	
	animeStatus : [
		new AnimeStatus(Icon_Number.ICON_KUUGA,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , res.effect_faizblaster_mp3),
		new AnimeStatus(Icon_Number.ICON_AGITO,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_RYUUKI,   ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_BRADE,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KABUTO,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KIBA,     ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_FAIZU,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_HIBIKI,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_DENOH,    ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KUUGA,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_AGITO,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_RYUUKI,   ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_BRADE,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KABUTO,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KIBA,     ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_FAIZU,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_HIBIKI,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_DENOH,    ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KUUGA,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_AGITO,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_RYUUKI,   ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_BRADE,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KABUTO,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KIBA,     ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_FAIZU,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_HIBIKI,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_DENOH,    ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KABUTO,   ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_AGITO,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_BRADE,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_HIBIKI,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KIBA,     ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KUUGA,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_FAIZU,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_RYUUKI,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_DENOH,    ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KABUTO,   ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_AGITO,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_BRADE,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_HIBIKI,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KIBA,     ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KUUGA,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_FAIZU,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_RYUUKI,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_DENOH,    ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KABUTO,   ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_AGITO,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_BRADE,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_HIBIKI,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KIBA,     ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KUUGA,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_FAIZU,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_RYUUKI,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_DENOH,    ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KABUTO,   ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_AGITO,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_BRADE,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_HIBIKI,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KIBA,     ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_KUUGA,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_FAIZU,    ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_RYUUKI,   ANIME_PATTERN.FADE_IN_OUT, 0.0   , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_DENOH,    ANIME_PATTERN.FADE_IN_OUT, 0.14  , 0.4 , ""),
		new AnimeStatus(Icon_Number.ICON_FINAL,    ANIME_PATTERN.FADE_IN    , 0.0   , 0.4 , "")
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
		for (i = 0; i < Icon_Number.ICON_SUM; i++) {
			switch (this.mLayer.mIconSprites[i].getIconType()) {
			case Icon_Type.TYPE_RIDER:
				this.mLayer.mIconSprites[i].setOpacity(64);
				this.mLayer.mIconSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				this.mLayer.mIconSprites[i].setOnOffFlg(false);
				this.mLayer.mIconSprites[i].stopAllActions();
				this.mLayer.mAnimeSprites[i].stopAllActions();
				this.mLayer.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				this.mLayer.mAnimeSprites[i].setOpacity(0);
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
			switch (FAttackControlAnimationUtil.mLayer.mIconSprites[i].getIconType()) {
			case Icon_Type.TYPE_RIDER:
				FAttackControlAnimationUtil.mLayer.mAnimeSprites[i].stopAllActions();
				FAttackControlAnimationUtil.mLayer.mAnimeSprites[i].setOpacity(255);
				FAttackControlAnimationUtil.mLayer.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				FAttackControlAnimationUtil.mLayer.mAnimeSprites[i].runAction(AnimationUtil.iconLedOnAnimation());
				FAttackControlAnimationUtil.mLayer.mIconSprites[i].setOnOffFlg(false);
				break;

			default:
				break;
			}
		}
	},

};

