import './style.css';
const WebpackIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><title>icon-square-big</title><path fill="#FFF" d="M600 0l530.3 300v600L600 1200 69.7 900V300z"/><path fill="#8ED6FB" class="st1" d="M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z"/><path fill="#1C78C0" d="M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z"/></svg>
import {
	Easing,
	interpolate, // Title, Subtitle, Logo
	useCurrentFrame, // Title, Subtitle, Logo
	AbsoluteFill, // Composition
	spring, // Logo
	useVideoConfig, // Logo
} from 'remotion';

export const Title = () => {
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
	const wave1 = Math.cos(frame / 15) * 10 + entranceOffset;

	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<div className="m-10" />

			{/* Logo */}
			<div className="absolute w-48 h-48" style={{transform: `translateY(${wave1}px)`}}>
				<WebpackIcon />
			</div>

			<div className="m-3" />

			{/* Title */}

						{/* Title */}
						<div
				className="absolute bottom-32 text-6xl font-bold leading-relaxed"
				style={{
					color: titleColor,
					opacity: (
              interpolate(frame, [70, 150], [0, 1], {
              easing: Easing.inOut(Easing.ease),
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }) 
            + interpolate(frame, [280, 340], [0, -1], {
              easing: Easing.inOut(Easing.ease),
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            })
          ),
        }}
			>
				webpack 5
			</div>

			{/* Subtitle */}
			<div
				className="absolute bottom-24 text-gray-600 text-3xl font-bold"
				style={{
					opacity: (
              interpolate(frame, [80, 160], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              })
              + interpolate(frame, [260, 330], [0, -1],{
                easing: Easing.inOut(Easing.ease),
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              })
          ),
				}}
			>
				Design, Architecture, Examples
			</div>

		</AbsoluteFill>
	);
};

