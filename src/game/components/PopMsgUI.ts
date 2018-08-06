class PopMsgUI extends egret.Sprite {

    public constructor(str:string) {
        super();
        this._str=str;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
    }

    private Removed(event: egret.Event) {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private _textField:egret.TextField;
    private _str:string;
    
    private onAddToStage(event: egret.Event){

        let Bg:egret.Bitmap = ImageHelper.createBitmapByName("huidi_png");
        Bg.anchorOffsetX=  Bg.width/2;
        Bg.anchorOffsetY=  Bg.height/2+1;
		this.addChild(Bg);

        this._textField = new egret.TextField();
        this.addChild(this._textField);
        this._textField.size = 30;
        this._textField.bold = true;
        this._textField.textColor = 0xFFFFFF;
        this._textField.width = 300;
        this._textField.height = 30;
        this._textField.textAlign=egret.HorizontalAlign.CENTER;
        this._textField.text = this._str;
        this._textField.anchorOffsetX=  this._textField.width/2;
        this._textField.anchorOffsetY=  this._textField.height/2;

        this.scaleX=this.scaleY=.1;

        this.x= Main.StageWd/2;
        this.y= Main.StageHg/2-100;

        var tw = egret.Tween.get(this);
		tw.to( {scaleX:1,scaleY:1}, 400,egret.Ease.bounceOut ).wait(300).
        to( {x:this.x,y:this.y-100}, 200,egret.Ease.sineIn ).wait(500).
        to( {} ).call(this.onComplete,this);
    }

    private onComplete(){
        egret.Tween.removeTweens(this);
        this.parent.removeChild(this);
    }
}
