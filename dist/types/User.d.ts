import { TCharacter } from "./Character";
import { TToken } from "./Login";
export type TUser = {
    id: number;
    username: string;
    password: string;
    realm_id: number;
    realm_alias: string;
    access_level: number;
    is_deleted: boolean;
    active_character_id: number;
    token?: TToken;
    characters?: TCharacter[];
};
//# sourceMappingURL=User.d.ts.map