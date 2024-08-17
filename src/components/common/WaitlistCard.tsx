interface WaitlistCardProps {
	headline: string;
	subtitle: string;
	button1Text: string;
	button1Action?: () => void;
	button2Text?: string;
	button2Action?: () => void;
	image?: string;
	button2Required?: boolean;
	buttonRight?: boolean;
}

const WaitlistCard: React.FC<WaitlistCardProps> = ({
	headline,
	subtitle,
	button1Text,
	button1Action,
	button2Text,
	button2Action,
	button2Required,
	buttonRight,
}) => {
	return (
		<div className="w-full flex items-center lg:max-w-[80%] max-w-[90%] mx-auto">
			<div
				className={`${
					buttonRight
						? "w-full lg:flex-row flex-col justify-between space-y-5"
						: "lg:w-4/6 w-full flex-col"
				}  flex`}
			>
				<div className={`${buttonRight ? "lg:w-1/2 space-y-5" : "space-y-5"}`}>
					<h1
						className={`${
							buttonRight
								? "md:text-4xl text-xl text-center lg:text-start"
								: "2xl:text-5xl text-2xl md:text-4xl"
						} font-heading font-black hpver:bg-[#]`}
					>
						{headline}
					</h1>
					<p className="lg:text-xl md:text-2xl text-sm w-full">{subtitle}</p>
				</div>
				<div
					className={`${
						buttonRight ? "lg:justify-end justify-center" : "lg:mt-20 mt-10"
					} flex items-center gap-4`}
				>
					<button
						onClick={button1Action}
						className=" font-heading px-6 py-2 bg-[#2245FE] hover:bg-gradient-to-r hover:from-[#2245FE] hover:to-blue-700 md:text-xl text-white rounded-[8px]"
					>
						{button1Text}
					</button>
					<button
						onClick={button2Action}
						className={`${
							button2Required ? "block" : "hidden"
						} px-6 py-2 font-heading md:text-xl rounded-[8px] bg-white text-[#2245FE]`}
					>
						{button2Text}
					</button>
				</div>
			</div>
		</div>
	);
};

export default WaitlistCard;
