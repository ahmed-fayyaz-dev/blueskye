import {
    DefaultTheme as defThemeNav,
    DarkTheme as darkThemeNav,
} from "@react-navigation/native";
import { DarkTheme, DefaultTheme } from "react-native-paper";

const bR = 10;

const lightColorSet = {
    primary: "#183E71",
    primaryVariant: "#0BA77B",
    secondary: "#F47621",
    muted: "#808080",
    error: "#CF6679",
    background: "white",
    surface: "white",
    onPrimary: "white",
    onSecondary: "white",
    onBackground: "#000000",
    onSurface: "#000000",
    onError: "#000000",
    shadow: "#000",
};

const darkColorSet = {
    primary: "#183E71",
    primaryVariant: "#0BA77B",
    secondary: "#F47621",
    muted: "#808080",
    error: "#CF6679",
    background: "#121212",
    surface: "#272727",
    onPrimary: "white",
    onSecondary: "white",
    onBackground: "#FFFFFF",
    onSurface: "#FFFFFF",
    onError: "#FFFFFF",
    shadow: "#000",
    // shadow: "#FFFFFF",
};

const colorSet = {
    ...lightColorSet,
    light: lightColorSet,
    dark: darkColorSet,
    "no-preference": lightColorSet,
    null: lightColorSet,
};

export const colorDictionary = {
    colorSet,
};

export const paperLightTheme = {
    ...DefaultTheme,
    dark: false,
    roundness: bR,
    mode: "exact",
    colors: {
        ...DarkTheme.colors,
        primary: lightColorSet.primary,
        accent: lightColorSet.primaryVariant,
        background: lightColorSet.background,
        surface: lightColorSet.surface,
        error: lightColorSet.error,
        text: lightColorSet.onBackground,
        onSurface: lightColorSet.onSurface,
        disabled: lightColorSet.muted,
        placeholder: lightColorSet.muted,
        backdrop: lightColorSet.shadow,
        notification: lightColorSet.primary,
        secondary: lightColorSet.secondary,
    },
    // fonts: configureFonts(),
    animation: {
        scale: 2.0,
    },
};

export const paperDarkTheme = {
    ...DarkTheme,
    dark: true,
    roundness: bR,
    mode: "exact",
    colors: {
        ...DarkTheme.colors,
        primary: darkColorSet.primary,
        accent: darkColorSet.primaryVariant,
        background: darkColorSet.background,
        surface: darkColorSet.surface,
        error: darkColorSet.error,
        text: darkColorSet.onBackground,
        onSurface: darkColorSet.onSurface,
        disabled: darkColorSet.muted,
        placeholder: darkColorSet.muted,
        backdrop: darkColorSet.shadow,
        notification: darkColorSet.primary,
        secondary: darkColorSet.secondary,
    },
    // fonts: configureFonts(),
    animation: {
        scale: 2.0,
    },
};

export const navLightTheme = {
    ...defThemeNav,
    dark: false,
    colors: {
        ...defThemeNav.colors,
        primary: lightColorSet.secondary,
        background: lightColorSet.background,
        card: lightColorSet.surface,
        text: lightColorSet.onBackground,
        border: lightColorSet.muted,
        notification: lightColorSet.secondary,
    },
};

export const navDarkTheme = {
    ...darkThemeNav,
    dark: true,
    mode: "exact",
    colors: {
        primary: darkColorSet.secondary,
        background: darkColorSet.background,
        card: darkColorSet.surface,
        text: darkColorSet.onBackground,
        border: darkColorSet.muted,
        notification: darkColorSet.secondary,
    },
};

export const CombinedLightTheme = {
    ...navLightTheme,
    ...paperLightTheme,
    colors: {
        ...navLightTheme.colors,
        ...paperLightTheme.colors,
    },
};
export const CombinedDarkTheme = {
    ...navDarkTheme,
    ...paperDarkTheme,
    colors: {
        ...navDarkTheme.colors,
        ...paperDarkTheme.colors,
    },
};
