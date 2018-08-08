# auto-diagram
Creating a layer of automation for diagram creation

## Development
#### Creating New Templates & Modifying the Diagram
1. Fork and clone the repository.
2. Navigate to the `/auto-diagram/generator/` folder.
    - This folder contains the headless chrome screenshot tools and the VueJS app used to create the diagram.
3. Review `/src/App.vue`
    - This file contains the layout/structure of the diagram.
4. Review the `/src/components/` folder.
    - This folder contains the components referenced in the `App.vue`.
5. Modify these two files and the CSS within them to create different layouts.
6. Modify `/public/current-api.json` to modify the text/logos included in the image.
    - Note: you must use font-awesome to find the exact class name the logo you want to use.
6. Run `npm run serve` to preview the image. Follow the link the App is running at (should be [http://localhost:8080][development_link]  )
[development_link]: http://localhost:8080


#### Generating a PNG
1. Fork and clone the repository.
3. Run the command `ansible-playbook -i inventory/auto-diagram/ playbooks/auto-diagram/playbook.yml'

    - Note, this command will take about 4-6 minutes to run.
4. The png is hosted at [http://localhost:1234/getIMG][screenshot_link]
[screenshot_link]: http://localhost:1234/getIMG

## Front-end dev resources for developing the diagram

- https://learnlayout.com/
- https://vuesjs.org/v2/guide/index.html
- https://github.com/axios/axios
- https://www.npmjs.com/package/live-server
- https://cssgrid.io/
- https://scrimba.com/g/gR8PTE
