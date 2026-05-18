export type cardType = {
  description: string;
  image: string;
  title?: string;
  price: number;
  badge?: string;      
  rating?: number;     
  originalPrice?: number; 
  onAddToCart?: () => void;
};