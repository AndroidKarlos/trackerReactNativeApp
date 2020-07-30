import {PermissionsAndroid} from 'react-native';
import GeoLocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import {saveLocation} from '../store/actions';
import {format, addHours} from 'date-fns';

const headlessTask = async () => {
  const dispatch = useDispatch();
  const currentPosition = await getLocation();
  dispatch(saveLocation(currentPosition));
};

const getLocation = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Tracker',
        message: 'Tracker needs GPS access',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return new Promise((resolve) => {
        GeoLocation.getCurrentPosition(
          async (position) => {
            //getting date and formatting
            const currentDate = new Date();
            const dateFormatted = format(
              addHours(currentDate, 3), // my GTM is -3
              'yyyy-MM-dd HH:mm:ss',
            );

            const currentPosition = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              speed: position.coords.speed,
              accuracy: position.coords.accuracy,
              dateUTC: dateFormatted,
            };
            resolve(currentPosition);
          },
          (error) => {
            console.log('Error to get current position: ', error);
          },
          {enableHighAccuracy: true, timeout: 40000, maximumAge: 1000},
        );
      });
    } else {
      console.log('Permission denied!');
    }
  } catch (err) {
    console.log('GPS Permission err', err);
    console.warn(err);
  }
};

export default headlessTask;
