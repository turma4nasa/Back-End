import * as yup from 'yup'

interface AuthData {
    email:string
    password: string
}

class AuthValidation {
    static async Verify(data:AuthData){
        const authSchema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required()
        })
        try {
            await authSchema.validate(data);
            return {message: 'Success', status: 200}
        } catch(error){
            return {error: 'Unauthorized', status: 401}
        }
    }
}

export { AuthValidation }