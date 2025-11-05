import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SubjectButton from "@/components/SubjectButton";
import ContentArea from "@/components/ContentArea";

const ReanimatedPage = {
    title: "Reanimated Parser Vulnerability",
    description: "Versions < 2.10.0 of the react-native-reanimated library used to create animations contained a exponential backtracking color parsing vulnerability causing CPU spikes and UI hangs."
}

const MinimiPage = {
    title: "Minimist Prototype Polution",
    description: "minimist Verions <Y had a faulty set key functionality allowing for prototype polution."
}

export default function Index() {
    const insets = useSafeAreaInsets();
  return (
    <View style={{
        backgroundColor: "#272730",
        flex: 1,
        flexDirection: "column", 
        alignItems: 'flex-start',
        paddingTop: insets.top, 
        paddingHorizontal: 12,
    }}>
        <View style={{
            justifyContent: 'center',
            alignItems: "center",
            marginBottom: 24,
            paddingTop: 12,
            paddingHorizontal: 6,
        }}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={{
                color: '#ffffff', 
                fontSize: 24,
                fontWeight: "800"
            }}>NPM Supply Chain Vulnerabilites</Text>
        </View>

        <ContentArea header={"Supply Chain Attacks"} content={['djfhfegoqubrgouerguerguerbgiebge']} />

        {/* App sections */}
        <View style={{
            width: '100%',
            flexDirection: "column",
            flex: 1,
            columnGap: 12,
            padding: 0,
            paddingTop: 24,
            rowGap: 20,
        }}>     

            <SubjectButton 
                title={ReanimatedPage.title}
                description={ReanimatedPage.description}
                icon={<View/>}
                link={"/Reanimated"}
            />
            <SubjectButton 
                title={MinimiPage.title}
                description={MinimiPage.description}
                icon={<View/>}
                link={"/Minimist"}
            />
        </View>
    </View>
  );
}