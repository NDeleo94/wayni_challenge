const { messages } = require('../constants/messages');
const { status } = require('../constants/statusCodes');
const { apiResponse } = require('../helpers/apiResponse');
const EntityService = require('../services/entity');

const createEntity = async (req, res) => {
    const entityData = req.body;

    try {
        const entity = await EntityService.createEntity(entityData);

        const response = apiResponse(entity, status.created, messages.created)

        return res.status(status.created).json(response);
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response);
    }
};

const getAllEntities = async (req, res) => {
    try {
        const entities = await EntityService.getAllEntities();

        const response = apiResponse(entities, status.success, messages.success)

        return res.status(status.success).json(response);
    } catch (error) {
        const response = apiResponse(null, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response);
    }
};

const getEntityById = async (req, res) => {
    const entityId = req.params.id;

    try {
        const entity = await EntityService.getEntityById(entityId);

        if (!entity) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response);
        }

        const response = apiResponse(entity, status.success, messages.success)

        return res.status(status.success).json(response);
    } catch (error) {
        const response = apiResponse(null, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response);
    }
};

const getEntityByCode = async (req, res) => {
    const entityId = req.params.code;

    try {
        const entity = await EntityService.getEntityByCode(entityId);

        if (!entity) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response);
        }

        const response = apiResponse(entity, status.success, messages.success)

        return res.status(status.success).json(response);
    } catch (error) {
        const response = apiResponse(null, status.internalServerError, messages.internalServerError)

        return res.status(status.internalServerError).json(response);
    }
};

const updateEntity = async (req, res) => {
    const entityId = req.params.id;
    const entityData = req.body;

    try {
        const entity = await EntityService.updateEntity(entityId, entityData);

        if (!entity) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response);
        }

        const response = apiResponse(entity, status.success, messages.success)

        return res.status(status.success).json(response);
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response);
    }
};

const deleteEntity = async (req, res) => {
    const entityId = req.params.id;

    try {
        const entity = await EntityService.deleteEntity(entityId);

        if (!entity) {
            const response = apiResponse(null, status.notFound, messages.notFound)

            return res.status(status.notFound).json(response);
        }

        const response = apiResponse(entity, status.success, messages.success)

        return res.status(status.success).json(response);
    } catch (error) {
        const response = apiResponse(null, status.badRequest, messages.badRequest)

        return res.status(status.badRequest).json(response);
    }
};

module.exports = {
    getAllEntities,
    getEntityById,
    getEntityByCode,
    createEntity,
    updateEntity,
    deleteEntity,
};