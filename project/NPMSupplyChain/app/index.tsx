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
    description: "minimist Verions < 1.2.6 had a faulty set key functionality allowing for prototype polution."
}

const NPMSupplyChainAttacks = {
    header: "Supply Chain Attacks",
    content: [
        "Supply chain attacks are a group of vunlerabilities targeting downloadable packages within the NPM Package ecosystem.", 
        "In many Node Projects, including this React Native app, developers will use 3rd party libraries to speed up development. Developers download packages using 'npm' which means 'Node Package Manager'. For example to download the crypto library a developer might run, 'npm install crypto'. ",
        "This is the same general idea to other package ecosystems such as pip for python.",
        "These packages are added in the node_modules folder of the application and therefore usable within the application itself.", 
        "Now, consider the case where crypto has a vulnerability. This means by downloading this package I now inherit the crypto package vulnerability in my applcation.",
        "This is why it is called a Supply Chain Attack. By infecting one NPM package you are able to infect many other applications across many domains if the package is downloaded withint the project.",
        "This application explores two historical supply chain vulnerabilities.",
        "Minimist, and react-native-reanimated"
    ]
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

        <ContentArea header={NPMSupplyChainAttacks.header} content={NPMSupplyChainAttacks.content} />

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