 export type PixPayment = {
  payment_method: "pix";      
  amount: number;     
  transactionId: string;  
  status: "waiting_payment" | "paid" | "refused" | "expired"; 
  createdAt: string;         
  qrCodeUrl: string;       
  expiresAt: string;    
  copyQR: string;  
};

