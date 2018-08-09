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
        this._MapNewHomeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_MapNewHomeBtn,this);
        this._MapCrazyMonBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_MapCrazyMonBtn,this);
        this._BuyGoldBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_BuyGold,this);
        this._BuyDmBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_BuyDmBtn,this);
		this._SetBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_SetBtn,this);
        this._MailBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_MailBtn,this);
		this._RankBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_RankBtn,this);
        this._TratBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_TratBtn,this);
        this._BagBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_BagBtn,this);
        this._RoleBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_RoleBtn,this);
		this._CjBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CjBtn,this);
		this._GuiZuBen.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_GuiZuBen,this);
        this._QdBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_QdBtn,this);
        this._NewbBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_NewbBtn,this);
		this._VipBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_VipBtn,this);
    }

    public _group:eui.Group;
    public bg:eui.Image;
    public _BuyGoldBtn:eui.Button;
    public _BuyDmBtn:eui.Button;
    public _NewbBtn:eui.EffectButton;
    public _GuiZuBen:eui.EffectButton;
    public _VipBtn:eui.EffectButton;
    public _MailBtn:eui.EffectButton;
    public _QdBtn:eui.EffectButton;
    public _CjBtn:eui.EffectButton;
    public _MapNewHomeBtn:eui.EffectButton;
    public _MapNotOpenBtn:eui.EffectButton;
    public _MapMonBtn:eui.EffectButton;
    public _MapHallMonBtn:eui.EffectButton;
    public _MapCrazyMonBtn:eui.EffectButton;
    public _RoleBtn:eui.EffectButton;
    public _TratBtn:eui.EffectButton;
    public _BagBtn:eui.EffectButton;
    public _RankBtn:eui.EffectButton;
    public _SetBtn:eui.EffectButton;
    public _Icon:eui.Image;
    public _Name:eui.Label;
    public _GoldTT:eui.BitmapLabel;
    public _DmTT:eui.BitmapLabel;


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
        this._MapNewHomeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_MapNewHomeBtn,this);
        this._MapCrazyMonBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_MapCrazyMonBtn,this);
        this._BuyGoldBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_BuyGold,this);
        this._BuyDmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_BuyDmBtn,this);
		this._SetBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_SetBtn,this);
        this._MailBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_MailBtn,this);
		this._RankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_RankBtn,this);
        this._TratBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_TratBtn,this);
        this._BagBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_BagBtn,this);
        this._RoleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_RoleBtn,this);
		this._CjBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CjBtn,this);
		this._GuiZuBen.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_GuiZuBen,this);
        this._QdBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_QdBtn,this);
        this._NewbBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_NewbBtn,this);
		this._VipBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_VipBtn,this);


        this.width=Main.StageWd;
        this.height=Main.StageHg;
        //
        this._GoldTT.text=egret.localStorage.getItem("gold");
        this._DmTT.text="0";
        //
        GlobalData.GetInstance().itemArr =  RES.getRes("Pack_json");
        //
        SoundMenager.Shared().PlayBGM("Hall");
	}



	/**
     * 进入战场
     */
    private Click_MapNewHomeBtn(event:egret.TouchEvent){
        Main.BttleId=2;
		SenceManager.ChangeSence(Battle.NAME);
    }
	/**
     * 竞技场
     */
    private Click_MapCrazyMonBtn(event:egret.TouchEvent){
        Main.BttleId=1;
		SenceManager.ChangeSence(Battle.NAME);
    }

	/**
     * 购买金币
     */
    private Click_BuyGold(event:egret.TouchEvent){
            WinManager.AddWindow(Hall_Window_Shop._NAME,1);
    }
	/**
     * 购买钻石
     */
    private Click_BuyDmBtn(event:egret.TouchEvent){
           WinManager.AddWindow(Hall_Window_Shop._NAME,2);
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
        WinManager.AddWindow(Hall_Window_Exchange._NAME);
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
     * 贵族礼包
     */
    private Click_GuiZuBen(event:egret.TouchEvent){
        WinManager.AddWindow(Hall_Window_Guizu._NAME);
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
     * 首冲礼包
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