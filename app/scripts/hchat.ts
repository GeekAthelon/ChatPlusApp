export default class HChatInit {
    private greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Goodbye... ${this.greeting}?`;
    }
}
