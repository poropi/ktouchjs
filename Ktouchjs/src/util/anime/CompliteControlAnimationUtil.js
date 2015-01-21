


var CompliteControlAnimationUtil = {
	
	animeStatus : [
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,     ANIME_PATTERN.FADE_IN,     0.1 , 0.2   , res.effect_finalform1_mp3),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,     ANIME_PATTERN.FADE_IN,     0.1 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,      ANIME_PATTERN.FADE_IN,     0.1 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,      ANIME_PATTERN.FADE_IN,     0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,      ANIME_PATTERN.FADE_IN,     0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,      ANIME_PATTERN.FADE_IN,     0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,     ANIME_PATTERN.FADE_IN,     0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,       ANIME_PATTERN.FADE_IN,     0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,      ANIME_PATTERN.FADE_IN,     1.8 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,     ANIME_PATTERN.FADE_OUT,    0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,     ANIME_PATTERN.FADE_OUT,    0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,      ANIME_PATTERN.FADE_OUT,    0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,      ANIME_PATTERN.FADE_OUT,    0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,      ANIME_PATTERN.FADE_OUT,    0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,      ANIME_PATTERN.FADE_OUT,    0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,     ANIME_PATTERN.FADE_OUT,    0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,       ANIME_PATTERN.FADE_OUT,    0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,      ANIME_PATTERN.FADE_OUT,    0.5 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,      ANIME_PATTERN.FADE_IN_OUT, 0.0 , 0.4   , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,      ANIME_PATTERN.FADE_IN_OUT, 0.0 , 0.4   , ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,      ANIME_PATTERN.FADE_IN_OUT, 0.15 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,      ANIME_PATTERN.FADE_IN_OUT, 0.0 , 0.4   , ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,     ANIME_PATTERN.FADE_IN_OUT, 0.0 , 0.4   , ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,     ANIME_PATTERN.FADE_IN_OUT, 0.15 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,     ANIME_PATTERN.FADE_IN_OUT, 0.0 , 0.4   , ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,       ANIME_PATTERN.FADE_IN_OUT, 0.0 , 0.4   , ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,      ANIME_PATTERN.FADE_IN_OUT, 0.15 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,      ANIME_PATTERN.FADE_IN_OUT, 0.0 , 0.4   , ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,     ANIME_PATTERN.FADE_IN_OUT, 0.0 , 0.4   , ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,     ANIME_PATTERN.FADE_IN_OUT, 0.15 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,      ANIME_PATTERN.FADE_IN_OUT, 0.0 , 0.4   , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,      ANIME_PATTERN.FADE_IN_OUT, 0.0 , 0.4   , ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,      ANIME_PATTERN.FADE_IN_OUT, 0.15 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,     ANIME_PATTERN.FADE_IN_OUT, 0.2 , 0.4   , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,      ANIME_PATTERN.FADE_IN_OUT, 0.15 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,      ANIME_PATTERN.FADE_IN_OUT, 0.15 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,     ANIME_PATTERN.FADE_IN_OUT, 0.15 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,      ANIME_PATTERN.FADE_IN_OUT, 0.15 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,       ANIME_PATTERN.FADE_IN_OUT, 0.15 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,     ANIME_PATTERN.FADE_IN_OUT, 0.15 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,      ANIME_PATTERN.FADE_IN_OUT, 0.15 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,      ANIME_PATTERN.FADE_IN_OUT, 0.15 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_DECADE,     ANIME_PATTERN.FADE_IN,     0.3 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_DECADE,     ANIME_PATTERN.FADE_OUT,    0.2 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_DECADE,     ANIME_PATTERN.FADE_IN,     0.5 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_DECADE,     ANIME_PATTERN.FADE_OUT,    0.0 , 0.2   , ""),
	               new AnimeStatus(Icon_Number.ICON_FINAL,      ANIME_PATTERN.FADE_IN    , 0.0 , 0.2   , "")
	],
	
	mLayer : "",
	
	startControlAnimation : function (layer) {
		CommonUtil.mTouchControlFlg = false;
		CommonUtil.mFinishAnimationFlg = true;
		CommonUtil.mDecadeAnimationFlg = true;
		CommonUtil.mLongTapSprite = 0;
		this.mLayer = layer;
	},

	startAnimation : function (nextAnimeInterval, sprite) {
	},

	getAnimeStatus : function (animeCount) {
		return this.animeStatus[animeCount];
	},

	endAnimation : function() {
		for (i = 0; i < Icon_Number.ICON_SUM; i++) {
			switch (CompliteControlAnimationUtil.mLayer.mIconSprites[i].getIconType()) {
			case Icon_Type.TYPE_RIDER:
				CompliteControlAnimationUtil.mLayer.mAnimeSprites[i].stopAllActions();
				CompliteControlAnimationUtil.mLayer.mAnimeSprites[i].setOpacity(255);
				CompliteControlAnimationUtil.mLayer.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				CompliteControlAnimationUtil.mLayer.mAnimeSprites[i].runAction(AnimationUtil.iconLedOnAnimation());
				CompliteControlAnimationUtil.mLayer.mIconSprites[i].setOnOffFlg(false);
				break;

			default:
				break;
			}
		}
		CommonUtil.mCompleteFlg = true;
		CommonUtil.mPushIconNumArray = "";
		CommonUtil.mSumPushIconCount = 0;
		CompliteControlAnimationUtil.mLayer.mCallFlg = false;
		
	},

};

