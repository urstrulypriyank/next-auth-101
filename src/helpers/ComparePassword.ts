import bcryptjs from "bcryptjs"
export async function Compare(password: string, UserPassword: string)
{
    const isPasswordSame = await bcryptjs.compare(password, UserPassword)
}