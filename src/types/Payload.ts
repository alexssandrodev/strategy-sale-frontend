
type Payload = {
    token: string;
    userPayload: {
        userId: string;
        name: string;
        email: string
    }
}

export type { Payload };
