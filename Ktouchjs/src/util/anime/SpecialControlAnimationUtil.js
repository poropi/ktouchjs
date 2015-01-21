


var SpecialControlAnimationUtil = {
	
	animeStatus : [
	               new AnimeStatus(Icon_Number.ICON_KUUGA,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , res.effect_faizblasterSword_mp3),
	               new AnimeStatus(Icon_Number.ICON_AGITO,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,     ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,       ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,     ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,     ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,     ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,       ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,     ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,     ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,     ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,       ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,     ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,      ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,     ANIME_PATTERN.FADE_IN_OUT, 0.047, 0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,     ANIME_PATTERN.FADE_IN_OUT, 0.14,  0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,     ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,       ANIME_PATTERN.FADE_IN_OUT, 0.14,  0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,     ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,      ANIME_PATTERN.FADE_IN_OUT, 0.14,  0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,     ANIME_PATTERN.FADE_IN_OUT, 0.14,  0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,     ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,       ANIME_PATTERN.FADE_IN_OUT, 0.14,  0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,     ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,      ANIME_PATTERN.FADE_IN_OUT, 0.14,  0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,     ANIME_PATTERN.FADE_IN_OUT, 0.14,  0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,     ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,       ANIME_PATTERN.FADE_IN_OUT, 0.14,  0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,     ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,      ANIME_PATTERN.FADE_IN_OUT, 0.14,  0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,     ANIME_PATTERN.FADE_IN_OUT, 0.14,  0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_AGITO,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,     ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,       ANIME_PATTERN.FADE_IN_OUT, 0.14,  0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_KUUGA,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,      ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,     ANIME_PATTERN.FADE_IN_OUT, 0.0,   0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,      ANIME_PATTERN.FADE_IN_OUT, 0.14,  0.4 , ""),
	               new AnimeStatus(Icon_Number.ICON_FINAL,      ANIME_PATTERN.FADE_IN    , 0.0,   0.4 , "")
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
			switch (SpecialControlAnimationUtil.mLayer.mIconSprites[i].getIconType()) {
			case Icon_Type.TYPE_RIDER:
				SpecialControlAnimationUtil.mLayer.mAnimeSprites[i].stopAllActions();
				SpecialControlAnimationUtil.mLayer.mAnimeSprites[i].setOpacity(255);
				SpecialControlAnimationUtil.mLayer.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				SpecialControlAnimationUtil.mLayer.mAnimeSprites[i].runAction(AnimationUtil.iconLedOnAnimation());
				SpecialControlAnimationUtil.mLayer.mIconSprites[i].setOnOffFlg(false);
				break;

			default:
				break;
			}
		}
		CommonUtil.mCompleteFlg = false;
	},

};

