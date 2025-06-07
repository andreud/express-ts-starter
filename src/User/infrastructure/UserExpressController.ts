import { Request, Response } from "express";
//import  User from "../domain/User";
import { UserList } from "../application/UserList";
import { UserCreate } from "../application/UserCreate";
import InMemoryUserRepository from "./InMemoryUserRepository";
import { ServiceContainer } from "../../Shared/ServiceContainer";

export default class UserExpressContoller {
    
    private repository;
    private serviceContainer;

    constructor(){
        this.repository = new InMemoryUserRepository();
        this.serviceContainer = ServiceContainer;
    }

    create = async(req: Request, res: Response) => {
        try{
            /*let userCreate = new UserCreate(this.repository);
            let userData = {  // "as" keyword in typescript 
                id: req.body.id,
                email: req.body.email,
                name: req.body.name,
                createdAt: new Date()
            };
            await userCreate.run(userData);*/

            

            res.status(201).json({msg: 'User Creaed'});
        } catch(e) {
            res.status(500).json({msg:'Error Creating User'});
        }
    }

    list = async (req: Request, res: Response) => {        
        //const userList = new UserList(this.repository);
        //const users = await userList.run();
        
        const userList = this.serviceContainer.user.list;
        const users = await userList.run();
        res.send(users);
    }

}