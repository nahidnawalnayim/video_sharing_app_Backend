const asyncHandler = (reqHandler)=>{
    return (req,res,next)=>{
        Promise.resolve((req,res,next)).catch((err)=>{
            next(err)
        })
    }
}
//if server broke for unknown reason,change the export to module.export
export {asyncHandler}