// "Documents needed" pages. Each entry gets its own address, /needed/<slug>,
// so the shop can send a customer one link on WhatsApp that lists exactly what
// to bring. Every line is written in Tamil (ta) and English (en).
// `about` is a plain-language line on what the certificate is for, because
// most customers have never applied for one before.
// This file is plain data: vite.config.js also reads it to build one HTML file per page.

export const NEEDED_BASE = "/needed";

export const NEEDED = [
  {
    slug: "community-certificate",
    icon: "certificate",
    ta: "ஜாதி சான்றிதழ்",
    en: "Community Certificate",
    about: {
      ta: "உங்கள் சமூகம் (ஜாதி) பற்றிய அரசு சான்று. பள்ளி / கல்லூரி சேர்க்கை, இட ஒதுக்கீடு, கல்வி உதவித்தொகை மற்றும் அரசு வேலை விண்ணப்பங்களுக்குத் தேவைப்படும்.",
      en: "Government proof of your community (caste). Asked for in school and college admissions, reservation, scholarships and government job applications.",
    },
    lead: {
      ta: "ஜாதி சான்றிதழ் புதிதாக விண்ணப்பிக்கத் தேவையான ஆவணங்கள்",
      en: "Documents required to apply for a new Community Certificate",
    },
    lists: [
      {
        items: [
          { ta: "விண்ணப்பதாரரின் புகைப்படம்", en: "Applicant's passport size photograph" },
          { ta: "ஆதார் அட்டை", en: "Aadhaar Card" },
          { ta: "ரேஷன் கார்டு", en: "Ration Card" },
          { ta: "தந்தை அல்லது தந்தைவழி உறவினரின் ஜாதி சான்றிதழ்", en: "Father's or paternal relative's Community Certificate" },
        ],
      },
    ],
    note: {
      ta: "தேவையான ஆவணங்களின் அசல்களை எடுத்துவரவும்.",
      en: "Please bring the original documents for verification.",
    },
  },
  {
    slug: "first-graduate-certificate",
    icon: "graduate",
    ta: "முதல் பட்டதாரி சான்றிதழ்",
    en: "First Graduate Certificate",
    about: {
      ta: "குடும்பத்தில் முதன்முறையாகக் கல்லூரிக்குச் செல்லும் மாணவருக்கானது. கல்லூரி சேர்க்கையில் கட்டணச் சலுகை பெற இது தேவைப்படும்.",
      en: "For a student who is the first in the family to go to college. Used to claim the first-graduate fee concession during college admission.",
    },
    lead: {
      ta: "முதல் பட்டதாரி சான்றிதழ் விண்ணப்பிக்கத் தேவையான ஆவணங்கள்",
      en: "Documents required to apply for a First Graduate Certificate",
    },
    lists: [
      {
        items: [
          { ta: "விண்ணப்பதாரரின் ஆதார் அட்டை", en: "Applicant's Aadhaar Card" },
          { ta: "விண்ணப்பதாரரின் புகைப்படம் – 1", en: "One passport size photograph" },
          { ta: "தாய் மற்றும் தந்தையின் கல்விச் சான்றிதழ்கள்", en: "Educational certificates of father and mother" },
          { ta: "கல்விச் சான்றிதழ்கள் இல்லையெனில் தாய் மற்றும் தந்தையின் ஆதார் அட்டைகள்", en: "If educational certificates are unavailable, Aadhaar Cards of father and mother" },
          { ta: "தந்தையின் தாய் மற்றும் தந்தையின் பெயர் மற்றும் வயது விவரங்கள்", en: "Names and ages of paternal grandparents (father's parents)" },
          { ta: "தாயின் தாய் மற்றும் தந்தையின் பெயர் மற்றும் வயது விவரங்கள்", en: "Names and ages of maternal grandparents (mother's parents)" },
          { ta: "விண்ணப்பதாரரின் 12ஆம் வகுப்பு மதிப்பெண் சான்றிதழ்", en: "Applicant's 12th standard mark sheet" },
          { ta: "ரேஷன் கார்டு", en: "Ration Card" },
        ],
      },
    ],
    note: {
      ta: "தாத்தா, பாட்டியின் ஆவணங்கள் தேவையில்லை. பெயர் மற்றும் வயது விவரங்கள் மட்டும் போதுமானது.",
      en: "Grandparents' documents are not required. Only their names and ages are needed.",
    },
  },
  {
    slug: "labour-welfare-registration",
    icon: "worker",
    ta: "நலவாரிய புதிய பதிவு",
    en: "Labour Welfare Board – New Registration",
    about: {
      ta: "கட்டுமானத் தொழிலாளர்கள், ஓட்டுநர்கள் போன்ற அமைப்புசாரா தொழிலாளர்கள் நலவாரியத்தில் பதிவு செய்தால் அரசின் நல உதவிகளைப் பெறலாம்.",
      en: "Workers such as construction workers and drivers register with the welfare board to receive government welfare benefits.",
    },
    lead: {
      ta: "நலவாரியத்தில் புதிதாகப் பதிவு செய்யத் தேவையான ஆவணங்கள்",
      en: "Documents required for new Labour Welfare Board registration",
    },
    lists: [
      {
        items: [
          { ta: "கணவன், மனைவி மற்றும் திருமணமாகாத குழந்தைகளின் ஆதார் அட்டைகள்", en: "Aadhaar Cards of husband, wife and unmarried children" },
          { ta: "விண்ணப்பதாரரின் புகைப்படம்", en: "Applicant's passport size photograph" },
          { ta: "ரேஷன் கார்டு", en: "Ration Card" },
          { ta: "வங்கி கணக்குப் புத்தகம் (Bank Passbook)", en: "Bank Passbook" },
          { ta: "SC/ST பிரிவினருக்கு ஜாதிச் சான்றிதழ்", en: "Community Certificate (for SC/ST applicants)" },
          { ta: "பள்ளிச் சான்றிதழ் (இருப்பின்)", en: "School Certificate (if available)" },
          { ta: "ஓட்டுநர் நலவாரியப் பதிவுக்கு ஓட்டுநர் உரிமம் அவசியம்", en: "Driving Licence (mandatory for Driver Welfare Board registration)" },
        ],
      },
    ],
    note: {
      ta: "தேவையான ஆவணங்களின் அசல்களை எடுத்துவரவும்.",
      en: "Please bring the original documents for verification.",
    },
  },
  {
    slug: "labour-welfare-renewal",
    icon: "renew",
    ta: "நலவாரிய புதுப்பித்தல்",
    en: "Labour Welfare Board – Renewal",
    about: {
      ta: "ஏற்கனவே நலவாரியத்தில் பதிவு செய்தவர்கள், உதவிகள் தொடர்ந்து கிடைக்க அட்டையைக் குறிப்பிட்ட காலத்தில் புதுப்பிக்க வேண்டும்.",
      en: "If you are already registered, the welfare board card has to be renewed on time to keep receiving benefits.",
    },
    lead: {
      ta: "ஏற்கனவே பதிவு செய்த நலவாரிய அட்டையைப் புதுப்பிக்கத் தேவையான ஆவணங்கள்",
      en: "Documents required for Labour Welfare Board renewal",
    },
    lists: [
      {
        items: [
          { ta: "பழைய நலவாரிய அட்டை", en: "Old Labour Welfare Board identity card" },
          { ta: "ரேஷன் கார்டு", en: "Ration Card" },
          { ta: "கணவன், மனைவி மற்றும் திருமணமாகாத குழந்தைகளின் ஆதார் அட்டைகள்", en: "Aadhaar Cards of husband, wife and unmarried children" },
          { ta: "வங்கி கணக்குப் புத்தகம்", en: "Bank Passbook" },
          { ta: "விண்ணப்பதாரரின் புகைப்படம்", en: "Applicant's passport size photograph" },
          { ta: "ஓட்டுநர் நலவாரிய உறுப்பினர்களுக்கு ஓட்டுநர் உரிமம்", en: "Driving Licence (for Driver Welfare Board members)" },
        ],
      },
    ],
    note: {
      ta: "தேவையான ஆவணங்களின் அசல்களை எடுத்துவரவும்.",
      en: "Please bring the original documents for verification.",
    },
  },
  {
    slug: "obc-certificate",
    icon: "idcard",
    ta: "OBC சான்றிதழ்",
    en: "OBC Certificate",
    about: {
      ta: "மத்திய அரசு வேலைகள், மத்திய கல்வி நிறுவனச் சேர்க்கை போன்றவற்றில் இதர பிற்படுத்தப்பட்ட வகுப்பினர் (OBC) இட ஒதுக்கீடு பெற இது தேவை.",
      en: "Needed to claim OBC reservation in central government jobs and admission to central government institutions.",
    },
    lead: {
      ta: "OBC சான்றிதழ் விண்ணப்பிக்கத் தேவையான ஆவணங்கள்",
      en: "Documents required to apply for an OBC Certificate",
    },
    lists: [
      {
        items: [
          { ta: "விண்ணப்பதாரரின் புகைப்படம்", en: "Applicant's passport size photograph" },
          { ta: "ஆதார் அட்டை", en: "Aadhaar Card" },
          { ta: "ரேஷன் கார்டு", en: "Ration Card" },
          { ta: "ஜாதிச் சான்றிதழ்", en: "Community Certificate" },
          { ta: "வருமானச் சான்றிதழ் அல்லது அரசு ஊழியராக இருந்தால் சம்பளச் சான்று (Salary Slip)", en: "Income Certificate, or Salary Slip if you are a government employee" },
        ],
      },
    ],
    note: {
      ta: "தேவையான ஆவணங்களின் அசல்களை எடுத்துவரவும்.",
      en: "Please bring the original documents for verification.",
    },
  },
  {
    slug: "new-ration-card",
    icon: "family",
    ta: "புதிய ரேஷன் கார்டு (திருமணத்திற்குப் பின்)",
    en: "New Ration Card (after marriage)",
    about: {
      ta: "புதிதாகத் திருமணமான தம்பதியர் தனி ரேஷன் கார்டு பெற, முதலில் இருவரின் பெயரையும் பெற்றோர் வீட்டு ரேஷன் கார்டிலிருந்து நீக்க வேண்டும். பிறகு புதிய கார்டுக்கு விண்ணப்பிக்கலாம். இது மூன்று படிகளில் நடக்கும்.",
      en: "For a newly married couple to get their own ration card, both names must first be removed from their parents' ration cards. Then the new card is applied for. It happens in three steps.",
    },
    lead: {
      ta: "புதிதாகத் திருமணமான கணவன், மனைவி இருவரும் தனியாகப் புதிய ரேஷன் கார்டு விண்ணப்பிக்கத் தேவையான ஆவணங்கள்",
      en: "Documents required for a newly married couple applying for a separate new Ration Card",
    },
    lists: [
      {
        title: { ta: "படி 1: மணமகன் ரேஷன் கார்டிலிருந்து பெயர் நீக்கம்", en: "Step 1: Remove the groom's name from his family ration card" },
        items: [
          { ta: "மணமகன் வீட்டின் ரேஷன் கார்டில் பதிவு செய்யப்பட்ட தொலைபேசி எண்", en: "Mobile number registered on the groom's family ration card" },
          { ta: "திருமணப் புகைப்படம்", en: "Wedding photograph" },
          { ta: "திருமணப் பத்திரிகை", en: "Marriage invitation" },
          { ta: "மணமகன் அல்லது மணமகள் பெயரில் உள்ள கேஸ் இணைப்பு விவரம்", en: "Gas connection details in the groom's or bride's name" },
          { ta: "மணமகனின் ஆதார் அட்டை மற்றும் ஆதாருடன் இணைக்கப்பட்ட தொலைபேசி எண்", en: "Groom's Aadhaar Card and Aadhaar-linked mobile number" },
        ],
      },
      {
        title: { ta: "படி 2: மணமகள் ரேஷன் கார்டிலிருந்து பெயர் நீக்கம்", en: "Step 2: Remove the bride's name from her family ration card" },
        items: [
          { ta: "மணமகள் வீட்டின் ரேஷன் கார்டில் பதிவு செய்யப்பட்ட தொலைபேசி எண்", en: "Mobile number registered on the bride's family ration card" },
          { ta: "திருமணப் புகைப்படம்", en: "Wedding photograph" },
          { ta: "திருமணப் பத்திரிகை", en: "Marriage invitation" },
          { ta: "மணமகன் அல்லது மணமகள் பெயரில் உள்ள கேஸ் இணைப்பு விவரம்", en: "Gas connection details in the groom's or bride's name" },
          { ta: "மணமகளின் ஆதார் அட்டை மற்றும் ஆதாருடன் இணைக்கப்பட்ட தொலைபேசி எண்", en: "Bride's Aadhaar Card and Aadhaar-linked mobile number" },
        ],
      },
      {
        title: { ta: "படி 3: புதிய ரேஷன் கார்டு விண்ணப்பம்", en: "Step 3: Apply for the new ration card" },
        items: [
          { ta: "கணவன், மனைவி மற்றும் குழந்தைகள் இருப்பின் அவர்களின் ஆதார் அட்டைகள்", en: "Aadhaar Cards of husband, wife and children (if any)" },
          { ta: "ஆதாருடன் இணைக்கப்பட்ட தொலைபேசி எண்கள்", en: "Aadhaar-linked mobile numbers" },
          { ta: "மணமகன் அல்லது மணமகள் பெயரில் உள்ள கேஸ் இணைப்பு", en: "Gas connection in the groom's or bride's name" },
          { ta: "புதிய ரேஷன் கார்டு யார் பெயரில் வேண்டுமோ அவர்களின் புகைப்படம்", en: "One passport size photograph of the person in whose name the new card will be issued" },
        ],
      },
    ],
    note: {
      ta: "மணமகன் மற்றும் மணமகளின் ஆதார் முகவரி ஒரே இடத்தில் இருக்க வேண்டும்.",
      en: "The Aadhaar address of the groom and the bride should be the same, as per current government rules.",
    },
  },
  {
    slug: "ration-card-services",
    icon: "ration",
    ta: "ரேஷன் கார்டு சேவைகள்",
    en: "Ration Card Services",
    about: {
      ta: "ரேஷன் கார்டில் பெயர் சேர்த்தல், நீக்குதல், முகவரி மாற்றம், திருத்தம் போன்ற அனைத்தையும் எங்களிடம் செய்யலாம். என்ன ஆவணம் தேவை என்பதை வருவதற்கு முன் அழைத்துக் கேட்கவும்.",
      en: "Add or remove names, change the address or correct details on your ration card here. Call us before you come to check which documents your change needs.",
    },
    lead: {
      ta: "எங்களிடம் கிடைக்கும் ரேஷன் கார்டு தொடர்பான சேவைகள்",
      en: "Ration card services available with us",
    },
    kind: "services",
    lists: [
      {
        items: [
          { ta: "புதிய ரேஷன் கார்டு விண்ணப்பம்", en: "New Ration Card application" },
          { ta: "குடும்ப உறுப்பினர்களின் பெயர் நீக்கம்", en: "Removal of family members' names" },
          { ta: "குடும்ப உறுப்பினர்களின் பெயர் சேர்த்தல்", en: "Addition of family members' names" },
          { ta: "முகவரி மாற்றம்", en: "Address change" },
          { ta: "குடும்ப அட்டை திருத்தம்", en: "Ration card corrections" },
          { ta: "திருமணத்திற்குப் பிறகு தனி குடும்ப அட்டை விண்ணப்பம்", en: "Separate ration card after marriage", link: "new-ration-card" },
        ],
      },
    ],
  },
];

