import { propertyImages } from '../data/backgrounds';

// صور رمزية افتراضية للوحدات (قصور، فيلات، شقق، عيادات، محلات، مكاتب)
// export const propertyImages = {
//   palace: '/images/palace.jpg',
//   villa: '/images/villa.jpg',
//   apartment: '/images/apartment.jpg',
//   clinic: '/images/clinic.jpg',
//   shop: '/images/shop.jpg',
//   office: '/images/office.jpg',
// };

// توليد بيانات ضخمة للوحدات (50 قصر، 50 فيلا، 50 شقة، 50 عيادة، 50 محل، 50 مكتب)
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
    { name: 'مصر', city: 'القاهرة', lng: 31.2357, lat: 30.0444 },
    { name: 'الإمارات', city: 'دبي', lng: 55.2708, lat: 25.2048 },
    { name: 'السعودية', city: 'الرياض', lng: 46.6753, lat: 24.7136 },
    { name: 'الكويت', city: 'مدينة الكويت', lng: 47.9783, lat: 29.3759 },
    { name: 'البحرين', city: 'المنامة', lng: 50.5832, lat: 26.2235 },
    { name: 'قطر', city: 'الدوحة', lng: 51.5310, lat: 25.2854 },
    { name: 'عمان', city: 'مسقط', lng: 58.3829, lat: 23.5880 },
    { name: 'الأردن', city: 'عمّان', lng: 35.9106, lat: 31.9632 },
    { name: 'الجزائر', city: 'الجزائر العاصمة', lng: 3.0588, lat: 36.7538 },
    { name: 'المغرب', city: 'الدار البيضاء', lng: -7.5898, lat: 33.5731 },
  ];
  let arr: any[] = [];
  let id = 1;
  types.forEach((t) => {
    for (let i = 0; i < 50; i++) {
      const country = countries[i % countries.length];
      arr.push({
        id: id++,
        title: `${t.title} ${i + 1} في ${country.city}`,
        type: t.type,
        location: `${country.name} - ${country.city}`,
        status: i % 7 === 0 ? 'مباع' : 'متاح',
        image: t.img,
        details: `${t.title} بمواصفات عالمية، رقم الوحدة ${i + 1}.`,
        lng: country.lng,
        lat: country.lat,
      });
    }
  });
  return arr;
}

export const properties = generateProperties();

// توليد بيانات ضخمة للمشروعات (50 مشروع)
export const projects = Array.from({ length: 50 }).map((_, i) => {
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
  const country = countries[i % countries.length];
  return {
    id: i + 1,
    name: `مشروع ${i + 1} في ${country.city}`,
    country: country.name,
    status: i % 3 === 0 ? 'انتهى الطرح' : 'تحت التنفيذ',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=600&q=80',
    details: `مشروع عقاري مميز رقم ${i + 1} في ${country.city}.`
  };
});
