/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface LayoutProps {
	children: any;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
