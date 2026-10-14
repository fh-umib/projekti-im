import { StyleSheet, Text, View } from "react-native";

type Props = {
  grupi: string;
  spitali: string;
  njesite: number;
  statusi: "e paverifikuar" | "e verifikuar";
  afati?: string;
};

export default function KartaKerkeses({
  grupi,
  spitali,
  njesite,
  statusi,
  afati,
}: Props) {
  return (
    <View style={styles.karta}>
      <Text style={styles.grupi}>{grupi}</Text>
      <Text>{spitali} · {njesite} njësi</Text>
      {afati && <Text>Afati: {afati}</Text>}
      <Text style={styles.statusi}>{statusi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  karta: { padding: 16, margin: 8, borderRadius: 12, backgroundColor: "#fde8e8" },
  grupi: { fontSize: 24, fontWeight: "bold" },
  statusi: { marginTop: 8, fontStyle: "italic" },
});