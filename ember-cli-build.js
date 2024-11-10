'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 5,
      importBootstrapCSS: true,
    },
    svgJar: {
      sourceDirs: [
        'node_modules/heroicons/24/outline',
        'node_modules/heroicons/24/solid',
      ],
      optimizer: {
        plugins: [
          { removeTitle: true },
          { removeDesc: true },
          { removeXMLNS: true },
        ],
      },
    },
  });

  return app.toTree();
};
