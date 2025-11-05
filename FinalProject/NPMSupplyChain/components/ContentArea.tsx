import React, { useState } from 'react';
import { Text, View, Pressable, Linking, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    interpolate,
} from 'react-native-reanimated';

export default function ContentArea({
    header,
    content,
    defaultOpen=false
}: {
    header: string;
    content: string[];
    defaultOpen?: boolean 
}) {
    const [open, setOpen] = useState(defaultOpen);

    const progress = useSharedValue(defaultOpen ? 1 : 0);

    const [measuredHeight, setMeasuredHeight] = useState<number>(0);

    const toggle = () => {
        setOpen((v) => {
            const next = !v;
            progress.value = withTiming(next ? 1 : 0, {
                duration: 300,
                easing: Easing.out(Easing.cubic),
            });
            return next;
        });
    };

    const contentAnimatedStyle = useAnimatedStyle(() =>{
        const h = measuredHeight * progress.value; 
        return{
            height: h,
            opacity: progress.value,
            transform: [
                {translateY: interpolate(progress.value, [0, 1], [-6, 0])}
            ]
        }
    });

    const iconAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {rotate: `${interpolate(progress.value, [0, 1], [0, 180])}deg`}
            ]
        }
    })

    const openUrl = async (link: string) => {
        const supported = await Linking.canOpenURL(link);
        if (supported) {
            await Linking.openURL(link)
        } else {
            // Link not supported.
        }
    }

    const contentLenght = content.length;

  return (
    <Animated.View
      style={{
        backgroundColor: '#050533',
        padding: 12,
        borderRadius: 16,
        borderColor: '#313187',
        borderWidth: 1,
        width: '100%',
      }}
    >
      <Pressable
        onPress={toggle}
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        
        <Text style={{ fontSize: 18, color: '#fff', fontWeight: "bold" }}>{header}</Text>

        <Animated.View style={iconAnimatedStyle}>
            <Ionicons name="caret-down" size={24} color="#ffffff" />
        </Animated.View>
      </Pressable>

      <Animated.View
        style={[
          {
            overflow: "hidden",
            marginTop: open ? 8 : 0,
            borderRadius: 8,
          },
          contentAnimatedStyle,
        ]}
        pointerEvents={open ? 'auto' : 'none'}
      >
        <View
          style={{
            paddingHorizontal: 8,
          }}
        >
            { content.map((text) => {
                if (text.includes("https://")) {
                    return (
                        <TouchableOpacity onPress={() => openUrl(text)} style={{ paddingTop: 8 }}>

                            <Text style={{ lineHeight: 22, fontSize: 14, color: '#ffffff', fontStyle: "italic" }}>{text}</Text>

                        </TouchableOpacity>
                    )
                }
                return (
                    <View style={{ paddingTop: 8 }}>
                        <Text style={{ lineHeight: 22, fontSize: 14, color: '#dddddd' }}>{text}</Text>
                    </View>
                )
            })}
        </View>
      </Animated.View>

      <View
        style={{ position: 'absolute', opacity: 0, left: 0, right: 0, paddingHorizontal: 20, paddingTop: contentLenght * 1 }}
        pointerEvents="none"
        onLayout={(e) => {
          const h = e.nativeEvent.layout.height;
          if (h && h !== measuredHeight) setMeasuredHeight(h);
        }}
      >
        { content.map((text) => (
            <View style={{ paddingTop: 8 }}>
                <Text style={{ lineHeight: 22, fontSize: 14 }}>{text}</Text>
            </View>
        ))}
      </View>
    </Animated.View>
  );
}
