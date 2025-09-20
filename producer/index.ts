import { createClient } from "redis";

async function main() {
    const client = await createClient()
        .on("error", (err) => console.log("Redis Client Error", err))
        .connect();

    const res = await client.xAdd('betteruptime:websites', '*', {
        url: "https://streeem.com",
        id: "1"
    });
    console.log(res);
    client.destroy()
}

main()