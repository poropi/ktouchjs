var IconLayer = cc.LayerColor.extend({
	
	mNumberString : "",
	mModeValue : Mode.DECADE,
	mCallFlg : false,
	mPlaySpecialSound : "",
	mArrayMaxCount : 9,
	self : null,
	mAnimeSprites : null,
	mIconSprites : null,
	mDummySprites : null,
	
	mVisible : null,

	ctor: function (color, width, height) {
		this._super(color, width, height);
		this.self = this;
		
		this.mAnimeSprites = new Object();
		this.mIconSprites = new Object();
		this.mDummySprites = [];
		
		this.mVisible = false;
		
		CommonUtil.mLastPushIconNum = Icon_Number.ICON_DECADE;
		CommonUtil.mSumPushIconCount = 0;
		CommonUtil.mPushIconNumArray = "";
		this.mNumberString = "";
		
		CommonUtil.mCallIconCount = 0;
		CommonUtil.mCompleteFlg = false;
		CommonUtil.mCallAnimationFinishFlg = false;
		CommonUtil.mTouchControlFlg = false;
		
//		this.removeAllChildren(true);
		
		iconStatus = new IconStatus(0, 0, 0, 0, 0, 0, 0, 0);
		for (i = Icon_Number.ICON_KUUGA; i < Icon_Number.ICON_SUM; i++) {
			iconStatus = IconInfomation.getIconStatus(i, this.mModeValue);

			this.mIconSprites[i]  = new IconSprite(iconStatus.iconNormalFileName);
			this.mAnimeSprites[i] = new IconSprite(iconStatus.iconNormalFileName);
			
			this.mIconSprites[i].setPosition(iconStatus.iconPosition);
			this.mIconSprites[i].setOnOffFlg(true);
			this.mIconSprites[i].setScale(DEFAULT_SPRITE_SCALE);
			this.mIconSprites[i].setIconTouchSoundFileName(iconStatus.iconTouchSoundFileName);
			this.mIconSprites[i].setIconKamenSoundFileName(iconStatus.iconKamenSoundFileName);
			this.mIconSprites[i].setIconFinalSoundFileName(iconStatus.iconFinalSoundFileName);
			this.mIconSprites[i].setIconType(iconStatus.iconType);
			this.mIconSprites[i].setIconNumber(iconStatus.iconNumber);
			this.mIconSprites[i].setUserData(this);

			this.mAnimeSprites[i].setPosition(iconStatus.iconPosition);
			this.mAnimeSprites[i].setIconNumber(iconStatus.iconNumber);
			this.mAnimeSprites[i].setIconType(iconStatus.iconType);
			this.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
			this.mAnimeSprites[i].setUserData(this);
			this.mAnimeSprites[i].setOpacity(0);

			switch (iconStatus.iconType) {
			case Icon_Type.TYPE_RIDER:
				this.mIconSprites[i].setOpacity(64);
				this.setSpriteColor(this.mIconSprites[i], this.mAnimeSprites[i]);
				this.mAnimeSprites[i].setOpacity(100);
				break;
			case Icon_Type.TYPE_DECADE:
				this.setDecadeColor(this.mIconSprites[i], this.mAnimeSprites[i]);
				break;
			case Icon_Type.TYPE_NUMBER:
			case Icon_Type.TYPE_ZERO:
			case Icon_Type.TYPE_ENTER:
			case Icon_Type.TYPE_X:
				this.mIconSprites[i].setOpacity(255);
				this.mIconSprites[i].setScale(0.8);
				this.mIconSprites[i].setRotation(90);
				this.mAnimeSprites[i].setScale(0.8);
				this.mAnimeSprites[i].setRotation(90);
				this.setSpriteColor(this.mIconSprites[i], this.mAnimeSprites[i]);
				break;
			default:
				break;
			}
			
//			this.mDummySprites[i] = new cc.Sprite();
//			this.mDummySprites[i].setTextureRect(this.mIconSprites[i].getBoundingBox());
//			this.mDummySprites[i].setColor(cc.color(255, 255, 255, 255));
//			this.mDummySprites[i].setPosition(iconStatus.iconPosition);
//			this.mDummySprites[i].setZOrder(5);
//			this.addChild(this.mDummySprites[i]);

			this.addChild(this.mIconSprites[i]);
			this.addChild(this.mAnimeSprites[i]);
		}

		// タッチイベント実装
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ALL_AT_ONCE,
			onTouchesBegan: IconTouchUtil.onTouchesBegan,
			onTouchesMoved: IconTouchUtil.onTouchesMoved,
			onTouchesEnded: IconTouchUtil.onTouchesEnded,
			onTouchesCancelled: IconTouchUtil.onTouchesCancelled
		}, this);

		return true;
	},
	
	setSpriteColor : function (iconSprite, animeSprite) {
	},
	
	setDecadeColor : function (iconSprite, animeSprite) {
	},
	
	startKtouch : function () {
		for (i = Icon_Number.ICON_KUUGA; i < Icon_Number.ICON_DECADE; i++) {
			this.mIconSprites[i].setOpacity(64);
		}
		CommonUtil.mLastPushIconNum = Icon_Number.ICON_DECADE;
		CommonUtil.mSumPushIconCount = 0;
		CommonUtil.mPushIconNumArray = "";
		this.mNumberString = "";
		CommonUtil.mCallIconCount = 0;
		CommonUtil.mCompleteFlg = false;
		CommonUtil.mCallAnimationFinishFlg = false;
		CommonUtil.mTouchControlFlg = false;

		ControlAnimationUtil.mControlAnimationListener = InitControlAnimationUtil;
		ControlAnimationUtil.startControlAnimation(this.self);
	},
	
	endKtouch : function () {
		var rootLayer = new cc.Layer();
		rootLayer = this.getUserData();
		for (i = Icon_Number.ICON_KUUGA; i < Icon_Number.ICON_DECADE; i++) {
			this.mAnimeSprites[i].stopAllActions();
			this.mIconSprites[i].setOpacity(100);
		}

		CommonUtil.mLastPushIconNum = Icon_Number.ICON_DECADE;
		CommonUtil.mSumPushIconCount = 0;
		CommonUtil.mPushIconNumArray = "";
		this.mNumberString = "";
		CommonUtil.mCallIconCount = 0;
		CommonUtil.mCompleteFlg = false;
		CommonUtil.mCallAnimationFinishFlg = false;
		CommonUtil.mTouchControlFlg = false;

		cc.audioEngine.playEffect(res.pull_mp3, false);
		this.mVisible = false;
		
		var ccSpawn = cc.spawn(cc.scaleTo(0.1, 1.0), cc.moveTo(0.1, cc.p(0, 0)));
		rootLayer.runAction(ccSpawn);
		rootLayer.mSceneId = 0;
		rootLayer.mBackgroundLayer.setVisible(true);

	}
});