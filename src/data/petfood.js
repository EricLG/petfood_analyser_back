import { getDbPetfoodAnalyser } from '../initDatabase'

const petfoodCollection = 'petfood'

export const getPetfoodByAnimal = async function(animal) {
    const db = await getDbPetfoodAnalyser()

    return await db.collection(petfoodCollection).find({animal: animal}).toArray()
}

export const addPetfood = async function(petfood) {
    const db = await getDbPetfoodAnalyser()

    return await db.collection(petfoodCollection).insert(petfood)
}

export const initCollection = async function(allow) {
    const list =[
        { animal: 'cats', brand: '1ST CHOICE', name: 'Contrôle Du Poids Adulte', foodType: 'Croquettes', ingredients: 'Poulet frais, Farine de poulet, Riz' },
        { animal: 'cats', brand: '1ST CHOICE', name: ' Peau et Pelage Santé Pour Chat Adulte Flocons de Saumon', foodType: 'Croquettes', ingredients: 'Saumon, Gomme de guar, Huile de thon' },
        { animal: 'cats', brand: 'Aatu', name: 'Free Run Chicken (Poulet)', foodType: 'Croquettes', ingredients: 'Poulet, Patate douce, Pois chiches' },
        { animal: 'dogs', brand: '1ST CHOICE', name: 'Croissance miniature', foodType: 'Croquettes', ingredients: 'Poulet déshydraté, Amande d’avoine, Riz de brasserie' },
        { animal: 'dogs', brand: '1ST CHOICE', name: 'Croissance moyennes', foodType: 'Croquettes', ingredients: 'Poulet déshydraté, Amande d’avoine, Riz de brasserie' },
        { animal: 'dogs', brand: 'Aatu', name: 'Aatu', foodType: 'Croquettes', ingredients: 'Saumon, Hareng déshydraté, Patate douce' },
        { animal: 'cats', brand: '1ST CHOICE', name: 'Contrôle Du Poids Adulte', foodType: 'Croquettes', ingredients: 'Poulet frais, Farine de poulet, Riz' },
        { animal: 'cats', brand: '1ST CHOICE', name: ' Peau et Pelage Santé Pour Chat Adulte Flocons de Saumon', foodType: 'Croquettes', ingredients: 'Saumon, Gomme de guar, Huile de thon' },
        { animal: 'cats', brand: 'Aatu', name: 'Free Run Chicken (Poulet)', foodType: 'Croquettes', ingredients: 'Poulet, Patate douce, Pois chiches' },
    ]

    if (allow) {
        const db = await getDbPetfoodAnalyser()

        await db.collection(petfoodCollection).insertMany(list)
    }
}
