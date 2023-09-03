const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getAllMsg = async (req, res) => {
    const msgs = await prisma.chat.findMany();
    res.json(msgs);
}

const createMsg = async (req, res) => {
    const { name,content } = req.body;
    const msg = await prisma.chat.create({
        data: {
            name,
            content
        }
    });
    res.json(msg);
}

module.exports = {getAllMsg,createMsg};