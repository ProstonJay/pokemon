class AtkEvent extends egret.Event {
    public static data = "atk";
    public pos: egret.Point;
    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable);
    }
}