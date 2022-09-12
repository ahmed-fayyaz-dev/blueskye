import React from "react";
import { StyleSheet } from "react-native";
import { TextInput, HelperText, useTheme } from "react-native-paper";

const CustomInput = ({
    onChange,
    label,
    value,
    placeholder,
    secure,
    helper,
    editable,
    multiline,
    onBlur,
    keyboardType,
    controlled,
    ...props
}) => {
    const { colors } = useTheme();
    const style = styles(colors);
    const [localstate, setLocalstate] = React.useState(secure);
    // const [state, setState] = React.useState(value);
    function onChangeText(v) {
        // setState(v);
        onChange(v);
    }

    const SecureIcon = () => (
        <TextInput.Icon
            forceTextInputFocus={false}
            name={!localstate ? "eye-outline" : "eye-off-outline"}
            onPress={() => setLocalstate(!localstate)}
        />
    );

    const Input = () => (
        <TextInput
            mode="flat"
            label={label}
            // value={value} // Controlled
            defaultValue={value} // Uncontrolled
            placeholder={placeholder}
            onChangeText={onChangeText}
            onBlur={onBlur}
            secureTextEntry={localstate}
            keyboardType={keyboardType}
            multiline={multiline}
            editable={editable}
            right={secure && SecureIcon()}
            style={style.input}
            {...props}
        />
    );

    const ControlledInput = () => (
        <TextInput
            mode="flat"
            label={label}
            value={value} // Controlled
            // defaultValue={value} // Uncontrolled
            placeholder={placeholder}
            onChangeText={onChangeText}
            onBlur={onBlur}
            secureTextEntry={localstate}
            keyboardType={keyboardType}
            multiline={multiline}
            editable={editable}
            right={secure && SecureIcon()}
            style={style.input}
            {...props}
        />
    );

    return (
        <>
            {controlled ? ControlledInput() : Input()}

            {helper && <HelperText type="error">{helper}</HelperText>}
        </>
    );
};

const styles = (colors) =>
    StyleSheet.create({
        input: {
            backgroundColor: colors.background,
        },
    });

// CustomInput.propTypes = {
//     keyboardType: PropTypes.oneOf([
//         "default",
//         "email-address",
//         "numeric",
//         "phone-pad",
//         "number-pad",
//         "decimal-pad",
//     ]),
// };

export default CustomInput;
