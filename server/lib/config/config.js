// Container for all environments
const environments = {};

environments.production = {
  httpAddress: process.env.HTTP_HOST || "0.0.0.0",
  httpPort: process.env.HTTP_PORT || 8090,
  envName: 'production',
  log: {
    level: process.env.LOG_LEVEL || 'FATAL',
  },
  database: {
    folder: './db',
  },
  jwt: {
    secret: process.env.UUID,
  },
};


environments.debugging = {
  httpAddress: "127.0.0.1",
  httpPort: 8080,
  envName: 'debugging',
  log: {
    level: 'ALL',
  },
  database: {
    folder: './db',
  },
  jwt: {
    secret: '74cf7450-3ab5-4fe7-a505-6fffb187ce58',
  },
  configureWebpack: {
    devtool: 'source-map'
  }
};

// Determine which environment was passed as a command-line argument
const currentEnvironment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environment defined above,
// if not default to production
const environmentToExport =
  typeof environments[currentEnvironment] === 'object' ? environments[currentEnvironment] : environments.production;

// export the module
module.exports = environmentToExport;
