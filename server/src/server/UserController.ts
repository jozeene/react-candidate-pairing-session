import {Controller, Get} from "@overnightjs/core";
import {Request, Response} from "express";
import UserJSON from '../database/users.json'

@Controller('user')
export class UserController {

  @Get()
  async getAllUsers(req: Request, res: Response) {
    res.status(200).json(UserJSON);
  }

  @Get(':userId')
  async getUserById(req: Request, res: Response) {
    const filtered = UserJSON.filter(user => user.id.toString() === req.params.userId);
    if (filtered.length > 0) {
      res.status(200).json(filtered[0]);
    } else {
      res.status(404).json({
        error: 'User not found.'
      });
    }
  }
}