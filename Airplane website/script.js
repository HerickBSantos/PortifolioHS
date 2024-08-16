// Selecionando elementos do DOM
const planeModelSelect = document.getElementById('plane-model');
const getInfoButton = document.getElementById('get-info-button');
const modelInfoSection = document.getElementById('model-info');
const infoTitle = document.getElementById('info-title');
const infoContainer = document.getElementById('info-container');
const modelImage = document.getElementById('model-image');
const languageSelect = document.getElementById('language-select');

// Dados dos modelos de avião
const airplaneDataPT = {
  boeing737: {
    title: 'Boeing 737',
    description: 'Um avião comercial de curto a médio alcance.',
    image: 'https://aeroportrasdaaviacao.com/wp-content/uploads/2022/11/gallery-full-01.jpg',
    peso: '77,000 kg',
    fabricanteMotor: 'CFM International, CFM56',
    distanciaVoo: '6,115 km',
    altitudeMaxima: '41,000 pés',
    velocidadeMaxima: '940 km/h',
    variantes: '737-100, 737-200, 737-300, 737-400, 737-500, 737-600, 737-700, 737-800, 737-900, 737 MAX',
    preco: '$89.1 a $119.2 milhões'
  },
  airbusa320: {
    title: 'Airbus A320',
    description: 'Um avião comercial de passageiros de curto e médio alcance.',
    image: 'https://aeromagazine.uol.com.br/media/_versions/airbus-a320neo-divulgacao-airbus_widelg.jpg',
    peso: '42,600 kg',
    fabricanteMotor: 'CFM International, IAE, Pratt & Whitney',
    distanciaVoo: '6,700 km',
    altitudeMaxima: '39,800 pés',
    velocidadeMaxima: '945 km/h',
    variantes: 'A318, A319, A320, A321, A320neo',
    preco: '$101.5 a $129.5 milhões'
  },
  cessna172: {
    title: 'Cessna 172',
    description: 'Um avião monomotor leve e popular para treinamento e lazer.',
    image: 'https://www.aopa.org/-/media/Images/AOPA-Main/Aircraft-Guide/Cessna-172-Skyhawk/03-341_141/03-341_141_16x9.jpg',
    peso: '757 kg',
    fabricanteMotor: 'Lycoming IO-360-L2A',
    distanciaVoo: '1,055 km',
    altitudeMaxima: '14,000 pés',
    velocidadeMaxima: '302 km/h',
    variantes: 'Cessna 172 Skyhawk, Cessna 172P Skyhawk, Cessna R172K Hawk XP',
    preco: '$388,200 a $503,800'
  },
  embraer190: {
    title: 'Embraer 190',
    description: 'Um avião comercial de médio alcance.',
    image: 'https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/223054/c4c251a175b6cc144386bce278d81eeaembraere190e2/122,0,950,567/670,400,0.50/0/default.jpg',
    peso: '50,000 kg',
    fabricanteMotor: 'General Electric CF34',
    distanciaVoo: '4,537 km',
    altitudeMaxima: '41,000 pés',
    velocidadeMaxima: '871 km/h',
    variantes: 'E190, E190-E2',
    preco: '$50 milhões'
  },
  bombardierGlobal7500: {
    title: 'Bombardier Global 7500',
    description: 'Um jato executivo de longo alcance e alta velocidade.',
    image: 'https://www.aerotime.aero/images/bombardier_global_7500-1-scaled.jpg',
    peso: '48,800 kg',
    fabricanteMotor: 'General Electric Passport',
    distanciaVoo: '15,900 km',
    altitudeMaxima: '51,000 pés',
    velocidadeMaxima: '982 km/h',
    variantes: 'Global 7500',
    preco: '$73 milhões'
  },
  embraerPhenom300: {
    title: 'Embraer Phenom 300',
    description: 'Um jato executivo leve de alta performance.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Embraer_EMB-505_Phenom_300_Private%2C_LUX_Luxembourg_%28Findel%29%2C_Luxembourg_PP1337181623.jpg',
    peso: '8,090 kg',
    fabricanteMotor: 'Pratt & Whitney Canada PW535E1',
    distanciaVoo: '3,650 km',
    altitudeMaxima: '45,000 pés',
    velocidadeMaxima: '834 km/h',
    variantes: 'Phenom 300E',
    preco: '$9.65 milhões'
  },
  boeing747: {
    title: 'Boeing 747',
    description: 'Um avião comercial de longo alcance e grande capacidade.',
    image: 'https://www.ixbt.com/img/n1/news/2023/1/5/Boeing-747-turns-50-feature_large.png',
    peso: '183,500 kg',
    fabricanteMotor: 'Pratt & Whitney JT9D, General Electric CF6, Rolls-Royce RB211',
    distanciaVoo: '13,450 km',
    altitudeMaxima: '45,000 pés',
    velocidadeMaxima: '933 km/h',
    variantes: '747-100, 747-200, 747-300, 747-400, 747-8',
    preco: '$367 milhões'
  },
  airbusa380: {
    title: 'Airbus A380',
    description: 'O maior avião comercial de passageiros do mundo.',
    image: 'https://aircharterservice-globalcontent-live.cphostaccess.com/images/aircraft-guide-images/group/airbus-a380-large_tcm36-3661.jpg',
    peso: '277,000 kg',
    fabricanteMotor: 'Engine Alliance GP7200, Rolls-Royce Trent 900',
    distanciaVoo: '15,200 km',
    altitudeMaxima: '43,100 pés',
    velocidadeMaxima: '1,020 km/h',
    variantes: 'A380-800',
    preco: '$445.6 milhões'
  },
  cessnaCitation: {
    title: 'Cessna Citation Latitude',
    description: 'Um jato executivo de médio porte e alta eficiência.',
    image: 'https://www.aeronavesavenda.com/wp-content/uploads/bfi_thumb/cessna-citation-m2-a-venda-tam-4-q80aan0r5vbbu0of49goan5en8lki4bvvnrd5fj8cu.jpg',
    peso: '9,894 kg',
    fabricanteMotor: 'Pratt & Whitney Canada PW306D1',
    distanciaVoo: '5,278 km',
    altitudeMaxima: '45,000 pés',
    velocidadeMaxima: '826 km/h',
    variantes: 'Citation Latitude',
    preco: '$17.5 milhões'
  },
  piperPA28: {
    title: 'Piper PA-28',
    description: 'Um avião leve popular entre pilotos privados e escolas de aviação.',
    image: 'https://flyer.co.uk/wp-content/uploads/2018/12/piper_pa-28_cherokee-1000x658.jpg',
    peso: '1,157 kg',
    fabricanteMotor: 'Lycoming O-360-A4M',
    distanciaVoo: '1,121 km',
    altitudeMaxima: '13,000 pés',
    velocidadeMaxima: '235 km/h',
    variantes: 'Archer, Warrior, Arrow',
    preco: '$400,000'
  },
  gulfstreamG650: {
    title: 'Gulfstream G650',
    description: 'Um jato executivo de ultra-longo alcance conhecido por seu luxo e desempenho.',
    image: 'https://aviationweek.com/sites/default/files/styles/crop_freeform/public/2023-09/flexjet-gulfstream-g650-starlink-release_source_flexjet.jpg?itok=vsdtcHP3',
    peso: '33,113 kg',
    fabricanteMotor: 'Rolls-Royce BR725',
    distanciaVoo: '13,890 km',
    altitudeMaxima: '51,000 pés',
    velocidadeMaxima: '982 km/h',
    variantes: 'G650ER',
    preco: '$65 milhões'
  },
  dassaultFalcon8X: {
    title: 'Dassault Falcon 8X',
    description: 'Um jato executivo de longo alcance com excelente desempenho em pistas curtas.',
    image: 'https://cdn-cavok.nuneshost.com/wp-content/uploads/2016/09/036_Falcon8X_2016USB50.jpg',
    peso: '33,113 kg',
    fabricanteMotor: 'Pratt & Whitney Canada PW307D',
    distanciaVoo: '11,945 km',
    altitudeMaxima: '51,000 pés',
    velocidadeMaxima: '904 km/h',
    variantes: 'Falcon 7X',
    preco: '$58 milhões'
  },
  bombardierChallenger3500: {
    title: 'Bombardier Challenger 3500',
    description: 'Um jato executivo de médio porte com tecnologia de ponta e conforto excepcional.',
    image: 'https://www.airway.com.br/wp-content/uploads/2021/09/Challenger-3500-Exterior-Inflight-Blue-Water-and-Mountains.jpg',
    peso: '18,419 kg',
    fabricanteMotor: 'Honeywell HTF7350',
    distanciaVoo: '5,926 km',
    altitudeMaxima: '45,000 pés',
    velocidadeMaxima: '870 km/h',
    variantes: 'Challenger 350',
    preco: '$26.7 milhões'
  },
  hondaJetElite: {
    title: 'HondaJet Elite',
    description: 'Um jato leve inovador com motores montados acima da asa.',
    image: 'https://www.blackxperience.com/assets/content/blackauto/autonews/honda-jet-2.jpg',
    peso: '4,828 kg',
    fabricanteMotor: 'GE Honda HF120',
    distanciaVoo: '2,661 km',
    altitudeMaxima: '43,000 pés',
    velocidadeMaxima: '778 km/h',
    variantes: 'HondaJet Elite S',
    preco: '$5.4 milhões'
  },
  cirrusVisionJet: {
    title: 'Cirrus Vision Jet',
    description: 'O primeiro jato monomotor de uso pessoal com um paraquedas de emergência para toda a aeronave.',
    image: 'https://www.aopa.org/-/media/Images/AOPA-Main/Aircraft-Guide/Cirrus-SF50/17_Cirrus-SF50_0004.jpg?mw=1200&mh=675&as=1&hash=A5FB57273996C6D174B55867C1794236',
    peso: '2,274 kg',
    fabricanteMotor: 'Williams International FJ33-5A',
    distanciaVoo: '2,222 km',
    altitudeMaxima: '31,000 pés',
    velocidadeMaxima: '555 km/h',
    variantes: 'Vision Jet G2',
    preco: '$2.85 milhões'
  },
  learjet75: {
    title: 'Learjet 75',
    description: 'Um jato executivo leve com desempenho e conforto excepcionais.',
    image: 'https://cdn-cavok.nuneshost.com/wp-content/uploads/2020/10/image-169Gallery-1fb0b33a-1708679.jpg',
    peso: '9,752 kg',
    fabricanteMotor: 'Honeywell TFE731-40BR',
    distanciaVoo: '3,778 km',
    altitudeMaxima: '51,000 pés',
    velocidadeMaxima: '860 km/h',
    variantes: 'Learjet 75 Liberty',
    preco: '$13.8 milhões'
  },
  pilatusPC24: {
    title: 'Pilatus PC-24',
    description: 'O primeiro jato executivo capaz de operar em pistas não pavimentadas.',
    image: 'https://flyflapper.com/stories/wp-content/uploads/2023/02/imagem_2023-02-10_104611127.png',
    peso: '8,005 kg',
    fabricanteMotor: 'Williams International FJ44-4A',
    distanciaVoo: '3,610 km',
    altitudeMaxima: '45,000 pés',
    velocidadeMaxima: '815 km/h',
    variantes: 'PC-24 Super Versatile Jet',
    preco: '$10.7 milhões'
  },
  beechcraftKingAir350i: {
    title: 'Beechcraft King Air 350i',
    description: 'Um turboélice bimotor versátil e confiável para voos executivos e regionais.',
    image: 'https://www.blackhawk.aero/wp-content/uploads/2021/09/AMG_0808-1.jpg',
    peso: '6,804 kg',
    fabricanteMotor: 'Pratt & Whitney Canada PT6A-60A',
    distanciaVoo: '3,345 km',
    altitudeMaxima: '35,000 pés',
    velocidadeMaxima: '578 km/h',
    variantes: 'King Air 350ER',
    preco: '$8.3 milhões'
  },
  piperM600: {
    title: 'Piper M600',
    description: 'Um turboélice monomotor sofisticado com excelente alcance e capacidade de carga.',
    image: 'https://aeromagazine.uol.com.br/media/_versions/piper-m600-sls-4_widexl.jpg',
    peso: '2,722 kg',
    fabricanteMotor: 'Pratt & Whitney Canada PT6A-42A',
    distanciaVoo: '2,741 km',
    altitudeMaxima: '30,000 pés',
    velocidadeMaxima: '556 km/h',
    variantes: 'M600 SLS',
    preco: '$3.3 milhões'
  },
  diamondDA62: {
    title: 'Diamond DA62',
    description: 'Um avião leve e econômico, ideal para uso pessoal e empresarial.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Diamond_Sky%2C_ES-KEN%2C_Diamond_DA-62_%2836833726330%29.jpg/800px-Diamond_Sky%2C_ES-KEN%2C_Diamond_DA-62_%2836833726330%29.jpg',
    peso: '1,999 kg',
    fabricanteMotor: 'Austro Engine AE330',
    distanciaVoo: '2,376 km',
    altitudeMaxima: '20,000 pés',
    velocidadeMaxima: '352 km/h',
    variantes: 'DA62 MPP',
    preco: '$1.3 milhões'
  }

};

