


var FKamenControlSoundUtil = {
	
	mLayer : null,
	
	animeStatus : [
		new AnimeStatus(Icon_Number.ICON_CANCEL, ANIME_PATTERN.NONE, 0.5   , 0.0 , res.effect_final_mp3),
		new AnimeStatus(Icon_Number.ICON_CANCEL, ANIME_PATTERN.NONE, 0.5   , 0.0 , res.effect_kamen_mp3),
		new AnimeStatus(Icon_Number.ICON_CANCEL, ANIME_PATTERN.NONE, 0.7   , 0.0 , res.effect_raido_mp3),
		new AnimeStatus(Icon_Number.ICON_FINAL,  ANIME_PATTERN.NONE, 0.0   , 0.0 , "")
	],
	
	startControlAnimation : function (layer) {
		this.mLayer = layer;
	},

	startAnimation : function (nextAnimeInterval, sprite) {
	},

	getAnimeStatus : function (animeCount) {
		return this.animeStatus[animeCount];
	},

	endAnimation : function() {
		cc.audioEngine.playEffect(FKamenControlSoundUtil.mLayer.mIconSprites[Icon_Number.ICON_DECADE].getIconTouchSoundFileName(), false);
		FKamenControlSoundUtil.mLayer.scheduleOnce(function(){
			cc.audioEngine.playEffect(res.effect_finalform2_mp3, false);
		}, 0.5);
	},

};

