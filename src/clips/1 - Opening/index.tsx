
import { Title } from './title';
import { Topics } from './topics';
import { slide } from '@remotion/transitions/slide';
import { springTiming } from '@remotion/transitions';
import {TransitionSeries} from '@remotion/transitions';

const OpeningSeries = () => (
	<TransitionSeries>
		<TransitionSeries.Sequence durationInFrames={250}>
      <Title />
    </TransitionSeries.Sequence>

    <TransitionSeries.Transition presentation={slide()} timing={springTiming({config: {damping: 50}})} />

    <TransitionSeries.Sequence durationInFrames={250}>
      <Topics />
    </TransitionSeries.Sequence>
  
	</TransitionSeries>
);

export { Title, Topics, OpeningSeries };
