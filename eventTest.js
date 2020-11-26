///<reference path="pixi.js.d.ts"/>
document.addEventListener("DOMContentLoaded", function () { new EventTest(); }, false);
var EventTest = /** @class */ (function () {
    function EventTest() {
        this.app = new PIXI.Application();
        document.body.appendChild(this.app.view);
        var textureButton = PIXI.Texture.fromImage('./maggot_tiny.png');
        var button = new PIXI.Sprite(textureButton);
        button.anchor.set(0.5);
        button.x = 200;
        button.y = 200;
        // make the button interactive...
        button.interactive = true;
        button.buttonMode = true;
        this.app.stage.addChild(button);
        button.on('pointerover', this.onButtonOver);
        button.on('pointerout', this.onButtonOut);
        button.once('pointerdown', this.onButtonDown);
        button.on('helloEvent', function (data1, data2) {
            alert(data1 + data2);
        });
    }
    //按鈕隨機上色
    EventTest.prototype.onButtonOver = function () {
        this.tint = Math.random() * 0x808080;
    };
    //按鈕隨機亂跑
    EventTest.prototype.onButtonOut = function () {
        this.x = Math.random() * 200;
        this.y = Math.random() * 200;
    };
    //發射helloEvent事件及資料
    EventTest.prototype.onButtonDown = function () {
        alert("我只哭一次");
        var res = this.emit("helloEvent", "Alice", "不哭不哭");
        //是否有人監聽 helloEvent 事件
        console.log(res);
    };
    return EventTest;
}());
