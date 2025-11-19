// Tipos do aplicativo de nutrição

export interface User {
  id: string;
  name: string;
  email: string;
  dailyCalorieGoal: number;
  plan: 'free' | 'premium' | 'pro';
}

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber?: number;
  sugar?: number;
}

export interface FoodScan {
  id: string;
  name: string;
  imageUrl: string;
  timestamp: Date;
  nutritionalInfo: NutritionalInfo;
  servingSize: string;
  healthScore: number;
  ingredients?: string[];
  category?: string;
}

export interface Payment {
  id: string;
  date: Date;
  amount: number;
  plan: string;
  status: 'completed' | 'pending' | 'failed';
  method: string;
}

export interface DailyStats {
  date: Date;
  caloriesConsumed: number;
  caloriesGoal: number;
  protein: number;
  carbs: number;
  fats: number;
}
