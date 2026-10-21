import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  grupi: string;
  spitali: string;
  njesite: number;
  statusi: "e paverifikuar" | "e verifikuar";
  afati?: string;
  onPress?: () => void;
};

export default function KartaKerkeses({
  grupi,
  spitali,
  njesite,
  statusi,
  afati,
  onPress,
}: Props) {
  const [statusiTani, setStatusiTani] = useState(statusi);
  const verifikuar = statusiTani === "e verifikuar";

  const ndrysho = () => {
    setStatusiTani(verifikuar ? "e paverifikuar" : "e verifikuar");
  };

  return (
    <Pressable
      onPress={onPress ?? ndrysho}
      style={({ pressed }) => [styles.karta, pressed && styles.shtypur]}
    >
      <View style={[styles.shirit, verifikuar ? styles.shiritJeshil : styles.shiritPortokalli]} />

      <View style={styles.badge}>
        <Text style={styles.badgeTekst}>{grupi}</Text>
      </View>

      <View style={styles.trupi}>
        <Text style={styles.spitali}>{spitali}</Text>
        <Text style={styles.detaje}>🩸 {njesite} njësi</Text>
        {afati && <Text style={styles.detaje}>⏰ {afati}</Text>}

        <View style={[styles.chip, verifikuar ? styles.chipJeshil : styles.chipPortokalli]}>
          <Text style={[styles.chipTekst, verifikuar ? styles.tekstJeshil : styles.tekstPortokalli]}>
            {verifikuar ? "✓ " : "● "}
            {statusiTani}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  karta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    paddingLeft: 22,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  shtypur: { opacity: 0.85, transform: [{ scale: 0.98 }] },
  shirit: { position: "absolute", left: 0, top: 0, bottom: 0, width: 6 },
  shiritJeshil: { backgroundColor: "#2e9e5b" },
  shiritPortokalli: { backgroundColor: "#f5a623" },
  badge: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#c62828",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  badgeTekst: { color: "#fff", fontSize: 24, fontWeight: "800" },
  trupi: { flex: 1 },
  spitali: { fontSize: 18, fontWeight: "700", marginBottom: 4 },
  detaje: { fontSize: 14, color: "#555", marginTop: 2 },
  chip: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    marginTop: 10,
  },
  chipJeshil: { backgroundColor: "#e3f6e8" },
  chipPortokalli: { backgroundColor: "#fff1d6" },
  chipTekst: { fontSize: 13, fontWeight: "600" },
  tekstJeshil: { color: "#1b6b3a" },
  tekstPortokalli: { color: "#8a5a00" },
});