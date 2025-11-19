'use client';

import { ScanLine } from 'lucide-react';

export default function ScannerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pb-20">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-gradient-to-br from-gray-800 to-black p-3 rounded-2xl">
            <ScanLine className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
            Scanner
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
              <ScanLine className="w-16 h-16 text-gray-900 dark:text-gray-100" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Scanner de Alimentos
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Escaneie códigos de barras ou tire fotos de alimentos para obter informações nutricionais instantâneas.
            </p>
            <button className="bg-gradient-to-r from-gray-800 to-black text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105">
              Iniciar Scanner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
