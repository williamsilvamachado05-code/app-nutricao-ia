'use client';

import { useState } from 'react';
import { User, Bell, Moon, Globe, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { mockUser } from '@/lib/mock-data';

export default function SettingsPage() {
  const [user] = useState(mockUser);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const settingsSections = [
    {
      title: 'Conta',
      items: [
        { icon: User, label: 'Perfil', value: user.name },
        { icon: Globe, label: 'Idioma', value: 'Português' }
      ]
    },
    {
      title: 'Preferências',
      items: [
        { 
          icon: Bell, 
          label: 'Notificações', 
          toggle: true,
          value: notifications,
          onChange: setNotifications
        },
        { 
          icon: Moon, 
          label: 'Modo Escuro', 
          toggle: true,
          value: darkMode,
          onChange: setDarkMode
        }
      ]
    },
    {
      title: 'Suporte',
      items: [
        { icon: HelpCircle, label: 'Central de Ajuda' },
        { icon: LogOut, label: 'Sair', danger: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 pb-20">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
            Configurações
          </h1>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Perfil do Usuário */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{user.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Seções de Configurações */}
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-gray-100">{section.title}</h3>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIndex}
                    onClick={() => item.toggle && item.onChange && item.onChange(!item.value)}
                    className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                      item.danger ? 'text-red-600 dark:text-red-400' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.toggle ? (
                      <div className={`w-12 h-6 rounded-full transition-colors ${
                        item.value ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-700'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full mt-0.5 transition-transform ${
                          item.value ? 'translate-x-6' : 'translate-x-0.5'
                        }`} />
                      </div>
                    ) : item.value ? (
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.value}</span>
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Informações do App */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-4">
          <p>NutriAI v1.0.0</p>
          <p className="mt-1">© 2025 Todos os direitos reservados</p>
        </div>
      </main>

      <Navbar />
    </div>
  );
}
