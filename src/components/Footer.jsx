import { Link } from "react-router"

function Footer() {
    return (
        <>
            {/* Footer */}
            <div className="bg-black ">
                <div className="max-w-7xl mx-auto text-white flex justify-around mt-20 py-8">
                    <div>
                        <p>Copyright &copy; 2026 Master-IT Store</p>
                    </div>
                    <nav className="flex gap-x-5">
                        <Link to="/"> Home </Link>
                        <Link to="/contact"> Contact Us </Link>
                        <Link to="/about"> About Us </Link>
                        <Link to="/"> Term and Conditional </Link>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default Footer