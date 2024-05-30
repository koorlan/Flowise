import { Request, Response, NextFunction } from 'express'
import { getStoragePath } from 'korlan-1-flowise-components'

const getPathForUploads = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const apiResponse = {
            storagePath: getStoragePath()
        }
        return res.json(apiResponse)
    } catch (error) {
        next(error)
    }
}

export default {
    getPathForUploads
}