const airplaneDataEN = 
  {
    boeing737: {
      title: 'Boeing 737',
      description: 'A short to medium range commercial airliner.',
      image: 'https://aeroportrasdaaviacao.com/wp-content/uploads/2022/11/gallery-full-01.jpg',
      weight: '77,000 kg',
      engineManufacturer: 'CFM International, CFM56',
      flightRange: '6,115 km',
      maxAltitude: '41,000 feet',
      maxSpeed: '940 km/h',
      variants: '737-100, 737-200, 737-300, 737-400, 737-500, 737-600, 737-700, 737-800, 737-900, 737 MAX',
      price: '$89.1 to $119.2 million'
    },
    airbusa320: {
      title: 'Airbus A320',
      description: 'A short to medium range commercial passenger aircraft.',
      image: 'https://aeromagazine.uol.com.br/media/_versions/airbus-a320neo-divulgacao-airbus_widelg.jpg',
      weight: '42,600 kg',
      engineManufacturer: 'CFM International, IAE, Pratt & Whitney',
      flightRange: '6,700 km',
      maxAltitude: '39,800 feet',
      maxSpeed: '945 km/h',
      variants: 'A318, A319, A320, A321, A320neo',
      price: '$101.5 to $129.5 million'
    },
    cessna172: {
      title: 'Cessna 172',
      description: 'A popular light single-engine aircraft for training and leisure.',
      image: 'https://www.aopa.org/-/media/Images/AOPA-Main/Aircraft-Guide/Cessna-172-Skyhawk/03-341_141/03-341_141_16x9.jpg',
      weight: '757 kg',
      engineManufacturer: 'Lycoming IO-360-L2A',
      flightRange: '1,055 km',
      maxAltitude: '14,000 feet',
      maxSpeed: '302 km/h',
      variants: 'Cessna 172 Skyhawk, Cessna 172P Skyhawk, Cessna R172K Hawk XP',
      price: '$388,200 to $503,800'
    },
    embraer190: {
      title: 'Embraer 190',
      description: 'A medium range commercial aircraft.',
      image: 'https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/223054/c4c251a175b6cc144386bce278d81eeaembraere190e2/122,0,950,567/670,400,0.50/0/default.jpg',
      weight: '50,000 kg',
      engineManufacturer: 'General Electric CF34',
      flightRange: '4,537 km',
      maxAltitude: '41,000 feet',
      maxSpeed: '871 km/h',
      variants: 'E190, E190-E2',
      price: '$50 million'
    },
    bombardierGlobal7500: {
      title: 'Bombardier Global 7500',
      description: 'A high speed, long range executive jet.',
      image: 'https://www.aerotime.aero/images/bombardier_global_7500-1-scaled.jpg',
      weight: '48,800 kg',
      engineManufacturer: 'General Electric Passport',
      flightRange: '15,900 km',
      maxAltitude: '51,000 feet',
      maxSpeed: '982 km/h',
      variants: 'Global 7500',
      price: '$73 million'
    },
    embraerPhenom300: {
      title: 'Embraer Phenom 300',
      description: 'A high performance light executive jet.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Embraer_EMB-505_Phenom_300_Private%2C_LUX_Luxembourg_%28Findel%29%2C_Luxembourg_PP1337181623.jpg',
      weight: '8,090 kg',
      engineManufacturer: 'Pratt & Whitney Canada PW535E1',
      flightRange: '3,650 km',
      maxAltitude: '45,000 feet',
      maxSpeed: '834 km/h',
      variants: 'Phenom 300E',
      price: '$9.65 million'
    },
    boeing747: {
      title: 'Boeing 747',
      description: 'A long range, high capacity commercial aircraft.',
      image: 'https://www.ixbt.com/img/n1/news/2023/1/5/Boeing-747-turns-50-feature_large.png',
      weight: '183,500 kg',
      engineManufacturer: 'Pratt & Whitney JT9D, General Electric CF6, Rolls-Royce RB211',
      flightRange: '13,450 km',
      maxAltitude: '45,000 feet',
      maxSpeed: '933 km/h',
      variants: '747-100, 747-200, 747-300, 747-400, 747-8',
      price: '$367 million'
    },
    airbusa380: {
      title: 'Airbus A380',
      description: 'The world\'s largest commercial passenger aircraft.',
      image: 'https://example.com/airbus-a380-image.jpg',
      weight: '277,000 kg',
      engineManufacturer: 'Engine Alliance GP7200, Rolls-Royce Trent 900',
      flightRange: '15,200 km',
      maxAltitude: '43,100 feet',
      maxSpeed: '1,020 km/h',
      variants: 'A380-800',
      price: '$445.6 million'
    },
    cessnaCitation: {
      title: 'Cessna Citation Latitude',
      description: 'A medium-sized, high efficiency executive jet.',
      image: 'https://www.aeronavesavenda.com/wp-content/uploads/bfi_thumb/cessna-citation-m2-a-venda-tam-4-q80aan0r5vbbu0of49goan5en8lki4bvvnrd5fj8cu.jpg',
      weight: '9,894 kg',
      engineManufacturer: 'Pratt & Whitney Canada PW306D1',
      flightRange: '5,278 km',
      maxAltitude: '45,000 feet',
      maxSpeed: '826 km/h',
      variants: 'Citation Latitude',
      price: '$17.5 million'
    },
    piperPA28: {
      title: 'Piper PA-28',
      description: 'A popular light aircraft among private pilots and flight schools.',
      image: 'https://flyer.co.uk/wp-content/uploads/2018/12/piper_pa-28_cherokee-1000x658.jpg',
      weight: '1,157 kg',
      engineManufacturer: 'Lycoming O-360-A4M',
      flightRange: '1,121 km',
      maxAltitude: '13,000 feet',
      maxSpeed: '235 km/h',
      variants: 'Archer, Warrior, Arrow',
      price: '$400,000'
    },
    gulfstreamG650: {
      title: 'Gulfstream G650',
      description: 'An ultra-long range executive jet known for its luxury and performance.',
      image: 'https://aviationweek.com/sites/default/files/styles/crop_freeform/public/2023-09/flexjet-gulfstream-g650-starlink-release_source_flexjet.jpg?itok=vsdtcHP3',
      weight: '33,113 kg',
      engineManufacturer: 'Rolls-Royce BR725',
      flightRange: '13,890 km',
      maxAltitude: '51,000 feet',
      maxSpeed: '982 km/h',
      variants: 'G650ER',
      price: '$65 million'
    },
    dassaultFalcon8X: {
      title: 'Dassault Falcon 8X',
      description: 'A long range executive jet with excellent short field performance.',
      image: 'https://cdn-cavok.nuneshost.com/wp-content/uploads/2016/09/036_Falcon8X_2016USB50.jpg',
      weight: '33,113 kg',
      engineManufacturer: 'Pratt & Whitney Canada PW307D',
      flightRange: '11,945 km',
      maxAltitude: '51,000 feet',
      maxSpeed: '904 km/h',
      variants: 'Falcon 7X',
      price: '$58 million'
    },
    bombardierChallenger3500: {
      title: 'Bombardier Challenger 3500',
      description: 'A mid-size executive jet with advanced technology and exceptional comfort.',
      image: 'https://www.airway.com.br/wp-content/uploads/2021/09/Challenger-3500-Exterior-Inflight-Blue-Water-and-Mountains.jpg',
      weight: '18,419 kg',
      engineManufacturer: 'Honeywell HTF7350',
      flightRange: '5,926 km',
      maxAltitude: '45,000 feet',
      maxSpeed: '870 km/h',
      variants: 'Challenger 350',
      price: '$26.7 million'
    },
    hondaJetElite: {
      title: 'HondaJet Elite',
      description: 'An innovative light business jet with unique over-the-wing engine mount design.',
      image: 'https://www.hondajet.com/-/media/project/hondajet/hero.ashx?mw=1920&hash=EC5A8CFC92CE16580A42B856B0EB3937E8F8C0D7',
      weight: '4,510 kg',
      engineManufacturer: 'GE Honda Aero Engines HF120',
      flightRange: '2,661 km',
      maxAltitude: '43,000 feet',
      maxSpeed: '782 km/h',
      variants: 'HondaJet Elite S',
      price: '$5.5 million'
    },
    pilatusPC12: {
      title: 'Pilatus PC-12',
      description: 'A versatile single-engine turboprop known for its rugged reliability.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pilatus_PC-12_G-PBYH_Kemble_26-05-2011.jpg/800px-Pilatus_PC-12_G-PBYH_Kemble_26-05-2011.jpg',
      weight: '4,740 kg',
      engineManufacturer: 'Pratt & Whitney Canada PT6A-67P',
      flightRange: '3,648 km',
      maxAltitude: '30,000 feet',
      maxSpeed: '528 km/h',
      variants: 'PC-12 NG',
      price: '$4.9 million'
    },
    piperM600: {
      title: 'Piper M600',
      description: 'A sophisticated single-engine turboprop with excellent range and payload capacity.',
      image: 'https://aeromagazine.uol.com.br/media/_versions/piper-m600-sls-4_widexl.jpg',
      weight: '2,722 kg',
      engineManufacturer: 'Pratt & Whitney Canada PT6A-42A',
      flightRange: '2,741 km',
      maxAltitude: '30,000 feet',
      maxSpeed: '556 km/h',
      variants: 'M600 SLS',
      price: '$3.3 million'
    },
    diamondDA62: {
      title: 'Diamond DA62',
      description: 'An economical and versatile light aircraft, ideal for personal and business use.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Diamond_Sky%2C_ES-KEN%2C_Diamond_DA-62_%2836833726330%29.jpg/800px-Diamond_Sky%2C_ES-KEN%2C_Diamond_DA-62_%2836833726330%29.jpg',
      weight: '1,999 kg',
      engineManufacturer: 'Austro Engine AE330',
      flightRange: '2,376 km',
      maxAltitude: '20,000 feet',
      maxSpeed: '352 km/h',
      variants: 'DA62 MPP',
      price: '$1.3 million'
    }
  }
  

