import { Repository, getCustomRepository } from 'typeorm';
import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from '../repositories/ConnectionsRepository';

interface IConnectionCreate {
    user_id: string;
    socket_id: string;
    admin_id?: string;
    id?: string;
}

class ConnectionsService{
    private connectionsRepository: Repository<Connection>

    constructor(){
        this.connectionsRepository = getCustomRepository(ConnectionsRepository);
    }

    async create({ id, user_id, admin_id, socket_id } : IConnectionCreate){
        const connection = this.connectionsRepository.create({
            socket_id,
            user_id,
            id,
            admin_id
        });

        this.connectionsRepository.save(connection);

        return connection;
    }

    async findByUserId(user_id: string){
        const connection = this.connectionsRepository.findOne({user_id});
        return connection;
    }
}

export { ConnectionsService };