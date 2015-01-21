
var HelloWorldLayer = cc.Layer.extend({

    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        
        var topKtouchLayer = new TopKtouchLayer();
        this.addChild(topKtouchLayer);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

