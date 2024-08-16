import { useState } from "react";
import FormComponent from "./FormComponent";

const Navbar = () => {
	const [openModal, setOpenModal] = useState(false);
	const toggleModal = () => {
		setOpenModal(!openModal);
	};
	const handleJoinWaitlist = () => {
		console.log("Joining waitlist...");
		toggleModal();
	};
	return (
		<div className="bg-white w-full fixed z-50 shadow-lg top-0">
			<div className="flex justify-between items-center lg:max-w-[80%] max-w-[90%] mx-auto py-8 ">
				<div className=" font-heading text-[#2245fe] font-extrabold text-2xl">
					baseFood
				</div>
				<div>
					<button
						className="bg-[#2245fe] text-white font-heading px-4 text-xs lg:text-lg py-2 rounded"
						onClick={() => handleJoinWaitlist()}
					>
						Join waitlist
					</button>
				</div>
			</div>
			{openModal && <FormComponent toggleModal={toggleModal} />}
		</div>
	);
};

export default Navbar;
