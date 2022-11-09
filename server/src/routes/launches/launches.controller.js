
const { getAllLaunches, addNewLaunches } = require('../../models/launches.model');


function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res){
    const launch = req.body;

    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.destination){
        return res.status(400)
    }

    launch.launchDate = new Date(launch.launchDate)
    addNewLaunches(launch);
    res.status(201).json(launch)
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
}