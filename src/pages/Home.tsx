

import Background from "../assets/small-bg.jpg"

function Home() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}} 
    className="flex flex-row sm:justify-start justify-center mx-auto bg-cover bg-fixed"
    >
        <div className="col place-items-start h-screen">
            <h3 className="mt-5 ml-8 p-5 bg-white bg-opacity-90 text-black rounded">Welcome to the Bar</h3>
            <h5 className="p-5 ml-8 font-semibold text-zinc-600">Here's one on <span className="italic"> us</span>.</h5>
        </div>
    </div>
  )
}

export default Home