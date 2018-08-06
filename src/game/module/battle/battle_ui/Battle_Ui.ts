class Battle_Ui extends eui.Component implements  eui.UIComponent {

	public constructor() {
		super();
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

    private Removed(event: egret.Event) {
        this._timer.stop();
        this._timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        //
        egret.Tween.removeTweens(this._onlieBtn);
        egret.Tween.removeTweens(this._dhBtn);
        egret.Tween.removeTweens(this._gjBtn);
       //
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
        this.parent.removeEventListener(egret.Event.RESIZE, this.ScreenResiz, this);
        this.stage.removeEventListener(Battle_Event.Add_Gold,this.AddGold,this);
        //
        this._backBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_backBtn,this);
        this._addGoldBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_addGoldBtn,this);
        this._roomKey.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_roomKey,this);
        this._tjBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_tjBtn,this);
        this._activeKey.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_activeKey,this);
        this._onlieBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_onlieBtn,this);
        this._dhBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_dhBtn,this);
        this._gjBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_gjBtn,this);
        this._autoBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_autoBtn,this);
        this._speedBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_speedBtn,this);
        this._addPowBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_addPowBtn,this);
        this._redPowBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_redPowBtn,this);
        this._skill1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_skill1,this);
        this._skill2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_skill2,this);
        this._skill3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_skill3,this);
    }
    public _group:eui.Group;
    public _roomBg:eui.Image;
    public _backBtn:eui.EffectButton;
    public _addGoldBtn:eui.EffectButton;
    public _roomKey:eui.EffectButton;
    public _tjBtn:eui.EffectButton;
    public _activeKey:eui.EffectButton;
    public _onlieBtn:eui.EffectButton;
    public _dhBtn:eui.EffectButton;
    public _gjBtn:eui.EffectButton;
    public _autoBtn:eui.EffectButton;
    public _speedBtn:eui.EffectButton;
    public _skill2:eui.EffectButton;
    public _skill3:eui.EffectButton;
    public _skill1:eui.EffectButton;
    public _addPowBtn:eui.EffectButton;
    public _redPowBtn:eui.EffectButton;
    public _SpedTT:eui.BitmapLabel;

    //
    public _GoldTT:eui.BitmapLabel;
    public _PowerTT:eui.BitmapLabel;
    public _PnumTT:eui.BitmapLabel;
    public _dhTimeTT:eui.BitmapLabel;

    //
    private _colorFlilter = new egret.ColorMatrixFilter( [
        0.3,0.6,0,0,0,
        0.3,0.6,0,0,0,
        0.3,0.6,0,0,0,
        0,0,0,1,0
    ]);


	protected childrenCreated():void
	{
		super.childrenCreated();

        this._group.touchThrough=true;

        this._roomBg.visible=false;
        this._SpedTT.touchEnabled=false;

        this._autoBtn.filters=[this._colorFlilter];

        this._backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_backBtn,this);
        this._addGoldBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_addGoldBtn,this);
        this._roomKey.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_roomKey,this);
        this._tjBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_tjBtn,this);
        this._activeKey.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_activeKey,this);
        this._onlieBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_onlieBtn,this);
        this._dhBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_dhBtn,this);
        this._gjBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_gjBtn,this);
        this._autoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_autoBtn,this);
        this._speedBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_speedBtn,this);
        this._addPowBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_addPowBtn,this);
        this._redPowBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_redPowBtn,this);
        this._skill1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_skill1,this);
        this._skill2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_skill2,this);
        this._skill3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_skill3,this);

        this.width=Main.StageWd;
        this.height=Main.StageHg;

        this.parent.addEventListener(egret.Event.RESIZE, this.ScreenResiz, this);
        this.stage.addEventListener(Battle_Event.Add_Gold,this.AddGold,this);

        //
        this._GoldTT.text=Main.MyGOld.toString();
        this._PowerTT.text=Main.DdNum.toString();
        this._PnumTT.text="1";
        this._SpedTT.text="a";

        //在线奖励计时器
        this._timer = new egret.Timer(1000, 10);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);

        this._timer.start();
	}

    private _timer: egret.Timer;
    private _tm:number=10;
    /**
     * 在线奖励计时器
     */
    private timerFunc(event:egret.Event){
        this._tm -= 1;
        let minutes:number = Math.floor(this._tm/60);
        let second:number = this._tm%60;
        let ms:string= minutes<10?"0"+minutes:minutes.toString();
        let ss:string= second<10?"0"+second:second.toString();
        this._dhTimeTT.text= ms+":"+ss;
    }

    /**
     * UI适配
     */
    private ScreenResiz(event:egret.Event){
        this.width=Main.StageWd;
        this.height=Main.StageHg;
    }

    private AddGold(event:Battle_Event){
        Main.MyGOld+=event.vlaue;
        this._GoldTT.text=Main.MyGOld.toString();
        egret.localStorage.setItem("gold",this._GoldTT.text);
    }

    /**
     * 返回
     */
    private Click_backBtn(event:egret.TouchEvent){
        SenceManager.ChangeSence(Halls.NAME);
    }	

    /**
     * 买金币
     */
    private Click_addGoldBtn(event:egret.TouchEvent){
       
    }

    /**
     * 人数显示开关
     */
    private Click_roomKey(event:egret.TouchEvent){
       this._roomBg.visible=!this._roomBg.visible;
    }

    /**
     * 图鉴
     */
    private Click_tjBtn(event:egret.TouchEvent){
       WinManager.AddWindow(Battle_window_TuJian._NAME);
    }

    private _acKey:boolean=false;
    /**
     * 活动开关
     */
    private Click_activeKey(event:egret.TouchEvent){
       if(this._accomp==false){
           return;
       }
       this._accomp=false;
       egret.Tween.removeTweens(this._onlieBtn);
       egret.Tween.removeTweens(this._dhBtn);
       egret.Tween.removeTweens(this._gjBtn);
       this._acKey=!this._acKey;
       let dx:number=0;
       let ap:number=0;
       if(this._acKey){
            dx=200;
            ap=0;
            this._activeKey.rotation=150;
       }else{
            dx=-200;
            ap=1;
            this._activeKey.rotation=0;
       }
        var tw = egret.Tween.get(this._onlieBtn);
        egret.Tween.get(this._onlieBtn).to({ x:this._onlieBtn.x+dx,alpha: ap }, 200);
        var tw = egret.Tween.get(this._dhBtn);
        egret.Tween.get(this._dhBtn).to({ x:this._dhBtn.x+dx,alpha: ap }, 200);       
        var tw = egret.Tween.get(this._gjBtn);
        egret.Tween.get(this._gjBtn).to({ x:this._gjBtn.x+dx,alpha: ap }, 200).call(this.onComplete,this);
    }
    private _accomp:boolean=true;

    private onComplete(){
        this._accomp=true;
    }

    /**
     * 在线奖励
     */
    private Click_onlieBtn(event:egret.TouchEvent){
       if(this._tm<=0){
           WinManager.AddWindow(Battle_Window_Onlie._NAME);
           //
            Main.MyGOld+=10000;
            this._GoldTT.text=Main.MyGOld.toString();
            egret.localStorage.setItem("gold",this._GoldTT.text);
            PopManager.JumpMsg("获得金币 10000");
           //
           this._tm=10;
           this._timer.reset();
           this._timer.start();
        }else{
            PopManager.JumpMsg("没到时间，急个毛线！");
        }
    }

    /**
     * 兑换
     */
    private Click_dhBtn(event:egret.TouchEvent){
          WinManager.AddWindow(Battle_Window_Duihuan._NAME);
    }

    /**
     * 挂机
     */
    private Click_gjBtn(event:egret.TouchEvent){
        PopManager.JumpMsg("挂机功能未开放！");
    }

    /**
     * 自动战斗
     */
    private Click_autoBtn(event:egret.TouchEvent){
       var atfEvent = egret.Event.create(Battle_Event,Battle_Event.Auto_Fight);
       if(this._autoBtn.filters==null){
          this._autoBtn.filters=[this._colorFlilter];
          atfEvent.vlaue=false;
       }else{
           this._autoBtn.filters=null;
           atfEvent.vlaue=true;
       }
       this.stage.dispatchEvent(atfEvent);
    }

    /**
     * 加速攻击
     */
    private Click_speedBtn(event:egret.TouchEvent){
        this._SpedTT.text =  this._SpedTT.text=="a"?"b":"a";
        let sp:number = this._SpedTT.text=="a"?1:0.5;
		var battleEvent = egret.Event.create(Battle_Event,Battle_Event.Atk_Speed);
		battleEvent.id=sp;
        this.stage.dispatchEvent(battleEvent);
    }

    /**
     * 增加战斗值
     */
    private Click_addPowBtn(event:egret.TouchEvent){
        let kk:number=Number(this._PowerTT.text)+100;
         if(kk<=1000){
            this._PowerTT.text =  kk.toString();
             Main.DdNum =kk;
         }

    }

    /**
     * 减少战斗值
     */
    private Click_redPowBtn(event:egret.TouchEvent){
        let kk:number=Number(this._PowerTT.text)-100;
        if(kk>=10){
            this._PowerTT.text =  kk.toString();
             Main.DdNum =kk;
        } 
    }

    /**
     * 技能1
     */
    private Click_skill1(event:egret.TouchEvent){
        PopManager.JumpMsg("无法使用技能！");
    }

    /**
     * 技能2
     */
    private Click_skill2(event:egret.TouchEvent){
        PopManager.JumpMsg("无法使用技能！");
    }


    /**
     * 技能3
     */
    private Click_skill3(event:egret.TouchEvent){
        PopManager.JumpMsg("无法使用技能！");
    }

}