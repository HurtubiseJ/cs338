import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ContentArea from "@/components/ContentArea";

const Behavior = {
    header: "Try a Member injection attack",
    content: [
        "The following code runs when you click either create new DEFAULT or ADMIN user. Name is a global variable which is set to the current input.",
        `function createUser() \{
            if (!inputName) return;
            let inputJson = '{"name": "\${inputName}", "role": "Guest"}'';
            let newUser = JSON.parse(inputJson);
            setUser(newUser);
        }

        function createAdminUser() {
            if (!inputName) return;
            let inputJson = '{"name": "\${inputName}", "isAdmin": "true", "role": "Admin"}';
            let newUser = JSON.parse(inputJson);
            setUser(newUser);
        }`, 
        "Using this knowledge try and show the admin info after creating a default user."
    ]
}

const Solution = {
    header: "Solution... take a guess first...",
    content: [
        "The following input allows a default user to be created with admin priviliges.",
        'SomeUser", "isAdmin": "true',
        "While this is a trivial case, you can see why a package containing this type of vulnerability is bad."
    ]
}

function normalizeQuotes(s: string) {
    if (!s) return s;
    s = s.replace(/[\u201C\u201D\u201E\u201F\u00AB\u00BB\uFF02]/g, '"');
    s = s.replace(/[\u2018\u2019\u201A\u201B\u2032\u2035\uFF07]/g, "'");
    s = s.replace(/[\u200B-\u200F\uFEFF]/g, '');
    return s;
  }

export default function MinimistPropertyInjPage() {

    const insets = useSafeAreaInsets();

    const [user, setUser] = useState({});
    const [ inputName, setInputName] = useState("");

    function createUser() {
        try {
            if (!inputName) return;
            const n = normalizeQuotes(inputName);
            let inputJson = `{"name": "${n}", "role": "Guest"}`;
            let newUser = JSON.parse(inputJson);
            setUser(newUser);
        } catch {
            console.log("Invalid input: Cannot parse")
        }
    }

    function createAdminUser() {
        try {
            if (!inputName) return;
            const n = normalizeQuotes(inputName);
            let inputJson = `{"name": "${n}", "isAdmin": "true", "role": "Admin"}`;
            let newUser = JSON.parse(inputJson);
            setUser(newUser);
        } catch {   
            console.log("Invalid input: Cannot parse")
        }
    }

    return (
        <View style={{
            flex: 1,
            width: "100%",
            backgroundColor: "#272730",
            paddingTop: insets.top, 
            paddingHorizontal: 12, 
        }}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: "center",
                    marginBottom: 24,
                    paddingTop: 12,
                    paddingHorizontal: 6,
                }}>
                    <Text numberOfLines={2} adjustsFontSizeToFit style={{
                        textAlign:"center",
                        color: '#ffffff', 
                        fontSize: 24,
                        fontWeight: "800"
                    }}>Interactive Member Injection </Text>
                </View>

                <View style={{
                    width: '100%',
                    flexDirection: "column",
                    flex: 1,
                    columnGap: 12,
                    padding: 0,
                    paddingTop: 0,
                    rowGap: 20,
                }}>   
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
                    }}>Create User</Text>
                    <View style={{
                        width: "100%",
                        padding: 12,
                        flexDirection: "column", 
                        rowGap: 12, 
                    }}>
                        <Text style={{color: "#ffffff"}}>
                            Input username for new user
                        </Text>

                        <TextInput value={inputName} 
                            onChangeText={(text) => {
                                setInputName(text ?? "");
                            }} 
                            autoCorrect={false}
                            style={{
                                color: "#000000",
                                backgroundColor: "#ffffff"
                            }}
                        />

                        <TouchableOpacity style={{
                            backgroundColor: "#313187",
                            borderWidth: 1,
                            borderRadius: 8, 
                            justifyContent: "center",
                            alignItems: "center",
                            borderColor: "#C0C0F0", 
                        }} onPress={() => createUser()}>
                            <Text style={{color: "#ffffff", padding: 4, }}>New DEFTAULT User</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            backgroundColor: "#313187",
                            borderWidth: 1,
                            borderRadius: 8, 
                            justifyContent: "center",
                            alignItems: "center",
                            borderColor: "#C0C0F0", 
                        }} onPress={() => createAdminUser()}>
                            <Text style={{color: "#ffffff", padding: 4, }}>New ADMIN User</Text>
                        </TouchableOpacity>
                    </View>
                </View>

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
                    }}>Current User</Text>

                    {/* @ts-ignore */}
                    <Text style={{color: "#ffffff", marginBottom: 8}}>User Name: {user?.name ?? "No user"}</Text>
                    {/* @ts-ignore */}
                    <Text style={{color: "#ffffff", marginBottom: 8}}>User Role: {user?.role ?? "No role"}</Text>
                    
                    {/* @ts-ignore */}
                    {user?.isAdmin && (
                        <Text style={{color: "#E83C07", fontWeight: "bold"}}>Super secret admin info.</Text>
                    )}
                </View>

                    <ContentArea header={Behavior.header} content={Behavior.content}/>
                    <ContentArea header={Solution.header} content={Solution.content}/>



                <View style={{height: 60}} />
                </View>
            </ScrollView>
        </View>
    )
}