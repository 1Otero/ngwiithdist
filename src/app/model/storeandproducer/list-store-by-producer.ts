import { Producer } from "../producer/producer";
import { Store } from "../store/store";

export interface ListStoreByProducer {
    producer:Producer;
    listStore:Store[];
}
