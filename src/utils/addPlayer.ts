// addPlayer.ts

import { IAddPlayerResponse } from "./interfaces";

export async function addPlayer(code: string): Promise<IAddPlayerResponse> {
    const requestOptions = {
        method: "POST",
        headers: { code }
    };
   const response = await (fetch("https://initial-weddings-semester-estimate.trycloudflare.com/api/nj/players", requestOptions));
    const responseJson = await response.json();
    return { status: response.status, message: responseJson.message };
};
