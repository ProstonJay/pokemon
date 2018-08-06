	/**
	 * 场景管理器
	 * @author proston.zhang 
	 */	
	module  SenceManager {
		//场景容器
		var Sence:eui.UILayer;;
		//当前场景名称
		var CurrentSence:string="";
		/**
		 *启动场景管理器
		 */
		export function Start(root:egret.DisplayObjectContainer){
			Sence = new eui.UILayer();
			Sence.name="Sence";
			root.addChild(Sence);
			Sence.addEventListener(egret.Event.RESIZE, function(){
				Main.StageWd=Sence.stage.stageWidth;
                Main.StageHg=Sence.stage.stageHeight;
				Sence.getChildByName(CurrentSence).width=Main.StageWd;
				Sence.getChildByName(CurrentSence).height= Main.StageHg;
			}, this);
		}

		/**
		 * 切换场景
		 */
		export function ChangeSence(sence:string){
			let senceclass = egret.getDefinitionByName(sence);
			let Container = new senceclass();
			Container.name=sence;
			Sence.addChild(Container);
			console.log("切换场景=>"+sence);
			let destorySenceName:string = CurrentSence;
			CurrentSence=Container.name;
			if(destorySenceName!=""){
				console.log("移除场景=>"+destorySenceName);
				Sence.removeChild(Sence.getChildByName(destorySenceName));
			}
		}
	}

    