# SilmuGym — Vercel deployment

## 1. Vercel import

GitHub repository’ni Vercel’da import qiling. Root Directory — repository root. `vercel.json` Vite static output va SPA deep-link routing’ini sozlaydi.

## 2. Environment Variables

Bu demo landing page lokal rasmlar bilan ishlaydi va AI/Gemini secret talab qilmaydi. Vercel’da qo‘shimcha environment variable kiritmasdan deploy qilishingiz mumkin.

Agar keyinchalik Manus OAuth yoki server funksiyalarini ishlatsangiz, ularning env qiymatlarini alohida qo‘shing.

## 3. Deploy

Environment variable’siz ham yangi Production Deployment yarating. Vercel build `pnpm build:client` orqali bajariladi.

## 4. Tekshirish

- `/` — SilmuGym landing page
- `/` sahifasini refresh qilish — SPA rewrite ishlashi kerak
- Hero, story va performance rasmlari `/images/` ichidan yuklanadi
- Rasmlar uchun Manus storage yoki tashqi API kerak emas
