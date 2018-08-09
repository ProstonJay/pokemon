class Hall_Window_Exchange extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Hall_Window_Exchange";

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
		this._list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler_list, this);
	}

	public _CloseBtn:eui.EffectButton;
	public _JpBtn:eui.EffectButton;
	public _list:eui.List;

	private _page1:Array<Object>=[];


	protected childrenCreated():void
	{
		super.childrenCreated();

		this._CloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);
		this._JpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_JpBtn,this);
		this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler_list, this);

		this._page1 = RES.getRes("Cash_json");
		for( var i = 0; i<this._page1 .length; ++i ){
			this._page1[i]["AssetName"]="email_zuan_png";
		}

		if(this._list.dataProvider==null){
			this._list.dataProvider = new eui.ArrayCollection( this._page1 );
			this._list.itemRenderer = Hall_Window_Exchange_Good;
		}

	}

	private onItemTapHandler_list(event:eui.ItemTapEvent){
		WinManager.AddWindow(Hall_Window_Exchange_Good_Info._NAME,null,false);
	}


	private Click_JpBtn(event:egret.TouchEvent){
		   WinManager.AddWindow(Hall_Window_Exchange_Jp._NAME);
	}

	private Click_CloseBtn(event:egret.TouchEvent){
		this.parent.removeChild(this);
	}
	
}