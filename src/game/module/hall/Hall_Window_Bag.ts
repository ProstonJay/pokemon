class Hall_Window_Bag extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Hall_Window_Bag";

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
		this._TabBtn1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_TabBtn1,this);
		this._TabBtn2.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_TabBtn2,this);
		this._TabBtn3.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_TabBtn3,this);
	}

	private _Page:number;

	public _CloseBtn:eui.EffectButton;
	public _TabBtn1:eui.EffectButton;
	public _TabBtn2:eui.EffectButton;
	public _TabBtn3:eui.EffectButton;
	public _list:eui.List;
	public _list0:eui.List;
	public _list1:eui.List;


	private _page:Array<Object>=[];
	private _page0:Array<Object>=[];
	private _page1:Array<Object>=[];


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
		this._TabBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_TabBtn1,this);
		this._TabBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_TabBtn2,this);
		this._TabBtn3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_TabBtn3,this);

		// libao_tubiao_jinbi_png
		// libao_tubiao_zuanshi_png

		let len:number = GlobalData.GetInstance().itemArr.length;
		for( var i = 0; i<len; ++i ){
			if(GlobalData.GetInstance().itemArr[i]["page"]==1){
				GlobalData.GetInstance().itemArr[i]["AssetName"]="libao_tubiao_jinbi_png";
				this._page.push(GlobalData.GetInstance().itemArr[i]);
			}else if(GlobalData.GetInstance().itemArr[i]["page"]==2){
				GlobalData.GetInstance().itemArr[i]["AssetName"]="libao_tubiao_zuanshi_png";
				this._page0.push(GlobalData.GetInstance().itemArr[i]);
			}else if(GlobalData.GetInstance().itemArr[i]["page"]==3){
				GlobalData.GetInstance().itemArr[i]["AssetName"]="libao_tubiao_zuanshi_png";
				this._page1.push(GlobalData.GetInstance().itemArr[i]);
			}
		}
		//this._Page==1?this.Click_goldBtn(null):this.Click_dmBtn(null);
		this.Click_TabBtn1(null);
	}

	private Click_TabBtn1(event:egret.TouchEvent){
		this._TabBtn2.filters=this._TabBtn3.filters=[this._colorFlilter];
		this._TabBtn1.filters=null;

		if(this._list.dataProvider==null){
			this._list.dataProvider = new eui.ArrayCollection( this._page );
			this._list.itemRenderer = Hall_Window_Bag_Good;
		}
		this._list.visible=true;
		this._list0.visible=false;
		this._list1.visible=false;
	}

	private Click_TabBtn2(event:egret.TouchEvent){
		this._TabBtn1.filters=this._TabBtn3.filters=[this._colorFlilter];
		this._TabBtn2.filters=null;

		if(this._list0.dataProvider==null){
			this._list0.dataProvider = new eui.ArrayCollection( this._page0 );
			this._list0.itemRenderer = Hall_Window_Bag_Good;
		}
		this._list.visible=false;
		this._list0.visible=true;
		this._list1.visible=false;
	}

	private Click_TabBtn3(event:egret.TouchEvent){
		this._TabBtn1.filters=this._TabBtn2.filters=[this._colorFlilter];
		this._TabBtn3.filters=null;

		if(this._list1.dataProvider==null){
			this._list1.dataProvider = new eui.ArrayCollection( this._page1 );
			this._list1.itemRenderer = Hall_Window_Bag_Good;
		}
		this._list.visible=false;
		this._list0.visible=false;
		this._list1.visible=true;
	}


	private Click_CloseBtn(event:egret.TouchEvent){
		this.parent.removeChild(this);
	}
	
}