import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

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
  const [statusiTani, setStatusiTani] = useState(statusi);

  const ndrysho = () => {
    setStatusiTani(
      statusiTani === "e verifikuar" ? "e paverifikuar" : "e verifikuar"
    );
  };

  return (
    <Pressable
      onPress={ndrysho}
      style={[styles.karta, statusiTani === "e verifikuar" && styles.verifikuar]}
    >
      <Text style={styles.grupi}>{grupi}</Text>
      <Text>{spitali} · {njesite} njësi</Text>
      {afati && <Text>Afati: {afati}</Text>}
      <Text style={styles.statusi}>{statusiTani}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  karta: { padding: 16, margin: 8, borderRadius: 12, backgroundColor: "#fde8e8" },
  verifikuar: { backgroundColor: "#e0f5e4" },
  grupi: { fontSize: 24, fontWeight: "bold" },
  statusi: { marginTop: 8, fontStyle: "italic" },
});