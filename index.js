var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.shift(name)
  return kittens
}
function appendKitten(name) {
  var newArray = [...kittens, name]
  return newArray
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.unshift()
  return kittens
}
function prependKitten(name) {
  var newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten() {
  var newArray = kittens.slice(3)
  return newArray
}

function removeFirstKitten() {
  var newArray = kittens.slice(1)
  return newArray
}