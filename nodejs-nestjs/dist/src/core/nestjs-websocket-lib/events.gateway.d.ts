import { WsResponse } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { Server, Socket } from 'socket.io';
export declare class EventsGateway {
    server: Server;
    clientServerMap: {
        [key: string]: Socket;
    };
    findAll(data: any, client: Socket): Observable<WsResponse<number>>;
    identity(data: number): Promise<number>;
    initClientServer(opt: {
        clientName: any;
    }, client: Socket): Promise<{
        [key: string]: Socket;
    }>;
}
