export interface Principal {
  id: string;
  name: string;
  country: string;
  flag: string;
  specialty: string;
  shortDescription: string;
  fullDescription: string;
  products: ProductCategory[];
  highlights: string[];
  logo?: string;
}

export interface ProductCategory {
  name: string;
  description: string;
  items?: string[];
}

export const principals: Principal[] = [
  {
    id: 'cancarb',
    name: 'Cancarb',
    country: 'Canada',
    flag: '🇨🇦',
    specialty: 'Thermal Carbon Black',
    shortDescription: 'The only company dedicated to manufacturing Thermal Carbon Black with 45,000 metric tons annual capacity.',
    fullDescription: `Cancarb is the only company dedicated to manufacturing Thermal Carbon Black. In addition to standard grades, the company offers a number of specialty thermal blacks, such as Stainless and Ultra Pure, and works with customers to match their unique product needs.

Cancarb has a team of approximately 60 employees who are committed to delivering customer service excellence throughout the global marketplace. Products are supported by a network of distributors and agents strategically located around the world, including the Americas, Asia, Europe and Africa.

The Cancarb plant in Medicine Hat, Alta., Canada was built in 1973 with two production lines and an original capacity of 40 million pounds. Additional lines were completed in 1985, 1996 and 2000, resulting in a plant with an annual capacity of 100 million pounds or 45,000 metric tons.

Consistent with our commitment to environmental responsibility, Cancarb added a waste heat recovery power plant to its facility in 2000. This unique installation allows the company to generate electricity from previously exhausted energy, avoiding the emission of about 90,000 metric tons per year of greenhouse gases, and to virtually eliminate the release of particulate matter to the atmosphere.`,
    products: [
      {
        name: 'Standard Thermal Carbon Black',
        description: 'High-quality thermal carbon black for various industrial applications',
      },
      {
        name: 'Stainless Grade',
        description: 'Specialty thermal black for applications requiring low contamination',
      },
      {
        name: 'Ultra Pure Grade',
        description: 'Premium grade for applications requiring highest purity levels',
      },
    ],
    highlights: [
      'Only dedicated thermal carbon black manufacturer',
      '45,000 metric tons annual capacity',
      'Waste heat recovery power plant',
      'Environmental responsibility commitment',
      'Global distribution network',
    ],
  },
  {
    id: 'munch-chemie',
    name: 'Münch Chemie',
    country: 'Germany',
    flag: '🇩🇪',
    specialty: 'Release Agents for Rubber Industry',
    shortDescription: 'Established in 1948, specializing in release agents for elastomers, polyurethanes and composites.',
    fullDescription: `Started in 1948, Münch Chemie Labor GmbH was established by Dr. Adolf Münch with developed activities and production to meet the requirements proposed by the Freudenberg Group.

Münch is the name of the family that established this company which also currently manages the business in the third generation. It has always been the ambition of the Münch family to be the no. 1 specialist for release agents.

The industrial applications range from Elastomer processing, polyurethanes and composite materials to metal processing in die casting and wood as a raw material in the production of chipboards.

Applications include:
• Tyre Industry
• Technical Parts
• Automotive Suppliers
• Rubber-metal Components
• Shoe Industry
• Furniture Industry
• Aerospace Industry
• Pharmaceutical Industry`,
    products: [
      {
        name: 'BC-3156 Bladder Coating',
        description: 'Water-based, single-component Bladder Coating that lasts throughout the whole bladder-lifetime',
      },
      {
        name: 'IP-7040 / 7045 Inside Tire Paint',
        description: 'Specifically designed to coat the green tire with a high quality inside paint',
      },
      {
        name: 'IP-7061',
        description: 'Semi-permanent water-based inside lubricant for application either on the bladder surface or on the inside of the green tire',
      },
      {
        name: 'TP-6080/2-2',
        description: 'Water based product to paint vulcanized tires, provides matt finish',
      },
      {
        name: 'OP-6166 Outside Lube',
        description: 'Specifically developed for the tire industry to treat the surface of the green tire with a high quality lubricant. Water based and free of solvents with relatively short drying times',
      },
      {
        name: 'MK-224 Mould Release Agent',
        description: 'Water-based "ready-to-use" release agent, forming a coherent release film on the mould',
      },
      {
        name: 'MK-Series Mould Release Agents',
        description: 'Complete range of mould release agents for various applications',
      },
    ],
    highlights: [
      'Established in 1948 - 75+ years experience',
      'Third generation family business',
      'No. 1 specialist for release agents',
      'Solutions for tire and non-tire industry',
      'Water-based, environmentally friendly products',
    ],
  },
  {
    id: 'performance-additives',
    name: 'Performance Additives',
    country: 'Malaysia',
    flag: '🇲🇾',
    specialty: 'Processing Additives for Rubber & Plastics',
    shortDescription: 'Member of Behn-Meyer Group with 5000 MT annual capacity for specialty chemicals.',
    fullDescription: `Performance Additives Sdn. Bhd. is a member of the Behn-Meyer Group for manufacturing specialty chemicals. Their state-of-the-art plant near Kuala Lumpur has capacity to produce 5000 MT per annum of process aids with strong R&D capabilities.

The company specializes in developing and manufacturing high-performance additives for the rubber and plastics industry, with a focus on innovation and quality.`,
    products: [
      {
        name: 'ULTRA-FLOW™ Range',
        description: 'Fatty acid soaps for superior physical peptization of natural rubber',
        items: ['ULTRA-FLOW 100 Series', 'ULTRA-FLOW 200 Series', 'ULTRA-FLOW 300 Series'],
      },
      {
        name: 'ULTRA-LUBE™ Range',
        description: 'PE waxes and esters for processing lubrication',
        items: ['ULTRA-LUBE PE Waxes', 'ULTRA-LUBE Ester Series'],
      },
      {
        name: 'ULTRA-BLEND™ Range',
        description: 'Homogenizing agents for improved compound consistency',
      },
      {
        name: 'ULTRA-PEP™ Range',
        description: 'Peptizers for viscosity reduction in natural and synthetic rubber',
      },
      {
        name: 'Ultraplast™ WF',
        description: 'Specialized additives for wood-plastic composite applications',
      },
    ],
    highlights: [
      'Part of Behn-Meyer Group',
      '5000 MT annual production capacity',
      'State-of-the-art manufacturing facility',
      'Strong R&D capabilities',
      'Complete range of processing aids',
    ],
  },
  {
    id: 'nantex',
    name: 'Nantex',
    country: 'Taiwan',
    flag: '🇹🇼',
    specialty: 'Nitrile Rubber (NBR)',
    shortDescription: 'Leading NBR producer using B.F. Goodrich technology since 1983.',
    fullDescription: `NANTEX INDUSTRY CO. LTD. is a Taiwanese Company situated in Lin-Yuan Petrochemical Complex, the biggest in Taiwan. Nantex is located within short distance from its suppliers which ensures stable and regular raw material supply.

Nantex produces Nitrile Rubber since June 1983, based on Technology from B.F. Goodrich, USA.

Nantex produces Nitrile Rubber in fully automated and computerised production plants under very strict production standards, which ensures stable product quality that has won the approval and confidence of customers worldwide.

Nantex has strictly enforced Statistical Process Control, beginning from the procurement of Raw materials all the way to the production of finished products, assuring uniformity in quality.

Nantex recognizes and embraces the policy of uplifting personnel, equipment and operational safety and environmental protection. Nantex has won 'National Award for Industrial Environmental Protection' thrice and also award for National Self protection system. Nantex is accredited with ISO 9002 since 1995.

Nantex is one of the largest producers of acrylonitrile butadiene rubbers (commonly known as Nitrile Rubbers or NBR).`,
    products: [
      {
        name: 'High Nitrile Grades',
        description: 'Suitable for applications: oil well parts, fuel hoses, oil seals requiring low swell in aromatic fuels, oils and solvents',
      },
      {
        name: 'Medium Nitrile Grades',
        description: 'All purpose grades well balanced for oil and low temperature resistance. Suitable for phenolic and PVC resin modification',
      },
      {
        name: 'Low Nitrile Grades',
        description: 'Suitable for applications requiring low temperature properties with moderate resistance to oils, fuels and solvents',
      },
      {
        name: 'Nitrile-PVC Blends',
        description: 'Suitable for applications such as cable jackets, hose covers requiring good abrasion, oil resistance and weatherability',
      },
      {
        name: 'Four Digit Nancar Grades',
        description: 'Fast curing grades with superior mould flow and dynamic properties, available in medium and low ACN content',
      },
    ],
    highlights: [
      'B.F. Goodrich USA technology',
      'ISO 9002 certified since 1995',
      'National Environmental Protection Award (3x)',
      'Fully automated production',
      'Statistical Process Control',
    ],
  },
  {
    id: 'polychromos',
    name: 'Polychromos',
    country: 'Germany',
    flag: '🇩🇪',
    specialty: 'Color Masterbatches for Fluoropolymers',
    shortDescription: 'Specialists in color masterbatches for FEP, PFA, ETFE, PVDF and PTFE applications.',
    fullDescription: `Polychromos focuses on color masterbatches specifically designed for fluoropolymer applications. Their expertise covers the complete range of fluoropolymers including FEP, PFA, ETFE, PVDF and specialty products for PTFE fine powder.

The company provides high-quality coloring solutions that maintain the exceptional properties of fluoropolymers while adding vibrant, consistent colors for various industrial applications.`,
    products: [
      {
        name: 'FEP Color Masterbatches',
        description: 'Color concentrates specifically formulated for FEP processing',
      },
      {
        name: 'PFA Color Masterbatches',
        description: 'High-temperature stable colors for PFA applications',
      },
      {
        name: 'ETFE Color Masterbatches',
        description: 'Durable color solutions for ETFE applications',
      },
      {
        name: 'PVDF Color Masterbatches',
        description: 'Chemical resistant color concentrates for PVDF',
      },
      {
        name: 'LiquidC Dispersions',
        description: 'Specialty dispersions for PTFE fine powder applications',
      },
    ],
    highlights: [
      'Fluoropolymer specialists',
      'Complete FEP, PFA, ETFE, PVDF range',
      'LiquidC technology for PTFE',
      'German engineering quality',
      'Consistent color matching',
    ],
  },
  {
    id: 'revosync',
    name: 'RevoSync',
    country: 'Singapore',
    flag: '🇸🇬',
    specialty: 'Polymer Processing Aids',
    shortDescription: 'Specialists in FluoroSilicone additives and Polymer Processing Aids (PPA).',
    fullDescription: `RevoSync specializes in providing application solutions to customers through the use of special polymer processing additives. RevoSync has set up a team of experienced and dedicated technical sales personnel equipped with strong product and application knowledge to tailor solutions to customers' needs.

RevoSync is strategically located to provide the best service to Asia. Headquarters are based in well established trade hub Singapore with the manufacturing plant in Shanghai with a PPA powder capacity of 500MT per year. Sales offices in Shanghai, Guangzhou, Shandong, and Jiangsu, Singapore, Kuala Lumpur, Malaysia.

RevoSync aims to be the top leader of special polymer additives market in China. Through continuous R&D over the years RevoSync has developed a diverse and comprehensive product range for customers and is committed to constant innovation to introduce more solutions and products to the market.`,
    products: [
      {
        name: 'FluoroSilicone Powder/Masterbatch',
        description: 'Specially produced additive with multiple functions, suitable for wide range of applications. On low dosage, improves dispersion properties. On high dosage, improves surface smoothness and scratch resistance',
      },
      {
        name: 'Polymer Processing Aid (PPA)',
        description: 'Fluoropolymer based processing aid which reduces shear stress during manufacturing. Beneficial for improving product quality and reducing production cost, especially in hard to process polymers with high filler content',
      },
    ],
    highlights: [
      'Strategic Asia-Pacific location',
      '500MT annual PPA capacity',
      'Manufacturing plant in Shanghai',
      'Continuous R&D innovation',
      'Technical sales support',
    ],
  },
  {
    id: 'advanced-fluoro-tubing',
    name: 'Advanced Fluoro Tubing',
    country: 'Germany',
    flag: '🇩🇪',
    specialty: 'Fluoroplastic Tubings',
    shortDescription: 'Innovative manufacturer of high-performance fluoroplastic tubings and profiles.',
    fullDescription: `Advanced Polymer Tubing GmbH, an innovative company specialising in the manufacturing of fluoroplastic tubings was founded at the beginning of 2011.

The decades of experience gained by the founders in production combined with the polymer specific characteristics are the basis of a production built using state of the art technology for tubing, shrink tubing and profiles.

State of the art "in-line" measuring techniques enable continuous quality control during the entire manufacturing process. By using selected raw materials from leading manufacturers, they offer product quality standards in relation to: highest bending fatigue strength, excellent chemical resistance, lowest permeation.

Depending on the raw materials used, they manufacture tubing and profiles in diameters from 0.20 mm to 130.00 mm.`,
    products: [
      {
        name: 'PTFE Tubing',
        description: 'High-performance PTFE tubings with excellent chemical resistance',
      },
      {
        name: 'FEP Tubing',
        description: 'FEP tubings for various industrial applications',
      },
      {
        name: 'PFA Tubing',
        description: 'Premium PFA tubings for demanding applications',
      },
      {
        name: 'ETFE Tubing',
        description: 'Durable ETFE tubings with excellent mechanical properties',
      },
      {
        name: 'ECTFE Tubing',
        description: 'Chemical resistant ECTFE tubings',
      },
      {
        name: 'PVDF Tubing',
        description: 'PVDF tubings for chemical processing',
      },
      {
        name: 'Shrink Tubing',
        description: 'Heat shrink tubings in various fluoropolymer materials',
      },
    ],
    highlights: [
      'Diameters from 0.20mm to 130mm',
      'In-line quality control',
      'Highest bending fatigue strength',
      'Excellent chemical resistance',
      'Lowest permeation rates',
    ],
  },
  {
    id: 'herli-technochem',
    name: 'Herli Technochem',
    country: 'Singapore',
    flag: '🇸🇬',
    specialty: 'Silane Coupling Agents',
    shortDescription: 'Supplier of Silane Coupling Agents and Specialty Anti-Oxidants.',
    fullDescription: `Herli Technochem Pte Ltd is an overseas supplier in Singapore that exports products globally.

SARVAN CARBOCHEM LLP deals with Silane Coupling Agent and Specialty Anti Oxidants from Herli Technochem Pte Ltd.

The company provides high-quality chemical additives essential for improving bonding between organic and inorganic materials in rubber and plastic applications.`,
    products: [
      {
        name: 'Silane Coupling Agents',
        description: 'Range of silane coupling agents for enhanced bonding between organic polymers and inorganic fillers',
      },
      {
        name: 'Specialty Anti-Oxidants',
        description: 'High-performance anti-oxidants for extended product life and stability',
      },
    ],
    highlights: [
      'Singapore-based supplier',
      'Global export capabilities',
      'Silane coupling expertise',
      'Specialty anti-oxidant range',
    ],
  },
];