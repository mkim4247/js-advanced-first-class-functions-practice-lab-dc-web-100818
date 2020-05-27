// Code your solution in this file!
function logDriverNames(driver) {
  driver.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(driver, location) {
  driver.forEach(function(driverArray) {
    if (location === driverArray.hometown) {
      console.log(driverArray.name);
    }
  });
}

function driversByRevenue(driver) {
  const newDriverArr = [...driver];
  newDriverArr.sort(function(a, b) {
    return a.revenue - b.revenue; 
  });
  return newDriverArr;
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

function totalRevenue(driver) {
  const totalRev = driver.reduce(function(accRev, valOfRev) {
    return accRev + valOfRev.revenue;
  }, 0);
  return totalRev;
}

function averageRevenue(driver) {
  return totalRevenue(driver) / driver.length;
}