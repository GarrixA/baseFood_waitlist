interface WaitlistCardProps {
	headline: string;
	subtitle: string;
	button1Text: string;
	button1Action: () => void;
	button2Text: string;
	button2Action: () => void;
}

const WaitlistCard: React.FC<WaitlistCardProps> = ({
	headline,
	subtitle,
	button1Text,
	button1Action,
	button2Text,
	button2Action,
}) => {
	return (
		<div>
			<div className="flex flex-col items-center p-8">
				<h1>{headline}</h1>
				<p>{subtitle}</p>
				<div className="flex items-center gap-4">
					<button onClick={button1Action} className=" px-6 py-2 bg-blue-700">
						{button1Text}
					</button>
					<button onClick={button2Action} className=" px-6 py-2 bg-blue-700">
						{button2Text}
					</button>
				</div>
			</div>
		</div>
	);
};

export default WaitlistCard;
