import Axios from "axios";
import { ItchResponse } from "../types/itchRespones";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const itchRoute = async (token: string | undefined) => {

    let returnData;
    if (typeof token !== "string") return "Please enter a Token for ITCH_API_KEY in .env";
    try {

        const itchData: ItchResponse = await (await Axios.get(`https://itch.io/api/1/${token}/my-games`)).data;
        returnData = itchData.games;
    } catch (err) {
        returnData = err;
    }

    return returnData;
};