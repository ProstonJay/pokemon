module eui {
	export class EffectButton extends eui.Button implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}


		protected childrenCreated():void
		{
			super.childrenCreated();

			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.effectHandler, this);
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
		}

		private effectHandler(evt: TouchEvent): void {

			SoundMenager.Shared().PlayClick();

			egret.Tween.removeTweens(this);

			egret.Tween.get(this).to({ scaleX: 0.8,scaleY:0.8 }, 50).to({ scaleX: 1,scaleY:1 }, 50)

		}

		private Removed(event: egret.Event) {
			this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.Removed, this);
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.effectHandler, this);
		}
	}
}