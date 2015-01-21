var TitleLayer = cc.LayerColor.extend({

	self : null,

	ctor: function (color, width, height) {
		this._super(color, width, height);
		this.self = this;

		var size = cc.director.getWinSize();;
		
		var titleText = new cc.LabelBMFont("K-Touch for X", res.arial48_fnt);
		titleText.setPosition(size.width / 2.0, 300);
		this.addChild(titleText);
		
		var devName = new cc.LabelBMFont("Developer : Poropi", res.arial24_fnt);
		devName.setAnchorPoint(0, 0.5);
		devName.setPosition(120, 260);
		this.addChild(devName);
		
		var mailAddress = new cc.LabelBMFont("gporopi@yahoo.co.jp", res.arial24_fnt);
		mailAddress.setAnchorPoint(0, 0.5);
		mailAddress.setPosition(120, 220);
		this.addChild(mailAddress);

		var selectText = new cc.LabelBMFont("[SELECT] Select Rider K-touch", res.arial24_fnt);
		selectText.setAnchorPoint(0, 0.5);
		selectText.setPosition(20, 160);
		this.addChild(selectText);

		var startText = new cc.LabelBMFont("[START] Start Rider K-Touch", res.arial24_fnt);
		startText.setAnchorPoint(0, 0.5);
		startText.setPosition(20, 120);
		this.addChild(startText);

		var bgmText = new cc.LabelBMFont("[BGM] \"Final attack ride\" play music", res.arial24_fnt);
		bgmText.setAnchorPoint(0, 0.5);
		bgmText.setPosition(20, 80);
		this.addChild(bgmText);

		var versionText = new cc.LabelBMFont("Version 1.0.0", res.arial24_fnt);
		versionText.setPosition(size.width / 2, 14);
		this.addChild(versionText);

		this.setTag(1900);
		this.setVisible(true);
		this.setScale(0.5);
		this.setPosition(15, -10);
		
		return true;
	},

});