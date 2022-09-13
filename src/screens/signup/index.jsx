import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
} from "react-native";
import { useTheme, Divider } from "react-native-paper";
import Animated from "react-native-reanimated";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { icons } from "assets/images";
import { IonIcons, setStorageItem } from "src/helpers";
// import { submitLoginAccount } from "./actions/actions";
import { Form } from "./components/form";
import { CustomCaption, CustomSubheading } from "src/components/customText";
import { CustomRoundButton } from "src/components/buttons";
import { GapV } from "src/components/gap";
import { entering, exiting } from "src/helpers/animation";
import { callApi } from "src/helpers/apiCall";
import { ONBOARD, ID, PASSWORD } from "src/helpers/constants";
import globalStyles, {
  bRl,
  bRm,
  bRs,
  bRss,
  iconSizeL,
  mgM,
  mgMs,
  mgS,
  onBackgroundDark,
  pdHm,
  pdHs,
  pdVms,
} from "src/styles/index";

function Signup() {
  const { colors } = useTheme();
  const style = styles(colors);
  const gStyle = globalStyles();

  const TopView = () => (
    <View>
      <GapV large />

      <Image
        resizeMode="contain"
        source={icons.app.logoLargeW}
        style={style.image}
      />
      <GapV />
    </View>
  );

  const SingupCard = () => (
    <Animated.View entering={entering} exiting={exiting} style={[style.card]}>
      <Form />
    </Animated.View>
  );

  return (
    <View style={[style.container]}>
      <ScrollView contentContainerStyle={[style.content]}>
        {TopView()}
        {SingupCard()}
        <GapV />
      </ScrollView>
    </View>
  );
}

export default Signup;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    card: {
      borderRadius: bRss,
      paddingTop: mgMs,
      paddingHorizontal: pdHm,
      borderWidth: StyleSheet.hairlineWidth,
    },

    content: {
      flexGrow: 1,
      paddingHorizontal: pdHs,
      paddingTop: mgM,
    },

    image: {
      alignSelf: "center",
      height: 140,
      width: 144,
    },

    fdr: { flexDirection: "row" },

    divider: {
      alignSelf: "center",
      backgroundColor: onBackgroundDark,
      height: 1,
      width: "80%",
    },

    subText: {
      color: onBackgroundDark,
    },

    title: {
      fontWeight: "bold",
    },

    icon: { alignSelf: "center" },

    avatarStyle: {},

    avatarContainer: {
      borderRadius: bRl,
      backgroundColor: "blue",
      alignSelf: "center",
      padding: mgS,
      position: "absolute",
      top: -30,
    },
  });
