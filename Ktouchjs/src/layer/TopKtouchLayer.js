var TapSpriteTouchedListener = cc.Class.extend({
	
	onTapSpriteTouchBegan : function(sprite, touch, event) {
		
		var rootLayer = sprite.getUserData();
		
		if (rootLayer.mSceneId == 0) {

			switch (sprite.getTag()) {
			case 1001:
				if (rootLayer.mIconLayerId >= 2000 && rootLayer.mIconLayerId <= 2003) {
					var ccSpawn = cc.spawn(cc.scaleTo(0.1, 2.0), cc.moveTo(0.1, cc.p(-30, 20)));
					rootLayer.mSelectedIconLayer.startKtouch();
					rootLayer.runAction(ccSpawn);
					rootLayer.mBackgroundLayer.setVisible(false);
					
					rootLayer.mSceneId = 1;
					rootLayer.mSelectedIconLayer.mVisible = true;
				}

				break;

			case 1002:
				sprite.stopAllActions();
				sprite.setColor(cc.color(255, 255, 255, 255));
				sprite.setOpacity(255);

				childSplite = rootLayer.mStartSprite;

				childSplite.setColor(cc.color(0, 255, 255, 255));
				childSplite.runAction(AnimationUtil.iconBlinkAnimation(null));

				cc.audioEngine.playEffect(res.effect_touch_mp3, false);
				rootLayer.getChildByTag(1900).setVisible(false);

				rootLayer.mIconLayerId++;

				switch (rootLayer.mIconLayerId) {
				case 2000:
					rootLayer.mSelectedIconLayer = rootLayer.mDecadeIconLayer;
					rootLayer.mDecadeIconLayer.setVisible(true);
					rootLayer.mDiendIconLayer.setVisible(false);
					rootLayer.mShowaIconLayer.setVisible(false);
					rootLayer.mLegendIconLayer.setVisible(false);
					break;

				case 2001:
					rootLayer.mSelectedIconLayer = rootLayer.mDiendIconLayer;
					rootLayer.mDecadeIconLayer.setVisible(false);
					rootLayer.mDiendIconLayer.setVisible(true);
					rootLayer.mShowaIconLayer.setVisible(false);
					rootLayer.mLegendIconLayer.setVisible(false);
					break;

				case 2002:
					rootLayer.mSelectedIconLayer = rootLayer.mShowaIconLayer;
					rootLayer.mDecadeIconLayer.setVisible(false);
					rootLayer.mDiendIconLayer.setVisible(false);
					rootLayer.mShowaIconLayer.setVisible(true);
					rootLayer.mLegendIconLayer.setVisible(false);
					break;

				case 2003:
					rootLayer.mSelectedIconLayer = rootLayer.mLegendIconLayer;
					rootLayer.mDecadeIconLayer.setVisible(false);
					rootLayer.mDiendIconLayer.setVisible(false);
					rootLayer.mShowaIconLayer.setVisible(false);
					rootLayer.mLegendIconLayer.setVisible(true);
					break;

				default:
					rootLayer.mIconLayerId = 2000;
				rootLayer.mSelectedIconLayer = rootLayer.mDecadeIconLayer;
				rootLayer.mDecadeIconLayer.setVisible(true);
				rootLayer.mDiendIconLayer.setVisible(false);
				rootLayer.mShowaIconLayer.setVisible(false);
				rootLayer.mLegendIconLayer.setVisible(false);
				break;
				}

				break;

			case 1003:
				if (cc.audioEngine.isMusicPlaying()) {
					cc.audioEngine.stopMusic(res.decade_bgm_mp3);
				} else {
					cc.audioEngine.setMusicVolume(0.2);
					cc.audioEngine.playEffect(res.effect_cardin_mp3, false);
					cc.audioEngine.playMusic(res.decade_bgm_mp3, false);
				}

				break;

			case 1004:
				cc.audioEngine.playEffect(res.effect_touch_mp3, false);
				rootLayer.mIconLayerId = 1900;
				rootLayer.mDecadeIconLayer.setVisible(false);
				rootLayer.mDiendIconLayer.setVisible(false);
				rootLayer.mShowaIconLayer.setVisible(false);
				rootLayer.mLegendIconLayer.setVisible(false);
				rootLayer.mTitleLayer.setVisible(true);

				rootLayer.mStartSprite.stopAllActions();
				rootLayer.mStartSprite.setOpacity(255);
				rootLayer.mStartSprite.setColor(cc.color(255, 255, 255, 255));

				rootLayer.mSelectSprite.setColor(cc.color(0, 255, 255, 255));
				rootLayer.mSelectSprite.runAction(AnimationUtil.iconBlinkAnimation(null));
				break;

			default:
				break;
			}
			
		}
		
	},
	onTapSpriteTouchMoved : function(sprite, touch, event) {
		
	},
	onTapSpriteTouchEnded : function(sprite, touch, event) {},
	onTapSpriteTouchCancelled : function(sprite, touch, event) {}
});

