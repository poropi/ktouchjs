var IconSprite = cc.Sprite.extend({
	self : null,
	mOnOffFlg : false,
	mIconNumber : 0,
	mAnimationStatus : 0,
	mIconType : 0,
	mIconTouchSoundFileName : "",
	mIconKamenSoundFileName : "",
	mIconFinalSoundFileName : "",
	
	ctor: function (fileName, rect, rotated) {
		this.self = this;
		
		this._super(fileName, rect, rotated);
		
		this.mOnOffFlg = false;
		
		return true;
	},
	
	getOnOffFlg : function () {
		return this.mOnOffFlg;
	},
	
	setOnOffFlg : function (onOffFlg) {
		this.mOnOffFlg = onOffFlg;
	},
	
	getIconNumber : function () {
		return this.mIconNumber;
	},
	
	setIconNumber : function (iconNumber) {
		this.mIconNumber = iconNumber;
	},

	getIconType : function () {
		return this.mIconType;
	},

	setIconType : function (iconType) {
		this.mIconType = iconType;
	},

	getIconTouchSoundFileName : function () {
		return this.mIconTouchSoundFileName;
	},

	setIconTouchSoundFileName : function (iconTouchSoundFileName) {
		this.mIconTouchSoundFileName = iconTouchSoundFileName;
	},

	getIconKamenSoundFileName : function () {
		return this.mIconKamenSoundFileName;
	},

	setIconKamenSoundFileName : function (iconKamenSoundFileName) {
		this.mIconKamenSoundFileName = iconKamenSoundFileName;
	},

	getIconFinalSoundFileName : function () {
		return this.mIconFinalSoundFileName;
	},

	setIconFinalSoundFileName : function (iconFinalSoundFileName) {
		this.mIconFinalSoundFileName = iconFinalSoundFileName;
	},

});
