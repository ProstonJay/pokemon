class Hall_Window_Rank extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Hall_Window_Rank";

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
	public _list:eui.List;

	protected childrenCreated():void
	{
		super.childrenCreated();

		this._CloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseBtn,this);

		/// 填充数据
		var dsListHeros:Array<Object> = [
			{ rank: "1", name: "玩家A", icon: "hall_ui_json.dating_touxiang_nan" }
			, { rank: "2", name: "ad家cc", icon: "hall_ui_json.dating_touxiang_nan" }
			, { rank: "3", name: "打算", icon: "hall_ui_json.dating_touxiang_nan" }
			, { rank: "4", name: "本年度", icon: "hall_ui_json.dating_touxiang_nan" }
			, { rank: "5", name: "广东非官方", icon: "hall_ui_json.dating_touxiang_nv" }
			, { rank: "6", name: "下次vx", icon: "hall_ui_json.dating_touxiang_nv" }
			, { rank: "7", name: "d导出", icon: "hall_ui_json.dating_touxiang_nv" }
			, { rank: "8", name: "广告歌", icon: "hall_ui_json.dating_touxiang_nan" }
			, { rank: "9", name: "广告歌", icon: "hall_ui_json.dating_touxiang_nan" }
			, { rank: "10", name: "非官方", icon: "hall_ui_json.dating_touxiang_nan" }
			, { rank: "11", name: "提高11", icon: "hall_ui_json.dating_touxiang_nan" }
			, { rank: "12", name: "反对的是", icon: "hall_ui_json.dating_touxiang_nan" }
			, { rank: "13", name: "4方法", icon: "hall_ui_json.dating_touxiang_nv" }
			, { rank: "14", name: "dsd", icon: "hall_ui_json.dating_touxiang_nv" }
		];
		this._list.dataProvider = new eui.ArrayCollection( dsListHeros );
		this._list.itemRenderer = Hall_Window_Rank_Good;
	}


	private Click_CloseBtn(event:egret.TouchEvent){
		App.DisplayUtils.removeFromParent(this);
	}
	
}