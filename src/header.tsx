import { Link } from 'react-router-dom';

const header = () => {
    return ( 
        <nav className="header">
            <h1>ModernFit Gym</h1>
            <div className="links">
                <Link to="/">Home</Link>
            </div>
        </nav>
     );
}
 
export default header;