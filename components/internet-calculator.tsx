"use client";

import { useState } from "react";
import { Calculator, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { calculatorConfig } from "@/configs/content/calculator";

interface DeviceCount {
  smartphone: number;
  laptop: number;
  smartTv: number;
  desktop: number;
  gaming: number;
}

interface PackageRecommendation {
  name: string;
  speed: string;
  price: string;
  description: string;
  suitable: boolean;
}

export function InternetCalculator() {
  const [devices, setDevices] = useState<DeviceCount>({
    smartphone: 1,
    laptop: 1,
    smartTv: 0,
    desktop: 0,
    gaming: 0,
  });

  const [recommendation, setRecommendation] = useState<PackageRecommendation | null>(null);
  const [showResult, setShowResult] = useState(false); // Use config data
  const { devices: deviceConfigs, packages, ui } = calculatorConfig;

  const updateDeviceCount = (device: keyof DeviceCount, value: number) => {
    setDevices((prev) => ({
      ...prev,
      [device]: Math.max(0, Math.min(10, value)),
    }));
  };

  const calculateBandwidth = () => {
    let totalBandwidth = 0;
    deviceConfigs.forEach((config) => {
      totalBandwidth += devices[config.key] * config.bandwidth;
    });
    return totalBandwidth;
  };

  const calculateRecommendation = () => {
    const totalBandwidth = calculateBandwidth();
    const recommendedPackage = packages.find(
      (pkg) => totalBandwidth >= pkg.minBandwidth && totalBandwidth <= pkg.maxBandwidth
    );

    if (recommendedPackage) {
      setRecommendation({
        name: recommendedPackage.name,
        speed: recommendedPackage.speed,
        price: recommendedPackage.price,
        description: recommendedPackage.description,
        suitable: true,
      });
    } else {
      setRecommendation({
        name: "Sultan",
        speed: "50 Mbps",
        price: "Rp300.000",
        description: "Paket terbaik untuk kebutuhan internet super tinggi",
        suitable: true,
      });
    }
    setShowResult(true);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
      {/* CALCULATOR SECTION */}
      <div className="mega-card p-10 mega-hover mega-glow">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
            <Calculator className="h-10 w-10 text-white" />
          </div>{" "}
          <h3 className="mega-title text-3xl mb-4">{ui.title}</h3>
          <p className="mega-text text-gray-300 text-lg">{ui.subtitle}</p>
        </div>

        <div className="space-y-8">
          {deviceConfigs.map((config) => {
            const Icon = config.icon;
            return (
              <div key={config.key} className="mega-card p-6 mega-hover">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${config.color} rounded-xl flex items-center justify-center mega-glow`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mega-text font-black text-white text-lg">{config.label}</h4>
                      <p className="mega-text text-gray-400 text-sm">{config.bandwidth} Mbps per device</p>
                    </div>
                  </div>
                  <div className="text-3xl font-black text-cyan-400 mega-title">{devices[config.key]}</div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => updateDeviceCount(config.key, devices[config.key] - 1)}
                    className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mega-hover mega-glow"
                    disabled={devices[config.key] === 0}
                  >
                    <span className="text-white font-black text-xl">-</span>
                  </button>

                  <div className="flex-1 relative">
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className={`h-full bg-gradient-to-r ${config.color} rounded-full transition-all duration-300`}
                        style={{ width: `${(devices[config.key] / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <button
                    onClick={() => updateDeviceCount(config.key, devices[config.key] + 1)}
                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mega-hover mega-glow"
                    disabled={devices[config.key] === 10}
                  >
                    <span className="text-white font-black text-xl">+</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <div className="mega-card p-6 mb-6">
            <div className="text-center">
              <p className="mega-text text-gray-400 text-lg mb-2">Total Kebutuhan Bandwidth</p>
              <p className="mega-title text-4xl text-cyan-400">{calculateBandwidth()} Mbps</p>
            </div>
          </div>

          <Button
            onClick={calculateRecommendation}
            className="w-full mega-button px-8 py-6 text-2xl font-black text-white mega-text mega-hover flex items-center justify-center space-x-4"
          >
            <Calculator className="h-8 w-8" />
            <span>🎯 Hitung Kebutuhan Internet 🎯</span>
          </Button>
        </div>
      </div>

      {/* RECOMMENDATION SECTION */}
      <div className="mega-card p-10 mega-hover mega-glow">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h3 className="mega-title text-3xl mb-4">🎯 Rekomendasi Paket 🎯</h3>
          <p className="mega-text text-gray-300 text-lg">Berdasarkan jumlah dan jenis perangkat yang digunakan</p>
        </div>

        {showResult && recommendation ? (
          <div className="space-y-8">
            <div className="mega-card p-8 mega-hover nusantara-glow">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 mega-glow animate-pulse">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <h4 className="mega-title text-4xl text-green-400 mb-4">{recommendation.name}</h4>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <span className="mega-text text-3xl font-black text-white">{recommendation.speed}</span>
                  <span className="mega-text text-2xl text-gray-400">•</span>
                  <span className="mega-text text-3xl font-black text-orange-400">{recommendation.price}</span>
                </div>
                <p className="mega-text text-gray-300 text-lg leading-relaxed">{recommendation.description}</p>
              </div>

              <div className="space-y-4">
                <div className="mega-card p-6">
                  <h5 className="mega-text font-black text-white text-lg mb-4">📊 Analisis Kebutuhan:</h5>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="mega-text text-gray-400">Kebutuhan Anda</p>
                      <p className="mega-title text-2xl text-cyan-400">{calculateBandwidth()} Mbps</p>
                    </div>
                    <div>
                      <p className="mega-text text-gray-400">Paket Rekomendasi</p>
                      <p className="mega-title text-2xl text-green-400">{recommendation.speed}</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full mega-button px-8 py-6 text-2xl font-black text-white mega-text mega-hover"
                >
                  🚀 Langganan Sekarang 🚀
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-8xl mb-8 garuda-soar opacity-50">🎯</div>
            <p className="mega-text text-gray-400 text-xl">
              Klik tombol &quot;Hitung Kebutuhan Internet&quot; untuk melihat rekomendasi paket yang cocok untuk kamu!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
