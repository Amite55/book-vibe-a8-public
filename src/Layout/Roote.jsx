
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Roote = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
        </div>
    );
};

export default Roote;