import { StyleSheet, View, Alert } from "react-native"
import { getCurrentPositionAsync, useForegroundPermissions,PermissionStatus, } from 'expo-location'

import { Colors } from "../../constant/colors";
import OutlineButton from "../../UI/OutlineButton"

const LocationPicker = () => {

    const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

    const verifyPermissions = async() => {
      if(locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission()
        return permissionResponse.granted
      }

      if(locationPermissionInformation.status === PermissionStatus.DENIED) {
        Alert.alert(
          'Insufficient Permissions',
          'You need to grant location permissions to use this feature'
        )
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
      }

      return true;
    }

    const getLocationHandler = async() => {
      const hasPermission = await verifyPermissions()
      if(!hasPermission) return;
      const location = await getCurrentPositionAsync()
      console.log(location)
    }

    const pickOnMapHandler = () => {}

    return <View>
        <View style={styles.mapPreview}></View>
        <View style={styles.actions}>
            <OutlineButton icon="location" onPress={getLocationHandler} >Locate User</OutlineButton>
            <OutlineButton icon="map" onPress={pickOnMapHandler}>Pick on Map</OutlineButton>
        </View>
    </View>
}

export default LocationPicker

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: Colors.blue,
    overflow: "hidden",
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});