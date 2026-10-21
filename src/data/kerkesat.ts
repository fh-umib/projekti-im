export type Kerkesa = {
  id: string;
  grupi: string;
  spitali: string;
  njesite: number;
  statusi: "e paverifikuar" | "e verifikuar";
  afati?: string;
  pershkrimi: string;
};

export const kerkesat: Kerkesa[] = [
  { id: "1", grupi: "A-", spitali: "Spitali Test 1", njesite: 2, statusi: "e verifikuar", afati: "Sot, 18:00", pershkrimi: "Kërkesë urgjente, kontakti te reparti." },
  { id: "2", grupi: "0+", spitali: "Spitali Test 2", njesite: 1, statusi: "e paverifikuar", pershkrimi: "Pret miratimin e spitalit." },
  { id: "3", grupi: "B+", spitali: "Spitali Test 3", njesite: 3, statusi: "e verifikuar", afati: "Nesër", pershkrimi: "Nevojiten tri njësi gjatë ditës." },
  { id: "4", grupi: "AB+", spitali: "Spitali Test 1", njesite: 1, statusi: "e paverifikuar", afati: "Sot, 20:00", pershkrimi: "Kërkesë e re nga familja." },
  { id: "5", grupi: "0-", spitali: "Spitali Test 2", njesite: 2, statusi: "e verifikuar", pershkrimi: "Grup i rrallë, kërkohen dhurues afër." },
  { id: "6", grupi: "A+", spitali: "Spitali Test 3", njesite: 1, statusi: "e paverifikuar", afati: "Të premten", pershkrimi: "Për një operacion të planifikuar." },
];

export function gjeKerkesen(id: string) {
  return kerkesat.find((k) => k.id === id);
}