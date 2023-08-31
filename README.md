<h1 align="center">Safer Drives Mexico</h1>

<h3 align="center">Description</h3>

**Safer Drives Mexico** is a mapping or routing application meant to allow users to avoid high risk zones traveling within and through Mexico. The objective is to allow users to avoid high risk social behavior to allow for a more enjoyable and safer trip. 


- Client side (*frontend*) utilizes ***React.js*** & ***react-router-dom*** in combination with ***Material MUI*** create themes to provide cohesive structure. 
- ***Leaflet map*** for visualizing low risk route in the desired geographical region. 
- Scrapes -twitter/facebook/etc/generic - in order to determine high risk zones based on key phrases in (database types) using (insert tool here).
- User's enter their start and end destination, travel method and the application provides a route that includes risk weighted routing options. 

## Technology Stack
- **Frontend/Client:** React.js, MUI, CSS
- **API:** Leaflet
- **Backend/Server:**  DB, Node.js 

## Run Code (Environment)

### Front-End Helpful Hints 
- confirm that config is appropriate:
```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependenies(localhost:3000):
    - Must be `cd`'d into frontend/client for install
    - MUI, `react-router-dom`, etc... (see resources)
```
> npx create-react-app <project name>
> cd <project name>
> npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
> npm install --save react-router-dom
> npm install react-leaflet leaflet
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```

### Docker Helpful Hints 
- generate a dockerfile (see resources)
- build and run docker
```
> cd <project name>
> docker build -t <app name> .
> docker run -p 3000:3000 app
```
- close docker by entering a new terminal
```
> docker ps
```
     - idenfity the Container ID
 ```    
> docker stop <container_id>
> docker rn <container_id>
```



## Resources:
- Database [neo4j](https://neo4j.com/cloud/platform/aura-graph-database/)
    - additional resources [here]
- Map Library Leaflet [original.JS](https://leafletjs.com/examples/quick-start/)
    - github library [here](https://github.com/Leaflet/Leaflet)
    - React Leaflet [here](https://react-leaflet.js.org/docs/start-installation/) `npm install react-leaflet`
    - MapTiler [here](https://www.maptiler.com/) (optional)
- MapQuest Developer [here](https://developer.mapquest.com/)
- Docker install info [here](https://www.docker.com/):
    - docker image base [here](https://hub.docker.com/_/node/tags?page=1&name=18)

#### **style:** 
- **[Material UI CORE](https://mui.com/)** React UI LIBRARY *great for standardizing projects*
    - MUI Core installation [here](https://www.npmjs.com/package/@mui/material) & [here](https://mui.com/material-ui/getting-started/installation/)
    - MUI template pages [here](https://mui.com/material-ui/getting-started/templates/)
    - MUI Theme [here](https://mui.com/material-ui/customization/theming/)
    - React Box [here](https://mui.com/material-ui/react-box/) & Grid [here](https://mui.com/material-ui/react-grid/)
    - Material Icon Info & Import links [here](https://mui.com/material-ui/material-icons/)
    ```
    npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
    ```
    - MUI Palette [here](https://mui.com/material-ui/customization/palette/)
    - MUI Alert [here](https://mui.com/material-ui/react-alert/)
    - MUI with CSS Modules style library [here](https://mui.com/material-ui/guides/interoperability/)
    - Additional fun in grid-template-columns [here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)

#### **helpful hint:** 
- [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) to allow styles to be treated like objects.
- Leaflet React styling must be done with traditional CSS sheets
    - leaflet map has its own classes assigned that cannot be seen in React
    - Additional styling source [here](https://medium.com/yavar/react-leaflet-map-3b2d53f97368)

