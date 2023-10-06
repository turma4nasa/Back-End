import { PropertieService } from "../Service/PropertieService";
import { STATUS_CODE } from "../../../Utils/StatusCode/STATUS_CODE";
import { Request, Response } from "express";
import { PropertieValidation } from "../../../Utils/Validation/Propertie/PropertieValidation";

class PropertieController {
    constructor(private service: PropertieService) { }

    async Create(req: Request, res: Response) {
        const { body, files } = req

        const BodyVerify = await PropertieValidation.Verify(body);
        if (BodyVerify.error) {
            return res.status(BodyVerify.status).json(BodyVerify.error);
        }

        try {
            const Properties = await this.service.CreatePropertie({
                ...body,
                files
            });
            res.status(STATUS_CODE.CREATED).json({ Properties })
        } catch (error) {
            console.log(error)
            return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error: 'Erro interno no servidor' });
        }
    }

}

export { PropertieController }