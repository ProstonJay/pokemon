class Hall_Window_Shouchong extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Hall_Window_Shouchong";

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
	}

	public _CloseBtn:eui.EffectButton;
	public _BuyBtn:eui.EffectButton;
	public _list:eui.List;

	private _DataArr:Array<Object>=[];

	protected childrenCreated():void
	{
		super.childrenCreated();

		this._CloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);
		this._BuyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_BuyBtn,this);

		this._DataArr = RES.getRes("Charge_json");
		let tpArr:Array<Object>=[];
		let lens:number=this._DataArr.length;
		for(var i=0;i<lens;i++){
			let id:number=this._DataArr[i]["Id"];
			let obj:Object=GlobalData.GetInstance().GetItemById(id);
			let ckbj:Object= {AssetName:"libao_tubiao_jinbi_png",
							  Name:obj["Name"],Description:obj["Description"],
							  num:"X "+this._DataArr[i]["Amount"]
			};
			tpArr.push(ckbj);
		}
		this._list.dataProvider = new eui.ArrayCollection( tpArr );
		this._list.itemRenderer = Hall_Window_Shouchong_Good;
	}

	private Click_BuyBtn(event:egret.TouchEvent){
		PopManager.JumpMsg("充值系统未开放！");
		App.DisplayUtils.removeFromParent(this);
	}

	private Click_CloseBtn(event:egret.TouchEvent){
		App.DisplayUtils.removeFromParent(this);
	}
}