class Hall_Window_Shop extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Hall_Window_Shop";

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

	public _dmBtn:eui.EffectButton;
	public _goldBtn:eui.EffectButton;
	public _CloseBtn:eui.EffectButton;
	public _list1:eui.List;
	public _list0:eui.List;


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

		this.Click_goldBtn(null);
	}

	private Click_goldBtn(event:egret.TouchEvent){
		this._dmBtn.filters=[this._colorFlilter];
		this._goldBtn.filters=null;

		if(this._list0.dataProvider==null){
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
			this._list0.dataProvider = new eui.ArrayCollection( dsListHeros );
			this._list0.itemRenderer = Hall_Window_Bag_Good;
		}
		this._list0.visible=true;
		this._list1.visible=false;
	}

	private Click_dmBtn(event:egret.TouchEvent){
		this._dmBtn.filters=null;
		this._goldBtn.filters=[this._colorFlilter];

		if(this._list1.dataProvider==null){
					/// 填充数据
			var dsListHeros:Array<Object> = [
			{ icon: "air_png", goodsName: "魔法石", comment: "增加魔法上限 +10000" }
				, { icon: "air_png", goodsName: "诅咒娃娃", comment: "咒术加成效果 +3000" }
				, { icon: "air_png", goodsName: "万圣戒指", comment: "敏捷加成效果 +3" }
					
			];
			this._list1.dataProvider = new eui.ArrayCollection( dsListHeros );
			this._list1.itemRenderer = Hall_Window_Bag_Good;
		}
		this._list0.visible=false;
		this._list1.visible=true;
	}


	private Click_CloseBtn(event:egret.TouchEvent){
		App.DisplayUtils.removeFromParent(this);
	}
	
}