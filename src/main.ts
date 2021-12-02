import { Octokit } from "octokit";
import { RouteType } from "./types/routeType";
import env from "dotenv";
import express from "express";
import { githubRoute } from "./routes/github";
// import ms from "ms";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const config = env.config();
const app = express();
const port = process.env.PORT;

export class PortfolioClient {
    public github = new Octokit();
    public async init(): Promise<void> {

        const routeMapper = (routes: RouteType[]): string => {
            return routes.reduce((prev, current) => `${prev} <a href="/${current.route}"> /${current.route}</a> -  ${current.desc} <br>`,
                "API For My <a href=\"https://kaine.simpkins.dev\"> Portfolio <br><br>");
        };

        const routes: RouteType[] = [{
            desc: "Github Data",
            route: "github"
        },
        {
            desc: "Itch.io Data",
            route: "itch"
        }];

        app.get("/", async (req, res) => {

            res.send(routeMapper(routes));
        });


        let data = await githubRoute(this);

        setInterval(async () => {
            data = await githubRoute(this);
        // Every 2 mins
        }, 2 * 60000);

        app.get("/github", async (req, res) => {


            return res.send({ github: data });
        });


        app.get("/itch", async (req, res) => {

            res.send({ itch: { test: "test" } });
        });

    }

}

void new PortfolioClient().init();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
