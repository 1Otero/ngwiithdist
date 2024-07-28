import { Producer } from "../producer/producer";
import { Store } from "../store/store";

export interface JsonStoreAndProducer{
    producer:Producer;
    store:Store;
}