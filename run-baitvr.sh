#!/bin/bash
# سكريبت لتشغيل تطبيق BaitVR وتنظيف الكاش وحل مشاكل المنافذ

cd baitvr-app || exit 1

# تنظيف كاش Next.js
rm -rf .next

# تثبيت الحزم
npm install

# تشغيل التطبيق على المنفذ 3000 أو منفذ بديل إذا كان مشغول
PORT=3000
npx next dev -p $PORT || npx next dev -p 4000
