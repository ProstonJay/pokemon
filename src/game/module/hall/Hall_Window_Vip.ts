class Hall_Window_Vip extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Hall_Window_Vip";

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
	}
		
	public _CloseBtn:eui.EffectButton;
	public _list:eui.List;
	public _NowVipTT:eui.BitmapLabel;
	public _NextVipTT:eui.BitmapLabel;
	public _NextVipTT0:eui.BitmapLabel;
	public _NeedMoneyTT:eui.BitmapLabel;
	public _BarImg:eui.Image;


	private _DataArr:Array<Object>=[];

	protected childrenCreated():void
	{
		super.childrenCreated();

		this._CloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);
		this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler_list, this);
		//假设VIP等级
		let VipExp:number=500;

		this._DataArr = RES.getRes("Vip_json");
		let len:number =this._DataArr.length;
		for( var i = 0; i<len; ++i ){
			this._DataArr[i]["AssetName"]="email_zuan_png";
			if(this._DataArr[i]["Cost"]<VipExp&&this._DataArr[i+1]["Cost"]>VipExp){
				egret.log(this._DataArr[i]["Id"]);
				this._NowVipTT.text=this._DataArr[i]["Id"];
				this._NextVipTT.text=this._DataArr[i+1]["Id"];
				this._NextVipTT0.text=this._DataArr[i+1]["Id"];
				this._NeedMoneyTT.text=this._DataArr[i+1]["Cost"]-VipExp+"";
				this._BarImg.width=337*(Number(this._NeedMoneyTT.text)/(this._DataArr[i+1]["Cost"]-this._DataArr[i]["Cost"]));
			}
		}

		if(this._list.dataProvider==null){
			this._list.dataProvider = new eui.ArrayCollection( this._DataArr );
			this._list.itemRenderer = Hall_Window_Vip_Good;
		}



	}

	private onItemTapHandler_list(event:eui.ItemTapEvent){
		WinManager.AddWindow(Hall_Window_Vip_Open._NAME,this._list.selectedItem,false);
	}


	private Click_CloseBtn(event:egret.TouchEvent){
		App.DisplayUtils.removeFromParent(this);
	}
	
}