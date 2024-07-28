export interface Storeandproducer {
    //Producer info
    producerId:Number | null;
    nameProducer:String;
    lastNameProducer:String;
    emailProducer:String;
    descriptionProducer:String;
    statusProducer:Number;
    notViewProducer:Number;
    createdDateProducer:Date;
    //Store info
    storeId:Number | null;
    nameStore:String;
    emailStore:String;
    descriptionStore:String;
    statusStore:Number;
    codStore:String;
    nitStore:String;
    notViewStore:Number;
    createdDateStore:Date;
}
