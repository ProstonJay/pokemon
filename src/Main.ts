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
/**
 * 游戏主程序入口(主容器)
 */
class Main extends egret.DisplayObjectContainer {

    public static StageWd:number;
    public static StageHg:number;

    //本地缓存数据（临时使用）
    public static MyGOld:number;
    public static DdNum:number;
    public static BttleId:number;
    
    public static seesion:number=0;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
                // custom lifecycle plugin
                context.onUpdate = () => {
            }
        })

        egret.lifecycle.onPause = () => {
            //console.log("app 进入后台");
            egret.ticker.pause();
            // SoundMenager.Shared().StopBGM();
        }

        egret.lifecycle.onResume = () => {
            //console.log("app 进入前台");
            egret.ticker.resume();
            SoundMenager.Shared().PlayBGM( SoundMenager.Shared()._LastBgm);
        }

        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        //egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        
        Main.StageWd=this.stage.stageWidth;
        Main.StageHg=this.stage.stageHeight;

        //自定义本地临时数据
        if(egret.localStorage.getItem("gold")==null){
            var key:string = "gold";
            var value:string = "100000";
            egret.localStorage.setItem(key,value);
            Main.MyGOld=10000;
        }else{
             Main.MyGOld=Number(egret.localStorage.getItem("gold"));
        }

         Main.DdNum =100;


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    /**
     * 启动游戏
     */
    private async runGame() {
        await this.loadResource();
        this.startGameManager();
        // const result = await RES.getResAsync("description_json")
        // this.startAnimation(result);
        // await platform.login();
        // const userInfo = await platform.getUserInfo();
        // console.log(userInfo);
    }
    /**
     * 加载资源
     */
    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("loadui", 0, loadingView);
            await RES.loadGroup("preload", 1, loadingView);
            await this.loadTheme();
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    /**
     * 启动游戏管理器
     */
    private  startGameManager(){
         //ServerManager.Start();
         SenceManager.Start(this);
         WinManager.Start(this);
         PopManager.Start(this);
         SenceManager.ChangeSence(Login.NAME);
    }
    
}