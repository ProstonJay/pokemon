class Battle_Window_Duihuan_JP extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Battle_Window_Duihuan_JP";

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	public _CloseBtn:eui.EffectButton;
	public _AdresBtn:eui.EffectButton;



	protected childrenCreated():void
	{
		super.childrenCreated();

		this._CloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);
		this._AdresBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_AdresBtn,this);

	}

	private Click_AdresBtn(event:egret.TouchEvent){
		   WinManager.AddWindow(Battle_Window_Duihuan_Adress._NAME);
	}

	private Click_CloseBtn(event:egret.TouchEvent){
		this.parent.removeChild(this);
	}
	
}