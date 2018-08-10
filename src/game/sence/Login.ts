class Login extends eui.Component implements  eui.UIComponent {

	public static NAME:string = "Login";

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
        //
        this._EnterBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_EnterBtn,this);
		this._VersionBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_VersionBtn,this);
		this._CloseVerBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseVerBtn,this);
    }


	public _EnterBtn:eui.EffectButton;
	public _VersionBtn:eui.EffectButton;
	public _CloseVerBtn:eui.EffectButton;
	public _VerBgImg:eui.Image;
	public _VerTT:eui.Label;

	protected childrenCreated():void
	{
		super.childrenCreated();
		this._EnterBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_EnterBtn,this);
		this._VersionBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_VersionBtn,this);
		this._CloseVerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Click_CloseVerBtn,this);
		this._VerTT.visible=this._VerBgImg.visible=this._CloseVerBtn.visible=false;
		let data:string = RES.getRes("VersionDs_txt");
		this._VerTT.text=data
		//this._VerTT.text="内部版本：ver 1.0.0.3                   1.大厅界面更新  2."
		//默认连接登录服务器
		// App.Socket.initServer("192.168.0.16",2000);
		// App.Socket.connect();
	}

	/**
	 * 登录
	 */
	private Click_EnterBtn(event:egret.TouchEvent){
		SenceManager.ChangeSence(Halls.NAME);
		// egret.log("连接服务器成功，准备登录！");
		// let head = new Head();
		// head.MainCmd = 1;
		// head.SubCmd = 1;
		// let request:com.aoo.chess.comms.protocol.proto.message.LoginRequest = new com.aoo.chess.comms.protocol.proto.message.LoginRequest();
		// request.username = "18682318280";
		// request.password =  new Md5().hex_md5("111111");
		// request.channelId = "1";
 

		// let Message:MessageObject = new MessageObject();
		// Message.head = head;
		// let buffer1: Uint8Array= com.aoo.chess.comms.protocol.proto.message.LoginRequest.encode(request).finish();
		// // egret.log("encode="+buffer1);
		// Message.buffer = buffer1;
	    // App.Socket.sendData(Message);

	}

	/**
	 * 版本更新内容
	 */	
	private Click_VersionBtn(event:egret.TouchEvent){
		this._VerTT.visible=this._VerBgImg.visible=this._CloseVerBtn.visible=true;
	}

	/**
	 * 关闭版本内容
	 */	
	private Click_CloseVerBtn(event:egret.TouchEvent){
		this._VerTT.visible=this._VerBgImg.visible=this._CloseVerBtn.visible=false;
	}

}