// This runner is auto-generated by Brittle

runTests()

async function runTests () {
  const test = (await import('brittle')).default

  test.pause()

  await import('./announces.js')
  await import('./bootstrapper.js')
  await import('./connections.js')
  await import('./keychain.js')
  await import('./messages.js')
  await import('./nat.js')
  await import('./noncustodial.js')
  await import('./storing.js')

  test.resume()
}
