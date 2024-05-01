interface CubeFaceState {
  borderWidthTRBL: [number, number, number, number];
  borderColor: string; 
  bgColor: string;
  opacity: number;
  zIndex: number;
}

const cubeFaceSequence: CubeFaceState[] = [
  {
    borderWidthTRBL: [1, 6, 6, 1],
    bgColor: "#8dd6f980",
    borderColor: "yellow",
    opacity: 0,
    zIndex: 10
  },
  {
    borderWidthTRBL: [6, 1, 1, 6],
    bgColor: "#8dd6f980",
    borderColor: "yellow",
    opacity: 1,
    zIndex: 10
  },
  {
    borderWidthTRBL: [6, 6, 1, 1],
    bgColor: "#8dd6f980",
    borderColor: "yellow",
    opacity: 1,
    zIndex: 10
  },
  {
    borderWidthTRBL: [1, 1, 6, 6],
    bgColor: "#8dd6f980",
    borderColor: "yellow",
    opacity: 0,
    zIndex: 10
  }
]
const cubeTopSequence: CubeFaceState[] = [
  {
    borderWidthTRBL: [6, 6, 1, 1],
    bgColor: "#8dd6f980",
    borderColor: "red",
    opacity: 0,
    zIndex: 100
  },
  {
    borderWidthTRBL: [1, 6, 6, 1],
    bgColor: "#8dd6f980",
    borderColor: "green",
    opacity: 0,
    zIndex: 100
  },
  {
    borderWidthTRBL: [1, 1, 6, 6],
    bgColor: "#8dd6f980",
    borderColor: "blue",
    opacity: 0,
    zIndex: 100
  },
  {
    borderWidthTRBL: [6, 1, 1, 6],
    bgColor: "#8dd6f980",
    borderColor: "blue",
    opacity: 0,
    zIndex: 100
  }
]
const cubeBottomSequence: CubeFaceState[] = [
  {
    borderWidthTRBL: [6, 1, 1, 6],
    bgColor: "#8dd6f980",
    borderColor: "red",
    opacity: 1,
    zIndex: 10
  },
  {
    borderWidthTRBL: [1, 1, 6, 6],
    bgColor: "#8dd6f980",
    borderColor: "red",
    opacity: 1,
    zIndex: 10
  },
  {
    borderWidthTRBL: [1, 6, 6, 1],
    bgColor: "#8dd6f980",
    borderColor: "red",
    opacity: 1,
    zIndex: 10
  },
  {
    borderWidthTRBL: [6, 6, 1, 1],
    bgColor: "#8dd6f980",
    borderColor: "red",
    opacity: 1,
    zIndex: 10
  }
]

const cubeInnerSequence: CubeFaceState[] = [
  {
    borderWidthTRBL: [1,1,1,1],
    bgColor: "#5299c8",
    borderColor: "red",
    opacity: 1,
    zIndex: 60
  },
  {
    borderWidthTRBL: [1,1,1,1],
    bgColor: "#5299c8",
    borderColor: "red",
    opacity: 1,
    zIndex: 60
  },
  {
    borderWidthTRBL: [1,1,1,1],
    bgColor: "#5299c8",
    borderColor: "red",
    opacity: 1,
    zIndex: 60
  },
  {
    borderWidthTRBL: [1,1,1,1],
    bgColor: "#5299c8",
    borderColor: "red",
    opacity: 1,
    zIndex: 60
  },
];

const lerpCubeFaceState = (
	a: CubeFaceState,
	b: CubeFaceState,
	t: number,
) => ({ 
  borderWidthTRBL: a.borderWidthTRBL.map((v, i) => v + (b.borderWidthTRBL[i] - v) * t), 
  bgColor: a.bgColor, 
  opacity: a.opacity + (b.opacity - a.opacity) * t, 
  zIndex: a.zIndex + (b.zIndex - a.zIndex) * t,
  borderColor: a.borderColor || b.borderColor,
});
const getSideBorderWidths = (spin: number) =>
	lerpCubeFaceState(
		cubeFaceSequence[Math.floor(spin) % 4],
		cubeFaceSequence[Math.ceil(spin) % 4],
		spin % 1,
);
const getTopBorderWidths = (spin: number) =>
	lerpCubeFaceState(
		cubeTopSequence[Math.floor(spin) % 4],
		cubeTopSequence[Math.ceil(spin) % 4],
		spin % 1,
);
const getBottomBorderWidths = (spin: number) =>
  lerpCubeFaceState(
    cubeBottomSequence[Math.floor(spin) % 4],
    cubeBottomSequence[Math.ceil(spin) % 4],
    spin % 1,
);
const getInnerCubeFace = (spin: number) =>
  lerpCubeFaceState(
    cubeInnerSequence[Math.floor(spin) % 4],
    cubeInnerSequence[Math.ceil(spin) % 4],
    spin % 1,
  );

