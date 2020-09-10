import {Server} from "@overnightjs/core";
import {UserController} from "./UserController";

export class ReactAPIServer extends Server {
  constructor() {
    super(true);
  }

  setupControllers() {
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