import React, { useCallback, useState } from "react";
import RangeSliderRN from "rn-range-slider";
import { View, Text } from "react-native";

import Label from "./Label";
import Notch from "./Notch";
import Rail from "./Rail";
import RailSelected from "./RailSelected";
import Thumb from "./Thumb";

const RangeSlider = ({ from, to }) => {
  // const RangeSlider = () => {
  const [low, setLow] = useState(from);
  const [high, setHigh] = useState(to);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);

  const handleValueChange = useCallback(
    (newLow, newHigh) => {
      setLow(newLow);
      setHigh(newHigh);
    },
    [setLow, setHigh]
  );

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10
        }}
      >
        <View>
          <Text
            style={[
              { fontStyle: "italic" },
              { textAlign: "left", fontSize: 14, color: "#D2D2D2" }
            ]}
          >
            Min
          </Text>
          <Text
            style={[{ fontWeight: "bold" }, { fontSize: 18, color: "#000000" }]}
          >
            {low}€
          </Text>
        </View>
        <View>
          <Text
            style={[
              { fontStyle: "italic" },
              { textAlign: "right", fontSize: 14, color: "#D2D2D2" }
            ]}
          >
            Max
          </Text>
          <Text
            style={[{ fontWeight: "bold" }, { fontSize: 18, color: "#000000" }]}
          >
            {high}€
          </Text>
        </View>
      </View>
      <RangeSliderRN
        // style={styles.slider}
        min={from}
        max={to}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        // renderLabel={renderLabel}
        // renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
    </>
  );
};

export default RangeSlider;
