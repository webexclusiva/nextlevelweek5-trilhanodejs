import { getCustomRepository, Repository } from 'typeorm';
import { Message } from "../entities/Message";
import { MessagesReporitory } from '../repositories/MessagesRepository';

interface IMessageCreate {
    admin_id?: string;
    text: string;
    user_id: string;
}

class MessagesService {
    private messageRepository: Repository<Message>;

    constructor(){
        this.messageRepository = getCustomRepository(MessagesReporitory);
    }

    async create({ admin_id, text, user_id } : IMessageCreate){

        const message = this.messageRepository.create({
            admin_id,
            text,
            user_id
        });

        this.messageRepository.save(message);

        return message;

    }
    async listByUser(user_id: string){

        const messages = this.messageRepository.find({
            where: {user_id},
            relations: ["user"]
        });

        return messages;
    }
}

export { MessagesService };