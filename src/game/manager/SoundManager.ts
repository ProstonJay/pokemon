class SoundMenager {
    private static shared: SoundMenager;
    public static Shared(): SoundMenager {
        if(SoundMenager.shared == null)
            SoundMenager.shared = new SoundMenager();
        return SoundMenager.shared;
    }
    private _click: egret.Sound;//点击声音
    private _eff: egret.Sound;//特效
    private _bgm: egret.Sound;//背景音乐
    private _bgm_channel: egret.SoundChannel;//保存用来静音用

    public constructor() {
        this._click=RES.getRes("Btn_Click_mp3");

        // this._bgm = new egret.Sound();
		// this._bgm.addEventListener(egret.Event.COMPLETE, this.PlayGggg, this);
  
    }

    /**
     * 音效
     */
    public PlayerEff(str:string){
        this._eff=RES.getRes(str+"_mp3");
        this._eff.play(0,1);
    }

    public _LastBgm:string;

    public PlayBGM(bgm:string) {
        if(bgm!=undefined){
            this._LastBgm =bgm;
            if(this.IsMusic) {
                if(this._bgm_channel!=null){
                this._bgm_channel.stop();
                } 
                this._bgm=null;
                this._bgm=RES.getRes(bgm+"_BGM_mp3");
                this._bgm_channel = this._bgm.play(0,0);
            }
        }
    }

	private PlayGggg(event:egret.Event){
		  this.StopBGM();
		  this._bgm_channel = this._bgm.play(0,0);
	}

    public StopBGM() {
        if(this._bgm_channel != null) {
            this._bgm_channel.stop();
        }
    }
    public PlayClick() {
        if(this.IsSound) {
            this._click.play(0,1);
        }
    }

    //音乐是否播放，保存设置
    public set IsMusic(value) {
        if(!value) {
            egret.localStorage.setItem("ismusic","0");
            this.StopBGM();
        } else {
            egret.localStorage.setItem("ismusic","1");
            this.PlayBGM(this._LastBgm);
        }
    }
    public get IsMusic(): boolean {
        var b = egret.localStorage.getItem("ismusic");
        if(b == null || b == "") {
            return true;
        }
        else {
            return b == "1";
        }
    }
    //声效是否播放，保存设置
    public set IsSound(value) {
        if(value) {
            egret.localStorage.setItem("isSound","1");
        } else {
            egret.localStorage.setItem("isSound","0");
        }
    }
    public get IsSound(): boolean {
        var b = egret.localStorage.getItem("isSound");
        if(b == null || b == "") {
            return true;
        }
        else {
            return b == "1";
        }
    }
}