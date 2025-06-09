#!/bin/bash
# سكريبت لتشغيل تطبيق BaitVR وتنظيف الكاش وحل مشاكل المنافذ
# نقطة رجوع احتياطية بتاريخ: 2025-06-08
# لاسترجاع النسخة الاحتياطية الحالية، نفذ: sh run-baitvr.sh restore

BACKUP_DIR="backup_2025_06_08"
APP_DIR="baitvr-app"

if [ "$1" == "restore" ]; then
  echo "استرجاع النسخة الاحتياطية..."
  rm -rf $APP_DIR
  cp -r $BACKUP_DIR $APP_DIR
  echo "تم الاسترجاع بنجاح."
  exit 0
fi

# إنشاء نسخة احتياطية
if [ -d "$BACKUP_DIR" ]; then
  echo "النسخة الاحتياطية موجودة بالفعل."
else
  cp -r $APP_DIR $BACKUP_DIR
  echo "تم إنشاء النسخة الاحتياطية في $BACKUP_DIR."
fi

# تنظيف كاش Next.js
rm -rf .next

# تثبيت الحزم
npm install

# تشغيل التطبيق على المنفذ 3000 أو منفذ بديل إذا كان مشغول
PORT=3000
npx next dev -p $PORT || npx next dev -p 4000
