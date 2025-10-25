import type { GatsbyNode } from 'gatsby';
import type { WebpackPluginInstance } from 'webpack';

interface MiniCssExtractPluginOptions {
  ignoreOrder?: boolean;
  [key: string]: unknown;
}

interface MiniCssExtractPlugin extends WebpackPluginInstance {
  options: MiniCssExtractPluginOptions;
}

function isMiniCssExtractPlugin(
  plugin: WebpackPluginInstance,
): plugin is MiniCssExtractPlugin {
  return plugin?.constructor.name === 'MiniCssExtractPlugin';
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
  stage,
  getConfig,
}) => {
  if (stage === 'build-javascript' || stage === 'develop') {
    const config = getConfig();

    const miniCssExtractPlugin = config.plugins?.find(isMiniCssExtractPlugin);

    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }

    actions.replaceWebpackConfig(config);
  }
};
