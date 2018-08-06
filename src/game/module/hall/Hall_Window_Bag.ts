class Hall_Window_Bag extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Hall_Window_Bag";

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
			{ icon: "air_png", goodsName: "魔法石", comment: "增加魔法上限 +10000" }
			, { icon: "air_png", goodsName: "诅咒娃娃", comment: "咒术加成效果 +3000" }
			, { icon: "air_png", goodsName: "万圣戒指", comment: "敏捷加成效果 +3" }
			, { icon: "air_png", goodsName: "斗篷", comment: "耐力加成效果 +3" }
			, { icon: "air_png", goodsName: "鹅毛笔", comment: "精神加成效果 +3" }
			, { icon: "air_png", goodsName: "血滴子", comment: "嗜血加成效果 +3" }
			, { icon: "air_png", goodsName: "屠龙刀", comment: "力量加成效果 +5" }
			, { icon: "air_png", goodsName: "屠龙刀", comment: "力量加成 +5" }
			, { icon: "air_png", goodsName: "诅咒娃娃", comment: "咒术加成 +3" }
			, { icon: "air_png", goodsName: "万圣戒指", comment: "敏捷加成 +3" }
			, { icon: "air_png", goodsName: "斗篷", comment: "耐力加成 +3" }
			, { icon: "air_png", goodsName: "鹅毛笔", comment: "精神加成 +3" }
			, { icon: "air_png", goodsName: "血滴子", comment: "嗜血加成 +3" }
			, { icon: "air_png", goodsName: "屠龙刀", comment: "力量加成 +5" }
		];
		this._list.dataProvider = new eui.ArrayCollection( dsListHeros );
		this._list.itemRenderer = Hall_Window_Bag_Good;
	}


	private Click_CloseBtn(event:egret.TouchEvent){
		this.parent.removeChild(this);
	}
	
}