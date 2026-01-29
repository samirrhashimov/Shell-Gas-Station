# Shell Yanacaqdoldurma Stansiyası (Mini App)

Bu layihə React + Vite istifadə edilərək hazırlanmış sadə bir mini tətbiqdir. Məqsəd `useState` və JSON faylı (`data/tarif.json`) vasitəsilə yanacaq seçimi, qiymət və hesablamaların necə təşkil olunmasını nümayiş etdirməkdir.

**Daha ətraflı oxu:** [React ilə mini Shell yanacaqdoldurma stansiyası — useState + JSON DB](https://medium.com/@samirrhashimov/react-ilə-mini-shell-yanacaqdoldurma-stansiyası-usestate-json-db-a154671fb21b)

---

## Başlanğıc

Tələb olunanlar:

- Node.js
- npm və ya yarn

Quraşdırma və işə salma:

```bash
npm install
npm run dev
```

## Layihə strukturu

- `src/` — mənbə fayllar
  - `components/` — komponentlər (`Content.jsx`, `Navbar.jsx` və s.)
- `data/tarif.json` — nümunə tarif məlumatları (lokal JSON DB kimi istifadə olunur)
- `index.html`, `package.json`, `vite.config.js` və s.

## İstifadəçi üçün qısa izah

Tətbiq istifadəçiyə yanacaq növü seçmək, miqdarı daxil etmək və ümumi məbləği görmək imkanı verir. Məzmun əsasən React `useState` hook-u ilə idarə olunur və `data/tarif.json` faylı nümunə verilənlər bazası kimi xidmət edir.

> Qeyd: Bu sayt yalnızca tədris məqsədlidir; Shell şirkəti ilə heç bir bağlantısı yoxdur. Real dünya ödəniş/logika sistemi təmin etmir.

## Texnologiyalar

- React
- Vite
- CSS
- Yerli JSON (data)

## Müəllif & Mənbə 📚

Müəllif: Samir Hashimov — layihə haqqında ətraflı texniki izahat üçün Medium yazısını oxuyun:

https://medium.com/@samirrhashimov/react-ilə-mini-shell-yanacaqdoldurma-stansiyası-usestate-json-db-a154671fb21b

---

**Lisenziya:** Açıq mənbə (istifadə və paylaşma sərbəstdir).