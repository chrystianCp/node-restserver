
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],        
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio'],      
    },
    img: {
        type: String,        
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true,        
    },
    google: {
        type: Boolean,
        default: false
    },
});


module.exports = model('Usuario', UsuarioSchema );









// {
//     nombre: 'chrys',
//     correo: ';asdkfj65df635a',
//     password: '3s5dd4df3sa',
//     img: 'asdffsadf',
//     rol: 'role_admin',
//     estado: true,
//     google: false,
// }