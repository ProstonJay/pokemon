class Role extends egret.DisplayObjectContainer {

	private _mcData:any;
    private _mcTexture:egret.Texture;
	private _Dir:string="0";
	private _mc1:egret.MovieClip;
	private _Name:eui.Label;

	public constructor() {
		super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
	}

	private Removed(event: egret.Event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
		this._mc1.removeEventListener(egret.Event.COMPLETE,null,this);
		this._mc1.removeEventListener(egret.MovieClipEvent.FRAME_LABEL,null,this);
    }

	private onAddToStage(event: egret.Event) {
		this.initMovieClip();
		//
		this._Name= new eui.Label();
		this._Name.text = "沉鱼落雁";
		//设置颜色等文本属性
		this._Name.textColor = 0x99f40c;
		this._Name.size = 20;
		this._Name.bold=true;
		this._Name.textAlign = egret.HorizontalAlign.JUSTIFY;
		this._Name.x=-45;
		this._Name.y=-135;
		this.addChild(this._Name);
    }

	private initMovieClip():void{
		var data = RES.getRes("Player_json");
		var txtr = RES.getRes("Player_png");
		var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
		this._mc1 = new egret.MovieClip( mcFactory.generateMovieClipData("Boy"));
		this.addChild( this._mc1 );
		this._mc1.x=0;
		this._mc1.y=0;

		this._mc1.addEventListener(egret.Event.COMPLETE, function (e:egret.Event):void {
            //egret.log("play over!");
			// if(this._atkFlag){
			//    this.Attack();
			// }
        }, this);
		this._mc1.addEventListener(egret.MovieClipEvent.FRAME_LABEL, function (e:egret.MovieClipEvent):void {
            //egret.log("frameLabel:" + e.frameLabel);
        }, this);


		this.Stand();
    }

	public SetDir(val:number){

		//egret.log("角度:" + val);
		if(val>-100&&val<-80){
			this._Dir="0";
		}else if(val>-170&&val<-100){
			this._Dir="11";
			this._mc1.scaleX=1;
		}else if(val>170||val<-170){
			this._Dir="9";
			this._mc1.scaleX=1;
		}else if(val>100&&val<170){
			this._Dir="8";
			this._mc1.scaleX=1;
		}else if(val>80&&val<110){
			this._Dir="6";
		}else if(val>10&&val<80){
			this._Dir="8";
			this._mc1.scaleX=-1;
		}else if(val>-10&&val<10){
			this._Dir="9";
			this._mc1.scaleX=-1;
		}else if(val>-80&&val<-10){
			this._Dir="11";
			this._mc1.scaleX=-1;
		}
		
	}

	
	private _atkFlag:boolean;
	//开始攻击
	public StartAtk(boo:boolean):void{
		if(Main.MyGOld<100){
			PopManager.JumpMsg("金币不足！");
		}else{
			this._atkFlag = boo;
			if(this._atkFlag){
				this.Attack();
			}else{
				this.Stand();
			}
		}
	}	

	//待机
	public  Stand():void{
		this._mc1.gotoAndPlay( "Stand"+this._Dir,-1);
	}

	//移动
	public Move():void{
		egret.log("当前Label:" + this._mc1.currentLabel);
		if(this._mc1.currentLabel!="Run"+this._Dir){
			this._mc1.gotoAndPlay( "Run"+this._Dir,-1);
		}
	}
	//攻击
	public Attack():void{
		this._mc1.gotoAndPlay( "Atk"+this._Dir,1);
		var atkEvent = egret.Event.create(AtkEvent,AtkEvent.data);
		atkEvent.pos = new egret.Point(this.x,this.y);
        this.dispatchEvent(atkEvent);
		//
		SoundMenager.Shared().PlayerEff("tw");
	}


	/**
	 * 获取角色方向
	 */
	public GetRoleDir():string{
		return this._Dir;
	}
}