import {useEffect, useRef, useState} from 'react';

import {
  Easing,
	interpolate,
	useCurrentFrame, // Title, Subtitle, Logo
} from 'remotion';

interface CardProps {
	delay: number;
	duration: number;
	children: React.ReactNode;
}

export function Card({delay, duration, children}: CardProps) {
  const RADIUS = 10;
  const PADDING = 10;
  const STROKEWIDTH = 2;

  const frame = useCurrentFrame();
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(()=>{
    if(ref.current){
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      });
    }
  }, []);

	const perimeter = 2 * dimensions.width + 2 * dimensions.height;
	const progress = interpolate(
		frame,
		[delay, delay + duration],
		[0, perimeter],{
      easing: Easing.exp,
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp'
    }
	);

	return (
		<div className='relative'>
      <div ref={ref} className="absolute z-10" style={{ padding: `${PADDING}px` }}>
        {children}
      </div>

			{ref.current && (
				<svg style={{ height: dimensions.height, width: dimensions.width}}>
					<title>cardBorder</title>
					<path
            className='stroke-black fill-transparent'
            stroke="black"
            strokeWidth={STROKEWIDTH}
						strokeDashoffset={perimeter-progress}
						strokeDasharray={`${perimeter} ${perimeter}`}
						d={`M${RADIUS},${STROKEWIDTH} L${dimensions.width - RADIUS - STROKEWIDTH},${STROKEWIDTH} Q${dimensions.width - STROKEWIDTH},${STROKEWIDTH} ${dimensions.width - STROKEWIDTH},${RADIUS} L${dimensions.width - STROKEWIDTH},${dimensions.height - RADIUS} Q${dimensions.width - STROKEWIDTH},${dimensions.height - STROKEWIDTH} ${dimensions.width-RADIUS - STROKEWIDTH},${dimensions.height - STROKEWIDTH} L${RADIUS},${dimensions.height - STROKEWIDTH} Q${STROKEWIDTH},${dimensions.height - STROKEWIDTH} ${STROKEWIDTH},${dimensions.height - RADIUS - STROKEWIDTH} L${STROKEWIDTH},${RADIUS} Q${STROKEWIDTH},${STROKEWIDTH} ${RADIUS},${STROKEWIDTH}`}
					/>
				</svg>
			)}
		</div>
	);
}
