import { useState } from "react";
import MiddleCard from "../components/common/MiddleCard";
import WaitlistCard from "../components/common/WaitlistCard";
import { MiddleCardData } from "../utils/ModdleCardData";
import {
	visualizeData,
	WaitlistData,
	WaitListLastCardData,
} from "../utils/WaitlistData";
import FormComponent from "../components/FormComponent";
import VisualizeCard from "../components/common/VisualizeCard";

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
			<div className="mt-24">
				<div className="relative h-[70vh]">
					<div className="absolute w-full h-full bg-black/20"></div>
					<div className="waitlist absolute  z-10 h-full flex items-center w-full text-white">
						{WaitlistData.map((data, idx) => (
							<WaitlistCard
								headline={data.heading}
								subtitle={data.subTitle}
								button1Text="Join Waitlist"
								button1Action={handleJoinWaitlist}
								button2Text="Get in Touch"
								button2Action={handleGetInTouch}
								button2Required
								key={idx}
							/>
						))}
					</div>
				</div>
				<div className="">
					{visualizeData.map((visual, idx) => (
						<VisualizeCard
							headline={visual.heading}
							subtitle={visual.subTitle}
							image={visual.image}
							key={idx}
						/>
					))}
				</div>
				<div className="flex gap-4 p-4 bg-[#F4F9FA] lg:px-[10%] items-center justify-between lg:space-x-10 lg:h-80 lg:flex-row flex-col">
					{MiddleCardData.map((data, idx) => (
						<MiddleCard
							title={data.title}
							description={data.description}
							key={idx}
						/>
					))}
				</div>

				<div className="text-black py-20">
					{WaitListLastCardData.map((data, idx) => (
						<WaitlistCard
							headline={data.heading}
							subtitle={data.subTitle}
							button1Text="Join Waitlist"
							button1Action={handleJoinWaitlist}
							button2Required={false}
							buttonRight={true}
							key={idx}
						/>
					))}
				</div>
				{openModal && <FormComponent toggleModal={toggleModal} />}
			</div>
		</>
	);
};

export default BaseFood;
