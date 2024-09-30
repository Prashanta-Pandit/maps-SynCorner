import '../App';
import { Outlet } from 'react-router-dom';
import Navbar from './NavBarComponents/Navbar';

export default function MasterLayout() {
    return (
        <>
           <div className='flex flex-row'>
                <Navbar />
                <Outlet /> {/* This is a section where all other compoments we call via App.jsx */}
           </div>
        </>
    )
}