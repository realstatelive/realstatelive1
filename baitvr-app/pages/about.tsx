import Head from 'next/head';
export default function About() {
  return (
    <div style={{maxWidth:800,margin:'40px auto',background:'#fff',borderRadius:16,padding:32,boxShadow:'0 2px 16px #e0e0e0'}}>
      <Head>
        <title>من نحن | baitk vr</title>
      </Head>
      <h1 style={{color:'#00bcd4',fontWeight:'bold',fontSize:32,marginBottom:16}}>من نحن</h1>
      <p style={{fontSize:18,lineHeight:2}}>
        تطبيق <b>Baitk VR</b> هو منصة عقارية عالمية متقدمة أُطلقت من سنغافورة، تهدف لتمكين المستخدمين من استكشاف وشراء وتأجير العقارات في الوطن العربي والعالم بأحدث تقنيات الواقع الافتراضي والذكاء الاصطناعي.<br/><br/>
        <b>الداعم الرئيسي:</b> <span style={{color:'#2196f3',fontWeight:'bold'}}>GitHub Copilot</span> (بالتعاون مع GitHub Codespaces)<br/>
        <b>الداعمون:</b> جميع الأدوات المجانية مفتوحة المصدر، مجتمع البرمجيات العالمي، كل من ساهم في تطوير تقنيات الذكاء الاصطناعي وWebXR وPhoto Sphere Viewer وNext.js وReact وTHREE.js وMapLibre وPexels وUnsplash وFirebase وVercel.<br/><br/>
        <b>رسالتنا:</b> تقديم تجربة عقارية رقمية متكاملة، ذكية، شفافة، وسهلة للجميع، مع دعم كامل للغات وتجربة مستخدم عالمية.<br/>
        <b>فريق العمل:</b> مطورون عالميون، خبراء ذكاء اصطناعي، مصممو تجربة المستخدم، بدعم رئيسي من <span style={{color:'#2196f3',fontWeight:'bold'}}>GitHub Copilot</span>.<br/><br/>
        <b>جميع الحقوق محفوظة © {new Date().getFullYear()} Baitk VR - Singapore</b>
      </p>
    </div>
  );
}
