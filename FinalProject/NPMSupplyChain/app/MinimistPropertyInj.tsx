import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ContentArea from "@/components/ContentArea";

const Behavior = {
    header: "Try a Prototype polution attack",
    content: [
        "The following code runs when you click either create new DEFAULT or ADMIN user. Name is a global variable which is set to the current input.",
        `function createUser() \{
            if (!inputName) return;
            let inputJson = '{"name": "\${inputName}"}';
            let newUser = JSON.parse(inputJson);
            setUser(newUser);
        }

        function createAdminUser() {
            if (!inputName) return;
            let inputJson = '{"name": "\${inputName}", "isAdmin": "true"}';
            let newUser = JSON.parse(inputJson);
            setUser(newUser);
        }`, 
        "Using this knowledge try and show the admin info after creating a default user."
    ]
}

const Solution = {
    header: "Solution... take a guess first...",
    content: [
        "The following input allows a default user to be created with admin privliges.",
        'MyUsername", "isAdmin": "true"',
        "While this is a trivial case, you can see why a package containing this type of vulnerability is bad."
    ]
}

export default function MinimistPropertyInjPage() {

    const insets = useSafeAreaInsets();

    const [user, setUser] = useState({});
    const [ inputName, setInputName] = useState("");

    const defaultUser = {
        name: "Alice"
    }

    const adminUser = {
        name: "Bob",
        isAdmin: true
    }

    function changeUser(user: string) {
        if (user === "Bob") {
            setUser(adminUser);
        } else {
            setUser(defaultUser);
        }
    }

    function createUser() {
        if (!inputName) return;
        let inputJson = `{"name": "${inputName}"}`;
        let newUser = JSON.parse(inputJson);
        setUser(newUser);
    }

    function createAdminUser() {
        if (!inputName) return;
        let inputJson = `{"name": "${inputName}", "isAdmin": "true"}`;
        let newUser = JSON.parse(inputJson);
        setUser(newUser);
    }

    function useInjection() {
        let injection = `MyUsername", "isAdmin": "true`
        let inputJson = `{"name": "${injection}"}`;
        let newUser = JSON.parse(inputJson);
        setUser(newUser);
    }

    function merge(target: any, source: any) {
        for (let key in source) {
            if (key === "__proto__" || key === "constructor") {
                continue;
            }
            if (Object.prototype.hasOwnProperty.call(target, key) && typeof target[key] === 'object' && typeof source[key] === 'object') {
                target[key] = merge(target[key] || {}, source[key]);
            } else {
                target[key] = source[key];
            }
        }
        return target;
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
                    }}>Interactive Prototype Injection </Text>
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
                        // flex: 1, 
                        flexDirection: "column", 
                        rowGap: 12, 
                    }}>
                        <Text style={{color: "#ffffff"}}>
                            Input username for new user
                        </Text>

                        <TextInput value={inputName} 
                            onChangeText={(text) => {
                                if (!text) return;
                                setInputName(text);
                            }} 
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

                    <Text style={{color: "#ffffff", marginBottom: 8}}>{user?.name ?? "No user"}</Text>

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