import axios from "axios"
import Links from "./components/Links"
import { useState, useEffect } from "react"

const LINK_DATA = "./links.json"
const PROFILE_PICTURE = "./profile.jpg"

// TODO: https://vincentgarreau.com/particles.js/
function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(LINK_DATA)
      .then((resp) => setData(resp.data))
      .catch((err) => console.log(`whoops ${err}`))
  }, [])
  return (
    <div className="flex h-full min-h-screen items-center justify-center bg-[radial-gradient(#e5ddcb_0.6000000001px,#a7c5bd_0.600000001px)] bg-size-[10px_10px]">
      <div className="relative flex w-1/3 max-w-full flex-col gap-y-4 rounded-lg bg-neutral-50 p-4 pt-16">
        <div className="absolute inset-0 z-10 m-auto max-w-32 -translate-y-16">
          <img src={PROFILE_PICTURE} className="rounded-full object-cover" />
        </div>
        <div className="space-y-4 relative">
          <h1 className="text-center text-2xl font-medium">Matthew Payne</h1>
          <Links data={data} />
        </div>
      </div>
    </div>
  )
}

export default App
