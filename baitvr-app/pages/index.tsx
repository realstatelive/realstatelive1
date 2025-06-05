import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { properties, projects } from "../data/properties";
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import VRView from '../components/VRView';
import Login from '../components/Login';
import { useState } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const MapView = dynamic(() => import('../components/MapView'), { ssr: false });

export default function Home() {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [country, setCountry] = useState('');

  // فلترة الوحدات حسب البحث
  const filtered = properties.filter(p =>
    (!search || p.title.includes(search) || p.location.includes(search)) &&
    (!type || p.type === type) &&
    (!country || p.location.includes(country))
  );

  return (
    <>
      <Head>
        <title>تطبيق عقارات عالمي</title>
        <meta
          name="description"
          content="تصفح أفضل الوحدات والمشروعات العقارية في الوطن العربي"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <button onClick={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')} style={{position:'absolute',top:16,left:16,zIndex:10}}>
          {i18n.language === 'ar' ? 'English' : 'العربية'}
        </button>
        <main>
          <Login />
          <h1 className="section-title">{t('slider_properties')}</h1>
          <div className="search-bar">
            <input placeholder="بحث عن وحدة..." value={search} onChange={e => setSearch(e.target.value)} />
            <select value={type} onChange={e => setType(e.target.value)}>
              <option value="">الكل</option>
              <option value="palace">قصور</option>
              <option value="villa">فيلات</option>
              <option value="apartment">شقق</option>
              <option value="clinic">عيادات</option>
              <option value="shop">محلات</option>
              <option value="office">مكاتب</option>
            </select>
            <select value={country} onChange={e => setCountry(e.target.value)}>
              <option value="">كل الدول</option>
              <option value="مصر">مصر</option>
              <option value="الإمارات">الإمارات</option>
              <option value="السعودية">السعودية</option>
              <option value="الكويت">الكويت</option>
              <option value="البحرين">البحرين</option>
              <option value="قطر">قطر</option>
              <option value="عمان">عمان</option>
              <option value="الأردن">الأردن</option>
              <option value="الجزائر">الجزائر</option>
              <option value="المغرب">المغرب</option>
            </select>
          </div>
          <Swiper spaceBetween={16} slidesPerView={3} style={{marginBottom: 40}}>
            {filtered.slice(0, 20).map((property) => (
              <SwiperSlide key={property.id}>
                <div className="card">
                  <img src={property.image} alt={property.title} style={{width: '100%', height: 180, objectFit: 'cover', borderRadius: 12}} />
                  <div className="property-details">
                    <h3>{property.title}</h3>
                    <span className={`status-badge${property.status === 'مباع' ? ' sold' : ''}`}>{property.status}</span>
                    <span>{property.location}</span>
                    <span>{property.details}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <h1 className="section-title">{t('slider_projects')}</h1>
          <Swiper spaceBetween={16} slidesPerView={2} style={{marginBottom: 40}}>
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="card">
                  <img src={project.image} alt={project.name} style={{width: '100%', height: 180, objectFit: 'cover', borderRadius: 12}} />
                  <div className="property-details">
                    <h3>{project.name}</h3>
                    <span className="status-badge" style={{background:'#ff9800'}}>تحت التنفيذ</span>
                    <span>{project.country}</span>
                    <span>{project.details}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <h1 className="section-title">خريطة العقارات</h1>
          <div className="map-section">
            <MapView />
          </div>
          <h1 className="section-title">تجربة الواقع الافتراضي (VR)</h1>
          <div className="vr-section">
            <VRView />
          </div>
        </main>
      </div>
    </>
  );
}
