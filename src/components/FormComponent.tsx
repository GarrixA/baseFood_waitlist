const FormComponent = () => {
	return (
		<div className="w-full h-screen bg-black/20 fixed inset-0 flex flex-col items-center justify-center">
			<div className="p-3 w-1/2 bg-red-300">
				<form
					className="launchlist-form bg-green-400 px-10 py-6 flex flex-col w-full space-y-5 rounded-xl"
					action="https://getlaunchlist.com/s/F7AvJj"
					method="POST"
				>
					<input
						name="name"
						type="text"
						placeholder="Your name"
						className="px-5 py-2 rounded"
					/>
					<select name="cars" id="cars">
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="mercedes">Mercedes</option>
						<option value="audi">Audi</option>
					</select>
					<input
						name="email"
						type="email"
						placeholder="Your email"
						className="px-5 py-2 rounded"
					/>
					<button type="submit">Join Waitlist</button>
				</form>
			</div>
		</div>
	);
};

export default FormComponent;