export function WebpackLogo({spin = 0}: {spin: number}) {
  spin %= 4;

	const outerCubeStyle: React.CSSProperties = {
		width: '120px',
		height: '120px',
		transformStyle: 'preserve-3d',
		transform: `rotateX(-33.5deg)rotateY(${45 + spin * 90}deg)`,
	};
  const innerCubeStyle: React.CSSProperties = {
		width: '120px',
		height: '120px',
		transformStyle: 'preserve-3d',
		transform: `rotateX(-33.5deg)rotateY(${45 - spin * 90}deg)scale3d(0.5,0.5,0.5)`,
	};
	const front = getSideBorderWidths(spin);
  const right = getSideBorderWidths(spin + 1);
  const back = getSideBorderWidths(spin + 2);
  const left = getSideBorderWidths(spin + 3);
  const top = getTopBorderWidths(spin);
  const bottom = getBottomBorderWidths(spin);
	return (
		<div className="">
			<figure className="outer-cube w-[120px] h-[120px] absolute" style={outerCubeStyle}>
				<section
					className="front w-full h-full absolute transformStyle:preserve-3d]"
					style={{
            zIndex: `${front.zIndex as number}`,
            backgroundColor: `${front.bgColor as string}`,
            opacity: `${front.opacity as number}`,
						transform: `translateZ(60px)`,
            borderColor: `${front.borderColor as string}`,
						borderWidth: `${front.borderWidthTRBL[0]}px ${front.borderWidthTRBL[1]}px ${front.borderWidthTRBL[2]}px ${front.borderWidthTRBL[3]}px`,
					}}
				/>
				<div
					className="back w-full h-full absolute  [transformStyle:preserve-3d]"
					style={{
            zIndex: `${back.zIndex as number}`,
            backgroundColor: `${back.bgColor as string}`,
            opacity: `${back.opacity as number}`,
						transform: `rotateY(180deg) translateZ(60px)`,
            borderColor: `${front.borderColor as string}`,
            borderWidth: `${back.borderWidthTRBL[0]}px ${back.borderWidthTRBL[1]}px ${back.borderWidthTRBL[2]}px ${back.borderWidthTRBL[3]}px`,
					}}
				/>
				<div
					className="left w-full h-full absolute [transformStyle:preserve-3d]"
					style={{
            zIndex: `${left.zIndex as number}`,
            backgroundColor: `${left.bgColor as string}`,
            opacity: `${left.opacity as number}`,
            transform: `translateX(-60px) rotateY(-90deg)`,
            borderColor: `${front.borderColor as string}`,
            borderWidth: `${left.borderWidthTRBL[0]}px ${left.borderWidthTRBL[1]}px ${left.borderWidthTRBL[2]}px ${left.borderWidthTRBL[3]}px`,
          }}
				/>
				<div
					className="right w-full h-full absolute [transformStyle:preserve-3d]"
					style={{
            zIndex: `${right.zIndex as number}`,
            backgroundColor: `${right.bgColor as string}`,
            opacity: `${right.opacity as number}`,
            transform: `translateX(60px) rotateY(90deg)`,
            borderColor: `${front.borderColor as string}`,
            borderWidth: `${right.borderWidthTRBL[0]}px ${right.borderWidthTRBL[1]}px ${right.borderWidthTRBL[2]}px ${right.borderWidthTRBL[3]}px`
          }}
				/>
				<div
					className="top w-full h-full absolute [transformStyle:preserve-3d]"
					style={{
            zIndex: `${top.zIndex as number}`,
            backgroundColor: `${top.bgColor as string}`,
            opacity: `${top.opacity as number}`,
						transform: `translateY(-60px) rotateX(90deg)`,
            borderColor: `${front.borderColor as string}`,
            borderWidth: `${top.borderWidthTRBL[0]}px ${top.borderWidthTRBL[1]}px ${top.borderWidthTRBL[2]}px ${top.borderWidthTRBL[3]}px`,
					}}
				/>
				<div
					className="bottom w-full h-full absolute  [transformStyle:preserve-3d]"
					style={{
            zIndex: "0",
            backgroundColor: `${bottom.bgColor as string}`,
            opacity: `${bottom.opacity as number}`,
						transform: `translateY(60px) rotateX(-90deg)`,
            borderColor: `${front.borderColor as string}`,
            borderWidth: `${bottom.borderWidthTRBL[0]}px ${bottom.borderWidthTRBL[1]}px ${bottom.borderWidthTRBL[2]}px ${bottom.borderWidthTRBL[3]}px`,
					}}
				/>
			</figure>
			<figure className="inner-cube w-[120px] h-[120px] absolute" style={innerCubeStyle}>
      <div className="front w-full h-full solid absolute [transformStyle:preserve-3d]"
					style={{
            zIndex: `${getInnerCubeFace(spin).zIndex as number}`,
            backgroundColor: `${getInnerCubeFace(spin).bgColor as string}`,
            opacity: `${getInnerCubeFace(spin).opacity as number}`,
						transform: `translateZ(60px)`,
            borderColor: `${front.borderColor as string}`,
            borderWidth: `${getInnerCubeFace(spin).borderWidthTRBL[0]}px ${getInnerCubeFace(spin).borderWidthTRBL[1]}px ${getInnerCubeFace(spin).borderWidthTRBL[2]}px ${getInnerCubeFace(spin).borderWidthTRBL[3]}px`,
					}} />

				<div
					className="back w-full h-full absolute  [transformStyle:preserve-3d]"
					style={{
            zIndex: `${getInnerCubeFace((spin + 1)).zIndex as number}`,
            backgroundColor: `${getInnerCubeFace((spin + 1)).bgColor as string}`,
            opacity: `${getInnerCubeFace((spin + 1)).opacity as number}`,
						transform: `rotateY(-180deg) translateZ(60px)`,
            borderColor: `${front.borderColor as string}`,
            borderWidth: `${getInnerCubeFace((spin + 2)).borderWidthTRBL[0]}px ${getInnerCubeFace((spin + 1)).borderWidthTRBL[1]}px ${getInnerCubeFace((spin + 1)).borderWidthTRBL[2]}px ${getInnerCubeFace((spin + 1)).borderWidthTRBL[3]}px`,
					}}
				/>
				<div
					className="left w-full h-full absolute  [transformStyle:preserve-3d]"
					style={{
            zIndex: `${getInnerCubeFace((spin + 2)).zIndex as number}`,
            backgroundColor: `${getInnerCubeFace((spin + 2)).bgColor as string}`,
            opacity: `${getInnerCubeFace((spin + 2)).opacity as number}`,
						transform: `translateX(-60px) rotateY(-90deg)`,
            borderColor: `${front.borderColor as string}`,
            borderWidth: `${getInnerCubeFace((spin + 3)).borderWidthTRBL[0]}px ${getInnerCubeFace((spin + 2)).borderWidthTRBL[1]}px ${getInnerCubeFace((spin + 2)).borderWidthTRBL[2]}px ${getInnerCubeFace((spin + 2)).borderWidthTRBL[3]}px`,
					}}
				/>
				<div
					className="right w-full h-full absolute  [transformStyle:preserve-3d]"
					style={{
            zIndex: `${getInnerCubeFace((spin + 1)).zIndex as number}`,
            backgroundColor: `${getInnerCubeFace((spin + 1)).bgColor as string}`,
            opacity: `${getInnerCubeFace((spin + 1)).opacity as number}`,
						transform: `translateX(60px) rotateY(90deg)`,
            borderColor: `${front.borderColor as string}`,
            borderWidth: `${getInnerCubeFace((spin + 1)).borderWidthTRBL[0]}px ${getInnerCubeFace((spin + 1)).borderWidthTRBL[1]}px ${getInnerCubeFace((spin + 1)).borderWidthTRBL[2]}px ${getInnerCubeFace((spin + 1)).borderWidthTRBL[3]}px`,
					}}
				/>
				<div
					className="w-full h-full absolute  [transformStyle:preserve-3d]"
					style={{
            zIndex: "50",
						transform: `translateY(-60px) rotateX(90deg)`,
            borderColor: `${front.borderColor as string}`,
            borderWidth: `2px`,
					}}
				/>
				<div
					className="bottom w-full h-full absolute  [transformStyle:preserve-3d]"
					style={{
            zIndex: "50",
						transform: `translateY(60px) rotateX(-90deg)`,
            borderColor: `${front.borderColor as string}`,
            borderWidth: `2px`
					}}
				/>
      
      </figure>
		</div>
	);
}
