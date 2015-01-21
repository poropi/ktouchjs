IconTouchUtil = {
		
		onTouchesBegan : function (touches, event) {
			
			var self = event.getCurrentTarget();

			if (self.mVisible) {
				for (var iTouchCount = 0; iTouchCount < touches.length; iTouchCount++ ) {
					var point = touches[iTouchCount].getLocation();

					for (var i = Icon_Number.ICON_KUUGA; i < Icon_Number.ICON_SUM; i++) {
						if (IconTouchUtil.isTouchOnIcon(point, self.mIconSprites[i])) {
							switch (self.mIconSprites[i].getIconType()) {
							case Icon_Type.TYPE_RIDER:

								if (!CommonUtil.mDecadeAnimationFlg && !CommonUtil.mFinishAnimationFlg && CommonUtil.mTouchControlFlg) {
									PushActionUtil.pushRiderAction(self, self.mIconSprites[i], self.mAnimeSprites[i]);
									if (CommonUtil.mLongTapSprite != self.mIconSprites[i].getIconNumber()) {
										CommonUtil.mLongTapSprite = self.mIconSprites[i].getIconNumber();
										self.unschedule(PushActionUtil.longPushAction);
										PushActionUtil.mLayer = self;
										self.scheduleOnce(PushActionUtil.longPushAction, 1.0);
									}
								} else {
									self.unschedule(PushActionUtil.longPushAction);
								}

								break;

							case Icon_Type.TYPE_DECADE:
								if (!CommonUtil.mDecadeAnimationFlg && !CommonUtil.mFinishAnimationFlg) {
									PushActionUtil.pushDecadeAction(self, self.mIconSprites[i], self.mAnimeSprites[i]);
									if (CommonUtil.mLongTapSprite != self.mIconSprites[i].getIconNumber()) {
										CommonUtil.mLongTapSprite = self.mIconSprites[i].getIconNumber();
										self.unschedule(PushActionUtil.longPushAction);
										PushActionUtil.mLayer = self;
										self.scheduleOnce(PushActionUtil.longPushAction, 1.0);
									}
								} else {
									self.unschedule(PushActionUtil.longPushAction);
								}
								break;

							case Icon_Type.TYPE_FINAL:
								if (!CommonUtil.mDecadeAnimationFlg && !CommonUtil.mFinishAnimationFlg) {
									PushActionUtil.pushFinalAction(self, self.mIconSprites[i], self.mAnimeSprites[i]);
								} else {
									self.unschedule(PushActionUtil.longPushAction);
								}
								break;

							case Icon_Type.TYPE_CANCEL:
								self.unschedule(PushActionUtil.longPushAction);
								if (CommonUtil.mPushIconNumArray.length > 0) {
									if (!CommonUtil.mDecadeAnimationFlg && !CommonUtil.mFinishAnimationFlg) {
										PushActionUtil.pushCancelAction(self, self.mIconSprites[i], self.mAnimeSprites[i]);
									}
								} else {
									self.endKtouch();
								}

								break;

							case Icon_Type.TYPE_NUMBER:

								break;

							case Icon_Type.TYPE_ZERO:

								break;

							case Icon_Type.TYPE_ENTER:

								break;

							case Icon_Type.TYPE_X:

								break;

							default:
								self.unschedule(PushActionUtil.longPushAction);
							CommonUtil.mLongTapSprite = Icon_Number.ICON_SUM;
							break;
							}
						}
					}
				}
				
			}
			

		},
		//タッチ移動
		onTouchesMoved:function (touches, event) {
			var self = event.getCurrentTarget();
			
			if (self.mVisible) {
				for (var iTouchCount = 0; iTouchCount < touches.length; iTouchCount++ ) {
					var point = touches[iTouchCount].getLocation();

					for (var i = Icon_Number.ICON_KUUGA; i < Icon_Number.ICON_SUM; i++) {
						if (IconTouchUtil.isTouchOnIcon(point, self.mIconSprites[i])) {
							switch (self.mIconSprites[i].getIconType()) {
							case Icon_Type.TYPE_RIDER:

								if (!CommonUtil.mDecadeAnimationFlg && !CommonUtil.mFinishAnimationFlg && CommonUtil.mTouchControlFlg) {
									PushActionUtil.pushRiderAction(self, self.mIconSprites[i], self.mAnimeSprites[i]);
									if (CommonUtil.mLongTapSprite != self.mIconSprites[i].getIconNumber()) {
										CommonUtil.mLongTapSprite = self.mIconSprites[i].getIconNumber();
										self.unschedule(PushActionUtil.longPushAction);
										PushActionUtil.mLayer = self;
										self.scheduleOnce(PushActionUtil.longPushAction, 1.0);
									}
								} else {
									self.unschedule(PushActionUtil.longPushAction);
								}

								break;

							case Icon_Type.TYPE_DECADE:
								if (!CommonUtil.mDecadeAnimationFlg && !CommonUtil.mFinishAnimationFlg) {
									if (CommonUtil.mLongTapSprite != self.mIconSprites[i].getIconNumber()) {
										CommonUtil.mLongTapSprite = self.mIconSprites[i].getIconNumber();
										self.unschedule(PushActionUtil.longPushAction);
										PushActionUtil.mLayer = self;
										self.scheduleOnce(PushActionUtil.longPushAction, 1.0);
									}
								} else {
									self.unschedule(PushActionUtil.longPushAction);
								}
								break;

							case Icon_Type.TYPE_FINAL:
								self.unschedule(PushActionUtil.longPushAction);
								CommonUtil.mLongTapSprite = Icon_Number.ICON_SUM;

								break;

							case Icon_Type.TYPE_CANCEL:
								self.unschedule(PushActionUtil.longPushAction);
								CommonUtil.mLongTapSprite = Icon_Number.ICON_SUM;

								break;

							case Icon_Type.TYPE_NUMBER:

								break;

							case Icon_Type.TYPE_ZERO:

								break;

							case Icon_Type.TYPE_ENTER:

								break;

							case Icon_Type.TYPE_X:

								break;

							default:
								self.unschedule(PushActionUtil.longPushAction);
							CommonUtil.mLongTapSprite = Icon_Number.ICON_SUM;
							break;
							}
						}
					}
				}
				
			}

		},
		//タッチ終了
		onTouchesEnded:function (touches, event) {
			var self = event.getCurrentTarget();
			if (self.mVisible) {
				self.unschedule(PushActionUtil.longPushAction);
				if (!CommonUtil.mDecadeAnimationFlg && !CommonUtil.mFinishAnimationFlg && CommonUtil.mTouchControlFlg) {
					CommonUtil.mLongTapSprite = Icon_Number.ICON_SUM;
				}
			}
		},
		//タッチキャンセル    
		onTouchesCancelled:function (touches, event) {
		},

		isTouchOnIcon : function (touchPoint, iconSprite){
			var rect = iconSprite.getBoundingBox();
//			cc.log("rect      x:" + rect.x);
//			cc.log("rect      y:" + rect.y);
//			cc.log("rect  width:" + rect.width);
//			cc.log("rect height:" + rect.height);
//			cc.log("touchPoint x:" + touchPoint.x);
//			cc.log("touchPoint y:" + touchPoint.y);
			if (cc.rectContainsPoint(rect, touchPoint)) {
				return true;
			}

			return false;
		}
}