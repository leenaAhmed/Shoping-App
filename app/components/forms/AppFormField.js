import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import AppInput from "./AppInput";
import ErrorMessage from "./ErrorMessage";
export default function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
