import { supabase } from '@/lib/supbase/client';

export interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
  description?: string;
  is_new?: boolean;
  is_featured?: boolean;
  category_id?: string;
  stock_quantity: number;
  created_at: string;
  updated_at: string;
}

export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    throw error;
  }

  return data as Product[];
}

export async function getFeaturedProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_featured', true);

  if (error) {
    throw error;
  }

  return data as Product[];
}

export async function getNewArrivals() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_new', true)
    .order('created_at', { ascending: false })
    .limit(8);

  if (error) {
    throw error;
  }

  return data as Product[];
}