class Halls extends eui.Component implements  eui.UIComponent {

	public static NAME:string = "Halls";

	public constructor() {
		super();
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
	}

    protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

    private Removed(event: egret.Event) {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
        //
        this._BattleBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_Battle,this);
        this._PkBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_Pk,this);
        this._BuyGoldBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_BuyGold,this);
        this._BuyDmBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_BuyDmBtn,this);
		this._SetBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_SetBtn,this);
        this._MailBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_MailBtn,this);
		this._RankBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_RankBtn,this);
        this._TratBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_TratBtn,this);
        this._BagBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_BagBtn,this);
        this._RoleBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_RoleBtn,this);
		this._CjBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CjBtn,this);
		this._HbBen.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_HbBen,this);
        this._QdBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_QdBtn,this);
        this._YkBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_YkBtn,this);
        this._NewbBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_NewbBtn,this);
		this._VipBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_VipBtn,this);
    }

	public _group:eui.Group;
	public _BattleBtn:eui.Button;
	public _PkBtn:eui.Button;
	public _BuyGoldBtn:eui.Button;
	public _BuyDmBtn:eui.Button;
	public _SetBtn:eui.Button;
	public _MailBtn:eui.Button;
	public _RankBtn:eui.Button;
	public _TratBtn:eui.Button;
	public _BagBtn:eui.Button;
	public _RoleBtn:eui.Button;
	public _CjBtn:eui.Button;
	public _HbBen:eui.Button;
	public _QdBtn:eui.Button;
	public _YkBtn:eui.Button;
	public _NewbBtn:eui.Button;
	public _VipBtn:eui.Button;
	//
	public _Icon:eui.Image;

	protected childrenCreated():void
	{
		super.childrenCreated();
		//
		var data = RES.getRes("laba_mc_json");
		var txtr = RES.getRes("laba_mc_png");
		var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
		let labamc = new egret.MovieClip( mcFactory.generateMovieClipData("laba"));
		labamc.x=160;
		labamc.y=85;
		this.addChild(labamc);
		labamc.gotoAndPlay("go",-1);

        //
        this._BattleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_Battle,this);
        this._PkBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_Pk,this);
        this._BuyGoldBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_BuyGold,this);
        this._BuyDmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_BuyDmBtn,this);
		this._SetBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_SetBtn,this);
        this._MailBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_MailBtn,this);
		this._RankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_RankBtn,this);
        this._TratBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_TratBtn,this);
        this._BagBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_BagBtn,this);
        this._RoleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_RoleBtn,this);
		this._CjBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CjBtn,this);
		this._HbBen.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_HbBen,this);
        this._QdBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_QdBtn,this);
        this._YkBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_YkBtn,this);
        this._NewbBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_NewbBtn,this);
		this._VipBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_VipBtn,this);


        this.width=Main.StageWd;
        this.height=Main.StageHg;
        //
        SoundMenager.Shared().PlayBGM("Hall");
	}



	/**
     * 进入战场
     */
    private Click_Battle(event:egret.TouchEvent){
        Main.BttleId=1;
		SenceManager.ChangeSence(Battle.NAME);
    }
	/**
     * 竞技场
     */
    private Click_Pk(event:egret.TouchEvent){
        Main.BttleId=2;
		SenceManager.ChangeSence(Battle.NAME);
    }

	/**
     * 购买金币
     */
    private Click_BuyGold(event:egret.TouchEvent){
            WinManager.AddWindow(Hall_Window_Shop._NAME);
    }
	/**
     * 购买钻石
     */
    private Click_BuyDmBtn(event:egret.TouchEvent){
           WinManager.AddWindow(Hall_Window_Shop._NAME);
    }
	/**
     * 设置
     */
    private Click_SetBtn(event:egret.TouchEvent){
        WinManager.AddWindow(Hall_Window_Shop._NAME);
    }
	/**
     * 邮件
     */
    private Click_MailBtn(event:egret.TouchEvent){
       WinManager.AddWindow(Hall_Window_Email._NAME);
    }
	/**
     * 排行榜
     */
    private Click_RankBtn(event:egret.TouchEvent){
         WinManager.AddWindow(Hall_Window_Rank._NAME);
    }
	/**
     * 兑换
     */
    private Click_TratBtn(event:egret.TouchEvent){
        WinManager.AddWindow(Battle_Window_Duihuan._NAME);
    }
	/**
     * 背包
     */
    private Click_BagBtn(event:egret.TouchEvent){
        WinManager.AddWindow(Hall_Window_Bag._NAME);
    }
	/**
     * 角色
     */
    private Click_RoleBtn(event:egret.TouchEvent){
        PopManager.JumpMsg("角色功能未开放！");
    }
	/**
     * 抽奖
     */
    private Click_CjBtn(event:egret.TouchEvent){
        PopManager.JumpMsg("抽奖功能未开放！");
    }
	/**
     * 分享红包
     */
    private Click_HbBen(event:egret.TouchEvent){
        PopManager.JumpMsg("分享功能未开放！");
    }
	/**
     * 签到
     */
    private Click_QdBtn(event:egret.TouchEvent){
        PopManager.JumpMsg("签到功能未开放！");
    }
	/**
     * 月卡礼包
     */
    private Click_YkBtn(event:egret.TouchEvent){
         WinManager.AddWindow(Hall_Window_Guizu._NAME);
    }
	/**
     * 新手活动
     */
    private Click_NewbBtn(event:egret.TouchEvent){
        WinManager.AddWindow(Hall_Window_Shouchong._NAME);
    }
	/**
     * Vip特权
     */
    private Click_VipBtn(event:egret.TouchEvent){
        WinManager.AddWindow(Hall_Window_Vip._NAME);
    }


}