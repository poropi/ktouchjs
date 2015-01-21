


var CallControlAnimationUtil = {
		
	mLayer : null,
	
	animeStatus : [
	               new AnimeStatus(Icon_Number.ICON_KUUGA,   ANIME_PATTERN.FADE_IN_OUT, 0.10, 0.4, res.effect_call_mp3),
	               new AnimeStatus(Icon_Number.ICON_AGITO,   ANIME_PATTERN.FADE_IN_OUT, 0.10, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_RYUUKI,  ANIME_PATTERN.FADE_IN_OUT, 0.10, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_KIBA,    ANIME_PATTERN.FADE_IN_OUT, 0.10, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_DENOH,   ANIME_PATTERN.FADE_IN_OUT, 0.10, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_HIBIKI,  ANIME_PATTERN.FADE_IN_OUT, 0.10, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_FAIZU,   ANIME_PATTERN.FADE_IN_OUT, 0.10, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_BRADE,   ANIME_PATTERN.FADE_IN_OUT, 0.10, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_KABUTO,  ANIME_PATTERN.FADE_IN_OUT, 0.10, 0.4, ""),
	               new AnimeStatus(Icon_Number.ICON_FINAL,   ANIME_PATTERN.FADE_IN_OUT, 0.0 , 0.0, "")
	],
	
	startControlAnimation : function (layer) {
		CommonUtil.mTouchControlFlg = false;
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
			switch (CallControlAnimationUtil.mLayer.mIconSprites[i].getIconType()) {
			case Icon_Type.TYPE_RIDER:
				CallControlAnimationUtil.mLayer.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				break;

			default:
				break;
			}
		}
	},

};

