class Battle_Window_Duihuan extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Battle_Window_Duihuan";

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
		this._JpBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_JpBtn,this);
	}


	public _CloseBtn:eui.EffectButton;
	public _JpBtn:eui.EffectButton;


	protected childrenCreated():void
	{
		super.childrenCreated();

		this._CloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);
		this._JpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_JpBtn,this);

	}

	private Click_JpBtn(event:egret.TouchEvent){
		   WinManager.AddWindow(Battle_Window_Duihuan_JP._NAME);
	}

	private Click_CloseBtn(event:egret.TouchEvent){
		this.parent.removeChild(this);
	}
	
}