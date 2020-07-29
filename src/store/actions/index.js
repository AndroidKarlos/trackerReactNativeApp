export const saveLocation = location => ({
  type: 'SAVE_LOCATION',
  latitude: location.latitude,
  longitude: location.longitude,
  dateUTC: location.dateUTC,
  speed: location.speed,
  accuracy: location.accuracy,  
})