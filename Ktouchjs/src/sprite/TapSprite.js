
var OnTouchListener = cc.Class.extend({
	onTapSpriteTouchBegan : function(sprite, touch, event) {},
	onTapSpriteTouchMoved : function(sprite, touch, event) {},
	onTapSpriteTouchEnded : function(sprite, touch, event) {},
	onTapSpriteTouchCancelled : function(sprite, touch, event) {}
});

var TapSprite = cc.Sprite.extend({
	
	mOnTouchListener : new OnTouchListener(),

	ctor : function(fileName, rect, rotated) {
		this._super(fileName, rect, rotated);
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: this.onTouchBegan,
			onTouchMoved: this.onTouchMoved,
			onTouchEnded: this.onTouchEnded,
			onTouchCancelled: this.onTouchCancelled
		}, this);
	},
	
	setOnTouchListener:function(onTouchListener) {
		this.mOnTouchListener = onTouchListener;
	},
	
	onTouchBegan:function(touch, event) {
		var self = event.getCurrentTarget();
		var pos = touch.getLocation();
		var size = self.getTexture().getContentSize();
		var rect = cc.rect(
				self.getPositionX()-size.width/2, 
				self.getPositionY()-size.height/2, 
				size.width, 
				size.height);
		if (cc.rectContainsPoint(rect, pos)) {
			self.mOnTouchListener.onTapSpriteTouchBegan(self, touch, event);
			return false;
		}
		return false;
	},
	onTouchMoved:function(touch, event) {
		var self = event.getCurrentTarget();
		var pos = touch.getLocation();
		var size = self.getTexture().getContentSize();
		var rect = cc.rect(
				self.getPositionX()-size.width/2, 
				self.getPositionY()-size.height/2, 
				size.width, 
				size.height);
		if (cc.rectContainsPoint(rect, pos)) {
			self.mOnTouchListener.onTapSpriteTouchMoved(self, touch, event);
		}
	},
	onTouchEnded:function(touch, event) {
		var self = event.getCurrentTarget();
		self.mOnTouchListener.onTapSpriteTouchEnded(self, touch, event);
	},
	onTouchCancelled:function(touch, event) {
		var self = event.getCurrentTarget();
		self.mOnTouchListener.onTapSpriteTouchCancelled(self, touch, event);
	},

});

