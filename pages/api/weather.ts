// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import cacheData from "memory-cache";
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

async function fetchWithCache(url: string, mins: number) {
  const value = cacheData.get(url);
  if (value) {
    console.log("Value loaded from cache.");
    return value;
  } else {
    const res = await fetch(url);
    const data = await res.json();
    cacheData.put(url, data, mins * 1000 * 60);
    console.log("Cache generated.");
    return data;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Stuttgart,de&units=metric&APPID=${process.env.API_KEY}`
  const min = publicRuntimeConfig.minutescache;
  const data = await fetchWithCache(url, min);

  return res.status(200).json(data);
}
