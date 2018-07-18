# auto-diagram
Creating a layer of automation for diagram creation

## API Design

The API for this application is documented in the `spec` directory. We are tentatively planning to provide a REST API for creating diagrams. Ansible could send requests to this API when creating a new environment. Alternately, we might choose to treat this as a build step. In that case, we'd keep the data structure defined in `spec` but discard the REST API endpoints.

The data would come from a combination of Ansible inventories (e.g., the environment names) and data provided by the engagement lead (e.g. the company name).

In the future, multiple tools could potentially consume the same data. For example, we might generate documentation as well as diagrams.

We're following the philosophy laid out in [Consumer-Driven Contracts](https://martinfowler.com/articles/consumerDrivenContracts.html) to ensure that our API is meaningful and extensible. In particular:

- Provide just the data that the consumer (the diagram generator) needs, not all the info that Ansible has to offer.
- Expect the consumer to ignore new fields that it doesn't understand. That way, we could update the API without breaking consumers that aren't able to update right away.

The API is versioned using [Semver](https://semver.org/). Backwards-compatible feature updates (e.g., new properties added) are indicated by minor releases. Breaking changes (e.g., an endpoint is renamed or a property is removed) are indicated by major releases.

## Development
### Using the CLI
1. Clone the repository.
2. Navigate to the root folder of the repository.
3. Run `npm install` to install all necessary packages.
4. Review the `./JSONS/` folder to see the different pre-set JSON files or add your own custom file there.
5. Ensure that python3 is installed.
6. Run `$ ./screenshot.sh`.

### Modifying the Info-Graphic
1. Navigate to the root folder.
2. Run `$ npm install` to install the dependencies.
3. Modify the Vue components in the `src/` folder.
4. Run `$ npm run serve` to start the server.
5. Open `http://localhost:8000/` in your favorite browser to see the Info-Graphic.
Note: there are two generated links, one local link that is only accessible from your computer and one network link that is available to anyone on your network.

### Taking a screenshot using Headless Chrome
Note: This requires the headless chrome CLI to be installed. [Getting Started](https://developers.google.com/web/updates/20217/04/headless-chrome).
For this to run you will need an instance of headless chrome running as well as our express server. This can be accomplished with the following command:
1. Run `$ npm run serve` to start the server.
2. Run `$ node headless_chrome/app.js`.
3. Run `$ google-chrome --headless --remote-debugging-port=9222 --hide-scrollbars`
4. Open `http://localhost:3000` to view the screenshot in your browser.

## Front-end dev resources

- https://learnlayout.com/
- https://vuesjs.org/v2/guide/index.html
- https://github.com/axios/axios
- https://www.npmjs.com/package/live-server
