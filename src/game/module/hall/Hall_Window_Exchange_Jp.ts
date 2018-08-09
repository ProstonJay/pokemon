class Hall_Window_Exchange_Jp extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Hall_Window_Exchange_Jp";

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
		   WinManager.AddWindow(Hall_Window_Exchange_Adress._NAME);
	}

	private Click_CloseBtn(event:egret.TouchEvent){
		this.parent.removeChild(this);
	}
	
}