const CDP = require('chrome-remote-interface');
const file = require('fs');

const url = 'http://localhost:8080/';
const format = 'png';
const viewportWidth = 800;


// Start the Chrome Debugging Protocol
function takeScreenShot(){
    CDP(async function(client) {
      // Extract used DevTools domains.
      const {DOM, Emulation, Network, Page} = client;

      // Enable events on domains we are interested in.
      await Page.enable();
      await DOM.enable();
      await Network.enable();

      await Page.navigate({url});

      Page.loadEventFired(async () => {
        // measure the height of the rendered page and use Emulation.setVisibleSize
        const {root: {nodeId: documentNodeId}} = await DOM.getDocument();
        const {nodeId: bodyNodeId} = await DOM.querySelector({
          selector: 'body',
          nodeId: documentNodeId,
        });
        const {model: {height}} = await DOM.getBoxModel({nodeId: bodyNodeId});

        console.log("Set visible size to the height of the dom", height);

        const deviceMetrics = {
          width: viewportWidth,
          height: height,
          deviceScaleFactor: 1,
          mobile: false,
          fitWindow: false,
        };
        await Emulation.setDeviceMetricsOverride(deviceMetrics);
        await Emulation.setVisibleSize({width: viewportWidth, height: height});

        // get the base64 screenshot.
        const screenshot = await Page.captureScreenshot({format});

        // Save the base64 screenshot to binary image file
        const buffer = new Buffer(screenshot.data, 'base64');
        file.writeFile('./headless_chrome/output.png', buffer, 'base64', function(err) {
          if (err) {
            console.error(err);
          } else {
            console.log('Screenshot saved');
          }
          client.close();
        });
      });
    }).on('error', err => {
      console.error('Cannot connect to browser:', err);
    });
};

takeScreenShot();
