import { Request, Response } from 'express';
import Toilet from '../models/Toiltet';

export const getToilets = async (req: Request, res: Response) => {
    console.log('getAllLocation work!');

    const query = req.query;

    console.log('query: ', query);

    try {
        let toilets = [];

        if (query) {
            toilets = await Toilet.find({ handicap: query.handicap, free: query.free });
        } else {
            toilets = await Toilet.find();
        }

        res.status(200).json({ message: 'success', data: toilets });
    } catch (error) {
        res.status(500);
    }
};

export const getToilet = async (req: Request, res: Response) => {
    const params = req.params;

    try {
        const toilet = await Toilet.findById(params.id);

        res.status(200).json({ message: 'success', data: toilet });
    } catch (error) {
        console.log(error);
    }
};

export const createLocation = async (req: Request, res: Response) => {
    console.log('createLocation work!');

    const body = req.body;

    console.log('body', body);

    const data = {
        latitude: body.latitude,
        longitude: body.longitude,
        description: body.description
    };

    try {
        const result = await Toilet.create(data);

        console.log('after created', result);

        res.status(201).json({
            message: 'created successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500);
    }
};
