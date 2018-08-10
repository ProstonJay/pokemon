class DropItem extends egret.Sprite{

	private _followTatget:Role;
	private _db:number;

	public constructor(target:Role,db:number) {
		super();
		this._followTatget=target;
		this._db=db;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.addEventListener(egret.Event.REMOVED, this.onRmoveStage, this);
	}

	private onAddToStage(event: egret.Event) {
		let gold = ImageHelper.createBitmapByName("gd2_png");
		gold.anchorOffsetX=gold.width/2;
		gold.anchorOffsetY=gold.height/2;
		// gold.scaleX=gold.scaleY=0.5;
		this.addChild(gold);

		this.y-=100;

		var tw = egret.Tween.get(this);
		tw.to( {x:this.x,y:	this.y+100}, 500,egret.Ease.bounceOut ).wait(1000).call(this.onComplete,this);
    }
	

	private onComplete():void{
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnter, this);
	}

	private onRmoveStage(event: egret.Event){
		egret.log("掉落移除监听");
		this.Destory();
	}

	private onEnter(event: egret.Event){
		egret.log("主角坐标="+this._followTatget.x,this._followTatget.y);
		var dx:number=this._followTatget.x-this.x;
		var dy:number=this._followTatget.y-this.y-30;
		var vx:number=dx/5;
		var vy:number=dy/5;
		this.x+=vx;
		this.y+=vy;
		if(this.x<=this._followTatget.x+50&&this.x>=this._followTatget.x-50&&this.y<=this._followTatget.y-30+50&&this.y>=this._followTatget.y-30-50){
			if(this.stage){
				var bEvent = egret.Event.create(Battle_Event,Battle_Event.Add_Gold);
				bEvent.vlaue=(Main.DdNum*this._db)/10;
				SoundMenager.Shared().PlayerEff("eat");
				this.stage.dispatchEvent(bEvent);
			}
			this.Destory();
		}
	}

	private Destory(){
		egret.Tween.removeTweens(this);
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.removeEventListener(egret.Event.REMOVED, this.onRmoveStage, this);
		this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnter, this);
		this._followTatget=null;
		this.parent.removeChild(this);
	}
}