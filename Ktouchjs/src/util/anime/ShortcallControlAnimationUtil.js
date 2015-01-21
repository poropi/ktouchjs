var ShortcallControlAnimationUtil = {
	
	animeStatus : [
	               new AnimeStatus(Icon_Number.ICON_DECADE,  ANIME_PATTERN.FADE_IN_OUT, 0.1, 0.1, res.short_call_mp3),
	               new AnimeStatus(Icon_Number.ICON_DECADE,  ANIME_PATTERN.FADE_IN_OUT, 0.1, 0.1, ""),
	               new AnimeStatus(Icon_Number.ICON_DECADE,  ANIME_PATTERN.FADE_IN_OUT, 0.1, 0.1, ""),
	               new AnimeStatus(Icon_Number.ICON_FINAL,   ANIME_PATTERN.FADE_IN_OUT, 0.0 ,0.0, "")
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
			switch (ShortcallControlAnimationUtil.mLayer.mIconSprites[i].getIconType()) {
			case Icon_Type.TYPE_RIDER:
				ShortcallControlAnimationUtil.mLayer.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
				ShortcallControlAnimationUtil.mLayer.mIconSprites[i].setOnOffFlg(false);
				break;

			default:
				break;
			}
		}
		cc.audioEngine.playEffect(NumberSuccessDetail[ShortcallControlAnimationUtil.mLayer.getNumberString()], false);
		ShortcallControlAnimationUtil.mLayer.setNumberString("");
	},

};

