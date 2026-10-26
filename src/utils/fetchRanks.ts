// fetchRanks.ts

import { IRankInfo } from "./interfaces";

export async function getRanks(): Promise<IRankInfo[]> {
    const response = await (fetch("https://initial-weddings-semester-estimate.trycloudflare.com/api/nj/ranks"));
    return response.json();
};
