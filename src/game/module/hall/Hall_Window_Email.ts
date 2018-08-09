class Hall_Window_Email extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Hall_Window_Email";

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
		this._CloseBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);
		this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler_list, this);
		this.stage.removeEventListener(GameEvent.Test,this.deleteMail,this);
	}

	public _CloseBtn:eui.EffectButton;
	public _list:eui.List;

	private  _dsListHeros:Array<Object> = [];
	private _data:eui.ArrayCollection;

	protected childrenCreated():void
	{
		super.childrenCreated();

		this._CloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);
		this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler_list, this);
		this.stage.addEventListener(GameEvent.Test,this.deleteMail,this);
		/// 填充数据
		this._dsListHeros = [
			{ id:1,Name: "内测玩家", Description: "来自系统的问候",Content:"内测玩家请联系管理员领取内测奖励"}
			, { id:2,Name: "系统", Description: "系统邮件", Content:"您的奖品[鲁班太空皮肤]已经发出，请注意查收！"}
			, { id:3,Name: "内测玩家", Description: "系统邮件" ,Content:"加好友吗？一起玩"}
			, { id:4,Name: "神奇贝贝", Description: "系统邮件" ,Content:"加好友吗？一起玩"}
			, { id:5,Name: "飞舞娃娃", Description: "系统邮件" ,Content:"加好友吗？一起玩"}
			, { id:6,Name: "飞舞娃娃", Description: "系统邮件" ,Content:"加好友吗？一起玩"}
			, { id:7,Name: "飞舞娃娃", Description: "系统邮件" ,Content:"加好友吗？一起玩"}
			, { id:8,Name: "飞舞娃娃", Description: "系统邮件" ,Content:"加好友吗？一起玩"}
			, { id:9,Name: "飞舞娃娃", Description: "系统邮件" ,Content:"加好友吗？一起玩"}
			, { id:10,Name: "飞舞娃娃", Description: "系统邮件" ,Content:"加好友吗？一起玩"}
			, { id:11,Name: "飞舞娃娃", Description: "系统邮件" ,Content:"加好友吗？一起玩"}
			, { id:12,Name: "神奇贝贝", Description: "系统邮件" ,Content:"加好友吗？一起玩"}
			, { id:13,Name: "神奇贝贝", Description: "系统邮件" ,Content:"加好友吗？一起玩"}
			, { id:14,Name: "神奇贝贝", Description: "系统邮件" ,Content:"加好友吗？一起玩"}
		];
		this._data =new eui.ArrayCollection( this._dsListHeros );
		this._list.dataProvider =this._data ;
		this._list.itemRenderer = Hall_Window_Email_Good;
	}

	private onItemTapHandler_list(event:eui.ItemTapEvent){
		WinManager.AddWindow(Hall_Window_Email_Open._NAME,this._list.selectedItem,false);
	}

	private deleteMail(event:GameEvent){
		this._data.removeItemAt(this._dsListHeros.indexOf(event.val));
		// egret.log("this._dsListHeros.indexOf(event.val)="+this._dsListHeros.indexOf(event.val));
	}


	private Click_CloseBtn(event:egret.TouchEvent){
		this.parent.removeChild(this);
	}
	
}