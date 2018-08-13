# example demo from dva tutorial
- npm install
- to run: npm start
- to build: npm run build (will generate files under /dist)

# structure of /src
- components
    presential component: CountApp
- routers
    container component: HomePage  
    HomePage is responsible for:
    - import CountApp
    - connect model and component(CountApp)
- index.js
    - define model
    - define router (import HomePage)


