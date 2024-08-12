import { TUser } from "./User";
export type TToken = {
    id: string;
    creationDate: string;
};
export type TLoginAttempt = {
    isSuccessful: boolean;
    message: string;
    user?: TUser;
};
export type TLoginCookie = {
    name: string;
    value: {
        token: TToken;
        access_level: number;
        user_id: number;
    };
    expires?: Date | string;
    props?: {
        maxAge: number;
    };
};
//# sourceMappingURL=Login.d.ts.map