const sideBorderWidthsSequence  = [
  [1, 1, 6, 6], // Front
  [6, 6, 1, 1], // Right
  [6, 1, 6, 1], // Back
  [1, 6, 1, 6]  // Left
]
const topBorderWidthsSequence  = [
  [6, 1, 6, 1], // Top
  [1, 1, 6, 6], // Top
  [1, 6, 1, 6], // Top
  [6, 6, 1, 1], // Top
]

type borderWidthAssignment = typeof sideBorderWidthsSequence[number]

const lerpBorderWidth = (a: borderWidthAssignment, b: borderWidthAssignment, t: number) => a.map((v, i) => v + (b[i] - v) * t)
const invertBorderWidths = (b: number[]) => [b[3], b[2], b[1], b[0]]
const getSideBorderWidths = (spin: number) => lerpBorderWidth(sideBorderWidthsSequence[Math.floor(spin) % 4], sideBorderWidthsSequence[Math.ceil(spin) % 4], spin % 1)
const getTopBorderWidths = (spin: number) => lerpBorderWidth(topBorderWidthsSequence[Math.floor(spin) % 4], topBorderWidthsSequence[Math.ceil(spin) % 4], spin % 1)
const getBottomBorderWidth = (spin: number) => invertBorderWidths(getTopBorderWidths(spin));

const getBorderWidths = (spin: number) => ({
  front: getSideBorderWidths(spin),
  right: getSideBorderWidths(spin + 1),
  back: getSideBorderWidths(spin + 2),
  left: getSideBorderWidths(spin + 3),
  top: getTopBorderWidths(spin),
  bottom: getBottomBorderWidth(spin)
})

export function WebpackLogo({spin = 0}: {spin: number}) {

const cubeStyle: React.CSSProperties = {
		width: '120px',
		height: '120px',
		transformStyle: 'preserve-3d',
		transform: `rotateX(-33.5deg)rotateY(${45 + spin * 90}deg)`,
	};

  const {
    front,
right,
back,
left,
top,
bottom
  } = getBorderWidths(spin)

	return (
		<figure className="cube relative" style={cubeStyle}>
			<div
				className="front w-40 h-40 border-white border-solid absolute bg-[#8dd6f980] [transformStyle:preserve-3d]"
				style={{
					transform: `translateZ(80px)`,
          borderWidth: `${front[0]}px ${front[2]}px ${front[3]}px ${front[1]}px`
				}}
			>
        <div className="absolute top-0 w-full text-center">Top</div>
        <div className="absolute left-0 h-full py-14">Left</div>
        <div className="absolute right-0 h-full py-14">Right</div>
        <div className="absolute bottom-0 w-full text-center">Bottom</div>
      </div>
      <div
				className="back w-40 h-40 absolute  bg-[#8dd6f980] [transformStyle:preserve-3d]"
				style={{
					transform: `rotateY(180deg) translateZ(80px)`,
          borderWidth: `${back[0]}px ${back[2]}px ${back[3]}px ${back[1]}px`
        }}
        >
        <div className="absolute top-0 w-full text-center">Top</div>
        <div className="absolute left-0 h-full py-14">Left</div>
        <div className="absolute right-0 h-full py-14">Right</div>
        <div className="absolute bottom-0 w-full text-center">Bottom</div>
      </div>
			<div
				className="left w-40 h-40 absolute  bg-[#8dd6f980] [transformStyle:preserve-3d]"
				style={{
					transform: `translateX(-80px) rotateY(-90deg)`,
          borderWidth: `${left[0]}px ${left[2]}px ${left[3]}px ${left[1]}px`
				}}
        >
        <div className="absolute top-0 w-full text-center">Top</div>
        <div className="absolute left-0 h-full py-14">Left</div>
        <div className="absolute right-0 h-full py-14">Right</div>
        <div className="absolute bottom-0 w-full text-center">Bottom</div>
      </div>
			<div
				className="right w-40 h-40 absolute  bg-[#8dd6f980] [transformStyle:preserve-3d]"
				style={{
					transform: `translateX(80px) rotateY(90deg)`,
          borderWidth: `${right[0]}px ${right[2]}px ${right[3]}px ${right[1]}px`
				}}
        >
        <div className="absolute top-0 w-full text-center">Top</div>
        <div className="absolute left-0 h-full py-14">Left</div>
        <div className="absolute right-0 h-full py-14">Right</div>
        <div className="absolute bottom-0 w-full text-center">Bottom</div>
      </div>
      <div
				className="w-40 h-40 absolute  bg-[#8dd6f980] [transformStyle:preserve-3d]"
				style={{
					transform: `translateY(-80px) rotateX(90deg)`,
          borderWidth: `${top[0]}px ${top[2]}px ${top[3]}px ${top[1]}px`
				}}
        >
        <div className="absolute top-0 w-full text-center">Top</div>
        <div className="absolute left-0 h-full py-14">Left</div>
        <div className="absolute right-0 h-full py-14">Right</div>
        <div className="absolute bottom-0 w-full text-center">Bottom</div>
      </div>
      <div
				className="bottom w-40 h-40 absolute  bg-[#8dd6f980] [transformStyle:preserve-3d]"
				style={{
					transform: `translateY(80px) rotateX(-90deg)`,
          borderWidth: `${bottom[0]}px ${bottom[2]}px ${bottom[3]}px ${bottom[1]}px`
				}}
        >
        <div className="absolute top-0 w-full text-center">Top</div>
        <div className="absolute left-0 h-full py-14">Left</div>
        <div className="absolute right-0 h-full py-14">Right</div>
        <div className="absolute bottom-0 w-full text-center">Bottom</div>
      </div>
		</figure>
	);
};
