import { BeakerIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

function Bar() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )
}

function XMarkIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    )
}

function Nav () {

    const [isOpen, setisOpen] = useState(false);
    const toggelMenu = () => setisOpen(!isOpen);

    
    return (
        <div class="flex justify-between items-center mt-8">
            <div>
                <span>Mijiza</span>
            </div>
            <div class="flex">
                <div className='flex'>
                    <div class="">
                        <a>About me</a>
                    </div>
                    <div class="mx-8 ">
                        <a>About me</a>
                    </div>
                    <div>
                        <a>About me</a>
                    </div>
                </div>
                <div class="md:hidden ">
                    <button onClick={toggelMenu}>
                        { isOpen ? <XMarkIcon></XMarkIcon> : <Bar></Bar>}
                    </button>
                </div>
            {isOpen && (
                <div> 
                        <div class="">
                        <a>About me</a>
                    </div>
                    <div class="">
                        <a>About me</a>
                    </div>
                    <div>
                        <a>About me</a>
                    </div>
                </div>
            )}

            </div>
        </div>
    )
}


export default Nav;