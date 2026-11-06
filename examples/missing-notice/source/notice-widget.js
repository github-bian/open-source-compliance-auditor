// Copyright (c) Fictional Notice Widget contributors
export function formatNotice(user, city, weather) {
  const greeting = user.trim() || 'anonymous explorer'
  const locality = city.trim() || 'an unnamed station'
  const forecast = weather.trim() || 'weather unavailable'
  return `Dispatch to ${greeting}: ${forecast} over ${locality}. Confirm receipt before dawn.`
}
