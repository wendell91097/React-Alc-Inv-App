import { useState } from "react"
import { Link } from "react-router-dom"
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, Providers } from "../config/firebase"

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-amber-200 to-amber-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 ">
            <Link to='/' className="font-semibold text-xl tracking-tight">Cool Drink App</Link>  
        </div>  
        <div className="block">
            <button 
                onClick={dropDown}
                className="flex items-cent px-3 py-2 text-white
                border rounded border-amber-200 hover:border-white hover:border-r-2"
                >
                    <i className="fas fa-bars"></i>
            </button>
        </div>
        { isVisible ? ( 
            <div className="w-full block flex-grow items-center">
                <div className="text-sm lg:flex-grow">
                    <Link to="/" onClick={ clicked } className="flex place-items-center 
                            mt-4 lg:inline-block lg:mt-0 text-amber-200 hover:text-white mr-4">
                        <button className="p-3 m-5 bg-amber-500 justify-center rounded-lg shadow-xl">
                            Home
                        </button>
                    </Link>
                    <Link to="/about" onClick={ clicked } className="flex place-items-center 
                            mt-4 lg:inline-block lg:mt-0 text-amber-200 hover:text-white mr-4">
                        <button className="p-3 m-5 bg-amber-500 justify-center rounded-lg shadow-xl">
                            About
                        </button>
                    </Link>
                    <Link to="/support" onClick={ clicked } className="flex place-items-center 
                            mt-4 lg:inline-block lg:mt-0 text-amber-200 hover:text-white mr-4">
                        <button className="p-3 m-5 bg-amber-500 justify-center rounded-lg shadow-xl">
                            Support
                        </button>
                    </Link>
                    {
                        !auth.currentUser ? 

                        
                            <Link to="/" onClick ={ () => { signInOnClick()}} className="flex place-items-center mt-4 lg:inline-block 
                            lg:mt-0 text-amber-200 hover:text-white mr-4">
                                <button className="p-3 m-5 bg-amber-500 justify-center rounded-lg shadow-xl">
                                Sign In
                                </button>
                            </Link>
                            
                        :
                        <>
                    
                       
                            <Link to="/dashboard" onClick={ clicked } className="flex place-items-center 
                            mt-4 lg:inline-block lg:mt-0 text-amber-200 hover:text-white mr-4">
                                <button className="p-3 m-5 bg-amber-500 justify-center rounded-lg shadow-xl">
                                    The Drinks
                                </button>
                            </Link>
                       
                        
                            <Link to="/" onClick ={ () => { signOutOnClick()}} className="flex place-items-center mt-4 lg:inline-block 
                            lg:mt-0 text-amber-200 hover:text-white mr-4">
                                <button className="p-3 m-5 bg-amber-500 justify-center rounded-lg shadow-xl">
                                    Sign Out
                                </button>
                            </Link>
                        </>
                    };
                    
                </div>
            </div>
            ) : (
            <></>)}
    </nav>
  )
}

export default Navbar