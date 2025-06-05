// صور رمزية افتراضية للوحدات (قصور، فيلات، شقق، عيادات، محلات، مكاتب)
export const propertyImages = {
  palace: '/images/palace.jpg',
  villa: '/images/villa.jpg',
  apartment: '/images/apartment.jpg',
  clinic: '/images/clinic.jpg',
  shop: '/images/shop.jpg',
  office: '/images/office.jpg',
};

// توليد بيانات ضخمة للوحدات (100 وحدة لكل نوع)
function generateProperties() {
  const types = [
    { type: 'palace', title: 'قصر', img: propertyImages.palace },
    { type: 'villa', title: 'فيلا', img: propertyImages.villa },
    { type: 'apartment', title: 'شقة', img: propertyImages.apartment },
    { type: 'clinic', title: 'عيادة', img: propertyImages.clinic },
    { type: 'shop', title: 'محل', img: propertyImages.shop },
    { type: 'office', title: 'مكتب', img: propertyImages.office },
  ];
  const countries = [
    { name: 'مصر', city: 'القاهرة' },
    { name: 'الإمارات', city: 'دبي' },
    { name: 'السعودية', city: 'الرياض' },
    { name: 'الكويت', city: 'مدينة الكويت' },
    { name: 'البحرين', city: 'المنامة' },
    { name: 'قطر', city: 'الدوحة' },
    { name: 'عمان', city: 'مسقط' },
    { name: 'الأردن', city: 'عمّان' },
    { name: 'الجزائر', city: 'الجزائر العاصمة' },
    { name: 'المغرب', city: 'الدار البيضاء' },
  ];
  let arr: any[] = [];
  let id = 1;
  types.forEach((t) => {
    for (let i = 0; i < 100; i++) {
      const country = countries[i % countries.length];
      arr.push({
        id: id++,
        title: `${t.title} ${i + 1} في ${country.city}`,
        type: t.type,
        location: `${country.name} - ${country.city}`,
        status: i % 7 === 0 ? 'مباع' : 'متاح',
        image: t.img,
        details: `${t.title} بمواصفات عالمية، رقم الوحدة ${i + 1}.`,
      });
    }
  });
  return arr;
}

export const properties = generateProperties();

// بيانات افتراضية للمشروعات تحت التنفيذ
export const projects = [
  {
    id: 1,
    name: 'كمبوند النخيل',
    country: 'مصر',
    status: 'تحت التنفيذ',
    image: '/images/project1.jpg',
    details: 'مشروع سكني متكامل الخدمات في القاهرة الجديدة.'
  },
  {
    id: 2,
    name: 'برج الريادة',
    country: 'الإمارات',
    status: 'تحت التنفيذ',
    image: '/images/project2.jpg',
    details: 'برج سكني وتجاري في دبي مارينا.'
  },
  {
    id: 3,
    name: 'مركز الأعمال الحديث',
    country: 'السعودية',
    status: 'تحت التنفيذ',
    image: '/images/project3.jpg',
    details: 'مركز أعمال متطور في الرياض.'
  }
];
