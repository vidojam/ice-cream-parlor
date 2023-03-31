import { client, iceCreamCollection } from'./mongoConnect.js';


const addIceCream = async () => {
  const addTypes = {
    name: "Waffle Cone",
    price: 5, 
    description: "Two scoops of delicious ice cream" ,
  };

  try {
    await client.connect();
    const addedIceCream = await iceCreamCollection.insertOne(addTypes);
    console.log(addedIceCream);
    
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};
 addIceCream()