import { connect } from 'mongoose'

export async function startConnection() {
    await connect('mongodb://localhost/mean-gallery',{
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
    console.log('Database is connected');
}