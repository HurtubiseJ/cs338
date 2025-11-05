import { View, Text } from 'react-native';

export default function ReanimatedBreakPage() {
    const REGEX = /^[-+]?\d*\.?\d+$/;

    const input_string = "1".repeat(200000) + "a";

    REGEX.test(input_string);

    return (
        <View style={{
            flex: 1, 
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "272730"
        }}>
            <Text style={{
                color: "#ffffff",
                fontSize: 20,
            }}>This page will not show.</Text>
        </View>
    )
}