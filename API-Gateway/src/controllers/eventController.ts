import { Request } from "express";
import { CreateReportResponseDTO } from "../dtos/createReport.dto";

type IClient = {
  id: number;
  response: any;
};

export default class EventController {
  clients: Array<IClient>;

  constructor() {
    this.clients = [];
  }

  async sendEventToAllClients(request: Request) {
    const event = {
      userId: request.body.userId || "",
      reportDate: new Date(),
      description: request.body.description || "",
      anonymous: request.body.anonymous || true,
      latitude: request.body.latitude || 0,
      longitude: request.body.longitude || 0,
      type: request.body.type || "",
    };

    this.clients.forEach((client) => {
      console.log("Sending event to client -> ", client.id);
      const data = `data: ${JSON.stringify(event)}\n\n`;
      client.response.write(data);
    });
  }

  async subscribeHandler(request: any, response: any) {
    console.log("New client connected...");
    const headers = {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache",
    };

    response.writeHead(200, headers);

    const data = `data: ${JSON.stringify({
      message: "Subscribed to the Event Listener...",
    })}\n\n`;
    response.write(data);

    const clientId = Date.now();
    const newClient: IClient = {
      id: clientId,
      response,
    };
    this.clients.push(newClient);
    console.log("clients -> ", this.clients.length);
    request.on("close", () => {
      console.log(`${clientId} Connection closed`);
      this.clients = this.clients.filter((client) => client.id !== clientId);
    });
  }
}
