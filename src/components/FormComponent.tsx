import { MdOutlineClose } from "react-icons/md";

interface FormComponentProps {
	toggleModal: () => void;
}

const FormComponent = ({ toggleModal }: FormComponentProps) => {
	return (
		<div className="w-full h-screen bg-black/50 fixed inset-0 flex flex-col items-center justify-center z-50 backdrop-blur-sm">
			<div className="bg-white lg:w-1/2 md:w-4/5 w-[90%] py-5 md:px-10 rounded-lg">
				<div>
					<MdOutlineClose
						className="text-4xl hover:text-red-700 cursor-pointer ml-4 md:ml-0"
						onClick={() => toggleModal()}
					/>
					<h1 className="text-center font-heading md:text-xl">
						Enter your information below
					</h1>
				</div>
				<form
					className="launchlist-form px-10 py-6 flex flex-col w-full space-y-5 rounded-xl font-heading"
					action="https://getlaunchlist.com/s/F7AvJj"
					method="POST"
				>
					<input
						name="name"
						type="text"
						placeholder="Your name"
						className="px-5 py-2 rounded border-4 border-[#d9d9d9]"
					/>
					<input
						name="email"
						type="email"
						placeholder="Your email"
						className="px-5 py-2 rounded border-4 border-[#d9d9d9] "
					/>
					<select
						name="cars"
						id="cars"
						className="px-5 py-2 rounded border-4 border-[#d9d9d9] text-[#b6b4b4]"
					>
						<option>Type of company</option>
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="mercedes">Mercedes</option>
						<option value="audi">Audi</option>
					</select>
					<input
						name="country"
						type="text"
						placeholder="Your country"
						className="px-5 py-2 rounded border-4 border-[#d9d9d9]"
					/>
					<div className="flex items-center justify-center">
						<button
							type="submit"
							className="bg-[#2245ff] px-6 py-2 text-white text-xl rounded-lg font-black"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormComponent;
