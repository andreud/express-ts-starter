import { Request, Response } from "express";
//import { UserCreate } from "../application/UserCreate";
import { UserList } from "../application/UserList";
import InMemoryUserRepository from "./InMemoryUserRepository";

export default class UserExpressContoller {
    
    repository;

    constructor(){
        this.repository = new InMemoryUserRepository();
    }

    create(req: Request, res: Response) {
        //let userCreate = new UserCreate();
        //userCreate.run();
        res.send('creating in controller');
    }

    list = (req: Request, res: Response) => {        
        const userList = new UserList(this.repository);
        const users = userList.run();        
        res.send(users);
    }

}