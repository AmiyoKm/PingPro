import { db } from "@/db";
import { router } from "@/server/__internals/router";
import { privateProcedure, publicProcedure } from "@/server/procedures";
import { currentUser } from "@clerk/nextjs/server";


export const authRouter = router({
    getDatabaseSyncStatus :publicProcedure.query(async ({c , ctx})=>{
        const auth = await currentUser();
        if(!auth){
            return c.json({ isSynced : false })
        }

        const user = await db.user.findFirst({
            where : {externalId : auth.id}
        })
        if(!user){
            await db.user.create({
                data : {
                    quotaLimit : 100,
                    email : auth.emailAddresses[0].emailAddress,
                    externalId : auth.id,
                    
                }
            })
            return c.json({ isSynced : true })
        }
        return c.json({ isSynced: true })
    })
})

