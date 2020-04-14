import {Seance} from './appInterfaces/seance';

export const
  seances: Seance[] = [
    {
      id: 0,
      cinema:
        {
          id: 3,
          nom: 'Ciné de la gare',
          adresse: 'A coté du café de la gare',
          ville: 'Pouêt-Ville-Paumée',
          image: 'photo_cine.jpg'
        },
      film:
        {
          id: 0,
          titre: 'D.A.R.Y.L.',
          image: 'daryl.jpg',
          duree: {hours: 1, minutes: 39},
          photos: [
            {
              id: 0,
              name: 'daryl1.jpg'
            },
            {
              id: 1,
              name: 'daryl2.jpg'
            },
            {
              id: 2,
              name: 'daryl3.jpg'
            },
            {
              id: 3,
              name: 'daryl4.jpg'
            },
            {
              id: 4,
              name: 'daryl5.jpg'
            },
            {
              id: 5,
              name: 'daryl6.jpg'
            },
            {
              id: 6,
              name: 'daryl7.jpg'
            }
          ],
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
      datetime: '2020-04-23T15:20:00',
      prix: 18.50
    },
    {
      id: 1,
      cinema:
        {
          id: 3,
          nom: 'Ciné de la gare',
          adresse: 'A coté du café de la gare',
          ville: 'Pouêt-Ville-Paumée',
          image: 'photo_cine.jpg'
        },
      film:
        {
          id: 1,
          titre: 'Ghost',
          image: 'ghost.jpg',
          duree: {hours: 2, minutes: 6},
          photos: [
            {
              id: 7,
              name: 'ghost1.jpg'
            },
            {
              id: 8,
              name: 'ghost2.jpg'
            },
            {
              id: 9,
              name: 'ghost3.jpg'
            },
            {
              id: 10,
              name: 'ghost4.jpg'
            },
            {
              id: 11,
              name: 'ghost5.jpg'
            },
            {
              id: 12,
              name: 'ghost6.jpg'
            },
            {
              id: 13,
              name: 'ghost7.jpg'
            }
          ],
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
      datetime: '2020-04-23T15:20:00',
      prix: 9.00
    },
    {
      id: 2,
      cinema:
        {
          id: 3,
          nom: 'Ciné de la gare',
          adresse: 'A coté du café de la gare',
          ville: 'Pouêt-Ville-Paumée',
          image: 'photo_cine.jpg'
        },
      film:
        {
          id: 2,
          titre: 'La reine des neiges 2',
          image: 'frozen2.jpg',
          duree: {hours: 1, minutes: 44},
          photos: [
            {
              id: 14,
              name: 'frozen1.jpg'
            },
            {
              id: 15,
              name: 'frozen2.jpg'
            },
            {
              id: 16,
              name: 'frozen3.jpg'
            },
            {
              id: 17,
              name: 'frozen4.jpg'
            },
            {
              id: 18,
              name: 'frozen5.jpg'
            },
            {
              id: 19,
              name: 'frozen6.jpg'
            }
          ],
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
        },
      datetime: '2020-04-23T15:20:00',
      prix: 9.00
    },
    {
      id: 3,
      cinema:
        {
          id: 3,
          nom: 'Ciné de la gare',
          adresse: 'A coté du café de la gare',
          ville: 'Pouêt-Ville-Paumée',
          image: 'photo_cine.jpg'
        },
      film:
        {
          id: 2,
          titre: 'La reine des neiges 2',
          image: 'frozen2.jpg',
          duree: {hours: 1, minutes: 44},
          photos: [
            {
              id: 14,
              name: 'frozen1.jpg'
            },
            {
              id: 15,
              name: 'frozen2.jpg'
            },
            {
              id: 16,
              name: 'frozen3.jpg'
            },
            {
              id: 17,
              name: 'frozen4.jpg'
            },
            {
              id: 18,
              name: 'frozen5.jpg'
            },
            {
              id: 19,
              name: 'frozen6.jpg'
            }
          ],
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
        },
      datetime: '2020-04-23T09:22:00',
      prix: 9.00
    },
    {
      id: 4,
      cinema:
        {
          id: 0,
          nom: 'Dumbledore Ciné',
          adresse: '5 rue Harry Potter',
          ville: 'Poudlard',
          image: 'Exposition-Harry-Potter-Cite-Cinema-1.jpg',
        },
      film:
        {
          id: 0,
          titre: 'D.A.R.Y.L.',
          image: 'daryl.jpg',
          duree: {hours: 1, minutes: 39},
          synopsis: 'Daryl, enfant adopte et heureux, est doué de facultes extraordinaires. Ses qualités surprenantes excitent la convoitise des militaires.',
          photos: [
            {
              id: 0,
              name: 'daryl1.jpg'
            },
            {
              id: 1,
              name: 'daryl2.jpg'
            },
            {
              id: 2,
              name: 'daryl3.jpg'
            },
            {
              id: 3,
              name: 'daryl4.jpg'
            },
            {
              id: 4,
              name: 'daryl5.jpg'
            },
            {
              id: 5,
              name: 'daryl6.jpg'
            },
            {
              id: 6,
              name: 'daryl7.jpg'
            }
          ],
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
      datetime: '2020-04-23T15:22:00',
      prix: 9.00
    },
    {
      id: 5,
      cinema:
        {
          id: 0,
          nom: 'Dumbledore Ciné',
          adresse: '5 rue Harry Potter',
          ville: 'Poudlard',
          image: 'Exposition-Harry-Potter-Cite-Cinema-1.jpg',
        },
      film:
        {
          id: 1,
          titre: 'Ghost',
          image: 'ghost.jpg',
          duree: {hours: 2, minutes: 6},
          photos: [
            {
              id: 7,
              name: 'ghost1.jpg'
            },
            {
              id: 8,
              name: 'ghost2.jpg'
            },
            {
              id: 9,
              name: 'ghost3.jpg'
            },
            {
              id: 10,
              name: 'ghost4.jpg'
            },
            {
              id: 11,
              name: 'ghost5.jpg'
            },
            {
              id: 12,
              name: 'ghost6.jpg'
            },
            {
              id: 13,
              name: 'ghost7.jpg'
            }
          ],
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
      datetime: '2020-04-23T15:22:00',
      prix: 9.00
    },
    {
      id: 6,
      cinema:
        {
          id: 1,
          nom: 'Simpsons Ciné',
          adresse: '742 Evergreen Terrace',
          ville: 'Springfield',
          image: 'Aztec_Theater.png',
        },
      film:
        {
          id: 0,
          titre: 'D.A.R.Y.L.',
          image: 'daryl.jpg',
          duree: {hours: 1, minutes: 39},
          synopsis: 'Daryl, enfant adopte et heureux, est doué de facultes extraordinaires. Ses qualités surprenantes excitent la convoitise des militaires.',
          photos: [
            {
              id: 0,
              name: 'daryl1.jpg'
            },
            {
              id: 1,
              name: 'daryl2.jpg'
            },
            {
              id: 2,
              name: 'daryl3.jpg'
            },
            {
              id: 3,
              name: 'daryl4.jpg'
            },
            {
              id: 4,
              name: 'daryl5.jpg'
            },
            {
              id: 5,
              name: 'daryl6.jpg'
            },
            {
              id: 6,
              name: 'daryl7.jpg'
            }
          ],
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
      datetime: '2020-04-23T15:22:00',
      prix: 9.00
    },
    {
      id: 7,
      cinema:
        {
          id: 2,
          nom: 'CIA Ciné',
          adresse: '66 rue Big Brother',
          ville: 'Langley',
          image: 'unnamed.jpg',
        },
      film:
        {
          id: 0,
          titre: 'D.A.R.Y.L.',
          image: 'daryl.jpg',
          duree: {hours: 1, minutes: 39},
          photos: [
            {
              id: 0,
              name: 'daryl1.jpg'
            },
            {
              id: 1,
              name: 'daryl2.jpg'
            },
            {
              id: 2,
              name: 'daryl3.jpg'
            },
            {
              id: 3,
              name: 'daryl4.jpg'
            },
            {
              id: 4,
              name: 'daryl5.jpg'
            },
            {
              id: 5,
              name: 'daryl6.jpg'
            },
            {
              id: 6,
              name: 'daryl7.jpg'
            }
          ],
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
      datetime: '2020-04-23T15:22:00',
      prix: 9.00
    },
    {
      id: 8,
      cinema:
        {
          id: 2,
          nom: 'CIA Ciné',
          adresse: '66 rue Big Brother',
          ville: 'Langley',
          image: 'unnamed.jpg',
        },
      film:
        {
          id: 2,
          titre: 'La reine des neiges 2',
          image: 'frozen2.jpg',
          duree: {hours: 1, minutes: 44},
          photos: [
            {
              id: 14,
              name: 'frozen1.jpg'
            },
            {
              id: 15,
              name: 'frozen2.jpg'
            },
            {
              id: 16,
              name: 'frozen3.jpg'
            },
            {
              id: 17,
              name: 'frozen4.jpg'
            },
            {
              id: 18,
              name: 'frozen5.jpg'
            },
            {
              id: 19,
              name: 'frozen6.jpg'
            }
          ],
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
        },
      datetime: '2020-04-23T15:22:00',
      prix: 9.00
    },
    {
      id: 9,
      cinema:
        {
          id: 3,
          nom: 'Ciné de la gare',
          adresse: 'A coté du café de la gare',
          ville: 'Pouêt-Ville-Paumée',
          image: 'photo_cine.jpg'
        },
      film:
        {
          id: 2,
          titre: 'La reine des neiges 2',
          image: 'frozen2.jpg',
          duree: {hours: 1, minutes: 44},
          photos: [
            {
              id: 14,
              name: 'frozen1.jpg'
            },
            {
              id: 15,
              name: 'frozen2.jpg'
            },
            {
              id: 16,
              name: 'frozen3.jpg'
            },
            {
              id: 17,
              name: 'frozen4.jpg'
            },
            {
              id: 18,
              name: 'frozen5.jpg'
            },
            {
              id: 19,
              name: 'frozen6.jpg'
            }
          ],
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
        },
      datetime: '2020-04-12T09:22:00',
      prix: 9.00
    },
  ];
