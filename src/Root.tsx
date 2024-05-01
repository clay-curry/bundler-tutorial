
import {Folder, Composition as RemotionComposition} from 'remotion';
import { Title, Topics, OpeningSeries } from './clips/1 - Opening';

export const Composition = () => {
	return (
		<>
			<Folder name="Scenes">
				<RemotionComposition
					id="Title"
					component={Title}
					durationInFrames={250}
					fps={60}
					width={1280}
					height={720}
				/>

				<RemotionComposition
					component={Topics}
					id="Topics"
					durationInFrames={250}
					fps={60}
					width={1280}
					height={720}
				/>

			</Folder>
			<Folder name="Transitions">
				<RemotionComposition
					id="OpeningSeries"
					component={OpeningSeries}
					durationInFrames={450}
					fps={60}
					width={1280}
					height={720}
				/>
			</Folder>
		</>
	);
};
