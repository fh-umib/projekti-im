import { View } from "react-native";
import KartaKerkeses from "../components/KartaKerkeses";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <KartaKerkeses grupi="A-" spitali="Spitali Test 1" njesite={2} statusi="e verifikuar" afati="Sot, 18:00" />
      <KartaKerkeses grupi="0+" spitali="Spitali Test 2" njesite={1} statusi="e paverifikuar" />
      <KartaKerkeses grupi="B+" spitali="Spitali Test 3" njesite={3} statusi="e verifikuar" afati="Nesër" />
    </View>
  );
}