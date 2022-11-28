import { useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native"
import { Colors } from "../../constant/colors";
import ImagePicker from "./ImagePicker";

const PlaceForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')

    const changeTitleHandler = (enteredText) => {
        setEnteredTitle(enteredText)
    }

    return (
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            onChange={changeTitleHandler}
            value={enteredTitle}
          />
        </View>
        <ImagePicker />
      </ScrollView>
    );
}

export default PlaceForm;

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        fontSize: 18,
        color: Colors.blue
    },
    input: {
        marginVertical:8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.black,
        // borderBottomWidth: 2,
        backgroundColor: 'white',
        borderRadius: 4,
        color: Colors.blue
    }
})
