export function challengeProjection (events) {
  const challenges = []

  for (let i in events) {
    const event = events[i]
    let { name } = event.parsedLog || {}

    switch (name) {
      case 'Challenged':
        challenges.push(events[i])
        break
      // no default
    }
  }

  return challenges
}
