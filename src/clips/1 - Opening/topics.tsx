import './style.css';
import { AbsoluteFill } from 'remotion';
import { Card } from '../../animations/Card';

export const Topics = () => {
  return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			{/* TOC */}
			<header className='absolute top-8 text-5xl font-bold'>
	      Topics
			</header>
			<section className='absolute bottom-16 mx-8 w-[90%] grid grid-cols-3 grid-flow-row gap-8 place-items-center'>
				<Card delay={0} duration={100}>
					<div className='w-80 h-48'>Problem Statement</div>
				</Card>
				<Card delay={5} duration={100}>
					<div className='w-80 h-48'>Compilation, Hooks, Callbacks</div>
				</Card>
				<Card delay={10} duration={100}>
					<div className='w-80 h-48'>Plugins, Loaders, Resolvers</div>
				</Card>
				<Card delay={15} duration={100}>
					<div className='w-80 h-48'>Configuration</div>
				</Card>
				<Card delay={20} duration={100}>
					<div className='w-80 h-48'>Performance</div>
				</Card>
				<Card delay={25} duration={100}>
					<div className='w-80 h-48'>Debugging</div>
				</Card>
			</section>

		</AbsoluteFill>
	);
};

