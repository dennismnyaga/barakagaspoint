/* eslint-disable prettier/prettier */
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import InventoryIcon from '@mui/icons-material/Inventory';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SpaIcon from '@mui/icons-material/Spa';
import { Link } from 'react-router-dom';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const LeftNav = () => {
    return (
        <div className=' bg-slate-600 pt-2 px-2 h-screen left-0 sticky top-0'>
            <h1 className=' font-extrabold mb-3'>BARAKA GAS POINT</h1>
            <div>
                <ul className='flex flex-col space-y-5'>
                    <li>
                        <Link to='/'>
                            <DashboardIcon />
                            Dashboard
                        </Link>
                    </li>
                    {/* <li>
                        <Link to='/add_customer'>
                            <AddIcon />
                            Add Customer
                        </Link>
                        
                    </li> */}
                    <li>
                        <Link to='/products'>
                        <InventoryIcon />
                        Products
                        </Link>
                        </li>
                    <li>
                        <Link to='/sendsms'>
                            <ChatBubbleOutlineIcon />
                            Send SMS
                        </Link>

                    </li>
                    <li>
                        <Link to='/customers'>
                            <SpaIcon />
                            Customers
                        </Link>
                    </li>
                    <li>
                        <Link to='/assign'>
                        <AssignmentTurnedInIcon />Assign Products
                        </Link>
                        </li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                </ul>
            </div>
        </div>
    )
}

export default LeftNav