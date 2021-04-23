import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    // private settingsService;

    // constructor(){
    //     this.settingsService = new SettingsService();
    // }
 async create(request: Request,response: Response){
    const { chat, username } = request.body;

    const settingsService = new SettingsService();

    try{
        const settings = await settingsService.create({
            chat, username
        });
    
        return response.json(settings);
    }catch(err){
        return response.status(400).json({error: err.message});
    }
 }

 async findByUsername(request: Request,response: Response){
     const { username } = request.params;

     const settingsService = new SettingsService();

     const settings = await settingsService.findByUsername(username);

     return response.status(200).json(settings);
 }
 async update(request: Request,response: Response){
    const { username } = request.params;
    const { chat } = request.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.update(username, chat);

    return response.status(200).json(settings);
}
}

export { SettingsController };