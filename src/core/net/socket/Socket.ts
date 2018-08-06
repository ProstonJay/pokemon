// /**
//  * Socket类
//  */
// class Socket extends BaseClass {
    
// 	    //是重新连接标识
// 		private _needReconnect:boolean = false;
// 		//最大重连次数
//         private _maxReconnectCount = 10;
// 		//当前重连次数
// 		private _reconnectCount:number = 0;
// 		//
//     	private _connectFlag:boolean;
// 		//IP
// 		private _host:string;
// 		//Port
//     	private _port:any;
// 		//是否连接
// 		private _isConnecting:boolean;
// 		//实例
// 		private static _instance: Socket;
// 		//WebSocket
// 		private _Socket: egret.WebSocket;
// 		//字节缓冲区
// 		private _ReceiveBuffer: egret.ByteArray = new egret.ByteArray();

// 		public constructor() {
// 			super();
// 		}

// 		public static getInstance(): Socket {
// 			if (this._instance == null) {
// 				this._instance = new Socket();
// 			}
// 			return this._instance;
// 		}

// 		//启动网络管理器
// 		public Start() {
	
// 		}

// 		/**
// 		 * 添加事件监听
// 		 */
// 		private addEvents() {
// 			//添加收到数据侦听，收到数据会调用此方法
// 			this._Socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
// 			//添加链接打开侦听，连接成功会调用此方法
// 			this._Socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
// 			//添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
// 			this._Socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
// 			//添加异常侦听，出现异常会调用此方法
// 			this._Socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
// 		}

// 		/**
// 		 * 移除事件监听
// 		 */
// 		private removeEvents():void {
// 			this._Socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
// 			this._Socket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
// 			this._Socket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
// 			this._Socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
// 		}

// 		/**
// 		 * 初始化服务区地址
// 		 * @param host IP
// 		 * @param port 端口
// 		 * @param msg 消息发送接受处理类
// 		 */
// 		public initServer(host:string, port:any):void {
// 			this._host = host;
// 			this._port = port;
// 		}

// 		/**
// 		 * 开始Socket连接
// 		 */
// 		public connect():void {
// 			if (App.DeviceUtils.IsHtml5) {
// 				if (!window["WebSocket"]) {
// 					Log.trace("不支持WebSocket");
// 					return;
// 				}
// 			}
// 			this._Socket = new egret.WebSocket();
// 			this._Socket.type = egret.WebSocket.TYPE_BINARY;
// 			// if (this._msg instanceof ByteArrayMsg) {
// 			// 	this._socket.type = egret.WebSocket.TYPE_BINARY;
// 			// }
// 			Log.trace("WebSocket: " + this._host + ":" + this._port);
// 			this.addEvents();
// 			this._Socket.connect(this._host, this._port);
// 		}

			
// 		/**
// 		 * 重新连接
// 		 */
// 		private reconnect():void {
// 			this.closeCurrentSocket();
// 			this._reconnectCount++;
// 			egret.log("重连次数="+this._reconnectCount)
// 			if (this._reconnectCount < this._maxReconnectCount) {
// 				this.connect();
// 			} else {
// 				this._reconnectCount = 0;
// 				// if (this._connectFlag) {
// 				// 	App.MessageCenter.dispatch(SocketConst.SOCKET_CLOSE);
// 				// } else {
// 				// 	App.MessageCenter.dispatch(SocketConst.SOCKET_NOCONNECT);
// 				// }
// 				egret.log("重连失败");
// 			}
// 		}

// 		/**
// 		 * 关闭Socket连接
// 		 */
// 		public close():void {
// 			this._connectFlag = false;
// 			this.closeCurrentSocket();
// 		}

// 		/**
// 		 * 清理当前的Socket连接
// 		 */
// 		private closeCurrentSocket(){
// 			this.removeEvents();
// 			this._Socket.close();
// 			this._Socket = null;
// 			this._isConnecting = false;
// 		}

// 		/**
// 		 * Socket是否在连接中
// 		 * @returns {boolean}
// 		 */
// 		private isConnecting():boolean {
// 			return this._isConnecting;
// 		}


// 		/**
// 		 * 服务器连接成功
// 		 */
// 		private onSocketOpen():void {
// 			this._reconnectCount = 0;
// 			this._isConnecting = true;

