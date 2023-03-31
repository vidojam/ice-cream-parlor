import { client, iceCreamCollection } from'./mongoConnect.js';

// Add ice cream
const addIceCream = async () => {
  const addTypes = {
    name: "Single Scoop",
    price: 5, 
    description: "Two scoops of delicious ice cream" ,
  };

  try {
    await client.connect();
    const addedIceCream = await iceCreamCollection.insertOne(addTypes);
    console.log(addedIceCream);
    
  } catch (error) {

};
 //addIceCream()

 // Edit ice cream
 const editIceCream = async () => {
  try {
    await client.connect();
    const updateIceCream = await iceCreamCollection.findOneAndUpdate()
      { name: "Grape" };
      { $set: { name: "Sundae", special; true }}
      console.log(updateIceCream)
    } catch (error) {
      console.log(error)
    } finally {
      await client.close()
    } 
  }
};

 // editIceCream()

 // Delete ice cream
 const deleteIceCream = async () => {
  try {
    await client.connect()
    const itemDelete = await iceCreamCollection.deleteOne({ name: "Sundae" });
    console.log(itemDelete);  
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};

 // deleteIceCream()

 // get all ice creams

 const getAllIceCream = async () => {
  
  try {
    await client.connect()
    const allIceCreams = await iceCreamCollection.find().toArray()
    console.log(allIceCreams)

    } catch (error) {
    console.log(error) 
    } finally {
      await client.close()
    }
};

 // getAllIceCream();
