'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bell, Plus, Apple } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { mockUser, mockRecentScans, mockDailyStats } from '@/lib/mock-data';

export default function Home() {
  const [stats] = useState(mockDailyStats);
  const [recentScans] = useState(mockRecentScans);
  const [user] = useState(mockUser);

  const caloriesPercentage = (stats.caloriesConsumed / stats.caloriesGoal) * 100;
  const proteinPercentage = (stats.protein / 150) * 100;
  const carbsPercentage = (stats.carbs / 250) * 100;
  const fatsPercentage = (stats.fats / 70) * 100;

  // Valores fixos para SVG (evita problemas de hidratação)
  const circleRadius = 90;
  const circleCircumference = 2 * Math.PI * circleRadius;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 pb-20">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl shadow-lg">
              <Apple className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} fill="white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                FitBite
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Olá, {user.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Calorias Restantes */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 sm:p-8">
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r={circleRadius}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  className="text-gray-200 dark:text-gray-800"
                />
                <circle
                  cx="100"
                  cy="100"
                  r={circleRadius}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeDasharray={`${(caloriesPercentage / 100) * circleCircumference} ${circleCircumference}`}
                  className="text-green-500 transition-all duration-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-gray-100">
                  {stats.caloriesGoal - stats.caloriesConsumed}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">calorias restantes</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stats.caloriesConsumed} de {stats.caloriesGoal} kcal
              </p>
            </div>
          </div>
        </div>

        {/* Macros */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 sm:p-6">
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" className="text-gray-200 dark:text-gray-800" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray={`${(proteinPercentage / 100) * 283} 283`} className="text-red-500" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">{stats.protein}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">Proteína</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">g</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 sm:p-6">
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" className="text-gray-200 dark:text-gray-800" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray={`${(carbsPercentage / 100) * 283} 283`} className="text-orange-500" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">{stats.carbs}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">Carboidratos</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">g</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 sm:p-6">
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" className="text-gray-200 dark:text-gray-800" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray={`${(fatsPercentage / 100) * 283} 283`} className="text-blue-500" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">{stats.fats}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">Gorduras</p>
              <p className="text-xs text-gray-500 dark:text-gray-500">g</p>
            </div>
          </div>
        </div>

        {/* Uploads Recentes */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">Refeições Recentes</h2>
            <Link href="/scanner" className="text-sm text-green-600 dark:text-green-400 hover:underline font-medium">
              Ver todas
            </Link>
          </div>

          <div className="space-y-3">
            {recentScans.map((scan) => (
              <Link
                key={scan.id}
                href={`/results?id=${scan.id}`}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={scan.imageUrl}
                    alt={scan.name}
                    fill
                    sizes="(max-width: 640px) 64px, 80px"
                    className="object-cover"
                    priority={false}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">{scan.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {scan.nutritionalInfo.calories} kcal
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-medium">P: {scan.nutritionalInfo.protein}g</span>
                  <span>C: {scan.nutritionalInfo.carbs}g</span>
                  <span>G: {scan.nutritionalInfo.fats}g</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Botão Flutuante */}
        <Link
          href="/scanner"
          className="fixed bottom-24 right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200 z-40"
        >
          <Plus className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
        </Link>
      </main>

      <Navbar />
    </div>
  );
}
