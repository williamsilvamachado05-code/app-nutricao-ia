import { FoodScan, Payment, DailyStats, User } from './types';

export const mockUser: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao@email.com',
  dailyCalorieGoal: 2500,
  plan: 'premium'
};

export const mockRecentScans: FoodScan[] = [
  {
    id: '1',
    name: 'Salada Caesar Fitness',
    imageUrl: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    timestamp: new Date('2025-01-20T12:30:00'),
    nutritionalInfo: {
      calories: 350,
      protein: 25,
      carbs: 15,
      fats: 22
    },
    servingSize: '1 porção (250g)',
    healthScore: 85,
    ingredients: ['Alface', 'Frango Grelhado', 'Parmesão Light', 'Croutons Integrais', 'Molho Caesar Light'],
    category: 'Refeição Fitness'
  },
  {
    id: '2',
    name: 'Smoothie Proteico',
    imageUrl: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop',
    timestamp: new Date('2025-01-20T09:15:00'),
    nutritionalInfo: {
      calories: 180,
      protein: 5,
      carbs: 42,
      fats: 2
    },
    servingSize: '1 copo (300ml)',
    healthScore: 92,
    ingredients: ['Banana', 'Morango', 'Iogurte Natural', 'Mel', 'Whey Protein'],
    category: 'Pré-Treino'
  },
  {
    id: '3',
    name: 'Salmão Grelhado com Legumes',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    timestamp: new Date('2025-01-19T19:45:00'),
    nutritionalInfo: {
      calories: 420,
      protein: 45,
      carbs: 8,
      fats: 24
    },
    servingSize: '1 filé (200g)',
    healthScore: 88,
    ingredients: ['Salmão', 'Azeite Extra Virgem', 'Limão', 'Ervas Frescas', 'Brócolis'],
    category: 'Pós-Treino'
  },
  {
    id: '4',
    name: 'Bowl de Açaí Fitness',
    imageUrl: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    timestamp: new Date('2025-01-19T15:30:00'),
    nutritionalInfo: {
      calories: 320,
      protein: 12,
      carbs: 58,
      fats: 8
    },
    servingSize: '1 bowl (350g)',
    healthScore: 90,
    ingredients: ['Açaí', 'Banana', 'Granola', 'Mel', 'Morango', 'Coco Ralado'],
    category: 'Lanche Saudável'
  },
  {
    id: '5',
    name: 'Wrap de Frango Integral',
    imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    timestamp: new Date('2025-01-19T13:00:00'),
    nutritionalInfo: {
      calories: 380,
      protein: 32,
      carbs: 42,
      fats: 10
    },
    servingSize: '1 wrap (280g)',
    healthScore: 87,
    ingredients: ['Tortilha Integral', 'Frango Desfiado', 'Alface', 'Tomate', 'Cream Cheese Light'],
    category: 'Refeição Fitness'
  }
];

export const mockPayments: Payment[] = [
  {
    id: '1',
    date: new Date('2025-01-01T00:00:00.000Z'),
    amount: 29.90,
    plan: 'Premium Mensal',
    status: 'completed',
    method: 'Cartão de Crédito'
  },
  {
    id: '2',
    date: new Date('2024-12-01T00:00:00.000Z'),
    amount: 29.90,
    plan: 'Premium Mensal',
    status: 'completed',
    method: 'Cartão de Crédito'
  },
  {
    id: '3',
    date: new Date('2024-11-01T00:00:00.000Z'),
    amount: 29.90,
    plan: 'Premium Mensal',
    status: 'completed',
    method: 'Cartão de Crédito'
  }
];

export const mockDailyStats: DailyStats = {
  date: new Date('2025-01-20T00:00:00.000Z'),
  caloriesConsumed: 950,
  caloriesGoal: 2500,
  protein: 75,
  carbs: 65,
  fats: 48
};

// Categorias Fitness disponíveis
export const fitnessCategories = [
  'Pré-Treino',
  'Pós-Treino',
  'Refeição Fitness',
  'Lanche Saudável',
  'Café da Manhã Proteico',
  'Jantar Leve',
  'Snack Proteico',
  'Hidratação'
] as const;
