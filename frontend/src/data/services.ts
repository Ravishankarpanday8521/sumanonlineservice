export type Category = 'Digital Services' | 'Cyber Café Work' | 'Banking Services';
export type Service = { id: string; title: string; description: string; category: Category };

export const services: Service[] = [
  // Digital Services
  { id: 'aadhaar', title: 'Aadhaar Update / New', description: 'Enrollment, update, and corrections assistance.', category: 'Digital Services' },
  { id: 'pan', title: 'PAN Card Apply / Correction', description: 'New PAN, corrections, and reprint services.', category: 'Digital Services' },
  { id: 'ration', title: 'Ration Card Apply', description: 'Application and guidance for ration cards.', category: 'Digital Services' },
  { id: 'dl', title: 'Driving License Apply / Renewal', description: 'DL application, renewal, and slot booking.', category: 'Digital Services' },
  { id: 'eshram', title: 'E-Shram Card', description: 'Registration and updates for e-Shram.', category: 'Digital Services' },
  { id: 'ayushman', title: 'Ayushman Card', description: 'PM-JAY card enrollment assistance.', category: 'Digital Services' },
  { id: 'voter', title: 'Voter ID Apply', description: 'New voter ID and corrections.', category: 'Digital Services' },
  { id: 'passport', title: 'Passport Apply', description: 'Online passport application support.', category: 'Digital Services' },
  { id: 'birth-certificate', title: 'Birth Certificate', description: 'Birth certificate application and corrections.', category: 'Digital Services' },
  { id: 'death-certificate', title: 'Death Certificate', description: 'Death certificate application and corrections.', category: 'Digital Services' },
  { id: 'caste-certificate', title: 'Caste Certificate', description: 'Caste certificate application and verification.', category: 'Digital Services' },
  { id: 'income-certificate', title: 'Income Certificate', description: 'Income certificate application and verification.', category: 'Digital Services' },
  { id: 'domicile-certificate', title: 'Domicile Certificate', description: 'Domicile certificate application and verification.', category: 'Digital Services' },
  { id: 'marriage-certificate', title: 'Marriage Certificate', description: 'Marriage certificate registration and verification.', category: 'Digital Services' },
  { id: 'pension', title: 'Pension Services', description: 'Old age, widow, and disability pension applications.', category: 'Digital Services' },
  { id: 'scholarship', title: 'Scholarship Application', description: 'Educational scholarship applications and renewals.', category: 'Digital Services' },
  // Cyber Café Work
  { id: 'forms', title: 'Online Forms', description: 'Form filling for government and private services.', category: 'Cyber Café Work' },
  { id: 'print', title: 'Printout / Xerox', description: 'Quality prints and photocopies.', category: 'Cyber Café Work' },
  { id: 'scan', title: 'Scan & Email', description: 'Document scanning and emailing.', category: 'Cyber Café Work' },
  { id: 'photo', title: 'Photo Editing', description: 'Basic edits for documents and IDs.', category: 'Cyber Café Work' },
  { id: 'resume', title: 'Resume / CV Creation', description: 'Professional resume and CV creation.', category: 'Cyber Café Work' },
  { id: 'typing', title: 'Typing Work', description: 'Document typing and data entry services.', category: 'Cyber Café Work' },
  { id: 'laminating', title: 'Laminating Services', description: 'Document and photo laminating services.', category: 'Cyber Café Work' },
  { id: 'binding', title: 'Book Binding', description: 'Document and book binding services.', category: 'Cyber Café Work' },
  { id: 'notary', title: 'Notary Services', description: 'Document notarization and attestation.', category: 'Cyber Café Work' },
  // Banking Services
  { id: 'transfer', title: 'Money Transfer', description: 'Domestic money transfer services.', category: 'Banking Services' },
  { id: 'aeps', title: 'AEPS Cash Withdrawal', description: 'Aadhar-enabled payment services.', category: 'Banking Services' },
  { id: 'recharge', title: 'Mobile/DTH Recharge', description: 'Prepaid mobile and DTH recharges.', category: 'Banking Services' },
  { id: 'bills', title: 'Electricity/Water Bill Payment', description: 'Pay your utility bills easily.', category: 'Banking Services' },
  { id: 'gas-bill', title: 'Gas Bill Payment', description: 'LPG gas cylinder booking and bill payment.', category: 'Banking Services' },
  { id: 'insurance-payment', title: 'Insurance Premium Payment', description: 'Life and health insurance premium payments.', category: 'Banking Services' },
  { id: 'loan-application', title: 'Loan Application', description: 'Personal, home, and vehicle loan applications.', category: 'Banking Services' },
  { id: 'credit-card', title: 'Credit Card Application', description: 'Credit card application and services.', category: 'Banking Services' },
  { id: 'mutual-fund', title: 'Mutual Fund Services', description: 'Mutual fund investment and SIP services.', category: 'Banking Services' },
  { id: 'fastag', title: 'FASTag Services', description: 'FASTag application, recharge, and management.', category: 'Banking Services' },
];

export const categories: Category[] = ['Digital Services', 'Cyber Café Work', 'Banking Services'];