// 			// if (this._connectFlag && this._needReconnect) {
// 			// 	App.MessageCenter.dispatch(SocketConst.SOCKET_RECONNECT);
// 			// } else {
// 			// 	App.MessageCenter.dispatch(SocketConst.SOCKET_CONNECT);
// 			// }
// 			this._connectFlag = true;
// 			egret.log("服务器连接成功！");
// 		}

// 		/**
// 		 * 服务器断开连接
// 		 */
// 		private onSocketClose():void {
// 			this._isConnecting = false;
// 			egret.log("服务器断开连接！");
// 			// if (this._needReconnect) {
// 			// 	App.MessageCenter.dispatch(SocketConst.SOCKET_START_RECONNECT);
// 			// 	this.reconnect();
// 			// } else {
// 			// 	App.MessageCenter.dispatch(SocketConst.SOCKET_CLOSE);
// 			// }
// 		}

// 		/**
// 		 * 服务器连接错误
// 		 */
// 		private onSocketError():void {
// 			if (this._needReconnect) {
// 				this.reconnect();
// 			} else {
// 				//App.MessageCenter.dispatch(SocketConst.SOCKET_NOCONNECT);
// 			}
// 			this._isConnecting = false;
// 			egret.log("网络连接异常！");
// 		}

// 		/**
// 		 * 发送数据
// 		 */
// 		public sendData(msg: MessageObject): void {

// 			let buffer: egret.ByteArray = new egret.ByteArray();
// 			let msgbuff: Uint8Array = null;
// 			if (msg.buffer != null) {
// 				msgbuff = msg.buffer;
// 				msg.head.Length = msgbuff.length;
// 			}
// 			//写入数据包长度
// 			msg.head.Encode(buffer);
// 			//写入数据包内容
// 			if (msgbuff != null) {
// 				buffer._writeUint8Array(msg.buffer);
// 			}

// 			this._Socket.writeBytes(buffer, 0, buffer.length);
// 			this._Socket.flush();
// 		}

// 		/**
// 		 * 接受数据
// 		 */
// 		public onReceiveMessage(e: egret.Event): void {

// 			this._Socket.readBytes(this._ReceiveBuffer);
// 			this.EncodeBuff();
// 		}

// 		private _HeadLen: number = 16;
// 		/**
// 		 * 解码
// 		 */
// 		private EncodeBuff() {
// 			while (this._ReceiveBuffer.readAvailable >= this._HeadLen) {
// 				egret.log("收到数据=" + this._ReceiveBuffer.readAvailable);
// 				let head: Head = new Head();
// 				head.Decode(this._ReceiveBuffer);
// 				egret.log("head" + head.MainCmd + "|" + head.SubCmd + "|" + head.Length);
// 				egret.log("收到数据1=" + this._ReceiveBuffer.readAvailable);
// 				if (head.Length <= this._ReceiveBuffer.readAvailable)//字节够读取
// 				{
// 					let msg: MessageObject = new MessageObject();
// 					if (head.Length != 0) {
// 						let buffer: egret.ByteArray = new egret.ByteArray();
// 						this._ReceiveBuffer.readBytes(buffer, 0, head.Length);
// 						msg.buffer = new Uint8Array(buffer.buffer); 
// 						// let result:com.aoo.chess.comms.protocol.proto.message.LoginRequest 
// 						// = com.aoo.chess.comms.protocol.proto.message.LoginRequest.decode(Message.buffer);
// 						// egret.log("decode="+result.password);
// 					}
// 					else {
// 						msg.buffer = null;
// 					}
// 					msg.head = head;
// 					egret.log("数据解析完毕！");
// 					ServerManager.ReceiveMsg(msg);
// 					if (this._ReceiveBuffer.readAvailable == 0) {
// 						this._ReceiveBuffer.clear();
// 						return;
// 					}
// 				}
// 				else {
// 					// this._ReceiveBuffer.bufferOffset
// 					// buffer.ResetReaderIndex();
// 					// buffer.DiscardReadBytes();
// 					return;
// 				}
// 			}
// 		}

//         /**
//          * Debug信息
//          * @param str
//          */
//         private debugInfo(str:String):void {
//             App.MessageCenter.dispatch(SocketConst.SOCKET_DEBUG_INFO, str);
//         }

// }