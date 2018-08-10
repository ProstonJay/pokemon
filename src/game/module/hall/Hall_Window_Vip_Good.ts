class Hall_Window_Vip_Good extends eui.ItemRenderer implements  eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	public _DetilBtn:eui.Label;

	protected childrenCreated():void
	{
		super.childrenCreated();

		this._DetilBtn.textFlow=new Array<egret.ITextElement>({text:"查看详细",style:{underline:true}});
	}
	
}