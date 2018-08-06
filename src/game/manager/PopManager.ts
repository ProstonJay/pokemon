	/**
	 * 消息管理器
	 * @author proston.zhang 
	 */	
	module  PopManager {
		//消息容器
		var PopUp:egret.DisplayObjectContainer;
		/**
		 *启动消息管理器
		 */
		export function Start(root:egret.DisplayObjectContainer){
			PopUp = new egret.DisplayObjectContainer();
			PopUp.name="PopUp";
			root.addChild(PopUp);
		}

		/**
		 * 跳动消息
		 */
		export function JumpMsg(str:string){
			let pop:PopMsgUI = new PopMsgUI(str);
			PopUp.addChild(pop);
		}
	}

    