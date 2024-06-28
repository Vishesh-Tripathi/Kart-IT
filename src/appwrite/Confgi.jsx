import { Account, Client, Databases, Storage } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6610046158e1892ebb51');

 export const storage = new Storage(client);
 export const database = new Databases(client);
 export const account = new Account(client);


