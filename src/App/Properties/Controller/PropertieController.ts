import { PropertieService } from "../Service/PropertieService";
import { STATUS_CODE } from "../../../Utils/StatusCode/STATUS_CODE";
import { Request, Response } from "express";


class PropertieController {
    constructor(private service: PropertieService) { }

    async Create(req: Request, res: Response) {
        const {body} = req;

        
        try {

        } catch (error) {
            return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error: 'Erro interno no servidor' });
        }
    }

}

export {PropertieController}