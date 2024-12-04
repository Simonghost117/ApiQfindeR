const express = require("express");
const dotenv = require("dotenv");
let sequelize = require("./config/database");
const pacienteRouter = require('./routes/pacienteRouter');
const actividadRouter = require('./routes/actividadRouter');
const cuidadorRouter = require('./routes/cuidadorRouter')

require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api',pacienteRouter);
app.use('/api', actividadRouter);
app.use('/api',cuidadorRouter);

const startDB = async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync({ alter: true }); // Sincroniza los modelos con la base de datos
      console.log('Base de datos sincronizada');
  
      app.listen(port, () => {
        console.log(`El servidor se está ejecutando en el puerto ${port}`);
      });
    } catch (e) {
      console.error('Error al conectar la base de datos:', e.message);
      process.exit(1); // Finaliza la ejecución si falla la conexión
    }
  };
  
  startDB();