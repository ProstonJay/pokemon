class Hall_Window_Shop extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Hall_Window_Shop";

	public constructor(val:number=1) {
		super();
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
		this._Page=val;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	private Removed(event: egret.Event) {
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
		this._CloseBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);
		this._goldBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_goldBtn,this);
		this._dmBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_dmBtn,this);
		this._list0.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler_list0, this);
		this._list1.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler_list1, this);
	}

	private _Page:number;

	public _dmBtn:eui.EffectButton;
	public _goldBtn:eui.EffectButton;
	public _CloseBtn:eui.EffectButton;
	public _list1:eui.List;
	public _list0:eui.List;
	public _VipBtn:eui.EffectButton;


	private _page1:Array<Object>=[];
	private _page2:Array<Object>=[];

	private _colorFlilter = new egret.ColorMatrixFilter( [
        0.3,0.6,0,0,0,
        0.3,0.6,0,0,0,
        0.3,0.6,0,0,0,
        0,0,0,1,0
    ]);

	protected childrenCreated():void
	{
		super.childrenCreated();

		this._CloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);
		this._goldBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_goldBtn,this);
		this._dmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_dmBtn,this);
		this._VipBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_VipBtn,this);
		this._list0.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler_list0, this);
		this._list1.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTapHandler_list1, this);

		var ShopData:Array<Object> = RES.getRes("Shop_json");
		for( var i = 0; i<ShopData.length; ++i ){
			if(ShopData[i]["page"]==1){
				this._page1.push(ShopData[i]);
			}else{
				this._page2.push(ShopData[i]);
			}
		}
		this._Page==1?this.Click_goldBtn(null):this.Click_dmBtn(null);
	}

	private Click_goldBtn(event:egret.TouchEvent){
		this._dmBtn.filters=[this._colorFlilter];
		this._goldBtn.filters=null;

		if(this._list0.dataProvider==null){
			this._list0.dataProvider = new eui.ArrayCollection( this._page1 );
			this._list0.itemRenderer = Hall_Window_Shop_Good;
		}
		this._list0.visible=true;
		this._list1.visible=false;
	}

	private Click_dmBtn(event:egret.TouchEvent){
		this._dmBtn.filters=null;
		this._goldBtn.filters=[this._colorFlilter];

		if(this._list1.dataProvider==null){
			this._list1.dataProvider = new eui.ArrayCollection( this._page2);
			this._list1.itemRenderer = Hall_Window_Shop_Good;
		}
		this._list0.visible=false;
		this._list1.visible=true;
	}

	private onItemTapHandler_list0(event:eui.ItemTapEvent){
		PopManager.JumpMsg("充值未开放！");
	}

	private onItemTapHandler_list1(event:eui.ItemTapEvent){
		PopManager.JumpMsg("充值未开放！");
	}


	private Click_CloseBtn(event:egret.TouchEvent){
		App.DisplayUtils.removeFromParent(this);
	}

	private Click_VipBtn(event:egret.TouchEvent){
		WinManager.AddWindow(Hall_Window_Vip._NAME);
	}
	
	
}