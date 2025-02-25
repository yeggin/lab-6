import '../style.css'

const Foot = () => {
    return (
        <footer className='footer'>
            © {new Date().getFullYear()} CodeCraft Labs. All rights reserved.
        </footer>
    );
};

export default Foot;
