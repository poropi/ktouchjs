PushActionUtil = {
		
		mLayer : null,
		
		pushRiderAction : function(self, iconSprite, animeSprite) {
			if (!iconSprite.getOnOffFlg()) {
				if (iconSprite.getIconType() == Icon_Type.TYPE_RIDER) {
					for (var i=0; i<Icon_Number.ICON_SUM; ++i) {
						if (self.mIconSprites[i].getOnOffFlg()) {
							switch (self.mIconSprites[i].getIconType()) {
							case Icon_Type.TYPE_NUMBER:
							case Icon_Type.TYPE_RIDER:
								self.mIconSprites[i].stopAllActions();
								self.mIconSprites[i].setOpacity(64);
								break;
							}
						}
					}
					CommonUtil.mLastPushIconNum = iconSprite.getIconNumber();
					CommonUtil.mPushIconNumArray = "" + CommonUtil.mPushIconNumArray + CommonUtil.mLastPushIconNum.toString(10);
					CommonUtil.mSumPushIconCount++;
					cc.audioEngine.playEffect(res.effect_touch_mp3, false);
					if (iconSprite.getIconTouchSoundFileName() != "") {
						cc.audioEngine.playEffect(iconSprite.getIconTouchSoundFileName(), false);
					}
					cc.audioEngine.playEffect(res.effect2_mp3, false);
				}
				animeSprite.setOpacity(255);
				animeSprite.setScale(DEFAULT_SPRITE_SCALE);
				animeSprite.runAction(AnimationUtil.iconLedOnAnimation());
				iconSprite.setOnOffFlg(true);
				var callback = function() {
					for (var i=0; i<Icon_Number.ICON_SUM; ++i) {
						if (self.mIconSprites[i].getOnOffFlg()) {
							switch (self.mIconSprites[i].getIconType()) {
							case Icon_Type.TYPE_NUMBER:
							case Icon_Type.TYPE_RIDER:
								self.mIconSprites[i].stopAllActions();
								self.mIconSprites[i].setOpacity(64);
								self.mIconSprites[i].runAction(AnimationUtil.iconBlinkAnimation());
								break;
							}
						}
					}
				};

				if (CommonUtil.mSumPushIconCount >= self.mArrayMaxCount) {
					self.unscheduleAllCallbacks();
					CommonUtil.mTouchControlFlg = false;
					CommonUtil.mCallAnimationFinishFlg = true;
					self.mCallFlg = true;
					
					for (i=0;i<Icon_Number.ICON_SUM;i++) {
						switch (self.mIconSprites[i].getIconType()) {
						case Icon_Type.TYPE_NUMBER:
						case Icon_Type.TYPE_RIDER:

							self.mIconSprites[i].stopAllActions();
							self.mIconSprites[i].setOpacity(64);
							self.mIconSprites[i].setScale(DEFAULT_SPRITE_SCALE);
							self.mAnimeSprites[i].setOpacity(0);
							self.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
							break;

						case Icon_Type.TYPE_DECADE:
							self.mIconSprites[i].runAction(AnimationUtil.iconBlinkAnimation(new cc.Node()));
							break;

						default:
							break;
						}
					}

					self.scheduleOnce(function(){
						
						ControlAnimationUtil.mControlAnimationListener = CallControlAnimationUtil;
						ControlAnimationUtil.startControlAnimation(self);
						self.schedule(function(){

							ControlAnimationUtil.mControlAnimationListener = CallControlAnimationUtil;
							ControlAnimationUtil.startControlAnimation(self);
						}, 1.3);
					}, 0.3);
				} else {
					self.scheduleOnce(callback, 0.3);
				}
			}
		},
		
		pushDecadeAction : function(self, iconSprite, animeSprite) {
			CommonUtil.mCallAnimationFinishFlg = false;
			CommonUtil.mCompleteFlg = true;
			CommonUtil.mDecadeAnimationFlg = true;
			
			cc.audioEngine.playEffect(res.effect_touch_mp3, false);
			animeSprite.setOpacity(255);
			animeSprite.setScale(DEFAULT_SPRITE_SCALE);
			
			if (self.mCallFlg) {
				self.unscheduleAllCallbacks();
				iconSprite.stopAllActions();
				iconSprite.setOpacity(255);
				animeSprite.runAction(AnimationUtil.iconLedOnAnimation3());
				
				for (i=0;i<Icon_Number.ICON_SUM;i++) {
					switch (self.mIconSprites[i].getIconType()) {
					case Icon_Type.TYPE_NUMBER:
						self.mIconSprites[i].setOpacity(255);
						self.mIconSprites[i].setScale(0.8);
						self.mAnimeSprites[i].stopAllActions();
						self.mAnimeSprites[i].setOpacity(0);
						self.mAnimeSprites[i].setScale(0.8);
						break;
					case Icon_Type.TYPE_RIDER:
						self.mIconSprites[i].setOpacity(64);
						self.mIconSprites[i].setScale(DEFAULT_SPRITE_SCALE);
						self.mAnimeSprites[i].stopAllActions();
						self.mAnimeSprites[i].setOpacity(0);
						self.mAnimeSprites[i].setScale(DEFAULT_SPRITE_SCALE);
						break;
					default:
						break;
					}
				}
				
				cc.audioEngine.stopAllEffects();
				
				self.scheduleOnce(function(){
					ControlAnimationUtil.mControlAnimationListener = CompliteControlAnimationUtil;
					ControlAnimationUtil.startControlAnimation(self);
					self.scheduleOnce(function(){

						ControlSoundUtil.mControlSoundListener = FKamenControlSoundUtil;
						ControlSoundUtil.startControlAnimation(self);
					}, 0.5);

				}, 0.0);
			} else {
				CommonUtil.mDecadeAnimationFlg = false;
				animeSprite.runAction(AnimationUtil.iconLedOnAnimation());

			}
		},
		pushFinalAction : function(self, iconSprite, animeSprite) {
			self.mCallFlg = false;
			CommonUtil.mCallAnimationFinishFlg = false;
			CommonUtil.mFinishAnimationFlg = true;
			
			animeSprite.setOpacity(255);
			animeSprite.setScale(DEFAULT_SPRITE_SCALE);
			animeSprite.runAction(AnimationUtil.iconLedOnAnimation());
			
			if (CommonUtil.mPushIconNumArray.length > 0) {
				self.unscheduleAllCallbacks();
				CommonUtil.mTouchControlFlg = false;
				CommonUtil.mCompleteFlg = false;
				
				for (i=0;i<Icon_Number.ICON_SUM;i++) {
					if (self.mIconSprites[i].getOnOffFlg()) {
						switch (self.mIconSprites[i].getIconType()) {
						case Icon_Type.TYPE_NUMBER:
							self.mIconSprites[i].stopAllActions();
							self.mIconSprites[i].setOpacity(255);
							self.mIconSprites[i].setScale(0.8);
							self.mIconSprites[i].runAction(AnimationUtil.iconFlipAnimation1(new cc.Node()));
							break;
						case Icon_Type.TYPE_RIDER:
							self.mIconSprites[i].stopAllActions();
							self.mIconSprites[i].setOpacity(255);
							self.mIconSprites[i].setScale(DEFAULT_SPRITE_SCALE);
							self.mIconSprites[i].runAction(AnimationUtil.iconFlipAnimation1(new cc.Node()));
							break;
						case Icon_Type.TYPE_DECADE:
							self.mIconSprites[i].stopAllActions();
							self.mIconSprites[i].setOpacity(255);
							break;
						default:
							break;
						}
					}
				}
				cc.audioEngine.playEffect(res.effect3_mp3, false);
				self.scheduleOnce(function(){
					ControlSoundUtil.mControlSoundListener = KamenRideControlSoundUtil;
					ControlSoundUtil.startControlAnimation(self);
				}, 0.5);
			} else {
				if (CommonUtil.mCompleteFlg) {
					CommonUtil.mTouchControlFlg = false;
					cc.audioEngine.playEffect(res.effect_cardin_mp3, false);
					self.scheduleOnce(function(){
						ControlSoundUtil.mControlSoundListener = AttackRideControlSoundUtil;
						ControlSoundUtil.startControlAnimation(self);
					}, 0.5);
				} else {
					cc.audioEngine.playEffect(res.effect_touch_mp3, false);
					CommonUtil.mFinishAnimationFlg = false;
				}
			}
		},
		pushCancelAction : function(self, iconSprite, animeSprite) {
			cc.audioEngine.playEffect(res.effect_touch_mp3, false);
			
			ControlAnimationUtil.mControlAnimationListener = CancelFinishControlAnimationUtil;
			ControlAnimationUtil.startControlAnimation(self);
			
		},
		longPushAction : function() {
			CommonUtil.mCallAnimationFinishFlg = true;
			CommonUtil.mDecadeAnimationFlg = true;
			CommonUtil.mTouchControlFlg = false;
			
			PushActionUtil.mLayer.mAnimeSprites[CommonUtil.mLongTapSprite].setOpacity(255);
			PushActionUtil.mLayer.mAnimeSprites[CommonUtil.mLongTapSprite].runAction(AnimationUtil.iconLedOnAnimation3());
			cc.audioEngine.playEffect(res.effect_cardin_mp3, false);

			PushActionUtil.mLayer.mAnimeSprites[0].getUserData().scheduleOnce(function(){
				ControlSoundUtil.mControlSoundListener = FAttackControlSoundUtil;
				ControlSoundUtil.startControlAnimation(PushActionUtil.mLayer.mAnimeSprites[0].getUserData());
			}, 0.6);
		}
}