import { Composition as RemotionComposition } from 'remotion';
import { DefaultComposition as TailwindCssComposition } from './ReactRenderTree';
import { DefaultComposition as BundlerShowcaseComposition } from './BundlerShowcase';

export const Composition: React.FC = () => {
	return (
		<>
			<RemotionComposition
				id="TailwindCssComposition"
				component={TailwindCssComposition}
				durationInFrames={360}
				fps={60}
				width={1280}
				height={720}
			/>
				<RemotionComposition
				id="BundlerShowcaseComposition"
				component={BundlerShowcaseComposition}
				durationInFrames={360}
				fps={60}
				width={1280}
				height={720}
			/>
		</>
	);
};
