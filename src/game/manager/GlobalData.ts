class GlobalData {

	private static Instance: GlobalData;

    public static GetInstance(): GlobalData {
        if(GlobalData.Instance == null)
            GlobalData.Instance = new GlobalData();
        return GlobalData.Instance;
    }
	//物品表
	public  itemArr:Array<Object>=[];

	public GetItemById(itemID:number):Object{
        let obj:Object=null;
        let len:number= this.itemArr.length;
        for(var i:number=0;i<len;i++){
            if(this.itemArr[i]["Id"]==itemID){
              obj = this.itemArr[i];  
            }
        }
        return obj;
	}
}