import { MessagingInterface } from "../interfaces/MessagingInterface.js";

export class Messaging implements MessagingInterface {
    sendMessage(msg: string): void {
        console.log('Mensagem enviada:', msg);
    }
}