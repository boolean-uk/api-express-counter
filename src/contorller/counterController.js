let counter = 0

const getAll = (req, res) => {
  res.status(200).json({counter})
}

const increment = (req, res) => {
  counter++
  res.status(201).json({counter})
}

const decrement = (req, res) => {
  counter--
  res.status(201).json({counter})
}

const clear = (req, res) => {
  counter = 0
  res.status(200).json({counter})
}

const double = (req, res) => {
  counter *= 2
  res.status(201).json({counter})
}

module.exports = { getAll, increment ,decrement, clear, double }