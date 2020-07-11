import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({
  items,
  name,
  numOfColumns,
  PickerItemComponant,
  width,
  placeholder,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        icon="apps"
        items={items}
        numOfColumns={numOfColumns}
        width={width}
        PickerItemComponant={PickerItemComponant}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
