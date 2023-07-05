const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

async function solicitarCacamba(req, res) {
  if (req.method === 'POST') {
    const { nome, email, telefone, cep, endereco, pontoDeReferencia, motivo } = req.body;

    const databasePath = path.join(process.cwd(), 'database');

    if (!fs.existsSync(databasePath)) {
      mkdirp.sync(databasePath);
    }

    const dados = {
      nome,
      email,
      telefone,
      cep,
      endereco,
      pontoDeReferencia,
      motivo
    };

    const filePath = path.join(databasePath, 'db-cacamba.json');

    try {
      let dadosExistente = [];

      if (fs.existsSync(filePath)) {
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');
        dadosExistente = JSON.parse(fileContent);
      }

      const dadosAtualizados = [...dadosExistente, dados];
      const dadosJSON = JSON.stringify(dadosAtualizados);

      await fs.promises.writeFile(filePath, dadosJSON);

      res.status(200).json({ message: 'Dados salvos com sucesso!' });
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
      res.status(500).json({ error: 'Erro ao salvar os dados.' });
    }
  } else if (req.method === 'GET') {
    const filePath = path.join(process.cwd(), 'database', 'db-cacamba.json');

    try {
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(fileContent);
        res.status(200).json(data);
      } else {
        res.status(200).json([]);
      }
    } catch (error) {
      console.error('Erro ao obter os dados:', error);
      res.status(500).json({ error: 'Erro ao obter os dados.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}

module.exports = solicitarCacamba;
