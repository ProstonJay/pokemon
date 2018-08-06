	/**
	 * 二级界面管理器
	 * @author proston.zhang 
	 */	
	module  WinManager {
		//二级界面容器
		var WinBox:egret.DisplayObjectContainer;
		/**
		 *启动二级界面管理器
		 */
		export function Start(root:egret.DisplayObjectContainer){
			WinBox = new egret.DisplayObjectContainer();
			WinBox.name="WinBox";
			root.addChild(WinBox);
		}

		/**
		 * 添加二级界面
		 */
		export function AddWindow(str:string){
			let childNum:number=WinBox.numChildren;
			for( var i = 0; i<childNum; ++i ){
				WinBox.removeChildAt(i)
			}
			if(WinBox.getChildByName(str)==null){
				let winClass = egret.getDefinitionByName(str);
				let win = new winClass();
				win.name=str;
				WinBox.addChild(win);
			}
		}
	}

    