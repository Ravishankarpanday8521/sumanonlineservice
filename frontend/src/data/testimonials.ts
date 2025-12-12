export type Testimonial = { 
  id: string;
  name: string; 
  messageEn: string;
  messageHi: string;
  location?: string;
};

export const testimonials: Testimonial[] = [
  { 
    id: 'rahul',
    name: 'Rahul Singh', 
    messageEn: 'Quick and reliable service. Got my PAN updated without any hassle!', 
    messageHi: 'त्वरित और विश्वसनीय सेवा। बिना किसी परेशानी के मेरा पैन अपडेट हो गया!',
    location: 'Patna' 
  },
  { 
    id: 'priya',
    name: 'Priya Sharma', 
    messageEn: 'They guided me through the passport application. Very helpful!', 
    messageHi: 'उन्होंने मुझे पासपोर्ट आवेदन में मार्गदर्शन किया। बहुत मददगार!',
    location: 'Ranchi' 
  },
  { 
    id: 'ankit',
    name: 'Ankit Verma', 
    messageEn: 'Best place for online forms and printing. Highly recommended!', 
    messageHi: 'ऑनलाइन फॉर्म और प्रिंटिंग के लिए सबसे अच्छी जगह। अत्यधिक अनुशंसित!',
    location: 'Gaya' 
  },
  { 
    id: 'sanjay',
    name: 'Sanjay Kumar', 
    messageEn: 'Excellent service for Aadhaar card updates. The staff is very professional and helpful.', 
    messageHi: 'आधार कार्ड अपडेट के लिए उत्कृष्ट सेवा। स्टाफ बहुत पेशेवर और मददगार है।',
    location: 'Madhubani' 
  },
  { 
    id: 'kavita',
    name: 'Kavita Devi', 
    messageEn: 'Got my driving license renewed quickly. Great experience with Suman Online Services!', 
    messageHi: 'मेरा ड्राइविंग लाइसेंस जल्दी नवीकृत हो गया। सुमन ऑनलाइन सर्विसेज के साथ शानदार अनुभव!',
    location: 'Darbhanga' 
  },
  { 
    id: 'amit',
    name: 'Amit Kumar', 
    messageEn: 'Very satisfied with their banking services. They helped me open a new account easily.', 
    messageHi: 'उनकी बैंकिंग सेवाओं से बहुत संतुष्ट। उन्होंने मुझे आसानी से नया खाता खोलने में मदद की।',
    location: 'Sitamarhi' 
  },
  { 
    id: 'neha',
    name: 'Neha Singh', 
    messageEn: 'Best place for all government document work. Trustworthy and efficient service.', 
    messageHi: 'सभी सरकारी दस्तावेज़ कार्य के लिए सबसे अच्छी जगह। भरोसेमंद और कुशल सेवा।',
    location: 'Muzaffarpur' 
  },
  { 
    id: 'rajesh',
    name: 'Rajesh Yadav', 
    messageEn: 'They helped me with ration card application. The process was smooth and quick.', 
    messageHi: 'उन्होंने मुझे राशन कार्ड आवेदन में मदद की। प्रक्रिया सुचारू और त्वरित थी।',
    location: 'Samastipur' 
  },
  { 
    id: 'puja',
    name: 'Puja Kumari', 
    messageEn: 'Excellent support for e-Shram card registration. Very knowledgeable staff.', 
    messageHi: 'ई-श्रम कार्ड पंजीकरण के लिए उत्कृष्ट सहायता। बहुत जानकार स्टाफ।',
    location: 'Begusarai' 
  },
  { 
    id: 'vivek',
    name: 'Vivek Thakur', 
    messageEn: 'Great service for money transfer and AEPS. Highly reliable and fast.', 
    messageHi: 'मनी ट्रांसफर और एईपीएस के लिए बेहतरीन सेवा। अत्यधिक विश्वसनीय और तेज़।',
    location: 'Saharsa' 
  },
  { 
    id: 'sunita',
    name: 'Sunita Devi', 
    messageEn: 'They helped me with Ayushman card enrollment. Very patient and helpful team.', 
    messageHi: 'उन्होंने मुझे आयुष्मान कार्ड नामांकन में मदद की। बहुत धैर्यवान और मददगार टीम।',
    location: 'Supaul' 
  },
  { 
    id: 'manoj',
    name: 'Manoj Kumar', 
    messageEn: 'Best CSC center in the area. They handle all types of government services efficiently.', 
    messageHi: 'क्षेत्र में सबसे अच्छा सीएससी केंद्र। वे सभी प्रकार की सरकारी सेवाओं को कुशलतापूर्वक संभालते हैं।',
    location: 'Madhepura' 
  },
];
