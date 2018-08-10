class Hall_Window_Email_Open extends eui.ItemRenderer implements  eui.UIComponent {

	public static _NAME:string = "Hall_Window_Email_Open";

	public constructor(val:Object) {
		super();
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
		this.data=val;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	private Removed(event: egret.Event) {
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
		this._CloseBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);
	}

	public _CloseBtn:eui.EffectButton;
	public _DeletBtn:eui.EffectButton;


	protected childrenCreated():void
	{
		super.childrenCreated();

		this._CloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);
		this._DeletBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_DeletBtn,this);
	}

	private Click_DeletBtn(event:egret.TouchEvent){
		var changeEvent = egret.Event.create(GameEvent,GameEvent.Test);
        changeEvent.pos = new egret.Point(this.x,this.y);
		changeEvent.val=this.data;
		this.stage.dispatchEvent(changeEvent);
		this.parent.removeChild(this);
	}


	private Click_CloseBtn(event:egret.TouchEvent){
		this.parent.removeChild(this);
	}
	
}