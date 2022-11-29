import { Pressable, StyleSheet, Text } from "react-native"
import {Ionicons} from '@expo/vector-icons'
import { Colors } from "../constant/colors";

const OutlineButton = ({onPress, icon, children}) => {
    
    return <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed ]} onPress={onPress}>
        <Ionicons style={styles.icon} name={icon} size={18} color={Colors.blue} />
        <Text style={styles.text}>
            {children}
        </Text>
    </Pressable>
}

export default OutlineButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.blue,
        borderRadius: 4,
        flexDirection: 'row'
    },
    pressed: {
        opacity: 0.7
    },
    icon: {
        marginRight: 6,
    },
    text: {
        color: Colors.blue,
    }
})