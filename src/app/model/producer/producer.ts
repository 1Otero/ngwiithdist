export interface Producer {
    producerId:Number|null;
    name:String;
    lastNameProducer:String;
    email:String;
    password?:String;
    lastPassword?:String;
    description:String;
    status:Number;
    notView:Number;
    createdDate:Date;
}
