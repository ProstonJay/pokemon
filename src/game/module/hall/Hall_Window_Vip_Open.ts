class Hall_Window_Vip_Open extends eui.ItemRenderer implements  eui.UIComponent {

	public static _NAME:string = "Hall_Window_Vip_Open";

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
	public _Label:eui.Label;


	protected childrenCreated():void
	{
		super.childrenCreated();

		this._CloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);

		let arr = (this.data["Description"] as string).split("；");
		let err = new Array<egret.ITextElement>();
		for(var i=0;i<arr.length;i++){
			err.push({text:arr[i]+"\n\n",style:{underline:true}});
		}	

		this._Label.textFlow=err;
	}


	private Click_CloseBtn(event:egret.TouchEvent){
		App.DisplayUtils.removeFromParent(this);
	}
	
}