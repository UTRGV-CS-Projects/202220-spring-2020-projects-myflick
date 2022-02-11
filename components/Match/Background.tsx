import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";
const Background = () => {
  const [hearts, setHearts] = useState<HeartType[]>([]);

  const heartQuantity = useRef(5);

  interface HeartType {
    x: number;
    y: number;
    scale: number;
    rotate: string;
  }

  function randomIntFromInterval(min: number, max: number): number {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const createHearts = () => {
    let hearts: HeartType[] = [];
    let flag = false;
    for (let i = 0; i < heartQuantity.current; i++) {
      const heart: HeartType = {
        x: randomIntFromInterval(5, 80),
        y: randomIntFromInterval(5, 80),
        scale: randomIntFromInterval(1, 2),
        rotate: flag ? "-5deg" : "5deg",
      };
      hearts.push(heart);
      flag = !flag;
    }
    setHearts(hearts);
  };

  useLayoutEffect(() => {
    createHearts();
  }, []);

  return (
    <View style={styles.container}>
      {hearts?.map((heart, index) => {
        return (
          <View
            key={index}
            style={{
              position: "absolute",
              top: `${heart.y}%`,
              left: `${heart.x}%`,
              transform: [{ rotate: heart.rotate }, { scale: heart.scale }],
            }}
          >
            <LottieView
              autoPlay
              loop={true}
              source={require("../../assets/lotties/heart_beating.json")}
              style={styles.heart}
            />
          </View>
        );
      })}
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: "transparent",
  },
  heart: {
    width: 90,
    height: 90,
  },
  heartContainer1: {
    position: "absolute",
    top: 70,
    right: 40,
    transform: [{ rotate: "5deg" }],
  },
});
