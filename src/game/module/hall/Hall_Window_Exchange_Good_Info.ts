class Hall_Window_Exchange_Good_Info extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Hall_Window_Exchange_Good_Info";

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	public _CloseBtn:eui.EffectButton;



	protected childrenCreated():void
	{
		super.childrenCreated();

		this._CloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);

	}


	private Click_CloseBtn(event:egret.TouchEvent){
		this.parent.removeChild(this);
	}
	
}