import React, { useState } from 'react';

const AdminPanel: React.FC = () => {
  const [tab, setTab] = useState<'companies' | 'projects' | 'units'>('companies');
  // بيانات وهمية للعرض فقط
  const [companies] = useState([
    { id: 1, name: 'شركة عقار مصر' },
    { id: 2, name: 'ريبورتاج الإمارات' },
    { id: 3, name: 'ماونتن فيو' },
  ]);
  const [projects] = useState([
    { id: 1, name: 'كمبوند النخيل', status: 'تحت التنفيذ' },
    { id: 2, name: 'برج الريادة', status: 'انتهى الطرح' },
  ]);
  const [units] = useState([
    { id: 1, title: 'قصر فاخر في القاهرة', status: 'مباع' },
    { id: 2, title: 'فيلا راقية في دبي', status: 'متاح' },
  ]);

  return (
    <div className="container card" style={{marginTop:32}}>
      <h2 style={{textAlign:'center'}}>لوحة تحكم الإدارة (تجريبية)</h2>
      <div style={{display:'flex',gap:8,justifyContent:'center',margin:'16px 0'}}>
        <button className="btn" onClick={()=>setTab('companies')}>شركات التطوير</button>
        <button className="btn" onClick={()=>setTab('projects')}>المشروعات</button>
        <button className="btn" onClick={()=>setTab('units')}>الوحدات</button>
      </div>
      {tab==='companies' && (
        <div>
          <h3>شركات التطوير العقاري</h3>
          <ul>{companies.map(c=>(<li key={c.id}>{c.name}</li>))}</ul>
        </div>
      )}
      {tab==='projects' && (
        <div>
          <h3>المشروعات</h3>
          <ul>{projects.map(p=>(<li key={p.id}>{p.name} - {p.status}</li>))}</ul>
        </div>
      )}
      {tab==='units' && (
        <div>
          <h3>الوحدات العقارية</h3>
          <ul>{units.map(u=>(<li key={u.id}>{u.title} - {u.status}</li>))}</ul>
        </div>
      )}
      <div style={{marginTop:16,fontSize:13,color:'#888'}}>هذه اللوحة للعرض فقط، وسيتم تفعيل الإضافة والتعديل والربط لاحقاً بعد معاينة التطبيق.</div>
    </div>
  );
};

export default AdminPanel;
