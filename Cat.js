import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={styles.catContainer}>
      <Text style={styles.catText}>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => setIsHungry(false)}
        disabled={!isHungry}
        title={isHungry ? "POUR ME SOME MILK, PLEASE!" : "Thank you!"}
        color={isHungry ? "#007BFF" : "gray"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  catContainer: {
    marginVertical: 10,
    padding: 12,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  catText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Cat;
