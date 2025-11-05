import { useState } from 'react';
import { TouchableOpacity, View, Text, ScrollView, ActivityIndicator } from 'react-native';


export default function ReanimatedRegexTimer() {
    const OLD_REGEX = /^[-+]?\d*\.?\d+$/;
    const NEW_REGEX = /^[-+]?\d*(?:\.\d*)?$/;

    const [oldTime, setOldTime] = useState(0);
    const [newTime, setNewTime] = useState(0);
    const [oldLoading, setOldLoading] = useState<boolean>(false);
    const [newLoading, setNewLoading] = useState<boolean>(false);

    const runRegex = (regex: RegExp, input: string, isNew: boolean) => {
        isNew ? setNewLoading(true) : setOldLoading(true)
        const start = performance.now();
        regex.test(input);
        const end = performance.now();
        isNew ? setNewLoading(false) : setOldLoading(false)
        return end - start;
    };

    const testInput = '1'.repeat(20000) + 'a'; 

    return (
        <View style={{ 
            padding: 12, 
            backgroundColor: "#050533", 
            borderWidth: 1,
            borderColor: "#313187",
            borderRadius: 16,
            flexDirection: 'column',
            columnGap: 16, 
        }}>
            <Text style={{
                color: "#ffffff", 
                fontSize: 20, 
                paddingBottom: 8, 
                fontWeight: "bold"
            }}>Interactive Regex Timer</Text>

            <View style={{
                flexDirection: 'column',
                columnGap: 8,
                paddingHorizontal: 12, 
            }}>
                <Text style={{
                    color: "#ffffff", 
                    // fontSize: 16, 
                    paddingBottom: 8, 
                }}>The old and new regex expression are tested on the following string:</Text>
                <Text style={{
                    color: "#ffffff", 
                    // fontSize: 16, 
                    paddingBottom: 8, 
                }}>const test_string = "1".repeat(20000) + "a";</Text>
            </View>

            
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'center',
                marginVertical: 24, 
                paddingHorizontal: 12,
            }}>
                <Text style={{ color: '#ffffff', marginBottom: 8 }}>Old regex time: {oldTime.toFixed(3)} ms</Text>
                <TouchableOpacity
                    onPress={() => {
                        const time = runRegex(OLD_REGEX, testInput, true);
                        setOldTime(time);
                    }}
                    style={{
                        backgroundColor: "#313187",
                        justifyContent: 'center',
                        alignItems: "center", 
                        borderRadius: 12, 
                        padding: 8,
                    }}
                    >
                    {oldLoading && (
                        <ActivityIndicator size={16} color={"#ffffff"}/>
                    )}
                    <Text style={{ color: '#ffffff' }}>Run OLD regex</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'center', 
                paddingHorizontal: 12,
            }}>
                <Text style={{ color: '#ffffff', marginBottom: 8 }}>New regex time: {newTime.toFixed(3)} ms</Text>

                <TouchableOpacity
                    onPress={() => {
                    const time = runRegex(NEW_REGEX, testInput, false);
                    setNewTime(time);
                    }}
                    style={{
                        backgroundColor: "#313187",
                        justifyContent: 'center',
                        alignItems: "center", 
                        borderRadius: 12, 
                        padding: 8,
                    }}
                >
                    {newLoading && (
                        <ActivityIndicator size={16} color={"#ffffff"}/>
                    )}
                    <Text style={{ color: '#ffffff' }}>Run NEW regex</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
