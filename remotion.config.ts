// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: The configuration file does not apply if you use the Node.js API!

import {Config} from '@remotion/cli/config';
import {webpackOverride} from './src/webpack-override';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig(webpackOverride);
