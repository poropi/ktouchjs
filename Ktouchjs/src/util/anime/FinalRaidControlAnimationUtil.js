


var FinalRaidControlAnimationUtil = {
	
	animeStatus : [
	               new AnimeStatus(Icon_Number.ICON_FAIZU,       ANIME_PATTERN.FADE_IN,    0.0 , 0.2  , res.effect4_mp3),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,      ANIME_PATTERN.FADE_IN,    0.0 , 0.2  , ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,       ANIME_PATTERN.FADE_IN,    0.5 , 0.2  , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,       ANIME_PATTERN.FADE_IN,    0.0 , 0.2  , ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,      ANIME_PATTERN.FADE_IN,    0.0 , 0.2  , ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,        ANIME_PATTERN.FADE_IN,    0.5 , 0.2  , ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,       ANIME_PATTERN.FADE_IN,    0.0 , 0.2  , ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,       ANIME_PATTERN.FADE_IN,    0.0 , 0.2  , ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,      ANIME_PATTERN.FADE_IN,    0.5 , 0.2  , ""),
	               new AnimeStatus(Icon_Number.ICON_DECADE,      ANIME_PATTERN.FADE_OUT,   0.5 , 0.2  , ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,       ANIME_PATTERN.FADE_IN_OUT,0.0 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,      ANIME_PATTERN.FADE_IN_OUT,0.15 , 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,       ANIME_PATTERN.FADE_IN_OUT,0.0 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,        ANIME_PATTERN.FADE_IN_OUT,0.15 , 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,       ANIME_PATTERN.FADE_IN_OUT,0.0 , 0.4  , ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,       ANIME_PATTERN.FADE_IN_OUT,0.15 , 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,      ANIME_PATTERN.FADE_IN_OUT,0.15 , 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,      ANIME_PATTERN.FADE_IN_OUT,0.15 , 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,       ANIME_PATTERN.FADE_IN_OUT,0.15 , 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_DECADE,      ANIME_PATTERN.FADE_IN,    0.3 , 0.2  , ""),
	               new AnimeStatus(Icon_Number.ICON_DECADE,      ANIME_PATTERN.FADE_OUT,   0.2 , 0.2  , ""),
	               new AnimeStatus(Icon_Number.ICON_DECADE,      ANIME_PATTERN.FADE_IN,    0.6 , 0.2  , ""),
	               new AnimeStatus(Icon_Number.ICON_DECADE,      ANIME_PATTERN.FADE_OUT,   0.0 , 0.2  , ""),
	               new AnimeStatus(Icon_Number.ICON_FINAL,       ANIME_PATTERN.FADE_IN,    0.0 , 0.2  , "")
	],
	
	mLayer : null,
	
	startControlAnimation : function (layer) {
		this.mLayer = layer;
		CommonUtil.mTouchControlFlg = false;
		CommonUtil.mFinishAnimationFlg = true;
		CommonUtil.mDecadeAnimationFlg = true;
		CommonUtil.mLongTapSprite = Icon_Number.ICON_SUM;
	},

	startAnimation : function (nextAnimeInterval, sprite) {
	},

	getAnimeStatus : function (animeCount) {
		return this.animeStatus[animeCount];
	},

	endAnimation : function() {
		for (i = 0; i < Icon_Number.ICON_SUM; i++) {
			switch (FinalRaidControlAnimationUtil.mLayer.mIconSprites[i].getIconType()) {
			case Icon_Type.TYPE_RIDER:
				FinalRaidControlAnimationUtil.mLayer.mAnimeSprites[i].stopAllActions();
				FinalRaidControlAnimationUtil.mLayer.mAnimeSprites[i].setOpacity(255);
				FinalRaidControlAnimationUtil.mLayer.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				FinalRaidControlAnimationUtil.mLayer.mAnimeSprites[i].runAction(AnimationUtil.iconLedOnAnimation());
				FinalRaidControlAnimationUtil.mLayer.mIconSprites[i].setOnOffFlg(false);
				break;

			default:
				break;
			}
		}
		CommonUtil.mPushIconNumArray = "";
		CommonUtil.mSumPushIconCount = 0;
	},

};

