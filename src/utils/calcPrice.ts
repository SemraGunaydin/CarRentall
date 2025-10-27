import type { ICar } from "../types";

export function calcPrice(vehicle: ICar): number {
  const exchangeRate = 1.20; // 1 USD = 32 TL
  const daysInYear = 365;

  // Temel günlük yakıt maliyeti
  const dailyFuelCostZł = (vehicle.fuelcost08 * exchangeRate) / daysInYear;

  // Temel kira ücreti: yakıt maliyetine bağlı olarak belirli bir taban oluştur
  let basePrice = dailyFuelCostZł * 3; // Araç segmentine göre çarpan

  // Motor hacmine göre ek ücret
  if (vehicle.displ > 2.0) basePrice += 600;
  else if (vehicle.displ > 1.6) basePrice += 200;
  else basePrice += 30;

  // Çevre dostuluğu bonusu (ghgscore yüksekse indirim)
  if (vehicle.ghgscore >= 7) basePrice *= 0.95;
  else if (vehicle.ghgscore <= 4) basePrice *= 1.1;

  // Araç sınıfına göre premium ekleme
  if (vehicle.vclass.includes("Luxury")) {
    basePrice += 150; // Premium marka/sınıf farkı
  }

  // Şanzıman türüne göre fark (örnek: spor şanzımanlar için ek ücret)
  if (vehicle.trany && vehicle.trany.includes("S8")) {
    basePrice += 50;
  }

  // Sonucu yuvarlayalım
  return Math.round(basePrice);
}