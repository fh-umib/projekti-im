import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { gjeKerkesen } from "../../data/kerkesat";

const kokaOpsione = {
  headerStyle: { backgroundColor: "#c62828" },
  headerTintColor: "#fff",
  headerTitleStyle: { color: "#fff", fontWeight: "800" },
  headerShadowVisible: false,
} as const;

export default function Detajet() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const kerkesa = gjeKerkesen(id);
  const [verifikuar, setVerifikuar] = useState(kerkesa?.statusi === "e verifikuar");

  if (!kerkesa) {
    return (
      <>
        <Stack.Screen options={{ ...kokaOpsione, title: "Nuk u gjet" }} />
        <View style={styles.zbrazet}>
          <Text style={styles.zbrazetEmoji}>🩸</Text>
          <Text style={styles.zbrazetTitull}>Kërkesa “{id}” nuk u gjet.</Text>
          <Text style={styles.zbrazetTekst}>Kthehu te lista dhe zgjidh një kërkesë tjetër.</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ ...kokaOpsione, title: `Kërkesë ${kerkesa.grupi}` }} />
      <ScrollView style={styles.faqja}>
        <View style={styles.hero}>
          <View style={styles.rrethi}>
            <Text style={styles.rrethiTekst}>{kerkesa.grupi}</Text>
          </View>
          <Text style={styles.spitali}>{kerkesa.spitali}</Text>
          <View style={styles.pikat}>
            <View style={styles.pika}>
              <Text style={styles.pikaTekst}>🩸 {kerkesa.njesite} njësi</Text>
            </View>
            {kerkesa.afati && (
              <View style={styles.pika}>
                <Text style={styles.pikaTekst}>⏰ {kerkesa.afati}</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.permbajtja}>
          <Pressable
            onPress={() => setVerifikuar(!verifikuar)}
            style={[styles.statusi, verifikuar ? styles.statusiJeshil : styles.statusiPortokalli]}
          >
            <Text style={[styles.statusiTekst, verifikuar ? styles.tekstJeshil : styles.tekstPortokalli]}>
              {verifikuar ? "✓ e verifikuar" : "● e paverifikuar"}
            </Text>
            <Text style={styles.statusiNdihme}>Prek për ta ndryshuar</Text>
          </Pressable>

          <View style={styles.bllok}>
            <Text style={styles.bllokTitull}>Përshkrimi</Text>
            <Text style={styles.bllokTekst}>{kerkesa.pershkrimi}</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  faqja: { backgroundColor: "#f4f1f1" },
  hero: {
    backgroundColor: "#c62828",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 32,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  rrethi: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  rrethiTekst: { color: "#c62828", fontSize: 44, fontWeight: "900" },
  spitali: { color: "#fff", fontSize: 24, fontWeight: "800", marginTop: 16 },
  pikat: { flexDirection: "row", gap: 10, marginTop: 14 },
  pika: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  pikaTekst: { color: "#fff", fontSize: 14, fontWeight: "600" },
  permbajtja: { padding: 16, gap: 14 },
  statusi: {
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusiJeshil: { backgroundColor: "#e3f6e8" },
  statusiPortokalli: { backgroundColor: "#fff1d6" },
  statusiTekst: { fontSize: 16, fontWeight: "700" },
  tekstJeshil: { color: "#1b6b3a" },
  tekstPortokalli: { color: "#8a5a00" },
  statusiNdihme: { fontSize: 12, color: "#666" },
  bllok: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  bllokTitull: { fontSize: 13, fontWeight: "700", color: "#888", marginBottom: 6 },
  bllokTekst: { fontSize: 16, lineHeight: 22 },
  zbrazet: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, backgroundColor: "#f4f1f1" },
  zbrazetEmoji: { fontSize: 56 },
  zbrazetTitull: { fontSize: 20, fontWeight: "800", marginTop: 12, textAlign: "center" },
  zbrazetTekst: { fontSize: 15, color: "#666", marginTop: 6, textAlign: "center" },
});