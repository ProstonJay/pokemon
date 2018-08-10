class MapLayer extends egret.DisplayObjectContainer{

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);

    }

    private Removed(event: egret.Event) {
		//
		egret.Tween.removeTweens(this.role);
		egret.Tween.removeTweens(this);
		//
		this._timer.stop();
        this._timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerFunc, this);
		this._timer=null
		//
		egret.log("地图移动事件="+event.currentTarget);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
		//
		this.removeEventListener(egret.Event.ENTER_FRAME,this.OnEnter,this);
		this.removeEventListener(Battle_Event.Auto_Fight,this.AutoFight,this);
		this.stage.removeEventListener(Battle_Event.Auto_Fight,this.AutoFightEvent,this);
		this.stage.removeEventListener(Battle_Event.Atk_Speed,this.AtkSpeedEvent,this);
		//
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.Click, this);

		// let childNum:number=this.numChildren;
		// //从1开始，0是背景
		// for( var i = 0; i<childNum; ++i ){
		// 	this.removeChildAt(i)
		// }
		this.role.removeEventListener(AtkEvent.data,this.RoleAtk,this);
		this.removeChild(this.role);
		//
		// for (var key in this._MonsDic){
		// 	egret.log("移除了，找怪物="+this.getChildByName("mon"+Number(this._MonsDic[key])));
		// 	//(this.getChildByName("mon"+Number(this._MonsDic[key])) as Mons).removeEventListener(GameEvent.data,this.monsSelect,this);
		// 	//(this.getChildByName("mon"+Number(this._MonsDic[key])) as Mons).removeEventListener(GameEvent.MON_DIE,this.MonDie,this);
		// 	//(this.getChildByName("mon"+Number(this._MonsDic[key])) as Mons).removeEventListener(Battle_Event.Atk_Complete,this.MyAtkCompleteEvent,this);
		// }

    }

	private onAddToStage(event: egret.Event) {
		this.initView();
		this.addEventListener(egret.Event.ENTER_FRAME,this.OnEnter,this);
		this.addEventListener(Battle_Event.Auto_Fight,this.AutoFight,this);
		this.stage.addEventListener(Battle_Event.Auto_Fight,this.AutoFightEvent,this);
		this.stage.addEventListener(Battle_Event.Atk_Speed,this.AtkSpeedEvent,this);
	}

	private goldUi:egret.Sprite;
	private role:Role;
	private stageH:number;
	private stageW:number;
	private rightBoundary:number;
	private leftBoundary:number;
	private topBoundary:number;
	private bottomBoundary:number;

	private _MonsPosDic:Object={};
	private _MonsDic:Object={};
    private _timer: egret.Timer;
    private _tm:number=10;
	

	private initView():void{
		let bg =  ImageHelper.createBitmapByName("mp"+Main.BttleId+"_png");//1365 1024
		bg.scaleX=bg.scaleY=2;
		this.addChild(bg);
		//定义边界 ，即定义个相对运动的视口，当杯操作对象没有达到边界的时候，即视口内时，是背景移动。当超过这个视口的时候，对象就移动。
		this.stageH = egret.MainContext.instance.stage.stageHeight;
		this.stageW = egret.MainContext.instance.stage.stageWidth;
		this.rightBoundary = this.width * 0.9;
		this.leftBoundary = this.width * 0.1;
		this.topBoundary = this.height * 0.2;
		this.bottomBoundary = this.height * 0.8;
		//移动地图到中心
		this.x= (this.stageW-this.width)/2;
		this.y= (this.stageH-this.height)/2;
		//
		this.touchEnabled=true;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Click, this);
		//
		this.goldUi = new egret.Sprite();
		this.addChild(this.goldUi);
		//定义怪物出生点(1250x600)(2730x2048)
		for( var i = 0; i<4; ++i ){
			for( var j = 0; j<10; ++j ){
				this._MonsPosDic[i*10+j]=(300+j*220)+"|"+(400+i*300);
			}
		}
		//
		this.creatMons();
		//
		this.creatRole();
		//定时刷新怪物
		this._timer = new egret.Timer(1000, 30);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerFunc, this);
        this._timer.start();
	} 

	/**
     * 刷新怪物计时
     */
    private timerFunc(event:egret.Event){
		this._timer.reset();
		this._timer.start();
		for (var key in this._MonsDic){
			if(this._MonsDic[key]==""){
				egret.log("怪物不存在 key="+key+"name="+this._MonsDic[key])
				let mont:Mons =new Mons();
				let pos:string=this._MonsPosDic[key];
				mont.x=Number(pos.split("|")[0]);
			    mont.y=Number(pos.split("|")[1]);
				mont.addEventListener(GameEvent.data,this.monsSelect,this);
				mont.addEventListener(GameEvent.MON_DIE,this.MonDie,this);
				mont.addEventListener(Battle_Event.Atk_Complete,this.MyAtkCompleteEvent,this);
				mont.addEventListener(Battle_Event.REMOVED,this.OnMonsRemoved,this);
				mont._id=Number(key);
				mont.name="mon"+Number(key);
				this.addChild(mont);
				//记录到字典
				this._MonsDic[key]=mont.name;
			}
    	}
		//
		PopManager.JumpMsg("怪物已刷新！");
	}
	/**
	 * 创建怪物
	 */
	private creatMons(){
		for (var key in this._MonsPosDic){
			// console.log(key, this._MonsPosDic[key]);
			let pos:string=this._MonsPosDic[key];

			let mont:Mons =new Mons();
			mont.x=Number(pos.split("|")[0])+Math.floor(10+200*Math.random());
			mont.y=Number(pos.split("|")[1])+Math.floor(10+200*Math.random());
			egret.log("pppp="+pos.split("|")[0]);
			egret.log("pppp="+pos.split("|")[1]);
			mont.addEventListener(GameEvent.data,this.monsSelect,this);
			mont.addEventListener(GameEvent.MON_DIE,this.MonDie,this);
			mont.addEventListener(Battle_Event.Atk_Complete,this.MyAtkCompleteEvent,this);
			mont.addEventListener(Battle_Event.REMOVED,this.OnMonsRemoved,this);
			mont._id=Number(key);
			mont.name="mon"+Number(key);
			this.addChild(mont);
			//记录到字典
			this._MonsDic[key]=mont.name;
		}
		// for( var i = 0; i<40; ++i ){
		// 	let mont:Mons =new Mons();
		// 	mont.x=500+Math.random()*1500;
		// 	mont.y=500+Math.random()*1000;
		// 	mont.addEventListener(GameEvent.data,this.monsSelect,this);
		// 	mont.addEventListener(GameEvent.MON_DIE,this.MonDie,this);
		// 	mont.addEventListener(Battle_Event.Atk_Complete,this.MyAtkCompleteEvent,this);
		// 	mont._id=i;
		// 	mont.name="mon"+i;
		// 	this.addChild(mont);
		// }
	}

	/**
	 * 创建主角
	 */
	private creatRole(){
		this.role = new Role();
  		this.role.x = (this.width/2 - this.role.width);
		this.role.y = (this.height/2 - this.role.height);
		this.addChild(this.role);
		this.role.addEventListener(AtkEvent.data,this.RoleAtk,this);
	}

    private _distance:egret.Point = new egret.Point(); //鼠标点击时，鼠标全局坐标与_bird的位置差
	/**
	 * 点击地图
	 */
	private Click(evt:egret.TouchEvent){
		//egret.log("	this.hasEventListener(egret.Event.ENTER_FRAME);="+this.hasEventListener(egret.Event.ENTER_FRAME));
		if(evt.localX<this.leftBoundary||evt.localX>this.rightBoundary||evt.localY<this.topBoundary||evt.localY>this.bottomBoundary){
			return;
		}

		//点击地板动画
		var data = RES.getRes("Click_Mc_json");
		var txtr = RES.getRes("Click_Mc_png");
		var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
		let _mc3 = new egret.MovieClip( mcFactory.generateMovieClipData("Click"));
		_mc3.x=evt.localX;
		_mc3.y=evt.localY;
		this.addChildAt( _mc3,1 );
		_mc3.gotoAndPlay("go");
		_mc3.once(egret.Event.COMPLETE, (e:egret.Event)=>{this.removeChild(e.target);}, this);
		//取消攻击选中
		let LastSelectMon = this.getChildByName("mon"+this._SelcetId)as Mons;
		if(LastSelectMon!=null){
			LastSelectMon.RemoveSelectState();
			this._SelcetId=-1;
		}
		// console.log("点击坐标="+evt.localX);
		// console.log("点击坐标="+evt.stageX);
		// console.log("角色坐标="+this.role.x);
		egret.Tween.removeTweens(this.role);
		egret.Tween.removeTweens(this);
		this._distance.x = evt.localX -  this.role.x;
        this._distance.y = evt.localY -  this.role.y;
		let  xrad = Math.atan2(this._distance.y,this._distance.x); //注意参数（y,x） Y在前，X在后
		// console.log("xrad="+xrad);
		let angle:number = xrad / Math.PI * 180;
		// console.log("angle="+angle);
		//
		let dist:number=Math.sqrt(	this._distance.x*this._distance.x+this._distance.y *this._distance.y );
		  //console.log("距离="+dist);
		//
		this.role.SetDir(angle);
		this.role.Move();	
		var tw = egret.Tween.get(this.role,{ onChange: this.onRoleMove,onChangeObj:this});
		tw.to( {x:evt.localX,y:evt.localY}, dist*3 ).call(this.onComplete,this);
		var tw1 = egret.Tween.get(this,{ onChange: this.onMapMove,onChangeObj:this});
		tw1.to( {x:this.x-this._distance.x,y:this.y-this._distance.y}, dist*3 );
	}

	private onComplete():void{
		this.role.Stand();
	}

	//地图移动
	private onMapMove():void{
		// //在内部边缘停住角色
		// if(this.roleUi.x < this.leftBoundary) {
		// 	this.roleUi.x = this.leftBoundary;
		// 	this.rightBoundary = this.stageW * 0.75;
		// 	this.map.x -= this.vx;
		// }
		// else if(this.roleUi.x + this.roleUi.width > this.rightBoundary) {
		// 	this.roleUi.x = this.rightBoundary - this.roleUi.width;
		// 	this.leftBoundary = this.stageW * 0.25;
		// 	this.map.x -= this.vx;
		// }
		// else if(this.roleUi.y < this.topBoundary) {
		// 	this.roleUi.y = this.topBoundary;
		// 	this.bottomBoundary = this.stageH * 0.75;
		// 	this.map.y -= this.vy;
		// }
		// else if(this.roleUi.y + this.roleUi.height > this.bottomBoundary) {
		// 	this.roleUi.y = this.bottomBoundary - this.roleUi.height;
		// 	this.topBoundary = this.stageH * 0.25;
		// 	this.map.y -= this.vy;
		// }
	
		//限制边界处理
		if(this.x > 0) {
			this.x = 0;
		}
		if(this.y > 0) {
			this.y = 0;
		}
		if(this.x < this.stageW - this.width) {
			this.x = this.stageW - this.width;
		}
		if(this.y < Main.StageHg - this.height) {
			this.y = Main.StageHg - this.height;
		}
	}

	private onRoleMove(){

	}
	
	private _SelcetId:number=-1;
	/**
	 * 怪物选中
	 */
	private monsSelect(evt:GameEvent):void{
		if(this._SelcetId == evt.id){
			return;
		}
		//
		this._SelcetId = evt.id;
		//先清除上一个怪的选中状态
		//egret.log("上一个选择的怪物="+this.getChildByName("mon"+this._SelcetId));
		let LastSelectMon = this.getChildByName("mon"+this._SelcetId)as Mons;
		if(LastSelectMon!=null){
			LastSelectMon.RemoveSelectState();
		}
		//egret.log("当前选择的怪物="+this._SelcetId);
		let distance:egret.Point = new egret.Point();
		distance.x=evt.pos.x -  this.role.x;
		distance.y=evt.pos.y -  this.role.y;
		let  xrad = Math.atan2(distance.y,distance.x); //注意参数（y,x） Y在前，X在后
		let angle:number = xrad / Math.PI * 180;
		let dist:number=Math.sqrt(	distance.x*distance.x+distance.y *distance.y );
		  //console.log("距离="+dist);
		//
		this.role.SetDir(angle);
		//攻击距离
		if(dist<300){
			this.role.StartAtk(true);
		}else{
			this.role.Move();
			let rangex=distance.x>0?distance.x-50:distance.x+50;
			let rangey=distance.y>0?distance.y-50:distance.y+50;	
			//
			var tw = egret.Tween.get(this.role,{ onChange: this.onRoleAtkMove,onChangeObj:this});
			tw.to( {x:this.role.x+rangex,y:this.role.y+rangey}, dist*3 ).call(this.onComplete11,this);
			var tw1 = egret.Tween.get(this,{ onChange: this.onMapMove,onChangeObj:this});
			tw1.to( {x:this.x-rangex,y:this.y-rangey}, dist*3 );
		}
	}

	private onRoleAtkMove(){
		//egret.log("当前选择的怪物="+this._SelcetId);
		let mon = this.getChildByName("mon"+this._SelcetId) as Mons;
		let distance:egret.Point = new egret.Point();
		distance.x=mon.x -  this.role.x;
		distance.y=mon.y -  this.role.y;
		let dist:number=Math.sqrt(	distance.x*distance.x+distance.y *distance.y );
		if(dist<=300){
			egret.Tween.removeTweens(this.role);
			egret.Tween.removeTweens(this);
			this.role.StartAtk(true);
		}
	}

	private onComplete11(){
		this.role.StartAtk(true);
	}

	//怪物死亡
	private MonDie(evt:GameEvent):void{
		//字典清除死掉的怪物
		this._MonsDic[evt.id]="";
		//
		this.role.StartAtk(false);
		this.CreatGold(evt.pos,(evt.currentTarget as Mons)._DB);
		//重置当前选中怪物ID
		this._SelcetId=-1;
		//是否开启了自动战斗
		if(this._AutoFight==true){
			//egret.log("自动打怪开启，继续寻找怪物！");
			this.AutoFight();
		}

	}

	private _idTimeout:number;
	private _AtkSpeed:number=1;

	//主角攻击
	private RoleAtk(evt:AtkEvent):void{
		let mon = this.getChildByName("mon"+this._SelcetId) as Mons;
		if(mon==null||mon._Hp<=0){
			return;
		}
        let ball = ImageHelper.createBitmapByName("ball_png");
		ball.scaleX=ball.scaleY=.3;
        ball.x=evt.pos.x-(ball.width/2);
		ball.y=evt.pos.y-50-(ball.height/2);
		ball.visible=false;
		if(this.role.GetRoleDir()=="11"||this.role.GetRoleDir()=="0"){
	        this.addChildAt(ball,this.getChildIndex(this.role));
		}else{
			this.addChildAt(ball,this.getChildIndex(this.role)+1);
		}

		//攻击距离
		let atkdis = new egret.Point(mon.x-ball.x,mon.y-ball.y);
		let dist:number=Math.sqrt(	atkdis.x*atkdis.x+atkdis.y *atkdis.y )*2*this._AtkSpeed;
		var tw = egret.Tween.get(ball);
		tw.to( {x:ball.x,y:ball.y}, 300).call(function(){ball.visible=true;},this).wait(0)
		.to( {x:mon.x,y:mon.y-30}, dist).call(function(){ball.parent.removeChild(ball);mon.Attacked()},this);

		//
		var bEvent = egret.Event.create(Battle_Event,Battle_Event.Add_Gold);
		bEvent.vlaue=Main.DdNum*-1;

		if(this.stage){
			this.stage.dispatchEvent(bEvent);
		}
	}

	/**
	 * 我的攻击结束（一次）
	 */
	private MyAtkCompleteEvent(evt:Battle_Event){
		this.role.StartAtk(true);
	}

	private CreatGold(pos:egret.Point,db:number):void{
		PopManager.JumpMsg("怪物倍率X"+db);
		for( var i = 0; i<10; ++i ){
			let gold:DropItem = new DropItem(this.role,db);
			gold.x=pos.x+(100-(Math.random()*200));
			gold.y=pos.y+(100-(Math.random()*200));
			// gold.y=Math.floor(Math.random()*(pos.y+100));;
			this.goldUi.addChild(gold);
		}
		SoundMenager.Shared().PlayerEff("drop");
	}

	/**
	 * 深度排序
	 */
	private OnEnter(event: egret.Event){
		this.getObjByRange(500);
	}

	/**
	 * 需找指定范围内的怪物和玩家
	 */
	private getObjByRange(range:number){
		let roleX:number=this.role.x;
		let roleY:number=this.role.y;
		let childNum:number=this.numChildren;
		//从1开始，0是背景
		//egret.log("碰撞检测="+childNum);
		for( var i = 1; i<childNum; ++i ){
			let childObj= this.getChildAt(i);
			if(childObj.x<roleX+range||childObj.x>roleX-range&&childObj.y<roleY+range||childObj.y>roleY-range){
				if(this.hitTestP(this.role,childObj)){
					//egret.log("碰撞对象="+childObj.name);
					if(this.role.y>=childObj.y&&this.getChildIndex(this.role)<this.getChildIndex(childObj)||this.role.y<childObj.y&&this.getChildIndex(this.role)>this.getChildIndex(childObj)){
						this.swapChildren(this.role,childObj);
						//egret.log("交换深度");
					}
				}
			}
		}
	}

	/**
	 * 检测碰撞
	 */
	private hitTestP(obj1: egret.DisplayObject,obj2: egret.DisplayObject): boolean {
        var rect1:egret.Rectangle = obj1.getBounds();//获取显示对象的测量边界
        var rect2:egret.Rectangle = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        //此方法检查指定的 Rectangle 对象的 x、y、width 和 height 属性，以查看它是否与此 Rectangle 对象相交。
        return rect1.intersects(rect2);
    }

	private _AutoFight:boolean;
	/**
	 * 自动战斗
	 */
	private AutoFightEvent(event:Battle_Event){
		this._AutoFight = event.vlaue as boolean;
		//自动战斗禁止操作
		this.touchEnabled=!this._AutoFight;
		this.touchChildren=	!this._AutoFight;
		if(this._AutoFight==true){
			//egret.log("自动打怪开启");
			if(this._SelcetId>-1){
				//egret.log("正在打怪，等待怪物死亡");
			}else{
				//egret.log("空闲中，可以自动");
				this.AutoFight();
			}
		}
	}

	private AutoFight(){
		let roleX:number=this.role.x;
		let roleY:number=this.role.y;
		let childNum:number=this.numChildren;
		//从1开始，0是背景
		let minDist:number=3000;
		let minMonId:number=-1;
		for( var i = 1; i<childNum; ++i ){
			let childObj= this.getChildAt(i) as Mons;
			if(childObj._id!=undefined&&childObj._Hp>0){
				egret.log("怪物ID="+childObj._id+"怪物HP="+childObj._Hp);
				let distance:egret.Point = new egret.Point();
				distance.x=childObj.x - roleX;
				distance.y=childObj.y - roleY;
				let dist:number=Math.sqrt(distance.x*distance.x+distance.y *distance.y );
				if(dist<minDist){
					minDist= dist;
					minMonId = (childObj as Mons)._id;
				}
			}	
		}
		//egret.log("最近的怪="+minMonId);
		if(minMonId>-1){
			let mon = this.getChildByName("mon"+minMonId) as Mons;
			mon.Click(null);
		}
	}

	/**
	 * 攻击速度
	 */
	private AtkSpeedEvent(evt:Battle_Event){
		this._AtkSpeed=evt.id;
	}

	/**
	 * 移除怪物
	 */
	private OnMonsRemoved(event:egret.Event){
		(event.currentTarget as Mons).removeEventListener(GameEvent.data,this.monsSelect,this);
		(event.currentTarget as Mons).removeEventListener(GameEvent.MON_DIE,this.MonDie,this);
		(event.currentTarget as Mons).removeEventListener(Battle_Event.Atk_Complete,this.MyAtkCompleteEvent,this);
		(event.currentTarget as Mons).removeEventListener(Battle_Event.REMOVED,this.OnMonsRemoved,this);
	}
}