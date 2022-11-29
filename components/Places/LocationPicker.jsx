import { StyleSheet, View } from "react-native"
import { Colors } from "../../constant/colors";
import OutlineButton from "../../UI/OutlineButton"

const LocationPicker = () => {

    const getLocationHandler = () => {}

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