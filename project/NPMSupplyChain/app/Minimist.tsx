import { View, Text, ScrollView } from 'react-native';
import ContentArea from '@/components/ContentArea';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SubjectButton from '@/components/SubjectButton';


const InstalationInfo = {
    header: "Install",
    content: [
        "The minimist module is installed using the following command",
        "npm install minimist",
        "After install the package is present in the node_modules folder of the React Native application. The package and target version is also added to package.json for subsiquent downloads."
    ]
}

const MemberInjectionEx = {
    header: "Member Injection Example",
    content: "This page allows you to explore a simple member injection attack. \n\nWhile this is different from a Prototype injection attack it will help you understand the Minimist vulnerability."
}

const BreakAppPageDesc = {
    header: "Minimist Vulnerability Difference",
    content: "In reality the Minimist vulnerability is slightly different. It allows for the prototype of objects to be altered. For Example {}.__proto__ can be set. This means every object that inherits from {} (Alot of objects...) will have altered fields."
}

const MinimistVulExplanation = {
    header: "Minimist Vulnerability Explained", 
    content: [
        "The example above is actually a member injection not a prototype injection.",
        "In the above example you are simply altering the the memebers of a given object. If the object is recreated the altered field will not be present. So what is a prototype polution?", 
        "In JavaScript all objects inherit from other objects, similar to other object oriented programming languages. For a given object the __proto__ field signifies which object it inherited from.", 
        "Now, in a prototype polution vulnerability, we have a similar process happening where a member is being assigned to an input. This difference is this operation happens recursivly. So when an input is given, the function recursivly climbs the prototype tree untill it reaches the object with the given member field and sets it to the input value",
        "At this point all objects which now inherit from the altered object will contain the altered field. This can cause denial of service as functions may expect a now altered field or unintended use of the application, as seen in the example." 
    ]
}

const MinimistVulProof = {
    header: "Minimist Proof of Concept",
    content: "Run a prototype injection attack."
}


export default function MinimistPage() {
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
                    }}>Minimist Prototype Polution</Text>
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


                    <SubjectButton title={MemberInjectionEx.header} description={MemberInjectionEx.content} link="/MinimistPropertyInj" icon={<View/>}/>
                    <SubjectButton noIcon={true} danger={true} title={BreakAppPageDesc.header} description={BreakAppPageDesc.content} link="/ReanimatedBreakPage" icon={<View/>}/>

                    <ContentArea header={MinimistVulExplanation.header} content={MinimistVulExplanation.content} />

                    <SubjectButton noIcon={false} danger={false} title={MinimistVulProof.header} description={MinimistVulProof.content} link="/MinimistProof" icon={<View/>}/>


                    <View style={{height: 200}} />
                </View>
            </ScrollView>
        </View>
    )
}