import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";

@EntityRepository(Message)
class MessagesReporitory extends Repository<Message>{
}

export { MessagesReporitory };