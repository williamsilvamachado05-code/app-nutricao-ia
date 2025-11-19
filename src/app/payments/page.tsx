'use client';

import { useState, useEffect } from 'react';
import { Check, Crown, Zap, Star } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { mockPayments, mockUser } from '@/lib/mock-data';

export default function PaymentsPage() {
  const [payments] = useState(mockPayments);
  const [user] = useState(mockUser);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'premium' | 'pro'>('premium');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const plans = [
    {
      id: 'free' as const,
      name: 'Gratuito',
      price: 0,
      icon: Star,
      features: [
        '5 scans por dia',
        'Análise nutricional básica',
        'Histórico de 7 dias',
        'Anúncios'
      ]
    },
    {
      id: 'premium' as const,
      name: 'Premium',
      price: 29.90,
      icon: Crown,
      popular: true,
      features: [
        'Scans ilimitados',
        'Análise nutricional completa',
        'Histórico ilimitado',
        'Sem anúncios',
        'Suporte prioritário',
        'Receitas personalizadas'
      ]
    },
    {
      id: 'pro' as const,
      name: 'Pro',
      price: 49.90,
      icon: Zap,
      features: [
        'Tudo do Premium',
        'Plano alimentar com IA',
        'Consultas com nutricionista',
        'Análise de exames',
        'Relatórios detalhados',
        'API para desenvolvedores'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 pb-20">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
            Assinatura e Pagamentos
          </h1>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Plano Atual */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm opacity-90">Plano Atual</p>
              <h2 className="text-2xl font-bold">{user.plan.charAt(0).toUpperCase() + user.plan.slice(1)}</h2>
            </div>
            <Crown className="w-12 h-12 opacity-90" strokeWidth={1.5} />
          </div>
          <p className="text-sm opacity-90">
            Próxima cobrança: 01/02/2025
          </p>
          <p className="text-2xl font-bold mt-2">R$ 29,90/mês</p>
        </div>

        {/* Planos Disponíveis */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Escolha seu Plano
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isSelected = selectedPlan === plan.id;
              const isCurrent = user.plan === plan.id;

              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 cursor-pointer transition-all duration-200 ${
                    isSelected 
                      ? 'ring-2 ring-blue-500 scale-105' 
                      : 'hover:scale-105'
                  } ${
                    plan.popular 
                      ? 'border-2 border-blue-500' 
                      : 'border border-gray-200 dark:border-gray-800'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                      MAIS POPULAR
                    </div>
                  )}

                  {isCurrent && (
                    <div className="absolute top-4 right-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-2xl ${
                      plan.id === 'free' ? 'bg-gray-100 dark:bg-gray-800' :
                      plan.id === 'premium' ? 'bg-blue-100 dark:bg-blue-950/30' :
                      'bg-purple-100 dark:bg-purple-950/30'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        plan.id === 'free' ? 'text-gray-600 dark:text-gray-400' :
                        plan.id === 'premium' ? 'text-blue-600 dark:text-blue-400' :
                        'text-purple-600 dark:text-purple-400'
                      }`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-gray-100">{plan.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {plan.price === 0 ? 'Grátis' : `R$ ${plan.price.toFixed(2)}/mês`}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    disabled={isCurrent}
                    className={`w-full py-3 rounded-2xl font-semibold transition-all ${
                      isCurrent
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                        : isSelected
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:scale-105 shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {isCurrent ? 'Plano Atual' : isSelected ? 'Selecionar' : 'Escolher'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Histórico de Pagamentos */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Histórico de Pagamentos
          </h2>
          <div className="space-y-3">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl"
              >
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {payment.plan}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {mounted ? new Date(payment.date).toLocaleDateString('pt-BR') : '...'} • {payment.method}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-gray-100">
                    R$ {payment.amount.toFixed(2)}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    payment.status === 'completed' 
                      ? 'bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400'
                      : payment.status === 'pending'
                      ? 'bg-yellow-100 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400'
                      : 'bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400'
                  }`}>
                    {payment.status === 'completed' ? 'Pago' : payment.status === 'pending' ? 'Pendente' : 'Falhou'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão de Ação */}
        {selectedPlan !== user.plan && (
          <button className="w-full py-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Atualizar para {plans.find(p => p.id === selectedPlan)?.name}
          </button>
        )}
      </main>

      <Navbar />
    </div>
  );
}
