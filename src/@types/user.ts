import { Advantage } from "./advantage";
import { Claim } from "./claim";
import { Contrast } from "./contrast";
import { Detriment } from "./detriment";
import { Support } from "./support";

export interface User {
    claims: Claim[];
    supports: Support[];
    contrasts: Contrast[];
    advantages: Advantage[];
    detriment: Detriment[];
    interests: Claim[];
    personal: UserPersonalInfo;
}

export interface UserPersonalInfo {
    id: string;
    description: string;
    avatar: string;
    username: string;
    hashedPassword: string;
    email: string;
}