'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Share2, Check, AlertCircle } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { mockRecentScans } from '@/lib/mock-data';

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scanId = searchParams.get('id');
  
  const [scan] = useState(mockRecentScans[0]);
  const [servings, setServings] = useState(1);

  const adjustedNutrition = {
    calories: scan.nutritionalInfo.calories * servings,
    protein: scan.nutritionalInfo.protein * servings,
    carbs: scan.nutritionalInfo.carbs * servings,
    fats: scan.nutritionalInfo.fats * servings
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 pb-20">
      {/* Header com imagem */}
      <div className="relative h-64 sm:h-80 bg-gray-900">
        <Image
          src={scan.imageUrl}
          alt={scan.name}
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60" />
        
        {/* Botões de navegação */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
          </button>
          <button className="p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform">
            <Share2 className="w-5 h-5 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
        {/* Card Principal */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
          {/* Informações Básicas */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {scan.name}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{new Date(scan.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
              <span>•</span>
              <span>{adjustedNutrition.calories} kcal</span>
              <span>•</span>
              <span>{scan.servingSize}</span>
            </div>
          </div>

          {/* Controle de Porções */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Quantidade de porções
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setServings(Math.max(0.5, servings - 0.5))}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center font-bold text-gray-700 dark:text-gray-300"
              >
                -
              </button>
              <div className="flex-1 text-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">{servings}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">porção{servings !== 1 ? 'ões' : ''}</span>
              </div>
              <button
                onClick={() => setServings(servings + 0.5)}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center font-bold text-gray-700 dark:text-gray-300"
              >
                +
              </button>
            </div>
          </div>

          {/* Macros */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
              Informações Nutricionais
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-red-50 dark:bg-red-950/20 rounded-2xl">
                <p className="text-3xl font-bold text-red-600 dark:text-red-400">{adjustedNutrition.protein}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Proteína (g)</p>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-950/20 rounded-2xl">
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">{adjustedNutrition.carbs}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Carboidratos (g)</p>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-2xl">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{adjustedNutrition.fats}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Gorduras (g)</p>
              </div>
            </div>
          </div>

          {/* Health Score */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
              Pontuação de Saúde
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500"
                    style={{ width: `${scan.healthScore}%` }}
                  />
                </div>
              </div>
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                {scan.healthScore}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {scan.healthScore >= 80 ? 'Excelente escolha!' : scan.healthScore >= 60 ? 'Boa escolha!' : 'Pode melhorar'}
            </p>
          </div>

          {/* Ingredientes */}
          {scan.ingredients && (
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                Ingredientes Detectados
              </h2>
              <div className="flex flex-wrap gap-2">
                {scan.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Botões de Ação */}
          <div className="p-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-2xl hover:scale-105 transition-transform font-semibold">
              <AlertCircle className="w-5 h-5" strokeWidth={1.5} />
              Corrigir
            </button>
            <button className="flex items-center justify-center gap-2 p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl hover:scale-105 transition-transform font-semibold shadow-lg">
              <Check className="w-5 h-5" strokeWidth={1.5} />
              Confirmar
            </button>
          </div>
        </div>
      </main>

      <Navbar />
    </div>
  );
}
