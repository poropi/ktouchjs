


var AttackRideControlSoundUtil = {
	
	mLayer : null,
	
	animeStatus : [
		new AnimeStatus(Icon_Number.ICON_CANCEL, ANIME_PATTERN.NONE, 0.5   , 0.0 , res.effect_attac_mp3),
		new AnimeStatus(Icon_Number.ICON_CANCEL, ANIME_PATTERN.NONE, 0.6   , 0.0 , res.effect_raido_mp3),
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
		cc.audioEngine.playEffect(AttackRideControlSoundUtil.mLayer.mPlaySpecialSound, false);
		this.mLayer.scheduleOnce(function(){
			ControlAnimationUtil.mControlAnimationListener = SpecialControlAnimationUtil;
			ControlAnimationUtil.startControlAnimation(AttackRideControlSoundUtil.mLayer);
		}, 1.0);
	},

};

