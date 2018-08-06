class Battle_Window_Duihuan_Adress extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Battle_Window_Duihuan_Adress";	

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	public _CloseBtn:eui.EffectButton;
	public _SaveBtn:eui.EffectButton;


	protected childrenCreated():void
	{
		super.childrenCreated();

		this._CloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);
		this._SaveBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_SaveBtn,this);

	}

	private Click_SaveBtn(event:egret.TouchEvent){
	
	}

	private Click_CloseBtn(event:egret.TouchEvent){
		WinManager.AddWindow(Battle_Window_Duihuan_JP._NAME);
	}
	
}