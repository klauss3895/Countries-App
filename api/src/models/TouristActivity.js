const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('TouristActivity', {
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false, 
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty:{
        type:DataTypes.INTEGER
    },
    duration:{
        type:DataTypes.INTEGER
    },
    temporada:{
        type:DataTypes.ARRAY(DataTypes.STRING)
    }
  },{
    timestamps:false
  });
};

// [ ] Actividad Turística con las siguientes propiedades:
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)