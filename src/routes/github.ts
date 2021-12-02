import { PortfolioClient } from "../main";

export const githubRoute = async (client: PortfolioClient): Promise<unknown[]> => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const getGithubRepos = async (page: number) => {
        return client.github.rest.repos.listForUser({ page, "username": "KingOKarma" });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let data: any[] = [];
    let returnData: unknown[] = [];
    let loop = true;
    let loopNumber = 1;

    while (loop) {
        // eslint-disable-next-line prefer-destructuring
        data = (await getGithubRepos(loopNumber)).data;
        loopNumber++;

        if (data.length === 0) {
            loop = false;
        } else {
            returnData = returnData.concat(data);
        }


    }
    // console.log(returnData);
    return returnData;
};