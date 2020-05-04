import chalk from 'chalk';
import dedent from 'ts-dedent';

import { info } from '../icons';
import link from '../link';

const providers = {
  github: 'GitHub',
  gitlab: 'GitLab',
  bitbucket: 'Bitbucket',
};

export default provider =>
  dedent(chalk`
    ${info} {bold Speed up Continuous Integration}
    Because your project is linked to ${providers[provider]}, Chromatic will report results there.
    This means you can pass the "--exit-once-uploaded" flag to skip waiting for build results.
    Read more here: ${link('https://github.com/chromaui/chromatic-cli/#chromatic-options')}
  `);
