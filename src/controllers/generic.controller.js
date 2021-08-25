const boom = require('boom');
const { createTestEmail } = require('./mail.controller');

const genericCrud = (model, relations = {}) => ({
    async get({ params: { id } }, res) {
        try {
            const item = await model.findById(id).populate(relations.get);

            return res.status(200).send(item);
        } catch (err) {
            return res.status(400).send(boom.boomify(err));
        }
    },
    async getAll(_, res) {
        try {
            const items = await model.find().populate(relations.getAll);

            return res.status(200).send(items);
        } catch (err) {
            return res.status(400).send(boom.boomify(err));
        }
    },
    async create({ body }, res) {
        try {
            const item = new model(body);

            await item.save();

            const data = await model.find();
            
            return res.status(200).send([...data]);
        } catch (err) {
            return res.status(400).send(boom.boomify(err));
        }
    },
    async update({ params: { id }, body }, res) {
        try {
            await model.findByIdAndUpdate(id, body, { new: true });

            const data = await model.find();

            return res.status(200).send([...data]);
        } catch (err) {
            return res.status(400).send(boom.boomify(err));
        }
    },
    async delete({ params: { id } }, res) {
        try {
            await model.findByIdAndDelete(id);

            const data = await model.find();

            // createTestEmail(id);
            
            return res.status(200).send([...data]);
        } catch (err) {
            return res.status(400).send(boom.boomify(err));
        }
    },
});

module.exports = genericCrud;