class GameEvent extends egret.Event {
    public static data = "Nonster";
    public static MON_DIE = "MON_DIE";
    public pos: egret.Point;
    public id:number;
    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable);
    }
}