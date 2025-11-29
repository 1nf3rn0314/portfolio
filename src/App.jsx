import Navbar from "./components/Navbar"
import TryHackMeBadge from "./components/TryHackMeBadge"

function App() {
  return (
    <>
      <div className="bg-[#008a00] green_background min-h-screen w-full">
        <Navbar/>
        <div className="main-container mx-auto rounded-2xl my-auto text-green-300 max-h-[780px] pt-5 container overflow-y-auto">
          <div className="section_1 text-lg">
            $ whoami<br/>
            Saptarshi Nanda (a.k.a. 1nf3rn0)<br/><br/>
            $ pwd<br/>
            Student at Jadavpur University (Instrumentation & Electronics Engineering (IEE))
            <TryHackMeBadge/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
