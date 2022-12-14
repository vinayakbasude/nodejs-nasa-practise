const app = require('./app');

const http = require('http');

const PORT = process.env.PORT || 8000;

const { loadPlanetsData } = require('./models/planets.model')

const server = http.createServer(app);

async function startServer(){
    await loadPlanetsData();
    server.listen(PORT, ()=>{
        console.log(`Listening to port ${PORT}...`);
    });
};

startServer();

