import { Link, Stack } from "expo-router";
import { useEffect, useRef, type ReactNode } from "react";
import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import KartaKerkeses from "../components/KartaKerkeses";
import { kerkesat } from "../data/kerkesat";

function Hyrje({ index, children }: { index: number; children: ReactNode }) {
  const vlera = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(vlera, {
      toValue: 1,
      duration: 450,
      delay: Math.min(index, 8) * 90,
      useNativeDriver: true,
    }).start();
  }, [index, vlera]);

  return (
    <Animated.View
      style={{
        opacity: vlera,
        transform: [
          { translateY: vlera.interpolate({ inputRange: [0, 1], outputRange: [28, 0] }) },
        ],
      }}
    >
      {children}
    </Animated.View>
  );
}

function Koka() {
  const verifikuara = kerkesat.filter((k) => k.statusi === "e verifikuar").length;

  return (
    <Hyrje index={0}>
      <View style={styles.hero}>
        <Text style={styles.heroTitull}>Kërkesa urgjente</Text>
        <Text style={styles.heroNentitull}>Një dhurim mund të shpëtojë një jetë.</Text>
        <View style={styles.statRresht}>
          <View style={styles.stat}>
            <Text style={styles.statNumri}>{kerkesat.length}</Text>
            <Text style={styles.statEtiketa}>gjithsej</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumri}>{verifikuara}</Text>
            <Text style={styles.statEtiketa}>të verifikuara</Text>
          </View>
        </View>
      </View>
    </Hyrje>
  );
}

export default function Index() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Gjaku",
          headerStyle: { backgroundColor: "#c62828" },
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#fff", fontWeight: "800" },
          headerShadowVisible: false,
        }}
      />
      <FlatList
        style={styles.lista}
        contentContainerStyle={{ paddingBottom: 32 }}
        data={kerkesat}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Koka />}
        renderItem={({ item, index }) => (
          <Hyrje index={index + 1}>
            <Link href={`/artikull/${item.id}`} asChild>
              <KartaKerkeses
                grupi={item.grupi}
                spitali={item.spitali}
                njesite={item.njesite}
                statusi={item.statusi}
                afati={item.afati}
              />
            </Link>
          </Hyrje>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  lista: { backgroundColor: "#f4f1f1" },
  hero: {
    backgroundColor: "#c62828",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 28,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 12,
  },
  heroTitull: { color: "#fff", fontSize: 30, fontWeight: "800" },
  heroNentitull: { color: "rgba(255,255,255,0.85)", fontSize: 15, marginTop: 4 },
  statRresht: { flexDirection: "row", gap: 12, marginTop: 18 },
  stat: {
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  statNumri: { color: "#fff", fontSize: 26, fontWeight: "800" },
  statEtiketa: { color: "rgba(255,255,255,0.85)", fontSize: 12 },
});