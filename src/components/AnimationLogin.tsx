import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { View, Text, Image, Platform } from "react-native";

export default function AnimationLogin() {
  return (
    <View>
      <Image
        source={{
          uri: "https://lvivity.com/wp-content/uploads/2019/12/uiux-design.png",
        }}
        style={{ height: 200, width: 200 }}
      />
      {Platform.OS=='web' && <></>}
      <AnimatedLottieView
        style={{ width: 200, height: 200 }}
        source={require("../../animation/animation.json")}
        autoPlay
        loop
      />
    </View>
  );
}
