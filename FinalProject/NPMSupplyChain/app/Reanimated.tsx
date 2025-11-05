import { View, Text, ScrollView } from 'react-native';
import ContentArea from '@/components/ContentArea';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ReanimatedRegexTimer from '@/components/ReanimatedRegexTimer';
import SubjectButton from '@/components/SubjectButton';


const InstalationInfo = {
    header: "Install",
    content: [
        "The react native reanimated plugin is installed using the following command",
        "npm install react-native-reanimated",
        "After install the package is present in the node_modules folder of the React Native application. The package and target version is also added to package.json for subsiquent downloads."
    ]
}

const VulenerabilityDescription = {
    header: "How the vulnerability works",
    content: [
        "For an indepth description of the attack see",
        "https://github.com/advisories/GHSA-2j79-8pqc-r7x6",
        "https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS",
        "In using the reanimated package you are able to input colors to your components. This allows for colors to be animated along with layouts. The package used the following regex expression to parse the inputed color string for use.",
        "Reanimated Versions < 2.10.0",
        "    const VULNERABLE_REGEX = /^[-+]?\d*\.?\d+$/",
        "Reanimated Versions >= 2.10.0",
        "    const SAFE_REGEX = /^[-+]?\d*(?:\.\d*)?$/;",
        "In cases where this color string depends on user input, the vulnerability can be exploited to cause CPU Spikes and crash applications."
    ]
}

const LagPageDesc = {
    header: "Vulnerable Page Render",
    content: "Consider this page renders a user profile where the user sets the background color. This page uses the VULNERABLE regex pattern. \n\nAlso note what happens if you press this button 2 or more times before navigation."
}

const SafePageDesc = {
    header: "Safe Page Render",
    content: "Consider this page renders a user profile where the user sets the background color. This page uses the SAFE regex pattern."
}

const BreakAppPageDesc = {
    header: "BREAKS THE APP",
    content: "You will need to restart the app after pressing this. The regex pattern tested on page load uses 200,000 '1's."
}

const BreakAppBehaviorInfo = {
    header: "Behavior after 'Break the App'",
    content: [
        "You may notice after you click 'BREAKS THE APP' you are still able to scroll but none of the interactive buttons work.",
        "This comes down to how React Native runs applications.",
        "There are three main threads of execution inside of a React Native app. The JavaScript thread,  the UI thread, and the Native Thread.",
        "The vulnerable regex runs on the JS thread while the Scroll View component, the component allowing you to scoll up and down on this page, runs on the UI thread.", 
        "All the other functionality I implimented such as the timers and the content sections use the JS thread. This means you are still able to scroll as the UI thread is not being held up by the DOS regex pattern. On the other hand, features on the JS thread are unusable." 
    ]
}

export default function ReanimatedPage() {
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            backgroundColor: "#272730",
            flex: 1,
            flexGrow: 1,
            flexDirection: "column", 
            alignItems: 'flex-start',
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
                    }}>Reanimated Exponential Backtracing</Text>
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
                    <ContentArea header={InstalationInfo.header} content={InstalationInfo.content} />

                    <ContentArea header={VulenerabilityDescription.header} content={VulenerabilityDescription.content} defaultOpen={true}/>

                    <ReanimatedRegexTimer />

                    <SubjectButton title={LagPageDesc.header} description={LagPageDesc.content} link="/ReanimatedLagPage" icon={<View/>}/>
                    <SubjectButton title={SafePageDesc.header} description={SafePageDesc.content} link="/ReanimatedSafePage" icon={<View/>}/>
                    <SubjectButton danger={true} title={BreakAppPageDesc.header} description={BreakAppPageDesc.content} link="/ReanimatedBreakPage" icon={<View/>}/>

                    <ContentArea header={BreakAppBehaviorInfo.header} content={BreakAppBehaviorInfo.content} defaultOpen={true}/>
                    <View style={{height: 200}} />
                </View>
            </ScrollView>
        </View>
    )
}