var TopKtouchLayer = cc.LayerColor.extend({
	
	self : null,
	
	mSceneId : 0,

	BUTTON_TAG_START : 1001,
	BUTTON_TAG_SELECT : 1002,
	BUTTON_TAG_BGM : 1003,
	BUTTON_TAG_INFO : 1004,
	
	mSelectedIconLayer : null,

	mDecadeIconLayer : null,
	mDiendIconLayer : null,
	mShowaIconLayer : null,
	mLegendIconLayer : null,
	mNumberIconLayer : null,
	mTitleLayer : null,
	mBackgroundLayer : null,
	
	mStartSprite : null,
	mSelectSprite : null,
	mBgmSprite : null,
	mInfoSprite : null,
	
	mIconLayerId : 9999,

	ctor: function (color, width, height) {
		this._super(color, width, height);
		this.self = this;
		
		var windowSize = cc.director.getWinSize();;
		
		this.mBackgroundLayer = new BackgroundLayer();
		this.addChild(this.mBackgroundLayer, 0);
		
		this.mTitleLayer = new TitleLayer();
		this.addChild(this.mTitleLayer, 2);
		
		this.mDecadeIconLayer = new DecadeIconLayer();
		this.mDecadeIconLayer.setVisible(false);
		this.mDecadeIconLayer.setScale(0.5);
		this.mDecadeIconLayer.setPosition(15, -10);
		this.mDecadeIconLayer.setUserData(this);
		this.addChild(this.mDecadeIconLayer, 2, 2000);

		this.mDiendIconLayer = new DiendIconLayer();
		this.mDiendIconLayer.setVisible(false);
		this.mDiendIconLayer.setScale(0.5);
		this.mDiendIconLayer.setPosition(15, -10);
		this.mDiendIconLayer.setUserData(this);
		this.addChild(this.mDiendIconLayer, 2, 2001);
		
		this.mShowaIconLayer = new ShowaIconLayer();
		this.mShowaIconLayer.setVisible(false);
		this.mShowaIconLayer.setScale(0.5);
		this.mShowaIconLayer.setPosition(15, -10);
		this.mShowaIconLayer.setUserData(this);
		this.addChild(this.mShowaIconLayer, 2, 2002);

		this.mLegendIconLayer = new LegendIconLayer();
		this.mLegendIconLayer.setVisible(false);
		this.mLegendIconLayer.setScale(0.5);
		this.mLegendIconLayer.setPosition(15, -10);
		this.mLegendIconLayer.setUserData(this);
		this.addChild(this.mLegendIconLayer, 2, 2003);
		
		this.mStartSprite = new TapSprite(res.ktouch_start_png);
		this.mStartSprite.setTag(this.BUTTON_TAG_START)
		this.mStartSprite.setPosition(120, 265);
		this.mStartSprite.mOnTouchListener = new TapSpriteTouchedListener();
		this.mStartSprite.setUserData(this);
		this.addChild(this.mStartSprite);

		this.mSelectSprite = new TapSprite(res.ktouch_select_png);
		this.mSelectSprite.setTag(this.BUTTON_TAG_SELECT)
		this.mSelectSprite.setPosition(200, 265);
		this.mSelectSprite.mOnTouchListener = new TapSpriteTouchedListener();
		this.mSelectSprite.setColor(cc.color(0, 255, 255, 255));
		this.mSelectSprite.runAction(AnimationUtil.iconBlinkAnimation(null));
		this.mSelectSprite.setUserData(this);
		this.addChild(this.mSelectSprite);

		this.mBgmSprite = new TapSprite(res.ktouch_bgm_png);
		this.mBgmSprite.setTag(this.BUTTON_TAG_BGM)
		this.mBgmSprite.setPosition(280, 265);
		this.mBgmSprite.mOnTouchListener = new TapSpriteTouchedListener();
		this.mBgmSprite.setUserData(this);
		this.addChild(this.mBgmSprite);

		this.mInfoSprite = new TapSprite(res.ktouch_info_png);
		this.mInfoSprite.setTag(this.BUTTON_TAG_INFO)
		this.mInfoSprite.setPosition(360, 265);
		this.mInfoSprite.mOnTouchListener = new TapSpriteTouchedListener();
		this.mInfoSprite.setUserData(this);
		this.addChild(this.mInfoSprite);
		
		return true;
		
	},
	
});