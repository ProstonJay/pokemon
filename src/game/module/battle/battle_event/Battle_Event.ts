class Battle_Event extends egret.Event {

    public static Auto_Fight = "Auto_Fight";
    public static Add_Gold = "Add_Gold";
    public static Atk_Speed = "Atk_Speed";
    public static Atk_Complete = "Atk_Complete";
    public pos: egret.Point;
    public id:number;
    public vlaue:any;
    public constructor(type: string,bubbles: boolean = false,cancelable: boolean = false) {
        super(type,bubbles,cancelable);
    }
}