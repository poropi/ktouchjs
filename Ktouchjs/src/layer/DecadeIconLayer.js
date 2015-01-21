var DecadeIconLayer = IconLayer.extend({

	mModeValue : Mode.DECADE,
	mPlaySpecialSound : res.effect_terebikun_mp3,
	mArrayMaxCount : 9,

	setSpriteColor : function (iconSprite, animeSprite) {
		iconSprite.setColor(cc.color(255, 0, 0, 255));
		animeSprite.setColor(cc.color(255, 0, 0, 255));
	},

	setDecadeColor : function (iconSprite, animeSprite) {
	}

});