// Função para atualizar informações do modelo de avião
function updateModelInfo() {
  const selectedModel = planeModelSelect.value;
  const selectedLanguage = languageSelect.value;
  const modelData = selectedLanguage === 'pt' ? airplaneDataPT[selectedModel] : airplaneDataEN[selectedModel];

  if (modelData) {
    infoTitle.textContent = modelData.title;
    infoContainer.innerHTML = selectedLanguage === 'pt' ? `
      <p><strong>Descrição:</strong> ${modelData.description}</p>
      <p><strong>Peso:</strong> ${modelData.peso}</p>
      <p><strong>Fabricante do Motor:</strong> ${modelData.fabricanteMotor}</p>
      <p><strong>Alcance:</strong> ${modelData.distanciaVoo}</p>
      <p><strong>Altitude Máxima:</strong> ${modelData.altitudeMaxima}</p>
      <p><strong>Velocidade Máxima:</strong> ${modelData.velocidadeMaxima}</p>
      <p><strong>Variantes:</strong> ${modelData.variantes}</p>
      <p><strong>Preço:</strong> ${modelData.preco}</p>
    ` : `
      <p><strong>Description:</strong> ${modelData.description}</p>
      <p><strong>Weight:</strong> ${modelData.weight}</p>
      <p><strong>Engine Manufacturer:</strong> ${modelData.engineManufacturer}</p>
      <p><strong>Flight Range:</strong> ${modelData.flightRange}</p>
      <p><strong>Max Altitude:</strong> ${modelData.maxAltitude}</p>
      <p><strong>Max Speed:</strong> ${modelData.maxSpeed}</p>
      <p><strong>Variants:</strong> ${modelData.variants}</p>
      <p><strong>Price:</strong> ${modelData.price}</p>
    `;
    modelImage.src = modelData.image;
    modelImage.alt = `Imagem do ${modelData.title}`;
    modelInfoSection.style.display = 'block';
  } else {
    modelInfoSection.style.display = 'none';
  }
}

// Adiciona o event listener ao botão
getInfoButton.addEventListener('click', updateModelInfo);