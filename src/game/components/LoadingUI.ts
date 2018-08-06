//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        RES.addEventListener( RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this );
        this.addEventListener(egret.Event.REMOVED, this.Removed, this);
    }

    private Removed(event: egret.Event) {
        RES.removeEventListener( RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this );
        this.removeEventListener(egret.Event.REMOVED, this.Removed, this);
    }

    private textField: egret.TextField;
    private boolean:boolean;

    public onProgress(current: number, total: number): void {
        if(this.boolean){
            this.textField.text = `${current}/${total}`;
            this.bar.width=this.barwd*(current/total);
        } 
    }
    
    private onResourceLoadComplete( event:RES.ResourceEvent ):void {
        if( event.groupName=="loadui" ){
            this.creatUi();
            this.boolean=true;
        }
    }

    private bar:egret.Bitmap;
    private barwd:number;
    /**
     * 加载界面
     */
    private creatUi(){
        var bg:egret.Bitmap = ImageHelper.createBitmapByName("jiazhai_beijing_jpg");
        bg.width=Main.StageWd;
        bg.height=Main.StageHg;
        this.addChild(bg);

        let posMark:number=Main.StageHg-300;

        var txt:egret.Bitmap = ImageHelper.createBitmapByName("jiazai_zi_3_png");
        txt.x=(Main.StageWd-txt.width)/2;
        txt.y=posMark;
        this.addChild(txt);

        var txt1:egret.Bitmap = ImageHelper.createBitmapByName("jiazai_zi_1_png");
        txt1.x=140;
        txt1.y=posMark+120;
        this.addChild(txt1);

        var barbg:egret.Bitmap = ImageHelper.createBitmapByName("jiazai_jindutiao_di_png");
        barbg.x=80;
        barbg.y=posMark+160;
        this.addChild(barbg);
        
        this.bar = ImageHelper.createBitmapByName("jiazai_jindutiao_ding_png");
        this.bar.x=88;
        this.bar.y=posMark+172;
        this.addChild( this.bar);
        this.barwd=this.bar.width;
        this.bar.width=0;

        var txt2:egret.Bitmap = ImageHelper.createBitmapByName("jiazai_zi_4_png");
        txt2.x=90;
        txt2.y=posMark+220;
        this.addChild(txt2);
        
        var txt3:egret.Bitmap = ImageHelper.createBitmapByName("jiazai_zi_5_png");
        txt3.x=420;
        txt3.y=posMark+218;
        this.addChild(txt3);

        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.size = 24;
        this.textField.textColor = 0xffffff;
        this.textField.x = 550;
        this.textField.y = posMark+125;
        this.textField.width = 120;
        this.textField.height = 30;
        this.textField.textAlign = "left";

    }
}
