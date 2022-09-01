// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    condition: string,
    temperature: number
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await sleep(5000);
    res.status(200).json({ condition: "sunny", temperature: 15.0 })
}
