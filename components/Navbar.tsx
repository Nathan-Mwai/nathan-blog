import Link from 'next/link'
import {House} from "lucide-react";

const Navbar =  () => {
    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <div>
                        <h1 className={'text-brand font-semibold'}>Codebase Journal</h1>
                    </div>
                </Link>
                <div className='flex items-center gap-5 text-black'>
                        <>
                            <Link href='/'>
                                <span className={'max-sm:hidden'}>Home</span>
                                <House className={'size-6 sm:hidden'}/>
                            </Link>
                        </>
                </div>
            </nav>
        </header>
    )
}

export default Navbar