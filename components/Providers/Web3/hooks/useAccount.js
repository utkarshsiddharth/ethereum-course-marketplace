const hookHandler = (web3) => () => {
  return {
    account: web3 ? "Test Account" : "Null",
  }
}

export default hookHandler
