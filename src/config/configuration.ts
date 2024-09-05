import { readFileSync } from 'fs';
import { join } from 'path';
import * as yaml from 'js-yaml';

const YAML_CONFIG_FILENAME = () => {
  const env = process.env.NODE_ENV;

  if (env === 'prod') {
    return 'prod.yaml';
  }
  if (env === 'stag') {
    return 'stag.yaml';
  }
  if (env === 'test') {
    return 'test.yaml';
  }
  if (env === 'dev') {
    return 'dev.yaml';
  }

  return 'local.yaml';
};

export default () => {
  return yaml.load(readFileSync(join(__dirname, YAML_CONFIG_FILENAME()), 'utf-8')) as Record<string, any>;
};
