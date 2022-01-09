import { Advantage } from './advantage';
import { Contrast } from './contrast';
import { Detriment } from './detriment';
import { Support } from './support';

export enum ClaimTag {
    environmental = 'environmental',
    socialWelfare = 'social welfare',
    literature = 'literature',
    technology = 'technology',
    governance = 'governance',
    economy = 'economy',
    astrophysics = 'astrophysics'
}

export interface Claim {
    userId: string;
    content: string;
    supports: Support[];
    contrasts: Contrast[];
    advantages: Advantage[];
    detriments: Detriment[];
    tags: [ClaimTag, ClaimTag, ClaimTag];
    timestamp: string | Date;
}