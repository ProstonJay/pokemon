class Battle_window_TuJian extends eui.Component implements  eui.UIComponent {

	public static _NAME:string = "Battle_window_TuJian";

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	public _CloseBtn:eui.EffectButton;
	public _pt:eui.EffectButton;
	public _boss:eui.EffectButton;
	public _tx:eui.EffectButton;
	public _list:eui.List;
	public _list0:eui.List;
	public _list1:eui.List;

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
		this._pt.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_pt,this);
		this._boss.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_boss,this);
		this._tx.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_tx,this);
		//
		this.Click_pt(null);
	}

	private Click_pt(event:egret.TouchEvent){
		this._pt.filters=null;
		this._boss.filters=[this._colorFlilter];
		this._tx.filters=[this._colorFlilter];

		if(this._list.dataProvider==null){
					/// 填充数据
			var dsListHeros:Array<Object> = [
				{ icon: "tujian_guai_png", goodsName: "魔法石", comment: "法力加成 +3" }
				, { icon: "tujian_guai_png", goodsName: "诅咒娃娃", comment: "咒术加成 +3" }
				, { icon: "tujian_guai_png", goodsName: "万圣戒指", comment: "敏捷加成 +3" }
				, { icon: "tujian_guai_png", goodsName: "斗篷", comment: "耐力加成 +3" }
				, { icon: "tujian_guai_png", goodsName: "鹅毛笔", comment: "精神加成 +3" }
				, { icon: "tujian_guai_png", goodsName: "血滴子", comment: "嗜血加成 +3" }
				, { icon: "tujian_guai_png", goodsName: "屠龙刀", comment: "力量加成 +5" }
				, { icon: "tujian_guai_png", goodsName: "屠龙刀", comment: "力量加成 +5" }
				, { icon: "tujian_guai_png", goodsName: "屠龙刀", comment: "力量加成 +5" }
				, { icon: "tujian_guai_png", goodsName: "屠龙刀", comment: "力量加成 +5" }
			];
			this._list.dataProvider = new eui.ArrayCollection( dsListHeros );
			this._list.itemRenderer = eui.Battle_Window_Tujian_Good;
		}
		this._list.visible=true;
		this._list0.visible=false;
		this._list1.visible=false;
	}

	private Click_boss(event:egret.TouchEvent){
		this._pt.filters=[this._colorFlilter];
		this._boss.filters=null;
		this._tx.filters=[this._colorFlilter];

		if(this._list0.dataProvider==null){
					/// 填充数据
			var dsListHeros:Array<Object> = [
				{ icon: "guaiwu2_png", goodsName: "魔法石", comment: "法力加成 +3" }
				, { icon: "guaiwu2_png", goodsName: "诅咒娃娃", comment: "咒术加成 +3" }
				, { icon: "guaiwu2_png", goodsName: "万圣戒指", comment: "敏捷加成 +3" }
				, { icon: "guaiwu2_png", goodsName: "斗篷", comment: "耐力加成 +3" }
				, { icon: "guaiwu2_png", goodsName: "鹅毛笔", comment: "精神加成 +3" }
				, { icon: "guaiwu2_png", goodsName: "血滴子", comment: "嗜血加成 +3" }
				
			];
			this._list0.dataProvider = new eui.ArrayCollection( dsListHeros );
			this._list0.itemRenderer = eui.Battle_Window_Tujian_Good;
		}
		this._list.visible=false;
		this._list0.visible=true;
		this._list1.visible=false;
	}

	private Click_tx(event:egret.TouchEvent){
		this._pt.filters=[this._colorFlilter];
		this._boss.filters=[this._colorFlilter];
		this._tx.filters=null;

		if(this._list1.dataProvider==null){
			/// 填充数据
			var dsListHeros:Array<Object> = [
				{ icon: "guaiwu1_png", goodsName: "魔法石", comment: "法力加成 +3" }
				, { icon: "guaiwu1_png", goodsName: "诅咒娃娃", comment: "咒术加成 +3" }
				, { icon: "guaiwu1_png", goodsName: "万圣戒指", comment: "敏捷加成 +3" }
				, { icon: "guaiwu1_png", goodsName: "斗篷", comment: "耐力加成 +3" }
				, { icon: "guaiwu1_png", goodsName: "鹅毛笔", comment: "精神加成 +3" }
			];
			this._list1.dataProvider = new eui.ArrayCollection( dsListHeros );
			this._list1.itemRenderer = eui.Battle_Window_Tujian_Good;
		}
		this._list.visible=false;
		this._list0.visible=false;
		this._list1.visible=true;
	}
	

	private Click_CloseBtn(event:egret.TouchEvent){
		this.parent.removeChild(this);
	}
}