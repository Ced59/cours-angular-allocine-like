// Liste des films avec les cinémas associés


import {Film} from './film';



export const
  films: Film[] = [
    {
      id: 0,
      titre: 'D.A.R.Y.L.',
      image: 'daryl.jpg',
      duree: {hours: 1, minutes: 39},
      cinemas: [
        {
          id: 0,
          nom: 'Dumbledore Ciné',
          adresse: '5 rue Harry Potter',
          ville: 'Poudlard',
          image: 'Exposition-Harry-Potter-Cite-Cinema-1.jpg',
        },
        {
          id: 1,
          nom: 'Simpsons Ciné',
          adresse: '742 Evergreen Terrace',
          ville: 'Springfield',
          image: 'Aztec_Theater.png',
        },
        {
          id: 2,
          nom: 'CIA Ciné',
          adresse: '66 rue Big Brother',
          ville: 'Langley',
          image: 'unnamed.jpg',
        },
        {
          id: 3,
          nom: 'Ciné de la gare',
          adresse: 'A coté du café de la gare',
          ville: 'Pouêt-Ville-Paumée',
          image: 'photo_cine.jpg',
        }
      ]
    },
    {
      id: 1,
      titre: 'Ghost',
      image: 'ghost.jpg',
      duree: {hours: 2, minutes: 6},
      cinemas: [
        {
          id: 0,
          nom: 'Dumbledore Ciné',
          adresse: '5 rue Harry Potter',
          ville: 'Poudlard',
          image: 'Exposition-Harry-Potter-Cite-Cinema-1.jpg',
        },
        {
          id: 3,
          nom: 'Ciné de la gare',
          adresse: 'A coté du café de la gare',
          ville: 'Pouêt-Ville-Paumée',
          image: 'photo_cine.jpg',
        }
      ]
    },
    {
      id: 2,
      titre: 'La reine des neiges 2',
      image: 'frozen2.jpg',
      duree: {hours: 1, minutes: 44},
      cinemas: [
        {
          id: 2,
          nom: 'CIA Ciné',
          adresse: '66 rue Big Brother',
          ville: 'Langley',
          image: 'unnamed.jpg',
        },
        {
          id: 3,
          nom: 'Ciné de la gare',
          adresse: 'A coté du café de la gare',
          ville: 'Pouêt-Ville-Paumée',
          image: 'photo_cine.jpg',
        }
      ]
    }
  ];

