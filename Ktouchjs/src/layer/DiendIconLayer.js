var DiendIconLayer = IconLayer.extend({

	mModeValue : Mode.DIEND,
	mPlaySpecialSound : res.effect_gekijoban_mp3,
	mArrayMaxCount : 8,

	setSpriteColor : function (iconSprite, animeSprite) {
		iconSprite.setColor(cc.color(0, 102, 255, 255));
		animeSprite.setColor(cc.color(0, 102, 255, 255));
	},

	setDecadeColor : function (iconSprite, animeSprite) {
	}
});