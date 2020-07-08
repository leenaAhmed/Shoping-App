import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import SubmitButton from "../components/Form/SubmitButton";
export default function LoginScreen() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon="email"
          placeholder="email address"
          autoCorrect={false}
          name="email"
          keyboardType="email-address"
          autoCapitalize="none"
          textContentType="emailAddress"
        />
        <AppFormField
          icon="lock"
          name="password"
          placeholder="password"
          textContentType="password"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
        />
        <SubmitButton title="login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    marginHorizontal: "40%",
    marginTop: "30%",
    marginBottom: 20,
  },
  container: {
    margin: 5,
  },
});
