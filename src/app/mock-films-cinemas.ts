// Liste des films avec les cinémas associés
import {Film} from './appInterfaces/film';


export const
  films: Film[] = [
    {
      id: 0,
      titre: 'D.A.R.Y.L.',
      image: 'daryl.jpg',
      duree: {hours: 1, minutes: 39},
      synopsis: 'Daryl, enfant adopte et heureux, est doué de facultes extraordinaires. Ses qualités surprenantes excitent la convoitise des militaires.',
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
      synopsis: 'Sam Wheat, cadre dans une banque d\'affaires new-yorkaise, et Molly Jensen, sculpteur, s\'aiment. Mais tout bascule lorsque Sam Wheat est agressé dans la rue et abattu. A sa grande surprise, il devient un fantôme et réussit à communiquer avec une voyante hystérique. Il tente alors d\'entrer en contact avec sa femme et découvre qui a voulu le tuer.',
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
      synopsis: 'Pourquoi Elsa est-elle née avec des pouvoirs magiques ? La jeune fille rêve de l’apprendre, mais la réponse met son royaume en danger. Avec l’aide d’Anna, Kristoff, Olaf et Sven, Elsa entreprend un voyage aussi périlleux qu’extraordinaire. Dans La Reine des neiges, Elsa craignait que ses pouvoirs ne menacent le monde. Dans La Reine des neiges 2, elle espère qu’ils seront assez puissants pour le sauver…',
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

