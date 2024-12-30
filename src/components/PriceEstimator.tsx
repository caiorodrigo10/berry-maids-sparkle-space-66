import React, { useState } from 'react';
import { Bed, Bath, Home, Plus, Minus, DollarSign } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";

const PriceEstimator = () => {
  const [size, setSize] = useState([100]);
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [cleanLevel, setCleanLevel] = useState(3);
  const [extras, setExtras] = useState<string[]>([]);

  const calculatePrice = () => {
    let basePrice = size[0] * 0.5; // R$0.50 por m²
    basePrice += bedrooms * 50; // R$50 por quarto
    basePrice += bathrooms * 70; // R$70 por banheiro
    basePrice *= cleanLevel * 0.2 + 1; // Multiplicador baseado no nível de sujeira
    
    // Adiciona extras
    extras.forEach(extra => {
      basePrice += 30; // R$30 por extra
    });

    return basePrice.toFixed(2);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-berry-purple">
          Calcule o Valor
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Tamanho da Casa */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Home className="text-berry-purple" />
              <h3 className="text-xl font-semibold">Tamanho da Casa</h3>
            </div>
            <div className="px-4">
              <Slider
                value={size}
                onValueChange={setSize}
                max={300}
                step={10}
                className="w-full"
              />
              <p className="text-center mt-2">{size[0]}m²</p>
            </div>
          </div>

          {/* Quartos e Banheiros */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Bed className="text-berry-purple" />
                <h3 className="text-xl font-semibold">Quartos</h3>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setBedrooms(Math.max(0, bedrooms - 1))}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Minus size={20} />
                </button>
                <span className="text-2xl w-8 text-center">{bedrooms}</span>
                <button
                  onClick={() => setBedrooms(bedrooms + 1)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Bath className="text-berry-purple" />
                <h3 className="text-xl font-semibold">Banheiros</h3>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setBathrooms(Math.max(0, bathrooms - 1))}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Minus size={20} />
                </button>
                <span className="text-2xl w-8 text-center">{bathrooms}</span>
                <button
                  onClick={() => setBathrooms(bathrooms + 1)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Nível de Limpeza */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nível de Sujeira</h3>
            <div className="flex justify-between gap-2">
              {[1, 2, 3, 4, 5].map((level) => (
                <button
                  key={level}
                  onClick={() => setCleanLevel(level)}
                  className={`flex-1 py-3 px-4 rounded-lg border transition-all ${
                    cleanLevel === level
                      ? 'border-berry-purple bg-berry-purple text-white'
                      : 'border-gray-200 hover:border-berry-purple'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center">
              {cleanLevel === 1 && "Pouco suja"}
              {cleanLevel === 2 && "Levemente suja"}
              {cleanLevel === 3 && "Sujeira normal"}
              {cleanLevel === 4 && "Muito suja"}
              {cleanLevel === 5 && "Extremamente suja"}
            </p>
          </div>

          {/* Extras */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Serviços Adicionais</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Janelas', 'Geladeira', 'Forno', 'Armários'].map((extra) => (
                <Toggle
                  key={extra}
                  pressed={extras.includes(extra)}
                  onPressedChange={(pressed) =>
                    setExtras(
                      pressed
                        ? [...extras, extra]
                        : extras.filter((e) => e !== extra)
                    )
                  }
                  className="w-full"
                >
                  {extra}
                </Toggle>
              ))}
            </div>
          </div>

          {/* Preço Final */}
          <div className="bg-berry-purple text-white p-6 rounded-lg">
            <div className="flex items-center justify-center gap-2">
              <DollarSign size={32} />
              <span className="text-4xl font-bold">R$ {calculatePrice()}</span>
            </div>
            <p className="text-center mt-2 text-sm opacity-90">
              Valor estimado para limpeza única
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceEstimator;