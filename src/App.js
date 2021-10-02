import "./styles.css";
import { View } from "react-native";
import RangeSlider from "./RangeSlider";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2 style={{ marginBottom: 50 }}>Range Slider</h2>
      <div style={{ width: 450, margin: "0 auto" }}>
        <View style={{ paddingHorizontal: 40 }}>
          <RangeSlider from={4} to={3000} />
        </View>
      </div>
    </div>
  );
}
