// Code your solution in this file!
function callback(el, i, arr){
  console.log(el.name)
}

function logDriverNames(array){
  array.forEach(callback);
}

function logDriversByHometown(array, locale){
  const selected = array.filter(function (d) {return d.hometown === locale})
  return selected.forEach(callback)
}

const priceSorter = function (a, b){
  return a.revenue - b.revenue
}


function driversByRevenue(array){
  newDrivers = array.slice().sort(priceSorter)
  return newDrivers
}

const nameSorter = function(a, b){
  return a.name.localeCompare(b.name)
}

function driversByName(array){
  newDrivers = array.slice().sort(nameSorter)
  return newDrivers
}

const reduceDriverRevenue = function(agg, el, i, arr){
  agg += el.revenue

  return agg
}

function totalRevenue(array){
  return array.reduce(reduceDriverRevenue, 0)
}

function averageRevenue(array){
  return totalRevenue(array)/(array.length)
}
