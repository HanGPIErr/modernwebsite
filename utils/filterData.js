export const filterData = [
    {
      items: [
        { name: 'Achat', value: 'for-sale' },
        { name: 'Location', value: 'for-rent' },
      ],
      placeholder: 'Votre Choix',
      queryName: 'purpose',
    },
    {
      items: [
        { name: 'Journalière', value: 'daily' },
        { name: 'A la semaine', value: 'weekly' },
        { name: 'Au mois', value: 'monthly' },
        { name: 'A l\'année', value: 'yearly' },
      ],
      placeholder: 'Période de Location',
      queryName: 'rentFrequency',
    },
    {
      items: [
        { name: '10,000', value: '10000' },
        { name: '20,000', value: '20000' },
        { name: '30,000', value: '30000' },
        { name: '40,000', value: '40000' },
        { name: '50,000', value: '50000' },
        { name: '60,000', value: '60000' },
        { name: '85,000', value: '85000' },
      ],
      placeholder: 'Prix Mini(AED)',
      queryName: 'minPrice',
    },
    {
      items: [
        { name: '50,000', value: '50000' },
        { name: '60,000', value: '60000' },
        { name: '85,000', value: '85000' },
        { name: '110,000', value: '110000' },
        { name: '135,000', value: '135000' },
        { name: '160,000', value: '160000' },
        { name: '185,000', value: '185000' },
        { name: '200,000', value: '200000' },
        { name: '300,000', value: '300000' },
        { name: '400,000', value: '400000' },
        { name: '500,000', value: '500000' },
        { name: '600,000', value: '600000' },
        { name: '700,000', value: '700000' },
        { name: '800,000', value: '800000' },
        { name: '900,000', value: '900000' },
        { name: '1000,000', value: '1000000' },
      ],
      placeholder: 'Prix Max(AED)',
      queryName: 'maxPrice',
    },
    {
      items: [
        { name: 'Plus Petit Prix', value: 'price-asc' },
        { name: 'Prix Le Plus Cher', value: 'price-des' },
        { name: 'Nouveautées', value: 'date-asc' },
        { name: 'Ancienne', value: 'date-desc' },
        { name: 'Vérifiée', value: 'verified-score' },
        { name: 'Score De La Ville', value: 'city-level-score' },
      ],
      placeholder: 'Trié par',
      queryName: 'sort',
    },
    {
      items: [
        { name: '1000', value: '1000' },
        { name: '2000', value: '2000' },
        { name: '3000', value: '3000' },
        { name: '4000', value: '4000' },
        { name: '5000', value: '5000' },
        { name: '10000', value: '10000' },
        { name: '20000', value: '20000' },
      ],
      placeholder: 'Surface Habitable(sqft)',
      queryName: 'areaMax',
    },
    {
      items: [
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '4' },
        { name: '5', value: '5' },
        { name: '6', value: '6' },
        { name: '7', value: '7' },
        { name: '8', value: '8' },
        { name: '9', value: '9' },
        { name: '10', value: '10' },
      ],
      placeholder: 'Chambres',
      queryName: 'roomsMin',
    },
    {
      items: [
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '4' },
        { name: '5', value: '5' },
        { name: '6', value: '6' },
        { name: '7', value: '7' },
        { name: '8', value: '8' },
        { name: '9', value: '9' },
        { name: '10', value: '10' },
      ],
      placeholder: 'Salle de Bains',
      queryName: 'bathsMin',
    },
    {
      items: [
        { name: 'Meublés', value: 'furnished' },
        { name: 'Non Meublés', value: 'unfurnished' },
      ],
      placeholder: 'Statut Locatif',
      queryName: 'furnishingStatus',
    },
    {
      items: [
        { name: 'Appartement', value: '4' },
        { name: 'Maison De Ville', value: '16' },
        { name: 'Villas', value: '3' },
        { name: 'Penthouses', value: '18' },
        { name: 'Hotel Appartements', value: '21' },
        { name: 'Complexe de villas', value: '19' },
        { name: 'Terrain Résidentiel', value: '14' },
        { name: 'Etage Résidentiel', value: '12' },
        { name: 'Bâtiment Résidentiel', value: '17' },
      ],
      placeholder: 'Type De Propriété',
      queryName: 'categoryExternalID',
    },
  ];
  
  export const getFilterValues = (filterValues) => {
    const {
      purpose,
      rentFrequency,
      categoryExternalID,
      minPrice,
      maxPrice,
      areaMax,
      roomsMin,
      bathsMin,
      sort,
      locationExternalIDs,
    } = filterValues;
  
    const values = [
      {
        name: 'purpose',
        value: purpose,
      },
      {
        name: 'rentFrequency',
        value: rentFrequency,
      },
      {
        name: 'minPrice',
        value: minPrice,
      },
      {
        name: 'maxPrice',
        value: maxPrice,
      },
      {
        name: 'areaMax',
        value: areaMax,
      },
      {
        name: 'roomsMin',
        value: roomsMin,
      },
      {
        name: 'bathsMin',
        value: bathsMin,
      },
      {
        name: 'sort',
        value: sort,
      },
      {
        name: 'locationExternalIDs',
        value: locationExternalIDs,
      },
      {
        name: 'categoryExternalID',
        value: categoryExternalID,
      },
    ];
  
    return values;
  };