class Mons extends egret.DisplayObjectContainer {

	private _mcData:any;
    private _mcTexture:egret.Texture;
	private _Dir:string="6";
	private _mc1:egret.MovieClip;
	//private _mc2:egret.MovieClip;
	private _mc3:egret.MovieClip;
	public _id:number;

	public _Hp:number;

	private _defulPos:egret.Point;

	public constructor() {
		super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
	}

	private Removed(event: egret.Event) {
		egret.Tween.removeTweens(this);
		if(this._timer!=null){
			this._timer.stop();
			this._timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerMoveFunc, this);
		}
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Click, this);
		this._timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerMoveFunc, this);
    }


	private onAddToStage(event: egret.Event) {
		this.initMovieClip();
		this._Hp=Math.floor(1+Math.random()*20);
		//记录出生坐标
		this._defulPos = new egret.Point();
		this._defulPos.x=this.x;
		this._defulPos.y=this.y;
		//
		this.touchEnabled=true;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Click, this);
		//每10秒随机
		this._timer = new egret.Timer(1000, 5);
		this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerMoveFunc, this);
		this._timer.start();
    }

	//
	public Click(evt:egret.TouchEvent){
		var changeEvent = egret.Event.create(GameEvent,GameEvent.data);
        changeEvent.pos = new egret.Point(this.x,this.y);
		changeEvent.id=this._id;

		//
		this.dispatchEvent(changeEvent);

		if(this._mc3==null){
			var data = RES.getRes("Select_mc_json");
			var txtr = RES.getRes("Select_mc_png");
			var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
			this._mc3 = new egret.MovieClip( mcFactory.generateMovieClipData("Select_mc"));
			//this._mc3.scaleX=this._mc3.scaleY=this.mid==2?1:2;
			this.addChildAt( this._mc3,0 );
			this._mc3.gotoAndPlay("go",-1);
		}
	}

	private mid:number;

	private initMovieClip():void{
		egret.log(Math.floor(1+2*Math.random()));
		this.mid=Math.floor(1+2*Math.random());
		var data = RES.getRes("mon_"+this.mid+"_json");
		var txtr = RES.getRes("mon_"+this.mid+"_png");
		var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
		this._mc1 = new egret.MovieClip( mcFactory.generateMovieClipData("monster"));
		this.addChild( this._mc1 );
		this._mc1.x=0;
		this._mc1.y=0;

		// var data = RES.getRes("s1_json");
		// var txtr = RES.getRes("s1_png");
		// var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
		// this._mc2 = new egret.MovieClip( mcFactory.generateMovieClipData("EMGZYZ"));
		// this.addChild( this._mc2 );
		// this._mc2.x=0;
		// this._mc2.y=0;
		// this._mc2.visible=false;

		// this._mc2.addEventListener(egret.Event.COMPLETE, function (e:egret.Event):void {
        //    	this._mc2.visible=false;
		// 	this._Hp-=1;
		// 	if(this._Hp<=0){
		// 		egret.log("怪物死亡");
		// 		var gameEvent = egret.Event.create(GameEvent,GameEvent.MON_DIE);
		// 		gameEvent.id=this._id;
		// 		gameEvent.pos= new egret.Point(this.x,this.y);
		// 		this.dispatchEvent(gameEvent);
		// 		this.Destory();
		// 	}
        // }, this);
		// this._mc1.addEventListener(egret.MovieClipEvent.LOOP_COMPLETE, function (e:egret.MovieClipEvent):void {
        //     egret.log("frameLabel:"+e.frameLabel);
        // }, this);
		// this._mc1.addEventListener(egret.MovieClipEvent.FRAME_LABEL, function (e:egret.MovieClipEvent):void {
        //     //egret.log("frameLabel:" + e.frameLabel);
        // }, this);

		var Arr:any[] = ["0","11","9","8"];
		//egret.log("位置:" + Math.floor(Math.random()*(3+1)));
		this._Dir= Arr[Math.floor(Math.random()*(3+1))];
  		//egret.log("怪物方向:" + this._Dir);

		this.Stand();
		//this.RondomAction();
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

	//被攻击
	public Attacked():void{
		// this._mc2.visible=true;
		// this._mc2.gotoAndPlay(1);
		//颜色矩阵数组
		var colorMatrix = [
			1,0,0,0,100,
			0,1,0,0,100,
			0,0,1,0,100,
			0,0,0,1,0
		];
		var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
		egret.Tween.get(this,{loop:false}).to({}, 200).call(function(){this.filters = [colorFlilter];}).to({}, 200).call(function(){this.filters = null;})
		
		this._Hp-=1;
		if(this._Hp<=0){
			//egret.log("怪物死亡");
			var gameEvent = egret.Event.create(GameEvent,GameEvent.MON_DIE);
			gameEvent.id=this._id;
			gameEvent.pos= new egret.Point(this.x,this.y);
			this.dispatchEvent(gameEvent);
			this.Destory();
		}
		else{
			this.dispatchEvent(egret.Event.create(Battle_Event,Battle_Event.Atk_Complete));
		}
	}


	//待机
	public  Stand():void{
		//egret.log("待机方向="+this._Dir);
		this._mc1.gotoAndPlay( "Stand"+this._Dir,-1);
	}

	//移动
	public Move():void{
		//egret.log("移动方向="+this._Dir);
		this._mc1.gotoAndPlay( "Run"+this._Dir,-1);
	}
	//攻击
	public Attack():void{
		this._mc1.gotoAndPlay( "Atk"+this._Dir,1);
	}
	//死亡
	public Dead():void{
		this._mc1.gotoAndPlay( "Dead",1);
	}

	private _timer: egret.Timer;
	/**
	 * 随机动作
	 */
	private RondomAction(){
		//10秒内选择一个动作
		let tm:number=Math.floor(1000+5000*Math.random());
		// egret.log("随机了"+tm+"秒");
		//
      	this._timer = new egret.Timer(tm, 1);
		this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerMoveFunc, this);
		// if(!this._timer.hasEventListener(egret.TimerEvent.TIMER)){
        // 	this._timer.addEventListener(egret.TimerEvent.TIMER, this.timerMoveFunc, this);
		// }
		this._timer.start();
	}

	private timerMoveFunc(event: egret.Event) {
		//待机.1/移动.2
		let act:Number=Math.floor(1+2*Math.random());
		if(act==2){
			//随机坐标
			let randomPos:egret.Point = this.getMoveRange();
			// egret.log("初始坐标 x="+this._defulPos.x+"y="+this._defulPos.y);
			//egret.log("随机移动坐标 x="+randomPos.x+"y="+randomPos.y);
			// egret.log("当前坐标 x="+this.x+"y="+this.y);
			let distance:egret.Point = new egret.Point();
			distance.x = randomPos.x-this.x;
        	distance.y = randomPos.y-this.y;
			let  xrad = Math.atan2(distance.y,distance.x); //注意参数（y,x） Y在前，X在后
			let angle:number = xrad / Math.PI * 180;
			let dist:number=Math.sqrt(distance.x*distance.x+distance.y*distance.y );
			//
			this.SetDir(angle);
			this.Move();	
			var twww = egret.Tween.get(this);
			//egret.log("随机坐标2="+"x"+randomPos.x+"y"+randomPos.y);
			twww.to( {x:randomPos.x,y:randomPos.y}, dist*20 ).call(this.onMoveComplete,this);
		}else{
			this.onMoveComplete();
		}
	
    }

	//移动完成
	private onMoveComplete(){
		this.Stand();
		this._timer.reset();
		this._timer.start();
		//egret.log("移动完成后坐标 x="+this.x+"y="+this.y);
	}

	/**
	 * 根据当前出生点随机范围
	 */
	private getMoveRange():egret.Point{
		let TarPos:egret.Point = new egret.Point();
		let rx:number = Math.floor(10+200*Math.random());
		let ry:number= Math.floor(10+200*Math.random());
		TarPos.x= this._defulPos.x+rx;
		TarPos.y= this._defulPos.y+ry;
        return TarPos;
	}

	/**
	 * 移除选中状态
	 */
	public RemoveSelectState():void{
		if(this._mc3!=null){
			this._mc3.gotoAndStop(1);
			this.removeChild(this._mc3);
			this._mc3=null;
		}
	}


	private Destory():void{
		// this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		// this._mc1.removeEventListener(egret.MovieClipEvent.FRAME_LABEL, null, this);
		// //this._mc2.removeEventListener(egret.Event.COMPLETE, null,this)
		// this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Click, this);

		// if(this._timer!=null){
		// 	this._timer.stop();
		// 	this._timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerMoveFunc, this);
		// }


		// egret.Tween.removeTweens(this);
		this.parent.removeChild(this);
	}
}