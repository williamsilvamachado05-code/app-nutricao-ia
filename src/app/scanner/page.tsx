'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Camera, Upload, X, Sparkles } from 'lucide-react';
import Navbar from '@/components/custom/navbar';

export default function ScannerPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simula análise de IA
    setTimeout(() => {
      router.push('/results?id=1');
    }, 2000);
  };

  const handleClear = () => {
    setSelectedImage(null);
    setIsAnalyzing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 pb-20">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
            Scanner de Alimentos
          </h1>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden">
          {/* Área de Preview */}
          <div className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            {selectedImage ? (
              <>
                <img
                  src={selectedImage}
                  alt="Alimento selecionado"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={handleClear}
                  className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <X className="w-5 h-5 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
                </button>
              </>
            ) : (
              <div className="text-center p-8">
                <Camera className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400 mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  Tire uma foto ou faça upload de uma imagem
                </p>
              </div>
            )}
          </div>

          {/* Controles */}
          <div className="p-6 space-y-4">
            {!selectedImage ? (
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl hover:scale-105 transition-transform shadow-lg"
                >
                  <Camera className="w-8 h-8" strokeWidth={1.5} />
                  <span className="font-semibold text-sm sm:text-base">Câmera</span>
                </button>

                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-col items-center justify-center gap-3 p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl hover:scale-105 transition-transform"
                >
                  <Upload className="w-8 h-8" strokeWidth={1.5} />
                  <span className="font-semibold text-sm sm:text-base">Galeria</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="font-semibold">Analisando com IA...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" strokeWidth={1.5} />
                    <span className="font-semibold">Analisar Alimento</span>
                  </>
                )}
              </button>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          {/* Informações */}
          <div className="px-6 pb-6">
            <div className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                Dicas para melhor resultado
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Tire fotos com boa iluminação</li>
                <li>• Centralize o alimento na imagem</li>
                <li>• Evite sombras e reflexos</li>
                <li>• Mostre o alimento completo</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Navbar />
    </div>
  );
}
