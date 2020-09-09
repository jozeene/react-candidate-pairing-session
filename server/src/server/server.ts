import {Server} from "@overnightjs/core";

export class ReactAPIServer extends Server {
  constructor() {
    super(true);
  }

  setupControllers() {
    this.addControllers([

    ]);
  }

  serve(port: number) {
    this.app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  }
}