import { useState } from "react";
import ImageSlider from "./ImageSlider";
interface Modelo {
  id: string;
  name: string;
  description: string;
  images: string[];
  colors: string[];
}

interface ProductTabsProps {
  modelos: Modelo[];
}

function ProductTabs({ modelos }: ProductTabsProps) {
  const [activeTabId, setActiveTabId] = useState(modelos[0]?.id || "");

  const activeModel = modelos.find((m) => m.id === activeTabId);

  return (
    <section id="modelos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            5 Perfiles Distintivos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Cada perfil reproduce estilos tradicionales con la resistencia
            incomparable del acero.
          </p>
        </div>

        <div className="border-b border-gray-200">
          <nav
            className="-mb-px flex space-x-4 sm:space-x-8 justify-center overflow-x-auto"
            aria-label="Tabs"
          >
            {modelos.map((modelo) => (
              <button
                type="button"
                key={modelo.id}
                onClick={() => setActiveTabId(modelo.id)}
                className={`whitespace-nowrap py-4 px-2 sm:px-4 border-b-2 font-medium text-sm tab-button transition-colors duration-200 focus:outline-none ${
                  activeTabId === modelo.id
                    ? "border-brand text-brand"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {modelo.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Contenido de la Pestaña Activa */}
        <div className="mt-8">
          {activeModel && (
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{`Tilcor ${activeModel.name}`}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {activeModel.description}
                </p>
                <h4 className="font-semibold text-gray-700 mb-3">
                  COLORES DISPONIBLES
                </h4>
                <div className="flex flex-wrap gap-3 mb-6">
                  {activeModel.colors.map((color) => (
                    <span
                      key={color}
                      className="bg-brand/10 text-xs font-semibold px-3 py-1.5 rounded-full uppercase border border-brand/20"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center order-1 md:order-2">
                <ImageSlider images={activeModel.images} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductTabs;
