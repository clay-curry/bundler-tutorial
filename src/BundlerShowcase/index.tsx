import './style.css';
import {
  Easing,
	interpolate, // Title, Subtitle, Logo
	useCurrentFrame, // Title, Subtitle, Logo
	AbsoluteFill, // Composition
	spring, // Logo
	useVideoConfig, // Logo
} from 'remotion';
import {
  WebpackLogo
} from './webpack';

export const DefaultComposition: React.FC = () => {
	const titleColor = '#000000';

	const frame = useCurrentFrame();
	const {height, fps} = useVideoConfig();
	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 60,
	});
	const entranceOffset = interpolate(entrance, [0, 1], [height, 0]);
	const logo1 = Math.cos(frame / 15) + entranceOffset;

	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<div className="m-10" />

			{/* Logo */}
			<div
        style={{transform: `translateY(${logo1}px)`}}
      >
        <WebpackLogo spin={interpolate(frame, [70, 130], [0, 1], {
            easing: Easing.inOut(Easing.ease),
extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
					})} />
			</div>

			<div className="m-3" />

			{/* Title */}
			<div
				className="absolute bottom-24 text-5xl font-bold leading-relaxed"
				style={{
					color: titleColor,
					opacity: interpolate(frame, [70, 150], [0, 1], {
            easing: Easing.inOut(Easing.ease),
						extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
					}),
				}}
			>
				Static Module Bundlers
			</div>

			{/* Subtitle */}
			<div
				className="absolute bottom-16 text-gray-600 text-3xl"
				style={{
					opacity: interpolate(frame, [80, 160], [0, 1], {
						extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
					}),
				}}
			>
				Patterns, Configurations, Tradeoffs
			</div>


		</AbsoluteFill>
	);
};

