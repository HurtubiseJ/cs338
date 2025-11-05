import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";


export default function SubjectButton({title, description, icon, link, danger=false} : {
    title: string,
    description: string,
    icon: React.ReactElement;
    link: string,
    danger?: boolean
}) {

    return (
        <TouchableOpacity 
        onPress={() => router.push(link as any)}
        style={{
            width: "100%",
            columnGap: 6,
            borderColor: !danger ? '#313187': "#ED3700",
            backgroundColor: !danger ? "#C0C0F0" : "#F58A69",
            borderWidth: 2,
            borderRadius: 16,
            padding: 12,
        }}>
            <View style={{
                flexDirection: "row",
                rowGap: 8, 
                alignContent: "center",
                justifyContent: "space-between"
            }}>
                <View style={{
                    flexDirection: "row",
                    rowGap: "8"
                }}>
                    {icon}
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#000000",
                    }}>{title}</Text>
                </View>
                <Ionicons name="caret-forward-sharp" size={24} color={!danger ? '#313187': "#ED3700"}/>
            </View>

            <View style={{
                paddingHorizontal: 12,
                paddingTop: 8,
            }}>
                <Text style={{
                    color: "#000000"
                }}>
                    {description}
                </Text>
            </View>

        </TouchableOpacity>
    )
}