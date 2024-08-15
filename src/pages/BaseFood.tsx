import { useState } from "react";
import MiddleCard from "../components/common/MiddleCard";
import WaitlistCard from "../components/common/WaitlistCard";
import { MiddleCardData } from "../utils/ModdleCardData";
import { WaitlistData, WaitListLastCardData } from "../utils/WaitlistData";
import FormComponent from "../components/FormComponent";

const BaseFood = () => {
	const [openModal, setOpenModal] = useState(false);
	const toggleModal = () => {
		setOpenModal(!openModal);
	};
	const handleJoinWaitlist = () => {
		console.log("Joining waitlist...");
		toggleModal();
	};

	const handleGetInTouch = () => {
		console.log("Getting in touch...");
	};
	return (
		<>
			<div>
				<div className="bg-red-500">
					{WaitlistData.map((data, idx) => (
						<WaitlistCard
							headline={data.heading}
							subtitle={data.subTitle}
							button1Text="Join Waitlist"
							button1Action={handleJoinWaitlist}
							button2Text="Get in Touch"
							button2Action={handleGetInTouch}
							key={idx}
						/>
					))}
				</div>
				<div className="flex gap-4 p-4">
					{MiddleCardData.map((data, idx) => (
						<MiddleCard
							title={data.title}
							description={data.description}
							key={idx}
						/>
					))}
				</div>

				<div>
					{WaitListLastCardData.map((data, idx) => (
						<WaitlistCard
							headline={data.heading}
							subtitle={data.subTitle}
							button1Text="Join Waitlist"
							button1Action={handleJoinWaitlist}
							button2Text="Get in Touch"
							button2Action={handleGetInTouch}
							key={idx}
						/>
					))}
				</div>
				{openModal && <FormComponent />}
			</div>
		</>
	);
};

export default BaseFood;
