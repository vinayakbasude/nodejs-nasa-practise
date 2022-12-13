const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-422 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches(){
    return Array.from(launches.values())
};

function addNewLaunches(launch){
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch,{
        success: true,
        upcoming: true,
        customers: ['Zero to Mastery', 'NASA'],
        flightNumber: latestFlightNumber
    }))
}

function existsLaunchWithId(launchId){
    return launches.has(launchId)
}

function abortLaunchById(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted
}

module.exports = {
    getAllLaunches,
    addNewLaunches,
    existsLaunchWithId,
    abortLaunchById
}