function findCounterNameOrReturnError(req, res, namedCounters) {
  const { name } = req.params;
  const foundCounter = namedCounters.find((c) => c.name === name);
  const index = namedCounters.indexOf(foundCounter);
  if (!foundCounter) {
    console.log(name + " not found");
    return res
      .status(404)
      .send(`<h1>Counter with name ${name} was not found</h1>`);
  }
  return {name, index, foundCounter}
}

module.exports = findCounterNameOrReturnError;