export const BRANCHES = [
  {
    ta: "முதன்மைக் கடை",
    en: "Main Branch",
    addressTa: "40, PKGR காம்ப்ளக்ஸ், அரசு மருத்துவமனை எதிரில், இராஜேந்திரா ரோடு, பழனி – 624 601.",
    addressEn: "40, PKGR Complex, Opposite Government Hospital, Rajendra Road, Palani – 624 601.",
    phones: [
      { label: "98436 66944", tel: "+919843666944" },
      { label: "72002 59009", tel: "+917200259009" },
    ],
  },
  {
    ta: "கிளைக் கடை",
    en: "Branch Office",
    addressTa: "1/55, பழனி ரோடு, யூனியன் ஆபீஸ் எதிர்புறம், தொப்பம்பட்டி.",
    addressEn: "1/55, Palani Road, Opposite Union Office, Thoppampatti.",
    phones: [
      { label: "99940 41300", tel: "+919994041300" },
      { label: "98436 66944", tel: "+919843666944" },
    ],
  },
];

export const WHY_US = [
  { ta: "அனைத்து வகையான அரசு சான்றிதழ்களுக்கும் ஆன்லைன் விண்ணப்ப சேவை", en: "Online application help for government certificates" },
  { ta: "புதிய விண்ணப்பம் மற்றும் புதுப்பித்தல் சேவைகள்", en: "New registration and renewal services" },
  { ta: "ஆவணங்கள் சரிபார்ப்பு மற்றும் விண்ணப்ப உதவி", en: "Document checking and application support" },
  { ta: "விரைவான மற்றும் நம்பகமான சேவை", en: "Fast and reliable service" },
];

export const NEEDED_DISCLAIMER = {
  ta: "சேவைகளுக்கான தகுதி, ஆவணங்கள் மற்றும் ஒப்புதல் ஆகியவை அரசின் தற்போதைய விதிமுறைகளுக்கு உட்பட்டவை. சான்றிதழ் வழங்குவது சம்பந்தப்பட்ட அரசு அலுவலகத்தின் அதிகாரத்திற்கு உட்பட்டது.",
  en: "Eligibility, documents and approval depend on current government rules. Issuing the certificate is decided by the concerned government office.",
};

export const neededPath = (slug) => (slug ? `${NEEDED_BASE}/${slug}` : NEEDED_BASE);
