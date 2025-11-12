import { View, Text } from 'react-native';

export default function ReanimatedSafePage() {
    const REGEX = /^[-+]?\d*(?:\.\d*)?$/;

    const input_string = "1".repeat(20000) + "a";

    REGEX.test(input_string);
    
    return (
        <View style={{
            flex: 1, 
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#272730"
        }}>
            <Text style={{
                color: "#ffffff",
                fontSize: 20,
            }}>This page runs Safe Regex on load</Text>
        </View>
    )
}