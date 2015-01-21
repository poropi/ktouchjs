var ShowaIconLayer = IconLayer.extend({

	mModeValue : Mode.SHOWA1,
	mPlaySpecialSound : res.effect_terebikun_mp3,
	mArrayMaxCount : 9,

	setSpriteColor : function (iconSprite, animeSprite) {
		iconSprite.setColor(cc.color(255,127,0,0));
		animeSprite.setColor(cc.color(255,127,0,0));
	},

	setDecadeColor : function (iconSprite, animeSprite) {
		iconSprite.setColor(cc.color(255,127,0,0));
		animeSprite.setColor(cc.color(255,127,0,0));
	}
});