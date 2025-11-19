// Data JSON untuk konten dinamis portfolio ADEVART
const DATA = {
  hero: [
    {
      image: 'images/G2_ELITE.png',
      kicker: '3D • Environment • Unreal',
      title: 'Immersive worlds with clean, production-ready pipeline.',
      lead: 'Modular scenes, stylized props, and UE5 cinematics — optimized naming, LODs, and material instancing.',
  cta: [{text:'View Works', href:'#works', type:'primary'}, {text:'Work Experience', href:'#work-experience', type:'ghost'}]
    },
    {
      image: 'images/G2_ELITE.png',
      kicker: 'Realtime & Optimization',
      title: 'Lower draw calls with trim/atlas workflows.',
      lead: 'Consistent texel density, UV packing, and master material instances for speed and reuse.',
  cta: [{text:'About Me', href:'#about', type:'primary'}, {text:'Hire Me', href:'#contact', type:'ghost'}]
    },
    {
      image: 'images/G2_ELITE.png',
      kicker: 'Sequencer',
      title: 'Cinematic shots & trailers with UE5 Sequencer.',
      lead: 'From previs to final cut — lighting, timing, and composition for compelling storytelling.',
  cta: [{text:'See Cinematics', href:'#works', type:'primary'}, {text:'YouTube', href:'#social', type:'ghost'}]
    }
  ],
  about: {
    title: 'Tentang Saya',
    description: 'Saya <strong>Adev</strong>, 3D artist fokus environment believable dan pipeline rapi (Blender, Substance, UE5.6+). Konsistensi penamaan (SM_, MI_, T_, SK_), LOD, material instancing.',
    skills: ['Environment', 'Props', 'Cinematic', 'Trim/Atlas', 'Nanite/Lumen', 'Sequencer']
  },
  workExperience: [
    {
      id: 'w1',
      logo: 'images/G2_ELITE.png',
      name: 'BanaspaTeam (Indie Collaboration)',
      subtitle: 'Indie Game & Media Collaboration',
      duration: '8 bulan (2023-2024)',
      link: 'work-banaspa.html',
      tags: ['Environment Art', 'Props Modeling', 'Unreal Integration'],
      project: 'Stylized Ramen Shop Environment',
      details: [
        'Blockout → High/Low → UV → Bake → PBR (Mask/ORM)',
        'Modular pieces + trim sheet untuk reuse',
        'Optimized for UE5 (Nanite/Lumen-ready, LODs)'
      ],
      image: 'images/G2_ELITE.png'
    },
    {
      id: 'w2',
      logo: 'images/G2_ELITE.png',
      name: 'Maxxima (Production Services)',
      subtitle: 'Production Services & Visualization',
      duration: '6 bulan (2024-sekarang)',
      link: 'work-maxxima.html',
      tags: ['Hard-Surface Props', 'Lookdev', 'Render Pipeline'],
      project: 'Industrial Props Pack',
      details: [
        'Trim + Atlas workflow untuk draw call rendah',
        'Texel density konsisten & penamaan (SM_, MI_, T_*)',
        'Master Material instances dengan switches (AO/Detail/Rough)'
      ],
      image: 'images/G2_ELITE.png'
    }
  ],
  works: [
  {title:'Desert Oasis — UE5 Environment', category:'Environment', tools:'UE5 / Blender / Substance', tags:['Nanite','Lumen'], image:'images/G2_ELITE.png'},
    {title:'Desert Oasis — UE5 Environment', category:'Environment', tools:'UE5 / Blender / Substance', tags:['Nanite','Lumen'], image:'images/G2_ELITE.png'},
  {title:'Ichiraku Ramen – Stylized Scene', category:'Environment', tools:'Blender / Painter', tags:['Stylized','Trim Sheet'], image:'images/G2_ELITE.png'},
  {title:'Props Pack — Industrial', category:'Props', tools:'Blender / Designer', tags:['Atlas','Optimization'], image:'images/G2_ELITE.png'},
  {title:'Cinematic Shot — Mother\'s Day', category:'Cinematic', tools:'UE5 Sequencer / DaVinci', tags:['Sequencer','Lighting'], image:'images/G2_ELITE.png'}
  ],
  social: [
    {name: 'ArtStation', url: 'https://www.artstation.com/adevart'},
    {name: 'Behance', url: 'https://www.behance.net'},
    {name: 'Instagram', url: 'https://instagram.com'},
    {name: 'YouTube', url: 'https://www.youtube.com/@ADevGaming'}
  ],
  contact: {
    title: 'Contact',
    subtitle: 'Email saya:',
    email: 'adevart.id@gmail.com'
  }
};
