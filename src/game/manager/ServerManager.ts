	/**
	 * 通信管理器
	 * @author proston.zhang 
	 */	
	module  ServerManager {
		//错误码
		//var  errCodeServer:ErrCodeServer;
		//登录
		//ar  loginServer:LoginServer;
		/**
		 *启动通信管理器
		 */
		export function Start(){
			//errCodeServer = new ErrCodeServer();
			//loginServer = new LoginServer();
		}

		//解析服务器数据
		// export function ReceiveMsg(msg:MessageObject)
		// {
		// egret.log("收到消息主协议=" + msg.head.MainCmd+ "子协议 = " +  msg.head.SubCmd);
		// 	switch (msg.head.MainCmd)
		// 	{
		// 		case MainCmd.Main_Cmd_ErrorCode_异常处理:
		// 				errCodeServer.handlerSubCmd(msg);
		// 			break;
		// 		case MainCmd.Main_Cmd_LOGIN_登录模块:
		// 				loginServer.handlerSubCmd(msg);
		// 			break;
		// 	}
		// }
	}

    