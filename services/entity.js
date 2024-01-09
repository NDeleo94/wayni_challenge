const Entity = require('../models/entity');

const createEntity = async (data) => {
    try {
        const entity = new Entity(data);
        await entity.save();
        return entity;
    } catch (error) {
        throw error;
    }
};

const getAllEntities = async () => {
    try {
        const entities = await Entity.find();

        return entities;
    } catch (error) {
        throw error;
    }
};


const getEntityById = async (entityId) => {
    try {
        const entity = await Entity.findById(entityId);
        return entity;
    } catch (error) {
        throw error;
    }
};

const getEntityByCode = async (entityCode) => {
    try {
        const entity = await Entity.findOne({ entityCode });
        return entity;
    } catch (error) {
        throw error;
    }
};

const updateEntity = async (entityId, entityData) => {
    try {
        entityData.updated_at = Date.now()

        const entity = await Entity.findByIdAndUpdate(
            entityId,
            entityData,
            {
                new: true
            },
        );
        return entity;
    } catch (error) {
        throw error;
    }
};

const deleteEntity = async (entityId) => {
    try {
        const entity = await Entity.findByIdAndUpdate(
            entityId,
            {
                updated_at: Date.now(),
                deleted_at: Date.now(),
            },
            {
                new: true,
            }
        );
        return entity;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createEntity,
    getEntityById,
    getEntityByCode,
    getAllEntities,
    updateEntity,
    deleteEntity,
};