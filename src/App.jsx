import axios from "axios"
import Socials from "./components/Socials"
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
    <div className="flex h-full min-h-screen items-center justify-center bg-[radial-gradient(#e5ddcb_0.7px,#a7c5bd_1px)] bg-size-[10px_10px]">
      <div className="relative flex w-1/2 max-w-lg min-w-xs flex-col gap-y-4 rounded-lg bg-neutral-50 p-4 pt-16 shadow-2xl">
        <div className="absolute inset-0 z-10 m-auto size-32 -translate-y-48 drop-shadow-md/50">
          <img src={PROFILE_PICTURE} alt="Silly profile picture containing Matthew with excessively long nose." className="size-full rounded-full object-cover" />
        </div>
        <div className="relative space-y-4">
          <h1 className="text-center text-3xl font-medium">Matthew Payne</h1>
          <Socials data={data} />
        </div>
      </div>
    </div>
  )
}

export default App
