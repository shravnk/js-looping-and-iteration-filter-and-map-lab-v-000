// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  }
)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  }).map(function (driver) {return driver.name})
}

function exactMatch(drivers, obj) {
  key = Object.keys(obj)[0]
  value = Object.keys(obj)[0]
  return drivers.filter(function(driver) {
    return driver === Object.assign({}, driver, obj)
  })
}
