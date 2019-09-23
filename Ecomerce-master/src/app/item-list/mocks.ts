import { Item } from "../entities/item.model";

export const ITEMS: Item[] = [{
    'id': 1,
    'name': 'Classic Mead Bottle Valhalla brand 75cl',
    'description': 'Inspired by the mead that '+
        'drunk in ancient times by Great characters like Juilius Caesar.',
    'stock': 5,
    'price': 7.99,
    'img': 'assets/valhalla-classic.jpg',
    'selected':false,
    'quantity': 0,
},
{
    'id': 2,
    'name': '75 cl Bottle of Valhalla Double Honey',
    'description':'It is made from a large amount of natural honey which gives'+
        'it an intense flavor and aroma of honey.',
    'stock': 7,
    'price': 11.99,
    'img': 'assets/double-honey.jpg',
    'selected':false,
    'quantity': 0,
    /*'stockAux':0 vale de las dos maneras sin stockAux y con*/
},
{
    'id': 3,
    'name': '75cl Bottle of Freyja Mead',
    'description': 'Our homage to Freyja one of the elder goddesses of Nordic ' +
        'mythology, goddess of Love, Beauty and Fertility.',
    'stock': 0,
    'price': 11.99,
    'img': 'assets/valhalla-freyja.jpg',
    'selected':false,
    'quantity': 0
},
{
    'id':4,
    'name': '33cl Viking Horn',
    'description': '33cl Viking Horn to drink Mead. '+
        'Viking Horn of a 1/3 liter capacity. Authentic horn to drink mead and feel like a perfect Viking.',
    'stock': 100,
    'price': 13.99,
    'img': 'assets/viking-horn.jpg',
    'selected':false,
    'quantity': 0
},
{
    'id':5,
    'name': '33cl Jug made of buffalo horn',
    'description': '33cl jug made of buffalo horn. To drink like an authentic Viking king !!',
    'stock': 2000,
    'price': 28.98,    
    'img': 'assets/buff-horn.jpg',
    'selected':false,
    'quantity': 0
}];