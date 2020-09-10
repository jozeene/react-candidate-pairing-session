import {Server} from "@overnightjs/core";
import {UserController} from "./UserController";
import cors from 'cors';

export class ReactAPIServer extends Server {
  constructor() {
    super(true);
    this.setupControllers();
  }

  setupControllers() {

    this.app.use(cors());

    this.app.use((req, res, next) => {
      console.log('New Request', req.url)
      next();
    })

    this.addControllers([
      new UserController()
    ]);
  }

  serve(port: number) {
    this.app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  }
}