const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Countries', {
    id:{
      type:DataTypes.STRING,
      primaryKey:true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING
    },
    continent:{
      type:DataTypes.STRING
    },
    capital:{
      type:DataTypes.STRING
    },
    subregion:{
      type:DataTypes.STRING
    },
    area:{
      type:DataTypes.INTEGER
    },
    population:{
      type:DataTypes.INTEGER
    },
    favorite:{
      type:DataTypes.STRING
    }
  },{
    timestamps:false
  });
};


// [ ] País con las siguientes propiedades:
// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población