import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SubjectButton from "@/components/SubjectButton";
import ContentArea from "@/components/ContentArea";

const PrototypeInject = {
    header: "Run Prototype Injection",
    content: "THIS APP WILL CRASH RANDOMLY. Press 'Create New User' as soon as possible after clicking this to see the default user you create with admin privleges."
}

const InjectionCrashExplanation = {
    header: "Why the app crashes randomly",
    content: [
        "There is a reason why this vulnerablility also falls under a Denial Of Service attack too.",
        "The button above sets the prototype of all objects to have this 'admin' field to be set as true. React Native in internal process expects a specific structure of objects. Changing this structures causes internal exceptions and an eventual crash."
    ]
}


class User {
    name: string;
    role: string;
    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    // naive check that can be fooled by prototype properties
    isAdmin() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return !!this.admin;
    }
}

export default function MinimistProof() {

    const insets = useSafeAreaInsets();

    const [user, setUser] = useState(new User("alice", "guest"));
    const [ inputName, setInputName] = useState("alice");

    function createUser() {
        const u = new User(inputName, "guest");
        setUser(u);
    }

    function runPrototypePollutionUnsafe() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Object.prototype.admin = true;
        return;
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
                    }}>Interactive Prototype Injection</Text>
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
                    { (user && user?.isAdmin()) && (
                        <Text style={{color: "#E83C07", fontWeight: "bold"}}>Super secret admin info.</Text>
                    )}
                </View>

                <TouchableOpacity 
                        onPress={() => {runPrototypePollutionUnsafe()}}
                        style={{
                            width: "100%",
                            columnGap: 6,
                            borderColor: "#ED3700",
                            backgroundColor: "#F58A69",
                            borderWidth: 2,
                            borderRadius: 16,
                            padding: 12,
                        }}>
                            <View style={{
                                flexDirection: "column",
                                rowGap: 8, 
                                alignContent: "center",
                            }}>
                                <Text style={{color: "#000000"}}>RUN PROTOTYPE INJECTION</Text>
                                <Text style={{color: "#000000"}}>May Crash the App. Press create new user strait after</Text>
                            </View>
                </TouchableOpacity>

                <ContentArea header={InjectionCrashExplanation.header} content={InjectionCrashExplanation.content} />
                

                <View style={{height: 60}} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: "#313187",
        borderWidth: 1,
        borderRadius: 8, 
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0F0", 
    }
})