import { Request, Response } from 'express';

export const getAllLocation = (req: Request, res: Response) => {
    console.log('getAllLocation work!');

    const locations = [{
        
    }];

    res.status(200).json({ message: 'success', data: locations });
};
