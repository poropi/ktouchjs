var BackgroundLayer = cc.LayerColor.extend({

	self : null,

	ctor: function (color, width, height) {
		this._super(color, width, height);
		this.self = this;

		var size = cc.director.getWinSize();
		
		var backgroundSprite = new cc.Sprite(res.ktouch_background_png);
		backgroundSprite.setPosition(size.width / 1.9, size.height / 2.0);
		backgroundSprite.setScale(1.4);
		this.addChild(backgroundSprite);
		
		this.setTag(100);
		
		return true;
	},

});