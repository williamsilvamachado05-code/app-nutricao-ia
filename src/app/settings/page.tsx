'use client';

import { Settings, User, Bell, Shield, Palette, Info } from 'lucide-react';

export default function SettingsPage() {
  const settingsSections = [
    {
      title: 'Conta',
      icon: User,
      items: [
        { label: 'Perfil', description: 'Edite suas informações pessoais' },
        { label: 'Metas', description: 'Configure suas metas de saúde' }
      ]
    },
    {
      title: 'Notificações',
      icon: Bell,
      items: [
        { label: 'Push', description: 'Notificações no dispositivo' },
        { label: 'Email', description: 'Receba atualizações por email' }
      ]
    },
    {
      title: 'Aparência',
      icon: Palette,
      items: [
        { label: 'Tema', description: 'Claro, escuro ou automático' },
        { label: 'Idioma', description: 'Português (Brasil)' }
      ]
    },
    {
      title: 'Privacidade',
      icon: Shield,
      items: [
        { label: 'Dados', description: 'Gerencie seus dados' },
        { label: 'Segurança', description: 'Configurações de segurança' }
      ]
    },
    {
      title: 'Sobre',
      icon: Info,
      items: [
        { label: 'Versão', description: '1.0.0' },
        { label: 'Termos', description: 'Termos de uso e privacidade' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pb-20">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-gradient-to-br from-gray-800 to-black p-3 rounded-2xl">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
            Configurações
          </h1>
        </div>

        <div className="space-y-6">
          {settingsSections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {section.items.map((item) => (
                    <button
                      key={item.label}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100">
                            {item.label}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {item.description}
                          </p>
                        </div>
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
