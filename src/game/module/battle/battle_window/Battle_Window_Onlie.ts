class Battle_Window_Onlie extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Battle_Window_Onlie";

	public constructor() {
		super();
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	private Removed(event: egret.Event) {
		egret.clearTimeout( this._idTimeout );
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
		this.removeEventListener( egret.Event.ENTER_FRAME, this.BgRotation, this ); 
	}

	public _LightImg:eui.Image;
	//
	public _idTimeout:number

	protected childrenCreated():void
	{
		super.childrenCreated();

		this.addEventListener( egret.Event.ENTER_FRAME, this.BgRotation, this ); 

		this._idTimeout = egret.setTimeout(this.CloseWin,this,3000); 

		SoundMenager.Shared().PlayerEff("jl");
	}

	private BgRotation(event:egret.Event){
		this._LightImg.rotation += 3;
	}
	
	private CloseWin(){
		this.parent.removeChild(this);
	}
	
}