import { useEffect, useState } from "react";

export default function CurrentWeather() {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const url = '/api/weather'

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading || !data) return <p>Loading...</p>

    const condition = data["weather"][0]["description"]

    const temp: number = data["main"]["temp"]

    return (
        <>
            {condition} &hellip; {temp.toFixed(1)} °C
        </>
    )
}