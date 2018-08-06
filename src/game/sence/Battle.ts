class Battle extends eui.UILayer {

    public static NAME:string = "Battle";

    protected createChildren(): void {
        super.createChildren();
        this.initView();
    }

	private _mapLay:MapLayer;
    private _Battle_Ui:Battle_Ui;

	private initView():void{
		this._mapLay = new MapLayer();
		this.addChild(this._mapLay);
        this._Battle_Ui = new Battle_Ui();
		this.addChild(this._Battle_Ui);
		
        //
        SoundMenager.Shared().PlayBGM("Battle");
	} 

}