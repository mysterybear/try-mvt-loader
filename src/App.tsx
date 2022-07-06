import { load } from "@loaders.gl/core"
import { MVTLoader } from "@loaders.gl/mvt"
import { useEffect } from "react"
import * as tilebelt from "@mapbox/tilebelt"

const tile: [number, number, number] = [1037490, 688385, 21] // x, y, zoom

const tileToURL = ([x, y, zoom]: [number, number, number]) => {
  const url = `https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/${zoom}/${x}/${y}.mvt?style=mapbox://styles/mapbox/light-v10@00&access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
  return url
}

function App() {
  useEffect(() => {
    ;(async () => {
      const mvtLoaderData = await load(tileToURL(tile), MVTLoader)
      const tilebeltData = tilebelt.tileToGeoJSON(tile)
      console.log({ mvtLoaderData, tilebeltData })
    })()
  }, [])

  return null
}

export default App
